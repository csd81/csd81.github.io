// Auto-generated learning aids for §2.1 (Review of Calculus).
// Glossary is bilingual; flashcards are sourced from 02_00/flashcards.csv (EN).
import type { Bi } from './sections'

export interface GlossaryEntry { term: Bi; def: Bi }
export interface Flashcard { q: string; a: string }

export const PRELIM_GLOSSARY: GlossaryEntry[] = [
  {
    "term": {
      "en": "$C[a,b]$",
      "hu": "$C[a,b]$"
    },
    "def": {
      "en": "The set of continuous real-valued functions defined on the closed interval $[a,b]$.",
      "hu": "Az $[a,b]$ zárt intervallumon folytonos, valós értékű függvények halmaza."
    }
  },
  {
    "term": {
      "en": "$C^m[a,b]$",
      "hu": "$C^m[a,b]$"
    },
    "def": {
      "en": "Functions continuous on $[a,b]$ and $m$-times continuously differentiable on the open interval $(a,b)$.",
      "hu": "Az $[a,b]$-n folytonos és az $(a,b)$ nyílt intervallumon $m$-szer folytonosan differenciálható függvények."
    }
  },
  {
    "term": {
      "en": "Spanned open interval $\\langle a_1,\\dots,a_n\\rangle$",
      "hu": "Kifeszített nyílt intervallum $\\langle a_1,\\dots,a_n\\rangle$"
    },
    "def": {
      "en": "Shorthand for $(\\min\\{a_1,\\dots,a_n\\},\\ \\max\\{a_1,\\dots,a_n\\})$ — the open interval between the smallest and largest of the listed numbers.",
      "hu": "A $(\\min\\{a_1,\\dots,a_n\\},\\ \\max\\{a_1,\\dots,a_n\\})$ rövidítése — a felsorolt számok legkisebbje és legnagyobbja közötti nyílt intervallum."
    }
  },
  {
    "term": {
      "en": "Extreme Value Theorem (Thm 2.1)",
      "hu": "Weierstrass-tétel (2.1. tétel)"
    },
    "def": {
      "en": "A function $f\\in C[a,b]$ attains its maximum and minimum on $[a,b]$: there exist $c,d\\in[a,b]$ with $f(d)\\le f(x)\\le f(c)$ for all $x$.",
      "hu": "Egy $f\\in C[a,b]$ függvény felveszi a maximumát és minimumát $[a,b]$-n: van olyan $c,d\\in[a,b]$, hogy $f(d)\\le f(x)\\le f(c)$ minden $x$-re."
    }
  },
  {
    "term": {
      "en": "Intermediate Value Theorem (Bolzano, Thm 2.2)",
      "hu": "Bolzano-tétel (Darboux, 2.2. tétel)"
    },
    "def": {
      "en": "A continuous $f$ on $[a,b]$ takes every value $d$ between $f(a)$ and $f(b)$: there is $c\\in(a,b)$ with $f(c)=d$. The basis of all bracketing methods.",
      "hu": "Egy $[a,b]$-n folytonos $f$ minden $f(a)$ és $f(b)$ közötti $d$ értéket felvesz: van $c\\in(a,b)$, hogy $f(c)=d$. Minden beágyazó módszer alapja."
    }
  },
  {
    "term": {
      "en": "Rolle's Theorem (Thm 2.3)",
      "hu": "Rolle-tétel (2.3. tétel)"
    },
    "def": {
      "en": "If $f\\in C^1[a,b]$ and $f(a)=f(b)$, then $f'(\\xi)=0$ for some $\\xi\\in(a,b)$ — a horizontal tangent. The special case of the MVT.",
      "hu": "Ha $f\\in C^1[a,b]$ és $f(a)=f(b)$, akkor van olyan $\\xi\\in(a,b)$, hogy $f'(\\xi)=0$ — vízszintes érintő. A középértéktétel speciális esete."
    }
  },
  {
    "term": {
      "en": "Lagrange's Mean Value Theorem (Thm 2.4)",
      "hu": "Lagrange-középértéktétel (2.4. tétel)"
    },
    "def": {
      "en": "For $f\\in C^1[a,b]$ there is $\\xi\\in(a,b)$ with $f(b)-f(a)=f'(\\xi)(b-a)$ — the tangent at $\\xi$ is parallel to the chord.",
      "hu": "Ha $f\\in C^1[a,b]$, akkor van $\\xi\\in(a,b)$, hogy $f(b)-f(a)=f'(\\xi)(b-a)$ — a $\\xi$-beli érintő párhuzamos a húrral."
    }
  },
  {
    "term": {
      "en": "Taylor's Theorem (Thm 2.5)",
      "hu": "Taylor-tétel (2.5. tétel)"
    },
    "def": {
      "en": "Expands $f\\in C^{n+1}$ around $x_0$ as a degree-$n$ polynomial plus a remainder $\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}$ for some $\\xi$ between $x$ and $x_0$.",
      "hu": "Egy $f\\in C^{n+1}$ függvényt $x_0$ körül $n$-edfokú polinom és egy $\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}$ maradéktag összegeként ír fel, ahol $\\xi$ az $x$ és $x_0$ közé esik."
    }
  },
  {
    "term": {
      "en": "Mean Value Theorem for Integrals (Thm 2.6)",
      "hu": "Integrál-középértéktétel (2.6. tétel)"
    },
    "def": {
      "en": "If $f\\in C[a,b]$ and $g$ is integrable with no sign change, then $\\int_a^b f g = f(\\xi)\\int_a^b g$ for some $\\xi\\in(a,b)$.",
      "hu": "Ha $f\\in C[a,b]$ és $g$ integrálható, előjelet nem váltó, akkor $\\int_a^b f g = f(\\xi)\\int_a^b g$ valamely $\\xi\\in(a,b)$-re."
    }
  },
  {
    "term": {
      "en": "Cantor's Intersection Theorem (Thm 2.7)",
      "hu": "Cantor-féle közösrész-tétel (2.7. tétel)"
    },
    "def": {
      "en": "A sequence of nested closed bounded intervals $[a_{n+1},b_{n+1}]\\subset[a_n,b_n]$ with lengths $\\to 0$ shrinks to a single common point $c$. This is what makes bisection converge.",
      "hu": "Egymásba skatulyázott, zárt, korlátos intervallumok $[a_{n+1},b_{n+1}]\\subset[a_n,b_n]$ sorozata, melyek hossza $\\to 0$, egyetlen közös $c$ pontra húzódik össze. Ettől konvergens a felezés."
    }
  },
  {
    "term": {
      "en": "Monotone convergence (Thm 2.8)",
      "hu": "Monoton konvergencia (2.8. tétel)"
    },
    "def": {
      "en": "A monotone and bounded real sequence has a finite limit.",
      "hu": "Minden monoton és korlátos valós sorozatnak van véges határértéke."
    }
  },
  {
    "term": {
      "en": "Fundamental Theorem of Algebra (Thm 2.9)",
      "hu": "Az algebra alaptétele (2.9. tétel)"
    },
    "def": {
      "en": "Every degree-$n$ polynomial with complex coefficients has exactly $n$ complex roots, counted with multiplicity. Hence a degree-$n$ polynomial with $n+1$ distinct roots is identically zero.",
      "hu": "Minden $n$-edfokú, komplex együtthatós polinomnak pontosan $n$ komplex gyöke van (multiplicitással). Ezért egy $n$-edfokú polinom, amelynek $n+1$ különböző gyöke van, azonosan nulla."
    }
  }
]

