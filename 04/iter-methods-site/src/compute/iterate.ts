import type { Mat, Vec } from './matrix';
import { matVec, hasNonZeroDiagonal } from './matrix';
import { vectorNorm } from './norms';

export type Method = 'jacobi' | 'gauss-seidel';

export interface IterStep {
  k: number;
  x: Vec;
  residualNorm: number; // ||b - A x^(k)||_inf
  errorNorm: number | null; // ||x* - x^(k)||_inf when the exact solution is known
}

export interface IterResult {
  steps: IterStep[];
  converged: boolean;
  diverged: boolean;
  error: string | null; // populated when iteration cannot run at all
}

const DIVERGENCE_LIMIT = 1e12;

/**
 * Run Jacobi or Gauss–Seidel for the system A x = b, starting from x0.
 * Stops early on convergence (residual < tol), on divergence (norm blow-up),
 * or after `maxSteps`. `exact` (optional) lets us also report the true error.
 */
export function iterate(
  a: Mat,
  b: Vec,
  x0: Vec,
  method: Method,
  maxSteps: number,
  tol = 1e-7,
  exact?: Vec | null,
): IterResult {
  if (!hasNonZeroDiagonal(a)) {
    return {
      steps: [],
      converged: false,
      diverged: false,
      error: 'zero-diagonal',
    };
  }

  const n = a.length;
  let x = [...x0];

  const record = (k: number, xv: Vec): IterStep => {
    const r = b.map((bi, i) => bi - matVec(a, xv)[i]);
    return {
      k,
      x: [...xv],
      residualNorm: vectorNorm(r, 'inf'),
      errorNorm: exact ? vectorNorm(exact.map((e, i) => e - xv[i]), 'inf') : null,
    };
  };

  const steps: IterStep[] = [record(0, x)];
  let converged = false;
  let diverged = false;

  for (let k = 1; k <= maxSteps; k++) {
    const next = new Array<number>(n);
    for (let i = 0; i < n; i++) {
      let sum = b[i];
      for (let j = 0; j < n; j++) {
        if (j === i) continue;
        // Gauss–Seidel uses already-updated components (next) for j < i.
        const xj = method === 'gauss-seidel' && j < i ? next[j] : x[j];
        sum -= a[i][j] * xj;
      }
      next[i] = sum / a[i][i];
    }
    x = next;
    const step = record(k, x);
    steps.push(step);

    if (!Number.isFinite(step.residualNorm) || step.residualNorm > DIVERGENCE_LIMIT) {
      diverged = true;
      break;
    }
    if (step.residualNorm < tol) {
      converged = true;
      break;
    }
  }

  return { steps, converged, diverged, error: null };
}
