## 3.6. Szimultán egyenletrendszerek

Gyakran előfordul, hogy ún. *szimultán egyenletrendszereket*, azaz olyan $\mathbf{A}\mathbf{x} = \mathbf{b}^{(i)}$ alakú egyenletrendszereket kell megoldanunk $i = 1, \ldots, m$-re, ahol az együtthatómátrix azonos, de az egyenletek jobb oldala különböző. Ezt röviden az $\mathbf{A}\mathbf{X} = \mathbf{B}$ egyenlettel írhatjuk le, ahol az $n \times m$-es $\mathbf{B} = (\mathbf{b}^{(1)}, \mathbf{b}^{(2)}, \ldots, \mathbf{b}^{(m)})$ mátrix $i$-edik oszlopa $\mathbf{b}^{(i)}$, és az $n \times m$-es $\mathbf{X} = (\mathbf{x}^{(1)}, \mathbf{x}^{(2)}, \ldots, \mathbf{x}^{(m)})$ mátrix $i$-edik oszlopa $\mathbf{x}^{(i)}$, az $\mathbf{A}\mathbf{x}^{(i)} = \mathbf{b}^{(i)}$ egyenlet megoldása. Mivel a Gauss- ill. a Gauss–Jordan-elimináció végrehajthatósága ill. főelemkiválasztásnál a cserék eldöntése csak az együtthatómátrixon múlik, alkalmazhatjuk ezeket a módszereket az $n \times (n + m)$-es $(\mathbf{A}, \mathbf{B})$ kibővített mátrixon. Pl. ha Gauss–Jordan-eliminációt végzünk, akkor az $(\mathbf{A}, \mathbf{B})$ kibővített mátrixot az $(\mathbf{I}, \mathbf{X})$ alakra hozzuk, és ekkor $\mathbf{X}$ lesz a szimultán egyenletrendszer megoldása.

### Feladatok

1. Igazolja, hogy az $(\mathbf{A}, \mathbf{b}^{(1)}, \ldots, \mathbf{b}^{(m)})$ kibővített mátrixon végzett Gauss-elimináció műveletigénye $n^3/3 + mn^2 - n/3$ osztás/szorzás!

2. Igazolja, hogy az $(\mathbf{A}, \mathbf{b}^{(1)}, \ldots, \mathbf{b}^{(m)})$ kibővített mátrixon végzett Gauss–Jordan-elimináció műveletigénye $n^3/2 + mn^2 - n/2$ osztás/szorzás!

3. Fogalmazza át a 3.37. algoritmust szimultán tridiagonális együtthatójú egyenletrendszerek megoldására!

4. Lássa be, hogy az $\mathbf{A}\mathbf{x}^{(i)} = \mathbf{b}^{(i)}$, $i = 1, 2, \ldots, m$ egyenletrendszer ekvivalens az $\mathbf{A}\mathbf{X} = \mathbf{B}$ mátrix egyenlettel, ahol $\mathbf{X} = (\mathbf{x}^{(1)}, \ldots, \mathbf{x}^{(m)})$ és $\mathbf{B} = (\mathbf{b}^{(1)}, \ldots, \mathbf{b}^{(m)})$!
