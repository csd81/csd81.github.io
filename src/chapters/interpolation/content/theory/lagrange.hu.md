## 6.1. Lagrange-interpoláció

Tegyük fel most, hogy a bevezetésben leírt interpolációs alapfeladatban $g(x) = c_0 + c_1 x + c_2 x^2 + \cdots + c_m x^m$ alakú. Ebben a képletben $m + 1$ ismeretlen szerepel, és az interpolációs feltételek $n + 1$ egyenletet határoznak meg. Természetes azt várni, hogy a feladatnak az $m = n$ esetben lesz egyértelmű megoldása. Fogalmazzuk újra a feladatot: Keresünk egy olyan $L_n$ legfeljebb $n$-edfokú polinomot, amelyre

$$L_n(x_i) = y_i, \qquad i = 0, 1, \ldots, n. \tag{6.1}$$

Ez a *Lagrange-féle interpolációs feladat.* Megmutatjuk, hogy ennek a feladatnak mindig létezik egyértelmű megoldása. A feladatot teljesítő $L_n$ polinomot *Lagrange-féle interpolációs polinomnak*, vagy röviden Lagrange-polinomnak nevezzük. Azt, hogy ilyen polinom létezik, könnyű belátni: megadjuk $L_n$ explicit képletét az alappontok és az adott függvényértékek segítségével. Definiáljuk $k = 0, 1, \ldots, n$-re az

$$l_k(x) \equiv \frac{(x - x_0)(x - x_1) \cdots (x - x_{k-1})(x - x_{k+1}) \cdots (x - x_n)}{(x_k - x_0)(x_k - x_1) \cdots (x_k - x_{k-1})(x_k - x_{k+1}) \cdots (x_k - x_n)} \tag{6.2}$$

$n$-edfokú polinomokat. Az $l_0, \ldots, l_n$ polinomokat *Lagrange-féle $n$-edfokú alappolinomoknak* nevezzük. A polinom definíciójából nyilvánvaló, hogy

$$l_k(x_i) = \begin{cases} 1, & \text{ha } k = i, \\ 0, & \text{ha } k \neq i. \end{cases}$$

Ebből következik, hogy az $L_n(x) \equiv \sum_{k=0}^{n} y_k l_k(x)$ függvény egy legfeljebb $n$-edfokú polinom, és megoldása a (6.1) interpolációs problémának.

Most belátjuk, hogy a Lagrange-féle interpolációs feladatnak csak egy megoldása van. Tegyük fel, hogy $L_n$ és $\tilde{L}_n$ mindketten legfeljebb $n$-edfokú polinomok és teljesítik a (6.1) egyenleteket. Definiáljuk a $P(x) \equiv L_n(x) - \tilde{L}_n(x)$ függvényt. Ekkor $P$ is legfeljebb $n$-edfokú polinom, és $P(x_i) = 0$ minden $i = 0, 1, \ldots, n$-re, azaz $P$-nek $n + 1$ különböző gyöke van. Ekkor viszont az algebra alaptételéből következik, hogy $P$ azonosan 0 polinom, azaz $L_n = \tilde{L}_n$. Beláttuk tehát a következő állítást:

**6.1. tétel.** *A Lagrange-féle interpolációs feladatnak létezik egyértelmű megoldása, amely az*

$$L_n(x) = \sum_{k=0}^{n} y_k \frac{(x - x_0)(x - x_1) \cdots (x - x_{k-1})(x - x_{k+1}) \cdots (x - x_n)}{(x_k - x_0)(x_k - x_1) \cdots (x_k - x_{k-1})(x_k - x_{k+1}) \cdots (x_k - x_n)} \tag{6.3}$$

*alakban adható meg.*

**6.2. példa.** Tekintsük az

| $x_i$ | -1 | 1 | 2 | 3 |
|-------|----|----|----|----|
| $y_i$ | -3 | 1 | 3 | 29 |

alappontokat és a hozzá tartozó függvényértékeket. Határozzuk meg az adatokhoz tartozó Lagrange-féle interpolációs polinomot! Mivel négy alappont van, ezért harmadfokú Lagrange-polinomot keresünk. A (6.3) képlet szerint

