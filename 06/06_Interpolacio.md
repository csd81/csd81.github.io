# 6. fejezet

# Interpoláció

Adottak $x_0,\ x_1,\ \ldots,\ x_n \in [a,b]$ páronként különböző pontok, ún. alappontok vagy osztópontok, és hozzá tartozó $y_0,\ y_1,\ \ldots,\ y_n$ függvényértékek. Az interpoláció alapfeladata a következő: keresünk olyan, valamely adott függvényosztálybeli $g$ függvényt, amely *interpolálja* a megadott pontokat, azaz teljesíti a

$$g(x_i) = y_i, \qquad i = 0, 1, \ldots, n$$

egyenleteket. Az interpolációs feladat geometriai jelentése az, hogy olyan $g$ függvényt keresünk, amely valamely megadott tulajdonságokkal rendelkezik és a grafikonja átmegy az $(x_i, y_i)$ pontokon.

Ebben a fejezetben először ennek az általános feladatnak elméleti és gyakorlati szempontból talán legfontosabb esetével, a polinom interpolációval foglalkozunk, azaz feltesszük, hogy $g$ polinom. A 6.4 szakaszban ennek az interpolációs feladatnak egy általánosítását, az ún. Hermite-interpolációt vizsgáljuk, ahol nem csak függvényértékeket, hanem derivált értékeket is interpolálunk. Tárgyaljuk továbbá a spline függvényekkel (szakaszonként polinomokkal) történő interpolációt is.

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

![6.1. ábra. A $\cos x$ függvény interpolációja a $-\pi, 0, \pi$ ill. a $-\pi, -\pi/2, 0, \pi/2, \pi$ alappontokat használva](figure_6_1.png)

*6.1. ábra. A $\cos x$ függvény interpolációja a $-\pi, 0, \pi$ ill. a $-\pi, -\pi/2, 0, \pi/2, \pi$ alappontokat használva*

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

![6.2. ábra. Kétváltozós Lagrange-interpoláció](figure_6_2.png)

*6.2. ábra. Kétváltozós Lagrange-interpoláció*

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

2. Lássa be a Lagrange-polinom képletének megadása nélkül, hogy a (6.1) egyenletrendszernek létezik egyértelmű megoldása!

3. Legyen $l_i(x)$ $(i = 0, 1, \ldots, n)$ a (6.2) képlettel definiált $n$-edfokú polinom. Mutassa meg, hogy bármely $x$-re
   $$\sum_{i=0}^{n} l_i(x) = 1.$$

4. Igazolja, hogy $(k+1)!(n-k)! \leq n!$ minden $k = 0, 1, \ldots, n - 1$-re!

5. Mi az a legkisebb $n$, amelyre a $\cos x$ függvényt minden $x \in [-\pi, \pi]$-re 0.001-nél kisebb hibával lehet közelíteni az $L_n(x)$ interpolációs értékkel, ha ekvidisztáns osztópontokat használunk a $[-\pi, \pi]$ intervallumon?

6. Számítsa ki és ábrázolja az alábbi adatokhoz tartozó $L_{2,2}$ kétváltozós interpolációs polinomot:

   | $(x_i, y_j)$ | $(0,0)$ | $(0,1)$ | $(0,2)$ | $(1,0)$ | $(1,1)$ | $(1,2)$ | $(2,0)$ | $(2,1)$ | $(2,2)$ |
   |--------------|---------|---------|---------|---------|---------|---------|---------|---------|---------|
   | $z_{ij}$ | 3 | 1 | 0 | 2 | -1 | 0 | 2 | 3 | 1 |

## 6.2. Osztott differenciák

Adott egy $f \colon [a,b] \to \mathbb{R}$ függvény és $x_i \in [a,b]$ $(i = 0, \ldots, n)$ páronként különböző alappontok. Ekkor az $f$ függvény $x_0$ pontbeli *nulladrendű osztott differenciáján* az $f[x_0] \equiv f(x_0)$ számot értjük. Az $f$ függvény $x_0, x_1$ pontokra felírt *elsőrendű osztott differenciáján* az

$$f[x_0, x_1] \equiv \frac{f[x_1] - f[x_0]}{x_1 - x_0}$$

számot értjük, (azaz $f[x_0, x_1] = \frac{f(x_1) - f(x_0)}{x_1 - x_0}$). Általában pedig, az $f$ függvény $x_0, x_1, \ldots, x_n$ pontokra felírt *$n$-edrendű osztott differenciáján* az

$$f[x_0, x_1, \ldots, x_n] \equiv \frac{f[x_1, x_2, \ldots, x_n] - f[x_0, x_1, \ldots, x_{n-1}]}{x_n - x_0}$$

számot értjük. Megjegyezzük, hogy nem tettük fel, hogy az alappontok növekvő sorrendben rendezettek.

**6.10. tétel.** *Legyenek $x_i$ $(i = 0, 1, \ldots, n)$ páronként különböző alappontok. Ekkor*

$$f[x_0, x_1, \ldots, x_n] = \sum_{i=0}^{n} \frac{f(x_i)}{(x_i - x_0) \cdots (x_i - x_{i-1})(x_i - x_{i+1}) \cdots (x_i - x_n)}.$$

