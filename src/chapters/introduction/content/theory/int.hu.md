## 1.2. Egész és valós számok tárolása

Legyen $I$ egy $b$-alapú számrendszerben felírt $m$ jegyű pozitív egész szám:

$$I = (a_{m-1}a_{m-2}\ldots a_1 a_0)_b, \qquad \text{ahol} \quad a_i \in \{0, 1, \ldots, b-1\}.$$

Ennek értéke:

$$I = a_{m-1}b^{m-1} + a_{m-2}b^{m-2} + \cdots + a_1 b + a_0.$$

$m$ jegyen tárolható legnagyobb egész szám tehát az az $I_{\max}$ szám, amelynek minden számjegye $b - 1$. Ennek értéke

$$I_{\max} = (b-1)(b^{m-1} + b^{m-2} + \cdots + b + 1) = b^m - 1.$$

$m$ jegyen tehát a 0-tól $b^m - 1$-ig terjedő ($b^m$ db) nemnegatív számokat tudjuk ábrázolni (tárolni). A számítógépen a kettes (bináris) számrendszerben tároljuk az egész számokat. $m$ biten tehát $2^m$ db számot tudunk ábrázolni. Negatív egész számok tárolására két módszert ismertetünk. Az első az ún. *direkt* vagy *egyenes kód*. Ebben a kódolásban egy bitet lefoglalunk az előjelnek, (ezt hívjuk előjelbitnek), és a maradék $m - 1$ biten tudjuk a szám abszolút értékét tárolni. Ekkor $I_{\max} = 2^{m-1} - 1$, és a legkisebb tárolható egész szám $I_{\min} = -I_{\max}$. Ebben a kódolásban a 0-t kétféleképpen tárolhatjuk: a csupa 0, ill. az $100\ldots0$ bitsorozattal.

**1.6. példa.** Az 1.2. táblázatban az $m = 3$ biten, direkt kóddal ábrázolható számokat soroltuk fel. $\square$

**1.2. táblázat. Egyenes kód, $m = 3$**

| $I$ | a tárolt bináris kód |
|----|------|
| 0  | 000  |
| 1  | 001  |
| 2  | 010  |
| 3  | 011  |
| 0  | 100  |
| -1 | 101  |
| -2 | 110  |
| -3 | 111  |

A gyakorlatban általában az ún. *kettes komplemens kódot* szokták használni negatív számok tárolására. Legyen $I$ egy egész szám, amit $m$ biten szeretnénk tárolni. Az $I$ helyett a $C$ szám bináris alakját tároljuk, ahol

$$
C = \begin{cases}
I, & \text{ha } 0 \leq I \leq 2^{m-1} - 1,\\
2^m + I, & \text{ha } -2^{m-1} \leq I < 0.
\end{cases}
$$

Ennél a tárolásnál tehát a legnagyobb és a legkisebb ábrázolható szám $I_{\max} = 2^{m-1} - 1$ ill. $I_{\min} = -2^{m-1}$. A feltételek szerint ha $0 \leq I \leq 2^{m-1} - 1$, akkor $C < 2^{m-1}$, azaz $C$ első bitje 0. Ha viszont $-2^{m-1} \leq I < 0$, akkor könnyen ellenőrizhető, hogy $2^{m-1} \leq C \leq 2^m - 1$, azaz $C$ első bitje 1.

A kettes komplemens kód egyik fontos előnye, hogy segítségével a kivonás visszavezethető összeadásra. (Lásd a 4. feladatot!)

**1.7. példa.** Az 1.3. táblázat az $m = 3$ biten, kettes komplemens kóddal ábrázolható számokat tartalmazza. $\square$

**1.3. táblázat. Kettes komplemens kód, $m = 3$**

| $I$ (decimálisan) | $I$ (binárisan) | $C$, a tárolt bináris kód |
|------|------|------|
| 0  | 000  | 000 |
| 1  | 001  | 001 |
| 2  | 010  | 010 |
| 3  | 011  | 011 |
| -1 | -001 | 111 |
| -2 | -010 | 110 |
| -3 | -011 | 101 |
| -4 | -100 | 100 |

