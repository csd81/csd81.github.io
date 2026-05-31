import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';
import { useLang } from '../../shared/providers/LanguageProvider';
import LessonReader from './features/lessons/LessonReader';
import Playground from './pages/Playground';
import Quiz from './pages/Quiz';
import lessons from './content/lessons/index.json';
import { ScrollyTopBar, type SectionMeta } from '../../shared/scrolly';
import './chapter.css';

type Meta = { id: string; slug: string; title: { en: string; hu: string } };
const LESSONS = lessons as Meta[];

const SECTIONS: SectionMeta[] = [
  ...LESSONS.map((l) => ({ id: l.slug, no: l.id === 'intro' ? '7' : l.id, title: l.title, blurb: { en: '', hu: '' } })),
  { id: 'playground', no: '7·pg', title: { en: 'Playground', hu: 'Játéktér' }, blurb: { en: '', hu: '' } },
  { id: 'quiz', no: '7·qz', title: { en: 'Quiz', hu: 'Kvíz' }, blurb: { en: '', hu: '' } },
];

/**
 * Chapter 7 — Numerical Calculus, as a single scrollytelling page: every lesson
 * stacked, then the Playground and Quiz, with the shared top-bar (progress + §
 * jump). The old NavBar + router are dropped; deep-link paths scroll to the
 * section.
 */
export default function Chapter() {
  const loc = useLocation();
  const { t } = useTranslation();
  const { lang } = useLang();

  useEffect(() => {
    void i18n.changeLanguage(lang);
  }, [lang]);

  useEffect(() => {
    let id = decodeURIComponent(loc.hash.replace(/^#/, ''));
    if (!id) {
      const m = loc.pathname.match(/\/lessons\/([^/]+)/);
      if (m) id = m[1];
      else {
        const seg = loc.pathname.split('/').filter(Boolean).pop() ?? '';
        if (['playground', 'quiz'].includes(seg)) id = seg;
      }
    }
    if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
  }, [loc.pathname, loc.hash]);

  const ss = { scrollMarginTop: 'calc(var(--nav-h) + var(--scrolly-topbar-h, 44px) + 8px)' };

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollyTopBar sections={SECTIONS} />
      <main className="mx-auto w-full max-w-5xl flex-1 space-y-16 px-4 py-8">
        {LESSONS.map((l) => (
          <section key={l.slug} id={l.slug} style={ss}>
            <LessonReader slug={l.slug} />
          </section>
        ))}
        <section id="playground" style={ss}>
          <Playground />
        </section>
        <section id="quiz" style={ss}>
          <Quiz />
        </section>
      </main>
      <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-400 dark:border-slate-800">
        {t('app.footer')}
      </footer>
    </div>
  );
}
