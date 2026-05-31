import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useI18n } from './app/LanguageContext';
import { sections } from './content/sections';
import { SectionView } from './components/notes/SectionView';
import { SectionExercises } from './components/notes/SectionExercises';
import { CodeTabs } from '../../shared/ui/CodeTabs';
import { getSectionCode } from './content/code';
import { EliminationLab } from './components/visualizer/EliminationLab';
import { QuizRunner } from './components/quiz/QuizRunner';
import { ScrollyTopBar, type SectionMeta } from '../../shared/scrolly';
import './styles/global.css';

const SECTIONS: SectionMeta[] = [
  ...sections.map((s) => ({ id: s.id, no: s.number, title: s.title, blurb: s.summary })),
  {
    id: 'lab',
    no: '3·lab',
    title: { en: 'Elimination Lab', hu: 'Eliminációs labor' },
    blurb: {
      en: 'Step through Gaussian / Gauss–Jordan elimination interactively.',
      hu: 'Lépkedj végig a Gauss- / Gauss–Jordan-eliminációi lépéseken.',
    },
  },
  {
    id: 'quiz',
    no: '3·quiz',
    title: { en: 'Quiz', hu: 'Kvíz' },
    blurb: { en: 'Check your understanding.', hu: 'Ellenőrizd a tudásod.' },
  },
];

/**
 * Chapter 3 — Linear Systems, as a single scrollytelling page: all lesson
 * sections stacked, then the interactive Elimination Lab and the Quiz, with the
 * shared top-bar (progress + § jump). The old router (Home/Lessons/:id/Lab/Quiz)
 * is dropped; old deep-link paths/hashes are scrolled to on load.
 */
export default function Chapter() {
  const { t, lang } = useI18n();
  const loc = useLocation();

  useEffect(() => {
    let id = decodeURIComponent(loc.hash.replace(/^#/, ''));
    if (!id) {
      const m = loc.pathname.match(/\/lessons\/([^/]+)/);
      if (m) id = m[1];
      else if (/\/lab$/.test(loc.pathname)) id = 'lab';
      else if (/\/quiz$/.test(loc.pathname)) id = 'quiz';
    }
    if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
  }, [loc.pathname, loc.hash]);

  return (
    <div className="app-shell ch-linear-systems">
      <ScrollyTopBar sections={SECTIONS} />
      <main>
        <div className="container">
          <section className="hero" id="top">
            <span className="section-eyebrow">{t('app.subtitle')}</span>
            <h1>{t('app.title')}</h1>
            <p>{t('home.tagline')}</p>
            <p style={{ marginTop: 4 }}>{t('home.lead')}</p>
          </section>

          {sections.map((s) => (
            <section key={s.id} id={s.id} className="ls-section">
              <SectionView section={s} />
              {getSectionCode(s.id).map((c) => (
                <CodeTabs key={c.id} snippets={c.snippets} caption={c.caption} />
              ))}
              <SectionExercises sectionNumber={s.number} />
            </section>
          ))}

          <section id="lab" className="ls-section stack">
            <div>
              <span className="section-eyebrow">{t('nav.lab')}</span>
              <h1 style={{ margin: '4px 0 2px' }}>{t('nav.lab')}</h1>
            </div>
            <EliminationLab initial={{}} />
          </section>

          <section id="quiz" className="ls-section stack">
            <div>
              <span className="section-eyebrow">{t('nav.quiz')}</span>
              <h1 style={{ margin: '4px 0 2px' }}>{t('quiz.title')}</h1>
            </div>
            <QuizRunner />
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          {lang === 'hu'
            ? 'Numerikus analízis · 3. fejezet — interaktív tananyag.'
            : 'Numerical Analysis · Chapter 3 — interactive companion.'}
        </div>
      </footer>
    </div>
  );
}
