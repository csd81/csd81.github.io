# Lineáris algebra

<!-- OCR of "lin.algebra könyv.pdf" — Wettl Ferenc (BME), Lineáris algebra (tankönyv). Faithful HU transcription with KaTeX. Figures rendered as italic caption notes; margin notes as blockquotes. -->

*Wettl Ferenc · Budapesti Műszaki és Gazdaságtudományi Egyetem*

# I. rész — A lineáris algebra forrásai

A lineáris algebra két fő forrásának egyike a geometria, másika az algebra vidékéről ered. Mindkét forrás jól jellemezhető egy-egy elemi fogalommal: az egyik a vektor, a másik a lineáris egyenletrendszer. E könyv első része e két fogalmat vizsgálja egészen elemi, középiskolai szintről indulva. A lineáris algebra mélyebb fogalmai már itt fölbukkannak, de csak nagyon egyszerű és a legkevésbé absztrakt formájukban. Az első rész végére látni fogjuk, hogy e két forrás már ezen a bevezető szinten szétválaszthatatlanul egyetlen folyammá válik.

*Ábra: Hang gliding @ Pule (CC) on flickr by purplemattfish.*

# 1. Vektorok

Általánosan elterjedt nézet szerint a természeti jelenségek leírásakor sok összefüggést számszerű adatokkal, ún. *skalárokkal* vagy *skalármennyiségekkel* fejezünk ki, míg mások leírásához a számadat mellett egy irány megadása is szükséges; ez utóbbiakat nevezzük *vektoroknak*. A valóság ennél sokkal színesebb: a téridő 4-dimenziós vektoraitól, a bitvektorokon, a gazdasági számításokban használt többszázezer-dimenziós, vagy az internetkereső által kezelt sokmillió-dimenziós vektorokon át a matematika különböző területein gyümölcsöző absztrakt vektorfogalomig széles a skála.

## Vektorok a 2- és 3-dimenziós térben

*E szakaszban a vektor szemléletes, geometriai fogalmával ismerkedünk. A vektorok összeadásán és skalárral való szorzásán keresztül a lineáris kombináció és a lineáris függetlenség fogalmáig jutunk. E szakasz kulcsfogalma: egy vektor lineárisan független vektorok lineáris kombinációjaként való előállítása.*

### Irányított szakasz, kötött és szabad vektor

Tekintsünk egy sárkányrepülőt repülés közben. Számtalan skalár- és vektormennyiség írja le az állapotát. A földtől való távolság, a légnyomás, a légellenállási együttható vagy az emelkedés szöge skalármennyiségek, míg vektormennyiségek a sebesség- és gyorsulásvektor, a szárnyra ható felhajtóerő, a gravitációs erő, a szél ereje vagy az elmozdulást leíró vektor.

A vektor fogalma kapcsolatban van az irányított szakasz fogalmával. Irányított szakaszon olyan szakaszt értünk, melynek végpontjain megadunk egy sorrendet, azaz kijelöljük, hogy melyik a *kezdő-* és melyik a *végpontja*. Más szóhasználatban az irányított szakaszt szokás *kötött vektornak* is nevezni. Az $A$ kezdőpontú és $B$ végpontú irányított szakaszt $\overrightarrow{AB}$ jelöli.

> *Skalár, skaláris:* a *lépcső, létra* jelentésű latin *scalae* (scālae) szóból ered. E szó származéka a skála szó is, mely jól őrzi az eredeti jelentést. A skalár vagy skaláris szót a matematikában szám vagy számszerű értelemben használjuk, például olyankor, amikor egy mennyiségről azt akarjuk hangsúlyozni, hogy irány nélküli, azaz nem vektor jellegű.

Több jelenség leírására a kötött vektor alkalmas. Természetes példa az elmozdulásvektor, mely megadja, hogy egy tárgy a tér mely pontjából melyik pontjába jutott. Másik példa kötött vektorra a rugalmas testen alakváltozást okozó erőt leíró vektor (1.1. ábra).

Alkalmazásokban gyakran előfordul, hogy egy jelenség különböző irányított szakaszokkal is ugyanúgy leírható. Például ha egy tárgy mozgását egy olyan irányított szakasszal jellemezzük, melynek hossza az időegység alatt megtett út hosszával egyenlő, iránya pedig a mozgás irányát jelzi, akkor mindegy hogy a tér melyik pontjából indítjuk e szakaszt, a mozgást ugyanúgy leírja (1.2. ábra). Ekkor tehát nem a két pont, hanem azok viszonya a kérdés, azaz hogy az egyik pont a másiktól milyen *távolságra*, és milyen *irányban* van. Az, hogy a két pont pontosan hol van, nem lényeges. Ekkor bármely két irányított szakasz, mely párhuzamosan egymásba tolható, ugyanazt a viszonyt fejezi ki. Az így kapott fogalmat a fizikában *szabad vektornak* nevezik. Ez a lineáris algebra vektor-fogalmának egyik forrása: a *vektor* a geometriában irányított szakasszal reprezentálható azt hozzávéve, hogy két irányított szakasz pontosan akkor reprezentálja ugyanazt a vektort, ha párhuzamosan egymásba tolhatók (ld. 1.3. ábra).

*1.1. ábra. Kötött vektorok: (a) elmozdulásvektor (lábnyomokkal), (b) rugalmas testen alakváltozást okozó erő vektora.*

*1.2. ábra. Példa szabad vektorra.*

Vektorok jelölésére félkövér kisbetűket használunk, pl. $\mathbf{x}$, $\mathbf{u}$, $\mathbf{v}$, stb. A műszaki és fizikai szakirodalomban a félkövér nagy betű is előfordul, pl. az $\mathbf{F}$ erő, a $\mathbf{B}$ indukció is vektormennyiségek.

> *Vektor:* a *hordozó, vivő, utazó* jelentésű latin *vector* szóból származik. A tudomány más területein hordozó anyag, az élettanban vírushordozó értelemben használják.

### Vektor megadása egy irányított szakasszal

Egy vektor megadható egy irányított szakasszal, azaz két pont és a köztük lévő sorrend kijelölésével. Valójában ennyi adat felesleges, hisz egy irányított szakasz önmagával párhuzamosan eltolva ugyanazt a vektort adja meg, ezért például kiköthető, hogy a kezdőpont a sík (tér) egy előre kijelölt rögzített pontja legyen. Ezt a közös kezdőpontot nevezzük *origónak*. Egy origóból induló irányított szakaszt egyértelműen definiál a végpontja, így a vektorok megadásához elég egyetlen pont, a végpont megadása. Ezzel a sík vagy tér pontjai és vektorai közt kölcsönösen egyértelmű megfeleltetést létesíthetünk (1.4. ábra). Az origóból $P$ pontba húzott irányított $\overrightarrow{OP}$ szakaszt a ponthoz tartozó *helyvektornak* is szokás nevezni. Világos, hogy minden vektor reprezentánsai közt pontosan egy helyvektor van.

A későbbiekben gyakran fogunk egy ponthalmazt az origóból a ponthalmaz pontjaiba mutató vektorokkal jellemezni. Amikor vektorok végpontjairól beszélünk, mindig a vektoroknak megfelelő, az origóból indított irányított szakaszok végpontjaira gondolunk.

Az olyan vektort, melynek kezdő és végpontja egybeesik, *zérusvektornak* vagy *nullvektornak* nevezzük. A zérusvektort általában félkövér zérussal, azaz $\mathbf{0}$-val jelöljük. A pontok és vektorok közti megfeleltetésben a zérusvektornak az origó felel meg.

> *Vektorok jelölése:* Műszaki, fizikai szövegek szedésének tipográfiai szabályait az ISO 31-11 szabvány írja le. Eszerint a vektorok félkövér betűkkel szedendők. Kézírásban aláhúzással, vagy fölé írt nyíllal szokás jelezni a vektort (pl. $\underline{x}$, $\underline{u}$, $\vec{u}$, …), de körültekintő jelölésrendszer és jegyzetelés esetén elhagyhatók a jelzések. Felsőbb matematikai művek nem használják e szabványt, mondván, kiderül a szövegből, hogy vektort jelölnek-e a betűk ($x$, $u$, $v$, …).

*1.3. ábra. Ugyanazt a vektort reprezentáló irányított szakaszok.*

*1.4. ábra. A sík pontjai és vektorai közti kölcsönösen egyértelmű megfeleltetés: egy $P$ pontnak az $\overrightarrow{OP}$ vektor felel meg, az origónak a nullvektor.*

### Vektor megadása hossz és irány segítségével

Ha tudunk távolságot mérni és irányt meghatározni, akkor a vektor megadható hosszával és irányával is. A vektor *hosszát*, azaz két végpontjának távolságát, a vektor *abszolút értékének* is nevezzük. Az $\mathbf{a}$ vektor abszolút értékét $|\mathbf{a}|$ jelöli. Vektor abszolút értékét a vektor *euklideszi normájának* is nevezik, ugyanis speciális esete egy általánosabb fogalomnak, a normának. Az $\mathbf{a}$ vektor (euklideszi) normájának jelölése az abszolút értékre emlékeztet: $\|\mathbf{a}\|$.

Az irány fogalmát az 1.73. feladatban definiáljuk. Itt megelégszünk annyival, hogy két nemzérus vektort *azonos irányú*nak vagy *egyirányú*nak nevezünk, ha a kezdőpontjukból induló, és a végpontjukon áthaladó félegyenesek párhuzamos eltolással fedésbe hozhatók (1.5 (a) ábra). Két vektort *kollineáris*nak vagy *párhuzamos*nak nevezünk, ha az őket tartalmazó egyenesek párhuzamosak. Két vektort, amely párhuzamos, de nem egyirányú, *ellenkező irányú*nak nevezünk (1.5 (b) ábra). A zérusvektor irányát tetszőlegesnek tekintjük, így az bármely vektorral egyirányú. Belátható, hogy a vektort egyértelműen meghatározza hossza és iránya.

Vektor irányának meghatározásakor gyakran hívjuk segítségül a szög fogalmát. Két vektor szögén azt a szöget értjük, melyet a sík vagy tér egy tetszőleges pontjából kiinduló és az adott vektorokkal egyirányú félegyenesek zárnak be (1.6 ábra). Az $\mathbf{a}$ és $\mathbf{b}$ vektorok szögét $(\mathbf{a},\mathbf{b})_\angle$ jelöli. Két vektor szöge tehát mindig $0°$ és $180°$ – radiánban mérve $0$ és $\pi$ – közé esik, beleértve a határokat is. Egyirányú vektorok szöge $0$, ellenkező irányúaké $\pi$.