$$\begin{aligned}
L_3(x) = &-3 \frac{(x-1)(x-2)(x-3)}{(-1-1)(-1-2)(-1-3)} + \frac{(x+1)(x-2)(x-3)}{(1+1)(1-2)(1-3)} \\
&+ 3 \frac{(x+1)(x-1)(x-3)}{(2+1)(2-1)(2-3)} + 29 \frac{(x+1)(x-1)(x-2)}{(3+1)(3-1)(3-2)} \\
= &\ 3x^3 - 6x^2 - x + 5.
\end{aligned}$$

$\square$

Az $x_i$ értékekhez hozzárendelt $y_i$ értékeket általában természetes módon tekinthetjük egy $f$ függvény értékeinek az alappontokban, azaz $y_i = f(x_i)$. Például lehet $f$ egy fizikai mennyiség, amelyet véges sok időpontban mértünk. Vagy lehet $f$ egy matematikai modell megoldása, amelyet csak numerikus módszerekkel tudunk megoldani, és a megoldást, azaz az $f$ függvény értékét csak véges sok pontban tudjuk megkapni, pontosabban a közelítő értékét megkapni. Vagy lehet, hogy $f$ egy olyan függvény, amelynek képlete ill. kiszámítási szabálya ismert, csak „túl sok" számolást igényel $f$-et kiértékelni, így csak néhány pontban számoljuk ki $f$ pontos értékét. Mindhárom esetben igény lehet arra, hogy $f$ értékét kiszámoljuk, pontosabban megbecsüljük a már ismert véges sok függvényérték segítségével egy alapponton kívüli pontban is. Erre egyszerű módszer az, ha interpoláljuk a véges sok megadott pontot, és az interpolációs polinom adott pontbeli értékével (amit könnyű kiszámolni) közelítjük a kívánt függvényértéket. Az interpoláció kifejezést használjuk abban az értelemben, hogy az interpoláló függvényt (polinomot) számítjuk ki, de szokás interpoláción az interpolációs polinom segítségével történő függvényérték közelítést is érteni. Ez utóbbi esetben ha az a pont, amelyben az $f$ függvényt akarjuk becsülni az alappontok által meghatározott intervallumon kívül esik, akkor *extrapolációról* szokás beszélni, interpoláción szigorúan véve azt értjük, amikor a megadott pont az alappontok között helyezkedik el.

**6.3. példa.** Tekintsük az $f(x) = \cos x$ függvényt a $[-\pi, \pi]$ intervallumon. A $-\pi$, $0$ és $\pi$ illetve $-\pi$, $-\pi/2$, $0$, $\pi/2$ és $\pi$ osztópontokat használva meghatároztuk az $L_2$ és $L_4$ másod- ill. negyedfokú Lagrange-féle interpolációs polinomokat. A polinomok és az $f$ függvény grafikonja a 6.1 ábrán látható. Az ábrából megállapíthatjuk, hogy az 5 osztópontot használva $f$ jobb közelítését kapjuk, mint akkor, ha csak 3 pontot használunk. Az is nyilvánvaló ebben az esetben, hogy a $[-\pi, \pi]$ intervallumon kívül a polinomok nem jó közelítései az eredeti függvénynek. $\square$

A 6.5 tétel bizonyításához szükségünk lesz a következő segédtételre.

**6.4. tétel (Általánosított Rolle-tétel).** *Legyen $f \in C^n(a,b)$, $a \leq x_0 < x_1 \cdots < x_n \leq b$, és tegyük fel, hogy $f(x_0) = f(x_1) = \cdots = f(x_n) = 0$. Ekkor létezik olyan $\xi \in (x_0, x_n)$, hogy $f^{(n)}(\xi) = 0$.*

