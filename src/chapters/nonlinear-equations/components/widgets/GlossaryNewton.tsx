import { GlossaryDeck } from './decks'
import { NEWTON_GLOSSARY } from '../../content/newton-extras'

/** §2.5 Newton's-method glossary (bilingual, tap-to-reveal). */
export function GlossaryNewton() {
  return <GlossaryDeck entries={NEWTON_GLOSSARY} />
}
