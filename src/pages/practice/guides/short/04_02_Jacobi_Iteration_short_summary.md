**4.2. Jacobi-iteráció**


## 1. A módszer alapötlete és koordinátás alakja

A Jacobi-iteráció az egyik legelterjedtebb és legegyszerűbb iteratív eljárás lineáris egyenletrendszerek ($\mathbf{Ax} = \mathbf{b}$) közelítő megoldására, amely különösen előnyös ritka, nagy dimenziós mátrixok esetén.

A módszer lényege, hogy a lineáris egyenletrendszer $i$-edik egyenletéből kifejezzük a főátlóban szereplő $x_i$ ismeretlent:


$$x_i = \frac{1}{a_{ii}} \left( b_i - \sum_{\substack{j=1 \\ j \neq i}}^{n} a_{ij}x_j \right), \qquad i=1,2,\dots,n$$

Ebből a fixpontos alakból generálható a Jacobi-iteráció **koordinátás rekurziós formulája**:


$$x_i^{(k+1)} = \frac{1}{a_{ii}} \left( b_i - \sum_{\substack{j=1 \\ j \neq i}}^{n} a_{ij}x_j^{(k)} \right), \qquad k = 0, 1, 2, \ldots \tag{4.11}$$

> **Működési elv:** A következő lépés ($k+1$) értékeinek kiszámításakor a jobb oldalon szigorúan csak a korábbi időlépésből ($k$) származó, már ismert közelítéseket használjuk fel. Emiatt az egyenletek tetszőleges sorrendben, akár teljesen párhuzamosan (párhuzamos számítógépes architektúrákon) is kiértékelhetők.



## 2. Mátrixos (Vektoriális) alak levezetése

Ahhoz, hogy a módszer konvergenciáját az előző (4.1-es) szakaszban tanult lineáris fixpont-elmélettel vizsgálni tudjuk, az algoritmust át kell írnunk $\mathbf{x}^{(k+1)} = \mathbf{T}_J\mathbf{x}^{(k)} + \mathbf{c}$ alakba.

Ehhez bontsuk fel az $\mathbf{A}$ együtthatómátrixot három rész mátrix összegére:


$$\mathbf{A} = \mathbf{L} + \mathbf{D} + \mathbf{U}$$


Ahol:

* $\mathbf{D}$ a főátlót tartalmazó diagonális mátrix (diagonal matrix),
* $\mathbf{L}$ a szigorú alsó háromszögmátrix (strictly lower triangular),
* $\mathbf{U}$ a szigorú felső háromszögmátrix (strictly upper triangular).

Helyettesítsük ezt be a rendszerbe és rendezzük át:


$$(\mathbf{L} + \mathbf{D} + \mathbf{U})\mathbf{x} = \mathbf{b} \implies \mathbf{D}\mathbf{x} = -(\mathbf{L} + \mathbf{U})\mathbf{x} + \mathbf{b}$$

Feltételezve, hogy a főátlóban nincs nulla elem ($a_{ii} \neq 0$), a diagonális mátrix invertálható. Balról $\mathbf{D}^{-1}$-gyel beszorozva megkapjuk a **mátrixos alakot**:


$$\mathbf{x}^{(k+1)} = \underbrace{-\mathbf{D}^{-1}(\mathbf{L} + \mathbf{U})}_{\mathbf{T}_J}\mathbf{x}^{(k)} + \underbrace{\mathbf{D}^{-1}\mathbf{b}}_{\mathbf{c}}$$

* **$\mathbf{T}_J := -\mathbf{D}^{-1}(\mathbf{L} + \mathbf{U})$** a **Jacobi-iterációs mátrix**.
* **$\mathbf{c} := \mathbf{D}^{-1}\mathbf{b}$** a konstans vektor.



## 3. Konvergenciafeltételek

### Szükséges és elégséges feltétel

A lineáris fixpont-iterációk általános elméletéből közvetlenül adódik:

> A Jacobi-iteráció akkor és csak akkor konvergens bármely tetszőleges $\mathbf{x}^{(0)}$ kezdővektor esetén, ha az iterációs mátrix spektrálsugara szigorúan kisebb, mint 1:
> 
> $$\rho(\mathbf{T}_J) < 1 \tag{4.12}$$
> 
> 

### 4.11. Tétel (Gyakorlati elégséges feltétel: Diagonális dominancia)

Mivel a spektrálsugár (sajátértékek) kiszámítása bonyolult feladat, a gyakorlatban egy sokkal könnyebben ellenőrizhető elégséges feltételt használunk:

> **Tétel:** Ha az $\mathbf{A}$ együtthatómátrix **szigorúan diagonálisan domináns a soraira nézve** (azaz minden sorban a főátlóbeli elem abszolút értéke szigorúan nagyobb, mint a sorban lévő összes többi elem abszolút értékének összege):
> 
> $$|a_{ii}| > \sum_{\substack{j=1 \\ j \neq i}}^{n} |a_{ij}|, \qquad i=1,2,\dots,n$$
> 
> 
> 
> akkor a Jacobi-iteráció **garantáltan konvergens** tetszőleges kezdőértékből indítva.

*A bizonyítás vázlata:* Felírva a $\mathbf{T}_J$ mátrix maximum-normáját ($\|\cdot\|_\infty$), a diagonális dominancia definíciója miatt a sorösszegek maximuma szigorúan kisebb lesz, mint 1 ($\|\mathbf{T}_J\|_\infty < 1$). Mivel $\rho(\mathbf{T}_J) \leq \|\mathbf{T}_J\|_\infty$, a spektrálsugár is kisebb lesz egynél, így a rendszer stabilan konvergál.



## 4. Számszerű Mintapélda (4.8. Példa)

A jegyzet az alábbi $3 \times 3$-as egyenletrendszeren keresztül mutatja be a módszer numerikus működését:


$$\begin{array}{rcrcrcr} 5x_1 & + & 3x_2 & - & x_3 & = & -4 \\ 2x_1 & - & 10x_2 & + & x_3 & = & 25 \\ -3x_1 & + & 4x_2 & - & 12x_3 & = & -47 \end{array}$$

*(Látható, hogy a mátrix diagonálisan domináns, hiszen $|5|>|3|+|-1|$, $|-10|>|2|+|1|$, és $|-12|>|-3|+|4|$, így a konvergencia előre biztosított).*

Az egyenleteket átrendezve a kapott rács-rekurziók:


$$\begin{aligned} x_1^{(k+1)} &= (-4 - 3x_2^{(k)} + x_3^{(k)})/5 \\ x_2^{(k+1)} &= (-25 + 2x_1^{(k)} + x_3^{(k)})/10 \\ x_3^{(k+1)} &= (47 - 3x_1^{(k)} + 4x_2^{(k)})/12 \end{aligned}$$

Ha a számítást a naiv $\mathbf{x}^{(0)} = (0, 0, 0)^T$ zéróvektorról indítjuk, az első lépések eredményei:

* **1. lépés ($k=1$):** $x_1^{(1)} = -4/5 = -0.8$, $x_2^{(1)} = -25/10 = -2.5$, $x_3^{(1)} = 47/12 \approx 3.9167$.
* **2. lépés ($k=2$):** Az új értékeket visszahelyettesítve a jobb oldalra, megkapjuk a következő generációt, és így tovább.

A sorozat elemei néhány lépés után látványosan rásimulnak a rendszer pontos, egész számokból álló $\mathbf{x} = (1, -2, 3)^T$ megoldásvektorára.