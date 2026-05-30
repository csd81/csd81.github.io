import { useLang } from "../contexts/LanguageContext.jsx";
import { useT } from "../i18n/strings.js";
import FieldDemo from "../components/FieldDemo.jsx";
import CompareDemo from "../components/CompareDemo.jsx";
import ConvergenceDemo from "../components/ConvergenceDemo.jsx";

// Full sandbox: all three demos, each with its own independent ODE controls.
export default function Playground() {
  const { lang } = useLang();
  const t = useT(lang);
  return (
    <div>
      <div className="hero" style={{ paddingBottom: 0 }}>
        <h1>{t.nav_playground}</h1>
        <p className="muted">{t.feat_play_d}</p>
      </div>
      <FieldDemo presetId="main" />
      <CompareDemo presetId="main" defaultMethods={["euler", "taylor2", "rk4"]} />
      <ConvergenceDemo presetId="main" defaultMethods={["euler", "taylor2", "midpoint", "rk4"]} />
    </div>
  );
}
