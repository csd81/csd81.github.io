import type { Bilingual } from '../lib/types';

interface Base {
  id: string;
  prompt: Bilingual;
  tex?: string;
  solution: Bilingual;
}

export type QuizItem =
  | (Base & { kind: 'choice'; choices: Bilingual[]; answer: number })
  | (Base & { kind: 'truefalse'; answer: boolean })
  | (Base & { kind: 'numeric'; answer: string })
  | (Base & { kind: 'vector'; answer: string[] });

export const quizzes: QuizItem[] = [
  {
    id: 'q-tri-solve',
    kind: 'vector',
    prompt: {
      en: 'Solve this triangular system by backward substitution (enter x₁, x₂, x₃, x₄):',
      hu: 'Oldd meg ezt a háromszög rendszert visszahelyettesítéssel (add meg x₁, x₂, x₃, x₄):',
    },
    tex: '\\begin{array}{rcrcrcrcr} 2x_1 &-& x_2 &+& 3x_3 &+& x_4 &=& 3\\\\ && 3x_2 &-& x_3 &+& 2x_4 &=& 13\\\\ &&&& 2x_3 &-& x_4 &=& -2\\\\ &&&&&& 3x_4 &=& 12 \\end{array}',
    answer: ['-1', '2', '1', '4'],
    solution: {
      en: 'x₄ = 4, then x₃ = (−2+4)/2 = 1, x₂ = (13+1−8)/3 = 2, x₁ = (3+2−3−4)/2 = −1.',
      hu: 'x₄ = 4, majd x₃ = (−2+4)/2 = 1, x₂ = (13+1−8)/3 = 2, x₁ = (3+2−3−4)/2 = −1.',
    },
  },
  {
    id: 'q-det-114',
    kind: 'numeric',
    prompt: {
      en: 'What is det(A) for the coefficient matrix of Example 3.39 (pivots 1, 3, 1, 38, no swaps)?',
      hu: 'Mennyi det(A) a 3.39. példa együtthatómátrixára (főelemek 1, 3, 1, 38, csere nélkül)?',
    },
    answer: '114',
    solution: {
      en: 'det(A) = product of pivots = 1·3·1·38 = 114.',
      hu: 'det(A) = a főelemek szorzata = 1·3·1·38 = 114.',
    },
  },
  {
    id: 'q-dd-invertible',
    kind: 'truefalse',
    prompt: {
      en: 'Every (row) diagonally dominant matrix is invertible.',
      hu: 'Minden (soronként) diagonálisan domináns mátrix invertálható.',
    },
    answer: true,
    solution: {
      en: 'True. Diagonal dominance implies Ax = 0 has only the trivial solution, so A is nonsingular.',
      hu: 'Igaz. A diagonális dominanciából következik, hogy Ax = 0-nak csak triviális megoldása van, így A reguláris.',
    },
  },
  {
    id: 'q-partial-pivot',
    kind: 'choice',
    prompt: {
      en: 'In column 1 the entries (top to bottom) are 2, 2, −3, 2. Which row does partial pivoting move to the top?',
      hu: 'Az 1. oszlop elemei (fentről le) 2, 2, −3, 2. Melyik sort viszi felülre a részleges főelemkiválasztás?',
    },
    choices: [
      { en: 'Row 1 (value 2)', hu: '1. sor (érték 2)' },
      { en: 'Row 3 (value −3)', hu: '3. sor (érték −3)' },
      { en: 'The first nonzero row', hu: 'Az első nemnulla sor' },
      { en: 'No swap is needed', hu: 'Nem kell csere' },
    ],
    answer: 1,
    solution: {
      en: 'Partial pivoting picks the largest magnitude, |−3| = 3, so row 3 moves up.',
      hu: 'A részleges főelemkiválasztás a legnagyobb abszolút értéket választja, |−3| = 3, így a 3. sor kerül felülre.',
    },
  },
  {
    id: 'q-gauss-cost',
    kind: 'choice',
    prompt: {
      en: 'What is the leading-order operation count of Gaussian elimination?',
      hu: 'Mi a Gauss-elimináció vezető rendű műveletigénye?',
    },
    choices: [
      { en: 'n²/2', hu: 'n²/2' },
      { en: 'n³/3', hu: 'n³/3' },
      { en: 'n³/2', hu: 'n³/2' },
      { en: '5n − 4', hu: '5n − 4' },
    ],
    answer: 1,
    solution: {
      en: 'Forward elimination plus back-substitution is n³/3 + O(n²) multiplications/divisions.',
      hu: 'Az előre elimináció és a visszahelyettesítés együtt n³/3 + O(n²) szorzás/osztás.',
    },
  },
  {
    id: 'q-gj-cost',
    kind: 'truefalse',
    prompt: {
      en: 'Gauss–Jordan elimination is asymptotically cheaper than Gaussian elimination.',
      hu: 'A Gauss–Jordan-elimináció aszimptotikusan olcsóbb, mint a Gauss-elimináció.',
    },
    answer: false,
    solution: {
      en: 'False. Gauss–Jordan costs ≈ n³/2, more than Gaussian elimination’s n³/3.',
      hu: 'Hamis. A Gauss–Jordan költsége ≈ n³/2, több, mint a Gauss-elimináció n³/3-a.',
    },
  },
  {
    id: 'q-thomas-cost',
    kind: 'choice',
    prompt: {
      en: 'How many multiplications/divisions does the Thomas (tridiagonal) algorithm need?',
      hu: 'Hány szorzás/osztás kell a Thomas- (tridiagonális) algoritmushoz?',
    },
    choices: [
      { en: 'n³/3', hu: 'n³/3' },
      { en: 'n²/2', hu: 'n²/2' },
      { en: '5n − 4', hu: '5n − 4' },
      { en: '2ⁿ', hu: '2ⁿ' },
    ],
    answer: 2,
    solution: {
      en: 'A tridiagonal solve is linear: 5n − 4 multiplications/divisions.',
      hu: 'A tridiagonális megoldás lineáris: 5n − 4 szorzás/osztás.',
    },
  },
  {
    id: 'q-inv-entry',
    kind: 'numeric',
    prompt: {
      en: 'For A of Example 3.38, what is the (1,1) entry of A⁻¹? (Enter a fraction like -1/3.)',
      hu: 'A 3.38. példa A mátrixára mi az A⁻¹ (1,1) eleme? (Adj meg törtet, pl. -1/3.)',
    },
    answer: '-1/3',
    solution: {
      en: 'A⁻¹ = (1/3)·[[-1,0,-2],[-1,3,-2],[2,0,1]], so the (1,1) entry is −1/3.',
      hu: 'A⁻¹ = (1/3)·[[-1,0,-2],[-1,3,-2],[2,0,1]], tehát az (1,1) elem −1/3.',
    },
  },
  {
    id: 'q-posdef',
    kind: 'choice',
    prompt: {
      en: 'A symmetric matrix is positive definite if and only if…',
      hu: 'Egy szimmetrikus mátrix akkor és csak akkor pozitív definit, ha…',
    },
    choices: [
      { en: 'all its entries are positive', hu: 'minden eleme pozitív' },
      { en: 'it is diagonally dominant', hu: 'diagonálisan domináns' },
      { en: 'all leading principal minors are positive', hu: 'minden bal felső főminora pozitív' },
      { en: 'its determinant is positive', hu: 'a determinánsa pozitív' },
    ],
    answer: 2,
    solution: {
      en: 'Sylvester’s criterion: positive definite ⇔ every leading principal minor is positive.',
      hu: 'Sylvester-kritérium: pozitív definit ⇔ minden bal felső főminor pozitív.',
    },
  },
];
