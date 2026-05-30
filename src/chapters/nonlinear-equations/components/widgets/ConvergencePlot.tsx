import { useMemo, useState } from 'react'
import { Mafs, Coordinates, Line, Point, Theme } from 'mafs'
import 'mafs/core.css'
import 'mafs/font.css'

import { compileWithDerivative } from '../../lib/expression'
import { bisect, falsePosition, newton, secant } from '../../lib/methods'
import { scalarPresets } from '../../lib/presets'
import { WidgetShell } from './WidgetShell'
import { useWidgetT } from './i18n'

const presets = scalarPresets.filter((p) => p.bracket && p.p0 !== undefined && p.p1 !== undefined)

const METHOD_META = [
  { key: 'bisection', color: Theme.blue, label: { en: 'Bisection (linear)', hu: 'Felezés (lineáris)' } },
  { key: 'false-position', color: Theme.green, label: { en: 'False position', hu: 'Húrmódszer' } },
  { key: 'secant', color: Theme.orange, label: { en: 'Secant (≈1.618)', hu: 'Szelő (≈1,618)' } },
  { key: 'newton', color: Theme.red, label: { en: 'Newton (quadratic)', hu: 'Newton (kvadratikus)' } },
] as const

const FLOOR = -16

/**
 * §2.7 — Order of convergence. Runs four methods on the same root problem and
 * plots log₁₀|pₖ − p*| against k. The slope/curvature of each line reveals its
 * order: bisection straight (linear), Newton bends sharply down (quadratic).
 */
export function ConvergencePlot() {
  const t = useWidgetT()
  const [presetId, setPresetId] = useState(presets[0].id)
  const preset = presets.find((p) => p.id === presetId)!

  const series = useMemo(() => {
    let compiled
    try {
      compiled = compileWithDerivative(preset.f)
    } catch {
      return null
    }
    const [a, b] = preset.bracket!
    // reference root: a high-iteration Newton run
    const ref = newton(compiled.eval, compiled.derivEval, { p0: preset.p0!, tol: 1e-15, maxIter: 60 })
    const pStar = ref.trace[ref.trace.length - 1]?.p ?? 0

    const errOf = (ps: number[]) =>
      ps.map((p, k) => ({ k, e: Math.max(FLOOR, Math.log10(Math.abs(p - pStar) || 10 ** FLOOR)) }))

    const bis = bisect(compiled.eval, { a, b, tol: 1e-14, maxIter: 60 }).trace.map((s) => s.p)
    const fp = falsePosition(compiled.eval, { a, b, tol: 1e-14, maxIter: 60 }).trace.map((s) => s.p)
    const sec = secant(compiled.eval, { p0: preset.p0!, p1: preset.p1!, tol: 1e-14, maxIter: 60 }).trace.map((s) => s.p)
    const nwt = ref.trace.map((s) => s.p)

    return {
      bisection: errOf(bis),
      'false-position': errOf(fp),
      secant: errOf(sec),
      newton: errOf(nwt),
    } as Record<string, { k: number; e: number }[]>
  }, [preset])

  const maxK = useMemo(() => {
    if (!series) return 10
    return Math.min(20, Math.max(...Object.values(series).map((s) => s.length)))
  }, [series])

  return (
    <WidgetShell
      controls={
        <>
          <label className="block text-sm font-medium mb-1">{t.preset}</label>
          <select
            value={presetId}
            onChange={(e) => setPresetId(e.target.value)}
            className="w-full rounded border border-ink-300 dark:border-ink-700 bg-white dark:bg-ink-900 px-3 py-2 text-sm"
          >
            {presets.map((p) => (
              <option key={p.id} value={p.id}>{p.label}</option>
            ))}
          </select>
          <ul className="mt-4 space-y-1 text-sm">
            {METHOD_META.map((m) => (
              <li key={m.key} className="flex items-center gap-2">
                <span style={{ width: 18, height: 3, background: m.color, display: 'inline-block' }} />
                {t.lang === 'hu' ? m.label.hu : m.label.en}
              </li>
            ))}
          </ul>
          <p className="text-xs text-ink-500 dark:text-ink-400 mt-3">
            y = log₁₀|pₖ − p*|
          </p>
        </>
      }
      plot={
        <Mafs viewBox={{ x: [0, maxK], y: [FLOOR, 1] }} preserveAspectRatio={false} height={340}>
          <Coordinates.Cartesian subdivisions={2} />
          {series &&
            METHOD_META.map((m) => {
              const pts = series[m.key].filter((d) => d.k <= maxK)
              return pts.slice(0, -1).map((d, i) => (
                <Line.Segment
                  key={`${m.key}-${i}`}
                  point1={[d.k, d.e]}
                  point2={[pts[i + 1].k, pts[i + 1].e]}
                  color={m.color}
                />
              ))
            })}
          {series &&
            METHOD_META.flatMap((m) =>
              series[m.key]
                .filter((d) => d.k <= maxK)
                .map((d) => <Point key={`${m.key}-pt-${d.k}`} x={d.k} y={d.e} color={m.color} />),
            )}
        </Mafs>
      }
    />
  )
}
