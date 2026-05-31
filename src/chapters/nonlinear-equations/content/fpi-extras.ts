// Auto-generated learning aids for '2.2 (Fixed-Point Iteration).
// Glossary bilingual; flashcards from 02_01 FPI/flashcards.csv (EN).
import type { GlossaryEntry, Flashcard } from '../components/widgets/decks'

export const FPI_GLOSSARY: GlossaryEntry[] = [
  {
    "term": {
      "en": "$m$-step iteration ($m$-order recursion)",
      "hu": "$m$-lépéses iteráció ($m$-edrendű rekurzió)"
    },
    "def": {
      "en": "A recursion $p_{k+1}=h(p_k,p_{k-1},\\dots,p_{k-m+1})$ that computes each term from the $m$ preceding ones; it needs $m$ initial values $p_0,\\dots,p_{m-1}$.",
      "hu": "A $p_{k+1}=h(p_k,p_{k-1},\\dots,p_{k-m+1})$ rekurzió, amely minden tagot az előző $m$ tagból számol; $m$ kezdőérték kell hozzá: $p_0,\\dots,p_{m-1}$."
    }
  },
  {
    "term": {
      "en": "Fixed-point iteration",
      "hu": "Fixpont iteráció"
    },
    "def": {
      "en": "The one-step recursion $p_{k+1}=g(p_k)$ from a starting value $p_0\\in I$, with $g\\colon I\\to\\mathbb{R}$.",
      "hu": "Az egylépéses $p_{k+1}=g(p_k)$ rekurzió a $p_0\\in I$ kezdőértékből, ahol $g\\colon I\\to\\mathbb{R}$."
    }
  },
  {
    "term": {
      "en": "Fixed point",
      "hu": "Fixpont"
    },
    "def": {
      "en": "A value $p$ with $g(p)=p$ — geometrically the intersection of $y=g(x)$ and $y=x$. The limit of a convergent fixed-point iteration of a continuous $g$ (Thm 2.11).",
      "hu": "Olyan $p$ érték, amelyre $g(p)=p$ — geometriailag az $y=g(x)$ és $y=x$ metszéspontja. Folytonos $g$ konvergens fixpont iterációjának határértéke (2.11. tétel)."
    }
  },
  {
    "term": {
      "en": "Stair-step (cobweb) diagram",
      "hu": "Lépcsős (pókháló) diagram"
    },
    "def": {
      "en": "A plot of $y=g(x)$ and $y=x$ showing the iteration's path: vertical to the curve, horizontal to the diagonal, repeat. A convergent iteration spirals or steps onto the fixed point.",
      "hu": "Az $y=g(x)$ és $y=x$ ábrája, amely az iteráció útját mutatja: függőlegesen a görbéhez, vízszintesen az átlóhoz, ismételve. Konvergens iteráció a fixpontra spirálozik vagy lépeget."
    }
  },
  {
    "term": {
      "en": "Lipschitz continuity / Lipschitz constant",
      "hu": "Lipschitz-folytonosság / Lipschitz-konstans"
    },
    "def": {
      "en": "$g$ is Lipschitz continuous on $I$ if $|g(x)-g(y)|\\le c\\,|x-y|$ for all $x,y\\in I$; the smallest such $c\\ge 0$ is the Lipschitz constant. For $g\\in C^1[a,b]$ one may take $c=\\max|g'|$.",
      "hu": "$g$ Lipschitz-folytonos $I$-n, ha $|g(x)-g(y)|\\le c\\,|x-y|$ minden $x,y\\in I$-re; a legkisebb ilyen $c\\ge 0$ a Lipschitz-konstans. $g\\in C^1[a,b]$ esetén $c=\\max|g'|$ választható."
    }
  },
  {
    "term": {
      "en": "Contraction",
      "hu": "Kontrakció"
    },
    "def": {
      "en": "A function that is Lipschitz continuous with constant $0\\le c<1$. By the contraction principle (Thm 2.14) it has a unique fixed point reached from any starting value.",
      "hu": "Olyan függvény, amely $0\\le c<1$ konstanssal Lipschitz-folytonos. A kontrakciós elv (2.14. tétel) szerint egyetlen fixpontja van, amelyet bármely kezdőértékből elér."
    }
  },
  {
    "term": {
      "en": "A priori / a posteriori error bound",
      "hu": "A priori / a posteriori hibakorlát"
    },
    "def": {
      "en": "For a contraction: $|p_k-p|\\le c^k|p_0-p|$ (a priori, Eq. 2.1) and $|p_k-p|\\le \\dfrac{c^k}{1-c}|p_1-p_0|$ (a posteriori, Eq. 2.2) — the latter is computable from the first step.",
      "hu": "Kontrakcióra: $|p_k-p|\\le c^k|p_0-p|$ (a priori, 2.1) és $|p_k-p|\\le \\dfrac{c^k}{1-c}|p_1-p_0|$ (a posteriori, 2.2) — az utóbbi az első lépésből kiszámolható."
    }
  },
  {
    "term": {
      "en": "Local convergence",
      "hu": "Lokális konvergencia"
    },
    "def": {
      "en": "The iteration converges to $p$ only for starting values within some $\\delta$ of $p$. Guaranteed when $g\\in C^1$ and $|g'(p)|<1$ (Thm 2.15).",
      "hu": "Az iteráció csak a $p$-től $\\delta$-nál közelebbi kezdőértékekre konvergál $p$-hez. Garantált, ha $g\\in C^1$ és $|g'(p)|<1$ (2.15. tétel)."
    }
  },
  {
    "term": {
      "en": "Global convergence",
      "hu": "Globális konvergencia"
    },
    "def": {
      "en": "The iteration converges to the fixed point from every admissible starting value, as the contraction principle guarantees on $[a,b]$.",
      "hu": "Az iteráció minden megengedett kezdőértékből a fixponthoz konvergál, ahogy a kontrakciós elv garantálja $[a,b]$-n."
    }
  }
]

