# 4. fejezet

# Lineáris egyenletrendszerek megoldása iterációs módszerekkel

Ebben a fejezetben először a lineáris fixpont iteráció általános elméletét vizsgáljuk, majd ennek segítségével a lineáris egyenletrendszerek megoldásának néhány iterációs módszerét tárgyaljuk (Jacobi-, Gauss–Seidel-, relaxációs módszerek). A fejezet végén bevezetjük a mátrix kondíciószámának fogalmát, és a lineáris egyenletrendszerek perturbációjával foglalkozunk.

## 4.1. Lineáris fixpont iteráció

Ebben a szakaszban az

$$\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c}, \qquad k = 0, 1, 2, \ldots \tag{4.1}$$

lineáris $n$-dimenziós fixpont iterációval foglalkozunk. Először tekintsük a $\mathbf{c} = \mathbf{0}$ speciális esetet. Ekkor könnyen látható, hogy $\mathbf{x}^{(k)} = \mathbf{T}^k \mathbf{x}^{(0)}$ minden $k = 1, 2, \ldots$-re.

**4.1. tétel.** *A következő állítások ekvivalensek:*

&nbsp;&nbsp;*1.* $\displaystyle\lim_{k\to\infty} \mathbf{T}^k = \mathbf{0}$ *(zéró mátrix), azaz* $\displaystyle\lim_{k\to\infty} \|\mathbf{T}^k\| = 0$ *minden* $\|\cdot\|$ *mátrixnormára;*

&nbsp;&nbsp;*2.* $\displaystyle\lim_{k\to\infty} \mathbf{T}^k \mathbf{x} = \mathbf{0}$ *(zéró vektor) minden* $\mathbf{x} \in \mathbb{R}^n$-re, *azaz* $\displaystyle\lim_{k\to\infty} \|\mathbf{T}^k \mathbf{x}\| = 0$ *minden* $\mathbf{x} \in \mathbb{R}^n$-re *és minden* $\|\cdot\|$ *vektornormára;*

&nbsp;&nbsp;*3.* $\rho(\mathbf{T}) < 1$.

**Bizonyítás.** Az 1. állításból következik 2, mivel a mátrixnorma tulajdonsága alapján

$$\|\mathbf{T}^k \mathbf{x}\| \leq \|\mathbf{T}^k\| \|\mathbf{x}\|$$

minden $x \in \mathbb{R}^n$-re és minden $\|\cdot\|$ normára.

Tegyük fel most, hogy 2. teljesül. Legyen $\lambda$ egy tetszőleges sajátértéke $\mathbf{T}$-nek, és legyen $\mathbf{v}$ egy $\lambda$-hoz tartozó sajátérték. Ekkor $\mathbf{T}^k \mathbf{v} = \lambda^k \mathbf{v}$, ezért a $\mathbf{T}^k \mathbf{v} \to \mathbf{0}$ (ha $k \to \infty$) feltételből következik, hogy $|\lambda| < 1$, hiszen $\mathbf{v} \neq \mathbf{0}$. Mivel $\lambda$ tetszőleges sajátérték volt, ezért $\rho(\mathbf{T}) < 1$ is teljesül.

Most tegyük fel, hogy 3. teljesül. A 3.17. tétel szerint létezik olyan $\|\cdot\|$ mátrixnorma és olyan $\varepsilon > 0$ szám, hogy $\|\mathbf{T}\| \leq \rho(\mathbf{T}) + \varepsilon < 1$. Ekkor

$$\|\mathbf{T}^k\| \leq \|\mathbf{T}\|^k \leq (\rho(\mathbf{T}) + \varepsilon)^k \to 0,$$

ha $k \to \infty$. De ekkor a 2.47. tétel szerint $\|\mathbf{T}^k\| \to 0$ minden $\|\cdot\|$ mátrixnormában, azaz 1. teljesül. $\qquad\square$

A következő tétel szerint $\|\mathbf{T}\| < 1$ elegendő feltétele annak, hogy $\|\mathbf{T}^k\| \to 0$ teljesüljön.

**4.2. tétel.** *Ha* $\|\mathbf{T}\| < 1$ *valamely* $\|\cdot\|$ *mátrixnormában, akkor* $\|\mathbf{T}^k\| \to 0$, *ha* $k \to \infty$.

**Bizonyítás.** Az állítás következik a $\|\mathbf{T}^k\| \leq \|\mathbf{T}\|^k$ egyenlőtlenségből. $\qquad\square$

Szükségünk lesz az $\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots$ ún. *geometriai sor* vagy *Neumann-sor* konvergenciájának vizsgálatára.

**4.3. tétel.** *Ha* $\rho(\mathbf{A}) < 1$, *akkor az* $\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots$ *végtelen mátrix sor konvergens, az* $\mathbf{I} - \mathbf{A}$ *mátrix invertálható, és*

$$(\mathbf{I} - \mathbf{A})^{-1} = \mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots .$$

*Fordítva, ha az* $\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots$ *geometriai sor konvergens, akkor* $\rho(\mathbf{A}) < 1$.

**Bizonyítás.** Legyen $\rho(\mathbf{A}) < 1$. Tegyük fel, hogy $\mathbf{I} - \mathbf{A}$ nem invertálható. Ekkor a 3.3. tétel szerint létezik olyan $\mathbf{x} \neq \mathbf{0}$ vektor, hogy $(\mathbf{I} - \mathbf{A})\mathbf{x} = \mathbf{0}$. Ezt átrendezve kapjuk, hogy $\mathbf{A}\mathbf{x} = \mathbf{x}$, azaz $1$ sajátértéke $\mathbf{A}$-nak, ami ellentmond a feltevésnek, hogy $\rho(\mathbf{A}) < 1$. Tehát az $\mathbf{I} - \mathbf{A}$ mátrix invertálható.

Könnyű belátni az

$$(\mathbf{I} - \mathbf{A})(\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots + \mathbf{A}^m) = \mathbf{I} - \mathbf{A}^{m+1} \tag{4.2}$$

azonosságot. Ebből

$$\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots + \mathbf{A}^m = (\mathbf{I} - \mathbf{A})^{-1}(\mathbf{I} - \mathbf{A}^{m+1}),$$

és így, használva, hogy a 4.1. tétel szerint $\mathbf{A}^{m+1} \to 0$, kapjuk, hogy

$$\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots + \mathbf{A}^m \to (\mathbf{I} - \mathbf{A})^{-1},$$

ha $m \to \infty$.

Tegyük fel most, hogy az $\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots$ geometriai sor konvergens. Ekkor könnyen igazolható, hogy $\mathbf{A}^m \to \mathbf{0}$, ezért a 4.1. tétel szerint $\rho(\mathbf{A}) < 1$. $\qquad\square$

**4.4. következmény.** *Ha* $\|\mathbf{A}\| < 1$ *valamely* $\|\cdot\|$ *mátrixnormában, akkor* $\mathbf{I} - \mathbf{A}$ *invertálható, az* $\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots$ *geometriai sor konvergens,* $\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots = (\mathbf{I} - \mathbf{A})^{-1}$, *valamint*

$$\|(\mathbf{I} - \mathbf{A})^{-1}\| \leq \frac{1}{1 - \|\mathbf{A}\|}.$$

**Bizonyítás.** Csak az utolsó állítást kell belátnunk, a többi rögtön következik a 4.3. és 3.16. tételekből. A mátrixnorma folytonosságát, a háromszög-egyenlőtlenséget és a norma tulajdonságait használva:

$$
\begin{aligned}
\|(\mathbf{I} - \mathbf{A})^{-1}\| &= \Big\| \lim_{m\to\infty} (\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots + \mathbf{A}^m) \Big\| \\
&= \lim_{m\to\infty} \|\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots + \mathbf{A}^m\| \\
&\leq \lim_{m\to\infty} (\|\mathbf{I}\| + \|\mathbf{A}\| + \|\mathbf{A}^2\| + \|\mathbf{A}^3\| + \cdots + \|\mathbf{A}^m\|) \\
&\leq \lim_{m\to\infty} (1 + \|\mathbf{A}\| + \|\mathbf{A}\|^2 + \|\mathbf{A}\|^3 + \cdots + \|\mathbf{A}\|^m) \\
&= \frac{1}{1 - \|\mathbf{A}\|}.
\end{aligned}
$$

