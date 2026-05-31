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
  {"q":{"en":"What is the Latin name for the Method of False Position?","hu":"Mi a húrmódszer latin neve?"},"a":{"en":"Regula Falsi","hu":"Regula falsi"}},
  {"q":{"en":"Which root-finding method uses the intersection of a secant line and the $x$-axis to find the next approximation?","hu":"Melyik gyökkereső módszer használja egy szelő és az $x$-tengely metszéspontját a következő közelítés megtalálására?"},"a":{"en":"Method of False Position (Húrmódszer)","hu":"A húrmódszer (regula falsi)"}},
  {"q":{"en":"What are the two primary initial conditions for the function $f$ in the Method of False Position on interval $[a, b]$?","hu":"Mi a két fő kezdeti feltétel az $f$ függvényre a húrmódszerben az $[a, b]$ intervallumon?"},"a":{"en":"$f$ must be continuous and $f(a)f(b) < 0$.","hu":"$f$-nek folytonosnak kell lennie, és $f(a)f(b) < 0$."}},
  {"q":{"en":"In the Method of False Position, $p_k$ represents the intersection of the $x$-axis and the _____ through $(a_k, f(a_k))$ and $(b_k, f(b_k))$.","hu":"A húrmódszerben $p_k$ az $x$-tengely és a $(a_k, f(a_k))$, $(b_k, f(b_k))$ pontokon átmenő _____ metszéspontja."},"a":{"en":"secant line (chord)","hu":"szelő (húr)"}},
  {"q":{"en":"Provide the formula for calculating the $k$-th approximation $p_k$ in the Method of False Position.","hu":"Add meg a $k$-adik $p_k$ közelítés kiszámításának képletét a húrmódszerben."},"a":{"en":"$p_k = a_k - f(a_k) \\frac{a_k - b_k}{f(a_k) - f(b_k)}$","hu":"$p_k = a_k - f(a_k) \\frac{a_k - b_k}{f(a_k) - f(b_k)}$"}},
  {"q":{"en":"How is the next interval $[a_{k+1}, b_{k+1}]$ determined after finding $p_k$?","hu":"Hogyan határozzuk meg a következő $[a_{k+1}, b_{k+1}]$ intervallumot $p_k$ megtalálása után?"},"a":{"en":"By selecting the subinterval ($[a_k, p_k]$ or $[p_k, b_k]$) where the function changes sign.","hu":"Azon részintervallum ($[a_k, p_k]$ vagy $[p_k, b_k]$) választásával, ahol a függvény előjelet vált."}},
  {"q":{"en":"What is the main advantage of the Method of False Position over the Bisection Method?","hu":"Mi a húrmódszer fő előnye a felezési módszerrel szemben?"},"a":{"en":"It accounts for the shape of the function when selecting the next point.","hu":"Figyelembe veszi a függvény alakját a következő pont kiválasztásakor."}},
  {"q":{"en":"Why is the Bisection Method sometimes preferred over the Method of False Position regarding step estimation?","hu":"Miért előnyösebb néha a felezési módszer a húrmódszernél a lépésszámbecslés szempontjából?"},"a":{"en":"The number of steps to reach a specific accuracy can be calculated in advance.","hu":"Egy adott pontosság eléréséhez szükséges lépésszám előre kiszámítható."}},
  {"q":{"en":"Which programming check is essential when implementing the formula for $p_k$ to avoid a runtime error?","hu":"Milyen programozási ellenőrzés elengedhetetlen a $p_k$ képletének megvalósításakor a futásidejű hiba elkerülésére?"},"a":{"en":"Ensuring $f(a_k)$ is not equal to $f(b_k)$ to prevent division by zero.","hu":"Annak biztosítása, hogy $f(a_k) \\ne f(b_k)$, a nullával osztás megelőzésére."}},
  {"q":{"en":"According to Theorem 2.19, what specific function properties on $[a, b]$ guarantee the convergence of the Method of False Position?","hu":"A 2.19. tétel szerint milyen konkrét függvénytulajdonságok $[a, b]$-n garantálják a húrmódszer konvergenciáját?"},"a":{"en":"Convexity or concavity.","hu":"A konvexitás vagy konkávitás."}},
  {"q":{"en":"If a continuous function $f$ is convex or concave and $f(a)f(b) < 0$, what can be said about its root $p$?","hu":"Ha egy $f$ folytonos függvény konvex vagy konkáv és $f(a)f(b) < 0$, mit mondhatunk a $p$ gyökéről?"},"a":{"en":"The root $p$ is unique.","hu":"A $p$ gyök egyértelmű."}},
  {"q":{"en":"In the proof for a convex function where $f(a) > 0$ and $f(b) < 0$, what happens to the left endpoint $a_{k+1}$ in every step?","hu":"Egy konvex függvényre vonatkozó bizonyításban, ahol $f(a) > 0$ és $f(b) < 0$, mi történik a bal $a_{k+1}$ végponttal minden lépésben?"},"a":{"en":"It remains fixed ($a_{k+1} = a$).","hu":"Rögzített marad ($a_{k+1} = a$)."}},
  {"q":{"en":"In the proof for a convex function where $f(a) > 0$ and $f(b) < 0$, what happens to the right endpoint $b_{k+1}$?","hu":"Egy konvex függvényre vonatkozó bizonyításban, ahol $f(a) > 0$ és $f(b) < 0$, mi történik a jobb $b_{k+1}$ végponttal?"},"a":{"en":"It is updated to the current approximation $p_k$.","hu":"Az aktuális $p_k$ közelítésre frissül."}},
  {"q":{"en":"If $f$ is convex, $f(a) > 0$, and $f(b) < 0$, what is the monotonic behavior of the sequence $p_k$?","hu":"Ha $f$ konvex, $f(a) > 0$ és $f(b) < 0$, milyen a $p_k$ sorozat monotonitása?"},"a":{"en":"It is monotonically decreasing.","hu":"Monoton csökkenő."}},
  {"q":{"en":"If $f$ is convex, $f(a) < 0$, and $f(b) > 0$, what is the monotonic behavior of the sequence $p_k$?","hu":"Ha $f$ konvex, $f(a) < 0$ és $f(b) > 0$, milyen a $p_k$ sorozat monotonitása?"},"a":{"en":"It is monotonically increasing.","hu":"Monoton növekvő."}},
  {"q":{"en":"In the convergence proof, what does the limit equation $p = a - f(a) \\frac{a - p}{f(a) - f(p)}$ imply about $f(p)$?","hu":"A konvergenciabizonyításban mit jelent a $p = a - f(a) \\frac{a - p}{f(a) - f(p)}$ határegyenlet $f(p)$-re nézve?"},"a":{"en":"$f(p) = 0$","hu":"$f(p) = 0$"}},
  {"q":{"en":"How many steps did the Method of False Position take to solve $e^x - 2\\cos x = 0$ on $[0, 1]$ with $TOL = 10^{-5}$?","hu":"Hány lépésben oldotta meg a húrmódszer az $e^x - 2\\cos x = 0$-t $[0, 1]$-en $TOL = 10^{-5}$ mellett?"},"a":{"en":"8 steps","hu":"8 lépés"}},
  {"q":{"en":"In Example 2.21, why does the Method of False Position converge much slower on $[0, 4]$ than on $[0, 1]$?","hu":"A 2.21. példában miért konvergál a húrmódszer sokkal lassabban $[0, 4]$-en, mint $[0, 1]$-en?"},"a":{"en":"The function value at $x=4$ is much larger than at $x=0$, placing $p_k$ far from the root.","hu":"Az $x=4$-beli függvényérték sokkal nagyobb az $x=0$-beliénél, így $p_k$ messze kerül a gyöktől."}},
  {"q":{"en":"How many steps did the Method of False Position require for $f(x) = e^x - 2\\cos x$ on the interval $[0, 4]$ to reach $10^{-5}$ accuracy?","hu":"Hány lépés kellett a húrmódszernek az $f(x) = e^x - 2\\cos x$-re a $[0, 4]$ intervallumon a $10^{-5}$ pontosság eléréséhez?"},"a":{"en":"51 steps","hu":"51 lépés"}},
  {"q":{"en":"What is the calculated number of steps the Bisection Method requires for the interval $[0, 4]$ and $TOL = 10^{-5}$?","hu":"Hány lépést igényel a számítás szerint a felezési módszer a $[0, 4]$ intervallumra és $TOL = 10^{-5}$-re?"},"a":{"en":"18 steps","hu":"18 lépés"}},
  {"q":{"en":"Formula: Required steps ($n$) for the Bisection Method given interval length $L$ and tolerance $TOL$.","hu":"Képlet: A felezési módszer szükséges lépésszáma ($n$) adott $L$ intervallumhosszra és $TOL$ tűréshatárra."},"a":{"en":"$n > \\log_2(L/TOL) - 1$","hu":"$n > \\log_2(L/TOL) - 1$"}},
  {"q":{"en":"What happens to the convergence speed of the Method of False Position as the right endpoint of the interval in Example 2.21 is further increased?","hu":"Mi történik a húrmódszer konvergenciasebességével, ahogy a 2.21. példában az intervallum jobb végpontját tovább növeljük?"},"a":{"en":"The convergence becomes even slower.","hu":"A konvergencia még lassabbá válik."}},
  {"q":{"en":"Why is the Method of False Position considered a 'nested interval' method?","hu":"Miért tekinthető a húrmódszer „egymásba ágyazott intervallum” módszernek?"},"a":{"en":"Each iteration produces a new, smaller interval that contains the root.","hu":"Minden iteráció új, kisebb intervallumot ad, amely tartalmazza a gyököt."}},
  {"q":{"en":"What geometric feature of the function graph does the Bisection Method ignore that the Method of False Position utilizes?","hu":"A függvénygrafikon melyik geometriai jellemzőjét hagyja figyelmen kívül a felezési módszer, amelyet a húrmódszer kihasznál?"},"a":{"en":"The slope or 'shape' of the function.","hu":"A függvény meredekségét, „alakját”."}},
  {"q":{"en":"True or False: The Method of False Position is always faster than the Bisection Method.","hu":"Igaz vagy hamis: A húrmódszer mindig gyorsabb a felezési módszernél."},"a":{"en":"False","hu":"Hamis"}},
  {"q":{"en":"In the piecewise function exercise, the value of $f(x)$ for $x \\leq 0.5$ is defined by the parameter _____.","hu":"A szakaszonkénti függvény feladatban az $f(x)$ értékét $x \\leq 0.5$-re a _____ paraméter definiálja."},"a":{"en":"$\\delta$","hu":"$\\delta$"}},
  {"q":{"en":"Concept: $p_k$ derivation","hu":"Fogalom: $p_k$ levezetése"},"a":{"en":"Definition: $p_k$ is the $x$-intercept of the line passing through $(a_k, f(a_k))$ and $(b_k, f(b_k))$.","hu":"Definíció: $p_k$ a $(a_k, f(a_k))$ és $(b_k, f(b_k))$ pontokon átmenő egyenes $x$-tengelymetszete."}},
  {"q":{"en":"What is the Hungarian term for the Method of False Position?","hu":"Mi a húrmódszer magyar elnevezése?"},"a":{"en":"Húrmódszer","hu":"Húrmódszer"}},
  {"q":{"en":"In the video transcript, what reason is given for assuming convexity or concavity in the convergence theorem?","hu":"A videó átiratában milyen indokot adnak a konvexitás vagy konkávitás feltételezésére a konvergenciatételben?"},"a":{"en":"It ensures the uniqueness of the root and simplifies the proof.","hu":"Biztosítja a gyök egyértelműségét és egyszerűsíti a bizonyítást."}},
  {"q":{"en":"Under the conditions $f(a) > 0, f(b) < 0$ and $f$ being convex, what is the sign of $f(p_k)$ for all $k$?","hu":"Az $f(a) > 0, f(b) < 0$ feltételek és $f$ konvexitása mellett mi $f(p_k)$ előjele minden $k$-ra?"},"a":{"en":"Negative ($f(p_k) < 0$)","hu":"Negatív ($f(p_k) < 0$)"}},
  {"q":{"en":"Which method should a programmer switch to if the Method of False Position is observed to be too slow in a specific numerical application?","hu":"Melyik módszerre váltson a programozó, ha a húrmódszer egy adott numerikus alkalmazásban túl lassúnak bizonyul?"},"a":{"en":"A different method (such as the Bisection Method).","hu":"Egy másik módszerre (például a felezési módszerre)."}},
  {"q":{"en":"If $f(p_k) = 0$ during the iteration process, what action is taken?","hu":"Ha $f(p_k) = 0$ az iteráció során, mi a teendő?"},"a":{"en":"The iteration stops because the exact root has been found.","hu":"Az iteráció leáll, mert megtaláltuk a pontos gyököt."}},
  {"q":{"en":"Term: Secant Line (Húr)","hu":"Fogalom: Szelő (húr)"},"a":{"en":"Definition: A line segment connecting two points on a curve. Example: The line connecting $(a, f(a))$ and $(b, f(b))$.","hu":"Definíció: Egy görbe két pontját összekötő szakasz. Példa: az $(a, f(a))$ és $(b, f(b))$ pontokat összekötő egyenes."}},
  {"q":{"en":"In Example 2.21, the Bisection Method is _____ steps longer on $[0, 4]$ than it was on $[0, 1]$.","hu":"A 2.21. példában a felezési módszer _____ lépéssel hosszabb $[0, 4]$-en, mint $[0, 1]$-en volt."},"a":{"en":"two","hu":"kettő"}},
  {"q":{"en":"What is the primary risk of using the Method of False Position on a function that is neither convex nor concave?","hu":"Mi a fő kockázata a húrmódszer használatának egy se nem konvex, se nem konkáv függvényen?"},"a":{"en":"The proof of convergence provided in Theorem 2.19 may not apply, making it much more complicated.","hu":"A 2.19. tételbeli konvergenciabizonyítás esetleg nem alkalmazható, így az sokkal bonyolultabbá válik."}},
  {"q":{"en":"In the limit equation for the convex case, why is $p$ strictly greater than $a$?","hu":"A konvex eset határegyenletében miért szigorúan nagyobb $p$ az $a$-nál?"},"a":{"en":"Because $f(a) > 0$ and $f(p) = 0$, and $f$ is continuous.","hu":"Mert $f(a) > 0$ és $f(p) = 0$, és $f$ folytonos."}},
  {"q":{"en":"What is the value of $f(p_0)$ for $f(x) = e^x - 2\\cos x$ on $[0, 1]$?","hu":"Mennyi $f(p_0)$ értéke az $f(x) = e^x - 2\\cos x$-re $[0, 1]$-en?"},"a":{"en":"$-3.9698e-01$","hu":"$-3.9698e-01$"}},
  {"q":{"en":"The Method of False Position sequence $p_k$ is guaranteed to converge to the root $p$ if $f \\in C[a, b]$ and $f$ is _____ on the interval.","hu":"A húrmódszer $p_k$ sorozata garantáltan a $p$ gyökhöz konvergál, ha $f \\in C[a, b]$ és $f$ _____ az intervallumon."},"a":{"en":"convex or concave","hu":"konvex vagy konkáv"}},
  {"q":{"en":"In the Hungarian slide 37, $p_k$ is defined as the metszéspont (intersection) of the húr (chord) and the _____.","hu":"A 37. magyar dián $p_k$-t a húr és a _____ metszéspontjaként definiáljuk."},"a":{"en":"$x$-tengely ($x$-axis)","hu":"$x$-tengely"}},
  {"q":{"en":"What happens if $f(a_k)$ and $f(p_k)$ have opposite signs?","hu":"Mi történik, ha $f(a_k)$ és $f(p_k)$ ellentétes előjelűek?"},"a":{"en":"The next interval $[a_{k+1}, b_{k+1}]$ is set to $[a_k, p_k]$.","hu":"A következő $[a_{k+1}, b_{k+1}]$ intervallum $[a_k, p_k]$ lesz."}},
  {"q":{"en":"What happens if $f(p_k)$ and $f(b_k)$ have opposite signs?","hu":"Mi történik, ha $f(p_k)$ és $f(b_k)$ ellentétes előjelűek?"},"a":{"en":"The next interval $[a_{k+1}, b_{k+1}]$ is set to $[p_k, b_k]$.","hu":"A következő $[a_{k+1}, b_{k+1}]$ intervallum $[p_k, b_k]$ lesz."}},
  {"q":{"en":"How does the Method of False Position behave if one endpoint of the function is very far from the $x$-axis compared to the other?","hu":"Hogyan viselkedik a húrmódszer, ha a függvény egyik végpontja sokkal messzebb van az $x$-tengelytől, mint a másik?"},"a":{"en":"Convergence becomes very slow as the secant intersection stays near the closer endpoint.","hu":"A konvergencia nagyon lassúvá válik, mivel a szelő metszéspontja a közelebbi végpont közelében marad."}},
  {"q":{"en":"In the iterative formula, if $f(a_k)$ and $f(b_k)$ are very close in value, what numerical issue might occur?","hu":"Az iterációs képletben, ha $f(a_k)$ és $f(b_k)$ értékben nagyon közel vannak, milyen numerikus probléma léphet fel?"},"a":{"en":"Division by a value near zero, leading to potential instability or error.","hu":"Nullához közeli értékkel való osztás, ami instabilitáshoz vagy hibához vezethet."}},
  {"q":{"en":"True or False: The sequence of intervals $[a_k, b_k]$ in the Regula Falsi method is always nested.","hu":"Igaz vagy hamis: A regula falsi módszerben az $[a_k, b_k]$ intervallumok sorozata mindig egymásba ágyazott."},"a":{"en":"True","hu":"Igaz"}},
  {"q":{"en":"The Method of False Position is described in the text as Algorithm _____.","hu":"A húrmódszert a szöveg a _____ algoritmusként írja le."},"a":{"en":"2.18","hu":"2.18"}},
  {"q":{"en":"What is the purpose of the $TOL$ parameter in root-finding algorithms?","hu":"Mi a $TOL$ paraméter célja a gyökkereső algoritmusokban?"},"a":{"en":"It defines the tolerance or maximum allowable error for the approximation.","hu":"A közelítés tűréshatárát, azaz a maximálisan megengedett hibát definiálja."}},
  {"q":{"en":"If $f(x) = e^x - 2\\cos x$, what is the sign of $f(0)$?","hu":"Ha $f(x) = e^x - 2\\cos x$, mi $f(0)$ előjele?"},"a":{"en":"Negative ($1 - 2 = -1$)","hu":"Negatív ($1 - 2 = -1$)"}},
  {"q":{"en":"If $f(x) = e^x - 2\\cos x$, what is the sign of $f(1)$?","hu":"Ha $f(x) = e^x - 2\\cos x$, mi $f(1)$ előjele?"},"a":{"en":"Positive ($e^1 - 2\\cos(1) \\approx 2.718 - 1.08 > 0$)","hu":"Pozitív ($e^1 - 2\\cos(1) \\approx 2.718 - 1.08 > 0$)"}},
  {"q":{"en":"In Table 2.4, what is the value of $p_0$ for the interval $[0, 4]$?","hu":"A 2.4. táblában mennyi $p_0$ értéke a $[0, 4]$ intervallumra?"},"a":{"en":"$0.07029205$","hu":"$0.07029205$"}},
  {"q":{"en":"In the proof of Theorem 2.19, what property of $p_k$ allows us to say it converges to a limit $p$?","hu":"A 2.19. tétel bizonyításában a $p_k$ melyik tulajdonsága engedi kimondani, hogy egy $p$ határértékhez konvergál?"},"a":{"en":"It is a monotonic and bounded sequence.","hu":"Monoton és korlátos sorozat."}},
  {"q":{"en":"Formula: Equation of the secant line passing through $(a, f(a))$ and $(b, f(b))$.","hu":"Képlet: A $(a, f(a))$ és $(b, f(b))$ pontokon átmenő szelő egyenlete."},"a":{"en":"$y - f(a) = \\frac{f(a) - f(b)}{a - b}(x - a)$","hu":"$y - f(a) = \\frac{f(a) - f(b)}{a - b}(x - a)$"}},
  {"q":{"en":"In the Hungarian text, what should the program do if $f(a) = f(b)$?","hu":"A magyar szöveg szerint mit tegyen a program, ha $f(a) = f(b)$?"},"a":{"en":"Give a warning message and terminate the program safely.","hu":"Adjon figyelmeztető üzenetet, és biztonságosan álljon le."}},
  {"q":{"en":"In Example 2.20, how does the accuracy of $p_8$ compare to the required $TOL$?","hu":"A 2.20. példában hogyan viszonyul $p_8$ pontossága a megkövetelt $TOL$-hoz?"},"a":{"en":"It is better (more precise) than $10^{-5}$.","hu":"Jobb (pontosabb), mint $10^{-5}$."}},
  {"q":{"en":"How does the Method of False Position select the dividing point $p_k$ differently than the Bisection Method?","hu":"Hogyan választja a húrmódszer a $p_k$ osztópontot másképp, mint a felezési módszer?"},"a":{"en":"It uses a weighted average based on function values instead of the simple arithmetic mean.","hu":"A függvényértékeken alapuló súlyozott átlagot használ az egyszerű számtani közép helyett."}}
]
