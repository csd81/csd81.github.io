# 8.3. Szimplex módszer

![az $f(x, y) = 4 - 3x^2 - y^2$ függvény felülete és egy vízszintes sík](abra-felulet-1.png)

$$f(x, y) = 4 - 3x^2 - y^2$$

![az $f(x, y) = 4 - 3x^2 - y^2$ szintvonalai](abra-szintvonal-1.png)

$$f(x, y) = 4 - 3x^2 - y^2 \text{ szintvonalai}$$

![egy többszörös lokális szélsőértékű függvény felülete és szintvonalai](abra-felulet-2.png)

---

Egy $n$-dimenziós **szimplexen** olyan $n + 1$ darab $n$-dimenziós vektor konvex burkát, azaz az

$$\{\alpha_0 \mathbf{x}^{(0)} + \cdots + \alpha_n \mathbf{x}^{(n)} : 0 \leq \alpha_i \leq 1, \quad \alpha_0 + \cdots + \alpha_n \leq 1\}$$

halmazt értjük, ahol az $\mathbf{x}_1 - \mathbf{x}_0, \mathbf{x}_2 - \mathbf{x}_0, \ldots, \mathbf{x}_n - \mathbf{x}_0$ vektorok lineárisan függetlenek. Ekkor az $\mathbf{x}^{(0)}, \ldots, \mathbf{x}^{(n)}$ vektorokat a szimplex csúcspontjainak hívjuk.

- **1D szimplex:** szakasz
- **2D szimplex:** háromszög
- **3D szimplex:** tetraéder

---

**szimplex módszer:** Vegyünk fel kiindulásként egy $n$-dimenziós szimplexet. Tegyük fel, hogy minden lépésben a csúcspontokat úgy indexeljük, hogy

$$f(\mathbf{x}^{(0)}) \leq f(\mathbf{x}^{(1)}) \leq \cdots \leq f(\mathbf{x}^{(n)}).$$

Ekkor $\mathbf{x}^{(n)}$ a „legrosszabb", és $\mathbf{x}^{(0)}$ a „legjobb" csúcspont.

**1. lépés:** A szimplex legrosszabb pontját tükrözzük az $\mathbf{x}^{(n)}$ ponttal szemben fekvő oldal középpontjára, azaz a többi csúcspont

$$\mathbf{x}_c := \frac{1}{n} \sum_{i=0}^{n-1} \mathbf{x}^{(i)}$$

súlypontjára. A tükrözött pont koordinátáit az

$$\mathbf{x}_r = 2\mathbf{x}_c - \mathbf{x}^{(n)}$$

képlettel számíthatjuk ki.

**2. lépés:** Ha $f(\mathbf{x}_r)$ kisebb, mint $f(\mathbf{x}^{(n)})$, akkor a tükrözést elfogadjuk, ellenkező esetben viszont a legjobb csúcspontból fele akkorára zsugorítjuk a szimplexet: a többi csúcspontot az

$$\mathbf{x}^{(i)} \leftarrow \mathbf{x}^{(0)} + \frac{1}{2}(\mathbf{x}^{(i)} - \mathbf{x}^{(0)}), \quad i = 1, \ldots, n$$

képlettel számoljuk újra. A kapott (tükrözött vagy zsugorított) szimplexszel megismételjük az eljárást.

---

Az előbbi iterációs módszerhez többféle megállási feltételt, illetve feltétel kombinációt adhatunk meg.

1. Az eljárás akkor érjen véget, ha a szimplex egy előre megadott méretnél kisebb lesz. A szimplex méretét definiálhatjuk például a leghosszabb éle hosszaként, azaz a $\max\{\|\mathbf{x}^{(i)} - \mathbf{x}^{(j)}\| : i, j = 0, \ldots, n\}$ képlettel.
2. A szimplexek súlypontjaiban felvett $f_k$ függvényérték sorozatára alkalmazzuk az $|f_{k+1} - f_k| < \varepsilon$ feltételt.
3. Legyen $\bar{f}$ a csúcspontokban felvett függvényértékek átlaga, $\sigma$ pedig a szórása, azaz

$$\bar{f} = \frac{1}{n+1} \sum_{i=0}^{n} f(\mathbf{x}^{(i)}), \qquad \sigma = \sqrt{\frac{1}{n+1} \sum_{i=0}^{n} (f(\mathbf{x}^{(i)}) - \bar{f})^2}.$$

Ekkor addig folytatjuk az iterációt, amíg $\sigma$ kisebb nem lesz mint egy előre megadott tolerancia érték. A függvény minimumhelyét az algoritmus utolsó lépésében kapott szimplex súlypontjával szokás közelíteni.

---

