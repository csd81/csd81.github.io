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

**1.25. példa (Vektori szorzat meghatározása).** *Tegyük fel, hogy a tér két vektora 3 illetve 5 hosszú, az általuk bezárt szög koszinusza $\frac{4}{5}$. Mit tudunk a vektori szorzatról?*

*Megoldás.* Ha $\cos\gamma = \frac{4}{5}$, akkor $\sin\gamma = \sqrt{1 - \left(\frac{4}{5}\right)^2} = \frac{3}{5}$, így a vektori szorzat hossza $|\mathbf{a}||\mathbf{b}|\sin(\mathbf{a},\mathbf{b})_\angle = 3 \cdot 5 \cdot \frac{3}{5} = 9$, iránya merőleges mindkét vektorra és $\mathbf{a}$, $\mathbf{b}$, $\mathbf{a} \times \mathbf{b}$ ebben a sorrendben jobbrendszert alkot (ld. 1.29. ábra). $\square$

**1.26. példa ($\mathbf{i}$, $\mathbf{j}$, $\mathbf{k}$ vektori szorzata).** *Legyen $\mathbf{i}$, $\mathbf{j}$, $\mathbf{k}$ három, páronként egymásra merőleges, ebben a sorrendben jobbrendszert alkotó egységvektor. Készítsünk művelettáblát vektori szorzataikról!*

*Megoldás.* Mivel $(\mathbf{i},\mathbf{i})_\angle = 0$, ezért $|\mathbf{i} \times \mathbf{i}| = 0$, így $\mathbf{i} \times \mathbf{i} = \mathbf{0}$. Hasonlóan $\mathbf{j} \times \mathbf{j} = \mathbf{0}$ és $\mathbf{k} \times \mathbf{k} = \mathbf{0}$.

Mivel $|\mathbf{i}| = |\mathbf{j}| = 1$ és $(\mathbf{i},\mathbf{j})_\angle = 90°$, ezért $|\mathbf{i} \times \mathbf{j}| = 1$, azaz $\mathbf{i} \times \mathbf{j}$ is egységvektor. Ráadásul $\mathbf{i} \times \mathbf{j}$ merőleges $\mathbf{i}$-re és $\mathbf{j}$-re, és $\mathbf{i}$, $\mathbf{j}$ valamint $\mathbf{i} \times \mathbf{j}$ jobbrendszert alkotnak épp úgy, mint $\mathbf{i}$, $\mathbf{j}$ és $\mathbf{k}$. Ebből következik, hogy $\mathbf{i} \times \mathbf{j} = \mathbf{k}$. Hasonlóképp $\mathbf{j} \times \mathbf{k} = \mathbf{i}$ és $\mathbf{k} \times \mathbf{i} = \mathbf{j}$. Ha $\mathbf{i}$, $\mathbf{j}$, $\mathbf{k}$ jobbrendszert alkot, akkor $\mathbf{j}$, $\mathbf{i}$ és $\mathbf{k}$ balrendszert, így $\mathbf{j} \times \mathbf{i} = -\mathbf{k}$. Mindezeket összefoglalva a következő művelettáblát kapjuk.

| $\times$ | $\mathbf{i}$ | $\mathbf{j}$ | $\mathbf{k}$ |
|---|---|---|---|
| $\mathbf{i}$ | $\mathbf{0}$ | $\mathbf{k}$ | $-\mathbf{j}$ |
| $\mathbf{j}$ | $-\mathbf{k}$ | $\mathbf{0}$ | $\mathbf{i}$ |
| $\mathbf{k}$ | $\mathbf{j}$ | $-\mathbf{i}$ | $\mathbf{0}$ |

E három vektor közti szorzatok könnyen megjegyezhetőek, ha egy szabályos háromszög csúcsaira írjuk őket pozitív körüljárás szerint, mint azt a táblázat melletti ábra mutatja. Ekkor két különböző vektor szorzata a harmadik, ha a két vektor pozitív körüljárás szerint követi egymást. Ha negatív körüljárás szerint követik egymást, a szorzat a harmadik vektor $-1$-szerese. $\square$

**1.27. tétel (Mikor $\mathbf{0}$ a vektori szorzat?).** *Két térbeli vektor vektori szorzata pontosan akkor zérusvektor, ha a két vektor párhuzamos.*

*Bizonyítás.* Ha $\mathbf{a}$ vagy $\mathbf{b}$ valamelyike zérusvektor, akkor egyrészt a két vektor tekinthető párhuzamosnak, másrészt $\mathbf{a} \times \mathbf{b} = \mathbf{0}$, az állítás tehát igaz, ezért a továbbiakban feltesszük, hogy a két tényező egyike sem zérusvektor.

($\Leftarrow$) Ha $\mathbf{a}$ és $\mathbf{b}$ párhuzamosak, akkor $(\mathbf{a},\mathbf{b})_\angle = 0$ vagy $\pi$, tehát $\sin(\mathbf{a},\mathbf{b})_\angle = 0$, így $|\mathbf{a} \times \mathbf{b}| = |\mathbf{a}||\mathbf{b}| \cdot 0 = 0$, azaz $\mathbf{a} \times \mathbf{b} = \mathbf{0}$.

($\Rightarrow$) Ha $\mathbf{a} \times \mathbf{b} = \mathbf{0}$, azaz $|\mathbf{a}||\mathbf{b}|\sin(\mathbf{a},\mathbf{b})_\angle = 0$, akkor $|\mathbf{a}| \neq 0$ és $|\mathbf{b}| \neq 0$ miatt $\sin(\mathbf{a},\mathbf{b})_\angle = 0$. A szinusz függvénynek a $[0,\pi]$ intervallumban a 0 és a $\pi$ helyen van zérushelye, tehát a két vektor vagy egyirányú, vagy ellenkező irányú, vagyis párhuzamos. $\square$

*1.29. ábra. Az $\mathbf{a}$, $\mathbf{b}$ és az $\mathbf{a} \times \mathbf{b}$ vektorok.*

**1.28. tétel (Vektori szorzat abszolút értékének geometriai jelentése).** *Két vektor vektori szorzatának abszolút értéke a két vektor által kifeszített paralelogramma területének mérőszámával egyenlő.*

*Bizonyítás.* Az $\mathbf{a}$ és $\mathbf{b}$ vektorok által kifeszített paralelogramma oldalainak hossza $|\mathbf{a}|$ és $|\mathbf{b}|$, az $\mathbf{a}$ oldalhoz tartozó magassága pedig $m = |\mathbf{b}|\sin(\mathbf{a},\mathbf{b})_\angle$. A paralelogramma területe $|\mathbf{a}|m = |\mathbf{a}||\mathbf{b}|\sin(\mathbf{a},\mathbf{b})_\angle = |\mathbf{a} \times \mathbf{b}|$ (1.30. ábra). $\square$

**1.29. tétel (Vektori szorzás műveleti tulajdonságai).** *Tetszőleges $\mathbf{a}$, $\mathbf{b}$ és $\mathbf{c}$ vektorokra, valamint tetszőleges $r$ valós számra igazak az alábbi összefüggések:*
- *a)* $\mathbf{a} \times \mathbf{b} = -\mathbf{b} \times \mathbf{a}$ *(alternáló tulajdonság)*
- *b)* $(\mathbf{a} + \mathbf{b}) \times \mathbf{c} = \mathbf{a} \times \mathbf{c} + \mathbf{b} \times \mathbf{c}$, illetve $\mathbf{a} \times (\mathbf{b} + \mathbf{c}) = \mathbf{a} \times \mathbf{b} + \mathbf{a} \times \mathbf{c}$ *(disztributivitás)*
- *c)* $r(\mathbf{a} \times \mathbf{b}) = (r\mathbf{a}) \times \mathbf{b} = \mathbf{a} \times (r\mathbf{b})$
- *d)* $|\mathbf{a} \times \mathbf{b}| = \sqrt{|\mathbf{a}|^2|\mathbf{b}|^2 - |\mathbf{a} \cdot \mathbf{b}|^2}$
- *e)* $\mathbf{a} \times (\mathbf{b} \times \mathbf{c}) = (\mathbf{a} \cdot \mathbf{c})\mathbf{b} - (\mathbf{a} \cdot \mathbf{b})\mathbf{c}$ *(kifejtési tétel)*

▶ E tétel a) pontja szerint a vektori szorzás *nem kommutatív*!

▶ A vektori szorzás nem is asszociatív. Az 1.26. példa eredményét használva könnyen látható, hogy
$$(\mathbf{i} \times \mathbf{j}) \times \mathbf{j} \neq \mathbf{i} \times (\mathbf{j} \times \mathbf{j}),$$
ugyanis $(\mathbf{i} \times \mathbf{j}) \times \mathbf{j} = \mathbf{k} \times \mathbf{j} = -\mathbf{i}$, másrészt $\mathbf{i} \times (\mathbf{j} \times \mathbf{j}) = \mathbf{i} \times \mathbf{0} = \mathbf{0}$.

▶ A tétel bizonyítását az 1.49. feladatra hagyjuk.

### Paralelepipedon térfogata és előjeles térfogata

Az 1.28. tételben megmutattuk, hogy a vektori szorzat abszolút értéke a két vektor által kifeszített paralelogramma területét adja.

**1.30. tétel (Paralelepipedon térfogata).** *Az $\mathbf{a}$, $\mathbf{b}$ és $\mathbf{c}$ vektorok által kifeszített paralelepipedon térfogata $|(\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c}|$. A $(\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c}$ kifejezés értéke pozitív, ha a vektorok jobbrendszert, negatív, ha balrendszert alkotnak, és nulla, ha lineárisan összefüggők.*

*Bizonyítás.* Az $\mathbf{a}$ és $\mathbf{b}$ által kifeszített paralelogramma területe $|\mathbf{a} \times \mathbf{b}|$, és mivel $\mathbf{a} \times \mathbf{b}$ merőleges a paralelogramma síkjára, ezért a paralelepipedon magassága $\mathbf{c}$-nek az $\mathbf{a} \times \mathbf{b}$ egyenesére eső merőleges vetülete hosszával egyenlő. Ez az $\mathbf{a} \times \mathbf{b}$ irányú egységvektorral való skaláris szorzással számolható. Az egységvektor
$$\mathbf{e} = \frac{\mathbf{a} \times \mathbf{b}}{|\mathbf{a} \times \mathbf{b}|},$$
a magasság $|\mathbf{e} \cdot \mathbf{c}|$, és így a térfogat (azaz az alapterületszer magasság) értéke
$$|\mathbf{a} \times \mathbf{b}|\left|\frac{\mathbf{a} \times \mathbf{b}}{|\mathbf{a} \times \mathbf{b}|} \cdot \mathbf{c}\right| = |(\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c}|.$$

*1.30. ábra. $|\mathbf{a} \times \mathbf{b}|$ megegyezik a paralelogramma területével.*

Tehát a paralelepipedon térfogata $|(\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c}|$. A $(\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c}$ skalár pontosan akkor negatív, ha a $\mathbf{c}$ vektor $\mathbf{a} \times \mathbf{b}$ egyenesére eső merőleges vetülete és $\mathbf{a} \times \mathbf{b}$ ellenkező irányú. Vagyis ha a $\mathbf{c}$ vektor az $\mathbf{a} \times \mathbf{b}$ síkjának másik oldalán van, mint az $\mathbf{a} \times \mathbf{b}$ vektor, azaz ha $\mathbf{a}$, $\mathbf{b}$ és $\mathbf{c}$ balrendszert alkot! Végül $(\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c} = 0$ pontosan akkor teljesül, ha $\mathbf{a} \times \mathbf{b} \perp \mathbf{c}$, azaz ha a három vektor egy síkba esik. $\square$

▶ A $(\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c}$ skalárt az $\mathbf{a}$, $\mathbf{b}$ és $\mathbf{c}$ vektorok által kifeszített paralelepipedon *előjeles térfogatának* nevezzük.

### Vegyes szorzat

Az előző paragrafusban megmutattuk az $(\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c}$ kifejezés fontosságát. Ez vezet a következő definícióhoz:

**1.31. definíció (Vegyes szorzat).** *A 3-dimenziós tér három tetszőleges $\mathbf{a}$, $\mathbf{b}$ és $\mathbf{c}$ vektorából képzett*
$$(\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c}$$
*skalárt a három vektor vegyes szorzatának nevezzük.*

▶ Az $\mathbf{a}$, $\mathbf{b}$ és $\mathbf{c}$ vektorok vegyes szorzatának szokásos jelölése $\mathbf{abc}$, de mi a későbbi fejezetekben nem fogjuk használni.

▶ Mivel a skaláris szorzás kommutatív, ezért $(\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c} = \mathbf{c} \cdot (\mathbf{a} \times \mathbf{b})$.

▶ A paralelepipedon térfogatára ugyanazt az értéket kell kapnunk, bármelyik oldallapot is választjuk alapnak, így a három vektorból a vektorok különböző sorrendjeivel képzett vegyes szorzatok csak előjelükben térhetnek el egymástól. Mivel az előjel az orientáció függvénye, ezért – figyelembe véve az előző megjegyzést is – kapjuk, hogy
$$(\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c} = (\mathbf{b} \times \mathbf{c}) \cdot \mathbf{a} = (\mathbf{c} \times \mathbf{a}) \cdot \mathbf{b} = \mathbf{abc} = \mathbf{bca} = \mathbf{cab}$$
$$= -(\mathbf{c} \times \mathbf{b}) \cdot \mathbf{a} = -(\mathbf{b} \times \mathbf{a}) \cdot \mathbf{c} = -(\mathbf{a} \times \mathbf{c}) \cdot \mathbf{b} = -\mathbf{acb} = -\mathbf{cba} = -\mathbf{bac}.$$

**1.32. példa (Vegyes szorzat).** *Határozzuk meg egy egységélű kocka egy csúcsból induló három lapátló-vektorának vegyes szorzatát (1.31 ábra)!*

*Megoldás.* Jelölje a kocka egyik csúcsából induló három élvektorát $\mathbf{i}$, $\mathbf{j}$ és $\mathbf{k}$. E három vektor ebben a sorrendben alkosson jobbrendszert. Ekkor az előző megjegyzés szerint $\mathbf{ijk} = \mathbf{jki} = \mathbf{kij} = 1$, $\mathbf{kji} = \mathbf{jik} = \mathbf{ikj} = -1$. Mivel a vegyes szorzat egy paralelepipedon térfogatát vagy annak ellentettjét adja, ezért ha egy szorzatban egy vektor többször is szerepel, akkor annak értéke 0. Például $\mathbf{iji} = (\mathbf{i} \times \mathbf{j}) \cdot \mathbf{i} = \mathbf{k} \cdot \mathbf{i} = 0$. A három lapátló-vektor: $\mathbf{i} + \mathbf{j}$, $\mathbf{j} + \mathbf{k}$, $\mathbf{k} + \mathbf{i}$. Ezek vegyes szorzata
$$\begin{aligned}
((\mathbf{i} + \mathbf{j}) \times (\mathbf{j} + \mathbf{k})) \cdot (\mathbf{k} + \mathbf{i}) &= \mathbf{ijk} + \mathbf{iji} + \mathbf{ikk} + \mathbf{iki} + \mathbf{jjk} + \mathbf{jji} + \mathbf{jkk} + \mathbf{jki} \\
&= 1 + 0 + 0 + 0 + 0 + 0 + 0 + 1 \\
&= 2,
\end{aligned}$$
tehát a három lapátló-vektor vegyes szorzata 2. Ez azt is jelenti, hogy e három vektor által kifeszített paralelepipedon térfogata 2. $\square$

*1.31. ábra. $(\mathbf{i} + \mathbf{j})(\mathbf{j} + \mathbf{k})(\mathbf{k} + \mathbf{i}) = 2$.*

## Feladatok

### Ellenőrző kérdések

**1.29.● Skaláris szorzás: igaz – hamis.** Melyek igazak, melyek hamisak az alábbi állítások közül?
- a) Két egységvektor skaláris szorzata $-1$ és 1 közé esik.
- b) Egy $\mathbf{v}$ vektor szorzata egy egységvektorral megegyezik $\mathbf{v}$-nek az egységvektor egyenesére eső merőleges vetületével.
- c) A skaláris szorzás kommutatív.
- d) A skaláris szorzás asszociatív (ld. 1.35. feladat).
- e) A nullvektor bármely vektorra merőleges.
- f) Két vektor pontosan akkor merőleges, ha skaláris szorzatuk 0.
- g) Ha $\mathbf{a} \cdot \mathbf{b} = \mathbf{a} \cdot \mathbf{c}$, akkor $\mathbf{b} = \mathbf{c}$.

**1.30.● Vektori szorzás, orientáció: igaz – hamis.** Melyek igazak, melyek hamisak az alábbi állítások közül?
- a) A vektori szorzás kommutatív és asszociatív művelet.
- b) Ha $\mathbf{a} \times \mathbf{b} = \mathbf{a} \times \mathbf{c}$, akkor $\mathbf{b} = \mathbf{c}$.
- c) Ha az $xy$-síkbeli $\mathbf{a}$ és $\mathbf{b}$ vektorok irányított szöge a $\mathbf{k}$ egységvektor felől nézve pozitív, akkor $\mathbf{a} \times \mathbf{b} = c\mathbf{k}$, ahol $c > 0$.
- d) Ha $\mathbf{a}$, $\mathbf{b}$ és $\mathbf{c}$ jobbrendszert alkot, akkor $\mathbf{a}$, $-\mathbf{b}$ és $-\mathbf{c}$ is.
- e) Ha $\mathbf{a}$, $\mathbf{b}$, $\mathbf{c}$ jobbrendszert alkot, akkor $-\mathbf{a}$, $-\mathbf{b}$ és $-\mathbf{c}$ is.
- f) $\mathbf{a} \times \mathbf{b} = \mathbf{0}$ pontosan akkor igaz, ha $\mathbf{a}$ és $\mathbf{b}$ lineárisan összefüggők.
- g) Ha $\mathbf{v} \neq \mathbf{0}$, de $\mathbf{a} \times \mathbf{v} = \mathbf{b} \times \mathbf{v} = \mathbf{0}$, akkor $\mathbf{a}$ és $\mathbf{b}$ lineárisan összefüggők.

### Skaláris, vektori és vegyes szorzás

*A következő feladatokban megadott adatok alapján számítsuk ki az $\mathbf{a} \cdot \mathbf{b}$ skaláris szorzatot! Legyen $\gamma = (\mathbf{a},\mathbf{b})_\angle$.*

**1.31.✶** $|\mathbf{a}| = 1$, $|\mathbf{b}| = 2$, $\gamma = \frac{\pi}{3}$.

**1.32.** $|\mathbf{a}| = \sqrt{2}$, $|\mathbf{b}| = 2$, $\gamma = \frac{3\pi}{4}$.

**1.33.** $|\mathbf{a}| = 1$, $|\mathbf{b}| = 2$, $\gamma = \pi$.

**1.34.✶** $|\mathbf{a}| = \sqrt{2}$, $|\mathbf{b}| = 2$, $\gamma = \frac{\pi}{2}$.

