import { useId } from 'react'
import { motion } from 'motion/react'

export interface Curve {
  points: [number, number][]
  color: string
  width?: number
  dash?: boolean
}

export interface Marker {
  x: number
  y: number
  color: string
  label?: string
}

interface PlotProps {
  curves: Curve[]
  markers?: Marker[]
  xDomain: [number, number]
  yDomain: [number, number]
  width?: number
  height?: number
  xLabel?: string
  yLabel?: string
  logY?: boolean
}

export function Plot({
  curves,
  markers = [],
  xDomain,
  yDomain,
  width = 460,
  height = 300,
  xLabel,
  yLabel,
  logY = false,
}: PlotProps) {
  const uid = useId()
  const pad = { l: 46, r: 14, t: 14, b: 30 }
  const iw = width - pad.l - pad.r
  const ih = height - pad.t - pad.b

  const sx = (x: number) => pad.l + ((x - xDomain[0]) / (xDomain[1] - xDomain[0])) * iw
  const tY = (y: number) => (logY ? Math.log10(Math.max(y, 1e-300)) : y)
  const y0 = tY(yDomain[0])
  const y1 = tY(yDomain[1])
  const sy = (y: number) => pad.t + ih - ((tY(y) - y0) / (y1 - y0)) * ih

  const path = (pts: [number, number][]) =>
    pts
      .filter(([, y]) => Number.isFinite(y))
      .map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${sx(x).toFixed(1)},${clamp(sy(y), pad.t, pad.t + ih).toFixed(1)}`)
      .join(' ')

  const xTicks = ticks(xDomain[0], xDomain[1], 5)
  const yTicks = logY ? logTicks(yDomain[0], yDomain[1]) : ticks(yDomain[0], yDomain[1], 5)
  const showZeroX = yDomain[0] < 0 && yDomain[1] > 0 && !logY

  return (
    <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', height: 'auto', display: 'block' }} role="img">
      {/* grid + axes */}
      {xTicks.map((tk) => (
        <g key={`xt${tk}`}>
          <line x1={sx(tk)} y1={pad.t} x2={sx(tk)} y2={pad.t + ih} stroke="var(--grid)" strokeWidth={0.5} />
          <text x={sx(tk)} y={height - 10} fontSize={10} textAnchor="middle" fill="var(--text-soft)">
            {fmtTick(tk)}
          </text>
        </g>
      ))}
      {yTicks.map((tk) => (
        <g key={`yt${tk}`}>
          <line x1={pad.l} y1={sy(tk)} x2={pad.l + iw} y2={sy(tk)} stroke="var(--grid)" strokeWidth={0.5} />
          <text x={pad.l - 6} y={sy(tk) + 3} fontSize={10} textAnchor="end" fill="var(--text-soft)">
            {logY ? `1e${Math.round(Math.log10(tk))}` : fmtTick(tk)}
          </text>
        </g>
      ))}
      {showZeroX && (
        <line x1={pad.l} y1={sy(0)} x2={pad.l + iw} y2={sy(0)} stroke="var(--text-soft)" strokeWidth={1} />
      )}
      <line x1={pad.l} y1={pad.t} x2={pad.l} y2={pad.t + ih} stroke="var(--text-soft)" strokeWidth={1} />

      {/* curves */}
      {curves.map((c, i) => {
        const d = path(c.points)
        if (!d) return null
        return (
          <motion.path
            key={`${uid}-c${i}`}
            d={d}
            fill="none"
            stroke={c.color}
            strokeWidth={c.width ?? 2}
            strokeDasharray={c.dash ? '5 4' : undefined}
            strokeLinejoin="round"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
          />
        )
      })}

      {/* markers */}
      {markers.map((m, i) =>
        Number.isFinite(m.y) ? (
          <g key={`${uid}-m${i}`}>
            <motion.circle
              cx={sx(m.x)}
              cy={clamp(sy(m.y), pad.t, pad.t + ih)}
              r={4.5}
              fill={m.color}
              stroke="var(--panel)"
              strokeWidth={1.5}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            />
            {m.label && (
              <text x={sx(m.x) + 8} y={clamp(sy(m.y), pad.t + 10, pad.t + ih) - 6} fontSize={10} fill={m.color}>
                {m.label}
              </text>
            )}
          </g>
        ) : null,
      )}

      {xLabel && (
        <text x={pad.l + iw} y={height - 10} fontSize={10} textAnchor="end" fill="var(--text-soft)" fontStyle="italic">
          {xLabel}
        </text>
      )}
      {yLabel && (
        <text x={pad.l + 4} y={pad.t + 4} fontSize={10} fill="var(--text-soft)" fontStyle="italic">
          {yLabel}
        </text>
      )}
    </svg>
  )
}

function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v))
}

function ticks(lo: number, hi: number, n: number): number[] {
  const out: number[] = []
  for (let i = 0; i <= n; i++) out.push(lo + ((hi - lo) * i) / n)
  return out
}

function logTicks(lo: number, hi: number): number[] {
  const out: number[] = []
  const a = Math.floor(Math.log10(Math.max(lo, 1e-300)))
  const b = Math.ceil(Math.log10(Math.max(hi, 1e-299)))
  for (let e = a; e <= b; e++) out.push(Math.pow(10, e))
  return out
}

function fmtTick(v: number): string {
  if (v === 0) return '0'
  if (Math.abs(v) >= 1000 || (Math.abs(v) < 0.01 && v !== 0)) return v.toExponential(0)
  return Number(v.toFixed(2)).toString()
}
