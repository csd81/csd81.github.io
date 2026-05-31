import { useEffect, useState } from 'react';
import { useLang } from '../providers/LanguageProvider';
import { useScrollyNav } from './ScrollyNavContext';
import './scrolly.css';

/**
 * In-page section navigation rendered INSIDE the single global app-nav: a
 * scroll-progress fill along the nav's bottom edge, the active section label,
 * and a "§ jump ▾" menu. Sections come from the active chapter via
 * ScrollyNavContext; renders nothing when the chapter has none.
 */
export function AppSectionNav() {
  const { t, lang } = useLang();
  const { sections } = useScrollyNav();
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, Math.max(0, window.scrollY / h)) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [sections]);

  useEffect(() => {
    setActive(sections[0]?.id ?? '');
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => !!el);
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        let best: { id: string; ratio: number } | null = null;
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          if (!best || e.intersectionRatio > best.ratio)
            best = { id: (e.target as HTMLElement).id, ratio: e.intersectionRatio };
        }
        if (best) setActive(best.id);
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.2, 0.5, 1] },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sections]);

  if (!sections.length) return null;

  const jump = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const cur = sections.find((s) => s.id === active);

  return (
    <>
      <span className="scrolly-topbar__active">{cur ? `§${cur.no} · ${t(cur.title)}` : ''}</span>
      <div className="scrolly-topbar__jump">
        <button className="scrolly-topbar__btn" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
          § {lang === 'hu' ? 'ugrás' : 'jump'} ▾
        </button>
        {open && (
          <>
            <div className="scrolly-topbar__backdrop" onClick={() => setOpen(false)} />
            <ul className="scrolly-topbar__menu">
              {sections.map((s) => (
                <li key={s.id}>
                  <button className={s.id === active ? 'is-active' : ''} onClick={() => jump(s.id)}>
                    <span className="scrolly-topbar__no">§{s.no}</span> {t(s.title)}
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div className="app-nav__progress" style={{ width: `${progress * 100}%` }} />
    </>
  );
}

export default AppSectionNav;
