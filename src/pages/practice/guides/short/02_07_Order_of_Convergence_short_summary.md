**2.7. Konvergencia rendje** (*Order of Convergence*) 

## 1. A konvergencia rendjének definíciója és jelentősége

A különböző numerikus módszerek eltérő sebességgel közelítik meg a függvények gyökét. A konvergencia gyorsaságának egzakt matematikai jellemzésére vezetjük be a konvergencia rendjének fogalmát.

> **Definíció:** Legyen $p_k$ egy $p$-hez konvergáló sorozat. A sorozat konvergencia rendje **$\alpha$** ($\alpha \ge 1$), ha létezik olyan $c \ge 0$ konstans, hogy:
> 
> $$|p_{k+1}-p|\leq c|p_k-p|^\alpha \quad \text{minden } k\geq 0\text{-ra},$$
> 
> 
> 
> ahol $\alpha=1$ (lineáris eset) esetén megköveteljük, hogy $c<1$ legyen.

A gyakorlatban az $\alpha$ kitevő határozza meg, hogy az előző lépés hibája ($|p_k - p|$) milyen mértékben határozza meg a következő lépés hibáját ($|p_{k+1} - p|$).

### Nevezetes konvergenciatípusok

* **Lineáris konvergencia ($\alpha = 1$):** A hiba minden lépésben egy konstans aránnyal csökken. Igazolható az alábbi globális becslés is:

$$|p_k-p|\leq c^k|p_0-p|$$


* **Kvadratikus konvergencia ($\alpha = 2$):** A hiba a négyzetével arányosan csökken, ami azt jelenti, hogy a tizedesjegyek száma az iterációk során durván *megduplázódik* minden lépésben.
* **Szuperlineáris konvergencia:** Átmenet a kettő között. Ha a konvergencia rendje $\alpha = 1$, de az aszimptotikus hibakonstans $0$.



## 2. Aszimptotikus hibakonstans és a rend egyértelműsége

Ha a sorozat hibatagjainak hányadosa konvergál egy határértékhez, akkor azt **aszimptotikus hibakonstansnak ($\lambda$)** nevezzük:


$$\lambda = \lim_{k\to\infty}\frac{p_{k+1}-p}{(p_k-p)^\alpha}$$

### 2.28. Tétel (A rend egyértelműsége)

Ha a sorozat $\alpha$ rendben konvergál egy $\lambda \neq 0$ konstanssal, akkor:

1. $\beta < \alpha$ esetén a fenti hányados $0$-hoz tart.
2. $\beta > \alpha$ esetén a hányados a végtelenbe tart ($\infty$).

Ez a tétel biztosítja, hogy egy sorozat konvergenciájának rendje pontosan és egyértelműen meghatározható.

### Szemléltető példa: Newton-módszer rendje (2.29. Példa)

Az $e^x-2\cos x = 0$ egyenleten végzett Newton-iteráció hibáit vizsgálva a táblázatból jól látszik a kvadratikus viselkedés:

* $\alpha = 1$-re a hányados $0$-hoz tart.
* $\alpha = 2$-re a hányados stabilizálódik (korlátos marad: $\approx 0.625$).
* $\alpha = 3$-ra a hányados robbanásszerűen a végtelenbe tart.
Ez numerikusan bizonyítja, hogy a Newton-módszer rendje pontosan $2$.



## 3. Fixpont-iterációk rendje (2.32. Tétel)

Ha a gyökkeresést egy $p_{k+1} = g(p_k)$ fixpont-iterációra vezetjük vissza (ahol $p = g(p)$ a fixpont), a rendet közvetlenül a $g$ függvény gyökhelyen vett **deriváltjai** határozzák meg:

1. Ha $|g'(p)| < 1$, akkor a konvergencia **lineáris**.
2. Ha az első $m-1$ darab derivált mind nullával egyenlő a $p$ pontban ($g'(p) = g''(p) = \dots = g^{(m-1)}(p) = 0$), de az $m$-edik már nem ($g^{(m)}(p) \neq 0$), akkor a módszer **$m$-edrendben lokálisan konvergens**. Az aszimptotikus hibakonstans ekkor:

$$\lambda = \frac{g^{(m)}(p)}{m!}$$



> **Következmény:** Egy fixpont-iteráció konvergenciájának rendje a sima függvények esetén **mindig egész szám** (1, 2, 3, stb.).



## 4. Gyökök multiplicitása és a Newton-módszer (2.34. Tétel)

Egy $p$ számot az $f$ függvény **$m$-szeres gyökének** nevezünk, ha felírható $f(x) = (x-p)^m q(x)$ alakban, ahol $q(p) \neq 0$.

A Newton-módszer sebessége drasztikusan függ a gyök multiplicitásától:

* **Egyszeres gyök ($m=1$):** Ha $f(p)=0$ és $f'(p)\neq 0$, a Newton-módszer **kvadratikusan** ($\alpha = 2$) konvergál.
* **Többszörös gyök ($m>1$):** Ha a gyök többszörös, a Newton-módszer fixpont-függvényének deriváltja $g'(p) = 1 - \frac{1}{m} \neq 0$ lesz. Emiatt a konvergencia **visszalassul lineárisra** ($\alpha = 1$).

*(Ezt jól szemlélteti a 2.35. példa polinomja, ahol a $-2$ kétszeres gyököt csak lineárisan, míg a $3$ egyszeres gyököt kvadratikusan érte el az algoritmus).*



## 5. A szelőmódszer nem-egész rendje (2.36. Tétel)

Míg a fixpont-iterációk rendje mindig egész szám, a többlépéses iterációknál ez nem feltétlenül igaz. Ha $p$ az $f$ függvény **egyszeres gyöke**, a szelőmódszer hibaismétlődése a Fibonacci-sorozattal hozható összefüggésbe.

Ebből kifolyólag a szelőmódszer konvergenciájának rendje az aranymetszés arányszáma:


$$\alpha = \frac{1+\sqrt{5}}{2} \approx 1.618$$


Ez egy rendkívül fontos elméleti eredmény: a szelőmódszer gyorsabb, mint a lineáris eljárások ($\alpha=1$), de picit lassabb, mint a Newton-módszer ($\alpha=2$).



## 6. Gyorsítás többszörös gyökök esetén: A módosított Newton-módszer

Hogy többszörös gyökök esetén se veszítsük el a kvadratikus konvergenciát, $f(x)$ helyett bevezetünk egy módosított $\mu(x)$ függvényt:


$$\mu(x) = \frac{f(x)}{f'(x)}$$


Mivel $f$ többszörössége a deriválás során "leosztódik", a $p$ pont a $\mu(x)$ függvénynek **már csak egyszeres gyöke lesz** ($\mu'(p) = \frac{1}{m} \neq 0$).

Ha erre a $\mu(x)$ függvényre írjuk fel a Newton-módszert, újra **kvadratikus** konvergenciát kapunk. A kapott módosított rekurziós formula:


$$p_{k+1}=p_k-\frac{\mu(p_k)}{\mu'(p_k)}=p_k-\frac{f(p_k)f'(p_k)}{(f'(p_k))^2-f(p_k)f''(p_k)}$$


Ez az eljárás sikeresen felgyorsítja a konvergenciát többszörös gyökök keresése esetén is.