import { FlashcardDeck } from './decks'
import { CONV_FLASHCARDS } from '../../content/convergence-extras'

/** §2.7 flip-card self-test deck. */
export function FlashcardsConv() {
  return <FlashcardDeck cards={CONV_FLASHCARDS} />
}
