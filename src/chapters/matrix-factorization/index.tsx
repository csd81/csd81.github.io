import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from './components/Layout/Header';
import { HomePage } from './pages/HomePage';
import { LuPage } from './pages/LuPage';
import { CholeskyPage } from './pages/CholeskyPage';
import { SolversPage } from './pages/SolversPage';
import { PracticePage } from './pages/PracticePage';
import { TheorySection } from './components/Theory/TheorySection';
import { introSection } from './content/intro';
import { useT } from './i18n/useT';
import './app.css';

/**
 * Chapter 5 — Matrix Factorization. Ported from 05/web. Language/theme are now
 * driven by the shared providers (the chapter's zustand store keeps only
 * progress/badges), so the old theme/lang <html> effects are removed. Routes
 * are mounted as descendant routes under `/matrix-factorization/*`.
 */
export default function Chapter() {
  const { t } = useT();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main className="page">
        <Routes>
          <Route
            index
            element={
              <>
                <HomePage />
                <div className="page-narrow" style={{ marginTop: '2.5rem' }}>
                  <TheorySection section={introSection} />
                </div>
              </>
            }
          />
          <Route path="lu" element={<LuPage />} />
          <Route path="cholesky" element={<CholeskyPage />} />
          <Route path="solvers" element={<SolversPage />} />
          <Route path="practice" element={<PracticePage />} />
          <Route path="*" element={<Navigate to="/matrix-factorization" replace />} />
        </Routes>
      </main>
      <footer className="footer">
        {t('appName')} · {t('tagline')} · © {new Date().getFullYear()}
      </footer>
    </>
  );
}
