import { GlossaryDeck } from './decks'
import { SECANT_GLOSSARY } from '../../content/secant-extras'

/** §2.6 secant-method glossary (bilingual, tap-to-reveal). */
export function GlossarySecant() {
  return <GlossaryDeck entries={SECANT_GLOSSARY} />
}