*1.5. ábra. (a) egyirányú vektorok, (b) kollineáris (párhuzamos) vektorok, vannak köztük egyirányúak és ellenkező irányúak.*

*1.6. ábra. Két vektor szöge ($0 \leqslant \alpha, \beta, \gamma \leqslant \pi$). Az ábra felső felén a két adott vektor, alatta szögük meghatározásának módja szerepel.*

## Vektorműveletek a 2- és 3-dimenziós térben

A vektorműveletek – az összeadás és a számmal való szorzás – definíciója természetes módon adódik, ha a vektorok tipikus alkalmazásaira gondolunk. Pl. magától értetődő, hogy két elmozdulás összegén az elmozgatások egymás után való elvégzését, egy eltolás kétszeresén egy azonos irányú, de kétszer olyan hosszú eltolást értünk.

**1.1. definíció (Két vektor összege – háromszögmódszer).** *Legyen adva két vektor, $\mathbf{a}$ és $\mathbf{b}$. Vegyünk föl egy tetszőleges $O$ pontot. Indítsunk belőle egy $\mathbf{a}$-val egyenlő $\overrightarrow{OP}$ vektort, ennek végpontjából pedig egy $\mathbf{b}$-vel egyenlő $\overrightarrow{PQ}$ vektort. Az $\overrightarrow{OQ}$ vektort az $\mathbf{a}$ és $\mathbf{b}$ vektorok összegének nevezzük és $\mathbf{a}+\mathbf{b}$-vel jelöljük (ld. 1.7. ábra).*

Könnyen belátható, hogy az eredmény független az $O$ pont megválasztásától, tehát vektorok összeadásának művelete definiálható e módszerrel (a bizonyítás leolvasható az 1.8. ábráról).

Egy másik módszert is ismertetünk két nem kollineáris vektor összegének megszerkesztésére:

*1.7. ábra. Az $\mathbf{a}$ és $\mathbf{b}$ vektor összege.*

*1.8. ábra. Az összeg független az $O$ pont megválasztásától, ugyanis $\overrightarrow{OQ}$ és $\overrightarrow{O'Q'}$ azonos vektort reprezentál.*

**1.2. állítás (Paralelogramma-módszer).** *A közös kezdőpontból indított $\mathbf{a}$ és $\mathbf{b}$ vektorok összege megkapható abból a paralelogrammából, melynek két szomszédos oldala $\mathbf{a}$ és $\mathbf{b}$, ekkor az összeg a közös kezdőpontból indított és a paralelogramma szemközti csúcsába futó vektor.*

▶ Ha $\mathbf{a}$ és $\mathbf{b}$ *nem kollineárisak*, akkor összegük megkapható pl. úgy, hogy $\mathbf{a}$ végpontján át egy $\mathbf{b}$ egyenesével, $\mathbf{b}$ végpontján át egy $\mathbf{a}$ egyenesével párhuzamos egyenest húzunk. A közös kezdőpontból e két egyenes metszéspontjába futó vektor lesz az összeg (ld. 1.9. ábra).

Az alkalmazásokban hol a háromszög-, hol a paralelogramma-módszer tűnik kézenfekvőbbnek (ld. 1.10).

Ha $\mathbf{a}$ és $\mathbf{b}$ két térbeli vektor, akkor a háromszögmódszerben és a paralelogramma-módszerben is az $\mathbf{a}$, $\mathbf{b}$ és $\mathbf{a}+\mathbf{b}$ vektorokat reprezentáló irányított szakaszok egy síkba esnek. Általában azt mondjuk, hogy néhány térbeli vektor egy síkba esik, más szóval *komplanáris*, ha van olyan sík, hogy mindegyik vektort reprezentáló irányított szakasz párhuzamosan betolható e síkba. Eszerint tehát az $\mathbf{a}$, $\mathbf{b}$ és $\mathbf{a}+\mathbf{b}$ vektorok mindig komplanárisak.

A vektorösszeadás kommutatív ($\mathbf{a}+\mathbf{b} = \mathbf{b}+\mathbf{a}$) és asszociatív ($\mathbf{a}+(\mathbf{b}+\mathbf{c}) = (\mathbf{a}+\mathbf{b})+\mathbf{c}$). Igaz voltuk leolvasható az 1.11. ábráról. Az asszociativitás következtében több tag összeadásánál elhagyható a zárójel, például az ábrabeli három vektor összegére $\mathbf{a}+\mathbf{b}+\mathbf{c}$ írható.

Az $\mathbf{a}$ és $\mathbf{b}$ vektorokat közös kezdőpontból indítva – a háromszögmódszerrel – azonnal látható, hogy csak egyetlen olyan $\mathbf{x}$ vektor létezik, melyre $\mathbf{a} = \mathbf{b}+\mathbf{x}$ (ld. 1.12 (a) ábra). Ennek felhasználásával definiálható vektorok különbsége.

**1.3. definíció (Vektorok különbsége).** *Adva van az $\mathbf{a}$ és $\mathbf{b}$ vektor. Azt az egyértelműen létező $\mathbf{x}$ vektort, melyre $\mathbf{a} = \mathbf{b}+\mathbf{x}$, az $\mathbf{a}$ és $\mathbf{b}$ különbségének nevezzük és $\mathbf{a}-\mathbf{b}$-vel jelöljük.*

Könnyen fejben tartható a különbségvektor megszerkesztése akár a háromszög-, akár a paralelogrammamódszerrel (ld. 1.12. ábra), ha a definícióra gondolunk, azaz arra, hogy $\mathbf{a}-\mathbf{b}$ az a vektor, melyet $\mathbf{b}$-hez adva $\mathbf{a}$-t kapunk, azaz
$$\mathbf{a} = \mathbf{b} + (\mathbf{a}-\mathbf{b}).$$

*1.9. ábra. Paralelogramma-módszer.*

*1.10. ábra. Az (a) ábrán a lábnyomok $O$-ból $P$-be, majd onnan $Q$-ba vezetnek. Az $\overrightarrow{OP}$ és a $\overrightarrow{PQ}$ elmozdulásvektorok összege $\overrightarrow{OQ}$ (háromszögmódszer). A (b) ábrán a csónak az $\overrightarrow{OB}$ irányba evez, de a folyó $\overrightarrow{OA}$ irányba folyik. A két sebesség eredője, azaz összege $\overrightarrow{OC}$ (paralelogramma-módszer).*

*1.11. ábra. A vektorösszeadás kommutativitása és asszociativitása.*

*1.12. ábra. A különbségvektor meghatározása háromszög- és paralelogramma-módszerrel.*

Az 1.13. ábráról az is leolvasható, hogy ha a $\mathbf{b}$ vektorral egyenlő hosszúságú, de ellenkező irányú vektort $-\mathbf{b}$ jelöli, akkor fönnáll az $\mathbf{a}-\mathbf{b} = \mathbf{a}+(-\mathbf{b})$ összefüggés, és így az is igaz, hogy $\mathbf{b}+(-\mathbf{b}) = \mathbf{0}$.

Érdekes megjegyezni, hogy ha $P$ és $Q$ két tetszőleges pont, akkor az $\overrightarrow{OQ}-\overrightarrow{OP}$ vektort akkor is ismerjük, ha az $O$ pontot nem, hisz az a $\overrightarrow{PQ}$ vektor. Sok hasonló jelenség vezetett a *torzor* fogalmához, melyet egy rövid széljegyzetben ismertetünk.

**1.4. definíció (Vektor szorzása skalárral).** *Legyen $k$ valós szám. Az $\mathbf{a}$ vektor $k$-szorosán azt a vektort értjük, melynek hossza az $\mathbf{a}$ hosszának $|k|$-szorosa, iránya*
- *tetszőleges, ha $k = 0$ vagy $\mathbf{a} = \mathbf{0}$,*
- *megegyezik az $\mathbf{a}$ irányával, ha $k > 0$, és*
- *ellentétes, ha $k < 0$ (ld. 1.14. ábra).*

A skalárral való szorzás definíciójából azonnal látszik, hogy minden $\mathbf{a}$ vektorra $1\mathbf{a} = \mathbf{a}$, $0\mathbf{a} = \mathbf{0}$ és $(-1)\mathbf{a} = -\mathbf{a}$.

E paragrafus végén összefoglaljuk a vektorműveletek legfontosabb tulajdonságait, melyek segítségével később általánosítani fogjuk a vektor fogalmát. Az eddig nem bizonyított tulajdonságok igazolását az Olvasóra hagyjuk.

**1.5. tétel (A vektorműveletek tulajdonságai).** *Ha $\mathbf{a}$, $\mathbf{b}$ és $\mathbf{c}$ a 2- vagy 3-dimenziós tér tetszőleges vektorai, $\mathbf{0}$ a zérusvektor és $r$, $s$ két tetszőleges valós szám, akkor fönnállnak az alábbi azonosságok:*

| | | | |
|---|---|---|---|
| *a)* | $\mathbf{a}+\mathbf{b} = \mathbf{b}+\mathbf{a}$ | *e)* | $r(s\mathbf{a}) = (rs)\mathbf{a}$ |
| *b)* | $(\mathbf{a}+\mathbf{b})+\mathbf{c} = \mathbf{a}+(\mathbf{b}+\mathbf{c})$ | *f)* | $r(\mathbf{a}+\mathbf{b}) = r\mathbf{a}+r\mathbf{b}$ |
| *c)* | $\mathbf{a}+\mathbf{0} = \mathbf{a}$ | *g)* | $(r+s)\mathbf{a} = r\mathbf{a}+s\mathbf{a}$ |
| *d)* | $\mathbf{a}+(-\mathbf{a}) = \mathbf{0}$ | *h)* | $1\mathbf{a} = \mathbf{a}$ és $0\mathbf{a} = \mathbf{0}$ |

### A lineáris kombináció definíciója

Ha vektorokra a skalárral való szorzás és az összeadás műveletét alkalmazzuk, akkor e vektorok egy lineáris kombinációját kapjuk. Pontosabban:

