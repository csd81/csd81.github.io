import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MarkdownView from './MarkdownView';
import type { Lang } from '../i18n';
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

function useLang(): Lang {
  const { i18n } = useTranslation();
  return (i18n.language as Lang) === 'hu' ? 'hu' : 'en';
}

const btn =
  'rounded border border-slate-300 px-3 py-1.5 text-sm hover:border-brand-500 dark:border-slate-700';

/** Tap-to-reveal bilingual glossary for a chapter-7 lesson. */
export function GlossaryDeck({ slug }: { slug: string }) {
  const lang = useLang();
  const entries: GlossaryEntry[] = GLOSSARIES[slug] ?? [];
  const [open, setOpen] = useState<number | null>(null);
  if (!entries.length) return null;
  return (
    <section className="card mt-6">
      <h3 className="mb-3 font-semibold text-brand-700 dark:text-brand-200">{T.glossary[lang]}</h3>
      <div className="grid gap-2">
        {entries.map((e, i) => {
          const isOpen = open === i;
          return (
            <button
              key={i}
              onClick={() => setOpen(isOpen ? null : i)}
              className="rounded-lg border border-slate-200 px-4 py-3 text-left hover:border-brand-500 dark:border-slate-700"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-semibold text-slate-800 dark:text-slate-100">
                  <MarkdownView markdown={e.term[lang]} />
                </span>
                <span className="text-slate-400">{isOpen ? '−' : '+'}</span>
              </div>
              {isOpen && (
                <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  <MarkdownView markdown={e.def[lang]} />
                </div>
              )}
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

/** Flip-card self-test deck for a chapter-7 lesson (cards in English). */
export function FlashcardDeck({ slug }: { slug: string }) {
  const lang = useLang();
  const cards: Flashcard[] = FLASHCARDS[slug] ?? [];
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
    <section className="card mt-6">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-semibold text-brand-700 dark:text-brand-200">{T.flashcards[lang]}</h3>
        <div className="flex items-center gap-2">
          <span className="rounded bg-slate-100 px-2 py-1 font-mono text-sm dark:bg-slate-800">
            {pos + 1} / {cards.length}
          </span>
          <button className={btn} onClick={() => { setOrder(shuffled(cards.length)); setPos(0); setFlipped(false); }}>{T.shuffle[lang]}</button>
          <button className={btn} onClick={() => { setOrder(seq(cards.length)); setPos(0); setFlipped(false); }}>{T.reset[lang]}</button>
        </div>
      </div>
      <button
        onClick={() => setFlipped((f) => !f)}
        className="min-h-[150px] w-full rounded-xl border border-slate-300 bg-slate-50 p-5 text-left dark:border-slate-700 dark:bg-slate-800"
      >
        <div className={`mb-2 text-xs font-bold uppercase tracking-widest ${flipped ? 'text-emerald-600 dark:text-emerald-400' : 'text-brand-600 dark:text-brand-300'}`}>
          {flipped ? T.answer[lang] : T.question[lang]}
        </div>
        <MarkdownView markdown={flipped ? card.a : card.q} />
      </button>
      <div className="mt-3 flex items-center justify-between gap-3">
        <button className={btn} onClick={() => go(-1)}>{T.prev[lang]}</button>
        <button className="flex-1 rounded bg-brand-600 px-3 py-1.5 text-sm font-medium text-white" onClick={() => setFlipped((f) => !f)}>
          {flipped ? T.showQuestion[lang] : T.showAnswer[lang]}
        </button>
        <button className={btn} onClick={() => go(1)}>{T.next[lang]}</button>
      </div>
    </section>
  );
}
