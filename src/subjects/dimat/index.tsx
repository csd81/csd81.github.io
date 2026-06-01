import { lazy, Suspense, useMemo, useState, type ComponentType } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { useLang, type Bi } from '../../shared/providers/LanguageProvider';
import { MarkdownView } from '../../shared/ui/MarkdownView';
import { TOPICS, topicById, pickDoc, isFallback, type Topic } from './content';
import { DIMAT_CHAPTERS, DIMAT_GROUP_LABEL, type DimatChapter } from './chapters/registry';
import { MathHtml } from '../../shared/ui/MathHtml';
import cardMeta from './cardMeta.json';
import '../../pages/home.css';
import '../ila/ila.css';
import './dimat.css';

const CARD_META = cardMeta as Record<string, { desc: string; tags: string[] }>;

const KombFeladatok = lazy(() => import('./KombFeladatok'));

/** Lazy interactive chapter modules. */
const LOADERS: Record<string, () => Promise<{ default: ComponentType }>> = {
  ch0: () => import('./chapters/ch0'), ch1: () => import('./chapters/ch1'), ch2: () => import('./chapters/ch2'),
  ch3: () => import('./chapters/ch3'), ch4: () => import('./chapters/ch4'), ch5: () => import('./chapters/ch5'),
  ch6: () => import('./chapters/ch6'), ch7: () => import('./chapters/ch7'), ch8: () => import('./chapters/ch8'),
  ch9: () => import('./chapters/ch9'), ch10: () => import('./chapters/ch10'), ch11: () => import('./chapters/ch11'),
  ch12: () => import('./chapters/ch12'), ch13: () => import('./chapters/ch13'), ch14: () => import('./chapters/ch14'),
  ch15: () => import('./chapters/ch15'), ch16: () => import('./chapters/ch16'), ch17: () => import('./chapters/ch17'),
  ch18: () => import('./chapters/ch18'), ch19: () => import('./chapters/ch19'), ch20: () => import('./chapters/ch20'),
  ch21: () => import('./chapters/ch21'), ch22: () => import('./chapters/ch22'), ch23: () => import('./chapters/ch23'),
  appendix: () => import('./chapters/appendix'),
};

const UI = {
  kicker: { en: 'Discrete Mathematics', hu: 'Diszkrét matematika' },
  title: { en: 'Combinatorics & Graph Theory', hu: 'Kombinatorika és Gráfelmélet' },
  lead: {
    en: '24 interactive chapters (combinatorics + graph theory) with theory, KaTeX and live widgets — plus an exercise collection.',
    hu: '24 interaktív fejezet (kombinatorika + gráfelmélet) elmélettel, KaTeX-szel és élő szemléltetőkkel — plusz feladatgyűjtemény.',
  },
  exTitle: { en: 'Exercise collection', hu: 'Feladatgyűjtemény' },
  back: { en: '← All topics', hu: '← Témakörök' },
  notFound: { en: 'Topic not found.', hu: 'A témakör nem található.' },
  enOnly: { en: 'English only', hu: 'Csak angolul' },
  huOnly: { en: 'Hungarian only', hu: 'Csak magyarul' },
} satisfies Record<string, Bi>;

const TAB_LABELS = {
  theory: { en: 'Theory', hu: 'Elmélet' },
  exercises: { en: 'Exercises', hu: 'Feladatok' },
  quiz: { en: 'Quiz', hu: 'Kvíz' },
  solutions: { en: 'Solutions', hu: 'Megoldások' },
  checklist: { en: 'Checklist', hu: 'Ellenőrzőlista' },
} satisfies Record<string, Bi>;

type TabKey = keyof typeof TAB_LABELS;

