# Numerikus analízis

## 3. Lineáris egyenletrendszerek

**Ferenc Hartung**

Pannon Egyetem
Matematika Tanszék

2026

---

## 3.1. Trianguláris egyenletrendszerek

### Példa

Oldjuk meg a következő egyenletrendszert:

$$\begin{array}{rcrcrcrcr}
2x_1 & - & x_2 & + & 3x_3 & + & x_4 & = & 3 \\
& & 3x_2 & - & x_3 & + & 2x_4 & = & 13 \\
& & & & 2x_3 & - & x_4 & = & -2 \\
& & & & & & 3x_4 & = & 12
\end{array}$$

A negyedik egyenletet $x_4$-re megoldhatjuk: $x_4 = 4$. Ezt visszahelyettesítve a harmadik egyenletbe kapjuk

$$x_3 = (-2 + x_4)/2 = 1,$$

majd a második egyenletből

$$x_2 = (13 + x_3 - 2x_4)/3 = 2.$$

Végül az első egyenletből

$$x_1 = (3 + x_2 - 3x_3 - x_4)/2 = -1.$$

---

Az előző példát általánosítva, egy $n$-dimenziós felülről trianguláris egyenletrendszer,

$$\mathbf{A}\mathbf{x} = \mathbf{b},$$

azaz

$$\begin{array}{rcrcrcrcr}
a_{11}x_1 & + & a_{12}x_2 & + & \ldots & + & a_{1n}x_n & = & b_1 \\
& & a_{22}x_2 & + & \ldots & + & a_{2n}x_n & = & b_2 \\
& & & & \ddots & & \vdots & & \vdots \\
& & & & & & a_{nn}x_n & = & b_n
\end{array} \tag{1}$$

megoldásának módszerét, az ún. visszahelyettesítés módszerét a következő algoritmussal adhatjuk meg:

---

**Algoritmus: Trianguláris egyenletrendszer megoldása visszahelyettesítéssel**

INPUT: $a_{ij}$, $(i = 1, \ldots, n,\ \ j = 1, \ldots, n)$, $b_i$, $(i = 1, \ldots, n)$
OUTPUT: $x_1, \ldots, x_n$

$x_n \leftarrow b_n / a_{nn}$
**for** $i = n-1, \ldots, 1$ **do**
$\qquad x_i \leftarrow \left(b_i - \sum_{j=i+1}^{n} a_{ij}x_j\right)/a_{ii}$
**end do**
**output**$(x_1, x_2, \ldots, x_n)$

---

A visszahelyettesítés módszere akkor és csak akkor hajtható végre, ha $a_{ii} \neq 0$ minden $i = 1, \ldots, n$-re. Mivel

$$\det(\mathbf{A}) = a_{11}a_{22}\cdots a_{nn}$$

trianguláris mátrixokra, így ez akkor és csak akkor teljesül, ha az (1) egyenletnek létezik egyértelmű megoldása, azaz

$$\det(\mathbf{A}) \neq 0.$$

A módszer műveletigénye:

$$1 + 2 + \cdots + n = n(n+1)/2 = n^2/2 + \mathcal{O}(n)$$

szorzás és osztás, illetve

$$1 + 2 + \cdots + n - 1 = (n-1)n/2 = n^2/2 + \mathcal{O}(n)$$

összeadás és kivonás. Itt és később $\mathcal{O}(n^k)$ egy tetszőleges, legfeljebb $k$-adfokú polinomot jelöl.

---

## 3.2. Gauss-elimináció, főelemkiválasztási stratégiák

### Példa

Tekintsük az

$$\begin{array}{rcrcrcrcr}
x_1 & - & 2x_2 & - & 2x_3 & - & 2x_4 & = & -11 \\
2x_1 & - & x_2 & + & 2x_3 & + & 4x_4 & = & -8 \\
-x_1 & + & 2x_2 & + & 3x_3 & - & 4x_4 & = & 27 \\
2x_1 & + & x_2 & + & 4x_3 & - & 2x_4 & = & 28
\end{array} \tag{2}$$

egyenletrendszert. Az első egyenlet segítségével a második, harmadik és negyedik egyenletből az $x_1$ változó kiejthető a következő módon: az első egyenlet 2-szeresét, $-1$-szeresét, ill. $-2$-szeresét kivonjuk a második, harmadik, ill. a negyedik egyenletből:

$$\begin{array}{rcrcrcrcr}
x_1 & - & 2x_2 & - & 2x_3 & - & 2x_4 & = & -11 \\
& & 3x_2 & + & 6x_3 & + & 8x_4 & = & 14 \\
& & & & x_3 & - & 6x_4 & = & 16 \\
& - & 3x_2 & & & - & 6x_4 & = & 6
\end{array} \tag{3}$$

Ekkor az eredetivel ekvivalens egyenletrendszert kapunk.

### Példa folyt.

A (2) egyenletrendszerhez az alábbi kibővített mátrixot rendeljük hozzá:

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 2 & -1 & 2 & 4 & -8 \\ -1 & 2 & 3 & -4 & 27 \\ -2 & 1 & 4 & -2 & 28 \end{pmatrix}$$

Az elimináció röviden:

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 2 & -1 & 2 & 4 & -8 \\ -1 & 2 & 3 & -4 & 27 \\ -2 & 1 & 4 & -2 & 28 \end{pmatrix} \sim \begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 0 & 3 & 6 & 8 & 14 \\ 0 & 0 & 1 & -6 & 16 \\ 0 & -3 & 0 & -6 & 6 \end{pmatrix} \sim$$

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 0 & 3 & 6 & 8 & 14 \\ 0 & 0 & 1 & -6 & 16 \\ 0 & 0 & 6 & 2 & 20 \end{pmatrix} \sim \begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 0 & 3 & 6 & 8 & 14 \\ 0 & 0 & 1 & -6 & 16 \\ 0 & 0 & 0 & 38 & -76 \end{pmatrix}$$

