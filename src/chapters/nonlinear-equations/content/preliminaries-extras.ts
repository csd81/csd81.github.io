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
  {"q":{"en":"In mathematical notation, what set of functions does $C[a,b]$ denote?","hu":"Matematikai jelöléssel milyen függvényhalmazt jelöl $C[a,b]$?"},"a":{"en":"The set of continuous real-valued functions defined on the interval $[a,b]$.","hu":"Az $[a,b]$ intervallumon értelmezett folytonos valós értékű függvények halmazát."}},
  {"q":{"en":"The set of continuous real-valued functions that are $m$-times continuously differentiable on $(a,b)$ is denoted as _____.","hu":"Az $(a,b)$-n $m$-szer folytonosan differenciálható valós értékű függvények halmazát _____ jelöli."},"a":{"en":"$C^m[a,b]$","hu":"$C^m[a,b]$"}},
  {"q":{"en":"Under what condition is a real-valued function $f$ guaranteed to have both a maximum and a minimum on the interval $[a,b]$?","hu":"Milyen feltétel mellett garantált, hogy egy $f$ valós értékű függvénynek van maximuma és minimuma is az $[a,b]$ intervallumon?"},"a":{"en":"$f$ must be continuous on the closed interval $[a,b]$ (i.e., $f \\in C[a,b]$).","hu":"$f$-nek folytonosnak kell lennie a zárt $[a,b]$ intervallumon (azaz $f \\in C[a,b]$)."}},
  {"q":{"en":"How is the open interval spanned by two numbers $a$ and $b$ denoted in this text?","hu":"Hogyan jelöli ez a szöveg a két $a$ és $b$ szám által kifeszített nyílt intervallumot?"},"a":{"en":"$\\langle a,b\\rangle$","hu":"$\\langle a,b\\rangle$"}},
  {"q":{"en":"Definition: $\\langle a,b\\rangle$","hu":"Definíció: $\\langle a,b\\rangle$"},"a":{"en":"$(\\min\\{a,b\\}, \\max\\{a,b\\})$","hu":"$(\\min\\{a,b\\}, \\max\\{a,b\\})$"}},
  {"q":{"en":"What is the definition of the open interval spanned by a set of numbers $\\langle a_1, a_2, \\dots, a_n\\rangle$?","hu":"Mi a számok egy halmaza által kifeszített $\\langle a_1, a_2, \\dots, a_n\\rangle$ nyílt intervallum definíciója?"},"a":{"en":"$(\\min\\{a_1, a_2, \\dots, a_n\\}, \\max\\{a_1, a_2, \\dots, a_n\\})$","hu":"$(\\min\\{a_1, a_2, \\dots, a_n\\}, \\max\\{a_1, a_2, \\dots, a_n\\})$"}},
  {"q":{"en":"Which theorem states that a continuous function takes every value between two of its function values?","hu":"Melyik tétel mondja ki, hogy egy folytonos függvény felvesz minden értéket két függvényértéke között?"},"a":{"en":"The Intermediate Value Theorem (Theorem 2.2)","hu":"A közbülső érték tétele (2.2. tétel)"}},
  {"q":{"en":"Intermediate Value Theorem: If $f \\in C[a,b]$ and $d$ is a value between $f(a)$ and $f(b)$, where is the point $c$ such that $f(c) = d$ located?","hu":"Közbülső érték tétele: Ha $f \\in C[a,b]$ és $d$ az $f(a)$ és $f(b)$ közötti érték, hol helyezkedik el az a $c$ pont, amelyre $f(c) = d$?"},"a":{"en":"In the open interval $(a,b)$.","hu":"Az $(a,b)$ nyílt intervallumban."}},
  {"q":{"en":"What is the primary requirement for $f(a)$ and $f(b)$ to apply the Intermediate Value Theorem to a value $d$ between them?","hu":"Mi az elsődleges követelmény $f(a)$-ra és $f(b)$-re, hogy a közbülső érték tételét egy köztük lévő $d$ értékre alkalmazzuk?"},"a":{"en":"$f(a) \\ne f(b)$","hu":"$f(a) \\ne f(b)$"}},
  {"q":{"en":"What are the two hypotheses required for Rolle's Theorem (Theorem 2.3)?","hu":"Mi a Rolle-tétel (2.3. tétel) két feltétele?"},"a":{"en":"$f \\in C^1[a,b]$ and $f(a) = f(b)$.","hu":"$f \\in C^1[a,b]$ és $f(a) = f(b)$."}},
  {"q":{"en":"Rolle's Theorem: If $f \\in C^1[a,b]$ and $f(a) = f(b)$, what must exist at some point $\\xi \\in (a,b)$?","hu":"Rolle-tétel: Ha $f \\in C^1[a,b]$ és $f(a) = f(b)$, minek kell léteznie valamely $\\xi \\in (a,b)$ pontban?"},"a":{"en":"A point where the derivative $f'(\\xi) = 0$.","hu":"Egy pontnak, ahol a derivált $f'(\\xi) = 0$."}},
  {"q":{"en":"Which theorem provides the conclusion $f(b) - f(a) = f'(\\xi)(b - a)$?","hu":"Melyik tétel adja a $f(b) - f(a) = f'(\\xi)(b - a)$ következtetést?"},"a":{"en":"Lagrange's Mean Value Theorem (Theorem 2.4)","hu":"A Lagrange-féle középértéktétel (2.4. tétel)"}},
  {"q":{"en":"What differentiability class must $f$ belong to for Lagrange's Mean Value Theorem to apply on $[a,b]$?","hu":"Milyen differenciálhatósági osztályba kell tartoznia $f$-nek, hogy a Lagrange-középértéktétel alkalmazható legyen $[a,b]$-n?"},"a":{"en":"$C^1[a,b]$","hu":"$C^1[a,b]$"}},
  {"q":{"en":"In Lagrange's Mean Value Theorem, where is the point $\\xi$ located relative to $a$ and $b$?","hu":"A Lagrange-középértéktételben hol helyezkedik el a $\\xi$ pont $a$-hoz és $b$-hez képest?"},"a":{"en":"In the open interval $(a,b)$.","hu":"Az $(a,b)$ nyílt intervallumban."}},
  {"q":{"en":"To use Taylor's Theorem to expand a function $f$ with a remainder of order $n+1$, $f$ must belong to the set _____.","hu":"Ahhoz, hogy a Taylor-tétellel egy $f$ függvényt $n+1$-edrendű maradéktaggal fejtsünk ki, $f$-nek a _____ halmazba kell tartoznia."},"a":{"en":"$C^{n+1}[a,b]$","hu":"$C^{n+1}[a,b]$"}},
  {"q":{"en":"In Taylor's Theorem, where must the point $x_0$ be located?","hu":"A Taylor-tételben hol kell elhelyezkednie az $x_0$ pontnak?"},"a":{"en":"In the open interval $(a,b)$.","hu":"Az $(a,b)$ nyílt intervallumban."}},
  {"q":{"en":"What is the general form of the $k$-th term (excluding the remainder) in a Taylor expansion of $f(x)$ around $x_0$?","hu":"Mi az $f(x)$ $x_0$ körüli Taylor-kifejtésében a $k$-adik tag (a maradéktag nélkül) általános alakja?"},"a":{"en":"$\\frac{f^{(k)}(x_0)}{k!}(x - x_0)^k$","hu":"$\\frac{f^{(k)}(x_0)}{k!}(x - x_0)^k$"}},
  {"q":{"en":"In Taylor's Theorem, what is the formula for the remainder term of order $n+1$?","hu":"A Taylor-tételben mi az $n+1$-edrendű maradéktag képlete?"},"a":{"en":"$\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x - x_0)^{n+1}$","hu":"$\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x - x_0)^{n+1}$"}},
  {"q":{"en":"Where is the value $\\xi$ located in the Taylor expansion remainder term?","hu":"Hol helyezkedik el a $\\xi$ érték a Taylor-kifejtés maradéktagjában?"},"a":{"en":"In the open interval spanned by $x$ and $x_0$ (i.e., $\\xi \\in \\langle x, x_0\\rangle$).","hu":"Az $x$ és $x_0$ által kifeszített nyílt intervallumban (azaz $\\xi \\in \\langle x, x_0\\rangle$)."}},
  {"q":{"en":"According to the Mean Value Theorem for integrals, what condition must the integrable function $g(x)$ satisfy on $[a,b]$?","hu":"Az integrálok középértéktétele szerint milyen feltételt kell teljesítenie a $g(x)$ integrálható függvénynek $[a,b]$-n?"},"a":{"en":"$g(x)$ must not change sign on $[a,b]$ (it is always non-negative or always non-positive).","hu":"$g(x)$ nem válthat előjelet $[a,b]$-n (mindig nemnegatív vagy mindig nempozitív)."}},
  {"q":{"en":"Conclusion: Mean Value Theorem for Integrals","hu":"Következtetés: Az integrálok középértéktétele"},"a":{"en":"$\\int_a^b f(x) g(x)\\, dx = f(\\xi) \\int_a^b g(x)\\, dx$","hu":"$\\int_a^b f(x) g(x)\\, dx = f(\\xi) \\int_a^b g(x)\\, dx$"}},
  {"q":{"en":"In the Mean Value Theorem for integrals, what property must $f$ have?","hu":"Az integrálok középértéktételében milyen tulajdonsággal kell rendelkeznie $f$-nek?"},"a":{"en":"$f$ must be continuous on $[a,b]$ ($f \\in C[a,b]$).","hu":"$f$-nek folytonosnak kell lennie $[a,b]$-n ($f \\in C[a,b]$)."}},
  {"q":{"en":"Cantor's Intersection Theorem involves a sequence of intervals $[a_n, b_n]$ that are closed, bounded, and _____.","hu":"A Cantor-féle metszettétel olyan $[a_n, b_n]$ intervallumsorozatra vonatkozik, amelyek zártak, korlátosak és _____."},"a":{"en":"Nested (i.e., $[a_{n+1}, b_{n+1}] \\subset [a_n, b_n]$).","hu":"Egymásba ágyazottak (azaz $[a_{n+1}, b_{n+1}] \\subset [a_n, b_n]$)."}},
  {"q":{"en":"In Cantor's Intersection Theorem, what must happen to the length $(b_n - a_n)$ as $n \\to \\infty$?","hu":"A Cantor-féle metszettételben mi kell történjen a $(b_n - a_n)$ hosszal, ha $n \\to \\infty$?"},"a":{"en":"The length must tend to zero ($(b_n - a_n) \\to 0$).","hu":"A hossznak nullához kell tartania ($(b_n - a_n) \\to 0$)."}},
  {"q":{"en":"If the conditions of Cantor's Intersection Theorem are met, what is the conclusion regarding the sequences $a_n$ and $b_n$?","hu":"Ha a Cantor-féle metszettétel feltételei teljesülnek, mi a következtetés az $a_n$ és $b_n$ sorozatokra?"},"a":{"en":"Both sequences converge to the same point $c \\in [a_1, b_1]$.","hu":"Mindkét sorozat ugyanahhoz a $c \\in [a_1, b_1]$ ponthoz konvergál."}},
  {"q":{"en":"What two properties ensure that a real sequence has a finite limit?","hu":"Mely két tulajdonság biztosítja, hogy egy valós sorozatnak véges határértéke legyen?"},"a":{"en":"Being monotone and bounded (Theorem 2.8).","hu":"A monotonitás és a korlátosság (2.8. tétel)."}},
  {"q":{"en":"The Fundamental Theorem of Algebra states that an $n$-th degree polynomial with complex coefficients has exactly $n$ complex roots, provided we use _____.","hu":"Az algebra alaptétele szerint egy komplex együtthatós $n$-edfokú polinomnak pontosan $n$ komplex gyöke van, feltéve, hogy _____ vesszük."},"a":{"en":"Counting multiplicities","hu":"A multiplicitásokat is figyelembe"}},
  {"q":{"en":"Formula: General form of an $n$-th degree polynomial $p(x)$","hu":"Képlet: Egy $n$-edfokú $p(x)$ polinom általános alakja"},"a":{"en":"$p(x) = a_n x^n + \\dots + a_1 x + a_0$","hu":"$p(x) = a_n x^n + \\dots + a_1 x + a_0$"}},
  {"q":{"en":"If a polynomial $p(x)$ of degree $n$ has $n+1$ distinct roots, what can be concluded about $p(x)$?","hu":"Ha egy $n$-edfokú $p(x)$ polinomnak $n+1$ különböző gyöke van, mit következtethetünk $p(x)$-ről?"},"a":{"en":"$p(x) = 0$ for all $x \\in \\mathbb{R}$ (it is the identically zero polynomial).","hu":"$p(x) = 0$ minden $x \\in \\mathbb{R}$-re (az azonosan nulla polinom)."}},
  {"q":{"en":"According to Theorem 2.9, what coefficient restriction is required for a polynomial to be considered $n$-th degree?","hu":"A 2.9. tétel szerint milyen együttható-megszorítás kell ahhoz, hogy egy polinomot $n$-edfokúnak tekintsünk?"},"a":{"en":"The leading coefficient $a_n$ must not be zero ($a_n \\neq 0$).","hu":"A vezető $a_n$ együttható nem lehet nulla ($a_n \\neq 0$)."}},
  {"q":{"en":"How does $C^1[a,b]$ differ from $C[a,b]$?","hu":"Miben különbözik $C^1[a,b]$ a $C[a,b]$-től?"},"a":{"en":"$C^1[a,b]$ functions are continuously differentiable on $(a,b)$, while $C[a,b]$ functions are only required to be continuous.","hu":"A $C^1[a,b]$ függvények folytonosan differenciálhatók $(a,b)$-n, míg a $C[a,b]$ függvényeknek csak folytonosnak kell lenniük."}},
  {"q":{"en":"If $f \\in C[1,5]$, $f(1)=2$, and $f(5)=10$, which theorem guarantees a $c \\in (1,5)$ such that $f(c)=6$?","hu":"Ha $f \\in C[1,5]$, $f(1)=2$ és $f(5)=10$, melyik tétel garantál egy $c \\in (1,5)$-et, amelyre $f(c)=6$?"},"a":{"en":"Intermediate Value Theorem (Theorem 2.2)","hu":"A közbülső érték tétele (2.2. tétel)"}},
  {"q":{"en":"In Rolle's Theorem, is the interval for the derivative $\\xi$ open or closed?","hu":"A Rolle-tételben a derivált $\\xi$-jéhez tartozó intervallum nyílt vagy zárt?"},"a":{"en":"Open ($(a,b)$).","hu":"Nyílt ($(a,b)$)."}},
  {"q":{"en":"Taylor's Theorem: If $n=0$, the formula simplifies to which other theorem?","hu":"Taylor-tétel: Ha $n=0$, melyik másik tételre egyszerűsödik a képlet?"},"a":{"en":"Lagrange's Mean Value Theorem","hu":"A Lagrange-féle középértéktételre"}},
  {"q":{"en":"The notation $f^{(n)}(x_0)$ in Taylor's Theorem refers to what?","hu":"Mire utal a Taylor-tételben az $f^{(n)}(x_0)$ jelölés?"},"a":{"en":"The $n$-th derivative of $f$ evaluated at $x_0$.","hu":"Az $f$ $n$-edik deriváltjára $x_0$-ban kiértékelve."}},
  {"q":{"en":"In Theorem 2.6, if $g(x) = 1$ for all $x$, the formula becomes $\\int_a^b f(x)\\, dx = \\dots$.","hu":"A 2.6. tételben, ha $g(x) = 1$ minden $x$-re, a képlet $\\int_a^b f(x)\\, dx = \\dots$-re válik."},"a":{"en":"$f(\\xi)(b - a)$","hu":"$f(\\xi)(b - a)$"}},
  {"q":{"en":"Cantor's Intersection Theorem guarantees the existence of a point $c$ within which specific interval?","hu":"A Cantor-féle metszettétel mely konkrét intervallumon belül garantálja egy $c$ pont létezését?"},"a":{"en":"$[a_1, b_1]$ (the first interval in the sequence).","hu":"$[a_1, b_1]$ (a sorozat első intervalluma)."}},
  {"q":{"en":"If a sequence is strictly increasing and bounded above, what does Theorem 2.8 guarantee?","hu":"Ha egy sorozat szigorúan növekvő és felülről korlátos, mit garantál a 2.8. tétel?"},"a":{"en":"The sequence has a finite limit.","hu":"A sorozatnak véges határértéke van."}},
  {"q":{"en":"Theorem 2.1 states that $f$ has its maximum and minimum on $[a,b]$. What specific symbols are used in the text to denote the points where these occur?","hu":"A 2.1. tétel kimondja, hogy $f$-nek van maximuma és minimuma $[a,b]$-n. Milyen konkrét szimbólumokkal jelöli a szöveg azokat a pontokat, ahol ezek előfordulnak?"},"a":{"en":"$c$ and $d$ (where $f(c) = \\max f(x)$ and $f(d) = \\min f(x)$).","hu":"$c$ és $d$ (ahol $f(c) = \\max f(x)$ és $f(d) = \\min f(x)$)."}},
  {"q":{"en":"What is the value of $\\langle 10, 2\\rangle$?","hu":"Mennyi $\\langle 10, 2\\rangle$ értéke?"},"a":{"en":"$(2, 10)$","hu":"$(2, 10)$"}},
  {"q":{"en":"What is the value of $\\langle 5, -1, 3\\rangle$?","hu":"Mennyi $\\langle 5, -1, 3\\rangle$ értéke?"},"a":{"en":"$(-1, 5)$","hu":"$(-1, 5)$"}},
  {"q":{"en":"In Rolle's Theorem, if $f(a) = f(b) = 0$, what does the theorem conclude about roots of the derivative?","hu":"A Rolle-tételben, ha $f(a) = f(b) = 0$, mit állít a tétel a derivált gyökeiről?"},"a":{"en":"There is at least one root of the derivative $f'$ in $(a,b)$.","hu":"Az $f'$ deriváltnak legalább egy gyöke van $(a,b)$-ben."}},
  {"q":{"en":"Lagrange's Mean Value Theorem states there is a point where the instantaneous rate of change equals the _____ rate of change.","hu":"A Lagrange-középértéktétel szerint van olyan pont, ahol a pillanatnyi változási sebesség egyenlő a _____ változási sebességgel."},"a":{"en":"Average","hu":"Átlagos"}},
  {"q":{"en":"In Taylor's Theorem, the variable $\\xi$ is described as a function of which other variable?","hu":"A Taylor-tételben a $\\xi$ változót melyik másik változó függvényeként írják le?"},"a":{"en":"The variable $x$ (written as $\\xi = \\xi(x)$).","hu":"Az $x$ változóé (úgy írva: $\\xi = \\xi(x)$)."}},
  {"q":{"en":"If $f \\in C[a,b]$ and $g$ is integrable and non-negative, the integral MVT concludes there is a $\\xi \\in (a,b)$ such that $\\int_a^b f g = \\dots$.","hu":"Ha $f \\in C[a,b]$ és $g$ integrálható és nemnegatív, az integrál-középértéktétel szerint van olyan $\\xi \\in (a,b)$, hogy $\\int_a^b f g = \\dots$."},"a":{"en":"$f(\\xi) \\int_a^b g$","hu":"$f(\\xi) \\int_a^b g$"}},
  {"q":{"en":"Does Cantor's Intersection Theorem apply to open intervals $(a_n, b_n)$?","hu":"Alkalmazható-e a Cantor-féle metszettétel nyílt $(a_n, b_n)$ intervallumokra?"},"a":{"en":"No, the theorem specifically requires closed and bounded intervals $[a_n, b_n]$.","hu":"Nem, a tétel kifejezetten zárt és korlátos $[a_n, b_n]$ intervallumokat igényel."}},
  {"q":{"en":"Theorem 2.8: A sequence that is bounded and _____ has a finite limit.","hu":"2.8. tétel: Egy korlátos és _____ sorozatnak véges határértéke van."},"a":{"en":"Monotone","hu":"Monoton"}},
  {"q":{"en":"Fundamental Theorem of Algebra: The coefficients $a_j$ of the polynomial $p(x)$ are elements of which set?","hu":"Az algebra alaptétele: A $p(x)$ polinom $a_j$ együtthatói melyik halmaz elemei?"},"a":{"en":"The set of complex numbers $\\mathbb{C}$.","hu":"A komplex számok $\\mathbb{C}$ halmazáé."}},
  {"q":{"en":"What occurs if a polynomial of degree $n$ has $n+1$ different roots?","hu":"Mi történik, ha egy $n$-edfokú polinomnak $n+1$ különböző gyöke van?"},"a":{"en":"$p(x) = 0$ for all $x$.","hu":"$p(x) = 0$ minden $x$-re."}},
  {"q":{"en":"If $f \\in C^2[a,b]$, how many times is $f$ continuously differentiable on $(a,b)$?","hu":"Ha $f \\in C^2[a,b]$, hányszor folytonosan differenciálható $f$ az $(a,b)$-n?"},"a":{"en":"Two times","hu":"Kétszer"}},
  {"q":{"en":"In Theorem 2.7, what is the relationship between $[a_n, b_n]$ and $[a_{n+1}, b_{n+1}]$?","hu":"A 2.7. tételben mi a kapcsolat $[a_n, b_n]$ és $[a_{n+1}, b_{n+1}]$ között?"},"a":{"en":"$[a_{n+1}, b_{n+1}]$ is a subset of $[a_n, b_n]$ ($[a_{n+1}, b_{n+1}] \\subset [a_n, b_n]$).","hu":"$[a_{n+1}, b_{n+1}]$ részhalmaza $[a_n, b_n]$-nek ($[a_{n+1}, b_{n+1}] \\subset [a_n, b_n]$)."}},
  {"q":{"en":"The Intermediate Value Theorem requires $d$ to be an element of which set defined by the function values at the endpoints?","hu":"A közbülső érték tétele megköveteli, hogy $d$ a végpontokbeli függvényértékek által definiált melyik halmaz eleme legyen?"},"a":{"en":"The open interval spanned by $f(a)$ and $f(b)$, denoted $\\langle f(a), f(b)\\rangle$.","hu":"Az $f(a)$ és $f(b)$ által kifeszített nyílt intervallumé, jelölve $\\langle f(a), f(b)\\rangle$."}}
]
