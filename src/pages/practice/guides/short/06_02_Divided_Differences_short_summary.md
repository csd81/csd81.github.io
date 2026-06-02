**6.2. Osztott differenciák**



## 1. Az osztott differenciák motivációja és fogalma

Bár a korábbi (6.1.) fejezetben megismert Lagrange-interpoláció elméletileg tiszta képletet ad az adatpontok összekötésére, komoly gyakorlati hátránya van: ha újabb mérési pontokat kapunk, a teljes alappolinom-rendszert az alapoktól újra kell számolni.

Ezt a problémát küszöböli ki az **osztott differenciák** elmélete, amely egy olyan rekurzív (egymásra épülő) struktúrát hoz létre, amellyel az interpolációs polinom együtthatói lépésről lépésre, táblázatos formában könnyen meghatározhatók és új pontok hozzáadásakor rugalmasan bővíthetők.



## 2. Rekurzív Definíció (6.2. fejezet)

Legyen adott egy $f \colon [a,b] \to \mathbb{R}$ függvény és $x_0, x_1, \ldots, x_n \in [a,b]$ páronként különböző alappontok. Az osztott differenciákat a pontok száma (rendje) szerint rekurzívan definiáljuk:

* **Nulladrendű osztott differencia:** Egyetlen pontra vonatkozik, és megegyezik a pontbeli függvényértékkel:

$$f[x_0] := f(x_0)$$


* **Elsőrendű osztott differencia:** Két pontra vonatkozik, és megadja a pontokhoz tartozó klasszikus differenciahányadost (meredekséget):

$$f[x_0, x_1] := \frac{f[x_1] - f[x_0]}{x_1 - x_0} = \frac{f(x_1) - f(x_0)}{x_1 - x_0} \tag{6.6}$$


* **Általános $n$-edrendű osztott differencia:** Az eggyel alacsonyabb rendű (már kiszámított) osztott differenciák különbségéből kapható meg, elosztva a szélcsoportok alappontjainak távolságával:

$$f[x_0, x_1, \ldots, x_n] := \frac{f[x_1, x_2, \ldots, x_n] - f[x_0, x_1, \ldots, x_{n-1}]}{x_n - x_0} \tag{6.7}$$



*Megjegyzés:* Fontos látni, hogy az osztott differencia képzésekor a számlálóban az első tagból elhagyjuk az első pontot ($x_0$), a második tagból pedig az utolsó pontot ($x_n$).



## 3. Explicit Képlet (6.10. Tétel)

Bár az osztott differenciákat rekurzívan számoljuk, létezik egy nem-rekurzív, explicit alakjuk is, amely közvetlenül megmutatja a kapcsolatot a függvényértékekkel:

> **6.10. Tétel:** Ha $x_0, x_1, \ldots, x_n$ páronként különböző alappontok, akkor az $n$-edrendű osztott differencia felírható az alábbi explicit összegként:
> 
> $$f[x_0, x_1, \ldots, x_n] = \sum_{i=0}^{n} \frac{f(x_i)}{(x_i - x_0) \cdots (x_i - x_{i-1})(x_i - x_{i+1}) \cdots (x_i - x_n)} \tag{6.8}$$
> 
> 

### Fontos algebrai tulajdonságok:

1. **Szimmetria:** A (6.8) explicit képletből közvetlenül látszik, hogy az osztott differencia értéke **teljesen független az alappontok sorrendjétől**. Ha felcseréljük a pontok indexét (pl. $f[x_0, x_1, x_2]$ helyett $f[x_2, x_0, x_1]$), a végeredmény pontosan ugyanaz a szám marad.
2. **Folytonosság:** Ha az $f$ függvény folytonos, akkor az osztott differenciák is folytonosan függnek az alappontoktól.



## 4. Kiterjesztés egyenlő alappontokra (Derivált kapcsolat)

A fenti definíciók feltételezték, hogy az alappontok különbözőek, hiszen ellenkező esetben a (6.6) vagy (6.7) képletek nevezőjében nullával való osztás keletkezne. Mi történik azonban, ha a pontok torlódnak (egyenlővé válnak)?

Feltételezve, hogy $f$ differenciálható, vegyük a határértéket, amikor az $x_1$ pont tart az $x_0$-hoz:


$$\lim_{x_1 \to x_0} f[x_0, x_1] = \lim_{x_1 \to x_0} \frac{f(x_1) - f(x_0)}{x_1 - x_0} = f'(x_0)$$

> **Definíció (Egyenlő alappontok):** Ha az alappontok megegyeznek, az osztott differenciákat a függvény **deriváltjaiként** értelmezzük:
> 
> $$f[x_0, x_0] := f'(x_0)$$
> 
> 
> 
> Általánosságban pedig belátható, hogy ha $k+1$ darab alappont válik egyenlővé, az a $k$-adik deriválthoz vezet:
> 
> $$f[\underbrace{x_0, x_0, \ldots, x_0}_{k+1 \text{ darab}}] = \frac{f^{(k)}(x_0)}{k!}$$
> 
> 

Ez a kiterjesztés elméleti alapot biztosít a függvények érintési (Hermite) interpolációjához is, ahol nemcsak a pontokat, hanem a pontbeli deriváltakat (irányokat) is pontosan akarjuk illeszteni.



## 5. Az Osztott Differenciák Táblázata (Gyakorlati számítás)

A gyakorlatban az osztott differenciákat egy piramis (vagy háromszög) alakú elrendezésben, az ún. **osztott differenciák táblázatában** számítjuk ki, ahol a magasabb rendű oszlopok elemei a tőlük balra elhelyezkedő két elem különbségéből származnak:

$$\begin{array}{l|l|lll}
x_i & f[x_i] & \text{1. rend} & \text{2. rend} & \text{3. rend} \\
\hline
x_0 & f(x_0) & & & \\
& & f[x_0, x_1] & & \\
x_1 & f(x_1) & & f[x_0, x_1, x_2] & \\
& & f[x_1, x_2] & & f[x_0, x_1, x_2, x_3] \\
x_2 & f(x_2) & & f[x_1, x_2, x_3] & \\
& & f[x_2, x_3] & & \\
x_3 & f(x_3) & & & \\
\end{array}$$

### Gyakorlati haszon (Átvezetés a Newton-formához):

Ennek a sémának a felépítése után a táblázat **legfelső átlójában (sorában)** szereplő számok ($f(x_0), f[x_0, x_1], f[x_0, x_1, x_2], \ldots$) fogják közvetlenül megadni a Newton-féle interpolációs polinom együtthatóit, ami a következő (6.3.) fejezet központi témája lesz.