$\square$

Az előző eredménynek van egy fontos következménye: ha $\mathbf{A}$ nemszinguláris mátrix, akkor az $\mathbf{A}$-hoz „közeli” mátrixok is nemszingulárisak.

**4.5. tétel.** *Legyenek* $\mathbf{A}$ *és* $\mathbf{B}$ $n \times n$-es *mátrixok. Legyen* $\mathbf{A}$ *nemszinguláris, és*

$$\|\mathbf{A} - \mathbf{B}\| < \frac{1}{\|\mathbf{A}^{-1}\|}.$$

*Ekkor* $\mathbf{B}$ *is nemszinguláris, továbbá*

$$\|\mathbf{B}^{-1}\| \leq \frac{\|\mathbf{A}^{-1}\|}{1 - \|\mathbf{A}^{-1}\| \|\mathbf{A} - \mathbf{B}\|} \tag{4.3}$$

*és*

$$\|\mathbf{A}^{-1} - \mathbf{B}^{-1}\| \leq \frac{\|\mathbf{A}^{-1}\|^2 \|\mathbf{A} - \mathbf{B}\|}{1 - \|\mathbf{A}^{-1}\| \|\mathbf{A} - \mathbf{B}\|}. \tag{4.4}$$

**Bizonyítás.** Induljunk ki az $\mathbf{B} = \mathbf{A} - (\mathbf{A} - \mathbf{B}) = \mathbf{A}(\mathbf{I} - \mathbf{A}^{-1}(\mathbf{A} - \mathbf{B}))$ azonosságból. A feltétel szerint $\|\mathbf{A}^{-1}(\mathbf{A} - \mathbf{B})\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{A} - \mathbf{B}\| < 1$, ezért a 4.4. következmény szerint $\mathbf{I} - \mathbf{A}^{-1}(\mathbf{A} - \mathbf{B})$ invertálható. De ekkor $\mathbf{B}^{-1} = (\mathbf{I} - \mathbf{A}^{-1}(\mathbf{A} - \mathbf{B}))^{-1} \mathbf{A}^{-1}$ létezik. Ebből és az $\mathbf{A}^{-1} - \mathbf{B}^{-1} = \mathbf{A}^{-1}(\mathbf{B} - \mathbf{A})\mathbf{B}^{-1}$ azonosságból, valamint a 4.4. következményből kapjuk a (4.3) és (4.4) becsléseket. $\qquad\square$

Térjünk most vissza a (4.1) fixpont feladathoz. Vizsgáljuk most az általános esetet. Könnyen látható, hogy a fixpont sorozat $k$-adik tagjának általános képlete

$$\mathbf{x}^{(k)} = \mathbf{T}^k \mathbf{x}^{(0)} + (\mathbf{T}^{k-1} + \mathbf{T}^{k-2} + \cdots + \mathbf{T} + \mathbf{I})\mathbf{c}, \qquad k = 1, 2, \ldots .$$

A 4.1. és 4.3. tételekből kapjuk:

**4.6. tétel.** *Legyen* $\mathbf{c} \neq \mathbf{0}$. *Ekkor az* $\mathbf{x} = \mathbf{T}\mathbf{x} + \mathbf{c}$ *egyenletnek létezik egyértelmű megoldása, és a* (4.1) *iterációs sorozat akkor és csak akkor konvergál az egyenlet megoldásához minden* $\mathbf{x}^{(0)}$ *kezdeti értékre, ha* $\rho(\mathbf{T}) < 1$.

**Bizonyítás.** Legyen $\rho(\mathbf{T}) < 1$. Ekkor a 4.3. tétel szerint $\mathbf{I} - \mathbf{T}$ invertálható, ezért az $\mathbf{x} = \mathbf{T}\mathbf{x} + \mathbf{c}$ egyenletnek létezik egyértelmű megoldása: $\mathbf{x} = (\mathbf{I} - \mathbf{T})^{-1}\mathbf{c}$. A 4.1. és 4.3. tételekből következik, hogy $\mathbf{T}^k \mathbf{x}^{(0)} \to 0$ minden $\mathbf{x}^{(0)} \in \mathbb{R}^n$-re, és $(\mathbf{T}^{k-1} + \mathbf{T}^{k-2} + \cdots + \mathbf{T} + \mathbf{I})\mathbf{c} \to (\mathbf{I} - \mathbf{T})^{-1}\mathbf{c}$, ha $k \to \infty$.

Fordítva, legyen $\mathbf{x}$ az $\mathbf{x} = \mathbf{T}\mathbf{x} + \mathbf{c}$ egyenlet megoldása, és tegyük fel, hogy $\mathbf{x}^{(k)} \to \mathbf{x}$, ha $k \to \infty$. Ekkor az $\mathbf{x} = \mathbf{T}\mathbf{x} + \mathbf{c}$ és $\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c}$ egyenleteket egymásból kivonva $\mathbf{x} - \mathbf{x}^{(k+1)} = \mathbf{T}(\mathbf{x} - \mathbf{x}^{(k)})$, és így

$$\mathbf{x} - \mathbf{x}^{(k+1)} = \mathbf{T}(\mathbf{x} - \mathbf{x}^{(k)}) = \cdots = \mathbf{T}^{k+1}(\mathbf{x} - \mathbf{x}^{(0)}). \tag{4.5}$$

Legyen $\mathbf{z}$ egy tetszőleges vektor, és $\mathbf{x}^{(0)} = \mathbf{x} - \mathbf{z}$. Ekkor

$$\lim_{k\to\infty} \mathbf{T}^{k+1} \mathbf{z} = \lim_{k\to\infty} \mathbf{T}^{k+1}(\mathbf{x} - \mathbf{x}^{(0)}) = \lim_{k\to\infty} (\mathbf{x} - \mathbf{x}^{(k+1)}) = \mathbf{x} - \mathbf{x} = \mathbf{0}.$$

Alkalmazva a 4.1. tételt, kapjuk, hogy $\rho(\mathbf{T}) < 1$. $\qquad\square$

**4.7. következmény.** *Ha* $\|\mathbf{T}\| < 1$ *valamely* $\|\cdot\|$ *mátrixnormában, akkor a* (4.1) *iterációs sorozat konvergens minden* $\mathbf{x}^{(0)}$ *kezdeti értékre, és*

$$\|\mathbf{x} - \mathbf{x}^{(k)}\| \leq \|\mathbf{T}\|^k \|\mathbf{x} - \mathbf{x}^{(0)}\|. \tag{4.6}$$

A (4.6) egyenlőségből következik, hogy $\mathbf{x}^{(k)}$ annál gyorsabban konvergál, minél kisebb $\|\mathbf{T}\|$. A 3.17. tétel alapján ebből következik, hogy $\mathbf{x}^{(k)}$ annál gyorsabban konvergál (egy bizonyos normában), minél kisebb $\rho(\mathbf{T})$.

A továbbiakban vizsgáljuk a kerekítési hibák hatását a lineáris fixpont sorozat tagjaira. Tegyük fel, hogy a (4.1) sorozat helyett a

$$\mathbf{y}^{(k+1)} = \mathbf{T}\mathbf{y}^{(k)} + \mathbf{c} + \mathbf{w}^{(k+1)}, \qquad k = 0, 1, \ldots, \tag{4.7}$$

$$\mathbf{y}^{(0)} = \mathbf{x}^{(0)} + \mathbf{w}^{(0)} \tag{4.8}$$

sorozatot generáljuk, ahol $\mathbf{w}^{(k+1)}$ reprezentálja a $k$-adik lépésben elkövetett kerekítési hibát, $\mathbf{w}^{(0)}$ pedig a kezdeti érték tárolásakor fellépő kerekítési hiba. Feltesszük, hogy a

$$\|\mathbf{w}^{(k)}\| \leq \varepsilon, \qquad k = 0, 1, \ldots$$

becslés teljesül valamilyen vektornormában. Képezzük a (4.7) és (4.1) egyenletek különbségét:

$$\mathbf{y}^{(k+1)} - \mathbf{x}^{(k+1)} = \mathbf{T}(\mathbf{y}^{(k)} - \mathbf{x}^{(k)}) + \mathbf{w}^{(k+1)}.$$

Ekkor

