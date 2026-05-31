import { GlossaryDeck } from './decks'
import { BROYDEN_GLOSSARY } from '../../content/broyden-extras'

/** §2.13 quasi-Newton/Broyden glossary (bilingual, tap-to-reveal). */
export function GlossaryBroyden() {
  return <GlossaryDeck entries={BROYDEN_GLOSSARY} />
}
