**1.1. A numerikus analízis feladata, alapfogalmak** 



## 1. A numerikus analízis fő feladata

A tudományos és mérnöki számítások során a fizikai valóság folyamatainak leírására matematikai modelleket alkotunk. A modellek kvalitatív vizsgálata (pl. létezik-e egyértelmű megoldás) az elméleti matematika feladata, míg a kvantitatív kérdések megválaszolása (pontos számértékek meghatározása) a numerikus analízis hatásköre.

> **A numerikus analízis feladata:** Matematikai problémák pontos vagy közelítő megoldása alapvető aritmetikai műveletek (összeadás, kivonás, szorzás, osztás) sorozatára lefordítva, amelyeket egy számítógép végre tud hajtani.



## 2. Hibaforrások a számítások során

A numerikus eljárások során kapott végeredmény szinte sosem egyezik meg a fizikai valóság teljesen pontos értékével. A hibák két legfontosabb belső forrása:

### A) Képlethiba (Csonkítási hiba / Truncation error)

Akkor követjük el, amikor egy végtelen matematikai kifejezést vagy függvényt egy véges, egyszerűbb formulával helyettesítünk.

* **Példa:** Az $f(x) = \sin x$ függvény pontos értékének kiszámításához a végtelen Taylor-sor helyett annak csak az ötödrendű Taylor-polinomját ($T_5(x)$) használjuk:

$$T_5(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!}$$


* A hanyagolt rész a Taylor-tétel maradéktagja alapján a keletkező képlethiba:

$$\text{Képlethiba} = -\frac{\sin\xi}{6!}x^6$$



### B) Kerekítési hiba (Rounding error)

Abból adódik, hogy a számítógépek a valós számokat (különösen az irracionális vagy végtelen tizedestörteket) csak **véges sok tizedesjegy pontossággal** (korlátos bájton) képesek tárolni és kezelni.



## 3. Matematikai modellek és numerikus módszerek stabilitása

A stabilitás fogalmát a numerikus analízisben két különböző értelemben használjuk:

1. **A matematikai modell stabilitása (Kondicionáltság):** Azt vizsgálja, hogy a bemenő adatok (mérésekből adódó paraméterek) apró megváltozása mekkora változást idéz elő a feladat pontos elméleti megoldásában. Ha a változás kicsi, a modell *jól kondicionált*, ha hatalmas, akkor *rosszul kondicionált*.
2. **A numerikus módszer (algoritmus) stabilitása:** Azt méri, hogy a számítás közben elkerülhetetlenül fellépő kerekítési hibák hogyan hatnak a végeredményre. Egy algoritmus stabil, ha a kerekítési hibák nem halmozódnak fel katasztrofálisan, és nem teszik tönkre a végeredményt.



## 4. Algoritmusok komplexitása (Művelet- és tárigény)

### Műveletigény (Időbeli komplexitás)

Mivel a számítógépeken a szorzás és az osztás elvégzése lényegesen több időt vesz igénybe, mint az összeadás vagy a kivonás, egy algoritmus műveletigényén általában a benne szereplő **szorzások és osztások számát** értjük.

#### Példa: Polinom kiértékelése és a Horner-eljárás

Tekintsünk egy negyedfokú polinomot:


$$p(x) = 5x^4 - 8x^3 + 2x^2 + 4x - 10$$

* **Közvetlen kiértékelés:** A hatványozásokat szorzásokká bontva ($x^4 = x \cdot x \cdot x \cdot x$) a képlet kiszámításához 4 összeadás/kivonás mellett **10 szorzásra** van szükség.
* **Horner-eljárás (Horner's method):** Alakítsuk át a polinom szerkezetét egymásba ágyazott szorzatokká:

$$p(x) = (((5x - 8)x + 2)x + 4)x - 10$$



Ebben a formában a polinom kiértékeléséhez már csak 4 összeadás/kivonás és mindössze **4 szorzás** szükséges.

Általános $n$-edfokú polinomokra kiterjesztve a közvetlen számítás $O(n^2)$ szorzást igényelne, míg a Horner-féle átrendezéssel a műveletigény lecsökken **pontosan $n$ darab összeadásra és $n$ darab szorzásra**.

### Adattárolási igény (Térbeli komplexitás)

Azt határozza meg, hogy az algoritmusnak mennyi memóriára van szüksége a futása során. Nagy dimenziós problémáknál (pl. egy $10000 \times 10000$-es mátrix tárolása) kritikus, hogy kihasználjuk a mátrixok speciális szerkezetét (pl. ha ritka mátrixról van szó, ne tároljuk a felesleges nullákat), ezzel minimalizálva a szükséges memóriát.