import { useT } from "../i18n/useT";
import { Exercise } from "../components/Practice/Exercise";
import { exercises } from "../content/exercises";

export function PracticePage() {
  const { t, lang } = useT();

  const lu = exercises.filter((e) => e.group === "lu");
  const ch = exercises.filter((e) => e.group === "cholesky");

  return (
    <div className="page-narrow">
      <h1>{t("nav_practice")}</h1>

      <h2>{lang === "en" ? "LU exercises" : "LU feladatok"}</h2>
      {lu.map((e) => (
        <Exercise key={e.id} ex={e} />
      ))}

      <h2>{lang === "en" ? "Cholesky exercises" : "Cholesky feladatok"}</h2>
      {ch.map((e) => (
        <Exercise key={e.id} ex={e} />
      ))}
    </div>
  );
}
