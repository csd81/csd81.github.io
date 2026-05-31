## 8.3. Szimplex módszer

Egy $n$-dimenziós *szimplexen* olyan $n + 1$ darab $n$-dimenziós vektor konvex burkát, azaz az

$$\{\alpha_0 \mathbf{x}^{(0)} + \cdots + \alpha_n \mathbf{x}^{(n)} : 0 \leq \alpha_i \leq 1, \quad \alpha_0 + \cdots + \alpha_n \leq 1\}$$

halmazt értjük, ahol az $\mathbf{x}_1 - \mathbf{x}_0, \mathbf{x}_2 - \mathbf{x}_0, \ldots, \mathbf{x}_n - \mathbf{x}_0$ vektorok lineárisan függetlenek. Ekkor az $\mathbf{x}^{(0)}, \ldots, \mathbf{x}^{(n)}$ vektorokat a szimplex csúcspontjainak hívjuk. Egydimenziós szimplexek a szakaszok, kétdimenziós szimplexek a háromszögek, háromdimenziós szimplexek pedig a tetraéderek.

A *szimplex módszert* $n$-változós függvények minimumhely keresésére használjuk. Vegyünk fel kiindulásként egy $n$-dimenziós szimplexet. Keressük meg, hogy melyik a „legrosszabb" csúcspont, azaz melyik csúcspontban veszi fel az $f$ függvény a legnagyobb értéket. Legyen ez például az $\mathbf{x}^{(j)}$ pont. Ekkor a szimplex legrosszabb pontját tükrözzük az $\mathbf{x}^{(j)}$ ponttal szemben fekvő oldal középpontjára, azaz a többi csúcspont

$$\mathbf{x}_c := \frac{1}{n} \sum_{\substack{i=0 \\ i \neq j}}^{n} \mathbf{x}^{(i)}$$

súlypontjára. A tükrözött pont koordinátáit az

$$\mathbf{x}_r = 2\mathbf{x}_c - \mathbf{x}^{(j)}$$

képlettel számíthatjuk ki. Ha $f(\mathbf{x}_r)$ nem kisebb, mint az előző lépésbeli legnagyobb függvényérték, $f(\mathbf{x}^{(j)})$, akkor a tükrözést nem fogadjuk el, hanem ahelyett a legjobb csúcspontból fele akkorára zsugorítjuk a szimplexet: legyen $\mathbf{x}^{(k)}$ a legjobb csúcspontja a szimplexnek, azaz ebben a legkisebb a függvényérték. Ekkor a többi csúcspontot az

$$\mathbf{x}^{(i)} \leftarrow \mathbf{x}^{(k)} + \frac{1}{2}(\mathbf{x}^{(i)} - \mathbf{x}^{(k)}), \quad i = 0, 1, \ldots, k - 1, k + 1, \ldots, n$$

képlettel számoljuk újra. Ezután a kapott (tükrözött vagy zsugorított) szimplexszel megismételjük az eljárást.

Az előbbi iterációs módszerhez többféle megállási feltételt, illetve feltétel kombinációt adhatunk meg. Például megkövetelhetjük, hogy az eljárás akkor érjen véget, ha a szimplex egy előre megadott méretnél kisebb lesz. A szimplex méretét definiálhatjuk például a leghosszabb éle hosszaként, azaz a $\max\{\|\mathbf{x}^{(i)} - \mathbf{x}^{(j)}\| : i, j = 0, \ldots, n\}$ képlettel. Egy másik lehetőség lehet az, hogy a szimplexek súlypontjaiban felvett $f_k$ függvényérték sorozatára alkalmazzuk az $|f_{k+1} - f_k| < \varepsilon$ feltételt. Egy harmadik megállási feltétel lehet a következő: Legyen $\bar{f}$ a csúcspontokban felvett függvényértékek átlaga, $\sigma$ pedig a szórása, azaz

$$\bar{f} = \frac{1}{n+1} \sum_{i=0}^{n} f(\mathbf{x}^{(i)}), \qquad \sigma = \sqrt{\frac{1}{n+1} \sum_{i=0}^{n} (f(\mathbf{x}^{(i)}) - \bar{f})^2}.$$

Ekkor addig folytatjuk az iterációt, amíg $\sigma$ kisebb nem lesz mint egy előre megadott tolerancia érték. A függvény minimumhelyét az algoritmus utolsó lépésében kapott szimplex súlypontjával szokás közelíteni.

