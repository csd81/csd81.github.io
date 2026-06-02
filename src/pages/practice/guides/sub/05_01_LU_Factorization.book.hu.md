## 5.1. LU-faktorizáció

Legyen $\mathbf{A}$ egy $n \times n$-es mátrix. Az $\mathbf{A} = \mathbf{LU}$ szorzatot, ahol $\mathbf{L}$ alulról trianguláris mátrix, amelynek főátlójában csupa egyes áll, az $\mathbf{U}$ mátrix pedig felülről trianguláris, az $\mathbf{A}$ mátrix *trianguláris felbontásának* vagy *LU-faktorizációjának* vagy *Doolittle-faktorizációjának* nevezzük.

**5.1. tétel.** *Legyen $\mathbf{A}$ egy nemszinguláris mátrix. Ha az $\mathbf{A}$ mátrix LU-faktorizációja létezik, akkor az egyértelmű.*

**Bizonyítás.** Tegyük fel, hogy $\mathbf{A} = \mathbf{L}_1\mathbf{U}_1 = \mathbf{L}_2\mathbf{U}_2$ az $\mathbf{A}$ mátrix két LU-felbontása. Mivel $\det(\mathbf{A}) = \det(\mathbf{L}_1)\det(\mathbf{U}_1) = \det(\mathbf{L}_2)\det(\mathbf{U}_2) \neq 0$, ezért $\mathbf{L}_1$, $\mathbf{L}_2$, $\mathbf{U}_1$ és $\mathbf{U}_2$ nemszinguláris mátrixok. Így $\mathbf{L}_2^{-1}\mathbf{L}_1 = \mathbf{U}_2\mathbf{U}_1^{-1}$. A 3.6. tétel szerint a $\mathbf{L}_2^{-1}\mathbf{L}_1$ szorzat alulról trianguláris, a $\mathbf{U}_2\mathbf{U}_1^{-1}$ pedig felülről trianguláris mátrix. Mivel a két mátrix megegyezik, ezért ennek diagonálisnak kell lennie. Könnyen látható, hogy az $\mathbf{L}_2^{-1}\mathbf{L}_1$ mátrix főátlójában csupa egyes áll, tehát $\mathbf{L}_2^{-1}\mathbf{L}_1 = \mathbf{U}_2\mathbf{U}_1^{-1} = \mathbf{I}$, amiből kapjuk, hogy $\mathbf{L}_1 = \mathbf{L}_2$ és $\mathbf{U}_1 = \mathbf{U}_2$. $\quad\square$

Térjünk vissza a 3.3. szakaszban bevezetett Gauss-elimináció definíciójához. Legyen $l_{i1} = a_{i1}/a_{11}$, $i = 2, 3, \ldots, n$, mint a 3.3. szakaszban, és definiáljuk az

$$
\mathbf{L}_1 \equiv
\begin{pmatrix}
1 & & & & \\
-l_{21} & 1 & & & \\
-l_{31} & & 1 & & \\
\vdots & & & \ddots & \\
-l_{n1} & & & & 1
\end{pmatrix}
$$

alulról trianguláris mátrixot, amelynek az első oszlopa és a főátlója kivételével minden eleme 0. Könnyen ellenőrizhető, hogy az $\mathbf{L}_1\mathbf{A}$ mátrixszorzat pontosan a Gauss-elimináció első lépésekor kapott $\mathbf{A}^{(1)}$ mátrixot adja vissza: $\mathbf{A}^{(1)} = \mathbf{L}_1\mathbf{A}$. Hasonlóan, legyen $l_{i2} = a_{i2}^{(1)}/a_{22}^{(1)}$, $i = 3, 4, \ldots, n$, és legyen

$$
\mathbf{L}_2 \equiv
\begin{pmatrix}
1 & & & & \\
& 1 & & & \\
& -l_{32} & 1 & & \\
& \vdots & & \ddots & \\
& -l_{n2} & & & 1
\end{pmatrix},
$$

amelynél a főátlóban csupa egyes, a második oszlopban a főátló alatt a $-l_{32}, -l_{42}, \ldots, -l_{n2}$ számok állnak, a többi elem pedig 0. Ekkor $\mathbf{A}^{(2)} = \mathbf{L}_2\mathbf{A}^{(1)}$ teljesül. Hasonlóan definiáljuk az $\mathbf{L}_3, \ldots, \mathbf{L}_{n-1}$ alulról trianguláris mátrixokat. Egyszerű számolással kapjuk, hogy

