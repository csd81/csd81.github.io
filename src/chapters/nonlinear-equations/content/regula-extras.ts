// Auto-generated learning aids.
import type { GlossaryEntry, Flashcard } from '../components/widgets/decks'

export const REGULA_GLOSSARY: GlossaryEntry[] = [
  {
    "term": {
      "en": "Method of false position (regula falsi)",
      "hu": "Húrmódszer (regula falsi)"
    },
    "def": {
      "en": "A bracketing method that, instead of the midpoint, uses the x-intercept of the secant chord through the endpoints. It accounts for the shape of $f$, so it usually converges faster than bisection.",
      "hu": "Beágyazó módszer, amely a felezőpont helyett a végpontokon átmenő húr tengelymetszetét használja. Figyelembe veszi $f$ alakját, így általában gyorsabb a felezésnél."
    }
  },
  {
    "term": {
      "en": "Secant-chord intercept (Eq. 2.6)",
      "hu": "Húr-tengelymetszet (2.6)"
    },
    "def": {
      "en": "$p_k=a_k-f(a_k)\\dfrac{a_k-b_k}{f(a_k)-f(b_k)}$ — where the line through $(a_k,f(a_k))$ and $(b_k,f(b_k))$ crosses the x-axis. Requires $f(a_k)\\ne f(b_k)$ to avoid division by zero.",
      "hu": "$p_k=a_k-f(a_k)\\dfrac{a_k-b_k}{f(a_k)-f(b_k)}$ — ahol a $(a_k,f(a_k))$ és $(b_k,f(b_k))$ pontokon átmenő egyenes metszi az $x$-tengelyt. $f(a_k)\\ne f(b_k)$ kell a nullával osztás elkerüléséhez."
    }
  },
  {
    "term": {
      "en": "Convergence for convex/concave $f$ (Thm 2.19)",
      "hu": "Konvergencia konvex/konkáv $f$-re (2.19. tétel)"
    },
    "def": {
      "en": "If $f\\in C[a,b]$ is convex or concave with $f(a)f(b)<0$, regula falsi converges to the unique root. One endpoint then stays fixed and $p_k$ is monotone.",
      "hu": "Ha $f\\in C[a,b]$ konvex vagy konkáv és $f(a)f(b)<0$, a húrmódszer az egyetlen gyökhöz konvergál. Ekkor az egyik végpont rögzített marad, $p_k$ pedig monoton."
    }
  },
  {
    "term": {
      "en": "Stagnant (fixed) endpoint",
      "hu": "Beragadó (rögzített) végpont"
    },
    "def": {
      "en": "For convex/concave $f$ the chord always crosses on the same side, so only one endpoint ever moves. On a wide interval this makes convergence slow — sometimes slower than bisection (Example 2.21).",
      "hu": "Konvex/konkáv $f$-nél a húr mindig ugyanazon az oldalon metsz, így csak az egyik végpont mozog. Széles intervallumon ettől lassú a konvergencia — néha lassabb a felezésnél (2.21. példa)."
    }
  },
  {
    "term": {
      "en": "Bracketing vs open methods",
      "hu": "Beágyazó vs nyílt módszerek"
    },
    "def": {
      "en": "Bisection and regula falsi keep a sign-changing bracket (guaranteed convergence); Newton and the secant method are open (faster but may diverge).",
      "hu": "A felezés és a húrmódszer előjelváltó intervallumot tart (garantált konvergencia); a Newton- és a szelőmódszer nyílt (gyorsabb, de divergálhat)."
    }
  }
]

