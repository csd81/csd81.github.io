**1.4. A véges számábrázolás következményei** 



## 1. Bevezetés: A probléma gyökere

Az előző (1.2.) fejezet elméletben már megalapozta, hogy a valós számok lebegőpontos tárolása véges mantisszahosszal történik. Ez a fejezet gyakorlati, numerikus példákon keresztül mutatja be, hogy ez a végesség milyen drasztikus pontosságvesztéshez, túlcsorduláshoz vagy matematikai anomáliákhoz vezethet az algoritmusok futtatása során.



## 2. Kivonási jegyvesztés a gyakorlatban (Kiejtési hiba)

Ha két egymáshoz nagyon közeli lebegőpontos számot vonunk ki egymásból, a legmagasabb helyi értékű értékes jegyek (amik megegyeztek) kiesnek, és a gép bizonytalan jegyeket hoz be a mantissza végére.

### Mintapélda: Másodfokú egyenlet megoldása (1.19. Példa)

Tekintsük az alábbi másodfokú egyenletet, amelyet korlátozott, 4-jegyes kerekített tizedes aritmetikával számolunk ki:


$$x^2 - 83.5x + 1.5 = 0$$

A hagyományos megoldóképletet alkalmazva a kerekítések miatt a következő adódik:


$$\tilde{x} = \frac{83.5 \pm \sqrt{83.5^2 - 4 \cdot 1.5}}{2} = \frac{83.5 \pm \sqrt{6972 - 6.000}}{2} = \frac{83.5 \pm 83.46}{2}$$

* **Az első gyök ($\tilde{x}_1$):** $\frac{83.5 + 83.46}{2} = 83.50$. (A pontos érték: $83.482$, a relatív hiba elenyésző, $\delta_1 = 0.000215$).
* **A második gyök ($\tilde{x}_2$):** $\frac{83.5 - 83.46}{2} = \frac{0.040}{2} = 0.020$. (A pontos érték: $0.01796$, a relatív hiba óriási: **$\delta_2 = 0.113$ (kb. 11%)**).

**A hiba oka:** A második gyök számlálójában két rendkívül közeli számot ($83.5$ és $83.46$) vontunk ki egymásból, így a 4 értékes jegyből álló pontosság azonnal 1 értékes jegyre olvadt le.

### Hogyan hárítható el a jegyvesztés? (Mérnöki trükk)

A gyökök és az együtthatók közötti Viète-formulák alapján tudjuk, hogy $x_1 \cdot x_2 = \frac{c}{a}$. Ha a problémás $x_2$ gyököt nem kivonással, hanem a már pontosan megkapott $\tilde{x}_1$ segítségével, osztásként számítjuk ki, a kiejtési hiba teljesen elkerülhető:


$$\tilde{x}_2 = \frac{c}{a \cdot \tilde{x}_1} = \frac{1.5}{1 \cdot 83.50} \approx 0.01796$$


Ez a módosított számítás visszaadja a teljes 4-jegyű pontosságot.



## 3. Alulcsordulás és Túlcsordulás (Underflow / Overflow)

Ha egy matematikai képlet közbenső lépései során túl nagy vagy túl kicsi számok keletkeznek, a gép átlépi az ábrázolhatósági korlátokat, és leáll (vagy `Inf`/`NaN` értéket ad), még akkor is, ha a végeredmény egyébként egy normális méretű szám lenne.

### Mintapélda: $\frac{15^{40}}{40!}$ kiszámítása

* **A naiv módszer:** Kiszámoljuk külön a számlálót ($15^{40}$) és külön a nevezőt ($40!$), majd elosztjuk őket.
* *Probléma:* Egyszeres pontosságú lebegőpontos ábrázolásnál a $40!$ és a $15^{40}$ is önmagában jóval nagyobb, mint a maximálisan tárolható érték (kb. $10^{38}$), így a program **túlcsordulási hibával összeomlik**.


* **A numerikus megoldás (Átrendezés):** Csoportosítsuk át a szorzótényezőket páronként:

$$\frac{15^{40}}{40!} = \frac{15}{40} \cdot \frac{15}{39} \cdot \frac{15}{38} \cdots \frac{15}{1}$$



Így egy egyszerű ciklussal felépítve minden egyes részeredmény biztonságosan a hardver ábrázolási tartományán belül marad, és megkapjuk a pontos végeredményt ($0.135521$).



## 4. Az elnyelés jelensége és az összeadás nem-asszociativitása

Mivel a lebegőpontos összeadás során a kisebb szám mantisszáját biteltolással hozzá kell igazítani a nagyobb szám kitevőjéhez, a túl kicsi tagok értékes jegyei egyszerűen kieshetnek (elnyelődnek).

### Mintapélda: Sorösszegzés balról jobbra vs. jobbról balra

Számítsuk ki az alábbi összeget 4-jegyes decimális aritmetikával:


$$S = 1.000 + \sum_{i=1}^{1000} 0.0003$$

* **A) Naiv sorrend (Balról jobbra):**

$$1.000 + 0.0003 = 1.0003 \xrightarrow{\text{kerekítve}} 1.000$$



A gép kerekítési szabálya miatt a hozzáadott kis érték teljesen **elnyelődött**. Ha ezt ezerszer megismételjük, a végeredmény makacsul **$1.000$** marad, vagyis az ezer darab kis szám hatása teljesen megsemmisül.
* **B) Helyes sorrend (Jobbról balra, azaz növekvő sorrendben):**
Először adjuk össze magukat a kis számokat: $0.0003 + 0.0003 = 0.0006$, és így tovább. Mivel a kis számok azonos nagyságrendűek, nincs elnyelődés. Az ezer darab kis tag összege pontosan $1000 \cdot 0.0003 = 0.3000$ lesz. Ezt a végén hozzáadva a nagy számhoz:

$$0.3000 + 1.000 = \mathbf{1.300}$$



> **Főtanulság:** A lebegőpontos összeadás a számítógépeken **NEM asszociatív és NEM kommutatív művelet** a több tagú összegek szintjén. A kerekítési hibák minimalizálása érdekében a sorokat és összegeket **mindig a tagok abszolút érték szerint növekvő sorrendjében** kell kiszámítani.