A számolás során alkalmazott elemi műveletek (szorzótényezők rendre $2, -1, -2$, majd $-1$, majd $6$):

$$2 - 2\cdot 1 = 0, \quad -1 - 2\cdot(-2) = 3, \quad 2 - 2\cdot(-2) = 6, \quad 4 - 2\cdot(-2) = 8, \quad -8 - 2\cdot(-11) = 14$$

$$-1 - (-1)\cdot 1 = 0, \quad 2 - (-1)\cdot(-2) = 0, \quad 3 - (-1)\cdot(-2) = 1, \quad -4 - (-1)\cdot(-2) = -6, \quad 27 - (-1)\cdot(-11) = 16$$

$$-2 - (-2)\cdot 1 = 0, \quad 1 - (-2)\cdot(-2) = -3, \quad 4 - (-2)\cdot(-2) = 0, \quad -2 - (-2)\cdot(-2) = -6, \quad 28 - (-2)\cdot(-11) = 6$$

A visszahelyettesítés módszerével kapjuk: $x_1 = -3$, $x_2 = 2$, $x_3 = 4$, $x_4 = -2$.

---

Az előző példa módszerét alkalmazva az

$$\begin{array}{rcrcrcrcr}
a_{11}x_1 & + & a_{12}x_2 & + & \ldots & + & a_{1n}x_n & = & b_1 \\
a_{21}x_1 & + & a_{22}x_2 & + & \ldots & + & a_{2n}x_n & = & b_2 \\
\vdots & & \vdots & & & & \vdots & & \vdots \\
a_{n1}x_1 & + & a_{n2}x_2 & + & \ldots & + & a_{nn}x_n & = & b_n
\end{array} \tag{4}$$

általános $n$-dimenziós lineáris egyenletrendszerre kapjuk a *Gauss-elimináció* módszerét: Az együtthatókat és az egyenlet bal oldalát az ún. kibővített mátrixban tároljuk:

$$\tilde{\mathbf{A}}^{(0)} = (\mathbf{A}, \mathbf{b}) = \begin{pmatrix} a_{11} & a_{12} & \ldots & a_{1n} & a_{1,n+1} \\ a_{21} & a_{22} & \ldots & a_{2n} & a_{2,n+1} \\ \vdots & \vdots & & \vdots & \vdots \\ a_{n1} & a_{n2} & \ldots & a_{nn} & a_{n,n+1} \end{pmatrix},$$

ahol $a_{i,n+1} := b_i$, $(i = 1, \ldots, n)$.

Az $\tilde{\mathbf{A}}^{(0)}$ mátrixból képezzük az egymással ekvivalens egyenleteket leíró $\tilde{\mathbf{A}}^{(1)}, \tilde{\mathbf{A}}^{(2)}, \ldots, \tilde{\mathbf{A}}^{(n-1)}$ mátrixokat a következő módon:

$$\tilde{\mathbf{A}}^{(1)} = \begin{pmatrix} a_{11} & a_{12} & \ldots & a_{1n} & a_{1,n+1} \\ 0 & a_{22}^{(1)} & \ldots & a_{2n}^{(1)} & a_{2,n+1}^{(1)} \\ \vdots & \vdots & & \vdots & \vdots \\ 0 & a_{n2}^{(1)} & \ldots & a_{nn}^{(1)} & a_{n,n+1}^{(1)} \end{pmatrix},$$

ahol

$$a_{ij}^{(1)} := a_{ij} - l_{i1}a_{1j}, \quad l_{i1} := \frac{a_{i1}}{a_{11}}, \quad i = 2, \ldots, n, \quad j = 2, \ldots, n+1,$$

(feltéve, hogy $a_{11} \neq 0$).

Ha már $\tilde{\mathbf{A}}^{(1)}, \ldots, \tilde{\mathbf{A}}^{(k-1)}$ definiált, ahol $k \leq n-1$, akkor legyen

$$\tilde{\mathbf{A}}^{(k)} = \begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1,k} & a_{1,k+1} & \cdots & a_{1,n} & a_{1,n+1} \\
0 & a_{22}^{(1)} & \cdots & a_{2,k}^{(1)} & a_{2,k+1}^{(1)} & \cdots & a_{2,n}^{(1)} & a_{2,n+1}^{(1)} \\
& & \ddots & & & & & \\
0 & 0 & \cdots & a_{k,k}^{(k-1)} & a_{k,k+1}^{(k-1)} & \cdots & a_{k,n}^{(k-1)} & a_{k,n+1}^{(k-1)} \\
0 & 0 & \cdots & 0 & a_{k+1,k+1}^{(k)} & \cdots & a_{k+1,n}^{(k)} & a_{k+1,n+1}^{(k)} \\
\vdots & \vdots & & \vdots & \vdots & & \vdots & \vdots \\
0 & 0 & \cdots & 0 & a_{n,k+1}^{(k)} & \cdots & a_{n,n}^{(k)} & a_{n,n+1}^{(k)}
\end{pmatrix},$$

ahol

$$a_{ij}^{(k)} := a_{ij}^{(k-1)} - l_{ik}a_{kj}^{(k-1)}, \quad l_{ik} := \frac{a_{ik}^{(k-1)}}{a_{kk}^{(k-1)}}, \quad i = k+1, \ldots, n, \quad j = k+1, \ldots, n+1.$$

Ezeket az ún. *eliminációs lépéseket* $k = 1, \ldots, n-1$-re hajtjuk végre.

Ezután az $\tilde{\mathbf{A}}^{(n-1)}$ mátrixhoz tartozó trianguláris egyenletrendszert a visszahelyettesítés módszerével megoldjuk. A Gauss-elimináció végrehajtása után az együtthatómátrix főátlójában szereplő

