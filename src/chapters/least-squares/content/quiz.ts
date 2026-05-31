import type { QuizQuestion } from '../../../shared/ui/Quiz';

/**
 * Multiple-choice questions for Chapter 9 (Method of Least Squares),
 * keyed by section id. Parsed from quiz.md §9.1–9.3. Correct answers
 * (0-based index) determined by numerical-analysis knowledge.
 *
 * Section ids: intro (no questions), line (9.1), polynomial (9.2),
 * nonlinear (9.3).
 */
const QUIZ: Record<string, QuizQuestion[]> = {
  // 9.1 Line Fitting
  line: [
    {
      id: 'q-line-1',
      prompt:
        'What are the two equations in the Gaussian normal system derived from minimizing the least-squares error F(a, b)?',
      options: [
        'A system of equations solved by interpolation',
        'Two equations from setting the partial derivatives of F(a, b) to zero',
        'Equations derived from the maximum error',
        'The sum of residuals and their squares',
      ],
      answer: 1,
      explanation: 'The normal equations come from ∂F/∂a = 0 and ∂F/∂b = 0.',
    },
    {
      id: 'q-line-2',
      prompt: 'What does a positive determinant d of the coefficient matrix indicate?',
      options: [
        'The line fitting has multiple solutions',
        'There is no solution to the system',
        'The Gaussian normal equations have a unique solution',
        'The solution is not optimal',
      ],
      answer: 2,
      explanation: 'A nonzero (positive) determinant means the normal equations have a unique solution.',
    },
    {
      id: 'q-line-3',
      prompt: 'Which inequality guarantees that the determinant d of the Gaussian normal equations is positive?',
      options: [
        "Jensen's inequality",
        "Minkowski's inequality",
        "Hölder's inequality",
        'Cauchy–Bunyakovsky–Schwarz inequality',
      ],
      answer: 3,
      explanation: 'The Cauchy–Schwarz inequality (strict unless all xᵢ equal) makes n·Σxᵢ² − (Σxᵢ)² > 0.',
    },
    {
      id: 'q-line-4',
      prompt: 'What is the general form of the linear function used in line fitting?',
      options: ['g(x) = aˣ + b', 'g(x) = a x² + b', 'g(x) = a x + b', 'g(x) = a·ln(x) + b'],
      answer: 2,
      explanation: 'Line fitting models data with the straight line g(x) = a x + b.',
    },
    {
      id: 'q-line-5',
      prompt: 'Which condition ensures that F(a, b) has a local (and global) minimum?',
      options: [
        'The Hessian determinant D(a,b) is positive and ∂²F/∂a² > 0',
        'The second partial derivatives form a negative definite matrix',
        'The sum of the data points is constant',
        'The value of a is greater than b',
      ],
      answer: 0,
      explanation: 'A positive Hessian determinant with positive ∂²F/∂a² means F is convex → minimum.',
    },
  ],

  // 9.2 Polynomial Curve Fitting
  polynomial: [
    {
      id: 'q-polynomial-1',
      prompt: 'What is the role of the normal equations in polynomial fitting?',
      options: [
        'They give the interpolation polynomial',
        'They are used to calculate derivatives',
        'They find the mean of the data',
        'They determine the coefficients that minimize the least-squares error',
      ],
      answer: 3,
      explanation: 'The normal equations yield the coefficients minimizing the sum of squared residuals.',
    },
    {
      id: 'q-polynomial-2',
      prompt: 'What is the least-squares error function for polynomial curve fitting?',
      options: [
        'F = max |p(xᵢ) − yᵢ|',
        'F = Σ |p(xᵢ) − yᵢ|',
        'F = Σ (p(xᵢ) − yᵢ)²',
        'F = Σ (xᵢ − yᵢ)²',
      ],
      answer: 2,
      explanation: 'Least squares minimizes the sum of squared residuals Σ (p(xᵢ) − yᵢ)².',
    },
    {
      id: 'q-polynomial-3',
      prompt: 'How are the normal equations for polynomial fitting obtained?',
      options: [
        'By interpolation',
        'By setting all partial derivatives of the error function to zero',
        'By numerical integration',
        'By choosing the smallest coefficients',
      ],
      answer: 1,
      explanation: 'Setting every ∂F/∂cⱼ = 0 produces the linear normal equations.',
    },
    {
      id: 'q-polynomial-4',
      prompt: 'Which type of function is the error function F in polynomial fitting (in the coefficients)?',
      options: ['Quadratic', 'Linear', 'Logarithmic', 'Exponential'],
      answer: 0,
      explanation: 'F is a quadratic (convex) function of the unknown coefficients.',
    },
    {
      id: 'q-polynomial-5',
      prompt: 'What is true about the minimum found by minimizing the least-squares error in polynomial fitting?',
      options: [
        'It always lies on one of the data points',
        'It may not be unique',
        'It is always a local and global minimum',
        'It must be zero',
      ],
      answer: 2,
      explanation: 'Because F is convex (quadratic), its minimum is simultaneously local and global.',
    },
  ],

  // 9.3 Special Nonlinear Curve Fitting
  nonlinear: [
    {
      id: 'q-nonlinear-1',
      prompt: 'What type of equations are solved after linearization of nonlinear models?',
      options: [
        'Algebraic equations',
        'Trigonometric equations',
        'Differential equations',
        'Normal equations for linear regression',
      ],
      answer: 3,
      explanation: 'After linearizing, one solves the linear normal equations of ordinary line fitting.',
    },
    {
      id: 'q-nonlinear-2',
      prompt: 'What is the form of the error function for exponential curve fitting?',
      options: [
        'F(a, b) = Σ (a xᵢ + b − yᵢ)²',
        'F(a, b) = max |b·e^(a xᵢ) − yᵢ|',
        'F(a, b) = Σ |b·e^(a xᵢ) − yᵢ|',
        'F(a, b) = Σ (b·e^(a xᵢ) − yᵢ)²',
      ],
      answer: 3,
      explanation: 'For model y = b·e^(a x) the least-squares error is Σ (b·e^(a xᵢ) − yᵢ)².',
    },
    {
      id: 'q-nonlinear-3',
      prompt: 'After linearizing y = b·xᵃ, what data is used for linear fitting?',
      options: ['(x, ln y)', '(ln x, y)', '(ln x, ln y)', '(x, y)'],
      answer: 2,
      explanation: 'ln y = ln b + a·ln x, so one fits a line to (ln x, ln y).',
    },
    {
      id: 'q-nonlinear-4',
      prompt: 'Why is linearization used in exponential curve fitting?',
      options: [
        'To remove errors in the data',
        'To improve interpolation',
        'To convert logarithms to exponentials',
        'To convert the problem to line fitting',
      ],
      answer: 3,
      explanation: 'Taking logarithms turns the exponential model into a straight-line fitting problem.',
    },
    {
      id: 'q-nonlinear-5',
      prompt: 'What is the purpose of fitting a line to the transformed data in exponential curve fitting?',
      options: [
        'To estimate the parameters a and b',
        'To maximize the function',
        'To interpolate the data',
        'To find roots of the function',
      ],
      answer: 0,
      explanation: 'The line slope and intercept recover the model parameters a and b.',
    },
  ],
};

export function getQuiz(sectionId: string): QuizQuestion[] {
  return QUIZ[sectionId] ?? [];
}

export default getQuiz;
