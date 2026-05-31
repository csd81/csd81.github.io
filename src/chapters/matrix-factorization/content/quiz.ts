import type { QuizQuestion } from '../../../shared/ui/Quiz';

/**
 * Multiple-choice questions for Chapter 5 (Matrix Factorization), parsed from
 * the shared quiz bank. Keyed by the chapter's section ids:
 *   lu        ← quiz.md §5.1 LU Factorization
 *   cholesky  ← quiz.md §5.2 Cholesky Factorization
 */
const QUIZZES: Record<string, QuizQuestion[]> = {
  lu: [
    {
      id: 'q-lu-1',
      prompt: 'In an LU factorization with unit-diagonal L, the determinant of L is:',
      options: ['0', 'n', '1', 'the same as det(U)'],
      answer: 2,
      explanation: 'A triangular matrix with all-ones diagonal has determinant 1.',
    },
    {
      id: 'q-lu-2',
      prompt: 'To solve Ax = b given A = LU, one first:',
      options: [
        'solves Ux = b and then Ly = x',
        'computes a new LU factorization for each b',
        'inverts A explicitly',
        'solves Ly = b and then Ux = y',
      ],
      answer: 3,
      explanation: 'Forward-substitute Ly = b, then back-substitute Ux = y.',
    },
    {
      id: 'q-lu-3',
      prompt:
        'For any invertible matrix A there exists a permutation matrix P such that:',
      options: ['(PA)ᵀ = LU', 'PA = LU', 'PᵀAP = LU', 'A = LUP'],
      answer: 1,
      explanation: 'Partial pivoting yields PA = LU for every invertible A.',
    },
    {
      id: 'q-lu-4',
      prompt:
        'The number of multiplications/divisions to compute an LU factorization of an n×n matrix is approximately:',
      options: ['n³/3 + O(n²)', 'n²/3', 'n² + O(n)', 'n³ + O(n²)'],
      answer: 0,
      explanation: 'LU factorization costs about n³/3 multiplications/divisions.',
    },
    {
      id: 'q-lu-5',
      prompt: 'Which statement about U in an LU factorization is TRUE?',
      options: [
        'It can be any triangular matrix',
        'It is lower triangular with ones on its diagonal',
        'It is upper triangular and its diagonal entries are the pivots from elimination',
        'It is always symmetric',
      ],
      answer: 2,
      explanation: 'U is upper triangular; its diagonal holds the elimination pivots.',
    },
  ],
  cholesky: [
    {
      id: 'q-cholesky-1',
      prompt:
        'In the Cholesky factorization of a positive-definite matrix, the diagonal entries of L can be chosen:',
      options: ['Zero', 'Negative', 'Arbitrary complex numbers', 'Positive'],
      answer: 3,
      explanation: 'Taking positive square roots makes the Cholesky factor unique.',
    },
    {
      id: 'q-cholesky-2',
      prompt: 'At the start of the Cholesky algorithm, the first diagonal element of L is:',
      options: ['l₁₁ = √a₁₁', 'l₁₁ = 1/a₁₁', 'l₁₁ = a₁₁', 'l₁₁ = a₁₁/2'],
      answer: 0,
      explanation: 'From A = LLᵀ, l₁₁² = a₁₁, so l₁₁ = √a₁₁.',
    },
    {
      id: 'q-cholesky-3',
      prompt: 'For a symmetric matrix A, the Cholesky factorization is:',
      options: ['A = LLᵀ', 'A = UᵀU', 'A = LᵀU', 'A = LU'],
      answer: 0,
      explanation: 'Cholesky writes a symmetric positive-definite A as LLᵀ with L lower triangular.',
    },
    {
      id: 'q-cholesky-4',
      prompt:
        'The approximate number of multiplications/divisions to Cholesky-factor an n×n matrix is:',
      options: ['n³/3', 'n³/6', 'n', 'n²'],
      answer: 1,
      explanation: 'Cholesky costs about n³/6, roughly half of LU, by exploiting symmetry.',
    },
    {
      id: 'q-cholesky-5',
      prompt: 'Which condition guarantees that the Cholesky factorization exists?',
      options: [
        'A is skew-symmetric',
        'A is strictly upper triangular',
        'A is symmetric and positive definite',
        'A is singular',
      ],
      answer: 2,
      explanation: 'Cholesky exists (and is unique with positive diagonal) iff A is symmetric positive definite.',
    },
  ],
};

export function getQuiz(sectionId: string): QuizQuestion[] {
  return QUIZZES[sectionId] ?? [];
}