**1.6. definíció (Lineáris kombináció).** *Az $\mathbf{a}_1, \mathbf{a}_2, \ldots, \mathbf{a}_k$ vektorok lineáris kombinációján egy*
$$c_1\mathbf{a}_1 + c_2\mathbf{a}_2 + \ldots + c_k\mathbf{a}_k$$
*alakú vektort értünk, ahol $c_1, c_2, \ldots, c_k$ valós számok. Azt mondjuk, hogy a $\mathbf{v}$ vektor előáll az $\mathbf{a}_1, \mathbf{a}_2, \ldots, \mathbf{a}_k$ vektorok lineáris kombinációjaként, ha vannak olyan $c_1, c_2, \ldots, c_k$ valós számok, hogy $\mathbf{v} = c_1\mathbf{a}_1 + \ldots + c_k\mathbf{a}_k$.*

Ha egy vektort egy skalárral beszorzunk, az előző definíció szerint egy lineáris kombinációját kapjuk, mely vele párhuzamos, azaz kollineáris. Így egy nemzérus vektor összes lineáris kombinációja csupa vele párhuzamos vektor (ld. 1.15. ábrát). Ennél több is igaz:

> *Torzor:* a modern matematika fogalma. Néhány példa, mielőtt definiálnánk: (1) Az energiát a newtoni fizikában nem tudjuk mérni, csak az energiakülönbséget. Ha viszont megállapodunk abban, hogy egy adott rendszernek melyik állapota tartozik a 0 energiaszinthez, beszélhetünk a rendszer energiájáról is. (2) A pontba mutató vektor fogalmának nincs értelme, amíg nincs kijelölve az origó, viszont két pontba mutató vektor különbségét az origótól függetlenül is meg tudjuk határozni. (3) Egy $f$ függvény $I$ intervallumon vett határozatlan integrálja $F+C$ alakú, ahol $C$ konstans. Nincs értelme megkérdezni, hogy $f$ egy konkrét primitív függvényében mennyi a $C$ értéke, de két primitív függvény különbsége mindig egy konstans. (4) Egy hasonló jelenség a zenében: bármely két hang közti távolság meghatározható, de azt nem mondhatjuk meg hangra, hogy az a „fá", amíg nem rögzítjük, melyik a „dó".
>
> A torzort egy *kommutatív csoport* nevű algebrai struktúrával definiálhatjuk, mely egy kommutatív, asszociatív, null-elemes, invertálható művelettel ellátott és e műveletre zárt halmaz. Kommutatív csoport például a valósok az összeadásra nézve, a vektorok az összeadásra nézve, vagy $\mathbb{Z}_{12}$ az összeadásra nézve. Legyen $G$ egy kommutatív csoport, és $X$ egy nem üres halmaz, melyen definiálva van bármely két elem különbsége, ami $G$-beli, ha bármely $x_0, x_1, x_2 \in X$ elem esetén, ha $x_1 - x_0 = g_1$ és $x_2 - x_0 = g_2$, akkor $x_1 - x_2 = g_1 - g_2$. Másként fogalmazva, $X$ őrzi $G$ struktúráját a zéruselem nélkül úgy, hogy bármely elemét zéruselemnek választva azonnal megkapjuk $G$-t.

*1.13. ábra. Az $\mathbf{a}-\mathbf{b} = \mathbf{a}+(-\mathbf{b})$ szemléltetése.*

*1.14. ábra. Vektor skalárszorosai.*

**1.7. tétel (Vektorral párhuzamos vektorok).** *Ha $\mathbf{a}$ nem zérusvektor, akkor bármely vele párhuzamos $\mathbf{v}$ vektor az $\mathbf{a}$ skalárszorosa, azaz van olyan $c$ valós szám, hogy $\mathbf{v} = c\mathbf{a}$, más szóval $\mathbf{v}$ előáll az $\mathbf{a}$ valamely lineáris kombinációjaként. Ez az előállítás egyértelmű.*

*Bizonyítás.* Ha a két vektor egyirányú, az előállításban szereplő $c$ konstans egyszerűen a $\mathbf{v}$ és $\mathbf{a}$ vektorok abszolút értékének hányadosa, ha ellenkező irányúak, e hányados $(-1)$-szerese. $\square$

E tétel következménye, hogy ha $\mathbf{a}$ nem zérusvektor, akkor az $\mathbf{a}$ összes lineáris kombinációjának halmaza és az $\mathbf{a}$-val párhuzamos vektorok halmaza megegyezik. Másként fogalmazva: egy nemzérus vektor összes lineáris kombinációjának végpontja egy *origón átmenő egyenest ad*.

A háromszögmódszerből jól látszik, hogy tetszőleges két vektor bármely lineáris kombinációja velük komplanáris vektor lesz. Az állítás megfordítása is igaz:

**1.8. tétel (Két vektorral egy síkba eső vektorok).** *Ha $\mathbf{a}_1$ és $\mathbf{a}_2$ nem párhuzamos vektorok, akkor bármely velük egy síkba eső $\mathbf{v}$ vektor előáll az $\mathbf{a}_1$ és $\mathbf{a}_2$ valamely lineáris kombinációjaként, azaz van olyan $v_1$ és $v_2$ konstans, hogy $\mathbf{v} = v_1\mathbf{a}_1 + v_2\mathbf{a}_2$. Ez az előállítás egyértelmű.*

*Bizonyítás.* A bizonyításnak a felbontás létezését biztosító része könnyen leolvasható az 1.16. ábráról. A $\mathbf{v}$ végpontjából húzzunk az $\mathbf{a}_1$ és az $\mathbf{a}_2$ vektorokkal párhuzamos egyeneseket. Az így létrejött – esetleg elfajuló – paralelogramma két oldala az előző tétel szerint $\mathbf{a}_1$, illetve $\mathbf{a}_2$ konstansszorosa, melyek összege a paralelogramma szabály szerint épp $\mathbf{v}$. Előállítottuk tehát $\mathbf{v}$-t $\mathbf{a}_1$ és $\mathbf{a}_2$ lineáris kombinációjaként. Meg kell még mutatnunk, hogy ez az előállítás egyértelmű. Legyen
$$\mathbf{v} = v_1\mathbf{a}_1 + v_2\mathbf{a}_2 = w_1\mathbf{a}_1 + w_2\mathbf{a}_2$$
a $\mathbf{v}$ vektor két előállítása. Ekkor átrendezés után $(v_1 - w_1)\mathbf{a}_1 = (w_2 - v_2)\mathbf{a}_2$. Mivel az $\mathbf{a}_1$ és $\mathbf{a}_2$ vektorokkal párhuzamosak, konstansszorosaik csak akkor egyezhetnek meg, ha mindkettő a zérusvektor. Ugyanakkor $\mathbf{a}_1 \neq \mathbf{0}$ és $\mathbf{a}_2 \neq \mathbf{0}$, ezért az előző egyenlőség csak akkor áll fönn, ha $(v_1 - w_1) = (w_2 - v_2) = 0$, azaz ha $v_1 = w_1$ és $v_2 = w_2$. Tehát a felbontás egyértelmű. $\square$

Látható tehát, hogy két nem párhuzamos vektor összes lineáris kombinációjának halmaza megegyezik a két vektorral komplanáris vektorok halmazával, egyszerűbben fogalmazva: két nem párhuzamos vektor összes lineáris kombinációjának végpontja *egy origón átmenő síkot ad*.

*1.15. ábra. Egy nemzérus $\mathbf{a}$ vektor, és néhány lineáris kombinációja kétféle reprezentációban.*

*1.16. ábra. A $\mathbf{v}$ egyértelműen előáll $\mathbf{v} = v_1\mathbf{a}_1 + v_2\mathbf{a}_2$ alakban, ha $\mathbf{a}_1$ és $\mathbf{a}_2$ nem párhuzamos.*

Abban nincs semmi meglepő, hogy a tér három nem egy síkba eső vektorának bármely lineáris kombinációja térbeli vektor, az állítás megfordítása viszont igen fontos:

**1.9. tétel (Térbeli vektorok).** *Ha $\mathbf{a}_1$, $\mathbf{a}_2$ és $\mathbf{a}_3$ nem egy síkba eső vektorok, akkor a tér bármely $\mathbf{v}$ vektora előáll az $\mathbf{a}_1$, $\mathbf{a}_2$ és $\mathbf{a}_3$ valamely lineáris kombinációjaként, azaz van olyan $v_1$, $v_2$ és $v_3$ konstans, hogy*
$$\mathbf{v} = v_1\mathbf{a}_1 + v_2\mathbf{a}_2 + v_3\mathbf{a}_3. \tag{1.1}$$
*Ez az előállítás egyértelmű.*

*Bizonyítás.* A $\mathbf{v}$ vektor $V$ végpontján át párhuzamos egyenest húzunk az $\mathbf{a}_3$ vektorral, mely az $\mathbf{a}_1$ és $\mathbf{a}_2$ vektorok síkját egy $C$ pontban metszi (1.17. (a) ábra). Az $\overrightarrow{OC}$ vektor az előző tétel szerint egyértelműen előáll $\mathbf{a}_1$ és $\mathbf{a}_2$ lineáris kombinációjaként, azaz $\overrightarrow{OC} = v_1\mathbf{a}_1 + v_2\mathbf{a}_2$ (ld. 1.17. (b) ábra). Másrészt $\mathbf{v} = \overrightarrow{OV} = \overrightarrow{OC} + \overrightarrow{CV}$, ahol $\overrightarrow{CV} \parallel \mathbf{a}_3$, így $\overrightarrow{CV} = v_3\mathbf{a}_3$ valamely $v_3$ valósra. Tehát $\mathbf{v} = v_1\mathbf{a}_1 + v_2\mathbf{a}_2 + v_3\mathbf{a}_3$.

Be kell még látnunk az előállítás egyértelműségét! Tegyük fel, hogy
$$\mathbf{v} = v_1\mathbf{a}_1 + v_2\mathbf{a}_2 + v_3\mathbf{a}_3 = w_1\mathbf{a}_1 + w_2\mathbf{a}_2 + w_3\mathbf{a}_3$$
a $\mathbf{v}$ két felbontása. Ekkor $(v_1 - w_1)\mathbf{a}_1 + (v_2 - w_2)\mathbf{a}_2 + (v_3 - w_3)\mathbf{a}_3 = \mathbf{0}$. Így ha $v_1 \neq w_1$, akkor $\mathbf{a}_1$ kifejezhető $\mathbf{a}_2$ és $\mathbf{a}_3$ lineáris kombinációjaként:
$$\mathbf{a}_1 = -\frac{v_2 - w_2}{v_1 - w_1}\mathbf{a}_2 - \frac{v_3 - w_3}{v_1 - w_1}\mathbf{a}_3.$$
Ez ellentmond annak, hogy $\mathbf{a}_1$, $\mathbf{a}_2$ és $\mathbf{a}_3$ nem esnek egy síkba. Így tehát $v_1 = w_1$. Hasonlóan kapjuk, hogy $v_2 = w_2$ és $v_3 = w_3$, azaz az (1.1) előállítás egyértelmű. $\square$

