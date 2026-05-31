import { FlashcardDeck } from './decks'
import { NDNEWTON_FLASHCARDS } from '../../content/ndnewton-extras'

/** §2.12 flip-card self-test deck. */
export function FlashcardsNDNewton() {
  return <FlashcardDeck cards={NDNEWTON_FLASHCARDS} />
}