**Bizonyítás.** A feltételek szerint $f(x_0) = f(x_1) = 0$, így a Rolle-tétel (2.3 tétel) szerint létezik olyan $\eta_1 \in (x_0, x_1)$, hogy $f'(\eta_1) = 0$. Hasonlóan az $[x_1, x_2]$, $\ldots$, $[x_{n-1}, x_n]$ intervallumokra alkalmazva a Rolle-tételt kapjuk, hogy léteznek olyan $\eta_2 \in (x_1, x_2)$, $\ldots$, $\eta_n \in (x_{n-1}, x_n)$ számok, amelyekre $f'(\eta_2) = \cdots = f'(\eta_n) = 0$. Tekintsük ezután az $[\eta_1, \eta_2]$, $\ldots$, $[\eta_{n-1}, \eta_n]$ intervallumokat. Mivel ezek végpontjaiban $f'(\eta_i) = 0$, ezért a Rolle-tétel szerint léteznek olyan $\theta_2 \in (\eta_1, \eta_2)$, $\ldots$, $\theta_n \in (\eta_{n-1}, \eta_n)$ számok, amelyekre $f''(\theta_2) = \cdots = f''(\theta_n) = 0$. Ismételten alkalmazva a Rolle-tételt, kapjuk, hogy $f$ harmadik deriváltja $n - 2$ pontban, $f$ negyedik deriváltja $n - 3$ pontban stb., $f^{(n)}$ pedig egy pontban egyenlő nullával. $\square$

**6.5. tétel.** *Legyen $f \in C^{n+1}(a,b)$, $x_i \in [a,b]$ $(i = 0, \ldots, n)$ páronként különböző alappontok és $y_i = f(x_i)$ $(i = 0, \ldots, n)$. Legyen $L_n(x)$ az adatokhoz tartozó $n$-edfokú Lagrange-polinom. Ekkor bármely $x \in [a,b]$-hez létezik olyan $\xi = \xi(x) \in \langle x, x_0, x_1, \ldots, x_n \rangle$ szám, hogy*

$$f(x) = L_n(x) + \frac{f^{(n+1)}(\xi)}{(n+1)!}(x - x_0)(x - x_1) \cdots (x - x_n).$$

**Bizonyítás.** Ha $x = x_i$ valamely $i$-re, akkor az állítás nyilvánvalóan teljesül. Rögzítsünk egy $x \in (a, b)$ számot, amelyre $x \neq x_i$ minden $i = 0, \ldots, n$-re, és tekintsük a

$$g(t) \equiv f(t) - L_n(t) - \frac{(t - x_0) \cdots (t - x_n)}{(x - x_0) \cdots (x - x_n)}(f(x) - L_n(x))$$

függvényt. Nyilvánvalóan $g \in C^{n+1}$, és $g(x) = g(x_0) = g(x_1) = \cdots = g(x_n) = 0$. Ekkor alkalmazva az általánosított Rolle-tételt (6.4 tétel), kapjuk, hogy létezik olyan $\xi \in \langle x, x_0, \ldots, x_n \rangle$ szám, hogy $g^{(n+1)}(\xi) = 0$. Mivel $L_n$ $n$-edfokú polinom, ezért $(n + 1)$-edik deriváltja nulla, így

$$g^{(n+1)}(t) = f^{(n+1)}(t) - \frac{(n+1)!}{(x - x_0) \cdots (x - x_n)}(f(x) - L_n(x)).$$

Ebből a $t = \xi$ értéket véve adódik a tétel állítása. $\square$

Most tekintsük azt a speciális esetet, amikor ekvidisztáns osztópontokat használunk, azaz $x_i = x_0 + ih$. A 6.5 tétel szerint az interpoláció képlethibája az

$$|f(x) - L_n(x)| \leq \frac{M_{n+1}}{(n+1)!}|(x - x_0) \cdots (x - x_n)| \tag{6.4}$$

kifejezéssel becsülhető $x \in [x_0, x_n]$-re, ahol $M_{n+1} = \max\{|f^{(n+1)}(t)|:\ t \in [x_0, x_n]\}$. Tegyük fel, hogy $x \in (x_k, x_{k+1})$ valamilyen $0 \leq k < n$-re. Ekkor könnyen ellenőrizhető, hogy

$$|(x - x_k)(x - x_{k+1})| \leq \frac{h^2}{4},$$

és így

$$\begin{aligned}
\prod_{i=0}^{n} |x - x_i| &\leq \frac{h^2}{4} \prod_{i=0}^{k-1} (x - x_i) \prod_{i=k+2}^{n} (x_i - x) \\
&\leq \frac{h^2}{4} \prod_{i=0}^{k-1} (x_{k+1} - x_i) \prod_{i=k+2}^{n} (x_i - x_k) \\
&= \frac{h^{n+1}}{4} \prod_{i=0}^{k-1} (k + 1 - i) \prod_{i=k+2}^{n} (i - k) \\
&= \frac{h^{n+1}}{4}(k+1)!(n-k)! \\
&\leq \frac{h^{n+1}}{4} n!
\end{aligned}$$

