# A Gauss elimináció

<!-- OCR of "Gauss.pdf" (jegyzet, dr. Leitold Adrien, Pannon Egyetem). 15 oldal. -->

Tekintsünk egy lineáris egyenletrendszert, amely $m$ egyenletet és $n$ ismeretlent tartalmaz:
$$\begin{aligned}a_{11}\cdot x_1+\dots+a_{1n}\cdot x_n&=b_1\\ a_{21}\cdot x_1+\dots+a_{2n}\cdot x_n&=b_2\\ &\vdots\\ a_{m1}\cdot x_1+\dots+a_{mn}\cdot x_n&=b_m\end{aligned}$$

A fenti egyenletrendszer együtthatómátrixa és kibővített mátrixa:
$$A=\begin{pmatrix}a_{11}&\dots&a_{1n}\\\vdots&&\vdots\\a_{m1}&\dots&a_{mn}\end{pmatrix}_{m\times n}\qquad [A,\underline b]=\begin{pmatrix}a_{11}&\dots&a_{1n}&b_1\\\vdots&&\vdots&\vdots\\a_{m1}&\dots&a_{mn}&b_m\end{pmatrix}_{m\times(n+1)}.$$

A Gauss eliminációs módszer tetszőleges lineáris egyenletrendszer megoldására alkalmas, menete az alábbi két fázisra bontható:
- **1. fázis** (*elimináció* = kiküszöbölés): Az egyenletrendszer átalakítása ún. lépcsős (vagy trapéz) alakra.
- **2. fázis:** Az egyenletrendszer megoldáshalmazának felírása. Ehhez az ismeretlenek értékét, vagy a kötött és szabad ismeretlenek közti összefüggéseket határozzuk meg *fokozatos visszahelyettesítés*sel.

Az együtthatómátrix $a_{ij}$ elemét **vezérelem**nek hívjuk, ha az $a_{ij}$ elem az $i$-edik sor első nem nulla eleme, azaz $a_{ij}\ne 0$ és $a_{il}=0$, minden $l=1,\dots,j-1$-re.

Az együtthatómátrixot **lépcsős** vagy **trapéz** alakúnak nevezzük, ha az egymást követő sorok vezérelemei egymástól jobbra helyezkednek el a mátrixban, azaz ha $a_{ij}$ és $a_{kl}$ két vezérelem és $k>i$, akkor $l>j$ is teljesül.

Az alábbiakban néhány lépcsős alakú mátrix látható (ahol $*$: az adott sor vezéreleme, nullától különböző elem; $\times$: tetszőleges (nulla, vagy nullától különböző) elem):
$$\begin{pmatrix}*&\times&\times&\times\\0&*&\times&\times\\0&0&*&\times\\0&0&0&*\end{pmatrix},\begin{pmatrix}*&\times&\times&\times\\0&*&\times&\times\\0&0&*&\times\\0&0&0&0\end{pmatrix},\begin{pmatrix}*&\times&\times&\times\\0&0&*&\times\\0&0&0&*\\0&0&0&0\end{pmatrix},\dots$$

Látható, hogy a lépcsős alakú mátrixokban a vezérelem oszlopában, a vezérelem alatt csak nullák állhatnak.

A Gauss elimináció első fázisában az egyenletrendszert ekvivalens átalakításokkal úgy írjuk át, hogy együtthatómátrixa lépcsős alakúvá váljon. A megengedett átalakítások:
1. Egy egyenlet szorozható egy nullától különböző skalárral.
2. Valamely egyenlethez hozzáadhatjuk egy másik egyenlet skalárszorosát.
3. Felcserélhetünk két egyenletet.
4. Ha egy egyenlet baloldalán az összes együttható nulla, továbbá az egyenlet jobb oldalán álló konstans is nulla, akkor ez az egyenlet elhagyható. (Ez a szituáció azt jelzi, hogy az adott egyenlet az eredeti egyenletrendszerben redundáns, nem független a többitől.)

A fenti átalakítások ekvivalens átalakítások, azaz az eredeti egyenletrendszer és az átalakított egyenletrendszer megoldáshalmaza ugyanaz. Megjegyezzük, hogy a fenti 1. típusú átalakítás alkalmazásával az is mindig elérhető, hogy az együtthatómátrix lépcsős alakjában valamennyi vezérelem 1 legyen. Kézi számolásnál azonban erre nem feltétlenül érdemes törekedni, mert az esetlegesen megjelenő tört együtthatók a további számolást megnehezíthetik.

