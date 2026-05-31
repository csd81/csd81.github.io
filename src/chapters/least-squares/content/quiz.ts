import type { QuizQuestion } from '../../../shared/ui/Quiz';

/**
 * Multiple-choice questions for Chapter 9 (Method of Least Squares),
 * keyed by section id. Parsed from quiz.md §9.1–9.3. Correct answers
 * (0-based index) determined by numerical-analysis knowledge.
 *
 * Section ids: intro (no questions), line (9.1), polynomial (9.2),
 * nonlinear (9.3). Bilingual: formula-only options are identical in both languages.
 */
const QUIZ: Record<string, QuizQuestion[]> = {
  // 9.1 Line Fitting
  line: [
    {
      id: 'q-line-1',
      prompt: {
        en: 'What are the two equations in the Gaussian normal system derived from minimizing the least-squares error F(a, b)?',
        hu: 'Mi az F(a, b) legkisebb négyzetes hiba minimalizálásából származó Gauss-féle normálrendszer két egyenlete?',
      },
      options: [
        { en: 'A system of equations solved by interpolation', hu: 'Egy interpolációval megoldott egyenletrendszer' },
        { en: 'Two equations from setting the partial derivatives of F(a, b) to zero', hu: 'Két egyenlet az F(a, b) parciális deriváltjainak nullára állításából' },
        { en: 'Equations derived from the maximum error', hu: 'A maximális hibából származó egyenletek' },
        { en: 'The sum of residuals and their squares', hu: 'A maradékok és négyzeteik összege' },
      ],
      answer: 1,
      explanation: {
        en: 'The normal equations come from ∂F/∂a = 0 and ∂F/∂b = 0.',
        hu: 'A normálegyenletek a ∂F/∂a = 0 és ∂F/∂b = 0 feltételekből származnak.',
      },
    },
    {
      id: 'q-line-2',
      prompt: {
        en: 'What does a positive determinant d of the coefficient matrix indicate?',
        hu: 'Mit jelez az együtthatómátrix pozitív d determinánsa?',
      },
      options: [
        { en: 'The line fitting has multiple solutions', hu: 'Az illesztésnek több megoldása van' },
        { en: 'There is no solution to the system', hu: 'A rendszernek nincs megoldása' },
        { en: 'The Gaussian normal equations have a unique solution', hu: 'A Gauss-féle normálegyenleteknek egyértelmű megoldása van' },
        { en: 'The solution is not optimal', hu: 'A megoldás nem optimális' },
      ],
      answer: 2,
      explanation: {
        en: 'A nonzero (positive) determinant means the normal equations have a unique solution.',
        hu: 'A nem nulla (pozitív) determináns azt jelenti, hogy a normálegyenleteknek egyértelmű megoldása van.',
      },
    },
    {
      id: 'q-line-3',
      prompt: {
        en: 'Which inequality guarantees that the determinant d of the Gaussian normal equations is positive?',
        hu: 'Melyik egyenlőtlenség garantálja, hogy a Gauss-féle normálegyenletek d determinánsa pozitív?',
      },
      options: [
        { en: "Jensen's inequality", hu: 'Jensen-egyenlőtlenség' },
        { en: "Minkowski's inequality", hu: 'Minkowski-egyenlőtlenség' },
        { en: "Hölder's inequality", hu: 'Hölder-egyenlőtlenség' },
        { en: 'Cauchy–Bunyakovsky–Schwarz inequality', hu: 'Cauchy–Bunyakovszkij–Schwarz-egyenlőtlenség' },
      ],
      answer: 3,
      explanation: {
        en: 'The Cauchy–Schwarz inequality (strict unless all xᵢ equal) makes n·Σxᵢ² − (Σxᵢ)² > 0.',
        hu: 'A Cauchy–Schwarz-egyenlőtlenség (szigorú, hacsak nem minden xᵢ egyenlő) miatt n·Σxᵢ² − (Σxᵢ)² > 0.',
      },
    },
    {
      id: 'q-line-4',
      prompt: {
        en: 'What is the general form of the linear function used in line fitting?',
        hu: 'Mi az egyenesillesztésben használt lineáris függvény általános alakja?',
      },
      options: [
        { en: 'g(x) = aˣ + b', hu: 'g(x) = aˣ + b' },
        { en: 'g(x) = a x² + b', hu: 'g(x) = a x² + b' },
        { en: 'g(x) = a x + b', hu: 'g(x) = a x + b' },
        { en: 'g(x) = a·ln(x) + b', hu: 'g(x) = a·ln(x) + b' },
      ],
      answer: 2,
      explanation: {
        en: 'Line fitting models data with the straight line g(x) = a x + b.',
        hu: 'Az egyenesillesztés a g(x) = a x + b egyenessel modellezi az adatokat.',
      },
    },
    {
      id: 'q-line-5',
      prompt: {
        en: 'Which condition ensures that F(a, b) has a local (and global) minimum?',
        hu: 'Melyik feltétel biztosítja, hogy F(a, b)-nek lokális (és globális) minimuma van?',
      },
      options: [
        { en: 'The Hessian determinant D(a,b) is positive and ∂²F/∂a² > 0', hu: 'A D(a,b) Hesse-determináns pozitív és ∂²F/∂a² > 0' },
        { en: 'The second partial derivatives form a negative definite matrix', hu: 'A második parciális deriváltak negatív definit mátrixot alkotnak' },
        { en: 'The sum of the data points is constant', hu: 'Az adatpontok összege állandó' },
        { en: 'The value of a is greater than b', hu: 'Az a értéke nagyobb b-nél' },
      ],
      answer: 0,
      explanation: {
        en: 'A positive Hessian determinant with positive ∂²F/∂a² means F is convex → minimum.',
        hu: 'A pozitív Hesse-determináns pozitív ∂²F/∂a²-tel azt jelenti, hogy F konvex → minimum.',
      },
    },
  ],

  // 9.2 Polynomial Curve Fitting
  polynomial: [
    {
      id: 'q-polynomial-1',
      prompt: {
        en: 'What is the role of the normal equations in polynomial fitting?',
        hu: 'Mi a normálegyenletek szerepe a polinomillesztésben?',
      },
      options: [
        { en: 'They give the interpolation polynomial', hu: 'Az interpolációs polinomot adják' },
        { en: 'They are used to calculate derivatives', hu: 'Deriváltak kiszámítására szolgálnak' },
        { en: 'They find the mean of the data', hu: 'Az adatok átlagát keresik meg' },
        { en: 'They determine the coefficients that minimize the least-squares error', hu: 'A legkisebb négyzetes hibát minimalizáló együtthatókat határozzák meg' },
      ],
      answer: 3,
      explanation: {
        en: 'The normal equations yield the coefficients minimizing the sum of squared residuals.',
        hu: 'A normálegyenletek a maradékok négyzetösszegét minimalizáló együtthatókat adják.',
      },
    },
    {
      id: 'q-polynomial-2',
      prompt: {
        en: 'What is the least-squares error function for polynomial curve fitting?',
        hu: 'Mi a polinomillesztés legkisebb négyzetes hibafüggvénye?',
      },
      options: [
        { en: 'F = max |p(xᵢ) − yᵢ|', hu: 'F = max |p(xᵢ) − yᵢ|' },
        { en: 'F = Σ |p(xᵢ) − yᵢ|', hu: 'F = Σ |p(xᵢ) − yᵢ|' },
        { en: 'F = Σ (p(xᵢ) − yᵢ)²', hu: 'F = Σ (p(xᵢ) − yᵢ)²' },
        { en: 'F = Σ (xᵢ − yᵢ)²', hu: 'F = Σ (xᵢ − yᵢ)²' },
      ],
      answer: 2,
      explanation: {
        en: 'Least squares minimizes the sum of squared residuals Σ (p(xᵢ) − yᵢ)².',
        hu: 'A legkisebb négyzetek a maradékok négyzetösszegét Σ (p(xᵢ) − yᵢ)² minimalizálja.',
      },
    },
    {
      id: 'q-polynomial-3',
      prompt: {
        en: 'How are the normal equations for polynomial fitting obtained?',
        hu: 'Hogyan kapjuk meg a polinomillesztés normálegyenleteit?',
      },
      options: [
        { en: 'By interpolation', hu: 'Interpolációval' },
        { en: 'By setting all partial derivatives of the error function to zero', hu: 'A hibafüggvény összes parciális deriváltjának nullára állításával' },
        { en: 'By numerical integration', hu: 'Numerikus integrálással' },
        { en: 'By choosing the smallest coefficients', hu: 'A legkisebb együtthatók választásával' },
      ],
      answer: 1,
      explanation: {
        en: 'Setting every ∂F/∂cⱼ = 0 produces the linear normal equations.',
        hu: 'Minden ∂F/∂cⱼ = 0 beállítása a lineáris normálegyenleteket adja.',
      },
    },
    {
      id: 'q-polynomial-4',
      prompt: {
        en: 'Which type of function is the error function F in polynomial fitting (in the coefficients)?',
        hu: 'Milyen típusú függvény az F hibafüggvény a polinomillesztésben (az együtthatókban)?',
      },
      options: [
        { en: 'Quadratic', hu: 'Kvadratikus' },
        { en: 'Linear', hu: 'Lineáris' },
        { en: 'Logarithmic', hu: 'Logaritmikus' },
        { en: 'Exponential', hu: 'Exponenciális' },
      ],
      answer: 0,
      explanation: {
        en: 'F is a quadratic (convex) function of the unknown coefficients.',
        hu: 'F az ismeretlen együtthatók kvadratikus (konvex) függvénye.',
      },
    },
    {
      id: 'q-polynomial-5',
      prompt: {
        en: 'What is true about the minimum found by minimizing the least-squares error in polynomial fitting?',
        hu: 'Mi igaz a polinomillesztésben a legkisebb négyzetes hiba minimalizálásával talált minimumra?',
      },
      options: [
        { en: 'It always lies on one of the data points', hu: 'Mindig az egyik adatponton van' },
        { en: 'It may not be unique', hu: 'Lehet, hogy nem egyértelmű' },
        { en: 'It is always a local and global minimum', hu: 'Mindig lokális és globális minimum' },
        { en: 'It must be zero', hu: 'Nullának kell lennie' },
      ],
      answer: 2,
      explanation: {
        en: 'Because F is convex (quadratic), its minimum is simultaneously local and global.',
        hu: 'Mivel F konvex (kvadratikus), a minimuma egyszerre lokális és globális.',
      },
    },
  ],

  // 9.3 Special Nonlinear Curve Fitting
  nonlinear: [
    {
      id: 'q-nonlinear-1',
      prompt: {
        en: 'What type of equations are solved after linearization of nonlinear models?',
        hu: 'Milyen típusú egyenleteket oldunk meg a nemlineáris modellek linearizálása után?',
      },
      options: [
        { en: 'Algebraic equations', hu: 'Algebrai egyenleteket' },
        { en: 'Trigonometric equations', hu: 'Trigonometrikus egyenleteket' },
        { en: 'Differential equations', hu: 'Differenciálegyenleteket' },
        { en: 'Normal equations for linear regression', hu: 'A lineáris regresszió normálegyenleteit' },
      ],
      answer: 3,
      explanation: {
        en: 'After linearizing, one solves the linear normal equations of ordinary line fitting.',
        hu: 'A linearizálás után a szokásos egyenesillesztés lineáris normálegyenleteit oldjuk meg.',
      },
    },
    {
      id: 'q-nonlinear-2',
      prompt: {
        en: 'What is the form of the error function for exponential curve fitting?',
        hu: 'Mi az exponenciális görbeillesztés hibafüggvényének alakja?',
      },
      options: [
        { en: 'F(a, b) = Σ (a xᵢ + b − yᵢ)²', hu: 'F(a, b) = Σ (a xᵢ + b − yᵢ)²' },
        { en: 'F(a, b) = max |b·e^(a xᵢ) − yᵢ|', hu: 'F(a, b) = max |b·e^(a xᵢ) − yᵢ|' },
        { en: 'F(a, b) = Σ |b·e^(a xᵢ) − yᵢ|', hu: 'F(a, b) = Σ |b·e^(a xᵢ) − yᵢ|' },
        { en: 'F(a, b) = Σ (b·e^(a xᵢ) − yᵢ)²', hu: 'F(a, b) = Σ (b·e^(a xᵢ) − yᵢ)²' },
      ],
      answer: 3,
      explanation: {
        en: 'For model y = b·e^(a x) the least-squares error is Σ (b·e^(a xᵢ) − yᵢ)².',
        hu: 'Az y = b·e^(a x) modellre a legkisebb négyzetes hiba Σ (b·e^(a xᵢ) − yᵢ)².',
      },
    },
    {
      id: 'q-nonlinear-3',
      prompt: {
        en: 'After linearizing y = b·xᵃ, what data is used for linear fitting?',
        hu: 'Az y = b·xᵃ linearizálása után milyen adatokat használunk a lineáris illesztéshez?',
      },
      options: [
        { en: '(x, ln y)', hu: '(x, ln y)' },
        { en: '(ln x, y)', hu: '(ln x, y)' },
        { en: '(ln x, ln y)', hu: '(ln x, ln y)' },
        { en: '(x, y)', hu: '(x, y)' },
      ],
      answer: 2,
      explanation: {
        en: 'ln y = ln b + a·ln x, so one fits a line to (ln x, ln y).',
        hu: 'ln y = ln b + a·ln x, így egyenest illesztünk a (ln x, ln y) adatokra.',
      },
    },
    {
      id: 'q-nonlinear-4',
      prompt: {
        en: 'Why is linearization used in exponential curve fitting?',
        hu: 'Miért használunk linearizálást az exponenciális görbeillesztésben?',
      },
      options: [
        { en: 'To remove errors in the data', hu: 'Az adatok hibáinak eltávolítására' },
        { en: 'To improve interpolation', hu: 'Az interpoláció javítására' },
        { en: 'To convert logarithms to exponentials', hu: 'Logaritmusok exponenciálissá alakítására' },
        { en: 'To convert the problem to line fitting', hu: 'A feladat egyenesillesztéssé alakítására' },
      ],
      answer: 3,
      explanation: {
        en: 'Taking logarithms turns the exponential model into a straight-line fitting problem.',
        hu: 'A logaritmus vétele az exponenciális modellt egyenesillesztési feladattá alakítja.',
      },
    },
    {
      id: 'q-nonlinear-5',
      prompt: {
        en: 'What is the purpose of fitting a line to the transformed data in exponential curve fitting?',
        hu: 'Mi a célja az egyenes illesztésének a transzformált adatokra az exponenciális görbeillesztésben?',
      },
      options: [
        { en: 'To estimate the parameters a and b', hu: 'Az a és b paraméterek becslése' },
        { en: 'To maximize the function', hu: 'A függvény maximalizálása' },
        { en: 'To interpolate the data', hu: 'Az adatok interpolálása' },
        { en: 'To find roots of the function', hu: 'A függvény gyökeinek keresése' },
      ],
      answer: 0,
      explanation: {
        en: 'The line slope and intercept recover the model parameters a and b.',
        hu: 'Az egyenes meredeksége és tengelymetszete adja vissza az a és b modellparamétereket.',
      },
    },
  ],
};

export function getQuiz(sectionId: string): QuizQuestion[] {
  return QUIZ[sectionId] ?? [];
}

export default getQuiz;
