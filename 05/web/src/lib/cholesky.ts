import { Matrix, clone, isSquare, isSymmetric, rows, tidy, zeros } from "./matrix";

export interface CholStep {
  descEn: string;
  descHu: string;
  /** partial L snapshot after this step */
  L: Matrix;
  /** the entry just computed */
  target: [number, number];
  /** the equation being solved, as KaTeX */
  equation: string;
  /** the resulting value */
  value: number;
}

export interface CholResult {
  ok: boolean;
  error?: "not-square" | "not-symmetric" | "not-pd";
  /** entry index where a non-positive value appeared under the square root */
  failAt?: [number, number];
  steps: CholStep[];
  L?: Matrix;
}

/**
 * Cholesky factorization A = L Lᵀ following Algorithm 5.8, choosing positive
 * diagonal entries. Produces a per-entry step trace with the equation solved
 * at each entry (matching the slide-deck presentation).
 */
export function choleskyFactorize(input: Matrix): CholResult {
  if (!isSquare(input)) return { ok: false, error: "not-square", steps: [] };
  if (!isSymmetric(input)) return { ok: false, error: "not-symmetric", steps: [] };

  const n = rows(input);
  const a = clone(input);
  const L = zeros(n);
  const steps: CholStep[] = [];

  for (let j = 0; j < n; j++) {
    // diagonal entry l_jj
    let sum = 0;
    const terms: string[] = [];
    for (let k = 0; k < j; k++) {
      sum += L[j][k] * L[j][k];
      terms.push(`l_{${j + 1}${k + 1}}^2`);
    }
    const underRoot = tidy(a[j][j] - sum);
    if (underRoot <= 0) {
      return { ok: false, error: "not-pd", failAt: [j, j], steps };
    }
    L[j][j] = tidy(Math.sqrt(underRoot));
    const rhs =
      terms.length > 0
        ? `a_{${j + 1}${j + 1}} - (${terms.join(" + ")})`
        : `a_{${j + 1}${j + 1}}`;
    steps.push({
      descEn: `Diagonal entry of column ${j + 1}: solve for l${sub(j + 1)}${sub(
        j + 1
      )} (positive root).`,
      descHu: `A ${j + 1}. oszlop főátlóbeli eleme: l${sub(j + 1)}${sub(
        j + 1
      )} meghatározása (pozitív gyök).`,
      L: clone(L),
      target: [j, j],
      equation: `l_{${j + 1}${j + 1}} = \\sqrt{${rhs}} = \\sqrt{${num(
        underRoot
      )}} = ${num(L[j][j])}`,
      value: L[j][j],
    });

    // entries below the diagonal in column j
    for (let i = j + 1; i < n; i++) {
      let s = 0;
      const tk: string[] = [];
      for (let k = 0; k < j; k++) {
        s += L[i][k] * L[j][k];
        tk.push(`l_{${i + 1}${k + 1}} l_{${j + 1}${k + 1}}`);
      }
      L[i][j] = tidy((a[i][j] - s) / L[j][j]);
      const rhs2 =
        tk.length > 0
          ? `\\dfrac{a_{${i + 1}${j + 1}} - (${tk.join(" + ")})}{l_{${j + 1}${j + 1}}}`
          : `\\dfrac{a_{${i + 1}${j + 1}}}{l_{${j + 1}${j + 1}}}`;
      steps.push({
        descEn: `Below-diagonal entry l${sub(i + 1)}${sub(j + 1)} of column ${j + 1}.`,
        descHu: `A ${j + 1}. oszlop főátló alatti eleme: l${sub(i + 1)}${sub(j + 1)}.`,
        L: clone(L),
        target: [i, j],
        equation: `l_{${i + 1}${j + 1}} = ${rhs2} = ${num(L[i][j])}`,
        value: L[i][j],
      });
    }
  }

  return { ok: true, steps, L };
}

function num(x: number): string {
  return Number.isInteger(x) ? String(x) : String(tidy(x));
}

const SUBS = "₀₁₂₃₄₅₆₇₈₉";
function sub(n: number): string {
  return String(n)
    .split("")
    .map((d) => SUBS[Number(d)] ?? d)
    .join("");
}
