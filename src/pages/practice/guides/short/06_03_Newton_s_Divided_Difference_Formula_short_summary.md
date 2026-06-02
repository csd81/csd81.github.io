**6.3. A Lagrange-féle interpolációs polinom Newton-féle alakja** 



## 1. Motiváció: Miért van szükség a Newton-alakra?

A 6.1. fejezetben bemutatott klasszikus **Lagrange-képletnek** van egy nagyon kellemetlen gyakorlati hátránya: ha a meglévő $x_0, \ldots, x_n$ alappontjaink mellé egy **újabb mérési pontot veszünk fel**, a korábbi számítások teljesen hasznavehetetlenné válnak. Az összes Lagrange-alappolinom fokszáma megváltozik, így az egész kifejezést az alapoktól újra kell számolni.

A **Newton-féle alak** zsenialitása, hogy kiküszöböli ezt a hiányosságot: úgy építi fel a polinomot, hogy egy új pont hozzáadásakor a korábban kiszámított tagok változatlanok maradnak, és **csupán egyetlen új korrekciós tagot kell hozzáadni** a kifejezés végéhez.



## 2. Matematikai levezetés és az együtthatók azonosítása

Tegyük fel, hogy az $f$ függvényt interpoláljuk az $x_0, x_1, \ldots, x_n$ pontokban ($y_i = f(x_i)$). Bontsuk fel az $n$-edfokú $L_n(x)$ polinomot az eggyel alacsonyabb fokú polinomok különbségeinek teleszkopikus összegeként:


$$L_n(x) = L_0(x) + (L_1(x) - L_0(x)) + (L_2(x) - L_1(x)) + \cdots + (L_n(x) - L_{n-1}(x))$$

Az algebra alaptétele és az interpolációs kényszerek miatt belátható, hogy a szomszédos polinomok különbsége gyöktényezős alakba írható:


$$L_i(x) - L_{i-1}(x) = a_i(x - x_0)(x - x_1) \cdots (x - x_{i-1})$$

Ha ezeket a tagokat visszahelyettesítjük, megkapjuk a **Newton-féle interpolációs polinom általános szerkezetét**:


$$L_n(x) = a_0 + a_1(x - x_0) + a_2(x - x_0)(x - x_1) + \cdots + a_n(x - x_0)\cdots(x - x_{n-1}) \tag{6.11}$$

### Kapcsolat az osztott differenciákkal (6.13. Tétel)

A jegyzet legfontosabb elméleti lépése annak bizonyítása, hogy a Newton-alakban szereplő ismeretlen $a_i$ együtthatók **pontosan memegegyeznek a 6.2. fejezetben megismert rekurzív osztott differenciákkal**:


$$a_0 = f[x_0], \quad a_1 = f[x_0, x_1], \quad a_2 = f[x_0, x_1, x_2], \quad \ldots \quad a_n = f[x_0, x_1, \ldots, x_n]$$

A végleges **Newton-féle osztott differenciás interpolációs formula** tehát:


$$\mathbf{L_n(x) = f[x_0] + \sum_{i=1}^{n} f[x_0, x_1, \ldots, x_i] \prod_{j=0}^{i-1} (x - x_j)} \tag{6.12}$$



## 3. Gyakorlati számítás: Példa a táblázat alapján

A polinom felírásához először el kell készíteni a 6.2. fejezetből ismert piramis alakú **osztott differenciák táblázatát**. Tekintsük a jegyzetben szereplő 4 adatpontos ($n=3$) mintapéldát:

| $x_i$ | $f[x_i]$ (0. rend) | 1. rend | 2. rend | 3. rend |
| --- | --- | --- | --- | --- |
| **-1** | **-2** |  |  |  |
| 1 | 0 | **1** |  |  |
| 2 | -2 | -2 | **-1** |  |
| 3 | 2 | 4 | 3 | **1** |

### A polinom felírása a felső átló alapján:

A (6.12) képlet értelmében a Newton-polinom együtthatói szigorúan a táblázat **legfelső átlójában (sorában)** szereplő számok lesznek (a táblázatban vastagítással jelölve): **-2, 1, -1, 1**.

A gyöktényezőket fokozatosan hozzászorozva kapjuk meg a Newton-alakot:


$$L_3(x) = \mathbf{-2} + \mathbf{1} \cdot (x - (-1)) + (\mathbf{-1}) \cdot (x - (-1))(x - 1) + \mathbf{1} \cdot (x - (-1))(x - 1)(x - 2)$$

$$L_3(x) = -2 + (x + 1) - (x + 1)(x - 1) + (x + 1)(x - 1)(x - 2)$$

A zárójelek felbontása és az algebrai egyszerűsítés után a standard kanonikus alak:


$$L_3(x) = x^3 - 3x^2 + 2$$



## 4. Az interpoláció hibaformulája osztott differenciával

A 6.1. fejezetben láttuk, hogy az interpoláció $E_n(x)$ képlethibáját a magasabb rendű deriváltak segítségével becsülhetjük meg. A Newton-alak levezetésének folyományaként a hiba egy alternatív, deriváltak nélküli, tisztán osztott differenciás alakban is felírható:

> **6.14. Tétel:** Ha $L_n(x)$ az $f$ függvény $x_0, \ldots, x_n$ alappontokhoz tartozó interpolációs polinomja, akkor a teljes $f(x)$ függvény felírható a polinom és az osztott differenciás maradéktag összegeként:
> 
> $$f(x) = L_n(x) + f[x_0, x_1, \ldots, x_n, x] \cdot \omega_n(x) \tag{6.14}$$
> 
> 
> 
> Ahol az $\omega_n(x) := (x-x_0)(x-x_1)\cdots(x-x_n)$ a node-polinom, és a hibatényező egy olyan $(n+1)$-edrendű osztott differencia, amely az $x$ változót is tartalmazza.

### Súlyos elméleti következmény (6.16. Következmény)

Ha összevetjük a Lagrange-féle deriváltas hibaformulát a fenti (6.14) Newton-féle alakkal, a kettő egyenlőségéből közvetlen matematikai bizonyítást kapunk az **osztott differenciák és a deriváltak kapcsolatára**:


$$f[x_0, x_1, \ldots, x_n, x] \cdot \omega_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!} \cdot \omega_n(x) \implies f[x_0, x_1, \ldots, x_n] = \frac{f^{(n)}(\xi)}{n!} \tag{6.16}$$

Ez az összefüggés igazolja, hogy az $n$-edrendű osztott differencia lényegében a függvény $n$-edik deriváltjának a diszkrét, skálázott megfelelője az adott intervallumon.



## 5. Összegzés: A Newton-alak gyakorlati előnyei

1. **Inkrementális bővíthetőség:** Ha kapunk egy új $x_{n+1}$ pontot, a korábbi táblázat aljára egyszerűen beírunk egy új sort, kiszámoljuk az átlós új osztott differenciát ($f[x_0, \ldots, x_{n+1}]$), és ezt egyetlen új tagként hozzáfűzzük a meglévő $L_n(x)$ polinomunkhoz.
2. **Algoritmikus hatékonyság:** A Newton-alak kiértékelése számítógépen rendkívül gyorsan és kis kerekítési hibával elvégezhető a jól ismert **Horner-elrendezés (Horner-séma)** alkalmazásával.