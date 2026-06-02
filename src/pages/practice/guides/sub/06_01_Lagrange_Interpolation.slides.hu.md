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
