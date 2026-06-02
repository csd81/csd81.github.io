**5.1. LU-faktorizáció** 


## 1. Az LU-felbontás definíciója és egyértelműsége

Az LU-felbontás lényege, hogy egy négyzetes mátrixot két háromszögmátrix szorzatára bontunk le, ami radikálisan leegyszerűsíti a lineáris egyenletrendszerek megoldását.

> **Definíció:** Legyen $\mathbf{A}$ egy $n \times n$-es négyzetes mátrix. Az $\mathbf{A} = \mathbf{LU}$ szorzatot az $\mathbf{A}$ mátrix **LU-faktorizációjának** nevezzük, ha:
> * $\mathbf{L}$ egy **alsó háromszögmátrix** (lower triangular), amelynek a főátlójában minden elem szigorúan $1$,
> * $\mathbf{U}$ egy **felső háromszögmátrix** (upper triangular).
> 
> 

### 5.1. Tétel (Egyértelműség)

Legyen $\mathbf{A}$ egy nemszinguláris (invertálható) négyzetes mátrix. Ha az $\mathbf{A}$ mátrix LU-faktorizációja létezik, akkor az **teljesen egyértelmű**.

*(A bizonyítás azon alapul, hogy két különböző felbontást feltételezve belátható, hogy az $\mathbf{L}_2^{-1}\mathbf{L}_1 = \mathbf{U}_2\mathbf{U}_1^{-1}$ egyenlőség miatt a mátrixoknak diagonálisnak kell lenniük, és mivel az L mátrixok átlója csupa 1-es, a két oldal csak az egységmátrixszal lehet egyenlő).*



## 2. Létezési tételek és a Gauss-elimináció kapcsolata

Az LU-felbontás tulajdonképpen a Gauss-elimináció lépéseinek mátrixszorzatként való felírásából származik.

* **Tétel (Vezető főminorok szerepe):** Ha az $\mathbf{A}$ mátrix összes **vezető főminorja** (a bal felső $k \times k$-as altermátrixok determinánsai) nullától különböző, akkor a Gauss-elimináció sorcserék nélkül végrehajtható, és így az $\mathbf{A} = \mathbf{LU}$ felbontás **garantáltan létezik**.
* **Tétel (Általános eset permutációval):** Bármely invertálható $\mathbf{A}$ négyzetes mátrixhoz létezik olyan $\mathbf{P}$ permutációmátrix (amely a sorcseréket reprezentálja), hogy a **$\mathbf{PA} = \mathbf{LU}$** felbontás elvégezhető.



## 3. Alkalmazása lineáris egyenletrendszerek megoldására

Ha az $\mathbf{A} = \mathbf{LU}$ felbontás már ismert, az $\mathbf{Ax} = \mathbf{b}$ lineáris egyenletrendszer megoldása az $\mathbf{LUx} = \mathbf{b}$ alakra redukálódik. Ez egy új $\mathbf{y} = \mathbf{Ux}$ változó bevezetésével **két egyszerű háromszög-rendszerre** bontható szét:

1. **Előrehelyettesítés (Forward substitution):** Megoldjuk az alábbi alsó háromszög-rendszert az ismeretlen $\mathbf{y}$ vektorra:

$$\mathbf{Ly} = \mathbf{b}$$


2. **Visszahelyettesítés (Backward substitution):** A megkapott $\mathbf{y}$ segítségével megoldjuk a felső háromszög-rendszert a keresett $\mathbf{x}$ vektorra:

$$\mathbf{Ux} = \mathbf{y}$$





## 4. Számítási igény és hatékonyság (Műveletszámok)

A fejezet pontos képet ad az LU-alapú megoldás időbeli komplexitásáról (ahol a műveletigényt a szorzások és osztások száma határozza meg):

* **Az LU-felbontás elkészítése:** $\dfrac{n^3}{3} + \mathcal{O}(n^2)$ műveletet igényel.
* **A két háromszöges rendszer megoldása (helyettesítések):** $n^2 + \mathcal{O}(n)$ műveletet igényel.

### Mikor rendkívül hatékony az LU-felbontás?

Az eljárás óriási előnye a sima Gauss-eliminációval szemben akkor mutatkozik meg, ha **több olyan lineáris egyenletrendszert kell megoldanunk, amelyeknek az együtthatómátrixa ($\mathbf{A}$) teljesen azonos, de a jobb oldali szabadtag-vektoruk ($\mathbf{b}$) különböző**.

Ilyenkor a drága, $O(n^3)$-as felbontást **csak egyszer** kell elvégezni. Minden újabb $\mathbf{b}$ vektor esetén a megoldás mindössze $n^2$ műveletből (a két helyettesítésből) megvan, ami elképesztő számítási megtakarítást jelent nagy méretű mátrixoknál.