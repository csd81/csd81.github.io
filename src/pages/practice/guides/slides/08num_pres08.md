# Numerikus analízis

## 8. Szélsőértékszámítás

**Ferenc Hartung**

Pannon Egyetem, Matematika Tanszék

2026

---

# 8.1. Analízis előismeretek

A Hesse-mátrix:

Legyen $f\colon \mathbb{R}^n \to \mathbb{R}$.

$$f''(\mathbf{x}) := \begin{pmatrix}
\dfrac{\partial^2 f}{\partial x_1^2}(\mathbf{x}) & \dfrac{\partial^2 f}{\partial x_1\, \partial x_2}(\mathbf{x}) & \cdots & \dfrac{\partial^2 f}{\partial x_1\, \partial x_n}(\mathbf{x}) \\[2ex]
\dfrac{\partial^2 f}{\partial x_2\, \partial x_1}(\mathbf{x}) & \dfrac{\partial^2 f}{\partial x_2^2}(\mathbf{x}) & \cdots & \dfrac{\partial^2 f}{\partial x_2\, \partial x_n}(\mathbf{x}) \\[2ex]
\vdots & \vdots & & \vdots \\[1ex]
\dfrac{\partial^2 f}{\partial x_n\, \partial x_1}(\mathbf{x}) & \dfrac{\partial^2 f}{\partial x_n\, \partial x_2}(\mathbf{x}) & \cdots & \dfrac{\partial^2 f}{\partial x_n^2}(\mathbf{x})
\end{pmatrix}$$

> **Tétel.** *Legyen $f\colon \mathbb{R}^n \to \mathbb{R}$ parciálisan differenciálható minden változója szerint. Ekkor ha $f$-nek létezik lokális szélsőértéke az $\mathbf{a}$ pontban, akkor $\frac{\partial f(\mathbf{a})}{\partial x_i} = 0$ teljesül minden $i = 1, \ldots, n$-re.*
>
> *Ha $f \in C^2$, és valamely $\mathbf{a}$ pontban $f'(\mathbf{a}) = \mathbf{0}$, továbbá az $f''(\mathbf{a})$ Hesse-mátrix pozitív (negatív) definit, akkor $f$-nek lokális minimuma (maximuma) van $\mathbf{a}$-ban.*

---

Kétváltozós függvényekre az előbbi tétel speciális esetén kapjuk:

> **Tétel.** *Legyen $f\colon \mathbb{R}^2 \to \mathbb{R}$, $f \in C^2$. Ekkor ha $f$-nek létezik lokális szélsőértéke az $(a, b)$ pontban, akkor*
>
> $$\frac{\partial f}{\partial x}(a, b) = 0, \qquad \frac{\partial f}{\partial y}(a, b) = 0 \tag{1}$$
>
> *teljesül.*
>
> *Fordítva, ha valamely $(a, b)$-re (1) teljesül, továbbá*
>
> $$D(a, b) := \frac{\partial^2 f}{\partial x^2}(a, b) \cdot \frac{\partial^2 f}{\partial y^2}(a, b) - \left( \frac{\partial^2 f}{\partial x\, \partial y}(a, b) \right)^2 > 0$$
>
> *akkor $f$-nek létezik lokális szélsőértéke $(a, b)$-ben, mégpedig lokális maximuma, ha $\frac{\partial^2 f}{\partial x^2}(a, b) < 0$ ill. lokális minimuma, ha $\frac{\partial^2 f}{\partial x^2}(a, b) > 0$. Ha $D(a, b) < 0$, akkor $f$-nek nincs szélsőértéke $(a, b)$-ben.*

---

# 8.2. Aranymetszés szerinti keresés módszere

Legyen $f\colon [a, b] \to \mathbb{R}$ folytonos, és feltesszük, hogy $f$ **unimodális**, azaz $f$-nek egyértelmű lokális minimuma van $[a, b]$-ben.

![unimodális függvények](abra-unimodalis.png)

*unimodális függvények*

---

Az **aranymetszés szerinti keresés módszernél**, az intervallumfelezés módszeréhez hasonlóan, egyre szűkebb és szűkebb intervallumokra határoljuk be a függvény minimumhelyét: Legyen $a < y < x < b$. Ha $f(x) > f(y)$, akkor $p \in [a, x]$, ellenkező esetben $p \in [y, b]$ teljesül. Ezután az $[a, x]$ illetve $[y, b]$ intervallummal folytatjuk az eljárást.

![az aranymetszés szerinti keresés két esete](abra-aranymetszes.png)

---

**1. ötlet:** Az $x$ és $y$ pontokat úgy választjuk, hogy az $[a, x]$ és $[y, b]$ intervallum hossza azonos legyen:

$$x - a = b - y = r(b - a)$$

valamely $0 < r < 1$-re. Ekkor

$$x = a + r(b - a), \qquad y = a + (1 - r)(b - a) \tag{2}$$

alakú. Az $x > y$ feltételből kapjuk, hogy $0.5 < r < 1$ kell legyen.

Jelölje $[a', b']$ a következő intervallumot. Válasszuk az új osztópontokat, $x'$-t és $y'$-t a (2) szabály szerint, és $f(x')$ és $f(y')$ összehasonlításával határozzuk meg a következő intervallumot.

**2. ötlet:** Az aranymetszés szerinti keresés módszere úgy választja meg $r$-t, hogy az új $x'$, $y'$ osztópontok közül az egyik egyezzen meg egy előző osztóponttal, azért hogy minden lépésben csak egy új függvényértéket kelljen kiértékelni.

---

![osztópontok](abra-osztopontok.png)

Tegyük fel, hogy $[a', b'] = [y, b]$. Ekkor $y' = x$.

$$\begin{aligned}
a + r(b - a) &= y' \\
&= a' + (1 - r)(b' - a') \\
&= y + (1 - r)(b - y) \\
&= a + (1 - r)(b - a) + (1 - r)(b - a - (1 - r)(b - a)),
\end{aligned}$$

és így

$$r = 1 - r + (1 - r)(1 - (1 - r)),$$

amiből

---

$$r^2 + r - 1 = 0. \tag{3}$$

Ennek pozitív megoldása $r = (\sqrt{5} - 1)/2 \approx 0.61834$. Ez az aranymetszés arányossági tényezője: $r$ teljesíti az

$$\frac{r}{1 - r} = \frac{1}{r}$$

egyenlet.

Ha $[a', b'] = [a, x]$, akkor legyen $r$ olyan, hogy $x' = y$ teljesüljön. Megmutatható, hogy ez a követelmény is a (3) egyenlethez vezet.

> **Tétel.** *Legyen $f \in C(a, b)$ unimodális függvény. Ekkor az aranymetszés szerinti keresés módszere konvergál az $f$ függvény minimumhelyéhez.*

---

Könnyű ellenőrizni, hogy az aranymetszés szerinti keresés módszere $n$ lépése után az intervallum hossza $(b - a)r^n$ lesz. Így az $\varepsilon$ tolerancia értéket

$$n \geq \frac{\log \frac{\varepsilon}{b - a}}{\log r} \tag{4}$$

lépésben éri el.

> **Példa.** Keressük meg az $f(x) = x^2 - 0.8x + 1$ függvény minimumhelyét! Könnyű kiszámolni, hogy a függvény a minimumát a $p = 0.4$ pontban veszi fel. Az aranymetszés szerinti keresés módszerét alkalmaztuk az adott függvényre a $[-1, 2]$ kezdeti intervallumot és az $\varepsilon = 0.005$ tolerancia értéket használva. A (4) formula szerint $n \geq 13.29337586$ lépés kell az előírt tolerancia eléréséhez. Az algoritmus az utolsó intervallum felezőpontját, $0.3995535068$-t adja meg, mint a minimumhely közelítő értékét.

---

**Példa folyt.**

*Aranymetszés szerinti keresés módszere, $f(x) = x^2 - 0.8x + 1$*

