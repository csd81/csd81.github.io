import { useLang } from "../contexts/LanguageContext.jsx";
import { useT } from "../i18n/strings.js";
import { PRESETS } from "../../../shared/presets.js";
import { METHODS, METHOD_KEYS } from "../lib/engine.js";

const NUM = (v) => (v === "" ? "" : Number(v));

// Reusable controls. Pass which fields to show via flags.
export default function OdeControls({
  model,
  setModel,
  methods,
  setMethods,
  showH = true,
  showExact = true,
  showMethods = true,
}) {
  const { lang } = useLang();
  const t = useT(lang);

  const applyPreset = (id) => {
    const p = PRESETS.find((x) => x.id === id);
    if (!p) {
      setModel({ ...model, presetId: "custom" });
      return;
    }
    setModel({ presetId: p.id, f: p.f, exact: p.exact, t0: p.t0, T: p.T, y0: p.y0, h: p.h });
  };

  const upd = (k) => (e) => setModel({ ...model, presetId: "custom", [k]: NUM(e.target.value) });
  const updText = (k) => (e) => setModel({ ...model, presetId: "custom", [k]: e.target.value });

  const toggleMethod = (key) => {
    setMethods(methods.includes(key) ? methods.filter((m) => m !== key) : [...methods, key]);
  };

  return (
    <div>
      <div className="controls">
        <div className="field">
          <label>{t.preset}</label>
          <select value={model.presetId} onChange={(e) => applyPreset(e.target.value)}>
            {PRESETS.map((p) => (
              <option key={p.id} value={p.id}>
                {lang === "hu" ? p.hu : p.en}
              </option>
            ))}
            <option value="custom">— {t.custom} —</option>
          </select>
        </div>

        <div className="field">
          <label>{t.rhs}</label>
          <input className="wide" value={model.f} onChange={updText("f")} spellCheck={false} />
        </div>

        {showExact && (
          <div className="field">
            <label>{t.exact}</label>
            <input
              className="wide"
              value={model.exact || ""}
              onChange={updText("exact")}
              placeholder="(optional)"
              spellCheck={false}
            />
          </div>
        )}
      </div>

      <div className="controls">
        <div className="field">
          <label>t₀</label>
          <input className="narrow" type="number" step="0.1" value={model.t0} onChange={upd("t0")} />
        </div>
        <div className="field">
          <label>T</label>
          <input className="narrow" type="number" step="0.1" value={model.T} onChange={upd("T")} />
        </div>
        <div className="field">
          <label>y₀</label>
          <input className="narrow" type="number" step="0.1" value={model.y0} onChange={upd("y0")} />
        </div>
        {showH && (
          <div className="field">
            <label>h</label>
            <input className="narrow" type="number" step="0.01" min="0.001" value={model.h} onChange={upd("h")} />
          </div>
        )}
      </div>

      {showMethods && (
        <div className="field" style={{ marginTop: 4 }}>
          <label>{t.methods}</label>
          <div className="method-chips">
            {METHOD_KEYS.map((key) => (
              <span
                key={key}
                className={`chip ${methods.includes(key) ? "on" : ""}`}
                onClick={() => toggleMethod(key)}
              >
                {lang === "hu" ? METHODS[key].hu : METHODS[key].en}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
