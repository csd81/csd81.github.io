import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Home from './pages/Home.jsx';
import Theory from './pages/Theory.jsx';
import Playground from './pages/Playground.jsx';
import './styles/theme.css';

/**
 * Chapter 10 — Differential Equations. Ported from 10/app (client + Express).
 * The server is gone: `/api/content` is served from bundled markdown
 * (lib/useContent.js) and `/api/solve` runs in-browser via the shared engine
 * (compute/). Routes are mounted as descendant routes under
 * `/differential-equations/*`; language/theme come from the shared providers.
 */
export default function Chapter() {
  return (
    <div className="app ch-ode">
      <Header />
      <div className="layout">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route index element={<Home />} />
            <Route path="theory/:sectionId" element={<Theory />} />
            <Route
              path="theory"
              element={<Navigate to="/differential-equations/theory/intro" replace />}
            />
            <Route path="playground" element={<Playground />} />
            <Route path="*" element={<Navigate to="/differential-equations" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
