import { FlashcardDeck } from './decks'
import { NORM_FLASHCARDS } from '../../content/norms-extras'

/** §2.10 flip-card self-test deck. */
export function FlashcardsNorms() {
  return <FlashcardDeck cards={NORM_FLASHCARDS} />
}
