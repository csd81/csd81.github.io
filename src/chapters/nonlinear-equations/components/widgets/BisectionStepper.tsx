import { useMemo, useState } from 'react'
import { Mafs, Coordinates, Plot, Line, Point, Polygon, Theme } from 'mafs'
import 'mafs/core.css'
import 'mafs/font.css'

import { compileScalar } from '../../lib/expression'
import { bisect } from '../../lib/methods'
import { scalarPresets } from '../../lib/presets'
import { FunctionInput } from '../FunctionInput'
import { WidgetShell, NumberField, SliderField } from './WidgetShell'
import { useWidgetT } from './i18n'

const bracketed = scalarPresets.filter((p) => p.bracket)

/**
 * §2.3 — Bisection. Plots f, shades the current bracket [aₖ, bₖ], marks the
 * midpoint pₖ, and lets the learner step through the halving. The error bound
 * (b−a)/2^(k+1) is shown live.
 */
export function BisectionStepper() {
  const t = useWidgetT()
  const initial = bracketed[0]
  const [fExpr, setFExpr] = useState(initial.f)
  const [a, setA] = useState(initial.bracket![0])
  const [b, setB] = useState(initial.bracket![1])
  const [step, setStep] = useState(0)

  const compiled = useMemo(() => {
    try {
      return compileScalar(fExpr)
    } catch {
      return null
    }
  }, [fExpr])

  const result = useMemo(() => {
    if (!compiled) return null
    return bisect(compiled.eval, { a, b, tol: 1e-10, maxIter: 30 })
  }, [compiled, a, b])

  const steps = result?.trace ?? []
  const k = Math.min(step, Math.max(0, steps.length - 1))
  const cur = steps[k]

  const yRange = useMemo<[number, number]>(() => {
    if (!compiled) return [-2, 2]
    let lo = Infinity
    let hi = -Infinity
    for (let i = 0; i <= 60; i++) {
      const x = a + ((b - a) * i) / 60
      const y = compiled.eval(x)
      if (Number.isFinite(y)) {
        lo = Math.min(lo, y)
        hi = Math.max(hi, y)
      }
    }
    if (!Number.isFinite(lo)) return [-2, 2]
    const pad = (hi - lo) * 0.15 || 1
    return [lo - pad, hi + pad]
  }, [compiled, a, b])

  const pad = (b - a) * 0.1 || 0.5
  const errBound = cur ? (b - a) / 2 ** (k + 1) : NaN

  return (
    <WidgetShell
      controls={
        <>
          <label className="block text-sm font-medium mb-1">{t.preset}</label>
          <select
            value={bracketed.find((p) => p.f === fExpr)?.id ?? ''}
            onChange={(e) => {
              const next = bracketed.find((p) => p.id === e.target.value)
              if (next) {
                setFExpr(next.f)
                setA(next.bracket![0])
                setB(next.bracket![1])
                setStep(0)
              }
            }}
            className="w-full rounded border border-ink-300 dark:border-ink-700 bg-white dark:bg-ink-900 px-3 py-2 text-sm"
          >
            {bracketed.map((p) => (
              <option key={p.id} value={p.id}>{p.label}</option>
            ))}
            {!bracketed.find((p) => p.f === fExpr) && <option value="" disabled>{t.custom}</option>}
          </select>

          <FunctionInput label="f(x)" initialExpr={fExpr} onChangeValid={(e) => { setFExpr(e); setStep(0) }} />

          <div className="grid grid-cols-2 gap-3 mt-2">
            <NumberField label="a" value={a} onChange={(v) => { setA(v); setStep(0) }} />
            <NumberField label="b" value={b} onChange={(v) => { setB(v); setStep(0) }} />
          </div>

          {steps.length > 0 && (
            <SliderField label={t.step} value={k} onChange={setStep} min={0} max={steps.length - 1} />
          )}
        </>
      }
      plot={
        <Mafs viewBox={{ x: [a - pad, b + pad], y: yRange }} preserveAspectRatio={false} height={340}>
          <Coordinates.Cartesian />
          {compiled && <Plot.OfX y={(x) => compiled.eval(x)} color={Theme.red} />}
          {cur && (
            <Polygon
              points={[
                [cur.a, yRange[0]],
                [cur.b, yRange[0]],
                [cur.b, yRange[1]],
                [cur.a, yRange[1]],
              ]}
              color={Theme.blue}
              fillOpacity={0.12}
              strokeOpacity={0.5}
            />
          )}
          {cur && <Point x={cur.p} y={0} color={Theme.indigo} />}
          {cur && <Line.Segment point1={[cur.p, 0]} point2={[cur.p, cur.fp]} color={Theme.indigo} opacity={0.6} />}
        </Mafs>
      }
      footer={
        <>
          {result?.reason === 'invalid' ? (
            <p className="text-sm text-red-600 dark:text-red-400">{t.noBracket}</p>
          ) : (
            cur && (
              <p className="text-sm font-mono">
                k={k} · [a,b]=[{cur.a.toFixed(5)}, {cur.b.toFixed(5)}] · pₖ={cur.p.toFixed(6)} ·
                f(pₖ)={cur.fp.toExponential(2)} · {t.errorBound} ≤ {errBound.toExponential(2)}
              </p>
            )
          )}
          {steps.length > 0 && (
            <p className="text-xs mt-1 text-ink-500 dark:text-ink-400">
              {result?.converged ? `✓ ${t.converged}` : `${t.diverged}`} · {steps.length - 1} {t.steps}
            </p>
          )}
        </>
      }
    />
  )
}