export const FPI_FLASHCARDS: Flashcard[] = [
  {"q":"How is an $m$-step iteration defined in numerical analysis?","a":"$p_{k+1} = h(p_k, p_{k-1}, \\ldots, p_{k-m+1})$ for $k \\geq m-1$."},
  {"q":"How many initial values are required to uniquely define an $m$-step iteration sequence?","a":"$m$ initial values ($p_0, p_1, \\dots, p_{m-1}$)."},
  {"q":"What is the specific name for a one-step iteration where $p_{k+1} = g(p_k)$?","a":"Fixed-point iteration."},
  {"q":"What equation defines a fixed point $p$ of a function $g$?","a":"$g(p) = p$."},
  {"q":"In a graphical representation of fixed-point iteration, the fixed point is the intersection of $y = g(x)$ and which line?","a":"The line $y = x$."},
  {"q":"According to Theorem 2.11, if the sequence $p_{k+1} = g(p_k)$ converges to $p$, what property must $g$ have to guarantee $p = g(p)$?","a":"The function $g$ must be continuous."},
  {"q":"If $g(x) = 2x$ and $p_0 = 1$, to what value does the fixed-point iteration sequence converge?","a":"Infinity ($\\infty$)."},
  {"q":"Why does the fixed-point iteration for $g(x) = -x$ with $p_0 = 1$ fail to converge?","a":"The sequence oscillates between $1$ and $-1$."},
  {"q":"What does the notation $C[a,b]$ represent in numerical analysis?","a":"The set of all continuous functions defined on the interval $[a,b]$."},
  {"q":"What does the notation $C^1[a,b]$ represent?","a":"The set of all continuously differentiable functions on the interval $[a,b]$."},
  {"q":"According to Lagrange's Mean Value Theorem, if $f \\in C^1[a,b]$, there exists a $\\xi \\in (a,b)$ such that $f(b) - f(a) = \\dots$?","a":"$f'(\\xi)(b - a)$."},
  {"q":"What condition on the interval mapping of a continuous function $g$ ensures the existence of at least one fixed point?","a":"$g$ must map the interval $[a,b]$ into itself ($g: [a,b] \\to [a,b]$)."},
  {"q":"If $g$ is differentiable on $(a,b)$ and $|g'(x)| \\leq c < 1$, what can be said about the number of fixed points in $[a,b]$?","a":"The fixed point is unique."},
  {"q":"In the proof of the existence of a fixed point for $g: [a,b] \\to [a,b]$, which calculus theorem is applied to $f(x) = g(x) - x$?","a":"The Intermediate Value Theorem."},
  {"q":"What is the primary error estimate (formula 1) for the fixed-point iteration relative to the initial error $|p_0 - p|$?","a":"$|p_k - p| \\leq c^k |p_0 - p|$."},
  {"q":"What is the error estimate (formula 2) for $|p_k - p|$ that only uses the first two terms of the sequence ($p_0, p_1$)?","a":"$|p_k - p| \\leq \\frac{c^k}{1 - c} |p_1 - p_0|$."},
  {"q":"The constant $c$ in $|g(x) - g(y)| \\leq c|x - y|$ is known as the _____.","a":"Lipschitz constant."},
  {"q":"A function $g$ is called a _____ if it is Lipschitz continuous with a constant $0 \\leq c < 1$.","a":"Contraction."},
  {"q":"If $g \\in C^1[a,b]$, how is the Lipschitz constant $c$ typically calculated?","a":"$c = \\max \\{ |g'(x)| : x \\in [a,b] \\}$."},
  {"q":"Is it possible for a function to be Lipschitz continuous but not differentiable? Provide the example from the text.","a":"Yes; $g(x) = |x|$ is Lipschitz continuous but not differentiable at the origin."},
  {"q":"What is the difference between global and local convergence of an iterative method?","a":"Global convergence occurs for any initial value, while local convergence requires the initial value to be within a distance $\\delta$ of the solution."},
  {"q":"What condition on the derivative of $g$ at fixed point $p$ ensures local convergence?","a":"$|g'(p)| < 1$."},
  {"q":"If $0 < g'(p) < 1$, how does the fixed-point iteration sequence approach the fixed point $p$?","a":"Monotonically (the stair-step diagram approaches from one side)."},
  {"q":"If $-1 < g'(p) < 0$, what is the geometric characteristic of the Cobweb diagram?","a":"It spirals toward the fixed point."},
  {"q":"What happens to the fixed-point iteration if $|g'(p)| > 1$ and $p_0 \\neq p$?","a":"The sequence diverges (moves away from the fixed point)."},
  {"q":"How is a 'stair-step diagram' constructed starting from $(p_0, 0)$?","a":"Draw a vertical line to $(p_0, g(p_0))$, then a horizontal line to the line $y=x$ at $(p_1, p_1)$."},
  {"q":"The fixed-point theorem is often referred to in broader mathematical analysis as the _____ Principle.","a":"Contraction Mapping (or Contraction Principle)."},
  {"q":"Under the conditions of Theorem 2.15 ($|g'(p)| < 1$), why is there a $\\delta > 0$ such that the function is a contraction on $[p - \\delta, p + \\delta]$?","a":"Because the derivative $g'$ is continuous."},
  {"q":"In the proof for the second error estimate, $|p_k - p_m| \\leq \\frac{c^k}{1-c} |p_1 - p_0|$, what happens to $m$ to derive the final formula?","a":"$m$ tends to infinity ($\\infty$)."},
  {"q":"If a sequence $p_k$ is generated by $p_{k+1} = g(p_k)$, what does $|p_k - p|$ represent?","a":"The error of the $k$-th approximation."},
  {"q":"Why is the second error estimate $|p_k - p| \\leq \\frac{c^k}{1-c} |p_1 - p_0|$ often more useful in practice than the first?","a":"It can be evaluated without knowing the exact fixed point $p$."},
  {"q":"What is a 'Cobweb diagram'?","a":"A visual tool used to see the behavior of a fixed-point iteration by plotting $y=g(x)$ and $y=x$."},
  {"q":"If $g'(p) < -1$, how does the sequence behave near the fixed point?","a":"It oscillates and diverges (moves away spirally)."},
  {"q":"If $g'(p) > 1$, how does the sequence behave near the fixed point?","a":"It diverges monotonically."},
  {"q":"For the function $g(x) = \\sqrt{1 + x^2}$, the derivative $|g'(x)|$ is always less than $1$, yet it has no fixed point. Which condition of Theorem 2.12 does it violate?","a":"It does not map a closed, bounded interval $[a,b]$ into itself."},
  {"q":"What is the relationship between Lipschitz continuity and standard continuity?","a":"Lipschitz continuity implies standard continuity."},
  {"q":"In Theorem 2.13, why does $|p_k - p| \\leq c^k |p_0 - p|$ imply convergence if $c < 1$?","a":"As $k \\to \\infty$, $c^k \\to 0$, forcing the error to zero."},
  {"q":"In the proof of uniqueness, the difference $|p - q|$ is shown to be $\\leq c|p - q|$. Why does $c < 1$ force $p = q$?","a":"Because a positive distance cannot be less than or equal to a smaller fraction of itself."},
  {"q":"What property of $g$ on the interval $[a,b]$ ensures that the sequence $p_k$ stays within that interval?","a":"The property that $g$ maps $[a,b]$ into $[a,b]$."},
  {"q":"Term: $n$-step iteration","a":"Definition: A recursion where each new term is determined by the $n$ preceding terms. Example: $p_{k+1} = h(p_k, p_{k-1})$."},
  {"q":"What algebraic step is usually the first in solving $f(x) = 0$ via fixed-point iteration?","a":"Rewriting the equation into the form $x = g(x)$."},
  {"q":"What mathematical tool is used to prove $|g(p_{k-1}) - g(p)| \\leq c|p_{k-1} - p|$ in the Fixed-Point Theorem?","a":"Lagrange's Mean Value Theorem."},
  {"q":"True or False: If a fixed-point iteration converges, the limit must be a fixed point of $g$, provided $g$ is continuous.","a":"True."},
  {"q":"How does the speed of convergence in fixed-point iteration relate to the Lipschitz constant $c$?","a":"A smaller $c$ results in faster convergence."},
  {"q":"What can be inferred about $g$ if it is 'piecewise continuously differentiable'?","a":"It is Lipschitz continuous."},
  {"q":"Formula: $|g'(x)| \\leq c$ for $c \\in [0, 1)$","a":"Purpose: This is the sufficient condition for the uniqueness of a fixed point and the convergence of the iteration."},
  {"q":"What is the 'domain' requirement for $g$ in the local convergence theorem (Theorem 2.15)?","a":"$g \\in C^1[a,b]$ and the fixed point $p$ must be in the open interval $(a,b)$."},
  {"q":"If the fixed-point iteration sequence is $p_k = 2^k$, why is the limit not considered a fixed point in the standard interval sense?","a":"Because the limit is infinite, and fixed points are typically sought within finite intervals $[a,b]$."},
  {"q":"Concept: Global Convergence","a":"Definition: An iterative method where the sequence converges to the solution regardless of the initial starting point $p_0$."},
  {"q":"In the context of the Mean Value Theorem, if $f(x) = x^2$ on $[0, 2]$, for what value of $\\xi$ does $f'(\\xi) = \\frac{f(2)-f(0)}{2-0}$?","a":"$\\xi = 1$."},
  {"q":"What is the geometric meaning of $f'(\\xi) = \\frac{f(b)-f(a)}{b-a}$?","a":"The tangent line at $\\xi$ is parallel to the secant line passing through $(a, f(a))$ and $(b, f(b))$."},
  {"q":"What is the primary visual difference between the convergence of $g'(p) = 0.5$ and $g'(p) = -0.5$?","a":"The first is a 'step' approach (monotone), the second is a 'spiral' approach (oscillating)."},
  {"q":"In the sequence $p_{k+1} = -\\frac{1}{8}p_k^3 + p_k + 1$ with $p_0 = 0.4$, to what value does the sequence converge?","a":"$2$."},
  {"q":"How does one identify a potential fixed-point function $g(x)$ for the equation $x^3 + x - 1 = 0$?","a":"By isolating $x$, e.g., $x = 1 - x^3$ or $x = \\sqrt[3]{1 - x}$."},
  {"q":"Which error estimate is 'a priori', meaning it can be calculated before the iteration starts (assuming $p$ is roughly known)?","a":"$|p_k - p| \\leq c^k |p_0 - p|$."},
  {"q":"Which error estimate is 'a posteriori', meaning it is calculated using the actual values produced during iteration?","a":"$|p_k - p| \\leq \\frac{c^k}{1 - c} |p_1 - p_0|$."},
  {"q":"Under what specific condition is the sequence $p_k = (-1)^k$ generated?","a":"When $g(x) = -x$ and $p_0 = 1$."},
  {"q":"If a function is only piecewise differentiable, can it still be a contraction?","a":"Yes, provided its Lipschitz constant $c$ is less than $1$."},
  {"q":"When using a calculator for fixed-point iteration, what determines when to stop?","a":"When the desired accuracy (e.g., 4 decimal places) is reached between successive terms."}
]
