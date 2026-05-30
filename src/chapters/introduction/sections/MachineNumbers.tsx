import { useMemo, useState } from 'react'
import { motion } from 'motion/react'
import { Section } from '../components/Section'
import { Segmented, Slider } from '../components/Controls'
import { Tex } from '../components/Math'
import { useLang } from '../context/LangContext'
import { flSingle, type FlMode, EPS_SINGLE, EPS_DOUBLE } from '../lib/arithmetic'

// 4-bit non-negative machine numbers from the chapter (Fig 1.2)
const FOURBIT = [0, 5 / 8, 6 / 8, 7 / 8, 8 / 8, 10 / 8, 12 / 8, 14 / 8]

export function MachineNumbers() {
  const { t } = useLang()
  const [mode, setMode] = useState<FlMode>('round')
  const [x, setX] = useState(12.4)

  const fl = useMemo(() => flSingle(x, mode), [x, mode])

  return (
    <Section id="mach" tag={t('mach.tag')} title={t('mach.title')} lead={t('mach.lead')}>
      <div className="split">
        <div className="prose">
          <p>{t('mach.p1')}</p>
          <Tex block>{`12.4 = (1.1000110011\\ldots)_2 \\cdot 2^3`}</Tex>

          <div className="panel" style={{ marginTop: 8 }}>
            <h3>{t('mach.epsTitle')}</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-soft)' }}>{t('mach.epsExplain')}</p>
            <div className="readout">
              <div>
                <span className="k">{t('mach.epsSingle')}: </span>
                <span className="v">ε = 2⁻²³ ≈ {EPS_SINGLE.toExponential(4)}</span>
              </div>
              <div>
                <span className="k">{t('mach.epsDouble')}: </span>
                <span className="v">ε = 2⁻⁵² ≈ {EPS_DOUBLE.toExponential(4)}</span>
              </div>
            </div>
          </div>

          <div className="callout" style={{ marginTop: 12 }}>
            <strong>{t('mach.thmTitle')}</strong>
            <Tex block>{`\\frac{|\\mathrm{fl}(x) - x|}{|x|} \\le u, \\qquad u = \\tfrac12 b^{1-t}\\ \\text{(rounding)}`}</Tex>
            <p style={{ margin: '6px 0 0', fontSize: '0.9rem' }}>{t('mach.thmBody')}</p>
          </div>
        </div>

        <div className="panel">
          <Segmented
            label={t('mach.mode')}
            value={mode}
            options={[
              { value: 'round', label: t('mach.round') },
              { value: 'chop', label: t('mach.chop') },
            ]}
            onChange={setMode}
          />
          <Slider
            label={t('mach.input')}
            value={x}
            min={0.1}
            max={100}
            step={0.1}
            onChange={(v) => setX(Number(v.toFixed(2)))}
            format={(v) => v.toFixed(2)}
          />
          <div className="readout">
            <div>
              <span className="k">{t('mach.binary')}: </span>
              <span className="v">{fl.binaryNormal}…₂ · 2^{fl.exponent}</span>
            </div>
            <div>
              <span className="k">{t('mach.stored')}: </span>
              <span className="v">{fl.mantissaBits}</span>
            </div>
            <div>
              <span className="k">{t('mach.fl')}: </span>
              <motion.span key={fl.value} className="v" initial={{ color: 'var(--accent)' }} animate={{ color: 'var(--text)' }}>
                {fl.value.toPrecision(12)}
              </motion.span>
            </div>
            <div>
              <span className="k">{t('mach.absErr')}: </span>
              <span className="v warn">{fl.absError === 0 ? '0 (exact)' : fl.absError.toExponential(4)}</span>
            </div>
          </div>

          <h3 style={{ marginTop: 22 }}>{t('mach.numlineTitle')}</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-soft)', marginTop: 0 }}>{t('mach.numlineExplain')}</p>
          <NumberLine values={FOURBIT} />
        </div>
      </div>
    </Section>
  )
}

function NumberLine({ values }: { values: number[] }) {
  const w = 460
  const h = 70
  const pad = 24
  const max = 2
  const sx = (v: number) => pad + (v / max) * (w - 2 * pad)
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', height: 'auto' }}>
      <line x1={pad} y1={h / 2} x2={w - pad} y2={h / 2} stroke="var(--text-soft)" strokeWidth={1.5} />
      {[0, 0.5, 1, 1.5, 2].map((tk) => (
        <g key={tk}>
          <line x1={sx(tk)} y1={h / 2 - 5} x2={sx(tk)} y2={h / 2 + 5} stroke="var(--text-soft)" />
          <text x={sx(tk)} y={h / 2 + 22} fontSize={11} textAnchor="middle" fill="var(--text-soft)">
            {tk}
          </text>
        </g>
      ))}
      {values.map((v, i) => (
        <motion.circle
          key={i}
          cx={sx(v)}
          cy={h / 2}
          r={5}
          fill="var(--accent)"
          stroke="var(--panel)"
          strokeWidth={1.5}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06, type: 'spring', stiffness: 300, damping: 16 }}
        />
      ))}
    </svg>
  )
}