A továbbiakban a valós számok tárolását vizsgáljuk. Emlékeztetünk arra, hogy a $b$ alapú számrendszerben felírt

$$x = (x_{m-1}x_{m-2}\cdots x_0 . x_{-1}x_{-2}\cdots)_b, \qquad x_i \in \{0, 1, \ldots, b-1\},$$

valós szám értéke

$$x = x_{m-1}b^{m-1} + x_{m-2}b^{m-2} + \cdots + x_1 b + x_0 + \frac{x_{-1}}{b} + \frac{x_{-2}}{b^2} + \cdots = \sum_{i=-\infty}^{m-1} x_i b^i.$$

Tekintsük a 126.42 valós számot. Ennek normál alakján vagy az $1.2642 \cdot 10^2$ vagy pedig a $0.12642 \cdot 10^3$ alakot szokás érteni. Mi ebben a jegyzetben az első alakot fogjuk használni. Ennek megfelelően egy $x \neq 0$ valós szám *normál alakján* az $x = \pm m \cdot b^k$ alakját hívjuk, ahol $1 \leq m < b$. $m$-et a szám *mantisszájának*, $k$-t pedig *kitevőjének* nevezzük. Valós számot, más szóval *lebegőpontos számok* tárolásához a számot felírjuk (valamely $b$ alapot használva) normál alakban, és az előjeles mantisszát, valamint a kitevőt tároljuk. Különböző számítógépek eltérő alapot és bithosszúságot használnak egy valós szám tárolására. Mi most egy IEEE szabványt[^2] ismertetünk valós számok 32 biten (ún. *egyszeres pontosságú*), ill. 64 biten történő (ún. *dupla pontosságú*) tárolására bináris alapot használva. Ezt a kódolást használják az IBM-kompatibilis személyi számítógépek is. Vegyük a szám $x = (-1)^s m \cdot 2^k$ bináris normál alakját, ahol $s \in \{0, 1\}$ és $m = 1.m_1 m_2 m_3 \ldots$. Az $s$ értékét az 1. biten tároljuk. A $k$ kitevő helyett annak eltolt értékét, az $e = k + 127$ nemnegatív számot a 2.–9. biteken tároljuk, a mantissza törtrészének első 23 bitre kerekített értékét pedig a 10.–32. biten tároljuk. (A nemnulla szám mantisszájának egész része bináris normál alakban mindig 1-gyel egyenlő, ezt az 1-est nem tároljuk!) A fent említett IEEE szabvány külön definiálja a 0 tárolását, és bevezet két speciális szimbólumot is, az `Inf` (infinity, azaz végtelen) és `NaN` (not-a-number, azaz nem szám) szimbólumokat:

| tárolandó szám | $s$ | $e$ (2.–9. bitek) | mantissza bitek (10.–32. bitek) |
|------|---|----------|------|
| +0   | 0 | 00000000 | minden mantissza bit=0 |
| −0   | 1 | 00000000 | minden mantissza bit=0 |
| +Inf | 0 | 11111111 | legalább az egyik mantissza bit=0 |
| −Inf | 1 | 11111111 | legalább az egyik mantissza bit=0 |
| +NaN | 0 | 11111111 | minden mantissza bit=1 |
| +NaN | 1 | 11111111 | minden mantissza bit=1 |

Az `Inf` szimbólumot a programok használhatják olyan matematikai művelet eredményének tárolására, amelynek értéke végtelen, a `NaN` szimbólumot pedig olyan művelet "eredményének" tárolására, amely nem definiált (pl. nullával való osztás eredménye vagy negatív szám négyzetgyöke valós számok körében). Mindkét szimbólumnak lehet pozitív vagy negatív előjele. A szabvány definíciójából következik, hogy az $e = (11111111)_2 = 255$ azaz a $k = 128$ kitevő az `Inf` és `NaN` speciális szimbólumoknak van fenntartva. A véges valós számok esetén $0 \leq e \leq 254$, így $k$ lehetséges értékei $-127 \leq k \leq 127$. A legkisebb pozitív valós szám tehát az $k = -127$ kitevőhöz és az $(1.00\ldots01)_2$ mantisszához tartozik. Ennek értéke $(1 + 1/2^{23})2^{-127} \approx 10^{-38}$. A legnagyobb (véges) valós szám pedig $x_{\max} = (1.11\ldots1)_2 2^{127} = (2 - 2^{-23})2^{127} \approx 10^{38}$.

