import { FlashcardDeck } from './decks'
import { FPI_FLASHCARDS } from '../../content/fpi-extras'

/** §2.2 flip-card self-test deck. */
export function FlashcardsFPI() {
  return <FlashcardDeck cards={FPI_FLASHCARDS} />
}
