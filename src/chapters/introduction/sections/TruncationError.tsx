import { useState } from 'react'
import { Plot, type Curve, type Marker } from '../components/Plot'
import { Slider } from '../components/Controls'
import { Tex } from '../components/Math'
import { useLang } from '../context/LangContext'
import { ScrollySection, useKick } from './scrolly'
import type { ScrollyStep } from '../../../shared/scrolly'

function taylorSin(x: number, degree: number): number {
  // sum of odd terms up to `degree`
  let sum = 0
  let sign = 1
  for (let k = 1; k <= degree; k += 2) {
    sum += sign * Math.pow(x, k) / factorial(k)
    sign *= -1
  }
  return sum
}

function factorial(n: number): number {
  let f = 1
  for (let i = 2; i <= n; i++) f *= i
  return f
}

// degree shown at each scroll step — scrolling drives the Taylor order up
const DEGREES = [1, 3, 5, 11]

export function TruncationError() {
  const { t } = useLang()
  const k = useKick()
  const [point, setPoint] = useState(3)

  const steps: ScrollyStep[] = [
    { kicker: k('idea'), body: <p>{t('trunc.p1')}</p> },
    {
      kicker: k('formula'),
      body: <Tex block>{`T_5(x) = x - \\frac{x^3}{3!} + \\frac{x^5}{5!}`}</Tex>,
    },
    {
      kicker: k('formula'),
      body: (
        <Tex block>{`\\sin x = T_5(x) + \\underbrace{\\frac{f^{(6)}(\\xi)}{6!}x^6}_{\\text{truncation error}}`}</Tex>
      ),
    },
    {
      kicker: k('insight'),
      body: (
        <div className="callout">
          <Tex>{`|\\sin x - T_n(x)| \\le \\dfrac{|x|^{n+1}}{(n+1)!}`}</Tex>
        </div>
      ),
    },
  ]

  const graphic = (active: number) => {
    const degree = DEGREES[Math.min(active, DEGREES.length - 1)]
    const xs: number[] = []
    for (let x = -7; x <= 7; x += 0.1) xs.push(Number(x.toFixed(3)))
    const sinC: Curve = { points: xs.map((x) => [x, Math.sin(x)]), color: 'var(--accent)', width: 2 }
    const tayC: Curve = {
      points: xs.map((x) => [x, taylorSin(x, degree)]),
      color: 'var(--bad)',
      width: 2,
      dash: true,
    }
    const sinV = Math.sin(point)
    const tayV = taylorSin(point, degree)
    const err = Math.abs(sinV - tayV)
    const bound = Math.pow(Math.abs(point), degree + 1) / factorial(degree + 1)
    const markers: Marker[] = [
      { x: point, y: sinV, color: 'var(--accent)' },
      { x: point, y: tayV, color: 'var(--bad)', label: 'Tₙ' },
    ]
    return (
      <div className="panel">
        <h3>n = {degree}</h3>
        <Plot curves={[sinC, tayC]} markers={markers} xDomain={[-7, 7]} yDomain={[-2.5, 2.5]} xLabel="x" yLabel="y" />
        <Slider
          label={t('trunc.point')}
          value={point}
          min={-7}
          max={7}
          step={0.1}
          onChange={(v) => setPoint(Number(v.toFixed(2)))}
          format={(v) => v.toFixed(2)}
        />
        <div className="readout">
          <div>
            <span className="k">{t('trunc.exact')} = </span>
            <span className="v">{Math2(sinV)}</span>
          </div>
          <div>
            <span className="k">{t('trunc.approx')} = </span>
            <span className="v">{Math2(tayV)}</span>
          </div>
          <div>
            <span className="k">{t('trunc.error')} = </span>
            <span className="v bad">{Math2(err)}</span>
          </div>
          <div>
            <span className="k">{t('trunc.bound')} = </span>
            <span className="v warn">{Math2(bound)}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <ScrollySection
      id="trunc"
      tag={t('trunc.tag')}
      title={t('trunc.title')}
      lead={t('trunc.lead')}
      steps={steps}
      graphic={graphic}
    />
  )
}

function Math2(v: number): string {
  if (!Number.isFinite(v)) return '∞'
  if (Math.abs(v) >= 1e4 || (Math.abs(v) > 0 && Math.abs(v) < 1e-4)) return v.toExponential(3)
  return v.toFixed(5)
}
