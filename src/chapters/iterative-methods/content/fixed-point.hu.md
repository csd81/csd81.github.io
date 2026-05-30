## 4.1 Lineáris fixpont iteráció

A

$$\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c}, \qquad k = 0, 1, 2, \ldots \tag{4.1}$$

alakú lineáris $n$-dimenziós fixpont iterációkat vizsgáljuk, az $\mathbf{x} = \mathbf{T}\mathbf{x} + \mathbf{c}$ fixpont egyenlethez kapcsolódóan, ahol $\mathbf{T} \in \mathbb{R}^{n \times n}$ és $\mathbf{c} \in \mathbb{R}^n$. Ha $\mathbf{c} = \mathbf{0}$, akkor $\mathbf{x}^{(k)} = \mathbf{T}^k \mathbf{x}^{(0)}$, így a konvergencia azon múlik, hogy a $\mathbf{T}^k$ hatványok a zérómátrixhoz tartanak-e.

> **4.1. tétel.** A következő állítások ekvivalensek:
> 1. $\displaystyle\lim_{k\to\infty} \mathbf{T}^k = \mathbf{0}$ (zérómátrix), azaz $\lim_{k\to\infty}\|\mathbf{T}^k\| = 0$ minden mátrixnormára;
> 2. $\displaystyle\lim_{k\to\infty} \mathbf{T}^k \mathbf{x} = \mathbf{0}$ minden $\mathbf{x} \in \mathbb{R}^n$-re;
> 3. $\rho(\mathbf{T}) < 1$.

Itt $\rho(\mathbf{T}) = \max\{|\lambda| : \lambda \text{ a } \mathbf{T} \text{ sajátértéke}\}$ a **spektrálsugár**.

> **4.2. tétel.** Ha valamely $\|\cdot\|$ mátrixnormában $\|\mathbf{T}\| < 1$, akkor $\|\mathbf{T}^k\| \to 0$, ha $k \to \infty$.

## A Neumann-sor

Skalár $|a| < 1$ esetén $1 + a + a^2 + \cdots = \tfrac{1}{1-a}$. Ennek mátrix-megfelelője az $\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots$ **geometriai** (vagy **Neumann-**) **sor**.

> **4.3. tétel.** Ha $\rho(\mathbf{A}) < 1$, akkor az $\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \cdots$ sor konvergens, az $\mathbf{I} - \mathbf{A}$ mátrix invertálható, és
> $$(\mathbf{I} - \mathbf{A})^{-1} = \mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots .$$
> Fordítva, ha a sor konvergens, akkor $\rho(\mathbf{A}) < 1$.

> **4.4. következmény.** Ha valamely mátrixnormában $\|\mathbf{A}\| < 1$, akkor $\mathbf{I} - \mathbf{A}$ invertálható, a sor a $(\mathbf{I}-\mathbf{A})^{-1}$-hez konvergál, és
> $$\|(\mathbf{I} - \mathbf{A})^{-1}\| \leq \frac{1}{1 - \|\mathbf{A}\|}.$$

Következmény: ha $\mathbf{A}$ nemszinguláris, akkor minden hozzá „közeli” mátrix is az.

> **4.5. tétel.** Legyenek $\mathbf{A}, \mathbf{B}$ $n \times n$-es mátrixok, $\mathbf{A}$ nemszinguláris, és $\|\mathbf{A} - \mathbf{B}\| < \tfrac{1}{\|\mathbf{A}^{-1}\|}$. Ekkor $\mathbf{B}$ is nemszinguláris, és
> $$\|\mathbf{B}^{-1}\| \leq \frac{\|\mathbf{A}^{-1}\|}{1 - \|\mathbf{A}^{-1}\|\,\|\mathbf{A} - \mathbf{B}\|}, \tag{4.3}$$
> $$\|\mathbf{A}^{-1} - \mathbf{B}^{-1}\| \leq \frac{\|\mathbf{A}^{-1}\|^2\,\|\mathbf{A} - \mathbf{B}\|}{1 - \|\mathbf{A}^{-1}\|\,\|\mathbf{A} - \mathbf{B}\|}. \tag{4.4}$$

## Az általános iteráció

A (4.1) $k$-adik tagja
$$\mathbf{x}^{(k)} = \mathbf{T}^k \mathbf{x}^{(0)} + (\mathbf{T}^{k-1} + \mathbf{T}^{k-2} + \cdots + \mathbf{T} + \mathbf{I})\mathbf{c}.$$

> **4.6. tétel.** Legyen $\mathbf{c} \neq \mathbf{0}$. Az $\mathbf{x} = \mathbf{T}\mathbf{x} + \mathbf{c}$ egyenletnek egyértelmű megoldása van, és a (4.1) iteráció **minden** $\mathbf{x}^{(0)}$-ra akkor és csak akkor konvergál hozzá, ha $\rho(\mathbf{T}) < 1$.

> **4.7. következmény.** Ha valamely mátrixnormában $\|\mathbf{T}\| < 1$, akkor (4.1) minden $\mathbf{x}^{(0)}$-ra konvergens, és
> $$\|\mathbf{x} - \mathbf{x}^{(k)}\| \leq \|\mathbf{T}\|^k \,\|\mathbf{x} - \mathbf{x}^{(0)}\|. \tag{4.6}$$

Tehát minél kisebb $\|\mathbf{T}\|$ (vagy $\rho(\mathbf{T})$), annál gyorsabb a konvergencia.

## Stabilitás a kerekítési hibára

Tegyük fel, hogy (4.1) helyett a
$$\mathbf{y}^{(k+1)} = \mathbf{T}\mathbf{y}^{(k)} + \mathbf{c} + \mathbf{w}^{(k+1)}, \qquad \mathbf{y}^{(0)} = \mathbf{x}^{(0)} + \mathbf{w}^{(0)} \tag{4.7–4.8}$$

sorozatot generáljuk, ahol a kerekítési hibákra $\|\mathbf{w}^{(k)}\| \leq \varepsilon$. Ekkor
$$\|\mathbf{y}^{(k+1)} - \mathbf{x}^{(k+1)}\| \leq (\|\mathbf{T}\|^{k+1} + \cdots + \|\mathbf{T}\| + 1)\,\varepsilon,$$
és ha $\|\mathbf{T}\| < 1$, akkor ezt a mértani sor korlátozza:
$$\|\mathbf{y}^{(k+1)} - \mathbf{x}^{(k+1)}\| \leq \frac{1}{1 - \|\mathbf{T}\|}\,\varepsilon.$$

A számolás tehát **stabil**: minél kisebb $\|\mathbf{T}\|$, annál kisebb a felhalmozott kerekítési hiba.
