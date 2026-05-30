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
            en: "Built as a playful companion to the Numerical Analysis course material (Chapter 8, “Minimization of Functions”) by F. Hartung, University of Pannonia. All plots and convergence tables here are computed live in your browser.",
            hu: "Játékos kísérőanyag a Numerikus analízis kurzushoz (8. fejezet, „Szélsőértékszámítás”), Hartung Ferenc, Pannon Egyetem. Az ábrákat és a konvergencia-táblázatokat a böngésződ valós időben számolja.",
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