| $k$ | $[a_k, b_k]$ | $y_k$ | $x_k$ |
|----|--------------|-------|-------|
| 0 | $[-1.0000000000, 2.0000000000]$ | 0.1458980338 | 0.8541019662 |
| 1 | $[-1.0000000000, 0.8541019662]$ | -0.2917960675 | 0.1458980338 |
| 2 | $[-0.2917960675, 0.8541019662]$ | 0.1458980338 | 0.4164078650 |
| 3 | $[0.1458980338, 0.8541019662]$ | 0.4164078650 | 0.5835921350 |
| 4 | $[0.1458980338, 0.5835921350]$ | 0.3130823038 | 0.4164078650 |
| 5 | $[0.3130823038, 0.5835921350]$ | 0.4164078650 | 0.4802665738 |
| 6 | $[0.3130823038, 0.4802665738]$ | 0.3769410125 | 0.4164078650 |
| 7 | $[0.3769410125, 0.4802665738]$ | 0.4164078650 | 0.4407997213 |
| 8 | $[0.3769410125, 0.4407997213]$ | 0.4013328688 | 0.4164078650 |
| 9 | $[0.3769410125, 0.4164078650]$ | 0.3920160087 | 0.4013328688 |
| 10 | $[0.3920160087, 0.4164078650]$ | 0.4013328688 | 0.4070910050 |
| 11 | $[0.3920160087, 0.4070910050]$ | 0.3977741449 | 0.4013328688 |
| 12 | $[0.3977741449, 0.4070910050]$ | 0.4013328688 | 0.4035322811 |
| 13 | $[0.3977741449, 0.4035322811]$ | 0.3999735572 | 0.4013328688 |
| 14 | $[0.3977741449, 0.4013328688]$ | 0.3991934565 | 0.3999735572 |

---

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

# 8.4. Gradiens módszer

![az $f(x, y) = 4 - 3x^2 - y^2$ függvény felülete egy érintősíkkal](abra-felulet-gradiens.png)

$$f(x, y) = 4 - 3x^2 - y^2$$

---

![a gradiensvektor merőleges a szintvonalra a $\mathbf{p} = (0.5, 0.5)$ pontban](abra-gradiens-meroleges.png)

$$f(x, y) = 4 - 3x^2 - y^2, \quad \mathbf{p} = (0.5, 0.5), \quad \mathbf{u} = -f'(\mathbf{p})$$

> **Theorem.** *Legyen $f\colon \mathbb{R}^2 \to \mathbb{R}$ folytonosan differenciálható. Ekkor az $f'(\mathbf{p})$ gradiens vektor merőleges az $f$ függvény $\mathbf{p}$ ponthoz tartozó szintvonalára, azaz a szintvonal $\mathbf{p}$ ponthoz tartozó érintőjére.*

---

> **Bizonyítás.** Legyen
>
> $$\gamma(t) = \begin{pmatrix} x(t) \\ y(t) \end{pmatrix}$$
>
> az $f$ függvény $\gamma(t_0) = \mathbf{p}$ ponthoz tartozó szintvonalának paraméteres előállítása, és legyen $f(\mathbf{p}) = c$. Ekkor
>
> $$f(x(t), y(t)) = f(\gamma(t)) = c, \qquad \text{minden } t\text{-re},$$
>
> így
>
> $$0 = \frac{d}{dt} f(\gamma(t)) = f'(\gamma(t))^T \gamma'(t), \qquad t \in \mathbb{R}.$$
>
> Ezért $t = t_0$-ra kapjuk
>
> $$f'(\mathbf{p})^T \gamma'(t_0) = 0,$$
>
> tehát $f'(\mathbf{p})$ merőleges a $\mathbf{p}$ ponthoz tartozó érintő irányvektorára, azaz a $\gamma'(t_0) = (x'(t_0), y'(t_0))^T$ vektorra. $\quad\square$

---

