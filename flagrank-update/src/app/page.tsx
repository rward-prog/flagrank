'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import FlagBackground from '@/components/FlagBackground'
import { supabase } from '@/lib/supabase'

export default function Home() {
  const router = useRouter()
  const [initials, setInitials] = useState('')
  const [diff, setDiff] = useState<'easy' | 'hard'>('easy')
  const [reverse, setReverse] = useState(false)
  const [blitz, setBlitz]     = useState(false)
  const [showLB, setShowLB]     = useState(false)
  const [lbPeriod, setLbPeriod] = useState<'all' | 'week' | 'today'>('all')
  const [lb, setLb]             = useState<{name:string,score:number}[]>([])
  const [classCash, setClassCash]     = useState(0)
  const [showCashModal, setShowCashModal] = useState(false)
  const [nameColor, setNameColor]     = useState<string | null>(null)
  const [visitors, setVisitors]       = useState<number | null>(null)

  const NAME_COLORS: Record<string, string> = {
    blue: '#3b8fe8', green: '#2ecc71', orange: '#e67e22',
    red: '#e74c3c', purple: '#9b59b6', gold: '#d4aa50', pink: '#e91e8c',
  }

  const blitzAllowed = diff === 'easy' && !reverse
  const mode = diff + (reverse ? '-reverse' : '') + (blitz && blitzAllowed ? '-blitz' : '')
  useEffect(() => {
    if (!showLB) return
    let q = supabase.from('solo_scores').select('name, score').eq('mode', mode).order('score', { ascending: !reverse }).limit(10)
    if (lbPeriod === 'today') {
      const today = new Date(); today.setHours(0,0,0,0)
      q = q.gte('played_at', today.toISOString())
    } else if (lbPeriod === 'week') {
      const week = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
      q = q.gte('played_at', week.toISOString())
    }
    q.then(({ data }) => setLb(data ?? []))
  }, [showLB, mode, reverse, lbPeriod])

  useEffect(() => {
    setCash(parseInt(localStorage.getItem('flagrank_classcash') || '0', 10))
    setNameColor(localStorage.getItem('flagrank_namecolor'))
    // Log visit and get total count
    supabase.from('visitors').insert({}).then(() => {
      supabase.from('visitors').select('*', { count: 'exact', head: true }).then(({ count }) => {
        setVisitors(count)
      })
    })
  }, [])

  function setCash(n: number) { setClassCash(n) }

  const BLOCKED = new Set(['KKK','NZI','SS','NSM','WPP','ANP'])

  function handlePlay() {
    const name = initials.toUpperCase().replace(/[^A-Z]/g, '').slice(0, 3)
    if (name.length < 1) return
    if (BLOCKED.has(name)) { setInitials(''); return }
    router.push(`/solo?mode=${mode}&name=${name}`)
  }

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
      <FlagBackground />

      <div className="relative z-10 w-full max-w-sm flex flex-col items-center gap-6">

        {/* Logo */}
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight" style={{ color: '#d4aa50', fontFamily: 'Georgia, serif' }}>
            🌍 FLAGRANK
          </h1>
          <p className="text-gray-400 mt-1 text-sm tracking-widest uppercase">The World Rankings Game</p>
        </div>

        {/* Class Cash balance */}
        {classCash > 0 && (
          <button
            onClick={() => setShowCashModal(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition-all active:scale-95 animate-pulse-gold"
            style={{ background: 'rgba(212,170,80,0.15)', border: '1.5px solid #d4aa50', color: '#d4aa50' }}
          >
            💰 {classCash} Class Cash
          </button>
        )}

        {/* Class Cash modal */}
        {showCashModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60" onClick={() => setShowCashModal(false)}>
            <div className="bg-[#14141c] border border-[#d4aa50] rounded-2xl p-7 max-w-xs w-full text-center shadow-2xl" onClick={e => e.stopPropagation()}>
              <div className="text-5xl mb-3">💰</div>
              <div className="text-2xl font-bold mb-1" style={{ color: '#d4aa50' }}>{classCash} Class Cash</div>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                To spend your Class Cash, go to the <strong style={{ color: '#d4aa50' }}>Class Cash Store</strong>.
              </p>
              <div className="flex flex-col gap-2">
                <button onClick={() => { setShowCashModal(false); router.push('/store') }} className="w-full py-3 rounded-xl font-bold text-sm" style={{ background: '#d4aa50', color: '#0a0a0f' }}>
                  🛍️ Go to the Store
                </button>
                <button onClick={() => setShowCashModal(false)} className="w-full py-2 rounded-xl text-sm text-gray-500 border border-[#2a2a3a]">
                  Not now
                </button>
              </div>
            </div>
          </div>
        )}

        {/* How to play */}
        <div className="w-full bg-[#14141c]/90 border border-[#2a2a3a] rounded-xl p-4 text-sm text-gray-300 space-y-1 backdrop-blur-sm">
          <p>🚩 A country flag appears each round</p>
          <p>📊 Pick a metric you think ranks it best</p>
          <p>🏆 Lowest total score after 8 rounds wins</p>
          <p className="text-xs text-gray-500 pt-1">Rank #1 = best in the world · Perfect score = 8</p>
        </div>

        {/* Difficulty */}
        <div className="w-full">
          <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Difficulty</div>
          <div className="grid grid-cols-2 gap-2">
            {(['easy', 'hard'] as const).map(m => (
              <button
                key={m}
                onClick={() => setDiff(m)}
                className="py-3 rounded-xl border font-semibold transition-all"
                style={{
                  background: diff === m ? '#d4aa50' : '#14141c',
                  color: diff === m ? '#0a0a0f' : '#aaa',
                  borderColor: diff === m ? '#d4aa50' : '#2a2a3a',
                }}
              >
                {m === 'easy' ? '🌟 Easy' : '🔥 Hard'}
                <div className="text-xs font-normal opacity-70">{m === 'easy' ? 'Name shown' : 'Flag only'}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Reverse mode toggle */}
        <button
          onClick={() => setReverse(v => !v)}
          className="w-full py-2.5 rounded-xl border font-semibold text-sm transition-all"
          style={{
            background: reverse ? 'rgba(224,128,64,0.15)' : '#14141c',
            borderColor: reverse ? '#e08040' : '#2a2a3a',
            color: reverse ? '#e08040' : '#666',
          }}
        >
          ⟳ Reverse Mode {reverse ? '(ON — pick HIGHEST rank!)' : '(OFF)'}
        </button>

        {/* Cash criteria info */}
        <div className="w-full text-xs text-gray-500 bg-[#14141c]/80 border border-[#2a2a3a] rounded-xl px-4 py-3 space-y-0.5">
          <div className="font-semibold text-gray-400 mb-1">💰 Class Cash earned when you win:</div>
          <div>• <span className="text-gray-300">Easy:</span> 1 cash per point under 250 (−25% penalty)</div>
          <div>• <span className="text-gray-300">Hard / Blitz:</span> 1 cash per point under 250 (full rate)</div>
          <div>• <span className="text-gray-300">Reverse:</span> 0.25 cash per point over 200</div>
        </div>

        {/* Blitz mode toggle — Easy only */}
        {diff === 'easy' && !reverse ? (
          <button
            onClick={() => setBlitz(v => !v)}
            className="w-full py-2.5 rounded-xl border font-semibold text-sm transition-all"
            style={{
              background: blitz ? 'rgba(224,64,64,0.15)' : '#14141c',
              borderColor: blitz ? '#e04040' : '#2a2a3a',
              color: blitz ? '#e04040' : '#666',
            }}
          >
            ⚡ Blitz Mode {blitz ? '(ON — 5 second timer!)' : '(OFF)'}
          </button>
        ) : (
          <div
            className="w-full py-2.5 rounded-xl border font-semibold text-sm text-center"
            style={{ borderColor: '#1e1e2a', color: '#333', background: '#0f0f18' }}
          >
            ⚡ Blitz Mode — <span style={{ color: '#444' }}>Easy only · Coming soon for other modes</span>
          </div>
        )}

        {/* Initials */}
        <div className="w-full">
          <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Your initials (A–Z)</div>
          <input
            type="text"
            maxLength={3}
            value={initials}
            onChange={e => setInitials(e.target.value.toUpperCase().replace(/[^A-Z]/g, ''))}
            placeholder="AAA"
            className="w-full text-center text-2xl font-bold tracking-[0.5em] py-3 rounded-xl bg-[#14141c] border border-[#2a2a3a] focus:outline-none focus:border-[#d4aa50]"
            style={{ color: nameColor ? NAME_COLORS[nameColor] : '#fff' }}
          />
        </div>

        {/* Play */}
        <button
          onClick={handlePlay}
          disabled={initials.length === 0}
          className="w-full py-4 rounded-xl text-lg font-bold transition-all active:scale-95 disabled:opacity-40"
          style={{ background: '#d4aa50', color: '#0a0a0f' }}
        >
          Play Solo
        </button>

        {/* Classroom */}
        <button
          onClick={() => router.push('/classroom')}
          className="w-full py-3 rounded-xl border border-[#2a2a3a] text-gray-300 hover:border-[#d4aa50] transition-all text-sm bg-[#14141c]/80 backdrop-blur-sm"
        >
          🏫 Classroom Mode
        </button>

        {/* Cross-game link */}
        <a
          href="https://yearquest-robmwards-projects.vercel.app"
          className="w-full text-center py-3 rounded-xl border border-[#2a2a3a] text-sm transition-all hover:border-[#d4aa50] bg-[#14141c]/80"
          style={{ color: '#888', display: 'block' }}
        >
          ⏳ Also play YEARQUEST →
        </a>

        {/* Leaderboard */}
        <button onClick={() => setShowLB(v => !v)} className="text-sm text-[#d4aa50] underline underline-offset-2">
          {showLB ? 'Hide' : 'View'} Leaderboard ({diff}{reverse ? ' reverse' : ''})
        </button>

        {showLB && (
          <div className="w-full bg-[#14141c]/95 border border-[#2a2a3a] rounded-xl overflow-hidden animate-slide-up backdrop-blur-sm">
            <div className="flex border-b border-[#2a2a3a]">
              {(['all', 'week', 'today'] as const).map(p => (
                <button key={p} onClick={() => setLbPeriod(p)}
                  className="flex-1 py-2 text-xs font-bold uppercase tracking-widest transition-all"
                  style={{ color: lbPeriod === p ? '#d4aa50' : '#555', background: lbPeriod === p ? 'rgba(212,170,80,0.1)' : 'transparent' }}>
                  {p === 'all' ? '🏆 All Time' : p === 'week' ? '📅 This Week' : '☀️ Today'}
                </button>
              ))}
            </div>
            {lb.length === 0
              ? <p className="text-center text-gray-500 text-sm py-6">No scores yet — be the first!</p>
              : lb.slice(0, 10).map((entry, i) => {
                const isMe = entry.name === initials.toUpperCase()
                const color = isMe && nameColor ? NAME_COLORS[nameColor] : '#fff'
                return (
                  <div key={i} className="leaderboard-row flex justify-between items-center px-4 py-2 text-sm">
                    <span className="text-gray-400">#{i+1} <span className="font-bold ml-1" style={{ color }}>{entry.name}</span></span>
                    <span className="font-bold" style={{ color: '#d4aa50' }}>{entry.score}</span>
                  </div>
                )
              })
            }
          </div>
        )}
        {/* Old-school visitor counter */}
        {visitors !== null && (
          <div className="text-center mt-2">
            <div
              className="inline-block px-3 py-1.5 text-xs font-mono"
              style={{
                background: '#000',
                color: '#00ff00',
                border: '2px inset #888',
                borderRadius: '2px',
                letterSpacing: '0.1em',
                boxShadow: 'inset 0 0 6px rgba(0,255,0,0.3)',
                fontFamily: 'monospace',
              }}
            >
              👁 YOU ARE VISITOR #{visitors.toLocaleString()}
            </div>
          </div>
        )}
        {/* About the data */}
        <details className="mt-6 text-xs text-gray-400 max-w-md mx-auto">
          <summary className="cursor-pointer text-center">About the data</summary>
          <div className="mt-2 space-y-2 text-left">
            <p>
              The ranks in some older categories are estimates. These categories were worked out from
              published numbers, ranked among the countries that have data. Countries with no data are
              never shown in a category.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Time Zones: Wikipedia, List of time zones by country. Overseas territories count.</li>
              <li>Land Neighbors: Wikipedia, List of countries and territories by land and maritime borders. Main territories only.</li>
              <li>Renewable Power (2024) and Solar and Wind Power (2024): Ember (2026) and other sources, through Our World in Data.</li>
              <li>CO2 Per Person (2024): Global Carbon Budget (2026), through Our World in Data.</li>
              <li>Fresh Water (2022): AQUASTAT, FAO, through the World Bank and Our World in Data.</li>
              <li>Military Budget (2025): Stockholm International Peace Research Institute (2026), through Our World in Data.</li>
              <li>Tiny Country and Small Population: worked out from the Land Area and Population ranks.</li>
            </ul>
          </div>
        </details>
      </div>
    </main>
  )
}
