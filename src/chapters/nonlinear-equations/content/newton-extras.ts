// Auto-generated learning aids for '2.5 (Newton+Q+s Method).
import type { GlossaryEntry, Flashcard } from '../components/widgets/decks'

export const NEWTON_GLOSSARY: GlossaryEntry[] = [
  {
    "term": {
      "en": "Newton–Raphson iteration (Eq. 2.7)",
      "hu": "Newton–Raphson-iteráció (2.7)"
    },
    "def": {
      "en": "$p_{k+1}=p_k-\\dfrac{f(p_k)}{f'(p_k)}$ — replace $f$ near $p_k$ by its tangent and take that line's x-intercept. Requires $f'(p_k)\\ne 0$.",
      "hu": "$p_{k+1}=p_k-\\dfrac{f(p_k)}{f'(p_k)}$ — helyettesítsük $f$-et $p_k$ közelében az érintőjével, és vegyük annak tengelymetszetét. $f'(p_k)\\ne 0$ kell hozzá."
    }
  },
  {
    "term": {
      "en": "Tangent-line linearization",
      "hu": "Érintő-menti linearizálás"
    },
    "def": {
      "en": "The derivation: replace the nonlinear $f(x)=0$ by its first-order Taylor polynomial $f(p_k)+f'(p_k)(x-p_k)=0$ and solve the resulting linear equation for the next iterate.",
      "hu": "A levezetés: a nemlineáris $f(x)=0$-t az elsőrendű Taylor-polinommal $f(p_k)+f'(p_k)(x-p_k)=0$ helyettesítjük, és a kapott lineáris egyenletet oldjuk meg a következő iteráltért."
    }
  },
  {
    "term": {
      "en": "Newton as fixed-point iteration (Eq. 2.8)",
      "hu": "Newton mint fixpont iteráció (2.8)"
    },
    "def": {
      "en": "It is the fixed-point iteration of $g(x)=x-\\dfrac{f(x)}{f'(x)}$. A root $p$ of $f$ with $f'(p)\\ne0$ is a fixed point of $g$.",
      "hu": "A $g(x)=x-\\dfrac{f(x)}{f'(x)}$ függvény fixpont iterációja. $f$ egy $p$ gyöke, ahol $f'(p)\\ne0$, fixpontja $g$-nek."
    }
  },
  {
    "term": {
      "en": "Why quadratic: $g'(p)=0$ (Eq. 2.9)",
      "hu": "Miért kvadratikus: $g'(p)=0$ (2.9)"
    },
    "def": {
      "en": "$g'(x)=\\dfrac{f(x)f''(x)}{(f'(x))^2}$, so at a simple root $g'(p)=0$. A fixed point with zero derivative gives quadratic convergence — the correct digits roughly double each step.",
      "hu": "$g'(x)=\\dfrac{f(x)f''(x)}{(f'(x))^2}$, így egyszeres gyöknél $g'(p)=0$. A nulla deriváltú fixpont kvadratikus konvergenciát ad — a helyes jegyek lépésenként nagyjából megduplázódnak."
    }
  },
  {
    "term": {
      "en": "Simple root ($f'(p)\\ne0$)",
      "hu": "Egyszeres gyök ($f'(p)\\ne0$)"
    },
    "def": {
      "en": "A root where the derivative is nonzero. Newton is quadratically convergent there; at a multiple root ($f'(p)=0$) convergence drops to linear.",
      "hu": "Olyan gyök, ahol a derivált nem nulla. Newton itt kvadratikusan konvergens; többszörös gyöknél ($f'(p)=0$) a konvergencia lineárisra esik."
    }
  },
  {
    "term": {
      "en": "Local convergence (Thm 2.23)",
      "hu": "Lokális konvergencia (2.23. tétel)"
    },
    "def": {
      "en": "If $f\\in C^2$ near a simple root $p$, there is a neighbourhood of $p$ from which Newton converges (quadratically). It follows from $g'(p)=0$ via the fixed-point local-convergence theorem (Thm 2.15).",
      "hu": "Ha $f\\in C^2$ egy egyszeres $p$ gyök közelében, akkor $p$-nek van olyan környezete, amelyből Newton (kvadratikusan) konvergál. A $g'(p)=0$-ból következik a fixpont lokális konvergencia tétel (2.15) révén."
    }
  },
  {
    "term": {
      "en": "Divergence / cycling (overshoot)",
      "hu": "Divergencia / ciklizálás (túllövés)"
    },
    "def": {
      "en": "Newton is only local. For $f(x)=\\tfrac12\\arctan x$ from a far $p_0$ the tangents overshoot: there is a threshold $p^*$ where the iterates form a period-2 cycle $\\{p_0,-p_0\\}$, and beyond it $|p_k|\\to\\infty$.",
      "hu": "Newton csak lokális. $f(x)=\\tfrac12\\arctan x$-re távoli $p_0$-ból az érintők túllőnek: van egy $p^*$ küszöb, ahol az iteráltak 2-periódusú $\\{p_0,-p_0\\}$ ciklust alkotnak, azon túl pedig $|p_k|\\to\\infty$."
    }
  },
  {
    "term": {
      "en": "Derivative breakdown $f'(p_k)=0$",
      "hu": "Derivált-összeomlás $f'(p_k)=0$"
    },
    "def": {
      "en": "If $f'(p_k)=0$ the step divides by zero and the method fails (the tangent is horizontal). Real codes must guard against a vanishing or tiny derivative.",
      "hu": "Ha $f'(p_k)=0$, a lépés nullával oszt, és a módszer elromlik (az érintő vízszintes). A valós kódnak védekeznie kell az eltűnő vagy pici derivált ellen."
    }
  }
]

