import type { Bilingual } from "./types";
import type { Matrix } from "../lib/matrix";

export type Exercise =
  | FactorExercise
  | McqExercise
  | OpenExercise;

interface Base {
  id: string;
  group: "lu" | "cholesky";
  prompt: Bilingual;
}

/** User must reproduce the factorization of a given matrix; checked numerically. */
export interface FactorExercise extends Base {
  kind: "factor-lu" | "factor-cholesky";
  matrix: Matrix;
  hint: Bilingual;
}

/** Multiple-choice conceptual question. */
export interface McqExercise extends Base {
  kind: "mcq";
  options: Bilingual[];
  correct: number;
  explanation: Bilingual;
}

/** Open / proof question with a reveal-able model answer. */
export interface OpenExercise extends Base {
  kind: "open";
  modelAnswer: Bilingual;
}

export const exercises: Exercise[] = [
  // ---------------- LU ----------------
  {
    id: "lu-ex1a",
    group: "lu",
    kind: "factor-lu",
    prompt: {
      en: "Compute the LU factorization of the matrix below. Fill in L (unit lower triangular) and U.",
      hu: "Számítsd ki az alábbi mátrix LU-faktorizációját. Töltsd ki L-et (egységnyi főátlójú alsó) és U-t.",
    },
    matrix: [
      [2, 3, -1],
      [-1, -2, -1],
      [0, 2, 4],
    ],
    hint: {
      en: "First pivot is 2. l₂₁ = -1/2, l₃₁ = 0.",
      hu: "Az első pivot 2. l₂₁ = -1/2, l₃₁ = 0.",
    },
  },
  {
    id: "lu-ex1b",
    group: "lu",
    kind: "factor-lu",
    prompt: {
      en: "Compute the LU factorization of this matrix.",
      hu: "Számítsd ki ennek a mátrixnak az LU-faktorizációját.",
    },
    matrix: [
      [4, -1, 2],
      [-12, 0, -1],
      [8, -17, 26],
    ],
    hint: {
      en: "l₂₁ = -3, l₃₁ = 2. Eliminate column 1 first.",
      hu: "l₂₁ = -3, l₃₁ = 2. Először az 1. oszlopot nullázd.",
    },
  },
  {
    id: "lu-ex1d",
    group: "lu",
    kind: "factor-lu",
    prompt: {
      en: "Compute the LU factorization of this 4×4 matrix.",
      hu: "Számítsd ki ennek a 4×4-es mátrixnak az LU-faktorizációját.",
    },
    matrix: [
      [2, -1, 3, -2],
      [-8, 5, -7, 7],
      [2, -4, -14, 0],
      [-4, 7, 23, 4],
    ],
    hint: {
      en: "Use the solver's step view if stuck — multipliers go where zeros appear.",
      hu: "Ha elakadsz, használd a megoldó lépésnézetét — a szorzók a nullák helyére kerülnek.",
    },
  },
  {
    id: "lu-ex2",
    group: "lu",
    kind: "mcq",
    prompt: {
      en: "Why does the matrix [[2,2,3],[1,1,4],[1,0,1]] have no LU factorization (without row interchange)?",
      hu: "Miért nincs a [[2,2,3],[1,1,4],[1,0,1]] mátrixnak LU-faktorizációja (sorcsere nélkül)?",
    },
    options: [
      {
        en: "A zero pivot appears in the second column during elimination.",
        hu: "Az elimináció során a második oszlopban nulla pivot keletkezik.",
      },
      { en: "The matrix is singular.", hu: "A mátrix szinguláris." },
      { en: "The matrix is not symmetric.", hu: "A mátrix nem szimmetrikus." },
    ],
    correct: 0,
    explanation: {
      en: "After eliminating column 1, the (2,2) pivot becomes 0, so we cannot continue without swapping rows. A permutation P fixes this (Theorem 5.5).",
      hu: "Az 1. oszlop kinullázása után a (2,2) pivot 0 lesz, így sorcsere nélkül nem folytatható. Egy P permutáció orvosolja (5.5. tétel).",
    },
  },
  {
    id: "lu-ex3",
    group: "lu",
    kind: "mcq",
    prompt: {
      en: "A singular matrix can have infinitely many LU factorizations. Does this contradict Theorem 5.1?",
      hu: "Egy szinguláris mátrixnak végtelen sok LU-felbontása lehet. Ellentmond ez az 5.1. tételnek?",
    },
    options: [
      {
        en: "No — Theorem 5.1 assumes A is nonsingular; uniqueness need not hold otherwise.",
        hu: "Nem — az 5.1. tétel feltételezi, hogy A nemszinguláris; egyébként az egyértelműség nem feltétlen áll.",
      },
      {
        en: "Yes — the theorem is violated.",
        hu: "Igen — a tétel sérül.",
      },
      {
        en: "No — because L is always unique even when A is singular.",
        hu: "Nem — mert L mindig egyértelmű, akkor is, ha A szinguláris.",
      },
    ],
    correct: 0,
    explanation: {
      en: "Theorem 5.1 guarantees uniqueness only for nonsingular A. For singular matrices the determinant argument breaks down, allowing many factorizations.",
      hu: "Az 5.1. tétel csak nemszinguláris A-ra garantál egyértelműséget. Szinguláris esetben a determináns-érv elromlik, így több felbontás is lehet.",
    },
  },
  {
    id: "lu-ex5",
    group: "lu",
    kind: "open",
    prompt: {
      en: "Prove Theorem 5.5: for any invertible A there is a permutation P with PA = LU.",
      hu: "Bizonyítsd be az 5.5. tételt: bármely invertálható A-hoz van olyan P, hogy PA = LU.",
    },
    modelAnswer: {
      en: "Since A is invertible, at every elimination step some entry in the current pivot column (on or below the diagonal) is nonzero; otherwise that column would be a combination making A singular. Swap that row to the pivot position — this is a permutation. The product of all such swaps is a permutation matrix P, and Gaussian elimination on PA proceeds with no zero pivots, so PA = LU exists by Theorem 5.2.",
      hu: "Mivel A invertálható, minden eliminációs lépésben a pivot-oszlop valamely eleme (a főátlón vagy alatta) nem nulla; különben az az oszlop A szingularitását okozná. Cseréljük azt a sort a pivot helyére — ez egy permutáció. Az összes csere szorzata egy P permutációs mátrix, és a PA-n végzett Gauss-elimináció nulla pivot nélkül halad, így PA = LU létezik az 5.2. tétel szerint.",
    },
  },

  // ---------------- Cholesky ----------------
  {
    id: "ch-ex1a",
    group: "cholesky",
    kind: "factor-cholesky",
    prompt: {
      en: "Compute the Cholesky factor L (positive diagonal) of the matrix below.",
      hu: "Számítsd ki az alábbi mátrix L Cholesky-tényezőjét (pozitív főátló).",
    },
    matrix: [
      [16, -8, -12],
      [-8, 8, 4],
      [-12, 4, 35],
    ],
    hint: {
      en: "l₁₁ = √16 = 4, l₂₁ = -8/4 = -2, l₃₁ = -3.",
      hu: "l₁₁ = √16 = 4, l₂₁ = -8/4 = -2, l₃₁ = -3.",
    },
  },
  {
    id: "ch-ex1b",
    group: "cholesky",
    kind: "factor-cholesky",
    prompt: {
      en: "Compute the Cholesky factor L of this matrix.",
      hu: "Számítsd ki ennek a mátrixnak az L Cholesky-tényezőjét.",
    },
    matrix: [
      [4, -2, -4],
      [-2, 26, 7],
      [-4, 7, 6],
    ],
    hint: {
      en: "l₁₁ = 2. Then fill column 1 below the diagonal, then the (2,2) diagonal.",
      hu: "l₁₁ = 2. Töltsd ki az 1. oszlopot a főátló alatt, majd a (2,2) főátlót.",
    },
  },
  {
    id: "ch-ex1c",
    group: "cholesky",
    kind: "factor-cholesky",
    prompt: {
      en: "Compute the Cholesky factor L of this 4×4 matrix.",
      hu: "Számítsd ki ennek a 4×4-es mátrixnak az L Cholesky-tényezőjét.",
    },
    matrix: [
      [1, -1, -2, 1],
      [-1, 10, 2, 2],
      [-2, 2, 29, 8],
      [1, 2, 8, 7],
    ],
    hint: {
      en: "l₁₁ = 1, so column 1 is just the first column of A.",
      hu: "l₁₁ = 1, így az 1. oszlop éppen A első oszlopa.",
    },
  },
  {
    id: "ch-ex3",
    group: "cholesky",
    kind: "mcq",
    prompt: {
      en: "Why does the matrix [[0,1],[1,0]] have no Cholesky factorization?",
      hu: "Miért nincs a [[0,1],[1,0]] mátrixnak Cholesky-faktorizációja?",
    },
    options: [
      {
        en: "It is symmetric but not positive definite, and l₁₁ = √0 = 0 blocks the next step.",
        hu: "Szimmetrikus, de nem pozitív definit, és l₁₁ = √0 = 0 megakasztja a következő lépést.",
      },
      { en: "It is not symmetric.", hu: "Nem szimmetrikus." },
      { en: "It is not square.", hu: "Nem négyzetes." },
    ],
    correct: 0,
    explanation: {
      en: "a₁₁ = 0 gives l₁₁ = 0, then l₂₁ = a₂₁/l₁₁ is undefined. The matrix is indefinite (eigenvalues ±1), so Theorem 5.6 does not apply.",
      hu: "a₁₁ = 0 miatt l₁₁ = 0, majd l₂₁ = a₂₁/l₁₁ nem értelmezett. A mátrix indefinit (sajátértékek ±1), így az 5.6. tétel nem alkalmazható.",
    },
  },
  {
    id: "ch-ex2",
    group: "cholesky",
    kind: "open",
    prompt: {
      en: "Give an example showing the Cholesky factorization is not unique.",
      hu: "Adj példát arra, hogy a Cholesky-faktorizáció nem egyértelmű.",
    },
    modelAnswer: {
      en: "For A = (4), both L = (2) and L = (-2) satisfy A = L·Lᵀ since (±2)² = 4. More generally, flipping the sign of any column of a valid L (consistently) yields another factor, because A = (LD)(LD)ᵀ for any diagonal sign matrix D with D² = I. Requiring a positive diagonal removes the ambiguity.",
      hu: "A = (4) esetén L = (2) és L = (-2) is teljesíti A = L·Lᵀ-t, mert (±2)² = 4. Általánosabban, egy érvényes L bármely oszlopának előjelét konzisztensen megfordítva újabb tényezőt kapunk, mert A = (LD)(LD)ᵀ tetszőleges D előjeles diagonális mátrixra, ahol D² = I. A pozitív főátló kikötése megszünteti a kétértelműséget.",
    },
  },
];
