# Numerikus analízis

## 4. Lineáris egyenletrendszerek megoldása iterációs módszerekkel

Ferenc Hartung

Pannon Egyetem, Matematika Tanszék

2026

---

## 4.1. Lineáris fixpont iteráció

Először nézzük át a sajátérték fogalmát. A $\lambda \in \mathbb{C}$ komplex számot az $\mathbf{A} \in \mathbb{R}^{n \times n}$ négyzetes mátrix **sajátértékének** nevezzük, ha az

$$\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$$

egyenletnek létezik nemtriviális ($\mathbf{x} \neq \mathbf{0}$) megoldása. Az $\mathbf{x}$ megoldást az $\mathbf{A}$ mátrix $\lambda$-hoz tartozó **sajátvektorának** nevezzük. A sajátvektor egyenlet ekvivalens alakja

$$(\mathbf{A} - \lambda\mathbf{I})\mathbf{x} = \mathbf{0},$$

ahol $\mathbf{I}$ az $n \times n$-dimenziós egységmátrix, azaz $\mathbf{I}\mathbf{x} = \mathbf{x}$.

> **Tétel.** Az $n \times n$-dimenziós $\mathbf{A}$ mátrixnak $n$ db sajátértéke van, amely megoldása
> $$\det(\mathbf{A} - \lambda\mathbf{I}) = 0$$
> $n$-edfokú algebrai egyenletnek, az ún. **karakterisztikus egyenletnek**.

Legyen $\mathbf{A} \in \mathbb{R}^{n \times n}$. Az

$$\rho(\mathbf{A}) := \max\{|\lambda| : \lambda \text{ sajátértéke } \mathbf{A}\text{-nak}\}$$

számot az $\mathbf{A}$ mátrix **spektrálsugarának** nevezzük.

> **Tétel.** Legyen $\|\cdot\|$ egy mátrix norma. Ekkor
> $$\rho(\mathbf{A}) \leq \|\mathbf{A}\|.$$

> **Bizonyítás.** Legyen $\lambda$ az $\mathbf{A}$ mátrix egy sajátértéke, és legyen $\mathbf{v} \neq \mathbf{0}$ a hozzá tartozó sajátvektor, és legyen $\|\cdot\|$ a vektor norma, ami a mátrix normát generálja. Ekkor
> $$\lambda\mathbf{v} = \mathbf{A}\mathbf{v},$$
> és így
> $$|\lambda| \|\mathbf{v}\| = \|\mathbf{A}\mathbf{v}\| \leq \|\mathbf{A}\| \|\mathbf{v}\|.$$
> Ebből következik, hogy
> $$|\lambda| \leq \|\mathbf{A}\|,$$
> és ezért
> $$\rho(\mathbf{A}) = \max |\lambda| \leq \|\mathbf{A}\|.$$

Tekintsük az

$$\mathbf{x} = \mathbf{T}\mathbf{x} + \mathbf{c}$$

lineáris fixpont egyenletet és az

$$\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c}, \qquad k = 0, 1, 2, \ldots \tag{1}$$

lineáris fixpont iterációt, ahol $\mathbf{T} \in \mathbb{R}^{n \times n}$, $\mathbf{c} \in \mathbb{R}^n$. Abban a speciális esetben, amikor $\mathbf{c} = \mathbf{0}$, kapjuk

$$
\begin{aligned}
\mathbf{x}^{(k)} &= \mathbf{T}\mathbf{x}^{(k-1)} \\
&= \mathbf{T}\Big(\mathbf{T}\mathbf{x}^{(k-2)}\Big) \\
&\;\;\vdots \\
&= \mathbf{T}^k \mathbf{x}^{(0)} \qquad k = 1, 2, \ldots .
\end{aligned}
$$

Legyen $a$ egy valós vagy komplex szám. Ekkor

$$\lim_{k\to\infty} a^k = 0 \quad \iff \quad |a| < 1.$$

> **Tétel.** A következő állítások ekvivalensek:
>
> 1. $\displaystyle\lim_{k\to\infty} \mathbf{T}^k = \mathbf{0}$ *(zéró mátrix)*, azaz
> $$\lim_{k\to\infty} \|\mathbf{T}^k - \mathbf{0}\| = \lim_{k\to\infty} \|\mathbf{T}^k\| = 0$$
> minden $\|\cdot\|$ mátrixnormára;
>
> 2. $\displaystyle\lim_{k\to\infty} \mathbf{T}^k \mathbf{x} = \mathbf{0}$ *(zéró vektor)* minden $\mathbf{x} \in \mathbb{R}^n$-re, azaz
> $$\lim_{k\to\infty} \|\mathbf{T}^k \mathbf{x} - \mathbf{0}\| = \lim_{k\to\infty} \|\mathbf{T}^k \mathbf{x}\| = 0$$
> minden $\mathbf{x} \in \mathbb{R}^n$-re és minden $\|\cdot\|$ vektornormára;
>
> 3. $\rho(\mathbf{T}) < 1$.

