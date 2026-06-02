**8.6. Szélsőértékszámítás – Newton-módszer** 



## 1. Motiváció és elméleti alapötlet

* **A probléma a gradiens-módszerrel:** Bár az előző (8.4.) fejezetben tárgyalt gradiens-módszer megbízhatóan lép a csökkenés irányába, elnyújtott felületeken (meredek völgyekben) hajlamos a végtelen, lassú, cikcakkos oszcillációra. Ennek oka, hogy a felület görbületét (második deriváltját) teljesen figyelmen kívül hagyja.
* **A Newton-módszer elve:** Ahelyett, hogy lineáris érintőegyenesekkel vagy síkokkal közelítenénk, a Newton-módszer minden lépésben egy **másodfokú Taylor-polinommal (kvadratikus felülettel) közelíti a függvényt** az aktuális pont körül. Mivel egy paraboloidnak (vagy kvadratikus alaknak) a minimumhelye egyetlen közvetlen képlettel meghatározható, az algoritmus az így kiszámított elméleti minimumhelyre ugrik a következő iterációban.



## 2. Matematikai levezetés és a rekurzió alakja

Legyen $f\colon \mathbb{R}^n \to \mathbb{R}$ egy háromszor folytonosan differenciálható függvény ($f \in C^3$). Írjuk fel az $f$ függvény másodfokú Taylor-polinomját ($g(\mathbf{x})$) egy rögzített $\mathbf{p}^{(0)}$ kezdőpont környezetében:

$$g(\mathbf{x}) := f(\mathbf{p}^{(0)}) + f'(\mathbf{p}^{(0)})^T(\mathbf{x} - \mathbf{p}^{(0)}) + \frac{1}{2}(\mathbf{x} - \mathbf{p}^{(0)})^T f''(\mathbf{p}^{(0)})(\mathbf{x} - \mathbf{p}^{(0)}) \tag{8.14}$$

Ahol:

* $f'(\mathbf{p}^{(0)})$ a függvény **gradiensvektora** $\mathbf{p}^{(0)}$ -ban,
* $f''(\mathbf{p}^{(0)})$ a függvény **Hesse-mátrixa** $\mathbf{p}^{(0)}$ -ban.

Tegyük fel, hogy az $f''(\mathbf{p}^{(0)})$ Hesse-mátrix szigorúan **pozitív definit**. Ekkor a 8.5. fejezet tételéből adódóan a $g(\mathbf{x})$ kvadratikus függvénynek létezik egyértelmű globális minimuma, amelyet ott vesz fel, ahol a gradiense nullává válik:


$$\nabla g(\mathbf{x}) = \mathbf{0} \implies f'(\mathbf{p}^{(0)}) + f''(\mathbf{p}^{(0)})(\mathbf{x} - \mathbf{p}^{(0)}) = \mathbf{0}$$

Ezt az egyenletet $\mathbf{x}$-re rendezve megkapjuk a minimumhelyet, amelyet a keresett függvény új, finomított $\mathbf{p}^{(1)}$ közelítésének tekintünk. Az eljárást iteratívan ismételve megkapjuk a **többváltozós Newton-módszer általános rekurziós képletét**:

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \big(f''(\mathbf{p}^{(k)})\big)^{-1} f'(\mathbf{p}^{(k)}), \qquad k = 0, 1, 2, \ldots \tag{8.15}$$



## 3. Kapcsolat a nemlineáris egyenletrendszerekkel

A jegyzet rámutat egy fontos ekvivalenciára: a függvény minimumhelyének keresése ($\min f(\mathbf{x})$) lényegében megegyezik a $\nabla f(\mathbf{x}) = \mathbf{0}$ többváltozós nemlineáris egyenletrendszer gyökeinek megkeresésével.
Ha a parciális deriváltakból álló rendszerre felírjuk a klasszikus, egyenletrendszerekre vonatkozó Newton-módszert (ahol a Jacobi-mátrix pontosan a függvény másodrendű deriváltjaiból álló Hesse-mátrix lesz), akkor **pontosan a (8.15) optimalizációs formulát kapjuk vissza**.



## 4. Konvergenciatétel (Kvadratikus sebesség)