$$a_{11}, a_{22}^{(1)}, \ldots, a_{nn}^{(n-1)}$$

számokat *főelemeknek* nevezzük. A Gauss-elimináció akkor és csak akkor hajtható végre, ha az összes főelem nem nulla. Ha a Gauss-elimináció lépéseit csak az együtthatómátrixon végezzük, akkor az iterációs lépésekben kapott mátrixokat $\mathbf{A}^{(0)} := \mathbf{A}, \mathbf{A}^{(1)}, \ldots, \mathbf{A}^{(n-1)}$ jelöli.

---

**Algoritmus: Gauss-elimináció**

INPUT: $a_{ij}$, $(i = 1, \ldots, n,\ \ j = 1, \ldots, n+1)$
OUTPUT: $x_1, \ldots, x_n$

*(elimináció:)*
**for** $k = 1, \ldots, n-1$ **do**
$\qquad$**for** $i = k+1, \ldots, n$ **do**
$\qquad\qquad l_{ik} \leftarrow a_{ik}/a_{kk}$
$\qquad\qquad$**for** $j = k+1, \ldots, n+1$ **do**
$\qquad\qquad\qquad a_{ij} \leftarrow a_{ij} - l_{ik}a_{kj}$
$\qquad\qquad$**end do**
$\qquad$**end do**
**end do**
*(visszahelyettesítés:)*
$x_n \leftarrow a_{n,n+1}/a_{nn}$
**for** $i = n-1, \ldots, 1$ **do**
$\qquad x_i \leftarrow \left(a_{i,n+1} - \sum_{j=i+1}^{n} a_{ij}x_j\right)/a_{ii}$
**end do**
**output**$(x_1, x_2, \ldots, x_n)$

---

A Gauss-elimináció műveletigénye:

$$n^3/3 + n^2/2 - 5n/6$$

szorzás és osztás, illetve

$$(n^3 - n)/3$$

összeadás és kivonás. A visszahelyettesítéssel együtt

$$n^3/3 + n^2/2 - 5n/6 + n^2/2 + n/2 = n^3/3 + n^2 - n/3 = n^3/3 + \mathcal{O}(n^2)$$

szorzás és osztás, illetve

$$(n^3 - n)/3 + n^2/2 - n/2 = n^3/3 + n^2/2 - 5n/6 = n^3/3 + \mathcal{O}(n^2)$$

összeadás és kivonás. Röviden a Gauss-elimináció műveletigénye

$$n^3/3.$$

### Példa

Oldjuk meg az

$$\begin{array}{rcrcrcrcr}
2x_1 & - & x_2 & & & - & 3x_4 & = & 8 \\
2x_1 & - & x_2 & + & x_3 & + & 5x_4 & = & 2 \\
-3x_1 & + & x_2 & + & x_3 & - & 2x_4 & = & -5 \\
2x_1 & + & 4x_2 & & & - & x_4 & = & 21
\end{array}$$

egyenletrendszert Gauss-eliminációval! Egy Gauss-eliminációs lépést elvégezve kapjuk

$$\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\ 2 & -1 & 1 & 5 & 2 \\ -3 & 1 & 1 & -2 & -5 \\ 2 & 4 & 0 & -1 & 21 \end{pmatrix} \sim \begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\ 0 & 0 & 1 & 8 & -6 \\ 0 & -\frac{1}{2} & 1 & -\frac{13}{2} & 7 \\ 0 & 5 & 0 & 2 & 13 \end{pmatrix}.$$

A második sor második oszlopában levő elem 0, ezért nem tudjuk tovább folytatatni a Gauss-eliminációt. Könnyen látható, hogy az egyenletrendszernek viszont létezik egyértelmű megoldása: $x_1 = 4$, $x_2 = 3$, $x_3 = 2$ és $x_4 = -1$.

### Példa folyt.

Ha felcseréljük az utolsó lépésben kapott kibővített mátrix második és harmadik sorát, akkor folytathatók az eliminációs lépések:

$$\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\ 0 & 0 & 1 & 8 & -6 \\ 0 & -\frac{1}{2} & 1 & -\frac{13}{2} & 7 \\ 0 & 5 & 0 & 2 & 13 \end{pmatrix} \sim \begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\ 0 & -\frac{1}{2} & 1 & -\frac{13}{2} & 7 \\ 0 & 0 & 1 & 8 & -6 \\ 0 & 5 & 0 & 2 & 13 \end{pmatrix} \sim$$

$$\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\ 0 & -\frac{1}{2} & 1 & -\frac{13}{2} & 7 \\ 0 & 0 & 1 & 8 & -6 \\ 0 & 0 & 10 & -63 & 83 \end{pmatrix} \sim \begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\ 0 & -\frac{1}{2} & 1 & -\frac{13}{2} & 7 \\ 0 & 0 & 1 & 8 & -6 \\ 0 & 0 & 0 & -143 & 143 \end{pmatrix},$$

amelyből következik az egyenletrendszer megoldása: $x_1 = 4$, $x_2 = 3$, $x_3 = 2$ és $x_4 = -1$.

### Példa

Oldjuk meg a

$$\begin{array}{rcrcr}
0.0002x_1 & - & 30.5x_2 & = & -60.99 \\
5.060x_1 & - & 1.05x_2 & = & 250.9
\end{array}$$

egyenletrendszert a Gauss-eliminációval 4-jegyű aritmetikát használva a számolásokhoz. Először kiszámoljuk az $l_{21} = 5.060/0.0002 = 25300$ szorzótényezőt (4 értékes jegyre kerekítve), ezzel beszorozzuk az első egyenletet, és a kapott sort kivonjuk a másodikból:

$$\begin{pmatrix} 0.0002 & -30.5 & -60.99 \\ 5.06 & -1.05 & 250.9 \end{pmatrix} \sim \begin{pmatrix} 0.0002 & -30.5 & -60.99 \\ 0 & 771700 & 1543000 \end{pmatrix}.$$

(Megjegyezzük, hogy a 2. sorban levő 0-t nem numerikusan számoljuk.) Ezt megoldva kapjuk az $\tilde{x}_1 = -100.0$ és $\tilde{x}_2 = 1.999$ numerikus megoldást. Az egyenletrendszer pontos megoldása $x_1 = 50$ és $x_2 = 2$. A számolt megoldásokban tehát 300% ill. 0.05%-os relatív hiba van! Különösen hatalmas a hiba az első változó értékében.

### Példa folyt.

Végezzük most el ugyanezt a számolást az egyenletrendszeren úgy, hogy először felcseréljük a két egyenletet. Kapjuk:

$$\begin{pmatrix} 5.06 & -1.05 & 250.9 \\ 0.0002 & -30.5 & -60.99 \end{pmatrix} \sim \begin{pmatrix} 5.06 & -1.05 & 250.9 \\ 0 & -30.5 & -61.0 \end{pmatrix}.$$

amiből következik, hogy $x_1 = 50.00$ és $x_2 = 2.000$, amelyek pontosan megegyeznek a tényleges megoldás értékekkel!

Mi a különbség a két számolásban? Az első esetben $l_{21}$ kiszámolásakor egy kis számmal (0.0002) kellett osztani, ami a kerekítési hiba jelentős növekedéséhez vezetett. A második esetben viszont 5.06-gyel osztottunk $l_{21}$ kiszámításakor, és a végső eredményben nem kaptunk kerekítési hibát.

---

### 3.2. Gauss-elimináció, főelemkiválasztási stratégiák — Részleges főelemkiválasztás

*Részleges főelemkiválasztás* (vagy egyszerűen csak *főelemkiválasztás*) módszere: a Gauss-elimináció $k$-adik lépése előtt keressük meg a $k$-adik oszlopban a főátlóban és az alatta álló elemek közül a legnagyobb abszolút értékűt, azaz legyen

$$|a_{lk}| = \max\{|a_{ik}| : i = k, \ldots, n\}.$$

(A maximális elem az $l$-edik sorban van.)

$$\begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1,k-1} & a_{1k} & a_{1,k+1} & \cdots & a_{1n} \\
0 & a_{22} & \cdots & a_{2,k-1} & a_{2k} & a_{2,k+1} & \cdots & a_{2n} \\
\vdots & & \vdots & \vdots & \vdots & & \vdots \\
0 & 0 & \cdots & a_{k-1,k-1} & a_{k-1,k} & a_{k-1,k+1} & \cdots & a_{k-1,n} \\
0 & 0 & \cdots & 0 & \boxed{a_{kk}} & a_{k,k+1} & \cdots & a_{kn} \\
\vdots & & & & \boxed{a_{lk}} & & & \vdots \\
0 & 0 & \cdots & 0 & a_{nk} & a_{n,k+1} & \cdots & a_{nn}
\end{pmatrix}$$

Cseréljük fel a $k$-adik és $l$-edik sort, és folytassuk az eliminációt.

### Tétel

*A következő állítások ekvivalensek:*

1. *az $\mathbf{A}\mathbf{x} = \mathbf{b}$ egyenlet egyértelműen megoldható Gauss-eliminációval részleges főelemkiválasztást használva,*

2. $\det(\mathbf{A}) \neq 0$,

3. *az $\mathbf{A}$ mátrix invertálható,*

4. *az $\mathbf{A}\mathbf{x} = \mathbf{b}$ egyenletnek létezik megoldása minden $\mathbf{b}$ vektorra.*

**Bizonyítás.** Most azt látjuk be, hogy 1. és 2. ekvivalens. Tegyük fel először, hogy 1. teljesül. Legyen $\mathbf{A}^{(0)} = \mathbf{A}$, és jelöljük $\mathbf{A}^{(k)}$-val a Gauss-elimináció $k$-adik lépésekor kapott együtthatómátrixot. A determinánsok tulajdonságából következik, hogy

$$\det(\mathbf{A}^{(k)}) = \det(\mathbf{A}^{(k-1)}),$$

ha nem történt sorcsere a $k$-adik lépésben, ill.

$$\det(\mathbf{A}^{(k)}) = -\det(\mathbf{A}^{(k-1)}),$$

ha volt sorcsere. Mivel a feltétel szerint a Gauss-elimináció elvégezhető, ezért az $\mathbf{A}^{(n-1)}$ mátrixhoz tartozó trianguláris egyenletrendszer megoldható, azaz $\det(\mathbf{A}^{(n-1)}) \neq 0$. Ebből viszont következik, hogy

$$\det(\mathbf{A}) = \pm\det(\mathbf{A}^{(n-1)}) \neq 0.$$

A Gauss-elimináció $k$-adik lépése akkor és csak akkor nem hajtható végre, ha $a_{ik}^{(k-1)} = 0$ minden $i = k, \ldots, n$-re, azaz:

$$\mathbf{A}^{(k-1)} = \begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1,k-1} & a_{1k} & a_{1,k+1} & \cdots & a_{1n} \\
0 & a_{22}^{(1)} & \cdots & a_{2,k-1}^{(1)} & a_{2k}^{(1)} & a_{2,k+1}^{(1)} & \cdots & a_{2n}^{(1)} \\
& & \ddots & & & & & \\
0 & 0 & \cdots & a_{k-1,k-1}^{(k-2)} & a_{k-1,k}^{(k-2)} & a_{k-1,k+1}^{(k-2)} & \cdots & a_{k-1,n}^{(k-2)} \\
0 & 0 & \cdots & 0 & 0 & a_{k,k+1}^{(k-1)} & \cdots & a_{kn}^{(k-1)} \\
\vdots & \vdots & & \vdots & \vdots & \vdots & & \vdots \\
0 & 0 & \cdots & 0 & 0 & a_{n,k+1}^{(k-1)} & \cdots & a_{nn}^{(k-1)}
\end{pmatrix}.$$