> **Bizonyítás.**
> $(1) \Rightarrow (2)$:
> $$\|\mathbf{T}^k \mathbf{x}\| \leq \|\mathbf{T}^k\| \|\mathbf{x}\| \to 0, \qquad \text{ha } k \to \infty$$
> minden $x \in \mathbb{R}^n$-re és minden $\|\cdot\|$ normára.
>
> $(2) \Rightarrow (3)$: Legyen $\lambda$ a $\mathbf{T}$ mátrix egy sajátértéke, és legyen $\mathbf{v}$ egy $\lambda$-hoz tartozó sajátvektor. Ekkor
> $$\mathbf{T}^k \mathbf{v} = \mathbf{T}^{k-1}(\mathbf{T}\mathbf{v}) = \lambda\mathbf{T}^{k-1}\mathbf{v} = \cdots = \lambda^k \mathbf{v},$$
> így
> $$\lim_{k\to\infty} \mathbf{T}^k \mathbf{v} = \mathbf{0} \quad \Rightarrow \quad |\lambda| < 1,$$
> mivel $\mathbf{v} \neq \mathbf{0}$. Mivel $\lambda$ egy tetszőleges sajátértéke $\mathbf{T}$-nek, ezért
> $$\rho(\mathbf{T}) < 1$$
> teljesül.
>
> $(3) \Rightarrow (1)$: Most ezt nem igazoljuk.

> **Tétel.** Ha $\|\mathbf{T}\| < 1$ valamely $\|\cdot\|$ mátrixnormában, akkor $\|\mathbf{T}^k\| \to 0$, ha $k \to \infty$.

> **Bizonyítás.**
> $$0 \leq \|\mathbf{T}^k\| \leq \|\mathbf{T}\|^k \to 0.$$

Egy $a$ valós vagy komplex szám esetén az

$$1 + a + a^2 + a^3 + \cdots + a^k + \cdots$$

végtelen geometriai sor akkor és csak akkor konvergens, ha $|a| < 1$, és

$$1 + a + a^2 + a^3 + \cdots = \frac{1}{1 - a}, \qquad |a| < 1.$$

Szükségünk lesz az $\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots$ ún. **geometriai sor** vagy **Neumann-sor** konvergenciájának vizsgálatára, ahol $\mathbf{A}$ egy négyzetes mátrix.

> **Tétel.** Ha $\rho(\mathbf{A}) < 1$, akkor az $\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots$ végtelen mátrix sor konvergens, az $\mathbf{I} - \mathbf{A}$ mátrix invertálható, és
> $$(\mathbf{I} - \mathbf{A})^{-1} = \mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots .$$
> Fordítva, ha $\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots$ geometriai sor konvergens, akkor
> $$\rho(\mathbf{A}) < 1.$$

> **Bizonyítás.** Legyen $\rho(\mathbf{A}) < 1$. Tegyük fel, hogy $\mathbf{I} - \mathbf{A}$ nem invertálható. Ekkor létezik $\mathbf{x} \neq \mathbf{0}$, hogy $(\mathbf{I} - \mathbf{A})\mathbf{x} = \mathbf{0}$. De ekkor
> $$\mathbf{A}\mathbf{x} = \mathbf{x},$$
> azaz $1$ sajátértéke $\mathbf{A}$-nak, ami ellentmond annak, hogy $\rho(\mathbf{A}) < 1$. Ezért $\mathbf{I} - \mathbf{A}$ invertálható. Ellenőrizhető, hogy
> $$(\mathbf{I} - \mathbf{A})(\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \cdots + \mathbf{A}^m) = \mathbf{I} - \mathbf{A}^{m+1}. \tag{2}$$
> Így
> $$\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \cdots + \mathbf{A}^m = (\mathbf{I} - \mathbf{A})^{-1}(\mathbf{I} - \mathbf{A}^{m+1}),$$
> és ekkor használva, hogy $\mathbf{A}^{m+1} \to 0$, kapjuk
> $$\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \cdots + \mathbf{A}^m \to (\mathbf{I} - \mathbf{A})^{-1},$$
> ha $m \to \infty$. A fordított állítást most nem bizonyítjuk.

> **Következmény.** Ha $\|\mathbf{A}\| < 1$ valamely $\|\cdot\|$ mátrixnormában, akkor $\mathbf{I} - \mathbf{A}$ invertálható, az $\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots$ geometriai sor konvergens, $\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots = (\mathbf{I} - \mathbf{A})^{-1}$, valamint
> $$\|(\mathbf{I} - \mathbf{A})^{-1}\| \leq \frac{1}{1 - \|\mathbf{A}\|}.$$

> **Bizonyítás.**
> $$
> \begin{aligned}
> \|(\mathbf{I} - \mathbf{A})^{-1}\| &= \Big\| \lim_{m\to\infty} (\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \cdots + \mathbf{A}^m) \Big\| \\
> &= \lim_{m\to\infty} \|\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \cdots + \mathbf{A}^m\| \\
> &\leq \lim_{m\to\infty} (\|\mathbf{I}\| + \|\mathbf{A}\| + \|\mathbf{A}^2\| + \|\mathbf{A}^3\| + \cdots + \|\mathbf{A}^m\|) \\
> &\leq \lim_{m\to\infty} (1 + \|\mathbf{A}\| + \|\mathbf{A}\|^2 + \|\mathbf{A}\|^3 + \cdots + \|\mathbf{A}\|^m) \\
> &= \frac{1}{1 - \|\mathbf{A}\|}.
> \end{aligned}
> $$

