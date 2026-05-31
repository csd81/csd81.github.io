import { useMemo, useState } from 'react'
import { useLang } from '../../../../shared/providers/LanguageProvider'
import { MarkdownView } from '../../../../shared/ui/MarkdownView'
import type { Bi } from '../../content/sections'

export interface GlossaryEntry { term: Bi; def: Bi }
/** A flashcard's question/answer may be a plain string (legacy, EN) or bilingual. */
export interface Flashcard { q: Bi | string; a: Bi | string }

/** Tap-to-reveal bilingual glossary deck. */
export function GlossaryDeck({ entries }: { entries: GlossaryEntry[] }) {
  const { lang } = useLang()
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="my-6 not-prose grid gap-2">
      {entries.map((e, i) => {
        const isOpen = open === i
        return (
          <button
            key={i}
            onClick={() => setOpen(isOpen ? null : i)}
            className="text-left rounded-lg border border-ink-200 dark:border-ink-800 bg-ink-50 dark:bg-ink-900 px-4 py-3 hover:border-[var(--brand-500)] transition-colors"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-semibold">
                <MarkdownView markdown={e.term[lang]} />
              </span>
              <span className="text-ink-400 select-none">{isOpen ? '−' : '+'}</span>
            </div>
            {isOpen && (
              <div className="mt-2 text-sm text-ink-700 dark:text-ink-300">
                <MarkdownView markdown={e.def[lang]} />
              </div>
            )}
          </button>
        )
      })}
    </div>
  )
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
} as const

const seq = (n: number) => Array.from({ length: n }, (_, i) => i)
function shuffled(n: number): number[] {
  const a = seq(n)
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/** Flip-card self-test deck (cards in English). */
export function FlashcardDeck({ cards }: { cards: Flashcard[] }) {
  const { lang } = useLang()
  const tr = (k: keyof typeof T) => T[k][lang]
  const [order, setOrder] = useState<number[]>(() => seq(cards.length))
  const [pos, setPos] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const card = useMemo(() => cards[order[pos]], [cards, order, pos])
  const pick = (v: Bi | string) => (typeof v === 'string' ? v : v[lang])

  const go = (delta: number) => {
    setFlipped(false)
    setPos((p) => (p + delta + cards.length) % cards.length)
  }

  return (
    <div className="my-6 not-prose max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-sm rounded bg-ink-100 dark:bg-ink-800 px-2 py-1">
          {pos + 1} / {cards.length}
        </span>
        <div className="flex gap-2">
          <button
            className="rounded border border-ink-300 dark:border-ink-700 px-3 py-1.5 text-sm hover:border-[var(--brand-500)]"
            onClick={() => { setOrder(shuffled(cards.length)); setPos(0); setFlipped(false) }}
          >
            {tr('shuffle')}
          </button>
          <button
            className="rounded border border-ink-300 dark:border-ink-700 px-3 py-1.5 text-sm hover:border-[var(--brand-500)]"
            onClick={() => { setOrder(seq(cards.length)); setPos(0); setFlipped(false) }}
          >
            {tr('reset')}
          </button>
        </div>
      </div>

      <button
        onClick={() => setFlipped((f) => !f)}
        className="w-full min-h-[200px] text-left rounded-xl border border-ink-300 dark:border-ink-700 p-5 bg-ink-50 dark:bg-ink-900"
      >
        <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${flipped ? 'text-emerald-600 dark:text-emerald-400' : 'text-[var(--brand-500)]'}`}>
          {flipped ? tr('answer') : tr('question')}
        </div>
        <MarkdownView markdown={flipped ? pick(card.a) : pick(card.q)} />
      </button>

      <div className="flex items-center justify-between gap-3 mt-3">
        <button
          className="rounded border border-ink-300 dark:border-ink-700 px-3 py-1.5 text-sm hover:border-[var(--brand-500)]"
          onClick={() => go(-1)}
        >
          {tr('prev')}
        </button>
        <button
          className="flex-1 rounded bg-[var(--brand-500)] text-white px-3 py-1.5 text-sm font-medium"
          onClick={() => setFlipped((f) => !f)}
        >
          {flipped ? tr('showQuestion') : tr('showAnswer')}
        </button>
        <button
          className="rounded border border-ink-300 dark:border-ink-700 px-3 py-1.5 text-sm hover:border-[var(--brand-500)]"
          onClick={() => go(1)}
        >
          {tr('next')}
        </button>
      </div>
    </div>
  )
}
