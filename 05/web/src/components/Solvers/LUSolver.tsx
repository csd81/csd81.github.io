import { useMemo, useState } from "react";
import { useT } from "../../i18n/useT";
import { useAppStore } from "../../store/useAppStore";
import { MatrixInput } from "../MatrixInput";
import { MatrixDisplay, type CellState } from "../MatrixDisplay";
import { StepPlayer } from "../StepPlayer";
import { Math as Tex } from "../Math/Math";
import { luFactorize } from "../../lib/lu";
import { multiply, approxEqual, toLatex, zeros, type Matrix } from "../../lib/matrix";
import "./solver.css";

const EXAMPLE: Matrix = [
  [1, -2, -2, -2],
  [2, -1, 2, 4],
  [-1, 2, 3, -4],
  [-2, 1, 4, -2],
];

function blank(n: number): Matrix {
  return zeros(n);
}

export function LUSolver() {
  const { t, lang } = useT();
  const recordSolve = useAppStore((s) => s.recordSolve);
  const [n, setN] = useState(4);
  const [A, setA] = useState<Matrix>(EXAMPLE);
  const [submitted, setSubmitted] = useState<Matrix | null>(null);
  const [step, setStep] = useState(0);
  const [verified, setVerified] = useState<boolean | null>(null);

  const result = useMemo(() => (submitted ? luFactorize(submitted) : null), [submitted]);

  const run = () => {
    const r = luFactorize(A);
    setSubmitted(A);
    setStep(0);
    setVerified(null);
    if (r.ok) recordSolve("lu");
  };

  const resize = (size: number) => {
    setN(size);
    setA((prev) => {
      const next = blank(size);
      for (let i = 0; i < Math.min(size, prev.length); i++)
        for (let j = 0; j < Math.min(size, prev[0].length); j++) next[i][j] = prev[i][j];
      return next;
    });
    setSubmitted(null);
  };

  const states: Record<string, CellState> = {};
  if (result?.ok) {
    const s = result.steps[step];
    if (s.pivot) states[`${s.pivot[0]},${s.pivot[1]}`] = "pivot";
    for (const [i, j] of s.highlight) states[`${i},${j}`] = "highlight";
  }

  const verify = () => {
    if (!result?.ok || !result.L || !result.U) return;
    setVerified(approxEqual(multiply(result.L, result.U), submitted!));
  };

  return (
    <div className="solver card">
      <div className="solver__head">
        <h3>{t("lu_solver")}</h3>
        <div className="solver__controls">
          <label className="field">
            {t("matrix_size")}
            <select value={n} onChange={(e) => resize(Number(e.target.value))}>
              {[2, 3, 4, 5].map((s) => (
                <option key={s} value={s}>
                  {s}×{s}
                </option>
              ))}
            </select>
          </label>
          <button className="btn sm" onClick={() => { setA(EXAMPLE); setN(4); setSubmitted(null); }}>
            {t("load_example")}
          </button>
          <button className="btn sm" onClick={() => { setA(blank(n)); setSubmitted(null); }}>
            {t("reset")}
          </button>
        </div>
      </div>

      <div className="solver__io">
        <div>
          <div className="solver__label">{t("your_matrix")}</div>
          <MatrixInput matrix={A} onChange={setA} label={t("your_matrix")} />
        </div>
        <button className="btn primary" onClick={run}>
          {t("factorize")} →
        </button>
      </div>

      {result && !result.ok && (
        <p className="solver__error">
          {result.error === "not-square" && t("err_not_square")}
          {result.error === "zero-pivot" && t("err_zero_pivot")}
        </p>
      )}

      {result?.ok && (
        <div className="solver__out">
          <StepPlayer count={result.steps.length} index={step} onIndex={setStep} />
          <p className="solver__desc">
            {lang === "en" ? result.steps[step].descEn : result.steps[step].descHu}
          </p>
          {result.steps[step].expr && (
            <div className="solver__expr">
              <Tex tex={result.steps[step].expr!} display />
            </div>
          )}
          <div className="solver__tableau">
            <MatrixDisplay matrix={result.steps[step].tableau} states={states} ariaLabel="tableau" />
          </div>

          {step === result.steps.length - 1 && (
            <div className="solver__final">
              <div className="solver__factor">
                <span>L =</span>
                <Tex tex={toLatex(result.L!)} />
              </div>
              <div className="solver__factor">
                <span>U =</span>
                <Tex tex={toLatex(result.U!)} />
              </div>
              <button className="btn sm" onClick={verify}>
                {t("verify")}
              </button>
              {verified === true && <span className="solver__ok">✓ {t("verify_ok")}</span>}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
