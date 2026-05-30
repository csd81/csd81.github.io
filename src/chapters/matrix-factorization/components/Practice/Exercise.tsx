import { useMemo, useState } from "react";
import { useT } from "../../i18n/useT";
import { useAppStore } from "../../store/useAppStore";
import { MatrixInput } from "../MatrixInput";
import { Math, RichText } from "../Math/Math";
import { luFactorize } from "../../lib/lu";
import { choleskyFactorize } from "../../lib/cholesky";
import { approxEqual, toLatex, zeros, type Matrix } from "../../lib/matrix";
import type { Exercise as Ex } from "../../content/exercises";
import "./practice.css";

export function Exercise({ ex }: { ex: Ex }) {
  const { tb } = useT();
  const done = useAppStore((s) => s.progress.exercisesDone.includes(ex.id));

  return (
    <div className={`exercise card${done ? " is-done" : ""}`}>
      <div className="exercise__prompt">
        {done && <span className="exercise__check">✓</span>}
        <RichText text={tb(ex.prompt)} />
      </div>
      {ex.kind === "mcq" ? (
        <McqBody ex={ex} />
      ) : ex.kind === "open" ? (
        <OpenBody ex={ex} />
      ) : (
        <>
          <FactorBody ex={ex} />
          <div className="exercise__given">
            <span>A =</span>
            <Math tex={toLatex(ex.matrix)} />
          </div>
        </>
      )}
    </div>
  );
}

/* ---------------- factorization exercises ---------------- */
function FactorBody({ ex }: { ex: Extract<Ex, { kind: "factor-lu" | "factor-cholesky" }> }) {
  const { t, tb } = useT();
  const record = useAppStore((s) => s.recordExercise);
  const n = ex.matrix.length;
  const isLU = ex.kind === "factor-lu";

  const solution = useMemo(
    () => (isLU ? luFactorize(ex.matrix) : choleskyFactorize(ex.matrix)),
    [ex, isLU]
  );

  // Structural locks: L is lower triangular (above-diagonal = 0 locked); for LU its
  // diagonal is locked to 1. U is upper triangular (below-diagonal = 0 locked).
  const lLock = (i: number, j: number) => i < j || (isLU && i === j);
  const uLock = (i: number, j: number) => i > j;

  const initL = (): Matrix =>
    Array.from({ length: n }, (_, i) =>
      Array.from({ length: n }, (_, j) => (isLU && i === j ? 1 : 0))
    );

  const [L, setL] = useState<Matrix>(initL);
  const [U, setU] = useState<Matrix>(zeros(n));
  const [status, setStatus] = useState<"idle" | "ok" | "bad">("idle");
  const [showHint, setShowHint] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const check = () => {
    if (!solution.ok) return;
    let ok = false;
    if (isLU && "U" in solution && solution.L && solution.U) {
      ok = approxEqual(L, solution.L) && approxEqual(U, solution.U);
    } else if (!isLU && solution.L) {
      ok = approxEqual(L, solution.L);
    }
    setStatus(ok ? "ok" : "bad");
    if (ok) record(ex.id);
  };

  return (
    <div className="exercise__body">
      <div className="exercise__answers">
        <div>
          <div className="exercise__sublabel">{t("your_answer_L")}</div>
          <MatrixInput matrix={L} onChange={setL} readonlyCell={lLock} />
        </div>
        {isLU && (
          <div>
            <div className="exercise__sublabel">{t("your_answer_U")}</div>
            <MatrixInput matrix={U} onChange={setU} readonlyCell={uLock} />
          </div>
        )}
      </div>

      <div className="exercise__actions">
        <button className="btn primary sm" onClick={check}>
          {t("check")}
        </button>
        <button className="btn sm ghost" onClick={() => setShowHint((h) => !h)}>
          💡 {t("show_hint")}
        </button>
        <button className="btn sm ghost" onClick={() => setRevealed((r) => !r)}>
          {t("show_answer")}
        </button>
        {status === "ok" && <span className="exercise__ok">{t("correct")}</span>}
        {status === "bad" && <span className="exercise__bad">{t("incorrect")}</span>}
      </div>

      {showHint && <p className="exercise__hint">{tb(ex.hint)}</p>}

      {revealed && solution.ok && (
        <div className="exercise__reveal">
          <span>L =</span>
          <Math tex={toLatex(solution.L!)} />
          {isLU && "U" in solution && solution.U && (
            <>
              <span>U =</span>
              <Math tex={toLatex(solution.U)} />
            </>
          )}
        </div>
      )}
    </div>
  );
}

/* ---------------- multiple choice ---------------- */
function McqBody({ ex }: { ex: Extract<Ex, { kind: "mcq" }> }) {
  const { t, tb } = useT();
  const record = useAppStore((s) => s.recordExercise);
  const [choice, setChoice] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);

  const submit = (i: number) => {
    setChoice(i);
    setChecked(true);
    if (i === ex.correct) record(ex.id);
  };

  return (
    <div className="exercise__body">
      <div className="mcq">
        {ex.options.map((opt, i) => {
          const state =
            checked && i === ex.correct
              ? "ok"
              : checked && i === choice
              ? "bad"
              : "";
          return (
            <button
              key={i}
              className={`mcq__opt ${state}`}
              onClick={() => submit(i)}
              disabled={checked}
            >
              <RichText text={tb(opt)} />
            </button>
          );
        })}
      </div>
      {checked && (
        <p className={choice === ex.correct ? "exercise__ok" : "exercise__bad"}>
          {choice === ex.correct ? t("correct") : t("incorrect")}
        </p>
      )}
      {checked && (
        <p className="exercise__explain">
          <RichText text={tb(ex.explanation)} />
        </p>
      )}
    </div>
  );
}

/* ---------------- open / proof ---------------- */
function OpenBody({ ex }: { ex: Extract<Ex, { kind: "open" }> }) {
  const { t, tb } = useT();
  const record = useAppStore((s) => s.recordExercise);
  const [shown, setShown] = useState(false);

  return (
    <div className="exercise__body">
      <div className="exercise__actions">
        <button
          className="btn sm primary"
          onClick={() => {
            setShown((s) => !s);
            record(ex.id);
          }}
        >
          {t("show_answer")}
        </button>
      </div>
      {shown && (
        <p className="exercise__model">
          <RichText text={tb(ex.modelAnswer)} />
        </p>
      )}
    </div>
  );
}
