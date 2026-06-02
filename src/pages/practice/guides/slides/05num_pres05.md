# Numerikus analízis — 5. Mátrixfaktorizáció

*Hartung Ferenc*
*Pannon Egyetem, Matematika Tanszék, Veszprém, Magyarország*
*2025*

---

## 5.1. LU-felbontás

### Példa

A következő azonosság ellenőrizhető:

$$
\begin{pmatrix}
-2 & -1 & -3 \\
-4 & 0 & -7 \\
6 & 7 & 9
\end{pmatrix}
=
\begin{pmatrix}
1 & 0 & 0 \\
2 & 1 & 0 \\
-3 & 2 & 1
\end{pmatrix}
\begin{pmatrix}
-2 & -1 & -3 \\
0 & 2 & -1 \\
0 & 0 & 2
\end{pmatrix}
$$

Legyen $\mathbf{A}$ egy $n \times n$-es mátrix. Az

$$
\mathbf{A} = \mathbf{LU}
$$

szorzatot az $\mathbf{A}$ **LU-felbontásának** nevezzük, ha $\mathbf{L}$ alsó háromszögmátrix, amelynek a főátlójában minden elem 1, és $\mathbf{U}$ felső háromszögmátrix.

---

### Tétel:

*Legyen $\mathbf{A}$ egy nemszinguláris négyzetes mátrix. Ha az $\mathbf{A}$ LU-felbontása létezik, akkor az egyértelmű.*

**Bizonyítás.** Tegyük fel, hogy

$$
\mathbf{A} = \mathbf{L}_1\mathbf{U}_1 = \mathbf{L}_2\mathbf{U}_2
$$

az $\mathbf{A}$ mátrix két LU-felbontása. Mivel

$$
\det(\mathbf{A}) = \det(\mathbf{L}_1)\det(\mathbf{U}_1) = \det(\mathbf{L}_2)\det(\mathbf{U}_2) \neq 0,
$$

ezért $\mathbf{L}_1$, $\mathbf{L}_2$, $\mathbf{U}_1$ és $\mathbf{U}_2$ nemszinguláris mátrixok. Ennélfogva

$$
\mathbf{L}_2^{-1}\mathbf{L}_1 = \mathbf{U}_2\mathbf{U}_1^{-1}.
$$

Könnyen ellenőrizhető, hogy $\mathbf{L}_2^{-1}\mathbf{L}_1$ alsó háromszögmátrix, és $\mathbf{U}_2\mathbf{U}_1^{-1}$ felső háromszögmátrix. Ezért mindkettő diagonális. A $\mathbf{L}_2^{-1}\mathbf{L}_1$ főátlója csupa 1 elemből áll, így

$$
\mathbf{L}_2^{-1}\mathbf{L}_1 = \mathbf{U}_2\mathbf{U}_1^{-1} = \mathbf{I},
$$

amiből következik, hogy

$$
\mathbf{L}_1 = \mathbf{L}_2 \qquad \text{és} \qquad \mathbf{U}_1 = \mathbf{U}_2.
$$

---

Tekintsük a Gauss-elimináció definícióját. Legyen

$$
l_{i1} = \frac{a_{i1}}{a_{11}}, \qquad i = 2, 3, \ldots, n,
$$

és definiáljuk az alsó háromszögmátrixot

$$
\mathbf{L}_1 :=
\begin{pmatrix}
1 & & & & \\
-l_{21} & 1 & & & \\
-l_{31} & & 1 & & \\
\vdots & & & \ddots & \\
-l_{n1} & & & & 1
\end{pmatrix}
$$

ahol a hiányzó elemek mind $0$-val egyenlők. Könnyen ellenőrizhető, hogy

$$
\mathbf{L}_1\mathbf{A} = \mathbf{A}^{(1)},
$$

ahol $\mathbf{A}^{(1)}$ az a mátrix, amelyet a Gauss-elimináció első eliminációs lépésének az együtthatómátrixon való végrehajtásával kapunk.

---

Könnyen ellenőrizhető, hogy

$$
\begin{pmatrix}
1 & & & & \\
-l_{21} & 1 & & & \\
-l_{31} & & 1 & & \\
\vdots & & & \ddots & \\
-l_{n1} & & & & 1
\end{pmatrix}
\begin{pmatrix}
1 & & & & \\
l_{21} & 1 & & & \\
l_{31} & & 1 & & \\
\vdots & & & \ddots & \\
l_{n1} & & & & 1
\end{pmatrix}
=
\begin{pmatrix}
1 & & & & \\
& 1 & & & \\
& & 1 & & \\
& & & \ddots & \\
& & & & 1
\end{pmatrix},
$$

ennélfogva

$$
\mathbf{L}_1^{-1} :=
\begin{pmatrix}
1 & & & & \\
l_{21} & 1 & & & \\
l_{31} & & 1 & & \\
\vdots & & & \ddots & \\
l_{n1} & & & & 1
\end{pmatrix}
$$

---

Hasonlóan, legyen

$$
l_{i2} = \frac{a_{i2}^{(1)}}{a_{22}^{(1)}}, \qquad i = 3, 4, \ldots, n,
$$

és definiáljuk a mátrixot

$$
\mathbf{L}_2 :=
\begin{pmatrix}
1 & & & & \\
& 1 & & & \\
& -l_{32} & 1 & & \\
& \vdots & & \ddots & \\
& -l_{n2} & & & 1
\end{pmatrix}
$$

