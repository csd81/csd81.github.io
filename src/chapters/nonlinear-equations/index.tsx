import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLang } from '../../shared/providers/LanguageProvider';
import { MarkdownView } from '../../shared/ui/MarkdownView';
import { sections, type Block } from './content/sections';
import { WIDGETS } from './components/widgets';
import { TheoremBox } from './components/TheoremBox';
import { Exercise, Problem, Solution } from './components/Exercise';
import { InlineTeX } from './components/InlineTeX';
import { CodeTabs } from '../../shared/ui/CodeTabs';
import { getSectionCode } from './content/code';
import { Quiz } from '../../shared/ui/Quiz';
import { getQuiz } from './content/quiz';
import { ScrollyTopBar, type SectionMeta } from '../../shared/scrolly';
import './chapter.css';

const SECTIONS: SectionMeta[] = sections.map((s) => ({
  id: s.slug,
  no: s.section,
  title: s.title,
  blurb: s.summary,
}));

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

/**
 * Chapter 2 — Nonlinear Equations, as a single scrollytelling page: all 13
 * sections stacked (each: header + blocks/widgets), with the shared top-bar
 * (progress + § jump). The old sidebar + router are dropped; old deep-link
 * paths (/chapter/<slug>) scroll to the section.
 */
export default function Chapter() {
  const { lang } = useLang();
  const loc = useLocation();

  useEffect(() => {
    let id = decodeURIComponent(loc.hash.replace(/^#/, ''));
    if (!id) {
      const m = loc.pathname.match(/\/chapter\/([^/]+)/);
      if (m) id = m[1];
    }
    if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
  }, [loc.pathname, loc.hash]);

  const ss = { scrollMarginTop: 'calc(var(--nav-h) + var(--scrolly-topbar-h, 44px) + 8px)' };

  return (
    <div className="ch-nonlinear">
      <ScrollyTopBar sections={SECTIONS} />
      <div className="ne-main">
        <header className="ne-contents" style={ss} id="top">
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
        </header>

        {sections.map((s) => (
          <article key={s.slug} id={s.slug} className="ne-article" style={ss}>
            <p className="ne-kicker">§{s.section}</p>
            <h1>
              <InlineTeX text={s.title[lang]} />
            </h1>
            {s.blocks.map((b, i) => (
              <BlockView key={i} block={b} />
            ))}
            {getSectionCode(s.slug).map((c) => (
              <CodeTabs key={c.id} snippets={c.snippets} caption={c.caption} />
            ))}
            {getQuiz(s.slug).length > 0 && <Quiz questions={getQuiz(s.slug)} />}
          </article>
        ))}
      </div>
    </div>
  );
}
