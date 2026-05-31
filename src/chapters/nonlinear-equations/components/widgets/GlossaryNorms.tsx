import { GlossaryDeck } from './decks'
import { NORM_GLOSSARY } from '../../content/norms-extras'

/** §2.10 vector/matrix-norms glossary (bilingual, tap-to-reveal). */
export function GlossaryNorms() {
  return <GlossaryDeck entries={NORM_GLOSSARY} />
}
