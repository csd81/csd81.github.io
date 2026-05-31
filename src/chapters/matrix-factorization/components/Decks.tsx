import { useMemo, useState } from "react";
import { useT } from "../i18n/useT";
import { RichText } from "./Math/Math";
import { GLOSSARIES, FLASHCARDS, type GlossaryEntry, type Flashcard } from "../content/decks";

/** Tap-to-reveal bilingual glossary for a chapter-5 section. */
export function GlossaryDeck({ deck }: { deck: string }) {
  const { tb, lang } = useT();
  const entries: GlossaryEntry[] = GLOSSARIES[deck] ?? [];
  const [open, setOpen] = useState<number | null>(null);
  if (!entries.length) return null;
  return (
    <section className="theory">
      <h2>{lang === "en" ? "Glossary" : "Fogalomtár"}</h2>
      <div className="block__body" style={{ display: "grid", gap: 8 }}>
        {entries.map((e, i) => {
          const isOpen = open === i;
          return (
            <button
              key={i}
              className={`callout callout--definition`}
              style={{ textAlign: "left", cursor: "pointer", width: "100%" }}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                <span className="callout__label" style={{ margin: 0 }}>
                  <RichText text={tb(e.term)} />
                </span>
                <span style={{ opacity: 0.5 }}>{isOpen ? "−" : "+"}</span>
              </div>
              {isOpen && (
                <p style={{ marginBottom: 0 }}>
                  <RichText text={tb(e.def)} />
                </p>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}

const T = {
  shuffle: { en: "🔀 Shuffle", hu: "🔀 Keverés" },
  reset: { en: "Reset order", hu: "Eredeti sorrend" },
  question: { en: "Question", hu: "Kérdés" },
  answer: { en: "Answer", hu: "Válasz" },
  prev: { en: "‹ Prev", hu: "‹ Előző" },
  next: { en: "Next ›", hu: "Következő ›" },
  showAnswer: { en: "Show answer", hu: "Válasz mutatása" },
  showQuestion: { en: "Show question", hu: "Kérdés mutatása" },
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

/** Flip-card self-test deck for a chapter-5 section (bilingual cards). */
export function FlashcardDeck({ deck }: { deck: string }) {
  const { lang } = useT();
  const cards: Flashcard[] = FLASHCARDS[deck] ?? [];
  const tr = (k: keyof typeof T) => T[k][lang];
  const [order, setOrder] = useState<number[]>(() => seq(cards.length));
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = useMemo(() => cards[order[pos]], [cards, order, pos]);
  const pick = (value: Flashcard["q"]) => (typeof value === "string" ? value : value[lang]);
  if (!cards.length) return null;

  const go = (delta: number) => {
    setFlipped(false);
    setPos((p) => (p + delta + cards.length) % cards.length);
  };

  return (
    <section className="theory">
      <h2 style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span>{lang === "en" ? "Flashcards" : "Tanulókártyák"}</span>
        <span style={{ display: "flex", gap: 8, fontSize: "0.8rem", fontWeight: 400 }}>
          <span style={{ opacity: 0.6 }}>{pos + 1} / {cards.length}</span>
          <button className="btn" onClick={() => { setOrder(shuffled(cards.length)); setPos(0); setFlipped(false); }}>{tr("shuffle")}</button>
          <button className="btn" onClick={() => { setOrder(seq(cards.length)); setPos(0); setFlipped(false); }}>{tr("reset")}</button>
        </span>
      </h2>
      <button
        className="callout callout--example"
        style={{ width: "100%", minHeight: 150, textAlign: "left", cursor: "pointer" }}
        onClick={() => setFlipped((f) => !f)}
      >
        <div className="callout__label">{flipped ? tr("answer") : tr("question")}</div>
        <p style={{ marginBottom: 0 }}>
          <RichText text={flipped ? pick(card.a) : pick(card.q)} />
        </p>
      </button>
      <div style={{ display: "flex", gap: 10, marginTop: 10, alignItems: "center" }}>
        <button className="btn" onClick={() => go(-1)}>{tr("prev")}</button>
        <button className="btn" style={{ flex: 1 }} onClick={() => setFlipped((f) => !f)}>
          {flipped ? tr("showQuestion") : tr("showAnswer")}
        </button>
        <button className="btn" onClick={() => go(1)}>{tr("next")}</button>
      </div>
    </section>
  );
}