![az érintősík metszete a felülettel; a $\mathbf{u} = -f'(\mathbf{p})$ irány](abra-felulet-metszet.png)

$$f(x, y) = 4 - 3x^2 - y^2, \quad \mathbf{p} = (0.5, 0.5), \quad \mathbf{u} = -f'(\mathbf{p})$$

---

Tekintsünk egy $f\colon \mathbb{R}^n \to \mathbb{R}$ függvényt. Analízisből ismert tétel szerint egy $\mathbf{p}$ pontban az $f$ függvény a $-f'(\mathbf{p})$ irányban csökken a leggyorsabban:

> **Tétel.** *Legyen $f \in C^1$. Ekkor a*
>
> $$\lim_{t \to 0+} \frac{f(\mathbf{p} + t\mathbf{u}) - f(\mathbf{p})}{t}, \qquad \|\mathbf{u}\|_2 = 1$$
>
> *iránymenti deriváltak minimuma az $\mathbf{u} = -f'(\mathbf{p})/\|f'(\mathbf{p})\|_2$ irányban van.*

Egy $\mathbf{u}$ irányt az $f$ függvény $\mathbf{p}$ pontbeli **lejtőjének** nevezzük, ha létezik olyan $\delta > 0$, hogy $f(\mathbf{p} + t\mathbf{u}) < f(\mathbf{p})$ minden $0 < t < \delta$-ra, azaz a függvény csökken a $\mathbf{p}$ pontból az $\mathbf{u}$ irány mentén indulva. A tételt úgy is megfogalmazhatjuk, hogy az $f$ függvénynek a $\mathbf{p}$ pontban a $-f'(\mathbf{p})$ irányban legmeredekebb a lejtője.

---

A **gradiens módszer** szerint egy $\mathbf{p}^{(0)}$ kezdeti pontból a negatív gradiensvektor irányában kell elmozdulni. Szokás az előbbiek miatt ezt a **legmeredekebb lejtő módszerének** is nevezni. A módszer általános képlete ezért:

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \alpha_k f'(\mathbf{p}^{(k)}), \tag{5}$$

ahol $\alpha_k$ a lépésközt meghatározó szorzótényező.

A legegyszerűbb esetben a lépésköz állandó. Legyen $h$ rögzített, és használjuk az

$$\alpha_k = \frac{h}{\|f'(\mathbf{p}^{(k)})\|_2}$$

számot.

---

Egy másik változatban úgy választjuk meg a lépésközt, hogy

$$\phi_k(\alpha_k) = \min_{t \in \mathbb{R}} \phi_k(t)$$

legyen, ahol

$$\phi_k(t) := f\Big(\mathbf{p}^{(k)} - t f'(\mathbf{p}^{(k)})\Big). \tag{6}$$

Ekkor minden egyes lépésben a gradiensvektor által meghatározott egyenes mentén egy egyváltozós függvényt kell minimalizálni. Ez utóbbi módon választott lépésközt használó gradiens módszert **optimális gradiens módszernek** hívjuk.

---

Az optimális gradiens módszernél a gradiensvektorral párhuzamos egyenes mentén egy olyan pontig lépünk, ahol az egyenes érint egy szintvonalat. Abból a pontból pedig a pontbeli gradiensvektorral párhuzamosan lépünk tovább. Ebből következik, hogy az optimális gradiens módszernél az egymás utáni lépések irányai merőlegesek egymásra.

Megmutatható, hogy **az optimális gradiens módszer lokálisan lineárisan konvergens**. A sorozat aszimptotikus hibakonstansa néha közel van 1-hez, azaz a konvergencia lassú is lehet.

---

> **Példa.** Tekintsük újra az $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ függvényt. Először az $\alpha_k = 0.3/\|f'(\mathbf{p}^{(k)})\|_2$ lépésközzel futtatjuk a gradiens módszert, két kezdeti pontból indítva a módszert: a $(-1, 4)$ kezdeti értékből (piros karikák) és a $(0.5, 3.5)$ kezdeti értékből (lila karikák). A kapott sorozatok első 25 tagja a következő ábrán látható. A sorozatok lassan közelítik meg az $(1, 0.5)$ minimumhelyet (kék pont), és annak közelében oszcillálnak. Vegyük észre, hogy ahogy az analízisből ismert, a gradiensvektor merőleges a ponthoz tartozó szintvonalra, így a gradiens módszer sorozata mindig a szintvonalra merőleges irányban mozdul el.
>
> Ezután az optimális gradiens módszert alkalmaztuk a $(-1, 4)$ és az $(0.5, 3.5)$ kezdőpontból indulva. A két sorozat első 3 illetve 12 tagját a következő ábrán láthatjuk. Az első sorozat gyorsan a minimumhely közelébe került. A második is gyorsan a minimumhelyet tartalmazó hosszúkás „völgybe" került, de ezután ott csak lassan, cikcakkban haladt a minimumhely felé.

---

**Példa folyt.**

![Gradiens módszer konstans lépésközt használva](abra-gradiens-konstans.png)

*Gradiens módszer konstans lépésközt használva.*

![Optimális gradiens módszer](abra-gradiens-optimalis.png)

*Optimális gradiens módszer.*

---

Ha $f$ gradiensvektorát nem tudjuk vagy nem akarjuk kiszámolni (túl sok műveletet igényel), használhatjuk (5) következő változatát:

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \alpha_k \mathbf{v}^{(k)}, \tag{7}$$

ahol a $\mathbf{v}^{(k)}$ vektor $i$-edik komponensét a

$$v_i^{(k)} = \frac{1}{h}\Big(f(\mathbf{p}^{(k)} + h\mathbf{e}^{(i)}) - f(\mathbf{p}^{(k)})\Big), \qquad i = 1, \ldots, n$$

képlettel számoljuk ($\mathbf{e}^{(i)}$ az $i$-edik egységvektor).

---

# 8.5. Lineáris egyenletrendszerek megoldása gradiens módszerrel

Legyen $\mathbf{A} \in \mathbb{R}^{n \times n}$ szimmetrikus mátrix, azaz $\mathbf{A}^T = \mathbf{A}$, $\mathbf{b} \in \mathbb{R}^n$, $c \in \mathbb{R}$, és tekintsük a

$$g\colon \mathbb{R}^n \to \mathbb{R}, \qquad g(\mathbf{x}) := \frac{1}{2}\mathbf{x}^T \mathbf{A}\mathbf{x} - \mathbf{b}^T \mathbf{x} + c \tag{8}$$

alakú kvadratikus függvényt. Az $\mathbf{A} = (a_{ij})$, $\mathbf{x} = (x_1, \ldots, x_n)^T$, $\mathbf{b} = (b_1, \ldots, b_n)^T$ jelöléseket használva felírhatjuk $g$-t a következő alakban:

$$g(x_1, \ldots, x_n) = \frac{1}{2} \sum_{i=1}^{n} \sum_{j=1}^{n} a_{ij} x_i x_j - \sum_{i=1}^{n} b_i x_i + c.$$

Számítsuk ki a $\frac{\partial g}{\partial x_i}$ parciális deriváltat. A feltevés szerint $a_{ij} = a_{ji}$, ezért

$$\frac{\partial g}{\partial x_i}(x_1, \ldots, x_n) = \frac{1}{2} \sum_{j=1}^{n} (a_{ij} x_j + a_{ji} x_j) - b_i = \sum_{j=1}^{n} a_{ij} x_j - b_i,$$

---

azaz vektoriális alakban

$$g'(\mathbf{x}) = \left( \frac{\partial g}{\partial x_1}(\mathbf{x}), \ldots, \frac{\partial g}{\partial x_n}(\mathbf{x}) \right)^T = \mathbf{A}\mathbf{x} - \mathbf{b}. \tag{9}$$

Így ha $\mathbf{A}$ invertálható, akkor $g$-nek pontosan egy kritikus pontja van, amely az $\mathbf{A}\mathbf{x} = \mathbf{b}$ egyenlet megoldása. Legyen $\bar{\mathbf{x}}$ a $g$ függvény kritikus pontja, és $\mathbf{x} = \bar{\mathbf{x}} + \Delta\mathbf{x}$.

$$\begin{aligned}
g(\bar{\mathbf{x}} + \Delta\mathbf{x}) &= \frac{1}{2}(\bar{\mathbf{x}} + \Delta\mathbf{x})^T \mathbf{A}(\bar{\mathbf{x}} + \Delta\mathbf{x}) - \mathbf{b}^T(\bar{\mathbf{x}} + \Delta\mathbf{x}) + c \\
&= \frac{1}{2}\bar{\mathbf{x}}^T \mathbf{A}\bar{\mathbf{x}} + \frac{1}{2}\bar{\mathbf{x}}^T \mathbf{A}\Delta\mathbf{x} + \frac{1}{2}(\Delta\mathbf{x})^T \mathbf{A}\bar{\mathbf{x}} + \frac{1}{2}(\Delta\mathbf{x})^T \mathbf{A}\Delta\mathbf{x} \\
&\quad - \mathbf{b}^T \bar{\mathbf{x}} - \mathbf{b}^T \Delta\mathbf{x} + c.
\end{aligned}$$

Ebből kapjuk az $\mathbf{A} = \mathbf{A}^T$, $\bar{\mathbf{x}}^T \mathbf{A}\Delta\mathbf{x} = (\Delta\mathbf{x})^T \mathbf{A}\bar{\mathbf{x}}$, $\mathbf{b}^T \Delta\mathbf{x} = (\Delta\mathbf{x})^T \mathbf{b}$ és az $\mathbf{A}\bar{\mathbf{x}} = \mathbf{b}$ összefüggéseket felhasználva, hogy

$$\begin{aligned}
g(\bar{\mathbf{x}} + \Delta\mathbf{x}) &= \frac{1}{2}\bar{\mathbf{x}}^T \mathbf{A}\bar{\mathbf{x}} - \mathbf{b}^T \bar{\mathbf{x}} + (\Delta\mathbf{x})^T(\mathbf{A}\bar{\mathbf{x}} - \mathbf{b}) + \frac{1}{2}(\Delta\mathbf{x})^T \mathbf{A}\Delta\mathbf{x} + c \\
&= g(\bar{\mathbf{x}}) + \frac{1}{2}(\Delta\mathbf{x})^T \mathbf{A}\Delta\mathbf{x}.
\end{aligned}$$

---

Ezért

$$g(\bar{\mathbf{x}} + \Delta\mathbf{x}) - g(\bar{\mathbf{x}}) = \frac{1}{2}(\Delta\mathbf{x})^T \mathbf{A}\Delta\mathbf{x}. \tag{10}$$

Ha $\mathbf{A}$ pozitív definit mátrix, akkor $g(\bar{\mathbf{x}} + \Delta\mathbf{x}) - g(\bar{\mathbf{x}}) > 0$ minden $\Delta\mathbf{x} \neq \mathbf{0}$ vektorra, azaz $\bar{x}$ minimalizálja a $g$ függvényt. Ehhez hasonlóan, ha $\mathbf{A}$ negatív definit, akkor a (10) egyenletből következik, hogy $g$-nek maximuma van $\bar{x}$-ben. Pozitív ill. negatív definit mátrixok invertálhatók.

> **Tétel.** *Legyen $\mathbf{A}$ szimmetrikus. Ekkor a $g(\mathbf{x}) := \frac{1}{2}\mathbf{x}^T \mathbf{A}\mathbf{x} - \mathbf{b}^T \mathbf{x} + c$ kvadratikus függvény gradiensvektora $g'(\mathbf{x}) = \mathbf{A}\mathbf{x} - \mathbf{b}$. Ha $\mathbf{A}$ pozitív (negatív) definit, akkor $g$-nek létezik globális minimuma (maximuma), amelyet a függvény az $\mathbf{x} = \mathbf{A}^{-1}\mathbf{b}$ pontban vesz fel.*

> **Következmény.** *Ha egy kvadratikus függvénynek egy pontban lokális minimuma (maximuma) van, akkor ott a függvénynek globális minimuma (maximuma) is van.*

---

Ha $\mathbf{A}$ egy szimmetrikus pozitív definit mátrix, akkor az $\mathbf{A}\mathbf{x} = \mathbf{b}$ lineáris egyenletrendszert megoldhatjuk úgy, hogy definiáljuk a $g$ kvadratikus függvényt a (8) képlettel, és optimális gradiens módszerrel minimalizáljuk azt. Definiáljuk tehát a

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \alpha_k \mathbf{v}^{(k)}$$

sorozatot, ahol

$$\mathbf{v}^{(k)} = g'(\mathbf{p}^{(k)}) = \mathbf{A}\mathbf{p}^{(k)} - \mathbf{b}.$$

$\alpha_k$-t az optimális gradiens módszer definíciójának megfelelően a $\phi_k(t) = g(\mathbf{p}^{(k)} - t\mathbf{v}^{(k)})$ egyváltozós függvény minimumhelyének választjuk. A $\phi_k$ függvény egy másodfokú polinom, hiszen

$$\begin{aligned}
\phi_k(t) &= \frac{1}{2}\big(\mathbf{p}^{(k)} - t\mathbf{v}^{(k)}\big)^T \mathbf{A}\big(\mathbf{p}^{(k)} - t\mathbf{v}^{(k)}\big) - \mathbf{b}^T\big(\mathbf{p}^{(k)} - t\mathbf{v}^{(k)}\big) + c \\
&= t^2 \frac{1}{2}\big(\mathbf{v}^{(k)}\big)^T \mathbf{A}\mathbf{v}^{(k)} - t\big(\mathbf{v}^{(k)}\big)^T \big(\mathbf{A}\mathbf{p}^{(k)} - \mathbf{b}\big) + \frac{1}{2}\big(\mathbf{p}^{(k)}\big)^T \mathbf{A}\mathbf{p}^{(k)} - \mathbf{b}^T \mathbf{p}^{(k)} + c.
\end{aligned}$$

---

Ezért $\phi_k$ minimumhelyét explicit módon meg tudjuk adni:

$$\alpha_k = \frac{\big(\mathbf{v}^{(k)}\big)^T \big(\mathbf{A}\mathbf{p}^{(k)} - \mathbf{b}\big)}{\big(\mathbf{v}^{(k)}\big)^T \mathbf{A}\mathbf{v}^{(k)}}.$$

Ha bevezetjük az

$$\mathbf{r}^{(k)} := \mathbf{b} - \mathbf{A}\mathbf{p}^{(k)} = -\mathbf{v}^{(k)}$$

reziduális vektort, akkor az előbbi képleteket összefoglalhatjuk a következő alakban:

$$\mathbf{r}^{(k)} = \mathbf{b} - \mathbf{A}\mathbf{p}^{(k)} \tag{11}$$

$$\alpha_k = \frac{\big(\mathbf{r}^{(k)}\big)^T \mathbf{r}^{(k)}}{\big(\mathbf{r}^{(k)}\big)^T \mathbf{A}\mathbf{r}^{(k)}} \tag{12}$$

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} + \alpha_k \mathbf{r}^{(k)}. \tag{13}$$

---

> **Példa.** A
>
> $$\begin{array}{rcrcrcl}
> 4x_1 &+& 2x_2 &-& x_3 &=& 0 \\
> 2x_1 &+& 5x_2 & & &=& 8 \\
> -x_1 & & &+& 3x_3 &=& 1
> \end{array}$$
>
> lineáris egyenletrendszerre alkalmaztuk a gradiens módszert a (11)-(13) rekurzív képletekkel a $\mathbf{p}^{(0)} = (3, 3, 3)^T$ kezdőértékből kiindulva. Megjegyezzük, hogy a módszer alkalmazható, hiszen a lineáris rendszer együtthatómátrixa szimmetrikus és pozitív definit. A kapott $\mathbf{p}^{(k)}$ sorozat első 13 tagját a következő táblázatban soroltuk fel a közelítés hibájával együtt. Megjegyezzük, hogy a pontos megoldás $(-1, 2, 0)$.

---

**Példa folyt.**

*Lineáris egyenletrendszer megoldása gradiens módszerrel*

| $k$ | $\mathbf{p}^{(k)}$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_2$ |
|----|------|------|
| 0 | ( 3.00000000, 3.00000000, 3.00000000) | 5.09901951 |
| 1 | ( 0.43469388, 0.77673469, 2.14489796) | 2.85575065 |
| 2 | ( 0.03799038, 1.89933726, 0.41611180) | 1.12280719 |
| 3 | (−0.59954375, 1.61568290, 0.37817223) | 0.67162421 |
| 4 | (−0.75093609, 1.98854968, 0.13393796) | 0.28302529 |
| 5 | (−0.90321440, 1.90857051, 0.10622765) | 0.17032651 |
| 6 | (−0.93575911, 1.99605148, 0.03257991) | 0.07213829 |
| 7 | (−0.97504377, 1.97631917, 0.02650106) | 0.04342696 |
| 8 | (−0.98365956, 1.99904876, 0.00839916) | 0.01839730 |
| 9 | (−0.99365117, 1.99398134, 0.00679190) | 0.01107528 |
| 10 | (−0.99583018, 1.99975420, 0.00213698) | 0.00469196 |
| 11 | (−0.99837993, 1.99846385, 0.00173029) | 0.00282459 |
| 12 | (−0.99893668, 1.99993749, 0.00054530) | 0.00119662 |
| 13 | (−0.99958687, 1.99960829, 0.00044139) | 0.00072037 |

---

# 8.6. Newton-módszer

Most tekintsünk egy $f\colon \mathbb{R}^n \to \mathbb{R}$ függvényt. Rögzítsünk egy $\mathbf{p}^{(0)}$ vektort. Ha $f \in C^3$, akkor $\mathbf{p}^{(0)}$ egy környezetében $f$ közelíthető a

$$g(\mathbf{x}) := f(\mathbf{p}^{(0)}) + f'(\mathbf{p}^{(0)})^T(\mathbf{x} - \mathbf{p}^{(0)}) + \frac{1}{2}(\mathbf{x} - \mathbf{p}^{(0)})^T f''(\mathbf{p}^{(0)})(\mathbf{x} - \mathbf{p}^{(0)}) \tag{14}$$

másodfokú Taylor-polinomjával, ahol $f'(\mathbf{p}^{(0)})$ $f$ gradiensvektora, $f''(\mathbf{p}^{(0)})$ pedig $f$ Hesse-mátrixa $\mathbf{p}^{(0)}$-ban. Tegyük fel, hogy $f''(\mathbf{p}^{(0)})$ pozitív definit. Ekkor $g$-nek globális minimuma létezik, amelyet a

$$\mathbf{p}^{(1)} = \mathbf{p}^{(0)} - \big(f''(\mathbf{p}^{(0)})\big)^{-1} f'(\mathbf{p}^{(0)})$$

pontban vesz fel. Ekkor $\mathbf{p}^{(1)}$-et tekinthetjük $f$ minimumhelye közelítésének. Ezután megismételjük az eljárást a $\mathbf{p}^{(1)}$ pontbeli Taylor-közelítést használva. Így definiálhatjuk a következő iterációs módszert:

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \big(f''(\mathbf{p}^{(k)})\big)^{-1} f'(\mathbf{p}^{(k)}) \tag{15}$$

A (15) iterációs módszert **Newton-féle minimumkeresési módszernek** hívjuk.

---

Könnyen látható, hogy ez azonos az $f'(\mathbf{x}) = \mathbf{0}$ egyenletrendszer megoldására felírt Newton-iterációval. Ebből kapjuk rögtön a következő tételt.

> **Tétel.** *Legyen $f\colon \mathbb{R}^n \to \mathbb{R}$, $f \in C^3$, $f'(\mathbf{p}) = \mathbf{0}$ és $f''(\mathbf{p})$ pozitív definit. Ekkor $f$-nek $\mathbf{p}$-ben lokális minimuma van, és a (15) Newton-iteráció lokálisan kvadratikusan konvergál $\mathbf{p}$-hez.*

---

> **Példa.** Alkalmazzuk a Newton-módszert az $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ függvényre. A $(-1, 4)^T$ pontból indított (15) iteráció első 5 tagját a következő táblázatban tüntettük fel. A sorozat igen gyorsan megközelítette a pontos $(1, 0.5)^T$ minimumhelyet. Megjegyezzük, hogy az $(1, 3)^T$ pontból indított Newton-sorozat egy lépésben már a pontos minimumhelyet adja vissza.

---

**Példa folyt.**

*Newton-módszer, $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$*

| $k$ | $\mathbf{p}^{(k)}$ | $f(\mathbf{p}^{(k)})$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_2$ | $\dfrac{\|\mathbf{p}^{(k)} - \mathbf{p}\|_2}{\|\mathbf{p}^{(k-1)} - \mathbf{p}\|_2^2}$ |
|----|------|------|------|------|
| 0 | (−1.00000000, 4.00000000) | 57.00000000 | 4.03112887 | |
| 1 | (−1.33333333, 0.83333333) | 10.90123457 | 2.35702260 | 0.14504754 |
| 2 | ( 0.76666667, −1.91111111) | 19.55698889 | 2.42237512 | 0.43602752 |
| 3 | ( 0.80979667, 0.32695523) | 0.07235807 | 0.25714159 | 0.04382173 |
| 4 | ( 0.99964684, 0.48162536) | 0.00129935 | 0.01837803 | 0.27794212 |
| 5 | ( 0.99998771, 0.49998766) | 0.00000000 | 0.00001742 | 0.05156519 |

---

# 8.7. Kvázi-Newton módszerek

Az előző szakaszhoz hasonlóan közelítsük az $f$ függvényt egy $\mathbf{p}^{(k)}$ pontja környezetében a

$$g(\mathbf{x}) := f(\mathbf{p}^{(k)}) + \big(\mathbf{v}^{(k)}\big)^T (\mathbf{x} - \mathbf{p}^{(k)}) + \frac{1}{2}(\mathbf{x} - \mathbf{p}^{(k)})^T \mathbf{A}^{(k)}(\mathbf{x} - \mathbf{p}^{(k)}) \tag{16}$$

kvadratikus függvénnyel. Ha $\mathbf{v}^{(k)} \approx f'(\mathbf{p}^{(k)})$ és $\mathbf{A}^{(k)} \approx f''(\mathbf{p}^{(k)})$, akkor (16) közelíti $f$ másodfokú $\mathbf{p}^{(k)}$-körüli Taylor-polinomját, így valóban $f$ közelítésének tekinthető $\mathbf{p}^{(k)}$ egy kis környezetében. Azt várjuk, hogy $g$ minimumhelye közelíteni fogja $f$ minimumhelyét. Ha $\mathbf{A}^{(k)}$ pozitív definit, akkor $g$ minimumhelye a

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \big(\mathbf{A}^{(k)}\big)^{-1} \mathbf{v}^{(k)}. \tag{17}$$

pontban van. Ezeket az iterációs eljárásokat **kvázi-Newton minimumkeresési módszereknek** hívjuk.

---

Választhatjuk $\mathbf{A}^{(k)}$-t és $\mathbf{v}^{(k)}$-t az $f''(\mathbf{p}^{(k)})$ Hesse-mátrix és az $f'(\mathbf{p}^{(k)})$ gradiensvektor numerikus közelítésének: $\mathbf{A}^{(k)} = (a_{ij}^{(k)})$ és $\mathbf{v}^{(k)} = (v_1^{(k)}, \ldots, v_n^{(k)})^T$, ahol

$$a_{ij}^{(k)} = \frac{1}{h^2}\big(f(\mathbf{p}^{(k)} + h\mathbf{e}^{(i)} + h\mathbf{e}^{(j)}) - f(\mathbf{p}^{(k)} + h\mathbf{e}^{(i)}) - f(\mathbf{p}^{(k)} + h\mathbf{e}^{(j)}) + f(\mathbf{p}^{(k)})\big)$$

és

$$v_i^{(k)} = \frac{1}{h}\Big(f(\mathbf{p}^{(k)} + h\mathbf{e}^{(i)}) - f(\mathbf{p}^{(k)})\Big),$$

$i, j = 1, \ldots, n$ ($\mathbf{e}^{(i)}$ az $i$-edik egységvektor, $h > 0$ rögzített kis lépésköz). Ezzel a módosítással nincs szükség a pontos Jacobi- és Hesse-mátrix ismeretére, viszont minden iterációs lépésben $n^2$ nagyságrendű függvény kiértékelést kell elvégezni.

---

Most tekintsük azt az esetet, amikor a (17) képletben $\mathbf{v}^{(k)} = f'(\mathbf{p}^{(k)})$, azaz vizsgáljuk a

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \big(\mathbf{A}^{(k)}\big)^{-1} f'(\mathbf{p}^{(k)}) \tag{18}$$

alakú kvázi-Newton módszereket. Feltesszük tehát, hogy a függvény gradiensvektorát ki tudjuk számítani, és a kérdés az, hogyan közelítsük a függvény Hesse-mátrixát. Erre egy lehetőség a Broyden-módszer alkalmazása az $f'(\mathbf{x}) = \mathbf{0}$ egyenletrendszer gyökének meghatározására:

$$\mathbf{A}^{(k)} \mathbf{s}^{(k)} = -f'(\mathbf{p}^{(k)}), \tag{19}$$

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} + \mathbf{s}^{(k)}, \tag{20}$$

$$\mathbf{y}^{(k)} = f'(\mathbf{p}^{(k+1)}) - f'(\mathbf{p}^{(k)}), \tag{21}$$

$$\mathbf{A}^{(k+1)} = \mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2}. \tag{22}$$

