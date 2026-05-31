import { useMemo, useState } from "react";
import { useLang } from "../contexts/LanguageContext.jsx";
import MarkdownView from "./MarkdownView.jsx";
import { GLOSSARIES, FLASHCARDS } from "../content/decks.js";

const T = {
  glossary: { en: "Glossary", hu: "Fogalomtár" },
  flashcards: { en: "Flashcards", hu: "Tanulókártyák" },
  shuffle: { en: "🔀 Shuffle", hu: "🔀 Keverés" },
  reset: { en: "Reset", hu: "Eredeti" },
  question: { en: "Question", hu: "Kérdés" },
  answer: { en: "Answer", hu: "Válasz" },
  prev: { en: "‹ Prev", hu: "‹ Előző" },
  next: { en: "Next ›", hu: "Következő ›" },
  showAnswer: { en: "Show answer", hu: "Válasz" },
  showQuestion: { en: "Show question", hu: "Kérdés" },
};

export function GlossaryDeck({ deck }) {
  const { lang } = useLang();
  const entries = GLOSSARIES[deck] || [];
  const [open, setOpen] = useState(null);
  if (!entries.length) return null;
  return (
    <div className="deck">
      <h3>{T.glossary[lang]}</h3>
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

const seq = (n) => Array.from({ length: n }, (_, i) => i);
function shuffled(n) {
  const a = seq(n);
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

export function FlashcardDeck({ deck }) {
  const { lang } = useLang();
  const cards = FLASHCARDS[deck] || [];
  const [order, setOrder] = useState(() => seq(cards.length));
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = useMemo(() => cards[order[pos]], [cards, order, pos]);
  if (!cards.length) return null;
  const go = (d) => { setFlipped(false); setPos((p) => (p + d + cards.length) % cards.length); };
  return (
    <div className="deck">
      <div className="deck__bar">
        <h3>{T.flashcards[lang]}</h3>
        <div className="deck__ctrls">
          <span className="deck__count">{pos + 1} / {cards.length}</span>
          <button className="btn" onClick={() => { setOrder(shuffled(cards.length)); setPos(0); setFlipped(false); }}>{T.shuffle[lang]}</button>
          <button className="btn" onClick={() => { setOrder(seq(cards.length)); setPos(0); setFlipped(false); }}>{T.reset[lang]}</button>
        </div>
      </div>
      <button className="deck-card" onClick={() => setFlipped((f) => !f)}>
        <div className="deck-card__tag">{flipped ? T.answer[lang] : T.question[lang]}</div>
        <MarkdownView markdown={flipped ? card.a : card.q} />
      </button>
      <div className="deck__nav">
        <button className="btn" onClick={() => go(-1)}>{T.prev[lang]}</button>
        <button className="btn active" onClick={() => setFlipped((f) => !f)}>{flipped ? T.showQuestion[lang] : T.showAnswer[lang]}</button>
        <button className="btn" onClick={() => go(1)}>{T.next[lang]}</button>
      </div>
    </div>
  );
}
