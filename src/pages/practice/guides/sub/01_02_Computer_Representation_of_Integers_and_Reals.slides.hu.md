## 1.2. Valós számok tárolása

---

A $b$ alapú számrendszerben felírt

$$x = (x_{m-1}x_{m-2}\cdots x_0 . x_{-1}x_{-2}\cdots)_b, \qquad x_i \in \{0, 1, \ldots, b-1\},$$

valós szám értéke

$$x = x_{m-1}b^{m-1} + x_{m-2}b^{m-2} + \cdots + x_1 b + x_0 + \frac{x_{-1}}{b} + \frac{x_{-2}}{b^2} + \cdots = \sum_{i=-\infty}^{m-1} x_i b^i.$$

Tekintsük a 126.42 valós számot. Ennek normál alakján vagy az $1.2642 \cdot 10^2$ vagy pedig a $0.12642 \cdot 10^3$ alakot szokás érteni. Mi az első alakot fogjuk használni. Egy $x \neq 0$ valós szám $b$ alapra vonatkozó **normál alakja**

$$x = \pm m \cdot b^k, \qquad \text{ahol} \quad 1 \leq m < b.$$

$m$-et a szám **mantisszájának**, $k$-t pedig **kitevőjének** nevezzük.

---

Valós számok, más szóval **lebegőpontos számok** tárolásához a számot felírjuk (valamely $b$ alapot használva) normál alakban, és az előjeles mantisszát, valamint a kitevőt tároljuk. Különböző számítógépek eltérő alapot és bithosszúságot használnak egy valós szám tárolására. Mi most egy IEEE szabványt (IEEE Binary Floating Point Arithmetic Standard, 754-1985) ismertetünk valós számok 32 biten (ún. **egyszeres pontosságú**), ill. 64 biten történő (ún. **dupla pontosságú**) tárolására bináris alapot használva.

---

### Valós számok 32 biten történő tárolása:

Vegyük az $x \neq 0$ szám bináris normál alakját:

$$x = (-1)^s m \cdot 2^k, \qquad \text{ahol} \quad s \in \{0, 1\} \quad \text{és} \quad m = (1.m_1 m_2 m_3 \ldots)_2.$$

Az $s$ értékét az 1. biten tároljuk. A $k$ kitevő helyett annak eltolt értékét, az $e = k + 127$ nemnegatív számot a 2.–9. biteken tároljuk, a mantissza törtrészének első 23 bitre kerekített értékét pedig a 10–32. biten tároljuk. A nemnulla szám mantisszájának egész része bináris normál alakban mindig 1-gyel egyenlő, ezt az 1-est nem tároljuk!

```
 s   e = k + 127                          m
┌─┬───────────────┬──────────────────────────────────────────────┐
│×│× × × × × × × ×│m₁ m₂ m₃ m₄ m₅ m₆ ⋯ m₁₈ m₁₉ m₂₀ m₂₁ m₂₂ m₂₃│
└─┴───────────────┴──────────────────────────────────────────────┘
 1│2             9│10                                           32
 └1┘└─────8─────┘└──────────────────23──────────────────────┘
```

---

A fent említett IEEE szabvány külön definiálja a $0$ tárolását, és bevezet két speciális szimbólumot is, az `Inf` (infinity, azaz végtelen) és `NaN` (not-a-number, azaz nem szám) szimbólumokat:

| tárolandó szám | $s$ | $e$ (2.–9. bitek) | mantissza bitek (10.–32. bitek) |
|------|---|----------|------|
| +0   | 0 | 00000000 | minden mantissza bit=0 |
| −0   | 1 | 00000000 | minden mantissza bit=0 |
| +Inf | 0 | 11111111 | van 0 mantissza bit |
| −Inf | 1 | 11111111 | van 0 mantissza bit |
| +NaN | 0 | 11111111 | minden mantissza bit=1 |
| −NaN | 1 | 11111111 | minden mantissza bit=1 |

Az `Inf` szimbólumot a programok használhatják olyan matematikai művelet eredményének tárolására, amelynek értéke végtelen, a `NaN` szimbólumot pedig olyan művelet "eredményének" tárolására, amely nem definiált (pl. nullával való osztás eredménye vagy negatív szám négyzetgyöke valós számok körében).

---

A szabvány definíciójából következik, hogy az $e = (11111111)_2 = 255$, azaz a $k = 128$ kitevő az `Inf` és `NaN` speciális szimbólumoknak van fenntartva. A véges valós számok esetén

$$0 \leq e = k + 127 \leq 254,$$

így $k$ lehetséges értékei

$$-127 \leq k \leq 127.$$

