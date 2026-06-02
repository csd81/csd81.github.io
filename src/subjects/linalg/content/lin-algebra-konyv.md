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

### A térbeli egyenes egyenletei

Mindaz, amit a síkbeli egyenes explicit vektoregyenletéről mondtunk a 61. oldalon, lényegében változtatás nélkül megismételhető. Jelöljük ki a térben az origót, és tekintsük azt az $e$ egyenest, melynek irányvektora $\mathbf{v}$, és amely átmegy azon a ponton, melybe az $\mathbf{r}_0$ vektor mutat. Világos, hogy e egyenes bármely pontjába mutató $\mathbf{r}$ vektor előáll $\mathbf{r}_0 + t\mathbf{v}$ alakban, ahol $t$ valós szám, és az $e$-re nem illeszkedő pontokra ez nem áll. Így igaz a következő állítás:

**2.15. állítás (Térbeli egyenes explicit vektoregyenlete).** *A háromdimenziós tér minden egyenesének van*
$$\mathbf{r} = \mathbf{r}_0 + t\mathbf{v} \tag{2.12}$$
*alakú vektoregyenlete, és minden ilyen alakú egyenlet egy egyenes egyenlete, ahol $\mathbf{v} \neq \mathbf{0}$ az egyenes egy irányvektora, és $\mathbf{r}_0$ egy tetszőleges, de rögzített pontjába mutató vektor.*

Itt nem tudjuk a paramétert egyetlen vektoregyenletben kiküszöbölni, de az explicit egyenletrendszerré való átírás megy, ha felveszünk egy koordináta-rendszert, melyben $\mathbf{r} = (x, y, z)$, $\mathbf{r}_0 = (x_0, y_0, z_0)$ és $\mathbf{v} = (a, b, c)$:

**2.16. állítás (Térbeli egyenes explicit egyenletrendszere).** *A tér minden egyenesének van*
$$\begin{aligned}
x &= x_0 + at \\
y &= y_0 + bt \\
z &= z_0 + ct
\end{aligned} \tag{2.13}$$
*alakú egyenletrendszere, ahol $(a, b, c) \neq (0, 0, 0)$ az egyenes egy irányvektora, és $(x_0, y_0, z_0)$ az egyenes egy tetszőleges rögzített pontja.*

A (2.13) egyenletrendszerből a paraméter kiküszöbölhető. Szorozzuk be az első egyenletet $b$-vel, a másodikat $a$-val, majd vonjuk ki a második egyenletet az elsőből, kapjuk, hogy $bx - ay = bx_0 - ay_0$. Hasonlóan eljárva az első és harmadik egyenlettel $cx - az = cx_0 - az_0$, végül az második és harmadik egyenletből $cy - bz = cy_0 - bz_0$ adódik. Az egyenleteket átrendezve az alábbi állítást kapjuk:

**2.17. állítás (Térbeli egyenes implicit egyenletrendszere).** *A tér minden egyenesének van két egyenletből álló implicit egyenletrendszere. Ha az $(a, b, c) \neq (0, 0, 0)$ vektor az egyenes egy irányvektora, akkor a két egyenlet az alábbi három közül bármelyik kettő, amelyik nem $0 = 0$ alakú:*
$$\begin{aligned}
b(x - x_0) &= a(y - y_0) \\
c(x - x_0) &= a(z - z_0) \\
c(y - y_0) &= b(z - z_0)
\end{aligned} \tag{2.14}$$

> A (2.17.) egyenletrendszer átírható a változók szerint rendezve:
> $$\begin{alignedat}{9}
> bx &{}-{}& ay &&    &{}={}& bx_0 &{}-{}& ay_0 \\
> cx &&     &{}-{}& az &{}={}& cx_0 &&     {}- az_0 \\
>    && cy  &{}-{}& bz &{}={}& cy_0 &{}-{}& bz_0,
> \end{alignedat}$$
> de leggyakrabban az $a \neq 0$, $b \neq 0$, $c \neq 0$ esetre érvényes
> $$\frac{x - x_0}{a} = \frac{y - y_0}{b} = \frac{z - z_0}{c}.$$
> alakkal találkozhatunk.

*Bizonyítás.* A (2.14) egyenleteit az állítás előtt már igazoltuk. Mivel $(a, b, c) \neq (0, 0, 0)$, így legalább az egyik koordináta nem $0$. Ha pontosan egyikük nem $0$, pl. legyen $a \neq 0$, $b = c = 0$, akkor az egyenletrendszer
$$\begin{aligned}
y &= y_0 \\
z &= z_0
\end{aligned}$$
alakú, ez két sík egyenlete, a mindkét egyenletet kielégítő pontok halmaza a síkok metszete, ami egy egyenes, mert e síkok biztosan nem párhuzamosak. (A harmadik egyenlet $0 = 0$ alakú, ami elhagyható.)

Ha $a$, $b$ és $c$ közül pontosan egy értéke $0$, akkor két egyenlet azonos, így egyikük elhagyható. Például ha $a \neq 0$, $b \neq 0$ de $c = 0$, akkor az egyenletek alakja
$$\begin{aligned}
b(x - x_0) &= a(y - y_0) \\
z &= z_0 \\
z &= z_0.
\end{aligned}$$

Végül ha egyik együttható sem $0$, akkor három sík egyenletét kaptuk, melyek közül semelyik kettő sem párhuzamos a bennük szereplő változók különbözősége miatt. Bármelyik kettő metszete egy egyenes, és mivel mindhárom metszete is egy egyenes, ezért bármelyik két egyenlet megtartható.

A tétel úgy is igazolható, hogy a (2.14) három egyenlete lineárisan összefügg, hisz az első egyenlet $c$-szerese mínusz a második $b$-szerese plusz a harmadik $a$-szorosa a $0 = 0$ egyenletet adja. Ez a vektoroknál látotthoz hasonlóan azt jelenti, hogy valamelyik egyenlet előáll a másik kettő lineáris kombinációjaként, ez pedig elhagyható, hisz ha egy pont kielégíti a másik két egyenletet, akkor a lineáris kombinációjukat is. $\square$

**2.18. példa (Térbeli egyenes egyenletrendszerei).** *Írjuk fel annak az egyenesnek az explicit és implicit egyenletrendszerét, mely átmegy az a) $A(1, 3, 4)$ és a) $B(3, 3, 1)$, illetve b) $C(5, 5, -2)$ ponton.*

*Megoldás.* a) Az $A$ és $B$ pontot összekötő vektor $= (2, 0, -3)$. Innen az egyenes explicit egyenletrendszere
$$\begin{aligned}
x &= 1 + 2t \\
y &= 3 \\
z &= 4 - 3t,
\end{aligned}$$
melynek második egyenlete, $y = 3$, egy $xz$-síkkal párhuzamos sík egyenlete. A másik két egyenletből kiküszöbölve $t$-t, egy másik sík egyenletét kapjuk. Az egyenes ennek a két síknak a metszésvonala. Az első egyenletből $t = \frac{1}{2}(x - 1)$, a harmadikból $t = -\frac{1}{3}(z - 4)$ ezért $3x + 2z = 11$. Így az előző egyeneshez a következő implicit (paraméter nélküli) egyenletrendszer tartozik, mely két sík egyenletéből áll:
$$\begin{alignedat}{9}
3x && {}+{} 2z &{}={}& 11 \\
   && y       &{}={}& 3.
\end{alignedat}$$

b) Az $A$ és $C$ pontot összekötő vektor itt $= (4, 2, -6)$. Innen az egyenes explicit egyenletrendszere
$$\begin{aligned}
x &= 1 + 4t \\
y &= 3 + 2t \\
z &= 4 - 6t.
\end{aligned}$$
Mindegyik egyenletből kifejezve $t$-t kapjuk, hogy
$$t = \frac{x - 1}{4} = \frac{y - 3}{2} = \frac{z - 4}{-6}.$$
Ez a következő három sík egyenletét adja:
$$\begin{alignedat}{9}
x &{}-{}& 2y &&     &{}={}& -5 \\
3x &&    &{}+{}& 2z &{}={}& 11 \\
   && 3y &{}+{}& z  &{}={}& 13.
\end{alignedat}$$
E három sík közül bármely kettő meghatározza az adott egyenest, így e három egyenlet közül bármely kettő az egyenes (implicit) egyenletrendszere. $\square$

### Térbeli pont egyenletei

Csak a teljesség és az analógiák megértése céljából vizsgáljuk meg a tér egy pontjának lehetséges egyenleteit. A térbeli $(x_0, y_0, z_0)$ pont explicit egyenletrendszere, illetve vektoregyenlete:
$$\begin{aligned}
x &= x_0 \\
y &= y_0, \\
z &= z_0
\end{aligned} \quad \text{illetve} \quad \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} x_0 \\ y_0 \\ z_0 \end{bmatrix}.$$
Az explicit egyenletrendszert implicit alaknak is tekinthetjük, ekkor három – a koordinátasíkokkal párhuzamos – sík egyenletét látjuk, melyek egyetlen közös pontban metszik egymást.

A síkbeli esethez hasonlóan egy pont implicit egyenletrendszerének tekinthetnénk három egyenletet, melyek egymást az adott pontban metsző egy-egy sík egyenletei. Tehát a pont implicit egyenletrendszerének általános alakja
$$\begin{aligned}
A_1 x + B_1 y + C_1 z &= D_1 \\
A_2 x + B_2 y + C_2 z &= D_2 \\
A_3 x + B_3 y + C_3 z &= D_3,
\end{aligned}$$
feltéve, hogy a síkoknak csak egyetlen közös pontjuk van. E kérdés vizsgálatára visszatérünk a 2. fejezetben.

### Egyenletek $\mathbb{R}^n$-ben

Az egyenes és a sík explicit vektoregyenlete $\mathbb{R}^n$-ben is ugyanolyan alakú, mint $\mathbb{R}^3$-ben, azaz az egyenes explicit vektoregyenlete $\mathbf{r} = \mathbf{r}_0 + t\mathbf{v}$, a síké $\mathbf{r} = \mathbf{r}_0 + s\mathbf{u} + t\mathbf{v}$ alakú.

A síkbeli egyenes és a térbeli sík vektoregyenlete $\mathbf{n} \cdot \mathbf{r} = c$ alakú. E két esetben ez az egyenlet az $n$-dimenziós tér egy $n-1$-dimenziós alakzatának egyenlete ($n = 2, 3$). A későbbiekben látni fogjuk, hogy ez általában is igaz, de e pillanatban még a dimenzió fogalmát sem definiáltuk, ezért egyelőre csak nevet adunk ennek az alakzatnak. Az $\mathbb{R}^n$ térben $\mathbf{n} \neq \mathbf{0}$ esetén az $\mathbf{n} \cdot \mathbf{r} = c$ egyenletet kielégítő $\mathbf{r}$ vektorok végpontjainak halmazát *hipersíknak* nevezzük. Koordinátás alakban
$$a_1 x_1 + a_2 x_2 + \ldots + a_n x_n = c,$$
ahol $\mathbf{n} = (a_1, a_2, \ldots, a_n)$ a hipersík *normálvektora* (ld. a 2.12. feladatot), $\mathbf{r} = (x_1, x_2, \ldots, x_n)$ a hipersík egy tetszőleges pontjába mutató vektor.

A következő táblázat összefoglalja geometriai alakzatoknak a továbbiak szempontjából legfontosabb egyenleteit.

| Tér | Alakzat | Explicit vektoregyenlet | Implicit egyenlet(rendszer) |
|---|---|---|---|
| **Síkban** | egyenes | $\mathbf{r} = \mathbf{r}_0 + t\mathbf{v}$ | $Ax + By = C$ |
| | pont | $\mathbf{r} = \mathbf{r}_0$ | $A_1 x + B_1 y = C_1$<br>$A_2 x + B_2 y = C_2$ |
| **Térben** | sík | $\mathbf{r} = \mathbf{r}_0 + s\mathbf{u} + t\mathbf{v}$ | $Ax + By + Cz = D$ |
| | egyenes | $\mathbf{r} = \mathbf{r}_0 + t\mathbf{v}$ | $A_1 x + B_1 y + C_1 z = D_1$<br>$A_2 x + B_2 y + C_2 z = D_2$ |
| | pont | $\mathbf{r} = \mathbf{r}_0$ | $A_1 x + B_1 y + C_1 z = D_1$<br>$A_2 x + B_2 y + C_2 z = D_2$<br>$A_3 x + B_3 y + C_3 z = D_3$ |
| **$\mathbb{R}^n$-ben** | hipersík | ??? | $a_1 x_1 + a_2 x_2 + \ldots + a_n x_n = b$ |
| | sík | $\mathbf{r} = \mathbf{r}_0 + s\mathbf{u} + t\mathbf{v}$ | ??? |
| | egyenes | $\mathbf{r} = \mathbf{r}_0 + t\mathbf{v}$ | ??? |
| | pont | $\mathbf{r} = \mathbf{r}_0$ | ??? |

*2.1. táblázat. Geometriai alakzatok egyenletei: az $\mathbb{R}^n$-beli egyenletek közül többet még nem ismerünk, ezeket három kérdőjel jelzi, de arra biztatjuk az Olvasót, hogy az analógia fonalán haladva fogalmazza meg sejtéseit.*

### Feladatok

**2.1.•** *Egyenes, sík, hipersík: igaz – hamis.* Melyek igazak, melyek hamisak az alábbi állítások közül? Válaszunkat indokoljuk!
- a) Az $Ax + By = C$ minden síkbeli koordinátarendszerben egy egyenes egyenlete!
- b) Az $x^2 + y^2 = 4$ minden síkbeli koordinátarendszerben egy kör egyenlete!
- c) Az $Ax + By = C$ lehet egy sík egyenlete!
- d) Az $Ax + By = C$ egyenletű sík normálvektora $(A, B, C)$.
- e) Az $x + y = 0$, $z + w = 0$ egyenletrendszer egy $\mathbb{R}^4$-beli sík egyenletrendszere.
- f) Az $x = 0$, $y = 0$ egyenletrendszer egy $\mathbb{R}^4$-beli sík egyenletrendszere.
- g) Az $x_1 + 3x_3 + 5x_5 = 2$ egyenletű $\mathbb{R}^5$-beli hipersík normálvektora $(1, 0, 3, 0, 5)$.
- h) $\mathbb{R}^4$-ben van olyan két sík, melyek egyetlen pontban metszik egymást!

**2.2.** *Koordinátasíkkal párhuzamos sík egyenlete.* Tekintsük egy térbeli koordináta-rendszerben azt a síkot, mely párhuzamos az első két koordinátatengellyel, és a harmadik tengelyt az 5 koordinátájú pontban metszi. Írjunk fel egyenleteit!

**2.3.•** Határozzuk meg az implicit egyenlet(rendszer)ével megadott egyenes explicit vektoregyenletét!
- a) $x + y = 1$  b) $2x + 3y = 6$
- c) $\begin{cases} x + 2y + 3z = 1 \\ x + 3y + 4z = 2 \end{cases}$  d) $\begin{cases} x + 2y + 3z = 1 \\ z = 2 \end{cases}$
- e) $\begin{cases} x + y + z + w = 1 \\ x + y + 2z + 3w = 2 \\ x + y + 2z + 2w = 2 \end{cases}$  f) $\begin{cases} x + y + z + w = 3 \\ y + 2z + w = 2 \\ z + w = 1 \end{cases}$

**2.4.** Az alábbi egyenlet a megadott térben egy hipersík implicit egyenlete. Adjuk meg az explicit egyenletrendszerét!
- a) $x + y = 1$, $\mathbb{R}^2$  b) $x + y + z = 1$, $\mathbb{R}^3$
- c) $x + y = 1$, $\mathbb{R}^3$  d) $x + y + z + w = 1$, $\mathbb{R}^4$
- e) $x + y = 1$, $\mathbb{R}^4$  f) $x = 1$, $\mathbb{R}^4$

**2.5.•** Határozzuk meg az implicit egyenlet(rendszer)ével megadott alábbi sík explicit vektoregyenletét!
- a) $x + 2y + 3z = 1$  b) $3x + 2y + z = 6$
- c) $ax + by + cz = 1$, ahol $a, b, c \in \mathbb{R}$ legalább egyike nem nulla paraméter
- d) $\begin{cases} x + y + 2z + 6w = 4 \\ x - y + 4z = 2 \end{cases}$  e) $\begin{cases} x + y + z + w = 1 \\ x + y + 2z + 3w = 2 \end{cases}$
- f) $\begin{cases} x + y = 3 \\ z + w = 1 \end{cases}$  g) $\begin{cases} x + y = 3 \\ w = 1 \end{cases}$

**2.6.** *Egyenes egyenletei.* Írjuk fel a megadott pontokon átmenő egyenes egyenlet(rendszer)eit!
- a) $A(2, 1)$, $B(3, 4)$,  b) $A(1, 4)$, $B(3, 4)$,
- c) $A(1, 4)$, $B(1, 3)$,  d) $A(3, 4, 1)$, $B(3, 4, 2)$,
- e) $A(1, 4, 1)$, $B(3, 4, 2)$,  f) $A(1, 4, 1)$, $B(3, 2, 2)$,
- g) $A(1, 1, 1)$, $B(2, 3, 2, 4)$,  h) $A(3, 4, 1, 0)$, $B(3, 2, 1, 2)$.

**2.7.** *Sík egyenletei.* Írjuk fel a megadott pontokon átmenő sík egyenleteit!
- a) $A(0, -1, 2)$, $B(-1, 0, 7)$, $C(2, 1, 4)$,
- b) $A(0, 1, 2)$, $B(-1, 1, 7)$, $C(2, 1, 4)$,
- c) $A(1, 1, 1, 1)$, $B(2, 3, 2, 4)$, $C(3, 2, 1, 0)$,
- d) $A(0, -1, 2, 3)$, $B(-1, 0, 7, 4)$, $C(2, 1, 4, 2)$.

**2.8.** *Hipersík egyenletei.* Írjuk fel a megadott pontokon átmenő $\mathbb{R}^4$-beli hipersík egyenleteit!
- a) $A(0, 1, 1, 1)$, $B(0, 2, 3, 4)$, $C(1, 2, 1, 1)$, $D(0, 1, 2, 2)$,
- b) $A(1, 1, 1, 1)$, $B(1, 2, 3, 4)$, $C(2, 2, 1, 1)$, $D(1, 1, 2, 2)$.
- c) $A(1, 1, 1, 1)$, $B(1, 2, 1, 4)$, $C(2, 2, 1, 1)$, $D(1, 1, 2, 2)$.

**2.9.•** Adjunk bizonyítást a 2.8. állításra, ha a bázis ortonormált, azaz mutassuk meg, hogy a sík minden egyenesének van
$$Ax + By = C$$
alakú egyenlete, és minden ilyen alakú egyenlet egy egyenes egyenlete, ahol $A$ és $B$ közül nem mindkettő nulla, és $(-B, A)$ az egyenes egy irányvektora.

**2.10.** Igazoljuk a 2.11. állítást.

**2.11.** Igazoljuk a 2.13. tételt ortonormált bázis esetén (az $\mathbf{n} \cdot (\mathbf{r} - \mathbf{r}_0) = 0$ alakú vektoregyenletéből)

**2.12.** Mutassuk meg, hogy $\mathbb{R}^n$ egy tetszőleges $\mathbf{n} \cdot \mathbf{r} = c$ egyenletű hipersíkjának bármely két pontját összekötő vektor merőleges $\mathbf{n}$-re.

## A lineáris egyenletrendszer és két modellje

*E szakasz témája a lineáris egyenletrendszerek fogalma és a lineáris egyenletrendszer megoldásának két geometriai interpretációja: hipersíkok metszetének meghatározása és egy vektor lineáris kombinációként való előállítása. A számítások kényelmes könyvelésére bevezetjük a* mátrix *fogalmát.*

### Lineáris egyenlet és egyenletrendszer

$Ax + By = C$ a síkbeli egyenes implicit egyenlete. Innen ered a lineáris egyenlet elnevezés.[^1]

[^1]: *Lineáris: a* vonalas *jelentésű latin lineáris szóból ered, mely a* lenfonal, horgászzsinór, *átvitt értelemben* vonal, határvonal *jelentésű* linea (linea) *szó származéka. A matematikában* egyenessel kapcsolatba hozható, *illetve* elsőfokú *értelemben szokás használni.*

**2.19. definíció (Lineáris egyenlet).** *Az*
$$a_1 x_1 + a_2 x_2 + \cdots + a_n x_n = b \tag{2.15}$$
*alakra hozható egyenletet az $x_1, x_2 \ldots x_n$ ismeretlenekben* lineáris egyenletnek *nevezzük, ahol $a_1, a_2, \ldots$ és $a_n$, valamint $b$ konstansok. Az $a_1, a_2, \ldots$ és $a_n$ konstansokat az egyenlet* együtthatóinak, *$b$-t az egyenlet* konstans tagjának *nevezzük.*

▶ Például az alábbi egyenletek lineárisak:
$$x - 2y = 1, \quad \frac{1}{2}x_1 - \sqrt{2}x_2 + (5 - \pi)x_3 = 0, \quad a\cos 0.87 - 0.15c = 0.23.$$

▶ A következő egyenletek nem lineárisak az $x$, $y$ és $z$ ismeretlenekben:
$$xz - y = 0, \quad x + 2y = 3^z, \quad x\sin y + y\cos z + y = z^2,$$
viszont mindegyikük lineáris az $x$ és $y$ ismeretlenekben, hisz ekkor $z$ paraméter, melynek bármely értéke mellett lineárisak az egyenletek.

▶ Az
$$x = y, \quad x = 3 - y + 2z$$
egyenletek az $x$, $y$ és $z$ ismeretlenekben lineárisak, mert ekvivalens (azonos) átalakítással a definícióbeli alakra hozhatók:
$$x - y + 0z = 0, \quad x + y - 2z = 3.$$

Lineáris egyenletek egy véges halmazát *lineáris egyenletrendszernek* nevezzük. Az egyenletrendszer ismeretlenei mindazok az ismeretlenek, amelyek legalább egy egyenletben szerepelnek. Ha egy ismeretlen egy egyenletben nem szerepel, akkor úgy tekintjük, hogy $0$ az együtthatója. A jobb áttekinthetőséget az ismeretlenek azonos sorrendben való felírásával segítjük.

▶ Lineáris egyenletrendszerek például a következők:
$$\begin{alignedat}{9}
3x &{}-{}& y &{}={}& 2 \\
-x &{}+{}& 2y &{}={}& 6 \\
x &{}+{}& y &{}={}& 6
\end{alignedat} \qquad \begin{alignedat}{9}
x_1 &&&{}={}& 3 \\
x_2 &&&{}={}& 1 \\
x_3 &&&{}={}& 4
\end{alignedat} \qquad 2x - 3y + z - w = 6. \tag{2.16}$$

▶ Egyenletrendszer megoldása során gyakran fogunk $0 = b$ alakú egyenletekkel találkozni. Az is lehet, hogy egy egyenletrendszerben egyes együtthatók paraméterek. A következő egyenletrendszerek is lineárisak az $x$ és $y$ ismeretlenekben:
$$\begin{alignedat}{9}
ax &{}+{}& y &{}={}& 2a \\
x &{}-{}& \tfrac{1}{a}y &{}={}& 0
\end{alignedat} \qquad \begin{alignedat}{9}
3x &{}-{}& y &{}={}& 0 \\
-x &{}+{}& 2y &{}={}& 0 \\
&& 0 &{}={}& 0
\end{alignedat} \qquad \begin{alignedat}{9}
x &{}+{}& y &{}={}& 1 \\
&& 0 &{}={}& 2.
\end{alignedat} \tag{2.17}$$

**2.20. definíció (Lineáris egyenletrendszer).** *Lineáris egyenletrendszeren ugyanazokban a változókban lineáris egyenletek egy véges halmazát értjük. Általános alakja $m$ egyenlet és $n$ ismeretlen esetén*
$$\begin{alignedat}{9}
a_{11}x_1 &{}+{}& a_{12}x_2 &{}+{}& \ldots &{}+{}& a_{1n}x_n &{}={}& b_1 \\
a_{21}x_1 &{}+{}& a_{22}x_2 &{}+{}& \ldots &{}+{}& a_{2n}x_n &{}={}& b_2 \\
\vdots && \vdots && && \vdots && \;\,\vdots \\
a_{m1}x_1 &{}+{}& a_{m2}x_2 &{}+{}& \ldots &{}+{}& a_{mn}x_n &{}={}& b_m,
\end{alignedat} \tag{2.18}$$
*ahol $x_1, x_2, \ldots x_n$ az ismeretlenek, $a_{ij}$ az $i$-edik egyenletben az $x_j$ ismeretlen együtthatóját jelöli, és $b_i$ az $i$-edik egyenlet konstans tagja. Ha mindegyik egyenlet konstans tagja $0$, a lineáris egyenletrendszer* homogén, *ha csak egy is különbözik $0$-tól,* inhomogén.

▶ A (2.16) egyenletrendszerei mind inhomogének, míg a (2.17) középső egyenletrendszere homogén.

**2.21. definíció (Lineáris egyenletrendszer megoldása).** *Azt mondjuk, hogy a rendezett $(u_1, u_2, \ldots, u_n)$ szám-$n$-es* megoldása *a (2.18) egyenletrendszernek, ha megoldása minden egyenletnek, azaz ha minden egyenletet kielégít az $x_1 = u_1$, $x_2 = u_2, \ldots, x_n = u_n$ helyettesítéssel. Ha e szám-$n$-est vektornak tekintjük,* megoldásvektorról *beszélünk. Az összes megoldás halmazát az egyenletrendszer* megoldáshalmazának *nevezzük. Egy egyenletrendszert* konzisztensnek *(vagy megoldhatónak) nevezünk, ha megoldáshalmaza nem üres. Ellenkező esetben az egyenletrendszer* inkonzisztens *(nem megoldható).*

> *A* konzisztes *szó jelentése: belső ellentmondástól mentes. Egyéb jelentései: szilárd, sűrű, tömött, tömör, tartalmas, egységes, következetes. A latin consistens szóból ered, melynek jelentése helytálló.*

> *Ha egy egyenletrendszer több egyenletből áll, mint ahány ismeretlene van,* túlhatározottnak *nevezzük, míg ha kevesebb egyenletből áll,* alulhatározottnak. *E fogalmak időnként félrevezető megfogalmazásokhoz és téves következtetésekre vezetnek, ha az az elképzelés alakul ki, hogy a túlhatározottság azt jelenti: az egyenletek (a feltételek) már „túl sokan" vannak ahhoz, hogy akár csak egy szám-$n$-es is kielégítse. Később látni fogjuk, hogy ezzel ellentétben nem a „túl sok" egyenlet, hanem az egymásnak ellentmondó egyenletek okozzák az inkonzisztenciát. Hasonlóképp az alulhatározottság nem jelenti azt, hogy szükségképpen több megoldás is van. Alulhatározott egyenletrendszer is lehet inkonzisztens. Egyedül annyi mondható: alulhatározott egyenletrendszernek nem lehet csak egyetlen megoldása.*

▶ A (2.17) első egyenletrendszerének megoldása $(x, y) = (1, a)$, a másodiké $(x, y) = (0, 0)$. A harmadik egyenletrendszernek nincs megoldása, hisz nincs olyan $x$ és $y$ érték, melyre fönnállna a $0x + 0y = 2$ egyenlőség.

▶ Általában, a
$$0x_1 + 0x_2 + \cdots + 0x_n = 0$$
egyenletnek minden szám-$n$-es megoldása, míg a
$$0x_1 + 0x_2 + \cdots + 0x_n = b, \quad (b \neq 0)$$
egyenletnek egyetlen megoldása sincs.

### Ekvivalens lineáris egyenletrendszerek

Az alábbi egyenletrendszerek mindegyikének $(x, y) = (2, 1)$ az egyetlen megoldása:
$$\begin{alignedat}{9}
x &{}+{}& y &{}={}& 3 \\
x &{}+{}& 2y &{}={}& 4
\end{alignedat} \qquad \begin{alignedat}{9}
x &{}+{}& y &{}={}& 3 \\
&& y &{}={}& 1
\end{alignedat} \qquad \begin{alignedat}{9}
x && &{}={}& 2 \\
&& y &{}={}& 1
\end{alignedat} \tag{2.19}$$

**2.22. definíció (Ekvivalens egyenletrendszerek).** *Azonos ismeretlenekkel felírt két egyenletrendszert ekvivalensnek nevezünk, ha megoldásaik halmaza azonos.*

**2.23. tétel (Ekvivalens átalakítások).** *Az alábbi transzformációk minden egyenletrendszert ekvivalens egyenletrendszerbe visznek át:*
1. *két egyenlet felcserélése;*
2. *egy egyenlet nem nulla számmal való szorzása;*
3. *egy egyenlet konstansszorosának egy másikhoz adása.*

*Ezen kívül*
4. *egy $0 = 0$ alakú egyenlet elhagyása*

*is ekvivalens átalakítás, ami eggyel csökkenti az egyenletek számát.*

*Bizonyítás.* Az első kettő és a negyedik átalakítás nyilvánvalóan nem változtatja meg a megoldások halmazát (a negyedikkel kapcsolatban lásd a 2.20. feladatot). Nézzük a harmadik átalakítást. Tekintsük az *eredeti* egyenletrendszer egy megoldását, és azt az *új* egyenletrendszert, melyet az $i$-edik egyenlet $c$-szeresének a $j$-edikhez adásával kapunk. Világos, az átalakítás előtt is elvégezhetjük a behelyettesítést, akkor viszont egy kielégített egyenlőség konstansszorosát adjuk egy másikhoz, ami így ugyancsak ki lesz elégítve. Tehát az eredeti egyenletrendszer minden megoldása az újnak is megoldása. Másrészt viszont az új egyenletrendszer minden megoldása az eredetinek is megoldása, hisz az visszakapható az újból az $i$-edik egyenlet $-c$-szeresének a $j$-edikhez adásával. Vagyis a két megoldáshalmaz megegyezik. Tehát ez az átalakítás is ekvivalens. $\square$

▶ Az
$$\frac{x}{z} + \frac{y}{z} + 2 = 0$$
egyenlet nem lineáris, mert a $z$-vel való beszorzás nem ekvivalens átalakítás, tehát a lineáris $x + y + 2z = 0$ egyenlettel nem ekvivalens.

### Mátrixok

A számtáblázatokat, azaz a *mátrixokat* egyelőre csak az egyenletrendszerek megoldásának kényelmes leírására fogjuk használni, később azonban a velük végezhető műveletekkel a lineáris algebra kulcsfogalmává válik.

> *Mátrix: a latin mater (máter)* (anya, szülőanya, forrás) *szó származéka a matrix (mátrix), melynek jelentése az európai nyelvekben a következő változásokon ment át: anyaállat, vemhes állat, anyaméh, bezárt hely, ahonnan valami kifejlődik, bezárt, körülzárt dolgok sokasága, tömbje. Jelentése az élettanban méh, a geológiában finomszemcsés kő, melybe fosszíliák, kristályok, drágakövek vannak zárva, az anatómiában a körmöt, fogat kialakító szövet.*

A mátrixba írt számokat a *mátrix elemeinek* nevezzük. A mátrix méretének jellemzéséhez mindig előbb a sorok, majd az oszlopok számát adjuk meg, tehát egy $m \times n$-es mátrixnak $m$ sora és $n$ oszlopa van. Egy ilyen mátrix általános alakja
$$\mathbf{A} = \begin{bmatrix} a_{11} & a_{12} & \ldots & a_{1n} \\ a_{21} & a_{22} & \ldots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \ldots & a_{mn} \end{bmatrix}, \quad \text{vagy} \quad \mathbf{A} = \begin{pmatrix} a_{11} & a_{12} & \ldots & a_{1n} \\ a_{21} & a_{22} & \ldots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \ldots & a_{mn} \end{pmatrix},$$
mi az előbbit fogjuk használni.

A mátrixokat[^2] általában nagy betűvel jelöljük, e könyvben – követve a műszaki nyelv szokásait – félkövér nagy betűvel. A mátrix elemeit általában a mátrixot jelölő nagy betűvel azonos kis betűvel jelöljük, tehát $\mathbf{A}$ elemei $a_{11}, a_{12} \ldots$. A fenti mátrixra szokás még a
$$\mathbf{A} = [a_{ij}]_{m \times n} \quad \text{vagy egyszerűen az} \quad \mathbf{A} = [a_{ij}]$$
jelölést, míg elemére a $(\mathbf{A})_{ij}$ jelölést használni.

[^2]: *A programnyelvekben – ellentétben a matematikával – a kisbetűvel/nagybetűvel való jelölésnek nincs a mátrixot az elemétől való megkülönböztető szerepe. A legtöbb magasszintű nyelvben az $\mathbf{A}$-val jelölt mátrix (informatikai szóhasználattal* tömb) *$i$-edik sorának $j$-edik elemét `A[i,j]` vagy `A[i,j]` jelöli. Az alacsonyabb szintű C-típusú nyelvekben nincs 2-dimenziós tömb, a mátrixot egy olyan 1-dimenziós tömb reprezentálja, melynek minden eleme 1-dimenziós tömb, így `A[i]` az $i$-edik sort, `A[i][j]` az $i$-edik sor $j$-edik elemét jelöli. A mátrix alapú nyelvekben egy mátrix egy sorvektora vagy oszlopvektora könnyen kiemelhető, pl. az $\mathbf{A}$ mátrix 2. sorát az `A(2,:)`, 3. oszlopát a `A(:,3)` kóddal érhetjük el. Sok programnyelvben a tömbök elemeit nem 1-től, hanem 0-tól indexelik, ilyen például a C és a Python is.*

Mindig az első index jelöli a sor, a második az oszlop számát, tehát $a_{23}$ a 2-dik sor 3-adik eleme. A félreérthetőség elkerülésére $a_{ij}$ helyett $a_{i,j}$ is írható (pl. $a_{n,n-1}$). A mátrix *főátlójába* azok az elemek tartoznak, amelyek ugyanannyiadik sorban vannak, mint ahányadik oszlopban, azaz a például a fenti mátrixban a főátló elemei $a_{11}, a_{22}, \ldots$.

A gyakorlatban igen nagy méretű mátrixokat is kezelni kell. Ha elemeik nagy része $0$, *ritka mátrixoknak* nevezzük. A nagy méretű nem ritka mátrixokat *sűrűnek* nevezzük.

A vektorokat is szokás *mátrix jelöléssel, mátrix alakban,* azaz egy 1-soros vagy 1-oszlopos mátrixszal leírni – ahogy azt az első fejezetben mi is tettük. Az $n \times 1$-es mátrixot *oszlopvektornak (oszlopmátrixnak),* az $1 \times n$-es mátrixot *sorvektornak (sormátrixnak)* nevezzük. Az, hogy egy $n$-dimenziós vektort sor- vagy oszlopvektorral reprezentáljunk, döntés (szokás, ízlés) kérdése. Például az $(1, 2)$ vektornak megfelelő sorvektor és oszlopvektor
$$\begin{bmatrix} 1 & 2 \end{bmatrix}, \quad \text{illetve} \quad \begin{bmatrix} 1 \\ 2 \end{bmatrix}.$$
A széles körben elterjedt szokást követve alapértelmezésben az oszlopvektoros jelölést fogjuk használni.

> *Vektorok magyar irodai és általános iskolában használt jelölése – a tizedes vessző használata miatt – pontosvesszőt tesz a* vektor koordinátái *közé elválasztójelként. Magyar nyelvű felsőbb matematika szövegekben ez nem szokás, mi is elkerüljük, és tizedespontot, vektor koordinátái közt vesszőt használunk. Vegyük észre, hogy vektorok sorvektorral (sormátrixszal) való megadásánál írásjelet nem használunk, csak szóközzel választjuk el a koordinátákat!*

Az $\mathbf{A}$ mátrix $i$-edik sorvektorát $\mathbf{a}_{i*}$ vagy $(\mathbf{A})_{i*}$, a $j$-edik oszlopvektorát $\mathbf{a}_{*j}$ vagy $(\mathbf{A})_{*j}$ jelöli összhangban az elemek indexelésével. Hasonló jelölést használnak a mátrix alapú nyelvek is (ld. a széljegyzetet). Ha csak oszlopvektorokkal dolgozunk, a $j$-edik oszlopvektort egyszerűbben, $\mathbf{a}_j$-vel jelöljük.

**2.24. példa (Mátrixok és elemeik).** *Ha*
$$\mathbf{C} = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 7 \end{bmatrix}, \text{akkor } c_{23} = 7, \; \mathbf{c}_2 = \mathbf{c}_{*2} = \begin{bmatrix} 2 \\ 5 \end{bmatrix}, \; \mathbf{c}_{2*} = \begin{bmatrix} 4 & 5 & 7 \end{bmatrix}.$$

### Egyenletrendszer mátrixa és bővített mátrixa

Az egyenletrendszer *együtthatómátrixa* az egyenletek együtthatóit, míg *bővített* mátrixa, vagy egyszerűen csak *mátrixa* az egyenletek együtthatóit és konstans tagjait tartalmazza. Az áttekinthetőség érdekében a bővített mátrixban egy függőleges vonallal választhatjuk el az együtthatókat a konstans tagoktól. A 2.20. definícióbeli általános alak együttható- és bővített mátrixa:
$$\begin{bmatrix} a_{11} & a_{12} & \ldots & a_{1n} \\ a_{21} & a_{22} & \ldots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \ldots & a_{mn} \end{bmatrix}, \quad \left[\begin{array}{cccc|c} a_{11} & a_{12} & \ldots & a_{1n} & b_1 \\ a_{21} & a_{22} & \ldots & a_{2n} & b_2 \\ \vdots & \vdots & \ddots & \vdots & \vdots \\ a_{m1} & a_{m2} & \ldots & a_{mn} & b_m \end{array}\right].$$

**2.25. példa (Mátrix használata a megoldáshoz).** *Oldjuk meg a következő – egyenleteivel és mátrixával is megadott – egyenletrendszert!*
$$\begin{alignedat}{9}
2x &{}+{}& 3y &{}+{}& 2z &{}={}& 7 \\
x &{}+{}& y &{}+{}& z &{}={}& 3 \\
2x &{}+{}& 2y &{}+{}& 3z &{}={}& 6
\end{alignedat} \qquad \left[\begin{array}{ccc|c} 2 & 3 & 2 & 7 \\ 1 & 1 & 1 & 3 \\ 2 & 2 & 3 & 6 \end{array}\right].$$

*Megoldás.* A megoldást párhuzamosan mindkét alakon szemléltetjük. Első lépésként kicseréljük az első két egyenletet/sort:
$$\begin{alignedat}{9}
x &{}+{}& y &{}+{}& z &{}={}& 3 \\
2x &{}+{}& 3y &{}+{}& 2z &{}={}& 7 \\
2x &{}+{}& 2y &{}+{}& 3z &{}={}& 6
\end{alignedat} \qquad \left[\begin{array}{ccc|c} 1 & 1 & 1 & 3 \\ 2 & 3 & 2 & 7 \\ 2 & 2 & 3 & 6 \end{array}\right].$$
Az első egyenlet/sor 2-szeresét kivonjuk a második, majd a harmadik egyenletből/sorból (azaz $-2$-szeresét hozzáadjuk a második majd a harmadik egyenlethez/sorhoz).
$$\begin{alignedat}{9}
x &{}+{}& y &{}+{}& z &{}={}& 3 \\
&& y && &{}={}& 1 \\
&& && z &{}={}& 0
\end{alignedat} \qquad \left[\begin{array}{ccc|c} 1 & 1 & 1 & 3 \\ 0 & 1 & 0 & 1 \\ 0 & 0 & 1 & 0 \end{array}\right].$$
E ponton az egyenletrendszerről leolvasható $y$ és $z$ értéke: $y = 1$, $z = 0$. Ezeket az első egyenletbe helyettesítve az $x + 1 + 0 = 3$ egyenletet kapjuk, amiből kifejezhető $x$ értéke: $x = 2$.

Másik megoldási módszerhez jutunk, ha a visszahelyettesítés helyett folytathatjuk az ekvivalens átalakítások sorozatát. Vonjuk ki a második, majd a harmadik egyenletet/sort az elsőből:
$$\begin{alignedat}{9}
x && && &{}={}& 2 \\
&& y && &{}={}& 1 \\
&& && z &{}={}& 0
\end{alignedat} \qquad \left[\begin{array}{ccc|c} 1 & 0 & 0 & 2 \\ 0 & 1 & 0 & 1 \\ 0 & 0 & 1 & 0 \end{array}\right].$$
Így olyan alakra hoztuk az egyenletrendszert, illetve a bővített mátrixot, amiből azonnal leolvasható a megoldás: $(x, y, z) = (2, 1, 0)$. $\square$

### Sormodell: hipersíkok metszete

A lineáris egyenletrendszerek szemléltetésére két geometriai modellt mutatunk, melyek segíteni fognak az általánosabb fogalmak megértésében, szemléltetésében.

Tudjuk, hogy a kétváltozós lineáris $ax + by = c$ egyenletet kielégítő pontok halmaza egyenest alkot, ha $a$ és $b$ legalább egyike nem $0$. (Ha $a = b = 0$, akkor az egyenlet alakja $0x + 0y = 0$, azaz $0 = 0$, ami minden $(x, y)$ számpárra fennáll, tehát a megoldások halmaza a sík összes pontjának halmazával azonos. Ha $a = b = 0$, de $c \neq 0$, akkor az egyenletnek nincs megoldása, a megoldáshalmaz üres.)

**2.26. példa (Sormodell két kétismeretlenes egyenlettel).** *Ábrázoljuk az alábbi egyenletrendszereket és megoldásukat a sormodellben!*
$$\begin{alignedat}{9}
x &{}+{}& y &{}={}& 3 \\
x &{}+{}& 2y &{}={}& 4
\end{alignedat} \qquad \begin{alignedat}{9}
x &{}+{}& 2y &{}={}& 3 \\
2x &{}+{}& 4y &{}={}& 7
\end{alignedat} \qquad \begin{alignedat}{9}
x &{}+{}& 2y &{}={}& 3 \\
2x &{}+{}& 4y &{}={}& 6
\end{alignedat}$$

*Megoldás.* Az első egyenletrendszer szerinti ábra egy metsző egyenespárt tartalmaz. Metszéspontjuk a megoldás. Ezt a 2.6 ábra felső rajza mutatja. Oldjuk meg az egyenletrendszert! A megoldás közben két újabb egyenletrendszert kapunk:
$$\begin{alignedat}{9}
x &{}+{}& y &{}={}& 3 \\
x &{}+{}& 2y &{}={}& 4
\end{alignedat} \quad \Rightarrow \quad \begin{alignedat}{9}
x &{}+{}& y &{}={}& 3 \\
&& y &{}={}& 1
\end{alignedat} \quad \Rightarrow \quad \begin{alignedat}{9}
x && &{}={}& 2 \\
&& y &{}={}& 1
\end{alignedat}$$
Ezek sormodelljeit a 2.6 ábra mutatja.

A második egyenletrendszer nem oldható meg, mert az egyenleteknek megfelelő két egyenes párhuzamos, és nincs közös pontjuk. Az algebrai megközelítés is ezt adja: ha az első egyenlet kétszeresét kivonjuk a másodikból, az ellentmondó $0 = 1$ egyenletet kapjuk. Másként fogalmazva: az $0x + 0y = 1$ egyenletet kielégítő pontok halmaza üres.

A harmadik egyenletrendszer egyenleteihez két egybeeső egyenes tartozik. Az egyenletrendszer megoldáshalmaza tehát ennek az egyenesnek a pontjaiból áll. Ha az első egyenlet kétszeresét kivonjuk a másodikból, a $0 = 0$ egyenletet kapjuk, amely így elhagyható. A megmaradó $x + 2y = 3$ egyenlet összes megoldása paraméteres alakba írva például $(x, y) = (3 - 2t, t)$. $\square$

> *Egyenletrendszer megoldásának szemléltetése a sormodellben jól nyomon követhető a SagePlayer sormodell című demonstrációján. Ott saját bővített mátrixokkal is lehet kísérletezni.*

*2.6. ábra. Egyenletrendszer megoldásának szemléltetése.*

*2.7. ábra. A megoldás szemléltetése, ha a két egyenlet egyikének bal oldala nullává tehető.*

Röviden áttekintjük a három egyenletből álló háromismeretlenes egyenletrendszerek sormodelljeit a 3-dimenziós térben.

Ha a három egyenlettel meghatározott három sík általános helyzetű, azaz normálvektoraik lineárisan függetlenek, akkor az egyenletrendszernek egyetlen megoldása van (ld. 2.8. (a) ábra). Például a 2.25. példabeli egyenletrendszernek egyetlen megoldása van: $(x, y, z) = (2, 1, 0)$.

Ha a normálvektorok közt lineáris kapcsolat van, akkor a megoldások száma vagy $0$ vagy végtelen lesz. Tekintsük az
$$\begin{alignedat}{9}
2x &{}+{}& y &{}+{}& 2z &{}={}& 5 \\
x &{}+{}& y &{}+{}& z &{}={}& 3 \\
3x &{}+{}& 2y &{}+{}& 3z &{}={}& 8
\end{alignedat} \quad \text{és az} \quad \begin{alignedat}{9}
2x &{}+{}& y &{}+{}& 2z &{}={}& 5 \\
x &{}+{}& y &{}+{}& z &{}={}& 3 \\
3x &{}+{}& 2y &{}+{}& 3z &{}={}& 9
\end{alignedat}$$
egyenletrendszereket. A normálvektorok mindkettőben egy síkba (de nem egy egyenesbe) esnek, mivel $(2, 1, 2) + (1, 1, 1) = (3, 2, 3) = \mathbf{0}$, így a síkok párhuzamosak egy egyenessel. Az első egyenletrendszer esetén ugyanez a lineáris kapcsolat az egyenletek közt is, azaz az első kettőt kivonva a harmadikból a $0 = 0$ egyenletre jutunk, ami elhagyható, a maradék két sík metszete pedig egyenes (ld. a 2.8 b) ábrát). A második egyenletrendszer esetén a $0 = 1$ egyenletre jutunk, azaz a bal oldalak közti lineáris kapcsolat nincs meg a jobb oldalak közt. Ekkor a síkoknak nincs közös pontjuk (ld. a 2.9. (b) ábrát).

Végül ha a síkok közt vannak párhuzamosak, de nem egybe esők, akkor az egyenletrendszernek nincs megoldása (ld. a 2.9. (a) ábrát), míg ha mindhárom sík egybe esik, a sík pontjai adják az összes megoldást (ld. a 2.8. (c) ábrát).

**2.27. állítás (Sormodell).** *Ha egy $n$-ismeretlenes egyenlet bal oldalán nem minden együttható $0$, akkor az egyenletet kielégítő pontok (azaz az egyenlet megoldásai) egy hipersíkot alkotnak $\mathbb{R}^n$-ben. Ha egy $n$-ismeretlenes egyenletrendszer $m$ ilyen egyenletből áll, akkor az egyenletrendszer megoldása a nekik megfelelő $m$ hipersík közös része $\mathbb{R}^n$-ben.*

Az $m$ egyenlet a skaláris szorzás segítségével tömörebb alakban is fölírható. Az $m \times n$-es $\mathbf{A}$ együtthatómátrixú lineáris egyenletrendszer $i$-edik egyenletének alakja
$$a_{i1}x_1 + a_{i2}x_2 + \cdots + a_{in}x_n = b_i.$$
Ha $\mathbf{a}_{i*}$ jelöli az $\mathbf{A}$ mátrix $i$-edik sorvektorát, és $\mathbf{x}$ az ismeretlenek vektorát, akkor az előző egyenlet a következő alakot ölti:
$$\mathbf{a}_{i*} \cdot \mathbf{x} = b_i. \tag{2.20}$$
Ez különösen akkor lesz érdekes, ha homogén lineáris egyenletrendszereket fogunk vizsgálni, mert ott mindegyik egyenlet $\mathbf{a}_{i*} \cdot \mathbf{x} = 0$ alakot ölt, ami azt jelenti, hogy olyan $\mathbf{x}$ vektort keresünk, mely merőleges az $\mathbf{a}_{i*}$ vektorok mindegyikére.

*2.8. ábra. Konzisztens (megoldható) egyenletrendszerek ábrázolása (a megoldáshalmazt kék szín jelzi). (a) Három általános helyzetű sík: egyetlen megoldás. (b) Egy egyenesen átmenő, de nem csupa azonos sík: végtelen sok megoldás, a megoldások egy egyenest alkotnak. (c) Azonos síkok: végtelen sok megoldás, a megoldások egy síkot alkotnak.*

*2.9. ábra. Nem megoldható egyenletrendszerek szemléltetése. (a) A síkok közül legalább kettő párhuzamos, de nem azonos. (b) Egy egyenessel párhuzamos, de egymással nem párhuzamos és közös egyenest sem tartalmazó három sík.*

### Oszlopmodell: vektor előállítása lineáris kombinációként

E modellben az egyenletrendszerre úgy tekintünk, mint egy olyan vektoregyenletre, amelyben egy vektort kell előállítani adott vektorok lineáris kombinációjaként. Például az
$$\begin{alignedat}{9}
x &{}+{}& y &{}={}& 3 \\
x &{}+{}& 2y &{}={}& 4
\end{alignedat} \quad \text{és az} \quad \begin{bmatrix} 1 \\ 1 \end{bmatrix}x + \begin{bmatrix} 1 \\ 2 \end{bmatrix}y = \begin{bmatrix} 3 \\ 4 \end{bmatrix}.$$

egy egyenletrendszer (ld. 2.26. példa) és egy vele ekvivalens vektoregyenlet. Itt az a feladat, hogy megkeressük az $(1, 1)$ és $(1, 2)$ vektoroknak azt a lineáris kombinációját, amely egyenlő a $(3, 4)$ vektorral.

> *Az oszlopmodell lépései jól nyomon követhetők a SagePlayer oszlopmodell című demonstrációján. Ott saját bővített mátrixokkal is lehet kísérletezni.*

**2.28. példa (Oszlopmodell).** *Ábrázoljuk a 2.26. példában megadott*
$$\begin{alignedat}{9}
x &{}+{}& y &{}={}& 3 \\
x &{}+{}& 2y &{}={}& 4
\end{alignedat} \qquad \begin{alignedat}{9}
x &{}+{}& 2y &{}={}& 3 \\
2x &{}+{}& 4y &{}={}& 7
\end{alignedat} \quad \text{és} \quad \begin{alignedat}{9}
x &{}+{}& 2y &{}={}& 3 \\
2x &{}+{}& 4y &{}={}& 6
\end{alignedat}$$
*egyenletrendszereket az oszlopmodellben!*

*Megoldás.* Az első egyenletrendszer esetén két lineárisan független vektor lineáris kombinációjaként kell előállítani egy harmadik vektort. Ezt szemlélteti a 2.10 ábra. Érdekességként itt is megmutatjuk, hogy az egyenletrendszer megoldásának lépései hogy mutatnak e modellben. Az ekvivalens átalakítások lépései:
$$\begin{alignedat}{9}
x &{}+{}& y &{}={}& 3 \\
x &{}+{}& 2y &{}={}& 4
\end{alignedat} \Rightarrow \begin{alignedat}{9}
x &{}+{}& y &{}={}& 3 \\
&& y &{}={}& 1
\end{alignedat} \Rightarrow \begin{alignedat}{9}
x && &{}={}& 2 \\
&& y &{}={}& 1
\end{alignedat}$$
Vektoros alakban:
$$\begin{bmatrix} 1 \\ 1 \end{bmatrix}x + \begin{bmatrix} 1 \\ 2 \end{bmatrix}y = \begin{bmatrix} 3 \\ 4 \end{bmatrix} \Rightarrow \begin{bmatrix} 1 \\ 0 \end{bmatrix}x + \begin{bmatrix} 1 \\ 1 \end{bmatrix}y = \begin{bmatrix} 3 \\ 1 \end{bmatrix} \Rightarrow \begin{bmatrix} 1 \\ 0 \end{bmatrix}x + \begin{bmatrix} 0 \\ 1 \end{bmatrix}y = \begin{bmatrix} 2 \\ 1 \end{bmatrix}.$$
A második és harmadik egyenletrendszer vektoros alakja
$$\begin{bmatrix} 1 \\ 2 \end{bmatrix}x + \begin{bmatrix} 2 \\ 4 \end{bmatrix}y = \begin{bmatrix} 3 \\ 7 \end{bmatrix}, \quad \text{illetve} \quad \begin{bmatrix} 1 \\ 2 \end{bmatrix}x + \begin{bmatrix} 2 \\ 4 \end{bmatrix}y = \begin{bmatrix} 3 \\ 6 \end{bmatrix}.$$
A 2.11 ábráról szemléletesen is látható, hogy az egyik vektoregyenletnek nincs megoldása, míg a másiknak végtelen sok is van. $\square$

Általánosan kimondható a következő:

**2.29. állítás (Oszlopmodell).** *A 2.20. definícióban megadott (2.18) egyenletrendszer a következő vektoregyenlettel ekvivalens:*
$$\begin{bmatrix} a_{11} \\ a_{21} \\ \vdots \\ a_{m1} \end{bmatrix}x_1 + \begin{bmatrix} a_{12} \\ a_{22} \\ \vdots \\ a_{m2} \end{bmatrix}x_2 + \ldots + \begin{bmatrix} a_{1n} \\ a_{2n} \\ \vdots \\ a_{mn} \end{bmatrix}x_n = \begin{bmatrix} b_1 \\ b_2 \\ \vdots \\ b_m \end{bmatrix}.$$
*Az egyenletrendszer megoldása ekvivalens egy vektoregyenlet megoldásával, ahol az egyenletrendszer konstans tagjaiból álló vektort kell az együtthatómátrix oszlopvektorainak lineáris kombinációjaként előállítani.*

E modell szerint egy egyenletrendszer pontosan akkor oldható meg, ha az együtthatómátrix oszlopvektorainak összes lineáris kombinációjából álló halmazban a konstans tagokból álló vektor is szerepel (ld. 2.22. feladat).

*2.10. ábra. A megoldás lépései az oszlopmodellben.*

*2.11. ábra. Oszlopmodell lineárisan összefüggő vektorok esetén.*

### Feladatok

#### Lineáris egyenletek és egyenletrendszerek

**2.13.•** Melyek lineáris egyenletek az $x$, $y$ és $z$ változókban az alábbiak közül?
- a) $3x - (\ln 2)y + e^3 z = 0.4$  b) $a^2 x - b^2 y = 0$
- c) $xy - yz - zx = 0$  d) $(\sin 1)x + y - \pi z = 0$
- e) $\frac{x}{a} + \frac{y}{b} + \frac{z}{c} = 1$  f) $\frac{1}{x} + \frac{1}{y} + \frac{1}{z} = 1$

Igazoljuk, hogy az alábbi egyenletrendszerek ekvivalensek!

**2.14.** $\begin{cases} x + 3y = 5 \\ y = 1 \end{cases}$ $\quad$ $\begin{cases} x + y = 3 \\ x = 2 \end{cases}$

**2.15.** $\begin{cases} 2x + 3y = 2 \\ 0x + 0y = 3 \end{cases}$ $\quad$ $\begin{cases} x + y = 2 \\ x + y = 7 \end{cases}$

Oldjuk meg (fejben számolva) az alábbi lineáris egyenletrendszereket az $a = 1$, $b = 2$, $c = 3$ paraméterválasztás esetén!

**2.16.** $\begin{cases} (2a - b)x + (3a - c)y = 0 \\ (3b - 2c)x + (b - 2a)y = 0 \end{cases}$

**2.17.** $\begin{cases} (b - a)x + (3a - c)y = 1 \\ (3b - 2c)x + (b - 2a)y = 0 \end{cases}$

**2.18.** $\begin{cases} (b - a)x + (3a - c)y = 1 \\ (3b - 2c)x + (b - 2a)y = 1 \end{cases}$

**2.19.** $\begin{cases} (b - a)x + (3a - c)y = 1 \\ (3b - 2c)x + (c - b)y = 2 \end{cases}$

**2.20.** *Egyenletrendszerek közös megoldása.* Tekintsük az azonos ismeretleneket tartalmazó $\mathcal{E}_1$ és $\mathcal{E}_2$ egyenletrendszereket. Legyen ezek megoldáshalmaza $\mathcal{M}_1$, illetve $\mathcal{M}_2$. Mutassuk meg, hogy ha $\mathcal{E}$ az $\mathcal{E}_1$ és $\mathcal{E}_2$ egyenletrendszerek egyesítése, azaz $\mathcal{E} = \mathcal{E}_1 \cup \mathcal{E}_2$, és $\mathcal{M}$ az $\mathcal{E}$ megoldáshalmaza, akkor $\mathcal{M}$ az $\mathcal{M}_1$ és $\mathcal{M}_2$ közös része, azaz $\mathcal{M} = \mathcal{M}_1 \cap \mathcal{M}_2$. Vizsgáljuk meg ezt az állítást az alábbi esetekben:
- a) $\mathcal{E}_1 = \{x + y = 2\}$, $\mathcal{E}_2 = \{x - y = 0\}$;
- b) $\mathcal{E}_1 = \{x + y = 2, x - y = 0\}$, $\mathcal{E}_2 = \{x - y = 0\}$;
- c) $\mathcal{E}_1 = \{x + y = 2, x - y = 0\}$, $\mathcal{E}_2 = \{x - y = 1\}$;
- d) $\mathcal{E}_1 = \{x + y = 2, x - y = 0\}$, $\mathcal{E}_2 = \{0x + 0y = 0\}$;
- e) $\mathcal{E}_1$ tetszőleges egyenletrendszer, $\mathcal{E}_2 = \{0 = 0\}$.

#### Sormodell, oszlopmodell

**2.21.•** *Sor és oszlopmodell.* Rajzoljuk fel a következő két egyenletrendszerhez tartozó sormodell és oszlopmodell szerinti ábrát!
- a) $\begin{cases} 2x + 3y = 7 \\ 3x - 2y = 4 \end{cases}$  b) $\begin{cases} 2x + 4y = 3 \\ 3x + 6y = 4 \end{cases}$

**2.22.** *Sor- és az oszlopmodell 3D-ben.* Vizsgáljuk meg az alábbi két – azonos együtthatómátrixú – egyenletrendszer megoldhatóságát a sor- és az oszlopmodellben:
$$\begin{alignedat}{9}
x &{}+{}& y &{}+{}& 2z &{}={}& 3 \\
x &{}+{}& 2y &{}+{}& 4z &{}={}& 3 \\
3x &{}+{}& 4y &{}+{}& 8z &{}={}& 9
\end{alignedat} \qquad \begin{alignedat}{9}
x &{}+{}& y &{}+{}& 2z &{}={}& 3 \\
x &{}+{}& 2y &{}+{}& 4z &{}={}& 3 \\
3x &{}+{}& 4y &{}+{}& 8z &{}={}& 1
\end{alignedat}$$

**2.23.** *Sor és oszlopmodell $m \neq n$ esetén.* Vizsgáljuk meg az alábbi három egyenletrendszer megoldhatóságát a sor- és az oszlopmodellben:
- a) $\begin{cases} x + y = 3 \\ x + y = 4 \\ x + 3y = 5 \end{cases}$  b) $\begin{cases} x + y = 3 \\ x + 2y = 4 \\ x + 3y = 5 \end{cases}$  c) $\begin{cases} x + y = 3 \\ x + 2y = 3 \\ x + 3y = 5 \end{cases}$

**2.24.•** *Igaz – hamis.* Mely állítások igazak, melyek hamisak az alábbiak közül?
- a) Ha egy $n$-ismeretlenes egyenletrendszer olyan hipersíkok egyenleteiből áll, melyek közt van két párhuzamos, akkor az egyenletrendszer nem oldható meg.
- b) Ha egy $n$-ismeretlenes egyenletrendszer nem oldható meg, akkor az egyenletek olyan hipersíkok egyenletei, melyek közt van két párhuzamos, de nem azonos hipersík.
- c) Ha egy $n$-ismeretlenes egyenletrendszer csak két egyenletből áll, akkor az oszlopmodell szerint pontosan akkor oldható meg tetszőleges jobb oldal esetén, ha a vektoregyenlet bal oldalán szereplő vektorok közt van kettő lineárisan független.

**2.25.•** Egészítsük ki az alábbi állításokat úgy, hogy igazak legyenek!
- a) Egy két egyenletből álló háromismeretlenes egyenletrendszer sormodellje szerinti ábra a(z) ..-dimenziós térben .. darab ......ból/ből áll, melyek ha .............., akkor az egyenletrendszernek nincs megoldása, egyébként megoldásainak száma .... Oszlopmodellje a(z) ..-dimenziós térben .. darab ......ból/ből áll.
- b) Egy három egyenletből álló kétismeretlenes egyenletrendszer sormodellje szerinti ábra a(z) ..-dimenziós térben .. darab ..........ból/ből áll, míg az oszlopmodellje a ..-dimenziós térben .. darab ...........ból/ből áll.
- c) Egy négy egyenletből álló ötismeretlenes egyenletrendszer sormodellje szerinti ábra a(z) ..-dimenziós térben .. darab ...........ból/ből áll. Oszlopmodellje a(z) ..-dimenziós térben .. darab ........ból/ből áll.

## Megoldás kiküszöböléssel

*E fejezetben alaposabban megismerjük a kisméretű egyenletrendszerek megoldásában hasznos, a kiküszöbölésre épülő klasszikus megoldási módszert.*

### Elemi sorműveletek és a lépcsős alak

A lineáris egyenletrendszerek egyik megoldási módszerének lényege, hogy ekvivalens átalakításokkal olyan alakra hozzuk az egyenletrendszert, melyből – visszahelyettesítések után, vagy azok nélkül – azonnal leolvasható az eredmény. Az átalakításokat praktikus okokból a bővített mátrixon hajtjuk végre.[^3]

[^3]: *Lineáris egyenletrendszerek felírása és megoldása már időszámításunk előtt 300 körül babiloni iratokban szerepelt. Az első századra teszik a kínai Jiǔzhāng Suànshù (tradicionális jelekkel: 九章算術, egyszerűsített jelekkel: 九章算术) című mű megjelenését, mely az előző ezer évben összegyűlt matematikai tudást foglalja össze (címének magyar fordítása „A matematikai művészet kilenc fejezete" vagy „Kilenc fejezet a matematikai eljárásokról" lehet). E műben már a kiküszöbölés (azaz a Gauss-elimináció) néven ismert technikát alkalmazzák lineáris egyenletrendszer megoldására. A két fenti műben szereplő egyenletrendszerek, és további történeti részletek olvashatók a The MacTutor History of Mathematics archive című weboldalon.*

A 2.23. tételben felsorolt első három ekvivalens átalakításnak megfelelő mátrixtranszformációk az elemi sorműveletek:

**2.30. definíció (Elemi sorműveletek).** *Egy mátrix sorain végzett alábbi műveleteket elemi sorműveleteknek nevezzük:*
1. *Sorcsere: két sor cseréje.*
2. *Beszorzás: egy sor beszorzása egy nemnulla számmal.*
3. *Hozzáadás: egy sorhoz egy másik sor konstansszorosának hozzáadása.*

Természetesen egy sort el is oszthatunk egy nemnulla $c$ számmal, hisz az az $1/c$-vel való beszorzással egyenértékű. Hasonlóképp levonhatjuk egy sorból egy másik sor $c$-szeresét, hisz az a $-c$-szeresének hozzáadásával ekvivalens. Az elemi sorműveleteket más feladatok megoldásában is használjuk, ahol a mátrix mérete nem változhat, ezért a zérussor elhagyását nem szokás elemi sorműveletnek tekinteni. Az elemi sorműveletek mintájára elemi oszlopműveletek is definiálhatók. Az elemi átalakításokra a következő jelöléseket fogjuk használni:
1. $S_i \leftrightarrow S_j$: az $i$-edik és a $j$-edik sorok cseréje (oszlopcserénél $O_i \leftrightarrow O_j$).
2. $cS_i$: az $i$-edik sor beszorzása $c$-vel ($cO_i$).
3. $S_i + cS_j$: a $j$-edik sor $c$-szeresének az $i$-edik sorhoz adása ($O_i + cO_j$).

Az egyenletrendszer megoldásában az együtthatómátrix eddig látott átlós vagy háromszögszerű alakra való hozása lesz a kulcslépés.

**2.31. definíció (Lépcsős alak).** *Egy mátrix lépcsős, vagy sorlépcsős alakú, ha kielégíti a következő két feltételt:*
1. *a csupa 0-ból álló sorok (ha egyáltalán vannak) a mátrix utolsó sorai;*
2. *bármely két egymás után következő nem-0 sorban az alsó sor elején (legalább eggyel) több 0 van, mint a fölötte lévő sor elején.*

*A nemnulla sorok első zérustól különböző elemének* főelem *(vezérelem vagy pivotelem), az ilyen elem oszlopának* főoszlop *(bázisoszlop) a neve.*

A következő mátrixok lépcsős alakúak:
$$\begin{bmatrix} 3 & 2 \\ 0 & 4 \end{bmatrix}, \quad \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}, \quad \begin{bmatrix} 1 & -2 & 3 & -4 \\ 0 & 0 & -5 & 6 \\ 0 & 0 & 0 & 0 \end{bmatrix}, \quad \begin{bmatrix} 0 & 1 & 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & 1 & 0 & 1 \\ 0 & 0 & 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 0 & 0 & 0 \end{bmatrix}.$$

### Gauss-módszer

A *Gauss-módszer*, más néven *Gauss-kiküszöbölés* vagy *Gauss-elimináció* a lineáris egyenletrendszerek megoldásának egy módszere. Lényege, hogy a lineáris egyenletrendszer bővített mátrixát elemi sorműveletekkel lépcsős alakra hozzuk, és abból visszahelyettesítéssel meghatározzuk a megoldás általános alakját. A módszer könnyen algoritmizálható, ha sorban haladunk az oszlopokon. A módszert már használtuk a 2.25. példa első megoldásában.

**2.32. példa (Gauss-módszer, egy megoldás).** *Oldjuk meg az alábbi egyenletrendszert Gauss-módszerrel:*
$$\begin{alignedat}{9}
x &{}+{}& y &{}+{}& 2z &{}={}& 0 \\
2x &{}+{}& 2y &{}+{}& 3z &{}={}& 2 \\
x &{}+{}& 3y &{}+{}& 3z &{}={}& 4 \\
x &{}+{}& 2y &{}+{}& z &{}={}& 5
\end{alignedat}$$

*Megoldás.* Írjuk fel az egyenletrendszer bővített mátrixát, és *oszloponként haladva* küszöböljük ki – nullázzuk ki – a főelemek alatti elemeket!
$$\left[\begin{array}{ccc|c} 1 & 1 & 2 & 0 \\ 2 & 2 & 3 & 2 \\ 1 & 3 & 3 & 4 \\ 1 & 2 & 1 & 5 \end{array}\right] \xrightarrow{\substack{S_2 - 2S_1 \\ S_3 - S_1 \\ S_4 - S_1}} \left[\begin{array}{ccc|c} 1 & 1 & 2 & 0 \\ 0 & 0 & -1 & 2 \\ 0 & 2 & 1 & 4 \\ 0 & 1 & -1 & 5 \end{array}\right] \xrightarrow{S_2 \leftrightarrow S_3} \left[\begin{array}{ccc|c} 1 & 1 & 2 & 0 \\ 0 & 2 & 1 & 4 \\ 0 & 0 & -1 & 2 \\ 0 & 1 & -1 & 5 \end{array}\right] \xrightarrow{S_4 - \frac{1}{2}S_2}$$
$$\left[\begin{array}{ccc|c} 1 & 1 & 2 & 0 \\ 0 & 2 & 1 & 4 \\ 0 & 0 & -1 & 2 \\ 0 & 0 & -\frac{3}{2} & 3 \end{array}\right] \xrightarrow{S_4 - \frac{3}{2}S_3} \left[\begin{array}{ccc|c} 1 & 1 & 2 & 0 \\ 0 & 2 & 1 & 4 \\ 0 & 0 & -1 & 2 \\ 0 & 0 & 0 & 0 \end{array}\right] \longrightarrow \begin{alignedat}{9}
x &{}+{}& y &{}+{}& 2z &{}={}& 0 \\
&& 2y &{}+{}& z &{}={}& 4 \\
&& && -z &{}={}& 2
\end{alignedat}$$
A harmadik egyenletből $z = -2$, ezt a másodikba helyettesítve $y = 3$, ezeket az elsőbe helyettesítve kapjuk, hogy $x = 1$, azaz az egyetlen megoldás $(x, y, z) = (1, 3, -2)$. $\square$

Mit csinálunk akkor, ha a lépcsős alak szerint kevesebb a főelemek, mint az oszlopok száma? Egyelőre bevezetünk két elnevezést, melyek jelentése hamarosan világos lesz: az egyenletrendszer azon változóit, melyek főelemek oszlopaihoz tartoznak, *kötött változóknak,* míg az összes többi változót *szabad változónak* nevezzük.

**2.33. példa (Gauss-módszer, végtelen sok megoldás).** *Oldjuk meg az alábbi egyenletrendszert Gauss-módszerrel:*
$$\begin{alignedat}{9}
x_1 &{}+{}& 2x_2 &{}+{}& x_3 &{}+{}& 2x_4 &{}+{}& x_5 &{}={}& 1 \\
x_1 &{}+{}& 2x_2 &{}+{}& 3x_3 &{}+{}& 3x_4 &{}+{}& x_5 &{}={}& 0 \\
3x_1 &{}+{}& 6x_2 &{}+{}& 7x_3 &{}+{}& 8x_4 &{}+{}& 3x_5 &{}={}& 1
\end{alignedat}$$

*Megoldás.* Írjuk fel az egyenletrendszer bővített mátrixát, és oszloponként haladva küszöböljük ki a főelemek alatti elemeket!
$$\left[\begin{array}{ccccc|c} 1 & 2 & 1 & 2 & 1 & 1 \\ 1 & 2 & 3 & 3 & 1 & 0 \\ 3 & 6 & 7 & 8 & 3 & 1 \end{array}\right] \xrightarrow{\substack{S_2 - S_1 \\ S_3 - 3S_1}} \left[\begin{array}{ccccc|c} 1 & 2 & 1 & 2 & 1 & 1 \\ 0 & 0 & 2 & 1 & 0 & -1 \\ 0 & 0 & 4 & 2 & 0 & -2 \end{array}\right] \xrightarrow{S_3 - 2S_2}$$
$$\left[\begin{array}{ccccc|c} 1 & 2 & 1 & 2 & 1 & 1 \\ 0 & 0 & 2 & 1 & 0 & -1 \\ 0 & 0 & 0 & 0 & 0 & 0 \end{array}\right] \longrightarrow \begin{alignedat}{9}
x_1 &{}+{}& 2x_2 &{}+{}& x_3 &{}+{}& 2x_4 &{}+{}& x_5 &{}={}& 1 \\
&& && 2x_3 &{}+{}& x_4 && &{}={}& -1
\end{alignedat}$$
Az egyenletrendszer kötött változói a lépcsős alak főoszlopaihoz tartozó változók, azaz $x_1$ és $x_3$. A szabad változók: $x_2$, $x_4$, $x_5$. A szabad változóknak tetszőleges értékeket adhatunk, a kötöttek értéke kifejezhető velük. Legyen például a szabad változók értéke $x_2 = s$, $x_4 = t$, $x_5 = u$. Ezek behelyettesítése után a fenti egyenletek közül először a másodikból kifejezzük $x_3$-at, majd azt behelyettesítjük az elsőbe, ahonnan kifejezzük az $x_1$-et, azaz a fenti egyenletekből kifejezzük a kötött változókat:
$$\begin{aligned}
x_1 &= \tfrac{3}{2} - 2s - \tfrac{3}{2}t - u \\
x_3 &= -\tfrac{1}{2} - \tfrac{1}{2}t
\end{aligned}$$
Innen az egyenletrendszer megoldása:
$$(x_1, x_2, x_3, x_4, x_5) = \left(\tfrac{3}{2} - 2s - \tfrac{3}{2}t - u, \; s, \; -\tfrac{1}{2} - \tfrac{1}{2}t, \; t, \; u\right),$$
vagy mátrixjelöléssel
$$\begin{bmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \\ x_5 \end{bmatrix} = \begin{bmatrix} \tfrac{3}{2} - 2s - \tfrac{3}{2}t - u \\ s \\ -\tfrac{1}{2} - \tfrac{1}{2}t \\ t \\ u \end{bmatrix} = \begin{bmatrix} \tfrac{3}{2} \\ 0 \\ -\tfrac{1}{2} \\ 0 \\ 0 \end{bmatrix} + s\begin{bmatrix} -2 \\ 1 \\ 0 \\ 0 \\ 0 \end{bmatrix} + t\begin{bmatrix} -\tfrac{3}{2} \\ 0 \\ -\tfrac{1}{2} \\ 1 \\ 0 \end{bmatrix} + u\begin{bmatrix} -1 \\ 0 \\ 0 \\ 0 \\ 1 \end{bmatrix}.$$
Később különösen ez utóbbi felírásmód lesz hasznos, melyben vektorok lineáris kombinációja szerepel. $\square$

Világos, hogy e példa utolsó alakjában a szabad változóknak tetszőleges értéket adhatunk, melyből a kötött változók egyértelműen kifejezhetők, és így e módszerrel az egyenletrendszer összes megoldását megkaptuk. Az ilyen módon megadott megoldást az egyenletrendszer *általános megoldásának,* a konkrét paraméterértékekhez tartozó megoldásokat *partikuláris megoldásoknak* nevezzük. Például az előző példabeli egyenletrendszer egy partikuláris megoldása az $s = 0$, $t = 1$, $u = 2$ értékekhez tartozó
$$(x_1, x_2, x_3, x_4, x_5) = (-2, 0, -1, 1, 2).$$

Kérdés, hogy e módszerrel minden lineáris egyenletrendszer megoldáshalmaza meghatározható-e? A választ a következő tétel adja:

**2.34. tétel (Lépcsős alakra hozás).** *Bármely mátrix elemi sorműveletekkel lépcsős alakra hozható.*

*Bizonyítás.* Tekintsünk egy tetszőleges $m \times n$-es mátrixot. A következő eljárás egyes lépéseiben a mátrixnak le fogjuk takarni egy-egy sorát vagy oszlopát. Az egyszerűség kedvéért a letakarás után keletkezett mátrix sorainak és oszlopainak számát ismét $m$ és $n$ fogja jelölni, $a_{ij}$ pedig a letakarások után maradt mátrix $i$-edik sorának $j$-edik elemét.
1. Ha az első oszlopban csak $0$ elemek állnak, takarjuk le ezt az oszlopot, és tekintsük a maradék mátrixot. Ha ennek első oszlopában ismét csak $0$ elemek vannak, azt is takarjuk le, és ezt addig folytassuk, míg egy olyan oszlopot nem találunk, amelyben van nem $0$ elem. Ha ilyen oszlopot *nem találunk,* az eljárásnak vége, a mátrix lépcsős alakú.
2. Ha az első oszlop első sorában álló elem $0$, akkor cseréljük ki e sort egy olyannal, melynek első eleme nem $0$. Így olyan mátrixot kapunk, amelyben $a_{11} \neq 0$.
3. Tekintsük az $i$-edik sort $i = 2$-től $i = m$-ig. Ha az $i$-edik sor első eleme $a_{i1} \neq 0$, akkor az első sor $-a_{i1}/a_{11}$-szeresét adjuk hozzá, azaz hajtsuk végre az $S_i - \frac{a_{i1}}{a_{11}}S_1$ elemi átalakítást. Mivel $a_{i1} - \frac{a_{i1}}{a_{11}}a_{11} = 0$, ezért e lépés után az $a_{11}$ alatti elemek mind $0$-k lesznek.
4. A fenti átalakítás után takarjuk le az első sort és az első oszlopot. Ha ekkor *nem marad* a mátrixban több sor, vége az eljárásnak, a korábban letakart részeket feltárva megkaptuk a lépcsős alakot. Egyébként ugorjunk vissza az 1. lépéshez, és folytassuk az eljárást.

Világos, hogy ez az eljárás véges sok lépésben véget ér, melynek eredményeként eljutunk az eredeti mátrix egy lépcsős alakjához. $\square$

Egy *inhomogén lineáris egyenletrendszerhez tartozó homogén lineáris egyenletrendszeren* azt a homogén egyenletrendszert értjük, melyet az inhomogénből a konstans tagok $0$-ra változtatásával kapunk.

**2.35. példa (Homogén lineáris egyenletrendszer megoldása).** *Oldjuk meg a 2.33. példabeli egyenletrendszerhez tartozó*
$$\begin{alignedat}{9}
x_1 &{}+{}& 2x_2 &{}+{}& x_3 &{}+{}& 2x_4 &{}+{}& x_5 &{}={}& 0 \\
x_1 &{}+{}& 2x_2 &{}+{}& 3x_3 &{}+{}& 3x_4 &{}+{}& x_5 &{}={}& 0 \\
3x_1 &{}+{}& 6x_2 &{}+{}& 7x_3 &{}+{}& 8x_4 &{}+{}& 3x_5 &{}={}& 0
\end{alignedat}$$
*homogén lineáris egyenletrendszert.*

*Megoldás.* Mivel homogén lineáris egyenletrendszerről van szó, a megoldáshoz szükségtelen a bővített mátrixot használni, hisz annak utolsó oszlopa csak nullákból áll, így az elemi sorműveletek közben

nem változik. Az együtthatómátrix lépcsős alakja ugyanazokkal a sorműveletekkel megkapható, mint a 2.33. példa megoldásában, azaz
$$\begin{bmatrix} 1 & 2 & 1 & 2 & 1 \\ 1 & 2 & 3 & 3 & 1 \\ 3 & 6 & 7 & 8 & 3 \end{bmatrix} \longrightarrow \begin{bmatrix} 1 & 2 & 1 & 2 & 1 \\ 0 & 0 & 2 & 1 & 0 \\ 0 & 0 & 0 & 0 & 0 \end{bmatrix} \longrightarrow \begin{alignedat}{9}
x_1 &{}+{}& 2x_2 &{}+{}& x_3 &{}+{}& 2x_4 &{}+{}& x_5 &{}={}& 0 \\
&& && 2x_3 &{}+{}& x_4 && &{}={}& 0
\end{alignedat}$$
Innen a megoldás is ugyanúgy kapható meg, sőt, ugyanaz a lineáris kombináció szerepel benne a konstans tagok nélkül:
$$(x_1, x_2, x_3, x_4, x_5) = \left(-2s - \tfrac{3}{2}t - u, \; s, \; -\tfrac{1}{2}t, \; t, \; u\right),$$
vagy mátrixjelöléssel
$$\begin{bmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \\ x_5 \end{bmatrix} = \begin{bmatrix} -2s - \tfrac{3}{2}t - u \\ s \\ -\tfrac{1}{2}t \\ t \\ u \end{bmatrix} = s\begin{bmatrix} -2 \\ 1 \\ 0 \\ 0 \\ 0 \end{bmatrix} + t\begin{bmatrix} -\tfrac{3}{2} \\ 0 \\ -\tfrac{1}{2} \\ 1 \\ 0 \end{bmatrix} + u\begin{bmatrix} -1 \\ 0 \\ 0 \\ 0 \\ 1 \end{bmatrix}.$$
A homogén és inhomogén egyenletrendszerek e példából sejthető kapcsolatára még visszatérünk a 3.16. tételben. $\square$

Az egyenletrendszer megoldása tehát geometriailag egy alakzat implicit alakjából az explicit alak fölírását jelenti.

**2.36. példa (Síkok metszésvonalának meghatározása).** *Határozzuk meg az alábbi két sík metszésvonalának explicit (paraméteres) alakját!*
$$\begin{alignedat}{9}
x &{}+{}& y &{}+{}& z &{}={}& 1 \\
3x &{}+{}& 4y && &{}={}& 2
\end{alignedat}$$

*Megoldás.* A fenti egyenletekkel megadott két sík metszésvonalának meghatározásához, pontosabban a metszésvonal explicit, paraméteres egyenletrendszerének felírásához egyszerűen meg kell oldani a két egyenletből álló egyenletrendszert:
$$\left[\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 3 & 4 & 0 & 2 \end{array}\right] \xrightarrow{S_2 - 3S_1} \left[\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & 1 & -3 & -1 \end{array}\right] \longrightarrow \begin{alignedat}{9}
x &{}+{}& y &{}+{}& z &{}={}& 1 \\
&& y &{}-{}& 3z &{}={}& -1
\end{alignedat}$$
Ebből $z = t$ paraméterválasztással $y = -1 + 3t$ és $x = 2 - 4t$, azaz
$$(x, y, z) = (-4t + 2, 3t - 1, t) = (2, -1, 0) + t(-4, 3, 1),$$
vagy mátrixjelöléssel
$$\begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 2 \\ -1 \\ 0 \end{bmatrix} + t\begin{bmatrix} -4 \\ 3 \\ 1 \end{bmatrix}. \qquad \square$$

### Redukált lépcsős alak

A visszahelyettesítés lépése kihagyható, ha folytatjuk a kiküszöbölést, mint azt már láttuk a 2.25. példában.

**2.37. definíció (Redukált lépcsős alak).** *Egy mátrix redukált lépcsős, vagy redukált sorlépcsős alakú, ha kielégíti a következő feltételeket:*
1. *lépcsős alakú;*
2. *minden főelem egyenlő 1-gyel;*
3. *a főelemek oszlopaiban a főelemeken kívül minden elem 0;*

*A főelemet itt* vezéregyesnek *vagy vezető egyesnek is szokás nevezni.*

Például a következő mátrixok redukált lépcsős alakúak:
$$\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}, \quad \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}, \quad \begin{bmatrix} 1 & -2 & 0 & -4 \\ 0 & 0 & 1 & 6 \\ 0 & 0 & 0 & 0 \end{bmatrix}, \quad \begin{bmatrix} 0 & 1 & 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 1 & 0 & 1 \\ 0 & 0 & 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 0 & 0 & 0 \end{bmatrix}.$$

Minden valós, vagy racionális elemű mátrix redukált lépcsős alakra hozható, azonban az egészegyütthatós mátrixok általában nem, ha az egészeken belül akarunk maradni. Azonban az egészegyütthatós mátrixok is redukált lépcsős alakra hozhatók a racionálisok számkörében.

**2.38. példa (Redukált lépcsős alakra hozás).** *Hozzuk redukált lépcsős alakra a következő mátrixot!*
$$\begin{bmatrix} 1 & 3 & 0 \\ 1 & 1 & 2 \\ 2 & 2 & 4 \end{bmatrix}$$

*Megoldás.* Egy lehetséges megoldás:
$$\begin{bmatrix} 1 & 3 & 0 \\ 1 & 1 & 2 \\ 2 & 2 & 4 \end{bmatrix} \xrightarrow{\substack{S_2 - S_1 \\ S_3 - 2S_1}} \begin{bmatrix} 1 & 3 & 0 \\ 0 & -2 & 2 \\ 0 & -4 & 4 \end{bmatrix} \xrightarrow{-\frac{1}{2}S_2}$$
$$\begin{bmatrix} 1 & 3 & 0 \\ 0 & 1 & -1 \\ 0 & -4 & 4 \end{bmatrix} \xrightarrow{S_3 + 4S_2} \begin{bmatrix} 1 & 3 & 0 \\ 0 & 1 & -1 \\ 0 & 0 & 0 \end{bmatrix} \xrightarrow{S_1 - 3S_2} \begin{bmatrix} 1 & 0 & 3 \\ 0 & 1 & -1 \\ 0 & 0 & 0 \end{bmatrix}.$$
Egy másik lehetséges megoldás, mely *azonos megoldásra vezet*!
$$\begin{bmatrix} 1 & 3 & 0 \\ 1 & 1 & 2 \\ 2 & 2 & 4 \end{bmatrix} \xrightarrow{S_1 \leftrightarrow S_2} \begin{bmatrix} 1 & 1 & 2 \\ 1 & 3 & 0 \\ 2 & 2 & 4 \end{bmatrix} \xrightarrow{\substack{S_2 - S_1 \\ S_3 - 2S_1}} \begin{bmatrix} 1 & 1 & 2 \\ 0 & 2 & -2 \\ 0 & 0 & 0 \end{bmatrix} \xrightarrow{\frac{1}{2}S_2}$$
$$\begin{bmatrix} 1 & 1 & 2 \\ 0 & 1 & -1 \\ 0 & 0 & 0 \end{bmatrix} \xrightarrow{S_1 - S_2} \begin{bmatrix} 1 & 0 & 3 \\ 0 & 1 & -1 \\ 0 & 0 & 0 \end{bmatrix}. \qquad \square$$

### Gauss–Jordan-módszer

A *Gauss–Jordan-módszer* (*Gauss–Jordan-kiküszöbölés, Gauss–Jordan-elimináció*) a lineáris egyenletrendszerek olyan megoldási módszere, melyben a bővített mátrixot elemi sorműveletekkel *redukált* lépcsős alakra hozzuk. Innen leolvasható a megoldás.

**2.39. példa (Gauss–Jordan-módszer, egy megoldás).** *Oldjuk meg a 2.32. példában felírt egyenletrendszert Gauss–Jordan-módszerrel!*

*Megoldás.* Felírjuk az egyenletrendszer bővített mátrixát, és a 2.32. példában látott módon eljutunk a lépcsős alakhoz, majd folytatjuk, először beszorozzuk a sorokat a főátlóbeli elem reciprokával, majd a harmadik oszlopot, végül a másodikat kinullázzuk:
$$\left[\begin{array}{ccc|c} 1 & 1 & 2 & 0 \\ 2 & 2 & 3 & 2 \\ 1 & 3 & 3 & 4 \\ 1 & 2 & 1 & 5 \end{array}\right] \dashrightarrow \left[\begin{array}{ccc|c} 1 & 1 & 2 & 0 \\ 0 & 2 & 1 & 4 \\ 0 & 0 & -1 & 2 \\ 0 & 0 & 0 & 0 \end{array}\right] \xrightarrow{\substack{\frac{1}{2}S_2 \\ -S_3}} \left[\begin{array}{ccc|c} 1 & 1 & 2 & 0 \\ 0 & 1 & \frac{1}{2} & 2 \\ 0 & 0 & 1 & -2 \\ 0 & 0 & 0 & 0 \end{array}\right] \xrightarrow{\substack{S_2 - \frac{1}{2}S_3 \\ S_1 - 2S_3}}$$
$$\left[\begin{array}{ccc|c} 1 & 1 & 0 & 4 \\ 0 & 1 & 0 & 3 \\ 0 & 0 & 1 & -2 \\ 0 & 0 & 0 & 0 \end{array}\right] \xrightarrow{S_1 - S_2} \left[\begin{array}{ccc|c} 1 & 0 & 0 & 1 \\ 0 & 1 & 0 & 3 \\ 0 & 0 & 1 & -2 \\ 0 & 0 & 0 & 0 \end{array}\right] \longrightarrow \begin{alignedat}{9}
x && && &{}={}& 1 \\
&& y && &{}={}& 3 \\
&& && z &{}={}& -2
\end{alignedat}$$
Tehát az egyenletrendszer egyetlen megoldása $(x, y, z) = (1, 3, -2)$. $\square$

**2.40. példa (Gauss–Jordan-módszer, végtelen sok megoldás).** *Oldjuk meg a 2.33. példabeli egyenletrendszert Gauss–Jordan-módszerrel!*

*Megoldás.* A 2.33. példában eljutottunk egy lépcsős alakig. Az eljárást folytatjuk, míg a redukált lépcsős alakra nem jutunk.
$$\left[\begin{array}{ccccc|c} 1 & 2 & 1 & 2 & 1 & 1 \\ 1 & 2 & 3 & 3 & 1 & 0 \\ 3 & 6 & 7 & 8 & 3 & 1 \end{array}\right] \dashrightarrow \left[\begin{array}{ccccc|c} 1 & 2 & 1 & 2 & 1 & 1 \\ 0 & 0 & 2 & 1 & 0 & -1 \\ 0 & 0 & 0 & 0 & 0 & 0 \end{array}\right] \xrightarrow{\substack{\frac{1}{2}S_2 \\ S_1 - S_2}}$$
$$\left[\begin{array}{ccccc|c} 1 & 2 & 0 & 3/2 & 1 & 3/2 \\ 0 & 0 & 1 & 1/2 & 0 & -1/2 \\ 0 & 0 & 0 & 0 & 0 & 0 \end{array}\right] \longrightarrow \begin{aligned}
x_1 + 2x_2 + \tfrac{3}{2}x_4 + x_5 &= \tfrac{3}{2} \\
x_3 + \tfrac{1}{2}x_4 &= -\tfrac{1}{2}
\end{aligned}$$
Az $x_2 = s$, $x_4 = t$, $x_5 = u$ helyettesítés és az $x_1$ és $x_3$ változók kifejezése után a megoldás vektor- és mátrixjelöléssel:
$$(x_1, x_2, x_3, x_4, x_5) = \left(\tfrac{3}{2} - 2s - \tfrac{3}{2}t - u, \; s, \; -\tfrac{1}{2} - \tfrac{1}{2}t, \; t, \; u\right),$$
$$\begin{bmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \\ x_5 \end{bmatrix} = \begin{bmatrix} \tfrac{3}{2} - 2s - \tfrac{3}{2}t - u \\ s \\ -\tfrac{1}{2} - \tfrac{1}{2}t \\ t \\ u \end{bmatrix} = \begin{bmatrix} \tfrac{3}{2} \\ 0 \\ -\tfrac{1}{2} \\ 0 \\ 0 \end{bmatrix} + s\begin{bmatrix} -2 \\ 1 \\ 0 \\ 0 \\ 0 \end{bmatrix} + t\begin{bmatrix} -\tfrac{3}{2} \\ 0 \\ -\tfrac{1}{2} \\ 1 \\ 0 \end{bmatrix} + u\begin{bmatrix} -1 \\ 0 \\ 0 \\ 0 \\ 1 \end{bmatrix} \qquad \square$$

### A redukált lépcsős alak egyértelműsége

Fontos következményei vannak a következő tételnek:

**2.41. tétel (A redukált lépcsős alak egyértelmű).** *Minden mátrix redukált lépcsős alakra hozható, amely egyértelmű.*

*Bizonyítás.* A redukált lépcsős alak létezését már beláttuk, az egyértelműségre indirekt bizonyítást adunk. Tegyük fel, hogy van egy olyan mátrix, mely elemi sorműveletekkel két különböző redukált lépcsős alakra hozható. Jelölje ezeket $\mathbf{R}$ és $\mathbf{S}$. Mivel mindketten ugyanazzal a mátrixszal ekvivalensek, elemi sorműveletekkel egymásba alakíthatóak, vagyis egymással is ekvivalensek. Válasszuk ki oszlopaik közül azt a balról első oszlopot, melyben különböznek, valamint az összes előttük álló vezéroszlopot. Az így kapott mátrixokat jelölje $\hat{\mathbf{R}}$ és $\hat{\mathbf{S}}$. Tehát $\hat{\mathbf{R}} \neq \hat{\mathbf{S}}$, mert különböznek az utolsó oszlopukban. Például, ha
$$\mathbf{R} = \begin{bmatrix} 1 & 2 & 0 & 4 & 5 \\ 0 & 0 & 1 & 2 & 3 \\ 0 & 0 & 0 & 0 & 0 \end{bmatrix} \quad \text{és} \quad \mathbf{S} = \begin{bmatrix} 1 & 2 & 0 & 4 & 5 \\ 0 & 0 & 1 & 9 & 3 \\ 0 & 0 & 0 & 0 & 0 \end{bmatrix},$$
akkor
$$\hat{\mathbf{R}} = \begin{bmatrix} 1 & 0 & 4 \\ 0 & 1 & 2 \\ 0 & 0 & 0 \end{bmatrix} \quad \text{és} \quad \hat{\mathbf{S}} = \begin{bmatrix} 1 & 0 & 4 \\ 0 & 1 & 9 \\ 0 & 0 & 0 \end{bmatrix}.$$
Ez az oszlop, melyben különböznek, nem lehet az első oszlop, mert ha az a zérusvektor az egyik mátrixban, akkor a sorekvivalencia miatt a másikban is az lenne, egyébként pedig ez az oszlop mindenképp az első helyen 1-est, alatta 0-kat tartalmaz.

Tekintsük az így kapott $\hat{\mathbf{R}}$, $\hat{\mathbf{S}}$ mátrixokat egy-egy egyenletrendszer bővített együtthatómátrixának. Ezek általános alakja így a következő:
$$\hat{\mathbf{R}} = \left[\begin{array}{cccc|c} 1 & 0 & \ldots & 0 & r_1 \\ 0 & 1 & \ldots & 0 & r_2 \\ \vdots & \vdots & \ddots & \vdots & \vdots \\ 0 & 0 & \ldots & 1 & r_k \\ 0 & 0 & \ldots & 0 & 0 \\ \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & \ldots & 0 & 0 \end{array}\right] \quad \text{vagy} \quad \hat{\mathbf{R}} = \left[\begin{array}{cccc|c} 1 & 0 & \ldots & 0 & 0 \\ 0 & 1 & \ldots & 0 & 0 \\ \vdots & \vdots & \ddots & \vdots & \vdots \\ 0 & 0 & \ldots & 1 & 0 \\ 0 & 0 & \ldots & 0 & 1 \\ 0 & 0 & \ldots & 0 & 0 \\ \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & \ldots & 0 & 0 \end{array}\right] \quad \text{és}$$
$$\hat{\mathbf{S}} = \left[\begin{array}{cccc|c} 1 & 0 & \ldots & 0 & s_1 \\ 0 & 1 & \ldots & 0 & s_2 \\ \vdots & \vdots & \ddots & \vdots & \vdots \\ 0 & 0 & \ldots & 1 & s_k \\ 0 & 0 & \ldots & 0 & 0 \\ \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & \ldots & 0 & 0 \end{array}\right] \quad \text{vagy} \quad \hat{\mathbf{S}} = \left[\begin{array}{cccc|c} 1 & 0 & \ldots & 0 & 0 \\ 0 & 1 & \ldots & 0 & 0 \\ \vdots & \vdots & \ddots & \vdots & \vdots \\ 0 & 0 & \ldots & 1 & 0 \\ 0 & 0 & \ldots & 0 & 1 \\ 0 & 0 & \ldots & 0 & 0 \\ \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & \ldots & 0 & 0 \end{array}\right]$$
Mivel oszlopok kihagyása nem változtat a sorekvivalencián – hisz elemi sorműveletekben műveletet csak egy oszlopon belül végzünk –, ezért az $\hat{\mathbf{R}}$ és $\hat{\mathbf{S}}$ mátrixok ekvivalensek, azaz a hozzájuk tartozó két egyenletrendszernek ugyanaz a megoldása. Ez csak úgy lehet, ha vagy minden $i = 1, \ldots, k$ indexre $r_i = s_i$, vagy egyik egyenletrendszer sem oldható meg, azaz mindkét esetben azt kaptuk, hogy $\hat{\mathbf{R}} = \hat{\mathbf{S}}$, ami ellentmondás. Ez bizonyítja, hogy a kiinduló $\mathbf{R} \neq \mathbf{S}$ feltevés helytelen volt, tehát $\mathbf{R} = \mathbf{S}$. (Holzmann[^4] bizonyítása alapján.) $\square$

[^4]: *Wolf Holzmann. Uniqueness of reduced row echelon form. http://www.cs.uleth.ca/~holzmann/notes/reduceduniq.pdf, 2002*

Mivel a redukált lépcsős alak egyértelmű, definiálhatunk egy függvényt, mely minden mátrixhoz annak ezt az alakját rendeli. Az $\operatorname{rref}(\mathbf{A})$ jelölést mi arra a függvényre fogjuk alkalmazni, mely egy $m \times n$-es mátrixhoz a redukált lépcsős alakjának – ellentétben a programnyelvekkel – a zérussorok elhagyásával kapott alakját rendeli. Például
$$\operatorname{rref}\begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 1 & 1 & 0 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{bmatrix}.$$

### Szimultán egyenletrendszerek

Gyakori feladat az alkalmazásokban, hogy sok olyan egyenletrendszert kell megoldani, amelyek csak a konstans tagokban térnek el egymástól. A kiküszöböléses módszerekkel ezek egyszerre is megoldhatók alig több erőforrás felhasználásával, mint ami egyetlen egyenletrendszer megoldásához szükséges.

**2.42. definíció (Szimultán egyenletrendszerek).** *Több egyenletrendszer halmazát szimultán egyenletrendszernek nevezünk, ha együtthatómátrixaik azonosak.*

**2.43. példa (Szimultán egyenletrendszer megoldása).** *Oldjuk meg az alábbi egyenletrendszereket!*
$$\begin{alignedat}{9}
x &{}+{}& y &{}+{}& z &{}={}& 3 \\
2x &{}+{}& 3y &{}+{}& 2z &{}={}& 7 \\
2x &{}+{}& 2y &{}+{}& 3z &{}={}& 6
\end{alignedat} \qquad \begin{alignedat}{9}
u &{}+{}& v &{}+{}& w &{}={}& 3 \\
2u &{}+{}& 3v &{}+{}& 2w &{}={}& 7 \\
2u &{}+{}& 2v &{}+{}& 3w &{}={}& 7
\end{alignedat} \qquad \begin{alignedat}{9}
r &{}+{}& s &{}+{}& t &{}={}& 0 \\
2r &{}+{}& 3s &{}+{}& 2t &{}={}& 0 \\
2r &{}+{}& 2s &{}+{}& 3t &{}={}& 1
\end{alignedat}$$

*Megoldás.* Mivel e három egyenletrendszer együtthatómátrixa azonos, a bal oldal átalakítását elég egyszer elvégezni, a jobb oldalak átalakítását pedig vele együtt. Ehhez a szimultán egyenletrendszerre a következő bővített mátrixot érdemes képezni:
$$\left[\begin{array}{ccc|ccc} 1 & 1 & 1 & 3 & 3 & 0 \\ 2 & 3 & 2 & 7 & 7 & 0 \\ 2 & 2 & 3 & 6 & 7 & 1 \end{array}\right]$$
A megoldáshoz használjuk a Gauss–Jordan-módszert:
$$\left[\begin{array}{ccc|ccc} 1 & 1 & 1 & 3 & 3 & 0 \\ 2 & 3 & 2 & 7 & 7 & 0 \\ 2 & 2 & 3 & 6 & 7 & 1 \end{array}\right] \xrightarrow{\substack{S_2 - 2S_1 \\ S_3 - 2S_1}} \left[\begin{array}{ccc|ccc} 1 & 1 & 1 & 3 & 3 & 0 \\ 0 & 1 & 0 & 1 & 1 & 0 \\ 0 & 0 & 1 & 0 & 1 & 1 \end{array}\right] \xrightarrow{\substack{S_1 - S_2 \\ S_1 - S_3}}$$
$$\left[\begin{array}{ccc|ccc} 1 & 0 & 0 & 2 & 1 & -1 \\ 0 & 1 & 0 & 1 & 1 & 0 \\ 0 & 0 & 1 & 0 & 1 & 1 \end{array}\right].$$
Ebből leolvasható mindhárom egyenletrendszer megoldása:
$$\begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 2 \\ 1 \\ 0 \end{bmatrix}, \quad \begin{bmatrix} u \\ v \\ w \end{bmatrix} = \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix}, \quad \begin{bmatrix} r \\ s \\ t \end{bmatrix} = \begin{bmatrix} -1 \\ 0 \\ 1 \end{bmatrix}. \qquad \square$$

▶ Ha tudjuk, hogy több egyenletrendszerből álló szimultán egyenletrendszerről van szó, mindegyik egyenletrendszerben használhatjuk ugyanazokat a változókat.

▶ Később látni fogjuk, hogy ha $\mathbf{A}$ invertálható, $\mathbf{B}$ tetszőleges mátrix, és soraik száma azonos, akkor az $[\mathbf{A}|\mathbf{B}]$ redukált lépcsős alakjából leolvasható az $\mathbf{A}^{-1}\mathbf{B}$ mátrix.

### Kiküszöbölés $\mathbb{Z}_p$-ben

Ha $p$ prím, akkor a modulo $p$ maradékosztályok közti műveletek minden olyan tulajdonsággal rendelkeznek, melyet a kiküszöbölés során a valós számok körében használtunk. Ennek következtében a Gauss- és Gauss–Jordan-módszerek minden további nélkül használhatók $\mathbb{Z}_p$ fölötti egyenletrendszerekre is. (Lásd még az 549. oldalon az algebrai testről írtakat.)

**2.44. példa (Egyenletrendszer $\mathbb{Z}_2$ fölött).** *4-bites kódszavakat küldünk, bitjeit jelölje $a$, $b$, $c$ és $d$. Hibajavító kódot készítünk úgy, hogy minden kódszó végére három paritásbitet teszünk, nevezetesen a $b + c + d$, $a + c + d$ és a $a + b + d$ bitet. Az összeadás itt természetesen $\mathbb{Z}_2$ fölött értendő. Például a $0110$ kódszó helyett a $0110011$ kódszót küldjük. Egy üzenetben az egyik ilyen 7-bites kódszó első 4 bitjét a vevő szerkezet bizonytalanul érzékeli, amit kapunk, az a $(?, ?, ?, ?, 1, 0, 1)$ kódvektor. Mi lehetett az eredeti üzenet, ha az utolsó 3 bit biztosan jó?*

> *E feladatban definiált kódot $[7, 4, 3]_2$ bináris* Hamming-kódnak *nevezzük. $16 = 2^4$ kódszóból áll, és bármely két kódszava legalább 3 helyen különbözik, így bármely 5 bit egyértelműen megadja a maradék kettőt. Eszerint legföljebb 2 bithiba felismerhető (jelezhető), és legföljebb 1 bithiba ki is javítható.*

*Megoldás.* Az $a$, $b$, $c$ és $d$ bitek ismeretlenek, melyekre
$$\begin{alignedat}{9}
&& b &{}+{}& c &{}+{}& d &{}={}& 1 \\
a &{}+{}& && c &{}+{}& d &{}={}& 0 \\
a &{}+{}& b &{}+{}& && d &{}={}& 1
\end{alignedat}$$
Oldjuk meg ezt az egyenletrendszert Gauss–Jordan kiküszöböléssel $\mathbb{Z}_2$ fölött. Ne felejtsük, hogy $\mathbb{Z}_2$-ben $1 + 1 = 0$, így $1 = -1$, azaz a

kivonás nem különbözik az összeadástól.
$$\left[\begin{array}{cccc|c} 0 & 1 & 1 & 1 & 1 \\ 1 & 0 & 1 & 1 & 0 \\ 1 & 1 & 0 & 1 & 1 \end{array}\right] \xrightarrow{S_1 \leftrightarrow S_2} \left[\begin{array}{cccc|c} 1 & 0 & 1 & 1 & 0 \\ 0 & 1 & 1 & 1 & 1 \\ 1 & 1 & 0 & 1 & 1 \end{array}\right] \xrightarrow{S_3 + S_1} \left[\begin{array}{cccc|c} 1 & 0 & 1 & 1 & 0 \\ 0 & 1 & 1 & 1 & 1 \\ 0 & 1 & 1 & 0 & 1 \end{array}\right] \xrightarrow{S_3 + S_2}$$
$$\left[\begin{array}{cccc|c} 1 & 0 & 1 & 1 & 0 \\ 0 & 1 & 1 & 1 & 1 \\ 0 & 0 & 0 & 1 & 0 \end{array}\right] \xrightarrow{\substack{S_2 + S_3 \\ S_1 + S_3}} \left[\begin{array}{cccc|c} 1 & 0 & 1 & 0 & 0 \\ 0 & 1 & 1 & 0 & 1 \\ 0 & 0 & 0 & 1 & 0 \end{array}\right] \longrightarrow \begin{alignedat}{9}
a && &{}+{}& c && &{}={}& 0 \\
&& b &{}+{}& c && &{}={}& 1 \\
&& && && d &{}={}& 0
\end{alignedat}$$
Az utolsó egyenletből $d = 0$. A szabad változó $c$, legyen $c = s$. Így a második egyenletből $b = 1 + c$, azaz $b = 1 + s$ és az elsőből $a = c$, azaz $a = s$. A megoldás általános alakban $(a, b, c, d) = (s, 1 + s, s, 0)$, azaz $(a, b, c, d) = (0, 1, 0, 0) + s(1, 1, 1, 0)$. Az $s = 0$ és az $s = 1$ értékekhez tartozó megoldások tehát: $(0, 1, 0, 0)$ és $(1, 0, 1, 0)$.

Ha az egyenletrendszert vektoregyenletnek tekintjük, akkor az első megoldás azt mutatja, hogy az együtthatómátrix második oszlopa megegyezik a jobb oldallal (és valóban), a második megoldás pedig azt, hogy az első és a harmadik oszlop összege a jobb oldalt adja. $\square$

**2.45. példa (Egyenletrendszer $\mathbb{Z}_5$ fölött).** *Oldjuk meg az alábbi két egyenletrendszert $\mathbb{Z}_5$ fölött.*
$$\begin{alignedat}{9} 2x &{}+{}& 3y &{}={}& 1 \\ 3x &{}+{}& 2y &{}={}& 4 \end{alignedat} \qquad \begin{alignedat}{9} 2x &{}+{}& 3y &{}={}& 1 \\ 3x &{}+{}& 4y &{}={}& 3 \end{alignedat}$$

*Megoldás.* A számolás megkönnyítésére vagy készítsünk osztási táblát, vagy használjuk az 548. oldalon található A.5. ábra szorzótábláját.
$$\left[\begin{array}{cc|c} 2 & 3 & 1 \\ 3 & 2 & 4 \end{array}\right] \xrightarrow{3S_1} \left[\begin{array}{cc|c} 1 & 4 & 3 \\ 3 & 2 & 4 \end{array}\right] \xrightarrow{S_2 - 3S_1} \left[\begin{array}{cc|c} 1 & 4 & 3 \\ 0 & 0 & 0 \end{array}\right],$$
azaz az egyenletrendszernek több megoldása van. Itt ez nem azt jelenti, hogy végtelen sok, hanem azt, hogy legalább egy paraméter végigfut $\mathbb{Z}_5$ összes elemén. Szabad változó az $y$, legyen $y = s$, így $x = 3 - 4s = 3 + s$, tehát $(x, y) = (3 + s, s)$, azaz a vektorok mátrixjelölésével:
$$\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 3 \\ 0 \end{bmatrix} + s\begin{bmatrix} 1 \\ 1 \end{bmatrix}, \quad s \in \mathbb{Z}_5$$
Mivel $\mathbb{Z}_5$-nek öt eleme van, ezért $s$-nek is ennyi értéke lehet, azaz az első egyenletrendszer összes megoldása $(3, 0)$, $(4, 1)$, $(0, 2)$, $(1, 3)$, $(2, 4)$. A másik egyenletrendszer megoldása:
$$\left[\begin{array}{cc|c} 2 & 3 & 1 \\ 3 & 4 & 3 \end{array}\right] \xrightarrow{3S_1} \left[\begin{array}{cc|c} 1 & 4 & 3 \\ 3 & 4 & 3 \end{array}\right] \xrightarrow{S_2 - 3S_1} \left[\begin{array}{cc|c} 1 & 4 & 3 \\ 0 & 2 & 4 \end{array}\right] \xrightarrow{3S_2} \left[\begin{array}{cc|c} 1 & 0 & 0 \\ 0 & 1 & 2 \end{array}\right].$$
Így a megoldás $(x, y) = (0, 2)$. $\square$

### Feladatok

#### Mátrix lépcsős és redukált lépcsős alakja

**2.26.•** *Lépcsős alak: igaz – hamis.* Melyek igazak, melyek hamisak az alábbi állítások közül?
- a) Egy mátrix minden lépcsős alakjában ugyanannyi nemzérus sor van.
- b) Egy mátrix minden lépcsős alakjában ugyanannyi főoszlop (bázisoszlop) van.
- c) Minden valós mátrixnak van lépcsős alakja, ami egyértelmű.
- d) Különböző mátrixoknak különböző a redukált lépcsős alakjuk.
- e) Ha egy mátrix elemi sorműveletekkel egy másikba vihető, akkor redukált lépcsős alakjuk megegyezik.

Határozzuk meg valamely lépcsős alakját, majd a redukált lépcsős alakját az alábbi mátrixoknak!

**2.27.** $\begin{bmatrix} 1 & 1 & 1 & 1 & 1 \\ 2 & 3 & 2 & 3 & 4 \\ 1 & 2 & 1 & 2 & 3 \end{bmatrix}$

**2.28.** $\begin{bmatrix} 1 & 1 & 1 & 1 & 1 \\ 2 & 3 & 2 & 3 & 4 \\ 3 & 2 & 1 & 2 & 3 \end{bmatrix}$

**2.29.•** A három elemi sorművelet egyike elvégezhető a másik kettő segítségével is. Melyik és hogyan?

#### Egyenletrendszer megoldása Gauss-módszerrel

Oldjuk meg az alábbi lineáris egyenletrendszereket Gauss-módszerrel!

**2.30.** $\begin{cases} x_1 + x_2 + x_3 = 1 \\ x_2 + x_3 + x_4 = 2 \\ x_3 + x_4 + x_5 = 2 \\ x_4 + x_5 + x_1 = 1 \end{cases}$

**2.31.** $\begin{cases} x_1 + x_2 + x_3 = 4 \\ -x_1 + x_2 - x_3 = 2 \\ 2x_1 + x_2 + 2x_3 = 3 \\ 4x_1 + 4x_2 + 4x_3 = 1 \end{cases}$

**2.32.•** $\begin{cases} 7x + 14y - 21z = 7 \\ x + 2y - 3z = 1 \\ 5x + 10y + 15z = 5 \\ 3x + 6y - 9z = 3 \end{cases}$

**2.33.** $\begin{cases} x + 3y + z = 1 \\ 2x + 7y + 2z = 0 \\ x + 4y + 4z = 1 \\ x + 4y + 2z = -1 \\ 4x + 15y + 10z = 2 \end{cases}$

**2.34.** $\begin{cases} x + y = 4 \\ 3x - y = 2 \\ -3x + 5y = 2 \\ x + 2y = 1 \end{cases}$

**2.35.** $\begin{cases} x_1 + x_2 + 4x_4 = 3 \\ x_2 - x_3 + 3x_4 = 1 \\ x_1 - 2x_2 + 3x_3 - 5x_4 = 0 \\ 3x_1 - x_2 + 4x_3 = 5 \end{cases}$

#### Egyenletrendszer megoldása Gauss–Jordan-módszerrel

**2.36.** Oldjuk meg az alábbi szimultán egyenletrendszereket!
- a) $\begin{cases} 2x + y = 1 \\ 5x + 3y = 0 \end{cases}$ $\quad$ $\begin{cases} 2x + y = 0 \\ 5x + 3y = 1 \end{cases}$
- b) $\begin{cases} 2x + y = 2 \\ 4x + 2y = 0 \end{cases}$ $\quad$ $\begin{cases} 2x + y = 2 \\ 4x + 2y = 4 \end{cases}$
- c) $\begin{cases} x + y + z = 1 \\ x + 2y + 3z = 4 \\ x + 2y + 2z = 1 \end{cases}$ $\quad$ $\begin{cases} x + y + z = 0 \\ x + 2y + 3z = 5 \\ x + 2y + 2z = 1 \end{cases}$
- d) $\begin{cases} x + y + z = 1 \\ x + 2y + 3z = 4 \\ x + 2y + z = 2 \end{cases}$ $\quad$ $\begin{cases} x + y + z = 1 \\ x + 2y + 3z = 5 \\ x + 2y + z = 1 \end{cases}$ $\quad$ $\begin{cases} x + y + z = 0 \\ x + 2y + 3z = 6 \\ x + 2y + z = 2 \end{cases}$

#### Egyenletrendszerek

**2.37.•** *Egyenletrendszerek: igaz – hamis.* Melyek igazak, melyek hamisak az alábbi állítások közül?
- a) A bővített mátrixon végrehajtott elemi sorműveletek közben az egyenletrendszer megoldáshalmaza nem változik.
- b) Egy lineáris egyenletrendszer nem konzisztens, ha több egyenletből áll, mint ahány ismeretlenes.
- c) Ha egy valósegyütthatós lineáris egyenletrendszernek van két különböző megoldása, akkor végtelen sok is van.
- d) Egy homogén lineáris egyenletrendszer mindig konzisztens.

Ekvivalensek-e az alábbi egyenletrendszerek?

**2.38.** $\begin{cases} 3x + 2y - 2z = 1 \\ 2x + 3y - 3z = -1 \\ 4x + 2y = 8 \end{cases}$ $\quad$ $\begin{cases} 2x + 2y - 2z = 0 \\ 3x + 3y - 2z = 3 \\ 5x - 3y + 2z = 5 \end{cases}$

**2.39.** $\begin{cases} 2x + 3y + 5z = 0 \\ 3x + 2y + 2z = 3 \\ 5x - 4z = 9 \end{cases}$ $\quad$ $\begin{cases} x - y - 3z = 3 \\ 5x + 5y + 7z = 3 \end{cases}$

**2.40.** Csak egész számokkal számolva megoldható-e az az egyenletrendszer, melynek bővített mátrixa a következő:
- a) $\left[\begin{array}{ccc|c} 3 & 4 & 1 & 1 \\ 7 & 8 & 3 & 7 \\ 11 & 7 & -2 & 2 \end{array}\right]$  b) $\left[\begin{array}{ccc|c} 3 & 4 & 1 & 1 \\ 7 & 8 & 3 & 7 \\ 11 & 7 & 2 & 2 \end{array}\right]$

**2.41.** Egy legalább 2-ismeretlenes lineáris egyenletrendszerről annyit tudunk, hogy egyértelműen megoldható, és hogy bővített mátrixának elemei sorfolytonosan olvasva számtani sorozatot adnak. Mi a megoldása?

**2.42.** *Lineárisra visszavezethető egyenletrendszerek.* Oldjuk meg az alábbi, nem lineáris egyenletrendszereket!
- a) $\begin{cases} 2\sqrt{x} + 2\sqrt{y} = 8 \\ 3\sqrt{x} + \sqrt{y} = 4 \end{cases}$  b) $\begin{cases} 2x^3 + 2y^2 = 8 \\ 3x^3 + y^2 = 4 \end{cases}$
- c) $\begin{cases} 2e^x + 2e^y = 8 \\ 3e^x + e^y = 4 \end{cases}$  d) $\begin{cases} 2\cos x + 2\cos y = 8 \\ 3\cos x + \cos y = 4 \end{cases}$

**2.43.** *Egyenletrendszer pozitív egész megoldásokkal.* Egy érmegyűjteményben régi 1, 5 és 10 Ft-osok vannak, összesen 11 darab, 53 Ft összértékben. Melyik érméből hány darab van?

## Megoldás a gyakorlatban

*Bár e szakasz tartalma elsősorban nem a lineáris algebra, hanem a numerikus analízis témakörébe tartozik, ismerete elengedhetetlen annak, aki a gyakorlatban lineáris algebrai eszközöket alkalmaz. Először a Gauss- és Gauss–Jordan-kiküszöbölés műveletigényét, majd numerikus megbízhatóságának kérdését vizsgáljuk. Ezután az iterációs módszerek lényegét vázoljuk, melyek alkalmazásakor az együtthatómátrix nem változik, így a számítási hibák sem halmozódnak. Ráadásul e módszerek a ritka mátrixokat sem „rontják el", mint a Gauss-módszer, mely sok zérust írhat felül.*

### A kiküszöbölés műveletigénye

Ahhoz, hogy a lineáris egyenletrendszerek különböző megoldási módszereit össze tudjuk hasonlítani, azt is tudnunk kell, mennyi a műveletigényük. A flop mértékegységről részletesen a függelékben írunk az 554. oldalon.

**2.46. tétel (A kiküszöbölés műveletigénye).** *A Gauss- és a Gauss–Jordan-módszer műveletigénye egy $n$-ismeretlenes, $n$ egyenletből álló egyenletrendszer esetén egyaránt*
$$\frac{n^3}{3} + \frac{n^2}{2} - \frac{5n}{6} \;\; \text{összeadás/kivonás,} \quad \frac{n^3}{3} + n^2 - \frac{n}{3} \;\; \text{szorzás/osztás.}$$
*azaz összesen*
$$\frac{2}{3}n^3 + \frac{3}{2}n^2 - \frac{7}{6}n \;\, \text{flop,}$$
*azaz jó közelítéssel $2n^3/3$ flop.*

*Bizonyítás.* Először felelevenítünk két elemi összefüggést, amire a bizonyításban szükség van:
$$\begin{aligned}
1 + 2 + \ldots + n &= \frac{n(n+1)}{2} = \frac{1}{2}n^2 + \frac{1}{2}n, \\
1^2 + 2^2 + \ldots + n^2 &= \frac{n(n+1)(2n+1)}{6} = \frac{1}{3}n^3 + \frac{1}{2}n^2 + \frac{1}{6}n.
\end{aligned}$$
A továbbiakban feltételezzük, hogy a kiküszöbölés során a főátlóba kerülő elemek egyike sem $0$. A Gauss-módszernél a főátló alatti elemek eliminálásához $\frac{1}{3}n^3 - \frac{1}{3}n$ összeadás és $\frac{1}{3}n^3 + \frac{1}{2}n^2 - \frac{5}{6}n$ szorzás szükséges. A visszahelyettesítés $\frac{1}{2}n^2 - \frac{1}{2}n$ összeadásból és $\frac{1}{2}n^2 + \frac{1}{2}n$ szorzásból áll. Ha a Gauss–Jordan-módszernél a főátló alatti elemek kiküszöbölése mellett a főátló elemeit is 1-re változtatjuk, az $\frac{1}{3}n^3 - \frac{1}{3}n$ összeadás mellett $\frac{1}{3}n^3 + \frac{1}{2}n^2 + \frac{1}{6}n$ szorzás szükséges. A főátló feletti elemek eliminálásához $\frac{1}{2}n^2 - \frac{1}{2}n$ összeadás és ugyanennyi szorzás kell. A számítások részletezését az olvasóra hagyjuk. $\square$

### Numerikusan instabil egyenletrendszerek

A gyakorlati feladatokban gyakran mérési eredményekkel, így nem pontos adatokkal dolgozunk.

**2.47. példa (Instabil egyenletrendszer).** *Oldjuk meg a következő egyenletrendszert!*
$$\begin{alignedat}{9}
6.73x &{}-{}& 8.97y &{}={}& 5.61 \\
4.79x &{}-{}& 6.39y &{}={}& 3.99
\end{alignedat}$$
*Mutassuk meg, hogy az együtthatók $0.01$-dal való megváltoztatása a megoldások nagy megváltozását okozhatja, sőt az is elérhető, hogy az egyenletrendszernek ne legyen, vagy épp végtelen sok megoldása legyen!*

*Megoldás.* Az egyenletrendszer megoldása: $x = 1.5$, $y = 0.5$. Az első egyenletben az $x$ együtthatóját változtassuk $6.72$-re. Ekkor az egyenletrendszer megoldása $x \approx -2.26$, $y \approx -2.32$. Ezután változtassuk az $y$ együtthatóját $-8.96$-ra. Ekkor a megoldás $x \approx 4.35$, $y \approx 2.64$. Ha végül az első egyenlet konstans tagját is megváltoztatjuk egy századdal $5.62$-re, akkor $x \approx 7.21$, $y \approx 4.78$ lesz az eredmény, ha pedig $5.60$-ra, akkor – csemegeként – ismét a kerek $x = 1.5$, $y = 0.5$ értékeket kapjuk.

A fenti egyenletrendszeren tovább változtatva az együtthatókat az is elérhető, hogy végtelen sok megoldása legyen:
$$\begin{alignedat}{9}
6.72x &{}-{}& 8.96y &{}={}& 5.60 \\
4.80x &{}-{}& 6.40y &{}={}& 4.00
\end{alignedat}$$
ugyanis itt a két egyenlet egymás konstansszorosa. Ha pedig a második egyenlet konstans tagját visszaírjuk $3.99$-re, egy ellentmondó egyenletrendszert kapunk. $\square$

Ilyen megbízhatatlan eredmények a gyakorlatban használhatatlanok! Az olyan egyenletrendszert, melyben az együtthatók vagy a konstans tagok kis változása a megoldásban nagy változást okoz, *numerikusan instabilnak* vagy *rosszul kondicionáltnak* nevezzük. Egyébként *numerikusan stabil,* illetve *jól kondicionált* egyenletrendszerről beszélünk.

Világos, hogy a fentiek nem precíz matematikai fogalmak, de adható a kondicionáltság fokát mérő szám. Az azonban, hogy egy adott egyenletrendszer megoldásai elfogadhatók-e vagy nem, csak a feladat döntheti el.

A numerikus instabilitás okát szemlélteti a 2.12. ábra. Kétváltozós egyenletrendszerek esetén, ha a két egyenes grafikonja „közel" van egymáshoz, azaz majdnem egybe esnek, akkor kis változások az egyeneseken messze vihetik a metszéspontot, de párhuzamossá is tehetik a két egyenest.

Ha a gyakorlatban numerikusan instabil egyenletrendszerrel találkozunk, vizsgáljuk meg, hogy az egyenleteink közti „majdnem" lineáris összefüggőség mögött nem valódi lineáris összefüggőség van-e kis mérési hibával.

*2.12. ábra. Instabil egyenletrendszer, melyben az egyenletek együtthatóinak kis megváltoztatása a megoldás nagy megváltozását okozza.*

### Részleges főelem-kiválasztás

A következőkben lebegőpontos aritmetikát használunk. A számításokat úgy végezzük el, hogy az adott pontosságnak megfelelően minden részeredményt $p$ értékes jegyre kerekítünk.

**2.48. példa (Gauss-módszer lebegőpontos számokkal).** *Oldjuk meg az alábbi – numerikusan stabil – egyenletrendszert pontosan, majd 3 értékes jegy pontossággal számolva.*
$$\begin{alignedat}{9}
10^{-4}x &{}+{}& y &{}={}& 2 \\
x &{}-{}& y &{}={}& 0
\end{alignedat}$$

*Megoldás.* Pontosan számolva
$$\left[\begin{array}{cc|c} 10^{-4} & 1 & 2 \\ 1 & -1 & 0 \end{array}\right] \xrightarrow{S_2 - 10^4 S_1} \left[\begin{array}{cc|c} 10^{-4} & 1 & 2 \\ 0 & -1 - 10^4 & -2 \cdot 10^4 \end{array}\right]$$
amiből az eredmény $x = y = \frac{2 \cdot 10^4}{1 + 10^4}$. Igazolható, hogy az egyenletrendszer numerikusan stabil, ami azt jelenti, hogy például $10^{-4}$ helyébe $0$-t helyettesítve, vagyis kicsit változtatva egy együtthatót, a kapott
$$\left[\begin{array}{cc|c} 0 & 1 & 2 \\ 1 & -1 & 0 \end{array}\right]$$
egyenletrendszer megoldása csak kicsit különbözik az előzőtől: $x = y = 2$. Végezzük most el a Gauss-kiküszöbölést 3 értékes jeggyel számolva:
$$\left[\begin{array}{cc|c} 10^{-4} & 1 & 2 \\ 1 & -1 & 0 \end{array}\right] \xrightarrow{S_2 - 10^4 S_1} \left[\begin{array}{cc|c} 10^{-4} & 1 & 2 \\ 0 & -1 - 10^4 & -2 \cdot 10^4 \end{array}\right] \approx \left[\begin{array}{cc|c} 10^{-4} & 1 & 2 \\ 0 & -10^4 & -2 \cdot 10^4 \end{array}\right],$$
ahol a közelítésnél a $\operatorname{fl}(-1 - 10^4) = -10^4$ összefüggést használtuk. Az így kapott egyenletrendszernek viszont $x = 0$, $y = 2$ a megoldása, ami nagyon messze van az eredeti egyenletrendszer megoldásától! Most végezzünk egy apró változtatást: először cseréljük fel a két egyenletet!
$$\left[\begin{array}{cc|c} 1 & -1 & 0 \\ 10^{-4} & 1 & 2 \end{array}\right] \xrightarrow{S_2 - 10^{-4} S_1} \left[\begin{array}{cc|c} 1 & -1 & 0 \\ 0 & 1 + 10^{-4} & 2 \end{array}\right] \approx \left[\begin{array}{cc|c} 1 & -1 & 0 \\ 0 & 1 & 2 \end{array}\right],$$
amelynek megoldása $x = y = 2$, ami nagyon közel van a pontos megoldáshoz! Mi az oka a két megoldás közti különbségnek? $\square$

Mindkét megoldásban az első egyenlet konstansszorosát hozzáadtuk a második egyenlethez, de az első esetben az első oszlop kisebb, a másodikban az nagyobb elemét választottuk főelemnek. Amikor a kisebbet választottuk, akkor az első sort egy kis számmal osztottuk, vagyis recpirokával – egy nagy számmal – szoroztuk, és ezt adtuk a második sorhoz. A nagy számmal való beszorzás következtében a

második egyenlet együtthatóit „elnyomták" e nagy számok, nagyon megváltoztatva az egyenletet, aminek következtében a megoldások is nagyon megváltoztak! A $\operatorname{fl}(-1 - 10^4) = -10^4$ kerekítés hatása, vagyis a $-1$ „eltüntetése", ekvivalens azzal, mintha az eredeti egyenletrendszer helyett a következőt kéne megoldani:
$$\left[\begin{array}{cc|c} 10^{-4} & 1 & 2 \\ 1 & 0 & 0 \end{array}\right].$$
Ennek valóban $x = 0$, $y = 2$ a megoldása! Amikor az első oszlop nagyobbik elemét választottuk főelemnek, a sort egy kis számmal kellett szorozni, és ezt hozzáadni a másik sorhoz, vagyis az egyenletrendszer kevésbé torzult. Ennek alapján megfogalmazható egy széles körben elterjedt szabály: a Gauss-féle kiküszöbölési eljárás során, lebegőpontos adatokkal dolgozva minden oszlopban a szóbajöhető elemek közül – sorcserék segítségével – mindig a legnagyobb abszolút értékűt választsuk főelemnek! E módszert *részleges főelem-kiválasztásnak,* illetve *részleges pivotálásnak* nevezzük. (Bizonyos esetekben jobb eredmény kapható a *teljes főelem-kiválasztás* módszerével, amikor főelemnek az összes még hátralévő elem abszolút értékben legnagyobbikát választjuk. Ez az eljárás műveletigényesebb, ritkán alkalmazzák.)

**2.49. példa (Részleges főelem-kiválasztás).** *Részleges főelem-kiválasztással hozzuk lépcsős alakra az alábbi mátrixot!*
$$\begin{bmatrix} 1.8 & 3.0 & 3.0 & 3.7 & 7.5 \\ 3.6 & 3.2 & 3.6 & 6.2 & 7.8 \\ 7.2 & 3.6 & 4.8 & 2.4 & 1.2 \\ 2.4 & 5.4 & 5.2 & 2.6 & 5.2 \end{bmatrix}$$

*Megoldás.* Az első oszlop legnagyobb eleme a harmadik sorban van, így az első és a harmadik sor cseréjével kezdünk:
$$\xrightarrow{S_1 \leftrightarrow S_3} \begin{bmatrix} 7.2 & 3.6 & 4.8 & 2.4 & 1.2 \\ 3.6 & 3.2 & 3.6 & 6.2 & 7.8 \\ 1.8 & 3.0 & 3.0 & 3.7 & 7.5 \\ 2.4 & 5.4 & 5.2 & 2.6 & 5.2 \end{bmatrix} \xrightarrow{\substack{S_2 - S_1/2 \\ S_3 - S_1/4 \\ S_4 - S_1/3}} \begin{bmatrix} 7.2 & 3.6 & 4.8 & 2.4 & 1.2 \\ 0.0 & 1.4 & 1.2 & 5.0 & 7.2 \\ 0.0 & 2.1 & 1.8 & 3.1 & 7.2 \\ 0.0 & 4.2 & 3.6 & 1.8 & 4.8 \end{bmatrix}$$
$$\xrightarrow{S_2 \leftrightarrow S_4} \begin{bmatrix} 7.2 & 3.6 & 4.8 & 2.4 & 1.2 \\ 0.0 & 4.2 & 3.6 & 1.8 & 4.8 \\ 0.0 & 2.1 & 1.8 & 3.1 & 7.2 \\ 0.0 & 1.4 & 1.2 & 5.0 & 7.2 \end{bmatrix} \xrightarrow{\substack{S_3 - S_2/2 \\ S_4 - S_2/3}} \begin{bmatrix} 7.2 & 3.6 & 4.8 & 2.4 & 1.2 \\ 0.0 & 4.2 & 3.6 & 1.8 & 4.8 \\ 0.0 & 0.0 & 0.0 & 2.2 & 4.8 \\ 0.0 & 0.0 & 0.0 & 4.4 & 5.6 \end{bmatrix}$$
$$\xrightarrow{S_3 \leftrightarrow S_4} \begin{bmatrix} 7.2 & 3.6 & 4.8 & 2.4 & 1.2 \\ 0.0 & 4.2 & 3.6 & 1.8 & 4.8 \\ 0.0 & 0.0 & 0.0 & 4.4 & 5.6 \\ 0.0 & 0.0 & 0.0 & 2.2 & 4.8 \end{bmatrix} \xrightarrow{S_4 - S_3/2} \begin{bmatrix} 7.2 & 3.6 & 4.8 & 2.4 & 1.2 \\ 0.0 & 4.2 & 3.6 & 1.8 & 4.8 \\ 0.0 & 0.0 & 0.0 & 4.4 & 5.6 \\ 0.0 & 0.0 & 0.0 & 0.0 & 2.0 \end{bmatrix} \qquad \square$$

### Skálázás

A részleges főelem-kiválasztásban az oszlop legnagyobb elemét választottuk. Mi történik, ha a mátrix egy sorát beszorozzuk egy skalárral? Nem rontja el a módszert?

**2.50. példa (Sor szorzása).** *A 2.48. példában szorozzuk meg az első egyenletet $10^5$-nel, azaz a kisebb elemből csináljunk nagyot, és ezt az egyenletrendszert is oldjuk meg részleges főelem-kiválasztással.*
$$\begin{alignedat}{9}
10x &{}+{}& 10^5 y &{}={}& 2 \cdot 10^5 \\
x &{}-{}& y &{}={}& 0
\end{alignedat}$$

*Megoldás.* Egy egyenlet beszorzása egy nemzérus számmal ekvivalens átalakítás, így ennek az egyenletrendszernek is $x = y = \frac{2 \cdot 10^4}{1 + 10^4}$ a pontos megoldása. Ha 3 értékes jegyre számolunk, és alkalmazzuk a részleges főelem-kiválasztás módszerét, akkor ismét rossz eredményt kapunk:
$$\left[\begin{array}{cc|c} 10 & 10^5 & 2 \cdot 10^5 \\ 1 & -1 & 0 \end{array}\right] \xrightarrow{S_2 - \frac{1}{10}S_1} \left[\begin{array}{cc|c} 10 & 10^5 & 2 \cdot 10^5 \\ 0 & -1 - 10^4 & -2 \cdot 10^4 \end{array}\right] \approx \left[\begin{array}{cc|c} 10 & 10^5 & 2 \cdot 10^5 \\ 0 & -10^4 & -2 \cdot 10^4 \end{array}\right],$$
amiből $x = 0$ és $y = 2$. $\square$

Hasonlóképp zavart okozhat az együtthatómátrix egy oszlopának beszorzása is, ami az egyenletrendszeren például úgy valósítható meg, ha egyik változó mértékegységét megváltoztatjuk. (Ha például a korábban kilométerben meghatározott ismeretlent milliméterben keressük, együtthatóját minden egyenletben $10^6$-nal kell osztani.)

Az együtthatók ilyen „egyenletlenségeiből" származó számítási hibák csökkentésére a *skálázás* nevű gyakorlati módszer ajánlható. Ez a következő két skálázási szabály követéséből áll, mely a tapasztalatok szerint a gyakorlati feladatok nagy részében nagyon jó eredményt ad a részleges főelem-kiválasztással együtt alkalmazva:
1. *Oszlopok skálázása:* Válasszunk a feladatban szereplő mennyiségeknek természetes mértékegységet, ezzel általában elkerülhetők az együtthatók közti tetemes nagyságrendi különbségek. Ezen kívül nincs szükség az oszlopok elemeinek beszorzására.
2. *Sorok skálázása:* Az egyenletrendszer $[\mathbf{A}|\mathbf{b}]$ bővített mátrixának minden sorát osszuk el az az $\mathbf{A}$ együtthatómátrix adott sorbeli legnagyobb abszolút értékű elemével. Így $\mathbf{A}$ minden sorának 1 a legnagyobb abszolút értékű eleme.

Nem ismeretes olyan módszer, mely a lebegőpontos ábrázolás korlátai mellett hatékonyan megtalálná a lehető legpontosabb eredményt. Az elmélet és a tapasztalatok alapján sűrű, nem túlzottan nagy méretű egyenletrendszerekre a skálázott főelem kiválasztásos Gauss-módszer ajánlható. A ritka együtthatómátrixú egyenletrendszerekre az iteratív módszerek általában jobb eredményt adnak.

### Iteratív módszerek

Az iteratív módszerek lényege, hogy olyan
$$\mathbf{x}^0, \mathbf{x}^1, \ldots, \mathbf{x}^k, \ldots$$
vektorsorozatot generálunk, mely az adott egyenletrendszer megoldásvektorához konvergál (a felső index itt nem hatványozást jelent!). Első pillanatra meglepőnek tűnhet végtelen sorozattal keresni a megoldást, de mivel számításaink eleve csak véges pontosságúak, gyakran igen kevés lépésben elérhetjük a megkívánt pontosságot. Ráadásul a kerekítési hibák még növelhetik is a konvergencia sebességét.

Az alapgondolat – a matematika több más területén is gyümölcsöző módszer – a fixpontkeresés. Ennek lényegét először egy egyváltozós függvény példáján mutatjuk be. Legyen $f$ egy minden valós helyen értelmezett függvény, mely bármely $a$ és $b$ pontot két olyan pontba visz, melyek távolsága $a$ és $b$ távolságának legföljebb a fele. Képletben:
$$|f(b) - f(a)| \leq \frac{1}{2}|b - a|, \quad \text{azaz} \quad \frac{|f(b) - f(a)|}{|b - a|} \leq \frac{1}{2}.$$
Ez azt jelenti, hogy $f$ összes különbségi hányadosa legfeljebb $1/2$. A sokkal általánosabban megfogalmazható Banach-féle fixpont tétel szerint ekkor egyetlen olyan $\bar{x}$ pont létezik, hogy $\bar{x} = f(\bar{x})$, és ez megkapható úgy, hogy tetszőleges $x_0$ pontból kiindulva képezzük az
$$x_0, \; x_1 = f(x_0), \; x_2 = f(x_1), \ldots, x_{k+1} = f(x_k), \ldots$$
sorozatot, és vesszük a határértékét. Ekkor
$$\bar{x} = \lim_{k \to \infty} x_k.$$
A 2.13. ábra szemléltette a fenti állítást. Az $1/2$-es szorzó kicserélhető tetszőleges $0$ és $1$ közé eső $q$ konstansra.

A *Banach fixponttétel* – nem a legáltalánosabb formájában – $\mathbb{R}^n$-ben a következőképpen szól:

**2.51. tétel (Banach-féle fixponttétel).** *Legyen $f : \mathbb{R}^n \to \mathbb{R}^n$ kontrakció, azaz olyan függvény, hogy bármely $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$ vektorra*
$$d(f(\mathbf{x}), f(\mathbf{y})) \leqslant q\,d(\mathbf{x}, \mathbf{y}),$$
*ahol $0 < q < 1$ adott konstans. Ekkor pontosan egy olyan $\bar{\mathbf{x}}$ vektor van, melyre $f(\bar{\mathbf{x}}) = \bar{\mathbf{x}}$, azaz $f$-nek pontosan egy fixpontja van. Ez megkapható a $\lim_{k \to \infty} \mathbf{x}^k = \bar{\mathbf{x}}$ határértékkel, ahol $\mathbf{x}^0$ tetszőleges és $\mathbf{x}^{k+1} = f(\mathbf{x}^k)$.*

A bizonyítás a Cauchy-sorozatok konvergenciájára épül, itt nem részletezzük. $\mathbb{R}^2$ esetén egyszerű szemléltetés adható a tételre, ami megtalálható a széljegyzetben.

A Banach-tételt úgy fogjuk használni az egyenletrendszerek megoldásánál, hogy a változókat átrendezve az egyenletrendszer $\mathbf{x} = f(\mathbf{x})$ alakú legyen, ahol $\mathbf{x}$ jelöli az ismeretlenek vektorát. A továbbiakban négyzetes együttható-mátrixú egyenletrendszerekkel foglalkozunk.

*2.13. ábra. Egy függvény, mely bármely $a$ és $b$ pontot két olyan pontba visz, melyek távolsága $a$ és $b$ távolságának legföljebb a fele, így a függvény minden különbségi hányadosa abszolút értékben legföljebb $1/2$. E függvénynek pontosan egy fixpontja van, mely megkapható egy tetszőleges $x_0$ pontból induló $x_k = f(x_{k-1})$ sorozat határértékeként.*

> *Képzeljük el, hogy egy nagyobb gumilapot néhányan körbeállva egy kerek asztal tetején széthúznak az asztal széléig, majd (most jön a leképezés!) visszaengedik eredeti állapotába. Ekkor igaz az, hogy az asztalon pontosan egy olyan pont van, mely fölött a gumilap helyben marad. E pont megkapható, ha kiválasztunk az asztalon egy tetszőleges $P_0$ pontot, és megnézzük, hogy a kinyújtott gumilap e fölötti pontja összehúzódáskor hová ugrik, legyen ez a $P_1$ pont az asztalon. A kinyújtott gumilap $P_1$ fölötti pontja összehúzódáskor az $P_2$ pont fölé ugrik, stb. Az így kapott pontsorozat a fixponthoz konvergál.*

### Jacobi-iteráció

Az iteráció arra épül, hogy a $k$-adik egyenletből kifejezzük a $k$-adik változót, ebből kapjuk az $\mathbf{x} = f(\mathbf{x})$ alakot.

**2.52. példa (Jacobi-iteráció).** *Oldjuk meg a*
$$\begin{alignedat}{9}
4x &{}-{}& y &{}={}& 2 \\
2x &{}-{}& 5y &{}={}& -8
\end{alignedat}$$
*egyenletrendszert Jacobi-iterációval, 3 tizedes pontossággal számolva.*

*Megoldás.* Az egyenletrendszert kiküszöböléssel megoldva kapjuk, hogy $\mathbf{x} = (1, 2)$ az egyetlen megoldás.

Hozzuk az egyenletrendszert $\mathbf{x} = f(\mathbf{x})$, azaz $\begin{bmatrix} x \\ y \end{bmatrix} = f\left(\begin{bmatrix} x \\ y \end{bmatrix}\right)$ alakra. Az első egyenletből fejezzük ki az $x$-et, a másodikból $y$-t:
$$x = \frac{y + 2}{4}, \quad y = \frac{2x + 8}{5}.$$
Válasszunk egy $\mathbf{x}^0$ vektort tetszőlegesen, legyen pl. $\mathbf{x}^0 = (0, 0)$, azaz $x = y = 0$. A fenti képletekbe helyettesítve kapjuk, hogy $\mathbf{x}^1 = \left(\frac{0+2}{4}, \frac{0+8}{5}\right) = (0.5, 1.6)$. A további értékeket egy táblázatban adjuk meg:

| | $\mathbf{x}^0$ | $\mathbf{x}^1$ | $\mathbf{x}^2$ | $\mathbf{x}^3$ | $\mathbf{x}^4$ | $\mathbf{x}^5$ | $\mathbf{x}^6$ | $\mathbf{x}^7$ | $\mathbf{x}^8$ |
|---|---|---|---|---|---|---|---|---|---|
| $x$ | 0 | 0.5 | 0.9 | 0.95 | 0.99 | 0.995 | 0.999 | 1.000 | 1.000 |
| $y$ | 0 | 1.6 | 1.8 | 1.96 | 1.98 | 1.996 | 1.998 | 2.000 | 2.000 |

E példa esetén tehát a végtelen sorozat konvergensnek mutatkozott, de a kerekítési hiba folytán véges sok lépés után megtalálta a konvergenciapontot. $\square$

Az általános eset hasonlóan írható le. Tegyük fel, hogy az
$$\begin{alignedat}{9}
a_{11}x_1 &{}+{}& a_{12}x_2 &{}+{}& \ldots &{}+{}& a_{1n}x_n &{}={}& b_1 \\
a_{21}x_1 &{}+{}& a_{22}x_2 &{}+{}& \ldots &{}+{}& a_{2n}x_n &{}={}& b_2 \\
\vdots && \vdots && && \vdots && \;\,\vdots \\
a_{n1}x_1 &{}+{}& a_{n2}x_2 &{}+{}& \ldots &{}+{}& a_{nn}x_n &{}={}& b_n
\end{alignedat}$$
egyenletrendszer egyértelműen megoldható, és főátlójának minden eleme különbözik 0-tól. A *Jacobi-iteráció* menete tehát a következő. A $k$-adik egyenletből fejezzük ki az $x_k$ változót:
$$\begin{aligned}
x_1 &= \frac{1}{a_{11}}(b_1 - a_{12}x_2 - \ldots - a_{1,n-1}x_{n-1} - a_{1n}x_n) \\
x_2 &= \frac{1}{a_{22}}(b_2 - a_{21}x_1 - \ldots - a_{2,n-1}x_{n-1} - a_{2n}x_n) \\
&\;\;\vdots \\
x_n &= \frac{1}{a_{nn}}(b_n - a_{n1}x_1 - a_{n2}x_2 - \ldots - a_{n,n-1}x_{n-1}).
\end{aligned} \tag{2.23}$$

*2.14. ábra. A Jacobi-iteráció szemléltetése.*

Válasszunk az ismeretlenek $\mathbf{x} = (x_1, x_2, \ldots, x_n)$ vektorának egy $\mathbf{x}^0$ kezdőértéket, pl. legyen $\mathbf{x}^0 = (0, 0, \ldots, 0)$. A (2.23) egyenletrendszer jobb oldalába helyettesítsük be $\mathbf{x}^0$ koordinátáinak értékét, a bal oldal adja $\mathbf{x}^1$ koordinátáit. Ezt a lépést ismételjük meg, generálva az $\mathbf{x}^2$, $\mathbf{x}^3, \ldots$ vektorokat addig, míg el nem érjük a megfelelő pontosságot.

### Gauss–Seidel-iteráció

A Jacobi-iteráció gyorsasága növelhető, ha a (2.23) minden egyenletének jobb oldalába azonnal a már kiszámolt változók új értékeit helyettesítjük. Ezt az algoritmust *Gauss–Seidel-iterációnak* nevezzük.

A kétismeretlenes
$$\begin{alignedat}{9}
a_{11}x &{}+{}& a_{12}y &{}={}& b_1 \\
a_{21}x &{}+{}& a_{22}y &{}={}& b_2
\end{alignedat}$$
egyenletrendszer esetén a Jacobi-iterációnál használt
$$x_{k+1} = \frac{b_1 - a_{12}y_k}{a_{11}}, \quad y_{k+1} = \frac{b_2 - a_{21}x_k}{a_{22}} \tag{2.24}$$
képletek helyett, a Gauss–Seidel-iteráció az
$$x_{k+1} = \frac{b_1 - a_{12}y_k}{a_{11}}, \quad y_{k+1} = \frac{b_2 - a_{21}x_{k+1}}{a_{22}} \tag{2.25}$$
képleteket használja.

**2.53. példa (Gauss–Seidel-iteráció).** *Oldjuk meg a*
$$\begin{alignedat}{9}
4x &{}-{}& y &{}={}& 2 \\
2x &{}-{}& 5y &{}={}& -8
\end{alignedat}$$
*egyenletrendszert Gauss–Seidel-iterációval.*

*Megoldás.* A Gauss–Seidel-iterációnál a sorozatot a
$$x_{k+1} = \frac{2 + y_k}{4}, \quad y_{k+1} = \frac{8 + 2x_{k+1}}{5}$$
formulák generálják. A kiszámolt értékeket táblázatban adjuk meg de úgy, hogy jelezzük a kiszámítás sorrendjét (néhány lépést fejben ellenőrizzünk):

| | $\mathbf{x}^0$ | $\mathbf{x}^1$ | $\mathbf{x}^2$ | $\mathbf{x}^3$ | $\mathbf{x}^4$ |
|---|---|---|---|---|---|
| $x$ | 0 | 0.5 | 0.95 | 0.995 | 1.000 |
| $y$ | 0 | 1.8 | 1.98 | 1.998 | 2.000 |

Hasonlítsuk össze az eredményt a Jacobi iterációnál készített táblázattal. A megoldás szemléltetése a 2.15. ábrán látható. $\square$

*2.15. ábra. A Gauss–Seidel-iteráció szemléltetése.*

### Az iterációk konvergenciája

Vajon a Jacobi- és a Gauss–Seidel-iterációk mindig konvergens sorozatot adnak-e, ha az egyenletrendszer egyértelműen megoldható? A válasz: nem, de bizonyos – egyszerűen ellenőrizhető, és kikényszeríthető – feltételek fennállása esetén igen.

**2.54. példa (Divergens iteráció).** *Oldjuk meg Jacobi- és Gauss–Seidel-iterációval a következő egyenletrendszert:*
$$\begin{alignedat}{9}
x &{}-{}& y &{}={}& 2 \\
2x &{}-{}& y &{}={}& 5
\end{alignedat}$$

*Megoldás.* Alakítsuk át az egyenletrendszert:
$$\begin{aligned}
x &= y + 2 \\
y &= 2x - 5
\end{aligned}$$
Először próbálkozzunk Jacobi-iterációval:

| | $\mathbf{x}^0$ | $\mathbf{x}^1$ | $\mathbf{x}^2$ | $\mathbf{x}^3$ | $\mathbf{x}^4$ | $\mathbf{x}^5$ | $\mathbf{x}^6$ | $\mathbf{x}^7$ | $\mathbf{x}^8$ |
|---|---|---|---|---|---|---|---|---|---|
| $x$ | 0 | 2 | -3 | 1 | -9 | -1 | -21 | -5 | -45 |
| $y$ | 0 | -5 | -1 | -11 | -3 | -23 | -7 | -47 | -15 |

Úgy tűnik, nem konvergens a vektorsorozat, mint ahogy nem tűnik annak a Gauss–Seidel-iterációnál sem:

| | $\mathbf{x}^0$ | $\mathbf{x}^1$ | $\mathbf{x}^2$ | $\mathbf{x}^3$ | $\mathbf{x}^4$ | $\mathbf{x}^5$ |
|---|---|---|---|---|---|---|
| $x$ | 0 | 2 | 1 | -1 | -5 | -13 |
| $y$ | 0 | -1 | -3 | -7 | -15 | -31 |

A divergencia leolvasható az iterációkat szemléltető ábrákról is! $\square$

**2.55. definíció (Soronként domináns főátlójú mátrix).** *Azt mondjuk, hogy az $n \times n$-es $\mathbf{A}$ mátrix soronként (szigorúan) domináns főátlóval rendelkezik, vagy soronként (szigorúan) domináns főátlójú, ha a főátló minden eleme abszolút értékben nagyobb a sorában lévő többi elem abszolút értékeinek összegénél, azaz képletben*
$$\begin{aligned}
|a_{11}| &> |a_{12}| + \ldots + |a_{1,n-1}| + |a_{1n}| \\
|a_{22}| &> |a_{21}| + \ldots + |a_{2,n-1}| + |a_{2n}| \\
&\;\;\vdots \\
|a_{n-1,n-1}| &> |a_{n-1,1}| + |a_{n-1,2}| + \ldots + |a_{n-1,n}| \\
|a_{nn}| &> |a_{n1}| + |a_{n2}| + \ldots + |a_{n,n-1}|
\end{aligned}$$
Hasonlóan definiálható az oszloponként domináns főátlójú mátrix.

Világos, hogy az alábbi mátrixok soronként domináns főátlójúak:
$$\begin{bmatrix} 2 & 1 \\ 0 & 1 \end{bmatrix}, \quad \begin{bmatrix} -10 & 1 & 2 \\ 1 & 10 & -3 \\ -1 & -2 & 10 \end{bmatrix}, \quad \begin{bmatrix} 2 & 0 & 0 \\ 0 & -3 & 0 \\ 0 & 0 & -5 \end{bmatrix}, \quad \begin{bmatrix} 1 & .25 & .25 & .25 \\ .25 & 1 & .25 & .25 \\ .25 & .25 & 1 & .25 \\ .25 & .25 & .25 & 1 \end{bmatrix}.$$
Az alábbi mátrixok nem soronként domináns főátlójúak, de sorcserékkel azzá tehetők:
$$\begin{bmatrix} 0 & 1 \\ 2 & 1 \end{bmatrix}, \quad \begin{bmatrix} -1 & -2 & 10 \\ -10 & 1 & 2 \\ 1 & 10 & -3 \end{bmatrix}, \quad \begin{bmatrix} 0 & -3 & 0 \\ 0 & 0 & -5 \\ 2 & 0 & 0 \end{bmatrix}, \quad \begin{bmatrix} .25 & .25 & .25 & 1 \\ 1 & .25 & .25 & .25 \\ .25 & .25 & 1 & .25 \\ .25 & 1 & .25 & .25 \end{bmatrix}.$$
Az alábbi egyenletrendszer együtthatómátrixa soronként domináns főátlójú:
$$\begin{alignedat}{9}
4x &{}-{}& y &{}={}& 11 \\
2x &{}-{}& 5y &{}={}& -17
\end{alignedat}$$

**2.56. tétel (Elégséges feltétel az iterációk konvergenciájára).** *Ha az $n$ egyenletből álló $n$-ismeretlenes egyenletrendszer együtthatómátrixa soronként domináns főátlójú, akkor bármely indulóvektor esetén a Jacobi- és a Gauss–Seidel-iteráció is konvergens.*

▶ A bizonyításhoz, mely a Banach-fixponttételre épít, itt még hiányoznak eszközeink, de két változó esetére a 2.47. feladat megoldást ad.
▶ A tételbeli feltétel nem szükséges, csak elégséges, azaz olyan egyenletrendszeren is konvergens lehet valamelyik iteráció, melynek nem domináns főátlójú az együtthatómátrixa.
▶ Hasonló tétel igaz oszloponként domináns főátlójú együtthatómátrixok esetén is.
▶ A domináns főátlójú mátrixokon a Gauss–Seidel-iteráció sosem lassabb, mint a Jacobi-iteráció, sőt, gyakran érezhetően gyorsabb. Az viszont előfordulhat, hogy a Gauss–Seidel-iteráció divergens, míg a Jacobi-iteráció konvergens (ld. 2.48. feladat).
▶ A gyakorlatban ezeknél hatékonyabb iterációkat használnak. E témában az Olvasó figyelmébe ajánljuk a *numerikus módszerek* tárgyú könyveket, web-oldalakat, például Faragó István és Horváth Róbert jegyzetét[^5].

[^5]: *Faragó István, Horváth Róbert. Numerikus módszerek. BME, http://math.bme.hu/~rhorvath/nummodszjegyzet.pdf, 2013*

### Feladatok

**2.44.•** Oldjuk meg a
$$\begin{alignedat}{9} 4x &{}-{}& y &{}={}& 8 \\ 2x &{}-{}& 5y &{}={}& -5 \end{alignedat}$$
egyenletrendszert Jacobi- és Gauss–Seidel-iterációval! Számoljunk 3, majd 4 értékes jegyre!

**2.45.•** Oldjuk meg a
$$\begin{alignedat}{9} x &{}+{}& 4y &{}+{}& 2z &{}={}& 5 \\ 3x &{}-{}& 2y &{}+{}& 7z &{}={}& -3 \\ 5x &{}-{}& 2y &{}+{}& z &{}={}& 2 \end{alignedat}$$
egyenletrendszert Jacobi- és Gauss–Seidel-iterációval! Számoljunk 3 értékes jegyre!

**2.46.•** Működnek-e a Jacobi- és Gauss–Seidel-iterációk a
$$\begin{alignedat}{9} 4x &{}+{}& 5y &{}={}& 1 \\ 5x &{}+{}& 7y &{}={}& 2 \end{alignedat}$$
egyenletrendszeren, bár az nem domináns főátlójú, és sorcserével sem tehető azzá?

**2.47.** Igazoljuk, hogy ha a kétismeretlenes
$$\begin{alignedat}{9} a_{11}x &{}+{}& a_{12}y &{}={}& b_1 \\ a_{21}x &{}+{}& a_{22}y &{}={}& b_2 \end{alignedat}$$
egyenletrendszer együtthatómátrixa domináns főátlójú, akkor a Jacobi-iterációnál használt
$$f : \begin{bmatrix} x \\ y \end{bmatrix} \mapsto \begin{bmatrix} \frac{b_1 - a_{12}y}{a_{11}} \\ \frac{b_2 - a_{21}x}{a_{22}} \end{bmatrix}$$
függvény és a Gauss–Seidel-iterációnál a (2.25) képletből származó
$$g : \begin{bmatrix} x \\ y \end{bmatrix} \mapsto \begin{bmatrix} \frac{b_1}{a_{11}} - \frac{a_{12}y}{a_{11}} \\ \frac{b_2}{a_{22}} - \frac{a_{21}}{a_{22}}\left(\frac{b_1}{a_{11}} - \frac{a_{12}}{a_{11}}y\right) \end{bmatrix}$$
függvény mindegyike kontrakció, azaz bármely két $\mathbf{x}^1 = (x_1, y_1)$ és $\mathbf{x}^2 = (x_2, y_2)$ vektor esetén
$$d(f(\mathbf{x}^1), f(\mathbf{x}^2)) \leqslant q\,d(\mathbf{x}^1, \mathbf{x}^2) \quad \text{és}$$
$$d(g(\mathbf{x}^1), g(\mathbf{x}^2)) \leqslant r\,d(\mathbf{x}^1, \mathbf{x}^2),$$
ahol $0 < q < 1$ és $0 < r < 1$ adott konstansok.

**2.48.•** *Jacobi-iteráció konvergál, Gauss–Seidel-iteráció nem.* Írjunk programot annak az állításnak az ellenőrzésére, hogy a
$$\begin{alignedat}{9}
x &&&{}+{}& z &{}={}& 0 \\
-x &{}+{}& \tfrac{5}{6}y &&&{}={}& 0 \\
x &{}+{}& 2y &{}-{}& 3z &{}={}& 1
\end{alignedat}$$
egyenletrendszeren a Jacobi-iteráció konvergál, a Gauss–Seidel-iteráció nem.

**2.49.** *Gauss-elimináció domináns főátlójú mátrixon.* Bizonyítsuk be, hogy ha az $\mathbf{A}$ mátrix főátlója soronként domináns, akkor végrehajtható rajta a főelem-kiválasztásos Gauss-elimináció sorcsere nélkül!

**2.50.** *Az iterációk szemléltetése.* Az $A$ városból elindul egy $A$ jelű vonat a $B$ város felé, vele egy időben a $B$ városból egy $B$ jelű $A$ felé. A $B$ vonat indulásával egy időben a $B$ vonat orráról elindul egy légy is $A$ felé, de amint találkozik az $A$ vonattal megfordul, és addig repül, míg a $B$ vonattal nem találkozik, amikor ismét megfordul, stb. Mindhármuk sebessége konstans, de a légy sebessége nagyobb mindkét vonaténál.
1. Egy táblázatban megadjuk mindkét vonat távolságát az indulási helyüktől km-ben mérve azokban a pillanatokban, amikor a légy épp a $B$ vonattal találkozik.

| | $(x_0, y_0)$ | $(x_1, y_1)$ | $(x_2, y_2)$ | $(x_3, y_3)$ |
|---|---|---|---|---|
| $x$: távolság $A$-tól | 0 | 40 | 48 | 49.6 |
| $y$: távolság $B$-től | 0 | 80 | 96 | 99.2 |

Számítsuk ki a táblázat egy-két további oszlopát! Milyen messze van $A$ város $B$-től?
2. Most egy másik táblázatban megadjuk annak a vonatnak a távolságát az indulási helyétől, amelyik épp találkozik a léggyel:

| | $y_0$ | $x_1$ | $y_1$ | $x_2$ | $y_2$ | $x_3$ | $y_3$ |
|---|---|---|---|---|---|---|---|
| $x$: távolság $A$-tól | | 30 | | 46 | | 49.2 | |
| $y$: távolság $B$-től | 0 | | 80 | | 96 | | 99.2 |

Számítsuk ki a táblázat egy-két további oszlopát! Milyen messze van $A$ város $B$-től?
3. Mi köze van e feladatnak a Jacobi- és a Gauss–Seidel-iterációhoz?

## Megoldások

**2.1.** a) igaz, b) hamis, de pl. ortonormált bázisban igaz, c) igaz, d) hamis, a sík normálvektora $(A, B, 0)$, e) igaz, ugyanis az
$$(x, y, z, w) = (1, -1, 0, 0)t + (0, 0, 1, -1)s$$
explicit egyenlet egy sík egyenlete, f) igaz, g) igaz, ha $(x_1, x_2, x_3, x_4, x_5)$ jelöli az alakzat egy általános pontját, h) igaz, például az $x = 0$, $y = 0$ egyenletrendszerű sík, és $z = 0$, $w = 0$ egyenletrendszerű sík egytlen közös pontja a $(0, 0, 0, 0)$ pont.

**2.2.** Egy tetszőleges $P(x, y, z)$ pont harmadik koordinátája megegyezik a rajta átfektetett és az első két koordinátatengellyel párhuzamos sík harmadik koordinátatengellyel való metszéspontjának koordinátájával. Ezért a feladatbeli sík minden pontjának $(a, b, 5)$ a koordinátás alakja, ahol $a$ és $b$ valósok, másrészt az ilyen alakú pontok mind e síkon vannak. Tehát olyan egyenletet keresünk, amelyben az ismeretlenek $x$, $y$ és $z$, továbbá $x$ és $y$ értéke tetszőleges valós szám, $z$ pedig csak 5 lehet.

Implicit egyenlet a $z = 5$ (másként $0x + 0y + z = 5$), explicit vektoregyenlete és explicit egyenletrendszere
$$\begin{aligned} x &= s \\ y &= t \\ z &= 5, \end{aligned} \quad \text{és} \quad \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} s \\ t \\ 5 \end{bmatrix}.$$

**2.3.** a) Több megoldás is lehetséges. Ha $t = x$-et választjuk paraméternek, akkor $x = t$, $y = 1 - t$, amiből a vektoregyenlet:
$$\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 1 \end{bmatrix} + \begin{bmatrix} 1 \\ -1 \end{bmatrix} t.$$
Az $y$-t választva paraméternek
$$\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \end{bmatrix} + \begin{bmatrix} -1 \\ 1 \end{bmatrix} t.$$
b) Az $x = t$ paraméterválasztás esetén
$$\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 2 \end{bmatrix} + \begin{bmatrix} 1 \\ -2/3 \end{bmatrix} t.$$
Az $x = 3t$-t választva paraméternek
$$\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 2 \end{bmatrix} + \begin{bmatrix} 3 \\ -2 \end{bmatrix} t.$$
c) Az $x = t$ paraméterválasztás esetén
$$\begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 0 \\ 2 \\ -1 \end{bmatrix} + \begin{bmatrix} 1 \\ 1 \\ -1 \end{bmatrix} t.$$
d) Az $x = t$ paraméterválasztás esetén
$$\begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 0 \\ -5 \\ 0 \end{bmatrix} + \begin{bmatrix} 1 \\ -2 \\ 0 \end{bmatrix} t.$$
e) Az $x = t$ paraméterválasztás esetén
$$\begin{bmatrix} x \\ y \\ z \\ w \end{bmatrix} = \begin{bmatrix} 0 \\ -1 \\ 3 \\ -1 \end{bmatrix} + \begin{bmatrix} 1 \\ 1 \\ 0 \\ 0 \end{bmatrix} t.$$
f) Az $x = t$ paraméterválasztás esetén
$$\begin{bmatrix} x \\ y \\ z \\ w \end{bmatrix} = \begin{bmatrix} 0 \\ 2 \\ -1 \\ 2 \end{bmatrix} + \begin{bmatrix} 1 \\ -1 \\ 1 \\ -1 \end{bmatrix} t.$$
A $w = t$ paraméterválasztás esetén
$$\begin{bmatrix} x \\ y \\ z \\ w \end{bmatrix} = \begin{bmatrix} 2 \\ 0 \\ 1 \\ 0 \end{bmatrix} + \begin{bmatrix} -1 \\ 1 \\ -1 \\ 1 \end{bmatrix} t.$$

**2.4.**
- a) $\begin{aligned} x &= t \\ y &= 1 - t \end{aligned}$  b) $\begin{aligned} x &= s \\ y &= t \\ z &= 1 - s - t \end{aligned}$  c) $\begin{aligned} x &= s \\ y &= 1 - s \\ z &= t \end{aligned}$
- d) $\begin{aligned} x &= r \\ y &= s \\ z &= t \\ w &= 1 - r - s - t \end{aligned}$  e) $\begin{aligned} x &= r \\ y &= 1 - r \\ z &= s \\ w &= t \end{aligned}$  f) $\begin{aligned} x &= 1 \\ y &= r \\ z &= s \\ w &= t \end{aligned}$

**2.6.** a) Az explicit egyenletrendszer $x = 2 + t$, $y = 1 + 3t$, a vektoregyenlet
$$\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 2 \\ 1 \end{bmatrix} + \begin{bmatrix} 1 \\ 3 \end{bmatrix} t.$$
Az implicit egyenletek $3(x - 2) = y - 1$, $(3, -1) \cdot (x - 2, y - 1) = 0$, $3x - y = 5$. d) $x = 3$, $y = 4$,
$$\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 3 \\ 4 \end{bmatrix}.$$

g) Az $A(1, 1, 1, 1)$ ponton átmenő, $\overrightarrow{AB} = (1, 2, 1, 3)$ irányvektorú egyenes explicit vektoregyenlete és explicit egyenletrendszere
$$\begin{bmatrix} x \\ y \\ z \\ w \end{bmatrix} = \begin{bmatrix} 1 \\ 1 \\ 1 \\ 1 \end{bmatrix} + t\begin{bmatrix} 1 \\ 2 \\ 1 \\ 3 \end{bmatrix}, \quad \text{illetve} \quad \begin{aligned} x &= 1 + t \\ y &= 1 + 2t \\ z &= 1 + t \\ w &= 1 + 3t. \end{aligned}$$
Az implicit egyenletrendszerek megkaphatók a $t$ kifejezésével az előző egyenletrendszerből:
$$x - 1 = \frac{y - 1}{2} = z - 1 = \frac{w - 1}{3}.$$
Innen három *független* egyenlet kiválasztása többféleképp is lehetséges, egyik például a következő:
$$\begin{alignedat}{9}
2x &{}-{}& y &&&{}={}& 1 \\
x &&&{}-{}& z &{}={}& 0 \\
3x &&&{}-{}& w &{}={}& 2.
\end{alignedat}$$

**2.7.** a) A három pontba mutató vektorok különbségei a síkkal párhuzamos vektorok, így azokkal felírható a sík mindegyik egyenlete. Két vektor a lehetséges háromból:
$$\mathbf{u} = (2, 1, 4) - (0, -1, 2) = (2, 2, 2), \text{ és}$$
$$\mathbf{v} = (-1, 0, 7) - (0, -1, 2) = (-1, 1, 5).$$
Ezek alapján például az $\mathbf{r}_0 = (0, -1, 2)$ választás mellett a sík egyenletei megegyeznek a 2.14. példában leírtakkal, mivel ugyanarról a síkról van szó.

c) Az $\overrightarrow{AB} = (1, 2, 1, 3)$ és az $\overrightarrow{AC} = (2, 1, 0, -1)$ vektorok segítségével fölírható a sík egyenlete:
$$\begin{bmatrix} x \\ y \\ z \\ w \end{bmatrix} = \begin{bmatrix} 1 \\ 1 \\ 1 \\ 1 \end{bmatrix} + s\begin{bmatrix} 1 \\ 2 \\ 1 \\ 3 \end{bmatrix} + t\begin{bmatrix} 2 \\ 1 \\ 0 \\ -1 \end{bmatrix}.$$
Kiküszöbölve az $s$ és $t$ paramétereket két egyenletet kaphatunk, például
$$\begin{alignedat}{9}
x &{}-{}& 2y &{}+{}& 3z &&&{}={}& 2 \\
&& y &{}-{}& 5z &{}+{}& w &{}={}& -3.
\end{alignedat}$$

**2.8.** a) $\overrightarrow{AB} = (0, 1, 2, 3)$, $\overrightarrow{AC} = (1, 1, 0, 0)$, $\overrightarrow{AD} = (0, 0, 1, 1)$. Innen a vektoregyenlet:
$$\begin{bmatrix} x \\ y \\ z \\ w \end{bmatrix} = \begin{bmatrix} 0 \\ 1 \\ 1 \\ 1 \end{bmatrix} + \begin{bmatrix} 0 \\ 1 \\ 2 \\ 3 \end{bmatrix} r + \begin{bmatrix} 1 \\ 1 \\ 0 \\ 0 \end{bmatrix} s + \begin{bmatrix} 0 \\ 0 \\ 1 \\ 1 \end{bmatrix} t.$$
Az explicit egyenletrendszer
$$\begin{aligned} x &= s \\ y &= 1 + r + s \\ z &= 1 + 2r + t \\ w &= 1 + 3r + t \end{aligned}$$
Ebben az explicit egyenletrendszerben keressünk három olyan egyenletrendszert, melyek megoldhatók az $r$, $s$, $t$ ismeretlenekre nézve, és ezeket helyettesítsük be a negyedik egyenletbe. Eredményül az
$$x - y - z + w = 1$$
egyenletet kapjuk, mely a hipersík implicit egyenlete.

b) $\overrightarrow{AB} = (0, 1, 2, 3)$, $\overrightarrow{AC} = (0, 1, 0, 0)$, $\overrightarrow{AD} = (0, 0, 1, 1)$. Innen a vektoregyenlet:
$$\begin{bmatrix} x \\ y \\ z \\ w \end{bmatrix} = \begin{bmatrix} 0 \\ 1 \\ 1 \\ 1 \end{bmatrix} + \begin{bmatrix} 0 \\ 1 \\ 2 \\ 3 \end{bmatrix} r + \begin{bmatrix} 0 \\ 1 \\ 0 \\ 0 \end{bmatrix} s + \begin{bmatrix} 0 \\ 0 \\ 1 \\ 1 \end{bmatrix} t.$$
Az implicit egyenlet $x = 0$.

c) $\overrightarrow{AB} = (0, 1, 0, 3)$, $\overrightarrow{AC} = (1, 1, 0, 0)$, $\overrightarrow{AD} = (0, 0, 1, 1)$. Innen a vektoregyenlet:
$$\begin{bmatrix} x \\ y \\ z \\ w \end{bmatrix} = \begin{bmatrix} 1 \\ 1 \\ 1 \\ 1 \end{bmatrix} + \begin{bmatrix} 0 \\ 1 \\ 0 \\ 3 \end{bmatrix} r + \begin{bmatrix} 1 \\ 1 \\ 0 \\ 0 \end{bmatrix} s + \begin{bmatrix} 0 \\ 0 \\ 1 \\ 1 \end{bmatrix} t.$$
Az implicit egyenlet $y + z = 0$.

**2.9.** Mivel $(A, B)$ az egyenes egy normálvektora, ezért ha $\mathbf{r}$ az egyenes egy tetszőleges, $\mathbf{r}_0$ egy rögzített pontjába mutató vektor, akkor az $\mathbf{r} - \mathbf{r}_0 = (x - x_0, y - y_0)$ merőleges a normálvektorra, így skaláris szorzatuk 0, azaz
$$(A, B) \cdot (x - x_0, y - y_0) = 0.$$
E skaláris szorzást elvégezve az $Ax + By = Ax_0 + By_0$ formulát kapjuk, ami a kívánt alakú. Másrészt ha $Ax + By = C$, akkor $(A, B) \neq (0, 0)$ miatt az $Ax_0 + By_0 = C$ egyenlet megoldható. Egy ilyen megoldásra $Ax + By = Ax_0 + By_0$, amiből $(A, B) \cdot (x - x_0, y - y_0) = 0$, tehát $(x, y)$ csak az $(x_0, y_0)$ ponton átmenő, $(A, B)$-re merőleges egyenes pontja lehet.

**2.13.** a) igen, b) igen, c) nem, d) igen, e) igen, f) nem.

**2.14.** Könnyen látható, hogy mindkét egyenletrendszer egyetlen megoldása: $x = 2$, $y = 1$, tehát a két egyenletrendszer ekvivalens.

**2.15.** Az első egyenletrendszer nem oldható meg a $0 = 3$ alakú egyenlet miatt, de a második sem, mivel nincs olyan $x$ és $y$, melyre $x + y = 2$ és $x + y = 7$ lenne, hisz $2 \neq 7$.

**2.16.** Behelyettesítés után mindkét egyenlet $0 = 0$ alakú, amit tetszőleges $x$ és $y$ kielégít, így az összes $(x, y)$ számpár megoldása az egyenletrendszernek.

**2.17.** $x = 1$, $y$ tetszőleges, azaz az összes $(1, y)$ alakú számpár megoldás.

**2.18.** A második egyenlet behelyettesítés után $0 = 1$ alakú, így az egyenletrendszernek nincs megoldása.

**2.19.** $x = 1$, $y = 2$, azaz $(x, y) = (1, 2)$ az egyetlen megoldás.

**2.21.** a) A sormodellben két metsző egyenest kell megrajzolni ($y = \frac{7}{3} - \frac{2}{3}x$, $y = -2 + \frac{3}{2}x$), melyek a $(2, 1)$ pontban metszik egymást, míg az oszlopmodellben a $(2, 3)$, a $(3, -2)$ vektorokat és az azok lineáris kombinációjaként előállított $(7, 4)$ vektort!

b) A sormodellben két párhuzamos egyenest kell megrajzolni, míg az oszlopmodellben a $(2, 3)$ és a $(4, 6)$ vektorokat, melyek egymással párhuzamosak, így lineáris kombinációjuk sem adja ki a $(3, 4)$ vektort!

**2.22.** A három sík közül semelyik kettő nem párhuzamos, másrészt a normálvektoraik egy síkba esnek, ugyanis $2(1, 1, 2) + (1, 2, 4) = (3, 4, 8)$. Ez azt jelenti, hogy van olyan vektor, mely mindhárom síkkal párhuzamos. Az első esetben a három sík egyenesbe megy át, mivel a síkoknak közös pontjuk, pl. a $(3, 0, 0)$ pont, így végtelen sok megoldása is van, míg a második esetben a síkoknak nincs közös pontjuk.

Az egyenletrendszerek ekvivalensek a következő vektoregyenletekkel:
$$\begin{bmatrix} 1 \\ 1 \\ 3 \end{bmatrix} x + \begin{bmatrix} 1 \\ 2 \\ 4 \end{bmatrix} y + \begin{bmatrix} 2 \\ 4 \\ 8 \end{bmatrix} z = \begin{bmatrix} 3 \\ 3 \\ 9 \end{bmatrix}, \quad \begin{bmatrix} 1 \\ 1 \\ 3 \end{bmatrix} x + \begin{bmatrix} 1 \\ 2 \\ 4 \end{bmatrix} y + \begin{bmatrix} 2 \\ 4 \\ 8 \end{bmatrix} z = \begin{bmatrix} 3 \\ 3 \\ 1 \end{bmatrix}.$$
Itt a közös együtthatómátrix minden oszlopvektora benne van a
$$2x + y - z = 0$$
egyenletű síkban, (ez könnyen ellenőrizhető a vektorok koordinátáinak a sík egyenletébe való helyettesítésével), és ki is feszítik a síkot, mert a három vektor nem kollineáris. Másrészt a $(3, 3, 9)$ vektor is benne van e síkban, a $(3, 3, 1)$ vektor viszont nem. Tehát az első egyenletrendszer megoldható, a második nem.

**2.23.** A sormodell szerinti ábra az a) esetben 3 síkbeli egyenest tartalmaz, melyek közt van két párhuzamos, így az egyenletrendszer nem oldható meg. A b) esetben a három egyenes egy ponton megy át, ez a megoldás: $x = 2$, $y = 1$. A c) esetben ugyan nincsenek párhuzamos egyenesek, de nincs közös pontjuk sem, így az egyenletrendszer nem oldható meg. Az oszlopmodell szerint az a)
$$\begin{alignedat}{9}
x &{}+{}& y &{}={}& 3 \\
x &{}+{}& y &{}={}& 4 \\
x &{}+{}& 2y &{}={}& 4
\end{alignedat}$$
egyenletrendszer ekvivalens a következővel:
$$\begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix} x + \begin{bmatrix} 1 \\ 1 \\ 2 \end{bmatrix} y = \begin{bmatrix} 3 \\ 4 \\ 4 \end{bmatrix}.$$
Az $(1, 1, 1)$ és $(1, 1, 2)$ vektorok benne fekszenek az $x = y$ egyenletű síkban, mivel első két koordinátájuk megegyezik, ezért minden lineáris kombinációjuk is ebbe a síkba esik. A $(3, 4, 4)$ vektor viszont nem esik e síkba, így *független* az előbbi kettőtől, tehát nem áll elő azok lineáris kombinációjaként. Vagyis ez az egyenletrendszer nem oldható meg. A b) és c) egyenletrendszerekben a bal oldali két vektor, az $(1, 1, 1)$ és az $(1, 2, 3)$ az $x - 2y + z = 0$ egyenletű síkban van, melyben a $(3, 4, 5)$ vektor benne van, míg a $(3, 3, 5)$ vektor nincs benne, tehát b) megoldható, c) nem.

**2.24.** a) hamis, az állítás csak úgy igaz, ha a párhuzamos hipersíkok különbözőek is (két azonos hipersíkot párhuzamosnak tekintünk), b) hamis, például a 2.9. (a) ábrán látható esetben nincsenek párhuzamos síkok, és mégsincs megoldás, c) igaz, mert akkor a jobb oldalon álló bármely vektor kifejezhető e két kétdimenziós vektor lineáris kombinációjaként, tehát az egyenletrendszer megoldható.

**2.25.**
- a) Egy két egyenletből álló háromismeretlenes egyenletrendszer sormodellje szerinti ábra a **három**dimenziós térben **két** darab **síkból** áll, melyek ha **párhuzamosak, de nem azonosak,** akkor az egyenletrendszernek nincs megoldása, egyébként megoldásainak száma **végtelen.** Oszlopmodellje a **két**dimenziós térben **négy** darab **vektorból** áll (három lineáris kombinációja a negyedik).
- b) Egy három egyenletből álló kétismeretlenes egyenletrendszer sormodellje szerinti ábra a **két**dimenziós térben **három egyenesből** áll, míg az oszlopmodellje a **három**dimenziós térben **három** darab **vektorból.**
- c) Egy négy egyenletből álló ötismeretlenes egyenletrendszer sormodellje szerinti ábra az **öt**dimenziós térben **négy** darab **hipersíkból** áll. Oszlopmodellje a **négy**dimenziós térben **hat** darab **vektorból** áll.

**2.26.** a) Igaz, ez a szám megegyezik a főelemek számával. b) Igaz, ez a szám megegyezik a főelemek számával. c) Hamis, van lépcsős alakja minden mátrixnak, de csak a redukált lépcsős alak egyértelmű. d) Hamis. e) Igaz.

**2.27.** $\begin{bmatrix} 1 & 0 & 1 & 0 & -1 \\ 0 & 1 & 0 & 1 & 2 \\ 0 & 0 & 0 & 0 & 0 \end{bmatrix}$

**2.28.** $\begin{bmatrix} 1 & 0 & 0 & 0 & 0 \\ 0 & 1 & 0 & 1 & 2 \\ 0 & 0 & 1 & 0 & -1 \end{bmatrix}$

**2.29.** A sorcsere előállítható a beszorzás és a hozzáadás segítségével, nevezetesen az $S_i \leftrightarrow S_j$ sorcsere ekvivalens az
$$S_i + S_j, \; S_j - S_i, \; S_i + S_j, \; -S_j,$$
elemi sorműveletekkel. Ellenőrzésül a mátrixokon való hatásukat is megadjuk:
$$\begin{bmatrix} \vdots \\ \mathbf{s}_i \\ \vdots \\ \mathbf{s}_j \\ \vdots \end{bmatrix} \xrightarrow{S_i + S_j} \begin{bmatrix} \vdots \\ \mathbf{s}_i + \mathbf{s}_j \\ \vdots \\ \mathbf{s}_j \\ \vdots \end{bmatrix} \xrightarrow{S_j - S_i} \begin{bmatrix} \vdots \\ \mathbf{s}_i + \mathbf{s}_j \\ \vdots \\ -\mathbf{s}_i \\ \vdots \end{bmatrix} \xrightarrow{S_i + S_j} \begin{bmatrix} \vdots \\ \mathbf{s}_j \\ \vdots \\ -\mathbf{s}_i \\ \vdots \end{bmatrix} \xrightarrow{-S_j} \begin{bmatrix} \vdots \\ \mathbf{s}_j \\ \vdots \\ \mathbf{s}_i \\ \vdots \end{bmatrix}$$

**2.30.** Az egyenletrendszernek és lépcsős alakjának bővített mátrixa:
$$\left[\begin{array}{ccccc|c} 1 & 1 & 1 & 0 & 0 & 1 \\ 0 & 1 & 1 & 1 & 0 & 2 \\ 0 & 0 & 1 & 1 & 1 & 2 \\ 1 & 0 & 0 & 1 & 1 & 1 \end{array}\right] \longrightarrow \left[\begin{array}{ccccc|c} 1 & 1 & 1 & 0 & 0 & 1 \\ 0 & 1 & 1 & 1 & 0 & 2 \\ 0 & 0 & 1 & 1 & 1 & 2 \\ 0 & 0 & 0 & 2 & 1 & 2 \end{array}\right]$$
Legyen $x_5 = t$, az utolsó egyenletből $x_4 = 1 - \frac{1}{2}t$, a harmadik egyenletbe való helyettesítés után $x_3 = 1 - \frac{1}{2}t$, a második egyenletből $x_2 = t$, végül az első egyenletből $x_1 = -\frac{1}{2}t$. Tehát a megoldás
$$\begin{bmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \\ x_5 \end{bmatrix} = \begin{bmatrix} -\frac{1}{2}t \\ t \\ 1 - \frac{1}{2}t \\ 1 - \frac{1}{2}t \\ t \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 1 \\ 1 \\ 0 \end{bmatrix} + t\begin{bmatrix} -\frac{1}{2} \\ 1 \\ -\frac{1}{2} \\ -\frac{1}{2} \\ 1 \end{bmatrix}.$$
Az $x_4 = t$ paraméterválasztás esetén az eredmény törtmentes alakot ölt:
$$\begin{bmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \\ x_5 \end{bmatrix} = \begin{bmatrix} t - 1 \\ -2t + 2 \\ t \\ t \\ -2t + 2 \end{bmatrix} = \begin{bmatrix} -1 \\ 2 \\ 0 \\ 0 \\ 2 \end{bmatrix} + t\begin{bmatrix} 1 \\ -2 \\ 1 \\ 1 \\ -2 \end{bmatrix}.$$

**2.31.** Egyetlen elemi sorművelet világossá teszi, hogy az egyenletrendszer inkonzisztens:
$$\left[\begin{array}{ccc|c} 1 & 1 & 1 & 4 \\ -1 & 1 & -1 & 2 \\ 2 & 1 & 2 & 1 \\ 4 & 4 & 4 & 1 \end{array}\right] \xrightarrow{S_4 - 4S_1} \left[\begin{array}{ccc|c} 1 & 1 & 1 & 4 \\ -1 & 1 & -1 & 2 \\ 2 & 1 & 2 & 1 \\ 0 & 0 & 0 & -15 \end{array}\right]$$

**2.32.** Az elemi sorműveletek:
$$\left[\begin{array}{ccc|c} 7 & 14 & -21 & 7 \\ 1 & 2 & -3 & 1 \\ 5 & 10 & 15 & 5 \\ 3 & 6 & -9 & 3 \end{array}\right] \xrightarrow{\frac{1}{7}S_1, \frac{1}{5}S_3, \frac{1}{3}S_4} \left[\begin{array}{ccc|c} 1 & 2 & -3 & 1 \\ 1 & 2 & -3 & 1 \\ 1 & 2 & 3 & 1 \\ 1 & 2 & -3 & 1 \end{array}\right] \xrightarrow{\substack{S_2 - S_1 \\ S_3 - S_1 \\ S_4 - S_1}}$$
$$\left[\begin{array}{ccc|c} 1 & 2 & -3 & 1 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 6 & 0 \\ 0 & 0 & 0 & 0 \end{array}\right] \longrightarrow \left[\begin{array}{ccc|c} 1 & 2 & -3 & 1 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{array}\right].$$
Innen a megoldás:
$$\begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 1 - 2t \\ t \\ 0 \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix} + t\begin{bmatrix} -2 \\ 1 \\ 0 \end{bmatrix}.$$
E feladat arra példa, hogy abból, hogy az egyenletek száma több az ismeretleneknél, nem következik, hogy az egyenletrendszer inkonzisztens. Sőt, mint látjuk, akár végtelen sok megoldása is lehet!

**2.33.** $(x, y, z) = (19/3, -2, 2/3)$ az egyetlen megoldás. E feladat arra példa, hogy abból, hogy az egyenletek száma több az ismeretleneknél, nem következik, hogy az egyenletrendszer inkonzisztens.

**2.34.** Az egyenletrendszer inkonzisztens.

**2.35.** $$\begin{bmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{bmatrix} = \begin{bmatrix} 2 - s - t \\ 1 + s - 3t \\ s \\ t \end{bmatrix} = \begin{bmatrix} 2 \\ 1 \\ 0 \\ 0 \end{bmatrix} + s\begin{bmatrix} -1 \\ 1 \\ 1 \\ 0 \end{bmatrix} + t\begin{bmatrix} -1 \\ -3 \\ 0 \\ 1 \end{bmatrix}.$$

**2.36.** a) Felírjuk a bővített mátrixot, majd használjuk a Gauss–Jordan-módszert:
$$\left[\begin{array}{cc|cc} 2 & 1 & 1 & 0 \\ 5 & 3 & 0 & 1 \end{array}\right] \xrightarrow{S_2 - \frac{5}{2}S_1} \left[\begin{array}{cc|cc} 2 & 1 & 1 & 0 \\ 0 & \frac{1}{2} & -\frac{5}{2} & 1 \end{array}\right] \xrightarrow{2S_2}$$
$$\left[\begin{array}{cc|cc} 2 & 1 & 1 & 0 \\ 0 & 1 & -5 & 2 \end{array}\right] \xrightarrow{S_1 - S_2} \left[\begin{array}{cc|cc} 2 & 0 & 6 & -2 \\ 0 & 1 & -5 & 2 \end{array}\right] \xrightarrow{\frac{1}{2}S_1}$$
$$\left[\begin{array}{cc|cc} 1 & 0 & 3 & -1 \\ 0 & 1 & -5 & 2 \end{array}\right].$$
Az első egyenletrendszer megoldása $x = 3$, $y = -5$, a másodiké $x = -1$, $y = 2$.
b) Az első egyenletrendszer ellentmondásos, a második megoldásai $x = 1 - \frac{1}{2}t$, $y = t$, ugyanis
$$\left[\begin{array}{cc|cc} 2 & 1 & 1 & 2 \\ 4 & 2 & 0 & 4 \end{array}\right] \xrightarrow{\operatorname{rref}} \left[\begin{array}{cc|cc} 1 & \frac{1}{2} & 0 & 1 \\ 0 & 0 & 1 & 0 \end{array}\right].$$

c) A megoldások leolvashatók a bővített mátrix redukált lépcsős alakjából:
$$\left[\begin{array}{ccc|cc} 1 & 1 & 1 & 1 & 0 \\ 1 & 2 & 3 & 4 & 5 \\ 1 & 2 & 2 & 1 & 1 \end{array}\right] \xrightarrow{\operatorname{rref}} \left[\begin{array}{ccc|cc} 1 & 0 & 0 & 1 & -1 \\ 0 & 1 & 0 & -3 & -3 \\ 0 & 0 & 1 & 3 & 4 \end{array}\right].$$
d) A megoldások leolvashatók a bővített mátrix redukált lépcsős alakjából:
$$\left[\begin{array}{ccc|ccc} 1 & 0 & 0 & -1 & -1 & -2 \\ 0 & 1 & 0 & 1 & 0 & 1 \\ 0 & 0 & 1 & 1 & 2 & 2 \end{array}\right].$$

**2.37.** a) Igaz. b) Hamis, az egyenletrendszer megoldhatósága nem függ az egyenletek számától. Az ismeretlenek számánál akár kevesebb, akár több egyenletből álló rendszer akár konzisztens, akár inkonzisztens is lehet. c) Igaz. d) Igaz, a nullvektor mindig megoldás.

**2.38.** Igen, mindkettőnek $(x, y, z) = (1, 2, 3)$ az egyetlen megoldása, azaz megoldáshalmazaik megegyeznek.

**2.39.** Igen, mindkettő bővített együtthatómátrixának redukált lépcsős alaka a zérussor nélkül
$$\left[\begin{array}{cc|cc} 1 & 0 & -0.8 & 1.8 \\ 0 & 1 & 2.2 & -1.2 \end{array}\right]$$

**2.40.** a) Igen. b) Nem.

**2.41.** Ha az egyenletrendszernek van legalább három sora, akkor – mivel bármely két szomszédos sor különbsége azonos – az első két sor lineáris kombinációjaként megkapható az összes többi, így nem tudunk $n > 2$ esetén $n$ független egyenletből álló $n$-ismeretlenes egyenletrendszert fölírni, hogy csak egyetlen megoldása legyen. Ha $n = 2$, akkor a bővített mátrix és annak lépcsős alakja
$$\left[\begin{array}{cc|c} a & a + d & a + 2d \\ a + 3d & a + 4d & a + 5d \end{array}\right] \longrightarrow \left[\begin{array}{cc|c} 1 & 1 & 1 \\ 0 & 1 & 2 \end{array}\right],$$
ahol $a$ tetszőleges, $d \neq 0$. Innen a megoldásvektor $(-1, 2)$. (Két ismeretlen, de kettőnél több egyenlet esetén, $d \neq 0$ mellett két független egyenlet lesz, melyek ugyanezt a megoldást adják.)

**2.42.** Mind a négy egyenlet megfelelő helyettesítéssel a következő lineáris egyenletrendszerre vezet:
$$\begin{alignedat}{9}
2X &{}+{}& 2Y &{}={}& 8 \\
3X &{}+{}& Y &{}={}& 4
\end{alignedat}$$
Ennek megoldása $X = 0$, $Y = 4$. Innen a) $(x, y) = (0, 16)$, b) két megoldás van: $(0, 2)$ és $(0, -2)$, c) ez az egyenletrendszer nem oldható meg, mivel a $e^x = 0$ egyenlet nem oldható meg, d) ez az egyenletrendszer sem oldható meg, mivel a $\cos x = 4$ egyenlet nem oldható meg (a valós számok körében).

**2.43.** Jelölje az 1, 5 és 10 Ft-osok számát rendre $x$, $y$ és $z$. A feladat a következő egyenletrendszerre vezet:
$$x + y + z = 11 \tag{2.21}$$
$$x + 2y + 5z = 53 \tag{2.22}$$
Ennek megoldásai $(x, y, z) = \left(\frac{1}{2} + \frac{5}{2}t, \frac{21}{2} - \frac{9}{4}t, t\right)$. A 10 Ft-os érmék száma legföljebb 5, így elég a $t = 1, 2, \ldots, 5$ értékeket kipróbálni. Az egyetlen megoldás, amely pozitív egészekből áll, azaz ahol minden érme darabszáma pozitív egész: $x = 3$, $y = 6$, $z = 2$. (Ha észrevesszük, hogy csak úgy kaphatunk egész megoldásokat, ha $t$ néggyel osztva kettő maradékot ad, akkor a $t = 2$ eseten kívül más megoldás nem is jöhet szóba.)

**2.44.** A Jacobi-iteráció lépéseinek táblázata 3 értékes jeggyel számolva $\mathbf{x}^0 = (0, 0)$ kezdővektorral:

| | $\mathbf{x}^0$ | $\mathbf{x}^1$ | $\mathbf{x}^2$ | $\mathbf{x}^3$ | $\mathbf{x}^4$ | $\mathbf{x}^5$ | $\mathbf{x}^6$ |
|---|---|---|---|---|---|---|---|
| $x$ | 0 | 2 | 2.25 | 2.45 | 2.48 | 2.50 | 2.50 |
| $y$ | 0 | 1.80 | 1.90 | 1.98 | 1.99 | 2.00 | 2.00 |

Az iteráció lépései 4 értékes jeggyel számolva:

| | $\mathbf{x}^0$ | $\mathbf{x}^1$ | $\mathbf{x}^2$ | $\mathbf{x}^3$ | $\mathbf{x}^4$ | $\mathbf{x}^5$ | $\mathbf{x}^6$ | $\mathbf{x}^7$ | $\mathbf{x}^8$ |
|---|---|---|---|---|---|---|---|---|---|
| $x$ | 0 | 2 | 2.25 | 2.45 | 2.475 | 2.495 | 2.498 | 2.500 | 2.5 |
| $y$ | 0 | 1.80 | 1.90 | 1.980 | 1.990 | 1.998 | 1.999 | 2.0 | |

**2.45.** Az egyenletrendszer sorcserékkel domináns főátlójúvá tehető. A megoldás $(x, y, z) = (1, 1.25, -0.5)$.

**2.50.** A Jacobi-iteráció szerinti módon, a vonatok valamelyikének és a légynek a $k$-adik találkozásából kiszámítva a $k + 1$-edik találkozásra jellemző távolságokat, az $x_{k+1} = ay_k + b$, $y_{k+1} = cx_k + d$ egyenletekre jutunk. Az első táblázat adatait behelyettesítve, és $a$, $b$, $c$ és $d$ értékre megoldva az $a = 1/10$, $b = 40$, $c = 2/5$, $d = 80$ értékeket kapjuk, amiből a táblázat további értékei számolhatók, és az eredeti egyenletrendszer is fölírható:
$$\begin{alignedat}{9}
x &{}-{}& \tfrac{1}{10}y &{}={}& 40 \\
-\tfrac{2}{5}x &{}+{}& y &{}={}& 80.
\end{alignedat}$$
Ennek megoldása $(x, y) = (50, 100)$, vagyis a vonatok találkozásáig az $A$ vonat 50 km-t, a $B$ vonat 100 km-t tesz meg. Eszerint a két város 150 km-re van egymástól.

A Gauss–Seidel-iteráció szerinti $x_{k+1} = ay_k + b$, $y_{k+1} = cx_{k+1} + d$ egyenletek épp illeszkednek a feladat második táblázatához az $a = 1/5$, $b = 30$, $c = 1$, $d = 50$ értékekkel. Ez az
$$\begin{alignedat}{9}
x &{}-{}& \tfrac{1}{5}y &{}={}& 30 \\
-x &{}+{}& y &{}={}& 50
\end{alignedat}$$
egyenletrendszerhez tartozik, melynek megoldása ismét $(x, y) = (50, 100)$.

# 3. Megoldhatóság és a megoldások tere

E fejezetet az egyenletrendszer megoldásainak jellemzésére szánjuk. Ennek során egy apró lépést teszünk a vektortér általános fogalmának bevezetése felé, és megmutatjuk, hogy egy lineáris egyenletrendszer megoldásai vektorteret alkotnak. Végül megmutatjuk, hogy minden konzisztens lineáris egyenletrendszer origóhoz legközelebbi megoldása az egyetlen, mely a sortérbe esik.

## Homogén és inhomogén egyenletrendszerek megoldásai

*Az előzőekben a megoldások megtalálásának módszereit tanulmányoztuk. E szakaszban a megoldhatóság kérdését és a megoldások halmazának legfontosabb tulajdonságait vizsgáljuk. A vizsgálatokban a lineáris egyenletrendszerek mindkét geometriai interpretációja fontos szerepet kap.*

### Kötött változók száma, mátrix rangja

A redukált lépcsős alak egyértelműségének nyilvánvaló, de fontos folyománya az alábbi eredmény:

**3.1. következmény (Főelemek oszlopai).** *Egy valós mátrix bármely lépcsős alakjában a főelemek ugyanazokban az oszlopokban vannak, tehát ezek száma is független a lépcsős alaktól.*

A bizonyítás azonnal adódik abból, hogy bármely lépcsős alak főelemeiből kapjuk a redukált lépcsős alak vezéregyeseit, így bármely lépcsős alak főelemei ugyanott vannak, ahol a vezéregyesek, a redukált lépcsős alak pedig egyértelmű.

Ebből az is következik, hogy bármely valós mátrix esetén
$$\text{(bármely lépcsős alak főelemeinek száma)} = \text{(bármely lépcsős alak nemzérus sorainak száma)} = \text{(a redukált lépcsős alak vezéregyeseinek száma).}$$
Ez a következő definícióhoz vezet.

**3.2. definíció (Mátrix rangja).** *Egy mátrix valamely lépcsős alakjában a nemnulla sorok számát a mátrix* rangjának *nevezzük. Az $\mathbf{A}$ mátrix rangját $\operatorname{r}(\mathbf{A})$, $\operatorname{rang}(\mathbf{A})$ vagy $\operatorname{rank}(\mathbf{A})$ jelöli.*

**3.3. példa (Mátrix rangjának kiszámítása).** *Számítsuk ki az alábbi mátrixok rangját!*
$$\begin{bmatrix} 2 & 3 \\ 0 & 0 \end{bmatrix}, \quad \begin{bmatrix} 3 & 2 & 1 \\ 0 & 0 & 4 \end{bmatrix}, \quad \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & 1 & -1 & -1 \\ 1 & -1 & 1 & -1 \\ 1 & -1 & -1 & 1 \end{bmatrix}, \quad \begin{bmatrix} 0 & 1 & 1 & 0 \\ 1 & 0 & 0 & 1 \\ 1 & 0 & 0 & 1 \\ 0 & 1 & 1 & 0 \end{bmatrix}.$$

*Megoldás.* Az első és második mátrix lépcsős alakú, rangjuk 1, ill. 2. A harmadik és negyedik mátrix elemi sorműveletekkel
$$\begin{bmatrix} 1 & 1 & 1 & 1 \\ 0 & -2 & 0 & -2 \\ 0 & 0 & -2 & 2 \\ 0 & 0 & 0 & -4 \end{bmatrix}, \text{ illetve} \quad \begin{bmatrix} 1 & 0 & 0 & 1 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix}$$
alakra hozható, tehát a rang 4, illetve 2. $\square$

**3.4. állítás (Kötött és szabad változók száma).** *Ha egy $n$-ismeretlenes egyenletrendszer megoldható, és együtthatómátrixának rangja $r$, akkor a Gauss- vagy a Gauss–Jordan-módszerrel kapott megoldásában a kötött változók száma $r$, a szabad változók száma $n - r$.*

▶ Megjegyezzük, hogy egyelőre csak annyit látunk, hogy ha az együtthatómátrix és a bővített mátrix rangja $r$, akkor az egyenletrendszernek *van olyan megoldása,* amelyben a kötött változók száma $r$, a szabad változóké $n - r$, és egy ilyen megoldás megkapható a Gauss- vagy a Gauss–Jordan-módszerrel. Arról még nem tudunk semmit, hogy a változók sorrendjének felcserélésével, vagy más megoldási módszerrel nem kaphatjuk-e meg ugyanazt a megoldást több vagy épp kevesebb kötött változóval. A következő, 3. fejezetben be fogjuk látni, hogy a kötött és szabad változók száma független a változók sorrendjétől, és a meghatározásuk módszerétől.
▶ Például a
$$\left[\begin{array}{ccccccc|c} 1 & 3 & 2 & 6 & 0 & 4 & 1 & 2 \\ 0 & 0 & 3 & 1 & 2 & 3 & 0 & 1 \\ 0 & 0 & 0 & 0 & 0 & 0 & 4 & 5 \\ 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \end{array}\right]$$
bővített mátrixhoz tartozó egyenletrendszerben 3 a kötött és 4 a szabad változók száma.

### Egyenletrendszer megoldhatóságának feltétele

Tudjuk, hogy egy lineáris egyenletrendszer pontosan akkor *nem* oldható meg, ha a bővített mátrix lépcsős alakjának van olyan sora, melyben csak a legutolsó elem nem nulla. Ez ugyanis egyenletté visszaírva $0 = c$ alakú, ahol $c \neq 0$, és ennek az egyenletnek nincs megoldása. Ez viszont azt jelenti, hogy ilyenkor a bővített mátrix rangja nagyobb az együtthatómátrix rangjánál. E megállapítás azonnali következménye a következő tétel.

**3.5. tétel (A megoldhatóság mátrixrangos feltétele).** *Legyen egy $n$-ismeretlenes lineáris egyenletrendszer együtthatómátrixa $\mathbf{A}$, a konstans tagokból álló vektora $\mathbf{b}$.*
1. *Ez az egyenletrendszer pontosan akkor oldható meg, ha együtthatómátrixának és bővített mátrixának rangja megegyezik, azaz*
$$\operatorname{r}(\mathbf{A}) = \operatorname{r}(\mathbf{A}|\mathbf{b}).$$
2. *Ez az egyenletrendszer pontosan akkor oldható meg egyértelműen, ha együtthatómátrixának és bővített mátrixának rangja megegyezik az ismeretlenek számával, azaz*
$$\operatorname{r}(\mathbf{A}) = \operatorname{r}(\mathbf{A}|\mathbf{b}) = n.$$

*Bizonyítás.* 1. Az egyenletrendszer pontosan akkor oldható meg, ha bővített mátrixának lépcsős alakjában nincs olyan sor, melynek csak az utolsó eleme nem 0. Ez épp azt jelenti, hogy $\operatorname{r}(\mathbf{A}) = \operatorname{r}(\mathbf{A}|\mathbf{b})$.
2. Egy egyenletrendszer akkor oldható meg egyértelműen, ha megoldható, és nincs szabad változója, azaz az együtthatómátrix rangja megegyezik az ismeretlenek számával. $\square$

Az előzőekből az is adódik, hogy egy lineáris egyenletrendszernek pontosan akkor van egynél több megoldása, ha
$$\operatorname{r}(\mathbf{A}) = \operatorname{r}(\mathbf{A}|\mathbf{b}) < n.$$
(Miért nem lehet $\operatorname{r}(\mathbf{A}) > n$?)

Egy valós együtthatós egyenletrendszernek csak úgy lehet egynél több megoldása, ha van szabad változója. Viszont annak minden értékéhez egy-egy másik megoldás tartozik, vagyis ekkor az egyenletrendszernek valós együtthatós esetben végtelen sok megoldása van. Így, ha $\mathbf{A}$ valós mátrix, akkor a megoldások száma, a két rang és az ismeretlenek száma közt a következő a kapcsolat:

| Feltétel | Megoldások száma |
|---|---|
| $\operatorname{r}(\mathbf{A}) < \operatorname{r}(\mathbf{A}\vert\mathbf{b})$ | 0 |
| $\operatorname{r}(\mathbf{A}) = \operatorname{r}(\mathbf{A}\vert\mathbf{b}) = n$ | 1 |
| $\operatorname{r}(\mathbf{A}) = \operatorname{r}(\mathbf{A}\vert\mathbf{b}) < n$ | $\infty$ |

Ha az egyenletrendszer homogén lineáris, azaz mindegyik konstans tag 0, akkor az elemi sorműveletek közben a bővített mátrix utolsó oszlopában minden elem 0 marad, így ebben az oszlopban biztosan nem lesz főelem. Eszerint a homogén lineáris egyenletrendszerek mindig megoldhatók, hisz ekkor a $\operatorname{r}(\mathbf{A}) = \operatorname{r}(\mathbf{A}|\mathbf{b})$ összefüggés mindig fönnáll. A megoldhatóság persze e feltétel ellenőrzése nélkül is látszik, hisz az $x_1 = x_2 = \cdots = x_n = 0$ mindig megoldás! Mivel $\operatorname{r}(\mathbf{A})$ megegyezik a redukált lépcsős alak főelemeinek számával, ezért $\operatorname{r}(\mathbf{A}) \leq m$ és $\operatorname{r}(\mathbf{A}) \leq n$ is fönnáll, ahol $m$ az egyenletek, $n$ az ismeretlenek száma. Így viszont $m < n$ esetén $\operatorname{r}(\mathbf{A}) = n$ nem állhat fönn, tehát a homogén lineáris egyenletrendszernek van az $\mathbf{x} = \mathbf{0}$ vektoron kívül is megoldása. Ezzel bizonyítottuk a következő tételt:

**3.6. tétel (Homogén lineáris egyenletrendszer megoldhatósága).** *Az $\mathbf{A}$ együtthatómátrixú homogén lineáris egyenletrendszer mindig megoldható, mert a nullvektor – az ún.* triviális megoldás *– mindig megoldás. Pontosan akkor van* nemtriviális, *vagyis a $\mathbf{0}$-vektortól különböző megoldása is, ha*
$$\operatorname{r}(\mathbf{A}) < n,$$
*ahol $n$ az ismeretlenek – azaz $\mathbf{A}$ oszlopainak – számát jelöli. Speciálisan, az $m$ egyenletből álló homogén lineáris egyenletrendszernek $m < n$ esetén mindig van nemtriviális megoldása.*

Valós együtthatós homogén lineáris egyenletrendszerekre az előző táblázat a következő alakot ölti:

| Feltétel | Megoldások száma |
|---|---|
| $\operatorname{r}(\mathbf{A}) = n$ | 1 |
| $\operatorname{r}(\mathbf{A}) < n$ | $\infty$ |

**3.7. példa (Egyenletrendszer megoldásainak száma).** *Az $a$ paraméter mely értékei mellett van az alábbi egyenletrendszernek 0, 1, illetve $\infty$ sok megoldása?*
$$\begin{alignedat}{9}
x_1 &{}+{}& x_2 &{}+{}& ax_3 &{}={}& 1 \\
x_1 &{}+{}& ax_2 &{}+{}& x_3 &{}={}& a \\
ax_1 &{}+{}& x_2 &{}+{}& x_3 &{}={}& a^2
\end{alignedat}$$

*Megoldás.* Hozzuk a bővített mátrixot lépcsős alakra:
$$\left[\begin{array}{ccc|c} 1 & 1 & a & 1 \\ 1 & a & 1 & a \\ a & 1 & 1 & a^2 \end{array}\right] \xrightarrow{\substack{S_2 - S_1 \\ S_3 - aS_1}} \left[\begin{array}{ccc|c} 1 & 1 & a & 1 \\ 0 & a-1 & 1-a & a-1 \\ 0 & 1-a & 1-a^2 & a^2 - a \end{array}\right] \xrightarrow{S_3 + S_2}$$
$$\left[\begin{array}{ccc|c} 1 & 1 & a & 1 \\ 0 & a-1 & 1-a & a-1 \\ 0 & 0 & -(a-1)(a+2) & (a+1)(a-1) \end{array}\right]$$
Látható, hogy $a = 1$ esetén az utolsó két sorban minden elem 0, tehát az együtthatómátrix és a bővített mátrix rangja is 1, így az egyenletrendszer az $x_1 + x_2 + x_3 = 1$ egyenlettel ekvivalens. Ennek megoldása: $(x_1, x_2, x_3) = (1 - s - t, s, t)$, azaz oszlopvektor alakba írva:
$$\begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix} + s\begin{bmatrix} -1 \\ 1 \\ 0 \end{bmatrix} + t\begin{bmatrix} -1 \\ 0 \\ 1 \end{bmatrix}.$$
Ha $a = -2$, akkor az együtthatómátrix rangja 2, a bővített mátrix rangja 3, tehát az egyenletrendszer nem oldható meg (az utolsó sor egyenletté visszaírva $0 = 3$ alakú). Minden egyéb esetben, azaz ha $a \neq 1$ és $a \neq -2$, akkor a két rang 3, ami megegyezik az ismeretlenek számával, tehát egyetlen megoldás van. Ez ki is fejezhető:
$$x_1 = \frac{(a+1)^2}{a+2}, \quad x_2 = \frac{1}{a+2}, \quad x_3 = -\frac{a+1}{a+2}. \qquad \square$$

### Homogén lineáris egyenletrendszer megoldásai

Tekintsünk egy tetszőleges homogén lineáris egyenletrendszert. Mint a 3.6. tételben láttuk, ez biztosan megoldható, és a megoldások halmazában a nullvektor benne van. Mit mondhatunk a megoldások halmazáról, ha több megoldása is van a homogén egyenletrendszernek?

**3.8. állítás (Megoldások lineáris kombinációja).** *Egy homogén lineáris egyenletrendszer megoldásainak bármely lineáris kombinációja is megoldás.*

*Bizonyítás.* Elég az állítást két megoldásra bizonyítani. Jelölje $\mathbf{a}_1, \mathbf{a}_2, \ldots, \mathbf{a}_n$ az egyenletrendszer együtthatómátrixának oszlopvektorait. Legyen $\mathbf{x} = (x_1, x_2, \ldots, x_n)$ és $\mathbf{y} = (y_1, y_2, \ldots, y_n)$ két tetszőleges megoldás, azaz
$$\begin{aligned}
\mathbf{a}_1 x_1 + \mathbf{a}_2 x_2 + \ldots + \mathbf{a}_n x_n &= \mathbf{0} \\
\mathbf{a}_1 y_1 + \mathbf{a}_2 y_2 + \ldots + \mathbf{a}_n y_n &= \mathbf{0},
\end{aligned}$$
és $c$, $d$ legyen két tetszőleges skalár. Megmutatjuk, hogy ekkor $c\mathbf{x} + d\mathbf{y}$ is megoldás, ugyanis
$$\begin{aligned}
\mathbf{a}_1(cx_1 + dy_1) + \mathbf{a}_2(cx_2 + dy_2) + \ldots + \mathbf{a}_n(cx_n + dy_n) &= \\
(c\mathbf{a}_1 x_1 + d\mathbf{a}_1 y_1) + (c\mathbf{a}_2 x_2 + d\mathbf{a}_2 y_2) + \ldots + (c\mathbf{a}_n x_n + d\mathbf{a}_n y_n) &= \\
c(\mathbf{a}_1 x_1 + \mathbf{a}_2 x_2 + \ldots + \mathbf{a}_n x_n) + d(\mathbf{a}_1 y_1 + \mathbf{a}_2 y_2 + \ldots + \mathbf{a}_n y_n) &= \\
\mathbf{0} + \mathbf{0} = \mathbf{0}.
\end{aligned}$$
azaz $c\mathbf{x} + d\mathbf{y}$ is megoldás. Ez bizonyítja állításunkat.

E bizonyítás az oszlopmodellre épült, de hasonlóan egyszerű bizonyítás adható a sormodellben is (ld. 3.10. feladat). $\square$

### Vektortér és altér

Eddig vektortéren az összes rendezett szám-$n$-esek halmazát értettük, ahol $n$ egy rögzített pozitív egész. A következőkben kiterjesztjük a vektortér fogalmát.

Egyelőre csak a valós vektorokkal foglalkozunk, azaz vektoron rendezett valós szám-$n$-est értünk, ahol $n$ tetszőleges pozitív egész.

**3.9. definíció (Vektortér).** *Vektortéren vektorok olyan nem üres $\mathcal{V}$ halmazát értjük, melyre igaz, hogy $\mathcal{V}$ bármely két vektora összeadható, és összegük is $\mathcal{V}$-beli, valamint $\mathcal{V}$ bármely valós $c$ számmal vett szorzata is $\mathcal{V}$-beli. Másként fogalmazva $\mathcal{V}$ vektortér, ha zárt a vektorösszeadás és a skalárral szorzás műveletére.*

**3.10. definíció (Altér).** *Ha $\mathcal{U}$ és $\mathcal{V}$ két vektortér és $\mathcal{U} \subseteq \mathcal{V}$, akkor azt mondjuk, hogy az $\mathcal{U}$ vektortér a $\mathcal{V}$ vektortér* altere. *Jelölése: $\mathcal{U} \leqslant \mathcal{V}$.*

▶ Az $\mathcal{A}$ vektorhalmaz pontosan akkor vektortér, ha az $\mathcal{A}$-beli vektorok lineáris kombinációi is mind $\mathcal{A}$-ban vannak (ld. 3.6. feladat).
▶ Minden pozitív $n$ egész esetén $\mathbb{R}^n$ vektortér.
▶ A síkban ($\mathbb{R}^2$-ben) egy origón átmenő egyenes vektorai (az egyenes pontjaiba mutató helyvektorok) vektorteret alkotnak, mely $\mathbb{R}^2$ altere.
▶ A térben ($\mathbb{R}^3$-ben) bármely origón átmenő sík vagy egyenes vektorai vektorteret alkotnak (ld. a 3.1. ábrát), mely az $\mathbb{R}^3$ altere.
▶ Az $\mathbb{R}^3$ imént felsorolt alterei – az origón átmenő egyenes és sík – „olyanok", mint az $\mathbb{R}$ és az $\mathbb{R}^2$. E két fogalmat – a vektortér absztrakt definíciója és a vektorterek izomorfizmusának fogalma – tisztázza (ld. a 13 fejezetet). Látni fogjuk, hogy $\mathbb{R}^n$ alterei valóban mind „olyanok", mint $\mathbb{R}^k$, ahol $k \leqslant n$.

A halmazok szemléltetésére használt Venn-diagramok mintájára a vektorterek altereinek *néhány tulajdonságát* levélszerű alakzatokon fogjuk szemléltetni. E *levéldiagram* leveleinek közös alsó „szárnál lévő" csúcsa jelzi a zérusvektort (ld. 3.2. ábra). A levelek felső csúcsába a tér nevét írhatjuk. Mint ahogy a Venn-diagram sem, úgy a levéldiagram sem alkalmas minden tulajdonság szemléltetésére!

Felsoroljuk az alterek néhány egyszerűen belátható tulajdonságát, néhányukat e diagrammal szemléltetve:
▶ Minden altérnek eleme a nullvektor, hisz bármely altérbeli vektorral együtt annak 0-szorosa is, vagyis a $\mathbf{0}$-vektor is eleme az altérnek.
▶ Minden altérbeli $\mathbf{x}$ vektorral együtt annak ellentettje ($-1$-szerese), a $-\mathbf{x}$ vektor is eleme az altérnek.
▶ Minden vektortér maga is altér (saját maga altere), hisz bármely két vektorának összes lineáris kombinációját tartalmazza.
▶ A nullvektor önmagában alteret alkot, ez a *zérustér,* amit $\mathcal{Z}$ jelöl. A nulltér kifejezést másra használjuk, ne keverjük a kettőt össze.
▶ Egy $\mathcal{V}$ vektortér zérusvektorát tartalmazó $\mathcal{Z}$ zérusteret és magát $\mathcal{V}$-t a $\mathcal{V}$ tér *triviális altereinek* nevezzük (ld. 3.3. ábra).

*3.1. ábra. a) Egy origón átmenő egyenes bármely vektorának konstansszorosa és bármely két vektorának összege az egyenesbe esik, b) egy origón átmenő sík bármely vektorának konstansszorosa és bármely két vektorának összege a síkba esik.*

*3.2. ábra. Egy $\mathcal{W}$ vektortér az $\mathcal{U}$ és $\mathcal{V}$ altereivel és a közös zérusvektorral.*

*3.3. ábra. A $\mathcal{W}$ vektortér két triviális altere: maga $\mathcal{W}$, és a $\mathcal{Z}$ zérustér.*

▶ Altér altere altér, azaz ha $\mathcal{U} \leqslant \mathcal{V}$, és $\mathcal{W} \leqslant \mathcal{U}$, akkor $\mathcal{W} \leqslant \mathcal{V}$ (ld. 3.4. ábra).
▶ Két altér metszete altér. Ha $\mathcal{U}$ és $\mathcal{V}$ egy vektortér két altere, és $\mathcal{W}$ a közös részük, akkor $\mathcal{W}$ nem üres, hisz a nullvektor benne van. Másrészt bármely két $\mathbf{x}, \mathbf{y} \in \mathcal{W}$ vektor összes lineáris kombinációja benne van $\mathcal{U}$-ban és $\mathcal{V}$-ben is, így metszetükben is. Alterek metszetére a $\cap$ jelet használjuk, tehát az előbbi alterekre $\mathcal{U} \cap \mathcal{V} = \mathcal{W}$ (ld. 3.5. ábra).
▶ Egy vektortér tetszőleges számú (akár végtelen sok) alterének közös része is altér.
▶ Két altér egyesítése csak akkor altér, ha egyik altere a másiknak. Például a térben egy origón átmenő egyenes és egy origón átmenő sík vektorait egyesítve csak akkor kapunk alteret, ha az egyenes a síkba esik.

**3.11. példa (Altér).** *Altér-e az alábbi vektorhalmaz $\mathbb{R}^3$-ben?*
- a) $\{ (x, y, z) \mid x = y, \; z = xy \}$,
- b) $\{ (s + 2t, s - 1, 2s + t) \mid s, t \in \mathbb{R} \}$,
- c) $\{ (x, y, z) \mid 2x - y + z = 0 \}$,
- d) $\{ (x, y, z) \mid x = 2t, \; y = -t, \; z = t, \; t \in \mathbb{R} \}$.

*Megoldás.* a) nem altér. Például az $(1, 1, 1)$ vektor benne van e halmazban, azonban kétszerese nem.

b) nem altér. A nullvektor nincs a vektorhalmazban, ugyanis az $s + 2t = 0$, $s - 1 = 0$, $2s + t = 0$ egyenletrendszernek nincs megoldása.

c) altér, ami az $\mathbf{n} = (2, -1, 1)$ normálvektorú sík pontjaiba mutató helyvektorokból áll. A sík vektoregyenlete $\mathbf{n} \cdot \mathbf{r} = 0$. Ha $\mathbf{x}$ és $\mathbf{y}$ a sík két vektora, azaz $\mathbf{n} \cdot \mathbf{x} = 0$ és $\mathbf{n} \cdot \mathbf{y} = 0$, akkor $\mathbf{n} \cdot (\mathbf{x} + \mathbf{y}) = 0$ és $\mathbf{n} \cdot (c\mathbf{x}) = 0$ is fönnáll bármely $c \in \mathbb{R}$ valós számra, tehát valóban alteret kaptunk.

d) altér, ami a $\mathbf{v} = (2, -1, 1)$ vektor skalárszorosaiból áll. Ezek közül bármely kettő összege és bármelyik skalárszorosa is e halmazba tartozik, tehát e vektorok valóban alteret alkotnak. E vektorok végpontjai egy origón áthaladó egyenes pontjait adják. $\square$

▶ Könnyen belátható, hogy $\mathbb{R}^2$ alterei az alábbiak: a) a zérusvektorból álló egyelemű halmaz, azaz a zérustér, b) egy origón átmenő egyenes összes vektora, c) a sík összes vektora.
▶ Hasonlóképp $\mathbb{R}^3$ alterei: a) a zérusvektorból álló egyelemű halmaz, b) egy origón átmenő egyenes összes vektora, c) egy origón átmenő sík összes vektora, d) a tér összes vektora.
▶ Egy egyetlen $n$-ismeretlenes – azaz egy $\mathbf{n} \cdot \mathbf{x} = 0$ – egyenletből álló homogén egyenletrendszer megoldáshalmaza is a halmazba tartozó origót tartalmazó $\mathbb{R}^n$-beli hipersík. Ez altér, ami az előző példa c) pontjához hasonlóan bizonyítható. Alterek metszete altér, így a több egyenletből álló homogén lineáris egyenletrendszer megoldáshalmaza mindig altér, hisz hipersíkok metszete, és e metszet nem üres, mivel a $\mathbf{0}$ benne van. A következő paragrafus ugyanezt az oszlopmodellben vizsgálja meg.

*3.4. ábra. Altér altere is altér.*

*3.5. ábra. Alterek metszete is altér, de az megeshet, hogy ez a metszet csak az egyetlen nullvektorból álló zérustér.*

*3.6. ábra. Két altér egyesítése csak akkor altér, ha egyik a másik altere.*

### Kifeszített altér

A homogén lineáris egyenletrendszer összes megoldását néhány vektor lineáris kombinációjaként állítottuk elő. A megoldások alterét tehát „generálja" vagy geometrikusabb szóhasználattal „kifeszíti" néhány megoldásvektor.

**3.12. definíció (Kifeszített altér).** *Adva van egy $\mathcal{V}$ vektortér. A $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k \in \mathcal{V}$ vektorok*
$$c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 + \ldots + c_k \mathbf{v}_k$$
*alakú lineáris kombinációinak halmazát a $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k$ vektorok által* kifeszített altérnek *nevezzük. Jelölése: $\operatorname{span}(\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k)$ vagy $\langle \mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k \rangle$.*

Megmutatjuk, hogy e fogalomban az altér szó használata jogos:

**3.13. állítás (A kifeszített altér altér).** *A $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k \in \mathcal{V}$ vektorok által kifeszített $\operatorname{span}(\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k)$ vektorhalmaz $\mathcal{V}$ egy altere.*

*Bizonyítás.* Be kell látni, hogy $\operatorname{span}(\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k)$ bármely vektorának skalárszorosa és bármely két vektorának összege is ide tartozik. Legyen
$$\mathbf{u} = c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 + \ldots + c_k \mathbf{v}_k, \text{ és } \mathbf{v} = d_1 \mathbf{v}_1 + d_2 \mathbf{v}_2 + \ldots + d_k \mathbf{v}_k$$
a $\operatorname{span}(\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k)$ két tetszőleges vektora, és legyen $x \in \mathbb{R}$ tetszőleges valós. Ekkor
$$x\mathbf{u} = (xc_1)\mathbf{v}_1 + (xc_2)\mathbf{v}_2 + \ldots + (xc_k)\mathbf{v}_k \in \operatorname{span}(\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k),$$
és
$$\mathbf{u} + \mathbf{v} = (c_1 + d_1)\mathbf{v}_1 + \ldots + (c_k + d_k)\mathbf{v}_k \in \operatorname{span}(\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k). \qquad \square$$

A 3.8. állítás az altér fogalmát és az előző tételt használva a következő alakot ölti:

**3.14. állítás (Megoldások altere).** *Egy $n$-ismeretlenes homogén lineáris egyenletrendszer megoldáshalmaza alteret alkot $\mathbb{R}^n$-ben.*

**3.15. definíció (Nulltér).** *Az $\mathbf{A}$ együtthatómátrixú homogén lineáris egyenletrendszer megoldásainak alterét az $\mathbf{A}$ mátrix* nullterének *nevezzük és $\mathcal{N}(\mathbf{A})$-val jelöljük.*

A 2.35. példában megoldottunk egy homogén lineáris egyenletrendszert, így ezzel meghatároztuk együtthatómátrixának nullterét is, azaz
$$\mathcal{N}\left(\begin{bmatrix} 1 & 2 & 1 & 2 & 1 \\ 1 & 2 & 3 & 3 & 1 \\ 3 & 6 & 7 & 8 & 3 \end{bmatrix}\right) = \left\{ s\begin{bmatrix} -2 \\ 1 \\ 0 \\ 0 \\ 0 \end{bmatrix} + t\begin{bmatrix} -\frac{3}{2} \\ 0 \\ -\frac{1}{2} \\ 1 \\ 0 \end{bmatrix} + u\begin{bmatrix} -1 \\ 0 \\ 0 \\ 0 \\ 1 \end{bmatrix} \;\middle|\; s, t, u \in \mathbb{R} \right\}.$$

### Az inhomogén lineáris egyenletrendszer megoldásai

Az inhomogén lineáris egyenletrendszer megoldásai nem alkotnak alteret, mivel a zérusvektor minden altérnek eleme, viszont egyetlen inhomogén egyenletrendszernek sem megoldása! Ugyanakkor az inhomogén lineáris egyenletrendszer és a hozzá tartozó homogén egyenletrendszer megoldásai közt szoros kapcsolat van.

**3.16. tétel (Homogén és inhomogén egyenletrendszer megoldásai).** *Az $[\mathbf{A}|\mathbf{b}]$ mátrixú lineáris egyenletrendszer általános megoldása megegyezik egy tetszőleges partikuláris megoldásának és a hozzá tartozó homogén $[\mathbf{A}|\mathbf{0}]$ mátrixú egyenletrendszer általános megoldásának összegével. Speciálisan*
$$(\text{inhomogén általános megoldása}) = (\text{inhomogén egy partikuláris megoldása}) + (\text{homogén általános megoldása})$$

*Bizonyítás.* Ha $\mathbf{b} = \mathbf{0}$, akkor az állítás nyilván igaz, hisz a megoldások alteret alkotnak, ezért tegyük fel, hogy a konstansok vektora $\mathbf{b} = (b_1, b_2, \ldots, b_m) \neq \mathbf{0}$. Jelölje az egyenletrendszer együtthatómátrixát $\mathbf{A}$, annak sorvektorait $\mathbf{a}_{1*}, \mathbf{a}_{2*}, \ldots, \mathbf{a}_{m*}$. Legyen $\mathbf{x}$ az inhomogén egyenletrendszer egy partikuláris megoldása, és jelölje $\mathcal{H}$ a homogén, $\mathcal{I}$ az inhomogén egyenletrendszer megoldáshalmazát. Megmutatjuk, hogy $\mathbf{x} + \mathcal{H} = \mathcal{I}$, ahol a bal oldali összeadást elemenként értjük.

$\mathbf{x} + \mathcal{H} \subseteq \mathcal{I}$: Meg kell mutatnunk, hogy ha $\mathbf{x}$-hez adjuk a $\mathcal{H}$ egy tetszőleges $\mathbf{y}$ elemét, az inhomogén egyenletrendszer egy megoldását kapjuk. Valóban, $\mathbf{x}$, illetve $\mathbf{y}$ eleget tesz az
$$\begin{aligned}
\mathbf{a}_{i*} \cdot \mathbf{x} &= b_i, \\
\mathbf{a}_{i*} \cdot \mathbf{y} &= 0, \qquad (i = 1, 2, \ldots, m)
\end{aligned}$$
egyenleteknek. Ebből
$$\mathbf{a}_{i*} \cdot (\mathbf{x} + \mathbf{y}) = \mathbf{a}_{i*} \cdot \mathbf{x} + \mathbf{a}_{i*} \cdot \mathbf{y} = b_i + 0 = b_i.$$
tehát $\mathbf{x} + \mathbf{y}$ megoldása az inhomogén egyenletrendszernek, azaz $\mathbf{x} + \mathbf{y} \in \mathcal{I}$.

$\mathbf{x} + \mathcal{H} \supseteq \mathcal{I}$: Meg kell mutatnunk, hogy ha $\mathbf{z}$ az inhomogén egy tetszőleges megoldása, azaz $\mathbf{z} \in \mathcal{I}$, akkor található olyan $\mathbf{y} \in \mathcal{H}$, hogy $\mathbf{z} = \mathbf{x} + \mathbf{y}$. Valóban, az $\mathbf{y} = \mathbf{z} - \mathbf{x}$ megteszi, mert
$$\mathbf{a}_{i*} \cdot (\mathbf{z} - \mathbf{x}) = \mathbf{a}_{i*} \cdot \mathbf{z} - \mathbf{a}_{i*} \cdot \mathbf{x} = b_i - b_i = 0.$$
fennáll minden $i = 1, 2, \ldots, m$ indexre, azaz $\mathbf{z} - \mathbf{x} \in \mathcal{H}$. $\square$

E tétel azt jelenti, hogy ugyan az inhomogén lineáris egyenletrendszer megoldásainak halmaza *nem altér,* de egy *altér eltoltja.* E halmazokat geometriai nyelven *affin altereknek* nevezzük. Ilyeneket mutat a 3.7. ábra. E tételt szemléltetik a 2.33. és a 2.35. példák is.

*3.7. ábra. a) Egy háromismeretlenes inhomogén lineáris egyenletrendszer megoldáshalmaza, ha az általános megoldás egyparaméteres; b) Egy háromismeretlenes inhomogén lineáris egyenletrendszer megoldáshalmaza, ha az általános megoldás kétparaméteres.*

Az inhomogén egyenletrendszer megoldásának szemléltetését a levéldiagramon a 3.8. ábra mutatja.

Az előző tétel szerint az inhomogén egyenletrendszer összes megoldása a homogén összes megoldásának – azaz $\mathcal{N}(\mathbf{A})$-nak – az inhomogén valamelyik megoldásával való eltoltja. Fontos látnunk, hogy mindegy melyik megoldást választjuk az inhomogén megoldásai közül, bár az eltolás mértéke változik, az eredmény ugyanaz lesz. Ezt jól szemlélteti a 3.7. ábra: ha az origón átmenő egyenes origónál lévő pontját nem $\mathbf{x}$-be, hanem az eltolt egyenes egy másik pontjába toljuk, akkor a két eltolt egyenes fedi egymást, vagyis a két affin altér azonos.

Azok a $\mathbf{b}$ vektorok, melyre az $[\mathbf{A}|\mathbf{b}]$ egyenletrendszer konzisztens, alteret alkotnak. Ezek ugyanis az oszlopmodell szerint épp azok a vektorok, melyek az együtthatómátrix oszlopvektorainak lineáris kombinációjaként előállnak.

**3.17. definíció (Sortér, oszloptér).** *Egy mátrix oszlopvektorai által kifeszített alteret* oszloptérnek, *a sorvektorai által kifeszített alteret* sortérnek *nevezzük. A sorterét $\mathcal{S}(\mathbf{A})$, oszlopterét $\mathcal{O}(\mathbf{A})$ jelöli.*

Az $m \times n$-es $\mathbf{A}$ mátrix $\mathcal{S}(\mathbf{A})$ sortere $\mathbb{R}^n$, $\mathcal{O}(\mathbf{A})$ oszloptere $\mathbb{R}^m$ altere, azaz $\mathcal{S}(\mathbf{A}) \leqslant \mathbb{R}^n$, $\mathcal{O}(\mathbf{A}) \leqslant \mathbb{R}^m$ (ld. 3.9. ábra). Az $[\mathbf{A}|\mathbf{b}]$ és a $[\mathbf{A}|\mathbf{0}]$ egyenletrendszerek megoldásainak kapcsolatát a 3.10. ábra szemlélteti.

Az oszlopmodellből adódik a következő állítás:

**3.18. következmény (Inhomogén egyenletrendszer megoldhatósága).** *Az $[\mathbf{A}|\mathbf{b}]$ mátrixú egyenletrendszer pontosan akkor oldható meg, ha $\mathbf{b}$ előáll az $\mathbf{A}$ oszlopainak lineáris kombinációjaként, azaz $\mathbf{b}$ benne van az $\mathbf{A}$ oszlopterében. A lineáris kombináció együtthatói megegyeznek a megoldásvektor koordinátáival.*

**3.19. példa (Kifeszített altér vektorai).** *Az $\mathbf{u} = (-1, 2, -3, 6)$ és $\mathbf{w} = (-1, 2, -3, 4)$ vektorok elemei-e a $\mathbf{v}_1 = (1, 0, 1, 2)$, $\mathbf{v}_2 = (-1, 2, -2, 1)$ és $\mathbf{v}_3 = (1, 1, 1, 1)$ vektorok által kifeszített altérnek? Ha igen, adjunk meg egy ezt bizonyító lineáris kombinációt!*

*Megoldás.* Az $x_1 \mathbf{v}_1 + x_2 \mathbf{v}_2 + x_3 \mathbf{v}_3 = \mathbf{u}$ és az $y_1 \mathbf{v}_1 + y_2 \mathbf{v}_2 + y_3 \mathbf{v}_3 = \mathbf{w}$ egyenletrendszereket kell megoldani. Ez egy négy egyenletből álló szimultán egyenletrendszer, amelynek bővített mátrixa a $\mathbf{v}_1$, $\mathbf{v}_2$, $\mathbf{v}_3$, $\mathbf{u}$ és $\mathbf{w}$ oszlopvektorokból áll. Ennek lépcsős alakja:
$$\left[\begin{array}{ccc|cc} 1 & -1 & 1 & -1 & -1 \\ 0 & 2 & 1 & 2 & 2 \\ 1 & -2 & 1 & -3 & -3 \\ 2 & 1 & 1 & 6 & 4 \end{array}\right] \Rightarrow \left[\begin{array}{ccc|cc} 1 & -1 & 1 & -1 & -1 \\ 0 & 1 & 0 & 2 & 2 \\ 0 & 0 & 1 & -2 & -2 \\ 0 & 0 & 0 & 0 & 1 \end{array}\right]$$
amiből $(x_1, x_2, x_3) = (3, 2, -2)$, és $\mathbf{w}$ nem áll elő lineáris kombinációként, mert a jobb oldalán a $\mathbf{w}$ vektort tartalmazó egyenletrendszer ellentmondásos. $\square$

*3.8. ábra. Az $\mathbf{A}$ együtthatómátrixú homogén egyenletrendszer megoldása a nulltér, azaz $\mathcal{N}(\mathbf{A})$, az inhomogéné e tér egy $\mathbf{x}_0 + \mathcal{N}(\mathbf{A})$ eltoltja, ahol $\mathbf{x}_0$ az inhomogén egyenletrendszer egy megoldása.*

*3.9. ábra. Az $\mathbf{A}$ mátrix sortere ($\mathcal{S}(\mathbf{A})$), oszloptere ($\mathcal{O}(\mathbf{A})$) és nulltere ($\mathcal{N}(\mathbf{A})$).*

*3.10. ábra. A nulltér, a sortér, és az oszloptér, valamint a homogén $\mathbf{A}\mathbf{y} = \mathbf{0}$ és az inhomogén $\mathbf{A}\mathbf{x} = \mathbf{b}$ egyenletrendszer egy-egy megoldása a levéldiagramban.*

### Vektorok lineáris függetlensége

A lineáris egyenletrendszerek megoldása és vektorok lineáris függetlenségével vagy összefüggőségével kapcsolatos kérdések szoros kapcsolatban vannak egymással.

Az előző 3.19. példa tanulsága úgy is összefoglalható, hogy egy $\mathbf{w}$ vektor pontosan akkor független az $\mathbf{A}$ mátrix oszlopvektoraitól, vagyis az $\{ \mathbf{a}_1, \mathbf{a}_2, \ldots, \mathbf{a}_n \}$ vektorrendszertől, ha az $[\mathbf{A}|\mathbf{w}]$ egyenletrendszer nem oldható meg.

Egy $\{ \mathbf{a}_1, \mathbf{a}_2, \ldots, \mathbf{a}_n \}$ vektorrendszer lineáris függetlenségének eldöntéséhez meg kell oldani az
$$x_1 \mathbf{a}_1 + x_2 \mathbf{a}_2 + \cdots + x_n \mathbf{a}_n = \mathbf{0}$$
homogén lineáris egyenletrendszert. Ha van nemtriviális megoldása, akkor a vektorrendszer lineárisan összefüggő, egyébként lineárisan független. Ez igazolja az alábbi ekvivalenciákat:

**3.20. következmény (Lineáris függetlenség eldöntése).** *Tekintsük az $\mathbf{A} = \begin{bmatrix} \mathbf{a}_1 & \mathbf{a}_2 & \ldots & \mathbf{a}_k \end{bmatrix}$ mátrixot! Az alábbi állítások ekvivalensek:*
- a) *az $\mathbf{a}_1, \mathbf{a}_2, \ldots, \mathbf{a}_k$ vektorok lineárisan függetlenek;*
- b) *az $\mathbf{A}$ együtthatómátrixú homogén lineáris egyenletrendszernek a triviálison kívül nincs más megoldása;*
- c) *az $\mathbf{A}$ lépcsős alakjának minden oszlopában van főelem, azaz $\operatorname{r}(\mathbf{A}) = k$.*

**3.21. példa (Vektorok lineáris függetlenségének eldöntése).** *Mutassuk meg, hogy a 4-dimenziós $(1, 2, 3, 4)$, $(0, 1, 0, 1)$ és $(1, 1, 1, 0)$ vektorok lineárisan függetlenek.*

*Megoldás.* A vektorokból képzett mátrix és lépcsős alakja
$$\begin{bmatrix} 1 & 0 & 1 \\ 2 & 1 & 1 \\ 3 & 0 & 1 \\ 4 & 1 & 0 \end{bmatrix} \Rightarrow \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & -1 \\ 0 & 0 & -2 \\ 0 & 0 & 0 \end{bmatrix},$$
ami azt mutatja, hogy a homogén lineáris egyenletrendszernek csak egyetlen megoldása van, azaz az oszlopvektorok lineárisan függetlenek. $\square$

### Feladatok

**3.1.•** *Igaz – hamis.* Melyek igazak, melyek hamisak az alábbi állítások közül?
- a) Ha egy 10-ismeretlenes egyenletrendszer 6 egyenletből áll, akkor végtelen sok megoldása van.
- b) Ha egy 10-ismeretlenes egyenletrendszer 6 egyenletből áll, azaz alulhatározott, akkor lehet, hogy végtelen sok megoldása van, de az is lehet, hogy csak egy.
- c) Ha egy 15-ismeretlenes egyenletrendszer 20 egyenletből áll, azaz túlhatározott, akkor biztosan nem oldható meg!
- d) Ha egy 15-ismeretlenes egyenletrendszer 20 egyenletből áll, akkor nem lehet végtelen sok megoldása.

**3.2.•** *Alterek tulajdonságai: igaz – hamis.*
- a) $\mathbb{R}^n$ bármely három alterének metszete altér.
- b) Ha az $\mathcal{U}$ altér altere a $\mathcal{V}$ és a $\mathcal{W}$ altérnek is, akkor altere metszetüknek is.
- c) Alterek egyesítése altér.
- d) Minden altérnek eleme a zérusvektor.
- e) Minden altérnek van legalább egy nemzérus vektora.

**3.3.•** *Vektorterek és egyenletrendszerek: igaz – hamis.*
- a) Egy lineáris egyenletrendszer megoldásai vektorteret alkotnak.
- b) Egy homogén lineáris egyenletrendszer megoldásai vektorteret alkotnak.
- c) Rögzített $\mathbf{A}$ mátrix mellett vektorteret alkotnak azok a $\mathbf{b}$ vektorok, melyekre az $[\mathbf{A}|\mathbf{b}]$ egyenletrendszer konzisztens.
- d) Egy egyenletrendszer megoldásvektorainak különbségeként kapott vektorok halmaza vektorteret alkot.

**3.4.•** *Megoldhatóság: igaz – hamis.*
- a) Az $[\mathbf{A}|\mathbf{b}]$ mátrixú egyenletrendszer pontosan akkor oldható meg, ha $\mathbf{b}$ előáll $\mathbf{A}$ oszlopainak lineáris kombinációjaként.
- b) Az $[\mathbf{A}|\mathbf{b}]$ mátrixú egyenletrendszer bármely két megoldásának különbsége megoldása a homogén $[\mathbf{A}|\mathbf{0}]$ egyenletrendszernek.
- c) Az $[\mathbf{A}|\mathbf{b}]$ mátrixú egyenletrendszer bármely megoldása előáll a homogén $[\mathbf{A}|\mathbf{0}]$ mátrixú egyenletrendszer két megoldásának különbségeként.
- d) Az $[\mathbf{A}|\mathbf{b}]$ mátrixú egyenletrendszer pontosan akkor oldható meg, ha $\operatorname{r}(\mathbf{A}|\mathbf{b}) \leqslant \operatorname{r}(\mathbf{A})$.
- e) Az $n$-ismeretlenes $[\mathbf{A}|\mathbf{b}]$ mátrixú egyenletrendszer pontosan akkor oldható meg egyértelműen, ha $\operatorname{r}(\mathbf{A}) = n$.

**3.5.** Alteret alkotnak-e az alábbi vektorhalmazok $\mathbb{R}^3$-ben?
- a) $\{ \mathbf{x} \in \mathbb{R}^3 : |\mathbf{x}| = 1 \}$
- b) $\{ (x, y, z) : x + 2y - 3z = 0 \}$
- c) $\{ (x, y, z) : x + 2y - 3z = 1 \}$
- d) $\{ (x, y, z) : x = 2t, y = t, z = 0, t \in \mathbb{R} \}$
- e) $\{ (x, y, z) : x^2 + y^2 + z^2 = 0 \}$
- f) $\{ (x, y, z) : x^3 + y^3 + z^3 = 0 \}$

**3.6.** Igazoljuk, hogy egy $\mathcal{V}$ vektortér vektorainak egy $\mathcal{W}$ halmaza pontosan akkor altér $\mathcal{V}$-ben, ha a $\mathcal{W}$-beli vektorok bármely lineáris kombinációja $\mathcal{W}$-beli.

**3.7.•** Mennyi lehet az $\operatorname{r}(\mathbf{A}|\mathbf{b})$ rang, ha az $[\mathbf{A}|\mathbf{b}]$ bővített mátrixú egyenletrendszerről tudjuk, hogy
- a) 2-ismeretlenes és megoldásainak száma végtelen;
- b) inkonzisztens, és $\operatorname{r}(\mathbf{A}) = 4$;
- c) egyetlen megoldása van és $\mathbf{A}$ $5 \times 3$-as;
- d) inkonzisztens, $n$-ismeretlenes és 2 egyenletből áll.

**3.8.** Egy lineáris egyenletrendszerről tudjuk, hogy $(1, 2, 3)$ és $(0, 1, 3)$ is megoldásvektora. Adjunk meg további két megoldásvektort! Mekkora lehet az együtthatómátrix rangja? És mekkora lehet a rang, ha az egyenletrendszer homogén?

**3.9.•** *Inhomogén lineáris egyenletrendszer megoldásai.* Egy négyismeretlenes lineáris egyenletrendszer megoldását számítógéppel próbálom ellenőrizni, de más jön ki. A saját eredményem ez:
$$\begin{bmatrix} x \\ y \\ z \\ w \end{bmatrix} = \begin{bmatrix} 1 \\ 1 \\ 1 \\ 1 \end{bmatrix} + s\begin{bmatrix} 1 \\ 0 \\ -2 \\ -1 \end{bmatrix} + t\begin{bmatrix} 1 \\ 1 \\ -3 \\ -2 \end{bmatrix},$$
a számítógépé ez:
$$\begin{bmatrix} x \\ y \\ z \\ w \end{bmatrix} = \begin{bmatrix} 2 \\ 0 \\ 2 \\ 0 \end{bmatrix} + s\begin{bmatrix} -2 \\ 1 \\ 1 \\ 0 \end{bmatrix} + t\begin{bmatrix} 3 \\ -2 \\ 0 \\ 1 \end{bmatrix}.$$
Lehet-e mindkét eredmény jó?

**3.10.** *Megoldások lineáris kombinációja.* Adjunk új bizonyítást a 3.8. tételre a sormodellt használva.

**3.11.** *Homogén és inhomogén egyenletrendszer megoldásai.* Adjunk az oszlopmodellben megfogalmazott új bizonyítást a 3.16. tételre.

**3.12.** $\mathbb{F}_2^3$ *alterei.* Soroljuk fel $\mathbb{F}_2^3$ összes alterét (ehhez segítségül hívhatjuk az alábbi ábrát, mely az $\mathbb{F}_2^3$ vektortér vektorait szemlélteti).

*Ábra. Az $\mathbb{F}_2^3$ vektortér 8 vektora egy egységkocka csúcsain: $(0,0,0)$, $(1,0,0)$, $(0,1,0)$, $(0,0,1)$, $(1,1,0)$, $(1,0,1)$, $(0,1,1)$, $(1,1,1)$.*

## Alterek tulajdonságai és az egyenletrendszerek

*E szakaszban az alterek tulajdonságait, és az egyenletrendszerek kapcsán felmerülő alterek viszonyát vizsgáljuk. Különösen fontos az együtthatómátrixhoz tartozó négy kitüntetett altér kapcsolata.*

### Sor- és oszloptér

Végigkövetjük, hogy mi történik egy mátrix sortérbeli és oszloptérbeli vektoraival az elemi sorműveletek közben.

**3.22. tétel (Elemi sorműveletek hatása a sor- és oszlopvektorokra).** *Elemi sorműveletek közben a sortér nem változik, az oszlopvektorok pedig megőrzik lineáris kapcsolataikat.*

*Bizonyítás.* Legyenek $\mathbf{A}$ sorvektorai $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_m$ és legyen $\mathbf{u}$ a sortér egy tetszőleges vektora, azaz valamely $c_1, c_2, \ldots, c_m$ skalárokkal
$$\mathbf{u} = c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 + \ldots + c_m \mathbf{v}_m.$$
Megmutatjuk, hogy $\mathbf{u}$ a sortérben marad az elemi sorműveletek után is. A sorcserére ez nyilvánvaló. Ha egy sort (mondjuk az elsőt) beszorozzuk egy $d \neq 0$ skalárral, akkor
$$\mathbf{u} = \frac{c_1}{d}(d\mathbf{v}_1) + c_2 \mathbf{v}_2 + \ldots + c_m \mathbf{v}_m,$$
a hozzáadás műveleténél (mondjuk az első sor $d$-szeresét adjuk a második sorhoz)
$$\mathbf{u} = (c_1 - c_2 d)\mathbf{v}_1 + c_2(\mathbf{v}_2 + d\mathbf{v}_1) + \ldots + c_m \mathbf{v}_m.$$
Tehát $\mathbf{u}$ minden esetben az új sortérnek is eleme. Az, hogy az új sortér nem bővebb, az igazolja, hogy minden sorművelet inverze is sorművelet, így az új sortér minden vektora az eredetinek is vektora.

Nyilvánvaló, hogy ha az $\mathbf{a}_1$, $\mathbf{a}_2$ és $\mathbf{a}_3$ oszlopvektorok közt az $\mathbf{a}_1 = c\mathbf{a}_2 + d\mathbf{a}_3$ lineáris kapcsolat van, akkor ez az elemi sorműveletek közben is megmarad, és ez ugyanígy igaz tetszőleges más lineáris kapcsolatra is. A sorművelet inverzének léte igazolja, hogy az oszlopok közti lineárisan függetlenség is megőrződik elemi sorműveletek közben. $\square$

**3.23. következmény (Mátrix lépcsős alakjának vektorai).** *Legyen $\mathbf{B}$ az $\mathbf{A}$ mátrix egy lépcsős alakja. Ekkor*
1. *$\mathbf{A}$ és $\mathbf{B}$ sortere megegyezik,*
2. *az $\mathbf{A}$ oszlopvektorai közti lineáris kapcsolatok azonosak a $\mathbf{B}$ nekik megfelelő oszlopai köztiekkel,*
3. *$\mathbf{B}$ nemzérus sorvektorai lineárisan függetlenek,*
4. *a főelemek oszlopvektorai $\mathbf{A}$-ban és $\mathbf{B}$-ben is lineárisan függetlenek.*

A bizonyítást az Olvasóra hagyjuk (ld. a 3.13. feladatot).

### Bázis

Az elemi sorműveleteket alkalmazva, egy mátrix sorterében és oszlopterében találtunk olyan lineárisan független vektorokat, melyek kifeszítik az adott teret. Azt már az 1.9. tételben megmutattuk, hogy a háromdimenziós tér tetszőleges három lineárisan független vektorának lineáris kombinációjaként a tér minden vektora előáll. Más szavakkal ez azt jelenti, hogy a tér három lineárisan független vektora kifeszíti a teret. Az ilyen vektorhármasokat, melyeket egy koordinátarendszer alapvektorainak vettünk, bázisnak nevezzük. Ezek vezetnek a következő definícióhoz.

**3.24. definíció (Bázis).** *A $\mathcal{V}$ vektortér bázisán olyan vektorrendszert értünk, mely*
1. *lineárisan független és*
2. *kifeszíti a $\mathcal{V}$ teret (azaz generátorrendszer).*

▶ A *standard bázis* $\mathbb{R}^n$ egy $n$-elemű bázisa.
▶ Meg fogjuk mutatni, hogy $\mathbb{R}^n$ minden bázisa $n$-elemű, és hogy bármely nem triviális alterének bázisa $n$-nél kevesebb elemű.
▶ A bázis elemeit gyakran nem egy rendezetlen halmazban, hanem rendezve adjuk meg és használjuk. Szokás ilyenkor *rendezett bázisról* beszélni, de a gyakorlatban leggyakrabban elhagyjuk ezt a jelzőt.
▶ Ha véletlenszerűen és egymástól függetlenül (pl. egy egységgömbből, vagy az egységvektorok közül) egyenletes eloszlás szerint választunk $\mathbb{R}^n$-ben $n$ vektort, akkor e vektorok 1 valószínűséggel függetlenek lesznek, azaz bázist alkotnak.
▶ A zérustér bázisa az üreshalmaz, mivel e térből kiválasztható egyetlen vektort, a zérusvektort nem tartalmazhatja lineárisan független rendszer. Ahogy nulla darab szám összegét hasznos 0-nak, nulla darab szám szorzatát 1-nek definiálni, hasonlóképp hasznos nulla darab vektor összegét (vagy bármely más lineáris kombinációját) nullvektornak definiálni, így az üres vektorhalmaz által generált vektorrendszer a zérusvektorból áll.

**3.25. állítás (Bázis ekvivalens definíciói).** *Legyen $\mathcal{V}$ egy tetszőleges vektortér, és legyen $\mathcal{B} = \{ \mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k \} \subseteq \mathcal{V}$ vektorok egy halmaza. A következő állítások ekvivalensek:*
1. *$\mathcal{B}$ bázis (lineárisan független generátorrendszer);*
2. *$\mathcal{B}$ minimális méretű generátorrendszer (kifeszíti $\mathcal{V}$-t);*
3. *$\mathcal{B}$ maximális méretű lineárisan független vektorokból álló halmaz $\mathcal{V}$-ben.*

*Bizonyítás.* Elég belátnunk, hogy egy minimális méretű generátorrendszer független vektorokból áll, és hogy egy maximális méretű független rendszer generátor.

Legyen $\mathcal{B}$ minimális méretű generátor. Ha nem volna független, akkor elhagyva egy olyan vektort, mely a többi lineáris kombinációja, ugyanazt a teret generálnák, de így egy még kisebb méretű generátort

kapnánk.

Legyen most $\mathcal{B}$ egy maximális független rendszer. Ha nem volna generátor, akkor hozzávehetnénk tőle független vektort, vagyis volna nála nagyobb méretű független halmaz. $\square$

### Bázis és vektor rá vonatkozó koordinátás alakjának meghatározása

A következőkben megvizsgáljuk, hogy hogyan írható fel egy (al)tér bázisa, és egy vektor erre vonatkozó koordinátás alakja.

**3.26. példa (Altér bázisának meghatározása).** *Határozzuk meg az $(1, 1, 0, -2)$, $(2, 3, 3, -2)$, $(1, 2, 3, 0)$ és $(1, 3, 6, 2)$ vektorok által kifeszített altér egy bázisát!*

*Megoldás. Első megoldás:* A megadott vektorokból, mint sorvektorokból képzett mátrix valamely sorlépcsős alakjának nemnulla sorai az altér egy bázisát adják:
$$\begin{bmatrix} 1 & 1 & 0 & -2 \\ 2 & 3 & 3 & -2 \\ 1 & 2 & 3 & 0 \\ 1 & 3 & 6 & 2 \end{bmatrix} \Rightarrow \begin{bmatrix} 1 & 1 & 0 & -2 \\ 0 & 1 & 3 & 2 \\ 0 & 1 & 3 & 2 \\ 0 & 2 & 6 & 4 \end{bmatrix} \Rightarrow \begin{bmatrix} 1 & 1 & 0 & -2 \\ 0 & 1 & 3 & 2 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix}.$$
A bázis vektorai $(1, 1, 0, -2)$, $(0, 1, 3, 2)$.

*Második megoldás:* Ha a bázist az adott vektorokból akarjuk kiválasztani, akkor képezzünk egy mátrixot e vektorokból, mint oszlopvektorokból. Lépcsős alakjában a főelemek oszlopai lineárisan független vektorok. A nekik megfelelő oszlopvektorok az eredeti mátrixban az oszloptér bázisát alkotják (ld. a 3.22. tételt és a 3.23. következmény 4. pontjának állítását).
$$\begin{bmatrix} 1 & 2 & 1 & 1 \\ 1 & 3 & 2 & 3 \\ 0 & 3 & 3 & 6 \\ -2 & -2 & 0 & 2 \end{bmatrix} \Rightarrow \begin{bmatrix} 1 & 2 & 1 & 1 \\ 0 & 1 & 1 & 2 \\ 0 & 3 & 3 & 6 \\ 0 & 2 & 2 & 4 \end{bmatrix} \Rightarrow \begin{bmatrix} 1 & 2 & 1 & 1 \\ 0 & 1 & 1 & 2 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix}.$$
Tehát az adott négy vektor közül az első kettő, azaz az $(1, 1, 0, -2)$ és $(2, 3, 3, -2)$ vektorok bázist alkotnak. Ha a megadott vektorokat más sorrendben írjuk a mátrixba, másik bázist kaphatunk. $\square$

**3.27. példa (Vektor felírása a bázisvektorok lineáris kombinációjaként).** *Az előző feladatban megadott négy vektor mindegyikét fejezzük ki az általuk kifeszített altér bázisvektorainak lineáris kombinációjaként!*

*Megoldás.* Az előző feladat második megoldásában találtunk egy bázist a megadott vektorok közül. Mivel az oszlopvektorokkal dolgoztunk, a vektorok közti lineáris kapcsolat leolvasható bármelyik lépcsős alakból: legkényelmesebben a *redukált* lépcsős alakból. Folytatjuk tehát az előző példabeli eliminációs lépéseket:
$$\begin{bmatrix} 1 & 2 & 1 & 1 \\ 1 & 3 & 2 & 3 \\ 0 & 3 & 3 & 6 \\ -2 & -2 & 0 & 2 \end{bmatrix} \Rightarrow \begin{bmatrix} 1 & 2 & 1 & 1 \\ 0 & 1 & 1 & 2 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix} \Rightarrow \begin{bmatrix} 1 & 0 & -1 & -3 \\ 0 & 1 & 1 & 2 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix}. \tag{3.1}$$
A redukált lépcsős alakból látjuk, hogy például a harmadik oszlop a második és az első különbsége. Ezek alapján az eredeti vektoroknak a bázisvektorok lineáris kombinációiként való felírása:
$$\begin{bmatrix} 1 \\ 2 \\ 3 \\ 0 \end{bmatrix} = -\begin{bmatrix} 1 \\ 1 \\ 0 \\ -2 \end{bmatrix} + \begin{bmatrix} 2 \\ 3 \\ 3 \\ -2 \end{bmatrix}, \quad \begin{bmatrix} 1 \\ 3 \\ 6 \\ 2 \end{bmatrix} = -3\begin{bmatrix} 1 \\ 1 \\ 0 \\ -2 \end{bmatrix} + 2\begin{bmatrix} 2 \\ 3 \\ 3 \\ -2 \end{bmatrix}.$$
Másik bázis választására lásd a 3.15. feladatot. $\square$

A koordináta-rendszer bevezetésénél ugyanazt tettük, mint itt az előző példában: minden vektor előállítható egy bázis elemeinek lineáris kombinációjaként, és e vektor koordinátás alakja erre a bázisra vonatkozóan a lineáris kombináció konstansaiból áll.

Egy vektortérben több bázist is vizsgálhatunk, és a vektorok koordinátás alakjai különbözhetnek a különböző bázisokban. Félreértések elkerülésére a bázis jelét a koordinátás alak indexében jelöljük. Például ha egy $\mathbf{v}$ vektor standard bázisbeli és $\mathcal{B}$ bázisbeli koordinátás alakjai $(4, 3)$, illetve $(0, 5)$, akkor azt írjuk, hogy
$$\mathbf{v} = (4, 3) = (0, 5)_{\mathcal{B}}, \quad \text{vagy mátrixjelöléssel} \quad \mathbf{v} = \begin{bmatrix} 4 \\ 3 \end{bmatrix} = \begin{bmatrix} 0 \\ 5 \end{bmatrix}_{\mathcal{B}}.$$
Ha általában akarunk utalni – a konkrét koordináták nélkül – egy $\mathbf{v}$ vektor $\mathcal{B}$ bázisbeli koordinátás alakjára, akkor a $[\mathbf{v}]_{\mathcal{B}}$ vagy a $(\mathbf{v})_{\mathcal{B}}$ alakot használjuk. Így írhatjuk azt is, hogy
$$[\mathbf{v}]_{\mathcal{B}} = \begin{bmatrix} 0 \\ 5 \end{bmatrix}_{\mathcal{B}}, \quad \text{vagy egyszerűbben, hogy} \quad [\mathbf{v}]_{\mathcal{B}} = \begin{bmatrix} 0 \\ 5 \end{bmatrix}.$$

**3.28. példa (Vektor koordinátás alakja a $\mathcal{B}$ bázisban).** *Írjuk fel a 3.26. és a 3.27. példákban is szereplő $\mathbf{v}_1 = (1, 1, 0, -2)$, $\mathbf{v}_2 = (2, 3, 3, -2)$, $\mathbf{v}_3 = (1, 2, 3, 0)$ és $\mathbf{v}_4 = (1, 3, 6, 2)$ vektorok által kifeszített altérben e négy vektor $\mathcal{B} = \{ \mathbf{v}_1, \mathbf{v}_2 \}$ bázisra vonatkozó koordinátás alakját!*

*Megoldás.* Az előző példában a (3.1) képletbeli redukált lépcsős alak nemzérus soraiból álló
$$\begin{bmatrix} 1 & 0 & -1 & -3 \\ 0 & 1 & 1 & 2 \end{bmatrix}$$
mátrix azt mutatja, hogy az $\mathcal{B}$ bázisban e négy vektor koordinátái rendre
$$\mathbf{v}_1 = \begin{bmatrix} 1 \\ 0 \end{bmatrix}_{\mathcal{B}}, \quad \mathbf{v}_2 = \begin{bmatrix} 0 \\ 1 \end{bmatrix}_{\mathcal{B}}, \quad \mathbf{v}_3 = \begin{bmatrix} -1 \\ 1 \end{bmatrix}_{\mathcal{B}}, \quad \mathbf{v}_4 = \begin{bmatrix} -3 \\ 2 \end{bmatrix}_{\mathcal{B}}.$$
Ez a 3.23. állítás 2. pontjából következik, mely szerint a redukált lépcsős alak oszlopai közti lineáris kapcsolatok megegyeznek az eredeti mátrix oszlopai közti lineáris kapcsolatokkal. $\square$

### Dimenzió és rang

Az előzőekben bázist kerestünk egy vektortérhez. Azt tapasztaltuk, hogy a bázis mindig ugyanannyi vektorból állt.

**3.29. tétel (Bázis-tétel).** *Ha a $\mathcal{V}$ vektortérnek van véges sok vektorból álló bázisa, akkor bármely két bázisa azonos számú vektorból áll.*

*Bizonyítás.* Tegyük fel, hogy a $\mathcal{V}$ vektortérnek
$$\mathcal{B} = \{ \mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k \}, \text{ és } \mathcal{C} = \{ \mathbf{w}_1, \mathbf{w}_2, \ldots, \mathbf{w}_r \},$$
két bázisa, melyek nem ugyanannyi vektorból állnak, azaz például $k < r$. Mivel $\mathcal{B}$ bázis $\mathcal{V}$-ben, ezért a $\mathcal{C}$ bázis vektorai is kifejezhetők lineáris kombinációikként, azaz léteznek olyan $a_{ij}$ skalárok, hogy
$$\mathbf{w}_i = a_{i1}\mathbf{v}_1 + a_{i2}\mathbf{v}_2 + \ldots + a_{ik}\mathbf{v}_k, \quad (i = 1, \ldots, r). \tag{3.2}$$
Mivel a $\mathcal{C}$ bázis vektorai lineárisan függetlenek, ezért a
$$c_1\mathbf{w}_1 + c_2\mathbf{w}_2 + \ldots + c_r\mathbf{w}_r = \mathbf{0} \tag{3.3}$$
egyenlőség csak a $c_1 = c_2 = \ldots = c_k = 0$ konstansokra áll fenn. A (3.2) egyenlőségeit a (3.3) egyenletbe helyettesítve
$$c_1(a_{11}\mathbf{v}_1 + a_{12}\mathbf{v}_2 + \ldots + a_{1k}\mathbf{v}_k) + c_2(a_{21}\mathbf{v}_1 + a_{22}\mathbf{v}_2 + \ldots + a_{2k}\mathbf{v}_k) + \ldots + c_r(a_{r1}\mathbf{v}_1 + a_{r2}\mathbf{v}_2 + \ldots + a_{rk}\mathbf{v}_k) = \mathbf{0},$$
aminek $\mathcal{B}$ vektorai szerinti rendezése után kapjuk, hogy
$$(a_{11}c_1 + a_{21}c_2 + \ldots + a_{r1}c_r)\mathbf{v}_1 + (a_{12}c_1 + a_{22}c_2 + \ldots + a_{r2}c_r)\mathbf{v}_2 + \ldots + (a_{1k}c_1 + a_{2k}c_2 + \ldots + a_{rk}c_r)\mathbf{v}_k = \mathbf{0}.$$
Ez azt jelenti, hogy a homogén lineáris
$$\begin{alignedat}{9}
a_{11}c_1 &{}+{}& a_{21}c_2 &{}+{}& \ldots &{}+{}& a_{r1}c_r &{}={}& 0 \\
a_{12}c_1 &{}+{}& a_{22}c_2 &{}+{}& \ldots &{}+{}& a_{r2}c_r &{}={}& 0 \\
\vdots && \vdots && && \vdots && \;\,\vdots \\
a_{1k}c_1 &{}+{}& a_{2k}c_2 &{}+{}& \ldots &{}+{}& a_{rk}c_r &{}={}& 0
\end{alignedat}$$
egyenletrendszernek a $c_1 = c_2 = \ldots = c_k = 0$ az egyetlen megoldása. Ez viszont a 3.6. tétel szerint nem teljesülhet, mivel a fenti homogén

egyenletrendszer egyenleteinek száma kisebb ismeretlenjei számánál ($k < r$). Ez az ellentmondás bizonyítja, hogy indirekt feltevésünk helytelen volt, tehát a két bázis azonos számú vektorból áll. $\square$

E tétel értelmet ad a következő definíciónak:

**3.30. definíció (Dimenzió).** *Ha a $\mathcal{V}$ vektortérnek van véges bázisa, akkor dimenzióján egy bázisának elemszámát értjük, melyet $\dim \mathcal{V}$ jelöl.*

▶ Az $\mathbb{R}^n$ standard bázisa épp $n$ vektorból áll, így $\dim \mathbb{R}^n = n$.
▶ A zérustér bázisa az üreshalmaz, ami 0 darab elemből áll, így e teret nulldimenziósnak tekintjük.
▶ Ha a háromdimenziós térben tekintünk egy origón átmenő síkot, látjuk, hogy bármely két független vektora kifeszíti, azaz minden bázisa kételemű. E sík e definíció szerint is 2-dimenziós.
▶ Hasonlóan egy origón átmenő egyenest minden nemnulla vektora, mint egyelemű bázisa, kifeszíti. Ez a térnek 1-dimenziós altere.

Az $m \times n$-es $\mathbf{A}$ mátrix *transzponáltján* az $\mathbf{A}^\mathsf{T}$-vel jelölt $n \times m$-es mátrixot értjük, amelyet az $\mathbf{A}$ sorainak és oszlopainak felcserélésével kapunk. Azaz
$$\mathbf{A}^\mathsf{T} = [a_{ij}]^\mathsf{T} := [a_{ji}].$$
Például
$$\begin{bmatrix} 1 \\ 2 \end{bmatrix}^\mathsf{T} = \begin{bmatrix} 1 & 2 \end{bmatrix}, \quad \begin{bmatrix} 0 & 1 \\ 2 & 3 \end{bmatrix}^\mathsf{T} = \begin{bmatrix} 0 & 2 \\ 1 & 3 \end{bmatrix}, \quad \begin{bmatrix} 0 & 1 & 2 \\ 3 & 4 & 5 \end{bmatrix}^\mathsf{T} = \begin{bmatrix} 0 & 3 \\ 1 & 4 \\ 2 & 5 \end{bmatrix}.$$

Adott véges sok $\mathbb{R}^n$-beli vektor által kifeszített altér dimenzióját úgy határozhatjuk meg, hogy meghatározzuk a vektorokból képzett mátrix rangját. Igaz ugyanis a következő állítás:

**3.31. állítás (Dimenzió = rang).** *Egy mátrix rangja, sorterének dimenziója és oszlopterének dimenziója megegyezik, azaz $\operatorname{r}(\mathbf{A}) = \dim(\mathcal{S}(\mathbf{A})) = \dim(\mathcal{O}(\mathbf{A}))$. Ebből következőleg $\operatorname{r}(\mathbf{A}) = \operatorname{r}(\mathbf{A}^\mathsf{T})$.*

*Bizonyítás.* A mátrix rangja megegyezik a lépcsős alakjában lévő nemzérus sorainak számával. A 3.23. tétel szerint viszont e sorok lineárisan függetlenek és kifeszítik a sorteret, tehát bázist alkotnak, így számuk a sortér dimenzióját adja. Az oszloptérről láttuk, hogy a főelemeknek megfelelő oszlopok az eredeti mátrixban lineárisan függetlenek és kifeszítik az oszlopteret, tehát e tér dimenziója is a mátrix rangjával egyezik meg. Az utolsó állítás abból következik, hogy $\mathbf{A}$ sortere megegyezik $\mathbf{A}^\mathsf{T}$ oszlopterével. $\square$

Egy $\mathbb{R}^n$-beli vektorokból álló vektorrendszer *rangján* a vektorokból képzett mátrix rangját, vagy ami ezzel egyenlő, az általuk kifeszített altér dimenzióját értjük. Egy $\mathbf{A}$ mátrix $\operatorname{null}(\mathbf{A})$-val jelölt *nullitásán* nullterének dimenzióját értjük, tehát $\operatorname{null}(\mathbf{A}) = \dim(\mathcal{N}(\mathbf{A}))$.

**3.32. példa (Dimenzió kiszámítása).** *Határozzuk meg az $\mathbf{A}$ mátrix sorterének és nullterének dimenzióját!*
$$\mathbf{A} = \begin{bmatrix} 3 & 3 & 3 & 3 & 3 \\ 3 & 4 & 5 & 4 & 3 \\ 3 & 2 & 1 & 2 & 3 \\ 3 & 3 & 3 & 3 & 3 \end{bmatrix}$$

*Megoldás.* Az $\mathbf{A}$ redukált lépcsős alakja
$$\operatorname{rref}(\mathbf{A}) = \begin{bmatrix} 1 & 0 & -1 & 0 & 1 \\ 0 & 1 & 2 & 1 & 0 \\ 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 \end{bmatrix}$$
Innen leolvasható, hogy a mátrix rangja 2, így sorterének dimenziója is 2. A nulltér dimenziója megegyezik az egyenletrendszer megoldásterének dimenziójával, ami megegyezik a szabad változók számával, esetünkben ez 3. Vegyük észre, hogy a sortér és a nulltér dimenziójának összege megegyezik a változók számával, azaz a mátrix oszlopainak számával, jelen példában 5-tel. $\square$

**3.33. tétel (Dimenziótétel (rang-nullitási tétel)).** *Bármely valós $m \times n$-es $\mathbf{A}$ mátrix esetén a sortér dimenziójának és a nulltér dimenziójának összege $n$. Képlettel:*
$$\dim(\mathcal{S}(\mathbf{A})) + \dim(\mathcal{N}(\mathbf{A})) = n \qquad (\operatorname{r}(\mathbf{A}) + \operatorname{null}(\mathbf{A}) = n).$$

*Bizonyítás.* A mátrix sorterének dimenziója megegyezik a mátrix rangjával, azaz az $[\mathbf{A}|\mathbf{0}]$ mátrixú egyenletrendszerben a kötött változók számával. Megmutatjuk, hogy a nulltér dimenziója megegyezik a szabad változók számával, így a két szám összege valóban $n$, ami bizonyítja az állítást (ld. még a 3.4. állítást).

Elég tehát megmutatnunk, hogy egy homogén lineáris egyenletrendszer redukált lépcsős alakkal előállított megoldásában a szabad változók száma megegyezik a nulltérből kiválasztható bázis elemszámával. Először lássunk egy ilyen megoldást konkrétan. Például a 2.35. példabeli homogén lineáris egyenletrendszer megoldása
$$\begin{bmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \\ x_5 \end{bmatrix} = \begin{bmatrix} -2s - \frac{3}{2}t - u \\ s \\ -\frac{1}{2}t \\ t \\ u \end{bmatrix} = s\begin{bmatrix} -2 \\ 1 \\ 0 \\ 0 \\ 0 \end{bmatrix} + t\begin{bmatrix} -\frac{3}{2} \\ 0 \\ -\frac{1}{2} \\ 1 \\ 0 \end{bmatrix} + u\begin{bmatrix} -1 \\ 0 \\ 0 \\ 0 \\ 1 \end{bmatrix},$$
ahol $x_2 = s$, $x_4 = t$ és $x_5 = u$ a három szabad változó. A nullteret kifeszítő három vektor közül az elsőben $x_2 = 1$, de az összes többiben $x_2 = 0$, így az első vektor független a többitől. Hasonlóképp általában is igaz, hogy a redukált lépcsős alakból való származtatás következtében a nullteret kifeszítő minden megoldásvektorban az összes szabad változóhoz tartozó koordináta 0, azt az egyet kivéve, amelyikhez a vektor tartozik. Így viszont mindegyik vektor független a többitől, vagyis e vektorok függetlenek, és mivel kifeszítik a nullteret, számuk megadja a nulltér dimenzióját. $\square$

### Mátrix kitüntetett alterei és a lineáris algebra alaptétele

Definiálni fogjuk mátrix négy kitüntetett alterét és igazoljuk azok merőlegességét.

**3.34. példa (Vektorokra merőleges altér).** *Határozzuk meg az összes olyan vektort $\mathbb{R}^4$-ben, mely merőleges a $\mathbf{v}_1 = (1, 0, 1, 2)$ és $\mathbf{v}_2 = (-1, 2, -2, 1)$ vektorok mindegyikére!*

*Megoldás.* Olyan $\mathbf{x}$ vektort keresünk, melyre $\mathbf{v}_1 \cdot \mathbf{x} = 0$ és $\mathbf{v}_2 \cdot \mathbf{x} = 0$. Ezt koordinátákkal felírva egy két egyenletből álló egyenletrendszert kapunk, melynek együtthatómátrixa és annak lépcsős alakja:
$$\begin{bmatrix} 1 & 0 & 1 & 2 \\ -1 & 2 & -2 & 1 \end{bmatrix} \Rightarrow \begin{bmatrix} 1 & 0 & 1 & 2 \\ 0 & 2 & -1 & 3 \end{bmatrix},$$
amiből $\mathbf{x} = (-s - 2t, (s - 3t)/2, s, t)$, azaz
$$\mathbf{x} = s\begin{bmatrix} -1 \\ 1/2 \\ 1 \\ 0 \end{bmatrix} + t\begin{bmatrix} -2 \\ -3/2 \\ 0 \\ 1 \end{bmatrix}.$$
A megoldás tehát a sorvektorokból képzett mátrix nulltere. $\square$

**3.35. állítás (A sortér és a nulltér merőlegessége).** *A valós $\mathbf{A}$ mátrix sorterének bármely $\mathbf{s}$ vektora és nullterének tetszőleges $\mathbf{x}$ vektora merőleges egymásra, azaz $\mathbf{s} \cdot \mathbf{x} = 0$.*

*Bizonyítás.* Az $m \times n$-es $\mathbf{A}$ együtthatómátrixú homogén lineáris egyenletrendszer $i$-edik egyenletének alakja
$$a_{i1}x_1 + a_{i2}x_2 + \cdots + a_{in}x_n = 0, \text{ azaz } \mathbf{a}_{i*} \cdot \mathbf{x} = 0.$$
Eszerint a homogén lineáris egyenletrendszer minden megoldása merőleges az $\mathbf{A}$ mátrix minden sorvektorára. A sortér minden vektora az $\mathbf{A}$ sorvektorainak valamely $c_1, \ldots, c_m$ skalárokkal vett lineáris kombinációja. Ezt felhasználva
$$\begin{aligned}
\mathbf{s} \cdot \mathbf{x} &= (c_1\mathbf{a}_{1*} + c_2\mathbf{a}_{2*} + \cdots + c_m\mathbf{a}_{m*}) \cdot \mathbf{x} \\
&= c_1\mathbf{a}_{1*} \cdot \mathbf{x} + c_2\mathbf{a}_{2*} \cdot \mathbf{x} + \cdots + c_m\mathbf{a}_{m*} \cdot \mathbf{x} \\
&= c_1 0 + c_2 0 + \cdots + c_m 0 = 0. \qquad \square
\end{aligned}$$

Ez a következő definíciókra vezet: egy vektortér két altere *merőleges,* ha bárhogy választva mindegyikükből egy-egy vektort, azok merőlegesek egymásra. Így az előző állítás szerint bármely valós mátrix sortere és nulltere merőleges egymásra. Ennél több is igaz, a nulltér az összes olyan vektort tartalmazza, mely merőleges a sortérre. Az $\mathbb{R}^n$ $\mathcal{W}$ alterére merőleges vektorok alterét a $\mathcal{W}$ *merőleges kiegészítő alterének* (vagy $\mathcal{W}$ *merőlegesének*) nevezzük és $\mathcal{W}^\perp$-pel jelöljük. A két fogalom közti különbséget a 3.11. ábra a 3-dimenziós térben szemlélteti.

Később látni fogjuk, hogy általánosan is igaz az, hogy bármely $\mathcal{V}$ altérre $(\mathcal{V}^\perp)^\perp = \mathcal{V}$ (ld. 7.43. tétel), vagy másként fogalmazva, ha $\mathcal{V}^\perp = \mathcal{W}$, akkor $\mathcal{W}^\perp = \mathcal{V}$. Így mondhatjuk azt, hogy két altér merőleges kiegészítő alterei, vagy merőlegesei egymásnak.

Tekintsük az $\mathbf{A}$ mátrix transzponáltját! Az $\mathbf{A}^\mathsf{T}$ együtthatómátrixú homogén lineáris egyenletrendszer megoldásai merőlegesek $\mathbf{A}^\mathsf{T}$ sorvektoraira, azaz az $\mathbf{A}$ oszlopvektoraira. E két-két altér merőlegességét szemlélteti a 3.12. ábra. E négy altér igen fontos lesz a továbbiakban is, ezért nevet adunk nekik:

**3.36. definíció (Kitüntetett alterek).** *Egy mátrix négy kitüntetett alterének nevezzük a mátrix sorterét, oszlopterét, nullterét és transzponáltjának nullterét. Az $\mathbf{A}$ mátrix kitüntetett alterei tehát $\mathcal{S}(\mathbf{A}) = \mathcal{O}(\mathbf{A}^\mathsf{T})$, $\mathcal{O}(\mathbf{A}) = \mathcal{S}(\mathbf{A}^\mathsf{T})$, $\mathcal{N}(\mathbf{A})$, $\mathcal{N}(\mathbf{A}^\mathsf{T})$.*

**3.37. tétel (A lineáris algebra alaptétele).** *Minden valós mátrix sortere és nulltere merőleges kiegészítő alterei egymásnak.*

*Bizonyítás.* Láttuk, hogy a sortér merőleges kiegészítő altere a nulltér. A később bizonyítandó 7.43. tételre hivatkozva ez azt jelenti, hogy a nulltér kiegészítő altere a sortér, ami bizonyítja a tételt. E hivatkozást nem használó bizonyítás is adható, amit az Olvasóra hagyunk (ld. 3.27. feladat)! $\square$

▶ A tétel állítása képletben kifejezve azt mondja, hogy $\mathcal{S}(\mathbf{A})^\perp = \mathcal{N}(\mathbf{A})$, ami egyúttal azt is jelenti, hogy $\mathcal{N}(\mathbf{A})^\perp = \mathcal{S}(\mathbf{A})$.
▶ A tételt az $\mathbf{A}^\mathsf{T}$ mátrixra alkalmazva, és az $\mathcal{O}(\mathbf{A}) = \mathcal{S}(\mathbf{A}^\mathsf{T})$ összefüggést használva kapjuk, hogy $\mathcal{O}(\mathbf{A})^\perp = \mathcal{N}(\mathbf{A}^\mathsf{T})$.
▶ A 3.27. feladatban bizonyítjuk, hogy a sortér egy $\{ \mathbf{s}_1, \mathbf{s}_2, \ldots, \mathbf{s}_k \}$ bázisa és a nulltér egy $\{ \mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_{n-k} \}$ bázisa együtt a tér bázisát adják. Mivel minden $\mathbf{x}$ vektor egyértelműen áll elő e bázisvektorok lineáris kombinációjaként, egyúttal egyértelmű az $\mathbf{x}$ vektornak egy sortérbe és egy nulltérbe eső vektor összegére való bontása is:
$$\mathbf{x} = \underbrace{c_1\mathbf{s}_1 + \cdots + c_r\mathbf{s}_r}_{\mathbf{c}} + \underbrace{d_1\mathbf{e}_1 + \cdots + d_{n-r}\mathbf{e}_{n-r}}_{\mathbf{d}}.$$

*3.11. ábra. a) $\mathcal{U}$ és $\mathcal{V}$ két egymásra merőleges 1-dimenziós altér a 3-dimenziós térben; b) Egy altér és merőleges kiegészítő altere: $\mathcal{U}$ (egy 1-dimenziós altér) és $\mathcal{U}^\perp$, a merőlegese 2-dimenziós.*

*3.12. ábra. Az $\mathbf{A}$ mátrix sortere merőleges nullterére, oszloptere az $\mathbf{A}^\mathsf{T}$ nullterére. A berajzolt két ív az alterek merőlegességét jelöli.*

*3.13. ábra. A lineáris algebra alaptétele: az $\mathbf{A}$ mátrix sortere és nulltere merőleges kiegészítő alterek. Eszerint a sortér bármely vektora merőleges a nulltér bármely vektorára, és $\mathbb{R}^n$ bármely vektora egyértelműen felbomlik egy sortérbe és egy nulltérbe eső vektor összegére.*

Az előző megjegyzések és a lineáris algebra alaptételének következménye az alábbi tétel:

**3.38. tétel (A négy kitüntetett altér).** *Tekintsük az $m \times n$-es valós $\mathbf{A}$ mátrixot. Ekkor a következő állítások teljesülnek:*
- a) *$\mathcal{S}(\mathbf{A})^\perp = \mathcal{N}(\mathbf{A})$, $\mathcal{O}(\mathbf{A})^\perp = \mathcal{N}(\mathbf{A}^\mathsf{T})$.*
- b) *$\mathbb{R}^n$ minden vektora egyértelműen felbomlik egy $\mathcal{S}(\mathbf{A})$- és egy $\mathcal{N}(\mathbf{A})$-beli vektor összegére,*
- c) *$\mathbb{R}^m$ minden vektora egyértelműen felbomlik egy $\mathcal{O}(\mathbf{A})$- és egy $\mathcal{N}(\mathbf{A}^\mathsf{T})$-beli vektor összegére.*

### A lineáris egyenletrendszer megoldásainak jellemzése

Az eddigiekre építve szép leírását kapjuk a lineáris egyenletrendszerek megoldásai.

**3.39. tétel (Lineáris egyenletrendszer megoldásai).** *Minden valós együtthatós konzisztens lineáris egyenletrendszerre igaz a következők:*
- a) *egyetlen megoldása esik az együtthatómátrix sorterébe;*
- b) *e sortérbe eső megoldás a megoldások közül a legkisebb abszolút értékű;*
- c) *az összes megoldás előáll úgy, hogy a sortérbe eső megoldáshoz hozzáadjuk a homogén rész összes megoldását.*

*Bizonyítás.* A tétel a homogén lineáris egyenletrendszerekre semmitmondó, hisz ekkor a megoldások a nullteret adják, és mivel annak metszete a sortérrel csak a nullvektorból áll, a nullvektor esik a sortérbe, mely a legkisebb abszolút értékű megoldás.

a) Tegyük fel, hogy $\mathbf{x}_1$ és $\mathbf{x}_2$ két megoldása az $[\mathbf{A}|\mathbf{b}]$ mátrixú egyenletrendszernek, és mindkettő a sortérbe esik. Az $i$-edik egyenlet alakja $\mathbf{a}_{i*} \cdot \mathbf{x} = b_i$, így $\mathbf{a}_{i*} \cdot \mathbf{x}_1 = b_i$ és $\mathbf{a}_{i*} \cdot \mathbf{x}_2 = b_i$ is fönnáll minden $i = 1, 2, \ldots m$ értékre. A két megoldás különbsége is a sortérbe esik, hisz sortérbeli vektorok lineáris kombinációja a sortérbe esik. Ekkor viszont minden $i$ esetén
$$\mathbf{a}_{i*} \cdot (\mathbf{x}_1 - \mathbf{x}_2) = b_i - b_i = 0,$$
vagyis $\mathbf{x}_1 - \mathbf{x}_2$ megoldása a homogén egyenletrendszernek, tehát a nulltérbe esik. Annak metszete a sortérrel csak a nullvektort tartalmazza, így $\mathbf{x}_1 - \mathbf{x}_2 = \mathbf{0}$, vagyis $\mathbf{x}_1 = \mathbf{x}_2$.

Megmutatjuk, hogy mindig van sortérbe eső megoldás. Legyen $\mathbf{x}$ egy tetszőleges megoldás, és tekintsük az egyértelműen létező felbontását egy sortérbeli és egy nulltérbeli vektor összegére, azaz legyen
$$\mathbf{x} = \mathbf{x}_\mathcal{S} + \mathbf{x}_\mathcal{N}.$$
E megoldásvektort beírva az $i$-edik egyenletbe kapjuk, hogy
$$b_i = \mathbf{a}_{i*} \cdot \mathbf{x} = \mathbf{a}_{i*} \cdot (\mathbf{x}_\mathcal{S} + \mathbf{x}_\mathcal{N}) = \mathbf{a}_{i*} \cdot \mathbf{x}_\mathcal{S} + \mathbf{a}_{i*} \cdot \mathbf{x}_\mathcal{N} = \mathbf{a}_{i*} \cdot \mathbf{x}_\mathcal{S}.$$
Tehát bármely megoldás sortérbeli összetevője is megoldása az egyenletrendszernek! Egyúttal azt is beláttuk, hogy az összes megoldás e sortérbeli megoldás és a homogén egy megoldásának összege, másrészt hogy az $\mathbf{x}_\mathcal{S}$ megoldáshoz bármely nulltérbeli vektort adva az egyenletrendszer egy megoldását kapjuk, így igazoltuk a c) állítást is.

A sortér és a nulltér merőlegessége miatt az $\mathbf{x} = \mathbf{x}_\mathcal{S} + \mathbf{x}_\mathcal{N}$ felbontás vektorai merőlegesek, azaz $\mathbf{x}_\mathcal{S} \perp \mathbf{x}_\mathcal{N}$. Használhatjuk tehát Pithagorász-tételét:
$$\mathbf{x}^2 = \mathbf{x}_\mathcal{S}^2 + \mathbf{x}_\mathcal{N}^2 \geq \mathbf{x}_\mathcal{S}^2, \text{ azaz } |\mathbf{x}| \geq |\mathbf{x}_\mathcal{S}|.$$
Így tehát minden megoldás abszolút értéke nagyobb vagy egyenlő a sortérbeli megoldás abszolút értékénél, ami bizonyítja a b) állítást. $\square$

A sortérbe eső egyetlen megoldás létezése azt sugallja, hogy minden megoldható egyenletrendszer további egyenletek hozzávételével kiegészíthető olyan egyenletrendszerré, melynek már csak egyetlen megoldása van, a sortérbe eső. Ez valóban igaz.

**3.40. példa (Lineáris egyenletrendszer sortérbe eső megoldása).** *Határozzuk meg az*
$$\begin{alignedat}{9}
x &{}+{}& y &{}+{}& z &{}+{}& 3u &{}+{}& 2w &{}={}& 4 \\
x &{}+{}& 2y &{}+{}& z &{}+{}& 5u &{}+{}& 2w &{}={}& 5 \\
2x &{}+{}& 3y &{}+{}& z &{}+{}& 8u &{}+{}& 3w &{}={}& 7 \\
2x &{}+{}& 3y &{}+{}& 2z &{}+{}& 8u &{}+{}& 4w &{}={}& 9
\end{alignedat}$$
*egyenletrendszer minimális abszolút értékű megoldását! Adjunk az egyenletrendszerhez olyan további egyenlet(ek)et, hogy az így kapott egyenletrendszernek csak ez legyen az egyetlen megoldása!*

*Megoldás.* Először oldjuk meg az egyenletrendszert! A bővített mátrixból annak redukált lépcsős alakja könnyen adódik:
$$\left[\begin{array}{ccccc|c} 1 & 1 & 1 & 3 & 2 & 4 \\ 1 & 2 & 1 & 5 & 2 & 5 \\ 2 & 3 & 1 & 8 & 3 & 7 \\ 2 & 3 & 2 & 8 & 4 & 9 \end{array}\right] \Longrightarrow \left[\begin{array}{ccccc|c} 1 & 0 & 0 & 1 & 1 & 1 \\ 0 & 1 & 0 & 2 & 0 & 1 \\ 0 & 0 & 1 & 0 & 0 & 2 \end{array}\right]$$
Így a megoldás:
$$(x, y, z, u, w) = (1, 1, 2, 0, 0) + (-1, -2, 0, 1, 0)u + (-1, 0, -1, 0, 1)w.$$
Mivel a sortér merőleges a nulltérre, és mi egy sortérbe eső megoldást keresünk, ezért e megoldásnak merőlegesnek kell lennie a nullteret kifeszítő vektorokra, vagyis a $(-1, -2, 0, 1, 0)$ és a $(-1, 0, -1, 0, 1)$ vektorra. Így a következő két egyenletet kell az eredeti egyenletrendszerhez, vagy az egyszerűség kedvéért inkább a redukált lépcsős alak szerinti

egyenletrendszerhez adni:
$$\begin{alignedat}{9}
-x &{}-{}& 2y &&&{}+{}& u &&&{}={}& 0 \\
-x &&&{}-{}& z &&&{}+{}& w &{}={}& 0
\end{alignedat}$$
Így a kiegészített egyenletrendszer bővített mátrixa és annak redukált lépcsős alakja
$$\left[\begin{array}{ccccc|c} 1 & 0 & 0 & 1 & 1 & 1 \\ 0 & 1 & 0 & 2 & 0 & 1 \\ 0 & 0 & 1 & 0 & 1 & 2 \\ -1 & -2 & 0 & 1 & 0 & 0 \\ -1 & 0 & -1 & 0 & 1 & 0 \end{array}\right] \Longrightarrow \left[\begin{array}{ccccc|c} 1 & 0 & 0 & 0 & 0 & -4/17 \\ 0 & 1 & 0 & 0 & 0 & 5/17 \\ 0 & 0 & 1 & 0 & 0 & 19/17 \\ 0 & 0 & 0 & 1 & 0 & 6/17 \\ 0 & 0 & 0 & 0 & 1 & 15/17 \end{array}\right],$$
tehát a keresett megoldás $(-4/17, 5/17, 19/17, 6/17, 15/17)$. $\square$

### Elemi bázistranszformáció

Az előző paragrafusokban azt láttuk, hogy az elemi sorműveletek eredményeként az eredeti mátrix oszlopainak egy másik bázisban felírt koordinátás alakját kapjuk meg. Ez adja az ötletet ahhoz, hogy más nézőpontból lássuk, mi történik, ha egy oszlopban főelemet választunk, és az oszlop többi elemét elimináljuk.

A lényeg egy kétoszlopos mátrixon is szemléltethető: a két oszlop legyen $\mathbf{a}$ és $\mathbf{b}$, a bázis, melyben e vektorok meg vannak adva, a standard bázis. Tegyük fel, hogy $a_i \neq 0$. Ekkor az $a_i$ pozícióját választva, a kiküszöbölés eredménye:
$$\begin{bmatrix} a_1 & b_1 \\ a_2 & b_2 \\ \vdots & \vdots \\ a_i & b_i \\ \vdots & \vdots \\ a_m & b_m \end{bmatrix} \Longrightarrow \begin{bmatrix} 0 & b_1 - \frac{b_i}{a_i}a_1 \\ 0 & b_2 - \frac{b_i}{a_i}a_2 \\ \vdots & \vdots \\ 1 & \frac{b_i}{a_i} \\ \vdots & \vdots \\ 0 & b_m - \frac{b_i}{a_i}a_m \end{bmatrix}$$
Megmutatjuk, hogy e transzformáció után mindkét vektor az
$$\mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_{i-1}, \mathbf{a}, \mathbf{e}_{i+1}, \ldots, \mathbf{e}_m$$
bázisban lett felírva. Az $\mathbf{a}$ vektorra ez nyilvánvaló. Nézzük a $\mathbf{b}$ vektort! Fejezzük ki az $\mathbf{e}_i$ vektort az $\mathbf{a} = a_1\mathbf{e}_1 + \ldots + a_i\mathbf{e}_i + \ldots + a_m\mathbf{e}_m$ felírásból:
$$\mathbf{e}_i = -\frac{1}{a_i}a_1\mathbf{e}_1 - \frac{1}{a_i}a_2\mathbf{e}_2 - \ldots + \frac{1}{a_i}\mathbf{a} - \ldots - \frac{1}{a_i}a_m\mathbf{e}_m.$$
Ezt behelyettesítjük a $\mathbf{b} = b_1\mathbf{e}_1 + \ldots + b_i\mathbf{e}_i + \ldots + b_m\mathbf{e}_m$ kifejezésbe:
$$\mathbf{b} = \left(b_1 - \frac{b_i}{a_i}a_1\right)\mathbf{e}_1 + \left(b_2 - \frac{b_i}{a_i}a_2\right)\mathbf{e}_2 + \ldots + \frac{b_i}{a_i}\mathbf{a} + \ldots + \left(b_m - \frac{b_i}{a_i}a_m\right)\mathbf{e}_m.$$
Tehát valóban, a $\mathbf{b}$ koordinátás alakja e módosított bázisban épp az, amit az eredeti mátrix eliminálása után kaptunk a második oszlopban. Az imént tárgyalt lépést *elemi bázistranszformációnak* nevezzük, mert egy másik bázisra való áttérés egy elemi lépésének tekintjük, amikor egyetlen bázisvektort cserélünk ki. A lépések jelzésére a mátrixot fejléccel együtt egy táblázatba írjuk, a sorok elé az $\mathbf{e}_1, \ldots, \mathbf{e}_m$ bázisvektorok, az oszlopok fölé az oszlopvektorok neve kerül.

| | $\mathbf{a}$ | $\mathbf{b}$ |
|---|---|---|
| $\mathbf{e}_1$ | $a_1$ | $b_1$ |
| $\mathbf{e}_2$ | $a_2$ | $b_2$ |
| $\vdots$ | $\vdots$ | $\vdots$ |
| $\mathbf{e}_i$ | $a_i$ | $b_i$ |
| $\vdots$ | $\vdots$ | $\vdots$ |
| $\mathbf{e}_m$ | $a_m$ | $b_m$ |

$\Longrightarrow$

| | $\mathbf{a}$ | $\mathbf{b}$ |
|---|---|---|
| $\mathbf{e}_1$ | $0$ | $b_1 - \frac{b_i}{a_i}a_1$ |
| $\mathbf{e}_2$ | $0$ | $b_2 - \frac{b_i}{a_i}a_2$ |
| $\vdots$ | $\vdots$ | $\vdots$ |
| $\mathbf{a}$ | $1$ | $\frac{b_i}{a_i}$ |
| $\vdots$ | $\vdots$ | $\vdots$ |
| $\mathbf{e}_m$ | $0$ | $b_m - \frac{b_i}{a_i}a_m$ |

Összefoglalva és egyúttal általánosabban megfogalmazva a fentieket:

**3.41. tétel (Elemi bázistranszformáció).** *Tegyük fel, hogy az $\mathbf{a}$ vektor $E = \{ \mathbf{e}_1, \ldots, \mathbf{e}_m \}$ bázisra vonatkozó $i$-edik koordinátája $a_i \neq 0$. Ekkor az $E$ által generált $\mathcal{E}$ altérnek az*
$$\mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_{i-1}, \mathbf{a}, \mathbf{e}_{i+1}, \ldots, \mathbf{e}_m$$
*vektorok is bázisát alkotják. Az $\mathcal{E}$ egy tetszőleges $\mathbf{b}$ vektorának koordinátás alakja megkapható e bázisban elemi sorműveletekkel, ha $a_i$-t választjuk főelemnek.*

Az elemi bázistranszformáció alkalmas arra, hogy a bázisok változásán keresztül egy más nézőpontból világítsa meg a redukált lépcsős alakra hozással megoldható feladatokat. Példaként vizsgáljuk meg, mi történik egy egyenletrendszer megoldásakor. Megjegyezzük, hogy itt nincs szükség sorcserére, mert egy oszlopból szabadon választhatunk olyan sort, amelynek fejlécében még az eredeti bázisvektor szerepel.

**3.42. példa (Egyenletrendszer megoldása elemi bázistranszformációval).** *Oldjuk meg a 2.32. és a 2.39. példában megoldott egyenletrendszert elemi bázistranszformációval.*

*Megoldás.* A táblázatokat egybefűzzük, a sorok fejlécein mindig jelezzük az aktuális bázist, az oszlopok fejléceit a jobb érthetőség végett mindig kiírjuk, a kiválasztott főelemeket külön jelöljük:

| | $\mathbf{a}_1$ | $\mathbf{a}_2$ | $\mathbf{a}_3$ | $\mathbf{b}$ |
|---|---|---|---|---|
| $\mathbf{e}_1$ | **1** | 1 | 2 | 0 |
| $\mathbf{e}_2$ | 2 | 2 | 3 | 2 |
| $\mathbf{e}_3$ | 1 | 3 | 3 | 4 |
| $\mathbf{e}_4$ | 1 | 2 | 1 | 5 |

$\Longrightarrow$

| | $\mathbf{a}_1$ | $\mathbf{a}_2$ | $\mathbf{a}_3$ | $\mathbf{b}$ |
|---|---|---|---|---|
| $\mathbf{a}_1$ | 1 | 1 | 2 | 0 |
| $\mathbf{e}_2$ | 0 | 0 | -1 | 2 |
| $\mathbf{e}_3$ | 0 | 2 | 1 | 4 |
| $\mathbf{e}_4$ | 0 | **1** | -1 | 5 |

$\Longrightarrow$

| | $\mathbf{a}_1$ | $\mathbf{a}_2$ | $\mathbf{a}_3$ | $\mathbf{b}$ |
|---|---|---|---|---|
| $\mathbf{a}_1$ | 1 | 0 | 3 | -5 |
| $\mathbf{e}_2$ | 0 | 0 | -1 | 2 |
| $\mathbf{e}_3$ | 0 | 0 | **3** | -6 |
| $\mathbf{a}_2$ | 0 | 1 | -1 | 5 |

$\Longrightarrow$

| | $\mathbf{a}_1$ | $\mathbf{a}_2$ | $\mathbf{a}_3$ | $\mathbf{b}$ |
|---|---|---|---|---|
| $\mathbf{a}_1$ | 1 | 0 | 0 | 1 |
| $\mathbf{e}_2$ | 0 | 0 | 0 | 0 |
| $\mathbf{a}_3$ | 0 | 0 | 1 | -2 |
| $\mathbf{a}_2$ | 0 | 1 | 0 | 3 |

A táblázaton kicsit lehet egyszerűsíteni, azt az oszlopot, amelyben már csak egy standard egységvektor van, felesleges kiírni, az oszlopok és a sorok fejléceibe pedig elég csak azt a változót írni, amelyik a bázisba vett oszlopvektorhoz tartozik. Így a következőt kapjuk:

| | $x$ | $y$ | $z$ | $\mathbf{b}$ |
|---|---|---|---|---|
| | **1** | 1 | 2 | 0 |
| | 2 | 2 | 3 | 2 |
| | 1 | 3 | 3 | 4 |
| | 1 | 2 | 1 | 5 |

$\Longrightarrow$

| | $y$ | $z$ | $\mathbf{b}$ |
|---|---|---|---|
| $x$ | 1 | 2 | 0 |
| | 0 | -1 | 2 |
| | 2 | 1 | 4 |
| | **1** | -1 | 5 |

$\Longrightarrow$

| | $z$ | $\mathbf{b}$ |
|---|---|---|
| $x$ | 3 | -5 |
| | -1 | 2 |
| | **3** | -6 |
| $y$ | -1 | 5 |

$\Longrightarrow$

| | $\mathbf{b}$ |
|---|---|
| $x$ | 1 |
| | 0 |
| $z$ | -2 |
| $y$ | 3 |

Az egyenletrendszer megoldása tehát $x = 1$, $y = 3$, $z = -2$. $\square$

### Feladatok

**3.13.** *A lépcsős alak vektorai.* Igazoljuk a 3.23. következményt: ha $\mathbf{B}$ az $\mathbf{A}$ mátrix egy lépcsős alakja, akkor
1. $\mathbf{A}$ és $\mathbf{B}$ sortere megegyezik,
2. $\mathbf{B}$ nemzérus sorvektorai lineárisan függetlenek,
3. a főelemek oszlopvektorai $\mathbf{A}$-ban és $\mathbf{B}$-ben is lineárisan függetlenek.

**3.14.•** *Bázis: igaz – hamis.*
- a) A $\mathcal{V}$ vektortérben a $\{ \mathbf{v}_1, \ldots, \mathbf{v}_k \}$ vektorrendszer bázis, ha tetszőleges $\mathbf{v} \in \mathcal{V}$ vektor egyértelműen felírható e vektorok lineáris kombinációjaként.
- b) Van olyan vektortér, melynek bármely nemnulla vektora bázist alkot.
- c) Van olyan vektortér, melynek van kételemű bázisa, és van három lineárisan független vektora.
- d) Van olyan vektortér, melyet bármely két különböző vektora kifeszít!
- e) Van olyan $\mathcal{V}$ vektortér, melyet kifeszít valamely 5 vektora, és abban olyan $\mathcal{W}$ altér, melyet kifeszít annak valamely 10 vektora.

**3.15.** Határozzuk meg a 3.27. példabeli vektorok által kifeszített altér egy bázisát úgy, hogy a vektorokat más sorrendben írjuk a mátrixba. Legyen például a sorrend $\mathbf{w}_1 = (1, 1, 2, 1)$, $\mathbf{w}_2 = (3, 1, 3, 2)$, $\mathbf{w}_3 = (6, 0, 3, 3)$, $\mathbf{w}_4 = (2, -2, -2, 0)$. Fejezzük ki mind a négy vektort ezek lineáris kombinációjaként! Végül írjuk fel mind a négy vektor koordinátás alakját e bázisban!

**3.16.•** Keressünk bázist az alábbi vektortérhez a megadott vektorok közül, majd írjuk fel a vektorok e bázisra vonatkozó koordinátás alakjait!
- a) $\operatorname{span}((1, 2, 3), (-2, -4, -6), (1, 1, 1), (0, 1, 2), (2, 1, 0))$,
- b) $\operatorname{span}((1, 2, 3, 4), (0, 1, 2, 3), (3, 1, -1, 1), (2, 0, 4, 0))$,
- c) $\operatorname{span}((1, 2, 3, 4), (0, 1, 2, 3), (1, 1, 1, 1), (-1, 0, 1, 2))$.

**3.17.•** Adjuk meg az alábbi altér $\mathbb{R}^4$-beli merőleges kiegészítő alterének egy bázisát!
- a) $\operatorname{span}((1, 2, 0, 1), (3, 1, -1, 1), (1, -3, -1, -1))$,
- b) $\operatorname{span}((1, 2, 0, 1), (3, 1, -1, 1), (2, -1, -1, 0))$.

**3.18.** Tekintsük a $\mathcal{V} = \operatorname{span}((0, 1, 2, 3, 4), (1, 2, 3, 4, 5)) \leqslant \mathbb{R}^5$ alteret!
- a) Merőleges-e a $\mathcal{W} = \operatorname{span}((0, 1, 1, -1, 0), (0, 0, 1, 1, -1))$ altérre?
- b) Merőleges kiegészítő altere-e $\mathcal{V}$-nek $\mathcal{W}$?
- c) Határozzuk meg a $\mathcal{V}^\perp$ és $\mathcal{W}^\perp$ altereket!

**3.19.** Adjuk meg a $\operatorname{span}((0, 1, 2, 3, 4), (1, 2, 3, 4, 5))$ altér merőleges kiegészítő alterét!

**3.20.** Egy lineáris egyenletrendszerről tudjuk, hogy együtthatómátrixának rangja 2, és hogy $(1, 2, 3)$ és $(0, 1, 3)$ is megoldásvektora. Adjuk meg az összes megoldását!

**3.21.** Egy lineáris egyenletrendszer együtthatómátrixának rangja 2, és $(1, 2, 3, 4)$, $(0, 1, 3, 4)$ és $(0, 1, 2, 3)$ megoldásvektorai. Adjuk meg az összes megoldását!

Határozzuk meg az alábbi mátrixok kitüntetett altereinek bázisát!

**3.22.•** $\begin{bmatrix} 1 & 2 & 3 & 1 \\ 1 & -2 & -1 & 0 \\ 0 & 1 & 1 & -1 \end{bmatrix}$

**3.23.** $\begin{bmatrix} 1 & 2 & 3 & 1 \\ 0 & 1 & 1 & -1 \end{bmatrix}$

**3.24.** $\begin{bmatrix} 0 & 1 & 1 & -1 \end{bmatrix}$

**3.25.** $\begin{bmatrix} 1 & 2 & 0 & -1 & 1 \\ 2 & 4 & 1 & -1 & 3 \\ -1 & -2 & 1 & 2 & 0 \end{bmatrix}$

**3.26.** *Gram-mátrix.* Igazoljuk, hogy a
$$\begin{bmatrix} \mathbf{v}_1 \cdot \mathbf{v}_1 & \mathbf{v}_1 \cdot \mathbf{v}_2 & \ldots & \mathbf{v}_1 \cdot \mathbf{v}_k \\ \mathbf{v}_2 \cdot \mathbf{v}_1 & \mathbf{v}_2 \cdot \mathbf{v}_2 & \ldots & \mathbf{v}_2 \cdot \mathbf{v}_k \\ \vdots & \vdots & \ddots & \vdots \\ \mathbf{v}_k \cdot \mathbf{v}_1 & \mathbf{v}_k \cdot \mathbf{v}_2 & \ldots & \mathbf{v}_k \cdot \mathbf{v}_k \end{bmatrix}$$
mátrix – az ún. *Gram-mátrix* – rangja pontosan akkor $k$, ha az $\mathbb{R}^n$-beli $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k$ vektorok lineárisan függetlenek.

**3.27.** *Lineáris algebra alaptétele.* Igazoljuk a lineáris algebra alaptételét!

#### A sortérbe eső megoldás meghatározása

Keressük meg az alábbi egyenletrendszerek sortérbe eső egyetlen megoldását, és annak segítségével írjuk fel az összes megoldást!

**3.28.•** $\begin{aligned} x + y + z &= 3 \\ 2x + y - z &= 2 \\ 3x + 2y &= 5 \end{aligned}$

**3.29.** $x + 4y + 8z + 12w = 225$

**3.30.•** $\begin{aligned} x + y + z + w &= 3 \\ x + y - z - w &= 1 \end{aligned}$

**3.31.** Határozzuk meg a $\mathbb{Z}_p^n$ tér $k$-dimenziós altereinek számát, ahol $p$ prím, és $k = 0, 1, \ldots, n$?

## Megoldások

**3.1.** Mindegyik állítás hamis.

**3.2.** a) Igaz. b) Igaz. c) Hamis, csak akkor igaz, ha egyik a másik altere. d) Igaz. e) Hamis, a zérustér egyetlen vektora a zérusvektor.

**3.3.** a) Hamis, csak a homogén lineáris egyenletrendszer megoldásai alkotnak vektorteret. b) Igaz. c) Igaz. Ez épp az oszloptér, ugyanis csak az oszloptérből való $\mathbf{b}$ vektorokra oldható meg az egyenletrendszer. d) Igaz. Ez épp az együtthatómátrix nulltere, azaz az egyenletrendszerhez tartozó homogén egyenletrendszer megoldáshalmaza.

**3.4.** a) Igaz. b) Igaz. c) Hamis. d) Igaz, ugyanis az állításbeli $\operatorname{r}(\mathbf{A}|\mathbf{b}) \leqslant \operatorname{r}(\mathbf{A})$ feltétel pontosan akkor teljesül, ha $\operatorname{r}(\mathbf{A}|\mathbf{b}) = \operatorname{r}(\mathbf{A})$, és ez pontosan akkor teljesül, ha az egyenletrendszer megoldható. e) Hamis, ha $\operatorname{r}(\mathbf{A}) = n$, és az egyenletrendszer több, mint $n$ egyenletből áll, akkor előfordulhat, hogy $\operatorname{r}(\mathbf{A}|\mathbf{b}) = n + 1$, és ekkor az egyenletrendszer nem oldható meg!

**3.5.** a) Nem, egységvektor konstansszorosai nem egységvektorok. b) Igen (origón átmenő sík). c) Nem (eltolt sík). d) Igen, ez egy origón átmenő egyenes vektoraiból áll. e) Igen, ez a zérustér. f) Nem, az $(1, -1, 0)$ és az $(1, 0, -1)$ vektor benne van, de az összegük nincs e halmazban.

**3.7.** a) $\operatorname{r}(\mathbf{A}|\mathbf{b}) \leqslant 1$. A 0 rang csak úgy fordulhat elő, ha az összes egyenlet $0 = 0$ alakú – nem egy érdekes eset. Ha a rang 1, akkor a kötött és a szabad változók száma is 1. b) $\operatorname{r}(\mathbf{A}|\mathbf{b}) = 5$. c) $\operatorname{r}(\mathbf{A}|\mathbf{b}) = 3$. d) $\operatorname{r}(\mathbf{A}|\mathbf{b}) = 2$.

**3.8.** Két megoldásvektor különbsége, azaz az $(1, 2, 3) - (0, 1, 3) = (1, 1, 0)$ vektor biztosan megoldása az egyenletrendszer homogén részének. Akkor viszont ennek minden skalárszorosa is megoldás, így azokat bármelyik fenti megoldáshoz adjuk, újabb megoldásokat kapunk. Például megoldás az $(1, 2, 3) + (1, 1, 0) = (2, 3, 3)$ és az $(1, 2, 3) + 2(1, 1, 0) = (3, 4, 3)$ vektor is.

Mivel az ismeretlenek száma 3, és azok legalább egyike szabad változó, ezért a rang legfeljebb 2. Ha viszont e megoldások egy homogén lineáris egyenletrendszer megoldásai, akkor a megoldások közt van legalább két lineárisan független megoldás, így a szabad változók száma legalább kettő, vagyis a kötötteké legföljebb 1, tehát az együtthatómátrix rangja is legföljebb 1.

**3.9.** Első ránézésre csak annyi látszik, hogy mindkét megoldás egy kétdimenziós altér eltoltja. Először megvizsgáljuk, hogy az altér – vagyis az egyenletrendszer homogén részére adott két megoldás – egybeesik-e. Elég megmutatni, hogy az egyik altérben benne van a másikat generáló két vektor. Ha igen, a két altér megegyezik. Ezesetben el kell dönteni, hogy az inhomogén két partikuláris megoldása az altérnek ugyanabban az eltoltjában van-e. Vagy egyszerűbben, hogy a két partikuláris megoldás különbsége az altérben. E kérdéseket egyetlen mátrix lépcsős alakra hozásával is megoldhatjuk. Az első két oszlop az első, a második két oszlop a második altér generátorait tartalmazza, az ötödik oszlop a két partikuláris megoldás különbsége.
$$\left[\begin{array}{cc|ccc} 1 & 0 & -2 & 3 & 1 \\ 0 & 1 & 1 & -2 & -1 \\ -2 & -3 & 1 & 0 & 1 \\ -1 & -2 & 0 & 1 & 1 \end{array}\right] \Longrightarrow \left[\begin{array}{cc|ccc} 1 & 0 & -2 & 3 & 1 \\ 0 & 1 & 1 & -2 & -1 \\ 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 \end{array}\right]$$
Az eredményből látszik, hogy a két megoldás azonos.

**3.10.** Ha $\mathbf{a}_{i*}$ jelöli az együtthatómátrix $i$-edik sorát és $\mathbf{x}$, illetve $\mathbf{y}$ a homogén egyenletrendszer egy-egy megoldását, azaz $\mathbf{a}_{i*} \cdot \mathbf{x} = 0$, $\mathbf{a}_{i*} \cdot \mathbf{y} = 0$ $(i = 1, 2, \ldots, m)$, akkor
$$\mathbf{a}_{i*} \cdot (c\mathbf{x} + d\mathbf{y}) = c\mathbf{a}_{i*} \cdot \mathbf{x} + d\mathbf{a}_{i*} \cdot \mathbf{y} = 0 + 0 = 0,$$
tehát a két megoldásvektor bármely lineáris kombinációja is megoldás. Másként fogalmazva a homogén lineáris egyenletrendszerek megoldásainak bármely lineáris kombinációja is megoldás, tehát a megoldások alteret alkotnak.

**3.11.** Legyen $\mathbf{x} = (x_1, x_2, \ldots, x_n)$ az inhomogén egy partikuláris megoldása, és jelölje $\mathbf{a}_1, \mathbf{a}_2, \ldots, \mathbf{a}_n$ az $\mathbf{A}$ oszlopvektorait, $\mathcal{H}$ a homogén, $\mathcal{I}$ az inhomogén egyenletrendszer általános megoldását. Megmutatjuk, hogy $\mathbf{x} + \mathcal{H} = \mathcal{I}$, ahol a bal oldali összeadást elemenként értjük.

$\mathbf{x} + \mathcal{H} \subseteq \mathcal{I}$: Meg kell mutatnunk, hogy $\mathbf{x}$-hez adjuk a $\mathcal{H}$ egy tetszőleges $\mathbf{y} = (y_1, y_2, \ldots, y_n) \in \mathcal{H}$ elemét, az inhomogén egyenletrendszer egy megoldását kapjuk. Valóban, $\mathbf{x}$, illetve $\mathbf{y}$ eleget tesz az
$$\begin{aligned} \mathbf{a}_1 x_1 + \mathbf{a}_2 x_2 + \ldots + \mathbf{a}_n x_n &= \mathbf{b}, \text{ illetve} \\ \mathbf{a}_1 y_1 + \mathbf{a}_2 y_2 + \ldots + \mathbf{a}_n y_n &= \mathbf{0} \end{aligned}$$
egyenletnek. Ebből
$$\begin{aligned} \mathbf{a}_1(x_1 + y_1) + \mathbf{a}_2(x_2 + y_1) + \ldots + \mathbf{a}_n(x_n + y_1) &= \\ (\mathbf{a}_1 x_1 + \mathbf{a}_2 x_2 + \ldots + \mathbf{a}_n x_n) + (\mathbf{a}_1 y_1 + \mathbf{a}_2 y_2 + \ldots + \mathbf{a}_n y_n) &= \\ \mathbf{b} + \mathbf{0} = \mathbf{b}, \end{aligned}$$
tehát $\mathbf{x} + \mathbf{y}$ megoldása az inhomogén egyenletrendszernek, azaz $\mathbf{x} + \mathbf{y} \in \mathcal{I}$.

$\mathbf{x} + \mathcal{H} \supseteq \mathcal{I}$: Meg kell mutatnunk, hogy ha $\mathbf{z}$ az inhomogén egy tetszőleges megoldása, azaz $\mathbf{z} \in \mathcal{I}$, akkor található olyan $\mathbf{y} \in \mathcal{H}$, hogy $\mathbf{z} = \mathbf{x} + \mathbf{y}$. Valóban, az $\mathbf{y} = \mathbf{z} - \mathbf{x}$ megteszi, mert
$$\begin{aligned} \mathbf{a}_1(z_1 - x_1) + \mathbf{a}_2(z_2 - x_1) + \ldots + \mathbf{a}_n(z_n - x_1) &= \\ (\mathbf{a}_1 z_1 + \mathbf{a}_2 z_2 + \ldots + \mathbf{a}_n z_n) - (\mathbf{a}_1 x_1 + \mathbf{a}_2 x_2 + \ldots + \mathbf{a}_n x_n) &= \\ \mathbf{b} - \mathbf{b} = \mathbf{0}, \end{aligned}$$
azaz $\mathbf{z} - \mathbf{x} \in \mathcal{H}$.

**3.12.** Összesen 16 altere van $\mathbb{F}_2^3$-nek. Van egy 0-dimenziós, a $\mathcal{Z} = \{ \mathbf{0} \}$ tér. Az egydimenziós alterek a nullvektorból és egyetlen tőle különböző további vektorból állnak (7 ilyen altér van). A kétdimenziós alterek mindegyike a nullvektorból, két további egymástól különböző vektorból és azok összegéből áll. Ezeket felsoroljuk:
$$\begin{aligned}
&\{(0,0,0), (1,0,0), (0,1,0), (1,1,0)\}, \\
&\{(0,0,0), (0,1,0), (0,0,1), (0,1,1)\}, \\
&\{(0,0,0), (0,0,1), (1,0,0), (1,0,1)\}, \\
&\{(0,0,0), (1,0,0), (0,1,1), (1,1,1)\}, \\
&\{(0,0,0), (0,1,0), (1,0,1), (1,1,1)\}, \\
&\{(0,0,0), (0,0,1), (1,1,0), (1,1,1)\}, \\
&\{(0,0,0), (0,1,1), (1,0,1), (1,1,0)\}.
\end{aligned}$$
Végül altér maga $\mathbb{F}_2^3$ is.

**3.13.** Az első két állítás a 3.22. tétel egyszerű következménye.

A harmadik állítás bizonyításához megmutatjuk, hogy egy lépcsős alak egy nemzérus sorvektora nem fejezhető ki a többi sorvektor lineáris kombinációjaként. Tekintsük a lépcsős alak $k$-adik sorvektorát. Főeleme legyen a $j$-edik oszlopban. E főelem nem állítható elő a $k$-nál nagyobb indexű sorok lineáris kombinációjával, mert azokban a $j$-edik koordináta 0. A $k$-nál kisebb indexű sorvektorok pedig nem szerepelhetnek a lineáris kombinációban, mivel a legkisebb indexű vektor főelemét a többi vektor nem eliminálhatja, pedig a $k$-adik sorban azon a helyen 0 áll.

Annak bizonyítása, hogy a főelemek oszlopai $\mathbf{B}$-ben lineárisan függetlenek, ugyanúgy megy, mint a sorvektorok esetén. Innen pedig az előző tétellel adódik, hogy az ilyen indexű oszlopok $\mathbf{A}$-ban is lineárisan függetlenek.

**3.14.** 1. Igaz. 2. Igaz, bármely 1-dimenziós vektortér ilyen. 3. Hamis, ha van kételemű bázis, akkor a lineárisan független vektorrendszerek elemszáma legföljebb 2. 4. Igaz, bármely 1-dimenziós vektortér ilyen. 5. Igen, egy generátorrendszer több vektorból is állhat, mint a dimenzió.

**3.15.** A mátrix és annak redukált lépcsős alakja:
$$\begin{bmatrix} 1 & 1 & 2 & 1 \\ 3 & 1 & 3 & 2 \\ 6 & 0 & 3 & 3 \\ 2 & -2 & -2 & 0 \end{bmatrix} \Rightarrow \begin{bmatrix} 1 & 0 & \frac{1}{2} & \frac{1}{2} \\ 0 & 1 & \frac{3}{2} & \frac{1}{2} \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix}.$$
Eszerint bázisvektoroknak választhatjuk a $\mathbf{w}_1 = (1, 3, 6, 2)$ és a $\mathbf{w}_2 = (1, 1, 0, -2)$ vektorokat. A többi vektor kifejezhető ezek lineáris kombinációjaként:
$$\begin{bmatrix} 2 \\ 3 \\ 3 \\ -2 \end{bmatrix} = \frac{1}{2}\begin{bmatrix} 1 \\ 3 \\ 6 \\ 2 \end{bmatrix} + \frac{3}{2}\begin{bmatrix} 1 \\ 1 \\ 0 \\ -2 \end{bmatrix}, \quad \begin{bmatrix} 1 \\ 2 \\ 3 \\ 0 \end{bmatrix} = \frac{1}{2}\begin{bmatrix} 1 \\ 3 \\ 6 \\ 2 \end{bmatrix} + \frac{1}{2}\begin{bmatrix} 1 \\ 1 \\ 0 \\ -2 \end{bmatrix}.$$
A redukált lépcsős alak nemzérus soraiból álló
$$\begin{bmatrix} 1 & 0 & 1/2 & 1/2 \\ 0 & 1 & 3/2 & 1/2 \end{bmatrix}$$
mátrixból kiolvasható, hogy a fenti altérnek $\mathcal{B} = \{ \mathbf{w}_1, \mathbf{w}_2 \}$ bázisa, és ebben a bázisban a négy vektor koordinátás alakja rendre
$$\mathbf{v}_4 = \begin{bmatrix} 1 \\ 0 \end{bmatrix}_{\mathcal{B}}, \quad \mathbf{v}_1 = \begin{bmatrix} 0 \\ 1 \end{bmatrix}_{\mathcal{B}}, \quad \mathbf{v}_2 = \begin{bmatrix} 1/2 \\ 3/2 \end{bmatrix}_{\mathcal{B}}, \quad \mathbf{v}_3 = \begin{bmatrix} 1/2 \\ 1/2 \end{bmatrix}_{\mathcal{B}}.$$

**3.18.** a) Merőlegesek, b) nem merőleges kiegészítő alterek.

**3.20.** Mivel az egyenletrendszer 3-ismeretlenes, és a rang 2, ezért a kötött változók száma 2, a szabad változóké 1, és így a nulltér dimenziója is 1. A két vektor független egymástól, tehát az egyenletrendszer nem lehet homogén, akkor ugyanis legalább kettő lenne a nulltér dimenziója. Az egyenletrendszer tehát inhomogén, és a megadott két megoldás különbsége a homogén rész egy megoldását adja, annak összes skalárszorosa pedig az összes megoldását. Így az inhomogén összes megoldása: $(1, 2, 3) + t(1, 1, 0)$.

**3.21.** Például $(1, 2, 3, 4) + s(1, 1, 0, 0) + t(1, 1, 1, 1)$.

**3.26.** E mátrix rangja pontosan akkor $k$, ha az oszlopvektorai lineárisan függetlenek, azaz ha az oszlopvektorok bármely lineáris kombinációja csak úgy lehet a nullvektor, ha minden együttható 0. Tekintsük az oszlopvektorok egy $c_1, \ldots, c_k$ skalárokkal vett, nullvektort adó lineáris kombinációját. Ennek $i$-edik koordinátája
$$0 = c_1\mathbf{v}_i \cdot \mathbf{v}_1 + c_2\mathbf{v}_i \cdot \mathbf{v}_2 + \cdots + c_k\mathbf{v}_i \cdot \mathbf{v}_k = \mathbf{v}_i \cdot (c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \cdots + c_k\mathbf{v}_k).$$
Tehát azt kaptuk, hogy az $\mathbf{x} = c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \cdots + c_k\mathbf{v}_k$ vektor olyan, hogy a $\mathbf{v}_1, \ldots, \mathbf{v}_k$ vektorok mindegyikével vett skaláris szorzata 0; így ezek bármelyik lineáris kombinációjával vett skaláris szorzata is 0, tehát például az $\mathbf{x}$ vektorral

vett szorzat is 0, azaz $\mathbf{x} \cdot \mathbf{x} = 0$. Ez viszont csak $\mathbf{x} = \mathbf{0}$ esetén állhat fönn, és mivel a $\mathbf{v}_i$ vektorok lineárisan függetlenek, csak a $c_i = 0$ konstansokkal vett lineáris kombinációjuk lehet 0, ahol $i = 1, 2, \ldots, k$.

**3.27.** Megmutatjuk, hogy a nulltér merőleges kiegészítő altere a sortér. Legyen a valós $\mathbf{A}$ mátrix sortere $\mathcal{S}$, nulltere $\mathcal{N}$, és ezek egy-egy bázisa $\{ \mathbf{s}_1, \mathbf{s}_2, \ldots, \mathbf{s}_k \}$, illetve $\{ \mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_{n-k} \}$. $\mathcal{S}$ és $\mathcal{N}$ merőlegessége miatt $\mathbf{s}_i \cdot \mathbf{e}_j = 0$ minden $i = 1, 2, \ldots, r$ és $j = 1, 2, \ldots, n - r$ esetén. E két bázis együtt $\mathbb{R}^n$ egy bázisát adja, hisz $n$ elemű és független vektorokból áll. A függetlenség abból következik, hogy nullvektort előállító tetszőleges
$$\underbrace{c_1\mathbf{s}_1 + \cdots + c_r\mathbf{s}_r}_{\mathbf{c}} + \underbrace{d_1\mathbf{e}_1 + \cdots + d_{n-r}\mathbf{e}_{n-r}}_{\mathbf{d}} = \mathbf{0} \tag{3.4}$$
lineáris kombináció csak úgy állhat fenn, ha a $\mathbf{c}$ és $\mathbf{d}$ a két altér metszetében van, így azok mindketten a nullvektorok, és így $c_1 = \cdots = c_r = d_1 = \cdots = d_{n-r} = 0$.

Ha $\mathbf{x}$ egy olyan vektor, mely merőleges $\mathcal{N}$ minden vektorára, akkor $\mathbf{x} \cdot \mathbf{e}_i = 0$ $(i = 1, 2, \ldots, n - r)$. Ha
$$\mathbf{x} = y_1\mathbf{s}_1 + \cdots + y_r\mathbf{s}_r + x_1\mathbf{e}_1 + \cdots + x_{n-r}\mathbf{e}_{n-r},$$
akkor az $\mathbf{e}_i$ vektorokkal való beszorzás a következő homogén lineáris egyenletrendszerre vezet:
$$\begin{alignedat}{9}
(\mathbf{e}_1 \cdot \mathbf{e}_1)x_1 &{}+{}& (\mathbf{e}_1 \cdot \mathbf{e}_2)x_2 &{}+{}& \ldots &{}+{}& (\mathbf{e}_1 \cdot \mathbf{e}_r)x_n &{}={}& 0 \\
(\mathbf{e}_2 \cdot \mathbf{e}_1)x_1 &{}+{}& (\mathbf{e}_2 \cdot \mathbf{e}_2)x_2 &{}+{}& \ldots &{}+{}& (\mathbf{e}_2 \cdot \mathbf{e}_r)x_n &{}={}& 0 \\
\vdots && \vdots && && \;\;\vdots && \vdots \\
(\mathbf{e}_{n-r} \cdot \mathbf{e}_1)x_1 &{}+{}& (\mathbf{e}_{n-r} \cdot \mathbf{e}_2)x_2 &{}+{}& \ldots &{}+{}& (\mathbf{e}_{n-r} \cdot \mathbf{e}_n)x_n &{}={}& 0
\end{alignedat}$$
Ez pedig egyértelműen megoldható, mert együtthatómátrixának rangja $r$. Ennek bizonyítását az Olvasóra hagyjuk. Egy bizonyítás látható a 3.26. feladatban, egy másik, egyszerűbb a ?? feladatban.

**3.28.** Az egyenletrendszer bővített mátrixának redukált lépcsős alakja
$$\left[\begin{array}{ccc|c} 1 & 0 & -2 & -1 \\ 0 & 1 & 3 & 4 \end{array}\right]$$
így a megoldása $(x, y, z) = (-1, 4, 0) + (2, -3, 1)t$. A nullteret a $(2, -3, 1)$ vektor feszíti ki, a sortérbe eső vektornak erre merőlegesnek kell lennie, tehát fönn kell állnia a
$$2x - 3y + z = 0$$
egyenletnek is. Ezt az egyenletet a redukált lépcsős alakból származó egyenletrendszerhez (vagy akár az eredetihez) adva egy egyetlen megoldást adó egyenletrendszert kapunk. Ennek bővített mátrixa és annak redukált lépcsős alakja:
$$\left[\begin{array}{ccc|c} 1 & 0 & -2 & -1 \\ 0 & 1 & 3 & 4 \\ 2 & -3 & 1 & 0 \end{array}\right] \Longrightarrow \left[\begin{array}{ccc|c} 1 & 0 & 0 & 1 \\ 0 & 1 & 0 & 1 \\ 0 & 0 & 1 & 1 \end{array}\right]$$
Innen a sortérbe eső megoldás $(1, 1, 1)$.

**3.29.** A sortérbe eső megoldás meghatározása egyetlen egyenlet esetében egyszerű. Mivel a sorteret az $(1, 4, 8, 12)$ vektor feszíti ki, ennek egy skalárszorosát keressük, mellyel vett skalárszorzata 225. Mivel $1^2 + 4^2 + 8^2 + 12^2 = 15^2 = 225$, ezért a sortérbe eső egyetlen megoldás $(x, y, z, w) = (1, 4, 8, 12)$. A homogén egyenletrendszer összes megoldását meghatározva majd hozzáadva kapjuk, hogy
$$\begin{bmatrix} x \\ y \\ z \\ w \end{bmatrix} = \begin{bmatrix} 1 \\ 4 \\ 8 \\ 12 \end{bmatrix} + \begin{bmatrix} -4 \\ 1 \\ 0 \\ 0 \end{bmatrix} t + \begin{bmatrix} -8 \\ 0 \\ 1 \\ 0 \end{bmatrix} s + \begin{bmatrix} -12 \\ 0 \\ 0 \\ 1 \end{bmatrix} u$$
az összes megoldás.

**3.30.** A bővített mátrix és redukált lépcsős alakja:
$$\left[\begin{array}{cccc|c} 1 & 1 & 1 & 1 & 3 \\ 1 & 1 & -1 & -1 & 1 \end{array}\right] \Longrightarrow \left[\begin{array}{cccc|c} 1 & 1 & 0 & 0 & 2 \\ 0 & 0 & 1 & 1 & 1 \end{array}\right]$$
Az egyenletrendszer megoldása:
$$\begin{bmatrix} x \\ y \\ z \\ w \end{bmatrix} = \begin{bmatrix} 2 - s \\ s \\ 1 - t \\ t \end{bmatrix} = \begin{bmatrix} 2 \\ 0 \\ 1 \\ 0 \end{bmatrix} + \begin{bmatrix} -1 \\ 1 \\ 0 \\ 0 \end{bmatrix} s + \begin{bmatrix} 0 \\ 0 \\ -1 \\ 1 \end{bmatrix} t.$$
Tehát a nullteret a $(-1, 1, 0, 0)$ és a $(0, 0, -1, 1)$ vektorok feszítik ki. A sortérbe eső megoldásvektor ezekre merőleges, tehát az eredeti egyenleten kívül kielégíti a következő két egyenletet is:
$$\begin{alignedat}{9}
-x &{}+{}& y &&&&&{}={}& 0 \\
&& &{}-{}& z &{}+{}& w &{}={}& 0
\end{alignedat}$$
Ezek mátrixával kibővítve a redukált lépcsős alakot, majd azt redukált lépcsős alakra hozva kapjuk, hogy
$$\left[\begin{array}{cccc|c} 1 & 1 & 0 & 0 & 2 \\ 0 & 0 & 1 & 1 & 1 \\ -1 & 1 & 0 & 0 & 0 \\ 0 & 0 & -1 & 1 & 0 \end{array}\right] \Longrightarrow \left[\begin{array}{cccc|c} 1 & 0 & 0 & 0 & 1 \\ 0 & 1 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 & 1/2 \\ 0 & 0 & 0 & 1 & 1/2 \end{array}\right]$$
tehát a sortérbe eső megoldás $(1, 1, 1/2, 1/2)$, az összes megoldás
$$\begin{bmatrix} x \\ y \\ z \\ w \end{bmatrix} = \begin{bmatrix} 1 \\ 1 \\ 1/2 \\ 1/2 \end{bmatrix} + \begin{bmatrix} -1 \\ 1 \\ 0 \\ 0 \end{bmatrix} s + \begin{bmatrix} 0 \\ 0 \\ -1 \\ 1 \end{bmatrix} t.$$

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

<!-- OCR: through PDF p.152 -->
