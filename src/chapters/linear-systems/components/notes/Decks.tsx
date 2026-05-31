import { useMemo, useState } from 'react';
import { useI18n } from '../../app/LanguageContext';
import { MarkdownView } from '../../../../shared/ui/MarkdownView';
import type { GlossaryEntry, Flashcard } from '../../content/decks';

/** Tap-to-reveal bilingual glossary deck (chapter-3 styling). */
export function GlossaryDeck({ entries }: { entries: GlossaryEntry[] }) {
  const { lang } = useI18n();
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="stack" style={{ gap: 8 }}>
      {entries.map((e, i) => {
        const isOpen = open === i;
        return (
          <button
            key={i}
            className="theorem-card"
            style={{ textAlign: 'left', cursor: 'pointer', width: '100%' }}
            onClick={() => setOpen(isOpen ? null : i)}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
              <span className="label" style={{ margin: 0 }}>{e.term[lang]}</span>
              <span className="muted">{isOpen ? '−' : '+'}</span>
            </div>
            {isOpen && (
              <div style={{ marginTop: 8 }}>
                <MarkdownView markdown={e.def[lang]} />
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}

const T = {
  shuffle: { en: '🔀 Shuffle', hu: '🔀 Keverés' },
  reset: { en: 'Reset order', hu: 'Eredeti sorrend' },
  question: { en: 'Question', hu: 'Kérdés' },
  answer: { en: 'Answer', hu: 'Válasz' },
  prev: { en: '‹ Prev', hu: '‹ Előző' },
  next: { en: 'Next ›', hu: 'Következő ›' },
  showAnswer: { en: 'Show answer', hu: 'Válasz mutatása' },
  showQuestion: { en: 'Show question', hu: 'Kérdés mutatása' },
} as const;

const seq = (n: number) => Array.from({ length: n }, (_, i) => i);
function shuffled(n: number): number[] {
  const a = seq(n);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Flip-card self-test deck (cards in English; chapter-3 styling). */
export function FlashcardDeck({ cards }: { cards: Flashcard[] }) {
  const { lang } = useI18n();
  const tr = (k: keyof typeof T) => T[k][lang];
  const [order, setOrder] = useState<number[]>(() => seq(cards.length));
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = useMemo(() => cards[order[pos]], [cards, order, pos]);

  const go = (delta: number) => {
    setFlipped(false);
    setPos((p) => (p + delta + cards.length) % cards.length);
  };

  return (
    <div className="stack" style={{ gap: 10, maxWidth: 640 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="section-eyebrow">{pos + 1} / {cards.length}</span>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn" onClick={() => { setOrder(shuffled(cards.length)); setPos(0); setFlipped(false); }}>
            {tr('shuffle')}
          </button>
          <button className="btn" onClick={() => { setOrder(seq(cards.length)); setPos(0); setFlipped(false); }}>
            {tr('reset')}
          </button>
        </div>
      </div>

      <button
        className="theorem-card"
        style={{ textAlign: 'left', cursor: 'pointer', minHeight: 160, width: '100%' }}
        onClick={() => setFlipped((f) => !f)}
      >
        <span className="label" style={{ margin: 0 }}>{flipped ? tr('answer') : tr('question')}</span>
        <div style={{ marginTop: 8 }}>
          <MarkdownView markdown={flipped ? card.a : card.q} />
        </div>
      </button>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
        <button className="btn" onClick={() => go(-1)}>{tr('prev')}</button>
        <button className="btn" style={{ flex: 1 }} onClick={() => setFlipped((f) => !f)}>
          {flipped ? tr('showQuestion') : tr('showAnswer')}
        </button>
        <button className="btn" onClick={() => go(1)}>{tr('next')}</button>
      </div>
    </div>
  );
}
