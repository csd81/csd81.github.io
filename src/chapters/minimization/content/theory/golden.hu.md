## 8.2. Aranymetszés szerinti keresés módszere

Legyen $f\colon [a, b] \to \mathbb{R}$ folytonos, és feltesszük, hogy $f$ *unimodális*, azaz $f$-nek egyértelmű lokális minimuma van $[a, b]$-ben. Ez teljesül pl. ha a függvény konvex az $[a, b]$ intervallumon, de a konvexitás nem szükséges ahhoz, hogy egy függvény unimodális legyen (lásd például a 8.1. ábrán szereplő második és harmadik függvényt). Jelölje $p$ az $f$ függvény minimumhelyét.

Az *aranymetszés szerinti keresés módszernél*, az intervallumfelezés módszeréhez hasonlóan, egyre szűkebb és szűkebb intervallumokra határoljuk be a függvény minimumhelyét: Legyen $a < y < x < b$. Ha $f(x) > f(y)$, akkor $p \in [a, x]$, ellenkező esetben $p \in [y, b]$ teljesül. (Lásd a 8.2. ábrát!) Ezután az $[a, x]$ illetve $[y, b]$ intervallummal folytatjuk az eljárást.

Az $x$ és $y$ pontokat úgy választjuk, hogy az $[a, x]$ és $[y, b]$ intervallum hossza azonos legyen: $x - a = b - y = r(b - a)$ valamely $0 < r < 1$-re. Ekkor

$$x = a + r(b - a), \qquad y = a + (1 - r)(b - a) \tag{8.2}$$

alakú. Az $x > y$ feltételből kapjuk, hogy $0.5 < r < 1$ kell legyen. Jelölje $[a', b']$ a következő intervallumot. Válasszuk az új osztópontokat, $x'$-t és $y'$-t a (8.2) szabály szerint, és $f(x')$ és $f(y')$ összehasonlításával határozzuk meg a következő intervallumot. Még nem definiáltuk $r$-t. Az aranymetszés szerinti keresés módszere úgy választja meg $r$-t, hogy az új $x'$, $y'$ osztópontok közül az egyik egyezzen meg egy előző osztóponttal, azért hogy minden lépésben csak egy új függvényértéket kelljen kiértékelni.

A 8.3. ábrán azt az esetet tüntettük fel, ahol a jobb oldali, $[y, b]$ intervallumba esik a minimumhely. Ekkor azt követeljük meg az osztópontok választásától, hogy $y' = x$ legyen. Ekkor

teljesülnek a következő összefüggések:

$$\begin{aligned}
a + r(b - a) &= y' \\
&= a' + (1 - r)(b' - a') \\
&= y + (1 - r)(b - y) \\
&= a + (1 - r)(b - a) + (1 - r)(b - a - (1 - r)(b - a)),
\end{aligned}$$

és így

$$r = 1 - r + (1 - r)(1 - (1 - r)),$$

amiből

$$r^2 + r - 1 = 0 \tag{8.3}$$

következik. Ennek pozitív megoldása $r = (\sqrt{5} - 1)/2 \approx 0.61834$. Ez az aranymetszés arányossági tényezője: $r$ teljesíti az

$$\frac{r}{1 - r} = \frac{1}{r}$$

egyenlet.

Abban az esetben, amikor az $[a, x]$ intervallumban van a minimumhely, akkor úgy választjuk $x', y'$-t, hogy $x' = y$ legyen. Megmutatható (3. feladat), hogy ez a követelmény is a (8.3) egyenlethez vezet.

---

**8.3. algoritmus. Aranymetszés szerinti keresés módszere**

```
INPUT:    f(x),
          [a, b],
          ε - tolerancia
OUTPUT:   p - a minimumhely közelítése

r ← (√5 − 1)/2
x ← a + r(b − a)
y ← a + (1 − r)(b − a)
fx ← f(x)
fy ← f(y)
while (b − a) > ε do
    if fx > fy do
        b ← x
        x ← y
        fx ← fy
        y ← a + (1 − r)(b − a)
        fy ← f(y)
    else do
        a ← y
        y ← x
        fy ← fx
        x ← a + r(b − a)
        fx ← f(x)
    end do
end do
output((a + b)/2)
```

---

Könnyen igazolható a következő tétel:

**8.4. tétel.** *Legyen $f \in C(a, b)$ unimodális függvény. Ekkor az aranymetszés szerinti keresés módszere konvergál az $f$ függvény minimumhelyéhez.*

Könnyű ellenőrizni, hogy az aranymetszés szerinti keresés módszere $n$ lépése után az intervallum hossza $(b - a)r^n$ lesz. Így a 8.3. algoritmus az $\varepsilon$ tolerancia értéket

$$n \geq \frac{\log \frac{\varepsilon}{b - a}}{\log r} \tag{8.4}$$

lépésben éri el.

**8.5. példa.** Keressük meg az $f(x) = x^2 - 0.8x + 1$ függvény minimumhelyét! Könnyű kiszámolni, hogy a függvény a minimumát a $p = 0.4$ pontban veszi fel. A 8.3. algoritmust alkalmaztuk az adott függvényre a $[-1, 2]$ kezdeti intervallumot és az $\varepsilon = 0.005$ tolerancia értéket használva, amelynek eredménye a 8.1. táblázatban látható. A (8.4) formula szerint $n \geq 13.29337586$ lépés kell az előírt tolerancia eléréséhez. A minimumhely az utolsó lépésben kapott $[0.3977741449, 0.4013328688]$ intervallumban helyezkedik el, a 8.3. algoritmus az intervallum felezőpontját, $0.3995535068$-t adja meg, mint közelítő értéket. $\quad\square$

---

