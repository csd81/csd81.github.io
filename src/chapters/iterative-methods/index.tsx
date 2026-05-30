import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { FixedPointPage } from './pages/FixedPointPage';
import { JacobiGaussSeidelPage } from './pages/JacobiGaussSeidelPage';
import { SpectralPage } from './pages/SpectralPage';
import { ConditionPage } from './pages/ConditionPage';
import { ProgressProvider } from './context/ProgressContext';
import './chapter.css';

/**
 * Chapter 4 — Iterative Techniques. Ported from 04/iter-methods-site (Tailwind +
 * react-markdown). Its createBrowserRouter is converted to descendant routes
 * under `/iterative-methods/*`; language/theme come from the shared providers,
 * the chapter's ProgressContext is kept for quiz progress.
 */
export default function Chapter() {
  return (
    <ProgressProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="fixed-point" element={<FixedPointPage />} />
          <Route path="jacobi-gauss-seidel" element={<JacobiGaussSeidelPage />} />
          <Route path="spectral" element={<SpectralPage />} />
          <Route path="condition" element={<ConditionPage />} />
          <Route path="*" element={<Navigate to="/iterative-methods" replace />} />
        </Route>
      </Routes>
    </ProgressProvider>
  );
}