**1.35.** Igazoljuk, hogy általában $(\mathbf{a} \cdot \mathbf{b})\mathbf{c} \neq \mathbf{a}(\mathbf{b} \cdot \mathbf{c})$.

**1.36.** Egyszerűsítsük az alábbi kifejezést! *a)* $(\mathbf{a} + \mathbf{b}) \cdot (\mathbf{a} - \mathbf{b})$, *b)* $(\mathbf{a} + 2\mathbf{b}) \cdot \mathbf{a} - 2\mathbf{a} \cdot \mathbf{b}$.

**1.37.** Mekkora $\mathbf{a}$ és $\mathbf{b}$ szöge, ha $|\mathbf{a}| = 3$, $|\mathbf{b}| = 4$, $|\mathbf{a} + \mathbf{b}| = 5$?

**1.38.●** Legyen $O$ a tér adott pontja, $\mathbf{a}$ egy tetszőleges vektor és $c$ egy tetszőleges konstans. Hol helyezkednek el azok az $X$ pontok, amelyekre $\overrightarrow{OX} \cdot \mathbf{a} = c$?

**1.39.** Határozzuk meg az $\mathbf{e}_1 \cdot \mathbf{e}_2 + \mathbf{e}_1 \cdot \mathbf{e}_3 + \mathbf{e}_2 \cdot \mathbf{e}_3$ értékét, ha $\mathbf{e}_1$, $\mathbf{e}_2$ és $\mathbf{e}_3$ egységvektorok és $\mathbf{e}_1 + \mathbf{e}_2 + \mathbf{e}_3 = \mathbf{0}$.

**1.40.** Bizonyítsuk be, hogy ha a térbeli $\mathbf{v}$ vektor merőleges a lineárisan független (nem komplanáris) $\mathbf{a}$, $\mathbf{b}$ és $\mathbf{c}$ vektorok mindegyikére, akkor $\mathbf{v} = \mathbf{0}$.

**1.41. Skaláris szorzat kiszámítása.** Számítsuk ki az ábrán látható két vektor skaláris szorzatát (a szomszédos rácsvonalak távolsága 1 egység).

**1.42. Merőleges összetevőkre bontás.** Az 1.41. feladatbeli vektorokra $\mathbf{a} \cdot \mathbf{b} = 2$ és $|\mathbf{a}| = 2\sqrt{2}$. Bontsuk fel a $\mathbf{b}$ vektort $\mathbf{a}$-val párhuzamos és rá merőleges összetevőkre.

**1.43.✶** Igaz-e, hogy $|\mathbf{a} + \mathbf{b} + \mathbf{c}|^2 = |\mathbf{a}|^2 + |\mathbf{b}|^2 + |\mathbf{c}|^2$ pontosan akkor áll fenn, ha $\mathbf{a}$, $\mathbf{b}$ és $\mathbf{c}$ három egymásra páronként merőleges vektor?

**1.44.●** Számítsuk ki *a)* $|\mathbf{a} \times \mathbf{b}|$ értékét, ha $|\mathbf{a}| = 1$, $|\mathbf{b}| = 2$, $(\mathbf{a},\mathbf{b})_\angle = \frac{\pi}{6}$; *b)* $\mathbf{a} \times \mathbf{b}$ értékét, ha $|\mathbf{a}| = 1$, $|\mathbf{b}| = 2$, $(\mathbf{a},\mathbf{b})_\angle = \pi$.

**1.45.** Egyszerűsítsük az alábbi kifejezést! *a)* $(\mathbf{a} + \mathbf{b}) \times (\mathbf{a} - \mathbf{b})$, *b)* $(\mathbf{i} + \mathbf{j} + \mathbf{k}) \times (\mathbf{i} + \mathbf{j})$.

**1.46.** Tekintsünk egy egységélű kockát, melynek egyik csúcsát jelölje $P$. Számítsuk ki a $P$-ből induló *a)* valamelyik két lapátló-vektor skaláris szorzatát, *b)* egyik lapátló- és a testátló-vektor skaláris szorzatát, valamint a $P$-ből induló valamelyik élvektor és *c)* egy vele egy lapon lévő lapátló-vektor, *d)* egy vele nem egy lapon lévő lapátló-vektor vektori szorzatát.

**1.47.** Igazoljuk, hogy ha $\mathbf{u}$ merőleges a $\mathbf{v}$ és $\mathbf{w}$ vektorokra, akkor merőleges minden lineáris kombinációjukra is.

**1.48.** Három lineárisan független vektor lehetséges sorrendjei közül hány alkot jobb- és hány balrendszert?

**1.49.** Igazoljuk az 1.29. tétel állításait!

**1.50. Szögfelező.** Legyenek $\mathbf{a}$ és $\mathbf{b}$ nemzérus vektorok. Mutassuk meg, hogy a $|\mathbf{b}|\mathbf{a} + |\mathbf{a}|\mathbf{b}$ vektor felezi $\mathbf{a}$ és $\mathbf{b}$ szögét! (Ezt felhasználva mutassuk meg, hogy a háromszög egyik szögének szögfelezője a szemközti oldalt a két szomszédos oldal hosszának arányában osztja fel.)

**1.51. Mit cserél föl a tükör?** Hogy lehet az, hogy a tükör fölcseréli a jobbat a ballal, de a föntet a lenttel nem?

**1.52. Vektori szorzás egységvektorral.** Ha $\mathbf{e}$ egységvektor és $\mathbf{a}$ egy tetszőleges vektor, akkor mi az $|\mathbf{e} \times \mathbf{a}|$ szám és mi az $(\mathbf{e} \times \mathbf{a}) \times \mathbf{e}$ vektor geometriai jelentése?

**1.53.** Bizonyítsuk, hogy ha $\mathbf{a} + \mathbf{b} + \mathbf{c} = \mathbf{0}$, akkor $\mathbf{a} \times \mathbf{b} = \mathbf{b} \times \mathbf{c} = \mathbf{c} \times \mathbf{a}$. Igaz-e az állítás megfordítása?

**1.54.** Az $\mathbf{a}$, $\mathbf{b}$, $\mathbf{c}$ vektorok által kifeszített paralelepipedon térfogata $V$. Mennyi a térfogata a következő három vektor által kifeszített paralelepipedonnak?
- a) $\mathbf{u} = \mathbf{a} + \mathbf{b} + \mathbf{c}$, $\mathbf{v} = \mathbf{a} + 2\mathbf{b} + 3\mathbf{c}$, $\mathbf{w} = \mathbf{a} + \mathbf{b} + 2\mathbf{c}$,
- b) $\mathbf{u} = \mathbf{a} + \mathbf{b} + \mathbf{c}$, $\mathbf{v} = \mathbf{a} + \mathbf{b} + 3\mathbf{c}$, $\mathbf{w} = \mathbf{a} + 3\mathbf{b} + \mathbf{c}$.

Mi a kapcsolat az $\mathbf{a}$, $\mathbf{b}$, $\mathbf{c}$ körüljárása és az $\mathbf{u}$, $\mathbf{v}$, $\mathbf{w}$ vektorok körüljárása között?

## Vektorok koordinátás alakban

*A koordináták bevezetésével egyrészt új algebrai eszközökhöz jutunk a vektorok és a különféle geometriai alakzatok vizsgálatában, másrészt lehetővé válik a vektor fogalmának kiterjesztése. Így jutunk a sokdimenziós terek fogalmához, ami nélkülözhetetlen a közgazdaságtanban, az internetes keresők matematikájában, vagy véges struktúrák fölötti változatában a kódelméletben és a kriptográfiában.*

### Descartes-féle koordináta-rendszer

Descartes 1637-ben *La Géométrie* című művében egy szép ötlettel összekapcsolta a geometriát az algebrával. Alapgondolata az volt, hogy a geometria alapelemei (pl. pontok) és a valós számok/számpárok/számhármasok közt kölcsönösen egyértelmű megfeleltetés hozható létre, így bizonyos geometriai alakzatok algebrai egyenletekkel leírhatóvá és vizsgálhatóvá válnak.

Az 1.11. tétel szerint a sík bármely $\mathbf{v}$ vektora felírható két adott lineárisan független $\mathbf{e}_1$, $\mathbf{e}_2$ vektor lineáris kombinációjaként, és e felírás egyértelmű. Ha e lineáris kombináció $\mathbf{v} = v_1\mathbf{e}_1 + v_2\mathbf{e}_2$ alakú, akkor a $\mathbf{v}$ vektorhoz a $(v_1, v_2)$ számpárt rendeljük, és ezt a $\mathbf{v}$ vektor *koordinátás alakjának*, a $v_1$ és $v_2$ skalárokat pedig a $\mathbf{v}$ *koordinátáinak* nevezzük. Azt mondjuk, hogy az $\{\mathbf{e}_1, \mathbf{e}_2\}$ vektorpár a *koordináta-rendszer bázisa*, az $\mathbf{e}_1$ és $\mathbf{e}_2$ vektorok a *bázisvektorok* vagy *alapvektorok*. Tetszőleges vektor koordinátáinak meghatározásához elég a bázisvektorokat ismerni.

**1.33. példa (Vektorok koordinátái).** *Határozzuk meg az 1.32. ábrán megadott vektoroknak az $\mathbf{e}_1$ és $\mathbf{e}_2$ vektorokra, mint bázisra vonatkozó koordinátáit!*

*Megoldás.* A megoldás leolvasható az 1.33. ábráról. Áttekinthetőbb, ha az összes vektort egyetlen pontból indítjuk (ld. 1.34. ábra). $\square$

A koordináta-rendszer a 3-dimenziós térben is hasonló módon építhető fel. Az 1.12. tétel szerint a tér bármely $\mathbf{v}$ vektora felírható három adott lineárisan független $\mathbf{e}_1$, $\mathbf{e}_2$, $\mathbf{e}_3$ vektor lineáris kombinációjaként, és e felírás egyértelmű. Ha $\mathbf{v} = v_1\mathbf{e}_1 + v_2\mathbf{e}_2 + v_3\mathbf{e}_3$, akkor a $\mathbf{v}$ vektorhoz a $(v_1, v_2, v_3)$ számhármast rendeljük, és ezt a $\mathbf{v}$ vektor *koordinátás alakjának*, a $v_1$, $v_2$, $v_3$ skalárokat pedig a $\mathbf{v}$ *koordinátáinak* nevezzük. *Bázis* az $\{\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3\}$ vektorhármas.

A koordinátázás az 1-dimenziós térben is megvalósítható: ha $\mathbf{e} \neq \mathbf{0}$ (tehát $\{\mathbf{e}\}$ lineárisan független vektorrendszer!), akkor bármely vele párhuzamos $\mathbf{v}$ vektor egyértelműen felírható $\mathbf{v} = v\mathbf{e}$ alakban. E $v$ skalár lesz a $\mathbf{v}$ koordinátás alakja (a zárójel itt szükségtelen). Így a $\mathbf{v} \leftrightarrow v$ hozzárendelés kölcsönösen egyértelmű a vektorok és a skalárok közt.

> *René Descartes* (Renatus Cartesianus) (1596–1650) francia filozófus és matematikus, a modern filozófia atyja, az analitikus geometria egyik megalkotója. Filozófiáját a puszta hitre alapozott állításokkal szemben a racionális érvelések útján kívánta fölépíteni (lásd *descartesi kételkedés* és „gondolkodom, tehát vagyok"). Orvostudományt és jogot tanult, végül hadmérnöki képesítést szerzett. Több háborúban is részt vett. 1619-ben egy Magyarországot is érintő hosszú útján egy Ulm melletti parasztházban három álmot látott, melyek megfejtése „egy csodálatos tudományhoz" vezette, ami filozófiája alapjává vált.

*1.32. ábra. Mik a vektorok koordinátái?*

*1.33. ábra. A megoldás.*

*1.34. ábra. A megoldás helyvektorokkal ábrázolva.*

Ha kijelölünk egy pontot az egyenesen/síkban/térben – ez lesz az origó –, akkor az egyenes/sík/tér pontjai és a helyvektorok végpontjai közti kölcsönösen egyértelmű megfeleltetéssel együtt a pontok is koordinátát kapnak.

Például az 1.34 helyvektorainak végpontjai a helyvektoréval azonos koordinátákat kapnak (ld. 1.35. ábra).

A helyvektorok és a pontok közti kölcsönösen egyértelmű megfeleltetést a jelölésben is kifejezzük azzal, hogy nem teszünk különbséget a vektor és a pont koordinátás alakja közt, a $\mathbf{v} = (a, b)$ vektorhoz adott origó mellett rendelt pontot is $(a, b)$ jelöli. A vektorok koordinátás alakja – később kifejtendő okból – ún. *oszlopvektor* alakba is írható. E könyvben ekkor kerek helyett szögletes zárójelet használunk:
$$(a, b) = \begin{bmatrix} a \\ b \end{bmatrix}.$$

Ha a síkon egy pont az első koordinátatengelyen van, és az azon az egyenesen $x$ az 1-dimenziós koordinátája, akkor síkbeli koordinátás alakja $(x, 0)$ lesz. Hasonlóképp a második tengely minden pontjának $(0, y)$ a koordinátás alakja. Az origóé $(0, 0)$ (ld. 1.36. ábra). Az alapvektorok koordinátás alakja $\mathbf{e}_1 = (1, 0)$ és $\mathbf{e}_2 = (0, 1)$.

A 3-dimenziós esetben a koordinátatengelyekre eső pontok 3-dimenziós koordinátás alakja $(x, 0, 0)$, $(0, y, 0)$, illetve $(0, 0, z)$. Az origón átmenő és 2 tengelyt tartalmazó síkokat *koordinátasíkoknak* nevezzük. A koordinátasíkok pontjainak alakja $(x, y, 0)$, $(x, 0, z)$, illetve $(0, y, z)$. Az origóé $(0, 0, 0)$, míg az alapvektoroké $\mathbf{e}_1 = (1, 0, 0)$, $\mathbf{e}_2 = (0, 1, 0)$, $\mathbf{e}_3 = (0, 0, 1)$ (ld. 1.37. ábra).

### Műveletek koordinátás alakban megadott vektorokkal

Adva van a térben egy koordináta-rendszer és abban két tetszőleges $\mathbf{u} = (u_1, u_2, u_3)$ és $\mathbf{v} = (v_1, v_2, v_3)$ vektor. Keressük $\mathbf{u} + \mathbf{v}$, $\mathbf{u} - \mathbf{v}$, $c\mathbf{u}$, $\mathbf{u} \cdot \mathbf{v}$, $\mathbf{u} \times \mathbf{v}$ koordinátás alakját.

Az adott két vektor összege:
$$\begin{aligned}
\mathbf{u} + \mathbf{v} &= (u_1, u_2, u_3) + (v_1, v_2, v_3) \\
&= (u_1\mathbf{e}_1 + u_2\mathbf{e}_2 + u_3\mathbf{e}_3) + (v_1\mathbf{e}_1 + v_2\mathbf{e}_2 + v_3\mathbf{e}_3) \\
&= (u_1 + v_1)\mathbf{e}_1 + (u_2 + v_2)\mathbf{e}_2 + (u_3 + v_3)\mathbf{e}_3 \\
&= (u_1 + v_1, u_2 + v_2, u_3 + v_3).
\end{aligned}$$

A különbségre vonatkozó összefüggés hasonlóan igazolható. A skalárral szorzás is egyszerűen koordinátánként számolható:
$$\begin{aligned}
c\mathbf{u} &= c(u_1, u_2, u_3) = c(u_1\mathbf{e}_1 + u_2\mathbf{e}_2 + u_3\mathbf{e}_3) \\
&= cu_1\mathbf{e}_1 + cu_2\mathbf{e}_2 + cu_3\mathbf{e}_3 \\
&= (cu_1, cu_2, cu_3).
\end{aligned}$$

*1.35. ábra. Pontok és koordinátáik.*

*1.36. ábra. Pontok a koordináta-rendszer tengelyein.*

*1.37. ábra. Pontok a koordinátasíkokon.*

**1.34. állítás (Vektorműveletek koordinátás alakja).** *Adva van a térben egy koordináta-rendszer és abban két tetszőleges $\mathbf{u} = (u_1, u_2, u_3)$ és $\mathbf{v} = (v_1, v_2, v_3)$ vektor, valamint egy tetszőleges $c \in \mathbb{R}$ valós szám. Ekkor a vektorok összegének, különbségének és skalárszorosának koordinátás alakja*
$$\begin{aligned}
\mathbf{u} + \mathbf{v} &= (u_1, u_2, u_3) + (v_1, v_2, v_3) = (u_1 + v_1, u_2 + v_2, u_3 + v_3), \\
\mathbf{u} - \mathbf{v} &= (u_1, u_2, u_3) - (v_1, v_2, v_3) = (u_1 - v_1, u_2 - v_2, u_3 - v_3), \\
c\mathbf{u} &= c(u_1, u_2, u_3) = (cu_1, cu_2, cu_3).
\end{aligned}$$
*Az oszlopvektor jelölést használva*
$$\mathbf{u} \pm \mathbf{v} = \begin{bmatrix} u_1 \\ u_2 \\ u_3 \end{bmatrix} \pm \begin{bmatrix} v_1 \\ v_2 \\ v_3 \end{bmatrix} = \begin{bmatrix} u_1 \pm v_1 \\ u_2 \pm v_2 \\ u_3 \pm v_3 \end{bmatrix}, \quad c\mathbf{u} = c\begin{bmatrix} u_1 \\ u_2 \\ u_3 \end{bmatrix} = \begin{bmatrix} cu_1 \\ cu_2 \\ cu_3 \end{bmatrix}.$$

A síkbeli vektorokra hasonló állítások igazak, csak két koordinátával. Ellentétben az előzőekkel, a skaláris szorzás koordinátás alakja függ a koordináta-rendszertől.

**1.35. példa (Skaláris szorzás koordináta-rendszerben).** *Legyen a síkban az első alapvektor hossza 1, a másodiké 2, a köztük lévő szög $\pi/3$. Számítsuk ki az $\mathbf{u} = (1, 1)$ és a $\mathbf{v} = (-5/2, 1)$ vektorok skaláris szorzatát!*

*Megoldás.* Az alapvektorok hosszát és szögét ismerve ki tudjuk számítani az alapvektorok skaláris szorzatait:
$$\mathbf{e}_1 \cdot \mathbf{e}_1 = 1, \quad \mathbf{e}_2 \cdot \mathbf{e}_2 = 2^2 = 4, \quad \mathbf{e}_1 \cdot \mathbf{e}_2 = 1 \cdot 2 \cdot \cos\frac{\pi}{3} = 1.$$
Így két tetszőleges $\mathbf{u} = (u_1, u_2)$ és $\mathbf{v} = (v_1, v_2)$ vektorra:
$$\begin{aligned}
\mathbf{u} \cdot \mathbf{v} &= (u_1\mathbf{e}_1 + u_2\mathbf{e}_2) \cdot (v_1\mathbf{e}_1 + v_2\mathbf{e}_2) \\
&= u_1v_1\mathbf{e}_1 \cdot \mathbf{e}_1 + (u_1v_2 + u_2v_1)\mathbf{e}_1 \cdot \mathbf{e}_2 + u_2v_2\mathbf{e}_2 \cdot \mathbf{e}_2 \\
&= u_1v_1 + u_1v_2 + u_2v_1 + 4u_2v_2.
\end{aligned}$$
A megadott vektorokra $\mathbf{u} \cdot \mathbf{v} = -\frac{5}{2} + 1 - \frac{5}{2} + 4 = 0$, tehát a két vektor merőleges egymásra (ld. az 1.38. ábrát). $\square$

*1.38. ábra. Két vektor skaláris szorzata.*

### A derékszögű koordináta-rendszer

A természeti törvények különös fontosságot adnak az egymásra merőleges irányoknak, ezért például igen gyakran érdemes olyan koordináta-rendszert választani, amelyben az alapvektorok merőlegesek, más szóval *ortogonálisak* egymásra. A bázisvektorok szöge mellett azok hosszát is érdemes standardizálni, nevezetesen egységnyi hosszúnak választani, így mindegyik koordináta egyúttal távolságot is jelent. Az egységvektorokból álló ortogonális bázist *ortonormált bázisnak* nevezzük.

Az egységes tárgyalás érdekében a bázisvektorok körüljárását is előírhatjuk: általánosan elterjedt szokás a jobbrendszert választani. Az így konstruált bázis vektorait síkban gyakran $\mathbf{i}$, $\mathbf{j}$, térben $\mathbf{i}$, $\mathbf{j}$ és $\mathbf{k}$ jelöli.

A két és háromdimenziós térben a skaláris szorzat egyszerű alakot ölt, ha a koordináta-rendszer alapvektorai ortonormáltak.

**1.36. állítás (Skaláris szorzat ortonormált koordináta-rendszerben).** *A síkbeli $\mathbf{u} = (u_1, u_2)$ és $\mathbf{v} = (v_1, v_2)$, illetve a térbeli $\mathbf{u} = (u_1, u_2, u_3)$ és $\mathbf{v} = (v_1, v_2, v_3)$ vektorok skaláris szorzata ortonormált koordináta-rendszerben*
$$\mathbf{u} \cdot \mathbf{v} = u_1v_1 + u_2v_2, \quad\text{illetve}\quad \mathbf{u} \cdot \mathbf{v} = u_1v_1 + u_2v_2 + u_3v_3.$$

*Bizonyítás.* A síkbeli esetben kihasználjuk, hogy $\mathbf{i} \cdot \mathbf{i} = \mathbf{j} \cdot \mathbf{j} = 1$ és $\mathbf{i} \cdot \mathbf{j} = 0$:
$$\begin{aligned}
\mathbf{u} \cdot \mathbf{v} &= (u_1\mathbf{i} + u_2\mathbf{j}) \cdot (v_1\mathbf{i} + v_2\mathbf{j}) \\
&= u_1v_1\mathbf{i} \cdot \mathbf{i} + (u_1v_2 + u_2v_1)\mathbf{i} \cdot \mathbf{j} + u_2v_2\mathbf{j} \cdot \mathbf{j} \\
&= u_1v_1 + u_2v_2.
\end{aligned}$$
A térbeli eset hasonlóan bizonyítható. $\square$

**1.37. állítás (Vektori szorzat ortonormált koordináta-rendszerben).** *A térbeli $\mathbf{a} = (a_1, a_2, a_3)$ és $\mathbf{b} = (b_1, b_2, b_3)$ vektorok vektori szorzata derékszögű koordináta-rendszerben*
$$\mathbf{a} \times \mathbf{b} = (a_2b_3 - a_3b_2, a_3b_1 - a_1b_3, a_1b_2 - a_2b_1).$$

▶ Az $\mathbf{a} \times \mathbf{b}$ koordinátáinak könnyű memorizálására két sémát mutatunk a széljegyzetben (1.39. ábra).

*Bizonyítás.* Az alapvektorok egymással való vektori szorzatait már kiszámoltuk az 1.26. példában. Kihasználva, hogy $\mathbf{i} \times \mathbf{i} = \mathbf{j} \times \mathbf{j} = \mathbf{k} \times \mathbf{k} = \mathbf{0}$, $\mathbf{i} \times \mathbf{j} = \mathbf{k}$, $\mathbf{j} \times \mathbf{i} = -\mathbf{k}$, …, a következőt kapjuk:
$$\begin{aligned}
\mathbf{a} \times \mathbf{b} &= (a_1\mathbf{i} + a_2\mathbf{j} + a_3\mathbf{k}) \times (b_1\mathbf{i} + b_2\mathbf{j} + b_3\mathbf{k}) \\
&= a_2b_3\,\mathbf{j} \times \mathbf{k} + a_3b_2\,\mathbf{k} \times \mathbf{j} + a_3b_1\,\mathbf{k} \times \mathbf{i} + a_1b_3\,\mathbf{i} \times \mathbf{k} + a_1b_2\,\mathbf{i} \times \mathbf{j} + a_2b_1\,\mathbf{j} \times \mathbf{i} \\
&= a_2b_3\mathbf{i} - a_3b_2\mathbf{i} + a_3b_1\mathbf{j} - a_1b_3\mathbf{j} + a_1b_2\mathbf{k} - a_2b_1\mathbf{k} \\
&= (a_2b_3 - a_3b_2, a_3b_1 - a_1b_3, a_1b_2 - a_2b_1).
\end{aligned}$$
$\square$

**1.38. tétel (Paralelogramma területe).** *Az $(a, b)$ és a $(c, d)$ vektorok által kifeszített paralelogramma területe*
$$|ad - bc|.$$
*Az $ad - bc$ előjele aszerint pozitív, illetve negatív, hogy a két vektor a megadott sorrendben jobb- vagy balrendszert alkot.*

*1.39. ábra. A vektori szorzat kiszámítása a két vektor koordinátáiból. a) Írjuk a két vektort egymás alá, majd az első két koordinátát másoljuk a vektorok végére, végül az X alakba rakott nyílpároknál a ↘ nyíl végein lévő számok szorzatából vonjuk ki a ↗ szerinti szorzatot; az eredmény $(a_2b_3 - a_3b_2,\ a_3b_1 - a_1b_3,\ a_1b_2 - a_2b_1)$. b) Írjuk a két vektor koordinátái fölé az $\mathbf{i}$, $\mathbf{j}$, $\mathbf{k}$ vektorokat, másoljuk a táblázat után az első két oszlopot, és a ↘ menti szorzatokból vonjuk ki a ↗ menti szorzatokat: $(a_2b_3 - a_3b_2)\mathbf{i} + (a_3b_1 - a_1b_3)\mathbf{j} + (a_1b_2 - a_2b_1)\mathbf{k}$.*

