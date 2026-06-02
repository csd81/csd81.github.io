# Az $\mathbb{R}^3$ tér geometriája

<!-- OCR of "Az_R3_ter_geometriaja_info.pdf" (előadás-diák, összeállította: dr. Leitold Adrien, egyetemi docens, Pannon Egyetem). 46 dia. -->

*Összeállította: dr. Leitold Adrien, egyetemi docens*

## Vektorok

- **Vektor:** irányított szakasz. Jel.: $\underline a$, $\mathbf a$, $\vec a$, $\overrightarrow{AB}$.
  Jellemzői:
  - irány,
  - hosszúság (abszolút érték), jel.: $|\underline a|$
- **Speciális vektorok:**
  - **nullvektor:** hossza 0, iránya tetszőleges. Jel.: $\underline 0$, $\underline o$
  - **egységvektor:** hossza egységnyi.
- **Megjegyzés:** az azonos hosszúságú és irányú, de különböző kezdőpontú vektorokat azonosaknak tekintjük.

## Két vektor szöge

A vektorokat közös kezdőpontba tolva az általuk meghatározott félegyenesek szöge. Jel.: $\angle(\underline a,\underline b)=\varphi$

**Speciálisan:**
- Ha $\varphi=0°\Rightarrow\underline a$ és $\underline b$ azonos irányú (párhuzamos)
- Ha $\varphi=180°\Rightarrow\underline a$ és $\underline b$ ellentétes irányú (párhuzamos)
- Ha $\varphi=90°\Rightarrow\underline a$ és $\underline b$ merőleges.

## Vektorok koordináta-rendszerben

A vektorokat **helyvektorokként** helyezzük el a térbeli, derékszögű (Descartes-féle) koordináta-rendszerben.

Ekkor minden térbeli vektor egyértelműen felbontható a koordináta-tengelyek irányába eső összetevőkre:
$$\underline v=v_1\cdot\underline i+v_2\cdot\underline j+v_3\cdot\underline k$$

### Vektorok koordináta-rendszerben (folyt.)

- A $\underline v$ vektor koordináta-tengelyek irányába eső összetevői: $v_1\cdot\underline i$, $v_2\cdot\underline j$, $v_3\cdot\underline k$
- A $\underline v$ vektor koordinátái: $v_1$, $v_2$, $v_3$
- **Megjegyzés:** A $\underline v$ helyvektor koordinátái azonosak végpontjának koordinátáival.
  Jel.: $\underline v=(v_1,v_2,v_3)$
- A $\underline v$ vektor hossza (a térbeli Pitagorasz-tétel alapján):
$$|\underline v|=\sqrt{v_1^2+v_2^2+v_3^2}$$

## Műveletek vektorokkal: összeadás

**Összeadás:** háromszög-módszer, illetve paralelogramma-módszer (ha $\underline a$ és $\underline b$ nem párhuzamos).

### Összeadás (folyt.)

**Az összeadás tulajdonságai:** Legyenek $\underline a,\underline b$ és $\underline c$ tetszőleges térbeli vektorok. Ekkor:
- $(\underline a+\underline b)+\underline c=\underline a+(\underline b+\underline c)$ — (asszociativitás)
- $\underline a+\underline b=\underline b+\underline a$ — (kommutativitás)
- $\underline a+\underline o=\underline a$
- $|\underline a+\underline b|\le|\underline a|+|\underline b|$ — (háromszög-egyenlőtlenség)

**Összeadás koordinátákkal:** Legyenek $\underline a=(a_1,a_2,a_3)$ és $\underline b=(b_1,b_2,b_3)$ térbeli vektorok. Ekkor:
$$\underline a+\underline b=(a_1+b_1,\ a_2+b_2,\ a_3+b_3)$$

## Műveletek vektorokkal: skalárral való szorzás

**Skalárral való szorzás:** Legyen $\underline a$ egy tetszőleges térbeli vektor, $\lambda\in\mathbb{R}$ egy skalár. Ekkor $\lambda\cdot\underline a$ az a vektor, amelynek
- hossza: $|\lambda|\cdot|\underline a|$,
- iránya:
  - azonos az $\underline a$ vektor irányával, ha $\lambda>0$,
  - ellentétes az $\underline a$ vektor irányával, ha $\lambda<0$,
  - tetszőleges, ha $\lambda=0$.

### Skalárral való szorzás (folyt.)

