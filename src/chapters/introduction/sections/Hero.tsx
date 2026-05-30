import { motion } from 'motion/react'
import { useLang } from '../context/LangContext'

export function Hero() {
  const { t } = useLang()
  return (
    <header className="section hero" id="top">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section-tag">{t('hero.subtitle')}</span>
        <h1>{t('hero.title')}</h1>
        <p className="sub">{t('hero.sub')}</p>
        <div className="chips">
          <span className="chip">✦ {t('hero.chip1')}</span>
          <span className="chip">🌐 {t('hero.chip2')}</span>
          <span className="chip">📝 {t('hero.chip3')}</span>
        </div>
        <motion.p
          className="scroll-hint"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          {t('hero.scroll')}
        </motion.p>
        <p style={{ color: 'var(--text-soft)', fontSize: '0.85rem', marginTop: 8 }}>{t('hero.credit')}</p>
      </motion.div>
    </header>
  )
}
