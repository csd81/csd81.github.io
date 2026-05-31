// Auto-generated learning aids for '2.2 (Fixed-Point Iteration).
// Glossary bilingual; flashcards from 02_01 FPI/flashcards.csv (EN).
import type { GlossaryEntry, Flashcard } from '../components/widgets/decks'

export const FPI_GLOSSARY: GlossaryEntry[] = [
  {
    "term": {
      "en": "$m$-step iteration ($m$-order recursion)",
      "hu": "$m$-lépéses iteráció ($m$-edrendű rekurzió)"
    },
    "def": {
      "en": "A recursion $p_{k+1}=h(p_k,p_{k-1},\\dots,p_{k-m+1})$ that computes each term from the $m$ preceding ones; it needs $m$ initial values $p_0,\\dots,p_{m-1}$.",
      "hu": "A $p_{k+1}=h(p_k,p_{k-1},\\dots,p_{k-m+1})$ rekurzió, amely minden tagot az előző $m$ tagból számol; $m$ kezdőérték kell hozzá: $p_0,\\dots,p_{m-1}$."
    }
  },
  {
    "term": {
      "en": "Fixed-point iteration",
      "hu": "Fixpont iteráció"
    },
    "def": {
      "en": "The one-step recursion $p_{k+1}=g(p_k)$ from a starting value $p_0\\in I$, with $g\\colon I\\to\\mathbb{R}$.",
      "hu": "Az egylépéses $p_{k+1}=g(p_k)$ rekurzió a $p_0\\in I$ kezdőértékből, ahol $g\\colon I\\to\\mathbb{R}$."
    }
  },
  {
    "term": {
      "en": "Fixed point",
      "hu": "Fixpont"
    },
    "def": {
      "en": "A value $p$ with $g(p)=p$ — geometrically the intersection of $y=g(x)$ and $y=x$. The limit of a convergent fixed-point iteration of a continuous $g$ (Thm 2.11).",
      "hu": "Olyan $p$ érték, amelyre $g(p)=p$ — geometriailag az $y=g(x)$ és $y=x$ metszéspontja. Folytonos $g$ konvergens fixpont iterációjának határértéke (2.11. tétel)."
    }
  },
  {
    "term": {
      "en": "Stair-step (cobweb) diagram",
      "hu": "Lépcsős (pókháló) diagram"
    },
    "def": {
      "en": "A plot of $y=g(x)$ and $y=x$ showing the iteration's path: vertical to the curve, horizontal to the diagonal, repeat. A convergent iteration spirals or steps onto the fixed point.",
      "hu": "Az $y=g(x)$ és $y=x$ ábrája, amely az iteráció útját mutatja: függőlegesen a görbéhez, vízszintesen az átlóhoz, ismételve. Konvergens iteráció a fixpontra spirálozik vagy lépeget."
    }
  },
  {
    "term": {
      "en": "Lipschitz continuity / Lipschitz constant",
      "hu": "Lipschitz-folytonosság / Lipschitz-konstans"
    },
    "def": {
      "en": "$g$ is Lipschitz continuous on $I$ if $|g(x)-g(y)|\\le c\\,|x-y|$ for all $x,y\\in I$; the smallest such $c\\ge 0$ is the Lipschitz constant. For $g\\in C^1[a,b]$ one may take $c=\\max|g'|$.",
      "hu": "$g$ Lipschitz-folytonos $I$-n, ha $|g(x)-g(y)|\\le c\\,|x-y|$ minden $x,y\\in I$-re; a legkisebb ilyen $c\\ge 0$ a Lipschitz-konstans. $g\\in C^1[a,b]$ esetén $c=\\max|g'|$ választható."
    }
  },
  {
    "term": {
      "en": "Contraction",
      "hu": "Kontrakció"
    },
    "def": {
      "en": "A function that is Lipschitz continuous with constant $0\\le c<1$. By the contraction principle (Thm 2.14) it has a unique fixed point reached from any starting value.",
      "hu": "Olyan függvény, amely $0\\le c<1$ konstanssal Lipschitz-folytonos. A kontrakciós elv (2.14. tétel) szerint egyetlen fixpontja van, amelyet bármely kezdőértékből elér."
    }
  },
  {
    "term": {
      "en": "A priori / a posteriori error bound",
      "hu": "A priori / a posteriori hibakorlát"
    },
    "def": {
      "en": "For a contraction: $|p_k-p|\\le c^k|p_0-p|$ (a priori, Eq. 2.1) and $|p_k-p|\\le \\dfrac{c^k}{1-c}|p_1-p_0|$ (a posteriori, Eq. 2.2) — the latter is computable from the first step.",
      "hu": "Kontrakcióra: $|p_k-p|\\le c^k|p_0-p|$ (a priori, 2.1) és $|p_k-p|\\le \\dfrac{c^k}{1-c}|p_1-p_0|$ (a posteriori, 2.2) — az utóbbi az első lépésből kiszámolható."
    }
  },
  {
    "term": {
      "en": "Local convergence",
      "hu": "Lokális konvergencia"
    },
    "def": {
      "en": "The iteration converges to $p$ only for starting values within some $\\delta$ of $p$. Guaranteed when $g\\in C^1$ and $|g'(p)|<1$ (Thm 2.15).",
      "hu": "Az iteráció csak a $p$-től $\\delta$-nál közelebbi kezdőértékekre konvergál $p$-hez. Garantált, ha $g\\in C^1$ és $|g'(p)|<1$ (2.15. tétel)."
    }
  },
  {
    "term": {
      "en": "Global convergence",
      "hu": "Globális konvergencia"
    },
    "def": {
      "en": "The iteration converges to the fixed point from every admissible starting value, as the contraction principle guarantees on $[a,b]$.",
      "hu": "Az iteráció minden megengedett kezdőértékből a fixponthoz konvergál, ahogy a kontrakciós elv garantálja $[a,b]$-n."
    }
  }
]

