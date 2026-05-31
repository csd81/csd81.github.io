import { GlossaryDeck } from './decks'
import { PRELIM_GLOSSARY } from '../../content/preliminaries-extras'

/** §2.1 calculus glossary (bilingual, tap-to-reveal). */
export function Glossary() {
  return <GlossaryDeck entries={PRELIM_GLOSSARY} />
}