*Bizonyítás.* Két 3-dimenziós vektor által kifeszített paralelogramma területe a vektori szorzatuk abszolút értéke. Ágyazzuk be a megadott két vektort a tér egyik koordinátasíkjába, tekintsük például az $(a, b, 0)$ és a $(c, d, 0)$ vektorokat. Vektori szorzatuk
$$(a, b, 0) \times (c, d, 0) = (0, 0, ad - bc),$$
ennek abszolút értéke $|ad - bc|$.

Mivel az $(a, b, 0)$, $(c, d, 0)$ és $(0, 0, ad - bc)$ vektorok jobbrendszert alkotnak, ezért $ad - bc$ pontosan akkor pozitív, ha a síkban az $(a, b)$ és a $(c, d)$ vektorok jobbrendszert alkotnak. $\square$

A paralelepipedon térfogata is kifejezhető az azt kifeszítő vektorok koordinátáival. Az $\mathbf{a} = (a_1, a_2, a_3)$, $\mathbf{b} = (b_1, b_2, b_3)$ és $\mathbf{c} = (c_1, c_2, c_3)$ vektorok által kifeszített paralelepipedon térfogata megegyezik az
$$(\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c} = a_1b_2c_3 + a_2b_3c_1 + a_3b_1c_2 - a_1b_3c_2 - a_2b_1c_3 - a_3b_2c_1 \tag{1.3}$$
kifejezés abszolút értékével, előjele pedig aszerint pozitív, illetve negatív, hogy a vektorok jobb- vagy balrendszert alkotnak. E képlet kiszámítására, memorizálására a széljegyzet ad segítséget (1.41. ábra).

*1.40. ábra. A paralelogramma előjeles területe $ad - bc$, melynek memorizálására a fenti séma használatos. Ez megegyezik két 2-dimenziós vektor – később tanulandó – determinánsával, melyet úgy jelölünk, hogy a két vektor koordinátáiból képzett táblázatot függőleges zárójelek közé zárjuk: $\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$. E jel nem az abszolút értéket jelöli, ahhoz egy további zárójelpár szükséges, azaz $|ad - bc| = \left|\begin{vmatrix} a & b \\ c & d \end{vmatrix}\right|$.*

*1.41. ábra. A paralelepipedon térfogata megegyezik az azt kifeszítő három vektor vegyes szorzatának abszolút értékével; a determinánsokra használt jelöléssel az előjeles térfogat $\mathbf{abc} = (\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c} = \begin{vmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{vmatrix}$.*

### Az $\mathbb{R}^n$ halmaz

Láttuk, hogy a 2-dimenziós, illetve 3-dimenziós vektorjellegű mennyiségek leírhatók egy rendezett számpárral, illetve számhármassal. Vajon megfordítható-e ez a kapcsolat? Értelmes dolog-e e szám-$n$-eseket egy $n$-dimenziós tér vektorainak, vagy pontjainak tekinteni? És hasznos-e a 2- és 3-dimenziós térben használt fogalmak általánosítása $n$ dimenzióra? A válasz mindegyik kérdésre határozott igen, amit a fizika 4-dimenziós tér-idő fogalmától számtalan gazdasági, vagy internettel kapcsolatos kérdés sokmilliárd-dimenziós térben való megoldása fényesen bizonyít.

**1.39. definíció.** *Egy tetszőleges $H$ halmaz elemeiből képzett rendezett elem-$n$-esek halmazát $H^n$-nel jelöljük.*

Például a $H = \{0,1\}$ halmaz elemeiből képzett rendezett elemhármasok halmaza
$$H^3 = \{(0,0,0), (0,0,1), (0,1,0), (1,0,0), (0,1,1), (1,0,1), (1,1,0), (1,1,1)\}.$$

A fenti jelölésnek megfelelően $\mathbb{R}^n$ a valós számokból képzett rendezett szám-$n$-esek halmazát jelöli. Eszerint a sík pontjait és vektorait $\mathbb{R}^2$, a térét $\mathbb{R}^3$ elemeivel koordinátáztuk. $\mathbb{R}^n$ elemein vektorműveleteket fogunk bevezetni, és $\mathbb{R}^n$-ről, mint vektortérről fogunk beszélni. Hasonlóképp, $\mathbb{R}^n$-t geometriai vagy pontérnek fogjuk tekinteni, ha elemeire, mint pontokra gondolunk, és köztük geometriai műveleteket végzünk. E kétféleség nem fog zavart okozni: $\mathbb{R}^n$ szerepét mindig az fogja meghatározni, hogy mit teszünk elemeivel, vagyis a szám-$n$-esekkel.

Az $\mathbb{R}^n$ megismerésében az *analógia* fonalán haladunk, a 2- és 3-dimenziós tér fogalmait fogjuk átvinni, általánosítani $n$ dimenzióra. Ez az analógia fog segíteni abban, hogy valamit „lássunk" $n$ dimenzióban is (ha nem is olyan jól, mint 3 dimenzióban). Példaként az analógiára egy 4-dimenziós kocka 2-dimenziós vetületét mutatjuk az 1.42. ábrán.

### Vektorok összeadása és skalárral szorzás $\mathbb{R}^n$-ben

A 2- és 3-dimenziós vektorok műveleteinek koordinátás alakja az összeadás, kivonás és skalárral szorzás esetén analóg módon átvihető az $n$-dimenziós vektorokra.

**1.40. definíció (Vektorműveletek $\mathbb{R}^n$-ben).** *Legyen $c \in \mathbb{R}$ tetszőleges valós, $\mathbf{u} = (u_1, u_2, \ldots, u_n)$ és $\mathbf{v} = (v_1, v_2, \ldots, v_n)$ az $\mathbb{R}^n$ két tetszőleges vektora. Két vektor összegén és egy vektor $c$-szeresén az*
$$\begin{aligned}
\mathbf{u} + \mathbf{v} &= (u_1 + v_1, u_2 + v_2, \ldots, u_n + v_n) \\
c\mathbf{u} &= (cu_1, cu_2, \ldots, cu_n)
\end{aligned}$$
*$\mathbb{R}^n$-beli vektorokat értjük.*

Összefoglaljuk e műveletek legfontosabb tulajdonságait:

**1.41. tétel (Az összeadás és skalárral szorzás tulajdonságai).** *Legyen $\mathbf{u}$, $\mathbf{v}$ és $\mathbf{w}$ az $\mathbb{R}^n$ három tetszőleges vektora, és legyen $c, d$ két tetszőleges valós, jelölje $\mathbf{0}$ a $(0, 0, \ldots, 0)$ vektort. Ekkor*
- *a)* $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$ — *a művelet fölcserélhető (kommutatív)*
- *b)* $\mathbf{u} + (\mathbf{v} + \mathbf{w}) = (\mathbf{u} + \mathbf{v}) + \mathbf{w}$ — *csoportosítható (asszociatív)*
- *c)* $\mathbf{u} + \mathbf{0} = \mathbf{u}$ — *zérusvektor*
- *d)* $c(d\mathbf{u}) = (cd)\mathbf{u}$ — *a két szorzás kompatibilis*
- *e)* $0\mathbf{u} = \mathbf{0}$, $1\mathbf{u} = \mathbf{u}$ — *szorzás 0-val és 1-gyel*
- *f)* $c(\mathbf{u} + \mathbf{v}) = c\mathbf{u} + c\mathbf{v}$ — *disztributív*
- *g)* $(c + d)\mathbf{u} = c\mathbf{u} + d\mathbf{u}$ — *disztributív*

Megegyezünk még abban, hogy egy $\mathbf{u}$ vektor $-\mathbf{u}$-val jelölt ellentettjén a $-1$-szeresét értjük, azaz $-\mathbf{u} = (-1)\mathbf{u} = (-u_1, -u_2, \ldots, -u_n)$. Így két vektor különbségére igaz, hogy $\mathbf{u} - \mathbf{v} = \mathbf{u} + (-\mathbf{v})$.

▶ E tulajdonságok mindegyike könnyen visszavezethető a valós számok algebrai tulajdonságaira, ezért ezek ellenőrzését (bizonyítását) az Olvasóra hagyjuk. Mintaként megmutatjuk az a) tulajdonság bizonyítását:
$$\begin{aligned}
\mathbf{u} + \mathbf{v} &= (u_1 + v_1, u_2 + v_2, \ldots, u_n + v_n) \\
&= (v_1 + u_1, v_2 + u_2, \ldots, v_n + u_n) \\
&= \mathbf{v} + \mathbf{u}.
\end{aligned}$$

▶ Az a)–c) tulajdonságok az összeadás, az d)–e) a skalárral szorzás, az f)–g) a két művelet közös tulajdonságait írják le.

*1.42. ábra. 4-dimenziós kocka ábrázolása 2-dimenzióban. A 0-dimenziós „kocka" egyetlen pontból áll, az 1-dimenziós kockát két 0-dimenziós határolja (egy szakasz). A 2-dimenziós „kockát" (a négyzetet) minden tengelyirányból két-két egybevágó 1-dimenziós „kocka" határolja (összesen négy), míg a 3-dimenziós kockát minden tengelyirányból két-két négyzet (összesen hat). A 3-dimenziós kocka 2-dimenziós ábrázolása csak a határoló négyzetek torzításával oldható meg. A 4-dimenziós kockát mind a négy tengelyirányból két-két 3-dimenziós kocka határolja, összesen nyolc; az ábrán három ilyen 3-dimenziós kockát kiszíneztünk.*

### Lineáris kombináció, lineáris függetlenség, lineáris összefüggőség

Hiába definiáltuk vektorok lineáris függetlenségének fogalmát tetszőleges számú vektorból álló vektorhalmazra, láttuk, hogy a 3-dimenziós térben legföljebb csak 3 vektor lehet lineárisan független. Viszont $\mathbb{R}^n$-ben $n$ lineárisan független vektort is találunk.

**1.42. állítás ($\mathbb{R}^n$ standard bázisa).** *Az $\mathbb{R}^n$-beli $\mathbf{e}_1 = (1, 0, \ldots, 0)$, $\mathbf{e}_2 = (0, 1, \ldots, 0), \ldots, \mathbf{e}_n = (0, 0, \ldots, 1)$ vektorok lineárisan függetlenek, és $\mathbb{R}^n$ minden vektora egyértelműen előáll ezek lineáris kombinációjaként!*

*Bizonyítás.* Az $\mathbf{e}_1$ nem áll elő a többi vektor lineáris kombinációjaként, hisz azok első koordinátája 0, így bármely lineáris kombinációjukban 0 az első koordináta, $\mathbf{e}_1$-ben pedig 1. Hasonlóan igazolható, hogy egyik $\mathbf{e}_i$ sem áll elő a többi vektor lineáris kombinációjaként ($i = 2, 3, \ldots, n$). A megadott vektorok tehát lineárisan függetlenek.

Mivel az $i$-edik koordináta egyedül csak az $\mathbf{e}_i$ vektorban 1, a többiben 0, ezért ha egy tetszőleges $\mathbf{v} = (v_1, v_2, \ldots, v_n)$ vektor előáll az $\mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_n$ vektorok lineáris kombinációjaként, akkor abban az $\mathbf{e}_i$ együtthatója csak $v_i$ lehet. Másrészt az is világos, hogy
$$(v_1, v_2, \ldots, v_n) = v_1\mathbf{e}_1 + v_2\mathbf{e}_2 + \ldots + v_n\mathbf{e}_n.$$
Ezzel igazoltuk, hogy $\mathbb{R}^n$ minden vektora egyértelműen áll elő az $\mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_n$ vektorok lineáris kombinációjaként. $\square$

**1.43. definíció (Standard bázis).** *Az $\mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_n$ vektorokból álló halmazt az $\mathbb{R}^n$ vektortér standard bázisának nevezzük.*

A fenti bizonyításban úgy igazoltuk vektorok lineáris függetlenségét, hogy az 1.10. definíciónak megfelelően igazoltuk, hogy mindegyik vektor független a többitől. Ez az út nehézkes. Ugyanakkor a síkban és a térben azt láttuk, hogy a vektorok függetlenségével együtt jár a belőlük képzett lineáris kombinációk egyértelműsége. Ez igaz a nullvektorra is, mely nulla együtthatókkal vett lineáris kombinációként előáll – ezt nevezzük a nullvektor triviális előállításának. Ez az alapja a következő tételnek:

