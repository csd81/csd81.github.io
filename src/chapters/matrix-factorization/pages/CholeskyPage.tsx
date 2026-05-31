import { TheorySection } from "../components/Theory/TheorySection";
import { GuidedExample } from "../components/GuidedExample/GuidedExample";
import { CholeskySolver } from "../components/Solvers/CholeskySolver";
import { GlossaryDeck, FlashcardDeck } from "../components/Decks";
import { choleskySection } from "../content/cholesky";
import { useT } from "../i18n/useT";

export function CholeskyPage() {
  const { lang } = useT();
  return (
    <div className="page-narrow">
      <TheorySection section={choleskySection} />
      <h2>{lang === "en" ? "Guided example" : "Vezetett példa"}</h2>
      <GuidedExample kind="cholesky" />
      <h2>{lang === "en" ? "Try it yourself" : "Próbáld ki magad"}</h2>
      <CholeskySolver />
      <GlossaryDeck deck="cholesky" />
      <FlashcardDeck deck="cholesky" />
    </div>
  );
}
