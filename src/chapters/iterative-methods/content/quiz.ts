import type { QuizQuestion } from '../../../shared/ui/Quiz';

/**
 * Multiple-choice questions for Chapter 4 (Iterative Techniques), parsed from
 * the shared quiz bank. Keyed by the chapter's scrollytelling section ids:
 *   fixed-point  ← quiz.md §4.1 Linear Fixed-Point Iteration
 *   jacobi-gs    ← quiz.md §4.2 Jacobi + §4.3 Gauss–Seidel
 *   spectral     ← spectral-radius / Neumann-series subset of §4.1
 *   condition    ← quiz.md §4.4 Error Bounds & Condition Number + §4.5 Perturbation
 * Bilingual: formula-only options are identical in both languages.
 */
const QUIZZES: Record<string, QuizQuestion[]> = {
  'fixed-point': [
    {
      id: 'q-fixed-point-1',
      prompt: {
        en: 'If rounding errors w^(k) are present in x^(k+1) = T x^(k) + c and ‖T‖ < 1, the cumulative error is bounded by:',
        hu: 'Ha kerekítési hibák w^(k) lépnek fel az x^(k+1) = T x^(k) + c iterációban és ‖T‖ < 1, akkor a halmozott hiba korlátja:',
      },
      options: [
        { en: '‖w^(0)‖ + … + ‖w^(k)‖', hu: '‖w^(0)‖ + … + ‖w^(k)‖' },
        { en: 'ε / (1 + ‖T‖)', hu: 'ε / (1 + ‖T‖)' },
        { en: 'ε / (1 − ‖T‖)', hu: 'ε / (1 − ‖T‖)' },
        { en: '∑ ‖w^(k)‖ (infinite sum)', hu: '∑ ‖w^(k)‖ (végtelen összeg)' },
      ],
      answer: 2,
      explanation: {
        en: 'A geometric-series argument with contraction factor ‖T‖ < 1 gives the bound ε / (1 − ‖T‖).',
        hu: 'Egy mértani sorra épülő érveléssel, ‖T‖ < 1 kontrakciós tényezővel, az ε / (1 − ‖T‖) korlát adódik.',
      },
    },
    {
      id: 'q-fixed-point-2',
      prompt: {
        en: 'What convergence does x^(k+1) = T x^(k) + c have when ρ(T) < 1?',
        hu: 'Milyen konvergenciája van az x^(k+1) = T x^(k) + c iterációnak, ha ρ(T) < 1?',
      },
      options: [
        { en: 'The iteration does not converge', hu: 'Az iteráció nem konvergál' },
        { en: 'Convergence only for x^(0) = 0', hu: 'Csak x^(0) = 0 esetén konvergál' },
        { en: 'Convergence only if x^(0) is close to the fixed point', hu: 'Csak akkor konvergál, ha x^(0) közel van a fixponthoz' },
        { en: 'Convergence for an arbitrary initial value x^(0)', hu: 'Tetszőleges x^(0) kezdővektorra konvergál' },
      ],
      answer: 3,
      explanation: {
        en: 'For a linear (affine) iteration, ρ(T) < 1 gives global convergence from any starting vector.',
        hu: 'Egy lineáris (affin) iterációnál ρ(T) < 1 globális konvergenciát ad bármely kezdővektorból.',
      },
    },
    {
      id: 'q-fixed-point-3',
      prompt: {
        en: 'What is the convergence condition for the Neumann series I + A + A² + A³ + …?',
        hu: 'Mi az I + A + A² + A³ + … Neumann-sor konvergenciafeltétele?',
      },
      options: [
        { en: 'ρ(A) = 1', hu: 'ρ(A) = 1' },
        { en: '‖A‖ = 1', hu: '‖A‖ = 1' },
        { en: 'ρ(A) < 1', hu: 'ρ(A) < 1' },
        { en: '‖A‖ > 1', hu: '‖A‖ > 1' },
      ],
      answer: 2,
      explanation: {
        en: 'The Neumann series converges iff the spectral radius ρ(A) < 1.',
        hu: 'A Neumann-sor akkor és csak akkor konvergál, ha a spektrálsugár ρ(A) < 1.',
      },
    },
    {
      id: 'q-fixed-point-4',
      prompt: {
        en: 'What is the spectral radius ρ(T) of a matrix T?',
        hu: 'Mi egy T mátrix ρ(T) spektrálsugara?',
      },
      options: [
        { en: 'Minimum eigenvalue of T', hu: 'T legkisebb sajátértéke' },
        { en: 'Largest eigenvalue of T', hu: 'T legnagyobb sajátértéke' },
        { en: 'Maximum row sum of T', hu: 'T maximális sorösszege' },
        { en: 'Maximum absolute value of the eigenvalues of T', hu: 'T sajátértékeinek maximális abszolút értéke' },
      ],
      answer: 3,
      explanation: {
        en: 'ρ(T) = max |λ_i| over all eigenvalues λ_i of T.',
        hu: 'ρ(T) = max |λ_i| T összes λ_i sajátértékére.',
      },
    },
    {
      id: 'q-fixed-point-5',
      prompt: {
        en: 'When ρ(A) < 1, what does the Neumann series represent?',
        hu: 'Ha ρ(A) < 1, mit reprezentál a Neumann-sor?',
      },
      options: [
        { en: '(I − A)⁻¹', hu: '(I − A)⁻¹' },
        { en: 'A⁻¹', hu: 'A⁻¹' },
        { en: 'Aᵏ', hu: 'Aᵏ' },
        { en: 'A + A² + A³ + …', hu: 'A + A² + A³ + …' },
      ],
      answer: 0,
      explanation: {
        en: 'I + A + A² + … = (I − A)⁻¹ when ρ(A) < 1.',
        hu: 'I + A + A² + … = (I − A)⁻¹, ha ρ(A) < 1.',
      },
    },
  ],
  spectral: [
    {
      id: 'q-spectral-1',
      prompt: {
        en: 'What is the spectral radius ρ(T) of a matrix T?',
        hu: 'Mi egy T mátrix ρ(T) spektrálsugara?',
      },
      options: [
        { en: 'Minimum eigenvalue of T', hu: 'T legkisebb sajátértéke' },
        { en: 'Largest eigenvalue of T', hu: 'T legnagyobb sajátértéke' },
        { en: 'Maximum row sum of T', hu: 'T maximális sorösszege' },
        { en: 'Maximum absolute value of the eigenvalues of T', hu: 'T sajátértékeinek maximális abszolút értéke' },
      ],
      answer: 3,
      explanation: {
        en: 'ρ(T) = max |λ_i| over the eigenvalues of T.',
        hu: 'ρ(T) = max |λ_i| T sajátértékeire.',
      },
    },
    {
      id: 'q-spectral-2',
      prompt: {
        en: 'What convergence does x^(k+1) = T x^(k) + c have when ρ(T) < 1?',
        hu: 'Milyen konvergenciája van az x^(k+1) = T x^(k) + c iterációnak, ha ρ(T) < 1?',
      },
      options: [
        { en: 'It does not converge', hu: 'Nem konvergál' },
        { en: 'Only for x^(0) = 0', hu: 'Csak x^(0) = 0 esetén' },
        { en: 'Only near the fixed point', hu: 'Csak a fixpont közelében' },
        { en: 'For an arbitrary initial value x^(0)', hu: 'Tetszőleges x^(0) kezdővektorra' },
      ],
      answer: 3,
      explanation: {
        en: 'ρ(T) < 1 yields global convergence of the affine iteration.',
        hu: 'ρ(T) < 1 az affin iteráció globális konvergenciáját adja.',
      },
    },
    {
      id: 'q-spectral-3',
      prompt: {
        en: 'For which matrix does the Neumann series I + A + A² + … converge?',
        hu: 'Mely mátrixra konvergál az I + A + A² + … Neumann-sor?',
      },
      options: [
        { en: 'ρ(A) = 1', hu: 'ρ(A) = 1' },
        { en: '‖A‖ = 1', hu: '‖A‖ = 1' },
        { en: 'ρ(A) < 1', hu: 'ρ(A) < 1' },
        { en: '‖A‖ > 1', hu: '‖A‖ > 1' },
      ],
      answer: 2,
      explanation: {
        en: 'Convergence requires the spectral radius ρ(A) < 1.',
        hu: 'A konvergenciához a spektrálsugár ρ(A) < 1 szükséges.',
      },
    },
  ],
  'jacobi-gs': [
    // §4.2 Jacobi
    {
      id: 'q-jacobi-gs-1',
      prompt: {
        en: 'The Jacobi iteration matrix T is defined as:',
        hu: 'A Jacobi-iterációs T mátrix definíciója:',
      },
      options: [
        { en: 'T = −L⁻¹(D + U)', hu: 'T = −L⁻¹(D + U)' },
        { en: 'T = −D⁻¹(L + U)', hu: 'T = −D⁻¹(L + U)' },
        { en: 'T = D⁻¹(L + U)', hu: 'T = D⁻¹(L + U)' },
        { en: 'T = (D + L)⁻¹U', hu: 'T = (D + L)⁻¹U' },
      ],
      answer: 1,
      explanation: {
        en: 'With A = D + L + U, Jacobi gives x^(k+1) = −D⁻¹(L + U)x^(k) + D⁻¹b, so T = −D⁻¹(L + U).',
        hu: 'A = D + L + U mellett a Jacobi x^(k+1) = −D⁻¹(L + U)x^(k) + D⁻¹b-t ad, így T = −D⁻¹(L + U).',
      },
    },
    {
      id: 'q-jacobi-gs-2',
      prompt: {
        en: 'What does ‖T_J‖∞ = max_i ∑_{j≠i} |a_ij / a_ii| < 1 imply?',
        hu: 'Mit jelent a ‖T_J‖∞ = max_i ∑_{j≠i} |a_ij / a_ii| < 1 feltétel?',
      },
      options: [
        { en: 'Solution cannot be found', hu: 'A megoldás nem található meg' },
        { en: 'Jacobi iteration is convergent', hu: 'A Jacobi-iteráció konvergens' },
        { en: 'Matrix is singular', hu: 'A mátrix szinguláris' },
        { en: 'Jacobi iteration is divergent', hu: 'A Jacobi-iteráció divergens' },
      ],
      answer: 1,
      explanation: {
        en: 'A norm of the iteration matrix below 1 is a sufficient condition for convergence.',
        hu: 'Az iterációs mátrix 1-nél kisebb normája elégséges feltétel a konvergenciához.',
      },
    },
    {
      id: 'q-jacobi-gs-3',
      prompt: {
        en: 'What does diagonal dominance of A imply for Jacobi iteration?',
        hu: 'Mit jelent A diagonális dominanciája a Jacobi-iterációra nézve?',
      },
      options: [
        { en: '‖T_J‖ = 1', hu: '‖T_J‖ = 1' },
        { en: 'ρ(T_J) > 1', hu: 'ρ(T_J) > 1' },
        { en: 'ρ(T_J) < 1', hu: 'ρ(T_J) < 1' },
        { en: '‖T_J‖ > 1', hu: '‖T_J‖ > 1' },
      ],
      answer: 2,
      explanation: {
        en: 'Strict diagonal dominance forces ρ(T_J) < 1, so Jacobi converges.',
        hu: 'A szigorú diagonális dominancia ρ(T_J) < 1-et kényszerít, így a Jacobi konvergál.',
      },
    },
    {
      id: 'q-jacobi-gs-4',
      prompt: {
        en: 'Which iteration form is used in the Jacobi method?',
        hu: 'Melyik iterációs alakot használja a Jacobi-módszer?',
      },
      options: [
        { en: 'x^(k+1) = T x^(k) + c', hu: 'x^(k+1) = T x^(k) + c' },
        { en: 'x^(k) = T x^(k+1) + c', hu: 'x^(k) = T x^(k+1) + c' },
        { en: 'x^(k+1) = T⁻¹ x^(k) + c', hu: 'x^(k+1) = T⁻¹ x^(k) + c' },
        { en: 'x^(k) = T⁻¹ x^(k+1) + c', hu: 'x^(k) = T⁻¹ x^(k+1) + c' },
      ],
      answer: 0,
      explanation: {
        en: 'Jacobi is the affine fixed-point form x^(k+1) = T x^(k) + c.',
        hu: 'A Jacobi az affin fixpont alak: x^(k+1) = T x^(k) + c.',
      },
    },
    {
      id: 'q-jacobi-gs-5',
      prompt: {
        en: 'What is the structure of matrix D in Jacobi iteration?',
        hu: 'Milyen a D mátrix szerkezete a Jacobi-iterációban?',
      },
      options: [
        { en: 'Matrix with diagonal elements of A, zeros elsewhere', hu: 'A átlós elemeit tartalmazó mátrix, máshol nullákkal' },
        { en: 'Diagonal matrix with all ones', hu: 'Csupa 1-est tartalmazó diagonális mátrix' },
        { en: 'Lower triangular matrix', hu: 'Alsó háromszögmátrix' },
        { en: 'Upper triangular matrix', hu: 'Felső háromszögmátrix' },
      ],
      answer: 0,
      explanation: {
        en: 'D holds the diagonal entries of A and zeros off-diagonal.',
        hu: 'D tartalmazza A átlós elemeit, az átlón kívül nullákat.',
      },
    },
    // §4.3 Gauss–Seidel
    {
      id: 'q-jacobi-gs-6',
      prompt: {
        en: 'What is the matrix T in the Gauss–Seidel method?',
        hu: 'Mi a T mátrix a Gauss–Seidel-módszerben?',
      },
      options: [
        { en: 'T = D⁻¹(L + U)', hu: 'T = D⁻¹(L + U)' },
        { en: 'T = −(D + L)⁻¹U', hu: 'T = −(D + L)⁻¹U' },
        { en: 'T = (D + L)⁻¹U', hu: 'T = (D + L)⁻¹U' },
        { en: 'T = −(L + U)⁻¹D', hu: 'T = −(L + U)⁻¹D' },
      ],
      answer: 1,
      explanation: {
        en: 'Gauss–Seidel uses (D + L)x^(k+1) = −U x^(k) + b, so T = −(D + L)⁻¹U.',
        hu: 'A Gauss–Seidel a (D + L)x^(k+1) = −U x^(k) + b alakot használja, így T = −(D + L)⁻¹U.',
      },
    },
    {
      id: 'q-jacobi-gs-7',
      prompt: {
        en: 'What values does Gauss–Seidel use within the same step?',
        hu: 'Milyen értékeket használ a Gauss–Seidel ugyanazon a lépésen belül?',
      },
      options: [
        { en: 'All values from the previous step', hu: 'Az előző lépés összes értékét' },
        { en: 'Most recent computed values', hu: 'A legfrissebben kiszámolt értékeket' },
        { en: 'Only previously computed values', hu: 'Csak a korábban kiszámolt értékeket' },
        { en: 'Only constants', hu: 'Csak konstansokat' },
      ],
      answer: 1,
      explanation: {
        en: 'Gauss–Seidel immediately reuses the freshly updated components.',
        hu: 'A Gauss–Seidel azonnal újrahasznosítja a frissen frissített komponenseket.',
      },
    },
    {
      id: 'q-jacobi-gs-8',
      prompt: {
        en: 'What is the convergence condition for Gauss–Seidel?',
        hu: 'Mi a Gauss–Seidel konvergenciafeltétele?',
      },
      options: [
        { en: '‖T_G‖ > 1', hu: '‖T_G‖ > 1' },
        { en: 'ρ(T_G) > 1', hu: 'ρ(T_G) > 1' },
        { en: '‖T_G‖ = 1', hu: '‖T_G‖ = 1' },
        { en: 'ρ(T_G) < 1', hu: 'ρ(T_G) < 1' },
      ],
      answer: 3,
      explanation: {
        en: 'As for any linear iteration, convergence requires ρ(T_G) < 1.',
        hu: 'Mint bármely lineáris iterációnál, a konvergenciához ρ(T_G) < 1 szükséges.',
      },
    },
    {
      id: 'q-jacobi-gs-9',
      prompt: {
        en: 'If A is diagonally dominant, Gauss–Seidel:',
        hu: 'Ha A diagonálisan domináns, akkor a Gauss–Seidel:',
      },
      options: [
        { en: 'Needs more iterations than Jacobi', hu: 'Több iterációt igényel a Jacobinál' },
        { en: 'Is guaranteed to converge', hu: 'Garantáltan konvergál' },
        { en: 'Diverges', hu: 'Divergál' },
        { en: 'Requires A to be symmetric', hu: 'A szimmetriáját igényli' },
      ],
      answer: 1,
      explanation: {
        en: 'Diagonal dominance guarantees Gauss–Seidel convergence.',
        hu: 'A diagonális dominancia garantálja a Gauss–Seidel konvergenciáját.',
      },
    },
    {
      id: 'q-jacobi-gs-10',
      prompt: {
        en: 'Which property guarantees convergence of Gauss–Seidel?',
        hu: 'Melyik tulajdonság garantálja a Gauss–Seidel konvergenciáját?',
      },
      options: [
        { en: 'A is symmetric', hu: 'A szimmetrikus' },
        { en: 'A is upper triangular', hu: 'A felső háromszögmátrix' },
        { en: 'A is singular', hu: 'A szinguláris' },
        { en: 'A is diagonally dominant', hu: 'A diagonálisan domináns' },
      ],
      answer: 3,
      explanation: {
        en: 'Diagonal dominance is a sufficient convergence condition.',
        hu: 'A diagonális dominancia elégséges konvergenciafeltétel.',
      },
    },
  ],
  condition: [
    // §4.4 Error Bounds and the Condition Number
    {
      id: 'q-condition-1',
      prompt: {
        en: 'Typical outcome of using an ill-conditioned matrix:',
        hu: 'Egy rosszul kondicionált mátrix használatának tipikus következménye:',
      },
      options: [
        { en: 'Large errors despite a small residual vector', hu: 'Nagy hibák egy kis maradékvektor ellenére' },
        { en: 'Accurate results', hu: 'Pontos eredmények' },
        { en: 'Insensitivity to errors', hu: 'Hibákkal szembeni érzéketlenség' },
        { en: 'Fast convergence', hu: 'Gyors konvergencia' },
      ],
      answer: 0,
      explanation: {
        en: 'A small residual can hide a large solution error when cond(A) is large.',
        hu: 'Egy kis maradék nagy megoldáshibát rejthet, ha cond(A) nagy.',
      },
    },
    {
      id: 'q-condition-2',
      prompt: {
        en: 'Which inequality provides an error bound using the residual r?',
        hu: 'Melyik egyenlőtlenség ad hibakorlátot az r maradék felhasználásával?',
      },
      options: [
        { en: '‖x − x̃‖ ≤ ‖A⁻¹‖ ‖r‖', hu: '‖x − x̃‖ ≤ ‖A⁻¹‖ ‖r‖' },
        { en: '‖x − x̃‖ ≤ ‖A⁻¹‖⁻¹ ‖r‖', hu: '‖x − x̃‖ ≤ ‖A⁻¹‖⁻¹ ‖r‖' },
        { en: '‖x − x̃‖ ≤ ‖r‖', hu: '‖x − x̃‖ ≤ ‖r‖' },
        { en: '‖x − x̃‖ ≤ ‖A‖ ‖r‖', hu: '‖x − x̃‖ ≤ ‖A‖ ‖r‖' },
      ],
      answer: 0,
      explanation: {
        en: 'Since A(x − x̃) = r, we get x − x̃ = A⁻¹r and ‖x − x̃‖ ≤ ‖A⁻¹‖‖r‖.',
        hu: 'Mivel A(x − x̃) = r, ezért x − x̃ = A⁻¹r, és ‖x − x̃‖ ≤ ‖A⁻¹‖‖r‖.',
      },
    },
    {
      id: 'q-condition-3',
      prompt: {
        en: 'A common stopping criterion in iterative methods:',
        hu: 'Gyakori leállási feltétel az iteratív módszerekben:',
      },
      options: [
        { en: '‖x^(k+1) − x^(k)‖ < ε', hu: '‖x^(k+1) − x^(k)‖ < ε' },
        { en: '‖A x^(k) − b‖ > ε', hu: '‖A x^(k) − b‖ > ε' },
        { en: '‖x^(k+1) − x^(k)‖ > ε', hu: '‖x^(k+1) − x^(k)‖ > ε' },
        { en: '‖x^(k)‖ < ε', hu: '‖x^(k)‖ < ε' },
      ],
      answer: 0,
      explanation: {
        en: 'Iteration stops once successive iterates change by less than ε.',
        hu: 'Az iteráció leáll, amint az egymást követő közelítések ε-nál kevesebbel változnak.',
      },
    },
    {
      id: 'q-condition-4',
      prompt: {
        en: 'A small residual together with a large condition number implies:',
        hu: 'Egy kis maradék és egy nagy kondíciószám együtt azt jelenti:',
      },
      options: [
        { en: 'Accurate solution', hu: 'Pontos megoldás' },
        { en: 'Small error', hu: 'Kis hiba' },
        { en: 'Possibly large error', hu: 'Esetleg nagy hiba' },
        { en: 'No solution', hu: 'Nincs megoldás' },
      ],
      answer: 2,
      explanation: {
        en: 'Error ≈ cond(A) × relative residual, so large cond(A) permits a large error.',
        hu: 'Hiba ≈ cond(A) × relatív maradék, így a nagy cond(A) nagy hibát enged meg.',
      },
    },
    {
      id: 'q-condition-5',
      prompt: {
        en: 'Which norm is commonly used when computing condition numbers?',
        hu: 'Melyik normát használjuk gyakran a kondíciószámok kiszámításakor?',
      },
      options: [
        { en: 'Frobenius norm', hu: 'Frobenius-norma' },
        { en: '∞-norm', hu: '∞-norma' },
        { en: 'Euclidean norm', hu: 'Euklideszi norma' },
        { en: 'Operator norm', hu: 'Operátornorma' },
      ],
      answer: 3,
      explanation: {
        en: 'cond(A) = ‖A‖‖A⁻¹‖ uses an induced (operator) matrix norm.',
        hu: 'A cond(A) = ‖A‖‖A⁻¹‖ egy indukált (operátor-) mátrixnormát használ.',
      },
    },
    // §4.5 Perturbation of Linear Systems
    {
      id: 'q-condition-6',
      prompt: {
        en: 'When both A and b are perturbed, which inequality estimates the total relative error?',
        hu: 'Amikor A-t és b-t is perturbáljuk, melyik egyenlőtlenség becsli a teljes relatív hibát?',
      },
      options: [
        { en: '‖x − x̃‖ ≤ ‖A⁻¹‖ · ( ‖A − Ã‖/‖A‖ + ‖b − b̃‖/‖b‖ )', hu: '‖x − x̃‖ ≤ ‖A⁻¹‖ · ( ‖A − Ã‖/‖A‖ + ‖b − b̃‖/‖b‖ )' },
        { en: 'rel.err ≤ [cond(A) / (1 − cond(A)·‖A−Ã‖/‖A‖)] · ( ‖A−Ã‖/‖A‖ + ‖b−b̃‖/‖b‖ )', hu: 'rel.hiba ≤ [cond(A) / (1 − cond(A)·‖A−Ã‖/‖A‖)] · ( ‖A−Ã‖/‖A‖ + ‖b−b̃‖/‖b‖ )' },
        { en: 'rel.err ≤ cond(A) · ‖b − b̃‖', hu: 'rel.hiba ≤ cond(A) · ‖b − b̃‖' },
        { en: 'rel.err ≤ cond(A) · ( ‖A−Ã‖/‖A‖ + ‖b−b̃‖/‖b‖ )', hu: 'rel.hiba ≤ cond(A) · ( ‖A−Ã‖/‖A‖ + ‖b−b̃‖/‖b‖ )' },
      ],
      answer: 1,
      explanation: {
        en: 'The full first-order perturbation bound carries the amplification factor cond(A)/(1 − cond(A)·‖A−Ã‖/‖A‖).',
        hu: 'A teljes elsőrendű perturbációs korlát a cond(A)/(1 − cond(A)·‖A−Ã‖/‖A‖) erősítési tényezőt tartalmazza.',
      },
    },
    {
      id: 'q-condition-7',
      prompt: {
        en: 'What does Gastinel’s theorem relate to?',
        hu: 'Mihez kapcsolódik a Gastinel-tétel?',
      },
      options: [
        { en: 'Diagonal dominance', hu: 'Diagonális dominancia' },
        { en: 'Gaussian elimination', hu: 'Gauss-elimináció' },
        { en: 'Eigenvalue decomposition', hu: 'Sajátérték-felbontás' },
        { en: 'Proximity to singularity', hu: 'A szingularitáshoz való közelség' },
      ],
      answer: 3,
      explanation: {
        en: 'Gastinel’s theorem characterises the distance of A to the nearest singular matrix.',
        hu: 'A Gastinel-tétel A-nak a legközelebbi szinguláris mátrixtól való távolságát jellemzi.',
      },
    },
    {
      id: 'q-condition-8',
      prompt: {
        en: 'What condition ensures stability when both A and b are perturbed?',
        hu: 'Milyen feltétel biztosítja a stabilitást, ha A-t és b-t is perturbáljuk?',
      },
      options: [
        { en: 'Ã = A', hu: 'Ã = A' },
        { en: '‖A − Ã‖ = 0', hu: '‖A − Ã‖ = 0' },
        { en: '‖b − b̃‖ > ‖A‖', hu: '‖b − b̃‖ > ‖A‖' },
        { en: '‖A − Ã‖ < 1 / ‖A⁻¹‖', hu: '‖A − Ã‖ < 1 / ‖A⁻¹‖' },
      ],
      answer: 3,
      explanation: {
        en: 'If the perturbation stays below 1/‖A⁻¹‖, the perturbed matrix remains invertible.',
        hu: 'Ha a perturbáció 1/‖A⁻¹‖ alatt marad, a perturbált mátrix invertálható marad.',
      },
    },
    {
      id: 'q-condition-9',
      prompt: {
        en: 'Effect of rounding/approximation on an ill-conditioned system:',
        hu: 'A kerekítés/közelítés hatása egy rosszul kondicionált rendszerre:',
      },
      options: [
        { en: 'Exact solution', hu: 'Pontos megoldás' },
        { en: 'No effect', hu: 'Nincs hatás' },
        { en: 'Significant deviation from the true solution', hu: 'Jelentős eltérés a valódi megoldástól' },
        { en: 'Reduced computation time', hu: 'Csökkentett számítási idő' },
      ],
      answer: 2,
      explanation: {
        en: 'Ill-conditioning amplifies small input perturbations into large solution errors.',
        hu: 'A rossz kondicionáltság a kis bemeneti perturbációkat nagy megoldáshibákká nagyítja.',
      },
    },
    {
      id: 'q-condition-10',
      prompt: {
        en: 'Which example matrix illustrates sensitivity to perturbation?',
        hu: 'Melyik példamátrix szemlélteti a perturbációra való érzékenységet?',
      },
      options: [
        { en: 'Identity matrix', hu: 'Egységmátrix' },
        { en: 'Random matrix', hu: 'Véletlen mátrix' },
        { en: 'Hilbert matrix', hu: 'Hilbert-mátrix' },
        { en: 'Diagonally dominant matrix', hu: 'Diagonálisan domináns mátrix' },
      ],
      answer: 2,
      explanation: {
        en: 'The Hilbert matrix is a classic, notoriously ill-conditioned example.',
        hu: 'A Hilbert-mátrix klasszikus, hírhedten rosszul kondicionált példa.',
      },
    },
  ],
};

export function getQuiz(sectionId: string): QuizQuestion[] {
  return QUIZZES[sectionId] ?? [];
}
