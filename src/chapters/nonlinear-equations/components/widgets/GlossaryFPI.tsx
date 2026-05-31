import { GlossaryDeck } from './decks'
import { FPI_GLOSSARY } from '../../content/fpi-extras'

/** §2.2 fixed-point-iteration glossary (bilingual, tap-to-reveal). */
export function GlossaryFPI() {
  return <GlossaryDeck entries={FPI_GLOSSARY} />
}
