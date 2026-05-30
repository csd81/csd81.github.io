import { useEffect, useState } from "react";
import { STR, type Lang } from "./i18n/strings";
import Lesson from "./lessons/Lesson";
import ChallengePlay from "./components/ChallengePlay";

type Tab = "play" | "lagrange" | "newton" | "hermite" | "spline";

const usePersisted = <T,>(key: string, initial: T): [T, (v: T) => void] => {
  const [v, setV] = useState<T>(() => {
    const s = localStorage.getItem(key);
    return s !== null ? (JSON.parse(s) as T) : initial;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(v));
  }, [key, v]);
  return [v, setV];
};

export default function App() {
  const [lang, setLang] = usePersisted<Lang>("interplay.lang", "en");
  const [theme, setTheme] = usePersisted<"dark" | "light">("interplay.theme", "dark");
  const [tab, setTab] = useState<Tab>("play");
  const str = STR[lang];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = lang;
  }, [theme, lang]);

  const tabs: { id: Tab; label: string }[] = [
    { id: "play", label: str.nav.playground },
    { id: "lagrange", label: str.nav.lagrange },
    { id: "newton", label: str.nav.newton },
    { id: "hermite", label: str.nav.hermite },
    { id: "spline", label: str.nav.spline },
  ];

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <span className="logo">📈</span>
          <div>
            <div className="brand-title">{str.appTitle}</div>
            <div className="brand-sub">{str.tagline}</div>
          </div>
        </div>
        <div className="topbar-right">
          <div className="langtoggle">
            <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>
              EN
            </button>
            <button className={lang === "hu" ? "on" : ""} onClick={() => setLang("hu")}>
              HU
            </button>
          </div>
          <button
            className="themetoggle"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            title={theme === "dark" ? str.ui.light : str.ui.dark}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      <nav className="tabs">
        {tabs.map((t) => (
          <button
            key={t.id}
            className={`tab ${tab === t.id ? "active" : ""}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <main className="content">
        {tab === "play" && <ChallengePlay str={str} />}
        {tab === "lagrange" && (
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
        {tab === "newton" && (
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
        {tab === "hermite" && (
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
        {tab === "spline" && (
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
