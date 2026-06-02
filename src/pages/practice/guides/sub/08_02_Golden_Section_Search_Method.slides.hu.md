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
