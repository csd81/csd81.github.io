import { useMemo, useState } from 'react'
import { Mafs, Coordinates, Line, Point, Theme } from 'mafs'
import 'mafs/core.css'
import 'mafs/font.css'

import { compileVec2 } from '../../lib/expression'
import { newton2D, broyden, v2 } from '../../lib/methods'
import type { Vec2 } from '../../lib/methods'
import { system226 } from '../../lib/presets'
import { WidgetShell, SliderField } from './WidgetShell'
import { useWidgetT } from './i18n'

const FLOOR = -16
const lg = (v: number) => (v > 0 ? Math.max(FLOOR, Math.log10(v)) : FLOOR)

/**
 * §2.13 — Broyden vs Newton on the same 2D system. Both converge superlinearly;
 * Newton is quadratic (steeper) while Broyden (a quasi-Newton update that never
 * forms the Jacobian) is a touch slower but cheaper per step.
 */
export function BroydenVsNewton() {
  const t = useWidgetT()
  const [x0, setX0] = useState(2)
  const [y0, setY0] = useState(-1)

  const series = useMemo(() => {
    const v = compileVec2(system226.f1, system226.f2)
    const f = (p: Vec2) => v.eval(p)
    const jac = v.jacobian()
    const pStar = system226.pStar
    const nwt = newton2D(f, jac, { p0: [x0, y0], tol: 1e-13, maxIter: 30, pStar })
    const brd = broyden(f, { p0: [x0, y0], h: 1e-4, tol: 1e-13, maxIter: 30, pStar })
    const errN = nwt.trace.map((s, k) => ({ k, e: lg(v2.normInf(v2.sub(s.p, pStar))) }))
    const errB = brd.trace.map((s, k) => ({ k, e: lg(v2.normInf(v2.sub(s.p, pStar))) }))
    return { errN, errB, nConv: nwt.converged, bConv: brd.converged }
  }, [x0, y0])

  const maxK = Math.max(series.errN.length, series.errB.length) - 1 || 8

  const polyline = (pts: { k: number; e: number }[], color: string) =>
    pts.slice(0, -1).map((d, i) => (
      <Line.Segment key={`${color}-${i}`} point1={[d.k, d.e]} point2={[pts[i + 1].k, pts[i + 1].e]} color={color} />
    ))

  return (
    <WidgetShell
      controls={
        <>
          <p className="text-sm mb-2">{t.lang === 'hu' ? 'Konvergencia ugyanarról a startról' : 'Convergence from the same start'}</p>
          <ul className="space-y-1 text-sm mb-3">
            <li className="flex items-center gap-2"><span style={{ width: 18, height: 3, background: Theme.red, display: 'inline-block' }} />Newton</li>
            <li className="flex items-center gap-2"><span style={{ width: 18, height: 3, background: Theme.blue, display: 'inline-block' }} />Broyden</li>
          </ul>
          <SliderField label="x₀" value={x0} onChange={setX0} min={-1} max={3} step={0.1} />
          <SliderField label="y₀" value={y0} onChange={setY0} min={-3} max={1} step={0.1} />
          <p className="text-xs text-ink-500 dark:text-ink-400 mt-2">y = log₁₀‖pₖ − p*‖∞</p>
        </>
      }
      plot={
        <Mafs viewBox={{ x: [0, maxK], y: [FLOOR, 1] }} preserveAspectRatio={false} height={340}>
          <Coordinates.Cartesian subdivisions={2} />
          {polyline(series.errB, Theme.blue)}
          {polyline(series.errN, Theme.red)}
          {series.errB.map((d) => <Point key={`b-${d.k}`} x={d.k} y={d.e} color={Theme.blue} />)}
          {series.errN.map((d) => <Point key={`n-${d.k}`} x={d.k} y={d.e} color={Theme.red} />)}
        </Mafs>
      }
    />
  )
}
