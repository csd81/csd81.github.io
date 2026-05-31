// Auto-generated learning aids for '2.6 (Secant Method).
import type { GlossaryEntry, Flashcard } from '../components/widgets/decks'

export const SECANT_GLOSSARY: GlossaryEntry[] = [
  {
    "term": {
      "en": "Secant method (Eq. 2.10)",
      "hu": "Szelőmódszer (2.10)"
    },
    "def": {
      "en": "$p_{k+1}=p_k-\\dfrac{p_k-p_{k-1}}{f(p_k)-f(p_{k-1})}f(p_k)$ — like Newton, but the derivative is replaced by the slope of the secant through the last two iterates.",
      "hu": "$p_{k+1}=p_k-\\dfrac{p_k-p_{k-1}}{f(p_k)-f(p_{k-1})}f(p_k)$ — mint a Newton, de a deriváltat az utolsó két iteráltra illesztett szelő meredeksége helyettesíti."
    }
  },
  {
    "term": {
      "en": "Derivative-free motivation",
      "hu": "Derivált nélküli motiváció"
    },
    "def": {
      "en": "Use it when $f'$ is unknown, has no formula (e.g. $f$ comes from another numerical procedure), or is too expensive to evaluate. The secant slope needs only function values.",
      "hu": "Akkor használjuk, ha $f'$ ismeretlen, nincs képlete (pl. $f$ egy másik numerikus eljárás kimenete), vagy túl drága kiszámolni. A szelő meredekségéhez csak függvényértékek kellenek."
    }
  },
  {
    "term": {
      "en": "Two-step iteration",
      "hu": "Kétlépéses iteráció"
    },
    "def": {
      "en": "Each new iterate uses the **two** previous ones, so it needs two seeds $p_0,p_1$ — unlike Newton's one-step recursion.",
      "hu": "Minden új iterált az előző **kettőt** használja, ezért két kezdőérték kell ($p_0,p_1$) — szemben a Newton egylépéses rekurziójával."
    }
  },
  {
    "term": {
      "en": "Error recursion (Thm 2.26, Eq. 2.11)",
      "hu": "Hiba-rekurzió (2.26. tétel, 2.11)"
    },
    "def": {
      "en": "$p_{k+1}-p=\\dfrac12\\dfrac{f''(\\xi_k)}{f'(\\eta_k)}(p_k-p)(p_{k-1}-p)$ for some $\\xi_k,\\eta_k$ near the root. The new error is the **product** of the previous two — the source of superlinear speed.",
      "hu": "$p_{k+1}-p=\\dfrac12\\dfrac{f''(\\xi_k)}{f'(\\eta_k)}(p_k-p)(p_{k-1}-p)$ alkalmas $\\xi_k,\\eta_k$ gyök közeli pontokra. Az új hiba az előző kettő **szorzata** — innen a szuperlineáris sebesség."
    }
  },
  {
    "term": {
      "en": "Local convergence (Thm 2.27)",
      "hu": "Lokális konvergencia (2.27. tétel)"
    },
    "def": {
      "en": "If $f\\in C^2$ near a simple root $p$, the secant method converges to $p$ for any two seeds close enough to $p$ (proof bounds $M|p_k-p|\\le \\varepsilon^{q_k}$ with $q_k$ Fibonacci).",
      "hu": "Ha $f\\in C^2$ egy egyszeres $p$ gyök közelében, a szelőmódszer $p$-hez konvergál bármely két, $p$-hez elég közeli kezdőértékre (a bizonyítás $M|p_k-p|\\le \\varepsilon^{q_k}$-t korlátoz, ahol $q_k$ Fibonacci)."
    }
  },
  {
    "term": {
      "en": "Order = golden ratio $\\varphi\\approx1.618$",
      "hu": "Rend = aranymetszés $\\varphi\\approx1{,}618$"
    },
    "def": {
      "en": "From the error product, the exponents satisfy $q_{k+1}=q_k+q_{k-1}$ (Fibonacci), so $q_k$ grows like $\\varphi^k$ with $\\varphi=\\tfrac{1+\\sqrt5}{2}$. The convergence order is $\\varphi$ — superlinear, between linear and quadratic.",
      "hu": "A hibaszorzatból a kitevők kielégítik $q_{k+1}=q_k+q_{k-1}$-et (Fibonacci), így $q_k$ úgy nő, mint $\\varphi^k$, ahol $\\varphi=\\tfrac{1+\\sqrt5}{2}$. A konvergencia rendje $\\varphi$ — szuperlineáris, a lineáris és kvadratikus között."
    }
  },
  {
    "term": {
      "en": "Second divided difference",
      "hu": "Második osztott differencia"
    },
    "def": {
      "en": "$f[a,b,c]$ — symmetric in its arguments and equal to $f''(\\xi)/2$ for some $\\xi$ (Ch. 6). It turns the secant error expression into the clean form (2.11).",
      "hu": "$f[a,b,c]$ — argumentumaiban szimmetrikus, és egyenlő $f''(\\xi)/2$-vel valamely $\\xi$-re (6. fejezet). Ez alakítja a szelő hibakifejezését a tiszta (2.11) alakra."
    }
  },
  {
    "term": {
      "en": "Cost efficiency (one eval/step)",
      "hu": "Költséghatékonyság (egy kiértékelés/lépés)"
    },
    "def": {
      "en": "Only one new $f$-evaluation per step and no derivative. Two secant steps ($\\varphi^2\\approx2.6$) can beat one Newton step (order 2) in wall-clock time when $f'$ is costly.",
      "hu": "Lépésenként csak egy új $f$-kiértékelés, derivált nélkül. Két szelőlépés ($\\varphi^2\\approx2{,}6$) valós időben verheti az egy Newton-lépést (rend 2), ha $f'$ drága."
    }
  }
]