Ekkor

$$\det(\mathbf{A}^{(k-1)}) = a_{11}a_{22}^{(1)}\cdots a_{k-1,k-1}^{(k-2)}\det\begin{pmatrix} 0 & a_{k,k+1}^{(k-1)} & \cdots & a_{kn}^{(k-1)} \\ \vdots & \vdots & & \vdots \\ 0 & a_{n,k+1}^{(k-1)} & \cdots & a_{nn}^{(k-1)} \end{pmatrix} = 0 = \det(\mathbf{A}). \qquad\square$$

### Példa

Oldjuk meg a korábbi feladatot Gauss-eliminációval részleges főelemkiválasztással!

$$\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\ 2 & -1 & 1 & 5 & 2 \\ -3 & 1 & 1 & -2 & -5 \\ 2 & 4 & 0 & -1 & 21 \end{pmatrix} \sim \begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 2 & -1 & 1 & 5 & 2 \\ 2 & -1 & 0 & -3 & 8 \\ 2 & 4 & 0 & -1 & 21 \end{pmatrix} \sim$$

$$\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 0 & -\frac{1}{3} & \frac{5}{3} & \frac{11}{3} & -\frac{4}{3} \\ 0 & -\frac{1}{3} & \frac{2}{3} & -\frac{13}{3} & \frac{14}{3} \\ 0 & \frac{14}{3} & \frac{2}{3} & -\frac{7}{3} & \frac{53}{3} \end{pmatrix} \sim \begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 0 & \frac{14}{3} & \frac{2}{3} & -\frac{7}{3} & \frac{53}{3} \\ 0 & -\frac{1}{3} & \frac{2}{3} & -\frac{13}{3} & \frac{14}{3} \\ 0 & -\frac{1}{3} & \frac{5}{3} & \frac{11}{3} & -\frac{4}{3} \end{pmatrix} \sim$$

$$\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 0 & \frac{14}{3} & \frac{2}{3} & -\frac{7}{3} & \frac{53}{3} \\ 0 & 0 & \frac{5}{7} & -\frac{9}{2} & \frac{83}{14} \\ 0 & 0 & \frac{12}{7} & \frac{7}{2} & -\frac{1}{14} \end{pmatrix} \sim \begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 0 & \frac{14}{3} & \frac{2}{3} & -\frac{7}{3} & \frac{53}{3} \\ 0 & 0 & \frac{12}{7} & \frac{7}{2} & -\frac{1}{14} \\ 0 & 0 & \frac{5}{7} & -\frac{9}{2} & \frac{83}{14} \end{pmatrix} \sim$$

$$\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 0 & \frac{14}{3} & \frac{2}{3} & -\frac{7}{3} & \frac{53}{3} \\ 0 & 0 & \frac{12}{7} & \frac{7}{2} & -\frac{1}{14} \\ 0 & 0 & 0 & -\frac{143}{24} & \frac{143}{24} \end{pmatrix}.$$

A megoldás $x_1 = 4$, $x_2 = 3$, $x_3 = 2$ és $x_4 = -1$.

---

### 3.2. Gauss-elimináció, főelemkiválasztási stratégiák — Teljes főelemkiválasztás

*Teljes főelemkiválasztás* módszere: a Gauss-elimináció $k$-adik lépése előtt keressük meg az első olyan $l$ és $m$ sor- és oszlopindexet, amelyre

$$|a_{lm}| = \max\{|a_{ij}| : i = k, \ldots, n,\ j = k, \ldots, n\}.$$

(A maximális elem az $l$-edik sorban és $m$-edik oszlopban van.) Cseréljük fel a $k$-adik és $l$-edik sort és a $k$-adik és $m$-edik oszlopot.

### Példa

Tekintsük újra a korábbi példa egyenletrendszerét, és oldjuk meg a feladatot most Gauss-eliminációval teljes főelemkiválasztást használva (az oszlopok alatt jelöljük, melyik változó együtthatóit tartalmazza):

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 2 & -1 & 2 & 4 & -8 \\ -1 & 2 & 3 & -4 & 27 \\ -2 & 1 & 4 & -2 & 28 \\ x_1 & x_2 & x_3 & x_4 & \end{pmatrix} \sim \begin{pmatrix} 2 & -1 & 2 & 4 & -8 \\ 1 & -2 & -2 & -2 & -11 \\ -1 & 2 & 3 & -4 & 27 \\ -2 & 1 & 4 & -2 & 28 \\ x_1 & x_2 & x_3 & x_4 & \end{pmatrix} \sim$$

$$\begin{pmatrix} 4 & -1 & 2 & 2 & -8 \\ -2 & -2 & 2 & 1 & -11 \\ -4 & 2 & 3 & -1 & 27 \\ -2 & 1 & 4 & -2 & 28 \\ x_4 & x_2 & x_3 & x_1 & \end{pmatrix} \sim \begin{pmatrix} 4 & -1 & 2 & 2 & -8 \\ 0 & -\frac{5}{2} & 1 & 2 & -15 \\ 0 & 1 & 5 & 1 & 19 \\ 0 & \frac{1}{2} & 5 & -1 & 24 \\ x_4 & x_2 & x_3 & x_1 & \end{pmatrix} \sim$$

