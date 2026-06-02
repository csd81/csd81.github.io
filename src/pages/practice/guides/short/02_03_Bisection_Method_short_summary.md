**2.3. Intervallumfelezés módszere** (Bisection Method) 

## 1. A módszer célja és alapelve

Az intervallumfelezés az egyik legegyszerűbb és legrobusztusabb algoritmus az $f(x)=0$ alakú nemlineáris egyenletek numerikus megoldására.

A módszer alapja a **Bolzano–Darboux-tétel** (közbülsőérték-tétel), amely kimondja:

> Ha az $f$ függvény folytonos egy zárt $[a,b]$ intervallumon ($f \in C[a,b]$), és az intervallum végpontjaiban az előjelei ellentétesek (azaz $f(a)f(b) < 0$), akkor a függvénynek legalább egy gyöke van az $[a,b]$ intervallum belsejében.



## 2. Az algoritmus működése (Rekurzió)

A módszer lépésről lépésre felezi meg azt az intervallumot, amelyben a gyök található:

1. **Kezdet:** Kijelöljük a kezdőintervallumot: $[a_0, b_0] = [a, b]$.
2. **Felezés:** Kiszámítjuk az intervallum középpontját (felezőpontját): $p_0 = \frac{a_0 + b_0}{2}$.
3. **Vizsgálat:** * Ha $f(p_0) = 0$, akkor megtaláltuk a pontos gyököt, az algoritmus leáll.
* Ha $f(p_0) \neq 0$, akkor megnézzük, melyik részintervallum végpontjaiban ellentétes a függvény előjele.


4. **Szűkítés:** Ha az $[a_0, p_0]$ intervallumon van előjelváltás, akkor a következő lépésben ez lesz az új intervallum ($[a_1, b_1] = [a_0, p_0]$); ellenkező esetben a jobb oldali fél lesz az új intervallum ($[a_1, b_1] = [p_0, b_0]$).

Ezt az eljárást ismételve egymásba skatulyázott zárt intervallumok sorozatát kapjuk, amelyek mindegyike tartalmazza a gyököt. Mivel az intervallumok hossza minden lépésben feleződik ($\frac{b-a}{2^k}$), a hosszuk tart a nullához, így a végpontok és a $p_k$ felezőpontok sorozata is a valódi $p$ gyökhöz konvergál.



## 3. Hibabecslés és a szükséges lépésszám (2.16. Tétel)

A módszer egyik legnagyobb előnye, hogy a hibája előre, a függvény ismerete nélkül is pontosan becsülhető.

* **Hibakorlát formula:** A $k$-adik lépésben kapott $p_k$ közelítés távolsága a valódi $p$ gyöktől legfeljebb az aktuális intervallum hosszának a fele lehet:

$$|p_k - p| \leq \frac{b - a}{2^{k+1}}$$


* **Szükséges lépésszám:** Ha egy előre megadott $\varepsilon > 0$ hibakorlátot (toleranciát) szeretnénk elérni, a szükséges iterációk $k$ száma kiszámítható a következő logaritmikus összefüggéssel:

$$k \geq \log_2 \left(\frac{b - a}{\varepsilon}\right) - 1$$





## 4. Fontos megjegyzések és korlátok

* **Monotonitás:** Ha a függvény szigorúan monoton az adott intervallumon (mint a mintapéldában szereplő $f(x)=e^x-2\cos x$), akkor az intervallumban **pontosan egy** gyök található.
* **A folytonosság kötelező feltétele:** A módszer működésének kritikus feltétele az $f$ függvény folytonossága. Ha a függvény nem folytonos az intervallumon (például szakadása van az $x=0$ pontban, mint az $f(x)=\frac{1}{x}$ függvénynek), az algoritmus hibásan egy szakadási helyre fog rákonvergálni a valódi gyök helyett.