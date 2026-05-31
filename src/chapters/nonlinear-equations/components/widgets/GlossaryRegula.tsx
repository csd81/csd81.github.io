import { GlossaryDeck } from './decks'
import { REGULA_GLOSSARY } from '../../content/regula-extras'

/** §2.4 glossary (bilingual, tap-to-reveal). */
export function GlossaryRegula() {
  return <GlossaryDeck entries={REGULA_GLOSSARY} />
}
