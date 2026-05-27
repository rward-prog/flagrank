'use client'
import { useEffect, useState } from 'react'

export default function StreakBurst({ show, onDone }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (show) {
      setVisible(true)
      const t = setTimeout(() => { setVisible(false); onDone?.() }, 3500)
      return () => clearTimeout(t)
    } else {
      setVisible(false)
    }
  }, [show])

  if (!visible) return null

  return (
    <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-50">
      {/* Dark backdrop to make it pop */}
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.55)' }} />

      {/* Central burst */}
      <div className="relative text-center" style={{ animation: 'rankReveal 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards' }}>
        <div style={{ fontSize: '5rem', lineHeight: 1, animation: 'flagFloat 0.8s ease-in-out infinite alternate' }}>🔥</div>
        <div className="text-4xl font-bold mt-3 tracking-widest" style={{ color: '#d4aa50', fontFamily: 'Georgia, serif' }}>
          STREAK!
        </div>
        <div className="text-xl font-bold mt-2" style={{ color: '#4adf80' }}>+1 Reroll Token</div>
        <div className="text-sm text-gray-400 mt-1">3 ranks of #10 or better in a row!</div>
      </div>

      {/* Confetti particles */}
      {Array.from({ length: 35 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width:  `${6 + (i % 4) * 3}px`,
            height: `${6 + (i % 4) * 3}px`,
            top:  `${10 + Math.random() * 80}%`,
            left: `${5  + Math.random() * 90}%`,
            background: ['#d4aa50','#4adf80','#e08040','#fff','#e04040','#3b8fe8','#e91e8c'][i % 7],
            animation: `cashFall ${2 + Math.random() * 1.5}s ease-in ${Math.random() * 0.8}s forwards`,
            opacity: 0.9,
          }}
        />
      ))}
    </div>
  )
}
