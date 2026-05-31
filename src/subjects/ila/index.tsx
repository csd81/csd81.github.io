import { lazy, Suspense, type ComponentType } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { useLang } from '../../shared/providers/LanguageProvider';
import { ILA_CHAPTERS, GROUP_LABEL, ilaChapterById, type IlaChapter } from './registry';
import '../../pages/home.css';
import './ila.css';

/** Lazy chapter modules — add an entry here once a chapter's React component exists. */
const LOADERS: Record<string, () => Promise<{ default: ComponentType }>> = {
  ch1: () => import('./chapters/ch1'),
  ch2: () => import('./chapters/ch2'),
  ch3: () => import('./chapters/ch3'),
  ch4: () => import('./chapters/ch4'),
  ch5: () => import('./chapters/ch5'),
  ch6: () => import('./chapters/ch6'),
  ch7: () => import('./chapters/ch7'),
  ch8: () => import('./chapters/ch8'),
};

function Landing() {
  const { lang } = useLang();
  const groups: IlaChapter['group'][] = ['ILA', 'DM', 'NT'];
  return (
    <div className="ila">
      <p className="ila__kicker">{lang === 'hu' ? 'Az informatika logikai és algebrai alapjai' : 'Logical & Algebraic Foundations of Informatics'}</p>
      <h1 className="ila__title">ILA</h1>
      <p className="ila__cite">Hartung Ferenc · Pannon Egyetem Matematika Tanszék · 2025</p>
      {groups.map((g) => (
        <section key={g}>
          <h2 className="home__section-title">{GROUP_LABEL[g]}</h2>
          <ul className="ila__grid">
            {ILA_CHAPTERS.filter((c) => c.group === g).map((c) => (
              <li key={c.id}>
                <Link
                  to={`/ila/${c.id}`}
                  className="chcard"
                  style={c.ready ? undefined : { opacity: 0.55 }}
                >
                  <span className="chcard__num">{String(c.num).padStart(2, '0')}</span>
                  <span className="chcard__body">
                    <span className="chcard__title">{c.title}</span>
                    <span className="chcard__blurb">
                      {c.ready
                        ? lang === 'hu' ? 'Interaktív fejezet' : 'Interactive chapter'
                        : lang === 'hu' ? 'Hamarosan' : 'Coming soon'}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function ComingSoon({ ch }: { ch: IlaChapter }) {
  const { lang } = useLang();
  return (
    <div className="ila">
      <Link to="/ila" className="ila__back">{lang === 'hu' ? '← Fejezetek' : '← Chapters'}</Link>
      <p className="ila__kicker">ILA · {String(ch.num).padStart(2, '0')}</p>
      <h1 className="ila__title">{ch.title}</h1>
      <p className="ila__cite">{lang === 'hu' ? 'Ez a fejezet hamarosan elérhető.' : 'This chapter is coming soon.'}</p>
    </div>
  );
}

function ChapterRoute() {
  const { id } = useParams();
  const ch = id ? ilaChapterById(id) : undefined;
  if (!ch) return <ComingSoon ch={{ num: 0, id: id ?? '', group: 'ILA', title: '—', ready: false }} />;
  const loader = LOADERS[ch.id];
  if (!loader) return <ComingSoon ch={ch} />;
  const Chapter = lazy(loader);
  return (
    <Suspense fallback={<div className="ila"><p className="ila__cite">…</p></div>}>
      <Chapter />
    </Suspense>
  );
}

export default function Ila() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path=":id" element={<ChapterRoute />} />
    </Routes>
  );
}