**1.44. tétel (Lineáris függetlenség).** *Tetszőleges $\mathbb{R}^n$-beli $\mathcal{V} = \{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k\}$ vektorrendszerre az alábbi két állítás ekvivalens:*
1. *$\mathcal{V}$ lineárisan független, azaz $k > 1$ esetén egyik vektora sem fejezhető ki a többi lineáris kombinációjaként, $k = 1$ esetén pedig a vektor nem zérusvektor.*
2. *A zérusvektor csak egyféleképp – a triviális módon – áll elő $\mathcal{V}$ lineáris kombinációjaként. Másként fogalmazva, a $c_1, c_2, \ldots, c_k$ skalárokkal vett lineáris kombináció csak akkor lehet a nullvektor, azaz*
$$c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \ldots + c_k\mathbf{v}_k = \mathbf{0}$$
*csak akkor állhat fenn, ha $c_1 = c_2 = \ldots = c_k = 0$.*

*Bizonyítás.* Először tegyük fel, hogy a vektorrendszer csak egyetlen $\mathbf{v}$ vektorból áll. Ekkor a tétel azt állítja, hogy e vektor pontosan akkor lineárisan független, azaz pontosan akkor nem a nullvektor, ha a $c\mathbf{v} = \mathbf{0}$ csak $c = 0$ esetén állhat fenn. Ez nyilvánvaló, hisz ha $\mathbf{v} \neq \mathbf{0}$ és $c \neq 0$, akkor $c\mathbf{v} = \mathbf{0}$ sem állhat fenn. A továbbiakban tegyük fel, hogy a vektorrendszer legalább két vektorból áll. A következőkben kontrapozícióval bizonyítunk, azaz az $A \Rightarrow B$ állítást a vele ekvivalens $\neg B \Rightarrow \neg A$ állítással igazoljuk.

($\Leftarrow$) Megmutatjuk, hogy ha $c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \ldots + c_k\mathbf{v}_k = \mathbf{0}$ csak $c_1 = c_2 = \ldots = c_k = 0$ esetén állhat fenn, akkor semelyik $\mathbf{v}_i$ vektor sem fejezhető ki a többi lineáris kombinációjaként ($i = 1, 2, \ldots, k$). Tegyük fel, hogy valamelyik vektor – például a $\mathbf{v}_1$ – kifejezhető a többi lineáris kombinációjaként, azaz
$$\mathbf{v}_1 = d_2\mathbf{v}_2 + \ldots + d_k\mathbf{v}_k,$$
vagyis átrendezés után
$$(-1)\mathbf{v}_1 + d_2\mathbf{v}_2 + \ldots + d_k\mathbf{v}_k = \mathbf{0}.$$
Mivel $\mathbf{v}_1$ együtthatója nem 0, így elő tudtuk állítani a nullvektort olyan lineáris kombinációként, melyben nem minden együttható 0.

($\Rightarrow$) Megmutatjuk, hogy ha a vektorrendszer egyik vektora sem áll elő a többi kombinációjaként, akkor egyedül csak a csupa zérus együtthatójú lineáris kombinációja lehet zérusvektor. Ismét kontrapozícióval bizonyítunk: ha van olyan – nem csupa 0 együtthatójú – lineáris kombináció, mely a nullvektorral egyenlő, azaz
$$c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \ldots + c_k\mathbf{v}_k = \mathbf{0},$$
de valamelyik együttható – például a $c_1$ – nem 0, akkor $\mathbf{v}_1$ kifejezhető a többi vektor lineáris kombinációjaként:
$$\mathbf{v}_1 = -\frac{c_2}{c_1}\mathbf{v}_2 - \ldots - \frac{c_k}{c_1}\mathbf{v}_k,$$
ami bizonyítja az állítást. $\square$

Egy vektorrendszert *lineárisan összefüggőnek* nevezünk, ha nem független, azaz egyelemű vektorrendszer esetén ha az a vektor a zérusvektor, többelemű vektorrendszer esetén pedig ha van olyan vektora, mely kifejezhető a többi lineáris kombinációjaként. Az előző tétel szerint ez azzal ekvivalens, hogy a vektorrendszernek van olyan zérusvektort adó lineáris kombinációja, melyben nem mindegyik együttható zérus. A lineáris összefüggőség definíciója kicsit élesíthető:

**1.45. tétel (Lineáris összefüggőség).** *Egy nullvektortól különböző elemekből álló, legalább kételemű $\mathbb{R}^n$-beli $V = \{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k\}$ vektorrendszer pontosan akkor lineárisan összefüggő, ha van olyan $t \geq 2$ index, hogy $\mathbf{v}_t$ a $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_{t-1}$ vektorok lineáris kombinációja.*

Másként fogalmazva, ha egy nullvektort nem tartalmazó vektorrendszerben találunk olyan vektort, mely a többi lineáris kombinációja, akkor a vektorok bármely sorba rendezése mellett olyat is találunk, mely csak az őt sorrendben megelőző vektor(ok) lineáris kombinációja.

*Bizonyítás.* Először tegyük fel, hogy a vektorrendszer összefüggő, és legyen $t$ a legkisebb egész, melyre a $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_t$ vektorok már összefüggők. Mivel $\mathbf{v}_1 \neq \mathbf{0}$, ezért az első vektor nem lehet összefüggő, ezért $t \geqslant 2$. E vektorok összefüggősége miatt vannak olyan $c_i$ konstansok, melyekkel
$$c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \ldots + c_t\mathbf{v}_t = \mathbf{0}.$$
Biztos, hogy $c_t \neq 0$, különben már a $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_{t-1}$ vektorok is lineárisan összefüggők lennének, és ez ellentmond $t$ definíciójának. Így
$$\mathbf{v}_t = \frac{-c_1}{c_t}\mathbf{v}_1 + \frac{-c_2}{c_t}\mathbf{v}_2 + \cdots + \frac{-c_{t-1}}{c_t}\mathbf{v}_{t-1},$$
ami bizonyítja, hogy összefüggő vektorrendszerben létezik ilyen vektor.

A másik irányú implikáció definíció szerint igaz, hisz ha létezik ilyen $\mathbf{v}_t$ vektor, akkor ez valóban lineáris kombinációja az összes többi vektornak. $\square$

### Skaláris szorzás $\mathbb{R}^n$-ben

A skaláris szorzást először abból az alakból általánosítjuk, amelyet a 2- és 3-dimenziós térben ortonormált bázis esetén láttunk.

**1.46. definíció (Skaláris szorzás $\mathbb{R}^n$-ben).** *Legyen $\mathbf{u} = (u_1, u_2, \ldots, u_n)$ és $\mathbf{v} = (v_1, v_2, \ldots, v_n)$ az $\mathbb{R}^n$ tér két tetszőleges vektora. Skaláris szorzatukon a következő kifejezést értjük:*
$$\mathbf{u} \cdot \mathbf{v} = u_1v_1 + u_2v_2 + \ldots + u_nv_n.$$

**1.47. tétel (A skaláris szorzás alaptulajdonságai).** *Legyen $\mathbf{u}$, $\mathbf{v}$ és $\mathbf{w}$ az $\mathbb{R}^n$ három tetszőleges vektora, és legyen $c$ egy tetszőleges valós. Ekkor*
- *a)* $\mathbf{u} \cdot \mathbf{v} = \mathbf{v} \cdot \mathbf{u}$ — *kommutatív*
- *b)* $\mathbf{u} \cdot (\mathbf{v} + \mathbf{w}) = \mathbf{u} \cdot \mathbf{v} + \mathbf{u} \cdot \mathbf{w}$ — *disztributív*
- *c)* $(c\mathbf{u}) \cdot \mathbf{v} = c(\mathbf{u} \cdot \mathbf{v})$ — *kompatibilis a két szorzás*
- *d)* $\mathbf{u} \cdot \mathbf{u} \geqslant 0$ és $\mathbf{u} \cdot \mathbf{u} = 0 \iff \mathbf{u} = \mathbf{0}$ — *pozitív definit*

*Bizonyítás.* A bizonyítás itt is igen egyszerű, ezért csak az a) pontét mutatjuk meg, a többit az Olvasóra hagyjuk.
$$\begin{aligned}
\mathbf{u} \cdot \mathbf{v} &= u_1v_1 + u_2v_2 + \ldots + u_nv_n \\
&= v_1u_1 + v_2u_2 + \ldots + v_nu_n \\
&= \mathbf{v} \cdot \mathbf{u}.
\end{aligned}$$
$\square$

További tulajdonságok találhatók az 1.64. feladatban.

### Távolság és szög $\mathbb{R}^n$-ben

Két 2- vagy 3-dimenziós vektor távolságának és szögének a skaláris szorzatukkal való kapcsolatát használjuk e fogalmaknak a magasabb dimenziós terekben való definíciójához.

**1.48. definíció (Abszolút érték, szög, merőlegesség, távolság).** *Legyen $\mathbf{u}$ és $\mathbf{v}$ az $\mathbb{R}^n$ tér két tetszőleges vektora.*
- *a) Az $\mathbf{u}$ vektor hosszán önmagával vett skaláris szorzatának gyökét értjük:*
$$|\mathbf{u}| := \sqrt{\mathbf{u} \cdot \mathbf{u}}. \tag{1.4}$$
- *b) Az $\mathbf{u}$ és $\mathbf{v}$ vektorok (hajlás)szögének koszinusza az alábbi tört:*
$$\cos(\mathbf{u},\mathbf{v})_\angle := \frac{\mathbf{u} \cdot \mathbf{v}}{|\mathbf{u}||\mathbf{v}|} \tag{1.5}$$
- *c) Azt mondjuk, hogy az $\mathbf{u}$ és $\mathbf{v}$ vektorok merőlegesek egymásra, ha*
$$\mathbf{u} \cdot \mathbf{v} = 0. \tag{1.6}$$
- *d) A két vektor végpontjának távolságán, amit egyszerűen a két vektor távolságának nevezünk, a különbségük abszolút értékét értjük:*
$$d(\mathbf{u},\mathbf{v}) := |\mathbf{u} - \mathbf{v}|. \tag{1.7}$$

▶ A fenti definíciók koordinátás alakja
$$\begin{aligned}
|\mathbf{u}| &= \sqrt{u_1^2 + u_2^2 + \ldots + u_n^2}, \\
\cos(\mathbf{u},\mathbf{v})_\angle &= \frac{u_1v_1 + u_2v_2 + \ldots + u_nv_n}{\sqrt{u_1^2 + u_2^2 + \ldots + u_n^2}\,\sqrt{v_1^2 + v_2^2 + \ldots + v_n^2}}.
\end{aligned}$$

▶ A vektorok hajlásszögének definíciójáról még igazolnunk kell, hogy értelmes, ugyanis egy szög koszinusza csak a $[-1, 1]$ intervallumba eshet. Azaz be kell látnunk, hogy az (1.5) képletben $|\mathbf{u} \cdot \mathbf{v}| \leqslant |\mathbf{u}||\mathbf{v}|$. Ez épp a CBS-egyenlőtlenség. Hamarosan igazoljuk!

**1.49. példa (Vektorok szöge és távolsága).** *Az $\mathbf{u} = (2, 3, 4, 14)$ vektornak mennyi az abszolút értéke, mennyi a $\mathbf{v} = (4, 6, -10, 10)$ vektortól való távolsága, és mennyi a $\mathbf{w} = (0, 3, 6, -2)$ vektorral bezárt szögének koszinusza?*

*Megoldás.* Az (1.4), az (1.7) és az (1.5) képleteket használjuk:
$$\begin{aligned}
|\mathbf{u}| &= \sqrt{2^2 + 3^2 + 4^2 + 14^2} = \sqrt{225} = 15, \\
d(\mathbf{u},\mathbf{v}) &= \sqrt{(2-4)^2 + (3-6)^2 + (4-(-10))^2 + (14-10)^2} \\
&= \sqrt{2^2 + 3^2 + 14^2 + 4^2} = 15, \\
\cos(\mathbf{u},\mathbf{w})_\angle &= \frac{2 \cdot 0 + 3 \cdot 3 + 4 \cdot 6 + 14 \cdot (-2)}{\sqrt{2^2 + 3^2 + 4^2 + 14^2}\,\sqrt{0^2 + 3^2 + 6^2 + (-2)^2}} = \frac{1}{21}.
\end{aligned}$$
$\square$

Az egységvektor $\mathbb{R}^n$-ben is a korábbihoz hasonlóan definiálható, és világos, hogy ha $\mathbf{a} \neq \mathbf{0}$, akkor $\mathbf{a}/|\mathbf{a}|$ egységvektor, hisz
$$\left|\frac{\mathbf{a}}{|\mathbf{a}|}\right| = \frac{1}{|\mathbf{a}|}|\mathbf{a}| = 1.$$
Az egységvektorral szorzás szerepe is azonos:

**1.50. állítás (Vektorral párhuzamos és merőleges összetevő).** *Ha $\mathbf{b} \in \mathbb{R}^n$ tetszőleges és $\mathbf{e} \in \mathbb{R}^n$ egy egységvektor, akkor $\mathbf{b}$ a következőképp bontható fel egy $\mathbf{e}$-vel párhuzamos és egy rá merőleges vektor összegére:*
$$\mathbf{b} = (\mathbf{b} \cdot \mathbf{e})\mathbf{e} + (\mathbf{b} - (\mathbf{b} \cdot \mathbf{e})\mathbf{e}).$$

*Bizonyítás.* $(\mathbf{b} \cdot \mathbf{e})\mathbf{e}$ párhuzamos $\mathbf{e}$-vel, így csak azt kell megmutatni, hogy a két vektor merőleges.
$$(\mathbf{b} \cdot \mathbf{e})\mathbf{e} \cdot (\mathbf{b} - (\mathbf{b} \cdot \mathbf{e})\mathbf{e}) = (\mathbf{b} \cdot \mathbf{e})(\mathbf{e} \cdot \mathbf{b}) - (\mathbf{b} \cdot \mathbf{e})^2(\mathbf{e} \cdot \mathbf{e}) = 0.$$
$\square$

Ennek alapján változatlanul mondható, hogy $\operatorname{proj}_{\mathbf{e}} \mathbf{b} = (\mathbf{b} \cdot \mathbf{e})\mathbf{e}$ a $\mathbf{b}$ vektor $\mathbf{e}$ egyenesére eső merőleges vetülete, és így tetszőleges $\mathbf{a} \neq \mathbf{0}$ vektor esetén $\operatorname{proj}_{\mathbf{a}} \mathbf{b} = \frac{\mathbf{a} \cdot \mathbf{b}}{\mathbf{a} \cdot \mathbf{a}}\mathbf{a}$ (ld. 1.23. tétel).

**1.51. tétel (Cauchy–Bunyakovszkij–Schwarz-egyenlőtlenség).** *Tetszőleges $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$ vektorokra*
$$|\mathbf{u} \cdot \mathbf{v}| \leqslant |\mathbf{u}||\mathbf{v}|. \tag{1.8}$$
*Egyenlőség pontosan akkor áll fenn, ha $\mathbf{u}$ és $\mathbf{v}$ lineárisan összefüggők, azaz ha egyik vektor a másik skalárszorosa.*

*Bizonyítás.* Tegyük fel először, hogy $\mathbf{v} = \mathbf{0}$. Ekkor a tétel állításának mindkét része nyilván igaz, hisz egyenlőség áll fenn, és a két vektor lineárisan összefüggő. Ha $\mathbf{v} \neq \mathbf{0}$, akkor legyen $\mathbf{e} = \mathbf{v}/|\mathbf{v}|$ a $\mathbf{v}$ irányú egységvektor. Az $\mathbf{u}$ vektor $\mathbf{e}$ egyenesére merőleges összetevőjének hossza, illetve annak négyzete nyilván nem negatív, azaz
$$\begin{aligned}
0 &\leqslant |\mathbf{u} - (\mathbf{u} \cdot \mathbf{e})\mathbf{e}|^2 && (|\mathbf{a}|^2 = \mathbf{a} \cdot \mathbf{a}\text{ alkalmazása}) \\
&= (\mathbf{u} - (\mathbf{u} \cdot \mathbf{e})\mathbf{e}) \cdot (\mathbf{u} - (\mathbf{u} \cdot \mathbf{e})\mathbf{e}) && (\text{disztributivitás}) \\
&= |\mathbf{u}|^2 - 2|\mathbf{u} \cdot \mathbf{e}|^2 + |\mathbf{u} \cdot \mathbf{e}|^2 && (\mathbf{a} \cdot \mathbf{a} = |\mathbf{a}|^2) \\
&= |\mathbf{u}|^2 - |\mathbf{u} \cdot \mathbf{e}|^2 \\
&= |\mathbf{u}|^2 - \frac{|\mathbf{u} \cdot \mathbf{v}|^2}{|\mathbf{v}|^2} && (\mathbf{e} = \mathbf{v}/|\mathbf{v}|\text{ visszahelyettesítése}).
\end{aligned}$$

Innen átrendezéssel azonnal megkapjuk a bizonyítandó állítást. Másrészt az is világos, hogy $0 = |\mathbf{u} - (\mathbf{u} \cdot \mathbf{e})\mathbf{e}|$ csak akkor állhat fönn, ha $\mathbf{u} = (\mathbf{u} \cdot \mathbf{e})\mathbf{e}$, azaz ha $\mathbf{u}$ és $\mathbf{e}$ párhuzamosak, azaz ha $\mathbf{u}$ a $\mathbf{v}$ skalárszorosa, vagyis ha a két vektor lineárisan összefüggő. $\square$

**1.52. tétel (Háromszög-egyenlőtlenség $\mathbb{R}^n$-ben).** *Tetszőleges $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$ vektorokra*
$$|\mathbf{u} + \mathbf{v}| \leqslant |\mathbf{u}| + |\mathbf{v}|.$$

A bizonyítás megegyezik a 3-dimenziós változatra, azaz az 1.21. tételre adott bizonyítással.

A vektor abszolút értékét a skaláris szorzat segítségével definiáltuk, de fordítva, a skaláris szorzat is kifejezhető a vektor abszolút értékével. E formulákat *polarizációs formuláknak* nevezzük.

**1.53. tétel (Polarizációs formulák $\mathbb{R}^n$-ben).** *Tetszőleges $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$ vektorokra*
$$\mathbf{u} \cdot \mathbf{v} = \frac{1}{4}\left(|\mathbf{u} + \mathbf{v}|^2 - |\mathbf{u} - \mathbf{v}|^2\right) \tag{1.9}$$
$$\mathbf{u} \cdot \mathbf{v} = \frac{1}{2}\left(|\mathbf{u} + \mathbf{v}|^2 - |\mathbf{u}|^2 - |\mathbf{v}|^2\right) \tag{1.10}$$

*Bizonyítás.* A bizonyításban az abszolút érték (1.4)-beli definícióját használjuk:
$$\begin{aligned}
\frac{1}{4}\left(|\mathbf{u} + \mathbf{v}|^2 - |\mathbf{u} - \mathbf{v}|^2\right) &= \frac{1}{4}\left((\mathbf{u} + \mathbf{v}) \cdot (\mathbf{u} + \mathbf{v}) - (\mathbf{u} - \mathbf{v}) \cdot (\mathbf{u} - \mathbf{v})\right) \\
&= \frac{1}{4}(\mathbf{u} \cdot \mathbf{u} + \mathbf{u} \cdot \mathbf{v} + \mathbf{v} \cdot \mathbf{u} + \mathbf{v} \cdot \mathbf{v} - \mathbf{u} \cdot \mathbf{u} + \mathbf{u} \cdot \mathbf{v} + \mathbf{v} \cdot \mathbf{u} - \mathbf{v} \cdot \mathbf{v}) \\
&= \frac{1}{4}(4\mathbf{u} \cdot \mathbf{v}) = \mathbf{u} \cdot \mathbf{v}.
\end{aligned}$$
A másik formula hasonlóan bizonyítható. $\square$

