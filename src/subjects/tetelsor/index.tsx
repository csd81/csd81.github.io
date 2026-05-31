/**
 * Tetelsor — 39 vizsgatétel / Theorem List — 39 exam topics
 *
 * Ported from northwind-control-center/templates/learn/tetelsor.html.
 * Renders inside <div className="ila"> so all existing .ila scoped styles apply.
 */

import { useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { RichTex } from '../ila/components/kit';
import { PATHS, FOUNDATIONS, type PathMeta, type FoundationTopic } from './data';
import '../../pages/home.css';
import '../ila/ila.css';

// ── inline style helpers ─────────────────────────────────────────────────

function colHeadStyle(colour: string): CSSProperties {
  // Derive a faint tinted background from the accent colour (same look as Flask page)
  const bg =
    colour === '#f59e0b' ? '#1c1209'
    : colour === '#38bdf8' ? '#082236'
    : colour === '#a78bfa' ? '#1b1230'
    : '#0d1117';
  return {
    display: 'block',
    textDecoration: 'none',
    background: bg,
    border: `1px solid ${colour}55`,
    borderRadius: '8px 8px 0 0',
    padding: '.7rem .85rem',
  };
}

const COL_BODY_STYLE: CSSProperties = {
  background: '#0d1117',
  border: '1px solid #1f2937',
  borderTop: 'none',
  borderRadius: '0 0 8px 8px',
  padding: '.4rem .25rem',
};

const ROW_BASE_STYLE: CSSProperties = {
  display: 'flex',
  alignItems: 'baseline',
  gap: '.45rem',
  padding: '.4rem .55rem',
  textDecoration: 'none',
  color: '#cbd5e1',
  fontSize: '.83rem',
  borderRadius: '.35rem',
  transition: 'background .12s',
};

// ── sub-components ────────────────────────────────────────────────────────

interface PathColProps {
  path: PathMeta;
  query: string;
}

function PathCol({ path, query }: PathColProps) {
  const { colour, title, titleEn, rangeLabel, rangeLabelEn, topics } = path;

  const filteredTopics = query
    ? topics.filter((t) => t.title.toLowerCase().includes(query))
    : topics;

  return (
    <div>
      {/* column header — plain div (no external link; dimat topic pages live at /dimat/:id) */}
      <div style={colHeadStyle(colour)}>
        <div
          style={{
            color: colour,
            fontWeight: 700,
            fontSize: '.7rem',
            letterSpacing: '.1em',
            textTransform: 'uppercase',
          }}
        >
          {title}
        </div>
        <div style={{ color: colour, fontSize: '.9rem', marginTop: '.1rem', opacity: 0.85 }}>
          <span className="hu">{rangeLabel}</span>
          <span className="en" style={{ display: 'none' }}>{rangeLabelEn}</span>
        </div>
      </div>

      <div style={COL_BODY_STYLE}>
        {filteredTopics.length === 0 && (
          <p style={{ color: '#6b7280', fontSize: '.8rem', padding: '.5rem .6rem', margin: 0 }}>
            Nincs találat
          </p>
        )}
        {filteredTopics.map((t) => {
          const num = (
            <span style={{ color: colour, fontWeight: 700, fontSize: '.72rem', flexShrink: 0 }}>
              {String(t.n).padStart(2, '0')}
            </span>
          );
          {/* RichTex handles any \(...\) math in the title */}
          const label = (
            <RichTex
              html={t.title}
              style={{ color: '#e6edf3', fontSize: '.83rem', lineHeight: 1.5 }}
            />
          );
          // Link to the related interactive dimat chapter when one exists; otherwise plain row.
          return t.dimatId ? (
            <Link
              key={t.n}
              to={`/dimat/${t.dimatId}`}
              style={ROW_BASE_STYLE}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = '#1f2937'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
            >
              {num}
              {label}
            </Link>
          ) : (
            <div key={t.n} style={ROW_BASE_STYLE}>
              {num}
              {label}
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface FoundationsColProps {
  query: string;
}

function FoundationsCol({ query }: FoundationsColProps) {
  const colour = '#10b981';
  const filteredTopics: FoundationTopic[] = query
    ? FOUNDATIONS.filter((t) => t.title.toLowerCase().includes(query))
    : FOUNDATIONS;

  return (
    <div>
      <div
        style={{
          display: 'block',
          background: '#082a1d',
          border: `1px solid ${colour}55`,
          borderRadius: '8px 8px 0 0',
          padding: '.7rem .85rem',
        }}
      >
        <div
          style={{
            color: colour,
            fontWeight: 700,
            fontSize: '.7rem',
            letterSpacing: '.1em',
            textTransform: 'uppercase',
          }}
        >
          ILA Alapok
        </div>
        <div style={{ color: '#34d399', fontSize: '.9rem', marginTop: '.1rem' }}>
          9 alapozó téma
        </div>
      </div>

      <div style={COL_BODY_STYLE}>
        {filteredTopics.length === 0 && (
          <p style={{ color: '#6b7280', fontSize: '.8rem', padding: '.5rem .6rem', margin: 0 }}>
            Nincs találat
          </p>
        )}
        {filteredTopics.map((t) => (
          <Link
            key={t.n}
            to={`/ila/${t.ilaId}`}
            style={{ ...ROW_BASE_STYLE }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = '#1f2937'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
          >
            <span style={{ color: colour, fontWeight: 700, fontSize: '.72rem', flexShrink: 0 }}>
              F{t.n}
            </span>
            <span style={{ color: '#e6edf3' }}>{t.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ── main page ─────────────────────────────────────────────────────────────

export default function Tetelsor() {
  const [query, setQuery] = useState('');
  const trimmed = query.trim().toLowerCase();

  // Count visible rows for the counter badge
  const examVisible = PATHS.flatMap((p) =>
    trimmed ? p.topics.filter((t) => t.title.toLowerCase().includes(trimmed)) : p.topics,
  ).length;
  const foundVisible = trimmed
    ? FOUNDATIONS.filter((t) => t.title.toLowerCase().includes(trimmed)).length
    : FOUNDATIONS.length;
  const totalVisible = examVisible + foundVisible;

  return (
    <div className="ila">

      {/* header */}
      <header style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '.7rem', flexWrap: 'wrap' }}>
          <h1 className="ila__title" style={{ margin: 0 }}>
            Tételsor
          </h1>
          <span style={{ color: '#9ca3af', fontSize: '.95rem' }}>
            39 vizsgatétel + ILA alapok &middot; Theorem List + foundations
          </span>
        </div>
        <p className="ila__cite" style={{ marginTop: '.5rem' }}>
          A diszkrét matematika vizsgakérdései három útvonalra osztva.
          Kattints egy tételre a kapcsolódó interaktív fejezet megnyitásához.
          &nbsp;&mdash;&nbsp;
          Discrete-mathematics exam topics organised into three paths.
          Click a topic to open its related interactive chapter.
        </p>
      </header>

      {/* search row */}
      <div style={{ display: 'flex', gap: '.5rem', marginBottom: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <input
          type="search"
          placeholder="Keresés / Search…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="ila-text"
          style={{ flex: 1, minWidth: 240, padding: '.55rem .85rem', fontSize: '.9rem' }}
        />
        <span style={{ color: '#6b7280', fontSize: '.82rem', flexShrink: 0 }}>
          {trimmed
            ? `${totalVisible} találat`
            : `39 + 9 tétel`}
        </span>
      </div>

      {/* 4-column grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
          gap: '1rem',
        }}
        className="ts-columns"
      >
        {PATHS.map((path) => (
          <PathCol key={path.slug} path={path} query={trimmed} />
        ))}
        <FoundationsCol query={trimmed} />
      </div>

      {/* footer links */}
      <div style={{ marginTop: '1.5rem', display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
        <Link
          to="/dimat"
          style={{
            padding: '.45rem 1rem',
            fontSize: '.85rem',
            color: '#38bdf8',
            textDecoration: 'none',
            border: '1px solid #38bdf855',
            borderRadius: '.35rem',
          }}
        >
          ← Diszkrét matematika fő index
        </Link>
        <Link
          to="/ila"
          style={{
            padding: '.45rem 1rem',
            fontSize: '.85rem',
            color: '#10b981',
            textDecoration: 'none',
            border: '1px solid #10b98155',
            borderRadius: '.35rem',
          }}
        >
          ILA fejezetek
        </Link>
      </div>

      {/* responsive grid override */}
      <style>{`
        .ts-columns {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1rem;
        }
        @media (max-width: 880px) {
          .ts-columns { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 520px) {
          .ts-columns { grid-template-columns: 1fr !important; }
        }
      `}</style>

    </div>
  );
}
