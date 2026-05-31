import { useMemo, useState } from 'react'
import { motion } from 'motion/react'
import { Slider } from '../components/Controls'
import { Tex } from '../components/Math'
import { useLang } from '../context/LangContext'
import { evalNaive, evalHorner } from '../lib/arithmetic'
import { ScrollySection, useKick } from './scrolly'
import type { ScrollyStep } from '../../../shared/scrolly'
import { Quiz } from '../../../shared/ui/Quiz'
import { getQuiz } from '../content/quiz'

// p(x) = 5x^4 - 8x^3 + 2x^2 + 4x - 10  → coeffs[i] is a_i
const COEFFS = [-10, 4, 2, -8, 5]

export function Complexity() {
  const { t } = useLang()
  const k = useKick()
  const [x, setX] = useState(2)

  const { naive, horner } = useMemo(() => ({ naive: evalNaive(COEFFS, x), horner: evalHorner(COEFFS, x) }), [x])

  const bar = (label: string, mults: number, adds: number, value: number, accent: string) => {
    const maxMult = 12
    return (
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: 6 }}>
          <strong>{label}</strong>
          <span className="readout" style={{ margin: 0, padding: '2px 8px' }}>
            {t('cx.atX')} = {value.toFixed(2)}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-soft)', minWidth: 92 }}>{t('cx.mult')}</span>
          <div style={{ flex: 1, background: 'var(--panel-2)', borderRadius: 6, height: 22, overflow: 'hidden' }}>
            <motion.div
              animate={{ width: `${(mults / maxMult) * 100}%` }}
              transition={{ type: 'spring', stiffness: 200, damping: 24 }}
              style={{ height: '100%', background: accent, borderRadius: 6 }}
            />
          </div>
          <strong style={{ minWidth: 24, textAlign: 'right' }}>{mults}</strong>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 6 }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-soft)', minWidth: 92 }}>{t('cx.add')}</span>
          <div style={{ flex: 1, background: 'var(--panel-2)', borderRadius: 6, height: 22, overflow: 'hidden' }}>
            <motion.div
              animate={{ width: `${(adds / maxMult) * 100}%` }}
              transition={{ type: 'spring', stiffness: 200, damping: 24 }}
              style={{ height: '100%', background: 'var(--text-soft)', borderRadius: 6 }}
            />
          </div>
          <strong style={{ minWidth: 24, textAlign: 'right' }}>{adds}</strong>
        </div>
      </div>
    )
  }

  const steps: ScrollyStep[] = [
    { kicker: k('idea'), body: <p>{t('cx.p1')}</p> },
    { kicker: k('formula'), body: <Tex block>{`p(x) = 5x^4 - 8x^3 + 2x^2 + 4x - 10`}</Tex> },
    { kicker: k('formula'), body: <Tex block>{`\\;\\; = (((5x - 8)x + 2)x + 4)x - 10`}</Tex> },
    {
      kicker: k('insight'),
      body: (
        <div className="callout">
          <Tex>{`a_nx^n + \\cdots + a_0 \\;\\Rightarrow\\; n \\text{ mults}, \\; n \\text{ adds}`}</Tex>
        </div>
      ),
    },
    {
      kicker: k('insight'),
      body: (
        <div className="callout">
          <strong>{t('cx.space.title')}</strong>
          <p style={{ margin: '6px 0 0' }}>{t('cx.space.body')}</p>
        </div>
      ),
    },
  ]

  const graphic = () => (
    <div className="panel">
      <h3>{t('cx.opsLabel')}</h3>
      {bar(t('cx.naive'), naive.mults, naive.adds, naive.value, 'var(--bad)')}
      {bar(t('cx.horner'), horner.mults, horner.adds, horner.value, 'var(--good)')}
      <Slider
        label={t('cx.point')}
        value={x}
        min={-3}
        max={3}
        step={0.1}
        onChange={(v) => setX(Number(v.toFixed(2)))}
        format={(v) => v.toFixed(2)}
      />
    </div>
  )

  return (
    <ScrollySection
      id="cx"
      tag={t('cx.tag')}
      title={t('cx.title')}
      lead={t('cx.lead')}
      steps={steps}
      graphic={graphic}
    >
      <Quiz questions={getQuiz('cx')} />
    </ScrollySection>
  )
}
