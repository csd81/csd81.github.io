import { useMemo, useState } from 'react'
import { Mafs, Coordinates, Line, Point, Theme } from 'mafs'
import 'mafs/core.css'
import 'mafs/font.css'

import { compileVec2 } from '../../lib/expression'
import { v2 } from '../../lib/methods'
import type { Vec2 } from '../../lib/methods'
import { WidgetShell, SliderField } from './WidgetShell'
import { useWidgetT } from './i18n'

const PRESETS = [
  { id: 'trig', label: 'G(x,y) = (½cos y, ½sin x)', g1: '0.5*cos(y)', g2: '0.5*sin(x)' },
  { id: 'linear', label: 'G(x,y) = ((x+y)/4 + ½, (x−y)/4 + ¼)', g1: '(x+y)/4 + 0.5', g2: '(x-y)/4 + 0.25' },
  { id: 'damped', label: 'G(x,y) = (0.4·(y+1), 0.4·cos x)', g1: '0.4*(y+1)', g2: '0.4*cos(x)' },
]

/**
 * §2.11 — Fixed-point iteration in n dimensions (shown in 2D). Iterates
 * p_{k+1} = G(p_k) for a contraction map G and draws the trajectory spiralling
 * into the fixed point p* = G(p*).
 */
export function FixedPoint2D() {
  const t = useWidgetT()
  const [gId, setGId] = useState(PRESETS[0].id)
  const [x0, setX0] = useState(1.5)
  const [y0, setY0] = useState(-1.5)
  const preset = PRESETS.find((p) => p.id === gId)!

  const result = useMemo(() => {
    let G
    try {
      G = compileVec2(preset.g1, preset.g2)
    } catch {
      return null
    }
    const traj: Vec2[] = [[x0, y0]]
    let p: Vec2 = [x0, y0]
    let converged = false
    for (let k = 0; k < 50; k++) {
      const next = G.eval(p) as Vec2
      traj.push(next)
      if (!Number.isFinite(next[0]) || !Number.isFinite(next[1])) break
      if (v2.normInf(v2.sub(next, p)) < 1e-10) { converged = true; p = next; break }
      p = next
    }
    return { traj, converged, fixed: p }
  }, [preset, x0, y0])

  const traj = result?.traj ?? []

  return (
    <WidgetShell
      controls={
        <>
          <label className="block text-sm font-medium mb-1">{t.preset}</label>
          <select
            value={gId}
            onChange={(e) => setGId(e.target.value)}
            className="w-full rounded border border-ink-300 dark:border-ink-700 bg-white dark:bg-ink-900 px-3 py-2 text-sm"
          >
            {PRESETS.map((p) => <option key={p.id} value={p.id}>{p.label}</option>)}
          </select>
          <SliderField label="x₀" value={x0} onChange={setX0} min={-2.5} max={2.5} step={0.1} />
          <SliderField label="y₀" value={y0} onChange={setY0} min={-2.5} max={2.5} step={0.1} />
          {result && (
            <p className="text-sm font-mono mt-2">
              {result.converged
                ? `✓ p* ≈ (${result.fixed[0].toFixed(4)}, ${result.fixed[1].toFixed(4)}) · ${traj.length - 1} ${t.steps}`
                : t.diverged}
            </p>
          )}
        </>
      }
      plot={
        <Mafs viewBox={{ x: [-2.6, 2.6], y: [-2.6, 2.6] }} height={340}>
          <Coordinates.Cartesian />
          {traj.slice(0, -1).map((p, i) => (
            <Line.Segment key={i} point1={[p[0], p[1]]} point2={[traj[i + 1][0], traj[i + 1][1]]} color={Theme.blue} opacity={0.7} />
          ))}
          {traj.map((p, i) => (
            <Point key={`pt-${i}`} x={p[0]} y={p[1]} color={i === 0 ? Theme.indigo : Theme.blue} />
          ))}
          {result?.converged && <Point x={result.fixed[0]} y={result.fixed[1]} color={Theme.red} />}
        </Mafs>
      }
    />
  )
}