Annak érdekében, hogy az ekvivalens átalakítások során ne kelljen mindig a teljes egyenletrendszert leírnunk, az átalakításokat a kibővített mátrixon hajtjuk végre, mindaddig, amíg a lépcsős alak létre nem jön. A kibővített együtthatómátrixban szaggatott vonallal választjuk el a baloldali együtthatókat a jobboldalon álló konstansoktól. A fent felsorolt megengedett ekvivalens átalakítások a kibővített mátrixra vonatkozóan a következők:
1. A kibővített mátrix egy sora szorozható egy nullától különböző skalárral.
2. A kibővített mátrix valamely sorához hozzáadhatjuk egy másik sor skalárszorosát.
3. Felcserélhetünk két sort.
4. Ha a kibővített mátrix valamelyik sorában (a szaggatott vonal előtt és után is) az összes elem nulla, akkor ez a sor elhagyható.

A Gauss elimináció 1. fázisának lépései a következők:

**1. lépés:** Tekintsük az $a_{11}$ elemet a kibővített mátrixban. Tegyük fel, hogy $a_{11}\ne 0$. (Ha $a_{11}=0$ lenne a kiindulási egyenletrendszer kibővített együtthatómátrixában, akkor először cseréljünk fel két sort úgy, hogy a csere után $a_{11}\ne 0$ teljesüljön.) Ekkor $a_{11}$ lesz az első sor vezéreleme. 2. típusú átalakításokkal – az első sor skalárszorosát a többi sorhoz adva – érjük el, hogy a kibővített mátrixban az $a_{11}$ vezérelem alatt valamennyi elem nullává váljon.

**2. lépés:** Tekintsük az $a_{22}$ elemet az átalakított mátrixban. Ha $a_{22}\ne 0$, akkor ez lesz a második sor vezéreleme. 2. típusú átalakításokkal – a második sor skalárszorosát a többi sorhoz adva – érjük el, hogy a mátrixban az $a_{22}$ vezérelem alatt valamennyi elem nullává váljon. (Figyelem: eközben az előző lépésben az első oszlopban a vezérelem alatt létrehozott nulláknak meg kell őrződniük!) Ha az 1. lépés után az átalakított mátrixban $a_{22}=0$, akkor a második egyenletet cseréljük meg valamelyik alatta lévő egyenlettel úgy, hogy a csere után $a_{22}\ne 0$ legyen. Ha nincs mód ilyen cserére, azaz a második oszlopban az $a_{22}$ elem alatt is csupa nulla áll, akkor ezt azt jelenti, hogy a kibővített mátrix lépcsős alakjában a második oszlopban nem lesz vezérelem. (Ilyen volt a korábban bemutatott lépcsős alakú mátrixok közül a harmadik és a hatodik mátrix.) Ez esetben a második sorban eggyel jobbra lépve próbáljunk vezérelemet keresni, majd alatta 2. típusú átalakításokkal nullázzuk ki az elemeket.

**3. lépés:** A kibővített mátrix harmadik sorában a korábbiakhoz hasonlóan keressük meg az előző sor vezérelemtől jobbra elhelyezkedő legközelebbi vezérelemet, majd a harmadik sort felhasználva 2. típusú átalakításokkal az új vezérelem alatt nullázzuk ki az elemeket.

…

A fenti lépéseket addig folytatjuk, amíg a következő sorban a szaggatott vonal előtt találunk újabb vezérelemet, azaz amíg létre nem jön az együtthatómátrix lépcsős alakja.

Ha létrehoztuk a lépcsős alakot, akkor az egyenletrendszer megoldhatóságára vonatkozóan az alábbi értékelést végezhetjük:

**Tilos sor**nak nevezünk a kibővített mátrixban egy olyan sort, amelyben a szaggatott vonal előtti elemek mind nullák, de a szaggatott vonal után nullától különböző elem áll.

**Tétel:**
- **I.** Az egyenletrendszer akkor és csak akkor oldható meg, ha nincs a lépcsős alakban tilos sor.
- **II.** Az egyenletrendszernek pontosan akkor van egyértelmű megoldása (egy megoldásvektora), ha a lépcsős alakban nincs tilos sor és a vezérelemek száma megegyezik az ismeretlenek számával.
- **III.** Az egyenletrendszernek pontosan akkor van végtelen sok megoldásvektora, ha a lépcsős alakban nincs tilos sor és a vezérelemek száma kisebb az ismeretlenek számánál.

