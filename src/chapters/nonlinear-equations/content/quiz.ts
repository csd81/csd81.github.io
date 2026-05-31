import type { QuizQuestion } from '../../../shared/ui/Quiz'

/**
 * Multiple-choice questions for Chapter 2, keyed by the chapter's section slugs
 * (content/sections.ts). Questions come from quiz.md §2.1–§2.12. The quiz.md
 * numbering is by topic, not by the app's section numbers, so each quiz.md
 * subsection is mapped to the matching chapter slug:
 *   §2.1 Fixed-Point Iteration            → fixed-point
 *   §2.2 Stopping Criteria                → stopping-criteria
 *   §2.3 Bisection                        → bisection
 *   §2.4 False Position                   → false-position
 *   §2.5 Newton's Method                  → newton
 *   §2.6 Secant Method                    → secant
 *   §2.7 Order of Convergence             → order-of-convergence
 *   §2.8 Multivariable Calculus           → multivariable
 *   §2.9 Vector & Matrix Norms            → norms
 *   §2.10 Fixed-Point Iteration in nD     → fixed-point-nd
 *   §2.11 Newton's Method in nD           → newton-nd
 *   §2.12 Quasi-Newton / Broyden          → broyden
 * (The app's §2.1 "Review of Calculus" / `preliminaries` has no matching quiz.)
 */