---

> **Példa.** Alkalmazzuk a (19)–(22) képletekkel definiált Broyden-módszert az $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ függvényre. A $(2, 2)^T$ pontból indítottuk a sorozatot, az $\mathbf{A}^{(0)}$ mátrix pedig az $f''(2, 2)$ Hesse-mátrix $h = 0.05$ lépésközű másodrendű differencia képlettel számított közelítése volt. A kapott sorozat első 10 tagját a következő táblázatban láthatjuk.

---

**Példa folyt.**

*Broyden-módszer, $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$*

| $k$ | $\mathbf{p}^{(k)}$ | $f(\mathbf{p}^{(k)})$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_2$ | $\dfrac{\|\mathbf{p}^{(k)} - \mathbf{p}\|_2}{\|\mathbf{p}^{(k-1)} - \mathbf{p}\|_2}$ |
|----|------|------|------|------|
| 0 | ( 2.00000000, 2.00000000) | 2.00000e+00 | 1.80277564 | |
| 1 | ( 1.28952043, 0.56127886) | 4.59574e-01 | 0.29593441 | 0.16415488 |
| 2 | ( 1.35039835, 0.89916410) | 2.46195e-01 | 0.53114121 | 1.79479368 |
| 3 | ( 1.24875073, 0.73204681) | 1.32833e-01 | 0.34018032 | 0.64047058 |
| 4 | ( 1.12570322, 0.59780553) | 3.67287e-02 | 0.15927091 | 0.46819553 |
| 5 | ( 1.05911935, 0.54518730) | 7.97359e-03 | 0.07441095 | 0.46719737 |
| 6 | ( 0.99939685, 0.49649610) | 3.43894e-05 | 0.00355544 | 0.04778109 |
| 7 | ( 1.01133354, 0.50962433) | 2.69479e-04 | 0.01486866 | 4.18194987 |
| 8 | ( 1.00464762, 0.50384065) | 4.58758e-05 | 0.00602918 | 0.40549562 |
| 9 | ( 1.00047293, 0.50036811) | 4.91375e-07 | 0.00059931 | 0.09940111 |
| 10 | ( 1.00008014, 0.50006497) | 1.37638e-08 | 0.00010316 | 0.17213595 |

