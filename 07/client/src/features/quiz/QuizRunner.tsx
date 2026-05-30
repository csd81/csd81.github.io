import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import {
  fetchQuizzes,
  checkAnswer,
  type PublicQuestion,
  type CheckResult,
} from '../../lib/api';
import type { Lang } from '../../i18n';
import Results from './Results';

type Choice = number | boolean | '';

export default function QuizRunner() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language as Lang) === 'hu' ? 'hu' : 'en';

  const [questions, setQuestions] = useState<PublicQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState<Choice>('');
  const [result, setResult] = useState<CheckResult | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(true);

  function reset(list = questions) {
    void list;
    setIndex(0);
    setChoice('');
    setResult(null);
    setScore(0);
    setStreak(0);
    setFinished(false);
  }

  useEffect(() => {
    setLoading(true);
    fetchQuizzes(lang)
      .then((list) => {
        setQuestions(list);
        reset(list);
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  if (loading) return <p className="card text-slate-500">{t('quiz.loading')}</p>;
  if (!questions.length) return <p className="card text-slate-500">{t('quiz.loading')}</p>;
  if (finished) {
    return <Results correct={score} total={questions.length} onRetry={() => reset()} />;
  }

  const q = questions[index];
  const isLast = index === questions.length - 1;
  const answered = result !== null;
  const canCheck = choice !== '' && !answered;

  async function check() {
    if (choice === '') return;
    const res = await checkAnswer(q.id, choice as number | boolean, lang);
    setResult(res);
    if (res.correct) {
      setScore((s) => s + 1);
      setStreak((s) => s + 1);
    } else {
      setStreak(0);
    }
  }

  function next() {
    if (isLast) {
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setChoice('');
    setResult(null);
  }

  const optionClass = (correct: boolean, chosen: boolean) => {
    if (!answered) {
      return chosen
        ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/40'
        : 'border-slate-200 bg-white hover:border-brand-300 dark:border-slate-700 dark:bg-slate-800';
    }
    if (correct) return 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30';
    if (chosen) return 'border-rose-500 bg-rose-50 dark:bg-rose-900/30';
    return 'border-slate-200 bg-white opacity-60 dark:border-slate-700 dark:bg-slate-800';
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold text-slate-500 dark:text-slate-400">
          {t('quiz.question')} {index + 1} {t('quiz.of')} {questions.length}
        </span>
        <span className="flex gap-3">
          <span className="chip bg-brand-100 text-brand-700 dark:bg-brand-900/50 dark:text-brand-200">
            {t('quiz.score')}: {score}
          </span>
          <span className="chip bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-200">
            🔥 {streak}
          </span>
        </span>
      </div>

      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500 transition-all"
          style={{ width: `${((index + (answered ? 1 : 0)) / questions.length) * 100}%` }}
        />
      </div>

      <span className="mt-4 inline-block chip bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
        {t('quiz.topic')} {q.topic}
      </span>

      <AnimatePresence mode="wait">
        <motion.div
          key={q.id}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
        >
          <h2 className="mt-3 text-lg font-semibold">{q.prompt}</h2>

          <div className="mt-4 space-y-2">
            {q.type === 'mcq' &&
              q.options?.map((opt, i) => (
                <button
                  key={i}
                  type="button"
                  disabled={answered}
                  onClick={() => setChoice(i)}
                  className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition ${optionClass(
                    (result?.answer as number) === i,
                    choice === i,
                  )}`}
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-slate-200 text-xs font-bold dark:bg-slate-700">
                    {String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                </button>
              ))}

            {q.type === 'truefalse' &&
              [true, false].map((val) => (
                <button
                  key={String(val)}
                  type="button"
                  disabled={answered}
                  onClick={() => setChoice(val)}
                  className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition ${optionClass(
                    result?.answer === val,
                    choice === val,
                  )}`}
                >
                  {val ? t('quiz.true') : t('quiz.false')}
                </button>
              ))}

            {q.type === 'numeric' && (
              <input
                type="number"
                step="any"
                disabled={answered}
                placeholder={t('quiz.numeric_placeholder')}
                value={choice === '' ? '' : String(choice)}
                onChange={(e) => setChoice(e.target.value === '' ? '' : Number(e.target.value))}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-mono outline-none focus:border-brand-400 dark:border-slate-700 dark:bg-slate-800"
              />
            )}
          </div>

          {answered && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 rounded-xl p-4 ${
                result?.correct
                  ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200'
                  : 'bg-rose-50 text-rose-800 dark:bg-rose-900/30 dark:text-rose-200'
              }`}
            >
              <p className="font-bold">{result?.correct ? t('quiz.correct') : t('quiz.incorrect')}</p>
              <p className="mt-1 text-sm">{result?.explanation}</p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-5 flex justify-end gap-3">
        {!answered ? (
          <button type="button" disabled={!canCheck} onClick={check} className="btn-primary disabled:opacity-50">
            {t('quiz.check')}
          </button>
        ) : (
          <button type="button" onClick={next} className="btn-primary">
            {isLast ? t('quiz.finish') : t('quiz.next')}
          </button>
        )}
      </div>
    </div>
  );
}
