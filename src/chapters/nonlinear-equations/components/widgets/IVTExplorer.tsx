import { useMemo, useState } from 'react'
import { Mafs, Coordinates, Plot, Line, Point, Theme } from 'mafs'
import 'mafs/core.css'
import 'mafs/font.css'

import { compileScalar } from '../../lib/expression'
import { FunctionInput } from '../FunctionInput'
import { WidgetShell, SliderField } from './WidgetShell'
import { useWidgetT } from './i18n'

const PRESETS = [
  { id: 'expcos', label: 'e^x − 2·cos(x)', f: 'exp(x) - 2*cos(x)', range: [-1, 2] as [number, number] },
  { id: 'cubic', label: 'x³ − x − 1', f: 'x^3 - x - 1', range: [-2, 2] as [number, number] },
  { id: 'sin', label: 'sin(x)', f: 'sin(x)', range: [-1, 5] as [number, number] },
]

/**
 * §2.1 — Calculus review. Illustrates Bolzano/IVT (a sign change on [a,b]
 * guarantees a root) and the Mean Value Theorem (a point c where the tangent is
 * parallel to the chord). Drag a and b with the sliders.
 */
export function IVTExplorer() {
  const t = useWidgetT()
  const [fExpr, setFExpr] = useState(PRESETS[0].f)
  const [range, setRange] = useState<[number, number]>(PRESETS[0].range)
  const [a, setA] = useState(-0.5)
  const [b, setB] = useState(1.5)

  const compiled = useMemo(() => {
    try {
      return compileScalar(fExpr)
    } catch {
      return null
    }
  }, [fExpr])

  const fa = compiled ? compiled.eval(a) : NaN
  const fb = compiled ? compiled.eval(b) : NaN
  const signChange = Number.isFinite(fa) && Number.isFinite(fb) && fa * fb < 0

  // Mean value theorem: find c in (a,b) where f'(c) ≈ chord slope.
  const mvt = useMemo(() => {
    if (!compiled || b <= a) return null
    const chord = (fb - fa) / (b - a)
    const h = 1e-4
    const dfdx = (x: number) => (compiled.eval(x + h) - compiled.eval(x - h)) / (2 * h)
    let best = a + (b - a) / 2
    let bestErr = Infinity
    for (let i = 1; i < 200; i++) {
      const x = a + ((b - a) * i) / 200
      const err = Math.abs(dfdx(x) - chord)
      if (err < bestErr) { bestErr = err; best = x }
    }
    return { c: best, slope: chord, fc: compiled.eval(best) }
  }, [compiled, a, b, fa, fb])

  const yRange = useMemo<[number, number]>(() => {
    if (!compiled) return [-2, 2]
    let lo = Infinity, hi = -Infinity
    for (let i = 0; i <= 80; i++) {
      const x = range[0] + ((range[1] - range[0]) * i) / 80
      const y = compiled.eval(x)
      if (Number.isFinite(y)) { lo = Math.min(lo, y); hi = Math.max(hi, y) }
    }
    if (!Number.isFinite(lo)) return [-2, 2]
    const pad = (hi - lo) * 0.15 || 1
    return [lo - pad, hi + pad]
  }, [compiled, range])

  return (
    <WidgetShell
      controls={
        <>
          <label className="block text-sm font-medium mb-1">{t.preset}</label>
          <select
            value={PRESETS.find((p) => p.f === fExpr)?.id ?? ''}
            onChange={(e) => {
              const nx = PRESETS.find((p) => p.id === e.target.value)
              if (nx) { setFExpr(nx.f); setRange(nx.range); setA(nx.range[0] + 0.3); setB(nx.range[1] - 0.3) }
            }}
            className="w-full rounded border border-ink-300 dark:border-ink-700 bg-white dark:bg-ink-900 px-3 py-2 text-sm"
          >
            {PRESETS.map((p) => <option key={p.id} value={p.id}>{p.label}</option>)}
            {!PRESETS.find((p) => p.f === fExpr) && <option value="" disabled>{t.custom}</option>}
          </select>
          <FunctionInput label="f(x)" initialExpr={fExpr} onChangeValid={setFExpr} />
          <SliderField label="a" value={a} onChange={setA} min={range[0]} max={range[1]} step={0.05} />
          <SliderField label="b" value={b} onChange={setB} min={range[0]} max={range[1]} step={0.05} />
        </>
      }
      plot={
        <Mafs viewBox={{ x: range, y: yRange }} preserveAspectRatio={false} height={340}>
          <Coordinates.Cartesian />
          {compiled && <Plot.OfX y={(x) => compiled.eval(x)} color={Theme.red} />}
          {/* endpoints */}
          {compiled && <Point x={a} y={fa} color={signChange ? Theme.green : Theme.indigo} />}
          {compiled && <Point x={b} y={fb} color={signChange ? Theme.green : Theme.indigo} />}
          {/* chord (MVT) */}
          {compiled && <Line.Segment point1={[a, fa]} point2={[b, fb]} color={Theme.blue} opacity={0.6} />}
          {/* parallel tangent at c */}
          {mvt && (
            <>
              <Point x={mvt.c} y={mvt.fc} color={Theme.orange} />
              <Line.PointSlope point={[mvt.c, mvt.fc]} slope={mvt.slope} color={Theme.orange} opacity={0.7} />
            </>
          )}
        </Mafs>
      }
      footer={
        <p className="text-sm">
          {signChange ? (
            <span className="text-emerald-600 dark:text-emerald-400">
              ✓ f(a)·f(b) &lt; 0 — {t.lang === 'hu' ? 'a Bolzano-tétel szerint van gyök [a, b]-ben.' : 'by the IVT a root exists in [a, b].'}
            </span>
          ) : (
            <span className="text-ink-500 dark:text-ink-400">
              {t.lang === 'hu' ? 'Nincs előjelváltás — a Bolzano-tétel nem garantál gyököt.' : 'No sign change — the IVT does not guarantee a root here.'}
            </span>
          )}
          {mvt && (
            <span className="font-mono"> · MVT: c={mvt.c.toFixed(3)}, {t.slope}={mvt.slope.toFixed(3)}</span>
          )}
        </p>
      }
    />
  )
}