const QUIZZES: Record<string, QuizQuestion[]> = {
  'fixed-point': [
    {
      id: 'q-fixed-point-1',
      prompt: 'When is a fixed-point iteration said to be globally convergent?',
      options: [
        'When it diverges outside of $[a, b]$',
        'When $p_0$ is in a small neighborhood of $p$',
        'When it converges for all initial values',
        'When it has a unique fixed point',
      ],
      answer: 2,
      explanation: 'Global convergence means every admissible starting value produces a convergent sequence.',
    },
    {
      id: 'q-fixed-point-2',
      prompt: 'What kind of convergence does a contraction mapping $g:[a,b]\\to[a,b]$ ensure in a fixed-point iteration?',
      options: ['Global convergence', 'No convergence', 'Local divergence', 'Periodic convergence'],
      answer: 0,
      explanation: 'The contraction principle guarantees convergence from every starting point, i.e. global convergence.',
    },
    {
      id: 'q-fixed-point-3',
      prompt: 'In fixed-point iteration $p_{k+1} = g(p_k)$, what is a necessary condition for convergence to a limit $p$?',
      options: [
        '$g$ must be discontinuous at $p$',
        '$g(p) = p$',
        '$p = 0$',
        '$g(p_k) = p_k$ for all $k$',
      ],
      answer: 1,
      explanation: 'A limit of a continuous iteration must be a fixed point: g(p) = p.',
    },
    {
      id: 'q-fixed-point-4',
      prompt: 'If $|g\'(p)| < 1$ at a fixed point $p$, what kind of convergence does the fixed-point iteration exhibit?',
      options: ['Local convergence', 'Linear divergence', 'Global divergence', 'Superlinear convergence'],
      answer: 0,
      explanation: '|g\'(p)| < 1 makes p attracting, giving local convergence in a neighborhood of p.',
    },
    {
      id: 'q-fixed-point-5',
      prompt: 'What does it mean for the iteration to be locally convergent?',
      options: [
        'It converges for initial values within a neighborhood of the fixed point',
        'It converges only for rational initial values',
        'It converges if $g(p) = 0$',
        'It converges for all $p_0 \\in \\mathbb{R}$',
      ],
      answer: 0,
      explanation: 'Local convergence guarantees convergence only when p_0 is close enough to p.',
    },
  ],
  'stopping-criteria': [
    {
      id: 'q-stopping-criteria-1',
      prompt: 'Why is using only $|f(p_k)| < \\varepsilon_3$ sometimes not reliable?',
      options: [
        'It always guarantees convergence',
        'It is computationally expensive',
        'It is equivalent to absolute error',
        '$f(p_k)$ can be small even when $p_k$ is far from the root',
      ],
      answer: 3,
      explanation: 'For flat functions f(p_k) can be tiny while p_k is still far from the actual root.',
    },
    {
      id: 'q-stopping-criteria-2',
      prompt: 'Which condition is analogous to the relative error of approximation?',
      options: [
        '$|\\frac{f(p_k)}{p_k}| < \\varepsilon_3$',
        '$|p_k - p_{k-1}| < \\varepsilon_1$',
        '$|\\frac{p_k - p_{k-1}}{p_k}| < \\varepsilon_2$',
        '$|f(p_k)| < \\varepsilon_3$',
      ],
      answer: 2,
      explanation: 'Dividing the increment by p_k gives a relative-error style stopping test.',
    },
    {
      id: 'q-stopping-criteria-3',
      prompt: 'What is the main goal of stopping criteria in iterative methods?',
      options: [
        'To initialize the method',
        'To determine when an approximation is good enough',
        'To define the step size',
        'To ensure infinite iterations',
      ],
      answer: 1,
      explanation: 'Stopping criteria decide when the current iterate is accurate enough to stop.',
    },
    {
      id: 'q-stopping-criteria-4',
      prompt: 'What is the issue with using only the condition $|p_k - p_{k-1}| < \\varepsilon_1$?',
      options: [
        'It can be satisfied by non-convergent sequences',
        'It requires high precision input',
        'It leads to divergence',
        'It ensures exact roots',
      ],
      answer: 0,
      explanation: 'Slowly varying but non-convergent sequences (e.g. harmonic-like) can make successive terms close without converging.',
    },
    {
      id: 'q-stopping-criteria-5',
      prompt: 'What does the condition $|p_k - p_{k-1}| < \\varepsilon_1$ represent?',
      options: [
        'Initial guess requirement',
        'Functional tolerance',
        'Relative error condition',
        'Absolute error condition',
      ],
      answer: 3,
      explanation: 'The raw difference of successive iterates is an absolute-error type test.',
    },
  ],
  bisection: [
    {
      id: 'q-bisection-1',
      prompt: 'What is the behavior of the interval length $b_k - a_k$ after each iteration in the bisection method?',
      options: ['It increases by one', 'It remains constant', 'It doubles', 'It halves'],
      answer: 3,
      explanation: 'Each step replaces the bracket by one of its halves, so the length halves.',
    },
    {
      id: 'q-bisection-2',
      prompt: 'What happens if $f(a_k) > 0$ and $f(p_k) < 0$ in a step of the bisection method?',
      options: [
        'Next interval becomes $[a_k, p_k]$',
        'Interval is discarded',
        'Next interval becomes $[p_k, b_k]$',
        'The root is at $a_k$',
      ],
      answer: 0,
      explanation: 'The sign change lies between a_k and p_k, so the new bracket is [a_k, p_k].',
    },
    {
      id: 'q-bisection-3',
      prompt: 'What happens if $f(p_k) = 0$ during the bisection method?',
      options: [
        '$p_k$ is accepted as the root',
        'The method stops working',
        'The interval is unchanged',
        'A new midpoint is computed',
      ],
      answer: 0,
      explanation: 'A zero value means the midpoint is exactly a root, so the method returns p_k.',
    },
    {
      id: 'q-bisection-4',
      prompt: 'Which theorem guarantees the existence of a root in $[a, b]$ if $f$ is continuous and $f(a)f(b) < 0$?',
      options: [
        'Mean Value Theorem',
        'Intermediate Value Theorem',
        'Fundamental Theorem of Calculus',
        "Taylor's Theorem",
      ],
      answer: 1,
      explanation: 'The Intermediate Value Theorem (Bolzano) guarantees a root where the sign changes.',
    },
    {
      id: 'q-bisection-5',
      prompt: 'Which of the following conditions cannot be used as a possible stopping criterion in the bisection method?',
      options: [
        '$|p_k| < \\varepsilon$',
        '$|a_k - b_k| < \\varepsilon$',
        '$|f(p_k)| < \\varepsilon$',
        '$|p_k - p_{k-1}| < \\varepsilon$',
      ],
      answer: 0,
      explanation: '|p_k| < ε measures the size of p_k, not the accuracy of the approximation, so it is not a valid stopping test.',
    },
  ],
  'false-position': [
    {
      id: 'q-false-position-1',
      prompt: 'What is another name for the method of false position?',
      options: ["Newton's method", 'Tangent method', 'Regula Falsi', 'Midpoint method'],
      answer: 2,
      explanation: 'Regula falsi is the classical Latin name for the method of false position.',
    },
    {
      id: 'q-false-position-2',
      prompt: 'Which condition is necessary to apply the method of false position?',
      options: ['$f(a)f(b) = 0$', '$f(a) = f(b)$', '$f(a)f(b) < 0$', '$f(a) > f(b)$'],
      answer: 2,
      explanation: 'Like bisection it needs a sign-changing bracket, f(a)f(b) < 0.',
    },
    {
      id: 'q-false-position-3',
      prompt: 'What happens if $f(p_k) = 0$ during the method?',
      options: [
        'A new secant line is drawn',
        'Error increases',
        'The method terminates with a root',
        'Interval remains the same',
      ],
      answer: 2,
      explanation: 'A zero residual means p_k is an exact root, so the method stops.',
    },
    {
      id: 'q-false-position-4',
      prompt: 'In which case does the method of false position converge to the root of the function?',
      options: [
        'When the sign of $f(p_k)$ is same as $f(a_k)$',
        'When $f(x)$ is piecewise linear',
        'When the function is symmetric',
        'When the function is concave or convex',
      ],
      answer: 3,
      explanation: 'Convergence is guaranteed for a continuous, convex or concave f with a sign-changing bracket.',
    },
    {
      id: 'q-false-position-5',
      prompt: 'What is the formula for the next approximation $p_k$ in the method of false position?',
      options: [
        '$\\frac{a_k + b_k}{2}$',
        '$a_k - \\frac{f(a_k)(a_k - b_k)}{f(a_k) - f(b_k)}$',
        '$b_k - \\frac{f(a_k)(b_k - a_k)}{f(b_k) - f(a_k)}$',
        '$\\frac{f(a_k) - f(b_k)}{a_k - b_k}$',
      ],
      answer: 1,
      explanation: 'p_k is the x-intercept of the chord through (a_k, f(a_k)) and (b_k, f(b_k)).',
    },
  ],
  newton: [
    {
      id: 'q-newton-1',
      prompt: "What is the requirement for $f'(p_k)$ in Newton's method?",
      options: ['It must be zero', 'It must not be zero', 'It must be less than one', 'It must be constant'],
      answer: 1,
      explanation: "The iteration divides by f'(p_k), so it must be nonzero.",
    },
    {
      id: 'q-newton-2',
      prompt: "What is the derivative of the Newton iteration function $g(x) = x - \\frac{f(x)}{f'(x)}$?",
      options: [
        "$1 - \\frac{f(x)}{f'(x)}$",
        "$f'(x)$",
        "$\\frac{f(x)}{f''(x)}$",
        "$\\frac{f(x)f''(x)}{(f'(x))^2}$",
      ],
      answer: 3,
      explanation: "Differentiating g gives g'(x) = f(x)f''(x)/(f'(x))^2, which is 0 at a simple root.",
    },
    {
      id: 'q-newton-3',
      prompt: "Which condition implies convergence of Newton's method?",
      options: [
        '$f$ is convex or concave',
        '$f$ has an opposite sign property at the end of the interval',
        "the function $f$ is two times differentiable and $f'(p) \\neq 0$",
        '$f$ is piecewise linear',
      ],
      answer: 2,
      explanation: 'A simple root with f in C^2 and f\'(p) ≠ 0 gives local (quadratic) convergence.',
    },
    {
      id: 'q-newton-4',
      prompt: "What type of equations is Newton's method used to solve?",
      options: [
        'Nonlinear scalar equations',
        'Linear equations',
        'Differential equations',
        'System of linear equations',
      ],
      answer: 0,
      explanation: 'Newton\'s method finds roots of nonlinear scalar equations f(x) = 0.',
    },
    {
      id: 'q-newton-5',
      prompt: "Which situation might cause Newton's method to fail or diverge?",
      options: [
        'Smooth and monotonic function',
        'Initial guess is far from the root',
        'Well-posed root near the origin',
        'Initial guess very close to root',
      ],
      answer: 1,
      explanation: 'Newton is only locally convergent; a poor (far) initial guess can diverge or cycle.',
    },
  ],
  secant: [
    {
      id: 'q-secant-1',
      prompt: 'What is the secant method used to solve?',
      options: [
        'Systems of linear equations',
        'Differential equations',
        'Polynomial interpolation',
        'Nonlinear scalar equations',
      ],
      answer: 3,
      explanation: 'Like Newton, the secant method finds roots of nonlinear scalar equations.',
    },
    {
      id: 'q-secant-2',
      prompt: 'How is the secant line determined in the secant method?',
      options: [
        'By integrating the function',
        'By drawing a tangent at a point',
        'By connecting $(p_k, f(p_k))$ and $(p_{k-1}, f(p_{k-1}))$ with a line',
        'By evaluating a midpoint',
      ],
      answer: 2,
      explanation: 'The secant line joins the last two iterate points, replacing the tangent of Newton.',
    },
    {
      id: 'q-secant-3',
      prompt: 'Which values are needed to start the secant method?',
      options: [
        'A root and a derivative',
        "The function's integral",
        'Two initial values',
        'One initial value',
      ],
      answer: 2,
      explanation: 'Being a two-step iteration, the secant method needs two starting points.',
    },
    {
      id: 'q-secant-4',
      prompt: 'What type of iteration is the secant method?',
      options: ['Three-step iteration', 'Fixed-step iteration', 'Two-step iteration', 'One-step iteration'],
      answer: 2,
      explanation: 'Each new iterate uses the previous two, making it a two-step iteration.',
    },
    {
      id: 'q-secant-5',
      prompt: 'In what situation is the secant method especially useful?',
      options: [
        'When the function is quadratic',
        'When the derivative of $f$ is hard to compute',
        'When the initial guess is very accurate',
        'When the function is linear',
      ],
      answer: 1,
      explanation: 'It avoids derivatives, so it shines when f\' is expensive or unavailable.',
    },
  ],
  'order-of-convergence': [
    {
      id: 'q-order-of-convergence-1',
      prompt: 'If the limit $\\lambda = \\lim_{k \\to \\infty} \\frac{p_{k+1} - p}{(p_k - p)^\\alpha}$ exists and is not zero, what does it represent?',
      options: [
        'Derivative of the function',
        'Asymptotic error constant',
        'Maximum error',
        'Integral of the function',
      ],
      answer: 1,
      explanation: 'That limit λ is the asymptotic error constant for order α.',
    },
    {
      id: 'q-order-of-convergence-2',
      prompt: 'What is the condition for linear convergence?',
      options: ['$\\alpha > 1$', '$\\alpha = 1$ and $c < 1$', '$\\alpha = 3$', '$\\alpha = 2$'],
      answer: 1,
      explanation: 'Linear convergence is order α = 1 with asymptotic constant c < 1.',
    },
    {
      id: 'q-order-of-convergence-3',
      prompt: 'Which method has quadratic convergence near a simple root?',
      options: [
        "Newton's method",
        'Method of false position',
        'Bisection method',
        'Secant method',
      ],
      answer: 0,
      explanation: "Newton's method converges quadratically (α = 2) at a simple root.",
    },
    {
      id: 'q-order-of-convergence-4',
      prompt: 'Which statement is true about a sequence with order of convergence $\\alpha > 1$?',
      options: [
        'The root cannot be approximated',
        'The convergence is faster than linear',
        'The error increases',
        'The sequence diverges',
      ],
      answer: 1,
      explanation: 'Any order α > 1 means superlinear behavior — faster than linear.',
    },
    {
      id: 'q-order-of-convergence-5',
      prompt: 'Which of the following convergence types is fastest?',
      options: ['Linear', 'Logarithmic', 'Quadratic', 'Superlinear'],
      answer: 2,
      explanation: 'Quadratic (α = 2) is the fastest among these (logarithmic < linear < superlinear < quadratic).',
    },
  ],
  multivariable: [
    {
      id: 'q-multivariable-1',
      prompt: "What is the purpose of Taylor's formula in multiple variables?",
      options: [
        'Solving integrals',
        'Estimating root multiplicity',
        'Approximating function values near a point',
        'Computing exact values of $f$',
      ],
      answer: 2,
      explanation: 'Taylor expansion approximates f near a point using its derivatives.',
    },
    {
      id: 'q-multivariable-2',
      prompt: 'What is the Jacobian matrix of a multivariable and vector-valued function?',
      options: [
        'A diagonal matrix',
        'The gradient vector',
        'A matrix of first-order partial derivatives',
        'A vector of integrals',
      ],
      answer: 2,
      explanation: 'The Jacobian collects all first-order partial derivatives ∂f_i/∂x_j.',
    },
    {
      id: 'q-multivariable-3',
      prompt: 'What does the gradient vector represent for a function $f \\in C^1 (\\mathbb{R}^n,\\mathbb{R})$?',
      options: [
        'The curvature of $f$',
        'The maximum value of $f$',
        'The second-order approximation',
        'The vector of all partial derivatives',
      ],
      answer: 3,
      explanation: 'The gradient is the vector of first partial derivatives of f.',
    },
    {
      id: 'q-multivariable-4',
      prompt: 'What does the chain rule for multivariable functions involve?',
      options: [
        'Using integration by parts',
        'Summing function values',
        'Composing and multiplying gradients and derivatives',
        'Finding local maxima',
      ],
      answer: 2,
      explanation: 'The multivariable chain rule multiplies Jacobians/gradients of the composed maps.',
    },
    {
      id: 'q-multivariable-5',
      prompt: "In multivariable Taylor approximation, what does the term $f(a)+f'(a)^T(x - a)$ represent?",
      options: ['Constant term', 'Derivative of $f$', 'Linear approximation', 'Second-order approximation'],
      answer: 2,
      explanation: 'This first-order expansion is the linear (tangent-plane) approximation of f at a.',
    },
  ],
  norms: [
    {
      id: 'q-norms-1',
      prompt: "What condition must a sequence $p^{(k)}$ satisfy to be convergent according to Cauchy's criterion?",
      options: [
        '$\\|p^{(k)}\\| < \\epsilon$',
        '$\\|p^{(k)} - p^{(m)}\\| > \\epsilon$ for small $k, m$',
        '$\\|p^{(k)} - p^{(m)}\\| < \\epsilon$ for all large enough $k, m$',
        '$\\|p^{(k)} - p\\| < \\epsilon$ for large $k$',
      ],
      answer: 2,
      explanation: 'A Cauchy sequence has terms that get arbitrarily close to each other for large indices.',
    },
    {
      id: 'q-norms-2',
      prompt: 'According to convergence properties for vector sequences, if $p^{(k)} \\to p$ and $q^{(k)} \\to q$, then:',
      options: [
        '$p^{(k)} + q^{(k)} \\to 0$',
        '$p^{(k)} \\cdot q^{(k)} \\to p \\cdot q$',
        '$\\|p^{(k)} - q^{(k)}\\| \\to 0$',
        '$\\alpha p^{(k)} + \\beta q^{(k)} \\to \\alpha p + \\beta q$',
      ],
      answer: 3,
      explanation: 'Limits are linear: any fixed linear combination converges to the same combination of limits.',
    },
    {
      id: 'q-norms-3',
      prompt: 'What is the result of $\\|x\\|_2$ if $x = (3, 4)$?',
      options: ['25', '1', '7', '5'],
      answer: 3,
      explanation: '√(3² + 4²) = √25 = 5.',
    },
    {
      id: 'q-norms-4',
      prompt: 'Which norm corresponds to the maximum absolute component of a vector?',
      options: ['$\\|x\\|_p$ for $p = 0$', '$\\|x\\|_2$', '$\\|x\\|_\\infty$', '$\\|x\\|_1$'],
      answer: 2,
      explanation: 'The ∞-norm is the maximum of the absolute values of the components.',
    },
    {
      id: 'q-norms-5',
      prompt: 'What is the p-norm of a vector $x$ when $p = 1$?',
      options: ['$\\sqrt{\\sum x_i^2}$', '$\\sum x_i^2$', '$\\sum |x_i|$', '$\\max |x_i|$'],
      answer: 2,
      explanation: 'The 1-norm is the sum of the absolute values of the components.',
    },
  ],
  'fixed-point-nd': [
    {
      id: 'q-fixed-point-nd-1',
      prompt: 'What does it mean if a function $\\mathbf{g} : \\mathbb{R}^n \\to \\mathbb{R}^n$ has a fixed point $\\mathbf{p}$?',
      options: [
        "$\\mathbf{g}'(\\mathbf{p}) = \\mathbf{0}$",
        '$\\mathbf{g}(\\mathbf{p}) = \\mathbf{0}$',
        '$\\mathbf{g}(\\mathbf{p}) = \\mathbf{p}$',
        '$\\|\\mathbf{g}(\\mathbf{p})\\| = 1$',
      ],
      answer: 2,
      explanation: 'A fixed point satisfies g(p) = p, just as in one dimension.',
    },
    {
      id: 'q-fixed-point-nd-2',
      prompt: 'How is the stopping criterion typically defined in n-dimensional fixed-point iteration?',
      options: [
        '$\\|\\mathbf{g}(\\mathbf{x}^{(k)})-\\mathbf{x}^{(k)}\\| < \\varepsilon$',
        '$\\|\\mathbf{x}^{(k+1)} - \\mathbf{x}^{(k)}\\| < \\varepsilon$',
        '$\\frac{\\|\\mathbf{x}^{(k+1)} - \\mathbf{x}^{(k)}\\|}{\\mathbf{x}^{(k)}} < \\varepsilon$',
        'Any of the above',
      ],
      answer: 3,
      explanation: 'Any of these norm-based residual/increment tests can serve as a stopping criterion.',
    },
    {
      id: 'q-fixed-point-nd-3',
      prompt: 'Which norm is commonly used to check convergence in $\\mathbb{R}^n$?',
      options: [
        'Any vector norm',
        'Only the $\\infty$-norm',
        'Only the 1-norm',
        'Only the 2-norm',
      ],
      answer: 0,
      explanation: 'All norms on R^n are equivalent, so any vector norm may be used.',
    },
    {
      id: 'q-fixed-point-nd-4',
      prompt: 'The Jacobian matrix of $\\mathbf{g}$ is:',
      options: [
        'The Hessian matrix',
        'The gradient vector',
        'The matrix of partial derivatives $(\\frac{\\partial g_i}{\\partial x_j})$',
        'A matrix of second derivatives',
      ],
      answer: 2,
      explanation: 'The Jacobian holds the first-order partials ∂g_i/∂x_j.',
    },
    {
      id: 'q-fixed-point-nd-5',
      prompt: 'Which statement best describes fixed-point iteration in n-dimensions?',
      options: [
        'An optimization method',
        'A nonlinear solver based on iterative updates',
        'An integration technique',
        'A method that uses linear algebra to solve equations',
      ],
      answer: 1,
      explanation: 'It iteratively updates a vector to solve a nonlinear system g(x) = x.',
    },
  ],
  'newton-nd': [
    {
      id: 'q-newton-nd-1',
      prompt: "How is the initial guess $x_0$ selected in multivariable Newton's method?",
      options: [
        'Close to the solution for convergence',
        'Arbitrarily, as convergence is guaranteed',
        'As the average of all variables',
        'It must be an exact root',
      ],
      answer: 0,
      explanation: 'Newton is only locally convergent, so x_0 must be near the solution.',
    },
    {
      id: 'q-newton-nd-2',
      prompt: 'If the Jacobian is not invertible at a point, what might occur?',
      options: [
        'Exact solution found',
        'Failure in step computation',
        'Quadratic convergence',
        'Exponential convergence',
      ],
      answer: 1,
      explanation: 'The Newton step solves J·Δ = −f; a singular Jacobian makes that step undefined.',
    },
    {
      id: 'q-newton-nd-3',
      prompt: "What kind of convergence can be expected from Newton's method in several variables near a solution?",
      options: ['Superlinear', 'Linear', 'Logarithmic', 'Quadratic'],
      answer: 3,
      explanation: 'With a nonsingular Jacobian at the root, convergence is quadratic.',
    },
    {
      id: 'q-newton-nd-4',
      prompt: 'What is the Newton iteration formula for a function $f: \\mathbb{R}^n \\to \\mathbb{R}^n$?',
      options: [
        '$x_{k+1} = x_k - \\nabla f(x_k)$',
        '$x_{k+1} = x_k + f(x_k)$',
        '$x_{k+1} =f(x_k) - x_k$',
        "$x_{k+1} = x_k - (f'(x_k))^{-1} f(x_k)$",
      ],
      answer: 3,
      explanation: 'The multivariable Newton step uses the inverse Jacobian times f(x_k).',
    },
    {
      id: 'q-newton-nd-5',
      prompt: "What idea is used in the derivation of Newton's method?",
      options: [
        'A secant line approximation',
        'First-order Taylor approximation of the function',
        'Second-order Taylor approximation',
        'An improved bisection method',
      ],
      answer: 1,
      explanation: 'Newton linearizes f via its first-order Taylor expansion and solves the linear model.',
    },
  ],
  broyden: [
    {
      id: 'q-broyden-1',
      prompt: 'What is the goal of quasi-Newton methods?',
      options: [
        'To solve differential equations',
        'To approximate the Jacobian or its inverse',
        'To maximize linear functions',
        'To compute exact gradients',
      ],
      answer: 1,
      explanation: 'Quasi-Newton methods avoid exact Jacobians by approximating J (or J⁻¹) cheaply.',
    },
    {
      id: 'q-broyden-2',
      prompt: 'In practice, why are inverse matrices avoided in implementation?',
      options: [
        'They require large storage',
        'They are never used in Newton methods',
        'They reduce accuracy',
        'Solving linear equations is more efficient',
      ],
      answer: 3,
      explanation: 'Solving a linear system is cheaper and more stable than forming an explicit inverse.',
    },
    {
      id: 'q-broyden-3',
      prompt: "What is the main idea of the derivation of Broyden's method?",
      options: [
        'Use the generalization of the secant equation to the vector-valued functions',
        'Use high-order derivatives',
        'Use first-order Taylor approximation',
        'Use second-order Taylor approximation',
      ],
      answer: 0,
      explanation: 'Broyden extends the scalar secant equation to vector-valued functions.',
    },
    {
      id: 'q-broyden-4',
      prompt: 'What is the general formula of the quasi-Newton method?',
      options: [
        '$A_k p_{k+1}=p_k-f(p_k)$',
        "$p_{k+1}= p_k-(f'(p_k))^{-1}f(p_k)$",
        "$p_{k+1}=f'(p_k) p_k-f(p_k)$",
        '$p_{k+1}=p_k-(A_k)^{-1}f(p_k)$',
      ],
      answer: 3,
      explanation: 'Quasi-Newton replaces the Jacobian with an approximation A_k in the Newton step.',
    },
    {
      id: 'q-broyden-5',
      prompt: "What is the speed of Broyden's method?",
      options: ['Better than quadratic', 'Superlinear', 'Quadratic', 'Slower than linear'],
      answer: 1,
      explanation: 'Broyden typically converges superlinearly — faster than linear but below quadratic.',
    },
  ],
}

export function getQuiz(sectionId: string): QuizQuestion[] {
  return QUIZZES[sectionId] ?? []
}