**A skalárral való szorzás tulajdonságai:** Legyenek $\underline a$ és $\underline b$ tetszőleges térbeli vektorok, $\lambda,\mu\in\mathbb{R}$ skalárok. Ekkor:
- $0\cdot\underline a=\underline o$
- $\lambda\cdot\underline o=\underline o$
- $1\cdot\underline a=\underline a$
- $(\lambda+\mu)\cdot\underline a=\lambda\cdot\underline a+\mu\cdot\underline a$
- $\lambda\cdot(\underline a+\underline b)=\lambda\cdot\underline a+\lambda\cdot\underline b$
- $\lambda\cdot(\mu\cdot\underline a)=(\lambda\cdot\mu)\cdot\underline a$

**Skalárral való szorzás koordinátákkal:** Legyen $\underline a=(a_1,a_2,a_3)$ egy tetszőleges térbeli vektor, $\lambda\in\mathbb{R}$ egy skalár. Ekkor:
$$\lambda\cdot\underline a=(\lambda\cdot a_1,\ \lambda\cdot a_2,\ \lambda\cdot a_3)$$

## Műveletek vektorokkal: különbség

**Különbség (származtatott művelet):**
$$\underline a-\underline b=\underline a+(-1)\cdot\underline b$$

**A különbség számolása koordinátákkal:** Legyenek $\underline a=(a_1,a_2,a_3)$ és $\underline b=(b_1,b_2,b_3)$ térbeli vektorok. Ekkor:
$$\underline a-\underline b=(a_1-b_1,\ a_2-b_2,\ a_3-b_3)$$

## Műveletek vektorokkal: skaláris szorzás

**Skaláris szorzás:** Legyenek $\underline a$ és $\underline b$ tetszőleges térbeli vektorok. Ekkor:
$$\underline a\cdot\underline b=|\underline a|\cdot|\underline b|\cdot\cos\varphi,\quad\text{ahol }\varphi\text{ a két vektor szöge.}$$

**Megjegyzés:** a művelet eredménye skalár!

### Skaláris szorzás (folyt.)

**A skaláris szorzás tulajdonságai:** Legyenek $\underline a$ és $\underline b$ tetszőleges térbeli vektorok, $\lambda\in\mathbb{R}$ skalár. Ekkor:
- $\underline a\cdot\underline b=\underline b\cdot\underline a$
- $\underline a\cdot\underline a=|\underline a|^2\Rightarrow|\underline a|=\sqrt{\underline a\cdot\underline a}$
- $\underline a\cdot\underline b=0\Leftrightarrow\underline a=\underline o$ vagy $\underline b=\underline o$ vagy $\varphi=90°$ (azaz $\underline a\perp\underline b$)
- $\lambda\cdot(\underline a\cdot\underline b)=(\lambda\cdot\underline a)\cdot\underline b=\underline a\cdot(\lambda\cdot\underline b)$
- $\underline a\cdot(\underline b+\underline c)=\underline a\cdot\underline b+\underline a\cdot\underline c$

### Skaláris szorzás (folyt.)

**Skaláris szorzás koordinátákkal:** Legyenek $\underline a=(a_1,a_2,a_3)$ és $\underline b=(b_1,b_2,b_3)$ térbeli vektorok. Ekkor:
$$\underline a\cdot\underline b=a_1\cdot b_1+a_2\cdot b_2+a_3\cdot b_3$$

## Műveletek vektorokkal: vektoriális szorzás

**Vektoriális szorzás:** (Ez a művelet síkbeli vektorokra nem értelmezhető!)

Legyenek $\underline a$ és $\underline b$ tetszőleges térbeli vektorok. Ekkor $\underline a$ és $\underline b$ vektoriális szorzata (jel.: $\underline a\times\underline b$) az a vektor,
- amelynek hossza: $|\underline a\times\underline b|=|\underline a|\cdot|\underline b|\cdot\sin\varphi$, ahol $\varphi$ a két vektor szöge,
- amely merőleges az $\underline a$ vektorra és a $\underline b$ vektorra is,
- amelyre az $\underline a,\underline b$ és $\underline a\times\underline b$ vektorok **jobbrendszert** alkotnak.

(azaz $\underline a\times\underline b$ oda mutat, ahonnan nézve az $\underline a$-t $\underline b$-be vivő, $180°$-nál kisebb szögű forgatás pozitívnak látszik)

### Vektoriális szorzás (folyt.)

