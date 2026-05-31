import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useLang } from '../context/LangContext'
import type { StringKey } from '../i18n/strings'
import { ScrollySection, useKick } from './scrolly'
import type { ScrollyStep } from '../../../shared/scrolly'

type ErrKey = 'modeling' | 'measurement' | 'truncation' | 'rounding'

export function ComputationFlow() {
  const { t } = useLang()
  const k = useKick()
  const [hover, setHover] = useState<ErrKey | null>(null)

  const descKey: Record<ErrKey, StringKey> = {
    modeling: 'flow.d.modeling',
    measurement: 'flow.d.measurement',
    truncation: 'flow.d.truncation',
    rounding: 'flow.d.rounding',
  }

  const box = (label: string, delay: number) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      style={{
        border: '1px solid var(--border)',
        background: 'var(--panel-2)',
        borderRadius: 12,
        padding: '14px 16px',
        textAlign: 'center',
        fontWeight: 600,
        minWidth: 120,
      }}
    >
      {label}
    </motion.div>
  )

  const arrow = (delay: number) => (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      style={{ color: 'var(--accent)', fontSize: 24, fontWeight: 700 }}
    >
      →
    </motion.div>
  )

  const errTag = (key: ErrKey, label: string) => (
    <button
      onMouseEnter={() => setHover(key)}
      onMouseLeave={() => setHover(null)}
      onClick={() => setHover(hover === key ? null : key)}
      className="pill"
      style={{
        border: '1px solid var(--border)',
        background: hover === key ? 'var(--accent-soft)' : 'var(--panel)',
        color: hover === key ? 'var(--accent)' : 'var(--text)',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  )

  const steps: ScrollyStep[] = [
    { kicker: k('idea'), body: <p>{t('flow.p1')}</p> },
    {
      kicker: k('explore'),
      body: (
        <div className="panel">
          <h3>{t('flow.errTreeTitle')}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div>
              <div style={{ fontWeight: 700, marginBottom: 6 }}>↳ {t('flow.inherited')}</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', paddingLeft: 14 }}>
                {errTag('modeling', t('flow.modeling'))}
                {errTag('measurement', t('flow.measurement'))}
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: 6 }}>↳ {t('flow.computational')}</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', paddingLeft: 14 }}>
                {errTag('truncation', t('flow.truncation'))}
                {errTag('rounding', t('flow.rounding'))}
              </div>
            </div>
          </div>
          <AnimatePresence mode="wait">
            {hover && (
              <motion.div
                key={hover}
                className="callout"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                style={{ marginBottom: 0, overflow: 'hidden' }}
              >
                {t(descKey[hover])}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ),
    },
  ]

  const graphic = () => (
    <div className="panel">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
        {box(t('flow.physical'), 0.05)}
        {arrow(0.2)}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          style={{
            border: '1px solid var(--accent)',
            background: 'var(--accent-soft)',
            borderRadius: 12,
            padding: '12px 16px',
            textAlign: 'center',
            minWidth: 130,
          }}
        >
          <div style={{ fontWeight: 700 }}>{t('flow.model')}</div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-soft)' }}>
            {t('flow.params')}
            <br />
            {t('flow.constants')}
            <br />
            {t('flow.initial')}
          </div>
        </motion.div>
        {arrow(0.5)}
        {box(t('flow.numerical'), 0.6)}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 22, gap: 16, flexWrap: 'wrap' }}>
        <div style={{ textAlign: 'center' }}>
          <div className="pill warn" style={{ marginBottom: 8 }}>
            {t('flow.inherited')}
          </div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-soft)' }}>
            {t('flow.modeling')}
            <br />
            {t('flow.measurement')}
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div className="pill bad" style={{ marginBottom: 8 }}>
            {t('flow.computational')}
          </div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-soft)' }}>
            {t('flow.truncation')}
            <br />
            {t('flow.rounding')}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <ScrollySection
      id="flow"
      tag={t('flow.tag')}
      title={t('flow.title')}
      lead={t('flow.lead')}
      steps={steps}
      graphic={graphic}
    />
  )
}