**8.6. példa.** Keressük meg az $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ függvény minimumhelyét! Könnyen látható, hogy a függvénynek az $(1, 0.5)$ pontban van (globális) minimuma. A szimplex módszert alkalmaztuk a feladat megoldására a $(-2, 4)$, $(-1, 4)$ és $(-1.5, 5)$ kezdeti háromszögből kiindulva. Az első 25 lépésben kapott háromszögeket és a csúcspontokhoz tartozó függvényértékeket a 8.2. táblázatban soroltuk fel. A 8.4. ábrán láthatók $f$ szintvonalai és az egyes lépésekben kapott háromszögek. A 25. háromszög középpontja, $(0.9063, 0.3542)$, jó közelítése a pontos minimumhelynek. Az ebben a pontban felvett függvényérték 0.0303, ami közel van a pontos minimum értékhez, 0-hoz. $\quad\square$

---

*8.2. táblázat. Szimplex módszer, $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$*

| $k$ | $\mathbf{x}^{(k,1)}$ | $\mathbf{x}^{(k,2)}$ | $\mathbf{x}^{(k,3)}$ | $f(\mathbf{x}^{(k,1)})$ | $f(\mathbf{x}^{(k,2)})$ | $f(\mathbf{x}^{(k,3)})$ |
|----|------|------|------|--------|--------|--------|
| 0 | (−1.000, 4.000) | (−2.000, 4.000) | (−1.500, 5.000) | 57.000 | 34.000 | 72.563 |
| 1 | (−2.000, 4.000) | (−1.000, 4.000) | (−1.500, 3.000) | 34.000 | 57.000 | 26.563 |
| 2 | (−1.500, 3.000) | (−2.000, 4.000) | (−2.500, 3.000) | 26.563 | 34.000 | 24.563 |
| 3 | (−2.500, 3.000) | (−1.500, 3.000) | (−2.000, 2.000) | 24.563 | 26.563 | 18.000 |
| 4 | (−2.000, 2.000) | (−2.250, 2.500) | (−1.750, 2.500) | 18.000 | 21.129 | 18.879 |
| 5 | (−2.000, 2.000) | (−1.750, 2.500) | (−1.500, 2.000) | 18.000 | 18.879 | 15.563 |
| 6 | (−1.500, 2.000) | (−2.000, 2.000) | (−1.750, 1.500) | 15.563 | 18.000 | 15.129 |
| 7 | (−1.750, 1.500) | (−1.500, 2.000) | (−1.250, 1.500) | 15.129 | 15.563 | 12.191 |
| 8 | (−1.250, 1.500) | (−1.750, 1.500) | (−1.500, 1.000) | 12.191 | 15.129 | 12.563 |
| 9 | (−1.250, 1.500) | (−1.500, 1.000) | (−1.000, 1.000) | 12.191 | 12.563 | 9.000 |
| 10 | (−1.000, 1.000) | (−1.250, 1.500) | (−0.750, 1.500) | 9.000 | 12.191 | 12.066 |
| 11 | (−1.000, 1.000) | (−0.750, 1.500) | (−0.500, 1.000) | 9.000 | 12.066 | 7.563 |
| 12 | (−0.500, 1.000) | (−1.000, 1.000) | (−0.750, 0.500) | 7.563 | 9.000 | 6.316 |
| 13 | (−0.750, 0.500) | (−0.500, 1.000) | (−0.250, 0.500) | 6.316 | 7.563 | 4.004 |
| 14 | (−0.250, 0.500) | (−0.750, 0.500) | (−0.500, 0.000) | 4.004 | 6.316 | 4.563 |
| 15 | (−0.250, 0.500) | (−0.500, 0.000) | ( 0.000, 0.000) | 4.004 | 4.563 | 2.000 |
| 16 | ( 0.000, 0.000) | (−0.250, 0.500) | ( 0.250, 0.500) | 2.000 | 4.004 | 2.004 |
| 17 | ( 0.000, 0.000) | ( 0.250, 0.500) | ( 0.500, 0.000) | 2.000 | 2.004 | 0.563 |
| 18 | ( 0.500, 0.000) | ( 0.250, 0.000) | ( 0.375, 0.250) | 0.563 | 1.129 | 0.910 |
| 19 | ( 0.500, 0.000) | ( 0.375, 0.250) | ( 0.625, 0.250) | 0.563 | 0.910 | 0.293 |
| 20 | ( 0.625, 0.250) | ( 0.500, 0.000) | ( 0.750, 0.000) | 0.293 | 0.563 | 0.441 |
| 21 | ( 0.625, 0.250) | ( 0.750, 0.000) | ( 0.875, 0.250) | 0.293 | 0.441 | 0.102 |
| 22 | ( 0.875, 0.250) | ( 0.750, 0.250) | ( 0.813, 0.125) | 0.102 | 0.129 | 0.239 |
| 23 | ( 0.875, 0.250) | ( 0.750, 0.250) | ( 0.813, 0.375) | 0.102 | 0.129 | 0.078 |
| 24 | ( 0.813, 0.375) | ( 0.875, 0.250) | ( 0.938, 0.375) | 0.078 | 0.102 | 0.024 |
| 25 | ( 0.938, 0.375) | ( 0.875, 0.375) | ( 0.906, 0.313) | 0.024 | 0.031 | 0.056 |

