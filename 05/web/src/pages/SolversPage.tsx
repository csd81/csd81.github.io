import { LUSolver } from "../components/Solvers/LUSolver";
import { CholeskySolver } from "../components/Solvers/CholeskySolver";
import { useT } from "../i18n/useT";

export function SolversPage() {
  const { t, lang } = useT();
  return (
    <div className="page-narrow">
      <h1>{t("nav_solver")}</h1>
      <p>
        {lang === "en"
          ? "Enter your own matrices and step through the factorization. Press Verify to multiply the factors back and confirm the result."
          : "Add meg saját mátrixaidat, és lépkedj végig a faktorizáción. Az Ellenőrzés gombbal visszaszorzod a tényezőket, és igazolod az eredményt."}
      </p>
      <LUSolver />
      <CholeskySolver />
    </div>
  );
}
