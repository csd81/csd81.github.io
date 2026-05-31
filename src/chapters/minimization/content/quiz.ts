import type { QuizQuestion } from '../../../shared/ui/Quiz';

/**
 * Multiple-choice questions for Chapter 8 (Minimization of Functions),
 * keyed by section id. Parsed from quiz.md §8.1–8.7. Correct answers
 * (0-based index) determined by numerical-analysis knowledge.
 * Bilingual: formula-only options are identical in both languages.
 */
const QUIZ: Record<string, QuizQuestion[]> = {
  // 8.1 Review of Calculus
  calculus: [
    {
      id: 'q-calculus-1',
      prompt: {
        en: 'Let f : ℝⁿ → ℝ be differentiable with a local extremum at a point a. What condition must hold at a?',
        hu: 'Legyen f : ℝⁿ → ℝ differenciálható, lokális szélsőértékkel egy a pontban. Milyen feltételnek kell teljesülnie a-ban?',
      },
      options: [
        { en: 'The Hessian is negative definite at a', hu: 'A Hesse-mátrix negatív definit a-ban' },
        { en: 'The gradient is undefined at a', hu: 'A gradiens nem definiált a-ban' },
        { en: 'All partial derivatives ∂f/∂xᵢ(a) = 0', hu: 'Minden parciális derivált ∂f/∂xᵢ(a) = 0' },
        { en: "f''(a) = 0", hu: "f''(a) = 0" },
      ],
      answer: 2,
      explanation: {
        en: 'At an interior local extremum the gradient vanishes, i.e. every first partial derivative is zero.',
        hu: 'Egy belső lokális szélsőértékben a gradiens eltűnik, azaz minden első parciális derivált nulla.',
      },
    },
    {
      id: 'q-calculus-2',
      prompt: {
        en: 'What type of matrix is the Hessian matrix?',
        hu: 'Milyen típusú mátrix a Hesse-mátrix?',
      },
      options: [
        { en: 'A matrix of function values', hu: 'Függvényértékek mátrixa' },
        { en: 'A matrix of first partial derivatives', hu: 'Első parciális deriváltak mátrixa' },
        { en: 'A matrix of tangent slopes', hu: 'Érintőmeredekségek mátrixa' },
        { en: 'A matrix of second partial derivatives', hu: 'Második parciális deriváltak mátrixa' },
      ],
      answer: 3,
      explanation: {
        en: 'The Hessian collects all second-order partial derivatives ∂²f/∂xᵢ∂xⱼ.',
        hu: 'A Hesse-mátrix az összes másodrendű parciális deriváltat ∂²f/∂xᵢ∂xⱼ tartalmazza.',
      },
    },
    {
      id: 'q-calculus-3',
      prompt: {
        en: 'Which of the following best describes the entries of the Hessian matrix?',
        hu: 'Az alábbiak közül melyik írja le legjobban a Hesse-mátrix elemeit?',
      },
      options: [
        { en: '∂²f/∂xᵢ∂xⱼ', hu: '∂²f/∂xᵢ∂xⱼ' },
        { en: '∇f', hu: '∇f' },
        { en: '∂f/∂xᵢ', hu: '∂f/∂xᵢ' },
        { en: 'f(xᵢ)', hu: 'f(xᵢ)' },
      ],
      answer: 0,
      explanation: {
        en: 'Each entry of the Hessian is a second mixed partial derivative ∂²f/∂xᵢ∂xⱼ.',
        hu: 'A Hesse-mátrix minden eleme egy második vegyes parciális derivált ∂²f/∂xᵢ∂xⱼ.',
      },
    },
    {
      id: 'q-calculus-4',
      prompt: {
        en: 'For a twice continuously differentiable f(x,y) at a critical point (a,b), which indicates a local maximum (D is the Hessian determinant)?',
        hu: 'Egy kétszer folytonosan differenciálható f(x,y)-ra egy (a,b) kritikus pontban melyik jelez lokális maximumot (D a Hesse-determináns)?',
      },
      options: [
        { en: 'D(a,b) = 0', hu: 'D(a,b) = 0' },
        { en: 'D(a,b) > 0 and ∂²f/∂x²(a,b) > 0', hu: 'D(a,b) > 0 és ∂²f/∂x²(a,b) > 0' },
        { en: 'D(a,b) > 0 and ∂²f/∂x²(a,b) < 0', hu: 'D(a,b) > 0 és ∂²f/∂x²(a,b) < 0' },
        { en: 'D(a,b) < 0', hu: 'D(a,b) < 0' },
      ],
      answer: 2,
      explanation: {
        en: 'D > 0 with negative second derivative in x means the Hessian is negative definite → local maximum.',
        hu: 'D > 0 negatív x-szerinti második deriválttal azt jelenti, hogy a Hesse-mátrix negatív definit → lokális maximum.',
      },
    },
    {
      id: 'q-calculus-5',
      prompt: {
        en: 'If the determinant D(a,b) < 0 at a critical point (where both first partials vanish), then:',
        hu: 'Ha a D(a,b) determináns < 0 egy kritikus pontban (ahol mindkét első parciális derivált eltűnik), akkor:',
      },
      options: [
        { en: 'f has no extremum at (a,b)', hu: 'f-nek nincs szélsőértéke (a,b)-ben' },
        { en: 'f has a local minimum at (a,b)', hu: 'f-nek lokális minimuma van (a,b)-ben' },
        { en: 'The Hessian is positive definite', hu: 'A Hesse-mátrix pozitív definit' },
        { en: 'f has a local maximum at (a,b)', hu: 'f-nek lokális maximuma van (a,b)-ben' },
      ],
      answer: 0,
      explanation: {
        en: 'A negative Hessian determinant indicates a saddle point — no extremum.',
        hu: 'A negatív Hesse-determináns nyeregpontot jelez — nincs szélsőérték.',
      },
    },
  ],

  // 8.2 Golden Section Search
  golden: [
    {
      id: 'q-golden-1',
      prompt: {
        en: 'If f(x) > f(y) during Golden Section Search (with a < x < y < b), which interval is chosen next?',
        hu: 'Ha f(x) > f(y) az aranymetszéses keresés során (a < x < y < b mellett), melyik intervallumot választjuk a következőként?',
      },
      options: [
        { en: '[a, x]', hu: '[a, x]' },
        { en: '[a, y]', hu: '[a, y]' },
        { en: '[x, b]', hu: '[x, b]' },
        { en: '[y, b]', hu: '[y, b]' },
      ],
      answer: 2,
      explanation: {
        en: 'A larger value at the left interior point x means the minimum lies to the right, so the bracket becomes [x, b].',
        hu: 'A bal belső x pontban vett nagyobb érték azt jelenti, hogy a minimum jobbra van, így az intervallum [x, b] lesz.',
      },
    },
    {
      id: 'q-golden-2',
      prompt: {
        en: 'What is the formula for the number of steps needed to reach a tolerance ε in Golden Section Search?',
        hu: 'Mi a képlete az ε tűréshatár eléréséhez szükséges lépésszámnak az aranymetszéses keresésben?',
      },
      options: [
        { en: 'n = log ε / log 2', hu: 'n = log ε / log 2' },
        { en: 'n = (b − a) / ε', hu: 'n = (b − a) / ε' },
        { en: 'n = log( ε / (b−a) ) / log r', hu: 'n = log( ε / (b−a) ) / log r' },
        { en: 'n = ε / (b − a)', hu: 'n = ε / (b − a)' },
      ],
      answer: 2,
      explanation: {
        en: 'The interval shrinks by factor r each step, so n = log(ε/(b−a)) / log r.',
        hu: 'Az intervallum minden lépésben r tényezővel zsugorodik, így n = log(ε/(b−a)) / log r.',
      },
    },
    {
      id: 'q-golden-3',
      prompt: {
        en: 'What type of function is required for the Golden Section Search to work?',
        hu: 'Milyen típusú függvény szükséges ahhoz, hogy az aranymetszéses keresés működjön?',
      },
      options: [
        { en: 'Piecewise function', hu: 'Szakaszonkénti függvény' },
        { en: 'Unimodal function', hu: 'Unimodális függvény' },
        { en: 'Multivariable function', hu: 'Többváltozós függvény' },
        { en: 'Periodic function', hu: 'Periodikus függvény' },
      ],
      answer: 1,
      explanation: {
        en: 'Golden Section Search needs a unimodal function on the interval (one minimum).',
        hu: 'Az aranymetszéses keresés unimodális függvényt igényel az intervallumon (egyetlen minimummal).',
      },
    },
    {
      id: 'q-golden-4',
      prompt: {
        en: 'Which equation defines the golden ratio r used in the method?',
        hu: 'Melyik egyenlet definiálja a módszerben használt r aranymetszést?',
      },
      options: [
        { en: 'r = log(2)', hu: 'r = log(2)' },
        { en: 'r² + r − 1 = 0', hu: 'r² + r − 1 = 0' },
        { en: 'r² − r + 1 = 0', hu: 'r² − r + 1 = 0' },
        { en: 'r² = r + 1', hu: 'r² = r + 1' },
      ],
      answer: 1,
      explanation: {
        en: 'The reduction ratio r = (√5−1)/2 satisfies r² + r − 1 = 0.',
        hu: 'Az r = (√5−1)/2 csökkentési arány teljesíti az r² + r − 1 = 0 egyenletet.',
      },
    },
    {
      id: 'q-golden-5',
      prompt: {
        en: 'What is the golden ratio r used in the method?',
        hu: 'Mi a módszerben használt r aranymetszés értéke?',
      },
      options: [
        { en: '(√5 − 1)/2', hu: '(√5 − 1)/2' },
        { en: '1/2', hu: '1/2' },
        { en: '1/3', hu: '1/3' },
        { en: '(√3 − 1)/2', hu: '(√3 − 1)/2' },
      ],
      answer: 0,
      explanation: {
        en: 'The golden-section reduction factor is r = (√5 − 1)/2 ≈ 0.618.',
        hu: 'Az aranymetszéses csökkentési tényező r = (√5 − 1)/2 ≈ 0.618.',
      },
    },
  ],

  // 8.3 Simplex Method (Nelder–Mead)
  simplex: [
    {
      id: 'q-simplex-1',
      prompt: {
        en: 'In the simplex method, which vertex is considered the "worst"?',
        hu: 'A szimplex-módszerben melyik csúcsot tekintjük a „legrosszabbnak”?',
      },
      options: [
        { en: 'The one with the largest function value', hu: 'A legnagyobb függvényértékűt' },
        { en: 'The midpoint of an edge', hu: 'Egy él felezőpontját' },
        { en: 'The one with the smallest function value', hu: 'A legkisebb függvényértékűt' },
        { en: 'The center of the simplex', hu: 'A szimplex középpontját' },
      ],
      answer: 0,
      explanation: {
        en: 'When minimizing, the worst vertex has the largest function value.',
        hu: 'Minimalizáláskor a legrosszabb csúcsnak a legnagyobb a függvényértéke.',
      },
    },
    {
      id: 'q-simplex-2',
      prompt: {
        en: 'If the reflected point xᵣ is better than all others, what step is considered in Nelder–Mead?',
        hu: 'Ha a tükrözött xᵣ pont jobb az összes többinél, milyen lépést mérlegel a Nelder–Mead?',
      },
      options: [
        { en: 'Expansion', hu: 'Tágítás' },
        { en: 'Reflection', hu: 'Tükrözés' },
        { en: 'Termination', hu: 'Leállás' },
        { en: 'Contraction', hu: 'Összehúzás' },
      ],
      answer: 0,
      explanation: {
        en: 'If reflection produces a new best point, the method tries expansion to go further in that direction.',
        hu: 'Ha a tükrözés új legjobb pontot ad, a módszer tágítással próbál tovább menni abba az irányba.',
      },
    },
    {
      id: 'q-simplex-3',
      prompt: {
        en: 'What is done if the reflected point is worse than the current worst point?',
        hu: 'Mit teszünk, ha a tükrözött pont rosszabb az aktuális legrosszabb pontnál?',
      },
      options: [
        { en: 'Shrink the simplex', hu: 'Összezsugorítjuk a szimplexet' },
        { en: 'Expand the simplex', hu: 'Tágítjuk a szimplexet' },
        { en: 'Stop the iteration', hu: 'Leállítjuk az iterációt' },
        { en: 'Use the same simplex', hu: 'Ugyanazt a szimplexet használjuk' },
      ],
      answer: 0,
      explanation: {
        en: 'If even reflection/contraction fails, the simplex shrinks toward the best vertex.',
        hu: 'Ha még a tükrözés/összehúzás is megbukik, a szimplex a legjobb csúcs felé zsugorodik.',
      },
    },
    {
      id: 'q-simplex-4',
      prompt: {
        en: 'Which statement is true about the Nelder–Mead method?',
        hu: 'Melyik állítás igaz a Nelder–Mead-módszerre?',
      },
      options: [
        { en: 'It requires second-order derivatives', hu: 'Másodrendű deriváltakat igényel' },
        { en: 'It always converges quadratically', hu: 'Mindig kvadratikusan konvergál' },
        { en: 'It is limited to linear functions', hu: 'Lineáris függvényekre korlátozódik' },
        { en: 'It is a direct search method using only function values', hu: 'Csak függvényértékeket használó direkt keresési módszer' },
      ],
      answer: 3,
      explanation: {
        en: 'Nelder–Mead is a derivative-free direct search using only function evaluations.',
        hu: 'A Nelder–Mead derivált nélküli direkt keresés, amely csak függvénykiértékeléseket használ.',
      },
    },
    {
      id: 'q-simplex-5',
      prompt: {
        en: 'How many vertices does an n-dimensional simplex have?',
        hu: 'Hány csúcsa van egy n-dimenziós szimplexnek?',
      },
      options: [
        { en: 'n²', hu: 'n²' },
        { en: 'n', hu: 'n' },
        { en: '2n', hu: '2n' },
        { en: 'n + 1', hu: 'n + 1' },
      ],
      answer: 3,
      explanation: {
        en: 'A simplex in ℝⁿ has n + 1 vertices (e.g. a triangle in 2D).',
        hu: 'Egy ℝⁿ-beli szimplexnek n + 1 csúcsa van (pl. egy háromszög 2D-ben).',
      },
    },
  ],

  // 8.4 Gradient Method
  gradient: [
    {
      id: 'q-gradient-1',
      prompt: {
        en: 'What is the goal when using the gradient method?',
        hu: 'Mi a cél a gradiens-módszer használatakor?',
      },
      options: [
        { en: 'Find a global maximum', hu: 'Globális maximum keresése' },
        { en: 'Estimate the integral', hu: 'Az integrál becslése' },
        { en: 'Solve a system of linear equations', hu: 'Lineáris egyenletrendszer megoldása' },
        { en: 'Find a local minimum', hu: 'Lokális minimum keresése' },
      ],
      answer: 3,
      explanation: {
        en: 'Steepest descent walks downhill along −∇f to find a local minimum.',
        hu: 'A legmeredekebb csökkenés a −∇f mentén halad lefelé egy lokális minimumért.',
      },
    },
    {
      id: 'q-gradient-2',
      prompt: {
        en: 'Which is a characteristic of the optimal gradient method?',
        hu: 'Mi jellemzi az optimális gradiens-módszert?',
      },
      options: [
        { en: 'Always converges in one step', hu: 'Mindig egy lépésben konvergál' },
        { en: 'Minimizes f along the negative gradient direction', hu: 'Minimalizálja f-et a negatív gradiens irányában' },
        { en: 'Maximizes the directional derivative', hu: 'Maximalizálja az iránymenti deriváltat' },
        { en: 'Uses constant step size', hu: 'Állandó lépésközt használ' },
      ],
      answer: 1,
      explanation: {
        en: 'The optimal (exact line-search) gradient method minimizes f along the −∇f direction at each step.',
        hu: 'Az optimális (pontos vonalmenti keresésű) gradiens-módszer minden lépésben minimalizálja f-et a −∇f irányában.',
      },
    },
    {
      id: 'q-gradient-3',
      prompt: {
        en: 'What is the formula for approximating component vᵢ of the gradient using first-order differences?',
        hu: 'Mi a képlete a gradiens vᵢ komponensének elsőrendű differenciákkal való közelítésére?',
      },
      options: [
        { en: 'vᵢ = f(p + h·eᵢ) − f(p − h·eᵢ)', hu: 'vᵢ = f(p + h·eᵢ) − f(p − h·eᵢ)' },
        { en: 'vᵢ = ( f(p + h·eᵢ) − f(p) ) / h', hu: 'vᵢ = ( f(p + h·eᵢ) − f(p) ) / h' },
        { en: 'vᵢ = ( f(h) − f(0) ) / h', hu: 'vᵢ = ( f(h) − f(0) ) / h' },
        { en: 'vᵢ = ∂f/∂xᵢ', hu: 'vᵢ = ∂f/∂xᵢ' },
      ],
      answer: 1,
      explanation: {
        en: 'The forward (first-order) finite difference is ( f(p + h·eᵢ) − f(p) ) / h.',
        hu: 'Az előrehaladó (elsőrendű) véges differencia ( f(p + h·eᵢ) − f(p) ) / h.',
      },
    },
    {
      id: 'q-gradient-4',
      prompt: {
        en: 'What is the optimal step size αₖ used for?',
        hu: 'Mire használjuk az optimális αₖ lépésközt?',
      },
      options: [
        { en: 'Maximizing f in the direction of the negative gradient vector', hu: 'f maximalizálása a negatív gradiensvektor irányában' },
        { en: 'Matching the gradient with the minimum', hu: 'A gradiens illesztése a minimumhoz' },
        { en: 'Calculating the Hessian matrix', hu: 'A Hesse-mátrix kiszámítása' },
        { en: 'Jumping to the point on the negative-gradient half-line where f is minimal', hu: 'Ugrás a negatív gradiens félegyenes azon pontjába, ahol f minimális' },
      ],
      answer: 3,
      explanation: {
        en: 'The optimal step size is the line-search minimizer of f along the −∇f half-line.',
        hu: 'Az optimális lépésköz f vonalmenti minimalizálója a −∇f félegyenes mentén.',
      },
    },
    {
      id: 'q-gradient-5',
      prompt: {
        en: 'Which method updates the point using p^(k+1) = p^(k) − αₖ f′(p^(k))?',
        hu: 'Melyik módszer frissíti a pontot a p^(k+1) = p^(k) − αₖ f′(p^(k)) képlettel?',
      },
      options: [
        { en: 'Simplex method', hu: 'Szimplex-módszer' },
        { en: 'Gradient method', hu: 'Gradiens-módszer' },
        { en: "Newton's method", hu: 'Newton-módszer' },
        { en: 'Golden section method', hu: 'Aranymetszéses módszer' },
      ],
      answer: 1,
      explanation: {
        en: 'This is the gradient (steepest-descent) update rule.',
        hu: 'Ez a gradiens (legmeredekebb csökkenés) frissítési szabálya.',
      },
    },
  ],

  // 8.5 Solving Linear Systems with the Gradient Method
  linsys: [
    {
      id: 'q-linsys-1',
      prompt: {
        en: 'When is the gradient method terminated in practice?',
        hu: 'A gyakorlatban mikor állítjuk le a gradiens-módszert?',
      },
      options: [
        { en: 'After one iteration', hu: 'Egy iteráció után' },
        { en: 'When the determinant is 0', hu: 'Amikor a determináns 0' },
        { en: 'When ‖r^(k)‖ is sufficiently small', hu: 'Amikor ‖r^(k)‖ elég kicsi' },
        { en: 'After 100 steps', hu: '100 lépés után' },
      ],
      answer: 2,
      explanation: {
        en: 'Iteration stops when the residual norm ‖r^(k)‖ = ‖b − A p^(k)‖ is small enough.',
        hu: 'Az iteráció leáll, amikor a maradéknorma ‖r^(k)‖ = ‖b − A p^(k)‖ elég kicsi.',
      },
    },
    {
      id: 'q-linsys-2',
      prompt: {
        en: 'What type of convergence is observed in the gradient method for linear systems?',
        hu: 'Milyen konvergencia figyelhető meg a gradiens-módszernél lineáris rendszerekre?',
      },
      options: [
        { en: 'Linear', hu: 'Lineáris' },
        { en: 'Superlinear', hu: 'Szuperlineáris' },
        { en: 'Quadratic', hu: 'Kvadratikus' },
        { en: 'Exponential', hu: 'Exponenciális' },
      ],
      answer: 0,
      explanation: {
        en: 'Steepest descent converges linearly, with rate governed by the condition number of A.',
        hu: 'A legmeredekebb csökkenés lineárisan konvergál, A kondíciószáma által meghatározott ütemben.',
      },
    },
    {
      id: 'q-linsys-3',
      prompt: {
        en: 'For symmetric A, what is the gradient of g(x) = ½ xᵀA x − bᵀx + c?',
        hu: 'Szimmetrikus A esetén mi a g(x) = ½ xᵀA x − bᵀx + c gradiense?',
      },
      options: [
        { en: 'A', hu: 'A' },
        { en: 'A x − b', hu: 'A x − b' },
        { en: 'b − A x', hu: 'b − A x' },
        { en: 'Aᵀx + b', hu: 'Aᵀx + b' },
      ],
      answer: 1,
      explanation: {
        en: 'For symmetric A, ∇g(x) = A x − b, so minimizing g solves A x = b.',
        hu: 'Szimmetrikus A-ra ∇g(x) = A x − b, így g minimalizálása megoldja az A x = b-t.',
      },
    },
    {
      id: 'q-linsys-4',
      prompt: {
        en: 'What is the iteration formula for updating the solution vector p^(k)?',
        hu: 'Mi a p^(k) megoldásvektor frissítésének iterációs képlete?',
      },
      options: [
        { en: 'p^(k+1) = p^(k) + r^(k)', hu: 'p^(k+1) = p^(k) + r^(k)' },
        { en: 'p^(k+1) = p^(k) − αₖ A r^(k)', hu: 'p^(k+1) = p^(k) − αₖ A r^(k)' },
        { en: 'p^(k+1) = A⁻¹ b', hu: 'p^(k+1) = A⁻¹ b' },
        { en: 'p^(k+1) = p^(k) + αₖ r^(k)', hu: 'p^(k+1) = p^(k) + αₖ r^(k)' },
      ],
      answer: 3,
      explanation: {
        en: 'The update moves along the residual direction: p^(k+1) = p^(k) + αₖ r^(k).',
        hu: 'A frissítés a maradék irányában mozog: p^(k+1) = p^(k) + αₖ r^(k).',
      },
    },
    {
      id: 'q-linsys-5',
      prompt: {
        en: 'How is the step size αₖ calculated?',
        hu: 'Hogyan számoljuk az αₖ lépésközt?',
      },
      options: [
        { en: 'αₖ = (A r^(k))ᵀ r^(k) / ( (r^(k))ᵀ r^(k) )', hu: 'αₖ = (A r^(k))ᵀ r^(k) / ( (r^(k))ᵀ r^(k) )' },
        { en: 'αₖ = (r^(k))ᵀ A r^(k) / ( (r^(k))ᵀ r^(k) )', hu: 'αₖ = (r^(k))ᵀ A r^(k) / ( (r^(k))ᵀ r^(k) )' },
        { en: 'αₖ = (r^(k))ᵀ r^(k) / ( (r^(k))ᵀ A r^(k) )', hu: 'αₖ = (r^(k))ᵀ r^(k) / ( (r^(k))ᵀ A r^(k) )' },
        { en: 'αₖ = 1 / ‖r^(k)‖', hu: 'αₖ = 1 / ‖r^(k)‖' },
      ],
      answer: 2,
      explanation: {
        en: 'Exact line search along the residual gives αₖ = (rᵀr) / (rᵀA r).',
        hu: 'A maradék menti pontos vonalmenti keresés αₖ = (rᵀr) / (rᵀA r)-t ad.',
      },
    },
  ],

  // 8.6 Newton's Method for Minimization
  newton: [
    {
      id: 'q-newton-1',
      prompt: {
        en: "What is the benefit of Newton's method if f''(p) is positive definite?",
        hu: "Mi a Newton-módszer előnye, ha f''(p) pozitív definit?",
      },
      options: [
        { en: 'The method diverges', hu: 'A módszer divergál' },
        { en: 'The method converges quadratically', hu: 'A módszer kvadratikusan konvergál' },
        { en: 'The Hessian can be ignored', hu: 'A Hesse-mátrix figyelmen kívül hagyható' },
        { en: 'The gradient becomes constant', hu: 'A gradiens állandóvá válik' },
      ],
      answer: 1,
      explanation: {
        en: 'Near a minimizer with positive-definite Hessian, Newton converges quadratically.',
        hu: 'Egy pozitív definit Hesse-mátrixú minimum közelében a Newton kvadratikusan konvergál.',
      },
    },
    {
      id: 'q-newton-2',
      prompt: {
        en: "What type of function is well-suited for Newton's method?",
        hu: 'Milyen típusú függvény alkalmas jól a Newton-módszerhez?',
      },
      options: [
        { en: 'Piecewise constant', hu: 'Szakaszonként állandó' },
        { en: 'Twice continuously differentiable', hu: 'Kétszer folytonosan differenciálható' },
        { en: 'Linear', hu: 'Lineáris' },
        { en: 'Discontinuous', hu: 'Szakadásos' },
      ],
      answer: 1,
      explanation: {
        en: "Newton's method needs gradient and Hessian, hence f must be twice continuously differentiable.",
        hu: 'A Newton-módszernek gradiens és Hesse-mátrix kell, ezért f-nek kétszer folytonosan differenciálhatónak kell lennie.',
      },
    },
    {
      id: 'q-newton-3',
      prompt: {
        en: 'Why must the Hessian be positive definite for minimization?',
        hu: 'Miért kell a Hesse-mátrixnak pozitív definitnek lennie a minimalizáláshoz?',
      },
      options: [
        { en: 'To ensure a maximum is found', hu: 'Hogy maximumot találjunk' },
        { en: 'To invert the gradient', hu: 'A gradiens invertálásához' },
        { en: 'To guarantee no solution', hu: 'Hogy ne legyen megoldás' },
        { en: 'To ensure convergence', hu: 'A konvergencia biztosításához' },
      ],
      answer: 3,
      explanation: {
        en: 'A positive-definite Hessian guarantees a descent direction and convergence to a minimum.',
        hu: 'A pozitív definit Hesse-mátrix garantál egy csökkenő irányt és a minimumhoz való konvergenciát.',
      },
    },
    {
      id: 'q-newton-4',
      prompt: {
        en: "What is the main idea of Newton's method for minimization?",
        hu: 'Mi a Newton-módszer fő gondolata a minimalizálásban?',
      },
      options: [
        { en: 'Use the midpoint rule to locate the minimum', hu: 'A középponti szabály használata a minimum megtalálására' },
        { en: 'Approximate the function using a linear polynomial', hu: 'A függvény közelítése lineáris polinommal' },
        { en: 'Estimate the gradient using finite differences', hu: 'A gradiens becslése véges differenciákkal' },
        { en: 'Use the second-order Taylor polynomial for optimization', hu: 'A másodrendű Taylor-polinom használata az optimalizáláshoz' },
      ],
      answer: 3,
      explanation: {
        en: 'Newton minimizes the local second-order Taylor model of f at each step.',
        hu: 'A Newton minden lépésben f lokális másodrendű Taylor-modelljét minimalizálja.',
      },
    },
    {
      id: 'q-newton-5',
      prompt: {
        en: "What is the update formula in Newton's method for minimization?",
        hu: 'Mi a frissítési képlet a minimalizálásra szolgáló Newton-módszerben?',
      },
      options: [
        { en: "xₖ₊₁ = xₖ − f'(xₖ)/f''(xₖ)", hu: "xₖ₊₁ = xₖ − f'(xₖ)/f''(xₖ)" },
        { en: "xₖ₊₁ = xₖ − f'(xₖ)", hu: "xₖ₊₁ = xₖ − f'(xₖ)" },
        { en: "xₖ₊₁ = xₖ − (f''(xₖ))⁻¹ f'(xₖ)", hu: "xₖ₊₁ = xₖ − (f''(xₖ))⁻¹ f'(xₖ)" },
        { en: "xₖ₊₁ = xₖ + αₖ f'(xₖ)", hu: "xₖ₊₁ = xₖ + αₖ f'(xₖ)" },
      ],
      answer: 2,
      explanation: {
        en: 'The multivariate Newton step is xₖ₊₁ = xₖ − H⁻¹ ∇f = xₖ − (f″(xₖ))⁻¹ f′(xₖ).',
        hu: 'A többváltozós Newton-lépés xₖ₊₁ = xₖ − H⁻¹ ∇f = xₖ − (f″(xₖ))⁻¹ f′(xₖ).',
      },
    },
  ],

  // 8.7 Quasi-Newton Method for Minimization
  quasinewton: [
    {
      id: 'q-quasinewton-1',
      prompt: {
        en: 'What is the Broyden update used for in quasi-Newton methods?',
        hu: 'Mire használjuk a Broyden-frissítést a kvázi-Newton módszerekben?',
      },
      options: [
        { en: 'To update the approximate Hessian', hu: 'A közelítő Hesse-mátrix frissítésére' },
        { en: 'To estimate the gradient', hu: 'A gradiens becslésére' },
        { en: 'To normalize the gradient', hu: 'A gradiens normálására' },
        { en: 'To solve linear systems', hu: 'Lineáris rendszerek megoldására' },
      ],
      answer: 0,
      explanation: {
        en: 'Quasi-Newton updates (such as Broyden) refine the approximate Hessian using gradient differences.',
        hu: 'A kvázi-Newton frissítések (mint a Broyden) gradienskülönbségekkel finomítják a közelítő Hesse-mátrixot.',
      },
    },
    {
      id: 'q-quasinewton-2',
      prompt: {
        en: 'Which function is used to approximate the objective in quasi-Newton methods?',
        hu: 'Milyen függvénnyel közelítjük a célfüggvényt a kvázi-Newton módszerekben?',
      },
      options: [
        { en: 'Linear function', hu: 'Lineáris függvénnyel' },
        { en: 'Quadratic function using approximate gradient and Hessian', hu: 'Kvadratikus függvénnyel, közelítő gradienssel és Hesse-mátrixszal' },
        { en: 'Exponential approximation', hu: 'Exponenciális közelítéssel' },
        { en: 'First-order Taylor polynomial', hu: 'Elsőrendű Taylor-polinommal' },
      ],
      answer: 1,
      explanation: {
        en: 'Quasi-Newton methods build a local quadratic model with an approximate Hessian.',
        hu: 'A kvázi-Newton módszerek lokális kvadratikus modellt építenek közelítő Hesse-mátrixszal.',
      },
    },
    {
      id: 'q-quasinewton-3',
      prompt: {
        en: 'What is a limitation of the Broyden update?',
        hu: 'Mi a Broyden-frissítés egyik korlátja?',
      },
      options: [
        { en: 'It is only for linear problems', hu: 'Csak lineáris feladatokra való' },
        { en: 'It does not converge', hu: 'Nem konvergál' },
        { en: 'It does not preserve symmetry', hu: 'Nem őrzi meg a szimmetriát' },
        { en: 'It requires the exact Hessian', hu: 'A pontos Hesse-mátrixot igényli' },
      ],
      answer: 2,
      explanation: {
        en: "Broyden's general update does not keep the Hessian approximation symmetric (motivating PSB/BFGS).",
        hu: 'A Broyden általános frissítése nem tartja szimmetrikusan a Hesse-közelítést (ez motiválja a PSB/BFGS-t).',
      },
    },
    {
      id: 'q-quasinewton-4',
      prompt: {
        en: 'What type of convergence can be expected from the PSB update method?',
        hu: 'Milyen konvergencia várható a PSB-frissítési módszertől?',
      },
      options: [
        { en: 'Quadratic', hu: 'Kvadratikus' },
        { en: 'Superlinear', hu: 'Szuperlineáris' },
        { en: 'Linear', hu: 'Lineáris' },
        { en: 'No convergence', hu: 'Nincs konvergencia' },
      ],
      answer: 1,
      explanation: {
        en: 'Quasi-Newton methods such as PSB attain superlinear convergence.',
        hu: 'A kvázi-Newton módszerek, mint a PSB, szuperlineáris konvergenciát érnek el.',
      },
    },
    {
      id: 'q-quasinewton-5',
      prompt: {
        en: 'Which form ensures that the updated matrix remains positive definite?',
        hu: 'Melyik alak biztosítja, hogy a frissített mátrix pozitív definit maradjon?',
      },
      options: [
        { en: 'Identity approximation', hu: 'Egységmátrix-közelítés' },
        { en: 'Cholesky form A = L Lᵀ', hu: 'Cholesky-alak A = L Lᵀ' },
        { en: 'Diagonal form', hu: 'Diagonális alak' },
        { en: 'General symmetric form', hu: 'Általános szimmetrikus alak' },
      ],
      answer: 1,
      explanation: {
        en: 'Maintaining the factor in Cholesky form A = L Lᵀ keeps the approximation positive definite.',
        hu: 'A faktor Cholesky-alakban (A = L Lᵀ) tartása megőrzi a közelítés pozitív definitségét.',
      },
    },
  ],
};

export function getQuiz(sectionId: string): QuizQuestion[] {
  return QUIZ[sectionId] ?? [];
}

export default getQuiz;
