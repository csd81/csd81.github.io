**2.5. Newton-módszer** (*Newton–Raphson-módszer* vagy *érintőmódszer*) 

## 1. A módszer alapötlete és matematikai háttere

* **A numerikus alapelv:** Helyettesítsük a bonyolult nemlineáris problémát egy hozzá közel lévő, egyszerűbb (lineáris) problémával, és annak a megoldását tekintsük az eredeti probléma közelítéseként.
* **Matematikai levezetés:** Az $f(x)=0$ egyenlet megoldásához rögzítünk egy $p_0$ kezdőpontot, és felírjuk a függvény $p_0$ körüli elsőrendű Taylor-polinomját (lineáris közelítését):

$$f(p_0) + f'(p_0)(x - p_0) = 0$$


* **A rekurziós formula:** A fenti lineáris egyenletet $x$-re rendezve kapjuk meg a következő közelítő pontot. Ezt az eljárást ismételve adódik a Newton-iteráció rekurzív képlete (feltéve, hogy $f'(p_k) \neq 0$):

$$p_{k+1} = p_k - \frac{f(p_k)}{f'(p_k)}$$



### Geometriai interpretáció

Geometriailag a módszer azt jelenti, hogy az aktuális $(p_k, f(p_k))$ grafikonpontban **érintőt húzunk a függvényhez**, és a következő $p_{k+1}$ pont ennek az érintőegyenesnek és az $x$-tengelynek a metszéspontja lesz.



## 2. Konvergencia és kapcsolat a fixpont-iterációval

A Newton-módszer felfogható egy speciális, egylépéses fixpont-iterációként is, ahol az iterációs függvény:


$$g(x) := x - \frac{f(x)}{f'(x)}$$


Ha a $g$ függvényt differenciáljuk a hányados-szabály alapján, a következőt kapjuk:


$$g'(x) = \frac{f(x)f''(x)}{(f'(x))^2}$$


Ha $p$ a függvény egy valódi gyöke ($f(p)=0$), és ebben a pontban az első derivált nem nulla ($f'(p) \neq 0$), akkor a számláló miatt $g'(p) = 0$ lesz. A fixpont-tétel értelmében ez garantálja a rendkívül gyors konvergenciát:

> **2.23. Tétel (Lokális konvergencia):** Legyen $f \in C^2[a,b]$, és $p \in (a,b)$ az $f$ egy olyan gyöke, ahol $f'(p) \neq 0$. Ekkor a Newton-módszer **lokálisan konvergál** $p$-hez (azaz elég közelről indítva a sorozat biztosan a gyökhöz tart). Mivel $g'(p)=0$, a konvergencia **másodrendű (kvadratikus)**, ami rendkívül gyors lefutást eredményez.

* **Példa a gyorsaságra:** Az $e^x - 2\cos x = 0$ egyenlet esetén $p_0=0.1$ kezdőérték mellett a módszer mindössze **5 lépés** alatt eléri a $10^{-14}$ nagyságrendű pontosságot.



## 3. A Newton-módszer veszélyei és korlátai

Bár a módszer ideális esetben nagyon gyors, komoly buktatói és hátrányai vannak:

### A) Káosz és divergencia: Az $\arctan$ példa (2.24. Példa)

Tekintsük az $f(x) = 0.5\arctan x$ függvényt, aminek a $p=0$ az egyetlen gyöke. A kiindulópont megválasztásától függően három teljesen eltérő eset fordulhat elő:

1. **Konvergencia ($|p_0| < p^*$):** Ha elég közel indulunk a nullához, a sorozat gyorsan konvergál a gyökhöz.
2. **Ciklus ($|p_0| = p^* \approx 1.3918$):** Létezik egy kritikus pont, ahonnan indítva a sorozat állandóan ingadozik a $p^*$ és $-p^*$ értékek között, azaz **periodikus pályára áll** és sosem konvergál.
3. **Divergencia ($|p_0| > p^*$):** Ha a kritikus értéken kívülről indulunk (pl. $p_0 = 1.4$), az érintők egyre messzebb lökik a következő pontot az origótól. A sorozat előjele váltakozik, de az abszolút értéke **a végtelenbe tart ($|p_k| \to \infty$)**, így az iteráció teljesen összeomlik.

### B) Gyakorlati hátrányok

* **Szükség van a deriváltra:** A formula megköveteli az $f'(x)$ pontos analitikus képletét.
* **Bonyolult képletek:** Ha az eredeti függvény összetett, a derivált képlete rendkívül hosszú és számításigényes lehet, ami növeli a kerekítési hibák felhalmozódásának kockázatát.
* **Képlet hiánya:** Ha a függvénynek nincs ismert analitikus formája (pl. csak egy mérési adatsor vagy egy feketedoboz-szerű szimuláció adja a függvényértékeket), a Newton-módszer nem alkalmazható közvetlenül.