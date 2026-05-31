import { FlashcardDeck } from './decks'
import { BROYDEN_FLASHCARDS } from '../../content/broyden-extras'

/** §2.13 flip-card self-test deck. */
export function FlashcardsBroyden() {
  return <FlashcardDeck cards={BROYDEN_FLASHCARDS} />
}
