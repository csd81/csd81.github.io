import { describe, it, expect } from 'vitest';
import { F, toPlain, type Frac } from './fraction';
import { mat, vec, matrixEqualsPlain, matrixEquals, augment } from './matrix';
import { runElimination } from './gauss';
import { solveSystem } from './solve';
import { invertMatrix } from './inverse';
import { determinant } from './determinant';
import { solveTridiagonal } from './tridiagonal';
import type { FracMatrix, Step } from './types';

/** True if some step snapshot equals the given plain matrix exactly. */
function containsMatrix(steps: Step[], plain: Array<Array<number | string>>): boolean {
  const target = mat(plain);
  return steps.some((s) => matrixEquals(s.matrix, target));
}

/** True if any cell of any step equals the given fraction value. */
function containsValue(steps: Step[], value: Frac): boolean {
  return steps.some((s) => s.matrix.some((row) => row.some((x) => x.equals(value))));
}

function solutionPlain(sol: Frac[] | null): string[] {
  return (sol ?? []).map(toPlain);
}

describe('Gaussian elimination — Example 3.22 (no pivoting)', () => {
  const A = mat([
    [1, -2, -2, -2],
    [2, -1, 2, 4],
    [-1, 2, 3, -4],
    [-2, 1, 4, -2],
  ]);
  const b = vec([-11, -8, 27, 28]);

  it('reproduces the textbook intermediate matrices (3.6)–(3.8)', () => {
    const res = solveSystem(A, b, { method: 'gauss', pivoting: 'none' });
    // (3.6)
    expect(
      containsMatrix(res.steps, [
        [1, -2, -2, -2, -11],
        [0, 3, 6, 8, 14],
        [0, 0, 1, -6, 16],
        [0, -3, 0, -6, 6],
      ]),
    ).toBe(true);
    // (3.7)
    expect(
      containsMatrix(res.steps, [
        [1, -2, -2, -2, -11],
        [0, 3, 6, 8, 14],
        [0, 0, 1, -6, 16],
        [0, 0, 6, 2, 20],
      ]),
    ).toBe(true);
    // (3.8)
    expect(
      containsMatrix(res.steps, [
        [1, -2, -2, -2, -11],
        [0, 3, 6, 8, 14],
        [0, 0, 1, -6, 16],
        [0, 0, 0, 38, -76],
      ]),
    ).toBe(true);
  });

  it('gives solution (-3, 2, 4, -2) and determinant 114', () => {
    const res = solveSystem(A, b, { method: 'gauss', pivoting: 'none' });
    expect(solutionPlain(res.solution)).toEqual(['-3', '2', '4', '-2']);
    expect(res.determinant && toPlain(res.determinant)).toBe('114');
  });
});

describe('Gaussian elimination — Example 3.24 / 3.27', () => {
  const A = mat([
    [2, -1, 0, -3],
    [2, -1, 1, 5],
    [-3, 1, 1, -2],
    [2, 4, 0, -1],
  ]);
  const b = vec([8, 2, -5, 21]);

  it('without pivoting stalls on a zero pivot (Example 3.24)', () => {
    const res = solveSystem(A, b, { method: 'gauss', pivoting: 'none' });
    expect(res.singular).toBe(true);
    expect(res.solution).toBeNull();
  });

  it('with partial pivoting solves to (4, 3, 2, -1) and shows 14/3 and -143/24 (Example 3.27)', () => {
    const res = solveSystem(A, b, { method: 'gauss', pivoting: 'partial' });
    expect(res.singular).toBe(false);
    expect(solutionPlain(res.solution)).toEqual(['4', '3', '2', '-1']);
    expect(containsValue(res.steps, F(14, 3))).toBe(true);
    expect(containsValue(res.steps, F(-143, 24))).toBe(true);
  });
});

describe('Complete pivoting — Example 3.29', () => {
  const A = mat([
    [1, -2, -2, -2],
    [2, -1, 2, 4],
    [-1, 2, 3, -4],
    [-2, 1, 4, -2],
  ]);
  const b = vec([-11, -8, 27, 28]);

  it('tracks column swaps and recovers solution (-3, 2, 4, -2)', () => {
    const res = solveSystem(A, b, { method: 'gauss', pivoting: 'complete' });
    expect(solutionPlain(res.solution)).toEqual(['-3', '2', '4', '-2']);
    // a column swap must have occurred
    expect(res.steps.some((s) => s.kind === 'col-swap')).toBe(true);
  });
});

