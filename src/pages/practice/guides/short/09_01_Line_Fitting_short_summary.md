**9.1. Egyenes illesztése** 

## 1. A görbeillesztés alap problémája és a négyzetes hiba

A mérnöki és tudományos gyakorlatban egy fizikai folyamatot gyakran egy olyan $g(x; \mathbf{a})$ függvénnyel írunk le, amelynek az általános matematikai formáját (pl. egyenes, parabola) ismerjük vagy feltételezzük, de a benne szereplő $\mathbf{a}$ paraméterek (együtthatók) ismeretlenek. Rendelkezésre állnak továbbá $(x_i, y_i)$ ($i = 0, 1, \ldots, n$) mérési adatpontok. A mérési pontatlanságok és zajok miatt a pontok nem esnek pontosan egy elméleti görbére, így a cél egy olyan optimális paramétervektor megtalálása, amely a „legkevésbé” tér el az adatoktól.

A jegyzet három lehetséges hibaformulát mutat be az eltérés mérésére:

1. **Maximális abszolút hiba ($F_1$):** $F_1(\mathbf{a}) := \max\{|g(x_i; \mathbf{a}) - y_i| \colon i = 0, 1, \ldots, n\}$.
2. **Abszolút hibák összege ($F_2$):** $F_2(\mathbf{a}) := \sum_{i=0}^{n} |g(x_i; \mathbf{a}) - y_i|$.
3. **Négyzetes hiba (Least squares error - $F$):** $F(\mathbf{a}) := \sum_{i=0}^{n} (g(x_i; \mathbf{a}) - y_i)^2$.

> **Miért a négyzetes hibát használjuk?** Bár az $F_1$ és $F_2$ kritériumok is természetesnek tűnnek, az abszolútérték-függvény miatt **matematikailag nem differenciálhatók**. Ezzel szemben a **négyzetes hiba ($F$) sima, folytonosan parciálisan differenciálható**, így a differenciálszámítás klasszikus eszközeivel (szélsőérték-kereséssel) könnyen minimalizálható. Ezt az eljárást nevezzük **legkisebb négyzetek módszerének**.



## 2. A Gauss-féle normálegyenletek levezetése egyenesre

A fejezet konkrétan az adatokra legjobban illeszkedő $g(x) = ax + b$ lineáris függvény (egyenes) paramétereinek ($a$ és $b$) meghatározását tárgyalja.

Keressük a következő kétváltozós hiba-függvény minimumhelyét:


$$F(a, b) := \sum_{i=0}^{n} (ax_i + b - y_i)^2 \tag{9.1}$$

A matematikai analízis szabályai szerint a minimumhelyen a parciális deriváltaknak nullának kell lenniük:


$$\begin{aligned}
\frac{\partial F}{\partial a}(a, b) &= 2\sum_{i=0}^{n} (ax_i + b - y_i)x_i = 0, \\
\frac{\partial F}{\partial b}(a, b) &= 2\sum_{i=0}^{n} (ax_i + b - y_i) = 0.
\end{aligned} \tag{9.2}$$

A szummák szétbontása és nullára rendezése után megkapjuk a kétismeretlenes lineáris egyenletrendszert, az úgynevezett **Gauss-féle normálegyenleteket**:

$$\begin{aligned} 
a\sum_{i=0}^{n} x_i^2 + b\sum_{i=0}^{n} x_i &= \sum_{i=0}^{n} x_i y_i, \\ 
a\sum_{i=0}^{n} x_i + b(n + 1) &= \sum_{i=0}^{n} y_i. 
\end{aligned} \tag{9.3}$$

*Megjegyzés:* A konstans $b$ együtthatója a második egyenletben azért $(n+1)$, mert a tagokat $0$-tól $n$-ig összegezzük, ami pontosan $n+1$ darab adatpontot jelent.



## 3. Unicitás és Egzisztencia Tétel (9.1. Tétel)

A Gauss-féle normálegyenletek felírása után kulcskérdés, hogy a kapott $2 \times 2$-es lineáris rendszernek mikor létezik egyértelmű megoldása.

> **9.1. Tétel:** Tegyük fel, hogy adottak az $(x_i, y_i)$ ($i = 0, 1, \ldots, n$) pontok, és az alappontok között **van legalább két különböző érték** (azaz létezik olyan $i$ és $j$, hogy $x_i \neq x_j$). Ekkor a (9.1) négyzetes hiba minimalizálási feladatnak **létezik pontosan egy (egyértelmű) megoldása**, amely megkapható a (9.3) normálegyenletek megoldásával.

### A bizonyítás háttere (Cramer-szabály)

A rendszer $\mathbf{D}$ determinánsa a következő alakú:


$$\mathbf{D} = (n+1)\sum_{i=0}^n x_i^2 - \left(\sum_{i=0}^n x_i\right)^2$$


A Cauchy–Bunyakovszkij–Schwarz-egyenlőtlenség értelmében ez a determináns mindig nagyobb vagy egyenlő, mint nulla. Pontosan akkor lenne nullával egyenlő (szinguláris), ha az összes $x_i$ alappont egyenlő lenne. Mivel a tétel feltételezi, hogy van legalább két különböző alappont, a determináns szigorúan pozitív ($\mathbf{D} > 0$), így a rendszer determinánsa nem nulla, a megoldás a Cramer-szabály alapján egyértelmű.



## 4. Gyakorlati számítás menetrendje (Mintapélda)

Kézi számolás vagy táblázatkezelő alkalmazása esetén a jegyzet egy rendkívül átlátható, strukturált megközelítést javasol az adatok kigyűjtésére. Vegyük a 9.2-es mintapélda adatait ($n=6$, azaz 7 pont):

| $x_i$ | $y_i$ | $x_i^2$ | $x_i y_i$ |
| --- | --- | --- | --- |
| -1.0 | 0.0 | 1.00 | 0.00 |
| 1.0 | 1.2 | 1.00 | 1.20 |
| 2.5 | 1.9 | 6.25 | 4.75 |
| 3.0 | 2.5 | 9.00 | 7.50 |
| 4.0 | 3.1 | 16.00 | 12.40 |
| 4.5 | 3.2 | 20.25 | 14.40 |
| 6.0 | 4.5 | 36.00 | 27.00 |
| **$\sum = 20.0$** | **$\sum = 16.4$** | **$\sum = 89.5$** | **$\sum = 67.25$** |

Az utolsó sorban kapott oszlopösszegeket közvetlenül behelyettesítjük a (9.3) Gauss-féle normálegyenlet-rendszerbe:


$$\begin{aligned} 89.5a + 20.0b &= 67.25 \\ 20.0a + 7b &= 16.4 \end{aligned}$$

Ennek a lineáris egyenletrendszernek a megoldása:


$$a = 0.630243 \qquad \text{és} \qquad b = 0.542163$$

A kapott **legjobban illeszkedő egyenes egyenlete** tehát:


$$y = 0.630243x + 0.542163$$



## 5. Összefoglaló mérnöki tanulság

A legkisebb négyzetek módszere egyenesre egy **közvetlen lineáris feladat**. Nem igényel iterációt vagy közelítő lépéseket: a mérési adatok oszlopösszegeiből felírt $2 \times 2$-es egyenletrendszer közvetlenül, egzakt módon megadja a globálisan optimális paramétereket, amennyiben az adatok nem egyetlen függőleges vonalon helyezkednek el.