A legkisebb pozitív valós szám tehát a

$$k = -127 \qquad \text{és} \qquad m = (1.00\ldots01)_2$$

értékekhez tartozik. Ennek értéke

$$x_{\min} = (1.00\ldots01)_2 \cdot 2^{-127} = (1 + 2^{-23})2^{-127} \approx 10^{-38}.$$

A legnagyobb (véges) valós szám pedig

$$x_{\max} = (1.11\ldots1)_2 \cdot 2^{127} = (2 - 2^{-23})2^{127} \approx 10^{38}.$$

---

**64 biten történő tárolás** hasonló:

Az $e = k + 1023$ eltolt kitevőt a 2.–12. biten, a mantissza törtrészét pedig a 13.–64. biten tároljuk.

```
 s   e = k + 1023                           m
┌─┬──────────────────┬──────────────────────────────────────────────┐
│×│× × × × × × × × × ×│m₁ m₂ m₃ m₄ m₅ m₆ ⋯ m₄₈ m₄₉ m₅₀ m₅₁ m₅₂│
└─┴──────────────────┴──────────────────────────────────────────────┘
 1│2                12│13                                          64
 └1┘└───────11──────┘└──────────────────52──────────────────────┘
```

Ekkor a tárolható pozitív számok tartománya körülbelül $10^{-308} - 10^{308}$ lesz.

---

> **Példa**
>
> Tegyük fel, hogy 4 biten szeretnénk valós számokat tárolni, bináris normál alak segítségével, úgy, hogy az 1. biten a szám előjelét, a 2. biten a bináris normál alak eltolt kitevőjét, $e = k + 1$-et, a 3.–4. biten pedig a mantissza tört részének első két bitjét tároljuk. (Az `Inf` és `NaN` szimbólumokat nem definiáljuk most.)
>
> | $s$ | $e$ | $m$ | $x$ |
> |---|---|----|------|
> | 0 | 0 | 00 | 0 |
> | 0 | 0 | 01 | $(1.01)_2 \cdot 2^{-1} = (1 + \frac{1}{4})\frac{1}{2} = \frac{5}{8}$ |
> | 0 | 0 | 10 | $(1.10)_2 \cdot 2^{-1} = (1 + \frac{1}{2})\frac{1}{2} = \frac{3}{4} = \frac{6}{8}$ |
> | 0 | 0 | 11 | $(1.11)_2 \cdot 2^{-1} = (1 + \frac{1}{2} + \frac{1}{4})\frac{1}{2} = \frac{7}{8}$ |
> | 0 | 1 | 00 | $(1.00)_2 \cdot 2^0 = 1 = \frac{8}{8}$ |
> | 0 | 1 | 01 | $(1.01)_2 \cdot 2^0 = 1 + \frac{1}{4} = \frac{10}{8}$ |
> | 0 | 1 | 10 | $(1.10)_2 \cdot 2^0 = 1 + \frac{1}{2} = \frac{12}{8}$ |
> | 0 | 1 | 11 | $(1.11)_2 \cdot 2^0 = 1 + \frac{1}{2} + \frac{1}{4} = \frac{7}{4} = \frac{14}{8}$ |

```
 ⊕─┼─┼─┼─┼─⊕─⊕─⊕─⊕─┼─⊕─┼─⊕─┼─⊕─┼─┼─⊕
 0           1/2       1        3/2       2
```

---

Azokat a számokat, amelyeket pontosan, azaz tárolási hiba nélkül tudunk tárolni, **gépi számoknak** nevezzük. Azt a gépi számot, amelyet egy adott $x$ valós szám helyett tárolunk a számítógépen, $\mathrm{fl}(x)$-szel jelöljük.

$$
\mathrm{fl}(x) = \begin{cases}
0, & |x| < x_{\min},\\
\mathtt{Inf}, & x > x_{\max},\\
-\mathtt{Inf}, & x < -x_{\max}.
\end{cases}
$$

Az első esetben **alácsordulásról**, a másodikban **túlcsordulásról** beszélünk. A többi esetben két alapvető megközelítés lehetséges. Az egyik esetben vesszük az $x$ szám bináris normál alakját, és annak mantisszájából annyi bitet tárolunk, amennyit az adott tárolási rendszerben tudunk, a többit elhagyjuk. Ezt a stratégiát **levágásnak** nevezzük.

---

A **kerekítés** esetében $\mathrm{fl}(x)$-et definiáljuk úgy, hogy legyen az $x$-hez legközelebbi gépi szám. A kerekítési szabályt az egyszeres pontosságú tárolásra fogalmazzuk meg. Legyen az $x > 0$ szám bináris normál alakja

