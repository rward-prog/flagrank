'use client'
import { METRICS } from '@/data/countryData'

export default function MetricGrid({ availableIds, onPick, disabled = false }) {
  const available = METRICS.filter(m => availableIds.includes(m.id))

  return (
    <div className="grid grid-cols-2 gap-2">
      {available.map(m => (
        <button
          key={m.id}
          className="metric-btn"
          disabled={disabled}
          onClick={() => onPick(m.id)}
        >
          <div className="flex items-center gap-2">
            <span className="text-xl">{m.icon}</span>
            <div>
              <div className="text-sm font-semibold text-white">{m.name}</div>
              <div className="text-xs text-gray-400">{m.desc}</div>
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}