$$\begin{pmatrix} 4 & -1 & 2 & 2 & -8 \\ 0 & 1 & 5 & 1 & 19 \\ 0 & -\frac{5}{2} & 1 & 2 & -15 \\ 0 & \frac{1}{2} & 5 & -1 & 24 \\ x_4 & x_2 & x_3 & x_1 & \end{pmatrix} \sim \begin{pmatrix} 4 & 2 & -1 & 2 & -8 \\ 0 & 5 & 1 & 1 & 19 \\ 0 & -1 & -\frac{5}{2} & 2 & -15 \\ 0 & 5 & \frac{1}{2} & -1 & 24 \\ x_4 & x_3 & x_2 & x_1 & \end{pmatrix} \sim$$

### Példa folyt.

$$\begin{pmatrix} 4 & 2 & -1 & 2 & -8 \\ 0 & 5 & 1 & 1 & 19 \\ 0 & 0 & -\frac{23}{10} & \frac{11}{5} & -\frac{56}{5} \\ 0 & 0 & -\frac{1}{2} & -2 & 5 \\ x_4 & x_3 & x_2 & x_1 & \end{pmatrix} \sim \begin{pmatrix} 4 & 2 & -1 & 2 & -8 \\ 0 & 5 & 1 & 1 & 19 \\ 0 & 0 & -\frac{23}{10} & \frac{11}{5} & -\frac{56}{5} \\ 0 & 0 & 0 & -\frac{57}{23} & \frac{171}{23} \\ x_4 & x_3 & x_2 & x_1 & \end{pmatrix}$$

A kapcsolódó trianguláris egyenletrendszer

$$\begin{array}{rcrcrcrcr}
4x_4 & + & 2x_3 & - & x_2 & + & 2x_1 & = & -8 \\
& & 5x_3 & + & x_2 & + & x_1 & = & 19 \\
& & & - & \frac{23}{10}x_2 & + & \frac{11}{5}x_1 & = & -\frac{56}{5} \\
& & & & & - & \frac{57}{23}x_1 & = & \frac{171}{23}
\end{array}$$

A megoldás most is $x_1 = -3$, $x_2 = 2$, $x_3 = 4$ és $x_4 = -2$.

---

Az $\mathbf{A}$ négyzetes mátrixot *soronként diagonálisan dominánsnak* vagy röviden *diagonálisan dominánsnak* nevezzük, ha

$$|a_{ii}| > \sum_{\substack{j=1 \\ j \neq i}}^{n} |a_{ij}|$$

teljesül minden $i = 1, \ldots, n$-re.

### Példa

Az

$$\begin{pmatrix} 5 & -1 & 2 \\ 2 & -10 & 1 \\ -2 & 0 & 3 \end{pmatrix}$$

mátrix diagonálisan domináns, mivel

$$5 > 1 + 2$$
$$10 > 2 + 1$$
$$3 > 2 + 0.$$

### Tétel

*Ha $\mathbf{A}$ diagonálisan domináns, akkor $\mathbf{A}$ invertálható.*

**Bizonyítás.** Tegyük fel, hogy $\mathbf{A}$ nem invertálható. Ekkor az $\mathbf{A}\mathbf{x} = \mathbf{0}$ egyenletnek létezik $\mathbf{x} \neq \mathbf{0}$ nemtriviális megoldása. Legyen $k$ olyan, hogy

$$|x_k| = \max\{|x_i| : i = 1, \ldots, n\} \neq 0.$$

Mivel $\sum_{j=1}^{n} a_{ij}x_j = 0$ minden $i = 1, \ldots, n$-re, kapjuk, hogy $a_{kk}x_k = -\sum_{j=1, j\neq k}^{n} a_{kj}x_j$. Ekkor a háromszög-egyenlőtlenség alapján

$$|a_{kk}x_k| \leq \sum_{\substack{j=1 \\ j \neq k}}^{n} |a_{kj}x_j|,$$

és így

$$|a_{kk}| \leq \sum_{\substack{j=1 \\ j \neq k}}^{n} |a_{kj}| \frac{|x_j|}{|x_k|} \leq \sum_{\substack{j=1 \\ j \neq k}}^{n} |a_{kj}|,$$

ami ellentmondás. $\qquad\square$

### Tétel

*Ha az $\mathbf{A}$ mátrix diagonálisan domináns, akkor a Gauss-elimináció főelemkiválasztás nélkül végrehajtható az $\mathbf{A}\mathbf{x} = \mathbf{b}$ egyenletrendszeren, és a módszer stabil a kerekítési hibákra nézve.*

---

Egy $\mathbf{A} \in \mathbb{R}^{n \times n}$ mátrixot *pozitív definitnek* (*negatív definitnek*) nevezünk, ha $\mathbf{A}$ szimmetrikus és

$$\mathbf{x}^T\mathbf{A}\mathbf{x} = \sum_{i=1}^{n}\sum_{j=1}^{n} a_{ij}x_i x_j > 0, \qquad \mathbf{x} \neq \mathbf{0}\text{-ra},$$

(ill. $\mathbf{x}^T\mathbf{A}\mathbf{x} < 0$ minden $\mathbf{x} \neq \mathbf{0}$-ra). $\mathbf{A}$-t *pozitív szemidefinitnek* (*negatív szemidefinitnek*) nevezzük, ha $\mathbf{A}$ szimmetrikus és $\mathbf{x}^T\mathbf{A}\mathbf{x} \geq 0$ (ill. $\mathbf{x}^T\mathbf{A}\mathbf{x} \leq 0$) minden $\mathbf{x}$-re.

### Példa

Az

$$\mathbf{A} = \begin{pmatrix} 4 & -1 \\ -1 & 2 \end{pmatrix}$$

mátrix pozitív definit, hiszen szimmetrikus, és $\mathbf{x} \neq \mathbf{0}$-ra

