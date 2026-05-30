import { useTranslation } from 'react-i18next';
import QuizRunner from '../features/quiz/QuizRunner';

export default function Quiz() {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="text-3xl font-extrabold">{t('quiz.title')}</h1>
      <p className="mb-5 mt-1 text-slate-500 dark:text-slate-400">{t('quiz.lead')}</p>
      <QuizRunner />
    </div>
  );
}
