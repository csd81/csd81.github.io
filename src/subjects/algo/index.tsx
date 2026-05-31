import { lazy, Suspense, type ComponentType } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { ALGO_CHAPTERS, algoChapterById, type AlgoChapter } from './registry';
import '../../pages/home.css';
import '../ila/ila.css';

/** Lazy chapter loaders — one entry per chapter file. */
const LOADERS: Record<string, () => Promise<{ default: ComponentType }>> = {
  ch1: () => import('./chapters/ch1'),
  ch2: () => import('./chapters/ch2'),
  ch3: () => import('./chapters/ch3'),
  ch4: () => import('./chapters/ch4'),
  ch5: () => import('./chapters/ch5'),
  ch6: () => import('./chapters/ch6'),
  ch7: () => import('./chapters/ch7'),
  ch8: () => import('./chapters/ch8'),
  ch9: () => import('./chapters/ch9'),
  ch10: () => import('./chapters/ch10'),
  ch11: () => import('./chapters/ch11'),
  ch12: () => import('./chapters/ch12'),
  ch13: () => import('./chapters/ch13'),
};

/** Landing page — grid of all 13 chapter cards. */
function Landing() {
  return (
    <div className="ila">
      <p className="ila__kicker">Algoritmikus számelmélet · Number Theory</p>
      <h1 className="ila__title">Számelmélet</h1>
      <p className="ila__cite">
        Szalkai István &amp; Dósa György · Pannon Egyetem Matematika Tanszék · Typotex 2011
      </p>
      <section>
        <h2 className="home__section-title">Fejezetek</h2>
        <ul className="ila__grid">
          {ALGO_CHAPTERS.map((c) => (
            <li key={c.id}>
              <Link
                to={`/algo/${c.id}`}
                className="chcard"
                style={c.ready ? undefined : { opacity: 0.55 }}
              >
                <span className="chcard__num">{String(c.num).padStart(2, '0')}</span>
                <span className="chcard__body">
                  <span className="chcard__title">{c.title}</span>
                  <span className="chcard__blurb">
                    {c.ready ? 'Interaktív fejezet' : 'Hamarosan'}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function ComingSoon({ ch }: { ch: AlgoChapter }) {
  return (
    <div className="ila">
      <Link to="/algo" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Számelmélet · {String(ch.num).padStart(2, '0')}</p>
      <h1 className="ila__title">{ch.title}</h1>
      <p className="ila__cite">Ez a fejezet hamarosan elérhető.</p>
    </div>
  );
}

function ChapterRoute() {
  const { id } = useParams();
  const ch = id ? algoChapterById(id) : undefined;
  if (!ch) {
    return (
      <ComingSoon
        ch={{ num: 0, id: id ?? '', title: '—', glossary: '', tags: [], sections: [], related_tetel: [], ready: false }}
      />
    );
  }
  const loader = LOADERS[ch.id];
  if (!loader) return <ComingSoon ch={ch} />;
  const Chapter = lazy(loader);
  return (
    <Suspense fallback={<div className="ila"><p className="ila__cite">…</p></div>}>
      <Chapter />
    </Suspense>
  );
}

/** Default export — the Algo subject root. Mount at /algo/* in routes.tsx. */
export default function Algo() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path=":id" element={<ChapterRoute />} />
    </Routes>
  );
}
