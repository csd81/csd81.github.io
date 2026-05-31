import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LuPage } from './pages/LuPage';
import { CholeskyPage } from './pages/CholeskyPage';
import { SolversPage } from './pages/SolversPage';
import { PracticePage } from './pages/PracticePage';
import { TheorySection } from './components/Theory/TheorySection';
import { introSection } from './content/intro';
import { luSection } from './content/lu';
import { choleskySection } from './content/cholesky';
import { useT } from './i18n/useT';
import { CodeTabs } from '../../shared/ui/CodeTabs';
import { Quiz } from '../../shared/ui/Quiz';
import { getSectionCode } from './content/code';
import { getQuiz } from './content/quiz';
import { ScrollyTopBar, type SectionMeta } from '../../shared/scrolly';
import './app.css';

const SECTIONS: SectionMeta[] = [
  { id: 'intro', no: '5', title: introSection.title, blurb: { en: '', hu: '' } },
  { id: 'lu', no: '5.1', title: luSection.title, blurb: { en: '', hu: '' } },
  { id: 'cholesky', no: '5.2', title: choleskySection.title, blurb: { en: '', hu: '' } },
  { id: 'solvers', no: '5·s', title: { en: 'Solvers', hu: 'Megoldók' }, blurb: { en: '', hu: '' } },
  { id: 'practice', no: '5·p', title: { en: 'Practice', hu: 'Gyakorlás' }, blurb: { en: '', hu: '' } },
];

/**
 * Chapter 5 — Matrix Factorization, as a single scrollytelling page: intro, LU,
 * Cholesky, Solvers and Practice stacked, with the shared top-bar (progress + §
 * jump). The old Header nav + router are dropped; deep-link paths scroll to the
 * section.
 */
export default function Chapter() {
  const { t } = useT();
  const loc = useLocation();

  useEffect(() => {
    let id = decodeURIComponent(loc.hash.replace(/^#/, ''));
    if (!id) {
      const seg = loc.pathname.split('/').filter(Boolean).pop() ?? '';
      if (['lu', 'cholesky', 'solvers', 'practice'].includes(seg)) id = seg;
    }
    if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
  }, [loc.pathname, loc.hash]);

  const ss = { scrollMarginTop: 'calc(var(--nav-h) + var(--scrolly-topbar-h, 44px) + 8px)' };

  return (
    <>
      <ScrollyTopBar sections={SECTIONS} />
      <main className="page">
        <section id="intro" className="page-narrow" style={ss}>
          <TheorySection section={introSection} />
        </section>
        <section id="lu" style={ss}>
          <LuPage />
          {getSectionCode('lu').map((c) => (
            <CodeTabs key={c.id} snippets={c.snippets} caption={c.caption} />
          ))}
          <Quiz questions={getQuiz('lu')} />
        </section>
        <section id="cholesky" style={ss}>
          <CholeskyPage />
          {getSectionCode('cholesky').map((c) => (
            <CodeTabs key={c.id} snippets={c.snippets} caption={c.caption} />
          ))}
          <Quiz questions={getQuiz('cholesky')} />
        </section>
        <section id="solvers" style={ss}>
          <SolversPage />
        </section>
        <section id="practice" style={ss}>
          <PracticePage />
        </section>
      </main>
      <footer className="footer">
        {t('appName')} · {t('tagline')} · © {new Date().getFullYear()}
      </footer>
    </>
  );
}
