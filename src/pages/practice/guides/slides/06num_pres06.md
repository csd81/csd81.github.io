# Numerikus analízis — 6. Interpoláció

**Ferenc Hartung**
Pannon Egyetem, Matematika Tanszék
2026

*(Előadás-fóliák, 69 dia. A figurák helyét `[ábra]` jelöli.)*

---

## 6.1. Lagrange-interpoláció

Adottak

$$x_0, x_1, \ldots, x_n \in [a,b]$$

páronként különböző pontok, ún. **alappontok** vagy **osztópontok**, és hozzá tartozó függvényértékek:

$$y_0, y_1, \ldots, y_n.$$

Keresünk olyan, valamely adott függvényosztálybeli $g$ függvényt, amely **interpolálja** a megadott pontokat, azaz teljesíti az alábbi egyenleteket:

$$g(x_i) = y_i, \qquad i = 0, 1, \ldots, n$$

[ábra: adatpontok, majd átmenő $g(x)$ görbe]

---

Keresünk egy olyan $L_n$ legfeljebb $n$-edfokú polinomot, amelyre

$$L_n(x_i) = y_i, \qquad i = 0, 1, \ldots, n. \tag{1}$$

Ez a **Lagrange-féle interpolációs feladat.** Megmutatjuk, hogy ennek a feladatnak mindig létezik egyértelmű megoldása. A feladatot teljesítő $L_n$ polinomot **Lagrange-féle interpolációs polinomnak**, vagy röviden Lagrange-polinomnak nevezzük.

---

Definiáljuk $k = 0, 1, \ldots, n$-re az

$$l_k(x) := \frac{(x - x_0)(x - x_1) \cdots (x - x_{k-1})(x - x_{k+1}) \cdots (x - x_n)}{(x_k - x_0)(x_k - x_1) \cdots (x_k - x_{k-1})(x_k - x_{k+1}) \cdots (x_k - x_n)}$$

$n$-edfokú polinomokat. Az $l_0, \ldots, l_n$ polinomokat **Lagrange-féle $n$-edfokú alappolinomoknak** nevezzük. A polinom definíciójából nyilvánvaló, hogy

$$l_k(x_i) = \begin{cases} 1, & \text{ha } k = i, \\ 0, & \text{ha } k \neq i. \end{cases}$$

Ebből következik, hogy az

$$L_n(x) := \sum_{k=0}^{n} y_k l_k(x)$$

függvény egy legfeljebb $n$-edfokú polinom, és megoldása a Lagrange interpolációs problémának.

---

**Tétel.** *A Lagrange-féle interpolációs feladatnak létezik egyértelmű megoldása, amely az*

$$L_n(x) = \sum_{k=0}^{n} y_k \frac{(x - x_0)(x - x_1) \cdots (x - x_{k-1})(x - x_{k+1}) \cdots (x - x_n)}{(x_k - x_0)(x_k - x_1) \cdots (x_k - x_{k-1})(x_k - x_{k+1}) \cdots (x_k - x_n)}$$

*alakban adható meg.*

**Bizonyítás.** Tegyük fel, hogy $L_n$ és $\tilde{L}_n$ mindketten legfeljebb $n$-edfokú polinomok és teljesítik az (1) egyenleteket. Definiáljuk a

$$P(x) := L_n(x) - \tilde{L}_n(x)$$

függvényt. Ekkor $P$ is legfeljebb $n$-edfokú polinom, és

$$P(x_i) = 0 \quad \text{minden } i = 0, 1, \ldots, n\text{-re,}$$

azaz $P$-nek $n + 1$ különböző gyöke van. Ekkor viszont az algebra alaptételéből következik, hogy $P$ azonosan 0 polinom, azaz $L_n = \tilde{L}_n$. $\square$

---

**Példa.** Tekintsük az

| $x_i$ | -1 | 1 | 2 | 3 |
|-------|----|----|----|----|
| $y_i$ | -2 | 0 | -2 | 2 |

alappontokat és a hozzá tartozó függvényértékeket. Határozzuk meg az adatokhoz tartozó Lagrange-féle interpolációs polinomot:

$$\begin{aligned}
L_3(x) = &-2 \frac{(x-1)(x-2)(x-3)}{(-1-1)(-1-2)(-1-3)} + 0 \frac{(x+1)(x-2)(x-3)}{(1+1)(1-2)(1-3)} \\
&-2 \frac{(x+1)(x-1)(x-3)}{(2+1)(2-1)(2-3)} + 2 \frac{(x+1)(x-1)(x-2)}{(3+1)(3-1)(3-2)} \\
= &\ x^3 - 3x^2 + 2.
\end{aligned}$$

---

[ábra: A $\cos x$ függvény interpolációja a $-\pi, 0, \pi$ ill. a $-\pi, -\pi/2, 0, \pi/2, \pi$ alappontokat használva — $L_2(x)$, $L_4(x)$ és $\cos x$ grafikonja]

---

**Tétel (Rolle).** *Legyen az $f \colon [a,b] \to \mathbb{R}$ folytonos függvény differenciálható az $(a,b)$ intervallumon, és*

$$f(a) = f(b).$$

*Ekkor létezik olyan $\xi \in (a,b)$ szám, hogy*

$$f'(\xi) = 0.$$

[ábra: Rolle-tétel illusztrációja]

---

**Tétel (Általánosított Rolle-tétel).** *Legyen $f \in C^n(a,b)$, $a \leq x_0 < x_1 \cdots < x_n \leq b$, és tegyük fel, hogy*

$$f(x_0) = f(x_1) = \cdots = f(x_n) = 0.$$

*Ekkor létezik olyan $\xi \in (x_0, x_n)$, hogy*

$$f^{(n)}(\xi) = 0.$$

