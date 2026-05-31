import { GlossaryDeck } from './decks'
import { MV_GLOSSARY } from '../../content/multivariable-extras'

/** §2.9 multivariable-calculus glossary (bilingual, tap-to-reveal). */
export function GlossaryMV() {
  return <GlossaryDeck entries={MV_GLOSSARY} />
}
