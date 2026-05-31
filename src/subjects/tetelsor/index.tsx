/**
 * Tetelsor — 39 vizsgatétel / Theorem List — 39 exam topics.
 * List of exam topics (3 paths) + ILA foundations, each topic opening its
 * markdown exam page (ported from content/tetelsor/NN.md).
 */
import { useState, type CSSProperties } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { RichTex } from '../ila/components/kit';
import { MarkdownView } from '../../shared/ui/MarkdownView';
import { FOUNDATIONS, type FoundationTopic } from './data';
import {
  EXAM_TOPICS, examTopicByN, examTopicsInPath, PATH_META, type ExamTopicDoc,
} from './content';
import '../../pages/home.css';
import '../ila/ila.css';

const PATH_ORDER: ExamTopicDoc['path'][] = ['combo', 'graph', 'szamelm'];

function colHeadStyle(colour: string): CSSProperties {
  const bg = colour === '#f59e0b' ? '#1c1209' : colour === '#38bdf8' ? '#082236' : '#1b1230';
  return { display: 'block', background: bg, border: `1px solid ${colour}55`, borderRadius: '8px 8px 0 0', padding: '.7rem .85rem' };
}
const COL_BODY_STYLE: CSSProperties = { background: '#0d1117', border: '1px solid #1f2937', borderTop: 'none', borderRadius: '0 0 8px 8px', padding: '.4rem .25rem' };
const ROW_BASE_STYLE: CSSProperties = { display: 'flex', alignItems: 'baseline', gap: '.45rem', padding: '.4rem .55rem', textDecoration: 'none', color: '#cbd5e1', fontSize: '.83rem', borderRadius: '.35rem' };

function PathCol({ path, query }: { path: ExamTopicDoc['path']; query: string }) {
  const meta = PATH_META[path];
  const topics = examTopicsInPath(path).filter((t) => !query || t.title.toLowerCase().includes(query));
  return (
    <div>
      <div style={colHeadStyle(meta.colour)}>
        <div style={{ color: meta.colour, fontWeight: 700, fontSize: '.7rem', letterSpacing: '.1em', textTransform: 'uppercase' }}>{meta.title}</div>
        <div style={{ color: meta.colour, fontSize: '.9rem', marginTop: '.1rem', opacity: 0.85 }}>{meta.range[0]}–{meta.range[1]}. tétel</div>
      </div>
      <div style={COL_BODY_STYLE}>
        {topics.length === 0 && <p style={{ color: '#6b7280', fontSize: '.8rem', padding: '.5rem .6rem', margin: 0 }}>Nincs találat</p>}
        {topics.map((t) => (
          <Link key={t.n} to={`/tetelsor/${t.n}`} className="ts-row" style={ROW_BASE_STYLE}>
            <span style={{ color: meta.colour, fontWeight: 700, fontSize: '.72rem', flexShrink: 0 }}>{String(t.n).padStart(2, '0')}</span>
            <RichTex html={t.title} style={{ color: '#e6edf3', fontSize: '.83rem', lineHeight: 1.5 }} />
          </Link>
        ))}
      </div>
    </div>
  );
}