**Bizonyítás.** $n$-szerinti teljes indukcióval bizonyítjuk az állítást. $n = 0$-ra az állítás nyilvánvaló. (Ebben az esetben a nevezőben „üres szorzat" áll, ez definíció szerint 1-gyel egyezik meg.) Tegyük fel, hogy $n$-re teljesül az állítás, és tekintsük $f[x_0, x_1, \ldots, x_{n+1}]$-et. Az osztott differenciák definíciója, az indukciós hipotézis és egy kis számolás alapján:

$$\begin{aligned}
f[x_0, x_1, \ldots, x_{n+1}] &= \frac{f[x_1, x_2, \ldots, x_{n+1}] - f[x_0, x_1, \ldots, x_n]}{x_{n+1} - x_0} \\
&= \frac{1}{x_{n+1} - x_0} \Bigg\{ \sum_{i=1}^{n+1} \frac{f(x_i)}{(x_i - x_1) \cdots (x_i - x_{i-1})(x_i - x_{i+1}) \cdots (x_i - x_{n+1})} \\
&\qquad - \sum_{i=0}^{n} \frac{f(x_i)}{(x_i - x_0) \cdots (x_i - x_{i-1})(x_i - x_{i+1}) \cdots (x_i - x_n)} \Bigg\} \\
&= \frac{1}{x_{n+1} - x_0} \Bigg\{ \frac{f(x_{n+1})}{(x_{n+1} - x_1) \cdots (x_{n+1} - x_n)} - \frac{f(x_0)}{(x_0 - x_1) \cdots (x_0 - x_n)} \\
&\qquad + \sum_{i=1}^{n} \frac{f(x_i)}{(x_i - x_1) \cdots (x_i - x_{i-1})(x_i - x_{i+1}) \cdots (x_i - x_n)} \\
&\qquad \cdot \left( \frac{1}{x_i - x_{n+1}} - \frac{1}{x_i - x_0} \right) \Bigg\} \\
&= \sum_{i=0}^{n+1} \frac{f(x_i)}{(x_i - x_0) \cdots (x_i - x_{i-1})(x_i - x_{i+1}) \cdots (x_i - x_{n+1})},
\end{aligned}$$

amiből, a teljes indukció elve szerint, következik a tétel állítása. $\square$

Az előző tétel állításából következnek:

**6.11. következmény.** *Az osztott differenciák az alappontok sorrendjétől függetlenek.*

**6.12. következmény.** *Ha $f$ folytonos, akkor az osztott differencia az alappontoktól folytonosan függ.*

Tegyük fel, hogy $f$ differenciálható függvény. Az utóbbi következmény szerint az $x_1 \mapsto f[x_0, x_1]$ függvény folytonos ha $x_1 \neq x_0$. Vizsgáljuk meg, hogy létezik-e a $\lim_{x_1 \to x_0} f[x_0, x_1]$ határérték! Az elsőrendű osztott differencia definícióját és $f$ differenciálhatóságát használva

$$\lim_{x_1 \to x_0} f[x_0, x_1] = \lim_{x_1 \to x_0} \frac{f(x_1) - f(x_0)}{x_1 - x_0} = f'(x_0).$$

Ezért az elsőrendű osztott differenciákat egyenlő alappontokra a következőképpen definiáljuk:

$$f[x_0, x_0] \equiv f'(x_0).$$

Ezzel a definícióval az $x_1 \mapsto f[x_0, x_1]$ függvényt folytonosan terjesztettük ki $x_1 = x_0$-ra. Magasabbrendű osztott differenciák egyenlő alappontokra kiterjesztésével a következő szakasz 6. és 7. feladatai foglalkoznak.

### Feladatok

1. Számítsa ki a következő osztott differenciákat:

   (a) $f[x_0, x_1, x_2, x_3]$, ahol $x_i = i$, $f(x) = x^2$,

   (b) $f[x_0, x_1, x_2]$, ahol $x_i = 0.2i$, $f(x) = \sin x$,

   (c) $f[x_0, x_0]$, ahol $x_0 = 0$, $f(x) = \sin x$.

2. Legyen $f \in C^1(a,b)$, és $x_0, x_1 \in (a, b)$, $x_0 \neq x_1$. Bizonyítsa be, hogy létezik olyan $\xi \in \langle x_0, x_1 \rangle$, hogy
   $$f[x_0, x_1] = f'(\xi)!$$

3. Legyen $x_0 < x_1 < x_2 < x_3$ és
   $$P(x) = a_0 + a_1(x - x_0) + a_2(x - x_0)(x - x_1) + a_3(x - x_0)(x - x_1)(x - x_2).$$
   Lássa be, hogy
   $$a_0 = P[x_0], \quad a_1 = P[x_0, x_1], \quad a_2 = P[x_0, x_1, x_2], \quad \text{és} \quad a_3 = P[x_0, x_1, x_2, x_3]!$$

## 6.3. A Lagrange-féle interpolációs polinom Newton-féle alakja

A (6.3) képletnek van egy kellemetlen hátránya: új osztópont felvételekor teljesen újra kell számolni a (6.3) kifejezést. Ezt a hiányosságot kiküszöböli ki a Lagrange-polinom egy másik alakja, az ún. Newton-féle alak. Tegyük fel, hogy $f$ függvényt akarjuk interpolálni, azaz $y_i = f(x_i)$. A Lagrange-féle interpolációs polinom Newton-féle alakjának levezetéséhez induljunk ki az

$$L_n(x) = L_0(x) + (L_1(x) - L_0(x)) + (L_2(x) - L_1(x)) + \cdots + (L_n(x) - L_{n-1}(x))$$

összefüggésből. Definíció szerint $L_0(x) = f(x_0)$ konstans függvény. Vizsgáljuk most az $L_i(x) - L_{i-1}(x)$ különbséget! $L_i - L_{i-1}$ egy legfeljebb $i$-edfokú polinom, és mivel $L_i$ és $L_{i-1}$ is teljesítik az interpolációs egyenletet $x_0$, $\ldots$, $x_{i-1}$-ben, ezért $L_i(x_j) - L_{i-1}(x_j) = f(x_j) - f(x_j) = 0$ $(j = 0, 1, \ldots, i - 1)$. De ekkor az algebra alaptétele szerint $L_i - L_{i-1}$ alakja:

$$L_i(x) - L_{i-1}(x) = a_i(x - x_0)(x - x_1) \cdots (x - x_{i-1}),$$

ahol $a_i \in \mathbb{R}$. Ha ebbe a relációba $x = x_i$-t helyettesítünk és használjuk $L_{i-1}(x_i)$-re a (6.3) képletet, kapjuk, hogy

$$\begin{aligned}
f(x_i) - \sum_{k=0}^{i-1} f(x_k) &\frac{(x_i - x_0) \cdots (x_i - x_{k-1})(x_i - x_{k+1}) \cdots (x_i - x_{i-1})}{(x_k - x_0) \cdots (x_k - x_{k-1})(x_k - x_{k+1}) \cdots (x_k - x_{i-1})} \\
&= a_i(x_i - x_0) \cdots (x_i - x_{i-1}).
\end{aligned}$$

Ebből $a_i$-t kifejezve

$$\begin{aligned}
a_i &= \frac{f(x_i)}{(x_i - x_0) \cdots (x_i - x_{i-1})} - \frac{1}{(x_i - x_0) \cdots (x_i - x_{i-1})} \\
&\qquad \cdot \sum_{k=0}^{i-1} f(x_k) \frac{(x_i - x_0) \cdots (x_i - x_{k-1})(x_i - x_{k+1}) \cdots (x_i - x_{i-1})}{(x_k - x_0) \cdots (x_k - x_{k-1})(x_k - x_{k+1}) \cdots (x_k - x_{i-1})} \\
&= \sum_{k=0}^{i} \frac{f(x_k)}{(x_k - x_0) \cdots (x_k - x_{k-1})(x_k - x_{k+1}) \cdots (x_k - x_i)} \\
&= f[x_0, x_1, \ldots, x_i].
\end{aligned}$$

Összefoglalva az eddigieket, a Lagrange-féle interpolációs polinomot megadhatjuk az

$$\begin{aligned}
L_n(x) = &\ f[x_0] + f[x_0, x_1](x - x_0) + f[x_0, x_1, x_2](x - x_0)(x - x_1) + \cdots \\
&+ f[x_0, x_1, \ldots, x_n](x - x_0)(x - x_1) \cdots (x - x_{n-1}) \tag{6.6}
\end{aligned}$$

képlettel is. Hangsúlyozzuk, hogy ez ugyanaz a polinom, mint (6.3), csak egy másik alakban felírva. A (6.6) formulával definiált polinomot nevezzük *Lagrange-féle interpolációs polinom Newton-féle alakjának* vagy röviden *Newton-polinomnak.*

A (6.6) képletből leolvasható ennek a formulának az előnye a (6.3) képlethez viszonyítva. Először is, új osztópont hozzávételével a képlet kényelmesen bővíthető egy új taggal:

$$L_{n+1}(x) = L_n(x) + f[x_0, x_1, \ldots, x_{n+1}](x - x_0) \cdots (x - x_n).$$

Fontos előny még az is, hogy a (6.6) alakban felírt polinomot könnyen kiértékelhetjük a Horner-elrendezés segítségével. Ebből az alakból rögtön leolvasható a polinom fokszáma is. Ha pl. $f[x_0, x_1, \ldots, x_n] \neq 0$, akkor a polinom $n$-edfokú. A 6.13 algoritmusban megadtuk a Newton-féle interpolációs polinom együtthatóinak, azaz az $a_i = f[x_0, \ldots, x_i]$ értékek kiszámítását, a 6.14 algoritmusban pedig a Newton-polinom kiértékelését Horner-eljárással.

**6.13. algoritmus. A Newton-polinom együtthatóinak generálása**

```
INPUT:   n - az alappontok száma − 1
         x_i, (i = 0, 1, ..., n) - alappontok
         y_i, (i = 0, 1, ..., n) - függvényértékek
OUTPUT:  a_i, (i = 0, 1, ..., n) - a Newton-polinom együtthatói, ahol a_i
                                    az i-edfokú tag együtthatója

for i = 0, 1, ..., n do
    a_i ← y_i
end do
for j = 1, 2, ..., n do
    for i = n, n − 1, ..., j do
        a_i ← (a_i − a_{i−1})/(x_i − x_{i−j})
    end do
end do
output(a_0, a_1, ..., a_n)
```

Megjegyezzük, hogy a 6.13 algoritmust úgy szerveztük, hogy a Newton-polinom felírása közben számolt osztott differenciák közül csak az együtthatókhoz szükségeseket őrizzük meg a számolás végéig.

**6.14. algoritmus. A Newton-polinom kiértékelése**

```
INPUT:   n - az alappontok száma − 1
         x_i, (i = 0, 1, ..., n) - alappontok
         a_i, (i = 0, 1, ..., n) - a Newton-polinom együtthatói
         x - a pont, ahol kiértékeljük a Newton-polinomot
OUTPUT:  y - a Newton-polinom értéke x-ben

y ← a_n
for i = n − 1, n − 2, ..., 0 do
    y ← y(x − x_i) + a_i
end do
output(y)
```

Kézi számoláskor az osztópontokat, a megadott függvényértékeket és a számított osztott differenciákat érdemes a 6.1 táblázatban látható módon egy háromszög alakú táblázatban elrendezni. A táblázat első két oszlopában szereplő számok input adatok, a táblázat többi elemét számoljuk a tőle balra álló és az a fölötti eggyel kisebb rendű osztott differenciák különbségét osztva megfelelő $x_k$ értékek különbségének hányadosaként. A táblázatban a bekeretezett számok fogják adni a (6.6) képletben szereplő együtthatókat.

*6.1. táblázat. Osztott differenciák elrendezése kézi számoláskor*

| $x_0$ | $\boxed{f(x_0)}$ | | | |
|-------|------------------|---|---|---|
| $x_1$ | $f(x_1)$ | $\boxed{f[x_0, x_1]}$ | | |
| $x_2$ | $f(x_2)$ | $f[x_1, x_2]$ | $\boxed{f[x_0, x_1, x_2]}$ | |
| $x_3$ | $f(x_3)$ | $f[x_2, x_3]$ | $f[x_1, x_2, x_3]$ | $\ddots$ |
| $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ | |
| $x_n$ | $f(x_n)$ | $f[x_{n-1}, x_n]$ | $f[x_{n-2}, x_{n-1}, x_n]$ | $\cdots$ $\boxed{f[x_0, x_1, \ldots, x_n]}$ |

**6.15. példa.** Tekintsük újra a 6.2 példát. Adjuk meg $L_3(x)$ Newton-féle alakját, majd számítsuk ki $L_3(0)$-t! Képezzük a Newton-polinom felírásához szükséges osztott differenciák táblázatát:

$$
\begin{array}{rrrrr}
-1 & -3 & & & \\
1 & 1 & 2 & & \\
2 & 3 & 2 & 0 & \\
3 & 29 & 26 & 12 & 3
\end{array}
$$

Ebből kapjuk, hogy

$$L_3(x) = -3 + 2(x + 1) + 3(x + 1)(x - 1)(x - 2),$$

és így $L_3(0) = -3 + 2 \cdot 1 + 3 \cdot 1(-1)(-2) = 5$. Természetesen egyszerűsítve $L_3$ képletét visszakapjuk a 6.2 példában kiszámolt $L_3(x) = 3x^3 - 6x^2 - x + 5$ képletet. $\square$

Most az interpoláció képlethibájával foglalkozunk újra. A 6.1 szakaszban megállapítottuk, hogy a közelítés hibája az $\frac{f^{(n+1)}(\xi)}{(n+1)!}(x - x_0)(x - x_1) \cdots (x - x_n)$ alakban írható fel. Ez a képlet természetesen érvényes a Newton-alakban felírt interpolációs polinomot használva is, de itt megadjuk a képlethiba egy másik alakját.

**6.16. tétel.** *Legyenek $x_i \in (a,b)$ $(i = 0, \ldots, n)$ páronként különböző alappontok és $y_i = f(x_i)$ $(i = 0, \ldots, n)$. Legyen $L_n(x)$ az adatokhoz tartozó $n$-edfokú Lagrange-polinom. Ekkor*

$$f(x) = L_n(x) + f[x_0, x_1, \ldots, x_n, x](x - x_0)(x - x_1) \cdots (x - x_n).$$

**Bizonyítás.** Rögzítsünk egy $x \in (a, b)$ számot amely nem egyezik meg egyik alapponttal sem. (Ha $x = x_i$ valamely $i$-re, akkor az állítás nyilvánvaló.) Vegyük $x$-et az alappontokhoz és rendeljük hozzá az $f(x)$ függvényértéket. Legyen $L_{n+1}$ a kibővített adatokhoz tartozó Lagrange-polinom. A Newton-polinom definíciója szerint

$$L_{n+1}(t) = L_n(t) + f[x_0, x_1, \ldots, x_n, x](t - x_0) \cdots (t - x_n).$$

Ebből $t = x$-et véve következik az állítás, hiszen $f(x) = L_{n+1}(x)$. $\square$

Az interpoláció képlethibájának a 6.16 tételben közölt alakja elsősorban elméleti jelentőségű, hiszen $f[x_0, \ldots, x_n, x]$ kiszámításához $f(x)$ ismerete is kell. Fontos viszont a tétel következménye. Ha összehasonlítjuk az előző tétel állítását a 6.5 tétellel, akkor rögtön kapjuk a következő eredményt:

**6.17. következmény.** *Ha $f \in C^n(a,b)$ és $x_i$ $(i = 0, \ldots, n)$ páronként különböző alappontok, akkor létezik olyan $\xi \in \langle x_0, x_1, \ldots, x_n \rangle$, hogy*

$$f[x_0, x_1, \ldots, x_n] = \frac{1}{n!} f^{(n)}(\xi).$$

### Feladatok

1. Ismételje meg a 6.1 szakasz 1. feladatát a Lagrange-polinom Newton-féle alakját használva!

2. Igazolja, hogy ha $P$ egy $n$-edfokú polinom, akkor
   $$P(x) = \sum_{i=0}^{n} P[x_0, \ldots, x_i] \prod_{k=0}^{i-1} (x - x_k).$$

3. Legyenek $x_0, \ldots, x_n$ páronként különböző számok. Igazolja, hogy ha $P$ egy $n$-edfokú polinom, akkor $P[x_0, \ldots, x_m] = 0$ minden $m > n$-re!

4. Mutassa meg, hogy ha $f(x) = c_0 + c_1 x + \cdots + c_n x^n$, akkor $c_n = f[x_0, x_1, \ldots, x_n]$!

5. Bizonyítsa be, hogy

   $$f[x_0, x_1, \ldots, x_n] = \frac{
   \begin{vmatrix}
   1 & x_0 & x_0^2 & \cdots & x_0^{n-1} & f(x_0) \\
   1 & x_1 & x_1^2 & \cdots & x_1^{n-1} & f(x_1) \\
   \vdots & \vdots & \vdots & & \vdots & \vdots \\
   1 & x_n & x_n^2 & \cdots & x_n^{n-1} & f(x_n)
   \end{vmatrix}
   }{
   \begin{vmatrix}
   1 & x_0 & x_0^2 & \cdots & x_0^{n-1} & x_0^n \\
   1 & x_1 & x_1^2 & \cdots & x_1^{n-1} & x_1^n \\
   \vdots & \vdots & \vdots & & \vdots & \vdots \\
   1 & x_n & x_n^2 & \cdots & x_n^{n-1} & x_n^n
   \end{vmatrix}
   }!$$

6. Mutassa meg, hogy
   $$\lim_{(x_1, x_2, \ldots, x_n) \to (x_0, x_0, \ldots, x_0)} f[x_0, x_1, \ldots, x_n] = \frac{f^{(n)}(x_0)}{n!}!$$
   (Útmutatás: Használja a 6.17 következményt!)

7. Legyen $f \in C^2$. Definiálja a következő osztott differenciákat:
   $$f[x_0, x_0, x_1] \equiv \lim_{x_2 \to x_0} f[x_0, x_2, x_1], \quad f[x_0, x_1, x_0] \equiv \lim_{x_2 \to x_0} f[x_0, x_1, x_2],$$
   és
   $$f[x_1, x_0, x_0] \equiv \lim_{x_2 \to x_0} f[x_1, x_0, x_2], \qquad f[x_0, x_0, x_0] = \frac{f''(x_0)}{2}!$$
   Mutassa meg, hogy az előbbi határértékek léteznek, és az így definiált másodrendű osztott differenciák megőrzik a páronként különböző alappontokra felírt osztott differenciák szokásos tulajdonságait:

   (a) $f[x_0, x_0, x_1] = \dfrac{f[x_0, x_1] - f[x_0, x_0]}{x_1 - x_0}$,

   (b) $f[x_1, x_0, x_0] = \dfrac{f[x_0, x_0] - f[x_1, x_0]}{x_0 - x_1}$,

   (c) $f[x_0, x_0, x_1] = f[x_0, x_1, x_0] = f[x_1, x_0, x_0]$,

   (d) $\lim_{(x_1, x_2) \to (x_0, x_0)} f[x_0, x_1, x_2] = f[x_0, x_0, x_0]$,

   (e) Létezik olyan $\xi \in \langle x_0, x_1 \rangle$, hogy $f[x_0, x_0, x_1] = f''(\xi)/2$.

8. Ellenőrizze, hogy a 6.13 algoritmus valóban visszaadja a Newton-polinom együtthatóit!

## 6.4. Hermite-interpoláció

Ebben a szakaszban az interpoláció alapfeladatát módosítjuk. Legyen adott egy $f$ differenciálható függvény, és osztópontoknak egy $x_i$ $(i = 0, \ldots, n)$ véges sorozata. Az ún. *Hermite-féle interpolációs feladatban* azon kívül, hogy az $y_i = f(x_i)$ függvényértékeket interpoláljuk, az $y_i' \equiv f'(x_i)$ derivált értékeket is szeretnénk interpolálni. Keresünk tehát egy olyan $g(x) = c_0 + c_1 x + \cdots + c_m x^m$ polinomot, amelyre

$$g(x_i) = y_i, \qquad g'(x_i) = y_i', \qquad i = 0, 1, \ldots, n$$

teljesül. A feladat geometriai jelentése az, hogy olyan polinomot keresünk, amelynek grafikonja a megadott irányokban megy át az adott $(x_i, y_i)$ pontokon, azaz az érintőjének iránytangense megegyezik az $y_i'$ értékekkel. A $g$ függvény képletében $m + 1$ db paraméter szerepel, az előző feltételek $2(n + 1)$ egyenletet határoznak meg, így azt várjuk, hogy $m = 2n + 1$-edfokú polinomok között találunk egyértelmű megoldását az Hermite-féle interpolációs problémának. A következő tételben szükségünk lesz olyan magasabbrendű speciális osztott differenciákra, ahol az egymás után következő két alappont megegyezhet: $f[x_0, x_0, x_1, x_1, \ldots, x_n, x_n]$, ahol $x_0, x_1, \ldots, x_n$ páronként különböznek. Ezeket az osztott differenciákat a szokásos rekurzív definícióval értelmezhetjük eggyel alacsonyabb fokú osztott differenciák segítségével:

$$f[x_0, x_0, x_1, x_1, \ldots, x_n, x_n] = \frac{f[x_0, x_1, x_1, \ldots, x_n, x_n] - f[x_0, x_0, x_1, x_1, \ldots, x_n]}{x_n - x_0}.$$

Az alacsonyabb fokú osztott differenciákat is ehhez hasonlóan definiáljuk, és ezt folytathatjuk egészen addig, amíg különböző vagy egyenlő alappontokra felírt elsőrendű osztott differenciákig nem jutunk vissza, amelyeket már definiáltuk a 6.2 szakaszban.

**6.18. tétel.** *Az Hermite-féle interpolációs feladatnak létezik egyértelmű megoldása a legfeljebb $(2n + 1)$-edfokú polinomok körében, amelyet a*

$$\begin{aligned}
H_{2n+1}(x) = &\ f[x_0] + f[x_0, x_0](x - x_0) + f[x_0, x_0, x_1](x - x_0)^2 \\
&+ f[x_0, x_0, x_1, x_1](x - x_0)^2(x - x_1) + f[x_0, x_0, x_1, x_1, x_2](x - x_0)^2(x - x_1)^2 \\
&+ f[x_0, x_0, x_1, x_1, x_2, x_2](x - x_0)^2(x - x_1)^2(x - x_2) + \cdots \tag{6.7} \\
&+ f[x_0, x_0, x_1, x_1, \ldots, x_n, x_n](x - x_0)^2(x - x_1)^2 \cdots (x - x_{n-1})^2(x - x_n)
\end{aligned}$$

*alakban adhatunk meg. Továbbá a közelítés képlethibája*

$$f(x) - H_{2n+1}(x) = f[x_0, x_0, \ldots, x_n, x_n, x](x - x_0)^2 \cdots (x - x_n)^2. \tag{6.8}$$

**Bizonyítás.** Először vizsgáljuk az Hermite-polinom egyértelműségét. Tegyük fel, hogy $H_{2n+1}$ és $\tilde{H}_{2n+1}$ legfeljebb $(2n + 1)$-edfokú polinomok, amelyek teljesítik az Hermite-féle interpolációs feltételeket. Ekkor $P \equiv H_{2n+1} - \tilde{H}_{2n+1}$ is egy legfeljebb $(2n+1)$-edfokú polinom, amelyre $P(x_i) = H_{2n+1}(x_i) - \tilde{H}_{2n+1}(x_i) = f(x_i) - f(x_i) = 0$, és $P'(x_i) = H'_{2n+1}(x_i) - \tilde{H}'_{2n+1}(x_i) = f'(x_i) - f'(x_i) = 0$, azaz $x_i$ kétszeres gyöke $P$-nek minden $i = 0, 1, \ldots, n$-re. $P$-nek van tehát $2(n + 1) = 2n + 2$ gyöke, amiből következik az algebra alaptétele szerint, hogy $P$ azonosan 0 polinom, hiszen $P$ legfeljebb $(2n + 1)$-edfokú. Ebből következik, hogy az Hermite-féle interpolációs feladatnak legfeljebb egy $(2n + 1)$-edfokú megoldása lehet.

Most belátjuk, hogy a (6.7) képlettel definiált $H_{2n+1}$ polinom megoldása az Hermite-féle interpolációs feladatnak, és teljesíti a (6.8) hibaformulát. Direkt számolással rögtön kapjuk, hogy $H_{2n+1}(x_0) = f(x_0)$ és $H'_{2n+1}(x_0) = f[x_0, x_0] = f'(x_0)$. Következő lépésként belátjuk, hogy $H_{2n+1}(x_1) = f(x_1)$ és $H'_{2n+1}(x_1) = f'(x_1)$ is teljesül. Ehhez válasszunk olyan $x_i$-hez közeli $\tilde{x}_i$ számokat, hogy $\{x_i, \tilde{x}_i:\ i = 0, 1, \ldots, n\}$ páronként különbözőek legyenek, és legyen $L_{2n+1}$ ezekhez az alappontokhoz tartozó, $f$-et interpoláló Lagrange-féle interpolációs polinom. Ekkor

$$\begin{aligned}
L_{2n+1}(x) = &\ f[x_0] + f[x_0, x_0'](x - x_0) + f[x_0, x_0', x_1](x - x_0)(x - x_0') \\
&+ f[x_0, x_0', x_1, x_1'](x - x_0)(x - x_0')(x - x_1) + \cdots \\
&+ f[x_0, x_0', x_1, x_1', \ldots, x_n, x_n'](x - x_0)(x - x_0') \cdots (x - x_{n-1}) \\
&\quad \cdot (x - x_{n-1}')(x - x_n),
\end{aligned}$$

és

$$f(x) = L_{2n+1}(x) + f[x_0, x_0', \ldots, x_n, x_n', x](x - x_0)(x - x_0') \cdots (x - x_n)(x - x_n').$$

$L_{2n+1}$ és $H_{2n+1}$ definíciójából és az osztott differencia folytonosságából (lásd a 3. feladatot) kapjuk, hogy minden $x$-re

$$L_{2n+1}(x) \to H_{2n+1}(x) \quad \text{ha } (x_0', x_1', \ldots, x_n') \to (x_0, x_1, \ldots, x_n), \tag{6.9}$$

és így

$$f(x) = H_{2n+1}(x) + f[x_0, x_0, x_1, x_1, \ldots, x_n, x_n, x](x - x_0)^2(x - x_1)^2 \cdots (x - x_n)^2.$$

Ez igazolja a (6.8) összefüggést. A Lagrange-féle interpolációs polinom egyértelműségéből következik, hogy ha $x_0$, $x_0'$ és $x_1$, $x_1'$ sorrendjét felcseréljük, az interpolációs polinom nem fog változni, azaz

$$\begin{aligned}
L_{2n+1}(x) = &\ f[x_1] + f[x_1, x_1'](x - x_1) + f[x_1, x_1', x_0](x - x_1)(x - x_1') \\
&+ f[x_1, x_1', x_0, x_0'](x - x_1)(x - x_1')(x - x_0) + \cdots \\
&+ f[x_1, x_1', x_0, x_0', x_2, x_2' \ldots, x_n, x_n'](x - x_1)(x - x_1')(x - x_0)(x - x_0') \\
&\quad \cdot (x - x_2)(x - x_2') \cdots (x - x_{n-1})(x - x_{n-1}')(x - x_n).
\end{aligned}$$

Ebből viszont kapjuk, mindkét oldal határértékét véve, ha $(x_0', x_1', \ldots, x_n') \to (x_0, x_1, \ldots, x_n)$, és használva a (6.9) összefüggést és a határérték egyértelműségét, hogy

$$\begin{aligned}
H_{2n+1}(x) = &\ f[x_1] + f[x_1, x_1](x - x_1) + f[x_1, x_1, x_0](x - x_1)^2 \\
&+ f[x_1, x_1, x_0, x_0](x - x_1)^2(x - x_0) + f[x_1, x_1, x_0, x_0, x_2](x - x_1)^2(x - x_0)^2 \\
&+ f[x_1, x_1, x_0, x_0, x_2, x_2](x - x_1)^2(x - x_0)^2(x - x_2) + \cdots \\
&+ f[x_1, x_1, x_0, x_0, x_2, x_2, \ldots, x_n, x_n](x - x_1)^2(x - x_0)^2(x - x_2)^2 \\
&\quad \cdots (x - x_{n-1})^2(x - x_n)
\end{aligned}$$

alakban is felírható. Ebből viszont nyilvánvaló, hogy $H_{2n+1}(x_1) = f(x_1)$ és $H'_{2n+1}(x_1) = f'(x_1)$. Ehhez hasonlóan látható be, hogy $H_{2n+1}(x_i) = f(x_i)$ és $H'_{2n+1}(x_i) = f'(x_i)$ teljesül $i = 2, 3, \ldots, n$-re is. $\square$

**6.19. tétel.** *Legyen $f \in C^{2n+2}$. Ekkor létezik olyan $\xi \in \langle x_0, x_1, \ldots, x_n, x \rangle$, hogy*

$$f(x) - H_{2n+1}(x) = \frac{f^{(2n+2)}(\xi)}{(2n+2)!}(x - x_0)^2 \ldots (x - x_n)^2.$$

**Bizonyítás.** A bizonyítás hasonló a 6.5 tétel bizonyításához. Legyen $x$ egy osztópontoktól különböző rögzített szám, és definiáljuk a

$$g(z) = f(z) - H_{2n+1}(z) - \frac{(z - x_0)^2 \cdots (z - x_n)^2}{(x - x_0)^2 \cdots (x - x_n)^2}(f(x) - H_{2n+1}(x))$$

függvényt. Nyilván $g \in C^{2n+2}$, és $x_0, \ldots, x_n$ kétszeres gyökei, $x$ pedig egyszeres gyöke $g$-nek. Ezért az általánosított Rolle-tétel (6.4 tétel) szerint létezik olyan $\xi \in \langle x_0, x_1, \ldots, x_n, x \rangle$, hogy $g^{(2n+2)}(\xi) = 0$. Ebből pedig következik a tétel állítása. $\square$

A (6.8) összefüggést és a 6.19 tételt összehasonlítva rögtön kapjuk:

**6.20. következmény.** *Tegyük fel, hogy $f \in C^{2n+2}$ és $x, x_0, \ldots, x_n$ páronként különböző számok. Ekkor létezik olyan $\xi \in \langle x_0, x_1, \ldots, x_n, x \rangle$, hogy*

$$f[x_0, x_0, \ldots, x_n, x_n, x] = \frac{f^{(2n+2)}(\xi)}{(2n+2)!}.$$

Kézi számoláskor a (6.8) képlethez szükséges osztott differenciákat a 6.2 táblázat segítségével számolhatjuk ki. Megjegyezzük, hogy ez a táblázat nagyon hasonlít a 6.1 táblázathoz. A különbség az, hogy minden alappont és a hozzá tartozó függvényérték kétszer szerepel benne, és a harmadik oszlopban az azonos alappontokra felírt elsőrendű osztott differenciák is előre adottak, a megadott derivált értékkel egyeznek meg. A táblázat többi elemét ugyanúgy számítjuk, mint a 6.1 táblázatban. A bekeretezett számok fogják adni a (6.8) képletben szereplő együtthatókat.

*6.2. táblázat. Osztott differenciák elrendezése kézi számoláskor*

| $x_0$ | $\boxed{f(x_0)}$ | | | |
|-------|------------------|---|---|---|
| $x_0$ | $f(x_0)$ | $\boxed{f[x_0, x_0]}$ | | |
| $x_1$ | $f(x_1)$ | $f[x_0, x_1]$ | $\boxed{f[x_0, x_0, x_1]}$ | |
| $x_1$ | $f(x_1)$ | $f[x_1, x_1]$ | $f[x_0, x_1, x_1]$ | $\ddots$ |
| $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ | |
| $x_n$ | $f(x_n)$ | $f[x_{n-1}, x_n]$ | $f[x_{n-1}, x_{n-1}, x_n]$ | $\cdots$ |
| $x_n$ | $f(x_n)$ | $f[x_n, x_n]$ | $f[x_{n-1}, x_n, x_n]$ | $\cdots$ $\boxed{f[x_0, x_0, x_1, x_1 \ldots, x_n, x_n]}$ |

**6.21. példa.** Tekintsük a következő adatokat:

| $x_i$ | -1 | 1 | 2 |
|--------|----|----|----|
| $y_i$ | 2 | 4 | 11 |
| $y_i'$ | 3 | -5 | 30 |

Keressük meg az adatokat interpoláló Hermite-féle interpolációs polinomot! Készítsük el a következő táblázatot:

$$
\begin{array}{rrrrrrr}
-1 & 2 & & & & & \\
-1 & 2 & \boxed{3} & & & & \\
1 & 4 & 1 & -1 & & & \\
1 & 4 & \boxed{-5} & -3 & -1 & & \\
2 & 11 & 7 & 12 & 5 & 2 & \\
2 & 11 & \boxed{30} & 23 & 11 & 2 & 0
\end{array}
$$

(A harmadik oszlopban bekereteztük az inputként megadott derivált értékeket.) Az Hermite-polinom tehát

$$H_5(x) = 2 + 3(x + 1) - (x + 1)^2 - (x + 1)^2(x - 1) + 2(x + 1)^2(x - 1)^2 = 2x^4 - x^3 - 6x^2 + 2x + 7,$$

azaz $H_5$ jelen esetben egy negyedfokú polinom. $\square$

### Feladatok

1. Számítsa ki és ábrázolja az alábbi adatokhoz tartozó Hermite-féle interpolációs polinomokat:

   (a)

   | $x_i$ | -2 | -1 | 0 | 1 |
   |--------|----|----|----|----|
   | $y_i$ | 4 | 1 | 14 | -35 |
   | $y_i'$ | -1 | -2 | 43 | -394 |

   (b)

   | $x_i$ | -1 | 0 | 2 | 3 |
   |--------|----|----|----|----|
   | $y_i$ | 1 | 2 | 64 | -19 |
   | $y_i'$ | 3 | -1 | 111 | -301 |

2. Bizonyítsa be, hogy ha $P$ egy legfeljebb $(2n + 2)$-edfokú polinom, $x_i$ $(i = 0, 1, \ldots, n)$ páronként különböző alappontok, és $H_{2n+1}$ a $P$-hez és az alappontokhoz tartozó Hermite-polinom, akkor $P(x) = H_{2n+1}(x)$ minden $x$-re!

3. Legyen $f \in C^1$. Bizonyítsa be, hogy
   $$\lim_{(x_0', x_1', \ldots, x_n') \to (x_0, x_1, \ldots, x_n)} f[x_0, x_0', x_1, x_1', \ldots, x_n, x_n'] = f[x_0, x_0, x_1, x_1, \ldots, x_n, x_n]$$
   és
   $$\lim_{(x_0', \ldots, x_{n-1}') \to (x_0, \ldots, x_{n-1})} f[x_0, x_0', x_1, x_1', \ldots, x_{n-1}, x_{n-1}', x_n] = f[x_0, x_0, x_1, x_1, \ldots, x_{n-1}, x_{n-1}, x_n]!$$

4. Legyen $i_0, i_1, \ldots, i_n$ a $0, 1, \ldots, n$ véges számsorozatnak egy átrendezése. Lássa be, hogy ekkor
   $$f[x_0, x_0, x_1, x_1, \ldots, x_n, x_n] = f[x_{i_0}, x_{i_0}, x_{i_1}, x_{i_1}, \ldots, x_{i_n}, x_{i_n}]!$$

5. Az Hermite-interpolációs feladatot általánosabban is meg lehet fogalmazni: az $i$-edik osztópontban a függvényérték és az első $k_i$ derivált érték adott, amelyeket interpolálni szeretnénk. Erre a feladatra könnyen általánosítható az ebben a szakaszban tárgyalt módszer. Illusztrálásként tekintsünk most egy konkrét, egyszerű feladatot: adott két osztópont, $x_0$ és $x_1$, és egy $f \in C^3$ függvény. Keresünk egy olyan minimális fokszámú polinomot, amelyre

   $$H(x_0) = f(x_0), \quad H'(x_0) = f'(x_0), \quad H''(x_0) = f''(x_0), \quad \text{és} \quad H(x_1) = f(x_1).$$

   (Itt $k_0 = 2$ és $k_1 = 0$.) Lássa be, hogy a feladat megoldása a

   $$H(x) \equiv f[x_0] + f[x_0, x_0](x - x_0) + f[x_0, x_0, x_0](x - x_0)^2 + f[x_0, x_0, x_0, x_1](x - x_0)^3$$

   legfeljebb harmadfokú polinom!

## 6.5. Spline interpoláció

Legyen $a = x_0 < x_1 < \ldots < x_n = b$ az $[a,b]$ intervallumnak egy felosztása. Az $S \colon [a,b] \to \mathbb{R}$ folytonos függvényt az $\{x_i\}$ osztópontokhoz tartozó *$k$-adrendű spline* függvénynek nevezzük, ha $S \in C^{k-1}(a,b)$, és $S$ megszorítása minden $[x_i, x_{i+1}]$ intervallumra egy $k$-adrendű polinom. Az elsőrendű, másodrendű ill. harmadrendű spline függvényeket *lineáris, kvadratikus, ill. kubikus spline függvényeknek* nevezzük.

A legegyszerűbb, és így a gyakorlatban igen gyakran használt interpolációs módszer lineáris spline-okkal interpolálja a megadott adatokat. Geometriailag ez azt jelenti, hogy a megadott $(x_i, y_i)$ pontokat szakaszokkal kötjük össze. A lineáris spline interpolációval elkövetett hiba becslésével a 2. feladat foglalkozik.

A lineáris spline interpoláció hátránya az, hogy az interpolációs függvény nem sima, azaz nem differenciálható. Ezt a hátrányt kiküszöböli a harmadrendű spline interpoláció. Ekkor az interpolációs függvény kétszer folytonosan differenciálható lesz, ami a gyakorlati alkalmazásoknál többnyire elegendő. A szakasz hátralevő részében a harmadrendű spline interpolációval foglalkozunk.

Adott osztópontoknak egy $a = x_0 < x_1 < \ldots < x_n = b$, és hozzá tartozó $y_0, y_1, \ldots, y_n$ függvényértékek véges sorozata. Keresünk egy olyan $S$ harmadrendű spline függvényt, amely interpolálja a megadott adatokat, azaz

$$S(x_i) = y_i, \qquad i = 0, 1, \ldots, n.$$

Jelöljük $S_i$-vel az $S$ függvény $[x_i, x_{i+1}]$ intervallumra vett megszorítását $(i = 0, 1, \ldots, n - 1)$. A feltevés szerint $S$ interpolálja az $(x_i, y_i)$ pontokat és kétszer folytonosan differenciálható, ezért az $S_i$ függvények teljesítik a következő feltételeket:

$$\begin{aligned}
S_i(x_i) &= y_i, & i &= 0, 1, \ldots, n - 1, \tag{6.10} \\
S_i(x_{i+1}) &= y_{i+1}, & i &= 0, 1, \ldots, n - 1, \tag{6.11} \\
S_i'(x_{i+1}) &= S_{i+1}'(x_{i+1}), & i &= 0, 1, \ldots, n - 2, \tag{6.12} \\
S_i''(x_{i+1}) &= S_{i+1}''(x_{i+1}), & i &= 0, 1, \ldots, n - 2. \tag{6.13}
\end{aligned}$$

Mivel minden egyes $S_i$ függvényt 4 paraméter határoz meg, így összesen $4n$ paraméter definiálja $S$-t. A (6.10)–(6.13) feltételek száma viszont csak $4n - 2$, ezért a feladatnak így nem egyértelmű a megoldása. Ezért várhatóan még két feltételt megadhatunk, és ettől remélhetően egyértelmű megoldást kapunk. Egy gyakran használt feltétel a következő:

$$S_0''(x_0) = 0 \qquad \text{és} \qquad S_{n-1}''(x_n) = 0. \tag{6.14}$$

A (6.10)–(6.14) feltételekkel definiált kubikus spline függvényt *természetes spline* függvénynek nevezzük. Belátjuk, hogy az interpolációs feladatnak pontosan egy természetes spline függvény megoldása van. Vegyük fel $S_i$-t a következő alakban:

$$S_i(x) = a_i + b_i(x - x_i) + c_i(x - x_i)^2 + d_i(x - x_i)^3,$$

ahol $a_i, b_i, c_i$ és $d_i$ $(i = 0, 1, \ldots, n - 1)$ meghatározandó paraméterek. Ekkor

$$\begin{aligned}
S_i'(x) &= b_i + 2c_i(x - x_i) + 3d_i(x - x_i)^2, \\
S_i''(x) &= 2c_i + 6d_i(x - x_i).
\end{aligned}$$

Ezekből az összefüggésekből rögtön következik

$$a_i = S_i(x_i) = y_i, \quad b_i = S_i'(x_i) \quad \text{és} \quad c_i = S_i''(x_i)/2, \quad i = 0, 1, \ldots, n - 1. \tag{6.15}$$

A (6.15) összefüggések segítségével definiálhatjuk az $a_n$, $b_n$ és $c_n$ konstansokat is (amelyekre később szükségünk lesz):

$$a_n \equiv y_n, \qquad b_n \equiv S'(x_n) \qquad \text{és} \qquad c_n \equiv S''(x_n)/2. \tag{6.16}$$

(A (6.16) képletekben a deriváltak bal oldali deriváltakat jelentenek.) $x = x_{i+1}$-t behelyettesítve $S_i$ képletébe és a (6.11) egyenletet, valamint az $a_i = y_i$ összefüggést használva kapjuk

$$y_i + b_i(x_{i+1} - x_i) + c_i(x_{i+1} - x_i)^2 + d_i(x_{i+1} - x_i)^3 = y_{i+1}.$$

Vezessük be a $\Delta x_i \equiv x_{i+1} - x_i$ és a $\Delta y_i \equiv y_{i+1} - y_i$ jelöléseket. Így

$$b_i \Delta x_i + c_i(\Delta x_i)^2 + d_i(\Delta x_i)^3 = \Delta y_i, \qquad i = 0, 1, \ldots, n - 1. \tag{6.17}$$

A (6.12) feltételből és a $b_{i+1} = S_{i+1}'(x_{i+1})$ összefüggésből

$$b_i + 2c_i \Delta x_i + 3d_i(\Delta x_i)^2 = b_{i+1} \tag{6.18}$$

minden $i = 0, 1, \ldots, n - 2$-re. Használva $b_n$ definícióját kapjuk, hogy (6.18) teljesül $i = n - 1$-re is. Hasonlóan, a (6.13) egyenletből és $c_n$ definíciójából következik

$$2c_i + 6d_i \Delta x_i = 2c_{i+1}, \qquad i = 0, 1, \ldots, n - 1,$$

amiből

$$d_i = \frac{c_{i+1} - c_i}{3\Delta x_i}, \qquad i = 0, 1, \ldots, n - 1. \tag{6.19}$$

Ezt behelyettesítjük a (6.17) és (6.18) egyenletekbe:

$$\begin{aligned}
b_i \Delta x_i + c_i(\Delta x_i)^2 + \frac{c_{i+1} - c_i}{3}(\Delta x_i)^2 &= \Delta y_i, & i &= 0, 1, \ldots, n - 1, \tag{6.20} \\
b_i + 2c_i \Delta x_i + (c_{i+1} - c_i)\Delta x_i &= b_{i+1}, & i &= 0, 1, \ldots, n - 1. \tag{6.21}
\end{aligned}$$

Az első egyenletből kifejezve $b_i$-t

$$b_i = \frac{\Delta y_i}{\Delta x_i} - \frac{2c_i + c_{i+1}}{3}\Delta x_i,$$

és behelyettesítve a másodikba $i = 0, 1, \ldots, n - 2$-re kis számolással adódik

$$c_i \Delta x_i + 2c_{i+1}(\Delta x_i + \Delta x_{i+1}) + c_{i+2}\Delta x_{i+1} = 3\frac{\Delta y_{i+1}}{\Delta x_{i+1}} - 3\frac{\Delta y_i}{\Delta x_i}, \quad i = 0, 1, \ldots, n - 2. \tag{6.22}$$

Megjegyezzük, hogy a (6.22) egyenlet levezetéséhez nem használtuk a (6.14) feltételt, így ez tetszőleges harmadrendű spline interpolációra teljesül. A (6.22) egyenlet $n - 1$ db, $c_i$-re nézve lineáris egyenletet ír le. Ehhez hozzávéve a (6.14) feltételből adódó $c_0 = 0$ és $c_n = 0$ egyenleteket $n + 1$ egyenletből álló $\mathbf{Ax} = \mathbf{b}$ alakú lineáris egyenletrendszert kapunk, ahol $\mathbf{x} = (c_0, c_1, \ldots, c_n)^T$,

$$\mathbf{A} = \begin{pmatrix}
1 & 0 & 0 & 0 & 0 & \cdots & 0 \\
\Delta x_0 & 2(\Delta x_0 + \Delta x_1) & \Delta x_1 & 0 & 0 & \cdots & 0 \\
0 & \Delta x_1 & 2(\Delta x_1 + \Delta x_2) & \Delta x_2 & 0 & \cdots & 0 \\
& & \ddots & \ddots & \ddots & & \\
0 & \cdots & & & \Delta x_{n-2} & 2(\Delta x_{n-2} + \Delta x_{n-1}) & \Delta x_{n-1} \\
0 & \cdots & & & 0 & 0 & 1
\end{pmatrix}$$

tridiagonális mátrix és

$$\mathbf{b} = \begin{pmatrix}
0 \\
3\frac{\Delta y_1}{\Delta x_1} - 3\frac{\Delta y_0}{\Delta x_0} \\
\vdots \\
3\frac{\Delta y_{n-1}}{\Delta x_{n-1}} - 3\frac{\Delta y_{n-2}}{\Delta x_{n-2}} \\
0
\end{pmatrix}.$$

Mivel $\mathbf{A}$ diagonálisan domináns, az $\mathbf{Ax} = \mathbf{b}$ egyenletnek létezik egyértelmű megoldása. A $c_i$-k ismeretében pedig a $d_i$ és $b_i$ együtthatókat is meghatározhatjuk. Ezzel beláttuk, hogy a feladatnak létezik egyértelmű megoldása. Megjegyezzük, hogy a gyakorlatban az $\mathbf{Ax} = \mathbf{b}$ egyenletrendszert a tridiagonális lineáris egyenletre vonatkozó Gauss-eliminációval (3.37 algoritmus) oldhatjuk meg hatékonyan. Beláttuk tehát:

**6.22. tétel.** *A harmadrendű spline interpoláció feladatának létezik pontosan egy természetes harmadrendű spline függvény megoldása.*

**6.23. példa.** Illesszünk természetes harmadrendű spline függvényt az

| $x_i$ | 0.0 | 1.0 | 1.5 | 2.0 | 3.0 | 4.0 |
|-------|-----|-----|-----|-----|-----|-----|
| $y_i$ | 0.5 | 0.1 | 2.5 | -1.0 | -0.5 | 0.0 |

adatokra! Az előző jelölést követve a $c_i$ együtthatókra felírt lineáris egyenletrendszer az adott adatokra a következő lesz:

$$\begin{pmatrix}
1 & 0 & 0 & 0 & 0 & 0 \\
1 & 3 & 0.5 & 0 & 0 & 0 \\
0 & 0.5 & 2 & 0.5 & 0 & 0 \\
0 & 0 & 0.5 & 3 & 1 & 0 \\
0 & 0 & 0 & 1 & 4 & 1 \\
0 & 0 & 0 & 0 & 0 & 1
\end{pmatrix}
\begin{pmatrix}
c_0 \\ c_1 \\ c_2 \\ c_3 \\ c_4 \\ c_5
\end{pmatrix}
=
\begin{pmatrix}
0 \\ 15.6 \\ -35.4 \\ 22.5 \\ 0 \\ 0
\end{pmatrix}.$$

Ezt megoldva kapjuk a $c_i$ értékeket, amit visszahelyettesítve a (6.19) és (6.20) egyenletekbe kiszámíthatók a $d_i$ és $b_i$ együtthatók értékei. A számolást elvégezve a következő harmadrendű polinomokat kapjuk az egyes intervallumokon:

$$\begin{aligned}
S_0(x) &= 0.5 - 3.4141079x + 3.0141079x^3, \\
S_1(x) &= 0.1 + 5.6282158(x - 1) + 9.04232365(x - 1)^2 - 21.3975104(x - 1)^3, \\
S_2(x) &= 2.5 - 1.3775934(x - 1.5) - 23.0539419(x - 1.5)^2 + 23.6182573(x - 1.5)^3, \\
S_3(x) &= -1.0 - 6.7178423(x - 2) + 12.3734440(x - 2)^2 - 5.1556017(x - 2)^3, \\
S_4(x) &= -0.5 + 2.5622407(x - 3) - 3.0933610(x - 3)^2 + 1.0311203(x - 3)^3.
\end{aligned}$$

A kapott spline függvény és az adatok grafikonja a 6.3 ábrán látható. $\square$

![6.3. ábra. Spline interpoláció](figure_6_3.png)

*6.3. ábra. Spline interpoláció*

A (6.14) feltétel helyett számos más, $S$ végpontjaira vonatkozó feltételt is kiköthetünk. Itt most csak az

$$S'(x_0) = y_0' \qquad \text{és} \qquad S'(x_n) = y_n' \tag{6.23}$$

feltételt vizsgáljuk, ahol $y_0'$ és $y_n'$ adott számok. Ez azt jelenti, hogy ismerjük az $S$ függvény érintőjét a grafikon végpontjaiban. A (6.23) feltételt teljesítő spline függvényt *teljes spline* függvénynek nevezzük. Ebben az esetben is ugyanúgy kapjuk a (6.22) egyenleteket. Még két egyenletet kell felírni, hogy az egyenletrendszer jól meghatározott legyen. Használva a $b_0 = S'(x_0) = y_0'$ összefüggést, a (6.20) egyenletből következik

$$y_0' \Delta x_0 + c_0(\Delta x_0)^2 + \frac{c_1 - c_0}{3}(\Delta x_0)^2 = \Delta y_0,$$

azaz

$$2c_0 \Delta x_0 + c_1 \Delta x_0 = 3\frac{\Delta y_0}{\Delta x_0} - 3y_0'. \tag{6.24}$$

$b_{n-1}$-et kifejezve a (6.20) egyenletből és behelyettesítve a (6.21) egyenletbe, és a $b_n = y_n'$ összefüggést használva kapjuk

$$\frac{\Delta y_{n-1}}{\Delta x_{n-1}} - \frac{2c_{n-1} + c_n}{3}\Delta x_{n-1} + \Delta x_{n-1}(c_{n-1} + c_n) = y_n',$$

ill. átrendezve

$$c_{n-1}\Delta x_{n-1} + 2c_n \Delta x_{n-1} = 3y_n' - 3\frac{\Delta y_{n-1}}{\Delta x_{n-1}}. \tag{6.25}$$

Ha a természetes spline interpolációnál kapott $\mathbf{Ax} = \mathbf{b}$ egyenlet első egyenletét kicseréljük a (6.24) egyenletre, és az utolsó egyenletet a (6.25) egyenletre, akkor könnyen látható, hogy az együtthatómátrix továbbra is diagonálisan domináns marad, azaz a módosított egyenletrendszernek is van egyértelmű megoldása. Így a (6.23) feltétellel kiegészített interpolációs problémának van teljes spline függvény megoldása, és a megoldás egyértelmű.

A harmadrendű természetes spline interpolációs függvények a következő minimum tulajdonsággal rendelkeznek, ami bizonyos értelemben azt jelenti, hogy spline függvénnyel lehet a legsimábban interpolálni adott pontokat.

**6.24. tétel.** *Legyen $a = x_0 < x_1 < \ldots < x_n = b$ és $y_0, y_1, \ldots, y_n$ osztópontoknak és hozzátartozó függvényértékeknek egy véges sorozata, és legyen $S$ az ezeket interpoláló természetes kubikus spline függvény. Ekkor*

$$\int_a^b (S''(x))^2 \, dx \leq \int_a^b (f''(x))^2 \, dx \tag{6.26}$$

*minden olyan $f \in C^2(a,b)$-re, amely szintén interpolálja az adatokat, azaz $f(x_i) = y_i$ minden $i = 0, 1, \ldots, n$-re.*

**Bizonyítás.** Vezessük be a $g(x) \equiv f(x) - S(x)$ függvényt. Ekkor $f''(x) = S''(x) + g''(x)$, és így

$$\int_a^b (f''(x))^2 \, dx = \int_a^b (S''(x))^2 \, dx + 2\int_a^b S''(x)g''(x) \, dx + \int_a^b (g''(x))^2 \, dx.$$

Mivel $\int_a^b (g''(x))^2 \, dx \geq 0$, így a tétel állítása következik ebből az egyenlőségből, ha belátjuk, hogy $\int_a^b S''(x)g''(x) \, dx = 0$. Az integrált felbontva és parciálisan integrálva kapjuk

$$\begin{aligned}
\int_a^b S''(x)g''(x) \, dx &= \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} S''(x)g''(x) \, dx \\
&= \sum_{i=1}^{n} [S''(x)g'(x)]_{x_{i-1}}^{x_i} - \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} S'''(x)g'(x) \, dx \\
&= S''(b)g'(b) - S''(a)g'(a) - \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} S'''(x)g'(x) \, dx.
\end{aligned}$$

$S$ természetes spline függvény, így $S''(a) = S''(b) = 0$. Mivel $S$ harmadfokú polinom minden $[x_{i-1}, x_i]$ intervallumon, ezért ott $S'''$ konstans függvény, így az integrál elé kivihető. Viszont $\int_{x_{i-1}}^{x_i} g'(x) \, dx = g(x_i) - g(x_{i-1}) = 0$, mivel $g(x_i) = 0$ minden $i = 0, 1, \ldots, n$-re. Ezzel a tételt beláttuk. $\square$

A következő tétel a teljes spline interpoláció hibáját vizsgálja. Bizonyítás nélkül közöljük az eredményt.

**6.25. tétel.** *Legyen $f \in C^4(a,b)$, $a = x_0 < x_1 < \ldots < x_n = b$ osztópontok, $y_i = f(x_i)$, $i = 0, 1, \ldots, n$ függvényértékek, valamint $y_0' = f'(a)$ és $y_n' = f'(b)$ derivált értékek, és legyen $S$ az ezekhez tartozó teljes spline függvény. Ekkor $x \in [a,b]$-re*

$$\begin{aligned}
|f(x) - S(x)| &\leq \frac{5}{384}M_4 h^4, \\
|f'(x) - S'(x)| &\leq \left( \frac{\sqrt{3}}{216} + \frac{1}{24} \right) M_4 h^3, \\
|f''(x) - S''(x)| &\leq \left( \frac{1}{12} + \frac{h}{3k} \right) M_4 h^2,
\end{aligned}$$

*ahol $M_4 \equiv \max\{|f^{(4)}(x)|:\ x \in [a,b]\}$, $h \equiv \max\{x_{i+1} - x_i:\ i = 0, 1, \ldots, n - 1\}$, $k \equiv \min\{x_{i+1} - x_i:\ i = 0, 1, \ldots, n - 1\}$.*

Megjegyezzük, hogy a természetes spline interpoláció hibája ehhez hasonló módon becsülhető.

### Feladatok

1. Adja meg az $(x_i, y_i)$, $i = 0, 1, \ldots, n$ adatokat interpoláló lineáris spline függvény képletét az $[x_i, x_{i+1}]$ intervallumon!

2. Adott egy $f \colon [a,b] \to \mathbb{R}$ folytonos függvény, és legyen $S_h$ az $[a,b]$ intervallum ekvidisztáns, $h$ lépésközű osztópontjaihoz tartozó $f$-et interpoláló lineáris spline függvény.

   (a) Mutassa meg, hogy $\max\{|f(x) - S_h(x)|:\ x \in [a,b]\} \to 0$, ha $h \to 0$.

   (b) Legyen $f \in C^1[a,b]$. Mutassa meg, hogy
   $$|f(x) - S_h(x)| \leq M_1 h, \qquad x \in [a,b],$$
   ahol $M_1 \equiv \max\{|f'(x)|:\ x \in [a,b]\}$.

3. Számítsa ki és ábrázolja a 6.1 szakasz 1. feladatában szereplő adatokhoz tartozó természetes kubikus spline interpolációs függvényeket!

4. Mutassa meg, hogy kvadratikus spline-interpolációnál az
   $$S'(x_0) = f'(x_0) \qquad \text{vagy} \qquad S'(x_n) = f'(x_n)$$
   feltételek egyike teljesülése egyértelműen meghatározza a spline interpolációs függvényt!

5. Mutassa meg, hogy ha $S$ adott $a = x_0 < x_1 < \ldots < x_n = b$ osztópontokhoz és $y_0, y_1, \ldots, y_n$ függvényértékekhez, valamint $y_0'$ és $y_n'$ derivált értékekhez tartozó teljes spline függvény, akkor $S$ teljesíti a (6.26) egyenlőtlenséget minden olyan $f \in C^2(a,b)$ függvényre, amelyre $f(x_i) = y_i$ minden $i$-re, $f'(a) = y_0$ és $f'(b) = y_n'$!