> **Tétel.** Legyenek $\mathbf{A}$ és $\mathbf{B}$ $n \times n$-es mátrixok. Legyen $\mathbf{A}$ nemszinguláris, és
> $$\|\mathbf{A} - \mathbf{B}\| < \frac{1}{\|\mathbf{A}^{-1}\|}.$$
> Ekkor $\mathbf{B}$ is nemszinguláris, továbbá
> $$\|\mathbf{B}^{-1}\| \leq \frac{\|\mathbf{A}^{-1}\|}{1 - \|\mathbf{A}^{-1}\| \|\mathbf{A} - \mathbf{B}\|}$$
> és
> $$\|\mathbf{A}^{-1} - \mathbf{B}^{-1}\| \leq \frac{\|\mathbf{A}^{-1}\|^2 \|\mathbf{A} - \mathbf{B}\|}{1 - \|\mathbf{A}^{-1}\| \|\mathbf{A} - \mathbf{B}\|}.$$

> **Bizonyítás.** Tekintsük
> $$\mathbf{B} = \mathbf{A} - (\mathbf{A} - \mathbf{B}) = \mathbf{A}(\mathbf{I} - \mathbf{A}^{-1}(\mathbf{A} - \mathbf{B})).$$
> A feltétel alapján
> $$\|\mathbf{A}^{-1}(\mathbf{A} - \mathbf{B})\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{A} - \mathbf{B}\| < 1,$$
> azért az
> $$\mathbf{I} - \mathbf{A}^{-1}(\mathbf{A} - \mathbf{B})$$
> mátrix invertálható. De ekkor
> $$\mathbf{B}^{-1} = (\mathbf{I} - \mathbf{A}^{-1}(\mathbf{A} - \mathbf{B}))^{-1} \mathbf{A}^{-1}$$
> szintén létezik. Ekkor az
> $$\mathbf{A}^{-1} - \mathbf{B}^{-1} = \mathbf{A}^{-1}(\mathbf{B} - \mathbf{A})\mathbf{B}^{-1}$$
> azonosságból és az előző következményből kapjuk az állítás utolsó két becslését.

Térjünk vissza az (1) fixpont iterációhoz. Ekkor

$$
\begin{aligned}
\mathbf{x}^{(k)} &= \mathbf{T}\mathbf{x}^{(k-1)} + \mathbf{c} \\
&= \mathbf{T}\Big(\mathbf{T}\mathbf{x}^{(k-2)} + \mathbf{c}\Big) + \mathbf{c} \\
&= \mathbf{T}^2\mathbf{x}^{(k-2)} + \mathbf{T}\mathbf{c} + \mathbf{c} \\
&\;\;\vdots \\
&= \mathbf{T}^k \mathbf{x}^{(0)} + (\mathbf{T}^{k-1} + \mathbf{T}^{k-2} + \cdots + \mathbf{T} + \mathbf{I})\mathbf{c}, \qquad k = 1, 2, \ldots .
\end{aligned}
$$

> **Tétel.** Legyen $\mathbf{c} \neq \mathbf{0}$. Ekkor az
> $$\mathbf{x} = \mathbf{T}\mathbf{x} + \mathbf{c}$$
> egyenletnek létezik egyértelmű megoldása, és az (1) iterációs sorozat akkor és csak akkor konvergál az egyenlet megoldásához minden $\mathbf{x}^{(0)}$ kezdeti értékre, ha
> $$\rho(\mathbf{T}) < 1.$$

> **Bizonyítás.** Tegyük fel, hogy $\rho(\mathbf{T}) < 1$. Ekkor $\mathbf{I} - \mathbf{T}$ invertálható, ezért az
> $$\mathbf{x} = \mathbf{T}\mathbf{x} + \mathbf{c}$$
> egyenletnek létezik egyértelmű megoldása
> $$\mathbf{x} = (\mathbf{I} - \mathbf{T})^{-1}\mathbf{c}.$$
> Mivel
> $$\mathbf{T}^k \mathbf{x}^{(0)} \to \mathbf{0}, \qquad \text{minden } \mathbf{x}^{(0)} \in \mathbb{R}^n\text{-re,}$$
> és
> $$(\mathbf{T}^{k-1} + \mathbf{T}^{k-2} + \cdots + \mathbf{T} + \mathbf{I})\mathbf{c} \to (\mathbf{I} - \mathbf{T})^{-1}\mathbf{c} \qquad \text{ha } k \to \infty,$$
> ezért az
> $$\mathbf{x}^{(k)} = \mathbf{T}^k \mathbf{x}^{(0)} + (\mathbf{T}^{k-1} + \mathbf{T}^{k-2} + \cdots + \mathbf{T} + \mathbf{I})\mathbf{c}$$
> relációból következik, hogy
> $$\mathbf{x}^{(k)} \to \mathbf{x} \qquad \text{ha } k \to \infty.$$

> **Következmény.** Ha $\|\mathbf{T}\| < 1$ valamely $\|\cdot\|$ mátrixnormában, akkor az (1) iterációs sorozat konvergens minden $\mathbf{x}^{(0)}$ kezdeti értékre, és
> $$\|\mathbf{x} - \mathbf{x}^{(k)}\| \leq \|\mathbf{T}\|^k \|\mathbf{x} - \mathbf{x}^{(0)}\|.$$

> **Bizonyítás.** Az
> $$\mathbf{x} = \mathbf{T}\mathbf{x} + \mathbf{c}$$
> és
> $$\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c}$$
> egyenleteket egymásból kivonva kapjuk, hogy
> $$\mathbf{x} - \mathbf{x}^{(k+1)} = \mathbf{T}(\mathbf{x} - \mathbf{x}^{(k)}) = \cdots = \mathbf{T}^{k+1}(\mathbf{x} - \mathbf{x}^{(0)}).$$
> Ebből következik az állítás.

Tegyük fel, hogy az (1) sorozat helyett a

