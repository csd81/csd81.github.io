import { FlashcardDeck } from './decks'
import { BIS_FLASHCARDS } from '../../content/bisection-extras'

/** §2.3 flip-card self-test deck. */
export function FlashcardsBisection() {
  return <FlashcardDeck cards={BIS_FLASHCARDS} />
}
