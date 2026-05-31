import type { ReactNode } from 'react'
import { Scrolly } from '../../../shared/scrolly'
import type { ScrollyStep } from '../../../shared/scrolly'
import { useLang } from '../context/LangContext'
import { MarkdownView } from '../../../shared/ui/MarkdownView'
import { CodeTabs } from '../../../shared/ui/CodeTabs'
import { getTheory } from '../content/theory'
import { getSectionCode } from '../content/code'

/**
 * Phase-B scrollytelling wrapper for a chapter-1 section. Keeps the chapter's
 * own section chrome (`.section-tag` / `h2` / `.lead`) but adds the
 * `scrolly-page` class so the shared `.scrolly`/`.step` layout applies, then
 * renders the section's existing widget as a sticky graphic beside scripted
 * narrative steps.
 */
export function ScrollySection({
  id,
  tag,
  title,
  lead,
  steps,
  graphic,
  children,
}: {
  id: string
  tag?: string
  title?: string
  lead?: string
  steps: ScrollyStep[]
  graphic: (active: number) => ReactNode
  children?: ReactNode
}) {
  const { lang } = useLang()
  const theory = getTheory(id, lang)
  const code = getSectionCode(id)
  return (
    <section className="section scrolly-page" id={id}>
      {tag && <span className="section-tag">{tag}</span>}
      {title && <h2>{title}</h2>}
      {lead && <p className="lead">{lead}</p>}
      <Scrolly steps={steps} graphic={graphic} />
      {children}
      {code.map((c) => (
        <CodeTabs key={c.id} snippets={c.snippets} caption={c.caption} />
      ))}
      {theory && (
        <details className="section__theory" open>
          <summary>{lang === 'hu' ? 'Teljes elmélet' : 'Full theory'}</summary>
          <MarkdownView markdown={theory} />
        </details>
      )}
    </section>
  )
}

const KICKERS = {
  setup: { en: 'Setup', hu: 'Felállás' },
  idea: { en: 'The idea', hu: 'Az ötlet' },
  formula: { en: 'Formula', hu: 'Képlet' },
  insight: { en: 'Insight', hu: 'Tanulság' },
  explore: { en: 'Explore', hu: 'Próbáld ki' },
  warn: { en: 'Watch out', hu: 'Vigyázat' },
} as const

/** Returns a bilingual step kicker for a fixed set of narrative roles. */
export function useKick() {
  const { lang } = useLang()
  return (k: keyof typeof KICKERS) => KICKERS[k][lang]
}
