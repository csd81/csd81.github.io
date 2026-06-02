**3.0. Lineáris algebrai előismeretek** 



## 1. Alapvető jelölések és mátrixműveletek

A jegyzet a standard lineáris algebrai jelölésrendszer rögzítésével indít:

* **$\mathbf{A} = (a_{ij})$**: Egy $n \times n$ dimenziós négyzetes mátrix. A valós mátrixok halmazát $\mathbb{R}^{n \times n}$, a komplex eleműekét $\mathbb{C}^{n \times n}$ jelöli.
* **$\mathbf{x}$**: Egy $n$-dimenziós oszlopvektor.
* **$\mathbf{I}$**: Az $n \times n$ dimenziós egységmátrix (főátlóban 1-esek, máshol 0-k).
* **$\mathbf{A}^T$ és $\mathbf{x}^T$**: A mátrix, illetve a vektor transzponáltja (sorok és oszlopok felcserélése).
* **$\mathrm{diag}(a_1, a_2, \ldots, a_n)$**: Olyan diagonális mátrix, amelynek a főátlójában a megadott számok állnak, minden más eleme nulla.

### Regularitás és Szingularitás

* **Invertálható vagy nemszinguláris (regular) mátrix**: Ha létezik hozzá olyan $\mathbf{A}^{-1}$ mátrix, amelyre $\mathbf{A}\mathbf{A}^{-1} = \mathbf{A}^{-1}\mathbf{A} = \mathbf{I}$ teljesül. Ez pontosan akkor áll fenn, ha a mátrix determinánsa nem nulla: $\det(\mathbf{A}) \neq 0$.
* **Szinguláris mátrix**: Amelynek nem létezik inverze, azaz $\det(\mathbf{A}) = 0$.



## 2. A determináns alapvető tulajdonságai (3.1. Tétel)

A determináns ($\det(\mathbf{A})$) viselkedését az alábbi fontos alapszabályok határozzák meg:

1. $\det(\mathbf{A}) = 0$, ha a mátrixnak van egy **teljesen nulla sora vagy oszlopa**.
2. $\det(\mathbf{A}) = 0$, ha a mátrixnak van **két azonos sora vagy oszlopa**.
3. Ha a mátrix két sorát (vagy oszlopát) felcseréljük, a determináns **előjelet vált**.
4. Ha egy sort (vagy oszlopot) megszorzunk egy $\alpha$ számmal, a determináns értéke is $\alpha$-szorosára változik.
5. Ha egy sorhoz (vagy oszlophoz) hozzáadjuk egy másik sor (vagy oszlop) számszorosát, a determináns értéke **nem változik**.
6. A transzponálás nem változtatja meg az értéket: $\det(\mathbf{A}^T) = \det(\mathbf{A})$.
7. **Determinánsok szorzástétele**: Két mátrix szorzatának determinánsa megegyezik a determinánsaik szorzatával: $\det(\mathbf{A}\mathbf{B}) = \det(\mathbf{A})\det(\mathbf{B})$.



## 3. Speciális mátrixosztályok

A numerikus algoritmusok stabilitása és hatékonysága szempontjából kulcsfontosságú az alábbi speciális mátrixszerkezetek azonosítása:

### A) Diagonálisan domináns mátrixok

Egy mátrixot (soraira nézve) **diagonálisan dominánsnak** nevezünk, ha minden sorban a főátlóban lévő elem abszolút értéke legalább akkora, mint az adott sor összes többi elemének abszolút érték összege:


$$|a_{ii}| \geq \sum_{j \neq i} |a_{ij}| \qquad \text{minden } i = 1, \ldots, n \text{-re.}$$


Ha az egyenlőtlenség szigorú ($>$), akkor a mátrix *szigorúan diagonálisan domináns*.

### B) Szimmetrikus mátrixok

A négyzetes mátrix szimmetrikus, ha megegyezik a saját transzponáltjával, azaz a főátlóra tükrös:


$$\mathbf{A}^T = \mathbf{A} \implies a_{ij} = a_{ji} \qquad \text{minden } i, j\text{-re.}$$

