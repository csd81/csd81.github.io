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
