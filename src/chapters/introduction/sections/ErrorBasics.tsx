import { useState } from 'react'
import { motion } from 'motion/react'
import { Tex } from '../components/Math'
import { useLang } from '../context/LangContext'
import { errorInfo } from '../lib/arithmetic'
import { ScrollySection, useKick } from './scrolly'
import type { ScrollyStep } from '../../../shared/scrolly'

export function ErrorBasics() {
  const { t } = useLang()
  const k = useKick()
  const [exact, setExact] = useState('1657.3')
  const [approx, setApprox] = useState('1656.2')

  const xe = parseFloat(exact)
  const xa = parseFloat(approx)
  const valid = Number.isFinite(xe) && Number.isFinite(xa) && xe !== 0
  const info = valid ? errorInfo(xe, xa) : null

  const steps: ScrollyStep[] = [
    { kicker: k('idea'), body: <p>{t('eb.p1')}</p> },
    {
      kicker: k('formula'),
      body: (
        <Tex block>{`\\frac{|x - \\tilde{x}|}{|x|} \\le \\tfrac{1}{2}\\cdot 10^{1-n} \\;\\Rightarrow\\; \\text{exact in } n \\text{ digits}`}</Tex>
      ),
    },
    {
      kicker: k('explore'),
      body: (
        <div className="callout">
          <Tex>{`x = 1657.3,\\; \\tilde{x} = 1656.2 \\Rightarrow \\delta \\approx 6.6\\times10^{-4}`}</Tex>
        </div>
      ),
    },
  ]

  const graphic = () => (
    <div className="panel">
      <div className="control-row">
        <label>{t('eb.exact')}</label>
        <input type="number" value={exact} onChange={(e) => setExact(e.target.value)} />
      </div>
      <div className="control-row">
        <label>{t('eb.approx')}</label>
        <input type="number" value={approx} onChange={(e) => setApprox(e.target.value)} />
      </div>
      {info && (
        <div className="readout">
          <div>
            <span className="k">{t('eb.abs')} = </span>
            <span className="v">{info.abs.toExponential(4)}</span>
          </div>
          <div>
            <span className="k">{t('eb.rel')} = </span>
            <span className="v">{info.rel.toExponential(4)}</span>
          </div>
          <div style={{ marginTop: 6 }}>
            <span className="k">{t('eb.exactDigits')}: </span>
            <motion.span key={info.exactDigits} className="pill good" initial={{ scale: 1.3 }} animate={{ scale: 1 }}>
              {Number.isFinite(info.exactDigits) ? info.exactDigits : '∞'}
            </motion.span>
          </div>
        </div>
      )}
    </div>
  )

  return (
    <ScrollySection
      id="eb"
      tag={t('eb.tag')}
      title={t('eb.title')}
      lead={t('eb.lead')}
      steps={steps}
      graphic={graphic}
    />
  )
}
