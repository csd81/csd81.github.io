import { useLang } from "../contexts/LanguageContext.jsx";
import { useT } from "../i18n/strings.js";
import { METHODS } from "../lib/engine.js";

const fmt = (v, d = 4) => (Number.isFinite(v) ? v.toFixed(d) : "—");
const sci = (v) => (Number.isFinite(v) ? v.toExponential(3) : "—");

// results: [{ key, ts, zs, ys, errors }]  (all share the same mesh ts)
export default function ResultsTable({ results, hasExact }) {
  const { lang } = useLang();
  const t = useT(lang);
  if (!results.length) return null;

  const ts = results[0].ts;

  return (
    <div className="results">
      <table className="results-table">
        <thead>
          <tr>
            <th>{t.col_step}</th>
            <th>{t.col_t}</th>
            {hasExact && <th>{t.col_exact}</th>}
            {results.map((r) => (
              <th key={r.key} colSpan={2}>
                {lang === "hu" ? METHODS[r.key].hu : METHODS[r.key].en}
              </th>
            ))}
          </tr>
          <tr>
            <th></th>
            <th></th>
            {hasExact && <th></th>}
            {results.map((r) => [
              <th key={r.key + "z"}>{t.col_approx}</th>,
              <th key={r.key + "e"}>{t.col_err}</th>,
            ])}
          </tr>
        </thead>
        <tbody>
          {ts.map((tt, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{fmt(tt, 3)}</td>
              {hasExact && <td>{fmt(results[0].ys[i], 5)}</td>}
              {results.map((r) => [
                <td key={r.key + "z"}>{fmt(r.zs[i], 5)}</td>,
                <td key={r.key + "e"}>{sci(r.errors[i])}</td>,
              ])}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
