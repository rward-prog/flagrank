'use client'
import { useEffect, useState } from 'react'

export default function RankOneBurst({ show, onDone }: { show: boolean; onDone?: () => void }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (show) {
      setVisible(true)
      const t = setTimeout(() => { setVisible(false); onDone?.() }, 3000)
      return () => clearTimeout(t)
    } else {
      setVisible(false)
    }
  }, [show])

  if (!visible) return null

  const stars = ['⭐','🌟','✨','💫','🏆','👑','🎯','🎉','🎊']

  return (
    <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-50">
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.6)' }} />

      <div className="relative text-center" style={{ animation: 'rankReveal 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards' }}>
        <div style={{ fontSize: '5rem', lineHeight: 1 }}>🏆</div>
        <div
          className="font-bold mt-2 tracking-widest"
          style={{ fontSize: '5rem', color: '#4adf80', fontFamily: 'Georgia, serif', lineHeight: 1, textShadow: '0 0 40px rgba(74,223,128,0.8)' }}
        >
          #1
        </div>
        <div className="text-2xl font-bold mt-2" style={{ color: '#d4aa50' }}>IN THE WORLD!</div>
        <div className="text-sm text-gray-300 mt-1">Rank #1 — the absolute best 🌍</div>
      </div>

      {/* Orbiting stars */}
      {Array.from({ length: 28 }).map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top:  `${5  + Math.random() * 90}%`,
            left: `${5  + Math.random() * 90}%`,
            fontSize: `${0.8 + Math.random() * 1.4}rem`,
            animation: `cashFall ${2.5 + Math.random() * 1.5}s ease-in ${Math.random() * 1}s forwards`,
            opacity: 0.9,
          }}
        >
          {stars[i % stars.length]}
        </div>
      ))}
    </div>
  )
}
