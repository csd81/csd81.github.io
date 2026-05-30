import { Matrix, EigenvalueDecomposition } from 'ml-matrix';
import type { Mat } from './matrix';

export interface Complex {
  re: number;
  im: number;
}

export function magnitude(z: Complex): number {
  return Math.hypot(z.re, z.im);
}

/** Eigenvalues of a square matrix as complex numbers. */
export function eigenvalues(a: Mat): Complex[] {
  const evd = new EigenvalueDecomposition(new Matrix(a));
  const re = evd.realEigenvalues;
  const im = evd.imaginaryEigenvalues;
  return re.map((r, i) => ({ re: r, im: im[i] ?? 0 }));
}

/** Spectral radius rho(A) = max |lambda|. */
export function spectralRadius(a: Mat): number {
  const eig = eigenvalues(a);
  return eig.reduce((max, z) => Math.max(max, magnitude(z)), 0);
}
