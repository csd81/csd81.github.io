import { useMemo, useState } from 'react'
import { Mafs, Coordinates, Vector, Point, Theme } from 'mafs'
import 'mafs/core.css'
import 'mafs/font.css'

import { compileScalarXY } from '../../lib/expression'
import { FunctionInput } from '../FunctionInput'
import { WidgetShell, SliderField } from './WidgetShell'
import { useWidgetT } from './i18n'

const PRESETS = [
  { id: 'bowl', label: 'x² + y²', f: 'x^2 + y^2' },
  { id: 'saddle', label: 'x² − y²  (saddle)', f: 'x^2 - y^2' },
  { id: 'wave', label: 'sin(x) + cos(y)', f: 'sin(x) + cos(y)' },
  { id: 'rosen', label: '(1−x)² + 2(y−x²)²', f: '(1-x)^2 + 2*(y-x^2)^2' },
]

const GRID: number[] = [-2.4, -1.6, -0.8, 0, 0.8, 1.6, 2.4]

/**
 * §2.9 — Multivariable calculus review. Visualizes the gradient field ∇f of a
 * scalar function f(x, y): a lattice of arrows pointing uphill, plus a movable
 * probe point showing the exact gradient there. ∇f is normal to the level sets.
 */
export function GradientExplorer() {
  const t = useWidgetT()
  const [fExpr, setFExpr] = useState(PRESETS[0].f)
  const [px, setPx] = useState(1)
  const [py, setPy] = useState(1.2)

  const compiled = useMemo(() => {
    try {
      return compileScalarXY(fExpr)
    } catch {
      return null
    }
  }, [fExpr])

  const arrows = useMemo(() => {
    if (!compiled) return []
    const out: { x: number; y: number; gx: number; gy: number }[] = []
    for (const x of GRID) {
      for (const y of GRID) {
        const [gx, gy] = compiled.grad(x, y)
        const n = Math.hypot(gx, gy) || 1
        const s = 0.32
        out.push({ x, y, gx: (gx / n) * s, gy: (gy / n) * s })
      }
    }
    return out
  }, [compiled])

  const probe = compiled ? { val: compiled.eval(px, py), grad: compiled.grad(px, py) } : null
  const pn = probe ? Math.hypot(probe.grad[0], probe.grad[1]) || 1 : 1

  return (
    <WidgetShell
      controls={
        <>
          <label className="block text-sm font-medium mb-1">{t.preset}</label>
          <select
            value={PRESETS.find((p) => p.f === fExpr)?.id ?? ''}
            onChange={(e) => {
              const nx = PRESETS.find((p) => p.id === e.target.value)
              if (nx) setFExpr(nx.f)
            }}
            className="w-full rounded border border-ink-300 dark:border-ink-700 bg-white dark:bg-ink-900 px-3 py-2 text-sm"
          >
            {PRESETS.map((p) => <option key={p.id} value={p.id}>{p.label}</option>)}
            {!PRESETS.find((p) => p.f === fExpr) && <option value="" disabled>{t.custom}</option>}
          </select>
          <FunctionInput label="f(x, y)" initialExpr={fExpr} varName="x" onChangeValid={setFExpr} />
          <SliderField label="x" value={px} onChange={setPx} min={-2.5} max={2.5} step={0.05} />
          <SliderField label="y" value={py} onChange={setPy} min={-2.5} max={2.5} step={0.05} />
          {probe && (
            <p className="text-sm font-mono mt-2">
              f={probe.val.toFixed(3)} · ∇f=({probe.grad[0].toFixed(2)}, {probe.grad[1].toFixed(2)})
            </p>
          )}
        </>
      }
      plot={
        <Mafs viewBox={{ x: [-3, 3], y: [-3, 3] }} height={340}>
          <Coordinates.Cartesian subdivisions={2} />
          {arrows.map((a, i) => (
            <Vector key={i} tail={[a.x, a.y]} tip={[a.x + a.gx, a.y + a.gy]} color={Theme.blue} opacity={0.5} />
          ))}
          {probe && (
            <>
              <Point x={px} y={py} color={Theme.red} />
              <Vector tail={[px, py]} tip={[px + probe.grad[0] / pn, py + probe.grad[1] / pn]} color={Theme.red} />
            </>
          )}
        </Mafs>
      }
    />
  )
}
