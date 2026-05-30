import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { fetchLesson, type Lesson } from '../../lib/api';
import type { Lang } from '../../i18n';
import MarkdownView from '../../components/MarkdownView';

export default function LessonReader() {
  const { slug = '' } = useParams();
  const { t, i18n } = useTranslation();
  const lang = (i18n.language as Lang) === 'hu' ? 'hu' : 'en';
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [status, setStatus] = useState<'loading' | 'ok' | 'error'>('loading');

  useEffect(() => {
    let active = true;
    setStatus('loading');
    fetchLesson(slug, lang)
      .then((l) => {
        if (!active) return;
        setLesson(l);
        setStatus('ok');
      })
      .catch(() => active && setStatus('error'));
    return () => {
      active = false;
    };
  }, [slug, lang]);

  return (
    <article>
      <Link to="/numerical-calculus/lessons" className="text-sm font-semibold text-brand-600 hover:underline dark:text-brand-300">
        ← {t('lessons.back')}
      </Link>
      {status === 'loading' && <p className="mt-6 text-slate-500">{t('lessons.loading')}</p>}
      {status === 'error' && <p className="mt-6 text-rose-600">{t('lessons.error')}</p>}
      {status === 'ok' && lesson && (
        <motion.div
          key={lesson.slug + lang}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="card mt-4"
        >
          <MarkdownView markdown={lesson.markdown} />
        </motion.div>
      )}
    </article>
  );
}
