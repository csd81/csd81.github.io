import { useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import { useLanguage } from '../context/LanguageContext';
import type { ModuleId } from '../context/ProgressContext';
import { GLOSSARIES, FLASHCARDS, type GlossaryEntry, type Flashcard } from '../content/decks';

function Md({ children }: { children: string }) {
  return (
    <div className="prose-math max-w-none">
      <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
        {children}
      </ReactMarkdown>
    </div>
  );
}

/** Tap-to-reveal bilingual glossary for a chapter-4 module. */
export function GlossaryDeck({ moduleId, title }: { moduleId: ModuleId; title: string }) {
  const { lang } = useLanguage();
  const entries: GlossaryEntry[] = GLOSSARIES[moduleId] ?? [];
  const [open, setOpen] = useState<number | null>(null);
  if (!entries.length) return null;
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
      <h3 className="mb-3 font-semibold text-brand-700 dark:text-brand-200">{title}</h3>
      <div className="space-y-2">
        {entries.map((e, i) => {
          const isOpen = open === i;
          return (
            <button
              key={i}
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-left hover:border-brand-500 dark:border-slate-700"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-semibold text-slate-800 dark:text-slate-100">
                  <Md>{e.term[lang]}</Md>
                </span>
                <span className="text-slate-400">{isOpen ? '−' : '+'}</span>
              </div>
              {isOpen && (
                <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  <Md>{e.def[lang]}</Md>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </section>
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

/** Flip-card self-test deck for a chapter-4 module (cards in English). */
export function FlashcardDeck({ moduleId, title }: { moduleId: ModuleId; title: string }) {
  const { lang } = useLanguage();
  const cards: Flashcard[] = FLASHCARDS[moduleId] ?? [];
  const tr = (k: keyof typeof T) => T[k][lang];
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
    <section className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-semibold text-brand-700 dark:text-brand-200">{title}</h3>
        <div className="flex items-center gap-2">
          <span className="rounded bg-slate-100 px-2 py-1 font-mono text-sm dark:bg-slate-800">
            {pos + 1} / {cards.length}
          </span>
          <button
            className="rounded border border-slate-300 px-3 py-1.5 text-sm hover:border-brand-500 dark:border-slate-700"
            onClick={() => { setOrder(shuffled(cards.length)); setPos(0); setFlipped(false); }}
          >
            {tr('shuffle')}
          </button>
          <button
            className="rounded border border-slate-300 px-3 py-1.5 text-sm hover:border-brand-500 dark:border-slate-700"
            onClick={() => { setOrder(seq(cards.length)); setPos(0); setFlipped(false); }}
          >
            {tr('reset')}
          </button>
        </div>
      </div>

      <button
        onClick={() => setFlipped((f) => !f)}
        className="min-h-[160px] w-full rounded-xl border border-slate-300 bg-slate-50 p-5 text-left dark:border-slate-700 dark:bg-slate-800"
      >
        <div className={`mb-2 text-xs font-bold uppercase tracking-widest ${flipped ? 'text-emerald-600 dark:text-emerald-400' : 'text-brand-600 dark:text-brand-300'}`}>
          {flipped ? tr('answer') : tr('question')}
        </div>
        <Md>{flipped ? card.a : card.q}</Md>
      </button>

      <div className="mt-3 flex items-center justify-between gap-3">
        <button
          className="rounded border border-slate-300 px-3 py-1.5 text-sm hover:border-brand-500 dark:border-slate-700"
          onClick={() => go(-1)}
        >
          {tr('prev')}
        </button>
        <button
          className="flex-1 rounded bg-brand-600 px-3 py-1.5 text-sm font-medium text-white"
          onClick={() => setFlipped((f) => !f)}
        >
          {flipped ? tr('showQuestion') : tr('showAnswer')}
        </button>
        <button
          className="rounded border border-slate-300 px-3 py-1.5 text-sm hover:border-brand-500 dark:border-slate-700"
          onClick={() => go(1)}
        >
          {tr('next')}
        </button>
      </div>
    </section>
  );
}