A szimplex módszernek egy módosított változata a *Nelder–Mead-módszer*. Ennél a módszernél a szimplexet tükrözzük, illetve megnyújtjuk vagy zsugorítjuk aszerint, hogy milyen értékeket vesz fel a függvény a csúcspontokban. Feltesszük, hogy minden egyes lépésben a csúcspontokat úgy indexezzük, hogy a függvényértékek növekvő sorrendben legyenek, azaz $f(\mathbf{x}^{(0)}) \leq f(\mathbf{x}^{(1)}) \leq \cdots \leq f(\mathbf{x}^{(n)})$. Ekkor $\mathbf{x}^{(n)}$ a legrosszabb csúcspont, ezt tükrözzük a szemben fekvő oldal

$$\mathbf{x}_c = \frac{1}{n} \sum_{i=0}^{n-1} \mathbf{x}^{(i)}$$

súlypontjára. Legyen a tükrözött pont $\mathbf{x}_r = 2\mathbf{x}_c - \mathbf{x}^{(n)}$. Vizsgáljuk meg, hogy milyen értéket vesz fel az $f$ függvény $\mathbf{x}_r$-ben. Három esetet különböztetünk meg: 1. $f(\mathbf{x}^{(0)}) < f(\mathbf{x}_r) < f(\mathbf{x}^{(n-1)})$, 2. $f(\mathbf{x}_r) \leq f(\mathbf{x}^{(0)})$, azaz $\mathbf{x}_r$ lenne az új legjobb pont, és 3. $f(\mathbf{x}_r) \geq f(\mathbf{x}^{(n-1)})$, azaz $\mathbf{x}_r$ lenne az új legrosszabb pont.

Az 1. esetben $\mathbf{x}^{(n)}$-t $\mathbf{x}_r$-re kicseréljük (elfogadtuk a tükrözést), és folytatjuk az iterációt.

A 2. esetben először megpróbáljuk az $\mathbf{x}_r$ irányban megnyújtani egy kicsit a szimplexet, hátha még jobb pontot kapunk. Legyen

$$\mathbf{x}_e := \mathbf{x}_c + \alpha(\mathbf{x}_r - \mathbf{x}_c),$$

ahol $\alpha > 1$ egy rögzített szám (egy paraméter a módszerben). Ha ekkor $f(\mathbf{x}_e) < f(\mathbf{x}^{(0)})$ teljesül, akkor a megnyújtást sikeresnek ítéljük, és $\mathbf{x}^{(n)}$-t $\mathbf{x}_e$-re cseréljük ki. Ellenkező esetben viszont $\mathbf{x}^{(n)}$-t $\mathbf{x}_r$-re cseréljük ki, azaz tükrözünk, de nem nyújtjuk meg a szimplexet.

A 3. esetben azt gondoljuk, hogy túl messze tükröztük $\mathbf{x}^{(n)}$-t, így megpróbáljuk zsugorítani a szimplexet. Legyen

$$\mathbf{x}_z := \begin{cases} \mathbf{x}_c - \beta(\mathbf{x}_r - \mathbf{x}_c), & \text{ha } f(\mathbf{x}^{(n)}) < f(\mathbf{x}_r), \\ \mathbf{x}_c + \beta(\mathbf{x}_r - \mathbf{x}_c), & \text{ha } f(\mathbf{x}^{(n)}) \geq f(\mathbf{x}_r), \end{cases}$$

