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