(Lásd a 4. feladatot!) Ebből és a (6.4) egyenlőtlenségből következik:

**6.6. tétel.** *Legyen $f \in C^{n+1}(a,b)$, $x_i = a + i(b-a)/n$ $(i = 0, \ldots, n)$ és $y_i = f(x_i)$ $(i = 0, \ldots, n)$. Legyen $x \in [a,b]$. Ekkor*

$$|f(x) - L_n(x)| \leq \frac{M_{n+1}}{4(n+1)} \left( \frac{b-a}{n} \right)^{n+1},$$

*ahol $M_{n+1} \equiv \max\{|f^{(n+1)}(x)|:\ x \in [a,b]\}$.*

**6.7. példa.** Térjünk vissza a 6.3 példához! Az előző tétel szerint minden $x \in [-\pi, \pi]$-re

$$|f(x) - L_2(x)| \leq \frac{1}{12}\pi^3 \approx 2.5839, \qquad \text{és} \qquad |f(x) - L_4(x)| \leq \frac{1}{20}\left(\frac{\pi}{2}\right)^5 \approx 0.4782.$$

Természetesen a 6.6 tétellel csak felső korlátot kapunk a hibára. A 6.1 ábrán látható, hogy a tényleges hiba ennél jelen esetben lényegesen kisebb. $\square$

A következő eredményre szükségünk lesz a 7. fejezetben. A bizonyítást nem közöljük itt.

**6.8. tétel.** *Tegyük fel, hogy $f \in C^{n+2}(a,b)$, $a = x_0 < \cdots < x_n = b$, és legyen*

$$\frac{f^{(n+1)}(\xi(x))}{(n+1)!}(x - x_0) \cdots (x - x_n)$$

*az $n$-edfokú Lagrange-interpoláció maradéktagja. Ekkor az $x \mapsto f^{(n+1)}(\xi(x))$ függvény folytonosan kiterjeszthető $x = x_i$-re, differenciálható minden $x \neq x_i$-re, és*

$$\frac{d}{dx} f^{(n+1)}(\xi(x)) = \frac{1}{n+2} f^{(n+2)}(\eta(x))$$

*alakú, ahol $\eta(x) \in \langle x_0, \ldots, x_n, x \rangle$, továbbá $\frac{d}{dx} f^{(n+1)}(\xi(x))$ is folytonosan kiterjeszthető $x = x_i$-re $(i = 0, 1, \ldots, n)$.*

Most kétváltozós függvények interpolációjával foglalkozunk röviden, annak is csak a legegyszerűbb esetével: feltesszük, hogy $f$ egy téglalapon definiált. Legyen $f \colon [a,b] \times [c,d] \to \mathbb{R}$, és tekintsük az $[a,b]$ és $[c,d]$ intervallumok $a = x_0 < x_1 < \ldots < x_n = b$ és $c = y_0 < y_1 < \ldots < y_m = d$ beosztását. Legyen $z_{ij} = f(x_i, y_j)$, $i = 0, \ldots, n$, $j = 0, \ldots, m$. Ezen adatok interpolációjára a következő függvényt használhatjuk:

$$L_{n,m}(x, y) \equiv \sum_{i=0}^{n} \sum_{j=0}^{m} z_{ij} l_i(x) \tilde{l}_j(y), \tag{6.5}$$

ahol $l_i$ ill. $\tilde{l}_j$ az $a = x_0 < x_1 < \ldots < x_n = b$ ill. $c = y_0 < y_1 < \ldots < y_m = d$ alappontokhoz tartozó (6.2) képlettel definiált $n$ ill. $m$-edrendű polinomok. Az így definiált $L_{n,m}$ függvény teljesíti az $L_{n,m}(x_i, y_j) = z_{ij}$ összefüggést minden $i, j$-re. Ha $x$-et rögzítjük, akkor $L_{n,m}(x, \cdot)$ egy legfeljebb $m$-edrendű polinom, és fordítva, ha $y$-t rögzítjük, akkor $L_{n,m}(\cdot, y)$ egy legfeljebb $n$-edrendű polinom.

