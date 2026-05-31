import type { QuizQuestion } from '../../../shared/ui/Quiz';

/**
 * Multiple-choice questions for Chapter 8 (Minimization of Functions),
 * keyed by section id. Parsed from quiz.md §8.1–8.7. Correct answers
 * (0-based index) determined by numerical-analysis knowledge.
 */
const QUIZ: Record<string, QuizQuestion[]> = {
  // 8.1 Review of Calculus
  calculus: [
    {
      id: 'q-calculus-1',
      prompt:
        'Let f : ℝⁿ → ℝ be differentiable with a local extremum at a point a. What condition must hold at a?',
      options: [
        'The Hessian is negative definite at a',
        'The gradient is undefined at a',
        'All partial derivatives ∂f/∂xᵢ(a) = 0',
        "f''(a) = 0",
      ],
      answer: 2,
      explanation: 'At an interior local extremum the gradient vanishes, i.e. every first partial derivative is zero.',
    },
    {
      id: 'q-calculus-2',
      prompt: 'What type of matrix is the Hessian matrix?',
      options: [
        'A matrix of function values',
        'A matrix of first partial derivatives',
        'A matrix of tangent slopes',
        'A matrix of second partial derivatives',
      ],
      answer: 3,
      explanation: 'The Hessian collects all second-order partial derivatives ∂²f/∂xᵢ∂xⱼ.',
    },
    {
      id: 'q-calculus-3',
      prompt: 'Which of the following best describes the entries of the Hessian matrix?',
      options: ['∂²f/∂xᵢ∂xⱼ', '∇f', '∂f/∂xᵢ', 'f(xᵢ)'],
      answer: 0,
      explanation: 'Each entry of the Hessian is a second mixed partial derivative ∂²f/∂xᵢ∂xⱼ.',
    },
    {
      id: 'q-calculus-4',
      prompt:
        'For a twice continuously differentiable f(x,y) at a critical point (a,b), which indicates a local maximum (D is the Hessian determinant)?',
      options: [
        'D(a,b) = 0',
        'D(a,b) > 0 and ∂²f/∂x²(a,b) > 0',
        'D(a,b) > 0 and ∂²f/∂x²(a,b) < 0',
        'D(a,b) < 0',
      ],
      answer: 2,
      explanation: 'D > 0 with negative second derivative in x means the Hessian is negative definite → local maximum.',
    },
    {
      id: 'q-calculus-5',
      prompt:
        'If the determinant D(a,b) < 0 at a critical point (where both first partials vanish), then:',
      options: [
        'f has no extremum at (a,b)',
        'f has a local minimum at (a,b)',
        'The Hessian is positive definite',
        'f has a local maximum at (a,b)',
      ],
      answer: 0,
      explanation: 'A negative Hessian determinant indicates a saddle point — no extremum.',
    },
  ],

  // 8.2 Golden Section Search
  golden: [
    {
      id: 'q-golden-1',
      prompt:
        'If f(x) > f(y) during Golden Section Search (with a < x < y < b), which interval is chosen next?',
      options: ['[a, x]', '[a, y]', '[x, b]', '[y, b]'],
      answer: 2,
      explanation: 'A larger value at the left interior point x means the minimum lies to the right, so the bracket becomes [x, b].',
    },
    {
      id: 'q-golden-2',
      prompt:
        'What is the formula for the number of steps needed to reach a tolerance ε in Golden Section Search?',
      options: [
        'n = log ε / log 2',
        'n = (b − a) / ε',
        'n = log( ε / (b−a) ) / log r',
        'n = ε / (b − a)',
      ],
      answer: 2,
      explanation: 'The interval shrinks by factor r each step, so n = log(ε/(b−a)) / log r.',
    },
    {
      id: 'q-golden-3',
      prompt: 'What type of function is required for the Golden Section Search to work?',
      options: ['Piecewise function', 'Unimodal function', 'Multivariable function', 'Periodic function'],
      answer: 1,
      explanation: 'Golden Section Search needs a unimodal function on the interval (one minimum).',
    },
    {
      id: 'q-golden-4',
      prompt: 'Which equation defines the golden ratio r used in the method?',
      options: ['r = log(2)', 'r² + r − 1 = 0', 'r² − r + 1 = 0', 'r² = r + 1'],
      answer: 1,
      explanation: 'The reduction ratio r = (√5−1)/2 satisfies r² + r − 1 = 0.',
    },
    {
      id: 'q-golden-5',
      prompt: 'What is the golden ratio r used in the method?',
      options: ['(√5 − 1)/2', '1/2', '1/3', '(√3 − 1)/2'],
      answer: 0,
      explanation: 'The golden-section reduction factor is r = (√5 − 1)/2 ≈ 0.618.',
    },
  ],

  // 8.3 Simplex Method (Nelder–Mead)
  simplex: [
    {
      id: 'q-simplex-1',
      prompt: 'In the simplex method, which vertex is considered the "worst"?',
      options: [
        'The one with the largest function value',
        'The midpoint of an edge',
        'The one with the smallest function value',
        'The center of the simplex',
      ],
      answer: 0,
      explanation: 'When minimizing, the worst vertex has the largest function value.',
    },
    {
      id: 'q-simplex-2',
      prompt: 'If the reflected point xᵣ is better than all others, what step is considered in Nelder–Mead?',
      options: ['Expansion', 'Reflection', 'Termination', 'Contraction'],
      answer: 0,
      explanation: 'If reflection produces a new best point, the method tries expansion to go further in that direction.',
    },
    {
      id: 'q-simplex-3',
      prompt: 'What is done if the reflected point is worse than the current worst point?',
      options: ['Shrink the simplex', 'Expand the simplex', 'Stop the iteration', 'Use the same simplex'],
      answer: 0,
      explanation: 'If even reflection/contraction fails, the simplex shrinks toward the best vertex.',
    },
    {
      id: 'q-simplex-4',
      prompt: 'Which statement is true about the Nelder–Mead method?',
      options: [
        'It requires second-order derivatives',
        'It always converges quadratically',
        'It is limited to linear functions',
        'It is a direct search method using only function values',
      ],
      answer: 3,
      explanation: 'Nelder–Mead is a derivative-free direct search using only function evaluations.',
    },
    {
      id: 'q-simplex-5',
      prompt: 'How many vertices does an n-dimensional simplex have?',
      options: ['n²', 'n', '2n', 'n + 1'],
      answer: 3,
      explanation: 'A simplex in ℝⁿ has n + 1 vertices (e.g. a triangle in 2D).',
    },
  ],

  // 8.4 Gradient Method
  gradient: [
    {
      id: 'q-gradient-1',
      prompt: 'What is the goal when using the gradient method?',
      options: [
        'Find a global maximum',
        'Estimate the integral',
        'Solve a system of linear equations',
        'Find a local minimum',
      ],
      answer: 3,
      explanation: 'Steepest descent walks downhill along −∇f to find a local minimum.',
    },
    {
      id: 'q-gradient-2',
      prompt: 'Which is a characteristic of the optimal gradient method?',
      options: [
        'Always converges in one step',
        'Minimizes f along the negative gradient direction',
        'Maximizes the directional derivative',
        'Uses constant step size',
      ],
      answer: 1,
      explanation: 'The optimal (exact line-search) gradient method minimizes f along the −∇f direction at each step.',
    },
    {
      id: 'q-gradient-3',
      prompt: 'What is the formula for approximating component vᵢ of the gradient using first-order differences?',
      options: [
        'vᵢ = f(p + h·eᵢ) − f(p − h·eᵢ)',
        'vᵢ = ( f(p + h·eᵢ) − f(p) ) / h',
        'vᵢ = ( f(h) − f(0) ) / h',
        'vᵢ = ∂f/∂xᵢ',
      ],
      answer: 1,
      explanation: 'The forward (first-order) finite difference is ( f(p + h·eᵢ) − f(p) ) / h.',
    },
    {
      id: 'q-gradient-4',
      prompt: 'What is the optimal step size αₖ used for?',
      options: [
        'Maximizing f in the direction of the negative gradient vector',
        'Matching the gradient with the minimum',
        'Calculating the Hessian matrix',
        'Jumping to the point on the negative-gradient half-line where f is minimal',
      ],
      answer: 3,
      explanation: 'The optimal step size is the line-search minimizer of f along the −∇f half-line.',
    },
    {
      id: 'q-gradient-5',
      prompt: 'Which method updates the point using p^(k+1) = p^(k) − αₖ f′(p^(k))?',
      options: ['Simplex method', 'Gradient method', "Newton's method", 'Golden section method'],
      answer: 1,
      explanation: 'This is the gradient (steepest-descent) update rule.',
    },
  ],

  // 8.5 Solving Linear Systems with the Gradient Method
  linsys: [
    {
      id: 'q-linsys-1',
      prompt: 'When is the gradient method terminated in practice?',
      options: [
        'After one iteration',
        'When the determinant is 0',
        'When ‖r^(k)‖ is sufficiently small',
        'After 100 steps',
      ],
      answer: 2,
      explanation: 'Iteration stops when the residual norm ‖r^(k)‖ = ‖b − A p^(k)‖ is small enough.',
    },
    {
      id: 'q-linsys-2',
      prompt: 'What type of convergence is observed in the gradient method for linear systems?',
      options: ['Linear', 'Superlinear', 'Quadratic', 'Exponential'],
      answer: 0,
      explanation: 'Steepest descent converges linearly, with rate governed by the condition number of A.',
    },
    {
      id: 'q-linsys-3',
      prompt: 'For symmetric A, what is the gradient of g(x) = ½ xᵀA x − bᵀx + c?',
      options: ['A', 'A x − b', 'b − A x', 'Aᵀx + b'],
      answer: 1,
      explanation: 'For symmetric A, ∇g(x) = A x − b, so minimizing g solves A x = b.',
    },
    {
      id: 'q-linsys-4',
      prompt: 'What is the iteration formula for updating the solution vector p^(k)?',
      options: [
        'p^(k+1) = p^(k) + r^(k)',
        'p^(k+1) = p^(k) − αₖ A r^(k)',
        'p^(k+1) = A⁻¹ b',
        'p^(k+1) = p^(k) + αₖ r^(k)',
      ],
      answer: 3,
      explanation: 'The update moves along the residual direction: p^(k+1) = p^(k) + αₖ r^(k).',
    },
    {
      id: 'q-linsys-5',
      prompt: 'How is the step size αₖ calculated?',
      options: [
        'αₖ = (A r^(k))ᵀ r^(k) / ( (r^(k))ᵀ r^(k) )',
        'αₖ = (r^(k))ᵀ A r^(k) / ( (r^(k))ᵀ r^(k) )',
        'αₖ = (r^(k))ᵀ r^(k) / ( (r^(k))ᵀ A r^(k) )',
        'αₖ = 1 / ‖r^(k)‖',
      ],
      answer: 2,
      explanation: 'Exact line search along the residual gives αₖ = (rᵀr) / (rᵀA r).',
    },
  ],

  // 8.6 Newton's Method for Minimization
  newton: [
    {
      id: 'q-newton-1',
      prompt: "What is the benefit of Newton's method if f''(p) is positive definite?",
      options: [
        'The method diverges',
        'The method converges quadratically',
        'The Hessian can be ignored',
        'The gradient becomes constant',
      ],
      answer: 1,
      explanation: 'Near a minimizer with positive-definite Hessian, Newton converges quadratically.',
    },
    {
      id: 'q-newton-2',
      prompt: "What type of function is well-suited for Newton's method?",
      options: ['Piecewise constant', 'Twice continuously differentiable', 'Linear', 'Discontinuous'],
      answer: 1,
      explanation: "Newton's method needs gradient and Hessian, hence f must be twice continuously differentiable.",
    },
    {
      id: 'q-newton-3',
      prompt: 'Why must the Hessian be positive definite for minimization?',
      options: [
        'To ensure a maximum is found',
        'To invert the gradient',
        'To guarantee no solution',
        'To ensure convergence',
      ],
      answer: 3,
      explanation: 'A positive-definite Hessian guarantees a descent direction and convergence to a minimum.',
    },
    {
      id: 'q-newton-4',
      prompt: "What is the main idea of Newton's method for minimization?",
      options: [
        'Use the midpoint rule to locate the minimum',
        'Approximate the function using a linear polynomial',
        'Estimate the gradient using finite differences',
        'Use the second-order Taylor polynomial for optimization',
      ],
      answer: 3,
      explanation: 'Newton minimizes the local second-order Taylor model of f at each step.',
    },
    {
      id: 'q-newton-5',
      prompt: "What is the update formula in Newton's method for minimization?",
      options: [
        "xₖ₊₁ = xₖ − f'(xₖ)/f''(xₖ)",
        "xₖ₊₁ = xₖ − f'(xₖ)",
        "xₖ₊₁ = xₖ − (f''(xₖ))⁻¹ f'(xₖ)",
        "xₖ₊₁ = xₖ + αₖ f'(xₖ)",
      ],
      answer: 2,
      explanation: 'The multivariate Newton step is xₖ₊₁ = xₖ − H⁻¹ ∇f = xₖ − (f″(xₖ))⁻¹ f′(xₖ).',
    },
  ],

  // 8.7 Quasi-Newton Method for Minimization
  quasinewton: [
    {
      id: 'q-quasinewton-1',
      prompt: 'What is the Broyden update used for in quasi-Newton methods?',
      options: [
        'To update the approximate Hessian',
        'To estimate the gradient',
        'To normalize the gradient',
        'To solve linear systems',
      ],
      answer: 0,
      explanation: 'Quasi-Newton updates (such as Broyden) refine the approximate Hessian using gradient differences.',
    },
    {
      id: 'q-quasinewton-2',
      prompt: 'Which function is used to approximate the objective in quasi-Newton methods?',
      options: [
        'Linear function',
        'Quadratic function using approximate gradient and Hessian',
        'Exponential approximation',
        'First-order Taylor polynomial',
      ],
      answer: 1,
      explanation: 'Quasi-Newton methods build a local quadratic model with an approximate Hessian.',
    },
    {
      id: 'q-quasinewton-3',
      prompt: 'What is a limitation of the Broyden update?',
      options: [
        'It is only for linear problems',
        'It does not converge',
        'It does not preserve symmetry',
        'It requires the exact Hessian',
      ],
      answer: 2,
      explanation: "Broyden's general update does not keep the Hessian approximation symmetric (motivating PSB/BFGS).",
    },
    {
      id: 'q-quasinewton-4',
      prompt: 'What type of convergence can be expected from the PSB update method?',
      options: ['Quadratic', 'Superlinear', 'Linear', 'No convergence'],
      answer: 1,
      explanation: 'Quasi-Newton methods such as PSB attain superlinear convergence.',
    },
    {
      id: 'q-quasinewton-5',
      prompt: 'Which form ensures that the updated matrix remains positive definite?',
      options: [
        'Identity approximation',
        'Cholesky form A = L Lᵀ',
        'Diagonal form',
        'General symmetric form',
      ],
      answer: 1,
      explanation: 'Maintaining the factor in Cholesky form A = L Lᵀ keeps the approximation positive definite.',
    },
  ],
};

export function getQuiz(sectionId: string): QuizQuestion[] {
  return QUIZ[sectionId] ?? [];
}

export default getQuiz;