64 biten történő tárolás az előzőekhez hasonlóan történik: az $e = k + 1023$ eltolt kitevőt a 2.–12. biten, a mantissza törtrészét pedig a 13.–64. biten tároljuk. Ekkor a tárolható pozitív számok tartománya körülbelül $10^{-308} - 10^{308}$ lesz.

**1.8. példa.** Tegyük fel, hogy 4 biten szeretnénk valós számokat tárolni, bináris normál alak segítségével. Ezt megtehetjük pl. úgy, hogy az 1. biten a szám előjelét, a 2. biten a bináris normál alak eltolt kitevőjét, $e = k + 1$-et, a 3.–4. biten pedig a mantissza tört részének első két bitjét tároljuk. (Az `Inf` és `NaN` szimbólumokat nem definiáljuk most.) A fenti szabály szerint négy biten ábrázolható nemnegatív valós számokat az 1.4. táblázat tartalmazza. $\square$

[^2]: IEEE Binary Floating Point Arithmetic Standard, 754-1985.

**1.4. táblázat. Nemnegatív valós számok 4 biten**

| $s$ | $e$ | $m$ | $x$ |
|---|---|----|------|
| 0 | 0 | 00 | 0 |
| 0 | 0 | 01 | $(1.01)_2 \cdot 2^{-1} = (1 + \frac{1}{4})\frac{1}{2} = \frac{5}{8}$ |
| 0 | 0 | 10 | $(1.10)_2 \cdot 2^{-1} = (1 + \frac{1}{2})\frac{1}{2} = \frac{3}{4} = \frac{6}{8}$ |
| 0 | 0 | 11 | $(1.11)_2 \cdot 2^{-1} = (1 + \frac{1}{2} + \frac{1}{4})\frac{1}{2} = \frac{7}{8}$ |
| 0 | 1 | 00 | $(1.00)_2 \cdot 2^0 = 1 = \frac{8}{8}$ |
| 0 | 1 | 01 | $(1.01)_2 \cdot 2^0 = 1 + \frac{1}{4} = \frac{10}{8}$ |
| 0 | 1 | 10 | $(1.10)_2 \cdot 2^0 = 1 + \frac{1}{2} = \frac{12}{8}$ |
| 0 | 1 | 11 | $(1.11)_2 \cdot 2^0 = 1 + \frac{1}{2} + \frac{1}{4} = \frac{7}{4} = \frac{14}{8}$ |

