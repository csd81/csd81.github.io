import { useLang } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="wrap">
        <h4>
          {t({
            en: "Minimization of Functions — an interactive guide",
            hu: "Függvények minimalizálása — interaktív útmutató",
          })}
        </h4>
        <p>
          {t({
            en: "An interactive companion to “Minimization of Functions”. All plots and convergence tables here are computed live in your browser.",
            hu: "Interaktív kísérőanyag a „Függvények minimalizálása” témához. Az ábrákat és a konvergencia-táblázatokat a böngésződ valós időben számolja.",
          })}
        </p>
        <p className="muted">
          {t({
            en: "Toggle language (EN/HU) and theme (🌙/☀️) any time from the top bar — your choice is remembered.",
            hu: "A nyelv (EN/HU) és a téma (🌙/☀️) bármikor váltható a felső sávban — a választásod megjegyezzük.",
          })}
        </p>
      </div>
    </footer>
  );
}