A Gauss módszer 2. fázisában az egyenletrendszer megoldáshalmazát határozzuk meg a kibővített mátrix lépcsős alakját felhasználva. Először hagyjuk el a csupa nullákat tartalmazó sorokat. Ha a lépcsős alak tartalmaz tilos sort, akkor az egyenletrendszer megoldáshalmaza üres halmaz, azaz nincs megoldás.

Ha a lépcsős alakban a vezérelemek száma megegyezik az ismeretlenek számával, akkor az egyenletrendszernek egy megoldásvektora van, ilyenkor valamennyi ismeretlen kötött. A lépcsős alakot alapul véve, alulról felfelé haladva visszahelyettesítésekkel valamennyi ismeretlen értéke meghatározható, ezekből pedig felírható a megoldásvektor.

Ha a lépcsős alakban a vezérelemek száma kisebb az ismeretlenek számánál, akkor az egyenletrendszernek végtelen sok megoldásvektora van. A vezérelemeknek megfelelő ismeretlenek lesznek a kötött ismeretlenek (például ha $a_{33}$ vezérelem, akkor, mivel $a_{33}$ az $x_3$ ismeretlen együtthatója, ezért $x_3$ kötött ismeretlen lesz), a többi ismeretlen pedig szabad ismeretlen. Utóbbiak értéke szabadon megválasztható. A lépcsős alakot tekintve, alulról felfelé haladva visszahelyettesítésekkel a kötött és szabad ismeretlenek közötti összefüggések megállapíthatóak. Ezek alapján az egyenletrendszer megoldáshalmaza felírható.

Megjegyzések:
1. Kézi számolásnál is érdemes lehet arra törekedni, hogy a vezérelem 1 legyen. Ezt 1. vagy 3. típusú átalakításokkal érhetjük el. 1. típusú átalakítást erre a célra csak akkor érdemes alkalmaznunk, ha ez nem jár törtszámok megjelenésével.
2. Ha a lépcsős alak létrehozása során menet közben észrevesszük, hogy tilos sor jelent meg a kibővített mátrixban, akkor ez már jelzi, hogy az egyenletrendszer nem oldható meg. Ebben az esetben az átalakítást befejezhetjük.

A Gauss elimináció alkalmazását példákon mutatjuk be.

## 1. Minta feladat (*Lineáris egyenletrendszerek* c. feladatsor 7./a)

Oldja meg Gauss elimináció alkalmazásával az alábbi lineáris egyenletrendszert!
$$\begin{aligned}x_1+2x_2+x_3-x_4&=5\\ 2x_1+x_2-3x_3+x_4&=4\\ x_1+x_2+x_3+x_4&=3\\ -x_1+x_2-x_3+2x_4&=1\end{aligned}$$

**Megoldás:** Írjuk fel először az egyenletrendszer kibővített mátrixát:
$$\left(\begin{array}{cccc|c}1&2&1&-1&5\\2&1&-3&1&4\\1&1&1&1&3\\-1&1&-1&2&1\end{array}\right).$$

Az első fázisban az együtthatómátrixot lépcsős alakúvá transzformáljuk. Az $a_{11}=1$ elem lesz az első sor vezéreleme. Az 1. lépésben az 1. sor felhasználásával 2. típusú átalakításokat alkalmazva nullázzuk ki az $a_{11}$ alatti elemeket. A végrehajtandó átalakítások:
- a második sorhoz adjuk hozzá az első sor $-2$-szeresét;
- a harmadik sorhoz adjuk hozzá az első sor $-1$-szeresét;
- a negyedik sorhoz adjuk hozzá az első sort.

Az átalakítások végrehajtása után:
$$\left(\begin{array}{cccc|c}1&2&1&-1&5\\0&-3&-5&3&-6\\0&-1&0&2&-2\\0&3&0&1&6\end{array}\right)$$

A harmadik sort $-1$-gyel szorozva, majd a második és harmadik sort megcserélve a második sorban a vezérelem 1 lesz:
$$\left(\begin{array}{cccc|c}1&2&1&-1&5\\0&1&0&-2&2\\0&-3&-5&3&-6\\0&3&0&1&6\end{array}\right)$$

Az $a_{22}=1$ vezérelem alatt a 2. oszlopban 2. típusú átalakításokkal nullázunk (a harmadik sorhoz a második sor 3-szorosát, a negyedik sorhoz a második sor $-3$-szorosát adva):
$$\left(\begin{array}{cccc|c}1&2&1&-1&5\\0&1&0&-2&2\\0&0&-5&-3&0\\0&0&0&7&0\end{array}\right)$$

