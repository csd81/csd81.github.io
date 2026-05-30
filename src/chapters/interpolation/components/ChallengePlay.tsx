import { useMemo, useState } from "react";
import Plot, { type Curve } from "./Plot";
import { makeEvaluator, type Method, type Pt } from "../mathcore";
import type { Strings } from "../i18n/strings";

const METHOD_COLORS: Record<Method, string> = {
  lagrange: "#ff5d8f",
  newton: "#f5a623",
  hermite: "#9b5de5",
  spline: "#00bbf9",
};

const target = (x: number) => Math.cos(x); // dashed goal curve
const DOMAIN: [number, number] = [-Math.PI - 0.5, Math.PI + 0.5];
const RANGE: [number, number] = [-2.5, 2.5];

function Confetti() {
  const bits = Array.from({ length: 40 });
  const colors = ["#ff5d8f", "#f5a623", "#9b5de5", "#00bbf9", "#3ddc97"];
  return (
    <div className="confetti" aria-hidden>
      {bits.map((_, i) => (
        <span
          key={i}
          style={{
            left: `${Math.random() * 100}%`,
            background: colors[i % colors.length],
            animationDelay: `${Math.random() * 0.6}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </div>
  );
}

export default function ChallengePlay({ str }: { str: Strings }) {
  const [points, setPoints] = useState<Pt[]>([
    { x: -3, y: -0.5 },
    { x: -1.2, y: 0.5 },
    { x: 0.5, y: 0.7 },
    { x: 2, y: -0.2 },
    { x: 3, y: -0.8 },
  ]);
  const [method, setMethod] = useState<Method>("spline");
  const [showTarget, setShowTarget] = useState(true);

  const sorted = useMemo(
    () => [...points].sort((a, b) => a.x - b.x),
    [points]
  );
  const fn = useMemo(() => makeEvaluator(method, sorted), [method, sorted]);

  // win condition: max abs error vs target over the domain is small
  const maxErr = useMemo(() => {
    let m = 0;
    for (let i = 0; i <= 80; i++) {
      const x = DOMAIN[0] + ((DOMAIN[1] - DOMAIN[0]) * i) / 80;
      const e = Math.abs(fn(x) - target(x));
      if (Number.isFinite(e)) m = Math.max(m, e);
    }
    return m;
  }, [fn]);
  const won = maxErr < 0.18;

  const curves: Curve[] = [
    { fn, color: METHOD_COLORS[method], label: str.methods[method] },
  ];
  if (showTarget) curves.push({ fn: target, color: "#8aa0b5", label: "cos x", dashed: true });

  const updatePoint = (i: number, x: number, y: number) =>
    setPoints((ps) => {
      // i indexes the rendered (unsorted) array
      return ps.map((p, k) => (k === i ? { x, y } : p));
    });

  return (
    <div className="challenge">
      <div className="challenge-head">
        <h2>{str.nav.playground}</h2>
        <p className="intro">{str.tagline}</p>
      </div>

      <div className="challenge-bar">
        <div className="methodpills">
          {(Object.keys(METHOD_COLORS) as Method[]).map((m) => (
            <button
              key={m}
              className={`pill ${method === m ? "on" : ""}`}
              style={method === m ? { background: METHOD_COLORS[m], borderColor: METHOD_COLORS[m] } : {}}
              onClick={() => setMethod(m)}
            >
              {str.methods[m]}
            </button>
          ))}
        </div>
        <label className="chip">
          <input
            type="checkbox"
            checked={showTarget}
            onChange={() => setShowTarget((s) => !s)}
          />
          {str.ui.showCos}
        </label>
      </div>

      <div className="challenge-plotwrap">
        <Plot
          points={points}
          curves={curves}
          domain={DOMAIN}
          range={RANGE}
          onDrag={updatePoint}
          width={720}
          height={440}
        />
        {won && <Confetti />}
      </div>

      <div className={`challenge-status ${won ? "win" : ""}`}>
        {won ? (
          <strong>{str.ui.nailedIt}</strong>
        ) : (
          <span>
            🎯 {str.ui.challengeHint} <em>(max Δ = {maxErr.toFixed(2)})</em>
          </span>
        )}
      </div>
    </div>
  );
}
