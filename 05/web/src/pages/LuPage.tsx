import { TheorySection } from "../components/Theory/TheorySection";
import { GuidedExample } from "../components/GuidedExample/GuidedExample";
import { LUSolver } from "../components/Solvers/LUSolver";
import { luSection } from "../content/lu";
import { useT } from "../i18n/useT";

export function LuPage() {
  const { lang } = useT();
  return (
    <div className="page-narrow">
      <TheorySection section={luSection} />
      <h2>{lang === "en" ? "Guided example" : "Vezetett példa"}</h2>
      <GuidedExample kind="lu" />
      <h2>{lang === "en" ? "Try it yourself" : "Próbáld ki magad"}</h2>
      <LUSolver />
    </div>
  );
}
