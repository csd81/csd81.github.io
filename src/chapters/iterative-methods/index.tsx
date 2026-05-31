import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FixedPointPage } from './pages/FixedPointPage';
import { JacobiGaussSeidelPage } from './pages/JacobiGaussSeidelPage';
import { SpectralPage } from './pages/SpectralPage';
import { ConditionPage } from './pages/ConditionPage';
import { ProgressProvider } from './context/ProgressContext';
import { en } from './i18n/en';
import { hu } from './i18n/hu';
import { ScrollyTopBar, type SectionMeta } from '../../shared/scrolly';
import './chapter.css';

type Mod = 'fixed-point' | 'jacobi-gs' | 'spectral' | 'condition';
const NO: Record<Mod, string> = { 'fixed-point': '4.1', 'jacobi-gs': '4.2', spectral: '4·sp', condition: '4.4' };
const MODS: Mod[] = ['fixed-point', 'jacobi-gs', 'spectral', 'condition'];

const SECTIONS: SectionMeta[] = MODS.map((id) => ({
  id,
  no: NO[id],
  title: { en: en.modules[id].title, hu: hu.modules[id].title },
  blurb: { en: en.modules[id].blurb, hu: hu.modules[id].blurb },
}));

/** old route path segment -> section id */
const PATH_TO_ID: Record<string, Mod> = {
  'fixed-point': 'fixed-point',
  'jacobi-gauss-seidel': 'jacobi-gs',
  spectral: 'spectral',
  condition: 'condition',
};

/**
 * Chapter 4 — Iterative Techniques, as a single scrollytelling page: the four
 * topic modules stacked, with the shared top-bar (progress + § jump). The old
 * router/nav is dropped; old deep-link paths/hashes scroll to the section.
 */
export default function Chapter() {
  const loc = useLocation();

  useEffect(() => {
    let id = decodeURIComponent(loc.hash.replace(/^#/, ''));
    if (!id) {
      const seg = loc.pathname.split('/').filter(Boolean).pop() ?? '';
      id = PATH_TO_ID[seg] ?? '';
    }
    if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
  }, [loc.pathname, loc.hash]);

  const sectionStyle = { scrollMarginTop: 'calc(var(--nav-h) + var(--scrolly-topbar-h, 44px) + 8px)' };

  return (
    <ProgressProvider>
      <ScrollyTopBar sections={SECTIONS} />
      <main className="mx-auto max-w-6xl space-y-16 px-4 py-8">
        <section id="fixed-point" style={sectionStyle}>
          <FixedPointPage />
        </section>
        <section id="jacobi-gs" style={sectionStyle}>
          <JacobiGaussSeidelPage />
        </section>
        <section id="spectral" style={sectionStyle}>
          <SpectralPage />
        </section>
        <section id="condition" style={sectionStyle}>
          <ConditionPage />
        </section>
      </main>
    </ProgressProvider>
  );
}