$$
\begin{aligned}
\|\mathbf{y}^{(k+1)} - \mathbf{x}^{(k+1)}\| &\leq \|\mathbf{T}(\mathbf{y}^{(k)} - \mathbf{x}^{(k)})\| + \|\mathbf{w}^{(k+1)}\| \\
&\leq \|\mathbf{T}\| \|\mathbf{y}^{(k)} - \mathbf{x}^{(k)}\| + \varepsilon \\
&\;\;\vdots \\
&\leq \|\mathbf{T}\|^{k+1} \|\mathbf{y}^{(0)} - \mathbf{x}^{(0)}\| + (\|\mathbf{T}\|^k + \cdots + \|\mathbf{T}\| + 1)\varepsilon \\
&\leq (\|\mathbf{T}\|^{k+1} + \|\mathbf{T}\|^k + \cdots + \|\mathbf{T}\| + 1)\varepsilon.
\end{aligned}
$$

Ha $\|\mathbf{T}\| < 1$, akkor a legutolsó kifejezés tovább becsülhető a végtelen mértani sor összegével:

$$\|\mathbf{y}^{(k+1)} - \mathbf{x}^{(k+1)}\| \leq \frac{1}{1 - \|\mathbf{T}\|}\varepsilon.$$

Ebből látható, hogy a számolás stabil a kerekítési hibára nézve, és a számolás közben fellépő kerekítési hiba annál kisebb, minél közelebb van $\|\mathbf{T}\|$ nullához.

### Feladatok

1. Számítsa ki az $\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots$ geometriai sor értékét, ha

$$\text{(a)} \quad \mathbf{A} = \begin{pmatrix} 0 & 1 & 2 & 3 \\ 0 & 0 & 1 & 2 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}, \qquad \text{(b)} \quad \mathbf{A} = \begin{pmatrix} 1/2 & 0 & 0 & 0 \\ 0 & 1/3 & 0 & 0 \\ 0 & 0 & 1/4 & 0 \\ 0 & 0 & 0 & 1/5 \end{pmatrix}.$$

2. Igazolja a (4.2) azonosságot!

3. Dolgozza ki a (4.3) és (4.4) egyenlőtlenségek bizonyításának részleteit!

4. Adja meg az összes $\alpha$ paraméterértéket, amelyre az

$$\begin{pmatrix} 1 & 2 \\ \alpha & 0 \end{pmatrix}^k$$

mátrixsorozat a $\mathbf{0}$ mátrixhoz konvergál!

## 4.2. Jacobi-iteráció

**4.8. példa.** Oldjuk meg a

$$
\begin{array}{rcrcrcr}
5x_1 & + & 3x_2 & - & x_3 & = & -4 \\
2x_1 & - & 10x_2 & + & x_3 & = & 25 \\
-3x_1 & + & 4x_2 & - & 12x_3 & = & -47.
\end{array}
\tag{4.9}
$$

egyenletrendszert! Fejezzük ki az első egyenletből $x_1$-et, a másodikból $x_2$-t, a harmadikból pedig $x_3$-at:

$$
\begin{aligned}
x_1 &= (-4 - 3x_2 + x_3)/5 \\
x_2 &= (-25 + 2x_1 + x_3)/10 \\
x_3 &= (47 - 3x_1 + 4x_2)/12.
\end{aligned}
\tag{4.10}
$$

A (4.10) egyenletrendszer egy lineáris háromdimenziós fixpont egyenlet, ezért definiáljuk a következő iterációs módszert $k = 0, 1, 2, \ldots$-re:

$$
\begin{aligned}
x_1^{(k+1)} &= (-4 - 3x_2^{(k)} + x_3^{(k)})/5 \\
x_2^{(k+1)} &= (-25 + 2x_1^{(k)} + x_3^{(k)})/10 \\
x_3^{(k+1)} &= (47 - 3x_1^{(k)} + 4x_2^{(k)})/12
\end{aligned}
\tag{4.11}
$$

A 4.1. táblázat az $x_1^{(0)} = x_2^{(0)} = x_3^{(0)} = 0$ kezdeti értékekből számolt numerikus értékeket tartalmazza. Megfigyelhetjük, hogy erre a kezdeti értékre az iterációs sorozat konvergens, és a határértéke $x_1 = 1$, $x_2 = -2$, $x_3 = 3$, ami a (4.9) egyenletrendszer megoldása. A (4.11) iteráció röviden az

$$\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c} \tag{4.12}$$

alakban írható fel, ahol

$$\mathbf{T} = \begin{pmatrix} 0 & -3/5 & 1/5 \\ 2/10 & 0 & 1/10 \\ -3/12 & 4/12 & 0 \end{pmatrix} \quad \text{és} \quad \mathbf{c} = \begin{pmatrix} -4/5 \\ -25/10 \\ 47/12 \end{pmatrix}.$$

A 4.7. következmény szerint a (4.12) iteráció konvergens, ha a $\mathbf{T}$ mátrix valamely mátrixnormája kisebb mint 1. Mivel $\|\mathbf{T}\|_\infty = \max\{4/5, 3/10, 7/12\} = 4/5 < 1$, ezért a (4.11) iteráció valóban konvergens. $\qquad\square$

**4.1. táblázat. Jacobi-iteráció**

| $k$ | $x_1^{(k)}$ | $x_2^{(k)}$ | $x_3^{(k)}$ |
|----|------------|------------|------------|
| 0  | 0.000000   | 0.000000   | 0.000000   |
| 1  | -0.800000  | -2.500000  | 3.916667   |
| 2  | 1.483333   | -2.268333  | 3.283333   |
| 3  | 1.217667   | -1.875000  | 2.789722   |
| 4  | 0.882944   | -1.977494  | 2.987250   |
| ⋮  | ⋮          | ⋮          | ⋮          |
| 14 | 0.999999   | -1.999992  | 2.999990   |
| 15 | 0.999993   | -2.000001  | 3.000003   |
| 16 | 1.000001   | -2.000001  | 3.000001   |
| 17 | 1.000001   | -2.000000  | 2.999999   |
| 18 | 1.000000   | -2.000000  | 3.000000   |

Tekintsük az általános

$$
\begin{array}{rcrcrcrcr}
a_{11}x_1 & + & a_{12}x_2 & + & \ldots & + & a_{1n}x_n & = & b_1 \\
a_{21}x_1 & + & a_{22}x_2 & + & \ldots & + & a_{2n}x_n & = & b_2 \\
\vdots & & \vdots & & & & \vdots & & \vdots \\
a_{n1}x_1 & + & a_{n2}x_2 & + & \ldots & + & a_{nn}x_n & = & b_n
\end{array}
\tag{4.13}
$$

egyenletet. Ha $a_{ii} \neq 0$ minden $i = 1, \ldots, n$-re, akkor a (4.13) egyenletet átírhatjuk az

$$x_i = -\sum_{\substack{j=1 \\ j \neq i}}^{n} \frac{a_{ij}}{a_{ii}} x_j + \frac{b_i}{a_{ii}}, \qquad i = 1, \ldots, n \tag{4.14}$$

alakba, és definiálhatjuk az ún. *Jacobi-iterációt* $k = 0, 1, 2, \ldots$-re:

$$x_i^{(k+1)} = -\sum_{\substack{j=1 \\ j \neq i}}^{n} \frac{a_{ij}}{a_{ii}} x_j^{(k)} + \frac{b_i}{a_{ii}}, \qquad i = 1, \ldots, n. \tag{4.15}$$

Ha $a_{ii} = 0$ valamely $i$-re, akkor megpróbáljuk sorcserékkel elérni, hogy $a_{ii} \neq 0$ legyen $i = 1, \ldots, n$-re. Vezessük be a következő jelölést: $\mathbf{A} = \mathbf{L} + \mathbf{D} + \mathbf{U}$, ahol

$$\mathbf{L} = \begin{pmatrix} 0 & 0 & 0 & \cdots & 0 \\ a_{21} & 0 & 0 & \cdots & 0 \\ a_{31} & a_{32} & 0 & \cdots & 0 \\ \vdots & \vdots & & \ddots & \\ a_{n1} & a_{n2} & \cdots & a_{n,n-1} & 0 \end{pmatrix}, \qquad \mathbf{U} = \begin{pmatrix} 0 & a_{12} & a_{13} & \cdots & a_{1n} \\ 0 & 0 & a_{23} & \cdots & a_{2n} \\ 0 & 0 & 0 & \cdots & a_{3n} \\ \vdots & \vdots & & \ddots & \\ 0 & 0 & \cdots & 0 & 0 \end{pmatrix},$$