Láthatjuk, hogy bármely tárolási módot használjuk, csak véges sok valós számot tudunk a számítógépen tárolni. Azokat a számokat, amelyeket pontosan, azaz tárolási hiba nélkül tudunk tárolni, *gépi számoknak* nevezzük. Azt a gépi számot, amelyet egy adott $x$ valós szám helyett tárolunk a számítógépen, $\mathrm{fl}(x)$-szel jelöljük. Ha $|x|$ kisebb, mint a legkisebb ábrázolható pozitív szám, akkor definíció szerint $\mathrm{fl}(x) = 0$, ha pedig $|x|$ nagyobb, mint a legnagyobb gépi szám, akkor legyen $\mathrm{fl}(x) = \mathtt{Inf}$. Az első esetben $\mathrm{fl}(x)$-et *alácsordulásról*, a másodikban *túlcsordulásról* beszélünk. Hogy definiálhatjuk $\mathrm{fl}(x)$-et a többi esetben? Két alapvető megközelítés lehetséges. Az egyik esetben vesszük az $x$ szám bináris normál alakját, és annak mantisszájából annyi bitet tárolunk, amennyit az adott tárolási rendszerben tudunk, a többit elhagyjuk. Az egyszeres pontosságú számábrázolás esetében tehát az első 23 törtbitet tároljuk. Ezt a stratégiát *levágásnak* nevezzük. A másik, gyakrabban használt megközelítés *kerekítést* használ. Ebben az esetben $\mathrm{fl}(x)$-et definiáljuk úgy, hogy legyen az $x$-hez legközelebbi gépi szám. Amikor $x$ két egymás után következő gépi szám számtani közepe, akkor az előbbi definíció még nem határozza meg pontosan $\mathrm{fl}(x)$-et, mert ekkor kerekíthetünk felfelé és lefelé is. A már említett IEEE szabvány ebben az esetben is egyértelműen definiálja a kerekítést. A kerekítési szabályt az egyszeres pontosságú tárolásra fogalmazzuk meg. Vezessük be a következő jelöléseket: legyen az $x$ pozitív valós szám bináris normál alakja $x = m2^k$, ahol $m = 1.m_1 m_2 \ldots m_{23}m_{24}\ldots$. Legyen $x' = (1.m_1 m_2 \ldots m_{23})_2 2^k$ és $x'' = \big((1.m_1 m_2 \ldots m_{23})_2 + 2^{-23}\big)2^k$. Ekkor $x'$ és $x''$ egymás utáni gépi számok, és $x' \leq x \leq x''$, valamint $x'' - x' = 2^{k-23}$. A szabvány szerint legyen

$$
\mathrm{fl}(x) = \begin{cases}
x', & \text{ha } |x - x'| < \frac{1}{2}|x'' - x'|,\\
x'', & \text{ha } |x - x''| < \frac{1}{2}|x'' - x'|,\\
x', & \text{ha } |x - x'| = \frac{1}{2}|x'' - x'| \text{ és } m_{23} = 0,\\
x'', & \text{ha } |x - x'| = \frac{1}{2}|x'' - x'| \text{ és } m_{23} = 1.
\end{cases}
$$

A határesetben, azaz ha $|x - x'| = \frac{1}{2}|x'' - x'|$ körülbelül az esetek felerészében fogunk így felfelé, és felerészben lefelé kerekíteni. A másik indoka ennek a definíciónak az, hogy ekkor a határesetben a kerekítés után a mantissza utolsó bitje mindig 0 lesz, azaz a kerekített számon a 2-vel való osztás hiba nélkül végrehajtható. Kerekítést használva tehát az elkövetett hiba

$$|x - \mathrm{fl}(x)| \leq \frac{1}{2}|x'' - x'| = \frac{1}{2}2^{-23}2^k.$$

Vizsgáljuk most a kerekítési hibát a pontos értékhez viszonyítva:

$$\frac{|x - \mathrm{fl}(x)|}{|x|} \leq \frac{|x - \mathrm{fl}(x)|}{(1.m_1 m_2 \ldots)_2 \cdot 2^k} \leq \frac{1}{2}2^{-23}.$$

Könnyen látható, hogy az 1 gépi szám után következő első gépi szám $1 + 2^{-23}$ az előbb vizsgált 32 bites számábrázolási rendszerben. Ezt általánosítva jelölje $\varepsilon_{\text{gépi}}$ az adott számábrázolási rendszerben az első 1-nél nagyobb gépi szám és 1 különbségét. Ezt a számot *gépi epszilonnak* nevezzük. Eszerint $\varepsilon_{\text{gépi}}$ a legkisebb olyan 2 hatvány, amelyre a számítógépen az $1 + \varepsilon_{\text{gépi}} > 1$ egyenlőtlenség ellenőrizhető. Könnyen igazolható a következő tétel, amelyet az előbb a 32 bites bináris alapú tárolási rendszerre beláttunk.

**1.9. tétel.** *Legyen $0 < \mathrm{fl}(x) < \mathtt{Inf}$, és tegyük fel, hogy a valós számokat kerekítve tároljuk. Ekkor*

