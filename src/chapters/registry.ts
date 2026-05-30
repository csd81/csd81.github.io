import type { ComponentType, LazyExoticComponent } from 'react';
import { lazy } from 'react';
import type { Bi } from '../shared/providers/LanguageProvider';

export interface Chapter {
  num: number;
  slug: string;
  title: Bi;
  blurb: Bi;
  /** lazy-loaded chapter root component; renders its own nested routes if needed */
  load: LazyExoticComponent<ComponentType>;
  /** flip to true once the chapter has been migrated into the unified app */
  ready: boolean;
}

/**
 * Single source of truth mapping the original chapter folders (01–10) to their
 * slugs, bilingual metadata, and lazy module. Heavy chapter-specific libraries
 * (Plotly, Mafs, recharts…) load only when their route is visited.
 */
export const CHAPTERS: Chapter[] = [
  {
    num: 1,
    slug: 'introduction',
    title: { en: 'Introduction', hu: 'Bevezetés' },
    blurb: {
      en: 'Number representation, floating point, error analysis, conditioning and stability.',
      hu: 'Számábrázolás, lebegőpont, hibaszámítás, kondicionáltság és stabilitás.',
    },
    load: lazy(() => import('./introduction')),
    ready: true,
  },
  {
    num: 2,
    slug: 'nonlinear-equations',
    title: { en: 'Nonlinear Equations', hu: 'Nemlineáris egyenletek' },
    blurb: {
      en: 'Bisection, fixed-point iteration, Newton and secant methods, and systems.',
      hu: 'Felezés, fixpont-iteráció, Newton- és szelőmódszer, és rendszerek.',
    },
    load: lazy(() => import('./nonlinear-equations')),
    ready: true,
  },
  {
    num: 3,
    slug: 'linear-systems',
    title: { en: 'Linear Systems', hu: 'Lineáris egyenletrendszerek' },
    blurb: {
      en: 'Gaussian elimination, pivoting, determinants, inverses and tridiagonal solvers.',
      hu: 'Gauss-elimináció, pivotálás, determinánsok, inverzek és tridiagonális megoldók.',
    },
    load: lazy(() => import('./linear-systems')),
    ready: true,
  },
  {
    num: 4,
    slug: 'iterative-methods',
    title: { en: 'Iterative Techniques', hu: 'Iterációs módszerek' },
    blurb: {
      en: 'Fixed-point iteration, Jacobi and Gauss–Seidel, conditioning and spectra.',
      hu: 'Fixpont-iteráció, Jacobi és Gauss–Seidel, kondicionáltság és spektrum.',
    },
    load: lazy(() => import('./iterative-methods')),
    ready: true,
  },
  {
    num: 5,
    slug: 'matrix-factorization',
    title: { en: 'Matrix Factorization', hu: 'Mátrixfaktorizáció' },
    blurb: {
      en: 'LU and Cholesky factorizations with step-by-step players and practice.',
      hu: 'LU- és Cholesky-felbontás lépésenkénti lejátszással és gyakorlással.',
    },
    load: lazy(() => import('./matrix-factorization')),
    ready: true,
  },
  {
    num: 6,
    slug: 'interpolation',
    title: { en: 'Interpolation', hu: 'Interpoláció' },
    blurb: {
      en: 'Lagrange and Newton interpolation, divided differences and splines.',
      hu: 'Lagrange- és Newton-interpoláció, osztott differenciák és spl-ájnok.',
    },
    load: lazy(() => import('./interpolation')),
    ready: true,
  },
  {
    num: 7,
    slug: 'numerical-calculus',
    title: { en: 'Numerical Calculus', hu: 'Numerikus deriválás és integrálás' },
    blurb: {
      en: 'Finite differences, Newton–Cotes and Gaussian quadrature with error analysis.',
      hu: 'Véges differenciák, Newton–Cotes és Gauss-kvadratúra hibaanalízissel.',
    },
    load: lazy(() => import('./numerical-calculus')),
    ready: true,
  },
  {
    num: 8,
    slug: 'minimization',
    title: { en: 'Minimization', hu: 'Szélsőértékszámítás' },
    blurb: {
      en: 'Golden-section, gradient, Newton, quasi-Newton and the simplex method.',
      hu: 'Aranymetszés, gradiens, Newton, kvázi-Newton és a szimplex módszer.',
    },
    load: lazy(() => import('./minimization')),
    ready: true,
  },
  {
    num: 9,
    slug: 'least-squares',
    title: { en: 'Least Squares', hu: 'Legkisebb négyzetek' },
    blurb: {
      en: 'Linear and polynomial least squares, normal equations and curve fitting.',
      hu: 'Lineáris és polinomiális legkisebb négyzetek, normálegyenletek és illesztés.',
    },
    load: lazy(() => import('./least-squares')),
    ready: true,
  },
  {
    num: 10,
    slug: 'differential-equations',
    title: { en: 'Differential Equations', hu: 'Differenciálegyenletek' },
    blurb: {
      en: 'Euler, Taylor and Runge–Kutta methods for ODEs, with convergence studies.',
      hu: 'Euler-, Taylor- és Runge–Kutta-módszerek ODE-kre, konvergenciavizsgálattal.',
    },
    load: lazy(() => import('./differential-equations')),
    ready: true,
  },
];

export const chapterBySlug = (slug: string) => CHAPTERS.find((c) => c.slug === slug);