function FoundationsCol({ query }: { query: string }) {
  const colour = '#10b981';
  const topics: FoundationTopic[] = FOUNDATIONS.filter((t) => !query || t.title.toLowerCase().includes(query));
  return (
    <div>
      <div style={{ display: 'block', background: '#082a1d', border: `1px solid ${colour}55`, borderRadius: '8px 8px 0 0', padding: '.7rem .85rem' }}>
        <div style={{ color: colour, fontWeight: 700, fontSize: '.7rem', letterSpacing: '.1em', textTransform: 'uppercase' }}>ILA Alapok</div>
        <div style={{ color: '#34d399', fontSize: '.9rem', marginTop: '.1rem' }}>9 alapozó téma</div>
      </div>
      <div style={COL_BODY_STYLE}>
        {topics.length === 0 && <p style={{ color: '#6b7280', fontSize: '.8rem', padding: '.5rem .6rem', margin: 0 }}>Nincs találat</p>}
        {topics.map((t) => (
          <Link key={t.n} to={`/ila/${t.ilaId}`} className="ts-row" style={ROW_BASE_STYLE}>
            <span style={{ color: colour, fontWeight: 700, fontSize: '.72rem', flexShrink: 0 }}>F{t.n}</span>
            <span style={{ color: '#e6edf3' }}>{t.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function ListPage() {
  const [query, setQuery] = useState('');
  const trimmed = query.trim().toLowerCase();
  const examVisible = EXAM_TOPICS.filter((t) => !trimmed || t.title.toLowerCase().includes(trimmed)).length;
  const foundVisible = FOUNDATIONS.filter((t) => !trimmed || t.title.toLowerCase().includes(trimmed)).length;
  return (
    <div className="ila">
      <header style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '.7rem', flexWrap: 'wrap' }}>
          <h1 className="ila__title" style={{ margin: 0 }}>Tételsor</h1>
          <span style={{ color: '#9ca3af', fontSize: '.95rem' }}>39 vizsgatétel + ILA alapok</span>
        </div>
        <p className="ila__cite" style={{ marginTop: '.5rem' }}>
          A diszkrét matematika vizsgakérdései három útvonalra osztva. Kattints egy tételre a kidolgozás megnyitásához.
        </p>
      </header>
      <div style={{ display: 'flex', gap: '.5rem', marginBottom: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <input type="search" placeholder="Keresés / Search…" value={query} onChange={(e) => setQuery(e.target.value)}
          className="ila-text" style={{ flex: 1, minWidth: 240, padding: '.55rem .85rem', fontSize: '.9rem' }} />
        <span style={{ color: '#6b7280', fontSize: '.82rem', flexShrink: 0 }}>{trimmed ? `${examVisible + foundVisible} találat` : '39 + 9 tétel'}</span>
      </div>
      <div className="ts-columns">
        {PATH_ORDER.map((p) => <PathCol key={p} path={p} query={trimmed} />)}
        <FoundationsCol query={trimmed} />
      </div>
      <style>{`
        .ts-columns { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1rem; }
        .ts-row:hover { background: #1f2937 !important; }
        @media (max-width: 880px) { .ts-columns { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 520px) { .ts-columns { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}

function relLabel(id: string, kind: 'ila' | 'dimat') {
  return (kind === 'ila' ? 'ILA ' : 'Dimat ') + id.replace('ch', '');
}

function DetailPage() {
  const { n } = useParams();
  const topic = examTopicByN(parseInt(n ?? '0', 10));
  if (!topic) {
    return (
      <div className="ila">
        <Link to="/tetelsor" className="ila__back">← Tételsor</Link>
        <p className="ila__cite">A tétel nem található.</p>
      </div>
    );
  }
  const meta = PATH_META[topic.path];
  const siblings = examTopicsInPath(topic.path);
  const idx = siblings.findIndex((t) => t.n === topic.n);
  const prev = idx > 0 ? siblings[idx - 1] : null;
  const next = idx >= 0 && idx < siblings.length - 1 ? siblings[idx + 1] : null;
  return (
    <div className="ila">
      <Link to="/tetelsor" className="ila__back">← Tételsor</Link>
      <p className="ila__kicker" style={{ color: meta.colour }}>{meta.title} · {String(topic.n).padStart(2, '0')}. tétel</p>
      <h1 className="ila__title"><RichTex html={topic.title} style={{ display: 'inline' }} /></h1>
      {topic.glossary && (
        <div className="info-box" style={{ marginTop: '.75rem' }}>
          <span className="lbl" style={{ color: meta.colour }}>Áttekintés</span>
          <RichTex className="box-body" html={topic.glossary} />
        </div>
      )}
      {topic.formulas.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', margin: '.6rem 0' }}>
          {topic.formulas.map((f, i) => <RichTex key={i} html={`<span class="formula-chip">${f}</span>`} />)}
        </div>
      )}
      <MarkdownView markdown={topic.body} />

      {(topic.related_ila.length > 0 || topic.related_dimat.length > 0) && (
        <div className="info-box" style={{ marginTop: '1rem' }}>
          <span className="lbl" style={{ color: meta.colour }}>Kapcsolódó interaktív fejezetek</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginTop: '.3rem' }}>
            {topic.related_ila.map((id) => <Link key={'i' + id} to={`/ila/${id}`} className="op-btn">{relLabel(id, 'ila')}</Link>)}
            {topic.related_dimat.map((id) => <Link key={'d' + id} to={`/dimat/${id}`} className="op-btn">{relLabel(id, 'dimat')}</Link>)}
          </div>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem', gap: '.5rem' }}>
        {prev ? <Link to={`/tetelsor/${prev.n}`} className="op-btn">← {String(prev.n).padStart(2, '0')}.</Link> : <span />}
        {next ? <Link to={`/tetelsor/${next.n}`} className="op-btn">{String(next.n).padStart(2, '0')}. →</Link> : <span />}
      </div>
    </div>
  );
}

export default function Tetelsor() {
  return (
    <Routes>
      <Route index element={<ListPage />} />
      <Route path=":n" element={<DetailPage />} />
    </Routes>
  );
}
