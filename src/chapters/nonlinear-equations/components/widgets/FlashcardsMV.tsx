import { FlashcardDeck } from './decks'
import { MV_FLASHCARDS } from '../../content/multivariable-extras'

/** §2.9 flip-card self-test deck. */
export function FlashcardsMV() {
  return <FlashcardDeck cards={MV_FLASHCARDS} />
}
