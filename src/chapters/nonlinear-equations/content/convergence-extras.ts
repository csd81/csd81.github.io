// Auto-generated learning aids for '2.7 (Order of Convergence).
import type { GlossaryEntry, Flashcard } from '../components/widgets/decks'

export const CONV_GLOSSARY: GlossaryEntry[] = [
  {
    "term": {
      "en": "Order of convergence (Eq. 2.16)",
      "hu": "Konvergencia rendje (2.16)"
    },
    "def": {
      "en": "A convergent $p_k\\to p$ has order $\\alpha\\ge1$ if $|p_{k+1}-p|\\le c\\,|p_k-p|^{\\alpha}$ (and $c<1$ when $\\alpha=1$). It measures how fast the error shrinks per step.",
      "hu": "Egy konvergens $p_k\\to p$ rendje $\\alpha\\ge1$, ha $|p_{k+1}-p|\\le c\\,|p_k-p|^{\\alpha}$ ($\\alpha=1$ esetén $c<1$). Azt méri, milyen gyorsan csökken a hiba lépésenként."
    }
  },
  {
    "term": {
      "en": "Linear / quadratic convergence",
      "hu": "Lineáris / kvadratikus konvergencia"
    },
    "def": {
      "en": "$\\alpha=1$ is **linear** (error $\\le c^k|p_0-p|$, geometric decay); $\\alpha=2$ is **quadratic** (correct digits roughly double each step).",
      "hu": "$\\alpha=1$ a **lineáris** (hiba $\\le c^k|p_0-p|$, mértani csökkenés); $\\alpha=2$ a **kvadratikus** (a helyes jegyek lépésenként nagyjából megduplázódnak)."
    }
  },
  {
    "term": {
      "en": "Asymptotic error constant $\\lambda$ (Eq. 2.18)",
      "hu": "Aszimptotikus hibakonstans $\\lambda$ (2.18)"
    },
    "def": {
      "en": "$\\lambda=\\lim_{k\\to\\infty}\\dfrac{p_{k+1}-p}{(p_k-p)^{\\alpha}}$, when finite. If it exists then the order is exactly $\\alpha$. Linear convergence with $\\lambda=0$ is **superlinear**.",
      "hu": "$\\lambda=\\lim_{k\\to\\infty}\\dfrac{p_{k+1}-p}{(p_k-p)^{\\alpha}}$, ha véges. Ha létezik, a rend pontosan $\\alpha$. A $\\lambda=0$ aszimptotikus konstansú lineáris konvergencia **szuperlineáris**."
    }
  },
  {
    "term": {
      "en": "Exact vs. at-least order (Thm 2.28)",
      "hu": "Pontos vs. legalább rend (2.28. tétel)"
    },
    "def": {
      "en": "If $\\lambda\\ne0$ then $\\dfrac{p_{k+1}-p}{(p_k-p)^{\\beta}}\\to0$ for every $\\beta<\\alpha$ and $\\to\\infty$ for every $\\beta>\\alpha$ — so $\\alpha$ is the *exact* order. (2.16) alone gives only “at least α”.",
      "hu": "Ha $\\lambda\\ne0$, akkor $\\dfrac{p_{k+1}-p}{(p_k-p)^{\\beta}}\\to0$ minden $\\beta<\\alpha$-ra és $\\to\\infty$ minden $\\beta>\\alpha$-ra — tehát $\\alpha$ a *pontos* rend. A (2.16) önmagában csak „legalább α”-t ad."
    }
  },
  {
    "term": {
      "en": "Order > 1 ⟹ local convergence (Thm 2.30, Eq. 2.19)",
      "hu": "Rend > 1 ⟹ lokális konvergencia (2.30. tétel, 2.19)"
    },
    "def": {
      "en": "If (2.16) holds with $\\alpha>1$, then $|p_k-p|\\le c^{(\\alpha^k-1)/(\\alpha-1)}|p_0-p|^{\\alpha^k}$, so $p_k\\to p$ whenever $c^{1/(\\alpha-1)}|p_0-p|<1$ — convergence is only guaranteed near $p$.",
      "hu": "Ha (2.16) teljesül $\\alpha>1$-gyel, akkor $|p_k-p|\\le c^{(\\alpha^k-1)/(\\alpha-1)}|p_0-p|^{\\alpha^k}$, így $p_k\\to p$, valahányszor $c^{1/(\\alpha-1)}|p_0-p|<1$ — a konvergencia csak $p$ közelében garantált."
    }
  },
  {
    "term": {
      "en": "Fixed-point order theorem (Thm 2.32)",
      "hu": "Fixpont rend-tétel (2.32. tétel)"
    },
    "def": {
      "en": "For $p_{k+1}=g(p_k)$ with $g\\in C^m$: if $|g'(p)|<1$ it is linear; if $g'(p)=\\dots=g^{(m-1)}(p)=0$ it has order $m$ with asymptotic constant $g^{(m)}(p)/m!$. A smooth fixed-point iteration has integer order.",
      "hu": "$p_{k+1}=g(p_k)$, $g\\in C^m$ esetén: ha $|g'(p)|<1$, lineáris; ha $g'(p)=\\dots=g^{(m-1)}(p)=0$, akkor rendje $m$, aszimptotikus konstansa $g^{(m)}(p)/m!$. Sima fixpont iteráció rendje egész szám."
    }
  },
  {
    "term": {
      "en": "Multiplicity of a root (Eq. 2.21)",
      "hu": "Gyök multiplicitása (2.21)"
    },
    "def": {
      "en": "$p$ is a root of multiplicity $m$ of $f$ if $f(x)=(x-p)^m q(x)$ with $q(p)\\ne0$ — equivalently $f(p)=f'(p)=\\dots=f^{(m-1)}(p)=0$ but $f^{(m)}(p)\\ne0$ (Thm 2.33). $m=1$ is a simple root.",
      "hu": "$p$ az $f$ $m$ multiplicitású gyöke, ha $f(x)=(x-p)^m q(x)$, ahol $q(p)\\ne0$ — ekvivalensen $f(p)=f'(p)=\\dots=f^{(m-1)}(p)=0$, de $f^{(m)}(p)\\ne0$ (2.33. tétel). $m=1$ az egyszeres gyök."
    }
  },
  {
    "term": {
      "en": "Newton at a multiple root (Thm 2.34)",
      "hu": "Newton többszörös gyöknél (2.34. tétel)"
    },
    "def": {
      "en": "At a simple root Newton is quadratic; at a root of multiplicity $m>1$ it degrades to **linear** with asymptotic constant $1-1/m$ (because $g'(p)=1-1/m\\ne0$).",
      "hu": "Egyszeres gyöknél Newton kvadratikus; $m>1$ multiplicitású gyöknél **lineárisra** romlik, $1-1/m$ aszimptotikus konstanssal (mert $g'(p)=1-1/m\\ne0$)."
    }
  },
  {
    "term": {
      "en": "Modified Newton for multiple roots (Eq. 2.23)",
      "hu": "Módosított Newton többszörös gyökre (2.23)"
    },
    "def": {
      "en": "Apply Newton to $\\mu=f/f'$ (which has $p$ as a *simple* root): $p_{k+1}=p_k-\\dfrac{f(p_k)f'(p_k)}{(f'(p_k))^2-f(p_k)f''(p_k)}$, restoring quadratic convergence. Alternatively $p_{k+1}=p_k-m\\,f/f'$ if $m$ is known.",
      "hu": "Alkalmazd a Newtont $\\mu=f/f'$-re (amelynek $p$ *egyszeres* gyöke): $p_{k+1}=p_k-\\dfrac{f(p_k)f'(p_k)}{(f'(p_k))^2-f(p_k)f''(p_k)}$, visszaállítva a kvadratikus konvergenciát. Vagy $p_{k+1}=p_k-m\\,f/f'$, ha $m$ ismert."
    }
  },
  {
    "term": {
      "en": "Secant order is $\\varphi$ (Thm 2.36)",
      "hu": "A szelő rendje $\\varphi$ (2.36. tétel)"
    },
    "def": {
      "en": "At a simple root the secant method has order $\\varphi=\\tfrac{1+\\sqrt5}{2}\\approx1.618$ — a non-integer order, possible because it is a two-step (multistep) iteration.",
      "hu": "Egyszeres gyöknél a szelőmódszer rendje $\\varphi=\\tfrac{1+\\sqrt5}{2}\\approx1{,}618$ — nem egész rend, ami azért lehetséges, mert kétlépéses (többlépéses) iteráció."
    }
  }
]

