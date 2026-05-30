import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface Props {
  correct: number;
  total: number;
  onRetry: () => void;
}

export default function Results({ correct, total, onRetry }: Props) {
  const { t } = useTranslation();
  const pct = total ? Math.round((correct / total) * 100) : 0;
  const emoji = pct >= 80 ? '🏆' : pct >= 50 ? '👍' : '📚';

  return (
    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="card text-center">
      <div className="text-6xl">{emoji}</div>
      <h2 className="mt-3 text-2xl font-extrabold">{t('quiz.results_title')}</h2>
      <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">
        {t('quiz.results_score', { correct, total })}
      </p>
      <div className="mx-auto mt-4 h-3 w-full max-w-sm overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.6 }}
        />
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button type="button" onClick={onRetry} className="btn-primary">
          {t('quiz.retry')}
        </button>
        <Link to="/lessons" className="btn-ghost">
          {t('quiz.to_lessons')}
        </Link>
      </div>
    </motion.div>
  );
}
