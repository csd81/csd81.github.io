import { useState, useMemo } from "react";
import OdeControls from "./OdeControls.jsx";
import SlopeFieldCanvas from "./SlopeFieldCanvas.jsx";
import { useLang } from "../contexts/LanguageContext.jsx";
import { useT } from "../i18n/strings.js";
import { compileModel, METHODS } from "../lib/engine.js";
import { METHOD_KEYS } from "../lib/engine.js";
import { presetById } from "../compute/presets.js";

export default function FieldDemo({ presetId = "main" }) {
  const { lang } = useLang();
  const t = useT(lang);
  const [model, setModel] = useState(() => {
    const p = presetById(presetId);
    return { presetId: p.id, f: p.f, exact: p.exact, t0: p.t0, T: p.T, y0: p.y0, h: p.h };
  });
  const [methodKey, setMethodKey] = useState("euler");

  const { funcs, exactFn, error } = useMemo(() => compileModel(model), [model]);
  const opts = { t0: model.t0, T: model.T, y0: model.y0, h: model.h };

  return (
    <div className="card">
      <div className="demo-title">📐 {t.demo_field}</div>
      <OdeControls model={model} setModel={setModel} methods={[]} setMethods={() => {}} showMethods={false} />

      <div className="field" style={{ marginBottom: 12 }}>
        <label>{t.methods}</label>
        <div className="method-chips">
          {METHOD_KEYS.map((key) => (
            <span
              key={key}
              className={`chip ${methodKey === key ? "on" : ""}`}
              onClick={() => setMethodKey(key)}
            >
              {lang === "hu" ? METHODS[key].hu : METHODS[key].en}
            </span>
          ))}
        </div>
      </div>

      {error ? (
        <div className="err-banner">⚠ {error}</div>
      ) : (
        <SlopeFieldCanvas funcs={funcs} exactFn={exactFn} opts={opts} methodKey={methodKey} />
      )}
      {!model.exact && !error && <div className="legend-note">{t.no_exact_note}</div>}
    </div>
  );
}