és $\mathbf{D} = \mathrm{diag}(a_{11}, a_{22}, \ldots, a_{nn})$. $\mathbf{L}$ és $\mathbf{U}$ alulról ill. felülről trianguláris mátrixok (amelyeknek a fődiagonálisa is zéró). Ezzel a jelöléssel az $\mathbf{A}\mathbf{x} = \mathbf{b}$ egyenletrendszert a $\mathbf{D}\mathbf{x} = -(\mathbf{L} + \mathbf{U})\mathbf{x} + \mathbf{b}$ alakra írjuk, majd beszorozzuk az egyenletet balról $\mathbf{D}^{-1}$-zel. Ennélfogva a Jacobi-iteráció a (4.12) képlettel definiálható, ahol $\mathbf{T} = \mathbf{T}_J := -\mathbf{D}^{-1}(\mathbf{L} + \mathbf{U})$, és $\mathbf{c} = \mathbf{D}^{-1}\mathbf{b}$.

A 4.6. tétel és a 4.7. következményből rögtön kapjuk a Jacobi-iteráció konvergenciájára vonatkozó szükséges és elegendő, ill. elegendő feltételeket:

**4.9. tétel.** *A Jacobi-iteráció akkor és csak akkor konvergens, ha* $\rho(\mathbf{T}_J) < 1$.

**4.10. következmény.** *Ha* $\|\mathbf{T}_J\| < 1$ *valamely* $\|\cdot\|$ *mátrixnormában, akkor a Jacobi-iteráció konvergens bármely* $\mathbf{x}^{(0)}$ *kezdeti értékre.*

A gyakorlatban sokszor egyszerűen alkalmazható a következő tétel.

**4.11. tétel.** *Ha* $\mathbf{A}$ *diagonálisan domináns, akkor a Jacobi-iteráció konvergens bármely* $\mathbf{x}^{(0)}$ *kezdeti értékre.*

**Bizonyítás.** Mivel

$$\mathbf{T}_J = \begin{pmatrix} 0 & -a_{12}/a_{11} & -a_{13}/a_{11} & \cdots & -a_{1n}/a_{11} \\ -a_{21}/a_{22} & 0 & -a_{23}/a_{22} & \cdots & -a_{2n}/a_{22} \\ -a_{31}/a_{33} & -a_{32}/a_{33} & 0 & \cdots & -a_{3n}/a_{33} \\ \vdots & & & \ddots & \vdots \\ -a_{n1}/a_{nn} & -a_{n2}/a_{nn} & -a_{n3}/a_{nn} & \cdots & 0 \end{pmatrix},$$

ezért az $\mathbf{A}$ mátrix diagonális dominanciáját használva

$$\|\mathbf{T}_J\|_\infty = \max_{i=1,\ldots,n} \left\{ \sum_{\substack{j=1 \\ j \neq i}}^{n} \frac{|a_{ij}|}{|a_{ii}|} \right\} < 1,$$

amiből, a 4.10. következmény szerint kapjuk az állítást. $\qquad\square$

### Feladatok

1. A Jacobi-iterációt használva oldja meg a következő egyenletrendszereket:

$$
\text{(a)} \quad
\begin{array}{rcrcrcr}
6.2x_1 & + & 1.1x_2 & - & 3.4x_3 & = & 5.1 \\
-0.6x_1 & + & 2.9x_2 & + & 0.3x_3 & = & -7.2 \\
1.1x_1 & - & 0.6x_2 & + & 4.4x_3 & = & 3.1
\end{array}
$$

$$
\text{(b)} \quad
\begin{array}{rcrcrcrcr}
-8x_1 & + & 3x_2 & - & 2x_3 & & & = & 6 \\
2x_1 & + & 6x_2 & + & x_3 & - & 2x_4 & = & 3 \\
3x_1 & - & 3x_2 & + & 10x_3 & + & x_4 & = & 5 \\
& & x_2 & - & 3x_3 & + & 7x_4 & = & -17
\end{array}
$$

2. Mutassa meg, hogy a Jacobi-iteráció konvergens tetszőleges kezdeti értékre, ha $\mathbf{A}$ oszloponként diagonálisan domináns!

## 4.3. Gauss–Seidel-iteráció

**4.12. példa.** Tekintsük újra a (4.9) egyenletet és annak (4.10) alakját! Definiáljuk az

$$
\begin{aligned}
x_1^{(k+1)} &= (-4 - 3x_2^{(k)} + x_3^{(k)})/5 \\
x_2^{(k+1)} &= (-25 + 2x_1^{(k+1)} + x_3^{(k)})/10 \\
x_3^{(k+1)} &= (47 - 3x_1^{(k+1)} + 4x_2^{(k+1)})/12.
\end{aligned}
\tag{4.16}
$$

iterációt! Az a különbség a (4.11) és (4.16) definíciók között, hogy ennél a módszernél amikor egy $x_i$ változónak már kiszámoltuk az új értékét a $k+1$-edik iterációban, akkor ezt az új értéket már felhasználjuk a következő változó számításánál: $x_1$ $k+1$-edik értékét az első egyenlettel számoljuk, az $x_2$ új értékének számításához már az $x_1$ új értékét (ami várhatóan jobb közelítése a megoldásnak mint $x_1^{(k)}$) használjuk a második egyenletben $x_3^{(k)}$-val együtt, mivel annak még nem számoltunk új értéket. A 4.2. táblázatban található a módszernek az $x_1^{(0)} = x_2^{(0)} = x_3^{(0)} = 0$ kezdeti értékekhez tartozó numerikus eredménye. Láthatjuk, hogy ez az iterációs módszer gyorsabban konvergál ezen a feladaton mint a Jacobi-iteráció. $\qquad\square$

**4.2. táblázat. Gauss–Seidel-iteráció**

| $k$ | $x_1^{(k)}$ | $x_2^{(k)}$ | $x_3^{(k)}$ |
|----|------------|------------|------------|
| 0  | 0.000000   | 0.000000   | 0.000000   |
| 1  | -0.800000  | -2.660000  | 3.230000   |
| 2  | 1.442000   | -1.888600  | 2.926633   |
| 3  | 0.918487   | -2.023639  | 3.012499   |
| 4  | 1.016683   | -1.995413  | 2.997358   |
| 5  | 0.996720   | -2.000920  | 3.000513   |
| 6  | 1.000655   | -1.999818  | 2.999897   |
| 7  | 0.999870   | -2.000036  | 3.000020   |
| 8  | 1.000026   | -1.999993  | 2.999996   |
| 9  | 0.999995   | -2.000001  | 3.000001   |
| 10 | 1.000001   | -2.000000  | 3.000000   |
| 11 | 1.000000   | -2.000000  | 3.000000   |

A (4.13) általános lineáris egyenletrendszer megoldására definiáljuk a *Gauss–Seidel-iterációt* $k = 0, 1, 2, \ldots$-re (ha $a_{ii} \neq 0$ minden $i = 1, \ldots, n$-re):

$$x_i^{(k+1)} = -\sum_{j=1}^{i-1} \frac{a_{ij}}{a_{ii}} x_j^{(k+1)} - \sum_{j=i+1}^{n} \frac{a_{ij}}{a_{ii}} x_j^{(k)} + \frac{b_i}{a_{ii}}, \qquad i = 1, \ldots, n. \tag{4.17}$$

A (4.17) egyenletet átrendezhetjük a következő alakba:

$$\sum_{j=1}^{i} a_{ij} x_j^{(k+1)} = -\sum_{j=i+1}^{n} a_{ij} x_j^{(k)} + b_i, \qquad i = 1, \ldots, n,$$

azaz mátrix jelöléssel

$$(\mathbf{D} + \mathbf{L})\mathbf{x}^{(k+1)} = -\mathbf{U}\mathbf{x}^{(k)} + \mathbf{b},$$

ahol $\mathbf{L}$, $\mathbf{D}$, $\mathbf{U}$ ugyanaz, mint az előző szakaszban. Innen látható, hogy a Gauss–Seidel-iteráció is felírható a (4.12) alakban a $\mathbf{T} = \mathbf{T}_G := -(\mathbf{D} + \mathbf{L})^{-1}\mathbf{U}$ és $\mathbf{c} = (\mathbf{D} + \mathbf{L})^{-1}\mathbf{b}$ választással.