export const FPI_FLASHCARDS: Flashcard[] = [
  {"q":{"en":"How is an $m$-step iteration defined in numerical analysis?","hu":"Hogyan definiáljuk az $m$-lépéses iterációt a numerikus analízisben?"},"a":{"en":"$p_{k+1} = h(p_k, p_{k-1}, \\ldots, p_{k-m+1})$ for $k \\geq m-1$.","hu":"$p_{k+1} = h(p_k, p_{k-1}, \\ldots, p_{k-m+1})$ ha $k \\geq m-1$."}},
  {"q":{"en":"How many initial values are required to uniquely define an $m$-step iteration sequence?","hu":"Hány kezdőérték kell egy $m$-lépéses iterációs sorozat egyértelmű megadásához?"},"a":{"en":"$m$ initial values ($p_0, p_1, \\dots, p_{m-1}$).","hu":"$m$ kezdőérték ($p_0, p_1, \\dots, p_{m-1}$)."}},
  {"q":{"en":"What is the specific name for a one-step iteration where $p_{k+1} = g(p_k)$?","hu":"Mi a konkrét neve egy egylépéses iterációnak, ahol $p_{k+1} = g(p_k)$?"},"a":{"en":"Fixed-point iteration.","hu":"Fixpont-iteráció."}},
  {"q":{"en":"What equation defines a fixed point $p$ of a function $g$?","hu":"Melyik egyenlet definiálja egy $g$ függvény $p$ fixpontját?"},"a":{"en":"$g(p) = p$.","hu":"$g(p) = p$."}},
  {"q":{"en":"In a graphical representation of fixed-point iteration, the fixed point is the intersection of $y = g(x)$ and which line?","hu":"A fixpont-iteráció grafikus ábrázolásában a fixpont az $y = g(x)$ és melyik egyenes metszéspontja?"},"a":{"en":"The line $y = x$.","hu":"Az $y = x$ egyenes."}},
  {"q":{"en":"According to Theorem 2.11, if the sequence $p_{k+1} = g(p_k)$ converges to $p$, what property must $g$ have to guarantee $p = g(p)$?","hu":"A 2.11. tétel szerint, ha a $p_{k+1} = g(p_k)$ sorozat $p$-hez konvergál, milyen tulajdonsággal kell $g$-nek rendelkeznie a $p = g(p)$ garantálásához?"},"a":{"en":"The function $g$ must be continuous.","hu":"A $g$ függvénynek folytonosnak kell lennie."}},
  {"q":{"en":"If $g(x) = 2x$ and $p_0 = 1$, to what value does the fixed-point iteration sequence converge?","hu":"Ha $g(x) = 2x$ és $p_0 = 1$, milyen értékhez konvergál a fixpont-iterációs sorozat?"},"a":{"en":"Infinity ($\\infty$).","hu":"A végtelenhez ($\\infty$)."}},
  {"q":{"en":"Why does the fixed-point iteration for $g(x) = -x$ with $p_0 = 1$ fail to converge?","hu":"Miért nem konvergál a $g(x) = -x$ fixpont-iterációja $p_0 = 1$ mellett?"},"a":{"en":"The sequence oscillates between $1$ and $-1$.","hu":"A sorozat $1$ és $-1$ között oszcillál."}},
  {"q":{"en":"What does the notation $C[a,b]$ represent in numerical analysis?","hu":"Mit jelöl a $C[a,b]$ jelölés a numerikus analízisben?"},"a":{"en":"The set of all continuous functions defined on the interval $[a,b]$.","hu":"Az $[a,b]$ intervallumon értelmezett összes folytonos függvény halmazát."}},
  {"q":{"en":"What does the notation $C^1[a,b]$ represent?","hu":"Mit jelöl a $C^1[a,b]$ jelölés?"},"a":{"en":"The set of all continuously differentiable functions on the interval $[a,b]$.","hu":"Az $[a,b]$ intervallumon folytonosan differenciálható összes függvény halmazát."}},
  {"q":{"en":"According to Lagrange's Mean Value Theorem, if $f \\in C^1[a,b]$, there exists a $\\xi \\in (a,b)$ such that $f(b) - f(a) = \\dots$?","hu":"A Lagrange-középértéktétel szerint, ha $f \\in C^1[a,b]$, létezik $\\xi \\in (a,b)$, amelyre $f(b) - f(a) = \\dots$?"},"a":{"en":"$f'(\\xi)(b - a)$.","hu":"$f'(\\xi)(b - a)$."}},
  {"q":{"en":"What condition on the interval mapping of a continuous function $g$ ensures the existence of at least one fixed point?","hu":"Egy $g$ folytonos függvény intervallum-leképezésére milyen feltétel biztosítja legalább egy fixpont létezését?"},"a":{"en":"$g$ must map the interval $[a,b]$ into itself ($g: [a,b] \\to [a,b]$).","hu":"$g$-nek az $[a,b]$ intervallumot önmagába kell leképeznie ($g: [a,b] \\to [a,b]$)."}},
  {"q":{"en":"If $g$ is differentiable on $(a,b)$ and $|g'(x)| \\leq c < 1$, what can be said about the number of fixed points in $[a,b]$?","hu":"Ha $g$ differenciálható $(a,b)$-n és $|g'(x)| \\leq c < 1$, mit mondhatunk a fixpontok számáról $[a,b]$-ben?"},"a":{"en":"The fixed point is unique.","hu":"A fixpont egyértelmű."}},
  {"q":{"en":"In the proof of the existence of a fixed point for $g: [a,b] \\to [a,b]$, which calculus theorem is applied to $f(x) = g(x) - x$?","hu":"A $g: [a,b] \\to [a,b]$ fixpontjának létezésére vonatkozó bizonyításban melyik analízistételt alkalmazzuk az $f(x) = g(x) - x$-re?"},"a":{"en":"The Intermediate Value Theorem.","hu":"A közbülső érték tételét."}},
  {"q":{"en":"What is the primary error estimate (formula 1) for the fixed-point iteration relative to the initial error $|p_0 - p|$?","hu":"Mi a fixpont-iteráció elsődleges hibabecslése (1. képlet) a kezdeti $|p_0 - p|$ hibához viszonyítva?"},"a":{"en":"$|p_k - p| \\leq c^k |p_0 - p|$.","hu":"$|p_k - p| \\leq c^k |p_0 - p|$."}},
  {"q":{"en":"What is the error estimate (formula 2) for $|p_k - p|$ that only uses the first two terms of the sequence ($p_0, p_1$)?","hu":"Mi az a hibabecslés (2. képlet) a $|p_k - p|$-re, amely csak a sorozat első két tagját ($p_0, p_1$) használja?"},"a":{"en":"$|p_k - p| \\leq \\frac{c^k}{1 - c} |p_1 - p_0|$.","hu":"$|p_k - p| \\leq \\frac{c^k}{1 - c} |p_1 - p_0|$."}},
  {"q":{"en":"The constant $c$ in $|g(x) - g(y)| \\leq c|x - y|$ is known as the _____.","hu":"A $|g(x) - g(y)| \\leq c|x - y|$ kifejezésben a $c$ konstans neve a _____."},"a":{"en":"Lipschitz constant.","hu":"Lipschitz-konstans."}},
  {"q":{"en":"A function $g$ is called a _____ if it is Lipschitz continuous with a constant $0 \\leq c < 1$.","hu":"Egy $g$ függvényt _____-nak nevezünk, ha Lipschitz-folytonos egy $0 \\leq c < 1$ konstanssal."},"a":{"en":"Contraction.","hu":"Kontrakciónak."}},
  {"q":{"en":"If $g \\in C^1[a,b]$, how is the Lipschitz constant $c$ typically calculated?","hu":"Ha $g \\in C^1[a,b]$, hogyan számoljuk jellemzően a $c$ Lipschitz-konstanst?"},"a":{"en":"$c = \\max \\{ |g'(x)| : x \\in [a,b] \\}$.","hu":"$c = \\max \\{ |g'(x)| : x \\in [a,b] \\}$."}},
  {"q":{"en":"Is it possible for a function to be Lipschitz continuous but not differentiable? Provide the example from the text.","hu":"Lehet-e egy függvény Lipschitz-folytonos, de nem differenciálható? Add meg a szövegbeli példát."},"a":{"en":"Yes; $g(x) = |x|$ is Lipschitz continuous but not differentiable at the origin.","hu":"Igen; a $g(x) = |x|$ Lipschitz-folytonos, de az origóban nem differenciálható."}},
  {"q":{"en":"What is the difference between global and local convergence of an iterative method?","hu":"Mi a különbség egy iteratív módszer globális és lokális konvergenciája között?"},"a":{"en":"Global convergence occurs for any initial value, while local convergence requires the initial value to be within a distance $\\delta$ of the solution.","hu":"A globális konvergencia bármely kezdőértékre teljesül, míg a lokális megköveteli, hogy a kezdőérték a megoldástól $\\delta$ távolságon belül legyen."}},
  {"q":{"en":"What condition on the derivative of $g$ at fixed point $p$ ensures local convergence?","hu":"Milyen feltétel a $g$ deriváltjára a $p$ fixpontban biztosítja a lokális konvergenciát?"},"a":{"en":"$|g'(p)| < 1$.","hu":"$|g'(p)| < 1$."}},
  {"q":{"en":"If $0 < g'(p) < 1$, how does the fixed-point iteration sequence approach the fixed point $p$?","hu":"Ha $0 < g'(p) < 1$, hogyan közelíti a fixpont-iterációs sorozat a $p$ fixpontot?"},"a":{"en":"Monotonically (the stair-step diagram approaches from one side).","hu":"Monoton módon (a lépcsős diagram az egyik oldalról közelít)."}},
  {"q":{"en":"If $-1 < g'(p) < 0$, what is the geometric characteristic of the Cobweb diagram?","hu":"Ha $-1 < g'(p) < 0$, mi a pókhálódiagram geometriai jellemzője?"},"a":{"en":"It spirals toward the fixed point.","hu":"A fixpont felé spirálozik."}},
  {"q":{"en":"What happens to the fixed-point iteration if $|g'(p)| > 1$ and $p_0 \\neq p$?","hu":"Mi történik a fixpont-iterációval, ha $|g'(p)| > 1$ és $p_0 \\neq p$?"},"a":{"en":"The sequence diverges (moves away from the fixed point).","hu":"A sorozat divergál (eltávolodik a fixponttól)."}},
  {"q":{"en":"How is a 'stair-step diagram' constructed starting from $(p_0, 0)$?","hu":"Hogyan szerkesztjük meg a „lépcsős diagramot” a $(p_0, 0)$-ból kiindulva?"},"a":{"en":"Draw a vertical line to $(p_0, g(p_0))$, then a horizontal line to the line $y=x$ at $(p_1, p_1)$.","hu":"Húzz függőleges vonalat a $(p_0, g(p_0))$-ig, majd vízszintes vonalat az $y=x$ egyeneshez a $(p_1, p_1)$-ben."}},
  {"q":{"en":"The fixed-point theorem is often referred to in broader mathematical analysis as the _____ Principle.","hu":"A fixponttételt a tágabb matematikai analízisben gyakran _____ elvként emlegetik."},"a":{"en":"Contraction Mapping (or Contraction Principle).","hu":"Kontrakciós leképezés (kontrakciós)."}},
  {"q":{"en":"Under the conditions of Theorem 2.15 ($|g'(p)| < 1$), why is there a $\\delta > 0$ such that the function is a contraction on $[p - \\delta, p + \\delta]$?","hu":"A 2.15. tétel feltételei mellett ($|g'(p)| < 1$) miért van olyan $\\delta > 0$, hogy a függvény kontrakció a $[p - \\delta, p + \\delta]$-n?"},"a":{"en":"Because the derivative $g'$ is continuous.","hu":"Mert a $g'$ derivált folytonos."}},
  {"q":{"en":"In the proof for the second error estimate, $|p_k - p_m| \\leq \\frac{c^k}{1-c} |p_1 - p_0|$, what happens to $m$ to derive the final formula?","hu":"A második hibabecslés bizonyításában, $|p_k - p_m| \\leq \\frac{c^k}{1-c} |p_1 - p_0|$, mi történik $m$-mel a végső képlet levezetéséhez?"},"a":{"en":"$m$ tends to infinity ($\\infty$).","hu":"$m$ a végtelenhez tart ($\\infty$)."}},
  {"q":{"en":"If a sequence $p_k$ is generated by $p_{k+1} = g(p_k)$, what does $|p_k - p|$ represent?","hu":"Ha egy $p_k$ sorozatot a $p_{k+1} = g(p_k)$ generál, mit jelent $|p_k - p|$?"},"a":{"en":"The error of the $k$-th approximation.","hu":"A $k$-adik közelítés hibáját."}},
  {"q":{"en":"Why is the second error estimate $|p_k - p| \\leq \\frac{c^k}{1-c} |p_1 - p_0|$ often more useful in practice than the first?","hu":"Miért hasznosabb a gyakorlatban gyakran a második hibabecslés $|p_k - p| \\leq \\frac{c^k}{1-c} |p_1 - p_0|$ az elsőnél?"},"a":{"en":"It can be evaluated without knowing the exact fixed point $p$.","hu":"Kiértékelhető a pontos $p$ fixpont ismerete nélkül."}},
  {"q":{"en":"What is a 'Cobweb diagram'?","hu":"Mi az a „pókhálódiagram”?"},"a":{"en":"A visual tool used to see the behavior of a fixed-point iteration by plotting $y=g(x)$ and $y=x$.","hu":"Vizuális eszköz a fixpont-iteráció viselkedésének megfigyelésére az $y=g(x)$ és $y=x$ ábrázolásával."}},
  {"q":{"en":"If $g'(p) < -1$, how does the sequence behave near the fixed point?","hu":"Ha $g'(p) < -1$, hogyan viselkedik a sorozat a fixpont közelében?"},"a":{"en":"It oscillates and diverges (moves away spirally).","hu":"Oszcillál és divergál (spirálisan távolodik)."}},
  {"q":{"en":"If $g'(p) > 1$, how does the sequence behave near the fixed point?","hu":"Ha $g'(p) > 1$, hogyan viselkedik a sorozat a fixpont közelében?"},"a":{"en":"It diverges monotonically.","hu":"Monoton módon divergál."}},
  {"q":{"en":"For the function $g(x) = \\sqrt{1 + x^2}$, the derivative $|g'(x)|$ is always less than $1$, yet it has no fixed point. Which condition of Theorem 2.12 does it violate?","hu":"A $g(x) = \\sqrt{1 + x^2}$ függvénynél a $|g'(x)|$ derivált mindig kisebb $1$-nél, mégsincs fixpontja. A 2.12. tétel melyik feltételét sérti?"},"a":{"en":"It does not map a closed, bounded interval $[a,b]$ into itself.","hu":"Nem képez le egy zárt, korlátos $[a,b]$ intervallumot önmagába."}},
  {"q":{"en":"What is the relationship between Lipschitz continuity and standard continuity?","hu":"Mi a kapcsolat a Lipschitz-folytonosság és a szokásos folytonosság között?"},"a":{"en":"Lipschitz continuity implies standard continuity.","hu":"A Lipschitz-folytonosság maga után vonja a szokásos folytonosságot."}},
  {"q":{"en":"In Theorem 2.13, why does $|p_k - p| \\leq c^k |p_0 - p|$ imply convergence if $c < 1$?","hu":"A 2.13. tételben miért jelent konvergenciát a $|p_k - p| \\leq c^k |p_0 - p|$, ha $c < 1$?"},"a":{"en":"As $k \\to \\infty$, $c^k \\to 0$, forcing the error to zero.","hu":"Ahogy $k \\to \\infty$, $c^k \\to 0$, ami a hibát nullára kényszeríti."}},
  {"q":{"en":"In the proof of uniqueness, the difference $|p - q|$ is shown to be $\\leq c|p - q|$. Why does $c < 1$ force $p = q$?","hu":"Az egyértelműség bizonyításában a $|p - q|$ különbségre $\\leq c|p - q|$ adódik. Miért kényszeríti $c < 1$ a $p = q$-t?"},"a":{"en":"Because a positive distance cannot be less than or equal to a smaller fraction of itself.","hu":"Mert egy pozitív távolság nem lehet kisebb-egyenlő önmaga egy kisebb hányadánál."}},
  {"q":{"en":"What property of $g$ on the interval $[a,b]$ ensures that the sequence $p_k$ stays within that interval?","hu":"A $g$ melyik tulajdonsága $[a,b]$-n biztosítja, hogy a $p_k$ sorozat azon az intervallumon belül marad?"},"a":{"en":"The property that $g$ maps $[a,b]$ into $[a,b]$.","hu":"Az a tulajdonság, hogy $g$ az $[a,b]$-t $[a,b]$-be képezi."}},
  {"q":{"en":"Term: $n$-step iteration","hu":"Fogalom: $n$-lépéses iteráció"},"a":{"en":"Definition: A recursion where each new term is determined by the $n$ preceding terms. Example: $p_{k+1} = h(p_k, p_{k-1})$.","hu":"Definíció: Olyan rekurzió, ahol minden új tagot az előző $n$ tag határoz meg. Példa: $p_{k+1} = h(p_k, p_{k-1})$."}},
  {"q":{"en":"What algebraic step is usually the first in solving $f(x) = 0$ via fixed-point iteration?","hu":"Mi általában az első algebrai lépés az $f(x) = 0$ fixpont-iterációval való megoldásában?"},"a":{"en":"Rewriting the equation into the form $x = g(x)$.","hu":"Az egyenlet átírása $x = g(x)$ alakra."}},
  {"q":{"en":"What mathematical tool is used to prove $|g(p_{k-1}) - g(p)| \\leq c|p_{k-1} - p|$ in the Fixed-Point Theorem?","hu":"Milyen matematikai eszközzel bizonyítjuk a $|g(p_{k-1}) - g(p)| \\leq c|p_{k-1} - p|$-t a fixponttételben?"},"a":{"en":"Lagrange's Mean Value Theorem.","hu":"A Lagrange-féle középértéktétellel."}},
  {"q":{"en":"True or False: If a fixed-point iteration converges, the limit must be a fixed point of $g$, provided $g$ is continuous.","hu":"Igaz vagy hamis: Ha egy fixpont-iteráció konvergál, a határérték $g$ fixpontja kell legyen, feltéve, hogy $g$ folytonos."},"a":{"en":"True.","hu":"Igaz."}},
  {"q":{"en":"How does the speed of convergence in fixed-point iteration relate to the Lipschitz constant $c$?","hu":"Hogyan függ össze a fixpont-iteráció konvergenciasebessége a $c$ Lipschitz-konstanssal?"},"a":{"en":"A smaller $c$ results in faster convergence.","hu":"A kisebb $c$ gyorsabb konvergenciát eredményez."}},
  {"q":{"en":"What can be inferred about $g$ if it is 'piecewise continuously differentiable'?","hu":"Mit következtethetünk $g$-ről, ha „szakaszonként folytonosan differenciálható”?"},"a":{"en":"It is Lipschitz continuous.","hu":"Lipschitz-folytonos."}},
  {"q":{"en":"Formula: $|g'(x)| \\leq c$ for $c \\in [0, 1)$","hu":"Képlet: $|g'(x)| \\leq c$ ahol $c \\in [0, 1)$"},"a":{"en":"Purpose: This is the sufficient condition for the uniqueness of a fixed point and the convergence of the iteration.","hu":"Cél: Ez az elégséges feltétel a fixpont egyértelműségéhez és az iteráció konvergenciájához."}},
  {"q":{"en":"What is the 'domain' requirement for $g$ in the local convergence theorem (Theorem 2.15)?","hu":"Mi a $g$-re vonatkozó „értelmezési tartomány” követelmény a lokális konvergenciatételben (2.15. tétel)?"},"a":{"en":"$g \\in C^1[a,b]$ and the fixed point $p$ must be in the open interval $(a,b)$.","hu":"$g \\in C^1[a,b]$, és a $p$ fixpontnak az $(a,b)$ nyílt intervallumban kell lennie."}},
  {"q":{"en":"If the fixed-point iteration sequence is $p_k = 2^k$, why is the limit not considered a fixed point in the standard interval sense?","hu":"Ha a fixpont-iterációs sorozat $p_k = 2^k$, miért nem tekintjük a határértéket fixpontnak a szokásos intervallum-értelemben?"},"a":{"en":"Because the limit is infinite, and fixed points are typically sought within finite intervals $[a,b]$.","hu":"Mert a határérték végtelen, a fixpontokat pedig jellemzően véges $[a,b]$ intervallumokon belül keressük."}},
  {"q":{"en":"Concept: Global Convergence","hu":"Fogalom: Globális konvergencia"},"a":{"en":"Definition: An iterative method where the sequence converges to the solution regardless of the initial starting point $p_0$.","hu":"Definíció: Olyan iteratív módszer, ahol a sorozat a megoldáshoz konvergál a $p_0$ kezdőponttól függetlenül."}},
  {"q":{"en":"In the context of the Mean Value Theorem, if $f(x) = x^2$ on $[0, 2]$, for what value of $\\xi$ does $f'(\\xi) = \\frac{f(2)-f(0)}{2-0}$?","hu":"A középértéktétel kontextusában, ha $f(x) = x^2$ a $[0, 2]$-n, milyen $\\xi$ értékre teljesül $f'(\\xi) = \\frac{f(2)-f(0)}{2-0}$?"},"a":{"en":"$\\xi = 1$.","hu":"$\\xi = 1$."}},
  {"q":{"en":"What is the geometric meaning of $f'(\\xi) = \\frac{f(b)-f(a)}{b-a}$?","hu":"Mi az $f'(\\xi) = \\frac{f(b)-f(a)}{b-a}$ geometriai jelentése?"},"a":{"en":"The tangent line at $\\xi$ is parallel to the secant line passing through $(a, f(a))$ and $(b, f(b))$.","hu":"A $\\xi$-beli érintő párhuzamos az $(a, f(a))$ és $(b, f(b))$ pontokon átmenő szelővel."}},
  {"q":{"en":"What is the primary visual difference between the convergence of $g'(p) = 0.5$ and $g'(p) = -0.5$?","hu":"Mi az elsődleges vizuális különbség a $g'(p) = 0.5$ és $g'(p) = -0.5$ konvergenciája között?"},"a":{"en":"The first is a 'step' approach (monotone), the second is a 'spiral' approach (oscillating).","hu":"Az első „lépcsős” közelítés (monoton), a második „spirál” közelítés (oszcilláló)."}},
  {"q":{"en":"In the sequence $p_{k+1} = -\\frac{1}{8}p_k^3 + p_k + 1$ with $p_0 = 0.4$, to what value does the sequence converge?","hu":"A $p_{k+1} = -\\frac{1}{8}p_k^3 + p_k + 1$ sorozatban $p_0 = 0.4$ mellett milyen értékhez konvergál a sorozat?"},"a":{"en":"$2$.","hu":"$2$-höz."}},
  {"q":{"en":"How does one identify a potential fixed-point function $g(x)$ for the equation $x^3 + x - 1 = 0$?","hu":"Hogyan azonosítunk egy lehetséges $g(x)$ fixpontfüggvényt az $x^3 + x - 1 = 0$ egyenlethez?"},"a":{"en":"By isolating $x$, e.g., $x = 1 - x^3$ or $x = \\sqrt[3]{1 - x}$.","hu":"$x$ kifejezésével, pl. $x = 1 - x^3$ vagy $x = \\sqrt[3]{1 - x}$."}},
  {"q":{"en":"Which error estimate is 'a priori', meaning it can be calculated before the iteration starts (assuming $p$ is roughly known)?","hu":"Melyik hibabecslés „a priori”, azaz az iteráció kezdete előtt kiszámítható (feltéve, hogy $p$ nagyjából ismert)?"},"a":{"en":"$|p_k - p| \\leq c^k |p_0 - p|$.","hu":"$|p_k - p| \\leq c^k |p_0 - p|$."}},
  {"q":{"en":"Which error estimate is 'a posteriori', meaning it is calculated using the actual values produced during iteration?","hu":"Melyik hibabecslés „a posteriori”, azaz az iteráció során előállt tényleges értékekkel számolt?"},"a":{"en":"$|p_k - p| \\leq \\frac{c^k}{1 - c} |p_1 - p_0|$.","hu":"$|p_k - p| \\leq \\frac{c^k}{1 - c} |p_1 - p_0|$."}},
  {"q":{"en":"Under what specific condition is the sequence $p_k = (-1)^k$ generated?","hu":"Milyen konkrét feltétel mellett áll elő a $p_k = (-1)^k$ sorozat?"},"a":{"en":"When $g(x) = -x$ and $p_0 = 1$.","hu":"Amikor $g(x) = -x$ és $p_0 = 1$."}},
  {"q":{"en":"If a function is only piecewise differentiable, can it still be a contraction?","hu":"Ha egy függvény csak szakaszonként differenciálható, lehet-e mégis kontrakció?"},"a":{"en":"Yes, provided its Lipschitz constant $c$ is less than $1$.","hu":"Igen, feltéve, hogy a $c$ Lipschitz-konstansa kisebb $1$-nél."}},
  {"q":{"en":"When using a calculator for fixed-point iteration, what determines when to stop?","hu":"Számológéppel végzett fixpont-iterációnál mi dönti el, mikor álljunk meg?"},"a":{"en":"When the desired accuracy (e.g., 4 decimal places) is reached between successive terms.","hu":"Amikor az egymást követő tagok között elérjük a kívánt pontosságot (pl. 4 tizedesjegy)."}}
]
