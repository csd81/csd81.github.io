import { F, ZERO, isZero, toPlain, type Frac } from './fraction';
import type { FracMatrix, Step } from './types';

export interface TridiagonalInput {
  /** Sub-diagonal a_1..a_{n-1} (length n-1). */
  a: Frac[];
  /** Main diagonal d_1..d_n (length n). */
  d: Frac[];
  /** Super-diagonal c_1..c_{n-1} (length n-1). */
  c: Frac[];
  /** Right-hand side b_1..b_n (length n). */
  b: Frac[];
}

export interface TridiagonalResult {
  steps: Step[];
  solution: Frac[] | null;
  singular: boolean;
}

/** Assemble the augmented matrix snapshot for the current Thomas state. */
function snapshot(
  a: Frac[],
  d: Frac[],
  c: Frac[],
  b: Frac[],
  eliminatedUpTo: number,
): FracMatrix {
  const n = d.length;
  const m: FracMatrix = [];
  for (let i = 0; i < n; i++) {
    const row: Frac[] = new Array(n + 1).fill(ZERO);
    row[i] = d[i];
    if (i < n - 1) row[i + 1] = c[i];
    if (i > 0) row[i - 1] = i <= eliminatedUpTo ? ZERO : a[i - 1];
    row[n] = b[i];
    m.push(row);
  }
  return m;
}

/**
 * Thomas algorithm (Gaussian elimination specialised for tridiagonal systems),
 * mirroring Algorithm 3.37. Runs in O(n).
 */
export function solveTridiagonal(input: TridiagonalInput): TridiagonalResult {
  const n = input.d.length;
  const a = input.a.slice();
  const d = input.d.slice();
  const c = input.c.slice();
  const b = input.b.slice();
  const steps: Step[] = [];

  steps.push({
    kind: 'init',
    matrix: snapshot(a, d, c, b, 0),
    coeffCols: n,
    varOrder: Array.from({ length: n }, (_, i) => i),
    caption: {
      en: 'Initial tridiagonal system (A | b).',
      hu: 'Kiindulási tridiagonális rendszer (A | b).',
    },
  });

  // Forward elimination.
  for (let i = 1; i < n; i++) {
    if (isZero(d[i - 1])) {
      steps.push({
        kind: 'pivot-select',
        matrix: snapshot(a, d, c, b, i - 1),
        coeffCols: n,
        varOrder: Array.from({ length: n }, (_, k) => k),
        pivot: [i - 1, i - 1],
        caption: {
          en: `Zero pivot d${i} — the Thomas algorithm cannot continue without pivoting.`,
          hu: `Nulla főelem d${i} — a Thomas-algoritmus főelemkiválasztás nélkül nem folytatható.`,
        },
      });
      return { steps, solution: null, singular: true };
    }
    const temp = a[i - 1].div(d[i - 1]);
    d[i] = d[i].sub(temp.mul(c[i - 1]));
    b[i] = b[i].sub(temp.mul(b[i - 1]));
    steps.push({
      kind: 'eliminate',
      matrix: snapshot(a, d, c, b, i),
      coeffCols: n,
      varOrder: Array.from({ length: n }, (_, k) => k),
      pivot: [i - 1, i - 1],
      multiplier: temp,
      changed: [
        [i, i - 1],
        [i, i],
        [i, n],
      ],
      caption: {
        en: `Eliminate a${i}: m = a${i}/d${i} = ${toPlain(temp)}; update d${i + 1} and b${i + 1}.`,
        hu: `a${i} kiküszöbölése: m = a${i}/d${i} = ${toPlain(temp)}; d${i + 1} és b${i + 1} frissítése.`,
      },
    });
  }

  if (isZero(d[n - 1])) {
    return { steps, solution: null, singular: true };
  }

  // Back substitution.
  const x: Frac[] = new Array(n);
  x[n - 1] = b[n - 1].div(d[n - 1]);
  steps.push({
    kind: 'back-sub',
    matrix: snapshot(a, d, c, b, n - 1),
    coeffCols: n,
    varOrder: Array.from({ length: n }, (_, k) => k),
    pivot: [n - 1, n - 1],
    caption: {
      en: `Back-substitution: x${n} = b${n}/d${n} = ${toPlain(x[n - 1])}.`,
      hu: `Visszahelyettesítés: x${n} = b${n}/d${n} = ${toPlain(x[n - 1])}.`,
    },
  });
  for (let i = n - 2; i >= 0; i--) {
    x[i] = b[i].sub(c[i].mul(x[i + 1])).div(d[i]);
    steps.push({
      kind: 'back-sub',
      matrix: snapshot(a, d, c, b, n - 1),
      coeffCols: n,
      varOrder: Array.from({ length: n }, (_, k) => k),
      pivot: [i, i],
      caption: {
        en: `Back-substitution: x${i + 1} = (b${i + 1} − c${i + 1}·x${i + 2})/d${i + 1} = ${toPlain(x[i])}.`,
        hu: `Visszahelyettesítés: x${i + 1} = (b${i + 1} − c${i + 1}·x${i + 2})/d${i + 1} = ${toPlain(x[i])}.`,
      },
    });
  }

  return { steps, solution: x, singular: false };
}

export { F };