Az $\underline a,\underline b$ és $\underline a\times\underline b$ vektorok térbeli elhelyezkedése: $\underline a\times\underline b$ merőleges az $\underline a,\underline b$ által kifeszített síkra, és $t=|\underline a\times\underline b|$ az $\underline a,\underline b$ által kifeszített paralelogramma területe.

### Vektoriális szorzás (folyt.)

**A vektoriális szorzás tulajdonságai:**
- $\underline a\times\underline b\ne\underline b\times\underline a$
- $\underline a\times\underline b=-(\underline b\times\underline a)$
- $(\underline a\times\underline b)\times\underline c\ne\underline a\times(\underline b\times\underline c)$
- $\lambda\cdot(\underline a\times\underline b)=(\lambda\cdot\underline a)\times\underline b=\underline a\times(\lambda\cdot\underline b)$
- $\underline a\times(\underline b+\underline c)=\underline a\times\underline b+\underline a\times\underline c$
- $(\underline b+\underline c)\times\underline a=\underline b\times\underline a+\underline c\times\underline a$
- $\underline a\times\underline b=\underline o\Leftrightarrow\underline a=\underline o$ vagy $\underline b=\underline o$ vagy $\varphi=0°$ vagy $\varphi=180°$ (azaz $\underline a\parallel\underline b$)

### Vektoriális szorzás (folyt.)

**Vektoriális szorzás koordinátákkal:** Legyenek $\underline a=(a_1,a_2,a_3)$ és $\underline b=(b_1,b_2,b_3)$ térbeli vektorok. Ekkor:
$$\underline a\times\underline b=(a_2 b_3-a_3 b_2,\ -a_1 b_3+a_3 b_1,\ a_1 b_2-a_2 b_1)$$

## Az egyenes

Adott: $P_0=(x_0,y_0,z_0)$, az $e$ egyenes egy pontja, $\underline v=(v_1,v_2,v_3)$, az $e$ egyenes egy irányvektora.

Legyen $P=(x,y,z)$ az $e$ egyenes egy tetszőlegesen választott pontja. Jelölje $\underline r_0$ a $P_0$ pontba, $\underline r$ a $P$ pontba mutató helyvektort.

Ekkor $\underline r=\underline r_0+t\cdot\underline v$ teljesül valamely $t\in\mathbb{R}$ valós paraméterre.

**Megjegyzés:** Térbeli egyeneseknél a normálvektor fogalmát nem használjuk.

### Az egyenes (folyt.)

**Az egyenes paraméteres vektoregyenlete:**
$$\underline r=\underline r_0+t\cdot\underline v,\quad t\in\mathbb{R}$$

**Az egyenes paraméteres egyenletrendszere:**
$$x=x_0+t\cdot v_1$$
$$y=y_0+t\cdot v_2$$
$$z=z_0+t\cdot v_3,\quad t\in\mathbb{R}$$

**Megjegyzés:** A tér egy tetszőleges $A=(x_a,y_a,z_a)$ pontja pontosan akkor van rajta egy $e$ egyenesen, ha az $A$ pont koordinátái kielégítik az $e$ egyenes paraméteres egyenletrendszerét valamely $t\in\mathbb{R}$ valós paraméterrel.

### Az egyenes (folyt.)

**Az egyenes paramétermentes egyenletrendszere**
- Ha az irányvektor egyik koordinátája sem nulla:
$$\frac{x-x_0}{v_1}=\frac{y-y_0}{v_2}=\frac{z-z_0}{v_3}$$
- Ha az irányvektor egyik koordinátája (pl. $v_3$) nulla:
$$\frac{x-x_0}{v_1}=\frac{y-y_0}{v_2},\quad z=z_0$$
- Ha az irányvektor két koordinátája is nulla, akkor *nem írható fel* paramétermentes egyenletrendszer.

## A sík

Adott: $P_0=(x_0,y_0,z_0)$, az $S$ sík egy pontja, $\underline n=(n_1,n_2,n_3)$, az $S$ sík egy normálvektora (a síkra merőleges, nullvektortól különböző vektor).

Legyen $P=(x,y,z)$ az $S$ sík egy tetszőlegesen választott pontja. Jelölje $\underline r_0$ a $P_0$ pontba, $\underline r$ a $P$ pontba mutató helyvektort.

Ekkor $\underline r-\underline r_0\perp\underline n$, így $\underline n\cdot(\underline r-\underline r_0)=0$ azaz:
$$n_1\cdot(x-x_0)+n_2\cdot(y-y_0)+n_3\cdot(z-z_0)=0$$

## A sík egyenlete

