import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import { CHAPTERS } from './chapters/registry';

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