Alkalmazva a 4.6. tételt és annak 4.7. következményét rögtön kapjuk:

**4.13. tétel.** *A Gauss–Seidel-iteráció akkor és csak akkor konvergens, ha* $\rho(\mathbf{T}_G) < 1$.

**4.14. következmény.** *Ha* $\|\mathbf{T}_G\| < 1$ *valamely* $\|\cdot\|$ *mátrixnormában, akkor a Gauss–Seidel-iteráció konvergens bármely* $\mathbf{x}^{(0)}$ *kezdeti értékre.*

Megmutatható, hogy a Jacobi-iterációhoz hasonlóan diagonálisan domináns mátrixokra a Gauss–Seidel-módszer is konvergens.

**4.15. tétel.** *Ha* $\mathbf{A}$ *diagonálisan domináns, akkor a Gauss–Seidel-iteráció konvergens bármely* $\mathbf{x}^{(0)}$ *kezdeti értékre.*

**Bizonyítás.** Jelölje $\mathbf{x} = (x_1, \ldots, x_n)^T$ a (4.13) egyenlet pontos megoldását. Ekkor a (4.13) egyenletrendszer $i$-edik egyenletéből $x_i$-t kifejezve és a kapott egyenletet kivonva a (4.17) egyenletből, kapjuk, hogy

$$x_i^{(k+1)} - x_i = -\sum_{j=1}^{i-1} \frac{a_{ij}}{a_{ii}} (x_j^{(k+1)} - x_j) - \sum_{j=i+1}^{n} \frac{a_{ij}}{a_{ii}} (x_j^{(k)} - x_j).$$

Ebből következik, hogy

$$|x_i^{(k+1)} - x_i| \leq \sum_{j=1}^{i-1} \left| \frac{a_{ij}}{a_{ii}} \right| |x_j^{(k+1)} - x_j| + \sum_{j=i+1}^{n} \left| \frac{a_{ij}}{a_{ii}} \right| |x_j^{(k)} - x_j|. \tag{4.18}$$

Legyen

$$\alpha_i \equiv \sum_{j=1}^{i-1} \left| \frac{a_{ij}}{a_{ii}} \right| \qquad \text{és} \qquad \beta_i \equiv \sum_{j=i+1}^{n} \left| \frac{a_{ij}}{a_{ii}} \right|.$$

Ezzel a jelöléssel a (4.18) egyenlőtlenségből kapjuk, hogy

$$|x_i^{(k+1)} - x_i| \leq \alpha_i \|\mathbf{x}^{(k+1)} - \mathbf{x}\|_\infty + \beta_i \|\mathbf{x}^{(k)} - \mathbf{x}\|_\infty$$

teljesül minden $i = 1, \ldots, n$-re. Legyen $l$ egy olyan index, amelyre $|x_l^{(k+1)} - x_l| = \|\mathbf{x}^{(k+1)} - \mathbf{x}\|_\infty$. Ekkor

$$\|\mathbf{x}^{(k+1)} - \mathbf{x}\|_\infty \leq \alpha_l \|\mathbf{x}^{(k+1)} - \mathbf{x}\|_\infty + \beta_l \|\mathbf{x}^{(k)} - \mathbf{x}\|_\infty.$$

$\mathbf{A}$ diagonálisan domináns, ezért $\alpha_l < 1$, és így

$$\|\mathbf{x}^{(k+1)} - \mathbf{x}\|_\infty \leq \frac{\beta_l}{1 - \alpha_l} \|\mathbf{x}^{(k)} - \mathbf{x}\|_\infty.$$

Kapjuk tehát, hogy

$$\|\mathbf{x}^{(k)} - \mathbf{x}\|_\infty \leq \left( \max_{l=1,\ldots,n} \frac{\beta_l}{1 - \alpha_l} \right)^k \|\mathbf{x}^{(0)} - \mathbf{x}\|_\infty.$$

Ebből következik, hogy a Gauss–Seidel módszer konvergens, hiszen a diagonális dominancia alapján könnyen ellenőrizhető, hogy

$$\frac{\beta_l}{1 - \alpha_l} \leq \alpha_l + \beta_l < 1$$

teljesül minden $l = 1, \ldots, n$-re, és ebből

$$\max_{l=1,\ldots,n} \frac{\beta_l}{1 - \alpha_l} \leq \max_{l=1,\ldots,n} \{\alpha_l + \beta_l\} = \|\mathbf{T}_J\|_\infty < 1 \tag{4.19}$$

is következik. $\qquad\square$

A (4.19) egyenlőtlenségből következik az is, hogy diagonálisan domináns mátrixok esetében a Gauss–Seidel-módszerre jobb hibabecslést tudunk adni, mint a Jacobi-iterációra, tehát várhatóan legalább olyan gyorsan konvergál, mint a Jacobi-iteráció. Az általános esetben az, hogy a Jacobi- vagy a Gauss–Seidel-iteráció konvergál-e gyorsabban, attól függ, hogy $\rho(\mathbf{T}_J)$ vagy $\rho(\mathbf{T}_G)$ kisebb-e. Ennek eldöntésére, az $\mathbf{A}$ mátrix együtthatói ismeretében, nem ismert egyszerű feltétel. Egy speciális esetre vonatkozik a következő tétel, amelyet bizonyítás nélkül közlünk.

**4.16. tétel (Stein–Rosenberg).** *Tegyük fel, hogy* $a_{ij} \leq 0$ *ha* $i \neq j$ *és* $a_{ii} > 0$ *minden* $i = 1, \ldots, n$-re. *Ekkor a következő állítások közül pontosan egy teljesül:*

&nbsp;&nbsp;*1.* $0 \leq \rho(\mathbf{T}_G) < \rho(\mathbf{T}_J) < 1$,

&nbsp;&nbsp;*2.* $1 < \rho(\mathbf{T}_J) < \rho(\mathbf{T}_G)$,

&nbsp;&nbsp;*3.* $\rho(\mathbf{T}_J) = \rho(\mathbf{T}_G) = 0$,

&nbsp;&nbsp;*4.* $\rho(\mathbf{T}_J) = \rho(\mathbf{T}_G) = 1$.

A tételből következik, hogy a feltételeknek eleget tevő együtthatómátrixú egyenletrendszerek esetében a Jacobi-iteráció pontosan akkor konvergens, amikor a Gauss–Seidel-iteráció, és a Gauss–Seidel-iteráció mindig gyorsabban konvergál. Általában viszont nem igaz, hogy ha a Gauss–Seidel-iteráció konvergens, akkor a Jacobi is az, vagy fordítva.

### Feladatok

1. A Gauss–Seidel-iterációt használva oldja meg az előző szakasz 1. feladatában megadott egyenletrendszereket!

2. Mutassa meg, hogy a Jacobi- és a Gauss–Seidel-iteráció is véges sok lépésben megadja az egyenlet pontos gyökét, feltéve, hogy $\mathbf{A}$ felülről trianguláris és $a_{ii} \neq 0$ $i = 1, \ldots, n$-re!

## 4.4. Hibabecslés, iteratív finomítás

Az előző szakaszokban megismert iterációs módszerek megállási feltételei hasonlóak egy általános iterációs sorozat megállási feltételeihez. A 2.8. szakaszban tárgyalt feltételek mintájára három általános megállási feltétel valamelyikét, ill. ezek kombinációit használhatjuk:

$$1. \;\; \|\mathbf{x}^{(k+1)} - \mathbf{x}^{(k)}\| < \varepsilon, \quad 2. \;\; \frac{\|\mathbf{x}^{(k+1)} - \mathbf{x}^{(k)}\|}{\|\mathbf{x}^{(k+1)}\|} < \varepsilon, \quad \text{és} \quad 3. \;\; \|\mathbf{b} - \mathbf{A}\mathbf{x}^{(k)}\| < \varepsilon.$$

Ez utóbbi feltétellel foglalkozunk ebben a szakaszban.

Az $\mathbf{r} \equiv \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}}$ vektort az $\tilde{\mathbf{x}}$ közelítő megoldáshoz tartozó *reziduális vektornak* nevezzük. A 3. feltétel azon a hipotézisen alapszik, hogy ha $\mathbf{r}$ normája kicsi, akkor $\tilde{\mathbf{x}}$ jó közelítése a pontos megoldásnak. Azt, hogy ez a hipotézis nem minden esetben igaz, az alábbi példa mutatja.

