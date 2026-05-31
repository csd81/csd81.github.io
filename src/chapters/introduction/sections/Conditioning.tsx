import { useMemo, useState } from 'react'
import { Plot, type Curve, type Marker } from '../components/Plot'
import { Slider } from '../components/Controls'
import { Tex } from '../components/Math'
import { useLang } from '../context/LangContext'
import { ScrollySection, useKick } from './scrolly'
import type { ScrollyStep } from '../../../shared/scrolly'

// System:  8x + 917y = 1794 ;  c·x + 802y = 1569   (exact c = 7 → x=-5, y=2)
const A1 = 8,
  B1 = 917,
  R1 = 1794,
  B2 = 802,
  R2 = 1569,
  C0 = 7

function solve(c: number): { x: number; y: number } {
  const det = A1 * B2 - B1 * c
  const x = (R1 * B2 - B1 * R2) / det
  const y = (A1 * R2 - R1 * c) / det
  return { x, y }
}

export function Conditioning() {
  const { t } = useLang()
  const k = useKick()
  const [c, setC] = useState(7.01)

  const { curves, markers, sol, coeffChange, solChange } = useMemo(() => {
    const xs: number[] = []
    for (let x = -14; x <= 8; x += 0.25) xs.push(x)
    const line1: Curve = { points: xs.map((x) => [x, (R1 - A1 * x) / B1]), color: 'var(--accent)', width: 2 }
    const line2: Curve = { points: xs.map((x) => [x, (R2 - c * x) / B2]), color: 'var(--bad)', width: 2, dash: true }
    const s = solve(c)
    const base = solve(C0)
    const m: Marker[] = [{ x: s.x, y: s.y, color: 'var(--warn)', label: '(x, y)' }]
    const cc = Math.abs((c - C0) / C0) * 100
    const sc = Math.abs((s.x - base.x) / base.x) * 100
    return { curves: [line1, line2], markers: m, sol: s, coeffChange: cc, solChange: sc }
  }, [c])

  const ill = solChange > 10 * Math.max(coeffChange, 1e-9)

  const steps: ScrollyStep[] = [
    { kicker: k('idea'), body: <p>{t('cond.p1')}</p> },
    {
      kicker: k('explore'),
      body: (
        <Tex block>{`\\begin{aligned} 8x + 917y &= 1794 \\\\ ${c.toFixed(2)}\\,x + 802y &= 1569 \\end{aligned}`}</Tex>
      ),
    },
    {
      kicker: k('insight'),
      body: <div className={`callout ${ill ? 'warn' : ''}`}>{t('cond.note')}</div>,
    },
  ]

  const graphic = () => (
    <div className="panel">
      <Plot curves={curves} markers={markers} xDomain={[-14, 8]} yDomain={[1.7, 2.3]} xLabel="x" yLabel="y" />
      <Slider
        label={t('cond.perturb')}
        value={c}
        min={6.97}
        max={7.05}
        step={0.001}
        onChange={(v) => setC(Number(v.toFixed(3)))}
        format={(v) => v.toFixed(3)}
      />
      <div className="readout">
        <div>
          <span className="k">{t('cond.solution')}: </span>
          <span className="v">x = {sol.x.toFixed(4)}, y = {sol.y.toFixed(4)}</span>
        </div>
        <div>
          <span className="k">{t('cond.coeffChange')}: </span>
          <span className="v">{coeffChange.toFixed(3)}%</span>
        </div>
        <div>
          <span className="k">{t('cond.solChange')}: </span>
          <span className="v bad">{solChange.toFixed(1)}%</span>
        </div>
        <div style={{ marginTop: 6 }}>
          <span className="k">{t('cond.verdict')}: </span>
          <span className={`pill ${ill ? 'bad' : 'good'}`}>{ill ? t('cond.ill') : t('cond.well')}</span>
        </div>
      </div>
    </div>
  )

  return (
    <ScrollySection
      id="cond"
      tag={t('cond.tag')}
      title={t('cond.title')}
      lead={t('cond.lead')}
      steps={steps}
      graphic={graphic}
    />
  )
}