### Lineáris függetlenség

Az előző két tételből világos, hogy a tér három vektora vagy egy síkba esik, ekkor valamelyikük a másik kettő lineáris kombinációja, vagy nem esik egy síkba, és akkor egyikük sem áll elő a másik kettő lineáris kombinációjaként. Ekkor viszont a tér minden vektora előáll az ő lineáris kombinációjukként. Látjuk, alapvető, hogy egy vektor kifejezhető-e más vektorok lineáris kombinációjaként.

**1.10. definíció (Vektorok függetlensége).** *Azt mondjuk, hogy egy $\mathbf{v}$ vektor lineárisan független az $\mathbf{a}_1, \mathbf{a}_2, \ldots, \mathbf{a}_n$ ($n \geq 1$) vektoroktól, ha $\mathbf{v}$ nem fejezhető ki e vektorok lineáris kombinációjaként. Azt mondjuk, hogy az $\mathbf{a}_1, \mathbf{a}_2, \ldots, \mathbf{a}_n$ ($n \geq 2$) vektorok lineárisan függetlenek, ha e vektorok egyike sem fejezhető ki a többi lineáris kombinációjaként. Ha legalább egyikük kifejezhető a többi lineáris kombinációjaként, azaz legalább egyikük lineárisan függ a többitől, akkor e vektorokat lineárisan összefüggőknek nevezzük. Az egyetlen vektorból álló vektorrendszert lineárisan függetlennek tekintjük, ha a vektor nem a zérusvektor.*

*1.17. ábra. A térbeli $\mathbf{v}$ vektor előállítása három nem egy síkba eső vektor lineáris kombinációjaként.*

Például egy térbeli vektor, mely nem esik egy adott síkba, független a síkba eső vektorok bármely rendszerétől (1.18. ábra).

Egy kocka egy csúcsból kiinduló élvektorai lineárisan függetlenek (1.19. ábra).

Általában: bármely két nem kollineáris vektor lineárisan független, hasonlóképp, a tér bármely három nem komplanáris, azaz nem egy síkba eső vektora lineárisan független.

Az 1.8. tétel tehát a következőképp fogalmazható át:

**1.11. tétel (Síkbeli vektor felbontása).** *Ha $\mathbf{a}_1$ és $\mathbf{a}_2$ egy sík két lineárisan független vektora, akkor a sík minden $\mathbf{v}$ vektora egyértelműen előáll e vektorok lineáris kombinációjaként, azaz egyértelműen léteznek olyan $v_1$ és $v_2$ valós számok, hogy*
$$\mathbf{v} = v_1\mathbf{a}_1 + v_2\mathbf{a}_2.$$

Hasonlóképp az 1.9. tétel így fogalmazható át:

**1.12. tétel (Térbeli vektor felbontása).** *Ha $\mathbf{a}_1$, $\mathbf{a}_2$ és $\mathbf{a}_3$ három lineárisan független térbeli vektor, akkor a tér minden $\mathbf{v}$ vektora egyértelműen előáll e vektorok lineáris kombinációjaként, azaz egyértelműen léteznek olyan $v_1$, $v_2$ és $v_3$ valós számok, hogy*
$$\mathbf{v} = v_1\mathbf{a}_1 + v_2\mathbf{a}_2 + v_3\mathbf{a}_3.$$

A koordinátákról szóló szakaszban e két tétel lesz alapja a koordináta-rendszer bevezetésének.

### Speciális lineáris kombinációk

A sík és a tér bizonyos konfigurációi jól jellemezhetők lineáris kombinációkkal, ha a kombinációs együtthatókra bizonyos feltételeket kötünk ki.

**1.13. állítás (Két ponton átmenő egyenes jellemzése).** *Legyen $O$, $A$ és $B$ a tér három pontja. Az $r\overrightarrow{OA} + s\overrightarrow{OB}$ alakú lineáris kombináció végpontja pontosan akkor mutat az $A$ és $B$ ponton átmenő egyenes egy pontjába, ha $r + s = 1$.*

*Bizonyítás.* Legyen $\mathbf{a} = \overrightarrow{OA}$, $\mathbf{b} = \overrightarrow{OB}$, és $\mathbf{x}$ mutasson az $AB$ egyenes valamely $X$ pontjára, azaz legyen $\mathbf{x} = \overrightarrow{OB} + r\overrightarrow{BA}$ valamilyen $r$ valós számra, tehát
$$\mathbf{x} = \mathbf{b} + r(\mathbf{a} - \mathbf{b}), \quad\text{azaz}\quad \mathbf{x} = r\mathbf{a} + (1-r)\mathbf{b}.$$
A fenti gondolatmenet lépésein visszafelé haladva látható, hogy minden valós $r$ számra $r\mathbf{a} + (1-r)\mathbf{b}$ vektor végpontja az $AB$ egyenesen van. Fogalmazhatunk úgy is, hogy az $\mathbf{a}$ és $\mathbf{b}$ vektorok végpontján átmenő egyenes összes pontját pontosan azok az $r\mathbf{a} + s\mathbf{b}$ alakú lineáris kombinációk adják, amelyeknél $r + s = 1$ (ld. 1.20 ábra). $\square$

*1.18. ábra. A síkba nem eső $\mathbf{v}$ vektor nem áll elő a síkbeli vektorok lineáris kombinációjaként.*

*1.19. ábra. Egy kocka három, egy csúcsból induló élvektora lineárisan független.*

*1.20. ábra. Az $X$ pont pontosan akkor van az $AB$ egyenesen, ha azon $r$ és $s$ valósokra, melyekre $\overrightarrow{OX} = r\overrightarrow{OA} + s\overrightarrow{OB}$, $r + s = 1$ teljesül. Ezen az ábrán $r = -0.5$, $s = 1.5$.*

**1.14. állítás (Intervallum pontjainak jellemzése).** *Legyen $O$, $A$ és $B$ a sík vagy a tér három pontja. Az $r\overrightarrow{OA} + s\overrightarrow{OB}$ vektor pontosan akkor mutat az $A$ és $B$ pontot összekötő szakasz valamely pontjába, ha $r + s = 1$ és $0 \leqslant r, s \leqslant 1$.*

*Bizonyítás.* Megismételjük az előző feladat megoldását azzal a különbséggel, hogy itt a $\overrightarrow{BX} = r\overrightarrow{BA}$ összefüggés csak 0 és 1 közé eső $r$ értékekre igaz. Tehát $\mathbf{x} = r\mathbf{a} + (1-r)\mathbf{b}$, ahol $0 \leqslant r \leqslant 1$. Másként fogalmazva az $\mathbf{a}$ és $\mathbf{b}$ vektorok végpontjait összekötő szakasz összes pontját pontosan azok az $r\mathbf{a} + s\mathbf{b}$ alakú lineáris kombinációk adják, amelyekben $r + s = 1$ és $0 \leqslant r, s \leqslant 1$ (ld. 1.21 ábra). $\square$

Hasonló összefüggés igaz három vektor esetén is, azaz megmutatható, hogy a nem kollineáris $\mathbf{a}$, $\mathbf{b}$ és $\mathbf{c}$ vektorok végpontjaira fektetett sík pontjaiba pontosan azok a vektorok mutatnak, melyeket $r\mathbf{a} + s\mathbf{b} + t\mathbf{c}$ alakba írva $r + s + t = 1$. Ha még azt is kikötjük e három számról, hogy legyen $0 \leqslant r, s, t \leqslant 1$, akkor az $r\mathbf{a} + s\mathbf{b} + t\mathbf{c}$ alakú vektorok a három vektor végpontja által meghatározott háromszög pontjaiba mutatnak (ld. az 1.22. ábrát és az 1.27. feladatot).

Szemléletesen világos, például a mellékelt 1.23. ábráról leolvasható, de nem bizonyítjuk, hogy két tetszőleges nem kollineáris vektor összes olyan lineáris kombinációja, amelyben az együtthatók 0 és 1 közé esnek, egy paralelogrammát ad. Pontosabban fogalmazva egy $r\mathbf{a} + s\mathbf{b}$ alakú vektor végpontja pontosan akkor tartozik az $\mathbf{a}$ és $\mathbf{b}$ által meghatározott (kifeszített) *paralelogrammához*, ha $0 \leqslant r, s \leqslant 1$.

Hasonló mondható három, nem egy síkba eső vektorról: egy $r\mathbf{a} + s\mathbf{b} + t\mathbf{c}$ alakú vektor végpontja pontosan akkor tartozik az $\mathbf{a}$, $\mathbf{b}$ és $\mathbf{c}$ által kifeszített *paralelepipedonhoz*, ha $0 \leqslant r, s, t \leqslant 1$ (1.23. ábra).

*1.21. ábra. Az $X$ pont pontosan akkor van az $AB$ intervallumban, ha valamely 0 és 1 közé eső $r$ és $s$ valósokra $\overrightarrow{OX} = r\overrightarrow{OA} + s\overrightarrow{OB}$, és $r + s = 1$.*

*1.22. ábra. Az $X$ pont pontosan akkor esik az $A$, $B$ és $C$ pontokon átmenő síkba, ha $\overrightarrow{OX} = r\overrightarrow{OA} + s\overrightarrow{OB} + t\overrightarrow{OC}$ és $r + s + t = 1$. Az $X$ az $ABC$ háromszögbe pedig pontosan akkor esik, ha ezen kívül még $0 \leqslant r, s, t \leqslant 1$ is fönnáll.*

*1.23. ábra. A paralelogramma és a paralelepipedon olyan lineáris kombinációkkal állítható elő, ahol az együtthatók 0 és 1 közé esnek.*

## Feladatok

### Ellenőrző kérdések

**1.1.● Vektorok: igaz – hamis.** Melyek igazak, melyek hamisak az alábbi állítások közül?
- a) Ha az $\mathbf{a}$ és $\mathbf{b}$ vektorok hajlásszöge $\alpha$, akkor $\mathbf{a}$ és $-\mathbf{b}$ hajlásszöge $\pi - \alpha$.
- b) Ha $A$ és $B$ két adott pont, akkor az $\overrightarrow{OA} + \overrightarrow{OB}$ vektor független az $O$ megválasztásától.
- c) Ha $A$ és $B$ két adott pont, akkor az $\overrightarrow{OA} - \overrightarrow{OB}$ vektor független az $O$ megválasztásától.
- d) Ha két vektor egyirányú, akkor egyikük a másik skalárszorosa.
- e) Ha két vektor egyike a másik skalárszorosa, akkor egyirányúak.
- f) Ha két vektor egyike a másik skalárszorosa, akkor párhuzamosak.