A fejezet legfontosabb elméleti eredménye garantálja a módszer rendkívüli gyorsaságát:

> **Tétel:** Legyen $f\colon \mathbb{R}^n \to \mathbb{R}$ háromszor folytonosan differenciálható ($f \in C^3$). Tegyük fel, hogy a $\mathbf{p}$ pont egy stacionárius pont ($f'(\mathbf{p}) = \mathbf{0}$), és a hozzá tartozó $f''(\mathbf{p})$ Hesse-mátrix pozitív definit (azaz $\mathbf{p}$ egy valódi szigorú lokális minimumhely). Ekkor a (8.15) szabály szerinti Newton-sorozat a minimumhely egy alkalmas környezetéből indítva **lokálisan kvadratikusan (másodrendben) konvergál** $\mathbf{p}$ -hez.

### Mit jelent a kvadratikus konvergencia?

A hiba csökkenése lépésenként kvadratikus ($e_{k+1} \leq C \cdot e_k^2$). Gyakorlati szempontból ez azt jelenti, hogy a pontos tizedesjegyek száma **minden egyes lépésben durván megduplázódik**, így az algoritmus rendkívül kevés lépésből képes elérni a gépi pontosság határát.



## 5. Számszerű Mintapélda: A Rosenbrock-völgy tesztelése

A jegyzet az $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ nemlineáris kétváltozós függvényen mutatja be a működést, a távoli $(-1, 4)^T$ kezdőpontból indítva. A pontos minimumhely az $(1, 0.5)^T$ pontban van.

Az iterációs lépések látványos konvergenciát mutatnak:

* **0. lépés:** Távolság a céltól: $3.905$.
* **1. lépés:** A hiba azonnal lecsökken $1.884$-re.
* **2. lépés:** A hiba már csak $0.781$.
* **3. lépés:** Radikális zuhanás: a hiba $0.211$.
* **4. lépés:** A kvadratikus hatás érvényesül: a távolság $0.024$-re zsugorodik.
* **5. lépés:** Az algoritmus gyakorlatilag telibe találja a célpontot: a hiba elenyésző, mindössze **$0.00032$**.

*Érdekesség a jegyzetből:* Ha a keresést az $(1, 3)^T$ pontból indítjuk, mivel ott a felület görbülete tökéletesen megegyezik a függvény lokális alakjával, a Newton-módszer **egyetlen lépésben** megadja a pontos elméleti minimumot.



## 6. A Newton-módszer előnyei és komoly hátrányai

### Előnyök:

1. Rendkívül gyors, kvadratikus konvergencia a minimumhely közelében.
2. Teljesen kiküszöböli a gradiens-módszernél tapasztalható lassú, cikcakkos völgy-oszcilációt, mivel a felület görbületét kihasználva közvetlenül a völgy tengelye mentén lép.

### Hátrányok:

1. **Lépésenkénti magas számítási igény:** Minden egyes iterációban ki kell számítani az összes másodrendű parciális deriváltat (a teljes Hesse-mátrixot), és meg kell oldani egy hozzá tartozó lineáris egyenletrendszert (vagy invertálni kell a mátrixot), ami $O(n^3)$ műveleti költséget jelent.
2. **Lokális jelleg és instabilitás:** Ha a kezdőpont túl messze van a minimumhelytől, vagy a Hesse-mátrix elveszíti a pozitív definitségét (pl. inflexiós pontok vagy lokális maximumok közelében), a Newton-módszer könnyen instabillá válhat, rossz irányba léphet, vagy teljesen elszállhat a végtelenbe.

> **Gyakorlati kontextus:** Ezen hátrányok miatt a modern optimalizációs szoftverekben a tiszta Newton-módszer helyett gyakran az úgynevezett **Kvázi-Newton módszereket** (például a Broyden–Fletcher–Goldfarb–Shanno, azaz a *BFGS* algoritmust) használják, amelyek megőrzik a Newton-módszer gyorsaságát, de a Hesse-mátrixot csak közelítik az egymást követő gradiensvektorok változásaiból, elkerülve a drága közvetlen másodrendű deriválást és mátrixinvertálást.