> **Példa.** Keressük meg az
>
> $$f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$$
>
> függvény minimumhelyét! Könnyen látható, hogy a függvénynek az $(1, 0.5)$ pontban van (globális) minimuma. A szimplex módszert alkalmaztuk a feladat megoldására a $(-2, 4)$, $(-1, 4)$ és $(-1.5, 5)$ kezdeti háromszögből kiindulva. Az első 30 lépésben kapott háromszögeket és a csúcspontokhoz tartozó függvényértékeket az alábbi táblázatban soroltuk fel. A 30. háromszög középpontja, $(0.9688, 0.4583)$, jó közelítése a pontos minimumhelynek. Az ebben a pontban felvett függvényérték 0.00243, ami közel van a pontos minimum értékhez, 0-hoz.

---

**Példa folyt.**

*Szimplex módszer, $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$*

| $k$ | $\mathbf{x}^{(k,1)}$ | $\mathbf{x}^{(k,2)}$ | $\mathbf{x}^{(k,3)}$ | $f(\mathbf{x}^{(k,1)})$ | $f(\mathbf{x}^{(k,2)})$ | $f(\mathbf{x}^{(k,3)})$ |
|----|------|------|------|--------|--------|--------|
| 0 | (−1.000, 4.000) | (−2.000, 4.000) | (−1.500, 5.000) | 57.000 | 34.000 | 72.563 |
| 1 | (−2.000, 4.000) | (−1.000, 4.000) | (−1.500, 3.000) | 34.000 | 57.000 | 26.563 |
| 2 | (−1.500, 3.000) | (−2.000, 4.000) | (−2.500, 3.000) | 26.563 | 34.000 | 24.562 |
| 3 | (−2.500, 3.000) | (−1.500, 3.000) | (−2.000, 2.000) | 24.562 | 26.563 | 18.000 |
| 4 | (−2.000, 2.000) | (−2.250, 2.500) | (−1.750, 2.500) | 18.000 | 21.129 | 18.879 |
| 5 | (−2.000, 2.000) | (−1.750, 2.500) | (−1.500, 2.000) | 18.000 | 18.879 | 15.563 |
| 6 | (−1.500, 2.000) | (−2.000, 2.000) | (−1.750, 1.500) | 15.563 | 18.000 | 15.129 |
| 7 | (−1.750, 1.500) | (−1.500, 2.000) | (−1.250, 1.500) | 15.129 | 15.562 | 12.191 |
| $\vdots$ | | | | | | |
| 23 | ( 0.875, 0.250) | ( 0.750, 0.250) | ( 0.812, 0.375) | 0.102 | 0.129 | 0.078 |
| 24 | ( 0.812, 0.375) | ( 0.875, 0.250) | ( 0.938, 0.375) | 0.078 | 0.102 | 0.024 |
| 25 | ( 0.938, 0.375) | ( 0.812, 0.375) | ( 0.875, 0.500) | 0.024 | 0.078 | 0.086 |
| 26 | ( 0.938, 0.375) | ( 0.875, 0.375) | ( 0.906, 0.438) | 0.024 | 0.031 | 0.104 |
| 27 | ( 0.906, 0.438) | ( 0.938, 0.375) | ( 0.969, 0.438) | 0.024 | 0.024 | 0.006 |
| 28 | ( 0.969, 0.438) | ( 0.906, 0.438) | ( 0.938, 0.500) | 0.006 | 0.020 | 0.022 |
| 29 | ( 0.969, 0.438) | ( 0.938, 0.438) | ( 0.953, 0.469) | 0.006 | 0.008 | 0.005 |
| 30 | ( 0.953, 0.469) | ( 0.969, 0.438) | ( 0.984, 0.469) | 0.005 | 0.006 | 0.001 |

a súlypont: $(0.9688, 0.4583)$, a függvényérték: $0.00243$

---

**Példa folyt.**

![Szimplex módszer (22 lépés) — a szintvonalak és a háromszögek sorozata](abra-szimplex-22.png)

*Szimplex módszer (22 lépés).*

---

A szimplex módszernek egy módosított változata a **Nelder–Mead-módszer**. Ennél a módszernél a szimplexet tükrözzük, illetve megnyújtjuk vagy zsugorítjuk aszerint, hogy milyen értékeket vesz fel a függvény a csúcspontokban. Feltesszük, hogy minden egyes lépésben a csúcspontokat úgy indexezzük, hogy a függvényértékek növekvő sorrendben legyenek, azaz $f(\mathbf{x}^{(0)}) \leq f(\mathbf{x}^{(1)}) \leq \cdots \leq f(\mathbf{x}^{(n)})$. Ekkor $\mathbf{x}^{(n)}$ a legrosszabb csúcspont.

**1. lépés:** Tükrözzük az $\mathbf{x}^{(n)}$ pontot a szemben fekvő oldal

$$\mathbf{x}_c = \frac{1}{n} \sum_{i=0}^{n-1} \mathbf{x}^{(i)}$$

súlypontjára. Legyen a tükrözött pont $\mathbf{x}_r = 2\mathbf{x}_c - \mathbf{x}^{(n)}$.

**2. lépés:** Tekintsük az $f(\mathbf{x}_r)$ függvényértéket. Három esetet különböztetünk meg:

(i) $f(\mathbf{x}^{(0)}) < f(\mathbf{x}_r) < f(\mathbf{x}^{(n-1)})$,

