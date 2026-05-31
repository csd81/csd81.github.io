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
 * Bilingual: math-only options are identical in both languages.
 */
const QUIZZES: Record<string, QuizQuestion[]> = {
  'fixed-point': [
    {
      id: 'q-fixed-point-1',
      prompt: {
        en: 'When is a fixed-point iteration said to be globally convergent?',
        hu: 'Mikor mondjuk, hogy egy fixpont-iteráció globálisan konvergens?',
      },
      options: [
        { en: 'When it diverges outside of $[a, b]$', hu: 'Amikor $[a, b]$-n kívül divergál' },
        { en: 'When $p_0$ is in a small neighborhood of $p$', hu: 'Amikor $p_0$ a $p$ egy kis környezetében van' },
        { en: 'When it converges for all initial values', hu: 'Amikor minden kezdőértékre konvergál' },
        { en: 'When it has a unique fixed point', hu: 'Amikor egyetlen fixpontja van' },
      ],
      answer: 2,
      explanation: {
        en: 'Global convergence means every admissible starting value produces a convergent sequence.',
        hu: 'A globális konvergencia azt jelenti, hogy minden megengedett kezdőérték konvergens sorozatot ad.',
      },
    },
    {
      id: 'q-fixed-point-2',
      prompt: {
        en: 'What kind of convergence does a contraction mapping $g:[a,b]\\to[a,b]$ ensure in a fixed-point iteration?',
        hu: 'Milyen konvergenciát biztosít egy $g:[a,b]\\to[a,b]$ kontrakció a fixpont-iterációban?',
      },
      options: [
        { en: 'Global convergence', hu: 'Globális konvergenciát' },
        { en: 'No convergence', hu: 'Semmilyen konvergenciát' },
        { en: 'Local divergence', hu: 'Lokális divergenciát' },
        { en: 'Periodic convergence', hu: 'Periodikus konvergenciát' },
      ],
      answer: 0,
      explanation: {
        en: 'The contraction principle guarantees convergence from every starting point, i.e. global convergence.',
        hu: 'A kontrakciós elv minden kezdőpontból garantálja a konvergenciát, azaz globális konvergenciát ad.',
      },
    },
    {
      id: 'q-fixed-point-3',
      prompt: {
        en: 'In fixed-point iteration $p_{k+1} = g(p_k)$, what is a necessary condition for convergence to a limit $p$?',
        hu: 'A $p_{k+1} = g(p_k)$ fixpont-iterációban mi a szükséges feltétele a $p$ határértékhez való konvergenciának?',
      },
      options: [
        { en: '$g$ must be discontinuous at $p$', hu: '$g$ legyen szakadásos $p$-ben' },
        { en: '$g(p) = p$', hu: '$g(p) = p$' },
        { en: '$p = 0$', hu: '$p = 0$' },
        { en: '$g(p_k) = p_k$ for all $k$', hu: '$g(p_k) = p_k$ minden $k$-ra' },
      ],
      answer: 1,
      explanation: {
        en: 'A limit of a continuous iteration must be a fixed point: g(p) = p.',
        hu: 'Egy folytonos iteráció határértéke szükségképpen fixpont: g(p) = p.',
      },
    },
    {
      id: 'q-fixed-point-4',
      prompt: {
        en: "If $|g'(p)| < 1$ at a fixed point $p$, what kind of convergence does the fixed-point iteration exhibit?",
        hu: "Ha $|g'(p)| < 1$ egy $p$ fixpontban, milyen konvergenciát mutat a fixpont-iteráció?",
      },
      options: [
        { en: 'Local convergence', hu: 'Lokális konvergenciát' },
        { en: 'Linear divergence', hu: 'Lineáris divergenciát' },
        { en: 'Global divergence', hu: 'Globális divergenciát' },
        { en: 'Superlinear convergence', hu: 'Szuperlineáris konvergenciát' },
      ],
      answer: 0,
      explanation: {
        en: "|g'(p)| < 1 makes p attracting, giving local convergence in a neighborhood of p.",
        hu: "A |g'(p)| < 1 vonzóvá teszi p-t, ami lokális konvergenciát ad p egy környezetében.",
      },
    },
    {
      id: 'q-fixed-point-5',
      prompt: {
        en: 'What does it mean for the iteration to be locally convergent?',
        hu: 'Mit jelent, hogy az iteráció lokálisan konvergens?',
      },
      options: [
        { en: 'It converges for initial values within a neighborhood of the fixed point', hu: 'A fixpont egy környezetén belüli kezdőértékekre konvergál' },
        { en: 'It converges only for rational initial values', hu: 'Csak racionális kezdőértékekre konvergál' },
        { en: 'It converges if $g(p) = 0$', hu: 'Akkor konvergál, ha $g(p) = 0$' },
        { en: 'It converges for all $p_0 \\in \\mathbb{R}$', hu: 'Minden $p_0 \\in \\mathbb{R}$-re konvergál' },
      ],
      answer: 0,
      explanation: {
        en: 'Local convergence guarantees convergence only when p_0 is close enough to p.',
        hu: 'A lokális konvergencia csak akkor garantál konvergenciát, ha p_0 elég közel van p-hez.',
      },
    },
  ],
  'stopping-criteria': [
    {
      id: 'q-stopping-criteria-1',
      prompt: {
        en: 'Why is using only $|f(p_k)| < \\varepsilon_3$ sometimes not reliable?',
        hu: 'Miért nem mindig megbízható, ha csak a $|f(p_k)| < \\varepsilon_3$ feltételt használjuk?',
      },
      options: [
        { en: 'It always guarantees convergence', hu: 'Mindig garantálja a konvergenciát' },
        { en: 'It is computationally expensive', hu: 'Számításigényes' },
        { en: 'It is equivalent to absolute error', hu: 'Egyenértékű az abszolút hibával' },
        { en: '$f(p_k)$ can be small even when $p_k$ is far from the root', hu: '$f(p_k)$ kicsi lehet akkor is, ha $p_k$ messze van a gyöktől' },
      ],
      answer: 3,
      explanation: {
        en: 'For flat functions f(p_k) can be tiny while p_k is still far from the actual root.',
        hu: 'Lapos függvényeknél f(p_k) parányi lehet, miközben p_k még messze van a valódi gyöktől.',
      },
    },
    {
      id: 'q-stopping-criteria-2',
      prompt: {
        en: 'Which condition is analogous to the relative error of approximation?',
        hu: 'Melyik feltétel analóg a közelítés relatív hibájával?',
      },
      options: [
        { en: '$|\\frac{f(p_k)}{p_k}| < \\varepsilon_3$', hu: '$|\\frac{f(p_k)}{p_k}| < \\varepsilon_3$' },
        { en: '$|p_k - p_{k-1}| < \\varepsilon_1$', hu: '$|p_k - p_{k-1}| < \\varepsilon_1$' },
        { en: '$|\\frac{p_k - p_{k-1}}{p_k}| < \\varepsilon_2$', hu: '$|\\frac{p_k - p_{k-1}}{p_k}| < \\varepsilon_2$' },
        { en: '$|f(p_k)| < \\varepsilon_3$', hu: '$|f(p_k)| < \\varepsilon_3$' },
      ],
      answer: 2,
      explanation: {
        en: 'Dividing the increment by p_k gives a relative-error style stopping test.',
        hu: 'A növekményt p_k-val osztva relatívhiba-jellegű leállási feltételt kapunk.',
      },
    },
    {
      id: 'q-stopping-criteria-3',
      prompt: {
        en: 'What is the main goal of stopping criteria in iterative methods?',
        hu: 'Mi a leállási feltételek fő célja az iteratív módszerekben?',
      },
      options: [
        { en: 'To initialize the method', hu: 'A módszer inicializálása' },
        { en: 'To determine when an approximation is good enough', hu: 'Annak eldöntése, mikor elég jó egy közelítés' },
        { en: 'To define the step size', hu: 'A lépésköz meghatározása' },
        { en: 'To ensure infinite iterations', hu: 'Végtelen iteráció biztosítása' },
      ],
      answer: 1,
      explanation: {
        en: 'Stopping criteria decide when the current iterate is accurate enough to stop.',
        hu: 'A leállási feltételek döntik el, mikor elég pontos az aktuális közelítés a leálláshoz.',
      },
    },
    {
      id: 'q-stopping-criteria-4',
      prompt: {
        en: 'What is the issue with using only the condition $|p_k - p_{k-1}| < \\varepsilon_1$?',
        hu: 'Mi a probléma, ha csak a $|p_k - p_{k-1}| < \\varepsilon_1$ feltételt használjuk?',
      },
      options: [
        { en: 'It can be satisfied by non-convergent sequences', hu: 'Nem konvergens sorozatok is teljesíthetik' },
        { en: 'It requires high precision input', hu: 'Nagy pontosságú bemenetet igényel' },
        { en: 'It leads to divergence', hu: 'Divergenciához vezet' },
        { en: 'It ensures exact roots', hu: 'Pontos gyököket biztosít' },
      ],
      answer: 0,
      explanation: {
        en: 'Slowly varying but non-convergent sequences (e.g. harmonic-like) can make successive terms close without converging.',
        hu: 'A lassan változó, de nem konvergens sorozatoknál (pl. harmonikus jellegű) az egymást követő tagok közel lehetnek anélkül, hogy konvergálnának.',
      },
    },
    {
      id: 'q-stopping-criteria-5',
      prompt: {
        en: 'What does the condition $|p_k - p_{k-1}| < \\varepsilon_1$ represent?',
        hu: 'Mit fejez ki a $|p_k - p_{k-1}| < \\varepsilon_1$ feltétel?',
      },
      options: [
        { en: 'Initial guess requirement', hu: 'Kezdőérték-követelmény' },
        { en: 'Functional tolerance', hu: 'Függvényértékre vonatkozó tűrés' },
        { en: 'Relative error condition', hu: 'Relatív hiba feltétel' },
        { en: 'Absolute error condition', hu: 'Abszolút hiba feltétel' },
      ],
      answer: 3,
      explanation: {
        en: 'The raw difference of successive iterates is an absolute-error type test.',
        hu: 'Az egymást követő közelítések nyers különbsége abszolúthiba-jellegű teszt.',
      },
    },
  ],
  bisection: [
    {
      id: 'q-bisection-1',
      prompt: {
        en: 'What is the behavior of the interval length $b_k - a_k$ after each iteration in the bisection method?',
        hu: 'Hogyan változik a $b_k - a_k$ intervallumhossz minden iteráció után a felezési módszerben?',
      },
      options: [
        { en: 'It increases by one', hu: 'Eggyel nő' },
        { en: 'It remains constant', hu: 'Állandó marad' },
        { en: 'It doubles', hu: 'Megduplázódik' },
        { en: 'It halves', hu: 'Megfeleződik' },
      ],
      answer: 3,
      explanation: {
        en: 'Each step replaces the bracket by one of its halves, so the length halves.',
        hu: 'Minden lépés az intervallum egyik felére cseréli azt, így a hossz feleződik.',
      },
    },
    {
      id: 'q-bisection-2',
      prompt: {
        en: 'What happens if $f(a_k) > 0$ and $f(p_k) < 0$ in a step of the bisection method?',
        hu: 'Mi történik, ha $f(a_k) > 0$ és $f(p_k) < 0$ a felezési módszer egy lépésében?',
      },
      options: [
        { en: 'Next interval becomes $[a_k, p_k]$', hu: 'A következő intervallum $[a_k, p_k]$ lesz' },
        { en: 'Interval is discarded', hu: 'Az intervallumot elvetjük' },
        { en: 'Next interval becomes $[p_k, b_k]$', hu: 'A következő intervallum $[p_k, b_k]$ lesz' },
        { en: 'The root is at $a_k$', hu: 'A gyök $a_k$-ban van' },
      ],
      answer: 0,
      explanation: {
        en: 'The sign change lies between a_k and p_k, so the new bracket is [a_k, p_k].',
        hu: 'Az előjelváltás a_k és p_k között van, így az új intervallum [a_k, p_k].',
      },
    },
    {
      id: 'q-bisection-3',
      prompt: {
        en: 'What happens if $f(p_k) = 0$ during the bisection method?',
        hu: 'Mi történik, ha $f(p_k) = 0$ a felezési módszer során?',
      },
      options: [
        { en: '$p_k$ is accepted as the root', hu: '$p_k$-t elfogadjuk gyöknek' },
        { en: 'The method stops working', hu: 'A módszer leáll működni' },
        { en: 'The interval is unchanged', hu: 'Az intervallum változatlan' },
        { en: 'A new midpoint is computed', hu: 'Új felezőpontot számolunk' },
      ],
      answer: 0,
      explanation: {
        en: 'A zero value means the midpoint is exactly a root, so the method returns p_k.',
        hu: 'A nulla érték azt jelenti, hogy a felezőpont pontosan gyök, így a módszer p_k-t adja vissza.',
      },
    },
    {
      id: 'q-bisection-4',
      prompt: {
        en: 'Which theorem guarantees the existence of a root in $[a, b]$ if $f$ is continuous and $f(a)f(b) < 0$?',
        hu: 'Melyik tétel garantálja gyök létezését $[a, b]$-ben, ha $f$ folytonos és $f(a)f(b) < 0$?',
      },
      options: [
        { en: 'Mean Value Theorem', hu: 'Középértéktétel' },
        { en: 'Intermediate Value Theorem', hu: 'Bolzano-tétel (közbülső érték tétele)' },
        { en: 'Fundamental Theorem of Calculus', hu: 'A differenciál- és integrálszámítás alaptétele' },
        { en: "Taylor's Theorem", hu: 'Taylor-tétel' },
      ],
      answer: 1,
      explanation: {
        en: 'The Intermediate Value Theorem (Bolzano) guarantees a root where the sign changes.',
        hu: 'A közbülső érték tétele (Bolzano) garantál gyököt ott, ahol az előjel megváltozik.',
      },
    },
    {
      id: 'q-bisection-5',
      prompt: {
        en: 'Which of the following conditions cannot be used as a possible stopping criterion in the bisection method?',
        hu: 'Az alábbi feltételek közül melyik nem használható lehetséges leállási feltételként a felezési módszerben?',
      },
      options: [
        { en: '$|p_k| < \\varepsilon$', hu: '$|p_k| < \\varepsilon$' },
        { en: '$|a_k - b_k| < \\varepsilon$', hu: '$|a_k - b_k| < \\varepsilon$' },
        { en: '$|f(p_k)| < \\varepsilon$', hu: '$|f(p_k)| < \\varepsilon$' },
        { en: '$|p_k - p_{k-1}| < \\varepsilon$', hu: '$|p_k - p_{k-1}| < \\varepsilon$' },
      ],
      answer: 0,
      explanation: {
        en: '|p_k| < ε measures the size of p_k, not the accuracy of the approximation, so it is not a valid stopping test.',
        hu: 'A |p_k| < ε p_k nagyságát méri, nem a közelítés pontosságát, ezért nem érvényes leállási feltétel.',
      },
    },
  ],
  'false-position': [
    {
      id: 'q-false-position-1',
      prompt: {
        en: 'What is another name for the method of false position?',
        hu: 'Mi a húrmódszer (regula falsi) egy másik neve?',
      },
      options: [
        { en: "Newton's method", hu: 'Newton-módszer' },
        { en: 'Tangent method', hu: 'Érintőmódszer' },
        { en: 'Regula Falsi', hu: 'Regula falsi' },
        { en: 'Midpoint method', hu: 'Felezőpont-módszer' },
      ],
      answer: 2,
      explanation: {
        en: 'Regula falsi is the classical Latin name for the method of false position.',
        hu: 'A regula falsi a húrmódszer klasszikus latin elnevezése.',
      },
    },
    {
      id: 'q-false-position-2',
      prompt: {
        en: 'Which condition is necessary to apply the method of false position?',
        hu: 'Melyik feltétel szükséges a húrmódszer alkalmazásához?',
      },
      options: [
        { en: '$f(a)f(b) = 0$', hu: '$f(a)f(b) = 0$' },
        { en: '$f(a) = f(b)$', hu: '$f(a) = f(b)$' },
        { en: '$f(a)f(b) < 0$', hu: '$f(a)f(b) < 0$' },
        { en: '$f(a) > f(b)$', hu: '$f(a) > f(b)$' },
      ],
      answer: 2,
      explanation: {
        en: 'Like bisection it needs a sign-changing bracket, f(a)f(b) < 0.',
        hu: 'A felezéshez hasonlóan előjelváltó intervallumot igényel: f(a)f(b) < 0.',
      },
    },
    {
      id: 'q-false-position-3',
      prompt: {
        en: 'What happens if $f(p_k) = 0$ during the method?',
        hu: 'Mi történik, ha $f(p_k) = 0$ a módszer során?',
      },
      options: [
        { en: 'A new secant line is drawn', hu: 'Új szelőt rajzolunk' },
        { en: 'Error increases', hu: 'A hiba nő' },
        { en: 'The method terminates with a root', hu: 'A módszer gyökkel leáll' },
        { en: 'Interval remains the same', hu: 'Az intervallum változatlan marad' },
      ],
      answer: 2,
      explanation: {
        en: 'A zero residual means p_k is an exact root, so the method stops.',
        hu: 'A nulla maradék azt jelenti, hogy p_k pontos gyök, így a módszer leáll.',
      },
    },
    {
      id: 'q-false-position-4',
      prompt: {
        en: 'In which case does the method of false position converge to the root of the function?',
        hu: 'Mely esetben konvergál a húrmódszer a függvény gyökéhez?',
      },
      options: [
        { en: 'When the sign of $f(p_k)$ is same as $f(a_k)$', hu: 'Amikor $f(p_k)$ előjele megegyezik $f(a_k)$-éval' },
        { en: 'When $f(x)$ is piecewise linear', hu: 'Amikor $f(x)$ szakaszonként lineáris' },
        { en: 'When the function is symmetric', hu: 'Amikor a függvény szimmetrikus' },
        { en: 'When the function is concave or convex', hu: 'Amikor a függvény konkáv vagy konvex' },
      ],
      answer: 3,
      explanation: {
        en: 'Convergence is guaranteed for a continuous, convex or concave f with a sign-changing bracket.',
        hu: 'A konvergencia garantált egy folytonos, konvex vagy konkáv f-re előjelváltó intervallummal.',
      },
    },
    {
      id: 'q-false-position-5',
      prompt: {
        en: 'What is the formula for the next approximation $p_k$ in the method of false position?',
        hu: 'Mi a következő $p_k$ közelítés képlete a húrmódszerben?',
      },
      options: [
        { en: '$\\frac{a_k + b_k}{2}$', hu: '$\\frac{a_k + b_k}{2}$' },
        { en: '$a_k - \\frac{f(a_k)(a_k - b_k)}{f(a_k) - f(b_k)}$', hu: '$a_k - \\frac{f(a_k)(a_k - b_k)}{f(a_k) - f(b_k)}$' },
        { en: '$b_k - \\frac{f(a_k)(b_k - a_k)}{f(b_k) - f(a_k)}$', hu: '$b_k - \\frac{f(a_k)(b_k - a_k)}{f(b_k) - f(a_k)}$' },
        { en: '$\\frac{f(a_k) - f(b_k)}{a_k - b_k}$', hu: '$\\frac{f(a_k) - f(b_k)}{a_k - b_k}$' },
      ],
      answer: 1,
      explanation: {
        en: 'p_k is the x-intercept of the chord through (a_k, f(a_k)) and (b_k, f(b_k)).',
        hu: 'p_k az (a_k, f(a_k)) és (b_k, f(b_k)) pontokon átmenő húr x-tengelymetszete.',
      },
    },
  ],
  newton: [
    {
      id: 'q-newton-1',
      prompt: {
        en: "What is the requirement for $f'(p_k)$ in Newton's method?",
        hu: "Mi a követelmény $f'(p_k)$-ra a Newton-módszerben?",
      },
      options: [
        { en: 'It must be zero', hu: 'Nullának kell lennie' },
        { en: 'It must not be zero', hu: 'Nem lehet nulla' },
        { en: 'It must be less than one', hu: 'Egynél kisebbnek kell lennie' },
        { en: 'It must be constant', hu: 'Állandónak kell lennie' },
      ],
      answer: 1,
      explanation: {
        en: "The iteration divides by f'(p_k), so it must be nonzero.",
        hu: "Az iteráció f'(p_k)-val oszt, ezért annak nem nullának kell lennie.",
      },
    },
    {
      id: 'q-newton-2',
      prompt: {
        en: "What is the derivative of the Newton iteration function $g(x) = x - \\frac{f(x)}{f'(x)}$?",
        hu: "Mi a Newton-iterációs $g(x) = x - \\frac{f(x)}{f'(x)}$ függvény deriváltja?",
      },
      options: [
        { en: "$1 - \\frac{f(x)}{f'(x)}$", hu: "$1 - \\frac{f(x)}{f'(x)}$" },
        { en: "$f'(x)$", hu: "$f'(x)$" },
        { en: "$\\frac{f(x)}{f''(x)}$", hu: "$\\frac{f(x)}{f''(x)}$" },
        { en: "$\\frac{f(x)f''(x)}{(f'(x))^2}$", hu: "$\\frac{f(x)f''(x)}{(f'(x))^2}$" },
      ],
      answer: 3,
      explanation: {
        en: "Differentiating g gives g'(x) = f(x)f''(x)/(f'(x))^2, which is 0 at a simple root.",
        hu: "g deriválása g'(x) = f(x)f''(x)/(f'(x))^2-et ad, ami egy egyszeres gyökben 0.",
      },
    },
    {
      id: 'q-newton-3',
      prompt: {
        en: "Which condition implies convergence of Newton's method?",
        hu: 'Melyik feltétel biztosítja a Newton-módszer konvergenciáját?',
      },
      options: [
        { en: '$f$ is convex or concave', hu: '$f$ konvex vagy konkáv' },
        { en: '$f$ has an opposite sign property at the end of the interval', hu: '$f$ ellentétes előjelű az intervallum végpontjaiban' },
        { en: "the function $f$ is two times differentiable and $f'(p) \\neq 0$", hu: "az $f$ függvény kétszer differenciálható és $f'(p) \\neq 0$" },
        { en: '$f$ is piecewise linear', hu: '$f$ szakaszonként lineáris' },
      ],
      answer: 2,
      explanation: {
        en: "A simple root with f in C^2 and f'(p) ≠ 0 gives local (quadratic) convergence.",
        hu: "Egy egyszeres gyök f ∈ C²-vel és f'(p) ≠ 0-val lokális (kvadratikus) konvergenciát ad.",
      },
    },
    {
      id: 'q-newton-4',
      prompt: {
        en: "What type of equations is Newton's method used to solve?",
        hu: 'Milyen típusú egyenletek megoldására használjuk a Newton-módszert?',
      },
      options: [
        { en: 'Nonlinear scalar equations', hu: 'Nemlineáris skaláris egyenletek' },
        { en: 'Linear equations', hu: 'Lineáris egyenletek' },
        { en: 'Differential equations', hu: 'Differenciálegyenletek' },
        { en: 'System of linear equations', hu: 'Lineáris egyenletrendszerek' },
      ],
      answer: 0,
      explanation: {
        en: "Newton's method finds roots of nonlinear scalar equations f(x) = 0.",
        hu: 'A Newton-módszer nemlineáris skaláris f(x) = 0 egyenletek gyökeit keresi.',
      },
    },
    {
      id: 'q-newton-5',
      prompt: {
        en: "Which situation might cause Newton's method to fail or diverge?",
        hu: 'Mely helyzet okozhatja a Newton-módszer sikertelenségét vagy divergenciáját?',
      },
      options: [
        { en: 'Smooth and monotonic function', hu: 'Sima és monoton függvény' },
        { en: 'Initial guess is far from the root', hu: 'A kezdőérték messze van a gyöktől' },
        { en: 'Well-posed root near the origin', hu: 'Jól meghatározott gyök az origó közelében' },
        { en: 'Initial guess very close to root', hu: 'A kezdőérték nagyon közel van a gyökhöz' },
      ],
      answer: 1,
      explanation: {
        en: 'Newton is only locally convergent; a poor (far) initial guess can diverge or cycle.',
        hu: 'A Newton csak lokálisan konvergens; egy rossz (távoli) kezdőérték divergálhat vagy ciklizálhat.',
      },
    },
  ],
  secant: [
    {
      id: 'q-secant-1',
      prompt: {
        en: 'What is the secant method used to solve?',
        hu: 'Mire használjuk a szelőmódszert?',
      },
      options: [
        { en: 'Systems of linear equations', hu: 'Lineáris egyenletrendszerek' },
        { en: 'Differential equations', hu: 'Differenciálegyenletek' },
        { en: 'Polynomial interpolation', hu: 'Polinominterpoláció' },
        { en: 'Nonlinear scalar equations', hu: 'Nemlineáris skaláris egyenletek' },
      ],
      answer: 3,
      explanation: {
        en: 'Like Newton, the secant method finds roots of nonlinear scalar equations.',
        hu: 'A Newtonhoz hasonlóan a szelőmódszer nemlineáris skaláris egyenletek gyökeit keresi.',
      },
    },
    {
      id: 'q-secant-2',
      prompt: {
        en: 'How is the secant line determined in the secant method?',
        hu: 'Hogyan határozzuk meg a szelőt a szelőmódszerben?',
      },
      options: [
        { en: 'By integrating the function', hu: 'A függvény integrálásával' },
        { en: 'By drawing a tangent at a point', hu: 'Egy pontban húzott érintővel' },
        { en: 'By connecting $(p_k, f(p_k))$ and $(p_{k-1}, f(p_{k-1}))$ with a line', hu: 'A $(p_k, f(p_k))$ és $(p_{k-1}, f(p_{k-1}))$ pontok egyenessel való összekötésével' },
        { en: 'By evaluating a midpoint', hu: 'Egy felezőpont kiértékelésével' },
      ],
      answer: 2,
      explanation: {
        en: 'The secant line joins the last two iterate points, replacing the tangent of Newton.',
        hu: 'A szelő az utolsó két közelítési pontot köti össze, kiváltva a Newton érintőjét.',
      },
    },
    {
      id: 'q-secant-3',
      prompt: {
        en: 'Which values are needed to start the secant method?',
        hu: 'Mely értékek kellenek a szelőmódszer indításához?',
      },
      options: [
        { en: 'A root and a derivative', hu: 'Egy gyök és egy derivált' },
        { en: "The function's integral", hu: 'A függvény integrálja' },
        { en: 'Two initial values', hu: 'Két kezdőérték' },
        { en: 'One initial value', hu: 'Egy kezdőérték' },
      ],
      answer: 2,
      explanation: {
        en: 'Being a two-step iteration, the secant method needs two starting points.',
        hu: 'Kétlépéses iteráció lévén a szelőmódszer két kezdőpontot igényel.',
      },
    },
    {
      id: 'q-secant-4',
      prompt: {
        en: 'What type of iteration is the secant method?',
        hu: 'Milyen típusú iteráció a szelőmódszer?',
      },
      options: [
        { en: 'Three-step iteration', hu: 'Háromlépéses iteráció' },
        { en: 'Fixed-step iteration', hu: 'Rögzített lépéses iteráció' },
        { en: 'Two-step iteration', hu: 'Kétlépéses iteráció' },
        { en: 'One-step iteration', hu: 'Egylépéses iteráció' },
      ],
      answer: 2,
      explanation: {
        en: 'Each new iterate uses the previous two, making it a two-step iteration.',
        hu: 'Minden új közelítés az előző kettőt használja, így kétlépéses iteráció.',
      },
    },
    {
      id: 'q-secant-5',
      prompt: {
        en: 'In what situation is the secant method especially useful?',
        hu: 'Mely helyzetben különösen hasznos a szelőmódszer?',
      },
      options: [
        { en: 'When the function is quadratic', hu: 'Amikor a függvény másodfokú' },
        { en: 'When the derivative of $f$ is hard to compute', hu: 'Amikor $f$ deriváltját nehéz kiszámítani' },
        { en: 'When the initial guess is very accurate', hu: 'Amikor a kezdőérték nagyon pontos' },
        { en: 'When the function is linear', hu: 'Amikor a függvény lineáris' },
      ],
      answer: 1,
      explanation: {
        en: "It avoids derivatives, so it shines when f' is expensive or unavailable.",
        hu: "Elkerüli a deriváltakat, ezért akkor előnyös, amikor f' költséges vagy nem áll rendelkezésre.",
      },
    },
  ],
  'order-of-convergence': [
    {
      id: 'q-order-of-convergence-1',
      prompt: {
        en: 'If the limit $\\lambda = \\lim_{k \\to \\infty} \\frac{p_{k+1} - p}{(p_k - p)^\\alpha}$ exists and is not zero, what does it represent?',
        hu: 'Ha a $\\lambda = \\lim_{k \\to \\infty} \\frac{p_{k+1} - p}{(p_k - p)^\\alpha}$ határérték létezik és nem nulla, mit jelent?',
      },
      options: [
        { en: 'Derivative of the function', hu: 'A függvény deriváltját' },
        { en: 'Asymptotic error constant', hu: 'Az aszimptotikus hibakonstanst' },
        { en: 'Maximum error', hu: 'A maximális hibát' },
        { en: 'Integral of the function', hu: 'A függvény integrálját' },
      ],
      answer: 1,
      explanation: {
        en: 'That limit λ is the asymptotic error constant for order α.',
        hu: 'Ez a λ határérték az α rendhez tartozó aszimptotikus hibakonstans.',
      },
    },
    {
      id: 'q-order-of-convergence-2',
      prompt: {
        en: 'What is the condition for linear convergence?',
        hu: 'Mi a lineáris konvergencia feltétele?',
      },
      options: [
        { en: '$\\alpha > 1$', hu: '$\\alpha > 1$' },
        { en: '$\\alpha = 1$ and $c < 1$', hu: '$\\alpha = 1$ és $c < 1$' },
        { en: '$\\alpha = 3$', hu: '$\\alpha = 3$' },
        { en: '$\\alpha = 2$', hu: '$\\alpha = 2$' },
      ],
      answer: 1,
      explanation: {
        en: 'Linear convergence is order α = 1 with asymptotic constant c < 1.',
        hu: 'A lineáris konvergencia α = 1 rendű, c < 1 aszimptotikus konstanssal.',
      },
    },
    {
      id: 'q-order-of-convergence-3',
      prompt: {
        en: 'Which method has quadratic convergence near a simple root?',
        hu: 'Melyik módszer kvadratikusan konvergens egy egyszeres gyök közelében?',
      },
      options: [
        { en: "Newton's method", hu: 'Newton-módszer' },
        { en: 'Method of false position', hu: 'Húrmódszer' },
        { en: 'Bisection method', hu: 'Felezési módszer' },
        { en: 'Secant method', hu: 'Szelőmódszer' },
      ],
      answer: 0,
      explanation: {
        en: "Newton's method converges quadratically (α = 2) at a simple root.",
        hu: 'A Newton-módszer egy egyszeres gyökben kvadratikusan (α = 2) konvergál.',
      },
    },
    {
      id: 'q-order-of-convergence-4',
      prompt: {
        en: 'Which statement is true about a sequence with order of convergence $\\alpha > 1$?',
        hu: 'Mi igaz egy $\\alpha > 1$ konvergenciarendű sorozatra?',
      },
      options: [
        { en: 'The root cannot be approximated', hu: 'A gyök nem közelíthető' },
        { en: 'The convergence is faster than linear', hu: 'A konvergencia gyorsabb a lineárisnál' },
        { en: 'The error increases', hu: 'A hiba nő' },
        { en: 'The sequence diverges', hu: 'A sorozat divergál' },
      ],
      answer: 1,
      explanation: {
        en: 'Any order α > 1 means superlinear behavior — faster than linear.',
        hu: 'Bármely α > 1 rend szuperlineáris viselkedést jelent — gyorsabb a lineárisnál.',
      },
    },
    {
      id: 'q-order-of-convergence-5',
      prompt: {
        en: 'Which of the following convergence types is fastest?',
        hu: 'Az alábbi konvergenciatípusok közül melyik a leggyorsabb?',
      },
      options: [
        { en: 'Linear', hu: 'Lineáris' },
        { en: 'Logarithmic', hu: 'Logaritmikus' },
        { en: 'Quadratic', hu: 'Kvadratikus' },
        { en: 'Superlinear', hu: 'Szuperlineáris' },
      ],
      answer: 2,
      explanation: {
        en: 'Quadratic (α = 2) is the fastest among these (logarithmic < linear < superlinear < quadratic).',
        hu: 'A kvadratikus (α = 2) a leggyorsabb ezek közül (logaritmikus < lineáris < szuperlineáris < kvadratikus).',
      },
    },
  ],
  multivariable: [
    {
      id: 'q-multivariable-1',
      prompt: {
        en: "What is the purpose of Taylor's formula in multiple variables?",
        hu: 'Mi a többváltozós Taylor-formula célja?',
      },
      options: [
        { en: 'Solving integrals', hu: 'Integrálok megoldása' },
        { en: 'Estimating root multiplicity', hu: 'Gyökmultiplicitás becslése' },
        { en: 'Approximating function values near a point', hu: 'Függvényértékek közelítése egy pont közelében' },
        { en: 'Computing exact values of $f$', hu: '$f$ pontos értékeinek kiszámítása' },
      ],
      answer: 2,
      explanation: {
        en: 'Taylor expansion approximates f near a point using its derivatives.',
        hu: 'A Taylor-sorfejtés a deriváltak segítségével közelíti f-et egy pont közelében.',
      },
    },
    {
      id: 'q-multivariable-2',
      prompt: {
        en: 'What is the Jacobian matrix of a multivariable and vector-valued function?',
        hu: 'Mi egy többváltozós, vektorértékű függvény Jacobi-mátrixa?',
      },
      options: [
        { en: 'A diagonal matrix', hu: 'Egy diagonális mátrix' },
        { en: 'The gradient vector', hu: 'A gradiensvektor' },
        { en: 'A matrix of first-order partial derivatives', hu: 'Az elsőrendű parciális deriváltak mátrixa' },
        { en: 'A vector of integrals', hu: 'Integrálok vektora' },
      ],
      answer: 2,
      explanation: {
        en: 'The Jacobian collects all first-order partial derivatives ∂f_i/∂x_j.',
        hu: 'A Jacobi-mátrix az összes elsőrendű parciális deriváltat ∂f_i/∂x_j tartalmazza.',
      },
    },
    {
      id: 'q-multivariable-3',
      prompt: {
        en: 'What does the gradient vector represent for a function $f \\in C^1 (\\mathbb{R}^n,\\mathbb{R})$?',
        hu: 'Mit jelent a gradiensvektor egy $f \\in C^1 (\\mathbb{R}^n,\\mathbb{R})$ függvényre?',
      },
      options: [
        { en: 'The curvature of $f$', hu: '$f$ görbületét' },
        { en: 'The maximum value of $f$', hu: '$f$ maximumát' },
        { en: 'The second-order approximation', hu: 'A másodrendű közelítést' },
        { en: 'The vector of all partial derivatives', hu: 'Az összes parciális derivált vektorát' },
      ],
      answer: 3,
      explanation: {
        en: 'The gradient is the vector of first partial derivatives of f.',
        hu: 'A gradiens f elsőrendű parciális deriváltjainak vektora.',
      },
    },
    {
      id: 'q-multivariable-4',
      prompt: {
        en: 'What does the chain rule for multivariable functions involve?',
        hu: 'Mit foglal magában a többváltozós függvények láncszabálya?',
      },
      options: [
        { en: 'Using integration by parts', hu: 'Parciális integrálás alkalmazását' },
        { en: 'Summing function values', hu: 'Függvényértékek összegzését' },
        { en: 'Composing and multiplying gradients and derivatives', hu: 'Gradiensek és deriváltak összetételét és szorzását' },
        { en: 'Finding local maxima', hu: 'Lokális maximumok keresését' },
      ],
      answer: 2,
      explanation: {
        en: 'The multivariable chain rule multiplies Jacobians/gradients of the composed maps.',
        hu: 'A többváltozós láncszabály az összetett leképezések Jacobi-mátrixait/gradienseit szorozza.',
      },
    },
    {
      id: 'q-multivariable-5',
      prompt: {
        en: "In multivariable Taylor approximation, what does the term $f(a)+f'(a)^T(x - a)$ represent?",
        hu: "A többváltozós Taylor-közelítésben mit jelent az $f(a)+f'(a)^T(x - a)$ tag?",
      },
      options: [
        { en: 'Constant term', hu: 'Konstans tag' },
        { en: 'Derivative of $f$', hu: '$f$ deriváltja' },
        { en: 'Linear approximation', hu: 'Lineáris közelítés' },
        { en: 'Second-order approximation', hu: 'Másodrendű közelítés' },
      ],
      answer: 2,
      explanation: {
        en: 'This first-order expansion is the linear (tangent-plane) approximation of f at a.',
        hu: 'Ez az elsőrendű kifejtés f lineáris (érintősík-) közelítése a-ban.',
      },
    },
  ],
  norms: [
    {
      id: 'q-norms-1',
      prompt: {
        en: "What condition must a sequence $p^{(k)}$ satisfy to be convergent according to Cauchy's criterion?",
        hu: 'Milyen feltételt kell teljesítenie egy $p^{(k)}$ sorozatnak a Cauchy-kritérium szerinti konvergenciához?',
      },
      options: [
        { en: '$\\|p^{(k)}\\| < \\epsilon$', hu: '$\\|p^{(k)}\\| < \\epsilon$' },
        { en: '$\\|p^{(k)} - p^{(m)}\\| > \\epsilon$ for small $k, m$', hu: '$\\|p^{(k)} - p^{(m)}\\| > \\epsilon$ kis $k, m$-re' },
        { en: '$\\|p^{(k)} - p^{(m)}\\| < \\epsilon$ for all large enough $k, m$', hu: '$\\|p^{(k)} - p^{(m)}\\| < \\epsilon$ minden elég nagy $k, m$-re' },
        { en: '$\\|p^{(k)} - p\\| < \\epsilon$ for large $k$', hu: '$\\|p^{(k)} - p\\| < \\epsilon$ nagy $k$-ra' },
      ],
      answer: 2,
      explanation: {
        en: 'A Cauchy sequence has terms that get arbitrarily close to each other for large indices.',
        hu: 'Egy Cauchy-sorozat tagjai nagy indexekre tetszőlegesen közel kerülnek egymáshoz.',
      },
    },
    {
      id: 'q-norms-2',
      prompt: {
        en: 'According to convergence properties for vector sequences, if $p^{(k)} \\to p$ and $q^{(k)} \\to q$, then:',
        hu: 'A vektorsorozatok konvergenciatulajdonságai szerint, ha $p^{(k)} \\to p$ és $q^{(k)} \\to q$, akkor:',
      },
      options: [
        { en: '$p^{(k)} + q^{(k)} \\to 0$', hu: '$p^{(k)} + q^{(k)} \\to 0$' },
        { en: '$p^{(k)} \\cdot q^{(k)} \\to p \\cdot q$', hu: '$p^{(k)} \\cdot q^{(k)} \\to p \\cdot q$' },
        { en: '$\\|p^{(k)} - q^{(k)}\\| \\to 0$', hu: '$\\|p^{(k)} - q^{(k)}\\| \\to 0$' },
        { en: '$\\alpha p^{(k)} + \\beta q^{(k)} \\to \\alpha p + \\beta q$', hu: '$\\alpha p^{(k)} + \\beta q^{(k)} \\to \\alpha p + \\beta q$' },
      ],
      answer: 3,
      explanation: {
        en: 'Limits are linear: any fixed linear combination converges to the same combination of limits.',
        hu: 'A határérték lineáris: bármely rögzített lineáris kombináció a határértékek ugyanazon kombinációjához konvergál.',
      },
    },
    {
      id: 'q-norms-3',
      prompt: {
        en: 'What is the result of $\\|x\\|_2$ if $x = (3, 4)$?',
        hu: 'Mennyi $\\|x\\|_2$, ha $x = (3, 4)$?',
      },
      options: [
        { en: '25', hu: '25' },
        { en: '1', hu: '1' },
        { en: '7', hu: '7' },
        { en: '5', hu: '5' },
      ],
      answer: 3,
      explanation: {
        en: '√(3² + 4²) = √25 = 5.',
        hu: '√(3² + 4²) = √25 = 5.',
      },
    },
    {
      id: 'q-norms-4',
      prompt: {
        en: 'Which norm corresponds to the maximum absolute component of a vector?',
        hu: 'Melyik norma felel meg egy vektor maximális abszolút komponensének?',
      },
      options: [
        { en: '$\\|x\\|_p$ for $p = 0$', hu: '$\\|x\\|_p$, ha $p = 0$' },
        { en: '$\\|x\\|_2$', hu: '$\\|x\\|_2$' },
        { en: '$\\|x\\|_\\infty$', hu: '$\\|x\\|_\\infty$' },
        { en: '$\\|x\\|_1$', hu: '$\\|x\\|_1$' },
      ],
      answer: 2,
      explanation: {
        en: 'The ∞-norm is the maximum of the absolute values of the components.',
        hu: 'Az ∞-norma a komponensek abszolút értékeinek maximuma.',
      },
    },
    {
      id: 'q-norms-5',
      prompt: {
        en: 'What is the p-norm of a vector $x$ when $p = 1$?',
        hu: 'Mi egy $x$ vektor p-normája, ha $p = 1$?',
      },
      options: [
        { en: '$\\sqrt{\\sum x_i^2}$', hu: '$\\sqrt{\\sum x_i^2}$' },
        { en: '$\\sum x_i^2$', hu: '$\\sum x_i^2$' },
        { en: '$\\sum |x_i|$', hu: '$\\sum |x_i|$' },
        { en: '$\\max |x_i|$', hu: '$\\max |x_i|$' },
      ],
      answer: 2,
      explanation: {
        en: 'The 1-norm is the sum of the absolute values of the components.',
        hu: 'Az 1-norma a komponensek abszolút értékeinek összege.',
      },
    },
  ],
  'fixed-point-nd': [
    {
      id: 'q-fixed-point-nd-1',
      prompt: {
        en: 'What does it mean if a function $\\mathbf{g} : \\mathbb{R}^n \\to \\mathbb{R}^n$ has a fixed point $\\mathbf{p}$?',
        hu: 'Mit jelent, ha egy $\\mathbf{g} : \\mathbb{R}^n \\to \\mathbb{R}^n$ függvénynek $\\mathbf{p}$ fixpontja?',
      },
      options: [
        { en: "$\\mathbf{g}'(\\mathbf{p}) = \\mathbf{0}$", hu: "$\\mathbf{g}'(\\mathbf{p}) = \\mathbf{0}$" },
        { en: '$\\mathbf{g}(\\mathbf{p}) = \\mathbf{0}$', hu: '$\\mathbf{g}(\\mathbf{p}) = \\mathbf{0}$' },
        { en: '$\\mathbf{g}(\\mathbf{p}) = \\mathbf{p}$', hu: '$\\mathbf{g}(\\mathbf{p}) = \\mathbf{p}$' },
        { en: '$\\|\\mathbf{g}(\\mathbf{p})\\| = 1$', hu: '$\\|\\mathbf{g}(\\mathbf{p})\\| = 1$' },
      ],
      answer: 2,
      explanation: {
        en: 'A fixed point satisfies g(p) = p, just as in one dimension.',
        hu: 'Egy fixpont teljesíti a g(p) = p egyenletet, akárcsak egy dimenzióban.',
      },
    },
    {
      id: 'q-fixed-point-nd-2',
      prompt: {
        en: 'How is the stopping criterion typically defined in n-dimensional fixed-point iteration?',
        hu: 'Hogyan definiáljuk jellemzően a leállási feltételt az n-dimenziós fixpont-iterációban?',
      },
      options: [
        { en: '$\\|\\mathbf{g}(\\mathbf{x}^{(k)})-\\mathbf{x}^{(k)}\\| < \\varepsilon$', hu: '$\\|\\mathbf{g}(\\mathbf{x}^{(k)})-\\mathbf{x}^{(k)}\\| < \\varepsilon$' },
        { en: '$\\|\\mathbf{x}^{(k+1)} - \\mathbf{x}^{(k)}\\| < \\varepsilon$', hu: '$\\|\\mathbf{x}^{(k+1)} - \\mathbf{x}^{(k)}\\| < \\varepsilon$' },
        { en: '$\\frac{\\|\\mathbf{x}^{(k+1)} - \\mathbf{x}^{(k)}\\|}{\\mathbf{x}^{(k)}} < \\varepsilon$', hu: '$\\frac{\\|\\mathbf{x}^{(k+1)} - \\mathbf{x}^{(k)}\\|}{\\mathbf{x}^{(k)}} < \\varepsilon$' },
        { en: 'Any of the above', hu: 'Bármelyik a fentiek közül' },
      ],
      answer: 3,
      explanation: {
        en: 'Any of these norm-based residual/increment tests can serve as a stopping criterion.',
        hu: 'Bármelyik norma alapú maradék-/növekményteszt szolgálhat leállási feltételként.',
      },
    },
    {
      id: 'q-fixed-point-nd-3',
      prompt: {
        en: 'Which norm is commonly used to check convergence in $\\mathbb{R}^n$?',
        hu: 'Melyik normát használjuk gyakran a konvergencia ellenőrzésére $\\mathbb{R}^n$-ben?',
      },
      options: [
        { en: 'Any vector norm', hu: 'Bármely vektornorma' },
        { en: 'Only the $\\infty$-norm', hu: 'Csak az $\\infty$-norma' },
        { en: 'Only the 1-norm', hu: 'Csak az 1-norma' },
        { en: 'Only the 2-norm', hu: 'Csak a 2-norma' },
      ],
      answer: 0,
      explanation: {
        en: 'All norms on R^n are equivalent, so any vector norm may be used.',
        hu: 'Az R^n-en minden norma ekvivalens, így bármely vektornorma használható.',
      },
    },
    {
      id: 'q-fixed-point-nd-4',
      prompt: {
        en: 'The Jacobian matrix of $\\mathbf{g}$ is:',
        hu: 'A $\\mathbf{g}$ Jacobi-mátrixa:',
      },
      options: [
        { en: 'The Hessian matrix', hu: 'A Hesse-mátrix' },
        { en: 'The gradient vector', hu: 'A gradiensvektor' },
        { en: 'The matrix of partial derivatives $(\\frac{\\partial g_i}{\\partial x_j})$', hu: 'A parciális deriváltak mátrixa $(\\frac{\\partial g_i}{\\partial x_j})$' },
        { en: 'A matrix of second derivatives', hu: 'A második deriváltak mátrixa' },
      ],
      answer: 2,
      explanation: {
        en: 'The Jacobian holds the first-order partials ∂g_i/∂x_j.',
        hu: 'A Jacobi-mátrix az elsőrendű parciális deriváltakat ∂g_i/∂x_j tartalmazza.',
      },
    },
    {
      id: 'q-fixed-point-nd-5',
      prompt: {
        en: 'Which statement best describes fixed-point iteration in n-dimensions?',
        hu: 'Melyik állítás írja le legjobban az n-dimenziós fixpont-iterációt?',
      },
      options: [
        { en: 'An optimization method', hu: 'Egy optimalizálási módszer' },
        { en: 'A nonlinear solver based on iterative updates', hu: 'Egy iteratív frissítéseken alapuló nemlineáris megoldó' },
        { en: 'An integration technique', hu: 'Egy integrálási technika' },
        { en: 'A method that uses linear algebra to solve equations', hu: 'Egy módszer, amely lineáris algebrával old meg egyenleteket' },
      ],
      answer: 1,
      explanation: {
        en: 'It iteratively updates a vector to solve a nonlinear system g(x) = x.',
        hu: 'Egy vektort iteratívan frissít a g(x) = x nemlineáris rendszer megoldására.',
      },
    },
  ],
  'newton-nd': [
    {
      id: 'q-newton-nd-1',
      prompt: {
        en: "How is the initial guess $x_0$ selected in multivariable Newton's method?",
        hu: 'Hogyan választjuk meg az $x_0$ kezdőértéket a többváltozós Newton-módszerben?',
      },
      options: [
        { en: 'Close to the solution for convergence', hu: 'A megoldáshoz közel a konvergencia érdekében' },
        { en: 'Arbitrarily, as convergence is guaranteed', hu: 'Tetszőlegesen, mivel a konvergencia garantált' },
        { en: 'As the average of all variables', hu: 'Az összes változó átlagaként' },
        { en: 'It must be an exact root', hu: 'Pontos gyöknek kell lennie' },
      ],
      answer: 0,
      explanation: {
        en: 'Newton is only locally convergent, so x_0 must be near the solution.',
        hu: 'A Newton csak lokálisan konvergens, ezért x_0-nak a megoldás közelében kell lennie.',
      },
    },
    {
      id: 'q-newton-nd-2',
      prompt: {
        en: 'If the Jacobian is not invertible at a point, what might occur?',
        hu: 'Ha a Jacobi-mátrix egy pontban nem invertálható, mi történhet?',
      },
      options: [
        { en: 'Exact solution found', hu: 'Pontos megoldást találunk' },
        { en: 'Failure in step computation', hu: 'A lépés kiszámítása meghiúsul' },
        { en: 'Quadratic convergence', hu: 'Kvadratikus konvergencia' },
        { en: 'Exponential convergence', hu: 'Exponenciális konvergencia' },
      ],
      answer: 1,
      explanation: {
        en: 'The Newton step solves J·Δ = −f; a singular Jacobian makes that step undefined.',
        hu: 'A Newton-lépés a J·Δ = −f egyenletet oldja meg; egy szinguláris Jacobi-mátrix definiálatlanná teszi a lépést.',
      },
    },
    {
      id: 'q-newton-nd-3',
      prompt: {
        en: "What kind of convergence can be expected from Newton's method in several variables near a solution?",
        hu: 'Milyen konvergencia várható a többváltozós Newton-módszertől egy megoldás közelében?',
      },
      options: [
        { en: 'Superlinear', hu: 'Szuperlineáris' },
        { en: 'Linear', hu: 'Lineáris' },
        { en: 'Logarithmic', hu: 'Logaritmikus' },
        { en: 'Quadratic', hu: 'Kvadratikus' },
      ],
      answer: 3,
      explanation: {
        en: 'With a nonsingular Jacobian at the root, convergence is quadratic.',
        hu: 'A gyökben nemszinguláris Jacobi-mátrixszal a konvergencia kvadratikus.',
      },
    },
    {
      id: 'q-newton-nd-4',
      prompt: {
        en: 'What is the Newton iteration formula for a function $f: \\mathbb{R}^n \\to \\mathbb{R}^n$?',
        hu: 'Mi a Newton-iteráció képlete egy $f: \\mathbb{R}^n \\to \\mathbb{R}^n$ függvényre?',
      },
      options: [
        { en: '$x_{k+1} = x_k - \\nabla f(x_k)$', hu: '$x_{k+1} = x_k - \\nabla f(x_k)$' },
        { en: '$x_{k+1} = x_k + f(x_k)$', hu: '$x_{k+1} = x_k + f(x_k)$' },
        { en: '$x_{k+1} =f(x_k) - x_k$', hu: '$x_{k+1} =f(x_k) - x_k$' },
        { en: "$x_{k+1} = x_k - (f'(x_k))^{-1} f(x_k)$", hu: "$x_{k+1} = x_k - (f'(x_k))^{-1} f(x_k)$" },
      ],
      answer: 3,
      explanation: {
        en: 'The multivariable Newton step uses the inverse Jacobian times f(x_k).',
        hu: 'A többváltozós Newton-lépés az inverz Jacobi-mátrix és f(x_k) szorzatát használja.',
      },
    },
    {
      id: 'q-newton-nd-5',
      prompt: {
        en: "What idea is used in the derivation of Newton's method?",
        hu: 'Milyen gondolatot használunk a Newton-módszer levezetésében?',
      },
      options: [
        { en: 'A secant line approximation', hu: 'Szelő-közelítést' },
        { en: 'First-order Taylor approximation of the function', hu: 'A függvény elsőrendű Taylor-közelítését' },
        { en: 'Second-order Taylor approximation', hu: 'Másodrendű Taylor-közelítést' },
        { en: 'An improved bisection method', hu: 'Egy továbbfejlesztett felezési módszert' },
      ],
      answer: 1,
      explanation: {
        en: 'Newton linearizes f via its first-order Taylor expansion and solves the linear model.',
        hu: 'A Newton az elsőrendű Taylor-kifejtéssel linearizálja f-et, és megoldja a lineáris modellt.',
      },
    },
  ],
  broyden: [
    {
      id: 'q-broyden-1',
      prompt: {
        en: 'What is the goal of quasi-Newton methods?',
        hu: 'Mi a kvázi-Newton módszerek célja?',
      },
      options: [
        { en: 'To solve differential equations', hu: 'Differenciálegyenletek megoldása' },
        { en: 'To approximate the Jacobian or its inverse', hu: 'A Jacobi-mátrix vagy inverze közelítése' },
        { en: 'To maximize linear functions', hu: 'Lineáris függvények maximalizálása' },
        { en: 'To compute exact gradients', hu: 'Pontos gradiensek kiszámítása' },
      ],
      answer: 1,
      explanation: {
        en: 'Quasi-Newton methods avoid exact Jacobians by approximating J (or J⁻¹) cheaply.',
        hu: 'A kvázi-Newton módszerek elkerülik a pontos Jacobi-mátrixot J (vagy J⁻¹) olcsó közelítésével.',
      },
    },
    {
      id: 'q-broyden-2',
      prompt: {
        en: 'In practice, why are inverse matrices avoided in implementation?',
        hu: 'A gyakorlatban miért kerüljük az inverz mátrixokat az implementációban?',
      },
      options: [
        { en: 'They require large storage', hu: 'Nagy tárhelyet igényelnek' },
        { en: 'They are never used in Newton methods', hu: 'A Newton-módszerekben sosem használjuk őket' },
        { en: 'They reduce accuracy', hu: 'Csökkentik a pontosságot' },
        { en: 'Solving linear equations is more efficient', hu: 'A lineáris egyenletek megoldása hatékonyabb' },
      ],
      answer: 3,
      explanation: {
        en: 'Solving a linear system is cheaper and more stable than forming an explicit inverse.',
        hu: 'Egy lineáris rendszer megoldása olcsóbb és stabilabb, mint egy explicit inverz előállítása.',
      },
    },
    {
      id: 'q-broyden-3',
      prompt: {
        en: "What is the main idea of the derivation of Broyden's method?",
        hu: 'Mi a Broyden-módszer levezetésének fő gondolata?',
      },
      options: [
        { en: 'Use the generalization of the secant equation to the vector-valued functions', hu: 'A szelőegyenlet általánosítása vektorértékű függvényekre' },
        { en: 'Use high-order derivatives', hu: 'Magasrendű deriváltak használata' },
        { en: 'Use first-order Taylor approximation', hu: 'Elsőrendű Taylor-közelítés használata' },
        { en: 'Use second-order Taylor approximation', hu: 'Másodrendű Taylor-közelítés használata' },
      ],
      answer: 0,
      explanation: {
        en: 'Broyden extends the scalar secant equation to vector-valued functions.',
        hu: 'A Broyden a skaláris szelőegyenletet vektorértékű függvényekre terjeszti ki.',
      },
    },
    {
      id: 'q-broyden-4',
      prompt: {
        en: 'What is the general formula of the quasi-Newton method?',
        hu: 'Mi a kvázi-Newton módszer általános képlete?',
      },
      options: [
        { en: '$A_k p_{k+1}=p_k-f(p_k)$', hu: '$A_k p_{k+1}=p_k-f(p_k)$' },
        { en: "$p_{k+1}= p_k-(f'(p_k))^{-1}f(p_k)$", hu: "$p_{k+1}= p_k-(f'(p_k))^{-1}f(p_k)$" },
        { en: "$p_{k+1}=f'(p_k) p_k-f(p_k)$", hu: "$p_{k+1}=f'(p_k) p_k-f(p_k)$" },
        { en: '$p_{k+1}=p_k-(A_k)^{-1}f(p_k)$', hu: '$p_{k+1}=p_k-(A_k)^{-1}f(p_k)$' },
      ],
      answer: 3,
      explanation: {
        en: 'Quasi-Newton replaces the Jacobian with an approximation A_k in the Newton step.',
        hu: 'A kvázi-Newton a Newton-lépésben a Jacobi-mátrixot egy A_k közelítéssel helyettesíti.',
      },
    },
    {
      id: 'q-broyden-5',
      prompt: {
        en: "What is the speed of Broyden's method?",
        hu: 'Milyen gyors a Broyden-módszer?',
      },
      options: [
        { en: 'Better than quadratic', hu: 'Jobb a kvadratikusnál' },
        { en: 'Superlinear', hu: 'Szuperlineáris' },
        { en: 'Quadratic', hu: 'Kvadratikus' },
        { en: 'Slower than linear', hu: 'Lassabb a lineárisnál' },
      ],
      answer: 1,
      explanation: {
        en: 'Broyden typically converges superlinearly — faster than linear but below quadratic.',
        hu: 'A Broyden jellemzően szuperlineárisan konvergál — gyorsabb a lineárisnál, de a kvadratikus alatt.',
      },
    },
  ],
}

export function getQuiz(sectionId: string): QuizQuestion[] {
  return QUIZZES[sectionId] ?? []
}
