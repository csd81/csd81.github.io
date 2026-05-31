// Auto-generated learning aids.
import type { GlossaryEntry, Flashcard } from '../components/widgets/decks'

export const STOP_GLOSSARY: GlossaryEntry[] = [
  {
    "term": {
      "en": "Absolute-step criterion (i)",
      "hu": "Abszolút lépés feltétel (i)"
    },
    "def": {
      "en": "Stop when $|p_k-p_{k-1}|<\\varepsilon_1$ — a numerical analogue of the absolute error. Assumes consecutive terms being close means both are close to the limit.",
      "hu": "Állj meg, ha $|p_k-p_{k-1}|<\\varepsilon_1$ — az abszolút hiba numerikus megfelelője. Feltételezi: ha a szomszédos tagok közel vannak, mindkettő közel van a határértékhez."
    }
  },
  {
    "term": {
      "en": "Relative-step criterion (ii)",
      "hu": "Relatív lépés feltétel (ii)"
    },
    "def": {
      "en": "Stop when $\\dfrac{|p_k-p_{k-1}|}{|p_k|}<\\varepsilon_2$ — a numerical analogue of the relative error. Scale-aware, so it suits very large or very small roots.",
      "hu": "Állj meg, ha $\\dfrac{|p_k-p_{k-1}|}{|p_k|}<\\varepsilon_2$ — a relatív hiba numerikus megfelelője. Skálafüggetlen, ezért nagyon nagy vagy kicsi gyökökhöz is jó."
    }
  },
  {
    "term": {
      "en": "Residual criterion (iii)",
      "hu": "Reziduum feltétel (iii)"
    },
    "def": {
      "en": "Stop when $|f(p_k)|<\\varepsilon_3$. Tests how well the equation is satisfied; specific to root-finding. Can be misleading for very flat or very steep $f$.",
      "hu": "Állj meg, ha $|f(p_k)|<\\varepsilon_3$. Azt méri, mennyire teljesül az egyenlet; gyökkeresésre jellemző. Nagyon lapos vagy meredek $f$-nél félrevezető lehet."
    }
  },
  {
    "term": {
      "en": "Tolerance ($\\varepsilon$)",
      "hu": "Tűrés ($\\varepsilon$)"
    },
    "def": {
      "en": "A predefined positive threshold below which a stopping criterion is considered satisfied. Different criteria use their own $\\varepsilon_1,\\varepsilon_2,\\varepsilon_3$.",
      "hu": "Előre megadott pozitív küszöb, amely alatt a megállási feltételt teljesültnek tekintjük. Az egyes feltételek saját $\\varepsilon_1,\\varepsilon_2,\\varepsilon_3$ értékkel dolgoznak."
    }
  },
  {
    "term": {
      "en": "Maximum iteration count",
      "hu": "Maximális iterációszám"
    },
    "def": {
      "en": "A hard cap on the number of steps. Prevents infinite loops and rejects unacceptably slow convergence — always include it in real code.",
      "hu": "Kemény felső korlát a lépésszámra. Megakadályozza a végtelen ciklust és kizárja az elfogadhatatlanul lassú konvergenciát — valós kódban mindig szerepeljen."
    }
  },
  {
    "term": {
      "en": "Heuristic / combined stopping",
      "hu": "Heurisztikus / kombinált megállás"
    },
    "def": {
      "en": "Each single criterion can fire while $p_k$ is NOT near a root (e.g. a slowly diverging sequence), so practice combines several criteria plus a max-iteration cap.",
      "hu": "Bármely egyetlen feltétel teljesülhet úgy, hogy $p_k$ NINCS gyök közelében (pl. lassan divergáló sorozat), ezért a gyakorlat több feltételt kombinál egy iterációs korláttal."
    }
  }
]

