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
  {"q":{"en":"What is the primary practical advantage of the secant method over Newton's method?","hu":"Mi a szelőmódszer fő gyakorlati előnye a Newton-módszerrel szemben?"},"a":{"en":"It does not require the computation of the derivative $f'$.","hu":"Nem igényli az $f'$ derivált kiszámítását."}},
  {"q":{"en":"Why is the secant method preferred when $f$ is provided as the output of another numerical procedure?","hu":"Miért előnyösebb a szelőmódszer, ha $f$ egy másik numerikus eljárás kimeneteként adott?"},"a":{"en":"In such cases, the analytical formula for the derivative $f'$ is often unknown or unavailable.","hu":"Ilyen esetekben az $f'$ derivált analitikus képlete gyakran ismeretlen vagy nem áll rendelkezésre."}},
  {"q":{"en":"How many initial values are required to begin the secant method iteration?","hu":"Hány kezdőérték szükséges a szelőmódszer iterációjának indításához?"},"a":{"en":"The method requires two different initial values, $p_0$ and $p_1$.","hu":"A módszer két különböző kezdőértéket igényel: $p_0$-t és $p_1$-et."}},
  {"q":{"en":"Geometrically, the secant method replaces the nonlinear function with a line connecting which two points?","hu":"Geometriailag a szelőmódszer a nemlineáris függvényt mely két pontot összekötő egyenessel helyettesíti?"},"a":{"en":"It uses a secant line connecting $(p_{k-1}, f(p_{k-1}))$ and $(p_k, f(p_k))$.","hu":"A $(p_{k-1}, f(p_{k-1}))$ és $(p_k, f(p_k))$ pontokat összekötő szelőt használja."}},
  {"q":{"en":"What is the equation of the secant line connecting points $(p_0, f(p_0))$ and $(p_1, f(p_1))$?","hu":"Mi a $(p_0, f(p_0))$ és $(p_1, f(p_1))$ pontokat összekötő szelő egyenlete?"},"a":{"en":"$y = f(p_1) + \\frac{f(p_1) - f(p_0)}{p_1 - p_0}(x - p_1)$","hu":"$y = f(p_1) + \\frac{f(p_1) - f(p_0)}{p_1 - p_0}(x - p_1)$"}},
  {"q":{"en":"How is the next term $p_2$ determined from the secant line equation?","hu":"Hogyan határozzuk meg a következő $p_2$ tagot a szelő egyenletéből?"},"a":{"en":"It is the $x$-coordinate where the secant line intersects the $x$-axis.","hu":"Az az $x$-koordináta, ahol a szelő metszi az $x$-tengelyt."}},
  {"q":{"en":"Write the general recursion formula for the secant method used to find $p_{k+1}$.","hu":"Írd fel a szelőmódszer általános rekurziós képletét $p_{k+1}$ meghatározására."},"a":{"en":"$p_{k+1} = p_k - \\frac{p_k - p_{k-1}}{f(p_k) - f(p_{k-1})} f(p_k)$","hu":"$p_{k+1} = p_k - \\frac{p_k - p_{k-1}}{f(p_k) - f(p_{k-1})} f(p_k)$"}},
  {"q":{"en":"Why is the secant method categorized as a 'two-step iteration'?","hu":"Miért soroljuk a szelőmódszert a „kétlépéses iterációk” közé?"},"a":{"en":"The calculation of the next term $p_{k+1}$ depends on the two previous terms, $p_k$ and $p_{k-1}$.","hu":"A következő $p_{k+1}$ tag kiszámítása az előző két tagtól, $p_k$-tól és $p_{k-1}$-től függ."}},
  {"q":{"en":"How does the convergence speed of the secant method generally compare to Newton's method?","hu":"Hogyan viszonyul a szelőmódszer konvergenciasebessége általában a Newton-módszeréhez?"},"a":{"en":"The secant method typically converges to the limit slower than Newton's method.","hu":"A szelőmódszer jellemzően lassabban konvergál a határértékhez, mint a Newton-módszer."}},
  {"q":{"en":"In Example 2.25, for the function $f(x) = e^x - 2\\cos x$ and $TOL = 10^{-5}$, how many iterations were needed to reach the root?","hu":"A 2.25. példában az $f(x) = e^x - 2\\cos x$ függvényre és $TOL = 10^{-5}$-re hány iteráció kellett a gyök eléréséhez?"},"a":{"en":"The method required 7 iterations to satisfy the tolerance.","hu":"A módszernek 7 iteráció kellett a tűréshatár teljesítéséhez."}},
  {"q":{"en":"What condition on the function $f$ is required for the local convergence theorem (Theorem 2.26) of the secant method?","hu":"Milyen feltétel kell az $f$ függvényre a szelőmódszer lokális konvergenciatételéhez (2.26. tétel)?"},"a":{"en":"The function must be twice continuously differentiable, $f \\in C^2[a,b]$.","hu":"A függvénynek kétszer folytonosan differenciálhatónak kell lennie, $f \\in C^2[a,b]$."}},
  {"q":{"en":"According to Theorem 2.26, what condition must the root $p$ satisfy for local convergence?","hu":"A 2.26. tétel szerint milyen feltételt kell teljesítenie a $p$ gyöknek a lokális konvergenciához?"},"a":{"en":"The function value $f(p)$ must be zero and the derivative $f'(p)$ must be non-zero.","hu":"Az $f(p)$ függvényértéknek nullának, az $f'(p)$ deriváltnak pedig nem nullának kell lennie."}},
  {"q":{"en":"Provide the error relation formula for $p_{k+1} - p$ established in Theorem 2.26.","hu":"Add meg a 2.26. tételben megállapított hibarelációs képletet $p_{k+1} - p$-re."},"a":{"en":"$p_{k+1} - p = \\frac{1}{2}\\frac{f''(\\xi_k)}{f'(\\eta_k)}(p_k - p)(p_{k-1} - p)$","hu":"$p_{k+1} - p = \\frac{1}{2}\\frac{f''(\\xi_k)}{f'(\\eta_k)}(p_k - p)(p_{k-1} - p)$"}},
  {"q":{"en":"In the error formula for the secant method, where is the value $\\eta_k$ located?","hu":"A szelőmódszer hibaképletében hol helyezkedik el az $\\eta_k$ érték?"},"a":{"en":"The value $\\eta_k$ lies in the interval $\\langle p_k, p_{k-1} \\rangle$.","hu":"Az $\\eta_k$ érték a $\\langle p_k, p_{k-1} \\rangle$ intervallumban van."}},
  {"q":{"en":"In the error formula for the secant method, where is the value $\\xi_k$ located?","hu":"A szelőmódszer hibaképletében hol helyezkedik el a $\\xi_k$ érték?"},"a":{"en":"The value $\\xi_k$ lies in the interval $\\langle p_k, p_{k-1}, p \\rangle$.","hu":"A $\\xi_k$ érték a $\\langle p_k, p_{k-1}, p \\rangle$ intervallumban van."}},
  {"q":{"en":"Which theorem is used in the proof of Theorem 2.26 to express the first-order difference quotient as $f'(\\eta_k)$?","hu":"Melyik tételt használjuk a 2.26. tétel bizonyításában az elsőrendű differenciahányados $f'(\\eta_k)$ alakú kifejezésére?"},"a":{"en":"The Lagrange Mean Value Theorem.","hu":"A Lagrange-féle középértéktételt."}},
  {"q":{"en":"The expression $\\frac{\\frac{f(p_k) - f(p)}{p_k - p} - \\frac{f(p_{k-1}) - f(p)}{p_{k-1} - p}}{p_k - p_{k-1}}$ is known as what mathematical construct?","hu":"Milyen matematikai fogalomként ismert a $\\frac{\\frac{f(p_k) - f(p)}{p_k - p} - \\frac{f(p_{k-1}) - f(p)}{p_{k-1} - p}}{p_k - p_{k-1}}$ kifejezés?"},"a":{"en":"The second divided difference of $f$ corresponding to points $p_{k-1}, p,$ and $p_k$.","hu":"Az $f$ második osztott differenciájaként a $p_{k-1}, p$ és $p_k$ pontokra."}},
  {"q":{"en":"According to Corollary 6.17, a second divided difference $f[p_{k-1}, p, p_k]$ is equal to which derivative expression?","hu":"A 6.17. következmény szerint a $f[p_{k-1}, p, p_k]$ második osztott differencia melyik derivált-kifejezéssel egyenlő?"},"a":{"en":"$f[p_{k-1}, p, p_k] = \\frac{f''(\\xi_k)}{2}$","hu":"$f[p_{k-1}, p, p_k] = \\frac{f''(\\xi_k)}{2}$"}},
  {"q":{"en":"In the proof of Theorem 2.27, how is the constant $M$ defined to bound the error?","hu":"A 2.27. tétel bizonyításában hogyan definiáljuk az $M$ konstanst a hiba korlátozására?"},"a":{"en":"$M := \\frac{\\max\\{|f''(x)|\\}}{2\\min\\{|f'(x)|\\}}$ over a specified interval $[p - \\delta^*, p + \\delta^*]$.","hu":"$M := \\frac{\\max\\{|f''(x)|\\}}{2\\min\\{|f'(x)|\\}}$ egy adott $[p - \\delta^*, p + \\delta^*]$ intervallumon."}},
  {"q":{"en":"What inequality relates the errors of three consecutive steps in the secant method proof?","hu":"Milyen egyenlőtlenség kapcsolja össze három egymást követő lépés hibáit a szelőmódszer bizonyításában?"},"a":{"en":"$M|p_{k+1} - p| \\leq M|p_k - p|M|p_{k-1} - p|$","hu":"$M|p_{k+1} - p| \\leq M|p_k - p|M|p_{k-1} - p|$"}},
  {"q":{"en":"Which integer sequence is utilized to bound the powers of $\\varepsilon$ in the convergence proof of the secant method?","hu":"Melyik egész sorozatot használjuk az $\\varepsilon$ hatványainak korlátozására a szelőmódszer konvergenciabizonyításában?"},"a":{"en":"The Fibonacci sequence.","hu":"A Fibonacci-sorozatot."}},
  {"q":{"en":"What are the recurrence relation and initial conditions for the sequence $q_k$ in the secant method proof?","hu":"Mi a $q_k$ sorozat rekurziós relációja és kezdeti feltételei a szelőmódszer bizonyításában?"},"a":{"en":"$q_{k+1} = q_k + q_{k-1}$ for $k \\geq 1$, with $q_0 = 1$ and $q_1 = 1$.","hu":"$q_{k+1} = q_k + q_{k-1}$ ha $k \\geq 1$, ahol $q_0 = 1$ és $q_1 = 1$."}},
  {"q":{"en":"State the general formula for the $k$-th term of the Fibonacci sequence $q_k$.","hu":"Add meg a $q_k$ Fibonacci-sorozat $k$-adik tagjának általános képletét."},"a":{"en":"$q_k = \\frac{1}{\\sqrt{5}}(r_0^{k+1} - r_1^{k+1})$","hu":"$q_k = \\frac{1}{\\sqrt{5}}(r_0^{k+1} - r_1^{k+1})$"}},
  {"q":{"en":"What is the approximate value of the constant $r_0$ in the Fibonacci formula used for the secant method?","hu":"Mi a szelőmódszernél használt Fibonacci-képletben az $r_0$ konstans közelítő értéke?"},"a":{"en":"$r_0 = \\frac{1 + \\sqrt{5}}{2} \\approx 1.618$","hu":"$r_0 = \\frac{1 + \\sqrt{5}}{2} \\approx 1.618$"}},
  {"q":{"en":"What is the approximate value of the constant $r_1$ in the Fibonacci formula used for the secant method?","hu":"Mi a szelőmódszernél használt Fibonacci-képletben az $r_1$ konstans közelítő értéke?"},"a":{"en":"$r_1 = \\frac{1 - \\sqrt{5}}{2} \\approx -0.618$","hu":"$r_1 = \\frac{1 - \\sqrt{5}}{2} \\approx -0.618$"}},
  {"q":{"en":"Why does $p_k \\to p$ imply convergence in the final steps of the proof of Theorem 2.27?","hu":"Miért jelent $p_k \\to p$ konvergenciát a 2.27. tétel bizonyításának záró lépéseiben?"},"a":{"en":"Because the upper bound $\\frac{1}{M}\\varepsilon^{q_k}$ approaches zero as $q_k \\to \\infty$.","hu":"Mert a $\\frac{1}{M}\\varepsilon^{q_k}$ felső korlát nullához tart, ahogy $q_k \\to \\infty$."}},
  {"q":{"en":"How can the secant method's denominator be interpreted in relation to Newton's method?","hu":"Hogyan értelmezhető a szelőmódszer nevezője a Newton-módszerhez viszonyítva?"},"a":{"en":"The expression $\\frac{f(p_k) - f(p_{k-1})}{p_k - p_{k-1}}$ serves as an approximation of the derivative $f'(p_k)$.","hu":"A $\\frac{f(p_k) - f(p_{k-1})}{p_k - p_{k-1}}$ kifejezés az $f'(p_k)$ derivált közelítéseként szolgál."}},
  {"q":{"en":"The secant method is considered a 'one-step' or 'fixed point' iteration: True or False?","hu":"A szelőmódszer „egylépéses” vagy „fixpont” iterációnak tekinthető: igaz vagy hamis?"},"a":{"en":"False, it is a two-step iteration and not a fixed point iteration.","hu":"Hamis; kétlépéses iteráció, és nem fixpont-iteráció."}},
  {"q":{"en":"How does the secant method compare to the bisection method in terms of convergence speed?","hu":"Hogyan viszonyul a szelőmódszer a felezési módszerhez konvergenciasebesség tekintetében?"},"a":{"en":"The secant method converges faster than the bisection method.","hu":"A szelőmódszer gyorsabban konvergál a felezési módszernél."}},
  {"q":{"en":"What is the typical stopping criterion for the secant method in numerical exercises?","hu":"Mi a szelőmódszer szokásos leállási feltétele a numerikus feladatokban?"},"a":{"en":"The iteration stops when the distance between two consecutive terms $|p_k - p_{k-1}|$ is less than a given tolerance.","hu":"Az iteráció leáll, amikor két egymást követő tag távolsága $|p_k - p_{k-1}|$ kisebb egy adott tűréshatárnál."}},
  {"q":{"en":"In the definition of $M$, what condition on $f'(x)$ must hold for all $x$ in the interval $[p - \\delta^*, p + \\delta^*]$?","hu":"Az $M$ definíciójában milyen feltételnek kell teljesülnie $f'(x)$-re minden $x$-re a $[p - \\delta^*, p + \\delta^*]$ intervallumon?"},"a":{"en":"The derivative $f'(x)$ must be non-zero.","hu":"Az $f'(x)$ deriváltnak nem nullának kell lennie."}},
  {"q":{"en":"What is the significance of the fact that $q_k \\to \\infty$ in the convergence proof?","hu":"Mi a jelentősége annak, hogy $q_k \\to \\infty$ a konvergenciabizonyításban?"},"a":{"en":"It ensures that the error bound $\\varepsilon^{q_k}$ tends to zero, proving the sequence $p_k$ converges to $p$.","hu":"Biztosítja, hogy a $\\varepsilon^{q_k}$ hibakorlát nullához tart, bizonyítva, hogy a $p_k$ sorozat $p$-hez konvergál."}},
  {"q":{"en":"Exercise 2 suggests that the second divided difference $f[a,b,c]$ is independent of what?","hu":"A 2. feladat szerint a $f[a,b,c]$ második osztott differencia mitől független?"},"a":{"en":"It is independent of the order of the numbers $a, b,$ and $c$.","hu":"Független az $a, b$ és $c$ számok sorrendjétől."}},
  {"q":{"en":"How does the secant method's reliance on 'approximate derivatives' explain its speed relative to Newton's method?","hu":"Hogyan magyarázza a szelőmódszer „közelítő deriváltakra” való támaszkodása a Newton-módszerhez viszonyított sebességét?"},"a":{"en":"Using an approximation rather than the exact derivative value leads to a slightly slower convergence rate.","hu":"A pontos deriváltérték helyett közelítés használata kissé lassabb konvergenciasebességhez vezet."}},
  {"q":{"en":"Formula: Secant line intersection with the $x$-axis.","hu":"Képlet: A szelő metszéspontja az $x$-tengellyel."},"a":{"en":"$x = p_1 - \\frac{p_1 - p_0}{f(p_1) - f(p_0)} f(p_1)$","hu":"$x = p_1 - \\frac{p_1 - p_0}{f(p_1) - f(p_0)} f(p_1)$"}},
  {"q":{"en":"Term: Szelőmódszer","hu":"Fogalom: Szelőmódszer"},"a":{"en":"Definition: The Hungarian term for the Secant Method.","hu":"Definíció: a szelőmódszer (secant method) magyar elnevezése."}},
  {"q":{"en":"Under what condition is $\\varepsilon = M\\delta$ guaranteed to be between 0 and 1 in the convergence proof?","hu":"Milyen feltétel mellett garantált, hogy $\\varepsilon = M\\delta$ 0 és 1 között van a konvergenciabizonyításban?"},"a":{"en":"When $\\delta$ is selected such that $\\delta < \\frac{1}{M}$.","hu":"Amikor $\\delta$-t úgy választjuk, hogy $\\delta < \\frac{1}{M}$."}},
  {"q":{"en":"In the secant method, if the function $f$ is linear, how many iterations are needed to find the root?","hu":"A szelőmódszerben, ha az $f$ függvény lineáris, hány iteráció kell a gyök megtalálásához?"},"a":{"en":"The root would be found in exactly one iteration step ($p_2$).","hu":"A gyököt pontosan egy iterációs lépésben ($p_2$) megtalálnánk."}},
  {"q":{"en":"What is the relationship between the term $f[p_{k-1}, p, p_k]$ and the error term of the secant method?","hu":"Mi a kapcsolat a $f[p_{k-1}, p, p_k]$ tag és a szelőmódszer hibatagja között?"},"a":{"en":"It represents the numerator's structure in the algebraic manipulation of the error $p_{k+1} - p$.","hu":"A $p_{k+1} - p$ hiba algebrai átalakításában a számláló szerkezetét adja."}},
  {"q":{"en":"If the computation of $f'$ is extremely expensive, which method is more practical: Newton or Secant?","hu":"Ha $f'$ kiszámítása rendkívül költséges, melyik módszer praktikusabb: Newton vagy szelő?"},"a":{"en":"The Secant Method is more practical.","hu":"A szelőmódszer praktikusabb."}}
]
