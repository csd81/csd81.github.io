import { useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';
import { useLang } from '../../shared/providers/LanguageProvider';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import LessonReader from './features/lessons/LessonReader';
import Playground from './pages/Playground';
import Quiz from './pages/Quiz';
import './chapter.css';

/**
 * Chapter 7 — Numerical Calculus. Ported from 07 (client + server). The Express
 * API is gone: lesson markdown and quizzes are bundled and served by
 * ./lib/api.ts in-browser. Routing is mounted as descendant routes under
 * `/numerical-calculus/*`; the chapter's i18next instance is synced to the
 * shared language toggle, and theme comes from the shared provider.
 */
export default function Chapter() {
  const location = useLocation();
  const { t } = useTranslation();
  const { lang } = useLang();

  useEffect(() => {
    void i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <Routes location={location}>
              <Route index element={<Home />} />
              <Route path="lessons" element={<Lessons />} />
              <Route path="lessons/:slug" element={<LessonReader />} />
              <Route path="playground" element={<Playground />} />
              <Route path="quiz" element={<Quiz />} />
              <Route path="*" element={<Navigate to="/numerical-calculus" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-400 dark:border-slate-800">
        {t('app.footer')}
      </footer>
    </div>
  );
}