$$\mathbf{y}^{(k+1)} = \mathbf{T}\mathbf{y}^{(k)} + \mathbf{c} + \mathbf{w}^{(k+1)}, \qquad k = 0, 1, \ldots, \tag{3}$$

$$\mathbf{y}^{(0)} = \mathbf{x}^{(0)} + \mathbf{w}^{(0)} \tag{4}$$

sorozatot generáljuk, ahol $\mathbf{w}^{(k+1)}$ reprezentálja a $k$-adik lépésben elkövetett kerekítési hibát, $\mathbf{w}^{(0)}$ pedig a kezdeti érték tárolásakor fellépő kerekítési hiba. Feltesszük, hogy a

$$\|\mathbf{w}^{(k)}\| \leq \varepsilon, \qquad k = 0, 1, \ldots$$

becslés teljesül valamilyen vektornormában. Képezzük a (3) és (1) egyenletek különbségét:

$$\mathbf{y}^{(k+1)} - \mathbf{x}^{(k+1)} = \mathbf{T}(\mathbf{y}^{(k)} - \mathbf{x}^{(k)}) + \mathbf{w}^{(k+1)}.$$

Ekkor

$$
\begin{aligned}
\|\mathbf{y}^{(k+1)} - \mathbf{x}^{(k+1)}\| &\leq \|\mathbf{T}(\mathbf{y}^{(k)} - \mathbf{x}^{(k)})\| + \|\mathbf{w}^{(k+1)}\| \\
&\leq \|\mathbf{T}\| \|\mathbf{y}^{(k)} - \mathbf{x}^{(k)}\| + \varepsilon \\
&\;\;\vdots \\
&\leq \|\mathbf{T}\|^{k+1} \|\mathbf{y}^{(0)} - \mathbf{x}^{(0)}\| + (\|\mathbf{T}\|^k + \cdots \|\mathbf{T}\| + 1)\varepsilon \\
&\leq (\|\mathbf{T}\|^{k+1} + \|\mathbf{T}\|^k + \cdots \|\mathbf{T}\| + 1)\varepsilon.
\end{aligned}
$$

Ha $\|\mathbf{T}\| < 1$, akkor a legutolsó kifejezés tovább becsülhető a végtelen mértani sor összegével:

$$\|\mathbf{y}^{(k+1)} - \mathbf{x}^{(k+1)}\| \leq \frac{1}{1 - \|\mathbf{T}\|}\varepsilon.$$

Ebből látható, hogy a számolás stabil a kerekítési hibára nézve, és a számolás közben fellépő kerekítési hiba annál kisebb, minél közelebb van $\|\mathbf{T}\|$ nullához.

---

## 4.2. Jacobi-iteráció

> **Példa.** Oldjuk meg a
> $$
> \begin{array}{rcrcrcr}
> 5x_1 & + & 3x_2 & - & x_3 & = & -4 \\
> 2x_1 & - & 10x_2 & + & x_3 & = & 25 \\
> -3x_1 & + & 4x_2 & - & 12x_3 & = & -47
> \end{array}
> $$
> egyenletrendszert! Fejezzük ki az első egyenletből $x_1$-et, a másodikból $x_2$-t, a harmadikból pedig $x_3$-at:
> $$
> \begin{aligned}
> x_1 &= (-4 - 3x_2 + x_3)/5 \\
> x_2 &= (-25 + 2x_1 + x_3)/10 \\
> x_3 &= (47 - 3x_1 + 4x_2)/12.
> \end{aligned}
> $$
> Definiáljuk a következő iterációs módszert $k = 0, 1, 2, \ldots$-re:
> $$
> \begin{aligned}
> x_1^{(k+1)} &= (-4 - 3x_2^{(k)} + x_3^{(k)})/5 \\
> x_2^{(k+1)} &= (-25 + 2x_1^{(k)} + x_3^{(k)})/10 \\
> x_3^{(k+1)} &= (47 - 3x_1^{(k)} + 4x_2^{(k)})/12
> \end{aligned}
> $$
> Ezt a módszert **Jacobi-iterációnak** nevezzük.

> **Példa folyt.**
>
> **Jacobi-iteráció**
>
> | $k$ | $x_1^{(k)}$ | $x_2^{(k)}$ | $x_3^{(k)}$ |
> |----|------------|------------|------------|
> | 0  | 0.0000000  | 0.0000000  | 0.0000000  |
> | 1  | 2.2500000  | -0.8000000 | -0.4285714 |
> | 2  | 2.5428571  | 0.2392857  | -1.4142857 |
> | 3  | 1.7767857  | 0.1885714  | -1.0525510 |
> | 4  | 1.8925765  | -0.1221173 | -0.8554082 |
> | ⋮  | ⋮          | ⋮          | ⋮          |
> | 19 | 2.0000268  | -0.0000010 | -1.0000107 |
> | 20 | 1.9999978  | 0.0000112  | -1.0000081 |
> | 21 | 1.9999924  | -0.0000027 | -0.9999946 |
> | 22 | 2.0000027  | -0.0000027 | -0.9999990 |
> | 23 | 2.0000016  | 0.0000016  | -1.0000019 |

> **Példa folyt.** Az iteráció röviden az
> $$\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c}$$
> alakban írható fel, ahol
> $$\mathbf{T} = \begin{pmatrix} 0 & -3/5 & 1/5 \\ 2/10 & 0 & 1/10 \\ -3/12 & 4/12 & 0 \end{pmatrix} \quad \text{és} \quad \mathbf{c} = \begin{pmatrix} -4/5 \\ -25/10 \\ 47/12 \end{pmatrix}.$$
> Mivel
> $$\|\mathbf{T}\|_\infty = \max\{4/5, 3/10, 7/12\} = 4/5 < 1,$$
> ezért a Jacobi-iteráció valóban konvergens.

