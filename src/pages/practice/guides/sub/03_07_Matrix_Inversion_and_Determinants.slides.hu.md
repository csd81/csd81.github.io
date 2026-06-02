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
