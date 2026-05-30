import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { useTheme } from '../context/ThemeContext'
import { useLang } from '../context/LangContext'
import type { StringKey } from '../i18n/strings'

const SECTIONS: { id: string; key: StringKey }[] = [
  { id: 'flow', key: 'nav.flow' },
  { id: 'trunc', key: 'nav.trunc' },
  { id: 'cond', key: 'nav.cond' },
  { id: 'stab', key: 'nav.stab' },
  { id: 'cx', key: 'nav.cx' },
  { id: 'int', key: 'nav.int' },
  { id: 'flt', key: 'nav.flt' },
  { id: 'mach', key: 'nav.mach' },
  { id: 'eb', key: 'nav.eb' },
  { id: 'ep', key: 'nav.ep' },
  { id: 'fc', key: 'nav.fc' },
  { id: 'quiz', key: 'nav.quiz' },
]

export function Nav() {
  const { theme, toggle } = useTheme()
  const { lang, toggle: toggleLang, t } = useLang()
  const [active, setActive] = useState('flow')

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="nav-title">
          <span>∑</span> {t('appTitle')} · <span style={{ color: 'var(--text-soft)', fontWeight: 500 }}>{t('appSubtitle')}</span>
        </div>
        <div className="nav-dots">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={active === s.id ? 'active' : ''}
              title={t(s.key)}
              aria-label={t(s.key)}
            />
          ))}
        </div>
        <button className="icon-btn" onClick={toggleLang} title={t('lang.toggle')} aria-label={t('lang.toggle')}>
          {lang === 'en' ? 'HU' : 'EN'}
        </button>
        <button className="icon-btn" onClick={toggle} title={t('theme.toggle')} aria-label={t('theme.toggle')}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
      <motion.div className="nav-progress" style={{ scaleX: progress, transformOrigin: '0% 50%', width: '100%' }} />
    </nav>
  )
}
