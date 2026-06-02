**4.1. Lineáris fixpont-iteráció** 



## 1. Lineáris algebrai előismeretek: Sajátérték és Spektrálsugár

Mielőtt a lineáris egyenletrendszerek iterációs megoldását vizsgálnánk, a fejezet áttekinti a mátrixok sajátértékeinek fogalmát, mivel ez határozza meg a módszerek konvergenciáját.

* **Sajátérték és sajátvektor:** A $\lambda \in \mathbb{C}$ komplex számot az $\mathbf{A} \in \mathbb{R}^{n \times n}$ négyzetes mátrix sajátértékének, a nemtriviális ($\mathbf{x} \neq \mathbf{0}$) megoldást pedig a hozzá tartozó sajátvektornak nevezzük, ha teljesül az $\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$ egyenlet.
* **Karakterisztikus egyenlet:** A sajátértékek a $\det(\mathbf{A} - \lambda\mathbf{I}) = 0$ n-edfokú algebrai egyenlet megoldásai.
* **Spektrálsugár ($\rho(\mathbf{A})$):** A mátrix sajátértékei abszolút értékeinek (magnitúdóinak) a maximuma:

$$\rho(\mathbf{A}) := \max\{|\lambda| \colon \lambda \text{ sajátértéke }\mathbf{A}\text{-nak}\}$$



> **Kapcsolat a mátrixnormával:** Bármely $\mathbf{A}$ négyzetes mátrixra és tetszőleges indukált mátrixnormára $\|\cdot\|$ igaz, hogy a spektrálsugár alulról korlátozza a normát: $\rho(\mathbf{A}) \leq \|\mathbf{A}\|$. Továbbá, bármely kicsi $\varepsilon > 0$ esetén létezik olyan vektornorma, amelyhez tartozó indukált mátrixnormára $\|\mathbf{A}\| \leq \rho(\mathbf{A}) + \varepsilon$.



## 2. A Lineáris Fixpont-iteráció definíciója

Egy lineáris algebrai egyenletrendszert az iteratív megoldáshoz átírhatunk egy ekvivalens, $n$-dimenziós fixpontos alakra:


$$\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c}, \qquad k = 0, 1, 2, \ldots \tag{4.1}$$


Ahol $\mathbf{T} \in \mathbb{R}^{n \times n}$ az **iterációs mátrix**, $\mathbf{c} \in \mathbb{R}^n$ egy konstans vektor, és $\mathbf{x}^{(0)}$ a kiindulási (kezdeti) vektor. A pontos megoldás $\mathbf{x} = \mathbf{T}\mathbf{x} + \mathbf{c}$ teljesíti a fixpontegyenletet.



## 3. A Konvergencia Szükséges és Elégséges Feltétele

A fejezet legfontosabb elméleti eredménye megadja, hogy az iterációs sorozat milyen feltételek mellett fog bármilyen kezdőértékből indítva a pontos megoldáshoz konvergálni.

### 4.1. Tétel (Mátrixhatványok és spektrálsugár)

A következő állítások teljesen ekvivalensek:

1. $\displaystyle\lim_{k\to\infty} \mathbf{T}^k = \mathbf{0}$ (zérómátrix).
2. $\displaystyle\lim_{k\to\infty} \mathbf{T}^k \mathbf{x} = \mathbf{0}$ (zéróvektor) minden $\mathbf{x} \in \mathbb{R}^n$ esetén.
3. **$\rho(\mathbf{T}) < 1$**.

> **Gyakorlati következmény (Globális konvergencia):** A (4.1) lineáris fixpont-iteráció pontosan akkor konvergens **bármely tetszőleges $\mathbf{x}^{(0)}$ kezdővektor esetén**, ha az iterációs mátrix spektrálsugara szigorúan kisebb, mint 1 ($\rho(\mathbf{T}) < 1$). Ekkor a konvergencia **globális**.



## 4. Hibabecslési Formulák

Amennyiben az iteráció konvergens, a hibaterjedést mátrixnormák segítségével mérhetjük. Ha létezik olyan mátrixnorma, amelyre $\|\mathbf{T}\| < 1$ (ami $\rho(\mathbf{T}) < 1$ esetén biztosítható), akkor a valódi $\mathbf{x}$ megoldás és a $k$-adik lépésben kapott $\mathbf{x}^{(k)}$ közelítés távolságára kétféle becslés adható:

* **Apriori hibabecslés:** A futtatás előtt, pusztán a kezdeti lépésből megmondja a maximális hibát:

$$\|\mathbf{x}^{(k)} - \mathbf{x}\| \leq \frac{\|\mathbf{T}\|^k}{1 - \|\mathbf{T}\|} \|\mathbf{x}^{(1)} - \mathbf{x}^{(0)}\|$$


* **Aposzteri hibabecslés:** Az utolsó lépésben elért tényleges változás alapján becsül:

$$\|\mathbf{x}^{(k)} - \mathbf{x}\| \leq \frac{\|\mathbf{T}\|}{1 - \|\mathbf{T}\|} \|\mathbf{x}^{(k)} - \mathbf{x}^{(k-1)}\|$$





## 5. Numerikus Stabilitás (A kerekítési hibák hatása)

A valóságban a számítógépes végrehajtás során minden lépésben kerekítési hibák ($\mathbf{w}^{(k)}$) keletkeznek, így a perturbált sorozat:


$$\mathbf{y}^{(k+1)} = \mathbf{T}\mathbf{y}^{(k)} + \mathbf{c} + \mathbf{w}^{(k+1)}$$


Tegyük fel, hogy a kerekítési hiba korlátos: $\|\mathbf{w}^{(k)}\| \leq \varepsilon$. Ha kivonjuk egymásból a perturbált és a pontos iteráció egyenletét, a geometriai sor összegképletét alkalmazva az elért eltérés felső korlátja:


$$\|\mathbf{y}^{(k+1)} - \mathbf{x}^{(k+1)}\| \leq \frac{1}{1 - \|\mathbf{T}\|} \varepsilon \tag{4.3}$$

**Tanulság:** Ha $\|\mathbf{T}\| < 1$, az iteráció **numerikusan teljesen stabil** a kerekítési hibákra nézve. A felhalmozódó kerekítési hiba nem száll el a végtelenbe, hanem korlátos marad, és annál kisebb lesz, minél közelebb van $\|\mathbf{T}\|$ a nullához.