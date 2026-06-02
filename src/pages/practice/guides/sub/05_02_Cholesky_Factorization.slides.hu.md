## 5.2. Cholesky-felbontás

Legyen $\mathbf{A}$ egy szimmetrikus mátrix. Az $\mathbf{A}$ mátrix

$$
\mathbf{A} = \mathbf{LL}^T
$$

felbontását, ahol $\mathbf{L}$ alsó háromszögmátrix, **Cholesky-felbontásnak** nevezzük.

Megjegyezzük, hogy ha a Cholesky-felbontás létezik, akkor nem egyértelmű. A következő tétel elégséges feltételt fogalmaz meg a Cholesky-felbontás létezésére.

### Tétel:

*Ha $\mathbf{A}$ pozitív definit és szimmetrikus, akkor létezik az $\mathbf{A} = \mathbf{LL}^T$ Cholesky-felbontás, az $\mathbf{L}$ mátrix valós, és $\mathbf{L}$ főátlójában pozitív elemeket választhatunk.*

---

### Bizonyítás

Az állítást az $\mathbf{A}$ mátrix dimenziójára vonatkozó teljes indukcióval bizonyítjuk. Az állítás nyilvánvaló $1 \times 1$-es mátrixokra. Tegyük fel, hogy a tétel állítása teljesül $(n-1) \times (n-1)$-es mátrixokra, és legyen $\mathbf{A}$ egy $n \times n$-es mátrix. Az $\mathbf{A}$ mátrixot a következő alakban particionáljuk:

$$
\mathbf{A} =
\begin{pmatrix}
\mathbf{X} & \mathbf{y} \\
\mathbf{y}^T & a_{nn}
\end{pmatrix},
$$

ahol $\mathbf{X}$ egy $(n-1) \times (n-1)$-es mátrix, $\mathbf{y}$ egy $n-1$ dimenziós oszlopvektor. Mivel $\mathbf{A}$ pozitív definit, az összes vezető főminorja pozitív, ennélfogva $\mathbf{X}$ pozitív definit. Az $\mathbf{A}$ Cholesky-felbontását a következő alakban keressük:

$$
\mathbf{A} =
\begin{pmatrix}
\mathbf{X} & \mathbf{y} \\
\mathbf{y}^T & a_{nn}
\end{pmatrix}
=
\begin{pmatrix}
\tilde{\mathbf{L}} & \mathbf{0} \\
\mathbf{c}^T & d
\end{pmatrix}
\begin{pmatrix}
\tilde{\mathbf{L}}^T & \mathbf{c} \\
\mathbf{0}^T & d
\end{pmatrix}.
\tag{2}
$$

Itt $\tilde{\mathbf{L}}$ egy $(n-1) \times (n-1)$ dimenziós alsó háromszögmátrix, $\mathbf{c}$ egy $n-1$ dimenziós oszlopvektor, $d \in \mathbb{R}$.

---

### Bizonyítás folyt.

Ha elvégezzük a mátrixszorzást a particionált mátrixokon, a következő összefüggéseket kapjuk:

$$
\mathbf{X} = \tilde{\mathbf{L}}\tilde{\mathbf{L}}^T, \qquad \tilde{\mathbf{L}}\mathbf{c} = \mathbf{y} \quad \text{és} \quad \mathbf{c}^T\mathbf{c} + d^2 = a_{nn}.
$$

Az indukciós feltevés szerint az $\mathbf{X} = \tilde{\mathbf{L}}\tilde{\mathbf{L}}^T$ egyenletnek van $\tilde{\mathbf{L}} \in \mathbb{R}^{(n-1)\times(n-1)}$ alsó háromszögmátrix megoldása, ahol a főátlóban pozitív elemeket választhatunk. Ebből következik, hogy $\tilde{\mathbf{L}}$ nemszinguláris, így a $\tilde{\mathbf{L}}\mathbf{c} = \mathbf{y}$ egyenletnek egyetlen $\mathbf{c}$ megoldása van. Legyen $d$ a $\mathbf{c}^T\mathbf{c} + d^2 = a_{nn}$ egyenlet egy (esetleg komplex) gyöke. Ekkor a (2) összefüggés teljesül. $d$ pontosan akkor választható pozitív valós számnak, ha $d^2 = a_{nn} - \mathbf{c}^T\mathbf{c} > 0$. A (2) összefüggésből $\det(\mathbf{A}) = \det(\tilde{\mathbf{L}})^2 d^2$. Mivel $\mathbf{A}$ pozitív definit, ebből $\det(\mathbf{A}) > 0$ következik. Ebből adódik, hogy $d^2$ pozitív, ennélfogva $d$ választható pozitív valós számnak.

---

### Példa

Határozzuk meg a következő mátrix Cholesky-felbontását:

$$
\begin{pmatrix}
4 & -8 & 4 \\
-8 & 17 & -11 \\
4 & -11 & 22
\end{pmatrix}.
$$

Felírjuk, hogy

$$
\begin{pmatrix}
4 & -8 & 4 \\
-8 & 17 & -11 \\
4 & -11 & 22
\end{pmatrix}
=
\begin{pmatrix}
l_{11} & 0 & 0 \\
l_{21} & l_{22} & 0 \\
l_{31} & l_{32} & l_{33}
\end{pmatrix}
\begin{pmatrix}
l_{11} & l_{21} & l_{31} \\
0 & l_{22} & l_{32} \\
0 & 0 & l_{33}
\end{pmatrix}
$$

