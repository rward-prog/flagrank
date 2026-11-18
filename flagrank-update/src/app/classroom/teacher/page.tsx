'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { getRandomCountries, getRandomMetrics, getRankColor, METRICS } from '@/data/countryData'

const TOTAL_ROUNDS = 8
const TIMER_SECONDS = 7

function genCode() {
  const words = ['TIGER','COBRA','EAGLE','SHARK','PANDA','STORM','RIVER','BLAZE','FROST','ORBIT']
  const w = words[Math.floor(Math.random() * words.length)]
  return w + String(Math.floor(10 + Math.random() * 90))
}

type GamePhase = 'lobby' | 'playing' | 'roundResult' | 'final'

export default function TeacherPage() {
  const router = useRouter()
  const [roomId, setRoomId]     = useState<string | null>(null)
  const [roomCode, setRoomCode] = useState('')
  const [players, setPlayers]   = useState<any[]>([])
  const [phase, setPhase]       = useState<GamePhase>('lobby')
  const [round, setRound]       = useState(0)
  const [countries]             = useState(() => getRandomCountries(TOTAL_ROUNDS, true))
  const [metrics]               = useState(() => getRandomMetrics(TOTAL_ROUNDS))
  const [creating, setCreating] = useState(false)
  const [timerEnd, setTimerEnd] = useState<number | null>(null)
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS)
  const timerRef  = useRef<NodeJS.Timeout | null>(null)
  const wheelRef  = useRef<NodeJS.Timeout | null>(null)

  // ── Class Cash state ─────────────────────────────────────────────────────
  const [cashTotal, setCashTotal]           = useState(0)
  const [cashLocked, setCashLocked]         = useState(false)
  const [wheelVisible, setWheelVisible]     = useState(false)
  const [wheelDisplay, setWheelDisplay]     = useState('')
  const [wheelWinner, setWheelWinner]       = useState('')
  const [wheelAmount, setWheelAmount]       = useState(0)
  const [wheelDone, setWheelDone]           = useState(false)

  const country  = countries[round]
  const metricId = metrics[round]?.id
  const availableMetricIds = metrics.slice(round).map(m => m.id)

  async function createRoom() {
    setCreating(true)
    const code = genCode()
    const { data, error } = await supabase
      .from('rooms')
      .insert({ code, status: 'lobby', current_round: 0, countries_json: JSON.stringify(countries.map(c => c.code)), host_id: crypto.randomUUID() })
      .select().single()
    if (error || !data) { console.error(error); setCreating(false); return }
    setRoomId(data.id)
    setRoomCode(code)
    setCreating(false)
  }

  async function refreshPlayers() {
    const { data } = await supabase.from('players').select('*').eq('room_id', roomId)
    setPlayers(data || [])
    const total = (data || []).reduce((a: number, p: any) => a + (p.cash || 0), 0)
    setCashTotal(total)
  }

  useEffect(() => {
    if (!roomId) return
    refreshPlayers()
    const ch = supabase.channel(`teacher-${roomId}`)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'players', filter: `room_id=eq.${roomId}` }, refreshPlayers)
      .subscribe()
    return () => { supabase.removeChannel(ch) }
  }, [roomId])

  function startCountdown(deadline: number) {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      const left = Math.max(0, (deadline - Date.now()) / 1000)
      setTimeLeft(left)
      if (left <= 0) clearInterval(timerRef.current!)
    }, 200)
  }

  async function startGame() {
    if (!roomId) return
    const deadline = Date.now() + TIMER_SECONDS * 1000
    await supabase.from('rooms').update({ status: 'active', current_round: 0, timer_deadline: deadline }).eq('id', roomId)
    setTimerEnd(deadline)
    setPhase('playing')
    startCountdown(deadline)
  }

  async function showRoundResults() {
    if (!roomId) return
    if (timerRef.current) clearInterval(timerRef.current)
    await supabase.from('rooms').update({ status: 'round_result' }).eq('id', roomId)
    await refreshPlayers()
    setPhase('roundResult')
  }

  async function nextRound() {
    if (!roomId) return
    const nextR = round + 1
    if (nextR >= TOTAL_ROUNDS) {
      await supabase.from('rooms').update({ status: 'finished' }).eq('id', roomId)
      const { data: fp } = await supabase.from('players').select('*').eq('room_id', roomId)
      if (fp) {
        for (const p of fp) {
          const scores: number[] = JSON.parse(p.scores_json || '[]')
          const total = scores.reduce((a: number, b: number) => a + b, 0)
          if (total > 0) await supabase.from('classroom_highscores').insert({ name: p.name, total_score: total, room_code: roomCode })
        }
      }
      setPhase('final')
      await refreshPlayers()
    } else {
      const deadline = Date.now() + TIMER_SECONDS * 1000
      await supabase.from('rooms').update({ current_round: nextR, timer_deadline: deadline }).eq('id', roomId)
      setRound(nextR)
      setPhase('playing')
      startCountdown(deadline)
    }
  }

  useEffect(() => () => {
    if (timerRef.current) clearInterval(timerRef.current)
    if (wheelRef.current) clearTimeout(wheelRef.current)
  }, [])

  // ── Class Cash functions ──────────────────────────────────────────────────
  async function awardCash() {
    if (!roomId || cashTotal === 0 || players.length === 0) return
    await supabase.from('rooms').update({ cash_locked: true }).eq('id', roomId)
    setCashLocked(true)
    setWheelAmount(cashTotal)
    setWheelDone(false)
    setWheelWinner('')
    setWheelVisible(true)
    spinWheel(cashTotal)
  }

  function spinWheel(amount: number) {
    const names = players.map((p: any) => p.name)
    if (!names.length) return
    const winner = names[Math.floor(Math.random() * names.length)]
    setWheelWinner(winner)
    let i = 0
    const totalSpins = 38 + Math.floor(Math.random() * 10)
    function flicker() {
      if (i >= totalSpins) {
        setWheelDisplay(winner)
        setWheelDone(true)
        return
      }
      setWheelDisplay(names[Math.floor(Math.random() * names.length)])
      i++
      const delay = 40 + Math.pow(i / totalSpins, 2.5) * 240
      wheelRef.current = setTimeout(flicker, delay)
    }
    flicker()
  }

  async function sendWinner() {
    if (!roomId || !wheelWinner) return
    const winnerCut = Math.round(wheelAmount * 0.5)
    const remaining = wheelAmount - winnerCut
    const others = players.filter((p: any) => p.name !== wheelWinner)
    const dist: Record<string, { amount: number; isWinner: boolean }> = {}
    dist[wheelWinner] = { amount: winnerCut, isWinner: true }
    if (others.length > 0 && remaining > 0) {
      const weights = others.map(() => 0.3 + Math.random())
      const weightSum = weights.reduce((a, b) => a + b, 0)
      let distributed = 0
      others.forEach((p: any, i: number) => {
        const amt = i === others.length - 1
          ? Math.max(1, remaining - distributed)
          : Math.max(1, Math.round((weights[i] / weightSum) * remaining))
        distributed += amt
        dist[p.name] = { amount: amt, isWinner: false }
      })
    }
    await supabase.from('rooms').update({ cash_winner_json: JSON.stringify(dist) }).eq('id', roomId)
    setWheelVisible(false)
  }

  // ── Helpers ───────────────────────────────────────────────────────────────
  function getPlayerScore(p: any) {
    try { return (JSON.parse(p.scores_json || '[]') as number[]).reduce((a, b) => a + b, 0) } catch { return 0 }
  }
  function getRoundScore(p: any, r: number) {
    try { return (JSON.parse(p.scores_json || '[]') as number[])[r] ?? null } catch { return null }
  }
  const sortedPlayers = [...players].sort((a, b) => getPlayerScore(a) - getPlayerScore(b))

  // ── Cash award button (shown in all game phases) ─────────────────────────
  const CashBar = () => cashTotal > 0 ? (
    <button
      onClick={awardCash}
      disabled={cashLocked}
      className="w-full py-3 rounded-xl font-bold text-base transition-all active:scale-95 disabled:opacity-50"
      style={{ background: 'linear-gradient(135deg,#27ae60,#2ecc71)', color: '#fff' }}
    >
      💰 Award {cashTotal} Class Cash! {cashLocked && '🔒'}
    </button>
  ) : null

  // ── Wheel overlay ─────────────────────────────────────────────────────────
  const WheelOverlay = () => !wheelVisible ? null : (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0f]/97 p-8 text-center">
      <div className="text-2xl font-bold mb-6" style={{ color: '#d4aa50' }}>💰 ${wheelAmount} Class Cash</div>
      <div
        className="text-5xl font-bold my-4 transition-all"
        style={{
          color: wheelDone ? '#4adf80' : '#d4aa50',
          fontFamily: 'Georgia, serif',
          transform: wheelDone ? 'scale(1.15)' : 'scale(1)',
          transition: 'all 0.3s',
        }}
      >
        {wheelDisplay || '...'}
      </div>
      {wheelDone && (
        <div className="flex flex-col items-center gap-4 mt-4 animate-slide-up">
          <div className="text-xl text-gray-300">🎉 {wheelWinner} wins 50% (${Math.round(wheelAmount * 0.5)})!</div>
          <div className="text-sm text-gray-500">Other players share the rest</div>
          <button
            onClick={sendWinner}
            className="w-full max-w-xs py-4 rounded-xl font-bold text-lg"
            style={{ background: '#4adf80', color: '#0a0a0f' }}
          >
            Send the Cash! 🚀
          </button>
          <button onClick={() => { setWheelDone(false); spinWheel(wheelAmount) }} className="text-sm text-gray-500">
            Re-spin
          </button>
        </div>
      )}
    </div>
  )

  // ── Render ─────────────────────────────────────────────────────────────────
  if (!roomId) return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-sm flex flex-col gap-6 text-center">
        <h2 className="text-2xl font-bold" style={{ color: '#d4aa50' }}>Create Classroom Room</h2>
        <button onClick={createRoom} disabled={creating} className="w-full py-4 rounded-xl font-bold text-lg transition-all active:scale-95 disabled:opacity-40" style={{ background: '#d4aa50', color: '#0a0a0f' }}>
          {creating ? 'Creating...' : 'Create Room'}
        </button>
        <button onClick={() => router.push('/classroom')} className="text-sm text-gray-500">← Back</button>
      </div>
    </main>
  )

  if (phase === 'lobby') return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="w-full max-w-sm flex flex-col gap-6">
        <div className="text-center">
          <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">Room Code</div>
          <div className="text-5xl font-bold tracking-[0.2em]" style={{ color: '#d4aa50' }}>{roomCode}</div>
          <div className="text-sm text-gray-400 mt-2">Show this on the projector</div>
        </div>
        <div className="bg-[#14141c] border border-[#2a2a3a] rounded-xl p-4">
          <div className="text-sm text-gray-400 mb-3">{players.length} student{players.length !== 1 ? 's' : ''} joined</div>
          {players.map((p: any) => <div key={p.id} className="text-sm text-white py-1">• {p.name}</div>)}
          {players.length === 0 && <div className="text-gray-600 text-sm">Waiting for students...</div>}
        </div>
        <button onClick={startGame} disabled={players.length === 0} className="w-full py-4 rounded-xl font-bold text-lg transition-all active:scale-95 disabled:opacity-40" style={{ background: '#d4aa50', color: '#0a0a0f' }}>
          Start Game ({players.length} players)
        </button>
      </div>
    </main>
  )

  if (phase === 'playing') return (
    <main className="min-h-screen flex flex-col items-center px-4 py-6">
      <WheelOverlay />
      <div className="w-full max-w-sm flex flex-col gap-4">
        <div className="flex justify-between text-sm text-gray-400">
          <span>Round {round + 1}/{TOTAL_ROUNDS}</span>
          <span style={{ color: '#d4aa50' }}>Teacher View</span>
        </div>
        <div className="w-full">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-400">Time</span>
            <span className="font-bold tabular-nums" style={{ color: timeLeft < 3 ? '#e04040' : '#d4aa50' }}>{Math.ceil(timeLeft)}s</span>
          </div>
          <div className="w-full h-2 rounded-full bg-[#2a2a3a]">
            <div className="h-full rounded-full" style={{ width: `${(timeLeft / TIMER_SECONDS) * 100}%`, background: timeLeft < 3 ? '#e04040' : '#d4aa50', transition: 'width 0.2s linear' }} />
          </div>
        </div>
        <div className="bg-[#14141c] border border-[#2a2a3a] rounded-xl p-6 text-center">
          <div style={{ fontSize: '5rem', lineHeight: 1 }}>{country.flag}</div>
          <div className="text-xl font-semibold mt-2">{country.name}</div>
        </div>
        <div className="bg-[#14141c] border border-[#2a2a3a] rounded-xl p-4 text-sm text-gray-400">
          Students are picking… {players.length} players
        </div>
        <button onClick={showRoundResults} className="w-full py-3 rounded-xl border border-[#d4aa50] font-semibold" style={{ color: '#d4aa50' }}>
          Show Results Now →
        </button>
        <CashBar />
      </div>
    </main>
  )

  if (phase === 'roundResult') return (
    <main className="min-h-screen flex flex-col items-center px-4 py-6">
      <WheelOverlay />
      <div className="w-full max-w-sm flex flex-col gap-4">
        <div className="text-center text-sm text-gray-400">Round {round + 1} Results</div>
        <div className="bg-[#14141c] border border-[#2a2a3a] rounded-xl overflow-hidden">
          <div className="px-4 py-3 border-b border-[#2a2a3a] text-xs uppercase tracking-widest text-gray-500">
            {country.flag} {country.name} · Running Total
          </div>
          {sortedPlayers.map((p: any, i: number) => {
            const total = getPlayerScore(p)
            const roundScore = getRoundScore(p, round)
            return (
              <div key={p.id} className="leaderboard-row flex justify-between items-center px-4 py-2 text-sm">
                <span className="text-gray-300">#{i+1} <span className="font-semibold text-white ml-1">{p.name}</span></span>
                <div className="flex gap-3 items-center">
                  {roundScore !== null && <span className="text-xs" style={{ color: getRankColor(roundScore) }}>+#{roundScore}</span>}
                  <span className="font-bold" style={{ color: '#d4aa50' }}>{total}</span>
                </div>
              </div>
            )
          })}
        </div>
        <button onClick={nextRound} className="w-full py-4 rounded-xl font-bold text-lg transition-all active:scale-95" style={{ background: '#d4aa50', color: '#0a0a0f' }}>
          {round + 1 < TOTAL_ROUNDS ? 'Next Round →' : 'Final Results'}
        </button>
        <CashBar />
      </div>
    </main>
  )

  // Final
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <WheelOverlay />
      <div className="w-full max-w-sm flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center" style={{ color: '#d4aa50' }}>🏆 Final Results</h2>
        <div className="bg-[#14141c] border border-[#2a2a3a] rounded-xl overflow-hidden">
          <div className="px-4 py-3 border-b border-[#2a2a3a] text-xs uppercase tracking-widest text-gray-500">Leaderboard</div>
          {sortedPlayers.map((p: any, i: number) => {
            const total = getPlayerScore(p)
            return (
              <div key={p.id} className={`leaderboard-row flex justify-between items-center px-4 py-3 text-sm ${i === 0 ? 'bg-[#d4aa50]/10' : ''}`}>
                <span><span className="text-gray-400 mr-2">#{i+1}</span><span className="font-bold text-white">{p.name}</span></span>
                <span className="font-bold text-xl" style={{ color: i === 0 ? '#d4aa50' : '#fff' }}>{total}</span>
              </div>
            )
          })}
        </div>
        <ClassroomHighScores />
        <CashBar />
        <button onClick={() => router.push('/')} className="w-full py-3 rounded-xl border border-[#2a2a3a] text-gray-300 hover:border-[#d4aa50] transition-all">
          Back to Home
        </button>
      </div>
    </main>
  )
}

function ClassroomHighScores() {
  const [scores, setScores] = useState<any[]>([])
  useEffect(() => {
    supabase.from('classroom_highscores').select('*').order('total_score', { ascending: true }).limit(10).then(({ data }) => setScores(data || []))
  }, [])
  return (
    <div className="bg-[#14141c] border border-[#2a2a3a] rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-[#2a2a3a] text-xs uppercase tracking-widest" style={{ color: '#d4aa50' }}>🌍 All-Time Records</div>
      {scores.length === 0
        ? <div className="text-gray-600 text-sm text-center py-4">No records yet</div>
        : scores.map((s, i) => (
          <div key={s.id} className="leaderboard-row flex justify-between items-center px-4 py-2 text-sm">
            <span className="text-gray-400">#{i+1} <span className="text-white font-bold ml-1">{s.name}</span></span>
            <span className="font-bold" style={{ color: '#d4aa50' }}>{s.total_score}</span>
          </div>
        ))
      }
    </div>
  )
}
