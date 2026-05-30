import { NavLink } from "react-router-dom";
import { useAppStore } from "../../store/useAppStore";
import { useT } from "../../i18n/useT";
import { useLang } from "../../../../shared/providers/LanguageProvider";
import { useTheme } from "../../../../shared/providers/ThemeProvider";
import { ProgressRing } from "../Gamify/ProgressRing";
import { overallProgress } from "../Gamify/badges";
import "./layout.css";

export function Header() {
  const { t, lang } = useT();
  const { theme, toggle: toggleTheme } = useTheme();
  const { setLang } = useLang();
  const progress = useAppStore((s) => s.progress);

  const links: { to: string; key: Parameters<typeof t>[0] }[] = [
    { to: "/matrix-factorization", key: "nav_home" },
    { to: "/matrix-factorization/lu", key: "nav_lu" },
    { to: "/matrix-factorization/cholesky", key: "nav_cholesky" },
    { to: "/matrix-factorization/solvers", key: "nav_solver" },
    { to: "/matrix-factorization/practice", key: "nav_practice" },
  ];

  return (
    <header className="header">
      <div className="header__inner">
        <NavLink to="/matrix-factorization" className="brand">
          <span className="brand__mark">A</span>
          <span className="brand__text">
            <strong>{t("appName")}</strong>
            <small>{t("tagline")}</small>
          </span>
        </NavLink>

        <nav className="nav">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/matrix-factorization"}
              className={({ isActive }) => `nav__link${isActive ? " is-active" : ""}`}
            >
              {t(l.key)}
            </NavLink>
          ))}
        </nav>

        <div className="header__tools">
          <div className="seg" role="group" aria-label={t("language")}>
            <button
              className={`seg__btn${lang === "en" ? " is-on" : ""}`}
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
            <button
              className={`seg__btn${lang === "hu" ? " is-on" : ""}`}
              onClick={() => setLang("hu")}
              aria-pressed={lang === "hu"}
            >
              HU
            </button>
          </div>

          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? t("theme_light") : t("theme_dark")}
            title={theme === "dark" ? t("theme_light") : t("theme_dark")}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <NavLink to="/matrix-factorization/practice" title={t("progress")} className="ring-link">
            <ProgressRing value={overallProgress(progress)} label={t("progress")} />
          </NavLink>
        </div>
      </div>
    </header>
  );
}
