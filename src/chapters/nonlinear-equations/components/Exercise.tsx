import { useState, type ReactNode } from 'react'

interface ExerciseProps {
  number: string | number
  children: ReactNode
}

interface PartProps {
  children: ReactNode
}

/**
 * Usage in MDX:
 *
 *   <Exercise number="3">
 *     <Problem>State the recursion and prove convergence...</Problem>
 *     <Solution>Apply Theorem 2.13 with c = 1/2...</Solution>
 *   </Exercise>
 *
 * The solution is hidden by default and reveals on click.
 */
export function Exercise({ number, children }: ExerciseProps) {
  return (
    <section className="my-4 rounded-md border border-ink-200 dark:border-ink-800 px-5 py-3">
      <div className="text-xs uppercase tracking-wider font-semibold text-ink-600 dark:text-ink-400 mb-2">
        Exercise {number}
      </div>
      {children}
    </section>
  )
}

export function Problem({ children }: PartProps) {
  return <div className="exercise-problem leading-7">{children}</div>
}

export function Solution({ children }: PartProps) {
  const [open, setOpen] = useState(false)
  return (
    <div className="mt-3">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded bg-ink-100 dark:bg-ink-800 px-3 py-1 text-sm font-medium hover:bg-ink-200 dark:hover:bg-ink-700"
        aria-expanded={open}
      >
        <span>{open ? '▾' : '▸'}</span>
        {open ? 'Hide solution' : 'Show solution'}
      </button>
      {open && (
        <div className="mt-3 border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 px-4 py-3 rounded-r-md leading-7">
          {children}
        </div>
      )}
    </div>
  )
}
