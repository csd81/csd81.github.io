import { useState } from 'react';
import { STR } from './i18n/strings';
import { useLang } from '../../shared/providers/LanguageProvider';
import Lesson from './lessons/Lesson';
import ChallengePlay from './components/ChallengePlay';
import './styles.css';

type Tab = 'play' | 'lagrange' | 'newton' | 'hermite' | 'spline';

/**
 * Chapter 6 — Interpolation (InterPlay). Ported from 06/interplay. The client
 * never used the Express `/api/datasets` endpoint (points are inlined), so the
 * server is dropped. Language now comes from the shared provider; the chapter's
 * own top-bar lang/theme toggles are replaced by the unified shell nav, and the
 * internal tab bar is kept.
 */
export default function Chapter() {
  const { lang } = useLang();
  const [tab, setTab] = useState<Tab>('play');
  const str = STR[lang];

  const tabs: { id: Tab; label: string }[] = [
    { id: 'play', label: str.nav.playground },
    { id: 'lagrange', label: str.nav.lagrange },
    { id: 'newton', label: str.nav.newton },
    { id: 'hermite', label: str.nav.hermite },
    { id: 'spline', label: str.nav.spline },
  ];

  return (
    <div className="app ch-interpolation">
      <header className="topbar">
        <div className="brand">
          <span className="logo">📈</span>
          <div>
            <div className="brand-title">{str.appTitle}</div>
            <div className="brand-sub">{str.tagline}</div>
          </div>
        </div>
      </header>

      <nav className="tabs">
        {tabs.map((t) => (
          <button
            key={t.id}
            className={`tab ${tab === t.id ? 'active' : ''}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <main className="content">
        {tab === 'play' && <ChallengePlay str={str} />}
        {tab === 'lagrange' && (
          <Lesson
            str={str}
            method="lagrange"
            points={[
              { x: -1, y: -3 },
              { x: 1, y: 1 },
              { x: 2, y: 3 },
              { x: 3, y: 29 },
            ]}
            allowCompare
          />
        )}
        {tab === 'newton' && (
          <Lesson
            str={str}
            method="newton"
            points={[
              { x: -1, y: -2 },
              { x: 1, y: 0 },
              { x: 2, y: -2 },
              { x: 3, y: 2 },
            ]}
            showTable
            allowCompare
          />
        )}
        {tab === 'hermite' && (
          <Lesson
            str={str}
            method="hermite"
            points={[
              { x: -1, y: 2 },
              { x: 1, y: 4 },
              { x: 2, y: 11 },
            ]}
            derivatives={[3, -5, 30]}
            enableDerivatives
          />
        )}
        {tab === 'spline' && (
          <Lesson
            str={str}
            method="spline"
            points={[
              { x: 0, y: 0.5 },
              { x: 1, y: 0.1 },
              { x: 1.5, y: 2.5 },
              { x: 2, y: -1 },
              { x: 3, y: -0.5 },
              { x: 4, y: 0 },
            ]}
            allowCompare
          />
        )}
      </main>

      <footer className="foot">
        InterPlay · Numerical Analysis 6 · Interpolation — F. Hartung, University of Pannonia
      </footer>
    </div>
  );
}
