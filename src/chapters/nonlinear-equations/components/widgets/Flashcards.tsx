import { FlashcardDeck } from './decks'
import { PRELIM_FLASHCARDS } from '../../content/preliminaries-extras'

/** §2.1 flip-card self-test deck. */
export function Flashcards() {
  return <FlashcardDeck cards={PRELIM_FLASHCARDS} />
}
