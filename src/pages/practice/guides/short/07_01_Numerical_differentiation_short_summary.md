**7.1. Numerikus differenciálás** 




## 1. Alapötlet és a levezetés módszerei

A matematikai analízisből ismert, hogy egy függvény $x_0$ pontbeli deriváltja a differenciahányadosának határértéke, ha a lépésköz ($h$) nullához tart:


$$f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}$$

Ha $|h|$ kicsi, a határérték elhagyásával közelítő képletet kapunk. A numerikus analízisben azonban ennél több kell: pontosan ismernünk kell a közelítés során elkövetett **képlethibát (csonkítási hibát)**. Ennek meghatározására a jegyzet két egyenértékű matematikai megközelítést mutat be:

1. **Lagrange-módszer:** Az $f$ függvényt az $x_0$ környezetében felvett diszkrét pontok alapján egy $L_n(x)$ Lagrange-féle interpolációs polinommal helyettesítjük, majd ennek a polinomnak a deriváltját ($L'_n(x_0)$) használjuk az $f'(x_0)$ közelítésére.
2. **Taylor-módszer:** Az $f(x_0 + h)$ és $f(x_0 - h)$ kifejezéseket Taylor-sorba fejtjük az $x_0$ pont körül, és a kapott egyenletek megfelelő összevonásával vagy kivonásával elszigeteljük a keresett derivált tagot, miközben a maradéktagok közvetlenül megadják a hibát.



## 2. Elsőrendű közelítő képletek (Forward and Backward Differences)

Ha az interpolációhoz vagy sorbafejtéshez mindössze két alappontot használunk, elsőrendű sémákat kapunk.

### A) Jobb oldali (előrehaladó) differenciaképlet (Forward Difference)

Az $x_0$ és $x_0 + h$ ($h>0$) pontokra támaszkodik:


$$f'(x_0) = \frac{f(x_0 + h) - f(x_0)}{h} - \frac{f''(\xi)}{2}h \tag{7.5}$$

* **Hibatag:** $-\dfrac{f''(\xi)}{2}h \sim \mathcal{O}(h)$, ami azt jelenti, hogy a módszer **elsőrendű**. Ha a lépésközt felére csökkentjük, a hiba is durván a felére esik.

### B) Bal oldali (hátrafele haladó) differenciaképlet (Backward Difference)

Az $x_0$ és $x_0 - h$ ($h>0$) pontokat használja fel:


$$f'(x_0) = \frac{f(x_0) - f(x_0 - h)}{h} + \frac{f''(\xi)}{2}h \tag{7.8}$$

* Szintén **elsőrendű** ($\mathcal{O}(h)$) közelítés.



## 3. Magasabbrendű közelítő képletek

Pontosabb eredményt érhetünk el, ha több alappont információját vonjuk be a számításba, vagy szimmetrikus elrendezést alkalmazunk.

### C) Központi (szimmetrikus) differenciaképlet (Central Difference)

Ha az $x_0 + h$ és $x_0 - h$ Taylor-sorfejtéseit kivonjuk egymásból, a páros deriváltas hibatagok kiesnek, és az első rendű deriváltra az alábbi rendkívül népszerű képlet adódik:

$$f'(x_0) = \frac{f(x_0 + h) - f(x_0 - h)}{2h} - \frac{f'''(\xi)}{6}h^2 \tag{7.11}$$

* **Hibatag:** $-\dfrac{f'''(\xi)}{6}h^2 \sim \mathcal{O}(h^2)$, azaz a központi séma **másodrendű**. A lépésköz felezése itt már a negyedére csökkenti a képlethibát.

### D) Második derivált közelítése (Second Derivative)

Az $x_0 - h, x_0, x_0 + h$ pontok Taylor-sorainak összeadásával előállítható a függvény második deriváltját közelítő séma is:


$$f''(x_0) = \frac{f(x_0 + h) - 2f(x_0) + f(x_0 - h)}{h^2} - \frac{f^{(4)}(\xi)}{12}h^2 \tag{7.14}$$

* Ez a séma szintén **másodrendű** ($\mathcal{O}(h^2)$).



## 4. A kerekítési hibák instabilitási csapdája

A numerikus differenciálás az egyik legveszélyesebb numerikus művelet a véges lebegőpontos számábrázolást használó számítógépeken. Ennek oka a **kivonási jegyvesztés (kiejtési hiba)**.

Ha a függvényértékek tárolása során $\varepsilon$ korlátú kerekítési hiba lép fel, az elsőrendű jobb oldali differenciaképlet teljes hibája a háromszög-egyenlőtlenség alapján így alakul:


$$\text{Teljes hiba} \leq \underbrace{\frac{M_2}{2}h}_{\text{Képlethiba} \to 0} + \underbrace{\frac{2\varepsilon}{h}}_{\text{Kerekítési hiba} \to \infty} \qquad (\text{ha } h \to 0)$$

* **Aszimptotikus divergencia:** Ha a lépésközt ($h$) elméleti pontosságot hajszolva túlságosan kicsinek választjuk ($h \to 0$), a számlálóban két rendkívül közeli számot vonunk ki egymásból ($f(x_0+h) - f(x_0)$), ami megsemmisíti az értékes jegyeket. Mivel a nevezőben $h$-val osztunk, a felerősödött kerekítési hiba a végtelenbe tart, és **a számítás teljesen használhatatlanná válik (divergál)**.

A jegyzet egy numerikus táblázattal igazolja ezt az $f(x)=e^x$ függvényen $x_0=1$ mellett: 4-jegyű aritmetikát használva $h=0.1$ esetén a hiba $0.1417$, $h=0.01$-nél lecsökken $0.0817$-re, de $h=0.001$-nél a kerekítési hibák robbanása miatt a hiba már **visszaugrik $0.2817$-re**.



## 5. Parciális deriváltak közelítése

A fejezet végén bemutatott képletek alapján az egyváltozós sémák mintájára a többváltozós függvények parciális és vegyes parciális deriváltjai is felírhatók rácspontok segítségével:

* **Elsőrendű parciális derivált $x$ szerint:** $\dfrac{\partial f(x_0, y_0)}{\partial x} \approx \dfrac{f(x_0 + h, y_0) - f(x_0, y_0)}{h}$
* **Vegyes másodrendű parciális derivált:** $\dfrac{\partial^2 f(x_0, y_0)}{\partial x \partial y} \approx \dfrac{f(x_0 + h, y_0 + h) - f(x_0 + h, y_0) - f(x_0, y_0 + h) + f(x_0, y_0)}{h^2}$