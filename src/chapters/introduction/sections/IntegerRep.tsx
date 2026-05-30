import { useState } from 'react'
import { motion } from 'motion/react'
import { Section } from '../components/Section'
import { Segmented } from '../components/Controls'
import { useLang } from '../context/LangContext'
import { signMagnitudeValue, twosComplementValue } from '../lib/arithmetic'

const M = 8

export function IntegerRep() {
  const { t } = useLang()
  const [scheme, setScheme] = useState<'sm' | 'tc'>('tc')
  const [bits, setBits] = useState<number[]>([0, 0, 0, 0, 1, 0, 1, 0]) // 8-bit example

  const flip = (i: number) => setBits((b) => b.map((v, j) => (j === i ? (v ? 0 : 1) : v)))

  const value = scheme === 'sm' ? signMagnitudeValue(bits) : twosComplementValue(bits)
  const range =
    scheme === 'sm'
      ? `−${Math.pow(2, M - 1) - 1} … ${Math.pow(2, M - 1) - 1}`
      : `−${Math.pow(2, M - 1)} … ${Math.pow(2, M - 1) - 1}`

  return (
    <Section id="int" tag={t('int.tag')} title={t('int.title')} lead={t('int.lead')}>
      <div className="split">
        <div className="prose">
          <p>{t('int.p1')}</p>
          <div className="callout">{t('int.special')}</div>
        </div>

        <div className="panel">
          <Segmented
            label={t('int.scheme')}
            value={scheme}
            options={[
              { value: 'sm', label: t('int.signmag') },
              { value: 'tc', label: t('int.twos') },
            ]}
            onChange={setScheme}
          />
          <div style={{ display: 'flex', gap: 4, marginTop: 8 }}>
            <span className="bit-group-label">{t('int.signbit')}</span>
          </div>
          <div className="bits">
            {bits.map((b, i) => (
              <motion.button
                key={i}
                className={`bit ${b ? 'on' : ''} ${i === 0 && b ? 'sign' : ''}`}
                onClick={() => flip(i)}
                whileTap={{ scale: 0.85 }}
                title={i === 0 ? t('int.signbit') : `bit ${M - 1 - i}`}
              >
                {b}
              </motion.button>
            ))}
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-soft)', marginTop: 6 }}>{t('int.click')}</p>
          <div className="readout">
            <div>
              <span className="k">{t('int.bitsLabel')}: </span>
              <span className="v">{bits.join('')}</span>
            </div>
            <div>
              <span className="k">{t('int.decimal')}: </span>
              <motion.span key={value} className="v" initial={{ scale: 1.25, color: 'var(--accent)' }} animate={{ scale: 1 }}>
                {value}
              </motion.span>
            </div>
            <div>
              <span className="k">{t('int.range')}: </span>
              <span className="v">{range}</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