### C) Pozitív definit mátrixok

Egy valós szimmetrikus mátrixot **pozitív definitnek** nevezünk, ha tetszőleges nemzéró $\mathbf{x} \neq \mathbf{0}$ vektorral képezve a kvadratikus alakot, az eredmény szigorúan pozitív:


$$\mathbf{x}^T \mathbf{A} \mathbf{x} > 0 \qquad \text{minden } \mathbf{x} \in \mathbb{R}^n \setminus \{\mathbf{0}\} \text{-ra.}$$

> **Sylvester-kritérium (Karakterizációs tétel):** Egy szimmetrikus mátrix akkor és csak akkor pozitív definit, ha **összes bal felső főminorának determinánsa szigorúan pozitív**. (Azaz a főátló mentén vett $1\times1$-es, $2\times2$-es, $\dots$, $n\times n$-es részblokkok determinánsai mind nagyobbak nullánál).



## 4. Sajátértékek, Spektrálsugár és Mátrixnormák

* **Sajátérték ($\lambda$) és sajátvektor ($\mathbf{x}$)**: Ha teljesül az $\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$ egyenlet ($\mathbf{x} \neq \mathbf{0}$). A sajátértékek a $\det(\mathbf{A} - \lambda\mathbf{I}) = 0$ karakterisztikus egyenlet gyökerei.
* **Spektrálsugár ($\rho(\mathbf{A})$)**: A mátrix sajátértékei abszolút értékeinek a maximuma:

$$\rho(\mathbf{A}) := \max \{ |\lambda_1|, |\lambda_2|, \ldots, |\lambda_n| \}$$



Ez a mutató döntő szerepet játszik az iterációs sorozatok (pl. Jacobi-, Gauss–Seidel-módszerek) konvergenciájának zálogaként.

### Indukált Mátrixnormák

A vektorok hosszát mérő vektornormákból származtatott mátrixnormák közül a jegyzet a három legfontosabbat emeli ki:

1. **Sorösszeg-norma ($\|\mathbf{A}\|_\infty$)**: A sorokban lévő elemek abszolút érték összegeinek a maximuma.
2. **Oszlopösszeg-norma ($\|\mathbf{A}\|_1$)**: Az oszlopokban lévő elemek abszolút érték összegeinek a maximuma.
3. **Spektrálnorma ($\|\mathbf{A}\|_2$)**: Az $\mathbf{A}^T\mathbf{A}$ mátrix maximális sajátértékének a négyzetgyöke: $\|\mathbf{A}\|_2 = \sqrt{\rho(\mathbf{A}^T\mathbf{A})}$. Ha $\mathbf{A}$ szimmetrikus, ez egyszerűen megegyezik a spektrálsugárral: $\|\mathbf{A}\|_2 = \rho(\mathbf{A})$.



## 5. A Vandermonde-determináns (3.19. Tétel)

Az interpolációs polinomok (6. fejezet) egyértelmű létezésének bizonyításánál központi szerepet kap egy speciális struktúrájú determináns, az úgynevezett **Vandermonde-determináns**:

$$\det \mathbf{V} = \det \begin{pmatrix} 
1 & a_1 & a_1^2 & \cdots & a_1^{n-1} \\ 
1 & a_2 & a_2^2 & \cdots & a_2^{n-1} \\ 
\vdots & \vdots & \vdots & & \vdots \\ 
1 & a_n & a_n^2 & \cdots & a_n^{n-1} 
\end{pmatrix} \tag{3.1}$$

> **3.19. Tétel:** A (3.1) Vandermonde-féle determináns értéke **akkor és csak akkor nem nulla ($\neq 0$), ha az $a_1, a_2, \ldots, a_n$ számok páronként mind különbözők**.
> *(Ez garantálja lineáris algebrai oldalról, hogy ha különböző alappontokat választunk, az interpolációs egyenletrendszer mátrixa nemszinguláris lesz, azaz a görbe egyértelműen leírható).*