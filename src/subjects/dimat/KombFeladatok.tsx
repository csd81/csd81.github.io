import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import renderMathInElement from 'katex/contrib/auto-render';
import data from './kombfeladatok.json';

interface KEx {
  id: string;
  n: number | null;
  book_ref: string;
  chapter_ref: number | null;
  title: string;
  section: string;
  section_name: string;
  problem_html: string;
  solution_html: string;
}
const EX = (data as { exercises: Record<string, KEx> }).exercises;
const BY_CHAPTER = (data as { by_chapter: Record<string, string[]> }).by_chapter;
const SOURCE = (data as { source: string }).source;
const COUNT = (data as { count: number }).count;

function HtmlMath({ html, className }: { html: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    try {
      renderMathInElement(ref.current, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\[', right: '\\]', display: true },
          { left: '\\(', right: '\\)', display: false },
        ],
        throwOnError: false,
      });
    } catch { /* ignore */ }
  }, [html]);
  return <div ref={ref} className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

function ExRow({ ex }: { ex: KEx }) {
  const [open, setOpen] = useState(false);
  const [showSol, setShowSol] = useState(false);
  const hasSol = !!ex.solution_html?.trim();
  return (
    <div style={{ borderBottom: '1px solid #1e2533' }}>
      <button onClick={() => setOpen((o) => !o)} className="op-btn"
        style={{ display: 'flex', alignItems: 'baseline', gap: '.55rem', width: '100%', textAlign: 'left', border: 'none', background: open ? 'rgba(52,211,153,.07)' : 'transparent', padding: '.5rem .6rem', borderRadius: 0 }}>
        <span style={{ fontFamily: 'monospace', color: '#6ee7b7', fontWeight: 600, minWidth: '3rem', flexShrink: 0 }}>{ex.book_ref || ex.id}</span>
        <span style={{ color: '#e6edf3' }}>{ex.title}</span>
        {hasSol && <span style={{ marginLeft: 'auto', flexShrink: 0, fontSize: '.62rem', fontWeight: 700, padding: '.08rem .35rem', borderRadius: '.2rem', background: 'rgba(16,185,129,.15)', color: '#10b981', border: '1px solid rgba(16,185,129,.4)' }}>megoldással</span>}
      </button>
      {open && (
        <div style={{ padding: '.4rem .9rem 1rem' }}>
          <HtmlMath className="box-body" html={ex.problem_html} />
          {hasSol && (
            <div style={{ marginTop: '.6rem' }}>
              <button className="op-btn" onClick={() => setShowSol((s) => !s)}>{showSol ? 'Megoldás elrejtése' : 'Megoldás megjelenítése'}</button>
              {showSol && <div className="ex-box" style={{ marginTop: '.5rem' }}><HtmlMath className="box-body" html={ex.solution_html} /></div>}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Group({ chapter, ids, query }: { chapter: number; ids: string[]; query: string }) {
  const [open, setOpen] = useState(false);
  const exes = useMemo(() => ids.map((i) => EX[i]).filter(Boolean), [ids]);
  const filtered = query
    ? exes.filter((e) => (e.id + ' ' + e.title + ' ' + e.problem_html).toLowerCase().includes(query))
    : exes;
  if (filtered.length === 0) return null;
  const sectionName = filtered[0]?.section_name || '';
  const withSol = filtered.filter((e) => e.solution_html?.trim()).length;
  const reallyOpen = open || !!query;
  return (
    <div style={{ background: '#12161f', border: '1px solid #1e2533', borderRadius: 10, marginBottom: '1rem', overflow: 'hidden' }}>
      <div onClick={() => setOpen((o) => !o)} style={{ display: 'flex', alignItems: 'center', gap: '.7rem', padding: '.85rem 1.1rem', background: '#0a0d14', borderBottom: reallyOpen ? '1px solid #1e2533' : 'none', cursor: 'pointer' }}>
        <span style={{ background: 'rgba(52,211,153,.15)', color: '#34d399', border: '1px solid #34d399', borderRadius: '.3rem', padding: '.18rem .55rem', fontSize: '.72rem', fontWeight: 700, minWidth: '3.5rem', textAlign: 'center' }}>Fej. {chapter}</span>
        <span style={{ color: '#e6edf3', fontWeight: 700, fontSize: '.95rem', flex: 1 }}>{sectionName}</span>
        <span style={{ color: '#94a3b8', fontSize: '.78rem' }}>{filtered.length} feladat · <span style={{ color: '#10b981', fontWeight: 600 }}>{withSol} megoldással</span></span>
        <span style={{ color: '#64748b', transform: reallyOpen ? 'rotate(90deg)' : 'none', transition: 'transform .15s' }}>›</span>
      </div>
      {reallyOpen && <div style={{ padding: '.2rem .5rem .4rem' }}>{filtered.map((e) => <ExRow key={e.id} ex={e} />)}</div>}
    </div>
  );
}

export default function KombFeladatok() {
  const [query, setQuery] = useState('');
  const trimmed = query.trim().toLowerCase();
  const chapters = Object.keys(BY_CHAPTER).map(Number).sort((a, b) => a - b);
  return (
    <div className="ila">
      <Link to="/dimat" className="ila__back">← Diszkrét matematika</Link>
      <p className="ila__kicker" style={{ color: '#34d399' }}>Kombinatorikai feladatok</p>
      <h1 className="ila__title">KombFeladatok</h1>
      <p className="ila__cite">{SOURCE} · {COUNT} részletesen megoldott feladat. Kattints egy feladatra a kibontáshoz.</p>
      <div style={{ display: 'flex', gap: '.5rem', margin: '1rem 0 1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <input type="search" placeholder="Keresés a feladatokban…" value={query} onChange={(e) => setQuery(e.target.value)}
          className="ila-text" style={{ flex: 1, minWidth: 240, padding: '.55rem .85rem', fontSize: '.9rem' }} />
        <span style={{ color: '#6b7280', fontSize: '.82rem' }}>{COUNT} feladat</span>
      </div>
      {chapters.map((ch) => <Group key={ch} chapter={ch} ids={BY_CHAPTER[String(ch)]} query={trimmed} />)}
    </div>
  );
}