*8.1. táblázat. Aranymetszés szerinti keresés módszere, $f(x) = x^2 - 0.8x + 1$*

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

**Feladatok**

1. Az aranymetszés szerinti keresés módszerét alkalmazva keresse meg az alábbi függvények minimumhelyét az adott intervallumon:

   (a) $f(x) = x^3 - 3x + 1$, $\quad x \in [-1, 2]$, (b) $f(x) = |\cos x|$, $\quad x \in [0, 2]$,

   (c) $f(x) = 1 - 10xe^{-x}$, $\quad x \in [0, 2]$, (d) $f(x) = \cos(x^2 - x)$, $\quad x \in [1, 3]$.

   <details class="reveal-solution"><summary>Megoldás</summary>

   **(a) $f(x) = x^3 - 3x + 1$ on $[-1, 2]$.** First find the true minimum: $f'(x) = 3x^2 - 3 = 0 \Rightarrow x = \pm 1$, and $f''(x) = 6x$, so $f''(1) = 6 > 0$ gives a minimum at $x = 1$ with $f(1) = -1$. Golden section uses $r = (\sqrt5 - 1)/2 \approx 0.618034$. Starting from $a = -1,\ b = 2$: $x = -1 + 0.618(3) = 0.854$, $y = -1 + 0.382(3) = 0.146$, with $f(0.854) = -0.944$, $f(0.146) = 0.562$. Since $f(x) < f(y)$ the minimum is in $[y, b] = [0.146, 2]$; set $a = 0.146$ and reuse $x$ as the new $y$. Continue until the interval is below tolerance. After about 15 iterations $x \approx 1.000$.

   **(b) $f(x) = |\cos x|$ on $[0, 2]$.** This function is NOT unimodal — it has multiple minima ($\cos x = 0$ at $x = \pi/2 \approx 1.57$, where $|\cos x|$ attains its minimum value $0$). Golden section may converge to a local minimum depending on the initial interval.

   **(c) $f(x) = 1 - 10xe^{-x}$ on $[0, 2]$.** $f'(x) = -10e^{-x} + 10xe^{-x} = 10e^{-x}(x - 1) = 0 \Rightarrow x = 1$, and $f''(1) = 10e^{-1} > 0$ gives a minimum at $x = 1$ with $f(1) = 1 - 10/e \approx -2.679$. Golden section converges to $x = 1$.

   **(d) $f(x) = \cos(x^2 - x)$ on $[1, 3]$.** $f'(x) = -\sin(x^2 - x)(2x - 1) = 0$ when $\sin(x^2 - x) = 0$ or $2x - 1 = 0$, i.e. $x^2 - x = n\pi$. There are multiple critical points in $[1, 3]$, so the function is not unimodal.

   </details>

2. Alkalmazza az aranymetszés szerinti keresés módszerét az $f(x) = -1/x^2$ függvényre a $[-1, 1]$ intervallumon! Mit tapasztal?

   <details class="reveal-solution"><summary>Megoldás</summary>

   This function is (1) not defined at $x = 0$, (2) not continuous on $[-1, 1]$, and (3) not unimodal (it tends to $-\infty$ as $x \to 0$). Golden section search will fail or produce meaningless results: it may encounter division by zero, converge to a boundary instead of a minimum, or give different answers depending on the initial points. Lesson: always verify the assumptions (continuity, unimodality) before applying an optimization method.

   </details>

3. Igazolja, hogy ha $[a', b'] = [a, x]$ választáskor az $x' = y$ egyenlet akkor teljesül, ha $r$ megoldása a (8.3) egyenletnek!

   <details class="reveal-solution"><summary>Megoldás</summary>

   After selecting $[a', b'] = [a, x]$ we have $a' = a$ and $b' = x = a + r(b - a)$. The new points are $x' = a' + r(b' - a') = a + r(x - a) = a + r^2(b - a)$ and $y' = a + (1-r)r(b - a)$. We want $x' = y$ where $y = a + (1-r)(b - a)$, i.e. $a + r^2(b - a) = a + (1-r)(b - a)$, hence $r^2 = 1 - r$, that is $r^2 + r - 1 = 0$. Therefore $x' = y$ exactly when $r$ is the golden ratio. $\square$

   </details>

4. Bizonyítsa be a 8.4. tételt!

   <details class="reveal-solution"><summary>Megoldás</summary>

   **Theorem 8.4:** Golden section search converges to the minimum of a unimodal $f \in C[a,b]$. Let $[a_k, b_k]$ be the interval after $k$ steps. Key properties: (1) $[a_{k+1}, b_{k+1}] \subset [a_k, b_k]$ (nested intervals); (2) $b_k - a_k = r^k(b - a) \to 0$ as $k \to \infty$; (3) the minimum point $p \in [a_k, b_k]$ for all $k$ (by unimodality). By Cantor's Intersection Theorem there is a unique $p^*$ with $a_k \to p^*$ and $b_k \to p^*$. Since $p \in [a_k, b_k]$ for all $k$, $|p - p^*| \le b_k - a_k \to 0$, so $p = p^*$. Hence the method converges to the minimum point $p$. $\square$

   </details>

5. Ellenőrizze a (8.4) formulát!

   <details class="reveal-solution"><summary>Megoldás</summary>

   The formula is $n \ge \log(\varepsilon/(b-a)) / \log(r)$. After $n$ steps the interval length is $(b-a)r^n$. We require $(b-a)r^n \le \varepsilon$, i.e. $r^n \le \varepsilon/(b-a)$. Taking logarithms, $n \log(r) \le \log(\varepsilon/(b-a))$. Since $\log(r) < 0$ (because $r < 1$), dividing flips the inequality to give $n \ge \log(\varepsilon/(b-a)) / \log(r)$. $\square$

   </details>