$$\frac{|x - \mathrm{fl}(x)|}{|x|} \leq \frac{1}{2}\varepsilon_{gépi}.$$

A következő tétel bizonyítását az 5. feladatra hagyjuk.

**1.10. tétel.** *Legyen $b$ a valós számok ábrázolásakor használt számrendszer alapja, és $t$ a mantissza tárolására használt bitek száma. Ekkor*

$$
\varepsilon_{gépi} = \begin{cases}
2^{-t}, & \text{ha } b = 2,\\
b^{1-t}, & \text{ha } b \neq 2.
\end{cases}
$$

Most definiáljuk a közelítés hibájának fogalmát, és egyéb, ehhez kapcsolódó fogalmakat. Legyen $x$ egy valós szám, és tekintsük az $\tilde{x}$ valós számot $x$ közelítésének. Ekkor a *közelítés hibáján* az $|x - \tilde{x}|$ számot értjük. Gyakran maga a hiba a számok nagyságrendjének ismerete nélkül nem mond túl sokat. Pl. az 10000 számnak az 10000.1 közelítését elég pontosnak érezzük, az 1-nek viszont az 1.1 nem túl jó közelítése, pedig mindkét esetben a közelítés hibája 0.1. Több információt jelent, ha a pontos értékhez viszonyítjuk a hibát. A *közelítés relatív hibáján* az

$$\frac{|x - \tilde{x}|}{|x|} \qquad (x \neq 0)$$

számot értjük. Azt mondjuk, hogy a $b$ alapú számrendszerben az $\tilde{x}$ közelítés *$n$ számjegyben pontos*, ha

$$\frac{|x - \tilde{x}|}{|x|} \leq \frac{1}{2}b^{1-n}.$$

Látható, hogy minél kisebb a közelítés relatív hibája, annál nagyobb lesz a közelítésben szereplő pontos számjegyek száma. Ha $b = 10$, akkor úgy is megfogalmazhatjuk ezt a kapcsolatot a relatív hiba és a pontos számjegyek száma között, hogy egy nagyságrendi csökkenés (növekedés) a relatív hibában a pontos számjegyek számának egy jeggyel való növekedését (csökkenését) eredményezi.

**1.11. példa.** Legyen $x = 1657.3$ és $\tilde{x} = 1656.2$. Ekkor a közelítés hibája $|x - \tilde{x}| = 1.1$, relatív hibája $|x - \tilde{x}|/x = 0.0006637$. Mivel $|x - \tilde{x}|/x = 0.0006637 < 0.5 \cdot 10^{-2}$, ezért a közelítés az előbbi definíció értelmében 3 számjegyben pontos. Ha viszont $x$-et az $\tilde{x} = 1656.9$ számmal közelítjük, akkor ebben az esetben $|x - \tilde{x}|/x = 0.0002413 < 0.5 \cdot 10^{-3}$, azaz definíciónk szerint a közelítés 4 számjegyben pontos. $\square$

Az előbbi definíció és az 1.9. tétel szerint egyszeres pontosságú számábrázolás esetén az $x$ valós szám helyett tárolt $\mathrm{fl}(x)$ gépi szám 24 bináris számjegyben pontos. Minket általában a tízes számrendszerben felírt alakban érdekel a pontos számjegyek száma. Az egyszeres pontosság esetében ezt megkapjuk, ha az

$$\frac{1}{2}2^{-23} \leq \frac{1}{2}10^{1-n}$$

egyenlőtlenséget teljesítő legnagyobb $n$ egész számot megkeressük. Könnyen kiszámolható, hogy ez $n = 7$, azaz egyszeres számábrázolás esetében a tárolt gépi szám legalább 7 számjegyben pontos a tízes számrendszerben.

**1.12. példa.** Tekintsük az $x = 12.4$ valós számot. Írjuk fel először ennek bináris alakját. Könnyű ellenőrizni, hogy $12 = (1100)_2$. Keressük tehát a törtrésznek, 0.4-nek a bináris alakját:

$$0.4 = (0.x_1 x_2 x_3 \ldots)_2 = \frac{x_1}{2} + \frac{x_2}{2^2} + \frac{x_3}{2^3} + \cdots.$$

Ha tehát 0.4-nek vesszük a 2-szeresét, akkor annak egész része $x_1$-et fogja megadni. $0.4 \cdot 2 = 0.8$, azaz $x_1 = 0$. Vesszük a szorzat törtrészét, 0.8-at, és megismételjük az eljárást. $0.8 \cdot 2 = 1.6$, tehát $x_2 = 1$. A szorzat törtrésze 0.6, amivel folytatjuk: $0.6 \cdot 2 = 1.2$, így $x_3 = 1$. Ennek a szorzatnak a törtrésze 0.2. $0.2 \cdot 2 = 0.4$, ezért $x_4 = 0$, és 0.4-gyel folytatjuk az eljárást. Látható, hogy ezután az eddigi jegyek, 0011 ismétlődnek ciklikusan végtelen sokszor, azaz $0.4 = (0.011001100110011001100110011\ldots)_2$. Az $x$ szám bináris normál alakja tehát

$$x = 12.4 = (1.10001100110011001100110011\ldots)_2 \cdot 2^3.$$

$x$ mantisszáját 23 bitre kerekítve (lefelé) kapjuk, hogy

$$\mathrm{fl}(x) = (1.10001100110011001100110)_2 \cdot 2^3.$$

Ennek értéke a tízes számrendszerben felírva: $\mathrm{fl}(x) = 12.3999996185302734375$. $\square$

A számítógép által elvégzett gépi aritmetikai műveleteket a következőképpen lehet formálisan definiálni:

$$
\begin{aligned}
x \oplus y &:= \mathrm{fl}(\mathrm{fl}(x) + \mathrm{fl}(y)),\\
x \ominus y &:= \mathrm{fl}(\mathrm{fl}(x) - \mathrm{fl}(y)),\\
x \odot y &:= \mathrm{fl}(\mathrm{fl}(x) \cdot \mathrm{fl}(y)),\\
x \oslash y &:= \mathrm{fl}(\mathrm{fl}(x) / \mathrm{fl}(y)).
\end{aligned}
$$

Eszerint vesszük az adott műveletben szereplő tényezők gépi számra kerekített értékeit, azon elvégezzük a műveletet, majd a művelet eredményét kerekítjük a legközelebbi gépi számra.

Későbbi példáinkban gyakran fogunk hivatkozni az ún. *négyjegyű aritmetikára*. Ezen azt értjük, hogy olyan számábrázolási rendszert használunk, amely tízes alapú, és 4 mantissza jegyet tárol (és feltesszük, hogy elegendően sok helyünk van a számolás közben fellépő számok kitevőinek tárolásához). Ez azt jelenti, hogy minden egyes részletszámolás eredményét az első nem nulla számjegytől számított 4 jegyre, azaz az első 4 *értékes számjegyre* kerekítjük, és ezt használjuk tovább a számolás során. Négyjegyű aritmetikát használva a kerekítési hibák hatását fel tudjuk erősíteni a vizsgált példákban.

**1.13. példa.** Négyjegyű aritmetikát használva $1.043 + 32.25 = 33.29$, és hasonlóan $1.043 \cdot 32.25 = 33.64$ (kerekítés után). Viszont $1.043 + 20340 = 20340$ lesz, mivel négy értékes számjegyre kell kerekítenünk a $20341.043$ pontos értéket. $\square$

### Feladatok

1. Váltsa át bináris alakra a következő tízes számrendszerben felírt számokat:

$$57, \quad -243, \quad 0.25, \quad 35.27$$

<details class="reveal-solution"><summary>Megoldás</summary>

**(a) 57**
```
57 ÷ 2 = 28 remainder 1
28 ÷ 2 = 14 remainder 0
14 ÷ 2 =  7 remainder 0
 7 ÷ 2 =  3 remainder 1
 3 ÷ 2 =  1 remainder 1
 1 ÷ 2 =  0 remainder 1
```
Reading remainders from bottom: **57 = (111001)₂**