---

A (22) iterációs módszerrel az a probléma, hogy mivel $\mathbf{A}^{(k)}$ az $f''(\mathbf{p})$ Hesse-mátrix közelítése, így természetes megkövetelni, hogy $\mathbf{A}^{(k)}$ pozitív definit legyen minden $k$-ra. A numerikus tapasztalat is azt támasztja alá, hogy azok a (18) alakú kvázi-Newton módszerek a leghatékonyabbak, ahol $\mathbf{A}^{(k)}$ pozitív definit közelítése a Hesse-mátrixnak. A Broyden-módszerrel generált $\mathbf{A}^{(k)}$ mátrixsorozat viszont pozitív definit mátrixból kiindulva még csak nem is szimmetrikus mátrixokat generál.

---

Az első célunk ezért úgy módosítani a Broyden-módszer képletét, hogy az szimmetrikus mátrixot generáljon minden $k$-ra. Tegyük fel, hogy $\mathbf{A}^{(k)}$ szimmetrikus, és legyen

$$\mathbf{B}^{(k+1,1)} = \mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2}$$

a Broyden-féle iterált mátrix. Megmutatható, hogy egy $\mathbf{A}$ mátrixhoz bizonyos értelemben legközelebbi szimmetrikus mátrix az $\frac{1}{2}(\mathbf{A} + \mathbf{A}^T)$ mátrix. Ezért természetes ötlet $\mathbf{B}^{(k+1,1)}$-et úgy módosítani, hogy

