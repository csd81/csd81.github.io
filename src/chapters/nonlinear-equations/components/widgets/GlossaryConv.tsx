import { GlossaryDeck } from './decks'
import { CONV_GLOSSARY } from '../../content/convergence-extras'

/** §2.7 order-of-convergence glossary (bilingual, tap-to-reveal). */
export function GlossaryConv() {
  return <GlossaryDeck entries={CONV_GLOSSARY} />
}