**Bizonyítás.** [ábra: az $f$, $f'$, $f''$ deriváltak egymás utáni gyökeinek $\eta_i$, $\theta_i$/$\lambda_i$ illusztrációja, amíg $f^{(n)}$ egyetlen $\xi$ gyökhöz jutunk]

---

**Tétel.** *Legyen $f \in C^{n+1}(a,b)$, $x_i \in [a,b]$ $(i = 0, \ldots, n)$ páronként különböző alappontok és $y_i = f(x_i)$ $(i = 0, \ldots, n)$. Legyen $L_n(x)$ az adatokhoz tartozó $n$-edfokú Lagrange-polinom. Ekkor bármely $x \in [a,b]$-hez létezik olyan $\xi = \xi(x) \in \langle x, x_0, x_1, \ldots, x_n \rangle$ szám, hogy*

$$f(x) = L_n(x) + \frac{f^{(n+1)}(\xi)}{(n+1)!}(x - x_0)(x - x_1) \cdots (x - x_n).$$

**Bizonyítás.** Ha $x = x_i$ valamely $i$-re, akkor az állítás nyilvánvalóan teljesül. Rögzítsünk egy $x \in (a, b)$ számot, amelyre $x \neq x_i$ minden $i = 0, \ldots, n$-re, és tekintsük a

$$g(t) := f(t) - L_n(t) - \frac{(t - x_0) \cdots (t - x_n)}{(x - x_0) \cdots (x - x_n)}(f(x) - L_n(x))$$

függvényt. Nyilvánvalóan $g \in C^{n+1}$, és

$$g(x) = g(x_0) = g(x_1) = \cdots = g(x_n) = 0.$$

Alkalmazva az általánosított Rolle-tételt kapjuk, hogy létezik olyan $\xi \in \langle x, x_0, \ldots, x_n \rangle$ szám, hogy $g^{(n+1)}(\xi) = 0$. Mivel $L_n$ $n$-edfokú polinom, ezért $(n + 1)$-edik deriváltja nulla, így

$$g^{(n+1)}(t) = f^{(n+1)}(t) - \frac{(n+1)!}{(x - x_0) \cdots (x - x_n)}(f(x) - L_n(x)).$$

Ebből a $t = \xi$ értéket véve adódik a tétel állítása. $\square$

---

Most tekintsük azt a speciális esetet, amikor ekvidisztáns osztópontokat használunk, azaz $x_i = x_0 + ih$. Az interpoláció képlethibája az

$$|f(x) - L_n(x)| \leq \frac{M_{n+1}}{(n+1)!}|(x - x_0) \cdots (x - x_n)|$$

kifejezéssel becsülhető $x \in [x_0, x_n]$-re, ahol

$$M_{n+1} = \max\{|f^{(n+1)}(t)|:\ t \in [x_0, x_n]\}.$$

Tegyük fel, hogy $x \in (x_k, x_{k+1})$ valamilyen $0 \leq k < n$-re. Ekkor könnyen ellenőrizhető, hogy

$$|(x - x_k)(x - x_{k+1})| \leq \frac{h^2}{4},$$

---

[ábra: $x_0, x_1, \ldots, x_k, x, x_{k+1}, \ldots, x_n$ osztópontok] és így

$$\begin{aligned}
\prod_{i=0}^{n} |x - x_i| &\leq \frac{h^2}{4} \prod_{i=0}^{k-1} (x - x_i) \prod_{i=k+2}^{n} (x_i - x) \\
&\leq \frac{h^2}{4} \prod_{i=0}^{k-1} (x_{k+1} - x_i) \prod_{i=k+2}^{n} (x_i - x_k) \\
&= \frac{h^{n+1}}{4} \prod_{i=0}^{k-1} (k + 1 - i) \prod_{i=k+2}^{n} (i - k) \\
&= \frac{h^{n+1}}{4}(k+1)!(n-k)! \\
&\leq \frac{h^{n+1}}{4} n!
\end{aligned}$$

---

**Tétel.** *Legyen $f \in C^{n+1}(a,b)$,*

$$x_i = a + i\frac{b-a}{n} \qquad (i = 0, \ldots, n)$$

*és $y_i = f(x_i)$ $(i = 0, \ldots, n)$. Legyen $x \in [a,b]$. Ekkor*

$$|f(x) - L_n(x)| \leq \frac{M_{n+1}}{4(n+1)} \left( \frac{b-a}{n} \right)^{n+1},$$

*ahol $M_{n+1} := \max\{|f^{(n+1)}(x)|:\ x \in [a,b]\}$.*

---

**Példa.** Tekintsük az $f(x) = \cos x$ függvényt. Az előző tétel szerint minden $x \in [-\pi, \pi]$-re

$$|f(x) - L_2(x)| \leq \frac{1}{12}\pi^3 \approx 2.5839, \quad \text{és} \quad |f(x) - L_4(x)| \leq \frac{1}{20}\left(\frac{\pi}{2}\right)^5 \approx 0.4782.$$

---

### Kétváltozós Lagrange-interpoláció

Legyen $f \colon [a,b] \times [c,d] \to \mathbb{R}$, és tekintsük az $[a,b]$ és $[c,d]$ intervallumok $a = x_0 < x_1 < \ldots < x_n = b$ és $c = y_0 < y_1 < \ldots < y_m = d$ beosztásait. Legyen $z_{ij} = f(x_i, y_j)$, $i = 0, \ldots, n$, $j = 0, \ldots, m$. Ezen adatok interpolációjára a következő függvényt használhatjuk:

$$L_{n,m}(x, y) := \sum_{i=0}^{n} \sum_{j=0}^{m} z_{ij} l_i(x) \tilde{l}_j(y), \tag{2}$$

ahol $l_i$ ill. $\tilde{l}_j$ az alappontokhoz tartozó $n$ ill. $m$-edrendű polinomok. Az így definiált $L_{n,m}$ függvény teljesíti az

$$L_{n,m}(x_i, y_j) = z_{ij}$$

összefüggést minden $i, j$-re. Ha $x$-et rögzítjük, akkor $L_{n,m}(x, \cdot)$ egy legfeljebb $m$-edrendű polinom, és fordítva, ha $y$-t rögzítjük, akkor $L_{n,m}(\cdot, y)$ egy legfeljebb $n$-edrendű polinom.

---

**Példa.** Tekintsük a következő függvényértékeket:

| $(x_i, y_j)$ | $(0,0)$ | $(1,0)$ | $(2,0)$ | $(0,2)$ | $(1,2)$ | $(2,2)$ |
|--------------|---------|---------|---------|---------|---------|---------|
| $z_{ij}$ | 2 | -1 | 1 | 1 | 0 | 2 |

Ekkor

$$\begin{aligned}
L_{2,1}(x, y) = &\ 2 \frac{(x-1)(x-2)}{(0-1)(0-2)} \frac{y-2}{0-2} - \frac{x(x-2)}{1(1-2)} \frac{y-2}{0-2} + \frac{x(x-1)}{2(2-1)} \frac{y-2}{0-2} \\
&+ \frac{(x-1)(x-2)}{(0-1)(0-2)} \frac{y}{2} + 0 \frac{x(x-2)}{1(1-2)} \frac{y}{2} + 2 \frac{x(x-1)}{2(2-1)} \frac{y}{2} \\
= &-\frac{1}{2}x^2 y + \frac{5}{2}x^2 + \frac{3}{2}xy - \frac{11}{2}x - \frac{1}{2}y + 2.
\end{aligned}$$

Ez $x$-ben másodfokú, $y$-ban pedig elsőfokú polinom.

[ábra: Kétváltozós Lagrange-interpoláció felülete]

---

## 6.2. Osztott differenciák

Adott egy $f \colon [a,b] \to \mathbb{R}$ függvény és $x_i \in [a,b]$ $(i = 0, \ldots, n)$ páronként különböző alappontok. Ekkor az $f$ függvény $x_0$ pontbeli **nulladrendű osztott differenciáján** az

$$f[x_0] := f(x_0)$$

számot értjük. Az **elsőrendű osztott differencián** az

$$f[x_0, x_1] := \frac{f[x_1] - f[x_0]}{x_1 - x_0}$$

számot értjük, azaz

$$f[x_0, x_1] = \frac{f(x_1) - f(x_0)}{x_1 - x_0}.$$

Általában pedig, az **$n$-edrendű osztott differencián** az

$$f[x_0, x_1, \ldots, x_n] := \frac{f[x_1, x_2, \ldots, x_n] - f[x_0, x_1, \ldots, x_{n-1}]}{x_n - x_0}$$

számot értjük.

---

**Tétel.** *Legyenek $x_i$ $(i = 0, 1, \ldots, n)$ páronként különböző alappontok. Ekkor*

$$f[x_0, x_1, \ldots, x_n] = \sum_{i=0}^{n} \frac{f(x_i)}{(x_i - x_0) \cdots (x_i - x_{i-1})(x_i - x_{i+1}) \cdots (x_i - x_n)}.$$

**Bizonyítás.** $n = 0$-ra az állítás nyilvánvaló. (Ebben az esetben a nevezőben „üres szorzat" áll, ez definíció szerint 1-gyel egyezik meg.) Tegyük fel, hogy $n$-re teljesül az állítás, és tekintsük $f[x_0, x_1, \ldots, x_{n+1}]$-et.

**Bizonyítás (folyt.)**

$$\begin{aligned}
f&[x_0, x_1, \ldots, x_{n+1}] = \frac{f[x_1, x_2, \ldots, x_{n+1}] - f[x_0, x_1, \ldots, x_n]}{x_{n+1} - x_0} \\
&= \frac{1}{x_{n+1} - x_0} \Bigg\{ \sum_{i=1}^{n+1} \frac{f(x_i)}{(x_i - x_1) \cdots (x_i - x_{i-1})(x_i - x_{i+1}) \cdots (x_i - x_{n+1})} \\
&\qquad - \sum_{i=0}^{n} \frac{f(x_i)}{(x_i - x_0) \cdots (x_i - x_{i-1})(x_i - x_{i+1}) \cdots (x_i - x_n)} \Bigg\} \\
&= \frac{1}{x_{n+1} - x_0} \Bigg\{ \frac{f(x_{n+1})}{(x_{n+1} - x_1) \cdots (x_{n+1} - x_n)} - \frac{f(x_0)}{(x_0 - x_1) \cdots (x_0 - x_n)} \\
&\qquad + \sum_{i=1}^{n} \frac{f(x_i)}{(x_i - x_1) \cdots (x_i - x_{i-1})(x_i - x_{i+1}) \cdots (x_i - x_n)} \cdot \left( \frac{1}{x_i - x_{n+1}} - \frac{1}{x_i - x_0} \right) \Bigg\} \\
&= \sum_{i=0}^{n+1} \frac{f(x_i)}{(x_i - x_0) \cdots (x_i - x_{i-1})(x_i - x_{i+1}) \cdots (x_i - x_{n+1})}. \qquad \square
\end{aligned}$$

---

**Corollary.** *Az osztott differenciák az alappontok sorrendjétől függetlenek.*

**Corollary.** *Ha $f$ folytonos, akkor az osztott differencia az alappontoktól folytonosan függ.*

---

Tegyük fel, hogy $f$ differenciálható függvény. Az utóbbi következmény szerint az $x_1 \mapsto f[x_0, x_1]$ függvény folytonos ha $x_1 \neq x_0$. Az elsőrendű osztott differencia definícióját és $f$ differenciálhatóságát használva

$$\lim_{x_1 \to x_0} f[x_0, x_1] = \lim_{x_1 \to x_0} \frac{f(x_1) - f(x_0)}{x_1 - x_0} = f'(x_0).$$

Ezért az elsőrendű osztott differenciákat egyenlő alappontokra a következőképpen definiáljuk:

$$f[x_0, x_0] := f'(x_0).$$

Ezzel a definícióval az $x_1 \mapsto f[x_0, x_1]$ függvényt folytonosan terjesztettük ki $x_1 = x_0$-ra.

---

## 6.3. A Lagrange-féle interpolációs polinom Newton-féle alakja

Adottak $y_i = f(x_i)$ függvényértékek $i = 0, 1, \ldots, n$-re. Induljunk ki az

$$L_n(x) = L_0(x) + (L_1(x) - L_0(x)) + (L_2(x) - L_1(x)) + \cdots + (L_n(x) - L_{n-1}(x))$$

összefüggésből. Definíció szerint $L_0(x) = f(x_0)$ konstans függvény. $L_i - L_{i-1}$ egy legfeljebb $i$-edfokú polinom, és mivel $L_i$ és $L_{i-1}$ is teljesítik az interpolációs egyenletet $x_0$, $\ldots$, $x_{i-1}$-ben, ezért

$$L_i(x_j) - L_{i-1}(x_j) = f(x_j) - f(x_j) = 0, \qquad j = 0, 1, \ldots, i - 1.$$

De ekkor az algebra alaptétele szerint

$$L_i(x) - L_{i-1}(x) = a_i(x - x_0)(x - x_1) \cdots (x - x_{i-1}),$$

ahol $a_i \in \mathbb{R}$. Ha ebbe a relációba $x = x_i$-t helyettesítünk és használjuk $L_{i-1}(x_i)$-re a Lagrange-polinom képletet, kapjuk, hogy

$$f(x_i) - \sum_{k=0}^{i-1} f(x_k) \frac{(x_i - x_0) \cdots (x_i - x_{k-1})(x_i - x_{k+1}) \cdots (x_i - x_{i-1})}{(x_k - x_0) \cdots (x_k - x_{k-1})(x_k - x_{k+1}) \cdots (x_k - x_{i-1})} = a_i(x_i - x_0) \cdots (x_i - x_{i-1}).$$

---

Ebből $a_i$-t kifejezve

$$\begin{aligned}
a_i &= \frac{f(x_i)}{(x_i - x_0) \cdots (x_i - x_{i-1})} - \frac{1}{(x_i - x_0) \cdots (x_i - x_{i-1})} \\
&\qquad \times \sum_{k=0}^{i-1} f(x_k) \frac{(x_i - x_0) \cdots (x_i - x_{k-1})(x_i - x_{k+1}) \cdots (x_i - x_{i-1})}{(x_k - x_0) \cdots (x_k - x_{k-1})(x_k - x_{k+1}) \cdots (x_k - x_{i-1})} \\
&= \sum_{k=0}^{i} \frac{f(x_k)}{(x_k - x_0) \cdots (x_k - x_{k-1})(x_k - x_{k+1}) \cdots (x_k - x_i)} \\
&= f[x_0, x_1, \ldots, x_i].
\end{aligned}$$

---

Összefoglalva, a Lagrange-féle interpolációs polinomot megadhatjuk az

$$\begin{aligned}
L_n(x) = &\ f[x_0] + f[x_0, x_1](x - x_0) + f[x_0, x_1, x_2](x - x_0)(x - x_1) + \cdots \\
&+ f[x_0, x_1, \ldots, x_n](x - x_0)(x - x_1) \cdots (x - x_{n-1}) \tag{3}
\end{aligned}$$

képlettel is. A (3) formulával definiált polinomot nevezzük a **Lagrange-féle interpolációs polinom Newton-féle alakjának** vagy röviden **Newton-polinomnak.**

Új osztópont hozzávételével a képlet kényelmesen bővíthető egy új taggal:

$$L_{n+1}(x) = L_n(x) + f[x_0, x_1, \ldots, x_{n+1}](x - x_0) \cdots (x - x_n).$$

---

**Algoritmus: A Newton-polinom együtthatóinak generálása**

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

---

**Algoritmus: A Newton-polinom kiértékelése**

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

---

**Osztott differenciák elrendezése kézi számoláskor**

| $x_0$ | $\boxed{f(x_0)}$ | | | |
|-------|------------------|---|---|---|
| $x_1$ | $f(x_1)$ | $\boxed{f[x_0, x_1]}$ | | |
| $x_2$ | $f(x_2)$ | $f[x_1, x_2]$ | $\boxed{f[x_0, x_1, x_2]}$ | |
| $x_3$ | $f(x_3)$ | $f[x_2, x_3]$ | $f[x_1, x_2, x_3]$ | $\ddots$ |
| $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ | |
| $x_n$ | $f(x_n)$ | $f[x_{n-1}, x_n]$ | $f[x_{n-2}, x_{n-1}, x_n]$ | $\cdots$ $\boxed{f[x_0, x_1, \ldots, x_n]}$ |

---

**Példa.** Tekintsük újra a korábbi adatokat:

| $x_i$ | -1 | 1 | 2 | 3 |
|-------|----|----|----|----|
| $y_i$ | -2 | 0 | -2 | 2 |

Képezzük a Newton-polinom felírásához szükséges osztott differenciák táblázatát. A lépésenkénti számítás (animáció):

$$\frac{0-(-2)}{1-(-1)} = 1, \quad \frac{-2-0}{2-1} = -2, \quad \frac{2-(-2)}{3-2} = 4,$$
$$\frac{-2-1}{2-(-1)} = -1, \quad \frac{4-(-2)}{3-1} = 3, \quad \frac{3-(-1)}{3-(-1)} = 1.$$

A teljes táblázat:

$$
\begin{array}{rrrrr}
-1 & -2 & & & \\
1 & 0 & 1 & & \\
2 & -2 & -2 & -1 & \\
3 & 2 & 4 & 3 & 1
\end{array}
$$

Ebből következik, hogy

$$L_3(x) = -2 + (x + 1) - (x + 1)(x - 1) + (x + 1)(x - 1)(x - 2),$$

és így $L_3(0) = 2$. $L_3$ képletét egyszerűsítve kapjuk a korábbi eredményt: $L_3(x) = x^3 - 3x^2 + 2$.

---

**Tétel.** *Legyenek $x_i \in (a,b)$ $(i = 0, \ldots, n)$ páronként különböző alappontok és $y_i = f(x_i)$ $(i = 0, \ldots, n)$. Legyen $L_n(x)$ az adatokhoz tartozó $n$-edfokú Lagrange-polinom. Ekkor*

$$f(x) = L_n(x) + f[x_0, x_1, \ldots, x_n, x](x - x_0)(x - x_1) \cdots (x - x_n).$$

**Bizonyítás.** Rögzítsünk egy $x \in (a, b)$ számot amely nem egyezik meg egyik alapponttal sem. Vegyük $x$-et az alappontokhoz és rendeljük hozzá az $f(x)$ függvényértéket. Legyen $L_{n+1}$ a kibővített adatokhoz tartozó Lagrange-polinom. A Newton-polinom definíciója szerint

$$L_{n+1}(t) = L_n(t) + f[x_0, x_1, \ldots, x_n, x](t - x_0) \cdots (t - x_n).$$

Ebből $t = x$-et véve következik az állítás, hiszen $f(x) = L_{n+1}(x)$. $\square$

---

**Corollary.** *Ha $f \in C^n(a,b)$ és $x_i$ $(i = 0, \ldots, n)$ páronként különböző alappontok, akkor létezik olyan $\xi \in \langle x_0, x_1, \ldots, x_n \rangle$, hogy*

$$f[x_0, x_1, \ldots, x_n] = \frac{f^{(n)}(\xi)}{n!}.$$

---

## 6.4. Hermite-interpoláció

Legyen adott egy $f$ differenciálható függvény, és osztópontoknak egy $x_i$ $(i = 0, \ldots, n)$ véges sorozata. Az ún. **Hermite-féle interpolációs feladatban** az $y_i = f(x_i)$ függvényértékeken kívül az $y_i' := f'(x_i)$ derivált értékeket is interpoláljuk. Keresünk tehát egy olyan

$$g(x) = c_0 + c_1 x + \cdots + c_m x^m$$

polinomot, amelyre

$$g(x_i) = y_i, \qquad g'(x_i) = y_i', \qquad i = 0, 1, \ldots, n$$

teljesül.

[ábra: adatpontok érintőszakaszokkal, majd átmenő $g(x)$ görbe]

---

A $g$ függvény képletében $m + 1$ db paraméter szerepel, az előző feltételek $2(n + 1)$ egyenletet határoznak meg, így azt várjuk, hogy

$$m = 2n + 1\text{-edfokú}$$

polinomok között találunk egyértelmű megoldását az Hermite-féle interpolációs problémának. Az Hermite-féle interpolációs probléma megoldását **Hermite-féle interpolációs polinomnak** vagy röviden **Hermite-polinomnak** nevezzük, és $H_{2n+1}$ jelöli.

---

A magasabbrendű speciális osztott differenciák, ahol az egymás után következő két alappont megegyezhet:

$$\begin{aligned}
f&[x_0, x_0, x_1, x_1, \ldots, x_n, x_n] \\
&= \frac{f[x_0, x_1, x_1, \ldots, x_n, x_n] - f[x_0, x_0, x_1, x_1, \ldots, x_n]}{x_n - x_0}.
\end{aligned}$$

Például

$$f[x_0, x_0, x_1] = \frac{f[x_0, x_1] - f[x_0, x_0]}{x_1 - x_0}, \qquad f[x_0, x_1, x_1] = \frac{f[x_1, x_1] - f[x_0, x_1]}{x_1 - x_0}.$$

---

**Tétel.** *Az Hermite-féle interpolációs feladatnak létezik egyértelmű megoldása a legfeljebb $(2n + 1)$-edfokú polinomok körében, amelyet a*

$$\begin{aligned}
H_{2n+1}(x) = &\ f[x_0] + f[x_0, x_0](x - x_0) + f[x_0, x_0, x_1](x - x_0)^2 \\
&+ f[x_0, x_0, x_1, x_1](x - x_0)^2(x - x_1) + f[x_0, x_0, x_1, x_1, x_2](x - x_0)^2(x - x_1)^2 \\
&+ f[x_0, x_0, x_1, x_1, x_2, x_2](x - x_0)^2(x - x_1)^2(x - x_2) + \cdots \tag{4} \\
&+ f[x_0, x_0, x_1, x_1, \ldots, x_n, x_n](x - x_0)^2 \cdots (x - x_{n-1})^2(x - x_n)
\end{aligned}$$

*alakban adhatunk meg. Továbbá a közelítés képlethibája*

$$f(x) - H_{2n+1}(x) = f[x_0, x_0, \ldots, x_n, x_n, x](x - x_0)^2 \cdots (x - x_n)^2. \tag{5}$$

---

**Bizonyítás.** Először vizsgáljuk az Hermite-polinom egyértelműségét. Tegyük fel, hogy $H_{2n+1}$ és $\tilde{H}_{2n+1}$ legfeljebb $(2n + 1)$-edfokú polinomok, amelyek teljesítik az Hermite-féle interpolációs feltételeket. Ekkor

$$P := H_{2n+1} - \tilde{H}_{2n+1}$$

is egy legfeljebb $(2n+1)$-edfokú polinom, amelyre

$$P(x_i) = H_{2n+1}(x_i) - \tilde{H}_{2n+1}(x_i) = f(x_i) - f(x_i) = 0$$

és

$$P'(x_i) = H'_{2n+1}(x_i) - \tilde{H}'_{2n+1}(x_i) = f'(x_i) - f'(x_i) = 0,$$

azaz $x_i$ kétszeres gyöke $P$-nek minden $i = 0, 1, \ldots, n$-re. $P$-nek van tehát $2(n + 1) = 2n + 2$ gyöke, amiből következik az algebra alaptétele szerint, hogy $P$ azonosan 0 polinom, hiszen $P$ legfeljebb $(2n + 1)$-edfokú.

---

**Bizonyítás (folyt.)** Direkt számolással rögtön kapjuk, hogy

$$H_{2n+1}(x_0) = f(x_0) \quad \text{és} \quad H'_{2n+1}(x_0) = f[x_0, x_0] = f'(x_0).$$

Válasszunk olyan $x_i$-hez közeli $x_i' > x_i$ számokat úgy, hogy $\{x_i, x_i':\ i = 0, 1, \ldots, n\}$ páronként különbözőek legyenek, és legyen $L_{2n+1}$ ezekhez az alappontokhoz tartozó, $f$-et interpoláló Lagrange-féle interpolációs polinom. [ábra: $x_0, x_0', \ldots, x_i, x_i', x_{i+1}, x_{i+1}', \ldots, x_n, x_n'$ osztópontok]

---

**Bizonyítás (folyt.)** Ekkor

$$\begin{aligned}
L_{2n+1}(x) = &\ f[x_0] + f[x_0, x_0'](x - x_0) + f[x_0, x_0', x_1](x - x_0)(x - x_0') \\
&+ f[x_0, x_0', x_1, x_1'](x - x_0)(x - x_0')(x - x_1) + \cdots \\
&+ f[x_0, x_0', x_1, x_1', \ldots, x_n, x_n'](x - x_0)(x - x_0') \cdots (x - x_{n-1}) \\
&\quad \cdot (x - x_{n-1}')(x - x_n),
\end{aligned}$$

és

$$f(x) = L_{2n+1}(x) + f[x_0, x_0', \ldots, x_n, x_n', x](x - x_0)(x - x_0') \cdots (x - x_n)(x - x_n').$$

$L_{2n+1}$ és $H_{2n+1}$ definíciójából és az osztott differencia folytonosságából kapjuk, hogy minden $x$-re

$$L_{2n+1}(x) \to H_{2n+1}(x) \quad \text{ha } (x_0', x_1', \ldots, x_n') \to (x_0, x_1, \ldots, x_n), \tag{6}$$

és így

$$f(x) = H_{2n+1}(x) + f[x_0, x_0, x_1, x_1, \ldots, x_n, x_n, x](x - x_0)^2(x - x_1)^2 \cdots (x - x_n)^2.$$

Ez igazolja az (5) összefüggést.

---

**Bizonyítás (folyt.)** A Lagrange-féle interpolációs polinom egyértelműségéből következik, hogy ha $x_0$, $x_0'$ és $x_1$, $x_1'$ sorrendjét felcseréljük, az interpolációs polinom nem fog változni, azaz

$$\begin{aligned}
L_{2n+1}(x) = &\ f[x_1] + f[x_1, x_1'](x - x_1) + f[x_1, x_1', x_0](x - x_1)(x - x_1') \\
&+ f[x_1, x_1', x_0, x_0'](x - x_1)(x - x_1')(x - x_0) + \cdots \\
&+ f[x_1, x_1', x_0, x_0', x_2, x_2' \ldots, x_n, x_n'](x - x_1)(x - x_1')(x - x_0)(x - x_0') \\
&\quad \cdot (x - x_2)(x - x_2') \cdots (x - x_{n-1})(x - x_{n-1}')(x - x_n).
\end{aligned}$$

---

**Bizonyítás (folyt.)** Mindkét oldal határértékét véve, ha $(x_0', x_1', \ldots, x_n') \to (x_0, x_1, \ldots, x_n)$, és használva a (6) összefüggést és a határérték egyértelműségét:

$$\begin{aligned}
H_{2n+1}(x) = &\ f[x_1] + f[x_1, x_1](x - x_1) + f[x_1, x_1, x_0](x - x_1)^2 \\
&+ f[x_1, x_1, x_0, x_0](x - x_1)^2(x - x_0) + f[x_1, x_1, x_0, x_0, x_2](x - x_1)^2(x - x_0)^2 \\
&+ f[x_1, x_1, x_0, x_0, x_2, x_2](x - x_1)^2(x - x_0)^2(x - x_2) + \cdots \\
&+ f[x_1, x_1, x_0, x_0, x_2, x_2, \ldots, x_n, x_n](x - x_1)^2(x - x_0)^2(x - x_2)^2 \\
&\quad \cdots (x - x_{n-1})^2(x - x_n)
\end{aligned}$$

alakban is felírható. Ebből nyilvánvaló, hogy $H_{2n+1}(x_1) = f(x_1)$ és $H'_{2n+1}(x_1) = f'(x_1)$. Ehhez hasonlóan látható be, hogy $H_{2n+1}(x_i) = f(x_i)$ és $H'_{2n+1}(x_i) = f'(x_i)$, $i = 2, 3, \ldots, n$-re. $\square$

---

**Tétel.** *Legyen $f \in C^{2n+2}$. Ekkor létezik olyan $\xi \in \langle x_0, x_1, \ldots, x_n, x \rangle$, hogy*

$$f(x) - H_{2n+1}(x) = \frac{f^{(2n+2)}(\xi)}{(2n+2)!}(x - x_0)^2 \ldots (x - x_n)^2.$$

**Bizonyítás.** Legyen $x$ egy osztópontoktól különböző rögzített szám, és definiáljuk a

$$g(z) = f(z) - H_{2n+1}(z) - \frac{(z - x_0)^2 \cdots (z - x_n)^2}{(x - x_0)^2 \cdots (x - x_n)^2}(f(x) - H_{2n+1}(x))$$

függvényt. Nyilván $g \in C^{2n+2}$, és $x_0, \ldots, x_n$ kétszeres gyökei, $x$ pedig egyszeres gyöke $g$-nek. Ezért az általánosított Rolle-tétel szerint létezik olyan $\xi \in \langle x_0, x_1, \ldots, x_n, x \rangle$, hogy $g^{(2n+2)}(\xi) = 0$. Ebből pedig következik a tétel állítása. $\square$

---

**Corollary.** *Tegyük fel, hogy $f \in C^{2n+2}$ és $x, x_0, \ldots, x_n$ páronként különböző számok. Ekkor létezik olyan $\xi \in \langle x_0, x_1, \ldots, x_n, x \rangle$, hogy*

$$f[x_0, x_0, \ldots, x_n, x_n, x] = \frac{f^{(2n+2)}(\xi)}{(2n+2)!}.$$

---

**Osztott differenciák elrendezése a Hermite-polinom számoláskor**

| $x_0$ | $\boxed{f(x_0)}$ | | | |
|-------|------------------|---|---|---|
| $x_0$ | $f(x_0)$ | $\boxed{f[x_0, x_0]}$ | | |
| $x_1$ | $f(x_1)$ | $f[x_0, x_1]$ | $\boxed{f[x_0, x_0, x_1]}$ | |
| $x_1$ | $f(x_1)$ | $f[x_1, x_1]$ | $f[x_0, x_1, x_1]$ | $\ddots$ |
| $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ | |
| $x_n$ | $f(x_n)$ | $f[x_{n-1}, x_n]$ | $f[x_{n-1}, x_{n-1}, x_n]$ | $\cdots$ |
| $x_n$ | $f(x_n)$ | $f[x_n, x_n]$ | $f[x_{n-1}, x_n, x_n]$ | $\cdots$ $\boxed{f[x_0, x_0, x_1, x_1 \ldots, x_n, x_n]}$ |

---

**Példa.** Tekintsük a következő adatokat:

| $x_i$ | -1 | 1 | 2 |
|--------|----|----|----|
| $y_i$ | -1 | 1 | 29 |
| $y_i'$ | -5 | 7 | 61 |

Az adatokat interpoláló Hermite-féle polinomhoz a táblázat lépésenkénti számítása (animáció):

$$\frac{1-(-1)}{1-(-1)} = 1, \quad \frac{29-1}{2-1} = 28, \quad \frac{1-(-5)}{1-(-1)} = 3, \quad \frac{7-1}{1-(-1)} = 3,$$
$$\frac{28-7}{2-1} = 21, \quad \frac{61-28}{2-1} = 33, \quad \frac{3-3}{1-(-1)} = 0, \quad \frac{21-3}{2-(-1)} = 6,$$
$$\frac{33-21}{2-1} = 12, \quad \frac{6-0}{2-(-1)} = 2, \quad \frac{12-6}{2-(-1)} = 2, \quad \frac{2-2}{2-(-1)} = 0.$$

A teljes táblázat:

$$
\begin{array}{rrrrrrr}
-1 & -1 & & & & & \\
-1 & -1 & -5 & & & & \\
1 & 1 & 1 & 3 & & & \\
1 & 1 & 7 & 3 & 0 & & \\
2 & 29 & 28 & 21 & 6 & 2 & \\
2 & 29 & 61 & 33 & 12 & 2 & 0
\end{array}
$$

Így a $H_5$ Hermite-polinom negyedfokú:

$$H_5(x) = -1 - 5(x+1) + 3(x+1)^2 + 2(x+1)^2(x-1)^2 = 2x^4 - x^2 + x - 1.$$

---

## 6.5. Spline interpoláció

Legyen $a = x_0 < x_1 < \ldots < x_n = b$ az $[a,b]$ intervallumnak egy felosztása. Az $S \colon [a,b] \to \mathbb{R}$ folytonos függvényt az $\{x_i\}$ osztópontokhoz tartozó **$k$-adrendű spline** függvénynek nevezzük, ha $S \in C^{k-1}(a,b)$, és $S$ megszorítása minden $[x_i, x_{i+1}]$ intervallumra egy $k$-adrendű polinom. Az elsőrendű, másodrendű ill. harmadrendű spline függvényeket **lineáris, kvadratikus, ill. kubikus spline függvényeknek** nevezzük.

[ábra: lineáris spline függvény — szakaszonkénti egyenesek]

[ábra: rugalmas spline-vonalzó (fizikai spline) használata]

---

Adott osztópontoknak egy $a = x_0 < x_1 < \ldots < x_n = b$, és hozzá tartozó $y_0, y_1, \ldots, y_n$ függvényértékek véges sorozata. Keresünk egy olyan $S$ **harmadrendű spline** függvényt, amely interpolálja a megadott adatokat, azaz

$$S(x_i) = y_i, \qquad i = 0, 1, \ldots, n.$$

Jelöljük $S_i$-vel az $S$ függvény $[x_i, x_{i+1}]$ intervallumra vett megszorítását $(i = 0, 1, \ldots, n - 1)$. [ábra: $S_0, S_i, S_{i+1}, S_{n-1}$ szakaszok]

---

Az $S_i$ függvények teljesítik a következő feltételeket:

$$\begin{aligned}
S_i(x_i) &= y_i, & i &= 0, 1, \ldots, n - 1, \quad\text{(7)} \\
S_i(x_{i+1}) &= y_{i+1}, & i &= 0, 1, \ldots, n - 1, \quad\text{(8)} \\
S_i'(x_{i+1}) &= S_{i+1}'(x_{i+1}), & i &= 0, 1, \ldots, n - 2, \quad\text{(9)} \\
S_i''(x_{i+1}) &= S_{i+1}''(x_{i+1}), & i &= 0, 1, \ldots, n - 2. \quad\text{(10)}
\end{aligned}$$

Mivel minden egyes $S_i$ függvényt 4 paraméter határoz meg, így összesen $4n$ paraméter definiálja $S$-t. A (7)–(10) feltételek száma viszont csak $4n - 2$, ezért még két feltételt megadhatunk. Egy gyakran használt feltétel a következő:

$$S_0''(x_0) = 0 \qquad \text{és} \qquad S_{n-1}''(x_n) = 0. \tag{11}$$

A (7)–(11) feltételekkel definiált kubikus spline függvényt **természetes spline** függvénynek nevezzük.

---

Vegyük fel $S_i$-t a következő alakban:

$$S_i(x) = a_i + b_i(x - x_i) + c_i(x - x_i)^2 + d_i(x - x_i)^3,$$

ahol $a_i, b_i, c_i$ és $d_i$ $(i = 0, 1, \ldots, n - 1)$ meghatározandó paraméterek. Ekkor

$$\begin{aligned}
S_i'(x) &= b_i + 2c_i(x - x_i) + 3d_i(x - x_i)^2, \\
S_i''(x) &= 2c_i + 6d_i(x - x_i).
\end{aligned}$$

Ezekből rögtön következik

$$a_i = S_i(x_i) = y_i, \quad b_i = S_i'(x_i) \quad \text{és} \quad c_i = S_i''(x_i)/2, \quad i = 0, 1, \ldots, n - 1. \tag{12}$$

A (12) összefüggések segítségével definiálhatjuk az $a_n$, $b_n$ és $c_n$ konstansokat is:

$$a_n := y_n, \qquad b_n := S'(x_n) \qquad \text{és} \qquad c_n := S''(x_n)/2. \tag{13}$$

(A (13) képletekben a deriváltak bal oldali deriváltakat jelentenek.)

---

$x = x_{i+1}$-t behelyettesítve $S_i$ képletébe:

$$y_i + b_i(x_{i+1} - x_i) + c_i(x_{i+1} - x_i)^2 + d_i(x_{i+1} - x_i)^3 = y_{i+1}.$$

Vezessük be a $\Delta x_i := x_{i+1} - x_i$ és a $\Delta y_i := y_{i+1} - y_i$ jelöléseket. Így

$$b_i \Delta x_i + c_i(\Delta x_i)^2 + d_i(\Delta x_i)^3 = \Delta y_i, \qquad i = 0, 1, \ldots, n - 1. \tag{14}$$

A (9) feltételből és a $b_{i+1} = S_{i+1}'(x_{i+1})$ összefüggésből

$$b_i + 2c_i \Delta x_i + 3d_i(\Delta x_i)^2 = b_{i+1} \tag{15}$$

minden $i = 0, 1, \ldots, n - 2$-re. Hasonlóan, a (10) egyenletből és $c_n$ definíciójából következik

$$2c_i + 6d_i \Delta x_i = 2c_{i+1}, \qquad i = 0, 1, \ldots, n - 1,$$

amiből

$$d_i = \frac{c_{i+1} - c_i}{3\Delta x_i}, \qquad i = 0, 1, \ldots, n - 1. \tag{16}$$

---

Ezt behelyettesítve a (14) és (15) egyenletekbe:

$$\begin{aligned}
b_i \Delta x_i + c_i(\Delta x_i)^2 + \frac{c_{i+1} - c_i}{3}(\Delta x_i)^2 &= \Delta y_i, & i &= 0, 1, \ldots, n - 1, \\
b_i + 2c_i \Delta x_i + (c_{i+1} - c_i)\Delta x_i &= b_{i+1}, & i &= 0, 1, \ldots, n - 1.
\end{aligned}$$

Az első egyenletből kifejezve $b_i$-t

$$b_i = \frac{\Delta y_i}{\Delta x_i} - \frac{2c_i + c_{i+1}}{3}\Delta x_i,$$

és behelyettesítve a másodikba $i = 0, 1, \ldots, n - 2$-re:

$$c_i \Delta x_i + 2c_{i+1}(\Delta x_i + \Delta x_{i+1}) + c_{i+2}\Delta x_{i+1} = 3\frac{\Delta y_{i+1}}{\Delta x_{i+1}} - 3\frac{\Delta y_i}{\Delta x_i}, \quad i = 0, 1, \ldots, n - 2. \tag{17}$$

A (17) egyenlet $n - 1$ db, $c_i$-re nézve lineáris egyenletet ír le.

---

Hozzávéve a (11) feltételből adódó $c_0 = 0$ és $c_n = 0$ egyenleteket $n + 1$ egyenletből álló $\mathbf{Ax} = \mathbf{b}$ alakú lineáris egyenletrendszert kapunk, ahol $\mathbf{x} = (c_0, c_1, \ldots, c_n)^T$,

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

Mivel $\mathbf{A}$ diagonálisan domináns, az $\mathbf{Ax} = \mathbf{b}$ egyenletnek létezik egyértelmű megoldása.

---

A $c_i$-k ismeretében pedig a $d_i$ és $b_i$ együtthatókat is meghatározhatjuk.

**Tétel.** *A harmadrendű spline interpoláció feladatának létezik pontosan egy természetes harmadrendű spline függvény megoldása.*

---

**Példa.** Illesszünk természetes harmadrendű spline függvényt az

| $x_i$ | 0.0 | 0.5 | 1.5 | 2.0 | 3.0 | 4.0 |
|-------|-----|-----|-----|-----|-----|-----|
| $y_i$ | 0.9 | 0.1 | 1.5 | 0.0 | -0.8 | -0.2 |

adatokra! A $c_i$ együtthatókra felírt lineáris egyenletrendszer:

$$\begin{pmatrix}
1 & 0 & 0 & 0 & 0 & 0 \\
0.5 & 3 & 1 & 0 & 0 & 0 \\
0 & 1 & 3 & 0.5 & 0 & 0 \\
0 & 0 & 0.5 & 3 & 1 & 0 \\
0 & 0 & 0 & 1 & 4 & 1 \\
0 & 0 & 0 & 0 & 0 & 1
\end{pmatrix}
\begin{pmatrix}
c_0 \\ c_1 \\ c_2 \\ c_3 \\ c_4 \\ c_5
\end{pmatrix}
=
\begin{pmatrix}
0 \\ 9.0 \\ -13.2 \\ 6.6 \\ 4.2 \\ 0
\end{pmatrix}.$$

---

**Példa (folyt.)** A számolást elvégezve a következő harmadrendű polinomokat kapjuk:

$$\begin{aligned}
S_0(x) &= 0.9 - 2.47117647x + 3.48470588x^3, \\
S_1(x) &= 0.1 + 0.142352940(x - 0.5) + 5.22705882(x - 0.5)^2 \\
&\quad - 3.96941176(x - 0.5)^3, \\
S_2(x) &= 1.5 - 1.31176471(x - 1.5) - 6.68117647(x - 1.5)^2 \\
&\quad + 6.60941177(x - 1.5)^3, \\
S_3(x) &= -3.03588235(x - 2) + 3.232941176(x - 2)^2 \\
&\quad - 0.997058823(x - 2)^3, \\
S_4(x) &= -0.8 + 0.438823529(x - 3) + 0.2417647059(x - 3)^2 \\
&\quad - 0.0805882353(x - 3)^3.
\end{aligned}$$

[ábra: Spline interpoláció grafikonja az adatpontokkal]

---

A (11) feltétel helyett az

$$S'(x_0) = y_0' \qquad \text{és} \qquad S'(x_n) = y_n' \tag{18}$$

feltételt is kiköthetjük, ahol $y_0'$ és $y_n'$ adott számok. A (18) feltételt teljesítő spline függvényt **teljes spline függvénynek** nevezzük.

[ábra: madár alakú adatok ("Adatok")]
[ábra: ugyanaz Lagrange-interpolációval — szélső oszcilláció]
[ábra: ugyanaz spline interpolációval — sima illeszkedés]

---

**Tétel.** *Legyen $a = x_0 < x_1 < \ldots < x_n = b$ és $y_0, y_1, \ldots, y_n$ osztópontoknak és hozzátartozó függvényértékeknek egy véges sorozata, és legyen $S$ az ezeket interpoláló természetes kubikus spline függvény. Ekkor*

$$\int_a^b (S''(x))^2 \, dx \leq \int_a^b (f''(x))^2 \, dx \tag{19}$$

*minden olyan $f \in C^2(a,b)$-re, amely szintén interpolálja az adatokat, azaz $f(x_i) = y_i$, $i = 0, 1, \ldots, n$-re.*

**Bizonyítás.** Vezessük be a $g(x) \equiv f(x) - S(x)$ függvényt. Ekkor $f''(x) = S''(x) + g''(x)$, és így

$$\int_a^b (f''(x))^2 \, dx = \int_a^b (S''(x))^2 \, dx + 2\int_a^b S''(x)g''(x) \, dx + \int_a^b (g''(x))^2 \, dx.$$

---

**Bizonyítás (folyt.)** Mivel $\int_a^b (g''(x))^2 \, dx \geq 0$, így a tétel állítása következik, ha belátjuk, hogy $\int_a^b S''(x)g''(x) \, dx = 0$. Az integrált felbontva és parciálisan integrálva:

$$\begin{aligned}
\int_a^b S''(x)g''(x) \, dx &= \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} S''(x)g''(x) \, dx \\
&= \sum_{i=1}^{n} [S''(x)g'(x)]_{x_{i-1}}^{x_i} - \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} S'''(x)g'(x) \, dx \\
&= S''(b)g'(b) - S''(a)g'(a) - \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} S'''(x)g'(x) \, dx.
\end{aligned}$$

$S$ természetes spline függvény, így $S''(a) = S''(b) = 0$. Mivel $S$ harmadfokú polinom minden $[x_{i-1}, x_i]$ intervallumon, ezért ott $S'''$ konstans, így az integrál elé kivihető. Viszont $\int_{x_{i-1}}^{x_i} g'(x) \, dx = g(x_i) - g(x_{i-1}) = 0$, mivel $g(x_i) = 0$ minden $i = 0, 1, \ldots, n$-re. $\square$

---

**Tétel.** *Legyen $f \in C^4(a,b)$, $a = x_0 < x_1 < \ldots < x_n = b$ osztópontok, $y_i = f(x_i)$, $i = 0, 1, \ldots, n$ függvényértékek, valamint $y_0' = f'(a)$ és $y_n' = f'(b)$ derivált értékek, és legyen $S$ az ezekhez tartozó teljes spline függvény. Ekkor $x \in [a,b]$-re*

$$\begin{aligned}
|f(x) - S(x)| &\leq \frac{5}{384}M_4 h^4, \\
|f'(x) - S'(x)| &\leq \left( \frac{\sqrt{3}}{216} + \frac{1}{24} \right) M_4 h^3, \\
|f''(x) - S''(x)| &\leq \left( \frac{1}{12} + \frac{h}{3k} \right) M_4 h^2,
\end{aligned}$$

*ahol $M_4 := \max\{|f^{(4)}(x)|:\ x \in [a,b]\}$, $h := \max\{x_{i+1} - x_i:\ i = 0, 1, \ldots, n - 1\}$, $k := \min\{x_{i+1} - x_i:\ i = 0, 1, \ldots, n - 1\}$.*
