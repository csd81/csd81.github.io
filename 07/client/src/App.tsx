import { Route, Routes, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import LessonReader from './features/lessons/LessonReader';
import Playground from './pages/Playground';
import Quiz from './pages/Quiz';

export default function App() {
  const location = useLocation();
  const { t } = useTranslation();

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
              <Route path="/" element={<Home />} />
              <Route path="/lessons" element={<Lessons />} />
              <Route path="/lessons/:slug" element={<LessonReader />} />
              <Route path="/playground" element={<Playground />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="*" element={<Home />} />
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
