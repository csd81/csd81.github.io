import { useMemo, useState } from 'react'
import { Mafs, Coordinates, Line, Point, Theme } from 'mafs'
import 'mafs/core.css'
import 'mafs/font.css'

import { compileWithDerivative } from '../../lib/expression'
import { newton } from '../../lib/methods'
import { scalarPresets } from '../../lib/presets'
import { WidgetShell, SliderField } from './WidgetShell'
import { useWidgetT } from './i18n'

const presets = scalarPresets.filter((p) => p.p0 !== undefined)
const FLOOR = -16

const SERIES = [
  { key: 'abs', color: Theme.blue, label: { en: '|pₖ − pₖ₋₁|  (absolute step)', hu: '|pₖ − pₖ₋₁|  (abszolút lépés)' } },
  { key: 'rel', color: Theme.green, label: { en: '|pₖ − pₖ₋₁| / |pₖ|  (relative)', hu: '|pₖ − pₖ₋₁| / |pₖ|  (relatív)' } },
  { key: 'res', color: Theme.red, label: { en: '|f(pₖ)|  (residual)', hu: '|f(pₖ)|  (reziduum)' } },
] as const

/**
 * §2.8 — Stopping criteria. Runs Newton and plots the three common stopping
 * quantities (absolute step, relative step, residual) on a log scale against a
 * draggable tolerance line, showing they can trigger at different iterations.
 */
export function StoppingCriteriaLab() {
  const t = useWidgetT()
  const [presetId, setPresetId] = useState(presets.find((p) => p.id === 'cube-root-2')?.id ?? presets[0].id)
  const [tolExp, setTolExp] = useState(-8)
  const preset = presets.find((p) => p.id === presetId)!

  const data = useMemo(() => {
    let compiled
    try {
      compiled = compileWithDerivative(preset.f)
    } catch {
      return null
    }
    const res = newton(compiled.eval, compiled.derivEval, { p0: preset.p0!, tol: 1e-15, maxIter: 25 })
    const rows = res.trace.map((s, k) => {
      const prev = k > 0 ? res.trace[k - 1].p : s.p
      const absStep = k > 0 ? Math.abs(s.p - prev) : NaN
      const rel = k > 0 ? absStep / (Math.abs(s.p) || 1e-30) : NaN
      const resid = Math.abs(s.fp)
      const lg = (v: number) => (Number.isFinite(v) && v > 0 ? Math.max(FLOOR, Math.log10(v)) : NaN)
      return { k, abs: lg(absStep), rel: lg(rel), res: lg(resid) }
    })
    return rows
  }, [preset])

  const maxK = data ? data.length - 1 : 10
  const tolY = tolExp

  const firstTrigger = useMemo(() => {
    if (!data) return {}
    const out: Record<string, number | null> = {}
    for (const s of SERIES) {
      const hit = data.find((r) => Number.isFinite(r[s.key as 'abs' | 'rel' | 'res']) && (r[s.key as 'abs' | 'rel' | 'res']) <= tolY)
      out[s.key] = hit ? hit.k : null
    }
    return out
  }, [data, tolY])

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

          <SliderField
            label={`tol = 10^${tolExp}`}
            value={tolExp}
            onChange={setTolExp}
            min={-15}
            max={-1}
            step={1}
          />

          <ul className="mt-3 space-y-1 text-sm">
            {SERIES.map((s) => (
              <li key={s.key} className="flex items-center gap-2">
                <span style={{ width: 18, height: 3, background: s.color, display: 'inline-block' }} />
                <span className="flex-1">{t.lang === 'hu' ? s.label.hu : s.label.en}</span>
                <span className="font-mono text-xs text-ink-500 dark:text-ink-400">
                  {firstTrigger[s.key] != null ? `k=${firstTrigger[s.key]}` : '—'}
                </span>
              </li>
            ))}
          </ul>
        </>
      }
      plot={
        <Mafs viewBox={{ x: [0, maxK], y: [FLOOR, 1] }} preserveAspectRatio={false} height={340}>
          <Coordinates.Cartesian subdivisions={2} />
          {/* tolerance line */}
          <Line.Segment point1={[0, tolY]} point2={[maxK, tolY]} color={Theme.foreground} opacity={0.5} />
          {data &&
            SERIES.map((s) => {
              const pts = data.filter((r) => Number.isFinite(r[s.key as 'abs' | 'rel' | 'res']))
              return pts.slice(0, -1).map((r, i) => (
                <Line.Segment
                  key={`${s.key}-${i}`}
                  point1={[r.k, r[s.key as 'abs' | 'rel' | 'res']]}
                  point2={[pts[i + 1].k, pts[i + 1][s.key as 'abs' | 'rel' | 'res']]}
                  color={s.color}
                />
              ))
            })}
          {data &&
            SERIES.flatMap((s) =>
              data
                .filter((r) => Number.isFinite(r[s.key as 'abs' | 'rel' | 'res']))
                .map((r) => (
                  <Point key={`${s.key}-pt-${r.k}`} x={r.k} y={r[s.key as 'abs' | 'rel' | 'res']} color={s.color} />
                )),
            )}
        </Mafs>
      }
      footer={
        <p className="text-xs text-ink-500 dark:text-ink-400">y = log₁₀ · {t.lang === 'hu' ? 'a vízszintes vonal a tűrés' : 'horizontal line is the tolerance'}</p>
      }
    />
  )
}
