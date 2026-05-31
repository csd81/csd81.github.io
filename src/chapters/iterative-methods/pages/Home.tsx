import { Link } from 'react-router-dom';
import { useStrings } from '../i18n/useStrings';
import { useProgress, type ModuleId } from '../context/ProgressContext';

const cards: { id: ModuleId; to: string; emoji: string }[] = [
  { id: 'fixed-point', to: '/iterative-methods/fixed-point', emoji: '🔁' },
  { id: 'jacobi-gs', to: '/iterative-methods/jacobi-gauss-seidel', emoji: '🏁' },
  { id: 'spectral', to: '/iterative-methods/spectral', emoji: '🎯' },
  { id: 'condition', to: '/iterative-methods/condition', emoji: '⚠️' },
];

export function Home() {
  const t = useStrings();
  const { scores, reset } = useProgress();

  return (
    <div>
      <section className="mb-8 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-400 p-8 text-white">
        <h1 className="text-3xl font-bold">{t.appTitle}</h1>
        <p className="mt-3 max-w-2xl text-brand-50">{t.home.intro}</p>
      </section>

      <div className="grid gap-5 sm:grid-cols-2">
        {cards.map((c) => {
          const m = t.modules[c.id];
          const score = scores[c.id];
          return (
            <Link
              key={c.id}
              to={c.to}
              className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:border-brand-400 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-400"
            >
              <div className="flex items-start justify-between">
                <span className="text-3xl">{c.emoji}</span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    score
                      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300'
                      : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
                  }`}
                >
                  {t.home.quizBadge}:{' '}
                  {score ? `${score.best}/${score.total}` : t.home.notTried}
                </span>
              </div>
              <h2 className="mt-3 text-lg font-bold text-slate-900 group-hover:text-brand-700 dark:text-slate-50 dark:group-hover:text-brand-200">
                {m.title}
              </h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{m.blurb}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-brand-600 dark:text-brand-300">
                {t.home.start} →
              </span>
            </Link>
          );
        })}
      </div>

      {Object.keys(scores).length > 0 && (
        <div className="mt-6 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
          <span>{t.home.progress}:</span>
          {cards.map((c) =>
            scores[c.id] ? (
              <span key={c.id} className="font-mono">
                {t.modules[c.id].title.split(' ')[0]} {scores[c.id]!.best}/{scores[c.id]!.total}
              </span>
            ) : null,
          )}
          <button onClick={reset} className="ml-auto text-brand-600 hover:underline">
            {t.home.resetProgress}
          </button>
        </div>
      )}
    </div>
  );
}