export const SECANT_FLASHCARDS: Flashcard[] = [
  {"q":"What is the primary practical advantage of the secant method over Newton's method?","a":"It does not require the computation of the derivative $f'$."},
  {"q":"Why is the secant method preferred when $f$ is provided as the output of another numerical procedure?","a":"In such cases, the analytical formula for the derivative $f'$ is often unknown or unavailable."},
  {"q":"How many initial values are required to begin the secant method iteration?","a":"The method requires two different initial values, $p_0$ and $p_1$."},
  {"q":"Geometrically, the secant method replaces the nonlinear function with a line connecting which two points?","a":"It uses a secant line connecting $(p_{k-1}, f(p_{k-1}))$ and $(p_k, f(p_k))$."},
  {"q":"What is the equation of the secant line connecting points $(p_0, f(p_0))$ and $(p_1, f(p_1))$?","a":"$y = f(p_1) + \\frac{f(p_1) - f(p_0)}{p_1 - p_0}(x - p_1)$"},
  {"q":"How is the next term $p_2$ determined from the secant line equation?","a":"It is the $x$-coordinate where the secant line intersects the $x$-axis."},
  {"q":"Write the general recursion formula for the secant method used to find $p_{k+1}$.","a":"$p_{k+1} = p_k - \\frac{p_k - p_{k-1}}{f(p_k) - f(p_{k-1})} f(p_k)$"},
  {"q":"Why is the secant method categorized as a 'two-step iteration'?","a":"The calculation of the next term $p_{k+1}$ depends on the two previous terms, $p_k$ and $p_{k-1}$."},
  {"q":"How does the convergence speed of the secant method generally compare to Newton's method?","a":"The secant method typically converges to the limit slower than Newton's method."},
  {"q":"In Example 2.25, for the function $f(x) = e^x - 2\\cos x$ and $TOL = 10^{-5}$, how many iterations were needed to reach the root?","a":"The method required 7 iterations to satisfy the tolerance."},
  {"q":"What condition on the function $f$ is required for the local convergence theorem (Theorem 2.26) of the secant method?","a":"The function must be twice continuously differentiable, $f \\in C^2[a,b]$."},
  {"q":"According to Theorem 2.26, what condition must the root $p$ satisfy for local convergence?","a":"The function value $f(p)$ must be zero and the derivative $f'(p)$ must be non-zero."},
  {"q":"Provide the error relation formula for $p_{k+1} - p$ established in Theorem 2.26.","a":"$p_{k+1} - p = \\frac{1}{2}\\frac{f''(\\xi_k)}{f'(\\eta_k)}(p_k - p)(p_{k-1} - p)$"},
  {"q":"In the error formula for the secant method, where is the value $\\eta_k$ located?","a":"The value $\\eta_k$ lies in the interval $\\langle p_k, p_{k-1} \\rangle$."},
  {"q":"In the error formula for the secant method, where is the value $\\xi_k$ located?","a":"The value $\\xi_k$ lies in the interval $\\langle p_k, p_{k-1}, p \\rangle$."},
  {"q":"Which theorem is used in the proof of Theorem 2.26 to express the first-order difference quotient as $f'(\\eta_k)$?","a":"The Lagrange Mean Value Theorem."},
  {"q":"The expression $\\frac{\\frac{f(p_k) - f(p)}{p_k - p} - \\frac{f(p_{k-1}) - f(p)}{p_{k-1} - p}}{p_k - p_{k-1}}$ is known as what mathematical construct?","a":"The second divided difference of $f$ corresponding to points $p_{k-1}, p,$ and $p_k$."},
  {"q":"According to Corollary 6.17, a second divided difference $f[p_{k-1}, p, p_k]$ is equal to which derivative expression?","a":"$f[p_{k-1}, p, p_k] = \\frac{f''(\\xi_k)}{2}$"},
  {"q":"In the proof of Theorem 2.27, how is the constant $M$ defined to bound the error?","a":"$M := \\frac{\\max\\{|f''(x)|\\}}{2\\min\\{|f'(x)|\\}}$ over a specified interval $[p - \\delta^*, p + \\delta^*]$."},
  {"q":"What inequality relates the errors of three consecutive steps in the secant method proof?","a":"$M|p_{k+1} - p| \\leq M|p_k - p|M|p_{k-1} - p|$"},
  {"q":"Which integer sequence is utilized to bound the powers of $\\varepsilon$ in the convergence proof of the secant method?","a":"The Fibonacci sequence."},
  {"q":"What are the recurrence relation and initial conditions for the sequence $q_k$ in the secant method proof?","a":"$q_{k+1} = q_k + q_{k-1}$ for $k \\geq 1$, with $q_0 = 1$ and $q_1 = 1$."},
  {"q":"State the general formula for the $k$-th term of the Fibonacci sequence $q_k$.","a":"$q_k = \\frac{1}{\\sqrt{5}}(r_0^{k+1} - r_1^{k+1})$"},
  {"q":"What is the approximate value of the constant $r_0$ in the Fibonacci formula used for the secant method?","a":"$r_0 = \\frac{1 + \\sqrt{5}}{2} \\approx 1.618$"},
  {"q":"What is the approximate value of the constant $r_1$ in the Fibonacci formula used for the secant method?","a":"$r_1 = \\frac{1 - \\sqrt{5}}{2} \\approx -0.618$"},
  {"q":"Why does $p_k \\to p$ imply convergence in the final steps of the proof of Theorem 2.27?","a":"Because the upper bound $\\frac{1}{M}\\varepsilon^{q_k}$ approaches zero as $q_k \\to \\infty$."},
  {"q":"How can the secant method's denominator be interpreted in relation to Newton's method?","a":"The expression $\\frac{f(p_k) - f(p_{k-1})}{p_k - p_{k-1}}$ serves as an approximation of the derivative $f'(p_k)$."},
  {"q":"The secant method is considered a 'one-step' or 'fixed point' iteration: True or False?","a":"False, it is a two-step iteration and not a fixed point iteration."},
  {"q":"How does the secant method compare to the bisection method in terms of convergence speed?","a":"The secant method converges faster than the bisection method."},
  {"q":"What is the typical stopping criterion for the secant method in numerical exercises?","a":"The iteration stops when the distance between two consecutive terms $|p_k - p_{k-1}|$ is less than a given tolerance."},
  {"q":"In the definition of $M$, what condition on $f'(x)$ must hold for all $x$ in the interval $[p - \\delta^*, p + \\delta^*]$?","a":"The derivative $f'(x)$ must be non-zero."},
  {"q":"What is the significance of the fact that $q_k \\to \\infty$ in the convergence proof?","a":"It ensures that the error bound $\\varepsilon^{q_k}$ tends to zero, proving the sequence $p_k$ converges to $p$."},
  {"q":"Exercise 2 suggests that the second divided difference $f[a,b,c]$ is independent of what?","a":"It is independent of the order of the numbers $a, b,$ and $c$."},
  {"q":"How does the secant method's reliance on 'approximate derivatives' explain its speed relative to Newton's method?","a":"Using an approximation rather than the exact derivative value leads to a slightly slower convergence rate."},
  {"q":"Formula: Secant line intersection with the $x$-axis.","a":"$x = p_1 - \\frac{p_1 - p_0}{f(p_1) - f(p_0)} f(p_1)$"},
  {"q":"Term: Szelőmódszer","a":"Definition: The Hungarian term for the Secant Method."},
  {"q":"Under what condition is $\\varepsilon = M\\delta$ guaranteed to be between 0 and 1 in the convergence proof?","a":"When $\\delta$ is selected such that $\\delta < \\frac{1}{M}$."},
  {"q":"In the secant method, if the function $f$ is linear, how many iterations are needed to find the root?","a":"The root would be found in exactly one iteration step ($p_2$)."},
  {"q":"What is the relationship between the term $f[p_{k-1}, p, p_k]$ and the error term of the secant method?","a":"It represents the numerator's structure in the algebraic manipulation of the error $p_{k+1} - p$."},
  {"q":"If the computation of $f'$ is extremely expensive, which method is more practical: Newton or Secant?","a":"The Secant Method is more practical."}
]
