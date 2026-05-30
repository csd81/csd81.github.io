import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Section } from '../components/Section'
import { useLang } from '../context/LangContext'
import { QUIZ, localize } from '../lib/quizData'

type Phase = 'intro' | 'playing' | 'done'

export function Quiz() {
  const { t, lang } = useLang()
  const [phase, setPhase] = useState<Phase>('intro')
  const [idx, setIdx] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [score, setScore] = useState(0)

  const q = QUIZ[idx]

  const start = () => {
    setPhase('playing')
    setIdx(0)
    setPicked(null)
    setScore(0)
  }

  const choose = (i: number) => {
    if (picked !== null) return
    setPicked(i)
    if (i === q.correct) setScore((s) => s + 1)
  }

  const next = () => {
    if (idx + 1 >= QUIZ.length) {
      setPhase('done')
    } else {
      setIdx((i) => i + 1)
      setPicked(null)
    }
  }

  const pct = (score / QUIZ.length) * 100
  const resultKey = pct >= 85 ? 'quiz.result.great' : pct >= 60 ? 'quiz.result.good' : 'quiz.result.keep'

  return (
    <Section id="quiz" tag={t('quiz.tag')} title={t('quiz.title')} lead={t('quiz.lead')}>
      <div className="panel" style={{ maxWidth: 720, margin: '0 auto' }}>
        <AnimatePresence mode="wait">
          {phase === 'intro' && (
            <motion.div key="intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ fontSize: 46 }}>📝</div>
              <p style={{ color: 'var(--text-soft)' }}>{t('quiz.lead')}</p>
              <button className="btn primary" onClick={start}>
                {t('quiz.start')}
              </button>
            </motion.div>
          )}

          {phase === 'playing' && (
            <motion.div key={`q${idx}`} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <span className="section-tag" style={{ margin: 0 }}>
                  {t('quiz.question')} {idx + 1} {t('quiz.of')} {QUIZ.length}
                </span>
                <span className="pill good">
                  {t('quiz.score')}: {score}
                </span>
              </div>
              <div style={{ height: 6, background: 'var(--panel-2)', borderRadius: 6, overflow: 'hidden', marginBottom: 18 }}>
                <motion.div animate={{ width: `${((idx + 1) / QUIZ.length) * 100}%` }} style={{ height: '100%', background: 'var(--accent)' }} />
              </div>

              <h3 style={{ fontSize: '1.15rem', marginBottom: 16 }}>{localize(q.prompt, lang)}</h3>

              <div style={{ display: 'grid', gap: 10 }}>
                {q.options.map((opt, i) => {
                  const isCorrect = i === q.correct
                  const isPicked = i === picked
                  let bg = 'var(--panel-2)'
                  let bd = 'var(--border)'
                  if (picked !== null) {
                    if (isCorrect) {
                      bg = 'var(--good-soft)'
                      bd = 'var(--good)'
                    } else if (isPicked) {
                      bg = 'var(--bad-soft)'
                      bd = 'var(--bad)'
                    }
                  }
                  return (
                    <motion.button
                      key={i}
                      onClick={() => choose(i)}
                      disabled={picked !== null}
                      whileHover={picked === null ? { scale: 1.01 } : {}}
                      whileTap={picked === null ? { scale: 0.99 } : {}}
                      style={{
                        textAlign: 'left',
                        padding: '12px 16px',
                        borderRadius: 11,
                        border: `1.5px solid ${bd}`,
                        background: bg,
                        color: 'var(--text)',
                        fontSize: '0.97rem',
                        fontWeight: 500,
                        cursor: picked === null ? 'pointer' : 'default',
                      }}
                    >
                      {localize(opt, lang)}
                      {picked !== null && isCorrect && ' ✓'}
                      {picked !== null && isPicked && !isCorrect && ' ✗'}
                    </motion.button>
                  )
                })}
              </div>

              <AnimatePresence>
                {picked !== null && (
                  <motion.div
                    className="callout"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    style={{ marginBottom: 0, marginTop: 16, overflow: 'hidden' }}
                  >
                    <strong>{t('quiz.explanation')}: </strong>
                    {localize(q.explain, lang)}
                  </motion.div>
                )}
              </AnimatePresence>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 16 }}>
                <button className="btn primary" onClick={next} disabled={picked === null}>
                  {idx + 1 >= QUIZ.length ? t('quiz.finish') : t('quiz.next')}
                </button>
              </div>
            </motion.div>
          )}

          {phase === 'done' && (
            <motion.div key="done" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '20px 0' }}>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 14 }} style={{ fontSize: 54 }}>
                {pct >= 85 ? '🏆' : pct >= 60 ? '👍' : '📚'}
              </motion.div>
              <h3 style={{ fontSize: '1.4rem' }}>
                {t('quiz.yourScore')} {score} / {QUIZ.length}
              </h3>
              <p style={{ color: 'var(--text-soft)', maxWidth: 420, margin: '8px auto 20px' }}>{t(resultKey)}</p>
              <button className="btn primary" onClick={start}>
                {t('quiz.retry')}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  )
}
