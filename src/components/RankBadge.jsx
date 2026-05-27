'use client'
import { getRankColor, getRankLabel } from '@/data/countryData'

export default function RankBadge({ rank, size = 'lg' }) {
  const color = getRankColor(rank)
  const label = getRankLabel(rank)

  const sizes = {
    sm: 'text-xl',
    lg: 'text-5xl',
    xl: 'text-7xl',
  }

  return (
    <div className="flex flex-col items-center gap-1 animate-rank-reveal">
      <span className={`font-bold ${sizes[size]}`} style={{ color }}>
        #{rank}
      </span>
      <span className="text-xs uppercase tracking-widest font-semibold" style={{ color }}>
        {label}
      </span>
    </div>
  )
}
