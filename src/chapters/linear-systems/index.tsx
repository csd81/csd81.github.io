import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { LessonsPage, LessonPage } from './pages/LessonsPage';
import { LabPage } from './pages/LabPage';
import { QuizPage } from './pages/QuizPage';
import './styles/global.css';

/**
 * Chapter 3 — Linear Systems. Ported from 03/linear-systems-app. Its internal
 * router is mounted as descendant routes under `/linear-systems/*`; the chapter
 * keeps its own Header sub-nav (Home/Lessons/Lab/Quiz). Links were rewritten to
 * the chapter base so they resolve under the unified router.
 */
export default function Chapter() {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="lessons" element={<LessonsPage />} />
        <Route path="lessons/:id" element={<LessonPage />} />
        <Route path="lab" element={<LabPage />} />
        <Route path="quiz" element={<QuizPage />} />
        <Route path="*" element={<Navigate to="/linear-systems" replace />} />
      </Routes>
    </Layout>
  );
}
