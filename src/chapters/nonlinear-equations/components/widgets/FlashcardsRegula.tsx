import { FlashcardDeck } from './decks'
import { REGULA_FLASHCARDS } from '../../content/regula-extras'

/** §2.4 flip-card self-test deck. */
export function FlashcardsRegula() {
  return <FlashcardDeck cards={REGULA_FLASHCARDS} />
}