A sík egyenlete:
$$n_1\cdot(x-x_0)+n_2\cdot(y-y_0)+n_3\cdot(z-z_0)=0$$
azaz:
$$n_1\cdot x+n_2\cdot y+n_3\cdot z=n_1\cdot x_0+n_2\cdot y_0+n_3\cdot z_0=\text{konst.}$$
vagy:
$$A\cdot x+B\cdot y+C\cdot z=D,$$
ahol $\underline n=(A,B,C)$ a sík egy normálvektora, $D\in\mathbb{R}$ konstans.

## Térelemek kölcsönös helyzete: Két egyenes kölcsönös helyzete

Két térbeli egyenes ($e$ és $f$) kölcsönös helyzete:
- A két egyenes azonos. ($e\equiv f$) — Minden pont közös.
- A két egyenes párhuzamos. ($e\parallel f$) — Nincs közös pont.
- A két egyenes metsző. — Egy közös pont van.
- A két egyenes kitérő. — Nincs közös pont.

### Két egyenes kölcsönös helyzetének vizsgálata

*(folyamatábra)* $\underline v_e\parallel\underline v_f$?
- igen → $e$ egy pontja illeszkedik $f$-re? — igen → $e\equiv f$; nem → $e\parallel f$
- nem → Van közös pont? — igen → $e$ és $f$ metsző; nem → $e$ és $f$ kitérő

## Térelemek kölcsönös helyzete: Egyenes és sík kölcsönös helyzete

Egyenes és sík ($e$ és $S$) kölcsönös helyzete:
- Az egyenes a síkban helyezkedik el. ($e\subset S$) — Az egyenes minden pontja közös pont.
- Az egyenes és a sík párhuzamos. ($e\parallel S$) — Nincs közös pont.
- Az egyenes metszi a síkot. — Egy közös pont van.

### Egyenes és sík kölcsönös helyzetének vizsgálata

*(folyamatábra)* $\underline v\perp\underline n$?
- igen → $e$ egy pontja illeszkedik $S$-re? — igen → $e\subset S$; nem → $e\parallel S$
- nem → $e$ és $S$ metszők

## Térelemek kölcsönös helyzete: Két sík kölcsönös helyzete

Két sík ($S_1$ és $S_2$) kölcsönös helyzete:
- A két sík azonos. ($S_1\equiv S_2$) — Minden pont közös.
- A két sík párhuzamos. ($S_1\parallel S_2$) — Nincs közös pont.
- A két sík metsző. — Végtelen sok közös pont van: a metszésvonal *egyenes*.

### Két sík kölcsönös helyzetének vizsgálata I.

*(folyamatábra)* $\underline n_1\parallel\underline n_2$?
- igen → $S_1$ egy pontja illeszkedik $S_2$-re? — igen → $S_1\equiv S_2$; nem → $S_1\parallel S_2$
- nem → $S_1$ és $S_2$ metszők

### Két sík kölcsönös helyzetének vizsgálata II.

