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
  {"q":{"en":"What is the primary objective of the bisection method in numerical analysis?","hu":"Mi a felezési módszer elsődleges célja a numerikus analízisben?"},"a":{"en":"To approximate the solution of a scalar nonlinear algebraic equation $f(x) = 0$.","hu":"Egy skaláris nemlineáris algebrai egyenlet $f(x) = 0$ megoldásának közelítése."}},
  {"q":{"en":"Which two properties must a function $f$ satisfy on the interval $[a,b]$ for the bisection method to be guaranteed to work?","hu":"Milyen két tulajdonságot kell teljesítenie egy $f$ függvénynek az $[a,b]$ intervallumon, hogy a felezési módszer garantáltan működjön?"},"a":{"en":"The function must be continuous on $[a,b]$ and have opposite signs at the endpoints ($f(a)f(b) < 0$).","hu":"A függvénynek folytonosnak kell lennie $[a,b]$-n, és ellentétes előjelűnek a végpontokban ($f(a)f(b) < 0$)."}},
  {"q":{"en":"The _____ Theorem states that if $f \\in C[a,b]$, $f(a) \\neq f(b)$, and $d \\in \\langle f(a), f(b) \\rangle$, then there exists a $c \\in (a,b)$ such that $f(c) = d$.","hu":"A _____ tétel szerint ha $f \\in C[a,b]$, $f(a) \\neq f(b)$ és $d \\in \\langle f(a), f(b) \\rangle$, akkor létezik $c \\in (a,b)$, hogy $f(c) = d$."},"a":{"en":"Intermediate Value (or Bolzano–Darboux)","hu":"Közbülső érték (Bolzano–Darboux)"}},
  {"q":{"en":"In the notation $\\langle \\alpha, \\beta \\rangle$, what does the interval represent?","hu":"A $\\langle \\alpha, \\beta \\rangle$ jelölésben mit jelent az intervallum?"},"a":{"en":"The open interval $(\\min\\{\\alpha, \\beta\\}, \\max\\{\\alpha, \\beta\\})$.","hu":"A $(\\min\\{\\alpha, \\beta\\}, \\max\\{\\alpha, \\beta\\})$ nyílt intervallumot."}},
  {"q":{"en":"Formula: Midpoint $p_0$ of the initial interval $[a_0, b_0]$ in the bisection method.","hu":"Képlet: Az $[a_0, b_0]$ kezdő intervallum $p_0$ felezőpontja a felezési módszerben."},"a":{"en":"$p_0 = \\frac{a_0 + b_0}{2}$","hu":"$p_0 = \\frac{a_0 + b_0}{2}$"}},
  {"q":{"en":"If the function $f$ changes sign on the interval $[a_0, p_0]$, how is the next interval $[a_1, b_1]$ defined?","hu":"Ha az $f$ függvény előjelet vált az $[a_0, p_0]$ intervallumon, hogyan definiáljuk a következő $[a_1, b_1]$ intervallumot?"},"a":{"en":"$[a_1, b_1] = [a_0, p_0]$ (the left half of the current interval).","hu":"$[a_1, b_1] = [a_0, p_0]$ (az aktuális intervallum bal fele)."}},
  {"q":{"en":"If $f$ does not change sign on $[a_0, p_0]$, but does so on $[p_0, b_0]$, how is the next interval $[a_1, b_1]$ defined?","hu":"Ha $f$ nem vált előjelet $[a_0, p_0]$-n, de igen $[p_0, b_0]$-n, hogyan definiáljuk a következő $[a_1, b_1]$ intervallumot?"},"a":{"en":"$[a_1, b_1] = [p_0, b_0]$ (the right half of the current interval).","hu":"$[a_1, b_1] = [p_0, b_0]$ (az aktuális intervallum jobb fele)."}},
  {"q":{"en":"What is the result of the bisection method iteration if $f(p_k) = 0$ for some midpoint $p_k$?","hu":"Mi az eredménye a felezési iterációnak, ha $f(p_k) = 0$ valamely $p_k$ felezőpontban?"},"a":{"en":"The midpoint $p_k$ is the exact root of the function $f$, and the procedure stops.","hu":"A $p_k$ felezőpont az $f$ függvény pontos gyöke, és az eljárás leáll."}},
  {"q":{"en":"Formula: The length of the $k$-th interval $[a_k, b_k]$ in the bisection method.","hu":"Képlet: A $k$-adik $[a_k, b_k]$ intervallum hossza a felezési módszerben."},"a":{"en":"$b_k - a_k = \\frac{b - a}{2^k}$","hu":"$b_k - a_k = \\frac{b - a}{2^k}$"}},
  {"q":{"en":"Which theorem ensures that the sequence of nested closed intervals in the bisection method converges to a unique common point $p$?","hu":"Melyik tétel biztosítja, hogy a felezési módszer egymásba ágyazott zárt intervallumainak sorozata egyetlen közös $p$ ponthoz konvergál?"},"a":{"en":"Cantor's nested intervals theorem.","hu":"Cantor egymásba skatulyázott intervallumokra vonatkozó tétele."}},
  {"q":{"en":"In the limit as $k \\to \\infty$, what values do the sequences of endpoints $a_k$ and $b_k$ converge to?","hu":"A $k \\to \\infty$ határértékben milyen értékhez konvergálnak az $a_k$ és $b_k$ végpontsorozatok?"},"a":{"en":"They both converge to the root $p$.","hu":"Mindkettő a $p$ gyökhöz konvergál."}},
  {"q":{"en":"Why must $f(p) = 0$ if $f(a_k) < 0$ and $f(b_k) > 0$ for all $k$ as $a_k, b_k \\to p$?","hu":"Miért kell $f(p) = 0$-nak teljesülnie, ha $f(a_k) < 0$ és $f(b_k) > 0$ minden $k$-ra, miközben $a_k, b_k \\to p$?"},"a":{"en":"The continuity of $f$ implies $f(p) \\leq 0$ and $f(p) \\geq 0$, which forces $f(p) = 0$.","hu":"Az $f$ folytonossága miatt $f(p) \\leq 0$ és $f(p) \\geq 0$, ami $f(p) = 0$-t kényszerít."}},
  {"q":{"en":"Formula: The upper bound for the error $|p_k - p|$ in the bisection method after $k$ steps.","hu":"Képlet: A $|p_k - p|$ hiba felső korlátja a felezési módszerben $k$ lépés után."},"a":{"en":"$|p_k - p| \\leq \\frac{b - a}{2^{k+1}}$","hu":"$|p_k - p| \\leq \\frac{b - a}{2^{k+1}}$"}},
  {"q":{"en":"Formula: The minimum number of iterations $k$ required to reach a tolerance $\\varepsilon$.","hu":"Képlet: A $\\varepsilon$ tűréshatár eléréséhez szükséges minimális $k$ iterációszám."},"a":{"en":"$k \\geq \\log_2 \\frac{b - a}{\\varepsilon} - 1$","hu":"$k \\geq \\log_2 \\frac{b - a}{\\varepsilon} - 1$"}},
  {"q":{"en":"In the bisection method error estimation, what does $\\varepsilon$ represent?","hu":"A felezési módszer hibabecslésében mit jelöl $\\varepsilon$?"},"a":{"en":"The predefined tolerance or maximum allowable error bound.","hu":"Az előre megadott tűréshatárt, azaz a maximálisan megengedett hibakorlátot."}},
  {"q":{"en":"Example: For the function $f(x) = e^x - 2\\cos x$ on $[0,1]$, why is there exactly one root?","hu":"Példa: Az $f(x) = e^x - 2\\cos x$ függvényre $[0,1]$-en miért van pontosan egy gyök?"},"a":{"en":"Because the function is strictly monotone increasing on that interval.","hu":"Mert a függvény szigorúan monoton növekvő azon az intervallumon."}},
  {"q":{"en":"Example: For $f(x) = e^x - 2\\cos x$ on $[0,1]$ with $\\varepsilon = 10^{-5}$, approximately how many steps are calculated as necessary?","hu":"Példa: Az $f(x) = e^x - 2\\cos x$-re $[0,1]$-en $\\varepsilon = 10^{-5}$ mellett körülbelül hány lépés szükséges a számítás szerint?"},"a":{"en":"Approximately 16 steps ($k \\geq 15.61$).","hu":"Körülbelül 16 lépés ($k \\geq 15.61$)."}},
  {"q":{"en":"What happens when the bisection method is applied to $f(x) = 1/x$ on $[-0.5, 3]$?","hu":"Mi történik, ha a felezési módszert az $f(x) = 1/x$-re alkalmazzuk a $[-0.5, 3]$-on?"},"a":{"en":"The method fails to find a root because the function is not continuous on the interval (specifically at $x=0$).","hu":"A módszer nem talál gyököt, mert a függvény nem folytonos az intervallumon (konkrétan $x=0$-ban)."}},
  {"q":{"en":"Term: Bisection Method","hu":"Fogalom: Felezési módszer"},"a":{"en":"Definition: An iterative algorithm that finds a root by repeatedly halving an interval that brackets the root.","hu":"Definíció: Iteratív algoritmus, amely a gyököt egy azt közrefogó intervallum ismételt felezésével találja meg."}},
  {"q":{"en":"How does the bisection method ensure that at least one root is contained in each generated sub-interval?","hu":"Hogyan biztosítja a felezési módszer, hogy minden előállított részintervallum legalább egy gyököt tartalmazzon?"},"a":{"en":"By selecting sub-intervals that maintain the property of having opposite signs at the endpoints.","hu":"Olyan részintervallumok választásával, amelyek megtartják az ellentétes előjelű végpontok tulajdonságát."}},
  {"q":{"en":"In the bisection method, the sequence of midpoints $p_k$ converges to the _____ of the function.","hu":"A felezési módszerben a $p_k$ felezőpontok sorozata a függvény _____-éhez konvergál."},"a":{"en":"Root (or solution)","hu":"Gyökéhez (megoldásához)"}},
  {"q":{"en":"The error bound of the bisection method depends on the _____ of the initial interval $[a,b]$.","hu":"A felezési módszer hibakorlátja az $[a,b]$ kezdő intervallum _____-étől függ."},"a":{"en":"Length (or width)","hu":"Hosszától (szélességétől)"}},
  {"q":{"en":"True or False: The bisection method can find multiple roots simultaneously within a single interval.","hu":"Igaz vagy hamis: A felezési módszer egyetlen intervallumon belül egyszerre több gyököt is meg tud találni."},"a":{"en":"False; it converges to a single root contained within the nested intervals.","hu":"Hamis; egyetlen, az egymásba ágyazott intervallumokban lévő gyökhöz konvergál."}},
  {"q":{"en":"According to Theorem 2.16, what class of functions ($f \\in \\dots$) is required for the bisection sequence to converge?","hu":"A 2.16. tétel szerint milyen függvényosztály ($f \\in \\dots$) kell a felezési sorozat konvergenciájához?"},"a":{"en":"$f \\in C[a,b]$ (continuous functions on the closed interval).","hu":"$f \\in C[a,b]$ (a zárt intervallumon folytonos függvények)."}},
  {"q":{"en":"Equation (2.4) shows that the error of the bisection method is halved with each _____.","hu":"A (2.4) egyenlet azt mutatja, hogy a felezési módszer hibája minden _____-mal feleződik."},"a":{"en":"Iteration (or step/halving)","hu":"Iterációval (lépéssel/felezéssel)"}},
  {"q":{"en":"Exercise root existence: What is the initial interval provided to show $x^3 - 6x - 1 = 0$ has a root?","hu":"Gyöklétezési feladat: Milyen kezdő intervallumot adunk meg annak igazolására, hogy $x^3 - 6x - 1 = 0$-nak van gyöke?"},"a":{"en":"$[-1, 1]$","hu":"$[-1, 1]$"}},
  {"q":{"en":"Exercise root existence: What is the initial interval provided for $x = e^{-2x}$?","hu":"Gyöklétezési feladat: Milyen kezdő intervallumot adunk meg az $x = e^{-2x}$-hez?"},"a":{"en":"$[-1, 2]$","hu":"$[-1, 2]$"}},
  {"q":{"en":"Exercise root existence: For $\\tan x = x + 1$, what is the specified interval?","hu":"Gyöklétezési feladat: A $\\tan x = x + 1$-hez milyen intervallumot adunk meg?"},"a":{"en":"$[-1, 1.5]$","hu":"$[-1, 1.5]$"}},
  {"q":{"en":"Exercise root existence: For $e^{-\\sin x} = x^2 - 1$, what is the specified interval?","hu":"Gyöklétezési feladat: Az $e^{-\\sin x} = x^2 - 1$-hez milyen intervallumot adunk meg?"},"a":{"en":"$[0, 2]$","hu":"$[0, 2]$"}},
  {"q":{"en":"In the context of Bolzano-Darboux, what must be true about $f(a)$ and $f(b)$ to guarantee a root exists for $f(x)=0$?","hu":"A Bolzano–Darboux kontextusában mi igaz $f(a)$-ra és $f(b)$-re ahhoz, hogy garantáltan legyen gyök az $f(x)=0$-ra?"},"a":{"en":"They must have opposite signs ($f(a) < 0 < f(b)$ or $f(b) < 0 < f(a)$).","hu":"Ellentétes előjelűnek kell lenniük ($f(a) < 0 < f(b)$ vagy $f(b) < 0 < f(a)$)."}},
  {"q":{"en":"What is the geometric interpretation of the Intermediate Value Theorem?","hu":"Mi a közbülső érték tételének geometriai jelentése?"},"a":{"en":"A continuous curve passing through points above and below a horizontal line must intersect that line.","hu":"Egy folytonos görbe, amely egy vízszintes egyenes fölött és alatt is áthalad, metszi azt az egyenest."}},
  {"q":{"en":"In Example 2.17, what is the value of $f(0)$?","hu":"A 2.17. példában mennyi $f(0)$ értéke?"},"a":{"en":"$-1$","hu":"$-1$"}},
  {"q":{"en":"What happens to the error bound in the bisection method if the tolerance $\\varepsilon$ is decreased by a factor of 10?","hu":"Mi történik a felezési módszer hibakorlátjával, ha a $\\varepsilon$ tűréshatárt tizedére csökkentjük?"},"a":{"en":"The number of required iterations $k$ increases by approximately $3.32$ (since $\\log_2 10 \\approx 3.32$).","hu":"A szükséges $k$ iterációszám körülbelül $3.32$-vel nő (mivel $\\log_2 10 \\approx 3.32$)."}},
  {"q":{"en":"Concept: Nested intervals","hu":"Fogalom: Egymásba ágyazott intervallumok"},"a":{"en":"Definition: A sequence of intervals where each interval is contained within the previous one ($[a_{k+1}, b_{k+1}] \\subset [a_k, b_k]$).","hu":"Definíció: Olyan intervallumsorozat, ahol minden intervallum az előzőben van ($[a_{k+1}, b_{k+1}] \\subset [a_k, b_k]$)."}},
  {"q":{"en":"How is the 'opposite sign property' checked computationally for an interval $[a, p]$?","hu":"Hogyan ellenőrizzük számítással az „ellentétes előjel” tulajdonságot egy $[a, p]$ intervallumra?"},"a":{"en":"By checking if the product $f(a)f(p) < 0$.","hu":"Annak ellenőrzésével, hogy az $f(a)f(p) < 0$ szorzat teljesül-e."}},
  {"q":{"en":"In the calculation $k \\geq \\log_2 \\frac{b - a}{\\varepsilon} - 1$, why is the base of the logarithm 2?","hu":"A $k \\geq \\log_2 \\frac{b - a}{\\varepsilon} - 1$ számításban miért 2 a logaritmus alapja?"},"a":{"en":"Because the interval length is reduced by a factor of 2 in each iteration.","hu":"Mert az intervallum hossza minden iterációban 2-es tényezővel csökken."}},
  {"q":{"en":"What is the starting index $k$ for the bisection method iteration table provided in the text?","hu":"Mi a kezdő $k$ index a szövegben megadott felezési iterációs táblában?"},"a":{"en":"0","hu":"0"}},
  {"q":{"en":"If $f(0) = -1$ and $f(1) = 1.718$, and $p_0 = 0.5$ gives $f(0.5) = -0.106$, what is the next interval?","hu":"Ha $f(0) = -1$ és $f(1) = 1.718$, és $p_0 = 0.5$ esetén $f(0.5) = -0.106$, mi a következő intervallum?"},"a":{"en":"$[0.5, 1]$","hu":"$[0.5, 1]$"}},
  {"q":{"en":"The bisection method is often described as a 'bracket' method because it always keeps the root between _____.","hu":"A felezési módszert gyakran „közrefogó” módszernek nevezik, mert a gyököt mindig _____ tartja."},"a":{"en":"The two endpoints of the current interval ($a_k$ and $b_k$).","hu":"Az aktuális intervallum két végpontja ($a_k$ és $b_k$) között."}},
  {"q":{"en":"When solving $x = e^{-2x}$ via bisection, the function $f(x)$ should be rearranged as _____.","hu":"Az $x = e^{-2x}$ felezéssel való megoldásakor az $f(x)$ függvényt _____ alakra kell rendezni."},"a":{"en":"$f(x) = x - e^{-2x} = 0$ (or $e^{-2x} - x = 0$).","hu":"$f(x) = x - e^{-2x} = 0$ (vagy $e^{-2x} - x = 0$)."}},
  {"q":{"en":"If an interval length is $1.0$ and we perform 1 iteration, the maximum possible error for the midpoint $p_0$ is _____.","hu":"Ha egy intervallum hossza $1.0$ és 1 iterációt végzünk, a $p_0$ felezőpont maximális lehetséges hibája _____."},"a":{"en":"0.5 (or $\\frac{1}{2^1}$)","hu":"0.5 (vagy $\\frac{1}{2^1}$)"}},
  {"q":{"en":"The sequence of midpoints $p_k$ is an approximation of the _____ point of the nested intervals.","hu":"A $p_k$ felezőpontok sorozata az egymásba ágyazott intervallumok _____ pontjának közelítése."},"a":{"en":"Unique common (or limit)","hu":"Egyetlen közös (határ-)"}},
  {"q":{"en":"Why does the bisection method converge even if $f$ is not differentiable?","hu":"Miért konvergál a felezési módszer akkor is, ha $f$ nem differenciálható?"},"a":{"en":"Because it only requires continuity to satisfy the Intermediate Value Theorem.","hu":"Mert csak folytonosságot igényel a közbülső érték tételének teljesüléséhez."}},
  {"q":{"en":"Cloze: The length of the $10$th interval is _____ times smaller than the initial interval.","hu":"Kiegészítés: A $10$. intervallum hossza _____-szer kisebb a kezdő intervallumnál."},"a":{"en":"$2^{10}$ (or 1024)","hu":"$2^{10}$ (vagy 1024)"}},
  {"q":{"en":"How does the bisection method handle functions with multiple roots in the initial interval?","hu":"Hogyan kezeli a felezési módszer azokat a függvényeket, amelyeknek több gyökük van a kezdő intervallumban?"},"a":{"en":"It will converge to exactly one of the roots, depending on the signs at the midpoints.","hu":"Pontosan az egyik gyökhöz konvergál, a felezőpontokban vett előjelektől függően."}},
  {"q":{"en":"If $f(a) > 0$ and $f(b) < 0$, and $f(p_0) > 0$, what is the new interval $[a_1, b_1]$?","hu":"Ha $f(a) > 0$ és $f(b) < 0$, és $f(p_0) > 0$, mi az új $[a_1, b_1]$ intervallum?"},"a":{"en":"$[p_0, b_0]$ (since $f(p_0)$ and $f(b_0)$ have opposite signs).","hu":"$[p_0, b_0]$ (mivel $f(p_0)$ és $f(b_0)$ ellentétes előjelűek)."}},
  {"q":{"en":"Exercise: What is the value of $f(p_0)$ for $f(x) = e^x - 2\\cos x$ at $k=0$?","hu":"Feladat: Mennyi $f(p_0)$ értéke az $f(x) = e^x - 2\\cos x$-re $k=0$-nál?"},"a":{"en":"$-1.0644 \\times 10^{-1}$ (or $-0.10644$)","hu":"$-1.0644 \\times 10^{-1}$ (vagy $-0.10644$)"}},
  {"q":{"en":"Formula: The distance from the midpoint $p_k$ to any endpoint $a_k$ or $b_k$.","hu":"Képlet: A $p_k$ felezőpont távolsága bármely $a_k$ vagy $b_k$ végponttól."},"a":{"en":"$\\frac{b_k - a_k}{2}$","hu":"$\\frac{b_k - a_k}{2}$"}},
  {"q":{"en":"In the bisection method, $p_k$ is defined as the _____ of the interval $[a_k, b_k]$.","hu":"A felezési módszerben $p_k$ az $[a_k, b_k]$ intervallum _____-ja."},"a":{"en":"Midpoint (or arithmetic mean)","hu":"Felezőpontja (számtani közepe)"}},
  {"q":{"en":"The Bolzano-Darboux Theorem is a specific application of which broader calculus theorem?","hu":"A Bolzano–Darboux-tétel melyik tágabb analízistétel konkrét alkalmazása?"},"a":{"en":"Intermediate Value Theorem","hu":"A közbülső érték tétele"}},
  {"q":{"en":"Is the bisection method considered a fast or slow convergence method compared to others?","hu":"A felezési módszer gyors vagy lassú konvergenciájúnak számít másokhoz képest?"},"a":{"en":"It is generally considered slow, but very reliable (robust).","hu":"Általában lassúnak, de nagyon megbízhatónak (robusztusnak) tekintik."}},
  {"q":{"en":"Condition: Why must $f$ be continuous for the bisection method to reliably converge to a root?","hu":"Feltétel: Miért kell $f$-nek folytonosnak lennie ahhoz, hogy a felezési módszer megbízhatóan gyökhöz konvergáljon?"},"a":{"en":"To ensure that $f(p)=0$ is the only value consistent with the limits of the positive and negative endpoint sequences.","hu":"Hogy biztosítsuk: $f(p)=0$ az egyetlen érték, amely összhangban van a pozitív és negatív végpontsorozatok határértékeivel."}}
]
