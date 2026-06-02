**7.2. Richardson-extrapoláció** 



## 1. Motiváció és az extrapoláció alapötlete

* **A probléma:** Sok numerikus közelítő módszer (például a numerikus differenciálás vagy integrálás) pontossága a $h$ lépésköz csökkentésével növelhető, de a túl kicsi $h$ választása a kerekítési hibák robbanásához vezet.
* **A megoldás:** A Richardson-extrapoláció egy olyan eljárás, amely **anélkül képes növelni egy numerikus séma konvergencia-rendjét (pontosságát), hogy a lépésközt az instabil tartományig kellene csökkentenünk**. Ehhez a módszert két különböző lépésközzel (általában $h$ és $h/2$) értékeljük ki, majd a kapott közelítések okos lineáris kombinációjával elimináljuk a hiba legfontosabb (legnagyobb nagyságrendű) tagját.



## 2. Matematikai levezetés (A hiba kiküszöbölése)

Tegyük fel, hogy egy pontos, ismeretlen $M$ mennyiséget közelítünk egy $K(h)$ formulával, amelynek a képlethibája $h$ szerint **páros hatványú** hatványsorba fejthető (mint például a központi differenciaképlet esetén):


$$M = K(h) + a_2 h^2 + a_4 h^4 + a_6 h^6 + \cdots + b(h) \tag{7.20}$$


Ahol a hiba vezető tagja másodrendű ($a_2 h^2$). Írjuk fel ugyanezt a közelítést a felére csökkentett $h/2$ paraméterrel is:


$$M = K(h/2) + a_2 \frac{h^2}{4} + a_4 \frac{h^4}{16} + a_6 \frac{h^6}{64} + \cdots + b(h/2)$$

Annak érdekében, hogy a domináns $a_2$ együtthatós tagot eltüntessük, szorozzuk meg a második egyenletet $4$-gyel, majd vonjuk ki belőle az első egyenletet:


$$4M - M = 4K(h/2) - K(h) + a_2 h^2 - a_2 h^2 + \left(\frac{4}{16} - 1\right)a_4 h^4 + \cdots$$

$$3M = 4K(h/2) - K(h) - \frac{3}{4}a_4 h^4 - \frac{15}{16}a_6 h^6 - \cdots$$

Ha elosztjuk az egyenletet $3$-mal, megkapjuk az **új, kombinált közelítő formulát**:


$$M = \frac{4K(h/2) - K(h)}{3} - \frac{1}{4}a_4 h^4 - \frac{5}{16}a_6 h^6 - \cdots$$

> **A módszer lényege:** Az új $K^{(1)}(h) := \frac{4K(h/2) - K(h)}{3}$ formula a hiba másodrendű tagját teljesen kioltotta, így az új közelítés már **negyedrendű** ($\mathcal{O}(h^4)$) pontossággal követi a pontos értéket.



## 3. Az általános rekurzív séma

Ez az eliminációs folyamat tetszőlegesen sokszor megismételhető, így egyre magasabb rendű közelítésekhez juthatunk. Az iteratív algoritmus az alábbi rekurziós sémával írható le:

$$K^{(i+1)}(h) := K^{(i)}(h/2) + \frac{K^{(i)}(h/2) - K^{(i)}(h)}{4^{i+1} - 1}, \qquad i = 0, 1, \ldots, m - 1$$

Ahol $K^{(0)}(h) := K(h)$ a kiindulási alapmódszer. Az egyes lépések rendjei a következőképpen növekednek:

* $K^{(0)} \implies \mathcal{O}(h^2)$ (másodrendű)
* $K^{(1)} \implies \mathcal{O}(h^4)$ (negyedrendű)
* $K^{(2)} \implies \mathcal{O}(h^6)$ (hatodrendű)



## 4. Alkalmazási példa: Negyedrendű numerikus differenciálás

A fejezet bemutatja, hogy ha a kiindulási alapunk a másodrendű központi (szimmetrikus) differenciaképlet:


$$K(h) = \frac{f(x_0 + h) - f(x_0 - h)}{2h}$$

Akkor erre alkalmazva a Richardson-extrapoláció első lépését ($K^{(1)}(h)$), a következő **negyedrendű differenciaképletet** kapjuk eredményül:


$$K^{(1)}(h) = \frac{4 \cdot \dfrac{f(x_0 + h/2) - f(x_0 - h/2)}{h} - \dfrac{f(x_0 + h) - f(x_0 - h)}{2h}}{3}$$

$$K^{(1)}(h) = \frac{f(x_0 - h) - 8f(x_0 - h/2) + 8f(x_0 + h/2) - f(x_0 + h)}{6h}$$

Ez a formula megegyezik azzal a magasabb rendű differenciaképlettel, amelyet egyébként csak jóval bonyolultabb módon, többpontos Lagrange-interpolációval vagy magas fokú Taylor-polinomok rendezésével tudtunk volna közvetlenül levezetni.



## 5. Összegzés és gyakorlati haszon

A Richardson-extrapoláció egy rendkívül hatékony és elegáns számítási eszköz. Lehetővé teszi, hogy egyszerű, alacsonyabb rendű (és könnyen programozható) alapmódszerekből kiindulva szisztematikusan **tetszőlegesen magas pontosságú sémákat generáljunk**, tisztán a lépésközök ügyes kombinálásával. Ez az elv képezi az alapját többek között a numerikus integrálásnál használt híres Romberg-módszernek is.