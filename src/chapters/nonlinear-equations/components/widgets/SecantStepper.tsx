import { useMemo, useState } from 'react'
import { Mafs, Coordinates, Plot, Line, Point, Theme } from 'mafs'
import 'mafs/core.css'
import 'mafs/font.css'

import { compileScalar } from '../../lib/expression'
import { secant } from '../../lib/methods'
import { scalarPresets } from '../../lib/presets'
import { FunctionInput } from '../FunctionInput'
import { WidgetShell, NumberField, SliderField } from './WidgetShell'
import { useWidgetT } from './i18n'

const withSeeds = scalarPresets.filter((p) => p.p0 !== undefined && p.p1 !== undefined)

/**
 * §2.6 — Secant method. Like Newton but the tangent is replaced by the secant
 * chord through the two previous iterates (pₖ₋₁, f(pₖ₋₁)) and (pₖ, f(pₖ));
 * its x-intercept is pₖ₊₁. Superlinear order φ ≈ 1.618.
 */
export function SecantStepper() {
  const t = useWidgetT()
  const initial = withSeeds[0]
  const [fExpr, setFExpr] = useState(initial.f)
  const [p0, setP0] = useState(initial.p0!)
  const [p1, setP1] = useState(initial.p1!)
  const [step, setStep] = useState(1)

  const compiled = useMemo(() => {
    try {
      return compileScalar(fExpr)
    } catch {
      return null
    }
  }, [fExpr])

  const result = useMemo(() => {
    if (!compiled) return null
    return secant(compiled.eval, { p0, p1, tol: 1e-12, maxIter: 20 })
  }, [compiled, p0, p1])

  const steps = result?.trace ?? []
  const k = Math.min(Math.max(step, 1), Math.max(1, steps.length - 1))
  const cur = steps[k]
  const prev = steps[k - 1]

  const xRange = useMemo<[number, number]>(() => {
    const ps = steps.map((s) => s.p).filter(Number.isFinite)
    if (ps.length === 0) return [p0 - 3, p1 + 3]
    let lo = Math.min(...ps, p0, p1)
    let hi = Math.max(...ps, p0, p1)
    lo = Math.max(lo, Math.min(p0, p1) - 8)
    hi = Math.min(hi, Math.max(p0, p1) + 8)
    const pad = (hi - lo) * 0.25 || 2
    return [lo - pad, hi + pad]
  }, [steps, p0, p1])

  const yRange = useMemo<[number, number]>(() => {
    if (!compiled) return [-2, 2]
    let lo = Infinity
    let hi = -Infinity
    for (let i = 0; i <= 80; i++) {
      const x = xRange[0] + ((xRange[1] - xRange[0]) * i) / 80
      const y = compiled.eval(x)
      if (Number.isFinite(y)) { lo = Math.min(lo, y); hi = Math.max(hi, y) }
    }
    if (!Number.isFinite(lo)) return [-2, 2]
    const pad = (hi - lo) * 0.15 || 1
    return [lo - pad, hi + pad]
  }, [compiled, xRange])

  return (
    <WidgetShell
      controls={
        <>
          <label className="block text-sm font-medium mb-1">{t.preset}</label>
          <select
            value={withSeeds.find((p) => p.f === fExpr)?.id ?? ''}
            onChange={(e) => {
              const nx = withSeeds.find((p) => p.id === e.target.value)
              if (nx) { setFExpr(nx.f); setP0(nx.p0!); setP1(nx.p1!); setStep(1) }
            }}
            className="w-full rounded border border-ink-300 dark:border-ink-700 bg-white dark:bg-ink-900 px-3 py-2 text-sm"
          >
            {withSeeds.map((p) => (
              <option key={p.id} value={p.id}>{p.label}</option>
            ))}
            {!withSeeds.find((p) => p.f === fExpr) && <option value="" disabled>{t.custom}</option>}
          </select>

          <FunctionInput label="f(x)" initialExpr={fExpr} onChangeValid={(e) => { setFExpr(e); setStep(1) }} />

          <div className="grid grid-cols-2 gap-3 mt-2">
            <NumberField label="p₀" value={p0} onChange={(v) => { setP0(v); setStep(1) }} />
            <NumberField label="p₁" value={p1} onChange={(v) => { setP1(v); setStep(1) }} />
          </div>

          {steps.length > 1 && (
            <SliderField label={t.step} value={k} onChange={setStep} min={1} max={steps.length - 1} />
          )}
        </>
      }
      plot={
        <Mafs viewBox={{ x: xRange, y: yRange }} preserveAspectRatio={false} height={340}>
          <Coordinates.Cartesian />
          {compiled && <Plot.OfX y={(x) => compiled.eval(x)} color={Theme.red} />}
          {compiled && cur && prev && (
            <>
              <Line.ThroughPoints
                point1={[prev.p, compiled.eval(prev.p)]}
                point2={[cur.p, compiled.eval(cur.p)]}
                color={Theme.blue}
                opacity={0.7}
              />
              <Point x={prev.p} y={compiled.eval(prev.p)} color={Theme.indigo} />
              <Point x={cur.p} y={compiled.eval(cur.p)} color={Theme.indigo} />
            </>
          )}
        </Mafs>
      }
      footer={
        cur && (
          <p className="text-sm font-mono">
            k={k} · pₖ={cur.p.toFixed(8)} · f(pₖ)={cur.fp.toExponential(2)}
            {' · '}
            {result?.converged ? `✓ ${t.converged} (${steps.length - 1} ${t.steps})` : `${t.diverged} (${result?.reason})`}
          </p>
        )
      }
    />
  )
}