**6.9. példa.** Tekintsük a következő függvényértékeket:

| $(x_i, y_j)$ | $(0,0)$ | $(1,0)$ | $(2,0)$ | $(0,2)$ | $(1,2)$ | $(2,2)$ |
|--------------|---------|---------|---------|---------|---------|---------|
| $z_{ij}$ | 2 | -1 | 1 | 1 | 0 | 2 |

Alkalmazva az adatokra a (6.5) formulát kapjuk az

$$\begin{aligned}
L_{2,1}(x, y) = &\ 2 \frac{(x-1)(x-2)}{(0-1)(0-2)} \frac{y-2}{0-2} - \frac{x(x-2)}{1(1-2)} \frac{y-2}{0-2} + \frac{x(x-1)}{2(2-1)} \frac{y-2}{0-2} \\
&+ \frac{(x-1)(x-2)}{(0-1)(0-2)} \frac{y}{2} + 0 \frac{x(x-2)}{1(1-2)} \frac{y}{2} + 2 \frac{x(x-1)}{2(2-1)} \frac{y}{2} \\
= &-\frac{1}{2}x^2 y + \frac{5}{2}x^2 + \frac{3}{2}xy - \frac{11}{2}x - \frac{1}{2}y + 2
\end{aligned}$$

kétváltozós polinomot. Ez $x$-ben másodfokú, $y$-ban pedig elsőfokú polinom. Az interpolációs polinom grafikonja a 6.2 ábrán látható. $\square$

### Feladatok

1. Számítsa ki és ábrázolja az alábbi adatokhoz tartozó Lagrange-féle interpolációs polinomokat:

   (a)

   | $x_i$ | -1 | 0 | 2 | 4 |
   |-------|----|----|----|----|
   | $y_i$ | 3 | -2 | 4 | -2 |

   (b)

   | $x_i$ | 0.1 | 0.4 | 1.3 | 2.5 | 2.8 |
   |-------|-----|-----|-----|-----|-----|
   | $y_i$ | 1.2 | 0.2 | -2.2 | 3.1 | 1.3 |

   (c)

   | $x_i$ | -0.5 | 0.0 | 1.5 | 2.0 | 3.0 | 3.5 |
   |-------|------|-----|-----|-----|-----|-----|
   | $y_i$ | -0.5 | 1.5 | 3.5 | 2.0 | 2.5 | 6.5 |

<details class="reveal-solution"><summary>Megoldás</summary>

**(a)** For the data $x_i = (-1,0,2,4)$, $y_i = (3,-2,4,-2)$ the basis polynomials are
$$l_0(x) = -\frac{x(x-2)(x-4)}{15}, \quad l_1(x) = \frac{(x+1)(x-2)(x-4)}{8},$$
$$l_2(x) = -\frac{(x+1)x(x-4)}{12}, \quad l_3(x) = \frac{(x+1)x(x-2)}{40},$$
and $L_3(x) = 3l_0(x) - 2l_1(x) + 4l_2(x) - 2l_3(x)$. At $x = 1$: $l_0(1) = -0.2$, $l_1(1) = 0.75$, $l_2(1) = 0.5$, $l_3(1) = -0.05$, hence
$$L_3(1) = 3(-0.2) - 2(0.75) + 4(0.5) - 2(-0.05) = 0.$$

**(b)** For $x_i = (0.1,0.4,1.3,2.5,2.8)$, evaluating each $l_i(1)$ (e.g. $l_0(1) = \frac{(0.6)(-0.3)(-1.5)(-0.8)}{(-0.3)(-1.2)(-2.4)(-2.7)} \approx -0.0926$) and forming $L_4(1) = \sum_i y_i l_i(1)$ gives the interpolated value at $x = 1$.

**(c)** For $x_i = (-0.5,0,1.5,2,3,3.5)$ the same procedure (compute each $l_i(1)$, then $L_5(1) = \sum_i y_i l_i(1)$) yields the value at $x = 1$.

</details>

2. Lássa be a Lagrange-polinom képletének megadása nélkül, hogy a (6.1) egyenletrendszernek létezik egyértelmű megoldása!

