import { useMemo, useState } from 'react';
import { useLang } from '../../../shared/providers/LanguageProvider';
import { MarkdownView } from '../../../shared/ui/MarkdownView';
import { GLOSSARIES, FLASHCARDS, type GlossaryEntry, type Flashcard } from '../content/decks';

const T = {
  glossary: { en: 'Glossary', hu: 'Fogalomtár' },
  flashcards: { en: 'Flashcards', hu: 'Tanulókártyák' },
  shuffle: { en: '🔀 Shuffle', hu: '🔀 Keverés' },
  reset: { en: 'Reset order', hu: 'Eredeti sorrend' },
  question: { en: 'Question', hu: 'Kérdés' },
  answer: { en: 'Answer', hu: 'Válasz' },
  prev: { en: '‹ Prev', hu: '‹ Előző' },
  next: { en: 'Next ›', hu: 'Következő ›' },
  showAnswer: { en: 'Show answer', hu: 'Válasz mutatása' },
  showQuestion: { en: 'Show question', hu: 'Kérdés mutatása' },
} as const;

/** Tap-to-reveal bilingual glossary for an interpolation method. */
export function GlossaryDeck({ deck }: { deck: string }) {
  const { lang } = useLang();
  const entries: GlossaryEntry[] = GLOSSARIES[deck] ?? [];
  const [open, setOpen] = useState<number | null>(null);
  if (!entries.length) return null;
  const L = lang as 'en' | 'hu';
  return (
    <section className="deck">
      <h3>{T.glossary[L]}</h3>
      <div className="deck-list">
        {entries.map((e, i) => {
          const isOpen = open === i;
          return (
            <button
              key={i}
              className="theorem-card deck-item"
              style={{ textAlign: 'left', cursor: 'pointer', width: '100%' }}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                <span style={{ fontWeight: 700 }}>
                  <MarkdownView markdown={e.term[L]} />
                </span>
                <span style={{ opacity: 0.5 }}>{isOpen ? '−' : '+'}</span>
              </div>
              {isOpen && <MarkdownView markdown={e.def[L]} />}
            </button>
          );
        })}
      </div>
    </section>
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

/** Flip-card self-test deck for an interpolation method (cards in English). */
export function FlashcardDeck({ deck }: { deck: string }) {
  const { lang } = useLang();
  const cards: Flashcard[] = FLASHCARDS[deck] ?? [];
  const L = lang as 'en' | 'hu';
  const [order, setOrder] = useState<number[]>(() => seq(cards.length));
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = useMemo(() => cards[order[pos]], [cards, order, pos]);
  if (!cards.length) return null;

  const go = (delta: number) => {
    setFlipped(false);
    setPos((p) => (p + delta + cards.length) % cards.length);
  };

  return (
    <section className="deck">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
        <h3 style={{ margin: 0 }}>{T.flashcards[L]}</h3>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span style={{ opacity: 0.6, fontSize: '0.85rem' }}>{pos + 1} / {cards.length}</span>
          <button className="btn" onClick={() => { setOrder(shuffled(cards.length)); setPos(0); setFlipped(false); }}>{T.shuffle[L]}</button>
          <button className="btn" onClick={() => { setOrder(seq(cards.length)); setPos(0); setFlipped(false); }}>{T.reset[L]}</button>
        </div>
      </div>
      <button
        className="theorem-card"
        style={{ width: '100%', minHeight: 150, textAlign: 'left', cursor: 'pointer', marginTop: 10 }}
        onClick={() => setFlipped((f) => !f)}
      >
        <div className="theorem-tag">{flipped ? T.answer[L] : T.question[L]}</div>
        <MarkdownView markdown={flipped ? card.a : card.q} />
      </button>
      <div style={{ display: 'flex', gap: 10, marginTop: 10, alignItems: 'center' }}>
        <button className="btn" onClick={() => go(-1)}>{T.prev[L]}</button>
        <button className="btn" style={{ flex: 1 }} onClick={() => setFlipped((f) => !f)}>
          {flipped ? T.showQuestion[L] : T.showAnswer[L]}
        </button>
        <button className="btn" onClick={() => go(1)}>{T.next[L]}</button>
      </div>
    </section>
  );
}
