import type { QuizQuestion } from '../../../shared/ui/Quiz';

/**
 * Multiple-choice questions for Chapter 5 (Matrix Factorization), parsed from
 * the shared quiz bank. Keyed by the chapter's section ids:
 *   lu        ← quiz.md §5.1 LU Factorization
 *   cholesky  ← quiz.md §5.2 Cholesky Factorization
 * Bilingual: formula-only options are identical in both languages.
 */
const QUIZZES: Record<string, QuizQuestion[]> = {
  lu: [
    {
      id: 'q-lu-1',
      prompt: {
        en: 'In an LU factorization with unit-diagonal L, the determinant of L is:',
        hu: 'Egy egységátlós L-lel rendelkező LU-felbontásban L determinánsa:',
      },
      options: [
        { en: '0', hu: '0' },
        { en: 'n', hu: 'n' },
        { en: '1', hu: '1' },
        { en: 'the same as det(U)', hu: 'ugyanannyi, mint det(U)' },
      ],
      answer: 2,
      explanation: {
        en: 'A triangular matrix with all-ones diagonal has determinant 1.',
        hu: 'Egy csupa 1-es átlójú háromszögmátrix determinánsa 1.',
      },
    },
    {
      id: 'q-lu-2',
      prompt: {
        en: 'To solve Ax = b given A = LU, one first:',
        hu: 'Az Ax = b megoldásához, ha A = LU, először:',
      },
      options: [
        { en: 'solves Ux = b and then Ly = x', hu: 'megoldjuk Ux = b-t, majd Ly = x-et' },
        { en: 'computes a new LU factorization for each b', hu: 'minden b-hez új LU-felbontást számolunk' },
        { en: 'inverts A explicitly', hu: 'explicit módon invertáljuk A-t' },
        { en: 'solves Ly = b and then Ux = y', hu: 'megoldjuk Ly = b-t, majd Ux = y-t' },
      ],
      answer: 3,
      explanation: {
        en: 'Forward-substitute Ly = b, then back-substitute Ux = y.',
        hu: 'Előrehelyettesítéssel megoldjuk Ly = b-t, majd visszahelyettesítéssel Ux = y-t.',
      },
    },
    {
      id: 'q-lu-3',
      prompt: {
        en: 'For any invertible matrix A there exists a permutation matrix P such that:',
        hu: 'Bármely invertálható A mátrixhoz létezik olyan P permutációs mátrix, hogy:',
      },
      options: [
        { en: '(PA)ᵀ = LU', hu: '(PA)ᵀ = LU' },
        { en: 'PA = LU', hu: 'PA = LU' },
        { en: 'PᵀAP = LU', hu: 'PᵀAP = LU' },
        { en: 'A = LUP', hu: 'A = LUP' },
      ],
      answer: 1,
      explanation: {
        en: 'Partial pivoting yields PA = LU for every invertible A.',
        hu: 'A részleges pivotálás PA = LU-t ad minden invertálható A-ra.',
      },
    },
    {
      id: 'q-lu-4',
      prompt: {
        en: 'The number of multiplications/divisions to compute an LU factorization of an n×n matrix is approximately:',
        hu: 'Egy n×n mátrix LU-felbontásának kiszámításához szükséges szorzások/osztások száma közelítőleg:',
      },
      options: [
        { en: 'n³/3 + O(n²)', hu: 'n³/3 + O(n²)' },
        { en: 'n²/3', hu: 'n²/3' },
        { en: 'n² + O(n)', hu: 'n² + O(n)' },
        { en: 'n³ + O(n²)', hu: 'n³ + O(n²)' },
      ],
      answer: 0,
      explanation: {
        en: 'LU factorization costs about n³/3 multiplications/divisions.',
        hu: 'Az LU-felbontás kb. n³/3 szorzást/osztást igényel.',
      },
    },
    {
      id: 'q-lu-5',
      prompt: {
        en: 'Which statement about U in an LU factorization is TRUE?',
        hu: 'Melyik állítás IGAZ az LU-felbontásbeli U-ra?',
      },
      options: [
        { en: 'It can be any triangular matrix', hu: 'Bármely háromszögmátrix lehet' },
        { en: 'It is lower triangular with ones on its diagonal', hu: 'Alsó háromszögmátrix, az átlójában 1-esekkel' },
        { en: 'It is upper triangular and its diagonal entries are the pivots from elimination', hu: 'Felső háromszögmátrix, és átlós elemei az eliminációból származó pivotelemek' },
        { en: 'It is always symmetric', hu: 'Mindig szimmetrikus' },
      ],
      answer: 2,
      explanation: {
        en: 'U is upper triangular; its diagonal holds the elimination pivots.',
        hu: 'U felső háromszögmátrix; az átlója az eliminációs pivotelemeket tartalmazza.',
      },
    },
  ],
  cholesky: [
    {
      id: 'q-cholesky-1',
      prompt: {
        en: 'In the Cholesky factorization of a positive-definite matrix, the diagonal entries of L can be chosen:',
        hu: 'Egy pozitív definit mátrix Cholesky-felbontásában L átlós elemei megválaszthatók:',
      },
      options: [
        { en: 'Zero', hu: 'Nullának' },
        { en: 'Negative', hu: 'Negatívnak' },
        { en: 'Arbitrary complex numbers', hu: 'Tetszőleges komplex számnak' },
        { en: 'Positive', hu: 'Pozitívnak' },
      ],
      answer: 3,
      explanation: {
        en: 'Taking positive square roots makes the Cholesky factor unique.',
        hu: 'A pozitív négyzetgyökök választása egyértelművé teszi a Cholesky-faktort.',
      },
    },
    {
      id: 'q-cholesky-2',
      prompt: {
        en: 'At the start of the Cholesky algorithm, the first diagonal element of L is:',
        hu: 'A Cholesky-algoritmus elején L első átlós eleme:',
      },
      options: [
        { en: 'l₁₁ = √a₁₁', hu: 'l₁₁ = √a₁₁' },
        { en: 'l₁₁ = 1/a₁₁', hu: 'l₁₁ = 1/a₁₁' },
        { en: 'l₁₁ = a₁₁', hu: 'l₁₁ = a₁₁' },
        { en: 'l₁₁ = a₁₁/2', hu: 'l₁₁ = a₁₁/2' },
      ],
      answer: 0,
      explanation: {
        en: 'From A = LLᵀ, l₁₁² = a₁₁, so l₁₁ = √a₁₁.',
        hu: 'A = LLᵀ-ból l₁₁² = a₁₁, így l₁₁ = √a₁₁.',
      },
    },
    {
      id: 'q-cholesky-3',
      prompt: {
        en: 'For a symmetric matrix A, the Cholesky factorization is:',
        hu: 'Egy A szimmetrikus mátrixra a Cholesky-felbontás:',
      },
      options: [
        { en: 'A = LLᵀ', hu: 'A = LLᵀ' },
        { en: 'A = UᵀU', hu: 'A = UᵀU' },
        { en: 'A = LᵀU', hu: 'A = LᵀU' },
        { en: 'A = LU', hu: 'A = LU' },
      ],
      answer: 0,
      explanation: {
        en: 'Cholesky writes a symmetric positive-definite A as LLᵀ with L lower triangular.',
        hu: 'A Cholesky egy szimmetrikus pozitív definit A-t LLᵀ alakban ír fel, ahol L alsó háromszögmátrix.',
      },
    },
    {
      id: 'q-cholesky-4',
      prompt: {
        en: 'The approximate number of multiplications/divisions to Cholesky-factor an n×n matrix is:',
        hu: 'Egy n×n mátrix Cholesky-felbontásához szükséges szorzások/osztások közelítő száma:',
      },
      options: [
        { en: 'n³/3', hu: 'n³/3' },
        { en: 'n³/6', hu: 'n³/6' },
        { en: 'n', hu: 'n' },
        { en: 'n²', hu: 'n²' },
      ],
      answer: 1,
      explanation: {
        en: 'Cholesky costs about n³/6, roughly half of LU, by exploiting symmetry.',
        hu: 'A Cholesky kb. n³/6-ot igényel, nagyjából az LU felét, a szimmetriát kihasználva.',
      },
    },
    {
      id: 'q-cholesky-5',
      prompt: {
        en: 'Which condition guarantees that the Cholesky factorization exists?',
        hu: 'Melyik feltétel garantálja a Cholesky-felbontás létezését?',
      },
      options: [
        { en: 'A is skew-symmetric', hu: 'A ferdén szimmetrikus' },
        { en: 'A is strictly upper triangular', hu: 'A szigorúan felső háromszögmátrix' },
        { en: 'A is symmetric and positive definite', hu: 'A szimmetrikus és pozitív definit' },
        { en: 'A is singular', hu: 'A szinguláris' },
      ],
      answer: 2,
      explanation: {
        en: 'Cholesky exists (and is unique with positive diagonal) iff A is symmetric positive definite.',
        hu: 'A Cholesky akkor és csak akkor létezik (és pozitív átlóval egyértelmű), ha A szimmetrikus pozitív definit.',
      },
    },
  ],
};

export function getQuiz(sectionId: string): QuizQuestion[] {
  return QUIZZES[sectionId] ?? [];
}
