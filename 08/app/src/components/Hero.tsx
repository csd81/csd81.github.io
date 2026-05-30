import { useLang } from "../contexts/LanguageContext";
import Tex from "./Math";

export default function Hero() {
  const { t } = useLang();
  return (
    <header className="hero" id="hero">
      <div className="hero__bg" />
      <div className="wrap hero__inner">
        <span className="eyebrow">
          {t({
            en: "Numerical Analysis · Chapter 8",
            hu: "Numerikus analízis · 8. fejezet",
          })}
        </span>
        <h1>
          {t({ en: "How computers find the ", hu: "Hogyan találják meg a gépek a " })}
          <em>{t({ en: "lowest point", hu: "legmélyebb pontot" })}</em>
          {t({ en: ".", hu: "." })}
        </h1>
        <p className="hero__lead">
          {t({
            en: "Minimizing a function is just rolling downhill until you can't go lower. Scroll through seven methods — each one comes alive as you read, and you can grab the controls and play.",
            hu: "Egy függvény minimalizálása nem más, mint legurulni a völgybe, amíg lejjebb már nem lehet. Görgess végig hét módszeren — mindegyik életre kel olvasás közben, és a vezérlőkkel magad is kísérletezhetsz.",
          })}
        </p>
        <div className="hero__cta">
          <a className="btn btn--primary" href="#golden">
            {t({ en: "Start exploring ↓", hu: "Kezdjük a felfedezést ↓" })}
          </a>
          <a className="btn" href="#calculus">
            {t({ en: "First, a refresher", hu: "Előbb egy ismétlés" })}
          </a>
        </div>
        <div className="hero__chips">
          <span className="pill">
            <Tex>{"\\min_{x} f(x)"}</Tex>
          </span>
          <span className="pill">EN / HU</span>
          <span className="pill">🌙 / ☀️</span>
          <span className="pill">
            {t({ en: "7 interactive methods", hu: "7 interaktív módszer" })}
          </span>
        </div>
      </div>
    </header>
  );
}
