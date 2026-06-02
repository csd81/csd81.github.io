**4.5. Lineáris egyenletrendszerek perturbációja**  



## 1. Bevezető mintapélda: A kerekítés meglepő hatása (Hilbert-típusú rendszer)

A fejezet egy kézzelfogható numerikus példával indul, amely bemutatja, hogy a bemeneti adatok egészen minimális megváltoztatása (számítógépes kerekítése) hogyan képes teljesen eltorzítani egy egyenletrendszer végeredményét.

Tekintsük a következő pontos lineáris egyenletrendszert:


$$\begin{array}{rcrcrcr} x_1 & + & \frac{1}{2}x_2 & + & \frac{1}{3}x_3 & = & 1 \\ \frac{1}{2}x_1 & + & \frac{1}{3}x_2 & + & \frac{1}{4}x_3 & = & 1 \\ \frac{1}{3}x_1 & + & \frac{1}{4}x_2 & + & \frac{1}{5}x_3 & = & 1 \end{array}$$


A rendszer pontos elméleti megoldása: $\mathbf{x} = (3, -24, 30)^T$.

Tegyük fel, hogy a számítógépes tárolás során az együtthatókat **3 tizedesjegy pontossággal kerekítjük** (azaz az $1/3$ helyett $0.333$-at, az $1/2$ helyett $0.5$-öt, az $1/5$ helyett $0.2$-t írunk):


$$\begin{array}{rcrcrcr} y_1 & + & 0.5y_2 & + & 0.333y_3 & = & 1 \\ 0.5y_1 & + & 0.333y_2 & + & 0.25y_3 & = & 1 \\ 0.333y_1 & + & 0.25y_2 & + & 0.2y_3 & = & 1 \end{array}$$


Ennek a kerekített rendszernek a pontos megoldása: $\mathbf{y} = (3.446, -26.273, 32.296)^T$.

**A numerikus anomália:** Miközben a bemeneti paraméterekben elkövetett változtatás elenyésző volt (csupán $10^{-4}$ nagyságrendű), a kapott végeredményben a relatív hiba az első változóra nézve megdöbbentően nagy, **kb. 14%-os** lett ($\delta_1 \approx 0.14$). Ez a jelenség a rossz kondicionáltság közvetlen következménye.



## 2. Relatív hibabecslések perturbált rendszerekre

A fejezet elméleti része matematikai korlátokat ad arra az esetre, amikor a pontos $\mathbf{Ax} = \mathbf{b}$ rendszer helyett annak egy megváltoztatott (perturbált) változatát oldjuk meg.

### A) Csak a jobb oldal perturbációja (4.22. Tétel)

Tegyük fel, hogy a mátrix pontos, de a jobb oldali szabadtag-vektor helyett egy $\tilde{\mathbf{b}} = \mathbf{b} + \Delta\mathbf{b}$ vektorral számolunk. Ekkor a kapott $\tilde{\mathbf{x}}$ megoldás relatív hibája felülről becsülhető a jobb oldal relatív hibájának és a **mátrix kondíciószámának** a szorzatával:


$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \mathrm{cond}(\mathbf{A}) \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{b}\|}$$

### B) Az együtthatómátrix és a jobb oldal együttes perturbációja (4.23. Tétel)

Ha a jobb oldal mellett maguk az egyenlet együtthatói is perturbálódnak ($\tilde{\mathbf{A}} = \mathbf{A} + \Delta\mathbf{A}$), és feltételezzük, det a változás nem túl nagy (azaz $\|\mathbf{A}^{-1}\| \|\Delta\mathbf{A}\| < 1$), akkor a teljes relatív hiba felső korlátja:


$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \frac{\mathrm{cond}(\mathbf{A})}{1 - \mathrm{cond}(\mathbf{A})\frac{\|\Delta\mathbf{A}\|}{\|\mathbf{A}\|}} \left( \frac{\|\Delta\mathbf{A}\|}{\|\mathbf{A}\|} + \frac{\|\Delta\mathbf{b}\|}{\|\mathbf{b}\|} \right)$$

