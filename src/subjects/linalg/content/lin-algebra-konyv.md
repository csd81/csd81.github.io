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

<!-- OCR: through PDF p.23 -->