$$\mathbf{x}^T\mathbf{A}\mathbf{x} = \begin{pmatrix} x_1 & x_2 \end{pmatrix}\begin{pmatrix} 4 & -1 \\ -1 & 2 \end{pmatrix}\begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} x_1 & x_2 \end{pmatrix}\begin{pmatrix} 4x_1 - x_2 \\ -x_1 + 2x_2 \end{pmatrix}$$
$$= 4x_1^2 - 2x_1 x_2 + 2x_2^2 = 3x_1^2 + (x_1 - x_2)^2 + x_2^2 > 0.$$

### Tétel

*Az $\mathbf{A}$ négyzetes szimmetrikus mátrix akkor és csak akkor pozitív definit, ha az összes bal felső főminorai pozitívak, azaz*

$$\det\begin{pmatrix} a_{11} & \cdots & a_{1i} \\ \vdots & & \vdots \\ a_{i1} & \cdots & a_{ii} \end{pmatrix} > 0, \qquad i = 1, 2, \ldots, n.$$

$$\begin{pmatrix} a_{11} & a_{12} & a_{13} & a_{14} & a_{15} \\ a_{21} & a_{22} & a_{23} & a_{24} & a_{25} \\ a_{31} & a_{32} & a_{33} & a_{34} & a_{35} \\ a_{41} & a_{42} & a_{43} & a_{44} & a_{45} \\ a_{51} & a_{52} & a_{53} & a_{54} & a_{55} \end{pmatrix}$$

### Tétel

*Legyen $\mathbf{A}$ szimmetrikus $n \times n$-es mátrix. Ekkor $\mathbf{A}$ akkor és csak akkor pozitív definit, ha a Gauss-elimináció főelemkiválasztás nélkül végrehajtható az $\mathbf{A}\mathbf{x} = \mathbf{b}$ egyenletrendszeren, és a főelemek pozitívak. Továbbá ebben az esetben a módszer stabil a kerekítési hibákra nézve.*

---

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

## 3.4. Tridiagonális egyenletrendszerek

Egy négyzetes $(a_{ij})$ mátrixot *tridiagonálisnak* nevezünk, ha

$$a_{ij} = 0 \qquad \text{minden } |i - j| > 1\text{-re},$$

azaz nemnulla elemek csak a mátrix főátlójában, ill. közvetlen alatta vagy felette lehetnek. A következő jelölést használjuk:

$$\begin{pmatrix}
d_1 & c_1 & 0 & 0 & \cdots & 0 \\
a_1 & d_2 & c_2 & 0 & \cdots & 0 \\
0 & a_2 & d_3 & c_3 & \cdots & 0 \\
& & \ddots & \ddots & \ddots & \\
0 & 0 & \cdots & a_{n-2} & d_{n-1} & c_{n-1} \\
0 & 0 & \cdots & 0 & a_{n-1} & d_n
\end{pmatrix}\begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ \vdots \\ x_{n-1} \\ x_n \end{pmatrix} = \begin{pmatrix} b_1 \\ b_2 \\ b_3 \\ \vdots \\ b_{n-1} \\ b_n \end{pmatrix}. \tag{5}$$

Egy tridiagonális mátrix elemeit célszerű a jelölés szerinti három vektorban tárolni: $(a_i)$, $(d_i)$ és $(c_i)$, így összesen

$$3n - 2$$

tárolóhely kell az együtthatóknak. Könnyen látható, hogy a Gauss-eliminációt alkalmazva az (5) egyenletrendszerre az $a_i$ számok kinullázódnak az elimináció végére, a $c_i$ számok viszont nem fognak megváltozni. A $d_i$ és $b_i$ értékek megváltoznak az elimináció során. A következő algoritmust úgy fogalmaztuk meg, hogy az elimináció során felülírja a $(d_i)$ és $(b_i)$ vektorokat.

---

**Algoritmus: Gauss-elimináció tridiagonális egyenletrendszerre**

INPUT: $a_i, c_i$ $(i = 1, \ldots, n-1)$, $d_i, b_i$ $(i = 1, \ldots, n)$
OUTPUT: $x_1, \ldots, x_n$

*(elimináció:)*
**for** $i = 2, \ldots, n$ **do**
$\qquad temp \leftarrow a_{i-1}/d_{i-1}$
$\qquad d_i \leftarrow d_i - temp \cdot c_{i-1}$
$\qquad b_i \leftarrow b_i - temp \cdot b_{i-1}$
**end do**
*(visszahelyettesítés:)*
$x_n \leftarrow b_n/d_n$
**for** $i = n-1, \ldots, 1$ **do**
$\qquad x_i \leftarrow (b_i - c_i x_{i+1})/d_i$
**end do**
**output**$(x_1, x_2, \ldots, x_n)$

---

A módszer műveletigénye meglepően kicsi:

$$5n - 4$$

szorzás/osztás. Ha ezt összehasonlítjuk a Gauss-elimináció alap algoritmusa $n^3/3$ nagyságrendjével, akkor látjuk, hogy tridiagonális rendszerek megoldására feltétlenül ezt a speciális algoritmust célszerű használni.

Ha az $\mathbf{A}$ tridiagonális mátrix diagonálisan domináns, akkor ez a speciális algoritmus végrehajtható, azaz nincs szükség sorcserére a Gauss-elimináció közben.

---

## 3.5. Szimultán egyenletrendszerek

Gyakran előfordul, hogy ún. *szimultán egyenletrendszereket*, azaz

$$\mathbf{A}\mathbf{x} = \mathbf{b}^{(i)}, \qquad i = 1, \ldots, m$$

alakú egyenletrendszereket kell megoldanunk. Ezt röviden az

$$\mathbf{A}\mathbf{X} = \mathbf{B}$$

egyenlettel írhatjuk le, ahol az $n \times m$-es

$$\mathbf{B} = (\mathbf{b}^{(1)}, \mathbf{b}^{(2)}, \ldots, \mathbf{b}^{(m)})$$

