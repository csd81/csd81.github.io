import type { Lang } from '../context/LanguageContext';
import type { ModuleId } from '../context/ProgressContext';
import type { QuizQuestion } from '../components/Quiz';
import { quizzesEn } from './en';
import { quizzesHu } from './hu';

export function getQuiz(id: ModuleId, lang: Lang): QuizQuestion[] {
  return (lang === 'hu' ? quizzesHu : quizzesEn)[id];
}