function Landing() {
  const { t, lang } = useLang();
  const groups: DimatChapter['group'][] = ['KOMB', 'GRAF'];
  return (
    <div className="dimat">
      <header className="dimat__hero">
        <p className="dimat__kicker">{t(UI.kicker)}</p>
        <h1 className="dimat__title">{t(UI.title)}</h1>
        <p className="dimat__lead">{t(UI.lead)}</p>
        <div style={{ marginTop: '.75rem' }}>
          <Link to="/dimat/kombfeladatok" className="op-btn" style={{ display: 'inline-block' }}>
            📚 {lang === 'hu' ? 'KombFeladatok — 103 megoldott feladat (Szalkai 2023)' : 'KombFeladatok — 103 worked exercises (Szalkai 2023)'}
          </Link>
        </div>
      </header>

      {groups.map((g) => (
        <section key={g}>
          <h2 className="home__section-title">{lang === 'hu' ? DIMAT_GROUP_LABEL[g].hu : DIMAT_GROUP_LABEL[g].en}</h2>
          <ul className="dimat__grid">
            {DIMAT_CHAPTERS.filter((c) => c.group === g).map((c) => (
              <li key={c.id}>
                <Link to={`/dimat/${c.id}`} className="chcard">
                  <span className="chcard__num">{c.part}</span>
                  <span className="chcard__body">
                    <span className="chcard__title">{c.title}</span>
                    {CARD_META[c.id]?.desc
                      ? <MathHtml className="chcard__desc" html={CARD_META[c.id].desc} />
                      : <span className="chcard__blurb">{lang === 'hu' ? 'Interaktív fejezet' : 'Interactive chapter'}</span>}
                    {CARD_META[c.id]?.tags?.length ? (
                      <span className="chcard__tags">
                        {CARD_META[c.id].tags.map((t, i) => <MathHtml key={i} className="chcard__tag" html={t} />)}
                      </span>
                    ) : null}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section>
        <h2 className="home__section-title">{t(UI.exTitle)}</h2>
        <ul className="dimat__grid">
          {TOPICS.map((tp) => (
            <li key={tp.id}>
              <Link to={`/dimat/${tp.id}`} className="chcard">
                <span className="chcard__num">{tp.no}</span>
                <span className="chcard__body">
                  <span className="chcard__title">{t(tp.title)}</span>
                  <span className="chcard__blurb">{lang === 'hu' ? 'Feladatok · kvíz · megoldások' : 'Exercises · quiz · solutions'}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function ChapterRoute() {
  const { id } = useParams();
  const Chapter = useMemo(() => {
    const loader = id ? LOADERS[id] : undefined;
    return loader ? lazy(loader) : null;
  }, [id]);
  if (Chapter) {
    return (
      <Suspense fallback={<div className="ila"><p className="ila__cite">…</p></div>}>
        <Chapter />
      </Suspense>
    );
  }
  return <TopicView />;
}

function buildTabs(topic: Topic): { key: TabKey; doc: NonNullable<Topic['readme']> }[] {
  const tabs: { key: TabKey; doc: NonNullable<Topic['readme']> }[] = [];
  if (topic.readme) tabs.push({ key: 'theory', doc: topic.readme });
  if (topic.exercises.length) {
    const en = topic.exercises.map((e) => e.en).filter(Boolean).join('\n\n---\n\n');
    const hu = topic.exercises.map((e) => e.hu ?? e.en).filter(Boolean).join('\n\n---\n\n');
    tabs.push({ key: 'exercises', doc: { en: en || undefined, hu: hu || undefined } });
  }
  if (topic.quiz) tabs.push({ key: 'quiz', doc: topic.quiz });
  if (topic.solutions) tabs.push({ key: 'solutions', doc: topic.solutions });
  if (topic.checklist) tabs.push({ key: 'checklist', doc: topic.checklist });
  return tabs;
}

function TopicView() {
  const { id } = useParams();
  const { t, lang } = useLang();
  const topic = id ? topicById(id) : undefined;
  const tabs = useMemo(() => (topic ? buildTabs(topic) : []), [topic]);
  const [active, setActive] = useState(0);

  if (!topic) {
    return (
      <div className="dimat">
        <p className="dimat__lead">{t(UI.notFound)}</p>
        <Link to="/dimat" className="dimat__back">{t(UI.back)}</Link>
      </div>
    );
  }

  const tab = tabs[Math.min(active, tabs.length - 1)];
  const md = tab ? pickDoc(tab.doc, lang) : '';
  const fallback = tab ? isFallback(tab.doc, lang) : false;

  return (
    <div className="dimat">
      <Link to="/dimat" className="dimat__back">{t(UI.back)}</Link>
      <header className="dimat__topichdr">
        <p className="dimat__kicker">§{topic.no} · {t(UI.kicker)}</p>
        <h1 className="dimat__title">{t(topic.title)}</h1>
      </header>

      {tabs.length > 1 && (
        <div className="dimat__tabs" role="tablist">
          {tabs.map((x, i) => (
            <button
              key={x.key}
              role="tab"
              aria-selected={i === active}
              className={`dimat__tab${i === active ? ' is-active' : ''}`}
              onClick={() => setActive(i)}
            >
              {t(TAB_LABELS[x.key])}
            </button>
          ))}
        </div>
      )}

      {fallback && (
        <p className="dimat__badge">{lang === 'hu' ? t(UI.enOnly) : t(UI.huOnly)}</p>
      )}

      {md ? <MarkdownView markdown={md} /> : <p className="dimat__lead">—</p>}
    </div>
  );
}

export default function Dimat() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="kombfeladatok" element={<Suspense fallback={<div className="ila"><p className="ila__cite">…</p></div>}><KombFeladatok /></Suspense>} />
      <Route path=":id" element={<ChapterRoute />} />
    </Routes>
  );
}