A kibővített mátrixban nincs tilos sor, tehát az egyenletrendszer megoldható. Négy vezérelem található: $a_{11}=1,a_{22}=1,a_{33}=-5$ és $a_{44}=7$, így mind a négy ismeretlen kötött, az egyenletrendszer egyértelműen megoldható.

A 2. fázisban fokozatos visszahelyettesítéssel:
- $7x_4=0$, innen $x_4=0$.
- $-5x_3-3x_4=0$, innen $x_4=0$ behelyettesítésével $x_3=0$.
- $1x_2-2x_4=2$, innen $x_2=2$.
- $1x_1+2x_2+1x_3-1x_4=5$, innen $x_1=1$.

Tehát a megoldáshalmaz: $M=\{(1,2,0,0)\}$.

## 2. Minta feladat (*Lineáris egyenletrendszerek* c. feladatsor 7./c)

$$\begin{aligned}x_1+3x_2+x_3&=5\\ 2x_1+9x_2+5x_3&=13\\ 3x_1-4x_2+2x_3&=2\\ 2x_1+6x_2+2x_3&=13\end{aligned}$$

**Megoldás:** A kibővített mátrixból kiindulva (a második sorhoz $-2\times$, a harmadikhoz $-3\times$, a negyedikhez $-2\times$ az első sort adva):
$$\left(\begin{array}{ccc|c}1&3&1&5\\0&3&3&3\\0&-13&-1&-13\\0&0&0&3\end{array}\right)$$

A negyedik sor **tilos sor**, tehát az egyenletrendszer nem oldható meg: $M=\emptyset$.

## 3. Minta feladat (*Lineáris egyenletrendszerek* c. feladatsor 7./f)

$$\begin{aligned}x_1+2x_2-2x_3+3x_4&=2\\ x_1+3x_2-2x_3+3x_4&=4\\ 2x_1+4x_2-3x_3+6x_4&=7\end{aligned}$$

**Megoldás:** A kibővített mátrixot lépcsős alakúvá alakítva (a 2. sorhoz $-1\times$, a 3. sorhoz $-2\times$ az első sort adva):
$$\left(\begin{array}{cccc|c}1&2&-2&3&2\\0&1&0&0&2\\0&0&1&0&3\end{array}\right)$$

Nincs tilos sor, három vezérelem: $a_{11}=1,a_{22}=1,a_{34}=1$ (helyesen $a_{33}=1$). Az $x_1,x_2,x_3$ kötött, az $x_4$ szabad. Fokozatos visszahelyettesítéssel: $x_3=3$, $x_2=2$, $1x_1+2x_2-2x_3+3x_4=2$, innen $x_1=4-3x_4$.

Megoldáshalmaz:
$$M=\left\{\underline x\in\mathbb{R}^4\mid x_4\in\mathbb{R},\ x_1=4-3x_4,\ x_2=2,\ x_3=3\right\}.$$

## 4. Minta feladat (*Lineáris egyenletrendszerek* c. feladatsor 7./i)

$$\begin{aligned}2x_1+6x_2+4x_3+8x_4&=0\\ x_1+x_2+x_3+x_4&=0\\ 4x_1+2x_3-2x_4&=0\end{aligned}$$

**Megoldás:** A kibővített mátrixban az 1. és 2. sort megcserélve (hogy a vezérelem 1 legyen), majd a 2. sorhoz $-2\times$, a 3. sorhoz $-4\times$ az első sort adva:
$$\left(\begin{array}{cccc|c}1&1&1&1&0\\0&4&2&6&0\\0&-4&-2&-6&0\end{array}\right)$$

A harmadik sorhoz a második sort adva:
$$\left(\begin{array}{cccc|c}1&1&1&1&0\\0&4&2&6&0\\0&0&0&0&0\end{array}\right)$$

A harmadik sorban nincs vezérelem, a lépcsős alak létrejött; a csupa nulla sor elhagyható (homogén lin. egyenletrendszer mindig megoldható). Két vezérelem: $a_{11}=1$ és $a_{22}=4$; kötött: $x_1,x_2$; szabad: $x_3,x_4$.

- $4x_2+2x_3+6x_4=0\Rightarrow x_2=-\tfrac12 x_3-\tfrac32 x_4$
- $1x_1+1x_2+1x_3+1x_4=0$, behelyettesítve $\Rightarrow x_1=-\tfrac12 x_3+\tfrac12 x_4$

