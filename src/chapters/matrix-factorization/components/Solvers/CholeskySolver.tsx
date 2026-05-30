import { useMemo, useState } from "react";
import { useT } from "../../i18n/useT";
import { useAppStore } from "../../store/useAppStore";
import { MatrixInput } from "../MatrixInput";
import { MatrixDisplay, type CellState } from "../MatrixDisplay";
import { StepPlayer } from "../StepPlayer";
import { Math as Tex } from "../Math/Math";
import { choleskyFactorize } from "../../lib/cholesky";
import { multiply, transpose, approxEqual, toLatex, zeros, type Matrix } from "../../lib/matrix";
import "./solver.css";

const EXAMPLE: Matrix = [
  [4, -8, 4],
  [-8, 17, -11],
  [4, -11, 22],
];

export function CholeskySolver() {
  const { t, lang } = useT();
  const recordSolve = useAppStore((s) => s.recordSolve);
  const [n, setN] = useState(3);
  const [A, setA] = useState<Matrix>(EXAMPLE);
  const [submitted, setSubmitted] = useState<Matrix | null>(null);
  const [step, setStep] = useState(0);
  const [verified, setVerified] = useState<boolean | null>(null);

  const result = useMemo(() => (submitted ? choleskyFactorize(submitted) : null), [submitted]);

  const run = () => {
    const r = choleskyFactorize(A);
    setSubmitted(A);
    setStep(0);
    setVerified(null);
    if (r.ok) recordSolve("cholesky");
  };

  const resize = (size: number) => {
    setN(size);
    setA((prev) => {
      const next = zeros(size);
      for (let i = 0; i < Math.min(size, prev.length); i++)
        for (let j = 0; j < Math.min(size, prev[0].length); j++) next[i][j] = prev[i][j];
      return next;
    });
    setSubmitted(null);
  };

  const states: Record<string, CellState> = {};
  if (result?.ok) {
    const s = result.steps[step];
    states[`${s.target[0]},${s.target[1]}`] = "active";
    for (let k = 0; k <= step - 1; k++) {
      const prev = result.steps[k].target;
      if (!(prev[0] === s.target[0] && prev[1] === s.target[1]))
        states[`${prev[0]},${prev[1]}`] = "done";
    }
  }

  const verify = () => {
    if (!result?.ok || !result.L) return;
    setVerified(approxEqual(multiply(result.L, transpose(result.L)), submitted!));
  };

  return (
    <div className="solver card">
      <div className="solver__head">
        <h3>{t("cholesky_solver")}</h3>
        <div className="solver__controls">
          <label className="field">
            {t("matrix_size")}
            <select value={n} onChange={(e) => resize(Number(e.target.value))}>
              {[2, 3, 4].map((s) => (
                <option key={s} value={s}>
                  {s}×{s}
                </option>
              ))}
            </select>
          </label>
          <button className="btn sm" onClick={() => { setA(EXAMPLE); setN(3); setSubmitted(null); }}>
            {t("load_example")}
          </button>
          <button className="btn sm" onClick={() => { setA(zeros(n)); setSubmitted(null); }}>
            {t("reset")}
          </button>
        </div>
      </div>

      <div className="solver__io">
        <div>
          <div className="solver__label">{t("your_matrix")}</div>
          <MatrixInput matrix={A} onChange={setA} label={t("your_matrix")} />
          <p className="solver__hint-note">A = Aᵀ (symmetric, positive definite)</p>
        </div>
        <button className="btn primary" onClick={run}>
          {t("factorize")} →
        </button>
      </div>

      {result && !result.ok && (
        <p className="solver__error">
          {result.error === "not-square" && t("err_not_square")}
          {result.error === "not-symmetric" && t("err_not_symmetric")}
          {result.error === "not-pd" && t("err_not_pd")}
        </p>
      )}

      {result?.ok && (
        <div className="solver__out">
          <StepPlayer count={result.steps.length} index={step} onIndex={setStep} />
          <p className="solver__desc">
            {lang === "en" ? result.steps[step].descEn : result.steps[step].descHu}
          </p>
          <div className="solver__expr">
            <Tex tex={result.steps[step].equation} display />
          </div>
          <div className="solver__tableau">
            <MatrixDisplay matrix={result.steps[step].L} states={states} ariaLabel="L so far" />
          </div>

          {step === result.steps.length - 1 && (
            <div className="solver__final">
              <div className="solver__factor">
                <span>L =</span>
                <Tex tex={toLatex(result.L!)} />
              </div>
              <div className="solver__factor">
                <span>Lᵀ =</span>
                <Tex tex={toLatex(transpose(result.L!))} />
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