Végül egy fontos összefüggés az ortogonális vektorrendszerekről:

**1.54. állítás (Ortogonális vektorrendszer lineáris függetlensége).** *Tegyük fel, hogy a zérusvektortól különböző $\mathbb{R}^n$-beli $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k$ vektorok páronként ortogonálisak, azaz bármely $i \neq j$ esetén $\mathbf{v}_i \cdot \mathbf{v}_j = 0$. Ekkor e vektorok lineárisan függetlenek.*

*Bizonyítás.* Tegyük fel, hogy valamely $c_1, c_2, \ldots, c_k$ konstansokra
$$c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \cdots + c_k\mathbf{v}_k = \mathbf{0}.$$
Szorozzuk be az egyenlőség mindkét oldalát skalárisan a $\mathbf{v}_i$ vektorral. Mivel $i \neq j$ esetén $\mathbf{v}_i \cdot \mathbf{v}_j = 0$, ezért azt kapjuk, hogy
$$c_i\mathbf{v}_i \cdot \mathbf{v}_i = 0,$$
amiből $\mathbf{v}_i \cdot \mathbf{v}_i \neq 0$ miatt következik, hogy $c_i = 0$. Mivel ez minden $i = 1, 2, \ldots, k$ indexre igaz, ezért a vektorok valóban lineárisan függetlenek. $\square$

## Feladatok

### Ellenőrző kérdések

**1.55.● Koordinátás alak a 3-dimenziós térben: igaz – hamis.** Melyek igazak, melyek hamisak az alábbi állítások közül? Válaszunkat indokoljuk.
- a) A tér vektorainak koordinátázásához elég egy bázis megadása.
- b) A tér pontjainak koordinátázásához elég egy bázis megadása.
- c) Két koordinátás alakjával megadott vektor összegét a bázistól függetlenül ugyanazzal a képlettel számoljuk.
- d) Két koordinátás alakjával megadott vektor skaláris szorzatát a bázistól függetlenül ugyanazzal a képlettel számoljuk.

**1.56.●** Legyenek $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$.
- a) Mit állíthatunk a vektorokról, ha $|\mathbf{u}| = 3$, $|\mathbf{v}| = 2$ és $\mathbf{u} \cdot \mathbf{v} = 7$?
- b) Mennyi $\mathbf{u} \cdot \mathbf{v}$, ha $|\mathbf{u}| = 5$, $|\mathbf{v}| = 3$ és $|\mathbf{u} + \mathbf{v}| = 4$?
- c) Mennyi $\mathbf{u} \cdot \mathbf{v}$, ha $|\mathbf{u}| = 2$, $|\mathbf{v}| = 3$ és $|\mathbf{u} - \mathbf{v}| = 6$?
- d) Mennyi $\mathbf{u} \cdot \mathbf{v}$, ha $|\mathbf{u}| = 3$, $|\mathbf{v}| = 5$ és $|\mathbf{u} - \mathbf{v}| = 5$?
- e) Mennyi $d(\mathbf{u}, \mathbf{v})$ értéke, ha $|\mathbf{u}| = 8$, $|\mathbf{v}| = 15$, és $\mathbf{u} \cdot \mathbf{v} = 0$?

### Műveletek $\mathbb{R}^n$-ben

**1.57.** Számítsuk ki az alábbi vektorok skaláris és vektori szorzatát!
- a) $\mathbf{a} = (1, 2, -1)$, $\mathbf{b} = (2, 1, 1)$
- b) $\mathbf{a} = (1, 0, 1)$, $\mathbf{b} = (0, 2, 1)$
- c) $\mathbf{u} = (1, 2, 3)$, $\mathbf{v} = (3, 2, 1)$

**1.58.●** Határozzuk meg az alábbi vektorok összegét, skalárszorzatát, és hajlásszögét!
- a) $\mathbf{u} = (1, -3)$, $\mathbf{v} = (-6, -2)$
- b) $\mathbf{a} = (1, 2, -1)$, $\mathbf{b} = (2, 1, 1)$
- c) $\mathbf{u} = (1, 1, 2, 2)$, $\mathbf{v} = (0, 1, 2, 0)$
- d) $\mathbf{x} = (1, 1, 2, 2)$, $\mathbf{y} = (0, -1, -2, 0)$
- e) $\mathbf{u} = (1, 0, 1, 0, \ldots)$, $\mathbf{v} = (-1, -1, -1, \ldots) \in \mathbb{R}^n$, $n$ páros

**1.59.** Határozzuk meg az alábbi vektorok hajlásszögének numerikus közelítő értékét fokban!
- a) $\mathbf{a} = (1, 2, 3, 4, 5)$, $\mathbf{b} = (-1, -1, -1, -1, -1)$
- b) $\mathbf{x} = (1, 2, 3, 2.592116)$, $\mathbf{y} = (2, 2, -2, -2.602112)$

**1.60.** Jellemezzük az $ABC$ háromszöget szögei szerint (pl. derékszögű, tompaszögű, …)!
- a) $A(1, 1, 1)$, $B(2, 2, 2)$, $C(2, 0, 2)$
- b) $A(1, 1, 1)$, $B(2, 2, 2)$, $C(2, 0, 2)$
- c) $A(2, 0, 1, 1)$, $B(2, 2, 1, 1)$, $C(3, 3, 2, 2)$

**1.61.** Határozzuk meg az $n$-dimenziós kocka testátlójának és egy oldalélének szögét! Mekkora ez a szög $n = 2$ és $n = 4$ esetén?

**1.62.** Bontsuk fel a $\mathbf{b}$ vektort $\mathbf{a}$-val párhuzamos és rá merőleges összetevőkre. Határozzuk meg a $\mathbf{b}$ vektor $\mathbf{a}$ egyenesére eső merőleges vetületének hosszát!
- a) $\mathbf{a} = (1, 2, -2)$, $\mathbf{b} = (4, 6, -1)$,
- b) $\mathbf{a} = (2, 3, 6)$, $\mathbf{b} = (5, -3, 8)$,
- c) $\mathbf{a} = (1, 1, 1, 1)$, $\mathbf{b} = (1, 4, 0, 3)$,
- d) $\mathbf{a} = (1, 2, 2, 4)$, $\mathbf{b} = (4, 3, 6, 7)$.

### Bizonyítások

**1.63.** Bizonyítsuk be a skaláris szorzás 1.47. tételbeli tulajdonságait!

**1.64. Skaláris szorzás további tulajdonságai.** Igazoljuk, hogy tetszőleges $\mathbf{u}, \mathbf{v}, \mathbf{w} \in \mathbb{R}^n$ vektorokra és $c \in \mathbb{R}$ számra
- a) $c(\mathbf{u} \cdot \mathbf{v}) = \mathbf{u} \cdot (c\mathbf{v})$,
- b) $\mathbf{u} \cdot (\mathbf{v} - \mathbf{w}) = \mathbf{u} \cdot \mathbf{v} - \mathbf{u} \cdot \mathbf{w}$,
- c) $(\mathbf{u} \pm \mathbf{v}) \cdot (\mathbf{u} \pm \mathbf{v}) = \mathbf{u} \cdot \mathbf{u} \pm 2\mathbf{u} \cdot \mathbf{v} + \mathbf{v} \cdot \mathbf{v}$,
- d) $(\mathbf{u} + \mathbf{v}) \cdot (\mathbf{u} - \mathbf{v}) = \mathbf{u} \cdot \mathbf{u} - \mathbf{v} \cdot \mathbf{v}$.

**1.65. Vektor abszolút értéke (normája).** Mutassuk meg, hogy tetszőleges $\mathbf{u}, \mathbf{v}, \mathbf{w} \in \mathbb{R}^n$ vektorokra és $c \in \mathbb{R}$ számra
- a) $|\mathbf{u}| = 0 \iff \mathbf{u} = \mathbf{0}$,
- b) $|c\mathbf{u}| = |c||\mathbf{u}|$,
- c) $\big||\mathbf{u}| - |\mathbf{v}|\big| \leqslant |\mathbf{u} - \mathbf{v}|$.

**1.66. Háromszög-egyenlőtlenség általánosítása.** Igazoljuk, hogy tetszőleges $k > 2$ egészre és tetszőleges $\mathbf{u}_1, \mathbf{u}_2, \ldots, \mathbf{u}_k \in \mathbb{R}^n$ vektorokra
$$|\mathbf{u}_1 + \mathbf{u}_2 + \ldots + \mathbf{u}_k| \leqslant |\mathbf{u}_1| + |\mathbf{u}_2| + \ldots + |\mathbf{u}_k|.$$

**1.67. Pithagorász-tétel.** Az $\mathbf{a}, \mathbf{b} \in \mathbb{R}^n$ vektorokra pontosan akkor teljesül az
$$|\mathbf{a} + \mathbf{b}|^2 = |\mathbf{a}|^2 + |\mathbf{b}|^2$$
összefüggés, ha $\mathbf{a}$ és $\mathbf{b}$ merőlegesek egymásra.

**1.68. Paralelogramma-tétel.** Igazoljuk, hogy bármely paralelogramma oldalainak négyzetösszege megegyezik átlóinak négyzetösszegével. Az állítás vektorokat használó ekvivalens alakja: igazoljuk, hogy tetszőleges $\mathbf{a}, \mathbf{b} \in \mathbb{R}^n$ vektorokra
$$|\mathbf{a} + \mathbf{b}|^2 + |\mathbf{a} - \mathbf{b}|^2 = 2(|\mathbf{a}|^2 + |\mathbf{b}|^2).$$

**1.69. Távolságokra vonatkozó háromszög-egyenlőtlenség.** Igazoljuk, hogy tetszőleges $\mathbf{a}, \mathbf{b}, \mathbf{c} \in \mathbb{R}^n$ vektorokra
$$d(\mathbf{a}, \mathbf{b}) + d(\mathbf{b}, \mathbf{c}) \geqslant d(\mathbf{a}, \mathbf{c}).$$

**1.70.●** Igazoljuk, hogy
- a) tetszőleges $u, v, x, y \in \mathbb{R}$ számokra
$$(ux + vy)^2 \leqslant (u^2 + v^2)(x^2 + y^2).$$
- b) tetszőleges $x_1, x_2, \ldots, x_n, y_1, y_2, \ldots, y_n \in \mathbb{R}$ számokra
$$\left(\sum_{i=1}^n x_iy_i\right)^2 \leqslant \left(\sum_{i=1}^n x_i^2\right)\left(\sum_{i=1}^n y_i^2\right).$$

### Projekt: ekvivalencia reláció

Egy $X$ halmazon értelmezett *(bináris) reláción* az $X$ elempárjainak egy $R$ halmazát értjük. Ha egy $(a, b)$ pár benne van ebben a halmazban, azt mondjuk, hogy $a$ az $R$ relációban van $b$-vel, és úgy jelöljük, hogy $a\,R\,b$. Például, ha $X$ az összes valaha élt ember halmaza, akkor az összes olyan $(a, b)$ emberpár halmaza, ahol $a$ anyja $b$-nek, egy reláció (anya-gyermek reláció). Ha $X$ a valósok halmaza, és $R$ azokból az $(a, b)$ párokból áll, melyekre $a$ kisebb vagy egyenlő mint $b$, akkor $R$ egy reláció, melyet a valósok rendezési relációjának nevezünk. E reláció szokásos jele $\leqslant$, így ha $(a, b) \in R$, akkor az $a\,R\,b$ helyett az $a \leqslant b$ jelölést használjuk.

Egy halmaz diszjunkt részhalmazok uniójára való fölbontását a halmaz elemei *osztályozásának* vagy *particionálásának* nevezzük. Egy ilyen osztályozáshoz természetes módon hozzárendelhető egy reláció, melyet a halmazon értelmezett *ekvivalenciarelációnak* nevezünk. E szerint két elem pontosan akkor van relációban (pontosan akkor ekvivalensek), ha azonos osztályba tartoznak. Kérdés, egy relációról hogyan állapítható meg, hogy ekvivalenciareláció-e?

**1.55. tétel (Ekvivalenciareláció).** *Legyen $R$ egy tetszőleges reláció az $X$ halmazon. $R$ pontosan akkor ekvivalenciareláció, ha tetszőleges $a, b, c \in X$ elemre fennáll az alábbi három tulajdonság:*
- *a) $R$ reflexív, azaz $a\,R\,a$, vagyis minden elem relációban van önmagával,*
- *b) $R$ szimmetrikus, azaz ha $a\,R\,b$, akkor $b\,R\,a$,*
- *c) $R$ tranzitív, azaz ha $a\,R\,b$ és $b\,R\,c$, akkor $a\,R\,c$.*

**1.71.** Legyen $R$ a fenti tétel szerinti reláció, és jelölje $R_a$ az $a$-val relációban lévő elemek halmazát. Mutassuk meg, hogy bármely két $a, b \in X$ elemre $R_a$ és $R_b$ vagy azonos, vagy diszjunkt. Ezzel bizonyítsuk az előző tételt!

**1.72. Szabad vektor fogalma.** Mutassuk meg, hogy a 3-dimenziós tér szabad vektorai definiálhatók egy – az irányított szakaszok halmazán értelmezett – ekvivalenciareláció ekvivalenciaosztályaival. Mi ez a reláció?

**1.73. Vektor iránya.** Milyen halmazon értelmezett ekvivalenciareláció segítségével definiálható a vektor irányának és állásának fogalma?

## Megoldások

**1.1.** a) Igaz. b) Hamis, például ha $O = A$, akkor $\overrightarrow{OA} + \overrightarrow{OB} = \overrightarrow{AB}$, míg ha $O = B$, akkor $\overrightarrow{OA} + \overrightarrow{OB} = \overrightarrow{BA}$. c) Igaz, az eredmény $O$ választásától függetlenül $\overrightarrow{BA}$. d) Igaz. e) Hamis, lehetnek ellenkező irányúak is. f) Igaz.

**1.2.** a) Hamis. Lehet, hogy a három közül két vektor egy egyenesbe esik, és a harmadik független tőlük: ez a harmadik nem állítható elő a másik kettő lineáris kombinációjaként. b) Igaz, például $\mathbf{i}$, $\mathbf{j}$ és $\mathbf{i} + \mathbf{j}$ ilyenek. De bármely három egy síkba eső nemzérus-vektor ilyen, ha közülük bármely kettő lineárisan független. c) Igaz, például ha $\mathbf{b} = \mathbf{c}$ és $\mathbf{a}$ független $\mathbf{b}$-től. d) Igaz. Ha a térben három vektor lineárisan független, akkor a tér minden vektora kifejezhető lineáris kombinációjukként, ezért a negyedik vektor már nem lehet független. e) Igen, ilyen pl. két független vektor mellé vett három zérusvektor.

**1.3.** Az első esetben: a) egy egyenesbe esnek, mert az együtthatók összege 1, b) $P$ az $A$ ponthoz esik közelebb, mert $\overrightarrow{OA}$ együtthatója nagyobb, és c) $P$ a szakaszon kívül van, mert nem pozitív mindkét együttható. A második esetben: a) $A$, $B$ és $P$ egy egyenesbe esnek, mert az együtthatók összege 1, b) $P$ az $A$ ponthoz esik közelebb, mert $\overrightarrow{OA}$ együtthatója nagyobb, és c) $P$ a szakaszra esik, mert mindkét együttható pozitív.

**1.4.** a) igen, b) nem.

**1.5.** Igen.

**1.6.** „Ha az irányított szakasz a hal, akkor a vektor a halraj."

**1.13.** $\overrightarrow{P_1P_2} + \overrightarrow{P_2P_3} + \overrightarrow{P_3P_4} + \ldots + \overrightarrow{P_{n-1}P_n} = \overrightarrow{P_1P_n}$, illetve $\overrightarrow{P_1P_2} + \overrightarrow{P_2P_3} + \overrightarrow{P_3P_4} + \ldots + \overrightarrow{P_{n-1}P_n} + \overrightarrow{P_nP_1} = \mathbf{0}$.

**1.16.** A $C$-ből induló súlyvonal $\frac{1}{2}(\mathbf{a} + \mathbf{b})$, az $A$-ból induló súlyvonal $\frac{1}{2}\mathbf{b} - \mathbf{a}$, a $B$-ből induló $\frac{1}{2}\mathbf{a} - \mathbf{b}$. E három vektor összege $\mathbf{0}$, így lehetnek egy háromszög oldalvektorai.

**1.17.** Egyik lehetőség a megoldásra, hogy megmutatjuk, az $\overrightarrow{OP_1}, \overrightarrow{OP_2}, \ldots, \overrightarrow{OP_n}$ vektorokból egy szabályos $n$-szög szerkeszthető, így összegük $\mathbf{0}$. Egy elegánsabb és egyszerűbb bizonyítást kapunk, ha meggondoljuk, mi történik az összeggel, ha a vektorokat $2\pi/n$ szöggel elforgatjuk. Mivel az elforgatás az $\overrightarrow{OP_k}$ vektorokat önmagukba forgatja, az összeg nem változik, ugyanakkor elfordul. E feltételt csak a nullvektor elégíti ki.

**1.18.** Jelölje az $ABCD$ négyszög $AB$ oldalának felezőpontját $B_1$, $BC$ oldaláét $B_2$, $CD$ oldaláét $D_2$, $DA$ oldaláét $D_1$. Így
$$\overrightarrow{AB_1} = \tfrac{1}{2}(\overrightarrow{AB}), \qquad \overrightarrow{AD_1} = \tfrac{1}{2}(\overrightarrow{AD}),$$
$$\overrightarrow{AB_2} = \tfrac{1}{2}(\overrightarrow{AB} + \overrightarrow{AC}), \qquad \overrightarrow{AD_2} = \tfrac{1}{2}(\overrightarrow{AD} + \overrightarrow{AC}).$$
Innen
$$\overrightarrow{B_1B_2} = \overrightarrow{AB_2} - \overrightarrow{AB_1} = \tfrac{1}{2}\overrightarrow{AC}, \qquad \overrightarrow{D_1D_2} = \overrightarrow{AD_2} - \overrightarrow{AD_1} = \tfrac{1}{2}\overrightarrow{AC},$$
tehát $\overrightarrow{B_1B_2} = \overrightarrow{D_1D_2}$. Ez épp azt jelenti, hogy a $B_1B_2$ és $D_1D_2$ szakaszok párhuzamosak és egyenlő hosszúak.

**1.19.** A felezőpontokra $\overrightarrow{OF_k} = \frac{1}{2}(\overrightarrow{OP_k} + \overrightarrow{OP_{k+1}})$, ha $k = 1, 2, \ldots, n-1$, és $\overrightarrow{OF_n} = \frac{1}{2}(\overrightarrow{OP_n} + \overrightarrow{OP_1})$. Ezeket az egyenleteket váltakozva $+1$-gyel és $-1$-gyel megszorozva és összeadva $n$ páratlan volta miatt kapjuk, hogy $\overrightarrow{OP_1} = \overrightarrow{OF_1} - \overrightarrow{OF_2} + \ldots + \overrightarrow{OF_n}$.

