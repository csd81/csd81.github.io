**„2.1 Fixpont-iteráció és numerikus konvergenciamódszerek”** 

## 1. A fixpont-iteráció áttekintése

* **Definíció**: A fixpont-iteráció egy egylépéses rekurzív sorozat, amelyet a $p_{k+1} = g(p_k)$ képlet határoz meg $k \geq 0$ esetén, egy $p_0 \in I$ kezdőértékből kiindulva. Ez az általános $m$-lépéses iteráció egy speciális esete, amely alapesetben $m$ darab korábbi tagtól függ ($p_k, p_{k-1}, \ldots, p_{k-m+1}$).
* **Fixpont**: Egy $p$ számot a $g$ függvény fixpontjának nevezünk, ha teljesíti a $g(p) = p$ egyenletet.
* **Geometriai ábrázolás**: Az iteráció vizuálisan az úgynevezett **lépcsős diagrammal** (vagy Cobweb-/pókháló-diagrammal) ábrázolható. Ez a geometriai értelmezés a sorozat egymást követő $(p_k, p_{k+1})$ pontjait vetíti az $y = g(x)$ függvénygörbe és az $y = x$ egyenes közé.
* **Alapvető konvergencia-tulajdonság**: Ha egy fixpont-iterációs sorozat generáló függvénye folytonos és a sorozat konvergens ($p_k \to p$), akkor a $p$ határérték szükségképpen a fixpont-egyenlet megoldása (azaz $p = g(p)$). Ugyanakkor az iterációk nem mindig konvergensek: a függvény tulajdonságaitól függően tarthatnak végtelenbe vagy oszcillálhatnak is.


## 2. Létezés, egyértelműség és hibabecslések

A szöveg szigorú feltételeket szab meg arra vonatkozóan, hogy mikor létezik egyértelmű fixpont, és hogyan viselkedik az iteráció:

* **Létezési és egyértelműségi tétel**: Ha $g: [a,b] \to [a,b]$ folytonos, akkor létezik legalább egy fixpontja az $[a,b]$ intervallumon. Ha ezenfelül $g$ differenciálható $(a,b)$-n, és a deriváltja korlátos egy $0 \leq c < 1$ konstanssal (azaz $|g'(x)| \leq c$), akkor a fixpont egyértelmű.
* **Fixponttétel (Konvergencia és hibakorlátok)**: A fent említett egyértelműségi feltételek mellett a $p_k$ sorozat tetszőleges $p_0 \in [a,b]$ kezdőérték esetén konvergál az egyértelmű $p$ fixponthoz. A szöveg két elsődleges hibabecslési képletet ad meg:
1. A pontos gyöktől való kezdeti távolságon alapuló korlát:

$$|p_k - p| \leq c^k |p_0 - p| \tag{2.1}$$


2. Egy olyan korlát, amely közvetlenül kiszámítható a sorozat első két tagjának ismeretében:

$$|p_k - p| \leq \frac{c^k}{1 - c}|p_1 - p_0| \tag{2.2}$$







## 3. A kontrakciós elv és a Lipschitz-tulajdonság

* **Lipschitz-tulajdonság**: A $g$ függvény Lipschitz-tulajdonságú (vagy Lipschitz-folytonos) az $I$ intervallumon, ha létezik olyan $c \geq 0$ konstans, hogy $|g(x) - g(y)| \leq c|x - y|$ teljesül minden $x, y \in I$ esetén. A folytonos differenciálhatóságból ($g \in C^1[a,b]$) következik a Lipschitz-tulajdonság.
* **Kontrakció**: Ha a Lipschitz-konstansra teljesül a $0 \leq c < 1$ egyenlőtlenség, akkor a függvényt **kontrakciónak** nevezzük.
* **Kontrakciós elv**: Ez a fixponttétel általánosítása, amely kimondja, hogy ha egy $g: [a,b] \to [a,b]$ folytonos függvény kontrakció, akkor a sorozat az egyértelmű fixponthoz konvergál, és a (2.1), valamint a (2.2) hibabecslések szintén teljesülnek.



## 4. Lokális és globális konvergencia

* **Globális konvergencia**: Egy iterációs módszert globálisan konvergensnek nevezünk, ha tetszőlegesen megválasztott kezdeti érték mellett is konvergál a $p$ fixponthoz.
* **Lokális konvergencia**: Az iteráció lokálisan konvergál, ha a konvergenciához a kezdőértéke(ke)t a fixpont egy kis környezetéből, a $(p - \delta, p + \delta)$ intervallumból kell kiválasztani.
* **Lokális fixponttétel**: Ha $g \in C^1[a,b]$ és specifikusan a $p$ fixpontban a derivált abszolút értéke kisebb, mint 1 ($|g'(p)| < 1$), akkor a lokális konvergencia garantált.
* **Geometriai viselkedés**: A fixpont környezetében a $g'(p)$ derivált értéke határozza meg a konvergencia vagy divergencia jellegét:
* $0 < g'(p) < 1$: Monoton konvergencia.
* $-1 < g'(p) < 0$: Oszcilláló (spirális) konvergencia.
* $1 < g'(p)$: Monoton divergencia (távolodás $p$-től).
* $g'(p) < -1$: Oszcilláló divergencia.