ahol a főátló minden eleme 1, a második oszlopban az átló alatti elemek $-l_{32}, -l_{42}, \ldots, -l_{n2}$, és az összes többi elem 0. Ekkor

$$
\mathbf{A}^{(2)} = \mathbf{L}_2\mathbf{A}^{(1)}
$$

teljesül.

---

Igaz, hogy

$$
\mathbf{L}_2^{-1} :=
\begin{pmatrix}
1 & & & & \\
& 1 & & & \\
& l_{32} & 1 & & \\
& \vdots & & \ddots & \\
& l_{n2} & & & 1
\end{pmatrix}
$$

A $\mathbf{L}_3, \ldots, \mathbf{L}_{n-1}$ alsó háromszögmátrixokat hasonló módon definiáljuk. Egyszerű számítás mutatja, hogy

$$
\mathbf{L}_{n-1}\mathbf{L}_{n-2}\cdots\mathbf{L}_1 =
\begin{pmatrix}
1 & 0 & 0 & \cdots & 0 \\
-l_{21} & 1 & 0 & \cdots & 0 \\
-l_{31} & -l_{32} & 1 & \cdots & 0 \\
\vdots & \vdots & \ddots & \ddots & \vdots \\
-l_{n1} & -l_{n2} & \cdots & -l_{n,n-1} & 1
\end{pmatrix},
$$

és

---

$$
\begin{aligned}
\mathbf{L} &:= (\mathbf{L}_{n-1}\mathbf{L}_{n-2}\cdots\mathbf{L}_1)^{-1} \\
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
\tag{1}
$$

---

Legyen $\mathbf{U} := \mathbf{A}^{(n-1)}$, azaz az a felső háromszögmátrix, amely a Gauss-elimináció eredménye. Ekkor

$$
\mathbf{U} = \mathbf{L}_{n-1}\cdots\mathbf{L}_1\mathbf{A},
$$

amiből

$$
\mathbf{A} = \mathbf{LU}.
$$

Ezzel bizonyítottuk a következő eredményt.

### Tétel:

*Ha a Gauss-elimináció elvégezhető egy $\mathbf{A}$ négyzetes mátrixon, akkor létezik az $\mathbf{A} = \mathbf{LU}$ LU-felbontás. Ekkor $\mathbf{U}$ a Gauss-eliminációval kapott felső háromszögmátrix, és $\mathbf{L}$ az (1) képlettel van definiálva, ahol $l_{ij}$ a Gauss-eliminációban használt szorzótényezőket jelöli.*

---

### Példa

Tekintsük egy korábbi, 3. fejezetbeli példa lineáris rendszerének együtthatómátrixát.

$$
\mathbf{A} =
\begin{pmatrix}
1 & -2 & -2 & -2 \\
2 & -1 & 2 & 4 \\
-1 & 2 & 3 & -4 \\
-2 & 1 & 4 & -2
\end{pmatrix}.
$$

Ahogy korábban láttuk, a Gauss-elimináció elvégezhető $\mathbf{A}$-n, és $l_{21} = 2$, $l_{31} = -1$, $l_{41} = -2$, $l_{32} = 0$, $l_{42} = -1$ és $l_{43} = 6$. Ha kiszámítjuk az LU-felbontást, akkor a Gauss-eliminációt úgy írjuk fel, hogy az $l_{ij}$ szorzótényezőket azon elemek helyére írjuk, amelyeket kiküszöbölünk ($0$-ra változtatunk):

---

### Példa folyt.

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
$$

$$
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
\end{pmatrix}
$$

Az utolsó mátrixban a főátlóbeli és a feletti elemek az $\mathbf{U}$ mátrix elemei, a főátló alatti elemek pedig az $\mathbf{L}$ elemei. Ezért

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
\end{pmatrix}.
$$

---

A következő eredmények könnyen bizonyíthatók.

### Tétel:

*Ha az $\mathbf{A}$ összes vezető főminorja nemnulla, akkor a Gauss-elimináció sorcserék nélkül elvégezhető, és így létezik az $\mathbf{A} = \mathbf{LU}$ LU-felbontás.*

### Tétel:

*Bármely invertálható $\mathbf{A}$ négyzetes mátrixhoz létezik olyan $\mathbf{P}$ permutációmátrix, hogy létezik a $\mathbf{PA} = \mathbf{LU}$ LU-felbontás.*

---

Tegyük fel, hogy $\mathbf{A} = \mathbf{LU}$ ismert, és tekintsük az $\mathbf{Ax} = \mathbf{b}$ lineáris rendszert. Ekkor

$$
\mathbf{LUx} = \mathbf{b}.
$$

Bevezetjük az új $\mathbf{y} = \mathbf{Ux}$ változót. Ekkor az eredeti rendszer ekvivalens az

$$
\begin{aligned}
\mathbf{Ly} &= \mathbf{b} \\
\mathbf{Ux} &= \mathbf{y}
\end{aligned}
$$

rendszerrel, ahol mindkét rendszer háromszög alakú. Az első egyenletet előrehelyettesítéses módszerrel oldjuk meg $\mathbf{y}$-ra, majd a második egyenletet visszahelyettesítéses módszerrel $\mathbf{x}$-re. Könnyen ellenőrizhető, hogy $n^2 + \mathcal{O}(n)$ számú szorzás/osztás szükséges a két háromszögrendszer megoldásához, és az LU-felbontás kiszámításához $n^3/3 + \mathcal{O}(n^2)$ számú szorzás/osztás szükséges. Ez különösen hatékony, ha több lineáris rendszert oldunk meg ugyanazzal az együtthatómátrixszal.

---

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
