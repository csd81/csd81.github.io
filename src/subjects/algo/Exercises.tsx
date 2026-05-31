import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import renderMathInElement from 'katex/contrib/auto-render';
import { ALGO_CHAPTERS } from './registry';
import data from './exercises.json';

interface Ex {
  id: string;
  section_title: string;
  chapter: number | null;
  algo_chapter: number | null;
  problem_html: string | null;
  solution_html: string | null;
}
const FE = (data as unknown as { feladatok: Record<string, Ex> }).feladatok;
const BY_CHAPTER = (data as unknown as { by_chapter: Record<string, string[]> }).by_chapter;
const UNMAPPED = (data as unknown as { unmapped: string[] }).unmapped;

const CH_TITLE: Record<number, string> = Object.fromEntries(ALGO_CHAPTERS.map((c) => [c.num, c.title]));

/** Render an HTML fragment that may contain $…$, $$…$$, \(…\) or \[…\] math. */
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

function sortIds(ids: string[]): string[] {
  return [...ids].sort((a, b) => {
    const pa = a.split('.').map((x) => parseInt(x, 10));
    const pb = b.split('.').map((x) => parseInt(x, 10));
    for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
      const d = (pa[i] ?? 0) - (pb[i] ?? 0);
      if (d) return d;
    }
    return a.localeCompare(b);
  });
}

function ExRow({ ex }: { ex: Ex }) {
  const [open, setOpen] = useState(false);
  const [showSol, setShowSol] = useState(false);
  const hasSol = !!ex.solution_html?.trim();
  return (
    <div style={{ borderBottom: '1px solid #1e2533' }}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="op-btn"
        style={{ display: 'flex', alignItems: 'baseline', gap: '.55rem', width: '100%', textAlign: 'left', border: 'none', background: open ? 'rgba(167,139,250,.07)' : 'transparent', padding: '.5rem .6rem', borderRadius: 0 }}
      >
        <span style={{ fontFamily: 'monospace', color: '#c4b5fd', fontWeight: 600, minWidth: '5rem', flexShrink: 0 }}>{ex.id}</span>
        <span style={{ color: '#8b949e', fontSize: '.72rem', fontStyle: 'italic', flexShrink: 0 }}>{ex.section_title}</span>
        <span style={{ marginLeft: 'auto', flexShrink: 0, fontSize: '.62rem', fontWeight: 700, padding: '.08rem .35rem', borderRadius: '.2rem', ...(hasSol ? { background: 'rgba(16,185,129,.15)', color: '#10b981', border: '1px solid rgba(16,185,129,.4)' } : { background: 'rgba(251,191,36,.1)', color: '#fbbf24', border: '1px solid rgba(251,191,36,.3)' }) }}>
          {hasSol ? 'megoldással' : 'nincs megoldás'}
        </span>
      </button>
      {open && (
        <div style={{ padding: '.4rem .9rem 1rem' }}>
          <HtmlMath className="box-body" html={ex.problem_html ?? ''} />
          {hasSol && (
            <div style={{ marginTop: '.6rem' }}>
              <button className="op-btn" onClick={() => setShowSol((s) => !s)}>{showSol ? 'Megoldás elrejtése' : 'Megoldás megjelenítése'}</button>
              {showSol && (
                <div className="ex-box" style={{ marginTop: '.5rem' }}>
                  <HtmlMath className="box-body" html={ex.solution_html ?? ''} />
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Group({ title, badge, ids, query, defaultOpen }: { title: string; badge: string; ids: string[]; query: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  const exes = useMemo(() => sortIds(ids).map((i) => FE[i]).filter(Boolean), [ids]);
  const filtered = query
    ? exes.filter((e) => (e.id + ' ' + e.section_title + ' ' + e.problem_html).toLowerCase().includes(query))
    : exes;
  if (filtered.length === 0) return null;
  const withSol = filtered.filter((e) => e.solution_html?.trim()).length;
  const reallyOpen = open || !!query;
  return (
    <div style={{ background: '#12161f', border: '1px solid #1e2533', borderRadius: 10, marginBottom: '1rem', overflow: 'hidden' }}>
      <div onClick={() => setOpen((o) => !o)} style={{ display: 'flex', alignItems: 'center', gap: '.7rem', padding: '.85rem 1.1rem', background: '#0a0d14', borderBottom: reallyOpen ? '1px solid #1e2533' : 'none', cursor: 'pointer' }}>
        <span style={{ background: 'rgba(167,139,250,.15)', color: '#a78bfa', border: '1px solid #a78bfa', borderRadius: '.3rem', padding: '.18rem .55rem', fontSize: '.72rem', fontWeight: 700, minWidth: '3rem', textAlign: 'center' }}>{badge}</span>
        <span style={{ color: '#e6edf3', fontWeight: 700, fontSize: '.95rem', flex: 1 }}>{title}</span>
        <span style={{ color: '#94a3b8', fontSize: '.78rem' }}>{filtered.length} feladat · <span style={{ color: '#10b981', fontWeight: 600 }}>{withSol} megoldással</span></span>
        <span style={{ color: '#64748b', transform: reallyOpen ? 'rotate(90deg)' : 'none', transition: 'transform .15s' }}>›</span>
      </div>
      {reallyOpen && <div style={{ padding: '.2rem .5rem .4rem' }}>{filtered.map((e) => <ExRow key={e.id} ex={e} />)}</div>}
    </div>
  );
}

export default function AlgoExercises() {
  const [query, setQuery] = useState('');
  const trimmed = query.trim().toLowerCase();
  const total = Object.keys(FE).length;
  const withSol = Object.values(FE).filter((e) => e.solution_html?.trim()).length;
  const chapters = Object.keys(BY_CHAPTER).map(Number).sort((a, b) => a - b);
  return (
    <div className="ila">
      <Link to="/algo" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker" style={{ color: '#a78bfa' }}>Algoritmikus számelmélet</p>
      <h1 className="ila__title">Feladatok</h1>
      <p className="ila__cite">{total} feladat · {withSol} kidolgozott megoldással. Kattints egy feladatra a kibontáshoz.</p>
      <div style={{ display: 'flex', gap: '.5rem', margin: '1rem 0 1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <input type="search" placeholder="Keresés a feladatokban…" value={query} onChange={(e) => setQuery(e.target.value)}
          className="ila-text" style={{ flex: 1, minWidth: 240, padding: '.55rem .85rem', fontSize: '.9rem' }} />
        <span style={{ color: '#6b7280', fontSize: '.82rem' }}>{total} feladat</span>
      </div>
      {chapters.map((ch) => (
        <Group key={ch} badge={`Fej. ${ch}`} title={CH_TITLE[ch] ?? `Fejezet ${ch}`} ids={BY_CHAPTER[String(ch)]} query={trimmed} />
      ))}
      {UNMAPPED.length > 0 && (
        <Group badge="AlgFgy" title="Egyéb feladatok (halmazok, csoportok, …)" ids={UNMAPPED} query={trimmed} />
      )}
    </div>
  );
}