**1.20.** Ha $\mathbf{v}$ és $\mathbf{w}$ lineárisan összefüggők, akkor az 1.7. állítás szerint valamely $k$ számra $\mathbf{v} = k\mathbf{w}$ (itt kihasználtuk, hogy a feltételek szerint $\mathbf{w}$ nem lehet $\mathbf{0}$). Eszerint $c_1\mathbf{a} + c_2\mathbf{b} + c_3\mathbf{c} = kd_1\mathbf{a} + kd_2\mathbf{b} + kd_3\mathbf{c}$. Így az 1.12. tétel alapján kapjuk, hogy $c_1 = kd_1$, $c_2 = kd_2$, $c_3 = kd_3$, azaz $\frac{c_1}{d_1} = \frac{c_2}{d_2} = \frac{c_3}{d_3}$. Fordítva, ha $\frac{c_1}{d_1} = \frac{c_2}{d_2} = \frac{c_3}{d_3}\ (= k)$, akkor a $c_1 = kd_1$, $c_2 = kd_2$, $c_3 = kd_3$ behelyettesítésével $\mathbf{v} = c_1\mathbf{a} + c_2\mathbf{b} + c_3\mathbf{c} = k(d_1\mathbf{a} + d_2\mathbf{b} + d_3\mathbf{c}) = k\mathbf{w}$. Tehát $\mathbf{v}$ és $\mathbf{w}$ lineárisan összefüggők (kollineárisak).

**1.21.** 1. $c = 4$, 2. $c$ tetszőleges, 3. nincs ilyen $c$, 4. $c = \frac{2}{3}$, $d = 2$, 5. bármely $c = d$ megfelel, 6. $c$ tetszőleges, $d = 2$.

**1.22.** Az $\mathbf{r}$, $\mathbf{s}$, $\mathbf{t}$ vektorok lineárisan a) összefüggők (a $\mathbf{0}$ köztük van), b) függetlenek, c) összefüggők ($\mathbf{t} = \mathbf{r} + \mathbf{s}$), d) összefüggők ($2\mathbf{r} + 3\mathbf{s} - 5\mathbf{t} = \mathbf{0}$).

**1.23.** Megfelelő konstansokkal $\overrightarrow{AM} = c_1\overrightarrow{AE}$, $\overrightarrow{BM} = c_2\overrightarrow{BF}$. Ekkor $\overrightarrow{AM} = \overrightarrow{AB} + \overrightarrow{BM}$, $\overrightarrow{AE} = \mathbf{b} + \frac{1}{2}\mathbf{d}$ és $\overrightarrow{BF} = \mathbf{d} - \frac{1}{2}\mathbf{b}$, ahonnan $\left(c_1 + \frac{c_2}{2} - 1\right)\mathbf{b} + \left(\frac{c_1}{2} - c_2\right)\mathbf{d} = \mathbf{0}$ adódik. Mivel $\mathbf{b}$ és $\mathbf{d}$ lineárisan függetlenek, ezért $c_1 + \frac{c_2}{2} - 1 = 0$ és $\frac{c_1}{2} - c_2 = 0$, ahonnan $c_1 = \frac{4}{5}$, $c_2 = \frac{2}{5}$. Visszahelyettesítve $\overrightarrow{AM} = \frac{4}{5}\mathbf{b} + \frac{2}{5}\mathbf{d}$.

**1.24.** Ha $|\overrightarrow{AP}| : |\overrightarrow{PB}| = m : n$, akkor $|\overrightarrow{AB}| : |\overrightarrow{PB}| = (m + n) : n$, amiből $\overrightarrow{PB} = \frac{n}{m+n}\overrightarrow{BA}$. De $\overrightarrow{OP} = \overrightarrow{OB} + \frac{n}{m+n}\overrightarrow{BA}$ és $\overrightarrow{BA} = \overrightarrow{OA} - \overrightarrow{OB}$, így $\overrightarrow{OP} = \overrightarrow{OB} + \frac{n}{m+n}(\overrightarrow{OA} - \overrightarrow{OB})$, amiből azonnal következik a bizonyítandó formula. A felezőpontot az $m = n = 1$ esetben kapjuk, és ekkor valóban $\overrightarrow{OP} = \frac{1}{2}\overrightarrow{OA} + \frac{1}{2}\overrightarrow{OB}$.

**1.25.** Az 1.16. feladat megoldását és jelöléseit használva ($\mathbf{a} = \overrightarrow{CA}$, $\mathbf{b} = \overrightarrow{CB}$) a $C$ pontból induló súlyvonal $C$-től távolabbi harmadolópontjába mutató vektor $\frac{2}{3} \cdot \frac{1}{2}(\mathbf{a} + \mathbf{b}) = \frac{1}{3}(\mathbf{a} + \mathbf{b})$. A $C$-ből induló és az $A$ ponthoz tartozó súlyvonal harmadolópontjába mutató vektor az 1.24. feladat szerint $\frac{1}{3}\mathbf{a} + \frac{2}{3}\left(\frac{1}{2}\mathbf{b}\right) = \frac{1}{3}(\mathbf{a} + \mathbf{b})$. Hasonló eredményt kapunk a $B$-ből induló súlyvonalra is. Ez bizonyítja a feladat első állítását.

Legyen $O$ egy tetszőleges pont, és $S$ az $ABC$ háromszög súlypontja. Az előzőek szerint $\overrightarrow{OS} = \overrightarrow{OC} + \frac{1}{3}(\overrightarrow{CA} + \overrightarrow{CB})$. Mivel $\overrightarrow{CA} = \overrightarrow{OA} - \overrightarrow{OC}$, $\overrightarrow{CB} = \overrightarrow{OB} - \overrightarrow{OC}$, ezért $\overrightarrow{OS} = \frac{1}{3}(\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC})$.

**1.26.** Jelölje az $ABCD$ tetraéder $ABC$ lapjának súlypontját $S_D$, és legyen $O$ a tér tetszőleges pontja. Az előző feladat szerint $\overrightarrow{OS_D} = \frac{1}{3}(\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC})$. Jelölje $S$ a $DS_D$ szakasz $S_D$ ponthoz közelebbi negyedelő pontját. Ekkor az 1.24. feladatot az $m = 3$, $n = 1$ értékekkel alkalmazva kapjuk, hogy $\overrightarrow{OS} = \frac{1}{4}(\overrightarrow{OD} + 3\overrightarrow{OS_D})$. Innen $\overrightarrow{OS} = \frac{1}{4}(\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC} + \overrightarrow{OD})$ következik. A képlet szimmetrikus volta bizonyítja, hogy bármely másik oldal súlypontjából indulva ugyanerre az eredményre jutottunk volna, azaz $S$ pont mind a négy súlyvonalon rajta van, és negyedeli azokat.

**1.28.** Ha $D$ az $AB$ szakaszt $x : y$ arányban osztja, és $m$ a magasság hossza, akkor $\frac{y}{m} = \frac{m}{x} = \frac{a}{b}$. Innen $\frac{x}{y} = \frac{b^2}{a^2}$. Ebből az 1.24. alapján
$$\overrightarrow{CD} = \frac{a^2}{a^2 + b^2}\overrightarrow{CA} + \frac{b^2}{a^2 + b^2}\overrightarrow{CB}.$$

**1.29.** a) igaz, b) hamis, az egységvektor egyenesére eső merőleges vetületének előjeles hosszával egyenlő, c) igaz, d) hamis (asszociativitásról nem lehet szó, mert a két szorzás művelet egyike skaláris szorzás, a másika skalárral való szorzás az $\mathbf{a}(\mathbf{b} \cdot \mathbf{c})$ szorzatban), e) igaz, f) igaz, g) hamis, lásd még az 1.38. feladatot.

**1.30.** a) hamis, nem kommutatív és nem asszociatív, b) hamis, hisz $(\mathbf{a} - \mathbf{b}) \times \mathbf{c} = \mathbf{0}$ akkor is fönnáll, ha $\mathbf{a} - \mathbf{b} \parallel \mathbf{c}$, nem csak akkor, ha $\mathbf{a} - \mathbf{b} = \mathbf{0}$. c) igaz, d) igaz, e) hamis, f) igaz, g) igaz.

**1.31.** $|\mathbf{a}||\mathbf{b}|\cos\gamma = 1 \cdot 2 \cdot \frac{1}{2} = 1$.

**1.32.** $|\mathbf{a}||\mathbf{b}|\cos\gamma = \sqrt{2} \cdot 2 \cdot \left(-\frac{1}{\sqrt{2}}\right) = -2$.

**1.33.** $1 \cdot 2 \cdot (-1) = -2$.

**1.34.** $0$, hisz merőlegesek ($|\mathbf{a}||\mathbf{b}|\cos\gamma = \sqrt{2} \cdot 2 \cdot 0 = 0$).

**1.35.** Legyenek $\mathbf{a}$ és $\mathbf{c}$ független vektorok, $\mathbf{b}$ pedig tetszőleges. Ekkor az $(\mathbf{a} \cdot \mathbf{b})\mathbf{c}$ szorzat párhuzamos a $\mathbf{c}$ vektorral, míg az $\mathbf{a}(\mathbf{b} \cdot \mathbf{c})$ szorzat az $\mathbf{a}$ vektorral, tehát $(\mathbf{a} \cdot \mathbf{b})\mathbf{c} \neq \mathbf{a}(\mathbf{b} \cdot \mathbf{c})$.

**1.36.** a) $\mathbf{a} \cdot \mathbf{a} - \mathbf{b} \cdot \mathbf{b} = |\mathbf{a}|^2 - |\mathbf{b}|^2$. b) $\mathbf{a} \cdot \mathbf{a} + 2\mathbf{b} \cdot \mathbf{a} - 2\mathbf{a} \cdot \mathbf{b} = \mathbf{a} \cdot \mathbf{a} = |\mathbf{a}|^2$.

**1.37.** A Pithagorász-tétel következményeként $\mathbf{a}$ és $\mathbf{b}$ merőlegesek.

**1.38.** Ha $\mathbf{a} = \mathbf{0}$ és $c = 0$, akkor az $X$ pontok kiadják a tér összes pontját, ha viszont $c \neq 0$, akkor egyetlen ilyen $X$ pont sincs. Mivel $\mathbf{e} = \mathbf{a}/|\mathbf{a}|$ egységvektor, ezért
$$\left(c\frac{\mathbf{a}}{|\mathbf{a}|}\right) \cdot \frac{\mathbf{a}}{|\mathbf{a}|} = \left(c\frac{\mathbf{a}}{|\mathbf{a}|^2}\right) \cdot \mathbf{a} = c,$$
ezért ha $Y$ jelöli azt a pontot, melyre
$$\overrightarrow{OY} = c\frac{\mathbf{a}}{|\mathbf{a}|^2},$$
akkor $\overrightarrow{OY} \cdot \mathbf{a} = c$. Az összes olyan $X$ pont, melyre $\overrightarrow{OX} \cdot \mathbf{a} = c$, az $Y$ ponton átmenő és $\mathbf{a}$ vektorra merőleges sík pontjaiból áll. Egyrészt ha $X$ eleget tesz a feltételnek, akkor $\overrightarrow{XY} \cdot \mathbf{a} = (\overrightarrow{OY} - \overrightarrow{OX}) \cdot \mathbf{a} = \overrightarrow{OY} \cdot \mathbf{a} - \overrightarrow{OX} \cdot \mathbf{a} = 0$, tehát $X$ e sík egy pontja. Másrészt, ha $X$ e sík egy pontja, akkor $\overrightarrow{XY} \cdot \mathbf{a} = 0$, így $\overrightarrow{OX} \cdot \mathbf{a} = (\overrightarrow{OX} + \overrightarrow{XY}) \cdot \mathbf{a} = \overrightarrow{OY} \cdot \mathbf{a} = c$, tehát $X$ eleget tesz a feltételnek.

*Ábra: az $\mathbf{a}$ vektorra merőleges sík egy $X$ pontja és az $Y$ talppont.*

**1.39.** Geometriai megoldás: a három egységvektor egy szabályos háromszög három oldalvektora azonos körüljárás szerint irányítva, mivel összegük $\mathbf{0}$. Így hajlásszögük $2\pi/3 = 120°$, tehát a vektorpárok skaláris szorzata $-\frac{1}{2}$, így az összeg $-\frac{3}{2}$.

Algebrai megoldás: $(\mathbf{e}_1 + \mathbf{e}_2 + \mathbf{e}_3) \cdot (\mathbf{e}_1 + \mathbf{e}_2 + \mathbf{e}_3) = 0$, tehát $0 = \mathbf{e}_1 \cdot \mathbf{e}_1 + \mathbf{e}_2 \cdot \mathbf{e}_2 + \mathbf{e}_3 \cdot \mathbf{e}_3 + 2(\mathbf{e}_1 \cdot \mathbf{e}_2 + \mathbf{e}_1 \cdot \mathbf{e}_3 + \mathbf{e}_2 \cdot \mathbf{e}_3)$. Kihasználva, hogy a vektorok egységvektorok, kapjuk, hogy $\mathbf{e}_1 \cdot \mathbf{e}_2 + \mathbf{e}_1 \cdot \mathbf{e}_3 + \mathbf{e}_2 \cdot \mathbf{e}_3 = -\frac{3}{2}$.

**1.40.** Az 1.12. tétel szerint a $\mathbf{v}$ vektor megfelelő konstans együtthatókkal előállítható $\mathbf{v} = c_1\mathbf{a} + c_2\mathbf{b} + c_3\mathbf{c}$ alakban. Az egyenlőség mindkét oldalát (skalárisan) megszorozva $\mathbf{v}$-vel, majd kihasználva a feltételekből következő $\mathbf{a} \cdot \mathbf{v} = \mathbf{b} \cdot \mathbf{v} = \mathbf{c} \cdot \mathbf{v} = 0$ egyenlőségeket, $\mathbf{v}^2 = 0$ adódik, ami csak úgy teljesülhet, hogy $\mathbf{v} = \mathbf{0}$.

**1.41.** Az $\mathbf{a}$ vektor hossza $\sqrt{2^2 + 2^2} = 2\sqrt{2}$, a $\mathbf{b}$ vektor hossza $\sqrt{4^2 + 3^2} = 5$, az $\mathbf{a}$ vektornak a vízszintes rácsvonalakkal bezárt szöge $\pi/4$, a $\mathbf{b}$ vektornál a szög szögfüggvényei $\cos\gamma = \frac{4}{5}$, $\sin\gamma = \frac{3}{5}$. Így
$$\cos\left(\gamma + \frac{\pi}{4}\right) = \cos\gamma\cos\frac{\pi}{4} - \sin\gamma\sin\frac{\pi}{4} = \frac{4}{5}\frac{\sqrt{2}}{2} - \frac{3}{5}\frac{\sqrt{2}}{2} = \frac{1}{5}\frac{\sqrt{2}}{2},$$
tehát a skaláris szorzat $\mathbf{a} \cdot \mathbf{b} = 2\sqrt{2} \cdot 5 \cdot \frac{1}{5}\frac{\sqrt{2}}{2} = 2$.

**1.42.** Mivel $\mathbf{a} \cdot \mathbf{b} = 2$, $|\mathbf{a}| = 2\sqrt{2}$, ezért
$$\operatorname{proj}_{\mathbf{a}} \mathbf{b} = \frac{\mathbf{a} \cdot \mathbf{b}}{\mathbf{a} \cdot \mathbf{a}}\mathbf{a} = \frac{2}{8}\mathbf{a} = \frac{1}{4}\mathbf{a},$$
míg az $\mathbf{a}$-ra merőleges összetevő $\mathbf{b} - \frac{1}{4}\mathbf{a}$. Ezt mutatja az alábbi ábra.

*1.43. ábra. Az 1.42. feladat: a $\mathbf{b}$ vektor felbontása $\mathbf{a}$-val párhuzamos és rá merőleges összetevőkre.*

**1.44.** a) $|\mathbf{a} \times \mathbf{b}| = |\mathbf{a}||\mathbf{b}|\sin\gamma = 1 \cdot 2 \cdot \frac{1}{2} = 1$. b) $\mathbf{0}$, hisz párhuzamosak ($\sin\gamma = 0$, így abszolút értéke 0).

**1.45.** a) $(\mathbf{a} + \mathbf{b}) \times (\mathbf{a} - \mathbf{b}) = \mathbf{a} \times \mathbf{a} - \mathbf{a} \times \mathbf{b} + \mathbf{b} \times \mathbf{a} - \mathbf{b} \times \mathbf{b} = -\mathbf{a} \times \mathbf{b} - \mathbf{a} \times \mathbf{b} = -2\mathbf{a} \times \mathbf{b}$. b) $(\mathbf{i} + \mathbf{j} + \mathbf{k}) \times (\mathbf{i} + \mathbf{j}) = \mathbf{i} \times \mathbf{j} + \mathbf{j} \times \mathbf{i} + \mathbf{k} \times \mathbf{i} + \mathbf{k} \times \mathbf{j} = \mathbf{0} + \mathbf{j} - \mathbf{i} = \mathbf{j} - \mathbf{i}$.

**1.46.** Jelölje $P$ szomszédait $Q$, $R$ és $S$.
a) Ekkor két lapátló-vektor például a $\overrightarrow{PQ} + \overrightarrow{PR}$ és a $\overrightarrow{PR} + \overrightarrow{PS}$ vektorok. Ezek szorzata:
$$\left(\overrightarrow{PQ} + \overrightarrow{PR}\right) \cdot \left(\overrightarrow{PR} + \overrightarrow{PS}\right) = \overrightarrow{PQ} \cdot \overrightarrow{PR} + \overrightarrow{PQ} \cdot \overrightarrow{PS} + \overrightarrow{PR} \cdot \overrightarrow{PR} + \overrightarrow{PR} \cdot \overrightarrow{PS} = \overrightarrow{PR} \cdot \overrightarrow{PR} = 1.$$
Kihasználtuk, hogy merőleges vektorok skaláris szorzata 0.
b) Hasonlóan kapható meg egy lapátló-vektor és a testátló-vektor ($\overrightarrow{PQ} + \overrightarrow{PR} + \overrightarrow{PS}$) szorzata:
$$\left(\overrightarrow{PQ} + \overrightarrow{PR}\right) \cdot \left(\overrightarrow{PQ} + \overrightarrow{PR} + \overrightarrow{PS}\right) = \overrightarrow{PQ} \cdot \overrightarrow{PQ} + \overrightarrow{PR} \cdot \overrightarrow{PR} = 2.$$
c) A $Q$, $R$ és $S$ csúcsok olyan sorrendben legyenek megválasztva, hogy $\overrightarrow{PQ}$, $\overrightarrow{PR}$ és $\overrightarrow{PS}$ ebben a sorrendben jobbrendszert alkosson. Ki fogjuk használni, hogy ekkor $\overrightarrow{PQ} \times \overrightarrow{PR} = \overrightarrow{PS}$. Egy élvektor és egy szomszédos lapátló-vektor vektori szorzata:
$$\overrightarrow{PQ} \times \left(\overrightarrow{PQ} + \overrightarrow{PR}\right) = \overrightarrow{PQ} \times \overrightarrow{PQ} + \overrightarrow{PQ} \times \overrightarrow{PR} = \mathbf{0} + \overrightarrow{PS} = \overrightarrow{PS},$$
vagyis a szorzat a két vektor lapjára merőleges élvektor.
d) Legyen a lapátló a $\overrightarrow{PR}$, a nem szomszédos lapátló-vektor $\overrightarrow{PR} + \overrightarrow{PS}$. Ezek szorzata:
$$\overrightarrow{PQ} \times \left(\overrightarrow{PR} + \overrightarrow{PS}\right) = \overrightarrow{PQ} \times \overrightarrow{PR} + \overrightarrow{PQ} \times \overrightarrow{PS} = \overrightarrow{PS} - \overrightarrow{PR},$$
ami a lapátló-vektor síkjának másik lapátló-vektora.

