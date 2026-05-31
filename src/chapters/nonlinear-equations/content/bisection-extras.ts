// Auto-generated learning aids.
import type { GlossaryEntry, Flashcard } from '../components/widgets/decks'

export const BIS_GLOSSARY: GlossaryEntry[] = [
  {
    "term": {
      "en": "Bracketing interval (bracket)",
      "hu": "Beágyazó (előjelváltó) intervallum"
    },
    "def": {
      "en": "An interval $[a,b]$ with $f(a)f(b)<0$. By the IVT it must contain a root; bracketing methods keep shrinking such an interval.",
      "hu": "Olyan $[a,b]$ intervallum, amelyre $f(a)f(b)<0$. A Bolzano-tétel szerint gyököt tartalmaz; a beágyazó módszerek ezt zsugorítják."
    }
  },
  {
    "term": {
      "en": "Sign-change condition $f(a)f(b)<0$",
      "hu": "Előjelváltási feltétel $f(a)f(b)<0$"
    },
    "def": {
      "en": "The hypothesis that makes bisection applicable: $f$ is continuous and takes opposite signs at the endpoints, guaranteeing a root inside.",
      "hu": "A felezés alkalmazhatóságának feltétele: $f$ folytonos, és a végpontokban ellentétes előjelű, ami gyököt garantál belül."
    }
  },
  {
    "term": {
      "en": "Midpoint $p_k=(a_k+b_k)/2$",
      "hu": "Felezőpont $p_k=(a_k+b_k)/2$"
    },
    "def": {
      "en": "The new test point each step; the half-interval on which $f$ still changes sign becomes the next bracket $[a_{k+1},b_{k+1}]$.",
      "hu": "Minden lépés új tesztpontja; az a fél marad új $[a_{k+1},b_{k+1}]$ intervallumnak, amelyen $f$ még előjelet vált."
    }
  },
  {
    "term": {
      "en": "Bisection error bound (Eq. 2.4)",
      "hu": "A felezés hibakorlátja (2.4)"
    },
    "def": {
      "en": "$|p_k-p|\\le \\dfrac{b-a}{2^{k+1}}$ — the bracket halves each step, so the error is known in advance. Convergence follows from Cantor's nested-interval theorem.",
      "hu": "$|p_k-p|\\le \\dfrac{b-a}{2^{k+1}}$ — az intervallum minden lépésben feleződik, így a hiba előre ismert. A konvergencia a Cantor-féle közösrész-tételből következik."
    }
  },
  {
    "term": {
      "en": "Step-count formula (Eq. 2.5)",
      "hu": "Lépésszám-képlet (2.5)"
    },
    "def": {
      "en": "To reach tolerance $\\varepsilon$ it suffices that $k\\ge \\log_2\\dfrac{b-a}{\\varepsilon}-1$ — the number of bisection steps is known before computing.",
      "hu": "A $\\varepsilon$ tűrés eléréséhez elég, ha $k\\ge \\log_2\\dfrac{b-a}{\\varepsilon}-1$ — a lépésszám a számolás előtt ismert."
    }
  },
  {
    "term": {
      "en": "Unconditional convergence",
      "hu": "Feltétel nélküli konvergencia"
    },
    "def": {
      "en": "Given a valid initial bracket, bisection always converges — no smoothness or good starting guess is needed, unlike Newton/secant. The price is slow (linear) convergence.",
      "hu": "Érvényes kezdő intervallummal a felezés mindig konvergál — nem kell simaság vagy jó kezdőpont, ellentétben a Newton-/szelőmódszerrel. Ára a lassú (lineáris) konvergencia."
    }
  }
]