Tekintsük az általános

$$
\begin{array}{rcrcrcrcr}
a_{11}x_1 & + & a_{12}x_2 & + & \ldots & + & a_{1n}x_n & = & b_1 \\
a_{21}x_1 & + & a_{22}x_2 & + & \ldots & + & a_{2n}x_n & = & b_2 \\
\vdots & & \vdots & & & & \vdots & & \vdots \\
a_{n1}x_1 & + & a_{n2}x_2 & + & \ldots & + & a_{nn}x_n & = & b_n.
\end{array}
$$

egyenletet. Ha $a_{ii} \neq 0$ minden $i = 1, \ldots, n$-re, akkor az egyenletet átírhatjuk az

$$x_i = -\sum_{\substack{j=1 \\ j \neq i}}^{n} \frac{a_{ij}}{a_{ii}} x_j + \frac{b_i}{a_{ii}}, \qquad i = 1, \ldots, n \tag{5}$$

alakba, és definiálhatjuk az ún. **Jacobi-iterációt** $k = 0, 1, 2, \ldots$-re:

$$x_i^{(k+1)} = -\sum_{\substack{j=1 \\ j \neq i}}^{n} \frac{a_{ij}}{a_{ii}} x_j^{(k)} + \frac{b_i}{a_{ii}}, \qquad i = 1, \ldots, n. \tag{6}$$

Ha $a_{ii} = 0$ valamely $i$-re, akkor megpróbáljuk sorcserékkel elérni, hogy $a_{ii} \neq 0$ legyen $i = 1, \ldots, n$-re.

Vezessük be a következő jelölést: $\mathbf{A} = \mathbf{L} + \mathbf{D} + \mathbf{U}$, ahol

$$\mathbf{L} = \begin{pmatrix} 0 & 0 & 0 & \cdots & 0 \\ a_{21} & 0 & 0 & \cdots & 0 \\ a_{31} & a_{32} & 0 & \cdots & 0 \\ \vdots & \vdots & & \ddots & \\ a_{n1} & a_{n2} & \cdots & a_{n,n-1} & 0 \end{pmatrix}, \quad \mathbf{U} = \begin{pmatrix} 0 & a_{12} & a_{13} & \cdots & a_{1n} \\ 0 & 0 & a_{23} & \cdots & a_{2n} \\ 0 & 0 & 0 & \cdots & a_{3n} \\ \vdots & \vdots & & \ddots & \\ 0 & 0 & \cdots & 0 & 0 \end{pmatrix},$$

és

$$\mathbf{D} = \mathrm{diag}(a_{11}, a_{22}, \ldots, a_{nn}).$$

$\mathbf{L}$ és $\mathbf{U}$ alulról ill. felülről trianguláris mátrixok (amelyeknek a fődiagonálisa is zéró).

Ezzel a jelöléssel az

$$\mathbf{A}\mathbf{x} = \mathbf{b}$$

egyenletrendszert a

$$(\mathbf{L} + \mathbf{D} + \mathbf{U})\mathbf{x} = \mathbf{b}$$

alakra írjuk, majd beszorozzuk az egyenletet balról $\mathbf{D}^{-1}$-zel. Ennélfogva a Jacobi-iteráció

$$\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c}$$

képlettel definiálható, ahol

$$\mathbf{T} = \mathbf{T}_J := -\mathbf{D}^{-1}(\mathbf{L} + \mathbf{U}) \quad \text{és} \quad \mathbf{c} = \mathbf{D}^{-1}\mathbf{b}.$$

> **Tétel.** A Jacobi-iteráció akkor és csak akkor konvergens, ha $\rho(\mathbf{T}_J) < 1$.

> **Következmény.** Ha $\|\mathbf{T}_J\| < 1$ valamely $\|\cdot\|$ mátrixnormában, akkor a Jacobi-iteráció konvergens bármely $\mathbf{x}^{(0)}$ kezdeti értékre.

A gyakorlatban sokszor egyszerűen alkalmazható a következő elegendő feltétel.

> **Tétel.** Ha $\mathbf{A}$ diagonálisan domináns, akkor a Jacobi-iteráció konvergens bármely $\mathbf{x}^{(0)}$ kezdeti értékre.

> **Bizonyítás.** Mivel
> $$\mathbf{T}_J = \begin{pmatrix} 0 & -a_{12}/a_{11} & -a_{13}/a_{11} & \cdots & -a_{1n}/a_{11} \\ -a_{21}/a_{22} & 0 & -a_{23}/a_{22} & \cdots & -a_{2n}/a_{22} \\ -a_{31}/a_{33} & -a_{32}/a_{33} & 0 & \cdots & -a_{3n}/a_{33} \\ \vdots & & & \ddots & \vdots \\ -a_{n1}/a_{nn} & -a_{n2}/a_{nn} & -a_{n3}/a_{nn} & \cdots & 0 \end{pmatrix},$$
> ezért az $\mathbf{A}$ mátrix diagonális dominanciáját használva
> $$\|\mathbf{T}_J\|_\infty = \max_{i=1,\ldots,n} \left\{ \sum_{\substack{j=1 \\ j \neq i}}^{n} \frac{|a_{ij}|}{|a_{ii}|} \right\} < 1,$$
> amiből kapjuk az állítást.