$$\begin{aligned}
\mathbf{B}^{(k+1,2)} &= \frac{1}{2}\Big(\mathbf{B}^{(k+1,1)} + \mathbf{B}^{(k+1,1)T}\Big) \\
&= \mathbf{A}^{(k)} + \frac{1}{2}\frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T + \mathbf{s}^{(k)}(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2}
\end{aligned} \tag{23}$$

legyen.

---

Ezzel viszont az a gond, hogy $\mathbf{B}^{(k+1,2)}$ nem teljesíti az $\mathbf{A}^{(k+1)}\mathbf{s}^{(k)} = \mathbf{y}^{(k)}$ szelő egyenletet, amely a Broyden-módszer kiindulási ötlete volt. Korrigáljuk ezt a hibát (22) újbóli alkalmazásával: legyen

$$\mathbf{B}^{(k+1,3)} = \mathbf{B}^{(k+1,2)} + \frac{(\mathbf{y}^{(k)} - \mathbf{B}^{(k+1,2)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2}. \tag{24}$$

Ez újra nem szimmetrikus, ezért megismételjük az eljárást: képezzük a $\mathbf{B}^{(k+1,2i)}$ és $\mathbf{B}^{(k+1,2i+1)}$ mátrixokat a sorozat előző tagjából (23) és (24) segítségével $i = 2, 3, \ldots$-re.

---

Megmutatható, hogy a $\mathbf{B}^{(k+1,i)}$ mátrixsorozat konvergál az

$$\begin{aligned}
\mathbf{A}^{(k+1)} &= \mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T + \mathbf{s}^{(k)}(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2} \\
&\quad - \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})^T \mathbf{s}^{(k)}}{\|\mathbf{s}^{(k)}\|_2^4} \mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T
\end{aligned} \tag{25}$$

szimmetrikus mátrixhoz. Ez egy olyan mátrix korrekciós iteráció, amely megőrzi a mátrix szimmetrikus tulajdonságát, és amely teljesíti az $\mathbf{A}^{(k+1)}\mathbf{s}^{(k)} = \mathbf{y}^{(k)}$ szelő egyenletet. Ezt a mátrix iterációt **Powell-féle szimmetrikus Broyden-iterációnak**, angol rövidítése alapján **PSB-iterációnak** nevezzük.

---

> **Tétel.** *Legyen $f \in C^3$, $f'(\mathbf{p}) = 0$, $f''(\mathbf{p})$ pozitív definit. Ekkor létezik olyan $\varepsilon, \delta > 0$, hogy a (19)–(21), (25) iteráció definiált minden $k$-ra, és szuperlineárisan konvergál $\mathbf{p}$-hez, ha $\|\mathbf{p}^{(0)} - \mathbf{p}\|_2 < \varepsilon$ és $\|\mathbf{A}^{(0)} - f''(\mathbf{p})\|_2 < \delta$.*

> **Példa.** Ebben a példában a (18) kvázi-Newton módszert a PSB-iterációval alkalmaztuk az $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ függvényre. A korábbi példában használt kezdőértékekből indítva a következő táblázatban felsorolt eredményeket kapjuk. A konvergencia gyorsabb, mint a Broyden-módszernél volt.

---

**Példa folyt.**

*A (18) kvázi-Newton módszer PSB-iterációval*

| $k$ | $\mathbf{p}^{(k)}$ | $f(\mathbf{p}^{(k)})$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_2$ | $\dfrac{\|\mathbf{p}^{(k)} - \mathbf{p}\|_2}{\|\mathbf{p}^{(k-1)} - \mathbf{p}\|_2}$ |
|----|------|------|------|------|
| 0 | ( 2.00000000, 2.00000000) | 2.00000e+00 | 1.80277564 | |
| 1 | ( 1.28952043, 0.56127886) | 4.59574e-01 | 0.29593441 | 0.16415488 |
| 2 | ( 1.25102079, 0.70409379) | 1.50630e-01 | 0.32352080 | 1.09321792 |
| 3 | ( 1.19910219, 0.73444653) | 8.02473e-02 | 0.30758228 | 0.95073416 |
| 4 | ( 1.14966546, 0.69907469) | 5.06393e-02 | 0.24905919 | 0.80973192 |
| 5 | ( 1.00399514, 0.50473229) | 3.40491e-05 | 0.00619320 | 0.02486638 |
| 6 | ( 0.99975498, 0.49938607) | 6.64526e-07 | 0.00066102 | 0.10673251 |
| 7 | ( 1.00003118, 0.49997474) | 1.46839e-08 | 0.00004012 | 0.06070113 |
| 8 | ( 1.00001593, 0.50000889) | 7.05953e-10 | 0.00001824 | 0.45466117 |
| 9 | ( 1.00000627, 0.50000724) | 8.24492e-11 | 0.00000958 | 0.52515860 |
| 10 | ( 1.00000015, 0.50000024) | 7.49020e-14 | 0.00000028 | 0.02901243 |

---

A PSB-iteráció nem teljesíti azt a korábban megfogalmazott célunkat, hogy $\mathbf{A}^{(k)}$ pozitív definit legyen minden $k$-ra, ha $\mathbf{A}^{(0)}$ pozitív definit. Ha egy $\mathbf{A}$ mátrix pozitív definit, akkor az $\mathbf{A} = \mathbf{L}\mathbf{L}^T$ Cholesky-felbontása létezik, ahol $\mathbf{L}$ nemszinguláris. Fordítva, ha

$$\mathbf{A} = \mathbf{M}\mathbf{M}^T$$

alakú, ahol $\mathbf{M}$ nemszinguláris, akkor $\mathbf{A}$ pozitív definit, hiszen

$$\mathbf{x}^T \mathbf{M}\mathbf{M}^T \mathbf{x} = (\mathbf{M}^T\mathbf{x})^T \mathbf{M}^T \mathbf{x} = \|\mathbf{M}^T \mathbf{x}\|_2^2 \geq 0,$$

és egyenlőség csak akkor van, ha $\mathbf{M}^T \mathbf{x} = \mathbf{0}$, és ezért $\mathbf{x} = \mathbf{0}$.

---

Legyen

$$\mathbf{A}^{(k)} = \mathbf{M}^{(k)}(\mathbf{M}^{(k)})^T$$

alakú, ahol $\mathbf{M}^{(k)}$ invertálható (de nem feltétlenül alulról trianguláris). A következő Hesse-mátrix közelítést, $\mathbf{A}^{(k+1)}$-et az

$$\mathbf{A}^{(k+1)} = \mathbf{M}^{(k+1)}(\mathbf{M}^{(k+1)})^T$$

alakban keressük, ahol $\mathbf{A}^{(k+1)}$-től megköveteljük, hogy teljesítse az

$$\mathbf{A}^{(k+1)}\mathbf{s}^{(k)} = \mathbf{y}^{(k)}$$

szelő egyenleteket. A szelő egyenletből következik, hogy $(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)} = (\mathbf{s}^{(k)})^T \mathbf{A}^{(k+1)}\mathbf{s}^{(k)}$, ezért ha $\mathbf{A}^{(k+1)}$ pozitív definit, akkor az

$$(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)} > 0 \tag{26}$$

egyenlőtlenség teljesül. Megmutatjuk, hogy (26) teljesülése esetén a szelő egyenletnek van pozitív definit megoldása.

---

Vezessük be a $\mathbf{v}^{(k)} := (\mathbf{M}^{(k+1)})^T \mathbf{s}^{(k)}$ jelölést. Ekkor a szelő egyenlet felírható a következőképpen:

$$(\mathbf{M}^{(k+1)})^T \mathbf{s}^{(k)} = \mathbf{v}^{(k)}, \tag{27}$$

$$\mathbf{M}^{(k+1)} \mathbf{v}^{(k)} = \mathbf{y}^{(k)}. \tag{28}$$

Az $\mathbf{M}^{(k+1)}$ mátrixot az $\mathbf{M}^{(k)}$ mátrixot módosítva szeretnénk előállítani, ezért a Broyden-módszer levezetését követve (28) alapján természetes $\mathbf{M}^{(k+1)}$-et az

