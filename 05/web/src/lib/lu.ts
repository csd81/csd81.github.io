import {
  Matrix,
  clone,
  identity,
  isSquare,
  rows,
  tidy,
  toLatex,
} from "./matrix";

export interface LUStep {
  /** human-facing description tokens for both languages */
  descEn: string;
  descHu: string;
  /** the working matrix snapshot after this step (Gaussian elimination tableau) */
  tableau: Matrix;
  /** cells to highlight as "just computed" (multipliers) */
  highlight: [number, number][];
  /** the pivot cell being used as reference, if any */
  pivot?: [number, number];
  /** KaTeX expression shown alongside (e.g. the multiplier formula) */
  expr?: string;
}

export interface LUResult {
  ok: boolean;
  error?: "not-square" | "zero-pivot";
  /** index of failing pivot when error === "zero-pivot" */
  failAt?: number;
  steps: LUStep[];
  L?: Matrix;
  U?: Matrix;
}

/**
 * Doolittle LU factorization via Gaussian elimination WITHOUT row interchange.
 * Mirrors the textbook convention: multipliers l_ij are written into the
 * positions that get eliminated, so the final tableau holds L (below diagonal)
 * and U (on/above diagonal) together.
 */
export function luFactorize(input: Matrix): LUResult {
  if (!isSquare(input)) return { ok: false, error: "not-square", steps: [] };
  const n = rows(input);
  const t = clone(input); // working tableau (combined L\U)
  const steps: LUStep[] = [];

  steps.push({
    descEn: "Start from the matrix A. We eliminate column by column.",
    descHu: "Induljunk az A mátrixból. Oszloponként haladva nullázunk ki.",
    tableau: clone(t),
    highlight: [],
  });

  for (let k = 0; k < n - 1; k++) {
    const pivot = t[k][k];
    if (Math.abs(pivot) < 1e-12) {
      return { ok: false, error: "zero-pivot", failAt: k, steps };
    }
    const created: [number, number][] = [];
    for (let i = k + 1; i < n; i++) {
      const l = tidy(t[i][k] / pivot);
      // store multiplier in the eliminated position
      t[i][k] = l;
      for (let j = k + 1; j < n; j++) {
        t[i][j] = tidy(t[i][j] - l * t[k][j]);
      }
      created.push([i, k]);
    }
    steps.push({
      descEn: `Eliminate below pivot a${sub(k + 1)}${sub(k + 1)} = ${fmtNum(
        pivot
      )}. Each multiplier l = a/${fmtNum(pivot)} is stored in place of the zeroed entry.`,
      descHu: `A a${sub(k + 1)}${sub(k + 1)} = ${fmtNum(
        pivot
      )} pivot alatti elemek kinullázása. Minden l = a/${fmtNum(
        pivot
      )} szorzót a kinullázott elem helyére írunk.`,
      tableau: clone(t),
      highlight: created,
      pivot: [k, k],
      expr: `l_{ik} = \\dfrac{a_{ik}}{a_{${k + 1}${k + 1}}}`,
    });
  }

  if (Math.abs(t[n - 1][n - 1]) < 1e-12) {
    // last pivot is zero -> U is singular; LU still "exists" but flag it
    // (kept as ok with a note via zero on diagonal). We allow it but mark error.
  }

  // Split combined tableau into L and U
  const L = identity(n);
  const U = identity(n).map((r) => r.map(() => 0)) as Matrix;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i > j) L[i][j] = t[i][j];
      else U[i][j] = t[i][j];
    }
  }

  steps.push({
    descEn:
      "Done. Entries on and above the diagonal form U; entries below the diagonal are the L multipliers (L has unit diagonal).",
    descHu:
      "Kész. A főátlóban és felette U elemei; a főátló alatt az L szorzói állnak (L főátlójában csupa egyes).",
    tableau: clone(t),
    highlight: [],
  });

  return { ok: true, steps, L, U };
}

function fmtNum(x: number): string {
  return Number.isInteger(x) ? String(x) : String(tidy(x));
}

// unicode subscripts for short inline labels in plain strings
const SUBS = "₀₁₂₃₄₅₆₇₈₉";
function sub(n: number): string {
  return String(n)
    .split("")
    .map((d) => SUBS[Number(d)] ?? d)
    .join("");
}

export { toLatex };
