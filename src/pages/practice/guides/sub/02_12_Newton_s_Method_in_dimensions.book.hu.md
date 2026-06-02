## 2.12. Newton-módszer $n$-dimenzióban

Legyen $U\subset\mathbb{R}^n$ nyílt halmaz, $\mathbf{f}\colon U\to\mathbb{R}^n$, és tekintsük az

$$\mathbf{f}(\mathbf{x})=\mathbf{0}$$

egyenletrendszert. Rögzítsünk egy $\mathbf{p}^{(k)}\in U$ vektort. Az egyváltozós esethez hasonlóan közelítsük az $\mathbf{f}$ függvényt a lineáris részével, az $\mathbf{f}(\mathbf{p}^{(k)})+\mathbf{f}'(\mathbf{p}^{(k)})(\mathbf{x}-\mathbf{p}^{(k)})$ függvénnyel. Ennek gyöke az $\bar{\mathbf{x}}=\mathbf{p}^{(k)}-(\mathbf{f}'(\mathbf{p}^{(k)}))^{-1}\mathbf{f}(\mathbf{p}^{(k)})$ vektor. Ezt a képletet használjuk a Newton-módszer definíciójára:

$$\mathbf{p}^{(k+1)}=\mathbf{p}^{(k)}-\left(\mathbf{f}'(\mathbf{p}^{(k)})\right)^{-1}\mathbf{f}(\mathbf{p}^{(k)}). \tag{2.29}$$

**2.56. tétel.** *Legyen $\mathbf{f}\in C^2$, $\mathbf{f}(\mathbf{p})=\mathbf{0}$ és $\mathbf{f}'(\mathbf{p})$ invertálható. Ekkor a (2.29) Newton-iteráció lokálisan kvadratikusan konvergál $\mathbf{p}$-hez.*

**Bizonyítás.** A Newton-módszer egy fixpont iteráció a

$$\mathbf{g}(\mathbf{x})=\mathbf{x}-(\mathbf{f}'(\mathbf{x}))^{-1}\mathbf{f}(\mathbf{x})$$

iterációs függvénnyel. Legyen $(\mathbf{f}'(\mathbf{x}))^{-1}=(b_{ij}(\mathbf{x}))_{n\times n}$. Ekkor

$$\sum_{j=1}^n b_{ij}(\mathbf{x})\frac{\partial f_j(\mathbf{x})}{\partial x_l}=\delta_{il}:=\begin{cases}1, & i=l,\\ 0, & i\neq l.\end{cases} \tag{2.30}$$

Tekintsük $\mathbf{g}$ $i$-edik komponensét:

$$g_i(\mathbf{x})=x_i-\sum_{j=1}^n b_{ij}(\mathbf{x})f_j(\mathbf{x}).$$

Ezt deriválva $x_l$ szerint

$$\frac{\partial g_i(\mathbf{x})}{\partial x_l}=\delta_{il}-\sum_{j=1}^n\left(\frac{\partial b_{ij}(\mathbf{x})}{\partial x_l}f_j(\mathbf{x})+b_{ij}(\mathbf{x})\frac{\partial f_j(\mathbf{x})}{\partial x_l}\right).$$

Az $\mathbf{x}=\mathbf{p}$ pontban az $f_j(\mathbf{p})=0$ és a (2.30) relációkat használva tehát

$$\frac{\partial g_i(\mathbf{p})}{\partial x_l}=\delta_{il}-\sum_{j=1}^n b_{ij}(\mathbf{p})\frac{\partial f_j(\mathbf{p})}{\partial x_l}=0.$$

Azt kaptuk, hogy $\mathbf{g}'(\mathbf{p})=\mathbf{0}$, és így a 2.55. tétel szerint a fixpont sorozat lokálisan kvadratikusan konvergens. $\square$

A (2.29) képlet alkalmazásakor mátrixot kell invertálni. Ehelyett a gyakorlatban a következőképpen járunk el: Vezessük be az $\mathbf{s}^{(k)}=\mathbf{p}^{(k+1)}-\mathbf{p}^{(k)}$ jelölést, és rendezzük át a (2.29) egyenletet az

$$\mathbf{f}'(\mathbf{p}^{(k)})\mathbf{s}^{(k)}=-\mathbf{f}(\mathbf{p}^{(k)})$$

alakba. Ezt megoldjuk $\mathbf{s}^{(k)}$-ra, majd legyen $\mathbf{p}^{(k+1)}=\mathbf{p}^{(k)}+\mathbf{s}^{(k)}$.

**2.57. példa.** Tekintsük a 2.51. példában vizsgált (2.25) egyenletrendszert! A Newton-módszert alkalmaztuk az egyenletre a $(-1.5,-1.5)^T$ kezdeti értéktől indulva. A kapott eredményt a 2.13. táblázatban foglaltuk össze. $\square$

**2.13. táblázat.** Newton-módszer

| $k$ | $\mathbf{p}^{(k)}$ | $\|\mathbf{p}^{(k)}-\mathbf{p}\|_\infty$ |
|---:|---|---|
| 0 | $(-1.5000000000, -1.5000000000)^T$ | 2.500000e+00 |
| 1 | $(-1.2500000000, -0.52120413480)^T$ | 2.250000e+00 |
| 2 | $(0.53188386800, -0.10035922100)^T$ | 4.681161e-01 |
| 3 | $(0.98873605300, -0.00042581408)^T$ | 1.126395e-02 |
| 4 | $(0.99999868610, -0.00000037764)^T$ | 1.313900e-06 |

**Feladatok**

1. Alkalmazza a Newton-módszert a 2.11. szakasz 1. feladatában szereplő egyenletek megoldására!

---
