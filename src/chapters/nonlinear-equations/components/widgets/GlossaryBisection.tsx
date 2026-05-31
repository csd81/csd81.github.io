import { GlossaryDeck } from './decks'
import { BIS_GLOSSARY } from '../../content/bisection-extras'

/** §2.3 glossary (bilingual, tap-to-reveal). */
export function GlossaryBisection() {
  return <GlossaryDeck entries={BIS_GLOSSARY} />
}
