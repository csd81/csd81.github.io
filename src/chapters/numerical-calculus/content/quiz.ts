import type { QuizQuestion } from '../../../shared/ui/Quiz';

/**
 * Multiple-choice questions for Chapter 7 (Numerical Calculus), parsed from the
 * shared quiz bank. Keyed by lesson slug:
 *   7_1 ← quiz.md §7.1 Numerical Differentiation
 *   7_2 ← Richardson's extrapolation (no questions in the quiz bank)
 *   7_3 ← quiz.md §7.3 Newton–Cotes Formulas
 *   7_4 ← quiz.md §7.4 Gaussian Quadrature
 */
const QUIZZES: Record<string, QuizQuestion[]> = {
  '7_1': [
    {
      id: 'q-7_1-1',
      prompt: 'Which is NOT true for numerical differentiation?',
      options: [
        'The approximate derivative can be obtained by differentiating a Lagrange interpolating polynomial',
        'It is sensitive with respect to rounding error',
        'It is a well-conditioned mathematical problem',
        'The approximate derivative can be obtained with the help of the Taylor formula',
      ],
      answer: 2,
      explanation: 'Numerical differentiation is ill-conditioned: small input errors are strongly amplified.',
    },
    {
      id: 'q-7_1-2',
      prompt: 'What is the main cause of instability in numerical differentiation for small h?',
      options: [
        'Truncation error increases',
        'Step size is too large',
        'Rounding error increases',
        'Function value becomes zero',
      ],
      answer: 2,
      explanation: 'Dividing nearly-equal values by a tiny h magnifies rounding error.',
    },
    {
      id: 'q-7_1-3',
      prompt: 'Order of accuracy of f′(x₀) ≈ (f(x₀ + h) − f(x₀)) / h:',
      options: ['First', 'Second', 'Fourth', 'Zero'],
      answer: 0,
      explanation: 'The forward difference has first-order accuracy, O(h).',
    },
    {
      id: 'q-7_1-4',
      prompt: 'Error term of the forward difference f′(x₀) ≈ (f(x₀ + h) − f(x₀)) / h:',
      options: [
        '(h/2) f″(x₀)',
        '(h²/2) f″(x₀)',
        '−h f″(x₀)',
        '−(h/2) f″(ξ)',
      ],
      answer: 3,
      explanation: 'Taylor expansion gives the leading error −(h/2) f″(ξ).',
    },
    {
      id: 'q-7_1-5',
      prompt: 'Which component contributes to the total error in the forward difference?',
      options: [
        'Only Taylor expansion error',
        'Only truncation error',
        'Truncation and rounding errors',
        'Only rounding error',
      ],
      answer: 2,
      explanation: 'Total error combines O(h) truncation and O(ε/h) rounding error.',
    },
  ],
  '7_3': [
    {
      id: 'q-7_3-1',
      prompt: 'In Newton–Cotes formulas, the weights are determined by:',
      options: [
        'Integrating Lagrange basis polynomials',
        'Taylor expansions',
        'Solving differential equations',
        'Rounding approximations',
      ],
      answer: 0,
      explanation: 'The weights come from integrating the Lagrange basis over the interval.',
    },
    {
      id: 'q-7_3-2',
      prompt: 'Which Newton–Cotes formula uses all mesh points inside the open interval?',
      options: ['Open', 'Closed', 'Exact', 'Composite'],
      answer: 0,
      explanation: 'Open Newton–Cotes formulas exclude the endpoints, using only interior points.',
    },
    {
      id: 'q-7_3-3',
      prompt: 'What is the weight for the middle point in Simpson’s rule?',
      options: ['2', '1', '3', '4'],
      answer: 3,
      explanation: 'Simpson’s rule has the weight pattern 1, 4, 1, so the middle weight is 4.',
    },
    {
      id: 'q-7_3-4',
      prompt: "What does 'composite' in the composite trapezoidal rule refer to?",
      options: [
        'Computing indefinite integrals',
        'Combining differentiation and integration',
        'Using second derivatives in the estimate',
        'Using multiple trapezoids over subintervals',
      ],
      answer: 3,
      explanation: 'A composite rule sums the basic rule over many subintervals.',
    },
    {
      id: 'q-7_3-5',
      prompt: 'Which Simpson-based rule uses three subintervals (four points)?',
      options: [
        'Trapezoidal rule',
        'Simpson’s 3/8 rule',
        "Composite Simpson's rule",
        'Midpoint rule',
      ],
      answer: 1,
      explanation: 'Simpson’s 3/8 rule integrates over three subintervals (four nodes).',
    },
  ],
  '7_4': [
    {
      id: 'q-7_4-1',
      prompt: 'What kind of error decay does Gaussian quadrature exhibit for smooth functions?',
      options: ['Polynomial decay', 'Linear decay', 'No decay', 'Exponential decay'],
      answer: 3,
      explanation: 'For analytic/smooth integrands, Gaussian quadrature converges exponentially.',
    },
    {
      id: 'q-7_4-2',
      prompt: 'Which polynomials define the orthogonality in standard Gaussian quadrature?',
      options: [
        'Chebyshev polynomials',
        'Hermite polynomials',
        'Legendre polynomials',
        'Laguerre polynomials',
      ],
      answer: 2,
      explanation: 'Standard Gauss–Legendre quadrature uses the Legendre polynomials (weight 1).',
    },
    {
      id: 'q-7_4-3',
      prompt: 'Maximum polynomial degree for which an n-point Gaussian quadrature is exact:',
      options: ['n − 1', 'n', '2n', '2n − 1'],
      answer: 3,
      explanation: 'n-point Gaussian quadrature is exact for polynomials up to degree 2n − 1.',
    },
    {
      id: 'q-7_4-4',
      prompt: 'The 2-point Gaussian quadrature approximation of ∫₋₁¹ f(x) dx is:',
      options: [
        'f(−√3/3) + f(√3/3)',
        'f(−1) + f(1)',
        '½[f(−√2/2) + f(√2/2)]',
        'f(0)',
      ],
      answer: 0,
      explanation: 'Nodes ±1/√3 = ±√3/3 with unit weights give the 2-point Gauss rule.',
    },
    {
      id: 'q-7_4-5',
      prompt: 'Transformation to apply Gaussian quadrature on [a, b]:',
      options: [
        'x = (a + b)/2 + t',
        'x = (b − a)/2 · t + (a + b)/2',
        'x = (b − a)/(t + 1)',
        'x = t · (b − a)',
      ],
      answer: 1,
      explanation: 'This affine map sends [−1, 1] onto [a, b].',
    },
  ],
};

export function getQuiz(sectionId: string): QuizQuestion[] {
  return QUIZZES[sectionId] ?? [];
}
