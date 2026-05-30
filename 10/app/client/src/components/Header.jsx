import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext.jsx";
import { useLang } from "../contexts/LanguageContext.jsx";
import { useT } from "../i18n/strings.js";

export default function Header() {
  const { theme, toggle: toggleTheme } = useTheme();
  const { lang, toggle: toggleLang } = useLang();
  const t = useT(lang);

  return (
    <header className="header">
      <Link to="/" className="brand">
        <span className="dot" />
        <span>{t.brand}</span>
        <span className="muted" style={{ fontWeight: 400 }}>· {t.tagline}</span>
      </Link>
      <div className="spacer" />
      <div className="toggle-group">
        <button className="btn" onClick={toggleLang} title={t.lang_label} aria-label={t.lang_label}>
          {lang === "en" ? "🇬🇧 EN" : "🇭🇺 HU"}
        </button>
        <button className="btn icon" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
}