$$M=\left\{\underline x\in\mathbb{R}^4\mid x_3,x_4\in\mathbb{R},\ x_1=-\tfrac12 x_3+\tfrac12 x_4,\ x_2=-\tfrac12 x_3-\tfrac32 x_4\right\}$$

## 5. Minta feladat (*Lineáris egyenletrendszerek* c. feladatsor 7./j)

$$\begin{aligned}x_1+x_2-2x_3+x_4+3x_5&=1\\ 2x_1-x_2+2x_3+2x_4+6x_5&=2\\ 3x_1+2x_2-4x_3-3x_4-9x_5&=3\end{aligned}$$

**Megoldás:** A 2. sorhoz $-2\times$, a 3. sorhoz $-3\times$ az első sort adva:
$$\left(\begin{array}{ccccc|c}1&1&-2&1&3&1\\0&-3&6&0&0&0\\0&-1&2&-6&-18&0\end{array}\right)$$

A harmadik sort $-1$-gyel szorozva, a 2. és 3. sort megcserélve ($a_{22}=1$), majd a 3. sorhoz a 2. sor 3-szorosát adva:
$$\left(\begin{array}{ccccc|c}1&1&-2&1&3&1\\0&1&-2&6&18&0\\0&0&0&18&54&0\end{array}\right)$$

Nincs tilos sor. Vezérelemek: $a_{11}=1,a_{22}=1,a_{34}=1$; kötött: $x_1,x_2,x_4$; szabad: $x_3,x_5$.
- $18x_4+54x_5=0\Rightarrow x_4=-3x_5$
- $1x_2-2x_3+6x_4+18x_5=0$, behelyettesítve $\Rightarrow x_2=2x_3$
- $1x_1+1x_2-2x_3+1x_4+3x_5=1$, behelyettesítve $\Rightarrow x_1=1$

$$M=\left\{\underline x\in\mathbb{R}^5\mid x_3,x_5\in\mathbb{R},\ x_1=1,\ x_2=2x_3,\ x_4=-3x_5\right\}$$

## Az inverz mátrix módszer

Tekintsünk egy olyan lineáris egyenletrendszert, amelyben az ismeretlenek és egyenletek száma megegyezik, azaz az egyenletrendszer együtthatómátrixa négyzetes ($n\times n$-es). Tömör írásmódot alkalmazva az egyenletrendszer így írható fel:
$$A\cdot\underline x=\underline b$$

Tegyük fel, hogy az egyenletrendszer $A$ együtthatómátrixa invertálható, és szorozzuk meg a fenti egyenlet mindkét oldalát balról az $A^{-1}$ inverz mátrixszal:
$$A^{-1}\cdot A\cdot\underline x=A^{-1}\cdot\underline b$$

Az inverz mátrix definíciója szerint $A^{-1}\cdot A=E$, ahol $E$ az $n\times n$-es egységmátrix, továbbá $E\underline x=\underline x$, így:
$$\underline x=A^{-1}\cdot\underline b$$

Látható tehát, hogy négyzetes együtthatómátrixú lineáris egyenletrendszerek esetén, ha az együtthatómátrix invertálható (azaz az együtthatómátrix rangja megegyezik az ismeretlenek számával), az egyenletrendszer mindig egyértelműen megoldható, és a megoldásvektort megkaphatjuk az együtthatómátrix inverzének és a jobboldali konstansok $\underline b$ vektorának a szorzataként.

**Minta feladat:** Oldjuk meg az inverz mátrix módszer alkalmazásával az alábbi lineáris egyenletrendszert!
$$\begin{aligned}x_1+2x_2+3x_3&=5\\ 2x_1+4x_2+5x_3&=10\\ 3x_1+5x_2+6x_3&=13\end{aligned}$$

**Megoldás:** Az együtthatómátrix négyzetes. Bázistranszformációt alkalmazva az induló táblázat:

| bázis | $\underline a_1$ | $\underline a_2$ | $\underline a_3$ | $\underline e_1$ | $\underline e_2$ | $\underline e_3$ |
|---|---|---|---|---|---|---|
| $\underline e_1$ | **1** | 2 | 3 | 1 | 0 | 0 |
| $\underline e_2$ | 2 | 4 | 5 | 0 | 1 | 0 |
| $\underline e_3$ | 3 | 5 | 6 | 0 | 0 | 1 |

Vonjuk be az $\underline a_1$ vektort a bázisba az $\underline e_1$ helyére:

