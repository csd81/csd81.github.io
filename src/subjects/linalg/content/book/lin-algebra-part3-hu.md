# III. rész

# Mátrixok sajátságai

E rész a mátrixok legfontosabb tulajdonságait, sajátságait vizsgálja. A *sajátságokra* való utalás egyúttal egy szójáték, mely a mátrix *sajátértékének*, *sajátvektorának* és *sajátalterének* igen fontos fogalmára, valamint a születésekor ugyancsak *sajátértéknek* nevezett szinguláris értékre utal. Vizsgálatainkat a négyzetes mátrixok lehető legegyszerűbb – diagonális – alakra hozásával kezdjük, amihez a sajátértékek meghatározása vezet. Az alkalmazásokban az utóbbi időben különösen fontossá vált, és minden mátrixra működő másik diagonalizáló technika a szinguláris értékekhez kapcsolódik. Ennek tárgyalását a diagonalizálhatósághoz kapcsolódó kérdések tisztázása, a „majdnem diagonális alak", a Jordan-féle normálalak leírása követi, végül e részt az alkalmazásokban különösen fontos nemnegatív mátrixok vizsgálata zárja.

*green&blue (CC) by Joós Andi*

# 8

# Sajátérték, diagonalizálás

Egy mátrix jellemzésének különösen hatékony eszköze azoknak a nullvektortól különböző $\mathbf{x}$ vektoroknak a meghatározása, amelyeket a mátrixszal való szorzás önmagukkal párhuzamos vektorokba visz, azaz amelyekre $\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$. E vektorok ismerete olyan bázis megtalálásához is hozzásegít, amelyben e mátrix lényegesen egyszerűbb – például diagonális – alakot ölt.

## Sajátérték, sajátvektor, sajátaltér

### A sajátérték és a sajátvektor fogalma

Kezdjük egy egyszerű feladattal, melyből kiolvasható annak lényege, amiről e fejezetben szó lesz.

**8.1. példa** (Jó bázis tükrözéshez). *Tükrözzük a 3-dimenziós tér vektorait a tér egy megadott síkjára! Geometriai szemléletünkre hagyatkozva válasszunk e lineáris leképezés leírásához egy megfelelő bázist, majd írjuk fel a tükrözés e bázisra vonatkozó mátrixát!*

*Megoldás.* A síkra való tükrözés a síkra merőleges vektorokat ellentettjükbe viszi, míg a sík vektorait helyben hagyja. A tér minden vektora egyértelműen előáll egy síkba eső és egy rá merőleges vektor összegeként. Válasszunk ki a sík egy tetszőleges bázisát (álljon ez az $\mathbf{a}$ és $\mathbf{b}$ vektorokból), és e két vektorhoz vegyünk hozzá egy síkra merőleges $\mathbf{c}$ vektort harmadik bázisvektornak. Ekkor a tükröző $T$ leképezés hatása e vektorokon: $T\mathbf{a} = \mathbf{a}$, $T\mathbf{b} = \mathbf{b}$ és $T\mathbf{c} = -\mathbf{c}$. Az $\{\mathbf{a},\mathbf{b},\mathbf{c}\}$ bázisban $T$ mátrixa

$$\begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & -1 \end{bmatrix}.$$

Így e bázisban egy tetszőleges $(x,y,z)$ vektor tükörképe $(x,y,-z)$. $\square$

E példában úgy választottunk bázist, hogy olyan vektorokat kerestünk, melyek önmaguk skalárszorosába mennek, azaz amelyek kielégítenek egy $T\mathbf{x} = \lambda\mathbf{x}$ alakú egyenletet. Ez a következő definícióhoz vezet, melyet először csak mátrixokra mondunk ki.

**8.2. definíció** (Sajátérték, sajátvektor). *Azt mondjuk, hogy a $\lambda$ szám az $\mathbf{A}$ mátrix sajátértéke, ha létezik olyan nemnulla $\mathbf{x}$ vektor, melyre $\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$. Az ilyen $\mathbf{x}$ vektorokat az $\mathbf{A}$ mátrix $\lambda$ sajátértékhez tartozó sajátvektorainak, a $(\lambda,\mathbf{x})$ párokat pedig az $\mathbf{A}$ sajátpárjainak nevezzük.*

**8.3. példa** (Sajátérték, sajátvektor). *Igazoljuk, hogy az $\mathbf{A} = \left[\begin{smallmatrix} -2 & 2 \\ -2 & 3 \end{smallmatrix}\right]$ mátrixnak $-1$ egy sajátértéke, és $(2,1)$ az egyik hozzátartozó sajátvektora, azaz $(-1,(2,1))$ egy sajátpár. Mutassuk meg, hogy a $(2,(1,2))$ pár egy másik sajátpár!*

*Megoldás.* Valóban,

$$\begin{bmatrix} -2 & 2 \\ -2 & 3 \end{bmatrix} \begin{bmatrix} 2 \\ 1 \end{bmatrix} = \begin{bmatrix} -2 \\ -1 \end{bmatrix}, \quad \text{azaz} \quad \begin{bmatrix} -2 & 2 \\ -2 & 3 \end{bmatrix} \begin{bmatrix} 2 \\ 1 \end{bmatrix} = (-1) \begin{bmatrix} 2 \\ 1 \end{bmatrix}.$$

E mátrix egy másik sajátértéke 2, ugyanis

$$\begin{bmatrix} -2 & 2 \\ -2 & 3 \end{bmatrix} \begin{bmatrix} 1 \\ 2 \end{bmatrix} = \begin{bmatrix} 2 \\ 4 \end{bmatrix}, \quad \text{azaz} \quad \begin{bmatrix} -2 & 2 \\ -2 & 3 \end{bmatrix} \begin{bmatrix} 1 \\ 2 \end{bmatrix} = 2 \begin{bmatrix} 1 \\ 2 \end{bmatrix}. \qquad \square$$

Ha $\mathbf{x}$ egy sajátvektor, akkor minden nemnulla konstansszorosa is az, ugyanis

$$\mathbf{A}(c\mathbf{x}) = c\mathbf{A}\mathbf{x} = c\lambda\mathbf{x} = \lambda(c\mathbf{x}),$$

azaz $\mathbf{A}(c\mathbf{x}) = \lambda(c\mathbf{x})$. Ennél több is igaz:

**8.4. állítás** (A sajátvektorok alterei). *Ha az $\mathbf{A}$ mátrixnak $\lambda$ egy sajátértéke, akkor a $\lambda$-hoz tartozó sajátvektorok a nullvektorral együtt alteret alkotnak, mely megegyezik $\mathbf{A} - \lambda\mathbf{I}$ nullterével.*

*Bizonyítás.* A nem nullvektor $\mathbf{x}$ pontosan akkor egy $\lambda$ sajátértékhez tartozó sajátvektor, ha kielégíti az $\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$ egyenletet, azaz az $\mathbf{A}\mathbf{x} - \lambda\mathbf{x} = \mathbf{0}$ egyenletet, vagyis ha megoldása a homogén lineáris $(\mathbf{A} - \lambda\mathbf{I})\mathbf{x} = \mathbf{0}$ egyenletnek. Ez pedig épp azt jelenti, hogy $\mathbf{x}$ eleme $\mathbf{A} - \lambda\mathbf{I}$ nullterének. $\square$

**8.5. definíció** (Sajátaltér). *A négyzetes $\mathbf{A}$ mátrix $\lambda$ sajátértékhez tartozó sajátvektorai és a nullvektor által alkotott alteret a $\lambda$ sajátértékhez tartozó sajátaltérnek nevezzük.*

**8.6. példa** (Sajátaltér bázisának meghatározása). *Adjuk meg az*

$$\mathbf{A} = \begin{bmatrix} 3 & 6 & 1 \\ 1 & 8 & 1 \\ 1 & 6 & 3 \end{bmatrix}$$

*mátrix 2-höz, mint sajátértékhez tartozó sajátalterét úgy, hogy megadjuk egy bázisát! Tegyük meg ugyanezt a 10-hez tartozó sajátaltérrel is.*

*Megoldás.* Először ellenőrizzük, hogy a 2 sajátérték! Ehhez meg kell mutatni, hogy $(\mathbf{A} - 2\mathbf{I})\mathbf{x} = \mathbf{0}$ egyenletrendszernek van nemtriviális megoldása. Hozzuk az együtthatómátrixot redukált lépcsős alakra:

$$\mathbf{A} - 2\mathbf{I} = \begin{bmatrix} 1 & 6 & 1 \\ 1 & 6 & 1 \\ 1 & 6 & 1 \end{bmatrix} \implies \begin{bmatrix} 1 & 6 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}.$$

Mivel $\operatorname{r}(\mathbf{A} - 2\mathbf{I}) = 1$, ezért az $(\mathbf{A} - 2\mathbf{I})\mathbf{x} = \mathbf{0}$ egyenletrendszer szabad változóinak száma 2, és megoldása

$$\mathbf{x} = \begin{bmatrix} -6s - t \\ s \\ t \end{bmatrix} = s \begin{bmatrix} -6 \\ 1 \\ 0 \end{bmatrix} + t \begin{bmatrix} -1 \\ 0 \\ 1 \end{bmatrix}.$$

Tehát a sajátaltér egy bázisa a $(-6,1,0)$ és $(-1,0,1)$ vektorokból áll.

A 10 is sajátérték, mivel az $(\mathbf{A} - 10\mathbf{I})\mathbf{x} = \mathbf{0}$ egyenletrendszernek van nemtriviális megoldása, ugyanis

$$\mathbf{A} - 10\mathbf{I} = \begin{bmatrix} -7 & 6 & 1 \\ 1 & -2 & 1 \\ 1 & 6 & -7 \end{bmatrix} \implies \begin{bmatrix} 1 & 0 & -1 \\ 0 & 1 & -1 \\ 0 & 0 & 0 \end{bmatrix},$$

tehát a megoldás

$$\mathbf{x} = \begin{bmatrix} t \\ t \\ t \end{bmatrix} = t \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix}.$$

Így a sajátalteret az $(1,1,1)$ vektor feszíti ki.

A két sajátaltér egyike 2-, másika 1-dimenziós altér. Ezt szemlélteti a 8.1. ábra. $\square$

*8.1. ábra. A 8.6. feladatbeli $\mathbf{A}$ mátrix sajátalterei: a 2-höz tartozó 2-dimenziós altér, melyet a $(-6,1,0)$ és $(-1,0,1)$ vektorok feszítenek ki, és a 10-hez tartozó 1-dimenziós altér, melyet az $(1,1,1)$ vektor feszít ki.*

### Karakterisztikus polinom

Láttuk, hogy az $\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$ egyenletnek pontosan akkor van a zérusvektortól különböző megoldása, ha a homogén lineáris $(\mathbf{A} - \lambda\mathbf{I})\mathbf{x} = \mathbf{0}$ egyenletrendszernek van nemtriviális megoldása. Ez a 6.3. tétel szerint pontosan akkor igaz, ha

$$\det(\mathbf{A} - \lambda\mathbf{I}) = 0. \tag{8.1}$$

Ez tehát azt jelenti, hogy $\lambda$ pontosan akkor sajátérték, ha kielégíti a (8.1) egyenletet. Ezt az egyenletet az $\mathbf{A}$ mátrix *karakterisztikus egyenletének* nevezzük. Ha $\mathbf{A}$ egy $n \times n$-es mátrix, akkor az egyenlet bal oldala a determináns kifejtése után egy $n$-edfokú polinom, melyet *karakterisztikus polinomnak* nevezünk. Az $n$-edrendű $\mathbf{A}$ mátrix karakterisztikus polinomját $\chi_{\mathbf{A}}$-val jelöljük, ennek általános alakja tehát

$$\chi_{\mathbf{A}}(\lambda) = (-1)^n \lambda^n + p_{n-1}\lambda^{n-1} + \ldots + p_1\lambda + p_0. \tag{8.2}$$

> *A karakterisztikus polinomot a $\det(\lambda\mathbf{I} - \mathbf{A})$ determinánssal is szokás definiálni. Előnye, hogy ekkor a polinom főegyütthatója mindig 1, míg az általunk használt definíció szerint a páratlan rendű mátrixok karakterisztikus polinomjának $-1$ a főegyütthatója. Hátránya viszont az, hogy a konstans tag nem mindig a determináns, másrészt a kézzel való számolás is nehézkesebb, ezért az elemi feladatok egyszerűbb számolhatósága érdekében is hasznosabb a $\det(\mathbf{A} - \lambda\mathbf{I})$ alakot választani.*

**8.7. példa** (Karakterisztikus polinom felírása). *Határozzuk meg az*

$$\mathbf{A} = \begin{bmatrix} a & b \\ c & d \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 1 & a & b \\ 0 & 1 & c \\ 0 & 0 & 1 \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} a & b & c \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{bmatrix}.$$

*mátrixok karakterisztikus polinomját és ahol lehet, próbáljunk meg általánosabb érvényű állításokat megsejteni az eredmény alapján!*

*Megoldás.* Ki kell számítanunk a $\det(\mathbf{A} - \lambda\mathbf{I})$ determináns értékét:

$$\begin{aligned} \det(\mathbf{A} - \lambda\mathbf{I}) &= \begin{vmatrix} a - \lambda & b \\ c & d - \lambda \end{vmatrix} = (a - \lambda)(d - \lambda) - bc \\ &= \lambda^2 - (a + d)\lambda + (ad - bc) \\ &= \lambda^2 - \operatorname{trace}(\mathbf{A})\lambda + \det\mathbf{A}. \end{aligned} \tag{8.3}$$

Kimondható a következtetés: $2 \times 2$-es mátrixok karakterisztikus polinomját a mátrix nyomával és determinánsával is ki tudjuk fejezni.

A $\mathbf{B}$ mátrix karakterisztikus polinomja

$$\det(\mathbf{B} - \lambda\mathbf{I}) = \begin{vmatrix} 1 - \lambda & a & b \\ 0 & 1 - \lambda & c \\ 0 & 0 & 1 - \lambda \end{vmatrix} = (1 - \lambda)^3.$$

Ebből leolvasható, hogy a háromszögmátrixok karakterisztikus polinomjának alakját nem befolyásolják a főátlón kívüli elemek (ld. a 8.8. tételt).

A $\mathbf{C}$ mátrix karakterisztikus polinomja

$$\begin{aligned} \det(\mathbf{C} - \lambda\mathbf{I}) &= \begin{vmatrix} a - \lambda & b & c \\ 1 & -\lambda & 0 \\ 0 & 1 & -\lambda \end{vmatrix} \\ &= (a - \lambda)\lambda^2 + b\lambda + c \\ &= -\lambda^3 + a\lambda^2 + b\lambda + c. \end{aligned}$$

Ez azt sejteti, hogy minden polinomhoz könnyen konstruálható olyan mátrix, melynek az a karakterisztikus polinomja (ld. a **??** feladatot). $\square$

Az előző feladat tanulságait külön állításokban is megfogalmazzuk:

**8.8. állítás** (Háromszögmátrixok sajátértékei). *A háromszögmátrixok és így a diagonális mátrixok sajátértékei megegyeznek a főátló elemeivel.*

*Bizonyítás.* Ha $\mathbf{A}$ háromszögmátrix, akkor $\mathbf{A} - \lambda\mathbf{I}$ is, és egy háromszögmátrix determinánsa megegyezik főátlóbeli elemeinek szorzatával. Eszerint az $\mathbf{A} = [a_{ij}]$ háromszögmátrix karakterisztikus egyenlete

$$(a_{11} - \lambda)(a_{22} - \lambda)\ldots(a_{nn} - \lambda) = 0,$$

aminek a gyökei $a_{ii}$ $(i = 1, \ldots, n)$. Így ezek az $\mathbf{A}$ sajátértékei. $\square$

**8.9. állítás** (Determináns, nyom és a sajátértékek). *Ha az $n$-edrendű $\mathbf{A}$ mátrix sajátértékei $\lambda_1, \ldots, \lambda_n$, akkor*

$$\begin{aligned} \det(\mathbf{A}) &= \lambda_1\lambda_2\ldots\lambda_n \\ \operatorname{trace}(\mathbf{A}) &= \lambda_1 + \lambda_2 + \cdots + \lambda_n \end{aligned}$$

*Ezek az értékek megjelennek a karakterisztikus polinomban: a determináns a konstans tag, a nyom a $(-\lambda)^{n-1}$ együtthatója.*

*Bizonyítás.* A karakterisztikus polinom gyöktényezős alakja:

$$\det(\mathbf{A} - \lambda\mathbf{I}) = (\lambda_1 - \lambda)(\lambda_2 - \lambda)\ldots(\lambda_n - \lambda)$$

$\lambda = 0$ behelyettesítése után kapjuk, hogy

$$\det(\mathbf{A}) = \lambda_1\lambda_2\ldots\lambda_n.$$

Az állítás nyomra vonatkozó részének bizonyítását feladatként tűzzük ki. $\square$

### A valós $2 \times 2$-es mátrixok sajátaltereinek jellemzése

Olyan eredményekkel fogunk megismerkedni e paragrafusban, melyek általánosíthatóak lesznek magasabb dimenzióra, de 2-dimenzió esetén egyszerűbb a szemléltetésük.

Láttuk, hogy ha $\mathbf{x}$ sajátvektor, akkor bármely konstansszorosa is az. Így egy egyenessel párhuzamos vektorok közül elég csak egy vektor képét vizsgálni, mondjuk az egységvektorét. Hasznos lesz tehát a lineáris leképezések korábban megismert egységkör-ábrázolása (ld. 7.7 ábra).

**8.10. példa** ($2 \times 2$-es mátrixok sajátvektorainak szemléltetése). *Határozzuk meg a 7.11. és a **??** példákban is szereplő*

$$\mathbf{A} = \begin{bmatrix} \tfrac{5}{4} & \tfrac{3}{4} \\ \tfrac{3}{4} & \tfrac{5}{4} \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} \tfrac{3}{4} & \tfrac{5}{4} \\ \tfrac{5}{4} & \tfrac{3}{4} \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} -\tfrac{5}{4} & \tfrac{3}{4} \\ -\tfrac{3}{4} & \tfrac{5}{4} \end{bmatrix}, \quad \mathbf{D} = \begin{bmatrix} -\tfrac{3}{4} & \tfrac{5}{4} \\ -\tfrac{5}{4} & \tfrac{3}{4} \end{bmatrix}.$$

*mátrixok sajátértékeit és sajátvektorait. Szemléltessük ezeket az egységkör-ábrákban.*

*Megoldás.* Egyszerű számolással meghatározható mind a négy mátrix karakterisztikus egyenlete, sajátértékei és sajátvektorai, bár a $\mathbf{D}$ mátrix esetén ezek komplex számokat is tartalmaznak. A karakterisztikus polinomot jelölje $\chi$, indexében a mátrix jelével. Ezután megadjuk a sajátértékeket, majd a sajátvektorokat:

$$\begin{aligned} \chi_{\mathbf{A}}(\lambda) &= \lambda^2 - \tfrac{5}{2}\lambda + 1, & \lambda_1 = 2, \; \lambda_2 = \tfrac{1}{2}, & \quad \mathbf{x}_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}, \; \mathbf{x}_2 = \begin{bmatrix} 1 \\ -1 \end{bmatrix}. \\ \chi_{\mathbf{B}}(\lambda) &= \lambda^2 - \tfrac{3}{2}\lambda - 1, & \lambda_1 = 2, \; \lambda_2 = -\tfrac{1}{2}, & \quad \mathbf{x}_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}, \; \mathbf{x}_2 = \begin{bmatrix} 1 \\ -1 \end{bmatrix}. \\ \chi_{\mathbf{C}}(\lambda) &= \lambda^2 - 1, & \lambda_1 = 1, \; \lambda_2 = -1, & \quad \mathbf{x}_1 = \begin{bmatrix} 1 \\ 3 \end{bmatrix}, \; \mathbf{x}_2 = \begin{bmatrix} 3 \\ 1 \end{bmatrix}. \\ \chi_{\mathbf{D}}(\lambda) &= \lambda^2 + 1, & \lambda_1 = \mathrm{i}, \; \lambda_2 = -\mathrm{i}, & \quad \mathbf{x}_1 = \begin{bmatrix} \tfrac{3}{5} - \tfrac{4}{5}\mathrm{i} \\ 1 \end{bmatrix}, \; \mathbf{x}_2 = \begin{bmatrix} \tfrac{3}{5} + \tfrac{4}{5}\mathrm{i} \\ 1 \end{bmatrix}. \end{aligned}$$

Némi nehézséget a $\mathbf{D}$ mátrix okoz, ezért az ahhoz tartozó számításokat részletezzük:

$$\begin{aligned} |\mathbf{D} - \lambda\mathbf{I}| &= \begin{vmatrix} -\tfrac{3}{4} - \lambda & \tfrac{5}{4} \\ -\tfrac{5}{4} & \tfrac{3}{4} - \lambda \end{vmatrix} = \lambda^2 + 1 \\ \lambda_1 = \mathrm{i}: & \quad \begin{bmatrix} -\tfrac{3}{4} - \mathrm{i} & \tfrac{5}{4} \\ -\tfrac{5}{4} & \tfrac{3}{4} - \mathrm{i} \end{bmatrix} \implies \begin{bmatrix} 1 & -\tfrac{3}{5} + \tfrac{4}{5}\mathrm{i} \\ 0 & 0 \end{bmatrix} \text{ amiből } \mathbf{x}_1 = \begin{bmatrix} \tfrac{3}{5} - \tfrac{4}{5}\mathrm{i} \\ 1 \end{bmatrix}, \\ \lambda_2 = -\mathrm{i}: & \quad \begin{bmatrix} -\tfrac{3}{4} + \mathrm{i} & \tfrac{5}{4} \\ -\tfrac{5}{4} & \tfrac{3}{4} + \mathrm{i} \end{bmatrix} \implies \begin{bmatrix} 1 & -\tfrac{3}{5} - \tfrac{4}{5}\mathrm{i} \\ 0 & 0 \end{bmatrix} \text{ amiből } \mathbf{x}_2 = \begin{bmatrix} \tfrac{3}{5} + \tfrac{4}{5}\mathrm{i} \\ 1 \end{bmatrix}. \end{aligned}$$

A négy mátrixhoz tartozó egységkörábra a 8.2 ábrán látható. $\square$

*8.2. ábra. A négy leképezés sajátirányai.*

**8.11. tétel** (A $2 \times 2$-es szimmetrikus mátrixok sajátalterei). *Legyen $\mathbf{A} \in \mathbb{R}^{2\times 2}$ szimmetrikus mátrix. Ekkor*
*a) $\mathbf{A}$ minden sajátértéke valós,*
*b) $\mathbf{A}$-nak pontosan akkor van két azonos sajátértéke, ha $a\mathbf{I}$ alakú, ekkor a sík összes vektora sajátvektor,*
*c) ha $\mathbf{A}$-nak két különböző sajátértéke van, akkor sajátalterei merőlegesek egymásra.*

*Bizonyítás.* A $2 \times 2$-es szimmetrikus valós mátrix általános alakja $\mathbf{A} = \left[\begin{smallmatrix} a & b \\ b & d \end{smallmatrix}\right]$, ahol $a, b, d \in \mathbb{R}$. Ennek karakterisztikus egyenlete a (8.3) szerint $\lambda^2 - (a + d)\lambda + (ad - b^2)$. Az egyenlet diszkriminánsa $D = (a + d)^2 - 4(ad - b^2) = (a - d)^2 + 4b^2 \geq 0$. Tehát a gyökök, vagyis a sajátértékek valósak. Ez bizonyítja $a)$-t. A két sajátérték pontosan akkor egyezik meg, ha $D = 0$, ez viszont csak $a = d$ és $b = 0$ esetén lehetséges, ami bizonyítja $b)$-t. A $c)$ állítás igazolását a feladatok közt tűzzük ki. $\square$

### Mátrix összes sajátértékének és sajátvektorának meghatározása

Az előző paragrafusokban leírtak alapján egy mátrix sajátértékeinek és sajátvektorainak meghatározása két lépésben elvégezhető:
1. megoldjuk a $\det(\mathbf{A} - \lambda\mathbf{I}) = 0$ karakterisztikus egyenletet, ennek gyökei a sajátértékek,
2. minden $\lambda$ sajátértékhez meghatározzuk az $\mathbf{A} - \lambda\mathbf{I}$ nullterének egy bázisát, az általa kifeszített altér nemzérus vektorai a $\lambda$-hoz tartozó sajátvektorok.

**8.12. példa** (Az összes sajátérték és sajátvektor meghatározása). *Határozzuk meg a*

$$\begin{bmatrix} 0 & 1 & 1 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{bmatrix}$$

*mátrix sajátértékeit és sajátvektorait!*

*Megoldás.* Az első lépés a karakterisztikus egyenlet felírása és megoldása. A kiszámítandó determináns háromszögalakú, így értéke a főátlóbeli elemek szorzata:

$$\det(\mathbf{A} - \lambda\mathbf{I}) = \begin{vmatrix} 0 - \lambda & 1 & 1 \\ 0 & 2 - \lambda & 0 \\ 0 & 0 & 2 - \lambda \end{vmatrix} = -\lambda(2 - \lambda)^2$$

A karakterisztikus egyenlet gyökei és így az $\mathbf{A}$ mátrix sajátértékei $\lambda_1 = 0$, $\lambda_2 = \lambda_3 = 2$.

Tekintsük először a $\lambda_1 = 0$ esetet. $\mathbf{A} - \lambda_1\mathbf{I}$ nullterének meghatározásához redukált lépcsős alakra hozzuk az $\mathbf{A} - \lambda_1\mathbf{I}$ mátrixot:

$$\begin{bmatrix} 0 & 1 & 1 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{bmatrix} \implies \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{bmatrix} \implies \begin{aligned} x_2 &= 0 \\ x_3 &= 0. \end{aligned}$$

Ennek megoldása $x_1 = t$, azaz az összes megoldás

$$\begin{bmatrix} t \\ 0 \\ 0 \end{bmatrix} = t \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}.$$

Tehát a $\lambda_1 = 0$ sajátértékhez tartozó sajátaltér az $(1,0,0)$ vektor által kifeszített altér.

Tekintsük ezután a $\lambda_2 = \lambda_3 = 2$ esetet. Meghatározzuk az $\mathbf{A} - 2\mathbf{I}$ mátrix nullterét.

$$\begin{bmatrix} -2 & 1 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix} \implies \begin{bmatrix} 2 & -1 & -1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix} \implies 2x_1 - x_2 - x_3 = 0$$

Ennek az (egy egyenletből álló) egyenletrendszernek a megoldása $x_2 = s$, $x_3 = t$, $x_1 = (s + t)/2$, azaz

$$\begin{bmatrix} (s + t)/2 \\ s \\ t \end{bmatrix} = s \begin{bmatrix} 1/2 \\ 1 \\ 0 \end{bmatrix} + t \begin{bmatrix} 1/2 \\ 0 \\ 1 \end{bmatrix}.$$

Tehát a $\lambda_2 = \lambda_3 = 2$ sajátértékhez tartozó sajátaltér az $(\tfrac{1}{2}, 1, 0)$ és az $(\tfrac{1}{2}, 0, 1)$ vektorok által kifeszített altér. $\square$

Az $n \times n$-es mátrixok karakterisztikus egyenlete $n$-edfokú. Egy ilyen egyenlet megoldására $n \leq 4$ esetén van megoldóképlet, ezért ezeket az egyenleteket – például egy komputer algebra program segítségével – meg tudjuk oldani. Egyébként vagy szerencsénk van, és az egyenlet olyan alakú, amilyenhez vannak gyors megoldási lehetőségek, vagy csak közelítő megoldás megtalálására van esély.

**8.13. példa** (Magasabbfokú karakterisztikus egyenlet). *Határozzuk meg az*

$$\mathbf{A} = \begin{bmatrix} 1 & 2 & 2 \\ 2 & 1 & 2 \\ 3 & 3 & 2 \end{bmatrix}$$

*mátrix sajátértékeit és sajátvektorait!*

*Megoldás.* A karakterisztikus egyenlet:

$$\begin{aligned} \mathbf{A} - \lambda\mathbf{I} &= \begin{bmatrix} 1 - \lambda & 2 & 2 \\ 2 & 1 - \lambda & 2 \\ 3 & 3 & 2 - \lambda \end{bmatrix} \\ &= (1 - \lambda)^2(2 - \lambda) + 24 - 12(1 - \lambda) - 4(2 - \lambda) \\ &= -(\lambda^3 - 4\lambda^2 - 11\lambda - 6) \end{aligned}$$

E harmadfokú egyenlet megoldására használhatunk számítógépet, megoldóképletet, vagy például a függelékben megtalálható racionálisgyök-tételt. Eszerint a karakterisztikus egyenlet $-(\lambda + 1)^2(\lambda - 6) = 0$, így gyökei $\lambda_1 = \lambda_2 = -1$ és $\lambda_3 = 6$.

A $\lambda_1 = \lambda_2 = -1$ esetben

$$\mathbf{A} + \mathbf{I} = \begin{bmatrix} 2 & 2 & 2 \\ 2 & 2 & 2 \\ 3 & 3 & 3 \end{bmatrix} \implies \begin{bmatrix} 1 & 1 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix} \implies x_1 + x_2 + x_3 = 0.$$

Ennek megoldása

$$\begin{bmatrix} -s - t \\ s \\ t \end{bmatrix} = s \begin{bmatrix} -1 \\ 1 \\ 0 \end{bmatrix} + t \begin{bmatrix} -1 \\ 0 \\ 1 \end{bmatrix},$$

azaz a $-1$ sajátértékhez tartozó sajátalteret a $(-1, 1, 0)$ és a $(-1, 0, 1)$ vektorok feszítik ki.

A $\lambda_3 = 6$ esetben

$$\mathbf{A} - 6\mathbf{I} = \begin{bmatrix} -5 & 2 & 2 \\ 2 & -5 & 2 \\ 3 & 3 & -4 \end{bmatrix} \implies \begin{bmatrix} 1 & 0 & -2/3 \\ 0 & 1 & -2/3 \\ 0 & 0 & 0 \end{bmatrix} \implies \begin{aligned} x_1 \quad &- \tfrac{2}{3}x_3 = 0 \\ x_2 &- \tfrac{2}{3}x_3 = 0. \end{aligned}$$

Ennek megoldása a törtek alkalmazását elkerülő $x_3 = 3t$ paraméterválasztással

$$\begin{bmatrix} 2t \\ 2t \\ 3t \end{bmatrix} = t \begin{bmatrix} 2 \\ 2 \\ 3 \end{bmatrix}.$$

Tehát a $\lambda_3 = 6$ sajátértékhez tartozó sajátalteret a $(2, 2, 3)$ vektor feszíti ki. $\square$

### A karakterisztikus egyenlet komplex gyökei

Ha valóselemű mátrixot vizsgálunk, megeshet, hogy a karakterisztikus egyenletnek vannak nem valós gyökei. Mivel a valós számok egyúttal komplexek is, a valós elemű mátrixot tekinthetjük komplex eleműnek is, ekkor viszont a karakterisztikus egyenlet komplex gyökeit is sajátértéknek tekinthetjük. Ebben az esetben a komplex sajátértékhez komplex elemű sajátvektor fog tartozni, amint azt már láthattuk a 8.10. példában.

**8.14. példa** (Komplex sajátértékek és komplex elemű sajátvektorok). *Határozzuk meg a komplex elemű*

$$\mathbf{A} = \begin{bmatrix} \tfrac{1}{2} & -\tfrac{\sqrt{3}}{2} \\ \tfrac{\sqrt{3}}{2} & \tfrac{1}{2} \end{bmatrix}$$

*mátrix sajátértékeit és sajátvektorait!*

*Megoldás.* A karakterisztikus egyenlet

$$\begin{vmatrix} \tfrac{1}{2} - \lambda & -\tfrac{\sqrt{3}}{2} \\ \tfrac{\sqrt{3}}{2} & \tfrac{1}{2} - \lambda \end{vmatrix} = \left(\tfrac{1}{2} - \lambda\right)^2 + \left(\tfrac{\sqrt{3}}{2}\right)^2 = \lambda^2 - \lambda + 1.$$

A $\lambda^2 - \lambda + 1 = 0$ egyenlet gyökei $\tfrac{1}{2} \pm \tfrac{\sqrt{3}}{2}\mathrm{i}$.

Először vizsgáljuk az $\tfrac{1}{2} + \tfrac{\sqrt{3}}{2}\mathrm{i}$ sajátértéket:

$$\mathbf{A} - \left(\tfrac{1}{2} + \tfrac{\sqrt{3}}{2}\mathrm{i}\right)\mathbf{I} = \begin{bmatrix} -\tfrac{\sqrt{3}}{2}\mathrm{i} & -\tfrac{\sqrt{3}}{2} \\ \tfrac{\sqrt{3}}{2} & -\tfrac{\sqrt{3}}{2}\mathrm{i} \end{bmatrix} \implies \begin{bmatrix} 1 & -\mathrm{i} \\ 0 & 0 \end{bmatrix} \implies x - \mathrm{i}y = 0.$$

Ennek az egyenlet(rendszer)nek a megoldása az $y = t$ paraméterválasztással

$$\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} \mathrm{i}t \\ t \end{bmatrix} = t \begin{bmatrix} \mathrm{i} \\ 1 \end{bmatrix}.$$

Tehát az $\tfrac{1}{2} + \tfrac{\sqrt{3}}{2}\mathrm{i}$ sajátértékhez tartozó sajátaltér egy bázisa az $(\mathrm{i}, 1)$ vektorból áll.

Az $\tfrac{1}{2} - \tfrac{\sqrt{3}}{2}\mathrm{i}$ sajátérték esetén

$$\mathbf{A} - \left(\tfrac{1}{2} - \tfrac{\sqrt{3}}{2}\mathrm{i}\right)\mathbf{I} = \begin{bmatrix} \tfrac{\sqrt{3}}{2}\mathrm{i} & -\tfrac{\sqrt{3}}{2} \\ \tfrac{\sqrt{3}}{2} & \tfrac{\sqrt{3}}{2}\mathrm{i} \end{bmatrix} \implies \begin{bmatrix} 1 & \mathrm{i} \\ 0 & 0 \end{bmatrix} \implies x + \mathrm{i}y = 0.$$

Ennek az egyenlet(rendszer)nek a megoldása az $y = t$ paraméterválasztással

$$\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} -\mathrm{i}t \\ t \end{bmatrix} = t \begin{bmatrix} -\mathrm{i} \\ 1 \end{bmatrix}.$$

Tehát az $\tfrac{1}{2} - \tfrac{\sqrt{3}}{2}\mathrm{i}$ sajátértékhez tartozó sajátalteret a $(-\mathrm{i}, 1)$ sajátvektor feszíti ki. $\square$

### A karakterisztikus egyenlet többszörös gyökei: az algebrai és a geometriai multiplicitás

Ha $\lambda$ a karakterisztikus egyenlet $k$-szoros gyöke, vagy más szóval $\lambda$ multiplicitása vagy *algebrai multiplicitása* $k$, akkor a $\lambda$-hoz tartozó sajátaltér $d$ dimenziójára $1 \leq d \leq k$. Ezt az állítást később bebizonyítjuk. A sajátaltér dimenzióját szokták a $\lambda$ sajátérték *geometriai multiplicitásának* nevezni. A 8.12. és a 8.13. példák olyan eseteket mutattak, amikor a sajátértékek algebrai és geometriai multiplicitása azonos, azaz minden sajátaltér épp annyi dimenziós, amennyi a gyök (algebrai) multiplicitása. A következő feladat azt mutatja, hogy a sajátaltér dimenziója kisebb is lehet.

**8.15. példa** (Sajátérték algebrai és geometriai multiplicitása). *Határozzuk meg az*

$$\mathbf{A} = \begin{bmatrix} 4 & 1 & 0 \\ 0 & 4 & 1 \\ 0 & 0 & 4 \end{bmatrix} \text{ és a } \mathbf{B} = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 2 & 1 \\ 0 & 0 & 0 & 2 \end{bmatrix}$$

*mátrix sajátértékeit és azok algebrai és geometriai multiplicitását!*

*Megoldás.* Mivel $\mathbf{A}$ háromszögmátrix, ezért karakterisztikus polinomja $(4 - \lambda)^3$, a 4 tehát háromszoros gyök, azaz algebrai multiplicitása 3. Mivel

$$\mathbf{A} - 4\mathbf{I} = \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{bmatrix}$$

ezért az $(\mathbf{A} - 4\mathbf{I})\mathbf{x} = \mathbf{0}$ egyenletrendszer az $y = 0$, $z = 0$ alakot ölti, aminek megoldása

$$\begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} t \\ 0 \\ 0 \end{bmatrix} = t \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}.$$

Eszerint $\mathbf{A}$ sajátaltere 1-dimenziós, melyet az $(1, 0, 0)$ vektor feszít ki. A $\lambda = 4$ sajátérték geometriai multiplicitása tehát 1.

A $\mathbf{B}$ mátrix karakterisztikus polinomja $(1 - \lambda)^2(2 - \lambda)^2$, ennek gyökei 1 és 2, és mindegyiknek kettő az algebrai multiplicitása. Meghatá-

rozzuk sajátaltereiket. $\lambda = 1$ esetén

$$\mathbf{B} - \lambda\mathbf{I} = \mathbf{B} - \mathbf{I} = \begin{bmatrix} 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 1 \end{bmatrix}.$$

Az ehhez tartozó homogén egyenletrendszer megoldása:

$$\begin{bmatrix} x \\ y \\ z \\ w \end{bmatrix} = \begin{bmatrix} s \\ t \\ 0 \\ 0 \end{bmatrix} = s\begin{bmatrix} 1 \\ 0 \\ 0 \\ 0 \end{bmatrix} + t\begin{bmatrix} 0 \\ 1 \\ 0 \\ 0 \end{bmatrix}.$$

Tehát az altér dimenziója 2, vagyis a geometriai multiplicitás megegyezik az algebraival. Ha $\lambda = 2$, akkor

$$\mathbf{B} - \lambda\mathbf{I} = \mathbf{B} - 2\mathbf{I} = \begin{bmatrix} -1 & 0 & 0 & 0 \\ 0 & -1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0 \end{bmatrix}.$$

Az ehhez tartozó homogén egyenletrendszer megoldása:

$$\begin{bmatrix} x \\ y \\ z \\ w \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ t \\ 0 \end{bmatrix} = t\begin{bmatrix} 0 \\ 0 \\ 1 \\ 0 \end{bmatrix}.$$

Tehát az altér dimenziója most 1, vagyis a geometriai multiplicitás kisebb, mint az algebrai. $\square$

### Sajátértékek és a mátrix hatványai

A mátrixok függvényeinek számolása szoros kapcsolatban van a sajátértékekkel. E témában első lépés a mátrixhatványok sajátértékeinek és sajátvektorainak meghatározása.

**8.16. tétel (Mátrix invertálhatósága és a 0 sajátérték).** *Az $\mathbf{A}$ mátrix pontosan akkor invertálható, ha a 0 nem sajátértéke.*

Bizonyítás. $\mathbf{A}$ pontosan akkor invertálható, ha $\det(\mathbf{A}) \neq 0$, de ez ekvivalens azzal, hogy $\det(\mathbf{A} - 0\mathbf{I}) \neq 0$, azaz 0 nem sajátértéke $\mathbf{A}$-nak. $\square$

**8.17. tétel (Mátrix hatványainak sajátértékei és sajátvektorai).** *Ha $\lambda$ az $\mathbf{A}$ mátrix egy sajátértéke és $\mathbf{x}$ egy hozzá tartozó sajátvektor, akkor bármely egész $n$ esetén $\lambda^n$ sajátértéke az $\mathbf{A}^n$ mátrixnak és $\mathbf{x}$ egy hozzá tartozó sajátvektor, amennyiben $\lambda^n$ és $\mathbf{A}^n$ is értelmezve van.*

Bizonyítás. $n = 0$ esetén $\lambda^0 = 1$ és $\mathbf{A}^0 = \mathbf{I}$, és ekkor minden vektor az 1 sajátértékhez tartozó sajátvektor, tehát ekkor az állítás igaz.

Pozitív $n$-re indukcióval igazoljuk az állítást: $n = 1$ esetén nyilván igaz, $n = 2$ esetén:

$$\mathbf{A}^2\mathbf{x} = \mathbf{A}(\mathbf{A}\mathbf{x}) = \mathbf{A}(\lambda\mathbf{x}) = \lambda(\mathbf{A}\mathbf{x}) = \lambda(\lambda\mathbf{x}) = \lambda^2\mathbf{x}.$$

Hasonlóan kapjuk, hogy ha $n = k - 1$ esetén már igaz az állítás, akkor $n = k$ esetén is:

$$\mathbf{A}^k\mathbf{x} = \mathbf{A}(\mathbf{A}^{k-1}\mathbf{x}) = \mathbf{A}(\lambda^{k-1}\mathbf{x}) = \lambda^{k-1}(\mathbf{A}\mathbf{x}) = \lambda^{k-1}(\lambda\mathbf{x}) = \lambda^k\mathbf{x}.$$

Ha $\mathbf{A}$ invertálható, akkor

$$\mathbf{A}\mathbf{x} = \lambda\mathbf{x}, \quad \text{amiből} \quad \frac{1}{\lambda}\mathbf{x} = \mathbf{A}^{-1}\mathbf{x}, \quad \text{azaz} \quad \lambda^{-1}\mathbf{x} = \mathbf{A}^{-1}\mathbf{x}.$$

Végül negatív kitevők esetén:

$$\mathbf{A}^k\mathbf{x} = \lambda^k\mathbf{x}, \quad \text{amiből} \quad \lambda^{-k}\mathbf{x} = \mathbf{A}^{-k}\mathbf{x}. \qquad \square$$

**8.18. tétel (Mátrix hatványainak hatása).** *Tegyük fel, hogy $\lambda_1, \lambda_2, \dots \lambda_k$ sajátértékei az $n \times n$-es $\mathbf{A}$ mátrixnak, és hogy $\mathbf{x}_1, \dots \mathbf{x}_k$ hozzájuk tartozó sajátvektorok. Ha egy $n$-dimenziós $\mathbf{v}$ vektor előáll e sajátvektorok lineáris kombinációjaként, azaz*

$$\mathbf{v} = c_1\mathbf{x}_1 + c_2\mathbf{x}_2 + \dots + c_k\mathbf{x}_k,$$

*akkor bármely egész $m$ esetén*

$$\mathbf{A}^m\mathbf{v} = c_1\lambda_1^m\mathbf{x}_1 + c_2\lambda_2^m\mathbf{x}_2 + \dots + c_k\lambda_k^m\mathbf{x}_k.$$

Bizonyítás. A bizonyítás magától értetődő, hisz

$$\begin{aligned} \mathbf{A}^m\mathbf{v} &= \mathbf{A}^m(c_1\mathbf{x}_1 + c_2\mathbf{x}_2 + \dots + c_k\mathbf{x}_k) \\ &= c_1\mathbf{A}^m\mathbf{x}_1 + c_2\mathbf{A}^m\mathbf{x}_2 + \dots + c_k\mathbf{A}^m\mathbf{x}_k \\ &= c_1\lambda_1^m\mathbf{x}_1 + c_2\lambda_2^m\mathbf{x}_2 + \dots + c_k\lambda_k^m\mathbf{x}_k. \qquad \square \end{aligned}$$

> *Sajnos az nem igaz, hogy minden mátrixhoz találunk $n$ független sajátvektort, amelyek lineáris kombinációjaként minden vektor felírható, így e tétel csak a sajátvektorok lineáris kombinációjaként előálló vektorokról szól! E tétel azt mutatja, fontos kérdés annak eldöntése, hogy egy mátrix sajátvektoraiból mikor alkotható bázis.*

### Speciális mátrixok sajátértékei

A mátrixok egyes különleges tulajdonságai a sajátértékek bizonyos tulajdonságát is befolyásolják.

**8.19. tétel (Speciális mátrixok sajátértéke).** *Legyen $\mathbf{A}$ egy $n$-edrendű valós mátrix. Ekkor*

a) *ha $\mathbf{A}$ szimmetrikus, akkor minden sajátértéke valós,*

b) *ha $\mathbf{A}$ ferdén szimmetrikus, akkor minden sajátértéke imaginárius,*

c) *ha $\mathbf{A}$ ortogonális, akkor minden sajátértékének 1 az abszolút értéke,*

d) *$\mathbf{A}$ pontosan akkor nilpotens, ha minden sajátértéke 0, azaz karakterisztikus polinomja $\lambda^n$ alakú.*

Bizonyítás. *a), b)* Legyen $(\lambda, \mathbf{x})$ egy $\mathbf{A}$-hoz tartozó sajátpár. Az $\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$ egyenlőség mindkét oldalát balról szorozzuk be $\mathbf{x}$ adjungáltjával (konjugáltjának transzponáltjával):

$$\mathbf{x}^{\mathsf{H}}\mathbf{A}\mathbf{x} = \mathbf{x}^{\mathsf{H}}\lambda\mathbf{x} = \lambda|\mathbf{x}|^2.$$

Vegyük mindkét oldal adjungáltját (konjugáltjának transzponáltját), kihasználva hogy mivel $\mathbf{A}$ valós, ezért $\mathbf{A}^{\mathsf{H}} = \mathbf{A}^{\mathsf{T}}$:

$$\mathbf{x}^{\mathsf{H}}\mathbf{A}^{\mathsf{T}}\mathbf{x} = \bar{\lambda}|\mathbf{x}|^2.$$

Legyen $\lambda = a + ib$. Ha $\mathbf{A}$ szimmetrikus, azaz $\mathbf{A}^{\mathsf{T}} = \mathbf{A}$, akkor $\lambda = \bar{\lambda}$, azaz $a + ib = a - ib$. Így $\lambda$ imaginárius része 0, tehát $\lambda$ valós. Ha $\mathbf{A}$ ferdén szimmetrikus, azaz $\mathbf{A}^{\mathsf{T}} = -\mathbf{A}$, akkor $a + ib = -a + ib$, azaz $\lambda$ valós része 0, így $\lambda$ imaginárius.

*c)* Ha $\mathbf{A}$ ortogonális, akkor bármely $\mathbf{x}$ vektorra $|\mathbf{A}\mathbf{x}| = |\mathbf{x}|$. Így ha $\mathbf{x}$ sajátvektor, akkor $|\mathbf{x}| = |\mathbf{A}\mathbf{x}| = |\lambda\mathbf{x}| = |\lambda||\mathbf{x}|$, amiből $|\lambda| = 1$.

*d)* Ha $\mathbf{A}^k = \mathbf{O}$, és $\lambda$ sajátértéke $\mathbf{A}$-nak, akkor $\lambda^k$ sajátértéke az $\mathbf{A}^k = \mathbf{O}$ mátrixnak, annak viszont csak a 0 sajátértéke, így $\mathbf{A}$-nak is minden sajátértéke 0. Az állítás megfordítása a Cayley–Hamilton-tételből következik, melyet hamarosan bizonyítunk. Eszerint minden mátrix kielégíti karakterisztikus polinomját, így ha a karakterisztikus polinom $\lambda^n = 0$, akkor $\mathbf{A}^n = \mathbf{O}$, vagyis $\mathbf{A}$ nilpotens. $\square$

Az előző tétel bizonyításából minimális változtatással megkapható a következő tétel bizonyítása is:

**8.20. tétel (Speciális komplex mátrixok sajátértékei).** *Ha az $n$-edrendű komplex $\mathbf{A}$ mátrix*

a) *önadjungált, akkor minden sajátértéke valós,*

b) *ferdén önadjungált, akkor minden sajátértéke imaginárius,*

c) *unitér, akkor minden sajátértékének 1 az abszolút értéke.*

### Feladatok

**8.1.** Igazoljuk a **??** tétel *c)* állítását, mely szerint ha egy $2 \times 2$-es szimmetrikus valós mátrixnak két különböző sajátértéke van, akkor sajátalterei merőlegesek egymásra.

**8.2.** Diagonalizálható-e az alábbi mátrix az $\mathbb{F}_7$ test fölött?

$$\begin{bmatrix} 1 & 2 & 3 \\ 0 & 3 & 4 \\ 3 & 3 & 0 \end{bmatrix}$$

## Hasonlóság, diagonalizálhatóság

> *Egy lineáris transzformáció sajátértékei és karakterisztikus polinomja megőrződnek a különféle bázisokban fölírt mátrixaira is. Olyan bázist keresünk, melyben mátrixa a legegyszerűbb alakú.*

### Lineáris transzformációk sajátértékei

A sajátérték, sajátvektor, sajátaltér fogalma természetes módon átvihető lineáris leképezésekre is.

**8.21. definíció (Lineáris transzformáció sajátértéke, sajátvektora).** *Azt mondjuk, hogy a $\lambda$ szám az $L$ lineáris transzformáció sajátértéke, ha létezik olyan nemnulla $\mathbf{x}$ vektor, melyre $L\mathbf{x} = \lambda\mathbf{x}$. Az ilyen $\mathbf{x}$ vektorokat az $L$ lineáris transzformáció $\lambda$ sajátértékhez tartozó sajátvektorainak nevezzük.*

Ha a lineáris transzformáció $\mathbb{R}^2 \to \mathbb{R}^2$ vagy $\mathbb{R}^3 \to \mathbb{R}^3$ leképezés, mely valamilyen egyszerű geometriai transzformációt valósít meg, akkor néha a transzformáció mátrixának ismerete nélkül is könnyen meghatározhatjuk a sajátértékeket és sajátvektorokat.

**8.22. példa (Lineáris transzformáció sajátértéke, sajátaltere).** *Adjuk meg – pusztán geometriai szemléletünkre hagyatkozva – az alábbi lineáris leképezések sajátértékeit és a hozzájuk tartozó sajátaltereket.*

a) *a sík vektorainak tükrözése egy egyenesre (vagy pontjainak tükrözése egy origón átmenő egyenesre);*

b) *a sík vektorainak merőleges vetítése egy egyenesre (vagy pontjainak merőleges vetítése egy origón átmenő egyenesre);*

c) *a tér vektorainak elforgatása egy egyenes körül a $\pi$ egész számú többszörösétől különböző szöggel;*

d) *a tér vektorainak merőleges vetítése egy síkra;*

e) *a tér vektorainak tükrözése egy síkra.*

Megoldás. Az előző fejezetben, így a 7.7. állításban bizonyítottakhoz hasonlóan látható, hogy mindegyik feladatbeli transzformáció lineáris.

*a)* Egy egyenesre való tükrözés esetén csak az egyenessel párhuzamos és rá merőleges vektorok mennek saját konstansszorosukba, mégpedig az egyenessel párhuzamos vektorok saját magukba, a rá merőlegesek a saját ellentettjükbe. Tehát e transzformációnak az 1 sajátértékhez tartozó sajátaltere az egyenessel párhuzamos vektorokból, a $-1$-hez tartozó sajátaltere a rá merőleges vektorokból áll. A pontokra vonatkozó állítás a pontokba mutató helyvektorokkal adódik.

*b)* A sík merőleges vetítése egy egyenesre – hasonlóan az előző esethez – helyben hagyja az egyenessel párhuzamos vektorokat, és a $\mathbf{0}$-vektorba viszi a rá merőlegeseket. Tehát az 1 sajátértékhez tartozó sajátaltér az egyenessel párhuzamos vektorokból, a 0-hoz tartozó sajátaltere a rá merőleges vektorokból áll.

*c)* A tér egyenes körüli elforgatása a forgástengellyel párhuzamos vektorokat önmagukba viszi, és ha a forgatás szöge különbözik $\pi$ egész számú többszöröseitől, semelyik másik vektort sem viszi a saját skalárszorosába. Így az egyetlen sajátérték az 1, amelyhez tartozó sajátaltér a forgástengellyel párhuzamos vektorokból áll.

*d)* A tér vektorainak merőleges vetítése egy síkra helyben hagyja a sík összes vektorát, míg a síkra merőleges vektorokat a $\mathbf{0}$ vektorba viszi, tehát a két sajátérték 1 és 0. Az 1-hez tartozó sajátaltér a sík vektoraiból, a 0-hoz tartozó sajátaltér a rá merőleges vektorokból áll.

*e)* E feladatot megoldottuk a 8.1. példában. A két sajátérték 1 és $-1$, az 1 sajátértékhez tartozó sajátaltér a sík vektoraiból, a $-1$-hoz tartozó sajátaltér a rá merőleges vektorokból áll. $\square$

Egy lineáris leképezéshez bázisonként más-más mátrix tartozhat, de a sajátértékeik mégis ugyanazok, hisz egy vektor képe csak a leképezéstől függ, nem a választott bázistól.

### Hasonló mátrixok sajátértékei

A 7.30. és a 7.31. tételekből tudjuk, hogy egy lineáris leképezéshez különböző bázisokban tartozó mátrixok hasonlóak. Ezen felül tudjuk azt is, hogy fontos mátrixtulajdonságok invariánsak a hasonlóságra. E paragrafusban e tulajdonságok körét fogjuk bővíteni.

**8.23. tétel (Sajátérékhez kapcsolódó invariánsok).** *Ha $\mathbf{A} \sim \mathbf{B}$, akkor $\mathbf{A}$ és $\mathbf{B}$ karakterisztikus polinomja azonos, így sajátértékei, azok algebrai, sőt geometriai multiplicitásai is megegyeznek.*

Bizonyítás. A bizonyítás során föltesszük, hogy valamely invertálható $\mathbf{C}$ mátrixszal $\mathbf{A} = \mathbf{C}^{-1}\mathbf{B}\mathbf{C}$. Ekkor

$$\begin{aligned} \mathbf{A} - \lambda\mathbf{I} &= \mathbf{C}^{-1}\mathbf{B}\mathbf{C} - \lambda\mathbf{C}^{-1}\mathbf{I}\mathbf{C}) \\ &= \mathbf{C}^{-1}(\mathbf{B}\mathbf{C} - \lambda\mathbf{I}\mathbf{C}) \\ &= \mathbf{C}^{-1}(\mathbf{B} - \lambda\mathbf{I})\mathbf{C}, \end{aligned}$$

azaz $\mathbf{A} - \lambda\mathbf{I}$ és $\mathbf{B} - \lambda\mathbf{I}$ is hasonlóak. A 7.31. tétel szerint hasonló mátrixok determinánsa megegyezik, így $\det(\mathbf{A} - \lambda\mathbf{I}) = \det(\mathbf{B} - \lambda\mathbf{I})$, azaz megegyeznek $\mathbf{A}$ és $\mathbf{B}$ karakterisztikus polinomjai is. Ez maga után vonja, hogy megegyeznek sajátértékeik, és azok (algebrai) multiplicitásai. A geometriai multiplicitások egyenlőségéhez elég belátni, hogy $\mathbf{A} - \lambda\mathbf{I}$ és $\mathbf{B} - \lambda\mathbf{I}$ nullterének dimenziója megegyezik, azt viszont ugyancsak a 7.31. tételben igazoltuk. $\square$

> *Ismerjük a polinom együtthatói és gyökei közti összefüggéseket, így a sajátértékeknek a polinom együtthatóit adó függvényei is invarián-*
sak. Például a harmadfokú esetben:

$$\begin{aligned} (\lambda_1 - \lambda)&(\lambda_2 - \lambda)(\lambda_3 - \lambda) \\ &= -\lambda^3 + (\lambda_1 + \lambda_2 + \lambda_3)\lambda^2 - (\lambda_1\lambda_2 + \lambda_2\lambda_3 + \lambda_3\lambda_1)\lambda + \lambda_1\lambda_2\lambda_3. \end{aligned}$$

Tehát $\lambda_1 + \lambda_2 + \lambda_3$, $\lambda_1\lambda_2 + \lambda_2\lambda_3 + \lambda_3\lambda_1$ és $\lambda_1\lambda_2\lambda_3$ invariáns mennyiségek. Általában egy $n$-edrendű $\mathbf{A}$ mátrixra invariánsak a sajátértékek következő függvényei:

$$\begin{aligned} e_1(\lambda_1, \lambda_2, \dots, \lambda_n) &= \sum_{1 \le i \le n} \lambda_i = \operatorname{trace}(\mathbf{A}), \\ e_2(\lambda_1, \lambda_2, \dots, \lambda_n) &= \sum_{1 \le i < j \le n} \lambda_i\lambda_j, \\ e_3(\lambda_1, \lambda_2, \dots, \lambda_n) &= \sum_{1 \le i < j < k \le n} \lambda_i\lambda_j\lambda_k, \\ &\vdots \\ e_n(\lambda_1, \lambda_2, \dots, \lambda_n) &= \lambda_1\lambda_2 \dots \lambda_n = \det(\mathbf{A}). \end{aligned}$$

Az itt felsorolt $e_1, e_2, \dots, e_n$ függvényeket *elemi szimmetrikus polinomoknak* nevezzük. A sajátértékek utolsónak említett függvénye a determináns, melynek invariáns voltát megmutattuk a 7.31. tételben. Hamarosan igazoljuk, hogy minden mátrix hasonló egy felső háromszögmátrixhoz, melynek főátlójában a sajátértékek vannak. Így hasonló mátrixok nyoma megegyezik, hisz a sajátértékek összegével egyenlő.

> *Fontos következménye e tételnek, hogy van értelme lineáris transzformáció karakterisztikus polinomjáról, beszélni (legalábbis véges dimenziós esetben, pl. $\mathbb{R}^n \to \mathbb{R}^n$ vagy $\mathbb{C}^n \to \mathbb{C}^n$ transzformációk esetén).*

### Mátrixok diagonalizálása és sajátfelbontása

Igen fontos kérdés, hogy egy adott lineáris leképezés sajátvektoraiból kiválasztható-e egy bázis. Ebben a bázisban ugyanis mátrixa – mint azt bizonyítani fogjuk – diagonális alakot ölt.

**8.24. definíció (Diagonalizálhatóság).** *Az $n \times n$-es $\mathbf{A}$ mátrix diagonalizálható, ha hasonló egy diagonális mátrixhoz, azaz ha létezik egy olyan diagonális $\boldsymbol{\Lambda}$ és egy invertálható $\mathbf{C}$ mátrix, hogy*

$$\boldsymbol{\Lambda} = \mathbf{C}^{-1}\mathbf{A}\mathbf{C}. \tag{8.4}$$

**8.25. tétel (Diagonalizálhatóság szükséges és elégséges feltétele).** *Az $n \times n$-es $\mathbf{A}$ mátrix pontosan akkor diagonalizálható, azaz pontosan akkor létezik olyan $\mathbf{C}$ mátrix, melyre $\mathbf{C}^{-1}\mathbf{A}\mathbf{C}$ diagonális, ha $\mathbf{A}$-nak van $n$ lineárisan független sajátvektora. Ekkor a diagonális mátrix az $\mathbf{A}$ sajátértékeiből, $\mathbf{C}$ a sajátvektoraiból áll.*

Bizonyítás. Ha $\mathbf{A}$ hasonló egy diagonális mátrixhoz, azaz van olyan $\mathbf{C}$ mátrix, hogy $\boldsymbol{\Lambda} = \mathbf{C}^{-1}\mathbf{A}\mathbf{C}$ diagonális, akkor $\mathbf{C}$-vel balról szorozva a $\mathbf{C}\boldsymbol{\Lambda} = \mathbf{A}\mathbf{C}$ egyenlőséget kapjuk. Ha $\mathbf{C} = [\mathbf{x}_1\ \mathbf{x}_2\ \dots\ \mathbf{x}_n]$ és $\boldsymbol{\Lambda} = \operatorname{diag}(\lambda_1, \lambda_2, \dots, \lambda_n)$, akkor

$$[\mathbf{x}_1\ \mathbf{x}_2\ \dots\ \mathbf{x}_n]\begin{bmatrix} \lambda_1 & 0 & \dots & 0 \\ 0 & \lambda_2 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \lambda_n \end{bmatrix} = \mathbf{A}[\mathbf{x}_1\ \mathbf{x}_2\ \dots\ \mathbf{x}_n]. \tag{8.5}$$

Itt a bal oldali mátrix $i$-edik oszlopa $\lambda_i\mathbf{x}_i$, a jobb oldali mátrixé $\mathbf{A}\mathbf{x}_i$. Ezek megegyeznek, azaz $\mathbf{A}\mathbf{x}_i = \lambda_i\mathbf{x}_i$, tehát $\mathbf{x}_i$ a $\lambda_i$ sajátértékhez tartozó sajátvektor. Mivel $\mathbf{C}$ invertálható, ezért oszlopvektorai függetlenek, ami bizonyítja az állításunk egyik felét. Tegyük most fel, hogy van $\mathbf{A}$-nak $n$ független sajátvektora. Képezzünk a sajátértékekből egy $\boldsymbol{\Lambda}$ diagonális mátrixot, úgy hogy a $\mathbf{C}$ mátrix $i$-edik oszlopába kerülő $\mathbf{x}_i$ vektorhoz tartozó $\lambda_i$ sajátérték a $\boldsymbol{\Lambda}$ mátrix $i$-edik oszlopába kerüljön. Mivel $\lambda_i\mathbf{x}_i = \mathbf{A}\mathbf{x}_i$, ezért fönnáll a (8.5) összefüggés, azaz $\boldsymbol{\Lambda}$ hasonló $\mathbf{A}$-hoz. $\square$

> *A $\boldsymbol{\Lambda} = \mathbf{C}^{-1}\mathbf{A}\mathbf{C}$ átírható*

$$\mathbf{A} = \mathbf{C}\boldsymbol{\Lambda}\mathbf{C}^{-1} \tag{8.6}$$

alakba, amit az $\mathbf{A}$ mátrix *sajátfelbontásának* nevezünk.

**8.26. példa (Mátrix diagonalizálása).** *Diagonalizálható-e a 8.12. példabeli*

$$\mathbf{A} = \begin{bmatrix} 0 & 1 & 1 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{bmatrix}$$

*mátrix?*

Megoldás. Az $\mathbf{A}$ mátrix sajátértékeit és sajátvektorait meghatároztuk a 8.12. példában. Mivel $\lambda_1 = 0$, $\lambda_2 = \lambda_3 = 2$, a hozzájuk tartozó sajátvektorok $(1, 0, 0)$, $(1/2, 1, 0)$ és $(1/2, 0, 1)$ és ezek a vektorok lineárisan függetlenek, ezért $\mathbf{A}$ hasonló a $\boldsymbol{\Lambda}$ diagonális mátrixhoz, ahol

$$\boldsymbol{\Lambda} = \begin{bmatrix} 0 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{bmatrix}, \quad \text{és} \quad \mathbf{C} = \begin{bmatrix} 1 & \frac{1}{2} & \frac{1}{2} \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}.$$

Ez könnyen igazolható a $\mathbf{C}\boldsymbol{\Lambda} = \mathbf{A}\mathbf{C}$ összefüggés ellenőrzésével:

$$\begin{bmatrix} 1 & \frac{1}{2} & \frac{1}{2} \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} 0 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{bmatrix} = \begin{bmatrix} 0 & 1 & 1 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{bmatrix} = \begin{bmatrix} 0 & 1 & 1 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{bmatrix}\begin{bmatrix} 1 & \frac{1}{2} & \frac{1}{2} \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}. \qquad \square$$

### Bal sajátvektorok és a sajátfelbontás diadikus alakja

Az $\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$ egyenlet helyett vizsgálhatjuk az $\mathbf{y}^{\mathsf{T}}\mathbf{A} = \lambda\mathbf{y}^{\mathsf{T}}$ egyenletet is.

Az $\mathbf{y}^{\mathsf{T}}\mathbf{A} = \lambda\mathbf{y}^{\mathsf{T}}$ egyenlet $\mathbf{y}^{\mathsf{T}} \neq \mathbf{0}^{\mathsf{T}}$ feltételnek megfelelő sorvektorait az $\mathbf{A}$ mátrix *bal sajátvektorainak* nevezzük. E megfogalmazásban a sajátvektorokat szokás jobb sajátvektoroknak is nevezni.

A fenti egyenletet transzponálva kapjuk, hogy

$$\mathbf{A}^{\mathsf{T}}\mathbf{y} = \lambda\mathbf{y},$$

vagyis a bal sajátvektorok a transzponált sajátvektorainak transzponáltjai. Mivel $\det(\mathbf{A} - \lambda\mathbf{I}) = \det((\mathbf{A} - \lambda\mathbf{I})^{\mathsf{T}}) = \det(\mathbf{A}^{\mathsf{T}} - \lambda\mathbf{I})$, azaz $\mathbf{A}$ és $\mathbf{A}^{\mathsf{T}}$ karakterisztikus polinomja azonos, ezért a bal és jobb sajátvektorokhoz tartozó sajátértékek azonosak. A bal és jobb sajátvektorok azonban általában nem azonosak (mátrixjelöléssel: nem transzponáltjai egymásnak).

Ha $\mathbf{A}$ diagonalizálható, azaz $\boldsymbol{\Lambda} = \mathbf{C}^{-1}\mathbf{A}\mathbf{C}$, akkor a 8.25. tételhez hasonlóan a $\boldsymbol{\Lambda}\mathbf{C}^{-1} = \mathbf{C}^{-1}\mathbf{A}$ mátrixegyenletből azt kapjuk, hogy $\mathbf{C}^{-1}$ sorvektorai $\mathbf{A}$ bal sajátvektorai. Jelölje ugyanis a $\mathbf{C}^{-1}$ mátrix $i$-edik sorvektorát $\mathbf{y}_i^{\mathsf{T}}$, ekkor

$$\begin{bmatrix} \lambda_1 & 0 & \dots & 0 \\ 0 & \lambda_2 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \lambda_n \end{bmatrix}\begin{bmatrix} \mathbf{y}_1^{\mathsf{T}} \\ \mathbf{y}_2^{\mathsf{T}} \\ \vdots \\ \mathbf{y}_n^{\mathsf{T}} \end{bmatrix} = \begin{bmatrix} \mathbf{y}_1^{\mathsf{T}} \\ \mathbf{y}_2^{\mathsf{T}} \\ \vdots \\ \mathbf{y}_n^{\mathsf{T}} \end{bmatrix}\mathbf{A} \tag{8.7}$$

tehát $\lambda_i\mathbf{y}_i^{\mathsf{T}} = \mathbf{y}_i^{\mathsf{T}}\mathbf{A}$ ($i = 1, 2, \dots, n$), vagyis $\mathbf{y}_i^{\mathsf{T}}$ valóban bal sajátvektor. Ekkor a sajátfelbontás azonnal diádok összegévé bontható:

$$\begin{aligned} \mathbf{A} = \mathbf{C}\boldsymbol{\Lambda}\mathbf{C}^{-1} &= [\mathbf{x}_1\ \mathbf{x}_2\ \dots\ \mathbf{x}_n]\begin{bmatrix} \lambda_1 & 0 & \dots & 0 \\ 0 & \lambda_2 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \lambda_n \end{bmatrix}\begin{bmatrix} \mathbf{y}_1^{\mathsf{T}} \\ \mathbf{y}_2^{\mathsf{T}} \\ \vdots \\ \mathbf{y}_n^{\mathsf{T}} \end{bmatrix} \\ &= \lambda_1\mathbf{x}_1\mathbf{y}_1^{\mathsf{T}} + \lambda_2\mathbf{x}_2\mathbf{y}_2^{\mathsf{T}} + \dots + \lambda_n\mathbf{x}_n\mathbf{y}_n^{\mathsf{T}} \end{aligned} \tag{8.8}$$

Ezt nevezzük a *sajátfelbontás diadikus alakjának.*

**8.27. példa (Sajátfelbontás diadikus alakja és a bal sajátvektorok).** *Határozzuk meg a 8.26. és a 8.12. példában szereplő*

$$\mathbf{A} = \begin{bmatrix} 0 & 1 & 1 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{bmatrix}$$

*mátrix bal sajátvektorait, sajátfelbontását és annak diadikus alakját.*

Megoldás. A bal sajátvektorok megegyeznek a transzponált sajátvektorainak transzponáltjaival. Így a bal sajátvektorok a szokásos technikával kiszámolhatók. Ha azonban a sajátfelbontást is kiszámoljuk,
a bal sajátvektorok kiolvashatók a $\mathbf{C}^{-1}$ mátrixból is. A 8.26. példában meghatároztuk a $\mathbf{C}$ mátrixot, annak inverzét kiszámolva kapjuk a sajátfelbontást:

$$\mathbf{A} = \mathbf{C}\boldsymbol{\Lambda}\mathbf{C}^{-1} = \begin{bmatrix} 1 & \frac{1}{2} & \frac{1}{2} \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}\begin{bmatrix} 0 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{bmatrix}\begin{bmatrix} 1 & -\frac{1}{2} & -\frac{1}{2} \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

Ebből a diádokká való átírás a következő:

$$\begin{aligned} \mathbf{A} &= 0\begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}\begin{bmatrix} 1 & -\frac{1}{2} & -\frac{1}{2} \end{bmatrix} + 2\begin{bmatrix} \frac{1}{2} \\ 1 \\ 0 \end{bmatrix}\begin{bmatrix} 0 & 1 & 0 \end{bmatrix} + 2\begin{bmatrix} \frac{1}{2} \\ 0 \\ 1 \end{bmatrix}\begin{bmatrix} 0 & 0 & 1 \end{bmatrix} \\ &= \begin{bmatrix} 0 & 1 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 0 \end{bmatrix} + \begin{bmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 2 \end{bmatrix}. \qquad \square \end{aligned}$$

### Diagonalizálható mátrixok polinomjai és a Cayley–Hamilton-tétel

Belátjuk, hogy ha egy mátrixot behelyettesítünk saját karakterisztikus polinomjába, nullmátrixot kapunk.

Ha $p(x) = c_n x^n + c_{n-1}x^{n-1} + \dots + c_1 x + c_0$ egy tetszőleges polinom, akkor értelmezhető e polinomnak egy tetszőleges négyzetes mátrixban fölvett értéke, vagyis értelmezhető négyzetes mátrix polinomja a következő képlettel:

$$p(\mathbf{A}) = c_n\mathbf{A}^n + c_{n-1}\mathbf{A}^{n-1} + \dots + c_1\mathbf{A} + c_0\mathbf{I}.$$

Ha az $\mathbf{A}$ mátrix diagonalizálható, és sajátfelbontása $\mathbf{A} = \mathbf{C}\boldsymbol{\Lambda}\mathbf{C}^{-1}$, akkor $\mathbf{A}^2 = \mathbf{C}\boldsymbol{\Lambda}\mathbf{C}^{-1}\mathbf{C}\boldsymbol{\Lambda}\mathbf{C}^{-1} = \mathbf{C}\boldsymbol{\Lambda}^2\mathbf{C}^{-1}$. Hasonlóképp tetszőleges nemnegatív $k$ egészre

$$\mathbf{A}^k = \mathbf{C}\boldsymbol{\Lambda}^k\mathbf{C}^{-1}.$$

Eszerint bármely $p(x)$ polinomra $p(\mathbf{A}) = \mathbf{C}p(\boldsymbol{\Lambda})\mathbf{C}^{-1}$. Másrészt bármely diagonális mátrix polinomja a diagonális elemek polinomjával számolható, azaz

$$p\left(\operatorname{diag}(\lambda_1, \lambda_2, \dots, \lambda_n)\right) = \operatorname{diag}\left(p(\lambda_1), p(\lambda_2), \dots, p(\lambda_n)\right).$$

Tehát bizonyítottuk a következő állítást:

**8.28. állítás (Diagonalizálható mátrix polinomja).** *Legyen $\mathbf{A} = \mathbf{C}\boldsymbol{\Lambda}\mathbf{C}^{-1}$, ahol $\boldsymbol{\Lambda} = \operatorname{diag}(\lambda_1, \lambda_2, \dots, \lambda_n)$, és $p(x)$ egy tetszőleges polinom. Ekkor*

$$p(\mathbf{A}) = \mathbf{C}\begin{bmatrix} p(\lambda_1) & 0 & \dots & 0 \\ 0 & p(\lambda_2) & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & p(\lambda_n) \end{bmatrix}\mathbf{C}^{-1}.$$

Jelölje most $\chi_{\mathbf{A}}$ az $\mathbf{A}$ mátrix karakterisztikus polinomját! Tehát ha $\lambda$ az $\mathbf{A}$ sajátértéke, akkor $\chi_{\mathbf{A}}(\lambda) = 0$. Innen azonnal adódik, hogy $\chi_{\mathbf{A}}(\mathbf{A}) = \mathbf{O}$, ugyanis

$$\begin{aligned} \chi_{\mathbf{A}}(\mathbf{A}) &= \mathbf{C}\,\chi_{\mathbf{A}}(\boldsymbol{\Lambda})\,\mathbf{C}^{-1} \\ &= \mathbf{C}\operatorname{diag}(\chi_{\mathbf{A}}(\lambda_1), \chi_{\mathbf{A}}(\lambda_2), \dots, \chi_{\mathbf{A}}(\lambda_n))\,\mathbf{C}^{-1} \\ &= \mathbf{O}. \end{aligned}$$

Ez az állítás nem csak diagonalizálható mátrixokra igaz, hanem általánosan is. Erre azonnal mutatunk egy egyszerű, de rossz bizonyítást! Mivel a karakterisztikus polinom $\chi_{\mathbf{A}}(\lambda) = \det(\mathbf{A} - \lambda\mathbf{I})$, gondolhatnánk, hogy akkor $\chi_{\mathbf{A}}(\mathbf{A}) = \det(\mathbf{A} - \mathbf{A}\mathbf{I}) = \det(\mathbf{O}) = 0$. Ez azonban hibás érvelés: $\lambda$ helyébe egy mátrixban mátrixokat helyettesítettünk, ráadásul a jobb oldalon skalár, a bal oldalon mátrix áll!

**8.29. tétel (Cayley–Hamilton-tétel).** *Ha $\mathbf{A}$ egy tetszőleges négyzetes mátrix, melynek karakterisztikus polinomja $\chi_{\mathbf{A}}$, akkor $\chi_{\mathbf{A}}(\mathbf{A}) = \mathbf{O}$.*

Bizonyítás. Legyen $\mathbf{B} = \mathbf{A} - \lambda\mathbf{I}$. Az $\mathbf{A}$ karakterisztikus polinomja így

$$\det\mathbf{B} = \chi_{\mathbf{A}}(\lambda) = (-1)^n\lambda^n + p_{n-1}\lambda^{n-1} + \dots + p_1\lambda + p_0. \tag{8.9}$$

$\mathbf{B}$ bármely eleméhez tartozó előjeles aldetermináns $\lambda$ egy legföljebb $n - 1$-edfokú polinomja, így léteznek olyan konstans elemű $\mathbf{C}_0, \mathbf{C}_1, \dots, \mathbf{C}_{n-1}$ mátrixok, hogy

$$\operatorname{adj}\mathbf{B} = \lambda^{n-1}\mathbf{C}_{n-1} + \dots + \lambda\mathbf{C}_1 + \mathbf{C}_0. \tag{8.10}$$

A mátrix inverzéről szóló 6.30. tételbeli (6.3) képlet szerint $\det(\mathbf{B})\mathbf{I} = \mathbf{B}\operatorname{adj}(\mathbf{B})$. Ennek jobb oldalán elvégezzük a (8.10) szerinti behelyettesítést:

$$\begin{aligned} \mathbf{B}\operatorname{adj}\mathbf{B} &= (\mathbf{A} - \lambda\mathbf{I})\left(\sum_{k=0}^{n-1} \lambda^k\mathbf{C}_k\right) \\ &= \mathbf{A}\mathbf{C}_0 + \left(\sum_{k=1}^{n-1} \lambda^k(\mathbf{A}\mathbf{C}_k - \mathbf{C}_{k-1})\right) - \lambda^n\mathbf{C}_{n-1}. \end{aligned}$$

Felírjuk a $\det(\mathbf{B})\mathbf{I} = \mathbf{B}\operatorname{adj}(\mathbf{B})$ egyenlőség bal és jobb oldalán álló együtthatók egyenlőségét, és mindegyiket beszorozzuk $\mathbf{A}$ megfelelő hatványával az alábbiak szerint:

$$\begin{alignedat}{2} (-1)^n\mathbf{I} &= -\mathbf{C}_{n-1} &\quad &\cdot \mathbf{A}^n \\ p_{n-1}\mathbf{I} &= \mathbf{A}\mathbf{C}_{n-1} - \mathbf{C}_{n-2} &\quad &\cdot \mathbf{A}^{n-1} \\ &\;\;\vdots & &\;\;\vdots \\ p_2\mathbf{I} &= \mathbf{A}\mathbf{C}_2 - \mathbf{C}_1 &\quad &\cdot \mathbf{A}^2 \\ p_1\mathbf{I} &= \mathbf{A}\mathbf{C}_1 - \mathbf{C}_0 &\quad &\cdot \mathbf{A} \\ p_0\mathbf{I} &= \mathbf{A}\mathbf{C}_0. & & \end{alignedat}$$

A beszorzás után kapott egyenlőségeket összeadva kapjuk, hogy

$$(-1)^n\mathbf{A}^n + p_{n-1}\mathbf{A}^{n-1} + \dots + p_1\mathbf{A} + p_0\mathbf{I} = \mathbf{O},$$

a jobb oldalon ugyanis teleszkópösszegszerűen minden tag kiesik. Ezzel tehát bizonyítottuk, hogy $\chi_{\mathbf{A}}(\mathbf{A}) = \mathbf{O}$. $\square$

### Különböző sajátértékek sajátalterei

A diagonalizálhatóság fontos voltára tekintettel érdemes további feltételeket gyűjteni, melyek könnyen ellenőrizhetők.

Több elégséges feltétel származtatható a következő tételből:

**8.30. tétel (Különböző sajátértékek sajátvektorai).** *Ha $\lambda_1, \lambda_2, \dots \lambda_k$ különböző sajátértékei az $n \times n$-es $\mathbf{A}$ mátrixnak, akkor a hozzájuk tartozó $\mathbf{x}_1, \mathbf{x}_2, \dots \mathbf{x}_k$ sajátvektorok lineárisan függetlenek.*

Bizonyítás. Indirekt módon bizonyítunk. Tegyük fel, hogy e vektorok lineárisan összefüggők. Ekkor van a vektorok közt olyan, amely csak a kisebb indexűek lineáris függvénye. Legyen ezek közül a legkisebb indexű $\mathbf{x}_i$, azaz

$$\mathbf{x}_i = c_1\mathbf{x}_1 + \dots + c_{i-1}\mathbf{x}_{i-1}, \tag{8.11}$$

de az $i$-nél kisebb indexű vektorok már lineárisan függetlenek. Szorozzuk meg az egyenlőség mindkét oldalát balról az $\mathbf{A}$ mátrixszal:

$$\mathbf{A}\mathbf{x}_i = \mathbf{A}(c_1\mathbf{x}_1 + \dots + c_{i-1}\mathbf{x}_{i-1}) = c_1\mathbf{A}\mathbf{x}_1 + \dots + c_{i-1}\mathbf{A}\mathbf{x}_{i-1},$$

majd használjuk ki, hogy e vektorok sajátvektorok:

$$\lambda_i\mathbf{x}_i = c_1\lambda_1\mathbf{x}_1 + \dots + c_{i-1}\lambda_{i-1}\mathbf{x}_{i-1}. \tag{8.12}$$

Ezután a (8.11) egyenlet mindkét oldalát $\lambda_i$-vel szorozva kapjuk, hogy

$$\lambda_i\mathbf{x}_i = c_1\lambda_i\mathbf{x}_1 + \dots + c_{i-1}\lambda_i\mathbf{x}_{i-1}. \tag{8.13}$$

Végül a (8.13) egyenletből a (8.12) egyenletet kivonva kapjuk, hogy

$$\mathbf{0} = c_1(\lambda_i - \lambda_1)\mathbf{x}_1 + \dots + c_{i-1}(\lambda_i - \lambda_{i-1})\mathbf{x}_{i-1},$$

Mivel az $\mathbf{x}_1, \dots, \mathbf{x}_{i-1}$ vektorok már lineárisan függetlenek, és a $\lambda_1, \dots, \lambda_i$ értékek különbözőek, ezért $c_1 = \dots = c_{i-1} = 0$. Eszerint

$$\mathbf{x}_i = 0\mathbf{x}_1 + \dots + 0\mathbf{x}_{i-1} = \mathbf{0},$$

ami ellentmondás, hisz $\mathbf{x}_i$ sajátvektor, tehát nem lehet a $\mathbf{0}$. Ez bizonyítja az indirekt feltevés helytelen voltát, azaz igazolja állításunkat. $\square$

> *Szokás úgy fogalmazni, hogy a különböző sajátértékekhez tartozó sajátalterek lineárisan függetlenek, hisz bárhogy választunk mindegyikükből egy-egy nemzérus vektort, azok lineárisan függetlenek lesznek.*

> *▶ Másik fontos következménye e tételnek, hogy ha különböző sajátértékekhez tartozó sajátalterek mindegyikéből lineárisan független vektorokat választunk, akkor még ezek egyesítése is lineárisan független lesz. Ha ugyanis lineárisan összefüggnének, akkor az egy altérbe eső vektorok lineáris kombinációit összevonva egyetlen vektorrá, minden sajátértékhez egy-egy sajátvektort kapnánk, melyek összefüggők lennének, ami a fenti tételnek ellentmond.*

> *▶ Speciálisan az is igaz, hogy különböző sajátértékekhez tartozó sajátalterek mindegyikéből egy bázist választva, azok egyesítése is lineárisan független vektorrendszert ad.*

**8.31. következmény (Különböző sajátértékek és a diagonalizálhatóság).** *Ha az $n$-edrendű $\mathbf{A}$ mátrixnak $n$ darab különböző sajátértéke van, akkor diagonalizálható.*

Bizonyítás. A 8.30. tétel szerint $n$ különböző sajátértékhez $n$ független sajátvektor tartozik, ami a 8.25. tétel szerint épp azt jelenti, hogy a mátrix diagonalizálható. $\square$

Végezetül fölsorolunk néhány mátrixosztályt, melyekbe tartozó mátrixok mindegyike egyformán viselkedik a diagonalizálhatóságra nézve:

a) Egy valós $n$-edrendű mátrix nem diagonalizálható a valós mátrixok körében, ha karakterisztikus egyenletének vannak nem valós gyökei, mert a diagonalizált alakban volnának nem valós számok. Például a

$$\begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$$

mátrix a valósok fölött nem diagonalizálható, de a komplexek fölött igen (ld. a ?? feladatot).

b) Nem diagonalizálhatók a nilpotens mátrixok, például a

$$\begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{bmatrix}$$

mátrix (?? feladat).

c) Diagonalizálható minden szimmetrikus mátrix, sőt, sajátvektoraiból ortonormált bázis is kiválasztható. Ezt hamarosan belátjuk (9.2. tétel).

**8.32. példa (Diagonalizálhatóság megállapítása).** *Döntsük el, hogy az alábbi mátrixok közül melyik diagonalizálható valós mátrixként!*

$$\mathbf{A} = \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}, \ \mathbf{B} = \begin{bmatrix} 1 & -4 \\ 4 & 1 \end{bmatrix}, \ \mathbf{C} = \begin{bmatrix} 1 & 2 & 3 \\ 0 & 4 & 5 \\ 0 & 0 & 6 \end{bmatrix}, \ \mathbf{D} = \begin{bmatrix} 6 & 9 \\ 9 & 6 \end{bmatrix}.$$

Megoldás. Az $\mathbf{A}$ mátrix nilpotens, mert $\mathbf{A}^2 = \mathbf{O}$, így nem diagonalizálható. A $\mathbf{B}$ mátrixnak vannak nem valós sajátértékei, így a valósok fölött nem diagonalizálható, de a komplexek fölött igen, mert két különböző sajátértéke van. A $\mathbf{C}$ mátrixnak különbözőek a sajátértékei, és mind valósak (1, 4, 6), így diagonalizálható. A $\mathbf{D}$ mátrix szimmetrikus, tehát diagonalizálható. $\square$

### Sajátértékek multiplicitása és a diagonalizálhatóság

A sajátértékek algebrai és geometriai multiplicitása, valamint a diagonalizálhatóság közt egyszerű, de fontos összefüggés van. Nevezetesen a geometriai multiplicitás sosem nagyobb az algebrainál, másrészt a diagonalizálhatóság ekvivalens azzal, hogy a geometriai és algebrai multiplicitások minden sajátérték esetén megegyeznek.

**8.33. tétel (Algebrai és geometriai multiplicitás kapcsolata).** *Egy mátrix valamely sajátértékének geometriai multiplicitása nem lehet nagyobb az algebrai multiplicitásánál.*

Bizonyítás. Az $\mathbf{A}$ mátrix egy $\mu$ sajátértékének geometriai multiplicitását jelölje $g$. Ez azt jelenti, hogy $\mathbf{A} - \mu\mathbf{I}$ nullterének $g$ a dimenziója. Legyen egy bázisa $\{\mathbf{x}_1, \mathbf{x}_2, \dots, \mathbf{x}_g\}$. Egészítsük ki e bázist az egész tér bázisává az $\mathbf{x}_{g+1}, \dots, \mathbf{x}_n$ vektorokkal. E független vektorokból képzett $\mathbf{C} = [\mathbf{x}_1 \ \dots \ \mathbf{x}_g | \mathbf{x}_{g+1} \ \dots \ \mathbf{x}_n]$ mátrix invertálható. Írjuk $\mathbf{C}$-t blokkmátrix alakba: $\mathbf{X}$ legyen az első $g$ oszlopból álló blokk, $\mathbf{Y}$ a maradék, azaz $\mathbf{C} = [\mathbf{X}|\mathbf{Y}]$. Mivel $\mathbf{X}$ oszlopai a $\mu$-höz tartozó sajátvektorok, ezért $\mathbf{A}\mathbf{X} = \mu\mathbf{X}$. A $\mathbf{C}^{-1}$ inverzet első $g$ sora után bontsuk blokkokra:

$$\mathbf{C}^{-1} = \left[\begin{array}{c} \mathbf{Z} \\ \hline \mathbf{W} \end{array}\right].$$

Írjuk fel az $\mathbf{I} = \mathbf{C}^{-1}\mathbf{C}$ összefüggést blokkmátrix alakban:

$$\begin{bmatrix} \mathbf{I}_g & \mathbf{O} \\ \mathbf{O} & \mathbf{I}_{n-g} \end{bmatrix} = \begin{bmatrix} \mathbf{Z} \\ \mathbf{W} \end{bmatrix} \begin{bmatrix} \mathbf{X} & \mathbf{Y} \end{bmatrix} = \begin{bmatrix} \mathbf{ZX} & \mathbf{ZY} \\ \mathbf{WX} & \mathbf{WY} \end{bmatrix}.$$

Innen leolvasható, hogy $\mathbf{WX} = \mathbf{O}$, $\mathbf{ZY} = \mathbf{O}$, $\mathbf{ZX} = \mathbf{I}_g$, $\mathbf{WY} = \mathbf{I}_{n-g}$. Ezeket fölhasználva kapjuk, hogy

$$\mathbf{C}^{-1}\mathbf{A}\mathbf{C} = \begin{bmatrix} \mathbf{Z} \\ \mathbf{W} \end{bmatrix} \mathbf{A} \begin{bmatrix} \mathbf{X} & \mathbf{Y} \end{bmatrix} = \begin{bmatrix} \mathbf{ZAX} & \mathbf{ZAY} \\ \mathbf{WAX} & \mathbf{WAY} \end{bmatrix} = \begin{bmatrix} \mu\mathbf{I}_g & \mathbf{ZAY} \\ \mathbf{O} & \mathbf{WAY} \end{bmatrix},$$

ugyanis $\mathbf{ZAX} = \mathbf{Z}\mu\mathbf{X} = \mu\mathbf{ZX} = \mu\mathbf{I}_g$, és $\mathbf{WAX} = \mu\mathbf{WX} = \mathbf{O}$. Az így kapott mátrix karakterisztikus polinomja

$$\begin{vmatrix} \mu\mathbf{I}_g - \lambda\mathbf{I}_g & \mathbf{ZAY} \\ \mathbf{O} & \mathbf{WAY} - \lambda\mathbf{I}_{n-g} \end{vmatrix},$$

ami a 6.32. tétel szerint $(\mu - \lambda)^g \det(\mathbf{WAY} - \lambda\mathbf{I}_{n-g})$. Ez pedig azt jelenti, hogy $\mathbf{C}^{-1}\mathbf{A}\mathbf{C}$ és ezzel együtt $\mathbf{A}$ karakterisztikus polinomjának $\mu$ legalább $g$-szeres algebrai multiplicitású gyöke. $\square$

**8.34. tétel (Diagonalizálhatóság és a geometriai multiplicitás).** *Egy $n$-edrendű négyzetes mátrix pontosan akkor diagonalizálható, ha a sajátértékeihez tartozó geometriai multiplicitások összege $n$.*

Bizonyítás. $(\Rightarrow)$ Ha a mátrix diagonalizálható, akkor a sajátvektoraiból álló bázis elemszáma épp a geometriai multiplicitások összege, hisz egyetlen sajátvektor sem lehet két sajátaltérben.

$(\Leftarrow)$ Ha a geometriai multiplicitások összege $n$, akkor minden sajátaltérből kiválasztva egy bázist, és véve ezek egyesítését, egy $n$ sajátvektorból álló független vektorrendszert kapunk (ld. a 8.30. tétel utáni megjegyzéseket). Így tehát a mátrix diagonalizálható. $\square$

> *▶ A tétel lineáris leképezésekre is kimondható: az $A : \mathbb{F}^n \to \mathbb{F}^n$ lineáris leképezés pontosan akkor diagonalizálható, ha sajátaltereinek dimenziójának összege $n$.*

**8.35. példa (Lineáris transzformáció diagonalizálása).** *Az alábbi lineáris leképezésekhez keressünk – pusztán geometriai szemléletünkre hagyatkozva – olyan bázist, melyben a mátrixuk diagonális. Használjuk fel a 8.22. példa eredményeit.*

a) *a sík vektorainak tükrözése egy egyenesre (vagy pontjainak tükrözése egy origón átmenő egyenesre);*

b) *a sík vektorainak merőleges vetítése egy egyenesre (vagy pontjainak merőleges vetítése egy origón átmenő egyenesre);*

c) *a tér vektorainak elforgatása egy egyenes körül a $\pi$ egész számú többszörösétől különböző szöggel;*

d) *a tér vektorainak merőleges vetítése egy síkra;*

e) *a tér vektorainak tükrözése egy síkra.*

Megoldás. A 8.22. példában meghatároztuk e leképezések sajátaltereit. Ezeket használjuk a következőkben.

a) Az egyenes – melyre tükrözünk – egyik irányvektora legyen $\mathbf{a}$, egy rá merőleges nemnulla vektor legyen $\mathbf{b}$. Ekkor $T\mathbf{a} = \mathbf{a}$ és $T\mathbf{b} = -\mathbf{b}$, ahol $T$ a tükröző lineáris leképezés. Ennek az $\{\mathbf{a}, \mathbf{b}\}$ bázisban a mátrixa

$$\begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}.$$

b) Az egyenes – melyre vetítünk – egyik irányvektora legyen $\mathbf{a}$, egy rá merőleges nemnulla vektor legyen $\mathbf{b}$. Ekkor $P\mathbf{a} = \mathbf{a}$ és $P\mathbf{b} = \mathbf{0}$, ahol $P$ a vetítő lineáris leképezés. Ennek az $\{\mathbf{a}, \mathbf{b}\}$ bázisban a mátrixa

$$\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}.$$

c) E leképezésnek nincs valós diagonális mátrixa, mert csak egyetlen valós sajátaltere van, és az csak 1-dimenziós: ez a tengely irányvektora által kifeszített altér. A forgástengelyre merőleges sík ugyan nem sajátaltér, de a forgatás önmagába viszi (az ilyet nevezik *invariáns altérnek*), így ennek bázisával egy „diagonálishoz közeli" alakot kaphatunk. Ha a forgás tengelyének egy irányvektora $\mathbf{a}$, a rá merőleges sík egy ortonormált bázisa $\{\mathbf{b}, \mathbf{c}\}$, ahol a $\mathbf{b}$ vektor $\pi/2$ radiánnal való elforgatottja épp $\mathbf{c}$, akkor az $\{\mathbf{a}, \mathbf{b}, \mathbf{c}\}$ bázisban a forgató $F$ leképezés mátrixa

$$\begin{bmatrix} 1 & 0 & 0 \\ 0 & \cos\alpha & -\sin\alpha \\ 0 & \sin\alpha & \cos\alpha \end{bmatrix},$$

ugyanis $F\mathbf{a} = \mathbf{a}$, $F\mathbf{b} = \cos\alpha\,\mathbf{b} + \sin\alpha\,\mathbf{c}$, $F\mathbf{c} = -\sin\alpha\,\mathbf{b} + \cos\alpha\,\mathbf{c}$.

d) A sík, melyre vetítünk az 1 sajátértékhez tartozik. Ha ebben választunk egy $\{\mathbf{a}, \mathbf{b}\}$ bázist, és $\mathbf{c}$ egy a síkra merőleges nemzérus vektor, akkor $T\mathbf{a} = \mathbf{a}$, $T\mathbf{b} = \mathbf{b}$, $T\mathbf{c} = \mathbf{0}$, így $T$ mátrixa

$$\begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{bmatrix}.$$

e) A sík, melyre tükrözünk az 1 sajátértékhez tartozik. Ha ebben választunk egy $\{\mathbf{a}, \mathbf{b}\}$ bázist, és $\mathbf{c}$ egy a síkra merőleges nemzérus vektor, akkor $T\mathbf{a} = \mathbf{a}$, $T\mathbf{b} = \mathbf{b}$, $T\mathbf{c} = -\mathbf{c}$, így $T$ mátrixa

$$\begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & -1 \end{bmatrix}. \qquad \square$$

### Diagonalizálható mátrixok spektrálfelbontása

A diagonalizálható $\mathbf{A}$ mátrix $\mathbf{A} = \mathbf{C}\boldsymbol{\Lambda}\mathbf{C}^{-1}$ alakja egy hasznos felbontását, az ún. spektrálfelbontását adja a mátrixnak.

Legyen $\mathbf{A}$ spektruma $\{\lambda_1, \lambda_2, \dots, \lambda_k\}$. Bontsuk fel a $\boldsymbol{\Lambda}$ mátrixot blokkdiagonális alakra úgy, hogy az azonos sajátértékek egy blokkba kerüljenek, majd ennek megfelelően bontsuk fel a $\mathbf{C}$ és $\mathbf{C}^{-1}$ mátrixot is blokkokra a következők szerint:

$$\boldsymbol{\Lambda} = \begin{bmatrix} \lambda_1\mathbf{I} & \mathbf{O} & \dots & \mathbf{O} \\ \mathbf{O} & \lambda_2\mathbf{I} & \dots & \mathbf{O} \\ \vdots & \vdots & \ddots & \vdots \\ \mathbf{O} & \mathbf{O} & \dots & \lambda_k\mathbf{I} \end{bmatrix}, \ \mathbf{C} = \begin{bmatrix} \mathbf{X}_1 & \mathbf{X}_2 & \dots & \mathbf{X}_k \end{bmatrix}, \ \mathbf{C}^{-1} = \begin{bmatrix} \mathbf{Y}_1^{\mathsf{T}} \\ \mathbf{Y}_2^{\mathsf{T}} \\ \vdots \\ \mathbf{Y}_k^{\mathsf{T}} \end{bmatrix}.$$

Írjuk föl e mátrixokkal az $\mathbf{A} = \mathbf{C}\boldsymbol{\Lambda}\mathbf{C}^{-1}$ felbontást, majd fejtsük ki a blokkműveleteket:

$$\begin{aligned} \mathbf{A} = \mathbf{C}\boldsymbol{\Lambda}\mathbf{C}^{-1} &= \begin{bmatrix} \mathbf{X}_1 & \mathbf{X}_2 & \dots & \mathbf{X}_k \end{bmatrix} \begin{bmatrix} \lambda_1\mathbf{I} & \mathbf{O} & \dots & \mathbf{O} \\ \mathbf{O} & \lambda_2\mathbf{I} & \dots & \mathbf{O} \\ \vdots & \vdots & \ddots & \vdots \\ \mathbf{O} & \mathbf{O} & \dots & \lambda_k\mathbf{I} \end{bmatrix} \begin{bmatrix} \mathbf{Y}_1^{\mathsf{T}} \\ \mathbf{Y}_2^{\mathsf{T}} \\ \vdots \\ \mathbf{Y}_k^{\mathsf{T}} \end{bmatrix} \\ &= \lambda_1\mathbf{X}_1\mathbf{Y}_1^{\mathsf{T}} + \lambda_2\mathbf{X}_2\mathbf{Y}_2^{\mathsf{T}} + \dots + \lambda_k\mathbf{X}_k\mathbf{Y}_k^{\mathsf{T}} \\ &= \lambda_1\mathbf{P}_1 + \lambda_2\mathbf{P}_2 + \dots + \lambda_k\mathbf{P}_k, \end{aligned}$$

ahol $\mathbf{P}_i = \mathbf{X}_i\mathbf{Y}_i^{\mathsf{T}}$ a $\lambda_i$ sajátértékhez tartozó mátrix, melyről a következőket fogjuk megmutatni:

**8.36. állítás (Diagonalizálható mátrixok spektrálfelbontása).** *Minden $\{\lambda_1, \lambda_2, \dots, \lambda_k\}$ spektrumú diagonalizálható $\mathbf{A}$ mátrix felírható*

$$\mathbf{A} = \lambda_1\mathbf{P}_1 + \lambda_2\mathbf{P}_2 + \dots + \lambda_k\mathbf{P}_k$$

*alakban, ahol*

a) *$\mathbf{P}_1 + \mathbf{P}_2 + \dots + \mathbf{P}_k = \mathbf{I}$,*

b) *$\mathbf{P}_i\mathbf{P}_j = \mathbf{O}$, ha $i \ne j$,*

c) *$\mathbf{P}_i$ az $\mathcal{N}(\mathbf{A} - \lambda_i\mathbf{I})$ sajátaltérre való $\mathcal{O}(\mathbf{A} - \lambda_i\mathbf{I})$ altér menti vetítés.*

> *▶ Valójában több is igaz, nevezetesen megmutatható, hogy a fenti három feltétel szükséges és elégséges feltétele annak, hogy $\mathbf{A}$ diagonalizálható legyen. E tételt a diagonalizálható mátrixok spektráltételének is nevezik.*

Bizonyítás. A fent konstruált felbontásról megmutatjuk, hogy eleget tesz a feltételeknek.

a) A $\mathbf{C}\mathbf{C}^{-1} = \mathbf{I}$ egyenlőséget blokkmátrixokként kezelve és fölhasználva a $\mathbf{P}_i = \mathbf{X}_i\mathbf{Y}_i^{\mathsf{T}}$ egyenlőségeket kapjuk, hogy $\mathbf{P}_1 + \mathbf{P}_2 + \dots + \mathbf{P}_k = \mathbf{I}$.

b) A $\mathbf{C}^{-1}\mathbf{C} = \mathbf{I}$ egyenlőség blokkmátrixalakja viszont az $\mathbf{Y}_i^{\mathsf{T}}\mathbf{X}_i = \mathbf{I}$, és az $\mathbf{Y}_i^{\mathsf{T}}\mathbf{X}_j = \mathbf{O}$ $(i \ne j)$ egyenlőségre vezet, ahonnan $\mathbf{P}_i\mathbf{P}_j = \mathbf{X}_i\mathbf{Y}_i^{\mathsf{T}}\mathbf{X}_j\mathbf{Y}_j^{\mathsf{T}} = \mathbf{O}$.

c) Az előzőekből adódik, hogy $\mathbf{P}_i^2 = \mathbf{P}_i$, ugyanis $\mathbf{P}_i^2 = \mathbf{X}_i(\mathbf{Y}_i^{\mathsf{T}}\mathbf{X}_i)\mathbf{Y}_i^{\mathsf{T}} = \mathbf{X}_i\mathbf{Y}_i^{\mathsf{T}} = \mathbf{P}_i$. Eszerint tehát $\mathbf{P}_i$ vetítés. Meg kell még mutatnunk, hogy $\mathcal{O}(\mathbf{P}_i) = \mathcal{N}(\mathbf{A} - \lambda_i\mathbf{I})$. Ehhez fölhasználjuk, hogy bármely $\mathbf{X}$, $\mathbf{Y}$ mátrixra $\mathcal{O}(\mathbf{XY}) \subseteq \mathcal{O}(\mathbf{X})$.

$$\mathcal{O}(\mathbf{P}_i) = \mathcal{O}(\mathbf{X}_i\mathbf{Y}_i^{\mathsf{T}}) \subseteq \mathcal{O}(\mathbf{X}_i) = \mathcal{O}(\mathbf{X}_i\mathbf{Y}_i^{\mathsf{T}}\mathbf{X}_i) = \mathcal{O}(\mathbf{P}_i\mathbf{X}_i) \subseteq \mathcal{O}(\mathbf{P}_i).$$

Tehát mindenütt egyenlőség áll fenn, és $\mathcal{O}(\mathbf{P}_i) = \mathcal{O}(\mathbf{X}_i) = \mathcal{N}(\mathbf{A} - \lambda_i\mathbf{I})$, hiszen $\mathcal{O}(\mathbf{X}_i)$ a $\lambda_i$-hez tartozó sajátaltér. Végül megmutatjuk, hogy a vetítés nulltere $\mathcal{N}(\mathbf{P}_i) = \mathcal{O}(\mathbf{A} - \lambda_i\mathbf{I})$. Kihasználva a fönt bizonyítottakat kapjuk, hogy

$$\mathbf{P}_i(\mathbf{A} - \lambda_i\mathbf{I}) = \mathbf{P}_i\left(\sum_{j=1}^{k} \lambda_j\mathbf{P}_j - \lambda_i\sum_{j=1}^{k}\mathbf{P}_j\right) = \sum_{j=1}^{k}(\lambda_j - \lambda_i)\mathbf{P}_i\mathbf{P}_j = \mathbf{O}.$$

Eszerint $\mathcal{O}(\mathbf{A} - \lambda_i\mathbf{I}) \subseteq \mathcal{N}(\mathbf{P}_i)$. Másrészt $\mathcal{N}(\mathbf{A} - \lambda_i\mathbf{I}) = \mathcal{O}(\mathbf{P}_i)$, így a dimenziótétel miatt $\dim\mathcal{O}(\mathbf{A} - \lambda_i\mathbf{I}) = \dim\mathcal{N}(\mathbf{P}_i)$, ami bizonyítja, hogy $\mathcal{N}(\mathbf{P}_i) = \mathcal{O}(\mathbf{A} - \lambda_i\mathbf{I})$. $\square$

**8.37. példa (Spektrálfelbontás).** *Határozzuk meg a 8.12., a 8.26. és a 8.27. példában szereplő*

$$\mathbf{A} = \begin{bmatrix} 0 & 1 & 1 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{bmatrix}$$

*mátrix spektrálfelbontását.*

Megoldás. E felbontáshoz felhasználhatjuk a 8.27. példában már kiszámolt sajátfelbontás diadikus alakját összevonva az azonos sajátértékhez tartozó diádokat, de kiemelve a sajátértéket:

$$\begin{aligned} \mathbf{A} &= 0\begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}\begin{bmatrix} 1 & -\tfrac{1}{2} & -\tfrac{1}{2} \end{bmatrix} + 2\begin{bmatrix} \tfrac{1}{2} \\ 1 \\ 0 \end{bmatrix}\begin{bmatrix} 0 & 1 & 0 \end{bmatrix} + 2\begin{bmatrix} \tfrac{1}{2} \\ 0 \\ 1 \end{bmatrix}\begin{bmatrix} 0 & 0 & 1 \end{bmatrix} \\ &= 0\begin{bmatrix} 1 & -\tfrac{1}{2} & -\tfrac{1}{2} \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix} + 2\begin{bmatrix} 0 & \tfrac{1}{2} & \tfrac{1}{2} \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}. \end{aligned}$$

Tehát

$$\mathbf{P}_1 = \begin{bmatrix} 1 & -\tfrac{1}{2} & -\tfrac{1}{2} \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}, \qquad \mathbf{P}_2 = \begin{bmatrix} 0 & \tfrac{1}{2} & \tfrac{1}{2} \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}.$$

$\mathbf{P}_1 + \mathbf{P}_2 = \mathbf{I}$, $\mathbf{P}_1\mathbf{P}_2 = \mathbf{O}$, e két mátrix valóban vetítő mátrix, hisz $\mathbf{P}_1^2 = \mathbf{P}_1$, $\mathbf{P}_2^2 = \mathbf{P}_2$, és láthatóan a sajátalterekre vetítenek (ld. 8.12.). $\square$

### Sajátalterek direkt összege

Eddigi eredményeinket úgy foglalhatjuk össze, hogy egy $n$-edrendű valós négyzetes mátrix pontosan akkor diagonalizálható, ha $\mathbb{R}^n$ minden nem zérus vektora egyértelműen felbomlik sajátvektorok összegére.

Az $\mathbb{R}^n$ teret többször is felbontottuk két altér direkt összegére. Most általánosítjuk a direkt összeg fogalmát.

**8.38. definíció (Alterek direkt összege).** *Legyenek $\mathcal{V}_1, \mathcal{V}_2, \dots, \mathcal{V}_k$ a $\mathcal{V}$ vektortér alterei. Azt mondjuk, hogy a $\mathcal{V}$ tér a $\mathcal{V}_1, \mathcal{V}_2, \dots, \mathcal{V}_k$ alterek direkt összege – jelölésben $\mathcal{V} = \mathcal{V}_1 \oplus \mathcal{V}_2 \oplus \dots \oplus \mathcal{V}_k$ –, ha $\mathcal{V}$ minden vektora egyértelműen felbomlik egy $\mathcal{V}_1$-, egy $\mathcal{V}_2$-... és egy $\mathcal{V}_k$-beli vektor összegére.*

A két altér direkt összegére kimondott és bizonyított 7.41. tétel természetes módon átvihető több altér összegére is.

**8.39. tétel (A direkt összeg tulajdonságai).** *Legyenek $\mathcal{V}_1, \mathcal{V}_2, \dots, \mathcal{V}_k$ az $n$-dimenziós $\mathcal{V}$ vektortér alterei. Az alábbi állítások ekvivalensek:*

a) *$\mathcal{V} = \mathcal{V}_1 \oplus \mathcal{V}_2 \oplus \dots \oplus \mathcal{V}_k$,*

b) *$\mathcal{V}_1, \mathcal{V}_2, \dots, \mathcal{V}_k$ alterek egy-egy bázisának egyesítése a $\mathcal{V}$ bázisát adja,*

c) *Mindegyik altér metszete a többi összegével csak a nullvektorból áll, és az alterek összege az egész tér, azaz*

&nbsp;&nbsp;&nbsp;&nbsp;1. *$\mathcal{V}_i \cap \left(\sum_{j \ne i} \mathcal{V}_j\right) = \{\mathbf{0}\}$, és*

&nbsp;&nbsp;&nbsp;&nbsp;2. *$\mathcal{V} = \mathcal{V}_1 + \mathcal{V}_2 + \dots + \mathcal{V}_k$.*

> *▶ Az $\mathbb{R}^3$ tér standard bázisvektorai által generált 1-dimenziós alterek legyenek $\mathcal{V}_1 = \operatorname{span}(\mathbf{i})$, $\mathcal{V}_2 = \operatorname{span}(\mathbf{j})$ és $\mathcal{V}_3 = \operatorname{span}(\mathbf{k})$. Ekkor $\mathbb{R}^3 = \mathcal{V}_1 \oplus \mathcal{V}_2 \oplus \mathcal{V}_3$.*

> *▶ A tétel c) pontjában nem elég annyit kikötni, hogy $\mathcal{V}_i \cap \mathcal{V}_j = \{\mathbf{0}\}$ legyen bármely $i \ne j$ esetén! Például legyen $\mathbb{R}^2$-ben $\mathbf{a}$ és $\mathbf{b}$ két független vektor és $\mathcal{V}_1 = \operatorname{span}(\mathbf{a})$, $\mathcal{V}_2 = \operatorname{span}(\mathbf{b})$ és $\mathcal{V}_3 = \operatorname{span}(\mathbf{a} + \mathbf{b})$. Ekkor e három altér páronkénti metszetei csak a zérusvektorból állnak, de $\mathbb{R}^2 \ne \mathcal{V}_1 \oplus \mathcal{V}_2 \oplus \mathcal{V}_3$, ugyanis $\mathbb{R}^2$ vektorai több különböző módon is felbomlanak e három altérbe eső vektor összegére. Például $\mathbf{0} + \mathbf{0} + (\mathbf{a} + \mathbf{b}) = \mathbf{a} + \mathbf{b} + \mathbf{0}$.*

> *▶ A 3-dimenziós tér egy síkjára való tükrözés sajátalterei a sík, melyre tükrözünk (ez a $\lambda = 1$ sajátértékhez tartozó altér) és a síkra merőleges egyenes (mely a $\lambda = -1$ sajátértékhez tartozik). $\mathbb{R}^3$ e két altér direkt összege, mivel $\mathbb{R}^3$ minden vektora egyértelműen felbomlik egy síkba eső és egy rá merőleges vektor összegére.*

A fentiek alapján a diagonalizálható mátrixok spektrálfelbontásáról szóló tétel egy gyönyörű megfogalmazáshoz vezet:

**8.40. tétel (Diagonalizálható mátrixok sajátalterei).** *Az $\mathbf{A} \in \mathbb{F}^{n \times n}$ mátrix pontosan akkor diagonalizálható, ha $\mathbb{F}^n$ előáll az $\mathbf{A}$ sajátaltereinek direkt összegeként.*

Bizonyítás. Ha $\mathbf{A}$ diagonalizálható, akkor létezik sajátvektoraiból álló bázis, mely a sajátalterek bázisainak egyesítése, tehát a 8.39. tétel b) pontja szerint $\mathbf{A}$ előáll sajáttereinek direkt összegeként.

Ha $\mathbb{F}^n$ előáll $\mathbf{A}$ sajátaltereinek direkt összegeként, akkor a sajátalterek dimenzióinak összege $n$, azaz a geometriai multiplicitások összege $n$, így a $\mathbf{A}$ mátrix diagonalizálható. $\square$

> *▶ A tétel nem csak mátrixokra, de lineáris leképezésekre is kimondható: egy $L : \mathbb{F}^n \to \mathbb{F}^n$ lineáris leképezés pontosan akkor diagonalizálható, ha $\mathbb{F}^n$ felbomlik $L$ sajátaltereinek direkt összegére.*

> *▶ A 3-dimenziós térben szemléltető példák a síkra való tükrözés, a síkra való vetítés, az egyenesre való tükrözés és az egyenesre való vetítés. Mindhárom példában $\mathbb{R}^3$ egy 2- és egy 1-dimenziós altér direkt összegére bomlik.*

> *▶ A valós 3-dimenziós tér egy egyenese körüli $\alpha$ szögű ($\alpha \ne k\pi$) elforgatás nem diagonalizálható, bár látjuk, hogy a forgatás tengelye és a forgatás közben helyben maradó sík két olyan altér, melyek direkt összege az egész tér.*

### Feladatok

## A sajátérték kiszámítása

*A sajátértékek karakterisztikus polinomból való kiszámítása igen számításigényes módszer. A sajátértékek becslésére, közelítésére használt – többnyire iteratív technikákat használó – algoritmusok sokkal hatékonyabbak. Ráadásul az ezekben használt elvek nem csak a numerikus számítások szempontjából fontosak.*

### Gersgorin-körök

Egy mátrix elemeiből nagyon egyszerű számításokkal becslések adhatók a sajátértékekre. A komplex számsík Gersgorin-körei például tartalmazzák az összes sajátértéket.

> *E körök Szemjon Aranovics Gersgorin orosz matematikus nevét viselik, mely a ciril betűkről való átírás miatt többféle alakban is előfordul, például Gershgorin, Gerschgorin, Geršgorin.*

Az $n \times n$-es valós vagy komplex $\mathbf{A}$ mátrix Gersgorin-körein az $a_{ii}$ közepű, és $r_i^{\text{sor}}$ sugarú $G_i^{\text{sor}}$, illetve $r_i^{\text{osz}}$ sugarú $G_i^{\text{osz}}$ köröket értjük ($i = 1, 2, \dots, n$), ahol

$$r_i^{\text{sor}} = \sum_{\substack{j=1 \\ j \ne i}}^{n} |a_{ij}|, \qquad r_i^{\text{osz}} = \sum_{\substack{j=1 \\ j \ne i}}^{n} |a_{ji}|. \tag{8.14}$$

Más szavakkal pl. a $G_i^{\text{sor}}$ kör középpontja $a_{ii}$, sugara az $\mathbf{A}$ mátrix $i$-edik sorában lévő, nem a főátlón lévő elemek abszolút értékeinek összege, míg $G_i^{\text{osz}}$ sugara az $i$-edik oszlop nem a főátlón lévő elemei abszolút értékének összege.

**8.41. példa (Gersgorin-körök).** *Rajzoljuk föl a*

$$\mathbf{A} = \begin{bmatrix} 4 & -4 & 0 \\ 2 & 0 & 0 \\ 0 & 1 & 8 \end{bmatrix}$$

*mátrix Gersgorin köreit!*

A megoldás a 8.3 ábrán látható.

| kör | középpont | sugár |
|---|---|---|
| $G_1^{\text{sor}}$ | $a_{11} = 4$ | $r_1^{\text{sor}} = \vert -4 \vert = 4$ |
| $G_2^{\text{sor}}$ | $a_{22} = 0$ | $r_2^{\text{sor}} = 2$ |
| $G_3^{\text{sor}}$ | $a_{33} = 8$ | $r_3^{\text{sor}} = 1$ |
| $G_1^{\text{osz}}$ | $a_{11} = 4$ | $r_1^{\text{osz}} = 2$ |
| $G_2^{\text{osz}}$ | $a_{22} = 0$ | $r_2^{\text{osz}} = \vert -4 \vert + \vert 1 \vert = 5$ |
| $G_3^{\text{osz}}$ | $a_{33} = 8$ | $r_3^{\text{osz}} = 0$ |

*8.3. ábra. Az $\mathbf{A}$ mátrix Gersgorin körei (fent a sorösszeg szerinti $G_1^{\text{sor}}, G_2^{\text{sor}}, G_3^{\text{sor}}$, lent az oszlopösszeg szerinti $G_1^{\text{osz}}, G_2^{\text{osz}}, G_3^{\text{osz}}$ körök).*

**8.42. tétel (Gersgorin-körök tulajdonságai).** *Legyen $\mathbf{A}$ valós vagy komplex $n \times n$-es mátrix. Ekkor igaz a következők:*

a) *Minden sajátérték benne van a $G_i^{\text{sor}}$ körök egyesítésében.*

b) *Minden sajátérték benne van a $G_i^{\text{osz}}$ körök egyesítésében.*

c) *Minden sajátérték benne van az előző két halmaz metszetében.*

d) *Ha a $G_i^{\text{sor}}$ körök egy $k$-elemű részhalmaza diszjunkt a maradék $n - k$ kör mindegyikétől, akkor uniójuk multiplicitással számolva pontosan $k$ sajátértéket tartalmaz.*

Bizonyítás. Jelölje $\sigma(\mathbf{A})$ az $\mathbf{A}$ mátrix spektrumát!

a) Az állítás szerint $\sigma(\mathbf{A}) \subseteq \bigcup_i G_i^{\text{sor}}$. A $\lambda$ sajátértékhez tartozó egyik sajátvektort osszuk el legnagyobb abszolút értékű koordinátájával. E vektort jelölje $\mathbf{x}$, legyen $x_i = 1$, tehát $|x_j| \le 1$ ($j = 1, 2, \dots, n$). Mivel $\lambda = \lambda x_i = [\lambda\mathbf{x}]_i = [\mathbf{Ax}]_i = \sum_j a_{ij}x_j$, így $\lambda - a_{ii} = \sum_{j \ne i} a_{ij}x_j$, tehát

$$|\lambda - a_{ii}| = \left|\sum_{\substack{j=1 \\ j \ne i}}^{n} a_{ij}x_j\right| \le \sum_{\substack{j=1 \\ j \ne i}}^{n} |a_{ij}||x_j| \le \sum_{\substack{j=1 \\ j \ne i}}^{n} |a_{ij}| = r_i^{\text{sor}}.$$

b) Mivel $\mathbf{A}$ és $\mathbf{A}^{\mathsf{T}}$ sajátértékei megegyeznek, ezért sorok helyett oszlopokkal ugyanezek a számítások megismételhetők.

c) A sajátértékek az előző két pontban megadott halmazok mindegyikében, így metszetükben is benne vannak.

d) Legyen $\mathbf{B}(r)$ az a mátrix, melynek elemeire $b_{ii} = a_{ii}$ és $b_{ij} = ra_{ij}$, ha $i \ne j$. Mátrixműveletekkel kifejezve

$$\mathbf{B}(r) = r\mathbf{A} + (1 - r)\operatorname{diag}(a_{11}, \dots, a_{nn}).$$

Eszerint $\mathbf{B}(0) = \operatorname{diag}(a_{11}, \dots, a_{nn})$, $\mathbf{B}(1) = \mathbf{A}$. Változzék $r$ folyamatosan 0-tól 1-ig. Eközben $\mathbf{B}(r)$ Gersgorin-körei 0-sugarúból indulva nőnek az $\mathbf{A}$ Gersgorin-köreiig, középpontjaik közben nem változnak. Mivel a sajátértékek a mátrix elemeinek folytonos függvényei, ezért az egymással fedésbe kerülő, de a többitől diszjunkt maradó $k$ számú kör által lefedett sajátértékek száma $k$ marad. $\square$

> *▶ Az nem igaz, hogy mindegyik Gersgorin-körben van legalább egy sajátérték. Például az $\mathbf{A} = \begin{bmatrix} 2 & -2 \\ 1 & 0 \end{bmatrix}$ mátrix sajátértékei $1 + \mathrm{i}$ és $1 - \mathrm{i}$. Ezek nem esnek bele sem a 0-középű, 1-sugarú sem a 2 középű 1-sugarú Gersgorin-körbe (ld. 8.4 a), b) ábra).*

> *▶ Az előző megjegyzésnek megfelelően nem lehet úgy keresni a sajátértékeket, hogy minden főátlóbeli elemhez a sor- és oszlopösszegek közül a kisebbiket választjuk. Helyesen a tétel a) és b) pontjaiban konstruált halmazok metszetét kell venni, ami például esetünkben a 8.4 c) ábrán látható.*

*8.4. ábra. Az $\mathbf{A}$ mátrix sajátértékeit tartalmazza a) a sorösszeg szerinti halmaz, b) az oszlopösszeg szerinti halmaz, c) a két halmaz metszete.*

**8.43. példa (Gersgorin-körök használata).** *Mutassuk meg a Gersgorin-körök segítségével, hogy a*

$$\mathbf{B} = \begin{bmatrix} 1 & 1 & 0 \\ 1 & 5 & 1 \\ 2 & 1 & 9 \end{bmatrix}$$

*mátrixnak minden sajátértéke valós.*

Megoldás. Mivel valós elemű mátrix komplex gyökei párosával egymás konjugáltjai, ezért ha egy Gersgorin-kör diszjunkt a többitől, abban csak egy valós sajátérték lehet. A $\mathbf{B}$ mátrix sorok szerinti Gersgorin-körei azt mutatják, hogy az 1-középű 1-sugarú körben egy valós sajátérték van. Mivel a másik két kör metszi egymást, ezért a másik két sajátérték még lehetne nem valós. Az oszlopok szerinti 9-középű 1-sugarú Geschgorin-kör viszont egy újabb valós sajátértéket garantál, így a harmadik is szükségképpen az. Ezt mutatja a sorok és oszlopok szerinti halmazok metszete is. A sajátértékek a $[0, 2]$, $[3, 7]$ és $[8, 10]$ intervallumokba esnek (ld. 8.5 ábra). $\square$

*8.5. ábra. A $\mathbf{B}$ mátrix sorösszeg és oszlopösszeg szerinti Gersgorin körei és ezek metszete. Utóbbi mutatja, hogy $\mathbf{B}$-nek három valós sajátértéke van.*

**8.44. állítás (Domináns főátlójú mátrix invertálhatósága).** *Bármely soronként domináns főátlójú valós vagy komplex mátrix invertálható. Hasonló igaz az oszloponként domináns főátlójú mátrixokra is.*

Bizonyítás. A 2.55. definíció szerint az $\mathbf{A}$ mátrix soronként domináns főátlójú, ha bármely főátlóbeli elemére $|a_{ii}| > \sum_{j \ne i} |a_{ij}|$. Ez épp azt jelenti, hogy $\mathbf{A}$ minden Gersgorin-körének középpontja messzebb van az origótól, mint amekkora a sugara, azaz a 0 szám egyik Gersgorin-körben sincs benne, tehát a 0 nem sajátérték, így $\mathbf{A}$ invertálható. $\square$

### Hatványmódszer

A sajátértékek a karakterisztikus polinom gyökei, a négynél magasabb fokú polinomokra viszont nem létezik megoldóképlet, így elvileg sem létezhet olyan módszer, mely a sajátértékeket mindig pontosan ki tudja számolni. A sajátértékek tetszőlegesen pontos közelítésére viszont hatékony algoritmusok léteznek. Ezek legalapvetőbbike a hatványmódszer.

Négyzetes mátrix egy sajátértékét *szigorúan dominánsnak* nevezzük, ha egyszeres multiplicitású, és abszolút értékben nagyobb az összes többinél. A hozzá tartozó sajátvektort és sajátalteret *szigorúan domináns sajátvektornak*, ill. *sajátaltérnek*, a belőlük alkotott párt *szigorúan domináns sajátpárnak* nevezzük.

A *hatványmódszer* megadja négyzetes mátrix szigorúan domináns sajátpárját.

Tegyük fel, hogy az $\mathbf{A} \in \mathbb{R}^{n \times n}$ mátrixnak $\lambda_1$ szigorúan domináns sajátértéke. Összes sajátértékét indexeljük úgy, hogy fennálljon az

$$|\lambda_1| > |\lambda_2| \geqslant \dots \geqslant |\lambda_m|$$

összefüggés. Legyen $\mathbf{v}_i$ egy $\lambda_i$-hez tartozó sajátvektor. Világos, hogy $\lambda_1$ valós, egyébként $\bar\lambda_1$ egy tőle különböző, de azonos abszolút értékű sajátérték lenne.

Legyen $\mathbf{x} \in \mathbb{R}^n$ egy olyan vektor, mely előáll a sajátvektorok lineáris kombinációjaként. Ha $\mathbf{A}$ diagonalizálható, akkor minden vektor ilyen. Legyen tehát $\mathbf{x} = c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dots + c_m\mathbf{v}_m$. Ekkor tetszőleges $k$ nemnegatív egészre

$$\begin{aligned} \mathbf{A}^k\mathbf{x} &= c_1\mathbf{A}^k\mathbf{v}_1 + c_2\mathbf{A}^k\mathbf{v}_2 + \dots + c_m\mathbf{A}^k\mathbf{v}_m \\ &= c_1\lambda_1^k\mathbf{v}_1 + c_2\lambda_2^k\mathbf{v}_2 + \dots + c_m\lambda_m^k\mathbf{v}_m. \end{aligned}$$

Ekkor $\lambda_1^k$-val való osztás után $k \to \infty$ esetén

$$\frac{1}{\lambda_1^k}\mathbf{A}^k\mathbf{x} = c_1\mathbf{v}_1 + c_2\left(\frac{\lambda_2}{\lambda_1}\right)^k\mathbf{v}_2 + \cdots + c_m\left(\frac{\lambda_m}{\lambda_1}\right)^k\mathbf{v}_m \to c_1\mathbf{v}_1,$$

ugyanis $(\lambda_i/\lambda_1)^k \to 0$, ha $i > 1$. Eszerint ha $c_1 \neq 0$, akkor $\mathbf{A}^k\mathbf{x}$ iránya tart a domináns sajátvektor irányához. Ezt egy példán szemléltetjük.

**8.45. példa.** *Tekintsük az*

$$\mathbf{A} = \begin{bmatrix} 1.7 & 0.9 \\ 0.9 & -0.7 \end{bmatrix}$$

*mátrixot! Határozzuk meg domináns sajátértékét és sajátalterét! Legyen* $\mathbf{x} = (0,1)$. *Számítsuk ki az* $\mathbf{A}^k\mathbf{x}$ *vektorokat néhány $k$ értékre szemléltetve irányuknak a domináns sajátvektor irányához való tartását!*

**Megoldás.** Az $\mathbf{A}$ karakterisztikus polinomja $\det(\mathbf{A} - x\mathbf{I}) = x^2 - x - 2$, ennek gyökei $\lambda_1 = 2$, $\lambda_2 = -1$, így a szigorúan domináns sajátérték $\lambda_1 = 2$. A hozzá tartozó sajátalteret a $(3,1)$ vektor feszíti ki. Egy programmal kiszámoltuk az $\mathbf{A}^k\mathbf{x}$ vektorokat a $k = 0, 1, \dots, 8$ értékekre:

| $k$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|---|
| $\mathbf{A}^k\mathbf{x}$ | $\begin{bmatrix}0\\1\end{bmatrix}$ | $\begin{bmatrix}0.9\\-0.7\end{bmatrix}$ | $\begin{bmatrix}0.9\\1.3\end{bmatrix}$ | $\begin{bmatrix}2.7\\-0.1\end{bmatrix}$ | $\begin{bmatrix}4.5\\2.5\end{bmatrix}$ | $\begin{bmatrix}9.9\\2.3\end{bmatrix}$ | $\begin{bmatrix}18.9\\7.3\end{bmatrix}$ | $\begin{bmatrix}38.7\\11.9\end{bmatrix}$ |

A vektorok hossza láthatóan végtelenhez konvergál, de az általuk kifeszített altereknek a domináns sajátaltérhez való tartása így is jól leolvasható a 8.6 ábráról.

*8.6. ábra. Az $\mathbf{A}^k\mathbf{x}$ vektorok ($k = 0,1,\dots,5$) jelölt irányaik, valamint ezek határértéke: az $\mathbf{A}$ mátrix $\lambda = 2$ sajátértékhez tartozó sajátaltere (pirossal színezve).*

Ha a domináns sajátérték abszolút értéke kisebb lenne 1-nél, akkor az $\mathbf{A}^k\mathbf{x}$ vektorsorozat a nullvektorhoz konvergálna. Ezért érdemes e sorozatot normálni, például osztani a hosszával. Még egyszerűbb elosztani a vektort a legnagyobb abszolút értékű koordinátájával. (Az így kapott vektorsorozat nem biztos, hogy konvergens lesz. Lehet, hogy pl. egy-egy koordinátahelyen alternáló divergens sorozatot kapunk. Ez elkerülhető, ha valamelyik nem nullához konvergáló koordináta előjelét egy esetleges $-1$-gyel szorzással mindig pozitívvá tesszük.) Jelölje $\mathbf{x}_k$ az $\mathbf{A}^k\mathbf{x}$ vektor legnagyobb koordinátájával való osztása után kapott vektort, és jelölje $i$ ennek a koordinátának az indexét. Tehát $[\mathbf{x}_k]_i = 1$. Az alábbi táblázat $\mathbf{x}_k$ és az $[\mathbf{A}\mathbf{x}_k]_i$ értékeket mutatja (utóbbi azt adja meg, hogy az 1 értékű koordináta hányszorosára változik az $\mathbf{A}$-val való szorzás után):

| $k$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|---|
| $\mathbf{x}_k$ | $\begin{bmatrix}0\\1\end{bmatrix}$ | $\begin{bmatrix}1.000\\-0.778\end{bmatrix}$ | $\begin{bmatrix}0.692\\1.000\end{bmatrix}$ | $\begin{bmatrix}1.000\\-0.037\end{bmatrix}$ | $\begin{bmatrix}1.000\\0.556\end{bmatrix}$ | $\begin{bmatrix}1.000\\0.232\end{bmatrix}$ | $\begin{bmatrix}1.000\\0.386\end{bmatrix}$ | $\begin{bmatrix}1.000\\0.307\end{bmatrix}$ |
| $[\mathbf{A}\mathbf{x}_k]_i$ | | $-0.700$ | $1.000$ | $-0.769$ | $1.667$ | $2.200$ | $1.909$ | $2.047$ |

Az $\mathbf{x}_k$ vektorokat szemlélteti a 8.7 ábra. Sorozatuk határértéke az $(1, 1/3)$ vektor, ami a domináns sajátvektor. Általánosan is igaz,

*8.7. ábra. Az $\mathbf{x}_k$ vektorok és a sajátaltér.*

hogy az így kapott $\mathbf{x}_k$ sorozat elemei a szigorúan domináns sajátvektor becslését adják. Egyúttal a domináns sajátérték becslésére is kiadódik. Könnyen bizonyítható ugyanis, hogy ha $\mathbf{x}_k$ $i$-edik koordinátája 1, akkor $\mathbf{A}\mathbf{x}_k$ $i$-edik koordinátája a $\lambda_1$ egy becslését adja, pontosabban e sorozat határértéke $\lambda_1$. E konkrét példában a fenti táblázat alsó sora épp ezt a sorozatot tartalmazza, mely a $\lambda_1 = 2$ értékhez konvergál. $\square$

**8.46. tétel (Hatványmódszer).** *Ha $\lambda_1$ az $\mathbf{A} \in \mathbb{R}^{n \times n}$ mátrix szigorúan domináns sajátértéke, akkor létezik olyan $\mathbf{x}_0$ vektor, hogy az $\mathbf{A}^k\mathbf{x}_0$ vektorok által kifeszített alterek sorozata a domináns sajátaltérhez konvergál.*

E tételt fentebb bizonyítottuk abban a speciális esetben, amikor $\mathbf{x}_0$ a sajátvektorok lineáris kombinációja. Valójában elég csak azt kikötni, hogy az $\mathbf{x}_0$ vektornak a domináns sajátvektor irányába eső összetevője ne a zérusvektor legyen.

## Feladatok

### Gersgorin-körök

**8.3.** Mutassuk meg, hogy az

$$\mathbf{A} = \begin{bmatrix} 2 & 0 & 5 & 0 \\ 0 & 9 & 0 & 1 \\ -1 & 0 & 2 & 0 \\ 0 & 1 & 0 & 6 \end{bmatrix}$$

mátrixnak legalább két sajátértéke valós.

**8.4.** Mutassuk meg, hogy az alábbi mátrixok minden sajátértéke valós! *a)* $\begin{bmatrix} 9 & 3 & 2 \\ 0 & 4 & 2 \\ 1 & 0 & 1 \end{bmatrix}$ *b)* $\begin{bmatrix} 9 & 0 & 3 & 0 \\ 0 & 4 & 0 & 1 \\ -3 & 0 & -1 & 0 \\ 2 & 1 & 2 & 0 \end{bmatrix}$

### Megoldások

**8.2.** Karakterisztikus polinomja $\lambda^3 + 3\lambda^2 + 3\lambda + 1$, azaz $\lambda = -1$ háromszoros algebrai multiplicitású sajátérték. A sajátalteret az $(1,2,5)$ vektor feszíti ki, azaz a geometriai multiplicitás 1. $1 \neq 3$, így a mátrix nem diagonalizálható.

**8.3.** A 9-középű 1-sugarú Gersgorin-körben csak 1 gyök lehet, így az valós. Mivel összesen 4 gyöke van és a komplexek párosan fordulnak elő, ezért kell még valós gyöknek lennie.

**8.4.** *a)* A sorokhoz tartozó Gersgorin-körök közül az 1-középű, 1-sugarú kör diszjunkt a többitől, így ebben a körben egy van egy valós sajátérték, az oszlopokhoz tartozók közül a 9-középű, 1-sugarú diszjunkt a többitől, így ebben a körben is van egy valós sajátérték, és ha két sajátérték valós, akkor a harmadik is. Az *a)*-beli mátrixban a sorokra, a *b)*-beliben az oszlopokra alkalmazva

# 9. Diagonalizálás ortonormált bázisban

Számtalan műszaki és tudományos probléma valós szimmetrikus mátrixok vizsgálatára vezet. Ezek szerencsés esetek, mert ilyenkor sajátvektorokból álló ortonormált bázis is található, és ez sok számítást egyszerűvé és numerikusan is stabilabbá tesz. A szimmetrikus mátrixok használatát a kvadratikus alakok jeírásán demonstráljuk.

## Ortogonális és unitér diagonalizálás

> *Egy mátrixot diagonalizálni azzal ekvivalens, hogy a hozzá tartozó mátrixleképezéshez egy olyan bázist találni, melyben mátrixa diagonális. Különösen szerencsés, ha e bázis még ortonormált is.*

### Valós mátrixok ortogonális diagonalizálása, valós spektráltétel

Megmutatjuk, hogy a valós mátrixok közt pontosan a szimmetrikusak azok, amelyekhez található olyan ortonormált bázis, melyben az diagonális alakot ölt.

A 8.25. tétel szerint a diagonalizálhatóság szükséges és elégséges feltétele, hogy létezzék a mátrix rendjével egyező számú független sajátvektora. Ha e vektorok ortonormált rendszert alkotnak, akkor a belőlük alkotott mátrix ortogonális mátrix.

**9.1. definíció (Ortogonális diagonalizálhatóság).** *Az $\mathbf{A}$ mátrix ortogonálisan diagonalizálható, ha találunk egy ortogonális $\mathbf{Q}$ és egy diagonális $\boldsymbol{\Lambda}$ mátrixot, hogy $\mathbf{Q}^{\mathsf{T}}\mathbf{A}\mathbf{Q} = \boldsymbol{\Lambda}$.*

> A definícióbeli egyenlőséggel ekvivalens alak: $\mathbf{A} = \mathbf{Q}\boldsymbol{\Lambda}\mathbf{Q}^{\mathsf{T}}$.

> Az nyilvánvaló, hogy ha egy mátrix ortogonálisan diagonalizálható, akkor szimmetrikus, ha ugyanis $\mathbf{A} = \mathbf{Q}\boldsymbol{\Lambda}\mathbf{Q}^{\mathsf{T}}$, akkor

$$\mathbf{A}^{\mathsf{T}} = (\mathbf{Q}\boldsymbol{\Lambda}\mathbf{Q}^{\mathsf{T}})^{\mathsf{T}} = (\mathbf{Q}^{\mathsf{T}})^{\mathsf{T}}\boldsymbol{\Lambda}^{\mathsf{T}}\mathbf{Q}^{\mathsf{T}} = \mathbf{Q}\boldsymbol{\Lambda}\mathbf{Q}^{\mathsf{T}} = \mathbf{A}.$$

E fejezet fő célja az állítás megfordításának igazolása. Ennek érdekében először megmutatjuk, hogy szimmetrikus mátrix sajátalterei nem csak függetlenek egymástól, de merőlegesek is egymásra.

**9.2. tétel (Szimmetrikus mátrix sajátalterei).** *Szimmetrikus mátrix bármely két különböző sajátaltere merőleges egymásra.*

**Bizonyítás.** Két különböző sajátaltér két különböző sajátértékhez tartozik. Megmutatjuk, hogy az egyik altér bármelyik vektora merőleges a másik altér bármely vektorára. Legyen tehát $(\lambda, \mathbf{x})$ és $(\mu, \mathbf{y})$ két sajátpár, ahol $\lambda \neq \mu$ két különböző sajátértéke $\mathbf{A}$-nak. Így $\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$ és $\mathbf{A}\mathbf{y} = \mu\mathbf{y}$. Ebből adódik, hogy

$$\lambda(\mathbf{x}^{\mathsf{T}}\mathbf{y}) = (\lambda\mathbf{x})^{\mathsf{T}}\mathbf{y} = (\mathbf{A}\mathbf{x})^{\mathsf{T}}\mathbf{y} = \mathbf{x}^{\mathsf{T}}\mathbf{A}^{\mathsf{T}}\mathbf{y} = \mathbf{x}^{\mathsf{T}}\mathbf{A}\mathbf{y} = \mathbf{x}^{\mathsf{T}}\mu\mathbf{y} = \mu(\mathbf{x}^{\mathsf{T}}\mathbf{y}).$$

Eszerint $(\lambda - \mu)(\mathbf{x}^{\mathsf{T}}\mathbf{y}) = 0$, de $\lambda - \mu \neq 0$, ezért $\mathbf{x}^{\mathsf{T}}\mathbf{y} = \mathbf{x} \cdot \mathbf{y} = 0$, azaz a két vektor merőleges egymásra. $\square$

**9.3. tétel (Valós spektráltétel).** *A valós $\mathbf{A}$ mátrix pontosan akkor diagonalizálható ortogonálisan, ha szimmetrikus.*

**Bizonyítás.** Az állítás egyik felét megmutattuk a 9.1. definíció után. A másik felét az $\mathbf{A}$ mátrix rendjére vonatkozó teljes indukcióval bizonyítjuk. $n = 1$ esetén nincs mit bizonyítani, ekkor $\mathbf{A}$ szimmetrikus és diagonális alakú. Tegyük fel, hogy minden legföljebb $n-1$-edrendű mátrixra igaz az állítás, azaz hogy ha szimmetrikus, akkor ortogonálisan hasonló egy diagonális mátrixhoz. Mivel $\mathbf{A}$ szimmetrikus, ezért minden sajátértéke valós. Legyen ezek egyike $\lambda$, a hozzá tartozó egyik egységnyi hosszú sajátvektor $\mathbf{u}_1$. Egészítsük ki $\mathbf{u}_1$-et a teljes tér egy $\{\mathbf{u}_1, \mathbf{u}_2, \dots, \mathbf{u}_n\}$ ONB-ává. Ekkor a $\mathbf{Q}_0 = [\mathbf{u}_1\ \mathbf{u}_2\ \dots\ \mathbf{u}_n]$ mátrix ortogonális, és

$$\begin{aligned}
\mathbf{Q}_0^{\mathsf{T}}\mathbf{A}\mathbf{Q}_0 &= \begin{bmatrix} \mathbf{u}_1^{\mathsf{T}} \\ \mathbf{u}_2^{\mathsf{T}} \\ \vdots \\ \mathbf{u}_n^{\mathsf{T}} \end{bmatrix} \mathbf{A} \begin{bmatrix} \mathbf{u}_1 & \mathbf{u}_2 & \dots & \mathbf{u}_n \end{bmatrix} = \begin{bmatrix} \mathbf{u}_1^{\mathsf{T}} \\ \mathbf{u}_2^{\mathsf{T}} \\ \vdots \\ \mathbf{u}_n^{\mathsf{T}} \end{bmatrix} \begin{bmatrix} \mathbf{A}\mathbf{u}_1 & \mathbf{A}\mathbf{u}_2 & \dots & \mathbf{A}\mathbf{u}_n \end{bmatrix} \\
&= \begin{bmatrix} \mathbf{u}_1^{\mathsf{T}} \\ \mathbf{u}_2^{\mathsf{T}} \\ \vdots \\ \mathbf{u}_n^{\mathsf{T}} \end{bmatrix} \begin{bmatrix} \lambda\mathbf{u}_1 & \mathbf{A}\mathbf{u}_2 & \dots & \mathbf{A}\mathbf{u}_n \end{bmatrix} = \begin{bmatrix} \lambda & * \\ \mathbf{0} & \mathbf{A}_1 \end{bmatrix} = \mathbf{B},
\end{aligned} \tag{9.1}$$

ugyanis $\{\mathbf{u}_1, \mathbf{u}_2, \dots, \mathbf{u}_n\}$ ONB, így $\mathbf{u}_1^{\mathsf{T}}(\lambda\mathbf{u}_1) = \lambda(\mathbf{u}_1^{\mathsf{T}}\mathbf{u}_1) = \lambda$, és $i > 1$ esetén $\mathbf{u}_i^{\mathsf{T}}(\lambda\mathbf{u}_1) = \lambda(\mathbf{u}_i^{\mathsf{T}}\mathbf{u}_1) = 0$. A $\mathbf{B}$ blokkmátrixban tehát $\mathbf{A}_1$ egy $(n-1) \times (n-1)$-es valós mátrix. Másrészt

$$\mathbf{B}^{\mathsf{T}} = (\mathbf{Q}_0^{\mathsf{T}}\mathbf{A}\mathbf{Q}_0)^{\mathsf{T}} = \mathbf{Q}_0^{\mathsf{T}}\mathbf{A}^{\mathsf{T}}\mathbf{Q}_0 = \mathbf{Q}_0^{\mathsf{T}}\mathbf{A}\mathbf{Q}_0 = \mathbf{B},$$

azaz $\mathbf{B} = \begin{bmatrix} \lambda & * \\ \mathbf{0} & \mathbf{A}_1 \end{bmatrix}$ szimmetrikus, tehát $\mathbf{B} = \begin{bmatrix} \lambda & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{A}_1 \end{bmatrix}$, és $\mathbf{A}_1$ is szimmetrikus!

Mivel $\mathbf{B}$ hasonló $\mathbf{A}$-hoz, ezért sajátértékeik megegyeznek, tehát $\mathbf{A}_1$ minden sajátértéke $\mathbf{A}$-nak is sajátértéke. A teljes indukció miatt viszont $\mathbf{A}_1$-hez létezik olyan $\mathbf{Q}_1$ ortogonális és $\boldsymbol{\Lambda}_1$ diagonális mátrix, hogy $\mathbf{A}_1 = \mathbf{Q}_1\boldsymbol{\Lambda}_1\mathbf{Q}_1^{\mathsf{T}}$. Ekkor viszont a $\mathbf{Q} = \mathbf{Q}_0\begin{bmatrix} 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1 \end{bmatrix}$ mátrix ortogonális, hisz két ortogonális mátrix szorzata, és $\mathbf{A}$-t hasonlóvá teszi egy diagonális mátrixhoz:

$$\begin{aligned}
\mathbf{Q}^{\mathsf{T}}\mathbf{A}\mathbf{Q} &= \left(\mathbf{Q}_0\begin{bmatrix} 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1 \end{bmatrix}\right)^{\mathsf{T}} \mathbf{A} \left(\mathbf{Q}_0\begin{bmatrix} 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1 \end{bmatrix}\right) = \begin{bmatrix} 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1 \end{bmatrix}^{\mathsf{T}} \mathbf{Q}_0^{\mathsf{T}}\mathbf{A}\mathbf{Q}_0 \begin{bmatrix} 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1 \end{bmatrix} \\
&= \begin{bmatrix} 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1 \end{bmatrix}^{\mathsf{T}} \begin{bmatrix} \lambda & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{A}_1 \end{bmatrix} \begin{bmatrix} 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1 \end{bmatrix} \\
&= \begin{bmatrix} \lambda & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1^{\mathsf{T}}\mathbf{A}_1\mathbf{Q}_1 \end{bmatrix} = \begin{bmatrix} \lambda & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \boldsymbol{\Lambda}_1 \end{bmatrix}.
\end{aligned}$$

Ezzel bizonyítottuk, hogy a szimmetrikus $\mathbf{A}$ mátrix is ortogonálisan diagonalizálható. $\square$

> A tétel bizonyítása egyúttal ötletet ad a diagonalizálás megvalósításához is. Határozzuk meg az $\mathbf{A}$ mátrix egy $\lambda_1$ sajátértékét, és állítsuk elő a $\mathbf{Q}_0$ és az $\begin{bmatrix} \lambda & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{A}_1 \end{bmatrix}$ mátrixokat. A következő lépésben az $\mathbf{A}_1$-ből egy $\lambda_2$ sajátértékét használva a $\mathbf{Q}_1$, majd az $\begin{bmatrix} 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1 \end{bmatrix}$ és az $\begin{bmatrix} \lambda_1 & 0 & \mathbf{0}^{\mathsf{T}} \\ 0 & \lambda_1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{0} & \mathbf{A}_2 \end{bmatrix}$ mátrixokat. Hasonlóan folytatva az $(n-i) \times (n-i)$ méretű $\mathbf{A}_i$ mátrixok sorozatából a $\mathbf{Q}_i$ mátrixok sorozatát ($i = 1, 2, \dots, n-2$), majd azokból az ortogonális
> $$\mathbf{Q} = \mathbf{Q}_0\begin{bmatrix} 1 & \mathbf{0} \\ \mathbf{0} & \mathbf{Q}_1 \end{bmatrix}\begin{bmatrix} 1 & 0 & \mathbf{0}^{\mathsf{T}} \\ 0 & 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{0} & \mathbf{Q}_2 \end{bmatrix}\begin{bmatrix} 1 & 0 & 0 & \mathbf{0}^{\mathsf{T}} \\ 0 & 1 & 0 & \mathbf{0}^{\mathsf{T}} \\ 0 & 0 & 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{0} & \mathbf{0} & \mathbf{Q}_3 \end{bmatrix} \cdots$$
> mátrixot kapjuk.

> A bizonyításban szereplő (9.1) képlet, azaz hogy $\mathbf{Q}_0^{\mathsf{T}}\mathbf{A}\mathbf{Q}_0 = \begin{bmatrix} \lambda & * \\ \mathbf{0} & \mathbf{A}_1 \end{bmatrix}$ minden számolás nélkül is látható, hisz a jobb oldalon álló mátrix az $\mathbf{A}$ mátrix alakja a $\mathbf{Q}_0$ oszlopai alkotta bázisban, az első oszlopában tehát $\mathbf{u}_1$ képe áll, de $\mathbf{u}_1$ koordinátás alakja e bázisban $(1, 0, \dots, 0)$. Mivel ez sajátvektor, képe $(\lambda, 0, \dots, 0)$.

**9.4. példa (Mátrix ortogonális diagonalizálása).** *Diagonalizáljuk az alábbi mátrixot ortogonálisan!*

$$\begin{bmatrix} 3 & 1 & 1 \\ 1 & 3 & 1 \\ 1 & 1 & 3 \end{bmatrix}.$$

*Határozzuk meg az áttérés mátrixát a standardról arra a bázisra, melyben e mátrix diagonális alakot vesz fel!*

**Megoldás.** A karakterisztikus polinom:

$$\begin{vmatrix} 3-\lambda & 1 & 1 \\ 1 & 3-\lambda & 1 \\ 1 & 1 & 3-\lambda \end{vmatrix} = -\lambda^3 + 9\lambda^2 - 24\lambda + 20,$$

melynek gyökei 2, 2 és 5. Tehát a diagonális alak $\operatorname{diag}(2,2,5)$. Az áttérés mátrixához szükségünk lesz a sajátvektorokra. $\lambda = 2$ esetén:

$$\begin{bmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{bmatrix} \implies \begin{bmatrix} 1 & 1 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix},$$

az $x + y + z = 0$ egyenletrendszer megoldása pedig $(x, y, z) = (-1, 1, 0)s + (-1, 0, 1)t$. Ennek az altérnek egy bázisa tehát a $(-1, 1, 0)$ és a $(-1, 0, 1)$ vektorokból áll. A $\lambda = 5$ esetén:

$$\begin{bmatrix} -2 & 1 & 1 \\ 1 & -2 & 1 \\ 1 & 1 & -2 \end{bmatrix} \implies \begin{bmatrix} 1 & -2 & 1 \\ 0 & 1 & -1 \\ 0 & 0 & 0 \end{bmatrix},$$

amely egyenletrendszer megoldása $(x, y, z) = (1, 1, 1)t$. A két különböző sajáttérből való vektorok merőlegesek egymásra, de a $\lambda = 2$-höz tartozó sajátaltér két sajátvektora nem alkot ortogonális rendszert, ezért az általuk kifeszített térben új bázist keresünk, egy ortonormáltat. Legyen az $\mathbf{a} = (-1, 1, 0)/\sqrt{2}$ vektor az egyik, ekkor

$$(-1, 0, 1) - \left((-1, 0, 1) \cdot \frac{(-1, 1, 0)}{\sqrt{2}}\right)\frac{(-1, 1, 0)}{\sqrt{2}} = \left(-\frac{1}{2}, -\frac{1}{2}, 1\right).$$

Ezt normálva kapjuk a $\mathbf{b} = \left(-\frac{1}{\sqrt{6}}, -\frac{1}{\sqrt{6}}, \frac{\sqrt{2}}{\sqrt{3}}\right)$ vektort, végül a $\lambda = 5$-höz tartozó normált vektor $\mathbf{c} = \frac{1}{\sqrt{3}}(1, 1, 1)$. A standard bázisra való áttérés mátrixa tehát az $[\mathbf{a}|\mathbf{b}|\mathbf{c}]$ mátrix. Ennek inverze lesz a standard bázisról való áttérés mátrixa, mely – ortogonális mátrixról lévén szó – a transzponáltja, azaz

$$\begin{bmatrix} -\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \\ -\frac{1}{\sqrt{6}} & -\frac{1}{\sqrt{6}} & \frac{\sqrt{2}}{\sqrt{3}} \\ \frac{1}{\sqrt{3}} & \frac{1}{\sqrt{3}} & \frac{1}{\sqrt{3}} \end{bmatrix}.$$

$\square$

### Schur-felbontás[^p399_1]

Olyan ortonormált bázist találni, melyben egy mátrix egyszerűbb alakú, akkor is fontos, ha az az alak nem a diagonális. Ilyen például a felsőháromszög-mátrix-alak.

A valós spektráltétel bizonyításának csekély változtatása egy másik hasznos tételre vezet. Az ott konstruált $\mathbf{B}$ mátrixban ugyanis elimináltuk az $\mathbf{A}$ első oszlopának főátló alatti elemeit. Ezt a lépést ismételve elérhető, hogy a mátrixot felső háromszög-alakra hozzuk.

**9.5. tétel (Schur-felbontás).**
*a) Minden valós négyzetes $\mathbf{A}$ mátrix, melynek összes sajátértéke valós, ortogonálisan hasonló egy $\mathbf{T}$ felső háromszögmátrixhoz, azaz van olyan $\mathbf{Q}$ ortogonális mátrix, hogy $\mathbf{A} = \mathbf{Q}\mathbf{T}\mathbf{Q}^{\mathsf{T}}$.*
*b) Minden komplex négyzetes $\mathbf{A}$ mátrix unitéren hasonló egy $\mathbf{T}$ felső háromszögmátrixhoz, azaz van olyan $\mathbf{U}$ unitér mátrix, hogy $\mathbf{A} = \mathbf{U}\mathbf{T}\mathbf{U}^{\mathsf{H}}$.*

> A tétel valós és komplex mátrixokra vonatkozó része közt csak annyi a különbség, hogy valós mátrixoknál megköveteltük a sajátértékek valós voltát, míg komplexeknél nem tettünk semmi kikötést – nyilván azért, mert komplex mátrix sajátértékei mindig komplexek.

**Bizonyítás.** A bizonyítást csak a valós esetre írjuk le, a komplex eset tárgyalása lényegében azonos. Teljes indukcióval bizonyítunk. $n = 1$ esetén az állítás nyilván igaz. A feltételek szerint $\mathbf{A}$ minden sajátértéke valós, legyen ezek egyike $\lambda$, a hozzá tartozó egységnyi sajátvektorok egyike $\mathbf{u}_1$. Innen a 9.3. tétel bizonyítását megismételjük egészen a (9.1) mátrix előállításáig, azaz kapjuk, hogy $\mathbf{u}_1$ vektort kiegészítve a teljes tér egy $\{\mathbf{u}_1, \mathbf{u}_2, \dots, \mathbf{u}_n\}$ ONB-ává, az ortogonális $\mathbf{Q}_0 = [\mathbf{u}_1\ \mathbf{u}_2\ \dots\ \mathbf{u}_n]$ mátrixszal

$$\mathbf{Q}_0^{\mathsf{T}}\mathbf{A}\mathbf{Q}_0 = \begin{bmatrix} \lambda & \mathbf{v}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{A}_1 \end{bmatrix} = \mathbf{B}.$$

$\mathbf{B}$ hasonló $\mathbf{A}$-hoz, ezért sajátértékeik megegyeznek, tehát $\mathbf{A}_1$ minden sajátértéke $\mathbf{A}$-nak is sajátértéke. A teljes indukció miatt viszont $\mathbf{A}_1$-hez létezik olyan $\mathbf{Q}_1$ ortogonális és $\mathbf{T}_1$ felső háromszög mátrix, hogy $\mathbf{A}_1 = \mathbf{Q}_1\mathbf{T}_1\mathbf{Q}_1^{\mathsf{T}}$. A $\mathbf{Q} = \mathbf{Q}_0\begin{bmatrix} 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1 \end{bmatrix}$ mátrix ortogonális, hisz két ortogonális mátrix szorzata, és $\mathbf{A}$-t hasonlóvá teszi egy felsőháromszög-mátrixhoz:

$$\begin{aligned}
\mathbf{Q}^{\mathsf{T}}\mathbf{A}\mathbf{Q} &= \left(\mathbf{Q}_0\begin{bmatrix} 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1 \end{bmatrix}\right)^{\mathsf{T}} \mathbf{A} \left(\mathbf{Q}_0\begin{bmatrix} 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1 \end{bmatrix}\right) = \begin{bmatrix} 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1 \end{bmatrix}^{\mathsf{T}} \mathbf{Q}_0^{\mathsf{T}}\mathbf{A}\mathbf{Q}_0 \begin{bmatrix} 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1 \end{bmatrix} \\
&= \begin{bmatrix} 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1^{\mathsf{T}} \end{bmatrix} \begin{bmatrix} \lambda & \mathbf{v}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{A}_1 \end{bmatrix} \begin{bmatrix} 1 & \mathbf{0}^{\mathsf{T}} \\ \mathbf{0} & \mathbf{Q}_1 \end{bmatrix} \\
&= \begin{bmatrix} \lambda & \mathbf{v}^{\mathsf{T}}\mathbf{Q}_1 \\ \mathbf{0} & \mathbf{Q}_1^{\mathsf{T}}\mathbf{A}_1\mathbf{Q}_1 \end{bmatrix} = \begin{bmatrix} \lambda & \mathbf{v}^{\mathsf{T}}\mathbf{Q}_1 \\ \mathbf{0} & \mathbf{T}_1 \end{bmatrix}.
\end{aligned}$$

$\square$

[^p399_1]: Schur-felbontás

**9.6. példa (Schur-felbontás).** *Hozzuk ortogonális hasonlósági transzformációval felső háromszögalakra az*

$$\mathbf{A} = \begin{bmatrix} 7 & 6 & -3 \\ 3 & 17 & -6 \\ -12 & 14 & 4 \end{bmatrix}$$

*mátrixot!*

**Megoldás.** A karakterisztikus polinom $-x^3 + 28x^2 - 245x + 686 = (7-x)^2(14-x)$. A 7 kétszeres sajátérték, a sajátaltér 1-dimenziós, sajátvektor $\mathbf{x}_1 = (2, 3, 6)$, a 14-hez tartozó sajátvektor $\mathbf{x}_2 = (9, 17, 13)$, diagonalizálni nem lehet, mivel a geometriai multiplicitások összege (2) kisebb az algebraiak összegénél (3).

Az első sajátvektorhoz választunk egy ortonormált bázist, abból képezzük a $\mathbf{Q}_0$ és a $\mathbf{Q}_0^{\mathsf{T}}\mathbf{A}\mathbf{Q}_0$ mátrixot:

$$\mathbf{Q}_0 = [\mathbf{x}_1|\mathbf{u}_2|\mathbf{u}_3] = \frac{1}{7}\begin{bmatrix} 2 & -6 & 3 \\ 3 & -2 & -6 \\ 6 & 3 & 2 \end{bmatrix}, \quad \mathbf{Q}_0^{\mathsf{T}}\mathbf{A}\mathbf{Q}_0 = \left[\begin{array}{c|cc} 7 & 0 & -21 \\ \hline 0 & 14 & 0 \\ 0 & 7 & 7 \end{array}\right]$$

tehát

$$\mathbf{A}_1 = \begin{bmatrix} 14 & 0 \\ 7 & 7 \end{bmatrix}.$$

A 7 sajátértékhez tartozó sajátvektor $(0, 1)$, rá merőleges a $(1, 0)$. Így

$$\mathbf{Q}_1 = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}, \quad \left[\begin{array}{c|c} 1 & 0 \\ \hline 0 & \mathbf{Q}_1 \end{array}\right] = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{bmatrix}.$$

Innen

$$\mathbf{Q} = \mathbf{Q}_0\begin{bmatrix} 1 & 0 \\ 0 & \mathbf{Q}_1 \end{bmatrix} = \frac{1}{7}\begin{bmatrix} 2 & 3 & -6 \\ 3 & -6 & -2 \\ 6 & 2 & 3 \end{bmatrix}, \text{ amiből}$$

$$\mathbf{Q}^{\mathsf{T}}\mathbf{A}\mathbf{Q} = \begin{bmatrix} 7 & -21 & 0 \\ 0 & 7 & 7 \\ 0 & 0 & 14 \end{bmatrix}$$

$\square$

> E példa mátrixához található racionális elemű ortogonális mátrix, mi a számítások könnyebb követhetősége érdekében ezt adtuk meg. Ilyen mátrix keresése nem része a példának, mivel a gyakorlatban nemigen találkozni ilyen speciális esettel.

A Schur-felbontás valós mátrixokra akkor is használható, ha komplex sajátértékei is vannak, de ekkor csak azt tudjuk garantálni, hogy a mátrix hasonló egy olyanhoz, melynek szubdiagonális elemei alatt minden elem 0.

**9.7. állítás (Valós mátrix komplex sajátértéke).** *Legyen $\mathbf{A} \in \mathbb{R}^{n \times n}$. Ha $(\lambda, \mathbf{x})$ egy sajátpár, ahol $\lambda = a + \mathrm{i}b$, $b \neq 0$, $\mathbf{x} = \mathbf{u} + \mathrm{i}\mathbf{v}$, ahol $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$, akkor*
*a) $(\bar{\lambda}, \bar{\mathbf{x}})$ szintén sajátpár,*
*b) $\mathbf{u}$ és $\mathbf{v}$ lineárisan függetlenek,*
*c) $\mathbf{A}$ hasonló egy*

$$\begin{bmatrix} a & b & * \\ -b & a & * \\ \mathbf{0} & \mathbf{0} & \mathbf{A}_1 \end{bmatrix} \tag{9.2}$$

*alakú mátrixhoz.*

**Bizonyítás.** Mivel $\mathbf{A}$ valós karakterisztikus polinomja valós együtthatós, ezért minden komplex sajátértékének konjugáltja is az.
*a)* Ha $\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$, akkor $\mathbf{A}\bar{\mathbf{x}} = \bar{\lambda}\bar{\mathbf{x}}$ nyilvánvalóan fennáll.
*b)* $\mathbf{x}$ és $\bar{\mathbf{x}}$ lineárisan függetlenek, különben $\mathbf{x}$ nem csak $\lambda$-nak, de a tőle különböző $\bar{\lambda}$-nak is sajátvektora lenne. Ha $\mathbf{u}$ és $\mathbf{v}$ nem lenne lineárisan független, akkor pl. $\mathbf{u} = c\mathbf{v}$ esetén $\mathbf{x} = \mathbf{v}(1 + c\mathrm{i})$, $\bar{\mathbf{x}} = \mathbf{v}(1 - c\mathrm{i})$ lenne, ami ellentmond az előzőeknek. Az

$$\begin{aligned}
\mathbf{A}(\mathbf{u} + \mathrm{i}\mathbf{v}) &= (a + \mathrm{i}b)(\mathbf{u} + \mathrm{i}\mathbf{v}) = a\mathbf{u} + b\mathbf{u}\mathrm{i} + a\mathbf{v}\mathrm{i} - b\mathbf{v}, \\
\mathbf{A}(\mathbf{u} - \mathrm{i}\mathbf{v}) &= (a - \mathrm{i}b)(\mathbf{u} - \mathrm{i}\mathbf{v}) = a\mathbf{u} - b\mathbf{u}\mathrm{i} - a\mathbf{v}\mathrm{i} - b\mathbf{v},
\end{aligned}$$

egyenletekből kapjuk, hogy

$$\begin{aligned}
\mathbf{A}\mathbf{u} &= a\mathbf{u} - b\mathbf{v}, \\
\mathbf{A}\mathbf{v} &= b\mathbf{u} + a\mathbf{v},
\end{aligned} \quad \text{azaz} \quad \mathbf{A}[\mathbf{u}|\mathbf{v}] = [\mathbf{u}|\mathbf{v}]\begin{bmatrix} a & b \\ -b & a \end{bmatrix}.$$

*c)* Egészítsük ki az $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$ vektorokat bázissá, a belőlük alkotott mátrixot jelölje $\mathbf{C}$. E bázisban $\mathbf{A}\mathbf{u}$ koordinátás alakja $(a, -b, 0, \dots, 0)$, $\mathbf{A}\mathbf{v}$ alakja $(b, a, 0, \dots, 0)$, azaz

$$\mathbf{A} = \mathbf{C}\begin{bmatrix} a & b & * \\ -b & a & * \\ \mathbf{0} & \mathbf{0} & \mathbf{A}_1 \end{bmatrix}\mathbf{C}^{-1}.$$

$\square$

**9.8. tétel (Valós Schur-felbontás).** *Legyen $\mathbf{A} \in \mathbb{R}^{n \times n}$.*
*a) Létezik olyan invertálható $\mathbf{C} \in \mathbb{R}^{n \times n}$ mátrix, és egy olyan*

$$\mathbf{T} = \begin{bmatrix} \boldsymbol{\Lambda}_1 & * & \dots & * \\ 0 & \boldsymbol{\Lambda}_2 & \dots & * \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \boldsymbol{\Lambda}_k \end{bmatrix}, \tag{9.3}$$

*alakú felső blokkháromszögmátrix, hogy $\mathbf{A} = \mathbf{C}\mathbf{T}\mathbf{C}^{-1}$, és ahol $\boldsymbol{\Lambda}_j$ ($j = 1, \dots, k$) vagy egy $1 \times 1$-es mátrix, melynek egyetlen eleme $\mathbf{A}$ egy valós sajátértéke, vagy egy olyan $2 \times 2$-es $\begin{bmatrix} a & b \\ -b & a \end{bmatrix}$ alakú mátrix, ahol $a \pm b\mathrm{i}$ az $\mathbf{A}$ két nem valós sajátértéke.*
*b) Létezik olyan ortogonális $\mathbf{Q} \in \mathbb{R}^{n \times n}$ mátrix és egy olyan $\mathbf{T}$ felső blokkháromszögmátrix, hogy $\mathbf{A} = \mathbf{Q}\mathbf{T}\mathbf{Q}^{\mathsf{T}}$, és $\mathbf{T}$ minden diagonális eleme vagy az $\mathbf{A}$ egy valós sajátértékét tartalmazó $1 \times 1$-es mátrix, vagy egy olyan $2 \times 2$-es mátrix, melynek két nem valós sajátértéke egymás komplex konjugáltja.*

**Bizonyítás.** Az első állítás indukcióval bizonyítható. Ha $\lambda$ valós sajátérték, akkor a Schur-felbontás bizonyítását követve $\mathbf{A}$ ortogonálisan hasonló $\begin{bmatrix} \lambda & * \\ \mathbf{0} & \mathbf{A}_1 \end{bmatrix}$ alakú mátrixhoz, ha $\lambda$ komplex, akkor hasonló (nem feltétlenül ortogonálisan) egy (9.2) alakú mátrixhoz. E lépések ismétlése végül a $\mathbf{C}^{-1}\mathbf{A}\mathbf{C} = \mathbf{T}$ mátrixot adják, mely a (9.3) alakú.

Tekintsük a $\mathbf{C} = \mathbf{Q}\mathbf{R}$ QR-felbontást, ahol $\mathbf{Q}$ ortogonális, $\mathbf{R}$ felső háromszögmátrix. Így $\mathbf{R}^{-1}\mathbf{Q}^{\mathsf{T}}\mathbf{A}\mathbf{Q}\mathbf{R} = \mathbf{T}$, azaz $\mathbf{Q}^{\mathsf{T}}\mathbf{A}\mathbf{Q} = \mathbf{R}\mathbf{T}\mathbf{R}^{-1}$. Blokkosítsuk $\mathbf{R}$-et a $\mathbf{T}$ főátlójának blokkméretei szerint, a főátlóbeli blokkokat jelölje $\mathbf{R}_j$, $j = 1, 2, \dots, k$. Ekkor

$$\mathbf{Q}^{\mathsf{T}}\mathbf{A}\mathbf{Q} = \mathbf{R}\begin{bmatrix} \boldsymbol{\Lambda}_1 & * & \dots & * \\ 0 & \boldsymbol{\Lambda}_2 & \dots & * \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \boldsymbol{\Lambda}_k \end{bmatrix}\mathbf{R}^{-1} = \begin{bmatrix} \mathbf{R}_1\boldsymbol{\Lambda}_1\mathbf{R}_1^{-1} & * & \dots & * \\ 0 & \mathbf{R}_2\boldsymbol{\Lambda}_2\mathbf{R}_2^{-1} & \dots & * \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \mathbf{R}_k\boldsymbol{\Lambda}_k\mathbf{R}_k^{-1} \end{bmatrix}.$$

$\boldsymbol{\Lambda}_j \sim \mathbf{R}_j\boldsymbol{\Lambda}_j\mathbf{R}_j^{-1}$, ami igazolja a második állítást. $\square$

> Az általában nem igaz, hogy egy valós mátrix ortogonálisan hasonló egy olyan mátrixhoz, melynek főátlójában a $2 \times 2$-es blokkok $\begin{bmatrix} a & b \\ -b & a \end{bmatrix}$ alakúak, ahol $\lambda = a \pm \mathrm{i}b$ az $\mathbf{A}$ sajátértéke. Hogy ez is fönnálljon, az $\mathbf{A}$ mátrixnak egy további feltételt is teljesítenie kell.

### Mátrixok unitér diagonalizálása[^p402_1]

A valós mátrixok ortogonális diagonalizálhatóságának megfelelője a komplex mátrixok közt azok unitér diagonalizálhatósága.

**9.9. definíció (Unitér diagonalizálhatóság).** *Az $\mathbf{A}$ mátrix unitéren diagonalizálható, ha találunk egy $\mathbf{U}$ unitér és egy $\boldsymbol{\Lambda}$ diagonális mátrixot, melyre $\mathbf{U}^{\mathsf{H}}\mathbf{A}\mathbf{U} = \boldsymbol{\Lambda}$ (illetve $\mathbf{A} = \mathbf{U}\boldsymbol{\Lambda}\mathbf{U}^{\mathsf{H}}$).*

> A szimmetrikus és önadjungált mátrixok közti analógiái alapján azt várjuk, hogy az önadjungált mátrixok lesznek az unitéren diagonalizálhatók. (A valós spektráltétel bizonyításának első része, azaz a $\Rightarrow$ irány bizonyítása nem vihető át valós szimmetrikus mátrixokról komplex önadjungált mátrixokra, mivel $\boldsymbol{\Lambda}^{\mathsf{H}} = \boldsymbol{\Lambda}$ csak valós diagonális mátrixokra igaz.) A valóságban mátrixok egy jóval tágabb köre fog az unitéren diagonalizálhatók közé tartozni: ezek lesznek a normális mátrixok.

**9.10. definíció (Normális mátrix).** *Azt mondjuk, hogy az $\mathbf{A} \in \mathbb{C}^{n \times n}$ mátrix normális, ha $\mathbf{A}^{\mathsf{H}}\mathbf{A} = \mathbf{A}\mathbf{A}^{\mathsf{H}}$, azaz ha felcserélhető saját adjungáltjával.*

[^p402_1]: Mátrixok unitér diagonalizálása

> *Könnyen ellenőrizhető, hogy normális az összes komplex önadjungált, ferdén önadjungált és unitér, valamint az összes valós szimmetrikus, ferdén szimmetrikus és ortogonális mátrix.*

> *Vannak olyan normális mátrixok is, melyek nem tartoznak a fenti listában felsoroltak közé. Pédául az*

$$\mathbf{A} = \begin{bmatrix} 1 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & 1 & 1 \end{bmatrix}$$

mátrix normális, mert

$$\mathbf{A}^{\mathsf{H}}\mathbf{A} = \mathbf{A}\mathbf{A}^{\mathsf{H}} = \begin{bmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{bmatrix}.$$

> *A normális mátrixok sok szép tulajdonsággal rendelkeznek, melyekre a továbbiakban visszatérünk, a legfontosabbat a következő tétel mondja ki.*

**9.11. tétel (Unitér diagonalizálhatóság).** *Az $\mathbf{A} \in \mathbb{C}^{n \times n}$ mátrix pontosan akkor unitéren diagonalizálható, ha normális.*

*Bizonyítás.* ($\Rightarrow$) Tegyük fel, hogy $\mathbf{A} = \mathbf{U}\boldsymbol{\Lambda}\mathbf{U}^{\mathsf{H}}$, azaz $\mathbf{A}$ unitéren diagonalizálható. Mivel bármely komplex $z$ számra $\bar{z}z = z\bar{z}$, ezért minden komplex diagonális mátrix normális, így $\boldsymbol{\Lambda}^{\mathsf{H}}\boldsymbol{\Lambda} = \boldsymbol{\Lambda}\boldsymbol{\Lambda}^{\mathsf{H}}$. Eszerint

$$\begin{aligned}
\mathbf{A}^{\mathsf{H}}\mathbf{A} &= (\mathbf{U}\boldsymbol{\Lambda}\mathbf{U}^{\mathsf{H}})^{\mathsf{H}}(\mathbf{U}\boldsymbol{\Lambda}\mathbf{U}^{\mathsf{H}}) = \mathbf{U}\boldsymbol{\Lambda}^{\mathsf{H}}\mathbf{U}^{\mathsf{H}}\mathbf{U}\boldsymbol{\Lambda}\mathbf{U}^{\mathsf{H}} = \mathbf{U}\boldsymbol{\Lambda}^{\mathsf{H}}\boldsymbol{\Lambda}\mathbf{U}^{\mathsf{H}} \\
&= \mathbf{U}\boldsymbol{\Lambda}\boldsymbol{\Lambda}^{\mathsf{H}}\mathbf{U}^{\mathsf{H}} = \mathbf{U}\boldsymbol{\Lambda}\mathbf{U}^{\mathsf{H}}\mathbf{U}\boldsymbol{\Lambda}^{\mathsf{H}}\mathbf{U}^{\mathsf{H}} = (\mathbf{U}\boldsymbol{\Lambda}\mathbf{U}^{\mathsf{H}})(\mathbf{U}\boldsymbol{\Lambda}\mathbf{U}^{\mathsf{H}})^{\mathsf{H}} = \mathbf{A}\mathbf{A}^{\mathsf{H}}.
\end{aligned}$$

($\Leftarrow$) A Schur-felbontás szerint minden komplex négyzetes $\mathbf{A}$ mátrix előáll

$$\mathbf{A} = \mathbf{U}\mathbf{T}\mathbf{U}^{\mathsf{H}}$$

alakban, ahol $\mathbf{U}$ unitér, $\mathbf{T}$ felsőháromszög-mátrix. Tegyük fel, hogy $\mathbf{A}$ normális. Ekkor $\mathbf{T}$ is normális, ugyanis a fenti levezetéshez hasonlóan

$$\begin{aligned}
\mathbf{T}^{\mathsf{H}}\mathbf{T} &= (\mathbf{U}^{\mathsf{H}}\mathbf{A}\mathbf{U})^{\mathsf{H}}(\mathbf{U}^{\mathsf{H}}\mathbf{A}\mathbf{U}) = \mathbf{U}^{\mathsf{H}}\mathbf{A}^{\mathsf{H}}\mathbf{U}\mathbf{U}^{\mathsf{H}}\mathbf{A}\mathbf{U} = \mathbf{U}^{\mathsf{H}}\mathbf{A}^{\mathsf{H}}\mathbf{A}\mathbf{U} \\
&= \mathbf{U}^{\mathsf{H}}\mathbf{A}\mathbf{A}^{\mathsf{H}}\mathbf{U} = \mathbf{U}^{\mathsf{H}}\mathbf{A}\mathbf{U}\mathbf{U}^{\mathsf{H}}\mathbf{A}^{\mathsf{H}}\mathbf{U} = (\mathbf{U}^{\mathsf{H}}\mathbf{A}\mathbf{U})(\mathbf{U}^{\mathsf{H}}\mathbf{A}\mathbf{U})^{\mathsf{H}} = \mathbf{T}\mathbf{T}^{\mathsf{H}}.
\end{aligned}$$

A $\mathbf{T}$ mátrix alakja

$$\begin{bmatrix} t_{11} & t_{12} & \dots & t_{1n} \\ 0 & t_{22} & \dots & t_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & t_{nn} \end{bmatrix},$$

ezért $[\mathbf{T}^{\mathsf{H}}\mathbf{T}]_{11} = |t_{11}|^2$, $[\mathbf{T}\mathbf{T}^{\mathsf{H}}]_{11} = |t_{11}|^2 + |t_{12}|^2 + \dots + |t_{1n}|^2$, amiből $t_{12} = \dots = t_{1n} = 0$ adódik. Hasonlóan fölírva a $[\mathbf{T}^{\mathsf{H}}\mathbf{T}]_{22}$ és a $[\mathbf{T}\mathbf{T}^{\mathsf{H}}]_{22}$ elemeket kapjuk, hogy $t_{23} = \dots = t_{2n} = 0$, stb. Tehát $\mathbf{T}$ diagonális. $\square$

### Valós normális mátrixok

A valós normális mátrixok unitéren diagonalizálhatók, aminek következtében ortogonálisan blokkdiagonalizálhatók, legföljebb $2 \times 2$-es blokkokkal.

**9.12. tétel (Valós normális mátrixok blokkdiagonalizálhatósága).** *Legyen $\mathbf{A} \in \mathbb{R}^{n \times n}$. $\mathbf{A}$ pontosan akkor normális, ha van olyan $\mathbf{Q} \in \mathbb{R}^{n \times n}$ ortogonális mátrix, hogy*

$$\mathbf{Q}^{\mathsf{T}}\mathbf{A}\mathbf{Q} = \begin{bmatrix} \boldsymbol{\Lambda}_1 & \mathbf{O} & \dots & \mathbf{O} \\ \mathbf{O} & \boldsymbol{\Lambda}_2 & \dots & \mathbf{O} \\ \vdots & \vdots & \ddots & \vdots \\ \mathbf{O} & \mathbf{O} & \dots & \boldsymbol{\Lambda}_k \end{bmatrix}, \tag{9.4}$$

*ahol $\boldsymbol{\Lambda}_j$ ($j = 1, 2, \dots, k$) vagy $1 \times 1$-es és eleme az $\mathbf{A}$ egy sajátértéke, vagy $2 \times 2$-es valós mátrix, alakja*

$$\begin{bmatrix} a_j & b_j \\ -b_j & a_j \end{bmatrix},$$

*ahol $a_j \pm b_j \mathrm{i}$ a $\boldsymbol{\Lambda}_j$ két sajátértéke.*

*Bizonyítás.* ($\Leftarrow$) Ha egy mátrix $(9.4)$ alakú, akkor normális (ellenőrizzük), így normális a hozzá ortogonálisan hasonló $\mathbf{A}$ is.

($\Rightarrow$) Tegyük fel, hogy $\mathbf{A}$ valós normális. Mivel valós, ezért ortogonálisan hasonló egy blokk felsőháromszög-mátrixhoz, melynek diagonális blokkjai $1 \times 1$-es vagy $2 \times 2$-es méretűek. Mivel normális, a két szorzat összevetéséből adódik, hogy a diagonális blokkok fölötti elemek mindegyik 0, tehát a mátrix blokkdiagonális.

Könnyen igazolható, hogy egy blokkdiagonális mátrix pontosan akkor normális, ha minden diagonális blokkja normális (ld. 9.1. feladat). Egy $1 \times 1$-es valós mátrix egyetlen eleme a sajátértéke. Egy $2 \times 2$-es normális mátrix alakja $\left[\begin{smallmatrix} a & b \\ -b & a \end{smallmatrix}\right] \in \mathbb{R}^2$, ahol $b \neq 0$ (ld. 9.2. feladat). Ez bizonyítja a tételt. $\square$

**9.13. következmény (Ortogonálisan blokkdiagonalizálható mátrixok).** *Legyen $\mathbf{A} \in \mathbb{R}^{n \times n}$.*

*a) $\mathbf{A}$ pontosan akkor szimmetrikus, ha ortogonálisan hasonló egy diagonális mátrixhoz. A diagonális elemek $\mathbf{A}$ sajátértékei. Két szimmetrikus mátrix pontosan akkor hasonló ortogonálisan egymáshoz, ha azonosak a sajátértékeik.*

*b) $\mathbf{A}$ pontosan akkor ferdén szimmetrikus, ha ortogonálisan hasonló egy olyan blokkdiagonális mátrixhoz, melynek diagonális blokkjai $[0]$ vagy $\left[\begin{smallmatrix} 0 & b_j \\ -b_j & 0 \end{smallmatrix}\right]$ alakúak, ahol utóbbi mátrix a tiszta imaginárius $\pm b_j \mathrm{i}$ sajátértékekhez tartozik. Két ferdén szimmetrikus mátrix pontosan akkor hasonló ortogonálisan egymáshoz, ha azonosak a sajátértékeik.*

*c) $\mathbf{A}$ pontosan akkor ortogonális, ha ortogonálisan hasonló egy olyan blokkdiagonális mátrixhoz, melynek diagonális blokkjai $[1]$, $[-1]$ vagy $\left[\begin{smallmatrix} \cos\varphi_j & \sin\varphi_j \\ -\sin\varphi_j & \cos\varphi_j \end{smallmatrix}\right]$ alakúak. Sajátértékei $\pm 1$, $\cos\varphi_j \pm \mathrm{i}\sin\varphi_j$. Két ortogonális mátrix pontosan akkor hasonló ortogonálisan, ha sajátértékei azonosak.*

### Feladatok

**9.1.** Mutassuk meg, hogy ha $\mathbf{A}$ blokkdiagonális, az átlóban négyzetes mátrixokkal, akkor $\mathbf{A}$ pontosan akkor normális, ha minden diagonális blokkja normális.

**9.2.** Tegyük fel, hogy az $\left[\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}\right] \in \mathbb{R}^2$ mátrix normális, és két sajátértéke nem valós. Ekkor $c = -b \neq 0$ és $d = a$.

## Kvadratikus alakok

> *A csupa másodfokú tagot tartalmazó többváltozós polinomok mátrixok sajátértékeinek és sajátvektorainak ismeretében egyszerűbb alakra hozhatók, így könnyebben vizsgálhatók. E témának számtalan lineáris algebrán kívüli matematikai és matematikán kívüli alkalmazása is van.*

### Homogén másodfokú polinomok mátrixszorzatos alakja

Egy polinom egy tagja *másodfokú*, ha abban az ismeretlenek fokszámainak összege 2. Például az $x$, $y$ és $z$ változókban másodfokú tagok az alábbiak: $3x^2$, $axy$, $2b^3xz$, $-\pi^2 z^2$. Az olyan többváltozós polinomot, melyben csak másodfokú tagok vannak, többváltozós *homogén másodfokú polinomnak* nevezzük. Például $2x^2 + 4xy - y^2$ egy 2-változós homogén másodfokú polinom. A $4xy = 2xy + 2yx$ felbontással e polinom egy szimmetrikus mátrixszal való mátrixszorzatos alakba írható:

$$2x^2 + 2xy + 2yx - y^2 = \begin{bmatrix} x & y \end{bmatrix} \begin{bmatrix} 2 & 2 \\ 2 & -1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix}.$$

Általában is igaz, hogy

$$ax^2 + 2bxy + cy^2 = ax^2 + bxy + byx + cy^2 = \begin{bmatrix} x & y \end{bmatrix} \begin{bmatrix} a & b \\ b & c \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix}.$$

Hasonlóképp a háromváltozós homogén másodfokú polinomok is mátrixszorzatos alakba írhatók egy szimmetrikus mátrixszal:

$$\begin{aligned}
& ax^2 + 2bxy + 2cxz + dy^2 + 2eyz + fz^2 \\
&= ax^2 + bxy + cxz + byx + dy^2 + eyz + czx + ezy + fz^2 \\
&= \begin{bmatrix} x & y & z \end{bmatrix} \begin{bmatrix} a & b & c \\ b & d & e \\ c & e & f \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix}.
\end{aligned}$$

**9.14. példa (Másodfokú polinom mátrixszorzatos alakja).** *Írjuk fel az $x_1^2 + 2x_2^2 + 2x_3^2 - 5x_1x_2 - 3x_2x_1 + 5x_1x_3 - x_3x_1$ kifejezést mátrixszorzatos alakban szimmetrikus mátrixszal!*

*Megoldás.* A vegyes tagokat először összevonva, majd két egyenlő együtthatójú részre bontva kapjuk, hogy

$$\begin{aligned}
& x_1^2 + 2x_2^2 + 2x_3^2 - 8x_1x_2 + 4x_1x_3 \\
&= x_1^2 + 2x_2^2 + 2x_3^2 - 4x_1x_2 - 4x_2x_1 + 2x_1x_3 + 2x_3x_1 \\
&= x_1^2 - 4x_1x_2 + 2x_1x_3 - 4x_2x_1 + 2x_2^2 + 0x_2x_3 + 2x_3x_1 + 0x_3x_2 + 2x_3^2 \\
&= \begin{bmatrix} x_1 & x_2 & x_3 \end{bmatrix} \begin{bmatrix} 1 & -4 & 2 \\ -4 & 2 & 0 \\ 2 & 0 & 2 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix}.
\end{aligned}$$

$\square$

A fentieket követve az $\mathbf{x} = (x_1, x_2, \dots, x_n)$ vektor koordinátáitól függő valós homogén másodfokú polinomok mindegyike

$$\mathbf{x}^{\mathsf{T}}\mathbf{A}\mathbf{x} = \mathbf{x} \cdot \mathbf{A}\mathbf{x}$$

alakra hozható, ahol $\mathbf{A}$ szimmetrikus mátrix.

A komplexek körében hasonló állítás nem igaz, ha a homogén másodfokú polinomot analóg módon az $\mathbf{x} \cdot \mathbf{A}\mathbf{x} = \mathbf{x}^{\mathsf{H}}\mathbf{A}\mathbf{x}$ képlettel definiáljuk. Például

$$\begin{bmatrix} \bar{x} & \bar{y} \end{bmatrix} \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \bar{x}x + 2\bar{x}y + \bar{y}y \quad \text{és}$$

$$\begin{bmatrix} \bar{x} & \bar{y} \end{bmatrix} \begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \bar{x}x + \bar{x}y + x\bar{y} + \bar{y}y$$

két különböző függvény! Másrészt viszont ha $\mathbf{A} \in \mathbb{C}^{n \times n}$ önadjungált, akkor $\mathbf{x}^{\mathsf{H}}\mathbf{A}\mathbf{x}$ valós értékű, ugyanis

$$\mathbf{x} \cdot \mathbf{A}\mathbf{x} = \mathbf{x}^{\mathsf{H}}\mathbf{A}\mathbf{x} = \mathbf{x}^{\mathsf{H}}\mathbf{A}^{\mathsf{H}}\mathbf{x} = (\mathbf{A}\mathbf{x}) \cdot \mathbf{x} = \overline{\mathbf{x} \cdot \mathbf{A}\mathbf{x}}.$$

Bizonyítható az is, hogy ha egy komplex kvadratikus alak valós értékű, akkor mátrixa önadjungált, más néven Hermite-féle (ld. 9.6. feladat).

**9.15. definíció (Kvadratikus alak).** *Valós kvadratikus alaknak (vagy kvadratikus formának) nevezzük azt az*

$$\mathbb{R}^n \to \mathbb{R}; \mathbf{x} \mapsto \mathbf{x}^{\mathsf{T}}\mathbf{A}\mathbf{x}$$

*függvényt, ahol $\mathbf{A}$ valós szimmetrikus mátrix. Komplex kvadratikus alakon a*

$$\mathbb{C}^n \to \mathbb{C}; \mathbf{x} \mapsto \mathbf{x}^{\mathsf{H}}\mathbf{A}\mathbf{x}$$

*függvényt értjük, ahol $\mathbf{A}$ komplex négyzetes mátrix.*

> *Látjuk, hogy komplex esetben nem tettünk feltételt az $\mathbf{A}$ mátrixra, míg valós esetben kikötöttük, hogy $\mathbf{A}$ legyen szimmetrikus. Ennek oka, hogy valós esetben – mint láttuk – bármely $\mathbf{A}$ mátrixhoz van olyan szimmetrikus $\mathbf{B}$, melyre $\mathbf{x}^{\mathsf{T}}\mathbf{A}\mathbf{x} = \mathbf{x}^{\mathsf{T}}\mathbf{B}\mathbf{x}$. Komplex esetben hasonló állítás nem igaz sem szimmetrikus sem önadjungált mátrixokra. Az önadjungált eset más szempontból lesz érdekes.*

> *Egy komplex kvadratikus alakot Hermite-félének nevezünk, ha $\mathbf{A}$ önadjungált. Mint a 13.45. tételben látni fogjuk, ez azzal ekvivalens, hogy a komplex kvadratikus alak valós értékű.*

E szakaszban a továbbiakban kvadratikus alakon – ha mást nem mondunk – valós kvadratikus alakot értünk.

### Főtengelytétel

Egy kvadratikus alakhoz tartozó szimmetrikus mátrix diagonalizálásával a kvadratikus alak is egyszerű alakra hozható.

A spektráltétel szerint minden valós szimmetrikus mátrix ortogonálisan diagonalizálható, azaz létezik egy olyan ortogonális $\mathbf{Q}$ mátrix, és egy diagonális $\boldsymbol{\Lambda}$ mátrix, melyre $\mathbf{Q}^{\mathsf{T}}\mathbf{A}\mathbf{Q} = \boldsymbol{\Lambda}$. Tudjuk, hogy az $\mathbf{x} \mapsto \mathbf{A}\mathbf{x}$ mátrixleképezés mátrixa a $\mathbf{Q}$ oszlopvektorai által alkotott $\mathcal{Q}$ ortonormált bázisban $\boldsymbol{\Lambda}$. Ha egy tetszőleges $\mathbf{x}$ vektor alakja e bázisban $\mathbf{y}$, akkor $\mathbf{x} = \mathbf{Q}\mathbf{y}$. E helyettesítést elvégezve ugyanennek a függvénynek a $\mathcal{Q}$ bázisban fölírt alakját kapjuk:

$$\mathbf{x}^{\mathsf{T}}\mathbf{A}\mathbf{x} = (\mathbf{Q}\mathbf{y})^{\mathsf{T}}\mathbf{A}(\mathbf{Q}\mathbf{y}) = \mathbf{y}^{\mathsf{T}}\mathbf{Q}^{\mathsf{T}}\mathbf{A}\mathbf{Q}\mathbf{y} = \mathbf{y}^{\mathsf{T}}\boldsymbol{\Lambda}\mathbf{y}.$$

Eszerint a kvadratikus alak e bázisban nagyon egyszerűvé válik, csak négyzetes tagokat tartalmaz: $\lambda_1 y_1^2 + \lambda_2 y_2^2 + \dots + \lambda_n y_n^2$, ahol $\boldsymbol{\Lambda} = \operatorname{diag}(\lambda_1, \lambda_2, \dots, \lambda_n)$. Ezzel bizonyítottuk az alábbi tételt:

**9.16. tétel (Főtengelytétel).** *Legyen $\mathbf{A}$ egy $n$-edrendű valós szimmetrikus mátrix, melyet a $\mathbf{Q}$ mátrix ortogonálisan diagonalizál, azaz $\mathbf{Q}^{\mathsf{T}}\mathbf{A}\mathbf{Q} = \boldsymbol{\Lambda}$ diagonális. Ekkor az $\mathbf{x} = \mathbf{Q}\mathbf{y}$ helyettesítés az $\mathbf{x}^{\mathsf{T}}\mathbf{A}\mathbf{x}$ kvadratikus alakot az $\mathbf{y}^{\mathsf{T}}\boldsymbol{\Lambda}\mathbf{y}$ kvadratikus alakba transzformálja, mely kifejtve csak négyzetes tagokat tartalmaz, azaz*

$$\mathbf{x}^{\mathsf{T}}\mathbf{A}\mathbf{x} = \mathbf{y}^{\mathsf{T}}\boldsymbol{\Lambda}\mathbf{y} = \lambda_1 y_1^2 + \lambda_2 y_2^2 + \dots + \lambda_n y_n^2, \tag{9.5}$$

*ahol $\lambda_1, \lambda_2, \dots, \lambda_n$ az $\mathbf{A}$ mátrix sajátértékei.*

> *A tétel nevét később fogjuk részletesen megmagyarázni, most csak annyit, hogy az $\mathbf{x}^{\mathsf{T}}\mathbf{A}\mathbf{x} = c$ egyenletű felületnek a $\mathcal{Q}$ bázis vektorai mind szimmetriatengelyei, melyeket főtengelyeknek is nevezünk.*

> *Mivel $\mathbf{Q}$ ortogonális mátrix, ezért $\det\mathbf{Q} = 1$ vagy $\det\mathbf{Q} = -1$. Gyakorlati (például bizonyos 3-dimenziós) alkalmazásokban fontos lehet, hogy a $\mathcal{Q}$ bázis is jobbsodrású legyen, azaz hogy $\det\mathbf{Q} = 1$ legyen. Így a standard bázis beleforgatható az új bázisba. Ez elérhető, ha $\det\mathbf{Q} = -1$ esetén $\mathbf{Q}$ bármelyik oszlopát $-1$-szeresére változtatjuk. Ez a kvadratikus alakot nem befolyásolja, hisz abban csak a sajátértékek szerepelnek.*

> *A főtengelytétel alkalmazását egy kvadratikus alakon főtengely-transzformációnak nevezzük.*

**9.17. példa (Főtengely-transzformáció).** *Végezzük el a főtengely-transzformációt az*

$$f(x, y, z) = x^2 + 2y^2 + 2z^2 - 8xy + 4xz$$

*kvadratikus alakon és keressünk jobbsodrású ortonormált bázist hozzá! Mi az áttérés mátrixa?*

*Megoldás.* A kvadratikus alak mátrixszorzat-alakja

$$\begin{bmatrix} x & y & z \end{bmatrix} \begin{bmatrix} 1 & -4 & 2 \\ -4 & 2 & 0 \\ 2 & 0 & 2 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix}.$$

Mátrixának karakterisztikus polinomja $-\lambda^3 + 5\lambda^2 + 12\lambda - 36$, ennek gyökei, azaz a sajátértékek $6$, $-3$, $2$, a hozzájuk tartozó sajátvektorok rendre $(2, -2, 1)$, $(-5, -4, 2)$, $(0, 1, 2)$, melyek szükségképpen merőlegesek, hisz szimmetrikus mátrix különböző sajátértékeihez tartoznak. Így a keresett kvadratikus alak

$$\begin{bmatrix} \xi & \eta & \zeta \end{bmatrix} \begin{bmatrix} 6 & 0 & 0 \\ 0 & -3 & 0 \\ 0 & 0 & 2 \end{bmatrix} \begin{bmatrix} \xi \\ \eta \\ \zeta \end{bmatrix} = 6\xi^2 - 3\eta^2 + 2\zeta^2.$$

A sajátvektorokat normálva megkapjuk az ortonormált bázist, melynek vektoraiból képzett determináns

$$\begin{vmatrix} \frac{2}{3} & -\frac{5}{3\sqrt{5}} & 0 \\ -\frac{2}{3} & -\frac{4}{3\sqrt{5}} & \frac{1}{\sqrt{5}} \\ \frac{1}{3} & \frac{2}{3\sqrt{5}} & \frac{2}{\sqrt{5}} \end{vmatrix} = -1,$$

tehát egy megfelelő ortonormált bázis: $\left(\frac{2}{3}, -\frac{2}{3}, \frac{1}{3}\right)$, $\left(\frac{5}{3\sqrt{5}}, \frac{4}{3\sqrt{5}}, -\frac{2}{3\sqrt{5}}\right)$, $\left(0, \frac{1}{\sqrt{5}}, \frac{2}{\sqrt{5}}\right)$. A belőlük mint oszlopvektorokból képzett mátrix az áttérés mátrixa.

### Kvadratikus alakok és mátrixok definitsége

A főtengelytétel könnyen áttekinthetővé teszi a kvadratikus alak által fölvett értékek lehetséges előjelét. Ez lehetővé teszi a kvadratikus alakok egy fontos osztályozását.

**9.18. definíció (Kvadratikus alakok és mátrixok definitsége).** *Azt mondjuk, hogy az $f(\mathbf{x}) = \mathbf{x}^{\mathsf{T}}\mathbf{A}\mathbf{x}$ kvadratikus alak*

*a) pozitív definit, ha $f(\mathbf{x}) > 0$,*

*b) pozitív szemidefinit, ha $f(\mathbf{x}) \geq 0$,*

*c) negatív definit, ha $f(\mathbf{x}) < 0$,*

*d) negatív szemidefinit, ha $f(\mathbf{x}) \leq 0$*

*bármely $\mathbf{x} \neq \mathbf{0}$ vektor esetén, és azt mondjuk, hogy $f$*

*e) indefinit, ha pozitív és negatív értékeket is fölvesz.*

*A szimmetrikus $\mathbf{A}$ mátrixot pozitív/negatív definitnek/szemidefinitnek, illetve indefinitnek nevezzük, ha a hozzá tartozó kvadratikus alak az.*

> *Ha $\mathbf{A}$ negatív definit, akkor $-\mathbf{A}$ pozitív definit. Hasonló állítás igaz a szemidefinitségre is.*

> *Ha $\mathbf{A} = [a]$, azaz ha az $\mathbf{A}$ mátrix $1 \times 1$-es, akkor $\mathbf{A}$ pontosan akkor pozitív definit, ha $a > 0$.*

> *Az identikus mátrix pozitív definit, ugyanis $\mathbf{x}^{\mathsf{T}}\mathbf{I}\mathbf{x} = \mathbf{x}^{\mathsf{T}}\mathbf{x} = |\mathbf{x}|^2$, ami pozitív, ha $\mathbf{x} \neq \mathbf{0}$.*

> *Tetszőleges $\mathbf{A}$ valós mátrix esetén $\mathbf{A}^{\mathsf{T}}\mathbf{A}$ pozitív szemidefinit, ugyanis*

$$\mathbf{x}^{\mathsf{T}}\mathbf{A}^{\mathsf{T}}\mathbf{A}\mathbf{x} = (\mathbf{A}\mathbf{x})^{\mathsf{T}}(\mathbf{A}\mathbf{x}) = |\mathbf{A}\mathbf{x}|^2 \geqslant 0. \tag{9.6}$$

> *Világos, hogy ha egy kvadratikus alakban csak négyzetes tagok szerepelnek, akkor azonnal leolvasható definitségének típusa. Például az $f(x, y) = x^2 + 2y^2$, $g(x, y) = x^2 - 2y^2$, $h(x, y) = -x^2 - 2y^2$, $k(x, y, z) = x^2 + 2y^2$ formákról látható, hogy $f$ pozitív definit, hisz az $(x, y) \neq (0, 0)$ esetén értéke mindig pozitív, $g$ indefinit, $h$ negatív definit, és $k$ pozitív szemidefinit, hisz értéke $(x, y, z) \neq (0, 0, 0)$ esetén is lehet 0 (ha $x = y = 0$, de $z \neq 0$). Miután a főtengelytétel szerint minden kvadratikus alak egyenlő a változók négyzeteinek a sajátértékekkel vett lineáris kombinációjával, ezért a definitség típusa pusztán csak a sajátértékek előjeleinek ismeretében eldönthető.*

> *Tekintsük az $a(x, y) = 2x^2 + 2xy + 2y^2$, $b(x, y) = x^2 + 2xy + y^2$ és $c(x, y) = x^2 + 4xy + 3y^2$ kvadratikus alakokat, illetve a hozzájuk tartozó szimmetrikus*

$$\mathbf{A} = \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} 1 & 2 \\ 2 & 3 \end{bmatrix}$$

> *mátrixokat! Az $a$ kvadratikus alak, illetve az $\mathbf{A}$ mátrix pozitív definit, mert $a(x, y) = x^2 + y^2 + (x + y)^2 > 0$, ha $(x, y) \neq (0, 0)$. A $b$ és a $\mathbf{B}$ pozitív szemidefinit, mert $b(x, y) = (x + y)^2$, ami sosem negatív, de a $(x, y) = (1, -1)$ helyen 0. A $c$ és a $\mathbf{C}$ indefinit, mert $c(1, 0) > 0$, $c(-2, 1) < 0$. E mátrixok vizsgálatára lásd a 9.3. feladatot!*

> *Komplex esetben Hermite-féle kvadratikus alak definitsége a fentiekhez hasonlóan definiálható, hisz e kvadratikus alakok valós értékűek. Például az*

$$\mathbf{A} = \begin{bmatrix} 2 & \mathrm{i} \\ -\mathrm{i} & 2 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 1 & \mathrm{i} \\ -\mathrm{i} & 1 \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} 0 & 1+\mathrm{i} \\ 1-\mathrm{i} & 1 \end{bmatrix}, \quad \mathbf{D} = \begin{bmatrix} 2 & \mathrm{i} \\ -\mathrm{i} & 2 \end{bmatrix}$$

> *mátrixok közül $\mathbf{A}$ pozitív definit (sajátértékei 3 és 1), $\mathbf{B}$ pozitív szemidefinit (sajátértékei 2 és 0) és $\mathbf{C}$ indefinit (sajátértékei 2 és $-1$).*

**9.19. példa (Definitség meghatározása a sajátértékekből).** *Határozzuk meg az*

$$\mathbf{A} = \begin{bmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 0 \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} -2 & 1 & 1 \\ 1 & -2 & 1 \\ 1 & 1 & -2 \end{bmatrix}$$

*mátrixok definitségének típusát!*

*Megoldás.* Az $\mathbf{A}$ mátrix sajátértékei 1, 1 és 4. Így a főtengely-transzformáció után kapott

$$\begin{bmatrix} x & y & z \end{bmatrix} \begin{bmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} \xi & \eta & \zeta \end{bmatrix} \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 4 \end{bmatrix} \begin{bmatrix} \xi \\ \eta \\ \zeta \end{bmatrix} = \xi^2 + \eta^2 + 4\zeta^2$$

alakból látható, hogy e kvadratikus alak minden értéke pozitív, ha a változók nem mindegyike 0. Tehát e kvadratikus alak pozitív definit. Hasonlóképp a $\mathbf{B}$ sajátértékei $-1$, $-1$ és 2, a főtengely-transzformáció után kapott alak $-\xi^2 - \eta^2 + 2\zeta^2$. Ez negatív értéket vesz fel például az $(1, 0, 0)$ helyen, és pozitívat a $(0, 0, 1)$ helyen, tehát indefinit. Végül $\mathbf{C}$ sajátértékei $-3$, $-3$ és 0, így a főtengely-transzformáció után kapott alak $-3\xi^2 - 3\eta^2 + 0\zeta^2 = -3\xi^2 - 3\eta^2$. Ennek értéke a $(0, 0, 1)$ helyen 0, és pozitív értéket nem vesz fel, tehát negatív szemidefinit. $\square$

**9.20. tétel (Definitség meghatározása a sajátértékekből).** *A valós szimmetrikus $\mathbf{A}$ mátrix, illetve az $\mathbf{x}^{\mathsf{T}}\mathbf{A}\mathbf{x}$ kvadratikus alak pontosan akkor*

*a) pozitív definit, ha $\mathbf{A}$ minden sajátértéke pozitív;*

*b) pozitív szemidefinit, ha $\mathbf{A}$ minden sajátértéke nemnegatív;*

*c) negatív definit, ha $\mathbf{A}$ minden sajátértéke negatív;*

*d) negatív szemidefinit, ha $\mathbf{A}$ minden sajátértéke nempozitív;*

*e) indefinit, ha $\mathbf{A}$-nak van pozitív és negatív sajátértéke is.*

### Pozitív (szemi)definit mátrixok faktorizációi

A pozitív definit mátrixokkal való számításokat segíti, hogy akár a sajátfelbontásból, akár az LU-felbontásából $\mathbf{C}^{\mathsf{T}}\mathbf{C}$ alakú felbontás származik.

**9.21. tétel (Pozitív szemidefinit mátrixok faktorizációi).** *Legyen az $\mathbf{A} \in \mathbb{R}^{n \times n}$ mátrix szimmetrikus. A következő állítások ekvivalensek:*

*a) $\mathbf{A}$ pozitív szemidefinit,*

*b) van olyan szimmetrikus pozitív szemidefinit $\mathbf{B}$ mátrix, hogy $\mathbf{A} = \mathbf{B}^2$.*

*c) van olyan $\mathbf{C}$ mátrix, hogy $\mathbf{A} = \mathbf{C}^{\mathsf{T}}\mathbf{C}$.*

*A $\mathbf{B}$ mátrix egyértelmű, vagyis egy pozitív szemidefinit mátrixnak egyetlen négyzetgyöke van a pozitív szemidefinit mátrixok közt.*

*Bizonyítás.* $a) \Rightarrow b)$: Egy szimmetrikus $\mathbf{A}$ mátrix ortogonális $\mathbf{Q}$ mátrixszal diagonalizálható, azaz $\mathbf{A} = \mathbf{Q}\boldsymbol{\Lambda}\mathbf{Q}^{\mathsf{T}}$, ahol $\boldsymbol{\Lambda}$ diagonális. Ha $\mathbf{A}$ pozitív szemidefinit is, akkor minden sajátértéke nemnegatív, így $\boldsymbol{\Lambda}$ minden főátlóbeli eleméből négyzetgyököt lehet vonni. A $\boldsymbol{\Lambda}^{\frac{1}{2}} = \operatorname{diag}(\sqrt{\lambda_1}, \dots, \sqrt{\lambda_n})$ és a $\mathbf{B} = \mathbf{Q}\boldsymbol{\Lambda}^{\frac{1}{2}}\mathbf{Q}^{\mathsf{T}}$ jelölésekkel $\mathbf{B}\mathbf{B} = (\mathbf{Q}\boldsymbol{\Lambda}^{\frac{1}{2}}\mathbf{Q}^{\mathsf{T}})(\mathbf{Q}\boldsymbol{\Lambda}^{\frac{1}{2}}\mathbf{Q}^{\mathsf{T}}) = \mathbf{Q}\boldsymbol{\Lambda}^{\frac{1}{2}}\boldsymbol{\Lambda}^{\frac{1}{2}}\mathbf{Q}^{\mathsf{T}} = \mathbf{A}$.

Az egyértelműség bizonyításához legyen $\mathbf{B}$ pozitív szemidefinit, melyre $\mathbf{B}^2 = \mathbf{A}$. $\mathbf{B}$ ortogonálisan diagonalizálható, ONB-ának vektorai legyenek $\mathbf{q}_i$, a hozzá tartozó sajátérték $\beta_i \geq 0$. Ekkor $\mathbf{B}\mathbf{q}_i = \beta_i\mathbf{q}_i$ és $\mathbf{q}_i$ az $\mathbf{A}$-nak is sajátvektora: $\mathbf{A}\mathbf{q}_i = \beta_i^2\mathbf{q}_i$. Az $\mathbf{x} \mapsto \mathbf{A}\mathbf{x}$ leképezés hatása a $\mathbf{q}_i$ bázisvektorokon tehát egyértelműen megadja az $\mathbf{x} \mapsto \mathbf{B}\mathbf{x}$ hatását is, így annak mátrixát is.

$b) \Rightarrow c)$: $\mathbf{B}$ szimmetrikus, így $\mathbf{B}^{\mathsf{T}}\mathbf{B} = \mathbf{B}^2$, tehát a $\mathbf{C} = \mathbf{B}$ választás megfelel, de kevesebb számolással járót is találni: a $\mathbf{C} = \boldsymbol{\Lambda}^{\frac{1}{2}}\mathbf{Q}^{\mathsf{T}}$ mátrixra $\mathbf{C}^{\mathsf{T}}\mathbf{C} = \mathbf{Q}\boldsymbol{\Lambda}^{\frac{1}{2}}\boldsymbol{\Lambda}^{\frac{1}{2}}\mathbf{Q}^{\mathsf{T}} = \mathbf{A}$.

$c) \Rightarrow a)$: Ha $\mathbf{A} = \mathbf{C}^{\mathsf{T}}\mathbf{C}$ valamely $\mathbf{C}$ mátrixra, akkor tudjuk, hogy $\mathbf{A}$ szimmetrikus, másrészt

$$\mathbf{x}^{\mathsf{T}}\mathbf{A}\mathbf{x} = \mathbf{x}^{\mathsf{T}}\mathbf{C}^{\mathsf{T}}\mathbf{C}\mathbf{x} = (\mathbf{C}\mathbf{x})^{\mathsf{T}}(\mathbf{C}\mathbf{x}) = |\mathbf{C}\mathbf{x}|^2 \geqslant 0,$$

tehát $\mathbf{A}$ pozitív szemidefinit. $\square$

**9.22. példa (Felbontás $\mathbf{C}^{\mathsf{T}}\mathbf{C}$ és $\mathbf{B}^2$ szorzattá).** *Legyen*

$$\mathbf{A} = \begin{bmatrix} 9 & -12 \\ -12 & 16 \end{bmatrix}.$$

*Vannak-e olyan $\mathbf{C}$ és olyan pozitív szemidefinit $\mathbf{B}$ mátrixok, melyekre $\mathbf{A} = \mathbf{B}^2 = \mathbf{C}^{\mathsf{T}}\mathbf{C}$? Adjunk több megoldást is arra, amelyikre lehet!*

*Megoldás.* $\mathbf{A}$ szimmetrikus, karakterisztikus polinomja $x^2 - 25x$, sajátértékei nemnegatívak (25, 0), tehát pozitív szemidefinit, így ilyen $\mathbf{B}$ és $\mathbf{C}$ mátrixok léteznek. $\mathbf{A}$ sajátfelbontása, a $\mathbf{B}$ és $\mathbf{C}$ mátrix:

$$\begin{aligned}
\mathbf{A} = \mathbf{Q}\boldsymbol{\Lambda}\mathbf{Q}^{\mathsf{T}} &= \begin{bmatrix} 3/5 & 4/5 \\ -4/5 & 3/5 \end{bmatrix} \begin{bmatrix} 25 & 0 \\ 0 & 0 \end{bmatrix} \begin{bmatrix} 3/5 & -4/5 \\ 4/5 & 3/5 \end{bmatrix}, \\
\mathbf{C} = \boldsymbol{\Lambda}^{\frac{1}{2}}\mathbf{Q}^{\mathsf{T}} &= \begin{bmatrix} 5 & 0 \\ 0 & 0 \end{bmatrix} \begin{bmatrix} 3/5 & -4/5 \\ 4/5 & 3/5 \end{bmatrix} = \begin{bmatrix} 3 & -4 \\ 0 & 0 \end{bmatrix}, \\
\mathbf{B} = \mathbf{Q}\boldsymbol{\Lambda}^{\frac{1}{2}}\mathbf{Q}^{\mathsf{T}} &= \begin{bmatrix} 3/5 & 4/5 \\ -4/5 & 3/5 \end{bmatrix} \begin{bmatrix} 5 & 0 \\ 0 & 0 \end{bmatrix} \begin{bmatrix} 3/5 & -4/5 \\ 4/5 & 3/5 \end{bmatrix} = \begin{bmatrix} 9/5 & -12/5 \\ -12/5 & 16/5 \end{bmatrix}.
\end{aligned}$$

Ilyen pozitív szemidefinit $\mathbf{B}$ csak egy van, de $\mathbf{C}$-re jó a $\mathbf{C} = \mathbf{B}$ mátrix is. $\square$

**9.23. tétel (Pozitív definit mátrixok faktorizációi).** *Legyen az $\mathbf{A} \in \mathbb{R}^{n \times n}$ mátrix szimmetrikus. A következő állítások ekvivalensek:*

*a) $\mathbf{A}$ pozitív definit,*

*b) az $\mathbf{A} = \mathbf{L}\mathbf{U}$ LU-felbontásban $\mathbf{U}$ minden főátlóbeli eleme pozitív,*

*c) van olyan valós $\mathbf{R}$ felsőháromszög-mátrix, melynek minden főátlóbeli eleme pozitív, és $\mathbf{A} = \mathbf{R}^{\mathsf{T}}\mathbf{R}$,*

*d) van olyan invertálható valós $\mathbf{C}$ mátrix, hogy $\mathbf{A} = \mathbf{C}^{\mathsf{T}}\mathbf{C}$,*

*e) van olyan szimmetrikus pozitív definit $\mathbf{B}$ mátrix, hogy $\mathbf{A} = \mathbf{B}^2$ és e mátrix egyértelmű.*

*A c) pont szerinti $\mathbf{R}$ mátrix egyértelmű, az $\mathbf{A} = \mathbf{R}^{\mathsf{T}}\mathbf{R}$ felbontást az $\mathbf{A}$ mátrix Cholesky-felbontásának nevezzük.*

*Bizonyítás.* $a) \Leftrightarrow d) \Leftrightarrow e)$: bizonyítása lényegében azonos a 9.21. tétel bizonyításával, csak itt minden mátrix invertálható.

$a) \Rightarrow b)$: Ha $\mathbf{A}$ pozitív definit, akkor a 0 nem sajátértéke, így invertálható. Invertálható mátrix LU-felbontása egyértelmű (ld. 5.37. tétel). Legyen $\mathbf{A} = \mathbf{L}\mathbf{U}$. Ekkor $\mathbf{e}_i^{\mathsf{T}}\mathbf{A}\mathbf{e}_i = \mathbf{e}_i^{\mathsf{T}}\mathbf{L}\mathbf{U}\mathbf{e}_i = u_{ii} > 0$, ahol $u_{ii}$ az $\mathbf{U}$ főátlóbeli eleme, ami tehát mind pozitív.

$b) \Rightarrow c)$: Az

$$\mathbf{U} = \mathbf{D}\hat{\mathbf{U}} = \begin{bmatrix} u_{11} & 0 & \dots & 0 \\ 0 & u_{22} & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & u_{nn} \end{bmatrix} \begin{bmatrix} 1 & u_{12}/u_{11} & \dots & u_{1n}/u_{11} \\ 0 & 1 & \dots & u_{2n}/u_{22} \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & 1 \end{bmatrix}$$

felbontással olyan $\mathbf{A} = \mathbf{L}\mathbf{D}\hat{\mathbf{U}}$ felbontást kaptunk, ahol $\mathbf{L}$ alsó, $\hat{\mathbf{U}}$ felső egységháromszög-mátrix. Mivel $\mathbf{A}^{\mathsf{T}} = \mathbf{A}$ azaz $\mathbf{A} = \mathbf{L}\mathbf{D}\hat{\mathbf{U}} = \hat{\mathbf{U}}^{\mathsf{T}}\mathbf{D}^{\mathsf{T}}\mathbf{D}\mathbf{L}^{\mathsf{T}}$, és e felbontás is egyértelmű, ezért $\mathbf{L} = \hat{\mathbf{U}}^{\mathsf{T}}$, azaz $\mathbf{A} = \mathbf{L}\mathbf{D}\mathbf{L}^{\mathsf{T}}$. $\mathbf{D}^{\frac{1}{2}}$-del jelölve a $\mathbf{D}$ négyzetgyökeiből álló mátrixot, kapjuk, hogy az $\mathbf{R} = \mathbf{D}^{\frac{1}{2}}\mathbf{L}^{\mathsf{T}}$ mátrixszal $\mathbf{A} = \mathbf{R}^{\mathsf{T}}\mathbf{R}$.

Bónuszként azt is megkaptuk, hogy e felbontás egyértelmű.

$c) \Rightarrow d)$: Ha $\mathbf{R}$ minden főátlóbeli eleme pozitív, akkor $\mathbf{R}$ invertálható, így $\mathbf{C} = \mathbf{R}$ megfelel.

$d) \Rightarrow a)$: Ha $\mathbf{A} = \mathbf{C}^{\mathsf{T}}\mathbf{C}$, akkor az előző 9.21. tétel szerint $\mathbf{A}$ pozitív szemidefinit. Ha viszont $\mathbf{C}$ invertálható, akkor $\mathbf{C}^{\mathsf{T}}\mathbf{C}$ is, így $\mathbf{A}$ egyetlen sajátértéke sem 0, tehát $\mathbf{A}$ pozitív definit. $\square$

**9.24. példa (Cholesky-felbontás).** *Adjuk meg az $\mathbf{A}$ mátrix Cholesky-felbontását, ahol*

$$\mathbf{A} = \begin{bmatrix} 1 & 1 & 0 \\ 1 & 5 & 2 \\ 0 & 2 & 2 \end{bmatrix}.$$

*Megoldás.* Az $\mathbf{A}$ mátrix pozitív definit (pl. mert $\chi_{\mathbf{A}}(x) = -x^3 + 8x^2 - 12x + 4$ értéke 0-ban pozitív, deriváltjának zérushelyei pozitívak, így

a lokális szélsőértékhelyek, s ennek következtében a zérushelyek is). Mivel az LU-felbontás

$$\mathbf{A} = \begin{bmatrix} 1 & 0 & 0 \\ 1 & 1 & 0 \\ 0 & \tfrac{1}{2} & 1 \end{bmatrix} \begin{bmatrix} 1 & 1 & 0 \\ 0 & 4 & 2 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 1 & 1 & 0 \\ 0 & \tfrac{1}{2} & 1 \end{bmatrix} \begin{bmatrix} 1 & 0 & 0 \\ 0 & 4 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 1 & 1 & 0 \\ 0 & 1 & \tfrac{1}{2} \\ 0 & 0 & 1 \end{bmatrix},$$

amiből a $\operatorname{diag}(1,4,1) = \operatorname{diag}(1,2,1)\operatorname{diag}(1,2,1)$ és az $\mathbf{R} = \operatorname{diag}(1,2,1)\mathbf{L}^{\mathsf{T}}$ összefüggésekből

$$\mathbf{A} = \begin{bmatrix} 1 & 1 & 0 \\ 1 & 5 & 2 \\ 0 & 2 & 2 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 1 & 2 & 0 \\ 0 & 1 & 1 \end{bmatrix} \begin{bmatrix} 1 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 1 \end{bmatrix}.$$

$\square$

### Definitség és főminorok

Mátrix definitsége gyakran könnyen eldönthető főminorainak vagy vezető főminorainak értékéből.

Válasszuk ki egy négyzetes mátrix néhány sorát, a többi sort és oszlopot hagyjuk el. Az így kapott négyzetes részmátrix determinánsát a mátrix *főminorának* nevezzük. Ha az első $k$ sort és az első $k$ oszlopot választjuk ki, *vezető főminorról* beszélünk, pontosabban a *$k$-adrendű* vagy *vezető főminorról*. A vezető főminor másik elnevezése *sarokaldetermináns*.

Ha egy mátrix diagonális alakú és pozitív definit, azaz minden sajátértéke pozitív, akkor minden főminora is pozitív, ha pozitív szemidefinit, akkor minden főminora nemnegatív. Ha e diagonális mátrix minden sajátértéke negatív, akkor vezető főminorai felváltva $- + - + - + \dots$ előjelűek. E megfigyelések átvihetők nem diagonális alakú mátrixokra is.

**9.25. tétel (A definitség és a főminorok kapcsolata).** *A valós szimmetrikus $\mathbf{A}$ mátrix, illetve az $\mathbf{x}^{\mathsf{T}}\mathbf{A}\mathbf{x}$ kvadratikus alak pontosan akkor*

*a) pozitív definit, ha $\mathbf{A}$ minden vezető főminora pozitív;*

*b) pozitív definit, ha $\mathbf{A}$ minden főminora pozitív;*

*c) negatív definit, ha $\mathbf{A}$ minden páratlan rendű vezető főminora negatív, páros rendű vezető főminora pozitív.*

*d) pozitív szemidefinit, ha $\mathbf{A}$ minden főminora nemnegatív;*

**Bizonyítás.** *a)* Ha $\mathbf{A}$ pozitív definit, akkor LU-felbontásában az $\mathbf{U}$ minden főátlóbeli eleme pozitív. Jelölje az $\mathbf{A}$, $\mathbf{L}$, $\mathbf{U}$ mátrix első $k$ sorának és első $k$ oszlopának kereszteződésében álló részmátrixot $\mathbf{A}_k$, $\mathbf{L}_k$, illetve $\mathbf{U}_k$. Az LU-felbontás e részmátrixokkal blokkosítva

$$\mathbf{A} = \begin{bmatrix} \mathbf{A}_k & * \\ * & * \end{bmatrix} = \begin{bmatrix} \mathbf{L}_k & \mathbf{O} \\ * & * \end{bmatrix} \begin{bmatrix} \mathbf{U}_k & * \\ \mathbf{O} & * \end{bmatrix} = \begin{bmatrix} \mathbf{L}_k\mathbf{U}_k & * \\ * & * \end{bmatrix},$$

azaz $\mathbf{A}_k = \mathbf{L}_k\mathbf{U}_k$, így a $k$-adik vezető főminor $|\mathbf{A}_k| = |\mathbf{L}_k||\mathbf{U}_k| = u_{11}u_{22}\dots u_{kk} > 0$.

Fordítva, ha $\mathbf{A}$ minden főminora pozitív, azaz $\det(\mathbf{A}_k) > 0$ ($k = 1, 2, \dots, n$), akkor $u_{kk} = \det(\mathbf{A}_k)/\det(\mathbf{A}_{k-1}) > 0$, így a 9.23. tétel *b)* pontja szerint $\mathbf{A}$ pozitív definit.

*b)* Ha $\mathbf{P}$ egy olyan permutáló mátrix, mely $\mathbf{A}$ egy adott főminorához tartozó sorokat az első sorokba permutálja, akkor a $\mathbf{P}\mathbf{A}\mathbf{P}^{\mathsf{T}}$ mátrixban e főminor vezető főminorrá válik, e mátrix pedig hasonló $\mathbf{A}$-hoz és szimmetrikus, így azonos definitségű. Tehát $\mathbf{A}$-nak pontosan akkor pozitív minden főminora, ha minden vezető főminora az.

*c)* Ha az $\mathbf{A}$ negatív definit, akkor $-\mathbf{A} = \mathbf{L}\mathbf{U}$ felbontásban minden $i$-re $u_{ii} < 0$, ami igazolja az állítást.

*d)* Ha az $\mathbf{A}$ pozitív szemidefinit, az $\leqslant i_1 < i_2 < \cdots < i_k \leqslant n$ sor- és oszlopindexekhez tartozó $\mathbf{B}$ részmátrix is pozitív szemidefinit, hisz bármely $\hat{\mathbf{x}}^{\mathsf{T}}\mathbf{B}\hat{\mathbf{x}}$ szorzatban $\hat{\mathbf{x}}$ kiegészíthető nullákkal úgy, hogy $[\hat{\mathbf{x}}]_j = [\mathbf{x}]_{i_j}$ legyen, így $\hat{\mathbf{x}}^{\mathsf{T}}\mathbf{B}\hat{\mathbf{x}} = \mathbf{x}^{\mathsf{T}}\mathbf{A}\mathbf{x} \geqslant 0$.

Fordítva: tegyük fel, hogy $\mathbf{A}$ minden főminora nemnegatív. Megmutatjuk, hogy ekkor bármely $\varepsilon > 0$ esetén $\mathbf{A} + \varepsilon\mathbf{I}$ pozitív definit, mert sarokaldeterminánsai pozitívak. Így $\mathbf{x}^{\mathsf{T}}(\mathbf{A} + \varepsilon\mathbf{I})\mathbf{x} > 0$ minden $\mathbf{x} \neq \mathbf{0}$ vektorra, amiből

$$\lim_{\varepsilon \to 0^+} \mathbf{x}^{\mathsf{T}}(\mathbf{A} + \varepsilon\mathbf{I})\mathbf{x} = \mathbf{x}^{\mathsf{T}}\mathbf{A}\mathbf{x} \geqslant 0.$$

$\square$

> *A tétel vezető főminorokra vonatkozó pontjai nem vihetők át minden további feltétel nélkül szemidefinit mátrixokra. Az ugyan igaz, hogy ha egy mátrix pozitív szemidefinit, akkor vezető főminorainak sorozata egy darabig pozitív, majd onnan 0. Ennek megfordítása viszont már nem igaz. Például a*

$$\begin{bmatrix} 1 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & -1 \end{bmatrix}$$

> *mátrix főminorainak sorozata 1, 0, 0, de a mátrix indefinit.*

### Szélsőérték

A többváltozós függvények szélsőértékének első és második parciális deriváltjaira vonatkozó feltételei azonnal érthetővé válnak a definitség fogalmának segítségével.

A függvényanalízisből ismert Taylor tételének többváltozós alakja szerint egy legalább kétszer differenciálható $f : \mathbb{R}^n \to \mathbb{R}$ függvény a következő alakban írható fel:

$$f(\mathbf{x}) = f(\mathbf{a}) + \sum_{i=1}^{n} \frac{\partial f}{\partial x_i}(\mathbf{a})(x_i - a_i) + \sum_{i,j} \frac{\partial^2 f}{\partial x_i \partial x_j}(\mathbf{a})(x_i - a_i)(x_j - a_j) + \sum_{i,j} \varepsilon_{ij}(\mathbf{x})(x_i - a_i)(x_j - a_j),$$

ahol $\mathbf{a} \in \mathbb{R}^n$ az $f$ értelmezési tartományának egy belső pontja.

### Feladatok

**9.3.** A sajátértékek kiszámításával döntsük el az alábbi mátrixok definitségét!

$$\mathbf{A} = \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} 1 & 2 \\ 2 & 3 \end{bmatrix}$$

**9.4. Felbontás $\mathbf{C}^{\mathsf{T}}\mathbf{C}$ és $\mathbf{B}^2$ szorzattá.** Legyen

$$\mathbf{A} = \begin{bmatrix} 5 & 4 & -2 \\ 4 & 5 & 2 \\ -2 & 2 & 8 \end{bmatrix}.$$

Vannak-e olyan $\mathbf{B}$ és $\mathbf{C}$ mátrixok, melyekre $\mathbf{A} = \mathbf{B}^2 = \mathbf{C}^{\mathsf{T}}\mathbf{C}$, és ha igen, adjunk meg ilyeneket! Amelyikre több megoldás is van, adjunk meg legalább kettőt!

**9.5.** Az $a(x, y) = 2x^2 + 2xy + 2y^2$, $b(x, y) = x^2 + 2xy + y^2$ és $c(x, y) = x^2 + 4xy + 3y^2$ kvadratikus alakokat állítsuk elő két teljes négyzet $+1$, 0 vagy $-1$ együtthatós összegeként! (Ezek az előző feladatbeli mátrixokhoz tartozó kvadratikus alakok.)

**9.6.** Igazoljuk, hogy a $q(\mathbf{x}) = \mathbf{x}^{\mathsf{H}}\mathbf{A}\mathbf{x}$ kvadratikus alak pontosan akkor valós értékű, ha $\mathbf{A}$ önadjungált!

### Megoldások

**9.1.** $\operatorname{diag}(\mathbf{A}_1, \dots, \mathbf{A}_k)\operatorname{diag}(\mathbf{A}_1, \dots, \mathbf{A}_k)^{\mathsf{T}} = \operatorname{diag}(\mathbf{A}_1, \dots, \mathbf{A}_k)^{\mathsf{T}}\operatorname{diag}(\mathbf{A}_1, \dots, \mathbf{A}_k) \iff \operatorname{diag}(\mathbf{A}_1\mathbf{A}_1^{\mathsf{T}}, \dots, \mathbf{A}_k\mathbf{A}_k^{\mathsf{T}}) = \operatorname{diag}(\mathbf{A}_1^{\mathsf{T}}\mathbf{A}_1, \dots, \mathbf{A}_k^{\mathsf{T}}\mathbf{A}_k)$.

**9.2.** $\begin{bmatrix} a & b \\ c & d \end{bmatrix}^{\mathsf{T}}\begin{bmatrix} a & b \\ c & d \end{bmatrix} = \begin{bmatrix} a & b \\ c & d \end{bmatrix}\begin{bmatrix} a & b \\ c & d \end{bmatrix}^{\mathsf{T}}$ pontosan akkor igaz, ha $b^2 = c^2$ és $ab + cd = ac + bd$. $c = b$ nem lehet, mert akkor a mátrix szimmetrikus lenne, és annak valósak a sajátértékei, így $c = -b \neq 0$. Innen $ab - bd = -ab + bd$, azaz $a = d$.

**9.3.** $\mathbf{A}$ pozitív definit, mert sajátértékei 3 és 1. $\mathbf{B}$ pozitív szemidefinit, mert sajátértékei 2 és 0. $\mathbf{C}$ indefinit, mert karakterisztikus polinomja $x^2 - 4x - 1$, így egyik sajátértéke pozitív, másik negatív.

**9.4.** $\mathbf{A}$ szimmetrikus, sajátértékei nemnegatívak (9, 9, 0), tehát pozitív szemidefinit, ilyen $\mathbf{B}$ és $\mathbf{C}$ mátrixok léteznek. $\mathbf{A}$ sajátfelbontása, a $\mathbf{C}$ és a $\mathbf{B}$ mátrix:

$$\begin{aligned}
\mathbf{A} &= \mathbf{Q}\boldsymbol{\Lambda}\mathbf{Q}^{\mathsf{T}} \\
&= \frac{1}{3}\begin{bmatrix} 1 & 2 & 2 \\ 2 & 1 & -2 \\ 2 & -2 & 1 \end{bmatrix} \begin{bmatrix} 9 & 0 & 0 \\ 0 & 9 & 0 \\ 0 & 0 & 0 \end{bmatrix} \frac{1}{3}\begin{bmatrix} 1 & 2 & 2 \\ 2 & 1 & -2 \\ 2 & -2 & 1 \end{bmatrix},
\end{aligned}$$

$$\begin{aligned}
\mathbf{C} &= \boldsymbol{\Lambda}^{\frac{1}{2}}\mathbf{Q}^{\mathsf{T}} \\
&= \begin{bmatrix} 3 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 0 \end{bmatrix} \frac{1}{3}\begin{bmatrix} 1 & 2 & 2 \\ 2 & 1 & -2 \\ 2 & -2 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 2 & 2 \\ 2 & 1 & -2 \\ 0 & 0 & 0 \end{bmatrix},
\end{aligned}$$

$$\begin{aligned}
\mathbf{B} &= \mathbf{Q}\boldsymbol{\Lambda}^{\frac{1}{2}}\mathbf{Q}^{\mathsf{T}} \\
&= \frac{1}{3}\begin{bmatrix} 1 & 2 & 2 \\ 2 & 1 & -2 \\ 2 & -2 & 1 \end{bmatrix} \begin{bmatrix} 3 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 0 \end{bmatrix} \frac{1}{3}\begin{bmatrix} 1 & 2 & 2 \\ 2 & 1 & -2 \\ 2 & -2 & 1 \end{bmatrix} \\
&= \frac{1}{3}\begin{bmatrix} 5 & 4 & -2 \\ 4 & 5 & 2 \\ -2 & 2 & 8 \end{bmatrix}
\end{aligned}$$

**9.5.** $a(x, y) = 2x^2 + 2xy + 2y^2 = (\sqrt{2}x + \tfrac{1}{\sqrt{2}}y)^2 + (\tfrac{\sqrt{3}}{\sqrt{2}}y)^2$, $b(x, y) = x^2 + 2xy + y^2 = (x + y)^2 + 0$ és $c(x, y) = x^2 + 4xy + 3y^2 = (x + 2y)^2 - y^2$.

# 10. Szinguláris érték

A szimmetrikus mátrix ortogonális diagonalizálását fogjuk általánosítani tetszőleges mátrixra, egy helyett két ortonormált bázis megkeresésével. Úgy is fogalmazhatunk, hogy a $\mathcal{V} \to \mathcal{V}$ lineáris transzformációk ortogonális diagonalizálását fogjuk általánosítani $\mathcal{V}_1 \to \mathcal{V}_2$ lineáris leképezésekre. E diagonalizálás a mátrixok, illetve a lineáris leképezések további fontos tulajdonságainak leírását segíti, példaként a mátrixnormákat fogjuk vizsgálni. E téma alkalmazásai közül kiemelkednek az információtömörítéssel kapcsolatosak, de az egyenletrendszerek megoldásához használt leghatékonyabbak közé tartozó algoritmusok is ide sorolhatók.

## Szinguláris érték, szinguláris vektor, SVD

> *Az ortogonális diagonalizációt általánosítjuk, melyben a sajátértékek szerepét a szinguláris értékek veszik át, a sajátfelbontását a szinguláris érték szerinti felbontás (SVD).*

### Szinguláris érték, szinguláris vektor

Azt tudjuk, hogy egy $\mathbf{A} \in \mathbb{R}^{m \times n}$ mátrixhoz tartozó mátrixleképezés kölcsönösen egyértelmű a sortér és az oszloptér között. Indulásként e két altérben keresünk ortonormált bázisokat, melyek közt a leképezés mátrixa diagonális alakot ölt. Ezeket kiegészítjük az $\mathbb{R}^n$ és az $\mathbb{R}^m$ ortonormált bázisává. A komplex terekben mindez hasonlóképp megvalósítható.

Az $\mathbf{A} \in \mathbb{R}^{m \times n}$ mátrixhoz olyan ortonormált $\{\mathbf{v}_1, \mathbf{v}_2 \dots, \mathbf{v}_n\} \subset \mathbb{R}^n$ és $\{\mathbf{u}_1, \mathbf{u}_2, \dots, \mathbf{u}_m\} \subset \mathbb{R}^m$ bázisokat keresünk, melyekben $\mathbf{A}$ mátrixa diagonálissá válik. Ez azt jelenti, hogy léteznek olyan $\sigma_i$ valósok, hogy $\mathbf{A}\mathbf{v}_i = \sigma_i\mathbf{u}_i$, ahol $1 \leqslant i \leqslant \min(m, n)$. Eszerint olyan egymásra merőleges vektorokat keresünk, melyek képei is merőlegesek egymásra. Ehhez ad ötletet a következő állítás:

**10.1. állítás.** *Ha az egymásra merőleges $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$ vektorok legalább egyike az $\mathbf{A}^{\mathsf{T}}\mathbf{A}$ sajátvektora, akkor az $\mathbf{A}\mathbf{x}, \mathbf{A}\mathbf{y} \in \mathbb{R}^m$ vektorok is merőlegesek egymásra.*

**Bizonyítás.** A feltételek szerint $\mathbf{x} \cdot \mathbf{y} = 0$, és legyen például $\mathbf{A}^{\mathsf{T}}\mathbf{A}\mathbf{y} = \lambda\mathbf{y}$. Ekkor

$$\mathbf{A}\mathbf{x} \cdot \mathbf{A}\mathbf{y} = (\mathbf{A}\mathbf{x})^{\mathsf{T}}\mathbf{A}\mathbf{y} = \mathbf{x}^{\mathsf{T}}\mathbf{A}^{\mathsf{T}}\mathbf{A}\mathbf{y} = \mathbf{x} \cdot (\lambda\mathbf{y}) = \lambda(\mathbf{x} \cdot \mathbf{y}) = 0.$$

$\square$

Mivel $\mathbf{A}^{\mathsf{T}}\mathbf{A}$ szimmetrikus és pozitív szemidefinit, ezért ortogonálisan diagonalizálható és a sajátértékei nem negatívak. A sajátvektoraiból kiválasztható $\mathbb{R}^n$ egy ortonormált bázisa. E vektorok közül a 0 sajátértékhez tartozó az $\mathcal{N}(\mathbf{A}^{\mathsf{T}}\mathbf{A}) = \mathcal{N}(\mathbf{A})$ tér ortonormált bázisát alkotják (ha $\mathcal{N}(\mathbf{A}) = \{\mathbf{0}\}$, akkor e bázis az üres halmaz). Így a többi a nulltér merőleges kiegészítő alterének, azaz a sortérnek alkotja ortonormált bázisát. E bázist jelölje $\{\mathbf{v}_1, \dots, \mathbf{v}_r\}$, ahol $r$ az $\mathbf{A}$ rangja, ami megegyezik a sortér dimenziójával. E vektorok egyike sincs a nulltérben, és $\mathbf{A}$ általi képeik páronként merőlegesek egymásra, így az $\mathbf{A}\mathbf{v}_i$ vektorok ortogonális bázist alkotnak az oszloptérben. Ha $\mathbf{v}_i$ az $\mathbf{A}^{\mathsf{T}}\mathbf{A}$ mátrix $\lambda_i > 0$ sajátértékéhez tartozó egységnyi sajátvektora, akkor $|\mathbf{A}\mathbf{v}_i| = \sqrt{\lambda_i}$, ugyanis

$$|\mathbf{A}\mathbf{v}_i|^2 = (\mathbf{A}\mathbf{v}_i)^{\mathsf{T}}(\mathbf{A}\mathbf{v}_i) = \mathbf{v}_i^{\mathsf{T}}\mathbf{A}^{\mathsf{T}}\mathbf{A}\mathbf{v}_i = \lambda_i|\mathbf{v}_i|^2 = \lambda_i.$$

Legyen $\sigma_i = \sqrt{\lambda_i}$, így $\mathbf{A}\mathbf{v}_i = \sigma_i\mathbf{u}_i$, ahol $\mathbf{u}_i$ egységvektor. Ekkor az $\{\mathbf{u}_1, \dots, \mathbf{u}_r\}$ vektorrendszer ortonormált bázis az oszloptérben. Mivel $\mathbf{A}\mathbf{v}_i = \sigma_i\mathbf{u}_i$, $\mathbf{A}^{\mathsf{T}}\mathbf{A}\mathbf{v}_i = \sigma_i^2\mathbf{v}_i$, így $\mathbf{A}^{\mathsf{T}}\mathbf{u}_i = \frac{1}{\sigma_i}\mathbf{A}^{\mathsf{T}}\mathbf{A}\mathbf{v}_i = \frac{1}{\sigma_i}\sigma_i^2\mathbf{v}_i = \sigma_i\mathbf{v}_i$, tehát az

$$\mathbf{A}\mathbf{v}_i = \sigma_i\mathbf{u}_i, \quad \mathbf{A}^{\mathsf{T}}\mathbf{u}_i = \sigma_i\mathbf{v}_i \tag{10.1}$$

összefüggések párba állítják a $\mathbf{v}_i$ és $\mathbf{u}_i$ vektorokat. Ha pedig $\mathbf{v} \in \mathcal{N}(\mathbf{A})$, $\mathbf{u} \in \mathcal{N}(\mathbf{A}^{\mathsf{T}})$, és $\sigma = 0$, akkor az

$$\mathbf{A}\mathbf{v} = \sigma\mathbf{u}, \quad \mathbf{A}^{\mathsf{T}}\mathbf{u} = \sigma\mathbf{v} \tag{10.2}$$

összefüggések itt is fennállnak. Ez a következő definícióhoz vezet.

**10.2. definíció (Szinguláris érték, szinguláris vektor).** *Az $r$ rangú $\mathbf{A} \in \mathbb{R}^{m \times n}$ mátrix szinguláris értékének nevezzük azt a nemnegatív $\sigma$ valóst, melyhez van olyan $\mathbf{v} \in \mathbb{R}^n$ és $\mathbf{u} \in \mathbb{R}^m$ két nemzérus vektor, hogy*

$$\mathbf{A}\mathbf{v} = \sigma\mathbf{u}, \quad \mathbf{A}^{\mathsf{T}}\mathbf{u} = \sigma\mathbf{v}. \tag{10.3}$$

*A $\mathbf{v}$ vektort jobb, az $\mathbf{u}$ vektort bal szinguláris vektornak nevezzük. A $\sigma$ szinguláris érték multiplicitása $s$, ha legfeljebb $s$ olyan független $\mathbf{v}_1, \dots, \mathbf{v}_s$ jobb és $\mathbf{u}_1, \dots, \mathbf{u}_s$ bal szinguláris vektor található, hogy minden $i = 1, 2 \dots, s$ indexre*

$$\mathbf{A}\mathbf{v}_i = \sigma\mathbf{u}_i, \quad \mathbf{A}^{\mathsf{T}}\mathbf{u}_i = \sigma\mathbf{v}_i. \tag{10.4}$$

> *A szinguláris érték fogalmát 1907-ben Erhard Schmidt vezette be, de ő még sajátértéknek nevezte. Mai nevét 1937-ben kapta, mert különösen akkor tűnt hasznos eszköznek – például az egyenletrendszerek megoldásában –, amikor az együtthatómátrix szinguláris.*

> *Ahogy a sajátértékhez mindig társul egy sajátvektor, úgy itt a szinguláris értékhez mindig társul két szinguláris vektor, egy jobb az $\mathbb{R}^n$-ből és egy bal az $\mathbb{R}^m$-ből. E vektorok nem egyértelműek, ahogy a sajátvektorok sem. Ha viszont egy pozitív szinguláris értékhez kiválasztottunk egy jobb szinguláris vektort, akkor a szinguláris értéket és vektort definiáló képletek a balt már egyértelműen meghatározzák, és fordítva, egy bal szinguláris vektorhoz egyértelműen megadnak egy jobbat. A 0 szinguláris érték esetén bármely bal és jobb szinguláris vektor párba állítható.*

> *Ha $\mathbf{A}$ rangja $r$, akkor a fentiek alapján $r$ darab pozitív szinguláris értéke van. Ezeket az általánosan elterjedt szokásnak megfelelően nagyság szerint indexeljük, azaz*

$$\sigma_1 \geq \sigma_2 \geq \cdots \geq \sigma_r > \sigma_{r+1} = \ldots = 0.$$

> *Ha $\sigma$ $s$-szeres multiplicitású szinguláris értéke $\mathbf{A}$-nak, akkor $\sigma^2$ az $\mathbf{A}^{\mathsf{T}}\mathbf{A}$-nak $s$-szeres algebrai (és $s$-szeres geometriai) multiplicitású sajátértéke, így a $\sigma$-hoz tartozó jobb szinguláris vektorok a sortérben, a hozzá tartozó bal szinguláris vektorok pedig az oszloptérben $s$-dimenziós alteret feszítenek ki.*

> *Van olyan könyv, amely szinguláris értéken csak a pozitív szinguláris értéket érti, van olyan, amely szinguláris vektoron csak az egységnyieket, sőt van olyan is, amely szinguláris vektornak csak egy adott ortonormált bázis vektorait tekinti. Mi azt a koncepciót követtük, mely a sajátértékkel és sajátvektorral való analógiát, a velük való szoros kapcsolatot és az ortogonális diagonalizálás kiterjesztésének célját helyezi első helyre a fogalomalkotásban.*

> *Ha $\mathbf{A} \in \mathbb{C}^{m \times n}$, akkor (a komplex vektortér kitüntetett altereiről szóló definíciónak megfelelően) sortér helyett az $\mathcal{O}(\mathbf{A}^{\mathsf{H}})$ altérrel, továbbá transzponálás helyett adjungálással, tehát $\mathbf{A}^{\mathsf{T}}\mathbf{A}$ helyett az $\mathbf{A}^{\mathsf{H}}\mathbf{A}$ mátrixszal igazak maradnak az eddig mondottak. A szinguláris érték definíciója is csak annyiban változik, hogy $\mathbf{A}^{\mathsf{T}}$ helyett $\mathbf{A}^{\mathsf{H}}$ szerepel benne, azaz az $\mathbf{A} \in \mathbb{C}^{m \times n}$ mátrix szinguláris értékének nevezzük azt a nemnegatív $\sigma$ valóst, melyhez van olyan nem zérus $\mathbf{v} \in \mathbb{C}^n$ és $\mathbf{u} \in \mathbb{C}^m$ vektor, hogy*

$$\mathbf{A}\mathbf{v} = \sigma\mathbf{u}, \quad \mathbf{A}^{\mathsf{H}}\mathbf{u} = \sigma\mathbf{v}. \tag{10.5}$$

A továbbiakban $\mathbb{K}$ az $\mathbb{R}$ vagy $\mathbb{C}$ testet jelöli, így közösen tárgyaljuk a valós és komplex esetet.

**10.3. példa (Szinguláris értékek és vektorok).** *Határozzuk meg az*

$$\mathbf{A} = \begin{bmatrix} -4/13 & 6 \\ 111/13 & -4 \end{bmatrix}$$

*mátrix szinguláris értékeit, és keressünk a jobb szinguláris vektorok közt egy ortonormált bázist, és adjunk meg a megfelelő bal szinguláris vektorokból álló ONB-t is.*

**Megoldás.** Mivel

$$\mathbf{A}^{\mathsf{T}}\mathbf{A} = \begin{bmatrix} 73 & -36 \\ -36 & 52 \end{bmatrix},$$

melynek karakterisztikus polinomja $\chi(x) = x^2 - 125x + 2500$, és annak gyökei $\lambda_1 = 100$, $\lambda_2 = 25$, ezért az $\mathbf{A}$ szinguláris értékei $\sigma_1 = 10$, $\sigma_2 = 5$.

Az $\mathbf{A}^{\mathsf{T}}\mathbf{A}$ sajátpárjai egységnyi sajátvektorokkal: $(100, (4/5, -3/5))$, $(25, (3/5, 4/5))$. Az $\mathbf{A}$ jobb szinguláris vektorai tehát $\mathbf{v}_1 = (4/5, -3/5)$ és $\mathbf{v}_2 = (3/5, 4/5)$. Mivel

$$\begin{bmatrix} -4/13 & 6 \\ 111/13 & -4 \end{bmatrix} \begin{bmatrix} 4/5 \\ -3/5 \end{bmatrix} = 10 \begin{bmatrix} -5/13 \\ 12/13 \end{bmatrix}, \quad \begin{bmatrix} -4/13 & 6 \\ 111/13 & -4 \end{bmatrix} \begin{bmatrix} 3/5 \\ 4/5 \end{bmatrix} = 5 \begin{bmatrix} 12/13 \\ 5/13 \end{bmatrix},$$

ezért $\mathbf{u}_1 = (-5/13, 12/13)$ és $\mathbf{u}_2 = (12/13, 5/13)$ a hozzájuk tartozó bal szinguláris vektorok.

Látható, hogy $\{\mathbf{v}_1, \mathbf{v}_2\}$ és $\{\mathbf{u}_1, \mathbf{u}_2\}$ egyaránt ortonormált bázisai a sor-, illetve oszloptérnek, hisz e terek megegyeznek $\mathbb{R}^2$-tel. $\square$

### Szinguláris felbontás

Egy mátrix szinguláris értékei és vektorai egy mátrixfelbontást adnak, ezt fogjuk szinguláris érték szerinti felbontásnak nevezni.

Képezzük a szinguláris értékekből a diagonális

$$\boldsymbol{\Sigma}_1 = \operatorname{diag}(\sigma_1, \dots, \sigma_r) = \begin{bmatrix} \sigma_1 & 0 & \dots & 0 \\ 0 & \sigma_2 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \sigma_r \end{bmatrix}$$

mátrixot, valamint a hozzájuk tartozó jobb szinguláris vektorok egy ortonormált $\{\mathbf{v}_1, \dots, \mathbf{v}_r\}$ rendszeréből a

$$\mathbf{V}_1 = [\mathbf{v}_1 | \dots | \mathbf{v}_r]$$

mátrixot. Ekkor az $\mathbf{u}_i = \frac{1}{\sigma_i}\mathbf{A}\mathbf{v}_i$ képletekkel definiált vektorok $\{\mathbf{u}_1, \dots, \mathbf{u}_r\}$ rendszere is ortonormált. Képezzük belőlük az

$$\mathbf{U}_1 = [\mathbf{u}_1 | \dots | \mathbf{u}_r]$$

mátrixot. Ekkor az $\mathbf{A}\mathbf{v}_i = \sigma_i\mathbf{u}_i$ egyenlőségek az

$$\mathbf{A}\mathbf{V}_1 = \mathbf{U}_1\boldsymbol{\Sigma}_1, \tag{10.6}$$

azaz az

$$\mathbf{A}\begin{bmatrix} \mathbf{v}_1 & \mathbf{v}_2 & \dots & \mathbf{v}_r \end{bmatrix} = \begin{bmatrix} \mathbf{u}_1 & \mathbf{u}_2 & \dots & \mathbf{u}_r \end{bmatrix} \begin{bmatrix} \sigma_1 & 0 & \dots & 0 \\ 0 & \sigma_2 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \sigma_r \end{bmatrix} \tag{10.7}$$

alakot öltik. Mivel $\mathbf{V}_1$ szemiortogonális, és oszlopvektorai a sortér ONB-át alkotják, ezért $\mathbf{V}_1\mathbf{V}_1^{\mathsf{T}}$ a sortérre való merőleges vetítés mátrixa, így $\mathbf{A}\mathbf{V}_1\mathbf{V}_1^{\mathsf{T}} = \mathbf{A}$ (ld. még a **??** feladatot), ezért jobbról szorozva a (10.6) egyenletet $\mathbf{V}_1^{\mathsf{T}}$-tal kapjuk, hogy $\mathbf{A} = \mathbf{U}_1\boldsymbol{\Sigma}_1\mathbf{V}_1^{\mathsf{T}}$.

**10.4. definíció (Redukált szinguláris felbontás és diadikus alakja).** *A valós (komplex) $\mathbf{A}$ mátrix*

$$\mathbf{A} = \mathbf{U}_1\boldsymbol{\Sigma}_1\mathbf{V}_1^{\mathsf{T}} \quad (\mathbf{A} = \mathbf{U}_1\boldsymbol{\Sigma}_1\mathbf{V}_1^{\mathsf{H}})$$

*felbontását redukált szinguláris felbontásnak nevezzük, ha $\boldsymbol{\Sigma}_1$ négyzetes, diagonális mátrix, főátlójában monoton csökkenően rendezett pozitív valós számokkal, $\mathbf{U}_1$ és $\mathbf{V}_1$ szemiortogonálisak (komplex esetben $\mathbf{U}_1^{\mathsf{H}}\mathbf{U}_1 = \mathbf{V}_1^{\mathsf{H}}\mathbf{V}_1 = \mathbf{I}_r$). Ha ezt a szorzatot az $\mathbf{U}_1\boldsymbol{\Sigma}_1$ oszlopvektorokra és a $\mathbf{V}_1^{\mathsf{T}}$ sorvektorokra blokkosított alakjára írjuk fel, akkor az $\mathbf{A}$ mátrix egy diadikus felbontását kapjuk, melyet szinguláris érték szerinti diadikus felbontásnak nevezünk:*

$$\mathbf{A} = \sigma_1\mathbf{u}_1\mathbf{v}_1^{\mathsf{T}} + \sigma_2\mathbf{u}_2\mathbf{v}_2^{\mathsf{T}} + \cdots + \sigma_r\mathbf{u}_r\mathbf{v}_r^{\mathsf{T}}.$$

*(komplex esetben transzponált helyett adjungálttal).*

Egészítsük ki a $\{\mathbf{v}_1, \dots, \mathbf{v}_r\}$ vektorrendszert a teljes $n$-dimenziós tér ONB-ává. Jelöljük a belőlük képzett $n \times n$-es ortogonális (unitér) mátrixot $\mathbf{V}$-vel, $n > r$ esetén az új vektorokból képzett mátrixot $\mathbf{V}_2$-vel, azaz $\mathbf{V}_2 = \begin{bmatrix} \mathbf{v}_{r+1} & \dots & \mathbf{v}_n \end{bmatrix}$. Mivel $\mathbf{V}_2$ oszlopvektorai merőlegesek a sortérre (komplex esetben $\mathcal{O}(\mathbf{A}^{\mathsf{H}})$-ra), ezért a nulltérben vannak, tehát $r < i \leq n$ esetén $\mathbf{A}\mathbf{v}_i = \mathbf{0}$.

Hasonlóképp az előzőkhöz, egészítsük ki az $\{\mathbf{u}_1, \dots, \mathbf{u}_r\}$ vektorrendszert a teljes $m$-dimenziós tér ONB-ává, és jelöljük e vektorokból képzett $m \times m$-es mátrixot $\mathbf{U}$-val. $m > r$ esetén legyen $\mathbf{U}_2 = \begin{bmatrix} \mathbf{u}_{r+1} & \dots & \mathbf{u}_m \end{bmatrix}$. Végül a $\boldsymbol{\Sigma}_1 = \operatorname{diag}(\sigma_1, \dots, \sigma_r)$ mátrixot egészítsük ki egy $m \times n$-es mátrixszá nullblokkok hozzávételével, jelölje e mátrixot $\boldsymbol{\Sigma}$, tehát $\boldsymbol{\Sigma} = \begin{bmatrix} \boldsymbol{\Sigma}_1 & \mathbf{O} \\ \mathbf{O} & \mathbf{O} \end{bmatrix}$. Ekkor a (10.7) egyenlőség a következőképp
módosítható:

$$\begin{aligned}
\mathbf{A}\mathbf{V} &= \begin{bmatrix} \mathbf{A}\mathbf{v}_1 & \dots & \mathbf{A}\mathbf{v}_r & | & \mathbf{A}\mathbf{v}_{r+1} & \dots & \mathbf{A}\mathbf{v}_n \end{bmatrix} \\
&= \begin{bmatrix} \sigma_1\mathbf{u}_1 & \dots & \sigma_r\mathbf{u}_r & | & \mathbf{0} & \dots & \mathbf{0} \end{bmatrix} \\
&= \begin{bmatrix} \mathbf{u}_1 & \dots & \mathbf{u}_r & | & \mathbf{u}_{r+1} & \dots & \mathbf{u}_m \end{bmatrix} \left[\begin{array}{cccc|ccc} \sigma_1 & 0 & \dots & 0 & 0 & \dots & 0 \\ 0 & \sigma_2 & \dots & 0 & 0 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots & \vdots & \dots & \vdots \\ 0 & 0 & \dots & \sigma_r & 0 & \dots & 0 \\ \hline 0 & 0 & \dots & 0 & 0 & \dots & 0 \\ \vdots & \vdots & \dots & \vdots & \vdots & \dots & \vdots \\ 0 & 0 & \dots & 0 & 0 & \dots & 0 \end{array}\right] \\
&= \mathbf{U}\boldsymbol{\Sigma}.
\end{aligned}$$

A mátrixok méreteit is kiírva $\mathbf{A}_{m \times n}\mathbf{V}_{n \times n} = \mathbf{U}_{m \times m}\boldsymbol{\Sigma}_{m \times n}$, blokkmátrix alakba átírva

$$\mathbf{A}\begin{bmatrix} \mathbf{V}_1 & | & \mathbf{V}_2 \end{bmatrix} = \begin{bmatrix} \mathbf{U}_1 & | & \mathbf{U}_2 \end{bmatrix} \left[\begin{array}{c|c} \boldsymbol{\Sigma}_1 & \mathbf{O} \\ \hline \mathbf{O} & \mathbf{O} \end{array}\right].$$

Ha $r = n$, illetve $r = m$, akkor $\mathbf{V}_2$, illetve $\mathbf{U}_2$ üresek, azaz 0 számú oszlopból állnak, ami értelemszerűen változtat e képleten. Mivel a négyzetes $\mathbf{V}$ mátrix oszlopvektorai ONB-t alkotnak, ezért valós esetben $\mathbf{V}$ ortogonális, így $\mathbf{V}^{-1} = \mathbf{V}^{\mathsf{T}}$ (komplex esetben unitér, és $\mathbf{V}^{-1} = \mathbf{V}^{\mathsf{H}}$). Ezt fölhasználva, az $\mathbf{A}\mathbf{V} = \mathbf{U}\boldsymbol{\Sigma}$ egyenlőségből kapjuk, hogy $\mathbf{A} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{T}}$ ($\mathbf{A} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{H}}$).

**10.5. definíció (Szinguláris felbontás).** *A valós (komplex) $\mathbf{A}$ mátrix*

$$\mathbf{A} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{T}} \quad (\mathbf{A} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{H}})$$

*alakú felbontását $\mathbf{A}$ szinguláris érték szerinti felbontásának, vagy röviden szinguláris felbontásának nevezzük, ha $\mathbf{U}$ és $\mathbf{V}$ ortogonális (unitér) és $\boldsymbol{\Sigma}$ diagonális, főátlójában monoton csökkenően rendezett nem negatív valós számokkal.*

**10.6. példa (Szinguláris felbontás meghatározása).** *Számítsuk ki az*

$$\mathbf{A} = \begin{bmatrix} 0 & -2 & 2 \\ -2 & 3 & -2 \\ 4 & -2 & 0 \end{bmatrix}$$

*mátrix szinguláris értékeit, és írjuk fel szinguláris felbontásának összes változatát!*

**Megoldás.** A szinguláris értékek megegyeznek $\mathbf{A}^{\mathsf{T}}\mathbf{A}$ nemnulla sajátértékeinek gyökeivel.

$$\mathbf{A}^{\mathsf{T}}\mathbf{A} = \begin{bmatrix} 20 & -14 & 4 \\ -14 & 17 & -10 \\ 4 & -10 & 8 \end{bmatrix}.$$

Ennek karakterisztikus polinomja $x^3 - 45x^2 + 324x$, melynek gyökei 36, 9 és 0. Tehát a szinguláris értékek 6 és 3. Az $\mathbf{A}^{\mathsf{T}}\mathbf{A}$ mátrix egységnyi sajátvektorai:

$$\begin{aligned}
\lambda_1 &= 36 & \mathbf{v}_1 &= (2/3, -2/3, 1/3) \\
\lambda_2 &= 9 & \mathbf{v}_2 &= (2/3, 1/3, -2/3) \\
\lambda_3 &= 0 & \mathbf{v}_3 &= (1/3, 2/3, 2/3).
\end{aligned}$$

Mivel $\mathbf{A}\mathbf{v}_i = \sigma_i\mathbf{u}_i$, ezért $\mathbf{u}_i = \mathbf{A}\mathbf{v}_i/\sigma_i$. Így kiszámolható $\mathbf{u}_1$ és $\mathbf{u}_2$ is:

$$\begin{aligned}
\mathbf{u}_1 &= \frac{\mathbf{A}\mathbf{v}_1}{\sigma_1} = \frac{(2, -4, 4)}{6} = \left(\frac{1}{3}, -\frac{2}{3}, \frac{2}{3}\right) \\
\mathbf{u}_2 &= \frac{\mathbf{A}\mathbf{v}_2}{\sigma_2} = \frac{(-2, 1, 2)}{3} = \left(-\frac{2}{3}, \frac{1}{3}, \frac{2}{3}\right)
\end{aligned}$$

Az $\{\mathbf{u}_1, \mathbf{u}_2\}$ rendszert még ki kell egészítenünk $\mathbb{R}^3$ bázisává. Egyik módszer az lehet, hogy mivel $\{\mathbf{u}_1, \mathbf{u}_2\}$ az oszloptér bázisa, ezért a merőleges kiegészítő altérnek – vagyis $\mathbf{A}^{\mathsf{T}}$ nullterének – bázisát keressük. A másik módszer a vektori szorzást alkalmazza, ami ilyen kis méretű példákban egyszerűbb lehet: $\mathbf{u}_3 = \mathbf{u}_1 \times \mathbf{u}_2 = (-2/3, -2/3, -1/3)$. A szinguláris, a redukált szinguláris felbontás és annak diadikus alakja:

$$\mathbf{A} = \frac{1}{3}\begin{bmatrix} 1 & -2 & -2 \\ -2 & 1 & -2 \\ 2 & 2 & -1 \end{bmatrix} \begin{bmatrix} 6 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 0 \end{bmatrix} \frac{1}{3}\begin{bmatrix} 2 & -2 & 1 \\ 2 & 1 & -2 \\ 1 & 2 & 2 \end{bmatrix},$$

$$\mathbf{A} = \frac{1}{3}\begin{bmatrix} 1 & -2 \\ -2 & 1 \\ 2 & 2 \end{bmatrix} \begin{bmatrix} 6 & 0 \\ 0 & 3 \end{bmatrix} \frac{1}{3}\begin{bmatrix} 2 & -2 & 1 \\ 2 & 1 & -2 \end{bmatrix}.$$

$$\begin{aligned}
\mathbf{A} &= 6 \begin{bmatrix} \tfrac{1}{3} \\ -\tfrac{2}{3} \\ \tfrac{2}{3} \end{bmatrix} \begin{bmatrix} \tfrac{2}{3} & -\tfrac{2}{3} & \tfrac{1}{3} \end{bmatrix} + 3 \begin{bmatrix} -\tfrac{2}{3} \\ \tfrac{1}{3} \\ \tfrac{2}{3} \end{bmatrix} \begin{bmatrix} \tfrac{2}{3} & \tfrac{1}{3} & -\tfrac{2}{3} \end{bmatrix} \\
&= \begin{bmatrix} 4/3 & -4/3 & 2/3 \\ -8/3 & 8/3 & -4/3 \\ 8/3 & -8/3 & 4/3 \end{bmatrix} + \begin{bmatrix} -4/3 & -2/3 & 4/3 \\ 2/3 & 1/3 & -2/3 \\ 4/3 & 2/3 & -4/3 \end{bmatrix}.
\end{aligned}$$

A felírásban az $\mathbf{U}$ és $\mathbf{V}$ mátrixból is kiemeltünk $\frac{1}{3}$-ot, de ez is a mátrixhoz tartozik – egyébként nem lenne ortogonális. $\square$

Az $\mathbf{U}$ mátrix meghatározására egy további módszer is adódik. Az $\mathbf{A}^{\mathsf{T}}\mathbf{A}$ helyett vizsgáljuk meg az $\mathbf{A}\mathbf{A}^{\mathsf{T}}$ mátrixot.

$$\mathbf{A}\mathbf{A}^{\mathsf{T}} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{T}}(\mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{T}})^{\mathsf{T}} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{T}}\mathbf{V}\boldsymbol{\Sigma}^{\mathsf{T}}\mathbf{U}^{\mathsf{T}} = \mathbf{U}\boldsymbol{\Sigma}^{\mathsf{T}}\boldsymbol{\Sigma}\mathbf{U}^{\mathsf{T}}.$$

Eszerint a szinguláris értékek az $\mathbf{A}\mathbf{A}^{\mathsf{T}}$ mátrixból is meghatározhatók. Ennek pozitív sajátértékeihez tartozó sajátvektorai az $\mathbf{U}$ mátrix első $r$ oszlopát adják.

Mivel $\mathbf{v}_i$ az $\mathbf{A}^{\mathsf{T}}\mathbf{A}$ mátrix $\sigma_i^2$ értékhez tartozó sajátvektora, ezért $\mathbf{A}^{\mathsf{T}}\mathbf{A}\mathbf{v}_i = \sigma_i^2\mathbf{v}_i$, másrészt $\mathbf{A}\mathbf{v}_i = \sigma_i\mathbf{u}_i$, így e két összefüggést összevetve kapjuk, hogy $\mathbf{A}^{\mathsf{T}}\mathbf{A}\mathbf{v}_i = \mathbf{A}^{\mathsf{T}}(\sigma_i\mathbf{u}_i) = \sigma_i^2\mathbf{v}_i$, azaz

$$\mathbf{A}^{\mathsf{T}}\mathbf{u}_i = \sigma_i\mathbf{v}_i, \quad \text{azaz} \quad \mathbf{v}_i = \frac{\mathbf{A}^{\mathsf{T}}\mathbf{u}_i}{\sigma_i}.$$

Érdemes lehet az $\mathbf{A}\mathbf{A}^{\mathsf{T}}$ pozitív sajátértékeihez tartozó sajátvektorait keresni, ha $m < n$, mert ekkor csak $m$-dimenziós vektorokkal kell számolni (ld. a 10.3. feladatot).

**10.7. tétel (Az SVD létezése és $\boldsymbol{\Sigma}$ egyértelműsége).** *Minden valós vagy komplex mátrixnak létezik szinguláris érték szerinti felbontása. A szinguláris értékek monoton csökkenő sorozata egyértelmű, de a felbontás nem.*

**Bizonyítás.** Ha $\mathbf{A} \in \mathbb{R}^{m \times n}$ ($\in \mathbb{C}^{m \times n}$), akkor $\mathbf{A}^{\mathsf{T}}\mathbf{A} \in \mathbb{R}^{n \times n}$ mátrix szimmetrikus ($\mathbf{A}^{\mathsf{H}}\mathbf{A}$ önadjungált) és pozitív szemidefinit. Eszerint ortogonálisan (unitéren) diagonalizálható és a diagonális elemek nemnegatív valósok. A sajátvektorokból kiválasztható ortonormált bázis vektoraiból képzett $\mathbf{V}$ mátrix ortogonális (unitér). Korábban láttuk, hogy az $\mathbf{A}\mathbf{V}$ nemnulla oszlopvektorai az $\mathcal{N}(\mathbf{A}^{\mathsf{T}})$ egy ortonormált bázisával olyan $\mathbf{U}$ mátrixot adnak, melyekre $\mathbf{A}\mathbf{V} = \mathbf{U}\boldsymbol{\Sigma}$, azaz $\mathbf{A} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{T}}$ ($\mathbf{A} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{H}}$). $\boldsymbol{\Sigma}$ diagonális elemei az $\mathbf{A}^{\mathsf{T}}\mathbf{A}$ (komplex esetben $\mathbf{A}^{\mathsf{H}}\mathbf{A}$) sajátértékeinek négyzetgyökei. Tehát a felbontás létezik.

Másrészt, ha $\mathbf{A} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{T}}$ egy felbontás, akkor

$$\mathbf{A}^{\mathsf{T}}\mathbf{A} = (\mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{T}})^{\mathsf{T}}\mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{T}} = \mathbf{V}\boldsymbol{\Sigma}^{\mathsf{T}}\mathbf{U}^{\mathsf{T}}\mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{T}} = \mathbf{V}(\boldsymbol{\Sigma}^{\mathsf{T}}\boldsymbol{\Sigma})\mathbf{V}^{\mathsf{T}},$$

tehát $\mathbf{V}$ elemei $\mathbf{A}^{\mathsf{T}}\mathbf{A}$ ($\mathbf{A}^{\mathsf{H}}\mathbf{A}$) sajátvektorai, $\boldsymbol{\Sigma}$ elemei pedig a sajátértékeinek gyökei, ugyanis $\boldsymbol{\Sigma}^{\mathsf{H}}\boldsymbol{\Sigma} = \boldsymbol{\Sigma}^{\mathsf{T}}\boldsymbol{\Sigma} = \operatorname{diag}(\sigma_1^2, \sigma_2^2, \dots, \sigma_r^2, 0, \dots, 0)$. A sajátértékek egyértelműek, így a szinguláris értékek is. Minthogy a sajátvektorokból többféleképp is kiválasztható bázis, sem a $\mathbf{V}$, sem az $\mathbf{U}$ nem egyértelmű. $\square$

### Szinguláris felbontás geometriai interpretációja

A szinguláris felbontás segítségével jól szemléltethető, hogy egy lineáris leképezés hatására mi a képe egy egységgömbnek.

Először szemléltessük egy $2 \times 2$-es, valós, 2-rangú mátrix szinguláris felbontását, tényezőinek hatását ábrázolva. Mivel a felbontás $\mathbf{A} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{T}}$, először $\mathbf{V}^{\mathsf{T}}$ hat a sík vektoraira. $\mathbf{V}^{\mathsf{T}}$ ortogonális, tehát vagy egy forgatás, vagy egy tükrözés. Mivel $\mathbf{V}$ oszlopai épp a $\mathbf{v}_i$ vektorok, ezért $\mathbf{V}^{\mathsf{T}}\mathbf{v}_i = \mathbf{e}_i$. Ezután a $\boldsymbol{\Sigma}$ a két tengely irányában nyújt/összenyom:

> *10.1. ábra. Az egységkör képe. Legyen $\mathbf{A}$ egy $2 \times 2$-es, valós, 2-rangú mátrix. A $\mathbf{v}_i \mapsto \mathbf{A}\mathbf{v}_i = \sigma_i \mathbf{u}_i$ leképezés hatása az egységkörön lépésenként jól szemléltethető: $\mathbf{V}^{\mathsf{T}}\mathbf{v}_i = \mathbf{e}_i$, $\boldsymbol{\Sigma}\mathbf{e}_i = \sigma_i \mathbf{e}_i$, $\sigma \mathbf{U}\mathbf{e}_i = \sigma \mathbf{u}_i$, azaz $\mathbf{V}^{\mathsf{T}}$ a $\{\mathbf{v}_i\}$ bázist a standardba viszi ortogonális leképezéssel, ott $\boldsymbol{\Sigma}$ tengelyirányban nyújtja/összenyomja, végül az ortogonális $\mathbf{U}$ hat rá.*

$\boldsymbol{\Sigma}\mathbf{e}_i = \sigma_i \mathbf{e}_i$. Végül $\mathbf{U}$ ismét egy forgatás vagy tükrözés: $\mathbf{U}\sigma \mathbf{e}_i = \sigma \mathbf{U}\mathbf{e}_i = \sigma \mathbf{u}_i$.

Ezután szemléltessük egy $2 \times 3$-as, valós, 2-rangú mátrix szinguláris felbontását. Először $\mathbf{V}^{\mathsf{T}}$ hat a tér vektoraira. $\mathbf{V}^{\mathsf{T}}$ ortogonális, és a $\{\mathbf{v}_1, \mathbf{v}_2, \mathbf{v}_3\}$ ortonormált bázist a standard bázisba viszi: $\mathbf{V}^{\mathsf{T}}\mathbf{v}_i = \mathbf{e}_i$ ($i = 1, 2, 3$). Ezután a $\boldsymbol{\Sigma}$ a két első tengely irányában nyújt/összenyom: $\boldsymbol{\Sigma}\mathbf{e}_i = \sigma_i \mathbf{e}_i$ ($i = 1, 2$), azonban a harmadik tengely irányával párhuzamosan vetít: $\boldsymbol{\Sigma}\mathbf{e}_3 = \mathbf{0}$. A kép itt nem egy ellipszisvonal, hanem a teljes általa határolt tartomány. Végül az ortogonális $\mathbf{U}$ ezt elforgatja vagy tükrözi egy egyenesre.

> *10.2. ábra. Az egységgömb képe. Legyen $\mathbf{A}$ egy $2 \times 3$-as, valós, 2-rangú mátrix. A $\mathbf{v}_i \mapsto \mathbf{A}\mathbf{v}_i = \sigma_i \mathbf{u}_i$ leképezés hatása az egységgömb felületén: $\mathbf{V}^{\mathsf{T}}\mathbf{v}_i = \mathbf{e}_i$ ($i = 1, 2, 3$), $\boldsymbol{\Sigma}\mathbf{e}_i = \sigma_i \mathbf{e}_i$ ($i = 1, 2$), $\mathbf{U}\sigma \mathbf{e}_i = \sigma \mathbf{u}_i$, azaz $\mathbf{V}^{\mathsf{T}}$ a $\{\mathbf{v}_i\}$ bázist a standardba viszi, ott $\boldsymbol{\Sigma}$ az első két tengelyirányban nyújtja/összenyomja, de a harmadik tengelyirányban vetít, így a gömbfelület képe egy ellipszistartomány, amire végül $\mathbf{U}$ hat.*

**10.8. tétel (Egységgömb képe).** *Legyen $\mathbf{A}$ egy $r$-rangú, $m \times n$-es valós mátrix. Az $\mathbf{x} \mapsto \mathbf{A}\mathbf{x}$ leképezés $\mathbb{R}^n$ egységgömbjének felületét, azaz az $\mathbf{e}^{\mathsf{T}}\mathbf{e} = 1$ egyenletet kielégítő pontokat az $\mathbb{R}^m$ egy $r$-dimenziós altere*

*a) egy ellipszoidjának felületére képzi, ha $r = n$, és*

*b) egy ellipszoidja által határolt tartományára képzi, ha $r < n$.*

**Bizonyítás.** Tekintsük $\mathbf{A}$ szinguláris felbontásának diadikus alakját:

$$\mathbf{A} = \sigma_1 \mathbf{u}_1 \mathbf{v}_1^{\mathsf{T}} + \sigma_2 \mathbf{u}_2 \mathbf{v}_2^{\mathsf{T}} + \cdots + \sigma_r \mathbf{u}_r \mathbf{v}_r^{\mathsf{T}}.$$

Ha $\mathbf{e} \in \mathbb{R}^n$ egy egységvektor, akkor $\mathbf{V}^{\mathsf{T}}\mathbf{e}$ is egységvektor, azaz $(\mathbf{v}_1^{\mathsf{T}}\mathbf{e})^2 + (\mathbf{v}_2^{\mathsf{T}}\mathbf{e})^2 + \cdots + (\mathbf{v}_n^{\mathsf{T}}\mathbf{e})^2 = 1$, hisz $\mathbf{V}$ ortogonális mátrix. Így a fenti diadikus alakot használva

$$\begin{aligned}
\mathbf{A}\mathbf{e} &= \sigma_1 \mathbf{u}_1 \mathbf{v}_1^{\mathsf{T}}\mathbf{e} + \sigma_2 \mathbf{u}_2 \mathbf{v}_2^{\mathsf{T}}\mathbf{e} + \cdots + \sigma_r \mathbf{u}_r \mathbf{v}_r^{\mathsf{T}}\mathbf{e} \\
&= (\sigma_1 \mathbf{v}_1^{\mathsf{T}}\mathbf{e})\mathbf{u}_1 + (\sigma_2 \mathbf{v}_2^{\mathsf{T}}\mathbf{e})\mathbf{u}_2 + \cdots + (\sigma_r \mathbf{v}_r^{\mathsf{T}}\mathbf{e})\mathbf{u}_r \\
&= x_1 \mathbf{u}_1 + x_2 \mathbf{u}_2 + \cdots + x_r \mathbf{u}_r,
\end{aligned}$$

ahol $x_i = \sigma_i \mathbf{v}_i^{\mathsf{T}}\mathbf{e}$ ($i = 1, 2, \ldots, r$). Legyen $x_i = 0$, ha $i = r + 1, \ldots, m$ és $\mathbf{x} = (x_1, x_2, \ldots, x_m)$ értékadással kapjuk, hogy $\mathbf{A}\mathbf{e} = \mathbf{U}\mathbf{x}$. Így $\mathbf{U}$ ortogonalitása miatt $|\mathbf{A}\mathbf{e}| = |\mathbf{U}\mathbf{x}| = |\mathbf{x}|$. Ennek alapján fölírható az az egyenlet, melyet $\mathbf{A}\mathbf{e}$ pontjai kielégítenek, mivel

$$\begin{aligned}
\left(\frac{x_1}{\sigma_1}\right)^2 + \left(\frac{x_2}{\sigma_2}\right)^2 + \cdots + \left(\frac{x_r}{\sigma_r}\right)^2 &= (\mathbf{v}_1^{\mathsf{T}}\mathbf{e})^2 + (\mathbf{v}_2^{\mathsf{T}}\mathbf{e})^2 + \cdots + (\mathbf{v}_r^{\mathsf{T}}\mathbf{e})^2 \\
&\leq (\mathbf{v}_1^{\mathsf{T}}\mathbf{e})^2 + (\mathbf{v}_2^{\mathsf{T}}\mathbf{e})^2 + \cdots + (\mathbf{v}_n^{\mathsf{T}}\mathbf{e})^2 = 1.
\end{aligned}$$

Eszerint az egyenlet

$$\begin{aligned}
\left(\frac{x_1}{\sigma_1}\right)^2 + \left(\frac{x_2}{\sigma_2}\right)^2 + \cdots + \left(\frac{x_r}{\sigma_r}\right)^2 &= 1, \quad \text{ha } r = n, \\
\left(\frac{x_1}{\sigma_1}\right)^2 + \left(\frac{x_2}{\sigma_2}\right)^2 + \cdots + \left(\frac{x_r}{\sigma_r}\right)^2 &\leq 1, \quad \text{ha } r < n.
\end{aligned}$$

$\square$

*Polárfelbontás* A komplex számok exponenciális alakja – azaz az $re^{i\varphi}$ alak – egy nemnegatív nyújtási tényező ($r$) és egy egységnyi abszolút értékű komplex szám ($e^{i\varphi}$, ami a komplex síkon $\varphi$-vel való forgatás) szorzata. A komplex síkon e szám polárkoordinátás alakja $(r, \varphi)$. Az analóg mátrixfelbontás több mérnöki alkalmazásban, pl. az anyagtranszformációk leírásánál használható.

*Polárfelbontáson* egy négyzetes mátrixnak egy pozitív szemidefinit és egy ortogonális mátrix szorzatára való felbontását értjük.

**10.9. tétel (Polárfelbontás).** *Bármely komplex (valós) négyzetes $\mathbf{A}$ mátrix előáll*

$$\mathbf{A} = \mathbf{P}\mathbf{Q}$$

*alakban, ahol $\mathbf{P}$ pozitív szemidefinit önadjungált (szimmetrikus) mátrix, $\mathbf{Q}$ pedig unitér (ortogonális). Ha $\mathbf{A}$ invertálható, akkor $\mathbf{P}$ pozitív definit, és a felbontás egyértelmű.*

**Bizonyítás.** A felbontás az $\mathbf{A}$ szinguláris felbontásából megkapható:

$$\mathbf{A} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{H}} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{U}^{\mathsf{H}}\mathbf{U}\mathbf{V}^{\mathsf{H}} = (\mathbf{U}\boldsymbol{\Sigma}\mathbf{U}^{\mathsf{H}})(\mathbf{U}\mathbf{V}^{\mathsf{H}}),$$

ahonnan $\mathbf{P} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{U}^{\mathsf{H}}$, $\mathbf{Q} = \mathbf{U}\mathbf{V}^{\mathsf{H}}$. $\mathbf{P}$ önadjungált, hisz $(\mathbf{U}\boldsymbol{\Sigma}\mathbf{U}^{\mathsf{H}})^{\mathsf{H}} = \mathbf{U}\boldsymbol{\Sigma}^{\mathsf{H}}\mathbf{U}^{\mathsf{H}} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{U}^{\mathsf{H}}$. A $\mathbf{P}$ pozitív szemidefinit, hisz hasonló a pozitív szemidefinit $\boldsymbol{\Sigma}$ mátrixhoz. Amennyiben $\mathbf{A}$ invertálható, akkor $\boldsymbol{\Sigma}$ pozitív definit.

$\mathbf{Q}$ unitér (ortogonális), hisz két unitér (ortogonális) mátrix szorzata. A $\mathbf{P}$ egyértelmű (nem csak akkor, ha pozitív definit), ugyanis

$$\mathbf{A}\mathbf{A}^{\mathsf{H}} = \mathbf{P}\mathbf{Q}\mathbf{Q}^{\mathsf{H}}\mathbf{P}^{\mathsf{H}} = \mathbf{P}\mathbf{P}^{\mathsf{H}} = \mathbf{P}^2,$$

azaz $\mathbf{P} = \sqrt{\mathbf{A}\mathbf{A}^{\mathsf{H}}}$, és pozitív szemidefinit önadjungált mátrix négyzetgyöke egyértelmű az önadjungált pozitív szemidefinit mátrixok körében (ld. a pozitív szemidefinit mátrixok faktorizációiról szóló 9.21. tétel *b)* pontját). Ha $\mathbf{P}$ pozitív definit, akkor invertálható, így $\mathbf{Q} = \mathbf{P}^{-1}\mathbf{A}$ is egyértelmű. $\square$

> *A polárfelbontás nem csak analóg a komplex számok exponenciális alakjával, de még determinánsa is épp ezt az alakot adja: ha $\det \mathbf{P} = r$, $\det \mathbf{Q} = e^{i\varphi}$ (hisz $\mathbf{Q}$ unitér, így determinánsának abszolút értéke 1), akkor $\det \mathbf{A} = re^{i\varphi}$.*

> *Hasonló állítás mondható fordított sorrenddel is, ráadásul azonos unitér (ortogonális) mátrixszal, hisz*
> $$\mathbf{A} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{H}} = \mathbf{U}\mathbf{V}^{\mathsf{H}}\mathbf{V}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{H}} = (\mathbf{U}\mathbf{V}^{\mathsf{H}})(\mathbf{V}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{H}}) = \mathbf{Q}\hat{\mathbf{P}},$$
> *azaz létezik olyan pozitív szemidefinit önadjungált $\hat{\mathbf{P}}$ mátrix, hogy $\mathbf{A} = \mathbf{Q}\hat{\mathbf{P}}$.*

> *Valós térben a polárfelbontás geometriai jelentése az, hogy minden mátrixleképezés két olyan leképezés kompozíciójaként áll elő, amelyekből az egyik forgatva vagy forgatva tükrözi a teret ($\mathbf{Q}$), a másik pedig egy ortonormált bázis tengelyei mentén nyújtja/összenyomja a teret minden tengelyirányban egy-egy nemnegatív tényező szerint.*

**10.10. példa (Polárfelbontás kiszámítása).** *Számítsuk ki a 10.6. példában is szereplő*

$$\mathbf{A} = \begin{bmatrix} 0 & -2 & 2 \\ -2 & 3 & -2 \\ 4 & -2 & 0 \end{bmatrix}$$

*mátrix $\mathbf{P}\mathbf{Q}$ és $\mathbf{Q}\hat{\mathbf{P}}$ alakú polárfelbontását!*

**Megoldás.** A 10.6. példában megadtuk a valós $\mathbf{A}$ mátrix szinguláris felbontását. Így a $\mathbf{P} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{U}^{\mathsf{T}}$, $\mathbf{Q} = \mathbf{U}\mathbf{V}^{\mathsf{T}}$, $\hat{\mathbf{P}} = \mathbf{V}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{H}}$ képletekbe való helyettesítés megadja a választ:

$$\begin{aligned}
\mathbf{A} = \mathbf{P}\mathbf{Q} &= \begin{bmatrix} 2 & -2 & 0 \\ -2 & 3 & -2 \\ 0 & -2 & 4 \end{bmatrix} \begin{bmatrix} -4/9 & -8/9 & 1/9 \\ -4/9 & 1/9 & -8/9 \\ 7/9 & -4/9 & -4/9 \end{bmatrix} \\
&= \mathbf{Q}\hat{\mathbf{P}} = \begin{bmatrix} -4/9 & -8/9 & 1/9 \\ -4/9 & 1/9 & -8/9 \\ 7/9 & -4/9 & -4/9 \end{bmatrix} \begin{bmatrix} 4 & -2 & 0 \\ -2 & 3 & -2 \\ 0 & -2 & 2 \end{bmatrix}.
\end{aligned}$$

Ha azonban figyelmesen nézzük az eredményt, más megoldást is találunk, hisz $\mathbf{P}$ és $\hat{\mathbf{P}}$ az $\mathbf{A}$-ból sor- és oszlopcserékkel is megkapható:

$$\mathbf{A} = \begin{bmatrix} 2 & -2 & 0 \\ -2 & 3 & -2 \\ 0 & -2 & 4 \end{bmatrix} \begin{bmatrix} 0 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 0 \end{bmatrix} = \begin{bmatrix} 0 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 0 \end{bmatrix} \begin{bmatrix} 2 & -2 & 0 \\ -2 & 3 & -2 \\ 0 & -2 & 4 \end{bmatrix}.$$

$\square$

*Pszeudoinverz* A szinguláris felbontás egy új lehetőséget ad a pszeudoinverz kiszámítására.

A 7.62. *e)* pontjának azonnali következménye, hogy ha $\boldsymbol{\Sigma}$ az $\mathbf{A}$ mátrix diagonális alakja a szinguláris felbontásában, akkor $\boldsymbol{\Sigma}^{+}$ főátlójának $i$-edik eleme $1/\sigma_i$ ($i = 1, 2, \ldots, r$), minden más elem $0$.

**10.11. tétel (A pszeudoinverz kiszámítása).** *Legyen $\mathbf{A}$ egy valós mátrix és legyen a redukált szinguláris felbontása $\mathbf{A} = \mathbf{U}_1 \boldsymbol{\Sigma}_1 \mathbf{V}_1^{\mathsf{T}}$, a szinguláris felbontása $\mathbf{A} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{T}}$. Ekkor*

$$\mathbf{A}^{+} = \mathbf{V}_1 \boldsymbol{\Sigma}_1^{-1} \mathbf{U}_1^{\mathsf{T}} = \mathbf{V}\boldsymbol{\Sigma}^{+}\mathbf{U}^{\mathsf{T}}.$$

**Bizonyítás.** Az $\mathbf{A} = \mathbf{U}_1(\boldsymbol{\Sigma}_1 \mathbf{V}_1^{\mathsf{T}})$ felbontásban $\mathbf{U}_1$ teljes oszloprangú, $\boldsymbol{\Sigma}_1 \mathbf{V}_1^{\mathsf{T}}$ teljes sorrangú, így alkalmazható $\mathbf{A}$-ra a (7.15) képlet. Eszerint

$$\begin{aligned}
\mathbf{A}^{+} &= (\boldsymbol{\Sigma}_1 \mathbf{V}_1^{\mathsf{T}})^{\mathsf{T}} \left(\boldsymbol{\Sigma}_1 \mathbf{V}_1^{\mathsf{T}}(\boldsymbol{\Sigma}_1 \mathbf{V}_1^{\mathsf{T}})^{\mathsf{T}}\right)^{-1} \left(\mathbf{U}_1^{\mathsf{T}}\mathbf{U}_1\right)^{-1} \mathbf{U}_1^{\mathsf{T}} = \mathbf{V}_1 \boldsymbol{\Sigma}_1 \boldsymbol{\Sigma}_1^{-2} \mathbf{U}_1^{\mathsf{T}} \\
&= \mathbf{V}_1 \boldsymbol{\Sigma}_1^{-1} \mathbf{U}_1^{\mathsf{T}}.
\end{aligned}$$

Ebből következik a másik egyenlőség is, mivel

$$\mathbf{V}\boldsymbol{\Sigma}^{+}\mathbf{U}^{\mathsf{T}} = \begin{bmatrix} \mathbf{V}_1 & \mathbf{V}_2 \end{bmatrix} \begin{bmatrix} \boldsymbol{\Sigma}_1^{-1} & \mathbf{O} \\ \mathbf{O} & \mathbf{O} \end{bmatrix} \begin{bmatrix} \mathbf{U}_1^{\mathsf{T}} \\ \mathbf{U}_2^{\mathsf{T}} \end{bmatrix} = \mathbf{V}_1 \boldsymbol{\Sigma}_1^{-1} \mathbf{U}_1^{\mathsf{T}}.$$

$\square$

> *Komplex mátrixokra is definiálható a pszeudoinverz, és a kiszámítására vonatkozó képlet használható a transzponált adjungáltra cserélésével. Így ha $\mathbf{A} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^{\mathsf{H}} = \mathbf{U}_1 \boldsymbol{\Sigma}_1 \mathbf{V}_1^{\mathsf{H}}$ az $\mathbf{A}$ két szinguláris felbontása, akkor $\mathbf{A}^{+} = \mathbf{V}\boldsymbol{\Sigma}^{+}\mathbf{U}^{\mathsf{H}} = \mathbf{V}_1 \boldsymbol{\Sigma}_1^{-1} \mathbf{U}_1^{\mathsf{H}}$.*

**10.12. példa (A pszeudoinverz kiszámítása SVD-ből).** *Számítsuk ki a 10.6. példában szereplő $\mathbf{A}$ mátrix pszeudoinverzét!*

$$\mathbf{A} = \begin{bmatrix} 0 & -2 & 2 \\ -2 & 3 & -2 \\ 4 & -2 & 0 \end{bmatrix}$$

**Megoldás.** Érdemes a redukált alakot használni, mert kevesebb számolást igényel. A 10.6. példában meghatároztuk az $\mathbf{A}$ mátrix redukált szinguláris felbontását:

$$\mathbf{A} = \frac{1}{3}\begin{bmatrix} 1 & -2 \\ -2 & 1 \\ 2 & 2 \end{bmatrix} \begin{bmatrix} 6 & 0 \\ 0 & 3 \end{bmatrix} \frac{1}{3}\begin{bmatrix} 2 & -2 & 1 \\ 2 & 1 & -2 \end{bmatrix},$$

amiből a pszeudoinverzet megadó $\mathbf{A}^{+} = \mathbf{V}_1 \boldsymbol{\Sigma}_1^{-1} \mathbf{U}_1^{\mathsf{T}}$ képlettel

$$\mathbf{A}^{+} = \frac{1}{3}\begin{bmatrix} 2 & 2 \\ -2 & 1 \\ 1 & -2 \end{bmatrix} \begin{bmatrix} \frac{1}{6} & 0 \\ 0 & \frac{1}{3} \end{bmatrix} \frac{1}{3}\begin{bmatrix} 1 & -2 & 2 \\ -2 & 1 & 2 \end{bmatrix} = \begin{bmatrix} -\frac{1}{9} & 0 & \frac{2}{9} \\ -\frac{1}{9} & \frac{1}{9} & 0 \\ \frac{1}{6} & -\frac{1}{9} & -\frac{1}{9} \end{bmatrix}.$$

$\square$

## Feladatok

**10.1. (Szinguláris felbontások)** Az $\mathbf{A} = \begin{bmatrix} 1 & 1 & 0 \\ 1 & 1 & 0 \end{bmatrix}$ mátrixnak egyetlen szinguláris értéke van, $\sigma_1 = 2$. Igazoljuk, hogy az

$$\begin{bmatrix} 1 & 1 & 0 \\ 1 & 1 & 0 \end{bmatrix} = \begin{bmatrix} \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \end{bmatrix} \begin{bmatrix} 2 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix} \begin{bmatrix} \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \\ -\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

$$\begin{bmatrix} 1 & 1 & 0 \\ 1 & 1 & 0 \end{bmatrix} = \begin{bmatrix} \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} \end{bmatrix} \begin{bmatrix} 2 \end{bmatrix} \begin{bmatrix} \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \end{bmatrix}$$

felbontások az $\mathbf{A}$ mátrix szinguláris és redukált szinguláris felbontásai. (Segítségül a szinguláris felbontásban a blokkstruktúrát is jelöltük.)

**10.2.** Számítsuk ki az

$$\mathbf{A} = \begin{bmatrix} 0 & 1 \\ 1 & 1 \\ 1 & 0 \end{bmatrix}$$

mátrix szinguláris érték szerinti felbontását!

**10.3.** Számítsuk ki a

$$\mathbf{B} = \begin{bmatrix} 1 & 0 & 1 \\ 1 & 1 & 0 \end{bmatrix}$$

mátrix szinguláris érték szerinti felbontását!

**10.4.** Számítsuk ki a 10.2. feladatban szereplő

$$\mathbf{A} = \begin{bmatrix} 0 & 1 \\ 1 & 1 \\ 1 & 0 \end{bmatrix}$$

mátrix pszeudoinverzét!

## Vektor- és mátrixnorma

*A vektorokhoz hasonlóan a mátrixok bizonyos tulajdonságainak – például sorozataik konvergenciájának – vizsgálatában is hasznosak az olyan mennyiségek, melyek a köztük lévő különbségeket a távolságra emlékeztető módon mérik. Ehhez az abszolút érték fogalmának általánosításán keresztül vezet út. A mátrixnormák intim kapcsolatban vannak a szinguláris értékekkel.*

### Vektornorma

*Vektor abszolút értéke – az euklideszi norma* A 2- és 3-dimenziós vektorok abszolút értékéről a vektor megadásáról szóló paragrafusban beszéltünk először, majd a köztük lévő különbséget az $n$-dimenziós terekre is kiterjesztettük e fogalmat. Ennek segítségével két vektor távolságát is definiálni tudtuk. A következőkben olyan – az alkalmazásokban is fontos – függvényeket definiálunk, amelyek az abszolút érték „origótól való távolság” tulajdonságát általánosítják. E függvényeket *normának* nevezzük. Mindenekelőtt ilyen nevet adunk a vektor abszolút értékének is, és egyúttal valós vektorokról komplexekre is kiterjesztjük a definíciót.

**10.13. definíció (Euklideszi norma).** *Az $\mathbf{x}$ vektor euklideszi normája vagy más néven abszolút értéke*

$$\|\mathbf{x}\|_2 = \sqrt{\sum_{i=1}^{n} x_i^2} = \sqrt{\mathbf{x}^{\mathsf{T}}\mathbf{x}}, \qquad \text{ha } \mathbf{x} \in \mathbb{R}^n, \tag{10.8}$$

$$\|\mathbf{x}\|_2 = \sqrt{\sum_{i=1}^{n} |x_i|^2} = \sqrt{\mathbf{x}^{\mathsf{H}}\mathbf{x}}, \qquad \text{ha } \mathbf{x} \in \mathbb{C}^n. \tag{10.9}$$

Például az $\mathbf{x} = (1 + i, 1 - 2i, 3)$ vektor euklideszi normája

$$\|\mathbf{x}\|_2 = \sqrt{(1 + i)(1 - i) + (1 - 2i)(1 + 2i) + 3^2} = \sqrt{2 + 5 + 9} = 4.$$

> *Vektor euklideszi normájára az $|.|$, $\|.\|$ és a $\|.\|_2$ jelölések egyaránt használatosak.*

> *A komplex vektorokra adott definíciónak a valós speciális esete, így akár ez az egy is megfelelne.*

> *Ha $\mathbf{x}$ egy tetszőleges nemzérus vektor, akkor $\mathbf{x}/\|\mathbf{x}\|_2$ egységvektor. Egy vektorból az azonos irányú egységvektor ilyen módon való képzését normálásnak nevezzük, és azt mondjuk, hogy az $\mathbf{x}$ vektort normáljuk.*

*A p-norma* Két pont közti távolság mérésére néha egészen szokatlan mértéket kell használnunk. Ha egy négyzethálós utcaszerkezetű város egy kereszteződésében állunk, akkor egy $x$ háznyival keletre és $y$ háznyival északra fekvő ponthoz vezető legrövidebb út hossza gyalog vagy taxival $x + y$ háznyi. E „mérték” szerint az origóból az $(x, y)$ koordinátájú kereszteződéshez vezető legrövidebb út hossza $|x| + |y|$. Mivel itt csak a koordináta-rendszer rácsvonalain haladhatunk, szokás e normát *rácsnormának* nevezni (angolszász tankönyvekben *Manhattan norm* vagy *taxicab norm*).

Egy másik normához jutunk a következő számítógépes képméretező feladattal. Ki van jelölve egy kép közepe. Egy $(x, y)$ képpont tőle való távolsága legyen az a legkisebb $c$ szám, hogy e pont a $(-c, -c)$ és $(c, c)$ pontok által meghatározott négyzetbe még épp beleférjen. Világos, hogy $c = \max\{|x|, |y|\}$. E normát *maximum normának* is nevezik.

Az euklideszi norma, a rácsnorma és a maximum norma is származtatható a következő általánosabb normából:

**10.14. definíció (p-norma).** *A $p \geq 1$ valósra az $\mathbf{x} \in \mathbb{C}^n$ vektor $p$-normája $\|\mathbf{x}\|_p = \left(\sum_{i=1}^{n} |x_i|^p\right)^{1/p}$, míg ennek határértéke a $\infty$-norma, azaz $\|\mathbf{x}\|_\infty = \lim_{p \to \infty} \|\mathbf{x}\|_p$.*

Például $\|(3, 4, 5)\|_3 = \sqrt[3]{27 + 64 + 125} = 6$, $\|(1 + i, i, 0)\|_1 = 1 + \sqrt{2}$.

> *Világos, hogy a 2-norma megegyezik az euklideszi-normával, az 1-norma a rácsnormával.*

> *A maximum norma megegyezik a $\infty$-normával, azaz*
> $$\|\mathbf{x}\|_\infty = \lim_{p \to \infty} \|\mathbf{x}\|_p = \lim_{p \to \infty} \left(\sum_{i=1}^{n} |x_i|^p\right)^{1/p} = \max_i |x_i|.$$
> *Ennek bizonyításához jelöljük a legnagyobb abszolút értékű koordinátát $x_{\max}$-szal. Ekkor minden $x_i$ koordinátára $|x_i|/|x_{\max}| \leq 1$, és így*
> $$1 \leq \sum_{i=1}^{n} |x_i/x_{\max}|^p \leq n.$$
> *Mindegyik kifejezést $1/p$-edik hatványra emelve, majd $|x_{\max}|$-szal beszorozva kapjuk, hogy*
> $$|x_{\max}| \leq |x_{\max}| \left(\sum_{i=1}^{n} \left|\frac{x_i}{x_{\max}}\right|^p\right)^{1/p} \leq |x_{\max}| n^{1/p},$$
> *és $n^{1/p} \to 1$, ha $p \to \infty$, ami bizonyítja az állítást.*

> *Érdekes megtekinteni az origótól valamely normában egységnyi távolságra lévő pontok halmazát, vagyis az egységgömböt. A 10.3 ábra az 1-, $\frac{3}{2}$-, 2-, 3- és $\infty$-normához tartozó egységköröket (2-dimenziós egységgömböket) mutatja.*

> *10.3. ábra. Az 1-normájú pontok mértani helye, azaz az egységkörök $p = 1$, $p = 3/2$, $p = 2$, $p = 3$ és $p = \infty$ esetén.*

*A norma általános fogalma* Az előzőekben az abszolút értékhez – vagyis az origótól való távolsághoz – kerestünk hasonló függvényt. Kérdés azonban, hogy milyen tulajdonságok fontosak a számunkra, melyeket akarunk megőrizni. Az abszolút értékkel definiált távolság használatakor a következő tulajdonságok tűnnek lényegesnek:

*(a)* $|\mathbf{x}| \geq 0$, azaz vektor abszolút értéke *nem negatív*.

*(b)* $|\mathbf{x}| = 0$ pontosan akkor áll fenn, ha $\mathbf{x} = \mathbf{0}$. Ennek fontos tartalma, hogy a $d(\mathbf{x}, \mathbf{y}) = |\mathbf{x} - \mathbf{y}|$ képlettel definiált távolságfüggvény *szeparálja a pontokat*, azaz két különböző pont távolsága sosem 0.

*(c)* $|c\mathbf{x}| = |c||\mathbf{x}|$, ami a lineáris leképezéseknél megismert homogenitásra emlékeztető tulajdonság: szokás *pozitív homogenitásnak* nevezni.

*(d)* $|\mathbf{x} + \mathbf{y}| \leq |\mathbf{x}| + |\mathbf{y}|$, amit *háromszög-egyenlőtlenség* néven ismerünk.

E tulajdonságok a következő definícióhoz vezetnek:

**10.15. definíció (Norma).** *Egy $f \colon \mathbb{R}^n \to \mathbb{R}$, vagy $f \colon \mathbb{C}^n \to \mathbb{R}$ függvényt normának nevezünk, ha fennállnak a következők:*

*1. $f(\mathbf{x}) \geq 0$ minden $\mathbf{x}$ vektorra, és $f(\mathbf{x}) = 0$ pontosan akkor áll fenn, ha $\mathbf{x} = \mathbf{0}$,*

*2. $f(c\mathbf{x}) = |c|f(\mathbf{x})$ minden $\mathbf{x}$ vektorra,*

*3. $f(\mathbf{x} + \mathbf{y}) \leq f(\mathbf{x}) + f(\mathbf{y})$.*

*Az $f(\mathbf{x})$ értéket $\mathbf{x}$ normájának nevezzük.*

> *A normát általában az abszolút értékre emlékeztető $\|\ \|$ zárójellel jelöljük, azaz $\mathbf{x}$ normáját $\|\mathbf{x}\|$ jelöli. E jelöléssel tehát a norma egy $\|.\| \colon \mathbb{R}^n \to \mathbb{R}$, vagy $\|.\| \colon \mathbb{C}^n \to \mathbb{R}$ függvény.*

> *$\|\mathbf{x}\| = \|-\mathbf{x}\|$ bármely $\|.\|$ normára igaz, hisz $\|-\mathbf{x}\| = |-1|\,\|\mathbf{x}\| = \|\mathbf{x}\|$.*

> *Hasznos a háromszög-egyenlőtlenség különbségre fölírt következő alakja:*
> $$\|\mathbf{z} - \mathbf{x}\| \geq \big|\,\|\mathbf{z}\| - \|\mathbf{x}\|\,\big| \tag{10.10}$$
> *Ez a következőképp igazolható: legyen $\mathbf{z} = \mathbf{x} + \mathbf{y}$, ekkor a háromszög-egyenlőtlenségből kapjuk, hogy $\|\mathbf{z} - \mathbf{x}\| \geq \|\mathbf{z}\| - \|\mathbf{x}\|$, de $\mathbf{x}$ és $\mathbf{z}$ szerepét fölcserélve $\|\mathbf{x} - \mathbf{z}\| \geq \|\mathbf{x}\| - \|\mathbf{z}\|$ is igaz, így $\|\mathbf{z} - \mathbf{x}\| = \|\mathbf{x} - \mathbf{z}\|$ igazolja az egyenlőtlenséget.*

> *Axiomatikus felépítésben kevesebb is megkövetelhető a norma definíciójában, nevezetesen az első pont egyszerűbbre cserélhető:*
> *1′ ha $f(\mathbf{x}) = 0$, akkor $\mathbf{x} = \mathbf{0}$,*
> *2′ $f(c\mathbf{x}) = |c|f(\mathbf{x})$ minden $\mathbf{x}$ vektorra,*
> *3′ $f(\mathbf{x} + \mathbf{y}) \leq f(\mathbf{x}) + f(\mathbf{y})$.*
> *A definíció utolsó két tulajdonságából adódik, hogy bármely $\mathbf{x}$ vektorra $f(\mathbf{x}) \geq 0$, és $f(\mathbf{0}) = 0$, így 1.–3. ekvivalens 1′–3′-vel (ld. 10.6. feladat).*

> *A $p$-norma minden $1 \leq p \leq \infty$ esetben norma. Ennek bizonyítása meglehetősen technikai jellegű, ezért csak a feladatok közt közöljük (ld. 10.15.). A bizonyítás két nevezetes egyenlőtlenségre – a Hölder- és a Minkowski-egyenlőtlenségre – épül, melyek ugyancsak feladat-*

> *10.4. ábra. Az 1-normájú pontok mértani helye a térben, azaz az egységgömbök $p = 1$, $p = 2$ és $p = \infty$ esetén.*

ként tűzünk ki (ld. 10.13., 10.14.). Valójában a *Minkowski-egyenlőtlenség* maga a háromszög-egyenlőtlenség:

$$\|\mathbf{x} + \mathbf{y}\|_p \leq \|\mathbf{x}\|_p + \|\mathbf{y}\|_p. \tag{10.11}$$

A *Hölder-egyenlőtlenség* a CBS-egyenlőtlenség általánosítása:

$$|\mathbf{x}^{\mathsf{H}}\mathbf{y}| \leq \|\mathbf{x}\|_p \|\mathbf{y}\|_q, \text{ ahol } \frac{1}{p} + \frac{1}{q} = 1. \tag{10.12}$$

> *A legfontosabb esetekben, vagyis a $p = 1$, $p = 2$ és $p = \infty$ esetben annak bizonyítása, hogy a $p$-norma norma, eddigi ismereteinket felhasználva egyszerű, ezért annak meggondolását minden olvasónak ajánljuk (ld. 10.7., 10.8. feladatok).*

> *Normából további normák származtathatóak. Ha $\mathbf{x} \mapsto \|\mathbf{x}\|$ egy norma, és $A$ egy egy-egy értelmű lineáris leképezés, akkor az $\mathbf{x} \mapsto \|A\mathbf{x}\|$ leképezés is norma (10.11. feladat), továbbá norma az*
> $$\mathbf{x} \mapsto \sup_{\mathbf{y} \neq \mathbf{0}} \frac{\mathbf{x} \cdot \mathbf{y}}{\|\mathbf{y}\|}$$
> *függvény is (ld. 10.12.).*

> *Azonnal látszik, hogy*
> $$\max_i \{|x_i|\} \leq \sqrt{|x_1|^2 + \cdots + |x_n|^2} \leq |x_1| + \cdots + |x_n|$$
> *azaz*
> $$\|\mathbf{x}\|_\infty \leq \|\mathbf{x}\|_2 \leq \|\mathbf{x}\|_1. \tag{10.13}$$
> *Másrészt az is könnyen igazolható (ld. 10.9., hogy*
> $$\|\mathbf{x}\|_1 \leq \sqrt{n}\,\|\mathbf{x}\|_2, \ \|\mathbf{x}\|_2 \leq \sqrt{n}\,\|\mathbf{x}\|_\infty \text{ és } \|\mathbf{x}\|_1 \leq n\,\|\mathbf{x}\|_\infty. \tag{10.14}$$
> *Ezek az egyenlőtlenségek vezetnek a normák ekvivalenciájának fogalmához, ami a következő paragrafus témája.*

> *Minden norma folytonos függvény. Ez például a a (10.10) egyenlőtlenségnek és a (10.14) első becslésének következménye (ld. 10.10. feladat).*

*Vektornormák ekvivalenciája* A (10.13) és a (10.14) egyenlőtlenségek szerint

$$\|\mathbf{x}\|_\infty \leq \|\mathbf{x}\|_1 \text{ és } \|\mathbf{x}\|_1 \leq n\,\|\mathbf{x}\|_\infty,$$

vagyis mindkét normának felső korlátját adja a másik egy megfelelő konstansszorosa. Ez azt jelenti, hogy például a konvergenciakérdések eldöntésében e két norma egyformán viselkedik, vagyis egy vektorsorozat pontosan akkor konvergens az egyik szerint, ha a másik szerint is.

**10.16. definíció (Normák ekvivalenciája).** *Azt mondjuk, hogy az $\|.\|_a$ és $\|.\|_b$ normák ekvivalensek, ha van olyan $c$ és $d$ pozitív valós szám, hogy $\|.\|_a \leq c\,\|.\|_b$ és $\|.\|_b \leq d\,\|.\|_a$.*

> *Könnyen látható, hogy a normák ekvivalenciája valóban ekvivalencia reláció.*

> *A (10.13) és a (10.14) egyenlőtlenségek azt mutatják, hogy az 1-, 2- és $\infty$-normák mind ekvivalensek.*

**10.17. tétel (Minden vektornorma ekvivalens).** *Legyen $\mathbb{K} = \mathbb{C}$ vagy $\mathbb{R}$. A $\mathbb{K}^n$ téren értelmezett bármely két norma ekvivalens.*

**Bizonyítás.** Megmutatjuk, hogy tetszőleges $\mathbb{K}^n$-en értelmezett $\|.\|$ norma ekvivalens az 1-normával. Ebből azonnal következik, hogy bármely két norma ekvivalens egymással.

A háromszög-egyenlőtlenséget alkalmazva az $\mathbf{x} = x_1 \mathbf{e}_1 + \ldots + x_n \mathbf{e}_n$ felbontásra kapjuk, hogy

$$\|\mathbf{x}\| \leq \sum_{i=1}^{n} |x_i| \|\mathbf{e}_i\| \leq c \sum_{i=1}^{n} |x_i| = c\,\|\mathbf{x}\|_1,$$

ahol $\{\mathbf{e}_1, \ldots, \mathbf{e}_n\}$ a standrad bázis, és $c = \max_i \|\mathbf{e}_i\|$. Ezzel bizonyítottuk, hogy $\|\mathbf{x}\| \leq c\,\|\mathbf{x}\|_1$.

Az $\|\mathbf{x}\|_1 \leq d\,\|\mathbf{x}\|$ egyenlőtlenség bizonyításához meg kell mutatnunk, hogy $\|\mathbf{x}\|_1 / \|\mathbf{x}\|$ felülről korlátos a nemnulla vektorok halmazán. Indirekt módon bizonyítunk. Tegyük fel, hogy van olyan $\{\mathbf{x}_k\}$ sorozat, hogy $\|\mathbf{x}_k\|_1 / \|\mathbf{x}_k\| \to \infty$, ha $k \to \infty$. Ekkor $\|\mathbf{x}_k\| / \|\mathbf{x}_k\|_1 \to 0$, azaz az $\mathbf{y}_k = \mathbf{x}_k / \|\mathbf{x}_k\|_1$ olyan sorozat, hogy $\|\mathbf{y}_k\| \to 0$, és $\|\mathbf{y}_k\|_1 = 1$. Mivel az 1-normájú egységgömb korlátos, ezért feltételezhető, hogy az $\mathbf{y}_k$ sorozat konvergens (egyébként vegyük egy konvergens részsorozatát), melynek $\mathbf{y}$-nal jelölt határértéke az egységgömbön van, azaz $\|\mathbf{y}\|_1 = 1$, így $\mathbf{y} \neq \mathbf{0}$. Másrészt $\|.\|$ folytonos, így $\|\mathbf{y}_k\| \to \|\mathbf{y}\|$, tehát $\|\mathbf{y}\| = 0$, ami ellentmondás. $\square$

> *Fölvetődik a kérdés, hogy ha az összes norma ekvivalens, akkor mi értelme bevezetni normák ekvivalenciájának fogalmát. A válasz az, hogy az ekvivalenciát csak véges dimenziós terekre bizonyítottuk, és valóban, végtelen dimenziós terekben nem teljesül. Az viszont fontos következmény, hogy véges dimenziós terekben vektorok konvergenciakérdéseinek eldöntéséhez mindig olyan normát választhatunk, ami a legkényelmesebben használható, hisz az eredmény a normaválasztástól független.*

### Mátrixnorma

*Vektornormák mátrixokon* Egy $m \times n$-es mátrix tekinthető egy $mn$-dimenziós vektornak is, így a vektorokra definiált normák mátrixokra is alkalmazhatók. Ezek között legfontosabb a 2-norma mátrixokra való kiterjesztése, mely több ekvivalens alakban is felírható.

**10.18. definíció (Frobenius-norma).** *Az $\mathbf{A} \in \mathbb{C}^{m \times n}$ mátrix Frobenius-normája*

$$\|\mathbf{A}\|_F = \sqrt{\sum_{i=1}^{m} \sum_{j=1}^{n} |a_{ij}|^2} = \sqrt{\sum_{i=1}^{m} \|\mathbf{A}_{i*}\|_2^2} = \sqrt{\sum_{j=1}^{n} \|\mathbf{A}_{*j}\|_2^2}.$$

Itt azért nem a 2-norma elnevezést használjuk, mert azt más normára tartogatjuk. A Frobenius-norma további módokon is számolható:

**10.19. tétel (Frobenius-norma ekvivalens alakjai).**

$$\|\mathbf{A}\|_F = \sqrt{\operatorname{trace}(\mathbf{A}^{\mathsf{H}}\mathbf{A})} = \sqrt{\sum_{i=1}^{\min(m, n)} \sigma_i^2}. \tag{10.15}$$

**Bizonyítás.** Az első alak azonnal következik a nyom definíciójából, hisz $\mathbf{A}^{\mathsf{H}}\mathbf{A}$ átlójának $j$-edik eleme éppen $\|\mathbf{A}_{*j}\|_2^2$-tel egyezik meg. Egy mátrix nyoma megegyezik sajátértékeinek összegével, az $\mathbf{A}^{\mathsf{H}}\mathbf{A}$ sajátértékei pedig megegyeznek az $\mathbf{A}$ szinguláris értékeinek négyzeteivel, ami bizonyítja az állítás második egyenlőségét. $\square$

Egy vektornorma akkor nyújthat igazán hasznos információt a mátrixokról is, ha valamilyen módon kapcsolatban van a mátrix olyan sajátosságaival, ami $mn$-dimenziós vektorként nehezen leírható. A mátrixszal való szorzás például ilyen. A vektorok 2-normája és a mátrixok Frobenius-normája közt például a következő összefüggés áll fenn:

**10.20. állítás.** *Bármely $\mathbf{x} \in \mathbb{C}^n$ vektorra és $\mathbf{A} \in \mathbb{C}^{m \times n}$ mátrixra*

$$\|\mathbf{A}\mathbf{x}\|_2 \leq \|\mathbf{A}\|_F \|\mathbf{x}\|_2. \tag{10.16}$$

**Bizonyítás.** Igazolására a Cauchy–Bunyakovszkij–Schwarz-egyenlőtlenséget alkalmazzuk:

$$\|\mathbf{A}\mathbf{x}\|_2^2 = \sum_{i=1}^{n} |\mathbf{A}_{i*}\mathbf{x}|^2 \leq \sum_{i=1}^{n} \|\mathbf{A}_{i*}\|_2^2 \|\mathbf{x}\|_2^2 = \|\mathbf{A}\|_F^2 \|\mathbf{x}\|_2^2.$$

$\square$

> *E tulajdonság általában nem igaz minden mátrixokra alkalmazott vektornormára. Tekintsük a maximum normát, melyet a következőképp vihetünk át mátrixokra:*
> $$\|\mathbf{A}\|_{\max} = \max_{i,j} \{|a_{ij}|\}.$$

Az $\mathbf{A} = \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix}$ mátrix maximum normája 2. E mátrix különböző vektorokkal vett szorzatának normája és a normák szorzata közt mindhárom reláció fennállhat. Például az

$$\begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}, \quad \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 2 \\ 1 \end{bmatrix}, \quad \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 3 \\ 1 \end{bmatrix}$$

szorzatokban a normákra a $2 \cdot 1 > 1$, $2 \cdot 1 = 2$, $2 \cdot 1 < 3$ relációk teljesülnek.

> ▶ A (10.16) tulajdonság azonnali következménye, hogy
> $$\|\mathbf{AB}\|_F \le \|\mathbf{A}\|_F \|\mathbf{B}\|_F$$
> igaz bármely $\mathbf{A} \in \mathbb{C}^{m\times n}$ és $\mathbf{B} \in \mathbb{C}^{n\times k}$ mátrixokra. E tulajdonság meg fog jelenni a mátrixnorma általános definíciójában.

### A mátrixnorma általános fogalma

A vektornormák alkalmazhatók mátrixokra is. Sok könyv azonban – és így teszünk mi is – egy normát csak akkor tekint mátrixnormának, ha a vektornorma axiómái mellett egy mátrixszorzásra vonatkozónak is eleget tesz.

**10.21. definíció (Mátrixnorma).** *Legyen $\mathbb{K} = \mathbb{R}$ vagy $\mathbb{C}$. Egy $\mathbb{K}$ fölötti mátrixokon értelmezett valós értékű $\|.\|$ függvény mátrixnorma, ha tetszőleges azonos méretű $\mathbf{A}$ és $\mathbf{B}$ mátrixra és összeszorozható $\mathbf{A}$ és $\mathbf{C}$ mátrixra*

1. *$\|\mathbf{A}\| \ge 0$, és $\|\mathbf{A}\| = 0$ pontosan akkor áll fenn, ha $\mathbf{A} = \mathbf{O}$,*
2. *$\|c\mathbf{A}\| = |c|\,\|\mathbf{A}\|$,*
3. *$\|\mathbf{A} + \mathbf{B}\| \le \|\mathbf{A}\| + \|\mathbf{B}\|$,*
4. *$\|\mathbf{AC}\| \le \|\mathbf{A}\|\,\|\mathbf{C}\|$.*

A korábbiak szerint tehát a Frobenius-norma mátrixnorma, míg a maximum normát nem tekintjük mátrixnormának.

**10.22. definíció.** *Azt mondjuk, hogy a $\|.\|_M$ mátrixnorma valamint a $\|.\|_a$ vektornorma illeszkedik vagy konzisztensek, ha tetszőleges $\mathbf{A}$ mátrixra és megfelelő dimenziójú $\mathbf{x}$ vektorra*

$$\|\mathbf{A}\mathbf{x}\|_a \le \|\mathbf{A}\|_M \|\mathbf{x}\|_a.$$

Például (10.16) szerint a Frobenius-norma illeszkedik a 2-normához.

### Indukált norma

E paragrafusban vektornormákból kiindulva újabb mátrixnormákhoz jutunk.

**10.23. definíció (Indukált norma).** *Legyen $\|.\|$ egy tetszőleges vektornorma. Ekkor az*

$$\|\mathbf{A}\| = \max_{\|\mathbf{x}\|=1} \|\mathbf{A}\mathbf{x}\| \tag{10.17}$$

*egyenlőséggel definiált függvényt a vektornorma által indukált mátrixnormának nevezzük.*

> ▶ Az indukált mátrixnormára a vektornorma jelölését szokás használni, így például a mátrix $p$-norma definíciója
> $$\|\mathbf{A}\|_p = \max_{\|\mathbf{x}\|_p=1} \|\mathbf{A}\mathbf{x}\|_p.$$

> ▶ Ha mátrix helyett lineáris leképezésre értelmezzük a fenti definíciót, *operátornormáról* beszélünk.

> ▶ A normák ekvivalenciájából következik, hogy bármely normában az egységgömb korlátos és zárt. Így a rajta értelmezett folytonos $\mathbf{x} \mapsto \mathbf{A}\mathbf{x}$ függvénynek van maximuma és minimuma, tehát a definíció értelmes.

> ▶ Az előző megjegyzést is figyelembe véve könnyen igazolható, hogy a definíció a következő ekvivalens alakokba is átírható:
> $$\|\mathbf{A}\| = \sup_{\|\mathbf{x}\|\ne 0} \frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|} = \max_{\|\mathbf{x}\|\ne 0} \frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}. \tag{10.18}$$
> Ez abból következik, hogy az $\mathbf{y} = \mathbf{x}/\|\mathbf{x}\|$ jelöléssel
> $$\|\mathbf{A}\| = \max_{\|\mathbf{y}\|=1} \|\mathbf{A}\mathbf{y}\| = \max_{\mathbf{x}\ne 0} \left\| \mathbf{A}\left(\frac{\mathbf{x}}{\|\mathbf{x}\|}\right) \right\| = \max_{\mathbf{x}\ne 0} \frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}$$

> ▶ Azt még igazolnunk kell, hogy a mátrixnorma elnevezés e függvényre valóban jogos.

**10.24. tétel (Indukált norma tulajdonságai).** *Legyen $\|.\|$ egy tetszőleges vektornorma, ekkor a (10.17) képlettel definiált mátrixfüggvény*

a) *mátrixnorma, azaz fennáll a 10.21. definíció mind a négy feltétele,*

b) *illeszkedik az indukáló vektornormához, azaz*

$$\|\mathbf{A}\mathbf{x}\| \le \|\mathbf{A}\|\,\|\mathbf{x}\|.$$

**Bizonyítás.** Először az illeszkedést igazoljuk. Ha $\mathbf{x} = \mathbf{0}$, akkor az egyenlőtlenség teljesül, hisz mindkét oldalán $\mathbf{0}$ áll. Ha $\mathbf{x} \ne \mathbf{0}$, akkor a (10.18) szerint

$$\|\mathbf{A}\| = \max_{\mathbf{z}\ne 0} \frac{\|\mathbf{A}\mathbf{z}\|}{\|\mathbf{z}\|} \ge \frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|},$$

azaz $\|\mathbf{A}\mathbf{x}\| \le \|\mathbf{A}\|\,\|\mathbf{x}\|$.

A mátrixnormát definiáló négy feltétel közül az első három nyilvánvalóan teljesül. A negyedik igazolásához legyen $\mathbf{y}$ egy olyan vektor, amelyben az $\mathbf{x} \mapsto \|\mathbf{AB}\mathbf{x}\|$ felveszi a maximumát az egységgömbön, azaz amelyre $\|\mathbf{y}\| = 1$, és

$$\|\mathbf{AB}\mathbf{y}\| = \max_{\|\mathbf{x}\|=1} \|\mathbf{AB}\mathbf{x}\| = \|\mathbf{AB}\|.$$

Ekkor az illeszkedés kétszeri alkalmazásával

$$\|\mathbf{AB}\| = \|\mathbf{AB}\mathbf{y}\| \le \|\mathbf{A}\|\,\|\mathbf{B}\mathbf{y}\| \le \|\mathbf{A}\|\,\|\mathbf{B}\|\,\|\mathbf{y}\| = \|\mathbf{A}\|\,\|\mathbf{B}\|. \qquad \square$$

### Az 1-, 2- és ∞-norma mátrixokra

A fönt definiált $p$-normák közül mátrixokra is az 1-, 2- és ∞-norma a legfontosabb. Kiszámításukra a definíciónál egyszerűbb módszer is adódik.

**10.25. tétel (1-, 2- és ∞-norma kiszámítása).** *Legyen $\mathbf{A} \in \mathbb{C}^{m\times n}$, ekkor*

$$\|\mathbf{A}\|_1 = \max_j \sum_{i=1}^{n} |a_{ij}| = \text{legnagyobb abszolút oszlopösszeg,} \tag{10.19}$$

$$\|\mathbf{A}\|_\infty = \max_i \sum_{j=1}^{m} |a_{ij}| = \text{legnagyobb abszolút sorösszeg,} \tag{10.20}$$

$$\|\mathbf{A}\|_2 = \|\mathbf{A}^\mathsf{H}\|_2 = \max_{\|\mathbf{x}\|_2=1} \max_{\|\mathbf{y}\|_2=1} |\mathbf{y}^\mathsf{H}\mathbf{A}\mathbf{x}| = \sigma_1, \tag{10.21}$$

*ahol $\sigma_1$ az $\mathbf{A}$ legnagyobb szinguláris értéke, azaz $\mathbf{A}^\mathsf{H}\mathbf{A}$ legnagyobb sajátértékének gyöke. Ha az $\mathbf{A} \in \mathbb{C}^{n\times n}$ mátrix invertálható, akkor*

$$\left\|\mathbf{A}^{-1}\right\|_2 = \max_{\|\mathbf{x}\|_2=1} \frac{1}{\|\mathbf{A}\mathbf{x}\|_2} = \frac{1}{\min\limits_{\|\mathbf{x}\|_2=1} \|\mathbf{A}\mathbf{x}\|_2} = \frac{1}{\sigma_n}, \tag{10.22}$$

*ahol $\sigma_n$ az $\mathbf{A}$ legkisebb (pozitív) szinguláris értéke.*

**Bizonyítás.** $p = 1$: Bármely $\mathbf{x}$ vektorra $\|\mathbf{x}\|_1 = 1$ esetén a skalárokra vonatkozó háromszög-egyenlőtlenség miatt

$$\begin{aligned}
\|\mathbf{A}\mathbf{x}\|_1 &= \sum_{i=1}^{m} \left| \sum_{j=1}^{n} a_{ij}x_j \right| \le \sum_{i=1}^{m} \sum_{j=1}^{n} |a_{ij}||x_j| = \sum_{j=1}^{n} |x_j| \sum_{i=1}^{m} |a_{ij}| \\
&\le \left( \sum_{j=1}^{n} |x_j| \right) \max_j \sum_{i=1}^{m} |a_{ij}| = \max_j \sum_{i=1}^{m} |a_{ij}|
\end{aligned}$$

Ez a maximum el is érhető, mert ha a $k$-adik oszlopban a legnagyobb az abszolút értékek összege, akkor $\|\mathbf{A}\mathbf{e}_k\|_1 = \max_j \sum_{i=1}^{m} |a_{ij}|$.

$p = \infty$: Bármely $\mathbf{x}$ vektorra $\|\mathbf{x}\|_\infty = 1$ esetén

$$\|\mathbf{A}\mathbf{x}\|_\infty = \max_i \left| \sum_{j=1}^{n} a_{ij}x_j \right| \le \max_i \sum_{j=1}^{n} |a_{ij}||x_j| \le \max_i \sum_{j=1}^{n} |a_{ij}|.$$

Ez a maximum el is érhető, mert ha a $k$-adik sorban a legnagyobb az abszolút értékek összege, akkor az

$$\mathbf{x} = \left( \frac{\overline{a_{k1}}}{|a_{k1}|}, \frac{\overline{a_{k2}}}{|a_{k2}|}, \dots, \frac{\overline{a_{kn}}}{|a_{kn}|} \right)$$

vektorra $\|\mathbf{x}\|_\infty = 1$ és $\|\mathbf{A}\mathbf{x}\|_\infty = \max_i \sum_{j=1}^{n} |a_{ij}|$.

$p = 2$: A CBS-egyenlőtlenség szerint $|\mathbf{y}^\mathsf{H}\mathbf{A}\mathbf{x}| \le \|\mathbf{y}\|_2 \|\mathbf{A}\mathbf{x}\|_2$, így

$$\max_{\|\mathbf{x}\|_2=1} \max_{\|\mathbf{y}\|_2=1} |\mathbf{y}^\mathsf{H}\mathbf{A}\mathbf{x}| \le \max_{\|\mathbf{x}\|_2=1} \|\mathbf{A}\mathbf{x}\|_2 = \|\mathbf{A}\|_2.$$

Így csak azt kell megmutatni, hogy van olyan $\mathbf{x}_0$ és $\mathbf{y}_0$ egységvektor, melyre az előbbi egyenlőtlenségben egyenlőség áll. Legyen $\mathbf{x}_0$ az a vektor, melyben $\|\mathbf{A}\mathbf{x}\|_2$ a maximumot adja, és $\mathbf{y}_0$ ennek normált képe, azaz

$$\|\mathbf{A}\mathbf{x}_0\|_2 = \max_{\|\mathbf{x}\|_2=1} \|\mathbf{A}\mathbf{x}\|_2 = \|\mathbf{A}\|_2, \quad \mathbf{y}_0 = \frac{\mathbf{A}\mathbf{x}_0}{\|\mathbf{A}\mathbf{x}_0\|_2} = \frac{\mathbf{A}\mathbf{x}_0}{\|\mathbf{A}\|_2}.$$

Ekkor

$$\mathbf{y}_0^\mathsf{H}\mathbf{A}\mathbf{x}_0 = \frac{\mathbf{x}_0^\mathsf{H}\mathbf{A}^\mathsf{H}\mathbf{A}\mathbf{x}_0}{\|\mathbf{A}\|_2} = \frac{\|\mathbf{A}\mathbf{x}_0\|_2^2}{\|\mathbf{A}\|_2} = \frac{\|\mathbf{A}\|_2^2}{\|\mathbf{A}\|_2} = \|\mathbf{A}\|_2.$$

Az $\|\mathbf{A}\|_2 = \sigma_1$ igazolásához a következő maximumot keressük:

$$\|\mathbf{A}\|_2^2 = \max_{\mathbf{x}\ne 0} \frac{\|\mathbf{A}\mathbf{x}\|_2^2}{\|\mathbf{x}\|_2^2} = \max_{\mathbf{x}\ne 0} \frac{\mathbf{x}^\mathsf{H}\mathbf{A}^\mathsf{H}\mathbf{A}\mathbf{x}}{\mathbf{x}^\mathsf{H}\mathbf{x}}.$$

Mivel $\mathbf{A}^\mathsf{H}\mathbf{A}$ önadjungált, ezért létezik sajátvektoraiból álló ortonormált bázisa. Vektorai legyenek $\mathbf{v}_1, \dots, \mathbf{v}_n$, a hozzájuk tartozó sajátértékek $\lambda_1, \dots, \lambda_n$, melyek közül $\lambda_1$ legyen a legnagyobb. Ekkor egyrészt

$$\lambda_1 = \frac{\mathbf{v}_1^\mathsf{H}\mathbf{A}^\mathsf{H}\mathbf{A}\mathbf{v}_1}{\mathbf{v}_1^\mathsf{H}\mathbf{v}_1},$$

másrészt bármely $\mathbf{x} = \sum_j c_j \mathbf{v}_j \ne \mathbf{0}$ vektorra

$$\lambda_1 - \frac{\mathbf{x}^\mathsf{H}\mathbf{A}^\mathsf{H}\mathbf{A}\mathbf{x}}{\mathbf{x}^\mathsf{H}\mathbf{x}} = \lambda_1 - \frac{\sum_{j=1}^{n} \lambda_j c_j^2}{\sum_{j=1}^{n} c_j^2} = \frac{\sum_{j=1}^{n} (\lambda_1 - \lambda_j)c_j^2}{\sum_{j=1}^{n} c_j^2} \ge 0,$$

tehát $\|\mathbf{A}\|_2^2 = \lambda_1$, azaz $\|\mathbf{A}\|_2 = \sqrt{\lambda_1} = \sigma_1$.

$p = 2$ esetén $\mathbf{A}^{-1}$ normája is egyszerűen számolható:

$$\begin{aligned}
\frac{1}{\min\limits_{\|\mathbf{x}\|_2=1} \|\mathbf{A}\mathbf{x}\|_2} &= \max_{\|\mathbf{x}\|_2=1} \frac{1}{\|\mathbf{A}\mathbf{x}\|_2} = \max_{\mathbf{y}\ne 0} \frac{1}{\left\| \mathbf{A}\frac{\mathbf{A}^{-1}\mathbf{y}}{\|\mathbf{A}^{-1}\mathbf{y}\|_2} \right\|_2} = \max_{\mathbf{y}\ne 0} \frac{\|\mathbf{A}^{-1}\mathbf{y}\|_2}{\|\mathbf{y}\|_2} \\
&= \max_{\mathbf{y}\ne 0} \left\| \mathbf{A}^{-1}\left(\frac{\mathbf{y}}{\|\mathbf{y}\|_2}\right) \right\|_2 = \max_{\|\mathbf{x}\|_2=1} \|\mathbf{A}^{-1}\mathbf{x}\| = \|\mathbf{A}^{-1}\|_2.
\end{aligned}$$

Mivel $\mathbf{A}^{-1}$ szinguláris értékei az $\mathbf{A}$ szinguláris értékeinek reciprokai, ezért $\mathbf{A}^{-1}$ legnagyobb szinguláris értéke az $\mathbf{A}$ legkisebb szinguláris értékének reciproka. $\square$

> ▶ Az 1-, a ∞- és a 2-normára szokásos másik elnevezés: *oszlopnorma*, *sornorma* és *spektrálnorma*.

### Kis rangú approximáció

A szinguláris érték szerinti felbontás egy érdekes és hasznos alkalmazása a mátrixok adott, kis rangú mátrixszal való közelítésére vonatkozó eredmény.

**10.26. tétel (Kis rangú approximáció tétele – Eckart–Young-tétel).** *Legyen $\mathbf{A}$ egy $r$-rangú mátrix. Jelölje a $k$-adik szinguláris értékét $\sigma_k$, a hozzá tartozó jobb és bal szinguláris vektort $\mathbf{v}_k$ és $\mathbf{u}_k$. Legyen*

$$\mathbf{A}_k = \sum_{i=1}^{k} \sigma_i \mathbf{u}_i \mathbf{v}_i^\mathsf{T}.$$

*Ekkor $\mathbf{A}_k$ az $\mathbf{A}$ mátrix legjobb legföljebb $k$-rangú közelítése Frobenius- és 2-normában is, azaz*

$$\min_{\mathrm{r}(\mathbf{B})\le k} \|\mathbf{A} - \mathbf{B}\|_F = \|\mathbf{A} - \mathbf{A}_k\|_F = \sqrt{\sum_{i=k+1}^{r} \sigma_i^2},$$

$$\min_{\mathrm{r}(\mathbf{B})\le k} \|\mathbf{A} - \mathbf{B}\|_2 = \|\mathbf{A} - \mathbf{A}_k\|_2 = \sigma_{k+1}.$$

**Bizonyítás.** A 2-normára vonatkozó állítást igazoljuk. Tegyük fel, hogy $\mathrm{r}(\mathbf{B}) \le k$, így $\mathcal{N}(\mathbf{B}) \ge n - k$. Legyen $\mathcal{V} = \operatorname{span}(\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_{k+1})$ a legnagyobb $k + 1$ szinguláris értékhez tartozó jobb szinguláris vektorok által kifeszített altér. Ha $k \ge r$, akkor kész vagyunk, $\mathbf{A}$ legjobb közelítését saját maga adja, és ekkor $\sigma_{k+1} = 0$. Feltehető tehát, hogy $r > k$, így $\dim \mathcal{N}(\mathbf{B}) + \dim VT \ge (n - k) + (k + 1) = n + 1 > n$, tehát $\mathcal{N}(\mathbf{B}) \cap \mathcal{V}$ nem üres. Legyen $\mathbf{w} \in \mathcal{N}(\mathbf{B}) \cap \mathcal{V}$, $\|\mathbf{w}\|_2 = 1$. Ekkor

$$\begin{aligned}
\|\mathbf{A} - \mathbf{B}\|_2^2 &\ge \|(\mathbf{A} - \mathbf{B})\mathbf{w}\|_2^2 = \|\mathbf{A}\mathbf{w}\|_2^2 \\
&= \sum_{i=1}^{k+1} \sigma_i^2 |\mathbf{v}_i^\mathsf{T}\mathbf{w}|^2 \ge \sigma_{k+1}^2 \sum_{i=1}^{k+1} |\mathbf{v}_i^\mathsf{T}\mathbf{w}|^2 = \sigma_{k+1}^2
\end{aligned}$$

Másrészt $\|\mathbf{A} - \mathbf{A}_k\|_2 = \sigma_{k+1}$, így $\|\mathbf{A} - \mathbf{B}\|_2 \le \|\mathbf{A} - \mathbf{A}_k\|_2$. $\square$

### Feladatok

**10.5.** Számítsuk ki az alábbi vektorok megadott normáit!
1. $\mathbf{x} = (\sqrt{3} - i, 6i, 3)$, $\mathbf{y} = (0.1, -0.2, -0.2)$, $p = 1, 2, \infty$;
2. $(1, 2, 2)$, $(2, 3, 6)$, $(1, 4, 8)$, $(4, 4, 7)$, $p = 2$;
3. $(i, 2, \sqrt{2} - \sqrt{2}i, -4i)$, $p = 1, 2, \infty$;
4. $(3, 4, 5)$, $(11, 12, 13, 14)$, $p = 3$;
5. $\|(95800, 217519, 414560)\|_4$, $\|(27, 84, 110, 133)\|_5$.

**10.6.** Mutassuk meg, hogy a 10.15. definíció 1.–3. pontja és az utána következő megjegyzés $1'$–$3'$ pontja ekvivalensek.

**10.7.** Mutassuk meg, hogy az 1-norma norma.

**10.8.** Mutassuk meg, hogy a ∞-norma norma.

**10.9.** Mutassuk meg, hogy $\|\mathbf{x}\|_p \le c \|\mathbf{x}\|_q$, ahol $c$ a következő táblázatból kiolvasható, ahol $p$ értékei a sorok, $q$ értékei az oszlopok fejlécében vannak.

|  | 1 | 2 | ∞ |
|---|---|---|---|
| 1 | 1 | $\sqrt{n}$ | $n$ |
| 2 | 1 | 1 | $\sqrt{n}$ |
| ∞ | 1 | 1 | 1 |

**10.10.** Mutassuk meg, hogy minden norma folytonos függvény.

**10.11.** Mutassuk meg, hogy ha $\|.\|$ egy norma, és $A$ egy egy-egy értelmű lineáris leképezés, akkor az $\mathbf{x} \mapsto \|A\mathbf{x}\|$ leképezés is norma.

**10.12.** Mutassuk meg, hogy ha $\|.\|$ egy norma, akkor az

$$\mathbf{x} \mapsto \sup_{\mathbf{y}\ne 0} \frac{\mathbf{x} \cdot \mathbf{y}}{\|\mathbf{y}\|}$$

függvény is az. E normát duálnormának is szokás nevezni.

**10.13. Hölder-egyenlőtlenség.** Igazoljuk, hogy bármely $\mathbf{x}, \mathbf{y} \in \mathbb{C}^n$ vektor és $p, q \ge 1$ valósok esetén

$$\sum_{i=1}^{\infty} |x_i y_i| \le \|\mathbf{x}\|_p \|\mathbf{y}\|_q, \quad \text{ahol } \frac{1}{p} + \frac{1}{q} = 1. \tag{10.23}$$

A következő lépéseket javasoljuk:
1. Igazoljuk, hogy $a, b > 0$, $p, q \ge 1$ és $\frac{1}{p} + \frac{1}{q} = 1$ esetén

$$ab \le \frac{a^p}{p} + \frac{b^q}{q}.$$

Ennek igazolására határozzuk meg az $f : x \mapsto x^{p-1}$ függvényhez tartozó két alábbi satírozott tartomány területét!

*10.1. ábra. Az $f : x \mapsto x^{p-1}$ függvény grafikonja az $a$ és $b$ tengelyértékekhez tartozó satírozott területekkel.*

2. Az előző egyenlőtlenségben végezzük el az

$$a = \frac{|x_i|}{\|\mathbf{x}\|_p}, \quad b = \frac{|y_i|}{\|\mathbf{y}\|_q}$$

helyettesítéseket, majd ezzel igazoljuk a Hölder-egyenlőtlenség (10.23) alakját.

3. Végül bizonyítsuk a Hölder-egyenlőtlenség (10.12) alakját is.

**10.14. Minkowski-egyenlőtlenség.** Igazoljuk, hogy bármely $\mathbf{x}, \mathbf{y} \in \mathbb{C}^n$ vektor és $p \ge 1$ valós esetén

$$\|\mathbf{x} + \mathbf{y}\|_p \le \|\mathbf{x}\|_p + \|\mathbf{y}\|_p. \tag{10.24}$$

A következő lépéseket javasoljuk:
1. Igazoljuk, majd alkalmazzuk az $x_i, y_i$ számokra az

$$|a + b|^p = |a + b||a + b|^{p/q} \le |a||a + b|^{p/q} + |b||a + b|^{p/q}$$

egyenlőtlenséget, ahol $1/p + 1/q = 1$.

2. Alkalmazzuk a Hölder-egyenlőtlenséget a $\sum_{i=1}^{n} |x_i||x_i + y_i|^{p/q}$ kifejezésre.

**10.15.** Mutassuk meg, hogy a $p$-norma norma.

**10.16.** Számítsuk ki az alábbi mátrixok Frobenius-, 1-, 2- és ∞-normáját!

$$\mathbf{A} = \begin{bmatrix} 1 & 2 \\ 2 & 4 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 3 & 0 \\ 4 & 0 \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} 2 & -2 \\ 1 & 2 \end{bmatrix}.$$

**10.17.** Számítsuk ki az alábbi mátrixok Frobenius-, 1-, 2- és ∞-normáját!

$$\mathbf{A} = \begin{bmatrix} 0 & 1 & 0 \\ 4 & 0 & 0 \\ 0 & 0 & 8 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 2 & 2 & -1 \\ -1 & 2 & 2 \\ 2 & -1 & 2 \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} 2 & 2 & 1 \\ 1 & 2 & 2 \\ 2 & 1 & 2 \end{bmatrix}.$$

**10.18.** Konstruáljunk olyan $\mathbf{A}$, $\mathbf{B}$ és $\mathbf{C}$ mátrixokat, hogy maximum normájuk $\|\mathbf{AB}\|_{\max} < \|\mathbf{A}\|_{\max} \|\mathbf{B}\|_{\max}$, $\|\mathbf{AC}\|_{\max} = \|\mathbf{A}\|_{\max} \|\mathbf{C}\|_{\max}$ és $\|\mathbf{BC}\|_{\max} > \|\mathbf{B}\|_{\max} \|\mathbf{C}\|_{\max}$ legyen.

**10.19.** Igazoljuk, hogy minden indukált $\|.\|$ mátrixnormára $\|\mathbf{I}\| = 1$, ugyanakkor $\|\mathbf{I}\|_F = \sqrt{n}$.

**10.20.** Igazoljuk, hogy tetszőleges mátrixnormára

$$\rho(\mathbf{A}) \le \|\mathbf{A}\|,$$

ahol $\rho(\mathbf{A})$ az $\mathbf{A}$ spektrálsugara.

**10.21.** Bizonyítsuk be, hogy ha $\mathbf{A}$ normális ($\mathbf{A}^\mathsf{H}\mathbf{A} = \mathbf{A}\mathbf{A}^\mathsf{H}$), akkor $\|\mathbf{A}\|_2 = \rho(\mathbf{A})$.

### Megoldások

**10.1.** Ellenőriznünk kell, hogy

a) az egyenlőség fennáll,

b) az $\mathbf{U}$ és $\mathbf{V}$ ortogonális mátrixok, $\boldsymbol{\Sigma}$ diagonális,

c) az $\mathbf{u}_1 = (1/\sqrt{2}, 1/\sqrt{2})$ és a $\mathbf{v}_1 = (1/\sqrt{2}, 1/\sqrt{2}, 0)$ vektorokra $\mathbf{A}\mathbf{v}_1 = 2\mathbf{u}_1$.

Ezek mind nyilvánvalóak, vagyis az első felbontás szinguláris. Mivel $\mathrm{r}(\mathbf{A}) = 1$, ezért $\mathbf{U}$ első oszlopát és $\mathbf{V}^\mathsf{T}$ első sorát, valamint $\boldsymbol{\Sigma}$ bal felső elemét meghagyva valóban a második alakot kapjuk.

**10.2.** $\mathbf{A}^\mathsf{T}\mathbf{A} = \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix}$, melynek karakterisztikus polinomja $\lambda^2 - 4\lambda + 3 = (\lambda - 3)(\lambda - 1)$. Az $\mathbf{A}^\mathsf{T}\mathbf{A}$ sajátértékei 3 és 1, tehát $\mathbf{A}$ szinguláris értékei $\sqrt{3}$ és 1. A hozzájuk tartozó egységnyi hosszú sajátvektorok $\mathbf{v}_1 = (1/\sqrt{2}, 1/\sqrt{2})$, $\mathbf{v}_2 = (-1/\sqrt{2}, 1/\sqrt{2})$. Így

$$\mathbf{V} = \begin{bmatrix} 1/\sqrt{2} & -1/\sqrt{2} \\ 1/\sqrt{2} & 1/\sqrt{2} \end{bmatrix}, \quad \boldsymbol{\Sigma} = \begin{bmatrix} \sqrt{3} & 0 \\ 0 & 1 \\ 0 & 0 \end{bmatrix}.$$

Az $\mathbf{u}_i = \mathbf{A}\mathbf{v}_i/\sigma_i$ összefüggés alapján $\mathbf{u}_1 = \frac{1}{\sqrt{6}}(1, 2, 1)$, $\mathbf{u}_2 = \frac{1}{\sqrt{3}}(1, 0, -1)$. Az előző példához hasonlóan $\mathbf{u}_3 = \mathbf{u}_1 \times \mathbf{u}_2$ képlettel is, de most inkább számoljunk úgy, hogy keressük $\mathbf{A}^\mathsf{T}$ nullterének bázisát. A nulltér meghatározásához meg kell oldani a $\mathbf{A}^\mathsf{T} = \begin{bmatrix} 0 & 1 \\ 1 & 1 \\ 1 & 0 \end{bmatrix}$ együtthatómátrixú homogén lineáris egyenletrendszert. Innen is az adódik, hogy $\mathbf{u}_3 = \frac{1}{\sqrt{3}}(1, -1, 1)$. (Itt választhatnánk e vektor ellentettjét is, mert $\mathbf{A}\mathbf{u}_3 = \mathbf{0}$, vagyis az előjelnek nincs szerepe.)

$$\mathbf{U} = \begin{bmatrix} 1/\sqrt{6} & 1/\sqrt{2} & 1/\sqrt{3} \\ 2/\sqrt{6} & 0 & -1/\sqrt{3} \\ 1/\sqrt{6} & -1/\sqrt{2} & 1/\sqrt{3} \end{bmatrix}.$$

Tehát a szinguláris felbontás

$$\begin{bmatrix} 1/\sqrt{6} & 1/\sqrt{2} & 1/\sqrt{3} \\ 2/\sqrt{6} & 0 & -1/\sqrt{3} \\ 1/\sqrt{6} & -1/\sqrt{2} & 1/\sqrt{3} \end{bmatrix} \begin{bmatrix} \sqrt{3} & 0 \\ 0 & 1 \\ 0 & 0 \end{bmatrix} \begin{bmatrix} 1/\sqrt{2} & 1/\sqrt{2} \\ -1/\sqrt{2} & 1/\sqrt{2} \end{bmatrix}.$$

**10.3.** A $\mathbf{B}^\mathsf{T}\mathbf{B}$ mátrix karakterisztikus polinomja $-\lambda^3 + 4\lambda^2 - 3\lambda = -(\lambda - 3)(\lambda - 1)\lambda$, így sajátértékei 3, 1 és 0. A szinguláris értékek $\sqrt{3}$ és 1. A sajátvektorok számításához 3-dimenziós vektorokkal kell számolnunk. Talán jobban járunk, ha inkább $\mathbf{B}\mathbf{B}^\mathsf{T}$ mátrixszal próbálkozunk. Mivel $\mathbf{B}\mathbf{B}^\mathsf{T} = \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix}$, ezért a karakterisztikus polinom $\lambda^2 - 4\lambda + 3 = (\lambda - 3)(\lambda - 1)$. A szinguláris értékek tehát $\sqrt{3}$ és 1, összhangban az előbbi számítással. A hozzájuk tartozó egységnyi hosszú sajátvektorok most nem a $\mathbf{V}_1$, hanem $\mathbf{U}_1$ oszlopait adják: $\mathbf{u}_1 = (1/\sqrt{2}, 1/\sqrt{2})$, $\mathbf{u}_2 = (-1/\sqrt{2}, 1/\sqrt{2})$. A $\mathbf{v}_i = \mathbf{A}^\mathsf{T}\mathbf{u}_i/\sigma_i$ képletet használva a $\mathbf{V}$ mátrix is meghatározható. Tehát

$$\mathbf{B} = \begin{bmatrix} 1/\sqrt{2} & -1/\sqrt{2} \\ 1/\sqrt{2} & 1/\sqrt{2} \end{bmatrix} \begin{bmatrix} \sqrt{3} & 0 & 0 \\ 0 & 1 & 0 \end{bmatrix} \begin{bmatrix} 2/\sqrt{6} & 1/\sqrt{6} & 1/\sqrt{6} \\ 0 & 1/\sqrt{2} & -1/\sqrt{2} \\ -1/\sqrt{3} & 1/\sqrt{3} & 1/\sqrt{3} \end{bmatrix}$$

a $\mathbf{B}$ mátrix szinguláris felbontása.

**10.4.** A 10.2. feladatban meghatároztuk az $\mathbf{A}$ mátrix redukált szinguláris felbontását:

$$\mathbf{A} = \begin{bmatrix} 1/\sqrt{6} & 1/\sqrt{2} \\ 2/\sqrt{6} & 0 \\ 1/\sqrt{6} & -1/\sqrt{2} \end{bmatrix} \begin{bmatrix} \sqrt{3} & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 1/\sqrt{2} & 1/\sqrt{2} \\ -1/\sqrt{2} & 1/\sqrt{2} \end{bmatrix},$$

amiből a pszeudoinverz

$$\begin{aligned}
\mathbf{A}^+ &= \begin{bmatrix} 1/\sqrt{2} & -1/\sqrt{2} \\ 1/\sqrt{2} & 1/\sqrt{2} \end{bmatrix} \begin{bmatrix} 1/\sqrt{3} & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 1/\sqrt{6} & 2/\sqrt{6} & 1/\sqrt{6} \\ 1/\sqrt{2} & 0 & -1/\sqrt{2} \end{bmatrix} \\
&= \begin{bmatrix} -1/3 & 1/3 & 2/3 \\ 2/3 & 1/3 & -1/3 \end{bmatrix}.
\end{aligned}$$

**10.5.**

a) $\|\mathbf{x}\|_1 = 11$, $\|\mathbf{x}\|_2 = 7$, $\|\mathbf{x}\|_\infty = 6$, $\|\mathbf{y}\|_1 = 0.5$, $\|\mathbf{y}\|_2 = 0.3$, $\|\mathbf{x}\|_\infty = 0.2$.

b) Ezek az úgynevezett Pitagorászi számnégyesekből képzett vektorok, amelyekben a koordináták négyzetösszege négyzetszám, így a 2-normájuk egész. A normák 3, 7, 9, 9.

c) 9, 5, 4;

d) 6, 20;

e) e két példa a $p = 4$ és $p = 5$ értékre a legkisebb olyan $p - 1$-dimenziós pozitív egész vektor, melynek $p$-normája egész: $\|(95800, 217519, 414560)\|_4 = 422481$, $\|(27, 84, 110, 133)\|_5 = 144$. Euler még azt sejtette, hogy ilyen nincs.

**10.16.** $\|\mathbf{A}\|_F = 5$, $\|\mathbf{A}\|_1 = 6$, $\|\mathbf{A}\|_2 = 5$, $\|\mathbf{A}\|_\infty = 6$. $\|\mathbf{B}\|_F = 5$, $\|\mathbf{B}\|_1 = 7$, $\|\mathbf{B}\|_2 = 5$, $\|\mathbf{B}\|_\infty = 4$. $\|\mathbf{C}\|_F = \sqrt{13}$, $\|\mathbf{C}\|_1 = 4$, $\|\mathbf{C}\|_2 = 3$, $\|\mathbf{C}\|_\infty = 4$.

**10.17.** $\|\mathbf{A}\|_F = 9$, $\|\mathbf{A}\|_1 = 8$, $\|\mathbf{A}\|_2 = 8$, $\|\mathbf{A}\|_\infty = 8$. $\|\mathbf{B}\|_F = 3\sqrt{3}$, $\|\mathbf{B}\|_1 = 5$, $\|\mathbf{B}\|_2 = 3$, $\|\mathbf{B}\|_\infty = 5$. $\|\mathbf{C}\|_F = 3\sqrt{3}$, $\|\mathbf{C}\|_1 = 5$, $\|\mathbf{C}\|_2 = 5$, $\|\mathbf{C}\|_\infty = 5$.

**10.18.** Tekintsük például az alábbi három mátrixot:

$$\mathbf{A} = \begin{bmatrix} 2 & 0 \\ 0 & 1 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 0 & 1 \\ 2 & 2 \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix}.$$

Ezek mindegyikében 2 az elemek maximuma, így bármely két mátrix maximum normájának szorzata 4. Szorzataik:

$$\mathbf{AB} = \begin{bmatrix} 0 & 2 \\ 2 & 2 \end{bmatrix}, \quad \mathbf{AC} = \begin{bmatrix} 2 & 4 \\ 0 & 1 \end{bmatrix}, \quad \mathbf{BC} = \begin{bmatrix} 0 & 1 \\ 2 & 6 \end{bmatrix}.$$

Ezek elemeinek maximuma rendre 2, 4, 6.

**10.20.** Ha $\lambda$ egy tetszőleges sajátértéke $\mathbf{A}$-nak, és $\mathbf{x}$ a hozzá tartozó egyik sajátvektor, azaz $\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$, akkor

$$\mathbf{A}\mathbf{x}\mathbf{x}^\mathsf{H} = \lambda\mathbf{x}\mathbf{x}^\mathsf{H} \rightsquigarrow \|\mathbf{A}\|\,\|\mathbf{x}\mathbf{x}^\mathsf{H}\| \ge \|\mathbf{A}\mathbf{x}\mathbf{x}^\mathsf{H}\| = |\lambda|\,\|\mathbf{x}\mathbf{x}^\mathsf{H}\|,$$

és mivel $\mathbf{x} \ne \mathbf{0}$, így $\mathbf{x}\mathbf{x}^\mathsf{H} \ne \mathbf{O}$, azaz $\|\mathbf{x}\mathbf{x}^\mathsf{H}\| \ne 0$, vagyis leosztva vele $|\lambda| \le \|\mathbf{A}\|$ adódik. Ez minden sajátértékre, így a spektrálsugárra is igaz.

**10.21.** Ha $\mathbf{A}$ normális, akkor unitéren hasonló egy diagonális $\mathbf{D}$ mátrixhoz, azaz $\mathbf{A} = \mathbf{Q}\mathbf{D}\mathbf{Q}^\mathsf{H}$ valamely unitér $\mathbf{Q}$ mátrixszal. Ekkor $\mathbf{A}^\mathsf{H}\mathbf{A} \sim \mathbf{D}^\mathsf{H}\mathbf{D}$ is fönnáll, ugyanis $\mathbf{A}^\mathsf{H}\mathbf{A} = (\mathbf{Q}\mathbf{D}\mathbf{Q}^\mathsf{H})^\mathsf{H}(\mathbf{Q}\mathbf{D}\mathbf{Q}^\mathsf{H}) = \mathbf{Q}\mathbf{D}^\mathsf{H}\mathbf{D}\mathbf{Q}^\mathsf{H}$, tehát $\mathbf{A}^\mathsf{H}\mathbf{A}$ és $\mathbf{D}^\mathsf{H}\mathbf{D}$ sajátértékei megegyeznek. Másrészt $\mathbf{D}^\mathsf{H}\mathbf{D}$ minden sajátértéke $|\lambda|^2$ alakú, ahol $\lambda$ az $\mathbf{A}$ valamely sajátértéke. Összegezve: mivel $\|\mathbf{A}\|_2 = \sigma_1$, azaz az $\mathbf{A}^\mathsf{H}\mathbf{A}$ legnagyobb sajátértékének gyöke, ami viszont megegyezik $\mathbf{A}$ legnagyobb sajátértékével, azaz a $\rho(\mathbf{A})$ spektrálsugárral.

# 11. Jordan-féle normálalak

Négyzetes mátrixok Jordan-féle normálalakja fontos klasszifikációs eszköz, de numerikus algoritmusok ritkán használják instabilitása miatt.

## Normálalak és invariáns altér

> *Minden mátrix hasonló egy „majdnem diagonális” mátrixhoz, amelynek főátlójában a sajátértékek, fölötte nullák vagy egyesek, egyebütt nullák állnak.*

### Invariáns alterek

Egy vektortér lineáris transzformációjának diagonalizálhatósága ekvivalens a tér sajátalterek direkt összegeként való előállíthatóságával. Ezt az állítást fogjuk általánosítani invariáns alterekre.

A 3-dimenziós térnek egy síkjára való tükrözése olyan lineáris transzformáció, melynek sajátalterei a sík, és a rá merőleges egyenes, és a tér e két sajátaltér direkt összege. A tér egyenes körüli $60°$-os elforgatása esetén csak egy sajátaltér van, a forgástengely, viszont a tér itt is előáll e tengely és a rá merőleges sík direkt összegeként. E két alteret az jellemzi, hogy ezeket a forgatás saját magába viszi, azaz mindkettő invariáns a forgatásra nézve.

**11.1. definíció (Invariáns altér).** *Azt mondjuk, hogy az $\mathcal{U} \le \mathcal{V}$ altér az $L : \mathcal{V} \to \mathcal{V}$ lineáris transzformáció (az $\mathbf{L}$ mátrix) invariáns altere (vagy $\mathcal{U}$ a $\mathcal{V}$ $L$-invariáns altere), ha minden $\mathbf{x} \in \mathcal{U}$ vektorra $L\mathbf{x} \in \mathcal{U}$ ($\mathbf{L}\mathbf{x} \in \mathcal{U}$).*

Egy altér invariáns voltának eldöntéséhez elég ellenőrizni, hogy az altér egy bázisának elemeit $L$ az altérbe viszi-e (ld. a 11.1. feladatot). Például az

$$\begin{bmatrix} 1 & 1 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

mátrix, illetve a hozzá tartozó $(x, y, z) \mapsto (x + y, y, z)$ leképezés invariáns alterei $\{\mathbf{0}\}$, $\operatorname{span}(\mathbf{e}_1)$, $\operatorname{span}(\mathbf{e}_2)$, $\operatorname{span}(\mathbf{e}_1, \mathbf{e}_2)$, $\operatorname{span}(\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3)$.

### Invariáns alterek és blokkmátrixok

Vizsgáljuk meg invariáns altérrel rendelkező lineáris transzformációk megfelelő bázisban felírt mátrixait.

**11.2. tétel (Blokkmátrixok és az invariáns alterek).** *Legyen $L : \mathcal{V} \to \mathcal{V}$ lineáris transzformáció, $\mathcal{U}, \mathcal{W} \le \mathcal{V}$ alterek, $\mathcal{V} = \mathcal{U} \oplus \mathcal{W}$ és legyen a $\mathcal{V}$ tér $\mathcal{B}$ bázisa az $\mathcal{U}$ altér $\mathcal{B}_\mathcal{U}$ bázisának és a $\mathcal{W}$ altér $\mathcal{B}_\mathcal{W}$ bázisának uniója. Ha az $\mathcal{U}$ altér $L$-invariáns, akkor $L$ mátrix alakja*

$$[L]_\mathcal{B} = \begin{bmatrix} \mathbf{U} & * \\ \mathbf{O} & * \end{bmatrix},$$

*ha $\mathcal{U}$ és $\mathcal{W}$ is $L$-invariáns alterek, akkor*

$$[L]_\mathcal{B} = \begin{bmatrix} \mathbf{U} & \mathbf{O} \\ \mathbf{O} & \mathbf{W} \end{bmatrix},$$

*ahol $\mathbf{U}$ az $\mathcal{U}$-ra, $\mathbf{W}$ a $\mathcal{W}$-re megszorított $L$ mátrixa az altér bázisára nézve, azaz $\mathbf{U} = [L|_\mathcal{U}]_{\mathcal{B}_\mathcal{U}}$, $\mathbf{W} = [L|_\mathcal{W}]_{\mathcal{B}_\mathcal{W}}$.*

**Bizonyítás.** A második állítást igazoljuk, az első hasonlóan megy. Legyen $\mathcal{B}_\mathcal{U} = \{\mathbf{u}_1, \dots, \mathbf{u}_r\}$ és $\mathcal{B}_\mathcal{W} = \{\mathbf{w}_1, \dots, \mathbf{w}_{n-r}\}$. Ha $\mathcal{U}$ és $\mathcal{W}$ invariáns alterek, akkor $L\mathbf{u}_i \in \mathcal{U}$ és $L\mathbf{w}_j \in \mathcal{W}$, így

$$\begin{aligned}
L\mathbf{u}_i &= u_{i1}\mathbf{u}_1 + \dots + u_{ir}\mathbf{u}_r + 0\mathbf{w}_1 + \dots + 0\mathbf{w}_{n-r} \\
L\mathbf{w}_j &= 0\mathbf{u}_1 + \dots + 0\mathbf{u}_r + w_{j,r+1}\mathbf{w}_1 + \dots + w_{j,n}\mathbf{w}_{n-r}
\end{aligned}$$

ahol $i = 1, \dots, r$, $j = r + 1, \dots, n$. Tehát

$$[L]_\mathcal{B} = \left[\begin{array}{cccc|cccc} u_{11} & u_{21} & \dots & u_{r1} & 0 & 0 & \dots & 0 \\ \vdots & \vdots & \dots & \vdots & \vdots & \vdots & \dots & \vdots \\ u_{1r} & u_{2r} & \dots & u_{rr} & 0 & 0 & \dots & 0 \\ \hline 0 & 0 & \dots & 0 & w_{r+1,r+1} & w_{r+2,r+1} & \dots & w_{n,r+1} \\ \vdots & \vdots & \dots & \vdots & \vdots & \vdots & \dots & \vdots \\ 0 & 0 & \dots & 0 & w_{r+1,n} & w_{r+2,n} & \dots & w_{n,n} \end{array}\right],$$

ami bizonyítja az állítást. Egyúttal az $\mathbf{U} = [L|_\mathcal{U}]_{\mathcal{B}_\mathcal{U}}$, $\mathbf{W} = [L|_\mathcal{W}]_{\mathcal{B}_\mathcal{W}}$ összefüggések is leolvashatók a fenti kifejezésekből. $\square$

> ▶ Igaz az általánosítása: ha $\mathcal{U}_1, \dots, \mathcal{U}_k$ a $\mathcal{V}$ vektortér $L$-invariáns alterei, és $\mathcal{V} = \mathcal{U}_1 \oplus \dots \oplus \mathcal{V}_k$, akkor $L$ mátrixa blokkdiagonális minden olyan bázisban, mely az alterek bázisainak egyesítése (ld. 11.3. feladat).

> ▶ Evidens, hogy minden blokkdiagonális mátrixhoz találhatóak olyan standard bázisvektorok által kifeszített invariáns alterek, amelyek direkt összege az egész tér. Például az alábbi $\mathbf{L}$ mátrix esetén

$$\begin{bmatrix} 1 & 2 & 3 & 0 & 0 & 0 \\ 2 & 3 & 4 & 0 & 0 & 0 \\ 3 & 4 & 6 & 0 & 0 & 0 \\ 0 & 0 & 0 & 8 & 0 & 0 \\ 0 & 0 & 0 & 0 & 1 & 2 \\ 0 & 0 & 0 & 0 & 2 & 1 \end{bmatrix} \qquad \begin{aligned} \mathcal{U}_1 &= \{\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3\}, \\ \mathcal{U}_2 &= \{\mathbf{e}_4\}, \\ \mathcal{U}_3 &= \{\mathbf{e}_5, \mathbf{e}_6\}, \\ \mathcal{V} &= \mathbb{R}^6 = \mathcal{U}_1 \oplus \mathcal{U}_2 \oplus \mathcal{U}_3. \end{aligned}$$

### Általánosított sajátvektorok és a Jordan-blokk

A diagonalizálhatóság általánosításához jutunk, ha minden sajátértékhez egy algebrai multiplicitásával azonos dimenziójú invariáns alteret találunk. Ezek az invariáns alterek az $\mathbf{A} - \lambda\mathbf{I}$ megfelelő hatványainak nullterei lesznek.

Példaként keressünk olyan $3 \times 3$-as mátrixot, melynek egyetlen sajátértéke van, és annak 1 a geometriai multiplicitása. Világos, hogy ekkor $\mathbf{A} - \lambda\mathbf{I}$ rangja csak 2 lehet, mert csak így lehet az $\mathbf{A} - \lambda\mathbf{I} = \mathbf{0}$ megoldása 1-paraméteres. E feltételnek megfelel a 8.15. példabeli

$$\mathbf{A} = \begin{bmatrix} 4 & 1 & 0 \\ 0 & 4 & 1 \\ 0 & 0 & 4 \end{bmatrix}$$

mátrix. Tekintsük hatását a standard bázis vektorain:

$$\begin{aligned}
\mathbf{A}\mathbf{e}_1 &= 4\mathbf{e}_1 & (\mathbf{A} - 4\mathbf{I})\mathbf{e}_1 &= \mathbf{0} & (\mathbf{A} - 4\mathbf{I})\mathbf{e}_1 &= \mathbf{0} \\
\mathbf{A}\mathbf{e}_2 &= \mathbf{e}_1 + 4\mathbf{e}_2, \text{ azaz} & (\mathbf{A} - 4\mathbf{I})\mathbf{e}_2 &= \mathbf{e}_1, \text{ azaz} & (\mathbf{A} - 4\mathbf{I})^2\mathbf{e}_2 &= \mathbf{0}. \\
\mathbf{A}\mathbf{e}_3 &= \mathbf{e}_2 + 4\mathbf{e}_3 & (\mathbf{A} - 4\mathbf{I})\mathbf{e}_3 &= \mathbf{e}_2 & (\mathbf{A} - 4\mathbf{I})^3\mathbf{e}_3 &= \mathbf{0}
\end{aligned}$$

Az $\mathbf{A} - 4\mathbf{I}$ mátrix fenti hatását a következő diagrammal fogjuk szemléltetni:

$$\mathbf{0} \xleftarrow{\mathbf{A} - 4\mathbf{I}} \mathbf{e}_1 \xleftarrow{\mathbf{A} - 4\mathbf{I}} \mathbf{e}_2 \xleftarrow{\mathbf{A} - 4\mathbf{I}} \mathbf{e}_3$$

Az $(\mathbf{A} - \lambda\mathbf{I})^k\mathbf{e}_k = \mathbf{0}$ összefüggések a következő definícióhoz vezetnek:

**11.3. definíció (Általánosított sajátvektor).** *Az $\mathbf{x} \ne \mathbf{0}$ vektort a négyzetes $\mathbf{A}$ mátrix $\lambda$ sajátértékéhez tartozó általánosított sajátvektorának nevezzük, ha valamilyen $k$ természetes számra $(\mathbf{A} - \lambda\mathbf{I})^k\mathbf{x} = \mathbf{0}$. $k = 1$ esetén $\mathbf{x}$ sajátvektor. Az általánosított sajátvektorokból álló $\mathbf{x}_i$ ($i = 1, 2, \dots, k$) sorozatot Jordan-láncnak nevezzük, ha $(\mathbf{A} - \lambda\mathbf{I})\mathbf{x}_i = \mathbf{x}_{i-1}$ és $(\mathbf{A} - \lambda\mathbf{I})\mathbf{x}_1 = \mathbf{0}$. Egy tér diszjunkt Jordan-láncokból álló bázisát Jordan-bázisnak nevezzük.*

> ▶ A Jordan-lánc definíciója korrekt abban az értelemben, hogy ha $\mathbf{x}_k$ általánosított sajátvektor, melyre $(\mathbf{A} - \lambda\mathbf{I})^k\mathbf{x}_k = \mathbf{0}$, de $(\mathbf{A} - \lambda\mathbf{I})^{k-1}\mathbf{x}_k \ne \mathbf{0}$, akkor minden $i < k$ esetén $\mathbf{x}_{k-i} = (\mathbf{A} - \lambda\mathbf{I})^i\mathbf{x}_k$ ($i = 1, \dots, k-1$) is általánosított sajátvektor. Ez abból következik, hogy
> $$(\mathbf{A} - \lambda\mathbf{I})^{k-i}\mathbf{x}_{k-i} = (\mathbf{A} - \lambda\mathbf{I})^{k-i}(\mathbf{A} - \lambda\mathbf{I})^i\mathbf{x}_k = (\mathbf{A} - \lambda\mathbf{I})^k\mathbf{x}_k = \mathbf{0}$$

> ▶ A fent vizsgált $\mathbf{A}$ mátrix esetén a térnek sajátvektorokból álló bázisa nincs, hisz a sajátaltér csak 1-dimenziós, de a standard bázisvektorok Jordan-láncot alkotnak, mely egyúttal Jordan-bázis is.

**11.4. állítás (Jordan-lánc által kifeszített altér).** *Az $\mathbf{A}$ mátrix egy Jordan-lánca által kifeszített altér $\mathbf{A}$-invariáns, továbbá egy $\lambda$ sajátértékhez tartozó általánosított sajátvektorok $\mathbf{A}$-invariáns alteret alkotnak. Hasonló állítás igaz az $A$ lineáris transzformációra.*

**Bizonyítás.** Mivel $(\mathbf{A} - \lambda\mathbf{I})\mathbf{x}_i = \mathbf{x}_{i-1}$, ezért $\mathbf{A}\mathbf{x}_i = \mathbf{x}_{i-1} + \lambda\mathbf{x}_i$, azaz bázisvektor képe az altérben van, ami bizonyítja, hogy a kifeszített altér $\mathbf{A}$-invariáns.

Ha $c$ tetszőleges konstans, $\mathbf{x}$ és $\mathbf{y}$ a $\lambda$-hoz tartozó általánosított sajátvektorok, azaz $(\mathbf{A} - \lambda\mathbf{I})^k\mathbf{x} = \mathbf{0}$ és $(\mathbf{A} - \lambda\mathbf{I})^\ell\mathbf{y} = \mathbf{0}$, akkor

$$(\mathbf{A} - \lambda\mathbf{I})^{\max(k,\ell)}(c\mathbf{x} + \mathbf{y}) = c\mathbf{0} + \mathbf{0} = \mathbf{0},$$

ami bizonyítja a második állítást. $\square$

**11.5. példa (Jordan-lánc és Jordan-bázis keresése).** *Az alábbi két mátrix mindegyikének $(4 - x)^3$ a karakterisztikus polinomja. Keressünk mindegyikükhöz egy Jordan-bázist és írjuk fel a mátrixot e bázisban!*

$$\mathbf{A} = \begin{bmatrix} 6 & -1 & -3 \\ -1 & 5 & 2 \\ 2 & -1 & 1 \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} 2 & -3 & 2 \\ 4 & 10 & -4 \\ 4 & 6 & 0 \end{bmatrix}.$$

**Megoldás.** Mindkét mátrixnak a $\lambda = 4$ háromszoros algebrai multiplicitású sajátértéke (ellenőrizzük!).

Az $\mathbf{A}$ mátrix esetén a sajátaltér 1-dimenziós, melyet az $\mathbf{x} = (1, -1, 1)$ vektor feszít ki.

Mivel $(\mathbf{A} - 4\mathbf{I})^3 = \mathbf{O}$, de $(\mathbf{A} - 4\mathbf{I})^2 \ne \mathbf{O}$, ezért van olyan $\mathbf{x}_3$ vektor, melyre $(\mathbf{A} - 4\mathbf{I})^2\mathbf{x}_3 \ne \mathbf{0}$. Mivel

$$(\mathbf{A} - 4\mathbf{I})^2 = \begin{bmatrix} -1 & 0 & 1 \\ 1 & 0 & -1 \\ -1 & 0 & 1 \end{bmatrix},$$

így $(\mathbf{A} - 4\mathbf{I})^2(x, y, z) = (-x + z, x - z, -x + z)$, ezért bármely $\mathbf{x}_3 = (x, y, z)$ vektor megfelel, ha $x \ne z$. Például legyen $x = 1$, $y = z = 0$, azaz $\mathbf{x}_3 = (1, 0, 0)$. Mivel $(\mathbf{A} - 4\mathbf{I})^2\mathbf{x}_3 \ne \mathbf{0}$, ezért $\mathbf{x}_2 = (\mathbf{A} - 4\mathbf{I})\mathbf{x}_3$ szükségképpen olyan vektor, melyre $(\mathbf{A} - 4\mathbf{I})\mathbf{x}_2 \ne \mathbf{0}$, de $(\mathbf{A} - 4\mathbf{I})^2\mathbf{x}_2 = \mathbf{0}$, azaz az $\mathbf{x}_1 = (\mathbf{A} - 4\mathbf{I})\mathbf{x}_2$ vektor sajátvektor. A fenti $\mathbf{x}_3$ vektor esetén a következő láncot kapjuk:

$$\mathbf{0} \xleftarrow{\mathbf{A} - 4\mathbf{I}} \mathbf{x}_1 = (-1, 1, -1) \xleftarrow{\mathbf{A} - 4\mathbf{I}} \mathbf{x}_2 = (2, -1, 2) \xleftarrow{\mathbf{A} - 4\mathbf{I}} \mathbf{x}_3 = (1, 0, 0)$$

Az $\mathbf{A}$ mátrix alakja az $\{\mathbf{x}_1, \mathbf{x}_2, \mathbf{x}_3\}$ bázisban

$$\mathbf{J} = \begin{bmatrix} 4 & 1 & 0 \\ 0 & 4 & 1 \\ 0 & 0 & 4 \end{bmatrix},$$

ugyanis $\mathbf{A}\mathbf{x}_3 = \mathbf{x}_2 + 4\mathbf{x}_3$, $\mathbf{A}\mathbf{x}_2 = \mathbf{x}_1 + 4\mathbf{x}_2$, $\mathbf{A}\mathbf{x}_1 = 4\mathbf{x}_1$, aminek mátrixszorzat alakja:

$$\mathbf{A}[\mathbf{x}_1 \mid \mathbf{x}_2 \mid \mathbf{x}_3] = [\mathbf{x}_1 \mid \mathbf{x}_2 \mid \mathbf{x}_3] \begin{bmatrix} 4 & 1 & 0 \\ 0 & 4 & 1 \\ 0 & 0 & 4 \end{bmatrix}.$$

Így $\mathbf{X}^{-1}\mathbf{A}\mathbf{X} = \mathbf{J}$, ahol $\mathbf{X} = [\mathbf{x}_1 \mid \mathbf{x}_2 \mid \mathbf{x}_3]$, ami az általánosított sajátvektorok alkotta bázisról a standard bázisra való áttérés mátrixa. A konkrét adatokkal ellenőrizve:

$$\mathbf{J} = \mathbf{X}^{-1}\mathbf{A}\mathbf{X} = \begin{bmatrix} 0 & 2 & 1 \\ 0 & 1 & 1 \\ 1 & 0 & -1 \end{bmatrix} \begin{bmatrix} 6 & -1 & -3 \\ -1 & 5 & 2 \\ 2 & -1 & 1 \end{bmatrix} \begin{bmatrix} -1 & 2 & 1 \\ 1 & -1 & 0 \\ -1 & 2 & 0 \end{bmatrix} = \begin{bmatrix} 4 & 1 & 0 \\ 0 & 4 & 1 \\ 0 & 0 & 4 \end{bmatrix}.$$

A $\mathbf{C}$ mátrix esetén a sajátaltér 2-dimenziós, melyet az $(1,0,1)$ és $(0,2,3)$ vektorok feszítenek ki, tehát két láncot keresünk. Mivel $(\mathbf{C} - 4\mathbf{I})^2 = \mathbf{O}$, ezért legföljebb kettő hosszú láncra számíthatunk. Olyan $\mathbf{x}_2$ vektort keresünk, melyre $(\mathbf{C} - 4\mathbf{I})\mathbf{x}_2 \neq \mathbf{0}$. Mivel

$$\mathbf{C} - 4\mathbf{I} = \begin{bmatrix} -2 & -3 & 2 \\ 4 & 6 & -4 \\ 4 & 6 & -4 \end{bmatrix},$$

ezért pl. az $x = 1$, $y = z = 0$, azaz az $\mathbf{x}_2 = (1,0,0)$ választás megfelel. Ezt $\mathbf{C} - 4\mathbf{I}$ az $\mathbf{x}_1 = (-2,4,4)$ vektorba viszi. Ez nem egyezik meg a sajátalteret kifeszítő – fent megadott – vektorok egyikével sem, de szükségképpen sajátvektor (csak ellenőrzésképpen: $\mathbf{x}_1 = (-2,4,4) = -2(1,0,1) + 2(0,2,3)$). A másik Jordan-lánc tehát egyetlen vektorból áll, mely a sajátaltér bármelyik $\mathbf{x}_1$-től független vektora lehet. Pl. a következő két lánc megfelel:

$$\mathbf{0} \xleftarrow{\mathbf{C}-4\mathbf{I}} \mathbf{x}_1 = (-2,4,4) \xleftarrow{\mathbf{C}-4\mathbf{I}} \mathbf{x}_2 = (1,0,0)$$

$$\mathbf{0} \xleftarrow{\mathbf{C}-4\mathbf{I}} \mathbf{y}_1 = (1,0,1)$$

A $\mathbf{C}$ mátrix alakja az általánosított sajátvektorok alkotta $\{\mathbf{x}_1, \mathbf{x}_2, \mathbf{y}_1\}$ bázisban

$$\begin{bmatrix} 4 & 1 & 0 \\ 0 & 4 & 0 \\ 0 & 0 & 4 \end{bmatrix},$$

ugyanis $\mathbf{A}\mathbf{x}_2 = \mathbf{x}_1 + 4\mathbf{x}_2$, $\mathbf{A}\mathbf{x}_1 = 4\mathbf{x}_1$, $\mathbf{A}\mathbf{y}_1 = 4\mathbf{y}_1$, aminek mátrixszorzat alakja:

$$\mathbf{A}[\mathbf{x}_1 \mid \mathbf{x}_2 \mid \mathbf{x}_3] = [\mathbf{x}_1 \mid \mathbf{x}_2 \mid \mathbf{x}_3] \begin{bmatrix} 4 & 1 & 0 \\ 0 & 4 & 0 \\ 0 & 0 & 4 \end{bmatrix}.$$

Hasonlóképp $\mathbf{A}$ alakja az $\{\mathbf{y}_1, \mathbf{x}_1, \mathbf{x}_2\}$ bázisban

$$\begin{bmatrix} 4 & 0 & 0 \\ 0 & 4 & 1 \\ 0 & 0 & 4 \end{bmatrix}.$$

$\square$

> *Jordan-normálalak*

Nem hozható minden mátrix diagonális alakra, de egy ahhoz közeli alakra igen. Ebben csak közvetlenül a főátló fölött lehetnek nemnulla elemek, és azok is csak 1-esek.

**11.6. definíció (Jordan-blokk).** *Azt a négyzetes mátrixot, melynek főátlójában azonos $\lambda$ értékek, fölötte 1-esek, egyebütt 0-k állnak, azaz melynek*

$$\mathbf{J}_\lambda = \begin{bmatrix} \lambda & 1 & 0 & \dots & 0 & 0 \\ 0 & \lambda & 1 & \dots & 0 & 0 \\ 0 & 0 & \lambda & \dots & 0 & 0 \\ \vdots & \vdots & \vdots & \ddots & \vdots & \vdots \\ 0 & 0 & 0 & \dots & \lambda & 1 \\ 0 & 0 & 0 & \dots & 0 & \lambda \end{bmatrix} \tag{11.1}$$

*az alakja,* Jordan-blokknak *nevezzük. Egy blokkdiagonális mátrixot* Jordan-mátrixnak *nevezünk, ha diagonális blokkjai Jordan-blokkok.*

> *Egy Jordan-blokknak a standard bázis minden vektora általánosított sajátvektora, ugyanis $i > 1$ esetén $\mathbf{J}_\lambda \mathbf{e}_i = \lambda \mathbf{e}_i + \mathbf{e}_{i-1}$, azaz $(\mathbf{J}_\lambda - \lambda\mathbf{I})\mathbf{e}_i = \mathbf{e}_{i-1}$, és így e vektorok egyetlen Jordan-láncot alkotnak:*
>
> $$\mathbf{0} \xleftarrow{\mathbf{A}-\lambda\mathbf{I}} \mathbf{e}_1 \xleftarrow{\mathbf{A}-\lambda\mathbf{I}} \mathbf{e}_2 \xleftarrow{\mathbf{A}-\lambda\mathbf{I}} \dots \xleftarrow{\mathbf{A}-\lambda\mathbf{I}} \mathbf{e}_n$$

> *Ennél több is igaz: ha egy mátrix Jordan-blokkokból álló blokkdiagonális mátrix, akkor a standard bázis Jordan-láncokból áll.*

**11.7. tétel (Jordan-normálalak).** *Bármely $\mathbb{C}^{n\times n}$-beli mátrix hasonló egy Jordan-blokkokból álló blokkdiagonális mátrixhoz, azaz minden $\mathbf{A} \in \mathbb{C}^{n\times n}$ mátrixhoz létezik olyan $\mathbf{C}$ mátrix, hogy a $\mathbf{J} = \mathbf{C}^{-1}\mathbf{A}\mathbf{C}$ mátrix alakja*

$$\mathbf{J} = \begin{bmatrix} \mathbf{J}_1 & \mathbf{O} & \dots & \mathbf{O} \\ \mathbf{O} & \mathbf{J}_2 & \dots & \mathbf{O} \\ \vdots & \vdots & \ddots & \vdots \\ \mathbf{O} & \mathbf{O} & \dots & \mathbf{J}_k \end{bmatrix} \tag{11.2}$$

*ahol $k$ az $\mathbf{A}$ független sajátvektorainak maximális száma, és $\mathbf{J}_i$ minden $i$-re Jordan-blokk.*

> *A tételbeli (11.2) alakú $\mathbf{J}$ mátrixot az $\mathbf{A}$ mátrix Jordan-féle normálalakjának nevezzük.*

> *A különböző Jordan-blokkok különböző sajátvektorokhoz tartoznak, de mivel több sajátvektor is tartozhat ugyanahhoz a sajátértékhez, ezért egy sajátérték több Jordan-blokk főátlójában is szerepelhet.*

> *Az $\mathbf{A} = \mathbf{CJC}^{-1}$ alakú felbontást az $\mathbf{A}$ Jordan-felbontásának nevezzük.*

> *A tétel mátrixok hasonlóságáról szól, így lineáris leképezésekre is megfogalmazható: minden véges dimenziós komplex $\mathcal{V}$ vektortéren értelmezett lineáris transzformációhoz van olyan bázis, melyben mátrixa Jordan-normálalakú.*

A tétel tetszőleges test fölötti mátrixokra, illetve lineáris leképezésekre is megfogalmazható:

**11.8. tétel (Jordan-normálalak).** *Legyen $\mathbb{F}$ egy tetszőleges test, $\mathcal{V}$ egy $\mathbb{F}$ fölötti vektortér és $A : \mathcal{V} \to \mathcal{V}$ egy tetszőleges lineáris transzformáció (például egy $\mathbf{A} \in \mathbb{F}^{n\times n}$ mátrixhoz tartozó mátrixleképezés, ha $\mathcal{V} = \mathbb{F}^n$). Tegyük fel, hogy a $\chi_A$ karakterisztikus polinom lineáris tényezők szorzatára bomlik $\mathbb{F}$ fölött. Ekkor van olyan bázisa $\mathcal{V}$-nek, melyben $A$ mátrixa Jordan-normálalakú.*

**Bizonyítás.** Legyen $\mathcal{V}$ komplex vektortér, és $A : \mathcal{V} \to \mathcal{V}$ egy lineáris transzformáció (például az $\mathbf{A}$ mátrixhoz tartozó mátrixleképezés) és jelölje $I$ az identikus leképezést. Megmutatjuk, hogy ha az $A$ sajátalterei dimencióinak összege $k$, azaz található $k$ független sajátvektor, akkor található $k$ Jordan-lánc is, melyek vektorai a tér bázisát adják, és ebben a bázisban a leképezés mátrixa a tételbeli Jordan-alakot ölti.

A tér dimenziójára vonatkozó teljes indukcióval bizonyítunk. $n = 1$ esetén az állítás nyilván igaz. Tegyük fel, hogy igaz az állítás minden $n$-nél kisebb dimenziós térre.

Legyen $(\lambda, \mathbf{x})$ az $A$ sajátpárja. A $\lambda$-hoz tartozó sajátalteret – azaz a $\operatorname{Ker}(A - \lambda I)$ teret – jelölje $\mathcal{N}_\lambda$, ennek dimencióját $r$, és legyen $\mathcal{U}_\lambda = \operatorname{Im}(A - \lambda I)$.

Mivel $r > 0$, ezért a dimenciótétel miatt $\dim \mathcal{U}_\lambda = n - r < n$. Az $\mathcal{U}_\lambda$ invariáns altere $A$-nak, azaz $A(\mathcal{U}_\lambda) \leqslant \mathcal{U}_\lambda$, ugyanis $\mathcal{U}_\lambda$ elemei $(A - \lambda I)\mathbf{v}$ alakúak, ahol $\mathbf{v} \in \mathcal{V}$ tetszőleges, és $A(A - \lambda I)\mathbf{v} = (A^2 - \lambda A)\mathbf{v} = (A - \lambda I)(A\mathbf{v})$ ugyancsak eleme $\mathcal{U}_\lambda$-nak.

Az $A$ tehát lineáris transzformáció $\mathcal{U}_\lambda$-n is. Mivel $\dim \mathcal{U}_\lambda = n - r$, ezért az indukciós feltevés szerint van Jordan-láncokból álló bázisa. A következő diagram $e$ láncokat szemlélteti, és azt, hogy $A - \lambda_i I$ hogy hat rajtuk.

$$\begin{aligned} \mathbf{0} &\xleftarrow{A-\lambda_1 I} \mathbf{x}_1^1 \xleftarrow{A-\lambda_1 I} \dots \xleftarrow{A-\lambda_1 I} \mathbf{x}_1^{s_1} \\ \mathbf{0} &\xleftarrow{A-\lambda_2 I} \mathbf{x}_1^2 \xleftarrow{A-\lambda_2 I} \dots \xleftarrow{A-\lambda_2 I} \mathbf{x}_1^{s_2} \\ &\;\;\vdots \qquad\qquad \vdots \qquad\qquad \vdots \\ \mathbf{0} &\xleftarrow{A-\lambda_p I} \mathbf{x}_1^p \xleftarrow{A-\lambda_p I} \dots \xleftarrow{A-\lambda_p I} \mathbf{x}_1^{s_p} \end{aligned}$$

Itt az $\mathbf{x}_i^j$ vektor felső indexe a lánc sorszámát jelöli.

Legyen az $A - \lambda I$ kép- és magterének metszete $\mathcal{Q} = \mathcal{U}_\lambda \cap \mathcal{N}_\lambda$ és $q = \dim(\mathcal{Q})$. Ha $q = 0$, azaz $\mathcal{Q} = \{\mathbf{0}\}$, akkor kész vagyunk, mert így $\mathcal{U}_\lambda$ és $\mathcal{N}_\lambda$ kiegészítő alterek, tehát az $\mathcal{U}_\lambda$ indukció szerint létező Jordan-bázisához $\mathcal{N}_\lambda$ tetszőleges bázisát véve az egész tér egy Jordan-bázisát kapjuk.

Legyen $q > 0$. Mivel $\mathcal{N}_\lambda$ elemei az $A$ sajátvektorai, ezért az indukciós feltevés szerint $A$ független sajátvektoraiból $q$ darab a $\mathcal{Q}$ sajátaltér bázisa. Jelölje e $q$ sajátvektort $\mathbf{x}_1^1, \mathbf{x}_1^2, \dots, \mathbf{x}_1^q$, a belőlük induló $\lambda$ saját-

értékhez tartozó Jordan-láncok végén lévő vektorokat $\mathbf{x}_{s_i}^i$ ($i = 1, \dots, q$). Ezek mind elemei $\mathcal{U}_\lambda$-nak, tehát mindegyikhez van olyan $\mathbf{y}^i$ vektor, hogy $(A - \lambda I)\mathbf{y}^i = \mathbf{x}_{s_i}^i$ ($i = 1, 2, \dots, q$).

Az $r$-dimenziós $\mathcal{N}_\lambda$ altér $q$-dimenziós $\mathcal{Q}$ alterének bázisát kiegészítjük $\mathcal{N}_\lambda$ bázisává a $\mathbf{z}^1, \dots, \mathbf{z}^{r-q}$ vektorokkal. Így a következő Jordan-láncokat kaptuk:

*11.1. ábra. A $\mathcal{V}$ tér Jordan-bázisának felépítése: az $\mathcal{N}_\lambda$ sajátaltérben a $\mathbf{z}^1, \dots, \mathbf{z}^{r-q}$ kiegészítő vektorok, az $\mathcal{U}_\lambda$ képtérben az $\mathbf{x}_1^1, \dots, \mathbf{x}_{s_1}^1$, \dots láncok, és ezek $\mathbf{y}^1, \dots, \mathbf{y}^q$ vektorokkal való meghosszabbításai.*

$$\begin{aligned} \mathbf{0} &\xleftarrow{A-\lambda I} \mathbf{z}^1 \\ &\;\;\vdots \\ \mathbf{0} &\xleftarrow{A-\lambda I} \mathbf{z}^{r-q} \\ \mathbf{0} &\xleftarrow{A-\lambda I} \mathbf{x}_1^1 \xleftarrow{A-\lambda I} \dots \xleftarrow{A-\lambda I} \mathbf{x}_{s_1}^1 \xleftarrow{A-\lambda I} \mathbf{y}^1 \\ &\;\;\vdots \qquad\qquad\qquad\qquad\qquad\quad \vdots \qquad\qquad \vdots \\ \mathbf{0} &\xleftarrow{A-\lambda I} \mathbf{x}_1^q \xleftarrow{A-\lambda I} \dots \xleftarrow{A-\lambda I} \mathbf{x}_{s_q}^q \xleftarrow{A-\lambda I} \mathbf{y}^q \\ \mathbf{0} &\xleftarrow{A-\lambda_{q+1} I} \mathbf{x}_1^{q+1} \xleftarrow{A-\lambda_{q+1} I} \dots \xleftarrow{A-\lambda_{q+1} I} \mathbf{x}_{s_{q+1}}^{q+1} \\ &\;\;\vdots \qquad\qquad\qquad\qquad\qquad\quad \vdots \\ \mathbf{0} &\xleftarrow{A-\lambda_p I} \mathbf{x}_1^p \xleftarrow{A-\lambda_p I} \dots \xleftarrow{A-\lambda_p I} \mathbf{x}_{s_p}^p \end{aligned}$$

Az $\mathbf{x}$-vektorok száma $n - r$, az $\mathbf{y}$-vektorok száma $q$, a $\mathbf{z}$-vektorok száma $r - q$, ezek összege pedig $(n - r) + q + (r - q) = n$, tehát van elég vektor egy bázishoz. Belátjuk, hogy függetlenek.

A konstrukció olyan volt, hogy az $\mathbf{x}$- és $\mathbf{z}$-vektorok mind függetlenek egymástól.

Az $\mathbf{y}^1, \dots, \mathbf{y}^q$ vektorok lineárisan függetlenek, hisz $A - \lambda I$ általi képvektoraik (az $\mathbf{x}_{s_i}^i$ vektorok) függetlenek.

Az $\mathbf{y}^1, \dots, \mathbf{y}^q$ vektorok nem-triviális lineáris kombinációi nem eshetnek $\mathcal{N}_\lambda$-ba, mert azt $A - \lambda I$ a $\mathbf{0}$-ba viszi, így az $\mathbf{y}$-vektorok függetlenek a $\mathbf{z}$-vektoroktól.

Az $\mathbf{y}^1, \dots, \mathbf{y}^q$ vektorok nem-triviális lineáris kombinációi nem eshetnek $\mathcal{U}_\lambda$-ba sem, mert az $A - \lambda I$ egy ilyen lineáris kombinációt az $A$ transzformáció $\lambda$-hoz tartozó Jordán-láncai végső vektorainak lineáris kombinációjába visz. Ha $\mathcal{U}_\lambda$ bármely vektorának e vektor lenne a képe, akkor az általánosított sajátvektor lenne, azok alterében lévő vektorokat viszont $A - \lambda I$ nem vihet a fenti lineáris kombinációba. $\square$

> *A Jordan-alak egyértelműsége*

A mátrixok a Jordan-normálalakjuk szerint osztályokba sorolhatók. Ezt a normálalak egyértelműsége biztosítja.

**11.9. tétel (A Jordan-alak egyértelműsége).** *Egy mátrix Jordan-normálalakja a Jordan-blokkok sorrendjétől eltekintve egyértelmű.*

**Bizonyítás.** A felbontás egyértelműségének bizonyításához elég belátni, hogy bármely két hasonló mátrix Jordan-alakjának meghatározó adatai a hasonlóságra nézve invariánsak.

A Jordan-blokkok, és így a Jordan-láncok száma megegyezik a független sajátvektorok maximális számával – ez invariáns.

Az egyszerűség kedvéért először tegyük fel, hogy $\mathbf{A}$ minden sajátértéke azonos, jelölje $\lambda$. A továbbiak könnyebb megértésére lássunk egy konkrét példát. Legyen az $\mathbf{A}$ mátrix karakterisztikus polinomja $(\lambda - x)^{13}$, és tegyük fel, hogy Jordan-bázisa a következőképp néz ki:

$$\begin{aligned} \mathbf{0} &\xleftarrow{\mathbf{A}-\lambda I} \mathbf{x}_1^1 \xleftarrow{\mathbf{A}-\lambda I} \mathbf{x}_2^1 \xleftarrow{\mathbf{A}-\lambda I} \mathbf{x}_3^1 \xleftarrow{\mathbf{A}-\lambda I} \mathbf{x}_4^1 \\ \mathbf{0} &\xleftarrow{\mathbf{A}-\lambda I} \mathbf{x}_1^2 \xleftarrow{\mathbf{A}-\lambda I} \mathbf{x}_2^2 \xleftarrow{\mathbf{A}-\lambda I} \mathbf{x}_3^2 \xleftarrow{\mathbf{A}-\lambda I} \mathbf{x}_4^2 \\ \mathbf{0} &\xleftarrow{\mathbf{A}-\lambda I} \mathbf{x}_1^3 \xleftarrow{\mathbf{A}-\lambda I} \mathbf{x}_2^3 \xleftarrow{\mathbf{A}-\lambda I} \mathbf{x}_3^3 \\ \mathbf{0} &\xleftarrow{\mathbf{A}-\lambda I} \mathbf{x}_1^4 \\ \mathbf{0} &\xleftarrow{\mathbf{A}-\lambda I} \mathbf{x}_1^5 \end{aligned} \tag{11.3}$$

A leghosszabb lánc 4-elemű, ami $\mathbf{A} - \lambda I$ ismeretében úgy kapható meg, hogy 4 az a legkisebb $m$ kitevő, melyre $(\mathbf{A} - \lambda I)^m = \mathbf{O}$. Általában is igaz, a legnagyobb blokk mérete az a legkisebb $m$, melyre $(\mathbf{A} - \lambda I)^m = \mathbf{O}$, ugyanis ha a leghosszabb lánc hossza $m$, akkor $(\mathbf{A} - \lambda I)^m$ a Jordan-láncok minden vektorát a $\mathbf{0}$-vektorba viszi, míg az alacsonyabb kitevős hatványok a leghosszabb láncok utolsó elemeit nem. Egy mátrix hatványának zérus volta is invariáns, így hasonló mátrixokra a leghosszabb lánc hossza is azonos. (Itt felhasználtuk, hogy ha $\mathbf{A}$ és $\mathbf{B}$ hasonlóak, akkor $\mathbf{A} - \lambda I$ és $\mathbf{B} - \lambda I$ is.)

Legyen a $\lambda$ sajátértékhez tartozó $i$-hosszú Jordan-láncok száma $n_i$. A 11.3 diagramon $n_1 = 2$, $n_2 = 0$, $n_3 = 1$, $n_4 = 2$. Látható, hogy $(\mathbf{A} - \lambda I)$ hatványainak rangjából megmondható, hogy hány bázisvektor nem futott még a nullvektorba, innen pedig az $n_i$ értékek is kiszámolhatók. Esetünkben

$$n_4 = \operatorname{r}\!\left((\mathbf{A} - \lambda I)^3\right) = 2$$

$$n_3 + 2n_4 = \operatorname{r}\!\left((\mathbf{A} - \lambda I)^2\right) = 5$$

$$n_2 + 2n_3 + 3n_4 = \operatorname{r}\!\left(\mathbf{A} - \lambda I\right) = 8$$

$$n_1 + 2n_2 + 3n_3 + 4n_4 = \operatorname{r}\!\left((\mathbf{A} - \lambda I)^0\right) = n = 13,$$

és ez az egyenletrendszer egyértelműen megoldható. Általában

$$n_m = \operatorname{r}\!\left((\mathbf{A} - \lambda I)^{m-1}\right)$$

$$n_{m-1} + 2n_m = \operatorname{r}\!\left((\mathbf{A} - \lambda I)^{m-2}\right)$$

$$n_{m-2} + 2n_{m-1} + 3n_m = \operatorname{r}\!\left((\mathbf{A} - \lambda I)^{m-3}\right)$$

$$\vdots$$

$$n_2 + 2n_3 + \dots + (m-1)n_m = \operatorname{r}(\mathbf{A} - \lambda I)$$

$$n_1 + 2n_2 + \dots + (m-1)n_{m-1} + mn_m = n.$$

Ennek az egyenletrendszernek a jobb oldalán a hasonlóságra nézve invariáns értékek vannak, az együtthatómátrix háromszög alakú, így egyszerű visszahelyettesítéssel megoldható. Mivel a mellékátlóban egyesek vannak, a megoldás egyértelmű, és egész szám.

Ha a mátrixnak több különböző sajátértéke van, akkor sajátértékenként egy ilyen egyenletrendszert kapunk. Legyen $\lambda$ az egyik sajátérték, algebrai multiplicitását jelölje $a_\lambda$. Ekkor $\mathbf{A} - \lambda I$ hatványainak rangja addig csökkenhet, míg el nem éri az $n - a$ értéket. Ha ugyanis $\mathbf{A}$ hasonló a $\mathbf{J}$ Jordan-mátrixhoz, akkor $\mathbf{A} - \lambda I \sim \mathbf{J} - \lambda I$, és az utóbbi mátrix $\lambda$-hoz tartozó blokkját kivéve a főátlóban nullától különböző számok szerepelnek, így ezek hatványai nem válnak zérussá. Jelölje tehát $m$ azt a legkisebb kitevőt, melyre

$$\operatorname{r}((\mathbf{A} - \lambda \mathbf{I})^m) = n - a_\lambda, \;\text{ azaz }\; \operatorname{r}((\mathbf{A} - \lambda \mathbf{I})^m) - n + a_\lambda = 0.$$

Ez másként fogalmazva azt jelenti, hogy $m$ az a legkisebb kitevő, melyre $(\mathbf{A} - \lambda \mathbf{I})^m$ a $\lambda$-hoz tartozó általánosított sajátalteret a zérusvektorba viszi.

Ha nem tudjuk, hogy mennyi a $\lambda$ algebrai multiplicitása, akkor az $\mathbf{A} - \lambda \mathbf{I}$ hatványainak rangjából azt is megkapjuk, ugyanis $m$ az a legkisebb kitevő, melyre

$$\operatorname{r}((\mathbf{A} - \lambda \mathbf{I})^m) = \operatorname{r}\!\left((\mathbf{A} - \lambda \mathbf{I})^{m+1}\right),$$

így $a_\lambda = n - \operatorname{r}((\mathbf{A} - \lambda \mathbf{I})^m)$. Így az összes esetre általánosan érvényes egyenletrendszer a következő alakú:

$$n_m = \operatorname{r}\!\left((\mathbf{A} - \lambda \mathbf{I})^{m-1}\right) - n + a_\lambda$$

$$n_{m-1} + 2n_m = \operatorname{r}\!\left((\mathbf{A} - \lambda \mathbf{I})^{m-2}\right) - n + a_\lambda$$

$$n_{m-2} + 2n_{m-1} + 3n_m = \operatorname{r}\!\left((\mathbf{A} - \lambda \mathbf{I})^{m-3}\right) - n + a_\lambda$$

$$\vdots$$

$$n_2 + 2n_3 + \dots + (m-1)n_m = \operatorname{r}(\mathbf{A} - \lambda \mathbf{I}) - n + a_\lambda$$

$$n_1 + 2n_2 + \dots + (m-1)n_{m-1} + mn_m = a_\lambda$$

Ennek egyértelmű megoldhatósága bizonyítja állításunkat. $\square$

**11.10. példa (Jordan-blokkok mérete).** *Egy $10 \times 10$-es $\mathbf{A}$ mátrixnak $\lambda$ 10-szeres algebrai multiplicitású sajátértéke. $\mathbf{A} - \lambda\mathbf{I}$ hatványainak rangja rendre 5, 2, 1, 0. Írjuk fel a Jordan-normálalakját!*

**Megoldás.** A blokkok száma, ami megegyezik a Jordan-láncok számával 5, mivel $n - \operatorname{r}(\mathbf{A} - \lambda\mathbf{I}) = 10 - 5 = 5$. A leghosszabb lánc hossza 4, mivel $\mathbf{A} - \lambda\mathbf{I}$ legkisebb zérusmátrixot adó hatványa a 4-dik. Az egyenletrendszer és megoldása, valamint a $\mathbf{J}$ Jordan-mátrix:

$$\begin{aligned} n_4 &= 1 \\ n_3 + 2n_4 &= 2 \\ n_2 + 2n_3 + 3n_4 &= 5 \\ n_1 + 2n_2 + 3n_3 + 4n_4 &= 10 \end{aligned} \quad\Rightarrow\quad \begin{aligned} n_4 &= 1 \\ n_3 &= 0 \\ n_2 &= 2 \\ n_1 &= 2 \end{aligned}$$

$$\mathbf{J} = \left[\begin{array}{cccc|cc|cc|c|c} \lambda & 1 & & & & & & & & \\ & \lambda & 1 & & & & & & & \\ & & \lambda & 1 & & & & & & \\ & & & \lambda & & & & & & \\ \hline & & & & \lambda & 1 & & & & \\ & & & & & \lambda & & & & \\ \hline & & & & & & \lambda & 1 & & \\ & & & & & & & \lambda & & \\ \hline & & & & & & & & \lambda & \\ \hline & & & & & & & & & \lambda \end{array}\right]$$

$\square$

**11.11. példa (Jordan-blokkok mérete).** *Egy $14 \times 14$-es $\mathbf{A}$ mátrixról tudjuk, hogy*

> $\mathbf{A} - 3\mathbf{I}$ *hatványainak rangja rendre:* 12, 11, 10, 9, 9;
>
> $\mathbf{A} - 2\mathbf{I}$ *hatványainak rangja rendre:* 12, 10, 9, 9;
>
> $\mathbf{A} - \mathbf{I}$ *hatványainak rangja rendre:* 11, 10, 10.

*Írjuk fel az $\mathbf{A}$ karakterisztikus polinomját és Jordan-normálalakját!*

**Megoldás.** Most $n = 14$, és a $\lambda = 3, 2, 1$ számok sajátértékek, mert $\mathbf{A} - \lambda\mathbf{I}$ rangja kisebb 14-nél. A $\lambda = 3$ és a $\lambda = 2$ algebrai multiplicitása $14 - 9 = 5$, mert 9 az első rang, mely ismétlődik. A $\lambda = 1$ multiplicitása hasonlóan számolva $14 - 10 = 4$. Így $\mathbf{A}$-nak nincs más sajátértéke, mert e sajátértékek multiplicitásainak összege 14. Így a karakterisztikus polinom $(3 - \lambda)^5(2 - \lambda)^5(1 - \lambda)^4$.

$\lambda = 3$ esetén a blokkok (Jordan-láncok) száma $n - \operatorname{r}(\mathbf{A} - 3\mathbf{I}) = 14 - 12 = 2$. A leghosszabb lánc hossza $m = 4$, ugyanis ez a legkisebb $m$, melyre $\operatorname{r}((\mathbf{A} - 3\mathbf{I})^m) = 14 - 5 = 9$. Az egyenletrendszer és megoldása

$$\begin{aligned} n_4 &= 10 - 14 + 5 = 1 \\ n_3 + 2n_4 &= 11 - 14 + 5 = 2 \\ n_2 + 2n_3 + 3n_4 &= 12 - 14 + 5 = 3 \\ n_1 + 2n_2 + 3n_3 + 4n_4 &= 5 \end{aligned} \quad\Rightarrow\quad \begin{aligned} n_4 &= 1 \\ n_3 &= 0 \\ n_2 &= 0 \\ n_1 &= 1 \end{aligned}$$

Hasonlóan járunk el a többi sajátérték esetén is. $\lambda = 2$ esetén $m = 3$, így

$$\begin{aligned} n_3 &= 10 - 14 + 5 = 1 \\ n_2 + 2n_3 &= 12 - 14 + 5 = 3 \\ n_1 + 2n_2 + 3n_3 &= 5 \end{aligned} \quad\Rightarrow\quad \begin{aligned} n_3 &= 1 \\ n_2 &= 1 \\ n_1 &= 0 \end{aligned}$$

$\lambda = 1$ esetén $m = 2$, tehát az egyenletrendszer és megoldása

$$\begin{aligned} n_2 &= 11 - 14 + 4 = 1 \\ n_1 + 2n_2 &= 4 \end{aligned} \quad\Rightarrow\quad \begin{aligned} n_2 &= 1 \\ n_1 &= 2 \end{aligned}$$

Összefoglalva:

$$\mathbf{J} = \left[\begin{array}{cccc|c|cc|c|cc|c|c} 3 & 1 & & & & & & & & & & \\ & 3 & 1 & & & & & & & & & \\ & & 3 & 1 & & & & & & & & \\ & & & 3 & & & & & & & & \\ \hline & & & & 3 & & & & & & & \\ \hline & & & & & 2 & 1 & & & & & \\ & & & & & & 2 & & & & & \\ \hline & & & & & & & 2 & & & & \\ \hline & & & & & & & & 2 & 1 & & \\ & & & & & & & & & 2 & & \\ \hline & & & & & & & & & & 1 & 1 \\ & & & & & & & & & & & 1 \\ \end{array}\right]$$

az $\mathbf{A}$ mátrix Jordan-normálalakja. $\square$

> *Minimálpolinom*

A Jordan normálalakból a mátrix sok tulajdonsága leolvasható, így az is, hogy mely polinomokba helyettesítve kapunk zérusmátrixot.

**11.12. definíció (Minimálpolinom).** *Legyen $\mathbf{A}$ egy tetszőleges $\mathbb{F}$ test fölötti négyzetes mátrix.* Minimálpolinomnak *nevezünk egy olyan minimális fokszámú $\mu_\mathbf{A}$ főpolinomot (azaz 1 főegyütthatójú polinomot), melyre $\mu_\mathbf{A}(\mathbf{A}) = \mathbf{O}$. Hasonlóan definiálható egy $A : \mathcal{V} \to \mathcal{V}$ lineáris transzformáció minimálpolinomja, ahol $\mathcal{V}$ egy $\mathbb{F}$ test fölötti véges dimenziós vektortér.*

> *Azt mondjuk, hogy a $p$ polinom az $\mathbf{A}$ mátrix ($A$ lineáris transzformáció) annullátora, vagy hogy annullálja azt, ha $p(\mathbf{A}) = \mathbf{O}$ ($p(A) = 0$). A minimálpolinom tehát egy legkisebb fokú annullátor főpolinom.*

> *A nullpolinom nem lehet minimálpolinom, mert nem 1 a főegyütthatója.*

> *Az $\mathbf{I}$ mátrixnak, illetve az identikus transzformációnak a $\mu(x) = x - 1$ polinom minimálpolinomja, mert $\mu(\mathbf{I}) = \mathbf{I} - \mathbf{I} = \mathbf{O}$, és ennél alacsonyabb fokú főpolinom már csak egy van, az 1 polinom, ami nem annullálja az $\mathbf{I}$-t.*

> *Ha $\mathbf{A}$ és $\mathbf{B}$ hasonló mátrixok, azaz valamely $\mathbf{C}$ mátrixra $\mathbf{B} = \mathbf{C}^{-1}\mathbf{A}\mathbf{C}$, akkor minimálpolinomjaik egyenlők, ugyanis $p(\mathbf{B}) = \mathbf{C}^{-1}p(\mathbf{A})\mathbf{C}$ minden $p$ polinomra fönnáll, így minden $p$ polinomra $p(\mathbf{A})$ és $p(\mathbf{B})$ egyszerre $\mathbf{O}$, illetve egyszerre nem, tehát minimálpolinomjaik is azonosak.*

> *Az előző megjegyzés következménye, hogy a minimálpolinom invariáns a mátrixok hasonlóságára, így egy lineáris transzformáció minimálpolinomja megegyezik bármely bázisban fölírt mátrixának minimálpolinomjával.*

**11.13. állítás (A minimálpolinom tulajdonságai).** *Legyen $\mathbf{A}$ egy tetszőleges test fölötti négyzetes mátrix. Ekkor*

*a) $\mathbf{A}$-nak pontosan egy $\mu_\mathbf{A}$ minimálpolinomja van.*

*b) Bármely $p$ polinomra $p(\mathbf{A}) = \mathbf{O}$ pontosan akkor áll fenn, ha $p$ maradék nélkül osztható a $\mu_\mathbf{A}$ polinommal.*

*c) A $\chi_\mathbf{A}$ karakterisztikus polinom osztható a $\mu_\mathbf{A}$ minimálpolinommal.*

*d) $\mathbf{A}$ minden sajátértéke gyöke $\mu_\mathbf{A}$-nak.*

**Bizonyítás.** *a)* A Cayley–Hamilton-tétel szerint minden $\mathbf{A}$ mátrixra $\chi_\mathbf{A}(\mathbf{A}) = \mathbf{O}$. Eszerint van legalább egy olyan polinom, mely annullálja $\mathbf{A}$-t. Az ilyen polinomokat elosztva főegyütthatójukkal csupa főpolinomot kapunk. Megmutatjuk, hogy csak egyetlen minimális fokszámú van köztük. Indirekt módon tegyük fel, hogy $p$ és $q$ két különböző minimális fokszámú főpolinom, melyekre $p(\mathbf{A}) = q(\mathbf{A}) = \mathbf{O}$. Mivel mindkettő főegyütthatója 1, ezért különbségük kisbb fokú, másrészt $(p - q)(\mathbf{A}) = p(\mathbf{A}) - q(\mathbf{A}) = \mathbf{O}$, ami ellentmond annak, hogy $p$ és $q$ minimális fokszámú annullátorok.

*b)* Ha $p$ osztható $\mu_\mathbf{A}$-val, azaz $p = \mu_\mathbf{A}q$ valamilyen $q$ polinomra, akkor $p(\mathbf{A}) = \mu_\mathbf{A}(\mathbf{A})q(\mathbf{A}) = \mathbf{O}$.

Fordítva: legyen $p$ egy tetszőleges polinom, melyre $p(\mathbf{A}) = \mathbf{O}$. Megmutatjuk, hogy $\mu_\mathbf{A}$ osztója $p$-nek. Maradékosan osztva $p$-t $\mu_\mathbf{A}$-val kapjuk, hogy $p = \mu_\mathbf{A}q + r$, ahol $r$ foka kisebb, mint $\mu_\mathbf{A}$ foka, másrészt $\mathbf{O} = p(\mathbf{A}) = \mu_\mathbf{A}(\mathbf{A})q(\mathbf{A}) + r(\mathbf{A})$. Innen $r(\mathbf{A}) = \mathbf{O}$, ami csak úgy lehet, ha $r = 0$, hisz $\mu_\mathbf{A}$-nál kisebb fokú polinom nem lehet annullátor, kivéve a zéruspolinomot.

*c)* Mivel a Cayley–Hamilton-tétel szerint $\chi_\mathbf{A}$ annullátor, ezért az előző pont szerint osztható a minimálpolinommal.

*d)* Ha $(\lambda, \mathbf{x})$ sajátpár, akkor bármely pozitív egészre $\mathbf{A}^k\mathbf{x} = \lambda^k\mathbf{x}$, így bármely $p$ polinomra $p(\mathbf{A})\mathbf{x} = p(\lambda)\mathbf{x}$. Így $\mu_\mathbf{A}(\mathbf{A})\mathbf{x} = \mu_\mathbf{A}(\lambda)\mathbf{x}$. De $\mu_\mathbf{A}(\mathbf{A}) = \mathbf{O}$, és $\mathbf{x} \neq \mathbf{0}$, ezért $\mu_\mathbf{A}(\lambda) = 0$. $\square$

> *Ha $\chi_\mathbf{A}(x) = \prod_i (x - \lambda_i)^{a_i}$, akkor a c)-beli oszthatóság miatt $\mu_\mathbf{A}(x) = \prod_i (x - \lambda_i)^{m_i}$, ahol $1 \leqslant m_i \leqslant a_i$, és ahol $a_i$ jelöli $\lambda_i$ algebrai multiplicitását.*

> *Legyen $\mathbf{A}$ nilpotens, ahol $\mathbf{A}^k = \mathbf{O}$, de $\mathbf{A}^{k-1} \neq \mathbf{O}$. Ekkor $\mu_\mathbf{A}(x) = x^k$, ugyanis $x^k$ annullátor, így a minimálpolinom csak valamely osztója lehet. Az osztói viszont mind $x^m$ alakúak, ahol $m \leqslant k$, de azok $m < k$ esetén nem annullátorok.*

Az $\mathbf{A}$ Jordan-alakja segítségével jól jellemezhető az összes olyan $p$ polinom, melyre $p(\mathbf{A}) = \mathbf{O}$.

**11.14. tétel (Jordan normálalak és minimálpolinom).** *Legyen az $\mathbf{A} \in \mathbb{C}^{n\times n}$ mátrix spektruma $\sigma(\mathbf{A}) = \{\lambda_1, \lambda_2, \dots, \lambda_s\}$.*

*a) $\mu_\mathbf{A}(x) = (x - \lambda_1)^{m_1}(x - \lambda_2)^{m_2}\dots(x - \lambda_s)^{m_s}$, ahol $m_k$ a $\lambda_k$-hoz tartozó legnagyobb Jordan-blokk mérete.*

*b) $\mu_\mathbf{A} = \chi_\mathbf{A}$ pontosann akkor áll fenn, ha $\mathbf{A}$ minden sajátértékének 1 a geometriai multiplicitása.*

*c) $\mathbf{A}$ pontosan akkor diagonalizálható, ha a minimálpolinom lineáris tényezők szorzata, azaz $\mu_\mathbf{A}(x) = (x - \lambda_1)(x - \lambda_2)\dots(x - \lambda_s)$.*

**Bizonyítás.** *a)* Mivel hasonló mátrixok minimálpolinomja azonos, elég csak a Jordan normálalakú mátrixokra szorítkozni. Ha $a_i$ jelöli a $\lambda_i$ algebrai multiplicitását, akkor karakterisztikus polinomja

$$\chi_\mathbf{A}(x) = \prod_{i=1}^{s} (x - \lambda_i)^{a_i}.$$

A minimálpolinom ennek osztója, másrészt minden $\lambda_i$ sajátérték esetén $x - \lambda_i$ osztója a minimálpolinomnak, tehát a minimálpolinom

$$\prod_{i=1}^{s} (x - \lambda_i)^{k_i}$$

alakú, ahol $1 \leqslant k_i \leqslant a_i$. Világos, hogy

$$\mu_\mathbf{A}(x) = \prod_{i=1}^{s} (x - \lambda_i)^{m_i},$$

ugyanis egyrészt annullálja $\mathbf{A}$-t, hisz $(\mathbf{A} - \lambda_i\mathbf{I})^{m_i}$ annullálja az összes $\lambda_i$-hez tartozó Jordan-blokkot, így az $(\mathbf{A} - \lambda_i\mathbf{I})^{m_i}$ alakú mátrixok szorzata a zérusmátrix. Másrészt ha valamelyik $x - \lambda_i$ tényező $m_i$-nél alacsonyabb hatványon szerepelne, akkor nem annullálná a $\lambda_i$-hez tartozó legnagyobb Jordan-blokkot, így e blokk nem lenne zérus $\mu(\mathbf{A})$-ban sem, mivel $\prod_{j \neq i}(\mathbf{A} - \lambda_j\mathbf{I})$ főátlójában nemnulla értékek állnak (ellenőrizzük).

*b)* $\mu_\mathbf{A} = \chi_\mathbf{A}$ pontosan akkor igaz, ha $\mathbf{A}$ minden sajátértékéhez egyetlen Jordan-blokk tartozik, azaz ha minden geometriai multiplicitás 1.

*c)* $\mathbf{A}$ pontosan akkor diagonalizálható, ha minden Jordan-blokkja $1 \times 1$-es, azaz a legnagyonn Jordan-blokkok $1 \times 1$-esek. $\square$

> *Kísérő mátrix*

Minden polinomhoz találunk olyan mátrixot, melynek az a polinom a karakterisztikus és egyúttal minimálpolinomja.

**11.15. állítás.** *Bármely $\chi(x) = x^n + a_1 x^{n-1} + \dots + a_{n-1}x + a_n$ polinomhoz van olyan mátrix, melynek $\chi$ a karakterisztikus polinomja. Ilyen a*

$$\mathbf{C} = \begin{bmatrix} 0 & 0 & \dots & 0 & -a_n \\ 1 & 0 & \dots & 0 & -a_{n-1} \\ 0 & 1 & \dots & 0 & -a_{n-2} \\ \vdots & \vdots & \ddots & \vdots & \vdots \\ 0 & 0 & \dots & 1 & -a_1 \end{bmatrix}$$

*mátrix, amit a polinom* kísérő mátrixának *nevezünk.*

**Bizonyítás.** A karakterisztikus polinomot adó determinánsban alulról minden sor $x$-szeresét a fölötte lévőhöz adva kapjuk, hogy

$$\chi_\mathbf{C}(x) = \begin{vmatrix} -x & 0 & \dots & 0 & -a_n \\ 1 & -x & \dots & 0 & -a_{n-1} \\ 0 & 1 & \dots & 0 & -a_{n-2} \\ \vdots & \vdots & \ddots & \vdots & \vdots \\ 0 & 0 & \dots & 1 & -a_1 - x \end{vmatrix} = \begin{vmatrix} 0 & 0 & \dots & 0 & \chi(x) \\ 1 & 0 & \dots & 0 & ? \\ 0 & 1 & \dots & 0 & ? \\ \vdots & \vdots & \ddots & \vdots & \vdots \\ 0 & 0 & \dots & 1 & -a_1 - x \end{vmatrix}$$

Így $\chi_\mathbf{C}(x)$ – előjelszorzót nem számítva – megegyezik a megadott $\chi(x)$ polinommal. $\square$

**11.16. állítás.** *A kísérő mátrix minimálpolinomja megegyezik karakterisztikus polinomjával (egy $-1$ szorzó erejéig).*

**Bizonyítás.** Tetszőleges, de nem csupa zérus $c_j$ konstansokra

$$\left(\sum_{j=0}^{n-1} c_j \mathbf{C}^j\right) \mathbf{e}_1 = \begin{bmatrix} c_0 \\ c_1 \\ \vdots \\ c_{n-1} \end{bmatrix} \neq \mathbf{0},$$

azaz nincs $n$-nél alacsonyabb fokú annullátor, így $\mu(\mathbf{C}) = (-1)^n \chi(\mathbf{C})$. $\square$

> *A Jordan-bázis konstrukciója*

A Jordan-tétel bizonyításában megkonstruált bázist kis mátrixokra kézzel is ki lehet számolni. Az itt ismertetendő egyszerű naív algoritmus nem számítógépes megvalósításra való, ennél hatékonyabb is létezik.

Példaként tekintsünk egy 19-edrendű $\mathbf{A}$ mátrixot, melynek $\lambda$ 19-szeres sajátértéke, és amelyre a Jordan-láncok hossza rendre $n_5 = 2$, $n_4 = 1$, $n_3 = 0$, $n_2 = 2$, $n_1 = 1$. Ennek alapján az $\mathbf{A} - \lambda\mathbf{I}$ hatása a Jordan-bázison meghatározható, amit a 11.1 ábra szemlélt. Jelölje $(\mathbf{A} - \lambda\mathbf{I})^k$ nullterét $\mathcal{N}_k$. $\mathcal{N}_5$ a $\lambda$-hoz tartozó teljes általánosított sajátaltér – e példában $\mathbb{C}^{19}$. A nulltér meghatározása egy homogén lineáris egyenletrendszer megoldását jelenti, ami nem okoz nehézséget, de az már nem teljesen mindegy, hogy a bázist hogy választjuk benne.

Az algoritmus – melyet a 11.2 ábra is szemléltet – lényege, hogy a nagyobb indexű terek felől indulva minden lépésben kiterjesztjük $\mathcal{N}_{i-1}$ bázisát $\mathcal{N}_i$ bázisává, majd a kiterjesztésnek vesszük az $\mathbf{A} - \lambda\mathbf{I}$ általi képét, ami már $\mathcal{N}_{i-1}$-be esik, és ezt $\mathcal{N}_{i-2}$ bázisához adva azt kiterjesztjük $\mathcal{N}_{i-1}$ új bázisává. ... A konvenció az lesz, hogy a vektortér egy generátorának vektorait egyetlen mátrixba tesszük, és azt azonos, de félkövér betűvel jelöljük, tehát pl. $\mathcal{N}$ generátormátrixát $\mathbf{N}$ jelöli. Részletezve:

- Meghatározzuk $\mathcal{N}_i$ egy tetszőleges $\mathbf{N}_i$ bázismátrixát ($i = 1, 2, 3, 4, 5$).

*11.1. ábra. Az $\mathbf{A} - \lambda\mathbf{I}$ hatványainak nullterei, és hatása az $\mathbf{A}$ mátrix Jordan-bázisán.*

- Kiegészítjük $\mathbf{N}_4$-et $\mathcal{N}_5$ bázisává, az új báziselemek mátrixát jelölje $\mathbf{U}_5$, tehát $\mathcal{N}_5$ bázisa most $[\mathbf{N}_4 \mid \mathbf{U}_5]$.

- Legyen $\mathbf{K}_4$ az új elemek $\mathbf{A} - \lambda\mathbf{I}$ általi képe, azaz $\mathbf{K}_4 = (\mathbf{A} - \lambda\mathbf{I})\mathbf{U}_5$. Mivel $\mathcal{K}_4 \subset \mathcal{N}_4$, de független az $\mathcal{N}_3$ altértől, ezért alkalmas arra, hogy bázisvektorai a Jordan-bázis $\mathcal{N}_4 \setminus \mathcal{N}_3$-ba eső elemei közé vegyük.

- Ha szükséges, egészítsük ki a $[\mathbf{N}_3 \mid \mathbf{K}_4]$-et $\mathcal{N}_4$ bázisává új elemek hozzávételével, így $\mathcal{N}_4$ bázisa most $[\mathbf{N}_3 \mid \mathbf{K}_4 \mid \mathbf{U}_4]$.

- Vegyük a $[\mathbf{K}_4 \mid \mathbf{U}_4]$ mátrix képét, azaz legyen $\mathbf{K}_3 = (\mathbf{A} - \lambda\mathbf{I})[\mathbf{K}_4 \mid \mathbf{U}_4]$, és ha szükséges, egészítsük ki $[\mathbf{N}_2 \mid \mathbf{K}_3]$-at $\mathcal{N}_3$ bázisává új elemek hozzávételével (azaz $\mathcal{N}_3$ bázisa most $[\mathbf{N}_2 \mid \mathbf{K}_3 \mid \mathbf{U}_3]$ – most $\mathcal{U}_3 = \varnothing$). Hasonlóan folytatjuk $\mathcal{N}_i$ indexét csökkentve: $\mathbf{K}_2 = (\mathbf{A} - \lambda\mathbf{I})[\mathbf{K}_3 \mid \mathbf{U}_3]$, új elemek hozzávételével előállítjuk $\mathcal{N}_2$ bázisát: $[\mathbf{N}_1 \mid \mathbf{K}_2 \mid \mathbf{U}_2]$.

- Végül legyen $\mathbf{K}_1 = (\mathbf{A} - \lambda\mathbf{I})[\mathbf{K}_2 \mid \mathbf{U}_2]$, amit $\mathbf{U}_1$-gyel kibővítünk $\mathcal{N}_1$ bázisává. A tér Jordan-bázisa a kép- és az új elemek egyesítése:

$$[\mathbf{K}_1 \mid \mathbf{K}_2 \mid \mathbf{K}_3 \mid \mathbf{K}_4 \mid \mathbf{U}_1 \mid \mathbf{U}_2 \mid \mathbf{U}_3 \mid \mathbf{U}_4 \mid \mathbf{U}_5].$$

- Végül a Jordan-bázis elemeit úgy rendezzük, hogy a láncokat egymás után, minden láncot a sajátvektorból indulva felsorolunk.

Ezek után lássunk egy konkrét példát, majd az algoritmust általánosan. A számolás kivitelezéséhez két megjegyzés:

> *Ha $\mathcal{U} \subset \mathcal{V}$ két altér, és $\{\mathbf{u}_1, \dots, \mathbf{u}_m\}$, illetve $\{\mathbf{v}_1, \dots, \mathbf{v}_n\}$ ($m < n$) a bázisuk, akkor elemi sorműveletekkel konstruálhatunk $\mathcal{V}$-nek egy olyan $\{\mathbf{w}_1, \dots, \mathbf{w}_n\}$ bázist, hogy $\{\mathbf{w}_1, \dots, \mathbf{w}_m\}$ az $\mathcal{U}$ bázisa legyen. Ehhez írjuk $\mathcal{U}$, majd $\mathcal{V}$ bázisvektorait egyetlen*
>
> $$[\mathbf{u}_1 \;\dots\; \mathbf{u}_m \mid \mathbf{v}_1 \;\dots\; \mathbf{v}_n]$$
>
> *mátrixba. Ennek lépcsős alakjában vezéregyesek lesznek az első $m$ oszlopban, és $n - m$ további oszlopban. A nekik megfelelő vektorok az eredeti bázisokban (tehát $\mathcal{V}$ összes vektora és $\mathcal{U}$-nak $n - m$ vektora) adják az új bázist.*

*11.2. ábra. A Jordan-bázist megkonstruáló algoritmus*

> ▶ Emlékeztetünk rá, hogy ha egy mátrix redukált lépcsős alakja $[\mathbf{I}\vert\mathbf{S}]$ alakú, akkor $\left[\begin{smallmatrix}-\mathbf{S}\\\mathbf{I}\end{smallmatrix}\right]$ vagy $\left[\begin{smallmatrix}\mathbf{S}\\-\mathbf{I}\end{smallmatrix}\right]$ oszlopvektorai a mátrix nulltere bázisát adják. Vigyázzunk, ha $\mathbf{I}$ nem az első oszlopokban van, akkor $\left[\begin{smallmatrix}-\mathbf{S}\\\mathbf{I}\end{smallmatrix}\right]$ sorait megfelelően permutálni kell.

**11.17. példa (Jordan-bázis előállítása).** *Határozzuk meg az*

$$\mathbf{A} = \begin{bmatrix} 0 & 1 & -2 & 1 & -1 \\ 3 & -3 & 6 & -2 & 4 \\ 4 & -5 & 9 & -3 & 5 \\ 4 & -5 & 8 & -2 & 5 \\ -1 & 1 & -1 & 0 & 0 \end{bmatrix}$$

*mátrix Jordan-normálalakját és Jordan-bázisát!*

**Megoldás.** A karakterisztikus polinom

$$\det(\mathbf{A} - \lambda\mathbf{I}) = -\lambda^5 + 4\lambda^4 - 6\lambda^3 + 4\lambda^2 - \lambda = -\lambda(1-\lambda)^4.$$

A 0-hoz tartozó sajátvektor a redukált lépcsős alakból kiszámítva:

$$\begin{bmatrix} 1 & 0 & 0 & 0 & -1 \\ 0 & 1 & 0 & 0 & 3 \\ 0 & 0 & 1 & 0 & 4 \\ 0 & 0 & 0 & 1 & 4 \\ 0 & 0 & 0 & 0 & 0 \end{bmatrix} \qquad \begin{bmatrix} 1 \\ -3 \\ -4 \\ -4 \\ 1 \end{bmatrix}$$

Mivel itt az algebrai (és így a geometriai) multiplicitás 1, ez a Jordan-lánc egyelemű. A $\lambda = 1$ esetén a geometriai multiplicitás 2, ugyanis $\mathbf{A} - \mathbf{I}$ redukált lépcsős alakja és abból a nulltér bázisa:

$$\operatorname{rref}(\mathbf{A} - \mathbf{I}) = \begin{bmatrix} 1 & 0 & 0 & 0 & 0 \\ 0 & 1 & 0 & -1 & -1 \\ 0 & 0 & 1 & -1 & 0 \\ 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 \end{bmatrix} \qquad \mathbf{N}_1 = \begin{bmatrix} 0 & 0 \\ 1 & 1 \\ 1 & 0 \\ 1 & 0 \\ 0 & 1 \end{bmatrix}$$

$(\mathbf{A} - 1 \cdot \mathbf{I})^2$ nullterét gyorsabb úgy számolni, ha nem $\mathbf{A} - \mathbf{I}$-t szorozzuk önmagával, hanem lépcsős alakját jobbról, és annak a szorzatnak vesszük a lépcsős alakját. A lépcsős alak kiszámolása ugyanis csak elemi mátrixokkal való balról szorzást jelent, így

$$(\operatorname{rref}(\mathbf{A} - \mathbf{I}))(\mathbf{A} - \mathbf{I}) = \mathbf{E}(\mathbf{A} - \mathbf{I})(\mathbf{A} - \mathbf{I}) = \mathbf{E}(\mathbf{A} - \mathbf{I})^2$$

vagyis a szorzat az $(\mathbf{A} - \mathbf{I})^2$-en végrehajtott elemi sorműveletek eredménye. Sokkal kevesebb viszont a számolnivaló, mivel a 0-sorok elhagyhatók:

$$\left\{ \begin{array}{c} (\operatorname{rref}(\mathbf{A} - \mathbf{I}))\,(\mathbf{A} - \mathbf{I}) \\ \text{a 0-sorok nélkül} \end{array} \right\} = \begin{bmatrix} -1 & 1 & -2 & 1 & -1 \\ 0 & 0 & -1 & 1 & 0 \end{bmatrix} \Rightarrow \begin{bmatrix} 1 & -1 & 0 & 1 & 1 \\ 0 & 0 & 1 & -1 & 0 \end{bmatrix}$$

ahonnan a bázis vektorai:

$$\mathbf{N}_2 = \begin{bmatrix} 1 & -1 & -1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

Hasonlóan határozzuk meg $(\mathbf{A} - \mathbf{I})^3$ bázisát!

$$\begin{bmatrix} 1 & -1 & 0 & 1 & 1 \\ 0 & 0 & 1 & -1 & 0 \end{bmatrix} (\mathbf{A} - \mathbf{I}) = \begin{bmatrix} 1 & -1 & 1 & 0 & 1 \\ 0 & 0 & 0 & 0 & 0 \end{bmatrix}$$

ami már lépcsős alakú, és ahonnan a bázismátrix

$$\mathbf{N}_3 = \begin{bmatrix} 1 & -1 & 0 & -1 \\ 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$$

Ezután határozzuk meg $\mathcal{U}_3$ vektorait, vagyis azokat, amelyek $\mathcal{N}_2$ bázisát ($\mathbf{N}_2$-t) $\mathcal{N}_3$ bázisává egészítik ki. Ehhez az $[\mathbf{N}_2\vert\mathbf{N}_3]$ mátrixot kell redukált lépcsős alakra hozni, $\mathcal{U}_3$ elemei a $\mathbf{N}_3$ azon oszlopai lesznek, melyek függetlenek $\mathbf{N}_2$-től, azaz melyek redukált lépcsős alakjában vezéregyes van.

$$[\mathbf{N}_2\vert\mathbf{N}_3] = \left[\begin{array}{ccc|cccc} 1 & -1 & -1 & 1 & -1 & 0 & -1 \\ 1 & 0 & 0 & 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 & 1 & 0 & 0 \\ 0 & 1 & 0 & 0 & 0 & 1 & 0 \\ 0 & 0 & 1 & 0 & 0 & 0 & 1 \end{array}\right] \Rightarrow \left[\begin{array}{ccc|cccc} 1 & 0 & 0 & 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 & 0 & 1 & 0 \\ 0 & 0 & 1 & 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0 & 1 & -1 & 0 \\ 0 & 0 & 0 & 0 & 0 & 0 & 0 \end{array}\right]$$

Tehát $\mathbf{U}_3 = [-1\ 0\ 1\ 0\ 0]^{\mathsf{T}}$, és ebből $\mathbf{K}_2 = (\mathbf{A} - \mathbf{I})\mathbf{U}_3 = [-1\ 3\ 4\ 4\ 0]^{\mathsf{T}}$. Mivel $\mathbf{K}_2$ egyetlen vektorból áll, és $\mathcal{N}_3$ és $\mathcal{N}_2$ dimenzióinak különbsége is 1, ezért itt nem kell számolnunk semmit, $\mathcal{U}_2 = \{\mathbf{0}\}$, azaz $\mathbf{U}_2$ üres. $\mathbf{K}_1 = (\mathbf{A} - \mathbf{I})\mathbf{K}_2 = [0\ 1\ 1\ 1\ 0]^{\mathsf{T}}$, és mivel e vektor benn van $\mathcal{N}_1$ bázisában, $\mathbf{U}_1 = [0\ 1\ 0\ 0\ 1]^{\mathsf{T}}$ teret a másik bázisvektor generálja. A Jordan-normálalak felírásához a Jordan-láncok vektorait egymás után fel kell sorolni, a belőlük képzett $\mathbf{P}$ mátrixszal lesz $\mathbf{J} = \mathbf{P}^{-1}\mathbf{A}\mathbf{P}$. E két mátrix

$$\mathbf{P} = \left[\begin{array}{c|ccc|c} 0 & 0 & -1 & -1 & 1 \\ 1 & 1 & 3 & 0 & -3 \\ 0 & 1 & 4 & 1 & -4 \\ 0 & 1 & 4 & 0 & -4 \\ 1 & 0 & 0 & 0 & 1 \end{array}\right] \qquad \mathbf{J} = \begin{bmatrix} 1 & 0 & 0 & 0 & 0 \\ 0 & 1 & 1 & 0 & 0 \\ 0 & 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 0 & 0 \end{bmatrix} \qquad \square$$

Az algoritmus általánosan:

- Input: $\mathbf{A}$, $\chi(x)$ karakterisztikus polinom lineáris tényezőkre bontva,
- Minden $\lambda$ sajátértékre
  - Határozzuk meg a leghosszabb lánc $m$ hosszát, és $(\mathbf{A} - \lambda\mathbf{I})^i$ nullterét ($\mathcal{N}_i$, $i = 1, 2, \ldots, m$). Legyen $\mathcal{U}_{m+1} = \mathcal{K}_{m+1} = \mathcal{N}_0 = \{\mathbf{0}\}$, azaz e terek bázisa az üreshalmaz.
  - Minden $i$-re $m$-től 1-ig haladva:
    * Legyen $\mathbf{K}_i = (\mathbf{A} - \lambda\mathbf{I})[\mathbf{K}_{i+1}\vert\mathbf{U}_{i+1}]$.
    * Határozzuk meg $\mathbf{U}_i$-t úgy, hogy $[\mathbf{N}_{i-1}\vert\mathbf{K}_i\vert\mathbf{U}_i]$ bázisa legyen $\mathcal{N}_i$-nek. Ehhez az $[\mathbf{N}_{i-1}\vert\mathbf{K}_i\vert\mathbf{N}_i]$ mátrix redukált lépcsős alakja alapján válasszuk a bázisoszlopokat $\mathbf{N}_i$-ből az $\mathbf{U}_i$-be.
- Tegyük a Jordan-láncok vektorait balról jobbra egymás mellé minden láncot a sajátvektorral kezdve, az így kapott $\mathbf{P}$ mátrixszal $\mathbf{J} = \mathbf{P}^{-1}\mathbf{A}\mathbf{P}$.

## Feladatok

**11.1. Invariáns altér bázisa** Az $\mathcal{U} \leqslant \mathcal{V}$ altér pontosan akkor invariáns altér az $L$ lineáris transzformációra nézve, ha $\mathcal{U}$ egy $\{\mathbf{u}_1, \mathbf{u}_2, \ldots, \mathbf{u}_k\}$ bázisának minden vektorára $L\mathbf{u}_i \in \mathcal{U}$ ($i = 1, \ldots, k$).

**11.2. Invariáns altér** Tekintsük az $L : \mathbf{x} \mapsto \mathbf{L}\mathbf{x}$ mátrixleképezést, ahol

$$\mathbf{L} = \begin{bmatrix} 1 & -1 & 0 & 1 \\ -1 & 0 & 0 & 1 \\ 0 & 0 & 2 & 1 \\ -1 & -2 & 0 & 3 \end{bmatrix}$$

és legyen $\mathbf{u} = (1, -1, 2, -1)$, $\mathbf{v} = (1, 2, -1, 2)$. Mutassuk meg, hogy az $\mathcal{U} = \operatorname{span}(\mathbf{u}, \mathbf{v})$ altér invariáns altere az $L$ lineáris transzformációnak.

**11.3. Blokkdiagonális mátrixok** Ha $L : \mathcal{V} \to \mathcal{V}$ lineáris transzformáció, $\mathcal{U}_1, \ldots, \mathcal{U}_k$ a $\mathcal{V}$ vektortér $L$-invariáns alterei és $\mathcal{V} = \mathcal{U}_1 \oplus \ldots \oplus \mathcal{U}_k$, akkor $L$ mátrixa blokkdiagonális minden olyan bázisban, mely az alterek bázisainak egyesítése.

**11.4. Normálalakok** Soroljuk fel az összes lehetséges Jordan-normálalakját annak a mátrixnak, melyről csak annyit tudunk, hogy $(1 - \lambda)^4$ a karakterisztikus polinomja. Ne tekintsünk különbözőnek két normálalakot, ha azok csak a Jordan-blokkok sorrendjében különböznek egymástól!

**11.5. Jordan-láncok és Jordan-blokkok kapcsolata** Tudjuk, hogy az $\mathbf{A}$ mátrixnak két különböző sajátértéke van, $\lambda_1 = 2$ és $\lambda_2 = 4$, valamint hogy a $\mathbf{C}$ mátrix oszlopvektorai az $\mathbf{A}$ egy Jordan-bázisát alkotják, ahol

$$\mathbf{A} = \begin{bmatrix} 2 & 0 & 1 & -1 & 0 & 1 & -1 \\ 0 & 2 & 1 & -1 & 0 & 1 & -1 \\ 2 & -2 & 2 & 2 & 0 & -1 & 1 \\ 1 & -1 & 0 & 3 & 1 & 1 & -1 \\ -1 & 1 & 0 & -1 & 5 & 1 & -1 \\ -1 & 1 & 0 & -1 & 1 & 4 & 0 \\ 0 & 0 & 0 & 0 & 0 & 0 & 4 \end{bmatrix}, \qquad \mathbf{C} = \begin{bmatrix} 1 & 1 & 0 & 0 & 0 & 0 & 0 \\ 1 & 1 & 1 & 0 & 0 & 0 & 0 \\ 0 & 1 & 1 & 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 1 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 & 1 & 1 & 0 \\ 0 & 0 & 0 & 0 & 1 & 1 & 1 \\ 0 & 0 & 0 & 0 & 0 & 1 & 1 \end{bmatrix}.$$

Rajzoljuk fel a Jordan-láncok diagrammját, és határozzuk meg a $\mathbf{J} = \mathbf{C}^{-1}\mathbf{A}\mathbf{C}$ mátrixot a $\mathbf{C}^{-1}$ kiszámítása nélkül!

## Mátrixfüggvények

*A Jordan-normálalak segítségével értelmet adhatunk mátrixok függvényeinek. Ez fontos szerepet kap például a lineáris differenciálegyenletek elméletében.*

### Diagonalizálható mátrixok függvényei

Ha egy folyamat egy $\mathbf{x}_k$ állapotát a következővel egy lineáris $\mathbf{x}_{k+1} = \mathbf{A}\mathbf{x}_k$ kapcsolat fűzi össze, akkor az $\mathbf{x}_k = \mathbf{A}^k\mathbf{x}_0$ összefüggés miatt a folyamatot az $\mathbf{A}$ mátrix hatványai jellemzik. Kérdés lehet például a mátrixhatványok aszimptotikus viselkedése, vagy a nagy kitevőjű hatványok gyors kiszámításának módja.

Diagonális mátrix hatványai könnyen számolhatók: csak a főátló elemeit kell hatványozni. Másrészt $(\mathbf{C}^{-1}\mathbf{M}\mathbf{C})^k = \mathbf{C}^{-1}\mathbf{M}^k\mathbf{C}$, ezért a diagonalizálható mátrixok is könnyen hatványozhatók.

**11.18. példa (Mátrixok hatványai).** *Tekintsük az alábbi két „majdnem egyenlő" mátrixot:*

$$\mathbf{A} = \begin{bmatrix} -0.3 & 1.8 \\ -0.6 & 1.8 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} -0.3 & 1.8 \\ -0.5 & 1.8 \end{bmatrix}$$

*Vizsgáljuk meg hatványaik határértékét, ha a kitevő tart a végtelenhez!*

**Megoldás.** Mindkét mátrixot diagonalizáljuk:

$$\boldsymbol{\Lambda}_1 = \mathbf{C}^{-1}\mathbf{A}\mathbf{C} = \begin{bmatrix} 0.6 & 0.0 \\ 0.0 & 0.9 \end{bmatrix}, \quad \text{ahol } \mathbf{C} = \begin{bmatrix} 2 & 3 \\ 1 & 2 \end{bmatrix}, \mathbf{C}^{-1} = \begin{bmatrix} 2 & -3 \\ -1 & 2 \end{bmatrix}.$$

valamint

$$\boldsymbol{\Lambda}_2 = \mathbf{D}^{-1}\mathbf{B}\mathbf{D} = \begin{bmatrix} 1.2 & 0.0 \\ 0.0 & 0.3 \end{bmatrix}, \quad \text{ahol } \mathbf{D} = \begin{bmatrix} 6 & 3 \\ 5 & 1 \end{bmatrix}, \mathbf{D}^{-1} = -\frac{1}{9}\begin{bmatrix} 1 & -3 \\ -5 & 6 \end{bmatrix}.$$

Így a $k$-adik hatvány könnyen számolható:

$$\mathbf{A}^k = \mathbf{C}\begin{bmatrix} 0.6 & 0.0 \\ 0.0 & 0.9 \end{bmatrix}^k \mathbf{C}^{-1} = \mathbf{C}\begin{bmatrix} 0.6^k & 0.0 \\ 0.0 & 0.9^k \end{bmatrix}\mathbf{C}^{-1}$$

Mivel mindkét sajátérték abszolút értéke kisebb 1-nél, ezért $\boldsymbol{\Lambda}_1^k \to \mathbf{O}$ és így $\mathbf{A}^k \to \mathbf{O}$, ha $k \to \infty$. A $\mathbf{B}$ mátrix esetén

$$\mathbf{B}^k = \mathbf{D}\begin{bmatrix} 1.2 & 0.0 \\ 0.0 & 0.3 \end{bmatrix}^k \mathbf{D}^{-1} = \mathbf{D}\begin{bmatrix} 1.2^k & 0.0 \\ 0.0 & 0.3^k \end{bmatrix}\mathbf{D}^{-1},$$

ami arra vezet, hogy $\boldsymbol{\Lambda}_2^k \to \left[\begin{smallmatrix} \infty & 0 \\ 0 & 0 \end{smallmatrix}\right]$ és a $\mathbf{D}$ és a $\mathbf{D}^{-1}$ elemeinek előjelét is figyelembe véve így $\mathbf{B}^k \to \left[\begin{smallmatrix} \infty & -\infty \\ -\infty & \infty \end{smallmatrix}\right]$, ha $k \to \infty$. $\square$

Ha $f(x) = \sum_{k=0}^{\infty} a_k x^k$ és $\mathbf{D}$ diagonális, továbbá $\mathbf{D}$ főátlóbeli elemei benne vannak a hatványsor konvergenciatartományában, akkor

$$\begin{aligned} f(\mathbf{D}) &= \sum_{k=0}^{\infty} a_k \mathbf{D}^k = \operatorname{diag}\left(\sum_{k=0}^{\infty} a_k d_1^k, \ldots, \sum_{k=0}^{\infty} a_k d_1^k\right) \\ &= \operatorname{diag}(f(d_1), \ldots, f(d_n)). \end{aligned}$$

Eszerint például bármely diagonalizálható $\mathbf{A}$ mátrixra értelmezhető az $e^{\mathbf{A}}$ hatvány, nevezetesen

$$e^{\mathbf{A}} = \mathbf{I} + \mathbf{A} + \frac{\mathbf{A}^2}{2!} + \cdots + \frac{\mathbf{A}^n}{n!} + \ldots$$

Hasonlóképp definiálható az $\ln(\mathbf{I} + \mathbf{A})$ mátrixfüggvény is. Fölhasználva a

$$\ln(1 + x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \ldots \qquad |x| < 1$$

hatványsort kapjuk, hogy

$$\ln(\mathbf{I} + \mathbf{A}) = \mathbf{A} - \frac{\mathbf{A}^2}{2} + \frac{\mathbf{A}^3}{3} - \frac{\mathbf{A}^4}{4} + \ldots,$$

ahol $\varrho(\mathbf{A}) < 1$. Az eddigiek alapján két sejtést fogalmazhatunk meg:

> ▶ Egy hatványsorba fejthető függvénynek egy diagonális mátrixban – és így bármely diagonalizálható mátrixon – fölvett értékét a függvénynek csak a sajátértékekben való viselkedése befolyásolja.

> ▶ A Cayley–Hamilton-tétel szerint minden mátrix kielégíti saját karakterisztikus egyenletét, így egy $n$-edrendű mátrix minden hatványa legföljebb $n - 1$-edik hatványok lineáris kombinációjával helyettesíthető, azaz a függvény értéke egy polinomba való helyettesítéssel is kiszámolható.

### Mátrixfüggvény kiszámítása a Jordan-alakból

A Jordan-féle normálalakba írt mátrix hatványai és így polinomjai is kifejezhetők a sajátértékek függvényei segítségével. Ez lehetővé teszi tetszőleges négyzetes mátrix függvényének definiálását!

A Jordan-normálalak egyik egyszerű következménye az alábbi:

**11.19. állítás (Mátrix polinomja).** *Legyen az $\mathbf{A} \in \mathbb{C}^{n \times n}$ mátrix Jordan-felbontása $\mathbf{A} = \mathbf{C}\mathbf{J}\mathbf{C}^{-1}$ és $p \in \mathbb{C}[x]$ egy tetszőleges polinom. Ekkor*

$$p(\mathbf{A}) = \mathbf{C}p(\mathbf{J})\mathbf{C}^{-1} = \mathbf{C}\begin{bmatrix} p(\mathbf{J}_1) & \mathbf{O} & \ldots & \mathbf{O} \\ \mathbf{O} & p(\mathbf{J}_2) & \ldots & \mathbf{O} \\ \vdots & \vdots & \ddots & \vdots \\ \mathbf{O} & \mathbf{O} & \ldots & p(\mathbf{J}_k) \end{bmatrix}\mathbf{C}^{-1}, \tag{11.4}$$

A Jordan-blokk polinomjának általános alakja felírható a polinom deriváltjai segítségével, de ezt általánosabb formában, tetszőleges (Taylor-polinommal vagy Taylor-sorral rendelkező) függvényre fogjuk megtenni. Tegyük fel, hogy az $f$ függvény $\lambda$ körül Taylor-sorba fejthető, azaz

$$f(x) = f(\lambda) + f'(\lambda)(x - \lambda) + \ldots + \frac{f^{(m)}(\lambda)}{m!}(x - \lambda)^m + \ldots$$

és legyen $\mathbf{J} \in \mathbb{C}^{n \times n}$ egy Jordan-blokk, azaz

$$\mathbf{J} = \lambda\mathbf{I} + \mathbf{N} = \begin{bmatrix} \lambda & 0 & \ldots & 0 \\ 0 & \lambda & \ldots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \ldots & \lambda \end{bmatrix} + \begin{bmatrix} 0 & 1 & 0 & \ldots \\ 0 & 0 & 1 & \ldots \\ 0 & 0 & 0 & \ddots \\ \vdots & \vdots & \ddots & \ddots \end{bmatrix} = \begin{bmatrix} \lambda & 1 & 0 & \ldots \\ 0 & \lambda & 1 & \ldots \\ 0 & 0 & \lambda & \ddots \\ \vdots & \vdots & \ddots & \ddots \end{bmatrix}.$$

Mivel $\mathbf{N}^n = \mathbf{O}$, fenn kell álljon az

$$f(\mathbf{J}) = f(\lambda\mathbf{I} + \mathbf{N}) = f(\lambda)\mathbf{I} + f'(\lambda)\mathbf{N} + \ldots + \frac{f^{(n-1)}(\lambda)}{(n-1)!}\mathbf{N}^{n-1} \tag{11.5}$$

összefüggés – ha egyáltalán van értelme az $f(\mathbf{J})$ kifejezésnek. Tehát az $f$ függvénynek csak a Jordan-mátrix rendjénél kisebb rendű deriváltjai játszanak szerepet a függvényértékben. Ez a következő két definícióhoz vezet.

**11.20. definíció (Spektrumon definiált függvény).** *Legyen az $\mathbf{A}$ mátrix spektruma $\{\lambda_1, \ldots, \lambda_k\}$, a $\lambda_i$ sajátértékhez tartozó legnagyobb Jordan-blokk rendjét jelölje $m_i$. Azt mondjuk, hogy $f$ definiálva van az $\mathbf{A}$ spektrumán, ha az*

$$f^{(j)}(\lambda_i), \quad j = 0, 1, \ldots, m_i - 1,\ i = 1, \ldots, k$$

*értékek léteznek. Azt mondjuk, hogy ezek az értékek az $f$ értékei az $\mathbf{A}$ spektrumán.*

> ▶ Minden függvény, mely $\mathbb{C}$ minden pontjában akárhányszor differenciálható, tetszőleges mátrixra értelmezve van annak spektrumán. Így minden polinom értelmezve van minden mátrix spektrumán, ami összhangban lesz azzal, hogy minden négyzetes mátrixnak bármely polinomfüggvénye értelmezve van.

> ▶ Ha $\mu$ az $\mathbf{A}$ mátrix minimálpolinomja, akkor $\mu$ értelmezve van $\mathbf{A}$ spektrumán, és $\mu$ értékei $\mathbf{A}$ spektrumán mind nullák. Ez egyből következik a minimálpolinom a 11.14. tételbeli előállításából és a fenti definícióból.

**11.21. definíció (Mátrixfüggvény a Jordan-alakból).** *Legyen $\mathbf{A} \in \mathbb{C}^{n \times n}$ Jordan-felbontása $\mathbf{A} = \mathbf{C}\mathbf{J}\mathbf{C}^{-1}$, ahol $\mathbf{J} = \operatorname{diag}(\mathbf{J}_1, \ldots, \mathbf{J}_k)$ a Jordan-féle normálalakja, és $n_i$ jelöli a $\mathbf{J}_i$ blokk rendjét. Ekkor*

$$f(\mathbf{A}) = \mathbf{C}f(\mathbf{J})\mathbf{C}^{-1} = \mathbf{C}\operatorname{diag}(f(\mathbf{J}_1), \ldots, f(\mathbf{J}_k))\mathbf{C}^{-1},$$

*ahol*

$$f(\mathbf{J}_i) = \begin{bmatrix} f(\lambda_i) & f'(\lambda_i) & \frac{f''(\lambda_i)}{2!} & \ldots & \frac{f^{(n_i-2)}(\lambda_i)}{(n_i-2)!} & \frac{f^{(n_i-1)}(\lambda_i)}{(n_i-1)!} \\ 0 & f(\lambda_i) & f'(\lambda_i) & \ldots & \ldots & \frac{f^{(n_i-2)}(\lambda_i)}{(n_i-2)!} \\ \vdots & \ddots & \ddots & \ddots & \ddots & \vdots \\ 0 & 0 & 0 & \ldots & f'(\lambda_i) & \frac{f''(\lambda_i)}{2!} \\ 0 & 0 & 0 & \ldots & f(\lambda_i) & f'(\lambda_i) \\ 0 & 0 & 0 & \ldots & 0 & f(\lambda_i) \end{bmatrix} \tag{11.6}$$

> ▶ Egyszerű képletbehelyettesítéssel $f(x) = x^3$ esetén
>
> $$\begin{bmatrix} 2 & 1 \\ 0 & 2 \end{bmatrix}^3 = \begin{bmatrix} f(2) & f'(2) \\ 0 & f(2) \end{bmatrix} = \begin{bmatrix} 8 & 12 \\ 0 & 8 \end{bmatrix}.$$

> ▶ Az $f(x) = e^x$ függvény esetén, ha
>
> $$\mathbf{A} = \begin{bmatrix} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{bmatrix}, \quad \text{akkor } e^{\mathbf{A}} = \begin{bmatrix} e^2 & e^2 & \frac{e^2}{2} \\ 0 & e^2 & e^2 \\ 0 & 0 & e^2 \end{bmatrix} = e^2\begin{bmatrix} 1 & 1 & \frac{1}{2} \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{bmatrix}.$$

> ▶ Általában a $\lambda$-hoz tartozó Jordan-blokkra
>
> $$\mathbf{J} = \begin{bmatrix} \lambda & 1 & 0 & \ldots & 0 \\ 0 & \lambda & 1 & \ldots & 0 \\ 0 & 0 & \lambda & \ldots & 0 \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & 0 & \ldots & \lambda \end{bmatrix} \quad \text{esetén } e^{\mathbf{J}} = e^{\lambda}\begin{bmatrix} 1 & 1 & \frac{1}{2!} & \ldots & \frac{1}{(n-1)!} \\ 0 & 1 & 1 & \ldots & \frac{1}{(n-2)!} \\ 0 & 0 & 1 & \ldots & \frac{1}{(n-3)!} \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & 0 & \ldots & 1 \end{bmatrix}$$

**11.22. példa (Mátrix exponenciális függvénye).** *Legyen*

$$\mathbf{A} = \begin{bmatrix} -3 & 2 & 1 \\ 1 & -2 & 1 \\ -1 & -2 & -5 \end{bmatrix}$$

*Határozzuk meg az $e^{\mathbf{A}}$ mátrixot!*

**Megoldás.** $\mathbf{A}$ karakterisztikus polinomja

$$x^3 + 10x^2 + 32x + 32 = (x + 2)(x + 4)^2,$$

így

$$\mathbf{J} = \begin{bmatrix} -2 & 0 & 0 \\ 0 & -4 & 0 \\ 0 & 0 & -4 \end{bmatrix}, \quad \mathbf{P} = \begin{bmatrix} 1 & 1 & 0 \\ 1 & 0 & 1 \\ -1 & -1 & -2 \end{bmatrix},$$

$$e^{\mathbf{A}} = \mathbf{P}e^{\mathbf{J}}\mathbf{P}^{-1} = \frac{1}{2e^4}\begin{bmatrix} e^2 + 1 & 2e^2 - 2 & e^2 - 1 \\ e^2 - 1 & 2e^2 & e^2 - 1 \\ 1 - e^2 & 2 - 2e^2 & 3 - e^2 \end{bmatrix} \qquad \square$$

### Mátrixfüggvény kiszámítása polinominterpolációval

Az, hogy az előzőekben egy mátrix függvényének kiszámításához valójában csak a mátrix egy polinomjának kiszámítása kellett, azt sejteti, hogy mátrix függvényét polinominterpolációval is számolhatjuk.

Az alapgondolat az, hogy ha $f$ az $\mathbf{A}$ mátrix spektrumán definiált függvény, akkor elég megkeresni azt a polinomot (vagy egy olyan polinomot), amely azonos helyettesítési értékeket ad a függvény és deriváltjai helyettesítési értékeivel. Ezt a gondolatot a következő állítás alapozza meg:

**11.23. állítás (Spektrumon azonos értékeket adó polinomok).** *Tetszőleges $p$ és $q$ polinomokra és $\mathbf{A} \in \mathbb{C}^{n \times n}$ mátrixra $p(\mathbf{A}) = q(\mathbf{A})$, pontosan akkor teljesül, ha $p$ és $q$ értékei $\mathbf{A}$ spektrumán azonosak.*

**Bizonyítás.** Ha $p(\mathbf{A}) = q(\mathbf{A})$, akkor $h = p - q$ annullálja $\mathbf{A}$-t, így $h$ osztható a minimálpolinommal, így a minimálpolinommal együtt $h$ értékei is nullák az $\mathbf{A}$ spektrumán.

Ha $p$ és $q$ értékei $\mathbf{A}$ spektrumán azonosak, akkor a $h = p - q$ polinom értékei mind nullák. Az ilyen polinomok alakja $\prod_{i=1}^{s}(x - \lambda_i)^{m_i}g(x)$, azaz $h = \mu g$, tehát $h$ annullálja $\mathbf{A}$-t, így $p(\mathbf{A}) = q(\mathbf{A})$. $\square$

**11.24. definíció (Mátrixfüggvény interpolációs polinommal).** *Legyen $\mathbf{A}$ minimálpolinomja $\mu_{\mathbf{A}}$, és tegyük fel, hogy az $f$ függvény definiálva van $\mathbf{A}$ spektrumán. Ekkor $f(\mathbf{A}) := p(\mathbf{A})$, ahol $p$ az a polinom, melynek foka kisebb $\mu_{\mathbf{A}}$ fokánál, és amely eleget tesz a*

$$p^{(j)}(\lambda_i) = f^{(j)}(\lambda_i), \quad j = 0, 1, \ldots, m_i - 1,\ i = 1, \ldots, k \tag{11.7}$$

*feltételeknek, ahol $m_i$ a $\lambda_i$ sajátértékhez tartozó legnagyobb Jordan-blokk rendjét jelöli.*

> ▶ A definícióban megadott polinom egyértelműen létezik, ezt nevezzük *Hermite-féle interpolációs polinomnak*, mely explicit módon is megadható:
>
> $$p(x) = \sum_{i=1}^{s}\left(\left(\sum_{j=0}^{m_i-1}\left(\frac{f(y)}{\prod_{k \neq i}(y - \lambda_k)}\right)^{(j)}(\lambda_i)\frac{(x - \lambda_i)^j}{j!}\right)\prod_{j \neq i}(x - \lambda_j)^{m_j}\right).$$

Ha $\mathbf{A}$-nak minden sajátértéke egyszeres algebrai multiplicitású, azaz $s = n$ és $m_i = 1$ minden $i$-re, akkor az előző formula az ismert Lagrange-féle interpolációs polinomot adja:

$$p(x) = \sum_{i=1}^{n}\left(f(\lambda_i)\prod_{j \neq i}\frac{x - \lambda_j}{\lambda_i - \lambda_j}\right). \tag{11.8}$$

Ha pedig $\mathbf{A}$-nak csak egyetlen sajátértéke $\lambda$, melynek $n$ az algebrai multiplicitása, azaz $s = 1$, $m_1 = n$, akkor $f$ Taylor-polinomját kapjuk:

$$p(x) = \sum_{j=0}^{n-1} f^{(j)}(\lambda)\frac{(x - \lambda)^j}{j!}.$$

> ▶ Az Hermite-polinom ugyan egyértelmű, de nem mindig tudjuk könnyen meghatározni, például ha a mátrixnak csak a sajátértékeit ismerjük, de a legnagyobb Jordan-blokk méretét nem. A 11.23. állítás szerint bármely más polinom is megfelel, mely kielégíti a (11.7) feltételeket.

> ▶ Nézzük az $f(x) = x^3$ függvény helyettesítési értékét a $\mathbf{A} = \left[\begin{smallmatrix} 2 & 1 \\ 0 & 2 \end{smallmatrix}\right]$ mátrixban. Ugyan $f$ polinom, de mivel $\mu_{\mathbf{A}}(x) = (x - 2)^2$, azaz a minimálpolinom kisebb fokú, ezért van olyan elsőfokú polinom is, mely $\mathbf{A}$-ban azonos értéket ad. E polinom az $x^3 : \mu_{\mathbf{A}}(x)$ osztás maradéka. Mivel $x^3 = (x - 2)^2(x + 4) + (12x - 16)$, azaz a maradék $12x - 16$, ezért
>
> $$\begin{bmatrix} 2 & 1 \\ 0 & 2 \end{bmatrix}^3 = 12\begin{bmatrix} 2 & 1 \\ 0 & 2 \end{bmatrix} - 16\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 8 & 12 \\ 0 & 8 \end{bmatrix}.$$

> ▶ Az előző megjegyzésbeli polinomot úgy is megkaphatjuk, hogy az $f$ függvényhez megkeressük az Hermite-féle interpolációs polinomot, azaz keresünk egy olyan $p(x) = ax + b$ polinomot melynek helyettesítési értéke, és deriváltjának helyettesítési értéke megegyezik az $f$ megfelelő helyettesítési értékeivel:
>
> $$\begin{aligned} f(2) &= 8 = p(2) = 2a + b \\ f'(2) &= 12 = p'(2) = a. \end{aligned}$$

Innen $a = 12$, $b = -16$, ami megegyezik az előző eredménnyel.

> ▶ Hasonlóan egyszerűen számolható az
>
> $$\mathbf{A} = \begin{bmatrix} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{bmatrix}$$

mátrixra az $e^{\mathbf{A}}$ értéke. Mivel $\mu_{\mathbf{A}}(x) = (x - 2)^3$ ezért van legföljebb másodfokú Hermite-polinom. Legyen ez $p(x) = ax^2 + bx + c$. Ekkor

$$\begin{aligned} e^x|_2 &= e^2 = p(2) = 4a + 2b + c \\ (e^x)'|_2 &= e^2 = p'(2) = 4a + b \\ (e^x)''|_2 &= e^2 = p''(2) = 2a. \end{aligned}$$

Innen $a = e^2/2$, $b = -e^2$, $c = e^2$, így

$$\begin{aligned} e^{\mathbf{A}} = p(\mathbf{A}) &= \frac{e^2}{2}\mathbf{A}^2 - e^2\mathbf{A} + e^2\mathbf{I} \\ &= \frac{e^2}{2}\begin{bmatrix} 4 & 4 & 1 \\ 0 & 4 & 4 \\ 0 & 0 & 4 \end{bmatrix} - e^2\begin{bmatrix} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 1 \end{bmatrix} + e^2\begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} \\ &= e^2\begin{bmatrix} 1 & 1 & \frac{1}{2} \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{bmatrix}. \end{aligned}$$

**11.25. példa (Exponenciális függvény Hermite-polinommal).** *Számítsuk ki az $e^{\mathbf{A}}$ mátrixot ha*

$$\mathbf{A} = \begin{bmatrix} -3 & 2 & 1 \\ 1 & -2 & 1 \\ -1 & -2 & -5 \end{bmatrix}$$

*(ld. még a 11.22. példát).*

**Megoldás.** A 11.22. példa megoldásában láttuk, hogy a karakterisztikus polinom $\chi_{\mathbf{A}}(x) = (x + 2)(x + 4)^2$, másrészt hogy a Jordan-alak $\operatorname{diag}(-2, -4, -4)$, tehát a legnagyobb Jordan-blokk $1 \times 1$-es, ezért a minimálpolinom $\mu_{\mathbf{A}}(x) = (x + 2)(x + 4) = x^2 + 6x + 8$. Tehát olyan elsőfokú $p(x) = ax + b$ alakú polinomot keresünk, melyre

$$\begin{aligned} e^{-2} &= p(-2) = -2a + b \\ e^{-4} &= p(-4) = -4a + b. \end{aligned}$$

Innen $a = \frac{1}{2}(e^{-2} - e^{-4})$, $b = 2e^{-2} - e^{-4}$, így

$$e^{\mathbf{A}} = a\mathbf{A} + b\mathbf{I} = \frac{1}{2e^4}\begin{bmatrix} e^2 + 1 & 2e^2 - 2 & e^2 - 1 \\ e^2 - 1 & 2e^2 & e^2 - 1 \\ 1 - e^2 & 2 - 2e^2 & 3 - e^2 \end{bmatrix}. \qquad \square$$

**11.26. tétel (A definíciók ekvivalenciája).** *A mátrixfüggvény kiszámítására adott 11.21. és 11.24. definíciók ekvivalensek.*

**Bizonyítás.** A 11.24. definíció szerint $f(\mathbf{A}) = p(\mathbf{A})$ és a 11.23. állítás szerint bármely más polinom is megadja $f(\mathbf{A})$-t, ha kielégíti a (11.7) feltételeket. Ugyanakkor a 11.21. definícióban $f$-nek épp azok a deriváltjai szerepelnek azokban a sajátértékekben kiértékelve, amelyek a (11.7) feltételekben is szerepelnek. Így elég csak azt ellenőrizni, hogy egy Jordan-blokk Hermite-polinomja megegyezik-e a 11.21. definícióban szereplővel. Ezt a polinom Taylor-polinomjára fölírható (11.5) képlet igazolja. $\square$

**11.27. példa (Fourier-mátrix függvényei).** *Tekintsük az unitér*

$$\mathbf{W}_N = \frac{1}{\sqrt{N}}\left[\omega^{kn}\right]_{k,n=0}^{N-1}, \quad \omega = e^{-2\pi i/N}$$

*Fourier-mátrixot. Határozzuk meg az $f$ függvényében azt a $p$ polinomot, melyre $p(\mathbf{W}_N) = f(\mathbf{W}_N)$.*

**Megoldás.** Mivel $\mathbf{W}_N^4 = \mathbf{I}$, és így $N > 3$ esetén $\mathbf{W}_N$ minimálpolinomja $\mu_{\mathbf{W}_N}(x) = x^4 - 1$, ezért $f$-nek van legfeljebb harmadfokú interpolációs polinomja. Mivel $x^4 - 1$ gyökei különbözőek ($\pm 1$, $\pm i$), ezért az interpolációs polinom (11.8)-beli Lagrange-féle alakja használható:

$$\begin{aligned} p(x) = \frac{1}{4}\big(&f(1)(t + 1)(t - i)(t + i) - f(-1)(t - 1)(t - i)(t + i) \\ &+ if(i)(t - 1)(t + 1)(t + i) - if(-i)(t - 1)(t + 1)(t - i)\big). \end{aligned}$$

E polinom az $N \leqslant 3$ esetekben is jó, bár nem a legkisebb fokú az interpolációs polinomok közül. $\square$

## Megoldások

**11.1.** Ha $\mathcal{U}$ invariáns altér, akkor definíció szerint $\mathcal{U}$ minden vektorának képe $\mathcal{U}$-ban van, így a bázisvektorok is, azaz $L\mathbf{u}_i \in \mathcal{U}$ ($i = 1, \ldots, k$).

Fordítva, tegyük fel, hogy a bázis minden $\mathbf{u}_i$ elemére $L\mathbf{u}_i \in \mathcal{U}$. Legyen $\mathbf{x} \in \mathcal{U}$ egy tetszőleges vektor. Ekkor vannak olyan $x_1, x_2, \ldots, x_k$ számok, hogy $\mathbf{x} = x_1\mathbf{u}_1 + x_2\mathbf{u}_2 + \ldots + x_k\mathbf{u}_k$. Így

$$L\mathbf{x} = x_1 L\mathbf{u}_1 + x_2 L\mathbf{u}_2 + \ldots + x_k L\mathbf{u}_k \in \mathcal{U},$$

mivel $\mathcal{U}$-beli vektorok lineáris kombinációja is $\mathcal{U}$-beli.

**11.2.** Igazolni kell, hogy $L\mathbf{u}, L\mathbf{v} \in \mathcal{U}$. Ez például leolvasható az $[\mathbf{u} \mid \mathbf{v} \mid L\mathbf{u} \mid L\mathbf{v}]$ mátrix rangjából:

$$\begin{bmatrix} 1 & 1 & 1 & 1 \\ -1 & 2 & -2 & 1 \\ 2 & -1 & 3 & 0 \\ -1 & 2 & -2 & 1 \end{bmatrix} \to \operatorname{rref}$$

Mivel a rang kettő, az $\mathcal{U}$ invariáns altér.

**11.4.** A karakterisztikus polinom negyedfokú, így a mátrix $4 \times 4$-es. Mivel minden sajátérték 1, ezért a Jordan-alak főátlójában csupa 1-es szerepel. A lehetséges öt alak elemi leszámlálással megkapható:

$$\begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}, \begin{bmatrix} 1 & 1 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}, \begin{bmatrix} 1 & 1 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 1 \end{bmatrix},$$

$$\begin{bmatrix} 1 & 1 & 0 & 0 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}, \begin{bmatrix} 1 & 1 & 0 & 0 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 1 \end{bmatrix}.$$

Nem tekintjük különbözőnek a blokkok cseréjével egymásból megkapható alakokat. Például az

$$\begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 1 \end{bmatrix}$$

mátrix a negyedik alakból a két blokk cseréjével megkapható.

**11.5.** A $\mathbf{C}$ oszlopai Jordan-bázist alkotnak, azaz minden oszlopvektor egy Jordan-lánc eleme. Mivel az $\mathbf{A}$ mátrixnak csak két különböző sajátértéke van, ez azt jelenti, hogy minden oszlopvektort vagy az $\mathbf{A} - 2\mathbf{I}$ vagy az $\mathbf{A} - 4\mathbf{I}$ mátrix vagy a zérusvektorba, vagy egy másik oszlopvektorba visz (előbbi esetben az oszlopvektor sajátvektor, utóbbi esetben csak általánosított sajátvektor). E hatást az $(\mathbf{A} - 2\mathbf{I})$ és az

$(\mathbf{A} - 4\mathbf{I})\mathbf{C}$ szorzatok kiszámításával megkaphatjuk:

$$(\mathbf{A} - 2\mathbf{I})\mathbf{C} = \begin{bmatrix} 0 & 1 & 0 & 0 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & 2 & 1 & 0 & 0 & 0 \\ 0 & 0 & 2 & 3 & 1 & 0 & 0 \\ 0 & 0 & 2 & 3 & 3 & 0 & 0 \\ 0 & 0 & 0 & 2 & 3 & 2 & 0 \\ 0 & 0 & 0 & 0 & 2 & 2 & 0 \end{bmatrix},$$

$$(\mathbf{A} - 4\mathbf{I})\mathbf{C} = \begin{bmatrix} -2 & -1 & 0 & 0 & 0 & 0 & 0 \\ -2 & -1 & -2 & 0 & 0 & 0 & 0 \\ 0 & -2 & -2 & 0 & 1 & 0 & 0 \\ 0 & 0 & -2 & 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 0 & 0 & 0 & 0 \end{bmatrix}.$$

Az első szorzatból látszik, hogy $(\mathbf{A} - 2\mathbf{I})[\mathbf{c}_1\ \mathbf{c}_2\ \mathbf{c}_3] = [\mathbf{0}\ \mathbf{c}_1\ \mathbf{0}]$, míg a másodikból, hogy $(\mathbf{A} - 4\mathbf{I})[\mathbf{c}_4\ \mathbf{c}_5\ \mathbf{c}_6\ \mathbf{c}_7] = [\mathbf{0}\ \mathbf{c}_4\ \mathbf{c}_5\ \mathbf{0}]$ (a második szorzatban már nem is kellett volna a $\mathbf{c}_1$, $\mathbf{c}_2$, $\mathbf{c}_3$ vektorokkal szorozni látva az előző szorzás eredményét).

Ebből fölrajzolható a diagram:

$$
\begin{aligned}
&\mathbf{0} \xleftarrow{\ \mathbf{A}-2\mathbf{I}\ } \mathbf{c}_1 \xleftarrow{\ \mathbf{A}-2\mathbf{I}\ } \mathbf{c}_2 \\
&\mathbf{0} \xleftarrow{\ \mathbf{A}-2\mathbf{I}\ } \mathbf{c}_3 \\
&\mathbf{0} \xleftarrow{\ \mathbf{A}-4\mathbf{I}\ } \mathbf{c}_4 \xleftarrow{\ \mathbf{A}-4\mathbf{I}\ } \mathbf{c}_5 \xleftarrow{\ \mathbf{A}-4\mathbf{I}\ } \mathbf{c}_6 \\
&\mathbf{0} \xleftarrow{\ \mathbf{A}-4\mathbf{I}\ } \mathbf{c}_7
\end{aligned}
$$

A diagramból kiolvasható az $\mathbf{A}$ hatása a $\mathbf{c}_i$ vektorokra: $\mathbf{A}\mathbf{c}_1 = 2\mathbf{c}_1$, $\mathbf{A}\mathbf{c}_2 = 2\mathbf{c}_2 + \mathbf{c}_1$, $\mathbf{A}\mathbf{c}_3 = 2\mathbf{c}_3$, $\mathbf{A}\mathbf{c}_4 = 4\mathbf{c}_4$, $\mathbf{A}\mathbf{c}_5 = 4\mathbf{c}_5 + \mathbf{c}_4$, $\mathbf{A}\mathbf{c}_6 = 4\mathbf{c}_6 + \mathbf{c}_5$, $\mathbf{A}\mathbf{c}_7 = 4\mathbf{c}_7$. Ebből felírható e leképezés mátrixa:

$$\mathbf{J} = \mathbf{C}^{-1}\mathbf{A}\mathbf{C} = \left[\begin{array}{ccc|cccc} 2 & 1 & 0 & 0 & 0 & 0 & 0 \\ 0 & 2 & 0 & 0 & 0 & 0 & 0 \\ \hline 0 & 0 & 2 & 0 & 0 & 0 & 0 \\ \hline 0 & 0 & 0 & 4 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 & 4 & 1 & 0 \\ 0 & 0 & 0 & 0 & 0 & 4 & 0 \\ \hline 0 & 0 & 0 & 0 & 0 & 0 & 4 \end{array}\right]$$

# 12. Nemnegatív mátrixok

Különösen sok alkalmazása van azoknak a mátrixoknak, melyek elemei nem negatív számok. Ilyen mátrixok például azok, melyek elemei mérési eredmények, gazdasági adatok, valószínűségek,…

## A Perron–Frobenius-elmélet

### Mátrixok összehasonlítása

Mátrixok elemenkénti összehasonlítására a szokásos relációjeleket fogjuk használni. $\mathbf{A} > \mathbf{B}$ azt jelenti, hogy mindkét mátrix azonos méretű, és $a_{ij} > b_{ij}$ minden lehetséges $i$ és $j$ indexre. Hasonlóan $\mathbf{A} \geqslant \mathbf{B}$, ha $a_{ij} \geqslant b_{ij}$. Egy $\mathbf{A}$ mátrixot *pozitívnak* (*nemnegatívnak*) nevezünk, ha $\mathbf{A} > \mathbf{O}$ ($\mathbf{A} \geqslant \mathbf{O}$), azaz ha $a_{ij} > 0$ ($a_{ij} \geqslant 0$). Itt $\mathbf{O}$ a nullmátrixot jelöli. E fogalmakat és jelöléseket vektorokra is használjuk: az $\mathbf{x}$ vektor pozitív, azaz $\mathbf{x} > \mathbf{0}$, ha $\mathbf{x}$ minden koordinátája pozitív.

Néhány könnyen igazolható észrevétel:

$$\mathbf{A} \geqslant \mathbf{O} \Leftrightarrow \mathbf{A}\mathbf{x} \geqslant \mathbf{0} \text{ minden } \mathbf{x} \geqslant \mathbf{0} \text{ vektora,} \tag{12.1}$$

$$\mathbf{A} > \mathbf{O} \Leftrightarrow \mathbf{A}\mathbf{x} > \mathbf{0} \text{ minden } \mathbf{x} \geqslant \mathbf{0},\ \mathbf{x} \neq \mathbf{0} \text{ vektorra,} \tag{12.2}$$

$$\mathbf{A} \geqslant \mathbf{O}, \text{ és } \mathbf{x} \geqslant \mathbf{y} \geqslant \mathbf{0} \Rightarrow \mathbf{A}\mathbf{x} \geqslant \mathbf{A}\mathbf{y}. \tag{12.3}$$

A nemnegatív mátrixokat négy osztályba fogjuk sorolni aszerint, hogy magasabb hatványai milyen értelemben válnak pozitívvá. Az $\mathbf{A}$ mátrix $k$-adik hatványának elemeire az $a_{ij}^{(k)}$ jelölést fogjuk használni, azaz $\mathbf{A}^k = \big[a_{ij}^{(k)}\big]$

**12.1. definíció (Primitív, irreducibilis és reducibilis mátrixok).** *Azt mondjuk, hogy a nemnegatív négyzetes $\mathbf{A}$ mátrix* primitív*, ha valamely pozitív egészkitevős hatványa pozitív. $\mathbf{A}$* irreducibilis*, ha minden $(i, j)$ indexpárhoz van olyan $k$ kitevő, hogy $a_{ij}^{(k)} > 0$ és* reducibilis*, ha van olyan $(i, j)$ indexpár, hogy minden $k$ kitevőre $a_{ij}^{(k)} = 0$.*

> *Például a $\begin{bmatrix} 2 & 1 \\ 1 & 1 \end{bmatrix}$ mátrix pozitív, így primitív is, hisz első hatványa pozitív, az $\begin{bmatrix} 1 & 1 \\ 1 & 0 \end{bmatrix} \geqslant \mathbf{O}$ mátrix primitív, mert $\begin{bmatrix} 1 & 1 \\ 1 & 0 \end{bmatrix}^2 = \begin{bmatrix} 2 & 1 \\ 1 & 1 \end{bmatrix} > \mathbf{O}$*

> *Az $\mathbf{A} = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$ mátrix nem primitív, hisz $\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}^2 = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$, így $\mathbf{A}^{2k+1} = \mathbf{A}$, $\mathbf{A}^{2k} = \mathbf{I}$, és ezek nem pozitív mátrixok. Másrészt a főátlóbeli elemek a páros, a mellékátlóbeliek a páratlan hatványokban pozitívak, így e mátrix irreducibilis. Ez a példa is mutatja, hogy ha egy mátrix irreducibilis, abból nem következik, hogy primitív is. Vagyis abból, hogy „minden elemhez létezik egy $k$ kitevő", nem következik, hogy létezik egy közös $k$ kitevő is.*

> *Végül az $\mathbf{A} = \begin{bmatrix} 1 & 0 \\ 1 & 1 \end{bmatrix}$ mátrix reducibilis, mivel $\mathbf{A}^k = \begin{bmatrix} 1 & 0 \\ k & 1 \end{bmatrix}$, amelyben $a_{12}^{(k)} = 0$ minden $k$ kitevőre.*

A 12.1 táblázatban tömören összefoglaljuk a pozitivitás e négy fokozatának definícióját.

| $\mathbf{A}$ pozitív: | $\forall i, j$ | $a_{ij} > 0$ |
|---|---|---|
| $\mathbf{A}$ primitív: | $\exists k\ \forall i, j$ | $a_{ij}^{(k)} > 0$ |
| $\mathbf{A}$ irreducibilis: | $\forall i, j\ \exists k$ | $a_{ij}^{(k)} > 0$ |
| $\mathbf{A}$ reducibilis: | $\exists i, j\ \forall k$ | $a_{ij}^{(k)} = 0$ |

> *12.1. táblázat: $\mathbf{A} = [a_{ij}] \geqslant \mathbf{O}$. Pozitív, primitív, irreducibilis, reducibilis mátrixok definíciója.*

A valós vagy komplex elemű $\mathbf{A}$ mátrix $\varrho(\mathbf{A})$ *spektrálsugarán* a legnagyobb abszolút értékű sajátértékének abszolút értékét értjük. Másként fogalmazva a spektrálsugár a komplex számsík legkisebb olyan origó középpontú körének a sugara, amely tartalmazza az összes sajátértéket.

### Pozitív mátrixok

E szakaszban csak pozitív mátrixokat vizsgálunk. Az itt ismertetendő elmélet Perrontól származik, melyet két tételben foglalunk össze.

**12.2. tétel (Perron-tétel: pozitív sajátérték és sajátvektor).** *Ha $\mathbf{A}$ pozitív mátrix, és $r = \varrho(\mathbf{A})$ jelöli a spektrálsugarát, akkor*

1. *$r > 0$,*
2. *$r$ sajátérték egy pozitív sajátvektorral,*
3. *$\mathbf{A}$-nak e pozitív sajátvektor skalárszorosain kívül nincs más nemnegatív sajátvektora.*

**Bizonyítás.** 1. Ha $r = 0$, akkor $\mathbf{A}$ minden sajátértéke 0, azaz $\mathbf{A}$ nilpotens a 8.19. tétel szerint. Ez viszont pozitív mátrixra lehetetlen, hisz annak minden hatványa pozitív, tehát semelyik sem $\mathbf{O}$.

2. Legyen $\lambda \in \mathbb{C}$ egyike a legnagyobb abszolút értékű sajátértékeknek, azaz $|\lambda| = r$, és legyen az $\mathbf{x}$ sajátvektorral $\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$. Legyen $\mathbf{p}$ az $\mathbf{x}$ koordinátáinak abszolút értékéből álló vektor, azaz $\mathbf{p} = (|x_1|, |x_2|, \ldots, |x_n|)$. Írjuk fel az $\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$ mindkét oldalának $i$-edik koordinátáját, majd vegyük annak abszolút értékét:

$$\left| \sum_{j=1}^{n} a_{ij} x_j \right| = |\lambda| |x_i|.$$

Ebből, a háromszög-egyenlőtlenséget fölhasználva kapjuk, hogy

$$rp_i = |\lambda| |x_i| = \left| \sum_{j=1}^{n} a_{ij} x_j \right| \leqslant \sum_{j=1}^{n} a_{ij} p_j, \quad \text{azaz } r\mathbf{p} \leqslant \mathbf{A}\mathbf{p}.$$

Ha itt egyenlőség áll, kész vagyunk, hisz $r\mathbf{p} = \mathbf{A}\mathbf{p}$ esetén $r$ valóban sajátérték. Ha nem, akkor az $\mathbf{u} = \mathbf{A}\mathbf{p} - r\mathbf{p}$ vektorra $\mathbf{u} \geqslant \mathbf{0}$ és $\mathbf{u}$ legalább egyik koordinátája határozottan pozitív. A (12.2) szerint ekkor $\mathbf{A}\mathbf{u} > \mathbf{0}$, azaz $\mathbf{A}(\mathbf{A}\mathbf{p}) - r\mathbf{A}\mathbf{p} > \mathbf{0}$. A $\mathbf{v} = \mathbf{A}\mathbf{p}$ jelöléssel eszerint $\mathbf{A}\mathbf{v} > r\mathbf{v}$, ahol $\mathbf{v} > \mathbf{0}$. Megmutatjuk, hogy ez ellentmondásra vezet, azaz megmutatjuk, hogy nincs olyan $\mathbf{v}$ vektor, hogy $\mathbf{A}\mathbf{v} > r\mathbf{v}$. Legyen $\varepsilon > 0$ egy olyan szám, melyre még fennáll az $\mathbf{A}\mathbf{v} \geqslant (r + \varepsilon)\mathbf{v}$ egyenlőtlenség. A $\mathbf{B} = \frac{1}{r+\varepsilon}\mathbf{A}$ mátrixra tehát egyrészt $\mathbf{B}\mathbf{v} \geqslant \mathbf{v}$, másrészt $\varrho(\mathbf{B}) = \varrho(\frac{1}{r+\varepsilon}\mathbf{A}) = \frac{r}{r+\varepsilon} < 1$, azaz $\mathbf{B}$ spektrálsugara 1-nél kisebb. Ez azt jelenti, hogy $\lim_{k\to\infty} \mathbf{B}^k = \mathbf{O}$. Így ha $\mathbf{v} \leqslant \mathbf{B}\mathbf{v} \leqslant \mathbf{B}^2\mathbf{v} \leqslant \cdots \leqslant \mathbf{B}^k\mathbf{v}$ vektorsorozat a $\mathbf{0}$ vektorhoz tart, vagyis $\mathbf{v} \leqslant \mathbf{0}$, ami ellentmond korábbi feltevésünknek. Ezzel bizonyítottuk, hogy $\mathbf{A}\mathbf{p} = r\mathbf{p}$.

Még meg kell mutatnunk, hogy $\mathbf{p} > \mathbf{0}$. Tudjuk, hogy $\mathbf{p} \geqslant \mathbf{0}$, így a (12.2) összefüggés miatt $\mathbf{A}\mathbf{p} > \mathbf{0}$, de $\mathbf{A}\mathbf{p} = r\mathbf{p}$, tehát $r\mathbf{p} > \mathbf{0}$, azaz $\mathbf{p} > \mathbf{0}$.

3. Legyen $\mathbf{x} \geqslant \mathbf{0}$ a $\lambda$ sajátértékhez tartozó sajátvektor. Legyen továbbá $\mathbf{q} > \mathbf{0}$ az ugyancsak pozitív, és azonos spektrumú $\mathbf{A}^{\mathsf{T}}$ mátrix $r$-hez tartozó pozitív sajátvektora, azaz $\mathbf{q}^{\mathsf{T}}\mathbf{A} = r\mathbf{q}^{\mathsf{T}}$. Ekkor

$$r\mathbf{q}^{\mathsf{T}}\mathbf{x} = (\mathbf{q}^{\mathsf{T}}\mathbf{A})\mathbf{x} = \mathbf{q}^{\mathsf{T}}(\mathbf{A}\mathbf{x}) = \lambda\mathbf{q}^{\mathsf{T}}\mathbf{x},$$

amiből $\mathbf{q}^{\mathsf{T}}\mathbf{x} > 0$ miatt $r = \lambda$ adódik.

Végül megmutatjuk, hogy $\mathbf{p}$ skalárszorosain kívül $r$-hez nem tartozik más sajátvektor. Indirekt módon tegyük fel, hogy $\mathbf{s}$ egy $\mathbf{p}$-től független sajátvektor. Ekkor megfelelő $c$ konstanssal elérhető, hogy a $\mathbf{p} + c\mathbf{s} \geqslant \mathbf{0}$ vektornak legyen 0 koordinátája. A (12.2) összefüggés szerint $r(\mathbf{p} + c\mathbf{s}) = \mathbf{A}(\mathbf{p} + c\mathbf{s}) > \mathbf{0}$, ami lehetetlen, hisz van 0-koordinátája. Beláttuk tehát, hogy $r$ geometriai multiplicitása 1, és semmilyen más sajátértékhez nem tartozik nemnegatív sajátvektor. $\square$

Valószínűségeloszlások leírásában való szerepe indokolja a következő kitüntető elnevezést. Pozitív mátrix spektrálsugarához, mint sajátértékhez tartozó pozitív $\mathbf{p}$ sajátvektorát *Perron-vektornak* nevezzük, ha koordinátáinak összege 1, azaz 1-normája 1. A hasonló módon definiált bal sajátvektort *bal Perron-vektornak* nevezzük. Ez megegyezik az $\mathbf{A}^{\mathsf{T}}$ Perron-vektorával. Összefoglalva: a $\mathbf{p}$ Perron-vektort és a $\mathbf{q}$ bal Perron-vektort az

$$\mathbf{A}\mathbf{p} = r\mathbf{p}, \quad \sum_{i=1}^{n} p_i = 1, \qquad \mathbf{q}^{\mathsf{T}}\mathbf{A} = r\mathbf{q}^{\mathsf{T}}, \quad \sum_{i=1}^{n} q_i = 1$$

képletek definiálják.

**12.3. tétel (Perron-tétel: egyszeres és domináns sajátérték).** *Ha $\mathbf{A}$ pozitív mátrix, és $r = \varrho(\mathbf{A})$, akkor*

1. *az $r$ sajátérték algebrai multiplicitása 1,*
2. *$r$ domináns, azaz minden további $\lambda$ sajátértékre $|\lambda| < r$.*

**Bizonyítás.** 1. Az előző tételben bizonyítottuk, hogy $r$ geometriai multiplicitása 1. Tegyük fel, hogy van olyan $\mathbf{v} > \mathbf{0}$ általánosított sajátvektor, melyre $(\mathbf{A} - r\mathbf{I})\mathbf{v} = \mathbf{p}$, azaz $\mathbf{A}\mathbf{v} = r\mathbf{v} + \mathbf{p}$. Könnyen elérhető a $\mathbf{p}$ egy megfelelő $d$ konstansszorosának hozzáadásával, hogy pozitív általánosított sajátvektort találjunk, ugyanis $(\mathbf{A} - r\mathbf{I})(\mathbf{v} + d\mathbf{p}) = \mathbf{p} + d(\mathbf{A} - r\mathbf{I})\mathbf{p} = \mathbf{p}$, így ha $\mathbf{v}$ egy Jordan-lánc $\mathbf{p}$ előtti eleme, akkor $\mathbf{v} + d\mathbf{p}$ is. Legyen tehát $\mathbf{v} > \mathbf{0}$. Ekkor $\mathbf{A}\mathbf{v} = r\mathbf{v} + \mathbf{p} > r\mathbf{v}$, ami a 12.2. tétel második részének bizonyítása szerint ellentmondásra vezet. $\mathbf{A}$-nak tehát nincs $r$-hez tartozó általánosított sajátvektora, így algebrai multiplicitása 1.

2. Belátjuk, hogy ha $\lambda$ az $\mathbf{A}$ egy sajátértéke, akkor $|\lambda| < r$. Indirekt módon bizonyítunk. Legyen $|\lambda| = r$, $\mathbf{x}$ pedig egy $\lambda$-hoz tartozó sajátvektor. Az előző tétel bizonyításának 2. pontjában leírtakat ismételve a komplex számok összegére vonatkozó háromszög-egyenlőtlenséget alkalmazva kapjuk, hogy

$$\sum_{j=1}^{n} a_{ij} |x_j| \leqslant \left| \sum_{j=1}^{n} a_{ij} x_j \right| = |\lambda| |x_i|. \tag{12.4}$$

Mint azt beláttuk, ekkor $(|x_1|, |x_2|, \ldots, |x_n|)$ sajátvektor, a hozzá tartozó sajátérték $r = |\lambda|$, és a (12.4) egyenlőtlenségben egyenlőségnek kell állnia. A komplex számokra vonatkozó $|z_1 + \cdots + z_k| = |z_1| + \cdots + |z_k|$ egyenlőség csak akkor áll fenn, ha mindegyik komplex szám azonos argumentumú. Ez esetünkben azt jelenti, hogy van olyan $\varphi$ szög, hogy minden $i$-re $x_i = \mathrm{e}^{\mathrm{i}\varphi}|x_i|$. Eszerint $\mathbf{x} = \mathrm{e}^{\mathrm{i}\varphi}\mathbf{p}$, tehát $\lambda = r$. $\square$

> *Tipográfiai különbség van az imaginárius egység álló i-je és a változó index dőlt $i$-je között!*

### Nemnegatív mátrixok

A pozitív mátrixok Perron tételeiben kimondott tulajdonságai közül változtatás nélkül egyik sem marad érvényben nemnegatív mátrixokra. Például

- a $\begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}$ mátrix nemnegatív, de mivel mindkét sajátértéke 0, ezért spektrálsugara is 0,
- az $\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$ mátrix spektrálsugara 1, de az 1 kétszeres sajátérték, és több lineárisan független pozitív sajátvektor is tartozik hozzá,
- a $\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$ mátrix sajátértékei 1 és $-1$, így spektrálsugara ugyancsak 1, de a spektrálkörön több különböző sajátértéke is van,
- az $\begin{bmatrix} 1 & 0 \\ 1 & 1 \end{bmatrix}$ mátrixnak nincs pozitív sajátvektora.

Ugyanakkor az sem mondható, hogy ha egy nemnegatív mátrixnak vannak 0 elemei, akkor nem teljesülnek a Perron-tételek állításai. Például

- az $\begin{bmatrix} 1 & 1 \\ 2 & 0 \end{bmatrix}$ mátrix nemnegatív, sajátértékei 2, $-1$, spektrálsugara tehát 2, ami egyszeres sajátérték, és a spektrálkörön az egyetlen sajátérték, a hozzá tartozó $(1, 1)$ sajátvektor pozitív, és ennek konstansszorosait kivéve más pozitív sajátvektor nincs, mert a $-1$-hez tartozó sajátvektor $(1, -2)$.

A Perron-tételek állításaiból némi gyengítés után, de még az összes nemnegatív mátrixra érvényes marad a következő állítás:

**12.4. tétel (Perron–Frobenius-tétel – gyenge változat).** *Ha $\mathbf{A}$ nemnegatív mátrix, akkor az $r = \varrho(\mathbf{A})$ spektrálsugár sajátértéke $\mathbf{A}$-nak, melyhez tartozik nemnegatív sajátvektor.*

**Bizonyítás.** A bizonyítás alapötlete, hogy az $\mathbf{A}$ nemnegatív mátrixot pozitív mátrixokkal közelítjük, melyekre használhatók Perron-tételei. Legyen

$$\mathbf{A}_k = \mathbf{A} + \frac{1}{k} \begin{bmatrix} 1 & 1 & \ldots & 1 \\ 1 & 1 & \ldots & 1 \\ \vdots & \vdots & \ddots & \vdots \\ 1 & 1 & \ldots & 1 \end{bmatrix}, \quad k \in \mathbb{N}.$$

Jelölje $\mathbf{A}_k$ spektrálsugarát $r_k$, Perron-vektorát $\mathbf{p}_k$, az $\mathbf{A}$ mátrix spektrálsugarát $r$. A $\mathbf{p}_k$ vektorok korlátos halmaz alkotnak $\mathbb{R}^n$-ben, mivel mindegyik koordinátájuk 0 és 1 közé esik, így benne vannak az egységkockában. A Bolzano–Weierstrass-tétel szerint kiválasztható közülük egy konvergens $\mathbf{p}_{k_m}$ részsorozat. A határértéket jelölje $\mathbf{p}$. Megmutatjuk, hogy $\mathbf{p}$ az $\mathbf{A}$-nak $r$-hez tartozó sajátvektora, és hogy $\mathbf{p} \geqslant \mathbf{0}$, de $\mathbf{p} \neq \mathbf{0}$. Mivel $\mathbf{p}_k > \mathbf{0}$, ezért a határértékéről azt tudjuk, hogy $\mathbf{p} \geqslant \mathbf{0}$. Tekintsük a folytonos $f(\mathbf{x}) = \sum_{i=1}^{n} x_i$ függvényt. Mivel $f(\mathbf{p}_{k_m}) = 1$, ezért $f(\mathbf{p}) = 1$ is fennáll, így $\mathbf{p} \neq \mathbf{0}$.

Tekintsük ezután az $r_k$ sorozatot. A ?? tétel szerint, $\mathbf{A}_1 > \mathbf{A}_2 > \ldots \mathbf{A}_k > \cdots > \mathbf{A}$, így $r_1 \geqslant r_2 \geqslant \ldots \geqslant r_k \geqslant r$, azaz az $r_k$ sorozat monoton csökkenő, és alulról korlátos, tehát konvergens. Határértékét jelölje $\hat{r}$. Ez egyúttal az $r_{k_m}$ részsorozatnak is határértéke. A fentiek szerint $\hat{r} \geqslant r$. Másrészt

$$\mathbf{A}\mathbf{p} = \mathbf{A}\big(\lim_{m\to\infty} \mathbf{p}_{k_m}\big) = \lim_{m\to\infty} \mathbf{A}\mathbf{p}_{k_m} = \lim_{m\to\infty} r_{k_m}\mathbf{p}_{k_m} = \hat{r}\mathbf{p}.$$

Tehát $\hat{r}$ sajátérték, akkor viszont $\hat{r} \leqslant r$. Így $\hat{r} = r$ és $\mathbf{A}\mathbf{p} = r\mathbf{p}$. $\square$

A következőkben két olyan tételt mondunk ki, melyek a nemnegatív – és így a pozitív – mátrixokra korlátozás nélkül érvényesek.

**12.5. tétel (Collatz–Wielandt-tétel).** *Az $\mathbf{A} \geqslant \mathbf{O}$ mátrix $r$ spektrálsugarára*

$$r = \max_{\substack{\mathbf{x} \\ \mathbf{0} \neq \mathbf{x} \geqslant \mathbf{0}}} \min_{\substack{1 \leqslant i \leqslant n \\ x_i \neq 0}} \frac{[\mathbf{A}\mathbf{x}]_i}{x_i}. \tag{12.5}$$

> *Másként megfogalmazva:*
> $$r = \max_{\substack{\mathbf{x} \\ \mathbf{0} \neq \mathbf{x} \geqslant \mathbf{0}}} \max_{c\mathbf{x} \leqslant \mathbf{A}\mathbf{x}} c \tag{12.6}$$

A képletek úgy értendők, hogy minden $\mathbf{x}$ vektorra kiszámítjuk az $[\mathbf{A}\mathbf{x}]_i/x_i$ törtek minimumát, és ezen értékek maximumát vesszük, ha $\mathbf{x}$ végigfut a nemnegatív, de nullvektortól különböző vektorokon. Az $x_i = 0$ esetet a keresésből kizártuk, de mondhattuk volna azt is, hogy a tört ekkor legyen $\infty$, így nem változna a minimum. A második képletben minden $\mathbf{x}$ vektorra meghatározzuk azt a legnagyobb $c$ számot, melyre $c\mathbf{x} \leqslant \mathbf{A}\mathbf{x}$, majd vesszük az így kapott $c$ értékek maximumát.

**Bizonyítás.** A két megfogalmazás nyilván ekvivalens, hisz ha egy adott $\mathbf{x} \geqslant \mathbf{0}$ vektorra $c$ az $\frac{[\mathbf{A}\mathbf{x}]_i}{x_i}$ törtek minimuma, akkor $c$ egyúttal a legnagyobb olyan szám, melyre $c\mathbf{x} \leqslant \mathbf{A}\mathbf{x}$.

Először pozitív $\mathbf{A}$ mátrixra bizonyítunk. Legyen $\mathbf{q}$ a bal Perron-vektor, $r$ a spektrálsugár. Ekkor a $\mathbf{q}^{\mathsf{T}}\mathbf{x} > 0$ számmal való osztás lehetőségét is használva

$$c\mathbf{x} \leqslant \mathbf{A}\mathbf{x} \quad \rightsquigarrow \quad c\mathbf{q}^{\mathsf{T}}\mathbf{x} \leqslant \mathbf{q}^{\mathsf{T}}\mathbf{A}\mathbf{x} = r\mathbf{q}^{\mathsf{T}}\mathbf{x} \quad \rightsquigarrow \quad c \leqslant r.$$

Másrészt az $\mathbf{x} = \mathbf{p}$ vektorra $r\mathbf{p} = \mathbf{A}\mathbf{p}$, tehát a lehetséges $c$ értékek maximuma $r$.

Ezután marad az $\mathbf{A} \geqslant \mathbf{O}$ eset. Az előző tétel bizonyításában használt ötletet alkalmazzuk. Jelöljük $\mathbf{q}_k$-val az ott definiált $\mathbf{A}_k$ mátrix bal Perron-vektorát. Ekkor egy rögzített $\mathbf{x} \geqslant \mathbf{0}$, $\mathbf{x} \neq \mathbf{0}$ vektorra

$$0 \leqslant c\mathbf{x} \leqslant \mathbf{A}\mathbf{x} \leqslant \mathbf{A}_k\mathbf{x} \quad \rightsquigarrow \quad c\mathbf{q}_k^{\mathsf{T}}\mathbf{x} \leqslant \mathbf{q}_k^{\mathsf{T}}\mathbf{A}_k\mathbf{x} = r_k\mathbf{q}_k^{\mathsf{T}}\mathbf{x} \quad \rightsquigarrow \quad c \leqslant r_k.$$

Így $c \leqslant \lim_k r_k = r$, amiből az előzőekhez hasonlóan az $\mathbf{x} = \mathbf{p}$ vektorra $r\mathbf{p} = \mathbf{A}\mathbf{p}$ adódik, tehát a lehetséges $c$ értékek maximuma $r$. $\square$

**12.6. tétel (Nemnegatív mátrixok spektrálsugarának becslése).** *Ha $\mathbf{A} \geqslant \mathbf{O}$, akkor a spektrálsugár a sorösszegek minimuma és maximuma, illetve az oszlopösszegek minimuma és maximuma közé esik, azaz*

$$\min_i \left\{ \sum_{j=1}^{n} a_{ij} \right\} \leqslant \varrho(\mathbf{A}) \leqslant \max_i \left\{ \sum_{j=1}^{n} a_{ij} \right\}$$

$$\min_j \left\{ \sum_{i=1}^{n} a_{ij} \right\} \leqslant \varrho(\mathbf{A}) \leqslant \max_j \left\{ \sum_{i=1}^{n} a_{ij} \right\}$$

**Bizonyítás.** Az első egyenlőtlenség felső korlátját bizonyítja, hogy minden Gerschgorin kör benne van a 0 közepű $\sum_{j=1}^{n} a_{ij}$ sugarú körben.

A bal oldali egyenlőtlenség a Collatz–Wielandt-tételből következik, ha ugyanis $\mathbf{x} = \mathbf{1}$, akkor akkor az $[\mathbf{A}\mathbf{x}]_i/x_i$ hányados épp a sorösszeg, tehát annak minimuma kisebb vagy egyenlő $\varrho(\mathbf{A})$-nál.

A második egyenlőtlenségeket megkapjuk, ha az első $\mathbf{A}^{\mathsf{T}}$-ra alkalmazzuk, melynek spektruma és így spektrálsugara is azonos $\mathbf{A}$-éval. $\square$

### Irreducibilis mátrixok

Az előző szakaszban láttuk, hogy Perron tételei nem maradnak érvényben általában, de vannak mátrixok, amelyekre igen. Frobenius talált rá arra a könnyen ellenőrizhető feltételre, mely alapján eldönthető, hogy egy nemnegatív mátrix melyik csoportba tartozik: e feltétel az irreducibilitás.

**12.7. állítás (Reducibilis és irreducibilis mátrixok).** *Az $\mathbf{A} \geqslant \mathbf{O}$ mátrix pontosan akkor* reducibilis*, ha a sorok és oszlopok azonos permutációjával*

$$\begin{bmatrix} \mathbf{X} & \mathbf{Y} \\ \mathbf{O} & \mathbf{Z} \end{bmatrix}$$

*alakra hozható, ahol $\mathbf{X}$ és $\mathbf{Z}$ négyzetes mátrixok. Azaz létezik olyan $\mathbf{P}$ permutáló mátrix, hogy $\mathbf{P}\mathbf{A}\mathbf{P}^{\mathsf{T}}$ a fenti alakú. Pontosan azok a mátrixok* irreducibilisek*, amelyek nem hozhatók ilyen alakra.*

**Bizonyítás.** Ha nemnegatív mátrix hatványait vizsgáljuk, és csak az a kérdés, hogy a mátrix egy adott helyén hányadik hatványban lesz az érték pozitív, akkor a számok nagysága nem számít, csak pozitív vagy zérus volta. Ez a következő ötlethez vezet. Tekintsük azt az gráfot, amelyben az $i$-edik csúcsból a $j$-edikbe pontosan akkor fut irányított él, ha $a_{ij} > 0$. E gráf $\mathbf{G}$ szomszédsági mátrixa úgy kapható meg az $\mathbf{A}$-ból, hogy a pozitív számokat 1-re cseréljük. Könnyen látható, hogy $\mathbf{G}^2$ mátrix $[\mathbf{G}^2]_{ij}$ eleme pontosan akkor pozitív, ha az $i$-edik csúcsból vezet 2-hosszú irányított út a $j$-edikbe. Sőt, általában $[\mathbf{G}^k]_{ij}$ eleme pontosan akkor pozitív, ha az $i$-edik csúcsból vezet $k$-hosszú irányított út a $j$-edik csúcsba. Így $\mathbf{A}$ pontosan akkor irreducibilis, ha a fent hozzárendelt gráfjában bármely két csúcs között vezet irányított út, azaz ha a gráf *erősen összefüggő*. Eszerint a mátrix pontosan akkor reducibilis, ha gráfjában a csúcsoknak van egy olyan nem üres valódi részhalmaza, amelybe nem vezet kívülről (a komplementer csúcshalmazból) él. A szomszédsági mátrix sorainak és oszlopainak azonos permutációja a gráf csúcsai átszámozásának felel meg. A tételbeli $\begin{bmatrix} \mathbf{X} & \mathbf{Y} \\ \mathbf{O} & \mathbf{Z} \end{bmatrix}$ mátrixhoz egy olyan gráf tartozik, melynek első $k$ csúcsába nem vezet él, ha $\mathbf{X}$ egy $k \times k$-as mátrix. Ez bizonyítja állításunkat. $\square$

**12.8. példa.** *Döntsük el, hogy az alábbi mátrixok közül melyik reducibilis, melyik irreducibilis! (Segítségül a nemnulla mátrixelemekről leolvasható a sor- és oszlopindex.)*

$$\mathbf{A} = \begin{bmatrix} 11 & 0 & 13 & 14 & 0 \\ 21 & 22 & 23 & 24 & 25 \\ 31 & 0 & 33 & 34 & 0 \\ 41 & 0 & 43 & 44 & 0 \\ 51 & 52 & 53 & 54 & 55 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 0 & 12 & 0 & 0 & 0 \\ 0 & 0 & 0 & 24 & 25 \\ 31 & 0 & 0 & 0 & 0 \\ 0 & 0 & 43 & 0 & 0 \\ 0 & 52 & 0 & 54 & 0 \end{bmatrix}.$$

**Megoldás.** Az $\mathbf{A}$ mátrixon könnyű észrevenni, hogy reducibilis, mert az első és utolsó sorok és oszlopok cseréjével, vagyis a következő $\mathbf{P}$ permutáló mátrixszal a kívánt alakra hozható:

$$\mathbf{P} = \begin{bmatrix} 0 & 0 & 0 & 0 & 1 \\ 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 & 0 \\ 1 & 0 & 0 & 0 & 0 \end{bmatrix}, \quad \mathbf{P}\mathbf{A}\mathbf{P}^{\mathsf{T}} = \left[\begin{array}{cc|ccc} 55 & 52 & 53 & 54 & 51 \\ 25 & 22 & 23 & 24 & 21 \\ \hline 0 & 0 & 33 & 34 & 31 \\ 0 & 0 & 43 & 44 & 41 \\ 0 & 0 & 13 & 14 & 11 \end{array}\right].$$

Nem ez az egyetlen permutáció, pl. az $1 \to 3 \to 4 \to 5 \to 2 \to 1$ csere is megteszi:

$$\mathbf{P} = \begin{bmatrix} 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 1 \\ 1 & 0 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 & 0 \end{bmatrix}, \quad \mathbf{P}\mathbf{A}\mathbf{P}^{\mathsf{T}} = \left[\begin{array}{cc|ccc} 22 & 25 & 21 & 23 & 24 \\ 52 & 55 & 51 & 53 & 54 \\ \hline 0 & 0 & 11 & 13 & 14 \\ 0 & 0 & 31 & 33 & 34 \\ 0 & 0 & 41 & 43 & 44 \end{array}\right].$$

Az $\mathbf{A}$ mátrixhoz rendelt gráf a 12.1. ábrán látható első gráf. Vegyük észre, hogy a $\{2, 5\}$ ponthalmazba nem fut él az $\{1, 3, 4\}$ halmazból. Ez azt jelenti, hogy ha a csúcsokat átszámozzuk az 5-ös és 1-es sorszám fölcserélésével, akkor az $\{1, 2\}$ halmazba nem fut él a $\{3, 4, 5\}$ halmazból. Ez épp azt jelenti, hogy bármely mátrixban, melynek ez a gráfja, a bal alsó $3 \times 2$-es részmátrixa zérusmátrix. Tehát a mátrix reducibilis.

A $\mathbf{B}$ mátrixban több 0 van, azt hinnénk, ez inkább lesz reducibilis, mégsem találunk megfelelő $\mathbf{P}$ permutáló mátrixot. Gráfja erősen összefüggő, például az 1-2-5-4-3-1 útvonalon bármely pontból bármely másik elérhető. Tehát $\mathbf{B}$ irreducibilis. $\square$

> *12.1. ábra: Az $\mathbf{A}$ és $\mathbf{B}$ mátrixokhoz rendelt két gráf.*

> *Fontos megjegyezni, hogy a 12.7. állítás a* sorok és oszlopok azonos permutációjáról *szól, tehát nem elég a mátrixot elemi sorműveletekkel $\begin{bmatrix} \mathbf{X} & \mathbf{Y} \\ \mathbf{O} & \mathbf{Z} \end{bmatrix}$ alakra hozni. Ugyanazokat a műveleteket az oszlopokra is alkalmazni kell. Például a*
> $$\begin{bmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{bmatrix}$$
> *mátrix irreducibilis, hisz egy 3-hosszú irányított kör szomszédsági mátrixa, de az első két sor cseréje a kívánt alakra hozza. Az első két oszlopot is kicserélve viszont már nem az $\begin{bmatrix} \mathbf{X} & \mathbf{Y} \\ \mathbf{O} & \mathbf{Z} \end{bmatrix}$ alakot kapjuk!*

> *A 12.1 táblázat kiegészíthető a gráfelméleti megfogalmazásokkal:*

| $\mathbf{A}$ | algebrai feltétel | gráfelméleti feltétel |
|---|---|---|
| pozitív: | $\forall i, j\quad a_{ij} > 0$ | irányított teljes gráf |
| primitív: | $\exists k\ \forall i, j\quad a_{ij}^{(k)} > 0$ | bármely két csúcs között fut $k$-hosszú út |
| irreducibilis: | $\forall i, j\ \exists k\quad a_{ij}^{(k)} > 0$ | erősen összefüggő |
| reducibilis: | $\exists i, j\ \forall k\quad a_{ij}^{(k)} = 0$ | nem erősen összefüggő |

Frobenius vette észre és bizonyította, hogy az irreducibilitás az a feltétel, melynek fennállása esetén a nemnegatív mátrixokra is kiterjeszthetők a 12.2. tétel állításai.

**12.9. tétel (Perron–Frobenius-tétel – erős változat).** *Ha az $\mathbf{A}$ nemnegatív mátrix irreducibilis, és $r = \varrho(\mathbf{A})$ jelöli a spektrálsugarát, akkor*

1. *$r > 0$,*
2. *$r$ sajátértéke $\mathbf{A}$-nak, melyhez tartozik pozitív sajátvektor,*
3. *$\mathbf{A}$-nak e pozitív sajátvektor skalárszorosain kívül nincs más nemnegatív sajátvektora,*
4. *$r$ egyszeres sajátérték.*

### Primitív és imprimitív mátrixok

A Perron-tétel állításai közül nem maradt igaz az irreducibilis nemnegatív mátrixokra az, hogy a spektrálkörön csak egyetlen sajátérték van. Ez a tulajdonság is megmarad azonban a primitív mátrixokra.

**12.10. tétel (Feltétel mátrix primitivitására).** *Ha $\mathbf{A} \geqslant \mathbf{O}$ irreducibilis és főátlójában van pozitív elem, akkor primitív.*

**Bizonyítás.** Legyen a főátló $i$-edik eleme pozitív. Ha $\mathbf{A}$ irreducibilis, akkor bármely csúcsból vezet irányított út az $i$-edik csúcsba. Közülük a leghosszabb út hosszát jelölje $k_1$. Ugyanígy bármely csúcsba vezet út az $i$-edik csúcsból. Ezek leghosszabbikának hosszát jelölje $k_2$. Ezután bármely csúcsból bármely csúcsba eljuthatunk $k = k_1 + k_2$ hosszú irányított úton az $i$-edik csúcs érintésével, és az ott lévő hurokélen megfelelő szmú kört téve. $\square$

**12.11. példa (Primitív mátrixok).** *Döntsük el, hogy az*

$$\mathbf{A} = \begin{bmatrix} 0 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 0 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{bmatrix}, \quad \mathbf{C} = \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{bmatrix},$$

$$\mathbf{D} = \begin{bmatrix} 0 & 1 & 1 \\ 1 & 0 & 0 \\ 1 & 0 & 0 \end{bmatrix}, \quad \mathbf{E} = \begin{bmatrix} 0 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & 1 & 0 \end{bmatrix}, \quad \mathbf{F} = \begin{bmatrix} 0 & 0 & 6 \\ 7 & 0 & 8 \\ 0 & 9 & 0 \end{bmatrix}$$

*mátrixok közül melyik primitív! Egyúttal vizsgáljuk irreducibilitásukat is!*

**Megoldás.** A mátrixok gráfját fölrajzolva látjuk, hogy csak $\mathbf{A}$ reducibilis, így az nem primitív. A $\mathbf{B}$ mátrix pozitív, így irreducibilis és primitív is. $\mathbf{C}^3 = \mathbf{I}$, így $\mathbf{C}^{3m} = \mathbf{I}$, tehát $\mathbf{C}$ egyik hatványa sem lesz pozitív, tehát $\mathbf{C}$ imprimitív. A $\mathbf{D}$ mátrix ugyan irreducibilis, de négyzete

$$\mathbf{D}^2 = \begin{bmatrix} 2 & 0 & 0 \\ 0 & 1 & 1 \\ 0 & 1 & 1 \end{bmatrix}$$

már nem, így a $\mathbf{D}^{2m}$ hatványok sem, tehát $\mathbf{D}$ egyik hatványa sem lesz pozitív, így $\mathbf{D}$ imprimitív. Az $\mathbf{E}$ mátrix irreducibilis és a főátlóján van pozitív elem, ezért primitív. Az $\mathbf{F}$ mátrixra

$$\mathbf{F}^5 = \begin{bmatrix} 27216 & 20412 & 31104 \\ 36288 & 54432 & 57348 \\ 23814 & 46656 & 54432 \end{bmatrix} > \mathbf{O},$$

tehát $\mathbf{F}$ primitív, de e számolás egyszerűbbel is helyettesíthető. Elég ugyanis csak azt nézni, hogy egy hatványban egy elem 0 vagy nem, azaz az $\mathbf{F}$ helyett csak azzal a logikai értékeket tartalmazó $\hat{\mathbf{F}}$ mátrixszal kell számolni, melyet $\mathbf{F}$-ből úgy kapunk, hogy a pozitív elemeket 1-re cseréljük (1, ha az elem pozitív, 0, ha nem). Így a mátrixszorzásokban végzett szorzások helyett az és (AND), az összeadások helyett a vagy (OR) logikai műveletet elég elvégezni. E számolással az $\mathbf{F}$-hatványok elemeinek pozitivitása leolvasható a következő sorozatból:

$$\begin{bmatrix} 0 & 0 & 1 \\ 1 & 0 & 1 \\ 0 & 1 & 0 \end{bmatrix} \to \begin{bmatrix} 0 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end{bmatrix} \to \begin{bmatrix} 1 & 0 & 1 \\ 1 & 1 & 1 \\ 0 & 1 & 1 \end{bmatrix} \to \begin{bmatrix} 0 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{bmatrix} \to \begin{bmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{bmatrix}$$

Tehát innen is látható, hogy $\mathbf{F}^5 > \mathbf{O}$, vagyis $\mathbf{F}$ primitív. Még e számoláson is sokat gyorsíthatunk, ha mindig az előző eredményt emeljük négyzetre. Ekkor persze nem tudjuk meg, hogy melyik a legkisebb hatvány, amely már pozitív. Az $\mathbf{F}$ mátrix esetén a következő sorozatot

kapjuk:

$$
\begin{bmatrix} 0 & 0 & 1 \\ 1 & 0 & 1 \\ 0 & 1 & 0 \end{bmatrix}
\rightarrow
\begin{bmatrix} 0 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end{bmatrix}
\rightarrow
\begin{bmatrix} 0 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{bmatrix}
\rightarrow
\begin{bmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{bmatrix}
$$

Eszerint $\mathbf{F}^8 > \mathbf{O}$, tehát $\mathbf{F}$ primitív. $\square$

> *E példa tanulságait összefoglalandó elsőként kiemeljük, hogy a primitivitás eldöntésében gyakran elég az adott mátrix helyett az annak megfelelő 0–1-mátrixot vizsgálni, és szükség esetén a mátrixszorzásban a szorzást az OR, az összeadást az AND műveletre cserélve számolni.*

> *A $\mathbf{C}$ mátrixhoz hasonlóan megmutatható, hogy minden permutáló mátrix imprimitív.*

> *Nyilvánvaló, hogy ha egy nemnegatív mátrix $k$-adik hatványa pozitív, akkor minden $k$-nál nagyobb hatványa is pozitív. A $\mathbf{C}$ és $\mathbf{D}$ mátrixoknál ezt kihasználtuk azzal, hogy mutattunk végtelen sok nem pozitív hatványt, mellyel bizonyítottuk, hogy nem primitív.*

> *A $\mathbf{D}$ mátrix azt mutatja, hogy irreducibilis mátrix hatványa lehet reducibilis, kizárva ezzel annak lehetőségét, hogy primitív legyen.*

**12.12. tétel (Perron–Frobenius-tétel – sajátértékek a spektrálkörön).** *Ha az $\mathbf{A}$ nemnegatív mátrix irreducibilis, és $r = \varrho(\mathbf{A})$, akkor*

1. *az $\mathbf{A}$ mátrixnak a spektrálkör határára eső sajátértékei $1$ multiplicitásúak, és $\{r, r\varepsilon, \dots, r\varepsilon^{k-1}\}$ alakba írhatók, ahol $\varepsilon = e^{2\pi i/k}$, továbbá*

2. *$\mathbf{A}$ pontosan akkor primitív, ha a spektrálkörén csak egy sajátérték van, azaz minden $\lambda \neq r$ sajátértékére $|\lambda| < r$.*

3. *$\mathbf{A}$ pontosan akkor primitív, ha létezik a $\lim_{k\to\infty}(\mathbf{A}/r)^k$ határérték. Ekkor e határérték megegyezik az $\mathbf{A}$ spektrálfelbontásában szereplő, az $r$ sajátértékhez tartozó vetítő mátrixszal, azaz*

$$
\lim_{k\to\infty}(\mathbf{A}/r)^k = \frac{\mathbf{p}\mathbf{q}^{\mathsf{T}}}{\mathbf{q}^{\mathsf{T}}\mathbf{p}},
$$

*ahol $\mathbf{p}$ a Perron-vektor, $\mathbf{q}$ a bal Perron vektor.*

## Feladatok

**12.1.** Legyen

$$
\mathbf{A} = \begin{bmatrix} 6 & 1 & 1 \\ 5 & 6 & 1 \\ 6 & 4 & 4 \end{bmatrix}
$$

Számítsuk ki a két Perron-vektort, és ellenőrizzük Perron tételét.

**12.2.** Egy pozitív elemű 4-edrendű mátrix három sajátértéke $1$, $2i$, $-2i$. A $-3$, $2$, $3$, $4i$, $4$ számok közül válasszuk ki mindegyik olyat, amelyik a negyedik sajátérték lehet!

**12.3.** Mutassuk meg, hogy ha az $\mathbf{A} > \mathbf{O}$ mátrix minden oszlopában vagy minden sorában $c$ az elemek összege, akkor $c$ a spektrálsugár.

### Nemnegatív mátrixok

**12.4.** Egy nemnegatív mátrix az $(4,6,5)$ vektort az $(5,6,7)$ vektorba viszi. Mutassuk meg, hogy spektrálsugara legalább $1$.

**12.5.** Legyen $\mathbf{x} > \mathbf{0}$ tetszőleges, és $\mathbf{A} \geqslant \mathbf{O}$. Igazoljuk az alábbi egyenlőtlenségeket!

$$
\min_i \left\{ \sum_{j=1}^n a_{ij}\frac{x_j}{x_i} \right\} \leqslant \varrho(\mathbf{A}) \leqslant \max_i \left\{ \sum_{j=1}^n a_{ij}\frac{x_j}{x_i} \right\}
$$

$$
\min_j \left\{ \sum_{i=1}^n a_{ij}\frac{x_i}{x_j} \right\} \leqslant \varrho(\mathbf{A}) \leqslant \max_j \left\{ \sum_{i=1}^n a_{ij}\frac{x_i}{x_j} \right\}
$$

(Ötlet: ha $\mathbf{D} = \operatorname{diag}(x_1, \dots, x_n)$, akkor $\mathbf{B} = \mathbf{D}^{-1}\mathbf{A}\mathbf{D}$ hasonló $\mathbf{A}$-hoz, így $\varrho(\mathbf{B}) = \varrho(\mathbf{A})$. Alkalmazzuk a 12.6. tételt.)

**12.6.** Az előző feladat eredményét használva becsüljük meg az

$$
\begin{bmatrix} 6 & 8 & 0 \\ 1 & 2 & 3 \\ 6 & 4 & 2 \end{bmatrix}, \quad \text{és a} \quad \begin{bmatrix} 6 & 3 & 7 \\ 6 & 2 & 2 \\ 1 & 1 & 2 \end{bmatrix}
$$

mátrix spektrálsugarát az $\mathbf{x} = (2,1,2)$ vektorral. Az eredmény alapján mit mondhatunk $\mathbf{x}$-ről?

### Irreducibilis mátrixok

**12.7.** Melyik irreducibilis az alábbi mátrixok közül? Amelyik nem, azt melyik permutáló mátrix viszi $\left[\begin{smallmatrix} \mathbf{A} & \mathbf{B} \\ \mathbf{O} & \mathbf{C} \end{smallmatrix}\right]$ alakba? Amelyik irreducibilis, annak mennyi a spektrálsugara és Perron-vektora?

$$
\mathbf{R}_1 = \begin{bmatrix}
0 & 1 & 0 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 0 & 1 & 0 \\
0 & 0 & 0 & 0 & 0 & 1 \\
1 & 0 & 0 & 0 & 0 & 0
\end{bmatrix}, \quad
\mathbf{R}_2 = \begin{bmatrix}
0 & 0 & 0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 & 0 & 0 \\
1 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 1
\end{bmatrix}.
$$

**12.8.** Keressünk egy-egy permutáló mátrixot az

$$
\mathbf{A} = \begin{bmatrix} 1 & 0 & 0 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 0 & 0 & 1 \end{bmatrix} \quad
\mathbf{B} = \begin{bmatrix} 1 & 0 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 0 & 1 & 1 \\ 1 & 0 & 1 & 1 \end{bmatrix} \quad
\mathbf{C} = \begin{bmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 0 & 0 \\ 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \end{bmatrix}
$$

mátrixok mindegyikéhez, mely bizonyítja reducibilitásukat!

## Sztochasztikus mátrixok

> *A nemnegatív mátrixok legfontosabb példái a sztochasztikus mátrixok, melyek minden sora vagy minden oszlopa valószínűségeloszlás.*

### Markov-láncok, sztochasztikus mátrixok

A nemnegatív vektort *sztochasztikusnak* nevezzük, ha koordinátáinak összege $1$ (azaz $1$-normája $1$). A nemnegatív $\mathbf{A}$ mátrix *sztochasztikus*, ha minden oszlopvektora sztochasztikus.

> *A sztochasztikus $\mathbf{A}$ mátrixot bármely sztochasztikus $\mathbf{v}$ vektorral szorozva sztochasztikus vektort kapunk, ugyanis ha $\mathbf{u} = \mathbf{A}\mathbf{v}$, akkor*

$$
\sum_{i=1}^m u_i = \sum_{i=1}^m \sum_{j=1}^n a_{ij}v_j = \sum_{j=1}^n v_j \sum_{i=1}^m a_{ij} = \sum_{j=1}^n v_j = 1.
$$

> *Az előző megjegyzés azonnali következménye, hogy sztochasztikus mátrixok szorzata sztochasztikus mátrix.*

> *Az $\mathbf{A}$ mátrix pontosan akkor sztochasztikus, ha $\mathbf{A}^{\mathsf{T}}$-nak az $\mathbf{1} = (1,1,\dots,1)$ vektor a sajátvektora $1$ sajátértékkel.*

> *Másként fogalmazva az $\mathbf{A}$ pontosan akkor sztochasztikus mátrix, ha az $\mathbf{1}^{\mathsf{T}}$ vektor bal sajátvektora $1$ sajátértékkel.*

> *Mivel az $1$ sajátértékhez pozitív sajátvektor tartozik, ezért $1$ a spektrálsugár, azaz $\rho(\mathbf{A}) = 1$.*

**12.13. tétel (Sztochasztikus mátrix sajátértékei).** *Ha $\mathbf{S}$ sztochasztikus mátrix, akkor*

1. *$\lambda = 1$ egy sajátérték,*

2. *a spektrálsugara $1$, és*

3. *ha $\mathbf{S}$ primitív, akkor $\lambda \neq 1$ esetén $|\lambda| < 1$.*

### Duplán sztochasztikus mátrixok

Az $\mathbf{A} \in \mathbb{R}^{n\times n}$ nemnegatív mátrixot *duplán sztochasztikusnak* nevezzük, ha minden oszlop- és sorösszege $1$.

> *Mivel a duplán sztochasztikus mátrixok sztochasztikusak, ezért a sztochasztikus mátrixokra kimondott állítások rájuk is teljesülnek.*

> *Duplán sztochasztikus mátrixok szorzata is duplán sztochasztikus. (Ennek egyik felét beláttuk a sztochasztikus mátrixoknál, a másik fele transzponálással bizonyítható.)*

> *Minden permutáló mátrix duplán sztochasztikus.*

> *Ha $\mathbf{U} = [u_{ij}]$ unitér, akkor az $\mathbf{A} = [|u_{ij}|^2]$ mátrix duplán sztochasztikus, ugyanis $\sum_{i=1}^n |u_{ij}|^2 = \sum_{j=1}^n |u_{ij}|^2 = 1$.*

> *Duplán sztochasztikus mátrixok konvex lineáris kombinációja is duplán sztochasztikus, azaz ha $\mathbf{S}_1, \mathbf{S}_2 \dots, \mathbf{S}_k$ duplán sztochasztikusak, a $c_1, c_2 \dots, c_k$ számok nemnegatívak és $c_1 + c_2 + \dots + c_k = 1$, akkor $\sum_{i=1}^k c_i\mathbf{S}_i$ is duplán sztochasztikus. Például permutáló mátrixok konvex lineáris kombinációi duplán sztochasztikusak.*

**12.14. tétel (Frobenius–Kőnig-tétel).** *Az $n$-edrendű $\mathbf{A}$ mátrixban pontosan akkor eleme minden kígyónak a $0$, ha $\mathbf{A}$ részmátrixai közt van olyan $s \times t$ méretű zérusmátrix, hogy $s + t = n + 1$.*

**12.15. következmény (Pozitív kígyó).** *Minden duplán sztochasztikus mátrixban van legalább egy kígyó, melynek minden eleme pozitív.*

**Bizonyítás.** Ha a mátrixban nem volna pozitív elemű kígyó, akkor volna benne olyan $s \times t$ méretű zérus részmátrix, amelyre $s + t = n + 1$. E sorokban és oszlopokban szereplő elemek összege $n + 1$, pedig a mátrixban szereplő összes elem összege $n$. Ez az ellentmondás igazolja állításunkat. $\square$

**12.16. tétel (Birkhoff-tétel).** *Minden $n$-edrendű duplán sztochasztikus mátrix előáll permutáló mátrixok konvex lineáris kombinációjaként.*

> *A tétel elegánsabban úgy is megfogalmazható, hogy a duplán sztochasztikus mátrixok az $\mathbb{R}^{n\times n}$ térben olyan konvex poliédert alkotnak, melynek csúcsai a permutáló mátrixok.*

**Bizonyítás.** Bebizonyítjuk, hogy ha $\mathbf{S}$ duplán sztochasztikus, akkor léteznek olyan $c_i \in \mathbb{R}^+$ számok és olyan $\mathbf{P}_i \in \mathbb{R}^{n\times n}$ permutáló mátrixok ($i = 1, 2, \dots, k$), hogy $\mathbf{S} = \sum_{i=1}^k c_i\mathbf{P}_i$. Az $\mathbf{S}$ mátrix pozitív elemeinek $m$ számára vonatkozó teljes indukcióval bizonyítunk.

Az állítás $m = n$ esetén igaz, hisz ekkor $\mathbf{S}$ szükségképpen permutáló mátrix. Tegyük fel, hogy az állítás igaz minden $m$ pozitív elemet tartalmazó mátrixra, és legyen $\mathbf{S}$-nek $m + 1$ pozitív eleme. Mivel $\mathbf{S}$ duplán sztochasztikus, kiválasztható belőle egy pozitív kígyó. A kígyó legkisebb elemét jelölje $a$, a kígyó elemeinek helyére $1$-es írásával kapott permutáló mátrixot pedig $\mathbf{P}$. Ekkor $a\mathbf{P} \leqslant \mathbf{S}$, így $\mathbf{S} - a\mathbf{P}$ nemnegatív. Mivel $a < 1$, ezért értelmes a következő felbontás:

$$
\mathbf{S} = a\mathbf{P} + (1 - a)\left[\frac{1}{1-a}(\mathbf{S} - a\mathbf{P})\right].
$$

Az $\frac{1}{1-a}(\mathbf{S} - a\mathbf{P})$ mátrix duplán sztochasztikus és legalább eggyel kevesebb pozitív eleme van, mint $\mathbf{S}$-nek, ezért az indukciós feltevés szerint felírható $c'_2\mathbf{P}_2 + \dots + c'_m\mathbf{P}_m$ alakban, ahol $c'_2 + \dots + c'_m = 1$. Ekkor viszont $a + (1 - a)(c'_2 + \dots + c'_m) = 1$, tehát az így kapott felbontás valóban konvex lineáris kombináció. $\square$

### A Leontief-modell

A Leontief-modell egy többszektoros gazdaság szektorok közti termék és jövedelemáramlási adatait elemzi egyszerű statisztikai adatok alapján. Tömören összefoglaljuk a modell statikus változatának lényegét. Osszuk a gazdaságot $n$ szektorra (pl. ipar, mezőgazdaság, háztartás). Jelölje $r_{ij}$ – az ún. *ráfordítási együttható* – azt, hogy a $j$-edik szektor egy (pénz)egységnyi kibocsátásához mennyi szükséges az $i$ szektortól. A ráfordítási együtthatók $\mathbf{R}$ mátrixáról feltehető, hogy nem szinguláris, különben valamely ágazat kibocsátása helyettesíthető lenne más ágazatok kibocsátásainak valamely lineáris kombinációjával. Egy gazdaságot zártnak nevezünk, ha kielégíti saját szükségleteit, és fel is használja minden kibocsátását, más szóval termék se ki, se be nem megy a rendszerbe. Jelölje $k_j$ az $j$-edik szektor kibocsátását. Ekkor $r_{ij}k_j$ az $i$-edik szektor által a $j$-edik számára kibocsátott egységek számát, ezek $r_{i1}k_1 + r_{i2}k_2 + \dots + r_{in}k_n$ összege pedig az $i$-edik szektor teljes kibocsát adja, ami feltételeink szerint megegyezik $k_i$-vel. Tehát a $\mathbf{k} = (k_1, \dots, k_n)$ jelöléssel az összes ágazat kibocsátására igaz az

$$
\mathbf{R}\mathbf{k} = \mathbf{k} \tag{12.7}
$$

összefüggés. Ebből az is azonnal látszik, hogy $\mathbf{k}$ az $\mathbf{R}$ mátrix $1$ sajátértékhez tartozó sajátvektora.

**12.17. példa (Leontief zárt modell).** *Egy távoli sziget gazdaságában három nagy ágazat van, áramszolgáltatás (A), élelmiszeripar (B) és szolgáltatóipar (C). A sziget gazdasága zártnak tekinthető. Mit állapíthatunk meg az ágazatok kibocsátásáról, ha az alábbi táblázat oszlopai azt mutatják, hogy egy egységnyi kibocsátáshoz hány egységre van szükség a szektoroktól?*

|     | A   | B   | C   |
| --- | --- | --- | --- |
| A   | 0.1 | 0.6 | 0.1 |
| B   | 0.8 | 0.1 | 0.4 |
| C   | 0.1 | 0.3 | 0.5 |

**Megoldás.** A kibocsátás meghatározása egyszerű sajátértékfeladat, hisz $\mathbf{R}\mathbf{k} = \mathbf{k}$. Az

$$
\mathbf{R} = \begin{bmatrix} 0.1 & 0.6 & 0.1 \\ 0.8 & 0.1 & 0.4 \\ 0.1 & 0.3 & 0.5 \end{bmatrix}
$$

mátrix $1$ sajátértékhez tartozó sajátvektora $(3, 4, 3)t$, ahol $t \in \mathbb{R}$. Eszerint a sziget gazdaságának teljes kibocsájtásából az áramszolgáltatás $30\%$-kal, az élelmiszeripar $40\%$-kal, a szolgáltatóipar $30\%$-kal részesedik. $\square$

A zárt modellel ellentétben a valóságban minden ágazatnak számolnia kell olyan külső kívánság (kereslet vagy követelés) jelenlétével, amit a gazdaságnak teljesítenie kell. Ennek értékét az $i$-edik ágazatra jelölje $d_i$, ezek vektorát $\mathbf{d}$. E vektor tehát tekinthető a nettó kibocsátás vektorának, hisz

$$
d_i = k_i - (r_{i1}k_1 + r_{i2}k_2 + \dots r_{in}k_n),
$$

ami az összes ágazata mátrix alakban $\mathbf{d} = \mathbf{k} - \mathbf{R}\mathbf{k} = (\mathbf{I} - \mathbf{R})\mathbf{k}$. Kérdés, mi biztosítja azt, hogy $\mathbf{I} - \mathbf{R}$ invertálható, és $(\mathbf{I} - \mathbf{R})^{-1}\mathbf{d} > 0$ legyen. Két természetesnek tekinthető feltevéssel élünk:

- az ágazatok mendegyike, ha más ágazatokon keresztül is, de hat a többire,
- van olyan ágazat, mely egy (pénz)egységnyi kibocsátáshoz egy egységnél kevesebbet használ föl, azaz van $\mathbf{R}$-nek olyan oszlopösszege, mely $1$-nél kisebb.

Az első feltevés azt jelenti, hogy bármely $i$ és $j$ ágazatpárra valamely $m$ kitevőre $[\mathbf{R}^m]_{ij} > 0$, azaz $\mathbf{R}$ irreducibilis. (Sőt, mivel mindig akadnak ágazatok, melyek saját magukra is visszahatnak, ezért az is feltehető, hogy $\mathbf{R}$ primitív.)

A második feltevés következménye, hogy van olyan nem zérus $\mathbf{A} \geqslant \mathbf{O}$ mátrix, hogy $\mathbf{R} + \mathbf{A}$ sztochasztikus, vagyis minden oszlopösszege $1$, azaz $\mathbf{1}^{\mathsf{T}}(\mathbf{R} + \mathbf{A}) = \mathbf{1}^{\mathsf{T}}$. Ebből következik, hogy $\rho(\mathbf{R}) < 1$. Indirekt módon tegyük fel, hogy $\rho(\mathbf{R}) = 1$ és legyen $\mathbf{R}$ Perron-vektora $\mathbf{p}$. $\mathbf{p} > \mathbf{0}$, mivel $\mathbf{R}$ nemnegatív és irreducibilis. $\mathbf{A} \geqslant \mathbf{O}$ és $\mathbf{p} > \mathbf{0}$ miatt $\mathbf{A}\mathbf{p} > \mathbf{0}$, így

$$
1 = \mathbf{1}^{\mathsf{T}}\mathbf{p} = (\mathbf{1}^{\mathsf{T}}(\mathbf{R} + \mathbf{A}))\mathbf{p} = 1 + \mathbf{1}^{\mathsf{T}}\mathbf{A}\mathbf{p} > 1,
$$

és ez az ellentmondás igazolja, hogy $\rho(\mathbf{R}) < 1$. Ebből a ??? tételt fölhasználva kapjuk, hogy

$$
(\mathbf{I} - \mathbf{R})^{-1} = \mathbf{I} + \mathbf{R} + \mathbf{R}^2 + \mathbf{R}^3 + \dots > \mathbf{O}.
$$

Így minden $\mathbf{d}$ kívánságvektorhoz egyértelműen létezik egy pozitív $\mathbf{k}$ kibocsátás, nevezetesen $\mathbf{k} = (\mathbf{I} - \mathbf{R})^{-1}\mathbf{d} > 0$. A modellben ez azt jelenti, hogy bármely szektort érintő külső kívánság növekedése az összes ágazat kibocsájtását megnöveli.

**12.18. példa (Leontief nyílt modell).** *Az előző feladatbeli szigeten a három szektor ráfordítási együtthatóinak mátrixa legyen*

|     | A   | B   | C   |
| --- | --- | --- | --- |
| A   | 0.1 | 0.6 | 0.1 |
| B   | 0.7 | 0.1 | 0.3 |
| C   | 0.1 | 0.2 | 0.5 |

*Mekkora a kibocsátás, ha a külső kereslet vektora $\mathbf{d} = (26, 31, 22)$, és hogyan változik a kibocsátás, ha a B szektorban a külső kereslet $31$-ről $36$-ra növekszik?*

**Megoldás.** Az $\mathbf{R}$ spektrálsugara $0.9$ (ez azonnal adódik abból, hogy minden oszlopösszeg $0.9$).

$$
\mathbf{k} = (\mathbf{I} - \mathbf{R})^{-1}\mathbf{d} = \begin{bmatrix} 3.9 & 3.2 & 2.7 \\ 3.8 & 4.4 & 3.4 \\ 2.3 & 2.4 & 3.9 \end{bmatrix} \begin{bmatrix} 26 \\ 31 \\ 22 \end{bmatrix} = \begin{bmatrix} 260 \\ 310 \\ 220 \end{bmatrix}.
$$

A B szektor növekvő külső kereslete minden szektorban a kibocsátás növekedését eredményezi:

$$
\mathbf{k} = (\mathbf{I} - \mathbf{R})^{-1}\mathbf{d} = \begin{bmatrix} 3.9 & 3.2 & 2.7 \\ 3.8 & 4.4 & 3.4 \\ 2.3 & 2.4 & 3.9 \end{bmatrix} \begin{bmatrix} 26 \\ 36 \\ 22 \end{bmatrix} = \begin{bmatrix} 276 \\ 332 \\ 232 \end{bmatrix}.
$$

$\square$

## Megoldások

*12.1. ábra. A 12.7. feladat $\mathbf{R}_1$ és $\mathbf{R}_2$ mátrixaihoz tartozó irányított gráfok.*

**12.1.** Sajátértékek: $10$, $3$, $3$, jobb sajátvektor: $\mathbf{u} = (5, 9, 11)$, bal sajátvektor: $\mathbf{v} = (4, 2, 1)$, a két Perron-vektor: $\mathbf{p} = \frac{1}{25}(5, 9, 11)$, bal sajátvektor: $\mathbf{v} = \frac{1}{7}(4, 2, 1)$.

**12.2.** A spektrálsugár még nincs a sajátértékek közt, így Perron tétele miatt csak a $3$ és a $4$ lehet sajátérték.

**12.3.** Ha $\mathbf{A}$ minden sorösszege $c$, akkor az $\mathbf{1}$ vektor sajátvektor, $c$ sajátértékkel. Mivel $\mathbf{1} > \mathbf{0}$, ezért ez csak a Perron-vektor $n$-szerese lehet, és akkor $c$ a hozzá tartozó sajátérték, így $c$ a spektrálsugár. Hasonlóképp a bal Perron-vektor a másik állítást igazolja.

**12.4.** Mivel a $\min\{5/4, 6/6, 7/5\} = 1$, ezért a Collatz–Wielandt-tétel szerint spektrálsugara is legalább ennyi. (Vagy a tételbeli másik képlettel: mivel a $c(4, 6, 5) \leqslant \mathbf{A} \cdot (4, 6, 5) = (5, 6, 7)$ egyenlőtlenségben $c$ lehetséges maximuma $1$, ezért a spektrálsugár legalább $1$.)

**12.5.** Mivel $\mathbf{D}^{-1} = \operatorname{diag}(1/x_1, \dots, 1/x_n)$, ezért követve az ötletben leírtakat, a 12.6. tétel első képlete a feladat első képletét adja. A $\mathbf{D}\mathbf{A}\mathbf{D}^{-1}$ mátrixból a második képletet kapjuk.

**12.6.** A 12.5. feladat első képlete az első, a második képlete a második mátrixról azt adja, hogy a minimum és a maximum is $10$, így a spektrálsugár $10$, tehát $10$ a domináns sajátérték mindkét esetben, és $\mathbf{x}$ a hozzá tartozó sajátvektor – az első esetben a jobb, a másodikban a bal. (Gondoljuk meg!)

**12.7.** Az irreducibilitás eldönthető a mátrixokhoz rendelt szomszédsági gráfokkal:

$\mathbf{R}_1$ irreducibilis, mert a gráf erősen összefüggő, azaz bármely csúcsból bármely másikba el lehet jutni irányított úton. $\mathbf{R}_2$ reducibilis, hisz például nem indul irányított él a következő halmazokból a komplementerükbe: $\{6\}$, $\{3\}$, $\{1, 5\}$, $\{2, 4\}$, $\{1, 5, 6\}$, $\{2, 3, 4\}, \dots$. Így igen sok olyan $\mathbf{P}$ permutáló mátrix van, amelyik $\mathbf{R}_2$-t a kívánt alakba viszi. Közülük legegyszerűbb az identikus mátrix, hisz $\mathbf{R}_2$ már a kívánt alakú:

$$
\mathbf{I}\mathbf{R}_2\mathbf{I}^{\mathsf{T}} = \mathbf{R}_2 = \left[\begin{array}{ccccc|c}
0 & 0 & 0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 & 0 & 0 \\
1 & 0 & 0 & 0 & 0 & 0 \\ \hline
0 & 0 & 0 & 0 & 0 & 1
\end{array}\right].
$$

Az $\mathbf{R}_1$ mátrixnak nyilvánvalóan sajátvektora a $\mathbf{p} = (1, 1, 1, 1, 1, 1)$ vektor az $1$ sajátértékkel. Mivel $\mathbf{R}_1$ nemnegatív és irreducibilis, ezért a Frobenius–Perron-tétel szerint a spektrálsugárhoz, mint sajátértékhez tartozó sajátvektor az egyetlen sajátvektor, mely pozitív elemű. Ebből következik, hogy a spektrálsugár $1$.

*Másik megoldás* a feladat második részére:

$$
\det(\mathbf{R}_1 - \lambda\mathbf{I}) = \begin{vmatrix}
-\lambda & 1 & 0 & 0 & 0 & 0 \\
0 & -\lambda & 1 & 0 & 0 & 0 \\
0 & 0 & -\lambda & 1 & 0 & 0 \\
0 & 0 & 0 & -\lambda & 1 & 0 \\
0 & 0 & 0 & 0 & -\lambda & 1 \\
1 & 0 & 0 & 0 & 0 & -\lambda
\end{vmatrix} = \lambda^6 - 1.
$$

A karakterisztikus polinom gyökei a hatodik egységgyökök, melyek az $1$-sugarú körön vannak, tehát $1$ a spektrálsugár. A spektrálsugár valóban sajátérték, és a $\lambda = 1$-hez tartozó sajátvektor $\mathbf{p} = (1, 1, 1, 1, 1, 1)$.

**12.8.** A három mátrixhoz az alábbi gráfok tartoznak:

Ennek alapján az első gráfban az $\{1, 4\}$, a másodikban az $\{1, 3, 4\}$, a harmadikban a $\{2\}$ halmazból nem érhető el a többi pont. A pontoknak egy olyan átsorszámozását keressük, melyben e pontok a többi után következnek, ugyanis általában, ha az $\{1, 2, \dots, k, k+1, \dots, n\}$ csúcshalmazban az első $k$ pontba nem fut él a $\{k+1, \dots, n\}$ halmazból, akkor a szomszédsági mátrix $\left[\begin{smallmatrix} \mathbf{X} & \mathbf{Y} \\ \mathbf{O} & \mathbf{Z} \end{smallmatrix}\right]$ alakú lesz. Az első gráfban például a 3-2-1-4 sorrend jó, hisz az $\{1, 4\}$ halmaz elemei vannak hátul, amit a $\left(\begin{smallmatrix} 1 & 2 & 3 & 4 \\ 3 & 2 & 1 & 4 \end{smallmatrix}\right)$ permutáció megvalósít:

$$
\begin{bmatrix} 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}
\begin{bmatrix} 1 & 0 & 0 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 0 & 0 & 1 \end{bmatrix}
\begin{bmatrix} 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} =
\left[\begin{array}{cc|cc} 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ \hline 0 & 0 & 1 & 1 \\ 0 & 0 & 1 & 1 \end{array}\right]
$$

A második esetben például jó a 2-1-3-4 sorrend, hisz az $\{1, 3, 4\}$ halmaz elemei vannak hátul, amit a $\left(\begin{smallmatrix} 1 & 2 & 3 & 4 \\ 2 & 1 & 3 & 4 \end{smallmatrix}\right)$ permutáció megvalósít:

$$
\begin{bmatrix} 0 & 1 & 0 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}
\begin{bmatrix} 1 & 0 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 0 & 1 & 1 \\ 1 & 0 & 1 & 1 \end{bmatrix}
\begin{bmatrix} 0 & 1 & 0 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} =
\left[\begin{array}{c|ccc} 1 & 1 & 1 & 1 \\ \hline 0 & 1 & 1 & 1 \\ 0 & 1 & 1 & 1 \\ 0 & 1 & 1 & 1 \end{array}\right]
$$

Végül a harmadik mátrixnál jó az 1-4-3-2 sorrend, így a $2$ elem van hátul, amit az $\left(\begin{smallmatrix} 1 & 2 & 3 & 4 \\ 1 & 4 & 3 & 2 \end{smallmatrix}\right)$ permutáció megvalósít:

$$
\begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \end{bmatrix}
\begin{bmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 0 & 0 \\ 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \end{bmatrix}
\begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \end{bmatrix} =
\left[\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ \hline 0 & 0 & 0 & 1 \end{array}\right]
$$

A balról szorzó permutáló mátrix az egységmátrixból a megadott permutáció sorokra való alkalmazásával, míg a jobbról szorzó mátrix az oszlopokra való alkalmazásával lett meghatározva.

# Irodalomjegyzék

- Wolf Holzmann. *Uniqueness of reduced row echelon form.* http://www.cs.uleth.ca/~holzmann/notes/reduceduniq.pdf, 2002.
- Faragó István, Horváth Róbert. *Numerikus módszerek.* BME, http://math.bme.hu/~rhorvath/nummodszjegyzet.pdf, 2013.

# Tárgymutató

$\pi$-transzponált 149
$p$-norma 433

adjungált 240, 323
affin altér 117
alakzat egyenletrendszere 60
alapvektor 40
algebrai multiplicitása 366
alsó háromszögmátrix 193
általánosított sajátvektor 449
általános megoldás 82
altér 114
&nbsp;&nbsp;affin 117
&nbsp;&nbsp;invariáns 382
&nbsp;&nbsp;kiegészítő 280
&nbsp;&nbsp;komplementer 280
&nbsp;&nbsp;merőlegese 129
&nbsp;&nbsp;merőleges kiegészítő 129
alterek merőlegessége 129
altér eltoltja 117
alulhatározott 72
annullátor 458
áttérés mátrixa 157

balrendszer 34
bal sajátvektor 375
bázis 40, 122
&nbsp;&nbsp;standard 46
báziscsere 157
bázisfelbontás 159
bázisoszlop 80
bázisvektor 40
bináris reláció 53
blokkmátrix 147
bővített mátrix 75

Cholesky-felbontás 414

csoport 23

deriváltleképezés 344
determináns 215
&nbsp;&nbsp;lineáris transzformációé 277
DFT 332
diád 153
diadikus felbontás
&nbsp;&nbsp;szinguláris érték szerinti 422
diadikus szorzat 153
diagonalizálhatóság 373
differenciálhatóság 343
dimenzió 126
direkt összeg 282, 384
diszkrét Fourier-összeg 329
diszkrét Fourier-transzformáció 332

egyenletrendszer
&nbsp;&nbsp;numerikusan instabil 94
egységmátrix 160
egységvektor 33
együtthatómátrix 75
Einstein-konvenció 173
ekvivalenciareláció 53
ekvivalens
&nbsp;&nbsp;átalakítások 73
&nbsp;&nbsp;lineáris egyenletrendszerek 73
elemi bázistranszformáció 133
elemi mátrix 160
elemi sorműveletek 80
előjeles aldetermináns 232
előjeles térfogat 38
előjeles terület 213
euklideszi norma 432
euklideszi norma 21
explicit 60

fejléc (táblázaté) 141
felső háromszögmátrix 193
ferdén szimmetrikus 194
FFT 335

főátló 74
főelem 80
főminor 415
főoszlop 80
forgatónyomaték 35
Fourier-mátrix 330
Fourier-összeg 329

Gauss–Jordan-módszer 86
Gauss–Seidel-iteráció 100
Gauss-módszer 81
generátorrendszer 122
geometriai multiplicitás 366
Givens-forgatás 311
gradiens 346
gráf
&nbsp;&nbsp;erősen összefüggő 483
Gram-mátrix 135

gyors Fourier-transzformáció 335

hajlásszög 49
Hamming-kód 89
háromszögmódszer 21
hasonló mátrixok 274
hatványmódszer 390
Hermite, Charles 323
Hermite-féle interpolációs polinom 471
Hermite-féle kvadratikus alak 409
Hermite mátrix 326
hiper-kockamátrix 149
hipermátrix 149
&nbsp;&nbsp;ferdén szimmetrikus 149
&nbsp;&nbsp;külső szorzat 152
&nbsp;&nbsp;szimmetrikus 149
hipersík 69
Hölder-egyenlőtlenség 435, 443
homogén 213

homogén lineáris egyenletrendszer
&nbsp;&nbsp;inhomogénhez tartozó 83
Householder-módszer 318
Householder-tükrözés 312

idempotens 285
illeszkedő normák 438
implicit 60
indukált mátrixnorma 439
inkonzisztens 72
invariáns altér 382
invariáns altér 447
invertálható 178
invertálható művelet 177
inverz
&nbsp;&nbsp;eleme 177
inverzió 220
irányított szakasz 19
irányított szög 34
irányvektor 61
irreducibilis 477, 483
ISO 31-11 20

Jacobi-determináns 349
Jacobi-iteráció 99
Jacobi-mátrix 346
jobbrendszer 34
jól kondicionált 94
Jordan-bázis 449
Jordan-blokk 452
Jordan-felbontás 452
Jordan-lánc 449
Jordan-mátrix 452
Jordan-normálalak 452

karakterisztikus egyenlet 359
karakterisztikus polinom 359
képtér 253
kernel 253
kiegészítő altér 280
kifeszített altér 116
kígyó 192, 229
kísérő mátrix 460
kitüntetett altér 129
&nbsp;&nbsp;négy kitüntetett altér 129
klasszikus adjungált 240
kollineáris vektor 21
komplanáris 22
komplementer altér 280
kompozíció
&nbsp;&nbsp;lineáris helyettesítéseké 143
konjugált 275

konstans tag 71
kontrakció 98
konzisztens 72
konzisztens normák 438
koordináta 40
koordináta-rendszer 40
kötött változó 81
kötött vektor 19
Kronecker-szorzat 148
külső szorzat 152
&nbsp;&nbsp;Segre-féle 152
kvadratikus alak 408

legjobb közelítés 285
legkisebb négyzetek elve 287
lépcsős alak 80
levéldiagram 114
lineáris
&nbsp;&nbsp;egyenlet 71
&nbsp;&nbsp;egyenletrendszer 72
&nbsp;&nbsp;kombináció 23
lineárisan független 25, 46
lineárisan összefüggő 25
lineáris egyenletrendszer
&nbsp;&nbsp;konzisztens 72
lineáris egyenletrendszer
&nbsp;&nbsp;alulhatározott 72
&nbsp;&nbsp;túlhatározott 72
lineáris egyenletrendszerek
&nbsp;&nbsp;homogén 72
&nbsp;&nbsp;megoldása 72
lineáris egyenletrendszerek
&nbsp;&nbsp;ekvivalens 73
&nbsp;&nbsp;inhomogén 72
lineáris helyettesítés
&nbsp;&nbsp;mátrixa 155
lineáris helyettesítés 143
lineáris leképezés 256
&nbsp;&nbsp;képtere 253
&nbsp;&nbsp;magtere 253
lineáris transzformáció
&nbsp;&nbsp;karakterisztikus polinomja 373
&nbsp;&nbsp;sajátértéke 371
&nbsp;&nbsp;sajátértékei 373
lineáris transzformáció 256
LU-felbontás 197

magtér 253
másodfokú tag 407
mátrix 73
&nbsp;&nbsp;áttérés mátrixa 157

diagonális 144
elemi 160
ellentettje 145
ferdén szimmetrikus 194
irreducibilis 477, 483
négyzetes 144
nemnegatív 477
normális 402
önadjungált 326
ortogonális 306
pozitív 477
primitív 477
rangja 110
reducibilis 477, 483
ritka 74
soronként domináns főátlójú 101
sűrű 74
szemiortogonális 306
szimmetrikus 194
szinguláris 178
sztochasztikus 489
mátrixleképezés 253
mátrixnorma 438
mátrixok tere 144
mátrixszorzat
&nbsp;&nbsp;diádok összegére bontása 163
megoldás
&nbsp;&nbsp;általános 82
&nbsp;&nbsp;partikuláris 82
&nbsp;&nbsp;triviális 112
megoldásvektor 72
megoldható 72
merőleges összetevő 283
merőleges vetület
&nbsp;&nbsp;altérre eső 283
minimálpolinom 458
Minkowski-egyenlőtlenség 435, 443
Moore–Penrose-féle pszeudoinverz 295
multilineáris mátrixszorzat 152

negatív (szemi)definit 410
négy kitüntetett altér 129
nilpotens 178
norma 434
&nbsp;&nbsp;euklideszi 21
normálás 304, 432
normálegyenlet 287
normálegyenlet-rendszer 287
normális mátrix 402

- normálvektor 61
- nullítás 126
  - lineáris leképezésé 277
- nullosztó 172
- nulltér 116
- nullvektor 20
- numerikusan instabil 94
- numerikusan stabil 94
- nyom 261
  - lineáris transzformációé 277
  - mátrixé 261
- önadjungált 326
- operátornorma 439
- optimális megoldás 287
- orientáció
  - balrendszer 34
  - jobbrendszer 34
- origó 20
- ortogonális 42
- ortogonális bázis (OB) 304
- ortogonális diagonalizálás 395
- ortogonális mátrix 306
- ortonormált bázis 42
- ortonormált bázis (ONB) 304
- oszlopmátrix 74
- oszloponként domináns főátló 101
- oszloptér 118
- oszlopvektor 41, 74
- osztályozás 53
- paralelepipedon 27
  - előjeles térfogata 38
- paralelogramma 27
  - előjeles területe 213
- paraméteres egyenletrendszer 60
- párhuzamos vektor 21
- partícionálás 53
- partikuláris megoldás 82
- permutációmátrix 192
- permutáló mátrix 192
- Perron-vektor 479
- pivotelem 80
- PLU-felbontás 203
- polárfelbontás 427
- polarizációs formulák 51
- polinom
  - elemi szimmetrikus 373
  - homogén másodfokú 407
- pozitív (szemi)definit 410
- precedencia-elv 174
- primitív mátrix 477
- projekció 292
- pszeudoinverz 295
- QR-felbontás 315
  - redukált 315
  - teljes 315
- ráfordítási együttható 491
- rang 110, 126
  - lineáris leképezésé 277
- reducibilis 477, 483
- redukált lépcsős alak 85
- redukált szinguláris felbontás 422
- reflexív 53
- regressziós egyenes 289
- reláció 53
- részleges főelem-kiválasztás 96
- részleges pivotálás 96
- ritka mátrix 74
- rosszul kondicionált 94
- rref függvény 88
- sajátaltér 358
- sajátérték 358
  - lineáris transzformációé 371
- sajátfelbontás 374
  - diadikus alakja 375
- sajátpár 358
- sajátvektor 358
  - bal 375
- sakktáblaszabály 232
- sarokaldetermináns 415
- Sarrus-szabály 231
- skalár 19
- skaláris szorzat 30
- skálázás 97
- sorlépcsős alak 80
- sormátrix 74
- soronként domináns főátló 101
- sortér 118
- sorvektor 74
- spektrálsugár 478
- spektrum
  - értékek a spektrumon 469
- standard bázis 46
- sudoku 165
- szabad változó 81
- szabad vektor 20
- szemiortogonális mátrix 306
- szigorúan domináns sajátpár 390
- szimmetrikus mátrix 194
- szimmetrikus reláció 53
- szimultán egyenletrendszer 88
- szinguláris 178
- szinguláris érték 420
- szinguláris felbontás 423
  - diadikus alak 422
- szinguláris vektor 420
- szög 49
- sztochasztikus mátrix 489
- sztochasztikus vektor 489
- táblázat 141
- távolság 31
  - altértől 285
- tenzorszorzat 148
- torzor 23
- transzponált 126
  - Hermite-féle 323
- transzverzális 192
- transzverzális (kígyó) 229
- tranzitív reláció 53
- triviális megoldás 112
- túlhatározott 72
- unitér 327
- unitér diagonalizálás 402
- Vandermonde-determináns 237
- Vandermonde-mátrix 237
- vec függvény 148
- vegyes szorzat 38
- vektor 20
  - abszolút értéke 21, 326
  - azonos irányú 21
  - egyirányú 21
  - ellenkező irányú 21
  - hossza 21, 31, 326
  - jelölése 20, 74
  - kollineáris 21
  - koordinátáinak elválasztása 74
  - koordinátás alakja 40
  - mátrix alakja 74
  - normálása 304
  - összeg 21
  - párhuzamos 21
  - sztochasztikus 489
- vektoregyenlet 60
- vektori szorzat 35
- vektorok
  - merőlegessége 49, 326
  - szöge 31, 49, 326
  - távolsága 49, 326
- vetítés 292
- vetület 291
- vezérelem 80
- vezető főminor 415
- zérustér 114
- zérusvektor 20

<!-- OCR: through PDF p.500 -->