**1.47.** Ha $\mathbf{u} \perp \mathbf{v}$ és $\mathbf{u} \perp \mathbf{w}$, akkor $\mathbf{u} \cdot \mathbf{v} = 0$ és $\mathbf{u} \cdot \mathbf{w} = 0$, így bármely $c, d \in \mathbb{R}$ számokra $\mathbf{u} \cdot (c\mathbf{v} + d\mathbf{w}) = \mathbf{u} \cdot (c\mathbf{v}) + \mathbf{u} \cdot (d\mathbf{w}) = c\,\mathbf{u} \cdot \mathbf{v} + d\,\mathbf{u} \cdot \mathbf{w} = c \cdot 0 + d \cdot 0 = 0$, tehát $\mathbf{u}$ merőleges a $c\mathbf{v} + d\mathbf{w}$ lineáris kombinációra.

**1.48.** Három különböző dolog (így három vektor is) hatféleképp rakható sorba. Ha az $\mathbf{a}$, $\mathbf{b}$ és $\mathbf{c}$ vektorok jobbrendszert alkotnak, akkor ugyancsak jobbrendszert alkotnak a $\mathbf{b}$, $\mathbf{c}$, $\mathbf{a}$ és a $\mathbf{c}$, $\mathbf{a}$, $\mathbf{b}$ vektorhármasok is. A további három esetben, azaz a $\mathbf{c}$, $\mathbf{b}$, $\mathbf{a}$, valamint a $\mathbf{b}$, $\mathbf{a}$, $\mathbf{c}$ és az $\mathbf{a}$, $\mathbf{c}$, $\mathbf{b}$ hármasok esetén balrendszert kapunk a vegyes szorzatról tanultak szerint.

**1.50.** Egyik lehetőség a megoldásra: $\big||\mathbf{b}|\mathbf{a}\big| = \big||\mathbf{a}|\mathbf{b}\big| = |\mathbf{a}||\mathbf{b}|$, ezért a paralelogramma-módszert egy rombuszra kell alkalmazni. Egy másik lehetőség: az $\mathbf{a}/|\mathbf{a}|$ és $\mathbf{b}/|\mathbf{b}|$ két egységvektor, így összegük szögfelező, mivel a paralelogramma-módszer rombuszt ad. E vektor $|\mathbf{a}||\mathbf{b}|$-szerese ugyanúgy szögfelező, és épp ez a feladatbeli vektor. A második kérdés megválaszolásához használjuk az 1.24. példa eredményét!

**1.51.** Milyen irányokat cserél föl a tükör, és milyeneket nem? Nem cseréli föl a tükör síkjával párhuzamos irányokat: minden, a tükör síkjával párhuzamos vektor tükörképe önmaga. Tehát, ha a tükör előtt állunk, és a tükör is függőleges, akkor a „fölfelé" irány a tükörképen sem változik. Viszont a tükör fölcseréli a tükörre merőleges irányokat.

(folyt. 1.51.) Egy lehetőség a definiálásra: ha értelmezve van egy viszonyítási rendszerben (pl. az emberi testhez képest, vagy a mozgó járműben, …) a *föl* és az *előre*, melyek egymásra merőleges irányok, akkor a *jobb* irány az *előre* $\times$ *föl* vektori szorzattal definiálható. Ennek képe a tükörben viszont $(-előre) \times föl = -jobb$, ami épp a *bal*. (A feladatban föltett kérdés egyébként nem pontos, hisz egy vízszintesen a földre helyezett tükör megfordítja a lentet és föntet.)

**1.52.** Bontsuk fel $\mathbf{a}$-t az $\mathbf{e}$-vel párhuzamos $\mathbf{p}$ és rá merőleges $\mathbf{m}$ összetevőkre. $|\mathbf{e} \times \mathbf{a}| = |\mathbf{a}|\sin(\mathbf{e},\mathbf{a})_\angle$, ami megegyezik $|\mathbf{m}|$-mel. $\mathbf{e} \times \mathbf{a}$ merőleges $\mathbf{e}$ és $\mathbf{a}$ síkjára, ezért $(\mathbf{e} \times \mathbf{a}) \times \mathbf{e}$ az $\mathbf{e}$ és $\mathbf{a}$ síkjában van és $|(\mathbf{e} \times \mathbf{a}) \times \mathbf{e}| = |\mathbf{a}|\sin(\mathbf{e},\mathbf{a})_\angle$, így $(\mathbf{e} \times \mathbf{a}) \times \mathbf{e} = \mathbf{m}$.

**1.53.** Az $\mathbf{a} + \mathbf{b} + \mathbf{c} = \mathbf{0}$ egyenlőséget $\mathbf{a}$-val vektoriálisan szorozva, átrendezve kapjuk, hogy
$$\mathbf{a} \times \mathbf{b} + \mathbf{a} \times \mathbf{c} = \mathbf{0},$$
amiből $\mathbf{a} \times \mathbf{b} = \mathbf{c} \times \mathbf{a}$. $\mathbf{b}$-vel való szorzás után kapjuk az $\mathbf{a} \times \mathbf{b} = \mathbf{b} \times \mathbf{c}$ egyenlőséget. Az állítás megfordítása nem igaz, mivel bármely három kollineáris vektor esetén $\mathbf{a} \times \mathbf{b} = \mathbf{b} \times \mathbf{c} = \mathbf{c} \times \mathbf{a} = \mathbf{0}$ akkor is, ha $\mathbf{a} + \mathbf{b} + \mathbf{c} \neq \mathbf{0}$.

**1.54.** a) $V$, és a körüljárás azonos. b) $4V$, és az $\mathbf{u}$, $\mathbf{v}$, $\mathbf{w}$ körüljárása az $\mathbf{a}$, $\mathbf{b}$, $\mathbf{c}$ körüljárásával ellentétes!

**1.55.** a) igen, b) nem, az origó kijelölése is szükséges, c) igen, d) nem, a szokásos $\mathbf{u} \cdot \mathbf{v} = u_1v_1 + u_2v_2 + u_3v_3$ csak ortonormált bázisban érvényes.

**1.56.** a) ilyen vektorok nincsenek (CBS-egyenlőtlenségnek ellent mond), b) $\mathbf{u} \cdot \mathbf{v} = -9$ (ld. az 1.10 polarizációs formulát), c) ilyen vektorok a háromszög-egyenlőtlenség miatt nem léteznek, d) $\mathbf{u} \cdot \mathbf{v} = -4$ (ld. az 1.9 polarizációs formulát), e) 17 (a 8, 15, 17 pithagoraszi számhármas).

**1.57.** a) $\mathbf{a} \cdot \mathbf{b} = 3$, $\mathbf{a} \times \mathbf{b} = (3, -3, -3)$, b) $\mathbf{a} \cdot \mathbf{b} = 1$, $\mathbf{a} \times \mathbf{b} = (-2, -1, 2)$, c) $\mathbf{u} \cdot \mathbf{v} = 10$, $\mathbf{u} \times \mathbf{v} = (-4, 8, -4)$.

**1.58.** a) $\pi/2$, b) $\pi/3$, c) $\pi/4$, d) $3\pi/4$, e) $\pi/4$.

**1.59.** a) 2.701, $154.76°$, b) 1.91986226152, $110.0°$.

**1.60.** a) egyenlő oldalú, b) tompa szögű ($B$ csúcsnál), c) derékszögű ($C$ csúcsnál).

**1.61.** $\arccos(1/\sqrt{n})$. $n = 2$ esetén $45°$, $n = 4$ esetén $60°$.

**1.62.** Kihasználjuk, hogy $\operatorname{proj}_{\mathbf{a}} \mathbf{b} = \frac{\mathbf{a} \cdot \mathbf{b}}{\mathbf{a} \cdot \mathbf{a}}\mathbf{a}$ a párhuzamos és $\mathbf{b} - \operatorname{proj}_{\mathbf{a}} \mathbf{b}$ az $\mathbf{a}$-ra merőleges összetevő:
- a) $(4, 6, -1) = (2, 4, -4) + (2, 2, 3)$,
- b) $(5, -3, 8) = (2, 3, 6) + (3, -6, 2)$,
- c) $(1, 4, 0, 3) = (2, 2, 2, 2) + (-1, 2, -2, 1)$,
- d) $(4, 3, 6, 7) = (2, 4, 4, 8) + (2, -1, 2, -1)$.

**1.66.** Teljes indukcióval a háromszög-egyenlőtlenségből.

**1.68.** Az $|\mathbf{u}|^2 = \mathbf{u} \cdot \mathbf{u}$ alkalmazásával:
$$\begin{aligned}
|\mathbf{a} + \mathbf{b}|^2 + |\mathbf{a} - \mathbf{b}|^2 &= (\mathbf{a} + \mathbf{b}) \cdot (\mathbf{a} + \mathbf{b}) + (\mathbf{a} - \mathbf{b}) \cdot (\mathbf{a} - \mathbf{b}) \\
&= (\mathbf{a} \cdot \mathbf{a} + 2\mathbf{a} \cdot \mathbf{b} + \mathbf{b} \cdot \mathbf{b}) + (\mathbf{a} \cdot \mathbf{a} - 2\mathbf{a} \cdot \mathbf{b} + \mathbf{b} \cdot \mathbf{b}) \\
&= 2|\mathbf{a}|^2 + 2|\mathbf{b}|^2.
\end{aligned}$$

**1.69.** Használjuk az $|\mathbf{u} + \mathbf{v}| \leqslant |\mathbf{u}| + |\mathbf{v}|$ háromszög-egyenlőtlenséget az $\mathbf{u} = \mathbf{a} - \mathbf{b}$, $\mathbf{v} = \mathbf{b} - \mathbf{c}$ vektorokra.

**1.70.** Mindkét összefüggés a CBS-egyenlőtlenség mindkét oldalának négyzetreemelése után kapott egyenlőtlenséggel ekvivalens. A b) esetén $(\mathbf{x} \cdot \mathbf{y})^2 \leqslant |\mathbf{x}|^2|\mathbf{y}|^2$.

**1.71.** A feladat szerint $c \in R_a$ pontosan akkor teljesül, ha $a\,R\,c$. Tegyük fel, hogy $R_a$ és $R_b$ nem diszjunkt. Ha $c$ egy közös elemük, akkor $c$ az $a$-val és $b$-vel is relációban van, azaz $a\,R\,c$ és $b\,R\,c$, de a szimmetria miatt $c\,R\,b$ is, a tranzitivitás miatt pedig az $a\,R\,c$ és $c\,R\,b$ relációkból következik az $a\,R\,b$. Ekkor pedig a tranzitivitást használva bármely $x$ elemre $b\,R\,x$-ből következik $a\,R\,x$, azaz $x \in R_b$-ből következik $x \in R_a$, azaz $R_b \subseteq R_a$. Mivel az $a$ és $b$ szerepét megfordítva kapjuk $R_a \subseteq R_b$, tehát $R_a = R_b$. Végül be kell még látnunk, hogy e halmazok uniója kiadja az egész $X$ halmazt. Ez igaz, hisz minden $a$ elemre $a\,R\,a$, azaz $a \in R_a$.

**1.72.** Tekintsünk egy $\overrightarrow{AB}$ és egy $\overrightarrow{CD}$ irányított szakaszt! Azt mondjuk, hogy ezek relációban vannak, ha van egy olyan eltolás, mely $A$-t $C$-be, $B$-t $D$-be viszi. E reláció ekvivalenciareláció (ellenőrizzük), így egy osztályozást definiál az irányított szakaszok halmazán. Egy ilyen osztályt nevezünk (szabad) vektornak.

**1.73.** A vektor iránya a félegyenesek, az állása az egyenesek halmazán – az előző feladathoz hasonlóan az eltolással – definiált ekvivalencia reláció egy ekvivalenciaosztálya.

# 2. Lineáris egyenletrendszerek és megoldásuk

E fejezet témái: a lineáris egyenletrendszerek geometriája, megoldásuk technikái és a megoldások halmazának szerkezete.

## Egyenes és sík egyenletei

*A 2- és 3-dimenziós tér lineáris alakzatainak áttekintése segítségünkre lesz a lineáris egyenletrendszerek megértésében.*

### Alakzatok implicit és explicit egyenletrendszerei

**2.1. példa (Az $x + y = 1$ egyenlet).** *Egy tetszőleges síkbeli koordináta-rendszerben az $x + y = 1$ egyenletet kielégítő $(x, y)$ pontok milyen alakzatot adnak? Ábrázoljunk néhány pontot, és fogalmazzunk meg sejtést!*

*Megoldás.* A 2.1 ábrán két különböző koordináta-rendszert ábrázolunk, és azokban a fenti egyenletet kielégítő pontok közül néhányat. Ennek alapján azt sejthetjük, hogy az $x + y = 1$ egyenletet kielégítő pontok egy egyenesen vannak. A sejtést hamarosan bizonyítjuk. $\square$

**2.2. példa (Az $x^2 + y^2 = 1$ egyenlet).** *Egy tetszőleges síkbeli koordináta-rendszerben az $x^2 + y^2 = 1$ egyenletet kielégítő $(x, y)$ pontok milyen alakzatot adnak? Ábrázoljunk néhány pontot, és fogalmazzunk meg sejtést!*

*Megoldás.* Az alábbi ábrán két koordináta-rendszerben ábrázolunk az $x^2 + y^2 = 1$ egyenletet kielégítő néhány ponttal. Később igazolni fogjuk, hogy az egyenletet kielégítő pontok egy ellipszisen vannak. $\square$

Az előző két egyenlet mindegyikéből *kifejezhető* a két koordináta egy paraméter bevezetésével. Az $x + y = 1$, illetve az $x^2 + y^2 = 1$ egyenlet ekvivalens az
$$\begin{cases} x = t \\ y = 1 - t, \end{cases} \quad t \in \mathbb{R}, \qquad \text{illetve az} \qquad \begin{cases} x = \cos t \\ y = \sin t \end{cases} \quad t \in [0, 2\pi)$$

*2.1. ábra. Az $x + y = 1$ egyenletet kielégítő néhány pont két különböző koordináta-rendszerben.*

*2.2. ábra. Az $x^2 + y^2 = 1$ egyenletet kielégítő $(x, y)$ pontok halmaza két koordináta-rendszerben.*

egyenletrendszerrel. Mindkettő átírható vektoralakba is. Használjuk az oszlopvektoros jelölést:
$$\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} t \\ t \end{bmatrix}, \quad t \in \mathbb{R}, \quad \text{illetve} \quad \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} \cos t \\ \sin t \end{bmatrix}, \quad t \in [0, 2\pi) \subseteq \mathbb{R}.$$

**2.3. definíció (Alakzat implicit egyenletrendszere).** *Egy (geometriai) alakzat egy adott koordináta-rendszerre vonatkozó (implicit) egyenletrendszerén olyan, a koordinátákra felírt egyenletrendszert értünk, melynek egyszerre minden egyenletét kielégítik az alakzathoz tartozó pontok koordinátái, de más pontokéhoz tartozók nem. Az egyenletek felírhatók pontokba mutató vektorokra is, ezeket* vektoregyenletnek *nevezzük. Egy alakzat $m$ egyenletből álló egyenletrendszerének, illetve $m$ vektoregyenletből álló egyenletrendszerének általános alakja*
$$\begin{cases} F_1(x_1, x_2, \ldots, x_n) = 0 \\ F_2(x_1, x_2, \ldots, x_n) = 0 \\ \quad\vdots \\ F_m(x_1, x_2, \ldots, x_n) = 0 \end{cases} \text{illetve} \quad \begin{cases} F_1(\mathbf{r}) = 0 \\ F_2(\mathbf{r}) = 0 \\ \quad\vdots \\ F_m(\mathbf{r}) = 0 \end{cases}$$
*ahol $(x_1, x_2, \ldots, x_n) \in \mathbb{R}^n$ a tér egy pontja, és $\mathbf{r}$ az oda mutató vektor.*

> *A latin eredetű* implicit *szó jelentése* nem kifejtett, rejtett, *ami az összeköt, összefügg, összekever, körülcsavar jelentésű* implico *(implicó) szó származéka. E szó a matematikában az implicit alak, implicit függvény, stb. kifejezésekben arra utal, hogy valamely fontosnak tekintett mennyiség, változó, stb. nincs kifejezve a képletből. Ugyanennek a szónak a származéka a magába foglal, maga után von jelentésű* implikál *szó is, mely a matematikai logika „ha…, akkor…" szerkezetű műveletével, az* implikációval *is kapcsolatban van.*

Ha az egyenletrendszer egy egyenletből áll, az alakzat *egyenletéről* beszélünk.

**2.4. definíció (Alakzat explicit egyenletrendszere).** *Egy alakzat egy adott koordináta-rendszerre vonatkozó explicit vagy paraméteres egyenletrendszerén olyan egyenletrendszert értünk, melyben az egyenletek bal oldalán a pontok koordinátáit megadó változók, jobb oldalán adott paraméterek függvényei szerepelnek. Általános alakja*
$$\begin{aligned}
x_1 &= f_1(t_1, t_2, \ldots, t_k) \\
x_2 &= f_2(t_1, t_2, \ldots, t_k) \\
&\;\;\vdots \\
x_n &= f_n(t_1, t_2, \ldots, t_k)
\end{aligned}$$
*ahol $t_1 \in I_1$, $t_2 \in I_2, \ldots, t_n \in I_n$, és $I_1, \ldots, I_n \subseteq \mathbb{R}$. Az ilyen egyenletrendszer egyetlen vektoregyenletté fogható össze:*
$$\mathbf{r} = \mathbf{f}(t_1, t_2, \ldots, t_k),$$
*ahol $\mathbf{f}$ egy $\mathbb{R}^k \to \mathbb{R}^n$ függvény.*

> *A latin eredetű* explicit *szó jelentése* kifejtett, világosan kimondott, *ami a kibont, szétterít, kiszabadít, átvitt értelemben tisztáz, kifejt, megfejt jelentésű* explico *(explicó) szó származéka. E szó a matematikában az explicit alak, explicit függvény, stb. kifejezésekben arra utal, hogy valamely fontosnak tekintett mennyiség, változó, stb. ki van fejezve a többi segítségével.*