export const REGULA_FLASHCARDS: Flashcard[] = [
  {"q":"What is the Latin name for the Method of False Position?","a":"Regula Falsi"},
  {"q":"Which root-finding method uses the intersection of a secant line and the $x$-axis to find the next approximation?","a":"Method of False Position (Húrmódszer)"},
  {"q":"What are the two primary initial conditions for the function $f$ in the Method of False Position on interval $[a, b]$?","a":"$f$ must be continuous and $f(a)f(b) < 0$."},
  {"q":"In the Method of False Position, $p_k$ represents the intersection of the $x$-axis and the _____ through $(a_k, f(a_k))$ and $(b_k, f(b_k))$.","a":"secant line (chord)"},
  {"q":"Provide the formula for calculating the $k$-th approximation $p_k$ in the Method of False Position.","a":"$p_k = a_k - f(a_k) \\frac{a_k - b_k}{f(a_k) - f(b_k)}$"},
  {"q":"How is the next interval $[a_{k+1}, b_{k+1}]$ determined after finding $p_k$?","a":"By selecting the subinterval ($[a_k, p_k]$ or $[p_k, b_k]$) where the function changes sign."},
  {"q":"What is the main advantage of the Method of False Position over the Bisection Method?","a":"It accounts for the shape of the function when selecting the next point."},
  {"q":"Why is the Bisection Method sometimes preferred over the Method of False Position regarding step estimation?","a":"The number of steps to reach a specific accuracy can be calculated in advance."},
  {"q":"Which programming check is essential when implementing the formula for $p_k$ to avoid a runtime error?","a":"Ensuring $f(a_k)$ is not equal to $f(b_k)$ to prevent division by zero."},
  {"q":"According to Theorem 2.19, what specific function properties on $[a, b]$ guarantee the convergence of the Method of False Position?","a":"Convexity or concavity."},
  {"q":"If a continuous function $f$ is convex or concave and $f(a)f(b) < 0$, what can be said about its root $p$?","a":"The root $p$ is unique."},
  {"q":"In the proof for a convex function where $f(a) > 0$ and $f(b) < 0$, what happens to the left endpoint $a_{k+1}$ in every step?","a":"It remains fixed ($a_{k+1} = a$)."},
  {"q":"In the proof for a convex function where $f(a) > 0$ and $f(b) < 0$, what happens to the right endpoint $b_{k+1}$?","a":"It is updated to the current approximation $p_k$."},
  {"q":"If $f$ is convex, $f(a) > 0$, and $f(b) < 0$, what is the monotonic behavior of the sequence $p_k$?","a":"It is monotonically decreasing."},
  {"q":"If $f$ is convex, $f(a) < 0$, and $f(b) > 0$, what is the monotonic behavior of the sequence $p_k$?","a":"It is monotonically increasing."},
  {"q":"In the convergence proof, what does the limit equation $p = a - f(a) \\frac{a - p}{f(a) - f(p)}$ imply about $f(p)$?","a":"$f(p) = 0$"},
  {"q":"How many steps did the Method of False Position take to solve $e^x - 2\\cos x = 0$ on $[0, 1]$ with $TOL = 10^{-5}$?","a":"8 steps"},
  {"q":"In Example 2.21, why does the Method of False Position converge much slower on $[0, 4]$ than on $[0, 1]$?","a":"The function value at $x=4$ is much larger than at $x=0$, placing $p_k$ far from the root."},
  {"q":"How many steps did the Method of False Position require for $f(x) = e^x - 2\\cos x$ on the interval $[0, 4]$ to reach $10^{-5}$ accuracy?","a":"51 steps"},
  {"q":"What is the calculated number of steps the Bisection Method requires for the interval $[0, 4]$ and $TOL = 10^{-5}$?","a":"18 steps"},
  {"q":"Formula: Required steps ($n$) for the Bisection Method given interval length $L$ and tolerance $TOL$.","a":"$n > \\log_2(L/TOL) - 1$"},
  {"q":"What happens to the convergence speed of the Method of False Position as the right endpoint of the interval in Example 2.21 is further increased?","a":"The convergence becomes even slower."},
  {"q":"Why is the Method of False Position considered a 'nested interval' method?","a":"Each iteration produces a new, smaller interval that contains the root."},
  {"q":"What geometric feature of the function graph does the Bisection Method ignore that the Method of False Position utilizes?","a":"The slope or 'shape' of the function."},
  {"q":"True or False: The Method of False Position is always faster than the Bisection Method.","a":"False"},
  {"q":"In the piecewise function exercise, the value of $f(x)$ for $x \\leq 0.5$ is defined by the parameter _____.","a":"$\\delta$"},
  {"q":"Concept: $p_k$ derivation","a":"Definition: $p_k$ is the $x$-intercept of the line passing through $(a_k, f(a_k))$ and $(b_k, f(b_k))$."},
  {"q":"What is the Hungarian term for the Method of False Position?","a":"Húrmódszer"},
  {"q":"In the video transcript, what reason is given for assuming convexity or concavity in the convergence theorem?","a":"It ensures the uniqueness of the root and simplifies the proof."},
  {"q":"Under the conditions $f(a) > 0, f(b) < 0$ and $f$ being convex, what is the sign of $f(p_k)$ for all $k$?","a":"Negative ($f(p_k) < 0$)"},
  {"q":"Which method should a programmer switch to if the Method of False Position is observed to be too slow in a specific numerical application?","a":"A different method (such as the Bisection Method)."},
  {"q":"If $f(p_k) = 0$ during the iteration process, what action is taken?","a":"The iteration stops because the exact root has been found."},
  {"q":"Term: Secant Line (Húr)","a":"Definition: A line segment connecting two points on a curve. Example: The line connecting $(a, f(a))$ and $(b, f(b))$."},
  {"q":"In Example 2.21, the Bisection Method is _____ steps longer on $[0, 4]$ than it was on $[0, 1]$.","a":"two"},
  {"q":"What is the primary risk of using the Method of False Position on a function that is neither convex nor concave?","a":"The proof of convergence provided in Theorem 2.19 may not apply, making it much more complicated."},
  {"q":"In the limit equation for the convex case, why is $p$ strictly greater than $a$?","a":"Because $f(a) > 0$ and $f(p) = 0$, and $f$ is continuous."},
  {"q":"What is the value of $f(p_0)$ for $f(x) = e^x - 2\\cos x$ on $[0, 1]$?","a":"$-3.9698e-01$"},
  {"q":"The Method of False Position sequence $p_k$ is guaranteed to converge to the root $p$ if $f \\in C[a, b]$ and $f$ is _____ on the interval.","a":"convex or concave"},
  {"q":"In the Hungarian slide 37, $p_k$ is defined as the metszéspont (intersection) of the húr (chord) and the _____.","a":"$x$-tengely ($x$-axis)"},
  {"q":"What happens if $f(a_k)$ and $f(p_k)$ have opposite signs?","a":"The next interval $[a_{k+1}, b_{k+1}]$ is set to $[a_k, p_k]$."},
  {"q":"What happens if $f(p_k)$ and $f(b_k)$ have opposite signs?","a":"The next interval $[a_{k+1}, b_{k+1}]$ is set to $[p_k, b_k]$."},
  {"q":"How does the Method of False Position behave if one endpoint of the function is very far from the $x$-axis compared to the other?","a":"Convergence becomes very slow as the secant intersection stays near the closer endpoint."},
  {"q":"In the iterative formula, if $f(a_k)$ and $f(b_k)$ are very close in value, what numerical issue might occur?","a":"Division by a value near zero, leading to potential instability or error."},
  {"q":"True or False: The sequence of intervals $[a_k, b_k]$ in the Regula Falsi method is always nested.","a":"True"},
  {"q":"The Method of False Position is described in the text as Algorithm _____.","a":"2.18"},
  {"q":"What is the purpose of the $TOL$ parameter in root-finding algorithms?","a":"It defines the tolerance or maximum allowable error for the approximation."},
  {"q":"If $f(x) = e^x - 2\\cos x$, what is the sign of $f(0)$?","a":"Negative ($1 - 2 = -1$)"},
  {"q":"If $f(x) = e^x - 2\\cos x$, what is the sign of $f(1)$?","a":"Positive ($e^1 - 2\\cos(1) \\approx 2.718 - 1.08 > 0$)"},
  {"q":"In Table 2.4, what is the value of $p_0$ for the interval $[0, 4]$?","a":"$0.07029205$"},
  {"q":"In the proof of Theorem 2.19, what property of $p_k$ allows us to say it converges to a limit $p$?","a":"It is a monotonic and bounded sequence."},
  {"q":"Formula: Equation of the secant line passing through $(a, f(a))$ and $(b, f(b))$.","a":"$y - f(a) = \\frac{f(a) - f(b)}{a - b}(x - a)$"},
  {"q":"In the Hungarian text, what should the program do if $f(a) = f(b)$?","a":"Give a warning message and terminate the program safely."},
  {"q":"In Example 2.20, how does the accuracy of $p_8$ compare to the required $TOL$?","a":"It is better (more precise) than $10^{-5}$."},
  {"q":"How does the Method of False Position select the dividing point $p_k$ differently than the Bisection Method?","a":"It uses a weighted average based on function values instead of the simple arithmetic mean."}
]
