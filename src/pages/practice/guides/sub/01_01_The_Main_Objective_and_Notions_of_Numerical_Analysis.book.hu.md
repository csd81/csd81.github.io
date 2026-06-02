## 1.1. A numerikus analízis feladata, alapfogalmak

A fizikai valóság folyamatainak leírására és a vizsgált fizikai változók jelen ill. jövőbeli értékének meghatározására szolgáló matematikai számítások vázlatos menetét az 1.1. ábrával lehet szemléltetni.

```
                        ┌─────────────────────┐
┌──────────────────┐    │ matematikai modell  │    ┌─────────────────────┐
│ fizikai folyamat │ →  │   paraméterek       │ →  │ numerikus megoldás  │
└──────────────────┘    │   állandók          │    └─────────────────────┘
                        │   kezdeti értékek   │
                        └─────────────────────┘
        örökölt hiba:                       számítási hiba:
          - modellhiba                        - képlethiba
          - mérési hiba                       - kerekítési hiba
```

**1.1. ábra.**

Az első lépés a vizsgált folyamat leírása, matematikai modellezése. Ez a lépés a megfelelő tudományág (fizika, kémia, biológia, közgazdaságtan stb.) feladata. A kapott modellben sokszor szerepelnek paraméterek, állandók, kezdeti feltételek, amelyeket általában megfigyeléssel, méréssel állapíthatunk meg. Ha a modell és az abban szereplő paraméterek ismertek, akkor használhatjuk a matematikai modellt a fizikai rendszerre vonatkozó kérdések megválaszolására. A fizikai rendszerre, ill. az azt leíró matematikai modellre feltehetünk kvalitatív kérdéseket (pl. létezik-e egyértelmű megoldása a matematikai feladatnak, van-e határértéke a vizsgált változónak, periodikus-e a folyamat stb.) vagy kvantitatív kérdéseket (mi a vizsgált fizikai változó értéke egy adott időpontban, mi a pontos vagy közelítő megoldása a matematikai modellnek stb.). A kvalitatív kérdésekre az adott modellhez tartozó matematikai szakterület keresi a választ, a kvantitatív kérdésekkel pedig a numerikus analízis foglalkozik. A numerikus analízis feladata matematikai feladatok numerikus eredményének aritmetikai műveletekkel (osztás, szorzás, összeadás, kivonás) való pontos vagy közelítő megoldása.

Az 1.1. ábrán leírt folyamattal számolt fizikai változó értéke általában nem egyezik meg pontosan a változó tényleges értékével. Az elkövetett hibát két nagyobb kategóriára bontjuk: *örökölt hiba* és *számítási hiba*. Az örökölt hiba az első lépésben, azaz a fizikai folyamat matematikai modellel való helyettesítésekor elkövetett hiba. Ezt is két részre oszthatjuk: *modellhiba* és *mérési hiba*. A modellhiba abból adódik, hogy a matematikai modellek levezetésére használt törvények idealizáltak, csak "közelítései" a valóságnak. A mérési hiba az a hiba, amit azáltal kapunk, hogy a matematikai modellben a valódi paramétereknek, kezdeti feltételeknek csak mért, így közelítő értékét használjuk a tényleges értékek helyett.

A számítási hibát is két részre bontjuk, *képlethibára* és *kerekítési hibára*. A képlethiba az a hiba, amit akkor követünk el, amikor egy matematikai kifejezés pontos értéke helyett annak közelítő értékét használjuk.

**1.1. példa.** Tegyük fel, hogy az $f(x) = \sin x$ függvény értékét kell kiszámítanunk egy megadott $x$ pontban. Az $f(x)$ függvény értékét helyett kiszámíthatjuk pl. az $f$ függvény ötödrendű Taylor-polinomját: $T_5(x) = x - x^3/3! + x^5/5!$. A Taylor-tétel (2.5. tétel) szerint ha $f(x)$-et $T_5(x)$-szel helyettesítjük, akkor a közelítés hibája $\dfrac{f^{(6)}(\xi)}{6!}x^6 = -\dfrac{\sin\xi}{6!}x^6$ alakban írható fel. Ez a hiba (azaz a módszerünk képlethibája) kicsi, ha $x$ közel van 0-hoz. $\square$

A kerekítési hiba abból adódik, hogy a számítógépen egy valós számot csak véges sok tizedesjegy pontossággal tudunk tárolni, így általában már a valós számok tárolásakor követünk el hibát. Kerekítési hiba lép fel az aritmetikai műveletek végzése közben is: a számítógép az egyes aritmetikai műveletek eredményeit adott számú tizedesjegyre kerekítés után tárolja/használja tovább. A kerekítési hibával bővebben az 1.2–1.4. szakaszokban foglalkozunk.

