import { useMemo, useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { useLang, type Bi } from '../../shared/providers/LanguageProvider';
import { MarkdownView } from '../../shared/ui/MarkdownView';
import { TOPICS, topicById, pickDoc, isFallback, type Topic } from './content';
import '../../pages/home.css';
import './dimat.css';

const UI = {
  kicker: { en: 'Discrete Mathematics', hu: 'Diszkrét matematika' },
  title: { en: 'Discrete Mathematics', hu: 'Diszkrét matematika' },
  lead: {
    en: 'Combinatorics and graph theory — 18 topics with theory, worked solutions, exercises and a quiz.',
    hu: '18 témakör kombinatorikából és gráfelméletből — elmélet, kidolgozott megoldások, feladatok és kvíz.',
  },
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

function TopicList() {
  const { t } = useLang();
  return (
    <div className="dimat">
      <header className="dimat__hero">
        <p className="dimat__kicker">{t(UI.kicker)}</p>
        <h1 className="dimat__title">{t(UI.title)}</h1>
        <p className="dimat__lead">{t(UI.lead)}</p>
      </header>
      <ul className="dimat__grid">
        {TOPICS.map((tp) => (
          <li key={tp.id}>
            <Link to={`/dimat/${tp.id}`} className="chcard">
              <span className="chcard__num">{tp.no}</span>
              <span className="chcard__body">
                <span className="chcard__title">{t(tp.title)}</span>
                <span className="chcard__blurb">{tp.title.hu}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function buildTabs(topic: Topic): { key: TabKey; doc: NonNullable<Topic['readme']> }[] {
  const tabs: { key: TabKey; doc: NonNullable<Topic['readme']> }[] = [];
  if (topic.readme) tabs.push({ key: 'theory', doc: topic.readme });
  if (topic.exercises.length) {
    // merge exercises into one doc per language
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
      <Route index element={<TopicList />} />
      <Route path=":id" element={<TopicView />} />
    </Routes>
  );
}
