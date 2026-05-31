import type { QuizQuestion } from '../../../shared/ui/Quiz';

/**
 * Multiple-choice questions for Chapter 10 (Differential Equations),
 * keyed by section id. Parsed from quiz.md §10.1–10.5. Correct answers
 * (0-based index) determined by numerical-analysis knowledge.
 *
 * Section ids: intro (no questions), 10.1 .. 10.5.
 */
const QUIZ: Record<string, QuizQuestion[]> = {
  // 10.1 Review of Differential Equations
  '10.1': [
    {
      id: 'q-10-1-1',
      prompt: 'What is the role of y₀ in the initial value problem?',
      options: [
        "It's a parameter of f",
        "It's the target value to reach",
        "It's a constant in the differential equation",
        "It's the initial value of the solution",
      ],
      answer: 3,
      explanation: 'y₀ = y(t₀) prescribes the value of the solution at the initial time.',
    },
    {
      id: 'q-10-1-2',
      prompt: 'If f is not Lipschitz continuous, what can happen to the solution of the IVP?',
      options: [
        'The solution oscillates',
        'No solution exists',
        'Multiple solutions may exist',
        'The solution becomes infinite',
      ],
      answer: 2,
      explanation: 'Without Lipschitz continuity uniqueness can fail, so multiple solutions may exist.',
    },
    {
      id: 'q-10-1-3',
      prompt: "In the IVP y′ = f(t, y), what does y(t₀) = y₀ specify?",
      options: [
        'The range of the solution',
        'The value of the solution at the initial time',
        'The function domain',
        'The derivative of the solution',
      ],
      answer: 1,
      explanation: 'It fixes the value of y at the starting time t₀.',
    },
    {
      id: 'q-10-1-4',
      prompt: 'What is required of f for the solution of an IVP to exist and be unique?',
      options: [
        'Continuity in both variables',
        'Differentiability in both variables',
        'Lipschitz continuity in the first variable',
        'Continuity and Lipschitz continuity in the second variable',
      ],
      answer: 3,
      explanation: 'Picard–Lindelöf: f continuous and Lipschitz in y guarantees existence and uniqueness.',
    },
    {
      id: 'q-10-1-5',
      prompt: 'What is the general form of an initial value problem (IVP)?',
      options: [
        "y = f(t, y), y′(t₀) = y₀",
        "y′ = f(y, t), t ∈ [0, T]",
        "y′ = f(t, y), t ∈ [t₀, T], y(t₀) = y₀",
        "y″ = f(t, y), y(t₀) = y₀",
      ],
      answer: 2,
      explanation: 'A first-order IVP is y′ = f(t, y) on [t₀, T] with y(t₀) = y₀.',
    },
  ],

  // 10.2 Euler's Method
  '10.2': [
    {
      id: 'q-10-2-1',
      prompt: "What is the main goal of Euler's method?",
      options: [
        'To calculate the Lipschitz constant',
        'To find the symbolic form of the solution',
        'To verify uniqueness',
        'To approximate the solution at mesh points',
      ],
      answer: 3,
      explanation: 'Euler steps produce approximate values of the solution at the mesh points tᵢ.',
    },
    {
      id: 'q-10-2-2',
      prompt: 'Which numerical method uses the update rule z_{i+1} = zᵢ + h·f(tᵢ, zᵢ)?',
      options: ['Taylor method', 'Runge–Kutta method', "Euler's method", 'Trapezoidal method'],
      answer: 2,
      explanation: 'This is precisely the explicit Euler update.',
    },
    {
      id: 'q-10-2-3',
      prompt: "Which best describes the local truncation error in Euler's method?",
      options: [
        "Depends on y″(t) and is proportional to h",
        'Inversely proportional to h',
        'Depends on y(t) only',
        'Constant across all steps',
      ],
      answer: 0,
      explanation: 'The local truncation error is (h/2)·y″(ξ), proportional to h and the second derivative.',
    },
    {
      id: 'q-10-2-4',
      prompt: "What is the general formula for Euler's method?",
      options: [
        'z_{i+1} = zᵢ + h²·f(tᵢ, zᵢ)',
        'z_{i+1} = zᵢ + f(tᵢ, zᵢ)',
        'z_{i+1} = zᵢ + h·f(tᵢ, zᵢ)',
        'z_{i+1} = zᵢ − h·f(tᵢ, zᵢ)',
      ],
      answer: 2,
      explanation: 'Explicit Euler: z_{i+1} = zᵢ + h·f(tᵢ, zᵢ).',
    },
    {
      id: 'q-10-2-5',
      prompt: "In Euler's method, the global error is approximately proportional to:",
      options: ['h', 'h²', 'log(h)', '√h'],
      answer: 0,
      explanation: "Euler's method is first order: the global error is O(h).",
    },
  ],

  // 10.3 Effect of Rounding in Euler's Method
  '10.3': [
    {
      id: 'q-10-3-1',
      prompt: "What does δ₀ represent in the analysis of rounding in Euler's method?",
      options: [
        'The exact initial value',
        'The derivative of the initial value',
        'The total accumulated error',
        'The rounding error in the initial value',
      ],
      answer: 3,
      explanation: 'δ₀ is the rounding (representation) error in the initial value.',
    },
    {
      id: 'q-10-3-2',
      prompt: "What is the best practice to minimize rounding error in Euler's method?",
      options: [
        'Use arbitrary precision arithmetic',
        'Ignore rounding effects',
        'Balance h so it is not too small relative to δ',
        'Use very large h',
      ],
      answer: 2,
      explanation: 'The error bound h·M₂/2 + δ/h has an optimum; h must not be too small relative to δ.',
    },
    {
      id: 'q-10-3-3',
      prompt: 'What happens to the expression h·M₂/2 + δ/h as h → 0?',
      options: [
        'It converges to zero',
        'It remains constant',
        'It diverges to infinity',
        'It converges to M₂',
      ],
      answer: 2,
      explanation: 'The δ/h term blows up as h → 0, so the bound diverges to infinity.',
    },
    {
      id: 'q-10-3-4',
      prompt: 'What symbol denotes the impact of rounding errors in each Euler step in the error formula?',
      options: ['τᵢ', 'σᵢ', 'εᵢ', 'δᵢ'],
      answer: 3,
      explanation: 'δᵢ denotes the per-step rounding error (τᵢ is reserved for truncation error).',
    },
    {
      id: 'q-10-3-5',
      prompt: 'What does the expression h·M₂/2 + δ/h indicate?',
      options: [
        'The stability condition',
        'The non-linear effect of rounding with respect to h',
        'The estimated global error',
        'The machine precision limit',
      ],
      answer: 2,
      explanation: 'It is the total error bound (truncation + rounding) — the estimated global error.',
    },
  ],

  // 10.4 Taylor's Method
  '10.4': [
    {
      id: 'q-10-4-1',
      prompt: "What is the general structure of F(t, z; h) in Taylor's method of order α?",
      options: [
        'f(t, z)',
        'f(t, z) + f(t, z)²',
        "f(t, z) − ½ f′(t, z)",
        "f(t, z) + (h/2!) f^(1)(t,z) + ⋯ + (h^(α−1)/α!) f^(α−1)(t,z)",
      ],
      answer: 3,
      explanation: 'Taylor increment uses successive total derivatives of f weighted by powers of h / factorials.',
    },
    {
      id: 'q-10-4-2',
      prompt: "How is the local truncation error τ_{i+1} defined in Taylor's method?",
      options: [
        'τ_{i+1} = f(tᵢ, y(tᵢ)) − f(t_{i+1}, z_{i+1})',
        'τ_{i+1} = y(t_{i+1}) − z_{i+1}',
        'τ_{i+1} = ( y(t_{i+1}) − y(tᵢ) ) / h − F(tᵢ, y(tᵢ); h)',
        'τ_{i+1} = h( f(tᵢ, zᵢ) − y(tᵢ) )',
      ],
      answer: 2,
      explanation: 'The local truncation error compares the exact difference quotient with the increment function F.',
    },
    {
      id: 'q-10-4-3',
      prompt: "What is the purpose of Taylor's method in solving IVPs?",
      options: [
        'To convert PDEs into ODEs',
        'To visualize phase space',
        'To compute exact symbolic solutions',
        'To improve accuracy using derivatives',
      ],
      answer: 3,
      explanation: 'Including higher derivatives raises the order of accuracy beyond Euler.',
    },
    {
      id: 'q-10-4-4',
      prompt: 'What is the order of accuracy of a Taylor method that includes up to the second derivative?',
      options: ['Order 1', 'Order 3', 'Order 4', 'Order 2'],
      answer: 3,
      explanation: 'Including the term up to the second derivative gives a second-order method.',
    },
    {
      id: 'q-10-4-5',
      prompt: "What effect does increasing the order α in Taylor's method have on accuracy?",
      options: ['Increases accuracy', 'Reduces computation time', 'Decreases accuracy', 'No effect'],
      answer: 0,
      explanation: 'Higher order reduces truncation error, increasing accuracy (at higher cost).',
    },
  ],

  // 10.5 Runge–Kutta Method
  '10.5': [
    {
      id: 'q-10-5-1',
      prompt: 'Which method requires four function evaluations per step?',
      options: [
        'Classical Runge–Kutta method',
        'Second-order Taylor method',
        "Euler's method",
        'Modified Euler method',
      ],
      answer: 0,
      explanation: 'Classical RK4 uses four stage evaluations w₁..w₄ per step.',
    },
    {
      id: 'q-10-5-2',
      prompt: 'What is the goal of Runge–Kutta methods?',
      options: [
        'To solve algebraic equations',
        'To approximate ODE solutions with high accuracy',
        'To visualize phase space',
        'To compute exact analytical solutions',
      ],
      answer: 1,
      explanation: 'RK methods give high-accuracy numerical approximations of ODE solutions.',
    },
    {
      id: 'q-10-5-3',
      prompt: "What is a key advantage of Runge–Kutta methods over Taylor's method?",
      options: [
        'High accuracy without computing higher derivatives',
        'Simpler formulas',
        'Reduces memory usage',
        'Requires only initial conditions',
      ],
      answer: 0,
      explanation: 'RK matches a high-order Taylor expansion using only evaluations of f, avoiding higher derivatives.',
    },
    {
      id: 'q-10-5-4',
      prompt: 'In the classical RK4 method, how is w₂ defined?',
      options: [
        'f(tᵢ + h/2, zᵢ + (h/2) w₁)',
        'f(tᵢ + h, zᵢ + h w₁)',
        'f(tᵢ, zᵢ)',
        'f(tᵢ + h/2, zᵢ + h w₃)',
      ],
      answer: 0,
      explanation: 'The second RK4 stage evaluates f at the midpoint using w₁: f(tᵢ + h/2, zᵢ + (h/2)w₁).',
    },
    {
      id: 'q-10-5-5',
      prompt: "Which of the following is Heun's method?",
      options: [
        'z_{i+1} = zᵢ + (h/2)( f(tᵢ,zᵢ) + f(t_{i+1}, zᵢ + h f(tᵢ,zᵢ)) )',
        'z_{i+1} = zᵢ + (h/3)( f(tᵢ,zᵢ) + 2 f(tᵢ + h/3, zᵢ + (h/3) f(tᵢ,zᵢ)) )',
        'z_{i+1} = zᵢ + (h/4)( f(tᵢ,zᵢ) + 3 f(tᵢ + (2/3)h, zᵢ + (2/3)h f(tᵢ,zᵢ)) )',
        'z_{i+1} = zᵢ + h f(tᵢ + h/2, zᵢ + (h/2) f(tᵢ,zᵢ))',
      ],
      answer: 0,
      explanation: "Heun's method (improved Euler) averages the slopes at the endpoints with weight h/2.",
    },
  ],
};

export function getQuiz(sectionId: string): QuizQuestion[] {
  return QUIZ[sectionId] ?? [];
}

export default getQuiz;
