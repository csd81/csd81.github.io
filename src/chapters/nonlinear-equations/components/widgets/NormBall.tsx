import { useState } from 'react'
import { Mafs, Coordinates, Plot, Theme } from 'mafs'
import 'mafs/core.css'
import 'mafs/font.css'

import { unitBallPoint } from '../../lib/norms'
import { WidgetShell, SliderField } from './WidgetShell'
import { useWidgetT } from './i18n'

const TWO_PI = Math.PI * 2

/**
 * §2.10 — Vector norms. Draws the unit balls {x : ‖x‖_p = 1} in R² for the
 * reference exponents p = 1 (diamond), 2 (circle), ∞ (square), plus a bold ball
 * for the slider value p that morphs continuously between them.
 */
export function NormBall() {
  const t = useWidgetT()
  const [p, setP] = useState(3)
  const [infinity, setInfinity] = useState(false)
  const pEff = infinity ? Number.POSITIVE_INFINITY : p

  const ball = (pv: number) => (s: number) => unitBallPoint(s * TWO_PI, pv)

  return (
    <WidgetShell
      controls={
        <>
          <p className="text-sm mb-2">{t.lang === 'hu' ? 'Egységgömbök az ‖·‖_p normában' : 'Unit balls in the ‖·‖_p norm'}</p>
          <ul className="space-y-1 text-sm mb-3">
            <li className="flex items-center gap-2"><span style={{ width: 18, height: 3, background: Theme.blue, display: 'inline-block' }} />p = 1 ({t.lang === 'hu' ? 'rombusz' : 'diamond'})</li>
            <li className="flex items-center gap-2"><span style={{ width: 18, height: 3, background: Theme.green, display: 'inline-block' }} />p = 2 ({t.lang === 'hu' ? 'kör' : 'circle'})</li>
            <li className="flex items-center gap-2"><span style={{ width: 18, height: 3, background: Theme.orange, display: 'inline-block' }} />p = ∞ ({t.lang === 'hu' ? 'négyzet' : 'square'})</li>
            <li className="flex items-center gap-2"><span style={{ width: 18, height: 3, background: Theme.red, display: 'inline-block' }} />p = {infinity ? '∞' : p}</li>
          </ul>
          <SliderField label={t.pValue} value={p} onChange={setP} min={1} max={8} step={0.1} />
          <label className="mt-2 flex items-center gap-2 text-sm">
            <input type="checkbox" checked={infinity} onChange={(e) => setInfinity(e.target.checked)} />
            p = ∞
          </label>
        </>
      }
      plot={
        <Mafs viewBox={{ x: [-1.6, 1.6], y: [-1.6, 1.6] }} height={340}>
          <Coordinates.Cartesian />
          <Plot.Parametric t={[0, 1]} xy={ball(1)} color={Theme.blue} opacity={0.45} />
          <Plot.Parametric t={[0, 1]} xy={ball(2)} color={Theme.green} opacity={0.45} />
          <Plot.Parametric t={[0, 1]} xy={(s) => unitBallPoint(s * TWO_PI, Number.POSITIVE_INFINITY)} color={Theme.orange} opacity={0.45} />
          <Plot.Parametric t={[0, 1]} xy={(s) => unitBallPoint(s * TWO_PI, pEff)} color={Theme.red} />
        </Mafs>
      }
    />
  )
}