**1.2.● Lineáris összefüggőség: igaz – hamis.** Melyek igazak, melyek hamisak az alábbi állítások közül?
- a) Ha három vektor a térben lineárisan összefüggő, akkor bármelyikük a másik kettő lineáris kombinációja.
- b) Megadható a térben három vektor, hogy egyikük sem lineárisan független a többitől.
- c) Megadható a térben három vektor, $\mathbf{a}$, $\mathbf{b}$ és $\mathbf{c}$, hogy $\mathbf{a}$ független a $\mathbf{b}$ és $\mathbf{c}$ vektoroktól, de $\mathbf{b}$ nem független az $\mathbf{a}$ és $\mathbf{c}$ vektoroktól.
- d) A tér bármely legalább 4 vektora lineárisan összefüggő.
- e) Megadható a térben 5 olyan vektor, melyek közül pontosan kettőre igaz az, hogy független a többi négy vektortól.

**1.3.** Legyen $O$, $A$ és $B$ három tetszőleges nem egy egyenesbe eső pont. Tegyük fel, hogy $P$ eleget tesz az
$$\overrightarrow{OP} = \frac{1+\sqrt{5}}{2}\overrightarrow{OA} + \frac{1-\sqrt{5}}{2}\overrightarrow{OB}$$
összefüggésnek. *a)* Egy egyenesbe esnek-e a $P$, $A$ és $B$ pontok? *b)* Az $A$ vagy a $B$ ponthoz esik a $P$ közelebb? *c)* A $P$ pont az $\overline{AB}$ szakasz belsejébe esik? Válaszoljuk meg e három kérdést arra a $P$ pontra is, melyre
$$\overrightarrow{OP} = \frac{\sqrt{5}-1}{2}\overrightarrow{OA} + \frac{3-\sqrt{5}}{2}\overrightarrow{OB}.$$

**1.4.** Legyen $O$, $A$, $B$ és $C$ négy tetszőleges nem egy síkba eső pont. Tegyük fel, hogy $P$ eleget tesz az
$$\overrightarrow{OP} = \frac{7}{13}\overrightarrow{OA} - \frac{3}{13}\overrightarrow{OB} + \frac{9}{13}\overrightarrow{OC}$$
összefüggésnek. *a)* Egy síkba esnek-e a $P$, $A$, $B$ és $C$ pontok? *b)* A $P$ pont az $ABC$ háromszög belsejébe esik?

**1.5.** Benne van-e az $\mathbf{a}$, $\mathbf{b}$ és $\mathbf{c}$ vektorok által kifeszített paralelepipedon belsejében a $\frac{2}{9}\mathbf{a} + \frac{3}{9}\mathbf{b} + \frac{2}{9}\mathbf{c}$ vektor végpontja?

### Vektorműveletek a 2- és 3-dimenziós térben

**1.6.** Egy matematikán kívüli szemléltetés a vektor fogalmához: hogyan fejeznénk be az alábbi hasonlatot? „Ha az irányított szakasz a hal, akkor a vektor a…"

*Ábra: halrajok (irányított szakaszok mint halak).*

**1.7.** Adva van a síkban két tetszőleges vektor, $\mathbf{a}$ és $\mathbf{b}$. Szerkesszük meg a következő vektorokat: *a)* $\mathbf{c} = 2\mathbf{a} + \mathbf{b}$, *b)* $\mathbf{d} = 2\mathbf{a} - \mathbf{b}$, *c)* $\mathbf{e} = \frac{2}{3}\mathbf{a} + \frac{1}{2}\mathbf{b}$, *d)* $\mathbf{f} = \frac{2}{3}\mathbf{a} + \frac{3}{5}\mathbf{b}$.

**1.8.** Legyen $\mathbf{u} = \mathbf{a} + \mathbf{b}$, $\mathbf{v} = \mathbf{a} - \mathbf{b}$. Fejezzük ki az $\mathbf{a}$ és $\mathbf{b}$ vektor segítségével a következő vektorokat: *a)* $2\mathbf{u} + 2\mathbf{v}$, *b)* $3\mathbf{u} - 3\mathbf{v}$, *c)* $3\mathbf{u} - \mathbf{v}$, *d)* $2\mathbf{u} - \frac{1}{2}\mathbf{v}$.

**1.9.** Tekintsük az $ABCD$ négyzetet. Határozzuk meg a következő összegeket! *a)* $\overrightarrow{AB} + \overrightarrow{CD}$, *b)* $\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CD}$, *c)* $\overrightarrow{AB} - \overrightarrow{AC}$, *d)* $\overrightarrow{AC} + \overrightarrow{DB}$, *e)* $\overrightarrow{AC} - \overrightarrow{DB}$, *f)* $\overrightarrow{DC} - \overrightarrow{DB}$, *g)* $2\overrightarrow{AB} + \overrightarrow{BD}$.

**1.10.** Tekintsük az $ABCD$ négyzetet. Jelölje a $BC$ oldal felezőpontját $E$, a $CD$ oldal felezőpontját $O$. Fejezzük ki az egymásra merőleges $\mathbf{b} = \overrightarrow{AB}$ és $\mathbf{d} = \overrightarrow{AD}$ vektorok segítségével az $\overrightarrow{AE}$, $\overrightarrow{AF}$, $\overrightarrow{AO}$, $\overrightarrow{EF}$, $\overrightarrow{OF}$ vektorokat!

**1.11.** Tekintsük az $ABCDEF$ tetraédert! Határozzuk meg az
- a) $\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CD} + \overrightarrow{DA}$,
- b) $\overrightarrow{AB} - \overrightarrow{CB} + \overrightarrow{CD} - \overrightarrow{AD}$,
- c) $\overrightarrow{AD} - \overrightarrow{AC} - \overrightarrow{BD}$

vektorokat.

**1.12.** Tekintsük a szabályos $ABCDEF$ hatszöget, melynek geometriai középpontját jelölje $O$. Fejezzük ki az $\mathbf{a} = \overrightarrow{OA}$ és $\mathbf{b} = \overrightarrow{OB}$ vektorok segítségével az *a)* $\overrightarrow{OC}$, *b)* $\overrightarrow{OE}$, *c)* $\overrightarrow{OF}$, *d)* $\overrightarrow{AC}$, *e)* $\overrightarrow{BD}$, *f)* $\overrightarrow{BF}$, *g)* $\overrightarrow{AB} + \overrightarrow{CD} + \overrightarrow{EF}$ vektorokat!

**1.13.● ** Adva van $n$ tetszőleges, nem feltétlenül különböző $P_1, P_2, \ldots, P_n$ pont a térben. Mivel egyenlő a
$$\overrightarrow{P_1P_2} + \overrightarrow{P_2P_3} + \overrightarrow{P_3P_4} + \ldots + \overrightarrow{P_{n-1}P_n}$$
és a
$$\overrightarrow{P_1P_2} + \overrightarrow{P_2P_3} + \overrightarrow{P_3P_4} + \ldots + \overrightarrow{P_{n-1}P_n} + \overrightarrow{P_nP_1}$$
összeg?

**1.14.** Mutassuk meg, hogy az $\mathbf{a}$, $\mathbf{b}$ és $\mathbf{c}$ vektorok pontosan akkor lehetnek egy (esetleg szakasszá vagy ponttá elfajuló) háromszög oldalvektorai, ha az
$$\mathbf{a} + \mathbf{b} + \mathbf{c}, \quad \mathbf{a} + \mathbf{b} - \mathbf{c}, \quad \mathbf{a} - \mathbf{b} + \mathbf{c}, \quad \mathbf{a} - \mathbf{b} - \mathbf{c}$$
vektorok legalább egyike zérus. Másként fogalmazva: ha a három vektor összege $\mathbf{0}$, vagy valamelyik vektor egyenlő a másik kettő összegével.

**1.15.** Legyen $\mathbf{a}$ és $\mathbf{b}$ két tetszőleges vektor. Mutassuk meg, hogy van olyan (esetleg elfajuló) háromszög, melynek oldalvektorai $2\mathbf{a} - \mathbf{b}$, $\mathbf{a} + 2\mathbf{b}$ és $3\mathbf{a} + \mathbf{b}$.

### Lineáris kombináció, lineáris függetlenség

**1.16. Súlyvonal.** Fejezzük ki az $ABC$ háromszög ($A$, $B$, illetve $C$ csúcsból induló) három súlyvonal-vektorát az $\mathbf{a} = \overrightarrow{CA}$ és $\mathbf{b} = \overrightarrow{CB}$ vektorok lineáris kombinációjaként! Lehet-e e három vektor egy háromszög három oldalvektora?

**1.17.** Legyen $P_1 P_2 \ldots P_n$ egy szabályos $n$-szög, középpontját jelölje $O$. Nyilvánvaló, hogy az $\overrightarrow{OP_1} + \overrightarrow{OP_2} + \cdots + \overrightarrow{OP_n}$ összeg $\mathbf{0}$, ha $n$ páros. Vajon $\mathbf{0}$-e az összeg akkor is, ha $n$ páratlan?

**1.18. Négyszög oldalfelezői.** Vektoralgebrai eszközökkel igazoljuk, hogy egy tetszőleges (akár térbeli) négyszög oldalfelező pontjai paralelogrammát alkotnak.

**1.19.** Legyen $P_1 P_2 \ldots P_n$ egy tetszőleges páratlan csúcsú síkbeli $n$-szög, legyen $O$ egy tetszőleges pontja, és legyen $F_k$ a $P_k P_{k+1}$ szakasz felezőpontja ($k = 1, 2, \ldots, n-1$), illetve $F_n$ a $P_n P_1$ felezőpontja. Fejezzük ki az $\overrightarrow{OP_1}$ vektort az $\overrightarrow{OF_k}$ vektorok lineáris kombinációjaként!

**1.20.** Legyen az $\{\mathbf{a}, \mathbf{b}, \mathbf{c}\}$ vektorrendszer lineárisan független, és legyen $\mathbf{v} = c_1\mathbf{a} + c_2\mathbf{b} + c_3\mathbf{c}$, $\mathbf{w} = d_1\mathbf{a} + d_2\mathbf{b} + d_3\mathbf{c}$ két lineáris kombináció, ahol $d_1$, $d_2$, $d_3$ egyike sem 0. Igazoljuk, hogy $\mathbf{v}$ és $\mathbf{w}$ akkor és csak akkor lineárisan összefüggők (kollineárisak), ha $\frac{c_1}{d_1} = \frac{c_2}{d_2} = \frac{c_3}{d_3}$.