---

## 4.3. Gauss–Seidel-iteráció

> **Példa.** Tekintsük újra a korábbi példát és annak átalakított alakját! Definiáljuk az
> $$
> \begin{aligned}
> x_1 &= (9 - 2x_2 + x_3)/4 \\
> x_2 &= (-8 + 5x_1 + 2x_3)/10 \\
> x_3 &= (-3 - 2x_1 + 3x_2)/7.
> \end{aligned}
> $$
> Definiáljuk az alábbi iterációt:
> $$
> \begin{aligned}
> x_1^{(k+1)} &= (9 - 2x_2^{(k)} + x_3^{(k)})/4 \\
> x_2^{(k+1)} &= (-8 + 5x_1^{(k+1)} + 2x_3^{(k)})/10 \\
> x_3^{(k+1)} &= (-3 - 2x_1^{(k+1)} + 3x_2^{(k+1)})/7.
> \end{aligned}
> $$
> Ezt a módszert **Gauss–Seidel-iterációnak** nevezzük.

> **Példa folyt.**
>
> **Gauss–Seidel-iteráció**
>
> | $k$ | $x_1^{(k)}$ | $x_2^{(k)}$ | $x_3^{(k)}$ |
> |----|------------|------------|------------|
> | 0  | 0.0000000  | 0.0000000  | 0.0000000  |
> | 1  | 2.2500000  | 0.3250000  | -0.9321429 |
> | 2  | 1.8544643  | -0.0591964 | -0.9837883 |
> | 3  | 2.0336511  | 0.0200679  | -1.0010141 |
> | 4  | 1.9897125  | -0.0053466 | -0.9993521 |
> | 5  | 2.0028353  | 0.0015472  | -1.0001470 |
> | 6  | 1.9991897  | -0.0004346 | -0.9999547 |
> | 7  | 2.0002286  | 0.0001234  | -1.0000124 |
> | 8  | 1.9999352  | -0.0000349 | -0.9999964 |
> | 9  | 2.0000183  | 0.0000099  | -1.0000010 |
> | 10 | 1.9999948  | -0.0000028 | -0.9999997 |
> | 11 | 2.0000015  | 0.0000008  | -1.0000001 |
> | 12 | 1.9999996  | -0.0000002 | -1.0000000 |

Definiáljuk a **Gauss–Seidel-iterációt** $k = 0, 1, 2, \ldots$-re (ha $a_{ii} \neq 0$ minden $i = 1, \ldots, n$-re):

$$x_i^{(k+1)} = -\sum_{j=1}^{i-1} \frac{a_{ij}}{a_{ii}} x_j^{(k+1)} - \sum_{j=i+1}^{n} \frac{a_{ij}}{a_{ii}} x_j^{(k)} + \frac{b_i}{a_{ii}}, \qquad i = 1, \ldots, n. \tag{7}$$

A (7) egyenletet átrendezhetjük a következő alakba:

$$\sum_{j=1}^{i} a_{ij} x_j^{(k+1)} = -\sum_{j=i+1}^{n} a_{ij} x_j^{(k)} + b_i, \qquad i = 1, \ldots, n,$$

azaz mátrix jelöléssel

$$(\mathbf{D} + \mathbf{L})\mathbf{x}^{(k+1)} = -\mathbf{U}\mathbf{x}^{(k)} + \mathbf{b},$$

ahol $\mathbf{L}$, $\mathbf{D}$, $\mathbf{U}$ ugyanaz, mint az előző szakaszban. Innen látható, hogy a Gauss–Seidel-iteráció is felírható $\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c}$ alakban, ahol

$$\mathbf{T} = \mathbf{T}_G := -(\mathbf{D} + \mathbf{L})^{-1}\mathbf{U} \quad \text{és} \quad \mathbf{c} = (\mathbf{D} + \mathbf{L})^{-1}\mathbf{b}.$$

> **Tétel.** A Gauss–Seidel-iteráció akkor és csak akkor konvergens, ha $\rho(\mathbf{T}_G) < 1$.

> **Következmény.** Ha $\|\mathbf{T}_G\| < 1$ valamely $\|\cdot\|$ mátrixnormában, akkor a Gauss–Seidel-iteráció konvergens bármely $\mathbf{x}^{(0)}$ kezdeti értékre.

> **Tétel.** Ha $\mathbf{A}$ diagonálisan domináns, akkor a Gauss–Seidel-iteráció konvergens bármely $\mathbf{x}^{(0)}$ kezdeti értékre.

---

## 4.4. Hibabecslés, kondíciószám

A korábban tárgyalt feltételek mintájára három általános megállási feltétel valamelyikét, ill. ezek kombinációit használhatjuk:

$$\text{(i)} \;\; \|\mathbf{x}^{(k+1)} - \mathbf{x}^{(k)}\| < \varepsilon, \quad \text{(ii)} \;\; \frac{\|\mathbf{x}^{(k+1)} - \mathbf{x}^{(k)}\|}{\|\mathbf{x}^{(k+1)}\|} < \varepsilon, \quad \text{(iii)} \;\; \|\mathbf{b} - \mathbf{A}\mathbf{x}^{(k)}\| < \varepsilon.$$

Az

$$\mathbf{r} := \mathbf{b} - \mathbf{A}\bar{\mathbf{x}}$$