Először az első sor első elemére vonatkozó egyenletet tekintjük:

$$
4 = l_{11}^2.
$$

Ez megoldható $l_{11}$-re: a pozitív megoldás

$$
l_{11} = 2.
$$

---

### Példa folyt.

$$
\begin{pmatrix}
4 & -8 & 4 \\
-8 & 17 & -11 \\
4 & -11 & 22
\end{pmatrix}
=
\begin{pmatrix}
2 & 0 & 0 \\
l_{21} & l_{22} & 0 \\
l_{31} & l_{32} & l_{33}
\end{pmatrix}
\begin{pmatrix}
2 & l_{21} & l_{31} \\
0 & l_{22} & l_{32} \\
0 & 0 & l_{33}
\end{pmatrix}
$$

Ezután az első oszlop főátló alatti elemeit tekintjük:

$$
-8 = 2l_{21}, \qquad 4 = 2l_{31}.
$$

A megoldások $l_{21} = -4$, $l_{31} = 2$.

---

### Példa folyt.

$$
\begin{pmatrix}
4 & -8 & 4 \\
-8 & 17 & -11 \\
4 & -11 & 22
\end{pmatrix}
=
\begin{pmatrix}
2 & 0 & 0 \\
-4 & l_{22} & 0 \\
2 & l_{32} & l_{33}
\end{pmatrix}
\begin{pmatrix}
2 & -4 & 2 \\
0 & l_{22} & l_{32} \\
0 & 0 & l_{33}
\end{pmatrix}
$$

Most a második oszlop főátlóbeli elemét tekintjük:

$$
17 = (-4)^2 + l_{22}^2.
$$

Pozitív megoldása $l_{22} = 1$.

---

### Példa folyt.

$$
\begin{pmatrix}
4 & -8 & 4 \\
-8 & 17 & -11 \\
4 & -11 & 22
\end{pmatrix}
=
\begin{pmatrix}
2 & 0 & 0 \\
-4 & 1 & 0 \\
2 & l_{32} & l_{33}
\end{pmatrix}
\begin{pmatrix}
2 & -4 & 2 \\
0 & 1 & l_{32} \\
0 & 0 & l_{33}
\end{pmatrix}
$$

Ezután a második oszlop főátló alatti elemét nézzük:

$$
-11 = 2(-4) + 1 \cdot l_{32}.
$$

Ez megoldható: $l_{32} = -3$.

---

### Példa folyt.

$$
\begin{pmatrix}
4 & -8 & 4 \\
-8 & 17 & -11 \\
4 & -11 & 22
\end{pmatrix}
=
\begin{pmatrix}
2 & 0 & 0 \\
-4 & 1 & 0 \\
2 & -3 & l_{33}
\end{pmatrix}
\begin{pmatrix}
2 & -4 & 2 \\
0 & 1 & -3 \\
0 & 0 & l_{33}
\end{pmatrix}
$$

Végül a harmadik sor harmadik oszlopában lévő elem

$$
22 = 2^2 + (-3)^2 + l_{33}^2.
$$

Ebből $l_{33} = 3$. Így

$$
\begin{pmatrix}
4 & -8 & 4 \\
-8 & 17 & -11 \\
4 & -11 & 22
\end{pmatrix}
=
\begin{pmatrix}
2 & 0 & 0 \\
-4 & 1 & 0 \\
2 & -3 & 3
\end{pmatrix}
\begin{pmatrix}
2 & -4 & 2 \\
0 & 1 & -3 \\
0 & 0 & 3
\end{pmatrix}.
$$

---

### Algoritmus: Cholesky-felbontás

---

> BEMENET: $\quad\mathbf{A}$
> KIMENET: $\quad\mathbf{L}$
>
> $l_{11} \leftarrow \sqrt{a_{11}}$
> **for** $i = 2, \ldots, n$ **do**
> $\quad l_{i1} \leftarrow a_{i1}/l_{11}$
> **end do**
> **for** $j = 2, \ldots, n-1$ **do**
> $\quad l_{jj} \leftarrow \sqrt{a_{jj} - \sum_{k=1}^{j-1} l_{jk}^2}$
> $\quad$ **for** $i = j+1, \ldots, n$ **do**
> $\quad\quad l_{ij} \leftarrow \left(a_{ij} - \sum_{k=1}^{j-1} l_{ik}l_{jk}\right)/l_{jj}$
> $\quad$ **end do**
> **end do**
> $l_{nn} \leftarrow \sqrt{a_{nn} - \sum_{k=1}^{n-1} l_{nk}^2}$
> **output**$(l_{ij}, \quad i = 1, \ldots, n, \ j = 1, \ldots, i)$

---

A Cholesky-felbontás műveletigénye

$$
n^3/6 + \mathcal{O}(n^2)
$$

számú szorzás és osztás,

$$
n^3/6 + \mathcal{O}(n^2)
$$

számú összeadás és kivonás, valamint

$$
n
$$

számú négyzetgyök.
