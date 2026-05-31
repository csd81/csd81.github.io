import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLang } from '../../shared/providers/LanguageProvider';
import { useTheme } from '../../shared/providers/ThemeProvider';
import { setLang as setVanillaLang } from './state/i18n.js';
import { setTheme as setVanillaTheme } from './state/theme.js';
import { sections } from './content/sections.js';
import { SectionView } from './components/SectionView';
import { ScrollyTopBar, type SectionMeta } from '../../shared/scrolly';
import './styles/themes.css';
import './styles/main.css';

type Section = { id: string; title: { en: string; hu: string }; blocks: unknown[] };
const SECS = sections as Section[];

const NO: Record<string, string> = { intro: '9', line: '9.1', polynomial: '9.2', nonlinear: '9.3' };
const SECTIONS: SectionMeta[] = SECS.map((s) => ({
  id: `sec-${s.id}`,
  no: NO[s.id] ?? '9',
  title: s.title,
  blurb: { en: '', hu: '' },
}));

/**
 * Chapter 9 — Least Squares. Fully React now: sections render via <SectionView>
 * (React port of the old vanilla render.js); the Plotly demos are mounted
 * imperatively inside <DemoMount>. The shared vanilla i18n/theme stores are kept
 * in sync only so the (imperative) demos redraw on toggle. Top-bar (progress + §
 * jump) over a single full-width scrolling page.
 */
export default function Chapter() {
  const { lang } = useLang();
  const { theme } = useTheme();
  const loc = useLocation();

  // Keep the demos' own lang/theme in sync with the shared toggles.
  useEffect(() => {
    setVanillaLang(lang);
  }, [lang]);
  useEffect(() => {
    setVanillaTheme(theme);
  }, [theme]);

  useEffect(() => {
    const id = decodeURIComponent(loc.hash.replace(/^#/, ''));
    if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
  }, [loc.hash]);

  return (
    <div className="ch-least-squares">
      <ScrollyTopBar sections={SECTIONS} />
      <main className="content content--full">
        {SECS.map((s) => (
          <SectionView key={s.id} section={s} />
        ))}
      </main>
    </div>
  );
}
