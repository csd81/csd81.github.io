import { useMemo, useState } from 'react'
import { motion } from 'motion/react'
import { Section } from '../components/Section'
import { useLang } from '../context/LangContext'
import { MarkdownView } from '../../../shared/ui/MarkdownView'
import { FLASHCARDS } from '../content/flashcards'

const seq = (n: number) => Array.from({ length: n }, (_, i) => i)

function shuffled(n: number): number[] {
  const a = seq(n)
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function Flashcards() {
  const { t } = useLang()
  const [order, setOrder] = useState<number[]>(() => seq(FLASHCARDS.length))
  const [pos, setPos] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const card = useMemo(() => FLASHCARDS[order[pos]], [order, pos])

  const go = (delta: number) => {
    setFlipped(false)
    setPos((p) => (p + delta + FLASHCARDS.length) % FLASHCARDS.length)
  }

  return (
    <Section id="flashcards" tag={t('flash.tag')} title={t('flash.title')} lead={t('flash.lead')}>
      <div className="panel" style={{ maxWidth: 620, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <span className="readout" style={{ margin: 0, padding: '2px 10px' }}>
            {pos + 1} / {FLASHCARDS.length}
          </span>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn" onClick={() => { setOrder(shuffled(FLASHCARDS.length)); setPos(0); setFlipped(false) }}>
              {t('flash.shuffle')}
            </button>
            <button className="btn" onClick={() => { setOrder(seq(FLASHCARDS.length)); setPos(0); setFlipped(false) }}>
              {t('flash.reset')}
            </button>
          </div>
        </div>

        <motion.button
          key={`${order[pos]}-${flipped}`}
          onClick={() => setFlipped((f) => !f)}
          initial={{ rotateX: -8, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          style={{
            width: '100%',
            minHeight: 200,
            cursor: 'pointer',
            textAlign: 'left',
            border: '1px solid var(--border)',
            borderRadius: 14,
            padding: '18px 20px',
            background: flipped ? 'var(--good-soft, var(--panel-2))' : 'var(--panel-2)',
            color: 'var(--text)',
            font: 'inherit',
          }}
        >
          <div
            style={{
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: flipped ? 'var(--good)' : 'var(--accent)',
              marginBottom: 8,
            }}
          >
            {flipped ? t('flash.answer') : t('flash.question')}
          </div>
          <MarkdownView markdown={flipped ? card.a : card.q} />
        </motion.button>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10, marginTop: 12 }}>
          <button className="btn" onClick={() => go(-1)}>{t('flash.prev')}</button>
          <button className="btn btn--primary" style={{ flex: 1 }} onClick={() => setFlipped((f) => !f)}>
            {flipped ? t('flash.flipToQuestion') : t('flash.flipToAnswer')}
          </button>
          <button className="btn" onClick={() => go(1)}>{t('flash.next')}</button>
        </div>
      </div>
    </Section>
  )
}
