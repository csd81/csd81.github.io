import { useLang } from '../../../shared/providers/LanguageProvider';
import { MarkdownView } from '../../../shared/ui/MarkdownView';
import { isComplete } from '../state/progress.js';
import { Rich } from './Rich';
import { DemoMount } from './DemoMount';
import { LsQuiz } from './LsQuiz';
import { GlossaryDeck, FlashcardDeck } from './LsDecks';
import { CodeTabs } from '../../../shared/ui/CodeTabs';
import { getSectionCode } from '../content/code';
import { Quiz } from '../../../shared/ui/Quiz';
import { getQuiz } from '../content/quiz';

/* The content blocks come from untyped .js modules; treat them loosely. */
type Bi = { en: string; hu: string };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Block = any;
interface Section {
  id: string;
  title: Bi;
  blocks: Block[];
}

function TableBlock({ block }: { block: Block }) {
  const { t } = useLang();
  return (
    <figure className="data-table">
      {block.caption && (
        <figcaption>
          <Rich text={t(block.caption)} />
        </figcaption>
      )}
      <table>
        <thead>
          <tr>
            {block.headers.map((h: string, i: number) => (
              <th key={i}>
                <Rich text={h} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row: string[], r: number) => (
            <tr key={r}>
              {row.map((c, i) => (
                <td key={i}>
                  <Rich text={c} />
                </td>
              ))}
            </tr>
          ))}
          {block.totals && (
            <tr className="totals">
              {block.totals.map((c: string, i: number) => (
                <td key={i}>
                  <Rich text={c} />
                </td>
              ))}
            </tr>
          )}
        </tbody>
      </table>
    </figure>
  );
}

function ExercisesBlock({ block }: { block: Block }) {
  const { t, lang } = useLang();
  const summary = lang === 'hu' ? 'Megoldás' : 'Show solution';
  return (
    <div className="exercises">
      <h4>{t(block.label)}</h4>
      <p>
        <Rich text={t(block.intro)} />
      </p>
      <div className="exercise-grid">
        {block.items.map((item: Block, i: number) => (
          <div className="exercise-card" key={i}>
            <div className="exercise-tag">
              <Rich text={item.tag} />
            </div>
            <table className="mini">
              <tbody>
                <tr>
                  <th>
                    <Rich text={item.headers[0]} />
                  </th>
                  {item.cols.map(([x]: [string, string], j: number) => (
                    <td key={j}>{x}</td>
                  ))}
                </tr>
                <tr>
                  <th>
                    <Rich text={item.headers[1]} />
                  </th>
                  {item.cols.map(([, y]: [string, string], j: number) => (
                    <td key={j}>{y}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
      {block.solution && (
        <div className="prose">
          <MarkdownView
            markdown={`<details class="reveal-solution"><summary>${summary}</summary>\n\n${block.solution}\n\n</details>`}
          />
        </div>
      )}
    </div>
  );
}

function BlockView({ block, sectionId }: { block: Block; sectionId: string }) {
  const { t } = useLang();
  switch (block.type) {
    case 'text':
      return (
        <div className="prose">
          <MarkdownView markdown={t(block)} />
        </div>
      );
    case 'math':
      // Newlines force remark-math to emit a *display* math node; without them
      // `$$…$$` parses as inline math, where display-only constructs like
      // `\tag{}` make KaTeX error out and dump the raw LaTeX on the page.
      return (
        <div className="math-display">
          <MarkdownView markdown={`$$\n${block.tex}\n$$`} />
        </div>
      );
    case 'callout':
      return (
        <div className={`callout ${block.variant || 'note'}`}>
          <MarkdownView markdown={t(block)} />
        </div>
      );
    case 'theorem':
    case 'example':
      return (
        <div className={`box ${block.type}`}>
          <div className="box-label">{t(block.label)}</div>
          <div className="box-body">
            <MarkdownView markdown={t(block)} />
          </div>
        </div>
      );
    case 'table':
      return <TableBlock block={block} />;
    case 'exercises':
      return <ExercisesBlock block={block} />;
    case 'demo':
      return <DemoMount component={block.component} caption={block.caption ? t(block.caption) : undefined} />;
    case 'quiz':
      return <LsQuiz refKey={block.ref} sectionId={sectionId} />;
    case 'glossary':
      return <GlossaryDeck deck={block.deck} />;
    case 'flashcards':
      return <FlashcardDeck deck={block.deck} />;
    default:
      return null;
  }
}

export function SectionView({ section }: { section: Section }) {
  const { t } = useLang();
  return (
    <article className="section" id={`sec-${section.id}`}>
      <h2 className="section-title">
        {t(section.title)}
        {isComplete(section.id) && <span className="done-badge">✓</span>}
      </h2>
      {section.blocks.map((b, i) => (
        <BlockView key={i} block={b} sectionId={section.id} />
      ))}
      {getSectionCode(section.id).map((c) => (
        <CodeTabs key={c.id} snippets={c.snippets} caption={c.caption} />
      ))}
      {getQuiz(section.id).length > 0 && <Quiz questions={getQuiz(section.id)} />}
    </article>
  );
}