Egy numerikus módszer levezetésekor az első kérdés amit vizsgálnunk kell, a módszer képlethibája, hiszen egy numerikus közelítő érték csak akkor hasznos, ha azt is tudjuk róla, hogy mekkora hibával közelíti a pontos értéket. A következő fogalom, ami egy numerikus módszerrel kapcsolatban felmerül, a *stabilitás*. Ezt a fogalmat kétféle értelemben is használjuk. Beszélhetünk egy matematikai modell vagy feladat stabilitásáról, vagy egy numerikus módszer stabilitásáról. Kezdjük egy példával.

**1.2. példa.** Tekintsük a

$$8x + 917y = 1794$$
$$7x + 802y = 1569.$$

lineáris egyenletrendszert. Ennek megoldása $x = -5$ és $y = 2$. Ha viszont a második egyenletben $x$ együtthatóját 7.01-re[^1] változtatjuk, akkor a

$$8x + 917y = 1794$$
$$7.01x + 802y = 1569$$

egyenletrendszer megoldása $x = -1.232562589$ és $y = 1.967132499$ lesz (9 tizedesjegy pontossággal). Azt tapasztaljuk, hogy 0.14%-os változás az együtthatóban a megoldás 75.3%-os ill. 1.6%-os változását eredményezte. $\square$

Azt mondjuk, hogy egy matematikai feladat *korrekt* vagy *stabil*, ha "kis" változás a feladat paramétereiben a megoldás "kis" változását idézi csak elő. Ellenkező esetben *inkorrekt* vagy *instabil feladatról* beszélünk. Az előző példában vizsgált egyenletrendszer tehát e szerint a terminológia szerint egy inkorrekt feladat.

[^1]: Ebben a jegyzetben, hogy a számítógépek és programozási nyelvek által használt jelöléssel összhangban legyünk, a törtszámoknál tizedespontot használunk tizedesvessző helyett.

Egy numerikus algoritmust a kerekítési hibákra nézve *stabilnak* nevezünk, ha a kerekítési hibák nem befolyásolják jelentősen a számított végeredményt. Ha a kerekítési hibák miatt a számított végeredmény jelentősen eltér a számítandó értéktől, akkor az algoritmust *instabilnak* nevezzük. A következő példában egy instabil algoritmust mutatunk be.

**1.3. példa.** Tekintsük a következő három, rekurzív definícióval megadott sorozatot:

$$
\begin{aligned}
x_n &= \frac{1}{3}x_{n-1}, & x_0 &= 1,\\
y_n &= 2y_{n-1} - \frac{5}{9}y_{n-2}, & y_0 &= 1,\quad y_1 = \frac{1}{3},\\
z_n &= \frac{13}{3}z_{n-1} - \frac{4}{3}z_{n-2}, & z_0 &= 1,\quad z_1 = \frac{1}{3}.
\end{aligned}
\tag{1.1}
$$

Könnyen látható, hogy mindhárom képlet az $x_n = y_n = z_n = \frac{1}{3^n}$ számsorozatot definiálja, azaz a három sorozat algebrailag ekvivalens. A gyakorlatban viszont észrevehető különbség van a három képlet között. Az 1.1. táblázatban kinyomtattuk az (1.1) képlettel számított sorozatok első 18 tagját. A számításokat egyszeres pontossággal végeztük csak, hogy a kerekítési hibák hatását jobban láthassuk. Azt tapasztaljuk, hogy $x_n$ tényleg az $1/3^n$ értékeket állítja elő, viszont az $y_n$ és $z_n$ számolt értékeiben kerekítési hibából származó eltérést láthatunk. Mindkét sorozatnál fellép a hiba, de $z_n$ esetében a hiba igen gyorsan nő, a 18. tagnál már 100-as nagyságrendű. Azt tapasztaltuk tehát, hogy az $x_n$ képlete egy stabil, a $z_n$ képlete pedig egy instabil módszer $1/3^n$ generálására.

Arról, hogy az előbb vizsgált hibák tényleg a kerekítési hibák rovására írhatók, meggyőződhetünk úgy, hogy megismételjük a számításokat, de most dupla pontosságot használva a számok tárolásához. Az egész listát nem, csak a 18. tag hibáját közöljük: $|y_{18} - 1/3^{18}| = -2.5104e - 13$ és $|z_{18} - 1/3^{18}| = 2.3804e - 07$. Látható, hogy ebben az esetben a számolás hibája sokkal kisebb. $\square$

**1.1. táblázat.**

