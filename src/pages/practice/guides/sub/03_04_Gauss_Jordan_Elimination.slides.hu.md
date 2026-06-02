## 3.3. Gauss–Jordan-elimináció

A Gauss-elimináció egyik módosítása a *Gauss–Jordan-elimináció*, ahol a Gauss-elimináció lépéseivel egységmátrixra alakítjuk át az együtthatómátrixot, azaz az

$$(\mathbf{A}, \mathbf{b})$$

kibővített mátrixot az

$$(\mathbf{I}, \mathbf{b}^{(n-1)})$$

alakra hozzuk. Ekkor az $\mathbf{A}\mathbf{x} = \mathbf{b}$ egyenletrendszer megoldása

$$\mathbf{x} = \mathbf{b}^{(n-1)}$$

lesz.

---

**Algoritmus: Gauss–Jordan-elimináció**

INPUT: $a_{ij}$, $(i = 1, \ldots, n,\ \ j = 1, \ldots, n+1)$
OUTPUT: $x_1, \ldots, x_n$

*(együtthatómátrix diagonális alakra hozása:)*
**for** $k = 1, \ldots, n$ **do**
$\qquad$**for** $i = 1, \ldots, n$ **do**
$\qquad\qquad$**if** $i \neq k$ **do**
$\qquad\qquad\qquad l_{ik} \leftarrow a_{ik}/a_{kk}$
$\qquad\qquad\qquad$**for** $j = k+1, \ldots, n+1$ **do**
$\qquad\qquad\qquad\qquad a_{ij} \leftarrow a_{ij} - l_{ik}a_{kj}$
$\qquad\qquad\qquad$**end do**
$\qquad\qquad$**end do**
$\qquad$**end do**
**end do**
**for** $i = 1, \ldots, n$ **do**
$\qquad x_i \leftarrow a_{i,n+1}/a_{ii}$
**end do**
**output**$(x_1, x_2, \ldots, x_n)$

---

Ellenőrizhető, hogy a Gauss–Jordan-elimináció műveletigénye:

$$n^3/2 + \mathcal{O}(n^2)$$

osztás/szorzás.

### Példa

Alkalmazzuk a Gauss–Jordan-eliminációt a korábbi feladatra:

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 2 & -1 & 2 & 4 & -8 \\ -1 & 2 & -3 & -4 & 3 \\ -2 & 1 & 4 & -2 & 28 \end{pmatrix} \sim \begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 0 & 3 & 6 & 8 & 14 \\ 0 & 0 & -5 & -6 & -8 \\ 0 & -3 & 0 & -6 & 6 \end{pmatrix} \sim$$

$$\begin{pmatrix} 1 & 0 & 2 & \frac{10}{3} & -\frac{5}{3} \\ 0 & 3 & 6 & 8 & 14 \\ 0 & 0 & -5 & -6 & -8 \\ 0 & 0 & 6 & 2 & 20 \end{pmatrix} \sim \begin{pmatrix} 1 & 0 & 0 & \frac{14}{15} & -\frac{73}{15} \\ 0 & 3 & 0 & \frac{4}{5} & \frac{22}{5} \\ 0 & 0 & -5 & -6 & -8 \\ 0 & 0 & 0 & -\frac{26}{5} & \frac{52}{5} \end{pmatrix} \sim$$

$$\begin{pmatrix} 1 & 0 & 0 & 0 & -3 \\ 0 & 3 & 0 & 0 & 6 \\ 0 & 0 & -5 & 0 & -20 \\ 0 & 0 & 0 & -\frac{26}{5} & \frac{52}{5} \end{pmatrix} \sim \begin{pmatrix} 1 & 0 & 0 & 0 & -3 \\ 0 & 1 & 0 & 0 & 2 \\ 0 & 0 & 1 & 0 & 4 \\ 0 & 0 & 0 & 1 & -2 \end{pmatrix}$$

Az utolsó oszlopból kapjuk $x_1 = -3$, $x_2 = 2$, $x_3 = 4$ és $x_4 = -2$.

---

A Gauss-eliminációnál megfogalmazott részleges ill. teljes főelemkiválasztás alkalmazható a Gauss–Jordan-elimináció esetében is.

### Példa

Alkalmazzuk a Gauss–Jordan-eliminációt részleges főelemkiválasztással a korábbi feladatra:

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 2 & -1 & 2 & 4 & -8 \\ -1 & 2 & 3 & -4 & 27 \\ -2 & 1 & 4 & -2 & 28 \end{pmatrix} \sim \begin{pmatrix} 2 & -1 & 2 & 4 & -8 \\ 1 & -2 & -2 & -2 & -11 \\ -1 & 2 & 3 & -4 & 27 \\ -2 & 1 & 4 & -2 & 28 \end{pmatrix} \sim$$

$$\begin{pmatrix} 2 & -1 & 2 & 4 & -8 \\ 0 & -\frac{3}{2} & -3 & -4 & -7 \\ 0 & \frac{3}{2} & 4 & -2 & 23 \\ 0 & 0 & 6 & 2 & 20 \end{pmatrix} \sim \begin{pmatrix} 2 & 0 & 4 & \frac{20}{3} & -\frac{10}{3} \\ 0 & -\frac{3}{2} & -3 & -4 & -7 \\ 0 & 0 & 1 & -6 & 16 \\ 0 & 0 & 6 & 2 & 20 \end{pmatrix} \sim$$

### Példa folyt.

$$\begin{pmatrix} 2 & 0 & 4 & \frac{20}{3} & -\frac{10}{3} \\ 0 & -\frac{3}{2} & -3 & -4 & -7 \\ 0 & 0 & 6 & 2 & 20 \\ 0 & 0 & 1 & -6 & 16 \end{pmatrix} \sim \begin{pmatrix} 2 & 0 & 0 & \frac{16}{3} & -\frac{50}{3} \\ 0 & -\frac{3}{2} & 0 & -3 & 3 \\ 0 & 0 & 6 & 2 & 20 \\ 0 & 0 & 0 & -\frac{19}{3} & \frac{38}{3} \end{pmatrix} \sim$$

$$\begin{pmatrix} 2 & 0 & 0 & 0 & -6 \\ 0 & -\frac{3}{2} & 0 & 0 & -3 \\ 0 & 0 & 6 & 0 & 24 \\ 0 & 0 & 0 & -\frac{19}{3} & \frac{38}{3} \end{pmatrix} \sim \begin{pmatrix} 1 & 0 & 0 & 0 & -3 \\ 0 & 1 & 0 & 0 & 2 \\ 0 & 0 & 1 & 0 & 4 \\ 0 & 0 & 0 & 1 & -2 \end{pmatrix}$$

Így a megoldás $x_1 = -3$, $x_2 = 2$, $x_3 = 4$ és $x_4 = -2$.

---