**1.21.** Az alábbi $\mathbf{v}$ és $\mathbf{w}$ vektorok a $c$ és $d$ paraméterek mely értékeinél lineárisan összefüggők, ha $\mathbf{a}$, $\mathbf{b}$ és $\mathbf{c}$ lineárisan függetlenek?
- a) $\mathbf{v} = 3\mathbf{a} + 2\mathbf{b}$, $\mathbf{w} = 6\mathbf{a} + c\mathbf{b}$
- b) $\mathbf{v} = 2\mathbf{a} + c\mathbf{b} - \mathbf{c}$, $\mathbf{w} = 4\mathbf{a} + 2c\mathbf{b} - 2\mathbf{c}$
- c) $\mathbf{v} = -2\mathbf{a} + c\mathbf{c}$, $\mathbf{w} = c\mathbf{a} + \mathbf{b} - \mathbf{c}$
- d) $\mathbf{v} = \mathbf{a} + c\mathbf{b} + d\mathbf{c}$, $\mathbf{w} = 3\mathbf{a} + d\mathbf{b} + 6\mathbf{c}$
- e) $\mathbf{v} = \mathbf{a} + c\mathbf{b} + d\mathbf{c}$, $\mathbf{w} = 3\mathbf{a} + 3d\mathbf{b} + 3c\mathbf{c}$
- f) $\mathbf{v} = \mathbf{a} - c\mathbf{b} + d\mathbf{c}$, $\mathbf{w} = 2\mathbf{a} - 2c\mathbf{b} + 4\mathbf{c}$

**1.22.** Függetlenek-e az $\mathbf{r}$, $\mathbf{s}$, $\mathbf{t}$ vektorok, ha $\mathbf{a}$, $\mathbf{b}$ és $\mathbf{c}$ lineárisan függetlenek?
- a) $\mathbf{r} = \mathbf{a} + 2\mathbf{b} + \mathbf{c}$, $\mathbf{s} = \mathbf{a} - 3\mathbf{b} - \mathbf{c}$, $\mathbf{t} = \mathbf{0}$
- b) $\mathbf{r} = \mathbf{a} + \mathbf{b} + \mathbf{c}$, $\mathbf{s} = \mathbf{b} + \mathbf{c}$, $\mathbf{t} = \mathbf{c}$
- c) $\mathbf{r} = \mathbf{a} + \mathbf{b} + \mathbf{c}$, $\mathbf{s} = \mathbf{a} - \mathbf{b}$, $\mathbf{t} = 2\mathbf{a} + \mathbf{c}$
- d) $\mathbf{r} = \mathbf{a} + 2\mathbf{b} - \mathbf{c}$, $\mathbf{s} = \mathbf{a} - 3\mathbf{b} - \mathbf{c}$, $\mathbf{t} = \mathbf{a} - \mathbf{b} - \mathbf{c}$

**1.23.✶** Jelölje az $ABCD$ paralelogramma $BC$ oldalának felezőpontját $E$, a $CD$ oldalét $F$, az $AE$ és $BF$ szakaszok metszéspontját $M$. Állítsuk elő az $\overrightarrow{AM}$ vektort az $\mathbf{b} = \overrightarrow{AB}$ és $\mathbf{d} = \overrightarrow{AD}$ vektorok lineáris kombinációjaként!

### Speciális lineáris kombinációk

**1.24.● Szakaszt $m:n$ arányban osztó pont.** Ha az $\overline{AB}$ szakaszt a $P$ pont úgy bontja ketté, hogy $|\overline{AP}| : |\overline{PB}| = m : n$, akkor bármely $O$ pontra igaz, hogy
$$\overrightarrow{OP} = \frac{n}{m+n}\overrightarrow{OA} + \frac{m}{m+n}\overrightarrow{OB}.$$
Speciálisan, az $\overline{AB}$ szakasz felezőpontjába az
$$\frac{\overrightarrow{OA} + \overrightarrow{OB}}{2}$$
vektor mutat.

**1.25. Háromszög súlypontja.** Igazoljuk, hogy a háromszög súlyvonalai egy pontban (melyet súlypontnak nevezünk), harmadolva metszik egymást! Egy tetszőleges (akár térbeli) $O$ pontból a súlypontba mutató vektor a csúcsokba mutató vektorok összegének harmada.

**1.26. Tetraéder súlypontja.** Igazoljuk, hogy a tetraéder súlyvonalai egy ponton mennek át, és negyedelve metszik egymást! E metszéspontot nevezzük a tetraéder súlypontjának. Egy tetszőleges $O$ pontból a súlypontba mutató vektor a csúcsokba mutató vektorok összegének negyede.

**1.27. Háromszög pontjaiba mutató vektorok.** Igazoljuk, hogy tetszőleges $A$, $B$, $C$ és a tőlük különböző $O$ pontra egy $P$ pont pontosan akkor esik az $ABC$ háromszög belsejébe, ha van olyan
$$\overrightarrow{OP} = a\overrightarrow{OA} + b\overrightarrow{OB} + c\overrightarrow{OC}$$
lineáris kombináció, hogy $0 \leqslant a, b, c \leqslant 1$ és $a + b + c = 1$.

**1.28.** Az $ABC$ derékszögű háromszög $C$ csúcsból induló magasságvonala messe az $AB$ átfogót a $D$ pontban. Jelölje a két befogó hosszát $a$ és $b$. Állítsuk elő a $\overrightarrow{CD}$ vektort a $\overrightarrow{CA}$ és $\overrightarrow{CB}$ vektorok lineáris kombinációjaként csak e két számadatot felhasználva.

## Távolság, szög, orientáció

*A címben jelzett három alapfogalomhoz három vektorművelet visz közelebb. Egyikük eredményéül nem vektort, hanem skalárt ad, másikuk nem felcserélhető, és kétváltozós műveletként csak a 3-dimenziós térben definiálható, a harmadik művelet pedig nem két- hanem háromváltozós.*

### Skaláris szorzás

A fizikában az erő által végzett munka az út hosszának és az erő elmozdulás irányába eső merőleges vetülete hosszának szorzata. Vagyis két vektorjellegű mennyiségből egy skalármennyiséget kapunk eredményül. Ha $\mathbf{F}$ jelöli az erővektort, $\mathbf{s}$ az elmozdulásvektort, $\mathbf{F}_s$ az erőnek az elmozdulás irányába eső merőleges vetületi vektorát és $\gamma$ az $\mathbf{F}$ és $\mathbf{s}$ vektorok hajlásszögét, akkor a munka értéke $|\mathbf{F}_s||\mathbf{s}| = |\mathbf{F}||\mathbf{s}|\cos\gamma$. Ez a következő definícióhoz vezet:

**1.15. definíció (Két vektor skaláris szorzata).** *Két vektor skaláris szorzatán a vektorok abszolút értékének és az általuk bezárt szög koszinuszának szorzatát értjük. Az $\mathbf{a}$ és $\mathbf{b}$ vektorok skaláris szorzatát $\mathbf{a} \cdot \mathbf{b}$ jelöli, tehát*
$$\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos(\mathbf{a},\mathbf{b})_\angle,$$
*ahol a két vektor által bezárt szög $(\mathbf{a},\mathbf{b})_\angle$.*

Ha $\mathbf{a}$ és $\mathbf{b}$ valamelyike zérusvektor, akkor a két vektor szöge, s így annak koszinusza sem határozható meg egyértelműen, a skaláris szorzat viszont ekkor is egyértelmű, éspedig 0, hisz a zérusvektor abszolút értéke 0, és 0 bármivel vett szorzata 0.

Szokás $\mathbf{a}$ és $\mathbf{b}$ skaláris szorzatát $\mathbf{ab}$-vel is jelölni, de ezt más szorzásoktól megkülönböztetendő e könyvben nem fogjuk használni.

**1.16. példa (Skaláris szorzat).** *Mennyi a skaláris szorzata egy 1 és egy 2 egység hosszú, egymással $60°$-os szöget bezáró két vektornak?*

*Megoldás.* A szorzat $1 \cdot 2 \cdot \cos 60° = 1 \cdot 2 \cdot \frac{1}{2} = 1$. $\square$

**1.17. tétel (Mikor 0 a skaláris szorzat).** *Két vektor skaláris szorzata pontosan akkor 0, ha a két vektor merőleges egymásra.*

*Bizonyítás.* ($\Leftarrow$) Ha $\mathbf{a} \perp \mathbf{b}$, akkor $(\mathbf{a},\mathbf{b})_\angle = \pi/2$, azaz $\cos(\mathbf{a},\mathbf{b})_\angle = 0$, tehát $\mathbf{a} \cdot \mathbf{b} = 0$.

($\Rightarrow$) Ha $\mathbf{a} \cdot \mathbf{b} = 0$, azaz $|\mathbf{a}||\mathbf{b}|\cos(\mathbf{a},\mathbf{b})_\angle = 0$, akkor $|\mathbf{a}| = 0$, $|\mathbf{b}| = 0$ vagy $\cos(\mathbf{a},\mathbf{b})_\angle = 0$. Ha valamelyik vektor zérusvektor, akkor iránya bármely vektoréra merőlegesnek tekinthető. Ha sem $\mathbf{a}$ sem $\mathbf{b}$ nem a zérusvektor, akkor $\cos(\mathbf{a},\mathbf{b})_\angle = 0$, a cos függvénynek pedig a $[0,\pi]$ intervallumban csak $\pi/2$-ben van zérushelye, tehát a két vektor merőleges egymásra. $\square$

▶ A tétel bizonyításából látszik, a zérusvektorra úgy tekintünk, mint ami bármely vektorra merőleges. Korábban – a skalárral való szorzásnál – a zérusvektorra úgy tekintettünk, mint ami bármely vektorral párhuzamos, hisz skalárszorosa. A zérusvektorra tehát úgy tekintünk, mint ami egy adott vektorral akkora szöget zár be, mint amekkorára épp szükségünk van. Ezt megtehetjük, hisz a zérusvektor iránya tetszőleges. Ez megóv minket attól, hogy minden tételbe a zérusvektor esetét külön, mint valami rendhagyó esetet bele kelljen fogalmaznunk.