$$\mathbf{M}^{(k+1)} = \mathbf{M}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{M}^{(k)}\mathbf{v}^{(k)})(\mathbf{v}^{(k)})^T}{\|\mathbf{v}^{(k)}\|_2^2} \tag{29}$$

alakban keresni. Ekkor $\mathbf{M}^{(k+1)}$ teljesíti a (28) egyenletet, és a legkevésbé tér el $\mathbf{M}^{(k)}$-tól abban az értelemben, hogy minden $\mathbf{z} \perp \mathbf{v}^{(k)}$-ra $\mathbf{M}^{(k+1)}\mathbf{z} = \mathbf{M}^{(k)}\mathbf{z}$. $\mathbf{M}^{(k+1)}$-et visszahelyettesítve a (27) egyenletbe kapjuk, hogy

---

$$\begin{aligned}
\mathbf{v}^{(k)} &= (\mathbf{M}^{(k)})^T \mathbf{s}^{(k)} + \frac{\big((\mathbf{y}^{(k)} - \mathbf{M}^{(k)}\mathbf{v}^{(k)})(\mathbf{v}^{(k)})^T\big)^T}{\|\mathbf{v}^{(k)}\|_2^2}\mathbf{s}^{(k)} \\
&= (\mathbf{M}^{(k)})^T \mathbf{s}^{(k)} + \frac{\mathbf{v}^{(k)}(\mathbf{y}^{(k)} - \mathbf{M}^{(k)}\mathbf{v}^{(k)})^T}{\|\mathbf{v}^{(k)}\|_2^2}\mathbf{s}^{(k)} \\
&= (\mathbf{M}^{(k)})^T \mathbf{s}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{M}^{(k)}\mathbf{v}^{(k)})^T \mathbf{s}^{(k)}}{\|\mathbf{v}^{(k)}\|_2^2}\mathbf{v}^{(k)}.
\end{aligned}$$

Ebből következik, hogy $(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)} = \alpha \mathbf{v}^{(k)}$ alakú, ahol

$$\begin{aligned}
\alpha &= 1 - \frac{(\mathbf{y}^{(k)} - \mathbf{M}^{(k)}\mathbf{v}^{(k)})^T \mathbf{s}^{(k)}}{\|\mathbf{v}^{(k)}\|_2^2} \\
&= 1 - \frac{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}}{\|\mathbf{v}^{(k)}\|_2^2} + \frac{(\mathbf{v}^{(k)})^T (\mathbf{M}^{(k)})^T \mathbf{s}^{(k)}}{\|\mathbf{v}^{(k)}\|_2^2} \\
&= 1 - \alpha^2 \frac{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{M}^{(k)}(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)}} + \alpha,
\end{aligned}$$

és így

---

$$\alpha^2 = \frac{(\mathbf{s}^{(k)})^T \mathbf{M}^{(k)}(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)}}{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}} = \frac{(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}\mathbf{s}^{(k)}}{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}}. \tag{30}$$

Mivel a számláló pozitív, hiszen feltettük, hogy $\mathbf{A}^{(k)}$ pozitív definit, ezért $\alpha$ kifejezhető a (30) egyenletből, és

$$\mathbf{v}^{(k)} = \frac{1}{\alpha}(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)} = \left( \frac{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}\mathbf{s}^{(k)}} \right)^{1/2} (\mathbf{M}^{(k)})^T \mathbf{s}^{(k)}.$$

Ezt visszahelyettesítve a (29) egyenletbe

$$\begin{aligned}
\mathbf{M}^{(k+1)} &= \mathbf{M}^{(k)} + \frac{(\mathbf{y}^{(k)} - \frac{1}{\alpha}\mathbf{M}^{(k)}(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)})\frac{1}{\alpha}(\mathbf{s}^{(k)})^T \mathbf{M}^{(k)}}{\frac{1}{\alpha^2}\|(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)}\|_2^2} \\
&= \mathbf{M}^{(k)} + \alpha \frac{\mathbf{y}^{(k)}(\mathbf{s}^{(k)})^T \mathbf{M}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}\mathbf{s}^{(k)}} - \frac{\mathbf{A}^{(k)}\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T \mathbf{M}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}\mathbf{s}^{(k)}}.
\end{aligned}$$

---

Kis számolással ebből levezethető, hogy

$$\mathbf{A}^{(k+1)} = \mathbf{A}^{(k)} + \frac{\mathbf{y}^{(k)}(\mathbf{y}^{(k)})^T}{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}} - \frac{\mathbf{A}^{(k)}\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}\mathbf{s}^{(k)}}. \tag{31}$$

Hátra van még azt megmutatni, hogy az iteráció pozitív definit mátrixot generál. Mivel $\mathbf{A}^{(k+1)} = \mathbf{M}^{(k+1)}(\mathbf{M}^{(k+1)})^T$, ezért elegendő azt belátni, hogy $\mathbf{M}^{(k+1)}$ invertálható. A feltevés szerint $\mathbf{M}^{(k)}$ pozitív definit, és ezért invertálható. Ha feltesszük, hogy (26) teljesül, akkor $\mathbf{M}^{(k+1)}$ invertálhatóságát könnyen kapjuk a (29) képletből.

---

A (31) formulát Broyden, Flecher, Goldfarb és Shanno vezették be 1970-ben, ezért **BFGS-iterációnak** nevezzük. Ez a jelenleg ismert legjobb iterációs formula a Hesse-mátrix közelítésére. Az iteráció kezdeti mátrixának vagy $f''(\mathbf{p}^{(0)})$-t vagy ennek egy másodrendű differencia közelítését célszerű használni. Ha $\mathbf{p}^{(0)}$ elegendően közel van $\mathbf{p}$-hez, és $f''(\mathbf{p})$ pozitív definit, akkor $f''(\mathbf{p}^{(0)})$, és ezért $\mathbf{A}^{(0)}$ is az lesz.

---

Végül vizsgáljuk meg, hogy a (26) feltétel milyen megszorítást jelent. A Lagrange-féle középértéktételt és a (20), (21) egyenleteket alkalmazva kapjuk, hogy

$$\begin{aligned}
(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)} &= \big(f'(\mathbf{p}^{(k+1)}) - f'(\mathbf{p}^{(k)})\big)^T (\mathbf{p}^{(k+1)} - \mathbf{p}^{(k)}) \\
&= \sum_{i=1}^{n} \left( \frac{\partial f_i(\mathbf{p}^{(k+1)})}{\partial x_i} - \frac{\partial f_i(\mathbf{p}^{(k)})}{\partial x_i} \right)(p_i^{(k+1)} - p_i^{(k)}) \\
&= \sum_{i=1}^{n} \left( \sum_{j=1}^{n} \frac{\partial^2 f_i(\xi^{(k,i)})}{\partial x_i\, \partial x_j}(p_j^{(k+1)} - p_j^{(k)}) \right)(p_i^{(k+1)} - p_i^{(k)}).
\end{aligned}$$

Ha a $\mathbf{p}^{(k)}$ iteráltak elegendően közel maradnak $\mathbf{p}$-hez az iteráció közben, akkor $\xi^{(k,i)}$ is $\mathbf{p}$ közelében marad, és ezért $f''$ folytonossága miatt

$$\begin{aligned}
(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)} &\approx \sum_{i=1}^{n} \left( \sum_{j=1}^{n} \frac{\partial^2 f_i(\mathbf{p})}{\partial x_i\, \partial x_j}(p_j^{(k+1)} - p_j^{(k)}) \right)(p_i^{(k+1)} - p_i^{(k)}) \\
&= (\mathbf{p}^{(k+1)} - \mathbf{p}^{(k)})^T f''(\mathbf{p})(\mathbf{p}^{(k+1)} - \mathbf{p}^{(k)}),
\end{aligned}$$

ami pozitív, hiszen $f''(\mathbf{p})$ pozitív definit.

---

Ez a feltétel tehát, ha a sorozat $\mathbf{p}$-hez tart, $\mathbf{p}$ közelében teljesülni fog. Természetesen ha (26) nem teljesül, akkor is definiálható a (31) iteráció, csak ekkor $\mathbf{A}^{(k+1)}$ pozitív szemidefinit lesz, nem pozitív definit.

