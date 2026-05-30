import type { ComponentType } from 'react';
import { Link, Navigate, NavLink, Route, Routes, useParams } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import { TheoremBox } from './components/TheoremBox';
import { Exercise, Problem, Solution } from './components/Exercise';
import { CobwebPlot } from './components/widgets/CobwebPlot';
import './chapter.css';

interface Frontmatter {
  title: string;
  order: number;
  summary: string;
}
interface MdxModule {
  default: ComponentType;
  frontmatter: Frontmatter;
}

// Bundle every MDX section; key e.g. './content/01-fixed-point.mdx'.
const modules = import.meta.glob<MdxModule>('./content/*.mdx', { eager: true });

interface Section {
  slug: string;
  order: number;
  title: string;
  summary: string;
  Component: ComponentType;
}

const SECTIONS: Section[] = Object.entries(modules)
  .map(([path, mod]) => ({
    slug: path.replace('./content/', '').replace('.mdx', ''),
    order: mod.frontmatter.order,
    title: mod.frontmatter.title,
    summary: mod.frontmatter.summary,
    Component: mod.default,
  }))
  .sort((a, b) => a.order - b.order);

// Widgets/components referenced (unqualified) inside the MDX bodies.
const mdxComponents = { TheoremBox, Exercise, Problem, Solution, CobwebPlot };

function label(order: number) {
  return order === 0 ? '§0' : `§2.${order}`;
}

function Sidebar() {
  return (
    <nav className="ne-sidebar">
      {SECTIONS.map((s) => (
        <NavLink
          key={s.slug}
          to={`/nonlinear-equations/chapter/${s.slug}`}
          className={({ isActive }) => `ne-sidelink${isActive ? ' is-active' : ''}`}
        >
          <span className="ne-sidelink__no">{label(s.order)}</span>
          {s.title}
        </NavLink>
      ))}
    </nav>
  );
}

function Contents() {
  return (
    <div className="ne-contents prose-lesson">
      <p className="ne-kicker">Numerical Analysis</p>
      <h1>Chapter 2 — Nonlinear Algebraic Equations &amp; Systems</h1>
      <p>
        An interactive companion to F. Hartung's Chapter 2. Read theorem, proof, and worked
        example, then play with the same iteration in a live widget.
      </p>
      <div className="ne-grid">
        {SECTIONS.map((s) => (
          <Link key={s.slug} to={`/nonlinear-equations/chapter/${s.slug}`} className="ne-card">
            <div className="ne-card__no">{label(s.order)}</div>
            <div className="ne-card__title">{s.title}</div>
            <p className="ne-card__sum">{s.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function SectionPage() {
  const { slug } = useParams();
  const idx = SECTIONS.findIndex((s) => s.slug === slug);
  if (idx === -1) return <Navigate to="/nonlinear-equations" replace />;
  const { Component } = SECTIONS[idx];
  const prev = SECTIONS[idx - 1];
  const next = SECTIONS[idx + 1];
  return (
    <article className="prose-lesson ne-article">
      <MDXProvider components={mdxComponents}>
        <Component />
      </MDXProvider>
      <div className="ne-pager">
        {prev ? (
          <Link to={`/nonlinear-equations/chapter/${prev.slug}`}>← {prev.title}</Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/nonlinear-equations/chapter/${next.slug}`}>{next.title} →</Link>
        ) : (
          <span />
        )}
      </div>
    </article>
  );
}

/**
 * Chapter 2 — Nonlinear Equations. Ported from the Astro site 02/site. The MDX
 * content is compiled by @mdx-js/rollup (configured in vite.config.ts with
 * remark-math + rehype-katex); the React widgets are supplied via MDXProvider.
 * Routes are descendant routes under `/nonlinear-equations/*`.
 */
export default function Chapter() {
  return (
    <div className="ne-layout">
      <Sidebar />
      <div className="ne-main">
        <Routes>
          <Route index element={<Contents />} />
          <Route path="chapter/:slug" element={<SectionPage />} />
          <Route path="*" element={<Navigate to="/nonlinear-equations" replace />} />
        </Routes>
      </div>
    </div>
  );
}
