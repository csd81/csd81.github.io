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
  {"q":{"en":"What is the primary goal of the numerical methods discussed in this chapter?","hu":"Mi az ebben a fejezetben tárgyalt numerikus módszerek elsődleges célja?"},"a":{"en":"To generate an infinite sequence $p_k$ that approximates the exact root $p$ of a function $f$.","hu":"Egy végtelen $p_k$ sorozat előállítása, amely egy $f$ függvény pontos $p$ gyökét közelíti."}},
  {"q":{"en":"How is the exact root $p$ of a function $f$ mathematically defined?","hu":"Hogyan definiáljuk matematikailag egy $f$ függvény pontos $p$ gyökét?"},"a":{"en":"$f(p) = 0$","hu":"$f(p) = 0$"}},
  {"q":{"en":"In the context of iterative sequences, what does the term $p_k$ represent?","hu":"Az iteratív sorozatok kontextusában mit jelöl a $p_k$ tag?"},"a":{"en":"The $k$th term or the $k$th approximation of the limit $p$.","hu":"A $k$-adik tagot, azaz a $p$ határérték $k$-adik közelítését."}},
  {"q":{"en":"What three predefined parameters are required to implement stopping criteria for iterations?","hu":"Milyen három előre megadott paraméter szükséges az iterációk leállási feltételeinek megvalósításához?"},"a":{"en":"Tolerances $\\varepsilon_1$, $\\varepsilon_2$, and $\\varepsilon_3$ (all $> 0$).","hu":"Az $\\varepsilon_1$, $\\varepsilon_2$ és $\\varepsilon_3$ tűréshatárok (mind $> 0$)."}},
  {"q":{"en":"Criterion (i) for stopping iterations is defined by which inequality?","hu":"Melyik egyenlőtlenség definiálja az (i) leállási feltételt?"},"a":{"en":"$|p_k - p_{k-1}| < \\varepsilon_1$","hu":"$|p_k - p_{k-1}| < \\varepsilon_1$"}},
  {"q":{"en":"What is Criterion (i) a numerical analogue of?","hu":"Minek a numerikus analógja az (i) feltétel?"},"a":{"en":"The absolute error $|p_k - p|$ of the approximation.","hu":"A közelítés $|p_k - p|$ abszolút hibájának."}},
  {"q":{"en":"What is the underlying assumption of stopping criterion (i)?","hu":"Mi az (i) leállási feltétel alapfeltevése?"},"a":{"en":"If consecutive terms are close to each other, it is assumed they are both close to the limit $p$.","hu":"Ha az egymást követő tagok közel vannak egymáshoz, feltételezzük, hogy mindkettő közel van a $p$ határértékhez."}},
  {"q":{"en":"Criterion (ii) for stopping iterations is defined by which inequality?","hu":"Melyik egyenlőtlenség definiálja a (ii) leállási feltételt?"},"a":{"en":"$\\frac{|p_k - p_{k-1}|}{|p_k|} < \\varepsilon_2$","hu":"$\\frac{|p_k - p_{k-1}|}{|p_k|} < \\varepsilon_2$"}},
  {"q":{"en":"What is Criterion (ii) a numerical analogue of?","hu":"Minek a numerikus analógja a (ii) feltétel?"},"a":{"en":"The relative error $|p_k - p|/|p|$ of the approximation.","hu":"A közelítés $|p_k - p|/|p|$ relatív hibájának."}},
  {"q":{"en":"Why might Criterion (ii) be preferred over Criterion (i)?","hu":"Miért részesíthető előnyben a (ii) feltétel az (i)-gyel szemben?"},"a":{"en":"It takes into account the order of magnitude of the sequence terms.","hu":"Figyelembe veszi a sorozat tagjainak nagyságrendjét."}},
  {"q":{"en":"In the relative error analogue formula, what term is used in place of the unknown limit $p$ in the denominator?","hu":"A relatívhiba-analóg képletben milyen tagot használunk az ismeretlen $p$ határérték helyett a nevezőben?"},"a":{"en":"The current term $|p_k|$.","hu":"Az aktuális $|p_k|$ tagot."}},
  {"q":{"en":"Criterion (iii) for stopping iterations is defined by which inequality?","hu":"Melyik egyenlőtlenség definiálja a (iii) leállási feltételt?"},"a":{"en":"$|f(p_k)| < \\varepsilon_3$","hu":"$|f(p_k)| < \\varepsilon_3$"}},
  {"q":{"en":"What is being tested by Criterion (iii)?","hu":"Mit vizsgál a (iii) feltétel?"},"a":{"en":"Whether the function value at the current approximation is close to zero.","hu":"Hogy az aktuális közelítésben a függvényérték közel van-e a nullához."}},
  {"q":{"en":"Why is Criterion (iii) specifically used for root-finding problems?","hu":"Miért használjuk a (iii) feltételt kifejezetten gyökkereső feladatoknál?"},"a":{"en":"It directly tests how well $p_k$ satisfies the mathematical requirement $f(p) = 0$.","hu":"Közvetlenül teszteli, mennyire teljesíti $p_k$ az $f(p) = 0$ matematikai követelményt."}},
  {"q":{"en":"What common programming practice is recommended to prevent infinite loops in iteration codes?","hu":"Milyen elterjedt programozási gyakorlat ajánlott a végtelen ciklusok elkerülésére az iterációs kódokban?"},"a":{"en":"Setting a predefined maximal iteration number to stop the sequence.","hu":"Egy előre megadott maximális iterációszám beállítása a sorozat leállítására."}},
  {"q":{"en":"Besides avoiding infinite loops, why else should a maximal iteration number be used?","hu":"A végtelen ciklusok elkerülésén kívül miért érdemes még maximális iterációszámot használni?"},"a":{"en":"To prevent calculations that have a convergence rate that is too slow.","hu":"Hogy elkerüljük a túl lassú konvergenciasebességű számításokat."}},
  {"q":{"en":"Are the stopping criteria (i), (ii), and (iii) considered mathematically rigorous or heuristic?","hu":"Az (i), (ii) és (iii) leállási feltételek matematikailag szigorúak vagy heurisztikusak?"},"a":{"en":"Heuristic.","hu":"Heurisztikusak."}},
  {"q":{"en":"Why are stopping criteria often used in combination in practice?","hu":"Miért használják a gyakorlatban gyakran kombinálva a leállási feltételeket?"},"a":{"en":"To avoid false terminations where a criterion is met but the term is not actually close to the root.","hu":"Hogy elkerüljük a téves leállásokat, amikor egy feltétel teljesül, de a tag valójában nincs közel a gyökhöz."}},
  {"q":{"en":"Which two criteria can be applied to any iteration method, regardless of the problem type?","hu":"Melyik két feltétel alkalmazható bármely iterációs módszerre, a feladat típusától függetlenül?"},"a":{"en":"Criteria (i) and (ii).","hu":"Az (i) és (ii) feltétel."}},
  {"q":{"en":"What sequence is used as a standard counter-example to show that Criterion (i) can fail?","hu":"Melyik sorozatot használjuk standard ellenpéldaként annak megmutatására, hogy az (i) feltétel megbukhat?"},"a":{"en":"The harmonic series $p_k = \\sum_{i=1}^k \\frac{1}{i}$.","hu":"A harmonikus sor $p_k = \\sum_{i=1}^k \\frac{1}{i}$."}},
  {"q":{"en":"For the sequence $p_k = \\sum_{i=1}^k \\frac{1}{i}$, what is the value of $|p_k - p_{k-1}|$?","hu":"A $p_k = \\sum_{i=1}^k \\frac{1}{i}$ sorozatra mennyi $|p_k - p_{k-1}|$ értéke?"},"a":{"en":"$\\frac{1}{k}$","hu":"$\\frac{1}{k}$"}},
  {"q":{"en":"Why does the sequence $p_k = \\sum_{i=1}^k \\frac{1}{i}$ satisfy Criterion (i) for large $k$ even though it does not converge?","hu":"Miért teljesíti a $p_k = \\sum_{i=1}^k \\frac{1}{i}$ sorozat az (i) feltételt nagy $k$-ra, holott nem konvergál?"},"a":{"en":"The distance between consecutive terms $\\frac{1}{k}$ eventually becomes smaller than any $\\varepsilon_1 > 0$.","hu":"Az egymást követő tagok közötti $\\frac{1}{k}$ távolság végül bármely $\\varepsilon_1 > 0$-nál kisebb lesz."}},
  {"q":{"en":"In Criterion (ii), the expression $\\frac{|p_k - p_{k-1}|}{|p_k|}$ for $p_k = \\sum_{i=1}^k \\frac{1}{i}$ behaves in what way as $k \\to \\infty$?","hu":"A (ii) feltételben a $\\frac{|p_k - p_{k-1}|}{|p_k|}$ kifejezés a $p_k = \\sum_{i=1}^k \\frac{1}{i}$-re hogyan viselkedik, ha $k \\to \\infty$?"},"a":{"en":"It tends to zero, satisfying the criterion despite the sequence diverging to infinity.","hu":"Nullához tart, teljesítve a feltételt, holott a sorozat a végtelenhez divergál."}},
  {"q":{"en":"A function graph with a small 'valley' where $|f(p_k)|$ is small but $p_k$ is far from the root is an example of the failure of which criterion?","hu":"Egy olyan függvénygrafikon, ahol egy kis „völgyben” $|f(p_k)|$ kicsi, de $p_k$ messze van a gyöktől, melyik feltétel kudarcának példája?"},"a":{"en":"Criterion (iii).","hu":"A (iii) feltételé."}},
  {"q":{"en":"If $f(x) = x^8$ and $p_k = 1/k$, what approximate root is found using Criterion (iii) with $\\varepsilon_3 = 10^{-8}$?","hu":"Ha $f(x) = x^8$ és $p_k = 1/k$, milyen közelítő gyököt találunk a (iii) feltétellel, $\\varepsilon_3 = 10^{-8}$ mellett?"},"a":{"en":"$p_{11} \\approx 0.0909$ (since $(1/11)^8 < 10^{-8}$).","hu":"$p_{11} \\approx 0.0909$ (mivel $(1/11)^8 < 10^{-8}$)."}},
  {"q":{"en":"If $f(x) = x^8$ and $p_k = 1/k$, what $k$ is required to satisfy Criterion (i) with $\\varepsilon_1 = 10^{-8}$?","hu":"Ha $f(x) = x^8$ és $p_k = 1/k$, milyen $k$ kell az (i) feltétel teljesítéséhez, $\\varepsilon_1 = 10^{-8}$ mellett?"},"a":{"en":"$k \\approx 10,000$ (where $\\frac{1}{k(k-1)} < 10^{-8}$).","hu":"$k \\approx 10\\,000$ (ahol $\\frac{1}{k(k-1)} < 10^{-8}$)."}},
  {"q":{"en":"If $f(x) = x^8$ and $p_k = 1/k$, what $k$ is required to satisfy Criterion (ii) with $\\varepsilon_2 = 10^{-8}$?","hu":"Ha $f(x) = x^8$ és $p_k = 1/k$, milyen $k$ kell a (ii) feltétel teljesítéséhez, $\\varepsilon_2 = 10^{-8}$ mellett?"},"a":{"en":"$k \\approx 10^8$ (where $\\frac{1}{k-1} < 10^{-8}$).","hu":"$k \\approx 10^8$ (ahol $\\frac{1}{k-1} < 10^{-8}$)."}},
  {"q":{"en":"What does a high number of iterations usually indicate in a numerical program?","hu":"Mit jelez általában a magas iterációszám egy numerikus programban?"},"a":{"en":"A likely situation where the sequence is not convergent or convergence is extremely slow.","hu":"Valószínűleg azt, hogy a sorozat nem konvergens, vagy a konvergencia rendkívül lassú."}},
  {"q":{"en":"True or False: If Criterion (iii) is satisfied, the sequence term is guaranteed to be close to a root.","hu":"Igaz vagy hamis: Ha a (iii) feltétel teljesül, a sorozat tagja garantáltan közel van egy gyökhöz."},"a":{"en":"False, it is a heuristic assumption that may fail in cases like function 'valleys'.","hu":"Hamis; ez heurisztikus feltevés, amely olyan esetekben, mint a függvény „völgyei”, megbukhat."}},
  {"q":{"en":"The formula $\\frac{|p_k - p_{k-1}|}{|p_k|}$ is the numerical approximation of which error type?","hu":"A $\\frac{|p_k - p_{k-1}|}{|p_k|}$ képlet melyik hibatípus numerikus közelítése?"},"a":{"en":"Relative error.","hu":"A relatív hibáé."}},
  {"q":{"en":"The formula $|p_k - p_{k-1}|$ is the numerical approximation of which error type?","hu":"A $|p_k - p_{k-1}|$ képlet melyik hibatípus numerikus közelítése?"},"a":{"en":"Absolute error.","hu":"Az abszolút hibáé."}},
  {"q":{"en":"In Criterion (ii), what role does $p_{k-1}$ play?","hu":"A (ii) feltételben milyen szerepet játszik $p_{k-1}$?"},"a":{"en":"It is used in the formula to approximate the limit $p$ within the numerator's error estimate.","hu":"A képletben a $p$ határérték közelítésére szolgál a számláló hibabecslésén belül."}},
  {"q":{"en":"Which criterion specifically checks if the current guess $p_k$ 'solves' the equation $f(x) = 0$?","hu":"Melyik feltétel ellenőrzi kifejezetten, hogy az aktuális $p_k$ becslés „megoldja-e” az $f(x) = 0$ egyenletet?"},"a":{"en":"Criterion (iii).","hu":"A (iii) feltétel."}},
  {"q":{"en":"How do we mathematically represent the tolerance for function value proximity?","hu":"Hogyan jelöljük matematikailag a függvényérték-közelség tűréshatárát?"},"a":{"en":"$\\varepsilon_3$","hu":"$\\varepsilon_3$"}},
  {"q":{"en":"What does 'large enough' $k$ mean in the context of stopping criteria?","hu":"Mit jelent az „elég nagy” $k$ a leállási feltételek kontextusában?"},"a":{"en":"The number of iterations at which the chosen criterion (or combination of criteria) is finally satisfied.","hu":"Azt az iterációszámot, amelynél a választott feltétel (vagy feltételkombináció) végül teljesül."}}
]
