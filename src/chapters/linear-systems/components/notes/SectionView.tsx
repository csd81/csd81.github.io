import { useI18n } from '../../app/LanguageContext';
import type { Block, Section } from '../../content/sections';
import { Tex } from '../math/Tex';
import { GLOSSARIES, FLASHCARDS } from '../../content/decks';
import { GlossaryDeck, FlashcardDeck } from './Decks';
import { Quiz } from '../../../../shared/ui/Quiz';
import { getQuiz } from '../../content/quiz';

function BlockView({ block }: { block: Block }) {
  const { pick, t } = useI18n();
  switch (block.kind) {
    case 'p':
      return <p>{pick(block.text)}</p>;
    case 'math':
      return <Tex tex={block.tex} block />;
    case 'theorem':
      return (
        <div className="theorem-card stack" style={{ gap: 6 }}>
          <span className="label">
            {t('common.theorem')} · {pick(block.label)}
          </span>
          <p style={{ margin: 0 }}>{pick(block.text)}</p>
          {block.tex && <Tex tex={block.tex} block />}
        </div>
      );
    case 'algorithm':
      return (
        <div className="algo-card">
          <span className="section-eyebrow">
            {t('common.algorithm')} · {pick(block.title)}
          </span>
          <pre>{block.lines.join('\n')}</pre>
        </div>
      );
    case 'lab':
      return (
        <button
          className="btn"
          onClick={() => document.getElementById('lab')?.scrollIntoView({ behavior: 'smooth' })}
        >
          {pick(block.label)} →
        </button>
      );
    case 'glossary':
      return <GlossaryDeck entries={GLOSSARIES[block.deck] ?? []} />;
    case 'flashcards':
      return <FlashcardDeck cards={FLASHCARDS[block.deck] ?? []} />;
  }
}

export function SectionView({ section }: { section: Section }) {
  const { pick } = useI18n();
  const quiz = getQuiz(section.id);
  return (
    <article className="stack">
      <div>
        <span className="section-eyebrow">§{section.number}</span>
        <h1 style={{ margin: '4px 0 6px' }}>{pick(section.title)}</h1>
        <p className="muted" style={{ marginTop: 0 }}>
          {pick(section.summary)}
        </p>
      </div>
      <div className="card stack">
        {section.blocks.map((block, i) => (
          <BlockView key={i} block={block} />
        ))}
      </div>
      {quiz.length > 0 && <Quiz questions={quiz} />}
    </article>
  );
}
