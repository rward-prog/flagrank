'use client'
import { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import FlagBackground from '@/components/FlagBackground'

const COLORS = [
  { id: 'blue',   label: 'Blue',   hex: '#3b8fe8', cost: 25,   emoji: '🔵' },
  { id: 'green',  label: 'Green',  hex: '#2ecc71', cost: 100,  emoji: '🟢' },
  { id: 'orange', label: 'Orange', hex: '#e67e22', cost: 300,  emoji: '🟠' },
  { id: 'red',    label: 'Red',    hex: '#e74c3c', cost: 800,  emoji: '🔴' },
  { id: 'purple', label: 'Purple', hex: '#9b59b6', cost: 1200, emoji: '🟣' },
  { id: 'gold',   label: 'Gold',   hex: '#d4aa50', cost: 1600, emoji: '⭐' },
  { id: 'pink',   label: 'Pink',   hex: '#e91e8c', cost: 2800, emoji: '🩷' },
]

function CashRain({ rainKey }: { rainKey: number }) {
  const SYMBOLS = ['💰', '💵', '💸', '🤑', '💴']
  const particles = useMemo(() =>
    Array.from({ length: 40 }, (_, i) => ({
      left:     2 + Math.random() * 96,
      delay:    Math.random() * 2.5,
      duration: 4.5 + Math.random() * 3,
      size:     1.4 + Math.random() * 1.4,
      symbol:   SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
    })),
    [rainKey]
  )

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {particles.map((p, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            left: `${p.left}%`,
            top: '-60px',
            fontSize: `${p.size}rem`,
            animation: `cashFall ${p.duration}s ease-in ${p.delay}s forwards`,
            display: 'block',
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  )
}

export default function StorePage() {
  const router = useRouter()
  const [cash, setCash]         = useState(0)
  const [owned, setOwned]       = useState<string[]>([])
  const [equipped, setEquipped] = useState<string | null>(null)
  const [rainKey, setRainKey]   = useState(0)
  const [raining, setRaining]   = useState(false)

  useEffect(() => {
    setCash(parseInt(localStorage.getItem('flagrank_classcash') || '0', 10))
    setOwned(JSON.parse(localStorage.getItem('flagrank_owned_colors') || '[]'))
    setEquipped(localStorage.getItem('flagrank_namecolor') || null)
  }, [])

  function buy(colorId: string, cost: number) {
    if (cash < cost || owned.includes(colorId)) return
    const newCash  = cash - cost
    const newOwned = [...owned, colorId]
    setCash(newCash)
    setOwned(newOwned)
    setEquipped(colorId)
    localStorage.setItem('flagrank_classcash',    String(newCash))
    localStorage.setItem('flagrank_owned_colors', JSON.stringify(newOwned))
    localStorage.setItem('flagrank_namecolor',    colorId)
    // Trigger rain
    setRainKey(k => k + 1)
    setRaining(true)
    setTimeout(() => setRaining(false), 7000)
  }

  function equip(colorId: string) {
    setEquipped(colorId)
    localStorage.setItem('flagrank_namecolor', colorId)
  }

  function unequip() {
    setEquipped(null)
    localStorage.removeItem('flagrank_namecolor')
  }

  const equippedHex = equipped ? COLORS.find(c => c.id === equipped)?.hex : undefined

  return (
    <main className="relative min-h-screen flex flex-col items-center px-4 py-8 overflow-hidden">
      <FlagBackground />
      {raining && <CashRain rainKey={rainKey} />}

      <div className="relative z-10 w-full max-w-sm flex flex-col gap-6">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold" style={{ color: '#d4aa50', fontFamily: 'Georgia, serif' }}>
            💰 Class Cash Store
          </h1>
          <p className="text-gray-400 text-sm mt-1">Spend your hard-earned cash on leaderboard swag</p>
        </div>

        {/* Balance */}
        <div className="text-center py-4 rounded-xl" style={{ background: 'rgba(212,170,80,0.1)', border: '1.5px solid rgba(212,170,80,0.3)' }}>
          <div className="text-5xl font-bold" style={{ color: '#d4aa50', fontFamily: 'Georgia, serif' }}>${cash}</div>
          <div className="text-sm text-gray-400 mt-1">Your balance</div>
        </div>

        {/* Preview */}
        <div className="bg-[#14141c]/90 border border-[#2a2a3a] rounded-xl p-4 text-center backdrop-blur-sm">
          <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Your Name Preview</div>
          <div className="flex justify-between items-center px-4 py-2 rounded-lg bg-[#0a0a0f]">
            <span>
              <span className="text-gray-500 text-sm mr-2">#1</span>
              <span className="font-bold text-lg" style={{ color: equippedHex ?? '#fff' }}>YOU</span>
            </span>
            <span className="font-bold" style={{ color: '#d4aa50' }}>42</span>
          </div>
          {equipped
            ? <div className="text-xs mt-2 font-semibold" style={{ color: equippedHex }}>
                {COLORS.find(c => c.id === equipped)?.emoji} {COLORS.find(c => c.id === equipped)?.label} equipped
              </div>
            : <div className="text-xs text-gray-600 mt-2">No color equipped — buy one below!</div>
          }
        </div>

        {/* Color grid */}
        <div className="flex flex-col gap-3">
          {COLORS.map(color => {
            const isOwned    = owned.includes(color.id)
            const isEquipped = equipped === color.id
            const canAfford  = cash >= color.cost
            return (
              <div
                key={color.id}
                className="bg-[#14141c]/90 border rounded-xl p-4 flex items-center justify-between gap-3 backdrop-blur-sm transition-all"
                style={{ borderColor: isEquipped ? color.hex : '#2a2a3a' }}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <span className="text-2xl flex-shrink-0">{color.emoji}</span>
                  <div className="min-w-0">
                    <div className="font-bold text-base" style={{ color: color.hex }}>{color.label}</div>
                    <div className="text-xs text-gray-500">
                      {isOwned ? 'Owned' : canAfford ? `$${color.cost.toLocaleString()}` : `Need $${(color.cost - cash).toLocaleString()} more`}
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  {isOwned ? (
                    isEquipped ? (
                      <button onClick={unequip} className="px-3 py-1.5 rounded-lg text-sm font-bold"
                        style={{ background: color.hex + '33', color: color.hex, border: `1.5px solid ${color.hex}` }}>
                        ✓ On
                      </button>
                    ) : (
                      <button onClick={() => equip(color.id)}
                        className="px-3 py-1.5 rounded-lg text-sm font-bold border border-[#2a2a3a] text-gray-300 hover:border-[#d4aa50] transition-all">
                        Equip
                      </button>
                    )
                  ) : (
                    <button onClick={() => buy(color.id, color.cost)} disabled={!canAfford}
                      className="px-3 py-1.5 rounded-lg text-sm font-bold transition-all active:scale-95 disabled:opacity-30"
                      style={{ background: canAfford ? color.hex : '#2a2a3a', color: canAfford ? '#fff' : '#555' }}>
                      ${color.cost.toLocaleString()}
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <button onClick={() => router.push('/')}
          className="w-full py-3 rounded-xl border border-[#2a2a3a] text-gray-400 hover:border-[#d4aa50] transition-all text-sm">
          ← Back to Game
        </button>

      </div>
    </main>
  )
}
