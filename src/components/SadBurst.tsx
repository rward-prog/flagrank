'use client'
import { useEffect, useState, useMemo } from 'react'

export default function SadBurst({ show, onDone, message }: { show: boolean; onDone?: () => void; message?: string }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (show) {
      setVisible(true)
      const t = setTimeout(() => { setVisible(false); onDone?.() }, 3200)
      return () => clearTimeout(t)
    } else {
      setVisible(false)
    }
  }, [show])

  const EMOJIS = ['😢','😭','😩','😟','😬','💀','😵','🙃','😿','😔']

  const particles = useMemo(() =>
    Array.from({ length: 30 }, (_, i) => ({
      left:     3 + Math.random() * 94,
      delay:    Math.random() * 2,
      duration: 3.5 + Math.random() * 2,
      size:     1.2 + Math.random() * 1.5,
      emoji:    EMOJIS[i % EMOJIS.length],
    })),
    [visible] // regenerate each time it shows
  )

  if (!visible) return null

  return (
    <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-50">
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.6)' }} />

      {/* Falling sad emojis */}
      {particles.map((p, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            left: `${p.left}%`,
            top: '-60px',
            fontSize: `${p.size}rem`,
            animation: `cashFall ${p.duration}s ease-in ${p.delay}s forwards`,
          }}
        >
          {p.emoji}
        </span>
      ))}

      {/* Central message */}
      <div
        className="relative text-center"
        style={{ animation: 'rankReveal 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards' }}
      >
        <div style={{ fontSize: '4.5rem', lineHeight: 1 }}>😭</div>
        <div
          className="font-bold mt-3 tracking-widest"
          style={{ fontSize: '2.5rem', color: '#e04040', fontFamily: 'Georgia, serif', textShadow: '0 0 30px rgba(224,64,64,0.6)' }}
        >
          {message ?? 'OUCH!'}
        </div>
        <div className="text-lg text-gray-300 mt-1">
          {message === 'WORST PICK!' ? 'That country ranked last there 💀' : 'Rank #1 is worthless in Reverse! 🙃'}
        </div>
      </div>
    </div>
  )
}
