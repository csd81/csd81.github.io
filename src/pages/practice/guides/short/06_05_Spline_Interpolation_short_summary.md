**6.5. Spline interpoláció**


## 1. A spline interpoláció fogalma és motivációja

* **A probléma a magas fokú globális polinomokkal:** A korábbi fejezetekben (6.1.–6.4.) látott globális polinomos interpolációk (Lagrange, Newton, Hermite) esetén az alappontok számának növekedésével a polinom fokszáma is elkerülhetetlenül megemelkedik. A magas fokszámú polinomok viszont hajlamosak a Runge-jelenségre, azaz az intervallum szélei felé haladva hatalmas, vad oszcillációkat produkálnak, így instabillá válnak.
* **A spline-megközelítés (Szakaszonkénti interpoláció):** Ahelyett, hogy egyetlen magas fokszámú polinommal kötnénk össze az összes pontot, az intervallumot részintervallumokra bontjuk, és **minden egyes $[x_i, x_{i+1}]$ szakaszon külön-külön egy-egy alacsony fokszámú polinomot** illesztünk. Az így kapott szakaszonkénti füzérfüggvényt nevezzük **spline**-nak.

### A spline osztályozása fokszám szerint:

* **Lineáris spline ($k=1$):** A pontokat szakaszonként egyenes vonalakkal (elsőfokú polinomokkal) kötjük össze. Geometriailag ez egy törtvonal. Hátránya, hogy az illesztési pontokban (csomópontokban) megtörik, így nem sima, nem differenciálható.
* **Kvadratikus spline ($k=2$):** Szakaszonként másodfokú parabolák.
* **Kubikus spline ($k=3$):** Szakaszonként harmadfokú polinomok. Ez a legfontosabb mérnöki eszköz, mivel biztosítja a felület tökéletes simaságát.



## 2. A kubikus spline interpoláció matematikai modellje

Adottak az $a = x_0 < x_1 < \ldots < x_n = b$ alappontok és a hozzájuk tartozó $y_0, y_1, \ldots, y_n$ függvényértékek. Olyan $S \colon [a,b] \to \mathbb{R}$ függvényt keresünk, amely teljesíti az alábbi szigorú feltételeket:

1. **Interpolációs kényszer:** Minden csomópontban felveszi a megadott értéket:

$$S(x_i) = y_i, \qquad i = 0, 1, \ldots, n$$


2. **Szakaszos struktúra:** Minden $[x_i, x_{i+1}]$ ($i=0,\dots,n-1$) részintervallumon az $S_i(x)$ korlátozás egy harmadfokú polinom:

$$S_i(x) = a_i + b_i(x - x_i) + c_i(x - x_i)^2 + d_i(x - x_i)^3$$



Mivel $n$ darab szakaszunk van, és szakaszonként 4 együttható ($a_i, b_i, c_i, d_i$), összesen **$4n$ darab ismeretlen paramétert** kell meghatároznunk.
3. **Folytonossági és Simasági kényszerek:** Ahhoz, hogy a görbe ne törjön meg, a belső $x_1, \dots, x_{n-1}$ pontokban megköveteljük a szakaszok **értékének, első deriváltjának (meredekségének) és második deriváltjának (görbületének) a tökéletes egyezését**:
* $S_i(x_{i+1}) = S_{i+1}(x_{i+1})$ (Folytonos csatlakozás)
* $S_i'(x_{i+1}) = S_{i+1}'(x_{i+1})$ (Sima érintkezés)
* $S_i''(x_{i+1}) = S_{i+1}''(x_{i+1})$ (Folytonos görbület — $S \in C^2[a,b]$)





## 3. Peremfeltételek és a Természetes Kubikus Spline

A fenti feltételek (interpoláció és belső simaság) összesen $4n - 2$ darab független egyenletet határoznak meg. Mivel $4n$ darab ismeretlen együtthatónk van, **szükségünk van még 2 további szabadon választható egyenletre (peremfeltételre)** az intervallum két legszélső végpontjában ($a$ és $b$), hogy a rendszer egyértelműen megoldható legyen.

A leggyakoribb és elméletileg legfontosabb megválasztás a **természetes peremfeltétel** (Natural boundary condition), amely kimondja, hogy a görbe a két szélén teljesen kiegyenesedik, azaz a második deriváltak ott nullává válnak:


$$S''(a) = 0 \qquad \text{és} \qquad S''(b) = 0$$

Az ezekkel a peremfeltételekkel kiegészített függvényt **természetes kubikus spline függvénynek** nevezzük.



## 4. A Minimum Görbület Ttele (6.21. Tétel)

A kubikus spline nem csupán egy a lehetséges összekötő görbék közül; fizikai és matematikai szempontból ez a **legoptimálisabb sima függvény**. Nevét a mérnöki tervezésben régen használt rugalmas acél vonalzóról (fizikai spline) kapta, amely a pontok között a minimális feszültségű, legtermészetesebb alakot vette fel.

> **6.21. Tétel (Holladay-tétel):** Legyen $S$ az $(x_i, y_i)$ ($i=0,\dots,n$) adatokat interpoláló természetes kubikus spline függvény. Legyen továbbá $g \in C^2[a,b]$ egy tetszőleges másik függvény, amely szintén pontosan interpolálja ugyanezeket az adatokat ($g(x_i) = y_i$). Ekkor érvényes az alábbi egyenlőtlenség:
> 
> $$\int_a^b (S''(x))^2 \, dx \leq \int_a^b (g''(x))^2 \, dx$$
> 
> 

### Fizikai jelentés:

Mivel a mechanikában a görbület négyzetének integrálja ($\int (f'')^2$) egyenesen arányos a meghajlított testben felhalmozódó **belső rugalmas deformációs energiával**, a tétel azt bizonyítja, hogy az összes létező sima összekötő görbe közül a **természetes kubikus spline rendelkezik a legkisebb belső energiával (görbülettel)**. Ez garantálja, hogy a spline mentes lesz a mesterséges hullámzásoktól.



## 5. Hibabecslés

Ha a spline függvényt egy ismert, négyszer folytonosan differenciálható $f \in C^4[a,b]$ függvény közelítésére használjuk ekvidisztáns, $h$ lépésközű osztópontok mellett, a maximális elkövetett hiba rendkívül kedvezően alakul:


$$\max_{x \in [a,b]} |f(x) - S(x)| \leq \frac{5}{384} M_4 h^4$$


ahol $M_4 := \max_{t \in [a,b]} |f^{(4)}(t)|$.

**Következmény:** A hiba a lépésköz **negyedik hatványával** arányos ($\mathcal{O}(h^4)$). Ez azt jelenti, hogy ha a lépésközt a felére csökkentjük ($h \to h/2$), a közelítés hibája a **tizenhatod részére ($1/16$)** esik vissza, ami rendkívül gyors és hatékony konvergenciát biztosít.



## 6. Összegzés és gyakorlati haszon

A kubikus spline interpoláció a modern számítógépes tervezés (CAD/CAM, pl. autó- és repülőgépgyártás), a számítógépes grafika (Bézier- és B-spline görbék) és a jelfeldolgozás alapköve. Sikerének titka, hogy szakaszonkénti felépítése miatt teljesen immunis a globális polinomokat sújtó Runge-féle lengésekre, miközben a $C^2$ osztályú belső simasági kényszerek révén olyan tökéletesen esztétikus, törésmentes és minimális görbületű felületeket produkál, amelyek a fizikai valóságot a legprecízebben modellezik.