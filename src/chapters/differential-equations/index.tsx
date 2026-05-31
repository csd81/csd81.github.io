import { useEffect, type FC } from 'react';
import { useLocation } from 'react-router-dom';
import TheoryRaw from './pages/Theory.jsx';
import Playground from './pages/Playground.jsx';

const Theory = TheoryRaw as unknown as FC<{ sectionId?: string }>;
import { SECTIONS as RAW } from './sections.js';
import { ScrollyTopBar, type SectionMeta } from '../../shared/scrolly';
import { CodeTabs } from '../../shared/ui/CodeTabs';
import { getSectionCode } from './content/code';
import { Quiz } from '../../shared/ui/Quiz';
import { getQuiz } from './content/quiz';
import './styles/theme.css';

type Raw = { id: string; en: string; hu: string; demo: string | null };

const SECTIONS: SectionMeta[] = [
  ...(RAW as Raw[]).map((s) => ({
    id: s.id,
    no: s.id === 'intro' ? '10' : s.id,
    title: { en: s.en, hu: s.hu },
    blurb: { en: '', hu: '' },
  })),
  { id: 'playground', no: '10·pg', title: { en: 'Playground', hu: 'Játéktér' }, blurb: { en: '', hu: '' } },
];

/**
 * Chapter 10 — Differential Equations, as a single scrollytelling page: every
 * theory section stacked, then the Playground, with the shared top-bar
 * (progress + § jump). The old Header/Sidebar + router are dropped; deep-link
 * paths scroll to the section.
 */
export default function Chapter() {
  const loc = useLocation();

  useEffect(() => {
    let id = decodeURIComponent(loc.hash.replace(/^#/, ''));
    if (!id) {
      const m = loc.pathname.match(/\/theory\/([^/]+)/);
      if (m) id = m[1];
      else if (/\/playground$/.test(loc.pathname)) id = 'playground';
    }
    if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
  }, [loc.pathname, loc.hash]);

  const ss = { scrollMarginTop: 'calc(var(--nav-h) + var(--scrolly-topbar-h, 44px) + 8px)' };

  return (
    <div className="app ch-ode">
      <ScrollyTopBar sections={SECTIONS} />
      <main className="content" style={{ maxWidth: 920, margin: '0 auto', padding: '0 16px' }}>
        {(RAW as Raw[]).map((s) => (
          <section key={s.id} id={s.id} style={ss}>
            <Theory sectionId={s.id} />
            {getSectionCode(s.id).map((c) => (
              <CodeTabs key={c.id} snippets={c.snippets} caption={c.caption} />
            ))}
            {getQuiz(s.id).length > 0 && <Quiz questions={getQuiz(s.id)} />}
          </section>
        ))}
        <section id="playground" style={ss}>
          <Playground />
        </section>
      </main>
    </div>
  );
}
