import { useMemo, useState } from 'react';
import { useLang } from '../../../shared/providers/LanguageProvider';
import { MarkdownView } from '../../../shared/ui/MarkdownView';
import { GLOSSARIES, FLASHCARDS } from '../content/decks.js';

interface GlossaryEntry {
  term: { en: string; hu: string };
  def: { en: string; hu: string };
}
interface Flashcard {
  q: string | { en: string; hu: string };
  a: string | { en: string; hu: string };
}

const T = {
  glossary: { en: 'Glossary', hu: 'Fogalomtár' },
  flashcards: { en: 'Flashcards', hu: 'Tanulókártyák' },
  shuffle: { en: '🔀 Shuffle', hu: '🔀 Keverés' },
  reset: { en: 'Reset', hu: 'Eredeti' },
  question: { en: 'Question', hu: 'Kérdés' },
  answer: { en: 'Answer', hu: 'Válasz' },
  prev: { en: '‹ Prev', hu: '‹ Előző' },
  next: { en: 'Next ›', hu: 'Következő ›' },
  showAnswer: { en: 'Show answer', hu: 'Válasz' },
  showQuestion: { en: 'Show question', hu: 'Kérdés' },
} as const;

export function GlossaryDeck({ deck }: { deck: string }) {
  const { t, lang } = useLang();
  const entries = ((GLOSSARIES as Record<string, GlossaryEntry[]>)[deck] ?? []);
  const [open, setOpen] = useState<number | null>(null);
  if (!entries.length) return null;
  return (
    <div className="deck glossary-deck">
      <h4>{t(T.glossary)}</h4>
      <div className="deck-list">
        {entries.map((e, i) => {
          const isOpen = open === i;
          return (
            <button key={i} className="deck-item" onClick={() => setOpen(isOpen ? null : i)}>
              <div className="deck-item__head">
                <strong>
                  <MarkdownView markdown={e.term[lang]} />
                </strong>
                <span>{isOpen ? '−' : '+'}</span>
              </div>
              {isOpen && (
                <div className="deck-item__body">
                  <MarkdownView markdown={e.def[lang]} />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

const seq = (n: number) => Array.from({ length: n }, (_, i) => i);
function shuffled(n: number): number[] {
  const a = seq(n);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function FlashcardDeck({ deck }: { deck: string }) {
  const { t, lang } = useLang();
  const cards = ((FLASHCARDS as Record<string, Flashcard[]>)[deck] ?? []);
  const [order, setOrder] = useState<number[]>(() => seq(cards.length));
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = useMemo(() => cards[order[pos]], [cards, order, pos]);
  const pick = (value: Flashcard['q']) => (typeof value === 'string' ? value : value[lang]);
  if (!cards.length) return null;
  const go = (d: number) => {
    setFlipped(false);
    setPos((p) => (p + d + cards.length) % cards.length);
  };
  return (
    <div className="deck flashcard-deck">
      <div className="deck__bar">
        <h4>{t(T.flashcards)}</h4>
        <div className="deck__ctrls">
          <span className="deck__count">
            {pos + 1} / {cards.length}
          </span>
          <button className="btn" onClick={() => { setOrder(shuffled(cards.length)); setPos(0); setFlipped(false); }}>{t(T.shuffle)}</button>
          <button className="btn" onClick={() => { setOrder(seq(cards.length)); setPos(0); setFlipped(false); }}>{t(T.reset)}</button>
        </div>
      </div>
      <button className="deck-card" onClick={() => setFlipped((f) => !f)}>
        <div className="deck-card__tag">{flipped ? t(T.answer) : t(T.question)}</div>
        <MarkdownView markdown={flipped ? pick(card.a) : pick(card.q)} />
      </button>
      <div className="deck__nav">
        <button className="btn" onClick={() => go(-1)}>{t(T.prev)}</button>
        <button className="btn btn--primary" onClick={() => setFlipped((f) => !f)}>
          {flipped ? t(T.showQuestion) : t(T.showAnswer)}
        </button>
        <button className="btn" onClick={() => go(1)}>{t(T.next)}</button>
      </div>
    </div>
  );
}
