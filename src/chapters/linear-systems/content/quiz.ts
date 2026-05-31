import type { QuizQuestion } from '../../../shared/ui/Quiz';

/**
 * Multiple-choice questions for Chapter 3, keyed by the chapter's section ids
 * (content/sections.ts: s31–s37). Questions come from quiz.md §3.1–§3.6.
 * The quiz.md numbering is topic-based and differs from the app's section
 * numbers, so each quiz.md subsection is mapped to the matching section id:
 *   §3.1 Triangular Systems                  → s32 (Triangular Systems)
 *   §3.2 Gaussian Elimination & Pivoting     → s33 (Gaussian Elimination & Pivoting)
 *   §3.2.1 Partial Pivoting                  → s33
 *   §3.2.2 Complete Pivoting                 → s33 (pivoting items) + s31 (linear-algebra items)
 *   §3.3 Gauss–Jordan Elimination            → s34
 *   §3.4 Tridiagonal Linear Systems          → s35
 *   §3.5 Simultaneous Linear Systems         → s36
 *   §3.6 Matrix Inversion and Determinants   → s37
 * The positive-definiteness / diagonal-dominance items of §3.2.2 belong to the
 * linear-algebra review (s31), so they are attached there.
 */
const QUIZZES: Record<string, QuizQuestion[]> = {
  // §3.2.2 items that are really linear-algebra review (positive definiteness,
  // diagonal dominance) → Review of Linear Algebra.
  s31: [
    {
      id: 'q-s31-1',
      prompt: 'An $n$-dimensional symmetric square matrix $A=(a_{ij})$ is positive definite if and only if:',
      options: [
        '$a_{ij}>0, \\quad i,j=1,\\ldots,n$',
        'All of its principal minors are positive',
        '$\\det(A)\\neq0$',
        '$\\det(A)>0$',
      ],
      answer: 1,
      explanation: 'Sylvester\'s criterion: a symmetric matrix is positive definite iff all leading principal minors are positive.',
    },
    {
      id: 'q-s31-2',
      prompt: 'An $n$-dimensional square matrix $A=(a_{ij})$ is positive definite if it is symmetric and:',
      options: [
        '$x^T Ax>0 \\quad \\text{for all } x\\neq0$',
        '$x^T Ax\\geq 0 \\quad \\text{for all } x\\neq0$',
        '$a_{ij}>0, \\quad i,j=1,\\ldots,n$',
        '$x^T Ax<0 \\quad \\text{for all } x\\neq0$',
      ],
      answer: 0,
      explanation: 'Positive definiteness is defined by the quadratic form xᵀAx > 0 for every nonzero x.',
    },
    {
      id: 'q-s31-3',
      prompt: 'If $A$ is diagonally dominant, then:',
      options: [
        '$A$ is invertible',
        'The linear system $Ax=b$ has a unique solution',
        '$\\det(A)\\neq0$',
        'All the above properties hold',
      ],
      answer: 3,
      explanation: 'Strict diagonal dominance implies invertibility, det(A) ≠ 0, and a unique solution — all of them.',
    },
  ],
  // §3.1 Triangular Systems
  s32: [
    {
      id: 'q-s32-1',
      prompt: 'The determinant of a triangular matrix is equal to:',
      options: [
        'The product of all matrix elements.',
        'Zero if any off-diagonal element is non-zero.',
        'The product of diagonal elements.',
        'The sum of diagonal elements.',
      ],
      answer: 2,
      explanation: 'For a triangular matrix the determinant is the product of the diagonal entries.',
    },
    {
      id: 'q-s32-2',
      prompt: 'Which of the following best describes the shape of the matrix for backward substitution?',
      options: [
        'Full matrix with no special structure',
        'Upper triangular matrix',
        'Lower triangular matrix',
        'Sparse matrix',
      ],
      answer: 1,
      explanation: 'Backward substitution solves an upper triangular system from the last unknown upward.',
    },
    {
      id: 'q-s32-3',
      prompt: 'What is the time complexity (in terms of multiplications/divisions) of solving an upper triangular system using backward substitution?',
      options: ['$O(n^2)$', '$O(n \\log n)$', '$O(n^3)$', '$O(n)$'],
      answer: 0,
      explanation: 'Backward substitution costs about n²/2 multiplications/divisions, i.e. O(n²).',
    },
    {
      id: 'q-s32-4',
      prompt: 'What is the primary numerical method used for solving upper triangular systems?',
      options: [
        'Gaussian elimination',
        'Forward substitution',
        'Backward substitution',
        'LU decomposition',
      ],
      answer: 2,
      explanation: 'Upper triangular systems are solved directly by backward substitution.',
    },
    {
      id: 'q-s32-5',
      prompt: 'How many additions and subtractions are required in backward substitution for an $n$-dimensional triangular linear system?',
      options: [
        '$\\frac{n^2}{4}+\\mathcal{O}(n)$',
        '$n^2 +\\mathcal{O}(n)$',
        '$\\frac{n^2}{2} +\\mathcal{O}(n)$',
        '$\\frac{n^2}{3}+\\mathcal{O}(n)$',
      ],
      answer: 2,
      explanation: 'The additions/subtractions total (n−1)n/2 = n²/2 + O(n).',
    },
  ],
  // §3.2 Gaussian Elimination & Pivoting, §3.2.1 Partial Pivoting, and the
  // pivoting items of §3.2.2 Complete Pivoting.
  s33: [
    {
      id: 'q-s33-1',
      prompt: 'What happens when a zero pivot is encountered during Gaussian elimination without pivoting?',
      options: [
        'The algorithm continues with the next row',
        'The row is skipped',
        'The algorithm cannot be continued, and it does not provide a solution',
        'The matrix becomes diagonal',
      ],
      answer: 2,
      explanation: 'Dividing by a zero pivot is impossible, so without pivoting the elimination breaks down.',
    },
    {
      id: 'q-s33-2',
      prompt: 'What can we try to do if a pivot element is 0 in the Gaussian elimination?',
      options: [
        'Use Newton method',
        'Omit that row from the equation',
        'We can change rows in the equation',
        'Use forward substitution first',
      ],
      answer: 2,
      explanation: 'Swapping in a row with a nonzero pivot (pivoting) lets elimination continue.',
    },
    {
      id: 'q-s33-3',
      prompt: 'What is the time complexity of Gaussian elimination in terms of the number of operations?',
      options: ['$O(n^3)$', '$O(n^2)$', '$O(n)$', '$O(n \\log n)$'],
      answer: 0,
      explanation: 'Gaussian elimination costs about n³/3 operations, i.e. O(n³).',
    },
    {
      id: 'q-s33-4',
      prompt: 'Which form does the system take after performing all steps of Gaussian elimination?',
      options: ['Upper triangular form', 'Lower triangular form', 'Symmetric form', 'Diagonal matrix'],
      answer: 0,
      explanation: 'Forward elimination reduces the coefficient matrix to upper triangular form.',
    },
    {
      id: 'q-s33-5',
      prompt: 'What is the form of the starting matrix if we solve a linear system $Ax=b$ with Gaussian elimination?',
      options: [
        'We use the augmented matrix $(A|b)$',
        'We use the augmented matrix $(A|A|b)$',
        'We use the augmented matrix $(A|I)$',
        'We use the augmented matrix $(b|A)$',
      ],
      answer: 0,
      explanation: 'Elimination operates on the augmented matrix (A | b).',
    },
    {
      id: 'q-s33-6',
      prompt: 'Which of the following is an advantage of partial pivoting?',
      options: [
        'Reduces the number of operations',
        'Improves numerical accuracy by avoiding division by small numbers',
        'Simplifies matrix storage',
        'Ensures exact solutions',
      ],
      answer: 1,
      explanation: 'Choosing the largest-magnitude pivot avoids dividing by tiny numbers, improving accuracy.',
    },
    {
      id: 'q-s33-7',
      prompt: 'In partial pivoting, which operation is performed after selecting the pivot?',
      options: ['Diagonalization', 'Matrix inversion', 'Row swapping', 'Column swapping'],
      answer: 2,
      explanation: 'Partial pivoting swaps the chosen row into the pivot position (rows only).',
    },
    {
      id: 'q-s33-8',
      prompt: 'In partial pivoting, if all entries in the pivot column below the diagonal are zero, then:',
      options: [
        'The system has no solution or infinitely many solutions',
        'Column swapping is needed',
        'The matrix is symmetric',
        'The pivot is the diagonal entry',
      ],
      answer: 0,
      explanation: 'A fully zero pivot column means the matrix is singular, so there is no unique solution.',
    },
    {
      id: 'q-s33-9',
      prompt: 'In Gaussian elimination, what is the purpose of pivoting?',
      options: [
        'To increase the rank of the matrix',
        'To simplify the system to a homogeneous one',
        'To improve numerical stability',
        'To reduce computational time',
      ],
      answer: 2,
      explanation: 'Pivoting improves numerical stability (and avoids zero pivots).',
    },
    {
      id: 'q-s33-10',
      prompt: 'What kind of matrix can cause Gaussian elimination to fail without pivoting?',
      options: ['Singular matrix', 'Sparse matrix', 'Orthogonal matrix', 'Symmetric matrix'],
      answer: 0,
      explanation: 'A singular matrix yields a zero pivot, causing breakdown without pivoting.',
    },
    {
      id: 'q-s33-11',
      prompt: 'In complete pivoting, the pivot element is chosen from:',
      options: [
        'The current diagonal',
        'The entire matrix',
        'The current column',
        'The submatrix of the coefficients from the current row and column onward',
      ],
      answer: 3,
      explanation: 'Complete pivoting searches the remaining submatrix (rows and columns from k onward).',
    },
    {
      id: 'q-s33-12',
      prompt: 'What does complete pivoting involve?',
      options: [
        'Swapping both rows and columns to position the largest element on the pivot',
        'Only column swaps',
        'Swapping diagonal elements',
        'Only row swaps',
      ],
      answer: 0,
      explanation: 'Complete pivoting swaps both rows and columns to bring the largest entry to the pivot.',
    },
  ],
  // §3.3 Gauss–Jordan Elimination
  s34: [
    {
      id: 'q-s34-1',
      prompt: 'The Gauss-Jordan method is primarily used for which of the following purposes?',
      options: [
        'Approximating integrals',
        'Solving non-linear equations',
        'Finding exact solutions to linear systems or computing matrix inverses',
        'Computing eigenvalues',
      ],
      answer: 2,
      explanation: 'Gauss–Jordan reduces (A | b) to (I | x) and is also the standard way to invert a matrix.',
    },
    {
      id: 'q-s34-2',
      prompt: 'Which row operation is used to eliminate both upper and lower elements in a column?',
      options: ['Full pivoting', 'Gauss-Jordan elimination', 'Backward substitution', 'Forward elimination'],
      answer: 1,
      explanation: 'Gauss–Jordan clears entries both above and below each pivot.',
    },
    {
      id: 'q-s34-3',
      prompt: 'Which of the following operations is NOT used in Gauss-Jordan elimination?',
      options: [
        'Swapping rows',
        'Multiplying a row by a non-zero scalar',
        'Multiplying a column by a non-zero scalar',
        'Adding a multiple of one row to another',
      ],
      answer: 2,
      explanation: 'Only elementary row operations are allowed; scaling a column is not one of them.',
    },
    {
      id: 'q-s34-4',
      prompt: 'In Gauss-Jordan elimination, how are the non-pivot elements in the pivot column handled?',
      options: [
        'They are reduced to 1',
        'They are made zero',
        'They are copied to the result matrix',
        'They are left as is',
      ],
      answer: 1,
      explanation: 'Every off-pivot entry in the pivot column is eliminated to zero.',
    },
    {
      id: 'q-s34-5',
      prompt: 'How is a pivot element treated during Gauss-Jordan elimination?',
      options: [
        'It is left unchanged',
        'It is scaled to 1 and used to eliminate all other entries in its column',
        'It is replaced by a random number',
        'It is eliminated from the matrix',
      ],
      answer: 1,
      explanation: 'The pivot row is normalized so the pivot is 1, then used to zero the rest of the column.',
    },
  ],
  // §3.4 Tridiagonal Linear Systems
  s35: [
    {
      id: 'q-s35-1',
      prompt: 'What type of numerical issue can arise in the tridiagonal Gaussian elimination algorithm if the pivot is zero?',
      options: ['Loss of orthogonality', 'Division by zero', 'Infinite loop', 'Overflow error'],
      answer: 1,
      explanation: 'A zero pivot forces a division by zero in the elimination.',
    },
    {
      id: 'q-s35-2',
      prompt: 'The tridiagonal Gaussian elimination algorithm assumes what property of the coefficient matrix?',
      options: ['Non-zero diagonal entries', 'Orthogonality', 'Symmetry', 'Diagonal dominance'],
      answer: 0,
      explanation: 'The pivot-free Thomas algorithm needs the diagonal entries to stay nonzero.',
    },
    {
      id: 'q-s35-3',
      prompt: 'Which method is typically used to solve diagonally dominant tridiagonal linear systems efficiently?',
      options: [
        'Gaussian elimination without pivoting',
        'Gaussian elimination with complete pivoting',
        'Jacobi method',
        'Gauss-Jordan elimination',
      ],
      answer: 0,
      explanation: 'Diagonal dominance makes pivoting unnecessary, so the O(n) Thomas algorithm (Gaussian elimination without pivoting) is used.',
    },
    {
      id: 'q-s35-4',
      prompt: 'For an $n$-dimensional tridiagonal system, the Gaussian elimination for a tridiagonal system requires how many operations (approximately)?',
      options: ['$O(n^2)$', '$O(\\log n)$', '$O(n^3)$', '$O(n)$'],
      answer: 3,
      explanation: 'The Thomas algorithm uses only about 5n−4 operations, i.e. O(n).',
    },
    {
      id: 'q-s35-5',
      prompt: 'Which component is NOT part of a typical tridiagonal matrix representation?',
      options: ['Super-diagonal', 'Main diagonal', 'Corner elements', 'Sub-diagonal'],
      answer: 2,
      explanation: 'A tridiagonal matrix has only the sub-, main, and super-diagonals — no corner elements.',
    },
  ],
  // §3.5 Simultaneous Linear Systems
  s36: [
    {
      id: 'q-s36-1',
      prompt: 'Which of the following can be used to solve simultaneous linear systems?',
      options: ['Bisection method', 'Secant method', 'Gaussian elimination', 'Newton method'],
      answer: 2,
      explanation: 'Gaussian (or Gauss–Jordan) elimination on (A | B) solves all right-hand sides at once.',
    },
    {
      id: 'q-s36-2',
      prompt: 'Consider the simultaneous linear system $Ax^{(i)} = b^{(i)}$; we use Gauss-Jordan elimination on the block matrix $(A,B)$, resulting in $(I,X)$. What are the solutions?',
      options: [
        'May have no solution or infinitely many solutions',
        'The vector $x^{(i)}$ will be the i-th column vector of $X$',
        'Never has a solution',
        'We use backward substitution after the last elimination step.',
      ],
      answer: 1,
      explanation: 'Each solution x^(i) appears as the corresponding column of X.',
    },
    {
      id: 'q-s36-3',
      prompt: 'What type of coefficient matrix leads to a unique solution in a simultaneous system?',
      options: ['Singular matrix', 'Zero matrix', 'Sparse matrix', 'Invertible matrix'],
      answer: 3,
      explanation: 'An invertible (nonsingular) A gives a unique solution for each right-hand side.',
    },
    {
      id: 'q-s36-4',
      prompt: 'Which method transforms a simultaneous system into an upper triangular form?',
      options: ['Forward substitution', 'Backward substitution', 'Gauss-Jordan elimination', 'Gaussian elimination'],
      answer: 3,
      explanation: 'Gaussian elimination reduces the system to upper triangular form (Gauss–Jordan goes all the way to the identity).',
    },
    {
      id: 'q-s36-5',
      prompt: 'What condition must be met for an $n$-dimensional linear system to have a unique solution?',
      options: [
        'All coefficients must be positive',
        'The determinant of the coefficient matrix must be non-zero',
        'The system must be homogeneous',
        'The right-hand side must be zero',
      ],
      answer: 1,
      explanation: 'A unique solution exists exactly when det(A) ≠ 0.',
    },
  ],
  // §3.6 Matrix Inversion and Determinants
  s37: [
    {
      id: 'q-s37-1',
      prompt: 'What is the result of applying Gauss-Jordan elimination to an augmented matrix $(A|I)$?',
      options: [
        'A matrix with determinant equal to one',
        'A matrix with only zero entries',
        'A diagonal matrix',
        'The inverse of $A$ appears in place of $I$',
      ],
      answer: 3,
      explanation: 'Reducing (A | I) to (I | A⁻¹) produces the inverse in the right block.',
    },
    {
      id: 'q-s37-2',
      prompt: 'What happens to the determinant if one row of a matrix is multiplied by a scalar $k$?',
      options: [
        'The determinant remains the same',
        'The determinant is divided by $k$',
        'The determinant becomes zero',
        'The determinant is multiplied by $k$',
      ],
      answer: 3,
      explanation: 'Scaling a single row by k multiplies the determinant by k.',
    },
    {
      id: 'q-s37-3',
      prompt: 'If $\\det(A) = 0$, then:',
      options: [
        '$A$ is invertible',
        'The system $Ax = b$ has a unique solution',
        'The matrix $A$ is diagonal',
        '$A$ is singular',
      ],
      answer: 3,
      explanation: 'A zero determinant means A is singular (non-invertible).',
    },
    {
      id: 'q-s37-4',
      prompt: 'What is the determinant of the $n$-dimensional identity matrix $I_n$?',
      options: ['n', '1', 'Depends on the size', '0'],
      answer: 1,
      explanation: 'The identity matrix has determinant 1 for any size.',
    },
    {
      id: 'q-s37-5',
      prompt: 'What condition must be true for a square matrix to have an inverse using Gauss-Jordan elimination?',
      options: [
        'It must be symmetric',
        'Its determinant must be non-zero',
        'It must be diagonal',
        'It must have all diagonal entries equal to 1',
      ],
      answer: 1,
      explanation: 'A matrix is invertible iff its determinant is nonzero.',
    },
  ],
};

export function getQuiz(sectionId: string): QuizQuestion[] {
  return QUIZZES[sectionId] ?? [];
}