**4.17. példa.** A

$$\begin{pmatrix} 4 & 1 \\ 4.03 & 1 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 5 \\ 5.03 \end{pmatrix} \tag{4.20}$$

egyenletrendszer pontos megoldása $\mathbf{x} = (1, 1)^T$. Tekintsük $\tilde{\mathbf{x}} = (2, -3)^T$-t egy „közelítő” megoldásnak. A hozzá tartozó reziduális vektor: $\mathbf{r} = \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}} = (0, 0.03)^T$. Ennek végtelen normája $\|\mathbf{r}\|_\infty = 0.03$, ami kicsi, annak ellenére, hogy $\tilde{\mathbf{x}}$ nyilván nem tekinthető a pontos megoldás jó közelítésének. $\qquad\square$

A következő eredmény azt vizsgálja, hogy $\|\mathbf{r}\|$ kicsinységéből milyen esetekben következtethetünk arra, hogy a közelítés hibája kicsi.

**4.18. tétel.** *Legyen* $\mathbf{A}$ *egy nemszinguláris négyzetes mátrix,* $\mathbf{x}$ *az* $\mathbf{A}\mathbf{x} = \mathbf{b}$ *egyenlet pontos megoldása,* $\tilde{\mathbf{x}}$ *egy közelítő megoldása, és legyen* $\mathbf{r} \equiv \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}}$. *Ekkor*

$$\|\mathbf{x} - \tilde{\mathbf{x}}\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{r}\|, \tag{4.21}$$

*és*

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \|\mathbf{A}\| \|\mathbf{A}^{-1}\| \frac{\|\mathbf{r}\|}{\|\mathbf{b}\|}. \tag{4.22}$$

**Bizonyítás.** Az $\mathbf{A}\mathbf{x} = \mathbf{b}$ és $\mathbf{A}\tilde{\mathbf{x}} = \mathbf{b} - \mathbf{r}$ összefüggésből kapjuk, hogy $\mathbf{A}(\mathbf{x} - \tilde{\mathbf{x}}) = \mathbf{r}$, és így $\mathbf{x} - \tilde{\mathbf{x}} = \mathbf{A}^{-1}\mathbf{r}$. Ebből az $\|\mathbf{A}^{-1}\mathbf{r}\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{r}\|$ egyenlőtlenséget felhasználva következik (4.21).

A (4.21) és a $\|\mathbf{b}\| \leq \|\mathbf{A}\| \|\mathbf{x}\|$ egyenlőtlenségekből

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \frac{\|\mathbf{A}\| \|\mathbf{A}^{-1}\| \|\mathbf{r}\|}{\|\mathbf{A}\| \|\mathbf{x}\|} \leq \|\mathbf{A}\| \|\mathbf{A}^{-1}\| \frac{\|\mathbf{r}\|}{\|\mathbf{b}\|}.$$

$\square$

Az előbbi tétel ad választ a 4.17. példában is vizsgált kérdésre. Abból, hogy a közelítő megoldás reziduális vektora kicsi, akkor következik csak, hogy a közelítés relatív hibája kicsi, ha az $\|\mathbf{A}\| \|\mathbf{A}^{-1}\|$ szorzat nem „túl nagy”. Vezessük be a következő elnevezést: az $\|\mathbf{A}\| \|\mathbf{A}^{-1}\|$ számot az $\mathbf{A}$ mátrix ($\|\cdot\|$ normára vonatkozó) *kondíciószámának* nevezzük és $\mathrm{cond}(\mathbf{A})$-val jelöljük. Megjegyezzük, hogy a kondíciószám a használt mátrixnormától függ. A $\|\cdot\|_p$ mátrixnormához tartozó kondíciószámot $\mathrm{cond}_p(\mathbf{A})$-val jelöljük. Ha egy $\mathbf{A}$ mátrix kondíciószáma „nagy”, akkor a mátrixot *rosszul kondícionált*, vagy *gyengén meghatározott* mátrixnak nevezzük. Arra, hogy mekkora kell legyen a kondíciószám ahhoz, hogy rosszul kondícionált mátrixról beszéljünk, nem adunk pontos definíciót. Általában 100–1000 feletti kondíciószám esetén szokás rosszul kondícionált mátrixról beszélni. Rosszul kondícionált mátrixokra tehát nem megbízható a 3. megállási feltétel.

**4.19. példa.** Tekintsük a 4.17. példa $\mathbf{A}$ együtthatómátrixát! Könnyen ellenőrizhető, hogy

$$\mathbf{A}^{-1} = \begin{pmatrix} -33.33 & 33.33 \\ 134.3 & -133.3 \end{pmatrix},$$

és így $\|\mathbf{A}\|_\infty = 5.03$, $\|\mathbf{A}^{-1}\|_\infty = 267.6$. Ebből kapjuk, hogy $\mathrm{cond}_\infty(\mathbf{A}) = 1346$. A 4.18. tétel szerint ez magyarázza azt, hogy $(2, -3)^T$ nem jó közelítése az egyenlet megoldásának, bár a reziduális vektor kicsi. $\qquad\square$

Tegyük fel, hogy az $\mathbf{A}\mathbf{x} = \mathbf{b}$ egyenletet Gauss-eliminációval oldjuk meg, $t$-jegyű aritmetikát használva. Legyen $\tilde{\mathbf{x}}$ ennek közelítő megoldása, amely kerekítési hibával terhelt. Számítsuk ki az $\mathbf{r} = \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}}$ reziduális vektort, de az értékes számjegyek megőrzése érdekében most használjunk $2t$-jegyű aritmetikát (dupla pontosságot) $\mathbf{r}$ számolásához. Megmutatható, hogy

$$\|\mathbf{r}\| \approx 10^{-t} \|\mathbf{A}\| \|\tilde{\mathbf{x}}\|.$$

Ezt az összefüggést felhasználhatjuk $\mathbf{A}$ kondíciószámának becslésére a következőképpen: Tekintsük az $\mathbf{A}\mathbf{y} = \mathbf{r}$ egyenletet, és legyen $\tilde{\mathbf{y}}$ ennek numerikus megoldása $t$-jegyű aritmetikát használva. Megjegyezzük, hogy az $\mathbf{A}\mathbf{y} = \mathbf{r}$ egyenletet hatékonyan meg tudjuk oldani, ha az első Gauss-elimináció során a sorcseréket és az $l_{ij}$ faktorokat, és a Gauss-elimináció végén kapott együtthatómátrixot megjegyezzük. Így csak az $\mathbf{r}$ vektoron kell újra eliminációt végezni, az együtthatómátrixon nem. (Az 5.1. szakaszban egy hasonlóan hatékony módszert fogunk bemutatni olyan lineáris egyenletrendszerek megoldására LU-faktorizáció segítségével, ahol az együtthatómátrix azonos.) Ekkor

$$\tilde{\mathbf{y}} \approx \mathbf{A}^{-1}\mathbf{r} = \mathbf{A}^{-1}(\mathbf{b} - \mathbf{A}\tilde{\mathbf{x}}) = \mathbf{A}^{-1}\mathbf{b} - \tilde{\mathbf{x}} = \mathbf{x} - \tilde{\mathbf{x}},$$

tehát $\|\tilde{\mathbf{y}}\|$ becslése $\|\mathbf{x} - \tilde{\mathbf{x}}\|$ hibának, és

$$\|\tilde{\mathbf{y}}\| \approx \|\mathbf{A}^{-1}\mathbf{r}\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{r}\| \approx \|\mathbf{A}^{-1}\| \|\mathbf{A}\| 10^{-t} \|\tilde{\mathbf{x}}\| = 10^{-t}\mathrm{cond}(\mathbf{A}) \|\tilde{\mathbf{x}}\|.$$

Ebből kapjuk, hogy a

$$\mathrm{cond}(\mathbf{A}) \approx 10^t \frac{\|\tilde{\mathbf{y}}\|}{\|\tilde{\mathbf{x}}\|} \tag{4.23}$$

