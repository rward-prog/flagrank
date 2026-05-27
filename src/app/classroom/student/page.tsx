'use client'
import { useState, useEffect, useCallback, useRef, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { COUNTRIES, METRICS, getWorstMetric, getRankColor } from '@/data/countryData'
import CountdownTimer from '@/components/CountdownTimer'
import MetricGrid from '@/components/MetricGrid'
import RankBadge from '@/components/RankBadge'

const TOTAL_ROUNDS = 8
const TIMER_SECONDS = 7

function StudentGame() {
  const params = useSearchParams()
  const router = useRouter()
  const code       = params.get('code') || ''
  const playerName = params.get('name') || 'Player'

  const [roomId, setRoomId]       = useState<string | null>(null)
  const [playerId, setPlayerId]   = useState<string | null>(null)
  const [roomStatus, setRoomStatus] = useState('lobby')
  const [round, setRound]         = useState(0)
  const [countries, setCountries] = useState<typeof COUNTRIES>([])
  const [metrics] = useState(() => {
    const seed = code.split('').reduce((a, c) => a + c.charCodeAt(0), 0)
    return [...METRICS].sort((a, b) => {
      const ha = (seed * a.id.charCodeAt(0)) % 997
      const hb = (seed * b.id.charCodeAt(0)) % 997
      return ha - hb
    }).slice(0, TOTAL_ROUNDS)
  })
  const [picked, setPicked]               = useState(false)
  const [pickedMetricId, setPickedMetricId] = useState<string | null>(null)
  const [timerDeadline, setTimerDeadline] = useState<number | null>(null)
  const [scores, setScores]               = useState<(number | null)[]>(Array(TOTAL_ROUNDS).fill(null))
  const [status, setStatus]               = useState<'joining' | 'lobby' | 'playing' | 'round_result' | 'finished'>('joining')
  const [allPlayers, setAllPlayers]       = useState<any[]>([])
  const timedOutRef = useRef(false)

  // ── Class Cash / name color ───────────────────────────────────────────────
  const [cashAdded, setCashAdded]   = useState(0)
  const [cashLocked, setCashLocked] = useState(false)
  const [myWinnings, setMyWinnings] = useState<{ amount: number; isWinner: boolean } | null>(null)

  const NAME_COLORS: Record<string, string> = {
    blue: '#3b8fe8', green: '#2ecc71', orange: '#e67e22',
    red: '#e74c3c', purple: '#9b59b6', gold: '#d4aa50', pink: '#e91e8c',
  }
  const equippedColor = (() => {
    try { const c = localStorage.getItem('flagrank_namecolor'); return c ? NAME_COLORS[c] : null } catch { return null }
  })()

  const country          = countries[round]
  const availableMetricIds = metrics.slice(round).map(m => m.id)

  // ── Join room ─────────────────────────────────────────────────────────────
  useEffect(() => {
    async function join() {
      const { data: room, error } = await supabase.from('rooms').select('*').eq('code', code).single()
      if (error || !room) return
      setRoomId(room.id)
      const roomCountries = (JSON.parse(room.countries_json || '[]') as string[])
        .map((c: string) => COUNTRIES.find(x => x.code === c)!).filter(Boolean)
      setCountries(roomCountries)
      const { data: player } = await supabase
        .from('players')
        .insert({ room_id: room.id, name: playerName, scores_json: JSON.stringify(Array(TOTAL_ROUNDS).fill(null)) })
        .select().single()
      if (player) setPlayerId(player.id)
      setRoomStatus(room.status)
      setRound(room.current_round || 0)
      if (room.timer_deadline) setTimerDeadline(room.timer_deadline)
      if (room.cash_locked) setCashLocked(true)
      setStatus(room.status === 'lobby' ? 'lobby' : room.status === 'active' ? 'playing' : room.status as any)
    }
    if (code) join()
  }, [code, playerName])

  // ── Subscribe to room + player changes ───────────────────────────────────
  useEffect(() => {
    if (!roomId) return
    const channel = supabase.channel(`student-room-${roomId}`)
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'rooms', filter: `id=eq.${roomId}` }, (payload) => {
        const room = payload.new as any
        setRoomStatus(room.status)
        // Cash winner broadcast
        if (room.cash_winner_json) {
          try {
            const dist = JSON.parse(room.cash_winner_json)
            if (dist[playerName]) setMyWinnings(dist[playerName])
          } catch {}
        }
        if (room.cash_locked) setCashLocked(true)

        if (room.status === 'active' && room.current_round !== round) {
          setRound(room.current_round)
          setPicked(false)
          setPickedMetricId(null)
          timedOutRef.current = false
          setTimerDeadline(room.timer_deadline)
          setStatus('playing')
        } else if (room.status === 'active') {
          setTimerDeadline(room.timer_deadline)
          setStatus('playing')
        } else if (room.status === 'round_result') {
          setStatus('round_result')
          refreshPlayers()
        } else if (room.status === 'finished') {
          setStatus('finished')
          refreshPlayers()
        }
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'players', filter: `room_id=eq.${roomId}` }, refreshPlayers)
      .subscribe()
    return () => { supabase.removeChannel(channel) }
  }, [roomId, round, roomStatus, playerName])

  async function refreshPlayers() {
    if (!roomId) return
    const { data } = await supabase.from('players').select('*').eq('room_id', roomId)
    setAllPlayers(data || [])
  }

  async function submitPick(mId: string, isTimeout = false) {
    if (picked || !playerId) return
    const c = countries[round]
    if (!c) return
    const rank = c.ranks[mId as keyof typeof c.ranks] as number
    const newScores = [...scores]
    newScores[round] = rank
    setScores(newScores)
    setPicked(true)
    setPickedMetricId(mId)
    await supabase.from('players').update({ scores_json: JSON.stringify(newScores) }).eq('id', playerId)
  }

  const handleTimeout = useCallback(() => {
    if (picked || timedOutRef.current) return
    timedOutRef.current = true
    const worst = getWorstMetric(countries[round] || countries[0], availableMetricIds)
    if (worst) submitPick(worst, true)
  }, [picked, countries, round, availableMetricIds])

  // ── Class Cash ────────────────────────────────────────────────────────────
  async function addCash() {
    if (cashLocked || !playerId) return
    const newAmount = cashAdded + 1
    setCashAdded(newAmount)
    await supabase.from('players').update({ cash: newAmount }).eq('id', playerId)
  }

  const CashButton = () => (
    <div className="flex flex-col items-center gap-1">
      <button
        onClick={addCash}
        disabled={cashLocked}
        className="w-full py-3 rounded-xl font-bold text-base transition-all active:scale-95 disabled:opacity-50"
        style={{ background: cashLocked ? '#2a2a3a' : 'linear-gradient(135deg,#27ae60,#2ecc71)', color: '#fff' }}
      >
        {cashLocked ? '🔒 Cash Locked!' : '💰 Add Class Cash!'}
      </button>
      {cashAdded > 0 && (
        <div className="text-sm font-bold" style={{ color: '#2ecc71' }}>
          You've added: ${cashAdded}
        </div>
      )}
    </div>
  )

  // ── Winner overlay ────────────────────────────────────────────────────────
  const WinnerOverlay = () => !myWinnings ? null : (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0f]/97 p-8 text-center">
      <div className="text-7xl mb-4" style={{ animation: 'confettiBurst 0.8s ease forwards' }}>
        {myWinnings.isWinner ? '🎉' : '💰'}
      </div>
      <div className="text-3xl font-bold" style={{ color: '#d4aa50' }}>
        {myWinnings.isWinner ? 'YOU WON!' : 'You got a share!'}
      </div>
      <div className="font-bold my-4" style={{ fontSize: '5rem', color: '#4adf80', fontFamily: 'Georgia, serif', lineHeight: 1 }}>
        ${myWinnings.amount}
      </div>
      <div className="text-xl text-gray-300 mb-2">Class Cash!</div>
      <div className="text-sm text-gray-500 mt-1">Ask Mr. Ward to spend it at the store!</div>
      <button
        onClick={() => setMyWinnings(null)}
        className="mt-6 px-8 py-3 rounded-xl font-bold text-lg transition-all active:scale-95"
        style={{ background: '#d4aa50', color: '#0a0a0f' }}
      >
        Awesome! 🙌
      </button>
    </div>
  )

  // ── Helpers ───────────────────────────────────────────────────────────────
  function getPlayerScore(p: any) {
    try { return (JSON.parse(p.scores_json || '[]') as (number|null)[]).reduce((a: number, b) => a + (b ?? 0), 0) } catch { return 0 }
  }
  const myScore = scores.reduce((a, b) => (a ?? 0) + (b ?? 0), 0) as number
  const sortedPlayers = [...allPlayers].sort((a, b) => getPlayerScore(a) - getPlayerScore(b))

  // ── Screens ───────────────────────────────────────────────────────────────
  if (status === 'joining') return (
    <main className="min-h-screen flex items-center justify-center">
      <WinnerOverlay />
      <div className="text-center text-gray-400">
        <div className="text-4xl mb-4">⏳</div>
        <div>Joining room <span style={{ color: '#d4aa50' }}>{code}</span>...</div>
        <button onClick={() => router.push('/classroom')} className="mt-6 text-sm text-gray-500">← Back</button>
      </div>
    </main>
  )

  if (status === 'lobby') return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <WinnerOverlay />
      <div className="w-full max-w-xs text-center flex flex-col gap-4">
        <div className="text-5xl">🎓</div>
        <div className="text-xl font-bold" style={{ color: equippedColor ?? '#fff' }}>Hi, {playerName}!</div>
        <div className="text-sm text-gray-400">Room <span style={{ color: '#d4aa50' }}>{code}</span> · Waiting for teacher to start...</div>
        <div className="bg-[#14141c] border border-[#2a2a3a] rounded-xl p-4 text-sm text-gray-400">
          Players in room: {allPlayers.length}
        </div>
        <CashButton />
      </div>
    </main>
  )

  if (status === 'playing' && country) {
    const pickedMetric = pickedMetricId ? METRICS.find(m => m.id === pickedMetricId) : null
    const pickedRank   = pickedMetricId ? (country.ranks[pickedMetricId as keyof typeof country.ranks] as number) : null
    return (
      <main className="min-h-screen flex flex-col items-center px-4 py-6">
        <WinnerOverlay />
        <div className="w-full max-w-sm flex flex-col gap-4">
          <div className="flex justify-between text-sm text-gray-400">
            <span>Round {round + 1}/{TOTAL_ROUNDS}</span>
            <span style={{ color: '#d4aa50' }}>Score: {myScore}</span>
          </div>
          {!picked && timerDeadline && (
            <CountdownTimer duration={TIMER_SECONDS} onExpire={handleTimeout} running serverDeadline={timerDeadline ?? undefined} />
          )}
          <div className="bg-[#14141c] border border-[#2a2a3a] rounded-xl p-6 text-center">
            <div style={{ fontSize: '5rem', lineHeight: 1 }}>{country.flag}</div>
            <div className="text-xl font-semibold mt-2">{country.name}</div>
          </div>
          {!picked ? (
            <MetricGrid availableIds={availableMetricIds} onPick={(id: string) => submitPick(id)} disabled={false} />
          ) : (
            <div className="bg-[#14141c] border border-[#2a2a3a] rounded-xl p-5 flex flex-col items-center gap-3 animate-slide-up">
              {pickedMetric && <div className="text-gray-400 text-sm">{pickedMetric.icon} {pickedMetric.name}</div>}
              {pickedRank !== null && <RankBadge rank={pickedRank} />}
              <div className="text-sm text-gray-500">Waiting for teacher...</div>
            </div>
          )}
          <CashButton />
        </div>
      </main>
    )
  }

  if (status === 'round_result') return (
    <main className="min-h-screen flex flex-col items-center px-4 py-6">
      <WinnerOverlay />
      <div className="w-full max-w-sm flex flex-col gap-4">
        <div className="text-center text-sm text-gray-400">Round {round + 1} Results</div>
        {country && (
          <div className="bg-[#14141c] border border-[#2a2a3a] rounded-xl p-4 text-center">
            <div className="text-5xl mb-1">{country.flag}</div>
            <div className="text-sm text-gray-300">{country.name}</div>
          </div>
        )}
        <div className="bg-[#14141c] border border-[#2a2a3a] rounded-xl overflow-hidden">
          <div className="px-4 py-3 border-b border-[#2a2a3a] text-xs uppercase tracking-widest text-gray-500">Running Totals</div>
          {sortedPlayers.map((p, i) => {
            const total = getPlayerScore(p)
            const roundScore = (JSON.parse(p.scores_json || '[]') as (number|null)[])[round]
            return (
              <div key={p.id} className={`leaderboard-row flex justify-between items-center px-4 py-2 text-sm ${p.id === playerId ? 'bg-[#d4aa50]/10' : ''}`}>
                <span>
                  <span className="text-gray-400 mr-2">#{i+1}</span>
                  <span className="font-semibold" style={{ color: p.id === playerId ? (equippedColor ?? '#d4aa50') : '#fff' }}>{p.name}</span>
                </span>
                <div className="flex gap-2">
                  {roundScore !== null && <span className="text-xs" style={{ color: getRankColor(roundScore) }}>+#{roundScore}</span>}
                  <span className="font-bold">{total}</span>
                </div>
              </div>
            )
          })}
        </div>
        <div className="text-center text-sm text-gray-500">Waiting for teacher...</div>
        <CashButton />
      </div>
    </main>
  )

  // Finished
  const myPosition = sortedPlayers.findIndex(p => p.id === playerId) + 1
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <WinnerOverlay />
      <div className="w-full max-w-sm flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center" style={{ color: '#d4aa50' }}>🏆 Game Over!</h2>
        <div className="text-center">
          <div className="text-5xl font-bold mb-1" style={{ color: '#d4aa50' }}>{myScore}</div>
          <div className="text-sm text-gray-400">#{myPosition} of {sortedPlayers.length} players</div>
        </div>
        <div className="bg-[#14141c] border border-[#2a2a3a] rounded-xl overflow-hidden">
          {sortedPlayers.map((p, i) => (
            <div key={p.id} className={`leaderboard-row flex justify-between items-center px-4 py-2 text-sm ${p.id === playerId ? 'bg-[#d4aa50]/10' : ''}`}>
              <span>
                <span className="text-gray-400 mr-2">#{i+1}</span>
                <span className="font-semibold" style={{ color: p.id === playerId ? (equippedColor ?? '#d4aa50') : '#fff' }}>{p.name}</span>
              </span>
              <span className="font-bold">{getPlayerScore(p)}</span>
            </div>
          ))}
        </div>
        <CashButton />
        <button onClick={() => router.push('/')} className="w-full py-3 rounded-xl border border-[#2a2a3a] text-gray-300 hover:border-[#d4aa50] transition-all">
          Back to Home
        </button>
      </div>
    </main>
  )
}

export default function StudentPage() {
  return <Suspense><StudentGame /></Suspense>
}
