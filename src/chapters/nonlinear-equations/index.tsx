import { Link, Navigate, NavLink, Route, Routes, useParams } from 'react-router-dom';
import { useLang } from '../../shared/providers/LanguageProvider';
import { MarkdownView } from '../../shared/ui/MarkdownView';
import { sections, type Section, type Block } from './content/sections';
import { WIDGETS } from './components/widgets';
import { TheoremBox } from './components/TheoremBox';
import { Exercise, Problem, Solution } from './components/Exercise';
import './chapter.css';

function Sidebar() {
  const { lang } = useLang();
  return (
    <nav className="ne-sidebar">
      {sections.map((s) => (
        <NavLink
          key={s.slug}
          to={`/nonlinear-equations/chapter/${s.slug}`}
          className={({ isActive }) => `ne-sidelink${isActive ? ' is-active' : ''}`}
        >
          <span className="ne-sidelink__no">§{s.section}</span>
          {s.title[lang]}
        </NavLink>
      ))}
    </nav>
  );
}

function Contents() {
  const { lang } = useLang();
  return (
    <div className="ne-contents">
      <p className="ne-kicker">{lang === 'hu' ? 'Numerikus analízis' : 'Numerical Analysis'}</p>
      <h1>
        {lang === 'hu'
          ? '2. fejezet — Nemlineáris egyenletek és rendszerek'
          : 'Chapter 2 — Nonlinear Equations & Systems'}
      </h1>
      <p className="muted">
        {lang === 'hu'
          ? 'Olvasd el a tételt és a kidolgozott példát, majd játssz ugyanazzal az iterációval egy élő widgetben — minden alfejezethez tartozik interaktív eszköz.'
          : 'Read the theorem and worked example, then play with the same iteration in a live widget — every subsection has its own interactive tool.'}
      </p>
      <div className="ne-grid">
        {sections.map((s) => (
          <Link key={s.slug} to={`/nonlinear-equations/chapter/${s.slug}`} className="ne-card">
            <div className="ne-card__no">§{s.section}</div>
            <div className="ne-card__title">{s.title[lang]}</div>
            <p className="ne-card__sum">{s.summary[lang]}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  const { lang } = useLang();
  switch (block.kind) {
    case 'md':
      return <MarkdownView markdown={block.text[lang]} />;
    case 'theorem':
      return (
        <TheoremBox kind={block.tkind} number={block.number} title={block.title?.[lang]}>
          <MarkdownView markdown={block.text[lang]} />
        </TheoremBox>
      );
    case 'widget': {
      const Widget = WIDGETS[block.name];
      return <Widget />;
    }
    case 'exercise':
      return (
        <Exercise number={block.number}>
          <Problem>
            <MarkdownView markdown={block.problem[lang]} />
          </Problem>
          <Solution>
            <MarkdownView markdown={block.solution[lang]} />
          </Solution>
        </Exercise>
      );
  }
}

function SectionPage() {
  const { lang } = useLang();
  const { slug } = useParams();
  const idx = sections.findIndex((s) => s.slug === slug);
  if (idx === -1) return <Navigate to="/nonlinear-equations" replace />;
  const s: Section = sections[idx];
  const prev = sections[idx - 1];
  const next = sections[idx + 1];
  return (
    <article className="ne-article">
      <p className="ne-kicker">§{s.section}</p>
      <h1>{s.title[lang]}</h1>
      {s.blocks.map((b, i) => (
        <BlockView key={i} block={b} />
      ))}
      <div className="ne-pager">
        {prev ? (
          <Link to={`/nonlinear-equations/chapter/${prev.slug}`}>← {prev.title[lang]}</Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/nonlinear-equations/chapter/${next.slug}`}>{next.title[lang]} →</Link>
        ) : (
          <span />
        )}
      </div>
    </article>
  );
}

/**
 * Chapter 2 — Nonlinear Equations. Bilingual (HU/EN) structured content from
 * content/sections.ts, rendered through the shared MarkdownView with KaTeX; each
 * section embeds a bespoke interactive widget. Routes are descendant routes
 * under `/nonlinear-equations/*`.
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