export const PRELIM_FLASHCARDS: Flashcard[] = [
  {"q":"In mathematical notation, what set of functions does $C[a,b]$ denote?","a":"The set of continuous real-valued functions defined on the interval $[a,b]$."},
  {"q":"The set of continuous real-valued functions that are $m$-times continuously differentiable on $(a,b)$ is denoted as _____.","a":"$C^m[a,b]$"},
  {"q":"Under what condition is a real-valued function $f$ guaranteed to have both a maximum and a minimum on the interval $[a,b]$?","a":"$f$ must be continuous on the closed interval $[a,b]$ (i.e., $f \\in C[a,b]$)."},
  {"q":"How is the open interval spanned by two numbers $a$ and $b$ denoted in this text?","a":"$\\langle a,b\\rangle$"},
  {"q":"Definition: $\\langle a,b\\rangle$","a":"$(\\min\\{a,b\\}, \\max\\{a,b\\})$"},
  {"q":"What is the definition of the open interval spanned by a set of numbers $\\langle a_1, a_2, \\dots, a_n\\rangle$?","a":"$(\\min\\{a_1, a_2, \\dots, a_n\\}, \\max\\{a_1, a_2, \\dots, a_n\\})$"},
  {"q":"Which theorem states that a continuous function takes every value between two of its function values?","a":"The Intermediate Value Theorem (Theorem 2.2)"},
  {"q":"Intermediate Value Theorem: If $f \\in C[a,b]$ and $d$ is a value between $f(a)$ and $f(b)$, where is the point $c$ such that $f(c) = d$ located?","a":"In the open interval $(a,b)$."},
  {"q":"What is the primary requirement for $f(a)$ and $f(b)$ to apply the Intermediate Value Theorem to a value $d$ between them?","a":"$f(a) \\ne f(b)$"},
  {"q":"What are the two hypotheses required for Rolle's Theorem (Theorem 2.3)?","a":"$f \\in C^1[a,b]$ and $f(a) = f(b)$."},
  {"q":"Rolle's Theorem: If $f \\in C^1[a,b]$ and $f(a) = f(b)$, what must exist at some point $\\xi \\in (a,b)$?","a":"A point where the derivative $f'(\\xi) = 0$."},
  {"q":"Which theorem provides the conclusion $f(b) - f(a) = f'(\\xi)(b - a)$?","a":"Lagrange's Mean Value Theorem (Theorem 2.4)"},
  {"q":"What differentiability class must $f$ belong to for Lagrange's Mean Value Theorem to apply on $[a,b]$?","a":"$C^1[a,b]$"},
  {"q":"In Lagrange's Mean Value Theorem, where is the point $\\xi$ located relative to $a$ and $b$?","a":"In the open interval $(a,b)$."},
  {"q":"To use Taylor's Theorem to expand a function $f$ with a remainder of order $n+1$, $f$ must belong to the set _____.","a":"$C^{n+1}[a,b]$"},
  {"q":"In Taylor's Theorem, where must the point $x_0$ be located?","a":"In the open interval $(a,b)$."},
  {"q":"What is the general form of the $k$-th term (excluding the remainder) in a Taylor expansion of $f(x)$ around $x_0$?","a":"$\\frac{f^{(k)}(x_0)}{k!}(x - x_0)^k$"},
  {"q":"In Taylor's Theorem, what is the formula for the remainder term of order $n+1$?","a":"$\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x - x_0)^{n+1}$"},
  {"q":"Where is the value $\\xi$ located in the Taylor expansion remainder term?","a":"In the open interval spanned by $x$ and $x_0$ (i.e., $\\xi \\in \\langle x, x_0\\rangle$)."},
  {"q":"According to the Mean Value Theorem for integrals, what condition must the integrable function $g(x)$ satisfy on $[a,b]$?","a":"$g(x)$ must not change sign on $[a,b]$ (it is always non-negative or always non-positive)."},
  {"q":"Conclusion: Mean Value Theorem for Integrals","a":"$\\int_a^b f(x) g(x)\\, dx = f(\\xi) \\int_a^b g(x)\\, dx$"},
  {"q":"In the Mean Value Theorem for integrals, what property must $f$ have?","a":"$f$ must be continuous on $[a,b]$ ($f \\in C[a,b]$)."},
  {"q":"Cantor's Intersection Theorem involves a sequence of intervals $[a_n, b_n]$ that are closed, bounded, and _____.","a":"Nested (i.e., $[a_{n+1}, b_{n+1}] \\subset [a_n, b_n]$)."},
  {"q":"In Cantor's Intersection Theorem, what must happen to the length $(b_n - a_n)$ as $n \\to \\infty$?","a":"The length must tend to zero ($(b_n - a_n) \\to 0$)."},
  {"q":"If the conditions of Cantor's Intersection Theorem are met, what is the conclusion regarding the sequences $a_n$ and $b_n$?","a":"Both sequences converge to the same point $c \\in [a_1, b_1]$."},
  {"q":"What two properties ensure that a real sequence has a finite limit?","a":"Being monotone and bounded (Theorem 2.8)."},
  {"q":"The Fundamental Theorem of Algebra states that an $n$-th degree polynomial with complex coefficients has exactly $n$ complex roots, provided we use _____.","a":"Counting multiplicities"},
  {"q":"Formula: General form of an $n$-th degree polynomial $p(x)$","a":"$p(x) = a_n x^n + \\dots + a_1 x + a_0$"},
  {"q":"If a polynomial $p(x)$ of degree $n$ has $n+1$ distinct roots, what can be concluded about $p(x)$?","a":"$p(x) = 0$ for all $x \\in \\mathbb{R}$ (it is the identically zero polynomial)."},
  {"q":"According to Theorem 2.9, what coefficient restriction is required for a polynomial to be considered $n$-th degree?","a":"The leading coefficient $a_n$ must not be zero ($a_n \\neq 0$)."},
  {"q":"How does $C^1[a,b]$ differ from $C[a,b]$?","a":"$C^1[a,b]$ functions are continuously differentiable on $(a,b)$, while $C[a,b]$ functions are only required to be continuous."},
  {"q":"If $f \\in C[1,5]$, $f(1)=2$, and $f(5)=10$, which theorem guarantees a $c \\in (1,5)$ such that $f(c)=6$?","a":"Intermediate Value Theorem (Theorem 2.2)"},
  {"q":"In Rolle's Theorem, is the interval for the derivative $\\xi$ open or closed?","a":"Open ($(a,b)$)."},
  {"q":"Taylor's Theorem: If $n=0$, the formula simplifies to which other theorem?","a":"Lagrange's Mean Value Theorem"},
  {"q":"The notation $f^{(n)}(x_0)$ in Taylor's Theorem refers to what?","a":"The $n$-th derivative of $f$ evaluated at $x_0$."},
  {"q":"In Theorem 2.6, if $g(x) = 1$ for all $x$, the formula becomes $\\int_a^b f(x)\\, dx = \\dots$.","a":"$f(\\xi)(b - a)$"},
  {"q":"Cantor's Intersection Theorem guarantees the existence of a point $c$ within which specific interval?","a":"$[a_1, b_1]$ (the first interval in the sequence)."},
  {"q":"If a sequence is strictly increasing and bounded above, what does Theorem 2.8 guarantee?","a":"The sequence has a finite limit."},
  {"q":"Theorem 2.1 states that $f$ has its maximum and minimum on $[a,b]$. What specific symbols are used in the text to denote the points where these occur?","a":"$c$ and $d$ (where $f(c) = \\max f(x)$ and $f(d) = \\min f(x)$)."},
  {"q":"What is the value of $\\langle 10, 2\\rangle$?","a":"$(2, 10)$"},
  {"q":"What is the value of $\\langle 5, -1, 3\\rangle$?","a":"$(-1, 5)$"},
  {"q":"In Rolle's Theorem, if $f(a) = f(b) = 0$, what does the theorem conclude about roots of the derivative?","a":"There is at least one root of the derivative $f'$ in $(a,b)$."},
  {"q":"Lagrange's Mean Value Theorem states there is a point where the instantaneous rate of change equals the _____ rate of change.","a":"Average"},
  {"q":"In Taylor's Theorem, the variable $\\xi$ is described as a function of which other variable?","a":"The variable $x$ (written as $\\xi = \\xi(x)$)."},
  {"q":"If $f \\in C[a,b]$ and $g$ is integrable and non-negative, the integral MVT concludes there is a $\\xi \\in (a,b)$ such that $\\int_a^b f g = \\dots$.","a":"$f(\\xi) \\int_a^b g$"},
  {"q":"Does Cantor's Intersection Theorem apply to open intervals $(a_n, b_n)$?","a":"No, the theorem specifically requires closed and bounded intervals $[a_n, b_n]$."},
  {"q":"Theorem 2.8: A sequence that is bounded and _____ has a finite limit.","a":"Monotone"},
  {"q":"Fundamental Theorem of Algebra: The coefficients $a_j$ of the polynomial $p(x)$ are elements of which set?","a":"The set of complex numbers $\\mathbb{C}$."},
  {"q":"What occurs if a polynomial of degree $n$ has $n+1$ different roots?","a":"$p(x) = 0$ for all $x$."},
  {"q":"If $f \\in C^2[a,b]$, how many times is $f$ continuously differentiable on $(a,b)$?","a":"Two times"},
  {"q":"In Theorem 2.7, what is the relationship between $[a_n, b_n]$ and $[a_{n+1}, b_{n+1}]$?","a":"$[a_{n+1}, b_{n+1}]$ is a subset of $[a_n, b_n]$ ($[a_{n+1}, b_{n+1}] \\subset [a_n, b_n]$)."},
  {"q":"The Intermediate Value Theorem requires $d$ to be an element of which set defined by the function values at the endpoints?","a":"The open interval spanned by $f(a)$ and $f(b)$, denoted $\\langle f(a), f(b)\\rangle$."}
]