| bázis | $\underline a_2$ | $\underline a_3$ | $\underline e_1$ | $\underline e_2$ | $\underline e_3$ |
|---|---|---|---|---|---|
| $\underline a_1$ | 2 | 3 | 1 | 0 | 0 |
| $\underline e_2$ | 0 | -1 | -2 | 1 | 0 |
| $\underline e_3$ | **-1** | -3 | -3 | 0 | 1 |

Hajtsuk végre az $\underline a_2\to\underline e_3$ vektorcserét:

| bázis | $\underline a_3$ | $\underline e_1$ | $\underline e_2$ | $\underline e_3$ |
|---|---|---|---|---|
| $\underline a_1$ | -3 | -5 | 0 | 2 |
| $\underline e_2$ | **-1** | -2 | 1 | 0 |
| $\underline a_2$ | 3 | 3 | 0 | -1 |

Végül vonjuk be az $\underline a_3$ vektort az $\underline e_2$ helyére (itt már látszik, hogy az $A$ mátrix rangja 3, azaz teljes rangú, így invertálható):

| bázis | $\underline e_1$ | $\underline e_2$ | $\underline e_3$ |
|---|---|---|---|
| $\underline a_1$ | 1 | -3 | 2 |
| $\underline a_3$ | 2 | -1 | 0 |
| $\underline a_2$ | -3 | 3 | -1 |

Az inverzmátrix felírásánál arra kell figyelnünk, hogy a kanonikus bázis vektorainak az $\underline a_1,\underline a_2$ és $\underline a_3$ vektorokra vonatkozó koordinátáit a megfelelő sorrendben kell az inverzmátrix oszlopaiba beírni, azaz a bázistranszformációs táblázat sorait kell a megfelelő módon rendezni:
$$A^{-1}=\begin{pmatrix}1&-3&2\\-3&3&-1\\2&-1&0\end{pmatrix}$$

A megoldásvektor:
$$\underline x=A^{-1}\cdot\underline b=\begin{pmatrix}1&-3&2\\-3&3&-1\\2&-1&0\end{pmatrix}\cdot\begin{pmatrix}5\\10\\13\end{pmatrix}=\begin{pmatrix}1\\2\\0\end{pmatrix}$$

Tehát a megoldáshalmaz: $M=\{(1,2,0)\}$.

## Összefoglalás a tanult lineáris egyenletrendszert megoldó módszerek alkalmazhatóságáról

Lineáris egyenletrendszerek megoldására az alábbi módszereket tanultuk:
- bázistranszformációs módszer
- Cramer szabály
- Gauss elimináció
- inverzmátrix módszer.

A négyféle módszer közül a *bázistranszformációs módszer* és a *Gauss elimináció* bármilyen lineáris egyenletrendszer megoldására használható, alkalmazásuk során az alábbi eredményeket kaphatjuk:
- Az egyenletrendszer nem oldható meg.
- Az egyenletrendszer egyértelműen megoldható. Ilyenkor valamennyi ismeretlen kötött, az egyetlen megoldásvektor meghatározható.
- Az egyenletrendszer megoldható és végtelen sok megoldásvektor létezik. Ilyenkor meghatározhatók a kötött és szabad ismeretlenek közti összefüggések, melyek segítségével a megoldásvektorok jellemezhetőek, a megoldáshalmaz felírható.

A *Cramer szabály*t és az *inverz mátrix módszer*t csak négyzetes együtthatómátrixú lineáris egyenletrendszerek esetén használhatjuk, de ezekre is csak korlátozottan. Mindkét módszer akkor használható, ha az $A$ együtthatómátrix nemszinguláris (ilyenkor $D=\det(A)\ne 0$, illetve $A$ invertálható). Ez esetben az egyenletrendszer egyértelműen megoldható, az egyértelműen létező megoldásvektor mindkét módszerrel megkapható. A problémát az jelenti, hogy amikor elkezdjük az egyenletrendszert ezekkel a módszerekkel megoldani, nem tudjuk általában előre, hogy az együtthatómátrix nemszinguláris-e. Az, hogy az együtthatómátrix szinguláris, csak menet közben derül ki, így előfordul, hogy feleslegesen dolgozunk.

Megjegyezzük még, hogy a *Cramer szabály* és az *inverz mátrix módszer* művelet igénye (számolási munka) is lényegesen nagyobb, mint a *bázistranszformációs módszer* és a *Gauss elimináció* művelet igénye, így ebben a tekintetben is kevésbé hatékony az alkalmazhatóságuk.