$$
\mathbf{L}_{n-1}\mathbf{L}_{n-2}\cdots\mathbf{L}_1 =
\begin{pmatrix}
1 & & & & \\
-l_{21} & 1 & & & \\
-l_{31} & -l_{32} & 1 & & \\
\vdots & \vdots & & \ddots & \\
-l_{n1} & -l_{n2} & \cdots & -l_{n,n-1} & 1
\end{pmatrix},
\tag{5.1}
$$

és

$$
\begin{aligned}
\mathbf{L} &\equiv (\mathbf{L}_{n-1}\mathbf{L}_{n-2}\cdots\mathbf{L}_1)^{-1} \\
&= \mathbf{L}_1^{-1}\cdots\mathbf{L}_{n-2}^{-1}\mathbf{L}_{n-1}^{-1} \\
&=
\begin{pmatrix}
1 & & & & \\
l_{21} & 1 & & & \\
l_{31} & 0 & 1 & & \\
\vdots & 0 & \ddots & \ddots & \\
l_{n1} & 0 & \cdots & 0 & 1
\end{pmatrix}
\cdots
\begin{pmatrix}
1 & & & & \\
0 & 1 & & & \\
0 & 0 & 1 & & \\
0 & \vdots & \ddots & \ddots & \\
0 & 0 & \cdots & l_{n,n-1} & 1
\end{pmatrix} \\
&=
\begin{pmatrix}
1 & & & & \\
l_{21} & 1 & & & \\
l_{31} & l_{32} & 1 & & \\
\vdots & \vdots & & \ddots & \\
l_{n1} & l_{n2} & \cdots & l_{n,n-1} & 1
\end{pmatrix}.
\end{aligned}
\tag{5.2}
$$

Legyen $\mathbf{U} \equiv \mathbf{A}^{(n-1)}$, azaz a Gauss-eliminációval kapott felülről trianguláris mátrix. Ekkor $\mathbf{U} = \mathbf{L}_{n-1}\cdots\mathbf{L}_1\mathbf{A}$, amiből $\mathbf{A} = \mathbf{LU}$. Beláttuk tehát a következő tételt:

**5.2. tétel.** *Ha a Gauss-elimináció végrehajtható egy $\mathbf{A}$ mátrixon, akkor az $\mathbf{A} = \mathbf{LU}$ faktorizáció létezik. Ekkor $\mathbf{U}$ a Gauss-eliminációval kapott felülről trianguláris mátrix, $\mathbf{L}$ pedig az (5.2) képlettel definiált alulról trianguláris mátrix, ahol $l_{ij}$ jelöli a Gauss-eliminációban használt faktorokat.*

**5.3. példa.** Vegyük a 3.22. példában szereplő együtthatómátrixot:

$$
\mathbf{A} =
\begin{pmatrix}
1 & -2 & -2 & -2 \\
2 & -1 & 2 & 4 \\
-1 & 2 & 3 & -4 \\
-2 & 1 & 4 & -2
\end{pmatrix}.
$$

A 3.22. példában már láttuk, hogy a Gauss-elimináció végrehajtható $\mathbf{A}$-n, és $l_{21} = 2$, $l_{31} = -1$, $l_{41} = -2$, $l_{32} = 0$, $l_{42} = -1$ és $l_{43} = 6$. Az LU faktorizáció céljából végzett Gauss-eliminációt úgy szokás leírni, hogy az $l_{ij}$ elemeket a kinullázott elemek helyére írjuk le:

$$
\begin{pmatrix}
1 & -2 & -2 & -2 \\
2 & -1 & 2 & 4 \\
-1 & 2 & 3 & -4 \\
-2 & 1 & 4 & -2
\end{pmatrix}
\sim
\begin{pmatrix}
1 & -2 & -2 & -2 \\
2 & 3 & 6 & 8 \\
-1 & 0 & 1 & -6 \\
-2 & -3 & 0 & -6
\end{pmatrix}
\sim
\begin{pmatrix}
1 & -2 & -2 & -2 \\
2 & 3 & 6 & 8 \\
-1 & 0 & 1 & -6 \\
-2 & -1 & 6 & 2
\end{pmatrix}
\sim
\begin{pmatrix}
1 & -2 & -2 & -2 \\
2 & 3 & 6 & 8 \\
-1 & 0 & 1 & -6 \\
-2 & -1 & 6 & 38
\end{pmatrix}.
$$

Az utolsó mátrixban ekkor a főátlóban és fölötte $\mathbf{U}$ elemei, alatta pedig $\mathbf{L}$ elemei állnak. Azaz

