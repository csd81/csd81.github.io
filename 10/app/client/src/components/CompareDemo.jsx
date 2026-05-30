import { useState, useMemo } from "react";
import OdeControls from "./OdeControls.jsx";
import ComparisonChart from "./ComparisonChart.jsx";
import ResultsTable from "./ResultsTable.jsx";
import { useLang } from "../contexts/LanguageContext.jsx";
import { useT } from "../i18n/strings.js";
import { compileModel, solveWithError, referenceSolution, METHOD_COLORS, METHODS } from "../lib/engine.js";
import { presetById } from "../../../shared/presets.js";

export default function CompareDemo({ presetId = "main", defaultMethods = ["euler", "rk4"] }) {
  const { lang } = useLang();
  const t = useT(lang);
  const [model, setModel] = useState(() => {
    const p = presetById(presetId);
    return { presetId: p.id, f: p.f, exact: p.exact, t0: p.t0, T: p.T, y0: p.y0, h: p.h };
  });
  const [methods, setMethods] = useState(defaultMethods);
  const [apiResult, setApiResult] = useState(null);
  const [apiBusy, setApiBusy] = useState(false);

  const { funcs, exactFn, error } = useMemo(() => compileModel(model), [model]);
  const opts = { t0: model.t0, T: model.T, y0: model.y0, h: model.h };

  const { results, fineExact } = useMemo(() => {
    if (!funcs || !methods.length) return { results: [], fineExact: null };
    const ref = exactFn || referenceSolution(funcs, opts);
    const N = 240;
    const x = [], y = [];
    for (let i = 0; i <= N; i++) {
      const tt = opts.t0 + ((opts.T - opts.t0) * i) / N;
      x.push(tt); y.push(ref(tt));
    }
    const results = methods.map((k) => solveWithError(k, funcs, opts, exactFn));
    return { results, fineExact: { x, y } };
  }, [funcs, exactFn, methods, model]);

  const series = useMemo(() => {
    if (!results.length) return [];
    const s = [
      { name: lang === "hu" ? "pontos y(t)" : "exact y(t)", x: fineExact.x, y: fineExact.y, color: METHOD_COLORS.exact, dash: "dash" },
    ];
    results.forEach((r) => {
      s.push({
        name: lang === "hu" ? METHODS[r.key].hu : METHODS[r.key].en,
        x: r.ts, y: r.zs, color: METHOD_COLORS[r.key], mode: "lines+markers",
      });
    });
    return s;
  }, [results, fineExact, lang]);

  const callApi = async () => {
    setApiBusy(true); setApiResult(null);
    try {
      const res = await fetch("/api/solve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...opts, f: model.f, exact: model.exact || undefined, methods }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "API error");
      setApiResult(json.results.map((r) => `${r.key}: maxErr=${r.maxError.toExponential(3)}`).join("  ·  "));
    } catch (e) {
      setApiResult("⚠ " + e.message);
    } finally {
      setApiBusy(false);
    }
  };

  return (
    <div className="card">
      <div className="demo-title">📊 {t.demo_compare}</div>
      <OdeControls model={model} setModel={setModel} methods={methods} setMethods={setMethods} />

      {error ? (
        <div className="err-banner">⚠ {error}</div>
      ) : !methods.length ? (
        <div className="legend-note">{t.select_methods}</div>
      ) : (
        <>
          <ComparisonChart series={series} ytitle="y" />
          <div style={{ display: "flex", gap: 12, alignItems: "center", margin: "10px 0 16px" }}>
            <button className="btn" onClick={callApi} disabled={apiBusy}>
              {apiBusy ? t.solving : t.solve_api}
            </button>
            {apiResult && <span className="muted" style={{ fontFamily: "var(--font-mono)" }}>{apiResult}</span>}
          </div>
          <ResultsTable results={results} hasExact />
        </>
      )}
      {!model.exact && !error && <div className="legend-note">{t.no_exact_note}</div>}
    </div>
  );
}
