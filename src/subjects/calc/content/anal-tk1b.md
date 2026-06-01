# Matematikai analízis I.

*(Segédanyag a „Közgazdaságtan matematikai alapjai" tárgyhoz)*

**dr. Szalkai István és Mikó Teréz** — Pannon Egyetem, Veszprém, 2018. január 28. (javított változat)

*Konvertálva a PDF 7–143. oldaláról (a tankönyv 0–7. fejezetei).*


# 0. fejezet

# Alapfogalmak

## 0.1. Jelölések

Bár a legtöbb jelölésünk közismert, néhányat mégis pontosítunk az egyértelműség és a könnyebb érthetőség végett.

**0.1. Jelölés.** *(i)* $\forall$ és $\exists$ a *minden/bármelyik* és a *létezik/van olyan* szavakat rövidítik, szaknyelven *univerzális* és *egzisztenciális kvantorok.*
*(ii)* Az *ekvivalens* szó jelentése (szó szerinti fordításban is, lat.): *azonos értékű*, vagyis a két dolog között (matematikailag) semmi különbség nincs.
*(iii)* A $\square$ jel egy Definíció / Tétel / Állítás / Példa / Megjegyzés / általában egy egybefüggő (hosszabb-rövidebb) gondolat végét jelöli. $\square$

**0.2. Jelölés.** *(i)* $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$ és $\mathbb{R}$ jelölik rendre a *természetes-* (*natural,* lat.), *egész-* (*Zahl,* ném.), *racionális-* (*quotient, hányados* lat.) és *valós-* (*real,* lat.) számok halmazait.
Kiemeljük, hogy nálunk
$$0 \in \mathbb{N} .$$
*(ii)* $\mathbb{R}^+$ és $\mathbb{R}^-$ jelölik a *pozitív* ($x > 0$) illetve a *negatív* ($x < 0$) számok halmazait.
*(iii)* A *komplex* (*összetett,* lat.) számok $\mathbb{C}$ halmazával ebben a jegyzetben nem foglalkozunk. $\square$

**0.3. Jelölés.** *(i)* Általában az $x, y, \ldots$ index nélküli betűk tetszőleges („mozgatható") változókat jelölnek, míg az $x_0, y_0, \ldots$ betűk rögzített, bár tetszőleges („nem mozgatható") változókat.
*(ii)* A zárójeleket is könnyű (és veszélyes) összekeverni:
$/\ldots/$ vagylagos felsorolásban elválasztást jelöl,
$\{\ldots\}$ (rendezetlen) halmazt / elágazást / (szám) törtrészét jelöli,
$(\ldots)$ nyílt intervallumot / legnagyobb közös osztót (lnko) / rendezett párt jelöl,

$\,]\ldots[\,$ nyílt intervallumot jelöl,


$[\ldots]$ zárt intervallumot / legkisebb közös többszöröst (lkkt) / (szám)egész részét jelöli,
$|\ldots|$ abszolút értéket jelöl.

## 0.2. Valós számhalmazok

Függvények vizsgálatánál egyes pontokban a függvény (helyettesítési) értékét nem lehet vagy nem elég kiszámítani, csak a kérdéses ponthoz (óvatosan) közelítve tudjuk a függvény viselkedését vizsgálni. Ehhez szükségünk lesz egy adott ponthoz „közeli" valós számok fogalmára, ami persze így relatív és szubjektív, tehát precíz definíció kell.
Kezdjük a legelején.

**0.4. Megjegyzés.** Közismert, hogy $a \leq b$ esetén
$$[a, b] := \{x \in \mathbb{R} \mid a \leq x \leq b\} \tag{1}$$
zárt intervallumot, míg $a < b$ esetén
$$(a, b) := \{x \in \mathbb{R} \mid a < x < b\} \tag{2}$$
nyílt intervallumot jelöl.
Ez utóbbira elterjedt a
$$]a, b[ := (a, b) \tag{3}$$
jelölés is, ami szerintünk kissé szerencsétlen, mert például a
$$H := \,]-3, 1[ \,\cup\, ]2, 3[ \tag{4}$$
képletben nehezen veszzük észre a két zárójel közé bezárt $[$ jelet – egy zárójel inkább bezárni szokott és nem kizárni!
Mi csak az $(a, b)$ jelölést használjuk nyílt intervallumok esetén.
Ritkán találkozunk az $a = b$ szélsőséges (*extremális*) esettel:
$$[a, a] = \{a\}$$
az $a \in \mathbb{R}$ valós számot tartalmazó egyelemű halmaz (*singleton*), míg
$$(a, a) = \emptyset$$
az üres halmaz!

Milyen számok vannak egy $a \in \mathbb{R}$ számhoz közel? Maga az $a$ szám lényeges vagy sem?

**0.5. Definíció.** Legyen $a \in \mathbb{R}$ egy tetszőleges, rögzített valós szám.
*(i)* Tetszőleges $\varepsilon > 0$ pozitív számok esetén az $(a - \varepsilon, a + \varepsilon)$ alakú (nyílt) intervallumokat az $a$ szám egy *(kétoldali) környezetének* nevezzük, melynek középpontja az $a$ szám, sugara $\varepsilon$. Ezt a környezetet szokás $K_\varepsilon(a)$ -val jelölni:
$$K_\varepsilon(a) := (a - \varepsilon, a + \varepsilon)$$


vagy másképpen:
$$K_\varepsilon(a) := \{x \in \mathbb{R} \mid |x - a| < \varepsilon\} . \tag{5}$$
*(ii)* Az $(a, a + \varepsilon)$ illetve $(a - \varepsilon, a)$ alakú intervallumokat *jobb-* és *baloldali környezeteknek*, gyűjtőnéven *féloldali környezeteknek* nevezzük.
Ha a környezet szót jelző nélkül használjuk, akkor mindig kétoldali környezetre gondolunk.
*(iii)* Ha a fenti környezetekből kivesszük az „$a$" számot, akkor *pontozott* vagy *lyukas* környezetről beszélünk:
$$\overset{\circ}{K}_\varepsilon(a) := (a - \varepsilon, a + \varepsilon) \setminus \{a\} .$$

**0.6. Megjegyzés.** *(o)* Nem csak (5) -ban szerepel „különbség abszolút értéke", ami ugye minden esetben a két mennyiség távolságát, eltérését adja meg (vektorok, valós és komplex számoknál, magasabb dimenziókban is, stb.)
*(i)* Mivel a későbbi határérték- vizsgálatoknál maga az $a$ pont és az $f$ függvény $f(a)$ helyettesítési értéke általában lényegtelen, ezért a továbbiakban a környezetek is teljesen mindegy, hogy lyukasak vagy sem.
*(ii)* A környezetek sugara is általában lényegtelen, általában bármilyen kicsi is elegendő, csak pozitív legyen. Matematikailag pl. $10^{-1000}$ is ugyanolyan mint $10^{-1}$, a gyakorlati életben persze nem. Azonban a kicsi számok mutatják meg az $a$ -hoz közeli számok halmazát – ez $K_\varepsilon(a)$. Az (elméleti) határátmenet azért megbízható minden esetben, mert az összes pozitív, bármilyen kicsi, még a $10^{-1000}$ értékre is megköveteli a pontosságot (ld. például a (4.1) képletet a 4.1.1. „Határértékek végesben" alfejezet 4.1. Definíciójában).
A lyukas környezetnek akkor van (jelentős) szerepe, amikor például az $f$ függvény nincs értelmezve az $a$ pontban (vagy éppenséggel az $f(a)$ érték zavaró), de azt akarjuk kideríteni, hogy amikor közeledünk $a$ -hoz, akkor $f$ értékei merrefelé tűnnek el (pl. $f(x) = \dfrac{1}{x}$ és $a = 0$ esetén)? Hasonlóan egy vulkán kráteréhez: csak megközelíteni tudjuk, bár tetszőlegesen közel kerülhetünk hozzá.
Féloldali környezetből nyilván csak lyukas van.

Nem túl nehéz, szemléletes is, mégis nagyon fontos a következő fogalom:

**0.7. Definíció.** Legyen $H \subseteq \mathbb{R}$ tetszőleges halmaz és $a \in \mathbb{R}$ tetszőleges pont (valós szám).
*(i)* $a$ *belső pontja* a $H$ halmaznak, ha van olyan (bármilyen) $\varepsilon > 0$ sugarú (nem lyukas) $K_\varepsilon(a)$ környezete $a$ -nak, amely részhalmaza $H$ -nak:
$K_\varepsilon(a) \subseteq H$. (Többek között ekkor $a \in H$.)
*(ii)* $a$ *külső pontja* a $H$ halmaznak, ha van olyan (bármilyen) $\varepsilon > 0$ sugarú (nem lyukas) $K_\varepsilon(a)$ környezete $a$ -nak, amely diszjunkt a $H$ halmaztól:
$K_\varepsilon(a) \cap H = \emptyset$, másképpen: $K_\varepsilon(a)$ kívül van $H$ -n, vagyis $K_\varepsilon(a) \subseteq \overline{H}$ (komplementere $H$ -nak). (Többek között ekkor $a \notin H$.)
*(iii)* $a$ *határpontja* a $H$ halmaznak, ha bármilyen $\varepsilon > 0$ számra (azaz $a$ -nak mindegyik környezete) metszi mind a $H$ mind a $\overline{H}$ halmazokat.
Másképpen: $a$ -hoz bármilyen közel kerülhetnek mind $H$ mind $\overline{H}$ elemei. Ebben az esetben nem lehet tudni, de nem is lényeges, hogy $a$ eleme-e $H$ -nak vagy sem!


A gyakorlatban is, de még elméletileg is teljesen más egy véges $a \in \mathbb{R}$ valós számhoz közeledni, mint elszaladni a $+\infty$ vagy $-\infty$ végtelenbe ... . Mégis, mindkét esetben valamely cél felé haladunk, ezért megengedhető a „végtelenhez közeledünk" és a $+\infty$ és $-\infty$ „környezetei" kifejezés.

**0.8. Definíció.** *(i)* a $+\infty$ és $-\infty$ csak szimbólumok (jelek), nem létező valós számok (vagyis $+\infty, -\infty \notin \mathbb{R}$), olyan elképzelt „számokat" jelölnek, amelyek minden létező valós számnál nagyobb ($+\infty$) illetve kisebb ($-\infty$).
A $\infty$ szimbólum csak gyűjtőnév: a $+\infty$ és $-\infty$ bármelyikét vagy mindkettőt jelöli.
A „valós szám" elnevezés kizárólag a (régi) $a \in \mathbb{R}$ számokat illeti.
*(ii)* Az
$$\overline{\mathbb{R}} := \mathbb{R} \cup \{-\infty, +\infty\}$$
halmazt *bővített számegyenesnek* nevezzük.
Tetszőleges $a \in \mathbb{R}$ valós számra
$$
\begin{aligned}
(a, +\infty) &:= \{x \in \mathbb{R} \mid a < x\} , & [a, +\infty) &:= \{x \in \mathbb{R} \mid a \leq x\} \\
(-\infty, a) &:= \{x \in \mathbb{R} \mid x < a\} , & (-\infty, a] &:= \{x \in \mathbb{R} \mid x \leq a\}
\end{aligned}
$$
a jólismert („félig") végtelen intervallumok, speciálisan
$$(-\infty, +\infty) = \mathbb{R} .$$

**0.9. Definíció.** Tetszőleges $c \in \mathbb{R}$ valós számra a $(c, +\infty)$ végtelen intervallumokat a $+\infty$ *környezeteinek* is hívjuk és $K_c(+\infty)$ -el jelöljük,
míg a $(-\infty, c)$ végtelen intervallumokat a $-\infty$ környezeteinek hívjuk és $K_c(-\infty)$ -el jelöljük, a fenti intervallumok gyűjtőnéven pedig *kiterjesztett környezetek.*

## 0.3. Általános függvénytani alapok

A függvények és ábrázolásuk precíz definícióit már az általános- és középiskolában megismertük, ezekre itt most nincs helyünk, ismételjük át otthon! Mindössze csak néhány részletet emelünk ki, esetleg új szemszögből próbáljuk őket megvilágítani.

**0.10. Összefoglalás.** A koordinátarendszer alapja, hogy minden síkbeli pontot két számmal jellemzünk. Szemléletesen: ha a $P$ pontból függőlegesen egy *kék*, vízszintesen pedig egy *piros* lézerfényt bocsátunk ki, akkor az $x$ és $y$ tengelyeken levő skálákon megkapjuk $P$ koordinátáit.

**0.11. Összefoglalás.** *(A függvény fogalma)* A gyakorlati életben a legtöbb mennyiség függ valami mástól, ezt az (össze)függést nevezzük *függvénynek*. A végeredményt az adatokból számolom ki, azoktól függ. (Nyelvtanilag ugyanúgy keletkezik a *függvény* főnév a(z) (össze)*függ* igéből, mint pl. az *elismervény* / *kötelezvény* az *elismer/kötelez* igékből.
A számolás előtt megadott értékeket (legtöbbször $x$) általában (szinte) akárhogyan


megadhatjuk, változtathatjuk, változhatnak, ezért hívjuk őket *független változóknak*. Más elnevezéseik: *hely*, *hol?, mikor?, input, számolás kezdete*.
A számítás végeredménye (legtöbbször $y$) persze, hogy függ az adatoktól, változnak, ezért őket *függő változóknak* nevezzük. Más elnevezéseik: *érték, mennyi?, mekkora?, output, végeredmény*.

**0.12. Definíció.** Ha $f$ egy tetszőleges függvény, akkor $\mathrm{Dom}(f)$, $D_f$ (*Dominium=birtok,* lat.) vagy $ET$ jelöli *értelmezési tartományát*, vagyis azon $x$ -ek halmazát amelyekre az $f(x)$ érték („képlet", számolás, ...) kiszámítható, értelmezhető (ami a „kikötés" után megmarad).
Az $f$ függvény *értékkészletét* (értékeinek halmazát/készletét), vagyis az
$$\mathrm{Im}(f) := \{f(x) \mid x \in \mathrm{Dom}(f)\} \tag{6}$$
halmazt az $\mathrm{Im}(f)$, $\mathrm{Ran}(f)$, $R_f$ vagy $EK$ jellel jelöljük (*Image=Range=kép, készlet*), és a függvény *képhalmazának* is nevezik.

**0.13. Megjegyzés.** A függvénynél nem a betű a lényeg, hanem az, hogy mit csinál az inputtal, tehát például az alábbi első három képlet ugyanazt jelenti:
$$f(x) = \frac{\sin(x) + x^2 - 3x - 2}{\sqrt{x^2 + 5x} - \ln(2x)} , \qquad f(t) = \frac{\sin(t) + t^2 - 3t - 2}{\sqrt{t^2 + 5t} - \ln(2t)} ,$$
$$f(x_0) = \frac{\sin(x_0) + x_0^2 - 3x_0 - 2}{\sqrt{x_0^2 + 5x_0} - \ln(2x_0)} , \qquad f(3) = \frac{\sin(3) + 3^2 - 3 \cdot 3 - 2}{\sqrt{3^2 + 5 \cdot 3} - \ln(2 \cdot 3)} ,$$
Ezt a függvénybe ($x$ helyére) való *behelyettesítésnek* nevezzük, később az 1.3. „Összetett függvények" fejezet 1.61. Definíciójában (38. old.) és az integrálszámítás 7.2.3. „II. típusú helyettesítés" fejezetében (pl. 7.29. Tétel (129. old.) és utána 7.30. Példa (129. old.)) hasznos lesz számunkra.

**0.14. Megjegyzés.** Ne feledjük a következő általános megállapodást: ha egy adott $f$ függvény értelmezési tartományát nem jelöljük, akkor $\mathbb{R}$ lehető legbővebb részhalmazára gondolunk, vagyis a feladat legelején nekünk kell meghatároznunk!
Nagyon lényeges a függvények értelmezési tartománya is! Például az $f(x) = x^2$ függvény nem invertálható, hiszen értelmezési tartománya az egész $\mathbb{R}$ (mivel nem korlátoztuk!), míg a másik $g(x) = x^2$, $x \in \mathbb{R}^+$ függvény igen, invertálható! Hiába egyezik meg az $f$ és $g$ függvények képlete!

**0.15. Megjegyzés.** *(i)* A (6) érték-készlet úgy készül, hogy az összes lehetséges $x$ -ből kiindulva kiszámítjuk a hozzá tartozó $y = f(x)$ értéket (számot), és ezeket az elkészített $y$ értékeket (végtermékeket) egy ládába (halmazba) gyűjtjük. Az $f$ függvények értékkészletét általában nehéz meghatározni, a függvényvizsgálat (ld. 6.3. alfejezet) legutolsó lépése szokott lenni.
*(d)* $\mathrm{Dom}(f)$ -et úgy érdemes tekintenünk, mint diszjunkt intervallumok úniója (akár véges akár végtelen, akár nyílt akár zárt intervallumok), képletben
$$\mathrm{Dom}(f) = [(a, b)] \cup [(c, d)] \cup \ldots$$
ahol az $[(a, b)]$ jel akár nyílt akár zárt (akár véges akár végtelen) intervallumot jelölhet. Például
$$\mathrm{Dom}\left(\frac{1}{x}\right) = (-\infty, 0) \cup (0, +\infty)$$


vagy
$$\mathrm{Dom}(\mathrm{tg}) = \ldots \cup \left(-\frac{3\pi}{2}, -\frac{\pi}{2}\right) \cup \left(-\frac{\pi}{2}, \frac{\pi}{2}\right) \cup \left(\frac{\pi}{2}, \frac{3\pi}{2}\right) \cup \ldots .$$
Pontosabban, a fenti összefüggő halmazokon (intervallumokon) érdemes az $f$ függvény összefüggő darabjait külön-külön, egyenként megvizsgálnunk.

**0.16. Jelölés.** *(Nyilak)* Tetszőleges $f$ függvény és tetszőleges $A, B \subseteq \mathbb{R}$ halmazok esetén az $f : A \to B$ jelölés azt hangsúlyozza, hogy $\mathrm{Dom}(f) = A$ és $\mathrm{Im}(f) \subseteq B$,
míg az $f : A \hookrightarrow B$ vagy $f \in A \to B$ nyíl csak annyit jelöl, hogy $\mathrm{Dom}(f) \subseteq A$, és természetesen $\mathrm{Im}(f) \subseteq B$.
Tehát bármely $f$ függvényre bátran írhatjuk, hogy $f : \mathbb{R} \hookrightarrow \mathbb{R}$ vagy $f \in \mathbb{R} \to \mathbb{R}$, de a $\to$ nyíllal csínján kell bánnunk.
Hasznos az $x \mapsto f(x)$ vagy $x \mapsto y$ jelölés, itt azonban nem halmazok, hanem értékek (valós számok) között szerepel a nyíl.
A feladatokban gyakran szereplő, például
$$f : x \mapsto x^2 , \quad x < 0$$
függvénydefiníció tehát azt jelöli, hogy $\mathrm{Dom}(f) = \{\text{„}x < 0\text{"}\} = \mathbb{R}^-$ és $f(x) = x^2$.

**0.17. Összefoglalás.** *(függvény gráfja / grafikonja)* Megszoktuk, hogy adott $f$ függvény hallatán egy görbét (egyenes, parabola) rajzolunk a koordinátarendszer-papírra, a függvény *grafikonja* vagy *gráfja*. Legyünk mindig tudatában annak, hogy a síkon éppen azokat a $P(x, y)$ pontokat színeztük be, amelyek $(x, y)$ koordinátáira teljesül az
$$y = f(x)$$
összefüggés. Ezért is szoktuk (ajánlott) a függvények $f$ képleteit $y =$ -vel kezdeni mindig!
Szokásos elnevezések:
$x =$ *hely* $=$ *hol? = mikor? = input = számolás kezdete*, ... ,
$y =$ *érték* $=$ *mennyi? = mekkora? = output = végeredmény*, ... .

Az alapfüggvények grafikonjait és alaptulajdonságait a 1.1. „Alapfüggvények" alfejezetben és [www1] -ben találhatjuk meg.

**0.18. Megjegyzés.** Nagyon fontos: *Bármely függvény grafikonja minden függőleges egyenessel legfeljebb csak egy metszéspontban találkozhat!*

**0.19. Megjegyzés.** Az 1.3. „Összetett függvények" fejezetben látni fogjuk, hogy a legtöbb függvényt $x$ változó nélkül érdemes megtanulni és idézni (pl. $\sqrt{\phantom{x}}$, $\sin$, reciprok ... függvények). Ezért mondunk legtöbbször csak „$f$ függvény" -t $f(x)$ helyett, még ha nehéz is ezeket az elnevezéseket megszokni. A 1.8., 1.18. és 1.23. Megjegyzésekben mutatunk még néhány $x$ nélküli jelölést. (Természetesen ezekhez a modern elnevezésekhez sem kell görcsösen ragaszkodnunk!)
Az alapfüggvényekre (nemcsak a trigonometrikus függvényekre) nagyon sok különféle jelölés van használatban, az [SzK] feladatgyűjtemény függelékében ezek listáját megtalálhatjuk.


A következő „függvénydarabolás" nagyon lényeges, nem csak páros vagy periodikus függvényeknél: lehet, hogy $\mathrm{Dom}(f)$ túl nagy halmaz, $f$ -nek csak egy kisebb $H$ halmazon értelmezett darabját szeretnénk vizsgálni. Ezt pontosítja az alábbi definíció.

**0.20. Definíció.** Tetszőleges $f : \mathbb{R} \hookrightarrow \mathbb{R}$ és tetszőleges $H \subseteq \mathrm{Dom}(f)$ halmaz esetén $f|_H$ jelöli az $f$ függvény *leszűkítését*, másnéven *megszorítását* (megszorítottját) a $H$ halmazra, vagyis azt $h := f|_H$ függvényt, amelynek értelmezési tartománya csupán a $H$ halmaz:
$$\mathrm{Dom}(h) = \mathrm{Dom}(f|_H) := H$$
de hozzárendelési szabálya változatlan, vagyis minden $x \in H$ esetén
$$(f|_H) : x \mapsto f(x) ,$$
vagyis
$$(f|_H)(x) = h(x) := f(x) .$$

**0.21. Példa.** Az $f(x) := x^2$, $\mathrm{Dom}(f) = \mathbb{R}$ függvény páros, tehát nem invertálható, míg a $h := f|_{\mathbb{R}^-}$ függvény szigorúan monoton csökkenő, tehát igen, invertálható.

Sokkal nehezebb olyan (fizikai, kémiai, stb.egyéb) összefüggéseket vizsgálni, amelyek egy képlettel nem írhatók le. Ekkor használjuk a $\{$ (elágazás) jelölést.

**0.22. Definíció.** *(Esetszétválasztás)* Tetszőleges $f_1, f_2 : \mathbb{R} \hookrightarrow \mathbb{R}$ függvények és diszjunkt $H_1, H_2$ halmazok esetén, amennyiben még $H_1 \subseteq \mathrm{Dom}(f_1)$ és $H_2 \subseteq \mathrm{Dom}(f_2)$ is teljesül, akkor a
$$g(x) := \begin{cases} f_1(x) & \text{ha } x \in H_1 \\ f_2(x) & \text{ha } x \in H_2 \end{cases} \tag{7}$$
jelölés azt jelenti, hogy
$$\mathrm{Dom}(g) = H_1 \cup H_2$$
és hozzárendelési szabálya: $x \in \mathrm{Dom}(g)$ esetén
ha $x \in H_1$ akkor legyen $g(x) := f_1(x)$,
ha $x \in H_2$ akkor legyen $g(x) := f_2(x)$.
Vagyis a (7) képletet értelemszerűen visszafelé kell olvasni.

### 0.3.1. Paritás, periodicitás

A legegyszerűbb függvények, az $x^n$ hatványfüggvények ábráit tekintve (ld. pl. az 1.1.1. „Hatványfüggvények" fejezetben a 1.6. Példa ábráit) $n \in \mathbb{Z}$ egész kitevők esetén hasznos szimmetriákat vehetünk észre:

**0.23. Összefoglalás.** az $x^n$ hatványfüggvények grafikonjai $n$ páros kitevők esetén tengelyesen szimmetrikusak az $y$ tengelyre, míg $n$ páratlan kitevők esetén középpontosan szimmetrikusak az origóra.

Innen ered a következő elnevezés:


**0.24. Definíció.** *(Geometriai alak)* Legyen $f : \mathbb{R} \hookrightarrow \mathbb{R}$ tetszőleges függvény.
Az $f$ függvény *páros*, ha grafikonja tengelyesen szimmetrikus az $y$ tengelyre.
Az $f$ függvényt *páratlannak* nevezzük, ha grafikonja középpontosan szimmetrikus az origóra.
A függvények párosságát *paritásnak* nevezzük. (*egyenérték, megegyezés, latin*)

**0.25. Megjegyzés.** *(i)* Ha egy függvényről tudjuk (valahonnan), hogy páros vagy páratlan, akkor a szimmetria miatt elég például csak a pozitív $x$ helyeken megvizsgálnunk, és az eredmények tükörképei lesznek $f$ tulajdonságai a negatív $x$ helyeken.
*(ii)* Nem olyan egyszerű általában a helyzet: a legtöbb függvény se nem páros se nem páratlan (pl. $\sqrt{x}$, $e^x$ vagy akár $(x-3)^2$, ...). Az ilyen függvényekre azt mondjuk, hogy *nincs paritása*. (A síkgeometriában is a legtöbb síkidom sehogyan sem szimmetrikus.)
*(iii)* Még hasznosabb lenne azonban a függvény ábrája nélkül – csak a képletéből eldöntenünk paritását, hiszen akkor tényleg megspórolnánk a függvényelemzés és -ábrázolás felét! Ebben segít az alábbi eredmény:

**0.26. Tétel.** *(Algebrai alak)* Legyen $f : \mathbb{R} \hookrightarrow \mathbb{R}$ tetszőleges függvény.
Az $f$ függvény pontosan akkor *páros*, ha minden $x \in \mathrm{Dom}(f)$ -re teljesül
$$f(-x) = f(x) . \tag{8}$$
Az $f$ függvény pontosan akkor *páratlan*, ha minden $x \in \mathrm{Dom}(f)$ -re teljesül
$$f(-x) = -f(x) . \tag{9}$$

**Bizonyítás.** A függvény grafikonjának $x$ helyhez tartozó pontja $P_x = (x, f(x))$ és $-x$ helyhez tartozó pontja $P_{-x} = (-x, f(-x))$.
Az $y$ tengelyre történő tükrözéskor az $y$ érték (vagyis az $x$ tengelytől való előjeles távolság) nem változik, ezért $f(-x) = f(x)$, ami éppen (8).
Az origóra történő tükrözéskor pedig az $y$ érték pontosan ellenkező előjelre vált, ezért $f(-x) = -f(x)$, ami éppen (9). $\square$

**0.27. Megjegyzés.** Nagyon lényeges észrevétel: mind a páros, mind a páratlan függvényeknél az értelmezési tartomány, $\mathrm{Dom}(f)$ szükségképpen szimmetrikus az origóra, hiszen $x$ esetén $-x$ -nek is $\mathrm{Dom}(f)$ -ben kell lennie.
Tehát, ha egy függvény értelmezési tartománya, $\mathrm{Dom}(f)$ nem szimmetrikus az origóra, akkor sem a (8) sem a (9) azonosságokat nem kell ellenőriznünk, hiszen a függvény nyilvánvalóan se nem páros se nem páratlan (nincs paritása).

**0.28. Példa.** Például vizsgáljuk meg az $f(x) := \dfrac{x^4 - x^2 + 1}{x^3 \cdot \sin(x)}$, $\mathrm{Dom}(f) = \mathbb{R} \setminus \{k\pi : k \in \mathbb{Z}\}$ függvény paritását:
$$f(-x) = \frac{(-x)^4 - (-x)^2 + 1}{(-x)^3 \cdot \sin(-x)} = \frac{x^4 - x^2 + 1}{-x^3 \cdot (-\sin(x))} = \frac{x^4 - x^2 + 1}{x^3 \cdot \sin(x)} = f(x)$$
a jól ismert azonosságok alapján, vagyis $f$ páros függvény.

Hasonlóan (kicsit nehezebben) vizsgálható egy $f$ függvény grafikonjának *függőleges szimmetriaegyenese* és *-pontja* (a precíz geometriai definíciótól most megint eltekintünk).


**0.29. Állítás.** Az $x = a$ függőleges egyenes *szimmetriaegyenese* az $f$ függvény grafikonjának, ha egyrészt $\mathrm{Dom}(f)$ szimmetrikus az $a \in \mathbb{R}$ pontra (vagyis minden $h \in \mathbb{R}$ számra $a - h \in \mathrm{Dom}(f)$ esetén szintén $a + h \in \mathrm{Dom}(f)$ ), másrészt minden $h \in \mathbb{R}$ számra
$$f(a - h) = f(a + h) .$$
Az $(x_0, y_0)$ pont *szimmetriapontja* az $f$ függvény grafikonjának, ha egyrészt $\mathrm{Dom}(f)$ szimmetrikus az $x_0 \in \mathbb{R}$ pontra, másrészt minden $h \in \mathbb{R}$ számra
$$\frac{f(x_0 + h) + f(x_0 - h)}{2} = y_0 .$$

A függvények másik „jó tulajdonsága" az ismétlődés (*periodicitás*), ekkor szintén elég a függvénynek csak az ismétlődő kis darabját megvizsgálnunk és felvázolnunk: a többi rész már „ugyanaz".

**0.30. Definíció.** *(Periodikus függvény)* Legyen $f : \mathbb{R} \hookrightarrow \mathbb{R}$ tetszőleges függvény. Ha létezik olyan legkisebb $p > 0$ pozitív valós szám, amelyre minden $x \in \mathrm{Dom}(f)$ -re teljesül
$$f(x + p) = f(x) , \tag{10}$$
akkor az $f$ függvényt *periodikusnak* (*ismétlődő, latin*) hívjuk, $p$ pedig a függvény *periódusa.*

**0.31. Megjegyzés.** *(i)* A „létezik legkisebb $p > 0$ pozitív" kikötés lényeges, mert enélkül a *konstans* függvényeket (vagyis valamilyen $c \in \mathbb{R}$ számra $f(x) = c$, minden $x \in \mathbb{R}$ esetén, röviden $f = \tilde{c}$ ) is periodikusnak kellene tekintenünk. Ez nem csak furcsa lenne, hanem sok bonyodalmat is okozna a későbbiekben.
*(ii)* Nyilvánvalóan egy $p$ szerint periodikus függvénynek MINDEN tulajdonsága ismétlődik $p$ szerint: $\mathrm{Dom}(f)$ kikötései, zérushelyek, maximum- és minimumhelyek, sőt a függvény előjelei, monoton növő / csökkenő szakaszai, stb. Egy periodikus függvény grafikonja tapétaszerűen ismétel minden részletet!
*(iii)* Nyilvánvalóan, ha $p$ periódusa az $f$ függvénynek, akkor $f$ ismétlődik $n \cdot p$ szerint is:
$$f(x + n \cdot p) = f(x) \qquad \forall x \in \mathrm{Dom}(f)$$
minden $n \in \mathbb{Z}$ egész számra.
*(v)* A periodicitás eldöntése legtöbbször, bonyolult függvényeknél nagyon nehéz is lehet. Általában a trigonometrikus függvényeket tartalmazó képletek periodikusak, de vannak kivételek mindkét irányból. Helyszűke miatt erre a problémára mi nem térhetünk ki.

**0.32. Példa.** Az $f(x) = \sin(2x) + \mathrm{tg}(x) + 4$ függvény periodikus, de legkisebb periódusa nem $2\pi$ hanem $\pi$.


### 0.3.2. Monotonitás

A mindennapi életben sok olyan jelenséggel találkoztunk már, amelyek növekednek töretlenül, kivétel vagy hullámzás nélkül, esetleg csökkennek töretlenül, kivétel vagy hullámzás nélkül. Ilyenek lehetnek például: az idő előrehaladtával a teljesítmény nő/csökken, vagy a szerpentines autóút folyamatosan emelkedik nő/csökken, árszínvonal, gyermekek ill. idősödő emberek magassága, stb. (Vagy esetleg az $y = mx + b$ egyenesek matekórán).
Szavakban: „*nagyobbhoz nagyobbat rendel*" illetve „*nagyobbhoz kisebbet rendel*". Mindig balról $\to$ jobbra haladunk! Ezeket a feltételeket pontosítják az alábbi (11) és (12) képletek.
Esetleg néha megengedhetünk egy kis pihenést/stagnálást is, ha nem vagyunk olyan szigorúak.
A fentieket fogalmazzuk meg precízen az alábbi definícióban.

**0.33. Definíció.** Legyen $f$ tetszőleges függvény, $I \subseteq \mathrm{Dom}(f)$ nyílt vagy zárt intervallum.
*(o)* Az $f$ függvény *konstans / stagnál* (*állandó, megáll, latin*) az $I$ intervallumon, ha van olyan $c \in \mathbb{R}$ valós szám, hogy minden $x \in I$ helyen
$$f(x) = c .$$

*(i)* Az $f$ függvény az $I$ intervallumon
*monoton nő/növő* (*egyhangú, gör.*) vagy más szavakkal *nem csökkenő*, ha tetszőleges $x_1, x_2 \in I$ számokra
$$x_1 < x_2 \implies f(x_1) \leq f(x_2) \tag{11}$$

és *monoton csökken* vagy más szavakkal *nem növő*, ha tetszőleges $x_1, x_2 \in I$ számokra
$$x_1 < x_2 \implies f(x_1) \geq f(x_2) . \tag{12}$$

Az $f$ függvény növekedését / csökkenését a $\nearrow$ és $\searrow$ jelekkel rövidítjük.
*(ii)* Az $f$ függvény az $I$ intervallumon
*szigorúan monoton nő/növő*, ha tetszőleges $x_1, x_2 \in I$ számokra
$$x_1 < x_2 \implies f(x_1) < f(x_2) \tag{13}$$
míg *szigorúan monoton csökken*, ha tetszőleges $x_1, x_2 \in I$ számokra
$$x_1 < x_2 \implies f(x_1) > f(x_2) . \tag{14}$$

**0.34. Megjegyzés.** *(i)* Vigyázzunk a fenti *(i)* és *(ii)* pontok közötti különbségekre és ezek jelentéseire! Az $\leq$, $\geq$ és a szigorú $<$, $>$ jelek közötti (egyetlen karakter) különbség, vagyis $=$ is megengedett, azt vonja maga után, hogy például egy monoton növő függvény állandó is lehet, mint például az $[x]$ egészrész vagy a $\mathrm{sgn}(x)$ előjelfüggvény. Az $f$ függvény akár az egész $I$ intervallumon (vagy csak


egy részén) is lehet konstans („vízszintes"). Ezért jobb például a „monoton nő" elnevezés helyett a „nem csökkenő" kifejezés.
A konstans függvények egyébként mon. növőek és mon. csökkenőek is egyszerre, több más ilyen függvény nincs.
*(ii)* A konstans szakaszok kiküszöbölését szolgálja a szigorú monotonitás: szigorúan monoton függvény ugyanazt az $y$ értéket nem veheti fel kétszer. Ennek hasznát többek között a függvények invertálhatóságánál fogjuk látni.
*(iii)* Hasznos kapcsolat van függvények paritása (ld. előző fejezetben) és monotonitása között. Ha például egy $f$ függvény páratlan és a pozitív $x_1, x_2$ értékek egy $I \subseteq \mathbb{R}^+$ intervallumában (azaz $x_1, x_2 \in I$) monoton csökkenő, vagyis (11) teljesül, akkor $f$ páratlansága miatt $-x_1 > -x_2$ -ből
$$f(-x_1) = -f(x_1) \leq -f(x_2) = f(-x_2) \tag{15}$$
következik, vagyis az $f$ függvény (a megfelelő) negatív $-x_1, -x_2$ értékekre szintén monoton csökkenő. Hasonló a helyzet monoton növő páratlan függvényekkel is. Szemléletesen ez még „egyszerűbb": egy akármilyen monoton növő grafikont $180^\circ$ -kal elforgatva – nézzük csak, mit is kapunk (pl. $x^3$ vagy $\sqrt[3]{x}$ függvények)?!
A páros függvények monoton tulajdonságait az Olvasóra bízzuk!
*(iv)* Elméletben ugyan „egyszerű" az alapműveletek (összeadás, szorzás, stb.) kapcsolata, de próbálja meg Kedves Olvasónk az alábbi kifejezés monotonitását kideríteni (differenciálszámítás nélkül):
$$k(x) = (11x^3 + 80)\sqrt[3]{x + 11} + (x^3 - 92)\sqrt[3]{92x - 80} .$$
*(v)* A monotonitás eldöntése általában nem egyszerű feladat, a 0.33. Definíció egyenlőtlenségeit bonyolult függvényeknél lehetetlen (közvetlenül) ellenőrizni. A 6.1. „Monotonitás vizsgálata" fejezetben erre a problémára egy sokkal egyszerűbb módszert fogunk megismerni.
*(vi)* Lehetne egy függvény monotonitását különálló $x_0 \in \mathrm{Dom}(f)$ pontokban is vizsgálni, erre nekünk nem lesz szükségünk. Az intervallumon való monotonitás sokkal egyszerűbb és gyakorlati alkalmazásokban erre van szükségünk.

A (11) - (14) következtetéseknek (*implikációk, lat.*) minden $x_1, x_2 \in I$ értékekre teljesülniük kell, így alaposabb vizsgálat után bizton kijelenthetjük:

**0.35. Állítás.** Tetszőleges $f$ függvényre és $I \subseteq \mathrm{Dom}(f)$ intervallumra a (11) - (14) követelmények rendre ekvivalensek az alábbiakkal:
Tetszőleges $x_1, x_2 \in I$ értékekre
$$x_1 < x_2 \iff f(x_1) \leq f(x_2) \tag{16}$$
illetve
$$x_1 < x_2 \iff f(x_1) \geq f(x_2) \tag{17}$$
illetve
$$x_1 < x_2 \iff f(x_1) < f(x_2) \tag{18}$$
illetve
$$x_1 < x_2 \iff f(x_1) > f(x_2) \tag{19}$$
(mindössze a $\implies$ jel helyett írtunk $\iff$ -t).


A következő középiskolai összefüggések nagyon fontosak egyenlőtlenségek megoldására. Mivel sok középiskolás és egyetemista diák ezekkel el tudja rontani számolásait, ezért ezt a kérdést is „kicsit" részletesebben megvizsgáljuk. Akinek erre most nincs ideje, ugorjon a 0.37. Definícióra.

**0.36. Megjegyzés.** Az $<$, $>$ jelek mikor fordulnak meg?
Mielőtt kedves Olvasónk tovább olvasna, takarja le az alábbiakat és próbálja meg felidézni (a fenti kérdésre vonatkozó) emlékeit!
Nos, nézzük meg figyelmesen a 0.33. Definíció (11) - (14) képleteit! Az „$x_1 < x_2$" egyenlőtlenség igen/nem megfordulása éppen a függvény monoton csökkenő/növő tulajdonságát jelenti!
Másként fogalmazva: a (11) - (14) következtetésekben az „$x_1 < x_2$" egyenlőtlenségre („mindkét oldalára") alkalmaztuk az $f$ függvényt (csak a sorokat nem egymás alá írtuk), és kaptuk, hogy az $<$ jel megfordult vagy nem fordult meg annak megfelelően, hogy az $f$ függvény monoton csökkenő illetve növő.
Megjegyezzük még, hogy a szigorú $<$ jel pontosan akkor enyhül meg $\leq$ jellé, ha az alkalmazott $f$ függvény mindössze csak monoton. Csak szigorúan monoton $f$ függvény esetén marad meg a szigorú $<$ jel, nem kell lehetséges $=$ „opcióval" kiegészítenünk!
Az $f$ függvény elhagyása ugyanúgy igen/nem változtatja meg az egyenlőtlenséget, mint az eredeti $f$ függvény alkalmazása (mindkét oldalra), hiszen az eredeti $f$ függvény inverze is ugyanolyan monoton, mint $f$, az 1.42. Állítás szerint. (Tulajdonképpen csak a (11)-(14) egyenlőtlenségeket kell alaposabban átgondolnunk!) Azonban az $f^{-1}$ inverz értelmezési tartományára kell ügyelnünk, ami viszont általában nagyon bonyolult lehet.
Ennek fényében ugye minden világos? A tanult *megfordulási szabályok* könnyebben megjegyezhetőek az alábbi felsorolásból (vigyázat: az alábbi pontokban írt $x$ változó nem azonos az $\lessgtr$ egyenlőtlenségben szereplő $x$ betűvel!) :
*a)* negatív számmal szorzás/osztás $\iff$ $f(x) = c \cdot x$ ahol $c$ negatív $\iff$ $f$ szigorúan monoton csökkenő $\iff$ $\lessgtr$ megfordul,
pozitív számmal szorzás $\iff$ $c$ pozitív $\iff$ $f$ szigorúan monoton növő $\iff$ $\lessgtr$ nem fordul meg,
$0$ -val szorzás $\iff$ $f(x) = 0 \cdot x = 0$ konstans (vízszintes) $\iff$ akármilyen $\lessgtr$ jelből mindig $=$ lesz,
*b)* hozzáadok (kivonok) $d$ számot $\iff$ $f(x) = x + d$ mindig szigorúan monoton növő $\iff$ $\lessgtr$ sohasem fordul meg,
*c)* $\log_a$ logaritmust veszek ($0 < a$, $a \neq 1$):
alap $a > 1$ $\iff$ $\log_a$ szigorúan monoton növő $\iff$ $\lessgtr$ nem fordul meg sem oda sem vissza:
$$x_1 < x_2 \iff \log_a(x_1) < \log_a(x_2) \quad (a > 1),$$
alap $a < 1$ $\iff$ $\log_a$ szigorúan monoton csökkenő $\iff$ $\lessgtr$ megfordul mind oda mind vissza:
$$x_1 < x_2 \iff \log_a(x_1) > \log_a(x_2) \quad (a < 1),$$

*d)* $\exp_a(x) = a^x$ függvényt alkalmazunk ($0 < a$):


alap $a > 1$ $\Leftrightarrow$ $a^x$ szigorúan monoton növő $\Leftrightarrow$ $\lessgtr$ nem fordul meg sem oda sem vissza,

alap $a < 1$ $\Leftrightarrow$ $a^x$ szigorúan monoton csökkenő $\Leftrightarrow$ $\lessgtr$ megfordul, mind oda mind vissza

alap $a = 1$ $\Leftrightarrow$ $a^x$ konstans $\Rightarrow$ mindig $=$ -t kapunk, vagyis eltűnik az információ: melyik oldal volt nagyobb?,

e) $\sqrt{\;}$ ::: -öt vonunk $\Leftrightarrow$ $f(x) = \sqrt{x}$ ($0 \leq x$) szigorúan monoton növő $\Leftrightarrow$ $\lessgtr$ nem fordul meg ($x_1 , x_2 \in \mathbb{R}^+$):

$$x_1 < x_2 \quad \Leftrightarrow \quad \sqrt{x_1} < \sqrt{x_2} ,$$

$\sqrt[3]{\;}$ , $\Leftrightarrow$ , ...pozitív páratlan kitevőjű hatványok és gyökök hasonlóak ($x_1 , x_2 \in \mathbb{R}$):

$$x_1 < x_2 \quad \Leftrightarrow \quad \sqrt[3]{x_1} < \sqrt[3]{x_2} \quad \Leftrightarrow \quad (x_1)^3 < (x_2)^3 ,$$

f) négyzetre emelek $\Leftrightarrow$ $f(x) = (x)^2$ $\Rightarrow$ életveszély!

Jelölje ugyanis az egyenlőtlenség két oldalát $A$ és $B$, és legyen $A < B$. Ekkor:

$0 \leq A < B$ esetén $f(x)$ szigorúan monoton növő ($0 \leq x$) $\Leftrightarrow$ $<$ nem fordul meg:

$$0 \leq A, B \text{ esetén } A < B \quad \Leftrightarrow \quad A^2 < B^2 ,$$

$A < B \leq 0$ esetén $f(x)$ szigorúan monoton csökkenő ($x \leq 0$) $\Leftrightarrow$ $<$ megfordul:

$$A, B \leq 0 \text{ esetén } A < B \quad \Leftrightarrow \quad A^2 > B^2 ,$$

$A < 0 < B$ esetén KI TUDJA ? Mert például ... , de ez HF.

g) mindkét oldalnak vesszük a reciprokát (sokszor kell használnunk!), vagyis $f(x) = \dfrac{1}{x}$. Ekkor $A < B$ esetén:

$0 < A < B$ esetén $f(x)$ szigorúan monoton csökkenő ($0 < x$) $\Leftrightarrow$ $<$ megfordul:

$$0 < A, B \text{ esetén } A < B \quad \Leftrightarrow \quad \frac{1}{A} > \frac{1}{B} ,$$

$A < B < 0$ esetén $f(x)$ szigorúan monoton csökkenő ($x < 0$) $\Leftrightarrow$ $<$ megfordul:

$$A, B < 0 \text{ esetén } A < B \quad \Leftrightarrow \quad \frac{1}{A} > \frac{1}{B} ,$$

(Vigyázat: $\mathrm{Dom}(f)$ nem egy összefüggő intervallum, és bizony $f$ az egész értelmezési tartományán nem monoton csökkenő!)

$A < 0 < B$ esetén: NE hagyjuk magunkat becsapni: negatív $A$ szám reciproka negatív, pozitív $B$ szám reciproka pozitív, tehát ez esetben az $<$ jel NEM fordul meg: $\Leftrightarrow$ $\dfrac{1}{A} < \dfrac{1}{B}$ !

h) A trigonometrikus függvények sajnos periodikusak, a hullámzás miatt lehetetlen (nagyon alapos elemzést igényel), hogy $A < B$ és $\sin(A) \lessgtr \sin(B)$ hogyan


függenek össze általában!

Ha azonban csak egy (megfelelő, azaz monoton) részét tekintjük e függvényeknek, akkor már nagyon könnyű a feladatunk:

$-\dfrac{\pi}{2} + 2k\pi \leq A < B \leq \dfrac{\pi}{2} + 2k\pi$ esetén $\sin$ szigorúan monoton növő $\Leftrightarrow$

$\Leftrightarrow$ $<$ nem fordul meg: $\sin(A) < \sin(B)$ ,

$\dfrac{\pi}{2} + 2k\pi \leq A < B \leq \dfrac{3}{2}\pi + 2k\pi$ esetén $\sin$ szigorúan monoton csökkenő $\Leftrightarrow$

$\Leftrightarrow$ $<$ megfordul: $\sin(A) > \sin(B)$ ,

$0 + 2k\pi \leq A < B \leq \pi + 2k\pi$ esetén $\cos$ szigorúan monoton csökkenő $\Leftrightarrow$

$\Leftrightarrow$ $<$ megfordul: $\cos(A) > \cos(B)$ ,

$\pi + 2k\pi \leq A < B \leq 2\pi + 2k\pi$ esetén $\cos$ szigorúan monoton növő $\Leftrightarrow$

$\Leftrightarrow$ $<$ nem fordul meg: $\cos(A) < \cos(B)$ ,

$-\dfrac{\pi}{2} + k\pi < A < B < \dfrac{\pi}{2} + k\pi$ esetén $\mathrm{tg}$ szigorúan monoton növő $\Leftrightarrow$

$\Leftrightarrow$ $<$ nem fordul meg: $\mathrm{tg}(A) < \mathrm{tg}(B)$ ,

$0 + k\pi < A < B < \pi + k\pi$ esetén $\mathrm{ctg}$ szigorúan monoton csökkenő $\Leftrightarrow$

$\Leftrightarrow$ $<$ megfordul: $\mathrm{ctg}(A) > \mathrm{ctg}(B)$ .

A trigonometrikus függvények inverzei már nem külön feladat: az 1.2. „Inverz függvények" fejezet 1.42. Állítása alapján $f^{-1}$ monotonitása megegyezik $f$ monotonitásával (ez lényegében a 0.35. Állítás (16)-(19) ekvivalenciái), csak az értelmezési tartományokra kell ügyelnünk:

$-1 \leq A , B \leq 1$ esetén $A < B \Leftrightarrow \arcsin(A) < \arcsin(B)$

hiszen

$$-\frac{\pi}{2} \leq \alpha, \beta \leq \frac{\pi}{2} \text{ esetén } \sin(\alpha) < \sin(\beta) \Leftrightarrow \alpha < \beta ,$$

$-1 \leq A , B \leq 1$ esetén $A < B \Leftrightarrow \arccos(A) > \arccos(B)$

hiszen

$$0 \leq \alpha, \beta \leq \pi \text{ esetén } \cos(\alpha) > \cos(\beta) \Leftrightarrow \alpha < \beta ,$$

tetszőleges $A, B \in \mathbb{R}$ számok esetén $A < B \Leftrightarrow \mathrm{arctg}(A) < \mathrm{arctg}(B)$

hiszen

$$-\frac{\pi}{2} < \alpha, \beta < \frac{\pi}{2} \text{ esetén } \mathrm{tg}(\alpha) < \mathrm{tg}(\beta) \Leftrightarrow \alpha < \beta ,$$

tetszőleges $A, B \in \mathbb{R}$ számok esetén $A < B \Leftrightarrow \mathrm{arcctg}(A) > \mathrm{arcctg}(B)$

hiszen

$$0 < \alpha, \beta < \pi \text{ esetén } \mathrm{ctg}(\alpha) > \mathrm{ctg}(\beta) \Leftrightarrow \alpha < \beta .$$

A secans, cosec és hiperbolikus függvényeket és inverzeiket most nem vizsgáljuk, az 1.1.4. „Trigonometrikus függvények és inverzeik" fejezet és [www1] alapján hf.

$\square$


A monotonitással szoros kapcsolatban van a szélsőérték[^1] fogalma.

**0.37. Definíció.** Legyen $f$ tetszőleges függvény, $x_0 \in \mathrm{Dom}(f)$ rögzített hely.

(i) $x_0$ pontban az $f$ függvénynek (szigorú) *lokális* (=*helyi*) *maximuma* (*legnagyobb értéke*) / *minimuma* (*legkisebb értéke*) van, ha van olyan $K_\varepsilon(x_0) \subseteq \mathrm{Dom}(f)$ környezet, hogy

$$f(x_0) > f(x) \qquad \forall x \in K_\varepsilon(x_0) \tag{20}$$

illetve

$$f(x_0) < f(x) \qquad \forall x \in K_\varepsilon(x_0) . \tag{21}$$

A minimum- és maximum- jelzők gyűjtőneve *szélső-* (pontosabban *szélsőséges-*) *érték*. Az $x_0 \in \mathrm{Dom}(f)$ pont a *szélsőérték helye* míg az $y_0 = f(x_0)$ érték a *szélsőérték értéke*.

Amennyiben a fenti $K_\varepsilon(x_0)$ környezet az $x_0$ pontnak egy valamely baloldali / jobboldali / kétoldali környezete, akkor (20) illetve (21) esetén az $f$ függvénynek *baloldali / jobboldali (féloldali)* illetve *kétoldali lokális szélsőértékéről* beszélünk.

(ii) Az $x_0$ pontban az $f$ függvénynek (szigorú) *globális* vagy *általános* / *abszolút szélsőértéke* (*maximuma* / *minimuma*) van, ha a (20) ill. (21) -ben az $I$ intervallum helyett az egész $\mathrm{Dom}(f)$ írható:

$$f(x_0) > f(x) \qquad \forall x \in \mathrm{Dom}(f)$$

illetve

$$f(x_0) < f(x) \qquad \forall x \in \mathrm{Dom}(f)$$

**0.38. Megjegyzés.** *Lokális szélsőérték:* $y_0 = f(x_0)$ a legkisebb / legnagyobb egy kis környezetben (pl. az utcában), de a *globális szélsőérték* már az egész világon is.

A szélsőérték-helyek megkeresésének technikáját a 6.1. „Monotonitás vizsgálata" fejezetben tanuljuk meg.

[^1]: szélsőséges érték


# 1. fejezet

# Függvények felépítése

Féléves tananyagunk célja, mint említettük: $f : \mathbb{R} \hookrightarrow \mathbb{R}$ függvények analizálása (elemzése). Ha ránézünk egy (bonyolult) függvény-képletre, látjuk, hogy elemi (alap-) függvényekből épül fel, különböző módon összeállítva.

Az alapfüggvényeket a középiskolában mindenki tanulta, a honlapomon található [www1] összefoglalást ajánljuk.

A négy alapműveletet ($+, -, \cdot, /$) nem részletezzük, azonban van két másik „módszer", amellyel újabb és bonyolultabb függvényeket tudunk létrehozni: az inverzfüggvény képzése (készítése) és a függvények kompozíciója (összetétele, belső- és külső függvények), amelyeket alaposabban meg kell ismernünk, az 1.2. és az 1.3. fejezetekben.

## 1.1. Alapfüggvények

A legtöbb alapfüggvényt és inverzeiket a középiskolában már tanultuk, nagyon alaposan ismételjük át őket, például a [www1] és [www6] összeállításokból.

Célszerű a függvényeket $x$ betű nélkül emlegetni, mint pl. $f$, $\ln$, $\sin$, $\sqrt{\;}$, stb., elsősorban nem elméleti precízkedés miatt, hanem későbbi gyakorlati problémák (összetett függvények, deriválás, stb.) megoldását is megkönnyítheti ez a szemléletmód. A különböző elnevezések listáját például az [SzK] feladatgyűjtemény függelékében találjuk meg.

A függvények „tendencia-szerű" viselkedését tanulmányozzuk az Értelmezési tartomány szélein: a kikötéseknél és a $+\infty$ , $-\infty$ irányokban - ezt a 4. „függvények határértéke és folytonossága" fejezetben fogjuk precízen megfogalmazni.

Az alapfüggvények és inverzeik kapcsolatát is érdemes már most tanulmányoznunk: az $y = x$ egyenesre való tengelyes tükrözéssel. A „papírfordítós módszert" a következő, 1.2 „Inverz függvények" fejezet 1.52. Algoritmusában írjuk le. (Ez már sok hallgatót segített zh -ban és szóbeli vizsgákon.)

Most csak néhány, kevésbé közismert, de fontos függvényt és jelölést ismertetünk.

**1.1. Definíció.** (o) $\mathrm{id}$ vagy $\mathrm{id}_{\mathbb{R}}$ az *identitás (azonosság) függvény*, nem más, mint az $y = x$ függvény tudományos jelölése, vagyis

$$\mathrm{Dom}(\mathrm{id}) = \mathbb{R} \quad \text{és} \quad \mathrm{id}(x) := x \quad (\forall x \in \mathbb{R}) . \tag{1.1}$$


Tetszőleges $H \subseteq \mathbb{R}$ halmazra $\mathrm{id}_H := \mathrm{id}|_H$ jelöli az $\mathrm{id}$ függvény $H$ halmazra történő leszűkítését, vagyis hozzárendelési szabálya továbbra is $(\mathrm{id}|_H)(x) := x$ de $\mathrm{Dom}(\mathrm{id}|_H) := H$.

(i) Tetszőleges $c \in \mathbb{R}$ valós számra $\underset{\sim}{c}$ jelöli a $c$ értékű *konstans (állandó, lat.)* függvényt, vagyis

$$\mathrm{Dom}\,\underset{\sim}{c} = \mathbb{R} \quad \text{és} \quad \underset{\sim}{c}(x) := c \quad (\forall x \in \mathbb{R}) . \tag{1.2}$$

(ii) Az $f$ függvény *konstans (állandó)* az $I \subseteq \mathrm{Dom}(f)$ intervallumon, ha létezik olyan $c \in \mathbb{R}$ valós szám, amelyre $f(x) = c$ minden $x \in I$ számra.

**1.2. Állítás.** Közismert, hogy konstans függvények grafikonja vízszintes egyenes, és fordítva is igaz: minden vízszintes egyenes „képlete" $y = c$ alakú.

**Vigyázat:** a matematikusok nagyon sokféle, szélsőséges tulajdonságokkal rendelkező, veszélyes függvényt ismernek (mint pl. bolha-, Riemann-, fűrészfog-, stb.- függvények)! Ezekkel itt most nem foglalkozunk, de nagyon vigyázzunk a „legyen $f$ tetszőleges függvény" kezdetű mondatokkal!

### 1.1.1. Hatványfüggvények

**1.3. Definíció.** Tetszőleges (rögzített) $\alpha \in \mathbb{R}$ kitevő esetén az $x^\alpha$ függvényeket $\alpha$*-kitevőjű hatványfüggvényeknek* nevezzük. Pontosabban: a

$$h_\alpha(x) := x^\alpha$$

függvényekről van szó, ahol $\mathrm{Dom}(h_\alpha) = \mathbb{R}^+$ (vagyis $x > 0$).

**1.4. Megjegyzés.** (i) Ne feledjük: a hatványfüggvények kitevője rögzített, alapja a változó (felül „rögzített", alul „mozog"), ellentétben az exponenciális függvényekkel (ld. 1.17. Definícióban) - ez a két függvénytípus könnyen összetéveszthető, és ezért sok problémát okoz deriválásnál, függvényvizsgálatoknál.

(ii) Középiskolából jól ismert: negatív számok és a $0$ csak bizonyos racionális kitevőkre emelhetők. Ebből következik a nagyon fontos észrevétel: ha a kitevő ismeretlen, akkor az alap mindenképpen pozitív - ezért is írtuk a fenti definícióban: $\mathrm{Dom}(h_\alpha) = \mathbb{R}^+$.

Szándékosan írtunk $x^n$ helyett $x^\alpha$ alakot, hiszen a kitevő nem csak egész szám lehet - ez is nagyon fontos lesz a későbbi vizsgálatoknál (deriválás, függvényvizsgálat, integrálás):

**1.5. Megjegyzés.** *Speciális kitevőjű hatványok:*

Az $x^2$, $x^3$, ... képletek láttán egyből „beugrik" mindenkinek, hogy hatványfüggvényt lát. Azonban az alábbi függvények is hatványfüggvények:

$$x = x^1 \quad (\alpha = 1) , \qquad 1 = x^0 \quad (\alpha = 0) ,$$

$$\frac{1}{x} = x^{-1} \quad (\alpha = -1), \qquad \frac{1}{x^2} = x^{-2} \quad (\alpha = -2), \; ... \; ,$$

$$\sqrt{x} = x^{\frac{1}{2}} \quad \left(\alpha = \frac{1}{2}\right), \qquad \sqrt[3]{x} = x^{\frac{1}{3}} \quad \left(\alpha = \frac{1}{3}\right), \; ... \; ,$$


$$\frac{1}{\sqrt{x}} = x^{-1/2} \quad \left(\alpha = \frac{-1}{2}\right), \qquad \frac{1}{\sqrt[3]{x}} = x^{-1/3} \quad \left(\alpha = \frac{-1}{3}\right), \; ... \; ,$$

A lista nem teljes, keressünk még „különböző alakú" hatványfüggvényeket. Érdemes gyakorolnunk a hatványfüggvények (és az $\alpha$ kitevő) felismerését: deriváláskor, integráláskor „életbevágóan fontos", hogy felismerjük a képlet „igazi" lényegét!

Most pedig nézzük meg a hatványfüggvények ábráit közelebbről!

**1.6. Példa.** Kezdjük az $\alpha = 0, \pm 1, \pm 2, \pm 3, \dots$ egész kitevőkkel. Ekkor $\mathrm{Dom}(f) = \mathbb{R} \setminus \{0\}$ azaz $x \in \mathbb{R}$ de $x \neq 0$, sőt pozitív $\alpha$ esetén $x \in \mathbb{R}$ tetszőleges szám lehet.

*(ábra)* Hatványfüggvények

Az ábrán láthatjuk, hogy páros kitevők esetén a függvények grafikonjai tengelyesen szimmetrikusak az $y$ tengelyre, míg páratlan kitevők esetén középpontosan szimmetrikusak az origóra. Innen ered a „páros / páratlan függvény" elnevezés, mint ezt a 0.3. „Általános függvénytani alapok" fejezetben vizsgáltuk meg általánosan.

Megjegyezzük, hogy $\alpha \leq 0$ esetén is fennállnak a fenti szimmetriák, hiszen ekkor $\mathrm{Dom}(f)$ az origóban „lyukas" halmaz, és ez is szimmetrikus mind az origóra, mind az $y$ tengelyre.

Általános $\alpha$ kitevő esetén csak pozitív $x$ alapra értelmezhetők a hatványfüggvények.

Néhány példa pozitív $\alpha > 0$ kitevőkre:

*(ábra)* Hatványfüggvények pozitív kitevők esetén


**1.7. Megjegyzés.** Figyeljük meg: az $x^1$ ($\alpha = 1$) függvény van mindig „középen": $0 < x < 1$ esetén az $\alpha > 1$ kitevők az $y = x$ egyenes alatt „sorrendben", a $0 < \alpha < 1$ kitevők az egyenes felett „sorrendben". $1 < x$ esetén a sorrend fordított.

Még pontosabban: a $h_\alpha(x) = x^\alpha$ függvény tükörképe az $y = x^1$ egyenesre éppen a $h_{\frac{1}{\alpha}}(x) = x^{\frac{1}{\alpha}}$ függvény. Ez nem meglepő, hiszen a $h_\alpha$ függvény inverze éppen a $h_\alpha^{-1}$ függvény.

Negatív kitevőkre ($0 < x$ esetén) hasonló elemzést ajánlunk kedves Olvasóinknak („csak" a fenti $y = h_\alpha(x)$ grafikonok reciprokait kell tekintenünk):

*(ábra)* Hatványfüggvények negatív kitevők esetén

Az elválasztó görbe most az $\dfrac{1}{x}$ függvény.

**1.8. Megjegyzés.** A 0.19. Megjegyzésnek megfelelően érdemes $()^2$, $\sqrt{\;}$, $\sqrt[3]{\;}$, $\dfrac{1}{()^2}$, ... függvényekről beszélnünk ($x$ említése nélkül). Az $\alpha = 1$ kitevőre használatos még az $\mathrm{id}$ jelölés is, tehát például $\mathrm{id}(x) = x$, $\mathrm{id}^2 = x^2$. (Egy ötlet a diákoktól: „akinek nem tetszik az id, az húzza át kétszer és máris ott van az $x$" ... .)

[SzK] és [SzF] elején sok (kidolgozott) gyakorló feladatot találunk hatványfüggvényekkel kapcsolatban.

### 1.1.2. Racionális törtfüggvények

A polinomok (mint legegyszerűbb függvények) után a racionális törtfüggvényekkel találkozunk a legtöbbször.


**1.9. Definíció.** *Racionális törtfüggvényeknek* nevezzük a két polinom hányadosaként előálló

$$f(x) = \frac{p(x)}{q(x)} = \frac{a_n x^n + a_{n-1} x^{n-1} + ... + a_1 x^1 + a_0}{b_m x^m + b_{m-1} x^{m-1} + ... + b_1 x^1 + b_0} \tag{1.3}$$

alakú függvényeket (tehát $p(x)$ és $q(x)$ tetszőleges polinomok, vagyis $a_n, ..., a_0 , b_m, ..., b_0 \in \mathbb{R}$ tetszőleges valós számok).

Mivel a polinomok fokszámai (vagyis $n$ és $m$, amennyiben $a_n \neq 0$ és $b_m \neq 0$) általában elég nagyok, hasznos lesz a következő problémára módszert keresnünk (és találnunk):

**1.10. Probléma.** Keresendők a $p$ és $q$ polinomoknál alacsonyabb fokszámú $u_1(x) ; v_1(x) ; ... ; u_K(x) ; v_K(x)$ polinomok, amelyekkel a fenti (1.3) -ben szereplő $f$ függvény *felbontható (felírható)*

$$f(x) = \frac{p(x)}{q(x)} = \frac{u_1(x)}{v_1(x)} + ... + \frac{u_K(x)}{v_K(x)} \tag{1.4}$$

alakban. A fenti $\dfrac{u_i(x)}{v_i(x)}$ „törtecskéket" hívjuk *parciális* vagy *elemi* vagy *résztörteknek*.

(A *parciális* szó latin eredetű, jelentése „részleges, nem egész".)

**1.11. Megjegyzés.** *Felhasználása:* A $\dfrac{p(x)}{q(x)}$ tört fenti (1.4) felbontását az integrálszámításban (primitív függvények keresése); függvények sorbafejtésénél (hatványsorok); Laplace transzformációnál (állandó együtthatójú lineáris differenciálegyenletek); a generátorfüggvény módszernél; és még sok helyen használjuk.

Az alábbi módszerben megkeressük a legalacsonyabb fokszámú $u_i ; v_i$ polinomokat, a $\dfrac{p(x)}{q(x)}$ törtet felbontjuk parciális (elemi) törtekre.

A módszer leírása az alfejezet végéig tart!

**0. LÉPÉS:** Legyen a számláló fokszáma kisebb, mint a nevező fokszáma!

Ha ez nem teljesül (azaz a számláló legalább akkora fokszámú, mint a nevező), akkor (polinomosztással) a számlálót elosztjuk a nevezővel, azaz meghatározzuk azon $r(x)$ és $s(x)$ polinomokat, amelyekre

$$p(x) = q(x) \cdot s(x) + r(x)$$

és $r(x)$ fokszáma kisebb mint $q(x)$ fokszáma. Felhívjuk a figyelmet arra, hogy a

<http://math.uni-pannon.hu/Poliosz5.exe>

program segítségével bármely $p$ és $q$ polinom esetén könnyen kiszámíthatjuk az $r$ és $s$ polinomokat.


Ekkor $f(x)$ a következő alakban írható[^1]:

$$f(x) = \frac{r(x)}{q(x)} + s(x)$$

A továbbiakban feltesszük, hogy a számláló fokszáma kisebb, mint a nevező fokszáma (azaz csak az $\dfrac{r(x)}{q(x)}$ alakú taggal foglalkozunk)!

**I. LÉPÉS:** A nevezőt a lehető legjobban szorzattá bontjuk, és az azonos szorzótényezőket összegyűjtjük.

Felhívjuk a figyelmet: most kell eldöntenünk, hogy az alábbiakban (mindvégig) valós vagy komplex számokkal kívánunk számolni! A valós és a komplex számok közötti különbséget az Algebra Alaptételének két változata világítja meg:

**1.12. Tétel.** *(Algebra Alaptétele 1. (valós) változat)* Tetszőleges valós együtthatójú polinom (lényegében egyértelmű módon[^2]) felbontható legfeljebb másodfokú valós együtthatójú polinomok szorzatára.

*(Algebra Alaptétele 2. (komplex) változat)* Tetszőleges komplex együtthatójú polinom (lényegében egyértelmű módon) felbontható elsőfokú komplex együtthatójú polinomok szorzatára.

**1.13. Következmény.** A fenti tételből következik, hogy a nevező szorzótényezői csak az alábbi típusúak lehetnek:

1) (valós) esetben: négy típus, mint: $(x - u)$, $(x - v)^n$, $(ax^2 + bx + c)$, $(dx^2 + ex + f)^m$ („elsőfokú", „elsőfokú hatványa", „másodfokú" és „másodfokú hatványa").

2) (komplex) esetben: csak a fenti első két típus lehetséges.

**1.14. Megjegyzés.** *Módszerek a szorzótényezők meghatározására:*

(i) a nevező $x = \alpha$ gyökeinek meghatározása[^3] (gyökképlettel[^4] vagy a 4.2. alfejezet 4.32. pontjában ismertetendő intervallum felezéses módszerrel), majd az $(x - \alpha)$ gyöktényezők kiemelése polinomosztással[^5].

(ii) próbálkozás módszere: keressük azon $r(x)$ és $s(x)$ polinomok együtthatóit amelyekre $q(x) = r(x)s(x)$. Ehhez alkalmazhatjuk a behelyettesítés módszerét,

[^1]: Érdekességképpen megjegyezzük, hogy oszthatóság, szorzattá bontás, felbonthatatlanság, stb. tekintetében a polinomok teljesen ugyanúgy viselkednek, mint az egész számok ($\mathbb{Z}$).

[^2]: sorrendtől és konstans szorzóktól eltekintve egyértelmű

[^3]: ez csak az első két típusú szorzótényező megkeresésére használható

[^4]: másodfokú egyenletre a tanult gyökképlet (már 4000 évvel ezelőtt Mezopotámiában is ismerték), harmad- és negyedfokú egyenletekre Girolamo Cardano (1501-1576), Nicolo Tartaglia (1500-1557) és Ludovico Ferrari (1522-1565) olasz tudósok képletei adnak megoldást, míg ötöd- és magasabbfokú egyenletekre Niels Henrik Abel (1802-1829) norvég és Paolo Ruffini (1765-1822) olasz matematikusok bizonyították, hogy nincs általános gyökképlet.

[^5]: a maradék nélküli polinomosztás elvégezhetőségét Étienne Bézout (1730-1783) francia matematikus következő eredménye biztosítja: **Tétel:** Ha az $\alpha \in \mathbb{C}$ szám gyöke a $p(x)$ polinomnak, akkor az $(x - \alpha)$ polinom (gyöktényező) osztója a $p(x)$ polinomnak, azaz $p(x) = (x - \alpha) \cdot q(x)$ valamely $q(x)$ polinomra. E tételnek speciális esete (ha $p(x)$ másodfokú) a középiskolában tanult „a másodfokú egyenlet gyöktényezős alakja ..." állítás.


vagy az *egyenlő együtthatók* (más néven az *együtthatók összehasonlítása*) módszerét.

**II. LÉPÉS:** A *Parciális törtekre bontás.*

1) valós esetben:

Ha

$$f(x) = \frac{p(x)}{(x - u_1) \cdot ...(x - v_1)^{n_1} \cdot ...(a_1 x^2 + b_1 x + c_1) \cdot ...(d_1 x^2 + e_1 x + f_1)^{m_1} \cdot ...}$$

alakú, akkor a keresett parciális törtek nevezői pontosan a nevező szorzótényezői, míg számlálói a nevezőknél alacsonyabb fokszámú polinomok, azaz

$$
\begin{aligned}
f(x) ={} & \frac{A_1}{x - u_1} + ... + \frac{B_{1,1}}{(x - v_1)} + \frac{B_{1,2}}{(x - v_1)^2} + ... + \frac{B_{1,n_1}}{(x - v_1)^{n_1}} + ... \\
& + \frac{C_1 x + D_1}{a_1 x^2 + b_1 x + c_1} + ... \\
& + \frac{E_{1,1} x + F_{1,1}}{(d_1 x^2 + e_1 x + f_1)} + \frac{E_{1,2} x + F_{1,2}}{(d_1 x^2 + e_1 x + f_1)^2} + ... + \frac{E_{1,m_1} x + F_{1,m_1}}{(d_1 x^2 + e_1 x + f_1)^{m_1}} \\
& + ...
\end{aligned}
$$

ahol a számlálókban szereplő $A_t$, $B_{i,j}$, $C_r$, $D_r$, $E_{k,l}$, $F_{k,l} \in \mathbb{R}$ ($t \leq T$, $j \leq n_i$, $i \leq I$, $r \leq R$, $l \leq m_k$, $k \leq K$) valós számokat kell meghatároznunk.

2) komplex esetben: csak az első két típus lehetséges, a nagybetűk komplex számokat jelölnek.

**1.15. Tétel.** A fenti nagybetűkkel jelölt számok léteznek és egyértelműek.

**1.16. Megjegyzés.** *MÓDSZEREK a számlálók(ban szereplő) valós/komplex számok meghatározására:*

Közös nevezőre hozás után csak az egyenlet két oldalán szereplő két tört számlálóinak egyezését kell biztosítanunk.

– *behelyettesítés módszere:* $x$ helyére megfelelő számú tetszőleges (jól megválasztott) valós vagy komplex számokat helyettesítve a nagybetűkre, mint ismeretlenekre lineáris egyenletrendszert kapunk.

– *egyenlő együtthatók (együtthatók összehasonlítása) módszere:* A két számláló egy-egy polinom. Az algebra alaptételének (egyik) következménye: „Két polinom akkor és csak akkor egyezik meg, ha összes (megfelelő) együtthatóik megegyeznek". Vagyis az egyenlet két oldalán szereplő polinomokban a megfelelő együtthatókat megkeresve és páronként „egyenlővé téve" ismét lineáris egyenletrendszert kapunk a nagybetűkre, mint ismeretlenekre.

További gyakorláshoz ajánljuk az [SzK] és [SzF] feladatgyűjtemények kidolgozott feladatait.


### 1.1.3. Exponenciális és logaritmikus függvények

**1.17. Definíció.** Tetszőleges (rögzített) $a \in \mathbb{R}^+$ pozitív alap esetén az $a^x$ függvényeket $a$*-alapú exponenciális függvényeknek* nevezzük. Pontosabban: az

$$\exp_a(x) := a^x$$

függvényekről van szó, ahol $\mathrm{Dom}(\exp_a) = \mathbb{R}$, vagyis $x \in \mathbb{R}$ tetszőleges valós szám.

**1.18. Megjegyzés.** (i) Mint a 1.3. Definícióban említettük: a hatvány- és exponenciális függvények könnyen összetéveszthetők. Tehát: az exponenciális függvények alapja rögzített és kitevője a változó (alul „rögzített", felül „mozog").

(ii) Az $a = 1$ alap kilóg a sorból: az $1^x$ függvény nem szigorúan monoton mint az összes többi, hanem konstans. Ez sok problémát okoz még (például nincs inverze), ezért mindenkor külön meg kell vizsgálnunk, sőt legtöbbször ki is kell zárnunk az $a = 1$ esetet.

(iii) Hosszabb távon érdemes megbarátkoznunk az $\exp$ és $\exp_a$ jelölésekkel a $\sin$ és $\log_a$ függvények mintájára a 0.19. Megjegyzéssel összhangban. Például világosabban látható, hogy mi van a „zárójelen belül vagy kívül", mi a belső és külső függvény. Ezeket a 1.3. „Összetett függvények" fejezetben tárgyaljuk, és később a deriválásnál, integrálásnál lesz nagyon fontos. (Természetesen nem kell mindenáron, görcsösen ragaszkodnunk ezen új jelekhez sem!)

Az $e$ -alapú exponenciális függvényt azonban külön is meg kell említenünk (és tanulnunk):

**1.19. Definíció.** Legyen $e$ az 2.58. Definícióban meghatározott (Euler[^1]-féle) szám. Ekkor az

$$\exp(x) := e^x$$

függvényt *természetes alapú (naturalis, lat.) exponenciális függvénynek* nevezzük.

**1.20. Megjegyzés.** (i) Legyünk körültekintőek: ha az $\exp$ függvényhez nem írunk („alsó indexbe") alapot, akkor az mindenképpen $e \approx 2{,}718\,281$ alapú exponenciális függvényt jelent!

(ii) Az $e^x$ függvényt azért hívják természetesnek, mert az analízisben (határérték-, differenciálhányados- és integrál- számításkor) nagyon sokszor felbukkan váratlanul, természetesen. Ugyanezen okok miatt hívjuk $\exp$ inverzét, az $\ln$ függvényt is *természetes logaritmusnak* (ld. a 1.22. Definícióban).

(iii) Az $e$ számot a 2.57. Tétel (2.18), vagy inkább a 3.2. „Nevezetes sorhatárértékek" fejezet 3.12. Tétel

$$\sum_{n=0}^{\infty} \frac{1}{n!} = e$$

összefüggése alapján számolhatjuk ki.

[^1]: Leonhard Euler (1707-1783) svájci matematikus.


**1.21. Megjegyzés.** Az exponenciális függvények grafikonjainak tanulmányozásánál

*(ábra: Exponenciális függvények minden alapra)*

megállapíthatjuk, hogy:

(i) az $a^x$ (vagyis az $\exp_a$) függvény $y$ tengelyre való tükörképe a $b^x$ (vagyis az $\exp_b$) függvény, ahol $b$ éppen $\dfrac{1}{a}$, vagyis a tükörkép éppen az $\left(\dfrac{1}{a}\right)^x$ függvény.

Ez a jelenség nem meglepő az

$$a^{-x} = \left(\frac{1}{a}\right)^x ,$$

vagy új jelöléssel: $\exp_a(-x) = \exp_b(x)$ ahol $b = \dfrac{1}{a}$ összefüggés alapján.

(ii) sőt, általában: bármelyik $a^x$ és $b^x$ (vagyis $\exp_a$ és $\exp_b$) függvény vízszintes lineáris függvénytranszformációval (nyújtással / zsugorítással) egymásba átvihetők. Ennek alapja az

$$a^{(ux)} = (a^u)^x = b^x \quad \text{ahol} \quad u = \log_a(b)$$

összefüggés, amit új jelöléssel $\exp_a(ux) = \exp_b(x)$ ahol $b = a^u$ vagy $u = \log_a(b)$ alakban is írhatunk.

Az exponenciális függvények inverzei a logaritmusfüggvények.

**1.22. Definíció.** (i) $a \neq 1$ esetén $\log_a$ jelölje az $\exp_a$ függvény inverzét.

(ii) Ha $e$ az 2.58. Definícióban meghatározott (Euler-féle) szám, akkor a $\log_e$ függvényt *természetes alapú logaritmusnak* nevezzük, és $\ln$ (logaritmus naturalis, latin) vagy $\log$ jellel jelöljük.

**1.23. Megjegyzés.** (i) A logaritmus függvények léteznek, mert $a \neq 1$ esetén az $\exp_a$ függvények szigorúan monotonok (pl. az 1.2. „Inverz függvények" fejezet 1.42. Állítása alapján).

(ii) Speciális alapú logaritmus függvények jelölésére különböző jelek vannak használatban, nem mindegyik közismert. Például $\log$ (alap nélkül) sokszor jelöli az $\ln$ függvényt, az $\lg$ (10-alapú $\log$) sok helyen ismeretlen. Új könyv, előadás, számítógépprogram esetén érdemes a használt / használható jelöléseket tisztázni! (Sok használt jelölés magyarázata megtalálható például [SzK] függelékében.)


**1.24. Megjegyzés.** Nagyon fontos, hogy a $\log_a$ függvényeket ($a \neq 1$) a 1.21. Megjegyzés ábrájának „papírfordítás" módszerével ($y = x$ egyenesre tengelyes tükrözés - ld. a 1.2. „Inverz függvények" fejezet 1.52. Algoritmusában) tanuljuk meg:

*(ábra: Logaritmikus függvények minden alapra)*

**1.25. Megjegyzés.** A logaritmus függvények grafikonjainak részletesebb tanulmányozásakor megállapíthatjuk, hogy

(i) a $\log_a$ függvény $x$ tengelyre való tükörképe a $\log_b$ függvény ahol $b$ éppen $\dfrac{1}{a}$, vagyis a tükörkép éppen a $\log_{\frac{1}{a}}$ függvény. Ennek magyarázata:

$$\log_a(x) = -\log_b(x) \quad \text{ahol} \quad b = \frac{1}{a}$$

mert a $c := \log_a(x)$ jelöléssel kapjuk, hogy $x = a^c = \left(a^{-1}\right)^{-c} = b^{-c}$.

(ii) sőt, általában: bármelyik $\log_a$ és $\log_b$ függvény függőleges lineáris függvénytranszformációval (nyújtással / zsugorítással) egymásba átvihetők. Ennek alapja a

$$\log_b(x) = \frac{\log_a(x)}{\log_a(b)} = u \cdot \log_a(x) \quad \text{ahol} \quad u = \log_a(b) \tag{1.5}$$

összefüggés.

(iii) a fenti (1.5) összefüggés alapján ugye a számológépen is könnyen megtaláljuk bármelyik alapú logaritmus gombját (mindössze csak $\dfrac{\ln(x)}{\ln(b)}$-t kell billentyűznünk).

Az 1.21. és 1.25 Megjegyzések alapján elég az 1.21. Megjegyzés ábrájának felét (pl. csak az $a > 1$ grafikonokat) egy A/4 papírra kinyomtatnunk, hiszen papírforgatással ebből bármelyik exponenciális- vagy logaritmikus függvény grafikonját tanulmányozhatjuk (négy típus), tessék gyakorolni!


A későbbiekben többször lesz szükségünk $f(x)^{g(x)}$ alakú függvények átalakítására: a $h(x) = f(x)^{g(x)}$ képletben sem a kitevő sem az alap nem rögzített valós szám, tehát $h$ sem hatványfüggvény sem exponenciális függvény. Ezen segít az alábbi átalakítás.

**1.26. Állítás.** Legyen $h(x) = f(x)^{g(x)}$. Ekkor a logaritmus függvény segítségével

$$\ln(h(x)) = \ln\left(f(x)^{g(x)}\right) = g(x)\ln(f(x)) ,$$

amit az exponenciális függvénnyel visszaalakíthatunk:

$$h(x) = \exp(g(x)\ln(f(x))) = e^{g(x)\ln(f(x))} .$$

Az 5.40. Megjegyzésben megvizsgáljuk a $\log_x(N)$ ($x$ alapú logaritmus!!!) függvényeket is.

### 1.1.4. Trigonometrikus függvények és inverzeik

A középiskolában részletesen tanultuk ezeket a függvényeket (ismételjük át!), most csak néhány megjegyzést teszünk. Grafikonjaikat és alaptulajdonságaikat például []-ben találhatjuk meg.

**1.27. Definíció.** Forgásszöggel:

*(ábra)*

Működés közben:

[http://math.uni-pannon.hu/~szalkai/B-SIN-1.SWF](http://math.uni-pannon.hu/~szalkai/B-SIN-1.SWF)

vagy

[http://math.uni-pannon.hu/~szalkai/B-SIN-2.EXE](http://math.uni-pannon.hu/~szalkai/B-SIN-2.EXE)

**1.28. Megjegyzés.** A fenti szerkesztés nemcsak az EKG és vízhullámok, elektromos áram viselkedését magyarázza meg, hanem például ha a $45^\circ$ szögben elvágott szalámi/kolbász lefejtett bőrének, vagy szabásmintánál a ruhaujj alakját is. (Részletesen ld. [SzM] - előkészületben).

**1.29. Megjegyzés.** Ha a szokásos $\mathbb{R} \to \mathbb{R}$ grafikont tekintjük:

*(ábra)*


akkor ne feledjük, hogy $x$ csak radiánban számolható!

**1.30. Megjegyzés.** A *co-* előtag (latinul) *kiegészítőt* jelent (pl. komplementer, kolléga,...). A derékszögű háromszög $\alpha$ hegyesszögének kiegészítője is

$$co(\alpha) := 90^\circ - \alpha ,$$

tehát nem meglepő, hogy $co(\alpha)$ szinuszát elneveztük (def.) koszinusznak:

$$\cos(\alpha) \overset{def}{:=} \sin(co(\alpha)) .$$

Ez nem más, mint a jólismert

$$\cos(x) = \sin\left(\frac{\pi}{2} - x\right)$$

összefüggés!

**1.31. Összefoglalás.** A nevezetes szögek értékei (copyright © dr.Szalkai István):

| $\alpha$ | $0^\circ$ | $30^\circ$ | $45^\circ$ | $60^\circ$ | $90^\circ$ | $co$ |
|---|---|---|---|---|---|---|
| $\sin(\alpha)$ | $\dfrac{\sqrt{0}}{2}$ | $\dfrac{\sqrt{1}}{2}$ | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{\sqrt{3}}{2}$ | $\dfrac{\sqrt{4}}{2}$ | $\cos(\alpha)$ |
| $co$ | $90^\circ$ | $60^\circ$ | $45^\circ$ | $30^\circ$ | $0^\circ$ | $\alpha$ |

(Elsősorban elektronikában) hasznosak az alábbi összefüggések:

**1.32. Állítás.**

$$\begin{aligned}
A\sin(u) + B\cos(u) &= T\sin(u + v) \\
&= T\cos\left(u + v - \frac{\pi}{2}\right) = T\cos(u - w) \\
\text{ahol} \quad T = \sqrt{A^2 + B^2}, \quad &v = \operatorname{arctg}\frac{B}{A} \quad \text{és} \quad w = \operatorname{arctg}\frac{A}{B}
\end{aligned} \tag{1.6}$$

**1.33. Állítás.**

$$\arctan\left(\frac{1}{x}\right) = \frac{\pi}{2} - \arctan(x) . \tag{1.7}$$

Inkább mérnöki gyakorlatban használatosak a „szekáns" és „koszekáns" függvények:

**1.34. Definíció.** $\operatorname{cosec}(x) := \dfrac{1}{\sin(x)}$ és $\sec(x) := \dfrac{1}{\cos(x)}$.

*(ábra: cosec(x))* &nbsp;&nbsp; *(ábra: sec(x))*


A hiperbolikus függvényekkel és inverzeikkel (sinhyp, coshyp, ...) ebben a könyvben (helyhiány miatt) nem foglalkozunk, definícióik, ábráik és alaptulajdonságaik megtalálhatóak [www1] és [www6]-ban.

#### Inverzeik

Az inverzfüggvények készítésének általános elveit és problémáit az 1.2. „Inverz függvények" fejezetben ismertetjük részletesen. Különösen gondoljuk meg a szigorú monotonitással való kapcsolatát, például az 1.43. Megjegyzésben írtak alapján.

Periodikus függvények nem invertálhatóak, de a szigorúan monoton leszűkítéseik igen (ld. 1.43. Megjegyzés), tehát

**1.35. Definíció.**

$$\arcsin(x) := \left(\sin(x)\big|_{[-\frac{\pi}{2}; +\frac{\pi}{2}]}\right)^{-1} , \qquad \arccos(x) := \left(\cos(x)\big|_{[0; \pi]}\right)^{-1} .$$

*(ábra: sin(x))* &nbsp;&nbsp; *(ábra: arcsin(x))* &nbsp;&nbsp; *(ábra: cos(x))* &nbsp;&nbsp; *(ábra: arccos(x))*

**1.36. Jelölés.** A fenti „árkuszfüggvények" (arc = arcus = ív, szög [lat.]) szokásos jelölései még (elektronikában, számológépeken, számítógépprogramoknál): $\sin^{-1}$, $\cos^{-1}$, $\operatorname{inv}\sin$, $\operatorname{inv}\cos$, ... .

A különböző elnevezések és függvényjelölések részletes listáját például az [SzK] feladatgyűjtemény függelékében találjuk meg.

### 1.1.5. Egyéb függvények

Lehetetlen felsorolni a matematikában, a műszaki és egyéb gyakorlati életben használt összes függvényt. A számunkra legfontosabb függvényeket [www6]-ban soroljuk fel, [www9]-ben rengeteg egyéb függvénnyel is találkozhatunk.

Most mindössze az alábbi speciális függvények elnevezéseit ismertetjük:

**1.37. Definíció.** (i) Az $f(x) = \sum\limits_{i=0}^{n} a_i x^i$, $a_0, ..., a_n \in \mathbb{R}$ alakú függvényeket *polinomoknak* („sok tag", gör.) nevezzük. Az $f$ polinom *fokszáma* (grade, gradus, degree) $\operatorname{gr}(f) = \deg(f) := n$ ha $a_n \neq 0$.

A $0$-adfokú polinomok alakja $f(x) = c$ ($c \in \mathbb{R}$), amiket ezért *konstans* (állandó, változatlan, lat.) vagy *azonosan -c* polinomoknak / függvényeknek nevezünk, speciális jelölésük $\tilde{c}$ (ld. még a 1.1. Definícióban írtakat is).

Külön meg kell említenünk az azonosan 0 polinomot: a $\tilde{0}(x)$ függvény értéke $= 0$ minden $x \in \mathbb{R}$ esetén, grafikonja az $x$ tengely, fokszáma pedig nincs vagy


$-1$.

(ii) Az $f(x) = \sum\limits_{i=0}^{n}\sum\limits_{j=0}^{m} a_{i,j} x^i e^{b_j x}$, $a_{i,j}, b_j \in \mathbb{R}$ alakú függvényeket *kvázipolinomoknak* nevezzük (kvázi- = szinte, majdnem, lat.).

(iii) Az $f(x) = \sum\limits_{k=0}^{n} a_k \cos(kx) + b_k \sin(kx)$ alakú függvényeket *trigonometrikus polinomoknak* nevezzük. Az $f$ polinom *fokszáma* $\operatorname{gr}(f) = \deg(f) := n$ ha $a_n \neq 0$ vagy $b_n \neq 0$.

Megjegyezzük, hogy $k = 0$ esetén, $\cos(0) = 1$ és $\sin(0) = 0$ miatt $f$-et gyakran

$$f(x) = a_0 + \sum_{k=1}^{n} a_k \cos(kx) + b_k \sin(kx) \quad \text{alakban is szokás írni.}$$

(iv) Az $f(x) = \dfrac{p(x)}{q(x)}$ alakú függvényeket *racionális törtfüggvényeknek* nevezzük, ha $p$ és $q$ polinomok és $q$ nem azonosan nulla.

Soha ne feledjük a legfontosabb tanulságot:

**1.38. Megjegyzés.** Sok (matematikai vagy egyéb) tétel ugyan szemléletesen igaz, de precíz matematikai bizonyítást (vizsgálatot, utánajárást) igényel, mivel rengeteg „furcsa/veszélyes" függvény is van, amikre nem is gondolunk! Például Dirichlet bolhafüggvénye, $x\sin\dfrac{1}{x}$ (ld. az 5.7. Példa (iii) pontjában), stb.

## 1.2. Inverz függvények

A gyakorlati életben is sokszor van szükségünk visszafelé (megfordított, inverz) számolásra, például amikor megkívánt végeredményhez kell keresnünk megfelelő kezdeti értéket. Melyik az a szög, melynek szinusza $= \dfrac{23}{49}$, vagy melyik szám négyzete $121$? Bemelegítésképpen ajánljuk az alapfüggvények (és inverzeik) ábráinak tanulmányozását [www1]-en.

Ha az eredeti $y = f(x)$ összefüggést akarjuk megfordítani (nem mindig lehet!), akkor egy újabb összefüggést, egy újabb függvényt kapunk: $h(y) = x$, amit az $f$ függvény *inverzének* nevezzük. Előtte persze azt is meg kell vizsgálnunk: milyen feltételek mellett, milyen $f$ függvény invertálható egyáltalában - ezzel indul a mostani fejezet.

**1.39. Megjegyzés.** Nyilvánvalóan ha egy adott $y$-hoz keresünk $x$-et az

$$y = f(x) \tag{1.8}$$

összefüggés alapján, akkor egyik követelmény az, hogy létezzen ilyen $x$ (vagyis: $y \in \operatorname{Dom} f^{-1}$), a másik probléma pedig az, hogy hány ilyen $x$ található! A gyakorlatban ugyan örülünk, ha több lehetséges $x$ közül válaszhatjuk ki kedvencünket, de most, a matematikában függvényekkel foglalkozunk, inverz függvényt emlegetünk, tehát az $x$ egyértelműsége az elsődleges: (legfeljebb) csak egyetlen $x$ lehessen megoldása az (1.8) egyenletnek. Ezt részletezi az alábbi 1.40. Definíció és utána pár megjegyzés.


**1.40. Definíció.** Legyen $f : \mathbb{R} \hookrightarrow \mathbb{R}$ tetszőleges függvény, $\operatorname{Dom}(f) \subseteq \mathbb{R}$ tetszőleges halmaz. Az $f$ függvény *injektív* („bejdobás" lat., egy-egy értelmű, angolul one-to-one), ha $f$ különböző $x \in \operatorname{Dom}(f)$ elemekhez különböző $f(x)$ értékeket rendel,

vagyis: tetszőleges $x_1, x_2 \in \operatorname{Dom}(f)$ esetén:

$$x_1 \neq x_2 \implies f(x_1) \neq f(x_2) . \tag{1.9}$$

**1.41. Megjegyzés.** A fenti Definíció tehát éppen azt akadályozza meg, hogy az (1.8) egyenletnek egynél több $x$ megoldása legyen!

A fenti Definíció gondolatmenetét (egészét) másként is megfogalmazhatjuk: „ az $f$ függvény pontosan akkor nem invertálható, ha vannak olyan $x_1 \neq x_2$ számok amelyekre $f(x_1) = f(x_2)$. "

Egy függvény injektivitását azonban a gyakorlatban (feladatoknál) a következő alakban tudjuk ellenőrizni:

$$f(x_1) = f(x_2) \implies x_1 = x_2 , \tag{1.10}$$

vagyis az $f(x_1) = f(x_2)$ feltevésből le tudjuk-e vezetni az $x_1 = x_2$ egyenlőséget.

Most azonnal tanulmányozzuk át alaposan az [SzF] feladatgyűjtemény legelső, inverz függvényekről szóló feladat megoldásának első harmadát: invertálható-e egyáltalában az adott $f$ függvény? (Lásd az (1.48). Definíciót!) A későbbiekben is minden feladat megoldását ezzel kell kezdenünk!

A szigorúan monoton függvények (13) és (14) tulajdonságait összevetve az invertálhatóság (1.9) feltételével egy nagyon hasznos, a gyakorlatban is sokszor használt összefüggést fedezhetünk fel:

**1.42. Állítás.** Szigorúan monoton (akár növekvő akár csökkenő) függvénynek mindig van inverze, mert ekkor a hozzárendelés kölcsönösen egyértelmű. Az inverz $f^{-1}$ függvény is $f$-el megegyezően szigorúan monoton növekvő ill. csökkenő.

**Bizonyítás.** Legyen $x_1 \neq x_2$, például legyen $x_1 < x_2$.

Szigorúan növő $f$ függvény esetén (13) $\implies f(x_1) < f(x_2) \implies f(x_1) \neq f(x_2)$,

ha $f$ szigorúan csökkenő $\implies$ (14) $\implies f(x_1) > f(x_2) \implies f(x_1) \neq f(x_2)$,

tehát az (1.9) követelmény teljesül (automatikusan, a szigorúság miatt). $\square$

**1.43. Megjegyzés.** A „tisztán" (mindenhol) szigorúan monoton függvény ugyan nagyon ritka, DE (szinte) mindegyik függvénynek vannak szigorúan monoton részei, és a kérdéses függvénynek ezen szigorúan monoton kis részét tekintve már lehet invertálni a függvényt - ami ráadásul szintén szigorúan monoton.

Például így készült a $\sqrt{\phantom{x}}$ függvény az $x^2$ függvény $x > 0$ feltétellel vett szigorúan monoton (növő) darabjából, és ugyanígy vettük a $\sin$ és $\cos$ függvények leszűkítéseit a $\left[-\dfrac{\pi}{2}; +\dfrac{\pi}{2}\right]$ ill. $[0; \pi]$ intervallumokra:

$$\sin(x)\big|_{[-\frac{\pi}{2}; +\frac{\pi}{2}]}$$

szigorúan monoton növő és inverze

$$\arcsin(x) := \left(\sin(x)\big|_{[-\frac{\pi}{2}; +\frac{\pi}{2}]}\right)^{-1}$$


is szigorúan monoton növő, hasonlóan

$$\cos(x)\big|_{[0; \pi]}$$

szigorúan monoton csökkenő és inverze

$$\arccos(x) := \left(\cos(x)\big|_{[0; \pi]}\right)^{-1}$$

is szigorúan monoton csökkenő.

Tipikus példa a Lamberth-féle $W$ függvény: $W(x)$-nek „nincs képlete", csak:

$$W(x) := \left(x e^x\right)^{-1}$$

vagyis a $w(x) := x e^x$ ($x > 0$) szigorúan monoton növő függvény inverze (ld.pl.[www9]). Érdemes átolvasnunk még a 0.34. Magyarázatot is.

**1.44. Megjegyzés.** A függvény grafikonján geometriailag is tanulmányozhatjuk az invertálhatóság feltételét. Adott $y_0$ esetén az (1.8) egyenletnek megfelelő

$$y_0 = f(x)$$

egyenlet megoldása grafikusan ugye nem más, mint az $y = y_0$ egyenletű vízszintes egyenessel kell elmetszenünk az $f$ függvény grafikonját. Ez pedig azt jelenti, hogy az $f$ függvény pontosan akkor invertálható, ha:

„minden vízszintes egyenessel legfeljebb 1 metszéspontja lehet az $f$ függvény grafikonjának" ! $\quad (\ast)$

Ez nem is meglepő az 1.52. Algoritmus elolvasása után: A 0.17. Összefoglalásban említettük, hogy minden $f$ függvény grafikonját minden függőleges egyenes legfeljebb 1 pontban metszhet, tehát ez érvényes az $f^{-1}$ inverzfüggvényre is. Mivel pedig az $y = x$ egyenesre történő tengelyes tükrözés után (és előtt is) a függőleges egyenesek képe vízszintes, teljesen természetes a $(\ast)$ megállapítás!

Ez nem csak azt jelenti, hogy például az egész (hosszú) $\sin$ függvény nem invertálható, hanem azt is, hogy inverzét, a $\sin^{-1}$ függvényt (régiesen $\arcsin$) sem lehet a függőleges $y$ tengely mentén többször jobbra-balra csavarodva rajzolni (mint jópár régebbi zh-ban)!

**1.45. Megjegyzés.** Periodikus függvénynek (nyilván) nincs inverze! Erre nincs is szükségünk, hiszen felesleges az összes (periodikusan) ismétlődő $x$ értéket mind megkeresnünk: az „ $x_0 + k \cdot p$ ($k \in \mathbb{Z}$) " képlet már a kisujjunkban van.

Persze, hogy megint egy alkalmas intervallumra szűkítjük le az $f$ periodikus függvényt (mint például a $\cos$ függvényt a $[0; \pi]$ intervallumra), ami az $f$ függvény (lehetőleg) összes értékét tartalmazza, majd EZT a leszűkített $f|_H$ függvényt invertáljuk, és ezt a (leszűkített függvényből kapott) inverz $(f|_H)^{-1}$ függvényt nevezzük (egyszerűen) az eredeti $f$ függvény inverzének! (függvény leszűkítését az 0.20. Definícióban ismertettük.)

Ezentúl, ha az „$f$ invertálható" kifejezést használjuk, akkor már kellőképpen le van szűkítve a függvény, ügyeljünk mindig az értelmezési tartományra! Páros függvényeknél hasonló a helyzet, ld. az alábbi 1.57. Megjegyzésben.


**1.46. Megjegyzés.** Egyes jegyzetekben megkívánják az invertálandó $f$ függvényről, hogy szürjektív (ráképezés) illetve bijekció legyen. Az Értékkészlet (6) definíciója miatt az $f : \operatorname{Dom}(f) \to \operatorname{Im}(f)$ leképezés amúgy is mindig szürjektív, az $f : \mathbb{R} \hookrightarrow \mathbb{R}$ jelölés pedig csak jelképes.

**1.47. Megjegyzés.** Röviden felsoroljuk az ide vonatkozó magyar és külföldi elnevezéseket tetszőleges $f : A \to B$ függvényeket illetően ($\operatorname{Dom}(f) = A$ de csak $\operatorname{Im}(f) \subseteq B$):

függvény (függőség) = egyértelmű leképezés (function, mapping),

injekció (bejdobás, lat.) = egy-egy értelmű vagy kölcsönösen egyértelmű leképezés (one-to-one),

szürjekció (rájdobás, lat.) = ráképezés (onto),

bijekció (kettőjdobás, lat.) = kölcsönösen egyértelmű ráképezés (one-to-one and onto), ahol

**Definíció:** (i) $f$ szürjektív, ha $\operatorname{Im}(f) \supseteq B$,

(ii) $f$ bijektív, ha injektív és szürjektív.

Ne feledjük: Alea iacta est<sup>7)</sup>, hiszen iacta = dobni (lat.) ahonnan magyarosodott a *jekció* végződés.

Eddig az inverzfüggvény létezését tárgyaltuk, most pedig pontosítjuk, mi is az $f^{-1}$ inverzfüggvény, amit keresünk.

**1.48. Definíció.** (Inverz függvény) Legyen $f : \mathbb{R} \hookrightarrow \mathbb{R}$, pontosabban $f : \operatorname{Dom}(f) \to \operatorname{Im}(f)$ tetszőleges függvény, amely invertálható a $\operatorname{Dom}(f) \subseteq \mathbb{R}$ (tetszőleges) halmazon.

Az $f$ függvény *inverz-függvénye* (= megfordított, latin) az $f^{-1}$-el jelölt függvény, amelyre: $f^{-1} : \operatorname{Im}(f) \to \operatorname{Dom}(f)$, vagyis

$$\operatorname{Dom} f^{-1} = \operatorname{Im}(f) \quad \text{és} \quad \operatorname{Im} f^{-1} = \operatorname{Dom}(f) , \tag{1.11}$$

és hozzárendelési szabálya

$$f^{-1}(y) = x \overset{def}{\iff} f(x) = y \quad (\forall y \in \operatorname{Im}(f) ; \forall x \in \operatorname{Dom}(f)) . \tag{1.12}$$

**1.49. Megjegyzés.** Más jelölésekkel: ha $f : x \mapsto y$ akkor (és csak akkor) $y \mapsto x : f^{-1}$ vagyis $f^{-1} : y \mapsto x$, ezért néha szokás az $\operatorname{Im}(f) \to \operatorname{Dom}(f) : f^{-1}$ „jelölés" is.

Tulajdonképpen minden egyszerű: $f$ és $f^{-1}$-ben mindössze csak $x$ és $y$-t, valamint $\operatorname{Dom}$ és $\operatorname{Im}$-t kell felcserélni.

**1.50. Definíció.** Az előző 1.48. Definíció szavakban: Ha az $f$ függvény által létesített leképezés kölcsönösen egyértelmű (azaz injektív) $\operatorname{Dom}(f)$-en, akkor az $f$ függvény *inverz függvényén* értjük azt az $f^{-1}$ függvényt, amelynek értelmezési tartománya $=$ az $f$ értékkészlete, az $f^{-1}$ hozzárendelési törvénye pedig a következő: egy tetszőleges $y_0 \in \operatorname{Im}(f) = \operatorname{Dom} f^{-1}$ értékhez olyan $x_0 = f^{-1}(y_0)$ értéket rendel, amely helyen az $f$ függvény az $y_0$ értéket vette fel, azaz $y_0 = f(x_0)$.

Képletben: $f^{-1}(y_0) = x_0 \overset{def}{\iff} f(x_0) = y_0 \quad (\forall y_0 \in \operatorname{Im}(f) ; x_0 \in \operatorname{Dom}(f))$.

---

<sup>7)</sup> „A kocka el van vetve" (lat.), Julius Caesar


Tehát összefoglalva:

**1.51. Állítás.** Egy tetszőleges $f : \mathbb{R} \hookrightarrow \mathbb{R}$ függvény pontosan akkor invertálható (van $f^{-1}$ inverzfüggvénye) ha $f$ injektív az egész $\operatorname{Dom}(f)$ halmazon.

Most pedig keressük is meg az $f^{-1}$ inverzfüggvényt, hogyan kell egy adott $f$ függvényt (képletet) invertálni (most jön az „invertálás").

**1.52. Algoritmus.** ($f^{-1}$ grafikonja) Ha előttünk van az $f$ függvény grafikonja, akkor $f^{-1}$ grafikonja nem más, mint az $y = x$ egyenesre tengelyesen tükrözni az eredeti $f$ függvény grafikonját.

Mint minden egyenesre történő tengelyes tükrözést, ezt is úgy kell végrehajtanunk, hogy a papírt az egyenes tengely (mint hurkapálcika) körül $180^\circ$-al térben elforgatjuk (a hurkapálcika-tengely helyben marad), és a papír hátoldalát fénnyel szemben szemlélve máris látjuk az $f^{-1}$ inverzfüggvény ábráját! Ez még a mai számítógépek korában is gyors és egyszerű (és komoly!) módszer!

Az invertálhatóság feltételének ellenőrzésénél, az 1.44. Megjegyzésnél vizsgált függőleges és vízszintes egyenesek is jelen „papírforgatós" szemléltetéshez kapcsolódnak.

Javasoljuk az alapfüggvények grafikonjain (ld.pl. [www1]) tanulmányozni a „papírforgatás" módszerét!

Végül ismét megemlítjük, hogy általában minden tengelyes (egyenesre való) tükrözést is papírforgatással kell csinálni - mint egyes általános- és középiskolákban!

No jó, de hogyan kapjuk meg $f^{-1}$ képletét?

**1.53. Algoritmus.** Legyen $f : \operatorname{Dom}(f) \to \operatorname{Im}(f)$ tetszőleges függvény, amely invertálható a $\operatorname{Dom}(f) \subseteq \mathbb{R}$ (tetszőleges) halmazon. Az $f^{-1}$ inverzfüggvény képletét „egyszerűen" az (1.12), másképpen az

$$y = f(x)$$

egyenletet $x$-re megoldva kapjuk meg ($y$ mint paraméter).

A számolás során ne feledkezzünk meg $\operatorname{Dom} f^{-1}$-ről, azaz az $y$-ra szükséges kikötésekről sem!

Egy jótanács: bár a számolások után az $f^{-1}$ függvényt is a hagyományos alakban: $y = f^{-1}(x)$ szeretnénk felírni („$y$ függ $x$-től"), de az $x$ és $y$ betűket csak a a számítások befejezése után cseréljük meg! Nagyon zavaró, ha még azt is fejben kellene tartanunk (és számításba is vennünk), hogy $x$ és $y$ az eredeti vagy már az új (megcserélt) szerepében van.

Most azonnal tanulmányozzuk át alaposan az [SzF] feladatgyűjtemény inverz függvényt kereső egyik feladatának megoldását elejétől végéig!

Függvények invertálhatóságának vizsgálatára és az inverzfüggvény megkeresésére kidolgozott gyakorló feladatokat találhatunk [SzK], [SzF] és [www0]-ben.

Néhány további fontos megjegyzéssel zárjuk a fejezetet.

**1.54. Megjegyzés.** Az (1.12) definícióból következik, hogy ha $f : \operatorname{Dom}(f) \to \operatorname{Im}(f)$ invertálható függvény a $\operatorname{Dom}(f) \subseteq \mathbb{R}$ (tetszőleges) halmazon, akkor

$$x = f^{-1}(f(x)) \quad (\forall x \in \operatorname{Dom}(f)) \tag{1.13}$$


és

$$y = f\left(f^{-1}(y)\right) \quad (\forall y \in \operatorname{Im}(f)) , \tag{1.14}$$

vagy absztrakt algebrai formában

$$f^{-1} \circ f = \operatorname{id}_D \quad \text{és} \quad f \circ f^{-1} = \operatorname{id}_R$$

ahol szokás szerint $D = \operatorname{Dom}(f)$ és $R = \operatorname{Im}(f)$.

A fenti képletek természetesen nem $f^{-1}$ definíciója hanem csak következmények, és hangsúlyozzuk, hogy $\operatorname{Dom}(f)$ esetleg már annyira le lett szűkítve, hogy $f$ invertálható legyen a leszűkített $\operatorname{Dom}(f) \subseteq \mathbb{R}$ halmazon.

Gondoljuk át az alábbi 1.55. Tétel és 1.56. Megjegyzésben írtakat is!

**1.55. Tétel.** Ha $f : D \to R$ invertálható függvény és inverze $f^{-1} : R \to D$, akkor az $f^{-1}$ függvény is invertálható, és inverze $f$, rövidebben

$$\left(f^{-1}\right)^{-1} = f$$

ahol $D = \operatorname{Dom}(f) = \operatorname{Im} f^{-1}$ és $R = \operatorname{Im}(f) = \operatorname{Dom} f^{-1}$.

(A Tétel egyszerűen következik a fejezet eddigi részéből, különösen az (1.14) és (1.12) összefüggésekből.)

**1.56. Példa.** Vizsgáljuk meg néhány alapfüggvény és inverzének kapcsolatát. Ne feledjük, hogy minden függvénynél és összefüggésnél az Értelmezési tartomány (kikötés, $\operatorname{Dom}$) is nagyon lényeges!

Az $\exp(x) = e^x$ és $\ln(x)$ függvények egymás inverzei, tehát (1.13) és (1.14) alapján

$$e^{\ln(x)} = x \quad \text{ha} \quad x > 0$$

és

$$\ln(e^x) = x \quad \forall x \in \mathbb{R} .$$

Hasonlóan

$$\begin{aligned}
\operatorname{tg}(\operatorname{arctg}(x)) &= x & &\forall x \in \mathbb{R} , \\
\operatorname{arctg}(\operatorname{tg}(x)) &= x & \text{ha} \quad &-\frac{\pi}{2} < x < \frac{\pi}{2} , \\
\sin(\arcsin(x)) &= x & \text{ha} \quad &-1 \leq x \leq +1 , \\
\arcsin(\sin(x)) &= x & \text{ha} \quad &-\frac{\pi}{2} \leq x \leq +\frac{\pi}{2} , \\
\cos(\arccos(x)) &= x & \text{ha} \quad &-1 \leq x \leq +1 , \\
\arccos(\cos(x)) &= x & \text{ha} \quad &0 \leq x \leq \pi ,
\end{aligned}$$

rövidebb jelöléssel:

$$\begin{aligned}
\exp \circ \ln = \operatorname{id}_{\mathbb{R}^+} &, & \ln \circ \exp = \operatorname{id}_{\mathbb{R}} \\
\operatorname{tg} \circ \operatorname{arctg} = \operatorname{id}_{\mathbb{R}} &, & \operatorname{arctg} \circ \operatorname{tg} = \operatorname{id}_{[-\frac{\pi}{2}; \frac{\pi}{2}]} \\
\sin \circ \arcsin = \operatorname{id}_{[-1; +1]} &, & \arcsin \circ \sin = \operatorname{id}_{[-\frac{\pi}{2}; \frac{\pi}{2}]} \\
\cos \circ \arccos = \operatorname{id}_{[-1; +1]} &, & \arccos \circ \cos = \operatorname{id}_{[0; \pi]}
\end{aligned}$$

(a jelölést a következő 1.3. „Összetett függvények" fejezetben az 1.61. Definícióban vezetjük be).

Gondoljuk át alaposan a fenti képletek értelmezési tartományait!


**1.57. Állítás.** Páros függvény sohasem lehet invertálható (az eredeti $\operatorname{Dom}(f)$-en). Páratlan függvény lehet invertálható, és egy páratlan függvény inverze is páratlan.

**1.58. Megjegyzés.** Páros függvényeket le kell szűkítenünk legalább $\mathbb{R}^+$-ra (esetleg még kisebb halmazra), a kapott inverz függvény elé esetleg kitesszük a $\pm$ jelet. Gondoljuk meg, hogy például az $x^2$, $\cos$, $x^2 - x^4$ függvények inverzeit milyen leszűkítés után kaphatjuk meg. (Az $x^2 - x^4$ függvény vizsgálatát megtaláljuk az [SzF] feladatgyűjteményben.)

**1.59. Megjegyzés.** Régebbi számológépeken az INV „előválasztó" gomb, az újabbakon a 2nd váltógomb és az „eredeti" függvénygomb (pl. $\exp$, $\sin$, stb.) segítségével számíthatjuk ki néhány alapfüggvény inverzét.

## 1.3. Összetett függvények

Nos, az eddigi alapfüggvényeinkből hogyan építhetünk fel bonyolultabb „összetett" képleteket? A négy alapművelet ($+, -, \cdot, /$) jól ismertek. Hogyan készült, mit is jelent például a $\ln\dfrac{x+1}{x-2}$ függvény? A most következő fejezet ezt vizsgálja részletesen. Bár kissé nehéz rész következik, de a 5.2. „Formális deriválás" és több más fejezetben szükségünk lesz rá, tehát rágjuk át magunkat rajta alaposan!

**1.60. Példa.** A $h(x) = \ln\dfrac{x+1}{x-2}$ függvényérték kiszámításához tehát legelőször kap(t)unk egy $x \in \mathbb{R}$ valós számot.

Először (nyilván) a $t = \dfrac{x+1}{x-2} = g(x)$ közbülső értéket („zárójelen belül") kell kiszámítanunk, ügyelve a kikötésre ($x \in \operatorname{Dom}(g)$), vagyis hogy az eddigi számolásainknál ne kapjunk „Error" üzenetet a számológépen. Pihenünk egyet.

Ezután már csak a $t$ értékre lesz szükségünk, $x$-et el is felejtettük. A zárójelen kívül levő $\ln$ függvényt számoljuk ki, pontosabban $\ln(t) = f(t)$ értékét, természetesen most is ügyelnünk kell a kikötésre: $t \in \operatorname{Dom}(f)$.

Ez utóbbi azt jelenti, hogy hiába tudtuk $t$ értékét például az $x = 1$ értékéből kiszámítani „csont nélkül", de végülis a második számítási menetben nem tudtunk tovább menni, ezért (és ekkor) esik ki például az $x = 1$ érték a $h(x) = \ln\dfrac{x+1}{x-2}$ függvény értelmezési tartományából!

Egy másik hasonlat: egy összetett függvény lényegében egy szerkezet kétlépcsős gyártási folyamata: mindkét gyártási fázisnak sikeresnek kell lennie a végtermék elkészüléséhez.

Az előző példát foglaljuk össze általában.

**1.61. Definíció.** (Összetett függvény) Legyenek $g : A \to B$ és $f : C \to D$ tetszőleges függvények, $A = \operatorname{Dom}(g)$, $C = \operatorname{Dom}(f)$, $\operatorname{Im}(g) \subseteq B$ és $\operatorname{Im}(f) \subseteq D$. (Általában $A, B, C, D \subseteq \mathbb{R}$ a valós számok valamely intervallumai.)

Tegyük még fel, hogy

$$\operatorname{Im}(g) \cap \operatorname{Dom}(f) \neq \emptyset . \tag{1.15}$$


Ekkor az $f$ és $g$ függvények *kompozíciója* (*összetett függvénye*) $h = f \circ g$, (olvasd: $f$ *kör* / *kompozíció* $g$), ha hozzárendelési szabálya

$$h(x) = (f \circ g)(x) := f(g(x)) \tag{1.16}$$

és értelmezési tartománya:

$$\mathrm{Dom}(f \circ g) := \{ x \in \mathrm{Dom}(g) \mid g(x) \in \mathrm{Dom}(f) \}$$

tehát $\mathrm{Dom}(f \circ g) \subset \mathrm{Dom}(g)$ és $f \circ g : A \to D$.

(1.16) alapján $g$-t $h$ *belső-*, míg $f$-et *külső* függvényének nevezzük.

[SzF]-ban nem csak részletesen megoldott feladatokat találunk összetett függvények készítésére és vizsgálatára, hanem gyakorlati tanácsokat is a technikai problémák megoldására is.

**1.62. Megjegyzés.** (i) Ha adott két függvényünk, akkor persze kétféleképpen csatlakoztathatjuk őket egymáshoz: $f \circ g$ és $g \circ f$ általában nem ugyanaz (vigyázzunk!)! Az előző 1.61. Definícióban csak meg kell cserélnünk $f$ és $g$ szerepét:

$$(g \circ f)(x) := g(f(x)) \tag{1.17}$$

és

$$\mathrm{Dom}(g \circ f) := \{ x \in \mathrm{Dom}(f) \mid f(x) \in \mathrm{Dom}(g) \} . \tag{1.18}$$

Általában $f \circ g \neq g \circ f$, pl. $\dfrac{1}{\mathrm{tg}(x)} \neq \mathrm{tg}\dfrac{1}{x}$, ugye? (Csak egy-két kivétel van.)

(ii) Érdekes azonban, hogy bármely $f$ függvény a saját $f^{-1}$ inverzével kommutál (felcserélhető):

$$f^{-1}(f(x)) = f\left(f^{-1}(x)\right) = x \tag{1.19}$$

vagyis

$$f^{-1} \circ f = \mathrm{id}_U \quad \text{és} \quad f \circ f^{-1} = \mathrm{id}_V , \tag{1.20}$$

de ne hagyjuk magunkat becsapni: általában a fenti két függvény értelmezési tartománya ($U$ és $V$) nem ugyanaz, amint ezt az előző fejezet 1.56. Példájában megvizsgáltuk!

(iii) Az érdeklődők elgondolkozhatnak a konstans $\tilde{c}$ függvények újabb furcsa tulajdonságán: mi lehet $\tilde{c} \circ f$ és $f \circ \tilde{c}$?

(iv) Gyakori tévedés a kompozíció és a szorzás jelét összetéveszteni. Ne feledjük:

$$\left(\sin \circ \sqrt{\phantom{x}}\,\right)(x) = \sin\left(\sqrt{x}\right) , \quad \left(\sqrt{\phantom{x}} \circ \sin\right)(x) = \sqrt{\sin(x)} ,$$

$$\left(\sin \cdot \sqrt{\phantom{x}}\,\right)(x) = \sin(x) \cdot \sqrt{x} = \sqrt{x} \cdot \sin(x) = \left(\sqrt{\phantom{x}} \cdot \sin\right)(x) ,$$

vagy általános képletekkel:

$$(f \cdot g)(x) = f(x) \cdot g(x) = g(x) \cdot f(x) = (g \cdot f)(x) .$$


Nagyon alaposan tanulmányozzuk az [SzK] és [SzF] feladatgyűjteményekben részletesen kidolgozott feladatokat: egy egyszerű összetételben is sok banánhéj rejtőzködik! Az értelmezési tartományokra is nagyon figyeljünk!

Most csak egy-két technikai és szemléletbeli tanácsot ismertetünk.

**1.63. Megjegyzés.** Általában a belső és külső függvényeket az $x$ változóval szoktuk megadni, például $f(x) := \sin(x)$, $g(x) := \sqrt{x}$, mi lesz $f \circ g$? Mielőtt a sok $x$-be belegabalyodnánk, tanácsoljuk, hogy a külső függvényt egy új betűre írjuk át, például $f(t) = \sin(t)$, majd a belső függvényt $t$-vel azonosítanunk: $t = g(x) = \sqrt{x}$. Ekkor egyszerűen

$$(f \circ g)(x) = f(g(x)) = f(t) = \sin(t) = \sin\sqrt{x} .$$

(Itt éppen az 0.13. Megjegyzésben írtakról van szó.)

Gyakoroljuk a rövidebb írásmódot is: a fenti példában $f \circ g = \sin\sqrt{\dots}$.

Másképpen elmondva: a külső függvény képletében hajtsuk végre a szövegszerkesztő „Keresés és Csere" utasítását a következő párbeszéddel: „Mit cserél" - „$x$", „Mire cserél" - „..." és ebbe a legutolsó ablakba írjuk be $g(x)$ képletét zárójelekben! Próbáljuk ki: a legújabb szövegszerkesztők erre is képesek!

Az alábbi 1.64. Példában ezt részletesen végigszámoljuk, további példákat a [SzK] és [SzF] feladatgyűjteményekben találhatunk.

**1.64. Példa.** Legyen $f(x) := \dfrac{1 + x^2 - 3x}{\ln(2 - x) + 1}$ és $g(x) := 5 - x$, adjuk meg az $f \circ g$-t.

Megoldás:

$$f(g(x)) := \frac{1 + (5 - x)^2 - 3(5 - x)}{\ln(2 - (5 - x)) + 1} . \tag{1.21}$$

Az összetett $f(g(x))$ függvény értelmezési tartománya Házi Feladat vagy lásd [SzF]-ben.

**1.65. Megjegyzés.** Később, például az 5.2. „Formális deriválás" fejezetben éppen „fordítva" kell összetett függvényeket vizsgálnunk: egy adott (bonyolult) képletről kell megmondanunk az összetétel mikéntjét: meg kell keresnünk a belső- és a külső függvényeket. Jó, ha már most gyakorolunk ilyeneket!

**1.66. Példa.** Például

$$h(x) = e^{x^2} = \exp x^2 = f \circ g = \exp \circ \,\mathrm{id}^2 \tag{1.22}$$

ahol

$$f(x) = \exp(x) = e^x$$

az exponenciális függvény, és

$$g(x) = x^2$$

a $2$-rendű hatványfüggvény („$x^2$ parabola").

**1.67. Megjegyzés.** Az előző példában is látszik, hogy az alapfüggvények modern, $f(x)$-szerű (pl. $\sin(x)$-hez hasonló) jelölései hasznosak, ezeket is érdemes


gyakorolnunk. Próbáljuk meg például $\sqrt{x}$ helyett $\sqrt{\phantom{x}}$ függvényt írni, $\dfrac{1}{x}$ helyett $\dfrac{1}{\square}$-ot, stb. Ekkor például

$$e^{1/x} = \exp\left(\frac{1}{x}\right) = \left(\exp \circ \left(\frac{1}{\square}\right)\right)(x)$$

vagy

$$\sqrt{2 - x} = \sqrt{\phantom{x}} \circ (2 - x)$$

ebből az írásmódból hátha jobban látszik a külső és belső függvény!

Még egy módszer: a bonyolult képletnél azt gondoljuk végig, hogy $x$-ből kiindulva egy egyszerű számológéppel milyen sorrendben, belülről kifelé számolnánk ki a végeredményt, hol tarthatnánk szünetet, hol lehetne $x$ értékét végleg elfelejteni. (Sajnos a modern, „kétsoros" számológépekbe már beírhatjuk az egész képletet, nem nekünk kell a függvények összetételével bajlódni!)

A belső függvény a „zárójelen belül" van, tehát a $h(x) := \dfrac{1}{\mathrm{tg}(x)}$ függvényben $\mathrm{tg}(x)$ a belső, hiszen a törtvonal zárójelet pótol, és a külső függvény $f(x) = \dfrac{1}{x}$ a reciprok (-függvény).

Csak érdekességképpen említjük meg:

**1.68. Állítás.** Ha $f$ és $g$ injektív, akkor $f \circ g$ és $g \circ f$ is injektív,
ha $f$ és $g$ szürjektív, akkor $f \circ g$ és $g \circ f$ is szürjektív,
ha $f$ és $g$ bijektív, akkor $f \circ g$ és $g \circ f$ is bijektív.
Ha $f \circ g$ injektív akkor $g$ szükségképpen injektív,
ha $f \circ g$ szürjektív akkor $f$ szükségképpen szürjektív.


# 2. fejezet

# Sorozatok

Függvények viselkedését nagyon nagy $x$ helyeken már nem tudjuk csak behelyettesítésekkel megvizsgálni, ehhez új módszer: a határérték (határátmenet) vizsgálata szükséges. Ezt a módszert először sorozatokon (mint speciális függvények) gyakoroljuk.

## 2.1. Általános fogalmak

Saját bőrén bizonyára már mindenki tapasztalta: sorozatban jönnek a ... feladatok/gyerekek/csapások - most valós (komplex) számok következnek sorozatban, ráadásul végtelen sok:

**2.1. Definíció.** (*Numerikus (=szám, latin) sorozatok*)
(i1) *„Naiv" (szemléletes) meghatározás:* Végtelen sok valós szám „rendezett egymásutánja":

$$a_0, a_1, a_2, \dots a_n, \dots$$

... (nincs vége!) - egy ilyent nevezünk *sorozatnak*.

(i2) *Precíz definíció:* Tetszőleges $f : \mathbb{N} \to \mathbb{R}$ függvényt *sorozatnak* nevezünk.

Az $f(n)$ értéket általában $a_n$-el jelöljük.

(ii) A sorozat „egészét" (mivel egyetlen objektum) $\{a_n\}$ vagy $(a_n)_{n=0}^{\infty}$-el vagy egyszerűen csak $(a_n)$-al jelöljük.

(iii) Az $a_n$ valós számot a sorozat $n$-edik *elemének* vagy *tagjának* hívjuk, míg az $n$ természetes számot az $a_n$ elem *indexének* (mutató, lat.) vagy *sorszámának* nevezzük.

**2.2. Megjegyzés.** (i) Alaposabban átgondolva a fenti (i2) definíció nem is olyan meglepő: amikor az (i1) pont szerint soroljuk fel az $a_0, a_1, a_2, \dots a_n, \dots$ számokat, akkor a „nulladik", „első", ... , „$n$-edik", ... helyekhez - pontosabban ezekhez a sorszámokhoz - rendelünk hozzá egy-egy (megfelelő) valós számot. Ez a hozzárendelés valóban egy $\mathbb{N} \to \mathbb{R}$ függvény.

(ii) Ne feledjük: minden sorozat a „nulladik" elemtől, $a_0$-tól indul. (Ezen még a 2.42. Tétel sem változtat!)

**2.3. Definíció.** Az $(a_n)$ sorozat *állandó* (*konstans* vagy *stagnáló*, lat.), ha mindegyik tagja ugyanaz, másképpen írva: minden $n \in \mathbb{N}$ indexre $a_n = a_0$.


Néhány „kicsi" (ez relatív) $n$-re számológéppel ugyan kiszámolhatunk néhány elemet, de hogyan viselkednek a sorozatok „már nem látható" elemei: amikoris $n$ „minden (emberi) határon túl" nő, „végtelen naggyá" válik? Ez a fejezet fő vizsgálati célja!

Kezdjük néhány egyszerű megállapítással. Egy sorozat növekedése/csökkenése (*monotonitása*) vagy *korlátossága* szemléletesen érthetőek, csak matematikai nyelven kell megfogalmaznunk.

**2.4. Definíció.** Az $(a_n)$ sorozat *monoton növekvő*, ha minden $n \in \mathbb{N}$ indexre $a_{n+1} \geq a_n$ és *szigorúan monoton növekvő*, ha minden $n \in \mathbb{N}$ indexre $a_{n+1} > a_n$.

Az $(a_n)$ sorozat *monoton csökkenő*, ha minden $n \in \mathbb{N}$ indexre $a_{n+1} \leq a_n$ és *szigorúan monoton csökkenő*, ha minden $n \in \mathbb{N}$ indexre $a_{n+1} < a_n$.

**2.5. Megjegyzés.** (i) A fenti Definíció valóban a szemléletes megfogalmazást teszi pontosabbá: a következő elem $a_{n+1}$ nagyobb / kisebb az előtte levőnél, ennek megfelelően fordul meg ide - oda a $\lessgtr$ jel.

(ii) Vigyázzunk: ha a monotonitás nem szigorú, akkor a sorozat egyik-másik része (akár hosszabb is) állandó (konstans) is lehet!

**2.6. Definíció.** (i) Az $(a_n)$ sorozat *(kétoldalról) korlátos*, ha létezik olyan $K \in \mathbb{R}^+$ pozitív szám (a sorozat *korlátja*), amelyre teljesül:

$$|\,a_n\,| < K \qquad \text{(abszolút érték!)} \tag{2.1}$$

azaz

$$-K < a_n < K \qquad \text{(abszolút érték!)} \tag{2.2}$$

minden $n \in \mathbb{N}$ index esetén.

(ii) Az $(a_n)$ sorozat *alulról korlátos*, ha létezik olyan $K_a \in \mathbb{R}$ szám (a sorozat *alsó korlátja*), amelyre teljesül:

$$K_a < a_n \tag{2.3}$$

minden $n \in \mathbb{N}$ index esetén.

(iii) Az $(a_n)$ sorozat *felülről korlátos*, ha létezik olyan $K_f \in \mathbb{R}$ szám (a sorozat *felső korlátja*), amelyre teljesül:

$$a_n < K_f \tag{2.4}$$

minden $n \in \mathbb{N}$ index esetén.

**2.7. Megjegyzés.** (o) Könnyen beláthatjuk: (2.1) azaz (2.2) éppen azt jelenti, hogy az $a_n$ elemek nem szóródnak szét nagyon a számegyenesen: $0$-tól legfeljebb $K$ (vagyis maximalizált) távolságra lehetnek.

(i) Figyeljük meg a fenti (ii) és (iii) definíciókban levő apró eltérést: mindössze a $\lessgtr$ jel fordul meg!

(ii) Vigyázzunk: jelző nélkül a korlátos szó mindkettőt egyszerre jelenti (alulról+felülről), ld. az alábbi 2.8. Állítást is! A „kétoldali" jelzőt általában nem szoktuk kitenni!


(iii) Nyilvánvalóan ha egy sorozatnak van valamelyik korlátja (alsó vagy felső), akkor abból a fajta (alsó vagy felső) korlátból több is (végtelen sok) van. Ez azt is jelenti hogy a definícióban szereplő $<$ jelek bármelyikét akár ki is cserélhetjük $\leq$ jelekre, ha akarjuk.

(iv) Sok feladatban nem tudjuk konkrétan a korlátokat meghatározni, de az is elég, hogy létezésükről (egzisztencia, lat.) meggyőződünk.

(v) Kereshetnénk a korlátok között legjobbakat$^{1)}$ (van-e egyáltalában), ezeket *legnagyobb alsó korlátnak* (*supremum*) illetve *legkisebb felső korlátnak* (*infimum*) nevezik. Ezekkel mi most nem foglalkozunk.

**2.8. Állítás.** A (2.3) és (2.4) egyenlőtlenségeket a (2.2) egyenlőtlenséggel összevetve könnyen beláthatjuk (akár szemléletesen is), hogy bármely sorozat korlátos akkor és csak akkor ha alulról is és felülről is korlátos.

(Vigyázat: a három egyenlőtlenségben szereplő $K$ nem feltételenül ugyanazt a valós számot jelöli!)

Sok gyakorló feladatot találunk, részletes megoldásokkal [SzK], [SzF] és [www0]-ben.

## 2.2. Sorozat véges határértéke

Ebben a fejezetben vizsgáljuk a végtelen sorozatok legfontosabb tulajdonságát: hová közelednek (ha egyáltalában) a sorozat tagjai $n \to \infty$ („bődült nagy") esetén - amikoris $n$ és az $a_n$ tagok látókörünkön már kívül vannak: sem kiszámolni, sem elképzelni nem tudjuk. Közelednek a tagok (mind vagy csak néhány) valamely valós számhoz? Ez a gyakorlatban leginkább közelítő számításoknál lényeges: egyre több tizedesjegyet számolunk ki, de jó -e egyáltalában a módszer? Digitális mérőműszernél is jó, ha a kijelzett szám ingadozása csillapodik, egyre több számjegye pontos.

Vizsgáljunk meg egy egyszerű példát.

**2.9. Példa.** Legyen például $a_n := \dfrac{n^2 - 42n + 9350}{3n^2 - 29.4n - 6}$. Ekkor

$$a_0 = \frac{0^2 - 42 \cdot 0 + 9350}{3 \cdot 0^2 - 29.4 \cdot 0 - 6} = \frac{-4675}{3} \approx -1558.333\overline{3} ,$$

$a_{10}$ nem értelmezhető,

$$a_{100} = \frac{100^2 - 42 \cdot 100 + 9350}{3 \cdot 100^2 - 29.4 \cdot 100 - 6} \approx 0.559\,991 ,$$

$$a_{1000} = \frac{1000^2 - 42 \cdot 1000 + 9350}{3 \cdot 1000^2 - 29.4 \cdot 1000 - 6} \approx 0.325\,642 ,$$

$$a_{10\,000} = \frac{10000^2 - 42 \cdot 10000 + 9350}{3 \cdot 10000^2 - 29.4 \cdot 10000 - 6} \approx 0.332\,290 ,$$

$$a_{100\,000} = \frac{100000^2 - 42 \cdot 100000 + 9350}{3 \cdot 100000^2 - 29.4 \cdot 100000 - 6} \approx 0.333\,226 ,$$

---

$^{1)}$ mint amikor a bő röndöt/nadrágszíjat húzzuk mind szorosabbra ...


$$a_{1\,000\,000} = \frac{1000000^2 - 42 \cdot 1000000 + 9350}{3 \cdot 1000000^2 - 29.4 \cdot 1000000 - 6} \approx 0.333\,322 ,$$

$$a_{10\,000\,000} = \frac{10000000^2 - 42 \cdot 10000000 + 9350}{3 \cdot 10000000^2 - 29.4 \cdot 10000000 - 6} \approx 0.333\,332 ,$$

$\dots\dots\dots$

Meddig folytassuk? Mit tapasztalunk? Merünk -e egyáltalában bármit is jósolni a sorozat már nem látható tagjaira? Mintha egyre több $3$ lenne a tizedesvessző után? Próbáljuk meg általánosan megfogalmazni azt a (ritka!) jelenséget, amikor az $a_n$ tagok egy $A \in \mathbb{R}$ valós számhoz közelednek.

Bár a legtöbb analízis tankönyv a 2.13. Definícióval kezdi, szemléletünkhöz az alábbi áll közelebb:

**2.10. Definíció.** Azt mondjuk, hogy az $(a_n)$ sorozat *véges határértéke* (=*limesz*, lat.) az $A \in \mathbb{R}$ szám (ha létezik), ha teljesül a következő:
$A$-nak bármilyen (kicsi) $\varepsilon > 0$ sugarú környezetét tekintve a sorozat összes eleme, legfeljebb véges sok kivételével, ebben a környezetben van.
Másként fogalmazva: a sorozatnak legfeljebb csak véges sok eleme lehet ezen a környezeten kívül.

**2.11. Definíció.** Az $(a_n)$ sorozatot *konvergensnek* (*összetartó*, lat.) nevezzük, ha létezik fenti $A \in \mathbb{R}$ (véges) határértéke. A sorozatot *divergensnek* (*széttartó*, lat.) nevezzük minden más esetben, vagyis ha a sorozat nem konvergens.

**2.12. Megjegyzés.** Hát persze: ha az adott (bármilyen) környezeten kívül sorozat elemei közül legfeljebb csak az $a_0, \dots, a_{n_0}$ tagok lehetnek kívül, akkor az $n_0$-tól kezdődőek már csak bent lehetnek. Ugyanezt fordítva is elmondhatjuk: ha az $n_0$-tól kezdődő tagok mind a környezeten belül vannak, akkor a maradék $a_0, \dots, a_{n_0}$ tagok - a sorozat eleje - már lehet akár a környezeten kívül is!

A fenti definíciót (környezet, véges sok elem kivételével) alaposan átgondolva a következőképpen is megfogalmazhatjuk:

**2.13. Definíció.** Azt mondjuk, hogy az $(a_n)$ sorozat *véges határértéke* (=*limesz*, lat.) az $A \in \mathbb{R}$ szám (ha létezik), ha teljesül a következő:
tetszőleges $\varepsilon > 0$ pozitív számhoz („hibahatár") létezik olyan $n_0 \in \mathbb{N}$ természetes szám (úgynevezett „küszöbszám"), amelyre: tetszőleges $n > n_0$ számra:

$$|a_n - A| < \varepsilon . \tag{2.5}$$

Kvantorokkal:

$$(\forall \varepsilon > 0)(\exists n_0 \in \mathbb{N})(\forall n \in \mathbb{N}) \quad \text{ha } n > n_0 \text{ akkor } |a_n - A| < \varepsilon : \tag{2.6}$$

A fenti $A \in \mathbb{R}$ számot így jelöljük:

$$\lim_{n \to \infty} a_n = A \quad \text{vagy másképpen} \quad a_n \to A : \tag{2.7}$$

**2.14. Állítás.** Bármely $(a_n)$ sorozatra a fenti 2.11. és 2.13. Definíciók ekvivalensek (*azonos értékű*, lat), vagyis ugyanazt a végeredményt (konvergens/divergens, $A \in \mathbb{R}$) adják.


**2.15. Megjegyzés.** (i) A fenti 2.13. Definíció és benne (2.5) és (2.6) valóban azt fejezik ki, hogy a sorozat $a_n$ tagjainak az $A$ számtól való távolsága $\varepsilon$-nál is kisebb lehet, vagyis $\varepsilon$-nál is közelebb kerülnek egymáshoz.

(ii) Mindkét definícióban nagyon lényeges „apróság": a sorozat $n_0$ után következő összes eleme köteles a kijelölt környezeten belül lenni. Gondoljuk csak meg: semmiképpen sem engedhetünk meg egyetlen kivételt sem! „Cserébe" semmi megkötésünk nincs $n_0$-ra: akármilyen „bődült" nagy is lehet. Másképpen fogalmazva: ha pl. a sorozat $10^6$, $10^{10}$, $10^{10^{10}}$, ... sorszámú tagjait kiszámítjuk - semmivel sem jutottunk előbbre!

(iii) Másik fontos mozzanat: a 2.10. Definícióban leírt ill. a (2.5) követelményeknek minden $\varepsilon > 0$ számra teljesülniük kell, még $\dfrac{1}{10^{10^{10}}}$-nél kisebbre is! A hétköznapi gyakorlati problémáknál (asztalos, sebész, atomfizikus, annál is pontosabb, ... , csillagász) ugyan mindig van a lehetséges és a megkövetelt $\varepsilon$ pontosságnak (tűréshatárnak) korlátja, mondjuk „legkisebb" $\varepsilon$, azonban a matematika olyan fogalmakat és összefüggéseket vizsgál, amik mindenkinek, mindig megfelelőek kell, hogy legyenek!

(iv) Mint többször, például a 2.54. „Sorozatok nagyságrendje" Tétel 2.55. Megjegyzésében tapasztaljuk: egyelőre (ebben a tantárgyban) csak a közelítés (konvergencia) tényét tisztázzuk, konkrét hibabecslés / küszöbszám vizsgálat már nem fér könyvünkbe. Pedig ez lenne a gyakorlatban a legfontosabb, mint például Newton gyökvonó 2.65. Algoritmusa, egyenlet gyökének közelítése intervallum felezéssel 4.32. Algoritmus, mindenféle numerikus integrálás a 7.5. fejezetben, stb.

(v) A (2.7) képletben bevezetett nyíl ($\to$) jelölésnél, megállapodás szerint mindig az $n$ betű tart $+\infty$-be, még ha a képletben más betű is van. Amennyiben ki akarjuk hangsúlyozni, hogy melyik betű „válik végtelen naggyá", akkor ezt a $\to$ alá vagy fölé írjuk:

$$F(m, n, \dots) \underset{n \to \infty}{\longrightarrow} A \tag{2.8}$$

(vi) A határértékkel szoros kapcsolatban van a *torlódási pont* fogalma, helyszűke miatt mi nem foglalkozunk vele.

Lényeges, hogy amit keresünk, abból hány lehet:

**2.16. Tétel.** Egy sorozatnak legfeljebb egy véges határértéke lehet.

**Bizonyítás.** Hát hogy is nézhetne ki: ide is és oda is „közeledik"?

Precízen: ha $a_n \to A_1$ és $a_n \to A_2$, akkor $\varepsilon < \dfrac{|A_1 - A_2|}{2}$ választással $A_1$ és $A_2$-nek $\varepsilon$ sugarú környezetei diszjunktak, ezért akármilyen $n_0$-t választunk is, a sorozat összes $n_0$ utáni tagja nem tud egyszerre mind $A_1$ mind $A_2$-nek $\varepsilon$ sugarú környezetébe esni.

A 2.4. „Sorozat végtelen határétéke" Fejezetben definiáljuk sorozatok végtelen határértékeit is, amelyekből szintén csak egy lehet, sőt minden sorozatnak vagy véges vagy végtelen vagy egyik határértéke sincs. A fenti 2.16. Tétel ilyen irányú általánosítása a 2.31. Tétel.

A gyakorlatban a következő eredmények segítik számolásainkat:


**2.17. Tétel.** (*Alapműveletek és véges határértékek*) Tegyük fel, hogy az $(a_n)$ és a $(b_n)$ sorozatok konvergensek és határértékük $A, B \in \mathbb{R}$, vagyis $a_n \to A$ és $b_n \to B$. Ekkor

(i) az $a_n + b_n$, $a_n - b_n$, $a_n \cdot b_n$ sorozatok is konvergensek és
$(a_n + b_n) \to A + B$, $(a_n - b_n) \to A - B$, $(a_n \cdot b_n) \to A \cdot B$,

(ii) $b_n \neq 0$, $B \neq 0$ esetén az $\dfrac{a_n}{b_n}$ sorozat is konvergens és $\dfrac{a_n}{b_n} \to \dfrac{A}{B}$.

(iii) $0 < A$ esetén az $(a_n)^{b_n}$ sorozat is konvergens és $(a_n)^{b_n} \to A^B$.

**2.18. Megjegyzés.** A fenti tételek ugyan szemléletesen nyilvánvalóak, de bizonyításuk nem hagyható el.
Az (ii) és (iii) pontokban tett megszorítások lényegesek: az (ii) pont $B = 0$ esetét 2.34. Tételben, míg az (iii) pont $A = 0$ illetve $b_n \to \infty$ eseteit 2.37. Tételben tárgyaljuk.

A fenti tételek segítségével általában a vizsgált sorozatokat kisebb részekre tudjuk bontani és a részeket külön-külön vizsgálhatjuk.

Az alábbi megjegyzésben egy gyakori hibára és annak elkerülésére hívjuk fel a figyelmet.

**2.19. Megjegyzés.** *Tiltott határérték-számítás.*
Mi a hiba például a következő levezetésben:

$$\text{ROSSZ:} \quad \left(1 + \frac{1}{n}\right)^n \to 1^n \to 1 \quad \text{„hiszen } 1 \text{-nek bármelyik hatványa } 1 \text{."} \quad ?$$

A végeredmény biztosan, hiszen a 2.57. Tétel (2.18) összefüggése alapján

$$\left(1 + \frac{1}{n}\right)^n \to e \approx 2.718 \neq 1 :$$

De hogyan rontottuk el? Figyelmesen olvassuk el a következőket:

Az első nyíl nem azt jelenti, hogy a hatvány alapja, vagyis $1 + \dfrac{1}{n} = 1$, hanem csak azt, hogy nagyon közel van $1$-hez! Márpedig tudni illik, hogy az $1$-nél nagyobb számok hatványa még nagyobb, főleg ha a kitevő is egyre nagyobb. Tehát hiába egyre kisebb az alap, hiába közeledik egyre jobban $1$-hez, sohasem írhatunk helyette pontosan $1$-t.

A tanulság: csak egyetlen nyilat rajzolhatunk (nyilak nem folytatódhatnak), vagyis „$\to$" esetén az összes $n$-nek egyszerre kell $+\infty$-hez tartania (és nem külön-külön)!

[SzK]-ban nagyon sok sorozat határértékét számoljuk ki, részletesen.

## 2.3. Konvergencia és korlátosság

A 2.10. és 2.13. Tételekben szereplő környezetek végesek és bennük található a sorozat összes eleme, a kivételek száma pedig véges. Tehát „nyilvánvalóan":

**2.20. Tétel.** Ha egy sorozat konvergens, akkor korlátos.

(Persze kell egy bizonyítás is.)


**2.21. Következmény.** Tehát: nem korlátos sorozat nem lehet konvergens, nem lehet véges határértéke. („Végtelen" határértéke még lehet, ld. a 2.29. Definíciót.)

**2.22. Megjegyzés.** *Ne keverjük össze:* a konvergenciának szükséges („muszáj") feltétele a korlátosság, de nem elégséges, vagyis egy sorozat korlátosságából még messze semmit sem tudunk a konvergenciájáról! Az alábbi példák is ezt mutatják. (Lásd még az alábbi 2.27. Tételt is.)

**2.23. Példa.** (i) A $(-1)^n$, $\sin\left(n \cdot \dfrac{\pi}{6}\right)$ vagy $\sin(n)$ sorozatok korlátosak de nyilvánvalóan nem konvergensek.

(Véletlenül az első kettő *periodikus* (*ismétlődő*, lat.) helyszűke miatt sorozatok periodikusságával sem foglalkozhatunk.)

(ii) Például a $d_n = \dfrac{n^3 + 953n^2 + 132\,978}{n^3 - 12n^2 - 5\,601n}$ sorozat konvergens tehát korlátos is. Azonban a korlátokat „kiszöszmötölni" már nem olyan egyszerű feladat, így a korlátokról csak *egzisztenciát* (*létezés*, lat.) tudunk, magukat a korlátokat már nem. (A feladat megoldását megtaláljuk [SzF]-ben.)

Könnyű és hasznos az alábbi összefüggés is:

**2.24. Tétel.** Ha $(a_n)$ korlátos sorozat és $b_n \to 0$ akkor $a_n \cdot b_n \to 0$.

(Szemléletesen: $(a_n)$ hiába „összevissza hullámzik", $b_n$ lenyomja $0$-ra hiszen $(a_n)$ mérete korlátozott, $b_n$ pedig $0$-ra zsugorodik. Ez persze csak bizonyításvázlat.)

**2.25. Példa.** A $(-1)^n$ vagy $\sin n^2$ sorozatok ugyan nem konvergensek de (legalább) korlátosak, így például könnyen látjuk:

$$\frac{(-1)^n}{n} = (-1)^n \cdot \frac{1}{n} \to 0$$

és

$$\frac{\sin n^2}{n} = \sin n^2 \cdot \frac{1}{n} \to 0 .$$

**2.26. Megjegyzés.** A fenti tételhez hasonló (vagy éppen ugyanaz) a 2.33. Tétel.

A következő összefüggések bizonyos mértékben a 2.20. Tétel megfordításai:

**2.27. Tétel.** (i) Ha egy sorozat korlátos és monoton (akár csökkenő akár növő), akkor konvergens.

(ii) Monoton növő és felülről korlátos sorozatnak van véges határértéke.

(iii) Monoton csökkenő és alulról korlátos sorozatnak van véges határértéke.

**2.28. Megjegyzés.** (i) Ismét hangsúlyozzuk (mint számos helyen), hogy a „konvergens" és „van véges határértéke" kifejezések (matematikailag) ugyanazt jelentik.

(ii) A fenti 2.27. Tétel folytatása a 2.32. Tétel.


## 2.4. Sorozat végtelen határértéke

Ha egy sorozat elemei nem közelednek valamilyen $A \in \mathbb{R}$ valós számhoz (a fenti „szigorú" 2.10. azaz 2.13. Definíciók szerint), akkor még nem biztos, hogy a teljes káosz szerint „mozognak" a számegyenesen. Például minden határon túl növekedhetnek, „közeledhetnek" $+\infty$ vagy $-\infty$-hez. (Erre találták ki elméletileg a bővített számegyenest, ld. a 0.8. Definíciót.)

**2.29. Definíció.** (*Sorozat végtelen határértékei*)
(i) Azt mondjuk, hogy az $(a_n)$ sorozat *határértéke* (=*limesz*, lat.) $+\infty$, ha tetszőleges $p \in \mathbb{R}$ szám esetén van olyan $n_p \in \mathbb{N}$ természetes szám (=ún. küszöbszám), amelyre teljesül a következő: minden $n > n_p$ index esetén $a_n > p$.
Kvantorokkal: $(\forall p \in \mathbb{R})(\exists n_p \in \mathbb{N})(\forall n > n_p)\ a_n > p$.
A fentieket így jelöljük: $\displaystyle\lim_{n \to \infty} a_n = +\infty$ vagy $a_n \to +\infty$.

(ii) Azt mondjuk, hogy az $(a_n)$ sorozat *határértéke* $-\infty$, ha tetszőleges $p \in \mathbb{R}$ szám esetén van olyan $n_p \in \mathbb{N}$ természetes szám (=ún. küszöbszám), amelyre teljesül a következő: minden $n > n_p$ index esetén $a_n < p$.
Kvantorokkal: $(\forall p \in \mathbb{R})(\exists n_p \in \mathbb{N})(\forall n > n_p)\ a_n < p$.
A fentieket így jelöljük: $\displaystyle\lim_{n \to \infty} a_n = -\infty$ vagy $a_n \to -\infty$.

(iii) A $\displaystyle\lim_{n \to \infty} a_n = \infty$ vagyis $a_n \to \infty$ jelölés azt jelenti, hogy vagy $a_n \to +\infty$ vagy $a_n \to -\infty$.

Vegyük észre, hogy a fenti definíció két pontja csak a színes jelekben („le" és „fel") különbözik!

**2.30. Megjegyzés.** A szokásos terminológia (szakkifejezés, lat.+gör.) szerint a fenti esetekben a sorozatnak *van határértéke* (a $+\infty$ ill. $-\infty$ szimbólum), de mivel ez a határérték nem véges szám, ezért a sorozatot *divergensnek* (nem konvergens) tekintjük.
Hangsúlyozzuk: egy sorozat kizárólag csak akkor *konvergens*, ha van *véges* határértéke (ld. a 2.11. Definíciót).

Az alábbi fontos eredmény a 2.16. Tétel általánosítása:

**2.31. Tétel.** Egy sorozatnak legfeljebb egy végtelen ($+\infty$ vagy $-\infty$) határértéke létezik, de akkor nem lehet véges határértéke.
Következésképpen: ha egy sorozat konvergens (van véges határértéke), akkor végtelen határértéke nem lehet.
Összefoglalva: egy sorozatnak legfeljebb egy határértéke létezhet (akár véges akár végtelen).

Az alábbi Tétel folytatása a 2.27. Tételnek:

**2.32. Tétel.** Ha a sorozat monoton növő de felülről nem korlátos, akkor határértéke $= +\infty$.
Ha a sorozat monoton csökkenő de alulról nem korlátos, akkor határértéke $= -\infty$.


A fejezet hátralevő részében megpróbáljuk felderíteni a végtelen határértékek és az alapműveletekkel kapcsolatos összefüggéseket. Nagyon ügyeljünk: a 2.33. és 2.34. Tételekben használható szabályokat, míg a 2.37. Tételben figyelmeztetéseket, ún. „határozatlan alakok" gyűjtöttünk össze. Mivel sokszor találkozunk velük és könnyű összetéveszteni őket, nagyon vigyázzunk: nagyon veszélyesek!

Az első (könnyű) eredmény a 2.24. Tétel folytatása (vagy talán ugyanaz).

**2.33. Tétel.** (o) $\dfrac{c}{n} \to 0$ ha $c \in \mathbb{R}$ tetszőleges rögzített szám.

(i) Általában: ha $(a_n)$ korlátos és $|b_n| \to \infty$ akkor $\dfrac{a_n}{b_n} \to 0$.

**Bizonyítás.** Az
$$\frac{a_n}{b_n} = a_n \cdot \frac{1}{b_n} = \text{korlátos} \cdot 0 \to 0$$
átalakítás miatt ez a 2.24. Tétellel egyenértékű (ekvivalens). $\square$

**2.34. Tétel.** (*Végtelen határérték - szabályok*) Legyenek $a_n \to +\infty$, $b_n \to +\infty$ és $(c_n)$, $(d_n)$ tetszőleges sorozatok. Ekkor

(o) $-a_n \to -\infty$, röviden: „$(-1) \cdot (+\infty) = -\infty$",

(i) $a_n + b_n \to +\infty$, röviden: „$+\infty + \infty = \infty$",

(ii1) ha $(c_n)$ alulról korlátos, akkor $a_n + c_n \to \infty$,

. röviden: „$+\infty - K = +\infty$",

(ii2) ha $(c_n)$ felülről korlátos, akkor $-a_n + c_n \to -\infty$,

. röviden: „$-\infty + K = -\infty$",

(iii1) $K \cdot a_n \to +\infty$ és $\dfrac{a_n}{K} \to +\infty$ ha $K > 0$,

. röviden: „$K \cdot (+\infty) = \infty$" és „$\dfrac{+\infty}{K} = \infty$"

(iii2) $K \cdot a_n \to -\infty$ és $\dfrac{a_n}{K} \to -\infty$ ha $K < 0$,

. röviden: „$K \cdot (+\infty) = -\infty$" és „$\dfrac{+\infty}{K} = -\infty$",

(iv1) $\dfrac{K}{a_n} \to 0$, röviden: „$\dfrac{K}{\infty} = 0$" bármilyen $K \in \mathbb{R}$ számra,

(iv2) $\dfrac{c_n}{a_n} \to 0$ ha $(c_n)$ korlátos, röviden: „$\dfrac{\text{korl}}{\infty} = 0$"

(v1) ha $c_n \to 0$ és $c_n > 0$ véges számú kivétellel, akkor $\dfrac{1}{c_n} \to \infty$,

. röviden: „$\dfrac{1}{0+} = +\infty$",

(v2) ha $c_n \to 0$ és $c_n < 0$ véges számú kivétellel, akkor $\dfrac{1}{c_n} \to -\infty$,

. röviden: „$\dfrac{1}{0-} = -\infty$",


(vi1) ha $c_n$-nek van pozitív alsó korlátja, akkor $a_n \cdot c_n \to +\infty$,

(vi2) ha $c_n$-nek van negatív felső korlátja, akkor $a_n \cdot c_n \to -\infty$,

(vii1) $(a_n)^{b_n} \to +\infty$, röviden: „$+\infty^{+\infty} = \infty$",

(vii2) $(a_n)^{-b_n} \to 0$, röviden: „$(+\infty)^{-\infty} = 0$",

(vii3) ha $c_n \to 0$ akkor $(c_n)^{a_n} \to 0$, röviden: „$0^{+\infty} = 0$",

(viii1) ha $c_n \to 0$ és $c_n > 0$ véges számú kivétellel, akkor $(c_n)^{-a_n} \to +\infty$,

. röviden: „$(0+)^{-\infty} = +\infty$",

(viii2) ha $c_n \to 0$ és $c_n < 0$ véges számú kivétellel, akkor $(c_n)^{-a_n} \to -\infty$,

. röviden: „$(0-)^{-\infty} = -\infty$",

(ix1) ha $a_n \leq c_n$ véges számú kivétellel akkor $c_n \to +\infty$,

(ix2) ha $d_n \leq a_n$ véges számú kivétellel akkor $d_n \to -\infty$.

**2.35. Megjegyzés.** Precíz (bonyolult) bizonyítás helyett próbáljuk meg saját józan eszünkkel megérteni a fenti állításokat. Például:
„bődült nagy + bődült nagy szintén bődült nagy" - ez (i),
„bődült nagy - nem túl nagy az még bődült nagy" - ez (ii1),
„valamit nagyon sokfelé osztva nagyon kicsit kapunk" - ez (iv), stb.
Ne feledjük azonban, hogy $+\infty$ és $-\infty$ nem ugyanaz ((„egyik erre van másik arra")), mint hasonlóan: $+0$ és $-0$ sem keverhető össze (bár mindkettő kicsi, $0$-hoz van közel, de nem ugyanazon oldalán, és egyik reciproka $+\infty$, másiké $-\infty$).

Most a végtelennel kapcsolatos problémák ra hívjuk fel a figyelmet.

**2.36. Példa.** Tekintsük a következő problémákat:

(i1) $\lim\limits_{n\to\infty} \dfrac{7n^2 + 456n - 92}{6n + 7590} = ?$ ,

(i2) $\lim\limits_{n\to\infty} \dfrac{7n^2 + 456n - 92}{2n^2 - 92n + 7590} = ?$ ,

(i3) $\lim\limits_{n\to\infty} \dfrac{7n^2 + 456n - 92}{n^3 - 45n^2 + 7590} = ?$ ,

(ii1) $\lim\limits_{n\to\infty} \sqrt{3n^2 + 3n - 5} - \sqrt{2n^2 + 40n + 5} = ?$ ,

(ii2) $\lim\limits_{n\to\infty} \sqrt{3n^2 + 3n - 5} - \sqrt{3n^2 + 4n + 7} = ?$ ,

(ii3) $\lim\limits_{n\to\infty} \sqrt{3n^2 - 3n - 5} - \sqrt{3n^2 - 3n + 8} = ?$ .

Az (i)-beli feladatok mind „$\dfrac{\infty}{\infty}$" típusúak, az (ii)-beli feladatok pedig „$\infty - \infty$" típusúak. Sajnos ez még kevés információ, nem léteznek sem „$\dfrac{\infty}{\infty} = \dots$" sem „$\infty - \infty = \dots$" típusú tételek!
Miért kevés az információ? Kiszámolható (HF vagy ld. [SzF] megoldásait), hogy: $\lim(\text{i1}) = \infty$, $\lim(\text{i2}) = \dfrac{7}{2}$, $\lim(\text{i3}) = 0$, és hasonlóan $\lim(\text{ii1}) = \infty$,


$\lim(\text{ii2}) = \dfrac{1}{2\sqrt{3}}$ és $\lim(\text{ii3}) = 0$ .

Ez pedig azt mutatja, hogy a $\dfrac{\infty}{\infty}$ és $\infty - \infty$ típusú feladatok eredménye sokféle lehet (még több féle, mint a fenti példákban), ezért hívjuk a $\dfrac{\infty}{\infty}$ és $\infty - \infty$ típusú problémákat (és még az alábbi 2.37. Tételben felsoroltakat) *határozatlan alakoknak*.
Minden határozatlan alak esetén tilos bármilyen eredményt rávágni, a helyes válasz: „még nem tudjuk, további vizsgálat szükséges"!
További kidolgozott feladatokat találunk (a többi típusú határozatlan alakokra is) például [SzK]-ban.

**2.37. Tétel.** (*Határozatlan alakok*)
$$(+\infty) - (+\infty) \;,\quad 0 \cdot \infty \;,\quad \frac{\infty}{\infty} \;,\quad \frac{0}{0} \;,\quad 1^\infty \;,\quad \infty^{\frac{1}{\infty}} \;,\quad \infty^0 \;,\quad 0^0 \;,$$

a fenti képletekben például $\dfrac{0}{0}$ (vagy $\infty - \infty$) azt jelenti, hogy $\lim\limits_{n\to\infty} a_n = 0$ és $\lim\limits_{n\to\infty} b_n = 0$ esetén $\lim\limits_{n\to\infty} \dfrac{a_n}{b_n}$ határozatlan (illetve $\lim\limits_{n\to\infty} c_n = \infty$ és $\lim\limits_{n\to\infty} d_n = \infty$ esetén $\lim\limits_{n\to\infty} (c_n)^{d_n}$ határozatlan). Az előjel nélküli $\infty$ jel helyett írhatunk akár $+\infty$ akár $-\infty$ jelet, sőt még az is elég, ha $\lim\limits_{n\to\infty} |d_n| = \infty$:

Továbbá: $(-\infty)^{+\infty}$ általában nem is értelmes (mert az alap negatív, a kitevő is sokféle lehet), ugyanez igaz $1^\infty$, $1^0$ és $0^0$-ra is. $\infty - \infty$, $0 \cdot \infty$, $\dfrac{c}{\infty}$ is általában határozatlan, ha az előjeleket nem tudjuk. (Előjelek ismeretében ld. pl. az előző 2.34. Tétel (viii1) és (viii2) eseteit).

**2.38. Megjegyzés.** Ide tartoznak még a 2.6. „Nevezetes sorozat-határértékek" fejezet képletei is.

**2.39. Gyakorlat.** Keressünk legalább kettő példát mindegyik határozatlan alakra, különböző végeredményekkel. (Ld. pl. [SzK] vagy [SzF].)

## 2.5. Rendőrszabály, részsorozatok

Ha egy bonyolult sorozatot ügyesen tudunk alulról és felülről egyszerűbb képletekkel megbecsülni (korlátozni), akkor használjuk a *Rendőrszabályt*:

**2.40. Tétel.** Legyenek $a_n$, $b_n$, $c_n$ tetszőleges sorozatok, és tegyük fel, hogy
$$a_n \leq b_n \leq c_n \tag{2.9}$$
teljesül véges sok $n$ kivételével (vagy másképpen: létezik olyan $n_0 \in \mathbb{N}$ küszöb, hogy (2.9) teljesül minden $n > n_0$ esetén).

Ha ezenkívül létezik olyan $A \in \mathbb{R}$ valós szám, amely közös határértéke $a_n$ és $c_n$-nek is (vagyis $a_n \to A$ és $c_n \to A$), akkor $b_n$-nek is határértéke $A$, vagyis $b_n \to A$.
Más szavakkal: ha $a_n$ és $c_n$ konvergensek és határértékük megegyezik, akkor $b_n$ is konvergens, és határértéke az előző közös érték.

A fenti állítás igaz az $A = +\infty$ és az $A = -\infty$ esetekben is (ekkor persze egyik sorozat sem konvergens).


**2.41. Megjegyzés.** A szemléletes elnevezés összefoglalja a lényeget: ha a két szélső rendőr ($a_n$ és $c_n$) következetesen ugyanoda tart, akkor a közrefogott is kénytelen ugyanoda tartani (konvergálni).
[SzK] és [SzF]-ban találhatunk kidolgozott példákat a rendőrszabályra (is).

A 2.10. és 2.13. Definíciókban, mint tudjuk a (2.5) követelményt „a sorozat tagjai a környezetbe esnek" csak véges sok kivételtől eltekintve követeljük meg (csak $n > n_0$ esetén). Vagyis véges sok elemre ha (2.5) nem teljesül, akkor semmi sem változik! Ebből könnyen következik az alábbi hasznos eredmény:

**2.42. Tétel.** A sorozat első akárhány, de véges sok elemét elhagyva / pótolva / módosítva / ... a sorozat konvergens vagy nem konvergens volta, határértéke, sőt korlátossága sem változik meg.

Ha a sorozatból csak tagokat hagyunk el, akkor *részhalmaz* helyett *részsorozatot* kapunk. Ez szemléletesen ugyan érthető, de matematikailag szükség van precízebb definícióra!

**2.43. Definíció.** Legyenek $(a_n)_{n=0}^{+\infty}$ és $(b_m)_{m=0}^{+\infty}$ tetszőleges sorozatok. A $(b_m)$ sorozat *részsorozata* az $(a_n)$ sorozatnak, ha minden $m$-re létezik olyan $n = n_m \in \mathbb{N}$ index: $b_m = a_n$, és az $n_m$ számok szigorúan monoton növőek.
Másképpen: A $(b_m)$ sorozat *részsorozata* az $(a_n)$ sorozatnak, ha van olyan $f : \mathbb{N} \to \mathbb{N}$ szigorúan növő függvény, amelyre
$$b_m = a_{f(m)} . \tag{2.10}$$

**2.44. Példa.** Legtöbbször a sorozat minden második (páros vagy páratlan sorszámú) tagját szoktuk kivenni.

**2.45. Tétel.** Konvergens sorozat minden részsorozata is konvergens, és minden részsorozat határértéke megegyezik az eredeti sorozat határértékével.
Azaz: ha $a_n \to A$ akkor $b_m \to A$ minden $(b_m) \subset (a_n)$ részsorozat esetén.
*Megfordítva:* Ha egy $(a_n)$ sorozat minden részsorozatának van határértéke és ezek a határértékek ugyanazon $A \in \mathbb{R}$ valós szám, akkor az eredeti $(a_n)$ sorozatnak is az $A$ szám határértéke.

A fenti összefüggések érvényes az $A = +\infty$ és $A = -\infty$ esetekre is.

**2.46. Megjegyzés.** Vigyázzunk: a fenti Tétel megfordítását azért fogalmaztuk ilyen körülményesen, mert nem elég csak a „minden részsorozatának van határértéke" feltétel. Például az $a_n = (-1)^n$ sorozat páros indexű részsorozata $b_m = (-1)^{2k} = 1$ és páratlan indexű részsorozata $c_h = (-1)^{2k+1} = -1$ mindkettő konvergens hiszen konstans sorozatok, de mivel különböző a határértékük, az eredeti $(a_n)$ sorozatnak nincsen határértéke.
Az összes részsorozatot lehetetlen mind megvizsgálni, hiszen nem csak egyszerűen végtelen sok (!) van belőle, hanem ráadásul kontinuum sok is, ami egy „még nagyobbik végtelen". (A különböző végtelen számosságokról például honlapomon a
http://math.uni-pannon.hu/~szalkai/Szamoss1www.pdf
dokumentumban olvashatnak az érdeklődők.)
Azonban, ha a megvizsgált részsorozatok például lefedik az egész sorozatot -


vagyis az $(a_n)$ sorozat mindegyik elemét tartalmazza valamelyik vizsgált részsorozat (pl. a páros és páratlan indexű tagok) - és ezen részsorozatok határértékei ugyanazok, akkor már biztosan következtethetünk az egész sorozat konvergensségére.

**2.47. Példa.** Gyakran találkozunk $\dfrac{c}{0}$ típusú feladatokkal: $\lim\limits_{n\to\infty} \dfrac{c_n}{a_n} = ?$ ahol $\lim\limits_{n\to\infty} c_n = c \neq 0$ és $\lim\limits_{n\to\infty} a_n = 0$. Nyilvánvalóan a $\dfrac{c_n}{a_n}$ törtek mérete $\infty$-hez közelít, vagyis $\lim\limits_{n\to\infty} \left|\dfrac{c_n}{a_n}\right| = \infty$. Azonban $+\infty$ és $-\infty$ nem ugyanarra vannak!
Ezért meg kell vizsgálnunk a nevező előjelét, azaz külön kell választanunk $b_n$ elemei közül a negatív és a pozitív tagokat (részsorozatokat). Ha mindkét féle tagok részsorozata végtelen, akkor a 2.34. Tétel szerint e két részsorozat egyikének határértéke $+\infty$ míg a másiké $-\infty$. Ekkor pedig az eredeti $\dfrac{c_n}{a_n}$ sorozatnak nincs (semmilyen) határértéke!

A 4.1.3. „Határértékek végtelenben" fejezetben ismertetett *Átviteli Elv*, vagyis a 4.7. Tétel kapcsolatot mutat függvények végtelenben vett és sorozatok határértékei között. Ez alapján pedig például a 5.59. *Bernoulli-L'Hospital* szabályt is használhatjuk sorozatok határértékeinek kiszámításához.

Részletesen megoldott feladatokat találunk [SzK], [SzF] és [www0] feladatgyűjteményekben.

## 2.6. Nevezetes sorozat-határértékek

Hasznos lesz megismernünk néhány, többször előforduló határértéket, alkalmazásuk általában megkönnyíti számolásainkat.

**2.48. Tétel.** Hatványsorozatok:
$$n^\alpha \to \begin{cases} 0 & \text{ha } \alpha < 0 \\ 1 & \text{ha } \alpha = 0 \\ \infty & \text{ha } \alpha > 0 \end{cases} \qquad (\alpha \in \mathbb{R}) . \tag{2.11}$$

**2.49. Megjegyzés.** A 1.1.1. „Hatványfüggvények" fejezet 1.5. Megjegyzése alapján tudjuk, hogy különböző $\alpha$ kitevőkre az $n^\alpha$ hatványok sokféle függvényt rövidítenek (törtek, gyökök), ezért mindig próbáljuk meg a vizsgált kifejezést hatványalakban felírni (ha lehetséges).

**2.50. Definíció.** *Mértani sorozatnak* nevezzük az olyan $(a_n)_{n=0}^\infty$ sorozatokat, amelyekben (a másodiktól kezdve) bármelyik tag és az azt megelőző tag hányadosa állandó, vagy másképpen: $a_{n+1} = a_n \cdot q$ ahol $q$ nem függ $n$-től. Ezt a $q$ hányadost a mértani sorozat *kvóciensének* (quotient=hányados, lat.) nevezzük.

**2.51. Megjegyzés.** Vegyük észre, hogy az általunk használt jelölésekkel minden sorozat az $a_0$ taggal kezdődik, így a mértani sorozatok is!


**2.52. Tétel.** (*Mértani sorozatok*)
$$q^n \to \begin{cases} 0 & \text{ha } |q| < 1,\ q \in \mathbb{C} \\ 1 & \text{ha } q = 1 \\ \infty & \text{ha } q > 1,\ q \in \mathbb{R} \\ \text{div} & \text{máskor},\ q \in \mathbb{C} \end{cases} . \tag{2.12}$$

**2.53. Definíció.** Tetszőleges $(a_n)_{n=0}^\infty$, $(b_n)_{n=0}^\infty$ sorozatokra az $a_n \ll b_n$ jelölést használjuk akkor, ha a $(b_n)$ sorozat végtelen sokszor nagyobb az $(a_n)$ sorozatnál, vagyis
$$a_n \ll b_n \quad \overset{def}{\iff} \quad \lim_{n\to\infty} \frac{b_n}{a_n} = +\infty .$$

**2.54. Tétel.** (*Sorozatok nagyságrendje*) Tetszőleges $a, b, k \in \mathbb{R}^+$, $1 < b$ pozitív számokra
$$\log_a n \ll n^k \ll b^n \ll n! \ll n^n \qquad (a, b, k \in \mathbb{R}^+, \ 1 < b) \tag{2.13}$$
azaz
$$\frac{n^k}{\log_a n} \to \infty \;,\quad \frac{b^n}{n^k} \to \infty \;,\quad \frac{n!}{b^n} \to \infty \;,\quad \frac{n^n}{n!} \to \infty \tag{2.14}$$
vagy másképpen:
$$\frac{\log_a n}{n^k} \to 0 \;,\quad \frac{n^k}{b^n} \to 0 \;,\quad \frac{b^n}{n!} \to 0 \;,\quad \frac{n!}{n^n} \to 0 . \tag{2.15}$$

**2.55. Megjegyzés.** Kis $n$ értékekre ugyan nem hiszünk a szemünknek. Pl. próbáljunk meg $b = 1{,}001$ és $k = 6249$ esetén olyan $n \in \mathbb{N}$ számokat keresni, amelyekre $\dfrac{b^n}{n^k} > 1$, azaz
$$1{,}001^n > n^{6249} . \tag{2.16}$$

Csak zsebszámológépünk korlátait vesszük észre, hogy ilyen $n$-et nem találunk, pedig a (2.14) összefüggés igaz erre a $b$ alapra és $k$ kitevőre is!

Az alábbi ábrán is csak kis $n$ számokat tudtunk ábrázolni (de valami azért mégiscsak látszik), vagy a szerző honlapján szereplő [www7] táblázatot ajánlhatjuk még tanulmányozásra.


*(ábra: Alapfüggvények nagyságrendje)*

Felhívjuk a figyelmet, hogy a függőleges ($y$) tengely mentén összenyomtuk az ábrát (mert a nagyon nagy értékek már nem fértek volna el a papíron). Ráadásul nem egyszerűen felére vagy $c$-ed részre történt ez az összenyomás, hanem $y$ növekedésével egyre nagyobb mértékű az összenyomás: ugyanakkora széles vízszintes sávba eredetileg pl. 256, 512, 1024, ... sávot „gyömöszöltünk" bele. Az $y$-tengelyen így kapott beosztást *logaritmikus skálának* is nevezik, mert minden „$y$" felirat az origótól $\log(y)$ távolságra van (esetünkben $\log_2$). Hasonló ábrákat találunk földrajzi atlaszokban a légkör (szférák) ábrázolásánál.

Végül néhány fontos összefüggést ismertetünk.

**2.56. Tétel.**
$$\sqrt[n]{a} \to 1 \quad a \in \mathbb{R}^+ \;,\qquad \sqrt[n]{n} \to 1 \;,\qquad \sqrt[n]{n!} \to +\infty \quad . \tag{2.17}$$

**2.57. Tétel.**
$$\left(1 + \frac{t}{n}\right)^n \to e^t \qquad (t \in \mathbb{R}) \quad . \tag{2.18}$$

**2.58. Definíció.** Speciálisan $t = 1$ esetén $\left(1 + \frac{1}{n}\right)^n \to e \approx 2{,}718\,281\,828$ az úgynevezett *Euler*[^2]-féle szám ami nem azonos az *Euler-állandóval*
$$C := \lim_{n\to\infty} \left(\frac{1}{1} + \frac{1}{2} + \dots + \frac{1}{n}\right) - \ln(n) \approx 0{,}57722 .$$

[^2]: Leonhard Euler (1707-1783) svájci matematikus.


**2.59. Megjegyzés.** A fenti (2.18) összefüggésben, illetve a 2.58. Definícióban szereplő $\left(1 + \frac{1}{n}\right)^n$ sorozat nagyon lassan közelít az $e$ számhoz: $n = 1000$ esetén $a_n = \left(1 + \frac{1}{n}\right)^n$ csak kettő tizedesjegyre pontos, míg $n = 10^6$ esetén a pontosság öt tizedesjegy!
Ellenben, a 3.2. „Nevezetes sor-határértékek" fejezet (3.5) összefüggésében szereplő $b_n = \dfrac{1}{0!} + \dfrac{1}{1!} + \dfrac{1}{2!} + \dots + \dfrac{1}{n!}$ sorozat már $n = 10$ esetén is hét tizedesjegyre pontos!

## 2.7. Néhány módszer sorozatokhoz

Ha nem a közelítés pontossága a lényeg hanem csak a határértéket számoljuk, vagyis ha nem pepecselünk $\varepsilon$ és $n_0$ értékeivel, akkor az előző 2.6. „Nevezetes sorozat-határértékek" eredményei mellett még néhány, általános gondolatmenetet (módszert) használunk, az „$n$ bődült nagy" kijelentésen túl.

Az alábbi rövid lista nem pótolja a gyakorlást (pl. az [SzK] és [SzF] feladatgyűjtemények segítségével)!

**2.60. Megjegyzés.** F1) $\dfrac{\infty}{\infty}$ alakú törteknél egyszerűsítsük a törtet a nevező nagyságrendjével,

F2) $\sqrt{\phantom{a}} - \sqrt{\phantom{a}}$ alakú kifejezéseket bővítsük $\sqrt{\phantom{a}} + \sqrt{\phantom{a}}$-el, vagyis használjuk az alábbi sémát:
$$\sqrt{A} - \sqrt{B} = \frac{\left(\sqrt{A} - \sqrt{B}\right)\left(\sqrt{A} + \sqrt{B}\right)}{\sqrt{A} + \sqrt{B}} ,$$

F3) $(\infty) - (\infty)$ alakú különbségeket alakítsuk szorzattá, vagyis emeljük ki belőlük az egyik tényezőt. Másképpen: használjuk az alábbi sémát:
$$A - B = A\left(1 - \frac{B}{A}\right)$$
és a $\dfrac{B}{A}$ tört vizsgálatánál használjuk a fenti F1) módszert vagy a 2.34. Tétel (iii), (iv) vagy (v) pontok valamelyikét.

F4) $(a_n)^{b_n}$ alakú hatványoknál használjuk a 1.26. Állításhoz hasonló
$$(a_n)^{b_n} = \exp(b_n \ln(a_n)) = e^{b_n \ln(a_n)}$$
átalakítást.

## 2.8. Bolyai Farkas algoritmusa

Bolyai János[^3] apja, Bolyai Farkas[^4] a pénzügyi (közgazdasági) számításokban fontos
$$x^m = a + x \qquad (m > 2,\ m \in \mathbb{N},\ a \in \mathbb{R}^+) \tag{2.19}$$

[^3]: 1802-1860 (Kolozsvár-Marosvásárhely) a legnagyobb magyar matematikus.
[^4]: 1775-1856 (Bolya-Marosvásárhely) magyar matematikus.


ún. *trinom* (háromtagú, gör.) *egyenletek* közelítő megoldására adott egy egyszerű eljárást, amit a szakirodalom *Bolyai-algoritmus*-nak nevez.

**2.61. Algoritmus.** A (2.19) egyenlet megoldásához számítsuk ki az alábbi sorozat elemeit: legyen
$$x_0 := 0 \quad \text{és} \quad x_{n+1} := \sqrt[m]{x_n + a} \quad (n \in \mathbb{N}), \tag{2.20}$$
vagyis $x_1 = \sqrt[m]{a}$, $x_2 = \sqrt[m]{a + \sqrt[m]{a}}$, $x_3 = \sqrt[m]{a + \sqrt[m]{a + \sqrt[m]{a}}}$, ... .
Ekkor
$$x_0 := \lim_{n\to\infty} x_n \tag{2.21}$$
a (2.19) egyenlet (egyik) pontos gyöke.

Természetesen szükségünk van az Algoritmus helyességének ellenőrzésére:

**2.62. Állítás.** Tetszőleges $m \in \mathbb{N}$, $m > 2$ és $a \in \mathbb{R}^+$ esetén a (2.20) sorozat monoton növő és felülről korlátos, így létezik a (2.21) határérték.
Továbbá, $x_0$ egy pontos gyöke a (2.19) egyenletnek.

**2.63. Megjegyzés.** A gyakorlatban persze megállunk valamennyi $N$ lépés után, és $x_N$ egy közelítő megoldása a (2.19) egyenletnek.
A (2.19) egyenlet gyökének fenti (2.20) iterációs sorozat való megadása. Bolyai Farkas önálló matematikai eredményei közül külföldön ez az eljárás, az ún. Bolyai-algoritmus vált legkorábban ismertté (R. Baltzer, Die Elemente der Mathematik, 1860). A trinom egyenletek megoldását akkoriban a pénzügyi élet is szükségessé tette, mivel a járadékszámítás ún. kamatlábproblémája pont ilyen egyenletek megoldását igényelte.
Tudomásunk szerint még ma is ezt a képletet használják a számítógépek.

**2.64. Megjegyzés.** A témáról bővebben az alábbi helyeken olvashatnak az Érdeklődők:
- Bolyai Farkas: Tentamen IUVENTUTEM STÚDIÓSAM IN ELEMENTA MATHESEOS PUR ELEMENTÁRIS AC SUBLIMIORIS METHODO INTUITIVA EVIDENTIAQUE HUIC PROPRIA INTRODUCENDI, CUM APPENDICE TRIPLICI = http://mek.oszk.hu/06500/06507/ ,
- Szabó Péter Gábor: Bolyai Farkas számelméleti vonatkozású kéziratos hagyatéka, Természet Világa, 2003. I. Bolyai-emlékszám, http://www.chemonet.hu/TermVil/ , http://www.kfki.hu/chemonet/TermVil/
- Szabó Péter Gábor: A Wilson-tételnek és megfordításának bizonyítása Bolyai Farkas kéziratos hagyatékában (kézirat). Publikálás alatt a szegedi Polygon című folyóiratban, http://www.inf.u-szeged.hu/~pszabo/Wilson.ps.gz
- [www7]

## 2.9. Newton gyökvonó módszere

Isaac Newton[^5]-nak is sok bonyolult számítást kellett elvégeznie, talán ezért is fedezett fel olyan sok gyors számítási algoritmust. Ebben a fejezetben a (közelítő) gyökvonási módszerét ismertetjük, de érdemes megismernünk például

[^5]: Isaac Newton (1643-1727), angol fizikus és matematikus.


még érintőmódszerét (*Newton-Raphson*[^6] módszer, pl. [U] 303-304.old), és gyors osztási módszerét (pl. Lovász László- Gács Péter: Algoritmusok, Tankönyvkiadó, 1987., 90-91.old.).

Newton alábbi gyökvonó algoritmusa nem csak egyszerű, de gyors és pontos is, ezért is lehet „beépíteni" egyszerű (kulcstartós) számológépekbe is. Ha a kedves Olvasónak volt „szerencséje" a hagyományos iskolai négyzetgyökvonó algoritmust megismerni (pl. XX. szd. eleji tankönyvekből), akkor észreveheti és értékelheti a különbséget!

**2.65. Algoritmus.** Legyen $\alpha \in \mathbb{R}^+$ tetszőleges pozitív szám. $\sqrt{\alpha}$ közelítő kiszámításához tekintsük az alábbi számokat: válasszuk az $x_0 \in \mathbb{R}^+$ számot tetszőlegesen, és a továbbiakban legyen
$$x_{n+1} := \frac{x_n + \dfrac{\alpha}{x_n}}{2} \tag{2.22}$$
Ekkor a kiszámolt $x_1, x_2, \dots$ értékek közelítenek $\sqrt{\alpha}$-hoz, azaz
$$\lim_{n\to\infty} x_n = \sqrt{\alpha} .$$

**2.66. Megjegyzés.** A (2.22) képletet könnyű megjegyezni: az előző $x_n$ szám és a $\dfrac{\alpha}{x_n}$ számtani közepét kell vennünk (mi is úgy érezzük: $\sqrt{\alpha}$-nak e kettő érték között kell lennie).
Még az is eszünkbe juthat: $x_n$ pontosan akkor lenne éppen $\sqrt{\alpha}$, ha a fenti számtani közép is $\sqrt{\alpha}$-t adna.

**2.67. Példa.** Számítsuk ki $\sqrt{10}$ közelítő értékét csak a négy alapművelet segítségével.
Legyen $x_0 := 1$, ekkor
$$x_1 = \frac{1 + \frac{10}{1}}{2} = 5{,}5 \;,\quad x_2 = \frac{5{,}5 + \frac{10}{5{,}5}}{2} = 3{,}659\,091 \;,$$
$$x_3 = \frac{3{,}659\,091 + \frac{10}{3{,}659\,091}}{2} = 3{,}196\,005 \;,\quad x_4 = \frac{3{,}196\,005 + \frac{10}{3{,}196\,005}}{2} = 3{,}162\,456 \;,$$
$$x_5 = \frac{3{,}162\,456 + \frac{10}{3{,}162\,456}}{2} = 3{,}162\,277\,665 .$$
Vegyük észre: öt lépés után már nyolc tizedesjegyre pontos az eredmény!
Megjegyezzük, hogy $\sqrt{10} \approx 3{,}162\,277\,660$ és
$$(x_4)^2 = 3{,}162\,456^2 = 10{,}001\,127\,951\,936 \;,$$
$$(x_5)^2 = 3{,}162\,277\,665^2 = 10{,}000\,000\,030\,557\,9 .$$

A fenti 2.65. Algoritmusnak nem csak a helyességét kell bebizonyítanunk, hanem gyorsaságát és pontosságát is meg kell vizsgálnunk. Az alábbi számolásokban meglepő eredményeket kapunk ezekre a kérdésekre.

[^6]: Joseph Raphson (1668-1712) angol matematikus.


**2.68. Tétel.** Tetszőleges $\alpha, x_0 \in \mathbb{R}^+$ kezdő számokra és a (2.22) képlettel meghatározott további számokra, $n \geq 1$ esetén

(i) $x_n \geq \sqrt{\alpha}$ ,

(ii) az $(x_n)$ sorozat szigorúan monoton csökken ($n \geq 1$),

(iii) $\lim\limits_{n\to\infty} x_n = \sqrt{\alpha}$ ,

(iv)
$$0 < x_n - \sqrt{\alpha} < \left(\frac{x_1 - \sqrt{\alpha}}{x_1 + \sqrt{\alpha}}\right)^{2^{n-1}} (x_2 + \sqrt{\alpha}) \tag{2.23}$$
vagy másképpen:
$$\left| x_n - \sqrt{\alpha} \right| < \left(\frac{x_1 - \sqrt{\alpha}}{x_1 + \sqrt{\alpha}}\right)^{2^{n-1}} (x_2 + \sqrt{\alpha}) \tag{2.24}$$

*Megjegyzés:* (i) és (ii) és a 2.27. Tétel alapján az $(x_n)$ sorozat konvergens.

**Bizonyítás.** (i) A középiskolában tanult számtani- és mértani- közepek közötti egyenlőtlenséget alkalmazzuk az $x_n$ és $\dfrac{\alpha}{x_n}$ számokra:
$$x_{n+1} = \frac{x_n + \frac{\alpha}{x_n}}{2} \geq \sqrt{x_n \cdot \frac{\alpha}{x_n}} = \sqrt{\alpha} .$$

(ii) A $\dfrac{\alpha}{x_{n+1}}$ tört nevezőjét az (i) pont alapján csökkentjük, miáltal a tört értéke növekszik:
$$x_{n+2} = \frac{x_{n+1} + \frac{\alpha}{x_{n+1}}}{2} \leq \frac{x_{n+1} + \frac{\alpha}{\sqrt{\alpha}}}{2} \tag{2.25}$$
és ismét az (i) pont alapján
$$\frac{x_{n+1} + \sqrt{\alpha}}{2} \leq \frac{x_{n+1} + x_{n+1}}{2} = x_{n+1} \tag{2.26}$$
tehát (2.25)-t és (2.26)-t összeolvasva kapjuk: $x_{n+2} \leq x_{n+1}$.

(iii) A fentiek alapján $x_n$ konvergens, jelölje $\beta$ a határértékét: $\lim\limits_{n\to\infty} x_n = \beta$. Ekkor a (2.22) összefüggés alapján
$$\beta = \lim_{n\to\infty} x_{n+1} = \lim_{n\to\infty} \frac{x_n + \frac{\alpha}{x_n}}{2} = \frac{\lim\limits_{n\to\infty} x_n + \frac{\alpha}{\lim\limits_{n\to\infty} x_n}}{2} = \frac{\beta + \frac{\alpha}{\beta}}{2}$$
ahonnan $2\beta = \beta + \dfrac{\alpha}{\beta}$, $2\beta^2 = \beta^2 + \alpha$ vagyis $\beta = \sqrt{\alpha}$.

(iv) A bizonyítást ld. pl. [U] 40.e) feladat megoldásában a 103-104. oldalakon. $\square$

**2.69. Megjegyzés.** Célszerű tehát a (2.24) egyenlőtlenségben a $\dfrac{x_1 - \sqrt{\alpha}}{x_1 + \sqrt{\alpha}}$ tagot 1-nél kisebbnek beállítanunk (ezzel most nem foglalkozunk), hogy a kívánt pontossághoz ($\varepsilon$) a megfelelő lépésszámot ($n$) megtaláljuk. Képlet helyett az alábbi példát javasoljuk:


**2.70. Példa.** Legyenek $\alpha = 5$, $x_1 = 3$ ($x_0$ nem érdekes).
Ekkor $\dfrac{x_1 - \sqrt{\alpha}}{x_1 + \sqrt{\alpha}} = \dfrac{3 - \sqrt{5}}{3 + \sqrt{5}} < \dfrac{1}{5}$, $x_2 = \dfrac{3 + \frac{5}{3}}{2} = \dfrac{7}{3}$, így
$$x_n - \sqrt{5} < \left(\frac{1}{5}\right)^{2^{n-1}} \cdot \frac{7}{3} . \tag{2.27}$$

(i) Innen látható: már $n \geq 5$ esetén $x_n - \sqrt{5} < 10^{-10}$, vagyis $x_5$ már tíz tizedesjegyre pontos!
A fenti esetben $\varepsilon = 10^{-10}$ és $n_0 = 5$.

(ii) Hány lépés kell például 30 tizedesjegy esetén, azaz $\varepsilon = 10^{-30}$ esetén $n_0 = ?$
Az (2.27) összefüggés szerint az
$$\left(\frac{1}{5}\right)^{2^{n-1}} \cdot \frac{7}{3} < \varepsilon = 10^{-30}$$
egyenlőtlenséget kell megoldanunk, ahonnan:
$$2^{n-1} > \log_{1/5}\left(\frac{3}{7} \cdot 10^{-30}\right) ,$$
$$n > \log_2\left(\log_{1/5}\left(\frac{3}{7} \cdot 10^{-30}\right)\right) + 1 \approx 6{,}4412 ,$$
vagyis 7 (hét!) lépés után 30 tizedesjegy pontosság - fantasztikus!

(iii) *Házi feladat:* 100 tizedesjegy esetén $n_0 = ?$ Talán 10? Próbáljuk előbb megbecsülni, utána számoljuk ki[^7]!

**2.71. Megjegyzés.** 8-nál több tizedesjegy számolásához azonban sajnos a zsebszámológép már nem elég pontos, hiszen minden $x_n$ tagot legalább ilyen pontossággal kell kiszámolnunk. (A 6.2. Megjegyzésben látni fogjuk, hogy részletszámoláskor is megnőhetnek a hibák, főleg osztáskor - Newton képletében pedig ott van a $\dfrac{\alpha}{x_n}$ tag.)
30 tizedesjegyhez megpróbálkozhatunk a Windows zsebszámológépével, de a részletszámolások hibái itt is összegyűlhetnek, és elronthatják a végeredményt!

Köbgyököt is vonhatunk hasonlóan:

**2.72. Algoritmus.** Legyen $\alpha \in \mathbb{R}^+$ tetszőleges pozitív szám. Ekkor $\sqrt[3]{\alpha}$ közelítő kiszámításához válasszunk egy akármilyen $x_0 > 0$ kezdő számot, és a további közelítések legyenek
$$x_{n+1} := \frac{2x_n + \frac{\alpha}{(x_n)^2}}{3} . \tag{2.28}$$

**2.73. Tétel.** Tetszőleges $\alpha, x_0 \in \mathbb{R}^+$ kezdő számokra és a (2.28) képlettel meghatározott további számokra az $(x_n)$ sorozat konvergens, $\lim\limits_{n\to\infty} x_n = \sqrt[3]{\alpha}$, és $n \geq 2$ esetén
$$0 < x_n - \sqrt[3]{\alpha} < (x_2 - \sqrt[3]{\alpha})^{2^{n-2}} .$$

[^7]: $\log_2\left(\log_{1/5}\left(\frac{3}{7} \cdot 10^{-100}\right)\right) + 1 \approx 8{,}1659$, vagyis már 9 azaz kilenc! lépés elég 100 tizedesjegyhez !!!!!


(A Tétel bizonyítása megtalálható pl. [U] 41.feladat megoldásában, a 104-105.oldalakon.)

**2.74. Megjegyzés.** *A tétel szerint tehát, ha jól eltaláljuk $x_2$ ill. $x_1$ -et, akkor $\left(x_2 - \sqrt[3]{\gamma}\right) < 1$ és $n$ növekedésével nagyon gyorsan tart $0$ -hoz.*


# 3. fejezet

# Sorok

A (végtelen) numerikus (szám-, lat.) sorok elmélete legkevésbé kapcsolódik a függvényvizsgálathoz, de sok alkalmazásnál (integrál-, valószínűség-, közelítő számítások, fizika) szükségünk van rá.

## 3.1. Általános összefüggések

A **Probléma:** *Hogyan adjunk össze nagyon sok, pl. végtelen sok (esetleg nagyon kicsi) mennyiséget?*

Valószínűleg először összeadnánk pár tagot, majd egyre többet, és még többet ... . A matematikusok is így csinálják:

**3.1. Definíció.** *(o)* Tetszőleges $a_0, a_1, \ldots, a_n, \ldots \in \mathbb{R}$ valós számok esetén a

$$a_0 + a_1 + \ldots + a_n + \ldots \tag{3.1}$$

végtelen ( szimbolikus) *„összeget"* *numerikus* (szám-, lat.) *sor*-nak nevezzük, rövid jelölése

$$\sum_{n=0}^{\infty} a_n . \tag{3.2}$$

*(i)* A sor $N$ -edik *részletösszege* ($N \in \mathbb{N}$ tetszőleges)

$$s_N := \sum_{n=0}^{N} a_n = a_0 + a_1 + \ldots + a_N .$$

*(ii)* A $\sum\limits_{n=0}^{\infty} a_n$ sor *konvergens* és *összege* az $A \in \mathbb{R}$ valós szám, ha a részletösszegek $(s_N)_{N=0}^{\infty}$ sorozata $A$ -hoz konvergál: $\lim\limits_{N\to\infty} s_N = A$ .

*(iii)* A nem konvergens sorokat *divergensnek* nevezzük.

**3.2. Megjegyzés.** *(i)* A $\sum$ alatt és fölött mindig lényeges, milyen határok állnak, nyilván az összeg függ attól, hogy hány (és mely) tagokat adjuk össze. Néha előfordul, hogy néhány kis $n$ -re $a_n$ nincs értelmezve (vagy értékük nem lényeges), ekkor a $\sum$ alatt $n = 0$ helyett $n = n_0$ áll valamilyen $n_0 \in \mathbb{N}$ számra.


Azonban $n \geq n_0$ esetén minden $n$ -re $a_n$ -nek értelmesnek (értelmezhetőnek) kell lennie, kivétel nélkül, és értékét figyelembe kell vennünk a $\sum$ összeg kiszámításához!

*(ii)* A (3.2) azaz (3.1) kifejezések csak formális összeadások, hiszen végtelen sok tagot valójában NEM tudunk összeadni, ezért kell a részletösszeg és annak határértéke - definíció!

$s_n$ egyébként nem más, mint amit önkéntelenül magunk is csinálnánk: egyenként összeadnánk a tagokat (az áruház futószalagján, $+$ / $-$ bónokkal) és a részösszeget figyelnénk.

*(iii)* Vigyázzunk az elnevezésekre, nagyon hasonlítanak: sor $\neq$ sorozat, Reihe $\neq$ Folgende, ... , sequence $\neq$ series .

**3.3. Állítás.** *Ha csak a $\sum a_n$ sor konvergenciája a kérdés, akkor lényegtelen, hogy a $\sum$ alatt $n = n_0$ konkréten mennyi (vagyis, honnan indul a sor összegezése).*

**3.4. Megjegyzés.** Legtöbb sorról csak azt tudjuk, hogy konvergens vagy divergens, de pontos összegét nem, csak közelítőleg (akárhány tizedesjegyre).

Például a $\sum\limits_{n=1}^{\infty} \dfrac{1}{n^s}$ sorokról könnyen belátható, hogy konvergensek minden $s > 1$ esetén, de már $s = 3$ esetén sem tudjuk $\sum\limits_{n=1}^{\infty} \dfrac{1}{n^3}$ pontos összegét.

A sorok konvergenciájának eldöntésére szolgáló módszereket *kritériumoknak* (ismertetőjegy, gör.) nevezik. Alább csak a legegyszerűbbet tudjuk ismertetni helyszűke miatt, [www5] -ben például sok kritérium megtalálható.

**3.5. Tétel.** (0. kritérium) *Ha egy $\sum\limits_{n=0}^{\infty} a_n$ sor konvergens, akkor az összeadandó tagok $(a_n)$ sorozata köteles $0$ -hoz tartani:*

$$a_n \to 0 . \tag{3.3}$$

A 0. kritérium nem fordítható meg: (3.3) -ból még semmi sem következik.

**3.6. Példa.** Az $\dfrac{1}{n}$ sorozat $0$ -hoz tart: $\dfrac{1}{n} \to 0$ , mégis a $\sum\limits_{n=1}^{\infty} \dfrac{1}{n}$ összeg határértéke $+\infty$ vagyis divergens, hiszen bármilyen (nagy) $N \in \mathbb{N}$ esetén

$$\frac{1}{1} + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \frac{1}{5} + \frac{1}{6} + \frac{1}{7} + \frac{1}{8} + \frac{1}{9} + \frac{1}{10} + \ldots + \frac{1}{N} \geq$$
$$\geq \frac{1}{1} + \frac{1}{2} + \frac{1}{2} + \frac{1}{4} + \frac{1}{4} + \frac{1}{4} + \frac{1}{4} + \frac{1}{8} + \frac{1}{8} + \frac{1}{8} + \ldots + \frac{1}{N} =$$
$$= 1 + 2 \cdot \frac{1}{2} + 4 \cdot \frac{1}{4} + 8 \cdot \frac{1}{8} + \ldots = 1 + 1 + 1 + 1 + \ldots$$

ami nyilvánvalóan akármilyen nagy lehet, vagyis $+\infty$ -be tart, divergens.

A mértani sorozatok nagyon speciálisak, a gyakorlatban sokszor találkozunk velük:

**3.7. Definíció.** *A $\sum\limits_{n=0}^{\infty} a_0 q^n$ alakú összegeket mértani sor-nak nevezzük, ha $q \in \mathbb{R}$ nem függ $n$ -től (vagyis $a_0$ és $q$ rögzített valós vagy komplex számok).*


**3.8. Tétel.** *A $\sum\limits_{n=0}^{\infty} a_0 q^n$ alakú mértani sor pontosan akkor konvergens, ha a hányados $(q)$ abszolút értéke 1-nél kisebb: $|q| < 1$ . (Valós számok esetén ezt így írhatjuk: $-1 < q < 1$ .) Ez esetben a mértani sor összege:*

$$\sum_{n=0}^{\infty} a_0 q^n = \frac{a_0}{1 - q} .$$

**Bizonyítás.** $s_N = \sum\limits_{n=0}^{N} a_0 q^n = a_0 \dfrac{q^{N+1} - 1}{q - 1}$ .

A $q^{N+1}$ sorozat pontosan akkor konvergens, ha $|q| < 1$ . Ekkor pedig $q^{N+1} \to 0$ , tehát

$$\sum_{n=0}^{\infty} a_0 q^n = \lim_{N\to\infty} s_N = \lim_{N\to\infty} a_0 \frac{q^{N+1} - 1}{q - 1} = a_0 \frac{0 - 1}{q - 1} = \frac{a_0}{1 - q} .$$

Csak érdekességképpen említjük meg Riemann tételét, amelynek megértéséhez előbb egy definíció és egy tétel szükséges:

**3.9. Definíció.** *(i)* A $\sum\limits_{n=0}^{\infty} a_n$ sor *abszolút konvergens*, ha a $\sum\limits_{n=0}^{\infty} |a_n|$ sor (a tagok abszolútértékeinek összege) konvergens.

*(ii)* A $\sum\limits_{n=0}^{\infty} a_n$ sor *feltételesen konvergens*, ha $\sum\limits_{n=0}^{\infty} a_n$ konvergens de $\sum\limits_{n=0}^{\infty} |a_n|$ divergens.

**3.10. Tétel.** *(i) Ha egy $\sum\limits_{n=0}^{\infty} a_n$ sor abszolút konvergens, akkor konvergens is.*
*(ii) Abszolút konvergens sor tagjai tetszőleges sorrendben adhatók össze.*

Ez nem abszolút (azaz csak feltételesen) konvergens sorokra egyáltalában nem igaz:

**3.11. Tétel.** (Riemann$^1$) tétele) *Ha egy $\sum\limits_{n=0}^{\infty} a_n$ sor feltételesen konvergens, akkor tetszőleges $\alpha \in \mathbb{R} \cup \{+\infty, -\infty\}$ szám esetén a sor átrendezhető úgy (azaz tagjai olyan sorrendben adhatók össze), hogy határértéke pontosan $\alpha$ legyen, sőt a sor úgy is átrendezhető, hogy semmilyen (véges vagy végtelen) határértéke se legyen.*

## 3.2. Nevezetes sor-határértékek

Hasznos lesz megismernünk néhány, többször előforduló határértéket: legtöbbször elegendő az általunk vizsgált sort összehasonlítanunk (pl. Weierstrass kritériumával) az alábbiak valamelyikével (legtöbbször valamelyik hiperharmonikus sorral).

---

$^1$) Georg Friedrich Bernhard Riemann (1826-1866), német matematikus.


**3.12. Tétel.** *Nevezetes sor-határértékek:*

$$\sum_{n=0}^{\infty} q^n = \begin{cases} \dfrac{1}{1-q} & \text{ha } |q| < 1, \ q \in \mathbb{C} \\ +\infty & \text{ha } 1 \leq q, \ q \in \mathbb{R} \\ \text{divergens} & \text{máskor} \end{cases} \qquad \sum_{n=1}^{\infty} \frac{1}{n^s} = \begin{cases} \text{konvergens} & \text{ha } 1 < s \\ +\infty & \text{ha } s \leq 1 \end{cases}$$
$$\text{(geometriai / mértani sor)} \hspace{3em} \text{([hiper-] harmonikus sorok)} \tag{3.4}$$

$$\sum_{n=0}^{\infty} \frac{1}{n!} = e , \qquad \sum_{n=0}^{\infty} \frac{t^n}{n!} = e^t \ (t \in \mathbb{R}) , \qquad \sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6} , \qquad \sum_{n=1}^{\infty} \frac{(-1)^n}{n} = \ln(2) . \tag{3.5}$$

**3.13. Megjegyzés.** *(i)* Itt is megfigyelhetjük: minél gyorsabban / lassabban tart $a_n \to 0$ -hoz, annál inkább lesz a $\sum\limits_{n=0}^{\infty} a_n$ sor konvergens / divergens. Például ezért $s = 1$ a „választóvonal" a hiperharmonikus soroknál, amit könnyű megjegyezni.

*(ii)* Könyvünkben ugyan nem vizsgáljuk a konvergencia gyorsaságát, de mégis megemlítjük például: a fentiek alapján a $\sum\limits_{n=0}^{\infty} \dfrac{1}{n!}$ sor is $e$ -hez tart, az $\left(1 + \dfrac{1}{n}\right)^n$ sorozat is, a 2.57.Tétel (2.18) összefüggése szerint. Azonban:

$n = 10^3$ esetén $\left(1 + \dfrac{1}{10^3}\right)^{10^3} = 2{,}716\,923\,932\,235\,89$ csak kettő tizedesjegyre pontos,

$n = 10^6$ esetén $\left(1 + \dfrac{1}{10^6}\right)^{10^6} = 2{,}718\,280\,469\,319\,38$ csak öt tizedesjegyre pontos,

míg $\sum\limits_{n=0}^{10} \dfrac{1}{n!} = 2{,}718\,281\,801\,146\,38$ már hét tizedesjegyre pontos !

Tájékoztatásul: $e = 2{,}718\,281\,828\,459\,05\ldots$ .

Nagyon sok részletesen megoldott feladatot találunk pl. [SzK], [SzF] és [www0] gyűjteményekben.


# 4. fejezet

# Függvények határértéke és folytonossága

Ha egy függvény viselkedését szeretnénk megvizsgálni, akkor nyilván nem elég egy-egy pontban kiszámítanunk / megmérnünk értékeit, hanem egy-egy kérdéses $x_0$ ponthoz közeledve, annak környezetében, vagyis egy „kis" intervallumon kell a függvényt megvizsgálnunk. (Sokszor nem is az $x_0$ pontban felvett függvényérték a lényeges, mint ahogyan egy vulkáni krátert is csak megközelíteni tudunk.) A „közeledést" a limesz, az $f(x_0)$ értékkel való kapcsolatát a folytonosság szakkifejezésekkel adjuk meg az alábbiakban.

A környezet és a belső pont fogalmak definícióit a 0.2. Fejezetben a 0.5. és 0.7. Definíciókban ismertettük.

## 4.1. Definíciók és alaptulajdonságok

### 4.1.1. Határértékek végesben

„Ha az $x$ tengely mentén megfelelően kicsit mozdulunk el akkor $f(x)$ is megfelelően kicsit mozdul el, közelít egy $A$ értékhez" - de mekkora is a „megfelelően" kicsi? Ezért van az alábbi definícióban $x$ és $y$ és a nekik megfelelő $\delta$ és $\varepsilon$ fordított sorrendben.

**4.1. Definíció.** (Függvénynek végesben (véges helyen) vett véges határértéke)
Legyen $f : \mathbb{R} \hookrightarrow \mathbb{R}$ tetszőleges függvény, $x_0 \in \mathbb{R}$ tetszőleges olyan valós szám, amelynek valamely $\delta$ sugarú lyukas környezetét $\mathrm{Dom}(f)$ tartalmazza. Ekkor az $f(x)$ függvénynek az $x_0$ pontban (végesben) van *véges határértéke*, ha van olyan $A \in \mathbb{R}$ valós szám, amelynek minden $\varepsilon > 0$ sugarú környezetéhez (hiba- vagy tűréshatár) található az $x_0$ számnak egy olyan $\delta > 0$ sugarú környezete (küszöbhatár), amelynek minden $x$ eleme esetén $f(x)$ az $A$ -nak $\varepsilon$ - sugarú környezetébe esik (vagyis $f(x)$ értéke $A$ -tól legfeljebb $\varepsilon$ -al tér el).
Kvantorokkal:
$$(\forall \varepsilon > 0)\, (\exists \delta > 0)\, (\forall x \in \mathrm{Dom}(f)) :$$
$$\text{ha } |x - x_0| < \delta \text{ akkor } |f(x) - A| < \varepsilon . \tag{4.1}$$


A fenti hosszú összefüggés rövid jelölése:

$$\lim_{x\to x_0} f(x) = A$$

(limesz=határ, lat.) A fenti $A$ számot hívjuk az $f$ függvény $x_0$ pontban vett (kiszámított) *határértékének*.
Ez esetben az $f$ függvényt *konvergensnek* mondjuk az $x_0$ pontban. Az $f$ függvény minden más esetben *divergens*.

$\delta$ nyilván az $x_0$ ponttól való (vízszintes) távolságot, míg $\varepsilon$ a függőleges, $A$ -tól való eltérést méri.

**4.2. Megjegyzés.** *(i)* Azt a fenti folyamatot, amikor az $f(x)$ értékek halmazából kiszámítjuk $\lim\limits_{x\to x_0} f(x)$ , vagyis $A$ értékét, *határátmenet*-nek nevezzük.

*(ii)* Jól jegyezzük meg, hogy a határérték (limesz) kiszámításához az $x_0$ pontnak egy környezetét kell használnunk, vagyis $x_0 \in \mathrm{Dom}(f)$ szükségképpen belső pont kell, hogy legyen!

*(iii)* A 4.1.2. „Féloldali határértékek". fejezetben megkülönböztetünk jobb-, bal- és kétoldali határértékeket, a fenti definícióban a kétoldali határértéket pontosítottuk. Ha tehát nyomatékosan a fenti definícióra akarunk hivatkozni, akkor használnunk kell a kétoldali jelzőt is, bár megállapodás szerint a jelző nélküli határérték szó mindenképpen a kétoldali (fenti) definícióra hivatkozik.

Az alábbi definícióban pedig azt a jelenséget pontosítjuk, amikor $x_0$ -hoz közeledve $(x)$ a függvény értékei $(y = f(x))$ „minden határon túl" növekednek:

**4.3. Definíció.** (Függvénynek végesben (véges helyen) vett végtelen határértékei)
Legyen $f : \mathbb{R} \hookrightarrow \mathbb{R}$ tetszőleges függvény, $x_0 \in \mathbb{R}$ tetszőleges olyan valós szám, amelynek valamely $\delta$ sugarú lyukas környezetét $\mathrm{Dom}(f)$ tartalmazza. Ekkor az $f(x)$ függvénynek az $x_0$ pontban (végesben)
*(i)* $+\infty$ *végtelen határértéke* van, ha bármely $p$ valós szám esetén létezik $x_0$ -nak olyan $\delta$ sugarú (lyukas) környezete amelyben minden $x$ számra $f(x) > p$ .
Kvantorokkal:
$$(\forall p \in \mathbb{R})\, (\exists \delta > 0)\, (\forall x \in \mathrm{Dom}(f)) \text{ ha } |x - x_0| < \delta \text{ akkor } f(x) > p .$$
A fentiek jelölése:
$$\lim_{x\to x_0} f(x) = +\infty .$$

*(ii)* $-\infty$ *végtelen határértéke* van, ha bármely $p$ valós szám esetén létezik $x_0$ -nak olyan $\delta$ sugarú (lyukas) környezete amelyben minden $x$ számra $f(x) < p$ .

Kvantorokkal:
$$(\forall p \in \mathbb{R})\, (\exists \delta > 0)\, (\forall x \in \mathrm{Dom}(f)) \text{ ha } |x - x_0| < \delta \text{ akkor } f(x) < p .$$
A fentiek jelölése:
$$\lim_{x\to x_0} f(x) = -\infty .$$


**4.4. Megjegyzés.** Vigyázzunk a $>$ , $<$ , $+$ és $-$ jelekre: a fenti definíciók csak ezen kis „apróságokban" különböznek!
Könnyen látható, hogy csak nagyméretű (nagy abszolút értékű) pozitív ill. negatív $p$ értékek a lényegesek - ők azok a „minden határok", amiken túl a függvény növekszik ($+$ ill. $-$ irányban).

Vizsgáljuk meg például az $\dfrac{1}{x^2}$ vagy $\lg|x|$ függvényeket az $x_0 = 0$ pont környékén:

*(ábra)* $\dfrac{1}{x^2}$

*(ábra)* $\log|x|$

Az ábrák alapján láthatjuk, hogy a $+\infty$ és $-\infty$ értékű határértékek többek között a függőleges aszimptotákkal vannak kapcsolatban. Ezt a problémát (a vízszintes és ferde aszimptotákkal együtt) az 6.33. Állításban vizsgáljuk meg az 6.3. „Részletes függvényvizsgálat" Fejezetben.

**4.5. Megjegyzés.** A 2. „Sorozatok" fejezetben megismert 2.34. és 2.37. Tételekben megismert összefüggések a függvények végtelen határértékeire (akár egy $x_0$ véges pontban, akár $+\infty$ akár $-\infty$ -ben találtuk őket) is változatlanul érvényesek!

Részletesen kidolgozott példákat találunk az [SzK] és [SzF] feladatgyűjteményekben.

Az alábbiakban mind a 4.1. mind a 4.3 Definíciók eseteivel foglalkozunk (egyszerre).

**4.6. Megjegyzés.** Vigyázzunk: a $\lim\limits_{x\to x_0}$ alján az $x \to x_0$ jel csak közelítést jelent, érdemes az $x \neq x_0$ figyelmeztetést is melléírnunk. Ez is mutatja, hogy


az $f$ függvény $x_0$ pont körüli vizsgálatánál $x_0 \in \mathrm{Dom}(f)$ lényegtelen, azaz $x_0 \notin \mathrm{Dom}(f)$ is lehetséges (ezért szerepel „lyukas" környezet a definícióban)!
$x_0$ és $x$ szerepét se cseréljük fel a definícióban!

Adott $\varepsilon$ esetén az $(x_0 - \delta; x_0 + \delta)$ környezet összes $x$ pontjára persze nem tudjuk ellenőrizni az $|f(x) - A| < \varepsilon$ követelményt a 4.1.Definícióban, csak „néhány" $x_n$ helyen:

**4.7. Tétel.** (Átviteli elv) *Az 4.1.Definíció jelölései mellett: a $\lim\limits_{x\to x_0} f(x) = A$ összefüggés pontosan akkor teljesül, ha: minden $x_0$ -hoz konvergáló $(x_n)$ sorozatra az $f(x_n)$ értékek sorozata is $A$ -hoz közelít, vagyis*
$$\lim_{n\to\infty} x_n = x_0 \text{ esetén } \lim_{n\to\infty} f(x_n) = A .$$

Az átviteli elv segítségével könnyen megvizsgálhatjuk például a $\sin\dfrac{1}{x}$ függvényt az $x_0 = 0$ pont körül:

**4.8. Példa.** Legyen $f(x) = \sin\dfrac{1}{x}$ , $\mathrm{Dom}(f) = \mathbb{R} \setminus \{0\}$ , és $x_0 := 0$ .
Az $x_n := \dfrac{1}{n\pi} \to 0$ sorozat választásával $f(x_n) = \sin(n\pi) = 0$ vagyis $\lim\limits_{n\to\infty} f(x_n) = 0$ . Azonban egy másik, $z_n := \dfrac{1}{\frac{\pi}{2} + 2n\pi} \to 0$ sorozat esetén $\lim\limits_{n\to\infty} f(z_n) = 1$ , ami már mutatja, hogy a $\sin\dfrac{1}{x}$ függvénynek nem lehet semmilyen határértéke az $x_0 := 0$ pontban.
No, és mi van pl. az $u_n := \dfrac{1}{\frac{3\pi}{2} + 2n\pi}$ , $v_n := \dfrac{1}{\frac{\pi}{4} + 2n\pi}$ és $w_n := \dfrac{1}{\frac{2\pi}{3} + 2n\pi}$ , ... $\to 0$ sorozatokkal? (HF)
és valóban :

*(ábra)* $\sin\dfrac{1}{x}$ („karambolfüggvény")


**4.9. Megjegyzés.** A gyakorlatban óvatosan kell bánnunk az Átviteli elvvel: az $x_0$ -hoz konvergáló összes $(x_n)$ sorozatra kellene $\lim\limits_{n\to\infty} f(x_n)$ értékét ellenőriznünk, de végtelen sok ilyen sorozat van (időnk pedig véges), ráadásul ez a végtelen egy „nagyobbik" féle végtelen: kontinuum! (A különböző végtelenekről pl. honlapomon a
http://math.uni-pannon.hu/~szalkai/Szamoss1www.pdf dokumentumban olvashatnak az érdeklődők.)

A határérték precíz fogalmának megismerése után rátérhetünk a folytonosság kérdésére: „ha $x$ közeledik $x_0$ -hoz, akkor $f(x)$ is közeledik $f(x_0)$ -hoz" - vagyis „ceruzánkat nem kell felemelnünk" amikor $x_0$ -hoz közeledünk illetve „oda is érünk".

**4.10. Definíció.** *(i)* (könnyített változat) *Az $f : \mathbb{R} \hookrightarrow \mathbb{R}$ függvény folytonos az $x_0 \in \mathrm{Dom}(f)$ belső pontban, ha a $\lim\limits_{x\to x_0} f(x)$ határérték létezik, véges és $\lim\limits_{x\to x_0} f(x) = f(x_0)$ .*
Más szavakkal: a határérték megegyezik a (be)helyettesítési értékkel.
A 4.1.Definícióval összetéve megkapjuk a teljes definíciót:
*(ii)* (teljes változat) *Az $f : \mathbb{R} \hookrightarrow \mathbb{R}$ függvény folytonos az $x_0 \in \mathrm{Dom}(f)$ belső pontban, ha $f(x_0)$ -nak bármely $\varepsilon > 0$ sugarú környezetéhez található $x_0$ -nak olyan $\delta > 0$ sugarú környezete, amely környezetből vett bármely $x$ érték esetén $f(x)$ is az $f(x_0)$ -nak az adott $\varepsilon > 0$ sugarú környezetébe esik.*
Kvantorokkal
$$(\forall \varepsilon > 0)\, (\exists \delta > 0)\, (\forall x \in \mathrm{Dom}(f)) \text{ ha } |x - x_0| < \delta \text{ akkor } |f(x) - f(x_0)| < \varepsilon .$$

**4.11. Definíció.** *Az $f$ függvényt folytonosnak mondjuk egy $I \subseteq \mathrm{Dom}(f)$ nyílt intervallumon, ha az $I$ intervallum minden $x_0 \in I$ pontjában az $f$ függvény folytonos.*

Zárt intervallum végpontjaiban a függvény csak egyik oldalról (jobbról vagy balról) lehet folytonos, a féloldali határértéket és folytonosságot a következő fejezetben vizsgáljuk.
No lássuk a folytonosság gyakorlati oldalát:

**4.12. Tétel.** *(i) Az alapfüggvények és inverzeik mind folytonosak értelmezési tartományaik belső pontjaiban.*
*(ii) Az alapműveletekkel és kompozícióval összetett függvények is folytonosak értelmezési tartományaik belső pontjaiban.* Pontosabban:
1. ha $f(x)$ és $g(x)$ is folytonos az $x_0$ pontban, akkor
 ▷ $f(x) + g(x)$ , $f(x) - g(x)$ és $f(x) \cdot g(x)$ is folytonosak az $x_0$ pontban;
 ▷ $\dfrac{f(x)}{g(x)}$ is folytonos az $x_0$ pontban, feltéve hogy $x_0$ egy környezetében $g(x) \neq 0$;
2. ha $g(x)$ folytonos az $x_0$ pontban és $f(x)$ folytonos az $y_0 = g(x_0)$ pontban,


akkor $f \circ g$ azaz $f(g(x))$ is folytonos az $x_0$ pontban;
3. ha $f(x)$ folytonos az $x_0$ pontban és szigorúan monoton az $x_0$ egy környezetében, akkor $f$ invertálható és az $f^{-1}$ inverzfüggvény is folytonos az $y_0 = f(x_0)$ pontban.

**4.13. Következmény.** *A fenti sok tétel következményeképpen a „hétköznapi életben" használt függvények (képletek) az értelmezési tartományaik belső pontjaiban mind folytonosak.*
(Természetesen a matematikusok sok egyéb „különleges" függvényt is vizsgálnak.)

### 4.1.2. Féloldali határértékek

Nagyon sok olyan függvényt ismerünk, amelyeknél bizonyos pontokhoz jobbról és balról közeledve (csak nagyobb illetve kisebb értékeket vizsgálva) a függvényértékek másként viselkednek. Ilyen függvények például $\dfrac{1}{x}$ , $\mathrm{ctg}(x)$ , $\mathrm{sgn}(x)$ az $x_0 = 0$ pont körül, sőt általában minden tört (pl. $\mathrm{tg}$) nevezőjének zérushelyeinél. Vannak olyan függvények is (pl. $\sqrt{x}$ , $\arcsin$ , $\arccos$), melyek értelmezési tartománya zárt vagy nyílt intervallum, márpedig az intervallum végpontjaihoz csak egyik irányból közelíthetünk ($\mathrm{Dom}(f)$ miatt). Az abszolútérték függvényt tartalmazó kifejezés (pl. $|f(x)|$ ) is másként viselkedik azon pont jobb- és baloldali környezetében, ahol a benne szereplő $f(x)$ mennyiség előjelet vált. Tehát az előző fejezet 4.1. és 4.3. Definíciókat finomítanunk kell. (A nyílt és zárt $[a; b]$ intervallumokat és a féloldali környezeteket a 0.2. „Valós számhalmazok" fejezetben írtuk le.)

**4.14. Definíció.** Tekintsük a 4.1. Definíció jelöléseit.
*(o)* A 4.1. Definíció maradéktalan teljesülése esetén *kétoldali határértékről* beszélünk
*(i)* Ha a 4.1. Definícióban az $x_0$ pontról csak annyit követelünk meg, hogy:
„ $\mathrm{Dom}(f)$ tartalmazza $x_0$ -nak valamely $\delta$-sugarú jobboldali környezetét ",
továbbá a definícióban csak ennek jobboldali környezetnek az $x \in \mathrm{Dom}(f)$ elemeivel foglalkozunk, vagyis
$$x > x_0 ,$$
akkor az $A \in \mathbb{R}$ számot az $f(x)$ függvénynek az $x_0$ pontban (végesben) *jobboldali határértékének* nevezzük, és így jelöljük:
$$\lim_{x\to x_0 + 0} f(x) = A \quad \text{vagy csak} \quad \lim_{x\to x_0 +} f(x) = A . \tag{4.2}$$

*(ii)* Ha a 4.1. Definícióban az $x_0$ pontról csak annyit követelünk meg, hogy:
„ $\mathrm{Dom}(f)$ tartalmazza $x_0$ -nak valamely $\delta$-sugarú baloldali környezetét ",
továbbá a definícióban csak ennek baloldali környezetnek az $x \in \mathrm{Dom}(f)$ elemeivel foglalkozunk, vagyis
$$x < x_0 ,$$
akkor az $A \in \mathbb{R}$ számot az $f(x)$ függvénynek az $x_0$ pontban (végesben) *baloldali határértékének* nevezzük, és így jelöljük:
$$\lim_{x\to x_0 - 0} f(x) = A \quad \text{vagy csak} \quad \lim_{x\to x_0 -} f(x) = A . \tag{4.3}$$


**4.15. Megjegyzés.** (i) Nagyon ügyeljünk a részletekre: a (4.2) és (4.3) képletekben a $\lim$ alatt, $x_0$ melletti $+$ és $-$ jelek nagyon fontosak. Nyugodtan írjuk alájuk a megfelelő $>$ és $<$ jeleket, vagyis $x > x_0$ ill. $x < x_0$ !

(ii) A jobb- és baloldali határértékek szemléltetése „egyszerű": az előző alfejezet ábráinak csak $x_0$-tól jobbra- vagy balra- eső felét kell tekintenünk.

A különféle oldali határértékek fenti definícióit részletesen megvizsgálva könnyen megérthetjük és beláthatjuk az alábbi fontos tételt:

**4.16. Tétel.** Egy $f : \mathbb{R} \hookrightarrow \mathbb{R}$ függvénynek pontosan akkor van egy $A \in \mathbb{R}$ (kétoldali) véges határértéke egy tetszőleges $x_0 \in \mathbb{R}$ pontban ($x_0$-nak valamely $\delta$ sugarú lyukas környezetét $\mathrm{Dom}(f)$ tartalmazza), ha $f$-nek van jobbról is és balról is határértéke és ez a két (féloldali) határérték egyenlő.

Ekkor a kétoldali határérték megegyezik a féloldali határértékek közös értékével, azaz

$$\lim_{x\to x_0+} f(x) = \lim_{x\to x_0-} f(x) = A \quad \Longleftrightarrow \quad A = \lim_{x\to x_0} f(x) \,.$$

**4.17. Megjegyzés.** Hangsúlyozzuk, hogy a határértékek létezése is egy fontos tényező a fenti tételben, hiszen nagyon sok olyan függvényt ismerünk, amelyek egyik vagy másik (vagy mindkét) oldali határértéke nem létezik.

A konvergens ill. divergens jelzőket függvényekre általában csak kétoldali határérték létezésekor szoktuk használni.

A féloldali határértékek problémája elsősorban zárt intervallumokon értelmezett függvényeknél jelentkezik, az intervallum végpontjaiban a féloldali folytonosságot is vizsgálnunk kell:

**4.18. Definíció.** (i) Ha az $f$ függvénynek létezik az $x_0$ pontban jobboldali határértéke (a 4.14. Definíció (i) pontjában tett feltevések teljesülése esetén), és $\lim\limits_{x\to x_0+} f(x) = f(x_0)$ , akkor az $f$ függvény *folytonos jobbról* az $x_0$ pontban.

(ii) Ha az $f$ függvénynek létezik az $x_0$ pontban baloldali határértéke (a 4.14. Definíció (ii) pontjában tett feltevések teljesülése esetén), és $\lim\limits_{x\to x_0-} f(x) = f(x_0)$ , akkor az $f$ függvény *folytonos balról* az $x_0$ pontban.

(iii) Az $f$ függvény *folytonos az $[a;b]$ zárt intervallumon*, ha az alábbi három feltétel mindegyike teljesül:
- $f$ folytonos az $a$ pontban (baloldali végpontban) jobbról,
- $f$ folytonos a $b$ pontban (jobboldali végpontban) balról,
- $f$ folytonos az $(a;b)$ nyílt intervallumban (vagyis az $[a;b]$ zárt intervallum belsejében).

**4.19. Megjegyzés.** (i) A bal- és jobboldali folytonosságot gyűjtőnéven nyilván féloldali folytonosságnak nevezzük.

(ii) Nem meglepő, hogy az előző fejezet 4.1.1 ábráinak felét kell tekintenünk a féloldali folytonosság szemléltetéséhez, csak arra kell ügyelnünk, hogy az


$(x_0; f(x_0))$ pont helyére „teli karikát" kell tennünk. Ebből pedig az a meglepő (de nem eltévesztendő) tény következik, hogy:
- jobbról folytonos függvény esetén a grafikon bal végén van a „teli karika" (pl. $\sqrt{x}$),
- balról folytonos függvény esetén a grafikon jobb végén van a „teli karika" (pl. $\arcsin$) !

(iii) A nyílt intervallumon való folytonosságot a 4.11. Definícióban ismertettük.

(iv) Féloldali határértékekkel nem csak függvények és deriváltjaik vizsgálatánál, hanem egyenletek közelítő megoldásánál, közelítő integrál kiszámításánál, valószínűségszámításban és egyéb helyeken találkozhatunk.

A féloldali határértékek is lehetnek végtelen nagyok. A 4.3. Definíciót ugyanúgy kell módosítanunk, mint ahogyan a 4.1. Definícióval tettük.

**4.20. Definíció.** Tekintsük a 4.3. Definíció jelöléseit.

(o) A 4.3. Definíció maradéktalan teljesülése esetén *kétoldali végtelen határértékről* beszélünk.

(+) Ha a 4.3. Definíció (i) ill. (ii) pontjában az $x_0$ pontról csak annyit követelünk meg, hogy:

„ $\mathrm{Dom}(f)$ tartalmazza $x_0$-nak valamely $\delta$-sugarú jobboldali környezetét " ,

továbbá a definícióban csak ennek a jobboldali környezetnek az $x \in \mathrm{Dom}(f)$ elemeivel foglalkozunk, vagyis

$$x > x_0 \,,$$

akkor azt mondjuk, hogy az $f$ függvénynek az $x_0$ pontban *jobboldalról* $+\infty$ ill. $-\infty$ *határértéke van* , és így jelöljük:

$$\lim_{x\to x_0+0} f(x) = +\infty \quad \text{vagy csak} \quad \lim_{x\to x_0+} f(x) = +\infty \tag{4.4}$$

illetve

$$\lim_{x\to x_0+0} f(x) = -\infty \quad \text{vagy csak} \quad \lim_{x\to x_0+} f(x) = -\infty \,. \tag{4.5}$$

(−) Ha a 4.3. Definíció (i) ill. (ii) pontjában az $x_0$ pontról csak annyit követelünk meg, hogy:

„ $\mathrm{Dom}(f)$ tartalmazza $x_0$-nak valamely $\delta$-sugarú baloldali környezetét ",

továbbá a definícióban csak ennek a baloldali környezetnek az $x \in \mathrm{Dom}(f)$ elemeivel foglalkozunk, vagyis

$$x > x_0 \,,$$

akkor azt mondjuk, hogy az $f$ függvénynek az $x_0$ pontban *baloldalról* $+\infty$ ill. $-\infty$ *határértéke van* , és így jelöljük:

$$\lim_{x\to x_0-0} f(x) = +\infty \quad \text{vagy csak} \quad \lim_{x\to x_0-} f(x) = +\infty \tag{4.6}$$

illetve

$$\lim_{x\to x_0-0} f(x) = -\infty \quad \text{vagy csak} \quad \lim_{x\to x_0-} f(x) = -\infty \,. \tag{4.7}$$


Vizsgáljuk meg például az $\dfrac{1}{x}$ és $\operatorname{tg}(x)$ függvényeket szakadási pontjukban, jobbról és balról is. További (részletesen kidolgozott) példákat találunk az [SzK] és [SzF] feladatgyűjteményekben.

Az alábbi tétel is hasznos lesz későbbi alkalmazásokhoz:

**4.21. Tétel.** (Darboux$^{1)}$-Bolzano$^{2)}$ középértéktétel)
Legyen $f : [a;b] \to \mathbb{R}$ az $[a;b]$ intervallumon folytonos függvény.
Ekkor $f$ minden értéket felvesz (legalább egyszer) $f(a)$ és $f(b)$ között, vagyis:
tetszőleges $c \in \mathbb{R}$ , $f(a) < c < f(b)$ számra van olyan $x^* \in [a;b]$ hely, amelyre $f(x^*) = c$ .

**4.22. Következmény.** Ha $f : [a;b] \to \mathbb{R}$ az $[a;b]$ intervallumon folytonos függvény, és $f(a)$ és $f(b)$ különböző előjelűek (azaz $f(a) \cdot f(b) < 0$), akkor az $f$ függvénynek van gyöke az $[a;b]$ intervallumban, azaz van olyan $x^* \in [a;b]$ amelyre $f(x^*) = 0$ .

**4.23. Megjegyzés.** (i) A fenti tétel és következménye szemléletesen egyszerű: folytonos „vonalnak" mindenképpen át kell haladnia az $y = c$ szintvonalon illetve az $x$ tengelyen. A matematikusok különös függvényei miatt azonban nem árt az óvatosság: egy Bizonyítás (könyvünkbe már nem fér bele).

(ii) A tétel csak az $x^*$ pont létezését állítja, megtalálására semmi támpontot nem ad. Azonban a 4.2. „A folytonosság egy alkalmazása" fejezetben egy általános és egyszerű, de ugyanakkor nagyon gyors algoritmust ismertetünk $x^*$ közelítő meghatározására.

### 4.1.3. Határértékek végtelenben

A függvényt „nagyon nagy" $x$ értékek esetén nehéz felrajzolni, ezért a függvény viselkedését, tendenciáját kell megvizsgálnunk „távolodó" $x$ (azaz $x \to +\infty$ illetve $x \to -\infty$) esetén.

Az alábbi esetek hangsúlyosabb megkülönböztetése érdekében számoztuk az egyes pontokat (i1)-től (iii2)-ig.

**4.24. Definíció.** (Függvény végtelenben vett véges határértékei)

(i1) Az $f(x)$ függvénynek $+\infty$-ben van *véges határértéke*, ha van olyan $A \in \mathbb{R}$ valós szám, amelynek bármely környezetéhez található olyan $K$ valós szám: minden $K$-nál nagyobb $x$ számra $f(x)$ az $A$ adott környezetébe esik.

Kvantorokkal:

$(\forall \varepsilon > 0)\,(\exists K \in \mathbb{R})\,(\forall x \in \mathrm{Dom}(f)) :$ ha $K < x$ akkor $|f(x) - A| < \varepsilon$ , jelben

$$\lim_{x\to+\infty} f(x) = A \,.$$

(i2) Az $f(x)$ függvénynek $-\infty$-ben van *véges határértéke*, ha van olyan $A \in \mathbb{R}$ valós szám, amelynek bármely környezetéhez található olyan $K$ valós

$^{1)}$ Gaston Darboux (1842-1917) francia matematikus.
$^{2)}$ Bernard Bolzano (1781-1848) cseh matematikus.


szám: minden $K$-nál kisebb $x$ számra $f(x)$ az $A$ adott környezetébe esik.

Kvantorokkal:

$(\forall \varepsilon > 0)\,(\exists K \in \mathbb{R})\,(\forall x \in \mathrm{Dom}(f)) :$ ha $K > x$ akkor $|f(x) - A| < \varepsilon$ , jelben

$$\lim_{x\to-\infty} f(x) = A \,.$$

A fenti esetekben az $f$ függvényt *konvergensnek* mondjuk $+\infty$ ill. $-\infty$-ben.

Az $f$ függvény minden más esetben *divergens*.

A fenti (i1) esetben nyilván a nagyon nagy pozitív $K$ számok ($K \to +\infty$) a lényegesek, az (i2) esetben pedig a negatív nagy $K$ számok ($K \to -\infty$). Ugyanez igaz az alábbi Definíció megfelelő pontjaira.

**4.25. Definíció.** (Függvény végtelenben vett végtelen határértékei)

(ii1) Az $f(x)$ függvénynek a $+\infty$-ben van $+\infty$ (végtelen) határértéke, ha bármely $p$ valós számhoz található olyan $K$ valós szám, amelyre $f(x)$ nagyobb $p$-nél minden $K$-nál nagyobb $x$ szám esetén.

Kvantorokkal:

$(\forall p \in \mathbb{R})\,(\exists K \in \mathbb{R})\,(\forall x \in \mathrm{Dom}(f)) :$ ha $K < x$ akkor $p < f(x)$ , jelölése:

$$\lim_{x\to+\infty} f(x) = +\infty \,.$$

(ii2) Az $f(x)$ függvénynek a $-\infty$-ben van $+\infty$ (végtelen) határértéke, ha bármely $p$ valós számhoz található olyan $K$ valós szám, amelyre $f(x)$ nagyobb $p$-nél minden $K$-nál kisebb $x$ szám esetén.

Kvantorokkal:

$(\forall p \in \mathbb{R})\,(\exists K \in \mathbb{R})\,(\forall x \in \mathrm{Dom}(f)) :$ ha $K > x$ akkor $p < f(x)$ , jelölése:

$$\lim_{x\to-\infty} f(x) = +\infty \,.$$

(iii1) Az $f(x)$ függvénynek a $+\infty$-ben van $-\infty$ (végtelen) határértéke, ha bármely $p$ valós számhoz található olyan $K$ valós szám, amelyre $f(x)$ kisebb $p$-nél minden $K$-nál nagyobb $x$ szám esetén.

Kvantorokkal:

$(\forall p \in \mathbb{R})\,(\exists K \in \mathbb{R})\,(\forall x \in \mathrm{Dom}(f)) :$ ha $K < x$ akkor $p > f(x)$ , jelölése:

$$\lim_{x\to+\infty} f(x) = -\infty \,.$$

(iii2) Az $f(x)$ függvénynek a $-\infty$-ben van $-\infty$ (végtelen) határértéke, ha bármely $p$ valós számhoz található olyan $K$ valós szám, amelyre $f(x)$ kisebb $p$-nél minden $K$-nál kisebb $x$ szám esetén.

Kvantorokkal:

$(\forall p \in \mathbb{R})\,(\exists K \in \mathbb{R})\,(\forall x \in \mathrm{Dom}(f)) :$ ha $K > x$ akkor $p > f(x)$ , jelölése:

$$\lim_{x\to-\infty} f(x) = -\infty \,.$$


A fenti (ii1) és (ii2) esetekben nyilván a nagyon nagy pozitív $p$ számok ($p \to +\infty$) a lényegesek, az (iii1) és (iii2) esetekben pedig a negatív nagy $p$ számok ($p \to -\infty$).

**4.26. Megjegyzés.** Vegyük észre, hogy a fenti sok definíció csak a színes $<$ , $>$ , $+$ és $-$ jelekben különböznek, sőt az azonos színű jelek együtt változnak!

**4.27. Megjegyzés.** Gondoljuk át alaposan (rajzoljuk fel): hogyan nézhet ki a függvény grafikonja $x \to +\infty$ ill., $x \to -\infty$ felé haladva az egyes esetekben! Keressük meg az egyes esetekben az $A$ , $\varepsilon$ , $K$ , $p$ , stb. betűk szerepét is!

Az ábrák alapján láthatjuk, hogy a $+\infty$ és $-\infty$-ben vett határértékek többek között a vízszintes és ferde aszimptotákkal vannak kapcsolatban. Ezt a problémát (a függőleges aszimptotákkal együtt) az 6.33. Állításban vizsgáljuk meg az 6.3. „Részletes függvényvizsgálat" fejezetben.

Térjünk vissza a $\lim$ határértékek kiszámításának problémájára.

**4.28. Megjegyzés.** A sorozat határértékének fogalma és problémája lényegében megegyezik a függvények végtelenben vett határértékeivel, TEHÁT a számolási technika is ugyanaz (ld. a 2.7. „Néhány módszer sorozatokhoz" fejezetben): $n \to \infty$ helyett $x \to +\infty$ vagy $x \to -\infty$-t írunk (csak $x$ előjelére kell ügyelnünk, ha $x \to -\infty$ ).

A fenti definíciókhoz persze szükséges, hogy a vizsgált $f$ függvény értelmezve legyen a megfelelő $x$ valós számokra! Pontosabban:

**4.29. Feltétel.** A 4.24. és 4.25. Definíciókhoz még a következőket követeljük meg:

$\lim\limits_{x\to-\infty}$ esetekhez: van olyan $b \in \mathbb{R}$ valós szám, hogy $(-\infty; b) \subseteq \mathrm{Dom}(f)$ ,

$\lim\limits_{x\to+\infty}$ esetekhez: van olyan $b \in \mathbb{R}$ valós szám, hogy $(b; +\infty) \subseteq \mathrm{Dom}(f)$ .

**4.30. Megjegyzés.** Ne feledjük: ez mind a végesben, mind a végtelenben vett határértékek esetén érvényes: egy $f$ függvény csak akkor *konvergens*, ha van véges határértéke; és *divergens* minden más esetben.

Divergens esetben a függvénynek vagy végtelen határértéke van (akár $+\infty$ akár $-\infty$ ), vagy semmilyen határértéke sincs.

(Az elnevezések megegyeznek a sorozatok határérték-vizsgálatánál alkalmazottakkal.)

### 4.1.4. Előjelvizsgálat

Nem csak az eredeti függvény, hanem magasabbrendű deriváltfüggvényeinek előjelét is sokszor kell megvizsgálnunk az egész számegyenesen, ezért most röviden összefoglaljuk az ehhez szükséges tudnivalókat.

**4.31. Összefoglalás.** Először keressük meg azokat a helyeket, ahol a függvény előjelet válthat:
- ahol nincs értelmezve,


- ahol nem folytonos (szakad),
- ahol zérushelye (gyöke) van: az $f(x) = 0$ egyenlet gyökei.

Ezután a fenti gyanús helyeket, az összeset soroljuk fel növekvő sorrendben, egy táblázatban.

A felsorolt helyek közötti intervallumokban a függvény nem vált már előjelet, állandó előjelű minden közbülső pontban. Tehát elegendő mindegyik köztes intervallumban választanunk egy-egy közbülső pontot és a függvény előjelét ezekben a közbülső pontokban megállapítanunk számológéppel, ezen előjelek megadják a függvény előjelét az egész intervallumban. (Tehát nem kell a közbülső tesztpontokban a függvényértékeket pontosan kiszámolnunk, hanem csak az előjel a lényeges. Vagyis a négyzetes, gyökös, stb. szorzó- és osztótényezők mindig pozitívak, az előjelet nem befolyásolják.)

Példákat [SzK] vagy [SzF]-ben találhatunk a „Részletes függvényvizsgálat" Fejezetben.

## 4.2. A folytonosság egy alkalmazása

Az előző fejezetben ismertetett 4.22. Következmény szerint az $f(x) = 0$ egyenletnek van $x^*$ gyöke $a$ és $b$ között - de pontosan hol? Az $[a;b]$ intervallum melyik részében, melyik felében? Az alábbi egyszerű numerikus (számszerű, lat.) algoritmussal, tetszőleges folytonos $f(x)$ függvény esetén, közelítőleg meg tudjuk határozni az $f(x) = 0$ egyenlet (egyik) $x^*$ gyökének értékét, mégpedig nagyon pontosan és nagyon kevés idő alatt!

**4.32. Algoritmus.** (Gyökkeresés intervallum-felezéssel)

**Cél:** Az

$$f(x) = 0 \tag{4.8}$$

egyenlet egy gyökének közelítő meghatározása, adott pontossággal, ahol $f(x)$ (tetszőleges) folytonos függvény.

**Előkészítés:** Keressünk egy olyan $[a;b]$ intervallumot, melynek végpontjaiban $f(x)$ különböző előjelű (azaz $f(a)$ és $f(b)$ előjele különböző, vagyis $f(a) \cdot f(b) < 0$).

Tegyük fel az egyszerűség végett, hogy $f(a) < 0 < f(b)$ .

(Sajnos csak próbálkozással tudunk ilyen $a$ és $b$ pontokat keresni.)

**Jelölések:** $x^*$ jelölje a (4.8) egyenlet (egyik) gyökét.

Tekintsük az $[a;b]$ intervallumot a (4.8) egyenlet-megoldás „nulladik közelítésének", azaz legyenek

$$a_0 := a \quad \text{és} \quad b_0 := b \,.$$

**Első lépés:** Tudjuk, hogy $x^* \in [a_0; b_0] = [a;b]$ és $f(a) < 0 < f(b)$ . Számoljuk ki az $f(x)$ függvény előjelét az $[a_0; b_0]$ intervallum felezőpontjában, azaz legyen $x_1 := \dfrac{a_0 + b_0}{2}$ és nézzük $f(x_1)$ előjelét:

$f(x_1) < 0$ esetén $x_1 < x^* < b_0$ , tehát legyen $a_1 := x_1$ és $b_1 := b_0$ ,

$f(x_1) > 0$ esetén $a_0 < x^* < x_1$ , tehát legyen $a_1 := a_0$ és $b_1 := x_1$ ,

$f(x_1) = 0$ esetén nyilván vége a számolásnak.


**Általános lépés** - megegyezik az első lépéssel. Részletesebben:

Tudjuk, hogy $x^* \in [a_n; b_n]$ és $f(a_n) < 0 < f(b_n)$ .

Legyen $x_{n+1} := \dfrac{a_n + b_n}{2}$ és nézzük meg $f(x_{n+1})$ előjelét:

$f(x_{n+1}) < 0$ esetén $x_{n+1} < x^* < b_n$ tehát legyen $a_{n+1} := x_{n+1}$ és $b_{n+1} := b_n$ ,

$f(x_{n+1}) > 0$ esetén $a_n < x^* < x_{n+1}$ tehát legyen $a_{n+1} := a_n$ és $b_{n+1} := x_{n+1}$ ,

$f(x_{n+1}) = 0$ esetén nyilván vége a számolásnak.

Az algoritmus megfelelő lépésszám után megáll.

(A lépésszám és pontosság kapcsolatát a 4.36. Tételben és a 4.37. Megjegyzésben vizsgáljuk meg.)

**4.33. Megjegyzés.** (i) Hangsúlyozzuk, hogy $f(x_{n+1})$ pontos értékét nem kell kiszámolnunk, csak $f(x_{n+1})$ előjelét, ez sok esetben megkönnyítheti a számolásokat.

(ii) A számológépek pontatlansága miatt a gyakorlati számításoknál általában választunk egy kicsiny $\varepsilon > 0$ számot (pl. $\varepsilon = 10^{-6}$), és $f(x_{n+1}) > \varepsilon$ esetén mondjuk csak, hogy $f(x_{n+1})$ pozitív, $f(x_{n+1}) < -\varepsilon$ esetén mondjuk azt, hogy $f(x_{n+1})$ negatív, és $|f(x_{n+1})| < \varepsilon$ esetén már azt mondjuk, hogy $f(x_{n+1})$ gyakorlatilag $= 0$ . Az $f(x_{n+1}) = 0$ eset szinte sohasem fordul elő a gyakorlatban („mázli").

(iii) A módszert néha „oroszlánfogás-módszer"-nek is becézik, a „Hogyan fog a matematikus oroszlánt?" kezdetű történet alapján.

**4.34. Példa.** Oldjuk meg a $\quad 3\sin(x) = \ln(2x + 0.1)\quad$ egyenletet közelítőleg.

Tehát $\quad f(x) := \ln(2x + 0.1) - 3\sin(x)$ .

Mivel $f(1) \approx -1.7825 < 0$ és $f(10) \approx 4.6328 > 0$ , ezért a kezdő intervallum legyen $[a;b] = [a_0; b_0] := [1; 10]$ .

Ekkor $x_1 = \dfrac{a_0 + b_0}{2} = 5.5$ . Mivel $f(x_1) \approx 4.5236 > 0$ , ezért a következő intervallum $[a_1; b_1] = [1.0 \,;\, 5.5]$ ,

| $n$ | $x_n$ | $f(x_n)$ | $[a_n; b_n]$ |
|---|---|---|---|
| 1 | $5.5$ | $4.5236$ | $[1.0 \,;\, 5.5]$ |
| 2 | $3.25$ | $2.2117$ | $[1.0 \,;\, 3.25]$ |
| 3 | $2.125$ | $-1.0808$ | $[2.125 \,;\, 3.25]$ |
| 4 | $2.6875$ | $0.3843$ | $[2.125 \,;\, 2.6875]$ |
| 5 | $2.40625$ | $-0.4207$ | $[2.40625 \,;\, 2.6875]$ |
| 6 | $2.546875$ | $-0.0334$ | $[2.546875 \,;\, 2.6875]$ |
| 7 | $2.617188$ | $0.1721$ | $[2.546875 \,;\, 2.617188]$ |
| 8 | $2.582031$ | $0.0685$ | $[2.546875 \,;\, 2.582031]$ |
| 9 | $2.564453$ | $0.0173$ | $[2.546875 \,;\, 2.564453]$ |
| 10 | $2.555664$ | $-0.0081$ | $[2.555664 \,;\, 2.564453]$ |


10 ciklus után $x_{11} = 2.560059$ , a hiba $< \dfrac{2.555664 - 2.564453}{2} = -0.0044$ , vagyis $x_{11}$ két tizedesjegyre közelíti meg $x^*$-t.

20 ciklus után $x_n = 2.558466$ , a hiba $< 0.000009$ , vagyis 5 tizedesjegy pontos.

A könyvhöz mellékelt

[http://math.uni-pannon.hu/~szalkai/Interv3.exe](http://math.uni-pannon.hu/~szalkai/Interv3.exe)

program segítségével gyakorolhatjuk a fenti algoritmus lépéseit, sőt egyszerűbb egyenleteket meg is oldathatunk vele. **A programot kizárólag csak egyéni tanulás céljára használhatjuk, anyagi ellenszolgáltatást a programért vagy annak használatáért elfogadni tilos!**

**4.35. Megjegyzés.** A 2. „Sorozatok" fejezetben megismert módszerekkel igazolható, hogy $\lim\limits_{n\to\infty} x_n = x^*$ , de számunkra sokkal fontosabb az, hogy $n$ lépés után kapott $x_n$ mekkora hibával közelíti $x^*$-t, vagy másképpen: hány lépést kell tennünk egy kívánt pontosság eléréséhez. Az alábbi egyszerű összefüggés erre ad választ.

**4.36. Állítás.** A 4.32. Algoritmus jelölései esetén az $[a_n; b_n]$ intervallum hossza

$$|a_n - b_n| < \frac{|a_0 - b_0|}{2^n}$$

vagyis a közelítő $x_{n+1}$ érték hibája

$$|x_{n+1} - x^*| < \frac{|a_0 - b_0|}{2^{n+1}} \,. \tag{4.9}$$

**4.37. Megjegyzés.** A fenti Állítás szerint átlagban minden 3.5-dik lépés után a hiba tizedére csökken, azaz a pontos tizedesjegyek száma eggyel nő, hiszen 3.5 lépés után a hiba $\varepsilon_{\text{új}} < \dfrac{\varepsilon_{\text{előző}}}{2^{3.5}}$ , és $2^{3.5} \approx 11.314$ .

A (4.9) képlet másik értelmezése: kívánt $\varepsilon$ pontosság eléréséhez a szükséges lépések száma

$$n \approx \log_2 \frac{|a_0 - b_0|}{\varepsilon} \,.$$

Mégegyszer hangsúlyozzuk, hogy a bemutatott módszer tetszőleges folytonos függvényre alkalmazható, egyszerű, nagyon pontos és nagyon gyors !

## 4.3. Nevezetes függvényhatárértékek

A sorozatokhoz hasonlóan hasznos lesz megismernünk néhány, többször előforduló határértéket. Ezek mindegyike külön-külön tétel (bizonyításuk sem triviális), mi azonban csak felhasználjuk ezeket az eredményeket számolásaink során.

**4.38. Tétel.** (Nevezetes függvényhatárértékek)

$$\lim_{x\to0} \frac{\sin x}{x} = 1 \,, \qquad \lim_{x\to0} \frac{1-\cos x}{x^2} = \frac{1}{2} \,, \qquad \lim_{x\to0} \frac{a^x - 1}{x} = \ln a \quad (a \in \mathbb{R}^+)$$


$$\lim_{x\to+\infty} \left(1 + \frac{t}{x}\right)^x = e^t \quad (t \in \mathbb{R}) \,, \qquad \lim_{x\to0} \frac{\ln(x+1)}{x} = 1 \,, \qquad \lim_{x\to0+0} x\cdot\ln(x) = 0 \,,$$

$$\log_a(x) \ll x^k \ll b^x \ll x^x \qquad \left(a, b, k \in \mathbb{R}^+ ,\ 1 < b\right)$$

azaz

$$\lim_{x\to+\infty} \frac{\log_a x}{x^k} = 0 \,, \qquad \lim_{x\to+\infty} \frac{x^k}{b^x} = 0 \,, \qquad \lim_{x\to+\infty} \frac{b^x}{x^x} = 0 \qquad \left(a, b, k \in \mathbb{R}^+ ,\ 1 < b\right)$$

A $\ll$ jel függvényekre hasonlót jelent függvényekre, mint sorozatokra (ld. a 2.53. Definíciót):

**4.39. Definíció.** Tetszőleges $f, g : \mathbb{R} \hookrightarrow \mathbb{R}$ függvényekre

$$f(x) \ll g(x) \quad \overset{def}{\Longleftrightarrow} \quad \lim_{x\to+\infty} \frac{g(x)}{f(x)} = +\infty \,.$$

vagyis $g$ nem csak „egyszerűen" nagyobb, hanem végtelenszer nagyobb $f$-nél.

Függvények határérték-számítására és folytonosság-vizsgálatára vonatkozó sok feladatot találunk [SzK] , [SzF] és [www0] feladatgyűjteményekben.


# 5. fejezet

# Differenciálszámítás és alkalmazásai

Egy függvény változását (növekedés, csökkenés) nehéz vizsgálni, mert minden pillanatban más és más. Pontosabban: képzeljünk magunk elé egy bonyolult (több $\mathrm{dm}^2$) függvényt: lehetetlen megmondani, hogy mikor nő és mikor csökken.

Ezekre a kérdésekre ad (egyszerű) választ a függvény *differenciálhányadosa*. Az első fejezetben „A differenciálhányados fogalma" a differenciálhányados definícióját és elméleti összefüggéseket ismertetjük, a deriválás technikájához szükséges tudnivalókat az 5.2. „Formális deriválás" fejezetben mutatjuk be.

A soron következő fejezetekben ki fog derülni, hogy a Newton által biztos alapokra fektetett deriválás elmélete (és gyakorlata) az analízis legfontosabb fogalma, ötödik „alapműveletünk" : alkalmazásait az 5.3 „A differenciálhányados néhány alkalmazása" és 6. „Függvényvizsgálat" fejezetekben ismerhetjük meg.

## 5.1. A differenciálhányados fogalma

**5.1. Megjegyzés.** Ha egy $f$ mennyiséget $x_0$ és $x_1$ (idő-)pontokban kiszámítunk/megmérünk, akkor csak az $f(x_1) - f(x_0)$ megváltozást (növekedés/csökkenés) érzékeljük. Persze ezt viszonyítani szoktuk az $x_1 - x_0$ intervallumhoz, az

$$\frac{f(x_1) - f(x_0)}{x_1 - x_0}$$

hányados az átlagos megváltozás (átlagsebesség, -teljesítmény, stb.) Tudjuk azonban, hogy az $f$ mennyiség össze-vissza változhat az $[x_0; x_1]$ intervallumon belül, átlagának semmi köze sincs az $f$ mennyiség $[x_0; x_1]$ intervallumbeli hullámzásaihoz. Erre szoktuk azt válaszolni, hogy az $[x_0; x_1]$ intervallumot kell kellően kicsire választanunk - ezzel általában abba is szoktuk hagyni a probléma boncolgatását. Pedig épp itt kezdődnek a fontos gondolatok! Érdemes gondosan átolvasni az alábbiakat: a végén a gyakorlatban is jól használható módszereket, a függvényvizsgálat *legfontosabb* módszerét fogjuk megismerni! (Nem véletlen tehát a pár definíciót magyarázó rengeteg megjegyzés!)


**5.2. Definíció.** (Függvény differencia- és differenciálhányadosa /deriváltja/)

Legyen $f : \mathbb{R} \hookrightarrow \mathbb{R}$ tetszőleges függvény és legyen $x_0 \in \mathrm{Dom}(f)$ egy tetszőleges, rögzített belső pont (vagyis $f$ értelmezve van $x_0$ egy környezetében).

(i) Ha $x \in \mathrm{Dom}(f)$ egy $x_0$-tól különböző, tetszőleges pontja a fenti környezetnek (vagyis $x \neq x_0$), akkor az

$$\frac{f(x) - f(x_0)}{x - x_0} \tag{5.1}$$

törtet *differencia-* (magyarul *különbségi-*) *hányados*-nak nevezzük.

(ii) Ha létezik a fenti (5.1) tört határértéke (és véges) az $x_0$ pontban, akkor ezt a határértéket $f'(x_0)$-el jelöljük, vagyis

$$f'(x_0) := \lim_{x\to x_0} \frac{f(x) - f(x_0)}{x - x_0} \tag{5.2}$$

és az $f$ függvény $x_0$ pontbeli (*elsőrendű*) *differenciálhányadosának* vagy *deriváltjának* nevezzük. Ebben az esetben az $f(x)$ függvényt *differenciálhatónak* vagy *deriválhatónak* mondjuk az $x_0$ pontban.

**5.3. Megjegyzés.** (o) Ne feledjük: egy függvény $x_0$ pontbeli deriváltja (az (5.2) határérték) mindig egy valós szám: $f'(x_0) \in \mathbb{R}$ . Ne tévesszük össze az 5.10. Definícióban írtakkal!

(i) Alaposan gondoljuk át: az (5.1) pontban szereplő tört éppen az $y = f(x)$ függvénygörbe $P_0 = (x_0; f(x_0))$ és $P = (x; f(x))$ pontjain áthaladó *szelő-egyenes meredeksége*.

Ha pedig a $P$ pontot az $y = f(x)$ függvénygörbén mozgatjuk a $P_0$ ponthoz (ami persze rögzítetten a helyén marad), akkor a szelők a $P_0$ pontban húzott érintőhöz közelednek - ezt fejezi ki az (5.2) képletben szereplő határátmenet (limesz). Tehát $f'(x_0)$ éppen az *érintő egyenes meredeksége*!

A fent leírt folyamatot tanulmányozhatjuk a könyvhöz tartozó

[http://math.uni-pannon.hu/~szalkai/TK1AB-derivalt.gif](http://math.uni-pannon.hu/~szalkai/TK1AB-derivalt.gif) mozgóképen (animáción).

**5.4. Megjegyzés.** Ne feledjük: $f(x_0)$ és $f'(x_0)$ teljesen más értékek, tehát a pici $'$ (vesszőcske) jel nagyon lényeges, mindig gondoljuk meg alaposan, hogy mikor kell kitenni és mikor nem$^{1)}$ ! A 5.13. pontban további, használatban levő jelöléseket ismertetünk - használja mindenki a neki szimpatikusat.

Végül megismételjük, hogy az $f'(x_0) \in \mathbb{R}$ valós szám kiszámítása csak $\mathrm{Dom}(f)$ belső pontjaiban lehetséges.

**5.5. Tétel.** (Összefüggés egy függvény deriválhatósága és folytonossága között)

Ha egy $f$ függvény deriválható egy $x_0 \in \mathrm{Dom}(f)$ pontban, akkor $f$ szükségképpen folytonos az $x_0$ pontban.

**Bizonyítás** (ötlet): Az (5.2) kifejezésben a tört nevezője $0$-hoz közelít, tehát ha ennek a törtnek a határértéke véges, akkor a számlálónak is $0$-hoz kell közelítenie.

$^{1)}$ a deriválás népies neve: megvesszőzés


**5.6. Megjegyzés.** Vigyázzunk! A fenti Tétel megfordítva nem igaz: nagyon sok függvény nem deriválható pedig folytonos! Az alábbi példákban látunk ilyen függvényeket.

**5.7. Példa.** *(Nem deriválható (pedig folytonos) függvények)*

(i) $f(x) = |x|$ (abszolútérték) $x_0 = 0$ pontban: szokás szerint fel kell bontanunk az abszolútértéket:

$$\lim_{x\to x_0+} \frac{f(x) - f(x_0)}{x - x_0} = \lim_{x\to 0+} \frac{x - 0}{x - 0} = 1 , \quad \text{míg}$$

$$\lim_{x\to x_0-} \frac{f(x) - f(x_0)}{x - x_0} = \lim_{x\to 0-} \frac{-x - 0}{x - 0} = -1 ,$$

tehát az (5.2)-ban szereplő kétoldali határérték nem létezik.

Az $|x|$ függvény ábráján is „látszik", hogy az $x_0$ pontra illeszkedő jobboldali szelők (azaz $x > 0$) $+45^\circ$, míg a baloldali szelők (azaz $x < 0$) $-45^\circ$ meredekségűek, vagyis nem közelednek egyazon egyeneshez (érintőhöz). A függvény ábráján az is látszik, hogy a grafikon hegyes csúcsára ($x_0 = 0$) nem is illeszthető érintő („lötyög")! (Ha külön nézzük a jobb- és baloldali szelőket, vagyis megelégedünk féloldali érintőkkel, akkor nincs baj: jobb oldalról az $y = x$, bal oldalról az $y = -x$ egyenes érinti az $f(x) = |x|$ függvényt az $x_0 = 0$ pontban. A féloldali szelőket és érintőket a 5.16. Definícióban vezetjük be precízen.)

(ii) $f(x) = \sqrt[3]{x}$ (köbgyök) $x_0 = 0$ pontban:

$$\lim_{x\to x_0} \frac{f(x) - f(x_0)}{x - x_0} = \lim_{x\to 0} \frac{\sqrt[3]{x} - \sqrt[3]{0}}{x - 0} = \lim_{x\to 0} \frac{1}{\sqrt[3]{x^2}} = +\infty .$$

A $\sqrt[3]{x}$ függvény ábráján az látszik, hogy az $x_0 = 0$ pontban húzott érintő függőleges, aminek meredeksége „természetesen" $\operatorname{tg} \frac{\pi}{2}$, vagyis $+\infty$. (Mindez azzal „magyarázható", hogy az $x^3$ függvénynek vízszintes érintője van az $x_0 = 0$ pontban, következésképpen inverzének érintője függőleges!)

A vizsgált függvény arra mutat példát, hogy a függőleges érintőket deriválással nem lehet vizsgálni, megkeresni.

*(ábra: $\sqrt[3]{x}$)*

A hasonló, $\sqrt[3]{1 - x^3}$ függvény vizsgálatát megtaláljuk [SzK] 5.2.) e) feladatának megoldásánál, a 150. oldalon:


*(ábra: $\sqrt[3]{1 - x^3}$)*

Még érdekesebb az $f(x) = x^{2/3}$ függvény:

$$\lim_{x\to x_0} \frac{f(x) - f(x_0)}{x - x_0} = \lim_{x\to 0} \frac{x^{2/3} - 0}{x - 0} = \lim_{x\to 0} \frac{1}{\sqrt[3]{x}} = \pm\infty , \quad \text{pontosabban}$$

$$\lim_{x\to 0+} \frac{x^{2/3} - 0}{x - 0} = \lim_{x\to 0+} \frac{1}{\sqrt[3]{x}} = +\infty \quad \text{és} \quad \lim_{x\to 0-} \frac{x^{2/3} - 0}{x - 0} = \lim_{x\to 0-} \frac{1}{\sqrt[3]{x}} = -\infty ,$$

vagyis a jobb- és baloldali érintők „különbözőek". (A függvény ábráján láthatjuk, hogy a jobboldali szelők az „$y = +\infty \cdot x$", míg a baloldaliak az „$y = -\infty \cdot x$" egyenletű függőleges egyenesekhez közelednek - khm, mindkettő függőleges egyenes.) Megjegyezzük még, hogy mivel az $f$ függvény páros, ezért az origóból húzott két „fél"-érintő egymás tükörképei, meredekségük egymás $-1$-szerese.

*(ábra: $\sqrt[3]{x^2}$)*

**Általában:** az $x^\alpha$ függvények $0 < \alpha < 1$ esetén nem *deriválhatók* az $x_0 = 0$ pontban (pedig folytonosak), mert


$$\lim_{x\to 0} \frac{x^\alpha - 0}{x - 0} = \lim_{x\to 0} x^{\alpha - 1} = +\infty \quad \text{hiszen} \quad \alpha - 1 < 0 .$$

$\alpha = 0$ esetén $h_0(x) := x^0$ nincs értelmezve az $x = 0$ helyen, persze, hogy nem deriválható. Azonban $h_0(x) = 1$ minden $x \in \mathbb{R}$, $x \neq 0$ esetén, így $\lim_{x\to 0} h_0 = 1$ tehát $h_0$ folytonossá tehető az egész $\mathbb{R}$ számegyenesen. Ez azt jelenti, hogy definiálhatjuk a $h_0$ függvény egy mindenütt folytonos kiterjesztését az egész $\mathbb{R}$ számegyenesre: legyen $f(x) := 1$ minden $x \in \mathbb{R}$ esetén, ekkor $f$ folytonos mindenütt és $h_0 = f|_{\mathrm{Dom}(h_0)}$. Továbbá $f$ nyilván deriválható minden $x_0 \in \mathbb{R}$ számra:

$$\lim_{x\to x_0} \frac{f(x) - f(x_0)}{x - x_0} = \lim_{x\to x_0} \frac{1 - 1}{x - x_0} = 0 .$$

(Ez nem meglepő, hiszen $f$ grafikonja egy vízszintes egyenes, melynek meredeksége $m = 0$, más szavakkal $f \equiv 0$ konstans.)

Negatív $\alpha$ esetén az $x^\alpha$ függvény nincs értelmezve a $0$ pontban és nem is tehető folytonossá, tehát nem deriválható.

$1 \leq \alpha$ esetén pedig minden $x^\alpha$ függvény deriválható értelmezési tartományának minden belső pontjában, mint a következő fejezetben látni fogjuk. (Ajánljuk még a [www1] összeállítás tanulmányozását is!)

(iii) Tekintsük a következő függvényeket az $x_0 := 0$ pont egy (kis) környezetében:

$$g(x) = \begin{cases} x \sin \frac{1}{x} & \text{ha } x \neq 0 \\ 0 & \text{ha } x = 0 \end{cases} , \qquad h(x) = \begin{cases} x^2 \sin \frac{1}{x} & \text{ha } x \neq 0 \\ 0 & \text{ha } x = 0 \end{cases}$$

Mivel a $\sin$ függvény korlátos, ezért $\lim_{x\to 0} g(x) = 0$ és $\lim_{x\to 0} h(x) = 0$, vagyis mindkét függvény folytonos az $x_0 := 0$ pontban. Deriválhatóak-e ebben a pontban?

$$\lim_{x\to x_0} \frac{g(x) - g(x_0)}{x - x_0} = \lim_{x\to 0} \frac{x \sin \frac{1}{x} - 0}{x - 0} = \lim_{x\to 0} \sin \frac{1}{x} = \text{nem létezik},$$

amint ezt a 4.8. Példában megállapítottuk. Tehát a $g$ függvény nem deriválható az $x_0 := 0$ pontban.

$$\lim_{x\to x_0} \frac{h(x) - h(x_0)}{x - x_0} = \lim_{x\to 0} \frac{x^2 \sin \frac{1}{x} - 0}{x - 0} = \lim_{x\to 0} x \sin \frac{1}{x} = 0$$

amint ezt pár sorral feljebb kiszámoltuk. Tehát a $h$ függvény igen, deriválható az $x_0 := 0$ pontban: $h'(0) = 0$.

A két függvény ábráját közelebbről megvizsgálva láthatjuk, hogy az origón átmenő szelők imbolyognak le- és fel.

Az $x \sin \frac{1}{x}$ függvénynél a $45^\circ$ ($m = +1$) és $-45^\circ$ ($m = -1$) szélsőséges értékek is mindig előfordulnak, akármilyen közel is vagyunk az $x_0 = 0$ ponthoz. Ennek oka az, hogy a $g$ függvény „határai" az $y = x$ és $y = -x$ egyenesek, pontosabban: a $g$ függvény végtelen sokszor érinti ezt a két egyenest.

Ezzel szemben, az $x^2 \sin \frac{1}{x}$ függvény szelőinek kilengése egyre csillapodik: „határoló görbéi" az $y = x^2$ és $y = -x^2$ parabolák, amelyek mindketten a vízszines ($y = 0$ egyenletű) érintőhöz közelednek.


*(ábra: $x \cdot \sin\left(\dfrac{1}{x}\right)$ grafikonja kalkulátorképernyőn)*

*(ábra: $x^2 \cdot \sin\left(\dfrac{1}{x}\right)$ grafikonja kalkulátorképernyőn)*


*(ábra: $x^2 \cdot \sin\left(\dfrac{1}{x}\right)$ grafikonja kalkulátorképernyőn)*

(Lásd még [SzK] 5.2.) f) és a) feladatait és megoldásukat a 150. és 149. oldalakon.)

(iv) Tanácsoljuk az Olvasóknak, hogy tanulmányozzák a különböző függvények grafikonjait a deriválhatóság szempontjából is, például [www0], [www1], [SzK] és [SzF] művekben. Például érdemes megvizsgálnunk a $\sqrt[3]{(2x - 1)^2 (x + 2)}$ függvényt.

(v) Mivel a derivált egy *speciális határérték*, ezért nem meglepő, hogy a féloldali határértékhez (ld. 4.14. Definíció) hasonlóan bizonyos esetekben féloldali deriváltat kell / tudunk csak számolni, ezt az 5.16. Definícióban ismertetjük.

**Összefoglalva:** a deriválttal rengeteg problémát tudunk majd megoldani (ld. alább), de minden esetben meg kell vizsgálnunk előzőleg a függvény *deriválhatóságát*! Ez nem csak elméletileg probléma, hanem elmulasztása a gyakorlatban is sok súlyos problémát okozhat!

**5.8. Megjegyzés.** Vegyük észre, hogy magát az érintő egyenest (röviden érintő) nem is definiáltuk precízen, hanem csak szemléletünknek megfelelően kerestünk egy olyan egyenest, amely „finoman simul" a függvénygörbéhez. Talán e hiányzó precíz meghatározás hiányát tapasztaltuk a fenti (i) és (iii) példákban, de egy ilyen szabatos definíció már meghaladja könyvünk kereteit.

**5.9. Megjegyzés.** (i) A folytonosság és deriválhatóság kapcsolatát (ld. előző 5.5. Tétel és 5.7. Példa) még akkor sem szabad összetévesztenünk („csak folytonos függvényeket lehet deriválni, de nem minden folytonos függvény deriválható"), ha tapasztalatunk szerint az összes alapfüggvény és belőlük (alapműveletekkel és kompozícióval) felépített, bonyolultabb függvények általában deriválhatóak $\mathrm{Dom}(f)$ összes belső pontjaiban! Mérnökök és fizikusok szerint „minden függvény deriválható", de legyünk elővigyázatosak!

(ii) A folytonos függvényeket úgy is lehetne szemléltetni: ha grafikonjuk pl. egy vezeték, akkor „nem csöpög", nem szakadt, míg a deriválhatóság ennél több: ezen felül még nem hegyes, sima, és egy pillanatra sem függőleges a vezeték.


Az alap- és bonyolultabb függvények deriváltjait, és általában a differenciálhányados kiszámításának technikáját a későbbi 5.2. „Formális deriválás" fejezetben mutatjuk meg. Ehhez azonban előtte még néhány elméleti elnevezést és összefüggést kell megismernünk.

Nyilván hasznos lesz, ha nem csak egy-egy $x_0$ pontban egyesével tanuljuk meg az alapfüggvények deriváltjait, hanem $\mathrm{Dom}(f)$ lehető legtöbb pontjában.

**5.10. Definíció.** Az $f : \mathbb{R} \to \mathbb{R}$ függvény *differenciálhányados-* (vagy *derivált-*) függvénye a következő, $f'$-el jelölt függvény:
$\mathrm{Dom}(f') :=$ mindazon $x_0 \in \mathbb{R}$ pontok halmaza, amelyekben az (5.2) határérték létezik (ahol az $f(x)$ függvény deriválható),
továbbá $f'$ hozzárendelési szabálya:
$f'(x_0) :=$ az (5.2) határértékkel kiszámított valós szám.

**5.11. Megjegyzés.** (i) A fenti definíció elég nyilvánvaló: az $f$ függvénynek minden $x_0 \in \mathrm{Dom}(f)$ belső pontjában megpróbálhatjuk kiszámítani a deriváltját, ami egy valós szám, és ha valós számokból készítünk valós számokat, akkor ez egy függvény - a deriváltfüggvény.

További számításaink során azonban nagyon ügyeljünk: az $f$ függvény egy adott $x_0$ pontbeli $f'(x_0)$ deriváltja egy rögzített *valós szám*, míg az $f'$ deriváltfüggvény egy *függvény*, amit nem szabad összekeverni az eredeti $f$ függvénnyel - tehát a pici $'$ (vesszőcske) jel nagyon lényeges, mindig gondoljuk meg alaposan, hogy mikor kell kitenni és mikor nem!

(ii) Ismét emlékeztetünk: rengeteg függvénynél ütközhetünk $\mathrm{Dom}(f)$-en belül olyan $x_0$ pontokba, ahol a függvény nem deriválható, még $f$ folytonossága sem elegendő!

**Mi is a derivált gyakorlati jelentése?**

**5.12. Megjegyzés.** Mint a bevezető 5.1. Megjegyzésben fejtegettük: ha például az $f$ függvény egy fizikai / közgazdaságtani mennyiséget ír le (sebesség, pillanatnyi árszínvonal, ...), akkor az $\dfrac{f(x_1) - f(x_0)}{x_1 - x_0}$ differenciahányados („szelő meredeksége") az átlagos megváltozást (átlag gyorsulást, átlagos inflációt, ...) jelenti, míg az $f'(x_0)$ differenciálhányados a pillanatnyi gyorsulást, inflációt, ... adja meg.

$f'$ mellett több másféle, hasznos jelölés is használatos, érdemes velük is megismerkednünk.

**5.13. Jelölés.** (i) Ha $y = f(x)$, akkor $f'(x_0)$ jelölései még:

$$\frac{df}{dx}(x_0) = \frac{dy}{dx}(x_0) = (D_x f)(x_0) = f'(x_0) \tag{5.3}$$

vagyis

$$\frac{df}{dx} = \frac{dy}{dx} = D_x f = f' \tag{5.4}$$

hasonlóan, ha például $x = x(s)$ (vagyis $s$ a független és $x$ a függő változó), akkor $x'$ helyett $\dfrac{dx}{ds}$ vagy $D_s x$-et írunk:

$$x' = x'(s) = \frac{dx}{ds} = D_s x \quad \text{ha} \quad x = x(s) . \tag{5.5}$$


(ii) Speciálisan, ha a független változó $t$ (idő, fizikában), vagy $\varphi$ (szög, polárkoordinátákban), akkor használatosak még például az

$$\dot{x}(t) := \frac{dx}{dt}(t) = x'(t) \quad \text{ha} \quad x = x(t) \tag{5.6}$$

illetve

$$\dot{r}(\varphi) := \frac{dr}{d\varphi}(\varphi) = r'(\varphi) \quad \text{ha} \quad r = r(\varphi) \tag{5.7}$$

jelölések is.

**5.14. Megjegyzés.** (i) Az előző (i) jelölés eredete őseink szemléletességre való törekvése: ha ők már az 5.2. Definícióban szereplő differenciahányadost

$$\frac{\Delta f}{\Delta x} := \frac{f(x) - f(x_0)}{x - x_0} \tag{5.8}$$

jellel rövidítették, és $x \to x_0$ esetén $\Delta x \to 0$, akkor a „szögletesből kerek lett" elvet alkalmazva javasolták, hogy a fenti tört határértékét (ha létezik és véges) jelöljük

$$\frac{df}{dx} := \lim_{\Delta\to 0} \frac{\Delta f}{\Delta x} \tag{5.9}$$

alakban.

Tehát $\dfrac{df}{dx}$ nem egy tört, hanem csak egy (bonyolult) jel / betű. A fentihez hasonló, például (5.5)-ben szereplő jelöléseket is könnyű megjegyeznünk:

„a $\dfrac{d\dots}{d\dots}$ 'tört' számlálójában levő betű függ a nevezőben levő betűtől, és a számlálót deriválom a nevező szerint" szöveggel: „a felül levőt kifejezem az alul levővel, és a nevező szerint deriválom a képletet ... ".

Az alábbi 5.15. Példában és [SzK], [SzF]-ban is találunk magyarázó példákat a most megismert jelölésekre.

(ii) Az (5.3)-(5.5) pontokban megismert jelölések különösen hasznosak, ha az $f$ függvény *többváltozós* vagy *paraméteres*, például

$$\varphi = g(a; b; \dots; z) .$$

Ha $\varphi$ változását akarjuk nézni (ez a derivált), akkor melyik változója szerint? Így például

$$\frac{dg}{da} \quad \text{és} \quad \frac{dg}{dk}$$

egészen mást jelentenek, amit az egyszerű „vesszőzés"-sel nem tudunk jelölni!

(iii) A $\dfrac{dz}{dx}$ típusú jelölések például a primitív függvény kiszámításánál, a 7.2.3 „II. típusú helyettesítés" fejezetben lesznek hasznosak.

Emellett sok (régi és új) könyv, sőt sok számítógépes program is a $\dfrac{df}{dx}$ jelölést használja a vessző helyett.

**5.15. Példa.** Az alábbi példát az 5.2. „Formális deriválás" fejezet után fogjuk igazán megérteni, tehát az 5.2. fejezet után lapozzunk ide vissza.


Ha például $f(x) = \sqrt{x}$ és $f'(x) = \dfrac{df}{dx} = \dfrac{1}{2\sqrt{x}}$ akkor például $u(v) = \sqrt{v}$ esetén természetesen $u'(v) = \dfrac{du}{dv} = \dfrac{1}{2\sqrt{v}}$ - ennyire egyszerű!

Hasonló kidolgozott példákat [SzK] és [SzF]-ban is találunk.

Mint a féloldali folytonosságnál tapasztaltuk a 4.1.2. fejezetben, a deriválhatóság is sok esetben csak egyik oldalról vizsgálható illetve létezik, nem csak az értelmezési tartomány végpontjaiban. (A 5.7. Példa (i) pontjának végén már találkoztunk ilyen esetekkel.)

Mivel a jobb- és baloldali deriváltak csak az irányokban különböznek, ezért a 4.14. Definíciótól eltérően nem külön írjuk le a két definíciót, hanem csak /.../ jellel választjuk külön az eltéréseket.

**5.16. Definíció.** *(Függvény féloldali differenciálhányadosa)*
Legyen $f : \mathbb{R} \to \mathbb{R}$ tetszőleges függvény és legyen $x_0 \in \mathrm{Dom}(f)$ egy tetszőleges, rögzített olyan pont, amelynek jobb-/bal-/ oldali környezetében az $f$ függvény értelmezve van.
Ekkor az $f$ függvénynek az $x_0$ pontbeli **jobb-** /**bal-**/ oldali **differenciálhányadosa**

$$f'_+(x_0) = f'(x_0+) := \lim_{x\to x_0+0} \frac{f(x) - f(x_0)}{x - x_0}$$

illetve

$$f'_-(x_0) = f'(x_0-) := \lim_{x\to x_0-0} \frac{f(x) - f(x_0)}{x - x_0}$$

amennyiben a fenti jobb- illetve /bal-/ oldali határérték létezik.
Ebben az esetben az $f(x)$ függvényt jobb-/bal-/ oldalról **differenciálhatónak** vagy **deriválhatónak** mondjuk az $x_0$ pontban.

**5.17. Példa.** $\left(\sqrt[3]{x}\right)'_{0+} = \lim\limits_{x\to 0+} \dfrac{\sqrt[3]{x} - 0}{x - 0} = \lim\limits_{x\to 0+} \dfrac{1}{\sqrt[3]{x^2}} = +\infty$

és $\left(\sqrt[3]{x}\right)'_{0+} =$ házi feladat (hasonlóan).

**5.18. Gyakorlat.** Számítsuk ki az alábbi féloldali differenciálhányadosokat:

$$\left(\frac{x}{\sqrt{x}}\right)'_{e\,0+} , \quad (\arcsin(x))'_{-1+} , \quad (\arcsin(x))'_{+1-} ,$$

$$\left(\arccos \frac{1}{x}\right)'_{-1+} , \quad \left(\arccos \frac{1}{x}\right)'_{1-} ,$$

$$\left(\sqrt{1 - x^2}\right)'_{-1+} , \quad \left(\sqrt{1 - x^2}\right)'_{+1-} \quad \text{(félkör érintői)}.$$

Függvényvizsgálatnál hasznos lesz a következő állítás:

**5.19. Állítás.** Ha $f$ páros függvény, akkor az $f'$ deriváltfüggvény *páratlan*, ha pedig $f$ páratlan, akkor az $f'$ deriváltfüggvény *páros*!
(Ne keverjük össze a *páros* és *páratlan* szavakat!)


**Bizonyítás.** Háromféle indoklást is leírunk:

(i) Szemléletesen az állítás nyilvánvaló. Ha például egy páros függvénynek az $y$ tengelytől balra eső ágát az $y$ tengelyre tengelyesen tükrözzük, akkor az érintőt is tükrözzük. Pl. egy „balra" dűlő érintő tükörképe „jobbra" fog dőlni, irányszöge $\alpha$ helyett $180^\circ - \alpha$ lesz, tehát meredeksége $\operatorname{tg}(180^\circ - \alpha) = -\operatorname{tg}(\alpha)$ miatt $(-1)$-szeresére változik. A meredekség pedig éppen a derivált.

(ii) Nézzük az 5.2. Definíciót. Legyen $f$ például egy páratlan függvény. Az (5.2) képlethez először vegyük észre, hogy $x \to x_0$ esetén $(-x) \to (-x_0)$. Ekkor $f$ páratlansága miatt

$$f'(-x_0) = \lim_{(-x)\to(-x_0)} \frac{f(-x) - f(-x_0)}{-x - (-x_0)} = \lim_{(-x)\to(-x_0)} \frac{-f(x) - (-f(x_0))}{-x + x_0} = \tag{5.10}$$

$$= \lim_{(-x)\to(-x_0)} \frac{-(f(x) - f(x_0))}{-(x - x_0)} = \lim_{x\to x_0} \frac{f(x) - f(x_0)}{x - x_0} = f'(x_0) .$$

(iii) Az 5.29. Tétel szabályai („összetett függvény" és „$c \cdot f(x)$") szerint, ha például $f$ páros függvény: egyrészt

$$(f(-x))' = f'(-x) \cdot (-1) \tag{5.11}$$

másrészt

$$(f(-x))' = (f(x))' = f'(x) \tag{5.12}$$

tehát

$$f'(-x) = -f'(x) . \qquad \blacksquare$$

### 5.1.1. Magasabbrendű deriváltak

Ha egy függvényt sikerült deriválnunk, akkor deriváltfüggvénye (ld. 5.10. Definíció) ugyanolyan függvény, mint a többi$^2$). Miért ne deriválhatnánk ezt a függvényt is? Ez ugye már az eredeti függvény kétszeres deriváltja. No, még egyszer deriválva kapjuk a háromszoros, ... deriváltakat, vagy szakkifejezéssel a másod-, harmad- ... - rendű, tehát magasabbrendű deriváltakat.

Az alábbi Definícióban pontosítjuk ezeket a fogalmakat, az utána következő megjegyzéseket is érdemes elolvasnunk!

**5.20. Definíció.** Legyen $f : \mathbb{R} \to \mathbb{R}$ tetszőleges függvény és legyen a $K \subseteq \mathrm{Dom}(f)$ környezet olyan, hogy az $f$ függvény $K$ minden pontjában deriválható, azaz a $g(x) := f'(x)$ differenciálhányados értelmezhető minden $x \in K$ pontban, vagyis $K \subseteq \mathrm{Dom}(g) = \mathrm{Dom}(f')$. ($f'$ az $f$ függvény deriváltfüggvénye, ld. 5.10. Definíció.)

Ekkor azon $x_0 \in K$ pontokban, ahol a $g$ (azaz $f'$) függvény deriválható, az $f$ függvényt **kétszer deriválhatónak** mondjuk az $x_0$ pontban, és $f''(x_0)$-al jelöljük **második deriváltját** az $x_0$ pontban.
Ha $H = \mathrm{Dom}(f'')$ jelöli azon $x_0$ pontok halmazát, amelyekben az $f''(x_0)$ érték kiszámítható, akkor a $H$ halmazon értelmezett $f'' : x \mapsto f''(x_0)$ függvényt hívjuk az $f$ függvény **második deriváltfüggvényének**.

Hasonlóan, indukcióval (lépésenként) definiálhatjuk az $f$ függvény magasabbrendű differenciálhányadosait (deriváltjait) és derivált-függvényeit: az $f'''(x_0)$,

$^2$) „ mint kiskegyed és sok más ... "


$f''''(x_0) = f^{iv}(x_0)$, ... értékeket, és az $f'''$, $f'''' = f^{iv}$, $f^v$, ... deriváltfüggvényeket.

**5.21. Megjegyzés.** (i) Vigyázzunk, ne keverjük össze a fenti $f$, $g = f'$, $f''$, ... függvényeket!
Az „eredeti" $f$ függvényt sokszor kényelmes $0$-dik, vagy *nulladrendű deriváltfüggvénynek* nevezni, és $f^{(0)}$-val jelölni.

(ii) Nyilvánvalóan egy $x_0$ pontban vett derivált $f^{\prime\prime\dots}(x_0) \in \mathbb{R}$ egy valós szám, míg az $f^{\prime\prime\dots}$ deriváltfüggvény egy (valamilyen halmazon értelmezett) függvény.

(iii) Nem csak elméleti szempontból lényeges, hogy a második derivált kiszámításához (még ha csak egy $x_0$ pontban is) az $f'$ értékekre egy egész környezetben szükségünk van, hiszen

$$f''(x_0) := \lim_{x\to x_0} \frac{f'(x) - f'(x_0)}{x - x_0}$$

határértéket kell kiszámolnunk. Egyedül az $f'(x_0) \in \mathbb{R}$ érték ehhez nem elegendő, ezért követeljük meg, hogy $x_0 \in \mathrm{Dom}(f')$ belső pont legyen!

Az előző alfejezetben megismert 5.19. Tételből könnyen levezethető a következő összefüggés:

**5.22. Következmény.** Ha $f$ páros függvény, akkor az $f''$ második deriváltfüggvény is *páros*,
ha pedig $f$ páratlan, akkor az $f''$ második deriváltfüggvény is *páratlan*!
(Ne keverjük össze a *páros* és *páratlan* szavakat!)

**5.23. Jelölés.** A 5.13. pontban bemutatott jelölésekhez hasonlóan a magasabbrendű deriváltakra is többféle jelölés van használatban: $f''$ helyett találkozhatunk a $\dfrac{d^2 f}{dx^2}$, $D^2 f$, $D_{xx} f$ vagy $f^{(2)}$ jelekkel, hasonlóan $\dfrac{d^3 f}{dx^3}$, $D^4 f$, $f^{(5)}$, stb.

Felhívjuk a figyelmet, hogy például $f^{(3)}$ nem azonos $f^3$-al:
$f^{(3)}(x) = f'''(x)$ harmadrendű derivált, míg
$f^3(x) = (f(x))^3 = f(x) \cdot f(x) \cdot f(x)$ az $f$ függvény köbe.

A magasabbrendű deriváltak jelentését és alkalmazásait például a 5.3.2. „Taylor polinom", 5.3.4. „Függvény görbültsége" és 6.2. „Konvexitás vizsgálata" fejezetekben, és különösen a 6.12. Példában ismerhetjük meg.

## 5.2. Formális deriválás

Az (5.2) határérték nem csak első ránézésre tűnik nehéznek: „$\frac{0}{0}$" típusú az 5.5. Tétel szerint is, ennek nehézségét a határértékszámításban gyakorlott hallgatók már tudják, az 5.7. Példában is láttuk ennek nehézségeit!

Szerencsére elegendő mennyiségű tétel áll rendelkezésünkre, csak meg kell tanulnunk ezeket és használatukat - ebben az alfejezetben ehhez nyújtunk segítséget.

Az esetek zömében az alábbi tételek kényelmes használatával végezhetjük számításainkat, ezt hívják *formális differenciálhányados-számításnak*. (Néha


sajnos az ismertetendő tételek nem használhatóak, ekkor vissza kell térnünk az (5.2) formula közvetlen kiszámításához, ezt hívják *definíció alapján történő differenciálhányados-számításnak*.)

**5.24. Tétel.** *(Gyűjtemény az alapfüggvényekről)* Az összes alapfüggvény értelmezési tartományának legtöbb olyan belső pontjában deriválható, ahol folytonos. Az alapfüggvények deriváltfüggvényeit többek között az alábbi Megjegyzés (w) pontjában felsorolt helyeken megtalálhatjuk.
Sok kivételt például az 5.7. Példában ismertettünk.

**5.25. Megjegyzés.** (!) A fenti megfogalmazás nem precíz matematikailag (ráadásul sok tétel egyvelege), csak a témakörrel ismerkedők részére írtuk le ilyen formában!
(w) Az alapfüggvények deriváltfüggvényeinek legteljesebb listáját [SzK] Függelékében, vagy [www2]-ben, azaz a következő címen találhatjuk:
http://math.uni-pannon.hu/~szalkai/Der+Int-tablazat-sk-nagy.gif
Nagyon rövid táblázat van a középiskolai függvénytáblázatok c. gyűjteményben. Mindegyik összefüggést (mint a legtöbb matematikai képletet) betűk helyett szavakkal („versikék") érdemes megtanulnunk és alkalmaznunk, mint pl. az alábbi megjegyzésben is.

Néhány megjegyzést érdemes alaposan átgondolnunk a táblázattal kapcsolatban:

**5.26. Megjegyzés.** *(Alapfüggvények deriváltjai „versikékben")* Mint már az 1.1. „Alapfüggvények" fejezetben is tanácsoltuk, a függvényeket és a velük kapcsolatos képleteket az $x$ betű nélkül tanácsos megjegyeznünk, tehát például
„ négyzetre emelés deriváltja = kétszer ",
„ logaritmus nat. deriváltja = 1 per " (azaz =reciprok),
„ sinus deriváltja = cosinus " ,
„ tangens deriváltja = 1 per cosinus négyzet ",
... ,
ez különösen az 5.30. Tételben megismerésre kerülő láncszabálynál lesz hasznos.

**5.27. Megjegyzés.** Az $(x^\alpha)' = \alpha x^{\alpha - 1}$ $(\alpha \in \mathbb{R})$ és $(a^x)' = a^x \ln(a)$ $(a \in \mathbb{R}^+)$ szabályok könnyen összetéveszthetők, nagyon ügyeljünk a különbségekre!
Az $x^\alpha$ alakú hatványfüggvényekben „az alap mozog, a kitevő fix", deriválása „a kitevővel szorzok majd csökkentem a kitevőt 1-gyel" („$\alpha$-ás képlet").
Az $a^x$ alakú exponenciális függvényeknél pedig „az alap fix, a kitevő mozog", deriválása pedig „önmaga az alap logaritmusával".

**5.28. Megjegyzés.** Tanulságos lesz megvizsgálnunk a hatványfüggvények $(x^\alpha)' = \alpha x^{\alpha - 1}$ szabályát közelebbről különböző $\alpha$ kitevőkre, hiszen a 1.1.1. „Hatványfüggvények" fejezet 1.5. Megjegyzésében már láttuk, hogy nagyon sokféle függvényt foglal magában az $x^a$ típus, vagyis egyetlen szabállyal nagyon sok függvényt tudunk deriválni!

$\alpha = 2:\quad \left(x^2\right)' = 2x^{2-1} = 2x$,

$\alpha = 3:\quad \left(x^3\right)' = 3x^{3-1} = 3x^2$, és így tovább,


sőt:

$x = x^1$ tehát $\alpha = 1$, vagyis $x' = \left(x^1\right)' = 1 \cdot x^{1-1} = x^0 = 1$,

$\dfrac{1}{x} = x^{-1}$ tehát $\alpha = -1$, vagyis $\left(\dfrac{1}{x}\right)' = \left(x^{-1}\right)' = -1 \cdot x^{-1-1} = -x^{-2} = -\dfrac{1}{x^2}$,

$\dfrac{1}{x^2} = x^{-2}$ tehát $\alpha = -2$, vagyis $\left(\dfrac{1}{x^2}\right)' = \left(x^{-2}\right)' = -2 \cdot x^{-2-1} = -2x^{-3} = -\dfrac{2}{x^3}$,

$\sqrt{x} = x^{1/2}$ tehát $\alpha = \dfrac{1}{2}$, vagyis $(\sqrt{x})' = \left(x^{1/2}\right)' = \dfrac{1}{2} x^{\frac{1}{2}-1} = \dfrac{1}{2} x^{-\frac{1}{2}} = \dfrac{1}{2\sqrt{x}}$,

$\sqrt[3]{x} = x^{1/3}$ tehát $\alpha = \dfrac{1}{3}$, vagyis $(\sqrt[3]{x})' = \left(x^{1/3}\right)' = \dfrac{1}{3} x^{\frac{1}{3}-1} = \dfrac{1}{3} x^{-\frac{2}{3}} = \dfrac{1}{3\sqrt[3]{x^2}}$,

sőt:

$1 = x^0$ tehát $\alpha = 0$, vagyis $1' = \left(x^0\right)' = 0 \cdot x^{-1} = 0$ ... .

Pontosabban: a fenti sorokat *visszafelé* kell olvasnunk, hiszen a gyakorlatban nekünk kell észrevennünk (pl. $\sqrt{x}$ esetén) az $\alpha$ kitevőt !!! Formális integrálás (ld. a 7.2. „Integrálási szabályok és módszerek" fejezetben) esetén is nekünk kell észrevennünk hasonlóan az $\alpha$ kitevőket!

A fenti sorok is mutatják, hogy az 5.24. Tétel, sőt az „$\alpha$-ás képlet" is valójában sok tétel / bizonyítás gyűjteménye.

Mint tudjuk, bonyolultabb függvényeket az alapfüggvényekből az alapműveletekkel, kompozícióval és inverz-képzéssel tudunk előállítani.

**5.29. Tétel.** *(Differenciálhányados műveleti szabályok)*
Ha $f : \mathbb{R} \hookrightarrow \mathbb{R}$ és $g : \mathbb{R} \hookrightarrow \mathbb{R}$ differenciálható függvények az $x \in \mathrm{Dom}(f) \cap \mathrm{Dom}(g)$ belső pontban, $c \in \mathbb{R}$ tetszőleges rögzített valós szám, akkor az $f \pm g$, $c \cdot f$ és $f \cdot g$ függvények is differenciálhatóak az $x$ helyen, mégpedig

$$(f(x) \pm g(x))' = f'(x) \pm g'(x) \tag{5.13}$$

$$(c \cdot f(x))' = c \cdot f'(x) \tag{5.14}$$

$$\left(\frac{f(x)}{c}\right)' = \left(\frac{1}{c} f(x)\right)' = \frac{f'(x)}{c} \tag{5.15}$$

$$(f(x) \cdot g(x))' = f'(x) \cdot g(x) + f(x) \cdot g'(x) . \tag{5.16}$$

Továbbá, a $g(x) \neq 0$ feltétel esetén az $\dfrac{f(x)}{g(x)}$ függvény is differenciálható az $x$ helyen, és

$$\left(\frac{f(x)}{g(x)}\right)' = \frac{f'(x) \cdot g(x) - g'(x) \cdot f(x)}{(g(x))^2} . \tag{5.17}$$

**5.30. Tétel.** *(Láncszabály)* Ha $g : \mathbb{R} \hookrightarrow \mathbb{R}$ differenciálható az $x \in \mathrm{Dom}(g)$ helyen és $f : \mathbb{R} \hookrightarrow \mathbb{R}$ differenciálható a $g(x)$ helyen, akkor az $(f \circ g)(x) = f(g(x))$ összetett függvény is differenciálható az $x$ helyen, mégpedig

$$(f(g(x)))' = f'(g(x)) \cdot g'(x) . \tag{5.18}$$


Hasonló feltételek teljesülése esetén az $(f\circ g\circ h)(x)=f(g(h(x)))$ összetett függvény is differenciálható az $x$ helyen, és

$$(f(g(h(x))))' = f'(g(h(x)))\, g'(h(x))\, h'(x) . \tag{5.19}$$

**5.31. Tétel.** *(Inverz függvény deriválási szabálya)* Ha $f:\mathbb{R}\hookrightarrow\mathbb{R}$ függvény folytonos és szigorúan monoton az $x_0$ pont valamely környezetében, differenciálható az $x_0$ helyen és $f'(x_0)\neq 0$ , akkor az $f^{-1}$ inverzfüggvény is differenciálható az $y_0:=f(x_0)$ helyen, mégpedig

$$\left(f^{-1}\right)'(y_0) = \frac{1}{f'(x_0)} = \frac{1}{f'(f^{-1}(y_0))} . \tag{5.20}$$

**5.32. Megjegyzés.** *(o)* Vegyük észre, hogy a fenti tételekben nem csak az (5.13)-(5.20) képletek szerepelnek, hanem a nevezett $f+g$ , ... , $f^{-1}$ függvények deriválhatósága is! Ez alapján mondhatjuk nyugodtan a legtöbb függvényre, hogy „persze, deriválható", de ne feledjük: már az 5.7. Példában is találkoztunk (és a zh-kban is fogunk találkozni) nem deriválható, folytonos függvényekkel.

*(i)* A szorzatfüggvény (5.16) és a konstansszor $f(x)$ (5.14) szabályait nem érdemes összekevernünk. Bár az előbbi általánosabb és belőle könnyen levezethető az utóbbi, mégis érdemes (5.14) -et külön megjegyeznünk, fáradtságot takaríthatunk meg vele. Hasonlóan: (5.15) is levezethető (5.17) -ből, mégis érdemes külön megtanulnunk.

$\dfrac{1}{g(x)}$ deriválására is szoktak külön szabályt levezetni (5.17) -ből:

$$\left(\frac{1}{g(x)}\right)' = -\frac{g'(x)}{(g(x))^2} \tag{5.21}$$

Mint a legtöbb matematikai összefüggést, az (5.13)-(5.20) képleteket is betűk helyett szavakkal *(versikékben )* érdemes megtanulnunk és alkalmaznunk!

**5.33. Megjegyzés.** *(Deriválási „versikék")*

*(i)* „ összeg és különbség deriváltja = tagonként",

*(ii)* „ (konstans-szor függvény) deriváltja = konstans-szor (függvény deriváltja) ",

*(iii)* „ (függvény / konstans ) deriváltja = (függvény deriváltja) / konstans ",

*(iv)* „ szorzat deriváltja =
= (egyik tényező deriváltja \* másik tényező) + (másik tényező deriváltja \* egyik tényező)",

*(v)* „ hányados deriváltja =
= (számláló deriváltja \* nevező MÍNUSZ nevező deriváltja \* számláló) / (nevező négyzete),

*(vi)* „ összetett fv. deriváltja =
= (külső fv. deriváltja a belső fv. helyen) \* belső fv. deriváltja " .

**5.34. Megjegyzés.** Tanulságos az $f(x)=mx+b$ típusú függvények deriváltját külön is megvizsgálnunk. Az alapműveleti szabályok alapján

$$(mx+b)' = (mx)' + b' = m\cdot x' + 0 = m\cdot 1 = m$$


tehát

$$(mx+b)' = m . \tag{5.22}$$

Ez nem csak egy (könnyen megjegyezhető és sokszor hasznos) újabb szabály, hanem tanulságos is. Hiszen az $f(x)=mx+b$ függvény egy egyenes. A derivált a függvénygörbét érintő egyenes meredeksége. Egy $y=mx+b$ egyenes érintő egyenese önmaga (mi más lehetne?), és meredeksége $=m$ - mint középiskolában tanultuk.

Tehát az (5.22) összefüggés teljesen nyilvánvaló!

**5.35. Megjegyzés.** *(i)* Az (5.18) és (5.19) szabályokat azért hívják *láncszabály*-nak (németül *Kettenregel*, angolul *Chain Rule*), mert az (5.19) képletben a szorzótényezők láncszemekként kapcsolódnak egymáshoz. A fenti *(vi)* alapján a *káposzta-* vagy *hagymaszabály* elnevezés szemléletesebb lenne, hiszen a fenti képletekben ugyanúgy megy a deriválás rétegenként kívülről belülre, mint az említett növények alapos megismerése.

*(ii)* A láncszabályt a legkönnyebb elrontani, az alábbi 5.36. Példa és [SzF] feladatai alapján nagyon sokat kell gyakorolnunk!
Sokszor még az sem „ugrik" be, hogy egyáltalában összetett függvénnyel van dolgunk, érdemes az 1.3. „Összetett függvények" fejezetet és különösen annak 1.66. Példáit ismételten tanulmányoznunk.

*(iii)* Az (5.18) képletet sokszor írják tömörebben $(f\circ g)' = f'\circ g\cdot g'$ alakban, ami nagyon nehezen érthető és ráadásul könnyen összetéveszthető az $(f\cdot g)' = f'\cdot g + g'\cdot f$ szabállyal, mi kizárólag az (5.18) és (5.19) képleteket, pontosabban a fenti 5.33. Megjegyzés *(vi)* szabályát ajánljuk!

**5.36. Példa.** Néhány vegyes példa (gondolkozzunk el minden esetben: mi a külső- és mi a belső- függvény!):

$$(\cos(2x))' = \cos'(2x)\cdot (2x)' = -\sin(2x)\cdot 2 ,$$

$$(\ln(2x+3))' = \ln'(2x+3)\cdot (2x+3)' = \frac{1}{2x+3}\cdot 2 ,$$

$$(\sin(-x))' = \sin'(-x)\cdot (-x)' = \cos(-x)\cdot(-1) ,$$

$$\left(\operatorname{tg}\left(5-x^2\right)\right)' = \operatorname{tg}'\left(5-x^2\right)\cdot\left(5-x^2\right)' = \frac{1}{\cos^2(5-x^2)}\cdot(0-2x) ,$$

$$\left(\sin^3(x)\right)' = \left((\sin(x))^3\right)' = (\ldots)^3 \to 3\,(\sin(x))^2\cdot\sin'(x) = 3\sin^2(x)\cos(x) ,$$

... .

Érdemes alaposan tanulmányoznunk [SzK] , [SzF] és [www0] egyszerűbb és bonyolultabb kidolgozott példáit, hiszen a deriválás egy „alapművelet" az analízis tantárgyban! Persze már évtizedek óta vannak számítógép-programok, melyek tetszőleges képletet formálisan deriválnak, de egyrészt általában nem emberi fejjel dolgoznak és így a végeredmény is nehezen érthető, másrészt nekünk is először ugye illik megtanulnunk, mi is az a derivált ... .

**5.37. Megjegyzés.** Mint már az 5.13. Jelölésben, az 5.14. Megjegyzésben és az 5.15. Példában említettük, gyakorlati szakemberek és számítógép-programok is gyakran használják a $\dfrac{d}{dx}$ jelölést. Érdemes ezt is kicsit gyakorolnunk.


Például $\dfrac{d}{dx}\,x^2 = \left(x^2\right)' = 2x$ , hasonlóan $\dfrac{d}{dy}\,y^2 = \left(y^2\right)' = 2y$ , de

$$\frac{d}{dx}\,f^2(x) = \left(f^2(x)\right)' = 2\,f(x)\,f'(x) ,$$

így például

$$\frac{d}{dx}\,\ln^2(x) = \left(\ln^2(x)\right)' = 2\ln(x)\cdot\ln'(x) = 2\ln(x)\cdot\frac{1}{x} .$$

Végül néhány speciális technikai probléma megoldását írjuk le, amelyekkel többször találkozhatunk gyakorlati feladatok megoldásánál.

**5.38. Megjegyzés.** A $h(x)=f(x)^{g(x)}$ típusú függvényeket (ahol „alap is, kitevő is változik") az 1.26. Állításban már átalakítottuk:

$$h(x) = f(x)^{g(x)} = \exp(g(x)\ln(f(x))) = e^{g(x)\ln(f(x))} \tag{5.23}$$

tehát az összetett és szorzatfüggvények deriválási szabálya szerint

$$h'(x) = \exp'(g(x)\ln(f(x)))\cdot(g(x)\ln(f(x)))' =$$
$$= \exp(g(x)\ln(f(x)))\cdot\left(g'(x)\ln(f(x)) + g(x)\ln'(f(x))\,f'(x)\right) =$$
$$= e^{g(x)\ln(f(x))}\cdot\left(g'(x)\ln(f(x)) + g(x)\,\frac{f'(x)}{f(x)}\right)$$

amely képletet szerintünk nem érdemes megjegyezni, konkrét feladatokat az (5.23) átalakítás alapján deriváljunk!
Részletesen megoldott példákat láthatunk az [SzK] és [SzF] feladatgyűjteményekben.

A következő technikai probléma a függvények általános vizsgálatában (ld. 6.2. „Konvexitás vizsgálata" fejezet) gyakori:

**5.39. Megjegyzés.** Ha $f(x)=\dfrac{u(x)}{v(x)}$ egy törtfüggvény, és második deriváltját kell előállítanunk és megvizsgálnunk, akkor az első deriválás

$$f'(x) = \frac{u'(x)\,v(x) - u(x)\,v'(x)}{(v(x))^2} = \frac{z(x)}{(v(x))^2}$$

után a második deriválásnál, a $\dfrac{z(x)}{(v(x))^2}$ tört deriválásakor: a $(v(x))^2$ nevezőt összetett függvényként kell deriválnunk:

$$f''(x) = \left(\frac{z(x)}{(v(x))^2}\right)' = \frac{z'(x)(v(x))^2 - 2v(x)\,v'(x)\,z(x)}{(v(x))^4}$$

és így tudunk egyszerűsíteni $v(x)$ -el:

$$= \frac{z'(x)\,v(x) - 2\,v'(x)\,z(x)}{(v(x))^3}$$

ami végső soron a tört fokszámát csökkenti.


**5.40. Megjegyzés.** Érdekes módon a számítógépek elméletében lép fel az

$$L_N(x) := \log_x(N) \qquad (N\in\mathbb{R}^+\setminus x)$$

($x$ alapú logaritmus!!!) függvény és deriváltja, ahol $N\in\mathbb{R}^+$ rögzített (adott) szám.
Szerencsére, a logaritmus azonosságait tudjuk alkalmazni:

$$L_N(x) = \frac{\ln(N)}{\ln(x)} = \ln(N)\,(\ln(x))^{-1} \quad\text{(reciprok), tehát}$$

$$L_N'(x) = \ln(N)\left[(\ln(x))^{-1}\right]' = \ln(N)\,(-1)\,(\ln(x))^{-2}\,\ln'(x) =$$

$$= \ln(N)\,(-1)\,(\ln(x))^{-2}\,\frac{1}{x} = -\frac{\ln(N)}{x\ln^2(x)} .$$

Helyhiány miatt példákat most nem tudunk bemutatni, csak buzdítani [SzK] és [SzF] feladatainak és megoldásaink tanulmányozására!

## 5.3. A differenciálhányados néhány alkalmazása

### 5.3.1. Érintő egyenes egyenlete

Az 5.3. Megjegyzés *(i)* pontjában már említettük, hogy a függvénygörbe egy rögzített és egy futó pontján áthaladó szelők szemléletesen a rögzített ponthoz tartozó **érintő (simuló) egyeneshez**, röviden **érintőhöz** közelednek. Szemléletesen ez egy olyan egyenes, amely éppen csak hozzáér a függvénygörbéhez, nem horpasztja be, stb.

**5.41. Megjegyzés.** A matematikai definíció már nem fér könyvünkbe, csak egyetlen tévedési lehetőségre hívjuk fel a figyelmet. Az érintőnek és a függvénygörbének (általában) egy közös pontja van, de egy közös pont még messze nem jelent érintő egyenest! Például a parabolát a tengelyével párhuzamos egyenesek mind egy-egy pontban metszik, de egyikük sem érintője a parabolának. A $\sin$ függvény maximumaira vagy minimumaira („púpjaira") fektetett vízszintes egyenesek érintők, mindkettő végtelen sok pontban érinti a $\sin$ függvényt.

**5.42. Definíció.** Amennyiben az előbb említett érintési pont $P(x_0;y_0)$, ahol természetesen $y_0=f(x_0)$ , akkor azt mondjuk, hogy az $e$ érintő $x_0$ -ban érinti az $f$ függvénygörbét.

Az 5.50. Definícióban és az 5.3.4. „Függvény görbültsége" fejezetben általános görbék, körök érintkezését is vizsgáljuk, tehát a csupasz *érintő* elnevezés félreérthető. Megállapodás viszont, hogy az egyszerű *érintő* elnevezés mindig érintő egyenest jelent.

Az 5.3. Megjegyzés végén láttuk, hogy a $P(x_0;y_0)$ pontban érintő

$$e:\quad y = mx + b \tag{5.24}$$

egyenes meredeksége éppen a derivált, azaz

$$m = f'(x_0) . \tag{5.25}$$


Tudjuk, hogy $e$ átmegy $P$ -n: $P\in e$ , vagyis $P$ koordinátái kielégítik az $e$ érintő (5.24) egyenletét (ez a koordinátageometria alapja):

$$y_0 = mx_0 + b \tag{5.26}$$

amiből ugyan ki lehet számolni $b$ értékét, de a gyakorlatban sokkal egyszerűbb az alábbi képlet használata:

**5.43. Állítás.** Az $y=f(x)$ görbét a $P(x_0;f(x_0))$ pontjában érintő egyenes egyenlete:

$$y = f(x_0) + f'(x_0)\,(x-x_0) \tag{5.27}$$

ahol $x_0\in\mathrm{Dom}(f)$ belső pont, $P$ az érintési pont, tehát a függvénygörbe és az érintő közös pontja, $f'(x_0)$ pedig az $f$ függvény deriváltja az $x_0$ pontban (amennyiben létezik).

**5.44. Megjegyzés.** *(i)* Hangsúlyozzuk: az (5.27) képlet csak akkor helyes, ha a $P(x_0;y_0)$ pont rajta van a görbén, azaz

$$y_0 = f(x_0) ! \tag{5.28}$$

Ha a feladat kiindulási (adott) $P$ pontja nincs a függvénygörbén (vagyis), akkor előbb meg kell keresni („megcélozni") azt az $(x_0;y_0)$ pontot, amelyben a keresett érintő érinti az $f$ függvényt! Általában $(x_0;y_0)\neq P$ , de természetesen $y_0=f(x_0)$ . Az 5.46. Példában mutatunk erre a problémára megoldást.
Tehát először mindig ellenőriznünk kell az (5.28) egyenlőség teljesülését !!!

*(ii)* Bár nyilvánvaló az (5.27) egyenlet, mégis ismételjük el: először (formálisan) deriváljuk az $f$ függvényt, behelyettesítjük $f'$ -ba és az eredeti $f$ képletébe $x_0$ értékét - ez két valós szám. Ezt a két valós számot kell a műveleti jelek $(=;+;\cdot)$ közé beírni.

**5.45. Példa.** Írjuk fel az $f(x)=\sin\left(\dfrac{2x-1}{3x+1}\right)$ függvénygörbének a $P\left(1;\dfrac{\sqrt{2}}{2}\right)$ ponton áthaladó érintő egyenesének egyenletét.
**Megoldás:** Először ellenőrizzük az (5.28) feltételt:

$$\frac{\sqrt{2}}{2} \overset{?}{=} \sin\left(\frac{2\cdot 1-1}{3\cdot 1+1}\right) = f(1)$$

=OK (hiszen 1rad), tehát az adott pont $P$ rajta van a függvénygörbén, az (5.27) képlet máris alkalmazható:

$$f(x_0) = \sin\left(\frac{2\cdot 1-1}{3\cdot 1+1}\right) = \frac{\sqrt{2}}{2} = 0{,}707 ,$$

$$f'(x) = \sin'\left(\frac{2x-1}{3x+1}\right)\cdot\left(\frac{2x-1}{3x+1}\right)' = \cos\left(\frac{2x-1}{3x+1}\right)\cdot\frac{2(3x+1) - 3(2x-1)}{(3x+1)^2} ,$$

$$f'(x_0) = f'(1\text{rad}) = \cos\left(\frac{2\cdot 1-1}{3\cdot 1+1}\right)\cdot\frac{2(3\cdot 1+1) - 3(2\cdot 1-1)}{(3\cdot 1+1)^2} \approx 0{,}694 ;$$

tehát az érintő egyenlete (közelítőleg): $\quad e:\quad y = 0{,}707 + 0{,}694\,(x-1)$ .


**5.46. Példa.** Írjuk fel az $f(x)=x^2$ függvénygörbének a $P(3;5)$ ponton áthaladó érintő egyenesének egyenletét.
**Megoldás:** Először ellenőrizzük az (5.28) feltételt: $5\overset{?}{=}3^2$ - nem teljesül, tehát az adott pont $P$ nincs rajta a függvénygörbén! Az (5.27) képlet előtt meg kell keresnünk az $(x_0;y_0)$ érintési ponto(ka)t!
Ez nehéz dió, mert sem az $x_0$ értéket, sem az $e$ érintőt nem ismerjük, egyedül ennyi ismert:

$$y_0 = f(x_0) = (x_0)^2 . \tag{5.29}$$

Mást nem tudunk tenni, mint:

**1)** felírjuk az érintő egyenletét az ismeretlen $x_0$ értékkel az előző Példához hasonlóan:

$$f(x_0) = (x_0)^2 , \qquad f'(x) = 2x , \qquad f'(x_0) = 2\,x_0 ,$$

$$e:\quad y = (x_0)^2 + 2\,x_0\,(x - x_0) ,$$

**2\*)** az $e$ érintő áthalad az adott $P(3;5)$ ponton is, így a koordinátageometria alapja szerint: $x=3$ , $y=5$ és:

$$e:\quad 5 = (x_0)^2 + 2\,x_0\,(3 - x_0) = -(x_0)^2 + 6x_0 ,$$

$$. \qquad (x_0)^2 - 6x_0 + 5 = 0 ,$$

ezt az egyenletet pedig megoldjuk az $x_0$ ismeretlenre:

$$(x_0)_{1;2} = \frac{6\pm\sqrt{6^2 - 4\cdot 5}}{2} = \frac{6\pm 4}{2} \implies (x_0)_1 = 5 ,\ (x_0)_2 = 1 ,$$

az adott $P(3;5)$ pontból tehát két érintőt is tudunk húzni („megcélozni") az $y=x^2$ parabolához (tessék lerajzolni!),

**3)** az 5.45. Példához hasonlóan felírjuk az érintők egyenletét ($f'$ -t már kiszámoltuk az **1)** pontban):

$$e_1:\quad x_0 = 5 , \qquad f(x_0) = (x_0)^2 = 5^2 , \qquad f'(x_0) = 2\,x_0 = 2\cdot 5,$$

tehát $\quad e_1:\quad y = 5^2 + 2\cdot 5\,(x - 5)$ ,

$$e_2:\quad x_0 = 1 , \qquad f(x_0) = (x_0)^2 = 1^2 , \qquad f'(x_0) = 2\,x_0 = 2\cdot 1,$$

tehát $\quad e_2:\quad y = 1^2 + 2\cdot 1\,(x - 1)$ .

Felhívjuk a figyelmet arra, hogy bármely „hasból" felírt 1. típusú feladat (amikor az adott pont a függvénygörbén van) minden nehézség nélkül végigszámolható, azonban a 2.típusú (ld. 5.46.Példa) problémában a 2\*) pontban kapott egyenlet általában csak közelítőleg (pl. intervallumfelezéssel, ld. a 4.2. „Egy alkalmazás" fejezetben 4.32. Algoritmus) oldható meg.

További kidolgozott feladatokat találunk még az [SzK] és [SzF] feladatgyűjteményekben.

Az alábbiakban az érintők egy egyszerű alkalmazását mutatjuk be, amit a következő 5.3.2. „Taylor polinom" fejezetben fejlesztünk tovább.

**5.47. Megjegyzés.** Szemléletesen hihető, hogy az érintő (más néven „simuló") egyenes az érintési pont közelében (egy kis környezetében) jól közelíti a függvénygörbét, egy darabig „együtt mennek", az ábrát is így szoktuk rajzolni:

$$f(x) \approx f(x_0) + f'(x_0)\,(x - x_0) \tag{5.30}$$


Ezt a tényt a differenciálhányados (5.2) definíciója és az érintő (5.27) egyenlete alapján pontosabban lehet megfogalmazni és igazolni, bennünket azonban a gyakorlati alkalmazása érdekel: egyszerűbb és bonyolultabb függvények közelítésére alkalmazhatjuk az (5.30) közelítést.
Például, a (régebbi) középiskolai függvénytáblázatokban olvashattuk az 5.48. Példában szereplő közelítéseket.

Másrészt, (szinte) bármilyen bonyolult függvényt megpróbálhatunk érintőjével közelíteni, mint alább az 5.49. Példában megmutatjuk. Ismét felhívjuk a figyelmet, hogy a közelítés pontosságának vizsgálata már nem a Matematikai analízis, hanem a Numerikus Analízis tárgy feladata.
Függvények pontosabb közelítése Taylor-polinomokkal lehetséges (ld. a következő 5.3.2. fejezetben).

**5.48. Példa.** $\sin(x)\approx x$ ha $|x|<0{,}786$ rad (azaz $|x|<45^\circ$), a hiba kisebb mint 10\% ,
ha pedig $|x|<0{,}245$ rad (azaz $|x|<14^\circ$), akkor a hiba kisebb mint 1\% ,

$e^x\approx x+1$ és $10^x\approx 2{,}303x+1$ ,
ha $0{,}134<x<0{,}148$ , akkor a hiba kisebb mint 1\% ,
ha pedig $0{,}375<x<0{,}502$ , akkor a hiba kisebb mint 10\% ,

$\ln(x)\approx x-1 = x$ és $\lg(x)\approx 0{,}4343\,x - 0{,}4343$
ha $0{,}02<x<0{,}98$ , akkor a hiba kisebb mint 1\% ,
ha pedig $0{,}88<x<1{,}23$ , ekkor a hiba kisebb mint 10\% ,

... , stb.

Ezek a képletek a zsebszámológépek elterjedése előtt nagyon hasznosak voltak.

**5.49. Példa.** Az 5.45. Példa alapján $e\approx f$ tehát

$$f(x) = \sin\left(\frac{2x-1}{3x+1}\right) \approx 0{,}707 + 0{,}694\,(x-1) ,$$

a közelítés az $x=1$ pont egy kis környezetében érvényes.
Például $x=1{,}01$ esetén

$$f(x) \approx 0{,}707 + 0{,}694\,(1{,}01 - 1) = 0{,}7139 ,$$

amit ugye sokkal könnyebb kiszámolni (számológép nélkül!) mint

$$f(x) = \sin\left(\frac{2x-1}{3x+1}\right)$$

értékét!

További kidolgozott feladatokat találunk még az [SzK] és [SzF] feladatgyűjteményekben.

Mint említettük, két (majdnem) tetszőleges függvénygörbe érintkezését is lehet definiálni.

**5.50. Definíció.** Legyen $f$ és $g$ két tetszőleges függvény, és tegyük fel, hogy mindketten átmennek egy közös $(x_0;y_0)$ ponton (vagyis $y_0=f(x_0)=g(x_0)$), továbbá legyenek mindketten deriválhatóak az $x_0$ pontban.
Ha ezeken felül még

$$f'(x_0) = g'(x_0) , \tag{5.31}$$


akkor az $x_0$ pontban az $f$ és $g$ függvények egymást **érintik (simulnak egymáshoz)**.
Pontosabban: a fenti esetben a két függvénygörbe **elsőrendben** érinti egymást.

Általában pedig: ha $k\in\mathbb{N}$ olyan szám, amelyre

$$f^{(0)}(x_0) = g^{(0)}(x_0) ,\ f^{(1)}(x_0) = g^{(1)}(x_0) ,\ \ldots ,\ f^{(k)}(x_0) = g^{(k)}(x_0) ,$$

akkor az $x_0$ pontban az $f$ és $g$ függvények egymást $k$ **-adrendben érintik (simulnak egymáshoz)**.

**5.51. Megjegyzés.** Az egymást mindössze csak 0-rendben érintő $f$ és $g$ függvényekről csak annyit tudunk, hogy $f(x_0)=g(x_0)$ , vagyis metszik egymást az $(x_0;f(x_0))=(x_0;g(x_0))$ pontban ,

Az [SzK] és [SzF] feladatgyűjteményekben még sok kidolgozott feladatot találunk görbék érintkezésére, hajlásszögére, stb.

### 5.3.2. Taylor - polinom

Az előző fejezet 5.47. Megjegyzése, pontosabban annak (5.30) képlete sajnos elég pontatlan közelítést ad a függvény értékeire, amit *Brook Taylor* ³⁾ és *Colin MacLaurin* ⁴⁾ fejlesztett tovább⁵⁾ .

**5.52. Probléma.** Igyekszünk „bármely" (lehető legtöbb, bonyolult) $f$ függvényt polinomokkal, vagyis egyszerű függvényekkel közelíteni. Más szavakkal: olyan $n\in\mathbb{N}$ és $a_0;a_1;a_2;\ldots a_n\in\mathbb{R}$ számokat (konstansokat) keresünk, amelyekre

$$f(x) \approx p(x) = a_0 + a_1 x + a_2 x^2 + \ldots + a_n x^n \tag{5.32}$$

ha $x$ egy adott környezetben van, és a fenti közelítés a lehető legpontosabb.

**5.53. Definíció.** Legyen $f:\mathbb{R}\hookrightarrow\mathbb{R}$ tetszőleges függvény és legyen $x_0\in\mathrm{Dom}(f)$ egy tetszőleges, rögzített belső pont (vagyis $f$ értelmezve van $x_0$ -nak egy $K_{x_0}$ környezetében), és legyen adott $n\in\mathbb{N}$ . Azt mondjuk, hogy a $p(x)$ polinom **legjobban közelíti** az $f(x)$ függvényt a $K_{x_0}$ környezetben, ha minden más $q(x)$ polinomra

$$|f(x) - q(x)| \geq |f(x) - p(x)| \quad\text{ha } x\in K_{x_0} .$$

**5.54. Tétel.** *(Taylor - formula)* Ha az $f$ függvény $n$-szer differenciálható az $x_0\in\mathrm{Dom}(f)$ pontban, akkor $f$ -et az $x_0$ pont körül legjobban közelítő polinom az alábbi $p(x)=T^n_{x_0}f(x)$ jelű, ún. **Taylor polinom**

$$T^n_{x_0}f(x) = \sum_{k=0}^n \frac{f^{(k)}(x_0)}{k!}(x-x_0)^k . \tag{5.33}$$

A fenti $T^n_{x_0}f(x)$ polinomot $x_0=0$ esetén **MacLaurin-polinomnak** is hívják.

---

³⁾ Brook Taylor (1685-1731) angol matematikus
⁴⁾ Colin MacLaurin (1698-1746) skót matematikus
⁵⁾ Taylor maga említi egy levelében, hogy az elmélet több matematikus kollégával történt „kávéházi beszélgetések" során alakult ki, többek között James Gregory, Newton, Leibniz, Johann Bernoulli és Moivre is felfedeztek függvényeket közelítő formulákat ld. http://www-history.mcs.st-andrews.ac.uk , Taylor életrajzában.


Ne feledjük, hogy $k=0$ esetén $f^{(0)}(x_0)=f(x_0)$ az $f$ függvény helyettesítési értéke és $0!=1$ .

Az alábbi ábrán a $\sin(x)$ függvény (barna) néhány Taylor polinomját látjuk az $x_0=0$ pont körül:

*(ábra: az $y=\sin(x)$ függvény néhány Taylor polinomja)*

Az ábrán az $n=1;3;5;7$ fokú polinomokat rendre **fekete**, **kék**, **zöld** és **piros** színekkel jelöltük, képleteiket az 5.56. Példában ismertetjük. Megfigyelhető, hogy a fokszám ($n$) növelésével a polinomok egyre kisebb hibával és egyre nagyobb környezetben közelítik az eredeti függvényt. (Természetesen a közelítés nem tart akármeddig, mert a fenti $f(x)$ korlátos függvény míg $\lim\limits_{x\to-\infty}p(x)=\infty$ bármely $p(x)$ polinomra.)

**5.55. Megjegyzés.** *(o)* Az (5.33) képlet $n=1$ esetén:

$$T^1_{x_0}f(x) = \frac{f^{(0)}(x_0)}{0!}(x-x_0)^0 + \frac{f^{(1)}(x_0)}{1!}(x-x_0)^1 = f(x_0) + f'(x_0)\,(x-x_0)$$

ami éppen (5.27), vagyis az $x_0$ pontban húzott érintő egyenes egyenlete.
(„Az 1-rendű Taylor-polinom éppen az érintő [egyenes].)

*(i)* Az (5.33) képletben az $\dfrac{f^{(k)}(x_0)}{k!}$ szorzótényezők valós számok, az $(x-x_0)^k$ zárójeleket felbontva valóban $x$ hatványait kapjuk, vagyis (5.33) -t kifejtve valóban egy (5.32) alakú $p(x)$ polinomot kapunk. Az $a_0;\ldots;a_n$ együtthatókat közvetlenül nehéz képlettel megadni. Helyszűke miatt most csak [SzF] részletesen kidolgozott feladataira utalhatunk, [SzK] -ban is sok kidolgozott feladatot találunk.
A $T^n_{x_0}f(x)$ jelölés ugyan kicsit bonyolult, de hát sok adat tartozik egy Taylor-polinomhoz.

*(ii)* A feladatok megoldása után láthatjuk (akárcsak az előző fejezet 5.47. Megjegyzésében és az


5.48. és 5.49. Példáiban), hogy egy-egy bonyolult függvény helyett sokkal egyszerűbb egy polinomot kiszámítanunk, vagy pl. monotonitás szempontjából megvizsgálnunk.

*(iii)* A Lagrange-féle hibabecslés (ld. 5.57.Tétel) alapján számíthatjuk a közelítés pontosságát. Általában a fokszám (vagyis $n$) növelésével a közelítés pontossága növelhető.
Sajnos elképzelhetelenül szélsőséges függvények is léteznek⁶⁾ , csak az *analitikus* függvények fejthetők sorba, ezért kellenek az idézőjelek a „bármely" függvény jelzője elé az 5.52. Problémában.

**5.56. Példa.** Néhány fontos függvény Taylor- ill. McLaurin polinomja:

$$\sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \ldots ,\quad (x_0=0,\ x\in\mathbb{R}),$$

(ezt úgy kell érteni, hogy pl. $x-\dfrac{x^3}{3!}$ a harmad-, $x-\dfrac{x^3}{3!}+\dfrac{x^5}{5!}$ az ötödfokú McLaurin polinom, és a fokszámot a „végtelenségig" növelve pontosan $\sin(x)$ -et kapunk),

$$\cos(x) = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \ldots ,\quad (x_0=0,\ x\in\mathbb{R}),$$

$$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \ldots ,\quad (x_0=0,\ x\in\mathbb{R}),$$

$$\ln(x) = (x-1) - \frac{(x-1)^2}{2} + \frac{(x-1)^3}{3} + \ldots\quad (x_0=1,\ 0<x\leq 2),$$

$$\operatorname{arctg}(x) = x - \frac{x^3}{3} + \frac{x^5}{5} - \frac{x^7}{7} + \ldots\quad (x_0=0,\ |x|<1),$$

$$\Phi(x) = 0{,}5 + 0{,}4x - 0{,}085333\,x^3 + 0{,}021845\,x^5 - 0{,}005659\,x^7 + 0{,}001468\,x^9 + \ldots$$

ahol $\Phi(x)$ a **standard normális eloszlás eloszlásfüggvénye** (röviden „nagyfí") - a valószínűségszámításban és statisztikában egy fontos (bonyolult) függvény.
Mérnöki kézikönyvekben, mint pl. [BSz], vagy az interneten nagyon sok további függvény közelítő polinomját megtalálhatjuk.

A fenti közelítő képletek alapján számítja ki a zsebszámológép az alapvető függvényeket - mindössze a négy alapművelettel! Mint többször említettük: Taylor módszerével a gyakorlatban előforduló legtöbb függvényt is ki lehet számolni közelítőleg, csupán a négy alapművelet segítségével.

A Taylor-közelítések hibáját többek között Lagrange⁷⁾ formulájával becsülhetjük meg.

**5.57. Tétel.** *A Lagrange-féle hibatag:*
Az 5.54. Tétel jelölései esetén az $f$ függvény és a $T^n_{x_0}f$ Taylor-polinom eltérése

$$f(x) - T^n_{x_0}f(x) = \frac{f^{(n+1)}(\xi_x)}{(n+1)!}(x-x_0)^{n+1} \tag{5.34}$$

ahol $\xi_x$ egy $x$ és $x_0$ közötti, $x$ -től függő valós szám (azaz $x<\xi_x<x_0$ vagy $x_0<\xi_x<x$).
Az (5.34) képletet szokás **Lagrange-féle hibatagnak** hívni.

---

⁶⁾ a matematikusok „állatkertjében"
⁷⁾ Joseph Luis Lagrange (1736-1813) francia matematikus


### 5.3.3. A L'Hospital szabály

Mint láttuk a 4. „Függvények határértéke és folytonossága" c. fejezetben, pontosabban az [SzK] és [SzF] feladatgyűjteményekben (és a saját bőrünkön tapasztaltuk): függvények határértékét általában nagyon nehéz meghatározni a kritikus pontokban. A hányadosfüggvények határértékének kiszámítására *Johann Bernoulli* ⁸⁾ talált fel egy egyszerű de nagyon hatékony módszert, amit tanítványa, *Guillaume François Antoine Marquis de L'Hôpital* ⁹⁾ úr pénzért megvásárolt tőle [Lásd: Keith Luoma: What's in a name? - The truth behind 'famous name' mathematics, The Mathematical Gazette, 488 (1996), 349-351, vagy: http://www-history.mcs.st-andrews.ac.uk/Biographies/De_L'Hopital.html ].

**5.58. Probléma.** Tekintsük a következő határérték problémát :

$$\lim_{x\to A}\frac{f(x)}{g(x)} \tag{5.35}$$

ahol $A\in\mathbb{R}$ (véges) valós szám, vagy $A=+\infty$ vagy $A=-\infty$ , és $f;g:\mathbb{R}\hookrightarrow\mathbb{R}$ tetszőleges függvények.

**5.59. Tétel.** *(Bernoulli-L'Hospital, hányadosfüggvény határértékéről)*
A fenti 5.58. Probléma feltételeit és jelöléseit használva, ha az alábbi három feltétel mindegyike teljesül:

*(i)* $\lim\limits_{x\to A}f(x) = \lim\limits_{x\to A}g(x) = 0$

VAGY $\lim\limits_{x\to A}f(x) = \pm\infty$ és $\lim\limits_{x\to A}g(x) = \pm\infty$

(azaz a vizsgált határérték „$\dfrac{0}{0}$" vagy „$\dfrac{\infty}{\infty}$" típusú),

*(ii)* léteznek az $f'$ és $g'$ deriváltfüggvények az $A$ egy környezetében és $g'\neq 0$ az $A$ egy környezetében (azaz a számláló és a nevező is deriválható $A$ egy „környezetében", és a nevező deriváltja nem 0),

*(iii)* létezik a

$$\lim_{x\to A}\frac{f'(x)}{g'(x)} \tag{5.36}$$

határérték, akkor a kérdéses (5.35) határérték is létezik, és

$$\lim_{x\to A}\frac{f(x)}{g(x)} = \lim_{x\to A}\frac{f'(x)}{g'(x)} . \tag{5.37}$$

**5.60. Példa.** $\lim\limits_{x\to\infty}\dfrac{\ln(x)}{x} = ?$ Az *(i)-(iii)* „előfeltételek" teljesülését kedves Olvasóm, kérem ellenőrizze, mielőtt továbbolvassa a megoldást! Ekkor

$$\lim_{x\to\infty}\frac{\ln(x)}{x} = \lim_{x\to\infty}\frac{\ln'(x)}{x'} = \lim_{x\to\infty}\frac{\frac{1}{x}}{1} = 0 .$$

---

⁸⁾ Johann Bernoulli (1667-1748), svájci matematikus
⁹⁾ Guillaume François Antoine Marquis de L'Hôpital (1661-1704) francia katonatiszt, lovag, matematikus. Teljes neve: Guillaume- François- Antoine Marquis de l'Hôpital, Marquis de Sainte- Mesme, Comte d'Entremont and Seigneur d'Ouques-la-Chaise.


Sok részletesen kidolgozott feladatot találunk még az [SzK], [SzF] és [www0] feladatgyűjteményekben.

**5.61. Megjegyzés.** *(o)* Ne tévesszük össze a fenti L'Hospital szabályt a hányadosfüggvény 5.29. Tételben megismert deriválási szabályával!

*(i)* A „körülményes" *(i)-(iii)* feltételek egyike sem hagyható el, [SzK] -ban találunk erre kidolgozott példákat.

*(ii)* Legyünk körültekintőek: például a

$$\lim_{x\to 0}\frac{\sin(x)}{x} = ? \tag{5.38}$$

feladatra hiába teljesülnek az *(i)-(iii)* feltételek, de a $\sin$ függvény deriváltjához (először) éppen az (5.38) határérték kellene! Egy feladathoz nem használható fel annak (ismeretlen) végeredménye!

### 5.3.4. Függvény görbültsége

A görbültség valóban a szemléletes, egyenestől való eltérést mutatja. Könnyű összetéveszteni a *konvexitással* (ld. 6.2. „Konvexitás vizsgálata" fejezetben), de nincs közöttük kapcsolat.

**5.62. Definíció.** Legyen $f:\mathbb{R}\hookrightarrow\mathbb{R}$ tetszőleges függvény és legyen $x_0\in\mathrm{Dom}(f)$ egy tetszőleges, rögzített belső pont. Az $y=f(x)$ függvénygörbét az $(x_0;f(x_0))$ pontban **érintő (simuló) kör** olyan kör, amely az $f$ függvénygörbét **másodrendben** érinti (ld. a 5.50. Definíciót).
(Pontosabban: az $y = v + \sqrt{r^2 - (x-u)^2}$ vagy $y = v - \sqrt{r^2 - (x-u)^2}$ egyenletű függvénygörbe érinti másodrendben az $y=f(x)$ görbét.)

**5.63. Tétel.** Ha az $f$ függvény kétszer differenciálható, akkor az $y=f(x)$ függvénygörbét az $(x_0;f(x_0))$ pontban másodrendben érintő

$$(x-u)^2 + (y-v)^2 = r^2$$

kör középpontja

$$u = x_0 - \frac{f'(x_0)\left[1 + (f'(x_0))^2\right]}{f''(x_0)} , \qquad v = f(x_0) + \frac{1 + (f'(x_0))^2}{f''(x_0)}$$

és sugara

$$r = \frac{\left[1 + (f'(x_0))^2\right]^{3/2}}{|\,f''(x_0)\,|} .$$

**5.64. Definíció.** A fenti kör sugarának reciprokát nevezzük az $f$ függvény **görbültségének** az $(x_0;f(x_0))$ pontban:

$$g = \frac{1}{r} = \frac{|\,f''(x_0)\,|}{\left[1 + (f'(x_0))^2\right]^{3/2}} .$$

**5.65. Megjegyzés.** Az 5.63. Tétel többek között azt számítja ki, hogy ha autóval az $y=f(x)$ függvénygörbe mentén haladunk, akkor az $x_0$ helyen / időpillanatban (vagyis az $(x_0;f(x_0))$ pontjában) vagyunk, ekkor pontosan mennyire van „alászedve" a kormány: éppen mekkora sugarú körön haladunk (azaz haladnánk tovább merev kormánytartással).


# 6. fejezet

# Függvényvizsgálat

Végre elérkeztünk az elmélet (egyik) fő célkitűzéséhez: függvények elemzéséhez (analizálása), vizsgálatához! Az összes eddig tanultakat kell használnunk, tehát jó, ha az egész eddigi elmélet és főleg gyakorlat „kisujjunkban van".

Felvetődik a kérdés: ha a modern számítógépek korában már rengeteg olyan programunk van (letöltve), amellyel az adott függvényt pillanatok alatt kirajzoltathatjuk, nagyíthatunk és kicsinyíthetünk, az ablakot bárhová tologathatjuk, vagyis a függvény pontos képét pillanatok alatt látjuk, akkor minek kell nekünk (papíron-ceruzával) bíbelődnünk?

Válasz helyett javasoljuk a Kedves Olvasónak: próbálkozzon az alábbi feladatokkal, de csak grafikusan, számolás nélkül!

**6.1. Példa.** Az alábbi feladatokat csak grafikusan, számolás nélkül próbáljuk megoldani:

(i) Keressük meg az alábbi egyenesek metszéspontját:

$$\begin{cases} 5{,}0002\,x - 3{,}7342\,y = 12{,}1226 \\ 4{,}9997\,x - 3{,}7339\,y = 12{,}1224 \end{cases} \tag{6.1}$$

(ii) Oldja meg az alábbi egyenletrendszert (grafikusan), majd a gyököket (megoldást) hasonlítsa össze az előző egyenletrendszer gyökeivel:

$$\begin{cases} 5{,}0002\,x - 3{,}7342\,y = 12{,}1226 \\ 5{,}0004\,x - 3{,}7344\,y = 12{,}1228 \end{cases} \tag{6.2}$$

(iii) Keresse meg az $f(x) = \dfrac{x^4}{200} - \dfrac{x^2}{3000}$ függvény szélsőértékeit.

(iv) Keresse meg a $g(x) = x^3 + 7{,}5x^2 + 18x$ függvény inflexiós pontját (ahol konvex-ből konkávba vált – ld. 6.2. „Konvexitás vizsgálata" fejezetben).

Ugye, nem is oly könnyű, ha a függvény nagyon lapos vagy magos … !

**6.2. Megjegyzés.** Tanulságos lesz a (6.1) és (6.2) egyenletrendszerek gyökeit (megoldásait) összehasonlítanunk:

I. megoldása: $(x; y) \approx (-7{,}873638\,;\ -13{,}789396)$ ,


II. megoldása: $(x; y) \approx (6{,}625908\,;\ 5{,}625908)$ .

A gyökök közötti eltérés körülbelül $20$ , PEDIG az eredeti (6.1) és (6.2) egyenletrendszerek együtthatói $10^{-3}$ nál kisebb mértékben különböznek! Vagyis az adatok (együtthatók) eltérése a számítások során több, mint tízezer-szeresére nőtt!!! Ezért kell méréseink és számításaink során nagyon pontosan eljárnunk!

Ha grafikusan oldanánk meg a (6.1) és (6.2) egyenletrendszereket, akkor két-két olyan egyenes metszéspontját kellene megkeresnünk, amelyek majdnem párhuzamosak – ez a magyarázata a megoldásaik nagy eltérésének!

(A hosszú szabászolló is ezért használható nehezen, amikor a csúcsa felé szeretnénk vágni vele.)

## 6.1. Monotonitás vizsgálata

Emlékeztetünk arra, hogy a függvények monotonitását a 0.3.2. „Monotonitás" alfejezetben definiáltuk részletesen. Az egyszerűség kedvéért megint csak intervallumon vizsgáljuk a monotonitást, nem egy pontban.

Az 5.47. Megjegyzés szerint az érintő közelíti a függvényt, az érintő meredeksége = megváltozása épp a derivált, tehát nem túl meglepő, hogy a deriváltfüggvény segítségével sok információt kapunk a függvény menetéről (ez ugyan megint nem bizonyítás, amit megint elhagyunk).

Kiemeljük, hogy az eredeti $f$ függvény monotonitását az első deriváltjának segítségével tudjuk vizsgálni (ebben a fejezetben), míg $f$ konvexitását a második deriválttal (a következő fejezetben).

Az alábbi következtetésekben (Tételek, Állítások) nagyon ügyeljünk a „ha" és „akkor" szavakra, vagyis miből következik mi, és nem fordítva! Hasonlóan az $<$ , $>$ és $\leq$ , $\geq$ jeleket is pontosan kell olvasnunk (és megtanulnunk)!

**Összefüggés egy függvény monotonitása és (első) deriváltjának előjele között**

**6.3. Tétel.** Ha egy $f$ függvény monoton nő az $I$ intervallumon, akkor az $f'$ deriváltfüggvény ezen az intervallumon *nemnegatív*: $f'(x) \geq 0$ ($\forall x \in I$).
Ha egy $f$ függvény monoton csökken az $I$ intervallumon, akkor a deriváltja ezen az intervallumon *nempozitív*: $f'(x) \leq 0$ ($\forall x \in I$).

**Bizonyítás.** (Csak ötlet) Nézzük $f'$ definícióját (ld. (5.2) képlet):

$$f'(x_0) := \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0}$$

ahonnan látszik, hogy monoton növő $f$ függvény esetén a tört számlálója és nevezője ugyanolyan előjelű, tehát a tört és így határértéke is mindenképpen *nemnegatív*, míg monoton csökkenő $f$ függvény esetén a fenti mennyiségek *nempozitívak*.

**6.4. Tétel.** (Az előző tétel megfordítása)
Ha egy $f$ függvény $f'$ deriváltfüggvénye az $I$ intervallumon *pozitív*: $f'(x) > 0$ ($\forall x \in I$), akkor az (eredeti) $f$ függvény monoton nő ezen az intervallumon.
Ha egy $f$ függvény $f'$ deriváltfüggvénye az $I$ intervallumon *negatív*: $f'(x) < 0$ ($\forall x \in I$), akkor az (eredeti) $f$ függvény monoton csökken ezen az intervallumon.


**Bizonyítás.** Lásd az előző Bizonyítást.

Emlékeztetünk, hogy az 4.1.4. „Előjelvizsgálat" alfejezetben részletesen foglalkoztunk (bármilyen) függvény előjelének vizsgálatával.

**Összefüggés egy függvény szélsőértékhelyei és (első) deriváltjának gyökei között**

**6.5. Tétel.** (Szükséges feltétel)
Ha az $f$ függvénynek $x_0 \in \mathrm{Dom}(f)$ belső pontjában lokális szélsőértéke van, és $f$ differenciálható az $x_0$ pont valamely környezetében, akkor az $f'$ deriváltfüggvény értéke ebben a pontban szükségképpen zérus, azaz:

$$f'(x_0) = 0 . \tag{6.3}$$

**6.6. Megjegyzés.** Vigyázzunk! *A fenti következtetés nem könnyen fordítható meg*: az (6.3) egyenlőségből messze nem következik, hogy $f$-nek $x_0$-ban bármilyen szélsőértéke lenne!
Például az $f(x) = x^3$ függvény $x_0 = 0$ teljesíti (6.3)-t, hiszen $f'(x) = 3x^2$. No és? Az $x^3$ függvény szigorúan monoton növő az egész $\mathbb{R}$ számegyenesen!
A fenti tétel szerint (6.3) csak szükséges de nem elégséges feltétel egy $f$ függvény szélsőértékének megtalálására. Elégséges feltételt az alábbi 6.9. Tételben ismerünk meg.
Emlékezzünk csak vissza: $f'(x_0)$ éppen az $f$ függvény grafikonjához az $x_0$ pontban húzott érintő meredeksége, vagyis (6.3) pontosan azt jelenti (és nem többet!), hogy az $x_0$ pontban húzott érintő vízszintes! Márpedig sok szigorúan monoton függvénynek is lehet itt-ott vízszintes érintője, mint másik példánknak, $g(x) = \sqrt[3]{1 - x^3}$-nek.

**6.7. Definíció.** Legyen $f : \mathbb{R} \hookrightarrow \mathbb{R}$ tetszőleges függvény és legyen $x_0 \in \mathrm{Dom}(f)$ egy tetszőleges, rögzített olyan belső pontja, amelyben $f$ deriválható.
Amennyiben az $x_0 \in \mathrm{Dom}(f)$ pontban teljesül az (6.3) egyenlőség, vagyis

$$f'(x_0) = 0 ,$$

akkor az $x_0$ pontot az $f$ függvény *stacionárius pontjának* nevezzük.

**6.8. Megjegyzés.** Ismételjük: az $f'(x_0) = 0$ egyenlőség csak a vízszintes érintő feltétele. Itt a függvény kicsit „megpihen", a stáció szó latinul megállást jelent.
Stacionárius pont helyett néha hallani a *kritikus pont* elnevezést is, ami azonban nem túl szerencsés, hiszen egy függvénynek sok szempontból lehet (sok különböző) kritikus pontja.

Azonban, az 6.3. és 6.4. Tételek segítségével biztosan megtalálhatjuk a függvények szélsőértékeit:

**6.9. Tétel.** (Szükséges és elégséges feltétel)
Legyen $f : \mathbb{R} \hookrightarrow \mathbb{R}$ tetszőleges függvény és legyen $x_0 \in \mathrm{Dom}(f)$ egy tetszőleges, rögzített olyan belső pontja, amelynek egy környezetében $f$ differenciálható.
Ha az $f$ függvény $f'$ deriváltfüggvénye $x_0$-ban előjelet vált (azaz $x_0$-tól balra és jobbra $f'$ más előjelű), akkor $f$-nek $x_0$-ban lokális szélsőértéke van.


**6.10. Megjegyzés.** (i) Bár a fenti Tétel feltétele szükséges és elégséges is, de az $x_0$ pontot honnan kapjuk? Hát az 6.5. Tétel (6.3) összefüggéséből!
(ii) A fenti, 6.5. és 6.9. Tételeken alapuló módszernek van egy gyenge pontja: csak olyan $f$ függvényekre és azoknak csak olyan intervallumaira (környezeteire) alkalmazhatók, amelyekben az $f$ függvény kétoldalról deriválható! Márpedig nagyon sok nem kétoldalról deriválható függvénynek van szélsőértéke (pl. $|x|$ , $\sqrt{x}$ , $\arcsin$ , $\arccos$ , stb). Ilyen esetekben egyetlen lehetőségünk van: azokban a pontokban / intervallumok végpontjaiban , amelyekben $f$ nem deriválható, még külön megvizsgáljuk a függvény helyettesítési értékeit is, és összehasonlítjuk a függvény többi (helyettesítési) értékével.

Mivel az $f'$ deriváltfüggvény is csak egy függvény, ezért az 4.1.4. „Előjelvizsgálat" alfejezetben írtakat $f'$ előjelének vizsgálatára is sikerrel használhatjuk.

**6.11. Megjegyzés.** Az 6.9. Tétel helyett használatos még az $f''(x_0) \neq 0$ és $f'(x_0) = 0$ feltételeket is vizsgálni, ami ugyan elégséges de nem szükséges. Például az $x^4$ függvényeknek hiába van az $x_0 = 0$ pontban lokális minimuma, de $f''(0) = f'(0) = 0$ miatt ez utóbbi feltétel becsap bennünket. Tehát az 6.9. Tétel feltétele a megbízhatóbb – ezt tanácsoljuk!

Végezetül megjegyezzük, hogy az 5.19. Állítás alapján például páros függvény „egyik fele" ha például csökkenő, akkor „másik fele" növekvő, a derivált ennek megfelelően „félig" negatív és ennek tükörképe pozitív. Ez nem csak szemléletesen segítheti számolásainkat, hanem ellenőrzésre is alkalmas.

## 6.2. Konvexitás és vizsgálata

Az alábbi következtetésekben (Tételek, Állítások) nagyon ügyeljünk a „ha" és „akkor" szavakra, vagyis miből következik mi, és nem fordítva! Hasonlóan az $<$ , $>$ és $\leq$ , $\geq$ jeleket is pontosan kell olvasnunk (és megtanulnunk)!

Kezdjük néhány hétköznapi problémával:

**6.12. Példa.** „Az infláció üteme csökken de az árak mégis nőnek … "
„Az X párt támogatottságának csökkenése lassul, de megint kevesebb a szimpatizáns … "
„A levegő lehűlésének üteme csökken, mégis fázom … "

**6.13. Megjegyzés.** Az 5.1. és 5.47. Megjegyzésben elemeztük, hogy egy függvény deriváltja = a függvény változása, tehát a második derivált az első deriváltnak (azaz a változásnak) a változása. Nos, ha valami változik, esetleg csökken, attól még ő létezik! Így például a változás is még megvan, az eredeti mennyiség pedig kénytelen még mindig változni …
A fentieket talán jobban megértjük a matematika nyelvén. Három függvényünk van: $f$ , $f'$ és $f''$ .
$f'$ éppen az eredeti $f$ függvény érintője, annak meredeksége. Ha például $f'$ csökken, attól még az eredeti $f$ függvény továbbra is nőhet / csökkenhet, tehát $f''(x) < 0$ nem befolyásolja $f'$ előjelét vagy $f$ monotonitását – most másról van szó! Hasonlóan $f'$ növekvése (azaz $f''(x) > 0$) sem befolyásolja sem $f'$ előjelét sem $f$ monotonitását!


**6.14. Megjegyzés.** Még mindig ugyanazt a jelenséget elemezzük, kicsit más szempontból.
Hogyan nézhet ki az eredeti $f$ függvény amikor az $f'$ deriváltfüggvény egy $I$ intervallumon monoton növekszik (azaz $f'' > 0$) illetve csökken (azaz $f'' < 0$) ?
Tekintsük meg a könyvhöz tartozó animációkat:
http://math.uni-pannon.hu/~szalkai/derivalt_novekszik.avi
és http://math.uni-pannon.hu/~szalkai/derivalt_csokken.avi

**6.15. Összefoglalás.** $f'$ és $f''$ előjeleit tekintve ($\nearrow$ / $\searrow$) négy eset lehetséges, amely eseteket megpróbáljuk megérteni, jellemezni. (Először gondoljuk végig az alábbiakat fejben, és csak utána nézzük meg az ábrákat legalul.)

**1. eset** ($f' = \oplus$, $f'' = \oplus$): Az $f$ mennyiség növekszik mert $f' > 0$ . Továbbá a növekedés üteme is növekszik (mert $f'' > 0$), vagyis szédületes növekedés következik: $f$ egyre gyorsabban növekszik.

**2. eset** ($f' = \oplus$, $f'' = \ominus$): Az $f$ mennyiség megint növekszik, azonban a növekedés üteme csökken (mert $f'' < 0$). Tehát az $f$ mennyiség továbbra is növekedni fog, azonban a növekedés üteme lelassul, $f$ egyre kisebb mértékben fog növekedni. (Pl.: az infláció mértéke csökken, az árak mégis még mindig növekednek, hiszen infláció = áremelkedés még mindig van.)

**3. eset** ($f' = \ominus$, $f'' = \ominus$): Az $f$ mennyiség csökken mert $f' < 0$ . Továbbá $f$ változása (ami most negatív mennyiség / jelenség) negatív irányban mozog (mert $f'' < 0$). Negatív szám csökkenés után negatív marad, sőt (abszolút) értékében növekszik, vagyis zuhanás következik be: $f$ egyre nagyobb mértékben csökken.

**4. eset** ($f' = \ominus$, $f'' = \oplus$): Az $f$ mennyiség csökken. Azonban a csökkenés, mint előjeles mennyiség pozitív irányba mozdul el (mert $f'' > 0$). A „csökkenés" nevezetű negatív mennyiség tobábbra is negatív marad(hat), de közeledik a $0$-hoz, vagyis az $f$ mennyiség továbbra is csökken, de a csökkenés mértéke egyre kisebb lesz, lelassul (a csökkenés mértéke).

*(ábra)* $f' > 0$ , $f'' > 0$ , — $f' > 0$ , $f'' < 0$ , — $f' < 0$ , $f'' < 0$ , — $f' < 0$ , $f'' > 0$ .

[SzF] „Konvexitás" fejezetében további gyakorlati feladatokat és magyarázatukat találjuk.

A fenti mozgóképek és ábrák után könnyebben érthetőek az alábbi szemléletes (nem absztrakt) definíciók.

**6.16. Definíció.** Legyen $f : \mathbb{R} \hookrightarrow \mathbb{R}$ tetszőleges függvény, amely értelmezhető egy $I$ nemüres intervallumon (vagyis $I \subseteq \mathrm{Dom}(f)$). Az $f$ függvény az $I$ intervallumon


(i) (alulról nézve) *konvex* , ha bármely, az $f$ függvény grafikonját az $I$ intervallumon szelő $\ell$ egyenes *alatt* halad az $f$ függvény grafikonja,
(ii) (alulról nézve) *konkáv* , ha bármely, az $f$ függvény grafikonját az $I$ intervallumon szelő $\ell$ egyenes *felett* halad az $f$ függvény grafikonja.

Csak vájtfülűek részére közöljük a fenti Definícióban szereplő $\ell$ szelő egyenletét és az $f$ függvény grafikonjával való kapcsolatát.

**6.17. Definíció.** A fenti 6.16. Definíció jelöléseit használjuk.
Az $y = \ell(x)$ egyenes *szeli* az $f$ függvény grafikonját az $I \subseteq \mathrm{Dom}(f)$ intervallumban, ha vannak olyan $x_1; x_2 \in I$ pontok, amelyekre $\ell$ áthalad az $(x_1; f(x_1))$ és $(x_2; f(x_2))$ pontokon.
Az $\ell$ szelő *alatt* / *felett* halad az $f$ függvény grafikonja, ha minden $x \in [x_1; x_2]$ pontra teljesül

$$f(x) \leq \ell(x) \tag{6.4}$$

illetve

$$f(x) \geq \ell(x) . \tag{6.5}$$

**6.18. Megjegyzés.** Középiskolából tudjuk, hogy az $(x_1; y_1) = (x_1; f(x_1))$ és $(x_2; y_2) = (x_2; f(x_2))$ adott pontokon áthaladó $\ell$ egyenes egyenlete:

$$(x_1 - x_2)(y - y_2) = (x - x_2)(y_1 - y_2) ,$$

$$y = x\,\frac{y_1 - y_2}{x_1 - x_2} - \frac{x_2(y_1 - y_2)}{x_1 - x_2} + y_2 ,$$

vagyis

$$y = x\,\frac{f(x_1) - f(x_2)}{x_1 - x_2} - \frac{x_2[f(x_1) - f(x_2)]}{x_1 - x_2} + f(x_2),$$

tehát a fenti (6.4) és (6.5) így alakul:

$$f(x) < x\,\frac{f(x_1) - f(x_2)}{x_1 - x_2} - \frac{x_2[f(x_1) - f(x_2)]}{x_1 - x_2} + f(x_2) \tag{6.6}$$

és

$$f(x) > x\,\frac{f(x_1) - f(x_2)}{x_1 - x_2} - \frac{x_2[f(x_1) - f(x_2)]}{x_1 - x_2} + f(x_2) . \tag{6.7}$$

**6.19. Megjegyzés.** Az „alulról nézve" jelző persze, hogy lényeges, hiszen egy függvényt is másképp látunk alulról … Pontosabban, ha a függvénygörbét felülről (jó magasan) „lezárunk" egy $e$ egyenessel, akkor az egyenes és a függvénygrafikon közötti síkrész (alulról nézve) valóban konvexnek illetve konkávnak látszik:


*(ábra: $x^2$ és $-x^2$ alulról nézve)*

**6.20. Definíció.** Legyen $f : \mathbb{R} \hookrightarrow \mathbb{R}$ tetszőleges függvény, és legyen $x_0 \in \mathrm{Dom}(f)$ belső pont. Ha létezik az $x_0$ pontnak olyan környezete, hogy az $f$ függvény grafikonja $x_0$-tól balra és jobbra a függvény érintőjének különböző oldalán van (más szóval az érintő átmetszi grafikonját), akkor azt mondjuk, hogy $f$-nek $x_0$ *inflexiós* (hajlékony) *pontja* .

**6.21. Példa.** Nézzük meg a $\mathrm{tg}(x)$ függvényt az $x_0 = 0$ pontban és környezetében.

**6.22. Jelölés.** Táblázatokban az $f$ konvexségét az $\cup$ , konkávságát az $\cap$ jellel szoktuk jelölni. Ez szemléletesen azt jelenti, hogy egy kis darabon konvex függvény az $\cup$ jelnek (általában) csak egy kis darabjához hasonlít: bal-, jobboldalához, talán a közepéhez, esetleg nagyobb darabjához. Hasonlóan hasonlítanak a konkáv függvények a $\cap$ jelnek (általában) csak egy kis darabjához.

**Összefüggés egy függvény konvexitása és második deriváltjának előjele között**

**6.23. Tétel.** Legyen $f : \mathbb{R} \hookrightarrow \mathbb{R}$ tetszőleges függvény, amely valamely $I \subseteq \mathrm{Dom}(f)$ nemüres intervallumon kétszer differenciálható. Ekkor
ha az $f$ függvény az $I$ intervallumban *konvex* akkor $f''(x) \geq 0$
ha az $f$ függvény az $I$ intervallumban *konkáv* akkor $f''(x) \leq 0$
minden $x \in I$ esetén.

Az előző tétel megfordítása:

**6.24. Tétel.** Legyen $f : \mathbb{R} \hookrightarrow \mathbb{R}$ tetszőleges függvény, amely valamely $I \subseteq \mathrm{Dom}(f)$ nemüres intervallumon kétszer differenciálható. Ekkor
ha $f''(x) > 0$ minden $x \in I$ esetén, akkor az $f$ függvény az $I$ intervallumban *konvex* ,
ha $f''(x) < 0$ minden $x \in I$ esetén, akkor az $f$ függvény az $I$ intervallumban *konkáv* .

Emlékeztetünk rá, hogy tetszőleges függvények előjelének vizsgálatára a 4.1.4. „Előjelvizsgálat" alfejezetben adtunk tanácsokat.


**Összefüggés egy függvény inflexiós pontja és második deriváltjának zérushelye között**

**6.25. Tétel.** (Szükséges feltétel) Ha $f$ az $x_0$ hely valamely környezetében kétszer differenciálható és $x_0$-ban $f$-nek inflexiós pontja van, akkor

$$f''(x_0) = 0 . \tag{6.8}$$

**6.26. Megjegyzés.** Ismét ne kapkodjunk: ha az (6.8) feltétel teljesül, akkor $f$-nek nem biztos, hogy van inflexiós pontja $x_0$-ban, mint például az $x^4$ függvény második deriváltja is hiába $0$ az $x_0 = 0$ pontban – mégsincs inflexiós pontja $x_0 = 0$-ban. Az 6.25. Tétel csak azt mondja, hogy kétszer deriválható függvénynek $x_0$ helyeken csak akkor lehet inflexiós pontja, ha $f''(x_0) = 0$ . Másképpen: az (6.8) feltétel csak szükséges de nem elégséges feltétele az inflexiós pont létezésének.

Azonban, az 6.23. és 6.24. Tételek segítségével az alábbi eredményt fogalmazhatjuk meg (és alkalmazhatjuk a gyakorlatban):

**6.27. Tétel.** (Szükséges és elégséges feltétel)
Legyen $f : \mathbb{R} \hookrightarrow \mathbb{R}$ tetszőleges függvény, és legyen $x_0 \in \mathrm{Dom}(f)$ olyan belső pont, amelynek valamely (nemüres) környezetében $f$ kétszer differenciálható.
Ha még az $f''$ deriváltfüggvény az $x_0$ helyen előjelet vált, akkor az (eredeti) $f$ függvénynek az $x_0$ helyen inflexiós pontja van.

Mivel az $f''$ második deriváltfüggvény is csak egy függvény, ezért az 4.1.4. „Előjelvizsgálat" alfejezetben írtakat $f''$ előjelének vizsgálatára is sikerrel használhatjuk.

**6.28. Megjegyzés.** Az 6.27. Tétel helyett szokás az $f''(x_0) = 0$ és $f'''(x_0) \neq 0$ elégséges feltételt is vizsgálni, de például az $x^5$ függvénynek hiába van az $x_0 = 0$-ban inflexiós pontja, mégis $f''(x_0) = f'''(x_0) = 0$ . Tehát használjuk inkább a megbízhatóbb 6.27. Tétel útmutatásait!

**6.29. Megjegyzés.** A fenti, 6.25. és 6.27. Tételeken alapuló módszernek van egy gyenge pontja: csak olyan $f$ függvényekre és azoknak csak olyan intervallumaira (környezeteire) alkalmazhatók, amelyekben az $f$ függvény kétoldalról kétszer deriválható! Márpedig nagyon sok nem kétoldalról kétszer deriválható függvénynek van inflexiós pontja (pl. $\sqrt[3]{1 - x^3}$ az $x_0 = 1$ pontban, stb). Ilyen esetekben egyetlen lehetőségünk van: azokban a pontokban / intervallumok végpontjaiban , amelyekben $f$ nem deriválható kétszer, alaposabban megvizsgáljuk a függvény viselkedését, és természetesen feljegyezzük a veszélyes helyeket.

**6.30. Megjegyzés.** Végezetül megjegyezzük, hogy az 5.22. Következmény alapján például páros függvény „egyik fele" ha például konkáv, akkor „másik fele" is konkáv, a második derivált ennek megfelelően ha „félig" negatív akkor ennek „másik fele" tükörképe is negatív. Ez nem csak szemléletesen segítheti számolásainkat, hanem ellenőrzésre is alkalmas.

**6.31. Megjegyzés.** Ismét emlékeztetünk rá, hogy az 5.2. „Formális deriválás" fejezet 5.39. Megjegyzésében leírt „trükk" sok racionális törtfüggvény vizsgálatánál lehet hasznunkra!


## 6.3. Részletes függvényvizsgálat

Az előző két (és az összes többi) alfejezet alapján már „tetszőleges" függvényt meg tudunk vizsgálni, a legfontosabb jellemzőit meg tudjuk állapítani. Kiemeljük, hogy a (vázlatos) grafikon elkészítése a legutolsó lépés (ismét vessünk egy pillantást az 6.1. Példára)!

**6.32. Összefoglalás.** *függvényvizsgálati szempontok.*
Az alábbi (I)-(IV) lépések sorrendjét nem csak elméleti és technikai okok miatt kell megtartanunk! Az eredeti $f$ függvény vizsgálatához felhasználjuk segítségképpen az $f'$ és $f''$ („rokon-") függvényeket is, azonban ezt a három függvényt ne keverjük össze, legfőképpen szerepüket ne!
Többször lesz szükségünk egyik-másik függvény előjelének vizsgálatára, ezt a 4.1.4. „Előjelvizsgálat" alfejezetben ismertettük. Arra nagyon ügyeljünk: a három függvény közül melyik előjeléből az eredeti $f$ függvénynek milyen tulajdonságára tudunk következtetni.
Az alábbiakban csak összefoglaljuk a függvények vizsgálatáról eddig tanultakat. (Az „esetleg" kezdetű mondatok nehéz, legtöbbször elhagyható szempontokat jelölnek.)

**(I)** $\mathrm{Dom}(f)$ meghatározása – ez általában nem $\mathbb{R}$, hanem egymástól diszjunkt (nyílt vagy zárt) intervallumok úniója. Periodicitás, $f$ páratlan vagy páros. Ezen tulajdonságokat érdemes a legelején megvizsgálnunk, hiszen egy esetleges periodicitás vagy párosság az összes ezutáni számításainkat megkönnyítik!
Folytonosság, szakadási helyek. $f$ gyökei, előjelei, metszéspontjai $x$ és $y$ tengelyekkel.
$f$ határértékei a $\mathrm{Dom}(f)$-et alkotó intervallumok végpontjaiban: $+\infty$ és $-\infty$-ben és a szakadási helyeken.
Vízszintes és függőleges, esetleg ferde aszimptoták (ld. az 6.33. Állításban).
Esetleg szimmetriatengely, -pont (ld. a 0.29. Állításban).

**(II)** $f'$ mely pontokban létezik. (Ahol nem létezik, valamint a $\mathrm{Dom}(f)$-et alkotó intervallumok végpontjaiban és $f$ szakadási helyein: jobb illetve baloldali deriváltak értékeit tudjuk csak meghatározni.)
$f'$ gyökei és előjelei (ezeket táblázatban érdemes összefoglalnunk), ebből $f$ monotonitása, stacionárius pontjai és lokális szélsőértékei. Érdemes $f$ helyettesítési értékeit kiszámolnunk a fenti pontokban.
$f$ nem deriválható pontjaiban az 6.10. Megjegyzésben írtak szerint kell eljárnunk.

**(III)** $f''$ mely pontokban létezik. (Ahol nem létezik, valamint a $\mathrm{Dom}(f)$-et alkotó intervallumok végpontjaiban és $f$ és $f'$ szakadási helyein: jobb illetve baloldali $f''$ deriváltak értékeit tudjuk csak meghatározni.)
$f''$ gyökei és előjelei (ezeket táblázatban érdemes összefoglalnunk), ebből $f$ inflexiós pontjai, $f$ konvexitása. Érdemes $f$ és $f'$ helyettesítési értékeit kiszámolnunk a fenti pontokban.
$f''$ nem értelmezhető pontjaiban a 6.29. Megjegyzésben írtak szerint kell eljárnunk.
(Felhívjuk a figyelmet még az 5.39. Megjegyzésben írt mesterfogásra is.)

**(IV)** Vázlatrajz elkészítése a fenti eredmények figyelembevételével (azaz a fenti eredményekkel összhangban)!
Esetleg $f$ globális szélsőértékei, $\mathrm{Ran}(f)$ (= $f$ értékkészlete).


Az **aszimptoták** fogalmát helyhiány miatt nem definiáljuk (az érintőhöz hasonlóan): olyan egyenesek, melyekhez „tetszőlegesen közel kerülhet" (metszheti is) a függvény grafikonja (**szümptein** = összeesni, **aszümptein** = nem összeesni, gör.).

A függőleges és vízszintes aszimptoták meghatározása könnyű feladat, a ferde aszimptoták megkeresése már kissé nehezebb.

**6.33. Állítás.** Az $y = c$ egyenes *vízszintes aszimptota*, ha $\displaystyle\lim_{x \to +\infty} f(x) = c$ vagy $\displaystyle\lim_{x \to -\infty} f(x) = c$ .

Az $x = a$ egyenes *függőleges aszimptota*, ha $\displaystyle\lim_{x \to a+0} f(x) = \pm\infty$ vagy $\displaystyle\lim_{x \to a-0} f(x) = \pm\infty$ .

Az $y = mx+b$ egyenes *ferde aszimptota*, ha *az alábbi két sor legalább egyikének mindkét feltétele teljesül:*

vagy $\displaystyle\lim_{x \to +\infty} \frac{f(x)}{x} = m$ és $\displaystyle\lim_{x \to +\infty} (f(x) - mx) = b$ ,

vagy $\displaystyle\lim_{x \to -\infty} \frac{f(x)}{x} = m$ és $\displaystyle\lim_{x \to -\infty} (f(x) - mx) = b$ .

**6.34. Megjegyzés.** Ha egy függvénynek van vízszintes aszimptotája, akkor ferde aszimptotája nem lehet!
Szemléletesen azért nem, mert „éppen a vízszintes lenne a ferde" .
(Természetesen precíz bizonyítás is szükséges és létezik de itt most nincs erre helyünk.

Sok részletesen kidolgozott feladatot találunk még az [SzK] , [SzF] és [www0] feladatgyűjteményekben.


# 7. fejezet

# Integrálszámítás és alkalmazásai

Első ránézésre ez a fejezet teljesen más szempontból vizsgálja a függvényeket, de Newton és Leibniz 7.46. Tétele megadja a kapcsolatot az integrál- és differenciálszámítás között.

## 7.1. Határozatlan integrál

**7.1. Definíció.** (*Primitív függvény*) Legyen $f : \mathbb{R} \hookrightarrow \mathbb{R}$ tetszőleges függvény és legyen $I \subseteq \mathrm{Dom}(f)$ tetszőleges intervallum.
Ha létezik egy olyan $F : I \to \mathbb{R}$ függvény, amelyre igaz, hogy

$$F'(x) = f(x) \qquad \forall x \in I , \tag{7.1}$$

akkor az $F$ függvényt az $f$ függvény *antideriváltjának* vagy *primitív függvényének* nevezzük, és az

$$F = \int f \qquad \text{vagy} \qquad F(x) = \int f(x)\,dx \tag{7.2}$$

jellel jelöljük.
Az $\int$ és $dx$ jelek közötti $f$ függvény neve: *integrandus* .

**7.2. Megjegyzés.** (i) Nagyon ügyeljünk a (7.1) egyenlőségben $F$ felett levő '-re!!!
(ii) Rögtön az elején egy atyai jó tanács: (lehetőleg) minden feladat után az eredményt deriváljuk le („visszafelé"), és nézzük meg, hogy visszakapjuk-e az integrandust (vagyis teljesül-e $F' = f$). Ez elsősorban nem számolásaink ellenőrzését szolgálja, hanem ezáltal jobban megértjük a (bonyolult) integrálási szabályok és számolások mikéntjét, lényegét!

**7.3. Tétel.** Ha $F$ és $G$ primitív függvényei $f$-nek (ugyanazon $I$ intervallumon), akkor létezik egy olyan $C \in \mathbb{R}$ valós szám, amelyre

$$G(x) = F(x) + C \qquad (\forall x \in I) \tag{7.3}$$


*(ábra: $G(x) = F(x) + C$)*

Könnyen látható, hogy a (7.3) összefüggést kielégítő függvények (grafikonjainak) halmaza egyrétűen (átfedés nélkül) lefedi a síkot, *görbesereget* alkotnak.

**7.4. Megjegyzés.** A fenti tételből következik, hogy $f$ összes primitív függvénye megkapható $F(x) + C$ ($C \in \mathbb{R}$) alakban. Ezért vezetik be az alábbi újabb fogalmat:

**7.5. Definíció.** (*Határozatlan integrál*) Legyen $f : \mathbb{R} \hookrightarrow \mathbb{R}$ tetszőleges függvény és $I \subseteq \mathrm{Dom}(f)$ tetszőleges olyan intervallum, amelyen $f$-nek létezik $F$ primitív függvénye.
Ekkor $f$ összes primitív függvényének halmazát az $f$ függvény *határozatlan integráljának* nevezzük, és (szintén) $\int f(x)\,dx$ vagy röviden csak $\int f$ jellel jelöljük:

$$\int f(x)\,dx := \{F(x) + C \mid C \in \mathbb{R}\}$$

vagy csak röviden

$$\int f(x)\,dx := F(x) + C . \tag{7.4}$$

**7.6. Gyakorlat.** Egy műveltségi kérdés: ki és mikor írta az „Integrál Böske" couplet-t (kuplét)?
(Megfejtés a lap alján[^1].)

**7.7. Megjegyzés.** (i) Felhívjuk a figyelmet arra, hogy most még a $+C$ nem tűnik fontos problémának, hiszen

[^1]: Zerkovitz Béla (1881-1948) magyar zeneszerző , még építészmérnök hallgató korában.
„Az életem a matematikáé, az analízist szörnyen szeretem, rajongok, ah, a geometriáé', Integrál Böske a nevem … ."


$$(F(x) + C)' = F'(x) + C' = F'(x) + 0 = f(x) ,$$

de később, az integrál alkalmazásainál (például differenciálegyenleteknél, amivel már nem foglalkozunk könyvünkben) már lényeges lesz a $+C$ „végződés". Tanácsoljuk tehát hogy amint az $\int$ jel eltűnik, azonnal rakjuk ki a $+C$ „végződést" !

(ii) A figyelmes Olvasó észreveheti, hogy az $\int$ jelet különböző objektumok jelölésére használjuk. Mivel csak absztrakt matematikai „apró" különbségben térnek el egymástól, mi nyugodtan használhatjuk bármelyikre.

(iii) A fenti (7.4) -ben bevezetett integrál valóban határozatlan, hiszen nem csak egy függvényt, hanem azok végtelen halmazát jelöli. A határozott integrál fogalmát a 7.37. Definícióban vezetjük be.

(iv) A definíciókban az $I$ intervallumnak lényeges szerepe van, például érdemes átgondolnunk az

$$\int \frac{1}{x}\, dx = \ln |x| + C \tag{7.5}$$

összefüggést. Mi (lehet) az $I \subset \mathrm{Dom}\left(\frac{1}{x}\right)$ intervallum? Nyilván $0 \notin I$ , tehát vagy $I \subset \mathbb{R}^+$ vagy $I \subset \mathbb{R}^-$ .

$I \subset \mathbb{R}^+$ (azaz $0 < x$) esetén nyilván $\displaystyle\int \frac{1}{x}\, dx = \ln(x) + C$ .

$I \subset \mathbb{R}^-$ (azaz $x < 0$) esetén pedig $\displaystyle\int \frac{1}{x}\, dx = \ln(-x) + C$

- tessék végiggondolni!

Ezt a két esetet írják egybe röviden a (7.5) képletben!

(v) Sajnos $I$ -t nem írhatjuk sem az $\int$ jel elé sem alá, mert $\int_I f$ a határozott integrált jelöli, amit a 7.37. Definícióban a 7.3. „Határozott integrál" fejezetben ismerünk meg.

Az $\int$ jel eredetét a 7.49. Megjegyzésben ismertetjük.

(vi) Az $\int \ldots dx$ jel egy zárójel-pár, például a közös (konstans-) szorzótényezőt is kiemelhetjük a zárójel elé:

$$\int 3x + 5\, dx = 3 \int x + \frac{5}{3}\, dx$$

a helyes átalakítás (a 7.16. Tétel alapján).

A sok (hasonló) primitív függvény közül néha hasznos egy speciálisat kiválasztani.

**7.8. Definíció.** Legyen $f : \mathbb{R} \hookrightarrow \mathbb{R}$ tetszőleges függvény és legyen $I \subset \mathrm{Dom}(f)$ tetszőleges olyan intervallum, amelyen $f$ -nek van primitív függvénye. Ekkor tetszőleges rögzített $\alpha \in I$ esetén

$$\int_\alpha f = \int_\alpha f(x)\, dx = F \tag{7.6}$$

jelölje $f$ -nek azon (egyetlen) $F$ primitív függvényét, amelyre

$$F(\alpha) = 0 .$$


$F$ neve: az $f$ függvénynek a $\alpha$ pontban eltűnő (nullát felvevő) primitív függvénye.

**7.9. Megjegyzés.** Könnyen belátható, hogy ha $f$ -nek van primitív függvénye, akkor tetszőleges $\alpha \in I$ esetén létezik $\alpha$ -ban eltűnő is, mégpedig egyetlen, vagyis $F$ egyértelmű.

Newton alábbi eredménye a legfontosabb a határozatlan integrálokat illetően:

**7.10. Tétel. (Newton$^{2)}$):** Ha $f$ folytonos akkor van primitív függvénye. (Newton jelen tétele a 7.44. Tételből következik.)

**7.11. Megjegyzés.** A függvények folytonossága, deriválhatósága és integrálhatósága közötti kapcsolatokat könnyű megjegyezni:

$$D \subset F \subset I$$

(Deriválható, Folytonos és Integrálható függvények halmazai ebben a sorrendben - betűrendben - részei egymásnak).

Azonban Newton kortársa, Joseph Liouville$^{3)}$ egy meglepő, nagyon fontos tételt fedezett fel (sajnos kevés könyvben lehet megtalálni a tételt):

**7.12. Tétel. (Liouville):** „Bizonyos" függvények primitív függvénye nem írható fel képlettel.

**7.13. Megjegyzés.** A fenti eredmény pontosabb megfogalmazása és bizonyítása megtalálható például Kovács István [K] munkájában.

Liouville tétele pontosan meghatározza a „bizonyos" függvények körét, de az túl bonyolult ahhoz, hogy itt leírjuk. Ilyen függvények például az analízisben, numerikus (közelítő) matematikában és a valószínűségszámításban fontos

$$\int e^{x^2}\, dx , \quad \int e^{ax^n}\, dx \quad \text{és} \quad \int \frac{e^{ax}}{x}\, dx \quad (a \neq 0,\ n \in \mathbb{N},\ n > 1),$$

$$\int e^{-x^2}\, dx , \quad \int \frac{e^x}{x}\, dx , \quad \int \sin x^2\, dx , \quad \int \cos x^2\, dx ,$$

$$\int \sqrt{1 - k \sin^2(x)}\, dx \quad (k \neq 1) \quad \text{függvények.}$$

Néhányuknak külön jelölése is van, értékeiket táblázatokba is összegyűjtötték fontosságuk miatt:

$$\Phi(x) := \frac{1}{\sqrt{2\pi}} \int_{-\infty}^x e^{-t^2/2}\, dt \quad (\text{ld. 5.56. Példa}),$$

$$\mathrm{Ci}(x) := \int \frac{\cos(x)}{x}\, dx , \quad \mathrm{Si}(x) := \int \frac{\sin(x)}{x}\, dx ,$$

$$\mathrm{Li}(x) := \int \frac{1}{\ln(x)}\, dx , \quad \text{stb.}$$

A fenti függvények (tetszőlegesen pontos) közelítő értékeit a 7.5. „Numerikus integrálás" fejezetben ismertetett képletek segítségével lehet kiszámítani és táblázatba foglalni.

---

$^{2)}$ Isaac Newton (1643-1727), angol fizikus és matematikus.

$^{3)}$ Joseph Liouville (1809-1882), francia matematikus.


## 7.2. Integrálási szabályok és módszerek

(Formális integrálás)

A Definíciók alapján az integrálszámítás a differenciálszámítás megfordítottja, így nem meglepő, hogy most a deriválási szabályok bizonyos értelemben vett megfordításait fogjuk használni. Próbáljuk meg az alábbiakban ezt a logikát is felfedezni a képletekben, ez segíti megértésüket és alkalmazásukat.

A képleteket bármely táblázatban vagy könyvben megtaláljuk, de helyettük a könnyebben megtanulható (és alkalmazható) „versiké"-ket javasoljuk!

Szokás szerint kezdjük az alapfüggvényekkel:

**7.14. Tétel. (Gyűjtemény az alapfüggvényekről)** Az összes alapfüggvény értelmezési tartományának minden belső pontjában integrálható.

Az alapfüggvények határozatlan integráljainak legteljesebb listáját [SzK] Függelékében vagy [www2] -ben, azaz a következő címen találhatjuk:

http://math.uni-pannon.hu/~szalkai/Der+Int-tablazat-sk-nagy.gif

Nagyon rövid táblázat van a középiskolai függvénytáblázatok c. gyűjteményben is.

**7.15. Megjegyzés.** (i) A 5.2. „Formális deriválás" fejezet 5.27. és 5.28. Megjegyzéseiben írtak itt is fontosak!

Az

$$\int x^\alpha\, dx = \frac{x^{\alpha+1}}{\alpha+1} + C \quad (\alpha \in \mathbb{R};\ \alpha \neq -1)$$

és

$$\int a^x\, dx = \frac{a^x}{\ln(a)} + C \quad (a \in \mathbb{R}^+)$$

szabályok könnyen összetéveszthetők, nagyon ügyeljünk a különbségekre!

Az $x^\alpha$ alakú hatványfüggvényekben „az alap mozog, a kitevő fix", integrálása: „növelem a kitevőt 1-gyel majd az új kitevővel osztok " („$+1$ -es képlet").

Kivétel az $\alpha = -1$ eset, ezt külön meg kell tanulnunk:

$$\int x^{-1}\, dx = \int \frac{1}{x}\, dx = \ln |x| + C .$$

Az $a^x$ alakú exponenciális függvényeknél pedig „az alap fix, a kitevő mozog", integrálása pedig: „önmaga $\div$ az alap logaritmusával".

(Vessük össze a fenti képleteket és versikéket a 5.27. Megjegyzésben írtakkal: azoknak megfordításai ugye ezek!?)

(ii) A 1.1.1. „Hatványfüggvények" fejezet 1.5. Megjegyzésében és a 5.2. „Formális deriválás" fejezet 5.28. Megjegyzésében részletesen megmutattuk, hogy meglepően sok függvényt foglal magában az $x^a$ típus. Ez pedig azt jelenti, hogy ezt a sok függvényt már tudjuk integrálni - csak a képleteket „visszafelé" kell olvasnunk.

**7.16. Tétel. (Alapműveletek)** Tetszőleges $f : I \to \mathbb{R}$ , $g : I \to \mathbb{R}$ integrálható függvényekre és $c \in \mathbb{R}$ tetszőleges rögzített valós számra az $f \pm g$ és $c \cdot f$ függvények is integrálhatóak az $I$ intervallumon, mégpedig

$$\int f(x) \pm g(x)\, dx = \int f(x)\, dx \pm \int g(x)\, dx$$


vagy röviden $\int f \pm g = \int f \pm \int g$ , tehát „összeget és különbséget tagonként integrálunk",

és

$$\int c \cdot f(x)\, dx = c \int f(x)\, dx$$

vagy röviden $\int c \cdot f = c \int f$ , tehát:

„a konstans szorzótényező kivihető az $\int$ -zárójel elé".

**7.17. Megjegyzés.** Hangsúlyozzuk, hogy a többi alapműveletre $\left(f \cdot g , \ \dfrac{f}{g}\right)$ NINCS semmilyen integrálási szabály!

**7.18. Tétel. (Belső függvény lineáris)**

Ha az $f : I \to \mathbb{R}$ függvény primitív függvénye $F$ és $a, b \in \mathbb{R}$ rögzített valós számok, akkor

$$\int f(ax + b)\, dx = \frac{F(ax + b)}{a} + C$$

vagyis „ha a belső függvény ($ax + b$) lineáris, akkor elegendő csak a külső függvényt ($f$) integrálni és a végeredményt ($F(ax + b)$) osztani a belső függvény deriváltjával ($a$)" .

**7.19. Megjegyzés.** A fenti belső függvény nyilván $y = ax + b$ , ennek deriváltja $\frac{dy}{dx} = a$ . Tudjuk, hogy bármilyen függvény pontosan akkor lineáris, ha deriváltja konstans, továbbá a láncszabály szerint

$$\left(\frac{F(ax + b)}{a}\right)' = \frac{1}{a}(F(ax + b))' = \frac{1}{a} F'(ax + b) \cdot a = f(ax + b) .$$

Ismételjük: NINCS semmilyen további (egyszerű) integrálási szabály, tehát általában az $f(g(x))$ összetett függvényre sincs!

**7.20. Megjegyzés.** Integrálás előtt sokszor célszerű az integrandust átalakítani, mint például az

$$\int \frac{\sqrt[3]{x}}{x^{2-2/3}}\, dx , \quad \int \sin^2(x)\, dx , \quad \int \frac{x+1}{x^3}\, dx , \quad \text{stb. függvényeknél.}$$

A racionális törtfüggvények parciális (elemi) törtekre bontásának módszerét az 1.1.2. alfejezetben ismertettük.

További gyakorláshoz ajánljuk az [SzK] és [SzF] feladatgyűjtemények kidolgozott feladatait.

A következő fejezetekben további integrálszámítási módszereket ismertetünk, amelyek sajnos már bonyolultabbak, ezért is foglalnak el egész fejezeteket.

### 7.2.1. Parciális integrálás módszere

A szorzatfüggvény differenciálási szabályának megfordításával adódó módszert nevezzük *parciális* (=„részleges" /lat./) *integrálásnak*, angolul *integration by parts*, csak névrokona a parciális törteknek és a többváltozós függvények parciális deriválásának (könyvünkben ez nem szerepel).


A módszert először a szokásos formájában írom le (7.21. Tétel), de hangsúlyozom, hogy több mint negyedszázados oktatási tapasztalataim szerint a második megfogalmazás (7.22. Tétel) nem csak könnyebben megjegyezhető hanem egyszerűbben használható is!

**7.21. Tétel. (Parciális integrálás - szokásos változat)**

Ha az $u(x)$ és $v(x)$ függvények valamely $I$ intervallumon differenciálhatóak, továbbá az $u'(x) v(x)$ szorzatfüggvénynek létezik primitív függvénye ezen az $I$ intervallumon, akkor az $u(x) v'(x)$ szorzatfüggvénynek is létezik primitív függvénye és

$$\int u(x) v'(x)\, dx = u(x) v(x) - \int u'(x) v(x)\, dx . \tag{7.7}$$

**7.22. Tétel. (Parciális integrálás - © Szalkai István)**

$$\int f(x) g(x)\, dx = F(x) g(x) - \int F(x) g'(x)\, dx \tag{7.8}$$

amennyiben a $g$ függvény deriválható és az $\int$ jel mögött álló függvények integrálhatóak az $I$ intervallumon.

*Szavakban (versike):* „(Bizonyos) szorzatok integrálása = a szorzat egyik tényezőjét integrálom másik marad mínusz integrál: másik tényezőjét deriválom egyik marad (integrálva)" .

**7.23. Példa.**
$$\int \cos(2x) \cdot x\, dx = \left(\int \cos(2x)\, dx\right) \cdot x - \int \left(\int \cos(2x)\, dx\right) \cdot x'\, dx =$$
$$= \frac{\sin(2x)}{2} \cdot x - \int \frac{\sin(2x)}{2} \cdot 1\, dx = \frac{\sin(2x)}{2} \cdot x - \frac{-\cos(2x)}{2 \cdot 2} + C .$$

**7.24. Megjegyzés.** A fenti példában választ kaptunk arra a kérdésre is, hogy miért érdemes (7.7) illetve (7.8) -ben egy integrál helyett egy másikat kapni: a második $\int$ könnyebb lehet mint az eredeti.

És ez mindegyik matematikai tétel / képlet legfontosabb kérdése: **mikor kell / lehet használni** ?

Nos, ha a $\sin$ , $\cos$ , $\exp_a = a^x$ , $\sinh$ , $\cosh$ függvényeket **mindegy**-függvényeknek nevezzük (mivel nekik lényegében mindegy, hogy deriválni vagy integrálni akarjuk őket), akkor az alábbi esetekben érdemes a parciális integrálás módszerét használnunk (7.22. Tétel versikéje alapján, a szereposztás lényeges!), esetleg több lépésben:

$$\int \text{polinom} \cdot \text{mindegy} , \quad \int \text{mindegy} \cdot \text{mindegy} , \quad \int \text{polinom} \cdot \ln ,$$
$$\int \text{polinom} \cdot \arctan .$$

Kidolgozott feldadatokat találunk [SzK] és [SzF] -ben.

**7.25. Megjegyzés.** (i) Ismét hangsúlyozzuk, hogy (7.7) illetve (7.8) nem a szorzat integrálásának (általános) képlete, hiszen egy másik integrált kapunk, ami nem minden esetben számítható ki.

(ii) A módszert azért hívjuk „parciális"-nak, mert a szorzatnak csak a felét integráltuk ki (félmunka), a másik részét majd később ... .


### 7.2.2. I. típusú helyettesítés és speciális esetei

Vérbeli matematikusok szerint nincs két típusú helyettesítés, de gyakorlati feladatoknál mégis jól jön, ha különböző szempontokból is megvizsgáljuk ezt a kérdést.

A módszert nem a szokásos formájában írom le (minden könyvben megtalálható), hanem a könnyebben használható változatot.

**7.26. Tétel. (I. típusú helyettesítés - © Szalkai István)**

$$\int f(g(x)) g'(x)\, dx = F(g(x)) + C , \tag{7.9}$$

vagy régies jelölésekkel

$$\int f(g) \frac{dg}{dx}\, dx = \int f(g)\, dg = F(g) + C , \quad \text{ahol } g = g(x) . \tag{7.10}$$

*Szavakban (versike):* „Ha az integrálban szereplő szorzat egyik tényezője összetett függvény ($f(g(x))$) és a másik szorzótényező éppen ennek az összetett függvény belső függvényének ($g$ -nek) a deriváltja ($g'(x)$), akkor csak a külső függvényt ($f$) kell integrálni (ez lesz $F$), a belseje ($g(x)$) marad! "

**7.27. Megjegyzés.** (o) A legfontosabb kérdés ismét: **mikor kell / lehet használni** ? Válasz: olvassuk el a Tétel mondatának első felét ismét: „Ha az integrálban szereplő szorzat egyik tényezője összetett függvény és a másik szorzótényező éppen ennek az összetett függvény belső függvényének a deriváltja" .

(i) Most ugyan nem akarunk bizonyítani, de motoszkál bennünk a kérdés: miért nem kell foglalkoznunk $g$ -vel?

Nos, (7.9) jobb oldalát visszafelé deriválva, a láncszabály alapján kapjuk:

$$(F(g(x)))' = F'(g(x)) \cdot g'(x) = f(g(x)) \cdot g'(x) = \text{OK. (Bebizonyítottuk.)}$$

A 7.26. Tétel speciális eseteit külön is érdemes megtanulnunk! (Azt is gondoljuk át: az egyes esetekben $f$ milyen függvény (7.9) -ben?)

**7.28. Következmény.** (i)

$$\int g(x) g'(x)\, dx = \frac{g^2(x)}{2} + C$$

azaz: „ha a szorzat egyik tényezője éppen a másik deriváltja (vagyis ha a fv a saját deriváltjával van szorozva), akkor az eredmény = a függvény-négyzete-per-kettő" ,

(ii)

$$\int g^\alpha(x) \cdot g'(x)\, dx = \frac{g^{\alpha+1}(x)}{\alpha+1} + C \quad (\alpha \neq -1)$$

azaz: „ha egy függvény $\alpha$ -dik hatványa van megszorozva a függvény (saját) deriváltjával, akkor az eredmény = a függvény-($\alpha + 1$)-dik hatványa-per-($\alpha + 1$)" ($\alpha \neq -1$),

(iii)

$$\int \frac{g'(x)}{g(x)}\, dx = \ln |g(x)| + C$$

azaz: „ha a tört számlálója éppen a nevezőnek a deriváltja, akkor az eredmény = nevezőnek a logaritmusa (abszolút értékben)" .


### 7.2.3. II. típusú helyettesítés

A Tételnek szintén sok változata ismert, mi a szerintünk legjobbat ismertetjük. A részletes 7.30. Példa és a 7.31. Magyarázat segít a megértésben.

**7.29. Tétel. (II. típusú helyettesítés)** Tegyük fel, hogy $g$ differenciálható az $J = (\alpha; \beta) \subset \mathbb{R}$ intervallumon, $g'(x) \neq 0$ ha $x \in J$ és legyen $I = \mathrm{Im}(g|_J)$ . Ha létezik az $(f \circ g) \cdot g'$ függvénynek primitív függvénye a $J$ intervallumon (jelöljük ezt $H$ -val), akkor $f$ -nek is létezik primitív függvénye az $I$ intervallumon, mégpedig $H \circ g^{-1}$ .

Képletekben:

$$\int f(x)\, dx = \left. \int f(g(u)) \frac{dx}{du}\, du \right|_{u = g^{-1}(x)} + C , \quad (x \in I) \tag{7.11}$$

ahol

$$x = g(u) \quad \text{azaz} \quad u = g^{-1}(x) \quad \text{és} \quad \frac{dx}{du} = g'(u) . \tag{7.12}$$

Kicsit másképpen: ha bevezetjük a

$$H(u) := \int f(g(u)) \frac{dx}{du}\, du \tag{7.13}$$

jelölést, akkor (7.11) így írható:

$$\int f(x)\, dx = H\left(g^{-1}(x)\right) + C . \tag{7.14}$$

**7.30. Példa.**
$$\int \frac{1}{e^x + 1}\, dx = ?$$

Legyen $e^x = u$ ahonnan

$$x = x(u) = \ln(u) = g(u) \quad \text{és} \quad \frac{dx}{du} = x'(u) = g'(u) = \frac{1}{u} , \quad \text{így}$$

$$\int \frac{1}{e^x + 1}\, dx = \left. \int \frac{1}{u + 1} \cdot \frac{dx}{du}\, du \right|_{e^x = u} = \left. \int \frac{1}{u + 1} \cdot \frac{1}{u}\, du \right|_{e^x = u} =$$

majd az $\dfrac{1}{u(u + 1)} = \dfrac{1}{u} - \dfrac{1}{u+1}$ azonosság alapján

$$= \left. \int \frac{1}{u} - \frac{1}{u+1}\, du \right|_{e^x = u} = \left. (\ln(u) - \ln(u + 1)) \right|_{e^x = u} + C =$$
$$= \ln(e^x) - \ln(e^x + 1) + C ,$$

az abszolútértékjel most felesleges, hiszen $u = e^x > 0$ .

**7.31. Megjegyzés.** (i) A tapasztalat szerint most (is) hasznosak az $x = x(u)$ és a $\frac{dx}{du} = x'(u)$ jelölések (ld. az 5.13. Jelölést a 5.1. „A differenciálhányados fogalma" fejezetben). Tudjuk ugyan, hogy $\frac{dx}{du}$ csak egyetlen jel, de mégis az

$$\frac{dx}{du} \cdot d(u) = dx \quad \text{„levezetés" már száz éve segít megjegyezni a (7.11) képletet.}$$

(ii) Csak érdekességképpen említjük meg, hogy a fenti 7.29. Tétel képletei lényegében az I. típusú helyettesítés (7.10) képletének átfogalmazásai.


## 7.3. Határozott integrál

Az integrálszámítás legfontosabb fogalma, ezért is szokták röviden **Az Integrál** -nak nevezni.

Ebben a fejezetben a függvénygörbe alatti területet elméletileg leírjuk és közelítjük, majd pontos (elméleti) képletet adunk kiszámítására, a gyakorlati számítások módszereit a következő, „Numerikus integrálás" fejezetben ismertetjük.

**7.32. Megjegyzés.** A határozott integrál Definíciója a 7.33. ponttól egészen a 7.38. pontig tart !

**7.33. Probléma.** Legyen $f$ tetszőleges függvény az $I$ intervallumon értelmezve. Az egyszerűség kedvéért tegyük fel, hogy $I = [a; b]$ véges és zárt intervallum, $f(x) \geq 0$ minden $x \in I$ esetén, valamint hogy $f$ folytonos $I$ -n.

Tekintsük az $y = f(x)$ függvénygrafikon, az $x$ tengely, valamint az $I$ intervallum végpontjaiban függőlegesen húzott $x = a$ ill. $x = b$ egyenletű egyeneseket. Ez a négy görbe (vonal) meghatároz egy (véges) síkrészt (síkidomot), amint ez a következő 7.35. Definíció utáni ábrán látható.

*Mekkora a területe ennek a „függvénygörbe alatti" síkrésznek ?*

**7.34. Definíció.** A fenti problémában meghatározott síkrész területét hívjuk az $f$ **függvénygörbe alatti területnek**.

A továbbiakban feltesszük $f$ és $I$ a fenti 7.33. pontban leírt tulajdonságait, nem említjük meg külön mindegyik pontban.

**7.35. Definíció.** Legyen $n \in \mathbb{N}$ egy tetszőleges természetes szám, és osszuk fel az $I$ intervallumot $n$ tetszőleges (nem szükségképpen egyenlő) részre, azaz legyenek $x_0; x_1; x_2; \ldots x_n \in I$ tetszőleges számok:

$$a = x_0 < x_1 < x_2 < \ldots < x_n = b . \tag{7.15}$$

Vegyünk mindegyik részintervallumban egy számot

$$x_{i-1} < x_i^* < x_i \tag{7.16}$$

és legyen

$$\delta := \max\{ |x_i - x_{i-1}| : i = 1; 2; \ldots; n \} \tag{7.17}$$

a legvastagabb ($x_i - x_{i-1}$) csík szélessége. Ekkor a függvénygörbe alatti $T$ terület közelítőleg

$$T \approx S_n := \sum_{i=1}^{n} f(x_i^*) \cdot (x_i - x_{i-1}) \tag{7.18}$$

($\approx$ a csík magassága szorozva a csík szélességével), ezért is hívják $S_n$ -et integrálközelítő összegnek.


*(ábra: $f(x)$ függvénygörbe alatti integrálközelítő összeg téglalapjai, az $x$ tengelyen az $x_0 = a, x_1^*, x_1, x_2^*, x_2, \ldots, x_{i-1}, x_i^*, x_i, \ldots, x_{n-1}, x_n^*, x_n = b$ osztópontokkal, kiemelve egy $f(x_i^*)$ magasság)*

$$\tag{7.19}$$

**Integrálközelítő összeg**

**7.36. Tétel.** Ha $\delta \to 0$ és $f$ folytonos függvény, akkor *létezik véges határértéke az $S_n$ integrálközelítő összegnek*, vagyis van olyan $t \in \mathbb{R}$ valós szám, amelyre

$$t = \lim_{\delta \to 0} S_n . \tag{7.20}$$

(Ügyeljünk arra, hogy a $\lim$ alatt valóban $\delta \to 0$ van és nem $n \to \infty$ !) $\quad \square$

**7.37. Definíció. (Határozott integrál)** A fenti $t$ határértéket nevezzük az $f$ függvény $I$ intervallumon vett **határozott integráljá**nak és $\int_I f$ jellel jelöljük, tehát

$$\int_I f := \lim_{\delta \to 0} S_n . \tag{7.21}$$

Ezenkívül a 7.33. pontban körülírt síkrész **területé**t is a (7.20) összefüggéssel definiáljuk:

$$T := \int_I f = \lim_{\delta \to 0} S_n . \quad \square \tag{7.22}$$

**7.38. Jelölés.** A határozott integrálra még sokféle jelölés is használatos:

$$\int_I f = \int_I f(x)\, dx = \int_a^b f = \int_a^b f(x)\, dx = \int_{[a,b]} f = \int_{[a,b]} f(t)\, dt = \ldots \quad \square \tag{7.23}$$


**7.39. Megjegyzés.** (i) Az $a$ és $b$ számokat szokás az integrál(ás) határainak is hívni, szerepük és sorrendjük lényeges, például $\int_b^a f = -\int_a^b f$ .

A határozott integrál nagyon sok fontos alaptulajdonságával sajnos itt most nincs helyünk foglalkozni, mint ahogyan (részben vagy egészében) negatív $f$ függvényekkel sem. Ezeket az összefüggéseket más könyvekből kell megtanulnunk, javasoljuk például [GyP] -t.

(ii) A mostani integrál azért „határozott", mert (7.21) és (7.20) szerint egy valós szám. A határozott és határozatlan integrálok közötti kapcsolatot Newton és Leibniz alábbi 7.46. Tétele ismerteti.

(iii) Vegyük észre, hogy a „függvénygörbe alatti" területet szintén nem definiáltuk geometriailag, csak határérték segítségével. Ennek egészen fejlett első változata az **Eudokszosz**$^{4)}$ és **Archimedesz**$^{5)}$ ókori görög matematikusok által felfedezett „kimerítés" módszere!

**7.40. Megjegyzés.** Geometriailag egy terület mindig pozitív valós szám. Kérdezhetnénk azonban például az $x^2 - 2$ parabolának az $x$ tengely alatti részének területét, vagy például az $y = \sin(x)$ függvény hullámainak területeit, ezek felváltva vannak az $x$ tengely felett és alatt.

Nem csak a Matematikai Analízis alább következő tételei, hanem a legtöbb fizikai és egyéb alkalmazás is megkívánja, hogy a függvénygörbék $x$ tengely alatti részeit negatív előjelű területnek tekintsük! Tehát például a $\sin$ függvény (szimmetriái miatt) $0$ -tól $2\pi$ -ig terjedő összeterülete

$$\int_0^{2\pi} \sin = \int_0^\pi \sin + \int_\pi^{2\pi} \sin = + - = 0 .$$

Vigyázzunk tehát a geometriai és az $\int$ által kiszámított előjeles területek közötti különbségre (és kapcsolatra)!

No, de hogyan számítjuk ki pontosan például a (7.22) határértéket, vagyis az $\int_a^b f$ határozott integrált? A kiszámítási képlet Newton és Leibniz 7.46. Tételében található, azonban még előttünk van pár fogalom és összefüggés.

**7.41. Definíció.** Legyenek $f$ és $I = [a; b]$ a 7.33. pontban leírt tulajdonságokkal. Definiáljuk ekkor az $F : I \to \mathbb{R}$ függvényt a következőképpen: legyen tetszőleges $\xi \in I$ esetén

$$F(\xi) := \int_a^\xi f(x)\, dx \quad (a \leq \xi \leq b) . \tag{7.24}$$

Ezt az $F$ függvényt hívjuk az $f$ függvény **integrálfüggvényének** vagy **területfüggvényének**.

A fenti (7.24) képletet szokás más betűkkel is írni (a két változat egyenértékű):

$$F(x) := \int_a^x f(t)\, dt \quad (a \leq x \leq b) . \tag{7.25}$$

---

$^{4)}$ Eudokszosz (Kr.e. 408-355) görög matematikus

$^{5)}$ Archimedesz (Kr.e. 287-212) görög matematikus


**7.42. Megjegyzés.** A 7.35. Definícióhoz tartozó ábra alapján képzeljük el, hogy az $f$ függvénygörbe alatti területet $a$ -tól csak $x$ -ig (az $x$ -nél húzott függőleges egyenesig), és ennek a (változó) területnek a méretét jelöljük $F(x)$ -el. Amint $x$ értékét változtatjuk, a terület is változik, mint pl. egy függöny elhúzásakor (most éppen nem a függöny alja hullámos, hanem a karnis - mint pl. sok színházban).

**7.43. Megjegyzés.** Vizsgáljuk meg most figyelmesen az $F(x)$ integrálfüggvény (területfüggvény) megváltozását $x$ (apró) mozgásának következtében. Ezt a folyamatot tanulmányozhatjuk a könyvhöz tartozó

http://math.uni-pannon.hu/~szalkai/integralfuggveny.gif mozgóképen (animáción).

Hát persze a terület(függvény) változása éppen $f(x)$ -től függ! A megváltozás pedig éppen a derivált! Tehát (szemléletesen) beláttuk a következő összefüggést:

**7.44. Tétel. (Newton)** Legyenek $f$ , $I = [a; b]$ és $F$ a 7.41. Definícióban leírt függvények illetve intervallum. Ekkor $F$ deriválható $I$ végpontjainak kivételével, és minden $x \in (a; b)$ számra

$$F'(x) = f(x) \quad (a < x < b) . \tag{7.26}$$

**7.45. Következmény.** A fenti (7.26) összefüggés éppen azt jelenti, hogy $f$ -nek megtaláltuk egy primitív függvényét!

Ez pedig bizonyítja Newton 7.10 tételét!

Megjegyezzük még, hogy $F$ az $a \in \mathbb{R}$ valós számnál eltűnő primitív függvény (ld. a 7.8. Definíciót).

**7.46. Tétel. (Newton-Leibniz szabály)** Legyenek $f$ és $I$ a 7.33. pontban leírt tulajdonságokkal.

Ha az $f$ függvénynek létezik $F$ primitív függvénye az $I$ intervallumon, akkor a fenti (7.21) azaz (7.22) terület

$$T = \int_a^b f(x)\, dx = F(b) - F(a) . \tag{7.27}$$

A képletben szereplő $F(b) - F(a)$ különbséget szokás az $F$ függvény **megváltozásának** is nevezni.

**7.47. Megjegyzés.** !!! A fenti (7.27) ugyan pontos képletet ad a kérdéses terület kiszámításához, amit nagyon sok gyakorlati és elméleti esetben sikerrel használhatunk, de ne feledjük Liouville 7.12. Tételét sem: nagyon sok folytonos $f$ függvény $F$ primitív függvénye nem írható fel (képlettel) !!!

Az ilyen esetekben az $\int_a^b f$ integrált csak közelítőleg tudjuk kiszámítani, aminek részleteit a 7.5. „Numerikus integrálás" fejezetben ismerhetjük meg.

**7.48. Következmény.** Ha $f$ folytonos $I$ -n, akkor létezik az $f$ függvénygrafikon alatti terület.

Sőt, ha az $f$ függvény csak véges sok pontban nem folytonos az $I$ intervallumban, de ezekben a pontokban is léteznek bal- és jobb- oldali határértékei (nem feltétlenül egyenlőek), akkor is létezik az $f$ függvénygrafikon alatti terület az $I$ intervallumon.


(Ne feledjük: a matematikusok sok olyan síkrészt is felfedeztek, amelyeknek nincs területe!)

**7.49. Megjegyzés.** Érdemes lesz megismernünk még a $\sum$ , $\delta$ és $\int$ jelek eredetét, hasonlóan a $dx$ és $\frac{df}{dx}$ jelekhez (ld. 5.13. Megjegyzés) hasonlóan.

Régen a görög $\sum$ betű helyett az $S$ betűt használták az összegezés jelére, a (német, *die*) *Summe* szó rövidítésére. Így például a (7.18) összeget az alábbi alakban írták:

$$T \approx S_n := \underset{i=1}{\overset{n}{S}}\, f(x_i^*) \cdot \Delta x_i \tag{7.28}$$

ahol természetesen $\Delta x_i = x_i - x_{i-1}$ a jólismert differencia (ld. 5.13. Megj.).

Nos, szépapáink úgy gondolták (!komolyan!): ha már $\delta \to 0$ , akkor $\Delta x$ is gömbölyödjön, legyen belőle $dx$ , az $S$ betűből pedig megnyúlva $\int$ .

Mindez nemcsak komoly, hanem hasznos (bár fizikus) gondolatmenet!

A határozott integrál alkalmazásai betöltik egész életünket, bevezető ismertetésük is kitenne egy könyvecskét! Most helyszűke miatt csak annyit tudunk megemlíteni (a 7.33.-7.38. Definíció és a legutolsó 7.49. Megjegyzés szerint is), hogy a határozott integrál általában egy nagyon („végtelenül") aprólékos, finom összegezése valamilyen változó $f$ mennyiségnek. Ezáltal lehet minden (folytonos) fizikai, kémiai, stb. mennyiséget összegezni $\int$ segítségével: teljesítmény, út, hő- és elektromos- mennyiségek, súlypont, stb. Egy példa erre az idő-sebesség függvényt használó *tachográf* , amellyel a megtett utat is ki lehet számítani.

Néhány képlet és kidolgozott feladat található például [SzK], [SzF], [www0] és [Bi] -ban.

## 7.4. Improprius integrál

Gyakran előfordul, hogy a 7.33. Definíció feltételei nem teljesülnek: vagy az $I$ intervallum nem véges vagy az $f$ függvény nem folytonos $I$ -n, vagy mindkettő. Az elnevezés mindkét esetben találó: nem világos = *improprius* (latin), angolul *improper*. (Például a Valószínűségszámítás tárgyban lesz ilyesmire szükségünk.)

### 7.4.1. Végtelen intervallum

Ez az egyszerűbb eset: $I$ végtelen.

**7.50. Definíció.** Legyen $f : \mathbb{R} \hookrightarrow \mathbb{R}$ tetszőleges függvény amely értelmezve van az $[a; +\infty)$ végtelen intervallumon (azaz $[a; +\infty) \subset \mathrm{Dom}(f)$ ).

Tegyük fel továbbá, hogy minden $a < z$ számra létezik az $\int_a^z f$ határozott integrál.

Ekkor a teljes $[a; +\infty)$ intervallumon az $f$ függvénygörbe alatti terület létezésének feltétele, hogy a

$$T := \lim_{z \to +\infty} \left( \int_a^z f(x)\, dx \right) \tag{7.29}$$


határérték konvergens legyen (létezik és véges), ebben az esetben írhatjuk:

$$\int_a^\infty f(x)\,dx := \lim_{z\to+\infty}\left(\int_a^z f(x)\,dx\right) . \tag{7.30}$$

**7.51. Definíció.** Legyen $f : \mathbb{R} \,\hookrightarrow\, \mathbb{R}$ tetszőleges függvény amely értelmezve van a $(-\infty; b]$ végtelen intervallumon (azaz $(-\infty; b] \subset \mathrm{Dom}(f)$ ).

Tegyük fel továbbá, hogy minden $w < b$ számra létezik a $\int_w^b f$ határozott integrál.

Ekkor a teljes $(-\infty; b]$ intervallumon az $f$ függvénygörbe alatti terület létezésének feltétele, hogy a

$$T := \lim_{w\to-\infty}\left(\int_w^b f(x)\,dx\right) \tag{7.31}$$

határérték konvergens legyen (létezik és véges), ebben az esetben írhatjuk:

$$\int_{-\infty}^b f(x)\,dx := \lim_{w\to-\infty}\left(\int_w^b f(x)\,dx\right) . \tag{7.32}$$

Sajnos kétoldalról végtelen intervallum is létezik: $(-\infty; +\infty) = \mathbb{R}$ , tehát:

**7.52. Definíció.** Legyen $f : \mathbb{R} \to \mathbb{R}$ tetszőleges függvény amely értelmezve van az egész $\mathbb{R}$ számegyenesen.

Tegyük fel továbbá, hogy minden $[a; b]$ véges intervallumon létezik az $\int_a^b f$ határozott integrál.

Ekkor a teljes $(-\infty; +\infty)$ számegyenesen az $f$ függvénygörbe alatti terület létezésének feltétele:

a kettős-határérték

$$\lim_{y\to-\infty}\ \lim_{z\to+\infty}\left(\int_y^z f(x)\,dx\right) \tag{7.33}$$

HELYETT inkább kettévágjuk a feladatot:

legyen $c \in \mathbb{R}$ tetszőleges rögzített szám, és legyenek

$$T_1 := \lim_{y\to-\infty}\left(\int_y^c f(x)\,dx\right) \quad \text{és} \quad T_2 := \lim_{z\to+\infty}\left(\int_c^z f(x)\,dx\right) \tag{7.34}$$

az előző 7.50. Definíciónak megfelelően.

Tehát, a teljes $(-\infty; +\infty)$ számegyenesen az $f$ függvénygörbe alatti terület létezésének feltétele, hogy $T_1$ és $T_2$ mindegyike véges legyen, és ekkor írhatjuk:

$$\int_{-\infty}^\infty f(x)\,dx := \lim_{y\to-\infty}\left(\int_y^c f(x)\,dx\right) + \lim_{z\to+\infty}\left(\int_c^z f(x)\,dx\right) . \tag{7.35}$$

(Szimbolikusan: $\displaystyle\int_{-\infty}^{+\infty} f = \int_{-\infty}^c f + \int_c^{+\infty} f$ .)


### 7.4.2. Végtelen függvény

A nehezebb eset, mert gyakran észre sem vesszük, hogy $f$-nek nincs (véges) határértéke a (véges) $I$ intervallumon, mint például az $\int_1^3 \frac{1}{x^2+x-6}\,dx$ feladatban (megoldását ld. [SzF] -ben).

Sajnos több esetet is meg kell vizsgálnunk attól függően, hogy az intervallum melyik részén nincs $f$-nek (véges) határértéke. (A fenti példa melyik esethez tartozik?)

**7.53. Megjegyzés.** Ha az $f$ függvénynek van véges határértéke az $I$ intervallum bármely pontjában, akkor a 7.48. Következmény alapján nem kell improprius határértékeket számolnunk!

**7.54. Definíció.** *(i)* Legyen $f : \mathbb{R} \,\hookrightarrow\, \mathbb{R}$ tetszőleges függvény amely értelmezve van az $I = [a; b)$ félig nyílt intervallumon (azaz $[a; b) \subset \mathrm{Dom}(f)$ ).

Tegyük fel továbbá, hogy minden $z \in [a; b)$ számra létezik az $\int_a^z f$ határozott integrál.

Ekkor a teljes $[a; b]$ intervallumon az $f$ függvénygörbe alatti terület létezésének feltétele, hogy a

$$T := \lim_{z\to b^-}\left(\int_a^z f(x)\,dx\right) \tag{7.36}$$

határérték konvergens legyen (létezik és véges), ebben az esetben írhatjuk:

$$\int_a^b f(x)\,dx := \lim_{z\to b^-}\left(\int_a^z f(x)\,dx\right) . \tag{7.37}$$

*(ii)* Legyen $f : \mathbb{R} \,\hookrightarrow\, \mathbb{R}$ tetszőleges függvény amely értelmezve van az $I = [a; b]$ zárt intervallumon kivéve egy $c$ belső pontot, azaz

$$a < c < b \quad \text{és} \quad [a; b] \setminus \{c\} \subset \mathrm{Dom}(f) .$$

Tegyük fel továbbá, hogy minden $y \in [a; c)$ és $z \in (c; b]$ (azaz $a < y < c$ és $c < z < b$ ) számokra léteznek az $\int_a^y f$ és $\int_z^b f$ határozott integrálok.

Ekkor a teljes $[a; b]$ intervallumon az $f$ függvénygörbe alatti terület létezésének feltétele, hogy a

$$\lim_{y\to c^-}\left(\int_a^y f(x)\,dx\right) \quad \text{és} \quad \lim_{z\to c^+}\left(\int_z^b f(x)\,dx\right) \tag{7.38}$$

féloldali határértékek mindegyike véges legyen, és ekkor írhatjuk:

$$\int_a^b f(x)\,dx := \lim_{y\to c^-}\left(\int_a^y f(x)\,dx\right) + \lim_{z\to c^+}\left(\int_z^b f(x)\,dx\right) . \tag{7.39}$$

(Szimbolikusan: $\displaystyle\int_a^b f = \int_a^c f + \int_c^b f$ .)


*(iii)* Legyen $f : \mathbb{R} \,\hookrightarrow\, \mathbb{R}$ tetszőleges függvény amely értelmezve van az $I = (a; b)$ nyílt intervallumon (azaz $(a; b) \subset \mathrm{Dom}(f)$ ).

A 7.52. Definícióhoz hasonlóan most is kettévágjuk a feladatot: legyen $c \in (a; b)$ tetszőleges rögzített belső pont, és tegyük fel továbbá, hogy minden $y \in (a; c]$ és $z \in [c; b)$ (azaz $a < y \leq c$ és $c \leq z < b$ ) számokra léteznek az $\int_y^c f$ és $\int_c^z f$ határozott integrálok.

Ekkor a teljes $[a; b]$ intervallumon az $f$ függvénygörbe alatti terület létezésének feltétele, hogy a

$$\lim_{y\to a^+}\left(\int_y^c f(x)\,dx\right) \quad \text{és} \quad \lim_{z\to b^-}\left(\int_c^z f(x)\,dx\right) \tag{7.40}$$

féloldali határértékek mindegyike véges legyen, és ekkor írhatjuk:

$$\int_a^b f(x)\,dx := \lim_{y\to a^+}\left(\int_y^c f(x)\,dx\right) + \lim_{z\to b^-}\left(\int_c^z f(x)\,dx\right) . \tag{7.41}$$

(Szimbolikusan: $\displaystyle\int_a^b f = \int_a^c f + \int_c^b f$ .)

Még további bonyolult esetek is léteznek, de helyünk már nincs.

Kidolgozott feladatok találhatóak [SzK], [SzF] és [www0] -ben.

## 7.5. Numerikus integrálás

*Numerikus = számszerű* (latin), most a határozott integrál **közelítő** kiszámításáról lesz szó.

Nem csak Liouville 7.12. Tételének eseteiben vagyunk kénytelenek a Newton–Leibniz 7.46. Szabálynál gyorsabb módszert keresni függvények értékeinek összegezéséhez (görbe alatti terület kiszámítása).

Ugyan a 7.35. Definícióban szereplő (7.18) képlet is egy közelítés, de mekkora hibával? Már az alábbi két egyszerű módszer is sokkal gyorsabb pontosabb (többszáz tizedesjegy a mp törtrésze alatt) közelítést ad. A módszerek mérnöki jelentőségét (különösen a mai számítógépek korában) ugye nem kell ecsetelnünk.

Mindkét alábbi módszer ötlete az, hogy a (7.19) ábrán az $(x_{i-1}; x_i)$ alapú és $f(x_i)$ magasságú téglalapok helyett más síkidomokkal közelítsük az $f(x)$ függvénygörbe alatti területet az $(x_{i-1}; x_i)$ intervallumokon. Ezen síkidomok alsó vízszintes része mindig az $x$ tengely, jobb- és baloldali határoló egyenesei szintén maradnak az $x_{i-1}$ és $x_i$ -ben emelt függőleges egyenesek, mindössze a felső „lezáró" részüket választjuk másképpen (nem az $f(x_i)$ magasságú vízszintes egyenesek maradnak). Az intervallum $I = [a; b]$ .

**7.55. Algoritmus.** (Trapézformula)
Az $(x_{i-1}; x_i)$ intervallumokon közelítsük az $f(x)$ függvénygörbe alatti területet trapézokkal: a függőleges egyenesek és az $y = f(x)$ grafikon metszéspontjait, vagyis az $(x_{i-1}; f(x_{i-1}))$ és $(x_i; f(x_i))$ pontokat kössük össze egyenes szakaszokkal.


Az egyszerűség kedvéért legyenek az $x_i$ $(i = 1, 2, ..., n)$ pontok egymástól egyenlő távolságra (**ekvi**|**disztans**) , vagyis legyen

$$x_i - x_{i-1} = h \quad \text{ahol} \quad h := \frac{b-a}{n} , \tag{7.42}$$

vagy másképpen

$$x_0 = a \quad \text{és} \quad x_i = x_{i-1} + h \quad (i = 1, 2, ..., n) . \tag{7.43}$$

Ekkor mindegyik trapéz (vízszintes) szélessége $h$ , az $i$ -edik trapéz párhuzamos oldalai $f(x_{i-1})$ és $f(x_i)$ , vagyis területe $t_i = \dfrac{f(x_{i-1}) + f(x_i)}{2} \cdot h$ , a közelítő összeg pedig (átrendezés után)

$$T \approx \sum_{i=1}^n t_i = \frac{b-a}{n} \cdot \left( \frac{f(a)}{2} + f(x_1) + f(x_2) + ... + f(x_{n-1}) + \frac{f(b)}{2} \right) . \tag{7.44}$$

Ez a **trapézformula**. (Nem is olyan bonyolult!)

*(ábra)* **Trapézformula**

**7.56. Tétel.** Ha az $f$ függvény kétszer deriválható az $I = [a; b]$ intervallumon, és $K$ egy korlátja $|f''(x)|$ -nek, vagyis

$$|\,f''(x)\,| \leq K \quad (\forall x \in I) ,$$

akkor a (7.44) trapézformula hibája legfeljebb

$$\left| \int_a^b f(x)\,dx - (7.44) \right| \leq \frac{K \cdot (b-a)^3}{12 n^2} .$$


**7.57. Megjegyzés.** A nevezőben szereplő $n^2$ azt jelenti, hogy ha a „csíkok" szélességét felére/harmadára/... csökkentjük, vagyis $n$ értékét kettő-/három-/... -szorosára növeljük, akkor a (7.44) trapézformula hibája negyede/kilencede/... lesz az előzőnek.

**7.58. Megjegyzés.** A fenti képletekben szereplő $M$ és $K$ korlátoknak elegendő csak durva felső becslését megadni, hiszen a nevezőben szereplő $n^2$ és főleg az $n^4$ tagok nagyon gyorsan tartanak $\infty$ -hez: például kétszer annyi osztópont esetén négyszer illetve 16 -szor kisebb a hiba!

**7.59. Algoritmus.** (Simpson⁶⁾ - formula)
Páros sok $x_i$ osztópontot válasszunk, vagyis legyen $n = 2m$ , az osztópontok ismét legyenek egymástól egyenlő távolságra (**ekvi**|**disztans**), vagyis (7.42) teljesül.

A grafikon három egymást követő pontjára, tehát az $(x_{i-1}; f(x_{i-1}))$ , $(x_i; f(x_i))$ és $(x_{i+1}; f(x_{i+1}))$ pontokra $(i = 2j + 1)$ illesszünk parabolaívet, legyen ez a felső határa az $x_{i-1}$ és $x_{i+1}$ (pontokban emelt) függőleges és $x$ tengely-vízszintes egyenesekkel határolt síkrészt. Ezek területeit is ki tudjuk könnyen számítani, a végső közelítő formula pedig

$$T \approx \sum_{j=1}^m t_j^{(\text{parabola})} =$$
$$= \frac{b-a}{3n} \left( f(a) + 4f(x_1) + 2f(x_2) + 4f(x_3) + ... + 2f(x_{n-2}) + 4f(x_{n-1}) + f(b) \right) , \tag{7.45}$$

vagyis az osztópontokhoz tartozó szorzótényezők $1$ , $4$ , $2$ , $4$ , $2$ , ... , $2$ , $4$ , $1$ .

Ez a **Simpson-formula**. (Ez sem olyan bonyolult!)

**7.60. Tétel.** Ha az $f$ függvény négyszer deriválható az $I = [a; b]$ intervallumon, és $M$ egy korlátja $\left| f^{(4)}(x) \right|$ -nek, vagyis

$$\left| f^{(4)}(x) \right| \leq M \quad (\forall x \in I) ,$$

akkor a (7.45) Simpson-formula hibája legfeljebb

$$\left| \int_a^b f(x)\,dx - (7.45) \right| \leq \frac{M \cdot (b-a)^5}{180 n^4} .$$

Kidolgozott példákat [SzF] -ben találunk.

---

⁶⁾ Thomas Simpson (1710-1761) angol matematikus
