import { useMemo, useState } from 'react'
import { Section } from '../components/Section'
import { Plot, type Curve, type Marker } from '../components/Plot'
import { Slider } from '../components/Controls'
import { Tex } from '../components/Math'
import { useLang } from '../context/LangContext'

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

export function TruncationError() {
  const { t } = useLang()
  const [degree, setDegree] = useState(5)
  const [point, setPoint] = useState(3)

  const { curves, markers, err, bound } = useMemo(() => {
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
    const e = Math.abs(sinV - tayV)
    const b = Math.pow(Math.abs(point), degree + 1) / factorial(degree + 1)
    const m: Marker[] = [
      { x: point, y: sinV, color: 'var(--accent)' },
      { x: point, y: tayV, color: 'var(--bad)', label: 'Tₙ' },
    ]
    return { curves: [sinC, tayC], markers: m, err: e, bound: b }
  }, [degree, point])

  return (
    <Section id="trunc" tag={t('trunc.tag')} title={t('trunc.title')} lead={t('trunc.lead')}>
      <div className="split">
        <div className="prose">
          <p>{t('trunc.p1')}</p>
          <Tex block>{`T_5(x) = x - \\frac{x^3}{3!} + \\frac{x^5}{5!}`}</Tex>
          <Tex block>{`\\sin x = T_5(x) + \\underbrace{\\frac{f^{(6)}(\\xi)}{6!}x^6}_{\\text{truncation error}}`}</Tex>
          <div className="callout">
            <Tex>{`|\\sin x - T_n(x)| \\le \\dfrac{|x|^{n+1}}{(n+1)!}`}</Tex>
          </div>
        </div>

        <div className="panel">
          <Plot
            curves={curves}
            markers={markers}
            xDomain={[-7, 7]}
            yDomain={[-2.5, 2.5]}
            xLabel="x"
            yLabel="y"
          />
          <Slider
            label={t('trunc.degree')}
            value={degree}
            min={1}
            max={15}
            step={2}
            onChange={(v) => setDegree(v)}
          />
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
              <span className="v">{Math2(Math.sin(point))}</span>
            </div>
            <div>
              <span className="k">{t('trunc.approx')} = </span>
              <span className="v">{Math2(taylorSin(point, degree))}</span>
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
      </div>
    </Section>
  )
}

function Math2(v: number): string {
  if (!Number.isFinite(v)) return '∞'
  if (Math.abs(v) >= 1e4 || (Math.abs(v) > 0 && Math.abs(v) < 1e-4)) return v.toExponential(3)
  return v.toFixed(5)
}
