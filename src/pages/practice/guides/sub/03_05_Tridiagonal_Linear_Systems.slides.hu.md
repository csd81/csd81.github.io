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
