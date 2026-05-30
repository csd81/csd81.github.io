import { useI18n } from '../app/LanguageContext';
import { QuizRunner } from '../components/quiz/QuizRunner';

export function QuizPage() {
  const { t, lang } = useI18n();
  return (
    <div className="stack">
      <div>
        <span className="section-eyebrow">{t('nav.quiz')}</span>
        <h1 style={{ margin: '4px 0 2px' }}>{t('quiz.title')}</h1>
        <p className="muted" style={{ marginTop: 0 }}>
          {lang === 'hu'
            ? 'Ellenőrizd a tudásod a fejezet feladataiból. A megoldások mindkét nyelven elérhetők.'
            : 'Check your understanding with exercises from the chapter. Solutions are available in both languages.'}
        </p>
      </div>
      <QuizRunner />
    </div>
  );
}
