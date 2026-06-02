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
