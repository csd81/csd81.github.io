import { useEffect, useMemo, useState } from 'react'
import { Mafs, Coordinates, Plot, Line, Point, Theme } from 'mafs'
import 'mafs/core.css'
import 'mafs/font.css'

import { compileScalar } from '../../lib/expression'
import { fpi } from '../../lib/methods'
import { fpiPresets } from '../../lib/presets'
import { FunctionInput } from '../FunctionInput'

interface CobwebPlotProps {
  /** initial preset id; defaults to Hartung Example 2.10 */
  defaultPreset?: string
}

/**
 * Interactive cobweb (stair-step) diagram for the fixed-point iteration
 *   p_{k+1} = g(p_k).
 *
 * Draws y = g(x) (red), y = x (green), and the staircase from p_0.  Users
 * can pick a preset g, type their own g, change p_0, and step through
 * iterations.
 */
export function CobwebPlot({ defaultPreset = 'cubic-cobweb' }: CobwebPlotProps) {
  const initial = fpiPresets.find((p) => p.id === defaultPreset) ?? fpiPresets[0]
  const [gExpr, setGExpr] = useState(initial.g)
  const [p0, setP0] = useState(initial.p0)
  const [xRange, setXRange] = useState<[number, number]>(initial.xRange)
  const [maxIter, setMaxIter] = useState(15)

  // Compile g once per expression change
  const compiled = useMemo(() => {
    try {
      return compileScalar(gExpr)
    } catch {
      return null
    }
  }, [gExpr])

  // Run the iteration to produce the staircase points
  const trace = useMemo(() => {
    if (!compiled) return null
    return fpi(compiled.eval, { p0, tol: 1e-12, maxIter })
  }, [compiled, p0, maxIter])

  const staircase = useMemo(() => {
    if (!trace) return [] as [number, number][]
    // Staircase: from (p_k, p_k) up to (p_k, g(p_k)) horizontal to (g(p_k), g(p_k))…
    const pts: [number, number][] = []
    pts.push([p0, 0])
    pts.push([p0, trace.trace[0].gp])
    for (let i = 1; i < trace.trace.length; i++) {
      const prev = trace.trace[i - 1].gp
      const cur = trace.trace[i].gp
      pts.push([prev, prev]) // horizontal to y=x
      pts.push([prev, cur])  // up/down to graph
    }
    return pts
  }, [trace, p0])

  return (
    <div className="my-6 rounded-lg border border-ink-200 dark:border-ink-800 p-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Preset</label>
          <select
            value={fpiPresets.find((p) => p.g === gExpr)?.id ?? ''}
            onChange={(e) => {
              const next = fpiPresets.find((p) => p.id === e.target.value)
              if (next) {
                setGExpr(next.g)
                setP0(next.p0)
                setXRange(next.xRange)
              }
            }}
            className="w-full rounded border border-ink-300 dark:border-ink-700 bg-white dark:bg-ink-900 px-3 py-2 text-sm"
          >
            {fpiPresets.map((p) => (
              <option key={p.id} value={p.id}>{p.label}</option>
            ))}
            {!fpiPresets.find((p) => p.g === gExpr) && (
              <option value="" disabled>custom</option>
            )}
          </select>

          <FunctionInput label="g(x)" initialExpr={gExpr} onChangeValid={setGExpr} />

          <div className="grid grid-cols-2 gap-3 mt-2">
            <div>
              <label className="block text-sm font-medium mb-1">p₀</label>
              <input
                type="number"
                step="0.01"
                value={p0}
                onChange={(e) => setP0(Number(e.target.value))}
                className="w-full rounded border border-ink-300 dark:border-ink-700 bg-white dark:bg-ink-900 px-3 py-2 font-mono text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">max iterations</label>
              <input
                type="number"
                min={1}
                max={100}
                value={maxIter}
                onChange={(e) => setMaxIter(Math.max(1, Math.min(100, Number(e.target.value))))}
                className="w-full rounded border border-ink-300 dark:border-ink-700 bg-white dark:bg-ink-900 px-3 py-2 font-mono text-sm"
              />
            </div>
          </div>
        </div>

        <div>
          <Mafs
            viewBox={{ x: xRange, y: xRange }}
            preserveAspectRatio={false}
            height={360}
          >
            <Coordinates.Cartesian />
            {/* y = x */}
            <Line.Segment
              point1={[xRange[0], xRange[0]]}
              point2={[xRange[1], xRange[1]]}
              color={Theme.green}
            />
            {/* y = g(x) */}
            {compiled && (
              <Plot.OfX y={(x) => compiled.eval(x)} color={Theme.red} />
            )}
            {/* staircase */}
            {staircase.length >= 2 &&
              staircase
                .slice(0, -1)
                .map((pt, i) => (
                  <Line.Segment
                    key={i}
                    point1={pt}
                    point2={staircase[i + 1]}
                    color={Theme.blue}
                  />
                ))}
            {/* initial value marker */}
            <Point x={p0} y={0} color={Theme.indigo} />
          </Mafs>
        </div>
      </div>

      <details className="mt-4">
        <summary className="cursor-pointer text-sm font-medium">Iterate table</summary>
        <div className="mt-2 max-h-64 overflow-y-auto">
          <table className="w-full text-sm">
            <thead><tr><th>k</th><th>pₖ</th><th>g(pₖ)</th></tr></thead>
            <tbody>
              {trace?.trace.map((s) => (
                <tr key={s.k}>
                  <td>{s.k}</td>
                  <td className="font-mono">{s.p.toFixed(8)}</td>
                  <td className="font-mono">{s.gp.toFixed(8)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs mt-2 text-ink-500 dark:text-ink-400">
          Convergence:{' '}
          {trace?.converged
            ? `yes (${trace.reason}) in ${trace.trace.length - 1} step${trace.trace.length === 2 ? '' : 's'}`
            : `no (${trace?.reason ?? '—'})`}
        </p>
      </details>
    </div>
  )
}