képletet használhatjuk a kondíciószám becslésére. Legyen $\tilde{\mathbf{r}} \equiv \mathbf{r} - \mathbf{A}\tilde{\mathbf{y}}$ az $\tilde{\mathbf{y}}$-hoz tartozó reziduális vektor. Általában $\|\tilde{\mathbf{r}}\|$ sokkal kisebb, mint $\|\mathbf{r}\|$, ezért ha $\tilde{\mathbf{x}}$ helyett $\bar{\mathbf{x}} \equiv \tilde{\mathbf{x}} + \tilde{\mathbf{y}}$-t tekintjük $\mathbf{x}$ közelítésének, akkor az $\bar{\mathbf{x}}$-hez tartozó reziduális vektorra

$$\|\mathbf{b} - \mathbf{A}\bar{\mathbf{x}}\| = \|\mathbf{b} - \mathbf{A}(\tilde{\mathbf{x}} + \tilde{\mathbf{y}})\| = \|\mathbf{r} - \mathbf{A}\tilde{\mathbf{y}}\| = \|\tilde{\mathbf{r}}\| \ll \|\mathbf{b} - \mathbf{A}\tilde{\mathbf{x}}\|,$$

azaz $\bar{\mathbf{x}}$ sokkal pontosabb közelítése $\mathbf{x}$-nek, mint $\tilde{\mathbf{x}}$. Ha ezt az eljárást iterációs eljárásként ismételjük, akkor az ún. *iteratív finomítás* vagy más néven *reziduális korrekció* módszerét kapjuk. Ez a módszer rosszul kondícionált mátrixok esetén is az egyenlet megoldásának jó közelítését adja néhány lépésben.

**4.20. algoritmus. Iteratív finomítás**

```
INPUT:    A, b
          N    - maximális iterációszám
          TOL  - tolerancia
          t    - a számábrázolás pontossága
OUTPUT:   z    - az egyenlet megoldásának közelítése
          COND - cond_∞(A) közelítése

Az Ax = b egyenletet megoldjuk Gauss-eliminációval
for k = 1, 2, ..., N do
    Az r = b - Ax reziduális vektort kétszeres pontossággal kiszámoljuk.
    Az Ay = r egyenletet megoldjuk y-ra
    z ← x + y
    if k = 1 do
        COND ← 10^t · ||y||_∞ / ||x||_∞
        output(COND)
    end do
    if ||y||_∞ < TOL do
        output(z)
        stop
    end do
    x ← z
end do
output(A maximális iterációszámot túlléptük)
```

**4.21. példa.** Tekintsük a (4.20) egyenletet. Ennek pontos megoldása $\mathbf{x} = (1, 1)^T$. Gauss-eliminációval négyjegyű aritmetikát használva az $\tilde{\mathbf{x}} = (0.9375, 1.2500)^T$ közelítő megoldást kapjuk. Az ehhez tartozó reziduális vektor (dupla pontossággal számolva): $\mathbf{r} = \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}} = (0, 0.001875)^T$, így $\|\mathbf{r}\|_\infty = 0.001875$.

Az $\mathbf{A}\mathbf{y} = \mathbf{r}$ egyenletet Gauss-eliminációval megoldva (négyjegyű aritmetikát használva) kapjuk $\tilde{\mathbf{y}} = (0.0586, -0.2344)^T$. Ezért a (4.23) becslés szerint

$$\mathrm{cond}_\infty(\mathbf{A}) \approx 10^4 \frac{\|\tilde{\mathbf{y}}\|_\infty}{\|\tilde{\mathbf{x}}\|_\infty} = 10^4 \frac{0.2344}{1.25} = 1875. \tag{4.24}$$

A 4.19. példában láttuk, hogy a kondíciószám pontos értéke: $\mathrm{cond}_\infty(\mathbf{A}) = 1346$, tehát (4.24) valóban közelítése a pontos kondíciószámnak. Az $\tilde{\mathbf{x}}$ közelítő megoldás relatív hibája

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|_\infty}{\|\mathbf{x}\|_\infty} = 0.25,$$

ami elég nagy ($\mathbf{A}$ rosszul kondícionált). A 4.18. tétel szerint a

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|_\infty}{\|\mathbf{x}\|_\infty} \leq \mathrm{cond}_\infty(\mathbf{A}) \frac{\|\mathbf{r}\|_\infty}{\|\mathbf{b}\|_\infty} = 0.5017$$

hibakorlátot kapjuk az elkövetett relatív hibára. Az iteratív finomítás egy lépését alkalmazva az $\mathbf{x}^{(2)} = \mathbf{x} + \mathbf{y} = (0.9961, 1.016)^T$ közelítő megoldást kapjuk, ami közel van az egyenlet pontos megoldásához. $\qquad\square$

### Feladatok

1. Számítsa ki az

$$\text{(a)} \quad \begin{pmatrix} 1 & 2 \\ 4 & -1 \end{pmatrix}, \qquad \text{(b)} \quad \begin{pmatrix} 1 & 0 & 2 \\ 2 & 1 & 0 \\ 1 & -1 & 1 \end{pmatrix}$$

mátrixok $\mathrm{cond}_\infty$ és $\mathrm{cond}_1$ kondíciószámát!

2. Becsülje meg a $\mathrm{cond}_\infty(\mathbf{A})$ kondíciószámot, ha

$$\mathbf{A} = \begin{pmatrix} 1 & \frac{1}{2} & \frac{1}{3} \\ \frac{1}{2} & \frac{1}{3} & \frac{1}{4} \\ \frac{1}{3} & \frac{1}{4} & \frac{1}{5} \end{pmatrix}.$$

3. Négyjegyű aritmetikát használva oldja meg az

$$
\begin{aligned}
0.009x_1 - 0.52x_2 &= -5.191 \\
9211x_1 + 21.1x_2 &= 9422
\end{aligned}
$$

egyenletrendszert az iteratív finomítás módszerének két lépését használva! (A pontos megoldás: $(1, 10)$.)

## 4.5. Lineáris egyenletrendszerek perturbációja

Tekintsük az

$$\mathbf{A}\mathbf{x} = \mathbf{b} \tag{4.25}$$

lineáris egyenletrendszert. Tegyük fel, hogy a (4.25) egyenlet jobb oldala helyett annak egy kis perturbációja, $\tilde{\mathbf{b}} = \mathbf{b} + \Delta\mathbf{b}$ adott, és a hozzá tartozó

$$\mathbf{A}\tilde{\mathbf{x}} = \tilde{\mathbf{b}} \tag{4.26}$$

egyenletet oldjuk meg, aminek a megoldását $\tilde{\mathbf{x}}$-mal jelöltük.

**4.22. tétel.** *Legyen* $\mathbf{A}$ *nemszinguláris,* $\mathbf{x}$ *és* $\tilde{\mathbf{x}}$ *megoldása a* (4.25) *ill. a* (4.26) *egyenletnek. Ekkor*

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \mathrm{cond}(\mathbf{A}) \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{b}\|}.$$

**Bizonyítás.** A (4.25) és (4.26) egyenleteket kivonva egymásból $\mathbf{A}(\mathbf{x} - \tilde{\mathbf{x}}) = \mathbf{b} - \tilde{\mathbf{b}}$ adódik, amiből $\mathbf{x} - \tilde{\mathbf{x}} = \mathbf{A}^{-1}(\mathbf{b} - \tilde{\mathbf{b}})$, azaz $\|\mathbf{x} - \tilde{\mathbf{x}}\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{b} - \tilde{\mathbf{b}}\|$. Ezt és az $\|\mathbf{b}\| = \|\mathbf{A}\mathbf{x}\| \leq \|\mathbf{A}\| \|\mathbf{x}\|$ egyenlőtlenséget felhasználva

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \frac{\|\mathbf{A}\| \|\mathbf{A}^{-1}\| \|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{A}\| \|\mathbf{x}\|} \leq \mathrm{cond}(\mathbf{A}) \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{b}\|}.$$

$\square$

A tétel szerint egy nagyságrendi növekedés $\mathrm{cond}(\mathbf{A})$-ban eredményezheti a megoldás relatív hibájának egy nagyságrenddel való növekedését, azaz egy értékes számjegy elvesztését.

Tekintsük most az általános esetet, az együtthatómátrixot és az egyenlet jobb oldalát is perturbáljuk:

$$\tilde{\mathbf{A}}\tilde{\mathbf{x}} = \tilde{\mathbf{b}}, \tag{4.27}$$

