import { useState } from 'react';
import { Math } from './MathBlock';
import { useStrings } from '../i18n/useStrings';
import { useProgress, type ModuleId } from '../context/ProgressContext';

export interface QuizQuestion {
  id: string;
  prompt: string;
  /** Optional display formula shown under the prompt. */
  tex?: string;
  options: string[];
  answer: number;
  explanation: string;
}

interface QuizProps {
  moduleId: ModuleId;
  questions: QuizQuestion[];
}

export function Quiz({ moduleId, questions }: QuizProps) {
  const t = useStrings();
  const { scores, recordScore } = useProgress();
  const [picked, setPicked] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const best = scores[moduleId];
  const correctCount = questions.filter((q) => picked[q.id] === q.answer).length;

  const submit = () => {
    setSubmitted(true);
    recordScore(moduleId, correctCount, questions.length);
  };

  const retry = () => {
    setPicked({});
    setSubmitted(false);
  };

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold text-brand-700 dark:text-brand-200">🎯 {t.quiz.title}</h3>
        {best && (
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
            {t.quiz.yourBest}: {best.best}/{best.total}
          </span>
        )}
      </div>

      <ol className="space-y-5">
        {questions.map((q, qi) => {
          const sel = picked[q.id];
          return (
            <li key={q.id}>
              <p className="font-medium">
                <span className="mr-1 text-slate-400">{qi + 1}.</span>
                {q.prompt}
              </p>
              {q.tex && (
                <div className="my-2">
                  <Math tex={q.tex} display />
                </div>
              )}
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                {q.options.map((opt, oi) => {
                  const isPicked = sel === oi;
                  const isCorrect = oi === q.answer;
                  let cls =
                    'border-slate-200 bg-slate-50 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700';
                  if (submitted) {
                    if (isCorrect)
                      cls = 'border-emerald-400 bg-emerald-50 dark:border-emerald-500 dark:bg-emerald-500/15';
                    else if (isPicked)
                      cls = 'border-red-400 bg-red-50 dark:border-red-500 dark:bg-red-500/15';
                    else cls = 'border-slate-200 bg-white opacity-70 dark:border-slate-700 dark:bg-slate-900';
                  } else if (isPicked) {
                    cls = 'border-brand-400 bg-brand-50 dark:border-brand-400 dark:bg-brand-600/20';
                  }
                  return (
                    <button
                      key={oi}
                      disabled={submitted}
                      onClick={() => setPicked((p) => ({ ...p, [q.id]: oi }))}
                      className={`rounded-lg border px-3 py-2 text-left text-sm transition ${cls}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
              {submitted && (
                <p
                  className={`mt-2 text-sm ${
                    sel === q.answer
                      ? 'text-emerald-700 dark:text-emerald-300'
                      : 'text-red-700 dark:text-red-300'
                  }`}
                >
                  <strong>{sel === q.answer ? t.quiz.correct : t.quiz.incorrect}</strong>{' '}
                  <span className="text-slate-600 dark:text-slate-400">
                    — {t.quiz.explanation}: {q.explanation}
                  </span>
                </p>
              )}
            </li>
          );
        })}
      </ol>

      <div className="mt-5 flex items-center gap-3">
        {!submitted ? (
          <button
            onClick={submit}
            disabled={Object.keys(picked).length < questions.length}
            className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:opacity-40"
          >
            {t.quiz.submit}
          </button>
        ) : (
          <>
            <span className="text-sm font-semibold">
              {t.quiz.score}: {correctCount}/{questions.length}
            </span>
            <button
              onClick={retry}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {t.quiz.retry}
            </button>
          </>
        )}
      </div>
    </section>
  );
}
