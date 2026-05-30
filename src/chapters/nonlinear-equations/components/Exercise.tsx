import { useState, type ReactNode } from 'react'
import { useLang } from '../../../shared/providers/LanguageProvider'

interface ExerciseProps {
  number: string | number
  children: ReactNode
}

interface PartProps {
  children: ReactNode
}

/**
 * Collapsible worked exercise. Bilingual chrome (the "Exercise" label and the
 * show/hide button) follows the shared language toggle; the problem/solution
 * bodies are passed in already in the active language by the section renderer.
 */
export function Exercise({ number, children }: ExerciseProps) {
  const { lang } = useLang()
  return (
    <section className="my-4 rounded-md border border-ink-200 dark:border-ink-800 px-5 py-3 not-prose">
      <div className="text-xs uppercase tracking-wider font-semibold text-ink-600 dark:text-ink-400 mb-2">
        {lang === 'hu' ? 'Feladat' : 'Exercise'} {number}
      </div>
      {children}
    </section>
  )
}

export function Problem({ children }: PartProps) {
  return <div className="exercise-problem leading-7">{children}</div>
}

export function Solution({ children }: PartProps) {
  const { lang } = useLang()
  const [open, setOpen] = useState(false)
  const show = lang === 'hu' ? 'Megoldás' : 'Show solution'
  const hide = lang === 'hu' ? 'Elrejt' : 'Hide solution'
  return (
    <div className="mt-3">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded bg-ink-100 dark:bg-ink-800 px-3 py-1 text-sm font-medium hover:bg-ink-200 dark:hover:bg-ink-700"
        aria-expanded={open}
      >
        <span>{open ? '▾' : '▸'}</span>
        {open ? hide : show}
      </button>
      {open && (
        <div className="mt-3 border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 px-4 py-3 rounded-r-md leading-7">
          {children}
        </div>
      )}
    </div>
  )
}
