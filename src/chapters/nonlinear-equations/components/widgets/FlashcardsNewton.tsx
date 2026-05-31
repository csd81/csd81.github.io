import { FlashcardDeck } from './decks'
import { NEWTON_FLASHCARDS } from '../../content/newton-extras'

/** §2.5 flip-card self-test deck. */
export function FlashcardsNewton() {
  return <FlashcardDeck cards={NEWTON_FLASHCARDS} />
}