vektort az $\bar{\mathbf{x}}$ közelítő megoldáshoz tartozó **reziduális vektornak** nevezzük. A 3. feltétel azon a hipotézisen alapszik, hogy ha $\mathbf{r}$ normája kicsi, akkor $\bar{\mathbf{x}}$ jó közelítése a pontos megoldásnak.

> **Példa.** A
> $$\begin{pmatrix} 4 & 1 \\ 4.03 & 1 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 5 \\ 5.03 \end{pmatrix}$$
> egyenletrendszer pontos megoldása $\mathbf{x} = (1, 1)^T$. Tekintsük az
> $$\bar{\mathbf{x}} = (2, -3)^T$$
> vektort egy „közelítő” megoldásnak. A hozzá tartozó reziduális vektor:
> $$\mathbf{r} = \mathbf{b} - \mathbf{A}\bar{\mathbf{x}} = (0, 0.03)^T.$$
> Ennek végtelen normája
> $$\|\mathbf{r}\|_\infty = 0.03,$$
> ami kicsi, annak ellenére, hogy $\bar{\mathbf{x}}$ nyilván nem tekinthető a pontos megoldás jó közelítésének.

A következő eredmény azt vizsgálja, hogy $\|\mathbf{r}\|$ kicsinységéből milyen esetekben következtethetünk arra, hogy a közelítés hibája kicsi.

> **Tétel.** Legyen $\mathbf{A}$ egy nemszinguláris négyzetes mátrix, $\mathbf{x}$ az
> $$\mathbf{A}\mathbf{x} = \mathbf{b}$$
> egyenlet pontos megoldása, $\bar{\mathbf{x}}$ egy közelítő megoldása, és legyen
> $$\mathbf{r} := \mathbf{b} - \mathbf{A}\bar{\mathbf{x}}.$$
> Ekkor
> $$\|\mathbf{x} - \bar{\mathbf{x}}\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{r}\|,$$
> és
> $$\frac{\|\mathbf{x} - \bar{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \|\mathbf{A}\| \|\mathbf{A}^{-1}\| \frac{\|\mathbf{r}\|}{\|\mathbf{b}\|}.$$

A

$$\mathrm{cond}(\mathbf{A}) := \|\mathbf{A}\| \|\mathbf{A}^{-1}\|$$

számot az $\mathbf{A}$ mátrix ($\|\cdot\|$ normára vonatkozó) **kondíciószámának** nevezzük. A $\|\cdot\|_p$ mátrixnormához tartozó kondíciószámot $\mathrm{cond}_p(\mathbf{A})$-val jelöljük. Ha egy $\mathbf{A}$ mátrix kondíciószáma „nagy”, akkor a mátrixot **rosszul kondícionált**, vagy **gyengén meghatározott** mátrixnak nevezzük.

> **Példa.** Tekintsük az előző példa $\mathbf{A} = \begin{pmatrix} 4 & 1 \\ 4.03 & 1 \end{pmatrix}$ együtthatómátrixát! Ellenőrizhető, hogy
> $$\mathbf{A}^{-1} = \begin{pmatrix} -33.33 & 33.33 \\ 134.3 & -133.3 \end{pmatrix},$$
> és így $\|\mathbf{A}\|_\infty = 5.03$, $\|\mathbf{A}^{-1}\|_\infty = 267.6$. Ebből kapjuk, hogy
> $$\mathrm{cond}_\infty(\mathbf{A}) = 1346.$$
> Ez magyarázza azt, hogy $(2, -3)^T$ nem jó közelítése az egyenlet megoldásának, bár a reziduális vektor kicsi.

---

## 4.5. Lineáris egyenletrendszerek perturbációja

> **Példa.** Tekintsük az
> $$
> \begin{array}{rcrcrcr}
> x_1 & + & \frac{1}{2}x_2 & + & \frac{1}{3}x_3 & = & 1 \\
> \frac{1}{2}x_1 & + & \frac{1}{3}x_2 & + & \frac{1}{4}x_3 & = & 1 \\
> \frac{1}{3}x_1 & + & \frac{1}{4}x_2 & + & \frac{1}{5}x_3 & = & 1
> \end{array}
> $$
> egyenletrendszert. A pontos megoldása $x_1 = 3$, $x_2 = -24$ és $x_3 = 30$. Tekintsük az együtthatókat 3 tizedesjegy pontossággal:
> $$
> \begin{array}{rcrcrcr}
> y_1 & + & 0.5y_2 & + & 0.333y_3 & = & 1 \\
> 0.5y_1 & + & 0.333y_2 & + & 0.25y_3 & = & 1 \\
> 0.333y_1 & + & 0.25y_2 & + & 0.2y_3 & = & 1
> \end{array}
> $$
> Ennek a megoldása $y_1 = 3.4460555$, $y_2 = -26.2735192$ és $y_3 = 32.1042167$. A megoldások különbsége:
> $$|x_1 - y_1| = 0.4460555, \quad |x_2 - y_2| = 2.2735192, \quad |x_3 - y_3| = 2.1042167$$
> $$\frac{|x_1 - y_1|}{|x_2|} = 0.1486852, \quad \frac{|x_2 - y_2|}{|x_2|} = 0.09472997, \quad \frac{|x_3 - y_3|}{|x_3|} = 0.07014056$$

Tekintsük az

$$\mathbf{A}\mathbf{x} = \mathbf{b} \tag{8}$$

lineáris egyenletrendszert. Tegyük fel, hogy a (8) egyenlet jobb oldala helyett annak egy kis perturbációja, $\tilde{\mathbf{b}} = \mathbf{b} + \Delta\mathbf{b}$ adott, és a hozzá tartozó

$$\mathbf{A}\tilde{\mathbf{x}} = \tilde{\mathbf{b}} \tag{9}$$

egyenletet oldjuk meg, aminek a megoldását $\tilde{\mathbf{x}}$-mal jelöltük.

> **Tétel.** Legyen $\mathbf{A}$ nemszinguláris, $\mathbf{x}$ és $\tilde{\mathbf{x}}$ megoldása a (8) ill. a (9) egyenletnek. Ekkor
> $$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \mathrm{cond}(\mathbf{A}) \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{b}\|}.$$

> **Bizonyítás.** A (8) és a (9) egyenleteket egymásból kivonva kapjuk
> $$\mathbf{A}(\mathbf{x} - \tilde{\mathbf{x}}) = \mathbf{b} - \tilde{\mathbf{b}},$$
> így
> $$\mathbf{x} - \tilde{\mathbf{x}} = \mathbf{A}^{-1}(\mathbf{b} - \tilde{\mathbf{b}}),$$
> ezért
> $$\|\mathbf{x} - \tilde{\mathbf{x}}\| = \|\mathbf{A}^{-1}(\mathbf{b} - \tilde{\mathbf{b}})\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{b} - \tilde{\mathbf{b}}\|.$$
> Ebből és az
> $$\|\mathbf{b}\| = \|\mathbf{A}\mathbf{x}\| \leq \|\mathbf{A}\| \|\mathbf{x}\|$$
> egyenlőtlenségből kapjuk
> $$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \frac{\|\mathbf{A}\| \|\mathbf{A}^{-1}\| \|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{A}\| \|\mathbf{x}\|} \leq \mathrm{cond}(\mathbf{A}) \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{b}\|}.$$

