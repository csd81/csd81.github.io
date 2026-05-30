import { Link } from "react-router-dom";
import { useLang } from "../contexts/LanguageContext.jsx";
import { useT } from "../i18n/strings.js";

// The chapter's own lang/theme toggles are dropped in favour of the unified
// shell nav; only the chapter brand strip remains.
export default function Header() {
  const { lang } = useLang();
  const t = useT(lang);

  return (
    <header className="header">
      <Link to="/differential-equations" className="brand">
        <span className="dot" />
        <span>{t.brand}</span>
        <span className="muted" style={{ fontWeight: 400 }}>· {t.tagline}</span>
      </Link>
      <div className="spacer" />
    </header>
  );
}