export const BIS_FLASHCARDS: Flashcard[] = [
  {"q":"What is the primary objective of the bisection method in numerical analysis?","a":"To approximate the solution of a scalar nonlinear algebraic equation $f(x) = 0$."},
  {"q":"Which two properties must a function $f$ satisfy on the interval $[a,b]$ for the bisection method to be guaranteed to work?","a":"The function must be continuous on $[a,b]$ and have opposite signs at the endpoints ($f(a)f(b) < 0$)."},
  {"q":"The _____ Theorem states that if $f \\in C[a,b]$, $f(a) \\neq f(b)$, and $d \\in \\langle f(a), f(b) \\rangle$, then there exists a $c \\in (a,b)$ such that $f(c) = d$.","a":"Intermediate Value (or Bolzano–Darboux)"},
  {"q":"In the notation $\\langle \\alpha, \\beta \\rangle$, what does the interval represent?","a":"The open interval $(\\min\\{\\alpha, \\beta\\}, \\max\\{\\alpha, \\beta\\})$."},
  {"q":"Formula: Midpoint $p_0$ of the initial interval $[a_0, b_0]$ in the bisection method.","a":"$p_0 = \\frac{a_0 + b_0}{2}$"},
  {"q":"If the function $f$ changes sign on the interval $[a_0, p_0]$, how is the next interval $[a_1, b_1]$ defined?","a":"$[a_1, b_1] = [a_0, p_0]$ (the left half of the current interval)."},
  {"q":"If $f$ does not change sign on $[a_0, p_0]$, but does so on $[p_0, b_0]$, how is the next interval $[a_1, b_1]$ defined?","a":"$[a_1, b_1] = [p_0, b_0]$ (the right half of the current interval)."},
  {"q":"What is the result of the bisection method iteration if $f(p_k) = 0$ for some midpoint $p_k$?","a":"The midpoint $p_k$ is the exact root of the function $f$, and the procedure stops."},
  {"q":"Formula: The length of the $k$-th interval $[a_k, b_k]$ in the bisection method.","a":"$b_k - a_k = \\frac{b - a}{2^k}$"},
  {"q":"Which theorem ensures that the sequence of nested closed intervals in the bisection method converges to a unique common point $p$?","a":"Cantor's nested intervals theorem."},
  {"q":"In the limit as $k \\to \\infty$, what values do the sequences of endpoints $a_k$ and $b_k$ converge to?","a":"They both converge to the root $p$."},
  {"q":"Why must $f(p) = 0$ if $f(a_k) < 0$ and $f(b_k) > 0$ for all $k$ as $a_k, b_k \\to p$?","a":"The continuity of $f$ implies $f(p) \\leq 0$ and $f(p) \\geq 0$, which forces $f(p) = 0$."},
  {"q":"Formula: The upper bound for the error $|p_k - p|$ in the bisection method after $k$ steps.","a":"$|p_k - p| \\leq \\frac{b - a}{2^{k+1}}$"},
  {"q":"Formula: The minimum number of iterations $k$ required to reach a tolerance $\\varepsilon$.","a":"$k \\geq \\log_2 \\frac{b - a}{\\varepsilon} - 1$"},
  {"q":"In the bisection method error estimation, what does $\\varepsilon$ represent?","a":"The predefined tolerance or maximum allowable error bound."},
  {"q":"Example: For the function $f(x) = e^x - 2\\cos x$ on $[0,1]$, why is there exactly one root?","a":"Because the function is strictly monotone increasing on that interval."},
  {"q":"Example: For $f(x) = e^x - 2\\cos x$ on $[0,1]$ with $\\varepsilon = 10^{-5}$, approximately how many steps are calculated as necessary?","a":"Approximately 16 steps ($k \\geq 15.61$)."},
  {"q":"What happens when the bisection method is applied to $f(x) = 1/x$ on $[-0.5, 3]$?","a":"The method fails to find a root because the function is not continuous on the interval (specifically at $x=0$)."},
  {"q":"Term: Bisection Method","a":"Definition: An iterative algorithm that finds a root by repeatedly halving an interval that brackets the root."},
  {"q":"How does the bisection method ensure that at least one root is contained in each generated sub-interval?","a":"By selecting sub-intervals that maintain the property of having opposite signs at the endpoints."},
  {"q":"In the bisection method, the sequence of midpoints $p_k$ converges to the _____ of the function.","a":"Root (or solution)"},
  {"q":"The error bound of the bisection method depends on the _____ of the initial interval $[a,b]$.","a":"Length (or width)"},
  {"q":"True or False: The bisection method can find multiple roots simultaneously within a single interval.","a":"False; it converges to a single root contained within the nested intervals."},
  {"q":"According to Theorem 2.16, what class of functions ($f \\in \\dots$) is required for the bisection sequence to converge?","a":"$f \\in C[a,b]$ (continuous functions on the closed interval)."},
  {"q":"Equation (2.4) shows that the error of the bisection method is halved with each _____.","a":"Iteration (or step/halving)"},
  {"q":"Exercise root existence: What is the initial interval provided to show $x^3 - 6x - 1 = 0$ has a root?","a":"$[-1, 1]$"},
  {"q":"Exercise root existence: What is the initial interval provided for $x = e^{-2x}$?","a":"$[-1, 2]$"},
  {"q":"Exercise root existence: For $\\tan x = x + 1$, what is the specified interval?","a":"$[-1, 1.5]$"},
  {"q":"Exercise root existence: For $e^{-\\sin x} = x^2 - 1$, what is the specified interval?","a":"$[0, 2]$"},
  {"q":"In the context of Bolzano-Darboux, what must be true about $f(a)$ and $f(b)$ to guarantee a root exists for $f(x)=0$?","a":"They must have opposite signs ($f(a) < 0 < f(b)$ or $f(b) < 0 < f(a)$)."},
  {"q":"What is the geometric interpretation of the Intermediate Value Theorem?","a":"A continuous curve passing through points above and below a horizontal line must intersect that line."},
  {"q":"In Example 2.17, what is the value of $f(0)$?","a":"$-1$"},
  {"q":"What happens to the error bound in the bisection method if the tolerance $\\varepsilon$ is decreased by a factor of 10?","a":"The number of required iterations $k$ increases by approximately $3.32$ (since $\\log_2 10 \\approx 3.32$)."},
  {"q":"Concept: Nested intervals","a":"Definition: A sequence of intervals where each interval is contained within the previous one ($[a_{k+1}, b_{k+1}] \\subset [a_k, b_k]$)."},
  {"q":"How is the 'opposite sign property' checked computationally for an interval $[a, p]$?","a":"By checking if the product $f(a)f(p) < 0$."},
  {"q":"In the calculation $k \\geq \\log_2 \\frac{b - a}{\\varepsilon} - 1$, why is the base of the logarithm 2?","a":"Because the interval length is reduced by a factor of 2 in each iteration."},
  {"q":"What is the starting index $k$ for the bisection method iteration table provided in the text?","a":"0"},
  {"q":"If $f(0) = -1$ and $f(1) = 1.718$, and $p_0 = 0.5$ gives $f(0.5) = -0.106$, what is the next interval?","a":"$[0.5, 1]$"},
  {"q":"The bisection method is often described as a 'bracket' method because it always keeps the root between _____.","a":"The two endpoints of the current interval ($a_k$ and $b_k$)."},
  {"q":"When solving $x = e^{-2x}$ via bisection, the function $f(x)$ should be rearranged as _____.","a":"$f(x) = x - e^{-2x} = 0$ (or $e^{-2x} - x = 0$)."},
  {"q":"If an interval length is $1.0$ and we perform 1 iteration, the maximum possible error for the midpoint $p_0$ is _____.","a":"0.5 (or $\\frac{1}{2^1}$)"},
  {"q":"The sequence of midpoints $p_k$ is an approximation of the _____ point of the nested intervals.","a":"Unique common (or limit)"},
  {"q":"Why does the bisection method converge even if $f$ is not differentiable?","a":"Because it only requires continuity to satisfy the Intermediate Value Theorem."},
  {"q":"Cloze: The length of the $10$th interval is _____ times smaller than the initial interval.","a":"$2^{10}$ (or 1024)"},
  {"q":"How does the bisection method handle functions with multiple roots in the initial interval?","a":"It will converge to exactly one of the roots, depending on the signs at the midpoints."},
  {"q":"If $f(a) > 0$ and $f(b) < 0$, and $f(p_0) > 0$, what is the new interval $[a_1, b_1]$?","a":"$[p_0, b_0]$ (since $f(p_0)$ and $f(b_0)$ have opposite signs)."},
  {"q":"Exercise: What is the value of $f(p_0)$ for $f(x) = e^x - 2\\cos x$ at $k=0$?","a":"$-1.0644 \\times 10^{-1}$ (or $-0.10644$)"},
  {"q":"Formula: The distance from the midpoint $p_k$ to any endpoint $a_k$ or $b_k$.","a":"$\\frac{b_k - a_k}{2}$"},
  {"q":"In the bisection method, $p_k$ is defined as the _____ of the interval $[a_k, b_k]$.","a":"Midpoint (or arithmetic mean)"},
  {"q":"The Bolzano-Darboux Theorem is a specific application of which broader calculus theorem?","a":"Intermediate Value Theorem"},
  {"q":"Is the bisection method considered a fast or slow convergence method compared to others?","a":"It is generally considered slow, but very reliable (robust)."},
  {"q":"Condition: Why must $f$ be continuous for the bisection method to reliably converge to a root?","a":"To ensure that $f(p)=0$ is the only value consistent with the limits of the positive and negative endpoint sequences."}
]
