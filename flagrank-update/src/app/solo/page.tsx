'use client'
import { useState, useCallback, Suspense, useEffect, useRef } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import {
  COUNTRIES, getRandomCountries, getRandomMetrics,
  getWorstMetric, getRankColor, getRankLabel, getGrade, METRICS
} from '@/data/countryData'
import { supabase } from '@/lib/supabase'
import CountdownTimer from '@/components/CountdownTimer'
import StreakBurst from '@/components/StreakBurst'
import RankOneBurst from '@/components/RankOneBurst'
import SadBurst from '@/components/SadBurst'

const TOTAL_ROUNDS = 8
const TIMER_SECONDS = 15

// Metrics where rank #1 = bad for the world
const NEGATIVE_METRICS = new Set(['co2','co2pc','mosquito','sharks','venomous','military','milshare','temp'])

function statsKey(mode: string) { return `flagrank_stats_${mode}` }
function lbKey(mode: string)    { return `flagrank_lb_${mode}` }

function getStats(mode: string): { scores: number[]; best: number | null; average: number | null } {
  try {
    return JSON.parse(localStorage.getItem(statsKey(mode)) || 'null') ?? { scores: [], best: null, average: null }
  } catch { return { scores: [], best: null, average: null } }
}

function recordScore(mode: string, score: number, reverse: boolean, blitz = false) {
  try {
    const s = getStats(mode)
    s.scores.push(score)
    s.best = s.best == null ? score : reverse ? Math.max(s.best, score) : Math.min(s.best, score)
    s.average = s.scores.reduce((a, b) => a + b, 0) / s.scores.length
    localStorage.setItem(statsKey(mode), JSON.stringify(s))
    // Award Class Cash. Reverse: 1 per point over 450 (hard grind). Normal: 1 per point under 250, Easy −25%.
    if (reverse && score > 200) {
      const earned = Math.floor((score - 200) * 0.25)
      const current = parseInt(localStorage.getItem('flagrank_classcash') || '0', 10)
      localStorage.setItem('flagrank_classcash', String(current + earned))
    } else if (!reverse && score < 250) {
      const base = 250 - score
      const earned = Math.floor((mode.includes('hard') || blitz) ? base : base * 0.75)
      const current = parseInt(localStorage.getItem('flagrank_classcash') || '0', 10)
      localStorage.setItem('flagrank_classcash', String(current + earned))
    }
    const lb: { name: string; score: number }[] = JSON.parse(localStorage.getItem(lbKey(mode)) || '[]')
    return lb
  } catch { return [] }
}

async function saveToLeaderboard(mode: string, name: string, score: number) {
  try {
    const nameColor = typeof window !== 'undefined' ? (localStorage.getItem('flagrank_namecolor') ?? null) : null
    await supabase.from('solo_scores').insert({ name, score, mode, name_color: nameColor })
  } catch {}
}

async function fetchLeaderboard(mode: string, reverse: boolean, limit = 1000, since?: string): Promise<{ name: string; score: number; name_color?: string }[]> {
  try {
    let q = supabase.from('solo_scores').select('name, score, name_color').eq('mode', mode).order('score', { ascending: !reverse }).limit(limit)
    if (since) q = q.gte('played_at', since)
    const { data } = await q
    return data ?? []
  } catch { return [] }
}

function periodStart(p: 'today' | 'week' | 'month' | 'all') {
  if (p === 'all') return undefined
  const d = new Date()
  if (p === 'today') { d.setHours(0,0,0,0); return d.toISOString() }
  if (p === 'week')  { d.setDate(d.getDate() - 7); return d.toISOString() }
  if (p === 'month') { d.setDate(1); d.setHours(0,0,0,0); return d.toISOString() }
}

function getReverseGrade(score: number) {
  if (score >= 600) return { label: 'Legendary!', color: '#4adf80' }
  if (score >= 400) return { label: 'Expert',     color: '#d4aa50' }
  if (score >= 200) return { label: 'Good',        color: '#e08040' }
  if (score >= 100) return { label: 'Average',     color: '#e08040' }
  return                    { label: 'Try Again',  color: '#e04040' }
}

