import { useMemo, useState } from 'react'
import { Plot, type Curve } from '../components/Plot'
import { Segmented, Slider } from '../components/Controls'
import { Tex } from '../components/Math'
import { useLang } from '../context/LangContext'
import { sequences, EPS_SINGLE, EPS_DOUBLE } from '../lib/arithmetic'
import { ScrollySection, useKick } from './scrolly'
import type { ScrollyStep } from '../../../shared/scrolly'

export function AlgorithmStability() {
  const { t } = useLang()
  const k = useKick()
  const [prec, setPrec] = useState<'single' | 'double'>('single')
  const [N, setN] = useState(18)

  const rows = useMemo(() => sequences(N, prec === 'single' ? EPS_SINGLE : EPS_DOUBLE), [N, prec])

  const curves: Curve[] = useMemo(() => {
    const errY: Curve = {
      points: rows.map((r) => [r.n, Math.max(r.errY, 1e-20)]),
      color: 'var(--warn)',
      width: 2,
    }
    const errZ: Curve = {
      points: rows.map((r) => [r.n, Math.max(r.errZ, 1e-20)]),
      color: 'var(--bad)',
      width: 2.5,
    }
    return [errY, errZ]
  }, [rows])

  const last = rows[rows.length - 1]

  const steps: ScrollyStep[] = [
    { kicker: k('idea'), body: <p>{t('stab.p1')}</p> },
    {
      kicker: k('formula'),
      body: (
        <Tex block>{`\\begin{aligned}
            x_n &= \\tfrac{1}{3}x_{n-1}, & x_0 &= 1 \\\\
            y_n &= 2y_{n-1} - \\tfrac{5}{9}y_{n-2}, & y_0 = 1,\\; y_1 &= \\tfrac{1}{3} \\\\
            z_n &= \\tfrac{13}{3}z_{n-1} - \\tfrac{4}{3}z_{n-2}, & z_0 = 1,\\; z_1 &= \\tfrac{1}{3}
          \\end{aligned}`}</Tex>
      ),
    },
    { kicker: k('warn'), body: <div className="callout warn">{t('stab.note')}</div> },
    {
      kicker: k('explore'),
      body: (
        <table className="tbl" style={{ marginTop: 0 }}>
          <thead>
            <tr>
              <th className="lbl">{t('stab.col.n')}</th>
              <th>xₙ</th>
              <th>yₙ</th>
              <th>zₙ</th>
              <th>|zₙ−1/3ⁿ|</th>
            </tr>
          </thead>
          <tbody>
            {rows
              .filter((_, i) => i % Math.ceil(rows.length / 9) === 0 || i === rows.length - 1)
              .map((r) => (
                <tr key={r.n}>
                  <td className="lbl">{r.n}</td>
                  <td>{r.x.toExponential(2)}</td>
                  <td>{r.y.toExponential(2)}</td>
                  <td className={r.errZ > 1 ? 'bad' : ''}>{r.z.toExponential(2)}</td>
                  <td className={r.errZ > 1 ? 'bad' : ''}>{r.errZ.toExponential(2)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      ),
    },
  ]

  const graphic = () => (
    <div className="panel">
      <h3>{t('stab.col.true')} — |error| (log scale)</h3>
      <Plot curves={curves} xDomain={[2, N]} yDomain={[1e-16, 1e3]} logY xLabel="n" yLabel="|err|" />
      <div style={{ display: 'flex', gap: 16, fontSize: '0.85rem', marginTop: 4 }}>
        <span style={{ color: 'var(--warn)' }}>● yₙ</span>
        <span style={{ color: 'var(--bad)' }}>● zₙ</span>
      </div>
      <Segmented
        label={t('stab.precision')}
        value={prec}
        options={[
          { value: 'single', label: t('stab.single') },
          { value: 'double', label: t('stab.double') },
        ]}
        onChange={setPrec}
      />
      <Slider label={t('stab.terms')} value={N} min={6} max={30} step={1} onChange={(v) => setN(Math.round(v))} />
      <div className="readout">
        <span className="k">|z₍{last.n}₎ − 1/3^{last.n}| = </span>
        <span className="v bad">{last.errZ.toExponential(3)}</span>
      </div>
    </div>
  )

  return (
    <ScrollySection
      id="stab"
      tag={t('stab.tag')}
      title={t('stab.title')}
      lead={t('stab.lead')}
      steps={steps}
      graphic={graphic}
    />
  )
}