A következőkben egyenes és sík egyenleteit és egyenletrendszereit fogjuk áttekinteni. Egyúttal látni fogjuk, hogy (lineáris) egyenletrendszer megoldása az implicit alak explicitté transzformálást jelenti.

### Síkbeli egyenes egyenletei

Tekintsük a sík egy tetszőleges $e$ egyenesét, és jelöljük ki a síkban az $O$ origót. Legyen a nemzérus $\mathbf{v}$ egy tetszőleges, az egyenessel párhuzamos vektor. Az ilyen vektorokat az egyenes *irányvektorának* nevezzük. Mutasson $\mathbf{r}_0$ az egyenes egy tetszőleges pontjába. Világos, hogy az $e$ egyenes bármely pontjába mutató $\mathbf{r}$ vektor előáll $\mathbf{r}_0 + t\mathbf{v}$ alakban, ahol $t$ valós szám. Másrészt ha $Q$ a sík egy tetszőleges, nem az $e$ egyenesre eső pontja, akkor $\overrightarrow{OQ} - \mathbf{r}_0$ nem párhuzamos $\mathbf{v}$-vel, tehát nem is konstansszorosa, azaz $\overrightarrow{OQ} - \mathbf{r}_0 \neq t\mathbf{v}$ semmilyen $t$-re sem, így $\overrightarrow{OQ}$ nem áll elő $\mathbf{r}_0 + t\mathbf{v}$ alakban. Tehát az $e$ tetszőleges pontjába mutató $\mathbf{r}$ vektor felírható $\mathbf{r} = \mathbf{r}_0 + t\mathbf{v}$ alakban, és ez csak $e$ pontjaira igaz (ld. 2.3. ábra). Ez igazolja a következő állítást:

**2.5. állítás (Síkbeli egyenes explicit vektoregyenlete).** *A sík minden egyenesének van*
$$\mathbf{r} = \mathbf{r}_0 + t\mathbf{v}, \quad t \in \mathbb{R} \tag{2.1}$$
*alakú vektoregyenlete, és minden ilyen alakú egyenlet egy egyenes egyenlete, ahol $\mathbf{v} \neq \mathbf{0}$ az egyenes egy irányvektora, és $\mathbf{r}_0$ az egyenes egy tetszőleges, de rögzített pontjába mutató vektor.*

*2.3. ábra. Egyenes explicit vektoregyenlete: $\mathbf{r} = \mathbf{r}_0 + t\mathbf{v}$.*

A síkbeli egyenesre merőleges vektorokat az egyenes *normálvektorainak* nevezzük. Legyen $\mathbf{n} \neq \mathbf{0}$ egy tetszőleges, a $\mathbf{v}$ irányvektorra merőleges vektor, azaz legyen $\mathbf{n}$ az $e$ egy normálvektora. Azt, hogy az $e$ egy tetszőleges pontjába mutató $\mathbf{r}$ vektorra $\mathbf{r} - \mathbf{r}_0$ párhuzamos $\mathbf{v}$-vel, úgy is kifejezhetjük, hogy $\mathbf{r} - \mathbf{r}_0$ merőleges $\mathbf{n}$-re. A merőlegesség kifejezhető a skaláris szorzattal. Így az egyenes egy implicit vektoregyenletéhez jutunk: $\mathbf{r}$ pontosan akkor mutat az $e$ egy pontjába, ha $\mathbf{n} \cdot (\mathbf{r} - \mathbf{r}_0) = 0$ (ld. 2.4. ábra). Ez az egyenlet átrendezés után $\mathbf{n} \cdot \mathbf{r} = \mathbf{n} \cdot \mathbf{r}_0$ alakra, majd a $C = \mathbf{n} \cdot \mathbf{r}_0$ jelöléssel $\mathbf{n} \cdot \mathbf{r} = C$ alakra hozható (ld. még a 2.5. ábrát).

*2.4. ábra. Síkbeli egyenes implicit vektoregyenlete: $\mathbf{n} \cdot (\mathbf{r} - \mathbf{r}_0) = 0$.*

**2.6. állítás (Síkbeli egyenes implicit vektoregyenlete).** *A sík minden egyenesének van*
$$\mathbf{n} \cdot (\mathbf{r} - \mathbf{r}_0) = 0, \tag{2.2}$$
*és vele ekvivalens*
$$\mathbf{n} \cdot \mathbf{r} = C \tag{2.3}$$
*alakú vektoregyenlete, és minden ilyen alakú egyenlet egy egyenes egyenlete, ahol $\mathbf{n} \neq \mathbf{0}$ az egyenes egy normálvektora, $\mathbf{r}_0$ az egyenes egy tetszőleges, de rögzített pontjába mutató vektor és $C$ konstans.*

A (2.2) alakú egyenlet könnyen átírható (2.3) alakúvá a $C = \mathbf{n} \cdot \mathbf{r}_0$ jelöléssel. Az átalakítás fordított irányban is egyszerű, hisz ha $\mathbf{n} \cdot \mathbf{r} = C$, akkor találunk olyan $\mathbf{r}_0$ vektort, melyre $\mathbf{n} \cdot \mathbf{r}_0 = C$. Ez azért igaz, mert ha tetszőleges $\mathbf{n}$-re nem merőleges $\mathbf{v}$ vektorra $\mathbf{n} \cdot \mathbf{v} = D$, akkor $\mathbf{n} \cdot \left(\frac{C}{D}\mathbf{v}\right) = C$, így az $\mathbf{r}_0 = \frac{C}{D}\mathbf{v}$ megfelel.

*2.5. ábra. Síkbeli egyenes (implicit) vektoregyenlete: $\mathbf{n} \cdot \mathbf{r} = C$. Ha az $\mathbf{n}$ egységvektor, akkor az $\mathbf{n} \cdot \mathbf{r} = C$ geometriai jelentése az, hogy az egyenes bármely pontjába mutató vektornak az $\mathbf{n}$ egyenesére eső merőleges vetülete $C$. Ez az ábra is ezt az esetet szemlélteti.*

Az $\mathbf{r} = (x, y)$, $\mathbf{r}_0 = (x_0, y_0)$ és $\mathbf{v} = (a, b)$ jelöléseket használva az explicit vektoregyenlet azonnal egyenletrendszerré alakítható.

**2.7. állítás (Síkbeli egyenes explicit egyenletrendszere).** *A sík minden egyenesének van*
$$\begin{aligned}
x &= x_0 + at \\
y &= y_0 + bt
\end{aligned} \tag{2.4}$$
*alakú egyenletrendszere, ahol $(a, b)$ az egyenes egy irányvektora, és $(x_0, y_0)$ az egyenes egy tetszőleges rögzített pontja.*

A következőkben megmutatjuk, hogy az explicit egyenletrendszerből a $t$ paraméter kiküszöbölhető, így egy implicit egyenletet kapunk.

**2.8. állítás (Síkbeli egyenes (implicit) egyenlete).** *A sík minden egyenesének van*
$$Ax + By = C \tag{2.5}$$
*alakú egyenlete, és minden ilyen alakú egyenlet egy egyenes egyenlete, ahol $A$ és $B$ közül nem mindkettő nulla, és $(-B, A)$ az egyenes egy irányvektora.*

*Bizonyítás.* Ha $a$ vagy $b$ valamelyike $0$, akkor a két egyenlet egyike felesleges, például ha $a = 0$, akkor az egyenletrendszer alakja
$$\begin{aligned}
x &= x_0 \\
y &= y_0 + bt
\end{aligned}$$
ami ekvivalens az $x = x_0$ egyenlettel, hisz az $y = y_0 + bt$ semmi mást nem mond, mint hogy $y$ egy valós szám. Mivel $(a, b) \neq (0, 0)$, ezért csak az az eset marad, amikor $a$ és $b$ egyike sem $0$. Ekkor mindkét egyenletből kifejezhető $t$, és a két értéket egyenlővé téve kapjuk, hogy
$$\frac{x - x_0}{a} = \frac{y - y_0}{b},$$
azaz
$$bx - ay = bx_0 - ay_0, \quad \text{vagy} \quad b(x - x_0) - a(y - y_0) = 0.$$
Az $A = b$, $B = -a$ jelöléssel a fenti egyenlet $Ax + By = Ax_0 + By_0$ alakú lesz. Az egyenlet jobb oldalán lévő konstanst $C$-vel jelölve az egyenes egyenlete $Ax + By = C$ alakot ölt. Másrészt könnyen látható, hogy minden ilyen alakú egyenlet egy egyenes egyenlete, mert ekvivalens egy egyenes paraméteres egyenletrendszerével. Nevezetesen az $Ax + By = C$ egyenlet visszaírható $Ax + By = Ax_0 + By_0$ alakba, hisz az $Ax_0 + By_0 = C$ egyenletben $A \neq 0$ esetén egy tetszőleges $y_0$-t választva, egyértelműen kifejezhető $x_0$. (A $B \neq 0$ eset analóg.) Ennek alapján felírható a (2.4) egyenletrendszer. $\square$

▶ A fenti állítás még egyszerűbben bizonyítható abban az esetben, ha a bázis ortonormált! Ezt az Olvasóra hagyjuk (ld. a 2.9. feladatot).

**2.9. példa (Síkbeli egyenes egyenletei).** *Írjuk fel annak a $(2, 3)$ és az $(1, 1)$ koordinátájú pontokon átmenő egyenes összes egyenlet(rendszer)ét!*

*Megoldás.* Ha egy egyenes átmegy e két ponton, akkor irányvektora a két pontba mutató vektorok különbsége, azaz $\mathbf{v} = (2, 3) - (1, 1) = (1, 2)$. Legyen például $\mathbf{r}_0 = (1, 1)$. Ekkor a vektoregyenlet és az explicit egyenletrendszer
$$\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 1 \\ 1 \end{bmatrix} + t\begin{bmatrix} 1 \\ 2 \end{bmatrix}, \quad \text{illetve} \quad \begin{aligned} x &= 1 + t \\ y &= 1 + 2t. \end{aligned}$$
Az irányvektorból $(A, B) = (2, -1)$, innen az egyenes egyenlete $2x - y = 2 \cdot 1 - 1 \cdot 1$, azaz
$$2x - y = 1.$$
Az $(A, B) = (2, -1)$ vektor csak ortonormált koordináta-rendszerben egyezik meg a normálvektorral, így ott írhatjuk az egyenletet
$$(2, -1) \cdot (x - 1, y - 1) = 0$$
alakban. $\square$

### Síkbeli pont egyenletei

Tekintsük a síkbeli $(x_0, y_0)$ pontot. Ennek explicit egyenletrendszere, illetve vektoregyenlete:
$$\begin{aligned} x &= x_0 \\ y &= y_0, \end{aligned} \quad \text{illetve} \quad \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} x_0 \\ y_0 \end{bmatrix}.$$
Ez nyilvánvaló, de didaktikai okokból hasznos erre a speciális esetre is vetni egy pillantást, ugyanis a matematikai fogalmak megértésében nagy segítségünkre lehet az extremális esetek vizsgálata.

A pont explicit egyenletrendszeréhez nincs szükség paraméterekre, így az implicit alak egyúttal explicit is. Ekkor úgy tekintünk az egyenletrendszerre, mint két egyenes egyenletére, melyek normálvektorai $(1, 0)$ illetve $(0, 1)$, és amelyek metszéspontja a tekintett pont.

Ez adja az ötletet, egy pont implicit egyenletrendszerének tekinthetnénk két egyenletet, melyek egymást az adott pontban metsző egy-egy egyenes egyenletei. Tehát mondhatjuk, hogy a pont implicit egyenletrendszerének általános alakja:
$$\begin{aligned}
A_1 x + B_1 y &= C_1 \\
A_2 x + B_2 y &= C_2
\end{aligned}$$
Az azonban nem igaz, hogy minden ilyen alakú egyenletrendszer egy pont egyenletrendszere, mert két egyenes metszheti egymást egyetlen pontban, de lehet, hogy nincs közös pontjuk, és lehet végtelen sok közös pontjuk is. Épp ennek a kérdésnek a részletes vizsgálata lesz a 2. fejezet témája.

### A 3-dimenziós tér síkjainak egyenletei

Tudjuk, hogy két lineárisan független $\mathbf{u}$ és $\mathbf{v}$ vektor bármely lineáris kombinációja a két vektor által meghatározott síkban van, továbbá hogy e sík bármely vektora előáll a megadott két vektor lineáris kombinációjaként (ld. 1.8. és 1.11. tételek). Ebből azonnal adódik, hogy a sík egy rögzített pontjába mutató $\mathbf{r}_0$ vektor segítségével a sík bármelyik pontjába mutató $\mathbf{r}$ vektor felírható $\mathbf{r} = \mathbf{r}_0 + s\mathbf{u} + t\mathbf{v}$ alakban.

**2.10. állítás (Sík explicit vektoregyenlete).** *Bármely síknak van*
$$\mathbf{r} = \mathbf{r}_0 + s\mathbf{u} + t\mathbf{v} \tag{2.6}$$
*alakú vektoregyenlete, és minden ilyen alakú egyenlet egy sík egyenlete, ahol $\mathbf{u}$ és $\mathbf{v}$ a sík két lineárisan független vektora és $\mathbf{r}_0$ a sík egy tetszőleges, de rögzített pontjába mutató vektor.*

Hasonlóan a síkbeli egyeneshez, a térbeli sík egyenletéből is kiküszöbölhető a paraméter a merőlegesség felhasználásával. Az 1.47. feladat állítása szerint, ha egy vektor merőleges két tetszőleges vektor mindegyikére, akkor merőleges azok lineáris kombinációjára is. Mivel az $\mathbf{n} = \mathbf{u} \times \mathbf{v}$ merőleges $\mathbf{u}$-ra és $\mathbf{v}$-re is, ezért merőleges azok minden lineáris kombinációjára, is, azaz az $\mathbf{r} - \mathbf{r}_0 = s\mathbf{u} + t\mathbf{v}$ vektorra is. Ez az észrevétel az alapja az alábbi tételnek.

**2.11. állítás (Sík implicit vektoregyenlete).** *A háromdimenziós térben minden síknak van*
$$\mathbf{n} \cdot (\mathbf{r} - \mathbf{r}_0) = 0, \tag{2.7}$$
*és a vele ekvivalens*
$$\mathbf{n} \cdot \mathbf{r} = C \tag{2.8}$$
*alakú vektoregyenlete, és minden ilyen alakú egyenlet egy sík egyenlete, ahol $\mathbf{n}$ a sík egy normálvektora, $\mathbf{r}_0$ a sík egy tetszőleges, de rögzített pontjába mutató vektor és $C$ konstans.*

A bizonyítás analóg a síkbeli egyenesnél leírtakkal (ld. 2.10. feladat).

Az $\mathbf{r} = (x, y, z)$, $\mathbf{r}_0 = (x_0, y_0, z_0)$ és $\mathbf{u} = (a_1, b_1, c_1)$ $\mathbf{v} = (a_2, b_2, c_2)$ jelölésekkel az explicit vektoregyenlet egyenletrendszerré alakítható.

**2.12. állítás (Sík explicit egyenletrendszere).** *A háromdimenziós tér minden síkjának van*
$$\begin{aligned}
x &= x_0 + a_1 s + a_2 t \\
y &= y_0 + b_1 s + b_2 t \\
z &= z_0 + c_1 s + c_2 t
\end{aligned} \tag{2.9}$$
*alakú egyenletrendszere, ahol $(a_1, b_1, c_1)$ és $(a_2, b_2, c_2)$ a sík két lineárisan független vektora, és $(x_0, y_0, z_0)$ a sík egy tetszőleges rögzített pontja.*

Az explicit egyenletrendszerből kiküszöbölhető a két paraméter, ha például két egyenletből kifejezzük a paramétereket, és behelyettesítjük a harmadik egyenletbe. Így egy implicit egyenletet kapunk. A számításokat nem részletezzük, az eredmény
$$(b_1 c_2 - b_2 c_1)(x - x_0) + (c_1 a_2 - c_2 a_1)(y - y_0) + (a_1 b_2 - a_2 b_1)(z - z_0) = 0.$$
Az $(A, B, C) = (b_1 c_2 - b_2 c_1, c_1 a_2 - c_2 a_1, a_1 b_2 - a_2 b_1)$ jelöléssel a sík egyenlete $A(x - x_0) + B(y - y_0) + C(z - z_0) = 0$ alakra hozható, vagy ami vele ekvivalens, $Ax + By + Cz = D$ alakra.

**2.13. állítás (Sík implicit egyenlete).** *A háromdimenziós térben minden síknak van*
$$Ax + By + Cz = D \tag{2.10}$$
*alakú egyenlete, és minden ilyen alakú egyenlet egy sík egyenlete, ha $A$, $B$ és $C$ legalább egyike nem nulla, és $D = Ax_0 + By_0 + Cz_0$, ahol $(x_0, y_0, z_0)$ a sík valamely pontja.*

A sík egyenlete a $\mathbf{n} \cdot (\mathbf{r} - \mathbf{r}_0) = 0$ alakú vektoregyenletéből is megkapható, amit *ortonormált* koordináta-rendszerben könnyű igazolni (ld. 2.11. feladat). Mivel
$$(A, B, C) = (b_1 c_2 - b_2 c_1, c_1 a_2 - c_2 a_1, a_1 b_2 - a_2 b_1), \tag{2.11}$$
ami ortonormált bázisban épp az $\mathbf{u} \times \mathbf{v}$ vektorral egyenlő, ezért $(A, B, C)$ merőleges a sík minden vektorára, vagyis a sík egy normálvektora. Az $\mathbf{n} \cdot (\mathbf{r} - \mathbf{r}_0) = 0$ egyenletet koordinátás alakba átírva kapjuk, hogy
$$(A, B, C) \cdot (x - x_0, y - y_0, z - z_0) = 0.$$

**2.14. példa (Sík egyenletei).** *Írjuk fel a $(0, -1, 2)$ ponton átmenő, az $\mathbf{u} = (2, 2, 2)$ és $\mathbf{v} = (-1, 1, 5)$ vektorokkal párhuzamos sík egyenleteit!*

*Megoldás.* Egyszerű képletbehelyettesítés után a sík explicit vektoregyenlete és explicit egyenletrendszere
$$\begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 0 \\ -1 \\ 2 \end{bmatrix} + s\begin{bmatrix} 2 \\ 2 \\ 2 \end{bmatrix} + t\begin{bmatrix} -1 \\ 1 \\ 5 \end{bmatrix}, \quad \text{illetve} \quad \begin{aligned} x &= 2s - t \\ y &= -1 + 2s + t \\ z &= 2 + 2s + 5t. \end{aligned}$$
Mivel a (2.11) képlet szerint $(A, B, C) = (8, -12, 4)$, ezért a sík implicit egyenlete $8(x - 0) - 12(y - (-1)) + 4(z - 2) = 0$, azaz 4-gyel való osztás és átrendezés után
$$2x - 3y + z = 5.$$
Így ortonormált koordináta-rendszerben a
$$(2, -3, 1) \cdot (x, y, z) = 5, \quad \text{vagy} \quad (2, -3, 1) \cdot (x, y + 1, z - 2) = 0$$
a sík implicit vektoregyenlete. $\square$

<!-- OCR: through PDF p.65 -->
