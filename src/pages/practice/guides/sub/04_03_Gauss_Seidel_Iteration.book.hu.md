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
