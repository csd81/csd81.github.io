import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { fetchLessons, type LessonMeta } from '../../lib/api';
import type { Lang } from '../../i18n';

export default function LessonList() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language as Lang) === 'hu' ? 'hu' : 'en';
  const [lessons, setLessons] = useState<LessonMeta[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchLessons().then(setLessons).catch(() => setError(true));
  }, []);

  if (error) return <p className="card text-rose-600">{t('lessons.error')}</p>;

  return (
    <div>
      <h1 className="text-3xl font-extrabold">{t('lessons.title')}</h1>
      <p className="mt-1 text-slate-500 dark:text-slate-400">{t('lessons.intro')}</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {lessons.map((l, idx) => (
          <motion.li
            key={l.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            <Link
              to={`/lessons/${l.slug}`}
              className="card flex items-center gap-4 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-lg font-bold text-white">
                {l.id === 'intro' ? '★' : l.id}
              </span>
              <span>
                <span className="block font-semibold">{l.title[lang]}</span>
                <span className="text-sm text-brand-600 dark:text-brand-300">{t('lessons.read')} →</span>
              </span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
