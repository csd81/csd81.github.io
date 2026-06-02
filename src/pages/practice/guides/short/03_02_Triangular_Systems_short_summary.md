**3.1. Trianguláris egyenletrendszerek** 



## 1. Bevezetés és a trianguláris struktúra fogalma

A lineáris algebrai egyenletrendszerek ($\mathbf{Ax} = \mathbf{b}$) közvetlen megoldásakor a legegyszerűbb struktúrákat a **trianguláris (háromszög) együtthatómátrixú** rendszerek jelentik. Ezekben az esetekben a mátrix elemei a főátló alatt vagy felett mind nullák, ami lehetővé teszi a változók közvetlen, egymás utáni meghatározását anélkül, hogy bonyolult eliminációs lépésekre lenne szükség.

A fejezet elsősorban az **$n$-dimenziós felülről trianguláris** (upper triangular) lineáris egyenletrendszerek megoldására fókuszál, amelyek általános koordinátás alakja a következő:

$$\begin{array}{rcrcrcrcr} 
a_{11}x_1 & + & a_{12}x_2 & + & \ldots & + & a_{1n}x_n & = & b_1 \\ 
& & a_{22}x_2 & + & \ldots & + & a_{2n}x_n & = & b_2 \\ 
& & & & \ddots & & \vdots & & \vdots \\ 
& & & & & & a_{nn}x_n & = & b_n 
\end{array} \tag{3.1}$$



## 2. A Visszahelyettesítés Módszere (Backward Substitution)

A felülről háromszög alakú rendszerek megoldására szolgáló standard algoritmus a **visszahelyettesítés módszere**.

### Működési elv:

A folyamat az egyenletrendszer legalsó, $n$-edik sorából indul ki. Mivel az utolsó egyenlet csak az $x_n$ ismeretlent tartalmazza ($a_{nn}x_n = b_n$), ez közvetlenül osztható a főátlóbeli együtthatóval:


$$x_n = \frac{b_n}{a_{nn}}$$

Miután az $x_n$ értéke ismertté vált, lentről felfelé haladva haladunk a korábbi egyenletekre: a már kiszámított változók értékeit visszahelyettesítjük az felette lévő egyenletbe, átvisszük őket a jobb oldalra a szabadtaghoz, majd osztunk a keresett változó főátlóbeli együtthatójával.

### Az általános algoritmus képlete:

Az $i = n-1, n-2, \ldots, 1$ indexekre a rekurzió a következőképpen írható fel:


$$x_i = \frac{1}{a_{ii}} \left( b_i - \sum_{j=i+1}^{n} a_{ij}x_j \right)$$

> **A végrehajthatóság feltétele:** A visszahelyettesítés eljárása (azaz a főátlóbeli együtthatókkal való osztás) akkor és csak akkor hajtható végre, ha **a főátló egyetlen eleme sem zéró**, azaz $a_{ii} \neq 0$ minden $i = 1, \ldots, n$ esetén. Mivel egy trianguláris mátrix determinánsa pontosan a főátlóbeli elemek szorzata ($\det(\mathbf{A}) = a_{11}a_{22}\cdots a_{nn}$), ez a feltétel egyenértékű azzal, hogy a mátrix nemszinguláris, azaz a rendszernek létezik egyértelmű megoldása.



## 3. Számszerű Mintapélda (4-dimenziós eset)

A jegyzetek egy konkrét, 4-változós felülről trianguláris rendszeren mutatják be a módszer lépéseit:

$$\begin{array}{rcrcrcrcr} 
2x_1 & - & x_2 & + & 3x_3 & + & x_4 & = & 3 \\ 
& & 3x_2 & - & x_3 & + & 2x_4 & = & 13 \\ 
& & & & 2x_3 & - & x_4 & = & -2 \\ 
& & & & & & 3x_4 & = & 12 
\end{array}$$

1. **4. egyenletből:** $3x_4 = 12 \implies \mathbf{x_4 = 4}$.
2. **3. egyenletbe visszahelyettesítve:** $2x_3 - 4 = -2 \implies 2x_3 = 2 \implies \mathbf{x_3 = 1}$.
3. **2. egyenletbe visszahelyettesítve:** $3x_2 - 1 + 2(4) = 13 \implies 3x_2 + 7 = 13 \implies 3x_2 = 6 \implies \mathbf{x_2 = 2}$.
4. **1. egyenletbe visszahelyettesítve:** $2x_1 - 2 + 3(1) + 4 = 3 \implies 2x_1 + 5 = 3 \implies 2x_1 = -2 \implies \mathbf{x_1 = -1}$.

A rendszer egyértelmű megoldásvektora: $\mathbf{x} = (-1, 2, 1, 4)^T$.



## 4. Műveletigény és Időkomplexitás (Aszimptotikus költség)

Nagy méretű ($n$) rendszerek esetén a számítógépes futási idő szempontjából kritikus fontosságú az algoritmus aritmetikai műveletigényének pontos ismerete.

Lépésenként összegezve a szükséges lebegőpontos műveleteket (FLOP) az alábbi eloszlást kapjuk:

* **Osztások és szorzások száma:** $\sum_{i=1}^{n} i = \frac{n(n+1)}{2} = \mathbf{\frac{n^2}{2} + \mathcal{O}(n)}$
* **Összeadások és kivonások száma:** $\sum_{i=1}^{n-1} i = \frac{(n-1)n}{2} = \mathbf{\frac{n^2}{2} + \mathcal{O}(n)}$

### Gyakorlati jelentőség:

A bevezetett $\mathcal{O}(n)$ (nagy-O) jelölés elrejti az alacsonyabb rendű tagokat, amelyek hatalmas mátrixok esetén elhanyagolhatók, és kiemeli a **vezető tagot**. A visszahelyettesítés módszerének teljes műveletigénye durván **$\approx n^2$** nagyságrendű.

Ez rendkívül olcsó számítási költséget jelent a tetszőleges (nem strukturált) mátrixokra alkalmazott Gauss-elimináció $\approx \frac{2}{3}n^3$ költségéhez képest. Ezért törekednek a közvetlen felbontási eljárások (mint az LU-, Cholesky- vagy QR-faktorizációk) arra, hogy a bonyolult rendszereket először ilyen könnyen kezelhető trianguláris rendszerek szorzatává alakítsák át.