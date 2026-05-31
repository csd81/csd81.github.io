import type { QuizQuestion } from '../../../shared/ui/Quiz';

/**
 * Multiple-choice questions for Chapter 6 (Interpolation), parsed from the
 * shared quiz bank. Keyed by lesson slug:
 *   lagrange ← quiz.md §6.1 Lagrange Interpolation
 *   newton   ← quiz.md §6.2 Divided Differences + §6.3 Newton's Divided Difference Formula
 *   hermite  ← quiz.md §6.4 Hermite Interpolation
 *   spline   ← quiz.md §6.5 Spline Interpolation
 */
const QUIZZES: Record<string, QuizQuestion[]> = {
  lagrange: [
    {
      id: 'q-lagrange-1',
      prompt: 'In two-variable Lagrange interpolation, the polynomial L_{n,m}(x,y) is:',
      options: [
        '∑_i ∑_j z_ij l_i(x) l̃_j(y)',
        'the product L_n(x) L_m(y)',
        'a sum of polynomials in x only',
        'a single monomial xⁿ yᵐ',
      ],
      answer: 0,
      explanation: 'It is the double sum of node values times the tensor product of 1-D basis polynomials.',
    },
    {
      id: 'q-lagrange-2',
      prompt: 'The Lagrange interpolating polynomial L_n(x) can be written as:',
      options: [
        'L_n(x) = ∑_k y_k l_k(x)',
        'L_n(x) = y₀ + y₁x + … + y_n xⁿ',
        'L_n(x) = ∏_k y_k l_k(x)',
        'L_n(x) = ∫_a^b y(t) l_k(t) dt',
      ],
      answer: 0,
      explanation: 'It is the sum of node values weighted by the Lagrange basis polynomials.',
    },
    {
      id: 'q-lagrange-3',
      prompt:
        'For equidistant nodes with spacing h and x ∈ (x_k, x_{k+1}), the product ∏|x − x_i| satisfies:',
      options: [
        '≤ (hⁿ⁺¹/4) · n!',
        '≤ (hⁿ⁺¹/2) · n!',
        '≤ (hⁿ⁺¹/8) · n!',
        '≤ hⁿ⁺¹',
      ],
      answer: 0,
      explanation: 'The standard equidistant bound is hⁿ⁺¹·n!/4.',
    },
    {
      id: 'q-lagrange-4',
      prompt: 'The Lagrange basis polynomial l_k(x) satisfies:',
      options: [
        'l_k(x_k) = 1 and l_k(x_i) = 0 for all i ≠ k',
        'l_k(x_i) = 1 for all i',
        'l_k(x) = xᵏ',
        'l_k(x_i) = 0 for all i',
      ],
      answer: 0,
      explanation: 'The basis polynomials are cardinal: l_k(x_i) = δ_{ki}.',
    },
    {
      id: 'q-lagrange-5',
      prompt: 'The remainder term in the degree-n Lagrange interpolation error formula is:',
      options: [
        '[f⁽ⁿ⁾(ξ)/n!] ∏(x − x_i)',
        '[f⁽ⁿ⁺¹⁾(ξ)/(n+1)!] ∏(x − x_i)',
        "f''(ξ)(x − x₀)",
        "f'(ξ) ∏(x − x_i)",
      ],
      answer: 1,
      explanation: 'The error uses the (n+1)-th derivative divided by (n+1)!.',
    },
  ],
  newton: [
    // §6.2 Divided Differences
    {
      id: 'q-newton-1',
      prompt: 'Which is the explicit formula for f[x₀,…,x_n]?',
      options: [
        'f⁽ⁿ⁾(x₀)/n!',
        '∑_i f(x_i) / ∏_{j≠i}(x_i − x_j)',
        '∑_i f(x_i)(x_i − x₀)',
        '∏_i f(x_i)',
      ],
      answer: 1,
      explanation: 'The divided difference equals ∑_i f(x_i) / ∏_{j≠i}(x_i − x_j).',
    },
    {
      id: 'q-newton-2',
      prompt: 'The recursive definition of the n-th divided difference is:',
      options: [
        'f[x₀,…,x_n] = ∑_k f[x_k]',
        'f[x₀,…,x_n] = f[x₁,…,x_n] − f[x₀,…,x_{n−1}]',
        'f[x₀,…,x_n] = (f[x₁,…,x_n] − f[x₀,…,x_{n−1}]) / (x_n − x₀)',
        'f[x₀,…,x_n] = (x_n − x₀) f[x₁,…,x_{n−1}]',
      ],
      answer: 2,
      explanation: 'Each higher divided difference is the difference of two lower ones over (x_n − x₀).',
    },
    {
      id: 'q-newton-3',
      prompt: 'Which statement best applies to computing divided differences?',
      options: [
        'In practice the recursive definition is preferred',
        "We compute them using Taylor's approximation",
        'The explicit formula needs fewer operations',
        'We prefer the explicit formula',
      ],
      answer: 0,
      explanation: 'The recursive table is more efficient and numerically convenient than the explicit sum.',
    },
    {
      id: 'q-newton-4',
      prompt: 'The first divided difference of f at nodes x₀, x₁ is:',
      options: [
        '(f(x₁) − f(x₀)) / (x₁ − x₀)',
        '(f(x₀) − f(x₁)) / (x₁ − x₀)',
        'f(x₁) − f(x₀)',
        "(f'(x₁) − f'(x₀)) / (x₁ − x₀)",
      ],
      answer: 0,
      explanation: 'f[x₀,x₁] = (f(x₁) − f(x₀)) / (x₁ − x₀).',
    },
    {
      id: 'q-newton-5',
      prompt: 'The zeroth divided difference of f at a node x₀ is defined as:',
      options: ['0', "f'(x₀)", 'x₀', 'f(x₀)'],
      answer: 3,
      explanation: 'f[x₀] = f(x₀).',
    },
    // §6.3 Newton's Divided Difference Formula
    {
      id: 'q-newton-6',
      prompt: 'The Newton interpolating polynomial of degree n is:',
      options: [
        'L_n(x) = ∑_k y_k xᵏ',
        'L_n(x) = ∏_k (x − x_k)',
        'L_n(x) = f[x₀]xⁿ + … + f[x_n]',
        'L_n(x) = ∑_k f[x₀,…,x_k](x − x₀)…(x − x_{k−1})',
      ],
      answer: 3,
      explanation: 'Newton form sums divided-difference coefficients times the nested node products.',
    },
    {
      id: 'q-newton-7',
      prompt: 'After adding a new data point (x_{n+1}, y_{n+1}), the updated polynomial is:',
      options: [
        'L_{n+1}(x) = f[x₀,…,x_n](x − x_{n+1})',
        'No change: L_{n+1}(x) = L_n(x)',
        'L_{n+1}(x) = L_n(x) + f[x₀,…,x_{n+1}](x − x₀)…(x − x_n)',
        'L_{n+1}(x) = L_n(x) + f[x_{n+1}]',
      ],
      answer: 2,
      explanation: 'Newton form only appends one new term, leaving previous coefficients intact.',
    },
    {
      id: 'q-newton-8',
      prompt: 'The factor (x − x₀)(x − x₁)…(x − x_{k−1}) in the Newton polynomial has degree:',
      options: ['n − k', 'k', 'n', 'k − 1'],
      answer: 1,
      explanation: 'There are k linear factors, so the degree is k.',
    },
    {
      id: 'q-newton-9',
      prompt: 'Building the divided-difference table for n+1 points has arithmetic complexity:',
      options: ['O(n)', 'O(2ⁿ)', 'O(n²)', 'O(n³)'],
      answer: 2,
      explanation: 'The triangular table requires O(n²) operations.',
    },
    {
      id: 'q-newton-10',
      prompt: 'The main computational advantage of the Newton form over the Lagrange form is that it:',
      options: [
        'allows easy addition of new mesh points without recomputing all coefficients',
        'avoids any division operations',
        'minimizes rounding errors',
        'produces lower-degree polynomials',
      ],
      answer: 0,
      explanation: 'New points add a single term, reusing all earlier coefficients.',
    },
  ],
  hermite: [
    {
      id: 'q-hermite-1',
      prompt: 'Hermite interpolation is especially appropriate when:',
      options: [
        'the nodes are equally spaced',
        'only function values are known',
        'second derivatives are known everywhere',
        'derivative values at the nodes are also known',
      ],
      answer: 3,
      explanation: 'Hermite matches both function and derivative values at the nodes.',
    },
    {
      id: 'q-hermite-2',
      prompt: 'When building the Hermite divided-difference table, each node x_i is:',
      options: [
        'listed three times',
        'omitted in even columns',
        'listed once',
        'listed twice in consecutive rows',
      ],
      answer: 3,
      explanation: 'Each node is duplicated so the derivative condition enters the table.',
    },
    {
      id: 'q-hermite-3',
      prompt: 'For n+1 nodes, the Hermite problem specifies how many interpolation conditions?',
      options: ['2n', 'n + 1', 'n²', '2(n + 1)'],
      answer: 3,
      explanation: 'A value and a derivative at each of n+1 nodes give 2(n+1) conditions.',
    },
    {
      id: 'q-hermite-4',
      prompt: 'The degree of the Hermite polynomial for n+1 mesh points is at most:',
      options: ['n + 1', '2n', '2n + 1', 'n'],
      answer: 2,
      explanation: '2(n+1) conditions determine a polynomial of degree at most 2n+1.',
    },
    {
      id: 'q-hermite-5',
      prompt: 'The extended divided difference f[x₀, x₀] is defined to be:',
      options: ["f'(x₀)", 'f(x₀)', '0', "f''(x₀)"],
      answer: 0,
      explanation: 'As x₁ → x₀ the first divided difference tends to f′(x₀).',
    },
  ],
  spline: [
    {
      id: 'q-spline-1',
      prompt: "A cubic spline with S''(x₀) = 0 and S''(x_n) = 0 is called a:",
      options: ['natural spline', 'clamped spline', 'quadratic spline', 'not-a-knot spline'],
      answer: 0,
      explanation: 'Zero second derivatives at the endpoints define the natural cubic spline.',
    },
    {
      id: 'q-spline-2',
      prompt: 'A spline function S of degree k on [a,b] is a function that:',
      options: [
        'is piecewise polynomial of degree ≤ k and belongs to Cᵏ⁻¹[a,b]',
        'satisfies S⁽ᵏ⁾(x) = 0 everywhere',
        'has continuous first derivative only',
        'is a polynomial of degree k on the whole interval',
      ],
      answer: 0,
      explanation: 'A degree-k spline is piecewise polynomial and globally Cᵏ⁻¹.',
    },
    {
      id: 'q-spline-3',
      prompt: 'Compared with high-degree global polynomial interpolation, cubic splines are preferred because they:',
      options: [
        'use fewer sub-intervals',
        'minimize oscillation while achieving smoothness',
        'require no continuity across nodes',
        'never oscillate',
      ],
      answer: 1,
      explanation: 'Cubic splines avoid Runge-type oscillation while staying smooth (C²).',
    },
    {
      id: 'q-spline-4',
      prompt: 'The relation b_i = Δy_i/Δx_i − (2c_i + c_{i+1})/3 · Δx_i expresses:',
      options: [
        'the natural boundary condition',
        'the slope of the piece S_i at x_i',
        "continuity of S'' at x_i",
        'the difference equation for c_i',
      ],
      answer: 1,
      explanation: 'This formula gives the linear coefficient (slope at x_i) of the spline piece.',
    },
    {
      id: 'q-spline-5',
      prompt: "The unknown second-derivative parameters c_i = S''(x_i)/2 are found by solving a linear system whose matrix is:",
      options: ['diagonal', 'upper-triangular', 'tridiagonal', 'dense and symmetric'],
      answer: 2,
      explanation: 'Continuity conditions yield a tridiagonal system for the c_i.',
    },
  ],
};

export function getQuiz(sectionId: string): QuizQuestion[] {
  return QUIZZES[sectionId] ?? [];
}
