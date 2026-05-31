import { GlossaryDeck } from './decks'
import { NDNEWTON_GLOSSARY } from '../../content/ndnewton-extras'

/** §2.12 n-D Newton glossary (bilingual, tap-to-reveal). */
export function GlossaryNDNewton() {
  return <GlossaryDeck entries={NDNEWTON_GLOSSARY} />
}
