**2.10. Fixpont-tétel $n$-dimenzióban** (*Multidimensional Fixed Point Iteration*)

## 1. Motiváció és a többváltozós fixpont-iteráció alapelve

Az egyváltozós függvényekre bevezetett fixpont és fixpont-iteráció fogalma természetes módon általánosítható többváltozós nemlineáris egyenletrendszerek megoldására.

A kiindulási feladatunk egy többváltozós nemlineáris egyenletrendszer megoldása:


$$\mathbf{f}(\mathbf{x}) = \mathbf{0}$$


Ezt algebrai átalakításokkal egy ekvivalens, fixpontos alakra hozzuk:


$$\mathbf{x} = \mathbf{g}(\mathbf{x})$$


Ahol $\mathbf{x} = (x_1, x_2, \dots, x_n)^T \in \mathbb{R}^n$ a változók vektora, és $\mathbf{g}(\mathbf{x}) = \big(g_1(\mathbf{x}), g_2(\mathbf{x}), \dots, g_n(\mathbf{x})\big)^T$ a többváltozós iterációs függvény. Ebből generálható a többváltozós fixpont-iterációs sorozat:


$$\mathbf{p}^{(k+1)} = \mathbf{g}\big(\mathbf{p}^{(k)}\big), \qquad k=0,1,2,\dots$$



## 2. Bevezető mintapélda (2.51. Példa)

A fejezet egy kétdimenziós nemlineáris egyenletrendszeren keresztül mutatja be az iteráció felépítését:


$$\begin{aligned}4x_1-e^{x_1 x_2}-3 &= 0\\ x_1-x_2^2-3x_2-1 &= 0\end{aligned}$$


Az első egyenletből kifejezve $x_1$-et, a másodikból pedig $x_2$-t, megkapjuk a fixpontos alakot:


$$\mathbf{g}(x_1, x_2) = \begin{pmatrix} \frac{1}{4}(e^{x_1 x_2} + 3) \\ \frac{1}{3}(x_1 - x_2^2 - 1) \end{pmatrix}$$


Az egyenletrendszer pontos megoldása az $\mathbf{x} = (1, 0)^T$ vektor.



## 3. Globális és lokális konvergenciatételek

Ahhoz, hogy az iterációs sorozat biztosan konvergáljon a keresett fixponthoz, a $\mathbf{g}$ függvénynek kontraktívnak kell lennie. A konvergenciát a **$\mathbf{g}'(\mathbf{x})$ Jacobi-mátrix normájának** segítségével ellenőrizhetjük.

### Globális konvergencia feltétele (Kontrakció)

Ha létezik egy olyan $c \in (0,1)$ konstans, hogy a koordináta-függvények parciális deriváltjaira teljesül:


$$\|\mathbf{g}'(\mathbf{x})\| \leq c < 1$$


egy konvex tartományon, akkor a többváltozós Lagrange-féle középértéktétel miatt a függvény kontrakció, így a fixpont-iteráció bármilyen kezdőértékből indítva egyértelmű megoldáshoz konvergál.

### Lokális konvergencia

Ha a $\mathbf{p}$ pontos fixpont környezetében a Jacobi-mátrix egy tetszőleges indukált mátrixnormája szigorúan kisebb, mint 1:


$$\|\mathbf{g}'(\mathbf{p})\| < 1$$


akkor az iteráció a gyök egy elég kis környezetéből indítva **lokálisan konvergens**. A konvergencia sebessége ekkor **lineáris**.



## 4. Kvadratikus konvergencia speciális esete

A fejezet legfontosabb elméleti bizonyítása arra az esetre vonatkozik, amikor az iterációs függvény összes elsőrendű parciális deriváltja pontosan nulla a fixpontban.

> **Tétel:** Tegyük fel, hogy $\mathbf{p}$ a $\mathbf{g}$ függvény fixpontja, és a $\mathbf{g}$ függvény parciális deriváltjaira a fixpontban teljesül, hogy $\mathbf{g}'(\mathbf{p}) = \mathbf{0}$ (azaz az összes elsőrendű parciális derivált nulla). Ha a $\mathbf{g}$ függvény koordináta-függvényeinek másodrendű parciális deriváltjai folytonosak és korlátosak ($M$ konstanssal) a fixpont egy környezetében, akkor az iteráció **lokálisan kvadratikusan (másodrendben)** konvergál.

### A kvadratikus konvergencia bizonyításának vázlata

1. Felírjuk a $\mathbf{g}$ függvény $i$-edik komponensfüggvényének ($g_i$) **másodrendű Taylor-közelítését** a $\mathbf{p}$ pontos fixpont körül:

$$g_i(\mathbf{x}) = g_i(\mathbf{p}) + \sum_{j=1}^n \frac{\partial g_i(\mathbf{p})}{\partial x_j}(x_j - p_j) + \frac{1}{2}\sum_{j=1}^n \sum_{l=1}^n \frac{\partial^2 g_i(\boldsymbol{\xi})}{\partial x_j \partial x_l}(x_j - p_j)(x_l - p_l)$$


2. Mivel a feltétel szerint az elsőrendű parciális deriváltak a $\mathbf{p}$ pontban nullák ($\frac{\partial g_i(\mathbf{p})}{\partial x_j} = 0$), a középső lineáris szumma teljesen eltűnik.
3. Behelyettesítve a sorozat tagjait ($\mathbf{x} = \mathbf{p}^{(k)}$) és kihasználva a $p_i = g_i(\mathbf{p})$, valamint $p_i^{(k+1)} = g_i(\mathbf{p}^{(k)})$ összefüggéseket, a hibatagra a következőt kapjuk:

$$p_i^{(k+1)} - p_i = \frac{1}{2}\sum_{j=1}^n \sum_{l=1}^n \frac{\partial^2 g_i(\boldsymbol{\xi})}{\partial x_j \partial x_l}(p_j^{(k)} - p_j)(p_l^{(k)} - p_l)$$


4. Abszolút értéket véve és a másodrendű deriváltak $M$ felső korlátját bevezetve, a háromszög-egyenlőtlenség segítségével áttérhetünk a **maximum-normára ($\|\cdot\|_\infty$)**:

$$|p_i^{(k+1)} - p_i| \leq \frac{1}{2}\sum_{j=1}^n \sum_{l=1}^n M |p_j^{(k)} - p_j||p_l^{(k)} - p_l| \leq \frac{n^2}{2} M \|\mathbf{p}^{(k)} - \mathbf{p}\|_\infty^2$$


5. Mivel ez a becslés a vektor minden egyes $i$ komponensére igaz, a bal oldalon is vehető a maximum, így megszületik a kvadratikus konvergenciát igazoló végleges egyenlőtlenség:

$$\|\mathbf{p}^{(k+1)} - \mathbf{p}\|_\infty \leq \left( \frac{n^2}{2} M \right) \|\mathbf{p}^{(k)} - \mathbf{p}\|_\infty^2$$





## 5. Összefoglaló tanulság

A többváltozós fixpont-iteráció sebessége – az egyváltozóshoz hasonlóan – a deriváltaktól függ. Általános esetben a konvergencia lineáris ($\|\mathbf{g}'(\mathbf{p})\| < 1$), de ha sikerül olyan iterációs függvényt szerkesztenünk, amelynek a teljes Jacobi-mátrixa nulla a gyökhelyen, a konvergencia kvadratikussá gyorsul. Ez a kvadratikus elmélet adja a közvetlen matematikai alapját a későbbi **többváltozós Newton-módszernek** is.