**(b) -243** — first find binary of 243:
```
243 = (11110011)₂
```
Since 243 > 127 we need at least 9 bits for the magnitude. Using 9 bits, two's-complement:
$$-243 = 2^9 - 243 = 512 - 243 = 269 = (100001101)_2$$

**(c) 0.25**
```
0.25 × 2 = 0.5  → digit 0
0.5  × 2 = 1.0  → digit 1
```
**0.25 = (0.01)₂**

**(d) 35.27** — integer part $35 = (100011)_2$; fractional part $0.27$ gives a non-terminating expansion:
$$35.27 \approx (100011.010001010001\ldots)_2$$

</details>

2. Írja fel a következő bináris számokat tízes alapú számrendszerben:

$$(101101)_2, \quad (0.10011)_2, \quad (1010.01101)_2$$

<details class="reveal-solution"><summary>Megoldás</summary>

**(a)** $1\cdot2^5 + 0\cdot2^4 + 1\cdot2^3 + 1\cdot2^2 + 0\cdot2^1 + 1\cdot2^0 = 32 + 8 + 4 + 1 = 45$, so $(101101)_2 = 45$.

**(b)** $1\cdot2^{-1} + 0\cdot2^{-2} + 0\cdot2^{-3} + 1\cdot2^{-4} + 1\cdot2^{-5} = 0.5 + 0.0625 + 0.03125 = 0.59375$, so $(0.10011)_2 = 0.59375$.

**(c)** Integer part $1\cdot2^3 + 1\cdot2^1 = 10$; fractional part $0.25 + 0.125 + 0.03125 = 0.40625$, so $(1010.01101)_2 = 10.40625$.

</details>

3. Mutassa meg, hogy a kettes komplemens kódot negatív szám esetén megkaphatjuk a következőképpen: Vegyük a tárolandó negatív szám abszolút értékének bináris alakját. Cseréljünk minden 0-t 1-re és 1-et 0-ra, majd adjunk 1-et a kapott számhoz.

<details class="reveal-solution"><summary>Megoldás</summary>

Let $I$ be a positive integer with $m$-bit binary representation, bits $b_{m-1}\ldots b_0$, so $I = \sum_{i=0}^{m-1} b_i 2^i$. The two's-complement of $-I$ is by definition
$$C_2(-I) = 2^m - I.$$
Flipping all bits gives
$$\text{flipped} = \sum_{i=0}^{m-1}(1-b_i)2^i = (2^m - 1) - I.$$
Adding 1:
$$(2^m - 1) - I + 1 = 2^m - I = C_2(-I).$$
This proves the bit-flip-and-add-one method is correct. $\square$

</details>

4. Legyen $I_1$ és $I_2$ két $m$ biten tárolt pozitív egész szám. Mutassa meg, hogy az $I_1 - I_2$ különbség kiszámítható úgy, hogy vesszük $I_2$ kettes komplemens kódját, $C_2$-t, és ehhez hozzáadjuk $I_1$-et, majd vesszük az összeg utolsó $m$ bitjét!

<details class="reveal-solution"><summary>Megoldás</summary>

By definition $C_2(I_2) = 2^m - I_2$ represents $-I_2$. Then
$$I_1 + C_2(I_2) = I_1 + (2^m - I_2) = (I_1 - I_2) + 2^m.$$
Taking the last $m$ bits is reduction modulo $2^m$:
$$\big((I_1 - I_2) + 2^m\big) \bmod 2^m = (I_1 - I_2) \bmod 2^m.$$
If $I_1 \ge I_2$ then $0 \le I_1 - I_2 < 2^m$ and the result is exactly $I_1 - I_2$. If $I_1 < I_2$ the result is the two's-complement representation of the negative number $I_1 - I_2$. Hence subtraction is performed as addition with the two's-complement. $\square$

</details>

5. Bizonyítsa be az 1.10. tételt!

<details class="reveal-solution"><summary>Megoldás</summary>