mátrix $i$-edik oszlopa $\mathbf{b}^{(i)}$, és az $n \times m$-es

$$\mathbf{X} = (\mathbf{x}^{(1)}, \mathbf{x}^{(2)}, \ldots, \mathbf{x}^{(m)})$$

mátrix $i$-edik oszlopa $\mathbf{x}^{(i)}$, az

$$\mathbf{A}\mathbf{x}^{(i)} = \mathbf{b}^{(i)}$$

egyenlet megoldása.

Mivel a Gauss- ill. a Gauss–Jordan-elimináció végrehajthatósága ill. főelemkiválasztásnál a cserék eldöntése csak az együtthatómátrixon múlik, alkalmazhatjuk ezeket a módszereket az $n \times (n + m)$-es

$$(\mathbf{A}, \mathbf{B})$$

kibővített mátrixon. Pl. ha Gauss–Jordan-eliminációt végzünk, akkor az $(\mathbf{A}, \mathbf{B})$ kibővített mátrixot az

$$(\mathbf{I}, \mathbf{X})$$

alakra hozzuk, és ekkor $\mathbf{X}$ lesz a szimultán egyenletrendszer megoldása.

---

## 3.6. Mátrix invertálás és determináns számítás

Az $\mathbf{A}$ nemszinguláris négyzetes mátrix inverze teljesíti az

$$\mathbf{A}\mathbf{A}^{-1} = \mathbf{I}$$

mátrix egyenletet, ezért $\mathbf{A}^{-1}$ megoldása az

$$\mathbf{A}\mathbf{X} = \mathbf{I}$$

mátrix egyenletnek (azaz szimultán egyenletrendszernek). Ennek megoldására használhatjuk a Gauss–Jordan-eliminációt. Ellenőrizhető, hogy ennek műveletigénye

$$\frac{3}{2}n^3 + \mathcal{O}(n^2)$$

osztás ill. szorzás.

### Példa

Invertáljuk az

$$\mathbf{A} = \begin{pmatrix} 1 & 0 & 2 \\ -1 & 1 & 0 \\ -2 & 0 & -1 \end{pmatrix}$$

mátrixot! A Gauss–Jordan-módszert használva:

$$\left(\begin{array}{ccc|ccc} 1 & 0 & 2 & 1 & 0 & 0 \\ -1 & 1 & 0 & 0 & 1 & 0 \\ -2 & 0 & -1 & 0 & 0 & 1 \end{array}\right) \sim \left(\begin{array}{ccc|ccc} 1 & 0 & 2 & 1 & 0 & 0 \\ 0 & 1 & 2 & 1 & 1 & 0 \\ 0 & 0 & 3 & 2 & 0 & 1 \end{array}\right) \sim$$

$$\left(\begin{array}{ccc|ccc} 1 & 0 & 2 & 1 & 0 & 0 \\ 0 & 1 & 2 & 1 & 1 & 0 \\ 0 & 0 & 3 & 2 & 0 & 1 \end{array}\right) \sim \left(\begin{array}{ccc|ccc} 1 & 0 & 0 & -\frac{1}{3} & 0 & -\frac{2}{3} \\ 0 & 1 & 0 & -\frac{1}{3} & 1 & -\frac{2}{3} \\ 0 & 0 & 3 & 2 & 0 & 1 \end{array}\right) \sim$$

$$\left(\begin{array}{ccc|ccc} 1 & 0 & 0 & -\frac{1}{3} & 0 & -\frac{2}{3} \\ 0 & 1 & 0 & -\frac{1}{3} & 1 & -\frac{2}{3} \\ 0 & 0 & 1 & \frac{2}{3} & 0 & \frac{1}{3} \end{array}\right)$$

### Példa folyt.

Így

$$\mathbf{A}^{-1} = \frac{1}{3}\begin{pmatrix} -1 & 0 & -2 \\ -1 & 3 & -2 \\ 2 & 0 & 1 \end{pmatrix}.$$

---

Természetesen a mátrix invertálás Gauss–Jordan-eliminációs módszerénél is használhatjuk a Gauss-eliminációnál megfogalmazott részleges főelemkiválasztás módszerét is a numerikus hiba csökkentése, illetve a nullával való osztás elkerülése érdekében.

Az $\mathbf{A}$ mátrixon a Gauss-elimináció részleges főelemkiválasztással pontosan akkor hajtható végre, ha $\det(\mathbf{A}) \neq 0$. A tétel bizonyításából következik, hogy

$$\det(\mathbf{A}) = (-1)^s\det(\mathbf{A}^{(n-1)}),$$

ahol $s$ a módszer közben végrehajtott sorcserék száma. Azaz a determináns egyenlő a főelemek megfelelő előjellel vett szorzatával:

$$\det(\mathbf{A}) = (-1)^s a_{11}a_{22}^{(1)}\cdots a_{nn}^{(n-1)}.$$

### Példa

Tekintsük az előző példa együtthatómátrixát, azaz legyen

$$\mathbf{A} = \begin{pmatrix} 1 & -2 & -2 & -2 \\ 2 & -1 & 2 & 4 \\ -1 & 2 & 3 & -4 \\ -2 & 1 & 4 & -2 \end{pmatrix}.$$

Számítsuk ki a mátrix determinánsát! Végigszámoltuk, hogy az $\mathbf{A}$ mátrixon végrehajtva a Gauss-eliminációt a végeredmény

$$\mathbf{A}^{(3)} = \begin{pmatrix} 1 & -2 & -2 & -2 \\ 0 & 3 & 6 & 8 \\ 0 & 0 & 1 & -6 \\ 0 & 0 & 0 & 38 \end{pmatrix}.$$

Ezért $\det(\mathbf{A}) = \det(\mathbf{A}^{(3)}) = 1 \cdot 3 \cdot 1 \cdot 38 = 114$.