describe('Gauss–Jordan — Example 3.35', () => {
  const A = mat([
    [1, -2, -2, -2],
    [2, -1, 2, 4],
    [-1, 2, 3, -4],
    [-2, 1, 4, -2],
  ]);
  const b = vec([-11, -8, 27, 28]);

  it('reduces to identity and reads off (-3, 2, 4, -2)', () => {
    const res = solveSystem(A, b, { method: 'gauss-jordan', pivoting: 'none' });
    expect(solutionPlain(res.solution)).toEqual(['-3', '2', '4', '-2']);
    // coefficient block of final matrix is the identity
    const finalCoeff: FracMatrix = res.steps[res.steps.length - 1].matrix.map((r) =>
      r.slice(0, 4),
    );
    expect(matrixEqualsPlain(finalCoeff, [
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ])).toBe(true);
  });
});

describe('Matrix inversion — Example 3.38', () => {
  const A = mat([
    [1, 0, 2],
    [-1, 1, 0],
    [-2, 0, -1],
  ]);

  it('inverts to (1/3)·[[-1,0,-2],[-1,3,-2],[2,0,1]]', () => {
    const res = invertMatrix(A, 'none');
    expect(res.singular).toBe(false);
    expect(
      matrixEqualsPlain(res.inverse!, [
        ['-1/3', 0, '-2/3'],
        ['-1/3', 1, '-2/3'],
        ['2/3', 0, '1/3'],
      ]),
    ).toBe(true);
  });

  it('A · A⁻¹ = I', () => {
    const inv = invertMatrix(A, 'none').inverse!;
    const n = A.length;
    const prod = A.map((row) =>
      Array.from({ length: n }, (_, j) => {
        let acc = F(0);
        for (let k = 0; k < n; k++) acc = acc.add(row[k].mul(inv[k][j]));
        return acc;
      }),
    );
    expect(matrixEqualsPlain(prod, [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ])).toBe(true);
  });
});

describe('Determinant — Example 3.39', () => {
  const A = mat([
    [1, -2, -2, -2],
    [2, -1, 2, 4],
    [-1, 2, 3, -4],
    [-2, 1, 4, -2],
  ]);

  it('det = 114 with and without pivoting (sign tracked)', () => {
    expect(toPlain(determinant(A, 'none').determinant!)).toBe('114');
    expect(toPlain(determinant(A, 'partial').determinant!)).toBe('114');
  });
});

describe('Tridiagonal Thomas algorithm (§3.5 exercise)', () => {
  // x1 - 0.5 x2 = 1.5 ; 0.5 x1 + 4 x2 - 0.5 x3 = -4 ; ... ; 0.5 x5 + x6 = -0.5
  const a = vec(['1/2', '1/2', '1/2', '1/2', '1/2']);
  const d = vec([1, 4, 2, 4, 2, 1]);
  const c = vec(['-1/2', '-1/2', '-1/2', '-1/2', '-1/2']);
  const b = vec(['3/2', -4, 2, -4, 2, '-1/2']);

  it('matches the general Gaussian solver on the same dense matrix', () => {
    const tri = solveTridiagonal({ a, d, c, b });
    expect(tri.singular).toBe(false);

    // Build the dense tridiagonal coefficient matrix and solve generally.
    const n = d.length;
    const dense: FracMatrix = [];
    for (let i = 0; i < n; i++) {
      const row = Array.from({ length: n }, () => F(0));
      row[i] = d[i];
      if (i < n - 1) row[i + 1] = c[i];
      if (i > 0) row[i - 1] = a[i - 1];
      dense.push(row);
    }
    const dieresis = solveSystem(dense, b, { method: 'gauss', pivoting: 'none' });

    expect(solutionPlain(tri.solution)).toEqual(solutionPlain(dieresis.solution));
  });
});

describe('runElimination sanity', () => {
  it('produces an init step and a pivot for a 2x2 system', () => {
    const aug = augment(mat([[2, 1], [1, 3]]), mat([[5], [10]]));
    const run = runElimination(aug, 2, { method: 'gauss', pivoting: 'none' });
    expect(run.steps[0].kind).toBe('init');
    expect(run.steps.some((s) => s.kind === 'pivot-select')).toBe(true);
    expect(run.singular).toBe(false);
  });
});
