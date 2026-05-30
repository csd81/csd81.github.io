import type { Bilingual } from '../lib/types';

export type NumLike = number | string;

export interface SystemPreset {
  id: string;
  ref: string;
  name: Bilingual;
  A: NumLike[][];
  b: NumLike[];
  note?: Bilingual;
}

export interface TridiagonalPreset {
  id: string;
  ref: string;
  name: Bilingual;
  /** sub-diagonal (n-1), diagonal (n), super-diagonal (n-1), rhs (n) */
  a: NumLike[];
  d: NumLike[];
  c: NumLike[];
  b: NumLike[];
}

/** Square systems Ax = b drawn from the chapter (also reused for inverse/determinant). */
export const systemPresets: SystemPreset[] = [
  {
    id: 'ex3-22',
    ref: 'Example 3.22',
    name: { en: 'Gaussian elimination', hu: 'Gauss-elimináció' },
    A: [
      [1, -2, -2, -2],
      [2, -1, 2, 4],
      [-1, 2, 3, -4],
      [-2, 1, 4, -2],
    ],
    b: [-11, -8, 27, 28],
    note: {
      en: 'Solves cleanly without pivoting; solution (-3, 2, 4, -2).',
      hu: 'Főelemkiválasztás nélkül is megoldható; megoldás (-3, 2, 4, -2).',
    },
  },
  {
    id: 'ex3-24',
    ref: 'Example 3.24 / 3.27',
    name: { en: 'Zero pivot (needs pivoting)', hu: 'Nulla főelem (kell csere)' },
    A: [
      [2, -1, 0, -3],
      [2, -1, 1, 5],
      [-3, 1, 1, -2],
      [2, 4, 0, -1],
    ],
    b: [8, 2, -5, 21],
    note: {
      en: 'Without pivoting it stalls on a zero pivot. Switch pivoting to Partial to finish — solution (4, 3, 2, -1).',
      hu: 'Főelemkiválasztás nélkül nulla főelemen elakad. Válts Részleges főelemkiválasztásra — megoldás (4, 3, 2, -1).',
    },
  },
  {
    id: 'ex3-25',
    ref: 'Example 3.25',
    name: { en: 'Ill-conditioned 2×2', hu: 'Rosszul kondicionált 2×2' },
    A: [
      ['1/5000', '-61/2'],
      ['253/50', '-21/20'],
    ],
    b: ['-6099/100', '2509/10'],
    note: {
      en: 'Exact solution (50, 2). With finite-digit arithmetic, dividing by the tiny pivot 0.0002 blows up the error — partial pivoting fixes it.',
      hu: 'Pontos megoldás (50, 2). Véges jegyű aritmetikával a kicsi 0.0002 főelemmel való osztás felnagyítja a hibát — a részleges főelemkiválasztás megoldja.',
    },
  },
  {
    id: 'ex3-33a',
    ref: '§3.3 Exercise 1(a)',
    name: { en: 'Exercise 3×3', hu: 'Feladat 3×3' },
    A: [
      [2, 2, -2],
      [-1, 3, 0],
      [4, 2, -3],
    ],
    b: [-4, -11, -1],
  },
];

/** Square matrices used for inversion / determinant tasks. */
export const matrixPresets: SystemPreset[] = [
  {
    id: 'ex3-38',
    ref: 'Example 3.38',
    name: { en: 'Invert a 3×3', hu: '3×3 invertálása' },
    A: [
      [1, 0, 2],
      [-1, 1, 0],
      [-2, 0, -1],
    ],
    b: [0, 0, 0],
    note: {
      en: 'A⁻¹ = (1/3)·[[-1,0,-2],[-1,3,-2],[2,0,1]].',
      hu: 'A⁻¹ = (1/3)·[[-1,0,-2],[-1,3,-2],[2,0,1]].',
    },
  },
  {
    id: 'ex3-39',
    ref: 'Example 3.39',
    name: { en: 'Determinant = 114', hu: 'Determináns = 114' },
    A: [
      [1, -2, -2, -2],
      [2, -1, 2, 4],
      [-1, 2, 3, -4],
      [-2, 1, 4, -2],
    ],
    b: [0, 0, 0, 0],
    note: {
      en: 'det(A) = product of pivots = 1·3·1·38 = 114.',
      hu: 'det(A) = a főelemek szorzata = 1·3·1·38 = 114.',
    },
  },
  {
    id: 'ex3-7-1a',
    ref: '§3.7 Exercise 1(a)',
    name: { en: 'Invert 3×3 (exercise)', hu: '3×3 invertálása (feladat)' },
    A: [
      [-1, 1, 2],
      [-2, 1, 0],
      [0, 1, -1],
    ],
    b: [0, 0, 0],
  },
];

/** Tridiagonal systems for the Thomas-algorithm task. */
export const tridiagonalPresets: TridiagonalPreset[] = [
  {
    id: 'ex3-5-1',
    ref: '§3.5 Exercise 1',
    name: { en: '6×6 tridiagonal', hu: '6×6 tridiagonális' },
    a: ['1/2', '1/2', '1/2', '1/2', '1/2'],
    d: [1, 4, 2, 4, 2, 1],
    c: ['-1/2', '-1/2', '-1/2', '-1/2', '-1/2'],
    b: ['3/2', -4, 2, -4, 2, '-1/2'],
  },
  {
    id: 'tri-small',
    ref: 'Warm-up',
    name: { en: '4×4 tridiagonal', hu: '4×4 tridiagonális' },
    a: [-1, -1, -1],
    d: [4, 4, 4, 4],
    c: [-1, -1, -1],
    b: [5, 5, 10, 23],
  },
];