(ii) $f(\mathbf{x}_r) \leq f(\mathbf{x}^{(0)})$, azaz $\mathbf{x}_r$ lenne az új legjobb pont, és

(iii) $f(\mathbf{x}_r) \geq f(\mathbf{x}^{(n-1)})$, azaz $\mathbf{x}_r$ lenne az új legrosszabb pont.

---

**Case (i),** $f(\mathbf{x}^{(0)}) < f(\mathbf{x}_r) < f(\mathbf{x}^{(n-1)})$: $\mathbf{x}^{(n)}$-t $\mathbf{x}_r$-re kicseréljük (elfogadtuk a tükrözést), és folytatjuk az iterációt.

**Case (ii),** $f(\mathbf{x}_r) \leq f(\mathbf{x}^{(0)})$: először megpróbáljuk az $\mathbf{x}_r$ irányban megnyújtani egy kicsit a szimplexet, hátha még jobb pontot kapunk. Legyen

$$\mathbf{x}_e := \mathbf{x}_c + \alpha(\mathbf{x}_r - \mathbf{x}_c),$$

ahol $\alpha > 1$ egy rögzített szám (egy paraméter a módszerben). Ha ekkor $f(\mathbf{x}_e) < f(\mathbf{x}^{(0)})$ teljesül, akkor a megnyújtást sikeresnek ítéljük, és $\mathbf{x}^{(n)}$-t $\mathbf{x}_e$-re cseréljük ki. Ellenkező esetben viszont $\mathbf{x}^{(n)}$-t $\mathbf{x}_r$-re cseréljük ki, azaz tükrözünk, de nem nyújtjuk meg a szimplexet.

---

**Case (iii),** $f(\mathbf{x}_r) \geq f(\mathbf{x}^{(n-1)})$: Azt gondoljuk, hogy túl messze tükröztük $\mathbf{x}^{(n)}$-t, így megpróbáljuk zsugorítani a szimplexet. Legyen

$$\mathbf{x}_z := \begin{cases} \mathbf{x}_c - \beta(\mathbf{x}_r - \mathbf{x}_c), & \text{ha } f(\mathbf{x}^{(n)}) < f(\mathbf{x}_r), \\ \mathbf{x}_c + \beta(\mathbf{x}_r - \mathbf{x}_c), & \text{ha } f(\mathbf{x}^{(n)}) \geq f(\mathbf{x}_r), \end{cases}$$

ahol $0 < \beta < 1$ egy újabb paraméter. Ha $f(\mathbf{x}_z) < \min\{f(\mathbf{x}^{(n)}), f(\mathbf{x}_r)\}$, akkor $\mathbf{x}^{(n)}$-t $\mathbf{x}_z$-vel cseréljük fel. Ellenkező esetben viszont a szimplexet a legjobb pontjából, $\mathbf{x}^{(0)}$-ból a felére zsugorítjuk össze:

$$\mathbf{x}^{(i)} \leftarrow \mathbf{x}^{(0)} + \frac{1}{2}(\mathbf{x}^{(i)} - \mathbf{x}^{(0)}), \quad i = 1, \ldots, n.$$

Ismételjük meg az 1. és 2. lépéseket.

---

> **Példa.** A Nelder–Mead-módszert alkalmaztuk az $\alpha = 1.4$ és $\beta = 0.7$ paraméter értékekkel az
>
> $$f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$$
>
> függvény minimumhelyének keresésére. Most is a $(-2, 4)$, $(-1, 4)$ és $(-1.5, 5)$ háromszögből indultunk ki. A kapott sorozat első 17 tagja látható az alábbi táblázatban, illetve az alábbi ábrákon. A 17. háromszög középpontja $(1.0071, 0.5929)$, a hozzá tartozó függvényérték pedig 0.0295. Látható, hogy ez a módszer sokkal gyorsabban konvergál a minimumhelyhez, mint a szimplex módszer.

---

**Példa folyt. — A Nelder–Mead-módszer animációja**

A következő képkockák a Nelder–Mead-iteráció lépéseit szemléltetik az $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ függvény szintvonalain (kiindulási szimplex; a legrosszabb csúcs keresése; a tükrözött csúcs tesztelése; (ii) megnyújtás tesztelése / megnyújtás elfogadása vagy nincs megnyújtás; (i) tükrözés elfogadása; (iii) összehúzás tesztelése / összehúzás elfogadása):

- *starting simplex*
- *find the worst vertex*
- *test reflected vertex*
- *case (ii): test expansion*
- *case (ii): expansion is accepted* / *case (ii): no expansion*
- *case (i): accept reflection*
- *case (iii): test contraction*
- *case (iii): contraction is accepted*

![Nelder–Mead-módszer animáció képkockák](abra-nm-animacio.png)

---

**Példa folyt.**

*Nelder–Mead-módszer, $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$, $\alpha = 1.4$, $\beta = 0.7$*

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

a súlypont: $(1.0071, 0.5929)$, függvényérték: $0.0295$

---
