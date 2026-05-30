import { useMemo, useState } from 'react'
import { Mafs, Coordinates, Plot, Line, Point, Theme } from 'mafs'
import 'mafs/core.css'
import 'mafs/font.css'

import { compileWithDerivative } from '../../lib/expression'
import { newton } from '../../lib/methods'
import { scalarPresets } from '../../lib/presets'
import { FunctionInput } from '../FunctionInput'
import { WidgetShell, NumberField, SliderField } from './WidgetShell'
import { useWidgetT } from './i18n'

const withP0 = scalarPresets.filter((p) => p.p0 !== undefined)

/**
 * §2.5 — Newton's method. Draws f and the tangent line at pₖ; the next iterate
 * is the tangent's x-intercept. The arctan preset shows the pathological case
 * where the iterates fly outward and diverge.
 */
export function NewtonStepper() {
  const t = useWidgetT()
  const initial = withP0[0]
  const [fExpr, setFExpr] = useState(initial.f)
  const [p0, setP0] = useState(initial.p0!)
  const [step, setStep] = useState(0)

  const compiled = useMemo(() => {
    try {
      return compileWithDerivative(fExpr)
    } catch {
      return null
    }
  }, [fExpr])

  const result = useMemo(() => {
    if (!compiled) return null
    return newton(compiled.eval, compiled.derivEval, { p0, tol: 1e-12, maxIter: 20 })
  }, [compiled, p0])

  const steps = result?.trace ?? []
  const k = Math.min(step, Math.max(0, steps.length - 1))
  const cur = steps[k]
  const next = cur && cur.fpp !== 0 ? cur.p - cur.fp / cur.fpp : undefined

  const xRange = useMemo<[number, number]>(() => {
    const ps = steps.map((s) => s.p).filter(Number.isFinite)
    if (ps.length === 0) return [p0 - 3, p0 + 3]
    let lo = Math.min(...ps, p0)
    let hi = Math.max(...ps, p0)
    // clamp a runaway (diverging) window so the plot stays readable
    lo = Math.max(lo, p0 - 8)
    hi = Math.min(hi, p0 + 8)
    const pad = (hi - lo) * 0.25 || 2
    return [lo - pad, hi + pad]
  }, [steps, p0])

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
            value={withP0.find((p) => p.f === fExpr)?.id ?? ''}
            onChange={(e) => {
              const nx = withP0.find((p) => p.id === e.target.value)
              if (nx) { setFExpr(nx.f); setP0(nx.p0!); setStep(0) }
            }}
            className="w-full rounded border border-ink-300 dark:border-ink-700 bg-white dark:bg-ink-900 px-3 py-2 text-sm"
          >
            {withP0.map((p) => (
              <option key={p.id} value={p.id}>{p.label}</option>
            ))}
            {!withP0.find((p) => p.f === fExpr) && <option value="" disabled>{t.custom}</option>}
          </select>

          <FunctionInput label="f(x)" initialExpr={fExpr} onChangeValid={(e) => { setFExpr(e); setStep(0) }} />
          {compiled && (
            <p className="text-xs text-ink-500 dark:text-ink-400 mt-1 font-mono">f′(x) = {compiled.derivExpr}</p>
          )}

          <div className="grid grid-cols-2 gap-3 mt-2">
            <NumberField label="p₀" value={p0} onChange={(v) => { setP0(v); setStep(0) }} />
          </div>

          {steps.length > 0 && (
            <SliderField label={t.step} value={k} onChange={setStep} min={0} max={steps.length - 1} />
          )}
        </>
      }
      plot={
        <Mafs viewBox={{ x: xRange, y: yRange }} preserveAspectRatio={false} height={340}>
          <Coordinates.Cartesian />
          {compiled && <Plot.OfX y={(x) => compiled.eval(x)} color={Theme.red} />}
          {cur && (
            <>
              <Point x={cur.p} y={cur.fp} color={Theme.indigo} />
              {/* tangent line at pₖ */}
              <Line.ThroughPoints
                point1={[cur.p, cur.fp]}
                point2={[cur.p + 1, cur.fp + cur.fpp]}
                color={Theme.blue}
                opacity={0.7}
              />
              {next !== undefined && Number.isFinite(next) && (
                <Point x={next} y={0} color={Theme.green} />
              )}
            </>
          )}
        </Mafs>
      }
      footer={
        cur && (
          <p className="text-sm font-mono">
            k={k} · pₖ={cur.p.toFixed(8)} · f(pₖ)={cur.fp.toExponential(2)} · f′(pₖ)={cur.fpp.toFixed(4)}
            {' · '}
            {result?.converged
              ? `✓ ${t.converged} (${steps.length - 1} ${t.steps})`
              : `${t.diverged} (${result?.reason})`}
          </p>
        )
      }
    />
  )
}