| $n$ | $x_n$ | $y_n$ | $\|y_n - 1/3^n\|$ | $z_n$ | $\|z_n - 1/3^n\|$ |
|----|----------|----------|------------|-----------|------------|
| 2  | 0.111111 | 0.111111 | 2.2352e-08 | 0.111111  | 4.4703e-08 |
| 3  | 0.037037 | 0.037037 | 4.0978e-08 | 0.037037  | 1.8254e-07 |
| 4  | 0.012346 | 0.012346 | 6.9849e-08 | 0.012346  | 7.3109e-07 |
| 5  | 0.004115 | 0.004115 | 1.1688e-07 | 0.004118  | 2.9248e-06 |
| 6  | 0.001372 | 0.001372 | 1.9465e-07 | 0.001383  | 1.1699e-05 |
| 7  | 0.000457 | 0.000458 | 3.2442e-07 | 0.000504  | 4.6795e-05 |
| 8  | 0.000152 | 0.000153 | 5.4071e-07 | 0.000340  | 1.8718e-04 |
| 9  | 0.000051 | 0.000052 | 9.0117e-07 | 0.000800  | 7.4872e-04 |
| 10 | 0.000017 | 0.000018 | 1.5019e-06 | 0.003012  | 2.9949e-03 |
| 11 | 0.000006 | 0.000008 | 2.5032e-06 | 0.011985  | 1.1980e-02 |
| 12 | 0.000002 | 0.000006 | 4.1721e-06 | 0.047920  | 4.7918e-02 |
| 13 | 0.000001 | 0.000008 | 6.9535e-06 | 0.191674  | 1.9167e-01 |
| 14 | 0.000000 | 0.000012 | 1.1589e-05 | 0.766693  | 7.6669e-01 |
| 15 | 0.000000 | 0.000019 | 1.9315e-05 | 3.066773  | 3.0668e+00 |
| 16 | 0.000000 | 0.000032 | 3.2192e-05 | 12.267091 | 1.2267e+01 |
| 17 | 0.000000 | 0.000054 | 5.3653e-05 | 49.068363 | 4.9068e+01 |
| 18 | 0.000000 | 0.000089 | 8.9422e-05 | 196.273453| 1.9627e+02 |

A következő fogalom, amit egy (véges sok lépésből álló) numerikus módszernél vizsgálni szoktunk, az algoritmus *műveletigénye* vagy *műveletszáma*. Tekintsünk először egy példát:

**1.4. példa.** Számítsuk ki a $p(x) = p(x) = 5x^4 - 8x^3 + 2x^2 + 4x - 10$ negyedfokú polinom értékét egy megadott $x$ pontban! Természetesen ezt könnyen megtehetjük $p$ képletét és aritmetikai műveleteket használva. A képletben 4 összeadás/kivonás, 4 szorzás és 3 hatványozás szerepel. A hatványozások tulajdonképpen $3+2+1=6$ szorzást jelentenek, azaz összesen 10 szorzásra van szükség a képlet alkalmazásához. Megtehetjük viszont, hogy átalakítjuk $p$ képletét:

$$p(x) = 5x^4 - 8x^3 + 2x^2 + 4x - 10 = (((5x - 8)x + 2)x + 4)x - 10.$$

A $p$ polinomnak ezt az alakját használva már csak 4 összeadás ill. kivonás valamint 4 szorzás kell a képlet kiértékeléséhez. $\square$

Az előző példában bemutatott eljárást megismételhetjük általános $n$-edfokú polinomokra:

$$a_n x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0 = ((\cdots((a_n x + a_{n-1})x + a_{n-2})x + \cdots)x + a_1)x + a_0$$

Ebben a képletben összesen csak $n$ összeadás/kivonás és $n$ szorzás szerepel. Ezt a polinomok kiértékelésére vonatkozó módszert *Horner-eljárásnak* nevezzük. A módszert az 1.5. algoritmussal írhatjuk le.

**1.5. algoritmus. Horner-eljárás**

```
INPUT:  n - a polinom fokszáma
        a_n, a_{n-1}, ..., a_0 - a polinom együtthatói
        x - ahol a polinomot kiértékeljük
OUTPUT: p - a polinom értéke az x pontban

p ← a_n
for i = n-1, ..., 0 do
    p ← a_i + px
end do
output(p)
```

A számítógépeken egy szorzás ill. osztás elvégzése jelentősen tovább tart, mint egy összeadás vagy kivonás. Ezért egy algoritmus műveletigényén általában a benne szereplő osztások/szorzások számát szokás érteni.

Egy algoritmusra jellemző tulajdonság még az *adattárolási igénye*. Egy $10 \times 10$-es lineáris egyenletrendszer megoldására használt algoritmus esetében az adatok tárolása nem jelenthet problémát, de ugyanez $10000 \times 10000$-es rendszerre már gond lehet. Ilyen mennyiségű adat kezelésekor előnyben részesítünk olyan algoritmusokat, amelyeknek minél kisebb az adattárolási igénye. Például, ha tudjuk, hogy az együtthatómátrixban csak a főátlóban és az alatta ill. felette levő néhány átlóban vannak csak nem nulla elemek (ún. szalagmátrix), akkor mindenképpen célszerű olyan algoritmust használni, amely kihasználja az adatok speciális szerkezetét, és nem tárolja számolás közben a felesleges nullákat. Ilyen módszerre látunk majd példát a 3.5. szakaszban.
