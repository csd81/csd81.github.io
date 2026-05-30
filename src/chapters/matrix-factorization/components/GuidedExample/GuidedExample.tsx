import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useT } from "../../i18n/useT";
import { MatrixDisplay, type CellState } from "../MatrixDisplay";
import { StepPlayer } from "../StepPlayer";
import { Math } from "../Math/Math";
import { luFactorize } from "../../lib/lu";
import { choleskyFactorize } from "../../lib/cholesky";
import type { Matrix } from "../../lib/matrix";
import "../Solvers/solver.css";

const LU_EXAMPLE: Matrix = [
  [1, -2, -2, -2],
  [2, -1, 2, 4],
  [-1, 2, 3, -4],
  [-2, 1, 4, -2],
];
const CH_EXAMPLE: Matrix = [
  [4, -8, 4],
  [-8, 17, -11],
  [4, -11, 22],
];

export function GuidedExample({ kind }: { kind: "lu" | "cholesky" }) {
  const { t, lang } = useT();
  const [step, setStep] = useState(0);

  const lu = useMemo(() => luFactorize(LU_EXAMPLE), []);
  const ch = useMemo(() => choleskyFactorize(CH_EXAMPLE), []);

  if (kind === "lu" && lu.ok) {
    const s = lu.steps[step];
    const states: Record<string, CellState> = {};
    if (s.pivot) states[`${s.pivot[0]},${s.pivot[1]}`] = "pivot";
    for (const [i, j] of s.highlight) states[`${i},${j}`] = "highlight";
    return (
      <Frame
        title={lang === "en" ? "Example 5.3 — LU (4×4)" : "5.3. példa — LU (4×4)"}
        count={lu.steps.length}
        step={step}
        setStep={setStep}
        desc={lang === "en" ? s.descEn : s.descHu}
        expr={s.expr}
        tableau={s.tableau}
        states={states}
        t={t}
      />
    );
  }

  if (kind === "cholesky" && ch.ok) {
    const s = ch.steps[step];
    const states: Record<string, CellState> = {};
    states[`${s.target[0]},${s.target[1]}`] = "active";
    for (let k = 0; k < step; k++) {
      const p = ch.steps[k].target;
      if (!(p[0] === s.target[0] && p[1] === s.target[1])) states[`${p[0]},${p[1]}`] = "done";
    }
    return (
      <Frame
        title={lang === "en" ? "Example 5.7 — Cholesky (3×3)" : "5.7. példa — Cholesky (3×3)"}
        count={ch.steps.length}
        step={step}
        setStep={setStep}
        desc={lang === "en" ? s.descEn : s.descHu}
        expr={s.equation}
        tableau={s.L}
        states={states}
        t={t}
      />
    );
  }

  return null;
}

function Frame({
  title,
  count,
  step,
  setStep,
  desc,
  expr,
  tableau,
  states,
  t,
}: {
  title: string;
  count: number;
  step: number;
  setStep: (i: number) => void;
  desc: string;
  expr?: string;
  tableau: Matrix;
  states: Record<string, CellState>;
  t: ReturnType<typeof useT>["t"];
}) {
  return (
    <div className="solver card">
      <div className="solver__head">
        <h3>{title}</h3>
      </div>
      <StepPlayer count={count} index={step} onIndex={setStep} interval={1700} />
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <p className="solver__desc">{desc}</p>
          {expr && (
            <div className="solver__expr">
              <Math tex={expr} display />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="solver__tableau">
        <MatrixDisplay matrix={tableau} states={states} ariaLabel={t("result")} />
      </div>
    </div>
  );
}
