import type { QuizQuestion } from '../../../shared/ui/Quiz';

/**
 * Multiple-choice questions for Chapter 4 (Iterative Techniques), parsed from
 * the shared quiz bank. Keyed by the chapter's scrollytelling section ids:
 *   fixed-point  ← quiz.md §4.1 Linear Fixed-Point Iteration
 *   jacobi-gs    ← quiz.md §4.2 Jacobi + §4.3 Gauss–Seidel
 *   spectral     ← spectral-radius / Neumann-series subset of §4.1
 *   condition    ← quiz.md §4.4 Error Bounds & Condition Number + §4.5 Perturbation
 */
const QUIZZES: Record<string, QuizQuestion[]> = {
  'fixed-point': [
    {
      id: 'q-fixed-point-1',
      prompt:
        'If rounding errors w^(k) are present in x^(k+1) = T x^(k) + c and ‖T‖ < 1, the cumulative error is bounded by:',
      options: [
        '‖w^(0)‖ + … + ‖w^(k)‖',
        'ε / (1 + ‖T‖)',
        'ε / (1 − ‖T‖)',
        '∑ ‖w^(k)‖ (infinite sum)',
      ],
      answer: 2,
      explanation:
        'A geometric-series argument with contraction factor ‖T‖ < 1 gives the bound ε / (1 − ‖T‖).',
    },
    {
      id: 'q-fixed-point-2',
      prompt:
        'What convergence does x^(k+1) = T x^(k) + c have when ρ(T) < 1?',
      options: [
        'The iteration does not converge',
        'Convergence only for x^(0) = 0',
        'Convergence only if x^(0) is close to the fixed point',
        'Convergence for an arbitrary initial value x^(0)',
      ],
      answer: 3,
      explanation:
        'For a linear (affine) iteration, ρ(T) < 1 gives global convergence from any starting vector.',
    },
    {
      id: 'q-fixed-point-3',
      prompt:
        'What is the convergence condition for the Neumann series I + A + A² + A³ + …?',
      options: ['ρ(A) = 1', '‖A‖ = 1', 'ρ(A) < 1', '‖A‖ > 1'],
      answer: 2,
      explanation: 'The Neumann series converges iff the spectral radius ρ(A) < 1.',
    },
    {
      id: 'q-fixed-point-4',
      prompt: 'What is the spectral radius ρ(T) of a matrix T?',
      options: [
        'Minimum eigenvalue of T',
        'Largest eigenvalue of T',
        'Maximum row sum of T',
        'Maximum absolute value of the eigenvalues of T',
      ],
      answer: 3,
      explanation: 'ρ(T) = max |λ_i| over all eigenvalues λ_i of T.',
    },
    {
      id: 'q-fixed-point-5',
      prompt: 'When ρ(A) < 1, what does the Neumann series represent?',
      options: ['(I − A)⁻¹', 'A⁻¹', 'Aᵏ', 'A + A² + A³ + …'],
      answer: 0,
      explanation: 'I + A + A² + … = (I − A)⁻¹ when ρ(A) < 1.',
    },
  ],
  spectral: [
    {
      id: 'q-spectral-1',
      prompt: 'What is the spectral radius ρ(T) of a matrix T?',
      options: [
        'Minimum eigenvalue of T',
        'Largest eigenvalue of T',
        'Maximum row sum of T',
        'Maximum absolute value of the eigenvalues of T',
      ],
      answer: 3,
      explanation: 'ρ(T) = max |λ_i| over the eigenvalues of T.',
    },
    {
      id: 'q-spectral-2',
      prompt:
        'What convergence does x^(k+1) = T x^(k) + c have when ρ(T) < 1?',
      options: [
        'It does not converge',
        'Only for x^(0) = 0',
        'Only near the fixed point',
        'For an arbitrary initial value x^(0)',
      ],
      answer: 3,
      explanation: 'ρ(T) < 1 yields global convergence of the affine iteration.',
    },
    {
      id: 'q-spectral-3',
      prompt: 'For which matrix does the Neumann series I + A + A² + … converge?',
      options: ['ρ(A) = 1', '‖A‖ = 1', 'ρ(A) < 1', '‖A‖ > 1'],
      answer: 2,
      explanation: 'Convergence requires the spectral radius ρ(A) < 1.',
    },
  ],
  'jacobi-gs': [
    // §4.2 Jacobi
    {
      id: 'q-jacobi-gs-1',
      prompt: 'The Jacobi iteration matrix T is defined as:',
      options: [
        'T = −L⁻¹(D + U)',
        'T = −D⁻¹(L + U)',
        'T = D⁻¹(L + U)',
        'T = (D + L)⁻¹U',
      ],
      answer: 1,
      explanation:
        'With A = D + L + U, Jacobi gives x^(k+1) = −D⁻¹(L + U)x^(k) + D⁻¹b, so T = −D⁻¹(L + U).',
    },
    {
      id: 'q-jacobi-gs-2',
      prompt:
        'What does ‖T_J‖∞ = max_i ∑_{j≠i} |a_ij / a_ii| < 1 imply?',
      options: [
        'Solution cannot be found',
        'Jacobi iteration is convergent',
        'Matrix is singular',
        'Jacobi iteration is divergent',
      ],
      answer: 1,
      explanation: 'A norm of the iteration matrix below 1 is a sufficient condition for convergence.',
    },
    {
      id: 'q-jacobi-gs-3',
      prompt: 'What does diagonal dominance of A imply for Jacobi iteration?',
      options: ['‖T_J‖ = 1', 'ρ(T_J) > 1', 'ρ(T_J) < 1', '‖T_J‖ > 1'],
      answer: 2,
      explanation: 'Strict diagonal dominance forces ρ(T_J) < 1, so Jacobi converges.',
    },
    {
      id: 'q-jacobi-gs-4',
      prompt: 'Which iteration form is used in the Jacobi method?',
      options: [
        'x^(k+1) = T x^(k) + c',
        'x^(k) = T x^(k+1) + c',
        'x^(k+1) = T⁻¹ x^(k) + c',
        'x^(k) = T⁻¹ x^(k+1) + c',
      ],
      answer: 0,
      explanation: 'Jacobi is the affine fixed-point form x^(k+1) = T x^(k) + c.',
    },
    {
      id: 'q-jacobi-gs-5',
      prompt: 'What is the structure of matrix D in Jacobi iteration?',
      options: [
        'Matrix with diagonal elements of A, zeros elsewhere',
        'Diagonal matrix with all ones',
        'Lower triangular matrix',
        'Upper triangular matrix',
      ],
      answer: 0,
      explanation: 'D holds the diagonal entries of A and zeros off-diagonal.',
    },
    // §4.3 Gauss–Seidel
    {
      id: 'q-jacobi-gs-6',
      prompt: 'What is the matrix T in the Gauss–Seidel method?',
      options: [
        'T = D⁻¹(L + U)',
        'T = −(D + L)⁻¹U',
        'T = (D + L)⁻¹U',
        'T = −(L + U)⁻¹D',
      ],
      answer: 1,
      explanation: 'Gauss–Seidel uses (D + L)x^(k+1) = −U x^(k) + b, so T = −(D + L)⁻¹U.',
    },
    {
      id: 'q-jacobi-gs-7',
      prompt: 'What values does Gauss–Seidel use within the same step?',
      options: [
        'All values from the previous step',
        'Most recent computed values',
        'Only previously computed values',
        'Only constants',
      ],
      answer: 1,
      explanation: 'Gauss–Seidel immediately reuses the freshly updated components.',
    },
    {
      id: 'q-jacobi-gs-8',
      prompt: 'What is the convergence condition for Gauss–Seidel?',
      options: ['‖T_G‖ > 1', 'ρ(T_G) > 1', '‖T_G‖ = 1', 'ρ(T_G) < 1'],
      answer: 3,
      explanation: 'As for any linear iteration, convergence requires ρ(T_G) < 1.',
    },
    {
      id: 'q-jacobi-gs-9',
      prompt: 'If A is diagonally dominant, Gauss–Seidel:',
      options: [
        'Needs more iterations than Jacobi',
        'Is guaranteed to converge',
        'Diverges',
        'Requires A to be symmetric',
      ],
      answer: 1,
      explanation: 'Diagonal dominance guarantees Gauss–Seidel convergence.',
    },
    {
      id: 'q-jacobi-gs-10',
      prompt: 'Which property guarantees convergence of Gauss–Seidel?',
      options: [
        'A is symmetric',
        'A is upper triangular',
        'A is singular',
        'A is diagonally dominant',
      ],
      answer: 3,
      explanation: 'Diagonal dominance is a sufficient convergence condition.',
    },
  ],
  condition: [
    // §4.4 Error Bounds and the Condition Number
    {
      id: 'q-condition-1',
      prompt: 'Typical outcome of using an ill-conditioned matrix:',
      options: [
        'Large errors despite a small residual vector',
        'Accurate results',
        'Insensitivity to errors',
        'Fast convergence',
      ],
      answer: 0,
      explanation: 'A small residual can hide a large solution error when cond(A) is large.',
    },
    {
      id: 'q-condition-2',
      prompt: 'Which inequality provides an error bound using the residual r?',
      options: [
        '‖x − x̃‖ ≤ ‖A⁻¹‖ ‖r‖',
        '‖x − x̃‖ ≤ ‖A⁻¹‖⁻¹ ‖r‖',
        '‖x − x̃‖ ≤ ‖r‖',
        '‖x − x̃‖ ≤ ‖A‖ ‖r‖',
      ],
      answer: 0,
      explanation: 'Since A(x − x̃) = r, we get x − x̃ = A⁻¹r and ‖x − x̃‖ ≤ ‖A⁻¹‖‖r‖.',
    },
    {
      id: 'q-condition-3',
      prompt: 'A common stopping criterion in iterative methods:',
      options: [
        '‖x^(k+1) − x^(k)‖ < ε',
        '‖A x^(k) − b‖ > ε',
        '‖x^(k+1) − x^(k)‖ > ε',
        '‖x^(k)‖ < ε',
      ],
      answer: 0,
      explanation: 'Iteration stops once successive iterates change by less than ε.',
    },
    {
      id: 'q-condition-4',
      prompt: 'A small residual together with a large condition number implies:',
      options: ['Accurate solution', 'Small error', 'Possibly large error', 'No solution'],
      answer: 2,
      explanation: 'Error ≈ cond(A) × relative residual, so large cond(A) permits a large error.',
    },
    {
      id: 'q-condition-5',
      prompt: 'Which norm is commonly used when computing condition numbers?',
      options: ['Frobenius norm', '∞-norm', 'Euclidean norm', 'Operator norm'],
      answer: 3,
      explanation: 'cond(A) = ‖A‖‖A⁻¹‖ uses an induced (operator) matrix norm.',
    },
    // §4.5 Perturbation of Linear Systems
    {
      id: 'q-condition-6',
      prompt:
        'When both A and b are perturbed, which inequality estimates the total relative error?',
      options: [
        '‖x − x̃‖ ≤ ‖A⁻¹‖ · ( ‖A − Ã‖/‖A‖ + ‖b − b̃‖/‖b‖ )',
        'rel.err ≤ [cond(A) / (1 − cond(A)·‖A−Ã‖/‖A‖)] · ( ‖A−Ã‖/‖A‖ + ‖b−b̃‖/‖b‖ )',
        'rel.err ≤ cond(A) · ‖b − b̃‖',
        'rel.err ≤ cond(A) · ( ‖A−Ã‖/‖A‖ + ‖b−b̃‖/‖b‖ )',
      ],
      answer: 1,
      explanation:
        'The full first-order perturbation bound carries the amplification factor cond(A)/(1 − cond(A)·‖A−Ã‖/‖A‖).',
    },
    {
      id: 'q-condition-7',
      prompt: 'What does Gastinel’s theorem relate to?',
      options: [
        'Diagonal dominance',
        'Gaussian elimination',
        'Eigenvalue decomposition',
        'Proximity to singularity',
      ],
      answer: 3,
      explanation: 'Gastinel’s theorem characterises the distance of A to the nearest singular matrix.',
    },
    {
      id: 'q-condition-8',
      prompt: 'What condition ensures stability when both A and b are perturbed?',
      options: [
        'Ã = A',
        '‖A − Ã‖ = 0',
        '‖b − b̃‖ > ‖A‖',
        '‖A − Ã‖ < 1 / ‖A⁻¹‖',
      ],
      answer: 3,
      explanation: 'If the perturbation stays below 1/‖A⁻¹‖, the perturbed matrix remains invertible.',
    },
    {
      id: 'q-condition-9',
      prompt: 'Effect of rounding/approximation on an ill-conditioned system:',
      options: [
        'Exact solution',
        'No effect',
        'Significant deviation from the true solution',
        'Reduced computation time',
      ],
      answer: 2,
      explanation: 'Ill-conditioning amplifies small input perturbations into large solution errors.',
    },
    {
      id: 'q-condition-10',
      prompt: 'Which example matrix illustrates sensitivity to perturbation?',
      options: [
        'Identity matrix',
        'Random matrix',
        'Hilbert matrix',
        'Diagonally dominant matrix',
      ],
      answer: 2,
      explanation: 'The Hilbert matrix is a classic, notoriously ill-conditioned example.',
    },
  ],
};

export function getQuiz(sectionId: string): QuizQuestion[] {
  return QUIZZES[sectionId] ?? [];
}