ahol $0 < \beta < 1$ egy újabb paraméter. Ha $f(\mathbf{x}_z) < \min\{f(\mathbf{x}^{(n)}), f(\mathbf{x}_r)\}$, akkor $\mathbf{x}^{(n)}$-t $\mathbf{x}_z$-vel cseréljük fel. Ellenkező esetben viszont a szimplexet a legjobb pontjából, $\mathbf{x}^{(0)}$-ból a felére zsugorítjuk össze:

$$\mathbf{x}^{(i)} \leftarrow \mathbf{x}^{(0)} + \frac{1}{2}(\mathbf{x}^{(i)} - \mathbf{x}^{(0)}), \quad i = 1, \ldots, n.$$

**8.7. példa.** A Nelder–Mead-módszert alkalmaztuk az $\alpha = 1.4$ és $\beta = 0.7$ paraméter értékekkel a 8.6. feladatban már vizsgált $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ függvény minimumhelyének keresésére. Most is a $(-2, 4)$, $(-1, 4)$ és $(-1.5, 5)$ háromszögből indultunk ki. A kapott sorozat első 17 tagja látható a 8.3. táblázatban, illetve a 8.5. ábrán. A 17. háromszög középpontja $(1.0071, 0.5929)$, a hozzá tartozó függvényérték pedig 0.0295. Látható, hogy ez a módszer sokkal gyorsabban konvergál a minimumhelyhez, mint a szimplex módszer. $\quad\square$

---

*8.3. táblázat. Nelder–Mead-módszer, $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$*

| $k$ | $\mathbf{x}^{(k,1)}$ | $\mathbf{x}^{(k,2)}$ | $\mathbf{x}^{(k,3)}$ | $f(\mathbf{x}^{(k,1)})$ | $f(\mathbf{x}^{(k,2)})$ | $f(\mathbf{x}^{(k,3)})$ |
|----|------|------|------|--------|--------|--------|
| 0 | (−1.000, 4.000) | (−2.000, 4.000) | (−1.500, 5.000) | 57.000 | 34.000 | 72.563 |
| 1 | (−2.000, 4.000) | (−1.000, 4.000) | (−1.500, 2.600) | 34.000 | 57.000 | 21.203 |
| 2 | (−1.500, 2.600) | (−2.000, 4.000) | (−2.500, 2.600) | 21.203 | 34.000 | 25.603 |
| 3 | (−1.500, 2.600) | (−2.500, 2.600) | (−2.000, 1.200) | 21.203 | 25.603 | 20.560 |
| 4 | (−2.000, 1.200) | (−1.500, 2.600) | (−0.700, 0.920) | 20.560 | 21.203 | 7.602 |
| 5 | (−0.700, 0.920) | (−2.000, 1.200) | (−1.200, −0.480) | 7.602 | 20.560 | 15.440 |
| 6 | (−0.700, 0.920) | (−1.200, −0.480) | ( 0.520, −1.152) | 7.602 | 15.440 | 7.088 |
| 7 | ( 0.520, −1.152) | (−0.700, 0.920) | ( 1.464, 0.394) | 7.088 | 7.602 | 2.270 |
| 8 | ( 1.464, 0.394) | ( 0.520, −1.152) | (−0.192, 0.530) | 2.270 | 7.088 | 3.891 |
| 9 | ( 1.464, 0.394) | (−0.192, 0.530) | ( 0.555, −0.668) | 2.270 | 3.891 | 3.097 |
| 10 | ( 1.464, 0.394) | ( 0.555, −0.668) | ( 0.168, 0.330) | 2.270 | 3.097 | 1.783 |
| 11 | ( 0.168, 0.330) | ( 1.464, 0.394) | ( 0.999, 1.083) | 1.783 | 2.270 | 1.362 |
| 12 | ( 0.999, 1.083) | ( 0.168, 0.330) | ( 1.200, 0.487) | 1.362 | 1.783 | 0.296 |
| 13 | ( 1.200, 0.487) | ( 0.999, 1.083) | ( 0.448, 0.467) | 0.296 | 1.362 | 1.147 |
| 14 | ( 1.200, 0.487) | ( 0.448, 0.467) | ( 0.648, −0.129) | 0.296 | 1.147 | 0.707 |
| 15 | ( 1.200, 0.487) | ( 0.648, −0.129) | ( 0.591, 0.380) | 0.296 | 0.707 | 0.505 |
| 16 | ( 1.200, 0.487) | ( 0.591, 0.380) | ( 1.068, 0.828) | 0.296 | 0.505 | 0.274 |
| 17 | ( 1.068, 0.828) | ( 1.200, 0.487) | ( 0.754, 0.464) | 0.274 | 0.296 | 0.251 |

