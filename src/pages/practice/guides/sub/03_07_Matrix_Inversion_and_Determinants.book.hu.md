## 3.7. Mátrix invertálás és determináns számítás

Az $\mathbf{A}$ nemszinguláris négyzetes mátrix inverze teljesíti az $\mathbf{A}\mathbf{A}^{-1} = \mathbf{I}$ mátrix egyenletet, ezért $\mathbf{A}^{-1}$ megoldása az $\mathbf{A}\mathbf{X} = \mathbf{I}$ mátrix egyenletnek (azaz szimultán egyenletrendszernek). Ennek megoldására használhatjuk a Gauss–Jordan-eliminációt. Ellenőrizhető, hogy ennek műveletigénye $\frac{3}{2}n^3 + \mathcal{O}(n^2)$ osztás ill. szorzás.

**3.38. példa.** Invertáljuk az

$$\mathbf{A} = \begin{pmatrix} 1 & 0 & 2 \\ -1 & 1 & 0 \\ -2 & 0 & -1 \end{pmatrix}$$

mátrixot! A Gauss–Jordan-módszert használva:

$$\begin{pmatrix} 1 & 0 & 2 & 1 & 0 & 0 \\ -1 & 1 & 0 & 0 & 1 & 0 \\ -2 & 0 & -1 & 0 & 0 & 1 \end{pmatrix} \sim \begin{pmatrix} 1 & 0 & 2 & 1 & 0 & 0 \\ 0 & 1 & 2 & 1 & 1 & 0 \\ 0 & 0 & 3 & 2 & 0 & 1 \end{pmatrix} \sim$$

$$\begin{pmatrix} 1 & 0 & 2 & 1 & 0 & 0 \\ 0 & 1 & 2 & 1 & 1 & 0 \\ 0 & 0 & 3 & 2 & 0 & 1 \end{pmatrix} \sim \begin{pmatrix} 1 & 0 & 0 & -1/3 & 0 & -2/3 \\ 0 & 1 & 0 & -1/3 & 1 & -2/3 \\ 0 & 0 & 3 & 2 & 0 & 1 \end{pmatrix} \sim$$

$$\begin{pmatrix} 1 & 0 & 0 & -1/3 & 0 & -2/3 \\ 0 & 1 & 0 & -1/3 & 1 & -2/3 \\ 0 & 0 & 1 & 2/3 & 0 & 1/3 \end{pmatrix}.$$

Tehát

$$\mathbf{A}^{-1} = \frac{1}{3}\begin{pmatrix} -1 & 0 & -2 \\ -1 & 3 & -2 \\ 2 & 0 & 1 \end{pmatrix}. \qquad\square$$

Természetesen a mátrix invertálás Gauss–Jordan-eliminációs módszerénél is használhatjuk a Gauss-eliminációnál megfogalmazott részleges főelemkiválasztás módszerét is a numerikus hiba csökkentése, illetve a nullával való osztás elkerülése érdekében.

A 3.26. tétel szerint az $\mathbf{A}$ mátrixon a Gauss-elimináció részleges főelemkiválasztással pontosan akkor hajtható végre, ha $\det(\mathbf{A}) \neq 0$. A tétel bizonyításából következik, hogy $\det(\mathbf{A}) = (-1)^s\det(\mathbf{A}^{(n-1)})$, ahol $s$ a módszer közben végrehajtott sorcserék száma. Azaz a determináns egyenlő a főelemek megfelelő előjellel vett szorzatával: $\det(\mathbf{A}) = (-1)^s a_{11}a_{22}^{(1)}\cdots a_{nn}^{(n-1)}$.

**3.39. példa.** Tekintsük a 3.22. példa együtthatómátrixát, azaz legyen

$$\mathbf{A} = \begin{pmatrix} 1 & -2 & -2 & -2 \\ 2 & -1 & 2 & 4 \\ -1 & 2 & 3 & -4 \\ -2 & 1 & 4 & -2 \end{pmatrix}.$$

Számítsuk ki a mátrix determinánsát! A 3.22. példában végigszámoltuk, hogy az $\mathbf{A}$ mátrixon végrehajtva a Gauss-eliminációt a végeredmény

$$\mathbf{A}^{(3)} = \begin{pmatrix} 1 & -2 & -2 & -2 \\ 0 & 3 & 6 & 8 \\ 0 & 0 & 1 & -6 \\ 0 & 0 & 0 & 38 \end{pmatrix}.$$

Tehát $\det(\mathbf{A}) = \det(\mathbf{A}^{(3)}) = 1 \cdot 3 \cdot 1 \cdot 38 = 114$. $\qquad\square$

### Feladatok

1. Invertálja a következő mátrixokat:

   (a)
   $$\begin{pmatrix} -1 & 1 & 2 \\ -2 & 1 & 0 \\ 0 & 1 & -1 \end{pmatrix}$$

   (b)
   $$\begin{pmatrix} -3 & 1 & 2 \\ 0 & 3 & 1 \\ -2 & -1 & 1 \end{pmatrix}$$

   (c)
   $$\begin{pmatrix} 1 & -1 & 0 & 2 \\ 2 & 1 & 0 & 1 \\ 1 & 0 & -1 & 0 \\ 1 & 2 & 2 & -1 \end{pmatrix}$$

2. Igazolja, hogy az általános Gauss–Jordan-eliminációt használva $3n^3/2 - n/2$ osztás ill. szorzás kell a mátrix invertáláshoz!

3. Fogalmazza meg a Gauss–Jordan-eljárás algoritmusát a mátrix invertálás feladatára alkalmazva, figyelembe véve, hogy az $\mathbf{A}\mathbf{X} = \mathbf{I}$ mátrix egyenletben $\mathbf{I}$ speciális alakú, azaz azt, hogy a nullával való szorzásokat nem kell végrehajtani! Lássa be, hogy az így kapott speciális Gauss–Jordan-eliminción alapuló mátrix invertálás műveletigénye $n^3$ osztás/szorzás!

4. Tesztelje az előző feladatban megfogalmazott algoritmust a

   $$\begin{pmatrix}
   -2 & 1 & & & & \\
   1 & -2 & 1 & & & \\
   & 1 & -2 & 1 & & \\
   & & \ddots & \ddots & \ddots & \\
   & & & 1 & -2 & 1 \\
   & & & & 1 & -2
   \end{pmatrix}$$

   $10 \times 10$-es mátrixon (ahol a hiányzó elemek nullák)! Lássa be, hogy a pontos inverz $\mathbf{A}^{-1} = (c_{ij})$, ahol $c_{ij} = c_{ji}$, és $c_{ij} = -i(11 - j)/11$, $i \leq j$.

5. Számítsa ki az 1. feladatban megadott mátrixok determinánsát Gauss-eliminációt használva!
