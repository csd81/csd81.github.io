import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import { CHAPTERS } from './chapters/registry';

const Practice = lazy(() => import('./pages/Practice'));
const Dimat = lazy(() => import('./subjects/dimat'));
const Ila = lazy(() => import('./subjects/ila'));
const Algo = lazy(() => import('./subjects/algo'));
const Tetelsor = lazy(() => import('./subjects/tetelsor'));
const Calc = lazy(() => import('./subjects/calc'));
const Linalg = lazy(() => import('./subjects/linalg'));

function Loading() {
  return (
    <div className="center muted" style={{ padding: '4rem 0' }}>
      <span>Loading…</span>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<App />}>
        <Route index element={<Home />} />
        <Route
          path="practice"
          element={
            <Suspense fallback={<Loading />}>
              <Practice />
            </Suspense>
          }
        />
        <Route
          path="dimat/*"
          element={
            <Suspense fallback={<Loading />}>
              <Dimat />
            </Suspense>
          }
        />
        <Route
          path="ila/*"
          element={
            <Suspense fallback={<Loading />}>
              <Ila />
            </Suspense>
          }
        />
        <Route
          path="algo/*"
          element={
            <Suspense fallback={<Loading />}>
              <Algo />
            </Suspense>
          }
        />
        <Route
          path="tetelsor/*"
          element={
            <Suspense fallback={<Loading />}>
              <Tetelsor />
            </Suspense>
          }
        />
        <Route
          path="calc/*"
          element={
            <Suspense fallback={<Loading />}>
              <Calc />
            </Suspense>
          }
        />
        <Route
          path="linalg/*"
          element={
            <Suspense fallback={<Loading />}>
              <Linalg />
            </Suspense>
          }
        />
        {CHAPTERS.map((c) => {
          const Chapter = c.load;
          return (
            <Route
              key={c.slug}
              path={`${c.slug}/*`}
              element={
                <Suspense fallback={<Loading />}>
                  <Chapter />
                </Suspense>
              }
            />
          );
        })}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