**Feladatok**

1. Keresse meg a következő függvények minimumhelyét Nelder–Mead-módszerrel!

   (a) $f(x, y) = x^2 + 5y^2$, (b) $f(x, y) = x^2 + (x + y - 2)^2$,

   (c) $f(x, y) = 3x^2 + e^{(x - y)^2}$, (d) $f(x, y) = x^2 + \cos^2(x - y)$

   Több különböző $\alpha$, $\beta$ paraméter értékekkel próbálja ki a módszert!

   <details class="reveal-solution"><summary>Megoldás</summary>

   The procedure is the same for each function; here is a worked illustration for $f(x,y) = (x^2 - 2y)^2 + 2(x-1)^2$ using the plain simplex method. Start with the triangle vertices $(-2,4)$, $(-1,4)$, $(-1.5,5)$. **Iteration 1:** $f(-2,4) = 34$, $f(-1,4) = 57$, $f(-1.5,5) = 72.56$, so the worst vertex is $(-1.5, 5)$. The centroid of the best two is $\left(\tfrac{-2-1}{2}, \tfrac{4+4}{2}\right) = (-1.5, 4)$. Reflect: $x_r = 2(-1.5,4) - (-1.5,5) = (-1.5, 3)$ with $f(-1.5,3) = 26.56 < 72.56$, so accept it. Continue until convergence. For each given $f$, decreasing $\alpha$ toward $1$ and using $\beta < 1$ recovers the classical simplex behaviour, while $\alpha > 1$ speeds expansion.

   </details>

2. Alkalmazza a Nelder–Mead-módszert tetszőleges $\alpha > 1$ és $0 < \beta < 1$ paraméter értékeket használva az $f(x) = x^2 - y^2$ függvényre és a $[0, 1]$, $[0, -1]$, $[1, 0]$ kezdeti pontokra! Mit tapasztal? Mit tapasztal, ha ugyanerre a függvényre és pontokra a szimplex módszert alkalmazza?

   <details class="reveal-solution"><summary>Megoldás</summary>

   Typical parameter ranges are $\alpha$ (expansion) $= 1.4$ to $2.0$, $\beta$ (contraction) $= 0.5$ to $0.7$, and $\gamma$ (shrink) $= 0.5$. A larger $\alpha$ gives more aggressive expansion — faster but less stable; a smaller $\beta$ gives more conservative contraction. A standard choice is $\alpha = 1.4$, $\beta = 0.7$, $\gamma = 0.5$. For $f(x,y) = x^2 - y^2$ the function is unbounded below (a saddle), so both the Nelder–Mead and plain simplex methods march off to $-\infty$ along the $y$-direction rather than locating a minimum — there is none to find.

   </details>

3. Fogalmazza meg a szimplex módszert egyváltozós függvények minimumhelyének meghatározására, és alkalmazza a 8.2. szakasz 1. feladatában szereplő függvényekre!

4. Tekintsük a következő, deriváltat nem használó módszert kétváltozós függvények minimalizálására: legyen $f$ egy kétváltozós függvény, $(p_1^{(0)}, p_2^{(0)})$ egy adott kezdeti pont. Minimalizáljuk a $t \mapsto f(p_1^{(0)} + t, p_2^{(0)})$ egyváltozós függvényt (például szimplex módszerrel, lásd az előző példát). Legyen $t_1$ a minimumhely. Ekkor jelölje $(p_1^{(1)}, p_2^{(1)}) := (p_1^{(0)} + t_1, p_2^{(0)})$. Ezután minimalizáljuk a $t \mapsto f(p_1^{(1)}, p_2^{(1)} + t)$ egyváltozós függvényt. A kapott $t_2$ minimumhelyhez tartozó $(p_1^{(2)}, p_2^{(2)}) := (p_1^{(1)}, p_2^{(1)} + t_2)$ pontból megismételjük az eljárást. Így felváltva az $x$- illetve $y$-tengely irányában egydimenziós minimumkeresési feladatokat megoldva kapjuk a sorozat következő pontját. Alkalmazza ezt a módszert az 1. feladatban felsorolt függvényekre! Hasonlítsa össze a kapott sorozat konvergenciájának gyorsaságát a Nelder–Mead-módszer gyorsaságával!