ahol $\|\mathbf{b} - \tilde{\mathbf{b}}\|$ és $\|\mathbf{A} - \tilde{\mathbf{A}}\|$ „kicsi”.

**4.23. tétel.** *Legyen* $\mathbf{A}$ *nemszinguláris,* $\tilde{\mathbf{A}}$ *olyan hogy* $\|\mathbf{A} - \tilde{\mathbf{A}}\| < 1/\|\mathbf{A}^{-1}\|$. *Legyen* $\mathbf{x}$ *megoldása* (4.25)-*nek és* $\tilde{\mathbf{x}}$ *megoldása* (4.27)-*nek. Ekkor*

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \frac{\mathrm{cond}(\mathbf{A})}{1 - \mathrm{cond}(\mathbf{A})\frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|}} \left( \frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|} + \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{b}\|} \right).$$

**Bizonyítás.** Induljunk ki az $\tilde{\mathbf{A}} = \mathbf{A} - (\mathbf{A} - \tilde{\mathbf{A}}) = \mathbf{A}(\mathbf{I} - \mathbf{A}^{-1}(\mathbf{A} - \tilde{\mathbf{A}}))$ azonosságból. Mivel a feltétel szerint $\|\mathbf{A}^{-1}(\mathbf{A} - \tilde{\mathbf{A}})\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{A} - \tilde{\mathbf{A}}\| < 1$, ezért a 4.4. állítás szerint $\tilde{\mathbf{A}}$ invertálható, és

$$
\begin{aligned}
\|(\tilde{\mathbf{A}})^{-1}\| &\leq \|(\mathbf{I} - \mathbf{A}^{-1}(\mathbf{A} - \tilde{\mathbf{A}}))^{-1}\| \|\mathbf{A}^{-1}\| \\
&\leq \frac{\|\mathbf{A}^{-1}\|}{1 - \|\mathbf{A}^{-1}(\mathbf{A} - \tilde{\mathbf{A}})\|} \\
&\leq \frac{\|\mathbf{A}^{-1}\|}{1 - \|\mathbf{A}^{-1}\| \|\mathbf{A} - \tilde{\mathbf{A}}\|}.
\end{aligned}
$$

A (4.26) és (4.25) egyenletekből kapjuk

$$\mathbf{x} - \tilde{\mathbf{x}} = \mathbf{x} - (\tilde{\mathbf{A}})^{-1}\tilde{\mathbf{b}} = (\tilde{\mathbf{A}})^{-1}(\tilde{\mathbf{A}}\mathbf{x} - \tilde{\mathbf{b}}) = (\tilde{\mathbf{A}})^{-1}(\mathbf{b} - \tilde{\mathbf{b}} - (\mathbf{A} - \tilde{\mathbf{A}})\mathbf{x}).$$

Ebből

$$
\begin{aligned}
\|\mathbf{x} - \tilde{\mathbf{x}}\| &\leq \frac{\|\mathbf{A}^{-1}\|}{1 - \|\mathbf{A}^{-1}\| \|\mathbf{A} - \tilde{\mathbf{A}}\|}(\|\mathbf{b} - \tilde{\mathbf{b}}\| + \|\mathbf{A} - \tilde{\mathbf{A}}\| \|\mathbf{x}\|) \\
&= \frac{\|\mathbf{A}\| \|\mathbf{A}^{-1}\|}{1 - \|\mathbf{A}^{-1}\| \|\mathbf{A}\| \frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|}} \left( \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{A}\|} + \frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|} \|\mathbf{x}\| \right).
\end{aligned}
$$

Leosztva az egyenlőtlenséget $\|\mathbf{x}\|$-val és a $\|\mathbf{b}\| \leq \|\mathbf{A}\| \|\mathbf{x}\|$ egyenlőtlenséget alkalmazva

$$
\begin{aligned}
\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} &\leq \frac{\mathrm{cond}(\mathbf{A})}{1 - \mathrm{cond}(\mathbf{A})\frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|}} \left( \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{A}\| \|\mathbf{x}\|} + \frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|} \right) \\
&\leq \frac{\mathrm{cond}(\mathbf{A})}{1 - \mathrm{cond}(\mathbf{A})\frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|}} \left( \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{b}\|} + \frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|} \right).
\end{aligned}
$$

$\square$

Könnyen igazolhatók a kondíciószám következő tulajdonságai:

**4.24. tétel.** *Legyen* $\|\cdot\|$ *egy tetszőleges mátrixnorma és* $\mathrm{cond}(\cdot)$ *a hozzá tartozó kondíciószám függvény. Ekkor*

&nbsp;&nbsp;*1.* $\mathrm{cond}(\mathbf{A}) \geq 1$,

&nbsp;&nbsp;*2.* $\rho(\mathbf{A})\rho(\mathbf{A}^{-1}) \leq \mathrm{cond}(\mathbf{A})$

*teljesül minden invertálható* $\mathbf{A}$-ra.

A $\mathrm{cond}_*(\mathbf{A}) \equiv \rho(\mathbf{A})\rho(\mathbf{A}^{-1})$ számot az $\mathbf{A}$ mátrix *spektrál kondíciószámának* nevezzük. Az előző tétel szerint a mátrix spektrál kondíciószáma kisebb, mint bármely normához tartozó kondíciószáma. Hátránya, hogy nehéz kiszámolni, mivel a mátrix sajátértékeit kell hozzá meghatározni.

Bizonyítás nélkül közöljük a következő eredményt:

**4.25. tétel (Gastinel).** *Legyen* $\|\cdot\|$ *egy tetszőleges mátrixnorma,* $\mathbf{A}$ *invertálható mátrix. Ekkor*

$$\frac{1}{\mathrm{cond}(\mathbf{A})} = \min \left\{ \frac{\|\mathbf{A} - \mathbf{B}\|}{\|\mathbf{A}\|} : \mathbf{B} \text{ szinguláris} \right\}.$$

A tételből következik, hogy ha az $\mathbf{A}$ mátrix kondíciószáma nagy, akkor $\mathbf{A}$-hoz „közel” van egy szinguláris mátrix.

Rosszul kondícionált mátrixok klasszikus példája az ún. *Hilbert-mátrix*:

$$\mathbf{H}_n = \begin{pmatrix} 1 & \frac{1}{2} & \frac{1}{3} & \cdots & \frac{1}{n} \\ \frac{1}{2} & \frac{1}{3} & \frac{1}{4} & \cdots & \frac{1}{n+1} \\ \frac{1}{3} & \frac{1}{4} & \frac{1}{5} & \cdots & \frac{1}{n+2} \\ \vdots & & & & \vdots \\ \frac{1}{n} & \frac{1}{n+1} & \frac{1}{n+2} & \cdots & \frac{1}{2n-1} \end{pmatrix}.$$

A 4.3. táblázatban feltüntettük a Hilbert-mátrix spektrál kondíciószámát néhány $n$-re. Látható, hogy milyen gyorsan növekszik a spektrál kondíciószám $n$ növekedésével.

**4.3. táblázat. A Hilbert-mátrix spektrál kondíciószáma**

| $n$ | $\mathrm{cond}_*(\mathbf{H}_n)$ | $n$ | $\mathrm{cond}_*(\mathbf{H}_n)$ |
|----|---------------------------------|-----|---------------------------------|
| 3  | $5.24 \cdot 10^2$               | 7   | $7.45 \cdot 10^8$               |
| 4  | $1.55 \cdot 10^4$               | 8   | $1.53 \cdot 10^{10}$            |
| 5  | $4.77 \cdot 10^5$               | 9   | $4.93 \cdot 10^{11}$            |
| 6  | $1.50 \cdot 10^6$               | 10  | $1.60 \cdot 10^{13}$            |

### Feladatok

1. Számítsa ki az

$$\begin{pmatrix} 1 & 4 \\ 2 & -1 \end{pmatrix}$$

mátrix spektrál kondíciószámát!

2. Bizonyítsa be a 4.24. tételt!

3. Igazolja, hogy

$$\rho(\mathbf{A})\rho(\mathbf{A}^{-1}) = \frac{\max\{|\lambda_1|, \ldots, |\lambda_n|\}}{\min\{|\lambda_1|, \ldots, |\lambda_n|\}},$$

ahol $\lambda_1, \ldots, \lambda_n$ az $\mathbf{A}$ mátrix sajátértékei!