Tekintsük most az általános esetet, az együtthatómátrixot és az egyenlet jobb oldalát is perturbáljuk:

$$\tilde{\mathbf{A}}\tilde{\mathbf{x}} = \tilde{\mathbf{b}}, \tag{10}$$

ahol $\|\mathbf{b} - \tilde{\mathbf{b}}\|$ és $\|\mathbf{A} - \tilde{\mathbf{A}}\|$ „kicsi”.

> **Tétel.** Legyen $\mathbf{A}$ nemszinguláris, $\tilde{\mathbf{A}}$ olyan hogy
> $$\|\mathbf{A} - \tilde{\mathbf{A}}\| < \frac{1}{\|\mathbf{A}^{-1}\|}.$$
> Legyen $\mathbf{x}$ megoldása a (8) és $\tilde{\mathbf{x}}$ megoldása a (10) egyenletnek. Ekkor
> $$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \frac{\mathrm{cond}(\mathbf{A})}{1 - \mathrm{cond}(\mathbf{A})\frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|}} \left( \frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|} + \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{b}\|} \right).$$

> **Tétel.** Legyen $\|\cdot\|$ egy tetszőleges mátrixnorma és $\mathrm{cond}(\cdot)$ a hozzá tartozó kondíciószám függvény. Ekkor
>
> 1. $\mathrm{cond}(\mathbf{A}) \geq 1$,
> 2. $\rho(\mathbf{A})\rho(\mathbf{A}^{-1}) \leq \mathrm{cond}(\mathbf{A})$
>
> teljesül minden invertálható $\mathbf{A}$-ra.

A $\mathrm{cond}_*(\mathbf{A}) := \rho(\mathbf{A})\rho(\mathbf{A}^{-1})$ számot az $\mathbf{A}$ mátrix **spektrál kondíciószámának** nevezzük.

> **Tétel (Gastinel).** Legyen $\|\cdot\|$ egy tetszőleges mátrixnorma, $\mathbf{A}$ invertálható mátrix. Ekkor
> $$\frac{1}{\mathrm{cond}(\mathbf{A})} = \min \left\{ \frac{\|\mathbf{A} - \mathbf{B}\|}{\|\mathbf{A}\|} : \mathbf{B} \text{ szinguláris} \right\}.$$

Rosszul kondícionált mátrixok klasszikus példája az ún. **Hilbert-mátrix**:

$$\mathbf{H}_n = \begin{pmatrix} 1 & \frac{1}{2} & \frac{1}{3} & \cdots & \frac{1}{n} \\ \frac{1}{2} & \frac{1}{3} & \frac{1}{4} & \cdots & \frac{1}{n+1} \\ \frac{1}{3} & \frac{1}{4} & \frac{1}{5} & \cdots & \frac{1}{n+2} \\ \vdots & & & & \vdots \\ \frac{1}{n} & \frac{1}{n+1} & \frac{1}{n+2} & \cdots & \frac{1}{2n-1} \end{pmatrix}.$$

**A Hilbert-mátrix spektrál kondíciószáma**

| $n$ | $\mathrm{cond}_*(\mathbf{H}_n)$ | $n$ | $\mathrm{cond}_*(\mathbf{H}_n)$ |
|----|---------------------------------|-----|---------------------------------|
| 3  | $5.24 \cdot 10^2$               | 7   | $7.45 \cdot 10^8$               |
| 4  | $1.55 \cdot 10^4$               | 8   | $1.53 \cdot 10^{10}$            |
| 5  | $4.77 \cdot 10^5$               | 9   | $4.93 \cdot 10^{11}$            |
| 6  | $1.50 \cdot 10^6$               | 10  | $1.60 \cdot 10^{13}$            |