**1.18. tétel (A skaláris szorzás műveleti tulajdonságai).** *Ha $\mathbf{a}$, $\mathbf{b}$ és $\mathbf{c}$ tetszőleges térbeli (síkbeli) vektorok és $r$ tetszőleges valós szám, akkor igazak az alábbi összefüggések:*
- *a)* $\mathbf{a} \cdot \mathbf{b} = \mathbf{b} \cdot \mathbf{a}$ *(kommutativitás)*
- *b)* $(\mathbf{a} + \mathbf{b}) \cdot \mathbf{c} = \mathbf{a} \cdot \mathbf{c} + \mathbf{b} \cdot \mathbf{c}$ *(disztributivitás)*
- *c)* $r(\mathbf{a} \cdot \mathbf{b}) = (r\mathbf{a}) \cdot \mathbf{b} = \mathbf{a} \cdot (r\mathbf{b})$
- *d)* $\mathbf{a} \cdot \mathbf{a} > 0$, ha $\mathbf{a} \neq \mathbf{0}$, és $\mathbf{a} \cdot \mathbf{a} = 0$, ha $\mathbf{a} = \mathbf{0}$.

A bizonyítást az Olvasóra hagyjuk.

▶ Két vektor skaláris szorzata skalár, ezért az asszociativitás (csoportosíthatóság) kérdése értelmetlen, mivel az $(\mathbf{a} \cdot \mathbf{b})\mathbf{c}$ szorzatban két különböző szorzásművelet szerepel. Mindezzel együtt $(\mathbf{a} \cdot \mathbf{b})\mathbf{c} \neq \mathbf{a}(\mathbf{b} \cdot \mathbf{c})$ bármely $\mathbf{a}$, $\mathbf{b}$, $\mathbf{c}$ vektorra (ld. az 1.35. feladatot).

### Hosszúság és szög

Egy vektor hossza, és ezzel két pont távolsága, valamint két vektor hajlásszöge kifejezhető a skaláris szorzat segítségével.

Egy tetszőleges $\mathbf{a}$ vektorra $\mathbf{a} \cdot \mathbf{a} = |\mathbf{a}||\mathbf{a}|\cos 0 = |\mathbf{a}||\mathbf{a}|$, tehát
$$|\mathbf{a}|^2 = \mathbf{a} \cdot \mathbf{a}, \quad\text{azaz}\quad |\mathbf{a}| = \sqrt{\mathbf{a} \cdot \mathbf{a}}.$$

E képlet szerint tehát egy *vektor hossza* megegyezik az önmagával vett skaláris szorzatának gyökével. Ebből az is adódik, hogy *két pont távolsága* megegyezik az őket összekötő vektor önmagával vett skaláris szorzatának négyzetgyökével.

Két pontot összekötő vektor egyenlő az oda mutató helyvektorok különbségével, így ha a két pontba mutató helyvektor $\mathbf{a}$ és $\mathbf{b}$, akkor a pontok távolsága – és ezt fogjuk a vektorok távolságának is tekinteni –
$$d(\mathbf{a},\mathbf{b}) = |\mathbf{a} - \mathbf{b}|.$$

Két vektor skaláris szorzatának és a vektorok hosszának ismeretében a *szögük* meghatározható:
$$\cos(\mathbf{a},\mathbf{b})_\angle = \frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}||\mathbf{b}|}, \tag{1.2}$$
mivel a $[0,\pi]$ intervallumon a koszinusz függvény kölcsönösen egyértelmű.

### Három tétel vektorok hosszáról

Vektor hosszáról három fontos összefüggést igazolunk, melyek később is fontos szerepet kapnak.

**1.19. tétel (Pithagorász-tétel).** *Az $\mathbf{a}$ és $\mathbf{b}$ vektorokra pontosan akkor teljesül az $|\mathbf{a} + \mathbf{b}|^2 = |\mathbf{a}|^2 + |\mathbf{b}|^2$ összefüggés, ha $\mathbf{a}$ és $\mathbf{b}$ merőlegesek egymásra.*

*Bizonyítás.* Az alább ?-lel megjelölt egyenlőség pontosan akkor teljesül, ha $\mathbf{a} \cdot \mathbf{b} = 0$, azaz ha $\mathbf{a}$ és $\mathbf{b}$ merőlegesek egymásra.
$$\begin{aligned}
|\mathbf{a} + \mathbf{b}|^2 &= (\mathbf{a} + \mathbf{b}) \cdot (\mathbf{a} + \mathbf{b}) \\
&= \mathbf{a} \cdot \mathbf{a} + \mathbf{a} \cdot \mathbf{b} + \mathbf{b} \cdot \mathbf{a} + \mathbf{b} \cdot \mathbf{b} && \text{(disztributivitás)} \\
&= \mathbf{a} \cdot \mathbf{a} + 2(\mathbf{a} \cdot \mathbf{b}) + \mathbf{b} \cdot \mathbf{b} && \text{(kommutativitás)} \\
&\overset{?}{=} \mathbf{a} \cdot \mathbf{a} + \mathbf{b} \cdot \mathbf{b} && (?) \\
&= |\mathbf{a}|^2 + |\mathbf{b}|^2.
\end{aligned}$$
$\square$

Mivel a koszinusz függvény értéke abszolút értékben sosem nagyobb 1-nél, ezért a skaláris szorzat definíciójából azonnal látszik, hogy
$$\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos(\mathbf{a},\mathbf{b})_\angle \leqslant |\mathbf{a}||\mathbf{b}|.$$
Ezzel bizonyítottuk a következő tételt:

**1.20. tétel (Cauchy–Bunyakovszkij–Schwarz-egyenlőtlenség).** *Két vektor skaláris szorzatának abszolút értéke sosem nagyobb abszolút értékeik szorzatánál, azaz*
$$|\mathbf{a} \cdot \mathbf{b}| \leqslant |\mathbf{a}||\mathbf{b}|.$$

A Cauchy–Bunyakovszkij–Schwarz-egyenlőtlenség segítségével bizonyítjuk a geometriából jól ismert háromszög-egyenlőtlenséget. E bizonyítás változtatás nélkül működni fog általánosabb körülmények között is.

**1.21. tétel (Háromszög-egyenlőtlenség).** *Bármely két $\mathbf{a}$ és $\mathbf{b}$ vektorra*
$$|\mathbf{a} + \mathbf{b}| \leqslant |\mathbf{a}| + |\mathbf{b}|.$$

*Bizonyítás.* Mivel az egyenlőtlenség mindkét oldalán nemnegatív szám áll, ezért vele ekvivalens egyenlőtlenséghez jutunk, ha mindkét oldalt négyzetre emeljük.
$$\begin{aligned}
|\mathbf{a} + \mathbf{b}|^2 &= (\mathbf{a} + \mathbf{b}) \cdot (\mathbf{a} + \mathbf{b}) \\
&= \mathbf{a} \cdot \mathbf{a} + 2(\mathbf{a} \cdot \mathbf{b}) + \mathbf{b} \cdot \mathbf{b} \\
&= |\mathbf{a}|^2 + 2|\mathbf{a}||\mathbf{b}|\cos(\mathbf{a},\mathbf{b})_\angle + |\mathbf{b}|^2 \\
&\leqslant |\mathbf{a}|^2 + 2|\mathbf{a}||\mathbf{b}| + |\mathbf{b}|^2 \\
&= (|\mathbf{a}| + |\mathbf{b}|)^2.
\end{aligned}$$
$\square$

### Egységvektorral való szorzás és a merőleges vetítés

Minden olyan vektort, melynek abszolút értéke 1, *egységvektornak* nevezünk.

Ha $\mathbf{a}$ egy tetszőleges nemzérus vektor, akkor $\mathbf{a}/|\mathbf{a}|$ egységvektor, ugyanis abszolút értéke 1:
$$\left|\frac{\mathbf{a}}{|\mathbf{a}|}\right| = \frac{1}{|\mathbf{a}|}|\mathbf{a}| = 1.$$

**1.22. tétel (Egységvektorral való szorzás geometriai jelentése).** *Ha $\mathbf{e}$ egységvektor, akkor a $\hat{\mathbf{b}} = (\mathbf{e} \cdot \mathbf{b})\mathbf{e}$ vektor a $\mathbf{b}$ vektornak az $\mathbf{e}$ egyenesére való merőleges vetülete. Az $\mathbf{e} \cdot \mathbf{b}$ szorzat e vetület előjeles hossza, mely pozitív, ha $\hat{\mathbf{b}}$ és $\mathbf{e}$ egyirányúak, és negatív, ha ellenkező irányúak.*

*Bizonyítás.* Ha $\mathbf{e}$ egységvektor, azaz abszolút értéke 1, akkor $\mathbf{e} \cdot \mathbf{b} = |\mathbf{b}|\cos(\mathbf{e},\mathbf{b})_\angle$, ez pedig a koszinusz függvény definíciója szerint $\mathbf{b}$ merőleges vetületének előjeles hosszát jelenti. E szám $\mathbf{e}$-szerese pedig egy $\mathbf{e}$ irányú, és ilyen hosszú vektort ad, mely épp $\mathbf{b}$ vetületi vektora. $\square$

Jelölje a $\mathbf{b}$ vektornak az $\mathbf{a}$ egyenesére eső merőleges vetületi vektorát $\operatorname{proj}_{\mathbf{a}} \mathbf{b}$. Eszerint ha $\mathbf{e}$ egységvektor, akkor
$$\operatorname{proj}_{\mathbf{e}} \mathbf{b} = (\mathbf{e} \cdot \mathbf{b})\mathbf{e}.$$

Alapvető feladat egy vektornak egy másikkal párhuzamos és rá merőleges vektorok összegére való felbontása, amit másként *merőleges összetevőkre bontásnak* nevezünk.

**1.23. tétel (Vektor felbontása merőleges összetevőkre).** *Ha $\mathbf{a}$ és $\mathbf{b}$ a sík vagy a tér két vektora, és $\mathbf{a} \neq \mathbf{0}$, akkor $\mathbf{b}$-nek az $\mathbf{a}$ egyenesére eső merőleges vetülete*
$$\operatorname{proj}_{\mathbf{a}} \mathbf{b} = \frac{\mathbf{a} \cdot \mathbf{b}}{\mathbf{a} \cdot \mathbf{a}}\mathbf{a}.$$
*A $\mathbf{b}$-nek az $\mathbf{a}$ egyenesére merőleges összetevője*
$$\mathbf{b} - \operatorname{proj}_{\mathbf{a}} \mathbf{b} = \mathbf{b} - \frac{\mathbf{a} \cdot \mathbf{b}}{\mathbf{a} \cdot \mathbf{a}}\mathbf{a}.$$

