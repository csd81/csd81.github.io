import { useState } from 'react';
import { useLang } from '../../../shared/providers/LanguageProvider';
import { quizzes } from '../content/quizzes.js';
import { completeSection } from '../state/progress.js';
import { Rich } from './Rich';

interface Bi {
  en: string;
  hu: string;
}
interface QItem {
  q: Bi;
  options: Bi[];
  correct: number;
}

const T = {
  quiz: { en: 'Quiz', hu: 'Kvíz' },
  check: { en: 'Check answer', hu: 'Ellenőrzés' },
  next: { en: 'Next', hu: 'Következő' },
  correct: { en: 'Correct! ✓', hu: 'Helyes! ✓' },
  incorrect: { en: 'Not quite — try again.', hu: 'Nem egészen — próbáld újra.' },
  done: { en: 'Quiz complete!', hu: 'Kvíz teljesítve!' },
  score: { en: 'Score', hu: 'Eredmény' },
  complete: { en: 'Section complete', hu: 'Szakasz teljesítve' },
  retry: { en: 'Retry', hu: 'Újra' },
} as const;

export function LsQuiz({ refKey, sectionId }: { refKey: string; sectionId: string }) {
  const { t } = useLang();
  const items: QItem[] = ((quizzes as Record<string, QItem[]>)[refKey] ?? []);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [chosen, setChosen] = useState(-1);
  const [result, setResult] = useState<'none' | 'right' | 'wrong'>('none');

  if (!items.length) return null;

  const restart = () => {
    setIdx(0);
    setScore(0);
    setChosen(-1);
    setResult('none');
  };

  if (idx >= items.length) {
    const pct = Math.round((score / items.length) * 100);
    const passed = score === items.length;
    if (passed) completeSection(sectionId);
    return (
      <div className="quiz">
        <div className="quiz-head">
          <span className="quiz-icon">🎯</span>
          <strong>{t(T.quiz)}</strong>
        </div>
        <div className="quiz-body">
          <div className="quiz-done">
            <p>
              {t(T.done)} {t(T.score)}: {score}/{items.length} ({pct}%)
            </p>
            {passed && <p className="quiz-pass">{t(T.complete)} ✓</p>}
            <button className="btn" onClick={restart}>
              {t(T.retry)}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const item = items[idx];
  const check = () => {
    if (chosen < 0) return;
    if (chosen === item.correct) {
      setResult('right');
      setScore((s) => s + 1);
    } else {
      setResult('wrong');
    }
  };
  const next = () => {
    setIdx((i) => i + 1);
    setChosen(-1);
    setResult('none');
  };

  return (
    <div className="quiz">
      <div className="quiz-head">
        <span className="quiz-icon">🎯</span>
        <strong>{t(T.quiz)}</strong>
      </div>
      <div className="quiz-body">
        <p className="quiz-q">
          {idx + 1}. <Rich text={t(item.q)} />
        </p>
        <div className="quiz-opts">
          {item.options.map((opt, i) => (
            <button
              key={i}
              className={`quiz-opt${chosen === i ? ' selected' : ''}${
                result !== 'none' && i === item.correct ? ' right' : ''
              }${result === 'wrong' && i === chosen ? ' wrong' : ''}`}
              onClick={() => result !== 'right' && setChosen(i)}
            >
              <Rich text={t(opt)} />
            </button>
          ))}
        </div>
        {result !== 'none' && (
          <div className={`quiz-feedback ${result === 'right' ? 'ok' : 'bad'}`}>
            {result === 'right' ? t(T.correct) : t(T.incorrect)}
          </div>
        )}
        {result === 'right' ? (
          <button className="btn" onClick={next}>
            {t(T.next)}
          </button>
        ) : (
          <button className="btn" onClick={check}>
            {t(T.check)}
          </button>
        )}
      </div>
    </div>
  );
}
