import { useMemo, useState } from "react";
import { useLang } from "../contexts/LanguageContext";
import { MarkdownView } from "../../../shared/ui/MarkdownView";
import { GLOSSARIES, FLASHCARDS, type GlossaryEntry, type Flashcard } from "../content/decks";

/** Tap-to-reveal bilingual glossary for a minimization section. */
export function GlossaryDeck({ deck }: { deck: string }) {
  const { t, lang } = useLang();
  const entries: GlossaryEntry[] = GLOSSARIES[deck] ?? [];
  const [open, setOpen] = useState<number | null>(null);
  if (!entries.length) return null;
  return (
    <div className="deck">
      <h3>{t({ en: "Glossary", hu: "Fogalomtár" })}</h3>
      <div className="deck-list">
        {entries.map((e, i) => {
          const isOpen = open === i;
          return (
            <button key={i} className="deck-item" onClick={() => setOpen(isOpen ? null : i)}>
              <div className="deck-item__head">
                <strong><MarkdownView markdown={e.term[lang]} /></strong>
                <span>{isOpen ? "−" : "+"}</span>
              </div>
              {isOpen && <div className="deck-item__body"><MarkdownView markdown={e.def[lang]} /></div>}
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

/** Flip-card self-test deck for a minimization section (bilingual cards). */
export function FlashcardDeck({ deck }: { deck: string }) {
  const { t, lang } = useLang();
  const cards: Flashcard[] = FLASHCARDS[deck] ?? [];
  const [order, setOrder] = useState<number[]>(() => seq(cards.length));
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = useMemo(() => cards[order[pos]], [cards, order, pos]);
  const pick = (value: Flashcard['q']) => (typeof value === 'string' ? value : value[lang]);
  if (!cards.length) return null;

  const go = (delta: number) => {
    setFlipped(false);
    setPos((p) => (p + delta + cards.length) % cards.length);
  };

  return (
    <div className="deck">
      <div className="deck__bar">
        <h3>{t({ en: "Flashcards", hu: "Tanulókártyák" })}</h3>
        <div className="deck__ctrls">
          <span className="deck__count">{pos + 1} / {cards.length}</span>
          <button className="btn" onClick={() => { setOrder(shuffled(cards.length)); setPos(0); setFlipped(false); }}>{t({ en: "🔀 Shuffle", hu: "🔀 Keverés" })}</button>
          <button className="btn" onClick={() => { setOrder(seq(cards.length)); setPos(0); setFlipped(false); }}>{t({ en: "Reset", hu: "Eredeti" })}</button>
        </div>
      </div>
      <button className="deck-card" onClick={() => setFlipped((f) => !f)}>
        <div className="deck-card__tag">{flipped ? t({ en: "Answer", hu: "Válasz" }) : t({ en: "Question", hu: "Kérdés" })}</div>
        <MarkdownView markdown={flipped ? pick(card.a) : pick(card.q)} />
      </button>
      <div className="deck__nav">
        <button className="btn" onClick={() => go(-1)}>{t({ en: "‹ Prev", hu: "‹ Előző" })}</button>
        <button className="btn btn--primary" onClick={() => setFlipped((f) => !f)}>
          {flipped ? t({ en: "Show question", hu: "Kérdés" }) : t({ en: "Show answer", hu: "Válasz" })}
        </button>
        <button className="btn" onClick={() => go(1)}>{t({ en: "Next ›", hu: "Következő ›" })}</button>
      </div>
    </div>
  );
}