$$
\begin{pmatrix}
1 & -2 & -2 & -2 \\
2 & -1 & 2 & 4 \\
-1 & 2 & 3 & -4 \\
-2 & 1 & 4 & -2
\end{pmatrix}
=
\begin{pmatrix}
1 & 0 & 0 & 0 \\
2 & 1 & 0 & 0 \\
-1 & 0 & 1 & 0 \\
-2 & -1 & 6 & 1
\end{pmatrix}
\begin{pmatrix}
1 & -2 & -2 & -2 \\
0 & 3 & 6 & 8 \\
0 & 0 & 1 & -6 \\
0 & 0 & 0 & 38
\end{pmatrix},
$$

amit beszorzással ellenőrizhetünk. $\quad\square$

---

Könnyen beláthatók a következő tételek (4. feladat):

**5.4. tétel.** *Ha az $\mathbf{A}$ mátrix összes bal felső főminorjai 0-tól különböznek, akkor a Gauss-elimináció sorcsere nélkül végrehajtható, és így az $\mathbf{A} = \mathbf{LU}$ faktorizáció létezik.*

**5.5. tétel.** *Tetszőleges $n \times n$-es invertálható $\mathbf{A}$ mátrixhoz létezik olyan $\mathbf{P}$ permutációs mátrix, hogy a $\mathbf{PA} = \mathbf{LU}$ faktorizáció létezik.*

Ha ismerjük egy $\mathbf{A}$ mátrix $\mathbf{A} = \mathbf{LU}$ felbontását, akkor annak segítségével hatékonyan tudunk lineáris egyenletrendszereket megoldani. Tekintsük az $\mathbf{Ax} = \mathbf{b}$ egyenletet. Vezessük be az $\mathbf{y} = \mathbf{Ux}$ új változót. Ekkor az eredeti egyenletrendszer ekvivalens az

$$
\begin{aligned}
\mathbf{Ly} &= \mathbf{b} \\
\mathbf{Ux} &= \mathbf{y}
\end{aligned}
$$

trianguláris együtthatójú egyenletekkel. Először az elsőt oldjuk meg a visszahelyettesítés algoritmusával analóg módszerrel, majd $\mathbf{y}$ ismeretében a másodikat a visszahelyettesítés módszerével. Könnyen ellenőrizhető, hogy a két egyenlet megoldásához $n^2 + \mathcal{O}(n)$, az LU-faktorizációhoz pedig $n^3/3 + \mathcal{O}(n^2)$ számú osztásra ill. szorzásra van szükség. Különösen előnyös ezt a módszert használni abban az esetben, amikor különböző jobb oldalra de azonos együtthatómátrixra kell megoldani több lineáris lineáris egyenletrendszert.

### Feladatok

1. Számítsa ki a következő mátrixok LU-felbontását:

   (a) $\begin{pmatrix} 2 & 3 & -1 \\ -1 & -2 & -1 \\ 0 & 2 & 4 \end{pmatrix}$
   (b) $\begin{pmatrix} 4 & -1 & 2 \\ -12 & 0 & -1 \\ 8 & -17 & 26 \end{pmatrix}$

   (c) $\begin{pmatrix} 1 & 3 & -1 & 2 \\ -2 & -4 & 5 & -5 \\ 0 & 6 & 6 & -2 \\ 2 & 4 & -14 & 16 \end{pmatrix}$
   (d) $\begin{pmatrix} 2 & -1 & 3 & -2 \\ -8 & 5 & -7 & 7 \\ 2 & -4 & -14 & 0 \\ -4 & 7 & 23 & 4 \end{pmatrix}$

2. Mutassa meg, hogy a $\begin{pmatrix} 2 & 2 & 3 \\ 1 & 1 & 4 \\ 1 & 0 & 1 \end{pmatrix}$ mátrixnak nem létezik az LU-faktorizációja!

3. Mutassa meg, hogy az $\begin{pmatrix} 1 & 1 & -1 \\ 2 & 2 & 2 \\ 3 & 3 & -4 \end{pmatrix}$ mátrixnak végtelen sok LU-felbontása van! Nem mond ez ellent az 5.1. tételnek?

4. Bizonyítsa be az 5.4. tételt! (Útmutatás: használja, hogy az elimináció során az $\mathbf{A}^{(k-1)}$ és $\mathbf{A}^{(k)}$ mátrixok megfelelő főminorjai megegyeznek. Miért?)

5. Bizonyítsa be az 5.5. tételt!

6. Oldja meg a 3.3. szakasz 1. feladatában szereplő lineáris egyenletrendszereket LU-faktorizációt használva!

---
