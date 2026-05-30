import { useMemo, useState } from 'react'
import { Mafs, Coordinates, Plot, Line, Point, Theme } from 'mafs'
import 'mafs/core.css'
import 'mafs/font.css'

import { compileVec2 } from '../../lib/expression'
import { newton2D } from '../../lib/methods'
import type { Vec2 } from '../../lib/methods'
import { system226 } from '../../lib/presets'
import { WidgetShell, SliderField } from './WidgetShell'
import { useWidgetT } from './i18n'

/**
 * §2.12 — Newton's method in 2D, on the example system (Hartung 2.51):
 *   4x − e^{xy} − 3 = 0,   x − y² − 3y − 1 = 0,   root p* = (1, 0).
 * Plots the f₂ zero-curve as a guide and the Newton trajectory from a chosen
 * start point converging (quadratically) to p*.
 */
export function Newton2DPlot() {
  const t = useWidgetT()
  const [x0, setX0] = useState(2)
  const [y0, setY0] = useState(-1)

  const sys = useMemo(() => {
    const v = compileVec2(system226.f1, system226.f2)
    return { f: (p: Vec2) => v.eval(p), jac: v.jacobian() }
  }, [])

  const result = useMemo(
    () => newton2D(sys.f, sys.jac, { p0: [x0, y0], tol: 1e-12, maxIter: 30, pStar: system226.pStar }),
    [sys, x0, y0],
  )

  const traj = result.trace.map((s) => s.p)

  return (
    <WidgetShell
      controls={
        <>
          <p className="text-sm mb-2 font-mono">{system226.label}</p>
          <SliderField label="x₀" value={x0} onChange={setX0} min={-1} max={3} step={0.1} />
          <SliderField label="y₀" value={y0} onChange={setY0} min={-3} max={1} step={0.1} />
          <p className="text-sm font-mono mt-2">
            {result.converged
              ? `✓ ${t.converged} → (${traj[traj.length - 1][0].toFixed(4)}, ${traj[traj.length - 1][1].toFixed(4)}) · ${traj.length - 1} ${t.steps}`
              : `${t.diverged} (${result.reason})`}
          </p>
        </>
      }
      plot={
        <Mafs viewBox={{ x: [-1.5, 3.5], y: [-3.5, 1.5] }} preserveAspectRatio={false} height={340}>
          <Coordinates.Cartesian />
          {/* f₂ = 0 zero curve: x = y² + 3y + 1 (parametric in y) */}
          <Plot.Parametric
            t={[-3.5, 1.5]}
            xy={(y) => [y * y + 3 * y + 1, y]}
            color={Theme.green}
            opacity={0.6}
          />
          {/* trajectory */}
          {traj.slice(0, -1).map((p, i) => (
            <Line.Segment key={i} point1={[p[0], p[1]]} point2={[traj[i + 1][0], traj[i + 1][1]]} color={Theme.blue} />
          ))}
          {traj.map((p, i) => (
            <Point key={`pt-${i}`} x={p[0]} y={p[1]} color={Theme.indigo} />
          ))}
          {/* the true root */}
          <Point x={system226.pStar[0]} y={system226.pStar[1]} color={Theme.red} />
        </Mafs>
      }
      footer={<p className="text-xs text-ink-500 dark:text-ink-400">{t.lang === 'hu' ? 'zöld: f₂ = 0 görbe · piros: gyök p*' : 'green: f₂ = 0 curve · red: root p*'}</p>}
    />
  )
}