function getMetricLabel(rank: number, metricId: string, reverse: boolean) {
  if (reverse) {
    if (rank >= 100) return '💥 Epic!'
    if (rank >= 50)  return 'Excellent'
    if (rank >= 20)  return 'Good'
    if (rank >= 5)   return 'Average'
    return 'Poor Pick'
  }
  const base = getRankLabel(rank)
  if (NEGATIVE_METRICS.has(metricId) && rank <= 30) return base + ' 😬'
  return base
}

const NAME_COLORS: Record<string, string> = {
  blue: '#3b8fe8', green: '#2ecc71', orange: '#e67e22',
  red: '#e74c3c', purple: '#9b59b6', gold: '#d4aa50', pink: '#e91e8c',
}

type LbEntry = { name: string; score: number; name_color?: string }

const COLOR_MAP: Record<string, string> = {
  blue: '#3b8fe8', green: '#2ecc71', orange: '#e67e22',
  red: '#e74c3c', purple: '#9b59b6', gold: '#d4aa50', pink: '#e91e8c',
}

function EndLeaderboard({ mode, playerScore, isReverse, playerName }: { mode: string; playerScore: number; isReverse: boolean; playerName: string }) {
  const [allTime,  setAllTime]  = useState<LbEntry[]>([])
  const [today,    setToday]    = useState<LbEntry[]>([])
  const [week,     setWeek]     = useState<LbEntry[]>([])
  const [loading,  setLoading]  = useState(true)
  const [showWeek, setShowWeek] = useState(false)

  const myRowRef      = useRef<HTMLDivElement>(null)
  const scrollRef     = useRef<HTMLDivElement>(null)
  const todayRowRef   = useRef<HTMLDivElement>(null)
  const todayScrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    Promise.all([
      fetchLeaderboard(mode, isReverse, 1000),
      fetchLeaderboard(mode, isReverse, 50, periodStart('today')),
    ]).then(([all, day]) => { setAllTime(all); setToday(day); setLoading(false) })
  }, [mode, isReverse])

  // Load week on demand
  useEffect(() => {
    if (!showWeek || week.length > 0) return
    fetchLeaderboard(mode, isReverse, 50, periodStart('week')).then(setWeek)
  }, [showWeek, mode, isReverse])

  function autoScroll(rowRef: React.RefObject<HTMLDivElement | null>, boxRef: React.RefObject<HTMLDivElement | null>) {
    if (!rowRef.current || !boxRef.current) return
    const row = rowRef.current, box = boxRef.current
    const rowRect = row.getBoundingClientRect()
    const boxRect = box.getBoundingClientRect()
    const relativeTop = rowRect.top - boxRect.top + box.scrollTop
    box.scrollTop = Math.max(0, relativeTop - row.clientHeight * 4)
  }

  useEffect(() => { if (!loading) autoScroll(myRowRef, scrollRef) }, [loading])
  useEffect(() => { if (!loading) autoScroll(todayRowRef, todayScrollRef) }, [loading])

  const myIdx      = allTime.findIndex(e => e.name === playerName && e.score === playerScore)
  const myPos      = myIdx + 1
  const todayIdx   = today.findIndex(e => e.name === playerName && e.score === playerScore)

  function Row({ entry, i, isMe, rowRef }: { entry: LbEntry; i: number; isMe: boolean; rowRef?: React.RefObject<HTMLDivElement | null> }) {
    const dbColor    = entry.name_color ? COLOR_MAP[entry.name_color] : undefined
    const localColor = isMe ? (() => { try { const c = localStorage.getItem('flagrank_namecolor'); return c ? COLOR_MAP[c] : undefined } catch { return undefined } })() : undefined
    const nameCol    = dbColor ?? localColor ?? (isMe ? '#d4aa50' : '#fff')
    return (
      <div
        ref={rowRef}
        className="leaderboard-row flex justify-between items-center px-3 py-1.5 text-sm"
        style={{ background: isMe ? 'rgba(212,170,80,0.12)' : undefined, borderLeft: isMe ? '3px solid #d4aa50' : '3px solid transparent' }}
      >
        <span>
          <span className="text-gray-500 text-xs mr-1.5">#{i + 1}</span>
          <span className="font-bold" style={{ color: nameCol }}>{entry.name}</span>
          {isMe && <span className="text-[10px] text-gray-500 ml-1">← you</span>}
        </span>
        <span className="font-bold" style={{ color: isMe ? nameCol : getRankColor(entry.score) }}>{entry.score}</span>
      </div>
    )
  }

  if (loading) return (
    <div className="bg-[#14141c] border border-[#2a2a3a] rounded-xl p-4 text-center text-gray-600 text-xs">Loading leaderboard...</div>
  )

  return (
    <div className="flex flex-col gap-3">

      {/* ALL-TIME */}
      <div className="bg-[#14141c] border border-[#2a2a3a] rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#2a2a3a]" style={{ background: 'rgba(212,170,80,0.07)' }}>
          <div className="text-xs font-bold uppercase tracking-widest" style={{ color: '#d4aa50' }}>🏆 All-Time</div>
          {myPos > 0 && <div className="text-sm font-bold" style={{ color: '#d4aa50' }}>You: #{myPos} of {allTime.length}</div>}
        </div>
        <div ref={scrollRef} style={{ maxHeight: '240px', overflowY: 'auto' }}>
          {allTime.length === 0
            ? <div className="text-center text-gray-600 text-xs py-4">No scores yet</div>
            : allTime.map((entry, i) => (
              <Row key={i} entry={entry} i={i} isMe={i === myIdx} rowRef={i === myIdx ? myRowRef : undefined} />
            ))
          }
        </div>
      </div>

      {/* TODAY */}
      <div className="bg-[#14141c] border border-[#2a2a3a] rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#2a2a3a]" style={{ background: 'rgba(74,223,128,0.07)' }}>
          <div className="text-xs font-bold uppercase tracking-widest" style={{ color: '#4adf80' }}>☀️ Today's Top 50</div>
          {todayIdx >= 0 && <div className="text-xs font-bold" style={{ color: '#4adf80' }}>You: #{todayIdx + 1}</div>}
        </div>
        <div ref={todayScrollRef} style={{ maxHeight: '180px', overflowY: 'auto' }}>
          {today.length === 0
            ? <div className="text-center text-gray-600 text-xs py-4">No scores today yet</div>
            : today.map((entry, i) => {
              const isMe = i === todayIdx
              return <Row key={i} entry={entry} i={i} isMe={isMe} rowRef={isMe ? todayRowRef : undefined} />
            })
          }
        </div>
      </div>

      {/* THIS WEEK — toggle */}
      <button
        onClick={() => setShowWeek(v => !v)}
        className="w-full py-2.5 rounded-xl border font-bold text-sm transition-all"
        style={{ borderColor: '#3b8fe8', color: '#3b8fe8', background: showWeek ? 'rgba(59,143,232,0.1)' : 'transparent' }}
      >
        📅 {showWeek ? 'Hide' : 'Show'} This Week's Top 50
      </button>
      {showWeek && (
        <div className="bg-[#14141c] border border-[#2a2a3a] rounded-xl overflow-hidden">
          <div className="px-4 py-2.5 border-b border-[#2a2a3a]" style={{ background: 'rgba(59,143,232,0.07)' }}>
            <div className="text-xs font-bold uppercase tracking-widest" style={{ color: '#3b8fe8' }}>📅 This Week's Top 50</div>
          </div>
          <div style={{ maxHeight: '180px', overflowY: 'auto' }}>
            {week.length === 0
              ? <div className="text-center text-gray-600 text-xs py-4">Loading...</div>
              : week.map((entry, i) => {
                const isMe = entry.name === playerName && entry.score === playerScore
                return <Row key={i} entry={entry} i={i} isMe={isMe} />
              })
            }
          </div>
        </div>
      )}

    </div>
  )
}

interface PickRecord { metricId: string; rank: number; countryCode: string }
type Phase = 'playing' | 'picked' | 'end'

function SoloGame() {
  const params = useSearchParams()
  const router = useRouter()
  const playerName = params.get('name') || 'AAA'
  const mode       = (params.get('mode') || 'easy') as string
  const isReverse  = mode.includes('reverse')
  const isHard     = mode.includes('hard')
  const isBlitz    = mode.includes('blitz')
  const TIMER_SECS = isBlitz ? 5 : TIMER_SECONDS

  const [countries, setCountries] = useState(() => getRandomCountries(TOTAL_ROUNDS))
  const [gameMetrics]  = useState(() => getRandomMetrics(TOTAL_ROUNDS))
  const [round, setRound]           = useState(0)
  const [phase, setPhase]           = useState<Phase>('playing')
  const [picks, setPicks]           = useState<PickRecord[]>([])
  const [currentFact, setCurrentFact] = useState<string | null>(null)
  const [timedOut, setTimedOut]     = useState(false)
  const [rerolls, setRerolls]       = useState(0)
  const [streak, setStreak]         = useState(0)
  const [showStreak, setShowStreak]     = useState(false)
  const [showRankOne, setShowRankOne]   = useState(false)
  const [sadMessage, setSadMessage]     = useState<string | undefined>(undefined)
  const [showSad, setShowSad]           = useState(false)
  const [timerKey, setTimerKey]     = useState(0)
  const [currentCountry, setCurrentCountry] = useState(countries[0])
  const [lbPosition, setLbPosition] = useState<number | null>(null)
  const [justPickedId, setJustPickedId] = useState<string | null>(null)
  const [stats, setStats] = useState<{ best: number | null; average: number | null }>({ best: null, average: null })

  useEffect(() => {
    const s = getStats(mode)
    setStats({ best: s.best, average: s.average ? Math.round(s.average) : null })
  }, [mode])

  const country = currentCountry
  const usedIds = picks.map(p => p.metricId)
  const availableIds = gameMetrics.map(m => m.id).filter(id => !usedIds.includes(id))
  const totalScore = picks.reduce((a, p) => a + p.rank, 0)
  const grade = isReverse
    ? (totalScore === 0 ? { label: 'Go!', color: '#aaa' } : getReverseGrade(totalScore))
    : (totalScore === 0 ? { label: 'Perfect!', color: '#4adf80' } : getGrade(totalScore))

  // Streak: top-10 pick in normal; rank ≥ 80 in reverse
  const isStreakWorthy = (rank: number) => isReverse ? rank >= 80 : rank <= 10

  // Heat glow based on streak
  const heatColor = streak === 0 ? undefined
    : streak === 1 ? '#e08040'
    : '#e04040'
  const heatShadow = streak === 0 ? undefined
    : streak === 1 ? '0 0 20px rgba(224,128,64,0.35)'
    : '0 0 30px rgba(224,64,64,0.55), 0 0 60px rgba(224,64,64,0.25)'

  const handlePick = useCallback((metricId: string, isTimeout = false) => {
    if (phase !== 'playing') return
    const rank = (country.ranks[metricId as keyof typeof country.ranks] as number) ?? 150
    // Metric-specific fact lookup
    const factsObj = country.facts as unknown as Record<string, string>
    const fact = rank <= 20 ? (factsObj[metricId] ?? null) : null

    setPicks(prev => [...prev, { metricId, rank, countryCode: country.code }])
    setCurrentFact(fact)
    setTimedOut(isTimeout)
    setJustPickedId(metricId)

    const newStreak = isStreakWorthy(rank) ? streak + 1 : 0
    setStreak(newStreak)
    if (newStreak > 0 && newStreak % 3 === 0) {
      setRerolls(r => r + 1)
      setShowStreak(true)
    }
    if (!isBlitz) {
      if (!isReverse && rank === 1) setShowRankOne(true)
      if (isReverse && rank === 1) { setSadMessage('RANK #1?!'); setShowSad(true) }
      if (!isReverse && rank >= 100) { setSadMessage('WORST PICK!'); setShowSad(true) }
    }
    setPhase('picked')
  }, [phase, country, streak, isReverse])

  const handleTimeout = useCallback(() => {
    if (phase !== 'playing') return
    if (isReverse) {
      // In reverse, timeout = assign lowest-ranking metric (worst pick)
      let worst: string | null = null
      let lowestRank = Infinity
      for (const id of availableIds) {
        const r = country.ranks[id as keyof typeof country.ranks] as number
        if (r < lowestRank) { lowestRank = r; worst = id }
      }
      if (worst) handlePick(worst, true)
    } else {
      const worst = getWorstMetric(country, availableIds)
      if (worst) handlePick(worst, true)
    }
  }, [phase, country, availableIds, handlePick, isReverse])

  async function handleNext() {
    setShowStreak(false)
    setShowRankOne(false)
    setShowSad(false)
    const nextRound = round + 1
    if (nextRound >= TOTAL_ROUNDS) {
      const finalScore = picks.reduce((a, p) => a + p.rank, 0)
      recordScore(mode, finalScore, isReverse, isBlitz)
      // Save score first so leaderboard is accurate when end screen fetches it
      try { await saveToLeaderboard(mode, playerName, finalScore) } catch {}
      setPhase('end')
      const s = getStats(mode)
      setStats({ best: s.best, average: s.average ? Math.round(s.average) : null })
    } else {
      setRound(nextRound)
      setCurrentCountry(countries[nextRound])
      setCurrentFact(null)
      setTimedOut(false)
      setJustPickedId(null)
      setTimerKey(k => k + 1)
      setPhase('playing')
    }
  }

  function handleReroll() {
    if (rerolls <= 0 || phase !== 'playing') return
    // Pull from full pool minus all committed countries (no duplicates ever)
    const committedCodes = new Set(countries.map(c => c.code))
    const pool = COUNTRIES.filter(c => !committedCodes.has(c.code))
    if (pool.length === 0) return
    const newCountry = pool[Math.floor(Math.random() * pool.length)]
    const newCountries = [...countries]
    newCountries[round] = newCountry
    setCountries(newCountries)
    setCurrentCountry(newCountry)
    setRerolls(r => r - 1)
    setTimerKey(k => k + 1)
  }

  // ── End screen ────────────────────────────────────────────────────────────
  if (phase === 'end') {
    const finalGrade = isReverse ? getReverseGrade(totalScore) : getGrade(totalScore)
    const finalScore = picks.reduce((a, p) => a + p.rank, 0)
    const equippedColor = (() => {
      try { const c = localStorage.getItem('flagrank_namecolor'); return c ? NAME_COLORS[c] : null } catch { return null }
    })()
    const classCash = parseInt(localStorage.getItem('flagrank_classcash') || '0', 10)

    // Find a country+metric combo whose rank matches the player's leaderboard position
    const lb: { name: string; score: number }[] = (() => {
      try { return JSON.parse(localStorage.getItem(lbKey(mode)) || '[]') } catch { return [] }
    })()
    const myLbPos = lb.findIndex(e => e.score === finalScore) + 1
    const lbComparison = (() => {
      if (!myLbPos || myLbPos > 10) return null
      // Find a country that has rank === myLbPos for some metric
      for (const c of COUNTRIES) {
        for (const m of METRICS) {
          const r = (c.ranks as Record<string, number>)[m.id]
          if (r === myLbPos) return { country: c, metric: m }
        }
      }
      return null
    })()

    return (
      <main className="min-h-screen flex flex-col px-3 py-5 gap-4 max-w-lg mx-auto overflow-y-auto">

        {/* Score + grade + placement — top strip */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="text-8xl font-bold leading-none" style={{ color: finalGrade.color, fontFamily: 'Georgia, serif' }}>
              {totalScore}
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold uppercase tracking-wide leading-tight" style={{ color: finalGrade.color }}>
                {finalGrade.label}
              </div>
              <div className="text-xs text-gray-600 leading-tight">
                {isReverse ? 'higher is better' : 'lower is better'}
              </div>
            </div>
          </div>

          {/* Placement callout — large */}
          {myLbPos > 0 && myLbPos <= 10 && (
            <div className="mt-3 rounded-xl py-3 px-4" style={{ background: 'rgba(212,170,80,0.1)', border: '1.5px solid rgba(212,170,80,0.4)' }}>
              <div className="text-2xl font-bold" style={{ color: '#d4aa50' }}>
                🏆 #{myLbPos} on the leaderboard!
              </div>
              {lbComparison && (
                <div className="text-base text-gray-200 mt-1">
                  That's like {lbComparison.country.flag} <strong>{lbComparison.country.name}</strong> in {lbComparison.metric.icon} {lbComparison.metric.name}!
                </div>
              )}
            </div>
          )}

          {/* Class Cash */}
          {!isReverse && finalScore < 250 && (
            <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-bold" style={{ background: 'rgba(212,170,80,0.15)', color: '#d4aa50' }}>
              💰 +{Math.floor((isHard || isBlitz) ? (250 - finalScore) : (250 - finalScore) * 0.75)} Class Cash earned!
              {!isHard && !isBlitz && <span className="font-normal opacity-70 ml-1">(Easy −25%)</span>}
              {isBlitz && <span className="font-normal opacity-70 ml-1">(Blitz — full rate!)</span>}
            </div>
          )}
          {isReverse && finalScore > 200 && (
            <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-bold" style={{ background: 'rgba(212,170,80,0.15)', color: '#d4aa50' }}>
              💰 +{Math.floor((finalScore - 200) * 0.25)} Class Cash earned!
            </div>
          )}
        </div>

        {/* Two-panel row — picks left, leaderboard right */}
        <div className="grid grid-cols-2 gap-2 flex-1">

          {/* My picks */}
          <div className="bg-[#14141c] border border-[#2a2a3a] rounded-xl overflow-hidden flex flex-col">
            <div className="px-3 py-2 border-b border-[#2a2a3a] text-xs font-bold uppercase tracking-widest text-gray-400">
              My Picks
            </div>
            {picks.map((pick, i) => {
              const m = METRICS.find(m => m.id === pick.metricId)!
              const c = countries.find(c => c.code === pick.countryCode)!
              return (
                <div key={i} className="leaderboard-row flex items-center justify-between px-2 py-2 gap-1">
                  <span className="text-lg flex-shrink-0">{c?.flag}</span>
                  <span className="text-xs text-gray-300 flex-1 truncate">{m?.icon} {m?.name}</span>
                  <div className="flex flex-col items-end flex-shrink-0">
                    <span className="text-sm font-bold leading-tight" style={{ color: getRankColor(pick.rank) }}>#{pick.rank}</span>
                    <span className="text-[9px] font-semibold uppercase leading-tight" style={{ color: getRankColor(pick.rank) }}>
                      {getMetricLabel(pick.rank, pick.metricId, isReverse)}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Leaderboard — shared across all players via Supabase */}
          <EndLeaderboard mode={mode} playerScore={finalScore} isReverse={isReverse} playerName={playerName} />
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => { window.location.href = `/solo?mode=${mode}&name=${playerName}` }}
            className="flex-1 py-4 rounded-xl font-bold text-lg transition-all active:scale-95"
            style={{ background: '#d4aa50', color: '#0a0a0f' }}
          >
            Play Again
          </button>
          <button
            onClick={() => { window.location.href = '/' }}
            className="py-4 px-5 rounded-xl font-bold text-sm border border-[#2a2a3a] text-gray-300 transition-all"
          >
            Menu
          </button>
        </div>
        <button onClick={() => router.push('/store')} className="w-full py-3 rounded-xl font-bold text-sm border transition-all active:scale-95" style={{ borderColor: '#2ecc71', color: '#2ecc71', background: 'rgba(46,204,113,0.08)' }}>
          💰 Class Cash Store {classCash > 0 ? `— $${classCash} to spend` : ''}
        </button>
      </main>
    )
  }

  // ── Main game ──────────────────────────────────────────────────────────────
  const currentPick = phase === 'picked' ? picks[picks.length - 1] : null
  const currentPickMetric = currentPick ? METRICS.find(m => m.id === currentPick.metricId) : null

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-5">
      <StreakBurst show={showStreak} onDone={() => setShowStreak(false)} />
      <RankOneBurst show={showRankOne} onDone={() => setShowRankOne(false)} />
      <SadBurst show={showSad} message={sadMessage} onDone={() => setShowSad(false)} />
      <div className="w-full max-w-sm flex flex-col gap-3">

        {/* Header */}
        <div className="flex justify-between items-center text-sm">
          <button onClick={() => router.push('/')} className="text-gray-500 hover:text-white">← Exit</button>
          <span className="text-gray-400">
            Round {round + 1}/{TOTAL_ROUNDS}
            {isReverse && <span className="ml-1 text-[#e08040]">⟳ Reverse</span>}
          </span>
          <span className="text-xs text-gray-600 uppercase tracking-widest">
            {isHard ? '🔥 Hard' : '🌟 Easy'}
          </span>
        </div>

        {/* Score */}
        <div
          className="text-center py-1 rounded-xl transition-all duration-500"
          style={{ boxShadow: heatShadow }}
        >
          <div
            className="text-8xl font-bold tabular-nums leading-none transition-all duration-500"
            style={{ color: heatColor ?? grade.color, fontFamily: 'Georgia, serif' }}
          >
            {totalScore}
          </div>
          <div className="text-lg font-bold uppercase tracking-widest mt-1 transition-all duration-500" style={{ color: heatColor ?? grade.color }}>
            {grade.label}
          </div>
          <div className="text-xs text-gray-600 mt-0.5">{isReverse ? 'higher is better' : 'lower is better'}</div>

          {/* All-time stats */}
          {(stats.best != null || stats.average != null) && (
            <div className="flex justify-center gap-4 mt-1.5 text-xs text-gray-500">
              {stats.best != null && <span>All-time best: <span className="text-gray-300 font-semibold">{stats.best}</span></span>}
              {stats.average != null && <span>Your avg: <span className="text-gray-300 font-semibold">{stats.average}</span></span>}
            </div>
          )}

          {/* Streak heat indicator */}
          {streak === 1 && <div className="text-sm mt-1" style={{ color: '#e08040' }}>🔥 Getting hot...</div>}
          {streak === 2 && <div className="text-sm font-bold mt-1" style={{ color: '#e04040' }}>🔥🔥 One more for a Reroll!</div>}
        </div>

        {/* Timer */}
        {phase === 'playing' && (
          <CountdownTimer key={timerKey} duration={TIMER_SECS} onExpire={handleTimeout} running />
        )}

        {/* Reroll — full-width prominent button */}
        {rerolls > 0 && phase === 'playing' && (
          <button
            onClick={handleReroll}
            className="w-full py-2.5 rounded-xl font-bold text-sm transition-all active:scale-95"
            style={{ border: '2px solid #d4aa50', color: '#d4aa50', background: 'rgba(212,170,80,0.1)' }}
          >
            🔀 Reroll — swap this flag for a different country ({rerolls} left)
          </button>
        )}

        {/* Flag / Reveal area */}
        <div className="bg-[#14141c]/90 border border-[#2a2a3a] rounded-xl p-5 flex flex-col items-center gap-3 backdrop-blur-sm" style={{ minHeight: 148 }}>
          {phase === 'picked' && currentPick && currentPickMetric ? (
            <div className="w-full flex flex-col gap-3 animate-slide-up">
              {/* Flag + country name + metric picked — always shown */}
              <div className="flex items-center gap-3">
                <span className="text-4xl leading-none">{country.flag}</span>
                <div>
                  <div className="font-bold text-white">{country.name}</div>
                  <div className="text-xs text-gray-400">{currentPickMetric.icon} {currentPickMetric.name}</div>
                </div>
              </div>

              {/* Big rank + judgment */}
              <div className="flex items-center justify-between">
                <div
                  className="flex items-end gap-2"
                  style={{ animation: 'rankReveal 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards' }}
                >
                  <span className="text-5xl font-bold leading-none" style={{ color: getRankColor(currentPick.rank) }}>
                    #{currentPick.rank}
                  </span>
                  <span className="text-sm font-bold uppercase tracking-wide pb-1" style={{ color: getRankColor(currentPick.rank) }}>
                    {getMetricLabel(currentPick.rank, currentPick.metricId, isReverse)}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500 uppercase tracking-widest">Total</div>
                  <div className="text-2xl font-bold" style={{ color: grade.color }}>{totalScore}</div>
                </div>
              </div>

              {/* Negative metric callout */}
              {NEGATIVE_METRICS.has(currentPick.metricId) && currentPick.rank <= 20 && !isReverse && (
                <div className="text-xs text-gray-400 italic">
                  ⚠️ Good for your score, not so great for the planet...
                </div>
              )}

              {/* Fun fact */}
              {currentFact && (
                <div className="fact-card text-sm text-gray-200 text-left">💡 {currentFact}</div>
              )}

              {timedOut && <div className="text-xs text-[#e04040]">⏰ Time's up — {isReverse ? 'best' : 'worst'} metric auto-assigned</div>}

              <button
                onClick={handleNext}
                className="w-full py-2.5 rounded-xl font-bold text-sm transition-all active:scale-95"
                style={{ background: '#d4aa50', color: '#0a0a0f' }}
              >
                {round + 1 < TOTAL_ROUNDS ? 'Next Flag →' : 'See Results'}
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 justify-center flex-1">
              <div style={{ fontSize: '5.5rem', lineHeight: 1 }}>{country.flag}</div>
              {!isHard && <div className="text-lg font-semibold text-white">{country.name}</div>}
              {isHard  && <div className="text-xs text-gray-500 italic">Flag only mode — guess the country!</div>}
              {isReverse && <div className="text-xs mt-1 font-semibold" style={{ color: '#e08040' }}>⟳ Pick the HIGHEST rank!</div>}
            </div>
          )}
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 gap-2">
          {gameMetrics.map(metric => {
            const pick = picks.find(p => p.metricId === metric.id)
            const isJustPicked = metric.id === justPickedId && phase === 'picked'
            const isActive = !pick && phase === 'playing'
            return (
              <button
                key={metric.id}
                disabled={!isActive}
                onClick={() => isActive && handlePick(metric.id)}
                className="metric-btn flex items-center gap-2"
                style={{ opacity: pick ? 0.45 : 1, cursor: isActive ? 'pointer' : 'default' }}
              >
                <span className="text-xl flex-shrink-0">{metric.icon}</span>
                <div className="flex-1 min-w-0 text-left">
                  <div className="text-sm font-bold text-white truncate">{metric.name}</div>
                  <div className="text-xs text-gray-400 truncate">{metric.desc}</div>
                </div>
                {pick && (
                  <div
                    className="flex flex-col items-end flex-shrink-0"
                    style={{ animation: isJustPicked ? 'rankReveal 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards' : 'none' }}
                  >
                    <span className="text-sm font-bold leading-tight" style={{ color: getRankColor(pick.rank) }}>
                      #{pick.rank}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wide leading-tight" style={{ color: getRankColor(pick.rank) }}>
                      {getMetricLabel(pick.rank, pick.metricId, isReverse)}
                    </span>
                  </div>
                )}
              </button>
            )
          })}
        </div>

        {/* Score trail */}
        {picks.length > 0 && (
          <div className="flex flex-wrap gap-1 justify-center">
            {picks.map((p, i) => (
              <span key={i} className="text-xs px-2 py-0.5 rounded-full" style={{ background: getRankColor(p.rank) + '33', color: getRankColor(p.rank) }}>
                #{p.rank}
              </span>
            ))}
          </div>
        )}

      </div>
    </main>
  )
}

export default function SoloPage() {
  return <Suspense><SoloGame /></Suspense>
}
