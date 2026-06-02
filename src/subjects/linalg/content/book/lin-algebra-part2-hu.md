
# II. rész — Mátrixok algebrája és geometriája

Eddig a mátrixokat csak egyszerű jelölésnek tekintettük, mely az egyenletrendszer együtthatóinak tárolására, és az egyenletrendszer megoldása közbeni számítások egyszerűsítésére való. E részt a számok közti műveletek számtáblázatokra való kiterjesztésével kezdjük, majd ezeket átültetjük mátrixokra, és megvizsgáljuk algebrai tulajdonságaikat. E műveletek segítségével újravizsgáljuk az egyenletrendszerek megoldhatóságának és a megoldások kiszámításának kérdését. A mátrixok „számtani" fejezetei után a „mértaniak" következnek: a determináns, mint a négyzetes mátrixhoz rendelt előjeles mérték, majd a mátrixleképezések geometriája lesz e rész tárgya.

*Enter The Matrix – 3D picture (CC) on flickr by Grégory Tonon*

# 4. Mátrixműveletek definíciói

Az egyenletrendszerek megoldásához és vizsgálatához hatékony eszközökhöz jutunk a mátrixműveletek bevezetésével. E műveletek számtalan egyéb alkalmazásban játszanak fontos szerepet, melyekkel a könyv további részében mindenütt találkozni fogunk.

## Műveletek táblázatokkal – műveletek mátrixokkal

*A valós számok közti műveletek természetes módon kiterjeszthetők mátrixokkal való műveletekké. Ezek definícióihoz az összeadás és a szorzás hétköznapi alkalmazásainak táblázatokra való kiterjesztésén keresztül fogunk eljutni.*

A *táblázat* számszerű adatok téglalap alakban sorokban és oszlopokban való elrendezése. A sorok előtt és az oszlopok fölött *fejléc* állhat, melyben az adott sor, illetve oszlop adatait jellemző valamely információ áll (például az oszlop számadatainak közös mértékegysége).

> A mátrixra úgy is tekinthetünk, mint amelyet egy olyan absztrakció során kapunk a táblázatból, melyben azt megfosztjuk fejléceitől, az adatokból pedig csak a számokat őrizzük meg, azok jelentésétől, mértékegységétől eltekintünk.

### Táblázatok összeadása és skalárral szorzása

Az összeadás művelete természetes módon kiterjeszthető számadatokat tartalmazó táblázatokra. Ha két gyümölcsoskosárban piros és zöld alma és szőlő van az alábbi táblázatok szerint, akkor összeöntésük után számuk így számolható:

| | alma (db) | szőlő (fürt) |
|---|---|---|
| *piros* | 3 | 2 |
| *zöld* | 2 | 1 |

$+$

| | alma (db) | szőlő (fürt) |
|---|---|---|
| *piros* | 2 | 2 |
| *zöld* | 0 | 1 |

$=$

| | alma (db) | szőlő (fürt) |
|---|---|---|
| *piros* | 5 | 4 |
| *zöld* | 2 | 2 |

Azonos méretű, azonos fejlécű táblázatok összeadásának egy lehetséges módja az, ha az azonos pozícióiban lévő elemek összeadásával képezzük az összeget.

Az asztalon 2 alma van. Ha számukat megháromszorozzuk, összeszorzunk egy mértékegység nélküli számot (3) egy mértékegységgel rendelkezővel (2 darab), és az eredmény mértékegysége is ez. Ezt megtehetjük egy kosár egész tartalmával is:

$3 \cdot$

| | alma (db) | szőlő (fürt) |
|---|---|---|
| *piros* | 3 | 2 |
| *zöld* | 2 | 1 |

$=$

| | alma (db) | szőlő (fürt) |
|---|---|---|
| *piros* | 9 | 6 |
| *zöld* | 6 | 3 |

### Táblázatok szorzása

Egy adag (a továbbiakban mindig 10 dkg) alma energiatartalma 30 kcal. 5 adag energiatartalmát ismét szorzással kapjuk meg – most mindkét mennyiség rendelkezik mértékegységgel:
$$5\,\text{adag} \cdot 30\,\frac{\text{kcal}}{\text{adag}} = 150\,\text{kcal}.$$
Több gyümölcsből (alma, banán, narancs) többféle (A, B, C) gyümölcssalátát készítünk, és a szénhidrát- és energiatartalmukat vizsgáljuk. Két táblázat egyikébe a gyümölcssaláták összetételét, a másikába az összetevők szénhidrát- és energiatartalmát írjuk. Mindkét táblázatban a sorokba kerülnek azok a tételek, melyek összetételét/összetevőit részletezzük, az oszlopokba pedig az összetevők.

| | Alma (adag) | Banán (adag) | Narancs (adag) |
|---|---|---|---|
| *A* | 5 | 1 | 4 |
| *B* | 4 | 4 | 2 |
| *C* | 4 | 2 | 4 |

| | Szénhidrát (g/adag) | Energia (kcal/adag) |
|---|---|---|
| *Alma* | 7 | 30 |
| *Banán* | 24 | 105 |
| *Narancs* | 8 | 40 |

A következőképp tudjuk az A saláta energiatartalmát kiszámítani:
$$5\,\text{adag} \cdot 30\,\frac{\text{kcal}}{\text{adag}} + 1\,\text{adag} \cdot 105\,\frac{\text{kcal}}{\text{adag}} + 4\,\text{adag} \cdot 40\,\frac{\text{kcal}}{\text{adag}} = 415\,\text{kcal},$$
vagyis az első táblázat egy sorának és a második táblázat egy oszlopának kellett a skaláris szorzatát venni. Végezzük el e számításokat mindhárom gyümölcssaláta szénhidrát és energiatartalmára is, és az eredményt ismét egy olyan táblázatba tegyük, melynek soraiba a részletezendő tételek (A, B, C saláta), oszlopaiba a tartalmi összetevők (szénhidrát-, energiatartalom) kerüljenek.

| | Szénhidrát (g) | Energia (kcal) |
|---|---|---|
| *A* | 91 | 415 |
| *B* | 140 | 620 |
| *C* | 108 | 490 |

Az áttekinthetőség kedvéért a két összeszorzandó mátrixot és az eredményt a fejléceihez igazítva helyeztük el (a második tényező a tartalmi táblázat, az első a salátaösszetétel, az eredmény a salátánkénti összesítés):

| | Szénhidrát (g/adag) | Energia (kcal/adag) |
|---|---|---|
| *Alma* | 7 | 30 |
| *Banán* | 24 | 105 |
| *Narancs* | 8 | 40 |

| | Alma (adag) | Banán (adag) | Narancs (adag) | | Szénhidrát (g) | Energia (kcal) |
|---|---|---|---|---|---|---|
| *A* | 5 | 1 | 4 | | 91 | 415 |
| *B* | 4 | 4 | 2 | | 140 | 620 |
| *C* | 4 | 2 | 4 | | 108 | 490 |

> Az A saláta energiatartalmának kiszámítását kiemeltük. Érdemes azt is megfigyelni, hogy ha csak az A és C gyümölcssalátákra vagyunk kíváncsiak, elég az első táblázat és a végeredmény második sorát elhagyni, hasonlóképp ha csak az energiatartalmat figyeljük, elég a második táblázat és a végeredmény második oszlopát megtartani. Az is látszik, hogy az első táblázat oszlopainak és a második táblázat sorainak száma megegyezik. Általában az igaz, hogy (a fejléceket nem számolva) egy $m \times n$-es táblázat csak olyan $p \times k$-as táblázattal szorozható össze, ahol $p = n$, és az eredmény $m \times k$-as lesz.

### Lineáris helyettesítések kompozíciója

A lineáris algebra több alapvető fogalma megfogalmazható a lineáris helyettesítés nyelvén.

**4.1. definíció (Lineáris helyettesítés).** *Lineáris helyettesítésről akkor beszélünk, ha változók egy halmazát más változók lineáris kifejezéseivel tesszük egyenlővé (e lineáris kifejezésekkel helyettesítjük).*

**4.2. példa (Lineáris helyettesítések kompozíciója).** *Tekintsük a következő két lineáris helyettesítést:*
$$\begin{aligned} a &= 5x + y + 4z \\ b &= 4x + 4y + 2z \\ c &= 4x + 2y + 4z \end{aligned} \quad \text{és} \quad \begin{aligned} x &= 7s + 30k \\ y &= 24s + 105k \\ z &= 8s + 40k \end{aligned} \tag{4.1}$$
*Írjuk fel a két helyettesítés egymás után való elvégzésével, azaz* kompozíciójával *kapott lineáris helyettesítés egyenleteit!*

*Megoldás.* Elemi számítás mutatja, hogy a két lineáris helyettesítés egymásutáni elvégzése (kompozíciója) az
$$\begin{aligned} a &= 91s + 415k \\ b &= 140s + 620k \\ c &= 108s + 490k \end{aligned}$$
lineáris helyettesítést adja. Figyeljük meg, hogy ha a két lineáris helyettesítést is táblázatokkal írjuk le, ahol a sorok fejlécébe annak a változónak a nevét írjuk, amit helyettesítünk, oszlopaiba azt, amivel helyettesítjük, a kompozíció művelete e két táblázat szorzatával számolható. (A számadatok előző példában szereplőkkel való azonossága nem a véletlen műve.) $\square$

| | $s$ | $k$ |
|---|---|---|
| $x$ | 7 | 30 |
| $y$ | 24 | 105 |
| $z$ | 8 | 40 |

| | $x$ | $y$ | $z$ | | $s$ | $k$ |
|---|---|---|---|---|---|---|
| $a$ | 5 | 1 | 4 | | 91 | 415 |
| $b$ | 4 | 4 | 2 | | 140 | 620 |
| $c$ | 4 | 2 | 4 | | 108 | 490 |

### Elemenkénti mátrixműveletek

Mátrixok összeadását és skalárral szorzását a táblázatoknál látottak alapján definiáljuk.

A mátrixműveletekhez szükségünk van arra, hogy a mátrix elemei olyan struktúrából valók legyenek, melyek közt a megkívánt műveletek elvégezhetők. Legyen $S$ egy tetszőleges halmaz (pl. $S = \mathbb{R}, \mathbb{Q}, \mathbb{N}, \mathbb{Z}\ldots$). Az $S$ elemeiből képzett összes $m \times n$-es mátrixok halmazát
$$S^{m \times n} \quad \text{vagy} \quad \mathrm{M}_{m \times n}[S]$$
jelöli. Azt mondjuk, hogy $S^{m \times n}$ ($\mathrm{M}_{m \times n}[S]$) az $S$ fölötti $m \times n$ típusú *mátrixok tere.* Például az $\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$ mátrix eleme az $\mathbb{N}^{2 \times 2}$, $\mathbb{Z}^{2 \times 2}$, $\mathbb{Q}^{2 \times 2}$, $\mathbb{R}^{2 \times 2}$ terek mindegyikének.

Két mátrixot akkor tekintünk *egyenlőnek,* ha azonos típusúak, és az azonos indexű elemek egyenlők. Például az $\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} = \begin{bmatrix} 1 & 2 \\ 3 & x \end{bmatrix}$ egyenlőség pontosan akkor áll fönn, ha $x = 4$. Egy vektor sor- vagy oszlopvektor alakba írva mátrixként nem egyenlők egymással. Például
$$\begin{bmatrix} 1 & 2 \end{bmatrix} \neq \begin{bmatrix} 1 \\ 2 \end{bmatrix},$$
mert nem azonos típusúak.

Egy mátrix *négyzetes,* ha sorainak és oszlopainak száma megegyezik. A $\mathbf{A}$ mátrix *főátlójának* elemei $a_{11}$, $a_{22}$, $a_{33}, \ldots$ Ez nem csak négyzetes mátrixra értelmezhető. Az olyan négyzetes mátrixot, melynek főátlón kívüli elemei mind nullák, *diagonális mátrixnak* nevezzük. Az ilyen mátrixok egyszerű megadására a diag függvényt használjuk, melynek argumentumába a főátló elemei vannak felsorolva. Például
$$\operatorname{diag}(1, 2, 3) = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{bmatrix}.$$

A mátrixműveletek megismerését azokkal kezdjük melyeket elemenként végezhetünk.

**4.3. definíció (Mátrixok összege, különbsége).** *Az $m \times n$ típusú $\mathbf{A} = [a_{ij}]$ és $\mathbf{B} = [b_{ij}]$ mátrixok összegén azt az ugyancsak $m \times n$-es, és $\mathbf{A} + \mathbf{B}$-vel jelölt mátrixot értjük, melynek $i$-edik sorában a $j$-edik elem $a_{ij} + b_{ij}$, ahol $i = 1, \ldots, m$, $j = 1, \ldots, n$. Képletben:*
$$\mathbf{A} + \mathbf{B} = [a_{ij}] + [b_{ij}] := [a_{ij} + b_{ij}].$$
*Hasonlóan definiálható $\mathbf{A}$ és $\mathbf{B}$ különbsége is, azaz $\mathbf{A} - \mathbf{B} := [a_{ij} - b_{ij}]$.*

Például
$$\begin{bmatrix} 0 & 2 & 4 \\ 1 & 3 & 5 \end{bmatrix} + \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{bmatrix} = \begin{bmatrix} 1 & 2 & 4 \\ 1 & 4 & 5 \end{bmatrix}, \quad \begin{bmatrix} 2 \\ 3 \end{bmatrix} - \begin{bmatrix} 3 \\ 2 \end{bmatrix} = \begin{bmatrix} -1 \\ 1 \end{bmatrix}.$$

*4.1. ábra. Mátrix megadása, elemeinek, sorainak és oszlopainak és azok számának lekérdezése mátrix alapú nyelvekben.*

```octave
OCTAVE  a = [1 2 3
>            4 5 7]
a =
   1   2   3
   4   5   7
OCTAVE  b = [1 2;3 4]
b =
   1   2
   3   4
OCTAVE  diag([1,2,3])
ans =
   1   0   0
   0   2   0
   0   0   3
OCTAVE  a(2,3)
ans = 7
OCTAVE  a(2,:)
ans =
   4   5   7
OCTAVE  a(:,3)
ans =
   3
   7
OCTAVE  v = [1 2 3]
v =
   1   2   3
OCTAVE  w = [1;2;3]
w =
   1
   2
   3
OCTAVE  size(v)
ans =
   1   3
OCTAVE  size(w)
ans =
   3   1
```

> A mátrixalapú nyelvekben mátrixok közötti elemenkénti művelet definiálható a műveleti jel elé tett ponttal. Így az `A` és `B` mátrixok elemenkénti szorzata az `A .* B` paranccsal kapható meg. Eszerint az `A .+ B` és `A + B` kódok az eredményt tekintve ekvivalensek.

**4.4. definíció (Zérusmátrix).** *A csupa nullából álló mátrixokat zérusmátrixoknak nevezzük. Az $m \times n$-es zérusmátrixot $\mathbf{O}_{m \times n}$, míg az $n \times n$-es négyzetes zérusmátrixot $\mathbf{O}_n$ jelöli.*

Tetszőleges $\mathbf{A}$ mátrixhoz egy azonos típusú zérusmátrixot adva $\mathbf{A}$-t kapunk, azaz $\mathbf{A} + \mathbf{O} = \mathbf{O} + \mathbf{A} = \mathbf{A}$.

**4.5. definíció (Mátrix szorzása skalárral).** *Az $m \times n$-es típusú $\mathbf{A} = [a_{ij}]$ mátrix $c$ számmal képzett szorzatán azt az ugyancsak $m \times n$-es típusú, és $c\mathbf{A}$-val jelölt mátrixot értjük, melyre*
$$c\mathbf{A} = c[a_{ij}] := [ca_{ij}].$$

Az $\mathbf{A}$ mátrix *ellentettjének* azt a $-\mathbf{A}$-val jelölt mátrixot nevezzük, melyre $\mathbf{A} + (-\mathbf{A}) = \mathbf{O}$. Könnyen megmutatható, hogy ilyen mátrix csak egy van, nevezetesen $-\mathbf{A} = (-1)\mathbf{A}$.

Azonos méretű mátrixokon más elemenkénti művelet is definiálható. Érdekességként mutatunk egy példát egy ilyen műveletre a digitális képfeldolgozás köréből, ahol a képpontokra (pixelekre) bontott kép adatai mátrixokban vannak tárolva. A 4.2. ábra mátrixa az alatta lévő férfiarc 9 szürkeárnyalatos képe, melyen a háttér egy egyszerű elemenkénti művelettel megváltoztatható (részletek a 4.6. feladatban).

A vektorokhoz hasonlóan, a skalárral való szorzás és az összeadás művelete lehetővé teszi, hogy mátrixokra is definiáljuk a *lineáris kombináció,* a *lineáris függetlenség* és a *lineáris összefüggőség* fogalmát.

**4.6. példa (Mátrixok lineáris kombinációja).** *Számítsuk ki a*
$$2\begin{bmatrix} 0 & 1 \\ 2 & 1 \\ 0 & -1 \end{bmatrix} - 3\begin{bmatrix} 1 & 0 \\ -1 & -2 \\ -1 & 0 \end{bmatrix}.$$
*lineáris kombinációt!*

*Megoldás.* A skalárral való szorzásokat, majd az összeadást elvégezve
$$2\begin{bmatrix} 0 & 1 \\ 2 & 1 \\ 0 & -1 \end{bmatrix} - 3\begin{bmatrix} 1 & 0 \\ -1 & -2 \\ -1 & 0 \end{bmatrix} = \begin{bmatrix} 0 & 2 \\ 4 & 2 \\ 0 & -2 \end{bmatrix} + \begin{bmatrix} -3 & 0 \\ 3 & 6 \\ 3 & 0 \end{bmatrix} = \begin{bmatrix} -3 & 2 \\ 7 & 8 \\ 3 & -2 \end{bmatrix}.$$
A műveletek természetesen elemként is elvégezhetők, pl. a második sor első eleme így megkapható: $2 \cdot 2 - 3 \cdot (-1) = 7$. $\square$

A mátrixok az összeadásra és a skalárral való szorzásra nézve a vektorokhoz hasonlóan viselkednek. Az $\mathbb{R}^{m \times n}$-beli $m \times n$-es mátrixok e két műveletre nézve úgy viselkednek, mint $\mathbb{R}^{mn}$ vektorai. Mondhatjuk tehát, hogy $\mathbb{R}^{m \times n}$ mátrixai egy $mn$-dimenziós *vektorteret* alkotnak. Lásd erről pl. a 4.7. és a 4.8. feladatokat.

*4.2. ábra. Egy elemenkénti mátrixművelet a képfeldolgozásban (egy szürkeárnyalatos arckép pixelmátrixán végzett művelet).*

### Mátrixszorzás

A táblázatok szorzásánál és a lineáris helyettesítések kompozíciójánál látott szabályt követi a mátrixok szorzásának definíciójához.

**4.7. definíció (Mátrixok szorzása).** *Egy $m \times t$-s $\mathbf{A}$ és egy $t \times n$-es $\mathbf{B}$ mátrix szorzatán azt az $\mathbf{AB}$-vel jelölt $m \times n$-es $\mathbf{C}$ mátrixot értjük, amelynek $i$-edik sorában és $j$-edik oszlopában álló eleme*
$$c_{ij} = a_{i1}b_{1j} + a_{i2}b_{2j} + \ldots + a_{ik}b_{kj} + \ldots + a_{it}b_{tj}.$$

*Ábra. A $c_{ij}$ elem az $\mathbf{A}$ $i$-edik sorának $(a_{i1}, a_{i2}, \ldots, a_{it})$ és $\mathbf{B}$ $j$-edik oszlopának $(b_{1j}, b_{2j}, \ldots, b_{tj})$ skaláris szorzata.*

A definícióbeli összefüggés több módon is kifejezhető. Szummával fölírva:
$$c_{ij} = \sum_{k=1}^{t} a_{ik}b_{kj},$$
de mondhatjuk azt is, hogy $c_{ij}$ az $\mathbf{A}$ mátrix $i$-edik sorának és a $\mathbf{B}$ mátrix $j$-edik oszlopának skaláris szorzata, azaz
$$c_{ij} = \mathbf{a}_{i*} \cdot \mathbf{b}_{*j}.$$
Egy $m \times s$-es $\mathbf{A}$ és egy $t \times n$-es $\mathbf{B}$ mátrix csak akkor szorozható össze, ha $s = t$, és ekkor a szorzat $m \times n$ típusú.

*Ábra. Az $m \times s$ típusú $\mathbf{A}$ és $t \times n$ típusú $\mathbf{B}$ szorzata – feltéve, hogy $s = t$ – $m \times n$ típusú.*

A szorzandók sorrendje fontos. Lehet, hogy az $\mathbf{AB}$ szorzás elvégezhető, de a $\mathbf{BA}$ nem, és lehet, hogy elvégezhető, de különböző eredményt kapunk (ld. a 4.10. feladatot). Mivel a mátrixszorzás nem felcserélhető, ha szükséges, az „$\mathbf{A}$-t balról szorozzuk $\mathbf{B}$-vel", vagy az „$\mathbf{A}$-t jobbról szorozzuk $\mathbf{B}$-vel" kifejezésekkel teszünk különbséget a $\mathbf{BA}$ és az $\mathbf{AB}$ szorzatok közt.

**4.8. példa (Mátrixok szorzása).** *Legyen*
$$\mathbf{A} = \begin{bmatrix} 1 & 1 \\ 2 & 1 \\ 0 & 3 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 1 & 1 & 2 \\ 2 & 1 & 0 \end{bmatrix}$$
*Számítsuk ki az $(\mathbf{AB})_{21}$ elemet, majd az $\mathbf{AB}$ mátrixot.*

*Megoldás.* A szorzat második sorának első eleme az $\mathbf{A}$ második sorának és $\mathbf{B}$ első oszlopának skaláris szorzata:
$$\begin{bmatrix} 1 & 1 \\ 2 & 1 \\ 0 & 3 \end{bmatrix} \begin{bmatrix} 1 & 1 & 2 \\ 2 & 1 & 0 \end{bmatrix} = \begin{bmatrix} * & * & * \\ 4 & * & * \\ * & * & * \end{bmatrix}$$
Hasonlóan a többi elemet is kiszámolva
$$\begin{bmatrix} 1 & 1 \\ 2 & 1 \\ 0 & 3 \end{bmatrix} \begin{bmatrix} 1 & 1 & 2 \\ 2 & 1 & 0 \end{bmatrix} = \begin{bmatrix} 3 & 2 & 2 \\ 4 & 3 & 4 \\ 6 & 3 & 0 \end{bmatrix}. \qquad \square$$

### Műveletek blokkmátrixokkal

Hatalmas méretű mátrixokkal végzett műveletek párhuzamosíthatók, és a memóriakezelés is hatékonyabbá válik, ha a mátrixokat blokkokra osztjuk, és a műveleteket e kisebb részmátrixokkal végezzük.

Ha egy mátrixot vízszintes és függőleges vonalakkal részmátrixokra bontunk, azt mondjuk, hogy e mátrix a részmátrixokból – más néven blokkokból – alkotott *blokkmátrix.* Egy blokkmátrix sorait és oszlopait a mátrix *blokksorainak* és *blokkoszlopainak* nevezzük.

Egy egyenletrendszer $[\mathbf{A}|\mathbf{b}]$ bővített mátrixa egy két blokkból álló blokkmátrix. Az alábbi példa egy 5-ismeretlenes, 5 egyenletből álló egyenletrendszer bővített mátrixának redukált lépcsős alakját mutatja, ahol az első blokkoszlop a kötött változóknak, a második a szabad változóknak, a harmadik az egyenletrendszer jobb oldalának felel meg, a második blokksor a zérussorokat tartalmazza.[^6]
$$\left[\begin{array}{ccc|cc|c} 1 & 0 & 0 & 1 & 2 & 4 \\ 0 & 1 & 0 & 2 & 0 & 3 \\ 0 & 0 & 1 & 1 & 0 & 3 \\ \hline 0 & 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 & 0 \end{array}\right] = \begin{bmatrix} \mathbf{B}_{11} & \mathbf{B}_{12} & \mathbf{B}_{13} \\ \mathbf{B}_{21} & \mathbf{B}_{22} & \mathbf{B}_{23} \end{bmatrix}.$$

[^6]: *A blokkmátrixokra a szakirodalomban a* hipermátrix *elnevezés is használatos. Mi kerüljük e szóhasználatot a hipermátrix másik – többdimenziós tömb értelmű – jelentése miatt.*

**4.9. állítás (Műveletek blokkmátrixokkal).** *Blokkmátrixok skalárral való szorzása és két azonos módon particionált blokkmátrix összeadása blokkonként is elvégezhető, azaz*
$$c[\mathbf{A}_{ij}] := [c\mathbf{A}_{ij}], \qquad [\mathbf{A}_{ij}] + [\mathbf{B}_{ij}] := [\mathbf{A}_{ij} + \mathbf{B}_{ij}].$$
*Ha $\mathbf{A} = [\mathbf{A}_{ik}]_{m \times t}$, $\mathbf{B} = [\mathbf{B}_{kj}]_{t \times n}$ két blokkmátrix, és minden $k$-ra az $\mathbf{A}_{ik}$ blokk oszlopainak száma megegyezik $\mathbf{B}_{kj}$ sorainak számával, akkor a $\mathbf{C} = \mathbf{AB}$ szorzat kiszámítható a szorzási szabály blokkokra való alkalmazásával is, azaz $\mathbf{C}$ olyan blokkmátrix, melynek $i$-edik blokksorában és $j$-edik blokkoszlopában álló blokk*
$$\mathbf{C}_{ij} = \sum_{k=1}^{t} \mathbf{A}_{ik}\mathbf{B}_{kj}.$$

Például az alábbi mátrixszorzás blokkmátrixként a következőképp végezhető el:
$$\left[\begin{array}{cc|c} 1 & 0 & 1 \\ 2 & 1 & 1 \\ 0 & 3 & 1 \end{array}\right] \left[\begin{array}{cc} 1 & 1 \\ 1 & 2 \\ \hline 0 & 1 \end{array}\right] = \begin{bmatrix} 1 & 0 \\ 2 & 1 \\ 0 & 3 \end{bmatrix}\begin{bmatrix} 1 & 1 \\ 1 & 2 \end{bmatrix} + \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix}\begin{bmatrix} 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 1 \\ 3 & 4 \\ 3 & 6 \end{bmatrix} + \begin{bmatrix} 0 & 1 \\ 0 & 1 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 2 \\ 3 & 5 \\ 3 & 7 \end{bmatrix}.$$

### Kronecker-szorzat és a vec-függvény

Vannak olyan blokkmátrixműveletek, amelyek nem származtathatóak egyszerű mátrixműveletekből.

A vec függvény egy tetszőleges mátrixot vektorrá alakít a mátrix oszlopvektorainak egymás alá tételével. Ha $\mathbf{A} = [\mathbf{a}_1 | \mathbf{a}_2 | \ldots | \mathbf{a}_n]$, akkor
$$\operatorname{vec}(\mathbf{A}) = \begin{bmatrix} \mathbf{a}_1 \\ \vdots \\ \mathbf{a}_n \end{bmatrix}.$$
Például, ha $\mathbf{A} = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$, akkor $\operatorname{vec}(\mathbf{A}) = \begin{bmatrix} 1 \\ 3 \\ 2 \\ 4 \end{bmatrix}$.

Legyen $\mathbf{A}$ egy $m \times n$-es, $\mathbf{B}$ egy $p \times q$-as mátrix. *Kronecker-szorzatukon* (vagy más néven *tenzorszorzatukon*) azt az $\mathbf{A} \otimes \mathbf{B}$-vel jelölt $mp \times nq$ méretű mátrixot értjük, melynek blokkmátrix alakja
$$\mathbf{A} \otimes \mathbf{B} = \begin{bmatrix} a_{11}\mathbf{B} & a_{12}\mathbf{B} & \ldots & a_{1n}\mathbf{B} \\ a_{21}\mathbf{B} & a_{22}\mathbf{B} & \ldots & a_{2n}\mathbf{B} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1}\mathbf{B} & a_{m2}\mathbf{B} & \ldots & a_{mn}\mathbf{B} \end{bmatrix}.$$
Például
$$\begin{bmatrix} -1 & 2 \\ 0 & 1 \end{bmatrix} \otimes \begin{bmatrix} 0 & 1 & 2 \\ 3 & 3 & 3 \end{bmatrix} = \begin{bmatrix} 0 & -1 & -2 & 0 & 2 & 4 \\ -3 & -3 & -3 & 3 & 6 & 6 \\ 0 & 0 & 0 & 0 & 1 & 2 \\ 0 & 0 & 0 & 3 & 3 & 3 \end{bmatrix}.$$

**4.10. tétel (A Kronecker-szorzat tulajdonságai).** *Adva van az $\mathbf{A}_{m \times n}$, $\mathbf{B}_{m \times n}$, $\mathbf{C}_{p \times s}$ és $\mathbf{D}_{r \times s}$ mátrix. Ekkor*
- a) *$(\mathbf{A} + \mathbf{B}) \otimes \mathbf{C} = \mathbf{A} \otimes \mathbf{C} + \mathbf{B} \otimes \mathbf{C}$, $\mathbf{C} \otimes (\mathbf{A} + \mathbf{B}) = \mathbf{C} \otimes \mathbf{A} + \mathbf{C} \otimes \mathbf{B}$,*
- b) *$(\mathbf{A} \otimes \mathbf{C}) \otimes \mathbf{D} = \mathbf{A} \otimes (\mathbf{C} \otimes \mathbf{D})$,*
- c) *$(\mathbf{A} \otimes \mathbf{C})^\mathsf{T} = \mathbf{C}^\mathsf{T} \otimes \mathbf{A}^\mathsf{T}$.*

A lineáris mátrixegyenleteknél fogjuk használni a következőket:

**4.11. tétel (A Kronecker-szorzat és a vec-függvény tulajdonságai).** *Adva van az $\mathbf{A}_{m \times n}$, $\mathbf{B}_{p \times q}$ és $\mathbf{X}_{n \times p}$ mátrix. Ekkor*
- a) *$\operatorname{vec}(\mathbf{AX}) = (\mathbf{I}_p \otimes \mathbf{A})\operatorname{vec}(\mathbf{X})$, $\operatorname{vec}(\mathbf{XB}) = (\mathbf{B}^\mathsf{T} \otimes \mathbf{I}_n)\operatorname{vec}(\mathbf{X})$,*
- b) *$\operatorname{vec}(\mathbf{AXB}) = (\mathbf{B}^\mathsf{T} \otimes \mathbf{A})\operatorname{vec}(\mathbf{X})$,*
- c) *$\operatorname{vec}(\mathbf{AX} + \mathbf{XB}) = (\mathbf{I}_p \otimes \mathbf{A} + \mathbf{B}^\mathsf{T} \otimes \mathbf{I}_n)\operatorname{vec}(\mathbf{X})$.*

*Bizonyítás.* A fenti állítások mindegyike közvetlenül bizonyítható a definíció alapján. Szemléltetésül megmutatjuk a b) bizonyítását.
$$\begin{aligned}
[\mathbf{AXB}]_{*j} = \mathbf{AX}\mathbf{b}_{*j} &= \sum_{i=1}^{n} b_{ij}(\mathbf{AX})_{*i} = \sum_{i=1}^{n} (b_{ij}\mathbf{A})\mathbf{X}_{*i} \\
&= [b_{1j}\mathbf{A} | \ldots | b_{nj}\mathbf{A}]\operatorname{vec}(\mathbf{X}) = [\mathbf{B}^\mathsf{T} \otimes \mathbf{A}]_{*j}\operatorname{vec}(\mathbf{X}) \qquad \square
\end{aligned}$$

### Hipermátrixok

Bizonyos adatok, természetüknél fogva, 2-nél magasabb dimenziós tömbben rendezhetők el jól.

**4.12. definíció (Hipermátrix).** *Legyen $n_1, n_2, \ldots, n_d \in \mathbb{N}^+$ és legyen $S$ egy tetszőleges halmaz (pl. $S = \mathbb{R}, \mathbb{Q}, \mathbb{N}, \mathbb{Z}\ldots$). $d$-edrendű (vagy $d$-dimenziós) $n_1 \times n_2 \times \ldots \times n_d$-típusú hipermátrixnak nevezzük az*
$$\mathbf{A} : \{1, \ldots, n_1\} \times \{1, \ldots, n_2\} \times \ldots \times \{1, \ldots, n_d\} \to S$$
*alakú leképezést. Az $\mathbf{A}(i_1, i_2, \ldots, i_d)$ elemet $a_{i_1 i_2 \ldots i_d}$-vel jelöljük, melyre úgy gondolhatunk, mint egy $d$-dimenziós táblázat egy elemére és a mátrixoknál megszokotthoz hasonlóan írhatjuk, hogy*
$$\mathbf{A} = [a_{i_1 i_2 \ldots i_d}]_{i_1, i_2, \ldots, i_d = 1}^{n_1, n_2, \ldots, n_d} \quad \text{vagy egyszerűbben} \quad \mathbf{A} = [a_{i_1 i_2 \ldots i_d}].$$
*Ha $n_1 = n_2 = \cdots = n_d = n$, akkor a* hiper-kockamátrixról *beszélünk.*

Az $S$ elemeiből képzett összes $n_1 \times n_2 \times \ldots \times n_d$-típusú hipermátrixok halmazát $S^{n_1 \times n_2 \times \ldots \times n_d}$ jelöli.

A másodrendű hipermátrixok egybeesnek a mátrixokkal.

A 3-adrendű hipermátrixok elemeinek leírását papírra (tehát 2-dimenzióban) úgy oldhatjuk meg, hogy például a harmadik index szerint „szeletekre" vágjuk. E „szeletek" mindegyike egy mátrix, melyeket függőleges vonallal elválasztva egymás mellé írunk. Így például a $4 \times 2 \times 3$-típusú hipermátrixok általános alakja
$$\left[\begin{array}{cc|cc|cc} a_{111} & a_{121} & a_{112} & a_{122} & a_{113} & a_{123} \\ a_{211} & a_{221} & a_{212} & a_{222} & a_{213} & a_{223} \\ a_{311} & a_{321} & a_{312} & a_{322} & a_{313} & a_{323} \\ a_{411} & a_{421} & a_{412} & a_{422} & a_{413} & a_{423} \end{array}\right]$$

Két azonos típusú hipermátrix összeadása és egy hipermátrix skalárral való szorzása a mátrixokhoz hasonlóan elemenként történik:
$$[a_{i_1 i_2 \ldots i_d}] + [b_{i_1 i_2 \ldots i_d}] := [a_{i_1 i_2 \ldots i_d} + b_{i_1 i_2 \ldots i_d}], \quad c[a_{i_1 i_2 \ldots i_d}] := [ca_{i_1 i_2 \ldots i_d}].$$

**4.13. definíció (Hipermátrix transzponáltja).** *Legyen $\pi$ az $\{1, 2, \ldots, d\}$ halmaz egy permutációja. A $d$-edrendű $\mathbf{A} = [a_{i_1 i_2 \ldots i_d}] \in S^{n_1 \times n_2 \times \ldots \times n_d}$ hipermátrix $\pi$-transzponáltján az*
$$\mathbf{A}^\pi = [a_{i_{\pi(1)} i_{\pi(2)} \ldots i_{\pi(d)}}] \in S^{n_{\pi(1)} \times n_{\pi(2)} \times \ldots \times n_{\pi(d)}}$$
*hipermátrixot értjük. Egy $\mathbf{A} \in S^{n \times n \times \ldots \times n}$ hiper-kockamátrix* szimmetrikus, *ha minden $\pi$ permutációra $\mathbf{A}^\pi = \mathbf{A}$, és* ferdén szimmetrikus, *ha $\mathbf{A}^\pi = \operatorname{sgn}(\pi)\mathbf{A}$, ahol $\operatorname{sgn}(\pi) = -1$, ha a $\pi$ páratlan permutáció, és 1, ha páros.*

Eszerint a $2 \times 2 \times 2$-es hipermátrixok és szimmetrikus hipermátrixok általános alakja
$$\left[\begin{array}{cc|cc} a_{111} & a_{121} & a_{112} & a_{122} \\ a_{211} & a_{221} & a_{212} & a_{222} \end{array}\right], \quad \left[\begin{array}{cc|cc} a & b & b & c \\ b & c & c & d \end{array}\right].$$
A $3 \times 3 \times 3$-as hipermátrixok, szimmetrikus és ferdén szimmetrikus hipermátrixok általános alakja
$$\left[\begin{array}{ccc|ccc|ccc} a_{111} & a_{121} & a_{131} & a_{112} & a_{122} & a_{132} & a_{113} & a_{123} & a_{133} \\ a_{211} & a_{221} & a_{231} & a_{212} & a_{222} & a_{232} & a_{213} & a_{223} & a_{233} \\ a_{311} & a_{321} & a_{331} & a_{312} & a_{322} & a_{332} & a_{313} & a_{323} & a_{333} \end{array}\right],$$
$$\left[\begin{array}{ccc|ccc|ccc} a & b & c & b & d & e & c & e & f \\ b & d & e & d & g & h & e & h & i \\ c & e & f & e & h & i & f & i & j \end{array}\right], \quad \left[\begin{array}{ccc|ccc|ccc} 0 & 0 & 0 & 0 & 0 & -a & 0 & a & 0 \\ 0 & 0 & a & 0 & 0 & 0 & -a & 0 & 0 \\ 0 & -a & 0 & a & 0 & 0 & 0 & 0 & 0 \end{array}\right],$$
ahol $a, b, c, d, e, f, g, h, i, j \in S$ nem feltétlenül különböző elemek.

### Feladatok

#### Táblázatok

**4.1.** Anti, Bori, Cili almát, banánt és citromot vesz a piacon, a hipermarketben vagy a csarnokban. Ha csak az ár számít, melyikük hol vásároljon?

| | alma (kg) | banán (kg) | citrom (kg) |
|---|---|---|---|
| Anti | 2 | 2 | 1 |
| Bori | 3 | 2 | 0.5 |
| Cili | 2 | 1 | 1 |

| | csarnok (Ft/kg) | hipermarket (Ft/kg) | piac (Ft/kg) |
|---|---|---|---|
| alma | 180 | 100 | 130 |
| banán | 390 | 420 | 360 |
| citrom | 210 | 210 | 230 |

**4.2.** Egy $f(x, y)$ kifejezésben elvégezzük az
$$\begin{aligned} x &= 2a + b \\ y &= 3a + b \end{aligned}$$
helyettesítést, majd az így kapott $f(2a + b, 3a + b)$ kifejezésben az
$$\begin{aligned} a &= -3s + t \\ b &= 4s - t \end{aligned}$$
helyettesítést. Számítsuk ki a két helyettesítés kompozícióját a helyettesítések végrehajtásával, és a nekik megfelelő táblázatok szorzásával is, azaz írjuk fel azt a helyettesítést, mely e két helyettesítés kompozíciójával ekvivalens!

**4.3.** Tegyük fel, hogy egy kifejezésben elvégezzük a következő két helyettesítést:
$$\begin{aligned} x &= 2a + b + 6c \\ y &= 4a + b + 7c \\ z &= 3a + b + 6c \end{aligned} \qquad \begin{aligned} a &= -s + u \\ b &= -3s - 6t + 10u \\ c &= s + t - 2u \end{aligned}$$
Hogyan számíthatjuk ki a két helyettesítés kompozícióját? Írjuk fel azt a helyettesítést, mely a két helyettesítés kompozíciójával ekvivalens!

**4.4.•** Két versengő kereskedelmi TV-csatorna valóságshow-műsora kezdetben fele-fele arányban vonzza a nézőket. Az első hét végére a tv1 nézőinek fele, míg a tv2 nézőinek negyede átpártol a másik csatornára.
1. Készítsük el az átpártolás $2 \times 2$-es táblázatát, és a nézők megoszlásának $2 \times 1$-es vagy $1 \times 1$-es táblázatát!
2. nézők megoszlásának $2 \times 1$-es táblázatát!
3. Táblázatok szorzásának segítségével határozzuk meg, hogy mi a nézők megoszlása az első és a második hét végén, ha az átpártolók aránya az idővel nem változik.
4. Írjuk fel az átpártolók kéthetenkénti táblázatát, azaz azt, amelyből kiolvasható, hogy két hét elteltével az egyes csatornák nézőinek hányadrésze pártol át, és mennyi marad!

#### Elemenkénti mátrixműveletek

**4.5.•** Adva vannak az alábbi mátrixok!
$$\mathbf{A} = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 1 & 0 \end{bmatrix} \quad \mathbf{B} = \begin{bmatrix} 1 & 1 & 0 \\ 2 & 1 & 1 \end{bmatrix} \quad \mathbf{C} = \begin{bmatrix} 1 & 1 \\ 2 & 2 \\ 1 & 0 \end{bmatrix}$$
Számítsuk ki a következő kifejezések közül azok értékét, amelyek értelmezve vannak! a) $4\mathbf{A} - 3\mathbf{B}$, b) $2\mathbf{B} - \mathbf{C}$, c) $2\mathbf{B} - \mathbf{C}^\mathsf{T}$.

**4.6.•** *Elemenkénti mátrixművelet a digitális képfeldolgozásban.* Egy leegyszerűsített képformátummal dolgozunk: az egészelemű $\mathbf{A}_{m \times n}$ mátrix reprezentáljon egy $m \times n$ képpontból álló szürkeárnyalatos képet. Minden mátrixelem egy képpont árnyalatát adja meg a $\{0, 1, \ldots k\}$ tartományból, ahol 0 a fekete, $k - 1$ a fehér színnek felel meg és $k$ az átlátszó pixeleket jelöli. Legyen egy képen a háttér átlátszó, és legyen $\mathbf{B}_{m \times n}$ egy tetszőleges másik kép azonos módon reprezentáló mátrixa. Konstruáljuk meg azt a $\odot$ jellel jelölt műveletet, amellyel az elemenkénti
$$\mathbf{A} \odot \mathbf{B} := [a_{ij} \odot b_{ij}]$$
mátrixműveletet az $\mathbf{A}$ kép hátterébe másolja a $\mathbf{B}$ képet. Képletben:
$$a_{ij} \odot b_{ij} = \begin{cases} b_{ij}, & \text{ha } a_{ij} = k, \\ a_{ij}, & \text{egyébként.} \end{cases}$$
A megoldásban használhatjuk a $x \mapsto \lfloor x \rfloor$ függvényt, mely egy $x$ számhoz annak alsó egész részét rendeli.

**4.7.** $\mathbb{R}^{m \times n}$ *bázisa.* Adjuk meg az $\mathbb{R}^{m \times n}$ tér egy bázisát.

**4.8.** *Mátrixok által kifeszített altér.* Jellemezzük az $\mathbb{R}^{2 \times 2}$ térnek azt az alterét, melyet az alábbi megadott $\mathbf{A}$, $\mathbf{B}$ és $\mathbf{C}$ mátrixok feszítenek ki! Másként fogalmazva: milyen összefüggések állnak fönn azon $2 \times 2$-es valós mátrixok elemei között, melyek az alábbi mátrixok lineáris kombinációiként állnak elő?
$$\mathbf{A} = \begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}.$$

#### Mátrixszorzás

**4.14. példa (Mátrixok szorzása).** *Legyen*
$$\mathbf{A} = \begin{bmatrix} 1 & 1 \\ 2 & 1 \\ 0 & 3 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 1 & 1 & 2 \\ 2 & 1 & 0 \end{bmatrix}$$
*Számítsuk ki az $(\mathbf{AB})_{21}$ elemet, majd az $\mathbf{AB}$ mátrixot.*

*Megoldás.* A szorzat második sorának elemei az $\mathbf{A}$ második sorának $\mathbf{B}$ oszlopaival való szorzatából kaphatók meg:
$$\begin{bmatrix} 1 & 1 \\ 2 & 1 \\ 0 & 3 \end{bmatrix}\begin{bmatrix} 1 & 1 & 2 \\ 2 & 1 & 0 \end{bmatrix} = \begin{bmatrix} * & * & * \\ 4 & 3 & 4 \\ * & * & * \end{bmatrix} \qquad \square$$

**4.9.•** Adva vannak az alábbi mátrixok!
$$\mathbf{A} = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 1 & 0 \end{bmatrix} \quad \mathbf{B} = \begin{bmatrix} 1 & 1 & 0 \\ 2 & 1 & 1 \end{bmatrix} \quad \mathbf{C} = \begin{bmatrix} 1 & 1 \\ 2 & 2 \\ 1 & 0 \end{bmatrix} \quad \mathbf{D} = \begin{bmatrix} 3 & 2 \\ 1 & 0 \end{bmatrix}$$
Számítsuk ki a következő kifejezések közül azok értékét, amelyek értelmezve vannak! a) $\mathbf{AB}$, b) $\mathbf{AB}^\mathsf{T} - \mathbf{D}$, c) $\mathbf{BC}$, d) $\mathbf{CB}$, e) $(\mathbf{DA})\mathbf{C}$.

**4.10.•** *A szorzás nem felcserélhető.* Legyen
$$\mathbf{A} = \begin{bmatrix} 0 & 1 \\ 2 & 3 \\ 2 & 1 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 0 & 1 & 2 \\ 3 & 2 & 1 \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} 0 & 1 \\ 2 & 1 \end{bmatrix},$$
$$\mathbf{D} = \begin{bmatrix} 6 & 6 \\ -2 & -1 \end{bmatrix}, \quad \mathbf{E} = \begin{bmatrix} -2 & -6 \\ 2 & 5 \end{bmatrix}.$$
Döntsük el, hogy fönnállnak-e az $\mathbf{AB} = \mathbf{BA}$, $\mathbf{BC} = \mathbf{CB}$, $\mathbf{CD} = \mathbf{DC}$ és $\mathbf{DE} = \mathbf{ED}$ egyenlőségek.

#### Blokkmátrix

**4.11.** *$2 \times 2$-es blokkmátrixok szorzása.* Legyen $\mathbf{A}$ és $\mathbf{B}$ két $2 \times 2$-es blokkmátrix, azaz legyen
$$\mathbf{A} = \begin{bmatrix} \mathbf{A}_{11} & \mathbf{A}_{12} \\ \mathbf{A}_{21} & \mathbf{A}_{22} \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} \mathbf{B}_{11} & \mathbf{B}_{12} \\ \mathbf{B}_{21} & \mathbf{B}_{22} \end{bmatrix}.$$
Írjuk fel szorzatukat a blokkok szorzatai segítségével.

**4.12.•** Végezzük el az $\mathbf{A} + 3\mathbf{C}$ és az $\mathbf{AB}$ műveleteket közönséges mátrixműveletekkel és blokkmátrixként is számolva, ha
$$\mathbf{A} = \left[\begin{array}{cc|cc} 1 & 0 & 1 & 0 \\ 0 & 1 & 1 & 2 \\ \hline 0 & 0 & 3 & 0 \end{array}\right], \quad \mathbf{B} = \left[\begin{array}{cc} 2 & 4 \\ 1 & 5 \\ \hline 2 & 2 \\ 0 & 1 \end{array}\right], \quad \mathbf{C} = \left[\begin{array}{cc|cc} 0 & 2 & 0 & 0 \\ 2 & 0 & 0 & 0 \\ \hline 1 & 1 & 1 & 1 \end{array}\right].$$

#### Mátrixműveletek $\mathbb{Z}_m$-ben

A mátrixműveletek minden további nélkül értelmezhetők $\mathbb{Z}_m$ fölötti mátrixokra is (általában bármely gyűrű fölötti mátrixokra, ld. az A. fejezetet a függelékben).

**4.13.•** Egy lineáris kód $\mathbf{G}$ generátormátrixa és $\mathbf{H}$ ellenőrző mátrixa eleget tesz a $\mathbf{GH}^\mathsf{T} = \mathbf{O}$ összefüggésnek. Ellenőrizzük ezt a $[4, 2, 3]_3$ Hamming kód esetén a következő mátrixokkal az $\mathbb{F}_3$ testben számolva:
$$\mathbf{G} = \begin{bmatrix} 1 & 0 & 1 & 2 \\ 0 & 1 & 1 & 1 \end{bmatrix} \quad \mathbf{H} = \begin{bmatrix} 2 & 2 & 1 & 0 \\ 1 & 2 & 0 & 1 \end{bmatrix}$$

#### Hipermátrixok

**4.14.** *Hipermátrixok külső szorzata.* A vektorok diadikus szorzatát általánosítja a következő definíció: Legyen $\mathbf{A} \in S^{n_1 \times \cdots \times n_d}$ egy $d$-edrendű és $\mathbf{B} \in S^{m_1 \times \cdots \times m_e}$ egy $e$-edrendű hipermátrix. Külső szorzatukon azt a $(d + e)$-edrendű
$$\mathbf{C} = [c_{i_1 \ldots i_d j_1 \ldots j_e}]_{i_1, \ldots, i_d, j_1, \ldots, j_e = 1}^{n_1, \ldots, n_d, m_1, \ldots, m_e} = \mathbf{A} \otimes \mathbf{B} \in S^{n_1 \times \cdots \times n_d \times m_1 \times \cdots \times m_e}$$
hipermátrixot értjük, melyre $c_{i_1 \ldots i_d j_1 \ldots j_e} = a_{i_1 \ldots i_d} b_{j_1 \ldots j_e}$. Számítsuk ki az
$$\begin{bmatrix} 0 \\ 1 \\ 2 \end{bmatrix} \otimes \begin{bmatrix} 0 & 1 \\ 2 & 3 \\ 4 & 0 \end{bmatrix}$$
hipermátrixot!

**4.15.** *Multilineáris mátrixszorzás.* Definiáljunk egy hipermátrixműveletet a következőképp. Legyen $\mathbf{X}_1 = [x_{ij}^{(1)}] \in S^{m_1 \times n_1}, \ldots, \mathbf{X}_d = [x_{ij}^{(d)}] \in S^{m_d \times n_d}$ tetszőleges $d$ mátrix, és legyen $\mathbf{A} \in S^{n_1 \times \cdots \times n_d}$ egy hipermátrix. Ekkor a $\mathbf{B} = (\mathbf{X}_1, \ldots, \mathbf{X}_d) \cdot \mathbf{A}$ *multilineáris mátrixszorzatot* a
$$b_{i_1 \ldots i_d} = \sum_{j_1, \ldots, j_d = 1}^{n_1, \ldots, n_d} x_{i_1 j_1}^{(1)} \ldots x_{i_d j_d}^{(d)} a_{j_1 \ldots j_d},$$
képlet definiálja, ahol $\mathbf{B} = [b_{i_1 \ldots i_d}]_{i_1, \ldots, i_d = 1}^{m_1, \ldots, m_d}$. Igazoljuk, hogy a) ha $d = 1$, $n_1 = n$ és $m_1 = 1$, akkor e szorzás megegyezik a skaláris szorzással; b) ha $d = 2$, $m_1 = m_2 = 1$ és $\mathbf{X}_1 = \mathbf{X}_2$, akkor e szorzás kvadratikus alakot ad.

**4.16.** *Vektorok Segre-féle külső szorzata.* Legyen $n_1, n_2, \ldots, n_d \in \mathbb{N}^+$ és legyen $\mathbf{a}_i = (a_{i1}, a_{i2}, \ldots, a_{in_i}) \in S^{n_i}$ ($i = 1, 2, \ldots, d$). E vektorok *Segre-féle külső szorzatán* az
$$\mathbf{a}_1 \otimes \mathbf{a}_2 \otimes \cdots \otimes \mathbf{a}_d = [a_{1i_1} a_{2i_2} \ldots a_{di_d}]_{i_1, i_2, \ldots, i_d = 1}^{n_1, n_2, \ldots, n_d}$$
hipermátrixot értjük. Számítsuk ki a következő Segre-féle külső szorzatot:
$$\begin{bmatrix} 0 \\ 1 \\ 2 \end{bmatrix} \otimes \begin{bmatrix} 1 \\ 0 \\ 2 \end{bmatrix} \otimes \begin{bmatrix} 1 \\ 2 \\ 0 \end{bmatrix}.$$

## A mátrixszorzás használata

*Mátrixszorzással az eddig tanultak áttekinthetőbbé és könnyebben kezelhetővé válnak (pl. vektorok lineáris kombinációja, az egyenletrendszerek és megoldásuk felírása).*

### Skaláris szorzat és diadikus szorzat mátrixszorzatos alakja

Két oszlopvektor nem szorozható össze, ha 1-nél nagyobb dimenziósak. Viszont az egyikük transzponálása után a szorzás elvégezhető.

Legyen $\mathbf{a}$ és $\mathbf{b}$ két $\mathbb{R}^n$-beli vektor. Az $\mathbf{a}^\mathsf{T}\mathbf{b}$ szorzat a két vektor skaláris szorzatát adja, azaz
$$\mathbf{a}^\mathsf{T}\mathbf{b} = \mathbf{a} \cdot \mathbf{b},$$
ugyanis
$$\mathbf{a}^\mathsf{T}\mathbf{b} = \begin{bmatrix} a_1 & a_2 & \ldots & a_n \end{bmatrix} \begin{bmatrix} b_1 \\ b_2 \\ \vdots \\ b_n \end{bmatrix} = a_1 b_1 + a_2 b_2 + \ldots + a_n b_n = \mathbf{a} \cdot \mathbf{b}.$$
Ha a második vektort transzponáljuk, a két vektor lehet különböző dimenziós is.

**4.15. definíció (Diadikus szorzat).** *Legyen $\mathbf{u} \in \mathbb{R}^m$, $\mathbf{v} \in \mathbb{R}^n$. Az $\mathbf{u}\mathbf{v}^\mathsf{T}$ szorzatot a két vektor diadikus szorzatának, röviden diádnak nevezzük. E szorzat egy $m \times n$-es mátrix:*
$$\mathbf{u}\mathbf{v}^\mathsf{T} = \begin{bmatrix} u_1 \\ u_2 \\ \vdots \\ u_m \end{bmatrix} \begin{bmatrix} v_1 & v_2 & \ldots & v_n \end{bmatrix} = \begin{bmatrix} u_1 v_1 & u_1 v_2 & \ldots & u_1 v_n \\ u_2 v_1 & u_2 v_2 & \ldots & u_2 v_n \\ \vdots & \vdots & \ddots & \vdots \\ u_m v_1 & u_m v_2 & \ldots & u_m v_n \end{bmatrix}.$$
*Két vektor diadikus szorzatát $\mathbf{u} \otimes \mathbf{v}$ jelöli.*

**4.16. példa (Skaláris és diadikus szorzat).** *Legyen $\mathbf{u} = (1, 0, 2)$, $\mathbf{v} = (3, 2, 1)$. Írjuk fel mátrixszorzatos alakba skaláris és diadikus szorzatukat, és számítsuk ki!*

*Megoldás.*
$$\mathbf{u} \cdot \mathbf{v} = \mathbf{u}^\mathsf{T}\mathbf{v} = \begin{bmatrix} 1 & 0 & 2 \end{bmatrix} \begin{bmatrix} 3 \\ 2 \\ 1 \end{bmatrix} = 5,$$
$$\mathbf{u} \otimes \mathbf{v} = \mathbf{u}\mathbf{v}^\mathsf{T} = \begin{bmatrix} 1 \\ 0 \\ 2 \end{bmatrix} \begin{bmatrix} 3 & 2 & 1 \end{bmatrix} = \begin{bmatrix} 3 & 2 & 1 \\ 0 & 0 & 0 \\ 6 & 4 & 2 \end{bmatrix} \qquad \square$$

### Lineáris egyenletrendszer mátrixszorzatos alakja

A mátrixszorzást felhasználva a lineáris egyenletrendszerek egyszerű alakba írhatók.

**4.17. állítás (Lineáris egyenletrendszer mátrixszorzatos alakja).** *Ha $\mathbf{A}$ jelöli egy egyenletrendszer együtthatómátrixát, illetve $\mathbf{b}$ a konstans tagok és $\mathbf{x}$ az ismeretlenek oszlopvektorát, azaz*
$$\mathbf{A} = \begin{bmatrix} a_{11} & a_{12} & \ldots & a_{1n} \\ a_{21} & a_{22} & \ldots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \ldots & a_{mn} \end{bmatrix}, \quad \mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix}, \quad \text{és} \quad \mathbf{b} = \begin{bmatrix} b_1 \\ b_2 \\ \vdots \\ b_m \end{bmatrix},$$
*akkor az*
$$\begin{alignedat}{9}
a_{11}x_1 &{}+{}& a_{12}x_2 &{}+{}& \ldots &{}+{}& a_{1n}x_n &{}={}& b_1 \\
a_{21}x_1 &{}+{}& a_{22}x_2 &{}+{}& \ldots &{}+{}& a_{2n}x_n &{}={}& b_2 \\
\vdots && \vdots && && \vdots && \;\,\vdots \\
a_{m1}x_1 &{}+{}& a_{m2}x_2 &{}+{}& \ldots &{}+{}& a_{mn}x_n &{}={}& b_m
\end{alignedat}$$
*egyenletrendszer $\mathbf{Ax} = \mathbf{b}$ alakba írható.*

Könnyen ellenőrizhető a mátrixszorzás elvégzésével, hogy a
$$2x_1 + 3x_2 - x_3 = 5, \qquad \begin{alignedat}{9} ax &&&{}={}& u \\ && by &{}={}& v \\ && cz &{}={}& w \end{alignedat} \qquad \text{és} \qquad \begin{alignedat}{9} x &{}+{}& 2y &{}={}& 1 \\ && y &{}={}& 1 \\ && 0 &{}={}& 1 \end{alignedat}$$
egyenletrendszerek mátrixszorzatos alakjai rendre:
$$\begin{bmatrix} 2 & 3 & -1 \end{bmatrix}\begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = 5, \quad \begin{bmatrix} a & 0 & 0 \\ 0 & b & 0 \\ 0 & 0 & c \end{bmatrix}\begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} u \\ v \\ w \end{bmatrix}, \quad \begin{bmatrix} 1 & 2 \\ 0 & 1 \\ 0 & 0 \end{bmatrix}\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix}.$$

**4.18. példa (Szimultán egyenletrendszer mátrixszorzatos alak).** *Írjuk az alábbi két egyenletrendszert egyetlen mátrixszorzatos alakba!*
$$\begin{alignedat}{9} 2x_{11} &{}+{}& 3x_{21} &{}={}& 7 \\ 3x_{11} &{}-{}& 4x_{21} &{}={}& 2 \end{alignedat} \qquad \begin{alignedat}{9} 2x_{12} &{}+{}& 3x_{22} &{}={}& 9 \\ 3x_{12} &{}-{}& 4x_{22} &{}={}& 5 \end{alignedat}$$

*Megoldás.* A két egyenletrendszer mátrixszorzatos alakjai külön-külön
$$\begin{bmatrix} 2 & 3 \\ 3 & -4 \end{bmatrix}\begin{bmatrix} x_{11} \\ x_{21} \end{bmatrix} = \begin{bmatrix} 7 \\ 2 \end{bmatrix}, \quad \begin{bmatrix} 2 & 3 \\ 3 & -4 \end{bmatrix}\begin{bmatrix} x_{12} \\ x_{22} \end{bmatrix} = \begin{bmatrix} 9 \\ 5 \end{bmatrix}.$$
Ezek egyetlen mátrixszorzattá olvaszthatók:
$$\begin{bmatrix} 2 & 3 \\ 3 & -4 \end{bmatrix}\begin{bmatrix} x_{11} & x_{12} \\ x_{21} & x_{22} \end{bmatrix} = \begin{bmatrix} 7 & 9 \\ 2 & 5 \end{bmatrix}.$$
Általánosan a szimultán egyenletrendszerek $\mathbf{AX} = \mathbf{B}$ alakba írhatók, ahol $\mathbf{X}$ az ismeretlenekből, $\mathbf{B}$ a jobb oldalakból alkotott mátrix. $\square$

### Lineáris helyettesítés mátrixszorzatos alakja

Az egyenletrendszer mátrixszorzatos alakjához hasonlóan adódik a lineáris helyettesítés mátrixszorzatos alakja. Egyszerűen csak úgy kell tekintenünk az $\mathbf{Ax} = \mathbf{b}$ egyenlőségre, hogy ott $\mathbf{b}$ koordinátái a helyettesítendő változók, melyek helyébe az $\mathbf{x}$ koordinátáinak egy lineáris kifejezését helyettesítjük. Ilyenkor inkább a $\mathbf{b} = \mathbf{Ax}$ alakot használjuk, és az $\mathbf{A}$ mátrixot a *lineáris helyettesítés mátrixának* nevezzük. Részletesebben lásd még a 4.36. feladatot.

Példaként íme egy lineáris helyettesítés és mátrixszorzatos alakja:
$$\begin{aligned} x &= 3a + 2b + 4c \\ y &= a - 3b + 2c \\ z &= 2a - b + 2c \end{aligned} \qquad \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 3 & 2 & 4 \\ 1 & -3 & 2 \\ 2 & -1 & 2 \end{bmatrix}\begin{bmatrix} a \\ b \\ c \end{bmatrix}.$$

### Szorzás vektorral

Egy $m \times n$-es mátrix vektorral kétféleképp szorozható: jobbról egy $n \times 1$-es oszlopvektorral, balról egy $1 \times m$-es sorvektorral.

Az $\mathbf{Ax} = \mathbf{b}$ egyenletrendszer oszlopmodelljéből láttuk, hogy az egyenletrendszer bal oldala az $\mathbf{A}$ oszlopvektorainak az $\mathbf{x}$ koordinátáival vett lineáris kombinációja. Hasonló állítás igaz a sorvektorral balról való szorzásra is.

**4.19. állítás (Mátrixszorzás és lineáris kombináció).** *Legyen $\mathbf{A}$ $m \times n$-es mátrix, $\mathbf{x}$ $n$-dimenziós, $\mathbf{y}$ $m$-dimenziós vektor. Ekkor az $\mathbf{Ax}$ szorzat az $\mathbf{A}$ oszlopvektorainak*
$$\mathbf{a}_{*1}x_1 + \mathbf{a}_{*2}x_2 + \cdots + \mathbf{a}_{*n}x_n$$
*lineáris kombinációját, míg az $\mathbf{y}^\mathsf{T}\mathbf{A}$ szorzat az $\mathbf{A}$ sorvektorainak*
$$\mathbf{a}_{1*}y_1 + \mathbf{a}_{2*}y_2 + \cdots + \mathbf{a}_{m*}y_m$$
*lineáris kombinációját adja.*

**4.20. példa (Nulltér felírása mátrixszorzással).** *Írjuk fel az*
$$\begin{bmatrix} 1 & 2 & 3 & 4 & 5 \\ 2 & 3 & 5 & 7 & 11 \\ 0 & 1 & 1 & 1 & -1 \end{bmatrix}$$
*mátrix nullterének vektorait egy mátrix és egy vektor szorzataként!*

*Megoldás.* A nulltér, azaz a mátrixhoz tartozó homogén lineáris egyenletrendszer megoldásainak tere könnyen leolvasható a redukált lép-

csős alakból.
$$\begin{bmatrix} 1 & 2 & 3 & 4 & 5 \\ 2 & 3 & 5 & 7 & 11 \\ 0 & 1 & 1 & 1 & -1 \end{bmatrix} \Rightarrow \begin{bmatrix} 1 & 2 & 3 & 4 & 5 \\ 0 & 1 & 1 & 1 & -1 \\ 0 & 0 & 0 & 0 & 0 \end{bmatrix} \Rightarrow \begin{bmatrix} 1 & 0 & 1 & 2 & 7 \\ 0 & 1 & 1 & 1 & -1 \\ 0 & 0 & 0 & 0 & 0 \end{bmatrix}.$$
A szabad változókhoz rendelt paraméterek legyenek $x_3 = t_1$, $x_4 = t_2$, $x_5 = t_3$, amiből $x_1 = -t_1 - 2t_2 - 7t_3$ és $x_2 = -t_1 - t_2 + t_3$. Innen
$$\begin{bmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \\ x_5 \end{bmatrix} = t_1\begin{bmatrix} -1 \\ -1 \\ 1 \\ 0 \\ 0 \end{bmatrix} + t_2\begin{bmatrix} -2 \\ -1 \\ 0 \\ 1 \\ 0 \end{bmatrix} + t_3\begin{bmatrix} -7 \\ 1 \\ 0 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} -1 & -2 & -7 \\ -1 & -1 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} t_1 \\ t_2 \\ t_3 \end{bmatrix}. \qquad \square$$

▶ Vegyük észre, hogy a redukált lépcsős alak és a megoldás blokkszerkezete egyszerű kapcsolatot mutat:
$$\begin{bmatrix} \mathbf{I}_2 & \mathbf{S} \\ \mathbf{O} & \mathbf{O} \end{bmatrix}, \qquad \mathbf{x} = \begin{bmatrix} -\mathbf{S} \\ \mathbf{I}_3 \end{bmatrix}\mathbf{t},$$
ahol $\mathbf{t}$ a paraméterek vektora. Ez általánosítható tetszőleges homogén, és inhomogén lineáris egyenletrendszerekre (ld. a 4.53. feladatot).

Könnyen igazolhatók azok az összefüggések, melyeket a standard egységvektorokkal való szorzással kapunk. Jelölje $\mathbf{e}_i = (0, 0, \ldots, 1, \ldots, 0)$ azt a vektort, melynek $i$-edik koordinátája 1, a többi 0.

**4.21. állítás (Mátrix elemeinek, sor- és oszlopvektorainak előállítása).** *Legyen $\mathbf{A}$ egy $m \times n$-es mátrix, $\mathbf{e}_i$ $m$-dimenziós, $\mathbf{e}_j$ $n$-dimenziós standard egységvektor. Ekkor a standard $\mathbf{e}_i$ sorvektorral balról való szorzás a mátrix $i$-edik sorvektorát, az $\mathbf{e}_j$-vel jobbról való szorzás a mátrix $j$-edik oszlopvektorát adja, azaz*
$$\mathbf{e}_i^\mathsf{T}\mathbf{A} = \mathbf{a}_{i*} \text{ és } \mathbf{A}\mathbf{e}_j = \mathbf{a}_{*j},$$
*továbbá*
$$\mathbf{e}_i^\mathsf{T}(\mathbf{A}\mathbf{e}_j) = (\mathbf{e}_i^\mathsf{T}\mathbf{A})\mathbf{e}_j = a_{ij}.$$

Az $\mathbf{e}_i\mathbf{e}_j^\mathsf{T}$ diád egy olyan mátrix, melynek $(i, j)$-indexű eleme 1, az összes többi 0:
$$\mathbf{e}_i\mathbf{e}_j^\mathsf{T} = \begin{bmatrix} 0 \\ \vdots \\ 1 \\ \vdots \\ 0 \end{bmatrix} \begin{bmatrix} 0 & \ldots & 1 & \ldots & 0 \end{bmatrix} = \begin{bmatrix} 0 & \ldots & 0 & \ldots & 0 \\ \vdots & & \vdots & & \vdots \\ 0 & \ldots & 1 & \ldots & 0 \\ \vdots & & \vdots & & \vdots \\ 0 & \ldots & 0 & \ldots & 0 \end{bmatrix}.$$

### A báziscsere mátrixszorzatos alakja

Ha egy vektornak két különböző bázisban is meg van adva a koordinátás alakja, akkor az egyikből a másikat egy egyszerű mátrixszorzással is megkaphatjuk.

**4.22. példa (Áttérés standard bázisra).** *Az $\mathbb{R}^3$ térnek $\mathcal{B} = \{ (1, 2, 3), (0, 2, 3), (3, 5, 8) \}$ egy bázisa. Az e bázisban megadott $[\mathbf{v}]_{\mathcal{B}}$ vektornak írjuk fel a koordinátás alakját a standard bázisban egyetlen mátrixszorzással. Mi a $\mathbf{v}$ vektor standard koordinátás alakja, ha $[\mathbf{v}]_{\mathcal{B}} = (3, 2, -1)$?*

*Megoldás.* $[\mathbf{v}]_{\mathcal{B}} = (3, 2, -1)$ azt jelenti, hogy
$$\mathbf{v} = 3\begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix} + 2\begin{bmatrix} 0 \\ 2 \\ 3 \end{bmatrix} - \begin{bmatrix} 3 \\ 5 \\ 8 \end{bmatrix} = \begin{bmatrix} 0 \\ 5 \\ 7 \end{bmatrix},$$
ami mátrixszorzatos alakban
$$\mathbf{v} = \begin{bmatrix} 1 & 0 & 3 \\ 2 & 2 & 5 \\ 3 & 3 & 8 \end{bmatrix}\begin{bmatrix} 3 \\ 2 \\ -1 \end{bmatrix} = \begin{bmatrix} 0 \\ 5 \\ 7 \end{bmatrix}.$$
Legyen $[\mathbf{v}]_{\mathcal{B}} = (x, y, z)$. Ekkor
$$\mathbf{v} = x\begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix} + y\begin{bmatrix} 0 \\ 2 \\ 3 \end{bmatrix} + z\begin{bmatrix} 3 \\ 5 \\ 8 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 3 \\ 2 & 2 & 5 \\ 3 & 3 & 8 \end{bmatrix}\begin{bmatrix} x \\ y \\ z \end{bmatrix}. \qquad \square$$

E példa a következő definícióhoz és állításhoz vezet:

**4.23. definíció (Áttérés mátrixa).** *Legyen $\mathcal{B} = \{ \mathbf{b}_1, \mathbf{b}_2, \ldots, \mathbf{b}_n \}$ a $\mathcal{V}$ vektortér bázisa és $\mathcal{C}$ egy $\mathcal{V}$-t tartalmazó valamely (véges dimenziós) vektortér egy bázisa (például a $\mathcal{V}$ egy másik bázisa). A $\mathcal{B}$ vektorainak a $\mathcal{C}$ bázisban felírt koordinátás alakjaiból képzett mátrixot a $\mathcal{B}$ bázisról a $\mathcal{C}$-re való áttérés mátrixának nevezzük. Ennek alakja tehát*
$$\mathbf{A}_{\mathcal{C} \leftarrow \mathcal{B}} = [\, [\mathbf{b}_1]_{\mathcal{C}} \mid [\mathbf{b}_2]_{\mathcal{C}} \mid \cdots \mid [\mathbf{b}_n]_{\mathcal{C}} \,]$$

**4.24. állítás (Koordináták változása a bázis cseréjénél).** *Ha $\mathcal{B}$ a $\mathcal{V}$ vektortér egy bázisa, $\mathcal{C}$ egy $\mathcal{V}$-t tartalmazó vektortér egy bázisa és $\mathbf{A}_{\mathcal{C} \leftarrow \mathcal{B}}$ az áttérés mátrixa, akkor bármely $\mathbf{v}$ vektor $\mathcal{B}$-, illetve $\mathcal{C}$-beli koordinátás alakja közt fennáll a*
$$[\mathbf{v}]_{\mathcal{C}} = \mathbf{A}_{\mathcal{C} \leftarrow \mathcal{B}}[\mathbf{v}]_{\mathcal{B}}$$
*összefüggés.*

*Bizonyítás.* Legyen $[\mathbf{v}]_{\mathcal{B}} = (v_1, v_2, \ldots, v_n)$. A koordinátás alak jelentése szerint
$$\mathbf{v} = v_1\mathbf{b}_1 + v_2\mathbf{b}_2 + \ldots + v_n\mathbf{b}_n.$$
Ennek koordinátás alakja a $\mathcal{C}$ bázisban
$$\begin{aligned}
[\mathbf{v}]_{\mathcal{C}} &= v_1[\mathbf{b}_1]_{\mathcal{C}} + v_2[\mathbf{b}_2]_{\mathcal{C}} + \ldots + v_n[\mathbf{b}_n]_{\mathcal{C}} \\
&= [\, [\mathbf{b}_1]_{\mathcal{C}} \mid [\mathbf{b}_2]_{\mathcal{C}} \mid \cdots \mid [\mathbf{b}_n]_{\mathcal{C}} \,][\mathbf{v}]_{\mathcal{B}} \\
&= \mathbf{A}_{\mathcal{C} \leftarrow \mathcal{B}}[\mathbf{v}]_{\mathcal{B}}. \qquad \square
\end{aligned}$$

▶ A 4.22. példában a $\mathcal{B}$ bázisról a standard $\mathcal{E} = \{ \mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3 \}$ bázisra tértünk át, tehát az áttérés mátrixát jelölheti $\mathbf{A}_{\mathcal{E} \leftarrow \mathcal{B}}$.

**4.25. példa (Áttérés mátrixa).** *Legyen $\mathcal{E}$ az $\mathbb{R}^4$ standard bázisa, és $\mathcal{B}$ a 3.27. és a 3.28. példákban is szereplő $\mathbf{b}_1 = (1, 1, 0, -2)$ és $\mathbf{b}_2 = (2, 3, 3, -2)$ vektorok által kifeszített altér. Írjuk fel a $\mathcal{B}$-ről $\mathcal{E}$-re való áttérés mátrixát, és adjuk meg a $(-1, 1)_{\mathcal{B}}$ és a $(-3, 2)_{\mathcal{B}}$ vektorok $\mathcal{E}$-beli koordinátás alakját!*

*Megoldás.* Az áttérés mátrixa
$$\mathbf{A}_{\mathcal{E} \leftarrow \mathcal{B}} = [\, [\mathbf{b}_1]_{\mathcal{E}} \mid [\mathbf{b}_2]_{\mathcal{E}} \,] = \begin{bmatrix} 1 & 2 \\ 1 & 3 \\ 0 & 3 \\ -2 & -2 \end{bmatrix}.$$
Így a két vektor koordinátás alakja a standard bázisban
$$\begin{bmatrix} 1 & 2 \\ 1 & 3 \\ 0 & 3 \\ -2 & -2 \end{bmatrix}\begin{bmatrix} -1 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \\ 2 \\ 3 \\ 0 \end{bmatrix}, \quad \begin{bmatrix} 1 & 2 \\ 1 & 3 \\ 0 & 3 \\ -2 & -2 \end{bmatrix}\begin{bmatrix} -3 \\ 2 \end{bmatrix} = \begin{bmatrix} 1 \\ 3 \\ 6 \\ 2 \end{bmatrix}. \qquad \square$$

### Bázisfelbontás

A 3.23. tétel második pontja szerint az $\mathbf{A}$ mátrix oszlopai és redukált lépcsős alakjának oszlopai közt azonos lineáris kapcsolatok állnak fenn. A redukált lépcsős alak főoszlopainak megfelelő oszlopok az $\mathbf{A}$-ban az $\mathbf{A}$ oszlopterének bázisát adják. Az ezekből az oszlopokból képzett mátrix e bázisról a standard bázisra való áttérés mátrixa. A redukált lépcsős alak oszlopvektorai pedig az $\mathbf{A}$ oszlopvektorainak e bázisra vonatkozó koordinátás alakjai. Mindezek adják a következő állítást:

**4.26. állítás (Bázisfelbontás).** *Jelölje az $\mathbf{A}$ mátrix redukált lépcsős alakjának nemzérus soraiból álló mátrixát $\mathbf{R}$, az $\mathbf{R}$ főoszlopainak megfelelő $\mathbf{A}$-beli oszlopok alkotta részmátrixot $\mathbf{B}$. Ekkor*
$$\mathbf{A} = \mathbf{B}\mathbf{R}.$$

*Bizonyítás.* $\mathbf{B}$ oszlopai az $\mathbf{A}$ oszlopterének bázisát adják, tehát $\mathbf{B}$ a standard bázisra való áttérés mátrixa az $\mathbf{A}$ oszlopterében. Az $\mathbf{R}$ mátrix

$j$-edik oszlopa megegyezik az $\mathbf{A}$ mátrix $j$-edik oszlopának a $\mathbf{B}$ oszlopai alkotta bázisban felírt koordinátás alakjával. Képletben ez azt jelenti, hogy
$$\mathbf{A}_{*j} = \mathbf{B}\mathbf{R}_{*j}, \quad \text{azaz} \quad \mathbf{A} = \mathbf{BR}. \qquad \square$$
Egy mátrix fenti $\mathbf{A} = \mathbf{BR}$ alakú felbontását *bázisfelbontásnak* nevezzük.

**4.27. példa (Bázisfelbontás).** *Határozzuk meg az alábbi mátrix bázisfelbontását, és magyarázzuk meg a két mátrix oszlopainak jelentését!*
$$\mathbf{A} = \begin{bmatrix} 1 & 2 & 1 & 1 \\ 1 & 3 & 2 & 3 \\ 0 & 3 & 3 & 6 \\ -2 & -2 & 0 & 2 \end{bmatrix}$$

*Megoldás.* Az $\mathbf{A}$ mátrix redukált lépcsős alakja:
$$\begin{bmatrix} 1 & 2 & 1 & 1 \\ 1 & 3 & 2 & 3 \\ 0 & 3 & 3 & 6 \\ -2 & -2 & 0 & 2 \end{bmatrix} \Longrightarrow \begin{bmatrix} 1 & 0 & -1 & -3 \\ 0 & 1 & 1 & 2 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix}.$$
E mátrix első két sora alkotja az $\mathbf{R}$ mátrixot, az $\mathbf{A}$ mátrix első és második oszlopa a $\mathbf{B}$ mátrixot, így a felbontás
$$\mathbf{A} = \begin{bmatrix} 1 & 2 \\ 1 & 3 \\ 0 & 3 \\ -2 & -2 \end{bmatrix}\begin{bmatrix} 1 & 0 & -1 & -3 \\ 0 & 1 & 1 & 2 \end{bmatrix} = \mathbf{BR}.$$
Az $\mathbf{R}$ oszlopai az $\mathbf{A}$ oszlopvektorainak koordinátás alakjai a $\mathbf{B}$ oszlopai alkotta bázisban. Ezt már beláttuk a 3.27. és a 3.28. példákban. Eszerint
$$[\mathbf{v}]_{\mathcal{E}} = \mathbf{B}[\mathbf{v}]_{\mathcal{B}},$$
ahol az $\mathcal{E}$ a standard, $\mathcal{B}$ a $\mathbf{B}$ mátrix oszlopai alkotta bázisbeli koordinátás alakot jelöli. Például
$$\begin{bmatrix} 1 \\ 3 \\ 6 \\ 2 \end{bmatrix} = \begin{bmatrix} 1 & 2 \\ 1 & 3 \\ 0 & 3 \\ -2 & -2 \end{bmatrix}\begin{bmatrix} -3 \\ 2 \end{bmatrix}, \quad \text{azaz} \quad [\mathbf{a}_4]_{\mathcal{E}} = \begin{bmatrix} 1 \\ 3 \\ 6 \\ 2 \end{bmatrix}, \; [\mathbf{a}_4]_{\mathcal{B}} = \begin{bmatrix} -3 \\ 2 \end{bmatrix},$$
ahol $\mathbf{a}_4$ az $\mathbf{A}$ negyedik oszlopvektora. $\square$

▶ Ha az $m \times n$-es $\mathbf{A}$ mátrix rangja $r$, akkor az $\mathbf{R}$ mátrix $r \times n$-es, a $\mathbf{B}$ mátrix $m \times r$-es. Ez azt jelenti, hogy az $\mathbf{A}$ mátrixot két olyan mátrix szorzatára bontottuk, ahol az elsőnek az oszlopai, a másodiknak a sorai lineárisan függetlenek.

### Egységmátrix, elemi mátrixok

Egy adott $\mathbf{B}$ mátrixhoz találhatunk olyan $\mathbf{A}$-t, hogy az 1-gyel való szorzáshoz hasonlóan $\mathbf{AB} = \mathbf{B}$ legyen. Például
$$\mathbf{A} = \begin{bmatrix} 3 & -4 \\ -2 & 5 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 2 & -2 \\ 1 & -1 \end{bmatrix}$$
esetén
$$\begin{bmatrix} 3 & -4 \\ -2 & 5 \end{bmatrix}\begin{bmatrix} 2 & -2 \\ 1 & -1 \end{bmatrix} = \begin{bmatrix} 2 & -2 \\ 1 & -1 \end{bmatrix}.$$
Az azonban már nem igaz, hogy $\mathbf{A}$-t bármely $2 \times 2$-es $\mathbf{B}$ mátrixszal szorozva $\mathbf{B}$ lesz az eredmény. Ilyen mátrix is létezik, némi próbálkozás után bárki rátalálhat.

**4.28. definíció (Egységmátrix).** *Az $n \times n$-es*
$$\mathbf{I}_n := \operatorname{diag}(1, 1, \ldots, 1) = \begin{bmatrix} 1 & 0 & \ldots & 0 \\ 0 & 1 & \ldots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \ldots & 1 \end{bmatrix}$$
*mátrixot egységmátrixnak nevezzük.*

> Az *egységmátrix* jelölésére használt $\mathbf{I}$ betű az angol *identity matrix* elnevezés első betűjéből származik. Az *azonosság* vagy *identitás* jelentésű *identity* szó az $\mathbf{IA} = \mathbf{A}$ összefüggésre utal (az $x \mapsto x$ függvényt ugyanezen okból hívjuk identikus függvénynek). Ráadásul az $I$ betű hasonlít legjobban az 1-es számra.

▶ Az egységmátrix elnevezés onnan származik, hogy bármely $m \times n$-es $\mathbf{A}$ mátrixra igaz, hogy
$$\mathbf{I}_m\mathbf{A}_{m \times n} = \mathbf{A}_{m \times n}\mathbf{I}_n = \mathbf{A}_{m \times n},$$
azaz e mátrix hasonló tulajdonsággal rendelkezik, mint a számok közt az egy.
▶ Az egységmátrixszal már találkoztunk: a Gauss–Jordan-módszernél egy $n$-ismeretlenes, $n$ egyenletből álló egyértelműen megoldható egyenletrendszer együtthatómátrixa az elemi sorműveletek során egységmátrixszá transzformálódik!

Az egységmátrixon végrehajtott elemi sorműveletek olyan mátrixokat eredményeznek, melyek kapcsolatot létesítenek az elemi sorműveletek és a mátrixokkal való szorzás között.

**4.29. definíció (Elemi mátrixok).** *Az $\mathbf{I}_n$ egységmátrixon végrehajtott egyetlen elemi sorművelettel kapott mátrixot elemi mátrixnak nevezzük.*

Az alábbi mátrixok elemi mátrixok:
$$\begin{bmatrix} 0 & 0 & 0 & 1 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 1 & 0 & 0 & 0 \end{bmatrix}, \quad \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 5 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}, \quad \begin{bmatrix} 1 & 0 & 2 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}, \quad \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}.$$
Ezt igazolja, hogy mindegyikük $\mathbf{I}_4$-ből származik rendre a következő elemi sorműveletekkel: $S_1 \leftrightarrow S_4$, $5S_2$, $S_1 + 2S_3$, $1S_1$. Az utolsó mátrix az egységmátrix, amely maga is elemi mátrix, mert például egy sorának 1-gyel való szorzásával megkapható.

**4.30. példa (Mátrix balról szorzása elemi mátrixszal).** *Vizsgáljuk meg mi történik, ha az előbbi mátrixokkal balról megszorzunk egy tetszőleges 4-soros mátrixot?*

*Megoldás.* Legyen $\mathbf{A}$ egy 4-sorból, és az egyszerűség kedvéért csak 2 oszlopból álló mátrix.
$$\begin{bmatrix} 0 & 0 & 0 & 1 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 1 & 0 & 0 & 0 \end{bmatrix}\begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \\ a_{31} & a_{32} \\ a_{41} & a_{42} \end{bmatrix} = \begin{bmatrix} a_{41} & a_{42} \\ a_{21} & a_{22} \\ a_{31} & a_{32} \\ a_{11} & a_{12} \end{bmatrix},$$
A szorzás eredményeként fölcserélődött $\mathbf{A}$ első és negyedik sora.
$$\begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 5 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \\ a_{31} & a_{32} \\ a_{41} & a_{42} \end{bmatrix} = \begin{bmatrix} a_{11} & a_{12} \\ 5a_{21} & 5a_{22} \\ a_{31} & a_{32} \\ a_{41} & a_{42} \end{bmatrix},$$
Itt az $\mathbf{A}$ második sora be lett szorozva 5-tel.
$$\begin{bmatrix} 1 & 0 & 2 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \\ a_{31} & a_{32} \\ a_{41} & a_{42} \end{bmatrix} = \begin{bmatrix} a_{11} + 2a_{31} & a_{12} + 2a_{32} \\ a_{21} & a_{22} \\ a_{31} & a_{32} \\ a_{41} & a_{42} \end{bmatrix},$$
A szorzás eredményeként az $\mathbf{A}$ első sorához hozzá lett adva harmadik sorának kétszerese. $\square$

E példa eredménye kimondható tételként, melynek bizonyítása általánosan is úgy történik, mint az előző példában, ezért elhagyjuk:

**4.31. tétel (Elemi sorműveletek mátrixszorzással).** *Legyen $\mathbf{E}$ az az elemi mátrix, melyet $\mathbf{I}_m$-ből egy elemi sorművelettel kapunk. Ha ugyanezt a sorműveletet egy tetszőleges $m \times n$-es $\mathbf{A}$ mátrixra alkalmazzuk, akkor eredményül az $\mathbf{EA}$ mátrixot kapjuk.*

▶ Az elemi sorműveletek mátrixszorzással való elvégzésének nincs számítási praktikuma, annak célja az elemi sorműveletek algebraizálása, s így mélyebb megértése.
▶ Elemi mátrixszal való jobbról szorzás a mátrixon elemi oszlopműveletet hajt végre (ld. a ?? feladatot).

### Vektorokra particionált mátrixok

Megvizsgáljuk a mátrixszorzást, ha legalább az egyik tényezőt vektorokra particionáljuk, és blokkmátrixnak tekintjük. Legyen a következőkben $\mathbf{A}$ egy $m \times t$, $\mathbf{B}$ egy $t \times n$ méretű mátrix.

1. *[sorvektorok] $\cdot$ [oszlopvektorok]:* Bontsuk fel az $\mathbf{A}_{m \times t}$ mátrixot sorvektoraira, és a $\mathbf{B}_{t \times n}$ mátrixot oszlopvektoraira. Ekkor egy $m \times 1$-es blokkmátrixot szorzunk egy $1 \times n$-essel, ami épp az $\mathbf{AB}$ mátrixszorzat definícióját adja:
$$\mathbf{AB} = \left[\begin{array}{c} \mathbf{a}_{1*} \\ \hline \mathbf{a}_{2*} \\ \hline \vdots \\ \hline \mathbf{a}_{m*} \end{array}\right]\begin{bmatrix} \mathbf{b}_{*1} & \ldots & \mathbf{b}_{*n} \end{bmatrix} = \begin{bmatrix} \mathbf{a}_{1*}\mathbf{b}_{*1} & \mathbf{a}_{1*}\mathbf{b}_{*2} & \ldots & \mathbf{a}_{1*}\mathbf{b}_{*n} \\ \mathbf{a}_{2*}\mathbf{b}_{*1} & \mathbf{a}_{2*}\mathbf{b}_{*2} & \ldots & \mathbf{a}_{2*}\mathbf{b}_{*n} \\ \vdots & \vdots & \ddots & \vdots \\ \mathbf{a}_{m*}\mathbf{b}_{*1} & \mathbf{a}_{m*}\mathbf{b}_{*2} & \ldots & \mathbf{a}_{m*}\mathbf{b}_{*n} \end{bmatrix}.$$

2. *[mátrix] $\cdot$ [oszlopvektorok]:* Ekkor egy $1 \times 1$-es blokkmátrixot szorzunk egy $1 \times n$-essel:
$$\mathbf{C} = \mathbf{AB} = \mathbf{A}\begin{bmatrix} \mathbf{b}_{*1} & \mathbf{b}_{*2} & \ldots & \mathbf{b}_{*n} \end{bmatrix} = \begin{bmatrix} \mathbf{A}\mathbf{b}_{*1} & \mathbf{A}\mathbf{b}_{*2} & \ldots & \mathbf{A}\mathbf{b}_{*n} \end{bmatrix}$$
Itt tehát a $\mathbf{C}$ mátrix $j$-edik oszlopvektora az $\mathbf{A}$ mátrix és a $\mathbf{B}$ $j$-edik oszlopának szorzata, vagyis $\mathbf{c}_{*j} = \mathbf{A}\mathbf{b}_{*j}$.

*Ábra. Az $\mathbf{A}$ mátrix és a $\mathbf{B}$ $j$-edik $\mathbf{b}_{*j}$ oszlopának szorzata a $\mathbf{C}$ mátrix $j$-edik $\mathbf{c}_{*j}$ oszlopát adja.*

Ezzel az esettel már találkoztunk a szimultán egyenletrendszerek mátrixszorzatos alakjának fölírásánál (4.18. példa). Ha a fenti sematikus ábra egy szimultán egyenletrendszer mátrixszorzatos alakját reprezentálja, akkor a színesen kiemelt rész a szimultán egyenletrendszer egyetlen egyenletrendszerének felel meg.

3. *[sorvektorok] $\cdot$ [mátrix]:* Ekkor egy $m \times 1$-es blokkmátrixot szorzunk egy $1 \times 1$-essel:
$$\mathbf{C} = \mathbf{AB} = \left[\begin{array}{c} \mathbf{a}_{1*} \\ \hline \mathbf{a}_{2*} \\ \hline \vdots \\ \hline \mathbf{a}_{m*} \end{array}\right]\mathbf{B} = \left[\begin{array}{c} \mathbf{a}_{1*}\mathbf{B} \\ \hline \mathbf{a}_{2*}\mathbf{B} \\ \hline \vdots \\ \hline \mathbf{a}_{m*}\mathbf{B} \end{array}\right]$$
Azaz itt a $\mathbf{C} = \mathbf{AB}$ mátrix $i$-edik sora az $\mathbf{A}$ mátrix $i$-edik sorának $\mathbf{B}$-szerese. Másként írva $\mathbf{c}_{i*} = \mathbf{a}_{i*}\mathbf{B}$.

*Ábra. Az $\mathbf{A}$ mátrix $i$-edik sorának és a $\mathbf{B}$ mátrixnak a szorzata a $\mathbf{C}$ mátrix $i$-edik sorát adja.*

4. *[oszlopvektorok] $\cdot$ [sorvektorok]:* Ekkor egyetlen blokksorból álló mátrixot szorzunk egy blokkoszlopból állóval, azaz egy $1 \times t$-es blokkmátrixot egy $t \times 1$-essel. A skaláris szorzatra emlékeztető összeget kapunk:
$$\mathbf{AB} = \begin{bmatrix} \mathbf{a}_{*1} & \ldots & \mathbf{a}_{*t} \end{bmatrix}\left[\begin{array}{c} \mathbf{b}_{1*} \\ \hline \vdots \\ \hline \mathbf{b}_{t*} \end{array}\right] = \mathbf{a}_{*1}\mathbf{b}_{1*} + \mathbf{a}_{*2}\mathbf{b}_{2*} + \cdots + \mathbf{a}_{*t}\mathbf{b}_{t*}.$$
E felbontásban az $\mathbf{AB}$ mátrixot *diádok összegére* bontottuk! Például az alábbi mátrixszorzatot három diád összegére bontjuk:
$$\begin{bmatrix} 0 & 1 & 2 \\ 3 & 4 & 5 \end{bmatrix}\begin{bmatrix} 1 & 1 \\ -2 & 0 \\ 1 & 1 \end{bmatrix} = \begin{bmatrix} 0 \\ 3 \end{bmatrix}\begin{bmatrix} 1 & 1 \end{bmatrix} + \begin{bmatrix} 1 \\ 4 \end{bmatrix}\begin{bmatrix} -2 & 0 \end{bmatrix} + \begin{bmatrix} 2 \\ 5 \end{bmatrix}\begin{bmatrix} 1 & 1 \end{bmatrix}$$
$$= \begin{bmatrix} 0 & 0 \\ 3 & 3 \end{bmatrix} + \begin{bmatrix} -2 & 0 \\ -8 & 0 \end{bmatrix} + \begin{bmatrix} 2 & 2 \\ 5 & 5 \end{bmatrix} = \begin{bmatrix} 0 & 2 \\ 0 & 8 \end{bmatrix}.$$

> Megjegyezzük, az eredmény maga is egy diád, hisz $\begin{bmatrix} 0 & 2 \\ 0 & 8 \end{bmatrix} = \begin{bmatrix} 2 \\ 8 \end{bmatrix}\begin{bmatrix} 0 & 1 \end{bmatrix}$, tehát egy mátrix többféleképp is felbontható diádok összegére. A mátrixok diádok – azaz 1-rangú – mátrixok összegére való bontása több alapfogalom megközelítésére alkalmas. Például a mátrix rangja definiálható úgy, mint a diadikus felbontásaiban szereplő diádok minimális száma.

E felbontásnak fontos speciális esete az, amikor $\mathbf{A}$ egyetlen sorból, vagy $\mathbf{B}$ egyetlen oszlopból áll. Ekkor az $\mathbf{AB}$ szorzat $\mathbf{B}$ sor-, illetve $\mathbf{A}$ oszlopvektorainak lineáris kombinációja:
$$\begin{bmatrix} 0 & 1 & 2 \end{bmatrix}\begin{bmatrix} 1 & 1 \\ -2 & 0 \\ 1 & 1 \end{bmatrix} = 0\begin{bmatrix} 1 & 1 \end{bmatrix} + 1\begin{bmatrix} -2 & 0 \end{bmatrix} + 2\begin{bmatrix} 1 & 1 \end{bmatrix} = \begin{bmatrix} 0 & 2 \end{bmatrix},$$
$$\begin{bmatrix} 0 & 1 & 2 \\ 3 & 4 & 5 \end{bmatrix}\begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix} = 1\begin{bmatrix} 0 \\ 3 \end{bmatrix} + 0\begin{bmatrix} 1 \\ 4 \end{bmatrix} + 1\begin{bmatrix} 2 \\ 5 \end{bmatrix} = \begin{bmatrix} 2 \\ 8 \end{bmatrix}.$$

**4.32. állítás (A szorzat oszlopai és sorai).** *Az $\mathbf{AB}$ mátrix minden oszlopa az $\mathbf{A}$ oszlopainak és minden sora a $\mathbf{B}$ sorainak lineáris kombinációja.*

*Bizonyítás.* Az $\mathbf{AB}$ mátrix $j$-edik oszlopa
$$(\mathbf{AB})_{*j} = \mathbf{A}\mathbf{b}_{*j} = \mathbf{a}_{*1}b_{1j} + \mathbf{a}_{*2}b_{2j} + \ldots + \mathbf{a}_{*t}b_{tj}$$
az $i$-edik sora pedig
$$(\mathbf{AB})_{i*} = \mathbf{a}_{i*}\mathbf{B} = a_{i1}\mathbf{b}_{1*} + a_{i2}\mathbf{b}_{2*} + \ldots + a_{it}\mathbf{b}_{t*},$$
ami bizonyítja az állítást. $\square$

**4.33. következmény (Szorzat rangja).** *$\operatorname{r}(\mathbf{AB}) \leqslant \operatorname{r}(\mathbf{A})$ és $\operatorname{r}(\mathbf{AB}) \leqslant \operatorname{r}(\mathbf{B})$, így*
$$\operatorname{r}(\mathbf{AB}) \leqslant \min(\operatorname{r}(\mathbf{A}), \operatorname{r}(\mathbf{B})). \tag{4.2}$$

*Bizonyítás.* Az $\mathbf{AB}$ független oszlopainak száma legföljebb annyi, mint $\mathbf{A}$ független oszlopainak száma, hisz oszloptere az $\mathbf{A}$ oszlopterének altere, és $\mathbf{AB}$ független sorainak száma legföljebb annyi, mint $\mathbf{B}$ független sorainak száma, hisz sortere $\mathbf{B}$ sorterének altere. $\square$

### Feladatok

#### Mátrixműveletek

**4.17.•** *Igaz – hamis.* Döntsük el, igazak-e az alábbi állítások? Válaszunkat indokoljuk!
- a) Ha az $\mathbf{AB}$ és a $\mathbf{BA}$ szorzat is értelmezve van, akkor mindkét mátrix négyzetes.
- b) Ha az $\mathbf{AB}$ és a $\mathbf{BA}$ szorzat is értelmezve van, akkor mindkét szorzat négyzetes.
- c) Ha az $(\mathbf{AB})\mathbf{C}$ szorzat értelmezve van, akkor biztosan értelmezve van az $\mathbf{A}(\mathbf{BC})$ szorzat is.

A következőkben legyen
$$\mathbf{A} = \begin{bmatrix} 1 & 2 \\ 4 & 2 \end{bmatrix}, \mathbf{B} = \begin{bmatrix} 4 & 2 \\ 4 & 5 \end{bmatrix}, \mathbf{C} = \begin{bmatrix} -3 & 2 \\ 2 & -1 \end{bmatrix}, \mathbf{D} = \begin{bmatrix} 2 & -1 \\ -1 & 1 \end{bmatrix}.$$
Végezzük el az alábbi műveleteket!

**4.18.** $2\mathbf{A} - 3\mathbf{B}^\mathsf{T}$

**4.19.** $\mathbf{AB} - \mathbf{BA} + \mathbf{AC} - \mathbf{CA}$

**4.20.** $(\mathbf{CD} - \mathbf{DC})(\mathbf{ABC})$

**4.21.** $\mathbf{A}^2 - \mathbf{C}^2$

**4.22.** $(\mathbf{C})_{2*}(\mathbf{D})_{*2}$

**4.23.** $(\mathbf{A})_{*1}(\mathbf{B})_{2*}$

**4.24.** A fenti jelölések mellett igazak-e a következő egyenlőségek?
$$(\mathbf{A} + \mathbf{B})^2 = \mathbf{A}^2 + 2\mathbf{AB} + \mathbf{B}^2, \quad (\mathbf{A} + \mathbf{C})^2 = \mathbf{A}^2 + 2\mathbf{AC} + \mathbf{C}^2.$$

**4.25.** A fenti jelölések mellett igazak-e a következő egyenlőségek?
$$(\mathbf{C} + \mathbf{D})(\mathbf{C} - \mathbf{D}) = \mathbf{C}^2 - \mathbf{D}^2, \quad (\mathbf{A} + \mathbf{D})(\mathbf{A} - \mathbf{D}) = \mathbf{A}^2 - \mathbf{D}^2.$$

Számítsuk ki az alábbi vektorok skaláris és diadikus szorzatát! Írjuk fel mindkét műveletet mátrixszorzatos alakban!

**4.26.** $\mathbf{a} = (1, 2)$, $\mathbf{b} = (0, 1)$

**4.27.** $\mathbf{u} = (1, 2, 0, 1)$, $\mathbf{v} = (0, 1, 2, 3)$

**4.28.** $\mathbf{a} = (1, 2, 0)$, $\mathbf{b} = (0, 1, 3)$

#### Mátrixszorzatos alakok

Írjuk fel az alábbi egyenletrendszerek mátrixszorzatos alakját!

**4.29.** $\begin{aligned} x + y &= 1 \\ x - z &= 2 \\ z &= 3 \end{aligned}$

**4.30.** $3x - 2y + 4z = 5$

**4.31.** $\begin{aligned} 2x + z &= 1 \\ x - y - w &= 2 \\ y + z + w &= 2 \\ 0 &= 3 \end{aligned}$

Írjuk fel az alábbi lineáris helyettesítések mátrixszorzatos alakját!

**4.32.** $\begin{aligned} u &= 2x - 4y \\ v &= x + 2y \end{aligned}$

**4.33.** $\begin{aligned} x &= 3a - 2b + c \\ y &= 2a - c \\ z &= b + 2c \end{aligned}$

**4.34.** $\begin{aligned} x &= 3a + b \\ y &= 2a - b \\ z &= b \end{aligned}$

**4.35.** $\begin{aligned} x &= 3a - 2b + c \\ y &= 2a - c \end{aligned}$

**4.36.•** *Lineáris helyettesítés mátrixszorzatos alakja.* Írjuk fel az $x_1, x_2, \ldots, x_n$ változók lineáris kifejezéseinek az $y_1, y_2, \ldots, y_m$ változók helyébe való helyettesítését általánosan leíró
$$\begin{aligned} y_1 &= a_{11}x_1 + a_{12}x_2 + \ldots + a_{1n}x_n \\ y_2 &= a_{21}x_1 + a_{22}x_2 + \ldots + a_{2n}x_n \\ &\;\;\vdots \\ y_m &= a_{m1}x_1 + a_{m2}x_2 + \ldots + a_{mn}x_n \end{aligned}$$
helyettesítés mátrixszorzatos alakját!

#### Áttérés mátrixa

Írjuk fel az alábbi $\mathcal{B}$ bázisról $\mathcal{C}$-re való áttérés mátrixát, ha $\mathcal{B}$ vektorainak $\mathcal{C}$-beli koordinátás alakját ismerjük. Írjuk fel a megadott vektorok $\mathcal{C}$-beli koordinátás alakját!

**4.37.•** $\mathcal{B} = \{ (1, 1, 1), (0, 2, 2), (0, 0, 3) \}$, $\mathcal{C}$ az $\mathbb{R}^3$ standard bázisa, $(\mathbf{u})_{\mathcal{B}} = (-1, 1, 1)$, $(\mathbf{v})_{\mathcal{B}} = (3, -2, 0)$.

**4.38.•** *Áttérés altérről.* $\mathcal{B} = \{ (1, 1, 0, -2), (0, 1, 3, 2) \}$, $\mathcal{C}$ az $\mathbb{R}^4$ standard bázisa, $(\mathbf{u})_{\mathcal{B}} = (2, 1)$, $(\mathbf{v})_{\mathcal{B}} = (1, 1)$, $(\mathbf{w})_{\mathcal{B}} = (1, 2)$. Vessük össze e feladatot a 3.26. példa első megoldásával és a ?? példával!

#### Bázisfelbontás

Határozzuk meg az alábbi mátrix bázisfelbontását, és magyarázzuk meg a két mátrix oszlopainak jelentését!

**4.39.•** $\mathbf{A} = \begin{bmatrix} 1 & 2 & 3 & 4 & 5 \\ 2 & 4 & 8 & 6 & 2 \\ 1 & 2 & 7 & 0 & -11 \end{bmatrix}$

**4.40.** $\begin{bmatrix} 2 & 4 & 6 \end{bmatrix}$

**4.41.** $\begin{bmatrix} 3 \\ 4 \end{bmatrix}$

**4.42.** $\mathbf{A} = \mathbf{u} \otimes \mathbf{v}$, ahol $\mathbf{u} \in \mathbb{R}^n$, $\mathbf{v} \in \mathbb{R}^m$ tetszőleges zérustól különböző vektorok.

#### Elemi mátrixok

Keressük meg azt az $\mathbf{E}$ mátrixot, mely megoldása az alábbi mátrixegyenletnek!

**4.43.** $\mathbf{E}\begin{bmatrix} a & b \\ c & d \\ e & f \end{bmatrix} = \begin{bmatrix} a & b \\ e & f \\ c & d \end{bmatrix}$

**4.44.** $\mathbf{E}\begin{bmatrix} a & b \\ c & d \\ e & f \end{bmatrix} = \begin{bmatrix} a & b \\ 3c & 3d \\ e & f \end{bmatrix}$

**4.45.** $\mathbf{E}\begin{bmatrix} a & b \\ c & d \\ e & f \end{bmatrix} = \begin{bmatrix} a & b \\ c + 2e & d + 2f \\ e & f \end{bmatrix}$

**4.46.** $\mathbf{E}\begin{bmatrix} a & b \\ c & d \\ e & f \end{bmatrix} = \begin{bmatrix} a - c & b - d \\ c & d \\ e & f \end{bmatrix}$

Elemi sorműveletekkel, mátrixszorzás nélkül határozzuk meg az alábbi mátrixszorzatok értékét!

**4.47.** $\begin{bmatrix} 1 & 0 & 0 \\ -2 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} 2 & 2 & 2 \\ 3 & 3 & 3 \\ 4 & 4 & 4 \end{bmatrix}$

**4.48.** $\begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 2 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & -2 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 3 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} a \\ b \\ c \\ d \end{bmatrix}$

**4.49.•** *[Elemi oszlopműveletek mátrixszorzással]* a) Minden elemi mátrix megkapható az egységmátrixból egyetlen elemi oszlopművelettel is. b) Legyen $\mathbf{E}$ az az elemi mátrix, melyet $\mathbf{I}_n$-ből egy elemi oszlopművelettel kapunk. Ha ugyanezt az oszlopműveletet egy tetszőleges $m \times n$-es $\mathbf{A}$ mátrixra alkalmazzuk, akkor eredményül az $\mathbf{AE}$ mátrixot kapjuk.

#### Blokkmátrixok

Számítsuk ki az alábbi feladatokban megadott mátrixszorzatokat a kijelölt blokkmátrixokat használva!

**4.50.** $\left[\begin{array}{cc|c} 1 & 0 & 1 \\ 0 & 1 & 1 \\ \hline 0 & 0 & 2 \\ 0 & 0 & 3 \end{array}\right]\left[\begin{array}{c|cc} 2 & 3 & 1 \\ 4 & 5 & 1 \\ \hline 0 & 0 & 1 \end{array}\right]$

**4.51.** $\left[\begin{array}{cc|c} 2 & 3 & 1 \\ 4 & 5 & 1 \\ \hline 0 & 0 & 1 \end{array}\right]\left[\begin{array}{cc} 1 & 0 \\ 0 & 1 \\ \hline 0 & 0 \\ 0 & 3 \end{array}\right]$

**4.52.** $\left[\begin{array}{ccc|ccc} 1 & 1 & 1 & 0 & 1 & 0 \\ 1 & 1 & 1 & 0 & 0 & 1 \\ 3 & 3 & 3 & 1 & 0 & 0 \end{array}\right]\left[\begin{array}{cc} 1 & 1 \\ 1 & 1 \\ 1 & 1 \\ \hline 3 & 3 \\ 2 & 3 \\ 3 & 4 \end{array}\right]$

**4.53.** *Lineáris egyenletrendszer megoldásának blokkmátrix alakja.* Tegyük fel, hogy az $r$ rangú $\mathbf{A}$ mátrix első $r$ oszlopa lineárisan független – ez oszlopcserékkel mindig elérhető. Jelölje $\mathbf{B}_r$ az $\mathbf{A}$ első $r$ oszlopából álló mátrixot, és legyen az $\mathbf{A}$, illetve az $[\mathbf{A}|\mathbf{b}]$ bővített mátrix redukált lépcsős alakja
$$\begin{bmatrix} \mathbf{I}_r & \mathbf{S} \\ \mathbf{O} & \mathbf{O} \end{bmatrix} \quad \text{illetve} \quad \left[\begin{array}{cc|c} \mathbf{I}_r & \mathbf{S} & \mathbf{d}_r \\ \mathbf{O} & \mathbf{O} & \mathbf{0} \end{array}\right],$$
ahol $\mathbf{d}_r$ egy $r$-dimenziós vektor. Ekkor
1. az $\mathbf{Ax} = \mathbf{b}$ egyenletrendszer megoldható, és megoldása
$$\mathbf{x} = \begin{bmatrix} \mathbf{d}_r \\ \mathbf{0}_s \end{bmatrix} + \begin{bmatrix} -\mathbf{S} \\ \mathbf{I}_s \end{bmatrix}\mathbf{t}_s,$$
ahol $s$ a szabad változók száma, azaz $s = n - r$, és $\mathbf{t}_s$ a szabad paraméterek vektora, ráadásul $\mathbf{A} = \mathbf{B}_r[\mathbf{I}_r|\mathbf{S}]$ és $\mathbf{b} = \mathbf{B}_r\mathbf{d}_r$, továbbá
2. az $\mathbf{Ax} = \mathbf{0}$ homogén lineáris egyenletrendszer megoldása
$$\mathbf{x} = \begin{bmatrix} -\mathbf{S} \\ \mathbf{I}_s \end{bmatrix}\mathbf{t}_s,$$
ahol a $\begin{bmatrix} -\mathbf{S} \\ \mathbf{I}_s \end{bmatrix}$ mátrix oszlopvektorai a nulltér bázisát alkotják.

#### Vegyes feladatok

**4.54.** A *sudoku* egy olyan logikai játék, melyben egy olyan $9 \times 9$-es mátrixot kell megadni, melynek ismerjük néhány, de nem minden elemét. A feladat a nem ismert elemek meghatározása. A mátrix 9 darab $3 \times 3$-as blokkra van particionálva és eleget tesz annak a feltételnek, hogy minden sorában, minden oszlopában és minden blokkjában az 1-től 9-ig terjedő egészek mindegyike egyszer szerepel. Ez azt jelenti, hogy az egy sorban, egy oszlopban és egy blokkban lévő számok összege mindig 45. Fejezzük ki ezt mátrixműveletekkel, azaz írjunk fel a sudoku tábla $\mathbf{A}$ mátrixát is tartalmazó olyan mátrixegyenleteket, melyeket minden helyesen kitöltött sudoku tábla mátrixa kielégít!

**4.55.** Hány eleme van a $\mathbb{Z}_2^{2 \times 2}$-nek, azaz a kételemű test fölötti $2 \times 2$-es mátrixok terének?

## Megoldások

**4.1.** A két táblázat szorzata:

| | csarnok | hipermarket | piac |
|---|---|---|---|
| Anti | 1350 | 1250 | 1210 |
| Bori | 1425 | 1245 | 1225 |
| Cili | 960 | 830 | 850 |

Tehát Antinak és Borinak a piacon, Cilinek a hipermarketben érdemes vásárolnia.

**4.2.** A két helyettesítést elvégezve:
$$\begin{aligned} x &= 2a + b = 2(-3s + t) + (4s - t) = -2s + t, \\ y &= 3a + b = 3(-3s + t) + (4s - t) = -5s + 2t. \end{aligned}$$
A két helyettesítés kompozíciója a két helyettesítés táblázatának szorzatával megkapható:

| | $a$ | $b$ |
|---|---|---|
| $x$ | 2 | 1 |
| $y$ | 3 | 1 |

$\times$

| | $s$ | $t$ |
|---|---|---|
| $a$ | -3 | 1 |
| $b$ | 4 | -1 |

$=$

| | $s$ | $t$ |
|---|---|---|
| $x$ | -2 | 1 |
| $y$ | -5 | 2 |

**4.3.** A két helyettesítés kompozíciója a két helyettesítés táblázatának szorzatával megkapható. E szorzatból olvasható le, hogy a kompozícióval kapott helyettesítés: $x = s$, $y = t$, $z = u$. Ez azt jelenti, hogy a két helyettesítés valamilyen értelemben egymás inverze.

**4.4.**
1. Kétféleképp adhatjuk meg a táblázatot, ha az első sor és oszlop a tv1-é:

| -re | tv1 | tv2 |
|---|---|---|
| tv1 | 1/2 | 1/4 |
| tv2 | 1/2 | 3/4 |

| -ről | tv1 | tv2 |
|---|---|---|
| tv1 | 1/2 | 1/2 |
| tv2 | 1/4 | 3/4 |

2. A nézők kezdeti eloszlásának táblázatára két lehetőség:

| | arány |
|---|---|
| tv1 | 1/2 |
| tv2 | 1/2 |

| | tv1 | tv2 |
|---|---|---|
| arány | 1/2 | 1/2 |

3. Először válasszuk meg a kérdést a tv1-re: saját nézőinek fele marad ($\frac{1}{2} \cdot \frac{1}{2}$), ehhez jön a tv2 nézőinek negyede ($\frac{1}{2} \cdot \frac{1}{4}$), ez összesen $\frac{1}{2} \cdot \frac{1}{2} + \frac{1}{2} \cdot \frac{1}{4} = \frac{3}{8}$. A tv2-re a számítás: $\frac{1}{2} \cdot \frac{3}{4} + \frac{1}{2} \cdot \frac{1}{2} = \frac{5}{8}$. Ez táblázatok szorzásával az előző 2-2 felírást használva:

| -re | tv1 | tv2 |
|---|---|---|
| tv1 | 1/2 | 1/4 |
| tv2 | 1/2 | 3/4 |

$\times$

| | arány |
|---|---|
| tv1 | 1/2 |
| tv2 | 1/2 |

$=$

| | arány |
|---|---|
| tv1 | 3/8 |
| tv2 | 5/8 |

4. Csak az átpártolás táblázatát nézve, a második hét végére a tv1 nézői első héten megmaradt felének csak a fele marad meg, míg a tv2-től átpártolt negyednyi közönségnek is a fele, tehát a tv1 → tv1 „mozgás" a nézők $\frac{3}{8}$-adát érinti, mert $\frac{1}{2} \cdot \frac{1}{2} + \frac{1}{2} \cdot \frac{1}{4} = \frac{3}{8}$. Hasonló számításokkal a többi érték is megkapható, melyet az alábbi, két táblázat közti szorzással is meg lehet adni:

| -re | tv1 | tv2 |
|---|---|---|
| tv1 | 1/2 | 1/4 |
| tv2 | 1/2 | 3/4 |

$\times$

| -re | tv1 | tv2 |
|---|---|---|
| tv1 | 1/2 | 1/4 |
| tv2 | 1/2 | 3/4 |

$=$

| -re | tv1 | tv2 |
|---|---|---|
| tv1 | 3/8 | 5/16 |
| tv2 | 5/8 | 11/16 |

**4.5.** a) $4\mathbf{A} - 3\mathbf{B} = \begin{bmatrix} 1 & 5 & 12 \\ 2 & 1 & -3 \end{bmatrix}$, b) $2\mathbf{B} - \mathbf{C}$ nincs értelmezve. c) $2\mathbf{B} - \mathbf{C}^\mathsf{T} = \begin{bmatrix} 1 & 0 & -1 \\ 3 & 0 & 2 \end{bmatrix}$.

**4.6.** Ha $a$ a $[0, k]$ intervallumba eső szám, akkor $0 \leq a/k \leq 1$, így $a/k$ egész része 0 vagy 1. Részletezve $\lfloor a/k \rfloor$ pontosan akkor 1, ha $a = k$, azaz ha a pixel átlátszó, egyébként 0. Másrészt $1 - \lfloor a/k \rfloor$ pontosan akkor 0, ha $a = k$, egyébként 1. Ezt kihasználva könnyen definiálható a kívánt művelet:
$$a \odot b = \left\lfloor \frac{a}{k} \right\rfloor b + \left(1 - \left\lfloor \frac{a}{k} \right\rfloor\right) a.$$
Így e művelettel elemenként definiált $\mathbf{A} \odot \mathbf{B}$ művelet a kívánt eredményt adja. A 4.2. ábrán három képet $32 \times 24$-es mátrixszal szemléltetünk, a férfiarc mátrixát is megadtuk, a másik egy háttérkép, a művelet eredménye a harmadik kép.

**4.7.** A standard bázisba azon mátrixok tartoznak, amelyekben egyetlen elem 1, a többi 0.

**4.8.** E mátrixok összes lineáris kombinációja
$$a\mathbf{A} + b\mathbf{B} + c\mathbf{C} = \begin{bmatrix} a + b + c & a + c \\ a & b + c \end{bmatrix}$$
alakú. Ha egy tetszőleges $\begin{bmatrix} u & v \\ w & z \end{bmatrix}$ mátrixról el akarjuk dönteni, hogy a fenti alakú-e, azaz fönnáll-e valamely $a$, $b$, $c$ ismeretlenekre az
$$\begin{bmatrix} a + b + c & a + c \\ a & b + c \end{bmatrix} = \begin{bmatrix} u & v \\ w & z \end{bmatrix}$$
egyenlőség, akkor meg kell oldani a mátrixok négy elemére vonatkozó négy egyenletből álló 3-ismeretlenes egyenletrendszert:
$$\begin{alignedat}{9} a &{}+{}& b &{}+{}& c &{}={}& u \\ a &&&{}+{}& c &{}={}& v \\ a &&&&&{}={}& w \\ && b &{}+{}& c &{}={}& z \end{alignedat}$$
Ha ennek van megoldása, akkor létezik a megfelelő lineáris kombináció, tehát az adott $\begin{bmatrix} u & v \\ w & z \end{bmatrix}$ mátrix a kifeszített térbe esik. Ennek az egyenletrendszernek a bővített mátrixát fölírva, majd elemi sorműveletekkel megoldva a következőt kapjuk:
$$\left[\begin{array}{ccc|c} 1 & 1 & 1 & u \\ 1 & 0 & 1 & v \\ 1 & 0 & 0 & w \\ 0 & 1 & 1 & z \end{array}\right] \Longrightarrow \left[\begin{array}{ccc|c} 1 & 0 & 0 & w \\ 0 & 1 & 1 & u - w \\ 0 & 0 & 1 & v - w \\ 0 & 0 & 0 & w + z - u \end{array}\right].$$
A lépcsős alakból leolvasható, hogy ez az egyenletrendszer pontosan akkor oldható meg, ha $w + z - u = 0$. Például az $\begin{bmatrix} 5 & 4 \\ 3 & 2 \end{bmatrix}$ mátrix ebbe az altérbe esik. A fenti egyenletrendszer megoldásával az is megkapható, hogy mik a lineáris kombináció együtthatói. Azt kapjuk, hogy $a = 3$, $b = 1$ és $c = 1$.

**4.9.** a) $\mathbf{AB}$ nincs értelmezve. b) $\mathbf{AB}^\mathsf{T} - \mathbf{D} = \begin{bmatrix} 0 & 5 \\ 2 & 3 \end{bmatrix}$, c) $\mathbf{BC} = \begin{bmatrix} 3 & 3 \\ 5 & 4 \end{bmatrix}$, d) $\mathbf{CB} = \begin{bmatrix} 3 & 2 & 1 \\ 6 & 4 & 2 \\ 1 & 1 & 0 \end{bmatrix}$, e) $(\mathbf{DA})\mathbf{C} = \begin{bmatrix} 32 & 23 \\ 16 & 13 \end{bmatrix}$.

**4.10.** A méretek alapján a $\mathbf{BC}$ szorzat nincs értelmezve, a többi:
$$\mathbf{AB} = \begin{bmatrix} 3 & 2 & 1 \\ 9 & 8 & 7 \\ 3 & 4 & 5 \end{bmatrix}, \mathbf{BA} = \begin{bmatrix} 6 & 5 \\ 6 & 10 \end{bmatrix}, \mathbf{CB} = \begin{bmatrix} 3 & 2 & 1 \\ 3 & 4 & 5 \end{bmatrix},$$
$$\mathbf{CD} = \begin{bmatrix} -2 & -1 \\ 10 & 11 \end{bmatrix}, \mathbf{DC} = \begin{bmatrix} 12 & 12 \\ -2 & -3 \end{bmatrix}, \mathbf{DE} = \mathbf{ED} = \begin{bmatrix} 0 & -6 \\ 2 & 5 \end{bmatrix}.$$
Összefoglalva: $\mathbf{AB} \neq \mathbf{BA}$, mert különböző típusúak, $\mathbf{BC} \neq \mathbf{CB}$, mert az egyik oldal nincs értelmezve, $\mathbf{CD} \neq \mathbf{DC}$, bár mindkét oldal értelmezve van és azonos típusú. Az előzőekkel ellentétben viszont fennáll a $\mathbf{DE} = \mathbf{ED}$ egyenlőség. Azaz vannak felcserélhető mátrixok, de a mátrixszorzás nem felcserélhető művelet, tehát nem kommutatív!

**4.11.** Az $\mathbf{AB}$ szorzat felírható
$$\begin{bmatrix} \mathbf{A}_{11} & \mathbf{A}_{12} \\ \mathbf{A}_{21} & \mathbf{A}_{22} \end{bmatrix}\begin{bmatrix} \mathbf{B}_{11} & \mathbf{B}_{12} \\ \mathbf{B}_{21} & \mathbf{B}_{22} \end{bmatrix} = \begin{bmatrix} \mathbf{A}_{11}\mathbf{B}_{11} + \mathbf{A}_{12}\mathbf{B}_{21} & \mathbf{A}_{11}\mathbf{B}_{12} + \mathbf{A}_{12}\mathbf{B}_{22} \\ \mathbf{A}_{21}\mathbf{B}_{11} + \mathbf{A}_{22}\mathbf{B}_{21} & \mathbf{A}_{21}\mathbf{B}_{12} + \mathbf{A}_{22}\mathbf{B}_{22} \end{bmatrix}$$
alakban. A $\mathbf{BA}$ hasonlóképp írható fel! Ellenőrizzük, hogy a 4.9. állítás feltétele (minden $k$-ra az $\mathbf{A}_{ik}$ blokk oszlopainak száma megegyezik $\mathbf{B}_{kj}$ sorainak számával) valóban szükséges, és elégséges is.

**4.12.** Számoljunk blokkmátrixként kezelve a mátrixokat:
$$\mathbf{A} + 3\mathbf{C} = \left[\begin{array}{cc|cc} 1 & 0 & 1 & 0 \\ 0 & 1 & 1 & 2 \\ \hline 0 & 0 & 3 & 0 \end{array}\right] + 3\left[\begin{array}{cc|cc} 0 & 2 & 0 & 0 \\ 2 & 0 & 0 & 0 \\ \hline 1 & 1 & 1 & 1 \end{array}\right] = \begin{bmatrix} 1 & 6 & 1 & 0 \\ 6 & 1 & 1 & 2 \\ 3 & 3 & 6 & 3 \end{bmatrix}.$$
Ellenőrizzük a számítást közönséges mátrixműveletekkel! Ezután tekintsük a blokkmátrixok szorzását!
$$\mathbf{AB} = \left[\begin{array}{cc|cc} 1 & 0 & 1 & 0 \\ 0 & 1 & 1 & 2 \\ \hline 0 & 0 & 3 & 0 \end{array}\right]\left[\begin{array}{cc} 2 & 4 \\ 1 & 5 \\ \hline 2 & 2 \\ 0 & 1 \end{array}\right] = \begin{bmatrix} 4 & 6 \\ 3 & 9 \\ 6 & 6 \end{bmatrix}.$$
Ugyanezt az eredményt kapjuk, ha ellenőrzésül egyszerű mátrixszorzással is elvégezzük a műveletet!

**4.13.** Valóban (az $\mathbb{F}_3$ testben számolva)
$$\begin{bmatrix} 1 & 0 & 1 & 2 \\ 0 & 1 & 1 & 1 \end{bmatrix}\begin{bmatrix} 2 & 1 \\ 2 & 2 \\ 1 & 0 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix}.$$

**4.14.** Az $\mathbb{R}^2$- és $\mathbb{R}^{3 \times 2}$-beli hipermátrixok külső szorzata $\mathbb{R}^{2 \times 3 \times 2}$-ba esik:
$$\begin{bmatrix} 1 \\ 2 \end{bmatrix} \otimes \begin{bmatrix} 0 & 1 \\ 2 & 3 \\ 4 & 0 \end{bmatrix} = \left[\begin{array}{ccc|ccc} 0 & 2 & 4 & 1 & 3 & 0 \\ 0 & 4 & 8 & 2 & 6 & 0 \end{array}\right]$$

**4.16.** A Segre-féle külső szorzat:
$$\begin{bmatrix} 0 \\ 1 \\ 2 \end{bmatrix} \otimes \begin{bmatrix} 1 \\ 0 \\ 2 \end{bmatrix} \otimes \begin{bmatrix} 1 \\ 2 \\ 0 \end{bmatrix} = \left[\begin{array}{ccc|ccc|ccc} 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\ 1 & 0 & 2 & 2 & 0 & 4 & 0 & 0 & 0 \\ 2 & 0 & 4 & 4 & 0 & 8 & 0 & 0 & 0 \end{array}\right].$$

**4.17.** a) Hamis, b) igaz, c) igaz.

**4.26.** $\mathbf{a} \cdot \mathbf{b} = \mathbf{a}^\mathsf{T}\mathbf{b} = \begin{bmatrix} 1 & 2 \end{bmatrix}\begin{bmatrix} 0 \\ 1 \end{bmatrix} = 2$, $\mathbf{a} \otimes \mathbf{b} = \mathbf{a}\mathbf{b}^\mathsf{T} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}\begin{bmatrix} 0 & 1 \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ 0 & 2 \end{bmatrix}$.

**4.27.** $\mathbf{u} \cdot \mathbf{v} = \mathbf{u}^\mathsf{T}\mathbf{v} = \begin{bmatrix} 1 & 2 & 0 & 1 \end{bmatrix}\begin{bmatrix} 0 \\ 1 \\ 2 \\ 3 \end{bmatrix} = 5$,
$$\mathbf{u} \otimes \mathbf{v} = \mathbf{u}\mathbf{v}^\mathsf{T} = \begin{bmatrix} 1 \\ 2 \\ 0 \\ 1 \end{bmatrix}\begin{bmatrix} 0 & 1 & 2 & 3 \end{bmatrix} = \begin{bmatrix} 0 & 1 & 2 & 3 \\ 0 & 2 & 4 & 6 \\ 0 & 0 & 0 & 0 \\ 0 & 1 & 2 & 3 \end{bmatrix}.$$

**4.28.** A skaláris szorzat nem végezhető el, a diadikus szorzat
$$\mathbf{a} \otimes \mathbf{b} = \mathbf{a}\mathbf{b}^\mathsf{T} = \begin{bmatrix} 1 \\ 2 \\ 0 \end{bmatrix}\begin{bmatrix} 0 & 1 & 2 & 3 \end{bmatrix} = \begin{bmatrix} 0 & 1 & 2 & 3 \\ 0 & 2 & 4 & 6 \\ 0 & 0 & 0 & 0 \end{bmatrix}.$$

**4.29.** $\begin{bmatrix} 1 & 1 & 0 \\ 1 & 0 & -1 \\ 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix}$.

**4.35.** $\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 3 & -2 & 1 \\ 2 & 0 & -1 \end{bmatrix}\begin{bmatrix} a \\ b \\ c \end{bmatrix}$.

**4.36.** A lineáris helyettesítés mátrixszorzatos alakja
$$\mathbf{y} = \mathbf{Ax},$$
ahol
$$\mathbf{A} = \begin{bmatrix} a_{11} & a_{12} & \ldots & a_{1n} \\ a_{21} & a_{22} & \ldots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \ldots & a_{mn} \end{bmatrix}, \quad \mathbf{y} = \begin{bmatrix} y_1 \\ y_2 \\ \vdots \\ y_m \end{bmatrix}, \quad \text{és} \quad \mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix}.$$

**4.37.** Az áttérés mátrixa
$$\mathbf{A}_{\mathcal{C} \leftarrow \mathcal{B}} = \begin{bmatrix} 1 & 0 & 0 \\ 1 & 2 & 0 \\ 1 & 2 & 3 \end{bmatrix},$$
Ezt fölhasználva kapjuk, hogy
$$[\mathbf{u}]_{\mathcal{C}} = \mathbf{A}_{\mathcal{C} \leftarrow \mathcal{B}}[\mathbf{u}]_{\mathcal{B}} = \begin{bmatrix} 1 & 0 & 0 \\ 1 & 2 & 0 \\ 1 & 2 & 3 \end{bmatrix}\begin{bmatrix} -1 \\ 1 \\ 1 \end{bmatrix} = \begin{bmatrix} -1 \\ 1 \\ 4 \end{bmatrix},$$
továbbá
$$[\mathbf{v}]_{\mathcal{C}} = \mathbf{A}_{\mathcal{C} \leftarrow \mathcal{B}}[\mathbf{v}]_{\mathcal{B}} = \begin{bmatrix} 1 & 0 & 0 \\ 1 & 2 & 0 \\ 1 & 2 & 3 \end{bmatrix}\begin{bmatrix} 3 \\ -2 \\ 0 \end{bmatrix} = \begin{bmatrix} 3 \\ -1 \\ -1 \end{bmatrix}.$$

**4.38.** Az áttérés mátrixa
$$\mathbf{A}_{\mathcal{C} \leftarrow \mathcal{B}} = \begin{bmatrix} 1 & 0 \\ 1 & 1 \\ 0 & 3 \\ -2 & 2 \end{bmatrix}.$$
Ezt fölhasználva kapjuk, hogy
$$[\mathbf{u}]_{\mathcal{C}} = \begin{bmatrix} 1 & 0 \\ 1 & 1 \\ 0 & 3 \\ -2 & 2 \end{bmatrix}\begin{bmatrix} 2 \\ 1 \end{bmatrix} = \begin{bmatrix} 2 \\ 3 \\ 3 \\ -2 \end{bmatrix}, \quad [\mathbf{v}]_{\mathcal{C}} = \begin{bmatrix} 1 & 0 \\ 1 & 1 \\ 0 & 3 \\ -2 & 2 \end{bmatrix}\begin{bmatrix} 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \\ 2 \\ 3 \\ 0 \end{bmatrix}, \quad [\mathbf{w}]_{\mathcal{C}} = \begin{bmatrix} 1 & 0 \\ 1 & 1 \\ 0 & 3 \\ -2 & 2 \end{bmatrix}\begin{bmatrix} 1 \\ 2 \end{bmatrix} = \begin{bmatrix} 1 \\ 3 \\ 6 \\ 2 \end{bmatrix}.$$

**4.39.** Az $\mathbf{A}$ mátrix redukált lépcsős alakja:
$$\mathbf{A} = \begin{bmatrix} 1 & 2 & 3 & 4 & 5 \\ 2 & 4 & 8 & 6 & 2 \\ 1 & 2 & 7 & 0 & -11 \end{bmatrix} \Longrightarrow \begin{bmatrix} 1 & 2 & 0 & 7 & 17 \\ 0 & 0 & 1 & -1 & -4 \\ 0 & 0 & 0 & 0 & 0 \end{bmatrix}.$$
E mátrix első két sora alkotja az $\mathbf{R}$ mátrixot, az $\mathbf{A}$ mátrix első és harmadik oszlopa a $\mathbf{B}$ mátrixot, így a felbontás
$$\mathbf{A} = \begin{bmatrix} 1 & 2 & 3 & 4 & 5 \\ 2 & 4 & 8 & 6 & 2 \\ 1 & 2 & 7 & 0 & -11 \end{bmatrix} = \begin{bmatrix} 1 & 3 \\ 2 & 8 \\ 1 & 7 \end{bmatrix}\begin{bmatrix} 1 & 2 & 0 & 7 & 17 \\ 0 & 0 & 1 & -1 & -4 \end{bmatrix} = \mathbf{BR}.$$
Az $\mathbf{R}$ oszlopai az $\mathbf{A}$ oszlopvektorainak koordinátás alakjai a $\mathbf{B}$ oszlopai alkotta bázisban, azaz
$$[\mathbf{v}]_{\mathcal{E}} = \mathbf{B}[\mathbf{v}]_{\mathcal{B}}.$$

ahol az $\mathcal{E}$ indexszel a standard, $\mathcal{B}$-vel a $\mathbf{B}$ mátrix oszlopai alkotta bázisbeli koordinátás alakot jelöltük ugyanannak a vektornak. Például
$$\begin{bmatrix} 4 \\ 6 \\ 0 \end{bmatrix} = \begin{bmatrix} 1 & 3 \\ 2 & 8 \\ 1 & 7 \end{bmatrix}\begin{bmatrix} 7 \\ -1 \end{bmatrix}, \quad \text{azaz} \quad [\mathbf{a}_4]_{\mathcal{E}} = \begin{bmatrix} 4 \\ 6 \\ 0 \end{bmatrix}, [\mathbf{a}_4]_{\mathcal{B}} = \begin{bmatrix} 7 \\ -1 \end{bmatrix},$$
ahol $\mathbf{a}_4$ az $\mathbf{A}$ negyedik oszlopvektora.

**4.40.** $\begin{bmatrix} 2 & 4 & 6 \end{bmatrix} = [2]\begin{bmatrix} 1 & 2 & 3 \end{bmatrix}$.

**4.41.** $\begin{bmatrix} 3 \\ 4 \end{bmatrix} = \begin{bmatrix} 3 \\ 4 \end{bmatrix}[1]$.

**4.42.** Egy bázisfelbontás az $\mathbf{u} \otimes \mathbf{v} = \mathbf{u}\mathbf{v}^\mathsf{T}$ összefüggést felhasználva $(c\mathbf{u})\left(\frac{1}{c}\mathbf{v}^\mathsf{T}\right)$, ahol $c$ a $\mathbf{v}$ első nemnulla koordinátája.

**4.43.** $\mathbf{E} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{bmatrix}$

**4.44.** $\mathbf{E} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 1 \end{bmatrix}$

**4.45.** $\mathbf{E} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{bmatrix}$

**4.46.** $\mathbf{E} = \begin{bmatrix} 1 & 0 & -1 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$

**4.47.** $\begin{bmatrix} 2 & 2 & 2 \\ 2 & 2 & 2 \\ 8 & 8 & 8 \end{bmatrix}$

**4.48.** $\begin{bmatrix} a \\ 2d - 2b \\ 3a + c \\ d \end{bmatrix}$

**4.50.** $\left[\begin{array}{cc|cc} 2 & 3 & 2 & 2 \\ 4 & 5 & 2 & 2 \\ \hline 0 & 0 & 2 & 2 \\ 0 & 0 & 3 & 3 \end{array}\right]$

**4.51.** $\begin{bmatrix} 2 & 10 \\ 4 & 14 \\ 0 & 5 \end{bmatrix}$

**4.52.** $\begin{bmatrix} 5 & 6 \\ 6 & 7 \\ 12 & 12 \end{bmatrix}$

**4.53.** Mivel $[\mathbf{I}_r|\mathbf{S}]$ az $\mathbf{A}$ redukált lépcsős alakja, ezért ennek bármely oszlopa az $\mathbf{A}$ mátrix azonos sorszámú oszlopának koordinátás alakja az $\mathbf{B}_r$ oszlopvektoraiban, mint bázisban felírva. Ez épp azt jelenti, hogy $\mathbf{A} = \mathbf{B}_r[\mathbf{I}_r|\mathbf{S}]$. Ez az oszloptér bármely oszlopára, így $\mathbf{b}$-re is igaz, hisz $[\mathbf{A}|\mathbf{b}]$ redukált lépcsős alakja szerint az egyenletrendszer megoldható, így $\mathbf{b}$ eleme az oszloptérnek. Eszerint tehát $\mathbf{b} = \mathbf{B}_r\mathbf{d}_r$.

Az, hogy minden megoldás fölírható ilyen alakba, a Gauss–Jordan-módszerből következik. Meg kell még mutatni, hogy a tételben felírt $\mathbf{x}$ vektor valóban megoldás.
$$\begin{aligned} \mathbf{Ax} = \mathbf{B}_r\begin{bmatrix} \mathbf{I}_r & \mathbf{S} \end{bmatrix}\left(\begin{bmatrix} \mathbf{d}_r \\ \mathbf{0}_s \end{bmatrix} + \begin{bmatrix} -\mathbf{S} \\ \mathbf{I}_s \end{bmatrix}\mathbf{t}_s\right) &= \mathbf{B}_r(\mathbf{d}_r - \mathbf{S}\mathbf{t}_s + \mathbf{S}\mathbf{t}_s) = \mathbf{B}_r\mathbf{d}_r \\ &= \mathbf{b}. \end{aligned}$$
Ez bizonyítja az állítás első felét. A második felének bizonyításához csak azt kell látni, hogy $\begin{bmatrix} -\mathbf{S} \\ \mathbf{I}_s \end{bmatrix}$ oszlopvektorai a nulltér bázisát alkotják. Ez abból következik, hogy egyrészt kifeszítik a nullteret, másrészt lineárisan függetlenek, hisz az alsó blokkban lévő $\mathbf{I}_s$ mátrix oszlopai lineárisan függetlenek.

**4.54.** Jelölje $\mathbf{j}$ a csupa 1-esből álló 9-dimenziós vektort, $\mathbf{j}_{456}$ azt, amelynek 4, 5, 6 indexű eleme 1-es, a többi 0. Ekkor a „minden sorösszeg 45" és a „minden oszlopösszeg 45" feltételek ekvivalensek az $\mathbf{Aj} = 45\mathbf{j}$, $\mathbf{j}^\mathsf{T}\mathbf{A} = 45\mathbf{j}^\mathsf{T}$ egyenletekkel, míg pl. az „első blokkoszlop, második blokksor metszetében álló blokk elemeinek összege 45" feltételnek a $\mathbf{j}_{456}^\mathsf{T}\mathbf{A}\mathbf{j}_{123} = 45$ egyenlet felel meg.

**4.55.** $\mathbb{Z}_2^{2 \times 2}$-be $2^4 = 16$ mátrix tartozik:
$$\mathbb{Z}_2^{2 \times 2} = \left\{ \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}, \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}, \begin{bmatrix} 0 & 0 \\ 1 & 0 \end{bmatrix}, \begin{bmatrix} 0 & 0 \\ 0 & 1 \end{bmatrix}, \begin{bmatrix} 1 & 1 \\ 0 & 0 \end{bmatrix}, \begin{bmatrix} 1 & 0 \\ 1 & 0 \end{bmatrix}, \ldots, \begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix} \right\}.$$

# 5. Mátrixműveletek algebrája

Áttekintjük a mátrixműveletek legfontosabb algebrai tulajdonságait. Ezek nem csak a mátrixokkal való számolás közben követendő szabályokról szólnak, de hozzásegítenek az lineáris egyenletrendszerek mélyebb megértéséhez, és olyan eszközöket adnak a kezünkbe, például a mátrixfelbontásokkal, melyek a lineáris algebra alkalmazásaiban is fontosak.

## Az alapműveletek tulajdonságai

*Az összeadás és a skalárral szorzás őrzi a valósok műveleti tulajdonságait, de a mátrixszorzás nem.*

### Az összeadás és a skalárral való szorzás tulajdonságai

Mivel a mátrixok összeadása és skalárral való szorzása elemenként végrehajtható műveletek, ezért műveleti tulajdonságaik természetes módon öröklik meg a számok műveleti tulajdonságait. Például azonos típusú mátrixok összeadása felcserélhető (kommutatív) és csoportosítható (asszociatív) művelet, míg összeg skalárral való szorzása disztributív. Tehát
$$\mathbf{A} + \mathbf{B} = \mathbf{B} + \mathbf{A}, \quad \mathbf{A} + (\mathbf{B} + \mathbf{C}) = (\mathbf{A} + \mathbf{B}) + \mathbf{C} = \mathbf{A} + \mathbf{B} + \mathbf{C},$$
$$c(\mathbf{A} + \mathbf{B}) = c\mathbf{A} + c\mathbf{B}, \quad (c + d)\mathbf{A} = c\mathbf{A} + d\mathbf{A}.$$
E tulajdonságok igazolását az Olvasóra hagyjuk (ld. 5.4. feladat).

### A szorzás tulajdonságai

A számok szorzásának algebrai tulajdonságai nem öröklődnek automatikusan a mátrixműveletekre, mint az összeadásnál. Nem is teljesülnek mind, pl. a mátrixszorzás *nem kommutatív.*

A mátrixokkal való számolás közben nem csak arra kell ügyelnünk, hogy bizonyos azonosságok nem teljesülnek, de arra is, hogy bizonyos elemi eljárások nem végezhetők el olyan tág körben, mint azt a valós számoknál megszoktuk.

**5.1. állítás (Mire vigyázzunk a mátrixszorzásnál?).**
- a) *A mátrixszorzás nem kommutatív, azaz $\mathbf{AB} = \mathbf{BA}$ nem áll fenn bármely két összeszorozható mátrixra.*
- b) *Ha $\mathbf{AB} = \mathbf{AC}$, akkor az $\mathbf{A} \neq \mathbf{O}$ feltétel kevés ahhoz, hogy a $\mathbf{B} = \mathbf{C}$ következtetésre jussunk.*
- c) *Az $\mathbf{AB} = \mathbf{O}$ egyenlőségből nem következik, hogy $\mathbf{A}$ vagy $\mathbf{B}$ a nullmátrix.*

▶ A mátrixszorzás kommutativitásának cáfolására az egyik legegyszerűbb példa:
$$\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}\begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}, \quad \text{de} \quad \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix} = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix}.$$
A 4.10. feladatban további példákat mutatunk.

▶ A valós számok közt igaz, hogy ha $a \neq 0$ és $ab = ac$, akkor $a$-val egyszerűsíthetünk, azaz akkor $b = c$. Mátrixokra egy ellenpélda:
$$\begin{bmatrix} 1 & -2 \\ 2 & -4 \\ 1 & -2 \end{bmatrix}\begin{bmatrix} 1 & -3 \\ 2 & -1 \end{bmatrix} = \begin{bmatrix} 1 & -2 \\ 2 & -4 \\ 1 & -2 \end{bmatrix}\begin{bmatrix} -1 & 3 \\ 1 & 2 \end{bmatrix}, \quad \text{de} \quad \begin{bmatrix} 1 & -3 \\ 2 & -1 \end{bmatrix} \neq \begin{bmatrix} -1 & 3 \\ 1 & 2 \end{bmatrix}.$$

> Nullosztóval találkozhatunk a $\mathbb{Z}_m$-ben való számolásnál is, ha $m$ összetett. Például $\mathbb{Z}_6$-ban $2 \cdot 3 = 0$. Összetett $m$ esetén egyszerűsíteni sem lehet mindig $\mathbb{Z}_m$-ben, például $\mathbb{Z}_{12}$-ben $9 \cdot 2 = 3 \cdot 2 = 6$, de $9 \neq 2$.

▶ *Nullosztónak* nevezzük egy algebrai struktúra olyan nemzérus elemét, melyhez található olyan nemzérus elem, mellyel vett szorzata zérus. Valósok közt ilyenek nincsenek, de a mátrixok közt igen, például
$$\begin{bmatrix} 1 & 2 \\ 3 & 6 \end{bmatrix}\begin{bmatrix} 2 & -2 \\ -1 & 1 \end{bmatrix} = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix}.$$

**5.2. tétel (Mátrixszorzás algebrai tulajdonságai).** *Legyen $\mathbf{A}$, $\mathbf{B}$ és $\mathbf{C}$ olyan, hogy a kijelölt műveletek elvégezhetők legyenek, legyen továbbá $c$ tetszőleges skalár. Ekkor*
- a) *$\mathbf{A}(\mathbf{BC}) = (\mathbf{AB})\mathbf{C}$* (csoportosíthatóság, asszociativitás)
- b) *$\mathbf{A}(\mathbf{B} + \mathbf{C}) = \mathbf{AB} + \mathbf{AC}$* (disztributivitás)
- c) *$(\mathbf{A} + \mathbf{B})\mathbf{C} = \mathbf{AC} + \mathbf{BC}$* (disztributivitás)
- d) *$(c\mathbf{A})\mathbf{B} = c(\mathbf{AB}) = \mathbf{A}(c\mathbf{B})$*
- e) *$\mathbf{A}_{m \times n}\mathbf{O}_{n \times t} = \mathbf{O}_{m \times t}$* (szorzás nullmátrixszal)
- f) *$\mathbf{I}_m\mathbf{A}_{m \times n} = \mathbf{A}_{m \times n}\mathbf{I}_n = \mathbf{A}_{m \times n}$* (szorzás egységmátrixszal)

*Bizonyítás.* A fenti tulajdonságok közül csak az elsőt bizonyítjuk, a többit hasonlóan, vagy még egyszerűbben bizonyítható.

a) Valójában többet bizonyítunk. Megmutatjuk, hogy ha az egyenlőség egyik oldalán kijelölt szorzások elvégezhetők, akkor a másik oldalon kijelöltek is. Legyen $\mathbf{A}_{m \times s}$, $\mathbf{B}_{u \times v}$ és $\mathbf{C}_{t \times n}$ három tetszőleges mátrix. Az $(\mathbf{AB})\mathbf{C}$ szorzatban $\mathbf{AB}$ csak $s = u$ esetén végezhető el, a szorzat típusa $m \times v$, ami $\mathbf{C}$-vel csak $v = t$ esetén szorozható meg, és a szorzat $m \times n$-es. Tehát e szorzat csak akkor van értelmezve, ha $\mathbf{B}$ típusa $s \times t$. Hasonló érveléssel ugyanezt kapjuk az $\mathbf{A}(\mathbf{BC})$ szorzatról is.

Az indexek kezelésének könnyítésére elég lesz a bizonyítást sorvektor alakú $\mathbf{A}$ és oszlopvektor alakú $\mathbf{C}$ mátrixokra elvégezni, ugyanis az $(\mathbf{AB})\mathbf{C}$ szorzat $i$-edik sorában és $j$-edik oszlopában álló elem az $\mathbf{AB}$ $i$-edik sorának, azaz az $\mathbf{a}_{i*}\mathbf{B}$ sorvektornak és $\mathbf{C}$ $j$-edik oszlopának szorzata, azaz $(\mathbf{a}_{i*}\mathbf{B})\mathbf{c}_{*j}$. Hasonlóképp az $\mathbf{A}(\mathbf{BC})$ szorzat $i$-edik sorában és $j$-edik oszlopában álló elem $\mathbf{a}_{i*}(\mathbf{B}\mathbf{c}_{*j})$. Legyen tehát
$$\mathbf{A} = \begin{bmatrix} a_1 & a_2 & \ldots & a_m \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} b_{11} & b_{12} & \ldots & b_{1n} \\ b_{21} & b_{22} & \ldots & b_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ b_{m1} & b_{m2} & \ldots & b_{mn} \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} c_1 \\ c_2 \\ \vdots \\ c_n \end{bmatrix}.$$
Ekkor a szorzat $1 \times 1$-es. Először számoljuk ki az $\mathbf{AB}$ mátrixot, ami $1 \times n$-es: $\begin{bmatrix} \sum_{k=1}^{m} a_k b_{k1} & \sum_{k=1}^{m} a_k b_{k2} & \ldots & \sum_{k=1}^{m} a_k b_{kn} \end{bmatrix}$. Innen számolva $(\mathbf{AB})\mathbf{C}$-t:
$$\begin{bmatrix} \sum_{k=1}^{m} a_k b_{k1} & \sum_{k=1}^{m} a_k b_{k2} & \ldots & \sum_{k=1}^{m} a_k b_{kn} \end{bmatrix}\begin{bmatrix} c_1 \\ c_2 \\ \vdots \\ c_n \end{bmatrix} = \sum_{l=1}^{n}\sum_{k=1}^{m} a_k b_{kl} c_l.$$
Hasonlóan, először $\mathbf{BC}$-t fölírva, az $\mathbf{A}(\mathbf{BC})$ mátrixra kapjuk, hogy
$$\begin{bmatrix} a_1 & a_2 & \ldots & a_m \end{bmatrix}\begin{bmatrix} \sum_{l=1}^{n} b_{1l} c_l \\ \sum_{l=1}^{n} b_{2l} c_l \\ \vdots \\ \sum_{l=1}^{n} b_{ml} c_l \end{bmatrix} = \sum_{k=1}^{m} a_k\left(\sum_{l=1}^{n} b_{kl} c_l\right) = \sum_{k=1}^{m}\sum_{l=1}^{n} a_k b_{kl} c_l.$$
Az utolsó lépésben a belső szumma minden tagját beszoroztuk $a_k$-val, a számok közti összeadás és szorzás közti disztributivitást használva. Vagyis mindkét oldalon olyan összeg áll, amely az összes $a_k b_{kl} c_l$ alakú szorzat összege, csak a tagok csoportosítása más. $\square$

▶ Az asszociativitás következménye, hogy a többtényezős mátrixszorzatokat nem kell zárójelezni, hisz bármelyik zárójelezés ugyanazt az eredményt adja. Így $\mathbf{ABC} = (\mathbf{AB})\mathbf{C} = \mathbf{A}(\mathbf{BC})$. Az állítás igaz többtényezős szorzatokra is, vagyis az $\mathbf{A}_1\mathbf{A}_2 \ldots \mathbf{A}_k$ szorzat független a végrehajtás sorrendjétől, de a tényezők sorrendje nem változtatható!

▶ Megjegyezzük, hogy az asszociativitás imént leírt bizonyítása hasonlóan mondható el, ha az $\mathbf{A} = [a_{ik}]$ mátrix nem csak 1 sorból, és a $\mathbf{C} = [c_{lj}]$ mátrix nem csak egy oszlopból áll: ekkor a $\mathbf{D} = \mathbf{ABC}$ szorzat $i$-edik sorának $j$-edik elemére azt kapjuk, hogy az az összes $a_{ik} b_{kl} c_{lj}$ alakú szorzatok összege, azaz
$$d_{ij} = \sum_{k=1}^{m}\sum_{l=1}^{n} a_{ik} b_{kl} c_{lj}. \tag{5.1}$$

> Az 5.1 egyenlőség, és az ehhez hasonló számtalan hasonló kifejezés vezette Einsteint arra a felismerésre, hogy az indexelt változók szorzatainak összegében a szumma jelek feleslegesek, hisz azokra az indexekre kell összegezni, amelyek legalább kétszer szerepelnek, míg az egyszer szereplőkre nem. Tehát az előző kettős szumma helyett írhatnánk azt is, hogy $d_{ij} = a_{ik} b_{kl} c_{lj}$, hisz a jobb oldalon $i$ és $j$ csak egyszer szerepel, így $k$-ra és $l$-re kell összegezni, azt pedig tudjuk, hogy $k = 1, \ldots, m$ és $l = 1, \ldots, n$. Ezt a jelölésbeli egyszerűsítést *Einstein-konvenciónak* nevezik. Einstein ezt a relativitás általános elméletéről írt híres dolgozatában használta először 1916-ban. A konvenció használata főként a lineáris algebra fizikai alkalmazásaiban terjedt el, mi e könyvben nem fogjuk használni.

### Mátrix hatványozása

Csak a négyzetes mátrixok szorozhatók meg önmagukkal, hisz ha egy $m \times n$-es mátrix megszorozható egy $m \times n$-essel, akkor $m = n$. Ezt figyelembe véve természetes módon definiálható négyzetes mátrixok pozitív egész kitevős hatványa:
$$\mathbf{A}^k = \underbrace{\mathbf{AA} \ldots \mathbf{A}}_{k \text{ tényező}}$$
Kicsit elegánsabban – rekurzióval – is definiálhatjuk e fogalmat: $\mathbf{A}^1 := \mathbf{A}$ és $\mathbf{A}^{k+1} := \mathbf{A}^k\mathbf{A}$.

Mivel a mátrixszorzás asszociatív, mindegy, hogy milyen sorrendben végezzük el a hatványozást. Ezzel igazolható a következő két összefüggés is:

**5.3. állítás (Hatványozás azonosságai).** *Legyen $\mathbf{A}$ egy négyzetes mátrix! Ekkor*
- a) *$\mathbf{A}^k\mathbf{A}^m = \mathbf{A}^{k+m}$,*
- b) *$(\mathbf{A}^k)^m = \mathbf{A}^{km}$.*

Ha ki akarjuk terjeszteni a hatványozást 0 kitevőre is, kövessük a precedencia-elvet,[^7] azaz olyan értelmet adjunk $\mathbf{A}^0$-nak, hogy a fenti összefüggések érvényben maradjanak. Például tekintsük az a) azonosságot $m = 0$ esetén:
$$\mathbf{A}^k\mathbf{A}^0 = \mathbf{A}^{k+0} = \mathbf{A}^k.$$
Ez minden $\mathbf{A}$ mátrix esetén csak az egységmátrixra igaz, tehát
$$\mathbf{A}^0 = \mathbf{I}_n,$$
ahol $n$ a négyzetes $\mathbf{A}$ mérete.

[^7]: *A latin eredetű* precedencia *szó* előzményt *jelent (lásd még precedens). A* precedencia elv *a matematikában fogalmak jelentésének olyan kiterjesztését jelenti, melynek során a korábban megismert tulajdonságok, összefüggések érvényben maradnak.*

▶ A valós számoknál tanult, különböző alapú hatványokra érvényes azonosság itt a kommutativitás hiánya miatt nem érvényes, azaz általában $(\mathbf{AB})^k \neq \mathbf{A}^k\mathbf{B}^k$.

**5.4. példa (Mátrix hatványozása).** *Számítsuk ki az*
$$\mathbf{A} = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}, \quad \text{és a} \quad \mathbf{B} = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}$$
*mátrixok $k$-adik hatványait!*

*Megoldás.* Számoljuk ki $\mathbf{A}$ hatványait!
$$\mathbf{A}^2 = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix},$$
azaz $\mathbf{A}^2 = \mathbf{I}_2$, ebből pedig látjuk, hogy $\mathbf{A}^3 = \mathbf{I}_2\mathbf{A} = \mathbf{A}$, $\mathbf{A}^4 = \mathbf{A}^3\mathbf{A} = \mathbf{AA} = \mathbf{I}_2, \ldots$ Tehát általában $\mathbf{A}^{2k} = \mathbf{I}_2$ és $\mathbf{A}^{2k+1} = \mathbf{A}$.

A másik feladatot a hatványozás rekurzív definícióját használva indukcióval kényelmesen meg tudjuk oldani. Először számoljuk ki $\mathbf{B}$ néhány hatványát:
$$\mathbf{B}^2 = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}\begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix}, \quad \mathbf{B}^3 = \mathbf{B}^2\mathbf{B} = \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix}\begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 3 \\ 0 & 1 \end{bmatrix}.$$
Ebből azt sejtjük, hogy $\mathbf{B}^k = \begin{bmatrix} 1 & k \\ 0 & 1 \end{bmatrix}$. Ha be tudjuk látni ennek az összefüggésnek az öröklődését $k$-ról $k + 1$-re, akkor kész vagyunk. Más szóval meg kell mutatnunk, hogy ha $\mathbf{B}^k = \begin{bmatrix} 1 & k \\ 0 & 1 \end{bmatrix}$, akkor $\mathbf{B}^{k+1} = \begin{bmatrix} 1 & k+1 \\ 0 & 1 \end{bmatrix}$. Ezt a következő szorzás elvégzése igazolja:
$$\mathbf{B}^{k+1} = \mathbf{B}^k\mathbf{B} = \begin{bmatrix} 1 & k \\ 0 & 1 \end{bmatrix}\begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & k+1 \\ 0 & 1 \end{bmatrix} \qquad \square$$

Miután mátrixok lineáris kombinációja és négyzetes mátrixok egész kitevős hatványa értelmezve van, ezért négyzetes mátrixokra is definiálhatjuk skalár együtthatós polinom helyettesítési értékét. Legyen
$$p(x) = a_k x^k + a_{k-1} x^{k-1} + \ldots + a_2 x^2 + a_1 x + a_0$$
egy skalár együtthatós polinom. A $p$ polinom $\mathbf{X} \in \mathbb{R}^{n \times n}$ helyen vett helyettesítési értékén a
$$p(\mathbf{X}) = a_k\mathbf{X}^k + \ldots + a_2\mathbf{X}^2 + a_1\mathbf{X} + a_0\mathbf{I}_n$$
mátrixot értjük.

**5.5. példa (Polinom helyettesítési értéke).** *Legyen*
$$\mathbf{C} = \begin{bmatrix} 1 & 2 & -3 \\ 2 & 3 & -4 \\ 3 & 4 & -6 \end{bmatrix}.$$
*Mutassuk meg, hogy $p(\mathbf{C}) = \mathbf{O}$, ha $p(x) = x^3 + 2x^2 - 1$.*

*Megoldás.* A $p(\mathbf{C}) = \mathbf{C}^3 + 2\mathbf{C}^2 - \mathbf{I}$ műveleteit elvégezve kapjuk, hogy
$$\begin{aligned} p(\mathbf{C}) = \mathbf{C}^3 + 2\mathbf{C}^2 - \mathbf{I} &= \begin{bmatrix} 9 & 8 & -14 \\ 8 & 7 & -12 \\ 14 & 12 & -21 \end{bmatrix} + 2\begin{bmatrix} -4 & -4 & 7 \\ -4 & -3 & 6 \\ -7 & -6 & 11 \end{bmatrix} - \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} \\ &= \begin{bmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}. \qquad \square \end{aligned}$$

### A transzponálás tulajdonságai

A következő tétel a transzponálás és a többi művelet kapcsolatáról szól:

**5.6. tétel (Transzponálás tulajdonságai).** *Legyenek $\mathbf{A}$ és $\mathbf{C}$ azonos típusú mátrixok, $\mathbf{B}$ sorainak száma egyezzen meg $\mathbf{A}$ oszlopainak számával, $c$ pedig legyen tetszőleges skalár. Ekkor*
- a) *$(\mathbf{A}^\mathsf{T})^\mathsf{T} = \mathbf{A}$,*
- b) *$(\mathbf{A} + \mathbf{C})^\mathsf{T} = \mathbf{A}^\mathsf{T} + \mathbf{C}^\mathsf{T}$,*
- c) *$(c\mathbf{A})^\mathsf{T} = c\mathbf{A}^\mathsf{T}$,*
- d) *$(\mathbf{AB})^\mathsf{T} = \mathbf{B}^\mathsf{T}\mathbf{A}^\mathsf{T}$.*

*Bizonyítás.* Az első három összefüggés magától értetődő, csak az utolsót bizonyítjuk.

Először megmutatjuk, hogy ha $(\mathbf{AB})^\mathsf{T}$ elvégezhető, akkor $\mathbf{B}^\mathsf{T}\mathbf{A}^\mathsf{T}$ is. Az $m \times t$ típusú $\mathbf{A}$ és $t \times n$ típusú $\mathbf{B}$ szorzata $m \times n$-es, transzponáltja $n \times m$-es, így az $n \times t$ típusú $\mathbf{B}^\mathsf{T}$ és a $t \times m$-es $\mathbf{A}^\mathsf{T}$ összeszorozhatók, szorzatuk $n \times m$-es, így a tételbeli egyenlőség két oldalának típusa azonos.

A tétel azon alapul, hogy két tetszőleges $\mathbf{u}$, $\mathbf{v}$ vektorra $\mathbf{u}^\mathsf{T}\mathbf{v} = \mathbf{v}^\mathsf{T}\mathbf{u}$. Ezt az összefüggést a $*$-gal jelölt egyenlőségnél fogjuk használni. Az $(\mathbf{AB})^\mathsf{T}$ $i$-edik sorának $j$-edik eleme
$$\left((\mathbf{AB})^\mathsf{T}\right)_{ij} = (\mathbf{AB})_{ji} = (\mathbf{A})_{j*}(\mathbf{B})_{*i}.$$
A $\mathbf{B}^\mathsf{T}\mathbf{A}^\mathsf{T}$ $i$-edik sorának $j$-edik eleme
$$\left(\mathbf{B}^\mathsf{T}\mathbf{A}^\mathsf{T}\right)_{ij} = (\mathbf{B}^\mathsf{T})_{i*}(\mathbf{A}^\mathsf{T})_{*j} \overset{*}{=} (\mathbf{A})_{j*}(\mathbf{B})_{*i}.$$
Tehát $(\mathbf{AB})^\mathsf{T} = \mathbf{B}^\mathsf{T}\mathbf{A}^\mathsf{T}$. $\square$

▶ A tétel b) pontjának indukcióval könnyen bizonyítható következménye, hogy többtagú összeg transzponáltja megegyezik a transzponáltak összegével. A c) pontot is figyelembe véve kapjuk, hogy mátrixok lineáris kombinációjának transzponáltja megegyezik a mátrixok transzponáltjainak azonos lineáris kombinációjával, azaz
$$(c_1\mathbf{A}_1 + c_2\mathbf{A}_2 + \ldots + c_k\mathbf{A}_k)^\mathsf{T} = c_1\mathbf{A}_1^\mathsf{T} + c_2\mathbf{A}_2^\mathsf{T} + \ldots + c_k\mathbf{A}_k^\mathsf{T}.$$
▶ A tétel d) pontjára „szemléletes igazolás" is adható, ami leolvasható az 5.1. ábráról.
▶ Indukcióval bizonyítható, hogy a d)-beli összefüggés többtényezős szorzatokra is fönnáll, azaz
$$(\mathbf{A}_1\mathbf{A}_2 \ldots \mathbf{A}_k)^\mathsf{T} = \mathbf{A}_k^\mathsf{T} \ldots \mathbf{A}_2^\mathsf{T}\mathbf{A}_1^\mathsf{T}.$$

*5.1. ábra. $(\mathbf{AB})^\mathsf{T} = \mathbf{B}^\mathsf{T}\mathbf{A}^\mathsf{T}$ szemléletes bizonyítása.*

### Mátrixszorzás inverze – mátrixok osztása

Lehet-e mátrixszal osztani, és ha igen, meg tudjuk-e vele oldani az $\mathbf{Ax} = \mathbf{b}$ egyenletrendszert vagy az $\mathbf{AX} = \mathbf{B}$ mátrixegyenletet úgy, ahogy az $ax = b$ egyenletet megoldjuk az $a$-val való osztással?

Korábbi tanulmányainkban megtanultuk, hogy az összeadás és a szorzás invertálható műveletek, inverzeik a kivonás, ill. az osztás.

Azon, hogy az összeadás művelete invertálható, azt értjük, hogy bármely $a$ és $b$ valós esetén találunk olyan $x$ valóst, hogy $a + x = b$, a megoldás $x = b - a$. A szorzás is invertálható, de csak a nemzérus valósok halmazán. Ezt jelenti, hogy bármely $a$ nemzérus valóshoz és $b$ valóshoz található olyan $x$ valós szám, hogy $ax = b$, a megoldás $x = b/a$.

Azonos típusú mátrixok közt az $\mathbf{A} + \mathbf{X} = \mathbf{B}$ egyenlet megoldása ugyanolyan egyszerű, mint a számok közt: $\mathbf{X} = \mathbf{B} - \mathbf{A}$. A mátrixszorzás esete bonyolultabb.

▶ A mátrixszorzás nem kommutatív ezért az $\mathbf{AX} = \mathbf{B}$ és az $\mathbf{YA} = \mathbf{B}$ egyenletek megoldása különböző is lehet. Valóban a mátrixosztás művelete emiatt nem vezethető be, de egy balról és egy jobbról való osztás igen, melyekkel a fenti egyenletek megoldása
$$\mathbf{X} = \mathbf{A}\backslash\mathbf{B}, \text{ és } \mathbf{Y} = \mathbf{B}/\mathbf{A}$$
lenne. Ez sem működik minden megszorítás nélkül, mert létezhet több olyan különböző mátrix, például $\mathbf{X}_1$ és $\mathbf{X}_2$, hogy $\mathbf{AX}_1 = \mathbf{B}$ és $\mathbf{AX}_2 = \mathbf{B}$. Így mi döntené el, hogy melyik egyenlő $\mathbf{A}\backslash\mathbf{B}$-vel? Ha az $\mathbf{AX} = \mathbf{B}$ és az $\mathbf{YA} = \mathbf{B}$ egyenleteknek csak egyetlen megoldása van (a következőkben megtudjuk, hogy mi ennek a feltétele), akkor biztosan használható a fent bevezetett jelölés. Például ha
$$\mathbf{A} = \begin{bmatrix} 1 & 2 \\ 2 & 3 \end{bmatrix}, \text{ és } \mathbf{B} = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix},$$
akkor
$$\mathbf{X} = \begin{bmatrix} 1 & 2 \\ 2 & 3 \end{bmatrix} \backslash \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} = \begin{bmatrix} 3 & 2 \\ -1 & 0 \end{bmatrix}, \text{ mert } \begin{bmatrix} 1 & 2 \\ 2 & 3 \end{bmatrix}\begin{bmatrix} 3 & 2 \\ -1 & 0 \end{bmatrix} = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} \text{ és}$$
$$\mathbf{Y} = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} / \begin{bmatrix} 1 & 2 \\ 2 & 3 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ -1 & 2 \end{bmatrix}, \text{ mert } \begin{bmatrix} 1 & 0 \\ -1 & 2 \end{bmatrix}\begin{bmatrix} 1 & 2 \\ 2 & 3 \end{bmatrix} = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}.$$
▶ Végül a *pszeudoinverz* fogalmának segítségével a fenti két mátrixosztást arra az esetre is ki fogjuk terjeszteni, ha az $\mathbf{AX} = \mathbf{B}$ és az $\mathbf{YA} = \mathbf{B}$ egyenleteknek több megoldásuk is van vagy ha egyetlen megoldásuk sincs.

> Egy $H$ halmazon értelmezett kétváltozós (más szóval bináris) *műveleten* olyan függvényt értünk, mely $H$-beli elempárokhoz $H$-beli elemet rendel. Például a valós számok összeadása esetén e függvény valós számpárhoz valós számot rendel, mondjuk az $(1.2, 0.4)$ számpárhoz az 1.6-ot. E függvényt a $+$ jellel jelöljük, de a függvényeknél szokásos prefix „$+(a, b)$" jelölés helyett műveleteknél az ún. infix jelölést használjuk, azaz $a + b$-t írunk (lásd erről még a következő széljegyzetet).

> A számítástechnikában gyakran találkozunk a műveletek infix jelölése mellett a prefix vagy lengyel és a postfix vagy fordított lengyel jelölésével. A prefixnél a műveleti jel az argumentumai előtt, a postfixnél után van. Például a $(3 + 4) \cdot 2$ kifejezést a prefix jelölést használó Lisp nyelvcsalád nyelveiben a `(* (+ 3 4) 2)` kód, míg például a postfix jelölést használó PostScript nyelvben a `3 4 add 2 mul` kód számítja ki. (A PostScript nyelvvel találkozhatunk a PDF formátumú fájlokban.) Ugyanez a formula a komputer algebra nyelvek közül a Mapleben prefix módon `'*'('+'(3,4),2)`, a Mathematicában `Times[Plus[3,4],2]` alakot ölt. A Sage két lehetőséget kínál: `prod([sum([3,4]),2])`, `mul([add([3,4]),2])`.

### Mátrix inverze

Tudjuk, hogy az $ax = b$ egyenlet megoldásához elég ismerni *a reciprokát,* más néven *multiplikatív inverzét,* és azzal szorozni $b$-t. Ez a gondolat átvihető a mátrixszorzásra is.

Egy nemnulla $a$ szám reciproka az az $a^{-1}$-gyel jelölt szám, melyre $aa^{-1} = a^{-1}a = 1$. Az 1 szerepét mátrixszorzásnál az $\mathbf{I}$ egységmátrix játssza. Világos, hogy adott $\mathbf{A}$ mátrixhoz csak úgy létezhet olyan $\mathbf{X}$, melyre $\mathbf{AX} = \mathbf{XA} = \mathbf{I}$, ha $\mathbf{A}$ négyzetes. Ez a következő definíciót adja:

**5.7. definíció (Mátrix inverze).** *Legyen $\mathbf{A}$ egy $n \times n$-es mátrix. Azt mondjuk, hogy $\mathbf{A}$ invertálható, ha létezik olyan $\mathbf{B}$ mátrix, melyre*
$$\mathbf{AB} = \mathbf{BA} = \mathbf{I}_n.$$
*A $\mathbf{B}$ mátrixot $\mathbf{A}$ inverzének nevezzük, és $\mathbf{A}^{-1}$-nel jelöljük. A nem invertálható mátrixot szingulárisnak nevezzük.*

▶ Világos, hogy ha $\mathbf{A}$ inverze $\mathbf{B}$, akkor $\mathbf{B}$ inverze $\mathbf{A}$.
▶ Például az alábbi szorzatokban szereplő két mátrix egymás inverze:
$$\begin{bmatrix} 2 & 1 \\ 5 & 3 \end{bmatrix}\begin{bmatrix} 3 & -1 \\ -5 & 2 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}, \quad \begin{bmatrix} 3 & -1 \\ -5 & 2 \end{bmatrix}\begin{bmatrix} 2 & 1 \\ 5 & 3 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}.$$
▶ A definícióból nem derül ki, hogy egy mátrixnak lehet-e több inverze, de könnyen megmutatható, hogy nem. Ha ugyanis az $\mathbf{A}$ mátrixnak $\mathbf{B}$ és $\mathbf{C}$ is inverze, azaz $\mathbf{AB} = \mathbf{BA} = \mathbf{I}$ és $\mathbf{AC} = \mathbf{CA} = \mathbf{I}$, akkor
$$\mathbf{C} = \mathbf{CI} = \mathbf{C}(\mathbf{AB}) = (\mathbf{CA})\mathbf{B} = \mathbf{IB} = \mathbf{B}.$$
▶ Az $\mathbf{A}$ mátrix inverzére használhatjuk az $\mathbf{A}^{-1}$ jelölést, mert megfelel a precedencia-elvnek. Például ha az 5.3. tétel érvényességét megtartva akarunk az $\mathbf{A}^{-1}$ hatványnak értelmet adni, akkor fenn kell álljon rá az $\mathbf{A}^{-1}\mathbf{A} = \mathbf{A}^{-1+1} = \mathbf{A}^0 = \mathbf{I}$ és $\mathbf{AA}^{-1} = \mathbf{A}^{1-1} = \mathbf{A}^0 = \mathbf{I}$ összefüggés.
▶ Minthogy a mátrixok közti műveleteket a számok közti műveletek táblázatokra való kiterjesztésén keresztül vezettük be, elvárjuk, hogy az $1 \times 1$-es mátrixok inverze essen egybe a számok multiplikatív inverzével (reciprokával), azaz ha $\mathbf{A} = [a]$, akkor $\mathbf{A}^{-1} = [a^{-1}] = [1/a]$ legyen igaz. A fenti definíció ennek az elvárásunknak is megfelel.

Egy négyzetes $\mathbf{A}$ mátrixot *nilpotensnek* nevezünk, ha van olyan $k$ pozitív egész, hogy
$$\mathbf{A}^k = \mathbf{O}.$$
Például a $\begin{bmatrix} -2 & 4 \\ -1 & 2 \end{bmatrix}$ mátrix nilpotens, mert $\begin{bmatrix} -2 & 4 \\ -1 & 2 \end{bmatrix}^2 = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix}$. Több alkalmazásban is fontos szerepet kap az alábbi példában szereplő inverz.

**5.8. példa ($\mathbf{I} - \mathbf{A}$ inverze nilpotens $\mathbf{A}$ esetén).** *Mutassuk meg, ha $\mathbf{A}$ nilpotens, azaz valamely pozitív $k$-ra $\mathbf{A}^k = \mathbf{O}$, akkor $\mathbf{I} - \mathbf{A}$ invertálható, és inverze $\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \ldots + \mathbf{A}^{k-1}$.*

> Általában egy algebrai struktúra egy elemének egy műveletre vonatkozó inverzéhez a művelet *semleges eleme* szükséges. Az összeadás semleges eleme a 0, mert bármely $a$ elemhez adva $a$-t kapunk, hasonlóképp a szorzás semleges eleme az 1, mert bármely $a$ elemet vele szorozva $a$-t kapunk. Összeadás esetén egy elem ellentettjét az $a + x = 0$ egyenlet megoldásával kapjuk, szorzás esetén a reciprokot az $ax = 1$ megoldásával. Az ellentettet, illetve a reciprokot additív, illetve multiplikatív *inverznek* is nevezzük. Mátrixszorzás semleges eleme az egységmátrix.

*Megoldás.* Megmutatjuk, hogy $(\mathbf{I} - \mathbf{A})(\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \ldots + \mathbf{A}^{k-1}) = \mathbf{I}$.
$$\begin{aligned} (\mathbf{I} - \mathbf{A})(\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \ldots + \mathbf{A}^{k-1}) &= \mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \ldots + \mathbf{A}^{k-1} - \mathbf{A} - \mathbf{A}^2 - \ldots - \mathbf{A}^{k-1} - \mathbf{A}^k \\ &= \mathbf{I} - \mathbf{A}^k \\ &= \mathbf{I} \end{aligned}$$
Az $(\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \ldots + \mathbf{A}^{k-1})(\mathbf{I} - \mathbf{A}) = \mathbf{I}$ összefüggés ugyanígy bizonyítható. $\square$

### Elemi mátrixok inverze

Minden $R$ elemi sorművelethez van egy olyan $R'$ sorművelet, hogy az $R$ sorművelettel átalakított mátrixot az $R'$ visszaalakítja (ld. 5.21. feladat). Nevezzük ezt az $R'$ sorműveletet az $R$ sorművelet inverzének. Könnyen ellenőrizhető, hogy az $S_i \leftrightarrow S_j$ sorművelet inverze önmaga, a $cS_i$ inverze $\frac{1}{c}S_i$, és $S_i + cS_j$ inverze $S_i - cS_j$.

**5.9. állítás (Sorművelet inverzének mátrixa).** *Minden elemi mátrix invertálható, nevezetesen egy sorművelet elemi mátrixának inverze megegyezik a sorművelet inverzéhez tartozó elemi mátrixszal.*

A bizonyításhoz elég belátni, hogy egy sorművelet és az inverz sorművelet mátrixainak szorzata az egységmátrix. Az általános bizonyítás végiggondolását az Olvasóra hagyjuk, itt csak egy-egy konkrét esetet mutatunk meg, nevezetesen $3 \times 3$-as mátrixokon az $S_2 \leftrightarrow S_3$, a $3S_2$ és az $S_1 + 4S_3$ sorműveletek és inverzeik mátrixának szorzatát:
$$\begin{bmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{bmatrix}\begin{bmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix},$$
$$\begin{bmatrix} 1 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 & 0 \\ 0 & \frac{1}{3} & 0 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & \frac{1}{3} & 0 \\ 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix},$$
$$\begin{bmatrix} 1 & 0 & 4 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 & -4 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & -4 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 & 4 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}.$$

### Az inverz kiszámítása

A négyzetes $\mathbf{A}$ mátrix inverzének kiszámításához meg kell oldani az $\mathbf{AX} = \mathbf{I}$ mátrixegyenletet, ami egyúttal egy szimultán egyenletrendszer is, és az elemi sorműveletekkel megoldható. Előbb azonban egy kérdésre válaszolnunk kell: nem fordulhat-e elő, hogy az $\mathbf{AX} = \mathbf{I}$ mátrixegyenlet megoldható, de a megoldás nem tesz eleget az $\mathbf{XA} = \mathbf{I}$ mátrixegyenletnek? Négyzetes mátrixok esetén *nem* a válasz, ami azt jelenti, hogy mátrix invertálásához elég az $\mathbf{AX} = \mathbf{I}$ mátrixegyenlet megoldása!

**5.10. tétel (Az inverz létezéséhez elég egy feltétel).** *A négyzetes $\mathbf{A}$ mátrix pontosan akkor invertálható, ha létezik olyan $\mathbf{B}$ mátrix, hogy az $\mathbf{AB} = \mathbf{I}$ és a $\mathbf{BA} = \mathbf{I}$ feltételek egyike teljesül. Ha ilyen $\mathbf{B}$ mátrix létezik, az egyértelmű.*

*Bizonyítás.* Az inverz mátrix egyértelműségét beláttuk az 5.7. definíció utáni megjegyzések közt. Így elég belátnunk, hogy négyzetes mátrixokra az $\mathbf{AB} = \mathbf{I}$ és a $\mathbf{BA} = \mathbf{I}$ feltételek bármelyikének teljesülése maga után vonja a másik teljesülését is! Sőt, elég e két állítás egyikét igazolni: megmutatjuk, hogy ha a négyzetes $\mathbf{A}$ és $\mathbf{B}$ mátrixok kielégítik az $\mathbf{AB} = \mathbf{I}$ egyenletet, akkor $\mathbf{BA} = \mathbf{I}$ is fönnáll, azaz $\mathbf{A}$ és $\mathbf{B}$ inverzei egymásnak.

Tekintsük az $\mathbf{AX} = \mathbf{I}$ mátrixegyenletet. Ezt úgy oldjuk meg, hogy az $[\mathbf{A}|\mathbf{I}]$ mátrixot redukált lépcsős alakra hozzuk. Ha ez $[\mathbf{I}|\mathbf{B}]$ alakú, akkor $\mathbf{B}$ az $\mathbf{AX} = \mathbf{I}$ egyenlet megoldása, ezért $\mathbf{AB} = \mathbf{I}$ fennáll. A redukált lépcsős alakban zérus sor nem keletkezhet, mert a mátrix jobb oldalát az $\mathbf{I}$ mátrixból kaptuk, ami redukált lépcsős alak, s így egyértelmű. Ha elemi sorműveletekkel zérus sort kapnánk a jobb oldali félmátrixban, akkor volna olyan redukált lépcsős alakja is, mely zérus sort tartalmazna, ami ellentmondás. Ha csak a mátrix bal felén kapnánk zérus sort, akkor az $\mathbf{AX} = \mathbf{I}$ egyenletnek nem lenne megoldása, vagyis nem állhatna fenn az $\mathbf{AB} = \mathbf{I}$ egyenlőség sem.

Ezután megmutatjuk, hogy $\mathbf{BA} = \mathbf{I}$. Ehhez tekintsük a $\mathbf{BY} = \mathbf{I}$ mátrixegyenletet. Ennek megoldásához a $[\mathbf{B}|\mathbf{I}]$ mátrixot kell redukált lépcsős alakra hozni. A előzőekből tudjuk, hogy elemi sorműveletekkel az
$$[\mathbf{A}|\mathbf{I}] \Longrightarrow [\mathbf{I}|\mathbf{B}]$$
átalakítás megvalósítható. Az átalakítás lépéseinek inverzeit fordított sorrendben elvégezve az
$$[\mathbf{I}|\mathbf{B}] \Longrightarrow [\mathbf{A}|\mathbf{I}]$$
transzformációt kapjuk. Itt minden lépésben fölcserélve a két részmátrixot a kívánt
$$[\mathbf{B}|\mathbf{I}] \Longrightarrow [\mathbf{I}|\mathbf{A}]$$
átalakítást kapjuk. Ez azt jelenti, hogy a $\mathbf{BY} = \mathbf{I}$ mátrixegyenletetnek az $\mathbf{Y} = \mathbf{A}$ megoldása, azaz $\mathbf{BA} = \mathbf{I}$. $\square$

Összefoglalva:

**5.11. állítás (Inverz kiszámítása elemi sorműveletekkel).** *A négyzetes $\mathbf{A}$ mátrix invertálható, ha az $[\mathbf{A}|\mathbf{I}]$ mátrix elemi sorműveletekkel $[\mathbf{I}|\mathbf{B}]$ alakra hozható, ekkor $\mathbf{A}$ inverze $\mathbf{B}$. Ha $\mathbf{A}$ redukált lépcsős alakja nem az $\mathbf{I}$ mátrix, akkor $\mathbf{A}$ nem invertálható.*

**5.12. példa (Az inverz kiszámítása).** *Számítsuk ki az*
$$\mathbf{A} = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 3 & 4 \\ 3 & 4 & 6 \end{bmatrix} \quad \text{és a} \quad \mathbf{B} = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 2 & 1 & 0 & 0 \\ 3 & 2 & 1 & 0 \\ 4 & 3 & 2 & 1 \end{bmatrix}$$
*mátrixok inverzét!*

*Megoldás.* A kiküszöböléssel oszloponként haladva:
$$\left[\begin{array}{ccc|ccc} 1 & 2 & 3 & 1 & 0 & 0 \\ 2 & 3 & 4 & 0 & 1 & 0 \\ 3 & 4 & 6 & 0 & 0 & 1 \end{array}\right] \Rightarrow \left[\begin{array}{ccc|ccc} 1 & 2 & 3 & 1 & 0 & 0 \\ 0 & -1 & -2 & -2 & 1 & 0 \\ 0 & -2 & -3 & -3 & 0 & 1 \end{array}\right] \Rightarrow$$
$$\left[\begin{array}{ccc|ccc} 1 & 0 & -1 & -3 & 2 & 0 \\ 0 & 1 & 2 & 2 & -1 & 0 \\ 0 & 0 & 1 & 1 & -2 & 1 \end{array}\right] \Rightarrow \left[\begin{array}{ccc|ccc} 1 & 0 & 0 & -2 & 0 & 1 \\ 0 & 1 & 0 & 0 & 3 & -2 \\ 0 & 0 & 1 & 1 & -2 & 1 \end{array}\right]$$
Tehát
$$\mathbf{A}^{-1} = \begin{bmatrix} -2 & 0 & 1 \\ 0 & 3 & -2 \\ 1 & -2 & 1 \end{bmatrix}.$$
A $\mathbf{B}$ inverzének kiszámítása hasonló lépésekkel:
$$\left[\begin{array}{cccc|cccc} 1 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\ 2 & 1 & 0 & 0 & 0 & 1 & 0 & 0 \\ 3 & 2 & 1 & 0 & 0 & 0 & 1 & 0 \\ 4 & 3 & 2 & 1 & 0 & 0 & 0 & 1 \end{array}\right] \Rightarrow \left[\begin{array}{cccc|cccc} 1 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 & -2 & 1 & 0 & 0 \\ 0 & 2 & 1 & 0 & -3 & 0 & 1 & 0 \\ 0 & 3 & 2 & 1 & -4 & 0 & 0 & 1 \end{array}\right] \Rightarrow$$
$$\left[\begin{array}{cccc|cccc} 1 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 & -2 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 & 1 & -2 & 1 & 0 \\ 0 & 0 & 2 & 1 & 2 & -3 & 0 & 1 \end{array}\right] \Rightarrow \left[\begin{array}{cccc|cccc} 1 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 & -2 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 & 1 & -2 & 1 & 0 \\ 0 & 0 & 0 & 1 & 0 & 1 & -2 & 1 \end{array}\right]$$
Tehát
$$\mathbf{B}^{-1} = \begin{bmatrix} 1 & 0 & 0 & 0 \\ -2 & 1 & 0 & 0 \\ 1 & -2 & 1 & 0 \\ 0 & 1 & -2 & 1 \end{bmatrix}. \qquad \square$$

**5.13. tétel ($2 \times 2$-es mátrix inverze).** *Az $\mathbf{A} = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$ mátrix pontosan akkor invertálható, ha $ad - bc \neq 0$, és ekkor*
$$\mathbf{A}^{-1} = \begin{bmatrix} a & b \\ c & d \end{bmatrix}^{-1} = \frac{1}{ad - bc}\begin{bmatrix} d & -b \\ -c & a \end{bmatrix}.$$

*Bizonyítás.* Azt, hogy az $\mathbf{A}$ mátrixnak valóban a fenti mátrix az inverze, egyszerű mátrixszorzással ellenőrizhetjük. Azt, hogy az $ad - bc \neq 0$ feltétel az invertálhatóságnak elégséges feltétele, a képlet bizonyítja. A feltétel szükségességének belátásához vegyük észre, hogy $ad - bc = 0$, azaz $ad = bc$ pontosan akkor áll fenn, ha $\mathbf{A}$ egyik sora a másik skalárszorosa. Ekkor viszont az egyik sor kinullázható, vagyis az $\mathbf{A}$ mátrix nem alakítható elemi sorműveletekkel egységmátrixszá. $\square$

### Az inverz tulajdonságai

Megvizsgáljuk a mátrixinvertálás más műveletekkel való kapcsolatát.

**5.14. tétel (Az inverz alaptulajdonságai).** *Tegyük fel, hogy $\mathbf{A}$ és $\mathbf{B}$ egyaránt $n \times n$-es invertálható mátrixok, $c \neq 0$ skalár és $k$ pozitív egész. Ekkor igazak a következők:*
- a) *$\mathbf{A}^{-1}$ invertálható, és inverze $(\mathbf{A}^{-1})^{-1} = \mathbf{A}$,*
- b) *$c\mathbf{A}$ invertálható, és inverze $\frac{1}{c}\mathbf{A}^{-1}$,*
- c) *$\mathbf{AB}$ invertálható, és inverze $\mathbf{B}^{-1}\mathbf{A}^{-1}$,*
- d) *$\mathbf{A}^k$ invertálható, és inverze $(\mathbf{A}^k)^{-1} = (\mathbf{A}^{-1})^k$, definíció szerint ezt értjük $\mathbf{A}^{-k}$-n,*
- e) *$\mathbf{A}^\mathsf{T}$ invertálható, és $(\mathbf{A}^\mathsf{T})^{-1} = (\mathbf{A}^{-1})^\mathsf{T}$.*

*Bizonyítás.* Az állítások közül a fontosabbakat bizonyítjuk, a többit feladatként az Olvasóra hagyjuk:

c) Az
$$(\mathbf{AB})(\mathbf{B}^{-1}\mathbf{A}^{-1}) = \mathbf{A}(\mathbf{BB}^{-1})\mathbf{A}^{-1} = \mathbf{AA}^{-1} = \mathbf{I}$$
szorzat bizonyítja, hogy $\mathbf{AB}$ invertálható, és inverze $\mathbf{B}^{-1}\mathbf{A}^{-1}$.

d) Az $(\mathbf{A}^k)^{-1} = (\mathbf{A}^{-1})^k$ egyenlőség igaz volta a
$$\underbrace{\mathbf{AA} \ldots \mathbf{A}}_{k \text{ tényező}}\underbrace{\mathbf{A}^{-1}\mathbf{A}^{-1} \ldots \mathbf{A}^{-1}}_{k \text{ tényező}} = \underbrace{\mathbf{A}^{-1}\mathbf{A}^{-1} \ldots \mathbf{A}^{-1}}_{k \text{ tényező}}\underbrace{\mathbf{AA} \ldots \mathbf{A}}_{k \text{ tényező}} = \mathbf{I}$$
felírásból leolvasható, mert a szorzatok közepén lévő két mátrix szorzata mindig $\mathbf{I}$, ami elhagyható, és e lépést $k$-szor ismételve végül a kívánt eredményt kapjuk:
$$\underbrace{\mathbf{AA} \ldots (\mathbf{A}\mathbf{A}^{-1})\mathbf{A}^{-1} \ldots \mathbf{A}^{-1}}_{} = \underbrace{\mathbf{AA} \ldots \mathbf{A}}_{k-1}\underbrace{\mathbf{A}^{-1} \ldots \mathbf{A}^{-1}}_{k-1} = \cdots = \mathbf{I}. \qquad \square$$

▶ A c) állítás indukcióval általánosítható véges sok mátrix szorzatára: ha az azonos méretű négyzetes $\mathbf{A}_1$, $\mathbf{A}_2, \ldots \mathbf{A}_m$ mátrixok mindegyike invertálható, akkor szorzatuk is, és
$$(\mathbf{A}_1\mathbf{A}_2 \ldots \mathbf{A}_m)^{-1} = \mathbf{A}_m^{-1} \ldots \mathbf{A}_2^{-1}\mathbf{A}_1^{-1}.$$

*5.2. ábra. Jelölje $A$ a bűvös kocka alsó, $B$ a jobb hátsó oldalának elforgatását, és jelölje $AB$ a $B$, majd az $A$ egymás után való elvégzésével kapott transzformációt. (Ahogy a függvények összetételénél, előbb a jobb oldali, majd a bal oldali függvényt értékeljük ki, hajtjuk végre.) Ennek inverze $(AB)^{-1}$ úgy kapható meg, ha előbb végrehajtjuk az $A^{-1}$ majd a $B^{-1}$ transzformációt. Ezek szorzata $B^{-1}A^{-1}$, tehát $(AB)^{-1} = B^{-1}A^{-1}$.*

▶ A c) állításbeli összefüggéshez hasonlóval találkozhatunk a Rubik-kocka forgatása közben is. Egy forgatást jelöljön $A$, egy másikat $B$. A függvények kompozíciójához hasonlóan definiáljuk a két transzformáció szorzatát: a $B$ majd az $A$ forgatás egymás után való elvégzésével kapott transzformációt jelölje $AB$ (ld. 5.2 ábra). E transzformáció inverze visszaállítja az eredeti állapotot, ehhez előbb az $A$ transzformáció inverzét kell végrehajtani, majd a $B$ inverzét, tehát $(AB)^{-1} = B^{-1}A^{-1}$.
▶ Az $\mathbf{A}^{-k}$ d) pontbeli definíciója is megfelel a precedencia elvnek. Pl. az $\mathbf{A}^m\mathbf{A}^n = \mathbf{A}^{m+n}$ összefüggés kiterjesztése negatív kitevőre az $\mathbf{A}^k\mathbf{A}^{-k} = \mathbf{A}^0$ formulához vezet, amiből azt kapjuk, hogy $\mathbf{A}^{-k} = (\mathbf{A}^k)^{-1}$.

### Az invertálhatóság és az egyenletrendszerek megoldhatósága

A következő tétel a mátrixok invertálhatóságát, az egyenletrendszerek megoldásánál használt elemi sorműveleteket és az egyenletrendszerek megoldhatóságát kapcsolja össze.

**5.15. tétel (Az invertálhatóság és az egyenletrendszerek).** *Adva van egy $n \times n$-es $\mathbf{A}$ mátrix. Az alábbi állítások ekvivalensek:*
- a) *$\mathbf{A}$ invertálható;*
- b) *az $\mathbf{AX} = \mathbf{B}$ mátrixegyenlet bármely $n \times t$-es $\mathbf{B}$ mátrixra egyértelműen megoldható;*
- c) *az $\mathbf{Ax} = \mathbf{b}$ egyenletrendszer bármely $n$ dimenziós $\mathbf{b}$ vektorra egyértelműen megoldható;*
- d) *a homogén lineáris $\mathbf{Ax} = \mathbf{0}$ egyenletrendszernek a triviális $\mathbf{x} = \mathbf{0}$ az egyetlen megoldása;*
- e) *$\mathbf{A}$ redukált lépcsős alakja $\mathbf{I}$;*
- f) *$\mathbf{A}$ előáll elemi mátrixok szorzataként.*

*Bizonyítás.* Az állítások ekvivalenciáját az $(a) \Rightarrow (b) \Rightarrow (c) \Rightarrow (d) \Rightarrow (e) \Rightarrow (f) \Rightarrow (a)$, implikációk igazolásával bizonyítjuk.

$(a) \Rightarrow (b)$: Legyen tehát $\mathbf{A}$ invertálható és legyen $\mathbf{B}$ egy tetszőleges $n \times t$ méretű mátrix. Ekkor az $\mathbf{AX} = \mathbf{B}$ egyenlet mindkét oldalát $\mathbf{A}^{-1}$-gyel balról szorozva kapjuk, hogy $\mathbf{A}^{-1}\mathbf{AX} = \mathbf{A}^{-1}\mathbf{B}$, azaz $\mathbf{X} = \mathbf{A}^{-1}\mathbf{B}$. Ez azt mutatja, hogy egyrészt a mátrixegyenletnek van megoldása, másrészt hogy más megoldása nincs, mivel így minden megoldás megkapható, és $\mathbf{A}$ inverze egyértelmű.

$(b) \Rightarrow (c)$: Nyilvánvaló a $\mathbf{B} = \mathbf{b}$ választással.

$(c) \Rightarrow (d)$: Nyilvánvaló a $\mathbf{b} = \mathbf{0}$ választással.

$(d) \Rightarrow (e)$: Egy $n$-ismeretlenes, $n$ egyenletből álló homogén lineáris egyenletrendszer pontosan akkor oldható meg egyértelműen, ha együtthatómátrixának redukált lépcsős alakja $\mathbf{I}_n$.

$(e) \Rightarrow (f)$: Ha $\mathbf{A}$ redukált lépcsős alakja $\mathbf{I}_n$, akkor létezik elemi sorműveletek olyan sorozata, mely az $\mathbf{A} \Rightarrow \mathbf{I}_n$ transzformációt elvégzi. Jelölje az elemi sorműveletekhez tartozó elemi mátrixokat $\mathbf{E}_1, \ldots \mathbf{E}_k$. Ekkor tehát $\mathbf{E}_1\mathbf{E}_2 \ldots \mathbf{E}_k\mathbf{A} = \mathbf{I}_n$. Innen $\mathbf{A}$ kifejezhető az $\mathbf{E}_1^{-1}, \ldots \mathbf{E}_k^{-1}$-nel balról való beszorzás után:
$$\mathbf{A} = \mathbf{E}_k^{-1} \ldots \mathbf{E}_2^{-1}\mathbf{E}_1^{-1}.$$
Elemi mátrixok inverze elemi mátrix, tehát $\mathbf{A}$ előáll elemi mátrixok szorzataként.

$(f) \Rightarrow (a)$: Az $\mathbf{A} = \mathbf{E}_k^{-1} \ldots \mathbf{E}_2^{-1}\mathbf{E}_1^{-1}$ mátrix minden tényezője invertálható, mivel mindegyik elemi mátrix, így szorzatuk is, és az inverz
$$\mathbf{A}^{-1} = \mathbf{E}_1\mathbf{E}_2 \ldots \mathbf{E}_k. \qquad \square$$

▶ A tétel sok pontjának ekvivalenciája azt jelenti, hogy közülük bármely kettőre igaz, hogy „az egyik pontosan akkor igaz, ha a másik". Például „$\mathbf{A}$ pontosan akkor invertálható, ha az $\mathbf{Ax} = \mathbf{b}$ egyenletrendszer minden $\mathbf{b}$ vektorra egyértelműen megoldható".
▶ Később megmutatjuk azt is, hogy $\mathbf{A}$ pontosan akkor invertálható, ha az $\mathbf{Ax} = \mathbf{b}$ egyenletrendszer minden $\mathbf{b}$ vektorra megoldható. Azaz az egyértelműség a feltételből kihagyható. Másként fogalmazva, ha $\mathbf{Ax} = \mathbf{b}$ minden $\mathbf{b}$ vektorra megoldható, akkor a megoldás minden $\mathbf{b}$-re egyértelmű.

**5.16. példa (Egyenletrendszer megoldása mátrixinvertálással).** *Oldjuk meg az*
$$\begin{alignedat}{9} 2x &{}+{}& y &{}={}& 2 \\ 5x &{}+{}& 3y &{}={}& 3 \end{alignedat}$$
*egyenletrendszert mátrixinvertálással.*

*Megoldás.* Az együtthatómátrix és inverze az 5.13. tétel szerint
$$\mathbf{A} = \begin{bmatrix} 2 & 1 \\ 5 & 3 \end{bmatrix}, \quad \mathbf{A}^{-1} = \begin{bmatrix} 3 & -1 \\ -5 & 2 \end{bmatrix},$$
így az ismeretlenek $(x, y)$ vektorára
$$\begin{bmatrix} x \\ y \end{bmatrix} = \mathbf{A}^{-1}\begin{bmatrix} 2 \\ 3 \end{bmatrix} = \begin{bmatrix} 3 & -1 \\ -5 & 2 \end{bmatrix}\begin{bmatrix} 2 \\ 3 \end{bmatrix} = \begin{bmatrix} 3 \\ -4 \end{bmatrix}. \qquad \square$$

**5.17. példa (Mátrixegyenlet megoldása mátrixinvertálással).** *Oldjuk meg az $\mathbf{AX} = \mathbf{B}$ mátrixegyenletet, ahol*
$$\mathbf{A} = \begin{bmatrix} 2 & 1 \\ 5 & 3 \end{bmatrix}, \quad \text{és} \quad \mathbf{B} = \begin{bmatrix} 1 & 3 & 2 \\ 4 & 3 & 1 \end{bmatrix}.$$

*1. megoldás.* Az $\mathbf{A}$ mátrix megegyezik az előző feladatbeli mátrixszal, így tudjuk, hogy invertálható, és ismerjük az inverzét. Az $\mathbf{AX} = \mathbf{B}$ mátrixegyenlet megoldása:
$$\mathbf{X} = \mathbf{A}^{-1}\mathbf{B} = \begin{bmatrix} 3 & -1 \\ -5 & 2 \end{bmatrix}\begin{bmatrix} 1 & 3 & 2 \\ 4 & 3 & 1 \end{bmatrix} = \begin{bmatrix} -1 & 6 & 5 \\ 3 & -9 & -8 \end{bmatrix}. \qquad \square$$

*2. megoldás.* Minden $\mathbf{AX} = \mathbf{B}$ alakú mátrixegyenlet invertálható $\mathbf{A}$ esetén megoldható szimultán egyenletrendszerként az $[\mathbf{A}|\mathbf{B}]$ mátrix redukált lépcsős alakra hozásával. Tehát így számolható minden $\mathbf{A}^{-1}\mathbf{B}$ szorzat. E példában:
$$\left[\begin{array}{cc|ccc} 2 & 1 & 1 & 3 & 2 \\ 5 & 3 & 4 & 3 & 1 \end{array}\right] \Longrightarrow \left[\begin{array}{cc|ccc} 1 & 0 & -1 & 6 & 5 \\ 0 & 1 & 3 & -9 & -8 \end{array}\right] \qquad \square$$

▶ Megjegyezzük, hogy lineáris egyenletrendszert mátrixinvertálással ritkán oldunk meg, mert műveleigénye valamivel nagyobb, mint az egyszerű kiküszöbölésnek.

**5.18. példa (Mátrix elemi mátrixok szorzatára bontása).** *Bontsuk fel az $\mathbf{A} = \begin{bmatrix} 1 & 2 \\ 3 & 5 \end{bmatrix}$ mátrixot elemi mátrixok szorzatára!*

*Megoldás.* Az 5.15. tétel bizonyításának $(e) \Rightarrow (f)$ lépése szerint ha egy $\mathbf{A}$ mátrixot elemi sorműveletekkel az egységmátrixba lehet transzformálni, akkor az elemi sorműveletek inverzei fordított sorrendben elvégezve az $\mathbf{I}$-t $\mathbf{A}$-ba transzformálják. Ez viszont azt jelenti, hogy a hozzájuk tartozó elemi mátrixok szorzata épp $\mathbf{A}$.

| Elemi sorműveletek | Elemi mátrixok | Elemi mátrixok inverzei |
|---|---|---|
| $\begin{bmatrix} 1 & 2 \\ 3 & 5 \end{bmatrix}$ | | |
| $\Downarrow\; S_2 - 3S_1$ | $\mathbf{E}_1 = \begin{bmatrix} 1 & 0 \\ -3 & 1 \end{bmatrix}$ | $\mathbf{E}_1^{-1} = \begin{bmatrix} 1 & 0 \\ 3 & 1 \end{bmatrix}$ |
| $\begin{bmatrix} 1 & 2 \\ 0 & -1 \end{bmatrix}$ | | |
| $\Downarrow\; -S_2$ | $\mathbf{E}_2 = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}$ | $\mathbf{E}_2^{-1} = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}$ |
| $\begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix}$ | | |
| $\Downarrow\; S_1 - 2S_2$ | $\mathbf{E}_3 = \begin{bmatrix} 1 & -2 \\ 0 & 1 \end{bmatrix}$ | $\mathbf{E}_3^{-1} = \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix}$ |
| $\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$ | | |

A fenti átalakítás nyomán tehát $\mathbf{E}_3\mathbf{E}_2\mathbf{E}_1\mathbf{A} = \mathbf{I}$, amiből $\mathbf{A} = \mathbf{E}_1^{-1}\mathbf{E}_2^{-1}\mathbf{E}_3^{-1}$, azaz
$$\begin{bmatrix} 1 & 2 \\ 3 & 5 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 3 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}\begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix},$$
így $\mathbf{A}$-t három elemi mátrix szorzatára bontottuk. $\square$

### Invertálhatóság és bázis

Az 5.15. tétel szerint a négyzetes $\mathbf{A}$ mátrix invertálhatósága azzal ekvivalens, hogy a homogén lineáris $\mathbf{Ax} = \mathbf{0}$ egyenletrendszernek a triviális az egyetlen megoldása. Mivel $\mathbf{Ax}$ az $\mathbf{A}$ oszlopvektorainak egy lineáris kombinációja, ezért ez azt jelenti,

hogy a nullvektor csak egyféleképp áll elő $\mathbf{A}$ oszlopvektorainak lineáris kombinációjaként, a triviális módon. Tehát $\mathbf{A}$ oszlopvektorai lineárisan függetlenek! Ez egyúttal azt is jelenti, hogy $\mathbf{A}$ oszlopvektorai bázist alkotnak, és hogy $\operatorname{r}(\mathbf{A}) = n$. Felhasználva a ?? tételt, mely szerint a sortér és az oszloptér dimenziója megegyezik a ranggal, a következő tételt kapjuk:

**5.19. következmény (Invertálhatóság és bázis).** *Adva van egy valós $n \times n$-es $\mathbf{A}$ mátrix. Az alábbi állítások ekvivalensek:*
- a) *$\mathbf{A}$ invertálható;*
- b) *$\mathbf{A}$ oszlopvektorai lineárisan függetlenek;*
- c) *$\mathbf{A}$ oszlopvektorai bázist alkotnak $\mathbb{R}^n$-ben;*
- d) *$\mathbf{A}$ sorvektorai lineárisan függetlenek;*
- e) *$\mathbf{A}$ sorvektorai bázist alkotnak $\mathbb{R}^n$-ben;*
- f) *$\operatorname{r}(\mathbf{A}) = n$.*

A fenti állításokat a tagadásukkal helyettesítjük és kiegészítjük azzal, hogy ha egy mátrix sorvektorai közt lineáris kapcsolat van, akkor a redukált lépcsős alakban szükségképpen lesz zérussor:

**5.20. következmény (Szinguláris mátrixok).** *Adva van egy valós $n \times n$-es $\mathbf{A}$ mátrix. Az alábbi állítások ekvivalensek:*
- a) *$\mathbf{A}$ szinguláris (azaz nem invertálható);*
- b) *$\mathbf{A}$ oszlopvektorai lineárisan összefüggők;*
- c) *az $\mathbf{A}$ oszlopvektorai által kifeszített altér dimenziója kisebb $n$-nél;*
- d) *$\mathbf{A}$ sorvektorai lineárisan összefüggők;*
- e) *az $\mathbf{A}$ sorvektorai által kifeszített altér dimenziója kisebb $n$-nél;*
- f) *$\mathbf{A}$ bármely lépcsős alakjának (így a redukáltnak is) van zérus sora;*
- g) *$\operatorname{r}(\mathbf{A}) < n$.*

### Báziscsere

Legyen $\mathcal{B}$ és $\mathcal{C}$ az $\mathbb{R}^n$ két bázisa, és jelölje $\mathbf{X}_{\mathcal{C} \leftarrow \mathcal{B}}$ a $\mathcal{B}$-ről $\mathcal{C}$-re, $\mathbf{Y}_{\mathcal{B} \leftarrow \mathcal{C}}$ a $\mathcal{C}$-ről $\mathcal{B}$-re való áttérés mátrixát. Legyen továbbá $\mathbf{v}$ a tér egy tetszőleges vektora, a $\mathcal{B}$ bázisbeli alakja $[\mathbf{v}]_{\mathcal{B}}$. A 4.24. tétel szerint
$$[\mathbf{v}]_{\mathcal{C}} = \mathbf{X}_{\mathcal{C} \leftarrow \mathcal{B}}[\mathbf{v}]_{\mathcal{B}}, \quad \text{és} \quad [\mathbf{v}]_{\mathcal{B}} = \mathbf{Y}_{\mathcal{B} \leftarrow \mathcal{C}}[\mathbf{v}]_{\mathcal{C}}.$$
A második egyenletbe helyettesítve az elsőt kapjuk, hogy
$$[\mathbf{v}]_{\mathcal{B}} = \mathbf{Y}_{\mathcal{B} \leftarrow \mathcal{C}}\mathbf{X}_{\mathcal{C} \leftarrow \mathcal{B}}[\mathbf{v}]_{\mathcal{B}},$$
azaz $\mathbf{Y}_{\mathcal{B} \leftarrow \mathcal{C}}\mathbf{X}_{\mathcal{C} \leftarrow \mathcal{B}}$ minden vektort önmagába visz, tehát egyenlő az egységmátrixszal.

**5.21. tétel (Az áttérés mátrixának inverze).** *Ha $\mathcal{B}$ és $\mathcal{C}$ az $\mathbb{R}^n$ két bázisa, akkor az áttérések $\mathbf{X}_{\mathcal{C} \leftarrow \mathcal{B}}$ és $\mathbf{Y}_{\mathcal{B} \leftarrow \mathcal{C}}$ mátrixa egymás inverze, azaz $\mathbf{X}_{\mathcal{C} \leftarrow \mathcal{B}}\mathbf{Y}_{\mathcal{B} \leftarrow \mathcal{C}} = \mathbf{I}_n$.*

**5.22. példa (Az áttérés mátrixának inverze).** *Az $\mathbb{R}^3$ egy $\mathcal{B} = \{ \mathbf{b}_1, \mathbf{b}_2, \mathbf{b}_3 \}$ bázisában felírtuk a standard egységvektorokat:*
$$\mathbf{i} = \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix}_{\mathcal{B}}, \quad \mathbf{j} = \begin{bmatrix} 1 \\ 2 \\ 2 \end{bmatrix}_{\mathcal{B}}, \quad \mathbf{k} = \begin{bmatrix} 1 \\ 3 \\ 4 \end{bmatrix}_{\mathcal{B}}.$$
*Írjuk fel $\mathcal{B}$ bázisvektorainak standard bázisbeli koordinátás alakját!*

*Megoldás.* Jelölje $\mathcal{E}$ a standard bázist. Ennek vektorait kifejeztük a $\mathcal{B}$ bázis elemeivel, az ezekből képzett mátrixszal tehát az $\mathcal{E}$-beli vektorok $\mathcal{B}$-beli koordinátás alakja fölírható, tehát ez a $\mathcal{B} \leftarrow \mathcal{E}$ áttérés mátrixa, azaz
$$\mathbf{X}_{\mathcal{B} \leftarrow \mathcal{E}} = \begin{bmatrix} 1 & 1 & 1 \\ 1 & 2 & 3 \\ 1 & 2 & 4 \end{bmatrix}.$$
Ennek inverze a keresett mátrix:
$$\mathbf{Y}_{\mathcal{E} \leftarrow \mathcal{B}} = \mathbf{X}_{\mathcal{B} \leftarrow \mathcal{E}}^{-1} = \begin{bmatrix} 1 & 1 & 1 \\ 1 & 2 & 3 \\ 1 & 2 & 4 \end{bmatrix}^{-1} = \begin{bmatrix} 2 & -2 & 1 \\ -1 & 3 & -2 \\ 0 & -1 & 1 \end{bmatrix}.$$
Ennek oszlopvektorai adják a $\mathcal{B}$ vektorainak $\mathcal{E}$-beli alakját. $\square$

**5.23. példa (Áttérés mátrixa).** *Legyen*
$$\mathcal{B} = \{ (1, 0, 0), (1, 1, 0), (1, 1, 1) \}, \text{ és } \mathcal{C} = \{ (1, 2, 3), (0, 1, 2), (0, 0, 1) \}$$
*két bázis $\mathbb{R}^3$-ben. Írjuk fel a $\mathcal{B}$-ről a $\mathcal{C}$-re való áttérés mátrixát!*

*1. megoldás.* A bázisokból a következő áttérésmátrixok olvashatók le:
$$\mathbf{B}_{\mathcal{E} \leftarrow \mathcal{B}} = \begin{bmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{bmatrix}, \quad \mathbf{C}_{\mathcal{E} \leftarrow \mathcal{C}} = \begin{bmatrix} 1 & 0 & 0 \\ 2 & 1 & 0 \\ 3 & 2 & 1 \end{bmatrix}.$$
Innen $\mathbf{D}_{\mathcal{C} \leftarrow \mathcal{E}} = \mathbf{C}_{\mathcal{E} \leftarrow \mathcal{C}}^{-1}$, így $\mathbf{X}_{\mathcal{C} \leftarrow \mathcal{B}} = \mathbf{D}_{\mathcal{C} \leftarrow \mathcal{E}}\mathbf{B}_{\mathcal{E} \leftarrow \mathcal{B}}$, azaz
$$\mathbf{X}_{\mathcal{C} \leftarrow \mathcal{B}} = \begin{bmatrix} 1 & 0 & 0 \\ 2 & 1 & 0 \\ 3 & 2 & 1 \end{bmatrix}^{-1}\begin{bmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 1 & 1 \\ -2 & -1 & -1 \\ 1 & -1 & 0 \end{bmatrix}. \qquad \square$$

*2. megoldás.* A bázisokból leolvasható mátrixok közt az $\mathbf{C}_{\mathcal{E} \leftarrow \mathcal{C}}\mathbf{X}_{\mathcal{C} \leftarrow \mathcal{B}} = \mathbf{B}_{\mathcal{E} \leftarrow \mathcal{B}}$ összefüggés áll fenn, ahol $\mathbf{X}_{\mathcal{C} \leftarrow \mathcal{B}}$ az ismeretlen mátrix, mely az $[\mathbf{C}_{\mathcal{E} \leftarrow \mathcal{C}}|\mathbf{B}_{\mathcal{E} \leftarrow \mathcal{B}}]$ redukált lépcsős alakjából olvasható le:
$$\left[\begin{array}{ccc|ccc} 1 & 0 & 0 & 1 & 1 & 1 \\ 2 & 1 & 0 & 0 & 1 & 1 \\ 3 & 2 & 1 & 0 & 0 & 1 \end{array}\right] \Longrightarrow \left[\begin{array}{ccc|ccc} 1 & 0 & 0 & 1 & 1 & 1 \\ 0 & 1 & 0 & -2 & -1 & -1 \\ 0 & 0 & 1 & 1 & -1 & 0 \end{array}\right],$$
tehát
$$\mathbf{X}_{\mathcal{C} \leftarrow \mathcal{B}} = \begin{bmatrix} 1 & 1 & 1 \\ -2 & -1 & -1 \\ 1 & -1 & 0 \end{bmatrix},$$
ami megegyezik az előző megoldással. $\square$

### Gyorsszorzás

Két $2 \times 2$-es mátrix szokásos módon való összeszorzásához 8 szorzásra és 4 összeadásra van szükség. Strassen 1969-ben egy olyan módszert talált, mellyel e mátrixszorzást 7 szorzással is el lehet végezni, igaz azon az áron, hogy az összeadások száma 16-ra nő.

**5.1. (Strassen-formulák).** *Legyen $\mathbf{A}$, $\mathbf{B}$ és $\mathbf{C}$ is $2 \times 2$-es. A $\mathbf{C} = \mathbf{AB}$ szorzás elvégezhető a következő formulákkal:*
$$\begin{aligned}
d_1 &= (a_{11} + a_{22})(b_{11} + b_{22}) & \qquad c_{11} &= d_1 + d_4 - d_5 + d_7 \\
d_2 &= (a_{21} + a_{22})b_{11} & c_{21} &= d_2 + d_4 \\
d_3 &= a_{11}(b_{12} - b_{22}) & c_{12} &= d_3 + d_5 \\
d_4 &= a_{22}(-b_{11} + b_{21}) & c_{22} &= d_1 + d_3 - d_2 + d_6 \\
d_5 &= (a_{11} + a_{12})b_{22} \\
d_6 &= (-a_{11} + a_{21})(b_{11} + b_{12}) \\
d_7 &= (a_{12} - a_{22})(b_{21} + b_{22})
\end{aligned}$$

Az ötlet nagyszerűsége abban van, hogy e módszer kiterjeszthető tetszőleges méretű négyzetes mátrixokra is, és elegendően nagy $n$-ekre az e módon elvégzett mátrixszorzás műveletigénye kisebb lesz a hagyományos módon elvégzettnél. A standard mátrixszorzás műveletigénye $2n^3 - n^2$ (ebből $n^3$ szorzás és $n^3 - n^2$ összeadás – gondoljunk utána!), a Strassen-formulákkal való szorzás $n = 2^k$ esetén legföljebb $7 \cdot 7^k - 6 \cdot 4^k$. Ez $n = 2^{10}$ esetén már kevesebb műveletet ad. Az általánosítás lényege, hogy a Strassen-formulák $2 \times 2$-es blokkmátrixokra is használhatók, mert a szorzás kommutativitását nem használják, így ha $M(n)$ jelöli két $n \times n$-es mátrix összeszorzásához szükséges szorzások, és $S(n)$ a szükséges összeadások számát, akkor $M(2n) \leq 7M(n)$ és $S(2n) \leq 18n^2 + 7S(n)$. Az $M(1) = 1$, $S(1) = 0$ kezdeti feltételeket is használva megmutatható, hogy $M(2^k) \leq 7^k$, $S(2^k) \leq 6(7^k - 4^k)$. E képletekből a felső egészrész jelét használva és a $k = \lceil \log_2 n \rceil$ jelöléssel az műveletek összámára a $cn^{\log_2 7} \leq cn^{2.81}$ felső becslést kapjuk, ami a $2n^3 - n^2$ értéknél jobb, függetlenül a $c$ konstans konkrét értékétől. Mivel a két összeszorzandó mátrix mindegyikének mind az $n^2$ elemét használni kell, ezért a szükséges műveletek számának alsó becslése $cn^2$. A $cn^{2.81}$ felső becslés 1990-ben $cn^{2.375477}$ lett javítva (Coppersmith és Winograd), a 2015-ben ismert legjobb korlát $cn^{2.3728639}$, de az a sejtés, hogy a kitevő 2-re, de legalább $2 + \varepsilon$-ra lenyomható, ahol $\varepsilon$

tetszőlegesen kis pozitív szám.

A módszer gyengéje numerikus instabilitása, így a gyakorlatban csak bizonyos mátrixokra érdemes használni, például nagyméretű egészelemű mátrixokra tetszőleges pontosságú aritmetika használata esetén.

### Feladatok

#### Igaz – hamis

**5.1.** A négyzetes $\mathbf{A}$ mátrix pontosan akkor invertálható, ha elemi sorműveletekkel megkapható az $\mathbf{I}$ mátrixból.

**5.2.** Ha elemi sorműveletek $\mathbf{A}$-t $\mathbf{B}$-be viszik, akkor az inverz sorműveletek $\mathbf{B}$-t $\mathbf{A}$-ba viszik.

**5.3.** Ha elemi sorműveletek $\mathbf{A}$-t $\mathbf{B}$-be viszik, akkor az inverz sorműveletek fordított sorrendben végrehajtva $\mathbf{B}$-t $\mathbf{A}$-ba viszik.

#### Műveleti azonosságok

**5.4.** *Összeadás és skalárral szorzás tulajdonságai.* Legyen $\mathbf{A}$, $\mathbf{B}$ és $\mathbf{C}$ azonos típusú ($m \times n$-es) mátrix, $c$ és $d$ legyenek skalárok. Ekkor
- a) $\mathbf{A} + \mathbf{B} = \mathbf{B} + \mathbf{A}$ (felcserélhetőség, kommutativitás)
- b) $\mathbf{A} + (\mathbf{B} + \mathbf{C}) = (\mathbf{A} + \mathbf{B}) + \mathbf{C}$ (csoportosíthatóság, asszociativitás)
- c) $\mathbf{A} + \mathbf{O}_{m \times n} = \mathbf{A}$ (zérusmátrix)
- d) $\mathbf{A} + (-\mathbf{A}) = \mathbf{O}_{m \times n}$ (ellentett létezése)
- e) $c(d\mathbf{A}) = (cd)\mathbf{A}$ (csoportosíthatóság)
- f) $(c + d)\mathbf{A} = c\mathbf{A} + d\mathbf{A}$ (disztributivitás)
- g) $c(\mathbf{A} + \mathbf{B}) = c\mathbf{A} + c\mathbf{B}$ (disztributivitás)
- h) $0\mathbf{A} = \mathbf{O}_{m \times n}$, $1\mathbf{A} = \mathbf{A}$, $-1\mathbf{A} = -\mathbf{A}$

**5.5.** Egy algebrai kifejezésben végrehajtjuk az alábbi helyettesítést:
$$\begin{aligned} u &= 3x_1 + 2x_2 + 4x_3 \\ v &= x_1 - 3x_2 + x_3 \\ w &= 2x_1 - x_2 - 3x_3 \end{aligned}$$
Írjuk fel a lineáris helyettesítést mátrixszorzatos alakban. Legyen $(u^2 + v^2 + w^2)(2u - v - w)$ az a kifejezés, melyben a helyettesítést elvégezzük. Írjuk fel e kifejezést a helyettesítés előtt és után mátrixműveletek segítségével!

#### Számítási feladatok

Bontsuk fel a következő mátrixokat elemi mátrixok szorzatára!

**5.6.** $\begin{bmatrix} 1 & 3 \\ 2 & 8 \end{bmatrix}$

**5.7.** $\begin{bmatrix} 1 & 2 \\ -2 & -1 \end{bmatrix}$

**5.8.** $\begin{bmatrix} 1 & -1 \\ 1 & 1 \end{bmatrix}$

**5.9.** $\begin{bmatrix} 2 & 4 \\ 3 & 8 \end{bmatrix}$

**5.10.** $\begin{bmatrix} 2 & 0 & 4 \\ 0 & 2 & 0 \\ 3 & 2 & 7 \end{bmatrix}$

**5.11.** $\begin{bmatrix} 1 & 1 & 2 \\ 1 & 2 & 2 \\ 2 & 4 & 5 \end{bmatrix}$

**5.12.** Határozzuk meg az összes olyan $2 \times 2$-es $\mathbf{A}$ mátrixot, melyre $\mathbf{A}^2 = \mathbf{O}$. Másként fogalmazva határozzuk meg a nullmátrix összes négyzetgyökét!

**5.13.** Számítsuk ki az
$$\mathbf{A} = \begin{bmatrix} 0 & 1 \\ 1 & 1 \end{bmatrix}$$
mátrix $k$-adik hatványait!

**5.14.** Írjuk fel a mátrixszorzás definícióját az Einstein-konvenciót használva.

#### Blokkmátrixok

**5.15.** Mutassuk meg, hogy ha $\mathbf{A}$ és $\mathbf{D}$ invertálható mátrixok, akkor a következő ún. blokkdiagonális mátrix invertálható, és inverze
$$\begin{bmatrix} \mathbf{A} & \mathbf{O} \\ \mathbf{O} & \mathbf{D} \end{bmatrix}^{-1} = \begin{bmatrix} \mathbf{A}^{-1} & \mathbf{O} \\ \mathbf{O} & \mathbf{D}^{-1} \end{bmatrix}.$$
továbbá tetszőleges, de megfelelő típusú $\mathbf{B}$ mátrix esetén
$$\begin{bmatrix} \mathbf{A} & \mathbf{B} \\ \mathbf{O} & \mathbf{D} \end{bmatrix}^{-1} = \begin{bmatrix} \mathbf{A}^{-1} & -\mathbf{A}^{-1}\mathbf{B}\mathbf{D}^{-1} \\ \mathbf{O} & \mathbf{D}^{-1} \end{bmatrix}.$$

**5.16.** Mutassuk meg, hogy ha $\mathbf{A}$ és $\mathbf{D}$ négyzetes mátrixok, akkor
$$\begin{bmatrix} \mathbf{A} & \mathbf{B} \\ \mathbf{C} & \mathbf{D} \end{bmatrix}^{-1} = \begin{bmatrix} \mathbf{X} & -\mathbf{X}\mathbf{B}\mathbf{D}^{-1} \\ -\mathbf{D}^{-1}\mathbf{C}\mathbf{X} & \mathbf{D}^{-1} + \mathbf{D}^{-1}\mathbf{C}\mathbf{X}\mathbf{B}\mathbf{D}^{-1} \end{bmatrix},$$
ahol $\mathbf{X} = (\mathbf{A} - \mathbf{B}\mathbf{D}^{-1}\mathbf{C})^{-1}$, és feltételezzük, hogy minden felírt mátrixinverz létezik.

Az előbbi két feladat valamelyikének felhasználásával számítsuk ki az alábbi mátrixok inverzét!

**5.17.** $\begin{bmatrix} 2 & 3 & 0 & 0 & 0 \\ 1 & 2 & 0 & 0 & 0 \\ 0 & 0 & 7 & 3 & 3 \\ 0 & 0 & 8 & 1 & 2 \\ 0 & 0 & 4 & 4 & 3 \end{bmatrix}$

**5.18.** $\begin{bmatrix} 2 & 3 & 1 & 1 & 1 \\ 1 & 2 & 1 & 1 & 1 \\ 0 & 0 & 7 & 3 & 3 \\ 0 & 0 & 8 & 1 & 2 \\ 0 & 0 & 4 & 4 & 3 \end{bmatrix}$

**5.19.** $\begin{bmatrix} 2 & 3 & 1 & 1 & 1 \\ 1 & 2 & 1 & 1 & 1 \\ 1 & 1 & 1 & 0 & 0 \\ 1 & 1 & 0 & 1 & 0 \\ 1 & 1 & 0 & 0 & 1 \end{bmatrix}$

#### Bizonyítások

**5.20.** Bizonyítsuk be, hogy ha $c\mathbf{A} = \mathbf{O}$, akkor vagy $c = 0$, vagy $\mathbf{A} = \mathbf{O}$.

**5.21.** *Sorművelet és elemi mátrix inverze.* Az $S_i \leftrightarrow S_j$ sorművelethez tartozó elemi mátrixot jelölje $\mathbf{E}_{ij}$, a $cS_i$-hez tartozót $\mathbf{E}_i(c)$ és a $S_i + cS_j$ sorművelethez tartozót $\mathbf{E}_{ij}(c)$. Mutassuk meg, hogy $\mathbf{E}_{ij}^{-1} = \mathbf{E}_{ij}$, $\mathbf{E}_i(c)^{-1} = \mathbf{E}_i(\frac{1}{c})$ és $\mathbf{E}_{ij}(c)^{-1} = \mathbf{E}_{ij}(-c)$.

**5.22.** Mutassuk meg, hogy ha $\mathbf{A}$ fölcserélhető $\mathbf{B}$-vel és $\mathbf{B}$ invertálható, akkor $\mathbf{A}$ fölcserélhető $\mathbf{B}^{-1}$-gyel is.

#### Absztrakció

**5.23.** *Invertálható művelet.* Legyen $\odot$ egy $H$-n értelmezett kétváltozós művelet, azaz egy $H^2 \to H$ függvény. Fogalmazzuk meg, mit értünk azon, hogy $\odot$ invertálható egy $R \subseteq H$ részhalmazán. Hogyan változik a definíció, ha a művelet kommutatív?

**5.24.** *Elem inverze.* Legyen $\odot$ egy $H$-n értelmezett kétváltozós művelet.
1. Mit értünk azon, hogy $e \in H$ e művelet semleges eleme?
2. Mit értünk azon, hogy $b \in H$ az $a \in H$ elem inverze?

**5.25.•** *Gyorsinvertálás.* Legyen $\mathbf{B} = \mathbf{A}^{-1}$, mindketten $2 \times 2$-es mátrixok. Mutassuk meg, hogy az alábbi eljárással definiált mátrixinvertálás segítségével $n \times n$-es mátrixokra olyan algoritmus készíthető, melynek műveletigénye legföljebb $cn^{2.81}$.
$$\begin{aligned}
c_1 &= a_{11}^{-1} & \qquad b_{12} &= c_3 c_6 \\
c_2 &= a_{21}c_1 & b_{21} &= c_6 c_2 \\
c_3 &= c_1 a_{12} & c_7 &= c_3 b_{21} \\
c_4 &= c_2 a_{12} & b_{11} &= c_1 - c_7 \\
c_5 &= c_4 - a_{22} & b_{22} &= -c_6 \\
c_6 &= c_5^{-1}
\end{aligned}$$

#### Mátrix és diád összegének inverze

*Összegmátrix inverzére nincs egyszerű képlet, de speciális mátrixokra nagyon hasznos eredmények vannak.*

**5.26.** *Sherman–Morrison-formula.* Tegyük fel, hogy az $\mathbf{A} \in \mathbb{R}^{n \times n}$ mátrix invertálható, és $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$ két olyan vektor, hogy $1 + \mathbf{v}^\mathsf{T}\mathbf{A}^{-1}\mathbf{u} \neq 0$. Ekkor $\mathbf{A} + \mathbf{u}\mathbf{v}^\mathsf{T}$ invertálható, és
$$(\mathbf{A} + \mathbf{u}\mathbf{v}^\mathsf{T})^{-1} = \mathbf{A}^{-1} - \frac{\mathbf{A}^{-1}\mathbf{u}\mathbf{v}^\mathsf{T}\mathbf{A}^{-1}}{1 + \mathbf{v}^\mathsf{T}\mathbf{A}^{-1}\mathbf{u}}.$$

**5.27.** *Inverz változása a mátrix egy elemének változása függvényében.* Legyen $\mathbf{A}$ invertálható mátrix, és változtassuk meg az $a_{ij}$ elemet $a_{ij} + \varepsilon$-ra. Fejezzük ki az így kapott mátrix inverzét $\mathbf{A}^{-1}$ segítségével.

**5.28.•** *Inverz változása számpéldán.* Adva van egy $\mathbf{A}$ mátrix és annak inverze:
$$\mathbf{A} = \begin{bmatrix} 1 & 2 & 3 & 4 \\ 2 & 0 & 0 & 3 \\ 3 & 0 & 0 & 2 \\ 4 & 3 & 2 & 1 \end{bmatrix} \quad \mathbf{A}^{-1} = \begin{bmatrix} 0 & -2/5 & 3/5 & 0 \\ -2/5 & 7/5 & -8/5 & 3/5 \\ 3/5 & -8/5 & 7/5 & -2/5 \\ 0 & 3/5 & -2/5 & 0 \end{bmatrix}.$$
Változtassuk meg $a_{11}$ értékét 1-ről $11/10$-re. Az így kapott mátrixot jelölje $\mathbf{B}$. Határozzuk meg inverzét!

## Műveletek speciális mátrixokkal

*A gyakorlatban gyakran találkozunk olyan speciális mátrixokkal, melyekkel a műveletek egyszerűbben végezhetők el.*

### Diagonális mátrixok

A diagonális mátrixokkal végzett mátrixműveletek szabályai igen egyszerűek.

Legyen $\mathbf{A} = \operatorname{diag}(1, 2, 3)$, $\mathbf{B} = \operatorname{diag}(5, 4, 3)$. Ekkor
$$\mathbf{AB} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{bmatrix}\begin{bmatrix} 5 & 0 & 0 \\ 0 & 4 & 0 \\ 0 & 0 & 3 \end{bmatrix} = \begin{bmatrix} 5 & 0 & 0 \\ 0 & 8 & 0 \\ 0 & 0 & 9 \end{bmatrix},$$
$$\mathbf{A}^2 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{bmatrix}^2 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 4 & 0 \\ 0 & 0 & 9 \end{bmatrix}, \quad \mathbf{A}^{-1} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{bmatrix}^{-1} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & \frac{1}{2} & 0 \\ 0 & 0 & \frac{1}{3} \end{bmatrix},$$
$$\mathbf{A}^k = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{bmatrix}^k = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 2^k & 0 \\ 0 & 0 & 3^k \end{bmatrix}, \text{ ahol } k \text{ egész szám.}$$

Mindezek alapján könnyen igazolható a következő tétel:

**5.24. tétel (Műveletek diagonális mátrixokkal).** *Legyen $\mathbf{A} = \operatorname{diag}(a_1, a_2, \ldots, a_n)$, $\mathbf{B} = \operatorname{diag}(b_1, b_2, \ldots, b_n)$, és legyen $k$ egész. Ekkor*
- a) *$\mathbf{AB} = \operatorname{diag}(a_1 b_1, a_2 b_2, \ldots, a_n b_n)$,*
- b) *$\mathbf{A}^k = \operatorname{diag}(a_1^k, a_2^k, \ldots, a_n^k)$, speciálisan*
- c) *$\mathbf{A}^{-1} = \operatorname{diag}(a_1^{-1}, a_2^{-1}, \ldots, a_n^{-1})$.*

*A c)- és negatív $k$ esetén a b)-beli művelet pontosan akkor végezhető el, ha $a_i \neq 0$ ($i = 1, 2, \ldots, n$).*

### Permutáló mátrixok és kígyók

Könnyen kezelhetők a diagonális mátrixok sorainak permutációjával kapott mátrixok is.

Tudjuk, hogy bármely permutáció megkapható elempárok cseréjének egymás után való elvégzésével. Az algebra nyelvén fogalmazva bármely permutáció transzpozíciók szorzatára bontható. Például az $\{1, 2, 3, 4\}$ halmaz $\{2, 4, 3, 1\}$ permutációja megkapható az alábbi transzpozíciókkal (elempár-cserékkel):
$$\{1, 2, 3, 4\} \to \{2, 1, 3, 4\} \to \{2, 4, 3, 1\}$$
Így, ha egy mátrix sorait permutáljuk, azaz végrehajtunk rajta néhány sorcserét, akkor ez elérhető a sorcseréket adó elemi mátrixokkal való balról szorzásokkal. Ezeknek az elemi mátrixoknak a szorzataként kapott mátrix úgy kapható az egységmátrixból, hogy a megadott sorcseréket végrehajtjuk rajta. Például a $\{2, 4, 3, 1\}$ permutációt végrehajtva az $\mathbf{I}_4$ egységmátrixon, a következő $\mathbf{P}$ mátrixot kapjuk:
$$\mathbf{I}_4 = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} \xrightarrow{S_1 \leftrightarrow S_2} \begin{bmatrix} 0 & 1 & 0 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} \xrightarrow{S_2 \leftrightarrow S_4} \begin{bmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 \\ 1 & 0 & 0 & 0 \end{bmatrix} = \mathbf{P}$$
Ezzel balról szorozva egy tetszőleges $4 \times m$-es mátrixot, annak sorait a fenti permutáció szerint fogja fölcserélni, például
$$\mathbf{PA} = \begin{bmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 \\ 1 & 0 & 0 & 0 \end{bmatrix}\begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \\ a_{31} & a_{32} \\ a_{41} & a_{42} \end{bmatrix} = \begin{bmatrix} a_{21} & a_{22} \\ a_{41} & a_{42} \\ a_{31} & a_{32} \\ a_{11} & a_{12} \end{bmatrix}$$

**5.25. definíció (Permutáló mátrix, kígyó).** *A diagonális mátrixok sorainak permutációjával kapott mátrixot* kígyónak *(más néven transzverzálisnak) nevezzük, speciálisan az egységmátrixból ugyanígy kapott mátrixot* permutáló mátrixnak *(vagy permutációmátrixnak) hívjuk.*

▶ Például az alábbi mátrixok mindegyike kígyó, az utolsó kettő egyúttal permutáló mátrix is:
$$\begin{bmatrix} 0 & 5 & 0 \\ 0 & 0 & 9 \\ 3 & 0 & 0 \end{bmatrix}, \quad \begin{bmatrix} 0 & \alpha & 0 & 0 \\ \gamma & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & \beta \end{bmatrix}, \quad \begin{bmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 \\ 1 & 0 & 0 & 0 \end{bmatrix}, \quad \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}.$$
▶ Könnyen látható, hogy a permutáló mátrix olyan négyzetes mátrix, melynek minden sorában és minden oszlopában *pontosan* egy 1-es van, az összes többi elem 0. A kígyó olyan négyzetes mátrix, melynek minden sorában és minden oszlopában *legföljebb* egy nemnulla elem van.
▶ Minden kígyó megkapható egy diagonális mátrixból oszlopcserékkel is. Egy diagonális mátrixból akkor is kígyót kapunk, ha a sorok permutációja mellett az oszlopokat is permutáljuk.
▶ Ha $\mathbf{P}$ egy permutáló mátrix, akkor $\mathbf{PA}$ az $\mathbf{A}$-ból a soroknak épp azzal a permutációjával kapható, amely permutációval $\mathbf{I}$-ből a $\mathbf{P}$-t kaptuk.

**5.26. tétel (Műveletek permutáló mátrixokkal).** *Bármely két azonos méretű permutáló mátrix szorzata és egy permutáló mátrix bármely egész kitevős hatványa permutáló mátrix. Permutáló mátrix inverze megegyezik a transzponáltjával, azaz ha $\mathbf{P}$ permutáló mátrix, akkor*
$$\mathbf{P}^{-1} = \mathbf{P}^\mathsf{T}.$$

*Bizonyítás.* Legyen $\mathbf{P}$ és $\mathbf{Q}$ két permutáló mátrix. Szorzatuk sorvektorai $\mathbf{P}_{i*}\mathbf{Q}$ alakúak, ahol $\mathbf{P}_{i*}$ megegyezik valamelyik standard egységvektorral, pl. $\mathbf{P}_{i*} = \mathbf{e}_k$. Ekkor a szorzatvektornak csak az az eleme 1, amelyik oszlop $\mathbf{e}_k$-val megegyezik, és ilyen oszlop pontosan egy van. Tehát a szorzatmátrix minden sorában pontosan egy elem 1, a többi 0. Oszlopokra az állítás hasonlóan bizonyítható. A szorzatra vonatkozó állítás természetes következménye a pozitív egész kitevős hatványokra vonatkozó állítás. A negatív egész kitevőkre is igaz az állítás, aminek bizonyításához elég azt az inverzre belátni.

Tekintsük a $\mathbf{PP}^\mathsf{T}$ szorzatot. A $(\mathbf{PP}^\mathsf{T})_{ii}$ elem a $\mathbf{P}_{i*}$ vektornak és a $(\mathbf{P}^\mathsf{T})_{*i} = \mathbf{P}_{i*}$ vektornak a szorzata, vagyis 1, míg
$$(\mathbf{PP}^\mathsf{T})_{ij} = (\mathbf{P})_{i*}(\mathbf{P}^\mathsf{T})_{*j} = (\mathbf{P})_{i*} \cdot (\mathbf{P})_{j*},$$
azaz a szorzat $i$-edik sorának $j$-edik eleme a $\mathbf{P}$ $i$-edik és $j$-edik sorvektorának skalárszorzata, ami 0, mivel két különböző sorban az 1-es különböző helyen van. $\square$

▶ Az alábbi példa szemlélteti a tételben kimondott egyszerű állítást:
$$\mathbf{PP}^\mathsf{T} = \begin{bmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \\ 1 & 0 & 0 & 0 \end{bmatrix}\begin{bmatrix} 0 & 0 & 0 & 1 \\ 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}.$$

### Háromszögmátrixok

A Gauss-kiküszöbölés végrehajtásakor az együtthatómátrixot lépcsős alakra transzformáltuk, melyben a főátló alatt mindig csak nullák szerepelnek. Az ilyen mátrixok nem csak a Gauss-kiküszöbölésnél fontosak.

**5.27. definíció (Háromszögmátrix).** *Azokat a mátrixokat, melyek főátlója alatt csak 0-elemek szerepelnek* felső háromszögmátrixnak, *azokat, melyek főátlója fölött csak 0-elemek vannak* alsó háromszögmátrixnak *nevezzük. Ha egy háromszögmátrix főátlójában csupa 1-es áll,* egység háromszögmátrixról *beszélünk.*

A Gauss-kiküszöbölésnél kapott felső háromszögmátrixhoz hasonlóan azok az egyenletrendszerek is megoldhatók csak behelyettesítésekkel, amelyek együtthatómátrixa alsó háromszögmátrix. A különbség kizárólag annyi, hogy ekkor az első egyenlettel kezdjük, és az első változó értékét határozzuk meg először. Például az
$$\begin{alignedat}{9} x &&&&&{}={}& 3 \\ 2x &{}+{}& 3y &&&{}={}& 3 \\ 2x &{}+{}& y &{}+{}& 2z &{}={}& 3 \end{alignedat}$$
egyenletrendszer első egyenletéből $x = 3$, a másodikba való behelyettesítés után $y = -1$, végül a harmadikba való behelyettesítés után $z = -1$.[^8]

[^8]: *Az angol nyelvű lineáris algebra tankönyvek különbséget tesznek a felső és az alsó háromszögmátrixú egyenletrendszerek megoldása között.* Forward substitution, *illetve* backward substitution *a neve a behelyettesítésnek ha alsó, illetve ha felső háromszögmátrix az együtthatómátrix. Ez arra utal, hogy a változókat előre vagy hátra haladva számoljuk ki. Mi nem fogjuk használni e finom különbségtételt.*

**5.28. tétel (Műveletek háromszögmátrixokkal).** *Felső háromszögmátrixok összege, szorzata, és invertálható felső háromszögmátrix inverze felső háromszögmátrix. Analóg tétel igaz az alsó háromszögmátrixokra is. Egy háromszögmátrix pontosan akkor invertálható, ha főátlóbeli elemeinek egyike sem zérus.*

A bizonyítást feladatként az Olvasóra hagyjuk.

### Szimmetrikus és ferdén szimmetrikus mátrixok

Gyakran használunk olyan mátrixokat, melyekben az elemek egyenlők vagy ellentettjei a főátlóra nézve szimmetrikusan elhelyezkedő párjuknak. E tulajdonság a transzponálttal könnyen kifejezhető.

**5.29. definíció (Szimmetrikus és ferdén szimmetrikus mátrixok).** *A négyzetes $\mathbf{A}$ mátrixot szimmetrikusnak nevezzük, ha $\mathbf{A}^\mathsf{T} = \mathbf{A}$, és ferdén szimmetrikusnak nevezzük, ha $\mathbf{A}^\mathsf{T} = -\mathbf{A}$.*

**5.30. példa (Szimmetrikus és ferdén szimmetrikus mátrixok).** *Az alábbi mátrixok közül az $\mathbf{A}$ szimmetrikus, a $\mathbf{B}$ ferdén szimmetrikus, a $\mathbf{C}$ egyik osztályba sem tartozik.*
$$\mathbf{A} = \begin{bmatrix} 5 & 6 & 1 \\ 6 & 2 & 0 \\ 1 & 0 & 3 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 0 & 1 & -2 \\ -1 & 0 & 3 \\ 2 & -3 & 0 \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} 1 & 9 & 9 \\ -9 & 2 & 9 \\ -9 & -9 & 3 \end{bmatrix}.$$

Ha $\mathbf{A}$ ferdén szimmetrikus, akkor minden elemére $a_{ij} = -a_{ji}$, azaz $i = j$ esetén $a_{ii} = -a_{ii}$. Ez csak $a_{ii} = 0$ esetén áll fönn, azaz a ferdén szimmetrikus mátrixok főátlójában csupa 0 áll.

**5.31. állítás (Műveletek (ferdén) szimmetrikus mátrixokkal).** *Szimmetrikus mátrixok összege, skalárszorosa, inverze szimmetrikus. Ferdén szimmetrikus mátrixok összege, skalárszorosa, inverze ferdén szimmetrikus.*

Az állítás bizonyítását feladatként az olvasóra hagyjuk.

**5.32. tétel (Felbontás szimmetrikus és ferdén szimmetrikus mátrix összegére).** *Minden négyzetes mátrix előáll egy szimmetrikus és egy ferdén szimmetrikus mátrix összegeként, nevezetesen minden $\mathbf{A}$ négyzetes mátrixra*
$$\mathbf{A} = \underbrace{\tfrac{1}{2}(\mathbf{A} + \mathbf{A}^\mathsf{T})}_{\text{szimmetrikus}} + \underbrace{\tfrac{1}{2}(\mathbf{A} - \mathbf{A}^\mathsf{T})}_{\text{ferdén szimm.}}.$$

*Bizonyítás.* Ha egy mátrix szimmetrikus, konstansszorosa is, így elég megmutatni, hogy az $\mathbf{A} + \mathbf{A}^\mathsf{T}$ mátrix szimmetrikus:
$$(\mathbf{A} + \mathbf{A}^\mathsf{T})^\mathsf{T} = \mathbf{A}^\mathsf{T} + (\mathbf{A}^\mathsf{T})^\mathsf{T} = \mathbf{A}^\mathsf{T} + \mathbf{A} = \mathbf{A} + \mathbf{A}^\mathsf{T}$$
Hasonlóképp $\mathbf{A} - \mathbf{A}^\mathsf{T}$ ferdén szimmetrikus, hiszen
$$(\mathbf{A} - \mathbf{A}^\mathsf{T})^\mathsf{T} = \mathbf{A}^\mathsf{T} - (\mathbf{A}^\mathsf{T})^\mathsf{T} = \mathbf{A}^\mathsf{T} - \mathbf{A} = -(\mathbf{A} - \mathbf{A}^\mathsf{T})$$
Végül a két mátrix összege valóban $\mathbf{A}$:
$$\frac{1}{2}(\mathbf{A} + \mathbf{A}^\mathsf{T}) + \frac{1}{2}(\mathbf{A} - \mathbf{A}^\mathsf{T}) = \frac{1}{2}\mathbf{A} + \frac{1}{2}\mathbf{A}^\mathsf{T} + \frac{1}{2}\mathbf{A} - \frac{1}{2}\mathbf{A}^\mathsf{T} = \mathbf{A}. \qquad \square$$

Fontos következményei lesznek az alábbi egyszerű állításnak.

**5.33. tétel ($\mathbf{A}^\mathsf{T}\mathbf{A}$ és $\mathbf{AA}^\mathsf{T}$ szimmetrikus).** *Az $\mathbf{A}^\mathsf{T}\mathbf{A}$ és az $\mathbf{AA}^\mathsf{T}$ mátrixok tetszőleges $\mathbf{A}$ mátrix esetén szimmetrikusak.*

*Bizonyítás.* $(\mathbf{AA}^\mathsf{T})^\mathsf{T} = (\mathbf{A}^\mathsf{T})^\mathsf{T}\mathbf{A}^\mathsf{T} = \mathbf{AA}^\mathsf{T}$. Az állítás másik fele ugyanígy bizonyítható. $\square$

### Feladatok

**5.29.•** *Igaz – hamis.* Döntsük el, igazak-e az alábbi állítások? Válaszunkat indokoljuk!
- a) Szimmetrikus mátrixok összege és skalárszorosa is szimmetrikus, így szimmetrikus mátrixok tetszőleges lineáris kombinációja is szimmetrikus.
- b) Ferdén szimmetrikus mátrixok összege és skalárszorosa is ferdén szimmetrikus, így ferdén szimmetrikus mátrixok tetszőleges lineáris kombinációja is ferdén szimmetrikus.
- c) Minden lépcsős alakú mátrix felső háromszögmátrix.
- d) Minden felső háromszögmátrix lépcsős alakú.

**5.30.** Számítsuk ki az alábbi mátrixok inverzeit, négyzetét és köbét!
$$\begin{bmatrix} 0 & 2 & 0 \\ 0 & 0 & 4 \\ 3 & 0 & 0 \end{bmatrix}, \quad \begin{bmatrix} 0 & 0 & 2 \\ 0 & 4 & 0 \\ 3 & 0 & 0 \end{bmatrix}, \quad \begin{bmatrix} 0 & 2 & 0 & 0 \\ 0 & 0 & 0 & 5 \\ 0 & 0 & 3 & 0 \\ 4 & 0 & 0 & 0 \end{bmatrix}.$$

**5.31.** Hogyan oldanánk meg a következő egyenletrendszert a lehető legkevesebb lépésben?
$$\begin{alignedat}{9}
x &{}+{}& 4y &{}+{}& 3z &{}+{}& 5w &{}={}& 3 \\
6x &{}+{}& 3y &&&&&{}={}& 3 \\
2x &{}+{}& 3y &{}+{}& 2z &&&{}={}& 3 \\
2x &{}+{}& 4y &{}+{}& 3z &{}+{}& 5w &{}={}& 4
\end{alignedat}$$

#### Bizonyítások

**5.32.** Mutassuk meg, hogy minden permutáló mátrix oszlopcserékkel is megkapható az egységmátrixból, és hogy permutáló mátrixszal jobbról való szorzás a beszorzott mátrix oszlopain ugyanazt a permutációt hajtja végre, mint amellyel a permutáló mátrix az egységmátrixból megkapható.

**5.33.** Bizonyítsuk be, hogy bármely két azonos méretű kígyó szorzata és egy kígyó bármely pozitív egész kitevős hatványa kígyó.

**5.34.•** Mutassuk meg, hogy egy $\mathbf{K}$ kígyó pontosan akkor invertálható, ha minden sorában pontosan egy elem nem 0, és ekkor inverze megkapható úgy, hogy minden nemnulla elem helyébe annak reciprokát írjuk, majd az így kapott mátrixot transzponáljuk.

## Mátrixfelbontások

*Mátrixfelbontáson egy mátrixnak adott tulajdonságú mátrixok szorzataként való fölírását értjük. Egy ilyen felbontással már találkoztunk, amikor invertálható mátrixot elemi mátrixok szorzatára bontottunk. E szakaszban a kiküszöbölési eljárásra épülő további felbontásokkal találkozunk. Ezek egyike, az LU-felbontás bizonyos lineáris algebrai feladatok számítógépes megoldásának gyakran használt eszköze.*

### Az LU-felbontás

Tegyük fel, hogy egy $\mathbf{A}$ mátrixból el lehet jutni egy $\mathbf{U}$ felső háromszögalakhoz csak olyan sorműveletekkel, melyekben egy sor konstansszorosát valamely alatta lévő sorhoz adjuk. Minden ilyen elemi sorművelethez olyan elemi mátrix tartozik, mely alsó háromszög alakú. Ekkor tehát léteznek olyan $\mathbf{E}_1, \ldots \mathbf{E}_k$ elemi alsó háromszögmátrixok, melyekre
$$\mathbf{E}_k \ldots \mathbf{E}_1\mathbf{A} = \mathbf{U}.$$
Innen
$$\mathbf{A} = (\mathbf{E}_k \ldots \mathbf{E}_1)^{-1}\mathbf{U},$$
ahol $(\mathbf{E}_k \ldots \mathbf{E}_1)^{-1}$ alsó háromszögmátrixok szorzatának inverze, tehát maga is alsó háromszögmátrix. Ráadásul mindegyik mátrixban, így szorzatukban, és annak inverzében is a főátló csupa 1-esből áll. Ez a következő definícióhoz vezet:

**5.34. definíció (LU-felbontás).** *Azt mondjuk, hogy az $m \times n$-es $\mathbf{A}$ mátrix egy $\mathbf{A} = \mathbf{LU}$ alakú tényezőkre bontása LU-felbontás (LU-faktorizáció vagy LU-dekompozíció), ha $\mathbf{L}$ alsó egység háromszögmátrix (tehát a főátlóban 1-ek, fölötte 0-k vannak), $\mathbf{U}$ pedig felső háromszögmátrix.*

> Az *LU-felbontásban* az L és U betűk az *alsó* és *felső* jelentésű angol *lower* és *upper* szavak kezdőbetűi.

▶ Nincs minden mátrixnak LU-felbontása (ld. ??. feladat), például az
$$\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ a & 1 \end{bmatrix}\begin{bmatrix} b & c \\ 0 & d \end{bmatrix}$$
egyenlőség a paraméterek semmilyen értékére sem áll fönn.
▶ Az LU-felbontás nem egyértelmű, például
$$\begin{bmatrix} 1 & 1 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & a & 1 \end{bmatrix}\begin{bmatrix} 1 & 1 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}$$
felbontás minden $a$ paraméterértékre fönnáll. Megmutatható viszont, hogy ha $\mathbf{A}$ invertálható, és létezik LU-felbontása, akkor az egyértelmű (ld. 5.37. tétel).

**5.35. példa (Az LU-felbontás kiszámítása).** *Elemi sorműveletekkel hozzuk felső háromszögalakra az*
$$\mathbf{A} = \begin{bmatrix} 4 & 8 & 4 & 8 \\ 2 & 6 & 4 & 4 \\ 1 & 3 & 2 & 4 \end{bmatrix} \quad \text{és a} \quad \mathbf{B} = \begin{bmatrix} 4 & 8 & 8 \\ 2 & 6 & 4 \\ 1 & 3 & 4 \end{bmatrix}$$
*mátrixot, majd e lépéseket fölhasználva írjuk föl mindkét mátrix egy-egy LU-felbontását!*

*Megoldás.* Először nézzük az $\mathbf{A}$ mátrixot! Oszloponként haladva végezzük el a Gauss-kiküszöbölést. Minden elemi sorművelet mellett (zárójelben) megadjuk a hozzá tartozó elemi mátrixot:
$$\mathbf{A} = \begin{bmatrix} 4 & 8 & 4 & 8 \\ 2 & 6 & 4 & 4 \\ 1 & 3 & 2 & 4 \end{bmatrix} \xrightarrow{S_2 - \frac{1}{2}S_1} \left(\mathbf{E}_1 = \begin{bmatrix} 1 & 0 & 0 \\ -1/2 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}\right)$$
$$\mathbf{E}_1\mathbf{A} = \begin{bmatrix} 4 & 8 & 4 & 8 \\ 0 & 2 & 2 & 0 \\ 1 & 3 & 2 & 4 \end{bmatrix} \xrightarrow{S_3 - \frac{1}{4}S_1} \left(\mathbf{E}_2 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ -1/4 & 0 & 1 \end{bmatrix}\right)$$
$$\mathbf{E}_2\mathbf{E}_1\mathbf{A} = \begin{bmatrix} 4 & 8 & 4 & 8 \\ 0 & 2 & 2 & 0 \\ 0 & 1 & 1 & 2 \end{bmatrix} \xrightarrow{S_3 - \frac{1}{2}S_2} \left(\mathbf{E}_3 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & -1/2 & 1 \end{bmatrix}\right)$$
$$\mathbf{E}_3\mathbf{E}_2\mathbf{E}_1\mathbf{A} = \begin{bmatrix} 4 & 8 & 4 & 8 \\ 0 & 2 & 2 & 0 \\ 0 & 0 & 0 & 2 \end{bmatrix} = \mathbf{U}.$$
Tehát $\mathbf{E}_3\mathbf{E}_2\mathbf{E}_1\mathbf{A} = \mathbf{U}$, amiből az $(\mathbf{E}_3\mathbf{E}_2\mathbf{E}_1)^{-1} = \mathbf{E}_1^{-1}\mathbf{E}_2^{-1}\mathbf{E}_3^{-1}$ mátrixszal való beszorzás után $\mathbf{A} = (\mathbf{E}_1^{-1}\mathbf{E}_2^{-1}\mathbf{E}_3^{-1})\mathbf{U}$. Kiszámoljuk az elemi mátrixok inverzeinek szorzatát, azaz az $\mathbf{L} = \mathbf{E}_1^{-1}\mathbf{E}_2^{-1}\mathbf{E}_3^{-1}$ mátrixot. Fölhasználjuk a 179. oldalon mondottakat, miszerint az $S_i + cS_j$ sorművelet mátrixának inverze egyenlő az $S_i - cS_j$ mátrixával:
$$\mathbf{L} = \begin{bmatrix} 1 & 0 & 0 \\ 1/2 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 1/4 & 0 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 1/2 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 1/2 & 1 & 0 \\ 1/4 & 1/2 & 1 \end{bmatrix}.$$
Meglepő (de általánosítható) módon ezeknek az elemi mátrixoknak a szorzata a főátló alatti számok átmásolásával megkapható. Az eredmény egy alsó egység háromszögmátrix. Így az $\mathbf{A}$ mátrix LU-felbontása:
$$\mathbf{A} = \begin{bmatrix} 4 & 8 & 4 & 8 \\ 2 & 6 & 4 & 4 \\ 1 & 3 & 2 & 4 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 1/2 & 1 & 0 \\ 1/4 & 1/2 & 1 \end{bmatrix}\begin{bmatrix} 4 & 8 & 4 & 8 \\ 0 & 2 & 2 & 0 \\ 0 & 0 & 0 & 2 \end{bmatrix} \tag{5.2}$$
Mivel az $\mathbf{A}$ átalakítása közben az oszlopok közt nem végeztünk műveletet, és a $\mathbf{B}$ mátrix az $\mathbf{A}$-ból a harmadik oszlopa elhagyásával kapható meg, ezért az előző felbontásból azonnal adódik a $\mathbf{B}$ felbontása is:
$$\mathbf{B} = \begin{bmatrix} 4 & 8 & 8 \\ 2 & 6 & 4 \\ 1 & 3 & 4 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 1/2 & 1 & 0 \\ 1/4 & 1/2 & 1 \end{bmatrix}\begin{bmatrix} 4 & 8 & 8 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{bmatrix} \tag{5.3}$$
$\square$

*5.3. kód. Egy mátrix LU-felbontásának kiszámítása mátrixalapú nyelvben.*
```octave
OCTAVE: A
A =
   4   8   4   8
   2   6   4   4
   1   3   2   4
OCTAVE: [L U]=lu(A)
L =
   1.00   0.00   0.00
   0.50   1.00   0.00
   0.25   0.50   1.00
U =
   4   8   4   8
   0   2   2   0
   0   0   0   2
OCTAVE: B
B =
   4   8   8
   2   6   4
   1   3   4
OCTAVE: [L U]=lu(B)
L =
   1.00   0.00   0.00
   0.50   1.00   0.00
   0.25   0.50   1.00
U =
   4   8   8
   0   2   0
   0   0   2
```

Az 5.35. példában követett eljárás egyszerűen általánosítható tetszőleges mátrixra.

Az alábbi algoritmus a Gauss-elimináció lépcsős alak helyett felső háromszögalakú mátrixot adó megváltoztatásával vagy talál egy $m \times m$-es $\mathbf{L}$ és egy $m \times n$-es $\mathbf{U}$ mátrixot, melyekre $\mathbf{A} = \mathbf{LU}$, vagy hibaüzenetet ad.

**5.36. algoritmus (Egy LU-felbontás előállítása).** *Legyen $\mathbf{A}$ egy tetszőleges $m \times n$-es valós (vagy bármely más test feletti) mátrix.*

*Első lépésként tekintsük az $\mathbf{A}$ mátrix első sorának első elemét. Ha ez 0, de az első oszlopban alatta nemnulla elem is van, akkor „a mátrixnak nincs LU-felbontása" üzenettel az algoritmus leáll. Ha alatta minden elem 0, az algoritmust a második sor második elemével folytatjuk (Gauss-kiküszöbölés esetén az első sor második elemével folytatnánk). Ha pedig az első sor első eleme nem 0, akkor az első oszlop további elemei elimináhatók az $S_2 - l_{21}S_1$, $S_3 - l_{31}S_1, \ldots, S_n - l_{n1}S_1$ sorműveletekkel, ahol $l_{k1} = a_{k1}/a_{11}$.*

*Az algoritmust hasonlóan folytatjuk sorban haladva a főátló elemein. Ha valamelyikük 0, de alatta van a mátrixnak nemnulla eleme, leállunk, ha alatta már minden elem 0, folytatjuk a következő főátlóbeli elemmel, ha pedig nemnulla, akkor elimináljuk az alatta lévő elemeket. Az $i$-edik lépésben tehát az $S_{i+1} - l_{i+1,i}S_i$, $S_{i+2} - l_{i+2,i}S_i, \ldots, S_n - l_{ni}S_i$ sorműveleteket hajtjuk végre.*

*Az elimináció végén megmaradt felső háromszögmátrix lesz $\mathbf{U}$. A kiküszöbölés konstans $l_{ij}$ elemeit írjuk az $\mathbf{I}_m$ egységmátrix $i$-edik sorának $j$-edik oszlopába. Ez lesz az $\mathbf{L}$ mátrix, azaz*
$$\mathbf{L} = \begin{bmatrix} 1 & 0 & \ldots & 0 \\ l_{21} & 1 & \ldots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ l_{m1} & l_{m2} & \ldots & 1 \end{bmatrix}. \tag{5.4}$$

**5.37. tétel (Az LU-felbontás létezése és egyértelműsége).** *A fenti algoritmusra igaz, hogy*
- a) *pontosan akkor áll le a hibaüzenettel, ha $\mathbf{A}$-nak nincs LU-felbontása,*
- b) *a megkonstruált $\mathbf{L}$ és $\mathbf{U}$ mátrixok LU-felbontást adnak,*
- c) *ha $\mathbf{A}$ invertálható, akkor e felbontás egyértelmű.*

*Bizonyítás.* Csak a b) állítást igazoljuk, a többit az Olvasóra hagyjuk (ld. 5.48. feladat). Jelölje az $S_j - l_{ji}S_i$ sorművelet elemi mátrixát $\mathbf{E}_{ji}$ ($1 \leq i < j \leq m$). Jelölje e mátrixoknak a végrehajtás sorrendjében jobbról balra vett szorzatát $\mathbf{E}$, azaz legyen
$$\mathbf{E} = (\mathbf{E}_{m-1,m})(\mathbf{E}_{m-2,m}\mathbf{E}_{m-2,m-1}) \ldots (\mathbf{E}_{m2} \ldots \mathbf{E}_{42}\mathbf{E}_{32})(\mathbf{E}_{m1} \ldots \mathbf{E}_{31}\mathbf{E}_{21}).$$
Az algoritmus szerint ekkor $\mathbf{EA} = \mathbf{U}$. Vizsgáljuk meg az $\mathbf{EL}$ szorzatot az algoritmusbeli $\mathbf{L}$ mátrixszal. Mivel $\mathbf{L}$ főátlójában csupa 1, $ji$-edik helyén $l_{ji}$ áll, ezért az elemi $\mathbf{E}_{ji}$ mátrix épp ezt az elemet fogja eliminálni, és így $\mathbf{E}$ minden főátló alatti elemet eliminál, azaz $\mathbf{EL} = \mathbf{I}$. Eszerint $\mathbf{E}^{-1} = \mathbf{L}$, tehát $\mathbf{A} = \mathbf{E}^{-1}\mathbf{U} = \mathbf{LU}$. $\square$

### Egyenletrendszer megoldása LU-felbontással

Ha már ismerjük egy $\mathbf{A}$ mátrix LU-felbontását, akkor az $\mathbf{Ax} = \mathbf{b}$ egyenletrendszer könnyen megoldható. Az $\mathbf{Ax} = \mathbf{b}$ egyenletrendszer megoldása az $\mathbf{Ly} = \mathbf{b}$, $\mathbf{Ux} = \mathbf{y}$ egyenletrendszerek megoldásával ekvivalens. Ha ugyanis $\mathbf{x}$ megoldása az $\mathbf{Ax} = \mathbf{b}$ egyenletrendszernek, akkor $\mathbf{LUx} = \mathbf{b}$, és az $\mathbf{y} = \mathbf{Ux}$ jelöléssel $\mathbf{Ly} = \mathbf{b}$. Másrészt, ha $\mathbf{y}$ megoldása az $\mathbf{Ly} = \mathbf{b}$ egyenletrendszernek, és $\mathbf{x}$ az $\mathbf{Ux} = \mathbf{y}$ egyenletrendszernek, akkor $\mathbf{y}$-t behelyettesítve $\mathbf{L}(\mathbf{Ux}) = \mathbf{b}$, azaz $\mathbf{Ax} = \mathbf{b}$. Tömören:
$$\mathbf{Ax} = \mathbf{b} \text{ megoldható} \iff \mathbf{Ly} = \mathbf{b}, \; \mathbf{Ux} = \mathbf{y} \text{ megoldható.}$$
Az $\mathbf{L}$ és $\mathbf{U}$ alakjából következik, hogy az $\mathbf{Ly} = \mathbf{b}$, és az $\mathbf{Ux} = \mathbf{y}$ egyenletrendszerek egyszerű visszahelyettesítésekkel megoldhatók.

**5.38. példa (Egyenletrendszer megoldása LU-felbontással).** *Oldjuk meg a következő egyenletrendszert!*
$$\begin{alignedat}{9} 4x_1 &{}+{}& 8x_2 &{}+{}& 8x_3 &{}={}& 8 \\ 2x_1 &{}+{}& 6x_2 &{}+{}& 4x_3 &{}={}& 4 \\ x_1 &{}+{}& 3x_2 &{}+{}& 4x_3 &{}={}& 4 \end{alignedat}$$

*Megoldás.* Mivel ismerjük az együtthatómátrix LU-felbontását – az épp az (5.3)-beli felbontás –, ezért ezt használjuk, és először megoldjuk az $\mathbf{Ly} = \mathbf{b}$ egyenletrendszert:
$$\begin{bmatrix} 1 & 0 & 0 \\ 1/2 & 1 & 0 \\ 1/4 & 1/2 & 1 \end{bmatrix}\begin{bmatrix} y_1 \\ y_2 \\ y_3 \end{bmatrix} = \begin{bmatrix} 8 \\ 4 \\ 4 \end{bmatrix}.$$
Ebből $y_1 = 8$, ezt a második egyenletbe helyettesítve kapjuk, hogy $y_2 = 0$, majd ezeket a harmadikba helyettesítve kapjuk, hogy $y_3 = 2$. Ezután megoldjuk az $\mathbf{Ux} = \mathbf{y}$ egyenletrendszert, aminek alakja
$$\begin{bmatrix} 4 & 8 & 8 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{bmatrix}\begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 8 \\ 0 \\ 2 \end{bmatrix}.$$
Ismét egyszerű visszahelyettesítésekkel kapjuk, hogy $x_3 = 1$, $x_2 = 0$ és $x_1 = 0$. A megoldás $\mathbf{x} = (0, 0, 1)$. $\square$

### Mátrix invertálása LU-felbontással

Mátrix invertálásához elég megoldanunk az $\mathbf{AX} = \mathbf{I}$ egyenletrendszert. Ha $\mathbf{A} = \mathbf{LU}$ egy LU-felbontása $\mathbf{A}$-nak, akkor az $\mathbf{LUX} = \mathbf{I}$ megoldása a vele ekvivalens két mátrixegyenlet megoldásával megkapható:
$$\mathbf{AX} = \mathbf{I} \iff \mathbf{LY} = \mathbf{I}, \; \mathbf{UX} = \mathbf{Y}.$$
E két utóbbi egyenletrendszer viszont megoldható kizárólag visszahelyettesítésekkel is!

**5.39. példa (Mátrix invertálása LU-felbontással).** *Invertáljuk az 5.35. példában megadott*
$$\mathbf{B} = \begin{bmatrix} 4 & 8 & 8 \\ 2 & 6 & 4 \\ 1 & 3 & 4 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 1/2 & 1 & 0 \\ 1/4 & 1/2 & 1 \end{bmatrix}\begin{bmatrix} 4 & 8 & 8 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{bmatrix}$$
*mátrixot az LU-felbontása segítségével!*

*Megoldás.* A $\mathbf{B}$ mátrix LU-felbontását használva először megoldjuk az $\mathbf{LY} = \mathbf{I}$ mátrixegyenletet:
$$\begin{bmatrix} 1 & 0 & 0 \\ 1/2 & 1 & 0 \\ 1/4 & 1/2 & 1 \end{bmatrix}\begin{bmatrix} y_{11} & y_{12} & y_{13} \\ y_{21} & y_{22} & y_{23} \\ y_{31} & y_{32} & y_{33} \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}.$$
Az $\mathbf{L}$ első sorával való szorzásból: $[y_{11}\; y_{12}\; y_{13}] = [1\; 0\; 0]$. A második sorral való szorzásból $\frac{1}{2}[y_{11}\; y_{12}\; y_{13}] + [y_{21}\; y_{22}\; y_{23}] = [0\; 1\; 0]$. Behelyettesítés után $[y_{21}\; y_{22}\; y_{23}] = [-\frac{1}{2}\; 1\; 0]$. Végül a harmadik sorral való szorzásból:
$$\tfrac{1}{4}\begin{bmatrix} y_{11} & y_{12} & y_{13} \end{bmatrix} + \tfrac{1}{2}\begin{bmatrix} y_{21} & y_{22} & y_{23} \end{bmatrix} + \begin{bmatrix} y_{31} & y_{32} & y_{33} \end{bmatrix} = \begin{bmatrix} 0 & 0 & 1 \end{bmatrix},$$
amiből behelyettesítés után kifejezve $\mathbf{Y}$ harmadik sorát kapjuk, így $[y_{31}\; y_{32}\; y_{33}] = [0\; -\frac{1}{2}\; 1]$. Azaz
$$\mathbf{Y} = \begin{bmatrix} 1 & 0 & 0 \\ -1/2 & 1 & 0 \\ 0 & -1/2 & 1 \end{bmatrix}.$$
Ezután ugyanígy, egyszerű helyettesítésekkel megoldható az $\mathbf{UX} = \mathbf{Y}$, azaz a
$$\begin{bmatrix} 4 & 8 & 8 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{bmatrix}\begin{bmatrix} x_{11} & x_{12} & x_{13} \\ x_{21} & x_{22} & x_{23} \\ x_{31} & x_{32} & x_{33} \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ -1/2 & 1 & 0 \\ 0 & -1/2 & 1 \end{bmatrix}$$
mátrixegyenlet is, melynek megoldása
$$\mathbf{X} = \begin{bmatrix} 3/4 & -1/2 & -1 \\ -1/4 & 1/2 & 0 \\ 0 & -1/4 & 1/2 \end{bmatrix}.$$
$\square$

### Az LU-felbontás a gyakorlatban

Ismét végigszámoljuk az 5.35. példabeli mátrix felbontását. Először írjunk le egy egységmátrixot, de a főátló alatti mátrix helyeket üresen hagyva, ebből lesz $\mathbf{L}$. Írjuk mellé az $\mathbf{A}$ mátrixot, és amikor elvégzünk egy $S_i - l_{ji}S_j$ sorműveletet rajta, akkor az $l_{ji}$ értéket bejegyezzük az $\mathbf{L}$ mátrix $j$-edik sorának $i$-edik oszlopába. Az alábbi számítások bal hasábjában látjuk a fentiek szerinti lépéseket.
$$\left[\begin{array}{ccc} 1 & 0 & 0 \\ {} & 1 & 0 \\ {} & {} & 1 \end{array}\right]\left[\begin{array}{ccc} 4 & 1 & 2 \\ 2 & 4 & 1 \\ 1 & 2 & 4 \end{array}\right] \;\Downarrow\; \left[\begin{array}{ccc} 1 & 0 & 0 \\ 1/2 & 1 & 0 \\ {} & {} & 1 \end{array}\right]\left[\begin{array}{ccc} 4 & 1 & 2 \\ 0 & 7/2 & 0 \\ 1 & 2 & 4 \end{array}\right]$$
$$\Downarrow\; \left[\begin{array}{ccc} 1 & 0 & 0 \\ 1/2 & 1 & 0 \\ 1/4 & {} & 1 \end{array}\right]\left[\begin{array}{ccc} 4 & 1 & 2 \\ 0 & 7/2 & 0 \\ 0 & 7/4 & 7/2 \end{array}\right] \;\Downarrow\; \left[\begin{array}{ccc} 1 & 0 & 0 \\ 1/2 & 1 & 0 \\ 1/4 & 1/2 & 1 \end{array}\right]\left[\begin{array}{ccc} 4 & 1 & 2 \\ 0 & 7/2 & 0 \\ 0 & 0 & 7/2 \end{array}\right]$$
A jobb hasábban ugyanezen lépések a számítógépes (egyetlen mátrixban, tizedes alakban tárolt, az $\mathbf{L}$-beli elemeket kiemelve mutató) technikával:
$$\begin{bmatrix} 4.00 & 1.00 & 2.00 \\ 2.00 & 4.00 & 1.00 \\ 1.00 & 2.00 & 4.00 \end{bmatrix} \Rightarrow \begin{bmatrix} 4.00 & 1.00 & 2.00 \\ \mathbf{0.50} & 3.50 & 0.00 \\ 1.00 & 2.00 & 4.00 \end{bmatrix} \Rightarrow \begin{bmatrix} 4.00 & 1.00 & 2.00 \\ \mathbf{0.50} & 3.50 & 0.00 \\ \mathbf{0.25} & 1.75 & 3.50 \end{bmatrix} \Rightarrow \begin{bmatrix} 4.00 & 1.00 & 2.00 \\ \mathbf{0.50} & 3.50 & 0.00 \\ \mathbf{0.25} & \mathbf{0.50} & 3.50 \end{bmatrix}$$
Vegyük észre, hogy az $\mathbf{A}$ mátrixon folytatott elemi átalakítások eredménye és az $\mathbf{L}$ már kiszámolt elemei egyetlen mátrixban is „elférnek", ugyanis $\mathbf{L}$-ben épp akkor és oda kerül egy elem, amikor és ahova $\mathbf{A}$-ban 0. Ezt a számítógépprogramok kihasználják, ha igen nagy méretű $\mathbf{A}$ mátrixot kell felbontani, és az $\mathbf{L}$ és $\mathbf{U}$ mátrixot az $\mathbf{A}$ helyében konstruálják meg. A fenti számítások jobb hasábjában ezt a számítógépes technikát alkalmazzuk. Színes háttérrel jelöljük az $\mathbf{L}$-beli elemeket.

Az LU-felbontás műveletigénye megegyezik a Gauss-kiküszöbölésével, azaz egy $n$-edrendű mátrixra nagyságrendileg $2n^3/3$. Egyenletrendszer megoldásánál is azonos a lépésszám, hisz a Gauss-módszernél a kiküszöbölést a jobb oldallal is meg kell csinálni, az LU-felbontásnál viszont az alsó háromszögmátrixhoz tartozó egyenletrendszert is meg kell oldani: mindkettő $n(n-1)/2$ összeadás/kivonás és ugyanennyi szorzás/osztás. Az LU-felbontásnak viszont több olyan előnyös tulajdonsága van, ami miatt használata meghatározó az egyenletrendszerek megoldásában és amellett több más feladatban is. Néhány a legfontosabbak közül:

1. Mivel az egyenletrendszer együtthatómátrixának LU-felbontásához nincs szükség az egyenletrendszer jobb oldalára, ezért használható olyan esetekben, amikor a jobb oldal még nem ismeretes, vagy több különböző jobb oldallal is dolgozni kell.

2. Az LU-felbontás ismeretében több mátrixokkal kapcsolatos számítás gyorsabban elvégezhető mint egyébként, pl. ilyen a mátrix inverzének, vagy a később tanulandó determinánsának meghatározása.

3. Korábban említettük, hogy az LU-felbontás igen memóriatakarékos, ráadásul vannak olyan speciális mátrixosztályok (pl. a szalagmátrixok, vagy a ritka mátrixok), melyekre létezik a kiküszöbölésnél gyorsabb algoritmus az LU-felbontásra.

4. A computer algebra programok úgy működnek, hogy ha egy mátrixon valamilyen számítást kell elvégezni, ami megoldható az LU-felbontással (vagy a következő pontban tárgyalandó PLU-felbontással), akkor azzal oldják meg. Így ha később egy másik számítást is el kell e mátrixszal végezni, e felbontás ismeretében az már sokkal gyorsabb lehet.

### PLU-felbontás

Nincs minden $\mathbf{A}$ mátrixnak LU-felbontása, de sorcserékkel – azaz egy permutáló mátrixszal való balról szorzással – olyan alakra hozható, melynek van LU-felbontása. Létezik tehát olyan $\mathbf{P}$ permutáló mátrix, hogy
$$\mathbf{PA} = \mathbf{LU}, \quad \text{azaz} \quad \mathbf{A} = \mathbf{P}^{\mathsf{T}}\mathbf{LU}.$$
(Itt kihasználtuk, hogy permutáló mátrix inverze megegyezik transzponáltjával.)

**5.40. definíció (PLU-felbontás).** *Egy tetszőleges $m \times n$-es $\mathbf{A}$ mátrixnak egy permutáló, egy egység főátlójú négyzetes alsó háromszög- és egy $m \times n$-es felső háromszögmátrix szorzatára való bontását PLU-felbontásnak nevezzük.*

> *Ha $m > n$, akkor $\mathbf{U}$ utolsó $m - n$ sora zérussor, ezért ezeket, és $\mathbf{L}$ utolsó $m - n$ oszlopa is elhagyható, vagyis ha $r = \min(m, n)$, akkor $\mathbf{P}$ $m \times m$-es permutáló mátrix, $\mathbf{L}$ 1-esekből álló főátlójú $m \times r$-es alsó, míg az $\mathbf{U}$ $r \times n$-es felső háromszögmátrix. Például a következő első felbontás a definíciót, a második e megjegyzés szerinti felbontást adja:*
> $$\begin{bmatrix} 0 & 1 \\ 1 & 2 \\ 2 & 3 \end{bmatrix} = \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{bmatrix}\begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 1/2 & 1/2 & 1 \end{bmatrix}\begin{bmatrix} 2 & 3 \\ 0 & 1 \\ 0 & 0 \end{bmatrix} = \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{bmatrix}\begin{bmatrix} 1 & 0 \\ 0 & 1 \\ 1/2 & 1/2 \end{bmatrix}\begin{bmatrix} 2 & 3 \\ 0 & 1 \end{bmatrix}$$

A PLU-felbontást megadó algoritmus minimális változtatással megkapható az LU-felbontáséból. Az algoritmust – épp ahogy a számítógépek is számolnak – az $\mathbf{L}$ és $\mathbf{U}$ mátrix elemeit egyetlen mátrixban

tárolva fogjuk végrehajtani. Az LU-hoz képest csak annyi a változás, hogy sorcserék elvégzését is megengedjük. Az LU-felbontás algoritmusa akkor akad el, amikor egy főátlóbeli elem 0, de van alatta nem nulla elem az oszlopban. Most ilyen esetben e két sort kicseréljük. Sőt, olyankor is kicserélhetünk egy sort egy alatta lévővel, ha főátlóbeli eleme nem 0. Egy ilyen csere a kerekítési hibák csökkentése érdekében lehet érdemes megtenni. A korábban már említett részleges főelemkiválasztás szabálya szerint mindig a legnagyobb abszolút értékű elemet érdemes főelemnek választani. Hogy az algoritmus végén tudjuk, hogyan változott a sorvektorok sorrendje, az indexek változását folyamatosan följegyezzük – praktikusan a mátrix sorvektorai elé írva. Lássunk egy példát. Azt, hogy az $\mathbf{L}$ és $\mathbf{U}$ mátrixok összeolvasztásából kapott mátrixon is elvégezhetők a sorcserék, később igazoljuk!

**5.41. példa (PLU-felbontás).** *Határozzuk meg az*
$$\mathbf{A} = \begin{bmatrix} -1 & 6 & 1 & -7 & 4 \\ 1 & 4 & 4 & -7 & 5 \\ 4 & -8 & 4 & 8 & -4 \\ 3 & -6 & 8 & 6 & -8 \end{bmatrix} \tag{5.5}$$
*mátrix PLU-felbontását úgy, hogy minden lépésben részleges főelem-kiválasztással a főátlóbeli elem alatti legnagyobb abszolút értékű elemet választjuk ki.*

*Megoldás.* A mátrix sorindexeit a következőképp fogjuk jelölni:
$$\begin{array}{c} 1 \\ 2 \\ 3 \\ 4 \end{array}\begin{bmatrix} -1 & 6 & 1 & -7 & 4 \\ 1 & 4 & 4 & -7 & 5 \\ 4 & -8 & 4 & 8 & -4 \\ 3 & -6 & 8 & 6 & -8 \end{bmatrix} \tag{5.6}$$
Mivel az első oszlopban 4 a legnagyobb abszolút értékű szám, végrehajtunk egy $S_{i \leftrightarrow j}$ sorcserét, majd elimináljuk az első oszlop összes többi elemét:
$$\begin{array}{c} 3 \\ 2 \\ 1 \\ 4 \end{array}\begin{bmatrix} 4 & -8 & 4 & 8 & -4 \\ 1 & 4 & 4 & -7 & 5 \\ -1 & 6 & 1 & -7 & 4 \\ 3 & -6 & 8 & 6 & -8 \end{bmatrix} \to \begin{array}{c} 3 \\ 2 \\ 1 \\ 4 \end{array}\begin{bmatrix} 4 & -8 & 4 & 8 & -4 \\ \mathbf{1/4} & 6 & 3 & -9 & 6 \\ \mathbf{-1/4} & 4 & 2 & -5 & 3 \\ \mathbf{3/4} & 0 & 5 & 0 & -5 \end{bmatrix}$$
A második oszlop második eleme alatt nincs nagyobb abszolút értékű szám, most nem kell sort cserélni, a negyedik sort eliminálni sem kell, (azaz kivonhatjuk belőle a második sor 0-szorosát):
$$\to \begin{array}{c} 3 \\ 2 \\ 1 \\ 4 \end{array}\begin{bmatrix} 4 & -8 & 4 & 8 & -4 \\ \mathbf{1/4} & 6 & 3 & -9 & 6 \\ \mathbf{-1/4} & \mathbf{2/3} & 0 & 1 & -1 \\ \mathbf{3/4} & \mathbf{0} & 5 & 0 & -5 \end{bmatrix}$$
A harmadik oszlopban 0 áll a főátlón, kicseréljük a harmadik és negyedik sort. Az eddig még nem indokolt mozzanat: az $\mathbf{L}$ és az $\mathbf{U}$ mátrixba eső részén egyaránt végrehajtható e művelet, és épp ezt tesszük a sorindexekkel is:
$$\to \begin{array}{c} 3 \\ 2 \\ 4 \\ 1 \end{array}\begin{bmatrix} 4 & -8 & 4 & 8 & -4 \\ \mathbf{1/4} & 6 & 3 & -9 & 6 \\ \mathbf{3/4} & \mathbf{0} & 5 & 0 & -5 \\ \mathbf{-1/4} & \mathbf{2/3} & 0 & 1 & -1 \end{bmatrix} \to \begin{array}{c} 3 \\ 2 \\ 4 \\ 1 \end{array}\begin{bmatrix} 4 & -8 & 4 & 8 & -4 \\ \mathbf{1/4} & 6 & 3 & -9 & 6 \\ \mathbf{3/4} & \mathbf{0} & 5 & 0 & -5 \\ \mathbf{-1/4} & \mathbf{2/3} & \mathbf{0} & 1 & -1 \end{bmatrix}$$
Az utolsó lépésben nem is volt tennivalónk, mivel a főátló alatt 0 volt, így csak jeleztük, hogy mi kerül az $\mathbf{L}$ mátrixba e helyen. (Az a két nulla ugyanaz a nulla! A második már az $\mathbf{L}$ eleme!) Végül ebből az alakból leolvasható az $\mathbf{L}$, $\mathbf{U}$ és az indexekből a $\mathbf{P}$ mátrix. Ezeket egyből a $\mathbf{PA} = \mathbf{LU}$ egyenlőségben adjuk meg:
$$\begin{bmatrix} 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 1 & 0 & 0 & 0 \end{bmatrix}\begin{bmatrix} -1 & 6 & 1 & -7 & 4 \\ 1 & 4 & 4 & -7 & 5 \\ 4 & -8 & 4 & 8 & -4 \\ 3 & -6 & 8 & 6 & -8 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 1/4 & 1 & 0 & 0 \\ 3/4 & 0 & 1 & 0 \\ -1/4 & 2/3 & 0 & 1 \end{bmatrix}\begin{bmatrix} 4 & -8 & 4 & 8 & -4 \\ 0 & 6 & 3 & -9 & 6 \\ 0 & 0 & 5 & 0 & -5 \\ 0 & 0 & 0 & 1 & -1 \end{bmatrix}.$$
Mindkét oldalt $\mathbf{P}^{\mathsf{T}}$-tal szorozva megkapjuk a PLU-felbontást, azaz az $\mathbf{A} = \mathbf{P}^{\mathsf{T}}\mathbf{LU}$ egyenlőséget:
$$\begin{bmatrix} -1 & 6 & 1 & -7 & 4 \\ 1 & 4 & 4 & -7 & 5 \\ 4 & -8 & 4 & 8 & -4 \\ 3 & -6 & 8 & 6 & -8 \end{bmatrix} = \begin{bmatrix} 0 & 0 & 0 & 1 \\ 0 & 1 & 0 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \end{bmatrix}\begin{bmatrix} 1 & 0 & 0 & 0 \\ 1/4 & 1 & 0 & 0 \\ 3/4 & 0 & 1 & 0 \\ -1/4 & 2/3 & 0 & 1 \end{bmatrix}\begin{bmatrix} 4 & -8 & 4 & 8 & -4 \\ 0 & 6 & 3 & -9 & 6 \\ 0 & 0 & 5 & 0 & -5 \\ 0 & 0 & 0 & 1 & -1 \end{bmatrix}.$$
Ezzel megoldottuk a feladatot! $\square$

*5.4. kód. Egy mátrix PLU-felbontásának kiszámítása mátrixalapú nyelvben.*
```octave
OCTAVE: A = [
> -1  6 1 -7  4
>  1  4 4 -7  5
>  4 -8 4  8 -4
>  3 -6 8  6 -8]
A =
  -1   6   1  -7   4
   1   4   4  -7   5
   4  -8   4   8  -4
   3  -6   8   6  -8
OCTAVE: [L U P] = lu(a)
L =
   1.00   0.00   0.00   0.00
   0.25   1.00   0.00   0.00
   0.75   0.00   1.00   0.00
  -0.25   0.67   0.00   1.00
U =
   4  -8   4   8  -4
   0   6   3  -9   6
   0   0   5   0  -5
   0   0   0   1  -1
P =
Permutation Matrix
   0   0   1   0
   0   1   0   0
   0   0   0   1
   1   0   0   0
OCTAVE: transpose(P)*L*U
ans =
  -1   6   1  -7   4
   1   4   4  -7   5
   4  -8   4   8  -4
   3  -6   8   6  -8
```

E felbontás egy lehetséges használatára mutatunk példát.

**5.42. példa.** *Oldjuk meg az*
$$\begin{bmatrix} -1 & 6 & 1 & -7 & 4 \\ 1 & 4 & 4 & -7 & 5 \\ 4 & -8 & 4 & 8 & -4 \\ 3 & -6 & 8 & 6 & -8 \end{bmatrix}\mathbf{x} = \begin{bmatrix} 1 \\ 4 \\ 4 \\ 8 \end{bmatrix}$$
*egyenletrendszert az együtthatómátrix PLU-felbontását használva!*

*Megoldás.* Az $\mathbf{Ax} = \mathbf{b}$ egyenletet $\mathbf{P}$-vel szorozva és $\mathbf{PA}$ helyébe $\mathbf{LU}$-t írva kapjuk, hogy $\mathbf{LUx} = \mathbf{Pb}$ egyenletrendszert kell megoldani, ahol $\mathbf{b} = (1, 4, 4, 8)$. Ez – hasonlóan az LU-felbontásnál tanultakhoz – az $\mathbf{Ly} = \mathbf{Pb}$ és az $\mathbf{Ux} = \mathbf{y}$ egyenletrendszerek megoldásával ekvivalens.
$$\begin{bmatrix} 1 & 0 & 0 & 0 \\ 1/4 & 1 & 0 & 0 \\ 3/4 & 0 & 1 & 0 \\ -1/4 & 2/3 & 0 & 1 \end{bmatrix}\mathbf{y} = \begin{bmatrix} 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 1 & 0 & 0 & 0 \end{bmatrix}\begin{bmatrix} 1 \\ 4 \\ 4 \\ 8 \end{bmatrix} = \begin{bmatrix} 4 \\ 4 \\ 8 \\ 1 \end{bmatrix}$$
Ennek az egyenletrendszernek a megoldása fejben számolva is leolvasható: $\mathbf{y} = (4, 3, 5, 0)$. Az $\mathbf{Ux} = \mathbf{y}$ egyenletrendszer bővített mátrixa, és annak redukált lépcsős alakja:
$$\left[\begin{array}{ccccc|c} 4 & -8 & 4 & 8 & -4 & 4 \\ 0 & 6 & 3 & -9 & 6 & 3 \\ 0 & 0 & 5 & 0 & -5 & 5 \\ 0 & 0 & 0 & 1 & -1 & 0 \end{array}\right] \to \left[\begin{array}{ccccc|c} 1 & 0 & 0 & 0 & 2 & 0 \\ 0 & 1 & 0 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 & -1 & 1 \\ 0 & 0 & 0 & 1 & -1 & 0 \end{array}\right]$$
Innen a megoldás $\mathbf{x} = (-2t, 0, 1 + t, t, t)$. $\square$

**5.43. algoritmus (Egy PLU-felbontás előállítása).** *Legyen $\mathbf{A}$ egy (test fölött értelmezett) tetszőleges $m \times n$-es mátrix, legyen $r = \min(m, n)$, és képezzük az $\mathbf{A}_k, \mathbf{P}_k, \mathbf{L}_k, \mathbf{U}_k$ ($k = 0, 1, \ldots, r$) mátrixok sorozatát a következő eljárás szerint:*
- a) *$\mathbf{A}_0 = \mathbf{U}_0 = \mathbf{A}$, $\mathbf{L}_0 = \mathbf{I}$, így $\mathbf{A}_0 = \mathbf{L}_0\mathbf{U}_0$,*
- b) *a $k$-adik lépésben az $\mathbf{A}_{k-1} = \mathbf{L}_{k-1}\mathbf{U}_{k-1}$ összefüggés mátrixaiból megkonstruáljuk az $\mathbf{A}_k = \mathbf{L}_k\mathbf{U}_k$ egyenlőségbeli mátrixokat:*
  1. *ha $\mathbf{U}_{k-1}$ főátlóján a $k$-adik elem és alatta minden elem 0, akkor legyen $\mathbf{A}_k = \mathbf{A}_{k-1}$, $\mathbf{L}_k = \mathbf{L}_{k-1}$, $\mathbf{U}_k = \mathbf{U}_{k-1}$, $\mathbf{P}_k = \mathbf{I}$, megnöveljük $k$ értékét 1-gyel és visszatérünk e pontra, egyébként a következővel folytatjuk.*
  2. *ha $\mathbf{U}_{k-1}$ főátlóján a $k$-adik elem 0, és van olyan $i > k$, hogy az $i$-edik sorában alatta nem nulla elem van, akkor az $S_k \leftrightarrow S_i$ sorcserét végző $\mathbf{P}_k$ elemi mátrixszal kicseréljük e két sort, kapjuk az $\mathbf{U}'_{k-1} = \mathbf{P}_k\mathbf{U}_{k-1}$. E sorcserét végrehajtjuk az $\mathbf{A}_{k-1}$ mátrixon is, ez lesz az $\mathbf{A}_k$. Kihasználva, hogy $\mathbf{P}_k\mathbf{P}_k = \mathbf{I}$, az $\mathbf{L}_{k-1}$-en elvégzendő transzformáció is adódik:*
  $$\begin{aligned} \mathbf{A}_k = \mathbf{P}_k\mathbf{A}_{k-1} &= \mathbf{P}_k\mathbf{L}_{k-1}\mathbf{U}_{k-1} = \mathbf{P}_k\mathbf{L}_{k-1}\mathbf{I}\mathbf{U}_{k-1} \\ &= \mathbf{P}_k\mathbf{L}_{k-1}\mathbf{P}_k\mathbf{P}_k\mathbf{U}_{k-1} = (\mathbf{P}_k\mathbf{L}_{k-1}\mathbf{P}_k)(\mathbf{P}_k\mathbf{U}_{k-1}) \\ &= \mathbf{L}'_k\mathbf{U}'_k. \end{aligned}$$
  *Itt tehát $\mathbf{L}'_k = \mathbf{P}_k\mathbf{L}_{k-1}\mathbf{P}_k$, azaz az $\mathbf{L}_{k-1}$ mátrix $k$-adik, és egy $i \geq k$ indexre az $i$-edik sorának főátló alatti részei felcserélődnek. A $\mathbf{P}_k\mathbf{L}_{k-1}$ szorzat megcseréli az $\mathbf{L}_{k-1}$ mátrix $k$-adik és $i$-edik sorát, megcserélve a főátlóbeli 1-eseket is. A $\mathbf{P}_k$-val való jobbról szorzás eredményeként a $k$-adik és $i$-edik oszlopok helyet cserélnek, mivel azonban $\mathbf{L}_{k-1}$-ben ezekben az oszlopokban csak zérusok vannak a főátló elemein kívül, ezért e két 1-es visszakerül a főátlóra. Szemléltetésként legyen $m = 5$, $k = 3$, $i = 5$:*
  $$\mathbf{P}_k = \begin{bmatrix} 1 & 0 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 1 & 0 \\ 0 & 0 & 1 & 0 & 0 \end{bmatrix} \qquad \mathbf{L}_{k-1} = \left[\begin{array}{cc|ccc} 1 & 0 & 0 & 0 & 0 \\ * & 1 & 0 & 0 & 0 \\ k_1 & k_2 & 1 & 0 & 0 \\ * & * & 0 & 1 & 0 \\ i_1 & i_2 & 0 & 0 & 1 \end{array}\right]$$
  $$\mathbf{P}_k\mathbf{L}_{k-1} = \left[\begin{array}{cc|ccc} 1 & 0 & 0 & 0 & 0 \\ * & 1 & 0 & 0 & 0 \\ i_1 & i_2 & 0 & 0 & 1 \\ * & * & 0 & 1 & 0 \\ k_1 & k_2 & 1 & 0 & 0 \end{array}\right] \qquad \mathbf{P}_k\mathbf{L}_{k-1}\mathbf{P}_k = \left[\begin{array}{cc|ccc} 1 & 0 & 0 & 0 & 0 \\ * & 1 & 0 & 0 & 0 \\ i_1 & i_2 & 1 & 0 & 0 \\ * & * & 0 & 1 & 0 \\ k_1 & k_2 & 0 & 0 & 1 \end{array}\right]$$
  3. *Ezután az $\mathbf{U}'_{k-1}$ mátrix $k$-adik oszlopának főátló alatti elemeit egymás után elimináljuk, mindegyiket egy $S_i \leftarrow S_i - cS_k$ elemi sorműveletet végző $\mathbf{E}$ elemi mátrixszal. Ennek inverze a vele való jobbról szorzás esetén az $O_k \leftarrow O_k + cO_i$ oszlopműveletet végzi, így az*
  $$\mathbf{L}'_k\mathbf{U}'_k = \mathbf{L}'_k\mathbf{I}\mathbf{U}'_k = \mathbf{L}'_k\mathbf{E}^{-1}\mathbf{E}\mathbf{U}'_k$$
  *egyenlőségnek megfelelően az $\mathbf{U}'_k$-n végrehajtott sorművelet mellett az $\mathbf{L}'_k$ mátrix $i$-edik oszlopának $c$-szeresét kell a $k$-adik oszlophoz adni, azaz a $c$ számot beírni az $i$-edik sor $k$-adik oszlopába. Az eliminációt a kapott mátrixokon tovább folytatjuk, míg az összes elemet nem elimináltuk a $k$-adik oszlopban a főátló alatt. $\mathbf{L}_k$ és $\mathbf{U}_k$ jelöli e procedúra végén kapott mátrixokat, tehát $\mathbf{U}_k$-ban már a főátló alatt minden elem 0, és $\mathbf{L}_k$ a párja, melyekre $\mathbf{A}_k = \mathbf{L}_k\mathbf{U}_k$. Megnöveljük $k$ értékét, és ha $k < r$, visszatérünk 1. pontra, egyébként a következő pontra lépünk.*
- c) *Legyen $\mathbf{P} = \mathbf{P}_r\mathbf{P}_{r-1} \ldots \mathbf{P}_1$, $\mathbf{L} = \mathbf{L}_r$, $\mathbf{U} = \mathbf{U}_r$. Ekkor a fentiek szerint $\mathbf{PA} = \mathbf{LU}$ az $\mathbf{A}$ egy PLU-felbontása.*

Az, hogy ez az algoritmus valóban PLU-felbontást ad, az algoritmus leírásában bizonyítottuk, illetve onnan kiolvasható.

### Feladatok

Adjuk meg az alábbi mátrixok egy LU-felbontását!

**5.35.** $\begin{bmatrix} 4 & 4 & 4 \\ 2 & 5 & 5 \\ 1 & 2 & 4 \end{bmatrix}$

**5.36.** $\begin{bmatrix} 4 & 8 & 4 \\ 2 & 7 & 8 \\ 1 & 3 & 4 \end{bmatrix}$

**5.37.** $\begin{bmatrix} 5 & -4 & -2 \\ 4 & -5 & -5 \\ -3 & 1 & -4 \end{bmatrix}$

**5.38.** $\begin{bmatrix} -3 & 1 & -3 & 0 \\ -2 & 4 & 3 & -4 \\ 1 & 3 & 3 & 0 \\ -3 & 0 & -3 & -1 \end{bmatrix}$

**5.39.** $\begin{bmatrix} -2 & -2 & 0 & 3 \\ 0 & 2 & -2 & -1 \\ -1 & 0 & 2 & 0 \\ 1 & 0 & 2 & 1 \end{bmatrix}$

**5.40.** $\begin{bmatrix} 2.0 & 2.0 & -2.0 \\ -0.5 & 0.0 & -1.0 \\ 1.0 & 1.5 & 1.0 \end{bmatrix}$

*Az előző feladatokban megkonstruált LU-felbontásokat használva oldjuk meg az alábbi egyenletrendszereket, azaz oldjuk meg előbb az $\mathbf{Ly} = \mathbf{b}$, majd az $\mathbf{Ux} = \mathbf{y}$ egyenletrendszereket!*

**5.41.** $\begin{bmatrix} 4 & 4 & 4 \\ 2 & 5 & 5 \\ 1 & 2 & 4 \end{bmatrix}\mathbf{x} = \begin{bmatrix} 0 \\ 3 \\ 5 \end{bmatrix}$

**5.42.** $\begin{bmatrix} 4 & 8 & 4 \\ 2 & 7 & 8 \\ 1 & 3 & 4 \end{bmatrix}\mathbf{x} = \begin{bmatrix} 0 \\ 3 \\ 2 \end{bmatrix}$

**5.43.** $\begin{bmatrix} 5 & -4 & -2 \\ 4 & -5 & -5 \\ -3 & 1 & -4 \end{bmatrix}\mathbf{x} = \begin{bmatrix} 3 \\ -1 \\ -7 \end{bmatrix}$

**5.44.** $\begin{bmatrix} 2.0 & 2.0 & -2.0 \\ -0.5 & 0.0 & -1.0 \\ 1.0 & 1.5 & 1.0 \end{bmatrix}\mathbf{x} = \begin{bmatrix} 5.6 \\ -1.0 \\ 4.6 \end{bmatrix}$

**5.45. Végtelen sok megoldás.**
$$\begin{alignedat}{9} 4x_1 &{}+{}& 8x_2 &{}+{}& 4x_3 &{}+{}& 8x_4 &{}={}& 8 \\ 2x_1 &{}+{}& 6x_2 &{}+{}& 4x_3 &{}+{}& 4x_4 &{}={}& 4 \\ x_1 &{}+{}& 3x_2 &{}+{}& 2x_3 &{}+{}& 4x_4 &{}={}& 4 \end{alignedat}$$

*Határozzuk meg az alábbi mátrixok inverzét az LU-felbontásuk ismeretében, azaz oldjuk meg az $\mathbf{LY} = \mathbf{I}$ és az $\mathbf{UX} = \mathbf{Y}$ mátrixegyenleteket!*

**5.46.** $\begin{bmatrix} 4 & 4 & 4 \\ 2 & 5 & 5 \\ 1 & 2 & 4 \end{bmatrix}$

**5.47.** $\begin{bmatrix} 4 & 8 & 4 \\ 2 & 7 & 8 \\ 1 & 3 & 4 \end{bmatrix}$

**5.48.** Bizonyítsuk be, hogy ha $\mathbf{A} = \mathbf{LU}$ az $\mathbf{A}$ egy LU-felbontása, és $\mathbf{A}$ invertálható, akkor e felbontás egyértelmű!

*Adjuk meg az alábbi mátrixok egy PLU-felbontását! Alkalmazzunk részleges főelem-kiválasztást!*

**5.49.** $\begin{bmatrix} 1 & 1 & 2 \\ 3 & 3 & 3 \\ 2 & 2 & 3 \end{bmatrix}$

**5.50.** $\begin{bmatrix} 1 & 2 & 3 & 4 & 5 \\ 2 & 2 & 3 & 3 & 4 \\ 3 & 4 & 6 & 7 & 9 \end{bmatrix}$

**5.51.** $\begin{bmatrix} 0.0 & -1.0 & 1.5 \\ 0.5 & -2.0 & 2.0 \\ 0.0 & 2.0 & 2.0 \end{bmatrix}$

**5.52.** Igazoljuk, hogy az
$$\mathbf{A} = \begin{bmatrix} 0 & 0 & 1 \\ 1 & 1 & 1 \\ 0 & 1 & 1 \end{bmatrix}$$
mátrixnak nincs LU-felbontása, és annak a mátrixnak sincs, melyet az $\mathbf{A}$ első két sorának felcserélésével kapunk.

### Megoldások

**5.4.** A bizonyítások közvetlenül következnek a valós számok közti műveletek tulajdonságaiból. Mintaként bebizonyítjuk az *(a)* állítást.
$$\mathbf{A} + \mathbf{B} = [a_{ij}] + [b_{ij}] = [a_{ij} + b_{ij}] \overset{*}{=} [b_{ij} + a_{ij}] = [b_{ij}] + [a_{ij}] = \mathbf{B} + \mathbf{A}.$$
A $*$-gal jelzett egyenlőségnél használjuk a számok összeadásának kommutativitását. A többi állítás hasonlóan bizonyítható.

**5.5.** Helyettesítés előtt: $\mathbf{u}^{\mathsf{T}}\mathbf{u}$, $\begin{bmatrix} 2 & -1 & -1 \end{bmatrix}\mathbf{u}$. Az $\mathbf{u} = \mathbf{Ax}$ helyettesítés elvégzése után $\mathbf{x}^{\mathsf{T}}\mathbf{A}^{\mathsf{T}}\mathbf{Ax}$, $\begin{bmatrix} 2 & -1 & -1 \end{bmatrix}\mathbf{Ax}$, ahol
$$\mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix}, \quad \mathbf{u} = \begin{bmatrix} u_1 \\ u_2 \\ u_3 \end{bmatrix}, \quad \mathbf{A} = \begin{bmatrix} 3 & 2 & 4 \\ 1 & -3 & 1 \\ 2 & -1 & -3 \end{bmatrix}.$$

**5.6.** $\begin{bmatrix} 1 & 3 \\ 2 & 8 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 2 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 \\ 0 & 2 \end{bmatrix}\begin{bmatrix} 1 & 3 \\ 0 & 1 \end{bmatrix}$

**5.7.** $\begin{bmatrix} 1 & 2 \\ -2 & -1 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ -2 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 \\ 0 & 3 \end{bmatrix}\begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix}$

**5.8.** $\begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 1 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}\begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}$

**5.9.** $\begin{bmatrix} 2 & 4 \\ 3 & 8 \end{bmatrix} = \begin{bmatrix} 2 & 0 \\ 3 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 \\ 0 & 2 \end{bmatrix}\begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix}$

**5.10.** $\begin{bmatrix} 2 & 0 & 4 \\ 0 & 2 & 0 \\ 3 & 2 & 7 \end{bmatrix} = \begin{bmatrix} 2 & 0 & 0 \\ 0 & 2 & 0 \\ 3 & 2 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 & 2 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$

**5.11.** $\begin{bmatrix} 1 & 1 & 2 \\ 1 & 1 & 1 \\ 2 & 4 & 5 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 1 & 1 & 0 \\ 2 & 0 & 1 \end{bmatrix}\begin{bmatrix} 1 & 0 & 2 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$

**5.12.** Legyen $\mathbf{A} = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$. Négyzete a zérusmátrix, azaz
$$\mathbf{A}^2 = \begin{bmatrix} a & b \\ c & d \end{bmatrix}\begin{bmatrix} a & b \\ c & d \end{bmatrix} = \begin{bmatrix} a^2 + bc & b(a + d) \\ c(a + d) & bc + d^2 \end{bmatrix} = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix}.$$
Innen vagy $a = d = 0$ és $b$ vagy $c$ legalább egyike 0, vagy $a \neq 0$, $c \neq 0$ és $b = -a^2/c$, $d = -a$.

**5.13.** A feladat érdekes, abban a Fibonacci sorozat elemei bukkannak föl. Ez az $f_0 = 0$, $f_1 = 1$, $f_{k+1} = f_k + f_{k-1}$ egyenlőségekkel definiált sorozat, melynek első néhány tagja: $0, 1, 1, 2, 3, 5, 8, 13, 21, \ldots$ Tekintsük $\mathbf{B}$ néhány hatványát:
$$\mathbf{A}^2 = \begin{bmatrix} 0 & 1 \\ 1 & 1 \end{bmatrix}\begin{bmatrix} 0 & 1 \\ 1 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 1 \\ 1 & 2 \end{bmatrix} = \begin{bmatrix} f_1 & f_2 \\ f_2 & f_3 \end{bmatrix},$$
$$\mathbf{A}^3 = \mathbf{A}^2\mathbf{A} = \begin{bmatrix} 1 & 1 \\ 1 & 2 \end{bmatrix}\begin{bmatrix} 0 & 1 \\ 1 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 2 \\ 2 & 3 \end{bmatrix} = \begin{bmatrix} f_2 & f_3 \\ f_3 & f_4 \end{bmatrix}.$$
Ennek alapján azt sejtjük, hogy
$$\mathbf{A}^n = \begin{bmatrix} f_{n-1} & f_n \\ f_n & f_{n+1} \end{bmatrix}.$$
Az állítás $n = 1, 2, 3$ esetén igaz, és $n$-ről öröklődik $n + 1$-re, ugyanis
$$\mathbf{A}^{n+1} = \mathbf{A}^n\mathbf{A} = \begin{bmatrix} f_{n-1} & f_n \\ f_n & f_{n+1} \end{bmatrix}\begin{bmatrix} 0 & 1 \\ 1 & 1 \end{bmatrix} = \begin{bmatrix} f_n & f_{n-1} + f_n \\ f_{n+1} & f_n + f_{n+1} \end{bmatrix} = \begin{bmatrix} f_n & f_{n+1} \\ f_{n+1} & f_{n+2} \end{bmatrix}.$$

**5.14.** $\mathbf{C} = \mathbf{AB}$ Einstein-konvencióval: $c_{ij} = a_{ik}b_{kj}$.

**5.17.** $\begin{bmatrix} 2 & -3 & 0 & 0 & 0 \\ -1 & 2 & 0 & 0 & 0 \\ 0 & 0 & -5 & 3 & 3 \\ 0 & 0 & -16 & 9 & 10 \\ 0 & 0 & 28 & -16 & -17 \end{bmatrix}$

**5.18.** $\begin{bmatrix} 2 & -3 & 7 & -4 & -4 \\ -1 & 2 & -7 & 4 & 4 \\ 0 & 0 & -5 & 3 & 3 \\ 0 & 0 & -16 & 9 & 10 \\ 0 & 0 & 28 & -16 & -17 \end{bmatrix}$

**5.19.** $\begin{bmatrix} -1 & 0 & 1 & 1 & 1 \\ 2 & -1 & -1 & -1 & -1 \\ -1 & 1 & 1 & 0 & 0 \\ -1 & 1 & 0 & 1 & 0 \\ -1 & 1 & 0 & 0 & 1 \end{bmatrix}$

**5.22.** A fölcserélhetőségre vonatkozó $\mathbf{AB} = \mathbf{BA}$ egyenletet szorozzuk meg mindkét oldalról $\mathbf{B}^{-1}$-gyel:
$$\mathbf{B}^{-1}(\mathbf{AB})\mathbf{B}^{-1} = \mathbf{B}^{-1}(\mathbf{BA})\mathbf{B}^{-1}.$$
Az asszociativitást használva
$$(\mathbf{B}^{-1}\mathbf{A})(\mathbf{B}\mathbf{B}^{-1}) = (\mathbf{B}^{-1}\mathbf{B})(\mathbf{A}\mathbf{B}^{-1}),$$
amiből $\mathbf{B}\mathbf{B}^{-1} = \mathbf{I}$ azonosság fölhasználásával kapjuk, hogy
$$\mathbf{B}^{-1}\mathbf{A} = \mathbf{A}\mathbf{B}^{-1}.$$

**5.23.** Azt mondjuk, hogy a $\circ$ művelet invertálható a $H$ egy $R$ részhalmazán, ha bármely $a, b, c \in R$ elem esetén az
$$a \circ x = b, \qquad y \circ a = c$$
egyenletek mindegyike megoldható, azaz vannak olyan $x, y \in H$ elemek, melyek kielégítik a fenti egyenleteket. Ha a definícióbeli $\circ$ kommutatív művelet, akkor elég a fenti két egyenlet egyikét tekinteni.

**5.24.** a) Az $e \in H$ semleges elem, ha minden $a \in H$ elemre $a \circ e = e \circ a = a$. b) Azt mondjuk, hogy a $\circ$ műveletre nézve $a$ inverze $b$, ha $a \circ b = b \circ a = e$.

**5.26.** Elég megmutatni, hogy
$$\left(\mathbf{A}^{-1} - \frac{\mathbf{A}^{-1}\mathbf{u}\mathbf{v}^{\mathsf{T}}\mathbf{A}^{-1}}{1 + \mathbf{v}^{\mathsf{T}}\mathbf{A}^{-1}\mathbf{u}}\right)(\mathbf{A} + \mathbf{u}\mathbf{v}^{\mathsf{T}}) = \mathbf{I},$$
mert ez a formula igazolása mellett azt is bizonyítja, hogy $\mathbf{A} + \mathbf{u}\mathbf{v}^{\mathsf{T}}$ invertálható.
$$\begin{aligned} &\left(\mathbf{A}^{-1} - \frac{\mathbf{A}^{-1}\mathbf{u}\mathbf{v}^{\mathsf{T}}\mathbf{A}^{-1}}{1 + \mathbf{v}^{\mathsf{T}}\mathbf{A}^{-1}\mathbf{u}}\right)(\mathbf{A} + \mathbf{u}\mathbf{v}^{\mathsf{T}}) \\ &= \mathbf{A}^{-1}\mathbf{A} + \mathbf{A}^{-1}\mathbf{u}\mathbf{v}^{\mathsf{T}} - \frac{\mathbf{A}^{-1}\mathbf{u}\mathbf{v}^{\mathsf{T}}\mathbf{A}^{-1}\mathbf{A}}{1 + \mathbf{v}^{\mathsf{T}}\mathbf{A}^{-1}\mathbf{u}} - \frac{\mathbf{A}^{-1}\mathbf{u}\mathbf{v}^{\mathsf{T}}\mathbf{A}^{-1}\mathbf{u}\mathbf{v}^{\mathsf{T}}}{1 + \mathbf{v}^{\mathsf{T}}\mathbf{A}^{-1}\mathbf{u}} \\ &= \mathbf{I} + \mathbf{A}^{-1}\mathbf{u}\mathbf{v}^{\mathsf{T}} - \frac{\mathbf{A}^{-1}\mathbf{u}\mathbf{1}\mathbf{v}^{\mathsf{T}}}{1 + \mathbf{v}^{\mathsf{T}}\mathbf{A}^{-1}\mathbf{u}} - \frac{\mathbf{A}^{-1}\mathbf{u}(\mathbf{v}^{\mathsf{T}}\mathbf{A}^{-1}\mathbf{u})\mathbf{v}^{\mathsf{T}}}{1 + \mathbf{v}^{\mathsf{T}}\mathbf{A}^{-1}\mathbf{u}} \\ &= \mathbf{I} + \mathbf{A}^{-1}\mathbf{u}\mathbf{v}^{\mathsf{T}} - \frac{\mathbf{A}^{-1}\mathbf{u}(1 + \mathbf{v}^{\mathsf{T}}\mathbf{A}^{-1}\mathbf{u})\mathbf{v}^{\mathsf{T}}}{1 + \mathbf{v}^{\mathsf{T}}\mathbf{A}^{-1}\mathbf{u}} \\ &\overset{*}{=} \mathbf{I} + \mathbf{A}^{-1}\mathbf{u}\mathbf{v}^{\mathsf{T}} - \mathbf{A}^{-1}\mathbf{u}\mathbf{v}^{\mathsf{T}} \\ &= \mathbf{I}. \end{aligned}$$
A $*$-gal jelzett egyenlőségnél azt használtuk ki, hogy $1 \times 1$-es mátrixszal való szorzás egybeesik a skalárral való szorzással, a skalár tényező pedig egy mátrixszorzatban átvihető más helyre, így az adott törtkifejezésben egyszerűsíthettünk vele.

**5.27.** Első lépésként kifejezzük az új mátrixot $\mathbf{A}$-ból mátrixműveletekkel. Legyen $\mathbf{e}_i$ és $\mathbf{e}_j$ az $i$-edik és $j$-edik standard egységvektor. Ekkor a módosított mátrix
$$\mathbf{B} = \mathbf{A} + \varepsilon\mathbf{e}_i\mathbf{e}_j^{\mathsf{T}}.$$
Erre alkalmazható a Sherman–Morrison-formula az $\mathbf{u} = \mathbf{e}_i$ és $\mathbf{v} = \varepsilon\mathbf{e}_j$ választással.
$$\begin{aligned} \mathbf{B}^{-1} &= \left(\mathbf{A} + \varepsilon\mathbf{e}_i\mathbf{e}_j^{\mathsf{T}}\right)^{-1} \\ &= \mathbf{A}^{-1} - \frac{\mathbf{A}^{-1}\mathbf{e}_i(\varepsilon\mathbf{e}_j)^{\mathsf{T}}\mathbf{A}^{-1}}{1 + \varepsilon\mathbf{e}_j^{\mathsf{T}}\mathbf{A}^{-1}\mathbf{e}_i} \\ &= \mathbf{A}^{-1} - \varepsilon\frac{(\mathbf{A}^{-1})_{*i}(\mathbf{A}^{-1})_{j*}}{1 + \varepsilon(\mathbf{A}^{-1})_{ji}} \end{aligned}$$

**5.28.** Az előző példa alkalmazásával
$$\mathbf{B}^{-1} = \mathbf{A}^{-1} - \frac{1}{10}\frac{(\mathbf{A}^{-1})_{*1}(\mathbf{A}^{-1})_{1*}}{1 + \frac{1}{10}(\mathbf{A}^{-1})_{11}}$$
$$= \begin{bmatrix} 0 & -2/5 & 3/5 & 0 \\ -2/5 & 7/5 & -8/5 & 3/5 \\ 3/5 & -8/5 & 7/5 & -2/5 \\ 0 & 3/5 & -2/5 & 0 \end{bmatrix} - \frac{1}{10}\frac{\begin{bmatrix} 0 \\ -2/5 \\ 3/5 \\ 0 \end{bmatrix}\begin{bmatrix} 0 & -2/5 & 3/5 & 0 \end{bmatrix}}{1 + \frac{1}{10}\cdot 0}$$
$$= \begin{bmatrix} 0 & -2/5 & 3/5 & 0 \\ -2/5 & 7/5 & -8/5 & 3/5 \\ 3/5 & -8/5 & 7/5 & -2/5 \\ 0 & 3/5 & -2/5 & 0 \end{bmatrix} - \frac{1}{10}\begin{bmatrix} 0 & 0 & 0 & 0 \\ 0 & 4/25 & -6/25 & 0 \\ 0 & -6/25 & 9/25 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix}$$
$$= \begin{bmatrix} 0 & -2/5 & 3/5 & 0 \\ -2/5 & 173/125 & -197/125 & 3/5 \\ 3/5 & -197/125 & 341/250 & -2/5 \\ 0 & 3/5 & -2/5 & 0 \end{bmatrix}.$$
Tizedestörtekkel számolva:
$$\mathbf{A}^{-1} = \begin{bmatrix} 0.0 & -0.4 & 0.6 & 0.0 \\ -0.4 & 1.4 & -1.6 & 0.6 \\ 0.6 & -1.6 & 1.4 & -0.4 \\ 0.0 & 0.6 & -0.4 & 0.0 \end{bmatrix}, \quad \mathbf{B}^{-1} = \begin{bmatrix} 0.000 & -0.400 & 0.600 & 0.000 \\ -0.400 & 1.384 & -1.576 & 0.600 \\ 0.600 & -1.576 & 1.364 & -0.400 \\ 0.000 & 0.600 & -0.400 & 0.000 \end{bmatrix}.$$

**5.31.** Az első egyenletet kivonjuk az utolsóból, innen $x = 1$, ezután visszahelyettesítés a második, harmadik, majd első egyenletbe.

**5.35.** $\mathbf{L} = \begin{bmatrix} 1 & 0 & 0 \\ 1/2 & 1 & 0 \\ 1/4 & 1/3 & 1 \end{bmatrix}$, $\mathbf{U} = \begin{bmatrix} 4 & 4 & 4 \\ 0 & 3 & 3 \\ 0 & 0 & 2 \end{bmatrix}$.

**5.36.** $\mathbf{L} = \begin{bmatrix} 1 & 0 & 0 \\ 1/2 & 1 & 0 \\ 1/4 & 1/3 & 1 \end{bmatrix}$, $\mathbf{U} = \begin{bmatrix} 4 & 8 & 4 \\ 0 & 3 & 6 \\ 0 & 0 & 1 \end{bmatrix}$.

**5.37.** $\mathbf{L} = \begin{bmatrix} 1 & 0 & 0 \\ 4/5 & 1 & 0 \\ -3/5 & 7/9 & 1 \end{bmatrix}$, $\mathbf{U} = \begin{bmatrix} 5 & -4 & -2 \\ 0 & -9/5 & -17/5 \\ 0 & 0 & -23/9 \end{bmatrix}$.

**5.38.** $\mathbf{L} = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 2/3 & 1 & 0 & 0 \\ -1/3 & 1 & 1 & 0 \\ 1 & -3/10 & -1/2 & 1 \end{bmatrix}$, $\mathbf{U} = \begin{bmatrix} -3 & 1 & -3 & 0 \\ 0 & 10/3 & 5 & -4 \\ 0 & 0 & -3 & 4 \\ 0 & 0 & 0 & -1/10 \end{bmatrix}$.

**5.39.** $\mathbf{L} = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 1/2 & 1/2 & 1 & 0 \\ -1/2 & -1/2 & 1/3 & 1 \end{bmatrix}$, $\mathbf{U} = \begin{bmatrix} -2 & -2 & 0 & 3 \\ 0 & 2 & -2 & -1 \\ 0 & 0 & 3 & -1 \\ 0 & 0 & 0 & 7/3 \end{bmatrix}$.

**5.40.** $\mathbf{L} = \begin{bmatrix} 1.00 & 0.00 & 0.00 \\ -0.25 & 1.00 & 0.00 \\ 0.50 & 1.00 & 1.00 \end{bmatrix}$, $\mathbf{U} = \begin{bmatrix} 2.00 & 2.00 & -2.00 \\ 0.00 & 0.50 & -1.50 \\ 0.00 & 0.00 & 3.50 \end{bmatrix}$.

**5.41.** $\mathbf{y} = (0, 3, 4)$, $\mathbf{x} = (-1, -1, 2)$.

**5.42.** $\mathbf{y} = (0, 3, 1)$, $\mathbf{x} = (1, -1, 1)$.

**5.43.** $\mathbf{y} = (3, -17/5, -23/9)$, $\mathbf{x} = (1, 0, 1)$.

**5.44.** $\mathbf{y} = (5.6, 0.4, 1.4)$, $\mathbf{x} = (1.2, 2.0, 0.4)$.

**5.45.** Mivel ismerjük az együtthatómátrix LU-felbontását – az épp az (5.2)-beli felbontás –, ezért ezt használjuk, és először megoldjuk az $\mathbf{Ly} = \mathbf{b}$ egyenletrendszert:
$$\begin{bmatrix} 1 & 0 & 0 \\ 1/2 & 1 & 0 \\ 1/4 & 1/2 & 1 \end{bmatrix}\begin{bmatrix} y_1 \\ y_2 \\ y_3 \end{bmatrix} = \begin{bmatrix} 8 \\ 4 \\ 4 \end{bmatrix}$$
Ebből $y_1 = 8$, ezt a második egyenletbe helyettesítve kapjuk, hogy $y_2 = 0$, majd ezeket a harmadikba helyettesítve kapjuk, hogy $y_3 = 2$. Ezután megoldjuk az $\mathbf{Ux} = \mathbf{y}$ egyenletrendszert, aminek alakja
$$\begin{bmatrix} 4 & 8 & 4 & 8 \\ 0 & 2 & 2 & 0 \\ 0 & 0 & 0 & 2 \end{bmatrix}\begin{bmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{bmatrix} = \begin{bmatrix} 8 \\ 0 \\ 2 \end{bmatrix}.$$
Ismét egyszerű visszahelyettesítésekkel kapjuk, hogy $x_4 = 1$, $x_3 = s$ a szabad változó, $x_2 = -s$ és $x_1 = s$. A megoldás $\mathbf{x} = (s, -s, s, 1) = (0, 0, 0, 1) + s(1, -1, 1, 0)$.

**5.46.** Az $\mathbf{LY} = \mathbf{I}$ egyenletből
$$\mathbf{Y} = \begin{bmatrix} 1 & 0 & 0 \\ -1/2 & 1 & 0 \\ -1/12 & -1/3 & 1 \end{bmatrix},$$
míg az $\mathbf{UX} = \mathbf{Y}$ egyenlet megoldása, egyúttal $\mathbf{A}$ inverze
$$\mathbf{X} = \begin{bmatrix} 5/12 & -1/3 & 0 \\ -1/8 & 1/2 & -1/2 \\ -1/24 & -1/6 & 1/2 \end{bmatrix}.$$

**5.47.** $$\mathbf{Y} = \begin{bmatrix} 1 & 0 & 0 \\ -1/2 & 1 & 0 \\ -1/12 & -1/3 & 1 \end{bmatrix}, \quad \mathbf{X} = \begin{bmatrix} 1/3 & -5/3 & 3 \\ 0 & 1 & -2 \\ -1/12 & -1/3 & 1 \end{bmatrix}.$$

**5.48.** Tegyük fel, hogy létezik az $n$-edrendű $\mathbf{A}$ mátrixnak két LU-felbontása is, azaz $\mathbf{A} = \mathbf{L}_1\mathbf{U}_1 = \mathbf{L}_2\mathbf{U}_2$. Mivel $\mathbf{A}$ invertálható, ezért $\mathbf{L}_1, \mathbf{U}_1, \mathbf{L}_2$ és $\mathbf{U}_2$ is. Ugyanis ha pl. $\mathbf{L}_1$ nem volna invertálható, akkor az oszlopterének dimenziója kisebb lenne $n$-nél, és mivel $\mathbf{L}_1\mathbf{U}_1$ oszlopvektorai az $\mathbf{L}_1$ oszlopvektorainak lineáris kombinációi, ezért e szorzat oszlopterének dimenziója is kisebb lenne $n$-nél, azaz $\mathbf{A}$ nem lenne invertálható. A többi mátrix invertálhatósága hasonlóan igazolható. Balról $\mathbf{L}_1$, jobbról $\mathbf{U}_2$ inverzével szorozva kapjuk, hogy
$$\mathbf{U}_1\mathbf{U}_2^{-1} = \mathbf{L}_1^{-1}\mathbf{L}_2.$$
A bal oldalon két felső háromszögmátrix szorzataként egy felső háromszögmátrix van, míg a jobb oldalon két alsó háromszögmátrix szorzata, ami alsó háromszögmátrix. Ráadásul a jobb oldal egység főátlójú. Ez csak akkor állhat fönn, ha $\mathbf{U}_1\mathbf{U}_2^{-1} = \mathbf{L}_1^{-1}\mathbf{L}_2 = \mathbf{I}$, azaz ha $\mathbf{L}_1 = \mathbf{L}_2$ és $\mathbf{U}_1 = \mathbf{U}_2$.

**5.49.** $$\mathbf{L} = \begin{bmatrix} 1 & 0 & 0 \\ 2/3 & 1 & 0 \\ 1/3 & 1/2 & 1 \end{bmatrix}, \; \mathbf{U} = \begin{bmatrix} 3 & 3 & 3 \\ 0 & 0 & 1 \\ 0 & 0 & 1/2 \end{bmatrix}, \; \mathbf{P} = \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{bmatrix}.$$

**5.50.** $$\mathbf{L} = \begin{bmatrix} 1 & 0 & 0 \\ 1/3 & 1 & 0 \\ 2/3 & -1 & 1 \end{bmatrix}, \; \mathbf{U} = \begin{bmatrix} 3 & 4 & 6 & 7 & 9 \\ 0 & 2/3 & 1 & 5/3 & 2 \\ 0 & 0 & 0 & 0 & 0 \end{bmatrix}, \; \mathbf{P} = \begin{bmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{bmatrix}.$$

**5.51.** $$\mathbf{L} = \begin{bmatrix} 1.0 & 0.0 & 0.0 \\ 0.0 & 1.0 & 0.0 \\ 0.0 & -0.5 & 1.0 \end{bmatrix}, \; \mathbf{U} = \begin{bmatrix} 0.5 & -2.0 & 2.0 \\ 0.0 & 2.0 & 2.0 \\ 0.0 & 0.0 & 2.5 \end{bmatrix}, \; \mathbf{P} = \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{bmatrix}.$$

**5.52.** Egyrészt $\det\mathbf{A} = 1 \neq 0$, és így $\det\mathbf{U} \neq 0$, tehát $u_{11} \neq 0$, másrészt $\mathbf{A}$ egy LU-felbontás bal felső elemére $0 = a_{11} = (\mathbf{LU})_{11} = l_{11}u_{11} \neq 0$, ami ellentmondás. Az első két sor felcserélése után kapott mátrixnál hasonló ellentmondásra jutunk az $a_{22}$ elemmel.

# 6. Determináns

Egy valós négyzetes mátrix sorvektorai által kifeszített paralelepipedon térfogata jó jellemzője a mátrix egyes tulajdonságainak. Ehhez közel áll a determináns fogalma, melyet egy négyzetes mátrixokon értelmezett skalárértékű függvényként definiálunk, ami elemi sorműveletekkel számolható.

### Paralelogramma előjeles területe

A paralelogramma területéről szóló 1.38. tétel szerint az $(a, b)$ és a $(c, d)$ vektorok által kifeszített paralelogramma területe $|ad - bc|$, $ad - bc$ pontosan akkor pozitív, ha az $(a, b)$ és a $(c, d)$ vektorok jobbrendszert alkotnak, és pontosan akkor negatív, ha balrendszert. Ez a következő definícióhoz vezet: két síkbeli vektor által kifeszített paralelogramma *előjeles területe* megegyezik területével, ha a két vektor jobbrendszert alkot, és a terület $-1$-szeresével, ha balrendszert. Jelölje $f$ az előjelesterület-függvényt, azaz legyen $f(\mathbf{u}, \mathbf{v}) = ad - bc$, ahol $\mathbf{u} = (a, b)$, $\mathbf{v} = (c, d)$. $f$ néhány tulajdonsága:

1. $f(c\mathbf{u}, \mathbf{v}) = cf(\mathbf{u}, \mathbf{v})$, és $f(\mathbf{u}, c\mathbf{v}) = cf(\mathbf{u}, \mathbf{v})$, azaz ha $f$ egyik argumentumát $c$-vel szorozzuk, a függvényérték $c$-szeresére változik. (Azt mondjuk, hogy $f$ *homogén* mindkét változójában.) Ez nyilvánvaló, hisz egy paralelogramma egyik oldalának $c$-szeresére növelése $c$-szerezi a területét. Ha $c$ negatív, akkor a vektorok körüljárása is változik összhangban azzal, hogy az előjeles területének is megváltozik az előjele (6.1. ábra).

2. $f(\mathbf{u}, \mathbf{v}) = -f(\mathbf{v}, \mathbf{u})$, hisz a két vektor sorrendjét megcserélve megváltozik orientációjuk, jobbrendszerből balrendszerbe és viszont (6.2. ábra).

3. $f(\mathbf{u}, \mathbf{v}) = f(\mathbf{u} + c\mathbf{v}, \mathbf{v}) = f(\mathbf{u}, \mathbf{v} + c\mathbf{u})$, azaz az $\left[\begin{smallmatrix} \mathbf{u} \\ \mathbf{v} \end{smallmatrix}\right] = \left[\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}\right]$ mátrix sorvektorai által kifeszített paralelogramma területe megegyezik a hozzáadás sorművelete után kapott mátrix sorvektoraihoz tartozó paralelogramma területével (6.3. ábra).

4. $f(\mathbf{u}, \mathbf{u}) = 0$, és hasonlóképp $f(\mathbf{u}, \mathbf{0}) = f(\mathbf{0}, \mathbf{u}) = 0$ tetszőleges $\mathbf{u}$ vektorra, ugyanis az elfajuló paralelogramma területe 0.

*6.1. ábra. Az $f(\mathbf{u}, c_1\mathbf{v}) = c_1 f(\mathbf{u}, \mathbf{v})$ ($c_1 > 0$) és $f(\mathbf{u}, c_2\mathbf{v}) = c_2 f(\mathbf{u}, \mathbf{v})$ ($c_2 < 0$) összefüggések szemléltetése.*

*6.2. ábra. Két vektor sorrendjének cseréje megváltoztatja az orientációjukat.*

*6.3. ábra. Az $f(\mathbf{u}, \mathbf{v}) = f(\mathbf{u} + c\mathbf{v}, \mathbf{v})$ és az $f(\mathbf{u}, \mathbf{v}) = f(\mathbf{u}, \mathbf{v} + c\mathbf{u})$ összefüggések szemléltetése.*

5. $f(\mathbf{i}, \mathbf{j}) = 1$, azaz a standard bázis által kifeszített egységnégyzet területe 1.

Az állítások a fenti ábrákkal szemléltetett egyszerű geometriai érvelések mellett az $f((a, b), (c, d)) = ad - bc$ formulával is bizonyíthatók. E tulajdonságok segítségével általánosítani tudjuk az előjeles terület fogalmát, és bevezethetjük az előjeles térfogat fogalmát az $n$-dimenziós valós tér paralelepipedonjaira.

### Paralelepipedon előjeles térfogata

A vegyes szorzat tárgyalásakor láttuk (1.31. definíció), hogy a valós háromdimenziós térben három vektor vegyes szorzata a vektorok által kifeszített paralelepipedon előjeles térfogatát adja, ahol az előjel aszerint pozitív vagy negatív, hogy a három vektor jobb- vagy balrendszert alkot. A háromdimenziós tér paralelepipedonjainak $f$ előjeles térfogatára a paralelogrammánál látottakhoz hasonló tulajdonságok igazolhatók.

1. $f$ homogén mindhárom argumentumában, azaz egy konstans tényező bármelyik argumentumból kiemelhető, pl. $f(c\mathbf{u}, \mathbf{v}, \mathbf{w}) = cf(\mathbf{u}, \mathbf{v}, \mathbf{w})$.

2. Bármely két argumentum felcserélése megváltoztatja a függvényérték előjelét, pl. $f(\mathbf{u}, \mathbf{v}, \mathbf{w}) = -f(\mathbf{w}, \mathbf{v}, \mathbf{u})$, $f(\mathbf{u}, \mathbf{v}, \mathbf{w}) = -f(\mathbf{u}, \mathbf{w}, \mathbf{v})$.

3. $f$ bármely argumentumához hozzáadva egy másik konstansszorosát, a függvényérték nem változik, pl. $f(\mathbf{u}, \mathbf{v}, \mathbf{w}) = f(\mathbf{u} + c\mathbf{w}, \mathbf{v}, \mathbf{w})$.

4. Ha $f$ bármely két argumentuma megegyezik, a függvényérték 0, pl. $f(\mathbf{u}, \mathbf{v}, \mathbf{u}) = 0$. Ugyancsak 0 értéket kapunk, ha $f$ bármelyik argumentuma a $\mathbf{0}$-vektor, pl. $f(\mathbf{u}, \mathbf{0}, \mathbf{w}) = 0$.

5. $f(\mathbf{i}, \mathbf{j}, \mathbf{k}) = 1$, azaz az egységkocka térfogata 1.

Látjuk, hogy $f$ eddig megismert tulajdonságai vagy azonnal megadják $f$ értékét (ha az 0 vagy 1), vagy az argumentumok olyan megváltoztatását tartalmazzák, amelyekhez hasonlókat a mátrixok elemi sorműveleteinél láttunk. Valóban, e tulajdonságok nem csak egy új fogalom – az előjeles térfogat általánosítását –, de egyúttal annak egyszerű kiszámítási módját is lehetővé teszik.

## A determináns mint sorvektorainak függvénye

### A determináns definíciója

Az $n$ darab $n$-dimenziós vektor által kifeszített paralelepipedon előjeles térfogata helyett olyan fogalmat fogunk definiálni, mely speciális esetként ezt is tartalmazza. Ez lesz a determináns. A determináns tehát olyan függvény, mely $n$ darab $n$-dimenziós vektorhoz – vagy ami ezzel ekvivalens, a belőlük képzett $n \times n$-es mátrixhoz – egy skalárt rendel. A definícióban csak az előjeles térfogat vizsgálatában megismert függvénytulajdonságokat használjuk.

Az $\mathbf{A} = [a_{ij}]_n$ mátrixhoz rendelt skalárt, azaz determinánsának értékét $\det(\mathbf{A})$, $|\mathbf{A}|$ vagy $|a_{ij}|$ jelöli. Részletezve az általános jelölést az $\mathbf{A}$ mátrixra és determinánsára:
$$\mathbf{A} = \begin{bmatrix} a_{11} & a_{12} & \ldots & a_{1n} \\ a_{21} & a_{22} & \ldots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{n2} & \ldots & a_{nn} \end{bmatrix}, \qquad \det(\mathbf{A}) = \begin{vmatrix} a_{11} & a_{12} & \ldots & a_{1n} \\ a_{21} & a_{22} & \ldots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{n2} & \ldots & a_{nn} \end{vmatrix}.$$
E jelölésnek megfelelően a $\det(\mathbf{A})$ determináns sorain, oszlopain, elemein az $\mathbf{A}$ mátrix sorait, oszlopait, elemeit értjük.

**6.1. definíció (Determináns).** *Determinánson azt a négyzetes mátrixokon értelmezett és $\det$-tel jelölt skalár értékű függvényt értjük, mely eleget tesz a következő feltételeknek:*
- *D1. értéke $c$-szeresére változik, ha egy sorát $c$-vel szorozzuk,*
- *D2. értéke $-1$-szeresére változik, ha két különböző sorát fölcseréljük,*
- *D3. értéke nem változik a hozzáadás elemi sorművelete közben,*
- *D4. az egységmátrixhoz 1-et rendel.*

> A determinánsokat először Seki Takakazu (関 孝和, 1642–1708) vizsgálta, eredményei 1683-ban jelentek meg. Seki 2-től 5-ödrendűek értékét tudta kiszámolni. Európában is 1683-ban jelenik meg a fogalom először Leibniz egy l'Hôpitalnak írt levelében, melyet később reziltánsnak hív. A determináns név Gausstól származik. A mátrixok és determinánsok történetének szép összefoglalója olvasható a MacTutor History of Mathematics weboldalon.

> Mint látjuk, a definíció első három feltétele azt mondja ki, hogy hogyan változik a determináns értéke elemi sorműveletek közben. Az egyetlen változás, hogy itt a skalárral való szorzásnál nem kötöttük ki, hogy $c$ nem lehet 0. Látni fogjuk, hogy e kikötés elhagyása nem fog gondot okozni az elemi sorműveletek determinánsokra való alkalmazásában.

> A definícióból nem látszik, hogy a feltételeket kielégítő függvény létezik-e és ha igen, egyértelmű-e. Ezeket később igazolni fogjuk.

> A definícióban nem törekedtünk a feltételek minimalizálására, inkább a természetesség és egyszerűség volt a fontosabb szempont. Például a D2. feltétel elhagyható, hisz sorcsere előállítható a két másik sorművelet segítségével, amint azt a 2.29. feladatból is láthattuk.

> Az $1 \times 1$-es $[a]$ mátrix determinánsa $\det([a]) = a$, ugyanis a determináns definíciója szerint $\det([1]) = 1$, és $\det([a]) = \det([a \cdot 1]) = a\det([1]) = a$. A D2. és D3. feltételek teljesülnek, hisz a determinánsnak csak egy sora van. A jelölésbeli zavarok elkerülésére az $1 \times 1$-es $[a]$ mátrix determinánsára csak a $\det([a])$ vagy $\det(a)$ jelölést használjuk, mert $|a|$ az $a$ abszolút értékét jelöli!

> Hamarosan igazolni fogjuk, hogy a fejezet elején említett
> $$\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$$
> képlet illeszkedik e definícióhoz.

> A determináns tekinthető olyan $n$-változós függvénynek, melynek $n$ argumentumába a mátrix $n$ sorvektora kerül. Nem okoz félreértést, ha ezt a függvényt is $\det$ jelöli. Ha tehát $\mathbf{A}$ sorvektorai $\mathbf{s}_1, \mathbf{s}_2, \ldots, \mathbf{s}_n$, akkor $\det(\mathbf{A})$ megegyezik a $\det(\mathbf{s}_1, \mathbf{s}_2, \ldots, \mathbf{s}_n)$ függvényértékkel. Például a $3 \times 3$-as egységmátrix determinánsa az alábbi alakokba írható:
> $$\det(\mathbf{I}_3) = \begin{vmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{vmatrix} = \det((1, 0, 0), (0, 1, 0), (0, 0, 1)) = \det(\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3),$$
> ahol $\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3$ a standard egységvektorokat jelöli. A determináns fenti definíciója könnyen fölírható e jelöléssel is (ld. 6.11. feladat).

### Mikor 0 a determináns értéke

Gyakran vízválasztó, hogy egy determináns értéke zérus-e.

**6.2. tétel (Ránézésre 0 determinánsok).** *Ha egy mátrixnak van egy zérussora, akkor determinánsa 0. Ha egy mátrixnak van két azonos sora, akkor determinánsa 0.*

*Bizonyítás.* Ha egy mátrixnak van egy zérussora, akkor e sort bármely $c$ számmal beszorozva e sor nem változik, így a determináns értéke sem. Másrészt a determináns definíciójának D1. pontja szerint a determináns értéke $c$-szeresére változik. E két feltétel csak úgy állhat fönn minden $c$ skalárra, ha $\det(\mathbf{A}) = 0$. (Ennek következményeként a definíció D1. pontjában nem kell a $c = 0$ lehetőséget kizárni.)

Ha egy determinánsnak két azonos sora van, akkor D3. szerint értéke nem változik, ha az egyik sort a másikból kivonjuk, így egy zérussort kapunk, akkor pedig a determináns értéke 0. $\square$

**6.3. tétel (Zérus értékű determináns).** *Legyen $\mathbf{A}$ négyzetes mátrix. A következő állítások ekvivalensek:*
1. *$\det(\mathbf{A}) = 0$,*
2. *$\mathbf{A}$ sorvektorai lineárisan összefüggők,*
3. *$\mathbf{A}$ szinguláris,*
4. *a homogén lineáris $\mathbf{Ax} = \mathbf{0}$ egyenletrendszernek van nemtriviális megoldása.*

*Bizonyítás.* Az 5.20. tételben láttuk, hogy négyzetes mátrix sorvektorai pontosan akkor lineárisan összefüggők, ha a mátrix szinguláris, azaz ha a lépcsős alakra hozás során keletkezik egy 0-sor, ez pedig azzal ekvivalens, hogy a determináns értéke 0. Az utolsó állítás ekvivalenciája a mátrix invertálhatóságáról szóló 5.15. tétel közvetlen következménye. $\square$

**6.4. példa (Zérus értékű determinánsok).** *A sorvektorok lineáris összefüggőségének igazolásával mutassuk meg, hogy*
$$\begin{vmatrix} 5 & 6 & 8 \\ 2 & 1 & 2 \\ 3 & 5 & 6 \end{vmatrix} = 0, \qquad \begin{vmatrix} 2 & -1 & 0 & -1 \\ -1 & 2 & -1 & 0 \\ 0 & -1 & 2 & -1 \\ -1 & 0 & -1 & 2 \end{vmatrix} = 0.$$

*Megoldás.* Az első determináns első sora a második és a harmadik összege. De fogalmazhatunk úgy is, hogy az első sorból kivonva a másodikat és a harmadikat, a nullvektort kapjuk. Tehát az első mátrix sorvektorai lineárisan összefüggők, így determinánsa 0.

A második determináns sorvektorainak összege a nullvektor, tehát ezek is lineárisan összefüggők, így ez a determináns is 0. $\square$

Az előző 6.3. tétel, valamint az 5.15. tétel fontos következménye a determinánsnak az egyenletrendszerek megoldhatóságával való kapcsolatáról szól:

**6.5. tétel (Egyenletrendszer megoldhatósága és a determináns).** *Legyen $\mathbf{A}$ négyzetes mátrix. Ekkor az alábbi állítások ekvivalensek:*
1. *$\det\mathbf{A} \neq 0$,*
2. *az $\mathbf{Ax} = \mathbf{b}$ egyenletrendszer tetszőleges $\mathbf{b}$-re egyértelműen megoldható,*
3. *az $\mathbf{Ax} = \mathbf{0}$ egyenletrendszernek csak triviális megoldása van.*

> A legegyszerűbb eseteket leszámítva a sorvektorok lineáris összefüggősége „ránézésre" nem látható, de az összefüggőséget bizonyító skalárok – ha szükségünk van rá – megkaphatók az $\mathbf{A}^{\mathsf{T}}\mathbf{x} = \mathbf{0}$ egyenletrendszer nemtriviális megoldásaiból.

> A gyakorlatban – például mért vagy közelítő számítással kapott adatok esetén – annak eldöntése, hogy egy determináns nulla-e, nagy óvatosságot igényel! Az, hogy egy mátrix „közel szinguláris", nem feltétlenül olvasható le abból, hogy a determináns értéke „közel van a nullához". Például az
> $$\begin{vmatrix} \frac{1}{n} & 0 \\ 0 & n \end{vmatrix} = 1, \quad \text{és az} \quad \begin{vmatrix} \frac{1}{2} & 0 & \ldots & 0 \\ 0 & \frac{1}{2} & \ldots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \ldots & \frac{1}{2} \end{vmatrix} = \frac{1}{2^n}$$
> determinánsok közül az első értéke tetszőlegesen nagy $n$-re is 1, pedig $\frac{1}{n}$ tetszőlegesen kicsi lehet 0-hoz, és az $\left[\begin{smallmatrix} 0 & 0 \\ 0 & n \end{smallmatrix}\right]$ mátrix már szinguláris. A második determinánsbeli $\frac{1}{2}\mathbf{I}_n$ mátrix nem szinguláris, pedig determinánsának értéke tetszőlegesen közel lehet 0-hoz, igaz, csak elegendően nagy $n$ esetén.

> A véletlen valós mátrixok determinánsa 1 valószínűséggel nem 0, ha a mátrix elemeit valamely folytonos valószínűségeloszlás szerint választjuk. Másként fogalmazva, ha egy valós elemű mátrix determinánsa 0, akkor annak különleges oka van! Ez az ok, a sorvektorok közti lineáris kapcsolat, ami „igen ritkán" esik meg „véletlenül".

### A determináns értékének kiszámítása

A determináns kiszámításához az elemi sorműveleteket fogjuk használni. A 6.1. definíció pontosan megmondja, hogyan változik a determináns értéke az elemi sorműveletek közben. Ha a lépcsős alakra hozás közben nem keletkezik zérussor, akkor a lépcsős alak háromszög alakú, illetve a redukált lépcsős alak diagonális. Ezek értékéről szól a következő tétel:

**6.6. tétel (Háromszögmátrix determinánsa).** *Az alsó vagy felső háromszögmátrix, s így a diagonális mátrix determinánsa megegyezik a főátlóbeli elemek szorzatával.*

*Bizonyítás.* Ha egy háromszögmátrix főátlójában van 0, akkor a redukált lépcsős alakra hozás után a főelemek száma kevesebb lesz, mint a sorok száma, azaz a mátrixban lesz egy zérussor, így determinánsának értéke 0. Ha nincs 0-elem a főátlóban, mind az alsó, mind a felső háromszögmátrix csak a hozzáadás sorművelettel – azaz a determináns értékének megváltoztatása nélkül – diagonálissá alakítható a főátlón kívüli elemek kiküszöbölésével, azaz
$$\begin{vmatrix} a_{11} & 0 & \ldots & 0 \\ ? & a_{22} & \ldots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ ? & ? & \ldots & a_{nn} \end{vmatrix} = \begin{vmatrix} a_{11} & ? & \ldots & ? \\ 0 & a_{22} & \ldots & ? \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \ldots & a_{nn} \end{vmatrix} = \begin{vmatrix} a_{11} & 0 & \ldots & 0 \\ 0 & a_{22} & \ldots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \ldots & a_{nn} \end{vmatrix}.$$
Egy diagonális mátrix determinánsában minden sorból kiemelve a főátlóban szereplő számot kapjuk, hogy
$$\begin{vmatrix} a_{11} & 0 & \ldots & 0 \\ 0 & a_{22} & \ldots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \ldots & a_{nn} \end{vmatrix} \overset{D1}{=} a_{11}a_{22}\ldots a_{nn}\begin{vmatrix} 1 & 0 & \ldots & 0 \\ 0 & 1 & \ldots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \ldots & 1 \end{vmatrix} = a_{11}a_{22}\ldots a_{nn},$$
tehát a determináns értéke valóban a főátlóbeli elemek szorzata. $\square$

Például az alábbi determináns értéke egyetlen sorcsere után azonnal leolvasható:
$$\begin{vmatrix} 3 & 0 & 0 & 0 & 0 \\ 3 & 0 & 0 & 2 & 0 \\ 3 & 0 & 2 & 0 & 0 \\ 3 & 2 & 0 & 0 & 0 \\ 3 & 3 & 3 & 3 & 3 \end{vmatrix} = -\begin{vmatrix} 3 & 0 & 0 & 0 & 0 \\ 3 & 2 & 0 & 0 & 0 \\ 3 & 0 & 2 & 0 & 0 \\ 3 & 0 & 0 & 2 & 0 \\ 3 & 3 & 3 & 3 & 3 \end{vmatrix} = -3 \cdot 2 \cdot 2 \cdot 2 \cdot 3 = -72$$

A determináns kézzel való kiszámításának módja tehát a következő: elemi sorműveletekkel hozzuk a determinánst olyan alakra, melynek

vagy van egy zérussora, vagy háromszög alakú. Az elemi sorműveletek közben pedig gondosan adminisztráljuk hatásukat, azaz
- két sor cseréjekor szorozzuk meg a determinánst $-1$-gyel,
- egy sorának $c$-vel való szorzásakor pedig szorozzuk meg a determinánst $1/c$-vel.

A háttérben lényegében ezt teszik a számítógépek is (ld. a 6.4. kódot).

**6.7. példa (Determináns kiszámítása háromszög alakra hozással).** *Számítsuk ki a*
$$\begin{vmatrix} 2 & 2 & -3 \\ 2 & 2 & -4 \\ 4 & 5 & -6 \end{vmatrix} \quad \text{és a} \quad \begin{vmatrix} 1 & 1 & 1 & 1 \\ 1 & 2 & 3 & 4 \\ 1 & 3 & 6 & 10 \\ 1 & 4 & 10 & 20 \end{vmatrix}$$
*determinánsok értékét!*

*Megoldás.* Elemi sorműveletekkel kapjuk, hogy
$$\begin{vmatrix} 2 & 2 & -3 \\ 2 & 2 & -4 \\ 4 & 5 & -6 \end{vmatrix} \overset{\substack{S_2 - S_1 \\ S_3 - 2S_1}}{=} \begin{vmatrix} 2 & 2 & -3 \\ 0 & 0 & -1 \\ 0 & 1 & 0 \end{vmatrix} \overset{S_2 \leftrightarrow S_3}{=} -\begin{vmatrix} 2 & 2 & -3 \\ 0 & 1 & 0 \\ 0 & 0 & -1 \end{vmatrix} = -(-2) = 2.$$
A következő determinánsnál sorcsere nélkül eliminálhatók a főátló alatti elemek, ezért a sorműveleteket nem is jelezzük.
$$\begin{vmatrix} 1 & 1 & 1 & 1 \\ 1 & 2 & 3 & 4 \\ 1 & 3 & 6 & 10 \\ 1 & 4 & 10 & 20 \end{vmatrix} = \begin{vmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 3 \\ 0 & 2 & 5 & 9 \\ 0 & 3 & 9 & 19 \end{vmatrix} = \begin{vmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 3 \\ 0 & 0 & 1 & 3 \\ 0 & 0 & 3 & 10 \end{vmatrix} = \begin{vmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 3 \\ 0 & 0 & 1 & 3 \\ 0 & 0 & 0 & 1 \end{vmatrix} = 1.$$
Egy érdekes észrevétel: a fenti determinánsban és sorlépcsős alakjában is a Pascal-háromszög számai találhatók. Ez nem véletlen, erről szólnak a 6.15. és a 6.16. feladatok. $\square$

*6.4. kód. Determináns kiszámítása.*
```
sage: M = matrix(3,range(9))
sage: M[2,2]=9
sage: M
[0 1 2]
[3 4 5]
[6 7 9]
sage: M.det()
-3
sage: det(M)
-3
```

### Elemi mátrixok determinánsa

Az elemi mátrixok egyetlen sorművelettel kaphatók az egységmátrixból, így ezek determinánsa könnyen számolható.

**6.8. következmény (Elemi mátrixok determinánsa).** *A hozzáadás sorművelettel kapott elemi mátrix determinánsa 1, a sorcserével kapotté $-1$, egy sor $c$-vel való szorzásával kapotté $c$.*

*Bizonyítás.* Az állítás abból következik, hogy az elemi mátrixok az 1 determinánsú egységmátrixból kaphatók egyetlen sorművelettel. $\square$

Például:
$$\begin{vmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 4 & 0 & 1 \end{vmatrix} = 1, \quad \begin{vmatrix} 1 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 & 0 \end{vmatrix} = -1, \quad \begin{vmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 3 \end{vmatrix} = 3.$$

### Permutáló mátrix determinánsa

A permutáló mátrix minden sorában és oszlopában egyetlen 1-es van, így csak elemi sorcserékkel megkapható az egységmátrixból. A sorcsere csak a determináns előjelét változtatja meg, ezért permutáló mátrix determinánsa 1, ha páros sok sorcserére volt szükség, $-1$, ha páratlan sokra. Például az alábbi determinánsok közül az első determináns két sorcserével, a második három sorcserével kapható meg az egységmátrixból, tehát
$$\begin{vmatrix} 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 & 0 \\ 1 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 0 & 1 \end{vmatrix} = 1, \quad \begin{vmatrix} 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 & 0 \\ 1 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 1 & 0 \end{vmatrix} = -1.$$
Azt mondjuk, hogy egy permutáló mátrix két sora *inverzióban* áll, ha az előbb álló sorbeli 1-es hátrébb van, mint a másik sorbeli. A
$$\begin{bmatrix} 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 1 & 0 & 0 & 0 \end{bmatrix}$$
mátrix inverzióinak száma például 4, ugyanis az első-második, első-negyedik, második-negyedik, harmadik-negyedik sorpárok inverzióban vannak.

**6.9. tétel (Permutáló mátrix determinánsa).** *A permutáló mátrix determinánsa aszerint $+1$ vagy $-1$, hogy inverzióban álló sorpárjainak száma páros vagy páratlan.*

*Bizonyítás.* Elég megmutatni, hogy egy sorcsere mindig megváltoztatja az inverziók számának paritását, vagyis azok száma párosból páratlanra, páratlanból párosra változik. Így ha egy permutáló mátrix inverzióinak száma páros, akkor csak páros sok sorcserével vihető az identikus mátrixba. Hasonlóan, ha az inverziók száma páratlan, akkor csak páratlan sokkal.

Ha a két megcserélendő sor szomszédos, akkor a sorcsere megváltoztatja e két sor viszonyát: ha inverzióban álltak, akkor ezután nem fognak, és fordítva. Az előttük és mögöttük álló sorokhoz való viszonyuk és azok egymáshoz való viszonya nem változott. Eszerint az inverziók száma eggyel nőtt vagy eggyel csökkent, azaz paritása megváltozott.

Ezután cseréljük fel az $i$-edik és $j$-edik sorokat (legyen $i < j$). Az inverziók számának nyomon követése érdekében ezt szomszédos sorok cseréjével valósítjuk meg. Cseréljük ki az $i$-ediket az $(i+1)$-edikkel, majd azt az $(i+2)$-edikkel,$\ldots$, míg az eredetileg $i$-edik sora a $j$-edik helyére nem kerül. Ehhez $j - i$ sorcserére van szükség. Ezután az eredetileg $j$-edik sort $j - i - 1$ sorcserével az $i$-edik helyre visszük. Ez összesen $2(j - i) - 1$, azaz páratlan sok szomszédos sor cseréje, ami a paritást valóban ellenkezőjére változtatja. $\square$

### Mátrixműveletek és determináns

Kérdés, hogy milyen kapcsolat van a mátrixműveletek és a determináns között. Fontos megjegyezni, hogy a determinánsfüggvénynek *nincs* a mátrixösszeadásra és a skalárral való szorzásra nézve művelettartó tulajdonsága, azaz általában $\det(\mathbf{A} + \mathbf{B}) \neq \det(\mathbf{A}) + \det(\mathbf{B})$, és $\det(c\mathbf{A}) \neq c\det(\mathbf{A})$.

A skalárral való szorzás esetén mondható valami: mivel egy mátrix $c$-szeresének determinánsa minden sorából kiemelhető $c$, ez annyi kiemelést jelent, ahány sora van a mátrixnak. Így tetszőleges $n \times n$-es $\mathbf{A}$ mátrixra és tetszőleges $c$ skalárra $\det(c\mathbf{A}) = c^n\det(\mathbf{A})$. Ez az $\mathbb{R}^2$- vagy $\mathbb{R}^3$-beli geometriai interpretációból is világos: egy paralelogramma előjeles területe 4-szeresére, egy paralelepipedon előjeles térfogata 8-szorosára nő, ha minden élét 2-szeresére növeljük.

A determináns művelettartó a négyzetes mátrixok szorzására nézve. Ezt mondja ki a következő állítás.

**6.10. állítás (Determinánsok szorzásszabálya).** *Ha $\mathbf{A}$ és $\mathbf{B}$ azonos méretű négyzetes mátrixok, akkor $\det(\mathbf{AB}) = \det(\mathbf{A})\det(\mathbf{B})$.*

*Bizonyítás.* A 6.8. tétel következtében egy elemi mátrixszal való balról szorzás egy mátrixon olyan sorműveletet hajt végre, mely determinánsát épp annyiszorosára változtatja, amennyi az elemi mátrix determinánsa. Így egy $\mathbf{E}$ elemi mátrix és egy tetszőleges négyzetes $\mathbf{B}$ mátrix szorzatának determinánsa megegyezik determinánsaik szorzatával, azaz
$$|\mathbf{EB}| = |\mathbf{E}|\,|\mathbf{B}|.$$
Tudjuk, hogy ha $\mathbf{A}$ szinguláris, akkor $\mathbf{AB}$ is, azaz ha $|\mathbf{A}| = 0$, akkor $|\mathbf{AB}|$ is 0, tehát $|\mathbf{AB}| = |\mathbf{A}|\,|\mathbf{B}|$. Ha $\mathbf{A}$ nem szinguláris, akkor felbontható elemi mátrixok szorzatára: $\mathbf{A} = \mathbf{E}_1\mathbf{E}_2 \ldots \mathbf{E}_k$, így $\mathbf{AB} = \mathbf{E}_1\mathbf{E}_2 \ldots \mathbf{E}_k\mathbf{B}$. A $|\mathbf{EB}| = |\mathbf{E}|\,|\mathbf{B}|$ összefüggést az $\mathbf{E}_1\mathbf{E}_2 \ldots \mathbf{E}_k$-ra és $\mathbf{E}_1\mathbf{E}_2 \ldots \mathbf{E}_k\mathbf{B}$-re is

használva kapjuk, hogy
$$\begin{aligned} |\mathbf{A}|\,|\mathbf{B}| &= |\mathbf{E}_1\mathbf{E}_2\mathbf{E}_3 \ldots \mathbf{E}_k|\,|\mathbf{B}| \\ &= |\mathbf{E}_1|\,|\mathbf{E}_2\mathbf{E}_3 \ldots \mathbf{E}_k|\,|\mathbf{B}| \\ &= |\mathbf{E}_1|\,|\mathbf{E}_2|\,|\mathbf{E}_3 \ldots \mathbf{E}_k|\,|\mathbf{B}| = \ldots = \\ &= |\mathbf{E}_1|\,|\mathbf{E}_2|\,|\mathbf{E}_3| \ldots |\mathbf{E}_k|\,|\mathbf{B}|, \quad \text{másrészt} \\ |\mathbf{AB}| &= |\mathbf{E}_1\mathbf{E}_2\mathbf{E}_3 \ldots \mathbf{E}_k\mathbf{B}| \\ &= |\mathbf{E}_1|\,|\mathbf{E}_2\mathbf{E}_3 \ldots \mathbf{E}_k\mathbf{B}| \\ &= |\mathbf{E}_1|\,|\mathbf{E}_2|\,|\mathbf{E}_3 \ldots \mathbf{E}_k\mathbf{B}| = \ldots = \\ &= |\mathbf{E}_1|\,|\mathbf{E}_2|\,|\mathbf{E}_3| \ldots |\mathbf{E}_k|\,|\mathbf{B}|, \end{aligned}$$
ami bizonyítja az állítást. Egy másik, nagyon szép bizonyítás található a 6.12. feladatban. $\square$

A determinánsok szorzásszabályának egy fontos alkalmazása a determináns értékének kiszámítása PLU-felbontással (ld. 6.5. kód).

**6.11. példa (Determináns kiszámolása PLU-felbontásból).** *Hogyan határozzuk meg egy $\mathbf{A}$ mátrix determinánsát, ha ismerjük PLU-felbontását? Konkrétan mennyi a következő mátrix determinánsa?*
$$\begin{bmatrix} 0 & 1 & 2 \\ 3 & 5 & 6 \\ 4 & 7 & 9 \end{bmatrix} = \begin{bmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{bmatrix}\begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 3/4 & -1/4 & 1 \end{bmatrix}\begin{bmatrix} 4 & 7 & 9 \\ 0 & 1 & 2 \\ 0 & 0 & -1/4 \end{bmatrix}.$$

*Megoldás.* Egy PLU-felbontásban szereplő mindegyik mátrix determinánsa könnyen meghatározható. $\mathbf{P}$ két sorcserével egységmátrixszá válik, tehát $\det\mathbf{P} = 1$. $\mathbf{L}$ és $\mathbf{U}$ háromszögmátrixok, amelyek determinánsa a főátlóbeli elemek szorzata, ami $\mathbf{L}$ esetén mindig 1. A megadott konkrét esetben tehát $\det\mathbf{A} = 4 \cdot 1 \cdot (-1/4) = -1$. $\square$

*6.5. kód. Determináns kiszámítása a PLU-felbontásból. A felbontás az egészek gyűrűjében nem működik, ezért gyűrűt váltunk és dupla pontosságú lebegőpontos számokkal számolunk (RDF).*
```
sage: M = matrix(3,range(9))
sage: M[2,2]=9
sage: N=M.change_ring(RDF)
sage: N
[0.0 1.0 2.0]
[3.0 4.0 5.0]
[6.0 7.0 9.0]
sage: N.det()
-3.0
sage: P,L,U = N.LU()
sage: P
[0.0 0.0 1.0]
[1.0 0.0 0.0]
[0.0 1.0 0.0]
sage: U
[ 6.0  7.0  9.0]
[ 0.0  1.0  2.0]
[ 0.0  0.0 -0.5]
sage: P.det()
1.0
sage: U.det()
-3.0
```

Mátrix determinánsa és transzponáltjának determinánsa megegyezik. Ez lehetővé teszi, hogy a determináns kiszámításához nem csak az elemi sor-, de az elemi oszlopműveleteket is használjuk, hisz egy mátrixon végzett oszlopművelet a transzponált sorművelete.

**6.12. állítás (Transzponált determinánsa).** *Mátrix determinánsa megegyezik transzponáltjának determinánsával, azaz bármely négyzetes $\mathbf{A}$ mátrixra $\det(\mathbf{A}) = \det(\mathbf{A}^{\mathsf{T}})$.*

*Bizonyítás.* Az $\mathbf{A}$ mátrix redukált lépcsős alakra hozásának mátrixszorzatos alakja legyen $\mathbf{A} = \mathbf{E}_1\mathbf{E}_2 \ldots \mathbf{E}_k\mathbf{R}$, ahol $\mathbf{E}_i$ elemi mátrix, $\mathbf{R}$ az $\mathbf{A}$ redukált lépcsős alakja. A transzponált lépcsős alakja
$$|\mathbf{A}^{\mathsf{T}}| = |\mathbf{R}^{\mathsf{T}}\mathbf{E}_k^{\mathsf{T}} \ldots \mathbf{E}_2^{\mathsf{T}}\mathbf{E}_1^{\mathsf{T}}| = |\mathbf{R}^{\mathsf{T}}|\,|\mathbf{E}_k^{\mathsf{T}}| \ldots |\mathbf{E}_2^{\mathsf{T}}|\,|\mathbf{E}_1^{\mathsf{T}}|.$$
Könnyen ellenőrizhető, hogy minden elemi mátrix determinánsa megegyezik transzponáltjának determinánsával (ellenőrizzük!). Mivel $\mathbf{R}$ redukált lépcsős alak, ezért $\mathbf{R} = \mathbf{I}$, vagy $\mathbf{R}$-nek van egy zérus sora. Ha $\mathbf{R} = \mathbf{I}$, akkor $|\mathbf{R}^{\mathsf{T}}| = |\mathbf{R}| = |\mathbf{I}| = 1$, ha pedig $\mathbf{R}$-nek van zérus sora, akkor $\mathbf{R}^{\mathsf{T}}$-nak zérus oszlopa, és egy ilyen mátrix nem alakítható elemi sorműveletekkel egységmátrixszá, tehát determinánsa 0. Azaz $|\mathbf{R}| = |\mathbf{R}^{\mathsf{T}}|$ ekkor is fönnáll. Ekkor pedig
$$\begin{aligned} |\mathbf{A}^{\mathsf{T}}| &= |\mathbf{R}^{\mathsf{T}}|\,|\mathbf{E}_k^{\mathsf{T}}| \ldots |\mathbf{E}_2^{\mathsf{T}}|\,|\mathbf{E}_1^{\mathsf{T}}| = |\mathbf{R}|\,|\mathbf{E}_k| \ldots |\mathbf{E}_2|\,|\mathbf{E}_1| \\ &= |\mathbf{E}_1|\,|\mathbf{E}_2| \ldots |\mathbf{E}_k|\,|\mathbf{R}| = |\mathbf{E}_1\mathbf{E}_2 \ldots \mathbf{E}_k\mathbf{R}| = |\mathbf{A}|. \end{aligned}$$
Tehát $|\mathbf{A}^{\mathsf{T}}| = |\mathbf{A}|$. $\square$

**6.13. példa (Determináns kiszámítása elemi oszlopműveletekkel).** *Az alábbi determinánst elemi sor- és oszlopműveletek alkalmazásával 2 lépésben kiszámíthatjuk:*
$$\begin{vmatrix} 1 & 0 & 0 & 1 & 0 \\ 2 & 2 & 1 & 3 & 1 \\ 1 & 1 & 1 & 1 & 0 \\ 1 & 1 & 1 & 2 & 0 \\ 1 & 1 & 1 & 2 & 1 \end{vmatrix} \overset{S_2 - S_5}{=} \begin{vmatrix} 1 & 0 & 0 & 1 & 0 \\ 1 & 1 & 0 & 1 & 0 \\ 1 & 1 & 1 & 1 & 0 \\ 1 & 1 & 1 & 2 & 0 \\ 1 & 1 & 1 & 2 & 1 \end{vmatrix} \overset{O_4 - O_1}{=} \begin{vmatrix} 1 & 0 & 0 & 0 & 0 \\ 1 & 1 & 0 & 0 & 0 \\ 1 & 1 & 1 & 0 & 0 \\ 1 & 1 & 1 & 1 & 0 \\ 1 & 1 & 1 & 1 & 1 \end{vmatrix} = 1$$

### Determinánsok soronkénti additivitása

A determinánsok egy fontos tulajdonságát a paralelogramma előjeles területével szemléltetünk. Tekintsük a síkban az $\mathbf{u}$, $\mathbf{v}$ és $\mathbf{w}$ vektorokat, valamint az $\mathbf{u}$ és $\mathbf{v}$ által, valamint az $\mathbf{u}$ és $\mathbf{w}$ által kifeszített paralelogrammákat, ahogy azt a 6.6. ábra mutatja. Igazolható, de az ábráról is leolvasható, hogy (előjeles) területük összege megegyezik az $\mathbf{u}$ és a $\mathbf{v} + \mathbf{w}$ vektorok által kifeszített paralelogramma (előjeles) területével. Az előjeles területet $f$-fel jelölve igaz tehát az $f(\mathbf{u}, \mathbf{v}) + f(\mathbf{u}, \mathbf{w}) = f(\mathbf{u}, \mathbf{v} + \mathbf{w})$ összefüggés. Hasonlóképp igaz, hogy $f(\mathbf{u}, \mathbf{v}) + f(\mathbf{w}, \mathbf{v}) = f(\mathbf{u} + \mathbf{w}, \mathbf{v})$ bármely három $\mathbf{u}$, $\mathbf{v}$, $\mathbf{w}$ vektorra. Szavakban kifejezve $f$ additív mindkét változójában.

*6.6. ábra. Az $f(\mathbf{u}, \mathbf{v}) + f(\mathbf{u}, \mathbf{w}) = f(\mathbf{u}, \mathbf{v} + \mathbf{w})$ összefüggés szemléltetése.*

**6.14. tétel (Soronkénti additivitás).** *Legyen $\mathbf{A}$, $\mathbf{B}$ és $\mathbf{C}$ három olyan mátrix, melyek $i$-edik sorukat kivéve megegyeznek egymással. A három mátrix $i$-edik sorvektora legyen rendre $\mathbf{a}_i$, $\mathbf{b}_i$ és $\mathbf{a}_i + \mathbf{b}_i$. Ekkor $|\mathbf{A}| + |\mathbf{B}| = |\mathbf{C}|$, azaz*
$$\begin{vmatrix} \mathbf{a}_1 \\ \mathbf{a}_2 \\ \vdots \\ \mathbf{a}_i \\ \vdots \\ \mathbf{a}_n \end{vmatrix} + \begin{vmatrix} \mathbf{a}_1 \\ \mathbf{a}_2 \\ \vdots \\ \mathbf{b}_i \\ \vdots \\ \mathbf{a}_n \end{vmatrix} = \begin{vmatrix} \mathbf{a}_1 \\ \mathbf{a}_2 \\ \vdots \\ \mathbf{a}_i + \mathbf{b}_i \\ \vdots \\ \mathbf{a}_n \end{vmatrix}.$$

*Bizonyítás.* Ha az $\mathbf{a}_1, \mathbf{a}_2, \ldots, \mathbf{a}_{i-1}, \mathbf{a}_{i+1}, \ldots, \mathbf{a}_n$ vektorok lineárisan összefüggők, akkor $|\mathbf{A}| = |\mathbf{B}| = |\mathbf{C}| = 0$, így a tétel állítása fönnáll. Ugyanez igaz akkor is, ha $\mathbf{a}_i$ és $\mathbf{b}_i$ is előáll a fenti vektorok lineáris kombinációjaként, mert akkor összegük is előáll, és így ismét mindhárom determináns 0. Feltesszük tehát, hogy $\mathbf{a}_i$ és $\mathbf{b}_i$ legalább egyike független a többi sorvektortól. Az általánosság megszorítása nélkül feltehető, hogy $\mathbf{a}_i$ független a többi sorvektortól, vagyis $\mathbf{A}$ sorvektorai függetlenek, így bázist alkotnak. Ekkor $\mathbf{b}_i$ előáll lineáris kombinációjukként:
$$\mathbf{b}_i = b_1\mathbf{a}_1 + b_2\mathbf{a}_2 + \ldots + b_i\mathbf{a}_i + \ldots + b_n\mathbf{a}_n.$$
Vonjuk ki a $|\mathbf{B}|$ determináns $i$-edik sorából a $b_k\mathbf{a}_k$ sorokat, ahol $k = 1, 2, \ldots, i - 1, i + 1, \ldots, n$. E műveletek közben a determináns értéke nem változik, és az $i$-edik sorban csak a $b_i\mathbf{a}_i$ vektor marad. Ezután emeljük ki az $i$-edik sorból a $b_i$ konstanst, kapjuk, hogy $|\mathbf{B}| = b_i|\mathbf{A}|$. A $\mathbf{C}$ mátrixszal is megismételjük e műveleteket, csak ott a végén az $i$-edik sorban az $(1 + b_i)\mathbf{a}_i$ vektor marad, így kapjuk, hogy $|\mathbf{C}| = (1 + b_i)|\mathbf{A}|$. Innen pedig
$$|\mathbf{A}| + |\mathbf{B}| = |\mathbf{A}| + b_i|\mathbf{A}| = (1 + b_i)|\mathbf{A}| = |\mathbf{C}|,$$
és ezzel kész a bizonyítás. $\square$

> Az előbbi tételt használva a determinánsok második soraira, a determinánsok kiszámítása nélkül is látjuk, hogy
> $$\begin{vmatrix} 2 & 2 & 2 \\ 1 & 2 & 3 \\ 9 & 8 & 6 \end{vmatrix} + \begin{vmatrix} 2 & 2 & 2 \\ 2 & 1 & 1 \\ 9 & 8 & 6 \end{vmatrix} = \begin{vmatrix} 2 & 2 & 2 \\ 3 & 3 & 4 \\ 9 & 8 & 6 \end{vmatrix}.$$

> A tétel indukcióval kettőnél több sora is igazolható, így például a következő egyenlőség is igaz:
> $$\begin{vmatrix} 2 & 2 & 2 \\ 1 & 2 & 3 \\ 9 & 8 & 6 \end{vmatrix} + \begin{vmatrix} 2 & 2 & 2 \\ 2 & 1 & 1 \\ 9 & 8 & 6 \end{vmatrix} + \begin{vmatrix} 2 & 2 & 2 \\ 1 & 1 & 1 \\ 9 & 8 & 6 \end{vmatrix} = \begin{vmatrix} 2 & 2 & 2 \\ 4 & 4 & 6 \\ 9 & 8 & 6 \end{vmatrix}.$$

> A tételbeli képletet fordított irányban is használni fogjuk, nevezetesen egy determináns fölbontható több determináns összegére. Például:
> $$\begin{vmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 9 & 0 \end{vmatrix} = \begin{vmatrix} 1 & 0 & 0 \\ 4 & 5 & 6 \\ 7 & 9 & 0 \end{vmatrix} + \begin{vmatrix} 0 & 2 & 0 \\ 4 & 5 & 6 \\ 7 & 9 & 0 \end{vmatrix} + \begin{vmatrix} 0 & 0 & 3 \\ 4 & 5 & 6 \\ 7 & 9 & 0 \end{vmatrix},$$
> mivel $(1, 2, 3) = (1, 0, 0) + (0, 2, 0) + (0, 0, 3)$.

> Mivel a transzponálás nem változtat a determináns értékén, e tétel sorvektorok helyett oszlopvektorokra is kimondható.

> E tétel a determináns definíciójának D1. feltételével együtt azt mondja, hogy a determináns olyan függvénye bármelyik sorának (a többi sor rögzítése mellett), mely megőrzi a lineáris kombinációt. Ezen azt értjük, hogy ha egy determináns $i$-edik sorvektora egyenlő a $c\mathbf{x} + d\mathbf{y}$ vektorral, akkor a determináns felbontható a következő képlet szerint:
> $$\begin{vmatrix} \mathbf{a}_1 \\ \vdots \\ \mathbf{a}_{i-1} \\ c\mathbf{x} + d\mathbf{y} \\ \mathbf{a}_{i+1} \\ \vdots \\ \mathbf{a}_n \end{vmatrix} = c\begin{vmatrix} \mathbf{a}_1 \\ \vdots \\ \mathbf{a}_{i-1} \\ \mathbf{x} \\ \mathbf{a}_{i+1} \\ \vdots \\ \mathbf{a}_n \end{vmatrix} + d\begin{vmatrix} \mathbf{a}_1 \\ \vdots \\ \mathbf{a}_{i-1} \\ \mathbf{y} \\ \mathbf{a}_{i+1} \\ \vdots \\ \mathbf{a}_n \end{vmatrix}.$$

E tulajdonsággal rendelkező függvényeket *lineárisaknak* fogjuk nevezni, azokat a többváltozós függvényeket pedig, amelyek minden változójukban lineárisak, *multilineárisaknak*. Tehát a determináns, mint $n$-változós függvény multilineáris, ugyanis bármely $i$-re ($i = 1, 2, \ldots, n$):
$$\det(\mathbf{a}_1, \ldots, \mathbf{a}_{i-1}, c\mathbf{x} + d\mathbf{y}, \mathbf{a}_{i+1}, \ldots, \mathbf{a}_n) = c\det(\mathbf{a}_1, \ldots, \mathbf{a}_{i-1}, \mathbf{x}, \mathbf{a}_{i+1}, \ldots, \mathbf{a}_n) + d\det(\mathbf{a}_1, \ldots, \mathbf{a}_{i-1}, \mathbf{y}, \mathbf{a}_{i+1}, \ldots, \mathbf{a}_n).$$

### Feladatok

**6.1.** Melyek igazak az alábbi állítások közül? (Az $\mathbf{A}$ itt mindig négyzetes mátrixot jelöl.)
1. Ha egy determináns értéke 0, akkor van két azonos sora.
2. Ha egy determináns értéke nem 0, akkor oszlopvektorai lineárisan függetlenek.
3. Ha az $\mathbf{Ax} = \mathbf{0}$ egyenletrendszernek van nemtriviális megoldása, akkor $|\mathbf{A}| \neq 0$.
4. $|\mathbf{A}| \neq 0$ pontosan akkor igaz, ha az $\mathbf{Ax} = \mathbf{b}$ egyenletrendszer nem oldható meg.
5. $|\mathbf{A}| = 0$ pontosan akkor igaz, ha az $\mathbf{Ax} = \mathbf{b}$ egyenletrendszer egyértelműen megoldható.

**6.2.** Számítsuk ki az alábbi determinánsok értékét fejben!
a) $\begin{vmatrix} 1 & 2 \\ 3 & 4 \end{vmatrix}$  b) $\begin{vmatrix} 0 & 0 & 0 \\ 1 & 2 & 3 \\ 4 & 5 & 6 \end{vmatrix}$  c) $\begin{vmatrix} 1 & 2 & 3 \\ 1 & 2 & 3 \\ 1 & 2 & 3 \end{vmatrix}$
d) $\begin{vmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 3 & 6 & 9 \end{vmatrix}$  e) $\begin{vmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{vmatrix}$  f) $\begin{vmatrix} 1 & 0 & 0 \\ 2 & 2 & 0 \\ 3 & 3 & 3 \end{vmatrix}$
g) $\begin{vmatrix} 1 & -2 & 1 & 2 \\ 4 & 3 & 4 & -1 \\ 5 & 1 & 5 & 4 \\ 5 & 6 & 5 & 0 \end{vmatrix}$

**6.3.** Mutassuk meg – lineáris összefüggőséget keresve a sorok közt –, hogy az alábbi determinánsok értéke 0.
a) $\begin{vmatrix} 1 & 1 & 1 \\ 2 & 3 & 5 \\ 3 & 4 & 6 \end{vmatrix}$  b) $\begin{vmatrix} 1 & -2 & 3 \\ -2 & 4 & -6 \\ 3 & 6 & 9 \end{vmatrix}$  c) $\begin{vmatrix} 2 & 1 & 0 \\ 3 & 2 & 1 \\ 5 & 3 & 1 \end{vmatrix}$
d) $\begin{vmatrix} 1 & 2 & 3 \\ 2 & 3 & 4 \\ 3 & 4 & 5 \end{vmatrix}$  e) $\begin{vmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{vmatrix}$  f) $\begin{vmatrix} 1 & 1 & -2 \\ 1 & -2 & 1 \\ -2 & 1 & 1 \end{vmatrix}$
g) $\begin{vmatrix} \sin\alpha & \cos\alpha & \sin(\alpha + \delta) \\ \sin\beta & \cos\beta & \sin(\beta + \delta) \\ \sin\gamma & \cos\gamma & \sin(\gamma + \delta) \end{vmatrix}$  h) $\begin{vmatrix} \ln 10 & \ln 4 & \ln 40 \\ \ln 5 & \ln 4 & \ln 20 \\ \ln 2 & 0 & \ln 2 \end{vmatrix}$

**6.4.** Fölhasználva, hogy
$$\begin{vmatrix} a & b & c \\ d & e & f \\ g & h & i \end{vmatrix} = -2,$$
számítsuk ki az alábbi determinánsok értékét:
a) $\begin{vmatrix} a & b & c \\ g & h & i \\ d & e & f \end{vmatrix}$  b) $\begin{vmatrix} a & b & c \\ 2d & 2e & 2f \\ g & h & i \end{vmatrix}$
c) $\begin{vmatrix} a & b & c \\ a + d & b + e & c + f \\ g & h & i \end{vmatrix}$  d) $\begin{vmatrix} a & d & g \\ b & e & h \\ c & f & i \end{vmatrix}$
e) $\begin{vmatrix} a & 3b & c \\ d & 3e & f \\ g & 3h & i \end{vmatrix}$  f) $\begin{vmatrix} a & b & c + a \\ d & e & f + d \\ g & h & i + g \end{vmatrix}$
g) $\begin{vmatrix} 2a & 3b & c + a \\ 2d & 3e & f + d \\ 2g & 3h & i + g \end{vmatrix}$  h) $\begin{vmatrix} 2a & 2b & 2c \\ 3d & 3e & 3f \\ g + 4a & h + 4b & i + 4c \end{vmatrix}$

**6.5.** Legyen $\mathbf{A}$ és $\mathbf{B}$ két $3 \times 3$-as mátrix, és legyen $\det(\mathbf{A}) = 5$, $\det(\mathbf{B}) = 4$. Számítsuk ki a következő determinánsok értékét!
a) $\det(\mathbf{A}^2)$  b) $\det(2\mathbf{A})$  c) $\det((2\mathbf{A})^2)$
d) $\det(\mathbf{A}^{-1})$  e) $\det(5\mathbf{A}^{-1})$  f) $\det((5\mathbf{A})^{-1})$
g) $\det(\mathbf{AB}^{-1})$  h) $\det(\mathbf{A}^{\mathsf{T}}\mathbf{B})$  i) $|\mathbf{A}^{-1}|\,|\mathbf{B}^{-1}\mathbf{A}|\,|\mathbf{B}|$

**6.6.** Csak sorcserék segítségével hozzuk egyszerűbb alakra (például háromszögalakra) az alábbi determinánsokat, és így számítsuk ki értéküket:
a) $\begin{vmatrix} 0 & 2 & 0 \\ 0 & 0 & 3 \\ 1 & 0 & 0 \end{vmatrix}$  b) $\begin{vmatrix} 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 2 & 0 & 0 \\ 0 & 0 & 0 & 0 & 3 \\ 0 & 0 & 0 & 4 & 0 \\ 5 & 0 & 0 & 0 & 0 \end{vmatrix}$
c) $\begin{vmatrix} 0 & 1 \\ 1 & 0 \end{vmatrix}$, $\begin{vmatrix} 0 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 0 \end{vmatrix}$, $\begin{vmatrix} 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \\ 1 & 0 & 0 & 0 \end{vmatrix}$
d) $\begin{vmatrix} 0 & 0 & 0 & 1 \\ 0 & 0 & 2 & 5 \\ 0 & 3 & 6 & 8 \\ 4 & 7 & 9 & 2 \end{vmatrix}$  e) $\begin{vmatrix} 1 & 1 & 1 & 1 \\ 2 & 2 & 2 & 0 \\ 3 & 3 & 0 & 0 \\ 4 & 0 & 0 & 0 \end{vmatrix}$
f) $\begin{vmatrix} 0 & 0 & \ldots & 0 & 1 \\ 0 & 0 & \ldots & 1 & 0 \\ \vdots & & & \vdots & \vdots \\ 0 & 1 & \ldots & 0 & 0 \\ 1 & 0 & \ldots & 0 & 0 \end{vmatrix}$  g) $\begin{vmatrix} 0 & 0 & \ldots & 0 & 1 & 1 \\ 0 & 0 & \ldots & 1 & 1 & 1 \\ \vdots & & & & & \vdots \\ 0 & 1 & \ldots & 1 & 1 & 1 \\ 1 & 1 & \ldots & 1 & 1 & 1 \end{vmatrix}$

**6.7.** Számítsuk ki elemi sorműveletekkel az alábbi determinánsokat!
a) $\begin{vmatrix} 1 & 2 & 3 \\ 1 & 3 & 5 \\ 1 & 3 & 6 \end{vmatrix}$  b) $\begin{vmatrix} 1 & 1 & 1 & 1 \\ 1 & 2 & 3 & 4 \\ 1 & 3 & 5 & 7 \\ 1 & 4 & 7 & 10 \end{vmatrix}$
c) $\begin{vmatrix} 3 & 8 & 6 & 3 \\ 1 & 3 & 0 & 1 \\ 1 & 1 & -1 & 2 \\ 1 & 5 & 1 & 5 \end{vmatrix}$  d) $\begin{vmatrix} 1 & 2 & 3 & 4 & 5 \\ 2 & 0 & 0 & 0 & 4 \\ 3 & 0 & 1 & 0 & 3 \\ 4 & 0 & 0 & 0 & 2 \\ 5 & 4 & 3 & 2 & 1 \end{vmatrix}$

**6.8. Mellékátlóban egyesek.** Hány sor áll inverzióban abban a mátrixban, melynek mellékátlójában egyesek, egyébként nullák állnak, és mennyi ennek determinánsa?

**6.9.** Számítsuk ki elemi sorműveletekkel az alábbi $n$-edrendű determinánsokat!
a) $\begin{vmatrix} 1 + x_1y_1 & 1 + x_1y_2 & \ldots & 1 + x_1y_n \\ 1 + x_2y_1 & 1 + x_2y_2 & \ldots & 1 + x_2y_n \\ \vdots & \vdots & & \vdots \\ 1 + x_ny_1 & 1 + x_ny_2 & \ldots & 1 + x_ny_n \end{vmatrix}$
b) $\begin{vmatrix} 1 & a & a^2 & \ldots & a^{n-1} \\ a^{n-1} & 1 & a & \ldots & a^{n-2} \\ a^{n-2} & a^{n-1} & 1 & \ldots & a^{n-3} \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ a & a^2 & a^3 & \ldots & 1 \end{vmatrix}$
c) $\begin{vmatrix} a & b & b & \ldots & b \\ b & a & b & \ldots & b \\ b & b & a & \ldots & b \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ b & b & b & \ldots & a \end{vmatrix}$  d) $\begin{vmatrix} a & b & b & \ldots & b \\ c & a & b & \ldots & b \\ c & c & a & \ldots & b \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ c & c & c & \ldots & a \end{vmatrix}$

**6.10.** Számítsuk ki a Petersen-gráf szomszédsági mátrixának determinánsát!

**6.11.** Írjuk fel a determináns definícióját oly módon, hogy det egy $n$-változós, $n$-dimenziós vektorokon értelmezett skalár értékű függvény legyen.

**6.12.** Adjunk új bizonyítást a determinánsok szorzásszabályára azt igazolva, hogy az $\mathbf{A} \mapsto \det(\mathbf{AB})/\det(\mathbf{B})$ leképezés eleget tesz a determináns definíciójában kirótt feltételeknek.

**6.13.** Bizonyítsuk be az LU-felbontás fölhasználásával a transzponált determinánsára vonatkozó 6.12. állítást!

**6.14.** Fejezzük ki az elemi mátrixokra használt jelöléseket használva ($\mathbf{E}_{S_i + cS_j}$, $\mathbf{E}_{S_i \leftrightarrow S_j}$, $\mathbf{E}_{cS_i}$) azok determinánsát!

**6.15.** Számítsuk ki a 6.7. példa Pascal-háromszöget tartalmazó
$$\begin{vmatrix} 1 & 1 & 1 & 1 \\ 1 & 2 & 3 & 4 \\ 1 & 3 & 6 & 10 \\ 1 & 4 & 10 & 20 \end{vmatrix}$$
determinánsának értékét úgy, hogy az első oszlop főátló alatti elemeinek kinullázásához először vonjuk ki az utolsó előtti sort az utolsóból, majd a második sort a harmadikból, végül az elsőt a másodikból, és kövessük e módszert a többi főátló alatti elemre is.

**6.16.** Számítsuk ki az
$$\left|\binom{i + j - 2}{j - 1}\right|_{n \times n} = \begin{vmatrix} \binom{0}{0} & \binom{1}{1} & \ldots & \binom{n-1}{n-1} \\ \binom{1}{0} & \binom{2}{1} & \ldots & \binom{n}{n-1} \\ \vdots & \vdots & \ddots & \vdots \\ \binom{n-1}{0} & \binom{n}{1} & \ldots & \binom{2n-2}{n-1} \end{vmatrix}$$
determináns értékét! (Útmutatás: az utolsó sorral kezdve mindegyik sorból vonjuk ki az előzőt!)

**6.17.** Mutassuk meg, hogy egy legalább 3-adrendű determináns értéke 0, ha elemei sorfolytonosan olvasva számtani sorozatot adnak. Például
$$\begin{vmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{vmatrix} = 0.$$

**6.18.** Mutassuk meg, hogy egy legalább 3-adrendű determináns értéke 0, ha minden sora számtani sorozat, például
$$\begin{vmatrix} 1 & 2 & 3 \\ 1 & 4 & 7 \\ 1 & 3 & 5 \end{vmatrix} = 0.$$

**6.19.** Mutassuk meg, hogy ha egy determináns elemei sorfolytonosan olvasva mértani sorozatot alkotnak, akkor értéke 0. Például
$$\begin{vmatrix} \frac{1}{8} & \frac{1}{4} & \frac{1}{2} \\ 1 & 2 & 4 \\ 8 & 16 & 32 \end{vmatrix} = 0.$$

**6.20.** Mutassuk meg, hogy tetszőleges $a$, $b$, $c$ és $d$ valósokra
$$\begin{vmatrix} a^2 & (a+1)^2 & (a+2)^2 & (a+3)^2 \\ b^2 & (b+1)^2 & (b+2)^2 & (b+3)^2 \\ c^2 & (c+1)^2 & (c+2)^2 & (c+3)^2 \\ d^2 & (d+1)^2 & (d+2)^2 & (d+3)^2 \end{vmatrix} = 0.$$

**6.21.** Mutassuk meg, hogy ha $\mathbf{C}$ invertálható, akkor $\det(\mathbf{CAC}^{-1}) = \det(\mathbf{A})$ tetszőleges azonos méretű $\mathbf{A}$ mátrixra fennáll.

**6.22. Vektorok determinánsa másik bázisban.** Igazoljuk, hogy ha $\mathbf{A}_{\mathcal{C} \leftarrow \mathcal{B}}$ az áttérés mátrixa, akkor a $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n$ vektorok $\mathcal{B}$- és $\mathcal{C}$-beli koordinátás alakjaiból képzett $\mathbf{V}_{\mathcal{B}}$ és $\mathbf{V}_{\mathcal{C}}$ mátrixok determinánsára $|\mathbf{V}_{\mathcal{C}}| = |\mathbf{A}_{\mathcal{C} \leftarrow \mathcal{B}}|\,|\mathbf{V}_{\mathcal{B}}|$.

**6.23.** Igazoljuk, hogy páratlan rendű ferdén szimmetrikus mátrix determinánsa 0.

**6.24. Mátrix négyzetének determinánsa.** Igazoljuk, hogy bármely négyzetes $\mathbf{A}$ mátrixra $|\mathbf{A}^2| = |\mathbf{A}\mathbf{A}^{\mathsf{T}}|$.

**6.25.** A determináns négyzetének kiszámításával (6.24. feladat) és a determinánsok szorzástételének alkalmazásával számítsuk ki az alábbi determinánsok értékét:
$$\begin{vmatrix} a & b \\ -b & a \end{vmatrix}, \quad \begin{vmatrix} a & b & c & d \\ -b & a & -d & c \\ -c & d & a & -b \\ -d & -c & b & a \end{vmatrix},$$
$$\begin{vmatrix} a & b & c & d & e & f & g & h \\ b & -a & -d & c & f & -e & h & -g \\ c & d & -a & -b & g & -h & -e & f \\ d & -c & b & -a & h & g & -f & -e \\ e & -f & -g & -h & -a & b & c & d \\ f & e & h & -g & b & -a & d & -c \\ g & -h & e & f & -c & -d & -a & b \\ h & g & -f & e & -d & c & -b & -a \end{vmatrix}.$$

**6.26.** Mutassuk meg, hogy az $(x_1^2 + x_2^2)(y_1^2 + y_2^2)$ szorzat előállítható két szám négyzetének összegeként, azaz
$$(x_1^2 + x_2^2)(y_1^2 + y_2^2) = (z_1^2 + z_2^2),$$
ahol $z_1$ és $z_2$ mindegyike külön az $x_i$ és külön az $y_i$ változóknak is lineáris kifejezése ($i = 1, 2$). (Hasonló összefüggések bizonyíthatóak négy illetve nyolc négyzetszám összegéről is. Például a négy szám négyzetösszegére vonatkozó képlet
$$(x_1^2 + x_2^2 + x_3^2 + x_4^2)(y_1^2 + y_2^2 + y_3^2 + y_4^2) = (z_1^2 + z_2^2 + z_3^2 + z_4^2),$$
ahol $z_i$ az $x_i$ és az $y_i$ ($i = 1, 2, 3, 4$) változókban lineáris. A megoldáshoz használjuk fel az előző feladat állítását.)

**6.27. Téglalap képének területe.** Legyen egy téglalap négy csúcsa $(p, q)$, $(p + x, q)$, $(p, q + y)$, $(p + x, q + y)$, ahol $x, y > 0$. Tehát a téglalap oldalhossza $x$ és $y$, területe $xy$. Mekkora lesz a területe annak a síkidomnak, mely e téglalapból keletkezik az $\left[\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}\right]$ mátrixú lineáris transzformáció hatására.

**6.28. Orientáció.** Azt mondjuk, hogy $\mathbb{R}^n$ két bázisa azonos orientációjú, ha az egyiket a másikba vivő lineáris transzformáció determinánsa pozitív. Mutassuk meg, hogy $\mathbb{R}^n$ bázisain az „azonos orientációjú" reláció ekvivalencia reláció, amely így az összes bázist két osztályba sorolja.

## A determináns mint elemeinek függvénye

> *A determinánst eddig sorvektorainak függvényeként kezeltük, a következőkben elemeinek függvényeként fogjuk. Ehhez két olyan módszerrel fogunk megismerkedni, melyekben a determináns kiszámítását egyszerűbb determinánsok kiszámítására vezetjük vissza.*

Eddig nagyvonalúan bántunk a determináns elemeinek mibenlétével. Annyit feltételeztünk róluk kimondatlanul, hogy azonos algebrai struktúrából valók, és az összeadás, kivonás, szorzás és osztás elvégezhető köztük. Az elemi sorműveletek elvégzéséhez épp e négy műveletre volt szükség. E szakaszban ki fog derülni, hogy a determináns kiszámolható osztás nélkül is. Ennek következménye például, hogy egészelemű mátrix determinánsa egész szám, akkor is, ha számolás közben racionálisokba botlunk.[^9]

[^9]: Általánosan fogalmazva: nem csak testek pl. a valós $\mathbb{R}$, a racionális $\mathbb{Q}$, a komplex $\mathbb{C}$ számtestek vagy a véges $\mathbb{F}_q$ testek elemeiből álló determinánst számolhatunk ki az adott struktúrán belül, hanem pl. az egészek $\mathbb{Z}$ gyűrűjének vagy a polinomok gyűrűjének elemeiből képzett determinánsokat is. További részletekért lásd a függelék A szakaszát.

### Kígyók determinánsa

A $2 \times 2$-es determináns kiszámítására ismerjük azt a formulát, amely a determináns értékét a determináns elemeinek függvényében írja fel: $\det\left[\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}\right] = ad - bc$. Itt tehát csak az összeadásra, kivonásra és a szorzásra van szükség. Hasonló formulát keresünk az $n$-edrendű determinánsokra. Ehhez az ún. *kígyókat* – más néven *transzverzálisokat* – használjuk. A kígyók a diagonális mátrixok sorainak permutációjával származtatott mátrixok, azaz minden $\mathbf{K}$ kígyó felírható $\mathbf{K} = \mathbf{P}\operatorname{diag}(a_1, a_2, \ldots, a_n)$ alakban, ahol $\mathbf{P}$ egy permutáló mátrix. Ezt a *kígyóhoz tartozó permutáló mátrixnak* fogjuk nevezni. Mivel $\mathbf{P}$ determinánsa 1 vagy $-1$, ezért $|\mathbf{K}| = a_1a_2 \ldots a_n$ vagy $|\mathbf{K}| = -a_1a_2 \ldots a_n$.

A determinánsok soronkénti linearitását használva érdekes felbontását kapjuk a determinánsnak. Tekintsük példaként az
$$\begin{vmatrix} a & b & c \\ d & e & f \\ g & h & i \end{vmatrix}$$
determinánst. Első sorvektorának $(a, b, c) = (a, 0, 0) + (0, b, 0) + (0, 0, c)$ felbontását fölhasználva bontsuk fel a determinánst három determináns összegére:
$$\begin{vmatrix} a + 0 & 0 + b + 0 & 0 + 0 + c \\ d & e & f \\ g & h & i \end{vmatrix} = \begin{vmatrix} a & 0 & 0 \\ d & e & f \\ g & h & i \end{vmatrix} + \begin{vmatrix} 0 & b & 0 \\ d & e & f \\ g & h & i \end{vmatrix} + \begin{vmatrix} 0 & 0 & c \\ d & e & f \\ g & h & i \end{vmatrix}$$
Ezután folytassuk e felbontást a második sorvektorral, így már az eredeti determinánst 9 determináns összegére bontottuk. Végül tegyük ugyanezt az utolsó sorral is. Az így kapott 27 determinánst nem írjuk föl, de szemléltetésül egy sematikus ábrán megmutatjuk a felbontás lépéseit (6.7. ábra). Tömör négyzet jelöli azokat a helyeket, ahol megtartjuk a determináns eredeti elemét, üres kör azokat, ahová zérust írunk. A 27 determináns mindegyikének minden sorában egy elem az eredeti determinánsból való, a többi zérus. Közöttük azonban csak 6 kígyó van. A többinek van zérus oszlopa, így azok értéke 0, vagyis az eredeti determinánst 6 kígyó összegére bontottuk (a 0 értékű determinánsokat szürke színnel jeleztük).

Hasonló módon bármely $n$-edrendű determináns fölbomlik $n^n$ olyan determináns összegére, melynek minden sorában egyetlen elem az eredeti determinánsból való, a többi 0, de ezek közül csak azok lesznek kígyók determinánsai, melyek minden oszlopában is van egy elem az eredetiből. (Ezeket nevezzük a mátrixból/determinánsból kiválasztható kígyóknak.) Ezek száma $n!$, mert az első sorból $n$-féleképp választhatunk egy elemet, a második sorból minden esetben már csak $n - 1$-féleképp,$\ldots$, és ez összesen $n(n-1) \ldots 3 \cdot 2 \cdot 1 = n!$ eset. Igaz tehát a következő állítás:

**6.15. állítás (Felbontás kígyók determinánsainak összegére).** *Minden $n$-edrendű determináns fölbomlik az összes belőle kiválasztható kígyó determinánsának összegére. Jelölje $d_{j_1j_2\ldots j_n}$ annak a permutáló mátrixnak a determinánsát, mely az $a_{1j_1}$, $a_{2j_2}, \ldots$, $a_{nj_n}$ elemekből álló kígyóhoz tartozik (ennek értéke 1 vagy $-1$). Ekkor*
$$\det([a_{ij}]) = \sum d_{j_1j_2\ldots j_n}a_{1j_1}a_{2j_2} \ldots a_{nj_n},$$
*ahol az összegzés az $\{1, 2, \ldots, n\}$ halmaz összes lehetséges $\{j_1, j_2, \ldots, j_n\}$ permutációján végigfut.*

> Az $n!$ az $n$ növekedtével rendkívül gyorsan nő (pl. $10! = 3628800$, $20! = 2432902008176640000$), determináns ilyen módon való számítása viszonylag kis rend esetén már számítógéppel sem lehetséges emberi idő alatt. A felbontást a determinánsok tulajdonságainak vizsgálatában használjuk.

> Kivételt csak az $n = 2$ és $n = 3$ eset képez, kézzel való számításban is praktikusak:
> $$\begin{vmatrix} a & b \\ c & d \end{vmatrix} = \begin{vmatrix} a & 0 \\ 0 & d \end{vmatrix} + \begin{vmatrix} 0 & b \\ c & 0 \end{vmatrix} = ad - bc,$$
> mivel a második determináns egyetlen sorcserével hozható diagonális alakra. $n = 3$ esetén – felhasználva a 6.7. ábrát is – kapjuk, hogy
> $$\begin{aligned} \begin{vmatrix} a & b & c \\ d & e & f \\ g & h & i \end{vmatrix} &= \begin{vmatrix} a & 0 & 0 \\ 0 & e & 0 \\ 0 & 0 & i \end{vmatrix} + \begin{vmatrix} a & 0 & 0 \\ 0 & 0 & f \\ 0 & h & 0 \end{vmatrix} + \begin{vmatrix} 0 & b & 0 \\ d & 0 & 0 \\ 0 & 0 & i \end{vmatrix} + \begin{vmatrix} 0 & b & 0 \\ 0 & 0 & f \\ g & 0 & 0 \end{vmatrix} + \begin{vmatrix} 0 & 0 & c \\ d & 0 & 0 \\ 0 & h & 0 \end{vmatrix} + \begin{vmatrix} 0 & 0 & c \\ 0 & e & 0 \\ g & 0 & 0 \end{vmatrix} \\ &= aei - afh - bdi + bfg + cdh - ceg \\ &= aei + bfg + cdh - afh - bdi - ceg. \end{aligned}$$

*6.7. ábra. Egy $3 \times 3$-as determináns felbontása $3^3$ determináns összegére, melyek közül $3! = 6$ darabot kivéve mindegyikben van egy zérusoszlop – ezek sematikus ábráját szürke szín jelöli.*

> E két formula könnyen megjegyezhető egy egyszerű szabállyal, amelyet az $n = 2$ és $n = 3$ esetben *Sarrus-szabálynak* is neveznek: a főátló irányú szorzatok összegéből vonjuk ki a mellékátló irányú szorzatokat. (Hogy mit értsünk főátló és mellékátló irányú szorzaton, a 6.8. és a 6.9. ábrákról megérthető.) Fontos, hogy hasonló szabály $n > 3$ esetén már *nem érvényes* (ld. a 6.33. feladatot)!

A determináns 6.15. tételbeli felbontása a determináns értékét a determináns elemeinek függvényeként állítja elő. Ennek sok szép és fontos következménye van.

*6.8. ábra. Az (a) másod- és a (b) harmadrendű determináns kiszámítása: a főátló irányú szorzatok összegéből vonjuk ki a mellékátló irányú szorzatokat. Harmadrendű esetben kezdetben könnyíthetünk magunkon a determináns első két oszlopának a determináns utáni megismétlésével. (a) $ad - bc$; (b) $aei + bfg + cdh - afh - bdi - ceg$.*

**6.16. következmény (Determinánsfüggvény létezése).** *A determinánsfüggvény létezik, és egyértelmű.*

*Bizonyítás.* Elég megmutatni, hogy a kígyók determinánsainak összegével definiált determinánsfogalom eleget tesz a determináns definíciójában kirótt feltételeknek. Ez azonnal látszik, hisz azokat elég csak kígyókra ellenőrizni. Ezt az Olvasóra hagyjuk. $\square$

Íme további két fontos következménye a kígyókra bontásnak:

> Egy algebrai következmény: a determináns kiszámolásához elég csak az összeadás és szorzás művelete, az osztásra, melyet az elemi sorműveletek során használhatunk, nincs szükség. Eszerint egész számokból álló determináns értéke egész szám.

> Egy függvényanalízis körébe tartozó következmény: a determináns értéke folytonos függvénye elemeinek. Eszerint bármely kis pozitív $\varepsilon$-hoz van olyan $\delta > 0$ szám, hogy ha a determináns bármely eleme legfeljebb $\delta$ értékkel megváltozik, akkor a determináns értéke legfeljebb $\varepsilon$-nyit változik. Sőt, mivel a determináns kifejtésében csak az összeadás és a szorzás művelete szerepel, a determináns differenciálható függvénye elemeinek.

### A determináns definíciója kígyókkal

A determináns definícióját kiterjesztjük a kígyók összegére való bontásra vonatkozó állítást használva. Így a determináns fogalma nem csak algebrai testek, de gyűrűk fölött is értelmezhető (ld. az A fejezetben).

**6.17. definíció (Determináns).** *Legyen $R$ egy tetszőleges egységelemes kommutatív gyűrű és legyen $\mathbf{A} \in R^{n \times n}$. Ekkor $\mathbf{A}$ determinánsán a*
$$\sum_{\sigma \in S_n} (-1)^{I(\sigma)}a_{1,\sigma(1)}a_{2,\sigma(2)} \ldots a_{n,\sigma(n)}$$
*kifejezést értjük, ahol $S_n$ az $\{1, 2, \ldots, n\}$ halmaz összes permutációját jelöli, és egy $\sigma \in S_n$ permutációra $I(\sigma)$ a $\sigma$ inverzióinak számát.*

**6.18. példa (Polinomok determinánsa).** *Határozzuk meg $x^4$ és $x^3$ együtthatóját az alábbi determinánsban!*
$$\begin{vmatrix} 1 & 0 & x & 2 \\ 0 & 1 & x & x \\ x & x & 1 & 0 \\ 1 & x & 2 & 1 \end{vmatrix}$$

*Megoldás.* $x^4$ csak egyetlen kígyóból kapható (a 0-k helyét üresen hagytuk):
$$\begin{vmatrix} {} & {} & x & {} \\ {} & {} & {} & x \\ x & {} & {} & {} \\ {} & x & {} & {} \end{vmatrix}.$$
Az inverziók száma 4, azaz páros, tehát e determináns értéke $x^4$. Két kígyóban szerepel $x^3$:
$$\begin{vmatrix} {} & {} & {} & 2 \\ {} & {} & x & {} \\ x & {} & {} & {} \\ {} & x & {} & {} \end{vmatrix} + \begin{vmatrix} {} & {} & x & {} \\ {} & {} & {} & x \\ {} & x & {} & {} \\ 1 & {} & {} & {} \end{vmatrix}.$$
Az inverziók száma mindkét determinánsban páratlan, tehát ennek értéke $-3x^3$. (Hasonlóképp folytatva kapjuk, hogy a determináns értéke: $x^4 - 3x^3 + x^2 + 4x - 1$.) $\square$

### Előjeles aldetermináns

Ha az első sor elemeit kiemeljük a $3 \times 3$-as determinánst kifejtő képletből, érdekes sejtést fogalmazhatunk meg:
$$\begin{aligned} \begin{vmatrix} a & b & c \\ d & e & f \\ g & h & i \end{vmatrix} &= aei + bfg + cdh - afh - bdi - ceg \\ &= a(ei - fh) - b(fg - di) + c(dh - eg) \\ &= a\begin{vmatrix} e & f \\ h & i \end{vmatrix} - b\begin{vmatrix} d & f \\ g & i \end{vmatrix} + c\begin{vmatrix} d & e \\ g & h \end{vmatrix}. \end{aligned}$$
Mielőtt ezt megtennénk, némi előkészítés következik.

**6.19. definíció (Előjeles aldetermináns).** *Az $n$-edrendű $|\mathbf{A}|$ determináns $i$-edik sorának és $j$-edik oszlopának elhagyásával kapott $(n-1)$-edrendű determináns $(-1)^{i+j}$-szeresét az $|\mathbf{A}|$ determináns $a_{ij}$ eleméhez tartozó előjeles aldeterminánsának nevezzük.*

Az előjeles aldeterminánshoz kiszámítandó előjel a mátrixon sakktáblaszerűen változik, azaz a bal felső sarokban $+$, és két egymás melletti vagy alatti mezőben ellenkező előjelű. Ezt nevezik *sakktáblaszabálynak*.

*6.10. ábra. Sakktáblaszabály: a $(-1)^{i+j}$ előjele a bal felső sarokban, vagyis az első sor első oszlopában $+$, él mentén szomszédos mezőkben pedig ellentétes.*

**6.20. példa (Előjeles aldetermináns).** *Számítsuk ki az*
$$\begin{vmatrix} 1 & 2 & 3 & 4 \\ 4 & 3 & 9 & 1 \\ 2 & 2 & 2 & 2 \\ 0 & 1 & 2 & 0 \end{vmatrix}$$
*determináns második sor harmadik eleméhez tartozó előjeles aldeterminánsát!*

*Megoldás.* A determináns második sorát és harmadik oszlopát kiemeltük
$$\begin{vmatrix} 1 & 2 & 3 & 4 \\ 4 & 3 & 9 & 1 \\ 2 & 2 & 2 & 2 \\ 0 & 1 & 2 & 0 \end{vmatrix}$$
Az ezek elhagyása után megmaradó aldetermináns és $-1$ megfelelő hatványának szorzata, vagyis a kért előjeles aldetermináns
$$(-1)^{2+3}\begin{vmatrix} 1 & 2 & 4 \\ 2 & 2 & 2 \\ 0 & 1 & 0 \end{vmatrix} = -1 \cdot 6 = -6.$$
Tehát a determináns második sor harmadik eleméhez tartozó előjeles aldeterminánsa $-6$. $\square$

**6.21. állítás (Determináns rendjének csökkentése).** *Tegyük fel, hogy az $n$-edrendű $|\mathbf{A}|$ determináns $a_{ij}$ elemének sorában vagy oszlopában minden további elem 0. Jelölje $A_{ij}$ az $a_{ij}$ elemhez tartozó előjeles aldeterminánst. Ekkor*
$$|\mathbf{A}| = a_{ij}A_{ij}.$$

*Bizonyítás.* Legyen az $|\mathbf{A}|$ determináns $i$-edik sorában az $a_{ij}$-n kívül minden elem 0 (hasonlóan tárgyalható, ha a $j$-edik oszlopban vannak nullák). Cseréljük ki a $j$-edik oszlopot a $(j-1)$-edikkel, majd ezt a $(j-2)$-edikkel$\ldots$, addig, míg az $\mathbf{A}_{*j}$ oszlop az első oszlopba nem kerül. Ez $j - 1$ oszlopcserét jelent, azaz a determináns értéke $(-1)^{j-1}$-szeresére változik. Ezután hasonlóképp vigyük az $i$-edik sort szomszédos sorok cseréjével az első sorba. Ehhez $i - 1$ csere szükséges, miközben a determináns értéke $(-1)^{i-1}$-szeresére változik.
$$\begin{vmatrix} a_{11} & a_{12} & \ldots & a_{1j} & \ldots & a_{1n} \\ a_{21} & a_{22} & \ldots & a_{2j} & \ldots & a_{2n} \\ \vdots & \vdots & & \vdots & & \vdots \\ 0 & 0 & \ldots & a_{ij} & \ldots & 0 \\ \vdots & \vdots & & \vdots & & \vdots \\ a_{n1} & a_{n2} & \ldots & a_{nj} & \ldots & a_{nn} \end{vmatrix} = (-1)^{j-1}\begin{vmatrix} a_{1j} & a_{11} & a_{12} & \ldots & a_{1n} \\ a_{2j} & a_{21} & a_{22} & \ldots & a_{2n} \\ \vdots & \vdots & \vdots & & \vdots \\ a_{ij} & 0 & 0 & \ldots & 0 \\ \vdots & \vdots & \vdots & & \vdots \\ a_{nj} & a_{n1} & a_{n2} & \ldots & a_{nn} \end{vmatrix}$$
$$= (-1)^{i-1}(-1)^{j-1}\begin{vmatrix} a_{ij} & 0 & 0 & \ldots & 0 \\ a_{1j} & a_{11} & a_{12} & \ldots & a_{1n} \\ a_{2j} & a_{21} & a_{22} & \ldots & a_{2n} \\ \vdots & \vdots & \vdots & & \vdots \\ a_{nj} & a_{n1} & a_{n2} & \ldots & a_{nn} \end{vmatrix}$$
$$\overset{*}{=} (-1)^{i+j}a_{ij}\begin{vmatrix} 1 & 0 & 0 & \ldots & 0 \\ a_{1j} & a_{11} & a_{12} & \ldots & a_{1n} \\ a_{2j} & a_{21} & a_{22} & \ldots & a_{2n} \\ \vdots & \vdots & \vdots & & \vdots \\ a_{nj} & a_{n1} & a_{n2} & \ldots & a_{nn} \end{vmatrix}$$
$$\overset{**}{=} (-1)^{i+j}a_{ij}\begin{vmatrix} a_{11} & a_{12} & \ldots & a_{1n} \\ a_{21} & a_{22} & \ldots & a_{2n} \\ \vdots & \vdots & & \vdots \\ a_{n1} & a_{n2} & \ldots & a_{nn} \end{vmatrix} = a_{ij}A_{ij}.$$
Az $*$-os egyenlőségnél kihasználtuk, hogy $i + j - 2$ és $i + j$ paritása azonos, tehát $-1$ kitevőjeként is azonos eredményt adnak, továbbá kiemeltük $a_{ij}$-t az első sorból. A $**$-os egyenlőség előtt álló determináns kiszámításához csak a másodiktól lefelé lévő sorokat kell használni, a végeredményt az első oszlop elemei nem befolyásolják, így az első sor és első oszlop elhagyásával kapott determináns értéke ugyanaz. Végül az így kapott determináns az előjellel együtt épp $A_{ij}$, és ezzel bizonyítottuk az állítást. $\square$

**6.22. példa (Determináns rendjének csökkentése).** *A determináns rendjének csökkentésével számítsuk ki az alábbi determináns értékét!*
$$\begin{vmatrix} 1 & 2 & 0 & 3 & 4 \\ 1 & 2 & 0 & 8 & 4 \\ 6 & 0 & 0 & 7 & 0 \\ 8 & 9 & 8 & 7 & 6 \\ 5 & 4 & 0 & 3 & 2 \end{vmatrix}.$$

*Megoldás.* Minden lépésben – esetleg egy apró átalakítás után – találunk egy sort vagy oszlopot, melyben csak egy nemnulla szám áll, így a determináns könnyen számolható:
$$\begin{vmatrix} 1 & 2 & 0 & 3 & 4 \\ 1 & 2 & 0 & 8 & 4 \\ 6 & 0 & 0 & 7 & 0 \\ 8 & 9 & \boxed{8} & 7 & 6 \\ 5 & 4 & 0 & 3 & 2 \end{vmatrix} = (-1)^{4+3} \cdot 8\begin{vmatrix} 1 & 2 & 3 & 4 \\ 1 & 2 & 8 & 4 \\ 6 & 0 & 7 & 0 \\ 5 & 4 & 3 & 2 \end{vmatrix}$$
$$\overset{(S_2 - S_1)}{=} (-8)\begin{vmatrix} 1 & 2 & 3 & 4 \\ 0 & 0 & \boxed{5} & 0 \\ 6 & 0 & 7 & 0 \\ 5 & 4 & 3 & 2 \end{vmatrix}$$
$$= (-8) \cdot (-1)^{2+3} \cdot 5\begin{vmatrix} 1 & 2 & 4 \\ \boxed{6} & 0 & 0 \\ 5 & 4 & 2 \end{vmatrix}$$
$$= (-8) \cdot (-5) \cdot (-1)^{2+1} \cdot 6\begin{vmatrix} 2 & 4 \\ 4 & 2 \end{vmatrix}$$
$$= (-8) \cdot (-5) \cdot (-6) \cdot (-12)$$
$$= 2880. \qquad \square$$

### Determináns kifejtése

Ritkán adódik, hogy a determináns rendje az előző (6.21.) állítás segítségével csökkenthető, viszont fölhasználásával a determinánsok egy gyönyörű kifejtési tételét kapjuk.

> E kifejtési tételt egyes könyvek *Laplace-féle kifejtési tételnek* nevezik, míg más könyvek csak ennek egy – a feladatok közt megtalálható – általánosítását hívják így, sok könyv pedig e tételbeli összefüggéssel definiálja a determinánst.

**6.23. tétel (Determinánsok kifejtési tétele).** *Egy determináns értéke megkapható úgy, hogy egy tetszőleges sorának vagy oszlopának minden elemét beszorozzuk a hozzá tartozó előjeles aldeterminánssal, és e szorzatokat összeadjuk. Képletben, az $n$-edrendű $|\mathbf{A}|$ determináns értéke $i$-edik sora szerint kifejtve*
$$|\mathbf{A}| = \sum_{k=1}^{n} a_{ik}A_{ik},$$
*és $j$-edik oszlopa szerint kifejtve*
$$|\mathbf{A}| = \sum_{k=1}^{n} a_{kj}A_{kj}.$$

*Bizonyítás.* Hasonlóan a korábbiakban látottakhoz, az $i$-edik sorvektor felbontásával a determinánst $n$ olyan determináns összegére bontjuk, amelyek $i$-edik sorában csak egy elem származik az eredeti determinánsból, a többi 0. Az egyszerűség kedvéért a felbontást csak $n = 3$ és $i = 2$ esetére írjuk fel, de tetszőleges $n$-re ugyanígy megy. Ezután a 6.21. állítást alkalmazzuk mindegyik új determinánsra:
$$\begin{aligned} |\mathbf{A}| &= \begin{vmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & 0 & 0 \\ a_{31} & a_{32} & a_{33} \end{vmatrix} + \begin{vmatrix} a_{11} & a_{12} & a_{13} \\ 0 & a_{22} & 0 \\ a_{31} & a_{32} & a_{33} \end{vmatrix} + \begin{vmatrix} a_{11} & a_{12} & a_{13} \\ 0 & 0 & a_{23} \\ a_{31} & a_{32} & a_{33} \end{vmatrix} \\ &= a_{21}A_{21} + a_{22}A_{22} + a_{23}A_{23} \\ &= \sum_{k=1}^{3} a_{2k}A_{2k}. \end{aligned}$$
A bizonyítás ugyanígy megy az oszlopokra is, amit példaként az $n = 3$, $j = 3$ esettel szemléltetünk:
$$\begin{aligned} |\mathbf{A}| &= \begin{vmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & 0 \\ a_{31} & a_{32} & 0 \end{vmatrix} + \begin{vmatrix} a_{11} & a_{12} & 0 \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & 0 \end{vmatrix} + \begin{vmatrix} a_{11} & a_{12} & 0 \\ a_{21} & a_{22} & 0 \\ a_{31} & a_{32} & a_{33} \end{vmatrix} \\ &= a_{13}A_{13} + a_{23}A_{23} + a_{33}A_{33} \\ &= \sum_{k=1}^{3} a_{k3}A_{k3}. \end{aligned}$$
$\square$

**6.24. példa (Kifejtési tétel).** *Számítsuk ki az alábbi determináns értékét a kifejtési tételt használva!*
$$\begin{vmatrix} 3 & 2 & 1 & 2 \\ 2 & 1 & 0 & 1 \\ 1 & 1 & 0 & 1 \\ 0 & 1 & 1 & 2 \end{vmatrix}.$$

*Megoldás.* Érdemes e determinánst a harmadik oszlopa szerint kifejteni, mert ott két 0 is van, így a velük megszorzott aldeterminánsokat le sem kell írni.
$$\begin{vmatrix} 3 & 2 & 1 & 2 \\ 2 & 1 & 0 & 1 \\ 1 & 1 & 0 & 1 \\ 0 & 1 & 1 & 2 \end{vmatrix} = 1 \cdot \begin{vmatrix} 2 & 1 & 1 \\ 1 & 1 & 1 \\ 0 & 1 & 2 \end{vmatrix} - 1 \cdot \begin{vmatrix} 3 & 2 & 2 \\ 2 & 1 & 1 \\ 1 & 1 & 1 \end{vmatrix} = 1 - 0 = 1. \qquad \square$$

### Vandermonde-determináns

Bemutatunk egy fontos determinánst. Számtalan alkalmazása van, melyek egyike a polinominterpoláció.

**6.25. példa (Interpoláció másodfokú polinomokra).** *Legyen $x$, $y$ és $z$ három különböző valós, $a$, $b$ és $c$ három tetszőleges valós. Mutassuk meg, hogy egyetlen olyan legföljebb másodfokú $f$ polinom létezik, melyre $f(x) = a$, $f(y) = b$ és $f(z) = c$.*

*Megoldás.* Legyen $f : x \mapsto p + qx + rx^2$, ahol $p$, $q$ és $r$ a polinom ismeretlen együtthatói. Az $f(x) = a$, $f(y) = b$ és $f(z) = c$ egyenlőségek a következő egyenletrendszerre vezetnek:
$$\begin{bmatrix} 1 & x & x^2 \\ 1 & y & y^2 \\ 1 & z & z^2 \end{bmatrix}\begin{bmatrix} p \\ q \\ r \end{bmatrix} = \begin{bmatrix} a \\ b \\ c \end{bmatrix}$$
Ez az egyenletrendszer a 6.5. tétel szerint pontosan akkor oldható meg egyértelműen, ha az együtthatómátrix determinánsa nem 0. Oszlopműveletekkel kezdjük az átalakítást:
$$\begin{aligned} \begin{vmatrix} 1 & x & x^2 \\ 1 & y & y^2 \\ 1 & z & z^2 \end{vmatrix} &\overset{O_3 - xO_2}{=} \begin{vmatrix} 1 & x & 0 \\ 1 & y & y^2 - xy \\ 1 & z & z^2 - xz \end{vmatrix} \overset{O_2 - xO_1}{=} \begin{vmatrix} 1 & 0 & 0 \\ 1 & y - x & y^2 - xy \\ 1 & z - x & z^2 - xz \end{vmatrix} \\ &= \begin{vmatrix} y - x & y^2 - xy \\ z - x & z^2 - xz \end{vmatrix} = (y - x)\begin{vmatrix} 1 & y \\ z - x & z^2 - xz \end{vmatrix} = (y - x)(z - x)\begin{vmatrix} 1 & y \\ 1 & z \end{vmatrix} \\ &= (y - x)(z - x)(z - y) \end{aligned}$$
Mivel $x$, $y$ és $z$ három különböző valós, ezért a determináns értéke nem 0, tehát az egyenletrendszer egyértelműen megoldható, vagyis egyetlen olyan polinom létezik, mely a feltételeket teljesíti. $\square$

E probléma, és a benne szereplő determináns általánosítása a következő definícióhoz vezet:

**6.26. definíció (Vandermonde-determináns).** *Az $x_1, x_2, \ldots x_n$ számokhoz tartozó Vandermonde-determinánson a*
$$V_n(x_1, x_2, \ldots, x_n) = \begin{vmatrix} 1 & 1 & \ldots & 1 \\ x_1 & x_2 & \ldots & x_n \\ \vdots & \vdots & & \vdots \\ x_1^{n-1} & x_2^{n-1} & \ldots & x_n^{n-1} \end{vmatrix} \tag{6.1}$$
*determinánst vagy ennek*
$$\begin{vmatrix} 1 & x_1 & x_1^2 & \ldots & x_1^{n-1} \\ 1 & x_2 & x_2^2 & \ldots & x_2^{n-1} \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & x_n & x_n^2 & \ldots & x_n^{n-1} \end{vmatrix}$$
*transzponáltját értjük. A hozzá tartozó mátrixot Vandermonde-mátrixnak nevezzük.*

Mivel egy determináns értéke megegyezik transzponáltjának értékével, ezért a definícióbeli két determináns értéke is azonos, így mindegy melyik alakot használjuk.

**6.27. tétel (Vandermonde-determináns értéke).** *Az $x_1, x_2, \ldots x_n$ ($n > 1$) számokhoz tartozó Vandermonde-determináns értéke megegyezik az olyan $(x_j - x_i)$ alakú különbségek szorzatával, ahol $i < j$, azaz*
$$V_n(x_1, x_2, \ldots, x_n) = \prod_{i < j}(x_j - x_i).$$

*Bizonyítás.* A determináns utolsó oszlopával kezdve minden oszlopból vonjuk ki az előző oszlop $x_1$-szeresét.
$$\begin{aligned} V_n(x_1, x_2, \ldots, x_n) &= \begin{vmatrix} 1 & x_1 & x_1^2 & \ldots & x_1^{n-1} \\ 1 & x_2 & x_2^2 & \ldots & x_2^{n-1} \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & x_n & x_n^2 & \ldots & x_n^{n-1} \end{vmatrix} \\ &= \begin{vmatrix} 1 & 0 & 0 & \ldots & 0 \\ 1 & x_2 - x_1 & x_2^2 - x_1x_2 & \ldots & x_2^{n-1} - x_1x_2^{n-2} \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & x_n - x_1 & x_n^2 - x_1x_n & \ldots & x_n^{n-1} - x_1x_n^{n-2} \end{vmatrix} \end{aligned}$$
ami az első sora szerinti kifejtés, majd minden sorból kiemelve az első oszlopbeli elemet, a következő alakra vezet:
$$\begin{aligned} &= \begin{vmatrix} x_2 - x_1 & x_2^2 - x_1x_2 & \ldots & x_2^{n-1} - x_1x_2^{n-2} \\ \vdots & \vdots & & \vdots \\ x_n - x_1 & x_n^2 - x_1x_n & \ldots & x_n^{n-1} - x_1x_n^{n-2} \end{vmatrix} \\ &= (x_2 - x_1)(x_3 - x_1) \ldots (x_n - x_1)\begin{vmatrix} 1 & x_2 & x_2^2 & \ldots & x_2^{n-2} \\ 1 & x_3 & x_3^2 & \ldots & x_3^{n-2} \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & x_n & x_n^2 & \ldots & x_n^{n-2} \end{vmatrix} \\ &= (x_2 - x_1)(x_3 - x_1) \ldots (x_n - x_1)V_{n-1}(x_2, \ldots, x_n) \\ &= V_{n-1}(x_2, \ldots, x_n)\prod_{1 < j}(x_j - x_1). \end{aligned}$$
Eredményül egy rekurzív képletet kaptunk, melyet önmagába helyettesítve, és a $V_2(x_{n-1}, x_n) = x_n - x_{n-1}$ képletet is fölhasználva a tételbeli összefüggésre jutunk. $\square$

### Cramer-szabály és a mátrix inverze

Eddig akár az $\mathbf{Ax} = \mathbf{b}$ egyenletrendszer megoldására, akár az $\mathbf{A}$ mátrix inverzének kiszámítására olyan módszert használtunk, mely az elemi sorműveletek használatával csak egy algoritmust ad a számításokra, de nem adja meg a kapcsolatot (képletet) az adatok és a kiszámítandók közt. E paragrafusban ezt pótoljuk!


Jelölje $\mathbf{A}_{i,\mathbf{b}}$ azt a mátrixot, melyet akkor kapunk, ha az $\mathbf{A}$ mátrix $i$-edik oszlopának helyére a $\mathbf{b}$ vektort írjuk. Kifejtve

$$\mathbf{A}_{i,\mathbf{b}} = [\mathbf{a}_{*1}\ \ldots\ \mathbf{a}_{*,i-1}\ \mathbf{b}\ \mathbf{a}_{*,i+1}\ \ldots\ \mathbf{a}_{*n}].$$

E jelöléssel $\mathbf{I}_{i,\mathbf{x}}$ mátrixon az $[\mathbf{e}_{*1}\ \ldots\ \mathbf{e}_{*,i-1}\ \mathbf{x}\ \mathbf{e}_{*,i+1}\ \ldots\ \mathbf{e}_{*n}]$ mátrixot értjük.

**6.28. tétel (Cramer-szabály).** *Legyen $\mathbf{A}$ egy $n \times n$-es mátrix. Az $\mathbf{Ax} = \mathbf{b}$ egyenletrendszer pontosan akkor oldható meg egyértelműen, ha $\det\mathbf{A} \neq 0$. Ekkor a megoldás:*

$$x_i = \frac{\det\mathbf{A}_{i,\mathbf{b}}}{\det\mathbf{A}}, \quad (i = 1,2,\ldots,n)$$

> *Gabriel Cramer (1704–1752) genfi születésű svájci matematikus, akinek az algebrai görbékről szóló „Introduction à l'analyse des lignes courbes algébriques" című, 1750-ben publikált munkájában szerepelt a ma Cramer-szabály néven ismert tétel. A szabályt korábban már mások is ismerték.*

**Bizonyítás.** Az állítás első felét már bizonyítottuk a 6.5. tételben. Ebből felhasználjuk, hogy mivel az egyenletrendszer megoldható, $\det\mathbf{A} \neq 0$. Kihasználva, hogy $\mathbf{Ax} = \mathbf{b}$, továbbá hogy $\mathbf{Ae}_i = \mathbf{a}_{*i}$, kapjuk, hogy

$$\begin{aligned}
\mathbf{AI}_{i,\mathbf{x}} &= \mathbf{A}[\mathbf{e}_{*1}\ \ldots\ \mathbf{e}_{*,i-1}\ \mathbf{x}\ \mathbf{e}_{*,i+1}\ \ldots\ \mathbf{e}_{*n}] \\
&= [\mathbf{Ae}_{*1}\ \ldots\ \mathbf{Ae}_{*,i-1}\ \mathbf{Ax}\ \mathbf{Ae}_{*,i+1}\ \ldots\ \mathbf{Ae}_{*n}] \\
&= [\mathbf{a}_{*1}\ \ldots\ \mathbf{a}_{*,i-1}\ \mathbf{b}\ \mathbf{a}_{*,i+1}\ \ldots\ \mathbf{a}_{*n}] \\
&= \mathbf{A}_{i,\mathbf{b}}
\end{aligned}$$

Mivel az $\mathbf{I}_{i,\mathbf{x}}$ mátrix $i$-edik sorának és oszlopának elhagyása után egy identikus mátrix marad, ezért az $i$-edik sora szerint kifejtve

$$\det\mathbf{I}_{i,\mathbf{x}} = \begin{vmatrix}
1 & 0 & \ldots & x_1 & \ldots & 0 \\
0 & 1 & \ldots & x_2 & \ldots & 0 \\
\vdots & \vdots & \ddots & \vdots & & \vdots \\
0 & 0 & \ldots & x_i & \ldots & 0 \\
\vdots & \vdots & & \vdots & \ddots & \vdots \\
0 & 0 & \ldots & x_n & \ldots & 1
\end{vmatrix} = (-1)^{i+i}x_i = x_i.$$

Így a determinánsok szorzási szabályát is használva $\det(\mathbf{AI}_{i,\mathbf{x}}) = \det\mathbf{A}_{i,\mathbf{b}}$, amiből $x_i \det\mathbf{A} = \det\mathbf{A}_{i,\mathbf{b}}$, azaz $x_i = \det\mathbf{A}_{i,\mathbf{b}} / \det\mathbf{A}$. $\square$

**6.29. példa (Cramer-szabály).** *Oldjuk meg az*

$$\begin{alignedat}{9}
2x &{}+{}& 5y &{}={}& 4 \\
5x &{}+{}& 3y &{}={}& 6
\end{alignedat}$$

*egyenletrendszert a Cramer-szabállyal!*

**Megoldás.** A kiszámolandó determinánsok a $\mathbf{b} = \left[\begin{smallmatrix}4\\6\end{smallmatrix}\right]$ jelöléssel:

$$|\mathbf{A}| = \begin{vmatrix} 2 & 5 \\ 5 & 3 \end{vmatrix} = -19, \quad |\mathbf{A}_{1,\mathbf{b}}| = \begin{vmatrix} 4 & 5 \\ 6 & 3 \end{vmatrix} = -18, \quad |\mathbf{A}_{2,\mathbf{b}}| = \begin{vmatrix} 2 & 4 \\ 5 & 6 \end{vmatrix} = -8.$$

Innen $x = \frac{-18}{-19} = \frac{18}{19}$, $y = \frac{-8}{-19} = \frac{8}{19}$. $\square$

Ha egyenletrendszert meg tudunk oldani, akkor szimultán egyenletrendszert is, és így pl. az $\mathbf{AX} = \mathbf{I}$ megoldásával a mátrix inverzét is ki tudjuk számítani. Az $x_{ij}$ elem kiszámításához az $\mathbf{Ax}_{*j} = \mathbf{e}_j$ egyenletrendszert kell megoldani. A megoldás $i$-edik koordinátája az $x_{ij}$ elem. A Cramer-szabály szerint

$$\mathbf{x}_{ij} = \frac{\det\mathbf{A}_{i,\mathbf{e}_j}}{\det\mathbf{A}}$$

Mivel az $\mathbf{A}_{i,\mathbf{e}_j}$ mátrix $i$-edik oszlopában csak egy elem nem 0, a kifejtési tétel szerint

$$\det\mathbf{A}_{i,\mathbf{e}_j} = \begin{vmatrix}
a_{11} & a_{12} & \ldots & 0 & \ldots & a_{1n} \\
a_{21} & a_{22} & \ldots & 0 & \ldots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots & & \vdots \\
a_{j1} & a_{j2} & \ldots & 1 & \ldots & a_{jn} \\
\vdots & \vdots & \ddots & \vdots & & \vdots \\
a_{n1} & a_{n2} & \ldots & 0 & \ldots & a_{nn}
\end{vmatrix} = A_{ji},$$

vagyis e determináns megegyezik az $\mathbf{A}$ egy előjeles aldeterminánsával, tehát

$$\mathbf{x}_{ij} = \frac{\det\mathbf{A}_{i,\mathbf{e}_j}}{\det\mathbf{A}} = \frac{\det A_{ji}}{\det\mathbf{A}}.$$

Mint látjuk, az $\mathbf{X} = \mathbf{A}^{-1}$ előállításához az $\mathbf{A}$ előjeles aldeterminánsai mátrixának transzponáltjára van szükség. E mátrixot az $\mathbf{A}$ *klasszikus adjungáltjának* nevezzük és $\operatorname{adj}(\mathbf{A})$-val jelöljük. A klasszikus jelzőre azért van szükség, mert az adjungált szót komplex elemű mátrix konjugált transzponáltjára is használjuk, és ez félreértésekhez vezethet. Képletben tehát

$$\operatorname{adj}\mathbf{A} = [A_{ij}]^{\mathsf{T}} = [A_{ji}]. \tag{6.2}$$

Így a következő tételt kapjuk:

**6.30. tétel (Mátrix inverzének elemei).** *Tegyük fel, hogy $\mathbf{A}$ egy invertálható mátrix. Ekkor inverzének $ij$ indexű eleme az $a_{ji}$ elemhez tartozó előjeles aldetermináns és az $\mathbf{A}$ mátrix determinánsának hányadosa, azaz*

$$[\mathbf{A}^{-1}]_{ij} = \frac{A_{ji}}{\det\mathbf{A}}.$$

*Így az inverz mátrix az*

$$\mathbf{A}^{-1} = \frac{1}{\det\mathbf{A}}[A_{ij}]^{\mathsf{T}} = \frac{1}{\det\mathbf{A}}\operatorname{adj}\mathbf{A}. \tag{6.3}$$

*alakba írható.*

> Könnyen ellenőrizhető, hogy az $\mathbf{A} = \left[\begin{smallmatrix}a & b\\c & d\end{smallmatrix}\right]$ mátrix klasszikus adjungáltja

$$\begin{bmatrix} d & -c \\ -b & a \end{bmatrix}^{\mathsf{T}} = \begin{bmatrix} d & -b \\ -c & a \end{bmatrix},$$

így inverze

$$\mathbf{A}^{-1} = \begin{bmatrix} a & b \\ c & d \end{bmatrix}^{-1} = \frac{1}{\det\mathbf{A}}\operatorname{adj}\mathbf{A} = \frac{1}{ad-bc}\begin{bmatrix} d & -b \\ -c & a \end{bmatrix}.$$

> A mátrix inverzének e kifejezése azt mutatja, hogy az inverz mátrix minden eleme folytonos függvénye a mátrix minden elemének minden olyan helyen, ahol az inverz létezik, egy ilyen helyen és annak valamely környezetében a determináns nem 0.

> Az előző megjegyzésből az is következik, hogy egy $n$-ismeretlenes $n$ egyenletből álló egyenletrendszer megoldásvektorának minden koordinátája folytonos függvénye az egyenletrendszer együtthatóinak és a jobb oldalán álló vektor koordinátáinak, hisz a megoldás az inverzzel való szorzással megkapható.

> Egészelemű mátrix inverze pontosan akkor egészelemű, ha determinánsa 1 vagy $-1$. Ez abból adódik, hogy $\det(\mathbf{A})\det(\mathbf{A}^{-1}) = \det\mathbf{I} = 1$, tehát ha $|\det\mathbf{A}| \neq 1$, akkor $\det(\mathbf{A}^{-1})$ nem egész szám, tehát $\mathbf{A}^{-1}$ nem lehet egészelemű, ha pedig $|\det\mathbf{A}| = 1$, akkor a (6.3) képlet szerint $\mathbf{A}^{-1}$ minden eleme egész szám.

> A tételbeli képlet könnyen kiterjeszthető szinguláris mátrixokra is, vagyis amikor a determináns 0, ugyanis

$$\mathbf{A}\operatorname{adj}\mathbf{A} = \det(\mathbf{A})\mathbf{I} \tag{6.4}$$

> minden négyzetes mátrixra fennáll (ld. a 6.46. feladatot).

**6.31. példa (Mátrix inverze).** *Számítsuk ki a szemléltetés céljából csupa különböző elemet tartalmazó*

$$\mathbf{A} = \begin{bmatrix} 0 & 1 & 2 \\ 3 & 5 & 6 \\ 4 & 7 & 9 \end{bmatrix}$$

*mátrix inverzét!*

**Megoldás.** Az $\operatorname{adj}\mathbf{A}$ determinánst olyan alakba írjuk föl, ahonnan látszik minden elem kiszámításának módja. Szürke színnel szedjük az elhagyandó elemeket:

$$\begin{aligned}
\operatorname{adj}\mathbf{A} &= \begin{bmatrix}
+\begin{vmatrix} 5 & 6 \\ 7 & 9 \end{vmatrix} & -\begin{vmatrix} 3 & 6 \\ 4 & 9 \end{vmatrix} & +\begin{vmatrix} 3 & 5 \\ 4 & 7 \end{vmatrix} \\[2mm]
-\begin{vmatrix} 1 & 2 \\ 7 & 9 \end{vmatrix} & +\begin{vmatrix} 0 & 2 \\ 4 & 9 \end{vmatrix} & -\begin{vmatrix} 0 & 1 \\ 4 & 7 \end{vmatrix} \\[2mm]
+\begin{vmatrix} 1 & 2 \\ 5 & 6 \end{vmatrix} & -\begin{vmatrix} 0 & 2 \\ 3 & 6 \end{vmatrix} & +\begin{vmatrix} 0 & 1 \\ 3 & 5 \end{vmatrix}
\end{bmatrix}^{\mathsf{T}} \\[2mm]
&= \begin{bmatrix} 3 & -3 & 1 \\ 5 & -8 & 4 \\ -4 & 6 & -3 \end{bmatrix}^{\mathsf{T}}
\end{aligned}$$

Mivel $\det\mathbf{A} = -1$, ezért

$$\mathbf{A}^{-1} = \frac{1}{\det\mathbf{A}}\operatorname{adj}\mathbf{A} = -\begin{bmatrix} 3 & -3 & 1 \\ 5 & -8 & 4 \\ -4 & 6 & -3 \end{bmatrix}^{\mathsf{T}} = \begin{bmatrix} -3 & -5 & 4 \\ 3 & 8 & -6 \\ -1 & -4 & 3 \end{bmatrix} \qquad \square$$

Már ezekből az egyszerű példákból is látszik, hogy mátrix invertálása e módszerrel igen műveletigényes. Valóban, gyakorlati számításokhoz nem használjuk, elméleti okfejtésekben vesszük nagy hasznát.

### Blokkmátrixok determinánsa

Az $\mathbf{M} = \left[\begin{smallmatrix}\mathbf{A} & \mathbf{B}\\\mathbf{C} & \mathbf{D}\end{smallmatrix}\right]$ mátrix általában még négyzetes részmátrixok esetén sem számítható az $\mathbf{AD} - \mathbf{BC}$ képlettel (ld. a **??** feladatban)! Először egy speciális, de fontos esettel kezdjük.

**6.32. tétel (Determinánsok szorzata blokkmátrixban).** *Legyenek $\mathbf{A}$ és $\mathbf{D}$ négyzetes mátrixok. Ekkor*

$$\begin{vmatrix} \mathbf{A} & \mathbf{B} \\ \mathbf{O} & \mathbf{D} \end{vmatrix} = \begin{vmatrix} \mathbf{A} & \mathbf{O} \\ \mathbf{C} & \mathbf{D} \end{vmatrix} = |\mathbf{A}||\mathbf{D}|.$$

**Bizonyítás.** Megmutatjuk, hogy minden olyan kígyó, melynek nincs eleme a $\mathbf{O}$-mátrixból, egy $\mathbf{A}$-beli és egy $\mathbf{D}$-beli kígyó szorzata. Ehhez elég megmutatni, hogy ha egy kígyónak van eleme a $\mathbf{B}$, illetve a $\mathbf{C}$ mátrixból, akkor az $\mathbf{O}$-ból is. Valóban, ha pl. $\mathbf{B}$ egy eleme benne van egy kígyóban, akkor oszlopában nincs elem $\mathbf{D}$-ben, így $\mathbf{D}$-ben marad egy sor is üresen, amelyet csak egy $\mathbf{O}$-beli elem foghat le. Ellenőrizni kell még, hogy az $\mathbf{A}$- és $\mathbf{D}$-beli kígyók előjeleinek szorzata megegyezik-e az egyesítésükkel kapott kígyó előjelével. Ez nyilván igaz, hisz egy $\mathbf{A}$-t és egy $\mathbf{D}$-t metsző sor nem lehet inverzióban, így az egyesített kígyó inverzióinak száma megegyezik a két kígyó inverzióinak összegével, az előjelet pedig a $-1$-nek az inverziók számára emelt hatványa adja. $\square$

**6.33. tétel ($2 \times 2$-es blokkmátrix determinánsa).** *Legyen*

$$\mathbf{M} = \begin{bmatrix} \mathbf{A} & \mathbf{B} \\ \mathbf{C} & \mathbf{D} \end{bmatrix},$$

*ahol $\mathbf{A}$ és $\mathbf{D}$ négyzetes mátrixok.*

1. *Ha $|\mathbf{A}| \neq 0$, akkor $|\mathbf{M}| = |\mathbf{A}||\mathbf{D} - \mathbf{CA}^{-1}\mathbf{B}|$.*
2. *Ha $|\mathbf{D}| \neq 0$, akkor $|\mathbf{M}| = |\mathbf{A} - \mathbf{BD}^{-1}\mathbf{C}||\mathbf{D}|$.*

**Bizonyítás.** Ha $\mathbf{A}$ invertálható, akkor $\mathbf{M}$ alábbi alsó és felső blokkháromszögmátrix szorzatára való bontása segít:

$$\begin{aligned}
\mathbf{M} = \begin{bmatrix} \mathbf{A} & \mathbf{B} \\ \mathbf{C} & \mathbf{D} \end{bmatrix} &= \begin{bmatrix} \mathbf{A} & \mathbf{O} \\ \mathbf{C} & \mathbf{D} - \mathbf{CA}^{-1}\mathbf{B} \end{bmatrix}\begin{bmatrix} \mathbf{I} & \mathbf{A}^{-1}\mathbf{B} \\ \mathbf{O} & \mathbf{I} \end{bmatrix} \\
&= \begin{bmatrix} \mathbf{I} & \mathbf{O} \\ \mathbf{CA}^{-1} & \mathbf{I} \end{bmatrix}\begin{bmatrix} \mathbf{A} & \mathbf{O} \\ \mathbf{O} & \mathbf{D} - \mathbf{CA}^{-1}\mathbf{B} \end{bmatrix}\begin{bmatrix} \mathbf{I} & \mathbf{A}^{-1}\mathbf{B} \\ \mathbf{O} & \mathbf{I} \end{bmatrix}
\end{aligned}$$

Az utóbbi három mátrix közül a szélsők determinánsa 1, a középső pedig a bizonyítandó kifejezés. Az

$$\mathbf{M} = \begin{bmatrix} \mathbf{I} & \mathbf{BD}^{-1} \\ \mathbf{O} & \mathbf{I} \end{bmatrix}\begin{bmatrix} \mathbf{A} - \mathbf{BD}^{-1}\mathbf{C} & \mathbf{O} \\ \mathbf{O} & \mathbf{D} \end{bmatrix}\begin{bmatrix} \mathbf{I} & \mathbf{O} \\ \mathbf{D}^{-1}\mathbf{C} & \mathbf{I} \end{bmatrix}$$

felbontás bizonyítja a második összefüggést. $\square$

## Feladatok

**6.29.** Melyek igazak az alábbi állítások közül? (Az $\mathbf{A}$ itt mindig négyzetes mátrixot jelöl.)

1. A determináns folytonos függvénye minden elemének.
2. A determináns differenciálható függvénye minden elemének.
3. Ha egy determináns minden eleme racionális szám, akkor értéke is racionális.
4. Ha egy determináns minden sorában és minden oszlopában pontosan egy elem nem 0, akkor a determináns értéke nem 0.
5. Ha egy mátrix két kígyó összege, akkor determinánsa is két kígyó determinánsának összege.
6. Ha $i + j$ páratlan szám, akkor az előjeles $A_{ij}$ aldetermináns negatív.
7. Ha egy determináns minden eleme pozitív, akkor értéke nem lehet negatív.
8. Mátrix inverze folytonos függvénye minden elemének.

### Felbontás kígyók determinánsainak összegére

**6.30.** Válasszuk ki az alábbi determinánsokból az összes nemnulla determinánsú kígyót, és ezek segítségével számítsuk ki a determináns értékét!

a)
$$\begin{vmatrix} 0 & 1 & 0 \\ 2 & 3 & 4 \\ 5 & 0 & 6 \end{vmatrix}$$

b)
$$\begin{vmatrix} 1 & 0 & 0 & 2 \\ 0 & 1 & 2 & 0 \\ 0 & 2 & 1 & 0 \\ 2 & 0 & 0 & 1 \end{vmatrix}$$

c)
$$\begin{vmatrix} 1 & 0 & 2 & 0 & 0 \\ 0 & 2 & 0 & 0 & 1 \\ 0 & 1 & 0 & 2 & 0 \\ 2 & 0 & 0 & 1 & 0 \\ 0 & 0 & 1 & 0 & 2 \end{vmatrix}$$

**6.31.** Anélkül, hogy kiszámolnánk az értékét, mutassuk meg, hogy az alábbi determináns osztható 30-cal:

$$\begin{vmatrix} 24 & 40 & 68 \\ 27 & 15 & 31 \\ 51 & 55 & 53 \end{vmatrix}$$

**6.32.** Az alábbi – lottótippekből álló – determináns elemeinek csak a paritását vizsgálva minden számolás nélkül igazoljuk, hogy

$$\begin{vmatrix} 12 & 25 & 28 & 44 & 56 \\ 21 & 34 & 54 & 68 & 80 \\ 10 & 40 & 52 & 69 & 72 \\ 24 & 36 & 53 & 56 & 84 \\ 18 & 24 & 28 & 58 & 87 \end{vmatrix} \neq 0.$$

**6.33.** A 4-edrendű determinánsok $4! = 24$ kígyó determinánsának összegére bonthatók. Soroljuk fel közülük azt a 12 darabot, melyet elemei szorzata után $-1$-gyel kell szorozni! (A Sarrus-szabály 4-edrendű determinánsra csak 8 kígyóból állna, ezért nem használható!)

### Kifejtési tétel

**6.34.** Tudjuk, hogy 504, 747 és 855 egyaránt oszthatók 9-cel. Ezt fölhasználva, a determináns értékének kiszámítása nélkül mutassuk meg, hogy az alábbi determináns osztható 9-cel:

$$\begin{vmatrix} 5 & 0 & 4 \\ 7 & 4 & 7 \\ 8 & 5 & 5 \end{vmatrix}.$$

**6.35.** Konstruáljunk olyan nemnulla értékű determinánst, melynek van olyan eleme, amelyet tetszőlegesen változtatva a determináns értéke nem változik.

**6.36.\* Laplace-féle kifejtési tétel általánosítása** Legyen $\mathbf{A} \in \mathbb{R}^{n \times n}$, $I = \{i_1, i_2, \ldots, i_k\}$ és $J = \{j_1, j_2, \ldots, j_k\}$ az $N = \{1, 2, \ldots, n\}$ halmaz $k$-elemű részhalmazai és legyen $\bar{I} = N \setminus I$, illetve $\bar{J} = N \setminus J$. Jelölje $A_{I,J}$ az $I$-be eső indexű sorok és a $J$-be eső indexű oszlopok kereszteződésében lévő elemek determinánsát. Ekkor

$$\begin{aligned}
\det\mathbf{A} &= \sum_I (-1)^{\sum I + \sum J} A_{I,J} A_{\bar{I},\bar{J}} \\
&= \sum_I (-1)^{\sum I + \sum J} A_{I,J} A_{\bar{I},\bar{J}},
\end{aligned}$$

ahol $\sum I = i_1 + i_2 + \ldots + i_k$.

**6.37.** Számítsuk ki az alábbi determinánst az első és harmadik sor, majd a második és negyedik oszlop szerint a Laplace-féle kifejtési tétel általánosítása segítségével.

$$\mathbf{A} = \begin{bmatrix} 1 & 0 & 3 & 4 \\ 2 & 3 & 4 & 0 \\ 0 & 1 & 2 & 3 \\ 1 & 0 & 2 & 0 \end{bmatrix}$$

### Blokkdeterminánsok

**6.38.** Számítsuk ki az alábbi determinánsok értékét kihasználva blokkstruktúrájukat!

a)
$$\begin{vmatrix} 1 & 2 & 3 & 4 & 5 \\ 5 & 4 & 3 & 2 & 1 \\ 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 2 & 2 & 0 \\ 0 & 0 & 3 & 3 & 3 \end{vmatrix}$$

b)
$$\begin{vmatrix} 1 & 2 & 3 & 4 & 5 \\ 0 & 4 & 0 & 0 & 0 \\ 0 & 3 & 3 & 0 & 0 \\ 0 & 2 & 2 & 2 & 0 \\ 0 & 1 & 1 & 1 & 1 \end{vmatrix}$$

### Speciális mátrixok determinánsa

**6.39.** Számítsuk ki az alábbi determinánsok értékét!

a)
$$\begin{vmatrix} 1 & 1 & 1 & 1 \\ 2 & -1 & -2 & 1 \\ 4 & 1 & 4 & 1 \\ 8 & -1 & -8 & 1 \end{vmatrix}$$

b)
$$\begin{vmatrix} 1 & -3 & 9 & -27 & 81 \\ 1 & 2 & 4 & 8 & 16 \\ 1 & 1 & 1 & 1 & 1 \\ 1 & -2 & 4 & -8 & 16 \\ 1 & -1 & 1 & -1 & 1 \end{vmatrix}$$

c)
$$\begin{vmatrix} 1 & a & a^2 & a^3 \\ 1 & b & b^2 & b^3 \\ 1 & c & c^2 & c^3 \\ 1 & d+e & d^2+e^2 & d^3+e^3 \end{vmatrix}$$

**6.40.** Bizonyítsuk be, hogy

$$\begin{aligned}
D &= \begin{vmatrix} p^2 & p & 1 & qrs \\ q^2 & q & 1 & prs \\ r^2 & r & 1 & pqs \\ s^2 & s & 1 & pqr \end{vmatrix} \\
&= (p-q)(p-r)(p-s)(q-r)(q-s)(r-s).
\end{aligned}$$

**6.41.** Igazoljuk, hogy az $a_1 = 1$, $a_2 = 2$, $a_n = a_{n-1} + a_{n-2}$ képletekkel definiált Fibonacci-sorozat $n$-edik eleme egyenlő az alábbi $n \times n$-es tridiagonális determinánssal:

$$a_n = \begin{vmatrix}
1 & -1 & 0 & 0 & \ldots & 0 & 0 \\
1 & 1 & -1 & 0 & \ldots & 0 & 0 \\
0 & 1 & 1 & -1 & \ldots & 0 & 0 \\
0 & 0 & 1 & 1 & \ldots & 0 & 0 \\
\vdots & \vdots & & & \ddots & \vdots & \vdots \\
0 & 0 & 0 & 0 & \ldots & 1 & -1 \\
0 & 0 & 0 & 0 & \ldots & 1 & 1
\end{vmatrix}$$

**6.42.** Legyen

$$P_n = \begin{vmatrix}
a_n & -1 & 0 & 0 & \ldots & 0 & 0 \\
1 & a_{n-1} & -1 & 0 & \ldots & 0 & 0 \\
0 & 1 & a_{n-2} & -1 & \ldots & 0 & 0 \\
0 & 0 & 1 & 1 & \ldots & 0 & 0 \\
\vdots & \vdots & & & \ddots & \vdots & \vdots \\
0 & 0 & 0 & 0 & \ldots & a_2 & -1 \\
0 & 0 & 0 & 0 & \ldots & 1 & a_1
\end{vmatrix}$$

Mutassuk meg, hogy

$$\frac{P_k}{P_{k-1}} = a_k + \cfrac{1}{a_{k-1} + \cfrac{1}{a_{k-2} + \cfrac{1}{\ddots + \cfrac{1}{a_2 + \cfrac{1}{a_1}}}}}.$$

### Vegyes feladatok

**6.43.** Elérhető-e egyetlen elem megváltoztatásával, hogy egy tetszőleges $n \times n$-es nem szinguláris mátrix determinánsa 0-vá váljon?

**6.44. Ferde kifejtés** Vegyük egy determináns egy sorának elemeit, és szorozzuk meg mindegyiket egy másik sor azonos oszlopbeli eleméhez tartozó előjeles aldeterminánssal, majd képezzük ezek összegét. Ez mindig 0. Hasonló állítás igaz a determináns minden oszloppárára is. Tehát az $i$-edik és $u$-adik sora ($i \neq u$) és a $j$-edik és $v$-edik oszlopra ($j \neq v$):

$$\sum_{k=1}^n a_{ik}A_{uk} = 0, \qquad \sum_{k=1}^n a_{kj}A_{kv} = 0.$$

**6.45.** Foglaljuk egyetlen állításba a kifejtési és a ferde kifejtési tételeket!

**6.46. Mátrix inverze a kifejtési tételekkel** A kifejtési és a ferde kifejtési (ld. az előző és a 6.44. feladatokat) segítségével adjunk új bizonyítást a mátrix inverzére vonatkozó (6.3) formulára!

**6.47.** Legyen $x_0$, $x_1$, $x_2$, $\ldots$, $x_n$ $n + 1$ darab különböző valós, $y_0$, $y_1$, $\ldots$, $y_n$ ugyanannyi tetszőleges valós. Mutassuk meg, hogy egyetlen olyan legfeljebb $n$-edfokú $p$ polinom van, melyre $p(x_i) = y_i$ minden $i = 0, \ldots, n$ esetén.

### Cramer-szabály és mátrix inverze

**6.48.** Oldjuk meg Cramer-szabállyal az alábbi egyenletrendszereket!

a)
$$\begin{alignedat}{9}
x &{}+{}& y && && {}={}& 1 \\
x &{}-{}& 2y && && {}={}& 4
\end{alignedat}$$

b)
$$\begin{alignedat}{9}
2x &{}-{}& y &{}-{}& z && {}={}& 2 \\
3x &{}+{}& 4y &{}-{}& 2z && {}={}& 11 \\
3x &{}-{}& 2y &{}+{}& 4z && {}={}& 11
\end{alignedat}$$

c)
$$\begin{alignedat}{9}
x &{}+{}& 2y &{}+{}& 4z && {}={}& 31 \\
5x &{}+{}& y &{}+{}& 2z && {}={}& 29 \\
3x &{}-{}& y &{}+{}& z && {}={}& 10
\end{alignedat}$$

d)
$$\begin{alignedat}{9}
x &{}+{}& y && && && {}={}& 1 \\
x &{}+{}& 2y &{}+{}& z && && {}={}& 2 \\
&& y &{}+{}& 2z &{}+{}& w & {}={}& 3 \\
&& && z &{}+{}& 2w & {}={}& 4
\end{alignedat}$$

**6.49.** Határozzuk meg a megadott mátrixok inverzének megadott indexű elemét!

a)
$$\begin{bmatrix} 1 & 4 & 7 \\ 2 & 4 & 6 \\ 3 & 2 & 3 \end{bmatrix}, \ a_{23} = ?$$

b)
$$\begin{bmatrix} 1 & 2 & 5 & 7 \\ 1 & 3 & 6 & 6 \\ 0 & 0 & 1 & 4 \\ 0 & 0 & 0 & 1 \end{bmatrix} a_{24} = ?$$

**6.50.** Határozzuk meg a megadott mátrixok inverzét a klasszikus adjungált kiszámolásával:

a)
$$\begin{bmatrix} 3 & 1 & 4 \\ -7 & 2 & 7 \\ 2 & 1 & 4 \end{bmatrix}$$

b)
$$\begin{bmatrix} 1 & 2 & 3 \\ 2 & 0 & 2 \\ 3 & 2 & 1 \end{bmatrix}$$

c)
$$\begin{bmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 3 \\ 0 & 0 & 1 & 3 \\ 0 & 0 & 0 & 1 \end{bmatrix}$$

d)
$$\begin{bmatrix} 0 & 2 & 0 & 0 \\ 2 & 0 & 0 & 2 \\ 0 & 2 & 0 & 2 \\ 2 & 0 & 2 & 0 \end{bmatrix}$$

e)
$$\begin{bmatrix} a & 0 & 0 \\ 0 & b & 0 \\ 0 & 0 & c \end{bmatrix} \ (abc \neq 0)$$

f)
$$\begin{bmatrix} 1+\mathrm{i} & \mathrm{i} \\ \mathrm{i} & \mathrm{i} \end{bmatrix}$$

g)
$$\begin{bmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 2 \\ 0 & 0 & 3 & 0 \\ 4 & 0 & 0 & 0 \end{bmatrix}$$

h)
$$\begin{bmatrix} 1 & 2 & 3 & 4 \\ 0 & 1 & 2 & 3 \\ 0 & 0 & 1 & 2 \\ 0 & 0 & 0 & 1 \end{bmatrix}$$

**6.51.** Igazoljuk, hogy tetszőleges négyzetes mátrixra $\mathbf{A}\operatorname{adj}(\mathbf{A}) = \det(\mathbf{A})\mathbf{I}$.

### Véges testek fölötti mátrixok determinánsa

**6.52.** A determináns kiszámításának megismert technikái véges testek fölött is működnek. Számítsuk ki az alábbi – a megadott test fölött értelmezett – mátrixok determinánsát!

a)
$$\begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 0 \\ 1 & 1 & 1 \end{bmatrix}, \mathbb{F}_2, \mathbb{F}_3, \mathbb{F}_5$$

b)
$$\begin{bmatrix} 3 & 2 & 3 \\ 5 & 7 & 6 \\ 2 & 7 & 2 \end{bmatrix}, \mathbb{F}_{11}$$

**6.53.\* Véletlen bitmátrix determinánsa** Számítsuk ki $\mathbb{F}_2$ fölötti véletlen mátrixok determinánsát! Egy $\mathbb{F}_2^{5\times 5}$-beli mátrix determinánsa mekkora valószínűséggel 0? Kísérletezzünk számítógéppel, majd válaszoljuk meg a kérdést pontosan.

### Projekt: a vektori szorzás általánosítása

**6.54.** Bizonyított tény, hogy nem lehet olyan bináris vektorműveletet definiálni az $n$-dimenziós tér vektorain ($n > 3$), mely eredményül ugyanannak a térnek egy vektorát adja és rendelkezik a vektori szorzás műveleti tulajdonságaival. E feladatsorban egy másik irányú általánosítást dolgozunk fel, mely nem a bináris műveleti tulajdonságokat, hanem az eredménynek a vektorokra való merőlegességét tartja meg.

a) Fogalmazzuk meg, hogy mit kapunk eredményül, ha a vektori szorzásra vonatkozó formális

$$\mathbf{a} \times \mathbf{b} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \end{vmatrix} = \begin{vmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ \mathbf{i} & \mathbf{j} & \mathbf{k} \end{vmatrix} = \begin{vmatrix} a_1 & b_1 & \mathbf{i} \\ a_2 & b_2 & \mathbf{j} \\ a_3 & b_3 & \mathbf{k} \end{vmatrix}$$

összefüggést $2 \times 2$-es vagy $4 \times 4$-es formális determinánsokra írjuk föl, vagyis mit ad eredményül az

$$\begin{vmatrix} a_1 & a_2 \\ \mathbf{i} & \mathbf{j} \end{vmatrix} \quad \text{és az} \quad \begin{vmatrix} a_1 & a_2 & a_3 & a_4 \\ b_1 & b_2 & b_3 & b_4 \\ c_1 & c_2 & c_3 & c_4 \\ \mathbf{e}_1 & \mathbf{e}_2 & \mathbf{e}_3 & \mathbf{e}_4 \end{vmatrix}$$

kifejezés?

b) Igazoljuk, hogy az $n$-dimenziós

$$\begin{aligned}
\mathbf{a}_1 &= (a_{11}, a_{12}, \ldots, a_{1n}), \\
\mathbf{a}_2 &= (a_{21}, a_{22}, \ldots, a_{2n}), \\
&\vdots \\
\mathbf{a}_{n-1} &= (a_{n-1,1}, a_{n-1,2}, \ldots, a_{n-1,n})
\end{aligned}$$

vektorok által kifeszített $n - 1$-dimenziós paralelepipedon térfogata megegyezik az

$$\begin{vmatrix}
a_{11} & a_{12} & \ldots & a_{1n} \\
\vdots & & & \vdots \\
a_{n-1,1} & a_{n-1,2} & \ldots & a_{n-1,n} \\
\mathbf{e}_1 & \mathbf{e}_2 & \ldots & \mathbf{e}_n
\end{vmatrix}$$

vektor abszolút értékével.

c) Ha a fentiek alapján általánosított képlettel $n - 1$ darab $n$-dimenziós vektorhoz egy $n$-ediket rendelünk, akkor mit mondhatunk az így kapott $n$ vektor körüljárásáról?

**6.55.** Határozzuk meg azt a vektort, mely merőleges az $(1,1,1,1)$, $(1,2,2,2)$, $(1,2,3,3)$ vektorokra, hossza megegyezik a három vektor által kifeszített paralelepipedon térfogatával, és e három vektor mellé negyediknek véve velük jobbrendszert alkot.

## Megoldások

**6.1.** 1. Hamis. 2. Igaz. 3. Hamis. 4. Hamis. Az $|\mathbf{A}| \neq 0$ azzal ekvivalens, hogy az $\mathbf{Ax} = \mathbf{b}$ egyenletrendszer nem oldható meg egyértelműen, vagyis vagy nem oldható meg, vagy több megoldása is van. 5. Hamis.

**6.2.**

a) $-2$.

b) 0, mert van 0-sora.

c) 0, mert van két azonos sora.

d) 0, mert a második sor az első konstansszorosa.

e) 1, mert háromszögmátrix determinánsa a főátlóbeli elemek szorzata.

f) 6, mert háromszögmátrix determinánsa a főátlóbeli elemek szorzata.

g) 0, mert van két azonos oszlopa.

**6.3.**

a) a második sor az első $-1$-szerese.

b) a harmadik sor egyenlő az első kettő összegével.

c) a harmadik sor egyenlő az első kettő összegével.

d) a második sor az első és a harmadik számtani közepe (másként: a harmadik sorból kivonva a másodikat, majd a másodikból az elsőt, mindkétszer az $(1,1,1)$ vektort kapjuk, azaz így van két azonos sor).

e) a második sor az első és a harmadik számtani közepe.

f) a három sorvektor összege a zérusvektor.

g) $\sin(\xi + \delta) = \sin\xi\cos\delta + \cos\xi\sin\delta$, így a harmadik oszlop az első és a második oszlop lineáris kombinációja, vagyis az oszlopvektorok lineárisan összefüggőek, tehát a determináns értéke 0.

h) Az első és második oszlop összege a harmadik oszlop (ill. az első és a második sor különbsége a harmadik sor), tehát az oszlopvektorok (ill. sorvektorok) lineárisan összefüggőek.

**6.5.** a) 25, b) 40, c) 1600, d) 1/5, e) 25, f) 1/625, g) 5/4, h) 20, i) 1.

**6.6.**

a)
$$\begin{vmatrix} 0 & 2 & 0 \\ 0 & 0 & 3 \\ 1 & 0 & 0 \end{vmatrix} = -\begin{vmatrix} 0 & 2 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 3 \end{vmatrix} = \begin{vmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{vmatrix} = 6$$

b) Az 1. és 2., azután az 1. és 3., végül az 1. és 5. sorokat felcserélve:

$$\begin{vmatrix} 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 2 & 0 & 0 \\ 0 & 0 & 0 & 0 & 3 \\ 0 & 0 & 0 & 4 & 0 \\ 5 & 0 & 0 & 0 & 0 \end{vmatrix} = -\begin{vmatrix} 0 & 0 & 2 & 0 & 0 \\ 1 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 3 \\ 0 & 0 & 0 & 4 & 0 \\ 5 & 0 & 0 & 0 & 0 \end{vmatrix} =$$

$$\begin{vmatrix} 0 & 0 & 0 & 0 & 3 \\ 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 2 & 0 & 0 \\ 0 & 0 & 0 & 4 & 0 \\ 5 & 0 & 0 & 0 & 0 \end{vmatrix} = -\begin{vmatrix} 5 & 0 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 2 & 0 & 0 \\ 0 & 0 & 0 & 4 & 0 \\ 0 & 0 & 0 & 0 & 3 \end{vmatrix} = -120.$$

c) $-1, -1, 1$.

d) 24.

e) 24.

f) Az első sort cseréljük fel az utolsóval, a másodikat az utolsó előttivel, $\ldots$, így $\lfloor \frac{n}{2}\rfloor$ sorcserét hajtottunk végre, tehát a determináns értéke $(-1)^{\lfloor n/2\rfloor}$ (itt $\lfloor . \rfloor$ az egészrész-függvényt jelöli) valamilyen $k$ természetes számra. Más alakban kapjuk meg az eredményt, ha csak szomszédos sorokat cserélünk: először az első sort visszük (szomszédos sorok cseréjével) az utolsóba, majd az eredeti determináns második sorát az utolsó előttibe, $\ldots$, azaz az alábbi sorpárok cseréjét hajtjuk végre:

$$(1,2),\ (2,3),\ (3,4),\ldots,\ (n-1,n),$$
$$(1,2),\ (2,3),\ldots,\ (n-2,n-1),$$
$$\ldots$$
$$(1,2),\ (2,3),$$
$$(1,2).$$

Ez összesen $(n-1) + (n-2) + \cdots + 2 + 1 = \frac{n(n-1)}{2}$ sorcsere. Minden sorcserével $(-1)$-szeresére változik a determináns értéke, így a végeredmény $(-1)^{n(n-1)/2}$. Természetesen e hatvány értéke is akkor 1, ha $n = 4k$ vagy $4k + 1$, és akkor $-1$, ha $n = 4k + 2$ vagy $4k + 3$. (Ugyanilyen gondolatmenettel kimutatható, hogy ha egy determináns mellékátlója felett csupa 0 áll, akkor a determináns értéke a mellékátlóbeli elemek szorzatának $(-1)^{\lfloor n/2\rfloor}$-szerese vagy más alakban $(-1)^{n(n-1)/2}$-szerese.)

g) ld. az előző pontot.

**6.7.**

a) Az első sort kivonjuk a másodikból és a harmadikból, majd a másodikat a harmadikból:

$$\begin{vmatrix} 1 & 2 & 3 \\ 1 & 3 & 5 \\ 1 & 3 & 6 \end{vmatrix} = \begin{vmatrix} 1 & 2 & 3 \\ 0 & 1 & 2 \\ 0 & 1 & 3 \end{vmatrix} = \begin{vmatrix} 1 & 2 & 3 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{vmatrix} = 1.$$

b) Az első sort kivonva a többi sorból, majd a második sor kétszeresét kivonva a harmadikból, kapjuk, hogy

$$\begin{vmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 3 \\ 0 & 2 & 4 & 6 \\ 0 & 3 & 6 & 9 \end{vmatrix} = \begin{vmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 3 \\ 0 & 0 & 0 & 0 \\ 0 & 3 & 6 & 9 \end{vmatrix} = 0.$$

c)
$$\begin{aligned}
&\begin{vmatrix} 3 & 8 & 6 & 3 \\ 1 & 2 & 0 & 1 \\ 1 & 1 & -1 & 2 \\ 2 & 5 & 1 & 5 \end{vmatrix} = -\begin{vmatrix} 1 & 2 & 0 & 1 \\ 3 & 8 & 6 & 3 \\ 1 & 1 & -1 & 2 \\ 2 & 5 & 1 & 5 \end{vmatrix} = \\
&-\begin{vmatrix} 1 & 2 & 0 & 1 \\ 0 & 2 & 6 & 0 \\ 0 & -1 & -1 & 1 \\ 0 & 1 & 1 & 3 \end{vmatrix} = -2\begin{vmatrix} 1 & 2 & 0 & 1 \\ 0 & 1 & 3 & 0 \\ 0 & -1 & -1 & 1 \\ 0 & 1 & 1 & 3 \end{vmatrix} = \\
&-2\begin{vmatrix} 1 & 2 & 0 & 1 \\ 0 & 1 & 3 & 0 \\ 0 & 0 & 2 & 1 \\ 0 & -2 & 3 & 0 \end{vmatrix} = -2\begin{vmatrix} 1 & 2 & 0 & 1 \\ 0 & 1 & 3 & 0 \\ 0 & 0 & 2 & 1 \\ 0 & 0 & 0 & 4 \end{vmatrix} = -16.
\end{aligned}$$

Részletezzük a megoldás lépéseit:

1. lépés: Cseréljük ki az első és második sort, hogy az első sor első eleme 1 legyen, s így ne kelljen törtekkel számolni. A determináns értéke $(-1)$-szeresére változik.

2. lépés: Az első sor $(-3)$-, $(-1)$- ill. $(-2)$-szeresét adjuk a második, harmadik ill. negyedik sorhoz.

3. lépés: Hogy a második sor második eleme 1 legyen, emeljünk ki 2-t a második sorból.

4. lépés: A második sort ill. $(-1)$-szeresét adjuk a harmadik ill. negyedik sorhoz.

5. lépés: Adjuk a harmadik sora a negyedikhez. A determináns értéke $-16$.

d) 144.

**6.8.** E mátrixban bármely két sor inverzióban áll egymással, így ha a sorok száma $n$, a sorpároké $n(n-1)/2$. Eszerint a mátrix determinánsa $(-1)^{n(n-1)/2}$. A $\lfloor \frac{n}{2}\rfloor$ sorcserével is megkapható e mátrixból, így determinánsát $(-1)^{\lfloor \frac{n}{2}\rfloor}$ alakban is ki lehet fejezni, ld. még a 6.6. feladatban).

**6.9.**

a) $n = 1$ esetén $1 + x_1y_1$, $n = 2$ esetén $x_1y_1 + x_2y_2 - x_1y_2 - x_2y_1$ a determináns értéke. Ha $n \geq 3$, akkor a determináns értéke 0. Ezt úgy bizonyítjuk, hogy előszór a determinánst két determináns összegére bontjuk, majd mindkettőről belátjuk, hogy értéke 0. Az első determináns csupa 1-esből álló sorát kivonjuk az összes többi sorból, az így kapott determináns értéke pedig valóban 0, hisz ha $x_2 = 0$, akkor a második sor csupa 0-ból áll, ha pedig $x_2 \neq 0$, akkor a második sorának $x_3/x_2$-szerese egyenlő a harmadik sorral. A második determináns értéke is 0, hiszen ha $x_1 = 0$, akkor az első sor csupa 0-ból áll, ha pedig $x_1 \neq 0$, akkor az első sor $x_i/x_1$-szeresét kivonva az $i$-edik sorból egy olyan determinánst kapunk, amelyben a második sortól kezdve minden sor 1-esekből áll, tehát a determinánsnak van két azonos sora.

$$\begin{aligned}
&\begin{vmatrix}
1 & 1 & \ldots & 1 \\
1 + x_2y_1 & 1 + x_2y_2 & \ldots & 1 + x_2y_n \\
\vdots & \vdots & \ddots & \vdots \\
1 + x_ny_1 & 1 + x_ny_2 & \ldots & 1 + x_ny_n
\end{vmatrix} \\
&+ \begin{vmatrix}
x_1y_1 & x_1y_2 & \ldots & x_1y_n \\
1 + x_2y_1 & 1 + x_2y_2 & \ldots & 1 + x_2y_n \\
\vdots & \vdots & \ddots & \vdots \\
1 + x_ny_1 & 1 + x_ny_2 & \ldots & 1 + x_ny_n
\end{vmatrix} \\
&= \begin{vmatrix}
1 & 1 & \ldots & 1 \\
x_2y_1 & x_2y_2 & \ldots & x_2y_n \\
\vdots & \vdots & \ddots & \vdots \\
x_ny_1 & x_ny_2 & \ldots & x_ny_n
\end{vmatrix} \\
&+ \begin{vmatrix}
x_1y_1 & x_1y_2 & \ldots & x_1y_n \\
1 & 1 & \ldots & 1 \\
\vdots & \vdots & \ddots & \vdots \\
1 & 1 & \ldots & 1
\end{vmatrix} \\
&= 0.
\end{aligned}$$

b) $(1 - a^n)^{n-1}$. Vonjuk ki az első sor $a^{n-1}$-szeresét a második sorból, $a^{n-2}$-szeresét a harmadik sorból, $\ldots$, $a$-szorosát az utolsó sorból: így a főátló alatt csak nullák lesznek.

c) $(a + (n-1)b)(a-b)^{n-1}$. Első megoldás: adjunk minden sort az elsőhöz, emeljük ki a közös $a + (n-1)b$ értéket, majd e sor $b$-szeresét vonjuk ki minden sorból. Másik megoldás: az utolsó sorral kezdve mindegyik sorból vonjuk ki a fölötte lévőt, majd jobbról kezdve mindegyik oszlopot adjuk a megelőzőhöz.

**6.10.** Az eredmény 48. Megoldás Sage-ben:

```
g = graphs.PetersenGraph()
G = matrix(g)
G.det()
```

**6.13.** Az $\mathbf{A}$ előáll $\mathbf{PLU}$ alakban, ahol $\mathbf{P}$ permutáló mátrix, $\mathbf{L}$ alsó, $\mathbf{U}$ felső háromszögmátrix. Az $\mathbf{L}$ és az $\mathbf{U}$ háromszögmátrixok, így determinánsa megegyezik transzponáltjuk determinánsával, hisz a főátlóbeli elemek helyben maradnak a transzponálás során. A $\mathbf{P}$ permutáló mátrix determinánsa 1 vagy $-1$, transzponáltja pedig megegyezik inverzével, így $\det(\mathbf{I}) = \det(\mathbf{PP}^{\mathsf{T}}) = \det(\mathbf{P})\det(\mathbf{P}^{\mathsf{T}}) = 1$, azaz $\mathbf{P}$ és $\mathbf{P}^{-1}$ egyszerre 1 vagy $-1$, tehát megegyeznek. Végül $\det(\mathbf{A}) = \det(\mathbf{PLU}) = \det(\mathbf{P})\det(\mathbf{L})\det(\mathbf{U})$, és $\det(\mathbf{A}^{\mathsf{T}}) = \det((\mathbf{PLU})^{\mathsf{T}}) = \det(\mathbf{U}^{\mathsf{T}}\mathbf{L}^{\mathsf{T}}\mathbf{P}^{\mathsf{T}}) = \det(\mathbf{U})\det(\mathbf{L})\det(\mathbf{P})$ összevetése bizonyítja az állítást.

**6.14.** $\det(\mathbf{E}_{S_i + cS_j}) = 1$, $\det(\mathbf{E}_{S_i \leftrightarrow S_j}) = -1$, $\det(\mathbf{E}_{cS_i}) = c$.

**6.15.**

$$\begin{aligned}
&\begin{vmatrix} 1 & 1 & 1 & 1 \\ 1 & 2 & 3 & 4 \\ 1 & 3 & 6 & 10 \\ 1 & 4 & 10 & 20 \end{vmatrix} \overset{S_4 - S_3}{=} \begin{vmatrix} 1 & 1 & 1 & 1 \\ 1 & 2 & 3 & 4 \\ 1 & 3 & 6 & 10 \\ 0 & 1 & 4 & 10 \end{vmatrix} \\
&\overset{S_3 - S_2}{=} \begin{vmatrix} 1 & 1 & 1 & 1 \\ 1 & 2 & 3 & 4 \\ 0 & 1 & 3 & 6 \\ 0 & 1 & 4 & 10 \end{vmatrix} \overset{S_2 - S_1}{=} \begin{vmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 3 \\ 0 & 1 & 3 & 6 \\ 0 & 1 & 4 & 10 \end{vmatrix} \\
&\overset{\substack{S_4 - S_3 \\ S_3 - S_2}}{=} \begin{vmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 3 \\ 0 & 0 & 1 & 3 \\ 0 & 0 & 1 & 4 \end{vmatrix} \overset{S_4 - S_3}{=} \begin{vmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 3 \\ 0 & 0 & 1 & 3 \\ 0 & 0 & 0 & 1 \end{vmatrix} = 1.
\end{aligned}$$

Ld. még a 6.16. feladatot!

**6.16.** Felhasználva, hogy $\binom{n}{k} - \binom{n-1}{k} = \binom{n-1}{k-1}$, elvégezve az ajánlott sor-, majd oszlopműveleteket, majd azt megismételve az egyre kisebb bal alsó részdeterminánssal kapjuk, hogy

$$\begin{aligned}
D &= \begin{vmatrix}
1 & 0 & 0 & \ldots & 0 \\
1 & \binom{1}{0} & \binom{2}{0} & \ldots & \binom{n-1}{0} \\
1 & \binom{1}{1} & \binom{2}{1} & \ldots & \binom{n}{1} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
1 & \binom{n-1}{n-2} & \binom{n}{n-2} & \ldots & \binom{2n-3}{n-2}
\end{vmatrix} \\
&= \begin{vmatrix}
1 & 0 & 0 & \ldots & 0 \\
0 & \binom{0}{0} & \binom{1}{0} & \ldots & \binom{n-2}{0} \\
0 & \binom{1}{1} & \binom{2}{1} & \ldots & \binom{n-1}{1} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & \binom{n-2}{n-2} & \binom{n-1}{n-2} & \ldots & \binom{2n-4}{n-2}
\end{vmatrix} \\
&= \cdots = \begin{vmatrix}
1 & 0 & 0 & \ldots & 0 \\
0 & 1 & 0 & \ldots & 0 \\
0 & 0 & 1 & \ldots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \ldots & \binom{0}{0}
\end{vmatrix} = 1.
\end{aligned}$$

**6.17.** Az első sort kivonva a másodikból és a harmadikból két konstans sort kapunk, melyek egymás konstansszorosai, tehát a determináns értéke 0.

**6.18.** Vonjuk ki az első oszlopot a másodikból és a harmadikból. Az így kapott harmadik oszlop kétszerese a másodiknak, tehát a determináns értéke 0.

**6.20.** Első megoldás: vonjuk ki az első oszlopot a többiből, ezzel eltüntetve azokból a négyzetes tagot, majd vonjuk a második oszlop megfelelő skalárszorosát a harmadik és negyedik oszlopból, hogy elimináljuk azok lineáris tagját, végül a harmadik oszlop konstansszorosát vonjuk ki a negyedikből, hogy ott csak 0-k maradjanak.

Második megoldás: Elég megmutatnunk, hogy a determináns oszlopai lineárisan összefüggőek. Az $a^2x + (a+1)^2y + (a+2)^2z + (a+3)^2w = 0$ egyenlet a homogén

$$\begin{alignedat}{9}
x &{}+{}& y &{}+{}& z &{}+{}& w &{}={}& 0 \\
&& 2y &{}+{}& 4z &{}+{}& 6w &{}={}& 0 \\
&& y && &{}+{}& 4z &{}+{}& 9w &{}={}& 0
\end{alignedat}$$

egyenletrendszerre vezet, aminek biztosan van nemtriviális megoldása, hisz 4 ismeretlenre csak 3 egyenlet van adva. (Megoldani már a megoldás létezését igazolni, de például az $(x, y, z, w) = (1, -3, 3, -1)$ egy megoldás.)

**6.22.** Mivel a koordináták bázescserében való változásáról szóló 4.24. állításban láttuk, hogy a koordinátás alakokat a $[\mathbf{v}_i]_{\mathcal{C}} = \mathbf{A}_{\mathcal{C} \leftarrow \mathcal{B}}[\mathbf{v}_i]_{\mathcal{B}}$ képlet kapcsolja össze, ezért a $\mathbf{v}$ vektorok koordinátás alakjaiból, mint oszlopvektorokból képzett mátrixokra $\mathbf{V}_{\mathcal{C}} = \mathbf{A}_{\mathcal{C} \leftarrow \mathcal{B}}\mathbf{V}_{\mathcal{B}}$, így determinánsaikra $|\mathbf{V}_{\mathcal{C}}| = |\mathbf{A}_{\mathcal{C} \leftarrow \mathcal{B}}||\mathbf{V}_{\mathcal{B}}|$.

**6.23.** Egyrészt $\det(\mathbf{A}) = \det(\mathbf{A}^{\mathsf{T}})$, másrészt mivel $\mathbf{A}^{\mathsf{T}} = -\mathbf{A}$, ezért $\det(\mathbf{A}^{\mathsf{T}}) = (-1)^n \det(\mathbf{A})$, azaz $\det(\mathbf{A}) = -\det(\mathbf{A})$, amiből $\det(\mathbf{A}) = 0$.

**6.24.** $|\mathbf{A}^2| = |\mathbf{A}|^2 = |\mathbf{A}||\mathbf{A}| = |\mathbf{A}||\mathbf{A}^{\mathsf{T}}| = |\mathbf{AA}^{\mathsf{T}}|$.

**6.25.** Mindhárom determinánst a következőképpen számítjuk ki. Legyen $\mathbf{A}$ a determinánshoz tartozó mátrix. Tekintsük az $|\mathbf{AA}^{\mathsf{T}}|$ determinánst. Ezt könnyű kiszámítani (hisz a főátlón kívül csak nullák állnak), s ennek négyzetgyöke lesz a determináns értéke. Ezek alapján a három determináns értéke: $a^2 + b^2$, $(a^2 + b^2 + c^2 + d^2)^2$, $(a^2 + b^2 + c^2 + d^2 + e^2 + f^2 + g^2 + h^2)^4$.

**6.26.** A determinánsok szorzási szabályát is felhasználva:

$$\begin{aligned}
(x_1^2 + x_2^2)(y_1^2 + y_2^2) &= \begin{vmatrix} x_1 & x_2 \\ -x_2 & x_1 \end{vmatrix}\begin{vmatrix} y_1 & y_2 \\ -y_2 & y_1 \end{vmatrix} \\
&= \begin{vmatrix} x_1y_1 - x_2y_2 & x_1y_2 + x_2y_1 \\ -x_2y_1 - x_1y_2 & -x_2y_2 + x_1y_1 \end{vmatrix} \\
&= (x_1y_1 - x_2y_2)^2 + (x_1y_2 + x_2y_1)^2.
\end{aligned}$$

A négy illetve a nyolc négyzet összegére vonatkozó analóg összefüggések hasonlóan bizonyíthatók. (Hurwitz bebizonyította, hogy ha $n$ négyzetszám összegére igaz a feladatbelivel analóg összefüggés, akkor $n = 1, 2, 4$ vagy 8.)

**6.27.** Minthogy lineáris transzformáció alteret altérbe, eltolt alteret eltolt altérbe visz, e téglalap képe egy (esetleg elfajuló) téglalap lesz. Ezért elég kiszámolni csak a téglalap 4 csúcsának képét. Ez kiszámolható egyetlen mátrixszorzással:

$$\begin{aligned}
&\begin{bmatrix} a & b \\ c & d \end{bmatrix}\begin{bmatrix} p & p+x & p & p+x \\ q & q & q+y & q+y \end{bmatrix} = \\
&\begin{bmatrix} ap+bq & ap+ax+bq & ap+bq+by & ap+ax+bq+by \\ cp+dq & cp+cx+dq & cp+dq+dy & cp+cx+dq+dy \end{bmatrix}
\end{aligned}$$

Innen leolvasható, hogy a téglalap képeként kapott paralelogramma oldalvektorai $(ax, cx)$ és $(by, dy)$, és így területe

$$|(ax)(dy) - (cx)(by)| = |ad - bc|xy.$$

Eszerint tehát a téglalap képének területe független a téglalap helyzetétől, és mindig a téglalap területének $|ad - bc|$-szerese.

**6.29.** 1. Igaz. 2. Igaz. 3. Igaz. 4. Igaz. 5. Hamis. Mátrixok összegének determinánsa általában nem egyenlő determinánsaik összegével (ld. a 6.30. feladatot). 6. Hamis. Egy aldetermináns értéke bármilyen előjelű lehet, az előjeles aldeterminánst belőle úgy kapjuk, hogy páratlan $i + j$ esetén megszorozzuk $-1$-gyel. 7. Hamis. 8. Hamis. Csak azokon a helyeken folytonos függvénye a mátrix elemeinek, ahol a determinánsa nem 0.

**6.30.**

a)
$$\begin{aligned}
&\begin{vmatrix} 0 & 1 & 0 \\ 2 & 3 & 4 \\ 5 & 0 & 6 \end{vmatrix} = \begin{vmatrix} 0 & 1 & 0 \\ 0 & 0 & 4 \\ 5 & 0 & 0 \end{vmatrix} + \begin{vmatrix} 0 & 1 & 0 \\ 2 & 0 & 0 \\ 0 & 0 & 6 \end{vmatrix} = 8
\end{aligned}$$

b)
$$\begin{aligned}
&\begin{vmatrix} 1 & 0 & 0 & 2 \\ 0 & 1 & 2 & 0 \\ 0 & 2 & 1 & 0 \\ 2 & 0 & 0 & 1 \end{vmatrix} = \begin{vmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{vmatrix} + \begin{vmatrix} 0 & 0 & 0 & 2 \\ 0 & 0 & 2 & 0 \\ 0 & 2 & 0 & 0 \\ 2 & 0 & 0 & 0 \end{vmatrix} + \\
&\begin{vmatrix} 1 & 0 & 0 & 0 \\ 0 & 0 & 2 & 0 \\ 0 & 2 & 0 & 0 \\ 0 & 0 & 0 & 1 \end{vmatrix} + \begin{vmatrix} 0 & 0 & 0 & 2 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 2 & 0 & 0 & 0 \end{vmatrix} = 1 + 16 - 4 - 4 = 9
\end{aligned}$$

c)
$$\begin{aligned}
&\begin{vmatrix} 1 & 0 & 2 & 0 & 0 \\ 0 & 2 & 0 & 0 & 1 \\ 0 & 1 & 0 & 2 & 0 \\ 2 & 0 & 0 & 1 & 0 \\ 0 & 0 & 1 & 0 & 2 \end{vmatrix} = \begin{vmatrix} 1 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 1 \\ 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 & 0 \\ 0 & 0 & 1 & 0 & 0 \end{vmatrix} + \begin{vmatrix} 0 & 0 & 2 & 0 & 0 \\ 0 & 2 & 0 & 0 & 0 \\ 0 & 0 & 0 & 2 & 0 \\ 2 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 2 \end{vmatrix}
\end{aligned}$$

**6.31.** Az első sor minden eleme páros, az első oszlop minden eleme osztható 3-mal, a második oszlop minden eleme osztható 5-tel, tehát minden kígyó osztható $2 \cdot 3 \cdot 5 = 30$-cal, így az összegük is.

**6.32.** Csak egyetlen kígyó áll csupa páratlan számból, így a kígyók összegére bontásnál csak annak determinánsa páratlan, a többié páros, összegük tehát páratlan, vagyis nem lehet 0.

**6.33.** Megadjuk, hogy melyik sorban hányadik elem lesz a kígyóba választva. A 12 kígyó: 1243, 1324, 1432, 2134, 2341, 2413, 3142, 3214, 3421, 4123, 4231, 4312. Ezek alapján a 12 determináns – a kígyó elemeit négyzettel jelölve:

*A 12 darab, $5 \times 5$-ös sémában elhelyezett kígyó, melyekben a kiválasztott elemeket fekete négyzetek jelölik.*

**6.34.** Adjuk a harmadik oszlophoz az első 100-szorosát és a második 10-szeresét. Így az utolsó sorban a megadott, 9-cel osztható számok szerepelnek. Ha e sor szerint fejtjük ki a determinánst, akkor minden összeadandó osztható lesz 9-tel, tehát a determináns is.

**6.35.** Egy olyan determinánst kell konstruálni, melynek van egy nulla értékű aldeterminánsa. például a

$$\begin{vmatrix} 1 & 2 & 1 \\ 1 & 9 & 2 \\ 1 & 1 & 1 \end{vmatrix}$$

determináns értéke 1, de a 9-hez tartozó aldetermináns értéke is 0, így a második sor vagy oszlop szerinti kifejtésben e szám 0-val szorzódik, vagyis nem befolyásolja a determináns értékét.

**6.37.** Az első és harmadik sor szerint kifejtve:

$$\begin{aligned}
\det(\mathbf{A}) =\ & (-1)^{1+3+1+2}\begin{vmatrix} 1 & 0 \\ 0 & 1 \end{vmatrix}\begin{vmatrix} 4 & 0 \\ 2 & 0 \end{vmatrix} + (-1)^{1+3+1+3}\begin{vmatrix} 1 & 3 \\ 0 & 2 \end{vmatrix}\begin{vmatrix} 3 & 0 \\ 0 & 0 \end{vmatrix} \\
&+ (-1)^{1+3+1+4}\begin{vmatrix} 1 & 4 \\ 0 & 3 \end{vmatrix}\begin{vmatrix} 3 & 4 \\ 0 & 2 \end{vmatrix} + (-1)^{1+3+2+3}\begin{vmatrix} 0 & 3 \\ 1 & 2 \end{vmatrix}\begin{vmatrix} 2 & 0 \\ 1 & 0 \end{vmatrix} \\
&+ (-1)^{1+3+2+4}\begin{vmatrix} 0 & 4 \\ 1 & 3 \end{vmatrix}\begin{vmatrix} 2 & 3 \\ 1 & 2 \end{vmatrix} + (-1)^{1+3+3+4}\begin{vmatrix} 3 & 4 \\ 2 & 3 \end{vmatrix}\begin{vmatrix} 2 & 3 \\ 1 & 0 \end{vmatrix} \\
=\ & -1\cdot 0 + 2\cdot 0 - 3\cdot 6 - (-3)\cdot 0 + (-4)\cdot 0 - 1\cdot(-3) = -15
\end{aligned}$$

**6.38.**

*a)* $-6 \cdot 6 = -36$, mert a blokkmátrixok determinánsára vonatkozó tétel szerint a bal felső $2 \times 2$-es és a jobb alsó $3 \times 3$-as determinánsok szorzata adja az eredményt.

*b)* 24, mert a bal felső $1 \times 1$-es és a jobb alsó $4 \times 4$-es determinánsok értéke 1, illetve 24, és ezek szorzata 24. Másik megoldáshoz jutunk, ha a determinánst az első oszlopra, az egyetlen kiszámítandó aldeterminánst az első sora… szerint fejtjük ki.

**6.39.**
*a)* A determináns a $2$, $-1$, $-2$, $1$ számokból képezett Vandermonde-determináns, így értéke: $(-1-2)(-2-2)(1-2)(-2-(-1))(1-(-1))(1-(-2)) = 72$.

*b)* Vandermonde-determináns; értéke $-2880$.

*c)* A determináns két Vandermonde-determináns összegére bomlik:

$$
\begin{vmatrix}
1 & a & a^2 & a^3 \\
1 & b & b^2 & b^3 \\
1 & c & c^2 & c^3 \\
1 & d & d^2 & d^3
\end{vmatrix}
+
\begin{vmatrix}
1 & a & a^2 & a^3 \\
1 & b & b^2 & b^3 \\
1 & c & c^2 & c^3 \\
1 & e & e^2 & e^3
\end{vmatrix}
$$

$$
= (b-a)(c-a)(c-b)
$$

$$
\times \left[ (d-a)(d-b)(d-c) + (e-a)(e-b)(e-c) \right].
$$

**6.40.** Ha $pqrs \neq 0$, akkor szorozzuk be az első sort $p$-vel, a másodikat $q$-val, a harmadikat $r$-rel, a negyediket $s$-sel, majd a negyedik oszlopból emeljünk ki $pqrs$-t; így egy Vandermonde-determinánst kapunk:

$$
D = \frac{pqrs}{pqrs}
\begin{vmatrix}
p^3 & p^2 & p & 1 \\
q^3 & q^2 & q & 1 \\
r^3 & r^2 & r & 1 \\
s^3 & s^2 & s & 1
\end{vmatrix}
$$

$$
= (q-p)(r-p)(s-p)(r-q)(s-q)(s-r).
$$

Ha $pqrs = 0$, például $s = 0$, akkor az eredeti determináns negyedik oszlopa szerinti kifejtéssel kapjuk, hogy

$$
D = pqr
\begin{vmatrix}
p^2 & p & 1 \\
q^2 & q & 1 \\
r^2 & r & 1
\end{vmatrix}.
$$

Ezekből rövid átalakítás után látható, hogy az összefüggés ebben az esetben is fennáll.

**6.41.** $a_1 = \det[1] = 1$, $a_2 = \left[\begin{smallmatrix} 1 & -1 \\ 1 & 1 \end{smallmatrix}\right] = 2$, az $(n \times n)$-es determinánst első sora szerint kifejtve kapjuk, hogy $a_n = a_{n-1} + a_{n-2}$.

**6.43.** Igen. Tekintsük a determináns első sor szerinti kifejtését! Ha mindegyik elemhez tartozó előjeles aldetermináns 0 lenne, akkor a mátrix szinguláris lenne, így valamelyik elemhez tartozó aldetermináns nem 0. Legyen pl. $A_{1j} \neq 0$. Ekkor a kifejtés összes többi tagját összevonva kapjuk, hogy $\det \mathbf{A} = a_{1j} A_{1j} + c$. Mivel $A_{1j} \neq 0$, ezért az $a_{1j} A_{1j} + c = 0$ egyenlet megoldható $a_{1j}$-re, tehát ennek az elemnek a megváltoztatása 0-vá teszi a determinánst.

**6.44.** Ha az $i$-edik sor elemeit az $u$-adik sorhoz tartozó előjeles aldeterminánsokkal szorozzuk, akkor az $u$-adik sor elemeit nem használjuk, tehát szabadon megváltoztathatjuk. Másoljuk az $i$-edik sort az $u$-adik helyére, tehát minden $k$-ra $a_{uk} = a_{ik}$. Ekkor egyrészt $\sum_{k=1}^n a_{ik} A_{uk} = \sum_{k=1}^n a_{uk} A_{uk}$, azaz e determináns $u$-adik sor szerinti kifejtését kaptuk, másrészt e determinánsnak van két azonos sora, tehát determinánsa 0. Az oszlopokra vonatkozó állítás egy transzponálással visszavezethető erre.

**6.45.** A két tétel képletei közös képletbe foglalhatók. Sorokra:

$$
\sum_{k=1}^n a_{ik} A_{uk} =
\begin{cases}
\det \mathbf{A}, & \text{ha } i = u, \\
0, & \text{ha } i \neq u,
\end{cases}
\tag{6.5}
$$

oszlopokra:

$$
\sum_{k=1}^n a_{kj} A_{kv} =
\begin{cases}
\det \mathbf{A}, & \text{ha } j = v, \\
0, & \text{ha } j \neq v.
\end{cases}
\tag{6.6}
$$

**6.46.** A két kifejtési tételből adódik, hogy

$$
[a_{ij}][A_{ij}]^{\mathsf{T}} = \det(\mathbf{A}) \mathbf{I},
$$

ugyanis $[a_{ij}]$ $i$-edik sorának és $[A_{ij}]^{\mathsf{T}}$ $u$-adik oszlopának, azaz $[A_{ij}]$ $u$-adik sorának skaláris szorzata a (6.5) képlet szerint $\det(\mathbf{A})$, ha $i = u$, azaz a szorzat főátlójában, egyébként pedig 0. Ebből pedig mindkét képlet adódik.

**6.50.**
*a)* Az előjeles aldeterminánsok mátrixának transzponáltja:

$$
\left[
\begin{array}{ccc}
\begin{vmatrix} 2 & 7 \\ 1 & 4 \end{vmatrix} & -\begin{vmatrix} -7 & 7 \\ 1 & 4 \end{vmatrix} & \begin{vmatrix} -7 & 2 \\ 1 & 1 \end{vmatrix} \\
-\begin{vmatrix} 1 & 4 \\ 1 & 4 \end{vmatrix} & \begin{vmatrix} 3 & 4 \\ 2 & 4 \end{vmatrix} & -\begin{vmatrix} 3 & 1 \\ 2 & 1 \end{vmatrix} \\
\begin{vmatrix} 1 & 4 \\ 2 & 7 \end{vmatrix} & -\begin{vmatrix} 3 & 4 \\ -7 & 7 \end{vmatrix} & \begin{vmatrix} 3 & 1 \\ -7 & 2 \end{vmatrix}
\end{array}
\right]^{\mathsf{T}}
=
\begin{bmatrix}
1 & 0 & -1 \\
42 & 4 & -49 \\
-11 & -1 & 13
\end{bmatrix}
$$

Mivel a mátrix determinánsa 1, ezért inverze megegyezik az előjeles aldeterminánsok előbb kiszámolt mátrixával.

*b)* Az előjeles aldeterminánsok mátrixának transzponáltja:

$$
\left[
\begin{array}{ccc}
\begin{vmatrix} 0 & 2 \\ -2 & 1 \end{vmatrix} & -\begin{vmatrix} 2 & 2 \\ 3 & 1 \end{vmatrix} & \begin{vmatrix} 2 & 0 \\ 3 & -2 \end{vmatrix} \\
-\begin{vmatrix} -2 & 3 \\ -2 & 1 \end{vmatrix} & \begin{vmatrix} 0 & 3 \\ 3 & 1 \end{vmatrix} & -\begin{vmatrix} 0 & -2 \\ 3 & -2 \end{vmatrix} \\
\begin{vmatrix} -2 & 3 \\ 2 & 1 \end{vmatrix} & -\begin{vmatrix} 0 & 3 \\ 1 & 3 \end{vmatrix} & \begin{vmatrix} 0 & -2 \\ 1 & 2 \end{vmatrix}
\end{array}
\right]^{\mathsf{T}}
=
\begin{bmatrix}
-4 & 4 & 4 \\
4 & -8 & 4 \\
4 & 4 & -4
\end{bmatrix}.
$$

Mivel a mátrix determinánsa 16, ezért az inverz mátrix

$$
\frac{1}{4}
\begin{bmatrix}
-1 & 1 & 1 \\
1 & -2 & 1 \\
1 & 1 & -1
\end{bmatrix}.
$$

*c)* Mivel $\det(\mathbf{A}) = 1$, ezért $\mathbf{A}^{-1}$ megegyezik az előjeles aldeterminánsok mátrixának transzponáltjával. Ennek mind a 16 elemét nem kell kiszámolni, mert felső háromszögmátrix inverze felső háromszögmátrix. Hasonlóan könnyen látható, hogy a főátlóbeli elemekhez tartozó előjeles aldeterminánsok értéke 1. Tehát csak a főátló alatti elemek előjeles aldeterminánsait kell kiszámolni. Példaként egyet mutatunk:

$$
A_{32} = (-1)^{3+2}
\begin{bmatrix}
1 & 1 & 1 \\
0 & 2 & 3 \\
0 & 0 & 1
\end{bmatrix}
= -2.
$$

Hasonlóan kiszámolva a többit is kapjuk, hogy

$$
\mathbf{A}^{-1} =
\begin{bmatrix}
1 & 0 & 0 & 0 \\
-1 & 1 & 0 & 0 \\
1 & -2 & 1 & 0 \\
-1 & 3 & -3 & 1
\end{bmatrix}^{\mathsf{T}}
=
\begin{bmatrix}
1 & -1 & 1 & -1 \\
0 & 1 & -2 & 3 \\
0 & 0 & 1 & -3 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

Mi lehet e feladat általánosítása, és mi a válasz?

*d)* A mátrixból csak egy nemnulla kígyó választható ki, így determinánsa könnyen számolható: $\det \mathbf{B} = 16$. Az inverz kiszámításához nem kell sok aldeterminánst számolni, mert nagy részük láthatóan 0 értékű. Vegyük figyelembe a számolásnál azt is, hogy $\mathbf{B}$ szimmetrikus, így egyrészt a szimmetrikusan elhelyezkedő elemek közül csak az egyiket kell kiszámolni, másrészt a szimmetria miatt a végén szükségtelen a transzponálás.

$$
\mathbf{A}^{-1} = \frac{1}{16}
\begin{bmatrix}
0 & 8 & 0 & -8 \\
8 & 0 & 0 & 0 \\
0 & 0 & 0 & 8 \\
-8 & 0 & 8 & 0
\end{bmatrix}
=
\begin{bmatrix}
0 & \frac{1}{2} & 0 & -\frac{1}{2} \\
\frac{1}{2} & 0 & 0 & 0 \\
0 & 0 & 0 & \frac{1}{2} \\
-\frac{1}{2} & 0 & \frac{1}{2} & 0
\end{bmatrix}.
$$

*e)* Az inverz

$$
\frac{1}{abc}
\begin{bmatrix}
bc & 0 & 0 \\
0 & ac & 0 \\
0 & 0 & ab
\end{bmatrix}^{\mathsf{T}}
=
\begin{bmatrix}
\frac{1}{a} & 0 & 0 \\
0 & \frac{1}{b} & 0 \\
0 & 0 & \frac{1}{c}
\end{bmatrix},
$$

ha $abc \neq 0$. Az $abc = 0$ esetben a mátrix nem invertálható.

*f)*

$$
\begin{bmatrix}
1 & -1 \\
-1 & 1-i
\end{bmatrix}.
$$

*g)* Az inverz

$$
\begin{bmatrix}
0 & 0 & 0 & 1/4 \\
1 & 0 & 0 & 0 \\
0 & 0 & 1/3 & 0 \\
0 & 1/2 & 0 & 0
\end{bmatrix}
$$

*h)*

$$
\begin{bmatrix}
1 & -2 & 1 & 0 \\
0 & 1 & -2 & 1 \\
0 & 0 & 1 & -2 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

**6.52.** *a)* A három eredmény: 1, 2, 4. Mivel mindhárom test esetén ugyanazokat a számolásokat kell elvégezni, csak más modulus szerinti maradék lesz az eredmény, legegyszerűbb, ha az egészek fölött számolunk, és annak maradékait tekintjük. Valóban, az egészek fölött $-1$ a determináns, és $-1 \bmod 2 = 1$, $-1 \bmod 3 = 2$, $-1 \bmod 5 = 4$.

*b)* 5. Legegyszerűbb, ha az első sor 2-szeresét hozzáadjuk a másodikhoz, és 3-szorosát a harmadik sorhoz.

**6.53.** Sage-kód egy $\mathbb{F}_2$ fölötti véletlen mátrix kiírására:

```
sage: random_matrix(GF(2), 5)
[1 0 0 1 1]
[1 1 1 0 1]
[1 1 1 0 0]
[1 0 0 0 0]
[0 0 1 0 0]
sage: _.det()
1
```

Hány olyan $\mathbb{F}_2^{5 \times 5}$-beli mátrix van, amelynek determinánsa nem 0? Az első sora bármelyik vektor lehet, kivéve a $\mathbf{0}$-vektort, így ezen sor $2^5 - 1$ lehetőség. A második sor nem lehet ez a vektor és a $\mathbf{0}$-vektor, ez $2^5 - 2$ lehetőség. A harmadik vektor nem lehet az előző két vektor által kifeszített altér, melynek a $\mathbf{0}$-vektorral együtt $2^2 = 4$ eleme van, e vektor kiválasztására tehát $2^5 - 2^2$ lehetőség adódik. Hasonlóan folytatva kapjuk, hogy az összes független vektortörötösök – azaz a nemnulla értékű determinánsok – száma $(2^5 - 2^0)(2^5 - 2^1)(2^5 - 2^2)(2^5 - 2^3)(2^5 - 2^4)$. Ha ezt elosztjuk az összes $\mathbb{F}_2^{5 \times 5}$-beli mátrixok számával, 0.2980-t kapunk, így a determináns 0.7020 valószínűséggel lesz 0.

**6.54.**
*a)* Egy vektort, mely merőleges a megadott vektorokra, és azzal/azokkal jobbrendszert alkot.

*b)* Segítség: használjuk fel, hogy egy $n-1$-dimenziós $P$ paralelepipedon térfogata megegyezik annak az $n$-dimenziós $Q$ paralelepipedonnak a térfogatával, melyet a $P$-ből úgy kapunk, hogy a $P$-t kifeszítő vektorokhoz $n$-edik vektorként egy egységvektort adunk, mely merőleges a többire.

*c)* Pozitív. Ehhez épp az kellett, hogy a bázisvektorokat ne az első, hanem az utolsó sorba vagy oszlopba írjuk.

**6.55.** Az előző feladat szerint a kért vektort a következőképp kaphatjuk meg:

$$
\begin{vmatrix}
1 & 1 & 1 & 1 \\
1 & 2 & 2 & 2 \\
1 & 2 & 3 & 3 \\
\mathbf{e}_1 & \mathbf{e}_2 & \mathbf{e}_3 & \mathbf{e}_4
\end{vmatrix}
= \mathbf{e}_4 - \mathbf{e}_3
$$

azaz a negyedik vektor $(0, 0, -1, 1)$.

# 7. Mátrixleképezések és geometriájuk

E fejezetet a lineáris leképezések mátrixműveletekből való származtatását, majd általános fogalmának főként szemléletes, geometriai indíttatású megalapozását tárgyalja. Merőlegesség, távolság, vetítés, forgatás, és ezek általánosításai lesznek az alapfogalmak.

## Mátrixleképezés, lineáris leképezés

> *Minden $\mathbf{A}$ mátrixhoz tartozik egy $\mathbf{x} \mapsto \mathbf{A}\mathbf{x}$ leképezés. E leképezések épp egybeesnek a lineáris kombinációt megtartó leképezésekkel, melyeket lineáris leképezéseknek nevezünk. A lineáris leképezés nem csak a lineáris algebrának, de az egész matematikának egyik legfontosabb fogalma.*

### A mátrixleképezés fogalma

Mátrixhoz tartozó leképezésen, vagy egyszerűen *mátrixleképezésen* az $\mathbf{x} \mapsto \mathbf{A}\mathbf{x}$ leképezést értjük, ahol $\mathbf{A}$ egy mátrix. Egy $m \times n$-es $\mathbf{A} \in \mathbb{R}^{m \times n}$ mátrixhoz így egy $\mathbb{R}^n \to \mathbb{R}^m$ leképezés tartozik, ugyanis ha $\mathbf{x} \in \mathbb{R}^n$ és $\mathbf{y} = \mathbf{A}\mathbf{x}$, akkor $\mathbf{y} \in \mathbb{R}^m$.

A mátrixok jelölésére félkövér betűket használunk, a leképezésekére dőlt (kurzív) betűket. A továbbiakban azt a konvenciót követjük, hogy egy mátrixhoz tartozó mátrixleképezést ugyanannak a betűnek a dőlt változatával jelöljük, például az $\mathbf{A}$ mátrixhoz tartozó mátrixleképezést $A$ jelöli, azaz

$$
A : \mathbf{x} \mapsto A(\mathbf{x}) = \mathbf{A}\mathbf{x}.
$$

Az $A(\mathbf{x})$ mellett az $A\mathbf{x}$ jelölés is használatos.

Az $A$ leképezés értékkészletét $\operatorname{Im}(A)$ jelöli, mely az $\mathbb{R}^m$ altere (gondoljuk meg, miért?). Ezt szokás *képtérnek* is nevezni, minthogy ez az $\mathbb{R}^n$ tér képe. Ez megegyezik az $\mathbf{A}$ mátrix oszlopterével, azaz $\mathcal{O}(\mathbf{A})$-val. Azoknak a vektoroknak az alteret, melyet $A$ a nullvektorba visz, az $A$ leképezés *magterének* nevezzük. Magtérre a *kernel* szó is használatos. $\operatorname{Ker}(A)$-val jelöljük. Ez megegyezik a hozzá tartozó $\mathbf{A}$ mátrix nullterével. Tehát

$$
\operatorname{Im}(A) = \mathcal{O}(\mathbf{A}), \qquad \operatorname{Ker}(A) = \mathcal{N}(\mathbf{A}).
$$

> *Az Im rövidítés a kép jelentésű* image*, a Ker a mag jelentésű* kernel *szóból származik.*

**7.1. példa (Vektori szorzással definiált mátrixleképezés).** *Legyen $\mathbf{a} = (a_1, a_2, a_3)$ egy adott $\mathbb{R}^3$-beli vektor. Legyen $A$ az a transzformáció, mely a tér tetszőleges $\mathbf{x}$ vektorához az $\mathbf{a} \times \mathbf{x}$ vektort rendeli. Tehát*

$$
A : \mathbb{R}^3 \to \mathbb{R}^3 : \mathbf{x} \mapsto \mathbf{a} \times \mathbf{x}.
$$

*Mutassuk meg, hogy az $A$ függvény egy mátrixleképezés, azaz létezik egy olyan $\mathbf{A}$ mátrix, hogy $A(\mathbf{x}) = \mathbf{A}\mathbf{x}$.*

**Megoldás.** Az $\mathbf{a} \times \mathbf{x}$ vektori szorzat koordinátás alakban:

$$
\mathbf{y} = \mathbf{a} \times \mathbf{x} =
\begin{bmatrix} a_1 \\ a_2 \\ a_3 \end{bmatrix}
\times
\begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix}
=
\begin{bmatrix} a_2 x_3 - a_3 x_2 \\ a_3 x_1 - a_1 x_3 \\ a_1 x_2 - a_2 x_1 \end{bmatrix}.
$$

Az eredményből azonnal látszik, hogy e transzformáció mátrixleképezés, hisz $\mathbf{y}$ minden koordinátája $\mathbf{x}$ koordinátáinak lineáris kifejezése. A szorzatot $\mathbf{x}$ koordinátái szerint rendezzük, ahonnan azonnal leolvasható a transzformáció mátrixa, amit a továbbiakban $[\mathbf{a}]_\times$ jelöl. Segítségével fölírható a transzformáció mátrixszorzatos alakja:

$$
\mathbf{a} \times \mathbf{x} =
\begin{bmatrix}
& -a_3 x_2 + a_2 x_3 \\
a_3 x_1 & - a_1 x_3 \\
-a_2 x_1 + a_1 x_2 &
\end{bmatrix}
=
\begin{bmatrix}
0 & -a_3 & a_2 \\
a_3 & 0 & -a_1 \\
-a_2 & a_1 & 0
\end{bmatrix}
\begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix}.
$$

Tehát

$$
[\mathbf{a}]_\times =
\begin{bmatrix}
0 & -a_3 & a_2 \\
a_3 & 0 & -a_1 \\
-a_2 & a_1 & 0
\end{bmatrix}.
\tag{7.1}
$$

E feladat eredménye különösen fontos a 3-dimenziós tér transzformációinak vizsgálatánál, így pl. az anyagtranszformációk fizikai/mérnöki vizsgálatában. $\square$

### Műveletek mátrixleképezések között

A következőkben megvizsgáljuk, hogy mi a kapcsolat a mátrixműveletek, és a mátrixokhoz tartozó mátrixleképezések közti műveletek között.

**7.2. tétel (Mátrixleképezések alapműveletei).** *Legyen $\mathbf{A}$, $\mathbf{B}$ és $\mathbf{C}$ három $m \times n$-es mátrix, legyen $A$, $B$ és $C$ a hozzájuk tartozó három mátrixleképezés és legyen $c$ egy skalár. Ekkor*

*a) $\mathbf{A} + \mathbf{B} = \mathbf{C}$ pontosan akkor igaz, ha $A + B = C$, és*

*b) $c\mathbf{A} = \mathbf{C}$ pontosan akkor igaz, ha $cA = C$.*

*Ha $\mathbf{X}$, $\mathbf{Y}$ és $\mathbf{Z}$ típusa rendre $m \times k$, $k \times n$, illetve $m \times n$, és $X$, $Y$ és $Z$ a hozzájuk tartozó három mátrixleképezés, akkor*

*c) $\mathbf{X}\mathbf{Y} = \mathbf{Z}$ pontosan akkor igaz, ha $X \circ Y = Z$, azaz mátrixok szorzásának a függvények kompozíciója felel meg.*

Az $f : \mathbb{R}^n \to \mathbb{R}^n$ függvénynek a $g : \mathbb{R}^n \to \mathbb{R}^n$ függvény inverze, ha minden $\mathbf{x} \in \mathbb{R}^n$ helyen $(f(g(\mathbf{x})) = \mathbf{x}$ és $(g(f(\mathbf{x})) = \mathbf{x}$, azaz ha kompozícióik az $f \circ g$ és a $g \circ f$ függvények megegyeznek az identikus leképezéssel.

**7.3. tétel (Inverz mátrixleképezések).** *Legyenek $A$ és $B$ az $n \times n$-es $\mathbf{A}$ és $\mathbf{B}$ mátrixokhoz tartozó mátrixleképezések. Ekkor az $\mathbf{A}$ mátrix inverze pontosan akkor a $\mathbf{B}$ mátrix, ha az $A$ leképezés inverze a $B$ leképezés.*

A fenti két tétel bizonyítását az Olvasóra hagyjuk (ld. 7.11. és 7.12. feladatok)!

### Mátrixleképezések tulajdonságai

A mátrixleképezések megőrzik a lineáris kombinációt, a nullvektort nullvektorba, alteret altérbe visznek.

**7.4. tétel (Mátrixleképezések alaptulajdonságai).** *Legyen $A : \mathbb{R}^n \to \mathbb{R}^m$ egy tetszőleges mátrixleképezés, $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$, $c, d \in \mathbb{R}$.*

*a) $A(c\mathbf{x} + d\mathbf{y}) = cA(\mathbf{x}) + dA(\mathbf{y})$, azaz $A$ megőrzi a lineáris kombinációt.*

*b) Az $A$ homogén és additív leképezés, azaz*

$$
\begin{aligned}
A(c\mathbf{x}) &= cA(\mathbf{x}), && \text{(a leképezés homogén), és} \\
A(\mathbf{x} + \mathbf{y}) &= A(\mathbf{x}) + A(\mathbf{y}), && \text{(a leképezés additív).}
\end{aligned}
$$

*c) $A\mathbf{0} = \mathbf{0}$.*

*d) Tetszőleges altér képe altér.*

*e) Tetszőleges affin altér képe affin altér.*

**Bizonyítás.** *a)* Bármely $\mathbf{x}$ és $\mathbf{y}$ vektorra és $c, d \in \mathbb{R}$ valósra

$$
A(c\mathbf{x} + d\mathbf{y}) = \mathbf{A}(c\mathbf{x} + d\mathbf{y}) = c\mathbf{A}\mathbf{x} + d\mathbf{A}\mathbf{y} = cA(\mathbf{x}) + dA(\mathbf{y}).
$$

*b)* Az előző egyenlőség $d = 0$ esetén a homogenitást, $c = d = 1$ esetén az additivitást bizonyítja. *c)* igaz, mert bármely $\mathbf{x}$ vektorra $A\mathbf{0} = A(0\mathbf{x}) = 0A(\mathbf{x}) = \mathbf{0}$. *d)* abból következik, hogy ha $\mathbf{b}_1, \ldots, \mathbf{b}_k$ egy $\mathcal{U}$ altér bázisa, akkor ezek összes lineáris kombinációjának, vagyis az altér vektorainak képe

$$
A(c_1 \mathbf{b}_1 + \ldots + c_k \mathbf{b}_k) = c_1 A(\mathbf{b}_1) + \ldots + c_k A(\mathbf{b}_k).
$$

Világos, hogy e vektorok kiadják az $A\mathbf{b}_1, \ldots, A\mathbf{b}_k$ vektorok által kifeszített altér minden vektorát, tehát $A(\mathcal{U})$ altér. Hasonlóan *e)*-ben, ha $\mathbf{u} \in \mathbb{R}^n$ egy tetszőleges vektor és $\mathcal{U}$ a fenti altér, akkor

$$
\begin{aligned}
A(\mathbf{u} + \mathcal{U}) &= A(u + c_1 \mathbf{b}_1 + \ldots + c_k \mathbf{b}_k) \\
&= A(\mathbf{u}) + c_1 A(\mathbf{b}_1) + \ldots + c_k A(\mathbf{b}_k) \\
&= A(\mathbf{u}) + A(\mathcal{U}),
\end{aligned}
$$

ami egy altér eltoltja, azaz affin altér. $\square$

### Lineáris leképezés

A mátrixleképezések alaptulajdonságai a lineáris leképezés fogalmához vezetnek.

**7.5. definíció (Lineáris leképezés).** *Legyen $H_1$ és $H_2$ mindegyike olyan halmaz, melynek elemein értelmezve van egy asszociatív összeadás és egy „skalárral való szorzás" művelet. Azt mondjuk, hogy egy $A : H_1 \to H_2$ leképezés* lineáris*, ha homogén és additív, azaz ha tetszőleges $\mathbf{x}, \mathbf{y} \in H_1$ elemre és $c$ skalárra*

$$
\begin{aligned}
A(c\mathbf{x}) &= cA(\mathbf{x}) && \text{(A homogén,)} \\
A(\mathbf{x} + \mathbf{y}) &= A\mathbf{x} + A\mathbf{y} && \text{(A additív.)}
\end{aligned}
$$

*$H_1 = H_2$ esetén a lineáris leképezéseket* lineáris transzformációknak is *nevezzük.*

Azt a későbbiekben fogjuk részletezni, hogy milyen algebrai tulajdonságokat érdemes a skalárokról, valamint $H_1$ és $H_2$ elemeiről föltenni. Most csak néhány pédát mutatunk lineáris leképezésekre.

**7.6. példa (A deriválás és az integrálás lineáris leképezés).** *Legyen $H_1$ az egyváltozós valós, és minden valós helyen differenciálható függvények halmaza, $H_2$ pedig az egyváltozós valós függvények halmaza. Világos, hogy $H_1$ és $H_2$ is olyan halmaz, melynek elemei közt értelmezve van az összeadás és a skalárral való szorzás művelete. A deriválás, azaz a $D : H_1 \to H_2 : f \mapsto D(f) = f'$ leképezés lineáris. Fogalmazzunk meg hasonló állítást az integrálra is.*

**Megoldás.** Tetszőleges $c \in \mathbb{R}$ skalárra és $f, g \in H_1$ függvényre

$$
\begin{aligned}
D(cf) &= (cf)' = cf' = cD(f), \text{ és} \\
D(f + g) &= (f + g)' = f' + g' = D(f) + D(g).
\end{aligned}
$$

Hasonló összefüggések állnak fönn az integrálokra is, például legyen $H_1$ a $[0, 1]$ intervallumon Riemann-integrálható függvények halmaza, és legyen $H_2 = \mathbb{R}$. Ekkor az $f \mapsto \int_0^1 f$ leképezés lineáris, ugyanis tetszőleges $c \in \mathbb{R}$ skalárra és tetszőleges $f, g \in H_1$ függvényre

$$
\int_0^1 cf = c \int_0^1 f, \text{ és } \int_0^1 (f + g) = \int_0^1 f + \int_0^1 g. \qquad \square
$$

**7.7. állítás (Síkbeli forgatás, tükrözés, vetítés).** *A síkbeli vektorok egy rögzített $O$ pont körüli forgatása, egy egyenesre való tükrözése és merőleges vetítése lineáris leképezés.*

**Bizonyítás.** A precíz bizonyításokat mellőzük, csak a tényt szemléltetjük. A síkbeli vektorok pont körüli forgatása lineáris leképezés, ugyanis könnyen látható, hogy egy vektor $c$-szeresének ($c \in \mathbb{R}$) elforgatottja megegyezik a vektor elforgatottjának $c$-szeresével, valamint hogy két vektor összegének elforgatottja megegyezik a vektorok elforgatottjainak összegével (ld. 7.1. ábra).

Hasonlóan egyszerűen látszik, hogy egy egyenesre való tükrözés egy vektor $c$-szeresét a vektor tükörképének $c$-szeresébe viszi, és két vektor összegét a két vektor tükörképének összegébe (ld. 7.2 ábra).

Végül ugyanígy megmutatható, hogy egy egyenesre való merőleges vetítés egy vektor $c$-szeresét vetületének $c$-szeresébe viszi, és két vektor összegét a két vektor vetületének összegébe (ld. 7.3 ábra). $\square$

*7.1. ábra. A pont körüli elforgatás lineáris leképezés.*

*7.2. ábra. Az egyenesre való tükrözés lineáris leképezés.*

*7.3. ábra. Az egyenesre való merőleges vetítés lineáris leképezés.*

### $\mathbb{R}^n$-ből $\mathbb{R}^m$-be képző lineáris leképezések

E fejezet további részében csak lineáris $\mathbb{R}^n \to \mathbb{R}^m$ leképezésekkel foglalkozunk, ahol a skalárok a valós számok. Megmutatjuk, hogy ezek mátrixleképezések.

**7.8. tétel (Lineáris leképezés ekvivalens definíciói).** *Egy tetszőleges $A : \mathbb{R}^n \to \mathbb{R}^m$ leképezésre az alábbi állítások ekvivalensek:*

*1. $A$ lineáris, azaz homogén és additív.*

*2. Tetszőleges $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$ és $c, d \in \mathbb{R}$ esetén*

$$
A(c\mathbf{x} + d\mathbf{y}) = cA(\mathbf{x}) + dA(\mathbf{y})
$$

*3. Tetszőleges $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$ és $c \in \mathbb{R}$ esetén*

$$
A(c\mathbf{x} + \mathbf{y}) = cA(\mathbf{x}) + A(\mathbf{y})
$$

*4. „Megőrzi" a lineáris kombinációt, azaz tetszőleges $\mathbf{x}_1, \ldots, \mathbf{x}_k \in \mathbb{R}^n$ vektorokra és $c_1, c_2, \ldots, c_k \in \mathbb{R}$ skalárra*

$$
A(c_1 \mathbf{x}_1 + \cdots + c_k \mathbf{x}_k) = c_1 A\mathbf{x}_1 + \cdots + c_k A\mathbf{x}_k.
$$

A bizonyítást az Olvasóra hagyjuk (ld. 7.13. feladat).

**7.9. tétel (Az $\mathbb{R}^n \to \mathbb{R}^m$ lineáris leképezések mátrixleképezések).** *Legyen $A : \mathbb{R}^n \to \mathbb{R}^m$ egy tetszőleges függvény. Az $A$ pontosan akkor lineáris leképezés, ha létezik az olyan $m \times n$-es $\mathbf{A}$ mátrix, hogy az $A$ függvény megegyezik az $\mathbf{x} \mapsto \mathbf{A}\mathbf{x}$ leképezéssel. Ekkor*

$$
\mathbf{A} = [A\mathbf{e}_1 \vert A\mathbf{e}_2 \vert \ldots \vert A\mathbf{e}_n],
$$

*ahol $\mathbf{e}_i$ az $i$-edik standard egységvektor ($i = 1, 2, \ldots, n$).*

**Bizonyítás.** Minden mátrixleképezés lineáris, ez bizonyítja az állítás egyik felét. A állítás másik felének bizonyításához tekintsük $\mathbb{R}^n$ standard bázisát és az $A\mathbf{e}_i$ vektorokból képzett

$$
\mathbf{A} = [A\mathbf{e}_1 \vert A\mathbf{e}_2 \vert \ldots \vert A\mathbf{e}_n]
\tag{7.2}
$$

mátrixot, valamint legyen $\mathbf{x} \in \mathbb{R}^n$ egy tetszőleges vektor. Ha $A$ lineáris leképezés, azaz megőrzi a lineáris kombinációt, akkor

$$
\begin{aligned}
A\mathbf{x} &= A(x_1 \mathbf{e}_1 + x_2 \mathbf{e}_2 + \ldots + x_n \mathbf{e}_n) \\
&= x_1 A\mathbf{e}_1 + x_2 A\mathbf{e}_2 + \ldots + x_n A\mathbf{e}_n \\
&= \begin{bmatrix} A\mathbf{e}_1 & A\mathbf{e}_2 & \ldots & A\mathbf{e}_n \end{bmatrix}
\begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix} \\
&= \mathbf{A}\mathbf{x}
\end{aligned}
$$

Tehát valóban létezik olyan $\mathbf{A}$ mátrix, hogy $A\mathbf{x} = \mathbf{A}\mathbf{x}$. Ráadásul ilyen mátrix csak ez az egy van, mert bármely $\mathbf{e}_i$ bázisvektorra és bármely $\mathbf{A}$ mátrixra $\mathbf{A}\mathbf{e}_i = \mathbf{A}_{*i}$, tehát az $\mathbf{A}_{*i}$ oszlopvektor csak $A\mathbf{e}_i$ lehet. $\square$

**7.10. példa.** *Mutassuk meg, hogy az*

$$
\begin{aligned}
A &: \mathbb{R}^2 \to \mathbb{R}^3; (x, y) \mapsto (x - y, 2x + y, -x + 1) \text{ és} \\
L &: \mathbb{R}^2 \to \mathbb{R}^3; (x, y) \mapsto (x - y, 2x + y, -x)
\end{aligned}
$$

*leképezések közül az $A$ nem lineáris leképezés, de az $L$ igen. Utóbbinak írjuk föl a mátrixát!*

**Megoldás.** Az $A$ leképezés nem lineáris, mert a 7.4. tétel következtében $A\mathbf{0} = \mathbf{0}$ kellene, de $A : (0, 0) \mapsto (0, 0, 1)$.

Alakítsuk át a függvényértékéül kapott vektort:

$$
L\begin{bmatrix} x \\ y \end{bmatrix} =
\begin{bmatrix} x - y \\ 2x + y \\ -x \end{bmatrix}
= x \begin{bmatrix} 1 \\ 2 \\ -1 \end{bmatrix}
+ y \begin{bmatrix} -1 \\ 1 \\ 0 \end{bmatrix}
=
\begin{bmatrix} 1 & -1 \\ 2 & 1 \\ -1 & 0 \end{bmatrix}
\begin{bmatrix} x \\ y \end{bmatrix},
$$

ami igazolja, hogy $L$ mátrixleképezés, és mátrixa

$$
\mathbf{L} =
\begin{bmatrix} 1 & -1 \\ 2 & 1 \\ -1 & 0 \end{bmatrix}.
$$

A mátrixleképezések pedig lineáris leképezések, tehát $L$ is. $\square$

> *Mint azt a 7.6. példa mutatja, lineáris leképezésekről olyan esetben is beszélhetünk, amikor a leképezésnek nincs mátrixa, azaz a lineáris leképezés általánosabb fogalom.*

> *Különbség van a lineáris leképezés és a mátrixleképezés közt $\mathbb{R}^n \to \mathbb{R}^m$ függvények esetén is. A lineáris leképezés független a bázistól, az csak maga a függvény, mely megadja, hogy melyik vektornak melyik vektor a képe. A mátrixleképezés mindig valamely bázisra vonatkozik. Egy lineáris leképezéshez minden bázisban tartozik egy mátrixleképezés, melynek mátrixa függ a bázistól.*

> *Keressük meg a lineáris $\mathbb{R} \to \mathbb{R}$ transzformációkat. Itt $\mathbb{R}$ elemei az 1-dimenziós vektorok (azonosíthatók a számokkal). E térben az $e = 1$ vektor (szám) a bázis. Az előző tétel szerint egy lineáris $L : \mathbb{R} \to \mathbb{R}$ transzformáció mátrixa $[Le] = [L(1)]$, ami egy szám, jelölje ezt $c := L(1)$. Így $L(x) = L(1x) = L(x1) = xc = cx$, azaz a lineáris $\mathbb{R} \to \mathbb{R}$ transzformációk azonosak az $x \mapsto cx$ függvényekkel, ahol $c$ egy tetszőleges konstans. Az ilyen leképezések grafikonja egy origón átmenő (függőlegestől különböző) egyenes. (Az $\mathbb{R} \to \mathbb{R}$ lineáris leképezések tehát nem azonosak a lineáris $\mathbb{R} \to \mathbb{R}$ függvényekkel, melyek általános alakja $f(x) = cx + d$, ahol $c, d \in \mathbb{R}$.)*

### A mátrixleképezés hatásának szemléltetései

Egy mátrixszal való szorzás hatásának megértését még egy adott konkrét alkalmazásban is segítheti, ha vizuálisan is megjeleníthető képünk van róla.

Egy vektor és egy mátrixleképezés általi képe – akár szabad vektorokkal, akár helyvektorokkal, akár a helyvektorok végpontjával – egyszerűen ábrázolható. A 7.4. ábra például a forgatómátrix hatását szemlélteti e három módon. (Szabad vektorok esetén a szabad vektorok mellett a forgatás középpontja is szabadon megválasztható, helyvektorok esetén a forgatás középpontja az origó!)

$\mathbb{R}^2 \to \mathbb{R}^2$ leképezések esetén a legegyszerűbb szemléltetéshez elég csak az egységnégyzet képét megrajzolni, amint azt a 7.5. ábra mutatja. A kép mindig egy paralelogramma (esetleg elfajuló), melynek körüljárását is jelölni kell valahogy. Ezt az ábrán az oldalak különböző színezése megteszi. A paralelogramma területe és körüljárása a mátrix determinánsból olvasható ki. Az egységnézetrács képe paralelogrammarács. Ennek segítségével egy tetszőleges vektor képének megszerkesztése egyszerű, hisz a lineáris leképezés megtartja a lineáris kombinációt (ld. 7.5. ábra).

*7.4. ábra. Vektorok elforgatásának szemléltetései a vektor különböző ábrázolásai szerint: a) szabad vektorok, b) helyvektorok, c) pontok.*

*7.5. ábra. Az $\mathbf{A} = \left[\begin{smallmatrix} 1 & 1 \\ 1 & 2 \end{smallmatrix}\right]$ mátrix hatása az egységnégyzetrácson, és az $\mathbf{x} = (1, 2)$ vektoron. Az $\mathbf{A}\mathbf{x}$ vektor végpontja a paralelogrammarácson 1 lépés az $x$-tengely képének irányába, és 2 lépés az $y$-tengely képének irányába.*

**7.11. példa (Mátrixleképezés ábrázolása az egységnégyzetrács képével).** *Ábrázoljuk az egységnégyzet és az egységnégyzetrács, valamint az $(1, 2)$ vektor képét az*

$$
\mathbf{A} = \begin{bmatrix} \frac{5}{4} & \frac{3}{4} \\ \frac{3}{4} & \frac{5}{4} \end{bmatrix}, \quad
\mathbf{B} = \begin{bmatrix} \frac{3}{4} & \frac{5}{4} \\ \frac{5}{4} & \frac{3}{4} \end{bmatrix}, \quad
\mathbf{C} = \begin{bmatrix} -\frac{5}{4} & \frac{3}{4} \\ -\frac{3}{4} & \frac{5}{4} \end{bmatrix}, \quad
\mathbf{D} = \begin{bmatrix} -\frac{3}{4} & \frac{5}{4} \\ -\frac{5}{4} & \frac{3}{4} \end{bmatrix}
$$

*mátrixokkal megadott leképezések esetén.*

*7.6. ábra. Az egységnégyzet és az egységnégyzetrács képe a megadott négy mátrix esetén, és az $(1, 2)$ vektor képe.*

Egy másik ábrázolási lehetőséget kapunk az egységvektorok képének megszerkesztésével. Mivel a mátrixleképezés homogén, azaz egy vektor $c$-szereséhez a vektor képének $c$-szeresét rendeli, ezért elég minden irányból egyetlen vektor – például az egységvektor – képének megszerkesztése. Hogy a kép áttekinthető legyen, helyvektorok helyett csak az őket reprezentáló pontokat tekintjük, és az egységkör összes pontja helyett csak néhányat (pl. 50–100-at). Mivel a kör lineáris leképezés általi képe mindig egy ellipszis (esetleg elfajuló), ezért a leképezés szemléltetéséhez elég összekötni az egységkörön kiválasztott pontot a képével ahhoz, hogy nagyjából a sík bármelyik vektorának „lássuk", hogy mi a képe. Az így kialakuló ábra sokat elmond a leképezésről. Ezt mutatja a 7.7 ábra, ahol a $-65°$-os irányhoz tartozó $\mathbf{x}$ egységvektort és $\mathbf{A}\mathbf{x}$ képét külön berajzoltuk, és azt is megmutattuk, hogy pl. hogyan kapható meg $2\mathbf{x}$ képe.

A 7.8 ábra az előző példabeli mátrixleképezések egységkör-ábráját mutatja.

*7.7. ábra. Az $\mathbf{A} = \left[\begin{smallmatrix} 5/4 & 3/4 \\ 3/4 & 5/4 \end{smallmatrix}\right]$ mátrix hatását szemlélteti oly módon, hogy az egységkör néhány pontját összeköti a képükkel. Az ábrán egy egységnyi $\mathbf{x}$ vektort és $\mathbf{A}\mathbf{x}$ képét, valamint a $2\mathbf{x}$ vektort és képét a $\mathbf{A}(2\mathbf{x}) = 2\mathbf{A}\mathbf{x}$ vektort kiemeltük.*

*7.8. ábra. Négy leképezés egységkör-ábrája. A mátrixok: $\mathbf{A} = \left[\begin{smallmatrix} 5/4 & 3/4 \\ 3/4 & 5/4 \end{smallmatrix}\right]$, $\mathbf{B} = \left[\begin{smallmatrix} 3/4 & 5/4 \\ 5/4 & 3/4 \end{smallmatrix}\right]$, $\mathbf{C} = \left[\begin{smallmatrix} -5/4 & 3/4 \\ -3/4 & 5/4 \end{smallmatrix}\right]$, $\mathbf{D} = \left[\begin{smallmatrix} -3/4 & 5/4 \\ -5/4 & 3/4 \end{smallmatrix}\right]$.*

Egy általános $\mathbb{R}^n \to \mathbb{R}^m$ leképezés megjelenítéséhez a levéldiagramot hívjuk segítségül. Itt elsőként a képteret és a magteret tudjuk szemléltetni, amint azt a 7.9. ábra mutatja.

*7.9. ábra. Egy $A : \mathbb{R}^n \to \mathbb{R}^m, \mathbf{x} \mapsto \mathbf{A}\mathbf{x}$ mátrixleképezés levéldiagrammja. Az ábrán három altér színezéssel ki van emelve – az értelmezési tartomány ($\mathbb{R}^n$), az értékkészlet ($\operatorname{Im}(A) = \mathcal{O}(\mathbf{A})$) és a magtér ($\operatorname{Ker}(A) = \mathcal{N}(\mathbf{A})$).*

### Mátrix nyoma

A négyzetes mátrixok vektorterén értelmezett lineáris leképezések egyik legfontosabbika a mátrix nyoma.

**7.12. definíció (Mátrix nyoma).** *Egy négyzetes mátrix főátlójában lévő elemek összegét a* mátrix nyomának *nevezzük. Az $\mathbf{A}$ mátrix nyomát* trace $\mathbf{A}$ *vagy* tr $\mathbf{A}$ *jelöli.*

Például

$$
\operatorname{trace}
\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}
= 5, \quad
\operatorname{trace}(\mathbf{I}_n) = n, \quad
\operatorname{trace}([\mathbf{a}]_\times) = 0.
$$

**7.13. állítás (A nyom lineáris leképezés).** *A nyom additív és homogén, azaz tetszőleges $\mathbf{A}, \mathbf{B} \in \mathbb{R}^{n \times n}$ mátrixokra és $c \in \mathbb{R}$ skalárra*

$$
\operatorname{trace}(\mathbf{A} + \mathbf{B}) = \operatorname{trace} \mathbf{A} + \operatorname{trace} \mathbf{B}, \quad
\operatorname{trace}(c\mathbf{A}) = c \operatorname{trace} \mathbf{A}.
$$

> *A bizonyítás magától értetődő. Egyúttal igazolja azt is, hogy tetszőleges $c, d \in \mathbb{R}$ konstansok esetén*
>
> $$\operatorname{trace}(c\mathbf{A} + d\mathbf{B}) = c \operatorname{trace} \mathbf{A} + d \operatorname{trace} \mathbf{B}.$$

> *Hasonlóképp nyilvánvaló, hogy $\operatorname{trace} \mathbf{A}^{\mathsf{T}} = \operatorname{trace} \mathbf{A}$.*

**7.14. állítás (A nyom tulajdonságai).** *Legyen $\mathbf{A}, \mathbf{B} \in \mathbb{R}^{n \times n}$ és $\mathbf{C} \in \mathbb{R}^{m \times n}$. Ekkor*

$$
\operatorname{trace}(\mathbf{A}\mathbf{B}) = \operatorname{trace}(\mathbf{B}\mathbf{A}),
\tag{7.3}
$$

$$
\operatorname{trace}(\mathbf{C}^{\mathsf{T}}\mathbf{C}) = \sum_{i=1}^m \sum_{j=1}^n c_{ij}^2.
\tag{7.4}
$$

**Bizonyítás.** Mivel

$$
\begin{aligned}
\operatorname{trace}(\mathbf{A}\mathbf{B}) &= \sum_{i=1}^n \mathbf{A}_{i*} \mathbf{B}_{*i} = \sum_{i=1}^n \sum_{j=1}^n a_{ij} b_{ji} \\
&= \sum_{j=1}^n \sum_{i=1}^n a_{ij} b_{ji} = \sum_{j=1}^n \sum_{i=1}^n a_{ij} b_{ji} = \sum_{j=1}^n \mathbf{B}_{j*} \mathbf{A}_{*j} \\
&= \operatorname{trace}(\mathbf{B}\mathbf{A}).
\end{aligned}
$$

A második egyenlőség hasonlóan bizonyítható. $\square$

> *A fenti összefüggésekből következik, hogy bármely két négyzetes mátrixra $\operatorname{trace}(\mathbf{A}\mathbf{B} - \mathbf{B}\mathbf{A}) = 0$.*

> *Az $\mathbf{x}$ vektor hosszának négyzete $\mathbf{x} \cdot \mathbf{x} = \mathbf{x}^{\mathsf{T}} \mathbf{x} = \sum_i x_i^2$. Ennek általánosításaként tekinthetünk a (7.4) képletre. Valóban, e kifejezést fogjuk használni a hosszúság és a skaláris szorzat fogalmának általánosításakor.*

> *A (7.3) képlet nem általánosítható tetszőleges többtagú szorzatokra, csak a ciklikus átrendezéssel kapottakra. Ugyan $\operatorname{trace}(\mathbf{A}\mathbf{B}\mathbf{C}) = \operatorname{trace}(\mathbf{B}\mathbf{C}\mathbf{A}) = \operatorname{trace}(\mathbf{C}\mathbf{A}\mathbf{B})$, de $\operatorname{trace}(\mathbf{A}\mathbf{B}\mathbf{C}) \neq \operatorname{trace}(\mathbf{B}\mathbf{A}\mathbf{C})$ (ld. 7.1. feladat).*

## Feladatok

**7.1.** Adjunk példát olyan mátrixokra, melyekre $\operatorname{trace}(\mathbf{ABC}) \ne \operatorname{trace}(\mathbf{BAC})$.

## 2- és 3-dimenziós geometriai transzformációk mátrixa

*E fejezetben néhány geometriailag jól leírható $\mathbb{R}^2 \to \mathbb{R}^2$ és $\mathbb{R}^3 \to \mathbb{R}^3$ lineáris transzformáció mátrixát fogjuk megkonstruálni.*

### Forgatás a síkban

A 7.9. tétel bizonyításában megmutattuk, hogy az $A : \mathbb{R}^n \to \mathbb{R}^m$ lineáris leképezéshez tartozó mátrixleképezés mátrixa

$$\mathbf{A} = [A\mathbf{e}_1 | A\mathbf{e}_2 | \dots | A\mathbf{e}_n].$$

Ezt fogjuk használni a következőkben.

**7.15. állítás (A forgatás mátrixa).** *A sík vektorait egy pont körül $\alpha$ szöggel elforgató leképezés mátrixa*

$$\begin{bmatrix} \cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha \end{bmatrix}.$$

**Bizonyítás.** A 7.7. állítás szerint a forgatás lineáris leképezés, így van mátrixa, melynek alakja $[A\mathbf{i}\ A\mathbf{j}]$, ahol $\mathbf{i}$ és $\mathbf{j}$ jelöli az $\mathbb{R}^2$ standard bázisának elemeit. E vektorokat szemlélteti a 7.10. ábra.

Az $A\mathbf{i}$ vektor megegyezik $\mathbf{i}$ elforgatottjával, amelynek ismerjük koordinátáit: $A\mathbf{i} = \left[\begin{smallmatrix} \cos\alpha \\ \sin\alpha \end{smallmatrix}\right]$. A $\mathbf{j}$ vektor $\alpha$ szöggel való elforgatottja megegyezik az $A\mathbf{i}$ vektor $\pi/2$ szöggel való elforgatottjával, azaz $A\mathbf{j} = \left[\begin{smallmatrix} -\sin\alpha \\ \cos\alpha \end{smallmatrix}\right]$. Így az $A$-hoz tartozó mátrix

$$\mathbf{A} = \begin{bmatrix} A\mathbf{i} & A\mathbf{j} \end{bmatrix} = \begin{bmatrix} \cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha \end{bmatrix}.$$

Tehát egy $\mathbf{x}$ vektor $\alpha$ szöggel való elforgatottja $\mathbf{Ax} = \left[\begin{smallmatrix} \cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha \end{smallmatrix}\right]\mathbf{x}$. $\square$

> *7.10. ábra. Az $\mathbf{i}$ és $\mathbf{j}$ vektorok $\alpha$ szöggel való elforgatottjai*

**7.16. példa (Forgatás egy tetszőleges pont körül).** *Határozzuk meg a koordinátáit a $(4, 3)$ pont $(2, 1)$ körül $\pi/3$ radiánnal való elforgatásával kapott pontnak!*

**Megoldás.** A forgatás középpontját toljuk az origóba, így a $(4, 3)$ pont a $(4, 3) - (2, 1) = (2, 2)$ pontba kerül. E pontot, illetve az oda mutató helyvektort forgassuk el $\pi/3$ radiánnal, azaz $60°$-kal. Ez a forgatás mátrixával való beszorzással megkapható:

$$\begin{bmatrix} \cos\frac{\pi}{3} & -\sin\frac{\pi}{3} \\ \sin\frac{\pi}{3} & \cos\frac{\pi}{3} \end{bmatrix} \begin{bmatrix} 2 \\ 2 \end{bmatrix} = \begin{bmatrix} \frac{1}{2} & -\frac{\sqrt{3}}{2} \\ \frac{\sqrt{3}}{2} & \frac{1}{2} \end{bmatrix} \begin{bmatrix} 2 \\ 2 \end{bmatrix} = \begin{bmatrix} 1 - \sqrt{3} \\ 1 + \sqrt{3} \end{bmatrix}$$

E pontot a $(2, 1)$ vektorral eltoljuk, hogy ne az origó, hanem a $(2, 1)$ pont körüli elforgatottat kapjuk meg:

$$\begin{bmatrix} 1 - \sqrt{3} \\ 1 + \sqrt{3} \end{bmatrix} + \begin{bmatrix} 2 \\ 1 \end{bmatrix} = \begin{bmatrix} 3 - \sqrt{3} \\ 2 + \sqrt{3} \end{bmatrix}$$

$\square$

**7.17. példa (Koordinátatengely körüli forgatás a térben).** *Írjuk fel a koordinátatengelyek körüli $\alpha$ szöggel való forgatás mátrixát.*

**Megoldás.** Tekintsük először a $z$-tengely körüli forgatást. Ekkor az $\mathbf{i}$ és $\mathbf{j}$ vektorok úgy transzformálódnak, mint a sík elforgatásánál, míg a $\mathbf{k}$ vektor helyben marad, tehát a bázisvektorok így transzformálódnak:

$$\begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix} \mapsto \begin{bmatrix} \cos\alpha \\ \sin\alpha \\ 0 \end{bmatrix}, \qquad \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix} \mapsto \begin{bmatrix} -\sin\alpha \\ \cos\alpha \\ 0 \end{bmatrix}, \qquad \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix} \mapsto \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}.$$

Így a $z$-tengely körüli forgatás mátrixa:

$$\begin{bmatrix} \cos\alpha & -\sin\alpha & 0 \\ \sin\alpha & \cos\alpha & 0 \\ 0 & 0 & 1 \end{bmatrix}.$$

Hasonlóképp kapjuk az $x$- és az $y$-tengely körüli forgatás mátrixát is:

$$\begin{bmatrix} 1 & 0 & 0 \\ 0 & \cos\alpha & -\sin\alpha \\ 0 & \sin\alpha & \cos\alpha \end{bmatrix}, \qquad \begin{bmatrix} \cos\alpha & 0 & \sin\alpha \\ 0 & 1 & 0 \\ -\sin\alpha & 0 & \cos\alpha \end{bmatrix}.$$

Ez utóbbi mátrix előjelhibásnak tűnhet, de nem az, ha itt is a forgatás tengelyiránya felől nézve pozitív a forgásirány, azaz $\mathbf{k}$-t forgatjuk $\mathbf{i}$-be, és nem fordítva. $\square$

**7.18. példa (A forgatás mátrixának inverze).** *Határozzuk meg a síkot $\alpha$ szöggel elforgató mátrix inverzét!*

**Megoldás.** Először megállapítjuk, hogy a forgatás mátrixa invertálható, ugyanis determinánsa nem 0, hiszen $\left|\begin{smallmatrix} \cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha \end{smallmatrix}\right| = \cos^2\alpha + \sin^2\alpha = 1$. Az egyik lehetséges megoldás, hogy egyszerűen a $2 \times 2$-es mátrixok 5.13. tételben megadott képletét használjuk:

$$\begin{bmatrix} \cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha \end{bmatrix}^{-1} = \begin{bmatrix} \cos\alpha & \sin\alpha \\ -\sin\alpha & \cos\alpha \end{bmatrix}.$$

Egy másik megoldás: a **??** állítás szerint két mátrix pontosan akkor inverze egymásnak, ha a hozzájuk tartozó lineáris leképezések is inverzei egymásnak. Az $\alpha$ szöggel való elforgatásnak, mint leképezésnek az inverze a $-\alpha$ szöggel való elforgatás, tehát mátrixaik is egymás inverzei. Eszerint

$$\begin{bmatrix} \cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha \end{bmatrix}^{-1} = \begin{bmatrix} \cos(-\alpha) & -\sin(-\alpha) \\ \sin(-\alpha) & \cos(-\alpha) \end{bmatrix} = \begin{bmatrix} \cos\alpha & \sin\alpha \\ -\sin\alpha & \cos\alpha \end{bmatrix}. \square$$

### Egyenes körüli forgatás a térben[^p263_1]

A tér egy egyenese körüli forgatás mátrixa megadható a vektori szorzással definiált mátrixleképezés (7.1. példa) segítségével.

**7.19. tétel (Egyenes körüli forgatás – Rodrigues-formula).** *Ha $\mathbf{e} \in \mathbb{R}^3$ egységvektor, akkor az $\mathbf{e}$ egyenese körüli $\alpha$ szögű forgatás tetszőleges $\mathbf{x}$ vektort az*

$$\mathbf{x}\cos\alpha + (\mathbf{e} \times \mathbf{x})\sin\alpha + \mathbf{e}(\mathbf{e} \cdot \mathbf{x})(1 - \cos\alpha) \tag{7.5}$$

*vektorba visz. E leképezés mátrixa*

$$\begin{aligned} \mathbf{R} &= \mathbf{I} + \sin\alpha [\mathbf{e}]_\times + (1 - \cos\alpha)[\mathbf{e}]_\times^2 \\ &= \mathbf{I} + \sin\alpha [\mathbf{e}]_\times + (1 - \cos\alpha)(\mathbf{e}\mathbf{e}^\mathsf{T} - \mathbf{I}) \end{aligned} \tag{7.6}$$

**Bizonyítás.** Ha $\mathbf{x}$ párhuzamos $\mathbf{e}$-vel, akkor elforgatottja önmaga, és valóban, ekkor $(\mathbf{e} \times \mathbf{x}) = \mathbf{0}$ és $\mathbf{e}(\mathbf{e} \cdot \mathbf{x}) = \mathbf{x}$, így a (7.5) képlet $\mathbf{x}$-et ad eredményül.

A továbbiakban legyen tehát $\mathbf{x}$ az $\mathbf{e}$-vel nem párhuzamos vektor. Jelölje $\mathbf{x}$-nek az $\mathbf{e}$-re eső merőleges vetületét $\mathbf{x_e}$, azaz legyen

$$\mathbf{x_e} = (\mathbf{e} \cdot \mathbf{x})\mathbf{e}.$$

Jelölje továbbá az $\mathbf{x}$ vektornak az $\mathbf{e}$-re merőleges síkra eső merőleges vetületét $\mathbf{x}_1$, azaz

$$\mathbf{x}_1 = \mathbf{x} - (\mathbf{e} \cdot \mathbf{x})\mathbf{e}.$$

Végül legyen $\mathbf{x}_2 = \mathbf{e} \times \mathbf{x}$. Világos, hogy $\mathbf{x}_1 \perp \mathbf{x}_2$. E két vektor hossza:

$$\begin{aligned} |\mathbf{x}_1| &= |\mathbf{x}|\sin\gamma, \\ |\mathbf{x}_2| &= |\mathbf{e}||\mathbf{x}|\sin\gamma = |\mathbf{x}|\sin\gamma, \end{aligned}$$

tehát $|\mathbf{x}_1| = |\mathbf{x}_2|$. Ha $R$ jelöli a forgató leképezést, akkor

$$\begin{aligned} R\mathbf{x}_1 &= \mathbf{x}_1 \cos\alpha + \mathbf{x}_2 \sin\alpha \\ &= (\mathbf{x} - (\mathbf{e} \cdot \mathbf{x})\mathbf{e})\cos\alpha + (\mathbf{e} \times \mathbf{x})\sin\alpha. \end{aligned}$$

Mivel $R\mathbf{x_e} = \mathbf{x_e}$, és $\mathbf{x} = \mathbf{x_e} + \mathbf{x}_1$, ezért

$$\begin{aligned} R\mathbf{x} &= R\mathbf{x_e} + R\mathbf{x}_1 \\ &= (\mathbf{e} \cdot \mathbf{x})\mathbf{e} + (\mathbf{x} - (\mathbf{e} \cdot \mathbf{x})\mathbf{e})\cos\alpha + (\mathbf{e} \times \mathbf{x})\sin\alpha \\ &= \mathbf{x}\cos\alpha + (\mathbf{e} \times \mathbf{x})\sin\alpha + \mathbf{e}(\mathbf{e} \cdot \mathbf{x})(1 - \cos\alpha). \end{aligned}$$

Ezzel igazoltuk a (7.5) formulát. A leképezés könnyen átírható mátrixszorzat alakba:

$$\cos\alpha \mathbf{I}\mathbf{x} + [\mathbf{e}]_\times \mathbf{x}\sin\alpha + (1 - \cos\alpha)(\mathbf{e}\mathbf{e}^\mathsf{T})\mathbf{x},$$

> *7. ábra. Az $\mathbf{x}$ vektor $R\mathbf{x}$-be való elforgatása az $\mathbf{e}$ egyenes körül; $\mathbf{x}_1$ vetülete az $\mathbf{e}$-re merőleges síkban $R\mathbf{x}_1$-be fordul.*

így a forgatás $\mathbf{R}$ mátrixa

$$\mathbf{R} = \cos\alpha \mathbf{I} + \sin\alpha [\mathbf{e}]_\times + (1 - \cos\alpha)(\mathbf{e}\mathbf{e}^\mathsf{T}).$$

Egyszerű számolással igazolható, hogy $\mathbf{e}\mathbf{e}^\mathsf{T} - \mathbf{I} = [\mathbf{e}]_\times^2$ (ld. **??** feladat), amiből azonnal adódnak a (7.6) képletei. $\square$

**7.20. példa (Forgatás mátrixa).** *Írjuk fel annak a leképezésnek a mátrixát, mely az $(2, 0, 1)$ vektor egyenese körül $\alpha$ szöggel forgat, ahol $\cos\alpha = \frac{2}{3}$. Határozzuk meg a $(3, 2, -1)$ vektor elforgatottját! Más eredményt kapnánk-e, ha a $(-2, 0, -1)$ vektor egyenese körül kéne forgatnunk $\alpha$ szöggel?*

**Megoldás.** Az $\mathbf{e} = \frac{1}{\sqrt{5}}(2, 0, 1)$ egységvektorral

$$[\mathbf{e}]_\times = \frac{1}{\sqrt{5}}\begin{bmatrix} 0 & -1 & 0 \\ 1 & 0 & -2 \\ 0 & 2 & 0 \end{bmatrix}, \quad [\mathbf{e}]_\times^2 = \frac{1}{5}\begin{bmatrix} -1 & 0 & 2 \\ 0 & -5 & 0 \\ 2 & 0 & -4 \end{bmatrix}.$$

Így rövid számolás után a forgatás mátrixa

$$\begin{aligned} \mathbf{R} &= \mathbf{I} + \sin\alpha [\mathbf{e}]_\times + (1 - \cos\alpha)[\mathbf{e}]_\times^2 \\ &= \begin{bmatrix} 14/15 & -1/3 & 2/15 \\ 1/3 & 2/3 & -2/3 \\ 2/15 & 2/3 & 11/15 \end{bmatrix} = \frac{1}{15}\begin{bmatrix} 14 & -5 & 2 \\ 5 & 10 & -10 \\ 2 & 10 & 11 \end{bmatrix} \end{aligned}$$

és $\mathbf{R} \cdot (3, 2, -1) = (2, 3, 1)$.

A $(-2, 0, -1)$ vektor körüli forgatással más eredményt kapnánk, hisz a forgatás iránya a vektor irányától is függ, és mivel az az ellenkezőjére változott, így a forgásirány is ellenkező irányú lesz. $\square$

> *Az térbeli egyenes körüli forgatás kvaterniókkal (ld. **??** oldal) is számolható. Egy másik lehetőség, hogy visszavezetjük az egyenes körüli forgatást koordinátatengely körüli forgatásra (ld. a **??** feladatot).*

### Merőleges vetítés

A merőlegesség mind az elméleti matematika, mind az alkalmazások fontos fogalma.

**7.21. állítás (Egyenesre való merőleges vetítés mátrixa).** *A sík vagy a tér vektorait egy $\mathbf{b}$ irányvektorú egyenesre merőlegesen vetítő leképezés mátrixa*

$$\mathbf{P} = \frac{1}{\mathbf{b}^\mathsf{T}\mathbf{b}}\mathbf{b}\mathbf{b}^\mathsf{T}. \tag{7.7}$$

*Speciálisan e mátrix alakja*

$$\mathbf{P} = \mathbf{e}\mathbf{e}^\mathsf{T}, \tag{7.8}$$

*ha az egyenes irányvektora az $\mathbf{e}$ egységvektor.*

**Bizonyítás.** A 7.7. állítás szerint a merőleges vetítés lineáris leképezés, van tehát mátrixa. Az 1.23. tétel szerint ha $\mathbf{x}$ egy tetszőleges vektor és $\mathbf{e}$ egy egységvektor, akkor $\mathbf{x}$-nek a $\mathbf{e}$ egyenesére eső merőleges vetülete

$$\operatorname{proj}_\mathbf{e} \mathbf{x} = (\mathbf{x} \cdot \mathbf{e}) \cdot \mathbf{e}.$$

Ennek mátrixszorzással való átírása:

$$(\mathbf{x} \cdot \mathbf{e})\mathbf{e} = \mathbf{e}(\mathbf{e} \cdot \mathbf{x}) = \mathbf{e}(\mathbf{e}^\mathsf{T}\mathbf{x}) = (\mathbf{e}\mathbf{e}^\mathsf{T})\mathbf{x},$$

tehát

$$\operatorname{proj}_\mathbf{e} \mathbf{x} = (\mathbf{e}\mathbf{e}^\mathsf{T})\mathbf{x}.$$

Ebből kiolvasható, hogy az $\mathbf{e}$ egységvektor-irányú egyenesre való merőleges vetítés mátrixa

$$\mathbf{P} = \mathbf{e}\mathbf{e}^\mathsf{T}.$$

Ha $\mathbf{b}$ egy tetszőleges zérustól különböző vektor, akkor az $\mathbf{e} = \mathbf{b}/|\mathbf{b}|$ jelölés mellett $\mathbf{P} = \mathbf{e}\mathbf{e}^\mathsf{T} = \mathbf{b}\mathbf{b}^\mathsf{T}/|\mathbf{b}|^2$, ami $|\mathbf{b}|^2 = \mathbf{b}^\mathsf{T}\mathbf{b}$ behelyettesítésével bizonyítja a tételt. $\square$

> *A tételből következik, hogy a sík vektorait az $x$-tengellyel $\alpha$ szöget bezáró egyenesre merőlegesen vetítő lineáris leképezés mátrixa*

$$\mathbf{P} = \begin{bmatrix} \cos\alpha \\ \sin\alpha \end{bmatrix} \begin{bmatrix} \cos\alpha & \sin\alpha \end{bmatrix} = \begin{bmatrix} \cos^2\alpha & \sin\alpha\cos\alpha \\ \sin\alpha\cos\alpha & \sin^2\alpha \end{bmatrix}, \tag{7.9}$$

mivel ekkor $\mathbf{e} = (\cos\alpha, \sin\alpha)$.

**7.22. állítás (Síkra való merőleges vetítés mátrixa).** *A tér vektorait az $\mathbf{n}$ normálvektorú síkra merőlegesen vetítő leképezés mátrixa*

$$\mathbf{P} = \mathbf{I} - \mathbf{n}\mathbf{n}^\mathsf{T}.$$

**Bizonyítás.** Egy tetszőleges $\mathbf{x}$ vektornak a normálvektor egyenesére eső merőleges vetülete a 7.21. állítás szerint $\operatorname{proj}_\mathbf{n} \mathbf{x} = (\mathbf{n}\mathbf{n}^\mathsf{T})\mathbf{x}$. Az $\mathbf{n}$ normálvektorú $S$ síkra eső merőleges vetületre $\operatorname{proj}_S \mathbf{x} = \mathbf{x} - \operatorname{proj}_\mathbf{n} \mathbf{x} = \mathbf{x} - (\mathbf{n}\mathbf{n}^\mathsf{T})\mathbf{x}$ (lásd a 7.11. ábrát). Ebből következik, hogy a síkra való merőleges vetítés mátrixa $\mathbf{I} - \mathbf{n}\mathbf{n}^\mathsf{T}$.

**7.23. példa (Síkra eső merőleges vetület kiszámítása).** *Határozzuk meg a $(-2, 1, 3)$ vektornak a $2x + y - 2z = 0$ egyenletű síkra eső merőleges vetületét! (ld. később a 7.45. példát)*

**Megoldás.** A sík egy normálvektora $(2, 1, -2)$, így az egységnyi hosszú normálvektor $\mathbf{n} = (2/3, 1/3, -2/3)$. A $\mathbf{P}$ vetítő mátrix

$$\mathbf{P} = \mathbf{I}_3 - \mathbf{n}\mathbf{n}^\mathsf{T} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} - \frac{1}{9}\begin{bmatrix} 2 \\ 1 \\ -2 \end{bmatrix}\begin{bmatrix} 2 & 1 & -2 \end{bmatrix} = \frac{1}{9}\begin{bmatrix} 5 & -2 & 4 \\ -2 & 8 & 2 \\ 4 & 2 & 5 \end{bmatrix}.$$

> *7.11. ábra: Vektor vetülete egy síkra*

Így a $(-2, 1, 3)$ vektor merőleges vetülete

$$\frac{1}{9}\begin{bmatrix} 5 & -2 & 4 \\ -2 & 8 & 2 \\ 4 & 2 & 5 \end{bmatrix}\begin{bmatrix} -2 \\ 1 \\ 3 \end{bmatrix} = \begin{bmatrix} 0 \\ 2 \\ 1 \end{bmatrix}.$$

$\square$

### Tükrözés

Vizsgáljuk meg síkban az egyenesre való és térben a síkra való tükrözés mátrixát!

**7.24. állítás (Síkbeli tükrözés mátrixa).** *A sík vektorait az $x$-tengellyel $\alpha/2$ szöget bezáró egyenesre tükröző lineáris leképezés mátrixa*

$$\begin{bmatrix} \cos\alpha & \sin\alpha \\ \sin\alpha & -\cos\alpha \end{bmatrix}.$$

**Bizonyítás.** A 7.7. állítás szerint a tükrözés lineáris leképezés. A vektorok tükörképe csak a tükrözés tengelyének állásától függ, ami most $\alpha/2$. Helyvektorokban gondolkodva a tükrözés tengelyének át kell mennie az origón.

A mellékelt ábráról leolvasható, hogy $\mathbf{i}$ tükörképe $A\mathbf{i} = \left[\begin{smallmatrix} \cos\alpha \\ \sin\alpha \end{smallmatrix}\right]$, míg a $\mathbf{j}$ vektoré $A\mathbf{j} = \left[\begin{smallmatrix} \sin\alpha \\ -\cos\alpha \end{smallmatrix}\right]$. Így a sík vektorait az első tengellyel $\alpha/2$ szöget bezáró egyenesre tükröző leképezés mátrixa $\left[\begin{smallmatrix} \cos\alpha & \sin\alpha \\ \sin\alpha & -\cos\alpha \end{smallmatrix}\right]$. $\square$

> *7.12. ábra: Az $\mathbf{i}$ és $\mathbf{j}$ vektorok egy egyenesre való tükörképe*

A térben egy síkra való tükrözés feladata a síkra való vetítéshez hasonlóan adódik:

**7.25. állítás (Síkra való tükrözés mátrixa).** *Igazoljuk, hogy a tér vektorait az $\mathbf{n}$ normálvektorú síkra tükröző leképezés mátrixa*

$$\mathbf{P} = \mathbf{I} - 2\mathbf{n}\mathbf{n}^\mathsf{T}.$$

**Bizonyítás.** A 7.22. állításhoz hasonlóan minden leolvasható a mellékelt 7.13. ábráról: ha $\mathbf{x}$-ből kivonjuk a $\operatorname{proj}_\mathbf{n} \mathbf{x}$ vektort, akkor a síkra eső vetületet kapjuk, így ha a kétszeresét vonjuk ki, a tükörképhez jutunk. E leképezés mátrixa az $\mathbf{x} - 2(\mathbf{n}\mathbf{n}^\mathsf{T})\mathbf{x} = (\mathbf{I} - 2\mathbf{n}\mathbf{n}^\mathsf{T})\mathbf{x}$ összefüggésből adódik.

> *7.13. ábra: Vektor tükörképe egy síkra*

### Vetítés

Tárgyaltuk a merőleges vetítést. Vetíteni azonban másként is lehet.

**7.26. példa (Vetítés síkra).** *Határozzuk meg annak a lineáris leképezésnek a mátrixát, mely a tér összes pontját az $(1, -2, 1)$ vektorral párhuzamos irányban az $x + y + 2z = 0$ egyenletű síkra vetíti.*

**Megoldás.** Elemi geometriai eszközökkel könnyen látható, hogy e leképezés valóban lineáris. Világos, hogy a képtér az $x + y + 2z = 0$ egyenletű sík összes vektora lesz. E teret megkapjuk a sík egyenletéből, ha azt mint egyenletrendszert megoldjuk. A megoldás $(-s - 2t, s, t)$, azaz e tér bázisa a $(-1, 1, 0)$, és a $(-2, 0, 1)$ vektorokból áll. Könnyen látható az is, hogy a nulltérbe pontosan azok a vektorok tartoznak, amelyek párhuzamosak a vetítő vektorral, azaz az $(1, -2, 1)$ vektorral. A vetítés $\mathbf{P}$ mátrixa tehát eleget kell hogy tegyen az alábbi feltételeknek:

$$\mathbf{P}\begin{bmatrix} -1 \\ 1 \\ 0 \end{bmatrix} = \begin{bmatrix} -1 \\ 1 \\ 0 \end{bmatrix}, \quad \mathbf{P}\begin{bmatrix} -2 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} -2 \\ 0 \\ 1 \end{bmatrix}, \quad \mathbf{P}\begin{bmatrix} 1 \\ -2 \\ 1 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}.$$

E három feltétel egyetlen mátrixszorzásba foglalható:

$$\mathbf{P}\begin{bmatrix} -1 & -2 & 1 \\ 1 & 0 & -2 \\ 0 & 1 & 1 \end{bmatrix} = \begin{bmatrix} -1 & -2 & 0 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{bmatrix}, \text{ ahonnan } \mathbf{P} = \begin{bmatrix} 0 & -1 & -2 \\ 2 & 3 & 4 \\ -1 & -1 & -1 \end{bmatrix}$$

$\square$

> *Az előző feladatban kapott $\mathbf{P}$ mátrix eleget tesz a $\mathbf{P}^2 = \mathbf{P}$ összefüggésnek. Ez szemléletesen világos is, hisz ha $P$ jelöli a lineáris transzformációt, akkor arra is igaz, hogy $P^2 = P$. Ez abból következik, hogy a $P$ vetítés az $x + y + 2z = 0$ egyenletű sík minden vektorát helyben hagyja, másrészt bármely $\mathbf{x}$ vektor esetén $P\mathbf{x}$ ebben a síkban van, így a második vetítés már minden vektort helyben hagy.*

### Eltolás

Az eltolás nem lineáris leképezés, hisz minden vektorhoz egy konstans vektort ad, tehát a nullvektort nem a nullvektorba képzi. Egy szellemes ötlettel mégis megvalósítható lineáris leképezéssel.

El szeretnénk tolni a síkot egy $(a, b)$ vektorral. Az ötlet az, hogy beágyazzuk a síkot a térbe, és ott keresünk egy olyan térbeli lineáris leképezést, amely ezt a síkot eltolja (hogy másutt meg mit csinál, nem is érdekes). Legyen tehát a vizsgált sík a $z = 1$ egyenletű sík, és keressük azt a lineáris $T$ leképezést, melyre

$$T\begin{bmatrix} x \\ y \\ 1 \end{bmatrix} = \begin{bmatrix} x + a \\ y + b \\ 1 \end{bmatrix}.$$

Ez ugyan még mindig nem tűnik lineárisnak, de mivel $z = 1$, ezért a

$$T\begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} x + az \\ y + bz \\ z \end{bmatrix}$$

leképezés már minden tekintetben megfelel. E leképezés mátrixa

$$\mathbf{T} = T\begin{bmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \end{bmatrix} = \begin{bmatrix} 1 & 0 & a \\ 0 & 1 & b \\ 0 & 0 & 1 \end{bmatrix}.$$

Hasonló ötlettel a tér eltolása is megvalósítható. A tér tetszőleges $(x, y, z) \mapsto (x + a, y + b, z + c)$ eltolása megvalósítható a következő mátrixleképezéssel:

$$\mathbf{T} = \begin{bmatrix} 1 & 0 & 0 & a \\ 0 & 1 & 0 & b \\ 0 & 0 & 1 & c \\ 0 & 0 & 0 & 1 \end{bmatrix}, \quad \mathbf{T}\begin{bmatrix} x \\ y \\ z \\ 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 & a \\ 0 & 1 & 0 & b \\ 0 & 0 & 1 & c \\ 0 & 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} x \\ y \\ z \\ 1 \end{bmatrix} = \begin{bmatrix} x + a \\ y + b \\ z + c \\ 1 \end{bmatrix}.$$

## Feladatok

### Forgatás

**7.2.** Adjunk új megoldást a 7.20. példabeli kérdésre: írjuk fel annak a leképezésnek a mátrixát, mely az $(2, 0, 1)$ vektor egyenese körül $\alpha$ szöggel forgat, ahol $\cos\alpha = \frac{2}{3}$. (Először forgassuk a $(2, 0, 1)$ vektor egyenesét az $x$-tengelybe, majd e körül forgassuk el a tér vektorait!)

### Bizonyítások

**7.3.** Mutassuk meg, hogy tetszőleges $H \subseteq \mathbb{R}^n$ vektorhalmazra a következő két állítás ekvivalens:

1. bármely véges sok $H$-beli vektor bármely lineáris kombinációja $H$-ban van;

2. bármely $H$-beli vektor tetszőleges skalárszorosa, és bármely két $H$-beli vektor összege $H$-ban van.

**7.4. Lineáris függetlenség egy szükséges és elégséges feltétele** A $V$ vektorrendszer pontosan akkor lineárisan független, ha $\operatorname{span}(V)$ bármely vektora csak egyféleképp áll elő $V$ lineáris kombinációjaként.

**7.5. Sortér és nulltér** A 2.35. példában megoldottuk a

$$\begin{alignedat}{9}
x_1 &{}+{}& 2x_2 &{}+{}& & & x_3 &{}+{}& 2x_4 &{}+{}& x_5 &{}={}& 0 \\
x_1 &{}+{}& 2x_2 &{}+{}& 3&x_3 &{}+{}& & 3x_4 &{}+{}& x_5 &{}={}& 0 \\
3x_1 &{}+{}& 6x_2 &{}+{}& 7&x_3 &{}+{}& & 8x_4 &{}+{}& 3x_5 &{}={}& 0
\end{alignedat}$$

egyenletrendszert. A megoldása

$$\begin{bmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \\ x_5 \end{bmatrix} = \begin{bmatrix} -2s - \frac{3}{2}t - u \\ s \\ -\frac{1}{2}t \\ t \\ u \end{bmatrix} = \begin{bmatrix} -2 \\ 1 \\ 0 \\ 0 \\ 0 \end{bmatrix}s + \begin{bmatrix} -\frac{3}{2} \\ 0 \\ -\frac{1}{2} \\ 1 \\ 0 \end{bmatrix}t + \begin{bmatrix} -1 \\ 0 \\ 0 \\ 0 \\ 1 \end{bmatrix}u.$$

Ezt fölhasználva fejben számolva adjunk meg egy olyan vektorrendszert, amely kifeszíti az

$$\begin{alignedat}{9}
-2x_1 &{}+{}& x_2 & & & & & & &{}={}& 0 \\
-3x_1 & & &{}-{}& x_3 &{}+{}& 2x_4 & &{}={}& 0 \\
-x_1 & & & & & & &{}+{}& x_5 &{}={}& 0
\end{alignedat}$$

homogén lineáris egyenletrendszer megoldásai alterét.

**7.6.** Általánosítsuk az előző feladat eredményét tetszőleges homogén lineáris egyenletrendszerre!

## Hasonlóság

*Mátrixok hasonlósága kulcsfogalom: látni fogjuk, hogy két mátrix pontosan akkor hasonló, ha ugyanannak a lineáris leképezésnek a mátrixai egy-egy megfelelő bázisban.*

### Lineáris transzformáció mátrixa különböző bázisokban

Tegyük fel, hogy az $L$ lineáris transzformáció mátrixa az $\mathcal{A}$ bázisban $\mathbf{L}_\mathcal{A}$, a $\mathcal{B}$ bázisban $\mathbf{L}_\mathcal{B}$, és az $\mathcal{A}$ bázisról a $\mathcal{B}$-re való áttérés mátrixa $\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}$. Kérdés, hogy mi a kapcsolat e három mátrix között.

A válasz egyszerűen megadható, ha megvizsgáljuk egy tetszőleges $\mathbf{x}$ vektornak és $L\mathbf{x}$ képének koordinátás alakját. Ezeket jelölje $[\mathbf{x}]_\mathcal{A}$, $[\mathbf{x}]_\mathcal{B}$, $[L\mathbf{x}]_\mathcal{A}$, $[L\mathbf{x}]_\mathcal{B}$. Az áttérés mátrixa köztük a következő kapcsolatokat létesíti:

$$[\mathbf{x}]_\mathcal{B} = \mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}[\mathbf{x}]_\mathcal{A}, \quad [L\mathbf{x}]_\mathcal{B} = \mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}[L\mathbf{x}]_\mathcal{A},$$

az $\mathbf{L}_\mathcal{A}$ és $\mathbf{L}_\mathcal{B}$ mátrixok pedig a következőket:

$$\mathbf{L}_\mathcal{A}[\mathbf{x}]_\mathcal{A} = [L\mathbf{x}]_\mathcal{A}, \quad \mathbf{L}_\mathcal{B}[\mathbf{x}]_\mathcal{B} = [L\mathbf{x}]_\mathcal{B}.$$

Ezeket összevetve kapjuk, hogy

$$\mathbf{L}_\mathcal{B}[\mathbf{x}]_\mathcal{B} = [L\mathbf{x}]_\mathcal{B} = \mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}[L\mathbf{x}]_\mathcal{A} = \mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}\mathbf{L}_\mathcal{A}[\mathbf{x}]_\mathcal{A},$$

azaz

$$\mathbf{L}_\mathcal{B}\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}[\mathbf{x}]_\mathcal{A} = \mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}\mathbf{L}_\mathcal{A}[\mathbf{x}]_\mathcal{A}$$

vagyis csak mátrixokra fölírva:

$$\mathbf{L}_\mathcal{B}\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}} = \mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}\mathbf{L}_\mathcal{A} \text{ vagy átrendezve } \mathbf{L}_\mathcal{A} = \mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}^{-1}\mathbf{L}_\mathcal{B}\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}.$$

A bizonyítás – és általában a mátrixok közti összefüggés – egy diagrammon is szemléltethető. A diagramm csúcsaiban az $\mathbf{x}$ és az $L\mathbf{x}$ vektorok szerepelnek. A függőleges nyilak az $\mathcal{A}$ bázisról a $\mathcal{B}$-re való áttérés irányát mutatják. Ebbe az irányba lépve az eredmény a $\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}$ mátrixszal való szorzással kapható meg. A vízszintes nyilak az $L$ transzformáció hatását mutatják. Ezirányba lépve az $\mathbf{L}_\mathcal{A}$, illetve $\mathbf{L}_\mathcal{B}$ mátrixszal való szorzás adja meg az eredményt. A bal alsó sarokban lévő $[\mathbf{x}]_\mathcal{A}$ vektorból a jobb felsőben lévő $[L\mathbf{x}]_\mathcal{B}$ vektorba kétféleképp juthatunk: vagy először hat az $L$ transzformáció, aztán áttérünk a $\mathcal{B}$ bázisra, vagy előbb áttérünk a $\mathcal{B}$ bázisra, és azután hat $L$. Tehát

$$\begin{aligned} [\mathbf{x}]_\mathcal{A} &\longrightarrow \mathbf{L}_\mathcal{A}[\mathbf{x}]_\mathcal{A} \longrightarrow \mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}\mathbf{L}_\mathcal{A}[\mathbf{x}]_\mathcal{A}, \\ [\mathbf{x}]_\mathcal{A} &\longrightarrow \mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}[\mathbf{x}]_\mathcal{A} \longrightarrow \mathbf{L}_\mathcal{B}\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}[\mathbf{x}]_\mathcal{A}. \end{aligned}$$

A két végeredménynek meg kell egyeznie. Így ugyanazt kaptuk, amit behelyettesítésekkel. Összefoglalva tehát bizonyítottuk az alábbi tételt:

> *7.14. ábra: A vízszintes nyilak az $L$ transzformáció hatását mutatják. E hatás elérhető az $\mathbf{L}_\mathcal{A}$, illetve az $\mathbf{L}_\mathcal{B}$ mátrixszal való szorzással. A függőleges nyilak a bázisscsere irányát mutatják, ami a $\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}$ mátrixszal való szorzással valósítható meg. Az ábráról leolvasható a $\mathbf{L}_\mathcal{B}\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}} = \mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}\mathbf{L}_\mathcal{A}$ összefüggés.*

> *7.15. ábra: Ezt az ábrát az előzőből egyetlen nyíl és felirata megváltoztatásával kapjuk. Erről közvetlenül leolvasható az $\mathbf{L}_\mathcal{A} = \mathbf{C}_{\mathcal{A}\leftarrow\mathcal{B}}\mathbf{L}_\mathcal{B}\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}$, illetve az $\mathbf{L}_\mathcal{A} = \mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}^{-1}\mathbf{L}_\mathcal{B}\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}$ összefüggés. Ehhez az $[\mathbf{x}]_\mathcal{A}$-ból az $[L\mathbf{x}]_\mathcal{A}$-ba vezető két utat kell bejárnunk, és közben a megfelelő mátrixokat összeszorozunk.*

> *7.16. ábra: A $T$ transzformáció a bűvös kocka egy lapon lévő 3 csúcsát ciklikusan fölcseréli egymással (a jobb felső sarokban lévőt a bal sarokba, azt a középsőbe viszi), az összes többit helyben hagyja.*

**7.27. tétel (Lineáris transzformáció mátrixai közti kapcsolat).** *Legyen az $L$ lineáris transzformáció mátrixa az $\mathcal{A}$ bázisban $\mathbf{L}_\mathcal{A}$, a $\mathcal{B}$ bázisban $\mathbf{L}_\mathcal{B}$, és az $\mathcal{A}$ bázisról a $\mathcal{B}$-re való áttérés mátrixa $\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}$. Ekkor*

$$\mathbf{L}_\mathcal{A} = \mathbf{C}_{\mathcal{A}\leftarrow\mathcal{B}}\mathbf{L}_\mathcal{B}\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}, \text{ azaz } \mathbf{L}_\mathcal{A} = \mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}^{-1}\mathbf{L}_\mathcal{B}\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}.$$

**7.28. példa (Lineáris transzformáció mátrixa másik bázisban).** *Az $L$ lineáris transzformáció mátrixa $\mathbf{L} = \left[\begin{smallmatrix} -1 & 6 \\ -2 & 6 \end{smallmatrix}\right]$. Írjuk fel mátrixát az $\mathcal{B} = \{(-2, -1), (3, 2)\}$ bázisban!*

**Megoldás.** A megadott $\mathcal{B}$ bázisról a standard $\mathcal{E}$ bázisra való áttérés mátrixa a bázisvektorokból, mint oszlopvektorokból áll, azaz

$$\mathbf{C}_{\mathcal{E}\leftarrow\mathcal{B}} = \begin{bmatrix} -2 & 3 \\ -1 & 2 \end{bmatrix}.$$

Ekkor az $\mathbf{L} = \mathbf{L}_\mathcal{E}$ jelölést használva

$$\mathbf{L}_\mathcal{B} = \mathbf{C}_{\mathcal{E}\leftarrow\mathcal{B}}^{-1}\mathbf{L}_\mathcal{E}\mathbf{C}_{\mathcal{E}\leftarrow\mathcal{B}} = \begin{bmatrix} -2 & 3 \\ -1 & 2 \end{bmatrix}^{-1}\begin{bmatrix} -1 & 6 \\ -2 & 6 \end{bmatrix}\begin{bmatrix} -2 & 3 \\ -1 & 2 \end{bmatrix} = \begin{bmatrix} 2 & 0 \\ 0 & 3 \end{bmatrix}. \square$$

### Mátrixok hasonlósága

Tudjuk, hogy ha egy $L$ lineáris transzformációnak egy $\mathcal{A}$ bázisban $\mathbf{A}$ a mátrixa, egy $\mathcal{B}$ bázisban $\mathbf{B}$, akkor a két mátrix kapcsolata

$$\mathbf{B} = \mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}\mathbf{A}\mathbf{C}_{\mathcal{A}\leftarrow\mathcal{B}},$$

ahol $\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}} = \mathbf{C}_{\mathcal{A}\leftarrow\mathcal{B}}^{-1}$ az áttérés mátrixa. E tény motiválja a következő definíciót:

**7.29. definíció (Hasonlóság).** *Azt mondjuk, hogy az $n \times n$-es $\mathbf{A}$ mátrix hasonló a $\mathbf{B}$ mátrixhoz, ha létezik olyan invertálható $\mathbf{C}$ mátrix, hogy*

$$\mathbf{B} = \mathbf{C}^{-1}\mathbf{A}\mathbf{C}. \tag{7.10}$$

*Jelölés: $\mathbf{A} \sim \mathbf{B}$.*

> *Ha $\mathbf{A}$ hasonló $\mathbf{B}$-hez, akkor $\mathbf{B}$ is hasonló $\mathbf{A}$-hoz. Legyen ugyanis $\hat{\mathbf{C}} = \mathbf{C}^{-1}$. Akkor*

$$\mathbf{A} = \mathbf{C}\mathbf{B}\mathbf{C}^{-1} = (\mathbf{C}^{-1})^{-1}\mathbf{B}\mathbf{C}^{-1} = \hat{\mathbf{C}}^{-1}\mathbf{B}\hat{\mathbf{C}}.$$

> *Így tehát mondható az, hogy $\mathbf{A}$ és $\mathbf{B}$ hasonlóak, mivel a hasonlóság szimmetrikus reláció.*

> *Például $\left[\begin{smallmatrix} 0 & 1 \\ 0 & 0 \end{smallmatrix}\right] \sim \left[\begin{smallmatrix} -6 & 4 \\ -9 & 6 \end{smallmatrix}\right]$, ugyanis*

$$\begin{bmatrix} -6 & 4 \\ -9 & 6 \end{bmatrix} = \begin{bmatrix} -2 & -1 \\ -3 & -2 \end{bmatrix}\begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}\begin{bmatrix} -2 & 1 \\ 3 & -2 \end{bmatrix}, \quad \left(\mathbf{C} = \begin{bmatrix} -2 & 1 \\ 3 & -2 \end{bmatrix}\right).$$

> *7.17. ábra: A fölső kockán látható három csúcskockát kell kicserélni. Először a három csúcsot egy síkba mozgatjuk ($C$ transzformáció), majd az előző ábrán látható $T$ transzformációval kicseréljük őket, végül $C$ inverzének alkalmazása után minden kocka a helyére kerül. Így a transzformációk egymás utáni elvégzését szorzásnak tekintve a megoldást a $CTC^{-1}$ transzformáció adja.*

[^p263_1]: A jelölésben $[\mathbf{e}]_\times$ az $\mathbf{e}$ vektorhoz tartozó vektoriális szorzás mátrixát jelöli.

> *A $\mathbf{B} = \mathbf{C}^{-1}\mathbf{A}\mathbf{C}$ összefüggés ekvivalens a $\mathbf{C}\mathbf{B} = \mathbf{A}\mathbf{C}$ összefüggéssel (invertálható $\mathbf{C}$ esetén), és ezt az összefüggést egyszerűbb lehet ellenőrizni. Példánk esetében*
> $$\begin{bmatrix} -2 & 1 \\ 3 & -2 \end{bmatrix}\begin{bmatrix} -6 & 4 \\ -9 & 6 \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}\begin{bmatrix} -2 & 1 \\ 3 & -2 \end{bmatrix} \quad \left( = \begin{bmatrix} 3 & -2 \\ 0 & 0 \end{bmatrix} \right).$$

> *A $\mathbf{C}^{-1}\mathbf{A}\mathbf{C}$ alakú kifejezést az $\mathbf{A}$ mátrix $\mathbf{C}$-vel való konjugáltjának nevezik. A konjugált más algebrai struktúrákban is fontos szerepet kap. Példaként véges halmazok permutációinak struktúráját említjük, ahol permutációk szorzatán egymás után való elvégzésüket értjük, aminek eredménye a halmaz egy permutációja. Konkrétan a Rubik kockán mutatjuk meg a konjugált szerepét a 7.16. és a 7.17. ábrák segítségével.*

**7.30. tétel (Hasonló mátrixok hatása).** *Két mátrix pontosan akkor hasonló, ha van két olyan bázis, melyekben e két mátrix ugyanannak a lineáris transzformációnak a mátrixa.*

Bizonyítás. Ha $\mathbf{A}$ és $\mathbf{B}$ hasonlóak, azaz $\mathbf{B} = \mathbf{C}^{-1}\mathbf{A}\mathbf{C}$, akkor $\mathbf{C}$-t, mint a $\mathcal{C} = \{\mathbf{c}_1, \mathbf{c}_2, \ldots, \mathbf{c}_n\}$ bázisról az $\mathcal{E}$ standard bázisra való áttérés mátrixát tekintve azt kapjuk, hogy

$$\mathbf{B} = \mathbf{C}_{\mathcal{E}\leftarrow\mathcal{C}}^{-1}\mathbf{A}\mathbf{C}_{\mathcal{E}\leftarrow\mathcal{C}}.$$

Eszerint ha $L$ az $\mathbf{A}$ mátrixhoz tartozó mátrixleképezés, azaz $\mathbf{A}$ az $L$ mátrixa a standard bázisban, akkor $\mathbf{B}$ az $L$ mátrixa a $\mathcal{C}$ bázisban. A fordított állítást a bevezetőben igazoltuk. $\square$

**7.31. tétel (Hasonlóságra invariáns tulajdonságok).** *Ha $\mathbf{A}$ és $\mathbf{B}$ hasonló mátrixok, azaz $\mathbf{A} \sim \mathbf{B}$, akkor*

*a)* $\operatorname{r}(\mathbf{A}) = \operatorname{r}(\mathbf{B})$,

*b)* $\dim(\mathcal{N}(\mathbf{A})) = \dim(\mathcal{N}(\mathbf{B}))$,

*c)* $\det(\mathbf{A}) = \det(\mathbf{B})$,

*d)* $\operatorname{trace}(\mathbf{A}) = \operatorname{trace}(\mathbf{B})$.

> *A latin eredetű invariáns szó jelentése: átalakulás közben változatlanul maradó. Matematikában valamilyen művelet, átalakítás, leképezés során változatlanul maradó kifejezést, mennyiséget, értéket. Esetünkben a bázis megváltoztatása után is változatlanul maradó mennyiségeket jelenti.*

Bizonyítás. A tétel első két állítása azonnal látszik abból, hogy a hasonló mátrixokhoz az előző tétel szerint létező lineáris transzformáció képtere (nulltere) az egyik bázisban az egyik, a másik bázisban a másik mátrix oszlopterével (nullterével) egyezik meg. Mindennek ellenére mindegyik állítást bizonyítjuk arra építve, hogy valamely invertálható $\mathbf{C}$ mátrixszal $\mathbf{A} = \mathbf{C}^{-1}\mathbf{B}\mathbf{C}$ és átrendezve $\mathbf{B} = \mathbf{C}\mathbf{A}\mathbf{C}^{-1}$.

*a)* A szorzatmátrix rangjára vonatkozó 4.33. állítás szerint $\operatorname{r}(\mathbf{A}) = \operatorname{r}(\mathbf{C}^{-1}\mathbf{B}\mathbf{C}) \leqslant \operatorname{r}(\mathbf{B})$ és $\operatorname{r}(\mathbf{B}) = \operatorname{r}(\mathbf{C}\mathbf{A}\mathbf{C}^{-1}) \leqslant \operatorname{r}(\mathbf{A})$. Innen $\operatorname{r}(\mathbf{A}) = \operatorname{r}(\mathbf{B})$.

*b)* $\dim(\mathcal{N}(\mathbf{A})) = n - \operatorname{r}(\mathbf{A}) = n - \operatorname{r}(\mathbf{B}) = \dim(\mathcal{N}(\mathbf{B}))$.

*c)* $\det(\mathbf{A}) = \det(\mathbf{C}^{-1}\mathbf{B}\mathbf{C}) = \det(\mathbf{C}^{-1})\det(\mathbf{B})\det(\mathbf{C}) = \det(\mathbf{B})$, mivel $\det(\mathbf{C})\det(\mathbf{C}^{-1}) = 1$.

*d)* $\operatorname{trace}(\mathbf{A}) = \operatorname{trace}(\mathbf{C}^{-1}\mathbf{B}\mathbf{C}) = \operatorname{trace}(\mathbf{B}\mathbf{C}\mathbf{C}^{-1}) = \operatorname{trace}(\mathbf{B})$, és itt kihasználtuk, hogy két mátrix szorzatának nyoma nem változik, ha a tényezők sorrendjét felcseréljük. $\square$

### Lineáris leképezés mátrixa különböző bázispárokban

Legyen a $\mathcal{U}$ vektortér két bázisa $\mathcal{A}$ és $\mathcal{B}$, a $\mathcal{V}$ vektortér két bázisa $\mathcal{A}'$ és $\mathcal{B}'$. Tegyük fel, hogy az $L : \mathcal{U} \to \mathcal{V}$ lineáris leképezés mátrixa az $\{\mathcal{A}, \mathcal{A}'\}$ bázispárban $\mathbf{L}_{\mathcal{A}'\leftarrow\mathcal{A}}$, a $\{\mathcal{B}, \mathcal{B}'\}$ bázispárban $\mathbf{L}_{\mathcal{B}'\leftarrow\mathcal{B}}$, és a bázisok közti áttérések mátrixai $\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}$, illetve $\mathbf{D}_{\mathcal{B}'\leftarrow\mathcal{A}'}$. Mi a kapcsolat e mátrixok között?

Jelölje az $\mathbf{x}$ és $L\mathbf{x}$ vektorok koordinátás alakját $[\mathbf{x}]_{\mathcal{A}}$, $[\mathbf{x}]_{\mathcal{B}}$, $[L\mathbf{x}]_{\mathcal{A}'}$, $[L\mathbf{x}]_{\mathcal{B}'}$. Az áttérés mátrixa köztük a következő kapcsolatokat létesíti:

$$[\mathbf{x}]_{\mathcal{B}} = \mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}[\mathbf{x}]_{\mathcal{A}}, \qquad [L\mathbf{x}]_{\mathcal{B}'} = \mathbf{D}_{\mathcal{B}'\leftarrow\mathcal{A}'}[L\mathbf{x}]_{\mathcal{A}'},$$

az $\mathbf{L}_{\mathcal{A}'\leftarrow\mathcal{A}}$ és $\mathbf{L}_{\mathcal{B}'\leftarrow\mathcal{B}}$ mátrixok pedig a következőket:

$$[L\mathbf{x}]_{\mathcal{A}'} = \mathbf{L}_{\mathcal{A}'\leftarrow\mathcal{A}}[\mathbf{x}]_{\mathcal{A}}, \qquad [L\mathbf{x}]_{\mathcal{B}'} = \mathbf{L}_{\mathcal{B}'\leftarrow\mathcal{B}}[\mathbf{x}]_{\mathcal{B}}.$$

A megfelelő behelyettesítésekkel kapjuk, hogy

$$\mathbf{L}_{\mathcal{B}'\leftarrow\mathcal{B}}\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}[\mathbf{x}]_{\mathcal{A}} = \mathbf{D}_{\mathcal{B}'\leftarrow\mathcal{A}'}\mathbf{L}_{\mathcal{A}'\leftarrow\mathcal{A}}[\mathbf{x}]_{\mathcal{A}}.$$

Ezzel bizonyítottuk a következő tételt:

> *7.18. ábra: Az ábráról leolvasható az $\mathbf{L}_{\mathcal{A}'\leftarrow\mathcal{A}} = \mathbf{D}_{\mathcal{A}'\leftarrow\mathcal{B}'}\mathbf{L}_{\mathcal{B}'\leftarrow\mathcal{B}}\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}$, illetve az $\mathbf{L}_{\mathcal{A}'\leftarrow\mathcal{A}} = \mathbf{D}_{\mathcal{B}'\leftarrow\mathcal{A}'}^{-1}\mathbf{L}_{\mathcal{B}'\leftarrow\mathcal{B}}\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}$ összefüggés. Ehhez az $[\mathbf{x}]_{\mathcal{A}}$-ból az $[L\mathbf{x}]_{\mathcal{A}'}$-be vezető két utat kell bejárnunk, és közben a megfelelő mátrixokat összeszoroznunk.*

**7.32. tétel (Lineáris leképezés mátrixai közti kapcsolat).** *Legyen az $L$ lineáris leképezés mátrixa az $\{\mathcal{A}, \mathcal{A}'\}$ bázispárban $\mathbf{L}_{\mathcal{A}'\leftarrow\mathcal{A}}$, a $\{\mathcal{B}, \mathcal{B}'\}$ bázispárban $\mathbf{L}_{\mathcal{B}'\leftarrow\mathcal{B}}$, és legyenek a bázisok közti áttérések mátrixai $\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}$, illetve $\mathbf{D}_{\mathcal{B}'\leftarrow\mathcal{A}'}$. Ekkor*

$$\mathbf{D}_{\mathcal{B}'\leftarrow\mathcal{A}'}\mathbf{L}_{\mathcal{A}'\leftarrow\mathcal{A}} = \mathbf{L}_{\mathcal{B}'\leftarrow\mathcal{B}}\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}, \text{ azaz } \mathbf{L}_{\mathcal{A}'\leftarrow\mathcal{A}} = \mathbf{D}_{\mathcal{B}'\leftarrow\mathcal{A}'}^{-1}\mathbf{L}_{\mathcal{B}'\leftarrow\mathcal{B}}\mathbf{C}_{\mathcal{B}\leftarrow\mathcal{A}}.$$

**7.33. következmény (Lineáris leképezések mátrixai).** *Ha $\mathbf{A}$ és $\mathbf{B}$ ugyanannak az $\mathbb{R}^n \to \mathbb{R}^m$ lineáris leképezésnek két mátrixa különböző bázispárokban, akkor*

*a) a két mátrix rangja megegyezik,*

*b) a két mátrix nullítása megegyezik.*

Bizonyítás. A 7.31. tétel bizonyításához hasonlóan: ha valamely invertálható $\mathbf{C}$ és $\mathbf{D}$ mátrixszal $\mathbf{A} = \mathbf{D}^{-1}\mathbf{B}\mathbf{C}$, akkor átrendezve $\mathbf{B} = \mathbf{D}\mathbf{A}\mathbf{C}^{-1}$, akkor a szorzatmátrix rangjára vonatkozó 4.33. állítás szerint $\operatorname{r}(\mathbf{A}) = \operatorname{r}(\mathbf{D}^{-1}\mathbf{B}\mathbf{C}) \leqslant \operatorname{r}(\mathbf{B})$ és $\operatorname{r}(\mathbf{B}) = \operatorname{r}(\mathbf{D}\mathbf{A}\mathbf{C}^{-1}) \leqslant \operatorname{r}(\mathbf{A})$. Így $\operatorname{r}(\mathbf{A}) = \operatorname{r}(\mathbf{B})$.

Innen $\dim(\mathcal{N}(\mathbf{A})) = n - \operatorname{r}(\mathbf{A}) = n - \operatorname{r}(\mathbf{B}) = \dim(\mathcal{N}(\mathbf{B}))$. $\square$

**7.34. példa (Lineáris leképezés mátrixa másik bázisban).** *Az $L$ lineáris transzformáció mátrixa $\mathbf{L} = \begin{bmatrix} -1 & 6 & 2 \\ -2 & 6 & 3 \end{bmatrix}$. Írjuk fel mátrixát az $\mathcal{B} = \{(1, 0, 0), (1, 1, 0), (2, 1, 1)\}$ és a $\mathcal{B}' = \{(-2, -1), (3, 2)\}$ bázisok alkotta bázispárban!*

Megoldás. A megadott két bázisról a standard bázisra való áttérések mátrixai

$$\mathbf{C}_{\mathcal{E}_3\leftarrow\mathcal{B}} = \begin{bmatrix} 1 & 1 & 2 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{bmatrix}, \quad \mathbf{D}_{\mathcal{E}_2\leftarrow\mathcal{B}'} = \begin{bmatrix} -2 & 3 \\ -1 & 2 \end{bmatrix}.$$

Ekkor az $\mathbf{L} = \mathbf{L}_{\mathcal{E}_2\leftarrow\mathcal{E}_3}$ jelölést használva

$$\begin{aligned}
\mathbf{L}_{\mathcal{B}'\leftarrow\mathcal{B}} &= \mathbf{D}_{\mathcal{E}_2\leftarrow\mathcal{B}'}^{-1}\mathbf{L}_{\mathcal{E}_2\leftarrow\mathcal{E}_3}\mathbf{C}_{\mathcal{E}_3\leftarrow\mathcal{B}} \\
&= \begin{bmatrix} -2 & 3 \\ -1 & 2 \end{bmatrix}^{-1}\begin{bmatrix} -1 & 6 & 2 \\ -2 & 6 & 3 \end{bmatrix}\begin{bmatrix} 1 & 1 & 2 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} -4 & 2 & 3 \\ -3 & 3 & 4 \end{bmatrix}.
\end{aligned}$$
$\square$

### Lineáris leképezés rangja, nullítása, lineáris transzformáció determinánsa és nyoma

Fontos következménye a hasonlóságra invariáns tulajdonságokról szóló tételnek, hogy a rang, a determináns és a nyom fogalma természetes módon átvihető mátrixokról véges dimenziós terek közötti lineáris leképezésekre.

**7.35. definíció (Lineáris leképezés rangja és nullítása).** *A lineáris $L : \mathbb{R}^n \to \mathbb{R}^m$ leképezés rangján képterének dimenzióját értjük, azaz $\operatorname{r}(L) = \dim(\operatorname{Im}(L))$. A magtér dimenzióját, azaz a $\dim(\operatorname{Ker}(L))$ számot a lineáris leképezés nullításának nevezzük.*

**7.36. definíció (Lineáris transzformáció determinánsa és nyoma).** *A lineáris $L : \mathbb{R}^n \to \mathbb{R}^n$ transzformáció det $L$-lel jelölt determinánsán (illetve trace $L$-lel jelölt nyomán) az $L$ leképezés bármely bázisban fölírt mátrixának determinánsát (illetve nyomát) értjük. A definíció értelmes, hisz e két érték mindegyike független a bázis választásától.*

**7.37. példa (Rang, nullítás, determináns, nyom).** *Igazoljuk az alábbi transzformációkra vonatkozó értékeket:*

| Síkbeli | rang | nullítás | determináns | nyom |
|---|---|---|---|---|
| $\alpha$-szögű forgatás | 2 | 0 | 1 | $2\cos\alpha$ |
| egyenesre való tükrözés | 2 | 0 | $-1$ | 0 |
| egyenesre való merőleges vetítés | 1 | 1 | 0 | 1 |

| Térbeli | rang | nullítás | determináns | nyom |
|---|---|---|---|---|
| egyenes körüli $\alpha$-szögű forgatás | 3 | 0 | 1 | $2\cos\alpha$ |
| síkra való tükrözés | 3 | 0 | $-1$ | 1 |
| egyenesre való merőleges vetítés | 1 | 2 | 0 | 1 |
| síkra való merőleges vetítés | 2 | 1 | 0 | 2 |

Az állítások mindegyike kiszámolható a korábban levezetett mátrixokból, vagy egy megfelelően választott bázisban felírt mátrixából. Ezt az Olvasóra hagyjuk.

**7.38. tétel (Dimenziótétel lineáris leképezésekre).** *Legyen $L : \mathbb{R}^n \to \mathbb{R}^m$ egy lineáris leképezés. Ekkor*

$$\operatorname{r}(L) + \dim(\operatorname{Ker}(L)) = n.$$

Bizonyítás. A tétel a mátrixokra vonatkozó dimenziótétel átvitele lineáris leképezésekre. Ha $\mathbf{L}$ az $L$ leképezés egy mátrixa, akkor $\operatorname{r}(L) = \operatorname{r}(\mathbf{L})$, $\dim(\operatorname{Ker}(L)) = \dim(\mathcal{N}(\mathbf{L}))$ és a mátrixokra vonatkozó dimenziótétel szerint $\operatorname{r}(\mathbf{L}) + \dim(\mathcal{N}(\mathbf{L})) = n$, ezért $\operatorname{r}(L) + \dim(\operatorname{Ker}(L)) = n$. $\square$

> *A tételt rang-nullítási tételnek is szokás nevezni, mivel a leképezés rangjának és nullításának összegéről szól.*

**7.39. tétel (Lineáris transzformáció determinánsa és a térfogat).** *Ha $L : \mathbb{R}^n \to \mathbb{R}^n$ egy lineáris transzformáció és az $\{\mathbf{a}_1, \ldots, \mathbf{a}_n\}$ vektorok által kifeszített paralelepipedon térfogata $V$, akkor az $\{L\mathbf{a}_1, \ldots, L\mathbf{a}_n\}$ vektorok által kifeszített paralelepipedon térfogata $\det(L)V$.*

Bizonyítás. Legyen $\mathbf{A} = [\mathbf{a}_1 | \mathbf{a}_2 | \ldots | \mathbf{a}_n]$, tehát $V = \det(\mathbf{A})$ és legyen $\mathbf{L}$ az $L$ transzformáció standard mátrixa. Ekkor

$$\begin{aligned}
\det[L\mathbf{a}_1 | L\mathbf{a}_2 | \ldots | L\mathbf{a}_n] &= \det[\mathbf{L}\mathbf{a}_1 | \mathbf{L}\mathbf{a}_2 | \ldots | \mathbf{L}\mathbf{a}_n] = \det(\mathbf{L}\mathbf{A}) \\
&= \det(\mathbf{L})\det(\mathbf{A}) = \det(L)V.
\end{aligned}$$
$\square$

## Feladatok

### Mátrixleképezések

*Döntsük el, hogy az alábbi leképezések mátrixleképezések-e! Amelyik igen, annak írjuk fel a mátrixát! Legyen $\mathbf{a} = (a_1, a_2, a_3)$ egy tetszőleges vektor.*

**7.7.** $A : \mathbf{x} \mapsto \mathbf{a} \cdot \mathbf{x}$,

**7.8.** $A : \mathbf{x} \mapsto \mathbf{a} + \mathbf{x}$,

**7.9.** $A : \mathbf{x} \mapsto \frac{1}{2}(\mathbf{a} \times \mathbf{x})$,

**7.10.** $A : \mathbf{x} \mapsto \mathbf{a}(\mathbf{a} \cdot \mathbf{x})$.

**7.11. Mátrixleképezések közti műveletek** Bizonyítsuk be a 7.2. tétel állításait!

**7.12. Inverz mátrixleképezések** Bizonyítsuk be a 7.3. tételt!

### Lineáris leképezések

**7.13. Lineáris leképezés ekvivalens definíciói** Igazoljuk a 7.8. tétel állításainak ekvivalenciáját!

*Döntsük el, hogy az alábbi leképezések lineáris leképezések-e!*

**7.14.** $A : (x, y) \mapsto (x + 2y, x - y)$.

**7.15.** Legyen $\mathcal{P}_3$ a legföljebb 3-adfokú polinomok halmaza, és legyen $D : \mathcal{P}_3 \to \mathcal{P}_3 : p(x) \mapsto p'(x)$.

**7.16.** Legyen $\mathcal{D}_{[0,1]}$ a $[0, 1]$ intervallumon differenciálható függvények halmaza, és $\mathcal{F}_{[0,1]}$ a $[0, 1]$ intervallumon értelmezett függvények halmaza. Legyen továbbá $A : \mathcal{D}_{[0,1]} \to \mathcal{F}_{[0,1]}; f(x) \mapsto xf'(x)$.

### Lineáris leképezés mátrixa

### Hasonló mátrixok

**7.17. A nyom invariáns a hasonlóságra nézve** Igazoljuk, hogy hasonló mátrixok nyoma azonos!

## Merőleges vetítés és a legjobb közelítés

*A legjobb közelítés, a legkisebb négyzetek elve, vagy a lineáris regresszió az alkalmazásokban igen gyakran előforduló fontos fogalmak. Lényegük az $\mathbb{R}^n$ egy alterére való merőleges vetítésének fogalmával jól megvilágítható.*

### Alterek összege és direkt összege

A koordinátázás általánosításaként tekinthetünk arra a gondolatra, hogy a tér minden vektorát különböző alterekbe eső vektorok összegeként állítsuk elő, és egyértelműen. Ez vezet az alterek direkt összegének fogalmához.

Ha $\mathcal{U}$ és $\mathcal{V}$ ugyanannak a vektortérnek az alterei, akkor az egyesítésük által generált alteret $\mathcal{U} + \mathcal{V}$-vel jelöljük, és a két altér összegének nevezzük.

**7.40. állítás (Alterek összege).** *Ha $\mathcal{U}$ és $\mathcal{V}$ a $\mathcal{W}$ altér két altere, akkor az egyesítésük által generált $\mathcal{U} + \mathcal{V}$ altér pontosan azokból a vektorokból áll, melyek egy $\mathcal{U}$- és egy $\mathcal{V}$-beli vektor összegeként előállnak.*

Bizonyítás. Ha $\mathbf{x}$ egy $\mathcal{U} + \mathcal{V}$-beli vektor, akkor előáll néhány $\mathcal{U}$- és $\mathcal{V}$-beli vektor lineáris kombinációjaként. De a lineáris kombináció $\mathcal{U}$-beli vektorokat tartalmazó része egy $\mathcal{U}$-beli $\mathbf{u}$ vektort ad, míg a többi egy $\mathcal{V}$-beli $\mathbf{v}$ vektort, így $\mathbf{x} = \mathbf{u} + \mathbf{v}$. Fordítva, minden $\mathbf{u} + \mathbf{v}$ alakú vektor $\mathcal{U}$- és $\mathcal{V}$-beli vektorok lineáris kombinációja, így benne van $\mathcal{U} + \mathcal{V}$-ben. $\square$

Szemléltetésül: ha például $\mathcal{W} = \mathbb{R}^3$, és $\mathcal{U}$ és $\mathcal{V}$ egy-egy egymástól különböző 1-dimenziós altere, akkor az egyesítésük által generált 2-dimenziós altérbe pontosan azok a vektorok tartoznak, melyek egy $\mathcal{U}$-beli $\mathbf{u}$ és egy $\mathcal{V}$-beli $\mathbf{v}$ vektor összegei (ld. 7.19. ábra).

Legyen $\mathcal{V}$ és $\mathcal{W}$ az $\mathcal{U}$ vektortér két tetszőleges altere. Azt mondjuk, hogy $\mathcal{W}$ a $\mathcal{V}$ kiegészítő altere, vagy komplementer altere vagy hogy $\mathcal{V}$ és $\mathcal{W}$ egymás kiegészítő (komplementer) alterei, ha

$$\mathcal{V} \cap \mathcal{W} = \{\mathbf{0}\}, \quad \mathcal{V} + \mathcal{W} = \mathcal{U},$$

azaz a két altérnek a zérusvektoron kívül nincs közös eleme, és $\mathcal{U}$ minden vektora előáll $\mathcal{V}$- és $\mathcal{W}$-beli elemek összegeként!

E fogalom a sík koordinátázására emlékeztető dolog: a síkban az origón átmenő két koordinátatengely vektorai a két alteret adják, melyekben csak a zérusvektor közös, és a sík minden vektora (egyértelműen) előáll az egyikből és a másikból vett vektor összegeként.

> *7.19. ábra: $\mathcal{U} + \mathcal{V}$ bármely vektora előáll $\mathbf{u} + \mathbf{v}$ alakban*

**7.41. tétel (Kiegészítő alterek tulajdonságai).** *Legyen $\mathcal{V}$ és $\mathcal{W}$ az $\mathcal{U}$ vektortér két altere és legyen $\mathcal{V}$ egy bázisa $\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_r\}$, $\mathcal{W}$ egy bázisa $\{\mathbf{w}_1, \mathbf{w}_2, \ldots, \mathbf{w}_k\}$. Az alábbi állítások ekvivalensek:*

*a) $\mathcal{V} \cap \mathcal{W} = \{\mathbf{0}\}$ és $\mathcal{V} + \mathcal{W} = \mathcal{U}$, azaz $\mathcal{V}$ és $\mathcal{W}$ kiegészítő alterek,*

*b) $\mathcal{U}$ minden vektora egyértelműen előáll egy $\mathcal{V}$- és egy $\mathcal{W}$-beli vektor összegeként,*

*c) $\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_r\} \cup \{\mathbf{w}_1, \mathbf{w}_2, \ldots, \mathbf{w}_k\}$ az $\mathcal{U}$ vektortér egy bázisa,*

*d) $\mathcal{V} \cap \mathcal{W} = \{\mathbf{0}\}$ és $\dim\mathcal{V} + \dim\mathcal{W} = \dim\mathcal{U}$.*

Bizonyítás. *a)* $\Rightarrow$ *b)* : Meg kell mutatnunk, hogy minden vektor egyértelműen áll elő egy $\mathcal{V}$- és egy $\mathcal{W}$-beli vektor összegeként. Legyen $\mathbf{u} \in \mathcal{U}$ olyan vektor, hogy $\mathbf{u} = \mathbf{v}_1 + \mathbf{w}_1 = \mathbf{v}_2 + \mathbf{w}_2$, ahol $\mathbf{v}_1, \mathbf{v}_2 \in \mathcal{V}$ és $\mathbf{w}_1, \mathbf{w}_2 \in \mathcal{W}$. Átrendezés után $\mathbf{v}_1 - \mathbf{v}_2 = \mathbf{w}_2 - \mathbf{w}_1$. Ennek bal oldalán $\mathcal{V}$-beli, jobb oldalán $\mathcal{W}$-beli vektor áll, amik csak a nullvektor esetén lehetnek azonosak, mivel $\mathcal{V} \cap \mathcal{W} = \{\mathbf{0}\}$. Így $\mathbf{v}_1 = \mathbf{v}_2$ és $\mathbf{w}_1 = \mathbf{w}_2$.

*b)* $\Rightarrow$ *c)* : Mivel bármely $\mathbf{u} \in \mathcal{U}$ vektor előáll $\mathbf{v} + \mathbf{w}$ alakban, ahol $\mathbf{v} \in \mathcal{V}$ és $\mathbf{w} \in \mathcal{W}$, e két vektor pedig elő a bázisvektorok lineáris kombinációjaként, ezért a két bázis egyesítésével kapott vektorrendszer kifeszíti $\mathcal{U}$-t. Másrészt megmutatjuk, hogy a vektorrendszer független vektorokból áll. Tegyük fel, hogy

$$c_1\mathbf{v}_1 + \cdots + c_r\mathbf{v}_r + d_1\mathbf{w}_1 + \cdots + d_k\mathbf{w}_k = \mathbf{0}.$$

Mivel a $\mathbf{0}$ vektor egyértelműen áll elő $\mathbf{v} + \mathbf{w}$ alakban, és egy előállítása a $\mathbf{0} + \mathbf{0}$, ezért

$$c_1\mathbf{v}_1 + \cdots + c_r\mathbf{v}_r = \mathbf{0}, \quad \text{és} \quad d_1\mathbf{w}_1 + \cdots + d_k\mathbf{w}_k = \mathbf{0}.$$

Innen pedig a bázisvektorok lineáris függetlenségéből következik, hogy minden együttható 0. Tehát a két altér bázisának egyesítése lineárisan független vektorokból áll, így $\mathcal{U}$ egy bázisát adja.

*c)* $\Rightarrow$ *d)* : $\mathcal{U}$ egy bázisa $r + k$ elemű, így $\dim\mathcal{U} = r + k = \dim\mathcal{V} + \dim\mathcal{W}$. $\mathcal{V} \cap \mathcal{W} = \{\mathbf{0}\}$ az előzőekben látottakhoz hasonlóan igazolható.

*d)* $\Rightarrow$ *a)* : Csak azt kell megmutatni, hogy ha $\mathcal{V} \cap \mathcal{W} = \{\mathbf{0}\}$ és $\dim\mathcal{V} + \dim\mathcal{W} = \dim\mathcal{U}$, akkor $\mathcal{U} = \mathcal{V} + \mathcal{W}$. Ehhez legyen $\mathcal{V}$ egy bázisa $\{\mathbf{v}_1, \ldots, \mathbf{v}_r\}$, $\mathcal{W}$ egy bázisa $\{\mathbf{w}_1, \ldots, \mathbf{w}_k\}$. Ha egyesítésük bázis $\mathcal{U}$-ban, akkor kész vagyunk, hisz minden vektor e bázis vektorainak lineáris kombinációja, mely felbomlik $\mathcal{V}$-beli és $\mathcal{W}$-beli részre. Ezért tegyük fel, hogy e vektorok lineárisan összefüggők, azaz a nullvektor megkapható valamely nemtriviális lineáris kombinációjukkal:

$$c_1\mathbf{v}_1 + \cdots + c_r\mathbf{v}_r + d_1\mathbf{w}_1 + \cdots + d_k\mathbf{w}_k = \mathbf{0}.$$

Átrendezve

$$c_1\mathbf{v}_1 + \cdots + c_r\mathbf{v}_r = -d_1\mathbf{w}_1 - \cdots - d_k\mathbf{w}_k,$$

ami ellentmond a $\mathcal{V} \cap \mathcal{W} = \{\mathbf{0}\}$ feltételnek, mivel indirekt feltevésünk szerint nem minden együttható 0. $\square$

**7.42. definíció (Direkt összeg).** *Ha a $\mathcal{V}$ és $\mathcal{W}$ alterek $\mathcal{U}$ kiegészítő alterei, akkor azt mondjuk, hogy $\mathcal{U}$ a $\mathcal{V}$ és $\mathcal{W}$ alterek direkt összege, amit az alterek egyszerű összegétől megkülönböztetendő $\mathcal{V} \oplus \mathcal{W}$ jelöl.*

Már láttunk példát kiegészítő alterekre, hisz a sortér és a nulltér dimenziójának összege $n$, és a két altérnek a nullvektoron kívül nincs közös eleme, így $\mathcal{S}(\mathbf{A})$ és $\mathcal{N}(\mathbf{A})$ kiegészítő alterek, azaz $\mathbb{R}^n = \mathcal{S}(\mathbf{A}) \oplus \mathcal{N}(\mathbf{A})$ bármely valós $m \times n$-es $\mathbf{A}$ mátrixra.

Egy $\mathcal{W}$ altér esetén $\mathcal{W}^\perp$ jelölte a $\mathcal{W}$-re merőleges vektorok alterét. Ezt merőleges kiegészítő altérnek nevezzük, de azt, hogy ez valóban kiegészítő altér-e, még nem mutattuk meg.

**7.43. tétel (A merőleges kiegészítő altér tulajdonságai).** *Legyen $\mathcal{W}$ az $n$-dimenziós valós vagy komplex $\mathcal{U}$ vektortér egy altere. Ekkor*

*a) $\mathcal{W} \cap \mathcal{W}^\perp = \{\mathbf{0}\}$,*

*b) $\mathcal{W} + \mathcal{W}^\perp = \mathcal{U}$,*

*c) $\mathcal{U}$ minden vektora egyértelműen előáll egy $\mathcal{W}$- és egy $\mathcal{W}^\perp$-beli vektor összegeként,*

*d) $(\mathcal{W}^\perp)^\perp = \mathcal{W}$.*

Bizonyítás. *a)* igaz, hisz ha $\mathbf{x} \in \mathcal{W} \cap \mathcal{W}^\perp$, akkor $\mathbf{x} \cdot \mathbf{x} = 0$, ami csak a $\mathbf{0}$ vektorra áll fönn.

*b)* abból adódik, hogy az előző, a kiegészítő alterekről szóló tétel szerint, ha két altér dimenzióinak összege $n$, és a két altér metszete csak a zérusvektorból áll, akkor a két altér összege $\mathbb{R}^n$. Esetünkben a két altér $\mathcal{W}$ és $\mathcal{W}^\perp$. Ha $\mathcal{W}$ egy bázisának vektoraiból, mint sorvektorokból mátrixot képzünk, annak sortere lesz $\mathcal{W}$, nulltere $\mathcal{W}^\perp$ lesz, és a sortér és nulltér dimenzióinak összege valóban $n$ a dimenziótétel szerint.

Ugyancsak az előző tétel és az *a)* és *b)* állítások következménye, hogy a „merőleges kiegészítő alterek" valóban kiegészítő alterek, ami bizonyítja *c)*-t.

*d)* bizonyításához megmutatjuk, hogy $\mathcal{W} \subseteq (\mathcal{W}^\perp)^\perp$ és $\mathcal{W} \supseteq (\mathcal{W}^\perp)^\perp$, ami bizonyítja, hogy $\mathcal{W} = (\mathcal{W}^\perp)^\perp$.

Legyen $\mathbf{w}$ a $\mathcal{W}$ tér egy tetszőleges vektora. Mivel $\mathcal{W}^\perp$ épp azokból a vektorokból áll, melyek merőlegesek $\mathcal{W}$ minden vektorára, ezért $\mathbf{w}$ merőleges $\mathcal{W}^\perp$ minden vektorára. Ez viszont épp azt jelenti, hogy $\mathbf{w}$ benne van a $(\mathcal{W}^\perp)^\perp$ altérben, tehát $\mathcal{W} \subseteq (\mathcal{W}^\perp)^\perp$.

A fordított tartalmazás bizonyításához legyen $\mathbf{w} \in (\mathcal{W}^\perp)^\perp$. A *b)* pont szerint e vektor előáll $\mathbf{w} = \mathbf{v} + \mathbf{v}^\perp$ alakban, ahol $\mathbf{v} \in \mathcal{W}$ és $\mathbf{v}^\perp \in \mathcal{W}^\perp$. Elég lenne megmutatnunk, hogy $\mathbf{v}^\perp = \mathbf{0}$. A $(\mathcal{W}^\perp)^\perp$ és $\mathcal{W}^\perp$ merőlegessége miatt $\mathbf{w} \cdot \mathbf{v}^\perp = 0$, így

$$0 = \mathbf{w} \cdot \mathbf{v}^\perp = \mathbf{w} \cdot (\mathbf{v} + \mathbf{v}^\perp) = \mathbf{v} \cdot \mathbf{v}^\perp + \mathbf{v}^\perp \cdot \mathbf{v}^\perp = \mathbf{v}^\perp \cdot \mathbf{v}^\perp,$$

hisz $\mathbf{v} \cdot \mathbf{v}^\perp = 0$. A $\mathbf{v}^\perp \cdot \mathbf{v}^\perp = 0$ egyenlőség viszont csak $\mathbf{v}^\perp = \mathbf{0}$ esetén áll fönn. Így tehát $\mathbf{w} = \mathbf{v}$, azaz $\mathbf{w} \in \mathcal{W}$, ami bizonyítja az állítást. $\square$

### Merőleges vetítés $\mathbb{R}^n$ egy alterére

Azt mondjuk, hogy az $\mathcal{V}$ vektortér egy $\mathbf{v}$ vektorának a $\mathcal{W} \leqslant \mathcal{V}$ altérre eső merőleges vetülete a $\mathbf{w}$ vektor, ha $\mathbf{w} \in \mathcal{W}$, és $\mathbf{v} - \mathbf{w}$ merőleges a $\mathcal{W}$ altérre, azaz $\mathbf{v} - \mathbf{w} \in \mathcal{W}^\perp$. A $\mathbf{v} - \mathbf{w}$ vektort a $\mathbf{v}$ vektor $\mathcal{W}$ altérre merőleges összetevőjének nevezzük.

Kérdés, hogy létezik-e minden vektornak az altérre eső merőleges vetülete, és hogy egyértelmű-e. A 7.43. tétel *c)* pontja szerint ha $\mathcal{W} \leqslant \mathcal{V}$, akkor minden $\mathbf{v} \in \mathcal{V}$ vektor egyértelműen felbomlik egy $\mathcal{W}$-beli $\mathbf{w}$ és egy $\mathcal{W}^\perp$-beli $\mathbf{w}^\perp$ vektor összegére. Ez azt jelenti, hogy a $\mathbf{w}$ vektor épp a $\mathbf{v}$ vektor $\mathcal{W}$ altérre eső merőleges vetülete. Ezt az egyértelműen létező vektort – összhangban korábbi jelölésünkkel – jelölje $\operatorname{proj}_{\mathcal{W}}\mathbf{v}$.

Egy mátrix teljes oszloprangú, ha oszlopai lineárisan függetlenek, azaz rangja megegyezik oszlopainak számával, azaz ha oszlopai az oszlopterének bázisát alkotják. Hasonlóan definiálható a teljes sorrangú mátrix fogalma.

**7.44. tétel (Altérre való vetítés mátrixa).** *Ha $\mathcal{W}$ az $\mathbb{R}^n$ egy altere, és az $\mathbf{A}$ mátrix oszlopvektorai a $\mathcal{W}$ egy bázisát alkotják (tehát $\mathbf{A}$ teljes oszloprangú), akkor a $\mathcal{W}$ altérre való merőleges vetítés, azaz a $\operatorname{proj}_{\mathcal{W}}$ leképezés mátrixa*

$$\mathbf{A}(\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}}.$$

Bizonyítás. Legyen a $\mathbf{v} \in \mathbb{R}^n$ vektor $\mathcal{W}$-re eső merőleges vetülete $\mathbf{w}$. Mivel $\mathbf{A}$ definíciója szerint $\mathbf{A}$ oszloptere $\mathcal{W}$, ezért létezik olyan $\mathbf{x}$ vektor, hogy $\mathbf{A}\mathbf{x} = \mathbf{w}$. Másrészt $\mathcal{W} = \mathcal{O}(\mathbf{A})$ miatt $\mathcal{W}^\perp = \mathcal{N}(\mathbf{A}^{\mathsf{T}})$, így $\mathbf{v} - \mathbf{w}$ benne van $\mathbf{A}^{\mathsf{T}}$ nullterében, mivel a merőleges vetület definíciója szerint $\mathbf{v} - \mathbf{w}$ merőleges $\mathcal{W}$-re. Eszerint $\mathbf{A}^{\mathsf{T}}(\mathbf{v} - \mathbf{w}) = \mathbf{0}$, azaz $\mathbf{A}^{\mathsf{T}}(\mathbf{v} - \mathbf{A}\mathbf{x}) = \mathbf{0}$. Átrendezve kapjuk, hogy

$$\mathbf{A}^{\mathsf{T}}\mathbf{A}\mathbf{x} = \mathbf{A}^{\mathsf{T}}\mathbf{v}.$$

Az $\mathbf{A}$ mátrix teljes oszloprangú, így a **??** tétel szerint $\mathbf{A}^{\mathsf{T}}\mathbf{A}$ invertálható, azaz $\mathbf{x} = (\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}}\mathbf{v}$, amiből kapjuk, hogy $\operatorname{proj}_{\mathcal{W}}\mathbf{v} = \mathbf{w} = \mathbf{A}\mathbf{x} = \mathbf{A}(\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}}\mathbf{v}$, ami bizonyítja az állítást. $\square$

> *A tételbeli képlet könnyen megjegyezhető, hisz összhangban van az egyenesre való merőleges vetítés (7.7) képletével. Ha ugyanis az $\mathbf{A}$ mátrix egyetlen oszlopból áll, $(\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}$ egyetlen szám, ami kiemelhető, azaz az $\mathbf{A} = \mathbf{b}$ jelöléssel $\mathbf{b}(\mathbf{b}^{\mathsf{T}}\mathbf{b})^{-1}\mathbf{b}^{\mathsf{T}} = \frac{1}{\mathbf{b}^{\mathsf{T}}\mathbf{b}}\mathbf{b}\mathbf{b}^{\mathsf{T}}$.*

**7.45. példa (Merőleges vetület kiszámítása).** *Határozzuk meg a $(-2, 1, 3)$ vektornak az $(1, 0, 1)$ és a $(-1, 2, 0)$ vektorok által kifeszített síkra eső merőleges vetületét! (ld. még a 7.23. példát)*

Megoldás. Az altér bázisvektoraiból képzett mátrix

$$\mathbf{A} = \begin{bmatrix} 1 & -1 \\ 0 & 2 \\ 1 & 0 \end{bmatrix}, \text{ amiből } \mathbf{A}(\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}} = \frac{1}{9}\begin{bmatrix} 5 & -2 & 4 \\ -2 & 8 & 2 \\ 4 & 2 & 5 \end{bmatrix}.$$

Így a $(-2, 1, 3)$ vektor merőleges vetülete

$$\frac{1}{9}\begin{bmatrix} 5 & -2 & 4 \\ -2 & 8 & 2 \\ 4 & 2 & 5 \end{bmatrix}\begin{bmatrix} -2 \\ 1 \\ 3 \end{bmatrix} = \begin{bmatrix} 0 \\ 2 \\ 1 \end{bmatrix}.$$

Ez a feladat megegyezik a 7.23. példabelivel, mivel ennek a síknak is $2x + y - 2z = 0$ az egyenlete, ugyanis $(1, 0, 1) \times (-1, 2, 0) = (-2, -1, 2)$. $\square$

### Melyik mátrix merőleges vetítés mátrixa?

Olyan – könnyen ellenőrizhető – feltételeket keresünk egy lineáris leképezés mátrixára, melyek segítségével azonnal megállapítható, hogy a mátrixleképezés merőleges vetítés-e.

**7.46. tétel (Merőleges vetítés mátrixai).** *Egy $\mathbf{P}$ mátrix pontosan akkor merőleges vetítés mátrixa, ha $\mathbf{P} = \mathbf{P}^{\mathsf{T}} = \mathbf{P}^2$.*

Bizonyítás. A $\mathbf{P} = \mathbf{P}^2$ feltétel szükségessége szemléletesen világos, hisz minden $P$ lineáris leképezés, mely az egész $\mathbb{R}^n$ teret egy altérre – nevezetesen $\operatorname{Im}P$-re – vetíti, az altér vektorait helyben hagyja. Tehát $P^2\mathbf{x} = P\mathbf{x}$ minden $\mathbf{x}$-re fennáll, így ennek az összefüggésnek $P$ minden mátrixára is igaznak kell lennie.

($\Longrightarrow$) Tegyük fel, hogy $\mathbf{P}$ egy $P$ merőleges vetítés mátrixa $\mathbb{R}^n$ standard bázisában. Tekintsük $\operatorname{Im}(P) = \mathcal{O}(\mathbf{P})$ egy tetszőleges bázisát, és legyen $\mathbf{A}$ az a mátrix, melynek e bázis elemei az oszlopai. A 7.44. tétel szerint ekkor $\mathbf{P} = \mathbf{A}(\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}}$. Erre viszont könnyen ellenőrizhető a tételbeli feltétel.

$$\begin{aligned}
\mathbf{P}^2 &= \left(\mathbf{A}(\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}}\right)^2 = \mathbf{A}(\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}}\mathbf{A}(\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}} \\
&= \mathbf{A}(\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}} = \mathbf{P},
\end{aligned}$$

másrészt

$$\begin{aligned}
\mathbf{P}^{\mathsf{T}} &= \left(\mathbf{A}(\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}}\right)^{\mathsf{T}} = \mathbf{A}\left((\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\right)^{\mathsf{T}}\mathbf{A}^{\mathsf{T}} \\
&= \mathbf{A}(\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}} = \mathbf{P}.
\end{aligned}$$

($\Longleftarrow$) Tegyük fel, hogy $\mathbf{P} = \mathbf{P}^{\mathsf{T}} = \mathbf{P}^2$. Megmutatjuk, hogy $\mathbf{P}$ az $\mathcal{O}(\mathbf{P})$-re való merőleges vetítés mátrixa. Ehhez elég megmutatnunk, hogy az $\mathbf{x} - \mathbf{P}\mathbf{x}$ vektor merőleges $\mathcal{O}(\mathbf{P})$-re bármely $\mathbf{x}$ vektor esetén. A $\mathbf{P}^2 = \mathbf{P}$ feltétel miatt $\mathbf{P}(\mathbf{x} - \mathbf{P}\mathbf{x}) = \mathbf{P}\mathbf{x} - \mathbf{P}^2\mathbf{x} = \mathbf{0}$, tehát $\mathbf{x} - \mathbf{P}\mathbf{x} \in \mathcal{N}(\mathbf{P})$, de $\mathbf{P} = \mathbf{P}^{\mathsf{T}}$, így $\mathbf{x} - \mathbf{P}\mathbf{x} \in \mathcal{N}(\mathbf{P}^{\mathsf{T}})$. Ez épp azt jelenti, hogy $\mathbf{x} - \mathbf{P}\mathbf{x}$ merőleges $\mathcal{O}(\mathbf{P})$-re, és ezt akartuk belátni. $\square$

> *A $\mathbf{P} = \mathbf{P}^{\mathsf{T}}$ összefüggés azt jelenti, hogy $\mathbf{P}$ szimmetrikus. A $\mathbf{P}^2 = \mathbf{P}$ tulajdonságnak eleget tevő mátrixokat idempotensnek nevezzük. A tétel tehát úgy is fogalmazható, hogy egy mátrix pontosan akkor egy merőleges vetítés mátrixa, ha idempotens és szimmetrikus.*

> *Később látni fogjuk, hogy a – később definiálandó – nem feltétlenül merőleges vetítés mátrixai egybe esnek az idempotens mátrixokkal, tehát a vetítő lineáris leképezések az idempotens lineáris leképezésekkel.*

> *Azt, hogy egy vetítés hány dimenziós térre vetít, annak rangja mondja meg, hisz az megegyezik a képtér dimenziójával.*

**7.47. példa.** *Igazoljuk, hogy az*

$$\begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix}, \quad \frac{1}{2}\begin{bmatrix} 1 & 0 & 0 & 1 \\ 0 & 1 & 1 & 0 \\ 0 & 1 & 1 & 0 \\ 1 & 0 & 0 & 1 \end{bmatrix}, \quad \frac{1}{4}\begin{bmatrix} 3 & -1 & -1 & -1 \\ -1 & 3 & -1 & -1 \\ -1 & -1 & 3 & -1 \\ -1 & -1 & -1 & 3 \end{bmatrix}$$

*mátrixok merőleges vetítés mátrixai! Hány dimenziós térre vetítenek?*

Megoldás. Könnyen ellenőrizhető, hogy mindegyik mátrix szimmetrikus és idempotens, azaz kielégíti a $\mathbf{P}^{\mathsf{T}} = \mathbf{P}$ és a $\mathbf{P}^2 = \mathbf{P}$ egyenlőségeket. Az első két mátrixról átalakítás nélkül is leolvasható, hogy rangjuk 2. A harmadik mátrix rangja 3, ugyanis egyrészt legalább 3, hisz ha kivonjuk az utolsó sort az első háromból, egy $3 \times 3$-as egységmátrixot kapunk benne, lehet 4, mert a négy sorvektor összege a zérusvektor, azaz lineárisan összefüggők. $\square$

### Altértől való távolság

Adva van az $\mathbb{R}^n$ tér egy $\mathbf{x}$ vektora és egy $\mathcal{W}$ altere. $\mathbf{x}$-nek a $\mathcal{W}$ altértől való távolságán a $\mathcal{W}$ altér $\mathbf{x}$-hez legközelebbi $\mathbf{w}$ vektorának tőle való távolságát értjük. Kérdés azonban, hogy létezik-e ilyen vektor egyáltalán! Meg fogjuk mutatni, hogy ilyen $\mathbf{w}$ vektor létezik és egyértelmű. E vektort az $\mathbf{x}$ vektor $\mathcal{W}$-beli legjobb közelítésének nevezzük.

**7.48. tétel (Legjobb közelítés tétele).** *Adva van az $\mathbb{R}^n$ tér egy $\mathbf{x}$ vektora és egy $\mathcal{W}$ altere. Az $\mathbf{x}$ vektornak egyetlen $\mathcal{W}$-beli legjobb $\hat{\mathbf{x}}$ közelítése van, nevezetesen $\hat{\mathbf{x}} = \operatorname{proj}_{\mathcal{W}}\mathbf{x}$.*

Bizonyítás. Legyen $\mathbf{w}$ a $\mathcal{W}$ egy tetszőleges vektora. Ekkor

$$\mathbf{x} - \mathbf{w} = (\mathbf{x} - \operatorname{proj}_{\mathcal{W}}\mathbf{x}) + (\operatorname{proj}_{\mathcal{W}}\mathbf{x} - \mathbf{w}).$$

A merőleges vetítés definíciója miatt az egyenlőség jobb oldalán álló első kifejezés $\mathcal{W}^\perp$, míg a második $\mathcal{W}$ eleme. Tehát az $\mathbf{x} - \operatorname{proj}_{\mathcal{W}}\mathbf{x}$ és a $\operatorname{proj}_{\mathcal{W}}\mathbf{x} - \mathbf{w}$ vektorok merőlegesek egymásra, így alkalmazható rájuk Pithagorász tétele:

$$|\mathbf{x} - \mathbf{w}|^2 = |\mathbf{x} - \operatorname{proj}_{\mathcal{W}}\mathbf{x}|^2 + |\operatorname{proj}_{\mathcal{W}}\mathbf{x} - \mathbf{w}|^2.$$

Ebből világos, hogy

$$|\mathbf{x} - \mathbf{w}|^2 \geq |\mathbf{x} - \operatorname{proj}_{\mathcal{W}}\mathbf{x}|^2,$$

és egyenlőség csak akkor állhat fönn, ha $\mathbf{w} = \hat{\mathbf{x}} = \operatorname{proj}_{\mathcal{W}}\mathbf{x}$, ami egyúttal a legjobb közelítés egyértelműségét is bizonyítja. $\square$

> *E tétel egyik következménye, hogy $\mathbb{R}^n$ minden vektora felbontható egy $\mathcal{W}$-beli és egy rá merőleges vektor összegére, ugyanis*
> $$\mathbf{x} = \operatorname{proj}_{\mathcal{W}}\mathbf{x} + \mathbf{w}^\perp, \text{ ahol } \mathbf{w}^\perp = \mathbf{x} - \operatorname{proj}_{\mathcal{W}}\mathbf{x}.$$

Ennél azonban több is igaz, nevezetesen az, hogy e felbontás egyértelmű.

**7.49. tétel (Vektor felbontása összetevőkre).** *Adva van az $\mathbb{R}^n$ tér egy $\mathbf{x}$ vektora és egy $\mathcal{W}$ altere. Az $\mathbf{x}$ vektor egyértelműen felbomlik egy $\mathcal{W}$-beli $\mathbf{w}$ és egy $\mathcal{W}$-re merőleges $\mathbf{w}^\perp$ vektor összegére, nevezetesen $\mathbf{w} = \operatorname{proj}_{\mathcal{W}}\mathbf{x}$ és $\mathbf{w}^\perp = \mathbf{x} - \mathbf{w}$.*

Bizonyítás. Tegyük fel, hogy létezik $\mathbf{x}$-nek egy másik ilyen tulajdonságú felbontása is, tehát $\mathbf{x} = \mathbf{w} + \mathbf{w}^\perp$ és $\mathbf{x} = \mathbf{v} + \mathbf{v}^\perp$. A második egyenletet az elsőből kivonva, majd átrendezve kapjuk, hogy

$$\mathbf{v} - \mathbf{w} = \mathbf{w}^\perp - \mathbf{v}^\perp.$$

A bal oldal eleme $\mathcal{W}$-nek a jobb oldali vektor viszont merőleges rá, hisz mindkét vektor eleme a $\mathcal{W}^\perp$ altérnek. Ez viszont csak akkor állhat fenn, ha mindkét oldal egyenlő a zérusvektorral, tehát $\mathbf{v} = \mathbf{w}$. $\square$

**7.50. példa.** *Tekintsük az $\mathbb{R}^4$ tér $(1, -1, 1, 0)$ és $(0, 1, -1, 0)$ vektorai által kifeszített $\mathcal{W}$ alterét és legyen $\mathbf{x} = (8, 4, 2, 1)$. Bontsuk fel az $\mathbf{x}$ vektort $\mathcal{W}$-be eső és $\mathcal{W}$-re merőleges vektorok összegére.*

Megoldás. A $\mathcal{W}$-re való merőleges vetítés mátrixa $\mathbf{P} = \mathbf{W}(\mathbf{W}^{\mathsf{T}}\mathbf{W})^{-1}\mathbf{W}^{\mathsf{T}}$, ahol $\mathbf{W}$ két oszlopa a megadott két bázisvektor, tehát

$$\mathbf{W} = \begin{bmatrix} 1 & 0 \\ -1 & 1 \\ 1 & -1 \\ 0 & 0 \end{bmatrix}, \text{ amiből } \mathbf{P}\mathbf{x} = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1/2 & -1/2 & 0 \\ 0 & -1/2 & 1/2 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix}\begin{bmatrix} 8 \\ 4 \\ 2 \\ 1 \end{bmatrix} = \begin{bmatrix} 8 \\ 1 \\ -1 \\ 0 \end{bmatrix}.$$

Így $\operatorname{proj}_{\mathcal{W}}\mathbf{x} = \mathbf{P}\mathbf{x} = (8, 1, -1, 0)$ és $\mathbf{x} - \operatorname{proj}_{\mathcal{W}}\mathbf{x} = (0, 3, 3, 1)$. Egyszerű számítással ellenőrizhető, hogy a $(8, 1, -1, 0) \in \mathcal{W}$ és hogy $(0, 3, 3, 1) \perp \mathcal{W}^\perp$, azaz merőleges a $\mathcal{W}$-t kifeszítő bázisvektorok mindegyikére. $\square$

### Egyenletrendszer optimális megoldása

Az altérre való merőleges vetítés és a legjobb közelítés fogalmával olyan eszközhöz jutottunk, amellyel

a lineáris egyenletrendszerek elmélete e szinten teljessé tehető. A gyakorlatban rendkívül gyakran előfordul, hogy az ismeretlen mennyiségek meghatározására méréseket végzünk, de az elkerülhetetlen mérési hibák ellenmondó egyenletrendszerre vezetnek. Hogyan határozható meg ekkor a valóságban bizonyosan létező megoldás, egy ellentmondásos, tehát nem megoldható egyenletrendszerből?

Tudjuk, hogy az $\mathbf{A}\mathbf{x} = \mathbf{b}$ egyenletrendszer pontosan akkor oldható meg, ha $\mathbf{b}$ benne van az oszloptérben, azaz $\mathcal{O}(\mathbf{A})$-ban. Természetes ötlet, hogy $\mathbf{b}$ helyett az azt legjobban közelítő oszloptérbeli $\hat{\mathbf{b}} = \operatorname{proj}_{\mathcal{O}(\mathbf{A})} \mathbf{b}$ vektorral oldjuk meg az egyenletrendszert. Ez már biztosan megoldható lesz, és olyan megoldásokat szolgáltat, melyekre $\mathbf{A}\mathbf{x}$ ugyan nem lesz egyenlő $\mathbf{b}$-vel, de attól a lehető legkisebb távolságra van. Az ilyen megoldásokat az $\mathbf{A}\mathbf{x} = \mathbf{b}$ egyenletrendszer *optimális megoldásainak* vagy a *legkisebb négyzetek elve szerinti megoldásainak* nevezzük. Világos, hogy ha egy egyenletrendszer konzisztens, akkor optimális megoldásai megegyeznek a megoldásaival. E definícióból azt is látjuk, mit tegyünk, ha egy egyenletrendszer ellentmondásos (azaz inkonzisztens): határozzuk meg a $\hat{\mathbf{b}} = \operatorname{proj}_{\mathcal{O}(\mathbf{A})} \mathbf{b}$ vektort, és az $\mathbf{A}\mathbf{x} = \mathbf{b}$ egyenletrendszer helyett oldjuk meg az $\mathbf{A}\hat{\mathbf{x}} = \hat{\mathbf{b}}$ egyenletrendszert. Ez kiindulásul jó, de adódik egy egyszerűbb módszer is.

> *Az természetes ötlet, hogy $\mathbf{b}$ helyett $\hat{\mathbf{b}}$-vel oldjuk meg az egyenletrendszert, de vajon nincs-e jobb ötlet, végülis miért épp e merőleges vetület adja számunkra a „legjobb megoldást" és mit is jelent itt a „legjobb". A teljes választ a valószínűségszámítási előismeretet igénylő Gauss–Markov-tétel adja meg.*

**7.51. tétel (Egyenletrendszer optimális megoldása).** *Az $\mathbf{A}\mathbf{x} = \mathbf{b}$ egyenletrendszer optimális megoldásai megegyeznek az*

$$\mathbf{A}^{\mathsf{T}}\mathbf{A}\hat{\mathbf{x}} = \mathbf{A}^{\mathsf{T}}\mathbf{b} \tag{7.11}$$

*egyenletrendszer megoldásaival. Ezek közül egyetlen egy esik az $\mathbf{A}$ mátrix sorterébe, a legkisebb abszolút értékű.*

> *A (7.11) egyenletrendszert az $\mathbf{A}\mathbf{x} = \mathbf{b}$ egyenletrendszerhez tartozó *normálegyenlet-rendszernek* nevezzük. (A *normálegyenlet* kifejezés is helyes, ha a (7.11) kifejezésre, mint mátrixegyenletre gondolunk.)*

Bizonyítás. Az $\mathbf{A}\mathbf{x} = \mathbf{b}$ egyenletrendszer optimális megoldásai megegyeznek az $\mathbf{A}\hat{\mathbf{x}} = \operatorname{proj}_{\mathcal{O}(\mathbf{A})} \mathbf{b}$ egyenletrendszer megoldásaival. Ezeket fogjuk tehát keresni.

Először megmutatjuk, hogy ha $\hat{\mathbf{x}}$ egy optimális megoldás, akkor $\hat{\mathbf{x}}$ kielégíti a (7.11) egyenletet. Mivel $\mathbf{b} - \operatorname{proj}_{\mathcal{O}(\mathbf{A})} \mathbf{b}$ a vetítés definíciója miatt merőleges $\mathcal{O}(\mathbf{A})$-ra, ezért $\mathbf{A}^{\mathsf{T}}$ nullterében van, tehát

$$\mathbf{A}^{\mathsf{T}}(\mathbf{b} - \operatorname{proj}_{\mathcal{O}(\mathbf{A})} \mathbf{b}) = \mathbf{0}.$$

Másrészt felhasználva, hogy $\mathbf{A}\hat{\mathbf{x}} = \operatorname{proj}_{\mathcal{O}(\mathbf{A})} \mathbf{b}$, kapjuk, hogy

$$\mathbf{A}^{\mathsf{T}}(\mathbf{b} - \mathbf{A}\hat{\mathbf{x}}) = \mathbf{0},$$

azaz átrendezés után

$$\mathbf{A}^{\mathsf{T}}\mathbf{A}\hat{\mathbf{x}} = \mathbf{A}^{\mathsf{T}}\mathbf{b}.$$

Ezután megmutatjuk, hogy a (7.11) egyenletet kielégítő minden $\hat{\mathbf{x}}$ vektor optimális megoldás. Ha (7.11) teljesül, akkor

$$\mathbf{A}^{\mathsf{T}}(\mathbf{b} - \mathbf{A}\hat{\mathbf{x}}) = \mathbf{0},$$

tehát $\mathbf{b} - \mathbf{A}\hat{\mathbf{x}}$ benne van $\mathbf{A}^{\mathsf{T}}$ nullterében, így merőleges $\mathbf{A}$ oszlopterére. Ezért a

$$\mathbf{b} = \mathbf{A}\hat{\mathbf{x}} + (\mathbf{b} - \mathbf{A}\hat{\mathbf{x}})$$

felbontás két merőleges kiegészítő altérbe eső vektor, hisz $\mathbf{A}\hat{\mathbf{x}}$ az $\mathbf{A}$ oszlopterébe esik. Így a merőleges vetület definíciója szerint

$$\mathbf{A}\hat{\mathbf{x}} = \operatorname{proj}_{\mathcal{O}(\mathbf{A})} \mathbf{b},$$

azaz $\hat{\mathbf{x}}$ optimális megoldás.

Végül meg kell mutatnunk, hogy a megoldások közt egyetlen van, mely $\mathbf{A}$ sorterébe esik. Ez azonnal következik abból, hogy a normálegyenlet megoldásai közt egyetlen egy van, mely $\mathbf{A}^{\mathsf{T}}\mathbf{A}$ sorterébe esik, az $\mathbf{A}^{\mathsf{T}}\mathbf{A}$ és $\mathbf{A}$ sorterei pedig megegyeznek. $\square$

**7.52. példa (Egyenletrendszer optimális megoldásai).** *Határozzuk meg az*

$$\begin{alignedat}{9}
& {} & y &{} + {}& z &{} = 3 \\
x &{} + {}& y &{} + {}& 2z &{} = 2 \\
x &{} & &{} + {}& z &{} = 2
\end{alignedat}$$

*egyenletrendszert optimális megoldásait, és válasszuk ki közülük a minimális abszolút értékűt!*

Megoldás. Az egyenletrendszer nem oldható meg, ami bővített mátrixának redukált lépcsős alakjából leolvasható:

$$\left[\begin{array}{ccc|c} 0 & 1 & 1 & 3 \\ 1 & 1 & 2 & 2 \\ 1 & 0 & 1 & 2 \end{array}\right] \Rightarrow \left[\begin{array}{ccc|c} 1 & 0 & 1 & 0 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{array}\right]$$

Az együtthatómátrix transzponáltjával balról szorozva az egyenletet megkapjuk a normálegyenletet:

$$\begin{bmatrix} 2 & 1 & 3 \\ 1 & 2 & 3 \\ 3 & 3 & 6 \end{bmatrix} \mathbf{x} = \begin{bmatrix} 4 \\ 5 \\ 9 \end{bmatrix}.$$

Ennek összes megoldása a bővített mátrix redukált lépcsős alakjából

$$\left[\begin{array}{ccc|c} 2 & 1 & 3 & 4 \\ 1 & 2 & 3 & 5 \\ 3 & 3 & 6 & 9 \end{array}\right] \Rightarrow \left[\begin{array}{ccc|c} 1 & 0 & 1 & 1 \\ 0 & 1 & 1 & 2 \\ & & & \end{array}\right], \quad \text{így} \quad \mathbf{x} = \begin{bmatrix} 1 \\ 2 \\ 0 \end{bmatrix} + \begin{bmatrix} -1 \\ -1 \\ 1 \end{bmatrix} t.$$

A sortérbe eső megoldás megkereséséhez a 3.40. példában látott módszert alkalmazzuk az eredeti egyenletrendszer kiegészítésével:

$$\left[\begin{array}{ccc|c} 1 & 0 & 1 & 1 \\ 0 & 1 & 1 & 2 \\ -1 & -1 & 1 & 0 \end{array}\right] \Rightarrow \left[\begin{array}{ccc|c} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 1 \\ 0 & 0 & 1 & 1 \end{array}\right].$$

A sortérbe eső megoldás $(0, 1, 1)$, azaz az összes megoldás ezzel fölírva:

$$\mathbf{x} = \begin{bmatrix} 0 \\ 1 \\ 1 \end{bmatrix} + \begin{bmatrix} -1 \\ -1 \\ 1 \end{bmatrix} t.$$

$\square$

### Lineáris és polinomiális regresszió

Az egyenletrendszerek optimális megoldásainak egyik fontos alkalmazása a lineáris regresszió. Tegyük fel, hogy két változó mennyiség, az $x$ és az $y$ között fennáll az $y = a + bx$ kapcsolat. Méréseket végzünk, melyek eredménye az $(x_i, y_i)$ ($i = 1, 2, \ldots n$) párok sorozata. Keressük az $a$ és $b$ értékét, mely kielégíti az $y_i = a + bx_i$ ($i = 1, 2, \ldots n$) egyenletek mindegyikét! Ez egy kétismeretlenes lineáris egyenletrendszer, melynek mátrixalakja:

$$\begin{bmatrix} 1 & x_1 \\ 1 & x_2 \\ \vdots & \vdots \\ 1 & x_n \end{bmatrix} \begin{bmatrix} a \\ b \end{bmatrix} = \begin{bmatrix} y_1 \\ y_2 \\ \vdots \\ y_n \end{bmatrix}.$$

A hozzá tartozó normálegyenlet-rendszer

$$\begin{bmatrix} 1 & 1 & \ldots & 1 \\ x_1 & x_2 & \ldots & x_n \end{bmatrix} \begin{bmatrix} 1 & x_1 \\ 1 & x_2 \\ \vdots & \vdots \\ 1 & x_n \end{bmatrix} \begin{bmatrix} \hat{a} \\ \hat{b} \end{bmatrix} = \begin{bmatrix} 1 & 1 & \ldots & 1 \\ x_1 & x_2 & \ldots & x_n \end{bmatrix} \begin{bmatrix} y_1 \\ y_2 \\ \vdots \\ y_n \end{bmatrix},$$

amely a mátrixműveletek elvégzése után a következő alakra vezet:

$$\begin{bmatrix} n & \sum x_i \\ \sum x_i & \sum x_i^2 \end{bmatrix} \begin{bmatrix} \hat{a} \\ \hat{b} \end{bmatrix} = \begin{bmatrix} \sum y_i \\ \sum x_i y_i \end{bmatrix}.$$

Ennek $\hat{a}$ és $\hat{b}$ megoldása adja az eredeti egyenletrendszer optimális megoldását! Az ilyen módon kapott $y = \hat{a} + \hat{b}x$ egyenest *regressziós egyenesnek* nevezzük, mely a megadott adatokra a legkisebb négyzetek elve szerinti legjobban illeszkedő egyenes.

Összefoglalva:

**7.53. állítás (Lineáris regresszió).** *Az $(x_i, y_i)$ ($i = 1, 2, \ldots n$) párokhoz tartozó, $y = \hat{a} + \hat{b}x$ egyenletű regressziós egyenes paraméterei kielégítik az*

$$\begin{bmatrix} n & \sum x_i \\ \sum x_i & \sum x_i^2 \end{bmatrix} \begin{bmatrix} \hat{a} \\ \hat{b} \end{bmatrix} = \begin{bmatrix} \sum y_i \\ \sum x_i y_i \end{bmatrix}$$

*egyenletet. Ez egyértelműen megoldható, ha van legalább két különböző $x_i$ érték.*

Bizonyítás. Az összefüggést már fent igazoltuk, csak a egyértelmű megoldhatóság igazolása maradt hátra. A számtani és négyzetes közép közti összefüggés szerint bármely $x_i$ ($i = 1, 2 \ldots, n$) valósokra

$$\frac{x_1 + \cdots + x_n}{n} \le \sqrt{\frac{x_1^2 + \cdots + x_n^2}{n}},$$

és egyenlőség csak akkor állhat fenn, ha $x_1 = \cdots = x_n$. Mivel az együtthatómátrix determinánsa $n \sum x_i^2 - (\sum x_i)^2$, ezért a számtani és négyzetes közép közti összefüggés miatt ez csak akkor lehet 0, ha az $x_i$ értékek mind azonosak. $\square$

A lineáris regresszió gyakran egyéb függvénykapcsolat esetén is alkalmazható:

**7.54. állítás (Linearizálható regressziós modellek).** *Ha az $x$ és $y$ mennyiségek között az alábbi táblázat szerinti függvénykapcsolatok valamelyike áll, akkor a táblázatban megadott helyettesítéssel a kapcsolat $Y = a + bX$ alakúvá, azaz lineárissá válik, így lineáris regresszió végezhető.*

| Modell | Függvénykapcsolat | Helyettesítés | | |
|---|---|---|---|---|
| *hatványfüggvény* | $y = cx^b$ | $X = \ln x$ | $Y = \ln y$ | $a = \ln c$ |
| *exponenciális* | $y = ce^{bx}$ | $X = x$ | $Y = \ln y$ | $a = \ln c$ |
| *logaritmikus* | $y = a + b\ln x$ | $X = \ln x$ | $Y = y$ | |

Bizonyítás. Az $y = cx^b$ egyenlőség mindkét oldalának logaritmusát véve az $\ln y = \ln c + b\ln x$ egyenlőséget kapjuk, ami a megadott helyettesítésekkel $Y = a + bX$ kifejezést adja. Ugyanígy, az $y = ce^{bx}$ egyenlet logaritmusát véve az $\ln y = \ln c + bx$ egyenletet kapjuk. A szükséges helyettesítés a harmadik esetben még nyilvánvalóbb. $\square$

A regresszió hasonló módon más függvényekkel is végezhető, ezek közül a polinomiálisat emeljük ki:

**7.55. példa.** *Keressünk az $a_0 + a_1 x + \cdots + a_k x^k$ polinom együtthatóira optimális becslést a legkisebb négyzetek módszerével, ha az $(x_i, y_i)$ ($i = 1, 2, \ldots n$) párok sorozatát ismerjük.*

Megoldás. Keresendő az $n$ egyenletből álló $k + 1$-ismeretlenes

$$\begin{aligned}
a_0 + a_1 x_1 + \ldots + a_k x_1^k &= y_1 \\
a_0 + a_1 x_2 + \ldots + a_k x_2^k &= y_2 \\
\vdots \qquad \vdots \qquad\qquad \vdots \quad &\;\; \vdots \\
a_0 + a_1 x_n + \ldots + a_k x_n^k &= y_n
\end{aligned}$$

egyenletrendszer megoldása az $a_0$, $a_1, \ldots, a_k$ ismeretlenekre. Mátrixalakja

$$\begin{bmatrix} 1 & x_1 & \ldots & x_1^k \\ 1 & x_2 & \ldots & x_2^k \\ \vdots & \vdots & \ddots & \vdots \\ 1 & x_n & \ldots & x_n^k \end{bmatrix} \begin{bmatrix} a_0 \\ a_1 \\ \vdots \\ a_k \end{bmatrix} = \begin{bmatrix} y_1 \\ y_2 \\ \vdots \\ y_n \end{bmatrix}.$$

Ha az együtthatómátrixot $\mathbf{X}$ jelöli, az ismeretlenek vektorát $\mathbf{a}$, az $y_i$ értékek vektorát $\mathbf{y}$, akkor az egyenletrendszer az $\mathbf{X}\mathbf{a} = \mathbf{y}$ alakba írható. Ez biztosan megoldható, mégpedig egyértelműen, ha az $x_i$ értékek különbözőek, és $n = k + 1$, ekkor ugyanis az együtthatómátrix négyzetes, determinánsa Vandermonde-determináns, melynek értéke nem 0. Egyéb esetekben a normálegyenlet-rendszert kell felírni, melynek mátrixszorzatos alakja

$$\mathbf{X}^{\mathsf{T}}\mathbf{X}\mathbf{a} = \mathbf{X}^{\mathsf{T}}\mathbf{y}.$$

Ez egyértelműen megoldható, ha $\mathbf{X}$ teljes oszloprangú, mert akkor $\mathbf{X}^{\mathsf{T}}\mathbf{X}$ invertálható, így a megoldás

$$\mathbf{a} = (\mathbf{X}^{\mathsf{T}}\mathbf{X})^{-1}\mathbf{X}^{\mathsf{T}}\mathbf{y}.$$

Ez pontosan akkor áll fenn, ha van legalább $k + 1$ különböző $x_i$ érték, ekkor ugyanis $\mathbf{X}$-ben van egy $(k + 1) \times (k + 1)$-es nemnulla determinánsú részmátrix, nevezetesen a különböző $x_i$ értékekhez tartozó sorokból álló Vandermonde-mátrix. $\square$

### Vetítés

Ha $\mathcal{V}$ és $\mathcal{W}$ kiegészítő alterek, akkor természetes módon értelmezhető a $\mathcal{V}$ altérre való és a $\mathcal{W}$ altérrel párhuzamos vetítés fogalma. E transzformációk halmaza egybeesik a $P^2 = P$ feltételt kielégítő lineáris transzformációk halmazával.

**7.56. definíció (Vetítés altérre).** *Tudjuk, hogy ha $\mathbb{R}^n = \mathcal{V} \oplus \mathcal{W}$, azaz $\mathcal{V}$ és $\mathcal{W}$ kiegészítő alterek, akkor a tér bármely $\mathbf{u}$ vektora egyértelműen előáll $\mathbf{u} = \mathbf{v} + \mathbf{w}$ alakban, ahol $\mathbf{v} \in \mathcal{V}$, $\mathbf{w} \in \mathcal{W}$. Azt mondjuk, hogy a $\mathbf{v}$ vektor az $\mathbf{u}$ vektornak a $\mathcal{V}$ altérre $\mathcal{W}$ mentén való vetülete, vagy $\mathcal{W}$-vel párhuzamosan vett, $\mathcal{V}$-re való vetülete.*

> *Természetesen ugyanígy a $\mathbf{w}$ vektor az $\mathbf{u}$ vektor $\mathcal{V}$-val párhuzamosan vett, $\mathcal{W}$-re való vetülete. Könnyen látható, hogy a $P : \mathbf{u} \mapsto \mathbf{v}$ leképezés lineáris transzformáció (ellenőrizzük!). E lineáris transzformációt *vetítésnek* vagy *projekciónak* nevezzük.*

> *Minden $P$ vetítés az $\operatorname{Im} P$-re $\operatorname{Ker} P$ mentén való vetítés.*

Határozzuk meg e transzformáció mátrixát! A 7.41. tétel utáni megjegyzés szerint $\mathcal{V}$ és $\mathcal{W}$ dimenzióinak összege $n$, és ha $\mathcal{V}$ egy bázisa $\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_r\}$, $\mathcal{W}$ egy bázisa $\{\mathbf{w}_1, \mathbf{w}_2, \ldots, \mathbf{w}_{n-r}\}$, akkor a két bázis diszjunkt (metszetük üres) és egyesítésük az egész tér egy bázisa. E vektorokból képezzük az alábbi mátrixot:

$$\mathbf{U} = [\mathbf{v}_1 \; \mathbf{v}_2 \; \ldots \; \mathbf{v}_r | \mathbf{w}_1 \; \mathbf{w}_2 \; \ldots \; \mathbf{w}_{n-r}] = [\mathbf{V} | \mathbf{W}].$$

Mivel $P\mathbf{v}_i = \mathbf{v}_i$ ($i = 1, 2, \ldots, r$) és $P\mathbf{w}_j = \mathbf{0}$ ($j = 1, 2, \ldots, n - r$), ezért a $P$ leképezés $\mathbf{P}$ mátrixára

$$\mathbf{P}\mathbf{U} = \mathbf{P}[\mathbf{V} | \mathbf{W}] = [\mathbf{P}\mathbf{V} | \mathbf{P}\mathbf{W}] = [\mathbf{V} | \mathbf{O}].$$

Mivel pedig $\mathbf{U}$ invertálható, ezért a vetítés mátrixa

$$\mathbf{P} = [\mathbf{V} | \mathbf{O}]\mathbf{U}^{-1} = [\mathbf{V} | \mathbf{O}][\mathbf{V} | \mathbf{W}]^{-1}.$$

**7.57. tétel (A projekció tulajdonságai).** *Legyen $P : \mathbb{R}^n \to \mathbb{R}^n$ egy projekció. Ekkor*

*a) $\mathbb{R}^n$-nek van olyan bázisa, melyben a mátrixa*

$$\mathbf{P} = \operatorname{diag}(1, 1, \ldots, 1, 0, \ldots, 0).$$

*b) $I - P$ is projekció, mégpedig $\operatorname{Ker}(I - P) = \operatorname{Im} P$, $\operatorname{Im}(I - P) = \operatorname{Ker} P$,*

*c) $\operatorname{r}(P) = \operatorname{trace}(P)$.*

Bizonyítás. *a)* A fenti jelölésekkel a $\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_r, \mathbf{w}_1, \mathbf{w}_2, \ldots, \mathbf{w}_{n-r}\}$ bázisban nyilván $\operatorname{diag}(1, 1, \ldots, 1, 0, \ldots, 0)$ a mátrix. Ez a

$$\begin{aligned}
[\mathbf{V} | \mathbf{O}][\mathbf{V} | \mathbf{W}]^{-1} &= [\mathbf{V} | \mathbf{W}] \begin{bmatrix} \mathbf{I} & \mathbf{O} \\ \mathbf{O} & \mathbf{O} \end{bmatrix} [\mathbf{V} | \mathbf{W}]^{-1} \\
&= [\mathbf{V} | \mathbf{W}] \operatorname{diag}(1, 1, \ldots, 1, 0, \ldots, 0)[\mathbf{V} | \mathbf{W}]^{-1}
\end{aligned}$$

átalakításból is látható. $\square$

*b)* Ha $\mathbf{u} = \mathbf{v} + \mathbf{w}$, és $P : \mathbf{u} \mapsto \mathbf{v}$ a $\mathcal{W}$ mentén $\mathcal{V}$-re való vetítés, akkor $I - P : \mathbf{u} \mapsto \mathbf{u} - \mathbf{v} = \mathbf{w}$ a $\mathcal{V}$ mentén $\mathcal{W}$-re való vetítés. Világos, hogy $\operatorname{Im} P = \mathcal{V}$, $\operatorname{Ker} P = \mathcal{W}$, és így $\operatorname{Im}(I - P) = \mathcal{W}$, $\operatorname{Ker}(I - P) = \mathcal{V}$.

*c)* $\operatorname{r}(\mathbf{P}) = \operatorname{trace}(\mathbf{P})$, így $\operatorname{r}(P) = \operatorname{trace}(P)$.

**7.58. példa (Projekció mátrixa).** *Határozzuk meg az $\mathbb{R}^3$ tér $\mathcal{W} = \operatorname{span}((1, -2, 1))$ altérrel párhuzamos, $\mathcal{V} = \operatorname{span}((0, 2, -1), (2, 0, -1))$ altérre való vetítésének és a $\mathcal{V}$-vel párhuzamos $\mathcal{W}$-re való vetítés mátrixát! (ld. még a 7.26. példát!)*

Megoldás. Miután

$$\mathbf{V} = \begin{bmatrix} 0 & 2 \\ 2 & 0 \\ -1 & -1 \end{bmatrix}, \quad \mathbf{W} = \begin{bmatrix} 1 \\ -2 \\ 1 \end{bmatrix},$$

a transzformáció mátrixa egyszerű behelyettesítés után:

$$\begin{aligned}
\mathbf{P} = [\mathbf{V} | \mathbf{O}][\mathbf{V} | \mathbf{W}]^{-1} &= \begin{bmatrix} 0 & 2 & 0 \\ 2 & 0 & 0 \\ -1 & -1 & 0 \end{bmatrix} \begin{bmatrix} 0 & 2 & 1 \\ 2 & 0 & -2 \\ -1 & -1 & 1 \end{bmatrix}^{-1} \\
&= \begin{bmatrix} 0 & -1 & -2 \\ 2 & 3 & 4 \\ -1 & -1 & -1 \end{bmatrix}.
\end{aligned}$$

A 7.26. példában ugyanezt a kérdést tettük fel, másként megfogalmazva. Ráadásul a megoldás is lényegében ugyanaz, csak a $\mathcal{V}$ altérnek most más bázist kerestünk. A másik vetítés mátrixa

$$\mathbf{I} - \mathbf{P} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} - \begin{bmatrix} 0 & -1 & -2 \\ 2 & 3 & 4 \\ -1 & -1 & -1 \end{bmatrix} = \begin{bmatrix} 1 & 1 & 2 \\ -2 & -2 & -4 \\ 1 & 1 & 2 \end{bmatrix}.$$

$\square$

**7.59. tétel (A vetítés ekvivalens definíciója).** *A $P : \mathbb{R}^n \to \mathbb{R}^n$ lineáris transzformáció pontosan akkor vetítés, ha $P^2 = P$, azaz ha $P$ idempotens.*

Bizonyítás. A vetítés definíciója szerinti $P\mathbf{u} = \mathbf{v}$, ahol $\mathbf{u} = \mathbf{v} + \mathbf{w}$ és $\mathbf{v} \in \mathcal{V}$, $\mathbf{w} \in \mathcal{W}$. Mivel $\mathbf{v} = \mathbf{v} + \mathbf{0}$ a $\mathbf{v}$ felbontása, ezért $P\mathbf{u} = \mathbf{v}$, tehát $P^2\mathbf{u} = P\mathbf{v} = \mathbf{v}$, azaz minden $\mathbf{u}$ vektorra $P^2\mathbf{u} = P\mathbf{u}$, tehát $P^2 = P$.

Minden $\mathbf{u}$ vektor felbontható a következőképp: $\mathbf{u} = P\mathbf{u} + (\mathbf{u} - P\mathbf{u})$. Itt $P\mathbf{u} \in \operatorname{Im} P$, $\mathbf{u} - P\mathbf{u} \in \operatorname{Ker} P$, ugyanis $P(\mathbf{u} - P\mathbf{u}) = P\mathbf{u} - P^2\mathbf{u} = \mathbf{0}$. Tehát $\mathbb{R}^n = \operatorname{Im} P + \operatorname{Ker} P$. Im $P \cap \operatorname{Ker} P = \{\mathbf{0}\}$, ugyanis ha $\mathbf{u} \in \operatorname{Im} P \cap \operatorname{Ker} P$, akkor $\mathbf{u} \in \operatorname{Im} P$ miatt van olyan $\mathbf{x}$, hogy $P\mathbf{x} = \mathbf{u}$, így $P^2\mathbf{x} = P\mathbf{u} = \mathbf{0}$, másrészt $P^2 = P$ miatt $P^2\mathbf{x} = P\mathbf{x} = \mathbf{u}$. Tehát $\mathbf{u} = \mathbf{0}$, vagyis $\operatorname{Im} P \cap \operatorname{Ker} P = \{\mathbf{0}\}$. Eszerint $\mathbb{R}^n = \operatorname{Im} P \oplus \operatorname{Ker} P$. Legyen tehát $\mathcal{V} = \operatorname{Im} P$, $\mathcal{W} = \operatorname{Ker} P$. Minden $\mathbf{u}$ vektor egyértelműen felírható $\mathbf{u} = \mathbf{v} + \mathbf{w}$ alakban, ahol $\mathbf{v} \in \mathcal{V}$, és $\mathbf{w} \in \mathcal{W}$. Mivel $\mathcal{V} = \operatorname{Im} P$, van olyan $\mathbf{x}$, hogy $\mathbf{v} = P\mathbf{x}$. Ezért $\mathbf{u} = P\mathbf{x} + \mathbf{w}$, így $P\mathbf{u} = P^2\mathbf{x} + P\mathbf{w} = P\mathbf{x} + \mathbf{0} = \mathbf{v}$. Tehát $P$ vetítés. $\square$

A 7.46. tételben láttuk, hogy egy $\mathbf{P}$ mátrix pontosan akkor mátrixa egy merőleges vetítésnek, ha $\mathbf{P}^2 = \mathbf{P}$ és $\mathbf{P}^{\mathsf{T}} = \mathbf{P}$, azaz ha $\mathbf{P}$ idempotens és szimmetrikus. Így nyilvánvaló az alábbi állítás:

**7.60. következmény (Mikor merőleges egy vetítés?).** *Legyen $\mathbf{P}$ egy vetítés mátrixa. $\mathbf{P}$ pontosan akkor egy merőleges vetítés mátrixa, ha $\mathbf{P}$ szimmetrikus.*

### Feladatok

**7.18.** Igazoljuk a síkbeli egyenesre merőlegesen vetítő mátrix (7.9) képletét az $\mathbf{i}$ és $\mathbf{j}$ vektorok vetületének meghatározásával! Kétféleképp is számolhatunk, *a)* legyen az egyenes hajlásszöge az $x$-tengellyel $\alpha$, *b)* legyen az egyenes irányvektora $(b_1, b_2)$. Vessük össze a két eredményt, és igazoljuk azonosságukat.

**7.19. Mikor merőleges egy vetítés?** Legyen $P : \mathbb{R}^n \to \mathbb{R}^n$ egy vetítés. Mutassuk meg, hogy $P$ pontosan akkor merőleges vetítés, ha minden $\mathbf{v} \in \mathbb{R}^n$ vektorra $|P\mathbf{v}| \le |\mathbf{v}|$.

## Pszeudoinverz[^p295_1]

A mátrix inverzének olyan – pszeudoinverznek nevezett – általánosítását keressük, mely képes lesz bármely $\mathbf{A}\mathbf{x} = \mathbf{b}$ (konzisztens vagy inkonzisztens) egyenletrendszerből a minimális abszolút értékű $\hat{\mathbf{x}}$ optimális megoldást a mátrix inverzéhez hasonló módon megadni.

### A pszeudoinverz fogalma

Tetszőleges valós $\mathbf{A}$ mátrixhoz olyan $\mathbf{A}^+$-szal jelölt mátrixot keresünk, mely megadja az $\mathbf{A}\mathbf{x} = \mathbf{b}$ egyenlet minimális abszolút értékű optimális megoldását az $\hat{\mathbf{x}} = \mathbf{A}^+\mathbf{b}$ képlettel.

Tudjuk, hogy az $A : \mathbf{x} \mapsto \mathbf{A}\mathbf{x}$ mátrixleképezés a sorteret kölcsönösen egyértelmű módon viszi az oszloptérbe. Tehát ha $\mathbf{A}^+$ a sortér és oszloptér közt invertálja a fenti leképezést, akkor konzisztens $\mathbf{A}\mathbf{x} = \mathbf{b}$ egyenlet sortérbe eső $\hat{\mathbf{x}}$ megoldására $\hat{\mathbf{x}} = \mathbf{A}^+\mathbf{b}$. Ha viszont $\mathbf{A}\mathbf{x} = \mathbf{b}$ inkonzisztens, akkor a $\hat{\mathbf{b}} = \operatorname{proj}_{\mathcal{O}(\mathbf{A})} \mathbf{b}$ jelöléssel $\mathbf{A}\mathbf{x} = \hat{\mathbf{b}}$ konzisztens, így fenn kell álljon az $\mathbf{A}^+\mathbf{b} = \mathbf{A}^+\hat{\mathbf{b}} = \hat{\mathbf{x}}$ egyenlőség. Ez azt jelenti, hogy $\mathbf{A}^+(\mathbf{b} - \hat{\mathbf{b}}) = \mathbf{0}$, vagyis az $\mathcal{N}(\mathbf{A}^{\mathsf{T}})$ minden $\mathbf{z}$ vektorára $\mathbf{A}^+\mathbf{z} = \mathbf{0}$. Mindez a következő definícióhoz vezet.

> *7.20. ábra. Az $\mathbf{A}$ mátrix sortere és oszloptere közti kölcsönösen egyértelmű leképezés a pszeudoinverz fogalmának alapja.*

**7.61. definíció (A Moore–Penrose-féle pszeudoinverz).** *Legyen $\mathbf{A}$ egy $m \times n$-es valós mátrix. Pszeudoinverzén vagy Moore–Penrose-féle pszeudoinverzén azt az $\mathbf{A}^+$-szal jelölt mátrixot értjük, amellyel*
*a) a sortér minden $\mathbf{x}$ vektorára $\mathbf{A}^+(\mathbf{A}\mathbf{x}) = \mathbf{x}$, továbbá*
*b) az oszloptérre merőleges minden $\mathbf{z}$ vektora $\mathbf{A}^+\mathbf{z} = \mathbf{0}$.*

> *Azonnal látható, hogy $m \times n$-es mátrix pszeudoinverze $n \times m$-es.*

> *Mivel $\mathbf{A}\mathbf{x} \in \mathcal{O}(\mathbf{A})$, és a definícióban szereplő $\mathbf{z}$ vektor eleme $\mathcal{O}(\mathbf{A})^{\perp}$-nek, ezért az $\mathbf{A}^+$-hoz tartozó mátrixleképezés hatását ismerjük az $\mathcal{O}(\mathbf{A})$ altéren és merőleges kiegészítő alterén. E leképezés a megadott altereken lineáris, hisz az egyiken egy lineáris leképezés inverze, a másikon a zérusleképezés. Ebből következik, hogy a definícióban megadott leképezés a linearitás megtartásával egyértelműen kiterjeszthető az egész térre, hisz a tér minden vektora egyértelműen áll elő egy $\mathcal{O}(\mathbf{A})$-beli és egy rá merőleges vektor összegeként. Ebből következik, hogy a definícióbeli leképezés létezik, egyértelmű és lineáris, így van mátrixa.*

> *A definícióból azonnal adódik az is, hogy $\mathcal{N}(\mathbf{A}^+) = \mathcal{N}(\mathbf{A}^{\mathsf{T}})$, és $\mathcal{S}(\mathbf{A}^+) = \mathcal{N}(\mathbf{A}^+)^{\perp}$, így $\mathcal{S}(\mathbf{A}^+) = \mathcal{S}(\mathbf{A}^{\mathsf{T}}) = \mathcal{O}(\mathbf{A})$.*

**7.62. példa (Néhány pszeudoinverz).** *A definíció alapján igazoljuk az alábbi összefüggéseket!*
*a) $\mathbf{A}^+ = \mathbf{A}^{-1}$, ha $\mathbf{A}$ invertálható,*
*b) $\mathbf{O}_{m \times n}^+ = \mathbf{O}_{n \times m}$,*

[^p295_1]: A matematika történetében a pszeudoinverz fogalma többször, egymástól függetlenül is megjelent. A matrixinverz fogalmának több más általánosítása is létezik, melyeket itt nem tárgyalunk. A továbbiakban pszeudoinverzen az itt definiálandó Moore–Penrose-féle pszeudoinverzet fogjuk érteni.
*c) $[a]^+ = [1/a]$, ha $a \ne 0$, és $[0]^+ = [0]$,*
*d) $(\mathbf{A}^+)^+ = \mathbf{A}$,*
*e) ha $a_{ii} \ne 0$ ($i = 1, 2, \ldots, r$), akkor*

$$\left[\begin{array}{cccc|c} a_{11} & 0 & \ldots & 0 & \\ 0 & a_{22} & \ldots & 0 & \\ \vdots & \vdots & \ddots & \vdots & \mathbf{O} \\ 0 & 0 & \ldots & a_{rr} & \\ \hline & & \mathbf{O} & & \mathbf{O} \end{array}\right]_{m \times n}^{+} = \left[\begin{array}{cccc|c} \frac{1}{a_{11}} & 0 & \ldots & 0 & \\ 0 & \frac{1}{a_{22}} & \ldots & 0 & \\ \vdots & \vdots & \ddots & \vdots & \mathbf{O} \\ 0 & 0 & \ldots & \frac{1}{a_{rr}} & \\ \hline & & \mathbf{O} & & \mathbf{O} \end{array}\right]_{n \times m} \tag{7.12}$$

> *E példa a) pontja mutatja, hogy a pszeudoinverz név nem igazán jó, hisz itt nem álinverzről, nem hamis inverzről van szó, hanem az inverz általánosításáról, tehát az általánosított inverz helyesebb kifejezés. Szokás ezt is használni, de a Moore–Penrose pszeudoinverz kifejezés sokkal elterjedtebb (angol nyelvű művekben is leginkább a 'pseudoinverse' szót használják).*

Megoldás. *a)* Ha $\mathbf{A}$ egy $n \times n$-es méretű invertálható mátrix, akkor sortere és oszloptere is a teljes $n$-dimenziós tér, és tetszőleges $\mathbf{x}$ vektorra $\mathbf{A}^+\mathbf{A}\mathbf{x} = \mathbf{x}$, tehát $\mathbf{A}^+ = \mathbf{A}^{-1}$.

*b)* Zérusmátrix oszloptere a zérusvektorból áll, így pszeudoinverze annak merőleges kiegészítő alterét, vagyis az egész teret a nullvektorba viszi, tehát $\mathbf{O}_{m \times n}^+ = \mathbf{O}_{n \times m}$.

*c)* Az előző két eredményből azonnal következik.

*d)* Ha $\mathbf{x} \in \mathcal{S}(\mathbf{A})$ és $\mathbf{y} = \mathbf{A}\mathbf{x}$, akkor $\mathbf{A}^+\mathbf{y} = \mathbf{x}$, és mivel $\mathbf{y} \in \mathcal{O}(\mathbf{A}) = \mathcal{S}(\mathbf{A}^+)$, ezért $(\mathbf{A}^+)^+\mathbf{x} = \mathbf{y}$. Ha pedig $\mathbf{z} \perp \mathcal{O}(\mathbf{A}^+) = \mathcal{S}(\mathbf{A})$, akkor $(\mathbf{A}^+)^+\mathbf{z} = \mathbf{0}$, azaz az $\mathbf{A}$ és az $(\mathbf{A}^+)^+$ mátrixokhoz tartozó leképezések megegyeznek az $\mathcal{S}(\mathbf{A})$ és az $\mathcal{N}(\mathbf{A})$ altereken, így az általuk kifeszített téren, azaz $\mathbb{R}^n$-en is. Tehát $\mathbf{A} = (\mathbf{A}^+)^+$.

*e)* Jelölje $\mathbb{R}^n$ standard bázisának elemeit $\mathbf{e}_i$ ($i = 1, 2, \ldots, n$), $\mathbb{R}^m$ standard bázisának elemeit $\mathbf{f}_i$ ($i = 1, 2, \ldots, m$). Ha $a_{ii} \ne 0$, akkor $\mathbf{A}\mathbf{e}_i = a_{ii}\mathbf{f}_i$, és $\mathbf{e}_i$ a sortérben, $\mathbf{f}_i$ az oszloptérben van. Ha $a_{ii} = 0$, akkor $\mathbf{A}\mathbf{e}_i = \mathbf{0}$. Így $\mathbf{A}^+\mathbf{f}_i = 1/a_{ii}\mathbf{e}_i$ ha $a_{ii} \ne 0$ és $\mathbf{A}^+\mathbf{f}_i = \mathbf{0}$ egyébként. $\mathbf{A}^+$ mátrixának ezek az oszlopvektorai, így a főátlójában $1/a_{ii}$ áll, ha $a_{ii} \ne 0$, együtt 0. Gondoljuk meg, miért elég megadni $\mathbf{A}^+$ hatását csak a báziselemeken? $\square$

A pszeudoinverz létezése és egyértelműsége a definíció közvetlen következménye. Most megkonstruáljuk mátrixát.

**7.63. tétel (A pszeudoinverz mátrixa).** *Ha a valós $\mathbf{A}$ mátrix teljes oszloprangú, akkor*

$$\mathbf{A}^+ = (\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}}, \tag{7.13}$$

*ha teljes sorrangú, akkor*

$$\mathbf{A}^+ = \mathbf{A}^{\mathsf{T}}(\mathbf{A}\mathbf{A}^{\mathsf{T}})^{-1}. \tag{7.14}$$

*Legyen $\mathbf{A} = \mathbf{B}\mathbf{C}$, ahol $\mathbf{B}$ egy teljes oszloprangú, $\mathbf{C}$ egy teljes sorrangú mátrix (ilyen felbontás mindig létezik, pl. ilyen a bázisfelbontás). Ekkor*

$$\mathbf{A}^+ = \mathbf{C}^+\mathbf{B}^+ = \mathbf{C}^{\mathsf{T}}(\mathbf{C}\mathbf{C}^{\mathsf{T}})^{-1}(\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1}\mathbf{B}^{\mathsf{T}} \tag{7.15}$$

$$\phantom{\mathbf{A}^+ = \mathbf{C}^+\mathbf{B}^+} = \mathbf{C}^{\mathsf{T}}(\mathbf{B}^{\mathsf{T}}\mathbf{A}\mathbf{C}^{\mathsf{T}})^{-1}\mathbf{B}^{\mathsf{T}}. \tag{7.16}$$

Bizonyítás. Ha $\mathbf{A}$ teljes oszloprangú, akkor értelmezési tartományának minden vektora a sortérben van, így minden $\mathbf{x}$ vektorra az $\mathbf{A}\mathbf{x}$ vektorból vissza kell kapnunk $\mathbf{x}$-et egy megfelelő mátrixszal való szorzással. Mivel teljes oszloprangú $\mathbf{A}$ mátrixra $\mathbf{A}^{\mathsf{T}}\mathbf{A}$ invertálható, ezért a (7.13)-beli mátrix megfelelő, hisz

$$(\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}}\mathbf{A}\mathbf{x} = \mathbf{x}.$$

Meg kell még mutatnunk, hogy ha $\mathbf{z}$ merőleges az oszloptérre, azaz ha $\mathbf{z} \in \mathcal{N}(\mathbf{A}^{\mathsf{T}})$, vagyis ha $\mathbf{A}^{\mathsf{T}}\mathbf{z} = \mathbf{0}$, akkor $\mathbf{A}^+\mathbf{z} = \mathbf{0}$, de ez valóban igaz, hisz ekkor $(\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}}\mathbf{z} = (\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{0} = \mathbf{0}$.

Ha $\mathbf{A}$ teljes sorrangú, akkor az oszloptér megegyezik az egész térrel, így a tér bármely $\mathbf{y}$ vektora esetén az $\mathbf{A}\mathbf{x} = \mathbf{y}$ egyenletrendszer konzisztens. Ha $\hat{\mathbf{x}}$ jelöli az egyetlen sortérbe eső megoldást, akkor minden más $\mathbf{x}$ megoldás esetén $\operatorname{proj}_{\mathcal{S}(\mathbf{A})} \mathbf{x} = \hat{\mathbf{x}}$. Így $\mathbf{A}^+$-ra fenn kell állnia az $\mathbf{A}^+\mathbf{y} = \hat{\mathbf{x}}$ összefüggésnek. Ez pedig fönnáll, hisz

$$\operatorname{proj}_{\mathcal{S}(\mathbf{A})} \mathbf{x} = \mathbf{A}^{\mathsf{T}}(\mathbf{A}\mathbf{A}^{\mathsf{T}})^{-1}\mathbf{A}\mathbf{x} = \left(\mathbf{A}^{\mathsf{T}}(\mathbf{A}\mathbf{A}^{\mathsf{T}})^{-1}\right)(\mathbf{A}\mathbf{x}) = \mathbf{A}^+\mathbf{y}.$$

Végül az általános esetben legyen $\mathbf{A} = \mathbf{B}\mathbf{C}$, továbbá $\mathbf{y} = \mathbf{A}\mathbf{x}$, $\mathbf{w} = \mathbf{C}\mathbf{x}$ és $\mathbf{y} = \mathbf{B}\mathbf{w}$. Mivel $\mathbf{B}$ teljes oszloprangú, $\mathbf{C}$ teljes sorrangú, ezért $\mathbf{C}^+\mathbf{B}^+\mathbf{y} = \mathbf{C}^+\mathbf{w} = \mathbf{x}$, vagyis a $\mathbf{C}^+\mathbf{B}^+$ teljesíti a definíció *a)* feltételét. A *b)* is teljesül, hisz $\mathbf{A}$ és $\mathbf{B}$ oszloptere megegyezik, így $\mathbf{B}^+\mathbf{z} = \mathbf{0}$, tehát $\mathbf{C}^+\mathbf{B}^+\mathbf{z} = \mathbf{0}$ is fennáll. A (7.15) és a (7.16) képletek behelyettesítéssel, majd az $(\mathbf{C}\mathbf{C}^{\mathsf{T}})^{-1}(\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1} = (\mathbf{B}^{\mathsf{T}}\mathbf{B}\mathbf{C}\mathbf{C}^{\mathsf{T}})^{-1} = (\mathbf{B}^{\mathsf{T}}\mathbf{A}\mathbf{C}^{\mathsf{T}})^{-1}$ átalakítással azonnal adódnak. $\square$

> *A (7.13) képlet tökéletes összhangban van az egyenletrendszer optimális megoldásáról szóló 7.51. tétel állításával. Ott arra jutottunk, hogy az $\mathbf{A}\mathbf{x} = \mathbf{b}$ egyenletrendszer optimális megoldásai megegyeznek az $\mathbf{A}^{\mathsf{T}}\mathbf{A}\hat{\mathbf{x}} = \mathbf{A}^{\mathsf{T}}\mathbf{b}$ egyenletrendszer megoldásaival. Ha pedig $\mathbf{A}$ teljes oszloprangú, akkor $\mathbf{A}^{\mathsf{T}}\mathbf{A}$ invertálható, így az optimális megoldás $\hat{\mathbf{x}} = (\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}}\mathbf{b}$, azaz a (7.13) képlet szerint $\hat{\mathbf{x}} = \mathbf{A}^+\mathbf{b}$, ahogy azt célul tűztük ki e paragrafus elején.*

> *Általában nem igaz a pszeudoinverzre az $(\mathbf{X}\mathbf{Y})^+ = \mathbf{Y}^+\mathbf{X}^+$ összefüggés. Csak azt bizonyítottuk, hogy fennáll, ha $\mathbf{X}$ teljes oszloprangú, és $\mathbf{Y}$ teljes sorrangú. Pl. $\left(\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}\begin{bmatrix} 0 & 0 \\ 0 & 1 \end{bmatrix}\right)^+ \ne \begin{bmatrix} 0 & 1 \\ 0 & 1 \end{bmatrix}^+ \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}^+$ (ld. 7.23. feladat).*

> *A (7.15) képlettel bizonyítható (ld. 7.27. feladat), hogy transzponált pszeudoinverze megegyezik pszeudoinverzének transzponáltjával, azaz*

$$(\mathbf{A}^{\mathsf{T}})^+ = (\mathbf{A}^+)^{\mathsf{T}}. \tag{7.17}$$

**7.64. példa (A pszeudoinverz kiszámítása).** *Számítsuk ki a*

$$\mathbf{B} = \begin{bmatrix} 0 & 1 \\ 1 & 1 \\ 1 & 0 \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \end{bmatrix} \quad \text{és} \quad \mathbf{M} = \begin{bmatrix} 0 & 1 & 1 \\ 1 & 1 & 2 \\ 1 & 0 & 1 \end{bmatrix}$$

*mátrixok pszeudoinverzét!*

Megoldás. Mivel $\mathbf{B}$ teljes oszloprangú, ezért a (7.13) képlet szerint

$$\begin{aligned}
\mathbf{B}^+ = (\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1}\mathbf{B}^{\mathsf{T}} &= \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix}^{-1} \begin{bmatrix} 0 & 1 & 1 \\ 1 & 1 & 0 \end{bmatrix} \\
&= \begin{bmatrix} 2/3 & -1/3 \\ -1/3 & 2/3 \end{bmatrix} \begin{bmatrix} 0 & 1 & 1 \\ 1 & 1 & 0 \end{bmatrix} = \begin{bmatrix} -1/3 & 1/3 & 2/3 \\ 2/3 & 1/3 & -1/3 \end{bmatrix}.
\end{aligned}$$

A $\mathbf{C}$ mátrix teljes sorrangú, így a (7.14) képlet szerint

$$\begin{aligned}
\mathbf{C}^+ = \mathbf{C}^{\mathsf{T}}(\mathbf{C}\mathbf{C}^{\mathsf{T}})^{-1} &= \begin{bmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{bmatrix} \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix}^{-1} \\
&= \begin{bmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{bmatrix} \begin{bmatrix} 2/3 & -1/3 \\ -1/3 & 2/3 \end{bmatrix} = \begin{bmatrix} 2/3 & -1/3 \\ -1/3 & 2/3 \\ 1/3 & 1/3 \end{bmatrix}.
\end{aligned}$$

Az $\mathbf{M}^+$ kiszámításához első lépésként meghatározzuk $\mathbf{M}$ bázisfelbontását. Mivel $\operatorname{rref}(\mathbf{M}) = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \end{bmatrix}$, és $\mathbf{M}$ első két oszlopa bázisoszlop, ezért

$$\mathbf{M} = \begin{bmatrix} 0 & 1 \\ 1 & 1 \\ 1 & 0 \end{bmatrix} \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \end{bmatrix}.$$

A feladat első felében használt jelölésekkel $\mathbf{M} = \mathbf{B}\mathbf{C}$, így a (7.15) képlettel számolva – és fölhasználva az előbb kiszámolt pszeudoinverzeket

$$\mathbf{M}^+ = \mathbf{C}^+\mathbf{B}^+ = \begin{bmatrix} 2/3 & -1/3 \\ -1/3 & 2/3 \\ 1/3 & 1/3 \end{bmatrix} \begin{bmatrix} -1/3 & 1/3 & 2/3 \\ 2/3 & 1/3 & -1/3 \end{bmatrix} = \frac{1}{9}\begin{bmatrix} -4 & 1 & 5 \\ 5 & 1 & -4 \\ 1 & 2 & 1 \end{bmatrix}$$

Számolhatunk közvetlenül a (7.16) képlettel is:

$$
\begin{aligned}
\mathbf{M}^+ &= \mathbf{C}^{\mathsf{T}}(\mathbf{B}^{\mathsf{T}}\mathbf{M}\mathbf{C}^{\mathsf{T}})^{-1}\mathbf{B}^{\mathsf{T}} \\
&= \begin{bmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{bmatrix}
\left( \begin{bmatrix} 0 & 1 & 1 \\ 1 & 1 & 0 \end{bmatrix}
\begin{bmatrix} 0 & 1 & 1 \\ 1 & 1 & 2 \\ 1 & 0 & 1 \end{bmatrix}
\begin{bmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{bmatrix} \right)^{-1}
\begin{bmatrix} 0 & 1 & 1 \\ 1 & 1 & 0 \end{bmatrix} \\
&= \frac{1}{9} \begin{bmatrix} -4 & 1 & 5 \\ 5 & 1 & -4 \\ 1 & 2 & 1 \end{bmatrix}
\end{aligned}
$$

$\square$

*A pszeudoinverz tulajdonságai* Az $\mathbf{A}$ mátrix inverzét az $\mathbf{AX} = \mathbf{I}$ egyenlőséggel definiáltuk. Hasonló egyenlőségeket keresünk a pszeudoinverzhez is. Közben azt a fontos tényt is fölfedezzük, hogy $\mathbf{A}^+\mathbf{A}$ és $\mathbf{AA}^+$ is egy-egy merőleges vetítés mátrixa.

Azt nem tudjuk garantálni, hogy az $\mathbf{AA}^+$ és az $\mathbf{A}^+\mathbf{A}$ mátrixok az egységmátrixszal legyenek egyenlők, de a legalább szimmetrikusak, és az $\mathbf{A}$-val, illetve az $\mathbf{A}^+$-szal való szorzásra nézve egységmátrixként viselkednek, azaz $\mathbf{AA}^+\mathbf{A} = \mathbf{A}$ és $\mathbf{A}^+\mathbf{AA}^+ = \mathbf{A}^+$. E feltételek már elegendők lesznek a pszeudoinverz algebrai leírásához.

**7.65. tétel (Moore–Penrose-tétel).** *A valós $\mathbf{A}$ mátrixnak $\mathbf{X}$ pontosan akkor pszeudoinverze, ha az alábbi négy feltétel mindegyike fennáll:*

*a) $\mathbf{AXA} = \mathbf{A}$,  b) $\mathbf{XAX} = \mathbf{X}$,  c) $(\mathbf{AX})^{\mathsf{T}} = \mathbf{AX}$,  d) $(\mathbf{XA})^{\mathsf{T}} = \mathbf{XA}$.*

Bizonyítás. Azt, hogy $\mathbf{A}$ pszeudoinverze teljesíti e négy feltételt, egyszerű behelyettesítéssel ellenőrizhetjük.

$$
\begin{aligned}
\mathbf{AA}^+\mathbf{A} &= \mathbf{A}\mathbf{R}^{\mathsf{T}}(\mathbf{RR}^{\mathsf{T}})^{-1}(\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1}\mathbf{B}^{\mathsf{T}}\mathbf{A} \\
&= \mathbf{B}\mathbf{R}\mathbf{R}^{\mathsf{T}}(\mathbf{RR}^{\mathsf{T}})^{-1}(\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1}\mathbf{B}^{\mathsf{T}}\mathbf{B}\mathbf{R} = \mathbf{BR} = \mathbf{A} \\
\mathbf{A}^+\mathbf{AA}^+ &= \mathbf{R}^{\mathsf{T}}(\mathbf{RR}^{\mathsf{T}})^{-1}(\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1}\mathbf{B}^{\mathsf{T}}\mathbf{B}\mathbf{R}\mathbf{R}^{\mathsf{T}}(\mathbf{RR}^{\mathsf{T}})^{-1}(\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1}\mathbf{B}^{\mathsf{T}} \\
&= \mathbf{R}^{\mathsf{T}}(\mathbf{RR}^{\mathsf{T}})^{-1}(\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1}\mathbf{B}^{\mathsf{T}} = \mathbf{A}^+
\end{aligned}
$$

A c) és az d) ellenőrzéséhez egyszerűsítsük az $\mathbf{A}^+\mathbf{A}$ és $\mathbf{AA}^+$ kifejezéseket:

$$
\begin{aligned}
\mathbf{A}^+\mathbf{A} &= (\mathbf{R}^{\mathsf{T}}(\mathbf{RR}^{\mathsf{T}})^{-1}(\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1}\mathbf{B}^{\mathsf{T}})(\mathbf{BR}) = \mathbf{R}^{\mathsf{T}}(\mathbf{RR}^{\mathsf{T}})^{-1}\mathbf{R}, && (7.18) \\
\mathbf{AA}^+ &= (\mathbf{BR})(\mathbf{R}^{\mathsf{T}}(\mathbf{RR}^{\mathsf{T}})^{-1}(\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1}\mathbf{B}^{\mathsf{T}}) = \mathbf{B}(\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1}\mathbf{B}^{\mathsf{T}}. && (7.19)
\end{aligned}
$$

Ezeket fölhasználva kapjuk, hogy

$$
\begin{aligned}
(\mathbf{A}^+\mathbf{A})^{\mathsf{T}} &= (\mathbf{R}^{\mathsf{T}}(\mathbf{RR}^{\mathsf{T}})^{-1}\mathbf{R})^{\mathsf{T}} = \mathbf{R}^{\mathsf{T}}(\mathbf{RR}^{\mathsf{T}})^{-1}\mathbf{R} = \mathbf{A}^+\mathbf{A} \\
(\mathbf{AA}^+)^{\mathsf{T}} &= (\mathbf{B}(\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1}\mathbf{B}^{\mathsf{T}})^{\mathsf{T}} = \mathbf{B}(\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1}\mathbf{B}^{\mathsf{T}} = \mathbf{AA}^+,
\end{aligned}
$$

ami bizonyítja az c) és az d) egyenlőségeket. Már csak azt kell bizonyítani, hogy ezeket az összefüggéseket legföljebb csak egy mátrix teljesíti. Tegyük fel, hogy $\mathbf{X}$ és $\mathbf{Y}$ is teljesíti a négy feltételt. Ekkor

$$
\begin{aligned}
\mathbf{AY} &\overset{a)}{=} \mathbf{AXAY} \overset{c)}{=} (\mathbf{AX})^{\mathsf{T}}(\mathbf{AY})^{\mathsf{T}} = \mathbf{X}^{\mathsf{T}}\mathbf{A}^{\mathsf{T}}\mathbf{Y}^{\mathsf{T}}\mathbf{A}^{\mathsf{T}} \\
&= \mathbf{X}^{\mathsf{T}}(\mathbf{AYA})^{\mathsf{T}} \overset{a)}{=} \mathbf{X}^{\mathsf{T}}\mathbf{A}^{\mathsf{T}} = (\mathbf{AX})^{\mathsf{T}} \overset{c)}{=} \mathbf{AX} && (7.20) \\
\mathbf{YA} &\overset{a)}{=} \mathbf{YAXA} \overset{d)}{=} (\mathbf{YA})^{\mathsf{T}}(\mathbf{XA})^{\mathsf{T}} = \mathbf{A}^{\mathsf{T}}\mathbf{Y}^{\mathsf{T}}\mathbf{A}^{\mathsf{T}}\mathbf{X}^{\mathsf{T}} \\
&= (\mathbf{AYA})^{\mathsf{T}}\mathbf{X}^{\mathsf{T}} \overset{a)}{=} \mathbf{A}^{\mathsf{T}}\mathbf{X}^{\mathsf{T}} = (\mathbf{XA})^{\mathsf{T}} \overset{d)}{=} \mathbf{XA} && (7.21) \\
\mathbf{Y} &\overset{b)}{=} \mathbf{YAY} \overset{(7.20)}{=} \mathbf{YAX} \overset{(7.21)}{=} \mathbf{XAX} \overset{b)}{=} \mathbf{X}.
\end{aligned}
$$

Ezzel bizonyítottuk a tételt. $\square$

**7.66. következmény ($\mathbf{A}^+\mathbf{A}$ és $\mathbf{AA}^+$ merőleges vetítés).** *Tetszőleges $\mathbf{A} \in \mathbb{R}^{m \times n}$ mátrix esetén*

$$
\mathbf{A}^+\mathbf{A} = \operatorname{proj}_{\mathcal{S}(\mathbf{A})} \quad \text{és} \quad \mathbf{AA}^+ = \operatorname{proj}_{\mathcal{O}(\mathbf{A})}.
$$

*Tehát $\mathbf{A}^+\mathbf{A}$ az $\mathbb{R}^n$ teret merőlegesen vetíti $\mathbf{A}$ sorterére, míg $\mathbf{AA}^+$ az $\mathbb{R}^m$ teret merőlegesen vetíti $\mathbf{A}$ oszlopterére.*

Bizonyítás. A (7.18) egyenlőség szerint $\mathbf{A}^+\mathbf{A} = \mathbf{R}^{\mathsf{T}}(\mathbf{RR}^{\mathsf{T}})^{-1}\mathbf{R}$, ami az altérre való merőleges vetítés mátrixáról szóló 7.44. tétel szerint az $\mathbf{R}^{\mathsf{T}}$ oszlopvektorai által kifeszített térre – azaz a sortérre – való merőleges vetítés mátrixa. Hasonlóképp a (7.19) egyenlet szerint $\mathbf{AA}^+ = \mathbf{B}(\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1}\mathbf{B}^{\mathsf{T}}$, ami a $\mathbf{B}$ oszlopvektorai által kifeszített térre – azaz az oszloptérre – való merőleges vetítés mátrixa. $\square$

*A pszeudoinverz és a minimális abszolút értékű optimális megoldás* Megmutatjuk, hogy $\mathbf{A}^+$ úgy használható egy tetszőleges együtthatómátrixú $\mathbf{Ax} = \mathbf{b}$ egyenletrendszer optimális megoldásának meghatározására, ahogy $\mathbf{A}^{-1}$ használható akkor, ha $\mathbf{A}$ invertálható.

**7.67. tétel (Optimális megoldás pszeudoinverzzel).** *Legyen $\mathbf{A}$ egy valós mátrix. Az $\mathbf{Ax} = \mathbf{b}$ egyenletrendszernek az $\hat{\mathbf{x}} = \mathbf{A}^+\mathbf{b}$ a minimális abszolút értékű optimális megoldása.*

Bizonyítás. Először megmutatjuk, hogy $\mathbf{A}^+\mathbf{b}$ optimális megoldás, azaz megoldása az $\mathbf{A}^{\mathsf{T}}\mathbf{Ax} = \mathbf{A}^{\mathsf{T}}\mathbf{b}$ normálegyenlet-rendszernek. Tehát igazolni kell, hogy $\mathbf{A}^{\mathsf{T}}\mathbf{AA}^+\mathbf{b} = \mathbf{A}^{\mathsf{T}}\mathbf{b}$. Ehhez elég belátni, hogy $\mathbf{A}^{\mathsf{T}}\mathbf{AA}^+ = \mathbf{A}^{\mathsf{T}}$. Legyen $\mathbf{A} = \mathbf{BR}$ az $\mathbf{A}$ mátrix bázisfelbontása. Ekkor

$$
\begin{aligned}
\mathbf{A}^{\mathsf{T}}\mathbf{AA}^+ &= (\mathbf{R}^{\mathsf{T}}\mathbf{B}^{\mathsf{T}})(\mathbf{B}(\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1}\mathbf{B}^{\mathsf{T}}) \\
&= \mathbf{R}^{\mathsf{T}}(\mathbf{B}^{\mathsf{T}}\mathbf{B})(\mathbf{B}^{\mathsf{T}}\mathbf{B})^{-1}\mathbf{B}^{\mathsf{T}} = \mathbf{R}^{\mathsf{T}}\mathbf{B}^{\mathsf{T}} = \mathbf{A}^{\mathsf{T}}
\end{aligned}
$$

Mivel $\mathbf{A}^+\mathbf{b}$ a definícióból következőleg a sortérben van, és a sortérbe csak egyetlen optimális megoldás – a minimális abszolút értékű megoldás – esik, ezért $\mathbf{A}^+\mathbf{b}$ valóban a minimális abszolút értékű optimális megoldás. $\square$

A gyakorlatban gyakran előfordul, hogy mért adatokból kell bizonyos változók értékét meghatározni. Ha az $n$ ismeretlen értékre a mérési hibákat kiküszöbölendő $n$-nél több mérést végzünk, az egyenletrendszer könnyen ellentmondásossá válhat. Ehhez hasonló esetet mutat a következő példa.

**7.68. példa (Egyenletrendszer optimális megoldása).** *Az alábbi háromismeretlenes egyenletrendszer négy egyenletből áll:*

$$
\begin{alignedat}{9}
x &{}+{}& 3y &{}+{}& 6z &{}={}& 8 \\
x &{}-{}&  y &{}+{}& 2z &{}={}& 2 \\
x &{}+{}& 3y &{}+{}& 2z &{}={}& 2 \\
x &{}-{}&  y &{}-{}& 2z &{}={}& 0
\end{alignedat}
$$

*Bármelyik három egyértelműen megoldható egyenletrendszert ad, de a négy együtt ellentmondásos. Határozzuk meg az optimális megoldását!*

Megoldás. A 7.67. tétel szerint az optimális megoldás $\mathbf{A}^+\mathbf{b}$, ahol

$$
\mathbf{A} = \begin{bmatrix} 1 & 3 & 6 \\ 1 & -1 & 2 \\ 1 & 3 & 2 \\ 1 & -1 & -2 \end{bmatrix} \qquad
\mathbf{b} = \begin{bmatrix} 8 \\ 2 \\ 2 \\ 0 \end{bmatrix}
$$

Mivel $\mathbf{A}$ teljes oszloprangú, ezért csak egyetlen optimális megoldása van, másrészt pszeudoinverze a (7.13) képlettel számolható, így

$$
\mathbf{A}^+ = (\mathbf{A}^{\mathsf{T}}\mathbf{A})^{-1}\mathbf{A}^{\mathsf{T}} = \begin{bmatrix} 0 & 1/4 & 1/4 & 1/2 \\ 0 & -1/4 & 1/4 & 0 \\ 1/8 & 1/8 & -1/8 & -1/8 \end{bmatrix} \qquad
\mathbf{A}^+\mathbf{b} = \begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix}
$$

Így az egyenletrendszer optimális megoldása $(1, 0, 1)$. $\square$

A következő példa olyan egyenletrendszert vizsgál, melyben az együtthatómátrix rangja kisebb mind az egyenletek, mind az ismeretlenek számánál.

**7.69. példa (Egyenletrendszer optimális megoldása).** *Adjuk meg az*

$$
\begin{alignedat}{9}
  &       &  y &{}+{}&  z &{}={}& 3 \\
x &{}+{}&  y &{}+{}& 2z &{}={}& 2 \\
x &       &    &{}+{}&  z &{}={}& 2
\end{alignedat}
$$

*egyenletrendszer minimális abszolút értékű optimális megoldását!*

Megoldás. Az egyenletrendszer inkonzisztens, ami bővített mátrixának redukált lépcsős alakjából leolvasható. Ezt igazoltuk a 7.52. példában, ahol a minimális abszolút értékű megoldást is meghatároztuk. Most az együtthatómátrix pszeudoinverzét fogjuk használni, melyet meghatároztunk a 10.12. példában. Így a minimális abszolút értékű optimális megoldás

$$
\hat{\mathbf{x}} = \mathbf{A}^+\mathbf{b} = \frac{1}{9}\begin{bmatrix} -4 & 1 & 5 \\ 5 & 1 & -4 \\ 1 & 2 & 1 \end{bmatrix}\begin{bmatrix} 3 \\ 2 \\ 2 \end{bmatrix} = \begin{bmatrix} 0 \\ 1 \\ 1 \end{bmatrix}.
$$

$\square$

### Feladatok

*Pszeudoinverz*

*Számítsuk ki az alábbi mátrixok pszeudoinverzét!*

**7.20.** 1-rangú mátrixok:

a) $\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}$  b) $\begin{bmatrix} 1 \\ 0 \end{bmatrix}$  c) $\begin{bmatrix} 0 \\ 1 \end{bmatrix}$
d) $\begin{bmatrix} 1 & 1 \\ 0 & 0 \end{bmatrix}$  e) $\begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix}$  f) $\begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}$

**7.21.** További 1-rangú mátrixok:

a) $\begin{bmatrix} 1 & 1 \\ 2 & 2 \end{bmatrix}$  b) $\begin{bmatrix} 1 & 2 \\ 1 & 2 \end{bmatrix}$  c) $\begin{bmatrix} 0 & 2 \\ 0 & 2 \end{bmatrix}$
d) $\begin{bmatrix} 1 & 1 \\ 2 & 2 \\ 0 & 0 \end{bmatrix}$  e) $\begin{bmatrix} 1 & 1 & 1 & 1 \end{bmatrix}$  f) $\begin{bmatrix} 1 \\ 2 \\ 3 \\ 4 \end{bmatrix}$

**7.22.** 2-rangú mátrixok:

a) $\begin{bmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \end{bmatrix}$  b) $\begin{bmatrix} 1 & 0 \\ 2 & 2 \\ 0 & 1 \end{bmatrix}$
c) $\begin{bmatrix} 1 & 2 & 0 \\ 0 & 2 & 1 \end{bmatrix}$  d) $\begin{bmatrix} 1 & 1 & 0 \\ 2 & 4 & 2 \\ 0 & 1 & 1 \end{bmatrix}$

**7.23.** Legyen $\mathbf{X} = \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}$, $\mathbf{Y} = \begin{bmatrix} 0 & 1 \\ 0 & 1 \end{bmatrix}$. Ellenőrizzük, hogy $(\mathbf{XY})^+ \ne \mathbf{Y}^+\mathbf{X}^+$.

*Az alábbi feladatokban határozzuk meg a felbontásaikkal megadott mátrixok pszeudoinverzét!*

**7.24.** $\mathbf{A} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \\ 0 & 0 \\ 1 & 1 \end{bmatrix}\begin{bmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \end{bmatrix}$

**7.25.** $\mathbf{A} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{bmatrix}\begin{bmatrix} 0 & 0 & 1 & 1 \\ 1 & 1 & 1 & 0 \end{bmatrix}$

**7.26.** $\mathbf{A} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \\ 2 & 2 \end{bmatrix}\begin{bmatrix} 1 & 2 & 3 \\ 3 & 2 & 1 \end{bmatrix}$

**7.27.** Igazoljuk az $(\mathbf{A}^{\mathsf{T}})^+ = (\mathbf{A}^+)^{\mathsf{T}}$ összefüggést!

**7.28.** Mutassuk meg, hogy ha $\mathbf{A}$ egy merőleges vetítés mátrixa, azaz $\mathbf{A}^{\mathsf{T}} = \mathbf{A} = \mathbf{A}^2$, akkor $\mathbf{A}^+ = \mathbf{A}$. Igaz-e az állítás megfordítása?

**7.29.** Mutassuk meg, hogy ha $\mathbf{A} \in \mathbb{R}^{m \times n}$ és $\mathbf{A}$ teljes oszloprangú, akkor $\mathbf{A}^+\mathbf{A} = \mathbf{I}_m$, ha pedig $\mathbf{A}$ teljes sorrangú, akkor $\mathbf{AA}^+ = \mathbf{I}_n$.

**7.30. 1-rangú mátrixok pszeudoinverze** Mutassuk meg, hogy ha $\operatorname{r}(\mathbf{A}) = 1$, akkor

$$
\mathbf{A}^+ = \frac{1}{\operatorname{trace}(\mathbf{A}^{\mathsf{T}}\mathbf{A})}\mathbf{A}^{\mathsf{T}},
$$

ahol $\operatorname{trace}(\mathbf{A}^{\mathsf{T}}\mathbf{A})$ az $\mathbf{A}$ elemeinek négyzetösszege. Eszerint ha $\mathbf{a} \ne \mathbf{0}$, akkor

$$
\mathbf{a}^+ = \frac{1}{\mathbf{a}^{\mathsf{T}}\mathbf{a}}\mathbf{a}^{\mathsf{T}} = \frac{1}{\mathbf{a} \cdot \mathbf{a}}\mathbf{a}^{\mathsf{T}}.
$$

E feladat eredményét fölhasználva ellenőrizzük a 7.20. és a 7.21. feladatok eredményeit!

**7.31. Blokkdiagonális mátrix pszeudoinverze** Igazoljuk, hogy blokkdiagonális mátrix esetén

$$
\begin{bmatrix} \mathbf{A}_1 & \mathbf{O} & \dots & \mathbf{O} \\ \mathbf{O} & \mathbf{A}_2 & \dots & \mathbf{O} \\ \vdots & \vdots & \ddots & \vdots \\ \mathbf{O} & \mathbf{O} & \dots & \mathbf{A}_k \end{bmatrix}^+ =
\begin{bmatrix} \mathbf{A}_1^+ & \mathbf{O} & \dots & \mathbf{O} \\ \mathbf{O} & \mathbf{A}_2^+ & \dots & \mathbf{O} \\ \vdots & \vdots & \ddots & \vdots \\ \mathbf{O} & \mathbf{O} & \dots & \mathbf{A}_k^+ \end{bmatrix}.
$$

**7.32.** Számítsuk ki a

$$
\begin{bmatrix} 1 & 1 & 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 & 1 & 1 \end{bmatrix}
$$

mátrix pszeudoinverzét!

## Ortonormált bázis – ortogonális mátrix

> *Nem kell indokolni a merőlegesség fontosságát bizonyos természeti jelenségek leírásában. A lineáris algebrában is nélkülözhetetlen a fogalma. Egy altér ortonormált bázisának megkonstruálása, és azokna a leképezéseknek az áttekintése, melyek ortonormált bázist ortonormáltba visznek alapvetően fontosak.*

### Ortogonális mátrixok

*Ortogonális és ortonormált bázis* Segíti az alterek vizsgálatát, ha a bázisvektorok páronként merőlegesek egymásra, ekkor ugyanis a különböző bázisvektorok skaláris szorzata 0. További könnyítést jelenthet, ha a bázisvektorok egységvektorok, mert ekkor egy vektor velük vett skaláris szorzata a merőleges vetület hosszát adja.

Páronként merőleges vektorok egy rendszerét *ortogonális rendszernek* nevezzük. Ortogonális rendszernek lehetnek 0-vektor tagjai. Páronként merőleges egységvektorok egy rendszerét *ortonormált rendszernek* nevezzük. Ortonormált rendszerben *nincsenek* 0-vektorok. A következő tételből azonnal adódik, hogy zérusvektort nem tartalmazó ortogonális vagy egy tetszőleges ortonormált rendszer mindig bázisa az általa kifeszített altérnek. Ezt az alteret *ortogonális bázisának* (rövidítve OB), illetve *ortonormált bázisának* (rövidítve ONB) nevezzük. Ortogonális bázisból mindig kaphatunk egy ortonormáltat, ha az OB minden bázisvektorát elosztjuk a hosszával. Ezt a vektor *normálásának* nevezzük.

**7.70. tétel (Ortogonális vektorok függetlensége).** *Ha a nullvektortól különböző $\mathbf{a}_1$, $\mathbf{a}_2, \dots, \mathbf{a}_k$ vektorok páronként ortogonálisak, akkor függetlenek is.*

Bizonyítás. Tekintsük a $c_1\mathbf{a}_1 + \dots + c_k\mathbf{a}_k = \mathbf{0}$ egyenletet. Be kell látnunk, hogy ez csak a $c_1 = \dots = c_k = 0$ esetben áll fönn. Szorozzuk be az egyenlőség mindkét oldalát az $\mathbf{a}_i$ vektorral ($i = 1, 2, \dots, k$). Ekkor a jobb oldal 0, a bal oldalon pedig egy tag kivételével mindegyik 0 lesz:

$$
\begin{aligned}
(c_1\mathbf{a}_1 + c_2\mathbf{a}_2 + \dots + c_k\mathbf{a}_k) \cdot \mathbf{a}_i &= \mathbf{0} \cdot \mathbf{a}_i \\
c_i\mathbf{a}_i \cdot \mathbf{a}_i &= 0.
\end{aligned}
$$

Mivel $\mathbf{a}_i \cdot \mathbf{a}_i \ne 0$, ezért $c_i = 0$, és ez igaz minden $i$-re. $\square$

Tudjuk, hogy a háromdimenziós térben bármely $\mathbf{v} = (x, y, z)$ vektor koordinátáira igaz, hogy

$$
x = \mathbf{v} \cdot \mathbf{i}, \quad y = \mathbf{v} \cdot \mathbf{j}, \quad z = \mathbf{v} \cdot \mathbf{k}.
$$

Az is igaz, hogy az $\mathbf{i}$ és $\mathbf{j}$ által kifeszített síknak, azaz az $xy$-síknak a $\mathbf{v}$ vektorhoz legközelebb fekvő pontja, illetve az oda mutató helyvektor $\hat{\mathbf{v}} = (x, y, 0)$, azaz

$$
\hat{\mathbf{v}} = (\mathbf{v} \cdot \mathbf{i})\mathbf{i} + (\mathbf{v} \cdot \mathbf{j})\mathbf{j}
$$

Azt is tudjuk, hogy a $\mathbf{v}$-hez legközelebbi pont épp $\mathbf{v}$-nek a síkra való merőleges vetülete.

A fenti nyilvánvaló összefüggések tetszőleges ONB esetén is használhatók, így igen értékesek.

**7.71. tétel (Legjobb közelítés ONB esetén).** *Adva van az $\mathbb{R}^n$ térben egy $\{\mathbf{e}_1, \mathbf{e}_2, \dots, \mathbf{e}_k\}$ ortonormált rendszer által kifeszített $\mathcal{A}$ altér, valamint egy $\mathbf{v}$ vektor. Ekkor a*

$$
\hat{\mathbf{v}} = (\mathbf{v} \cdot \mathbf{e}_1)\mathbf{e}_1 + (\mathbf{v} \cdot \mathbf{e}_2)\mathbf{e}_2 + \dots + (\mathbf{v} \cdot \mathbf{e}_k)\mathbf{e}_k \tag{7.22}
$$

*vektor az $\mathcal{A}$ altér $\mathbf{v}$-hez legközelebb fekvő pontja, azaz $\hat{\mathbf{v}} = \operatorname{proj}_{\mathcal{A}} \mathbf{v}$.*

Bizonyítás. Először megmutatjuk, hogy a (7.22) képlet szerinti pont van legközelebb $\mathbf{v}$-hez. $\mathbf{v}$ és $\hat{\mathbf{v}}$ távolságának négyzete

$$
\begin{aligned}
(\mathbf{v} - \hat{\mathbf{v}})^2 &= \left( \mathbf{v} - \sum_{i=1}^k (\mathbf{v} \cdot \mathbf{e}_i)\mathbf{e}_i \right)^2 \\
&= \mathbf{v}^2 - 2\sum_{i=1}^k (\mathbf{v} \cdot \mathbf{e}_i)^2 + \sum_{i=1}^k (\mathbf{v} \cdot \mathbf{e}_i)^2 \\
&= \mathbf{v}^2 - \sum_{i=1}^k (\mathbf{v} \cdot \mathbf{e}_i)^2.
\end{aligned}
$$

$\mathbf{v}$ és az altér egy tetszőleges $\mathbf{u}$ vektorának távolságnégyzete:

$$
\begin{aligned}
(\mathbf{v} - \mathbf{u})^2 &= \left( \mathbf{v} - \sum_{i=1}^k c_i\mathbf{e}_i \right)^2 \\
&= \mathbf{v}^2 - 2\sum_{i=1}^k c_i(\mathbf{v} \cdot \mathbf{e}_i) + \sum_{i=1}^k c_i^2.
\end{aligned}
$$

Ha az utóbbiból kivonva az előbbit pozitív értéket kapunk, ez azt jelenti, hogy valóban $\hat{\mathbf{v}}$ van $\mathbf{v}$-hez legközelebb:

$$
\begin{aligned}
&(\mathbf{v} - \mathbf{u})^2 - (\mathbf{v} - \hat{\mathbf{v}})^2 \\
&= \left( \mathbf{v}^2 - 2\sum_{i=1}^k c_i(\mathbf{v} \cdot \mathbf{e}_i) + \sum_{i=1}^k c_i^2 \right) - \left( \mathbf{v}^2 - \sum_{i=1}^k (\mathbf{v} \cdot \mathbf{e}_i)^2 \right) \\
&= \sum_{i=1}^k c_i^2 - 2\sum_{i=1}^k c_i(\mathbf{v} \cdot \mathbf{e}_i) + \sum_{i=1}^k (\mathbf{v} \cdot \mathbf{e}_i)^2 \\
&= \sum_{i=1}^k (c_i - \mathbf{v} \cdot \mathbf{e}_i)^2 \ge 0.
\end{aligned}
$$

Ebből a legjobb közelítés tétele szerint kapjuk, hogy $\hat{\mathbf{v}} = \operatorname{proj}_{\mathcal{A}} \mathbf{v}$. $\square$

**7.72. példa (Egy pont síkra való merőleges vetülete).** *Határozzuk meg a $(3, 1, 2)$ pontnak az egymásra merőleges $\mathbf{a} = \frac{1}{7}(2, 3, 6)$ és $\mathbf{b} = \frac{1}{7}(3, -6, 2)$ vektorok által kifeszített síkra való merőleges vetületét!*

Megoldás. Mivel $\mathbf{a}$ és $\mathbf{b}$ ortonormált bázisa az általuk kifeszített altérnek, ezért a $\mathbf{v} = (3, 1, 2)$ vektornak e síkra eső merőleges vetülete

$$
\begin{aligned}
\hat{\mathbf{v}} &= (\mathbf{v} \cdot \mathbf{a})\mathbf{a} + (\mathbf{v} \cdot \mathbf{b})\mathbf{b} \\
&= \left( (3, 1, 2) \cdot \left( \tfrac{2}{7}, \tfrac{3}{7}, \tfrac{6}{7} \right) \right) \left( \tfrac{2}{7}, \tfrac{3}{7}, \tfrac{6}{7} \right) + \left( (3, 1, 2) \cdot \left( \tfrac{3}{7}, \tfrac{-6}{7}, \tfrac{2}{7} \right) \right) \left( \tfrac{3}{7}, \tfrac{-6}{7}, \tfrac{2}{7} \right) \\
&= 3\left( \tfrac{2}{7}, \tfrac{3}{7}, \tfrac{6}{7} \right) + 1\left( \tfrac{3}{7}, \tfrac{-6}{7}, \tfrac{2}{7} \right) \\
&= \left( \tfrac{9}{7}, \tfrac{3}{7}, \tfrac{20}{7} \right).
\end{aligned}
$$

Összehasonlításul: a standard elemi módszer az $\mathbf{a} \times \mathbf{b}$ irányvektorú, $(3, 1, 2)$ ponton átmenő egyenes és a sík metszéspontjának meghatározása lenne. $\square$

*Ortogonális mátrixok* Egy ortonormált vektorrendszerből képzett mátrixnak gyönyörű algebrai és geometriai tulajdonságai vannak.

**7.73. definíció (Ortogonális és szemiortogonális mátrix).** *Egy valós négyzetes mátrixot ortogonálisnak nevezünk, ha oszlopvektorai vagy sorvektorai ortonormált rendszert alkotnak. Ha nem kötjük ki, hogy a mátrix négyzetes legyen, szemiortogonális mátrixról beszélünk.*

> *Látni fogjuk, hogy az ortogonális mátrixok definíciójában elég csak az oszlopvektorok vagy csak a sorvektorok ortonormalitását kikötni, mert mindegyikből következik a másik. Ha azonban egy mátrix nem négyzetes, akkor vagy csak az oszlopvektorai, vagy csak a sorvektorai alkothatnak ONR-t. Ha például az $n \times k$ méretű $\mathbf{Q}$ mátrix szemiortogonális, akkor $k \le n$ pontosan akkor áll fenn, ha $\mathbf{Q}$ oszlopvektorai alkotnak ONR-t. Az ugyanis, hogy valamely vektorok ONR-t alkotnak, maga után vonja lineáris függetlenségüket is.*

> *Nagyon szerencsétlen az ortogonális mátrix elnevezése, de annyira el van terjedve, hogy nem lehet eltérni tőle. Nyilván jobb lenne az ortonormált mátrix elnevezés.*

> *Minden ortogonális mátrix egyúttal szemiortogonális is.*

**7.74. példa (Ortogonális mátrixok).** *Melyek ortogonálisak és melyek szemiortogonálisak az alábbi mátrixok közül?*

$$
\mathbf{A} = \begin{bmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}, \quad
\mathbf{B} = \begin{bmatrix} \cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha \\ 0 & 0 \\ 0 & 0 \end{bmatrix}, \quad
\mathbf{C} = \frac{1}{7}\begin{bmatrix} 2 & 3 & 6 \\ 6 & 2 & -3 \\ 3 & -6 & 2 \end{bmatrix}.
$$

Megoldás. Mindhárom mátrix szemiortogonális, hisz oszlopvektorai vagy sorvektorai ortonormált rendszert alkotnak (az $\mathbf{A}$ mátrix sorai $\mathbb{R}^4$ standard egységvektorai közül valók, a $\mathbf{B}$ mátrix oszlopvektorai az $\mathbb{R}^4$ első két standard egységvektorának $xy$-síkban $\alpha$ szöggel való elforgatásával kaphatók, a $\mathbf{C}$ mátrix esetén az oszlopvektorok skaláris szorzatainak elvégzésével ellenőrizhetjük ortonormalitásukat). A három mátrix közül csak a $\mathbf{C}$ négyzetes, így csak ez ortogonális. $\square$

> *Könnyen látható, hogy minden permutáló mátrix, így az egységmátrix is, ortogonális.*

**7.75. tétel (Szemiortogonális mátrixok ekvivalens definíciói).** *Legyen $m \ge n$ és $\mathbf{Q} \in \mathbb{R}^{m \times n}$. Az alábbi állítások ekvivalensek:*
*a) $\mathbf{Q}$ szemiortogonális,*
*b) $\mathbf{Q}^{\mathsf{T}}\mathbf{Q} = \mathbf{I}_n$.*

> *Hasonlóképp $m \le n$ esetén $\mathbf{Q}$ pontosan akkor szemiortogonális, ha $\mathbf{QQ}^{\mathsf{T}} = \mathbf{I}_m$.*

> *A b) állítás algebrai nyelven azt mondja, hogy $m \ge n$ esetén $\mathbf{Q}$ pontosan akkor szemiortogonális, ha transzponáltja a bal oldali inverze.*

Bizonyítás. a) $\Rightarrow$ b): Ha $\mathbf{Q}$ szemiortogonális és $m \ge n$, akkor $\mathbf{Q}$ oszlopai alkotnak ONR-t. Legyen $\mathbf{Q} = [\mathbf{q}_1 \ \mathbf{q}_2 \ \dots \ \mathbf{q}_n]$. Ekkor $[\mathbf{Q}^{\mathsf{T}}\mathbf{Q}]_{ij} = \mathbf{q}_i^{\mathsf{T}}\mathbf{q}_j = \mathbf{q}_i \cdot \mathbf{q}_j$, de mivel a $\{\mathbf{q}_i\}$ vektorrendszer ortonormált, ezért $\mathbf{q}_i^2 = 1$ és $\mathbf{q}_i \cdot \mathbf{q}_j = 0$, ha $i \ne j$. Eszerint $[\mathbf{Q}^{\mathsf{T}}\mathbf{Q}]_{ii} = 1$, és $[\mathbf{Q}^{\mathsf{T}}\mathbf{Q}]_{ij} = 0$, ha $i \ne j$ és $i, j \le k$, vagyis $\mathbf{Q}^{\mathsf{T}}\mathbf{Q} = \mathbf{I}_k$.

b) $\Rightarrow$ a): A $\mathbf{Q}^{\mathsf{T}}\mathbf{Q} = \mathbf{I}_k$ összefüggésbeli mátrixszorzást sorvektorszor oszlopvektorként tekintve épp azt kapjuk, hogy $\mathbf{q}_i^2 = 1$ és $\mathbf{q}_i \cdot \mathbf{q}_j = 0$, ha $i \ne j$, azaz a $\{\mathbf{q}_i\}$ vektorrendszer ortonormált. $\square$

**7.76. tétel (Ortogonális mátrixok ekvivalens definíciói).** *Legyen $\mathbf{Q} \in \mathbb{R}^{n \times n}$. Az alábbi állítások ekvivalensek:*
*a) $\mathbf{Q}$ oszlopvektorai ortonormált rendszert alkotnak.*
*b) $\mathbf{Q}^{\mathsf{T}}\mathbf{Q} = \mathbf{I}_n$.*
*c) $\mathbf{Q}^{-1} = \mathbf{Q}^{\mathsf{T}}$.*
*d) $\mathbf{QQ}^{\mathsf{T}} = \mathbf{I}_n$.*
*e) $\mathbf{Q}$ sorvektorai ortonormált rendszert alkotnak.*

Bizonyítás. Az a) $\Leftrightarrow$ b) ekvivalenciát az előző állításban bizonyítottuk.

b) $\Rightarrow$ c): Mivel $\mathbf{Q}$ négyzetes, ezért a $\mathbf{Q}^{\mathsf{T}}\mathbf{Q} = \mathbf{I}$ összefüggés egyúttal azt is jelenti, hogy $\mathbf{Q}$ invertálható, tehát $\mathbf{Q}$ és $\mathbf{Q}^{\mathsf{T}}$ egymás inverzei, azaz $\mathbf{Q}^{-1} = \mathbf{Q}^{\mathsf{T}}$.

c) $\Rightarrow$ d): Mivel $\mathbf{Q}^{-1} = \mathbf{Q}^{\mathsf{T}}$, ezért $\mathbf{QQ}^{\mathsf{T}} = \mathbf{I}_n$.

d) $\Rightarrow$ e): A $\mathbf{QQ}^{\mathsf{T}} = \mathbf{I}_n$ egyenletben a mátrixszorzásra sorvektorszor-oszlopvektorként tekintve épp azt kapjuk, hogy $\mathbf{Q}^{\mathsf{T}}$ oszlopvektorai – és így $\mathbf{Q}$ sorvektorai – ONB-t alkotnak. $\square$

e) $\Rightarrow$ a): Az előzőekben beláttuk, hogy a)-ból következik e), azaz ha $\mathbf{Q}$ oszlopvektorai ONB-t alkotnak, akkor sorvektorai is. Ezt $\mathbf{Q}^{\mathsf{T}}$-ra alkalmazva azt kapjuk, hogy ha $\mathbf{Q}$ sorvektorai ONB-t alkotnak, akkor oszlopvektorai is. $\square$

**7.77. példa (Ortogonális mátrixok inverze).** *Számítsuk ki az*

$$
\begin{bmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 \\ 1 & 0 & 0 & 0 \end{bmatrix}, \quad
\begin{bmatrix} \cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha \end{bmatrix}, \quad
\frac{1}{7}\begin{bmatrix} 2 & 3 & 6 \\ 6 & 2 & -3 \\ 3 & -6 & 2 \end{bmatrix}.
$$

*mátrixok inverzét!*

Megoldás. Mindhárom mátrix ortogonális (az első permutáló mátrix, a harmadik ortogonalitását a 7.74. példában ellenőriztük), így az előző tétel szerint inverzük megegyezik transzponáltjukkal, tehát az inverzek:

$$
\begin{bmatrix} 0 & 0 & 0 & 1 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \end{bmatrix}, \quad
\begin{bmatrix} \cos\alpha & \sin\alpha \\ -\sin\alpha & \cos\alpha \end{bmatrix}, \quad
\frac{1}{7}\begin{bmatrix} 2 & 6 & 3 \\ 3 & 2 & -6 \\ 6 & -3 & 2 \end{bmatrix}.
$$

$\square$

*Ortogonális mátrixok geometriája* Ortogonális mátrixhoz tartozó mátrixleképezés ONB-t ONB-ba visz úgy, ahogy a síkban vagy térben a forgatás és a tükrözés.

**7.78. tétel (Ortogonális mátrixhoz tartozó mátrixleképezés).** *Legyen $\mathbf{Q} \in \mathbb{R}^{n \times n}$. Az alábbi állítások ekvivalensek:*
*a) $\mathbf{Q}$ ortogonális.*
*b) $|\mathbf{Qx}| = |\mathbf{x}|$ minden $\mathbf{x} \in \mathbb{R}^n$ vektorra.*
*c) $\mathbf{Qx} \cdot \mathbf{Qy} = \mathbf{x} \cdot \mathbf{y}$ minden $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$ vektorra.*

Bizonyítás. a) $\Rightarrow$ b): Ha $\mathbf{Q}$ ortogonális, akkor $\mathbf{Q}^{\mathsf{T}}\mathbf{Q} = \mathbf{I}$, így tetszőleges $\mathbf{x} \in \mathbb{R}^n$ vektorra

$$
|\mathbf{Qx}|^2 = \mathbf{Qx} \cdot \mathbf{Qx} = (\mathbf{Qx})^{\mathsf{T}}(\mathbf{Qx}) = \mathbf{x}^{\mathsf{T}}\mathbf{Q}^{\mathsf{T}}\mathbf{Qx} = \mathbf{x}^{\mathsf{T}}\mathbf{x} = |\mathbf{x}|^2.
$$

b) $\Rightarrow$ c): A b)-ből következik, hogy

$$
|\mathbf{Q}(\mathbf{x} + \mathbf{y})| = |\mathbf{x} + \mathbf{y}| \quad \text{és} \quad |\mathbf{Q}(\mathbf{x} - \mathbf{y})| = |\mathbf{x} - \mathbf{y}|.
$$

Ezt, és a skalárszorzás és az abszolút érték közti kapcsolatot megadó (1.9) egyenletet fölhasználva kapjuk, hogy minden $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$ vektorra

$$
\begin{aligned}
\mathbf{Qx} \cdot \mathbf{Qy} &= \frac{1}{4}\left( |\mathbf{Qx} + \mathbf{Qy}|^2 - |\mathbf{Qx} - \mathbf{Qy}|^2 \right) \\
&= \frac{1}{4}\left( |\mathbf{Q}(\mathbf{x} + \mathbf{y})|^2 - |\mathbf{Q}(\mathbf{x} - \mathbf{y})|^2 \right) \\
&= \frac{1}{4}\left( |\mathbf{x} + \mathbf{y}|^2 - |\mathbf{x} - \mathbf{y}|^2 \right) \\
&= \mathbf{x} \cdot \mathbf{y}
\end{aligned}
$$

c) $\Rightarrow$ a): A $\mathbf{Q}$ mátrix $i$-edik oszlopát jelölje $\mathbf{q}_i$, azaz $\mathbf{q}_i = \mathbf{Qe}_i$, ahol $\mathbf{e}_i$ a standard bázis $i$-edik vektora. Ekkor

$$
\mathbf{q}_i \cdot \mathbf{q}_j = \mathbf{Qe}_i \cdot \mathbf{Qe}_j = \mathbf{e}_i \cdot \mathbf{e}_j = \begin{cases} 0, & \text{ha } i \ne j, \\ 1, & \text{ha } i = j. \end{cases}
$$

Tehát $\mathbf{Q}$ oszlopvektorai ortonormált rendszert alkotnak, azaz $\mathbf{Q}$ ortogonális. $\square$

> *Hasonló állítás igaz szemiortogonális mátrixokra is (ld. ?? feladat).*

> *A tétel egyik állítása úgy is kimondható, hogy egy $\mathbf{Q}$ négyzetes mátrix pontosan akkor ortogonális, ha a $Q : \mathbf{x} \mapsto \mathbf{Qx}$ mátrixleképezés távolságtartó. A tétel másik állítása azt mondja, hogy $\mathbf{Q}$ pontosan akkor ortogonális, ha a $Q$ megtartja a skaláris szorzatot.*

> *Fontos megjegyezni, hogy egy ortogonális mátrix által generált lineáris leképezés másik bázisbeli mátrixa nem szükségképpen ortogonális mátrix (ld. ?? ?? feladat).*

**7.79. tétel (Ortogonális mátrixok tulajdonságai).**
*a) Ha $\mathbf{Q}$ valós ortogonális mátrix, akkor $|\det(\mathbf{Q})| = 1$.*
*b) Az $n \times n$-es valós ortogonális mátrixok $O(n)$ halmazából nem vezet ki a mátrixszorzás és invertálás művelete.*

Bizonyítás. a) Mivel $\mathbf{Q}^{\mathsf{T}}\mathbf{Q} = \mathbf{I}$, ezért $\det(\mathbf{Q}^{\mathsf{T}})\det(\mathbf{Q}) = \det(\mathbf{I}) = 1$, de $\det(\mathbf{Q}^{\mathsf{T}}) = \det(\mathbf{Q})$, így $\det(\mathbf{Q}) = 1$ vagy $\det(\mathbf{Q}) = -1$.

b) Ortogonális mátrix inverze megegyezik transzponáltjával, ami ugyancsak ortogonális, tehát inverze is az. Be kell még látni, hogy két ortogonális mátrix szorzata is ortogonális. Legyen $\mathbf{Q}_1$ és $\mathbf{Q}_2$ ortogonális. Ekkor

$$
(\mathbf{Q}_1\mathbf{Q}_2)^{\mathsf{T}}\mathbf{Q}_1\mathbf{Q}_2 = \mathbf{Q}_2^{\mathsf{T}}\mathbf{Q}_1^{\mathsf{T}}\mathbf{Q}_1\mathbf{Q}_2 = \mathbf{Q}_2^{\mathsf{T}}\mathbf{Q}_2 = \mathbf{I},
$$

tehát $\mathbf{Q}_1\mathbf{Q}_2$ valóban ortogonális. $\square$

> *Az is azonnal látható, hogy az $n \times n$-es 1 determinánsú valós ortogonális mátrixok halmazából sem vezet ki a mátrixszorzás és invertálás művelete. E mátrixhalmazt $SO(n)$ jelöli.*

> *A valós ortogonális mátrixok $O(n)$ halmaza a mátrixszorzás műveletével csoportot alkot. Ezt ortogonális csoportnak nevezik. A csoportokról a függelékben írunk. Az 1 determinánsú ortogonális mátrixok $SO(n)$ csoportját speciális ortogonális csoportnak nevezik. $O(10)$ fontos szerepet játszik a modern fizika húrelméletében, mint a 10-dimenziós tér-idő szimmetriacsoportja.*

*A 2- és 3-dimenziós tér ortogonális transzformációi* Forgatások és tükrözések segítségével leírhatók az ortogonális mátrixok.

**7.80. tétel.** *Minden $O(2)$-be eső ortogonális mátrix vagy egy forgatás, vagy egy egyenesre való tükrözés mátrixa.*

Bizonyítás. Legyen $\mathbf{Q} = \begin{bmatrix} a & c \\ b & d \end{bmatrix}$. Ha e mátrix ortogonális, akkor oszlopvektorai ortonormált rendszert alkotnak, azaz

$$
\begin{aligned}
a^2 + b^2 &= 1 \\
c^2 + d^2 &= 1 \\
ac + bd &= 0.
\end{aligned}
$$

Az utolsó egyenlet szerint $a^2c^2 = b^2d^2$, azaz $a^2(1 - d^2) = (1 - a^2)d^2$, amiből $a^2 = d^2$, és $b^2 = c^2$ adódik. Végül kapjuk, hogy vagy $d = a$ és $c = -b$, vagy $d = -a$ és $c = b$. Az első esetben $\det(\mathbf{Q}) = ad - bc = 1$, a másodikban $\det(\mathbf{Q}) = -1$. Vegyük észre, hogy bármely megoldáshoz egyértelműen találunk egy olyan $\alpha \in [0, 2\pi)$ valóst, hogy $a = \cos\alpha$ és $b = \sin\alpha$. Vagyis az összes másodrendű ortogonális mátrix

$$
\begin{bmatrix} \cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha \end{bmatrix} \quad \text{vagy} \quad \begin{bmatrix} \cos\alpha & \sin\alpha \\ \sin\alpha & -\cos\alpha \end{bmatrix}
$$

alakba írható. Ha a determinánsa 1, akkor egy $\alpha$ szögű forgatás, ha determinánsa $-1$, akkor egy $\alpha/2$ szögű egyenesre való tükrözés mátrixa (ld. a 7.20. és a 7.24. pontokat). $\square$

A 3-dimenziós eset kissé bonyolultabb. Számtalan klasszikus műszaki alkalmazásban – mindenek előtt a merev testek mozgásának leírásában – fontos szerepet játszanak $SO(3)$ elemei, azaz az 1 determinánsú ortogonális mátrixok. Ezek itt és nagyobb dimenzió esetén is a forgások mátrixai. A forgás azonban csak a 3-dimenzióban írható le úgy, mint egy tengely körül $\alpha$ szöggel való elfordulás. E tételt csak a sajátvektorok elméletének ismeretében fogjuk tudni bizonyítani (ld. ?? tétel).

**7.81. példa (Forgatás tengelye és szöge).** *Az 1 determinánsú ortogonális*

$$
\frac{1}{15}\begin{bmatrix} 14 & -5 & 2 \\ 5 & 10 & -10 \\ 2 & 10 & 11 \end{bmatrix}
$$

*mátrix milyen tengely körüli és mekkora szöggel való forgatás mátrixa?*

Megoldás. Ha $\mathbf{A}$ egy 0-tól különböző szöggel való forgatás mátrixa, és $\mathbf{v}$ a tengely egy irányvektora, akkor csak $\mathbf{v}$ skalárszorosai fogják kielégíteni az $\mathbf{Ax} = \mathbf{x}$ egyenletet. Ez ekvivalens a homogén lineáris

$$
(\mathbf{A} - \mathbf{I})\mathbf{x} = \mathbf{0}
$$

egyenletrendszerrel, melynek alakja és megoldása esetünkben

$$
\frac{1}{15}\begin{bmatrix} -1 & -5 & 2 \\ 5 & -5 & -10 \\ 2 & 10 & -4 \end{bmatrix}\begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}, \qquad \begin{bmatrix} x \\ y \\ z \end{bmatrix} = t\begin{bmatrix} 2 \\ 0 \\ 1 \end{bmatrix}.
$$

Tehát a forgástengely egy irányvektora a $\mathbf{v} = (2,0,1)$ vektor. A forgásszög, illetve a forgásszög koszinuszának meghatározásához elég egy olyan $\mathbf{w}$ vektort találni, mely a tengelyre merőleges síkban van. Ilyen például a $\mathbf{w} = (0,1,0)$ vektor. Ennek képe a forgatásnál

$$
\frac{1}{15}\begin{bmatrix} 14 & -5 & 2 \\ 5 & 10 & -10 \\ 2 & 10 & 11 \end{bmatrix}\begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix} = \begin{bmatrix} -1/3 \\ 2/3 \\ 2/3 \end{bmatrix}.
$$

A forgásszög megegyezik e két vektor szögével, tehát

$$
\cos\alpha = \frac{\mathbf{w}\cdot\mathbf{Aw}}{|\mathbf{w}||\mathbf{Aw}|} = \frac{2/3}{1\cdot 1} = \frac{2}{3}.
$$

Ez összhangban van a 7.20. feladat eredményével, ahol e forgatást a tengely és a szög ismeretében kellett megkonstruálni. $\square$

$O(3) - SO(3)$ elemei, azaz a harmadrendű $-1$ determinánsú ortogonális mátrixok ugyan nem mind tükrözések, de egy origóra való tükrözés és egy forgatás egymás utáni alkalmazásával megkaphatók (ld. **??** tétel)!

### Givens-forgatás, Householder-tükrözés

Az $n$-dimenziós tér forgatásai és tükrözései közül kiválaszthatunk olyan egyszerű, ún. primitív ortogonális transzformációkat, melyek mátrixai szorzataként az összes ortogonális mátrix előállítható. E transzformációkat több hatékony numerikus matematikai módszer is használja.

Azt a forgatást, mely egy koordinátasík vektorain kívül minden más vektort helyben hagy, *Givens-forgatásnak* nevezzük. Az $i$-edik és $j$-edik koordinátatengely síkját érintő forgatás mátrixa

$$
\mathbf{G} = \begin{bmatrix}
1 & \dots & 0 & \dots & 0 & \dots & 0 \\
\vdots & \ddots & \vdots & & \vdots & & \vdots \\
0 & \dots & \cos\alpha & \dots & -\sin\alpha & \dots & 0 \\
\vdots & & \vdots & \ddots & \vdots & & \vdots \\
0 & \dots & \sin\alpha & \dots & \cos\alpha & \dots & 0 \\
\vdots & & \vdots & & \vdots & \ddots & \vdots \\
0 & \dots & 0 & \dots & 0 & \dots & 1
\end{bmatrix}
$$

amit úgy kapunk meg, hogy az egységmátrix $i$-edik és $j$-edik sorának és oszlopának metszetében lévő négy helyre az $\alpha$ szögű forgatás mátrixát tesszük.

E forgatással elérhető például, hogy egy $\mathbf{x}$ vektort egy olyan vektorba forgassunk, melynek $j$-edik koordinátája $0$. Csak az $i$-edik és $j$-edik sorokat és oszlopokat kiemelve

$$
\begin{bmatrix} \cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha \end{bmatrix}\begin{bmatrix} a \\ b \end{bmatrix} = \begin{bmatrix} r \\ 0 \end{bmatrix}.
$$

Ebből látható, hogy az

$$
\begin{aligned}
r &= \sqrt{a^2 + b^2} \\
\cos\alpha &= a/r \\
\sin\alpha &= -b/r
\end{aligned}\tag{7.23}
$$

egyenletek segítségével fölírható a forgatómátrix az $a$ és $b$ ismeretében. Ez használható mátrix háromszögalakra hozásában, például a következőkben vizsgált QR-felbontás Givens-forgatások segítségével is elvégezhető (ld. 7.89. példa). Ennek előnyei a ritka mátrixok esetén mutatkoznak, és a számítások párhuzamosíthatóak is.

Egy adott $\mathbf{a}\neq\mathbf{0}$ vektorra, vagy az $\mathbf{e} = \mathbf{a}/|\mathbf{a}|$ egységvektorra merőleges hipersíkra való tükrözést *Householder-tükrözésnek* nevezzük. Mátrixa

$$
\mathbf{H} = \mathbf{I} - \frac{2}{\mathbf{a}^\mathsf{T}\mathbf{a}}\mathbf{a}\mathbf{a}^\mathsf{T}
$$

Feladatként az Olvasóra hagyjuk annak bizonyítását, hogy e transzformáció valóban helyben hagyja az $\mathbf{e}^\perp$ tér összes vektorát és $-\mathbf{e}$-be viszi az $\mathbf{e}$ vektort (ld. **??** feladat). E tükrözés is használható egy mátrix háromszögalakra hozásához, QR-felbontásának megkonstruálásához. Ehhez szükség lesz az alábbi állításra.

**7.82. állítás (Egy vektor tükrözése egy másikba).** *Ha $\mathbf{a}$ és $\mathbf{b}$ két különböző, de azonos hosszúságú vektor $\mathbb{R}^n$-ben, akkor az $(\mathbf{a}-\mathbf{b})^\perp$ hipersíkra való Householder-tükrözés az $\mathbf{a}$ vektort $\mathbf{b}$-be viszi és viszont.*

**Bizonyítás.** Meg kell mutatnunk, hogy $\mathbf{Ha} = \mathbf{b}$ és $\mathbf{Hb} = \mathbf{a}$, ahol

$$
\mathbf{H} = \mathbf{I} - \frac{2}{(\mathbf{a}-\mathbf{b})^\mathsf{T}(\mathbf{a}-\mathbf{b})}(\mathbf{a}-\mathbf{b})(\mathbf{a}-\mathbf{b})^\mathsf{T}.
$$

Kihasználjuk, hogy $\mathbf{a}$ és $\mathbf{b}$ azonos hosszúságúak, így $\mathbf{a}^\mathsf{T}\mathbf{a} = \mathbf{b}^\mathsf{T}\mathbf{b}$, és hogy a skaláris szorzás felcserélhető, azaz $\mathbf{a}^\mathsf{T}\mathbf{b} = \mathbf{b}^\mathsf{T}\mathbf{a}$. Így

$$
(\mathbf{a}-\mathbf{b})^\mathsf{T}(\mathbf{a}-\mathbf{b}) = \mathbf{a}^\mathsf{T}\mathbf{a} - \mathbf{a}^\mathsf{T}\mathbf{b} - \mathbf{b}^\mathsf{T}\mathbf{a} + \mathbf{b}^\mathsf{T}\mathbf{b} = 2(\mathbf{a}^\mathsf{T}\mathbf{a} - \mathbf{a}^\mathsf{T}\mathbf{b}) = 2(\mathbf{a}-\mathbf{b})^\mathsf{T}\mathbf{a}.
$$

Eszerint

$$
\begin{aligned}
\mathbf{Ha} &= \mathbf{a} - \frac{2}{(\mathbf{a}-\mathbf{b})^\mathsf{T}(\mathbf{a}-\mathbf{b})}(\mathbf{a}-\mathbf{b})(\mathbf{a}-\mathbf{b})^\mathsf{T}\mathbf{a} \\
&= \mathbf{a} - \frac{1}{(\mathbf{a}-\mathbf{b})^\mathsf{T}\mathbf{a}}(\mathbf{a}-\mathbf{b})(\mathbf{a}-\mathbf{b})^\mathsf{T}\mathbf{a} \\
&= \mathbf{a} - (\mathbf{a}-\mathbf{b}) = \mathbf{b}.
\end{aligned}
$$

Mivel $\mathbf{H}^{-1} = \mathbf{H}$, ezért $\mathbf{Hb} = \mathbf{H}^{-1}\mathbf{b} = \mathbf{a}$. $\square$

**7.83. példa (Householder-tükrözés).** *Határozzuk meg azt a $\mathbf{H}$ mátrixot, mely az $(1,-1,-1,1)$ vektort olyan vektorba viszi, melynek az elsőt kivéve minden koordinátája $0$.*

**Megoldás.** $|(1,-1,-1,1)| = 2$, ezért a képvektor csak a $\pm(2,0,0,0)$ vektorok valamelyike lehet. Válasszuk a pozitív koordinátájút. Az $(1,-1,-1,1) - (2,0,0,0) = (-1,-1,-1,1)$ vektorra merőleges hipersíkra való tükrözés mátrixa

$$
\begin{aligned}
\mathbf{H} = \mathbf{I} - \frac{2}{\mathbf{a}^\mathsf{T}\mathbf{a}}\mathbf{a}\mathbf{a}^\mathsf{T} &= \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} - \frac{1}{2}\begin{bmatrix} -1 \\ -1 \\ -1 \\ 1 \end{bmatrix}\begin{bmatrix} -1 & -1 & -1 & 1 \end{bmatrix} \\
&= \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} - \frac{1}{2}\begin{bmatrix} 1 & 1 & 1 & -1 \\ 1 & 1 & 1 & -1 \\ 1 & 1 & 1 & -1 \\ -1 & -1 & -1 & 1 \end{bmatrix} = \frac{1}{2}\begin{bmatrix} 1 & -1 & -1 & 1 \\ -1 & 1 & -1 & 1 \\ -1 & -1 & 1 & 1 \\ 1 & 1 & 1 & 1 \end{bmatrix}
\end{aligned}
$$

Fejben számolva is könnyen ellenőrizhetjük, hogy $\mathbf{H}\cdot(1,-1,-1,1) = (2,0,0,0)$. $\square$

### Ortogonalizáció

Nagy előnyökkel jár, ha egy altérnek nem csak egy bázisát, hanem egy ortogonális bázisát ismerjük. E paragrafusban megmutatjuk, hogy ilyen bázis létezik, és eljárást adunk a megkonstruálására. Ezt az eljárást Gram–Schmidt-ortogonalizációnak nevezzük.

**7.84. tétel (Gram–Schmidt-ortogonalizáció).** *Ha $\mathcal{A} = \{\mathbf{a}_1, \mathbf{a}_2, \dots, \mathbf{a}_k\}$ egy független vektorrendszer, akkor létezik olyan ortogonális $\mathcal{V} = \{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k\}$ vektorrendszer, hogy minden $i = 1, 2, \dots, k$ esetén*

$$
\operatorname{span}(\mathbf{a}_1, \mathbf{a}_2, \dots, \mathbf{a}_i) = \operatorname{span}(\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_i).\tag{7.24}
$$

*Az ortogonális $\mathcal{V}$ rendszerből a vektorok normálásával kapott*

$$
\left\{ \frac{\mathbf{v}_1}{|\mathbf{v}_1|}, \frac{\mathbf{v}_2}{|\mathbf{v}_2|}, \dots, \frac{\mathbf{v}_k}{|\mathbf{v}_k|} \right\}
$$

*rendszer ortonormált.*

**Bizonyítás.** A $\operatorname{span}(\mathbf{a}_1) = \operatorname{span}(\mathbf{v}_1)$ összefüggés teljesül, ha

$$
\mathbf{v}_1 = \mathbf{a}_1.
$$

A $\operatorname{span}(\mathbf{a}_1, \mathbf{a}_2) = \operatorname{span}(\mathbf{v}_1, \mathbf{v}_2)$ teljesülése érdekében olyan $\mathbf{v}_2$ vektort kell választani, mely az $\mathbf{a}_1$ és $\mathbf{a}_2$ síkjában van, másrészt $\mathbf{v}_2$-nek merőlegesnek kell lennie $\mathbf{v}_1$-re. E feltételeket teljesíti az $\mathbf{a}_2$-nek a $\mathbf{v}_1$ által kifeszített altérre merőleges összetevője, azaz a

$$
\mathbf{v}_2 = \mathbf{a}_2 - \left( \mathbf{a}_2 \cdot \frac{\mathbf{v}_1}{|\mathbf{v}_1|} \right)\frac{\mathbf{v}_1}{|\mathbf{v}_1|} = \mathbf{a}_2 - \frac{\mathbf{a}_2\cdot\mathbf{v}_1}{\mathbf{v}_1\cdot\mathbf{v}_1}\mathbf{v}_1
$$

vektor. Látható, hogy e vektor nem lehet a $0$-vektor, hisz $\mathbf{v}_2 = \mathbf{0}$ esetén $\mathbf{a}_2 = \frac{\mathbf{a}_2\cdot\mathbf{v}_1}{\mathbf{v}_1\cdot\mathbf{v}_1}\mathbf{v}_1 = \frac{\mathbf{a}_2\cdot\mathbf{v}_1}{\mathbf{v}_1\cdot\mathbf{v}_1}\mathbf{a}_1$ lenne, azaz $\mathbf{a}_1$ és $\mathbf{a}_2$ nem lenne független, ami ellentmond annak, hogy $\mathcal{A}$ független. Az előző képletekből látható, hogy $\mathbf{v}_1$ és $\mathbf{v}_2$ előállítható az $\mathbf{a}_1$ és $\mathbf{a}_2$ lineáris kombinációjaként, és viszont, így $\operatorname{span}(\mathbf{a}_1, \mathbf{a}_2) = \operatorname{span}(\mathbf{v}_1, \mathbf{v}_2)$ fönnáll. Az eljárás hasonlóképp folytatható. Ha már megkonstruáltuk $\mathbf{v}_i$-t, akkor a 7.71. tétel szerint kiszámoljuk az $\mathbf{a}_{i+1}$ vektornak a $\operatorname{span}(\frac{\mathbf{v}_1}{|\mathbf{v}_1|}, \frac{\mathbf{v}_2}{|\mathbf{v}_2|}, \dots, \frac{\mathbf{v}_i}{|\mathbf{v}_i|})$ altérre merőleges összetevőjét, és ezt választjuk $\mathbf{v}_{i+1}$-nek, azaz

$$
\mathbf{v}_{i+1} = \mathbf{a}_{i+1} - \frac{\mathbf{a}_{i+1}\cdot\mathbf{v}_1}{\mathbf{v}_1\cdot\mathbf{v}_1}\mathbf{v}_1 - \frac{\mathbf{a}_{i+1}\cdot\mathbf{v}_2}{\mathbf{v}_2\cdot\mathbf{v}_2}\mathbf{v}_2 - \dots - \frac{\mathbf{a}_{i+1}\cdot\mathbf{v}_i}{\mathbf{v}_i\cdot\mathbf{v}_i}\mathbf{v}_i
$$

Könnyen látható, hogy $\mathbf{v}_{i+1}\neq\mathbf{0}$, mert ellenkező esetben $\mathcal{A}$ nem volna független. Látható az is, hogy $\mathbf{v}_{i+1}$ kifejezhető az $\mathbf{a}_1, \mathbf{a}_2, \dots, \mathbf{a}_{i+1}$ vektorok lineáris kombinációjaként, és $\mathbf{a}_{i+1}$ kifejezhető az $\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_{i+1}$ vektorok lineáris kombinációjaként, tehát a tétel kifeszített alterekre vonatkozó állítása is fennáll. $\square$

**7.85. példa (Gram–Schmidt-ortogonalizáció).** *Keressünk ortonormált bázist az $(1,1,1,1)$, $(3,-1,3,-1)$, $(6,2,2,-2)$ vektorok által kifeszített altérben.*

**Megoldás.** Először keressünk egy ortogonális bázist:

$$
\begin{aligned}
\mathbf{v}_1 &= (1,1,1,1) \\
\mathbf{v}_2 &= (3,-1,3,-1) - \frac{(3,-1,3,-1)\cdot(1,1,1,1)}{(1,1,1,1)\cdot(1,1,1,1)}(1,1,1,1) = (2,-2,2,-2) \\
\mathbf{v}_3 &= (6,2,2,-2) - \frac{(6,2,2,-2)\cdot(1,1,1,1)}{(1,1,1,1)\cdot(1,1,1,1)}(1,1,1,1) \\
&\quad - \frac{(6,2,2,-2)\cdot(2,-2,2,-2)}{(2,-2,2,-2)\cdot(2,-2,2,-2)}(2,-2,2,-2) = (2,2,-2,-2)
\end{aligned}
$$

Végül az ortonormált bázis:

$$
\left\{ \left( \tfrac{1}{2}, \tfrac{1}{2}, \tfrac{1}{2}, \tfrac{1}{2} \right), \left( \tfrac{1}{2}, -\tfrac{1}{2}, \tfrac{1}{2}, -\tfrac{1}{2} \right), \left( \tfrac{1}{2}, \tfrac{1}{2}, -\tfrac{1}{2}, -\tfrac{1}{2} \right) \right\}
$$

$\square$

> *▶ Könnyen igazolható, hogy a Gram–Schmidt-ortogonalizáció működik nem független vektorokból álló vektorrendszerre is, annyi változással, hogy pontosan akkor lesz $\mathbf{v}_i = \mathbf{0}$, ha $\mathbf{a}_i$ nem független a kisebb indexű vektoroktól, azaz $\mathbf{a}_i$ benne van a $\operatorname{span}(\mathbf{a}_1, \mathbf{a}_2, \dots, \mathbf{a}_{i-1})$ altérben.*

### A QR-felbontás

Ahogyan egy mátrix elemi sorműveletekkel való háromszögalakra hozását tömör formában őrzi az LU-felbontás, ugyanígy a QR-felbontás őrzi az ortogonalizációs eljárás eredményét. E felbontás mind a legkisebb négyzetek módszerében, mind a később tárgyalandó sajátértékprobléma megoldásában fontos szerephez jut.

**7.86. definíció (QR-felbontás).** *Legyen $\mathbf{A}$ egy teljes oszloprangú valós mátrix. Az $\mathbf{A} = \mathbf{QR}$ felbontást QR-felbontásnak vagy redukált QR-felbontásnak nevezzük, ha $\mathbf{Q}$ az $\mathbf{A}$-val azonos méretű szemiortogonális mátrix, és $\mathbf{R}$ négyzetes felső háromszögmátrix, főátlójában pozitív elemekkel.*

> *▶ Ha a $\mathbf{Q}$ mátrixot új oszlopvektorok hozzávételével kiegészítjük egy ortogonális mátrixszá (mindig megtehetjük, miért?), az $\mathbf{R}$ mátrixot pedig zérussorok hozzávételével egy $m\times n$-es felső háromszögmátrixszá, akkor e mátrixok szorzata is $\mathbf{A}$, ugyanis*

$$
\mathbf{A} = \begin{bmatrix} \mathbf{Q} & \hat{\mathbf{Q}} \end{bmatrix}\begin{bmatrix} \mathbf{R} \\ \mathbf{O} \end{bmatrix} = \mathbf{QR} + \hat{\mathbf{Q}}\mathbf{O} = \mathbf{QR}
$$

Ezt a bővebb felbontást is szokás QR-felbontásnak nevezni. Mi erre inkább a *teljes QR-felbontás* elnevezést használjuk. Ekkor tehát az $\mathbf{A}$ mátrixot egy ortogonális mátrix, és egy $\mathbf{A}$-val azonos méretű felső háromszögmátrix szorzatára bontjuk.

> *▶ Vannak művek és programok, amelyek QR-felbontásnak tekintik azt is, ha $\mathbf{Q}$ semiortogonális, $\mathbf{R}$ felső háromszögmátrix, de a főátló elemeiről nincs kikötve, hogy pozitív legyen! (Pl. a mátrixalapú nyelvek is ilyen alakú felbontást adnak.) Ezeket könnyen átkonvertálhatjuk pozitív főátlójú felbontásra. Ha valamely $i$-re $r_{ii} < 0$ lenne, akkor szorozzuk be az $\mathbf{R}$ mátrix $i$-edik sorvektorát és a $\mathbf{Q}$ mátrix $i$-edik oszlopát, azaz a $\mathbf{q}_i$ vektort $-1$-gyel. Ez a szorzaton nem változtat. Így elérhetjük, hogy $\mathbf{R}$ minden főátlón lévő eleme pozitív legyen.*

A Gram–Schmidt-ortogonalizációs eljárásból könnyen előállítható egy mátrix QR-felbontása. Legyen $\mathbf{A} = \begin{bmatrix} \mathbf{a}_1 & \mathbf{a}_2 & \dots & \mathbf{a}_k \end{bmatrix} \in \mathbb{R}^{n\times k}$. Mivel $\mathbf{A}$ teljes oszloprangú, azaz oszlopai függetlenek, ezért $k\leq n$. Az ortogonalizációs eljárás végén kapott egységvektorokat jelölje $\mathbf{q}_i$, azaz $\mathbf{q}_i = \frac{\mathbf{v}_i}{|\mathbf{v}_i|}$ ($i = 1, 2, \dots, k$). Mivel a Gram–Schmidt-ortogonalizációs tétel szerint $\operatorname{span}(\mathbf{a}_1, \dots, \mathbf{a}_i) = \operatorname{span}(\mathbf{q}_1, \dots, \mathbf{q}_i)$ minden $i = 1, 2, \dots, k$ értékre, ezért léteznek olyan $r_{ij}$ skalárok, hogy

$$
\begin{aligned}
\mathbf{a}_1 &= r_{11}\mathbf{q}_1 \\
\mathbf{a}_2 &= r_{12}\mathbf{q}_1 + r_{22}\mathbf{q}_2 \\
&\;\;\vdots \\
\mathbf{a}_k &= r_{1k}\mathbf{q}_1 + r_{2k}\mathbf{q}_2 + \dots + r_{kk}\mathbf{q}_k.
\end{aligned}\tag{7.25}
$$

Ezt mátrixszorzat-alakba írva épp a kívánt felbontást kapjuk:

$$
\mathbf{A} = \begin{bmatrix} \mathbf{a}_1 & \mathbf{a}_2 & \dots & \mathbf{a}_k \end{bmatrix} = \begin{bmatrix} \mathbf{q}_1 & \mathbf{q}_2 & \dots & \mathbf{q}_k \end{bmatrix}\begin{bmatrix} r_{11} & r_{12} & \dots & r_{1k} \\ 0 & r_{22} & \dots & r_{2k} \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & r_{kk} \end{bmatrix} = \mathbf{QR}.
$$

A Gram–Schmidt-eljárásból az is látható, hogy $r_{ii} = |\mathbf{v}_i|$, tehát $r_{ii} > 0$. Ezzel bizonyítottuk a QR-felbontás létezését.

A Gram–Schmidt-eljárásból megkaphatjuk a $\mathbf{Q}$ mátrixot, azonban kérdés, hogy az $\mathbf{R}$ hogyan számítható ki egyszerűen. A 7.75. állítás egyszerű megoldást ad. Ha $\mathbf{A} = \mathbf{QR}$, akkor az egyenlőség mindkét oldalát $\mathbf{Q}^\mathsf{T}$-tal szorozva kapjuk, hogy $\mathbf{Q}^\mathsf{T}\mathbf{A} = \mathbf{Q}^\mathsf{T}\mathbf{QR} = \mathbf{I}_k\mathbf{R} = \mathbf{R}$, tehát

$$
\mathbf{R} = \mathbf{Q}^\mathsf{T}\mathbf{A}.
$$

**7.87. példa (QR-felbontás kiszámítása).** *Határozzuk meg az*

$$
\mathbf{A} = \begin{bmatrix} 1 & 3 & 6 \\ 1 & -1 & 2 \\ 1 & 3 & 2 \\ 1 & -1 & -2 \end{bmatrix}
$$

*mátrix QR-felbontását.*

**Megoldás.** A 7.85. példában épp az $\mathbf{A}$ mátrix oszlopvektoraiból álló vektorrendszert ortogonalizáltuk. Mivel a három vektor lineárisan független, ezért $\mathbf{A}$ teljes oszloprangú. A 7.85. példa megoldása alapján az $\mathbf{A}$ oszlopvektorainak ortogonalizálásával kapott vektorokkal fölírható a $\mathbf{Q}$ mátrix:

$$
\mathbf{Q} = \frac{1}{2}\begin{bmatrix} 1 & 1 & 1 \\ 1 & -1 & 1 \\ 1 & 1 & -1 \\ 1 & -1 & -1 \end{bmatrix}
$$

Innen

$$
\mathbf{R} = \mathbf{Q}^\mathsf{T}\mathbf{A} = \frac{1}{2}\begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & -1 & 1 & -1 \\ 1 & 1 & -1 & -1 \end{bmatrix}\begin{bmatrix} 1 & 3 & 6 \\ 1 & -1 & 2 \\ 1 & 3 & 2 \\ 1 & -1 & -2 \end{bmatrix} = \begin{bmatrix} 2 & 2 & 4 \\ 0 & 4 & 4 \\ 0 & 0 & 4 \end{bmatrix}
$$

Valóban,

$$
\begin{bmatrix} 1 & 3 & 6 \\ 1 & -1 & 2 \\ 1 & 3 & 2 \\ 1 & -1 & -2 \end{bmatrix} = \frac{1}{2}\begin{bmatrix} 1 & 1 & 1 \\ 1 & -1 & 1 \\ 1 & 1 & -1 \\ 1 & -1 & -1 \end{bmatrix}\begin{bmatrix} 2 & 2 & 4 \\ 0 & 4 & 4 \\ 0 & 0 & 4 \end{bmatrix}.
$$

$\square$

**7.88. tétel (QR-felbontás létezése és egyértelműsége).** *Bármely valós, teljes oszloprangú $\mathbf{A}$ mátrixnak létezik QR-felbontása, azaz létezik egy szemiortogonális $\mathbf{Q}$ mátrix és egy $\mathbf{R}$ felső háromszögmátrix pozitív főátlóbeli elemekkel, hogy $\mathbf{A} = \mathbf{QR}$. Az így kapott felbontás egyértelmű.*

**Bizonyítás.** A felbontás létezését a Gram–Schmidt-ortogonalizációra alapozva az előzőekben megmutattuk.

Tegyük fel, hogy létezik két felbontás is, azaz $\mathbf{A} = \mathbf{QR} = \hat{\mathbf{Q}}\hat{\mathbf{R}}$, ahol $\mathbf{Q}$ és $\hat{\mathbf{Q}}$ szemiortogonális, azaz $\mathbf{Q}^\mathsf{T}\mathbf{Q} = \hat{\mathbf{Q}}^\mathsf{T}\hat{\mathbf{Q}} = \mathbf{I}$. Ekkor $\mathbf{R}^\mathsf{T}\mathbf{R} = \hat{\mathbf{R}}^\mathsf{T}\hat{\mathbf{R}}$, ugyanis

$$
\begin{aligned}
\mathbf{A}^\mathsf{T}\mathbf{A} &= (\mathbf{QR})^\mathsf{T}\mathbf{QR} = \mathbf{R}^\mathsf{T}\mathbf{Q}^\mathsf{T}\mathbf{QR} = \mathbf{R}^\mathsf{T}\mathbf{R}, \\
\mathbf{A}^\mathsf{T}\mathbf{A} &= (\hat{\mathbf{Q}}\hat{\mathbf{R}})^\mathsf{T}\hat{\mathbf{Q}}\hat{\mathbf{R}} = \hat{\mathbf{R}}^\mathsf{T}\hat{\mathbf{Q}}^\mathsf{T}\hat{\mathbf{Q}}\hat{\mathbf{R}} = \hat{\mathbf{R}}^\mathsf{T}\hat{\mathbf{R}}.
\end{aligned}
$$

Innen $(\hat{\mathbf{R}}^{-1})^\mathsf{T}\mathbf{R}^\mathsf{T} = \hat{\mathbf{R}}\mathbf{R}^{-1}$. Itt a bal oldalon egy alsó, a jobb oldalon egy felső háromszögmátrix áll. Ez csak úgy lehetséges, ha mindkét szorzat diagonális. Jelölje $\mathbf{R}$, illetve $\hat{\mathbf{R}}$ átlójának elemeit $r_i$, illetve $\hat{r}_i$ ($i = 1, \dots, n$). A főátló elemei tehát

$$
\frac{r_i}{\hat{r}_i} = \frac{\hat{r}_i}{r_i},
$$

ahonnan $r_i > 0$ és $\hat{r}_i > 0$ miatt $r_i = \hat{r}_i$ következik. Eszerint $(\hat{\mathbf{R}}^{-1})^\mathsf{T}\mathbf{R}^\mathsf{T} = \hat{\mathbf{R}}\mathbf{R}^{-1} = \mathbf{I}$, amiből $\mathbf{R} = \hat{\mathbf{R}}$ adódik, majd abból $\mathbf{A} = \mathbf{QR} = \hat{\mathbf{Q}}\hat{\mathbf{R}}$ miatt $\mathbf{Q} = \hat{\mathbf{Q}}$. $\square$

### QR-felbontás primitív ortogonális transzformációkkal

A QR-felbontás a Gram–Schmidt-ortogonalizáció helyett más technikákkal, így például a primitív ortogonális transzformációkkal is kiszámolható. Hasonlóan az Gauss-eliminációhoz itt is a háromszögalakra hozást eliminációval valósítjuk meg, de most nem elemi mátrixokkal, hanem ortogonálisokkal.

**7.89. példa (QR-felbontás Givens-forgatásokkal).** *Határozzuk meg az*

$$
\mathbf{A} = \begin{bmatrix} 4 & 5 & 8 \\ 3 & 10 & 6 \\ 0 & 12 & 13 \end{bmatrix}
$$

*mátrix QR-felbontását Givens-forgatások segítségével!*

**Megoldás.** Először az első és második sorokat és oszlopokat figyelve elimináljuk a második sor első elemét. Itt a (7.23) egyenletekben is használt jelölésekkel $a = 4$, $b = 3$, tehát $r = \sqrt{3^2 + 4^2} = 5$, $\cos\alpha = 4/5$, $\sin\alpha = -3/5$. Így első lépésben a következő mátrixszorzással eliminálhatunk:

$$
\mathbf{Q}_1 = \begin{bmatrix} 4/5 & 3/5 & 0 \\ -3/5 & 4/5 & 0 \\ 0 & 0 & 1 \end{bmatrix} \qquad \mathbf{Q}_1\mathbf{A} = \begin{bmatrix} 5 & 10 & 10 \\ 0 & 5 & 0 \\ 0 & 12 & 13 \end{bmatrix}.
$$

Következő lépésben a $\mathbf{Q}_1\mathbf{A}$ mátrix harmadik sorának második elemét elimináljuk:

$$
\mathbf{Q}_2 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 5/13 & 12/13 \\ 0 & -12/13 & 5/13 \end{bmatrix}. \qquad \mathbf{R} = \mathbf{Q}_2\mathbf{Q}_1\mathbf{A} = \begin{bmatrix} 5 & 10 & 10 \\ 0 & 13 & 12 \\ 0 & 0 & 5 \end{bmatrix}.
$$

és innen

$$
\mathbf{Q} = (\mathbf{Q}_2\mathbf{Q}_1)^{-1} = \mathbf{Q}_1^\mathsf{T}\mathbf{Q}_2^\mathsf{T} = \begin{bmatrix} 4/5 & -3/13 & 36/65 \\ 3/5 & 4/13 & -48/65 \\ 0 & 12/13 & 5/13 \end{bmatrix},
$$

amely mátrixokkal $\mathbf{A} = \mathbf{QR}$ valóban fennáll. $\square$

A Householder-tükrözést alkalmazva a QR-felbontásra egy további módszert kaphatunk. Az ötlet lényege, hogy a 7.83. példában látott módon először az első oszlopban elimináljuk az első elem alattiakat, majd olyan transzformációt választunk, mely az első sort és oszlopot nem változtatja, de a második sor második eleme alattiakat eliminálja, és így tovább. Egy $4\times 4$-es mátrixon szemléltetjük az eljárást.

*7.NN. ábra. Egy $4\times 4$-es mátrix háromszögalakra hozása Householder-tükrözésekkel:*

$$
\mathbf{A} = \begin{bmatrix} * & * & * & * \\ * & * & * & * \\ * & * & * & * \\ * & * & * & * \end{bmatrix} \to \mathbf{Q}_1\mathbf{A} = \begin{bmatrix} * & * & * & * \\ 0 & * & * & * \\ 0 & * & * & * \\ 0 & * & * & * \end{bmatrix} \to \mathbf{Q}_2\mathbf{Q}_1\mathbf{A} = \begin{bmatrix} * & * & * & * \\ 0 & * & * & * \\ 0 & 0 & * & * \\ 0 & 0 & * & * \end{bmatrix} \to \mathbf{Q}_3\mathbf{Q}_2\mathbf{Q}_1\mathbf{A} = \begin{bmatrix} * & * & * & * \\ 0 & * & * & * \\ 0 & 0 & * & * \\ 0 & 0 & 0 & * \end{bmatrix}
$$

$$
\mathbf{Q}_1 = \mathbf{H}_1 \qquad \mathbf{Q}_2 = \left[\begin{array}{c|c} 1 & 0\;\;0\;\;0 \\ \hline 0 & \\ 0 & \mathbf{H}_2 \\ 0 & \end{array}\right] \qquad \mathbf{Q}_3 = \left[\begin{array}{cc|c} 1 & 0 & 0\;\;0 \\ 0 & 1 & 0\;\;0 \\ \hline 0 & 0 & \\ 0 & 0 & \mathbf{H}_3 \end{array}\right]
$$

Az első lépésben az $\mathbf{A}$ mátrix első oszlopához ($\mathbf{a}_1$) keresünk egy $\mathbf{b}_1$ vektort, mely vele egyenlő hosszú, és csak az első koordinátája nem $0$. Ezután az $\mathbf{a}_1 - \mathbf{b}_1$ vektorhoz megkonstruáljuk a $\mathbf{Q}_1 = \mathbf{H}_1$ Householder-mátrixot. Így $\mathbf{Q}_1\mathbf{A}$ első oszlopában kinulláztuk az első sor alatti elemeket. Ezután elhagyjuk az első sort és oszlopot, és az így kapott mátrix első oszlopvektorával ($\mathbf{a}_2$) és a vele egyenlő hosszú, és az első koordinátát kivéve $0$ koordinátájú $\mathbf{b}_2$ vektorral megkonstruáljuk a $\mathbf{H}_2$ Householder-mátrixot, melyet kiegészítünk egy sorral és oszloppal úgy, hogy a $\mathbf{Q}_1\mathbf{A}$ mátrixszal szorozva annak első sorát és oszlopát ne változtassa. Ez lesz a $\mathbf{Q}_2$ mátrix. Hasonlóan folytatva végül egy $\mathbf{R} = \mathbf{Q}_{n-1}\dots\mathbf{Q}_2\mathbf{Q}_1\mathbf{A}$ felső háromszögmátrixhoz jutunk (a fenti mintán $n = 4$). Mivel a $\mathbf{Q}_i$ mátrixok mindegyike ortogonális, ezért szorzatuk inverze is az lesz. Így a QR-felbontásban $\mathbf{Q} = \mathbf{Q}_1^\mathsf{T}\mathbf{Q}_2^\mathsf{T}\dots\mathbf{Q}_{n-1}^\mathsf{T}$. A QR-felbontás ilyen módon való meghatározását nevezzük *Householder-módszernek*.

**7.90. példa (QR-felbontás Householder-tükrözéssel).** *Határozzuk meg az*

$$
\mathbf{A} = \begin{bmatrix} 1 & 0 & 1 \\ 2 & 2 & -3 \\ -2 & 5 & -7 \end{bmatrix}
$$

*mátrix QR-felbontását Householder-módszerrel!*

**Megoldás.** Az $(1,2,-2)\mapsto(3,0,0)$ transzformációhoz az

$$
\mathbf{a} = (1,2,-2) - (3,0,0) = (-2,2,-2)
$$

vektorral Householder-tükrözést végünk:

$$
\begin{aligned}
\mathbf{Q}_1 = \mathbf{I}_3 - \frac{2}{\mathbf{a}^\mathsf{T}\mathbf{a}}\mathbf{a}\mathbf{a}^\mathsf{T} &= \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} - \frac{1}{6}\begin{bmatrix} 4 & -4 & 4 \\ -4 & 4 & -4 \\ 4 & -4 & 4 \end{bmatrix} \\
&= \frac{1}{3}\begin{bmatrix} 1 & 2 & -2 \\ 2 & 1 & 2 \\ -2 & 2 & 1 \end{bmatrix} \\
\mathbf{Q}_1\mathbf{A} = \frac{1}{3}\begin{bmatrix} 1 & 2 & -2 \\ 2 & 1 & 2 \\ -2 & 2 & 1 \end{bmatrix}&\begin{bmatrix} 1 & 0 & 1 \\ 2 & 2 & -3 \\ -2 & 5 & -7 \end{bmatrix} = \begin{bmatrix} 3 & -2 & 3 \\ 0 & 4 & -5 \\ 0 & 3 & -5 \end{bmatrix}
\end{aligned}
$$

Ezután a $\mathbf{Q}_1\mathbf{A}$ mátrixból képzeletben elhagyva az első sort és oszlopot a $(4,3)\mapsto(5,0)$ transzformációhoz kell az $\mathbf{a} = (4,3) - (5,0) = (-1,3)$ vektorral Householder-tükrözést végezni:

$$
\begin{aligned}
\mathbf{H}_2 = \mathbf{I}_2 - \frac{2}{\mathbf{a}^\mathsf{T}\mathbf{a}}\mathbf{a}\mathbf{a}^\mathsf{T} &= \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} - \frac{1}{5}\begin{bmatrix} 1 & -3 \\ -3 & 9 \end{bmatrix} = \frac{1}{5}\begin{bmatrix} 4 & 3 \\ 3 & -4 \end{bmatrix} \\
\mathbf{Q}_2 = \left[\begin{array}{c|cc} 1 & 0 & 0 \\ \hline 0 & 4/5 & 3/5 \\ 0 & 3/5 & -4/5 \end{array}\right], &\qquad \mathbf{R} = \mathbf{Q}_2\mathbf{Q}_1\mathbf{A} = \begin{bmatrix} 3 & -2 & 3 \\ 0 & 5 & -7 \\ 0 & 0 & 1 \end{bmatrix} \\
\mathbf{Q} = (\mathbf{Q}_2\mathbf{Q}_1)^{-1} = \mathbf{Q}_1^\mathsf{T}\mathbf{Q}_2^\mathsf{T} &= \frac{1}{15}\begin{bmatrix} 5 & 2 & 14 \\ 10 & 10 & -5 \\ -10 & 11 & 2 \end{bmatrix}.
\end{aligned}
$$

Az $\mathbf{A} = \mathbf{QR}$ egyenlőség fennállásának ellenőrzését az Olvasóra hagyjuk. $\square$

### Egyenletrendszer optimális megoldása QR-felbontással

Ha egy egyenletrendszer ellentmondásos, az optimális megoldás megtalálásához fölírt normálegyenlet gyakran rosszul kondicionált, ezért érdemes olyan megoldási technikát keresni, mely hatékonyabb a számítási hibák kezelésében. Egy ilyen technikát ismertetünk.

**7.91. tétel (Legkisebb négyzetek QR-felbontással).** *Legyen $\mathbf{A}$ egy teljes oszloprangú $m\times n$-es valós mátrix, $\mathbf{A} = \mathbf{QR}$ egy QR-felbontása, és legyen $\mathbf{b}$ egy $\mathbb{R}^m$-beli vektor. Ekkor az $\mathbf{Ax} = \mathbf{b}$ egyenletrendszer egyetlen optimális megoldása $\hat{\mathbf{x}} = \mathbf{R}^{-1}\mathbf{Q}^\mathsf{T}\mathbf{b}$, ami megkapható az*

$$
\mathbf{R}\hat{\mathbf{x}} = \mathbf{Q}^\mathsf{T}\mathbf{b}
$$

*egyenletrendszerből egyszerű visszahelyettesítéssel is.*

**Bizonyítás.** Az egyenletrendszer optimális megoldásáról szóló 7.51. tétel szerint az optimális megoldás a normálegyenletből megkapható. Eszerint

$$
\begin{alignedat}{2}
\mathbf{A}^\mathsf{T}\mathbf{A}\hat{\mathbf{x}} &= \mathbf{A}^\mathsf{T}\mathbf{b} &\qquad& \mathbf{A} = \mathbf{QR} \text{ behelyettesítése után} \\
(\mathbf{QR})^\mathsf{T}\mathbf{QR}\hat{\mathbf{x}} &= (\mathbf{QR})^\mathsf{T}\mathbf{b} && \\
\mathbf{R}^\mathsf{T}\mathbf{Q}^\mathsf{T}\mathbf{QR}\hat{\mathbf{x}} &= \mathbf{R}^\mathsf{T}\mathbf{Q}^\mathsf{T}\mathbf{b} &\qquad& \mathbf{Q}^\mathsf{T}\mathbf{Q} = \mathbf{I} \\
\mathbf{R}^\mathsf{T}\mathbf{R}\hat{\mathbf{x}} &= \mathbf{R}^\mathsf{T}\mathbf{Q}^\mathsf{T}\mathbf{b} &\qquad& \text{balról szorzás az } (\mathbf{R}^\mathsf{T})^{-1} \text{ mátrixszal} \\
\mathbf{R}\hat{\mathbf{x}} &= \mathbf{Q}^\mathsf{T}\mathbf{b}. &&
\end{alignedat}
$$

Az utolsó egyenlet visszahelyettesítésekkel is megoldható, mivel $\mathbf{R}$ felső háromszögmátrix. Mivel $\mathbf{R}$ főátlójában nincsenek zéruselemek, ezért $\mathbf{R}$ invertálható (ezt kihasználtuk, amikor $(\mathbf{R}^\mathsf{T})^{-1}$-gyel szoroztunk), tehát az egyenletből $\hat{\mathbf{x}}$ kifejezhető: $\hat{\mathbf{x}} = \mathbf{R}^{-1}\mathbf{Q}^\mathsf{T}\mathbf{b}$. $\square$

**7.92. példa (Egyenletrendszer optimális megoldása).** *Az alábbi háromismeretlenes egyenletrendszert megoldottuk a 7.68. példában:*

$$
\begin{alignedat}{9}
x &{}+{}& 3y &{}+{}& 6z &{}={}& 8 \\
x &{}-{}& y &{}+{}& 2z &{}={}& 2 \\
x &{}+{}& 3y &{}+{}& 2z &{}={}& 2 \\
x &{}-{}& y &{}-{}& 2z &{}={}& 0
\end{alignedat}
$$

*Adjunk rá új, a QR-felbontást használó megoldást!*

**Megoldás.** Az egyenletrendszer együtthatómátrixának QR-felbontását meghatároztuk a 7.87. példában. Eszerint

$$
\mathbf{A} = \begin{bmatrix} 1 & 3 & 6 \\ 1 & -1 & 2 \\ 1 & 3 & 2 \\ 1 & -1 & -2 \end{bmatrix} = \frac{1}{2}\begin{bmatrix} 1 & 1 & 1 \\ 1 & -1 & 1 \\ 1 & 1 & -1 \\ 1 & -1 & -1 \end{bmatrix}\begin{bmatrix} 2 & 2 & 4 \\ 0 & 4 & 4 \\ 0 & 0 & 4 \end{bmatrix}.
$$

Egyik lehetőség, hogy fölírjuk az $\mathbf{R}\hat{\mathbf{x}} = \mathbf{Q}^\mathsf{T}\mathbf{b}$ mátrixegyenletet:

$$
\begin{bmatrix} 2 & 2 & 4 \\ 0 & 4 & 4 \\ 0 & 0 & 4 \end{bmatrix}\begin{bmatrix} \hat{x}_1 \\ \hat{x}_2 \\ \hat{x}_3 \end{bmatrix} = \frac{1}{2}\begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & -1 & 1 & -1 \\ 1 & 1 & -1 & -1 \end{bmatrix}\begin{bmatrix} 8 \\ 2 \\ 2 \\ 0 \end{bmatrix} = \begin{bmatrix} 6 \\ 4 \\ 4 \end{bmatrix}
$$

Ezt az egyenletrendszert fejben is meg tudjuk oldani visszahelyettesítéssel: $(\hat{x}_1, \hat{x}_2, \hat{x}_3) = (1, 0, 1)$. Természetesen ha már kiszámoltuk az $\mathbf{R}^{-1}$ mátrixot, akkor segítségével is megkapható az optimális megoldás:

$$
\hat{\mathbf{x}} = \mathbf{R}^{-1}\mathbf{Q}^\mathsf{T}\mathbf{b} = \frac{1}{4}\begin{bmatrix} 2 & -1 & -1 \\ 0 & 1 & -1 \\ 0 & 0 & 1 \end{bmatrix}\frac{1}{2}\begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & -1 & 1 & -1 \\ 1 & 1 & -1 & -1 \end{bmatrix}\begin{bmatrix} 8 \\ 2 \\ 2 \\ 0 \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix}.
$$

$\square$

## Feladatok

**7.33.** $\mathbb{R}^4$ egy 2-dimenziós alterének bázisvektorai az $(1,1,-1,-1)$ és a $(9,3,-1,5)$ vektorok. A Gram–Schmidt-eljárással adjuk meg az altér egy ortonormált bázisát.

**7.34.** $\mathbb{R}^4$ egy 2-dimenziós alterének bázisvektorai az $(1,-1,1,-1)$ és a $(8,6,2,0)$ vektorok. A Gram–Schmidt-eljárással adjuk meg az altér egy ortonormált bázisát.

*Adjuk meg az alábbi mátrixok QR-felbontását a Gram–Schmidt-eljárás alkalmazásával!*

**7.35.**
$$
\begin{bmatrix} 1 & 2 \\ 8 & -20 \\ 4 & -1 \end{bmatrix}
$$

**7.36.**
$$
\begin{bmatrix} 1 & 8 \\ -1 & 6 \\ 1 & 2 \\ -1 & 0 \end{bmatrix}
$$

**7.37.** Adjuk meg az alábbi mátrix QR-felbontását Givens-forgatással!

$$
\begin{bmatrix} 8 & 3 & -4 \\ 0 & 4 & 2 \\ 15 & 12 & 1 \end{bmatrix}
$$

**7.38.** Adjuk meg az alábbi mátrix QR-felbontását Householder-tükrözésekkel!

$$
\begin{bmatrix} 1 & -1 & 2 & 4 \\ 1 & 4 & 1 & 1 \\ 1 & 4 & -1 & 2 \\ 1 & -1 & 4 & 1 \end{bmatrix}
$$

**7.39.** Milyen geometriai interpretáció adható az $\mathbf{A}$ mátrix oszlopvektoraival kifejezve az $\mathbf{A}$ QR-felbontásában szereplő $\mathbf{R}$ mátrix főátlóbeli elemeinek?

**7.40.** Számítsuk ki a

$$
\begin{bmatrix} 1 & 1 & 0 & 0 \\ 1 & 2 & 1 & 0 \\ 0 & 1 & 2 & 1 \\ 0 & 0 & 1 & 2 \end{bmatrix}
$$

mátrix QR-felbontását!

**7.41.** Igazoljuk, hogy ha $\mathbf{e}$ az $\mathbb{R}^n$ egy egységvektora, akkor $\mathbf{H} = \mathbf{I} - 2\mathbf{e}\mathbf{e}^\mathsf{T}$ lesz a Householder-transzformáció mátrixa, mely helyben hagyja az $\mathbf{e}^\perp$ altér összes vektorát és $\mathbf{He} = -\mathbf{e}$.
## Komplex és véges test feletti terek

*A következőkben egyre többször szembesülünk azzal, hogy valós számokkal megfogalmazható problémák megválaszolásához is szükség van a komplex számokra. E fejezetben a geometriai szemléletmódot is kiterjesztjük a komplex terekre. A geometriai analógiák még a véges test feletti terek esetén is használhatók némi óvatossággal.*

### Komplex vektorok és terek

#### Komplex vektorok skaláris szorzata

Ha $\mathbb{C}^n$-beli vektorok skaláris szorzatát úgy értelmeznénk, mint a valós vektorok esetén, fura dolgok történnének.

Vegyük például a $(1,\mathrm{i})$ és az $(\mathrm{i},\mathrm{i})$ vektorokat. Önmagával vett skaláris szorzata e két vektornak ez lenne:

$$\begin{aligned}
(1,\mathrm{i}) \cdot (1,\mathrm{i}) &\overset{?}{=} 1 - 1 = 0 \\
(\mathrm{i},\mathrm{i}) \cdot (\mathrm{i},\mathrm{i}) &\overset{?}{=} -1 - 1 = -2
\end{aligned}$$

Ez azt mutatja, hogy ha a komplex vektorok abszolút értékét (hosszát), a valósban használt skaláris szorzattal definiálnánk, az abszolút érték legfontosabb tulajdonságai nem maradnának igazak! Kérdés, kiterjeszthető-e a valós vektorok skaláris szorzatának definíciója a komplex vektorokra úgy, hogy a fontosabb tulajdonságok érvényben maradjanak? Az ötletet a komplex számok – mint egydimenziós vektorok – abszolút értéke adja. A $z = a + \mathrm{i}b$ szám abszolút értékének négyzete $z\bar{z}$, és nem $z^2$! Eszerint az egydimenziós $z$ vektor önmagával vett skaláris szorzatának $z\bar{z}$-t vagy $\bar{z}z$-t kell adnia. Ennek megfelelően a $\mathbf{z} = (z_1, z_2, \dots, z_n)$ és a $\mathbf{w} = (w_1, w_2, \dots, w_n)$ vektorok skaláris szorzatának egy lehetséges definíciója

$$\begin{aligned}
\mathbf{z} \cdot \mathbf{w} &= z_1\overline{w_1} + z_2\overline{w_2} + \cdots + z_n\overline{w_n}, \text{ vagy} \\
\mathbf{z} \cdot \mathbf{w} &= \overline{z_1}w_1 + \overline{z_2}w_2 + \cdots + \overline{z_n}w_n.
\end{aligned}$$

Mindkét fenti képlet használható, ízlés kérdése melyiket választjuk (könyvenként változik). Mi az utóbbit fogjuk használni a skaláris szorzat mátrixszorzatos alakjának egyszerűbb volta miatt (ld. majd a 7.94. definícióban). Mindenek előtt egy elnevezés:

**7.93. definíció (Komplex mátrix adjungáltja).** *Az $\mathbf{A}$ komplex mátrix adjungáltján (vagy Hermite-féle transzponáltján) elemenkénti konjugáltjának transzponáltját értjük. Az $\mathbf{A}$ adjungáltját $\mathbf{A}^*$, vagy Hermite neve után $\mathbf{A}^\mathsf{H}$ jelöli, tehát $\mathbf{A}^\mathsf{H} = \overline{\mathbf{A}}^\mathsf{T}$.*

Például $\begin{bmatrix} \mathrm{i} & 1+\mathrm{i} \\ -\mathrm{i} & 2 \end{bmatrix}^\mathsf{H} = \begin{bmatrix} -\mathrm{i} & \mathrm{i} \\ 1-\mathrm{i} & 2 \end{bmatrix}$, míg $[1 - \mathrm{i}\ \ \mathrm{i}]^\mathsf{H} = \begin{bmatrix} 1+\mathrm{i} \\ -\mathrm{i} \end{bmatrix}$.

**7.94. definíció (Komplex vektorok skaláris szorzata).** *A $\mathbb{C}^n$-beli $\mathbf{z} = (z_1, z_2, \dots, z_n)$ és $\mathbf{w} = (w_1, w_2, \dots, w_n)$ vektorok skaláris szorzatán a*

$$\mathbf{z} \cdot \mathbf{w} = \overline{z_1}w_1 + \overline{z_2}w_2 + \cdots + \overline{z_n}w_n$$

*komplex skalárt értjük. Ennek mátrixszorzatos alakja $\mathbf{z} \cdot \mathbf{w} = \mathbf{z}^\mathsf{H}\mathbf{w}$.*

> *Legyünk óvatosak az adjungált kifejezéssel: a könyvünk determinánsokról szóló fejezetében klasszikus adjungáltnak nevezett fogalmat ne keverjük össze ezzel az adjungálttal, nincs közük egymáshoz!*

Így a fent említett $(1,\mathrm{i})$ és az $(\mathrm{i},\mathrm{i})$ önmagukkal és egymással vett skaláris szorzatai:

$$\begin{aligned}
(1,\mathrm{i}) \cdot (1,\mathrm{i}) &= \begin{bmatrix} 1 \\ \mathrm{i} \end{bmatrix}^\mathsf{H} \begin{bmatrix} 1 \\ \mathrm{i} \end{bmatrix} = \begin{bmatrix} 1 & -\mathrm{i} \end{bmatrix} \begin{bmatrix} 1 \\ \mathrm{i} \end{bmatrix} = 1 - \mathrm{i}^2 = 2, \\
(\mathrm{i},\mathrm{i}) \cdot (\mathrm{i},\mathrm{i}) &= \begin{bmatrix} \mathrm{i} \\ \mathrm{i} \end{bmatrix}^\mathsf{H} \begin{bmatrix} \mathrm{i} \\ \mathrm{i} \end{bmatrix} = \begin{bmatrix} -\mathrm{i} & -\mathrm{i} \end{bmatrix} \begin{bmatrix} \mathrm{i} \\ \mathrm{i} \end{bmatrix} = -\mathrm{i}^2 - \mathrm{i}^2 = 2, \\
(1,\mathrm{i}) \cdot (\mathrm{i},\mathrm{i}) &= \begin{bmatrix} 1 \\ \mathrm{i} \end{bmatrix}^\mathsf{H} \begin{bmatrix} \mathrm{i} \\ \mathrm{i} \end{bmatrix} = \begin{bmatrix} 1 & -\mathrm{i} \end{bmatrix} \begin{bmatrix} \mathrm{i} \\ \mathrm{i} \end{bmatrix} = \mathrm{i} - \mathrm{i}^2 = 1 + \mathrm{i}, \\
(\mathrm{i},\mathrm{i}) \cdot (1,\mathrm{i}) &= \begin{bmatrix} \mathrm{i} \\ \mathrm{i} \end{bmatrix}^\mathsf{H} \begin{bmatrix} 1 \\ \mathrm{i} \end{bmatrix} = \begin{bmatrix} -\mathrm{i} & -\mathrm{i} \end{bmatrix} \begin{bmatrix} 1 \\ \mathrm{i} \end{bmatrix} = -\mathrm{i} - \mathrm{i}^2 = 1 - \mathrm{i}.
\end{aligned}$$

> *Világos, hogy két valós vektor skaláris szorzata az eredeti és e definíció szerint is ugyanazt az eredményt adja, ugyanis minden valós $r$ számra $\bar{r} = r$, tehát valós $\mathbf{u}$ és $\mathbf{v}$ vektorok esetén $\mathbf{u}^\mathsf{H} = \mathbf{u}^\mathsf{T}$, így $\mathbf{u} \cdot \mathbf{v} = \mathbf{u}^\mathsf{H}\mathbf{v} = \mathbf{u}^\mathsf{T}\mathbf{v}$. Tehát a fenti definíció kiterjesztése a valósban használt definíciónak.*

> *E definícióval a vektorok hosszára vonatkozó tulajdonságok is érvényben maradnak, amit hamarosan belátunk (ld. ??? tétel).*

Az adjungált tulajdonságai kiterjesztései a valós mátrixok transzponáltja tulajdonságainak, hisz valós mátrix konjugáltja megegyezik önmagával. Ez azonnal bizonyítja az alábbi tételt:

**7.95. tétel (Az adjungált tulajdonságai).** *Legyenek $\mathbf{A}$ és $\mathbf{B}$ komplex mátrixok, $c$ komplex szám. Ekkor*

*a)* $(\mathbf{A}^\mathsf{H})^\mathsf{H} = \mathbf{A}$,
*b)* $(\mathbf{A} + \mathbf{B})^\mathsf{H} = \mathbf{A}^\mathsf{H} + \mathbf{B}^\mathsf{H}$,
*c)* $(c\mathbf{A})^\mathsf{H} = \bar{c}\mathbf{A}^\mathsf{H}$
*d)* $(\mathbf{A}\mathbf{B})^\mathsf{H} = \mathbf{B}^\mathsf{H}\mathbf{A}^\mathsf{H}$.

Az adjungált tulajdonságaiból azonnal következik a következő tétel:

**7.96. tétel (A komplex skaláris szorzás tulajdonságai).** *Legyen $\mathbf{u}, \mathbf{v}, \mathbf{w} \in \mathbb{C}^n$, és legyen $c \in \mathbb{C}$. Ekkor*

*a)* $\mathbf{u} \cdot \mathbf{v} = \overline{\mathbf{v} \cdot \mathbf{u}}$,
*b)* $\mathbf{u} \cdot (\mathbf{v} + \mathbf{w}) = \mathbf{u} \cdot \mathbf{v} + \mathbf{u} \cdot \mathbf{w}$,
*c)* $(c\mathbf{u}) \cdot \mathbf{v} = \bar{c}(\mathbf{u} \cdot \mathbf{v})$ *és* $\mathbf{u} \cdot (c\mathbf{v}) = c(\mathbf{u} \cdot \mathbf{v})$,
*d)* $\mathbf{u} \cdot \mathbf{u} > 0$, *ha* $\mathbf{u} \neq \mathbf{0}$, *és* $\mathbf{u} \cdot \mathbf{u} = 0$, *ha* $\mathbf{u} = \mathbf{0}$.

> *Könnyen látható, hogy e tétel kiterjesztése a valós térbeli vektorokra kimondott 1.18. tételnek, bár első pillanatra úgy tűnhet, hogy ellentmond neki. Például valósban a skaláris szorzás kommutatív, itt nem, de a most kimondott változat érvényes valós vektorokra is, hisz valós vektor konjugáltja megegyezik önmagával. Hasonló állítható a c) tulajdonságról is.*

> *A c)-beli két tulajdonság bármelyike következik a másikból az a) alkalmazásával. Ha a skaláris szorzatot az $\mathbf{u} \cdot \mathbf{v} = \mathbf{v}^\mathsf{H}\mathbf{u}$ képlettel definiáltuk volna, akkor a természetesebben ható $(c\mathbf{u}) \cdot \mathbf{v} = c(\mathbf{u} \cdot \mathbf{v})$ összefüggés volna igaz.*

> *A d)-ben az is az állítás része, hogy egy komplex vektor önmagával vett skaláris szorzata egyáltalán valós szám.*

> *A d) úgy is megfogalmazható, hogy $\mathbf{u} \cdot \mathbf{u} \geq 0$, és $\mathbf{u} \cdot \mathbf{u} = 0$ pontosan akkor áll fönn, ha $\mathbf{u} = \mathbf{0}$.*

*Bizonyítás.* A bizonyítás a skaláris szorzás mátrixszorzatos alakjából, és a konjugált tulajdonságaiból azonnal adódik. Példaként megmutatjuk az a) bizonyítását:

$$\begin{aligned}
\overline{\mathbf{v} \cdot \mathbf{u}} &= \overline{\mathbf{v}^\mathsf{H}\mathbf{u}} = \overline{\mathbf{v}^\mathsf{T}\mathbf{u}} = \mathbf{v}^\mathsf{T}\overline{\mathbf{u}} = \overline{\mathbf{u}}^\mathsf{T}\mathbf{v} = \mathbf{u}^\mathsf{H}\mathbf{v} \\
&= \mathbf{u} \cdot \mathbf{v}
\end{aligned}$$

A többi állítás hasonlóan bizonyítható. $\square$

#### Komplex mátrixok kitüntetett alterei

Mivel a komplex mátrixszorzásban nem az egyik mátrix sorának és a másik egy oszlopának skaláris szorzatát számítjuk ki, megváltoznak a kitüntetett alterek.

Egy $\mathbf{A} \in \mathbb{C}^{m \times n}$ esetén az $\mathbf{A}\mathbf{x}$ szorzatban nem $\mathbf{A}$ sorterének egy $\mathbf{a}_i$ vektorát szorozzuk skalárisan az $\mathbf{x}$ vektorral, hanem a sortér konjugáltjának egy vektorát, ugyanis

$$\overline{\mathbf{a}}_i \cdot \mathbf{x} = \sum_{j=1}^{n} a_{ij}x_j = [\mathbf{A}\mathbf{x}]_i.$$

A sortér konjugáltjaiból álló vektorok is alteret alkotnak, amely megegyezik $\mathbf{A}^\mathsf{H}$ oszlopterével ($\overline{\mathcal{S}(\mathbf{A})} = \mathcal{O}(\mathbf{A}^\mathsf{H})$). Így az $\mathbf{A}\mathbf{x} = \mathbf{0}$ egyenlet azt jelenti, hogy a sortér vektorainak konjugáltjaiból álló tér merőleges a nulltérre, így az is adódik, hogy $\mathbb{C}^n = \mathcal{O}(\mathbf{A}^\mathsf{H}) \oplus \mathcal{N}(\mathbf{A})$ és hasonlóképp $\mathbb{C}^m = \mathcal{O}(\mathbf{A}) \oplus \mathcal{N}(\mathbf{A}^\mathsf{H})$. Az $\mathbf{A}$ komplex mátrix kitüntetett alterein tehát az $\mathcal{O}(\mathbf{A}^\mathsf{H})$, $\mathcal{N}(\mathbf{A})$, $\mathcal{O}(\mathbf{A})$, $\mathcal{N}(\mathbf{A}^\mathsf{H})$ tereket értjük. Az, hogy a konzisztens $\mathbf{A}\mathbf{x} = \mathbf{b}$ egyenletnek egyetlen megoldása esik a sortér konjugáltjába, azaz $\mathcal{O}(\mathbf{A}^\mathsf{H})$-ba, hasonlóan bizonyítható, mint valós mátrix esetén. Igaz tehát a következő tétel:

**7.97. tétel (Komplex mátrix kitüntetett alterei).** *Az $\mathbf{A} \in \mathbb{C}^{m \times n}$ mátrix kitüntetett altereire igazak a következő állítások:*

*a)* $\mathcal{O}(\mathbf{A}^\mathsf{H}) \perp \mathcal{N}(\mathbf{A})$, $\mathcal{O}(\mathbf{A}) \perp \mathcal{N}(\mathbf{A}^\mathsf{H})$,
*b)* $\mathbb{C}^n = \mathcal{O}(\mathbf{A}^\mathsf{H}) \oplus \mathcal{N}(\mathbf{A})$, $\mathbb{C}^m = \mathcal{O}(\mathbf{A}) \oplus \mathcal{N}(\mathbf{A}^\mathsf{H})$,
*c)* *az $\mathbf{x} \mapsto \mathbf{A}\mathbf{x}$ mátrixleképezés kölcsönösen egyértelmű $\mathcal{O}(\mathbf{A}^\mathsf{H})$ és $\mathcal{O}(\mathbf{A})$ között.*

#### Önadjungált mátrixok

Ahogy a transzponált fogalmának a – komplex skaláris szorzatot figyelembe vevő – kiterjesztése az adjungált, ugyanúgy a szimmetrikus mátrix fogalmának kiterjesztése az önadjungált mátrix. Szimmetrikus mátrix az, amelyik megegyezik saját transzponáltjával, önadjungált az, amelyik megegyezik saját adjungáltjával.

Az $\mathbf{A}$ komplex mátrix *önadjungált*, ha

$$\mathbf{A}^\mathsf{H} = \mathbf{A}. \tag{7.27}$$

> *Az önadjungált mátrixokat Hermite-féle mátrixnak is nevezik.*

> *Világos, hogy önadjungált mátrix főátlójában csak valósok állhatnak, mert csak azok egyeznek meg saját konjugáltjukkal.*

> *Minden valós szimmetrikus mátrix önadjungált, hisz a valós számok megegyeznek saját konjugáltjukkal. Sőt, mivel a nem valós komplex számok nem egyeznek meg saját konjugáltjukkal, ezért a komplex szimmetrikus mátrixok pontosan akkor önadjungáltak, ha minden elemük valós.*

**7.98. példa (Önadjungált mátrixok).** *Az*

$$\begin{bmatrix} 1 & \mathrm{i} & 1+\mathrm{i} \\ -\mathrm{i} & 2 & 2-3\mathrm{i} \\ 1-\mathrm{i} & 2+3\mathrm{i} & 3 \end{bmatrix}, \quad \begin{bmatrix} 1 & 2 \\ 2 & 3 \end{bmatrix}, \quad \begin{bmatrix} \mathrm{i} & 1+\mathrm{i} \\ 1-\mathrm{i} & 1 \end{bmatrix}, \quad \begin{bmatrix} 1 & 1+\mathrm{i} \\ 1+\mathrm{i} & 2 \end{bmatrix}$$

*mátrixok közül az első kettő önadjungált, a harmadik nem, mert főátlójában nem minden szám valós, a negyedik sem, az viszont komplex szimmetrikus mátrix!*

#### Távolság és a merőleges vetítés komplex terekben

A komplex skaláris szorzás segítségével – a valós esethez hasonlóan – definiálható a komplex vektorok távolsága és merőlegessége.

A komplex $\mathbf{u} \in \mathbb{C}^n$ vektor *hossza*, vagy *abszolút értéke* $|\mathbf{u}| = \sqrt{\mathbf{u} \cdot \mathbf{u}}$, *két vektor távolsága* megegyezik különbségük hosszával, azaz $\mathbf{u}, \mathbf{v} \in \mathbb{C}^n$ vektorok esetén $d(\mathbf{u}, \mathbf{v}) = |\mathbf{u} - \mathbf{v}|$. Két vektort *merőlegesnek* tekintünk, ha skaláris szorzatuk 0.

> *Két komplex vektor szögének koszinusza, nem definiálható a valóshoz hasonló módon, még a képlettel sem! Ld. a ??, a ?? feladatokat.*

**7.99. tétel (Cauchy–Bunyakovszkij–Schwarz-egyenlőtlenség).** *Tetszőleges $\mathbf{u}, \mathbf{v} \in \mathbb{C}^n$ vektorokra*

$$|\mathbf{u} \cdot \mathbf{v}| \leq |\mathbf{u}||\mathbf{v}|. \tag{7.28}$$

*Egyenlőség pontosan akkor áll fenn, ha $\mathbf{u}$ és $\mathbf{v}$ lineárisan összefüggők, azaz ha egyik vektor a másik skalárszorosa.*

Az 1.51. tétel bizonyítása minimális változtatással megy itt is!

> *A valós és komplex skaláris szorzat használata között több különbség következménye annak, hogy komplex vektorok szöge nem definiálható a valóssal azonos módon (ld. a ??, a ?? feladatokat), így a Pitagorasz-tétel sem mondható ki azonos módon (ld. 7.50. feladatot).*

#### Unitér mátrixok

Az ortogonális mátrixok komplex analogonjai az unitér mátrixok.

**7.100. definíció (Unitér mátrix).** *Egy komplex négyzetes $\mathbf{U}$ mátrix unitér, ha $\mathbf{U}^\mathsf{H}\mathbf{U} = \mathbf{I}$.*

> *Az ortogonális mátrixokhoz hasonlóan bizonyítható, hogy egy $\mathbf{U} \in \mathbb{C}^{n \times n}$ mátrix pontosan akkor unitér, ha az alábbiak bármelyike teljesül:*
> - *$\mathbf{U}\mathbf{U}^\mathsf{H} = \mathbf{I}$,*
> - *$\mathbf{U}^{-1} = \mathbf{U}^\mathsf{H}$,*
> - *$\mathbf{U}$ oszlopvektorai ortonormált bázist alkotnak a komplex skalárszorzásra nézve,*
> - *$\mathbf{U}$ sorvektorai ortonormált bázist alkotnak a komplex skalárszorzásra nézve,*
> - *$|\mathbf{U}\mathbf{x}| = |\mathbf{x}|$ minden $\mathbf{x} \in \mathbb{C}^n$ vektorra,*
> - *$\mathbf{U}\mathbf{x} \cdot \mathbf{U}\mathbf{y} = \mathbf{x} \cdot \mathbf{y}$.*

### Feladatok

#### Komplex vektorok skaláris szorzata, hossza, távolsága

*Számítsuk ki az alábbi skaláris szorzatok értékét!*

**7.42.** $(1+\mathrm{i}, \mathrm{i}, -1) \cdot (1+\mathrm{i}, -\mathrm{i}, -1)$

**7.43.** $(1-\mathrm{i}, \mathrm{i}, -2, 1+\mathrm{i}) \cdot (1+\mathrm{i}, 0, 2, 1-\mathrm{i})$

*Mekkora az alábbi vektorok hossza?*

**7.44.** $(1-\mathrm{i}, \mathrm{i}, -2, 1+\mathrm{i})$

**7.45.** $(a+b\mathrm{i}, b+c\mathrm{i}, c+a\mathrm{i})$, $a, b, c \in \mathbb{R}$

*Számítsuk ki az alábbi két vektor távolságát!*

**7.46.** $(1+\mathrm{i}, \mathrm{i}, -1)$, $(1+\mathrm{i}, -\mathrm{i}, -1)$

**7.47.** $(1-\mathrm{i}, \mathrm{i}, -2, 1+\mathrm{i})$, $(1+\mathrm{i}, 0, 2, 1-\mathrm{i})$

#### Komplex vektorok szöge

**7.48.** Legyen $\mathbf{u}, \mathbf{v} \in \mathbb{C}^n$, és legyen
$\hat{\mathbf{u}} = (\Re(u_1), \Im(u_1), \dots, \Re(u_n), \Im(u_n))$,
$\hat{\mathbf{v}} = (\Re(v_1), \Im(v_1), \dots, \Re(v_n), \Im(v_n)) \in \mathbb{R}^{2n}$. Legyen $\varphi = (\hat{\mathbf{u}}, \hat{\mathbf{v}})_\angle$. Igazoljuk, hogy

$$\cos(\varphi) = \frac{\Re(\mathbf{u} \cdot \mathbf{v})}{|\mathbf{u}||\mathbf{v}|} \tag{7.29}$$

E képlettel szokás definiálni két komplex vektor szögét!

#### Pitagorasz-tétel komplex vektorokra

**7.49.** Tekintsük az $\mathbf{a} = (1, \mathrm{i})$ és a $\mathbf{b} = (-\mathrm{i}, 1)$ vektorokat. Mutassuk meg, hogy bár $|\mathbf{a}|^2 + |\mathbf{b}|^2 = |\mathbf{a} + \mathbf{b}|^2$, mégsem igaz, hogy $\mathbf{a} \cdot \mathbf{b} = 0$, vagyis a Pitagorasz-tétel nem mondható ki komplex vektorokra a valósokéval azonos módon.

**7.50.** Pitagorasz-tétel komplex vektorokra. Tetszőleges $\mathbf{u}, \mathbf{v} \in \mathbb{C}^n$ vektorokra $|\mathbf{u}|^2 + |\mathbf{v}|^2 = |\mathbf{u} + \mathbf{v}|^2$ pontosan akkor áll fenn, ha $\Re(\mathbf{a} \cdot \mathbf{b}) = 0$.

### Diszkrét Fourier-transzformált

#### Fourier-mátrixok

Az $N$-edik komplex egységgyök hatványaiból képzett Vandermonde-mátrix kiemelkedően fontos szerepet kapott a modern műszaki alkalmazásokban. E mátrix alaptulajdonságainak megismeréséhez a Fourier-összegek együtthatói és helyettesítési értékei közti kapcsolaton keresztül közelítünk.

A Fourier-sorok komplex

$$\sum_{n=-\infty}^{\infty} c_n e^{n\mathrm{i}t}$$

alakja, és ezek

$$\sum_{n=0}^{N-1} c_n e^{n\mathrm{i}t} = c_0 + c_1 e^{\mathrm{i}t} + c_1 e^{2\mathrm{i}t} + \cdots + c_{N-1} e^{(N-1)\mathrm{i}t} \tag{7.30}$$

alakú részletösszegei kulcsszerepet játszanak a periodikus, illetve a korlátos tartományon értelmezett függvények leírásában. A (7.30) összeget (diszkrét) *Fourier-összegnek* nevezzük.

**7.101. állítás (Fourier-összeg helyettesítési értékei).** *A (7.30) Fourier-összeg együtthatóihoz a Fourier-összegnek a $[0, 2\pi]$ intervallumot $N$ egyenlő részre osztó $0, \frac{2\pi}{N}, \frac{4\pi}{N}, \dots, \frac{2(N-1)\pi}{N}$ pontokban vett helyettesítési értékeit rendelő leképezés lineáris, melynek mátrixa $\left[e^{\frac{2\pi\mathrm{i}}{N}mn}\right]$ ($0 \leq m, n < N$).*

*Bizonyítás.* Először vizsgáljuk meg az $N = 3$ esetet. Az osztópontok: $t_0 = 0$, $t_1 = 2\pi/3$, $t_2 = 4\pi/3$. A Fourier-összeg $c_0 + c_1 e^{\mathrm{i}t} + c_2 e^{2\mathrm{i}t}$, ennek $t_k$-beli helyettesítési értékét jelölje $y_k$. Tehát

$$\begin{aligned}
y_0 &= c_0 + c_1 e^{\mathrm{i}0} + c_2 e^{2\mathrm{i}0} = c_0 + c_1 + c_2 \\
y_1 &= c_0 + c_1 e^{\frac{2\pi\mathrm{i}}{3}} + c_2 e^{\frac{4\pi\mathrm{i}}{3}} = c_0 + c_1 \varepsilon + c_2 \varepsilon^2 \\
y_2 &= c_0 + c_1 e^{\frac{4\pi\mathrm{i}}{3}} + c_2 e^{\frac{8\pi\mathrm{i}}{3}} = c_0 + c_1 \varepsilon^2 + c_2 \varepsilon^4
\end{aligned}$$

ahol $\varepsilon = e^{\frac{2\pi\mathrm{i}}{3}}$ a legkisebb pozitív argumentumú harmadik komplex egységgyököt jelöli. Világos, hogy a $(c_0, c_1, c_2) \mapsto (y_0, y_1, y_2)$ leképezés lineáris, melynek mátrixszorzat-alakja

$$\begin{bmatrix} y_0 \\ y_1 \\ y_2 \end{bmatrix} = \begin{bmatrix} 1 & 1 & 1 \\ 1 & \varepsilon & \varepsilon^2 \\ 1 & \varepsilon^2 & \varepsilon^4 \end{bmatrix} \begin{bmatrix} c_0 \\ c_1 \\ c_2 \end{bmatrix}$$

Hasonlóan egyszerű az általános eset is, azonban még tekintsük át az $N = 2$ és az $N = 4$ eset is. $N = 2$ esetén $\varepsilon = e^{\frac{2\pi\mathrm{i}}{2}} = -1$ a primitív egységgyök, így

$$\begin{bmatrix} y_0 \\ y_1 \end{bmatrix} = \begin{bmatrix} 1 & 1 \\ 1 & \varepsilon \end{bmatrix} \begin{bmatrix} c_0 \\ c_1 \end{bmatrix} = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix} \begin{bmatrix} c_0 \\ c_1 \end{bmatrix},$$

míg $N = 4$ esetén $\varepsilon = e^{\frac{2\pi\mathrm{i}}{4}} = \mathrm{i}$, tehát

$$\begin{bmatrix} y_0 \\ y_1 \\ y_2 \\ y_3 \end{bmatrix} = \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & \varepsilon & \varepsilon^2 & \varepsilon^3 \\ 1 & \varepsilon^2 & \varepsilon^4 & \varepsilon^6 \\ 1 & \varepsilon^3 & \varepsilon^6 & \varepsilon^9 \end{bmatrix} \begin{bmatrix} c_0 \\ c_1 \\ c_2 \\ c_3 \end{bmatrix} = \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & \mathrm{i} & -1 & -\mathrm{i} \\ 1 & -1 & 1 & -1 \\ 1 & -\mathrm{i} & -1 & \mathrm{i} \end{bmatrix} \begin{bmatrix} c_0 \\ c_1 \\ c_2 \\ c_3 \end{bmatrix}.$$

Általános esetben az $n$-edik osztópont $\frac{2n\pi}{N}$ ($n = 0, 1, 2, \dots, N-1$), a Fourier-összeg e pontbeli helyettesítési értékét $y_n$-nel jelölve

$$\begin{aligned}
y_0 &= c_0 + c_1 e^{\mathrm{i}0} + c_2 e^{2\mathrm{i}0} + \cdots + c_{N-1} e^{(N-1)\mathrm{i}0} = c_0 + c_1 + \cdots + c_{N-1} \\
y_1 &= c_0 + c_1 e^{\frac{2\pi\mathrm{i}}{N}} + c_2 e^{\frac{4\pi\mathrm{i}}{N}} + \cdots + c_{N-1} e^{\frac{2(N-1)\pi\mathrm{i}}{N}} \\
y_2 &= c_0 + c_1 e^{\frac{4\pi\mathrm{i}}{N}} + c_2 e^{\frac{8\pi\mathrm{i}}{N}} + \cdots + c_{N-1} e^{\frac{4(N-1)\pi\mathrm{i}}{N}} \\
&\vdots \\
y_{N-1} &= c_0 + c_1 e^{\frac{2\pi\mathrm{i}(N-1)}{N}} + c_2 e^{\frac{4\pi\mathrm{i}(N-1)}{N}} + \cdots + c_{N-1} e^{\frac{2\pi\mathrm{i}(N-1)^2}{N}}
\end{aligned}$$

Az $\varepsilon = e^{2\pi\mathrm{i}/N}$ jelöléssel mátrixszorzat-alakban

$$\begin{bmatrix} y_0 \\ y_1 \\ \vdots \\ y_{N-1} \end{bmatrix} = \begin{bmatrix} 1 & 1 & 1 & 1 & \cdots & 1 \\ 1 & \varepsilon & \varepsilon^2 & \varepsilon^3 & \cdots & \varepsilon^{N-1} \\ 1 & \varepsilon^2 & \varepsilon^4 & \varepsilon^6 & \cdots & \varepsilon^{2(N-1)} \\ 1 & \varepsilon^3 & \varepsilon^6 & \varepsilon^9 & \cdots & \varepsilon^{3(N-1)} \\ \vdots & \vdots & \vdots & \vdots & \ddots & \vdots \\ 1 & \varepsilon^{N-1} & \varepsilon^{2(N-1)} & \varepsilon^{3(N-1)} & \cdots & \varepsilon^{(N-1)^2} \end{bmatrix} \begin{bmatrix} c_0 \\ c_1 \\ \vdots \\ c_{N-1} \end{bmatrix} \qquad \square$$

E példában szereplő együtthatómátrix egy Vandermonde-mátrix, mégpedig a $\mathbf{V}_N(1, \varepsilon, \varepsilon^2, \dots, \varepsilon^{N-1})$ mátrix, melyet $\boldsymbol{\Phi}_{N,\varepsilon}$-nal jelölünk. Fontos lesz még e mátrix konjugáltja, mely az $\omega = \bar{\varepsilon} = e^{-2\pi\mathrm{i}/N}$ egységgyökhöz tartozó Vandermonde-mátrix. E két mátrixot *Fourier-mátrixnak* is nevezik. Tehát $[\boldsymbol{\Phi}_{N,\varepsilon}]_{kn} = \varepsilon^{kn}$, $[\boldsymbol{\Phi}_{N,\omega}]_{kn} = \omega^{kn}$ ($0 \leq k, n < N$), azaz részletesen

$$\boldsymbol{\Phi}_{N,\varepsilon} = \mathbf{V}_N(1, \varepsilon, \varepsilon^2, \dots, \varepsilon^{N-1}) = \begin{bmatrix} 1 & 1 & \cdots & 1 \\ 1 & \varepsilon & \cdots & \varepsilon^{N-1} \\ \vdots & \vdots & \ddots & \vdots \\ 1 & \varepsilon^{N-1} & \cdots & \varepsilon^{(N-1)^2} \end{bmatrix} \tag{7.31}$$

$$\boldsymbol{\Phi}_{N,\omega} = \mathbf{V}_N(1, \omega, \dots, \omega^{N-1}) = \begin{bmatrix} 1 & 1 & \cdots & 1 \\ 1 & \omega & \cdots & \omega^{N-1} \\ \vdots & \vdots & \ddots & \vdots \\ 1 & \omega^{N-1} & \cdots & \omega^{(N-1)^2} \end{bmatrix} \tag{7.32}$$

Az előző példában a Fourier-együtthatók ismeretében meghatároztuk a függvény helyettesítési értékeit. A gyakorlati alkalmazásokban főként a fordított sorrend érdekes, vannak $y_k$ mért adataink, és keressük a $c_k$ együtthatókat. Ehhez nyújt alapismereteket a következő tétel.

**7.102. tétel (A Fourier-mátrixok tulajdonságai).** *Legyen $N$ pozitív egész szám, $\varepsilon = e^{2\pi\mathrm{i}/N}$, $\omega = \bar{\varepsilon} = e^{-2\pi\mathrm{i}/N}$. Az $\boldsymbol{\Phi}_{N,\varepsilon}$ és $\boldsymbol{\Phi}_{N,\omega}$ Fourier-mátrixok a következő tulajdonságokkal rendelkeznek:*

*a) Bármelyik Fourier-mátrix $k$-adik és $N-k$-adik sora egymás konjugáltja, páros $N$ esetén pedig az $N/2$-edik sorvektor $(1, -1, 1, -1, \dots)$.*

*b) A két Fourier-mátrix egymás konjugáltja és egyúttal egymás adjungáltja is, azaz $\boldsymbol{\Phi}_{N,\omega} = \overline{\boldsymbol{\Phi}}_{N,\varepsilon} = \boldsymbol{\Phi}_{N,\varepsilon}^\mathsf{H}$ és $\boldsymbol{\Phi}_{N,\varepsilon} = \overline{\boldsymbol{\Phi}}_{N,\omega} = \boldsymbol{\Phi}_{N,\omega}^\mathsf{H}$.*

*c) $\boldsymbol{\Phi}_{N,\varepsilon}\boldsymbol{\Phi}_{N,\omega} = N\mathbf{I}_N$, így $\boldsymbol{\Phi}_{N,\varepsilon}$ és $\boldsymbol{\Phi}_{N,\omega}$ invertálható,*

$$\boldsymbol{\Phi}_{N,\varepsilon}^{-1} = \frac{1}{N}\boldsymbol{\Phi}_{N,\omega}, \ \boldsymbol{\Phi}_{N,\omega}^{-1} = \frac{1}{N}\boldsymbol{\Phi}_{N,\varepsilon},$$

*továbbá $\frac{1}{\sqrt{N}}\boldsymbol{\Phi}_{N,\varepsilon}$ és $\frac{1}{\sqrt{N}}\boldsymbol{\Phi}_{N,\omega}$ unitér.*

*Bizonyítás.* a) Az $\boldsymbol{\Phi}_{N,\varepsilon}$ mátrix $k$-adik, illetve $N-k$-adik sorának $n$-edik eleme $\varepsilon^{kn}$, illetve $\varepsilon^{(N-k)n}$. Ez utóbbit átalakítva kapjuk, hogy

$$\varepsilon^{(N-k)n} = \varepsilon^{Nn}\varepsilon^{-kn} = (\varepsilon^{-1})^{kn} = \bar{\varepsilon}^{kn}.$$

Mivel minden pozitív páros $N$-re $\varepsilon^{\frac{N}{2}} = -1$, ezért az $N/2$-edik sorban $-1$ hatványai szerepelnek.

b) Mivel $\omega = \bar{\varepsilon}$, ezért $\omega^s = \bar{\varepsilon}^s$, tehát $\boldsymbol{\Phi}_{N,\omega} = \overline{\boldsymbol{\Phi}}_{N,\varepsilon}$. Másrészt $\boldsymbol{\Phi}_{N,\varepsilon}$ szimmetrikus, következésképp $\overline{\boldsymbol{\Phi}}_{N,\varepsilon} = \overline{\boldsymbol{\Phi}}_{N,\varepsilon}^\mathsf{T} = \boldsymbol{\Phi}_{N,\varepsilon}^\mathsf{H}$.

c) Számítsuk ki a $\boldsymbol{\Phi}_{N,\varepsilon}\boldsymbol{\Phi}_{N,\omega}$ mátrixot! A szorzat $k$-adik sorának $n$-edik oszlopában a

$$\sum_{m=0}^{N-1} \varepsilon^{km}\omega^{mn} = \sum_{m=0}^{N-1} \varepsilon^{m(k-n)} = \sum_{m=0}^{N-1} (\varepsilon^{k-n})^m$$

összeg szerepel. Ha $k = n$, azaz $\varepsilon^{k-n} = 1$, akkor ez az összeg $N$, minden más esetben 0 (ld. a ?? állítást a komplex számokról szóló függelékben). Mindezek egyik következménye, hogy $\boldsymbol{\Phi}_{N,\varepsilon}$, $\boldsymbol{\Phi}_{N,\omega}$ invertálhatók, $\boldsymbol{\Phi}_{N,\varepsilon}$ inverze $\frac{1}{N}\boldsymbol{\Phi}_{N,\omega}$, $\boldsymbol{\Phi}_{N,\omega}$ inverze $\frac{1}{N}\boldsymbol{\Phi}_{N,\varepsilon}$. A másik következmény, hogy

$$\left(\frac{1}{\sqrt{N}}\boldsymbol{\Phi}_{N,\varepsilon}\right)\left(\frac{1}{\sqrt{N}}\boldsymbol{\Phi}_{N,\omega}\right) = \mathbf{I}_N,$$

ami a b)-t is figyelembe véve épp azt jelenti, hogy

$$\left(\frac{1}{\sqrt{N}}\boldsymbol{\Phi}_{N,\varepsilon}\right)\left(\frac{1}{\sqrt{N}}\boldsymbol{\Phi}_{N,\varepsilon}\right)^\mathsf{H} = \mathbf{I}_N,$$

azaz hogy $\frac{1}{\sqrt{N}}\boldsymbol{\Phi}_{N,\varepsilon}$ unitér. $\square$

#### Diszkrét Fourier-transzformáció

A diszkrét Fourier-transzformációra úgy gondolhatunk, mint egy – általában komplex – függvény helyettesítési értékeinek vektorához a függvény trigonometrikus összetevői együtthatóinak vektorát rendelő lineáris $\mathbb{C}^N \to \mathbb{C}^N$ leképezésre.

A 7.101. példában egy Fourier-összeg együtthatóival kifejeztük a függvény megadott helyeken fölvett értékeit. A fordított irány sokkal érdekesebb: ismerjük egy $f$ függvény $N$ különböző megadott helyen fölvett értékét, és meg van adva $N$ lineárisan független függvény. Olyan lineáris kombinációjuk együtthatóit keressük e függvényeknek, mely lineáris kombináció a megadott helyeken megegyezik $f$-fel. Mi a következőkben definiálandó diszkrét Fourier-transzformáció esetén az

$$f(t) = \frac{1}{N} \sum_{n=0}^{N-1} c_n e^{n\mathrm{i}t}$$

függvényből indulunk ki, a megadott helyek a $[0, 2\pi]$ intervallumot $N$ részre osztó $2k\pi/N$ ($k = 0, 1, \dots, N-1$) pontok. A $(c_0, c_1, \dots, c_{N-1}) \mapsto (y_0, y_1, \dots, y_{N-1})$ leképezés inverzét fogjuk diszkrét Fourier-transzformáltnak nevezni. Ennek mátrixa $\boldsymbol{\Phi}_{N,\omega}$, amelyre a továbbiakban az $\mathbf{F}_N$ jelölést is használjuk. E megközelítésből az $f$ függvény teljesen elhagyható, hisz a lényeg az, hogy egy szám-$N$-eshez hozzárendelünk egy másikat!

**7.103. definíció (Diszkrét Fourier-transzformáció (DFT)).** *Az $\mathbf{F}_N : \mathbb{C}^N \to \mathbb{C}^N : \mathbf{x} \mapsto \mathbf{X} = \mathbf{F}_N\mathbf{x}$ leképezést diszkrét Fourier-transzformációnak nevezzük.*

> *A diszkrét Fourier-transzformáció tehát a (7.32) képlettel megadott $\mathbf{F}_N = \boldsymbol{\Phi}_{N,\omega}$ mátrixhoz tartozó mátrixleképezés.*

> *A leképezést kifejtve koordinátánként:*
>
> $$X_k = \sum_{n=0}^{N-1} x_n e^{-\frac{2\pi\mathrm{i}}{N}kn} = \sum_{n=0}^{N-1} x_n \omega^{kn} \qquad (\omega = e^{-\frac{2\pi\mathrm{i}}{N}}). \tag{7.33}$$

> *Az $\mathbf{F}_N$ transzformáció mátrixszorzatos alakja*
>
> $$\mathbf{F}_N : \begin{bmatrix} x_0 \\ x_1 \\ \vdots \\ x_{N-1} \end{bmatrix} \mapsto \begin{bmatrix} X_0 \\ X_1 \\ \vdots \\ X_{N-1} \end{bmatrix} = \begin{bmatrix} 1 & 1 & \cdots & 1 \\ 1 & \omega & \cdots & \omega^{N-1} \\ \vdots & \vdots & \ddots & \vdots \\ 1 & \omega^{N-1} & \cdots & \omega^{(N-1)^2} \end{bmatrix} \begin{bmatrix} x_0 \\ x_1 \\ \vdots \\ x_{N-1} \end{bmatrix}.$$

> *E témában elterjedt jelölések: a transzformálandó vektor dimenzióját nagy $N$ jelöli, a képvektort a transzformálandó vektor nagybetűs változata jelöli, azaz $\mathbf{x}$ képe $\mathbf{X}$, $\mathbf{y}$ képe $\mathbf{Y}$, stb., a vektorok koordinátái 0-tól $N-1$-ig vannak indexelve.*

> *A diszkrét Fourier-transzformációt gyakran a Fourier-mátrixok valamelyikének egy másik konstansszorosával definiálják. Előfordul az unitér $\frac{1}{\sqrt{N}}\mathbf{F}_N$, az $\frac{1}{N}\mathbf{F}_N$ vagy a $\boldsymbol{\Phi}_{N,\hat{\varepsilon}}$ mátrix is a transzformáció mátrixaként, sőt van aki minden olyan $\boldsymbol{\Phi}_{N,\hat{\varepsilon}}$ mátrixot egy DFT mátrixának tekint, ahol $\hat{\varepsilon}$ primitív $N$-edik egységgyök.*

> *Az általunk adott definíció a legelterjedtebb, a legtöbb ismert szoftver is ezt használja. Ennek oka e definíciónak a folytonos Fourier-transzformálttal való szorosabb kapcsolata, és a jelfeldolgozásban is ezt használják leginkább. Más alkalmazásokhoz viszont megfelelőbb lehet valamelyik fent említett másik definíció.*

> *Konkrétan az $\mathbf{F}_1$, $\mathbf{F}_2$, $\mathbf{F}_4$ és $\mathbf{F}_8$ mátrixok:*
>
> $$\mathbf{F}_1 = [1], \quad \mathbf{F}_2 = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}, \quad \mathbf{F}_4 = \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & -\mathrm{i} & -1 & \mathrm{i} \\ 1 & -1 & 1 & -1 \\ 1 & \mathrm{i} & -1 & -\mathrm{i} \end{bmatrix},$$
>
> $$\mathbf{F}_8 = \begin{bmatrix} 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\ 1 & \frac{1-\mathrm{i}}{\sqrt{2}} & -\mathrm{i} & \frac{-1-\mathrm{i}}{\sqrt{2}} & -1 & \frac{-1+\mathrm{i}}{\sqrt{2}} & \mathrm{i} & \frac{1+\mathrm{i}}{\sqrt{2}} \\ 1 & -\mathrm{i} & -1 & \mathrm{i} & 1 & -\mathrm{i} & -1 & \mathrm{i} \\ 1 & \frac{-1-\mathrm{i}}{\sqrt{2}} & \mathrm{i} & \frac{1-\mathrm{i}}{\sqrt{2}} & -1 & \frac{1+\mathrm{i}}{\sqrt{2}} & -\mathrm{i} & \frac{-1+\mathrm{i}}{\sqrt{2}} \\ 1 & -1 & 1 & -1 & 1 & -1 & 1 & -1 \\ 1 & \frac{-1+\mathrm{i}}{\sqrt{2}} & -\mathrm{i} & \frac{1+\mathrm{i}}{\sqrt{2}} & -1 & \frac{1-\mathrm{i}}{\sqrt{2}} & \mathrm{i} & \frac{-1-\mathrm{i}}{\sqrt{2}} \\ 1 & \mathrm{i} & -1 & -\mathrm{i} & 1 & \mathrm{i} & -1 & -\mathrm{i} \\ 1 & \frac{1+\mathrm{i}}{\sqrt{2}} & \mathrm{i} & \frac{-1+\mathrm{i}}{\sqrt{2}} & -1 & \frac{-1-\mathrm{i}}{\sqrt{2}} & -\mathrm{i} & \frac{1-\mathrm{i}}{\sqrt{2}} \end{bmatrix}$$

**7.104. tétel (A DFT tulajdonságai).** *Tekintsük a diszkrét $\mathbf{F}_N$ Fourier-transzformációt, és legyen az $\mathbf{x} = (x_0, x_1, \dots, x_{N-1})$ vektor képe $\mathbf{X} = (X_0, X_1, \dots, X_{N-1})$. Ekkor a következők igazak:*

*a) Konstans vektor képe impulzusvektor (melynek a nulladikat kivéve mindegyik koordinátája 0), és fordítva, konkrétan*

$$\mathbf{F}_N(c, c, \dots, c) = (Nc, 0, \dots, 0), \quad \mathbf{F}_N(c, 0, \dots, 0) = (c, c, \dots, c).$$

*ahol $c \in \mathbb{C}$ tetszőleges konstans.*

*b) Ha $\mathbf{x}$ valós vektor, akkor $X_{N-k} = \overline{X}_k$.*

*c) Az $\mathbf{F}_N$ transzformáció invertálható, inverze (IDFT) többféle felírásban:*

$$\mathbf{x} = \mathbf{F}_N^{-1}\mathbf{X} = \frac{1}{N}\boldsymbol{\Phi}_{N,\varepsilon}\mathbf{X}, \quad x_k = \frac{1}{N}\sum_{n=0}^{N-1} X_n \varepsilon^{kn} = \frac{1}{N}\sum_{n=0}^{N-1} X_n e^{\frac{2\pi\mathrm{i}}{N}kn}.$$

*Bizonyítás.* a) Az állítás első részének bizonyítása közvetlenül leolvasható az $\boldsymbol{\Phi}_{N,\varepsilon}(c\boldsymbol{\Phi}_{N,\omega}) = cN\mathbf{I}_N$ szorzat első oszlopából, második része a $c\boldsymbol{\Phi}_{N,\varepsilon}$ mátrix első oszlopából. De a 7.102. tétel bizonyításában is használt ?? állításra hivatkozva közvetlenül is azonnal adódik.

b) A (7.33) képletet használva

$$\begin{aligned}
X_{N-k} &= \sum_{n=0}^{N-1} x_n \omega^{(N-k)n} = \sum_{n=0}^{N-1} x_n \omega^{-kn} \\
&= \sum_{n=0}^{N-1} x_n \overline{\omega}^{kn} = \overline{\sum_{n=0}^{N-1} x_n \omega^{kn}} = \overline{X}_k
\end{aligned}$$

c) Az invertálhatóság azonnal adódik abból, hogy a Fourier-mátrixok Vandermonde-mátrixok is egyúttal, melynek determinánsa nem 0. A tételbeli mindegyik összefüggés azonnali következménye az $\mathbf{F}_N^{-1} = \boldsymbol{\Phi}_{N,\omega}^{-1} = \frac{1}{N}\boldsymbol{\Phi}_{N,\varepsilon}$ képletnek. $\square$

**7.105. példa (DFT kiszámítása).** *Határozzuk meg az $\mathbf{x} = (1, \mathrm{i}, \mathrm{i}, 2)$ vektor diszkrét Fourier-transzformáltját!*

*Megoldás.* $N = 4$, így

$$\mathbf{X} = \mathbf{F}_4\mathbf{x} = \mathbf{F}_4\mathbf{x} = \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & -\mathrm{i} & -1 & \mathrm{i} \\ 1 & -1 & 1 & -1 \\ 1 & \mathrm{i} & -1 & -\mathrm{i} \end{bmatrix} \begin{bmatrix} 1 \\ \mathrm{i} \\ \mathrm{i} \\ 2 \end{bmatrix} = \begin{bmatrix} 3 + 2\mathrm{i} \\ 2 + \mathrm{i} \\ -1 \\ -3\mathrm{i} \end{bmatrix}. \qquad \square$$

#### Periodikus összetevők szűrése

Műszaki alkalmazásokban gyakran előfordul, hogy egy periodikus függvénnyel leírható jelhez magasabb frekvenciájú zaj adódik, amit utólag ki szeretnénk „szűrni". Ez egy DFT-IDFT párral könnyen elvégezhető.

A szűrés általános modellje három lépésből áll, melyet az alábbi séma szemléltet:

$$\mathbf{x} \xrightarrow{\text{DFT}} \mathbf{X} \xrightarrow{\text{szűrés}} \hat{\mathbf{X}} \xrightarrow{\text{IDFT}} \hat{\mathbf{x}}$$

A műszaki gyakorlatban „szűrésen" sokféle transzformációt értenek, mely az $\mathbf{X}$ vektort az $\hat{\mathbf{X}}$-ba képzi. Mi csak a legegyszerűbb esettel foglalkozunk, $\mathbf{X}$ bizonyos koordinátáinak elhagyásával (kiszűrésével).

A következőkben egy mesterkélten leegyszerűsített, fejben számolva is követhető példát mutatunk a DFT e tipikus alkalmazására.

**7.106. példa (Magas frekvenciájú összetevők szűrése).** *Adva van egy $p$ szerint periodikus függvény $t_k = kp/6$ ($k = 0, 1, \dots, 5$) helyeken fölvett függvényértékeinek $\mathbf{x} = (4, 1, -2, -2, -2, 1)$ vektora. Bontsuk fel e függvényt egy $p$ szerint periodikus trigonometrikus függvény, és $p/m$ periódusú függvények (zaj) összegére ($m > 1$ egész).*

**Megoldás.** Az $\mathbf{x}$ vektor diszkrét Fourier-transzformáltja

$$
\mathbf{X} = F_6\mathbf{x} = \mathbf{F}_{6,\omega}\mathbf{x} =
\begin{bmatrix}
1 & 1 & 1 & 1 & 1 & 1 \\
1 & \omega & \omega^2 & -1 & \omega^4 & \omega^5 \\
1 & \omega^2 & \omega^4 & 1 & \omega^2 & \omega^4 \\
1 & -1 & 1 & -1 & 1 & -1 \\
1 & \omega^4 & \omega^2 & 1 & \omega^4 & \omega^2 \\
1 & \omega^5 & \omega^4 & -1 & \omega^2 & \omega
\end{bmatrix}
\begin{bmatrix}
4 \\ 1 \\ -2 \\ -2 \\ -2 \\ 1
\end{bmatrix}
=
\begin{bmatrix}
0 \\ 9 \\ 3 \\ 0 \\ 3 \\ 9
\end{bmatrix}
$$

ahol kihasználtuk, hogy $\omega^6 = 1$, $\omega + \omega^5 = 1$, $\omega^2 + \omega^4 = -1$. Például

$$
X_2 = [\mathbf{F}_{6,\omega}]_{2*}\,\mathbf{x} = 4 + \omega^2 - 2\omega^4 - 2 - 2\omega^2 + \omega^4 = 2 - \omega^2 - \omega^4 = 3.
$$

Mivel $\mathbf{x}$ valós, ezért a 7.104. tétel _b)_ pontja szerint $X_{N-k} = \overline{X}_k$, amit azonnal ellenőrizhetünk is. Az $\mathbf{x}$ vektor „mögött" lévő $p$ szerint periodikus függvény e modellben

$$
x(t) = \frac{1}{6}\sum_{n=0}^{5} X_n \mathrm{e}^{ni\frac{2\pi}{p}t} = \frac{1}{6}\left(9\mathrm{e}^{i\frac{2\pi}{p}t} + 3\mathrm{e}^{2i\frac{2\pi}{p}t} + 3\mathrm{e}^{4i\frac{2\pi}{p}t} + 9\mathrm{e}^{5i\frac{2\pi}{p}t}\right)
$$

A $p$ értékének valójában semmi szerepe, mert e függvényt csak a $k\frac{p}{n}$ ($k = 0, 1, \ldots, 5$) pontokban értékeljük ki, így a fenti összegben csak a

$$
\mathrm{e}^{i\frac{2\pi}{p}\frac{pn}{6}} = (\mathrm{e}^{i\frac{2\pi}{6}})^n = \varepsilon^n
$$

értékek szerepelnek. Ezekre használható a

$$
\begin{aligned}
\varepsilon^n + \varepsilon^{6-n} &= (\mathrm{e}^{i\frac{2\pi}{6}})^n + (\mathrm{e}^{-i\frac{2\pi}{6}})^n = (\mathrm{e}^{i\frac{2\pi n}{6}}) + (\mathrm{e}^{-i\frac{2\pi n}{6}}) \\
&= 2\cos n\frac{\pi}{3} = 2\cos\frac{2\pi}{p}\frac{pn}{6}
\end{aligned}
$$

összefüggés, így

$$
x(t) = \frac{1}{6}\left(18\cos\frac{2\pi}{p}t + 6\cos 2\frac{2\pi}{p}t\right) = 3\cos\frac{2\pi}{p}t + \cos 2\frac{2\pi}{p}t.
$$

A függvény tehát $3\cos\frac{2\pi}{p}t$, a „zaj" $\cos 2\frac{2\pi}{p}t$. $\square$

### Gyors Fourier-transzformáció

A diszkrét Fourier-transzformáció gyors kiszámítására konstruált algoritmusoknak döntő szerepük van a mai kultúránk alapját jelentő digitális technika fejlődésében.

A diszkrét Fourier-transzformált kiszámításához, azaz az $n$-edrendű Fourier-mátrixszal való szorzás kiszámításához $n^2$ szorzás elvégzésére van szükség. Bármely olyan algoritmust, mely e transzformáció eredményét $O(n\log n)$, azaz konstansszor $n\log n$ lépésben elvégzi, _gyors Fourier-transzformációnak_ nevezzük. Sok változata létezik, mi csak az elsőként publikált, legismertebbet ismertetjük.

A transzformáció gyorsaságának becsléséhez most minden aritmetikai művelet elvégzésének idejét tekintsük azonosnak. A DFT kiszámítására, azaz a Fourier-mátrixszal való szorzáshoz minden sorban $N$ szorzás, $N - 1$ összeadás kell, és $N$ sor van, így a szükséges műveletek száma $N(2N - 1)$.

Az egyszerűség kedvéért legyen a továbbiakban $N$ kettőhatvány, és csoportosítsuk az $X_k$-t megadó összeget az indexek paritása szerint, azaz külön adjuk össze a páros és külön a páratlan indexűeket. Vegyük észre, hogy ez az összeg két fele akkora méretű Fourier-transzformációból megkapható:

$$
\begin{aligned}
X_k &= \sum_{n=0}^{N-1} x_n \mathrm{e}^{\frac{-2\pi i}{N}kn} = \sum_{n=0}^{N-1} x_n \omega_N^{kn} \\
&= \sum_{n=0}^{N/2-1} x_{2n}\mathrm{e}^{\frac{-2\pi i}{N}2nk} + \sum_{n=0}^{N/2-1} x_{2n+1}\mathrm{e}^{\frac{-2\pi i}{N}(2n+1)k} \\
&= \sum_{n=0}^{N/2-1} x_{2n}\mathrm{e}^{\frac{-2\pi i}{N/2}nk} + \mathrm{e}^{\frac{-2\pi i}{N}k}\sum_{n=0}^{N/2-1} x_{2n+1}\mathrm{e}^{\frac{-2\pi i}{N/2}nk} \\
&= \sum_{n=0}^{N/2-1} x_{2n}\omega_{N/2}^{nk} + \omega_N^k\sum_{n=0}^{N/2-1} x_{2n+1}\omega_{N/2}^{nk} \\
&= E_k + \omega_N^k O_k.
\end{aligned}
$$

Hogy különbséget tegyünk az $N$ és $N/2$ dimenziós vektorok transzformációi közt, az $N$-edik és $N/2$-edik egységgyököt jelölje

$$
\omega_N = \mathrm{e}^{\frac{-2\pi i}{N}}, \quad \text{és } \omega_{N/2} = \mathrm{e}^{\frac{-2\pi i}{N/2}}.
$$

És ezen a ponton azzal tudjuk csökkenteni a számításokat, hogy mivel az $E_k$ és $O_k$ összegek $N/2$ szerint periodikusak, így $k \geq N/2$ esetén $E_k$ és $O_k$ értékét már nem kell újra számolni, ugyanis

$$
E_{k+N/2} = E_k, \quad O_{k+N/2} = O_k,
$$

és az $\omega_N^k$ együttható is újrahasznosítható:

$$
\omega_N^{k+N/2} = \mathrm{e}^{\frac{-2\pi i}{N}(k+N/2)} = \mathrm{e}^{\frac{-2\pi i}{N}(k)}\mathrm{e}^{\frac{-2\pi i}{N}\frac{N}{2}} = -\mathrm{e}^{\frac{-2\pi i}{N}(k)} = -\omega_N^k.
$$

Ezeket összevetve tehát $k < N/2$ esetén

$$
\begin{aligned}
X_k &= E_k + \omega_N^k O_k, \\
X_{k+N/2} &= E_k - \omega_N^k O_k.
\end{aligned}
$$

Így, ha $E_k$ és $O_k$ már ki van számolva, $X_k$ és $X_{k+N/2}$ kiszámításához csak egy szorzásra, egy összeadásra és egy kivonásra van szükség, azaz az $X_k$ ($0 \leq k < N$) együtthatók $3N/2$ művelettel megkaphatók. Ezután rekurzív módon $E_k$ és $O_k$ kiszámítását is ugyanígy végezzük: mivel fele akkora a vektor, de kettő van belőle, itt is $3N/2$ műveletre

lesz szükség. Mivel $N$ kettőhatvány, például $N = 2^s$, így $s = \log_2 N$-szer kell megismételnünk ezt a lépést, vagyis a teljes transzformáció műveletigénye $\frac{3}{2}N\log_2 N$. Konkrétan néhány $N$ esetén:

| $N$ | $2^4 = 16$ | $2^8 = 256$ | $2^{10} = 1024$ | $2^{16} = 65536$ |
|---|---|---|---|---|
| DFT | 496 | 130816 | 2096128 | 8589869056 |
| FFT | 96 | 3072 | 15360 | 1572864 |
| hányados | $> 5$ | $> 42$ | $> 136$ | $> 5461$ |

A műveletigény fenti számításában nem vettük figyelembe $\omega_N^k$ kiszámításának költségeit. Ha e hatvány kiszámítása $C$ aritmetikai művelettel egyenértékű, akkor is csak $\frac{C+3}{2}N\log_2 N$ műveletre van szükségünk. Ezzel tehát bizonyítottuk a következő tételt:

**7.107. tétel (Gyors Fourier-transzformáció).** *Létezik olyan algoritmus, mely egy $N$-dimenziós vektor diszkrét Fourier-transzformáltját legföljebb $O(N\log_2 N)$ aritmetikai művelet elvégzésével kiszámolja.*

> *A tételbeli eljárást Gauss már ismerte és 1805-ben használta a másodiknak fölfedezett Pallas és a harmadiknak fölfedezett Juno nevű kisbolygó pályájának kiszámításához. A felező eljárást Danielson és Lánczos 1942-ben újra fölfedezték, de ők sem vizsgálták az algoritmus sebességét. Az FFT ismertté és népszerűvé Cooley és Tukey 1965-ben megjelent cikke után vált.*

A fenti bizonyításban szereplő algoritmus pseudokódja:

```
function FFT(x)
    N ← dim(x)
    X legyen N-dimenziós vektor
    if N = 1 then
        X₀ ← x₀
    else
        y ← x páros indexű elemei
        z ← x páratlan indexű elemei
        Y ← FFT(y)
        Z ← FFT(z)
        for k ← 0 to N/2 − 1 do
            E ← Yₖ
            O ← e^(−2πi/N · k) Zₖ
            Xₖ ← E + O
            X_{k+N/2} ← E − O
    return X
```

> *7.21. ábra. FFT algoritmus. A rekurzív függvény bemenete egy tetszőleges komplex $\mathbf{x}$ vektor, kimenete a diszkrét Fourier-transzformált $\mathbf{X}$ vektor.*

Mivel e transzformáció is lineáris leképezésekből áll, a gyors Fourier-transzformáció mátrixszorzat-alakba is fölírható:

$$
\mathbf{F}_N = \boldsymbol{\Delta}_N
\begin{bmatrix}
\mathbf{F}_{N/2} & \mathbf{O} \\
\mathbf{O} & \mathbf{F}_{N/2}
\end{bmatrix}
\boldsymbol{\Pi}_N,
$$

ahol $\boldsymbol{\Pi}_N$ az a permutáló mátrix, mely előre veszi a páros indexű elemeket, $\boldsymbol{\Delta}_N$ pedig a „fél" transzformáltakat összeadó, és a páratlan indexűeket egy $\omega$-hatvánnyal beszorzó mátrix. Ezek kisebb indexű példányai:

$$
\boldsymbol{\Pi}_4 =
\begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
\quad
\boldsymbol{\Pi}_8 =
\begin{bmatrix}
1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \\
0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 1
\end{bmatrix}
$$

$$
\boldsymbol{\Delta}_4 =
\begin{bmatrix}
1 & 0 & 1 & 0 \\
0 & 1 & 0 & -i \\
1 & 0 & -1 & 0 \\
0 & 1 & 0 & i
\end{bmatrix}
=
\begin{bmatrix}
\mathbf{I}_2 & \mathbf{D}_2 \\
\mathbf{I}_2 & -\mathbf{D}_2
\end{bmatrix}
\quad
\boldsymbol{\Delta}_8 =
\begin{bmatrix}
\mathbf{I}_4 & \mathbf{D}_4 \\
\mathbf{I}_4 & -\mathbf{D}_4
\end{bmatrix}
$$

A $\boldsymbol{\Delta}$ mátrixokban szereplő diagonális mátrixok az egységmátrixok, és az $\omega$ hatványait tartalmazó $\mathbf{D}$ mátrixok, ahol $\mathbf{D}_k = \operatorname{diag}(1, \omega, \omega^2, \ldots, \omega^{k-1})$. Tehát például

$$
\begin{aligned}
\mathbf{F}_8 &= \boldsymbol{\Delta}_8
\begin{bmatrix}
\mathbf{F}_4 & \mathbf{O} \\
\mathbf{O} & \mathbf{F}_4
\end{bmatrix}
\boldsymbol{\Pi}_8 \\
&= \boldsymbol{\Delta}_8
\begin{bmatrix}
\boldsymbol{\Delta}_4 & \mathbf{O} \\
\mathbf{O} & \boldsymbol{\Delta}_4
\end{bmatrix}
\begin{bmatrix}
\mathbf{F}_2 & \mathbf{O} & \mathbf{O} & \mathbf{O} \\
\mathbf{O} & \mathbf{F}_2 & \mathbf{O} & \mathbf{O} \\
\mathbf{O} & \mathbf{O} & \mathbf{F}_2 & \mathbf{O} \\
\mathbf{O} & \mathbf{O} & \mathbf{O} & \mathbf{F}_2
\end{bmatrix}
\begin{bmatrix}
\boldsymbol{\Pi}_4 & \mathbf{O} \\
\mathbf{O} & \boldsymbol{\Pi}_4
\end{bmatrix}
\boldsymbol{\Pi}_8.
\end{aligned}
$$

Látjuk, hogy a rekurzió következtében a transzformálandó vektort először a $\boldsymbol{\Pi}$-mátrixokból álló blokkmátrixokkal kell szorozni. E mátrixok szorzata is permutáló mátrix. Hatását e konkrét esetben kiszámoljuk a fent megadott $\boldsymbol{\Pi}_4$ és $\boldsymbol{\Pi}_8$ mátrixok behelyettesítésével:

$$
\begin{bmatrix}
\boldsymbol{\Pi}_4 & \mathbf{O} \\
\mathbf{O} & \boldsymbol{\Pi}_4
\end{bmatrix}
\boldsymbol{\Pi}_8\mathbf{x} =
\begin{bmatrix}
1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \\
0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
x_0 \\ x_1 \\ x_2 \\ x_3 \\ x_4 \\ x_5 \\ x_6 \\ x_7
\end{bmatrix}
=
\begin{bmatrix}
x_0 \\ x_4 \\ x_2 \\ x_6 \\ x_1 \\ x_5 \\ x_3 \\ x_7
\end{bmatrix}.
$$

Ez első pillanatban áttekinthetetlen permutációnak tűnik, de valójában egy igen egyszerűen leírható transzformációt kapunk: a transzformálandó $\mathbf{x}$ vektor $k$-adik koordinátáját ($k = 0, 1, \ldots, N - 1$) a $j$-edik helyébe viszi, ha $j$ bináris alakja éppen fordítottja $k$ bináris alakjának. Például ha $N = 16$, és $k = 6$, akkor $x_{12}$ a harmadik koordináta helyére kerül a permutáció során, mivel $12 = 1100_2$, és ennek fordítottja $0011_2 = 3$. Ennek igazolása rendkívül egyszerű, ha észrevesszük, hogy az $i$-edik $\boldsymbol{\Delta}$-mátrixszal való szorzás épp jobbról az első $i$ koordináta szerinti lexikografikus sorrendbe rendezi az elemeket. Ennek szemléltetésére elég az a 7.22. ábrán bemutatott $N = 16$ eset vizsgálata.

> *7.22. ábra. Az $\mathbf{X}$ vektor koordinátáinak indexeit binárisan fölírva, jól követhető azok mozgása a permutációk során.*

### Vektorok konvolúciója

Vektorok konvolúciója igen sok helyen felmerül: a polinomok szorzásától kezdve az olyan transzformációkig, ahol egy koordinátát szomszédainak egy rögzített lineáris kombinációjával kell helyettesíteni. A gyors Fourier-transzformációval hatékonyan számolható.

## Megoldások

**7.1.** Legyen

$$
\mathbf{A} =
\begin{bmatrix}
1 & 0 \\
0 & 0
\end{bmatrix}, \quad \mathbf{B} = 0100, \quad \mathbf{C} = 0010.
$$

Ekkor $\operatorname{trace}(\mathbf{ABC}) = \operatorname{trace}\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix} = 1$, míg $\operatorname{trace}(\mathbf{BAC}) = \operatorname{trace}\begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix} = 0$.

**7.2.** A $(2, 0, 1)$ vektor egyenesét az $x$-tengelybe forgató mátrix:

$$
\mathbf{R} = \frac{1}{\sqrt{5}}
\begin{bmatrix}
2 & 0 & 1 \\
0 & \sqrt{5} & 0 \\
-1 & 0 & 2
\end{bmatrix}
$$

Az $x$-tengely körüli forgatás mátrixa:

$$
\mathbf{C} =
\begin{bmatrix}
1 & 0 & 0 \\
0 & \frac{2}{\sqrt{5}} & -\frac{1}{3}\sqrt{5} \\
0 & \frac{1}{3}\sqrt{5} & \frac{2}{3}
\end{bmatrix}
$$

Így a megadott egyenes körüli forgatás mátrixa:

$$
\mathbf{C}^{-1}\mathbf{R}\mathbf{C} =
\begin{bmatrix}
2 & 0 & -1 \\
0 & \sqrt{5} & 0 \\
1 & 0 & 2
\end{bmatrix}
\quad
\mathbf{R}\mathbf{C} =
\begin{bmatrix}
\frac{14}{15} & -\frac{1}{3} & \frac{2}{15} \\
\frac{1}{3} & \frac{2}{3} & -\frac{2}{3} \\
\frac{2}{15} & \frac{2}{3} & \frac{11}{15}
\end{bmatrix}
$$

**7.5.** Az új egyenletrendszer sorterét az eredeti egyenletrendszer megoldásvektorai feszítik ki, ezért ennek nullterére megegyezik az eredeti sorterével, melyet a sorvektorok feszítenek ki. (Természetesen elég a sorvektorok közül a függetleneket kiválasztani. Esetünkben tehát a megadott egyenletrendszer nullterét kifeszítik az $(1, 2, 1, 2, 1)$ és az $(1, 3, 3, 1)$ vektorok.)

**7.7.** Igen, $A : \mathbb{R}^3 \to \mathbb{R}$, mátrixa $\mathbf{A} = \begin{bmatrix} a_1 & a_2 & a_3 \end{bmatrix}$.

**7.8.** Nem, az $A : \mathbf{x} \mapsto \mathbf{a} + \mathbf{x}$ leképezés a $\mathbf{0}$ vektort nem a $\mathbf{0}$-ba képzi, így nem lehet mátrixleképezés (kivéve ha $\mathbf{a} = \mathbf{0}$, de ekkor a leképezés az identikus transzformáció)!

**7.10.** Igen, a mátrix

$$
\mathbf{A} = \mathbf{a}(\mathbf{a} \cdot \mathbf{x}) = \mathbf{a}(\mathbf{a}^\mathsf{T}\mathbf{x}) = (\mathbf{a}\mathbf{a}^\mathsf{T})\mathbf{x} =
\begin{bmatrix}
a_1^2 & a_1 a_2 & a_1 a_3 \\
a_2 a_1 & a_2^2 & a_2 a_3 \\
a_1 a_3 & a_2 a_3 & a_3^2
\end{bmatrix}
$$

**7.11.** A bizonyítások a mátrixműveletek tulajdonságaiból következnek. Ott, ahol valamelyik mátrixazonosságot használjuk, az ekvivalenciát kimondó nyíl fölé M-betűt írunk, ahol pedig a függvények közti művelet tulajdonságokat használjuk, ott egy F-betűt:

_a)_ $(A + B)(\mathbf{x}) = C(\mathbf{x}) \overset{F}{\Longleftrightarrow} A(\mathbf{x}) + B(\mathbf{x}) = C(\mathbf{x}) \Longleftrightarrow \mathbf{Ax} + \mathbf{Bx} = \mathbf{Cx} \overset{M}{\Longleftrightarrow} (\mathbf{A} + \mathbf{B})\mathbf{x} = \mathbf{Cx}$.

_b)_ $(cA)(\mathbf{x}) = C(\mathbf{x}) \overset{F}{\Longleftrightarrow} cA(\mathbf{x}) = C(\mathbf{x}) \Longleftrightarrow c\mathbf{Ax} = \mathbf{Cx} \overset{M}{\Longleftrightarrow} (c\mathbf{A})\mathbf{x} = \mathbf{Cx}$.

_c)_ $(X \circ Y)(\mathbf{x}) = Z(\mathbf{x}) \overset{F}{\Longleftrightarrow} X(Y(\mathbf{x})) = Z(\mathbf{x}) \Longleftrightarrow \mathbf{X}(\mathbf{Yx}) = \mathbf{Zx} \overset{M}{\Longleftrightarrow} (\mathbf{XY})\mathbf{x} = \mathbf{Zx}$.

**7.12.** A 7.2. tételből, illetve a 7.11. feladatból tudjuk, hogy $(A \circ B)(\mathbf{x}) = \mathbf{ABx}$ és $(B \circ A)(\mathbf{x}) = \mathbf{BAx}$. Így ha $\mathbf{AB} = \mathbf{BA} = \mathbf{I}$, azaz $\mathbf{B}$ inverze $\mathbf{B}$, akkor $(A \circ B)(\mathbf{x}) = \mathbf{ABx} = \mathbf{Ix} = \mathbf{x}$, és hasonlóan $(B \circ A)(\mathbf{x}) = \mathbf{BAx} = \mathbf{Ix} = \mathbf{x}$, azaz $A \circ B$ és $B \circ A$ az identikus leképezés. Hasonlóképp, ha $A \circ B$ és $B \circ A$ az identikus leképezés, akkor $(\mathbf{AB})\mathbf{x} = (A \circ B)(\mathbf{x}) = \mathbf{x}$ és $(\mathbf{BA})\mathbf{x} = (B \circ A)(\mathbf{x}) = \mathbf{x}$, így $\mathbf{AB} = \mathbf{BA} = \mathbf{I}$ (ld. ?? feladat), vagyis $\mathbf{A}$ és $\mathbf{B}$ egymás inverzei.

**7.17.** Tegyük fel, hogy $\mathbf{B} = \mathbf{C}^{-1}\mathbf{AC}$. Legyen $\mathbf{A} = [a_{ij}]$, $\mathbf{C} = [c_{ij}]$, $\mathbf{C}^{-1} = [d_{ij}]$. Ekkor

$$
\begin{aligned}
\operatorname{trace}\mathbf{B} &= \sum_{i=1}^{n}\left(\sum_{j=1}^{n}\sum_{k=1}^{n} d_{ij}a_{jk}c_{ki}\right) \\
&= \sum_{j=1}^{n}\sum_{k=1}^{n} a_{jk}\left(\sum_{i=1}^{n} c_{ki}d_{ij}\right) \\
&= \sum_{j=1}^{n}\sum_{k=1}^{n} a_{jk}\delta_{jk} \\
&= \operatorname{trace}\mathbf{A}
\end{aligned}
$$

**7.18.** _a)_ A bizonyítandó képlet:

$$
\mathbf{P} =
\begin{bmatrix}
\cos^2\alpha & \sin\alpha\cos\alpha \\
\sin\alpha\cos\alpha & \sin^2\alpha
\end{bmatrix}.
$$

Ez leolvasható a következő ábráról:

*7. ábra. Egységkörön az $\alpha$ szögű irányvektor; a koordinátatengelyekre vetített szakaszok hossza $\cos^2\alpha$ és $\sin\alpha\cos\alpha$, illetve $\sin\alpha\cos\alpha$ és $\sin^2\alpha$. A pontok: $(\cos^2\alpha, \sin\alpha\cos\alpha)$ és $(\sin\alpha\cos\alpha, \sin^2\alpha)$.*

Az itt látható két derékszögű háromszög befogóinak hossza $\cos\alpha$, illetve $\sin\alpha$, és így például a $\cos\alpha$ hosszú szakasz két tengelyvetülete $\cos^2\alpha$ és $\cos\alpha\sin\alpha$ hosszú, tehát $\mathbf{i}$ képe $(\cos^2\alpha, \cos\alpha\sin\alpha)$. Hasonlóan $\mathbf{j}$ képe $(\sin\alpha\cos\alpha, \sin^2\alpha)$. A két oszlopvektorból álló mátrix pedig valóban megegyezik a fent megadottal.

_b)_ Az $\mathbf{i}$ és $\mathbf{j}$ vetülete az egyenesre

$$
\operatorname{proj}_{\mathbf{b}}\mathbf{i} = \frac{\mathbf{i}\cdot\mathbf{b}}{\mathbf{b}\cdot\mathbf{b}}\mathbf{b} = \frac{1}{b_1^2 + b_2^2}
\begin{bmatrix} b_1^2 \\ b_1 b_2 \end{bmatrix}
\quad \text{és}
$$

$$
\operatorname{proj}_{\mathbf{b}}\mathbf{j} = \frac{\mathbf{j}\cdot\mathbf{b}}{\mathbf{b}\cdot\mathbf{b}}\mathbf{b} = \frac{1}{b_1^2 + b_2^2}
\begin{bmatrix} b_1 b_2 \\ b_2^2 \end{bmatrix}.
$$

E két vektor egymás mellé írásával kapott mátrix lesz a leképezés mátrixa:

$$
\frac{1}{b_1^2 + b_2^2}
\begin{bmatrix}
b_1^2 & b_1 b_2 \\
b_1 b_2 & b_2^2
\end{bmatrix}.
$$

Ez megegyezik a (7.9) képlettel, azaz

$$
\frac{1}{b_1^2 + b_2^2}
\begin{bmatrix}
b_1^2 & b_1 b_2 \\
b_1 b_2 & b_2^2
\end{bmatrix}
=
\begin{bmatrix}
\cos^2\alpha & \sin\alpha\cos\alpha \\
\sin\alpha\cos\alpha & \sin^2\alpha
\end{bmatrix},
$$

ugyanis ha a $\mathbf{b}$ vektor $x$-tengellyel bezárt szöge $\alpha$, akkor $\cos\alpha = b_1/\sqrt{b_1^2 + b_2^2}$, és $\sin\alpha = b_2/\sqrt{b_1^2 + b_2^2}$.

**7.19.** Ha $P$ merőleges vetítés, akkor bármely $\mathbf{v}$ vektorra $\mathbf{v} - P\mathbf{v} \perp \mathbf{v}$, tehát a Pitagorasz-tétel szerint $|\mathbf{v}|^2 = |P\mathbf{v}|^2 + |\mathbf{v} - P\mathbf{v}|^2 \geq |P\mathbf{v}|^2$.

Fordítva, tegyük fel, hogy bár minden $\mathbf{v}$-re $|P\mathbf{v}| \leq |\mathbf{v}|$, de indirekt módon van olyan $\mathbf{v} \in \operatorname{Im} P$, hogy $\mathbf{v}$ nem merőleges $\operatorname{Ker} P$-re, azaz $P$ nem merőleges vetítés. Legyen $\mathbf{v}$-nek $\operatorname{Ker} P$-re való merőleges vetülete $\mathbf{w}$. Ekkor $P(\mathbf{v} - \mathbf{w}) = P\mathbf{v} = \mathbf{v}$, és $|\mathbf{v} - \mathbf{w}| < |\mathbf{v}|$, így $|\mathbf{v} - \mathbf{w}| < |P(\mathbf{v} - \mathbf{w})|$, ami ellentmond feltevésünknek.

**7.20.**

_a)_ A (7.12) képlet szerint $\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}^+ = \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}$

_b)_ A (7.12) képlet szerint $\begin{bmatrix} 1 \\ 0 \end{bmatrix}^+ = \begin{bmatrix} 1 & 0 \end{bmatrix}$.

_c)_ A (7.13) képletbe helyettesítve

$$
\begin{bmatrix} 0 \\ 1 \end{bmatrix}^+ = \left(\begin{bmatrix} 0 & 1 \end{bmatrix}\begin{bmatrix} 0 \\ 1 \end{bmatrix}\right)^{-1}\begin{bmatrix} 0 \\ 1 \end{bmatrix} = 1^{-1}\begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}.
$$

_d)_ $\begin{bmatrix} 1 & 1 \\ 0 & 0 \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}\begin{bmatrix} 1 & 1 \end{bmatrix}$, így a (7.16) képlet szerint

$$
\begin{bmatrix} 1 & 1 \\ 0 & 0 \end{bmatrix}^+ = \begin{bmatrix} 1 \\ 1 \end{bmatrix}\left(\begin{bmatrix} 1 & 0 \end{bmatrix}\begin{bmatrix} 1 & 1 \\ 0 & 0 \end{bmatrix}\begin{bmatrix} 1 \\ 1 \end{bmatrix}\right)^{-1}\begin{bmatrix} 1 & 0 \end{bmatrix} = \begin{bmatrix} \frac{1}{2} & 0 \\ \frac{1}{2} & 0 \end{bmatrix}
$$

_e)_ $\begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix} = \begin{bmatrix} 1 \\ 1 \end{bmatrix}\begin{bmatrix} 1 & 1 \end{bmatrix}$, így a (7.16) képlet szerint

$$
\begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix}^+ = \begin{bmatrix} 1 \\ 1 \end{bmatrix}\left(\begin{bmatrix} 1 & 1 \end{bmatrix}\begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix}\begin{bmatrix} 1 \\ 1 \end{bmatrix}\right)^{-1}\begin{bmatrix} 1 & 1 \end{bmatrix} = \begin{bmatrix} \frac{1}{4} & \frac{1}{4} \\ \frac{1}{4} & \frac{1}{4} \end{bmatrix}
$$

_f)_ $\begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}\begin{bmatrix} 0 & 1 \end{bmatrix}$, így az _b)_ és _c)_ eredményeit és a transzponált pszeudoinverzére vonatkozó (7.17) képletet használva

$$
\begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}^+ = \left(\begin{bmatrix} 1 \\ 0 \end{bmatrix}\begin{bmatrix} 0 & 1 \end{bmatrix}\right)^+ = \begin{bmatrix} 0 & 1 \end{bmatrix}^+\begin{bmatrix} 1 \\ 0 \end{bmatrix}^+ = \begin{bmatrix} 0 \\ 1 \end{bmatrix}\begin{bmatrix} 1 & 0 \end{bmatrix} = \begin{bmatrix} 0 & 0 \\ 1 & 0 \end{bmatrix}
$$

**7.21.**

_a)_ $\begin{bmatrix} 1 & 1 \\ 2 & 2 \end{bmatrix}^+ = \begin{bmatrix} 1/10 & 2/10 \\ 1/10 & 2/10 \end{bmatrix}$

_b)_ Az előző transzponáltja.

_c)_ $\begin{bmatrix} 0 & 2 \\ 0 & 2 \end{bmatrix}^+ = \begin{bmatrix} 0 & 0 \\ 1/4 & 1/4 \end{bmatrix}$

_d)_ $\begin{bmatrix} 1 & 1 \\ 2 & 2 \\ 0 & 0 \end{bmatrix}^+ = \begin{bmatrix} 1/10 & 2/10 & 0 \\ 1/10 & 2/10 & 0 \end{bmatrix}$

_e)_ $\begin{bmatrix} 1 & 1 & 1 & 1 \end{bmatrix}^+ = \begin{bmatrix} 1/4 \\ 1/4 \\ 1/4 \\ 1/4 \end{bmatrix}$

_f)_ $\begin{bmatrix} 1 \\ 2 \\ 3 \\ 4 \end{bmatrix}^+ = 1/30\begin{bmatrix} 1 & 2 & 3 & 4 \end{bmatrix}$

**7.22.**

_a)_ $\begin{bmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \end{bmatrix}^+ = \begin{bmatrix} 2/3 & -1/3 \\ 1/3 & 1/3 \\ -1/3 & 2/3 \end{bmatrix}$

_b)_ $\begin{bmatrix} 1 & 0 \\ 2 & 2 \\ 0 & 1 \end{bmatrix}^+ = \begin{bmatrix} 5/9 & 2/9 & -4/9 \\ -4/9 & 2/9 & 5/9 \end{bmatrix}$

_c)_ Az előző eredmény transzponáltja.

_d)_ E mátrix a _b)_- és _a)_-beli mátrixok szorzata, melyek teljes rangúak, így pszeudoinverze az _a)_- és _b)_-beliek pszeudoinverzének szorzata:

$$
\frac{1}{27}
\begin{bmatrix}
14 & 2 & -13 \\
1 & 4 & 1 \\
-13 & 2 & 14
\end{bmatrix}.
$$

**7.23.** Kiszámítva a megfelelő pszeudoinverzeket:

$$
\left(\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}\begin{bmatrix} 0 & 1 \\ 0 & 1 \end{bmatrix}\right)^+ = \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}^+ = \begin{bmatrix} 0 & 0 \\ 1 & 0 \end{bmatrix}
$$

$$
\begin{bmatrix} 0 & 1 \\ 0 & 1 \end{bmatrix}^+\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}^+ = \begin{bmatrix} 0 & 0 \\ \frac{1}{2} & \frac{1}{2} \end{bmatrix}\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix} = \begin{bmatrix} 0 & 0 \\ \frac{1}{2} & 0 \end{bmatrix},
$$

és ezek nem egyenlők.

**7.24.** Mivel az $\mathbf{A}$ mátrix egy olyan $\mathbf{XY}$ felbontásával van megadva, melyben $\mathbf{X}$ teljes oszlop-, $\mathbf{Y}$ teljes sorrangú, ezért használható a ?? feladat eredménye. Így

$$
\mathbf{A}^+ = \mathbf{Y}^\mathsf{T}(\mathbf{YY}^\mathsf{T})^{-1}(\mathbf{X}^\mathsf{T}\mathbf{X})^{-1}\mathbf{X}^\mathsf{T} = \frac{1}{3}
\begin{bmatrix}
-1 & 2 & 0 & 1 \\
0 & 0 & 0 & 0 \\
2 & -1 & 0 & 1
\end{bmatrix}
$$

**7.25.** Az előző feladathoz hasonlóan a ?? feladat szerint

$$
\mathbf{A}^+ = \mathbf{Y}^\mathsf{T}(\mathbf{YY}^\mathsf{T})^{-1}(\mathbf{X}^\mathsf{T}\mathbf{X})^{-1}\mathbf{X}^\mathsf{T} = \frac{1}{15}
\begin{bmatrix}
-4 & 5 & 1 \\
-4 & 5 & 1 \\
3 & 0 & 3 \\
7 & -5 & 2
\end{bmatrix}
$$

**7.26.** A ?? tétel feladat szerint

$$
\mathbf{A}^+ = \mathbf{Y}^\mathsf{T}(\mathbf{YY}^\mathsf{T})^{-1}(\mathbf{X}^\mathsf{T}\mathbf{X})^{-1}\mathbf{X}^\mathsf{T} = \frac{1}{132}
\begin{bmatrix}
-32 & 34 & 2 & 4 \\
1 & 1 & 2 & 4 \\
34 & -32 & 2 & 4
\end{bmatrix}
$$

**7.28.** _1. megoldás:_ Ha $\mathbf{A}$ merőleges vetítés mátrixa, akkor $\mathbf{A}^\mathsf{T} = \mathbf{A}$ okán $\mathcal{S}(\mathbf{A}) = \mathcal{O}(\mathbf{A})$, és a sortér minden $\mathbf{x}$ vektorára $\mathbf{Ax} = \mathbf{x}$, így $\mathbf{A}^+\mathbf{x} = \mathbf{x}$ is igaz lesz. Másrészt $\mathbf{A}^\mathsf{T} = \mathbf{A}$ miatt $\mathcal{N}(\mathbf{A}^\mathsf{T}) = \mathcal{N}(\mathbf{A})$, tehát minden $\mathbf{z} \in \mathcal{N}(\mathbf{A}^\mathsf{T})$ esetén $\mathbf{Az} = \mathbf{0}$, és $\mathbf{A}^+\mathbf{z} = \mathbf{0}$ is fönnáll, tehát az $\mathbf{A}$ és $\mathbf{A}^+$ hatása az $\mathcal{O}(\mathbf{A})$ és annak merőleges kiegészítő alterén is megegyezik, így a két mátrix azonos.

_2. megoldás:_ A Penrose-tétel alapján azt kell ellenőriznünk, hogy $\mathbf{A}$ a négy feltétel mindegyikét teljesíti, mint pszeudoinverz. Ez igaz, hisz $\mathbf{A}^\mathsf{T} = \mathbf{A} = \mathbf{A}^2$ miatt $\mathbf{A}^3 = \mathbf{A}$, és $(\mathbf{A}^2)^\mathsf{T} = \mathbf{A}^2$.

Az állítás megfordítása nem igaz. Például az $\mathbf{A} = -\mathbf{I}$ mátrixra $\mathbf{A}^+ = \mathbf{A}$, de a $-\mathbf{I}$ mátrixra $(-\mathbf{I})^2 \neq -\mathbf{I}$, tehát $-\mathbf{I}$ nem vetítés mátrixa.

**7.29.** Az első állítás azonnal következik a (7.13) egyenlőségből, ugyanis ha $\mathbf{A}$ teljes oszloprangú, akkor

$$
\begin{aligned}
\mathbf{A}^+\mathbf{A} &= \left((\mathbf{A}^\mathsf{T}\mathbf{A})^{-1}\mathbf{A}^\mathsf{T}\right)\mathbf{A} \\
&= (\mathbf{A}^\mathsf{T}\mathbf{A})^{-1}\mathbf{A}^\mathsf{T}\mathbf{A} = \mathbf{I}
\end{aligned}
$$

A másik állítás hasonlóan adódik a (7.14) képletből.

**7.30.** Ha $r(\mathbf{A}) = 1$, akkor létezik olyan $\mathbf{a}$ és $\mathbf{b}$ vektor, hogy $\mathbf{A} = \mathbf{a}\mathbf{b}^\mathsf{T}$. Ekkor a pszeudoinverz kiszámításáról szóló ?? feladat (??) képlete szerint

$$
\begin{aligned}
\mathbf{A}^+ &= \mathbf{b}(\mathbf{b}^\mathsf{T}\mathbf{b})^{-1}(\mathbf{a}^\mathsf{T}\mathbf{a})^{-1}\mathbf{a}^\mathsf{T} \\
&= \frac{1}{\mathbf{a}^\mathsf{T}\mathbf{a}\mathbf{b}^\mathsf{T}\mathbf{b}}\mathbf{b}\mathbf{a}^\mathsf{T} \\
&= \frac{1}{\operatorname{trace}(\mathbf{A}^\mathsf{T}\mathbf{A})}\mathbf{A}^\mathsf{T}.
\end{aligned}
$$

Az utóbbi egyenlőség azon múlik, hogy mind $\mathbf{a}^\mathsf{T}\mathbf{a}\mathbf{b}^\mathsf{T}\mathbf{b}$, mind $\operatorname{trace}(\mathbf{A}^\mathsf{T}\mathbf{A})$ az összes $a_i^2 b_j^2$ alakú elem összege, ahol $\mathbf{a} = (a_1, \ldots, a_m)$, $\mathbf{b} = (b_1, \ldots, b_n)$. A vektorokra vonatkozó állítás ennek speciális esete.

**7.31.** Az állítás igazolásához elég csak a Penrose-tétel négy feltételét ellenőrizni.

**7.32.** A 7.31. feladat alapján az alábbi blokkosítással és 1-rangú mátrixok pszeudoinverzére vonatkozó állításból azonnal adódik a válasz:

$$
\left[\begin{array}{ccc|ccc}
1 & 1 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 0 & 1 & 1
\end{array}\right]^+
=
\left[\begin{array}{cccc}
1/3 & 0 & 0 & 0 \\
1/3 & 0 & 0 & 0 \\
1/3 & 0 & 0 & 0 \\
\hline
0 & 1/2 & 1/2 & 0 \\
0 & 0 & 0 & 1/2 \\
0 & 0 & 0 & 1/2
\end{array}\right]
$$

**7.33.** $\mathbf{v}_2 = (9, 3, -1, 5) - \frac{(9, 3, -1, 5)(1, 1, -1, -1)}{|(1, 1, -1, -1)|^2}(1, 1, -1, -1) = (7, 1, 1, 7)$, így az ortonormált bázis vektorai: $\frac{1}{2}(1, 1, -1, -1)$, $\frac{1}{10}(7, 1, 1, 7)$

**7.34.** $\mathbf{v}_2 = (8, 6, 2, 0) - \frac{(8, 6, 2, 0)(1, -1, 1, -1)}{|(1, -1, 1, -1)|^2}(1, -1, 1, -1) = (7, 7, 1, 1)$, így az ortonormált bázis vektorai: $\frac{1}{2}(1, -1, 1, -1)$, $\frac{1}{10}(7, 7, 1, 1)$

**7.35.** $(2, -1, -20) - \frac{(1, 4, 8)(2, -1, -20)}{(1, 4, 8)(1, 4, 8)}(1, 4, 8) = (4, 7, -4)$.

$$
\mathbf{Q} = \frac{1}{9}
\begin{bmatrix}
1 & 4 \\
4 & 7 \\
8 & -4
\end{bmatrix}, \text{ és } \mathbf{R} = \mathbf{Q}^T\mathbf{A} =
\begin{bmatrix}
9 & -18 \\
0 & 9
\end{bmatrix}.
$$

**7.36.** A 7.34. feladat eredményét alkalmazva

$$
\mathbf{A} = \mathbf{QR} =
\begin{bmatrix}
1/2 & 7/10 \\
-1/2 & 7/10 \\
1/2 & 1/10 \\
-1/2 & 1/10
\end{bmatrix}
\begin{bmatrix}
2 & 2 \\
0 & 10
\end{bmatrix}.
$$

**7.37.** Először a harmadik sor első elemét elimináljuk. Ekkor $a = 8$, $b = 15$, így $r = \sqrt{8^2 + 15^2} = 17$. Eszerint az első és harmadik sorok és oszlop kereszteződéseiben lévő $\begin{bmatrix} 8 & -4 \\ 15 & 1 \end{bmatrix}$ részmátrix első oszlopvektorát, azaz a $(8, 15)$ vektort beforgatjuk a $(17, 0)$ vektorba. A forgatás $\alpha$ szögére $\cos\alpha = 8/17$, $\sin\alpha = -15/17$. Ebből:

$$
\mathbf{Q}_1 =
\begin{bmatrix}
8/17 & 0 & 15/17 \\
0 & 1 & 0 \\
-15/17 & 0 & 8/17
\end{bmatrix}
\quad
\mathbf{Q}_1\mathbf{A} =
\begin{bmatrix}
17 & 12 & -1 \\
0 & 4 & 2 \\
0 & 3 & 4
\end{bmatrix}
$$

A $\mathbf{Q}_\mathbf{A}$ mátrix harmadik sor második elemének eliminálásához $a = 4$, $b = 3$, $r = \sqrt{4^2 + 3^2} = 5$, $\cos\alpha = 4/5$, $-\sin\alpha = 3/5$:

$$
\mathbf{Q}_2 =
\begin{bmatrix}
1 & 0 & 0 \\
0 & 4/5 & 3/5 \\
0 & -3/5 & 4/5
\end{bmatrix}
\quad
\mathbf{R} = \mathbf{Q}_2\mathbf{Q}_1\mathbf{A} =
\begin{bmatrix}
17 & 12 & -1 \\
0 & 5 & 4 \\
0 & 0 & 2
\end{bmatrix}
$$

Végül

$$
\mathbf{Q} = (\mathbf{Q}_2\mathbf{Q}_1)^{-1} = \mathbf{Q}_1^\mathsf{T}\mathbf{Q}_2^\mathsf{T} =
\begin{bmatrix}
8/17 & -9/17 & -12/17 \\
0 & 4/5 & -3/5 \\
15/17 & 24/85 & 32/85
\end{bmatrix}.
$$

**7.38.** Az első oszlop főátló alatti elemeinek eliminálását az $(1, 1, 1, 1) \mapsto (2, 0, 0, 0)$ hozzárendelést eredményező, az

$$
\mathbf{a} = (1, 1, 1, 1) - (2, 0, 0, 0) = (-1, 1, 1, 1)
$$

vektorra merőleges hipersíkra való tükrözéssel valósítjuk meg. E tükrözés mátrixa:

$$
\begin{aligned}
\mathbf{Q}_1 &= \mathbf{I}_4 - \frac{2}{\mathbf{a}^\mathsf{T}\mathbf{a}}\mathbf{a}\mathbf{a}^\mathsf{T} \\
&=
\begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
- \frac{1}{2}
\begin{bmatrix}
1 & -1 & -1 & -1 \\
-1 & 1 & 1 & 1 \\
-1 & 1 & 1 & 1 \\
-1 & 1 & 1 & 1
\end{bmatrix} \\
&= \frac{1}{2}
\begin{bmatrix}
1 & 1 & 1 & 1 \\
1 & 1 & -1 & -1 \\
1 & -1 & 1 & -1 \\
1 & -1 & -1 & 1
\end{bmatrix}
\end{aligned}
$$

$$
\mathbf{Q}_1\mathbf{A} =
\begin{bmatrix}
2 & 3 & 3 & 4 \\
0 & 0 & 0 & 1 \\
0 & 0 & -2 & 2 \\
0 & -5 & 3 & 1
\end{bmatrix}
$$

A $\mathbf{Q}_1\mathbf{A}$ második oszlopában a főátló alatti elemek eliminálása a $(0, 0, -5)$ vektort az $(5, 0, 0)$-ba képző tükrözéssel valósítható meg. Ez az $\mathbf{a} = (0, 0, -5) - (5, 0, 0)$ normálvektorú síkra való tükrözés, melynek mátrixa:

$$
\begin{aligned}
\mathbf{H}_2 &= \mathbf{I}_3 - \frac{2}{\mathbf{a}^\mathsf{T}\mathbf{a}}\mathbf{a}\mathbf{a}^\mathsf{T} \\
&=
\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix}
-
\begin{bmatrix}
1 & 0 & 1 \\
0 & 0 & 0 \\
1 & 0 & 1
\end{bmatrix}
=
\begin{bmatrix}
0 & 0 & -1 \\
0 & 1 & 0 \\
-1 & 0 & 0
\end{bmatrix}
\end{aligned}
$$

Innen

$$
\mathbf{Q}_2 =
\left[\begin{array}{c|ccc}
1 & 0 & 0 & 0 \\
\hline
0 & 0 & 0 & -1 \\
0 & 0 & 1 & 0 \\
0 & -1 & 0 & 0
\end{array}\right], \quad
\hat{\mathbf{R}} = \mathbf{Q}_2\mathbf{Q}_1\mathbf{A} =
\begin{bmatrix}
2 & 3 & 3 & 4 \\
0 & 5 & -3 & -1 \\
0 & 0 & -2 & 2 \\
0 & 0 & 0 & -1
\end{bmatrix}
$$

$$
\hat{\mathbf{Q}} = (\mathbf{Q}_2\mathbf{Q}_1)^{-1} = \mathbf{Q}_1^\mathsf{T}\mathbf{Q}_2^\mathsf{T} = \mathbf{Q}_1\mathbf{Q}_2 = \frac{1}{2}
\begin{bmatrix}
1 & -1 & 1 & -1 \\
1 & 1 & -1 & -1 \\
1 & 1 & 1 & 1 \\
1 & -1 & -1 & 1
\end{bmatrix}.
$$

E mátrixokra $\mathbf{A} = \hat{\mathbf{Q}}\hat{\mathbf{R}}$, amit szokás QR-felbontásnak tekinteni, de az általunk adott definíciónak nem felel meg, mert $\hat{\mathbf{R}}$ főátlójában nem csak pozitív elemek szerepelnek. Az $\hat{\mathbf{R}}$ harmadik és negyedik sorának, valamint a $\hat{\mathbf{Q}}$ harmadik és negyedik oszlopának $-1$-gyel szorzása nem változtat a szorzatukon, így a QR-felbontás mátrixai:

$$
\mathbf{Q} = \frac{1}{2}
\begin{bmatrix}
1 & -1 & -1 & 1 \\
1 & 1 & 1 & 1 \\
1 & 1 & -1 & -1 \\
1 & -1 & 1 & -1
\end{bmatrix}, \quad
\mathbf{R} =
\begin{bmatrix}
2 & 3 & 3 & 4 \\
0 & 5 & -3 & -1 \\
0 & 0 & 2 & -2 \\
0 & 0 & 0 & 1
\end{bmatrix}.
$$

**7.39.** $r_{ii}$ az $\mathbf{a}_i$ távolsága az $\mathbf{a}_1, \mathbf{a}_2, \ldots, \mathbf{a}_{i-1}$ vektorok által kifeszített altértől!

**7.40.**

$$
\mathbf{Q} =
\begin{bmatrix}
0.70711 & -0.40825 & 0.28868 & -0.50000 \\
0.70711 & 0.40825 & -0.28868 & 0.50000 \\
0.00000 & 0.81650 & 0.28868 & -0.50000 \\
0.00000 & 0.00000 & 0.86603 & 0.50000
\end{bmatrix},
$$

$$
\mathbf{R} =
\begin{bmatrix}
1.41421 & 2.12132 & 0.70711 & 0.00000 \\
0.00000 & 1.22474 & 2.04124 & 0.81650 \\
0.00000 & 0.00000 & 1.15470 & 2.02073 \\
0.00000 & 0.00000 & 0.00000 & 0.50000
\end{bmatrix}
$$

**7.48.** Mivel $|\mathbf{u}|^2 = |\hat{\mathbf{u}}|^2$, $|\mathbf{v}|^2 = |\hat{\mathbf{v}}|^2$, $|\mathbf{u} + \mathbf{v}|^2 = |\hat{\mathbf{u}} + \hat{\mathbf{v}}|^2$, továbbá $|\mathbf{u} + \mathbf{v}|^2 = |\mathbf{u}|^2 + |\mathbf{v}|^2 + \mathbf{u}\cdot\overline{\mathbf{v}} + \overline{\mathbf{u}\cdot\mathbf{v}}$, $\mathbf{z} + \overline{\mathbf{z}} = 2\Re\mathbf{z}$ és $|\hat{\mathbf{u}} + \hat{\mathbf{v}}|^2 = |\hat{\mathbf{u}}|^2 + |\hat{\mathbf{v}}|^2 + 2\hat{\mathbf{u}}\cdot\hat{\mathbf{v}}$, ezért

$$
\cos\varphi = \frac{\hat{\mathbf{u}}\cdot\hat{\mathbf{v}}}{|\hat{\mathbf{u}}||\hat{\mathbf{v}}|} = \frac{\Re(\mathbf{u}\cdot\mathbf{v})}{|\mathbf{u}||\mathbf{v}|}.
$$

**7.49.** Ezek hosszának négyzet 2, mint azt a 7.26 képlettel igazoltuk, a két vektor összege hosszának négyzete pedig

$$
(1 - i, 1 + i)\cdot(1 - i, 1 + i) = \begin{bmatrix} 1 - i \\ 1 + i \end{bmatrix}^\mathsf{H}\begin{bmatrix} 1 - i \\ 1 + i \end{bmatrix} = \begin{bmatrix} 1 + i & 1 - i \end{bmatrix}\begin{bmatrix} 1 - i \\ 1 + i \end{bmatrix}
$$

Eszerint $|(1, i)|^2 + |(-i, 1)|^2 = |(1 - i, 1 + i)|^2$, viszont a két vektor skaláris szorzata nem 0:

$$
(1, i)\cdot(-i, 1) = \begin{bmatrix} 1 & -i \end{bmatrix}\begin{bmatrix} -i \\ 1 \end{bmatrix} = -2i.
$$

**7.50.**

$$
\begin{aligned}
|\mathbf{a} + \mathbf{b}|^2 &= (\mathbf{a} + \mathbf{b})\cdot(\mathbf{a} + \mathbf{b}) \\
&= \mathbf{a}\cdot\mathbf{a} + \mathbf{a}\cdot\mathbf{b} + \mathbf{b}\cdot\mathbf{b} \\
&= \mathbf{a}\cdot\mathbf{a} + \mathbf{a}\cdot\mathbf{b} + \overline{\mathbf{a}\cdot\mathbf{b}} + \mathbf{b}\cdot\mathbf{b} \\
&\overset{?}{=} \mathbf{a}\cdot\mathbf{a} + \mathbf{b}\cdot\mathbf{b} \\
&= |\mathbf{a}|^2 + |\mathbf{b}|^2,
\end{aligned}
$$

A ?-lel megjelölt egyenlőség pontosan akkor teljesül, ha $\Re(\mathbf{a}\cdot\mathbf{b}) = 0$. Ez a (7.29) képlet szerint azt jelenti, hogy az $\mathbf{u}$ és $\mathbf{v}$ által bezárt szög $\pi/2$. Ez mindig fennáll, ha $\mathbf{u}\cdot\mathbf{v} = 0$. Tehát ha $\mathbf{u}\cdot\mathbf{v} = 0$, akkor $|\mathbf{u}|^2 + |\mathbf{v}|^2 = |\mathbf{u} + \mathbf{v}|^2$, de ennek megfordítása nem igaz!

## Alkalmazás: differenciálhatóság

> *A lineáris leképezés fogalma az alkalmazott matematika sok területén bukkan föl, aminek az az egyik oka, hogy tetszőleges vektor-vektor függvény differenciálhatósága azt jelenti, hogy létezik a függvény megváltozását „jól közelítő" lineáris leképezés.*

### Vektor-vektor függvények differenciálhatósága

Az $\mathbb{R}^n$-ből $\mathbb{R}^m$-be képző lineáris leképezések egy igen fontos alkalmazása a vektor-vektor függvények differenciálhatóságának fogalma.

A differenciálhatóság szokásos definíciója a következő: azt mondjuk, hogy az $f : \mathbb{R} \to \mathbb{R}$ függvény _differenciálható_ az $x$ helyen, ha létezik és véges a

$$
D = \lim_{h \to 0}\frac{f(x + h) - f(x)}{h}
$$

határérték. A $D$ számnak fontos jelentése van: az $f$ függvény $x$ körüli megváltozása jól közelíthető a $\mathrm{d}x \mapsto D\,\mathrm{d}x$ függvény 0 körüli megváltozásával. Szemléltetve ez azt jelenti, hogy ha az $f$ grafikonján az $(x, f(x))$ pontra helyezünk egy $\mathrm{d}x$ és $\mathrm{d}y$ változójú koordináta-rendszert, akkor a $\mathrm{d}x \mapsto \mathrm{d}y = D\,\mathrm{d}x$ grafikonja az $f$ függvény grafikonjának érintője (ld. a 7.23 ábrát). Eszerint, kicsit leegyszerűsítve a megfogalmazást, a differenciálhatóság azt jelenti, hogy a függvény „jól közelíthető" egy $\mathbb{R} \to \mathbb{R}$ lineáris leképezéssel, hisz a $\mathrm{d}x \mapsto D\,\mathrm{d}x$ leképezés ilyen.

> *7.23. ábra. A $\mathrm{d}x$ és $\mathrm{d}y$ koordinátatengelyeket és a $\mathrm{d}y = D\,\mathrm{d}x$ függvény grafikonját színezéssel kiemeltük. Az ábra egyúttal a $\Delta y \approx \mathrm{d}y$ kapcsolatot is szemlélteti.*

A „jól közelítés" szemléletesen azt jelenti, hogy az $f$ grafikonjára „zoomolva", azaz azt folyamatosan nagyítva, a grafikon kiegyenesedni látszik. Ez az az egyenes, melyet a grafikon érintőjének nevezünk, és amelynek $\mathrm{d}y = D\,\mathrm{d}x$ az egyenlete az új koordináta-rendszerben.

Ez a definíció ekvivalens módon átfogalmazható: azt mondjuk, hogy az $f : \mathbb{R} \to \mathbb{R}$ függvény _differenciálható_ az $x$ helyen, ha van olyan $D$ szám, hogy

$$
\lim_{h \to 0}\frac{f(x + h) - f(x) - Dh}{h} = 0.
$$

Ez utóbbi alak azzal az előnnyel is jár, hogy könnyen általánosítható. Az általánosítás legfőbb nehézsége az, hogy a vektorral való osztás nem definiálható megfelelően, ezért e formulán még egy apró, de még mindig ekvivalens változtatást teszünk: nem $h$-val, hanem annak abszolút értékével osztunk:

$$
\lim_{h \to 0}\frac{f(x + h) - f(x) - Dh}{|h|} = 0.
$$

Mindezek a következő definícióhoz vezetnek:

**7.108. definíció (Differenciálhatóság).** *Azt mondjuk, hogy az $\mathbf{f} : \mathbb{R}^n \to \mathbb{R}^m$ függvény differenciálható az $\mathbf{x}$ helyen, ha létezik olyan $D_{\mathbf{f},\mathbf{x}} : \mathbb{R}^n \to \mathbb{R}^m$ lineáris leképezés, melyre*

$$
\lim_{\mathbf{h} \to \mathbf{0}}\frac{\mathbf{f}(\mathbf{x} + \mathbf{h}) - \mathbf{f}(\mathbf{x}) - D_{\mathbf{f},\mathbf{x}}\mathbf{h}}{|\mathbf{h}|} = \mathbf{0}.
$$

*A $D_{\mathbf{f},\mathbf{x}}$ leképezést az $\mathbf{f}$ függvény $\mathbf{x}$ ponthoz tartozó deriváltleképezésének nevezzük.*

- A $D_{\mathbf{f},\mathbf{x}}$ jelölés arra utal, hogy a deriváltleképezés az $\mathbf{f}$ függvénytől és az $\mathbf{x}$ helytől is függ, maga viszont mint leképezés egy $\mathbf{h}$ vektorhoz a $D_{\mathbf{f},\mathbf{x}}\mathbf{h}$ vektort rendeli.

- Elterjedtebb a $D_{\mathbf{x}}(\mathbf{f})$ jelölés, itt didaktikai okból választottunk olyat, mely jobban világossá teszi, hogy ez egy lineáris leképezés, mely majd hat valamely $\mathbf{h}$ vektoron, és annak képe $D_{\mathbf{x}}(\mathbf{f})\mathbf{h}$ vagy $D_{\mathbf{x}}(\mathbf{f})(\mathbf{h})$ – az általunk használt jelölésben $D_{\mathbf{f},\mathbf{x}}\mathbf{h}$.

- Egy $\mathbb{R}^2 \to \mathbb{R}^2$ függvényen könnyen szemléltethető a derivált jelentése. Tekintsük az értelmezési tartomány egy négyzetrácsát, annak középpontja legyen $\mathbf{x}$. Tekintsük e rács képét az $\mathbf{f}$ függvény által, és a $D_{\mathbf{f},\mathbf{x}}$ deriváltleképezés hatását e rácson, ha az origót $\mathbf{x}$-be tesszük. A rács méretét folyamatosan csökkentve, a képeket pedig arányosan fölnagyítva azt látjuk, hogy a két kép egyre jobban „összesimul" (ld. 7.24 ábra). Ez emlékeztet arra – bár nem tökéletesen analóg vele –, ahogy az egyváltozós függvény grafikonjának egy pontjára „zoomolva" a grafikon az érintőhöz közelít, rásimul.

> *7.24. ábra. Egy $\mathbb{R}^2 \to \mathbb{R}^2$ függvény egy $\mathbf{x}$ pontban való differenciálhatóságának szemléltetésére tekintsük az értelmezési tartomány egyre sűrűbb négyzetrácsainak az $\mathbf{x}$ pontot körülvevő négyzeteit, valamint ezek $\mathbf{f}$ függvény általi képét (színes rács), és a $D_{\mathbf{f},\mathbf{x}}$ deriváltleképezés hatását e rácson, ha az értelmezési tartományának origóját $\mathbf{x}$-be, értékkészletének origóját $\mathbf{f}(\mathbf{x})$-be tesszük. Az egyre kisebb képeket fölnagyítva látható, hogy a függvény általi kép egyre jobban közelít a deriváltleképezés általi képhez.*

### Jacobi-mátrix

A deriváltleképezés mátrixa könnyen megkapható a koordinátafüggvények parciális deriváltjai segítségével.

**7.109. tétel (Jacobi-mátrix).** *Ha az $\mathbf{f} : \mathbb{R}^n \to \mathbb{R}^m$; $(x_1, x_2, \ldots, x_n) \mapsto (f_1, f_2, \ldots, f_m)$ függvény differenciálható az $\mathbf{x}$ helyen, akkor a lineáris $D_{\mathbf{f},\mathbf{x}}$ deriváltleképezés mátrixa a következő, ún. Jacobi-mátrix:*

$$
\mathbf{D}_{\mathbf{f},\mathbf{x}} = \frac{\partial(f_1, f_2, \ldots, f_m)}{\partial(x_1, x_2, \ldots, x_n)}(\mathbf{x}) =
\begin{bmatrix}
\frac{\partial f_1}{\partial x_1}(\mathbf{x}) & \frac{\partial f_1}{\partial x_2}(\mathbf{x}) & \ldots & \frac{\partial f_1}{\partial x_n}(\mathbf{x}) \\
\frac{\partial f_2}{\partial x_1}(\mathbf{x}) & \frac{\partial f_2}{\partial x_2}(\mathbf{x}) & \ldots & \frac{\partial f_2}{\partial x_n}(\mathbf{x}) \\
\vdots & \vdots & \ddots & \vdots \\
\frac{\partial f_m}{\partial x_1}(\mathbf{x}) & \frac{\partial f_m}{\partial x_2}(\mathbf{x}) & \ldots & \frac{\partial f_m}{\partial x_n}(\mathbf{x})
\end{bmatrix}
$$

**Bizonyítás.** Ha $\mathbf{f}$ differenciálható, akkor a definícióbeli határérték akkor is fönnáll, ha $\mathbf{h}$ speciális módon tart a nullvektorhoz, például ha $\mathbf{h} = t\mathbf{e}_j$, és $t \to 0$. Ekkor

$$
\lim_{t \to 0}\frac{\mathbf{f}(\mathbf{x} + t\mathbf{e}_j) - \mathbf{f}(\mathbf{x}) - D_{\mathbf{f},\mathbf{x}}(t\mathbf{e}_j)}{|t|} = \mathbf{0}.
$$

Az $\mathbf{f}$ függvény $i$-edik koordinátafügvénye $f_i$, a $D_{\mathbf{f},\mathbf{x}}(t\mathbf{e}_j)$ vektor $i$-edik koordinátája $\mathbf{e}_i^\mathsf{T}D_{\mathbf{f},\mathbf{x}}(t\mathbf{e}_j)$. Ennek alapján

$$
\lim_{t \to 0}\frac{f_i(\mathbf{x} + t\mathbf{e}_j) - f_i(\mathbf{x}) - \mathbf{e}_i^\mathsf{T}D_{\mathbf{f},\mathbf{x}}(t\mathbf{e}_j)}{|t|} = 0.
$$

Ez a határérték viszont már egy egyváltozós függvény deriváltja, ami nem más, mint az $f_i$ függvény $j$-edik parciális deriváltja, ugyanis átrendezve az egyenlőséget és $t$ előjelével is osztva kapjuk, hogy

$$
\lim_{t \to 0}\frac{f_i(\mathbf{x} + t\mathbf{e}_j) - f_i(\mathbf{x})}{t} = \mathbf{e}_i^\mathsf{T}D_{\mathbf{f},\mathbf{x}}\mathbf{e}_j, \quad \text{azaz } \mathbf{e}_i^\mathsf{T}D_{\mathbf{f},\mathbf{x}}\mathbf{e}_j = \frac{\partial f_i}{\partial x_j}(\mathbf{x}).
$$

Ez bizonyítja állításunkat. $\square$

- A gyakorlatban az $\mathbb{R}^n \to \mathbb{R}$ függvények, vagyis az $n$-változós skalárértékű függvények esetén az egyetlen sorból álló Jacobi-mátrix helyett annak vektoralakját használják, melyet _gradiensvektornak_ neveznek, és $\nabla f$-fel jelölnek.

- Hasonlóképp, mivel az $\mathbb{R} \to \mathbb{R}^n$ függvények Jacobi-mátrixa egyetlen oszlopból áll, gyakran használják annak vektoralakját. Ha például egy $\mathbf{r} : \mathbb{R} \to \mathbb{R}^3$; $t \mapsto \mathbf{r}(t)$ függvény a térben mozgó tárgy mozgását az idő függvényében írja le, e vektor épp a mozgás sebességvektora.

**7.110. példa (Jacobi-mátrix kiszámítása).** *Határozzuk meg az alábbi függvények egy általános ponthoz és a megadott ponthoz tartozó Jacobi-mátrixát!*

_1._ $f(x, y) = x^2 y - xy^3 + 1$, $(x, y) = (0, 1)$.

_2._ $\mathbf{f}(x, y) = (-x^3/2 + y^3/8, x + y)$, $(x, y) = (1, 1)$.

_3._ $\mathbf{r}(t) = (t^3, t^2, t)$, $t = 2$.

_4._ $\mathbf{f}(x_1, x_2, x_3) = (2x_1 + 3x_2, x_1 - x_2 - x_3)$, $(x_1, x_2, x_3) = (1, 2, 0)$.

**Megoldás.** *a)* $f(x,y) = x^2 y - xy^3$, parciális deriváltjai $\frac{\partial}{\partial x} f(x,y) = 2xy - y^3$, $\frac{\partial}{\partial y} f(x,y) = x^2 - 3xy^2$. A deriváltleképezés mátrixa, azaz a Jacobi-mátrix itt

$$\begin{bmatrix} 2xy - y^3 & x^2 - 3xy^2 \end{bmatrix}$$

E mátrix vektor alakja, azaz a gradiensvektor

$$\nabla f(x,y) = (2xy - y^3, x^2 - 3xy^2).$$

Ennek értéke a $(0,1)$ helyen $\nabla f(0,1) = (-1,0)$, illetve a Jacobi-mátrix e helyen $[-1\ 0]$.

*b)* Az $\mathbf{f}(x,y) = (-x^3/2 + y^3/8, x + y)$ függvény Jacobi-mátrixa és annak értéke a megadott $(x,y) = (1,1)$ pontban

$$\begin{bmatrix} -\tfrac{3}{2}x^2 & \tfrac{3}{8}y^2 \\ 1 & 1 \end{bmatrix}, \text{ illetve } \begin{bmatrix} -\tfrac{3}{2} & \tfrac{3}{8} \\ 1 & 1 \end{bmatrix}.$$

Például az első sor első eleme $\frac{\partial}{\partial x}(-x^3/2 + y^3/8) = -\tfrac{3}{2}x^2$. Az $\mathbf{f}$ függvény deriváltleképezésének, vagyis Jacobi-mátrixának hatását szemlélteti a 7.25 és a 7.24 ábra.

*7.25. ábra. A bal ábra az $\mathbf{f}(x,y) = (-x^3/2 + y^3/8, x + y)$ függvény értelmezési tartományán megadott rácsot, és annak egy kis $2 \times 2$-es részét mutatja, melynek középpontja az $(1,1)$ pont. Az alsó ábra egyrészt halványan jelöli e rács és színesen a kiemelt rács képét, valamint az $(1,1)$ ponthoz tartozó deriváltleképezés hatását e kiemelt rácson.*

*c)* Az $\mathbf{r}(t) = (t^3, t^2, t)$ függvény Jacobi-mátrixa

$$\begin{bmatrix} 3t^2 \\ 2t \\ 1 \end{bmatrix}, \text{ ami a } t = 2 \text{ helyen } \begin{bmatrix} 12 \\ 4 \\ 1 \end{bmatrix}.$$

A térben mozgó pont (test) mozgásának leírására is $\mathbb{R} \to \mathbb{R}^3$ függvényt használunk. Ha e függvény egy ilyen mozgást ír le, akkor sebességvektora egy tetszőleges pontban

$$\dot{\mathbf{r}}(t) = (3t^2, 2t, 1),$$

a $t = 2$ paraméterhez tartozó pontban $\dot{\mathbf{r}}(2) = (12, 4, 1)$.

*d)* Az utolsó példa fontos állítást szemléltet, nevezetesen azt, hogy egy lineáris leképezés deriváltja minden $\mathbf{x}$ helyen megegyezik magával a leképezéssel, azaz a deriváltja önmaga. Világos, hogy a megadott leképezés egy lineáris leképezés, melynek mátrixszorzatos alakja:

$$\mathbf{f}(x_1, x_2, x_3) = \begin{bmatrix} 2 & 3 & 0 \\ 1 & -1 & -1 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix}.$$

Ennek Jacobi-mátrixa valóban bármely $(x_1, x_2, x_3)$ helyen

$$\begin{bmatrix} 2 & 3 & 0 \\ 1 & -1 & -1 \end{bmatrix},$$

ugyanis az $i$-edik koordinátafüggvény $j$-edik parciális deriváltja épp az együtthatómátrix $i$-edik sor-, $j$-edik oszlopbeli eleme, azaz egy konstans. Így minden helyen e mátrix lesz a Jacobi-mátrix, speciálisan az $(x_1, x_2, x_3) = (1, 2, 0)$ helyen is. $\square$

**7.111. példa (Függvényérték becslése Jacobi-mátrixszal).** *Ismerjük egy differenciálható függvény értelmezési tartományának egy pontjához tartozó Jacobi-mátrixát és a függvényértéket ugyan ebben a pontban. Becsüljük meg a függvény értékét egy e ponthoz közeli helyen az alábbi adatok ismeretében!*

1. *$f(0,1) = 1$, $\mathbf{D}_{f,(0,1)} = [-1\ \ 0]$, $(x,y) = (-0.05, 1.1)$,*

2. *$\mathbf{f}(1,1) = (-\tfrac{3}{8}, 2)$, $\mathbf{D}_{\mathbf{f},(1,1)} = \begin{bmatrix} -3/2 & 3/8 \\ 1 & 1 \end{bmatrix}$, $(x,y) = (0.8, 1.1)$.*

*Mennyire lennének jók e becslések, ha a függvények az előző feladatbeli a) és b) függvényei lennének?*

**Megoldás.** A függvény megváltozásának becsléséhez az $\mathbf{f}(\mathbf{x} + \mathbf{h}) - \mathbf{f}(\mathbf{x})$ értéket kell megbecsülni. A differenciálhatóság definíciója szerint erre a $\mathbf{D}_{\mathbf{f},\mathbf{x}}\mathbf{h}$ mennyiség alkalmas, ha a függvény differenciálható az $\mathbf{x}$ pontban. Eszerint tehát

$$\mathbf{f}(\mathbf{x} + \mathbf{h}) \approx \mathbf{f}(\mathbf{x}) + \mathbf{D}_{\mathbf{f},\mathbf{x}}\mathbf{h}.$$

E képletet felhasználva az alábbi megoldásokra jutunk:

*a)* E feladatban $\mathbf{h} = (-0.05, 0.1)$, így a függvény megváltozása a

$$\mathbf{D}_{f,(0,1)}\mathbf{h} = \begin{bmatrix} -1 & 0 \end{bmatrix} \begin{bmatrix} -0.05 \\ 0.1 \end{bmatrix} = 0.05$$

értékkel becsülhető, tehát a függvény értéke

$$f(\mathbf{x} + \mathbf{h}) = f(-0.05, 1.1) \approx f(0,1) + \mathbf{D}_{f,(0,1)} \begin{bmatrix} -0.05 \\ 0.1 \end{bmatrix} = 1.05,$$

azaz $f(-0.05, 1.1) \approx 1.05$. Ha $f$ az előző *a)* feladatbeli függvény, azaz $f(x,y) = x^2 y - xy^3 + 1$, akkor a pontos érték $f(-0.05, 0.1) = 1.0693$.

*b)* Itt $\mathbf{h} = (-0.2, 0.1)$, így a függvény megváltozása a

$$\mathbf{D}_{\mathbf{f},(1,1)}\mathbf{h} = \begin{bmatrix} -\tfrac{3}{2} & \tfrac{3}{8} \\ 1 & 1 \end{bmatrix} \begin{bmatrix} -0.2 \\ 0.1 \end{bmatrix} = \begin{bmatrix} \tfrac{3}{2} \cdot \tfrac{2}{10} + \tfrac{3}{8} \cdot \tfrac{1}{10} \\ -\tfrac{2}{10} + \tfrac{1}{10} \end{bmatrix} = \begin{bmatrix} 0.3375 \\ -0.1 \end{bmatrix}$$

értékkel becsülhető, tehát a függvény értéke $\mathbf{f}(0.8, 1.1) \approx \mathbf{f}(1,1) + (0.3375, -0.1) = (-0.0375, 1.9)$. Ha $\mathbf{f}$ az előző *b)* feladatbeli függvény, azaz $\mathbf{f}(x,y) = (-x^3/2 + y^3/8, x + y)$, akkor a pontos érték $\mathbf{f}(0.8, 1.1) = (-0.089625, 1.9)$. $\square$

## Jacobi-determináns és az integrál transzformációja

A 2- és 3-dimenziós tér leírására leggyakrabban használt koordináta-rendszerek közötti váltás a többváltozós integrálok kiszámításában fontos szerepet kap. Az a kérdés, hogy az integrálközelítő összegben szereplő „téglányoknak" mennyi a mértékük. E szakasz kalkulus-előismereteket igényel.

Felidézzük a síkbeli polárkoordináta-rendszernek, a térbeli henger- és gömbi koordináta-rendszereknek a derékszögű koordináta-rendszerrel való kapcsolatát:

| *(a)* Polár | *(b)* Henger | *(c)* Gömbi |
|---|---|---|
| $x = r \cos \vartheta$ | $x = r \cos \vartheta$ | $x = \rho \sin \varphi \cos \vartheta$ |
| $y = r \sin \vartheta$ | $y = r \sin \vartheta$ | $y = \rho \sin \varphi \sin \vartheta$ |
| | $z = m$ | $z = \rho \cos \varphi$ |

A felsorolt változók jelentése: $r$ az $xy$-síkban az origótól való távolság, $\rho$ a térben az origótól való távolság, $\vartheta$ az $x$-tengely pozitív felével bezárt szög az $xy$-síkban, $\varphi$ a $z$-tengely pozitív felével bezárt szög.

*Jacobi-determinánsnak* nevezzük egy $\mathbb{R}^n \to \mathbb{R}^n$ függvény deriváltleképezésének determinánsát.

A síkbeli polárkoordináta-rendszerről a derékszögűre való áttérés egy $\mathbb{R}^2 \to \mathbb{R}^2$; $(r, \vartheta) \mapsto (x, y)$ függvény, melyet a fönti *(a)*-beli képletek definiálnak. Ennek deriváltleképezése, pontosabban a leképezés $\mathbf{D}$ mátrixa (szokás Jacobi-mátrixnak is hívni), és annak determinánsa, a Jacobi-determináns:

$$\mathbf{D} = \begin{bmatrix} \frac{\partial x}{\partial r} & \frac{\partial x}{\partial \vartheta} \\ \frac{\partial y}{\partial r} & \frac{\partial y}{\partial \vartheta} \end{bmatrix} = \begin{bmatrix} \cos \vartheta & -r \sin \vartheta \\ \sin \vartheta & r \cos \vartheta \end{bmatrix} \qquad |\mathbf{D}| = \begin{vmatrix} \cos \vartheta & -r \sin \vartheta \\ \sin \vartheta & r \cos \vartheta \end{vmatrix} = r.$$

Az, hogy a Jacobi-determináns értéke $r$, azt jelenti, hogy egy „kicsiny" $\Delta r \times \Delta \vartheta$ méretű téglány – melynek területe $\Delta r \Delta \vartheta$ – a transzformáció után, azaz a polárkoordináta-rendszerben „nagyjából" $r$-szerese lesz az eredetinek, azaz $r \Delta r \Delta \vartheta$, ahol $r$ a téglány egy pontjának origótól való távolsága. Ezt a leképezést a 7.26 ábrával szemléltetjük.

*7.26. ábra. A síkbeli polárkoordináta-rendszerre való áttérést megadó leképezés szemléltetése egy téglányokból álló tartomány képének ábrázolásával.*

Az $r$-szerező­dés geometriailag is könnyen igazolható, ahogy azt a 7.27 ábra mutatja. Kiszámoljuk egy polár-rendszerbeli téglány területét. Ez két körcikk területének különbsége. A nagyobbik sugara $r_k + \Delta r_k / 2$, a határoló ív hossza $(r_k + \Delta r_k / 2) \Delta \vartheta_k$, így területe $\frac{1}{2}(r_k + \Delta r_k / 2)^2 \Delta \vartheta_k$. Hasonlóan kiszámolva a kisebbik körcikk területét, majd kivonva a nagyobbikéból kapjuk, hogy a téglány $\Delta A_k$ területe

$$\Delta A_k = \frac{1}{2}\left(r_k + \frac{\Delta r_k}{2}\right)^2 \Delta \vartheta_k - \frac{1}{2}\left(r_k - \frac{\Delta r_k}{2}\right)^2 \Delta \vartheta_k = r_k \Delta r_k \Delta \vartheta_k.$$

Eszerint egy $T$ tartományon értelmezett $f(r, \vartheta)$ függvény integrál-

*7.27. ábra. A síkbeli polárkoordináta-rendszer téglányának területe $r_k \Delta r_k \Delta \vartheta_k$.*

közelítő összege és annak határértéke, amint a legnagyobb átmérőjű téglány átmérője tart 0-hoz (ld. 7.28 ábra):

$$\sum_k f(r_k, \vartheta_k) \Delta A_k = \sum_k f(r_k, \vartheta_k) r_k \Delta r_k \Delta \vartheta_k \to \int_T f(r, \vartheta) r \, \mathrm{d}r \, \mathrm{d}\vartheta.$$

A két térbeli koordináta-rendszerre való áttérés hasonló módon való megértését és a leképezések elképzelését már az Olvasóra hagyjuk, de a leképezések deriváltjának determinánsát még fölírjuk. A hengerkoordináták esetén az $(r, \vartheta, m) \mapsto (x, y, z)$ leképezésre ez

$$|\mathbf{D}| = \begin{vmatrix} \frac{\partial x}{\partial r} & \frac{\partial x}{\partial \vartheta} & \frac{\partial x}{\partial m} \\ \frac{\partial y}{\partial r} & \frac{\partial y}{\partial \vartheta} & \frac{\partial y}{\partial m} \\ \frac{\partial z}{\partial r} & \frac{\partial z}{\partial \vartheta} & \frac{\partial z}{\partial m} \end{vmatrix} = \begin{vmatrix} \cos \vartheta & -r \sin \vartheta & 0 \\ \sin \vartheta & r \cos \vartheta & 0 \\ 0 & 0 & 1 \end{vmatrix} = r.$$

*7.28. ábra. Egy $T$ tartományba eső téglányok, és a $k$-adik téglány kiemelve.*

A gömbi koordináta-rendszer esetén a leképezés $(\rho, \varphi, \vartheta) \mapsto (x, y, z)$, amelynek Jacobi-determinánsa:

$$\begin{vmatrix} \frac{\partial x}{\partial \rho} & \frac{\partial x}{\partial \varphi} & \frac{\partial x}{\partial \vartheta} \\ \frac{\partial y}{\partial \rho} & \frac{\partial y}{\partial \varphi} & \frac{\partial y}{\partial \vartheta} \\ \frac{\partial z}{\partial \rho} & \frac{\partial z}{\partial \varphi} & \frac{\partial z}{\partial \vartheta} \end{vmatrix} = \begin{vmatrix} \sin \varphi \cos \vartheta & \rho \cos \varphi \cos \vartheta & -\rho \sin \varphi \sin \vartheta \\ \sin \varphi \sin \vartheta & \rho \cos \varphi \sin \vartheta & \rho \sin \varphi \cos \vartheta \\ \cos \varphi & -\rho \sin \varphi & 0 \end{vmatrix} = \rho^2 \sin \varphi.$$

Így tehát az integrál kiszámításának képletei e három koordináta-rendszerre:

Polár:
$$\iint_T f(r, \vartheta) \, \mathrm{d}A = \iint_T f(r, \vartheta) \, r \, \mathrm{d}r \, \mathrm{d}\vartheta$$

Henger:
$$\iiint_T f(r, \vartheta, m) \, \mathrm{d}V = \iiint_T f(r, \vartheta, m) \, r \, \mathrm{d}m \, \mathrm{d}r \, \mathrm{d}\vartheta$$

Gömbi:
$$\iiint_T f(\rho, \varphi, \vartheta) \, \mathrm{d}V = \iiint_T f(\rho, \varphi, \vartheta) \, \rho^2 \sin \varphi \, \mathrm{d}\rho \, \mathrm{d}\varphi \, \mathrm{d}\vartheta.$$

## Függvények kompozíciójának deriváltja

E paragrafusnak nem célja a függvényanalízis területére tartozó témák feldolgozása, de a többváltozós függvények kompozíciójának deriváltleképezése az egyváltozós függvények láncszabályához hasonló módon számolható, és erre érdemes egy pillantást vetnünk, mert a megoldást a deriváltleképezések kompozíciója, azaz a Jacobi-mátrixok szorzata adja.

Bizonyítás nélkül közöljük a következő tételt.

**7.112. tétel (Láncszabály).** *Legyen $\mathbf{f} : \mathbb{R}^k \to \mathbb{R}^m$, $\mathbf{g} : \mathbb{R}^n \to \mathbb{R}^k$ két függvény. Ha $\mathbf{g}$ differenciálható az $\mathbf{x}$ helyen, és $\mathbf{f}$ a $\mathbf{g}(\mathbf{x})$ helyen, akkor $\mathbf{f} \circ \mathbf{g}$ differenciálható az $\mathbf{x}$ helyen, és deriváltleképezése, illetve annak mátrixa:*

$$D_{\mathbf{f} \circ \mathbf{g}, \mathbf{x}} = D_{\mathbf{f}, \mathbf{g}(\mathbf{x})} \circ D_{\mathbf{g}, \mathbf{x}}, \quad \text{illetve} \quad \mathbf{D}_{\mathbf{f} \circ \mathbf{g}, \mathbf{x}} = \mathbf{D}_{\mathbf{f}, \mathbf{g}(\mathbf{x})} \mathbf{D}_{\mathbf{g}, \mathbf{x}}.$$

**7.113. példa (Láncszabály).** *Írjuk fel a láncszabály általános képleteit a megadott függvénytípusokra, az összetett függvény deriváltját pedig a láncszabállyal és behelyettesítéssel is számítsuk ki!*

1. *$f : (x,y) \mapsto x^2 - y$, $\mathbf{g} : u \mapsto (u^2 + u, u - 1)$, $u = 1$.*

2. *$\mathbf{f} : \mathbb{R} \to \mathbb{R}^2; x \mapsto (x^2, x - 1)$, $g : \mathbb{R}^2 \to \mathbb{R}; (u,v) \mapsto x = u^2 v$, $(u,v) = (1,2)$.*

3. *$\mathbf{f}(x,y) = (xy^2 - 1, x - y)$, $\mathbf{g}(u,v) = (u + 1, u - v)$, $(u,v) = (0,1)$.*

**Megoldás.** Az *a)* esetben az $f$-hez, illetve $\mathbf{g}$-hez tartozó láncszabály általános alakja

$$\frac{\mathrm{d}f}{\mathrm{d}u} = \begin{bmatrix} \frac{\partial f}{\partial x} & \frac{\partial f}{\partial y} \end{bmatrix} \begin{bmatrix} \frac{\mathrm{d}g_1}{\mathrm{d}u} \\ \frac{\mathrm{d}g_2}{\mathrm{d}u} \end{bmatrix} = \frac{\partial f}{\partial x} \frac{\mathrm{d}g_1}{\mathrm{d}u} + \frac{\partial f}{\partial y} \frac{\mathrm{d}g_2}{\mathrm{d}u},$$

a függvények parciális deriváltjait kiszámolva és a helyet megadva

$$\frac{\mathrm{d}f}{\mathrm{d}u}(1) = \begin{bmatrix} 2x & -1 \end{bmatrix}_{\mathbf{g}(1) = (2,0)} \begin{bmatrix} 2u + 1 \\ 1 \end{bmatrix}_{u=1},$$

végül a behelyettesítést is elvégezve:

$$\begin{bmatrix} 4 & -1 \end{bmatrix} \begin{bmatrix} 3 \\ 1 \end{bmatrix} = 11.$$

Ugyanezt az eredményt kapjuk, ha a deriválás előtt elvégezzük a helyettesítést: $(f \circ \mathbf{g})(u) = (u^2 + u)^2 - (u - 1) = u^4 + 2u^3 + u^2 - u + 1$, ennek $u$ szerinti deriváltja $4u^3 + 6u^2 + 2u - 1$, és ennek értéke az $u = 1$ helyen 11.

A *b)* esetben $\mathbf{f} : \mathbb{R} \to \mathbb{R}^2$, $g : \mathbb{R}^2 \to \mathbb{R}$, így $\mathbf{f} \circ g : \mathbb{R}^2 \to \mathbb{R}^2$, és

$$\begin{bmatrix} \frac{\partial f_1}{\partial u} & \frac{\partial f_1}{\partial v} \\ \frac{\partial f_2}{\partial u} & \frac{\partial f_2}{\partial v} \end{bmatrix} = \begin{bmatrix} \frac{\mathrm{d}f_1}{\mathrm{d}x} \\ \frac{\mathrm{d}f_2}{\mathrm{d}x} \end{bmatrix} \begin{bmatrix} \frac{\partial g}{\partial u} & \frac{\partial g}{\partial v} \end{bmatrix} = \begin{bmatrix} \frac{\mathrm{d}f_1}{\mathrm{d}x} \frac{\partial g}{\partial u} & \frac{\mathrm{d}f_1}{\mathrm{d}x} \frac{\partial g}{\partial v} \\ \frac{\mathrm{d}f_2}{\mathrm{d}x} \frac{\partial g}{\partial u} & \frac{\mathrm{d}f_2}{\mathrm{d}x} \frac{\partial g}{\partial v} \end{bmatrix}$$

A megadott függvényekre és a helyettesítendő értékeket is megadva:

$$\begin{bmatrix} 2x \\ 1 \end{bmatrix}_{x = g(1,2) = 2} \begin{bmatrix} 2uv & u^2 \end{bmatrix}_{u=1, v=2} = \begin{bmatrix} 4 \\ 1 \end{bmatrix} \begin{bmatrix} 4 & 1 \end{bmatrix} = \begin{bmatrix} 16 & 4 \\ 4 & 1 \end{bmatrix}.$$

Behelyettesítés után a függvény $(u,v) \mapsto (u^4 v^2, u^2 v - 1)$, aminek deriváltja az $(u,v) = (1,2)$ helyen

$$\begin{bmatrix} 4u^3 v^2 & 2u^4 v \\ 2uv & u^2 \end{bmatrix}_{(1,2)} = \begin{bmatrix} 16 & 4 \\ 4 & 1 \end{bmatrix},$$

ami természetesen megegyezik az előző eredménnyel.

Végül a *c)* esetben az általános alak

$$\begin{bmatrix} \frac{\partial f_1}{\partial u} & \frac{\partial f_1}{\partial v} \\ \frac{\partial f_2}{\partial u} & \frac{\partial f_2}{\partial v} \end{bmatrix} = \begin{bmatrix} \frac{\partial f_1}{\partial x} & \frac{\partial f_1}{\partial y} \\ \frac{\partial f_2}{\partial x} & \frac{\partial f_2}{\partial y} \end{bmatrix} \begin{bmatrix} \frac{\partial g_1}{\partial u} & \frac{\partial g_1}{\partial v} \\ \frac{\partial g_2}{\partial u} & \frac{\partial g_2}{\partial v} \end{bmatrix}.$$

A parciális deriváltakat kiszámolva és a helyettesítési értékeket is megadva kapjuk, hogy

$$\begin{aligned} \begin{bmatrix} \frac{\partial f_1}{\partial u} & \frac{\partial f_1}{\partial v} \\ \frac{\partial f_2}{\partial u} & \frac{\partial f_2}{\partial v} \end{bmatrix}_{(0,1)} &= \begin{bmatrix} y^2 & 2xy \\ 1 & -1 \end{bmatrix}_{(1,-1)} \begin{bmatrix} 1 & 0 \\ 1 & -1 \end{bmatrix}_{(0,1)} \\ &= \begin{bmatrix} 1 & -2 \\ 1 & -1 \end{bmatrix} \begin{bmatrix} 1 & 0 \\ 1 & -1 \end{bmatrix} = \begin{bmatrix} -1 & 2 \\ 0 & 1 \end{bmatrix}. \end{aligned}$$

Itt fölhasználtuk, hogy $\mathbf{g}(0,1) = (1,-1)$. Ha a deriválás előtt elvégezzük a függvények kompozícióját, akkor ugyanerre az eredményre jutunk, ugyanis

$$(\mathbf{f}(\mathbf{g}(u,v)) = \left( (u+1)(u-v)^2 - 1, v + 1 \right),$$

aminek a deriváltmátrixa

$$\begin{bmatrix} (u-v)^2 + 2(u+1)(u-v) & -2(u+1)(u-v) \\ 0 & 1 \end{bmatrix}_{(0,1)} = \begin{bmatrix} -1 & 2 \\ 0 & 1 \end{bmatrix}. \qquad \square$$

<!-- OCR: through PDF p.354 -->
