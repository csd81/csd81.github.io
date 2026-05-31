import { GlossaryDeck } from './decks'
import { STOP_GLOSSARY } from '../../content/stopping-extras'

/** §2.8 glossary (bilingual, tap-to-reveal). */
export function GlossaryStopping() {
  return <GlossaryDeck entries={STOP_GLOSSARY} />
}
