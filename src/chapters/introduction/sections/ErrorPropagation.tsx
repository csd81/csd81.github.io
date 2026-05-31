import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Segmented } from '../components/Controls'
import { Tex } from '../components/Math'
import { useLang } from '../context/LangContext'
import { propagate, type Op } from '../lib/arithmetic'
import { ScrollySection, useKick } from './scrolly'
import type { ScrollyStep } from '../../../shared/scrolly'
import { Quiz } from '../../../shared/ui/Quiz'
import { getQuiz } from '../content/quiz'

export function ErrorPropagation() {
  const { t } = useLang()
  const k = useKick()
  const [x, setX] = useState('12.47531')
  const [y, setY] = useState('12.47326')
  const [dx, setDx] = useState('0.00003')
  const [dy, setDy] = useState('0.00001')
  const [op, setOp] = useState<Op>('sub')

  const nx = parseFloat(x),
    ny = parseFloat(y),
    ndx = Math.abs(parseFloat(dx)),
    ndy = Math.abs(parseFloat(dy))
  const valid = [nx, ny, ndx, ndy].every(Number.isFinite) && nx !== 0 && ny !== 0
  const r = valid ? propagate(nx, ny, ndx, ndy, op) : null

  const opSym: Record<Op, string> = { add: '+', sub: '−', mul: '×', div: '÷' }

  const steps: ScrollyStep[] = [
    { kicker: k('idea'), body: <p>{t('ep.p1')}</p> },
    { kicker: k('formula'), body: <Tex block>{`\\delta_{x-y} = \\frac{x}{x-y}\\delta_x + \\frac{y}{x-y}\\delta_y`}</Tex> },
    {
      kicker: k('warn'),
      body: (
        <div className="callout warn">
          <Tex>{`x \\approx y \\Rightarrow \\frac{x}{x-y} \\to \\infty`}</Tex>
        </div>
      ),
    },
    {
      kicker: k('insight'),
      body: (
        <div className="callout">
          <strong>{t('ep.rulesTitle')}</strong>
          <Tex block>{`\\Delta_{x\\pm y} = \\Delta_x + \\Delta_y, \\qquad \\delta_{x+y} = \\max\\{\\delta_x,\\,\\delta_y\\}`}</Tex>
          <p style={{ margin: '4px 0 0', fontSize: '0.88rem' }}>{t('ep.ruleAdd')}</p>
          <p style={{ margin: '4px 0 0', fontSize: '0.88rem' }}>{t('ep.ruleSub')}</p>
          <Tex block>{`\\delta_{xy} \\approx \\delta_x + \\delta_y, \\qquad \\delta_{x/y} \\approx \\frac{\\delta_x + \\delta_y}{1 - \\delta_y}`}</Tex>
          <p style={{ margin: '4px 0 0', fontSize: '0.88rem' }}>{t('ep.ruleMul')}</p>
          <p style={{ margin: '4px 0 0', fontSize: '0.88rem' }}>{t('ep.ruleDiv')}</p>
        </div>
      ),
    },
  ]

  const graphic = () => (
    <div className="panel">
      <div className="control-row">
        <label>{t('ep.x')}</label>
        <input type="number" value={x} onChange={(e) => setX(e.target.value)} />
        <input type="number" value={dx} onChange={(e) => setDx(e.target.value)} />
      </div>
      <div className="control-row">
        <label>{t('ep.y')}</label>
        <input type="number" value={y} onChange={(e) => setY(e.target.value)} />
        <input type="number" value={dy} onChange={(e) => setDy(e.target.value)} />
      </div>
      <Segmented
        label={t('ep.op')}
        value={op}
        options={[
          { value: 'add', label: '+' },
          { value: 'sub', label: '−' },
          { value: 'mul', label: '×' },
          { value: 'div', label: '÷' },
        ]}
        onChange={setOp}
      />
      {r && (
        <div className="readout">
          <div>
            <span className="k">{t('ep.result')} = </span>
            <span className="v">{fmt(r.exact)} ({opSym[op]})</span>
          </div>
          <div>
            <span className="k">{t('ep.absBound')} = </span>
            <span className="v">{r.absBound.toExponential(3)}</span>
          </div>
          <div>
            <span className="k">{t('ep.relBound')} = </span>
            <span className="v warn">{r.relBound.toExponential(3)}</span>
          </div>
          <div>
            <span className="k">{t('ep.actual')} = </span>
            <span className="v">{r.actualRel.toExponential(3)}</span>
          </div>
        </div>
      )}
      <AnimatePresence>
        {r?.lossOfSignificance && (
          <motion.div
            className="callout warn"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{ marginBottom: 0 }}
          >
            <span className="pill bad" style={{ marginRight: 8 }}>
              {t('ep.lossTitle')}
            </span>
            {t('ep.lossWarn')}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )

  return (
    <ScrollySection
      id="ep"
      tag={t('ep.tag')}
      title={t('ep.title')}
      lead={t('ep.lead')}
      steps={steps}
      graphic={graphic}
    >
      <Quiz questions={getQuiz('ep')} />
    </ScrollySection>
  )
}

function fmt(v: number): string {
  if (!Number.isFinite(v)) return '∞'
  if (Math.abs(v) >= 1e5 || (Math.abs(v) > 0 && Math.abs(v) < 1e-4)) return v.toExponential(4)
  return Number(v.toPrecision(7)).toString()
}