export const NEWTON_FLASHCARDS: Flashcard[] = [
  {"q":{"en":"According to Taylor's Theorem, what continuity condition must $f$ satisfy on $[a,b]$ for an $n$-th order expansion?","hu":"A Taylor-tétel szerint milyen folytonossági feltételt kell teljesítenie $f$-nek $[a,b]$-n egy $n$-edrendű kifejtéshez?"},"a":{"en":"The function must be $n+1$ times continuously differentiable, denoted as $f \\in C^{n+1}[a,b]$.","hu":"A függvénynek $n+1$-szer folytonosan differenciálhatónak kell lennie, jelölve $f \\in C^{n+1}[a,b]$."}},
  {"q":{"en":"In Taylor's Theorem, where is the point $\\xi$ located relative to $x$ and $x_0$?","hu":"A Taylor-tételben hol helyezkedik el a $\\xi$ pont $x$-hez és $x_0$-hoz képest?"},"a":{"en":"It is located in the open interval $(\\min\\{x, x_0\\}, \\max\\{x, x_0\\})$.","hu":"A $(\\min\\{x, x_0\\}, \\max\\{x, x_0\\})$ nyílt intervallumban."}},
  {"q":{"en":"What is the mathematical form of the error term (remainder) in Taylor's Theorem?","hu":"Mi a Taylor-tételbeli hibatag (maradéktag) matematikai alakja?"},"a":{"en":"The error term is $\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}$.","hu":"A hibatag $\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}$."}},
  {"q":{"en":"Write the first three terms of the Taylor polynomial $T_n(x)$ centered at $x_0$.","hu":"Írd fel a $T_n(x)$ Taylor-polinom első három tagját $x_0$ körül."},"a":{"en":"$T_n(x) = f(x_0) + f'(x_0)(x-x_0) + \\frac{f''(x_0)}{2}(x-x_0)^2 + \\dots$","hu":"$T_n(x) = f(x_0) + f'(x_0)(x-x_0) + \\frac{f''(x_0)}{2}(x-x_0)^2 + \\dots$"}},
  {"q":{"en":"What is the primary objective when using Newton's method?","hu":"Mi az elsődleges cél a Newton-módszer használatakor?"},"a":{"en":"To find a solution to the scalar equation $f(x) = 0$.","hu":"Az $f(x) = 0$ skaláris egyenlet megoldásának megtalálása."}},
  {"q":{"en":"Newton's method approximates a nonlinear function $f$ using which specific polynomial?","hu":"A Newton-módszer melyik konkrét polinommal közelíti az $f$ nemlineáris függvényt?"},"a":{"en":"Its first-order Taylor polynomial approximation.","hu":"Az elsőrendű Taylor-polinom közelítésével."}},
  {"q":{"en":"Geometrically, Newton's method finds the root of the _____ line to the graph of $f$ at $p_0$.","hu":"Geometriailag a Newton-módszer az $f$ grafikonjához $p_0$-ban húzott _____ egyenes gyökét keresi meg."},"a":{"en":"Tangent.","hu":"Érintő."}},
  {"q":{"en":"What is the equation of the tangent line to $f$ at the point $p_0$?","hu":"Mi az $f$-hez a $p_0$ pontban húzott érintő egyenlete?"},"a":{"en":"$y = f(p_0) + f'(p_0)(x - p_0)$.","hu":"$y = f(p_0) + f'(p_0)(x - p_0)$."}},
  {"q":{"en":"What is the recursive formula for the Newton-Raphson method?","hu":"Mi a Newton–Raphson-módszer rekurzív képlete?"},"a":{"en":"$p_{k+1} = p_k - \\frac{f(p_k)}{f'(p_k)}$.","hu":"$p_{k+1} = p_k - \\frac{f(p_k)}{f'(p_k)}$."}},
  {"q":{"en":"What essential condition must $f'(p_k)$ satisfy for a Newton iteration step to be defined?","hu":"Milyen lényeges feltételt kell teljesítenie $f'(p_k)$-nak ahhoz, hogy egy Newton-lépés definiált legyen?"},"a":{"en":"The derivative $f'(p_k)$ must not be equal to zero.","hu":"Az $f'(p_k)$ derivált nem lehet nulla."}},
  {"q":{"en":"Besides 'Newton-Raphson', what is another common name for Newton's method?","hu":"A „Newton–Raphson” mellett mi a Newton-módszer másik elterjedt neve?"},"a":{"en":"The tangent method (or érintőmódszer).","hu":"Az érintőmódszer."}},
  {"q":{"en":"In the example $f(x) = e^x - 2\\cos x$, how would you describe the speed of the sequence's convergence to the root?","hu":"Az $f(x) = e^x - 2\\cos x$ példában hogyan írnád le a sorozat gyökhöz való konvergenciasebességét?"},"a":{"en":"The sequence converges very fast.","hu":"A sorozat nagyon gyorsan konvergál."}},
  {"q":{"en":"If $p_0 = 0.1$ for $f(x) = e^x - 2\\cos x$, approximately how many iterations are needed to reach a tolerance of $10^{-5}$?","hu":"Ha $p_0 = 0.1$ az $f(x) = e^x - 2\\cos x$-re, körülbelül hány iteráció kell a $10^{-5}$ tűréshatár eléréséhez?"},"a":{"en":"Five iterations.","hu":"Öt iteráció."}},
  {"q":{"en":"Newton's method is considered a _____ iteration with a specific iteration function $g(x)$.","hu":"A Newton-módszer egy _____ iterációnak tekinthető egy konkrét $g(x)$ iterációs függvénnyel."},"a":{"en":"Fixed-point.","hu":"Fixpont-."}},
  {"q":{"en":"What is the iteration function $g(x)$ used to represent Newton's method as a fixed-point iteration?","hu":"Mi az a $g(x)$ iterációs függvény, amellyel a Newton-módszert fixpont-iterációként ábrázoljuk?"},"a":{"en":"$g(x) = x - \\frac{f(x)}{f'(x)}$.","hu":"$g(x) = x - \\frac{f(x)}{f'(x)}$."}},
  {"q":{"en":"What is the derivative $g'(x)$ of the Newton iteration function $g(x) = x - f(x)/f'(x)$?","hu":"Mi a $g(x) = x - f(x)/f'(x)$ Newton-iterációs függvény $g'(x)$ deriváltja?"},"a":{"en":"$g'(x) = \\frac{f(x)f''(x)}{(f'(x))^2}$.","hu":"$g'(x) = \\frac{f(x)f''(x)}{(f'(x))^2}$."}},
  {"q":{"en":"If $p$ is a root of $f$ such that $f(p) = 0$ and $f'(p) \\neq 0$, what is the value of $g'(p)$?","hu":"Ha $p$ az $f$ olyan gyöke, hogy $f(p) = 0$ és $f'(p) \\neq 0$, mennyi $g'(p)$ értéke?"},"a":{"en":"The value of $g'(p)$ is 0.","hu":"$g'(p)$ értéke 0."}},
  {"q":{"en":"Why does $g'(p) = 0$ at a simple root suggest fast convergence for Newton's method?","hu":"Miért utal $g'(p) = 0$ egy egyszeres gyökben gyors konvergenciára a Newton-módszernél?"},"a":{"en":"Because the derivative of the iteration function is zero at the fixed point, implying local convergence.","hu":"Mert az iterációs függvény deriváltja nulla a fixpontban, ami lokális konvergenciát jelent."}},
  {"q":{"en":"According to Theorem 2.23, what differentiability class is required for $f$ to guarantee local convergence of Newton's method?","hu":"A 2.23. tétel szerint melyik differenciálhatósági osztály kell $f$-re a Newton-módszer lokális konvergenciájának garantálásához?"},"a":{"en":"The function $f$ must be in $C^2[a,b]$.","hu":"Az $f$ függvénynek $C^2[a,b]$-belinek kell lennie."}},
  {"q":{"en":"What are the two conditions on the root $p$ in Theorem 2.23 to ensure local convergence?","hu":"Mi a két feltétel a $p$ gyökre a 2.23. tételben a lokális konvergencia biztosításához?"},"a":{"en":"$f(p) = 0$ and $f'(p) \\neq 0$.","hu":"$f(p) = 0$ és $f'(p) \\neq 0$."}},
  {"q":{"en":"What is the unique root of the function $f(x) = 0.5\\arctan x$?","hu":"Mi az $f(x) = 0.5\\arctan x$ függvény egyetlen gyöke?"},"a":{"en":"$p = 0$.","hu":"$p = 0$."}},
  {"q":{"en":"For $f(x) = 0.5\\arctan x$, the Newton method converges to 0 if the starting point $p_0$ is _____.","hu":"Az $f(x) = 0.5\\arctan x$-re a Newton-módszer 0-hoz konvergál, ha a $p_0$ kezdőpont _____."},"a":{"en":"Close enough to 0 (or $|p_0| < p^*$).","hu":"Elég közel van 0-hoz (vagy $|p_0| < p^*$)."}},
  {"q":{"en":"In the $\\arctan$ example, what is the approximate value of $p^*$ that leads to a periodic sequence?","hu":"Az $\\arctan$ példában mi a periodikus sorozathoz vezető $p^*$ közelítő értéke?"},"a":{"en":"$p^* \\approx 1.3918$.","hu":"$p^* \\approx 1.3918$."}},
  {"q":{"en":"If $p_0 = p^*$ for $f(x) = 0.5\\arctan x$, what specific behavior does the sequence $p_k$ exhibit?","hu":"Ha $p_0 = p^*$ az $f(x) = 0.5\\arctan x$-re, milyen konkrét viselkedést mutat a $p_k$ sorozat?"},"a":{"en":"The sequence is periodic, alternating between $p^*$ and $-p^*$.","hu":"A sorozat periodikus, $p^*$ és $-p^*$ között váltakozik."}},
  {"q":{"en":"If $|p_0| > p^*$ for $f(x) = 0.5\\arctan x$, what happens to the magnitude of the terms $|p_k|$?","hu":"Ha $|p_0| > p^*$ az $f(x) = 0.5\\arctan x$-re, mi történik a tagok $|p_k|$ nagyságával?"},"a":{"en":"The magnitude $|p_k|$ approaches infinity.","hu":"A $|p_k|$ nagyság a végtelenhez tart."}},
  {"q":{"en":"What is a primary disadvantage of Newton's method regarding the formula of $f$?","hu":"Mi a Newton-módszer egyik fő hátránya az $f$ képletével kapcsolatban?"},"a":{"en":"It requires the explicit formula for the derivative $f'(x)$.","hu":"Megköveteli az $f'(x)$ derivált explicit képletét."}},
  {"q":{"en":"Why is Newton's method difficult to apply if $f$ has a very long and complex formula?","hu":"Miért nehéz a Newton-módszert alkalmazni, ha $f$-nek nagyon hosszú és összetett képlete van?"},"a":{"en":"The derivative formula $f'$ may also be extremely long, making evaluation computationally expensive.","hu":"Az $f'$ derivált képlete is rendkívül hosszú lehet, így a kiértékelés számításigényes."}},
  {"q":{"en":"How can a very complex derivative formula affect the numerical accuracy of Newton's method?","hu":"Hogyan befolyásolhatja egy nagyon összetett derivált-képlet a Newton-módszer numerikus pontosságát?"},"a":{"en":"Performing many arithmetic operations increases the chance of accumulating rounding errors.","hu":"Sok aritmetikai művelet elvégzése növeli a kerekítési hibák felhalmozódásának esélyét."}},
  {"q":{"en":"In what scenario is Newton's method unusable even if $f(x)$ values can be calculated precisely?","hu":"Milyen helyzetben használhatatlan a Newton-módszer akkor is, ha az $f(x)$ értékek pontosan kiszámíthatók?"},"a":{"en":"When there is no formula for $f$ available to compute the derivative $f'(x)$.","hu":"Amikor nincs $f$-re képlet, amelyből az $f'(x)$ derivált kiszámítható."}},
  {"q":{"en":"Which calculus rule is used to derive the formula for $g'(x)$ in Newton's method?","hu":"Melyik analízisszabállyal vezetjük le a $g'(x)$ képletét a Newton-módszerben?"},"a":{"en":"The quotient rule.","hu":"A hányadosszabállyal."}},
  {"q":{"en":"In Newton's method, what does a very small value of $f(p_k)$ usually indicate?","hu":"A Newton-módszerben mit jelez általában az $f(p_k)$ nagyon kis értéke?"},"a":{"en":"That $p_k$ is very close to the root of the function.","hu":"Hogy $p_k$ nagyon közel van a függvény gyökéhez."}},
  {"q":{"en":"The distance between consecutive terms $|p_{k+1} - p_k|$ being less than $TOL$ is a common _____.","hu":"Az egymást követő tagok $|p_{k+1} - p_k|$ távolsága $TOL$-nál kisebb volta egy gyakori _____."},"a":{"en":"Stopping criterion (or termination condition).","hu":"Leállási feltétel."}},
  {"q":{"en":"What happens to the Newton sequence if $f'(p_{14}) = 0$ is encountered on a computer?","hu":"Mi történik a Newton-sorozattal, ha számítógépen $f'(p_{14}) = 0$ adódik?"},"a":{"en":"The program terminates with an error message.","hu":"A program hibaüzenettel leáll."}},
  {"q":{"en":"Taylor's Theorem: $f(x) = T_n(x) + \\dots$","hu":"Taylor-tétel: $f(x) = T_n(x) + \\dots$"},"a":{"en":"The term is the remainder (or error) term $\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}$.","hu":"A tag a maradéktag (hibatag) $\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}$."}},
  {"q":{"en":"The sequence $p_k$ generated by Newton's method is often called a _____ sequence.","hu":"A Newton-módszer által generált $p_k$ sorozatot gyakran _____ sorozatnak nevezik."},"a":{"en":"Recursive (or iterative).","hu":"Rekurzív (iteratív)."}},
  {"q":{"en":"For $f(x) = 0.5\\arctan x$, if $|p_0| > p^*$, how do the signs of $p_k$ and $p_{k+1}$ relate?","hu":"Az $f(x) = 0.5\\arctan x$-re, ha $|p_0| > p^*$, hogyan viszonyul $p_k$ és $p_{k+1}$ előjele?"},"a":{"en":"The signs alternate, meaning $p_k \\cdot p_{k+1} < 0$ for all $k$.","hu":"Az előjelek váltakoznak, azaz $p_k \\cdot p_{k+1} < 0$ minden $k$-ra."}},
  {"q":{"en":"True or False: Newton's method always converges to a root regardless of the initial value $p_0$.","hu":"Igaz vagy hamis: A Newton-módszer mindig gyökhöz konvergál a $p_0$ kezdőértéktől függetlenül."},"a":{"en":"False; it only converges locally if $p_0$ is close enough to the root.","hu":"Hamis; csak lokálisan konvergál, ha $p_0$ elég közel van a gyökhöz."}},
  {"q":{"en":"What is the derivative $f'(0)$ for the function $f(x) = 0.5\\arctan x$?","hu":"Mennyi az $f'(0)$ derivált az $f(x) = 0.5\\arctan x$ függvényre?"},"a":{"en":"$0.5$.","hu":"$0.5$."}},
  {"q":{"en":"How is the interval $\\langle x, x_0 \\rangle$ defined in Taylor's Theorem?","hu":"Hogyan definiáljuk a $\\langle x, x_0 \\rangle$ intervallumot a Taylor-tételben?"},"a":{"en":"It is the interval $(\\min\\{x, x_0\\}, \\max\\{x, x_0\\})$.","hu":"A $(\\min\\{x, x_0\\}, \\max\\{x, x_0\\})$ intervallum."}},
  {"q":{"en":"Which exercise suggests deriving an iteration to calculate the $k$-th root of a number $a$?","hu":"Melyik feladat javasolja egy iteráció levezetését egy $a$ szám $k$-adik gyökének kiszámítására?"},"a":{"en":"Exercise 3 of Section 2.5.","hu":"A 2.5. fejezet 3. feladata."}},
  {"q":{"en":"In the $e^x - 2\\cos x$ example, what was the value of $f(p_k)$ at $k=0$?","hu":"Az $e^x - 2\\cos x$ példában mennyi volt $f(p_k)$ értéke $k=0$-nál?"},"a":{"en":"$-8.8484 \\times 10^{-1}$.","hu":"$-8.8484 \\times 10^{-1}$."}},
  {"q":{"en":"What is the value of $f(p_5)$ for the $e^x - 2\\cos x$ example with $TOL = 10^{-5}$?","hu":"Mennyi $f(p_5)$ értéke az $e^x - 2\\cos x$ példában $TOL = 10^{-5}$ mellett?"},"a":{"en":"$3.5207 \\times 10^{-14}$.","hu":"$3.5207 \\times 10^{-14}$."}},
  {"q":{"en":"If $f$ is only available as a numerical 'black box', which part of the Newton formula is missing?","hu":"Ha $f$ csak numerikus „fekete dobozként” áll rendelkezésre, a Newton-képlet melyik része hiányzik?"},"a":{"en":"The derivative formula $f'(x)$.","hu":"Az $f'(x)$ derivált képlete."}},
  {"q":{"en":"What property of the tangent line helps us find $p_{k+1}$?","hu":"Az érintő melyik tulajdonsága segít megtalálni $p_{k+1}$-et?"},"a":{"en":"The $x$-intercept of the tangent line at $(p_k, f(p_k))$.","hu":"A $(p_k, f(p_k))$-beli érintő $x$-tengelymetszete."}},
  {"q":{"en":"Term: Newton-Raphson Method","hu":"Fogalom: Newton–Raphson-módszer"},"a":{"en":"Definition: An iterative root-finding technique using the formula $p_{k+1} = p_k - f(p_k)/f'(p_k)$.","hu":"Definíció: Iteratív gyökkereső technika a $p_{k+1} = p_k - f(p_k)/f'(p_k)$ képlettel."}},
  {"q":{"en":"Why is $f'(p) \\neq 0$ a necessary condition in the convergence theorem?","hu":"Miért szükséges feltétel $f'(p) \\neq 0$ a konvergenciatételben?"},"a":{"en":"To ensure the iteration function $g(x)$ is well-defined and its derivative $g'(p) = 0$ is valid.","hu":"Hogy a $g(x)$ iterációs függvény jól definiált legyen, és a $g'(p) = 0$ derivált érvényes legyen."}},
  {"q":{"en":"What does the symbol $C^{n+1}[a,b]$ represent?","hu":"Mit jelöl a $C^{n+1}[a,b]$ szimbólum?"},"a":{"en":"The set of functions with $n+1$ continuous derivatives on the interval $[a,b]$.","hu":"Az $[a,b]$ intervallumon $n+1$ folytonos deriválttal rendelkező függvények halmazát."}},
  {"q":{"en":"Concept: Local Convergence","hu":"Fogalom: Lokális konvergencia"},"a":{"en":"Definition: The property that an iterative method will converge to a solution provided the starting value is sufficiently close to that solution.","hu":"Definíció: Az a tulajdonság, hogy egy iteratív módszer a megoldáshoz konvergál, feltéve, hogy a kezdőérték elég közel van ahhoz a megoldáshoz."}},
  {"q":{"en":"In the $\\arctan$ example table, what is the value of $f(p_k)$ for $k \\ge 9$?","hu":"Az $\\arctan$ példa táblájában mennyi $f(p_k)$ értéke $k \\ge 9$-re?"},"a":{"en":"It remains approximately $0.7853982$ (or $-0.7853982$).","hu":"Körülbelül $0.7853982$ (vagy $-0.7853982$) marad."}},
  {"q":{"en":"Newton's method belongs to which broader class of mathematical methods?","hu":"Melyik tágabb matematikai módszercsoportba tartozik a Newton-módszer?"},"a":{"en":"Numerical analysis (or root-finding algorithms).","hu":"A numerikus analízisbe (gyökkereső algoritmusok)."}},
  {"q":{"en":"What is the linear equation solved in each step of Newton's method to find $x$?","hu":"Milyen lineáris egyenletet oldunk meg a Newton-módszer minden lépésében $x$ megtalálásához?"},"a":{"en":"$f(p_0) + f'(p_0)(x - p_0) = 0$.","hu":"$f(p_0) + f'(p_0)(x - p_0) = 0$."}},
  {"q":{"en":"In Taylor's Theorem, $T_n(x)$ is called the $n$-th degree Taylor _____.","hu":"A Taylor-tételben a $T_n(x)$ neve $n$-edfokú Taylor-_____."},"a":{"en":"Polynomial.","hu":"Polinom."}},
  {"q":{"en":"What is the sign of the error term in Newton's method related to?","hu":"Mihez kapcsolódik a Newton-módszerbeli hibatag előjele?"},"a":{"en":"The second derivative $f''(\\xi)$ and the distance from the root.","hu":"A második deriválthoz $f''(\\xi)$ és a gyöktől való távolsághoz."}},
  {"q":{"en":"Which example illustrates that Newton's method can diverge if the starting point is too far from the root?","hu":"Melyik példa szemlélteti, hogy a Newton-módszer divergálhat, ha a kezdőpont túl messze van a gyöktől?"},"a":{"en":"The $f(x) = 0.5\\arctan x$ example.","hu":"Az $f(x) = 0.5\\arctan x$ példa."}},
  {"q":{"en":"How does the complexity of $f'$ affect the number of arithmetic operations?","hu":"Hogyan befolyásolja az $f'$ összetettsége az aritmetikai műveletek számát?"},"a":{"en":"A more complex $f'$ formula requires more arithmetic operations to evaluate.","hu":"Egy összetettebb $f'$ képlet több aritmetikai műveletet igényel a kiértékeléshez."}},
  {"q":{"en":"According to the source, what is one general approach in numerical analysis regarding 'simpler' problems?","hu":"A forrás szerint mi az egyik általános megközelítés a numerikus analízisben az „egyszerűbb” feladatokkal kapcsolatban?"},"a":{"en":"Replace a problem with a 'simpler' one that is 'close' to the original and solve the simpler one.","hu":"Helyettesítsünk egy feladatot egy „egyszerűbbel”, amely „közel” van az eredetihez, és oldjuk meg az egyszerűbbet."}},
  {"q":{"en":"The fixed-point theorem implies convergence if $|g'(p)|$ is _____.","hu":"A fixponttétel konvergenciát jelent, ha $|g'(p)|$ _____."},"a":{"en":"Less than 1 (specifically, $g'(p) = 0$ ensures fast local convergence).","hu":"Kisebb 1-nél (konkrétan $g'(p) = 0$ gyors lokális konvergenciát biztosít)."}},
  {"q":{"en":"What is the coefficient of the $(x-x_0)^2$ term in the Taylor polynomial $T_n(x)$?","hu":"Mi a $(x-x_0)^2$ tag együtthatója a $T_n(x)$ Taylor-polinomban?"},"a":{"en":"$\\frac{f''(x_0)}{2!}$ (or $\\frac{f''(x_0)}{2}$).","hu":"$\\frac{f''(x_0)}{2!}$ (vagy $\\frac{f''(x_0)}{2}$)."}},
  {"q":{"en":"In the $\\arctan$ case, what is the behavior of the sequence if $|p_0| < p^*$?","hu":"Az $\\arctan$ esetben hogyan viselkedik a sorozat, ha $|p_0| < p^*$?"},"a":{"en":"The sequence $p_k$ converges to 0.","hu":"A $p_k$ sorozat 0-hoz konvergál."}},
  {"q":{"en":"Formula: $g'(x) = 1 - \\frac{(f'(x))^2 - f(x)f''(x)}{(f'(x))^2}$. Simplify this.","hu":"Képlet: $g'(x) = 1 - \\frac{(f'(x))^2 - f(x)f''(x)}{(f'(x))^2}$. Egyszerűsítsd."},"a":{"en":"$g'(x) = \\frac{f(x)f''(x)}{(f'(x))^2}$.","hu":"$g'(x) = \\frac{f(x)f''(x)}{(f'(x))^2}$."}}
]