export const CONV_FLASHCARDS: Flashcard[] = [
  {"q":{"en":"A sequence $p_k$ converges to $p$ with order $\\alpha$ if there exists a constant $c \\ge 0$ such that $|p_{k+1} - p| \\le c |p_k - p|^\\alpha$. What is the required range for $\\alpha$?","hu":"Egy $p_k$ sorozat $\\alpha$ renddel konvergál $p$-hez, ha létezik $c \\ge 0$ konstans, hogy $|p_{k+1} - p| \\le c |p_k - p|^\\alpha$. Mi az $\\alpha$ megkövetelt tartománya?"},"a":{"en":"$\\alpha \\ge 1$","hu":"$\\alpha \\ge 1$"}},
  {"q":{"en":"In the definition of order of convergence, what additional constraint is placed on the constant $c$ if the order $\\alpha$ is exactly 1?","hu":"A konvergenciarend definíciójában milyen további megszorítást teszünk a $c$ konstansra, ha az $\\alpha$ rend pontosan 1?"},"a":{"en":"$c < 1$","hu":"$c < 1$"}},
  {"q":{"en":"If a sequence satisfies $|p_{k+1} - p| \\le c |p_k - p|^\\alpha$ for a specific $\\alpha$, but not for any larger exponent, the order of convergence is said to be _____.","hu":"Ha egy sorozat egy adott $\\alpha$-ra teljesíti $|p_{k+1} - p| \\le c |p_k - p|^\\alpha$-t, de semmilyen nagyobb kitevőre nem, akkor a konvergenciarend _____."},"a":{"en":"exactly $\\alpha$","hu":"pontosan $\\alpha$"}},
  {"q":{"en":"Terminology: What is the specific name for convergence where the order $\\alpha = 1$?","hu":"Terminológia: Mi a konkrét neve annak a konvergenciának, ahol az $\\alpha = 1$ rend?"},"a":{"en":"Linear convergence","hu":"Lineáris konvergencia"}},
  {"q":{"en":"Terminology: What is the specific name for convergence where the order $\\alpha = 2$?","hu":"Terminológia: Mi a konkrét neve annak a konvergenciának, ahol az $\\alpha = 2$ rend?"},"a":{"en":"Quadratic convergence","hu":"Kvadratikus konvergencia"}},
  {"q":{"en":"A sequence $p_k$ is said to converge linearly if it satisfies $|p_k - p| \\le c^k |p_0 - p|$ for a constant $c$ in what range?","hu":"Egy $p_k$ sorozat lineárisan konvergál, ha teljesíti $|p_k - p| \\le c^k |p_0 - p|$-t egy $c$ konstansra, mely milyen tartományban van?"},"a":{"en":"$0 \\le c < 1$","hu":"$0 \\le c < 1$"}},
  {"q":{"en":"Formula: Define the asymptotic error constant $\\lambda$ for a sequence $p_k$ converging to $p$ with order $\\alpha$.","hu":"Képlet: Definiáld a $\\lambda$ aszimptotikus hibakonstanst egy $p$-hez $\\alpha$ renddel konvergáló $p_k$ sorozatra."},"a":{"en":"$\\lambda = \\lim_{k \\to \\infty} \\frac{p_{k+1} - p}{(p_k - p)^\\alpha}$","hu":"$\\lambda = \\lim_{k \\to \\infty} \\frac{p_{k+1} - p}{(p_k - p)^\\alpha}$"}},
  {"q":{"en":"A sequence converges _____ if it has linear convergence ($\\alpha = 1$) and its asymptotic error constant $\\lambda$ is 0.","hu":"Egy sorozat _____ konvergál, ha lineáris konvergenciája van ($\\alpha = 1$) és a $\\lambda$ aszimptotikus hibakonstansa 0."},"a":{"en":"superlinearly","hu":"szuperlineárisan"}},
  {"q":{"en":"If a sequence $p_k$ converges with order $\\alpha$ and asymptotic error constant $\\lambda \\ne 0$, what is the limit of $\\frac{|p_{k+1} - p|}{|p_k - p|^\\beta}$ for all $\\beta < \\alpha$?","hu":"Ha egy $p_k$ sorozat $\\alpha$ renddel és $\\lambda \\ne 0$ aszimptotikus hibakonstanssal konvergál, mi a $\\frac{|p_{k+1} - p|}{|p_k - p|^\\beta}$ határértéke minden $\\beta < \\alpha$-ra?"},"a":{"en":"0","hu":"0"}},
  {"q":{"en":"If a sequence $p_k$ converges with order $\\alpha$ and asymptotic error constant $\\lambda \\ne 0$, what is the limit of $\\frac{|p_{k+1} - p|}{|p_k - p|^\\beta}$ for all $\\beta > \\alpha$?","hu":"Ha egy $p_k$ sorozat $\\alpha$ renddel és $\\lambda \\ne 0$ aszimptotikus hibakonstanssal konvergál, mi a $\\frac{|p_{k+1} - p|}{|p_k - p|^\\beta}$ határértéke minden $\\beta > \\alpha$-ra?"},"a":{"en":"$\\infty$","hu":"$\\infty$"}},
  {"q":{"en":"For a sequence with convergence order $\\alpha > 1$, local convergence to $p$ is guaranteed if the initial term $p_0$ satisfies what condition involving $c$?","hu":"Egy $\\alpha > 1$ konvergenciarendű sorozatnál a $p$-hez való lokális konvergencia garantált, ha a $p_0$ kezdőtag milyen, $c$-t tartalmazó feltételt teljesít?"},"a":{"en":"$c^{\\frac{1}{\\alpha-1}}|p_0 - p| < 1$","hu":"$c^{\\frac{1}{\\alpha-1}}|p_0 - p| < 1$"}},
  {"q":{"en":"In a fixed-point iteration $p_{k+1} = g(p_k)$, what condition on the derivative $g'(p)$ at the fixed point $p$ ensures local linear convergence?","hu":"A $p_{k+1} = g(p_k)$ fixpont-iterációban milyen feltétel a $g'(p)$ deriváltra a $p$ fixpontban biztosítja a lokális lineáris konvergenciát?"},"a":{"en":"$|g'(p)| < 1$","hu":"$|g'(p)| < 1$"}},
  {"q":{"en":"In a fixed-point iteration $p_{k+1} = g(p_k)$, if $g'(p) = g''(p) = \\dots = g^{(m-1)}(p) = 0$, what is the order of convergence?","hu":"A $p_{k+1} = g(p_k)$ fixpont-iterációban, ha $g'(p) = g''(p) = \\dots = g^{(m-1)}(p) = 0$, mi a konvergenciarend?"},"a":{"en":"$m$","hu":"$m$"}},
  {"q":{"en":"Formula: What is the asymptotic error constant for a fixed-point iteration of order $m$?","hu":"Képlet: Mi az aszimptotikus hibakonstans egy $m$-edrendű fixpont-iterációra?"},"a":{"en":"$\\frac{g^{(m)}(p)}{m!}$","hu":"$\\frac{g^{(m)}(p)}{m!}$"}},
  {"q":{"en":"Concept: Root Multiplicity","hu":"Fogalom: Gyökmultiplicitás"},"a":{"en":"Definition: $p$ is a root of multiplicity $m$ of $f$ if $f(x) = (x - p)^m q(x)$ where $q(p) \\ne 0$.","hu":"Definíció: $p$ az $f$ $m$-szeres gyöke, ha $f(x) = (x - p)^m q(x)$, ahol $q(p) \\ne 0$."}},
  {"q":{"en":"If $p$ is a root of multiplicity $m$ for a function $f \\in C^m$, what is the value of the derivatives $f'(p), f''(p), \\dots, f^{(m-1)}(p)$?","hu":"Ha $p$ egy $f \\in C^m$ függvény $m$-szeres gyöke, mi az $f'(p), f''(p), \\dots, f^{(m-1)}(p)$ deriváltak értéke?"},"a":{"en":"0","hu":"0"}},
  {"q":{"en":"If $p$ is a root of multiplicity $m$ for a function $f \\in C^m$, what is known about the $m$-th derivative $f^{(m)}(p)$?","hu":"Ha $p$ egy $f \\in C^m$ függvény $m$-szeres gyöke, mit tudunk az $m$-edik deriváltról $f^{(m)}(p)$?"},"a":{"en":"$f^{(m)}(p) \\ne 0$","hu":"$f^{(m)}(p) \\ne 0$"}},
  {"q":{"en":"What is the order of convergence for the Newton iteration when $p$ is a simple root ($f(p)=0$ and $f'(p) \\ne 0$)?","hu":"Mi a Newton-iteráció konvergenciarendje, ha $p$ egyszeres gyök ($f(p)=0$ és $f'(p) \\ne 0$)?"},"a":{"en":"Quadratic (order 2)","hu":"Kvadratikus (2. rend)"}},
  {"q":{"en":"What is the order of convergence for the Newton iteration when $p$ is a multiple root ($m > 1$)?","hu":"Mi a Newton-iteráció konvergenciarendje, ha $p$ többszörös gyök ($m > 1$)?"},"a":{"en":"Linear (order 1)","hu":"Lineáris (1. rend)"}},
  {"q":{"en":"Formula: If $p$ is a root of multiplicity $m$, what is the value of the derivative of the Newton iteration function $g'(p)$?","hu":"Képlet: Ha $p$ $m$-szeres gyök, mennyi a Newton-iterációs függvény deriváltjának értéke, $g'(p)$?"},"a":{"en":"$g'(p) = 1 - \\frac{1}{m}$","hu":"$g'(p) = 1 - \\frac{1}{m}$"}},
  {"q":{"en":"What is the order of convergence of the Secant method for a simple root $p$?","hu":"Mi a szelőmódszer konvergenciarendje egy egyszeres $p$ gyökre?"},"a":{"en":"$\\alpha = \\frac{1+\\sqrt{5}}{2} \\approx 1.618$","hu":"$\\alpha = \\frac{1+\\sqrt{5}}{2} \\approx 1.618$"}},
  {"q":{"en":"To restore quadratic convergence for a multiple root $p$, one can apply Newton's method to which modified function $\\mu(x)$?","hu":"A kvadratikus konvergencia helyreállításához egy $p$ többszörös gyöknél melyik módosított $\\mu(x)$ függvényre alkalmazhatjuk a Newton-módszert?"},"a":{"en":"$\\mu(x) = \\frac{f(x)}{f'(x)}$","hu":"$\\mu(x) = \\frac{f(x)}{f'(x)}$"}},
  {"q":{"en":"If $p$ is a root of multiplicity $m$ of $f(x)$, what is the multiplicity of $p$ as a root of the function $\\mu(x) = \\frac{f(x)}{f'(x)}$?","hu":"Ha $p$ az $f(x)$ $m$-szeres gyöke, mi $p$ multiplicitása a $\\mu(x) = \\frac{f(x)}{f'(x)}$ függvény gyökeként?"},"a":{"en":"1 (simple root)","hu":"1 (egyszeres gyök)"}},
  {"q":{"en":"Formula: What is the iteration step for the modified Newton's method that uses second derivatives to handle multiple roots?","hu":"Képlet: Mi a többszörös gyököket második deriváltakkal kezelő módosított Newton-módszer iterációs lépése?"},"a":{"en":"$p_{k+1} = p_k - \\frac{f(p_k)f'(p_k)}{(f'(p_k))^2 - f(p_k)f''(p_k)}$","hu":"$p_{k+1} = p_k - \\frac{f(p_k)f'(p_k)}{(f'(p_k))^2 - f(p_k)f''(p_k)}$"}},
  {"q":{"en":"Formula: According to the exercises, what simple modification to the standard Newton step $p_{k+1} = p_k - \\frac{f(p_k)}{f'(p_k)}$ can be used if the multiplicity $m$ is known?","hu":"Képlet: A feladatok szerint milyen egyszerű módosítással alakítható a standard Newton-lépés $p_{k+1} = p_k - \\frac{f(p_k)}{f'(p_k)}$, ha az $m$ multiplicitás ismert?"},"a":{"en":"$p_{k+1} = p_k - m\\frac{f(p_k)}{f'(p_k)}$","hu":"$p_{k+1} = p_k - m\\frac{f(p_k)}{f'(p_k)}$"}},
  {"q":{"en":"Why is quadratic convergence preferred over linear convergence in numerical methods?","hu":"Miért részesítjük előnyben a kvadratikus konvergenciát a lineárissal szemben a numerikus módszerekben?"},"a":{"en":"The error decreases much faster, requiring significantly fewer iterations to reach a target precision.","hu":"A hiba sokkal gyorsabban csökken, így jóval kevesebb iteráció kell egy célpontosság eléréséhez."}},
  {"q":{"en":"In the proof for fixed-point iteration order, what mathematical tool is used to expand $g(p_k)$ around $p$?","hu":"A fixpont-iteráció rendjének bizonyításában milyen matematikai eszközzel fejtjük ki $g(p_k)$-t $p$ körül?"},"a":{"en":"Taylor approximation (or Taylor's Theorem)","hu":"Taylor-közelítés (vagy Taylor-tétel)"}},
  {"q":{"en":"If a sequence $p_k$ satisfies $|p_{k+1} - p| \\le c |p_k - p|^2$, the convergence is at least _____.","hu":"Ha egy $p_k$ sorozat teljesíti $|p_{k+1} - p| \\le c |p_k - p|^2$-t, a konvergencia legalább _____."},"a":{"en":"quadratic","hu":"kvadratikus"}},
  {"q":{"en":"In the example $f(x) = x^3 + x^2 - 8x - 12$, Newton's method converges _____ to the root $x = 3$ and _____ to the root $x = -2$.","hu":"Az $f(x) = x^3 + x^2 - 8x - 12$ példában a Newton-módszer _____ konvergál az $x = 3$ gyökhöz és _____ az $x = -2$ gyökhöz."},"a":{"en":"quadratically; linearly","hu":"kvadratikusan; lineárisan"}},
  {"q":{"en":"What defines the 'local' nature of convergence for methods like Newton's iteration with $\\alpha > 1$?","hu":"Mi határozza meg a konvergencia „lokális” jellegét az olyan módszereknél, mint a Newton-iteráció $\\alpha > 1$-gyel?"},"a":{"en":"The iteration only converges if the initial guess $p_0$ is sufficiently close to the limit $p$.","hu":"Az iteráció csak akkor konvergál, ha a $p_0$ kezdőérték elég közel van a $p$ határértékhez."}},
  {"q":{"en":"In the context of the Secant method, is the order of convergence typically an integer?","hu":"A szelőmódszer kontextusában a konvergenciarend jellemzően egész szám?"},"a":{"en":"No, it is approximately 1.618.","hu":"Nem, körülbelül 1.618."}},
  {"q":{"en":"For the function $f(x) = (x-p)^m q(x)$, the first $m-1$ derivatives of $f$ at $p$ are 0 because $(x-p)$ remains a _____ in those derivative expressions.","hu":"Az $f(x) = (x-p)^m q(x)$ függvénynél $f$ első $m-1$ deriváltja $p$-ben 0, mert $(x-p)$ _____ marad ezekben a derivált-kifejezésekben."},"a":{"en":"factor","hu":"tényező"}},
  {"q":{"en":"If the asymptotic error constant $\\lambda$ exists and is finite, can we conclude the sequence is convergent?","hu":"Ha a $\\lambda$ aszimptotikus hibakonstans létezik és véges, következtethetünk-e arra, hogy a sorozat konvergens?"},"a":{"en":"Yes, it implies convergence with order $\\alpha$.","hu":"Igen, $\\alpha$ rendű konvergenciát jelent."}},
  {"q":{"en":"The sequence $p_k = 10^{-2^k}$ is an example of _____ convergence.","hu":"A $p_k = 10^{-2^k}$ sorozat _____ konvergencia példája."},"a":{"en":"quadratic","hu":"kvadratikus"}},
  {"q":{"en":"Which iterative method is described as a 'two-step' iteration in the source materials?","hu":"Melyik iteratív módszert írják le „kétlépéses” iterációként a forrásanyagokban?"},"a":{"en":"The Secant method","hu":"A szelőmódszert"}},
  {"q":{"en":"In the modified Newton formula $p_{k+1} = p_k - \\frac{\\mu(p_k)}{\\mu'(p_k)}$, what is the value of $\\mu'(p)$ if $p$ is a root of multiplicity $m$ of $f$?","hu":"A módosított Newton-képletben $p_{k+1} = p_k - \\frac{\\mu(p_k)}{\\mu'(p_k)}$ mennyi $\\mu'(p)$ értéke, ha $p$ az $f$ $m$-szeres gyöke?"},"a":{"en":"$\\frac{1}{m}$","hu":"$\\frac{1}{m}$"}},
  {"q":{"en":"Concept: Deflation Method","hu":"Fogalom: Deflációs módszer"},"a":{"en":"Definition: A technique to find further roots of a function $f$ by applying root-finding to $g(x) = \\frac{f(x)}{x - x_1}$, where $x_1$ is a previously determined root.","hu":"Definíció: Egy $f$ függvény további gyökeinek megtalálására szolgáló technika, amely gyökkeresést alkalmaz a $g(x) = \\frac{f(x)}{x - x_1}$-re, ahol $x_1$ egy korábban meghatározott gyök."}},
  {"q":{"en":"True or False: The order of convergence for a fixed-point iteration is always a positive integer, provided $g$ is sufficiently smooth.","hu":"Igaz vagy hamis: A fixpont-iteráció konvergenciarendje mindig pozitív egész, feltéve, hogy $g$ elég sima."},"a":{"en":"True","hu":"Igaz"}},
  {"q":{"en":"When $\\alpha=1$ and $c=0.5$, the error $|p_k - p|$ is bounded by _____.","hu":"Ha $\\alpha=1$ és $c=0.5$, a hibát $|p_k - p|$ a _____ korlátozza."},"a":{"en":"$(0.5)^k |p_0 - p|$","hu":"$(0.5)^k |p_0 - p|$"}},
  {"q":{"en":"In the example of $f(x) = e^x - 2\\cos x$, why did the ratio $\\frac{|p_{k+1}-p|}{|p_k-p|^3}$ converge to $\\infty$?","hu":"Az $f(x) = e^x - 2\\cos x$ példában miért tartott a $\\frac{|p_{k+1}-p|}{|p_k-p|^3}$ hányados a $\\infty$-hez?"},"a":{"en":"Because the actual order of convergence was lower than 3 (it was exactly 2).","hu":"Mert a tényleges konvergenciarend 3-nál alacsonyabb volt (pontosan 2)."}}
]
