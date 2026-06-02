## 5.2. Cholesky-faktorizáció

Legyen $\mathbf{A}$ egy szimmetrikus mátrix. Az $\mathbf{A} = \mathbf{LL}^T$ szorzatot, ahol $\mathbf{L}$ egy alulról trianguláris mátrix, az $\mathbf{A}$ mátrix *Cholesky-faktorizációjának* nevezzük.

Megjegyezzük, hogy a Cholesky-faktorizáció, ha létezik, nem egyértelmű. A következő tétel elégséges feltételt biztosít a Cholesky-faktorizáció létezésére.

**5.6. tétel.** *Ha $\mathbf{A}$ pozitív definit, akkor az $\mathbf{A} = \mathbf{LL}^T$ Cholesky-faktorizáció létezik, az $\mathbf{L}$ mátrix valós, és a főátlójában pozitív elemeket választhatunk.*

**Bizonyítás.** Az $\mathbf{A}$ mátrix dimenziója szerinti teljes indukcióval látjuk be az állítást. $1 \times 1$-es mátrixokra az állítás nyilvánvaló. Tegyük fel, hogy $(n-1) \times (n-1)$-es mátrixokra teljesül az állítás, és legyen $\mathbf{A}$ $n \times n$-es mátrix. Az $\mathbf{A}$ mátrixot partícionáljuk a következő alakba:

$$
\mathbf{A} =
\begin{pmatrix}
\mathbf{X} & \mathbf{y} \\
\mathbf{y}^T & a_{nn}
\end{pmatrix},
$$

ahol $\mathbf{X}$ egy $(n-1) \times (n-1)$-es mátrix, $\mathbf{y}$ egy $n-1$-dimenziós oszlopvektor. A 3.10. tételből következik, hogy $\mathbf{X}$ pozitív definit. Keressük az $\mathbf{A}$ mátrix Cholesky-felbontását az

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
\end{pmatrix}
\tag{5.3}
$$

alakban. Itt $\tilde{\mathbf{L}}$ egy $(n-1) \times (n-1)$-es alulról trianguláris mátrix, $\mathbf{c}$ egy $n-1$-dimenziós oszlopvektor, $d \in \mathbb{R}$. Ha a mátrixszorzást elvégezzük a partícionált mátrixokon, akkor az

$$
\mathbf{X} = \tilde{\mathbf{L}}\tilde{\mathbf{L}}^T, \qquad \tilde{\mathbf{L}}\mathbf{c} = \mathbf{y}, \qquad \text{és} \qquad \mathbf{c}^T\mathbf{c} + d^2 = a_{nn}
$$

egyenleteket kapjuk. Az indukciós hipotézis szerint az $\mathbf{X} = \tilde{\mathbf{L}}\tilde{\mathbf{L}}^T$ egyenletnek létezik $\tilde{\mathbf{L}} \in \mathbb{R}^{(n-1)\times(n-1)}$ alulról trianguláris megoldása, amelynek főátlójában pozitív elemeket választhatunk. Ebből következik, hogy $\tilde{\mathbf{L}}$ nemszinguláris mátrix, így az $\tilde{\mathbf{L}}\mathbf{c} = \mathbf{y}$ egyenletnek is létezik egyértelmű megoldása. Legyen $d$ egy (esetleg komplex) gyöke a $\mathbf{c}^T\mathbf{c} + d^2 = a_{nn}$ egyenletnek. Ekkor az (5.3) összefüggés teljesül. $d$ pontosan akkor választható pozitív valós számnak, ha $d^2 = a_{nn} - \mathbf{c}^T\mathbf{c} > 0$. Ha az (5.3) egyenlet bal és jobb oldalának determinánsát vesszük, akkor a $\det(\mathbf{A}) = \det(\tilde{\mathbf{L}})^2 d^2$ összefüggést kapjuk. Mivel $\mathbf{A}$ pozitív definit, így $\det(\mathbf{A}) > 0$ (lásd a 3.10. tételt). Ebből következik, hogy $d^2$ pozitív, azaz $d$ választható pozitív valós számnak. $\quad\square$

**5.7. példa.** Keressük meg a

$$
\begin{pmatrix}
4 & -8 & 4 \\
-8 & 17 & -11 \\
4 & -11 & 22
\end{pmatrix}.
$$

mátrix Cholesky-felbontását! Írjuk fel a keresett felbontást:

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

A módszer a következő: először tekintsük az első sor első elemére vonatkozó egyenletet: $4 = l_{11}^2$. Ezt megoldhatjuk $l_{11}$-re: a pozitív megoldás $l_{11} = 2$. Ezután sorra írjuk fel az első oszlopban a főátló alatti elemekre az egyenleteket: $-8 = l_{21}l_{11}$, $4 = l_{31}l_{11}$. Ezeket meg tudjuk oldani egyértelműen $l_{21}$ és $l_{31}$-re: $l_{21} = -4$, $l_{31} = 2$. Most nézzük a második oszlop főátlójában levő elemet: $17 = l_{21}^2 + l_{22}^2$. Ennek pozitív megoldása $l_{22} = 1$. Ezután a második oszlop főátlója alatti elemeket nézzük: $-11 = l_{31}l_{21} + l_{32}l_{22}$. Ez megoldható $l_{32}$-re: $l_{32} = -3$. Végül a harmadik oszlop főátlójában levő elemét tekintjük: $22 = l_{31}^2 + l_{32}^2 + l_{33}^2$. Ebből $l_{33} = 3$. Kaptuk tehát, hogy

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

$\quad\square$

Az előző példa általánosítását a következőképpen fogalmazhatjuk meg:

**5.8. algoritmus. Cholesky-faktorizáció**

---

> INPUT: $\quad\mathbf{A}$
> OUTPUT: $\mathbf{L}$
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

Az 5.8. algoritmus műveletigénye $n^3/6 + n^2/2 - 2n/3$ osztás ill. szorzás, $n^3/6 - n/6$ összeadás ill. kivonás és $n$ db gyökvonás.

### Feladatok

1. Számítsa ki a következő mátrixoknak azt a Cholesky-faktorizációját, amelynél a főátlóban pozitív elemek állnak:

   (a) $\begin{pmatrix} 16 & -8 & -12 \\ -8 & 8 & 4 \\ -12 & 4 & 35 \end{pmatrix}$,
   (b) $\begin{pmatrix} 4 & -2 & -4 \\ -2 & 26 & 7 \\ -4 & 7 & 6 \end{pmatrix}$,

   (c) $\begin{pmatrix} 1 & -1 & -2 & 1 \\ -1 & 10 & 2 & 2 \\ -2 & 2 & 29 & 8 \\ 1 & 2 & 8 & 7 \end{pmatrix}$,
   (d) $\begin{pmatrix} 16 & -8 & 0 & -4 \\ -8 & 5 & 1 & 3 \\ 0 & 1 & 10 & -5 \\ -4 & 3 & -5 & 7 \end{pmatrix}$.

2. Mutasson példát arra, hogy a Cholesky-faktorizáció nem egyértelmű!

3. Mutassa meg, hogy a $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ mátrixnak nem létezik a Cholesky-felbontása!

4. Igazolja, hogy a Cholesky-faktorizáció műveletigénye $n^3/6 + n^2/2 - 2n/3$ osztás ill. szorzás és $n^3/6 - n/6$ összeadás ill. kivonás!

5. Lássa be a 3.10. tételre való hivatkozás nélkül, hogy az 5.6. tétel bizonyításában szereplő $\mathbf{X}$ mátrix pozitív definit!

---

*Hartung Ferenc, Bevezetés a numerikus analízisbe — Pannon Egyetem*