**Theorem.** For base $b$ with $t$ mantissa digits, $\varepsilon_m = 2^{-t}$ if $b = 2$, and $\varepsilon_m = b^{1-t}$ if $b \ne 2$.

Machine epsilon is the gap between $1$ and the next larger machine number.

*Case $b = 2$:* here $1 = (1.0\ldots0)_2 \times 2^0$ with $t$ mantissa bits, and the next machine number is $(1.0\ldots01)_2\times 2^0 = 1 + 2^{-t}$. Therefore $\varepsilon_m = (1 + 2^{-t}) - 1 = 2^{-t}$.

*Case $b \ne 2$:* here $1 = (1.0\ldots0)_b \times b^0$, and the next machine number is $1 + b^{-(t-1)} = 1 + b^{1-t}$, so $\varepsilon_m = b^{1-t}$. $\square$

</details>

6. Írjon egy olyan programot, amely kiszámítja az adott számítógéphez és a használt számábrázolási rendszerhez tartozó gépi epszilon értékét!

<details class="reveal-solution"><summary>Megoldás</summary>

```python
def find_machine_epsilon():
    """Find machine epsilon for floating-point arithmetic."""
    eps = 1.0
    while 1.0 + eps > 1.0:
        eps = eps / 2.0
    return eps * 2  # last value where 1 + eps > 1

import numpy as np
def find_machine_epsilon_float32():
    eps = np.float32(1.0)
    while np.float32(1.0) + eps > np.float32(1.0):
        eps = np.float32(eps / 2.0)
    return np.float32(eps * 2)
```
Expected results: double precision $\varepsilon_m \approx 2.22\times10^{-16} = 2^{-52}$; single precision $\varepsilon_m \approx 1.19\times10^{-7} = 2^{-23}$.

</details>

7. Számítsa ki, hogy kétszeres pontosságú számábrázolás esetén hány számjegyben pontos a tárolt gépi szám!

<details class="reveal-solution"><summary>Megoldás</summary>

Double precision uses $t = 52$ mantissa bits (plus 1 implicit leading bit = 53 significant bits), so $\varepsilon_m = 2^{-52}$. For $n$ exact decimal digits we need
$$\tfrac12\cdot 2^{-52} \le \tfrac12\cdot 10^{1-n} \;\Longrightarrow\; 2^{-52} \le 10^{1-n}.$$
Taking $\log_{10}$:
$$n \le 1 + 52\log_{10}(2) = 1 + 52\times 0.30103 \approx 16.65.$$
So double precision is exact to **15–16 decimal digits**.

</details>

8. Legyen $x = (x_0.x_1 x_2 \ldots x_m x_{m+1} x_{m+2} \ldots) \cdot 10^k$, $\tilde{x} = (x_0.x_1 x_2 \ldots x_m \tilde{x}_{m+1} \tilde{x}_{m+2} \ldots) \cdot 10^k$, azaz $x$ és $\tilde{x}$ azonos nagyságrendűek, és az első $m + 1$ db számjegyük megegyezik. Lássa be, hogy ekkor $\tilde{x}$ legalább $m$ számjegy pontosságú közelítése $x$-nek!

<details class="reveal-solution"><summary>Megoldás</summary>

The two numbers agree in their first $m+1$ digits, so their difference starts at the $(m+1)$-th fractional position:
$$|x - \tilde{x}| = |0.\underbrace{0\ldots0}_{m}(x_{m+1}-\tilde{x}_{m+1})\ldots|\times 10^k < 10^{-m}\times 10^k.$$
The relative error is then
$$\frac{|x-\tilde{x}|}{|x|} < \frac{10^{-m}\times 10^k}{x_0\times 10^k} = \frac{10^{-m}}{x_0} \le 10^{-m},$$
since $x_0 \ge 1$. For $m$ exact digits we need relative error $\le \tfrac12\times 10^{1-m}$, and indeed $10^{-m} < \tfrac12\times 10^{1-m}$ for $m \ge 1$. Hence $\tilde{x}$ has at least $m$ exact digits. $\square$

</details>
