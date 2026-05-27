'use client'
import { useEffect, useRef, useState } from 'react'

interface Props {
  duration: number
  onExpire?: () => void
  running?: boolean
  serverDeadline?: number
}

export default function CountdownTimer({ duration, onExpire, running = true, serverDeadline }: Props) {
  const [timeLeft, setTimeLeft] = useState(duration)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (!running) return
    setTimeLeft(duration)

    intervalRef.current = setInterval(() => {
      if (serverDeadline) {
        const remaining = Math.max(0, (serverDeadline - Date.now()) / 1000)
        setTimeLeft(remaining)
        if (remaining <= 0) { clearInterval(intervalRef.current!); onExpire?.() }
      } else {
        setTimeLeft(prev => {
          if (prev <= 0.05) { clearInterval(intervalRef.current!); onExpire?.(); return 0 }
          return prev - 0.1
        })
      }
    }, 100)

    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [duration, running, serverDeadline])

  const pct = Math.max(0, (timeLeft / duration) * 100)
  const isUrgent = timeLeft < 5
  const color = isUrgent ? '#e04040' : timeLeft < duration * 0.4 ? '#e08040' : '#d4aa50'

  return (
    <div className="w-full">
      <div className="flex justify-between text-sm mb-1" style={{ color }}>
        <span>Time</span>
        <span className="font-bold tabular-nums">{Math.ceil(timeLeft)}s</span>
      </div>
      <div className="w-full h-2 rounded-full bg-[#2a2a3a] overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${pct}%`, background: color, transition: 'width 0.1s linear, background 0.3s' }}
        />
      </div>
    </div>
  )
}