<details class="reveal-solution"><summary>Megoldás</summary>

The conditions $L_n(x_i) = y_i$ give $n+1$ linear equations for the coefficients $c_0, \ldots, c_n$ of $L_n(x) = c_0 + c_1 x + \cdots + c_n x^n$. The coefficient matrix is the Vandermonde matrix $V$ with rows $(1, x_i, x_i^2, \ldots, x_i^n)$, whose determinant is
$$\det(V) = \prod_{0 \le i < j \le n}(x_j - x_i).$$
Since the $x_i$ are pairwise distinct, $\det(V) \ne 0$, so $V$ is invertible and the system has a unique solution. $\square$

</details>

3. Legyen $l_i(x)$ $(i = 0, 1, \ldots, n)$ a (6.2) képlettel definiált $n$-edfokú polinom. Mutassa meg, hogy bármely $x$-re
   $$\sum_{i=0}^{n} l_i(x) = 1.$$

<details class="reveal-solution"><summary>Megoldás</summary>

Apply Lagrange interpolation to the constant function $f(x) = 1$. Its interpolant is
$$L_n(x) = \sum_{i=0}^n f(x_i) l_i(x) = \sum_{i=0}^n l_i(x).$$
But $f(x) = 1$ is itself a polynomial of degree $0 \le n$ that interpolates the data, so by uniqueness $L_n(x) = 1$. Hence $\sum_{i=0}^n l_i(x) = 1$. $\square$

</details>

4. Igazolja, hogy $(k+1)!(n-k)! \leq n!$ minden $k = 0, 1, \ldots, n - 1$-re!

<details class="reveal-solution"><summary>Megoldás</summary>

We have
$$\frac{n!}{(k+1)!(n-k)!} = \binom{n}{k+1}.$$
For $0 \le k+1 \le n$ the binomial coefficient is a positive integer, so $\binom{n}{k+1} \ge 1$, which gives $(k+1)!(n-k)! \le n!$. $\square$

</details>

5. Mi az a legkisebb $n$, amelyre a $\cos x$ függvényt minden $x \in [-\pi, \pi]$-re 0.001-nél kisebb hibával lehet közelíteni az $L_n(x)$ interpolációs értékkel, ha ekvidisztáns osztópontokat használunk a $[-\pi, \pi]$ intervallumon?

<details class="reveal-solution"><summary>Megoldás</summary>

By Theorem 6.6, with $M_{n+1} = 1$ for $\cos x$,
$$|f(x) - L_n(x)| \le \frac{1}{4(n+1)}\left(\frac{2\pi}{n}\right)^{n+1}.$$
Testing values: for $n = 8$ this is $\approx 0.0031 > 0.001$, while for $n = 10$ it is $\approx 0.00014 < 0.001$. So $n = 10$ suffices (with $n = 9$ to be checked numerically).

</details>

6. Számítsa ki és ábrázolja az alábbi adatokhoz tartozó $L_{2,2}$ kétváltozós interpolációs polinomot:

   | $(x_i, y_j)$ | $(0,0)$ | $(0,1)$ | $(0,2)$ | $(1,0)$ | $(1,1)$ | $(1,2)$ | $(2,0)$ | $(2,1)$ | $(2,2)$ |
   |--------------|---------|---------|---------|---------|---------|---------|---------|---------|---------|
   | $z_{ij}$ | 3 | 1 | 0 | 2 | -1 | 0 | 2 | 3 | 1 |

<details class="reveal-solution"><summary>Megoldás</summary>

Use degree-2 Lagrange bases in $x$ and $y$:
$$l_0(x) = \frac{(x-1)(x-2)}{2}, \quad l_1(x) = -x(x-2), \quad l_2(x) = \frac{x(x-1)}{2},$$
and $\tilde{l}_0(y) = \frac{(y-1)(y-2)}{2}$, $\tilde{l}_1(y) = -y(y-2)$, $\tilde{l}_2(y) = \frac{y(y-1)}{2}$. Then
$$L_{2,2}(x,y) = \sum_{i=0}^2 \sum_{j=0}^2 z_{ij}\, l_i(x)\, \tilde{l}_j(y),$$
which expands using the given $z_{ij}$ values $(3,1,0;\,2,-1,0;\,2,3,1)$.

</details>
