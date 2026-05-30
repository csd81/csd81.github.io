import { useState, useMemo } from "react";
import OdeControls from "./OdeControls.jsx";
import ConvergenceChart from "./ConvergenceChart.jsx";
import { useLang } from "../contexts/LanguageContext.jsx";
import { useT } from "../i18n/strings.js";
import { compileModel, convergenceSweep } from "../lib/engine.js";
import { presetById } from "../compute/presets.js";

const H_LIST = [0.4, 0.2, 0.1, 0.05, 0.025, 0.0125, 0.00625];

export default function ConvergenceDemo({ presetId = "main", defaultMethods = ["euler", "taylor2", "rk4"] }) {
  const { lang } = useLang();
  const t = useT(lang);
  const [model, setModel] = useState(() => {
    const p = presetById(presetId);
    return { presetId: p.id, f: p.f, exact: p.exact, t0: p.t0, T: p.T, y0: p.y0, h: p.h };
  });
  const [methods, setMethods] = useState(defaultMethods);

  const { funcs, exactFn, error } = useMemo(() => compileModel(model), [model]);

  const sweep = useMemo(() => {
    if (!funcs || !methods.length) return [];
    const opts = { t0: model.t0, T: model.T, y0: model.y0 };
    const hList = H_LIST.filter((h) => (model.T - model.t0) / h <= 6000); // guard
    return methods.map((k) => ({ key: k, points: convergenceSweep(k, funcs, opts, exactFn, hList) }));
  }, [funcs, exactFn, methods, model]);

  return (
    <div className="card">
      <div className="demo-title">📉 {t.demo_conv}</div>
      <OdeControls
        model={model}
        setModel={setModel}
        methods={methods}
        setMethods={setMethods}
        showH={false}
      />
      {error ? (
        <div className="err-banner">⚠ {error}</div>
      ) : !methods.length ? (
        <div className="legend-note">{t.select_methods}</div>
      ) : (
        <ConvergenceChart sweep={sweep} />
      )}
      {!model.exact && !error && <div className="legend-note">{t.no_exact_note}</div>}
    </div>
  );
}
