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
  {"q":"According to Taylor's Theorem, what continuity condition must $f$ satisfy on $[a,b]$ for an $n$-th order expansion?","a":"The function must be $n+1$ times continuously differentiable, denoted as $f \\in C^{n+1}[a,b]$."},
  {"q":"In Taylor's Theorem, where is the point $\\xi$ located relative to $x$ and $x_0$?","a":"It is located in the open interval $(\\min\\{x, x_0\\}, \\max\\{x, x_0\\})$."},
  {"q":"What is the mathematical form of the error term (remainder) in Taylor's Theorem?","a":"The error term is $\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}$."},
  {"q":"Write the first three terms of the Taylor polynomial $T_n(x)$ centered at $x_0$.","a":"$T_n(x) = f(x_0) + f'(x_0)(x-x_0) + \\frac{f''(x_0)}{2}(x-x_0)^2 + \\dots$"},
  {"q":"What is the primary objective when using Newton's method?","a":"To find a solution to the scalar equation $f(x) = 0$."},
  {"q":"Newton's method approximates a nonlinear function $f$ using which specific polynomial?","a":"Its first-order Taylor polynomial approximation."},
  {"q":"Geometrically, Newton's method finds the root of the _____ line to the graph of $f$ at $p_0$.","a":"Tangent."},
  {"q":"What is the equation of the tangent line to $f$ at the point $p_0$?","a":"$y = f(p_0) + f'(p_0)(x - p_0)$."},
  {"q":"What is the recursive formula for the Newton-Raphson method?","a":"$p_{k+1} = p_k - \\frac{f(p_k)}{f'(p_k)}$."},
  {"q":"What essential condition must $f'(p_k)$ satisfy for a Newton iteration step to be defined?","a":"The derivative $f'(p_k)$ must not be equal to zero."},
  {"q":"Besides 'Newton-Raphson', what is another common name for Newton's method?","a":"The tangent method (or érintőmódszer)."},
  {"q":"In the example $f(x) = e^x - 2\\cos x$, how would you describe the speed of the sequence's convergence to the root?","a":"The sequence converges very fast."},
  {"q":"If $p_0 = 0.1$ for $f(x) = e^x - 2\\cos x$, approximately how many iterations are needed to reach a tolerance of $10^{-5}$?","a":"Five iterations."},
  {"q":"Newton's method is considered a _____ iteration with a specific iteration function $g(x)$.","a":"Fixed-point."},
  {"q":"What is the iteration function $g(x)$ used to represent Newton's method as a fixed-point iteration?","a":"$g(x) = x - \\frac{f(x)}{f'(x)}$."},
  {"q":"What is the derivative $g'(x)$ of the Newton iteration function $g(x) = x - f(x)/f'(x)$?","a":"$g'(x) = \\frac{f(x)f''(x)}{(f'(x))^2}$."},
  {"q":"If $p$ is a root of $f$ such that $f(p) = 0$ and $f'(p) \\neq 0$, what is the value of $g'(p)$?","a":"The value of $g'(p)$ is 0."},
  {"q":"Why does $g'(p) = 0$ at a simple root suggest fast convergence for Newton's method?","a":"Because the derivative of the iteration function is zero at the fixed point, implying local convergence."},
  {"q":"According to Theorem 2.23, what differentiability class is required for $f$ to guarantee local convergence of Newton's method?","a":"The function $f$ must be in $C^2[a,b]$."},
  {"q":"What are the two conditions on the root $p$ in Theorem 2.23 to ensure local convergence?","a":"$f(p) = 0$ and $f'(p) \\neq 0$."},
  {"q":"What is the unique root of the function $f(x) = 0.5\\arctan x$?","a":"$p = 0$."},
  {"q":"For $f(x) = 0.5\\arctan x$, the Newton method converges to 0 if the starting point $p_0$ is _____.","a":"Close enough to 0 (or $|p_0| < p^*$)."},
  {"q":"In the $\\arctan$ example, what is the approximate value of $p^*$ that leads to a periodic sequence?","a":"$p^* \\approx 1.3918$."},
  {"q":"If $p_0 = p^*$ for $f(x) = 0.5\\arctan x$, what specific behavior does the sequence $p_k$ exhibit?","a":"The sequence is periodic, alternating between $p^*$ and $-p^*$."},
  {"q":"If $|p_0| > p^*$ for $f(x) = 0.5\\arctan x$, what happens to the magnitude of the terms $|p_k|$?","a":"The magnitude $|p_k|$ approaches infinity."},
  {"q":"What is a primary disadvantage of Newton's method regarding the formula of $f$?","a":"It requires the explicit formula for the derivative $f'(x)$."},
  {"q":"Why is Newton's method difficult to apply if $f$ has a very long and complex formula?","a":"The derivative formula $f'$ may also be extremely long, making evaluation computationally expensive."},
  {"q":"How can a very complex derivative formula affect the numerical accuracy of Newton's method?","a":"Performing many arithmetic operations increases the chance of accumulating rounding errors."},
  {"q":"In what scenario is Newton's method unusable even if $f(x)$ values can be calculated precisely?","a":"When there is no formula for $f$ available to compute the derivative $f'(x)$."},
  {"q":"Which calculus rule is used to derive the formula for $g'(x)$ in Newton's method?","a":"The quotient rule."},
  {"q":"In Newton's method, what does a very small value of $f(p_k)$ usually indicate?","a":"That $p_k$ is very close to the root of the function."},
  {"q":"The distance between consecutive terms $|p_{k+1} - p_k|$ being less than $TOL$ is a common _____.","a":"Stopping criterion (or termination condition)."},
  {"q":"What happens to the Newton sequence if $f'(p_{14}) = 0$ is encountered on a computer?","a":"The program terminates with an error message."},
  {"q":"Taylor's Theorem: $f(x) = T_n(x) + \\dots$","a":"The term is the remainder (or error) term $\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}$."},
  {"q":"The sequence $p_k$ generated by Newton's method is often called a _____ sequence.","a":"Recursive (or iterative)."},
  {"q":"For $f(x) = 0.5\\arctan x$, if $|p_0| > p^*$, how do the signs of $p_k$ and $p_{k+1}$ relate?","a":"The signs alternate, meaning $p_k \\cdot p_{k+1} < 0$ for all $k$."},
  {"q":"True or False: Newton's method always converges to a root regardless of the initial value $p_0$.","a":"False; it only converges locally if $p_0$ is close enough to the root."},
  {"q":"What is the derivative $f'(0)$ for the function $f(x) = 0.5\\arctan x$?","a":"$0.5$."},
  {"q":"How is the interval $\\langle x, x_0 \\rangle$ defined in Taylor's Theorem?","a":"It is the interval $(\\min\\{x, x_0\\}, \\max\\{x, x_0\\})$."},
  {"q":"Which exercise suggests deriving an iteration to calculate the $k$-th root of a number $a$?","a":"Exercise 3 of Section 2.5."},
  {"q":"In the $e^x - 2\\cos x$ example, what was the value of $f(p_k)$ at $k=0$?","a":"$-8.8484 \\times 10^{-1}$."},
  {"q":"What is the value of $f(p_5)$ for the $e^x - 2\\cos x$ example with $TOL = 10^{-5}$?","a":"$3.5207 \\times 10^{-14}$."},
  {"q":"If $f$ is only available as a numerical 'black box', which part of the Newton formula is missing?","a":"The derivative formula $f'(x)$."},
  {"q":"What property of the tangent line helps us find $p_{k+1}$?","a":"The $x$-intercept of the tangent line at $(p_k, f(p_k))$."},
  {"q":"Term: Newton-Raphson Method","a":"Definition: An iterative root-finding technique using the formula $p_{k+1} = p_k - f(p_k)/f'(p_k)$."},
  {"q":"Why is $f'(p) \\neq 0$ a necessary condition in the convergence theorem?","a":"To ensure the iteration function $g(x)$ is well-defined and its derivative $g'(p) = 0$ is valid."},
  {"q":"What does the symbol $C^{n+1}[a,b]$ represent?","a":"The set of functions with $n+1$ continuous derivatives on the interval $[a,b]$."},
  {"q":"Concept: Local Convergence","a":"Definition: The property that an iterative method will converge to a solution provided the starting value is sufficiently close to that solution."},
  {"q":"In the $\\arctan$ example table, what is the value of $f(p_k)$ for $k \\ge 9$?","a":"It remains approximately $0.7853982$ (or $-0.7853982$)."},
  {"q":"Newton's method belongs to which broader class of mathematical methods?","a":"Numerical analysis (or root-finding algorithms)."},
  {"q":"What is the linear equation solved in each step of Newton's method to find $x$?","a":"$f(p_0) + f'(p_0)(x - p_0) = 0$."},
  {"q":"In Taylor's Theorem, $T_n(x)$ is called the $n$-th degree Taylor _____.","a":"Polynomial."},
  {"q":"What is the sign of the error term in Newton's method related to?","a":"The second derivative $f''(\\xi)$ and the distance from the root."},
  {"q":"Which example illustrates that Newton's method can diverge if the starting point is too far from the root?","a":"The $f(x) = 0.5\\arctan x$ example."},
  {"q":"How does the complexity of $f'$ affect the number of arithmetic operations?","a":"A more complex $f'$ formula requires more arithmetic operations to evaluate."},
  {"q":"According to the source, what is one general approach in numerical analysis regarding 'simpler' problems?","a":"Replace a problem with a 'simpler' one that is 'close' to the original and solve the simpler one."},
  {"q":"The fixed-point theorem implies convergence if $|g'(p)|$ is _____.","a":"Less than 1 (specifically, $g'(p) = 0$ ensures fast local convergence)."},
  {"q":"What is the coefficient of the $(x-x_0)^2$ term in the Taylor polynomial $T_n(x)$?","a":"$\\frac{f''(x_0)}{2!}$ (or $\\frac{f''(x_0)}{2}$)."},
  {"q":"In the $\\arctan$ case, what is the behavior of the sequence if $|p_0| < p^*$?","a":"The sequence $p_k$ converges to 0."},
  {"q":"Formula: $g'(x) = 1 - \\frac{(f'(x))^2 - f(x)f''(x)}{(f'(x))^2}$. Simplify this.","a":"$g'(x) = \\frac{f(x)f''(x)}{(f'(x))^2}$."}
]
