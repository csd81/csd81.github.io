import { FlashcardDeck } from './decks'
import { STOP_FLASHCARDS } from '../../content/stopping-extras'

/** §2.8 flip-card self-test deck. */
export function FlashcardsStopping() {
  return <FlashcardDeck cards={STOP_FLASHCARDS} />
}