Két sík kölcsönös helyzetének vizsgálata a síkok egyenletei alapján:
Legyen a két sík ($S_1$ és $S_2$) egyenlete az alábbi:
$$S_1:\quad n_1\cdot x+n_2\cdot y+n_3\cdot z=k_1$$
$$S_2:\quad n_1'\cdot x+n_2'\cdot y+n_3'\cdot z=k_2$$
1. Ha a két sík normálvektora nem párhuzamos, akkor $S_1$ és $S_2$ metsző.
2. Ha a két sík normálvektora párhuzamos, azaz $\dfrac{n_1}{n_1'}=\dfrac{n_2}{n_2'}=\dfrac{n_3}{n_3'}=\lambda$, akkor
   - $S_1$ és $S_2$ azonos ($S_1\equiv S_2$), ha $\dfrac{k_1}{k_2}=\lambda$,
   - $S_1$ és $S_2$ párhuzamos ($S_1\parallel S_2$), ha $\dfrac{k_1}{k_2}\ne\lambda$.

## Térelemek metszéspontjának meghatározása

**Megjegyzés:** Két térelem metszéshalmaza nem más, mint egyenleteik rendszerének megoldáshalmaza.

Vizsgáljuk:
- Két egyenes metszéspontjának,
- Sík és egyenes metszéspontjának,
- Két sík metszésvonalának

meghatározását.

### Két egyenes metszéspontja

Legyen adott két egyenes ($e$ és $f$) paraméteres egyenletrendszere:
$$e:\ x=x_0+t\cdot v_1,\ y=y_0+t\cdot v_2,\ z=z_0+t\cdot v_3$$
$$f:\ x=x_0'+t\cdot v_1',\ y=y_0'+t\cdot v_2',\ z=z_0'+t\cdot v_3'$$

1. Olyan $t_1,t_2$ paraméterértékeket keresünk, amelyek a két egyenletrendszerben ugyanazon $x,y,z$ koordinátaértékeket szolgáltatják:
$$\begin{aligned}x_0+t_1\cdot v_1&=x_0'+t_2\cdot v_1'\\ y_0+t_1\cdot v_2&=y_0'+t_2\cdot v_2'\\ z_0+t_1\cdot v_3&=z_0'+t_2\cdot v_3'\end{aligned}\quad\Rightarrow\quad t_1,t_2$$
2. A kapott paraméterértékeket az egyenletrendszerekbe visszahelyettesítve megkapjuk a metszéspont koordinátáit.

### Sík és egyenes metszéspontja

Legyen adott az $S$ sík egyenlete és az $e$ egyenes paraméteres egyenletrendszere:
$$S:\ n_1\cdot x+n_2\cdot y+n_3\cdot z=k$$
$$e:\ x=x_0+t\cdot v_1,\ y=y_0+t\cdot v_2,\ z=z_0+t\cdot v_3$$
1. A sík egyenletébe $x,y$ és $z$ helyére az egyenes paraméteres egyenletrendszeréből behelyettesítjük azok $t$ paramétertől függő alakját és a kapott egyenletet megoldjuk $t$-re.
2. A kapott $t$ paraméterértéket az egyenes egyenletrendszerébe visszahelyettesítve megkapjuk a metszéspont koordinátáit.

### Két sík metszésvonala

Legyen adott két sík ($S_1$ és $S_2$) egyenlete:
$$S_1:\ n_1\cdot x+n_2\cdot y+n_3\cdot z=k_1$$
$$S_2:\ n_1'\cdot x+n_2'\cdot y+n_3'\cdot z=k_2$$
1. Keresünk egy olyan $P_0=(x,y,z)$ pontot, amelynek koordinátái mindkét sík egyenletét kielégítik. (A három koordináta közül egy szabadon megválasztható!)
2. A metszésvonal irányvektora: $\underline v=\underline n_1\times\underline n_2$, ahol $\underline n_1$ az $S_1$ sík, $\underline n_2$ az $S_2$ sík normálvektora.
3. Felírjuk a $P_0$ ponton átmenő, $\underline v$ irányvektorú egyenes egyenletrendszerét.

## Térelemek távolságának meghatározása

Vizsgáljuk:
- két pont,
- pont és egyenes,
- két párhuzamos egyenes,
- két kitérő egyenes,
- pont és sík,
- sík és vele párhuzamos egyenes,
- két párhuzamos sík

távolságának meghatározását.

### 1. Két pont távolsága

Legyen $P_1=(x_1,y_1,z_1)$ és $P_2=(x_2,y_2,z_2)$ két tetszőleges pont. Távolságuk (a térbeli Pitagorasz-tétel alapján):
$$d=\sqrt{(x_1-x_2)^2+(y_1-y_2)^2+(z_1-z_2)^2}$$

### 2. Pont és egyenes távolsága

Legyen az $e$ egyenes egy pontja $P_0$ és egy irányvektora $\underline v$. Legyen $P$ egy az $e$ egyenesre nem illeszkedő pont. Ekkor a $P_0,P,\underline v$ által kifeszített paralelogramma területe $t=\left|\underline v\times\overrightarrow{P_0P}\right|=|\underline v|\cdot d$, ahonnan
$$d=\frac{\left|\underline v\times\overrightarrow{P_0P}\right|}{|\underline v|}$$

### 3. Két párhuzamos egyenes távolsága

Legyen $e$ és $f$ két párhuzamos egyenes.
- Felveszünk egy tetszőleges $P$ pontot az $f$ egyenesen.
- Kiszámítjuk a $P$ pont és az $e$ egyenes távolságát 2. szerint.

### 4. Két kitérő egyenes távolsága

Legyen $e$ és $f$ két kitérő egyenes. Kitérő egyenesek esetén mindig létezik két olyan egymással párhuzamos sík, amely az egyik ill. a másik egyenest tartalmazza. Azt az egyenest, amely $e$-t és $f$-t egyaránt merőlegesen metszi, **normáltranzverzális egyenesnek** nevezzük. Ezen egyenes $e$ és $f$ közé eső darabját **normáltranzverzálisnak** hívjuk.

$e$ és $f$ távolsága: a normáltranzverzális hossza.

### 4. Két kitérő egyenes távolsága (folyt.)

Legyen $P_1$ az $e$, $P_2$ az $f$ egyenes tetszőleges pontja. Legyen $\underline n$ a normáltranzverzális irányába mutató tetszőleges vektor. A keresett $d$ távolság egyenlő a $\overrightarrow{P_1P_2}$ vektor $\underline n$ irányába eső merőleges vetületének hosszával.

A számolás lépései:
- Felveszünk egy-egy tetszőleges $P_1$ és $P_2$ pontot az $e$ ill. az $f$ egyeneseken.
- $\underline n$ számolása: $\underline n=\underline v_e\times\underline v_f$ (vektoriális szorzat)
- $\underline n_e$ számolása: $\underline n_e=\dfrac{1}{|\underline n|}\cdot\underline n$ (skalárral való szorzás)
- $d$ számolása: $d=\left|\overrightarrow{P_1P_2}\cdot\underline n_e\right|$ (skaláris szorzás)

### 5. Pont és sík távolsága

Legyen $P$ az $S$ síkra nem illeszkedő pont. Távolságuk meghatározása:
- Felírjuk annak az $e$ egyenesnek a paraméteres egyenletrendszerét, amely átmegy $P$-n és merőleges $S$-re.
- Meghatározzuk az $e$ egyenes és az $S$ sík metszéspontját $\Rightarrow M$
- A távolság: $d=|\overrightarrow{PM}|$

### 6. Sík és vele párhuzamos egyenes távolsága

Legyen az $f$ egyenes párhuzamos az $S$ síkkal. Távolságuk meghatározása:
- Felveszünk egy tetszőleges $P$ pontot az $f$ egyenesen.
- Meghatározzuk a $P$ pont és az $S$ sík távolságát 5. szerint.

### 7. Két párhuzamos sík távolsága

Legyen az $S_1$ és $S_2$ sík párhuzamos. Távolságuk meghatározása:
- Felveszünk egy tetszőleges $P$ pontot az $S_2$ síkon.
- Meghatározzuk a $P$ pont és az $S_1$ sík távolságát 5. szerint.

## Térelemek szögének meghatározása

Vizsgáljuk:
- két egyenes,
- egyenes és sík,
- két sík

szögének meghatározását.

**Megjegyzés:** térelemek szöge mindig $0°$ és $90°$ közé esik.

### Két egyenes szöge

Legyen az $e$ egyenes egy irányvektora $\underline v_e$, az $f$ egyenes egy irányvektora $\underline v_f$. Az $e$ és $f$ szögének ($\alpha$) meghatározása:
- Kiszámoljuk a két irányvektor szögét ($\varphi$):
$$\cos\varphi=\frac{\underline v_e\cdot\underline v_f}{|\underline v_e|\cdot|\underline v_f|}\Rightarrow\varphi$$
- Ha $\varphi\le 90°\Rightarrow\alpha=\varphi$
- Ha $\varphi>90°\Rightarrow\alpha=180°-\varphi$

### Egyenes és sík szöge

Legyen az $e$ egyenes egy irányvektora $\underline v$, az $S$ sík egy normálvektora $\underline n$. Az $e$ és $S$ szögének ($\alpha$) meghatározása:
- Kiszámoljuk az irányvektor és a normálvektor szögét ($\varphi$):
$$\cos\varphi=\frac{\underline v\cdot\underline n}{|\underline v|\cdot|\underline n|}\Rightarrow\varphi$$
- Ha $\varphi\le 90°\Rightarrow\alpha=90°-\varphi$
- Ha $\varphi>90°\Rightarrow\alpha=\varphi-90°$

### Két sík szöge

Legyen az $S_1$ sík egy normálvektora $\underline n_1$, az $S_2$ sík egy normálvektora $\underline n_2$. Az $S_1$ és $S_2$ síkok szögének ($\alpha$) meghatározása:
- Kiszámoljuk a két normálvektor szögét ($\varphi$):
$$\cos\varphi=\frac{\underline n_1\cdot\underline n_2}{|\underline n_1|\cdot|\underline n_2|}\Rightarrow\varphi$$
- Ha $\varphi\le 90°\Rightarrow\alpha=\varphi$
- Ha $\varphi>90°\Rightarrow\alpha=180°-\varphi$
