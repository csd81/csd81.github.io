# 9. fejezet

# Legkisebb négyzetek módszere

Tegyük fel, hogy egy fizikai folyamatot egy $g$ függvénnyel írhatunk le, amelynek ismerjük vagy feltételezzük az általános képletét, de bizonyos paraméterek a képletben ismeretlenek. A paramétereket egy $\mathbf{a}$ vektorban tárolva a $g(x; \mathbf{a})$ jelöléssel hangsúlyozhatjuk, hogy $g$ az $\mathbf{a}$ paraméterektől függ. Feltesszük, hogy vannak $y_i$ ($i = 0, 1, \ldots, n$) mérési adataink a $g$ függvényről az $x_i$ alappontokban. Tegyük fel a példa kedvéért, hogy tudjuk vagy sejtjük, hogy $g$ egy másodfokú polinom. Ekkor $g$-t 3 paraméter, az együtthatói határozzák meg. Ha 3-nál több mérési értékünk van, akkor általában már nem tudunk egy parabolát rajzolni a pontokon keresztül (a mérési hibák miatt az adataink valószínűleg nem a parabola grafikonján helyezkednek el). Ezért a célunk az, hogy keressük meg azokat a paraméter értékeket, amelyhez tartozó $g$ függvény a "legkevésbé" tér el a mérési adatoktól. Ezt a feladatot hívjuk *görbeillesztésnek*. Nem nyilvánvaló, hogy mit értsünk azon, hogy a függvény "legkevésbé" tér el az adatoktól. Attól függően, hogyan definiáljuk az illesztés hibáját, más és más matematikai feladatként fogalmazhatjuk meg a görbeillesztés feladatát. Lehetséges az illesztés hibáját mérni az

$$F_1(\mathbf{a}) := \max\{|g(x_i; \mathbf{a}) - y_i| : i = 0, 1, \ldots, n\}$$

vagy az

$$F_2(\mathbf{a}) := \sum_{i=0}^{n} |g(x_i; \mathbf{a}) - y_i|$$

képletekkel. Mindkettőt természetes választásnak érezhetjük, hiszen ha a képlet értéke kis szám, akkor a $g(x_i)$ függvényérték és az $y_i$ mérési érték eltérése is kicsi lesz minden pontban. A probléma az, hogy ha $F_1(\mathbf{a})$-t ill. $F_2(\mathbf{a})$-t szeretnénk minimalizálni $\mathbf{a}$ szerint, akkor ez matematikailag nehéz feladat amiatt, hogy egyik függvény sem differenciálható $\mathbf{a}$ szerint. Ezt a technikai problémát kiküszöbölhetjük azzal, ha az

$$F(\mathbf{a}) := \sum_{i=0}^{n} (g(x_i; \mathbf{a}) - y_i)^2,$$

ún. négyzetes hibával mérjük a függvény és a mérési adatok eltérését. A matematikai feladat tehát az, hogy minimalizáljuk az $F(\mathbf{a})$ függvényt, és a minimumhelyhez tartozó paraméter értékekkel definiált $g(x; \mathbf{a})$ függvényt tekintjük a pontokra legjobban illeszkedő adott típusú függvénynek. Ezt a módszert hívjuk a *legkisebb négyzetek módszerének*.

A négyzetes hiba segítségével történő görbeillesztést tanulmányozzuk ebben a fejezetben. Először lineáris függvény, majd tetszőleges polinom, és végül néhány speciális nemlineáris függvény és trigonometrikus polinom illesztésével foglalkozunk. A fejezet végén rosszul definiált lineáris egyenletrendszerek legkisebb négyzetes megoldását vizsgáljuk.
