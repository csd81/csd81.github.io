import { NavLink } from "react-router-dom";
import { useLang } from "../contexts/LanguageContext.jsx";
import { useT } from "../i18n/strings.js";
import { SECTIONS, sectionLabel } from "../sections.js";

export default function Sidebar() {
  const { lang } = useLang();
  const t = useT(lang);

  return (
    <nav className="sidebar">
      <NavLink to="/differential-equations" end className="nav-link">
        {t.nav_overview}
      </NavLink>

      <h4>{t.sections}</h4>
      {SECTIONS.map((s) => (
        <NavLink key={s.id} to={`/differential-equations/theory/${s.id}`} className="nav-link">
          {sectionLabel(s, lang)}
        </NavLink>
      ))}

      <h4>{t.demos}</h4>
      <NavLink to="/differential-equations/playground" className="nav-link">
        {t.nav_playground}
      </NavLink>
    </nav>
  );
}