**Következmény:** Minél nagyobb a $\mathrm{cond}(\mathbf{A})$ kondíciószám, a bemeneti adatok bizonytalansága (legyen az mérési pontatlanság vagy gépi kerekítés) annál drasztikusabban vetül ki a számított végeredményre.



## 3. A spektrál kondíciószám és a szingularitás távolsága

A jegyzet bevezet egy speciális mutatót, az úgynevezett **spektrál kondíciószámot**, amely a sajátértékek segítségével jellemzi a mátrix viselkedését:


$$\mathrm{cond}_*(\mathbf{A}) := \rho(\mathbf{A})\rho(\mathbf{A}^{-1})$$

A lineáris algebrai tételek értelmében tetszőleges indukált mátrixnormára igaz, hogy $\rho(\mathbf{A})\rho(\mathbf{A}^{-1}) \leq \mathrm{cond}(\mathbf{A})$.

### Gastinel-tétel (A geometriai jelentés)

A fejezet egyik legfontosabb elméleti felismerése a kondíciószám és a mátrix szingulárissá (nem invertálhatóvá) válásának kapcsolata.

> **Gastinel-tétel:** Bármely invertálható $\mathbf{A}$ mátrix esetén a kondíciószám reciproka pontosan megegyezik a legközelebbi szinguláris mátrix tőle vett relatív távolságával:
> 
> $$\frac{1}{\mathrm{cond}(\mathbf{A})} = \min \left\{ \frac{\|\mathbf{A} - \mathbf{B}\|}{\|\mathbf{A}\|} : \mathbf{B} \text{ szinguláris} \right\}$$
> 
> 

**Mit jelent ez a gyakorlatban?** Ha egy mátrix kondíciószáma rendkívül nagy, az azt jelenti, hogy a mátrix a térben **geometriailag nagyon közel van egy olyan szinguláris mátrixhoz**, amelynek determinánsa nulla, és amelyre a feladat elméletileg megoldhatatlan lenne. Ez a veszélyes közelség okozza a numerikus instabilitást.



## 4. Klasszikus példa: A Hilbert-mátrix ($\mathbf{H}_n$)

A matematikai analízisben a rosszul kondicionált mátrixok legnépszerűbb, klasszikus példája az úgynevezett **Hilbert-mátrix**, amelynek elemeit az alábbi reciprok formula határozza meg:


$$\mathbf{H}_n = \begin{pmatrix} 1 & \frac{1}{2} & \frac{1}{3} & \cdots & \frac{1}{n} \\ \frac{1}{2} & \frac{1}{3} & \frac{1}{4} & \cdots & \frac{1}{n+1} \\ \frac{1}{3} & \frac{1}{4} & \frac{1}{5} & \cdots & \frac{1}{n+2} \\ \vdots & & & & \vdots \\ \frac{1}{n} & \frac{1}{n+1} & \frac{1}{n+2} & \cdots & \frac{1}{2n-1} \end{pmatrix}$$

A jegyzet táblázata bemutatja, hogy a spektrál kondíciószám milyen extrém, robbanásszerű sebességgel növekszik a mátrix dimenziójának ($n$) emelésével:

* $n = 2 \implies \mathrm{cond}_*(\mathbf{H}_2) \approx 1.9 \cdot 10^1$
* $n = 3 \implies \mathrm{cond}_*(\mathbf{H}_3) \approx 5.2 \cdot 10^2$
* $n = 5 \implies \mathrm{cond}_*(\mathbf{H}_5) \approx 4.8 \cdot 10^5$ (Itt már komoly pontosságvesztés tapasztalható)
* $n = 10 \implies \mathrm{cond}_*(\mathbf{H}_{10}) \approx \mathbf{1.6 \cdot 10^{13}}$

**Végső tanulság:** Egy $10 \times 10$-es Hilbert-mátrix esetén a kondíciószám nagyságrendje ($10^{13}$) megközelíti a hagyományos lebegőpontos ábrázolás (double precision $\approx 10^{-16}$) pontossági határát. Egy ilyen rendszerben a kerekítési hibák szinte teljesen megsemmisítik a matematikai információt, így a kapott numerikus megoldás gyakorlatilag használhatatlanná válik.