$$x = m2^k, \qquad \text{ahol} \quad m = (1.m_1 m_2 \ldots m_{23}m_{24}\ldots)_2.$$

Legyen

$$x' = (1.m_1 m_2 \ldots m_{23})_2 2^k \qquad \text{és} \qquad x'' = \big((1.m_1 m_2 \ldots m_{23})_2 + 2^{-23}\big)2^k.$$

Ekkor $x'$ és $x''$ egymás utáni gépi számok, és

$$x' \leq x \leq x'', \qquad \text{valamint} \qquad x'' - x' = 2^{k-23}.$$

A szabvány szerint legyen

$$
\mathrm{fl}(x) = \begin{cases}
x', & \text{ha } |x - x'| < \frac{1}{2}|x'' - x'|,\\
x'', & \text{ha } |x - x''| < \frac{1}{2}|x'' - x'|,\\
x', & \text{ha } |x - x'| = \frac{1}{2}|x'' - x'| \text{ és } m_{23} = 0,\\
x'', & \text{ha } |x - x'| = \frac{1}{2}|x'' - x'| \text{ és } m_{23} = 1.
\end{cases}
$$

---

Kerekítést használva tehát az elkövetett hiba

$$|x - \mathrm{fl}(x)| \leq \frac{1}{2}|x'' - x'| = \frac{1}{2}2^{-23}2^k.$$

Vizsgáljuk most a kerekítési hibát a pontos értékhez viszonyítva:

$$\frac{|x - \mathrm{fl}(x)|}{|x|} \leq \frac{|x - \mathrm{fl}(x)|}{(1.m_1 m_2 \ldots)_2 \cdot 2^k} \leq \frac{1}{2}2^{-23}.$$

Könnyen látható, hogy az 1 gépi szám után következő első gépi szám $1 + 2^{-23}$ az előbb vizsgált 32 bites számábrázolási rendszerben. Jelölje $\varepsilon_{\mathrm{m}}$ az adott számábrázolási rendszerben az első 1-nél nagyobb gépi szám és 1 különbségét. Ezt a számot **gépi epszilonnak** nevezzük. Eszerint $\varepsilon_{\mathrm{m}}$ a legkisebb olyan 2 hatvány, amelyre a számítógépen az $1 + \varepsilon_{\mathrm{m}} > 1$ egyenlőtlenség ellenőrizhető.

> **Theorem**
>
> Legyen $0 < \mathrm{fl}(x) < \mathtt{Inf}$, és tegyük fel, hogy a valós számokat kerekítve tároljuk. Ekkor
>
> $$\frac{|x - \mathrm{fl}(x)|}{|x|} \leq \frac{1}{2}\varepsilon_m.$$

---

Legyen $x$ egy valós szám, és tekintsük az $\tilde{x}$ valós számot $x$ közelítésének. Ekkor a **közelítés hibáján** az

$$|x - \tilde{x}|$$

számot értjük.

> **Példa**
>
> Legyen $x = 10000$ és $\tilde{x} = 10000.1$. Ekkor a hiba $|x - \tilde{x}| = 0.1$. Legyen $y = 1$ és $\tilde{y} = 1.1$. Ekkor a hiba $|y - \tilde{y}| = 0.1$.

A **közelítés relatív hibáján** az

$$\frac{|x - \tilde{x}|}{|x|} \qquad (x \neq 0)$$

számot értjük.

> **Példa**
>
> Legyen $x = 10000$ és $\tilde{x} = 10000.1$. Ekkor a relatív hiba $|x - \tilde{x}|/x = 10^{-5}$. Legyen $y = 1$ és $\tilde{y} = 1.1$. A relatív hiba $|y - \tilde{y}|/y = 10^{-1}$.

---

Későbbi példáinkban gyakran fogunk hivatkozni az ún. **négyjegyű aritmetikára**. Ez azt jelenti, hogy minden egyes részletszámolás eredményét az első nem nulla számjegytől számított 4 jegyre, azaz az első 4 **értékes számjegyre** kerekítjük, és ezt használjuk tovább a számolás során.

> **Példa**
>
> Négyjegyű aritmetikát használva
>
> $$1.043 + 32.25 = 33.29,$$
>
> (a pontos érték 33.293) és hasonlóan
>
> $$1.043 \cdot 32.25 = 33.64$$
>
> (a pontos érték 33.63675 kerekítése után). Viszont
>
> $$1.043 + 20340 = 20340$$
>
> lesz, mivel négy értékes számjegyre kell kerekítenünk a 20341.043 pontos értéket.

---
