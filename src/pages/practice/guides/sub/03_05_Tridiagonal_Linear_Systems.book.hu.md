## 3.5. Tridiagonális egyenletrendszerek

Egy négyzetes $(a_{ij})$ mátrixot *tridiagonálisnak* nevezünk, ha $a_{ij} = 0$ minden $|i - j| > 1$-re, azaz nemnulla elemek csak a mátrix főátlójában, ill. közvetlen alatta vagy felette lehetnek. Tridiagonális lineáris egyenletrendszerek (azaz ahol az együtthatómátrix tridiagonális) gyakran előfordulnak alkalmazásokban, így ezek fontos speciális esetei a lineáris egyenletrendszereknek. A következő jelölést használjuk:

$$\begin{pmatrix}
d_1 & c_1 & 0 & 0 & \cdots & 0 \\
a_1 & d_2 & c_2 & 0 & \cdots & 0 \\
0 & a_2 & d_3 & c_3 & \cdots & 0 \\
& & \ddots & \ddots & \ddots & \\
0 & 0 & \cdots & a_{n-2} & d_{n-1} & c_{n-1} \\
0 & 0 & \cdots & 0 & a_{n-1} & d_n
\end{pmatrix}\begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ \vdots \\ x_{n-1} \\ x_n \end{pmatrix} = \begin{pmatrix} b_1 \\ b_2 \\ b_3 \\ \vdots \\ b_{n-1} \\ b_n \end{pmatrix}. \tag{3.10}$$

Egy tridiagonális mátrix elemeit célszerű a jelölés szerinti három vektorban tárolni: $(a_i)$, $(d_i)$ és $(c_i)$, így összesen $3n - 2$ tárolóhely kell az együtthatóknak.

Könnyen látható, hogy a Gauss-eliminációt alkalmazva a (3.10) egyenletrendszerre az $a_i$ számok kinullázódnak az elimináció végére, a $c_i$ számok viszont nem fognak megváltozni. A $d_i$ és $b_i$ értékek megváltoznak az elimináció során. A következő algoritmust úgy fogalmaztuk meg, hogy az elimináció során felülírja a $(d_i)$ és $(b_i)$ vektorokat.

---

**3.37. algoritmus. Gauss-elimináció tridiagonális egyenletrendszerre**

---

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

A módszer műveletigénye meglepően kicsi: $5n - 4$ szorzás/osztás. Ha ezt összehasonlítjuk a 3.23. algoritmus $n^3/3$ nagyságrendjével, akkor látjuk, hogy tridiagonális rendszerek megoldására feltétlenül ezt a speciális algoritmust kell használni.

A 3.32. tételből következik, hogy ha az $\mathbf{A}$ tridiagonális mátrix diagonálisan domináns, akkor a 3.37. algoritmus végrehajtható, azaz nincs szükség sorcserére a Gauss-elimináció közben.

### Feladatok

1. Oldja meg a következő tridiagonális egyenletrendszert:

   $$\begin{array}{rcrcrcrcrcrcr}
   x_1 & - & 0.5x_2 & & & & & & & & & = & 1.5 \\
   0.5x_1 & + & 4x_2 & - & 0.5x_3 & & & & & & & = & -4.0 \\
   & & 0.5x_2 & + & 2x_3 & - & 0.5x_4 & & & & & = & 2.0 \\
   & & & & 0.5x_3 & + & 4x_4 & - & 0.5x_5 & & & = & -4.0 \\
   & & & & & & 0.5x_4 & + & 2x_5 & - & 0.5x_6 & = & 2.0 \\
   & & & & & & & & 0.5x_5 & + & x_6 & = & -0.5
   \end{array}$$

2. Lássa be, hogy a 3.37. algoritmus műveletigénye $5n - 4$ osztás/szorzás!

3. Fogalmazzon meg a 3.37. algoritmushoz hasonló algoritmust olyan *szalagmátrixokra*, ahol nemnulla elemek csak a főátlóban és az alatti és feletti 2-2 átlóban lehetnek.
