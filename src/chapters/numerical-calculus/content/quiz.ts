import type { QuizQuestion } from '../../../shared/ui/Quiz';

/**
 * Multiple-choice questions for Chapter 7 (Numerical Calculus), parsed from the
 * shared quiz bank. Keyed by lesson slug:
 *   7_1 ← quiz.md §7.1 Numerical Differentiation
 *   7_2 ← Richardson's extrapolation (no questions in the quiz bank)
 *   7_3 ← quiz.md §7.3 Newton–Cotes Formulas
 *   7_4 ← quiz.md §7.4 Gaussian Quadrature
 * Bilingual: formula-only options are identical in both languages.
 */
const QUIZZES: Record<string, QuizQuestion[]> = {
  '7_1': [
    {
      id: 'q-7_1-1',
      prompt: {
        en: 'Which is NOT true for numerical differentiation?',
        hu: 'Melyik NEM igaz a numerikus deriválásra?',
      },
      options: [
        { en: 'The approximate derivative can be obtained by differentiating a Lagrange interpolating polynomial', hu: 'A közelítő derivált egy Lagrange-interpolációs polinom deriválásával nyerhető' },
        { en: 'It is sensitive with respect to rounding error', hu: 'Érzékeny a kerekítési hibára' },
        { en: 'It is a well-conditioned mathematical problem', hu: 'Jól kondicionált matematikai feladat' },
        { en: 'The approximate derivative can be obtained with the help of the Taylor formula', hu: 'A közelítő derivált a Taylor-formula segítségével nyerhető' },
      ],
      answer: 2,
      explanation: {
        en: 'Numerical differentiation is ill-conditioned: small input errors are strongly amplified.',
        hu: 'A numerikus deriválás rosszul kondicionált: a kis bemeneti hibák erősen felnagyítódnak.',
      },
    },
    {
      id: 'q-7_1-2',
      prompt: {
        en: 'What is the main cause of instability in numerical differentiation for small h?',
        hu: 'Mi a numerikus deriválás instabilitásának fő oka kis h-ra?',
      },
      options: [
        { en: 'Truncation error increases', hu: 'A csonkítási hiba nő' },
        { en: 'Step size is too large', hu: 'A lépésköz túl nagy' },
        { en: 'Rounding error increases', hu: 'A kerekítési hiba nő' },
        { en: 'Function value becomes zero', hu: 'A függvényérték nullává válik' },
      ],
      answer: 2,
      explanation: {
        en: 'Dividing nearly-equal values by a tiny h magnifies rounding error.',
        hu: 'Közel egyenlő értékek parányi h-val való osztása felnagyítja a kerekítési hibát.',
      },
    },
    {
      id: 'q-7_1-3',
      prompt: {
        en: 'Order of accuracy of f′(x₀) ≈ (f(x₀ + h) − f(x₀)) / h:',
        hu: 'Az f′(x₀) ≈ (f(x₀ + h) − f(x₀)) / h pontossági rendje:',
      },
      options: [
        { en: 'First', hu: 'Elsőrendű' },
        { en: 'Second', hu: 'Másodrendű' },
        { en: 'Fourth', hu: 'Negyedrendű' },
        { en: 'Zero', hu: 'Nulladrendű' },
      ],
      answer: 0,
      explanation: {
        en: 'The forward difference has first-order accuracy, O(h).',
        hu: 'Az előrehaladó differencia elsőrendű pontosságú, O(h).',
      },
    },
    {
      id: 'q-7_1-4',
      prompt: {
        en: 'Error term of the forward difference f′(x₀) ≈ (f(x₀ + h) − f(x₀)) / h:',
        hu: 'Az előrehaladó differencia f′(x₀) ≈ (f(x₀ + h) − f(x₀)) / h hibatagja:',
      },
      options: [
        { en: '(h/2) f″(x₀)', hu: '(h/2) f″(x₀)' },
        { en: '(h²/2) f″(x₀)', hu: '(h²/2) f″(x₀)' },
        { en: '−h f″(x₀)', hu: '−h f″(x₀)' },
        { en: '−(h/2) f″(ξ)', hu: '−(h/2) f″(ξ)' },
      ],
      answer: 3,
      explanation: {
        en: 'Taylor expansion gives the leading error −(h/2) f″(ξ).',
        hu: 'A Taylor-sorfejtés a −(h/2) f″(ξ) vezető hibát adja.',
      },
    },
    {
      id: 'q-7_1-5',
      prompt: {
        en: 'Which component contributes to the total error in the forward difference?',
        hu: 'Melyik összetevő járul hozzá az előrehaladó differencia teljes hibájához?',
      },
      options: [
        { en: 'Only Taylor expansion error', hu: 'Csak a Taylor-sorfejtés hibája' },
        { en: 'Only truncation error', hu: 'Csak a csonkítási hiba' },
        { en: 'Truncation and rounding errors', hu: 'A csonkítási és a kerekítési hiba' },
        { en: 'Only rounding error', hu: 'Csak a kerekítési hiba' },
      ],
      answer: 2,
      explanation: {
        en: 'Total error combines O(h) truncation and O(ε/h) rounding error.',
        hu: 'A teljes hiba az O(h) csonkítási és az O(ε/h) kerekítési hibát egyesíti.',
      },
    },
  ],
  '7_3': [
    {
      id: 'q-7_3-1',
      prompt: {
        en: 'In Newton–Cotes formulas, the weights are determined by:',
        hu: 'A Newton–Cotes-formulákban a súlyokat a következő határozza meg:',
      },
      options: [
        { en: 'Integrating Lagrange basis polynomials', hu: 'A Lagrange-bázispolinomok integrálása' },
        { en: 'Taylor expansions', hu: 'Taylor-sorfejtések' },
        { en: 'Solving differential equations', hu: 'Differenciálegyenletek megoldása' },
        { en: 'Rounding approximations', hu: 'Kerekítési közelítések' },
      ],
      answer: 0,
      explanation: {
        en: 'The weights come from integrating the Lagrange basis over the interval.',
        hu: 'A súlyok a Lagrange-bázis intervallumon vett integrálásából származnak.',
      },
    },
    {
      id: 'q-7_3-2',
      prompt: {
        en: 'Which Newton–Cotes formula uses all mesh points inside the open interval?',
        hu: 'Melyik Newton–Cotes-formula használja az összes csomópontot a nyílt intervallum belsejében?',
      },
      options: [
        { en: 'Open', hu: 'Nyílt' },
        { en: 'Closed', hu: 'Zárt' },
        { en: 'Exact', hu: 'Pontos' },
        { en: 'Composite', hu: 'Összetett' },
      ],
      answer: 0,
      explanation: {
        en: 'Open Newton–Cotes formulas exclude the endpoints, using only interior points.',
        hu: 'A nyílt Newton–Cotes-formulák kihagyják a végpontokat, csak belső pontokat használnak.',
      },
    },
    {
      id: 'q-7_3-3',
      prompt: {
        en: 'What is the weight for the middle point in Simpson’s rule?',
        hu: 'Mekkora a középső pont súlya a Simpson-formulában?',
      },
      options: [
        { en: '2', hu: '2' },
        { en: '1', hu: '1' },
        { en: '3', hu: '3' },
        { en: '4', hu: '4' },
      ],
      answer: 3,
      explanation: {
        en: 'Simpson’s rule has the weight pattern 1, 4, 1, so the middle weight is 4.',
        hu: 'A Simpson-formula súlymintája 1, 4, 1, így a középső súly 4.',
      },
    },
    {
      id: 'q-7_3-4',
      prompt: {
        en: "What does 'composite' in the composite trapezoidal rule refer to?",
        hu: 'Mire utal az „összetett” az összetett trapézformulában?',
      },
      options: [
        { en: 'Computing indefinite integrals', hu: 'Határozatlan integrálok számítására' },
        { en: 'Combining differentiation and integration', hu: 'A deriválás és integrálás kombinálására' },
        { en: 'Using second derivatives in the estimate', hu: 'Második deriváltak használatára a becslésben' },
        { en: 'Using multiple trapezoids over subintervals', hu: 'Több trapéz használatára a részintervallumokon' },
      ],
      answer: 3,
      explanation: {
        en: 'A composite rule sums the basic rule over many subintervals.',
        hu: 'Egy összetett formula az alapformulát összegzi sok részintervallumon.',
      },
    },
    {
      id: 'q-7_3-5',
      prompt: {
        en: 'Which Simpson-based rule uses three subintervals (four points)?',
        hu: 'Melyik Simpson-alapú formula használ három részintervallumot (négy pontot)?',
      },
      options: [
        { en: 'Trapezoidal rule', hu: 'Trapézformula' },
        { en: 'Simpson’s 3/8 rule', hu: 'Simpson 3/8-os formulája' },
        { en: "Composite Simpson's rule", hu: 'Összetett Simpson-formula' },
        { en: 'Midpoint rule', hu: 'Középponti formula' },
      ],
      answer: 1,
      explanation: {
        en: 'Simpson’s 3/8 rule integrates over three subintervals (four nodes).',
        hu: 'A Simpson 3/8-os formula három részintervallumon (négy csomóponton) integrál.',
      },
    },
  ],
  '7_4': [
    {
      id: 'q-7_4-1',
      prompt: {
        en: 'What kind of error decay does Gaussian quadrature exhibit for smooth functions?',
        hu: 'Milyen hibacsökkenést mutat a Gauss-kvadratúra sima függvényekre?',
      },
      options: [
        { en: 'Polynomial decay', hu: 'Polinomiális csökkenés' },
        { en: 'Linear decay', hu: 'Lineáris csökkenés' },
        { en: 'No decay', hu: 'Nincs csökkenés' },
        { en: 'Exponential decay', hu: 'Exponenciális csökkenés' },
      ],
      answer: 3,
      explanation: {
        en: 'For analytic/smooth integrands, Gaussian quadrature converges exponentially.',
        hu: 'Analitikus/sima integrandusokra a Gauss-kvadratúra exponenciálisan konvergál.',
      },
    },
    {
      id: 'q-7_4-2',
      prompt: {
        en: 'Which polynomials define the orthogonality in standard Gaussian quadrature?',
        hu: 'Mely polinomok definiálják az ortogonalitást a standard Gauss-kvadratúrában?',
      },
      options: [
        { en: 'Chebyshev polynomials', hu: 'Csebisev-polinomok' },
        { en: 'Hermite polynomials', hu: 'Hermite-polinomok' },
        { en: 'Legendre polynomials', hu: 'Legendre-polinomok' },
        { en: 'Laguerre polynomials', hu: 'Laguerre-polinomok' },
      ],
      answer: 2,
      explanation: {
        en: 'Standard Gauss–Legendre quadrature uses the Legendre polynomials (weight 1).',
        hu: 'A standard Gauss–Legendre-kvadratúra a Legendre-polinomokat használja (1 súllyal).',
      },
    },
    {
      id: 'q-7_4-3',
      prompt: {
        en: 'Maximum polynomial degree for which an n-point Gaussian quadrature is exact:',
        hu: 'A legnagyobb polinomfok, amelyre egy n-pontos Gauss-kvadratúra pontos:',
      },
      options: [
        { en: 'n − 1', hu: 'n − 1' },
        { en: 'n', hu: 'n' },
        { en: '2n', hu: '2n' },
        { en: '2n − 1', hu: '2n − 1' },
      ],
      answer: 3,
      explanation: {
        en: 'n-point Gaussian quadrature is exact for polynomials up to degree 2n − 1.',
        hu: 'Az n-pontos Gauss-kvadratúra pontos a 2n − 1 fokig terjedő polinomokra.',
      },
    },
    {
      id: 'q-7_4-4',
      prompt: {
        en: 'The 2-point Gaussian quadrature approximation of ∫₋₁¹ f(x) dx is:',
        hu: 'A ∫₋₁¹ f(x) dx 2-pontos Gauss-kvadratúrás közelítése:',
      },
      options: [
        { en: 'f(−√3/3) + f(√3/3)', hu: 'f(−√3/3) + f(√3/3)' },
        { en: 'f(−1) + f(1)', hu: 'f(−1) + f(1)' },
        { en: '½[f(−√2/2) + f(√2/2)]', hu: '½[f(−√2/2) + f(√2/2)]' },
        { en: 'f(0)', hu: 'f(0)' },
      ],
      answer: 0,
      explanation: {
        en: 'Nodes ±1/√3 = ±√3/3 with unit weights give the 2-point Gauss rule.',
        hu: 'A ±1/√3 = ±√3/3 csomópontok egységnyi súlyokkal adják a 2-pontos Gauss-formulát.',
      },
    },
    {
      id: 'q-7_4-5',
      prompt: {
        en: 'Transformation to apply Gaussian quadrature on [a, b]:',
        hu: 'A Gauss-kvadratúra [a, b]-n való alkalmazásához szükséges transzformáció:',
      },
      options: [
        { en: 'x = (a + b)/2 + t', hu: 'x = (a + b)/2 + t' },
        { en: 'x = (b − a)/2 · t + (a + b)/2', hu: 'x = (b − a)/2 · t + (a + b)/2' },
        { en: 'x = (b − a)/(t + 1)', hu: 'x = (b − a)/(t + 1)' },
        { en: 'x = t · (b − a)', hu: 'x = t · (b − a)' },
      ],
      answer: 1,
      explanation: {
        en: 'This affine map sends [−1, 1] onto [a, b].',
        hu: 'Ez az affin leképezés a [−1, 1]-et [a, b]-re viszi.',
      },
    },
  ],
};

export function getQuiz(sectionId: string): QuizQuestion[] {
  return QUIZZES[sectionId] ?? [];
}
