**2.4. Húrmódszer** (*Method of False Position / Regula Falsi*)

## 1. A módszer alapötlete és motivációja

* **Miért van rá szükség?** Az intervallumfelezés módszerének nagy hiányossága, hogy a következő közelítő pont meghatározásakor egyáltalán nem veszi figyelembe a függvény alakját (mindig mereven a felezőpontot választja).
* **A húrmódszer elve:** A kiindulási feltételek megegyeznek (legyen $f \in C[a,b]$ és $f(a)f(b) < 0$). Azonban az új $p_k$ osztópontot nem az intervallum felezőpontjaként, hanem az $(a_k, f(a_k))$ és $(b_k, f(b_k))$ pontokat összekötő **húr (szelőegyenes) és az $x$-tengely metszéspontjaként** definiáljuk.

A szelőegyenes egyenletéből kiszámolva az új közelítő pont képlete:


$$p_k = a_k - f(a_k)\frac{a_k - b_k}{f(a_k) - f(b_k)}$$

A következő $[a_{k+1}, b_{k+1}]$ intervallumnak most is azt a részt választjuk az $[a_k, p_k]$ és $[p_k, b_k]$ közül, ahol a függvény előjelet vált.

> **Implementációs megjegyzés:** Programozáskor a nullával való osztás elkerülése érdekében mindig ellenőrizni kell, hogy $f(a_k) \neq f(b_k)$ teljesül-e.



## 2. Konvergencia konvex/konkáv esetben (2.19. Tétel)

A húrmódszer konvergenciája általánosan bonyolultabban bizonyítható, de van egy jól kezelhető, fontos speciális eset:

* **Tétel:** Ha $f \in C[a,b]$ folytonos, $f(a)f(b) < 0$, és a függvény **szigorúan konvex vagy konkáv** az $[a,b]$ intervallumon, akkor a húrmódszer garantáltan konvergál az $f$ függvény egyértelmű $p$ gyökéhez.
* **A bizonyítás mechanizmusa (példa):** Ha $f$ konvex, $f(a) > 0$ és $f(b) < 0$, akkor a húr geometriai tulajdonságai miatt a gyök mindig a bal oldali részintervallumba esik. Emiatt az intervallum egyik végpontja fixen megmarad ($a_{k+1} = a$), míg a másik végpont a $p_k$ pontok szerint szigorúan monoton módon sorra rázáródik a valódi gyökre ($b_{k+1} = p_k$).



## 3. A húrmódszer sebessége: Mikor gyors és mikor lassú?

A fejezet két részletes numerikus példán keresztül mutatja be, hogy a függvény alakja és a kezdeti intervallum megválasztása hogyan befolyztolja radikálisan a sebességet az $f(x) = e^x - 2\cos x = 0$ egyenlet esetén:

### A) A "szerencsés" eset: $[0,1]$ intervallum (2.20. Példa)

* **Tapasztalat:** $TOL = 10^{-5}$ tolerancia mellett a húrmódszer mindössze **8 lépés** alatt elérte a kívánt pontosságot.
* **Összehasonlítás:** Ugyanezen az intervallumon az intervallumfelezésnek 16 lépésre volt szüksége. Mivel a függvény alakja kedvező volt, a szelőegyenes sokkal gyorsabban "irányította" a pontokat a gyök felé, mint a vak felezgetés.

### B) A "csapda" eset: $[0,4]$ intervallum (2.21. Példa)

* **Tapasztalat:** Ha az intervallumot megnöveljük $[0,4]$-re, a húrmódszer látványosan összeomlik: még **51 lépés** után sem éri el a kívánt pontosságot (a függvényérték még mindig csak $10^{-4}$ nagyságrendű).
* **Összehasonlítás:** Az intervallumfelezésnek ezen a nagyobb intervallumon is csupán **18 lépés** kell.
* **Mi a lassulás oka?** Az $e^x - 2\cos x$ függvény a $4$ környezetében az exponenciális tag miatt rendkívül gyorsan megemelkedik ($f(4) \approx 54$). A $(0, -1)$ és $(4, 54)$ pontokat összekötő húr emiatt nagyon meredek lesz, és az $x$-tengelyt szinte teljesen a bal oldali végpont ($0$) mellett fogja metszeni. A módszer beragad, és minden lépésben csak elenyészően kicsit lép közelebb a gyökhöz.



## 4. Összefoglaló tanulság

A húrmódszer **nem feltétlenül gyorsabb** az intervallumfelezésnél. Ha a kezdőintervallum egyik végpontjában a függvényérték aránytalanul hatalmas a másikhoz képest, a húrmódszer konvergenciája rendkívül lelassulhat. Ezzel szemben az intervallumfelezés lassabb, de a lépésszáma teljesen kiszámítható és immunis a függvény aszimmetriájára.