export const STOP_FLASHCARDS: Flashcard[] = [
  {"q":"What is the primary goal of the numerical methods discussed in this chapter?","a":"To generate an infinite sequence $p_k$ that approximates the exact root $p$ of a function $f$."},
  {"q":"How is the exact root $p$ of a function $f$ mathematically defined?","a":"$f(p) = 0$"},
  {"q":"In the context of iterative sequences, what does the term $p_k$ represent?","a":"The $k$th term or the $k$th approximation of the limit $p$."},
  {"q":"What three predefined parameters are required to implement stopping criteria for iterations?","a":"Tolerances $\\varepsilon_1$, $\\varepsilon_2$, and $\\varepsilon_3$ (all $> 0$)."},
  {"q":"Criterion (i) for stopping iterations is defined by which inequality?","a":"$|p_k - p_{k-1}| < \\varepsilon_1$"},
  {"q":"What is Criterion (i) a numerical analogue of?","a":"The absolute error $|p_k - p|$ of the approximation."},
  {"q":"What is the underlying assumption of stopping criterion (i)?","a":"If consecutive terms are close to each other, it is assumed they are both close to the limit $p$."},
  {"q":"Criterion (ii) for stopping iterations is defined by which inequality?","a":"$\\frac{|p_k - p_{k-1}|}{|p_k|} < \\varepsilon_2$"},
  {"q":"What is Criterion (ii) a numerical analogue of?","a":"The relative error $|p_k - p|/|p|$ of the approximation."},
  {"q":"Why might Criterion (ii) be preferred over Criterion (i)?","a":"It takes into account the order of magnitude of the sequence terms."},
  {"q":"In the relative error analogue formula, what term is used in place of the unknown limit $p$ in the denominator?","a":"The current term $|p_k|$."},
  {"q":"Criterion (iii) for stopping iterations is defined by which inequality?","a":"$|f(p_k)| < \\varepsilon_3$"},
  {"q":"What is being tested by Criterion (iii)?","a":"Whether the function value at the current approximation is close to zero."},
  {"q":"Why is Criterion (iii) specifically used for root-finding problems?","a":"It directly tests how well $p_k$ satisfies the mathematical requirement $f(p) = 0$."},
  {"q":"What common programming practice is recommended to prevent infinite loops in iteration codes?","a":"Setting a predefined maximal iteration number to stop the sequence."},
  {"q":"Besides avoiding infinite loops, why else should a maximal iteration number be used?","a":"To prevent calculations that have a convergence rate that is too slow."},
  {"q":"Are the stopping criteria (i), (ii), and (iii) considered mathematically rigorous or heuristic?","a":"Heuristic."},
  {"q":"Why are stopping criteria often used in combination in practice?","a":"To avoid false terminations where a criterion is met but the term is not actually close to the root."},
  {"q":"Which two criteria can be applied to any iteration method, regardless of the problem type?","a":"Criteria (i) and (ii)."},
  {"q":"What sequence is used as a standard counter-example to show that Criterion (i) can fail?","a":"The harmonic series $p_k = \\sum_{i=1}^k \\frac{1}{i}$."},
  {"q":"For the sequence $p_k = \\sum_{i=1}^k \\frac{1}{i}$, what is the value of $|p_k - p_{k-1}|$?","a":"$\\frac{1}{k}$"},
  {"q":"Why does the sequence $p_k = \\sum_{i=1}^k \\frac{1}{i}$ satisfy Criterion (i) for large $k$ even though it does not converge?","a":"The distance between consecutive terms $\\frac{1}{k}$ eventually becomes smaller than any $\\varepsilon_1 > 0$."},
  {"q":"In Criterion (ii), the expression $\\frac{|p_k - p_{k-1}|}{|p_k|}$ for $p_k = \\sum_{i=1}^k \\frac{1}{i}$ behaves in what way as $k \\to \\infty$?","a":"It tends to zero, satisfying the criterion despite the sequence diverging to infinity."},
  {"q":"A function graph with a small 'valley' where $|f(p_k)|$ is small but $p_k$ is far from the root is an example of the failure of which criterion?","a":"Criterion (iii)."},
  {"q":"If $f(x) = x^8$ and $p_k = 1/k$, what approximate root is found using Criterion (iii) with $\\varepsilon_3 = 10^{-8}$?","a":"$p_{11} \\approx 0.0909$ (since $(1/11)^8 < 10^{-8}$)."},
  {"q":"If $f(x) = x^8$ and $p_k = 1/k$, what $k$ is required to satisfy Criterion (i) with $\\varepsilon_1 = 10^{-8}$?","a":"$k \\approx 10,000$ (where $\\frac{1}{k(k-1)} < 10^{-8}$)."},
  {"q":"If $f(x) = x^8$ and $p_k = 1/k$, what $k$ is required to satisfy Criterion (ii) with $\\varepsilon_2 = 10^{-8}$?","a":"$k \\approx 10^8$ (where $\\frac{1}{k-1} < 10^{-8}$)."},
  {"q":"What does a high number of iterations usually indicate in a numerical program?","a":"A likely situation where the sequence is not convergent or convergence is extremely slow."},
  {"q":"True or False: If Criterion (iii) is satisfied, the sequence term is guaranteed to be close to a root.","a":"False, it is a heuristic assumption that may fail in cases like function 'valleys'."},
  {"q":"The formula $\\frac{|p_k - p_{k-1}|}{|p_k|}$ is the numerical approximation of which error type?","a":"Relative error."},
  {"q":"The formula $|p_k - p_{k-1}|$ is the numerical approximation of which error type?","a":"Absolute error."},
  {"q":"In Criterion (ii), what role does $p_{k-1}$ play?","a":"It is used in the formula to approximate the limit $p$ within the numerator's error estimate."},
  {"q":"Which criterion specifically checks if the current guess $p_k$ 'solves' the equation $f(x) = 0$?","a":"Criterion (iii)."},
  {"q":"How do we mathematically represent the tolerance for function value proximity?","a":"$\\varepsilon_3$"},
  {"q":"What does 'large enough' $k$ mean in the context of stopping criteria?","a":"The number of iterations at which the chosen criterion (or combination of criteria) is finally satisfied."}
]