*Bizonyítás.* Az első képlet az egységvektorral szorzás geometriai jelentéséről szóló 1.22. tételből következik. Legyen $\mathbf{e} = \frac{\mathbf{a}}{|\mathbf{a}|}$ az $\mathbf{a}$-irányú egységvektor. Ekkor
$$\operatorname{proj}_{\mathbf{e}} \mathbf{b} = (\mathbf{e} \cdot \mathbf{b})\mathbf{e} = \left(\frac{\mathbf{a}}{|\mathbf{a}|} \cdot \mathbf{b}\right)\frac{\mathbf{a}}{|\mathbf{a}|} = \frac{1}{|\mathbf{a}|^2}(\mathbf{a} \cdot \mathbf{b})\mathbf{a} = \frac{\mathbf{a} \cdot \mathbf{b}}{\mathbf{a} \cdot \mathbf{a}}\mathbf{a}.$$
(Az utolsó egyenlőségnél kihasználtuk, hogy $|\mathbf{a}|^2 = \mathbf{a} \cdot \mathbf{a}$.) Mivel $\mathbf{e}$ és $\mathbf{a}$ párhuzamosak, ezért $\operatorname{proj}_{\mathbf{a}} \mathbf{b} = \operatorname{proj}_{\mathbf{e}} \mathbf{b}$, ami bizonyítja első állításunkat. Az állítás második fele abból adódik, hogy a két összetevő összege $\mathbf{b}$. $\square$

*1.24. ábra. A $\mathbf{b}$ vektor és az $\mathbf{e}$ egységvektor egyenesére eső vetülete. A felső ábrán $\mathbf{e} \cdot \mathbf{b} > 0$, az alsón $\mathbf{e} \cdot \mathbf{b} < 0$.*

*1.25. ábra. A $\mathbf{b}$ vektor felbontása az $\mathbf{a}$ vektorral párhuzamos és rá merőleges vektorok összegére.*

### Merőlegesség és orientáció

Ha $\mathbf{a}$ és $\mathbf{b}$ egymásra merőleges síkbeli nemzérus vektorok, akkor $\mathbf{a}$ és $-\mathbf{b}$ is merőlegesek, így $(\mathbf{a},\mathbf{b})_\angle = (\mathbf{a},-\mathbf{b})_\angle = \pi/2$. Csak az $\mathbf{a}$ ismeretében meg tudjuk-e különböztetni a $\mathbf{b}$ és $-\mathbf{b}$ vektorokat? Hasonló kérdés a térben is fölmerül: ha $\mathbf{c}$ merőleges a nem kollineáris $\mathbf{a}$ és $\mathbf{b}$ vektorok mindegyikére, akkor $-\mathbf{c}$ is. Megkülönböztethető-e egymástól $\mathbf{c}$ és $-\mathbf{c}$ csak $\mathbf{a}$-hoz és $\mathbf{b}$-hez való viszonyuk alapján? A válaszhoz az *orientáció* fogalma vezet.

Először szemléltetve közelítünk e fogalomhoz (definíció a determináns fogalmára építhető). A síkban a két független vektorból álló párokat két osztályba sorolhatjuk aszerint, hogy a tenyérrel fölfelé fordított jobb vagy bal kezünk első két ujjával szemléltethetőek (1.26. ábra) (hüvelyk az első, mutató a második vektor).

Hasonlóképp a térben a független vektorokból álló hármasokat két osztályba sorolhatjuk aszerint, hogy jobb vagy bal kezünk első három ujjával szemléltethetőek. Az 1.27. ábra első 2-2 képe azt is mutatja, hogy kultúránként különböző módon mi e három ujj sorrendje (ld. ki hogy mutatja a kettőt). Aszerint, hogy egy vektorpár a síkban, illetve egy vektorhármas a térben melyik osztályba esik, azt mondjuk, hogy *jobbrendszert*, illetve *balrendszert* alkot. Az 1.27. ábra mindkét sorának harmadik képén látható mód (az ökölbe szoruló kéz mozgása) azt is megmutatja, hogy milyen egy egyenes körül való pozitív (negatív) forgás iránya. A síkban ezt azzal is ki tudjuk fejezni, hogy két független vektor szögét előjellel látjuk el, nevezetesen pozitívval, ha jobbrendszert, és negatívval, ha balrendszert alkotnak. Az így kapott szöget a két vektor *irányított szögének* nevezzük. Az $\mathbf{a}$ és $\mathbf{b}$ irányított szögét $(\mathbf{a},\mathbf{b})_\sphericalangle$ jelöli. Tehát míg $(\mathbf{a},\mathbf{b})_\angle = (\mathbf{b},\mathbf{a})_\angle$, addig $(\mathbf{a},\mathbf{b})_\sphericalangle = -(\mathbf{b},\mathbf{a})_\sphericalangle$, és ha $(\mathbf{a},\mathbf{b})_\sphericalangle = \pi/2$, akkor $(\mathbf{a},-\mathbf{b})_\sphericalangle = -\pi/2$. Ez a válasz a paragrafus elején feltett kérdésre.

*1.26. ábra. Két vektor egymáshoz való viszonya jobbrendszert (felső ábra) vagy balrendszert (alsó ábra) alkot. A közbe zárt irányított szög az előbbi esetben pozitív, utóbbiban negatív.*

*1.27. ábra. Az $\mathbf{a}$, $\mathbf{b}$ és $\mathbf{c}$ vektorok ebben a sorrendben jobbrendszert alkotnak, ha irányuk a jobb kezünkkel mutatható a mellékelt három ábra bármelyike szerint: (1) hüvelyk–mutató–középső ujj, (2) mutató–középső–hüvelykujj, (3) a hüvelyk mutatja a $\mathbf{c}$ vektort, ökölbe szoruló kezünk ujjai pedig az $\mathbf{a}$ felől a $\mathbf{b}$ felé haladnak. Ugyanezen vektorok ebben a sorrendben balrendszert alkotnak, ha irányuk a bal kezünkkel mutatható hasonló módon.*

### Vektori szorzás

A fizikában több olyan jelenség is van, melyben két térbeli vektorhoz keresünk egy mindkettőre merőleges harmadikat. Legismertebb példa a *forgatónyomaték*.

Hasson egy $\mathbf{F}$ erő egy test $P$ pontjában, és legyen a test rögzítve az $O$ pontjában. A $P$ ponton átmenő, $\mathbf{F}$ irányú egyenesnek az $O$-tól való távolságát az erő karjának nevezzük. Az $\mathbf{F}$ hatására a test $O$ körül elfordul. Ennek jellemzésére tudnunk kell a forgás tengelyét, a forgás „nagyságát", és azt, hogy a tengely körüli két forgásirány közül melyikről van szó. Erre alkalmas lehet egy vektor – ezt nevezzük *forgatónyomaték*-nak –, melynek iránya a forgástengellyel párhuzamos, hossza a forgás nagyságát írja le, és a forgástengellyel párhuzamos két vektorirány a két forgásirányt különbözteti meg. Hogyan definiálható a forgatónyomaték-vektor, ha tudjuk, hogy abszolút értéke az erőkar hosszának és az erő abszolút értékének szorzata?

Az erő karja $|\overrightarrow{OP}|\sin(\overrightarrow{OP},\mathbf{F})_\angle$, így az $\mathbf{M}$ forgatónyomaték abszolút értéke:
$$|\mathbf{M}| = |\mathbf{F}||\overrightarrow{OP}|\sin(\overrightarrow{OP},\mathbf{F})_\angle.$$

A forgás tengelye nyilván merőleges $\mathbf{F}$-re és $\overrightarrow{OP}$-re is, csak abban kell megegyezni, hogy az $\overrightarrow{OP}$, $\mathbf{F}$ és $\mathbf{M}$ vektorok jobb- vagy balrendszert alkossanak. A fizikusok a jobbrendszert választották.

A forgatónyomaték és több hasonló fizikai fogalom a következő definícióhoz vezet:

**1.24. definíció (Vektori szorzás).** *A 3-dimenziós tér két vektorának vektori szorzatán azt a vektort értjük, melynek*
- *a) abszolút értéke a két vektor abszolút értékének és közbezárt szöge szinuszának szorzata,*
- *b) iránya merőleges mindkét vektor irányára és – ha a szorzat nem a nullvektor, akkor – az első tényező, a második tényező és a szorzat ebben a sorrendben jobbrendszert alkot.*

▶ Az $\mathbf{a}$ és $\mathbf{b}$ vektorok vektori szorzatát $\mathbf{a} \times \mathbf{b}$ jelöli, amit „a kereszt b"-nek olvasunk. Képletekkel megfogalmazva: $\mathbf{a} \times \mathbf{b}$ egy vektor, melyre
$$|\mathbf{a} \times \mathbf{b}| = |\mathbf{a}||\mathbf{b}|\sin(\mathbf{a},\mathbf{b})_\angle,$$
$\mathbf{a} \times \mathbf{b} \perp \mathbf{a}$, $\mathbf{a} \times \mathbf{b} \perp \mathbf{b}$, továbbá $\mathbf{a}$, $\mathbf{b}$ és $\mathbf{a} \times \mathbf{b}$ ebben a sorrendben jobbrendszert alkot, ha $|\mathbf{a} \times \mathbf{b}| \neq 0$.

▶ A vektor abszolút értékére a fenti képlet valóban nem negatív számot ad, mert a szinusz függvény $[0,\pi]$ intervallumon nem negatív.

▶ E definíció bármely két 3-dimenziós vektor vektori szorzatát egyértelműen definiálja, ugyanis minden olyan esetben, amikor nem dönthető el, hogy a vektorok jobbrendszert alkotnak-e, a szorzat a nullvektor.

*1.28. ábra. A test az $O$ pontban rögzítve van, a $P$ pontban hat az $\mathbf{F}$ erő, a forgás tengelye merőleges lesz az $\overrightarrow{OP}$ és az $\mathbf{F}$ vektorok síkjára, az $\overrightarrow{OP}$, az $\mathbf{F}$ és $\mathbf{M}$ jobbrendszert alkotnak, ahol $\mathbf{M}$ a forgatónyomaték, melynek iránya megadja a forgatás irányát. Az $|\mathbf{F}|\sin(\overrightarrow{OP},\mathbf{F})_\angle$ szakaszt szaggatott vonal jelöli.*

<!-- OCR: through PDF p.35 -->
