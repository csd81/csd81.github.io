import type { QuizQuestion } from '../../../shared/ui/Quiz';

/**
 * Multiple-choice questions for Chapter 10 (Differential Equations),
 * keyed by section id. Parsed from quiz.md §10.1–10.5. Correct answers
 * (0-based index) determined by numerical-analysis knowledge.
 *
 * Section ids: intro (no questions), 10.1 .. 10.5.
 * Bilingual: formula-only options are identical in both languages.
 */
const QUIZ: Record<string, QuizQuestion[]> = {
  // 10.1 Review of Differential Equations
  '10.1': [
    {
      id: 'q-10-1-1',
      prompt: {
        en: 'What is the role of y₀ in the initial value problem?',
        hu: 'Mi a y₀ szerepe a kezdetiérték-feladatban?',
      },
      options: [
        { en: "It's a parameter of f", hu: 'Az f egy paramétere' },
        { en: "It's the target value to reach", hu: 'Az elérendő célérték' },
        { en: "It's a constant in the differential equation", hu: 'Egy konstans a differenciálegyenletben' },
        { en: "It's the initial value of the solution", hu: 'A megoldás kezdőértéke' },
      ],
      answer: 3,
      explanation: {
        en: 'y₀ = y(t₀) prescribes the value of the solution at the initial time.',
        hu: 'y₀ = y(t₀) előírja a megoldás értékét a kezdeti időpontban.',
      },
    },
    {
      id: 'q-10-1-2',
      prompt: {
        en: 'If f is not Lipschitz continuous, what can happen to the solution of the IVP?',
        hu: 'Ha f nem Lipschitz-folytonos, mi történhet a kezdetiérték-feladat megoldásával?',
      },
      options: [
        { en: 'The solution oscillates', hu: 'A megoldás oszcillál' },
        { en: 'No solution exists', hu: 'Nincs megoldás' },
        { en: 'Multiple solutions may exist', hu: 'Több megoldás is létezhet' },
        { en: 'The solution becomes infinite', hu: 'A megoldás végtelenné válik' },
      ],
      answer: 2,
      explanation: {
        en: 'Without Lipschitz continuity uniqueness can fail, so multiple solutions may exist.',
        hu: 'Lipschitz-folytonosság nélkül az egyértelműség sérülhet, így több megoldás is létezhet.',
      },
    },
    {
      id: 'q-10-1-3',
      prompt: {
        en: 'In the IVP y′ = f(t, y), what does y(t₀) = y₀ specify?',
        hu: 'Az y′ = f(t, y) kezdetiérték-feladatban mit ad meg y(t₀) = y₀?',
      },
      options: [
        { en: 'The range of the solution', hu: 'A megoldás értékkészletét' },
        { en: 'The value of the solution at the initial time', hu: 'A megoldás értékét a kezdeti időpontban' },
        { en: 'The function domain', hu: 'A függvény értelmezési tartományát' },
        { en: 'The derivative of the solution', hu: 'A megoldás deriváltját' },
      ],
      answer: 1,
      explanation: {
        en: 'It fixes the value of y at the starting time t₀.',
        hu: 'Rögzíti y értékét a t₀ kezdeti időpontban.',
      },
    },
    {
      id: 'q-10-1-4',
      prompt: {
        en: 'What is required of f for the solution of an IVP to exist and be unique?',
        hu: 'Mit követelünk meg f-től ahhoz, hogy a kezdetiérték-feladat megoldása létezzen és egyértelmű legyen?',
      },
      options: [
        { en: 'Continuity in both variables', hu: 'Folytonosságot mindkét változóban' },
        { en: 'Differentiability in both variables', hu: 'Differenciálhatóságot mindkét változóban' },
        { en: 'Lipschitz continuity in the first variable', hu: 'Lipschitz-folytonosságot az első változóban' },
        { en: 'Continuity and Lipschitz continuity in the second variable', hu: 'Folytonosságot és Lipschitz-folytonosságot a második változóban' },
      ],
      answer: 3,
      explanation: {
        en: 'Picard–Lindelöf: f continuous and Lipschitz in y guarantees existence and uniqueness.',
        hu: 'Picard–Lindelöf: f folytonossága és y-ban Lipschitz-folytonossága garantálja a létezést és egyértelműséget.',
      },
    },
    {
      id: 'q-10-1-5',
      prompt: {
        en: 'What is the general form of an initial value problem (IVP)?',
        hu: 'Mi egy kezdetiérték-feladat (IVP) általános alakja?',
      },
      options: [
        { en: 'y = f(t, y), y′(t₀) = y₀', hu: 'y = f(t, y), y′(t₀) = y₀' },
        { en: 'y′ = f(y, t), t ∈ [0, T]', hu: 'y′ = f(y, t), t ∈ [0, T]' },
        { en: 'y′ = f(t, y), t ∈ [t₀, T], y(t₀) = y₀', hu: 'y′ = f(t, y), t ∈ [t₀, T], y(t₀) = y₀' },
        { en: 'y″ = f(t, y), y(t₀) = y₀', hu: 'y″ = f(t, y), y(t₀) = y₀' },
      ],
      answer: 2,
      explanation: {
        en: 'A first-order IVP is y′ = f(t, y) on [t₀, T] with y(t₀) = y₀.',
        hu: 'Egy elsőrendű IVP: y′ = f(t, y) a [t₀, T]-n, y(t₀) = y₀ mellett.',
      },
    },
  ],

  // 10.2 Euler's Method
  '10.2': [
    {
      id: 'q-10-2-1',
      prompt: {
        en: "What is the main goal of Euler's method?",
        hu: 'Mi az Euler-módszer fő célja?',
      },
      options: [
        { en: 'To calculate the Lipschitz constant', hu: 'A Lipschitz-konstans kiszámítása' },
        { en: 'To find the symbolic form of the solution', hu: 'A megoldás szimbolikus alakjának megtalálása' },
        { en: 'To verify uniqueness', hu: 'Az egyértelműség ellenőrzése' },
        { en: 'To approximate the solution at mesh points', hu: 'A megoldás közelítése a rácspontokban' },
      ],
      answer: 3,
      explanation: {
        en: 'Euler steps produce approximate values of the solution at the mesh points tᵢ.',
        hu: 'Az Euler-lépések a megoldás közelítő értékeit adják a tᵢ rácspontokban.',
      },
    },
    {
      id: 'q-10-2-2',
      prompt: {
        en: 'Which numerical method uses the update rule z_{i+1} = zᵢ + h·f(tᵢ, zᵢ)?',
        hu: 'Melyik numerikus módszer használja a z_{i+1} = zᵢ + h·f(tᵢ, zᵢ) frissítési szabályt?',
      },
      options: [
        { en: 'Taylor method', hu: 'Taylor-módszer' },
        { en: 'Runge–Kutta method', hu: 'Runge–Kutta-módszer' },
        { en: "Euler's method", hu: 'Euler-módszer' },
        { en: 'Trapezoidal method', hu: 'Trapéz-módszer' },
      ],
      answer: 2,
      explanation: {
        en: 'This is precisely the explicit Euler update.',
        hu: 'Ez pontosan az explicit Euler-frissítés.',
      },
    },
    {
      id: 'q-10-2-3',
      prompt: {
        en: "Which best describes the local truncation error in Euler's method?",
        hu: 'Melyik írja le legjobban az Euler-módszer lokális csonkítási hibáját?',
      },
      options: [
        { en: 'Depends on y″(t) and is proportional to h', hu: 'y″(t)-től függ és h-val arányos' },
        { en: 'Inversely proportional to h', hu: 'Fordítottan arányos h-val' },
        { en: 'Depends on y(t) only', hu: 'Csak y(t)-től függ' },
        { en: 'Constant across all steps', hu: 'Minden lépésben állandó' },
      ],
      answer: 0,
      explanation: {
        en: 'The local truncation error is (h/2)·y″(ξ), proportional to h and the second derivative.',
        hu: 'A lokális csonkítási hiba (h/2)·y″(ξ), arányos h-val és a második deriválttal.',
      },
    },
    {
      id: 'q-10-2-4',
      prompt: {
        en: "What is the general formula for Euler's method?",
        hu: 'Mi az Euler-módszer általános képlete?',
      },
      options: [
        { en: 'z_{i+1} = zᵢ + h²·f(tᵢ, zᵢ)', hu: 'z_{i+1} = zᵢ + h²·f(tᵢ, zᵢ)' },
        { en: 'z_{i+1} = zᵢ + f(tᵢ, zᵢ)', hu: 'z_{i+1} = zᵢ + f(tᵢ, zᵢ)' },
        { en: 'z_{i+1} = zᵢ + h·f(tᵢ, zᵢ)', hu: 'z_{i+1} = zᵢ + h·f(tᵢ, zᵢ)' },
        { en: 'z_{i+1} = zᵢ − h·f(tᵢ, zᵢ)', hu: 'z_{i+1} = zᵢ − h·f(tᵢ, zᵢ)' },
      ],
      answer: 2,
      explanation: {
        en: 'Explicit Euler: z_{i+1} = zᵢ + h·f(tᵢ, zᵢ).',
        hu: 'Explicit Euler: z_{i+1} = zᵢ + h·f(tᵢ, zᵢ).',
      },
    },
    {
      id: 'q-10-2-5',
      prompt: {
        en: "In Euler's method, the global error is approximately proportional to:",
        hu: 'Az Euler-módszerben a globális hiba közelítőleg arányos:',
      },
      options: [
        { en: 'h', hu: 'h' },
        { en: 'h²', hu: 'h²' },
        { en: 'log(h)', hu: 'log(h)' },
        { en: '√h', hu: '√h' },
      ],
      answer: 0,
      explanation: {
        en: "Euler's method is first order: the global error is O(h).",
        hu: 'Az Euler-módszer elsőrendű: a globális hiba O(h).',
      },
    },
  ],

  // 10.3 Effect of Rounding in Euler's Method
  '10.3': [
    {
      id: 'q-10-3-1',
      prompt: {
        en: "What does δ₀ represent in the analysis of rounding in Euler's method?",
        hu: 'Mit jelöl δ₀ az Euler-módszer kerekítési elemzésében?',
      },
      options: [
        { en: 'The exact initial value', hu: 'A pontos kezdőértéket' },
        { en: 'The derivative of the initial value', hu: 'A kezdőérték deriváltját' },
        { en: 'The total accumulated error', hu: 'A teljes felhalmozott hibát' },
        { en: 'The rounding error in the initial value', hu: 'A kezdőérték kerekítési hibáját' },
      ],
      answer: 3,
      explanation: {
        en: 'δ₀ is the rounding (representation) error in the initial value.',
        hu: 'δ₀ a kezdőérték kerekítési (ábrázolási) hibája.',
      },
    },
    {
      id: 'q-10-3-2',
      prompt: {
        en: "What is the best practice to minimize rounding error in Euler's method?",
        hu: 'Mi a legjobb gyakorlat az Euler-módszer kerekítési hibájának minimalizálására?',
      },
      options: [
        { en: 'Use arbitrary precision arithmetic', hu: 'Tetszőleges pontosságú aritmetika használata' },
        { en: 'Ignore rounding effects', hu: 'A kerekítési hatások figyelmen kívül hagyása' },
        { en: 'Balance h so it is not too small relative to δ', hu: 'h kiegyensúlyozása, hogy ne legyen túl kicsi δ-hoz képest' },
        { en: 'Use very large h', hu: 'Nagyon nagy h használata' },
      ],
      answer: 2,
      explanation: {
        en: 'The error bound h·M₂/2 + δ/h has an optimum; h must not be too small relative to δ.',
        hu: 'A h·M₂/2 + δ/h hibakorlátnak van optimuma; h nem lehet túl kicsi δ-hoz képest.',
      },
    },
    {
      id: 'q-10-3-3',
      prompt: {
        en: 'What happens to the expression h·M₂/2 + δ/h as h → 0?',
        hu: 'Mi történik a h·M₂/2 + δ/h kifejezéssel, ha h → 0?',
      },
      options: [
        { en: 'It converges to zero', hu: 'Nullához konvergál' },
        { en: 'It remains constant', hu: 'Állandó marad' },
        { en: 'It diverges to infinity', hu: 'A végtelenhez divergál' },
        { en: 'It converges to M₂', hu: 'M₂-höz konvergál' },
      ],
      answer: 2,
      explanation: {
        en: 'The δ/h term blows up as h → 0, so the bound diverges to infinity.',
        hu: 'A δ/h tag felrobban, ahogy h → 0, így a korlát a végtelenhez divergál.',
      },
    },
    {
      id: 'q-10-3-4',
      prompt: {
        en: 'What symbol denotes the impact of rounding errors in each Euler step in the error formula?',
        hu: 'Melyik szimbólum jelöli a kerekítési hibák hatását minden Euler-lépésben a hibaképletben?',
      },
      options: [
        { en: 'τᵢ', hu: 'τᵢ' },
        { en: 'σᵢ', hu: 'σᵢ' },
        { en: 'εᵢ', hu: 'εᵢ' },
        { en: 'δᵢ', hu: 'δᵢ' },
      ],
      answer: 3,
      explanation: {
        en: 'δᵢ denotes the per-step rounding error (τᵢ is reserved for truncation error).',
        hu: 'δᵢ a lépésenkénti kerekítési hibát jelöli (τᵢ a csonkítási hibára van fenntartva).',
      },
    },
    {
      id: 'q-10-3-5',
      prompt: {
        en: 'What does the expression h·M₂/2 + δ/h indicate?',
        hu: 'Mit jelez a h·M₂/2 + δ/h kifejezés?',
      },
      options: [
        { en: 'The stability condition', hu: 'A stabilitási feltételt' },
        { en: 'The non-linear effect of rounding with respect to h', hu: 'A kerekítés nemlineáris hatását h-ra nézve' },
        { en: 'The estimated global error', hu: 'A becsült globális hibát' },
        { en: 'The machine precision limit', hu: 'A gépi pontosság határát' },
      ],
      answer: 2,
      explanation: {
        en: 'It is the total error bound (truncation + rounding) — the estimated global error.',
        hu: 'Ez a teljes hibakorlát (csonkítás + kerekítés) — a becsült globális hiba.',
      },
    },
  ],

  // 10.4 Taylor's Method
  '10.4': [
    {
      id: 'q-10-4-1',
      prompt: {
        en: "What is the general structure of F(t, z; h) in Taylor's method of order α?",
        hu: 'Mi az F(t, z; h) általános szerkezete az α-rendű Taylor-módszerben?',
      },
      options: [
        { en: 'f(t, z)', hu: 'f(t, z)' },
        { en: 'f(t, z) + f(t, z)²', hu: 'f(t, z) + f(t, z)²' },
        { en: "f(t, z) − ½ f′(t, z)", hu: "f(t, z) − ½ f′(t, z)" },
        { en: "f(t, z) + (h/2!) f^(1)(t,z) + ⋯ + (h^(α−1)/α!) f^(α−1)(t,z)", hu: "f(t, z) + (h/2!) f^(1)(t,z) + ⋯ + (h^(α−1)/α!) f^(α−1)(t,z)" },
      ],
      answer: 3,
      explanation: {
        en: 'Taylor increment uses successive total derivatives of f weighted by powers of h / factorials.',
        hu: 'A Taylor-növekmény f egymást követő teljes deriváltjait használja h hatványaival / faktoriálisokkal súlyozva.',
      },
    },
    {
      id: 'q-10-4-2',
      prompt: {
        en: "How is the local truncation error τ_{i+1} defined in Taylor's method?",
        hu: 'Hogyan definiáljuk a τ_{i+1} lokális csonkítási hibát a Taylor-módszerben?',
      },
      options: [
        { en: 'τ_{i+1} = f(tᵢ, y(tᵢ)) − f(t_{i+1}, z_{i+1})', hu: 'τ_{i+1} = f(tᵢ, y(tᵢ)) − f(t_{i+1}, z_{i+1})' },
        { en: 'τ_{i+1} = y(t_{i+1}) − z_{i+1}', hu: 'τ_{i+1} = y(t_{i+1}) − z_{i+1}' },
        { en: 'τ_{i+1} = ( y(t_{i+1}) − y(tᵢ) ) / h − F(tᵢ, y(tᵢ); h)', hu: 'τ_{i+1} = ( y(t_{i+1}) − y(tᵢ) ) / h − F(tᵢ, y(tᵢ); h)' },
        { en: 'τ_{i+1} = h( f(tᵢ, zᵢ) − y(tᵢ) )', hu: 'τ_{i+1} = h( f(tᵢ, zᵢ) − y(tᵢ) )' },
      ],
      answer: 2,
      explanation: {
        en: 'The local truncation error compares the exact difference quotient with the increment function F.',
        hu: 'A lokális csonkítási hiba a pontos differenciahányadost veti össze az F növekményfüggvénnyel.',
      },
    },
    {
      id: 'q-10-4-3',
      prompt: {
        en: "What is the purpose of Taylor's method in solving IVPs?",
        hu: 'Mi a Taylor-módszer célja a kezdetiérték-feladatok megoldásában?',
      },
      options: [
        { en: 'To convert PDEs into ODEs', hu: 'PDE-k ODE-vé alakítása' },
        { en: 'To visualize phase space', hu: 'A fázistér megjelenítése' },
        { en: 'To compute exact symbolic solutions', hu: 'Pontos szimbolikus megoldások számítása' },
        { en: 'To improve accuracy using derivatives', hu: 'A pontosság javítása deriváltak felhasználásával' },
      ],
      answer: 3,
      explanation: {
        en: 'Including higher derivatives raises the order of accuracy beyond Euler.',
        hu: 'A magasabb deriváltak bevonása az Euleren túl emeli a pontosság rendjét.',
      },
    },
    {
      id: 'q-10-4-4',
      prompt: {
        en: 'What is the order of accuracy of a Taylor method that includes up to the second derivative?',
        hu: 'Mi a pontossági rendje egy olyan Taylor-módszernek, amely a második deriváltig terjed?',
      },
      options: [
        { en: 'Order 1', hu: '1. rend' },
        { en: 'Order 3', hu: '3. rend' },
        { en: 'Order 4', hu: '4. rend' },
        { en: 'Order 2', hu: '2. rend' },
      ],
      answer: 3,
      explanation: {
        en: 'Including the term up to the second derivative gives a second-order method.',
        hu: 'A második deriváltig terjedő tag bevonása másodrendű módszert ad.',
      },
    },
    {
      id: 'q-10-4-5',
      prompt: {
        en: "What effect does increasing the order α in Taylor's method have on accuracy?",
        hu: 'Milyen hatással van a pontosságra az α rend növelése a Taylor-módszerben?',
      },
      options: [
        { en: 'Increases accuracy', hu: 'Növeli a pontosságot' },
        { en: 'Reduces computation time', hu: 'Csökkenti a számítási időt' },
        { en: 'Decreases accuracy', hu: 'Csökkenti a pontosságot' },
        { en: 'No effect', hu: 'Nincs hatása' },
      ],
      answer: 0,
      explanation: {
        en: 'Higher order reduces truncation error, increasing accuracy (at higher cost).',
        hu: 'A magasabb rend csökkenti a csonkítási hibát, növelve a pontosságot (nagyobb költséggel).',
      },
    },
  ],

  // 10.5 Runge–Kutta Method
  '10.5': [
    {
      id: 'q-10-5-1',
      prompt: {
        en: 'Which method requires four function evaluations per step?',
        hu: 'Melyik módszer igényel négy függvénykiértékelést lépésenként?',
      },
      options: [
        { en: 'Classical Runge–Kutta method', hu: 'Klasszikus Runge–Kutta-módszer' },
        { en: 'Second-order Taylor method', hu: 'Másodrendű Taylor-módszer' },
        { en: "Euler's method", hu: 'Euler-módszer' },
        { en: 'Modified Euler method', hu: 'Módosított Euler-módszer' },
      ],
      answer: 0,
      explanation: {
        en: 'Classical RK4 uses four stage evaluations w₁..w₄ per step.',
        hu: 'A klasszikus RK4 négy fokozat-kiértékelést w₁..w₄ használ lépésenként.',
      },
    },
    {
      id: 'q-10-5-2',
      prompt: {
        en: 'What is the goal of Runge–Kutta methods?',
        hu: 'Mi a Runge–Kutta-módszerek célja?',
      },
      options: [
        { en: 'To solve algebraic equations', hu: 'Algebrai egyenletek megoldása' },
        { en: 'To approximate ODE solutions with high accuracy', hu: 'ODE-megoldások nagy pontosságú közelítése' },
        { en: 'To visualize phase space', hu: 'A fázistér megjelenítése' },
        { en: 'To compute exact analytical solutions', hu: 'Pontos analitikus megoldások számítása' },
      ],
      answer: 1,
      explanation: {
        en: 'RK methods give high-accuracy numerical approximations of ODE solutions.',
        hu: 'Az RK-módszerek nagy pontosságú numerikus közelítéseket adnak az ODE-megoldásokra.',
      },
    },
    {
      id: 'q-10-5-3',
      prompt: {
        en: "What is a key advantage of Runge–Kutta methods over Taylor's method?",
        hu: 'Mi a Runge–Kutta-módszerek egyik fő előnye a Taylor-módszerrel szemben?',
      },
      options: [
        { en: 'High accuracy without computing higher derivatives', hu: 'Nagy pontosság magasabb deriváltak számítása nélkül' },
        { en: 'Simpler formulas', hu: 'Egyszerűbb képletek' },
        { en: 'Reduces memory usage', hu: 'Csökkenti a memóriahasználatot' },
        { en: 'Requires only initial conditions', hu: 'Csak kezdeti feltételeket igényel' },
      ],
      answer: 0,
      explanation: {
        en: 'RK matches a high-order Taylor expansion using only evaluations of f, avoiding higher derivatives.',
        hu: 'Az RK egy magas rendű Taylor-kifejtést illeszt csak f kiértékeléseivel, elkerülve a magasabb deriváltakat.',
      },
    },
    {
      id: 'q-10-5-4',
      prompt: {
        en: 'In the classical RK4 method, how is w₂ defined?',
        hu: 'A klasszikus RK4-módszerben hogyan definiáljuk w₂-t?',
      },
      options: [
        { en: 'f(tᵢ + h/2, zᵢ + (h/2) w₁)', hu: 'f(tᵢ + h/2, zᵢ + (h/2) w₁)' },
        { en: 'f(tᵢ + h, zᵢ + h w₁)', hu: 'f(tᵢ + h, zᵢ + h w₁)' },
        { en: 'f(tᵢ, zᵢ)', hu: 'f(tᵢ, zᵢ)' },
        { en: 'f(tᵢ + h/2, zᵢ + h w₃)', hu: 'f(tᵢ + h/2, zᵢ + h w₃)' },
      ],
      answer: 0,
      explanation: {
        en: 'The second RK4 stage evaluates f at the midpoint using w₁: f(tᵢ + h/2, zᵢ + (h/2)w₁).',
        hu: 'A második RK4-fokozat a felezőpontban értékeli ki f-et w₁ felhasználásával: f(tᵢ + h/2, zᵢ + (h/2)w₁).',
      },
    },
    {
      id: 'q-10-5-5',
      prompt: {
        en: "Which of the following is Heun's method?",
        hu: 'Az alábbiak közül melyik a Heun-módszer?',
      },
      options: [
        { en: 'z_{i+1} = zᵢ + (h/2)( f(tᵢ,zᵢ) + f(t_{i+1}, zᵢ + h f(tᵢ,zᵢ)) )', hu: 'z_{i+1} = zᵢ + (h/2)( f(tᵢ,zᵢ) + f(t_{i+1}, zᵢ + h f(tᵢ,zᵢ)) )' },
        { en: 'z_{i+1} = zᵢ + (h/3)( f(tᵢ,zᵢ) + 2 f(tᵢ + h/3, zᵢ + (h/3) f(tᵢ,zᵢ)) )', hu: 'z_{i+1} = zᵢ + (h/3)( f(tᵢ,zᵢ) + 2 f(tᵢ + h/3, zᵢ + (h/3) f(tᵢ,zᵢ)) )' },
        { en: 'z_{i+1} = zᵢ + (h/4)( f(tᵢ,zᵢ) + 3 f(tᵢ + (2/3)h, zᵢ + (2/3)h f(tᵢ,zᵢ)) )', hu: 'z_{i+1} = zᵢ + (h/4)( f(tᵢ,zᵢ) + 3 f(tᵢ + (2/3)h, zᵢ + (2/3)h f(tᵢ,zᵢ)) )' },
        { en: 'z_{i+1} = zᵢ + h f(tᵢ + h/2, zᵢ + (h/2) f(tᵢ,zᵢ))', hu: 'z_{i+1} = zᵢ + h f(tᵢ + h/2, zᵢ + (h/2) f(tᵢ,zᵢ))' },
      ],
      answer: 0,
      explanation: {
        en: "Heun's method (improved Euler) averages the slopes at the endpoints with weight h/2.",
        hu: 'A Heun-módszer (javított Euler) a végpontok meredekségeit átlagolja h/2 súllyal.',
      },
    },
  ],
};

export function getQuiz(sectionId: string): QuizQuestion[] {
  return QUIZ[sectionId] ?? [];
}

export default getQuiz;