> **Tétel.** *Legyen $f \in C^3$, $f'(\mathbf{p}) = 0$, $f''(\mathbf{p})$ pozitív definit. Ekkor létezik olyan $\varepsilon, \delta > 0$, hogy a (19)–(21), (31) iteráció definiált minden $k$-ra, és szuperlineárisan konvergál $\mathbf{p}$-hez, ha $\|\mathbf{p}^{(0)} - \mathbf{p}\|_2 < \varepsilon$ és $\|\mathbf{A}^{(0)} - f''(\mathbf{p})\|_2 < \delta$.*

---

> **Példa.** A BFGS-iterációval kaptuk az alábbi táblázatban szereplő sorozatot az $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ függvényre. Ugyanabból a kezdőértékekből indítottuk a módszert, mint az előző példában.

*A (18) kvázi-Newton módszer BFGS-iterációval*

| $k$ | $\mathbf{p}^{(k)}$ | $f(\mathbf{p}^{(k)})$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_2$ | $\dfrac{\|\mathbf{p}^{(k)} - \mathbf{p}\|_2}{\|\mathbf{p}^{(k-1)} - \mathbf{p}\|_2}$ |
|----|------|------|------|------|
| 0 | ( 2.00000000, 2.00000000) | 2.00000e+00 | 1.80277564 | |
| 1 | ( 1.28952043, 0.56127886) | 4.59574e-01 | 0.29593441 | 0.16415488 |
| 2 | ( 1.23976784, 0.70438005) | 1.31429e-01 | 0.31505527 | 1.06461181 |
| 3 | ( 1.02721672, 0.49403232) | 5.98519e-03 | 0.02786330 | 0.08843939 |
| 4 | ( 1.00995636, 0.51197836) | 2.13820e-04 | 0.01557595 | 0.55901316 |
| 5 | ( 0.99954439, 0.49921815) | 8.41172e-07 | 0.00090492 | 0.05809714 |
| 6 | ( 1.00000534, 0.50000495) | 5.76547e-11 | 0.00000728 | 0.00804964 |
| 7 | ( 1.00000005, 0.50000002) | 9.15800e-15 | 0.00000005 | 0.00708494 |
| 8 | ( 1.00000000, 0.50000000) | 8.60000e-19 | 0.00000000 | 0.01827989 |

---

Teljes indukcióval ellenőrizhető, hogy a BFGS-módszerrel képzett $\mathbf{A}^{(k)}$ mátrixok $\mathbf{B}^{(k)} := (\mathbf{A}^{(k)})^{-1}$ inverzét a

$$\begin{aligned}
\mathbf{B}^{(k+1)} &= \mathbf{B}^{(k)} + \left( 1 + \frac{(\mathbf{y}^{(k)})^T \mathbf{B}^{(k)} \mathbf{y}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{y}^{(k)}} \right) \frac{\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T}{(\mathbf{s}^{(k)})^T \mathbf{y}^{(k)}} \\
&\quad - \frac{\mathbf{s}^{(k)}(\mathbf{y}^{(k)})^T \mathbf{B}^{(k)} + \mathbf{B}^{(k)}\mathbf{y}^{(k)}(\mathbf{s}^{(k)})^T}{(\mathbf{s}^{(k)})^T \mathbf{y}^{(k)}}
\end{aligned} \tag{32}$$

rekurzív képlettel is kiszámíthatjuk. Ezt az összefüggést használva a (19) egyenlet helyettesíthető az

$$\mathbf{s}^{(k)} = -\mathbf{B}^{(k)} f'(\mathbf{p}^{(k)}) \tag{33}$$

egyenlettel, és így a módszer alkalmazásakor nincs szükség lineáris egyenletrendszer megoldására vagy mátrix invertálásra.

---

A BFGS-iteráció levezetéséhez hasonlóan kaphatjuk a DFP-iteráció képletét. Újra $\mathbf{A}^{(k+1)} = \mathbf{M}^{(k+1)}(\mathbf{M}^{(k+1)})^T$ alakban keressük a módosított Hesse-közelítést, de a (27)–(28) szelő egyenletek helyett most az azzal ekvivalens

$$\begin{aligned}
(\mathbf{M}^{(k+1)})^{-1} \mathbf{y}^{(k)} &= \mathbf{v}^{(k)} \\
\big((\mathbf{M}^{(k+1)})^T\big)^{-1} \mathbf{v}^{(k)} &= \mathbf{s}^{(k)}
\end{aligned}$$

egyenletekből indulunk ki. Ennek megoldását

$$\big(\mathbf{M}^{(k+1)}\big)^{-1} = \big(\mathbf{M}^{(k)}\big)^{-1} + \frac{(\mathbf{s}^{(k)} - (\mathbf{M}^{(k)})^{-1}\mathbf{v}^{(k)})(\mathbf{v}^{(k)})^T}{\|\mathbf{v}^{(k)}\|_2^2}$$

alakban keresve kapjuk, hogy

$$\mathbf{v}^{(k)} = \left( \frac{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}}{(\mathbf{y}^{(k)})^T (\mathbf{A}^{(k)})^{-1} \mathbf{y}^{(k)}} \right)^{1/2} (\mathbf{M}^{(k)})^{-1} \mathbf{y}^{(k)},$$

feltéve, hogy a (26) teljesül.

---

Ebből kiszámítható, hogy

$$\begin{aligned}
\mathbf{A}^{(k+1)} &= \mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{y}^{(k)})^T + \mathbf{y}^{(k)}(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})^T}{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}} \\
&\quad - \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})^T \mathbf{s}^{(k)}}{((\mathbf{y}^{(k)})^T \mathbf{s}^{(k)})^2} \mathbf{y}^{(k)}(\mathbf{y}^{(k)})^T.
\end{aligned} \tag{34}$$

Ezt a formulát **DFP-iterációnak** nevezzük felfedezői után: Davidon (1959) és Flecher, Powell (1963).

Ellenőrizhető, hogy a DFP-iterációval generált $\mathbf{A}^{(k)}$ mátrix inverze kiszámítható a következő rekurzív módon:

$$(\mathbf{A}^{(k+1)})^{-1} = (\mathbf{A}^{(k)})^{-1} + \frac{\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T}{(\mathbf{s}^{(k)})^T \mathbf{y}^{(k)}} - \frac{(\mathbf{A}^{(k)})^{-1} \mathbf{y}^{(k)}(\mathbf{y}^{(k)})^T (\mathbf{A}^{(k)})^{-1}}{(\mathbf{y}^{(k)})^T (\mathbf{A}^{(k)})^{-1} \mathbf{y}^{(k)}}. \tag{35}$$

---

> **Példa.** A DFP-iterációt vizsgáltuk a korábbi feladatra. Ez a módszer is a BFGS-iterációhoz hasonlóan gyorsan konvergál.

*A (18) kvázi-Newton módszer DFP-iterációval*

| $k$ | $\mathbf{p}^{(k)}$ | $f(\mathbf{p}^{(k)})$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_2$ | $\dfrac{\|\mathbf{p}^{(k)} - \mathbf{p}\|_2}{\|\mathbf{p}^{(k-1)} - \mathbf{p}\|_2}$ |
|----|------|------|------|------|
| 0 | ( 2.00000000, 2.00000000) | 2.00000e+00 | 1.80277564 | |
| 1 | ( 1.28952043, 0.56127886) | 4.59574e-01 | 0.29593441 | 0.16415488 |
| 2 | ( 1.25682024, 0.70394625) | 1.61396e-01 | 0.32794924 | 1.10818219 |
| 3 | ( 1.09891338, 0.59229507) | 2.00977e-02 | 0.13528576 | 0.41252041 |
| 4 | ( 1.01148073, 0.50204318) | 6.24877e-04 | 0.01166112 | 0.08619621 |
| 5 | ( 1.00103666, 0.50022718) | 4.77384e-06 | 0.00106126 | 0.09100838 |
| 6 | ( 1.00001771, 0.50001111) | 8.01068e-10 | 0.00002090 | 0.01969409 |
| 7 | ( 0.99999976, 0.49999958) | 2.45621e-13 | 0.00000049 | 0.02332123 |
| 8 | ( 1.00000001, 0.50000002) | 4.22000e-16 | 0.00000002 | 0.03601757 |

---

*Ferenc Hartung — Numerikus analízis 8. Szélsőértékszámítás — Pannon Egyetem*
