**2.6. Szelőmódszer** (*Secant Method*) 

## 1. A módszer motivációja és alapötlete

* **A probléma a Newton-módszerrel:** Bár a Newton-módszer kvadratikusan konvergál, megköveteli az $f'(x)$ analitikus képletének ismeretét és minden lépésben a kiértékelését. Ez sokszor nem áll rendelkezésre (pl. ha a függvényértéket egy külön feketedoboz-szerű numerikus eljárás szolgáltatja), vagy a derivált számítása túl sok gépi műveletet igényel.
* **A szelőmódszer megoldása:** A derivált pontos kiszámítása helyett a módszer az $f'$ értéket a függvény utolsó két ismert pontjára felírt **különbségi hányadossal** közelíti:

$$f'(p_k) \approx \frac{f(p_k) - f(p_{k-1})}{p_k - p_{k-1}}$$


* **Geometriai interpretáció:** Érintőegyenes helyett a grafikon két pontján, a $(p_{k-1}, f(p_{k-1}))$ és $(p_k, f(p_k))$ koordinátákon átmenő **szelőegyenest** veszünk. Az új $p_{k+1}$ közelítés ennek a szelőnek és az $x$-tengelynek a metszéspontja lesz.

A szelőegyenes egyenletéből adódik a szelőmódszer **kétlépéses rekurziós formulája** (melyhez így két kezdeti érték, $p_0$ és $p_1$ rögzítése szükséges):


$$p_{k+1} = p_k - \frac{p_k - p_{k-1}}{f(p_k) - f(p_{k-1})} f(p_k)$$

> **Fontos különbség:** Míg a Newton-módszer egylépéses (fixpont) iteráció, addig a szelőmódszer egy **kétlépéses iteráció**, mert az új tag kiszámításához az előző két tag ismerete szükséges.



## 2. Lokális konvergencia és a Fibonacci-sorozat (2.27. Tétel)

* **Tétel:** Legyen $f \in C^2[a,b]$, a keresett gyök $p \in (a,b)$, ahol $f(p)=0$ és $f'(p) \neq 0$. Ekkor a szelőmódszer **lokálisan konvergál** $p$-hez (azaz a gyök egy elég kis környezetéből választott $p_0, p_1$ esetén a sorozat biztosan a gyökhöz tart).

### A konvergenciasebesség levezetése

A bizonyítás hátterében egy nagyon szép matematikai kapcsolat áll a hiba és a **Fibonacci-sorozat** között:

1. A Taylor-tételből és a Lagrange-féle középértéktételből (valamint a másodrendű osztott differenciákból) levezethető a hibatag rekurziója:

$$p_{k+1} - p = \frac{1}{2}\frac{f''(\xi_k)}{f'(\eta_k)}(p_k - p)(p_{k-1} - p)$$


2. Ebből adódik, hogy a hibára felírható egy $M|p_{k+1}-p| \le M|p_k-p|M|p_{k-1}-p|$ becslés.
3. Ha a hibát egy $\varepsilon^{q_k}$ alakú sorozattal becsüljük (ahol $0 < \varepsilon < 1$), akkor a kitevőkre a következő rekurzió adódik:

$$q_{k+1} = q_k + q_{k-1}, \quad q_0=1, \quad q_1=1$$



Ez pontosan a Fibonacci-sorozat.
4. A Fibonacci-sorozat általános tagjának explicit képletéből (Binet-formula) látszik, hogy a növekedési ütemét az aranymetszés száma határozza meg:

$$r_0 = \frac{1+\sqrt{5}}{2} \approx 1.618$$



Mivel $q_k \to \infty$, a hibatag nullához tart. A szelőmódszer konvergenciájának rendje (sebessége) tehát **szuprolineáris: $1.618$**.



## 3. Gyakorlati összehasonlítás (2.25. Példa)

A jegyzet az $e^x - 2\cos x = 0$ egyenleten teszteli a szelőmódszert $TOL = 10^{-5}$ mellett, $p_0=0$ és $p_1=1$ pontokból indítva:

* **Eredmény:** A szelőmódszernek **7 lépésre** volt szüksége a megállási feltétel eléréséhez, és a függvényérték a végén $10^{-11}$ nagyságrendű lett.
* **Kontextus a többi módszerrel:**
* **Newton-módszer:** Gyorsabb (5 lépés alatt $10^{-14}$ pontosság), mert a pontos deriváltat használja, nem pedig annak egy különbségi közelítését.
* **Intervallumfelezés / Regula Falsi:** A szelőmódszer ezeknél lényegesen gyorsabb, mert figyelembe veszi a függvény alakját és nem korlátozza be az új pontot az aktuális intervallum végpontjai közé.





## 4. Összegzés: Mikor éri meg használni?

A szelőmódszer egy kiváló **kompromisszumos megoldás**. Nem igényel deriválást (szemben a Newton-módszerrel), de megőrzi annak majdnem kvadratikus, rendkívül gyors konvergenciáját (rendje: $1.618$). Ha a derivált képlete túl bonyolult vagy nem előállítható, a gyakorlatban a szelőmódszer az egyik legnépszerűbb választás nemlineáris egyenletek megoldására.