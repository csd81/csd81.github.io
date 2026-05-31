import { FlashcardDeck } from './decks'
import { SECANT_FLASHCARDS } from '../../content/secant-extras'

/** §2.6 flip-card self-test deck. */
export function FlashcardsSecant() {
  return <FlashcardDeck cards={SECANT_FLASHCARDS} />
}
