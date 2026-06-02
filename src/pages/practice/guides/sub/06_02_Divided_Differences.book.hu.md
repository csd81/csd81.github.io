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
