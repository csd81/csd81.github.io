**1.3. Hibaanalízis**



## 1. Alapfogalmak és jelölések

A fejezet azt a gyakorlati problémát vizsgálja, amikor két pontos pozitív valós számon ($x$ és $y$) egy alapvető aritmetikai műveletet kell elvégezni, de a számítógép memóriájában csak azok közelítő értékei ($\tilde{x}$ és $\tilde{y}$) állnak rendelkezésre. A cél meghatározni, hogy a kiindulási adatok hibái hogyan terjednek át a művelet (összeadás, kivonás, szorzás, osztás) végeredményére.

A számításokhoz az alábbi hibakorlátokat vezetjük be:

* **Abszolút hibakorlátok ($\Delta_x, \Delta_y$):** Olyan pozitív számok, amelyekre teljesül, hogy $|x - \tilde{x}| \leq \Delta_x$ és $|y - \tilde{y}| \leq \Delta_y$.
* **Relatív hibakorlátok ($\delta_x, \delta_y$):** Az abszolút hibakorlát és a pontos érték hányadosai, azaz $\delta_x = \frac{\Delta_x}{x}$ és $\delta_y = \frac{\Delta_y}{y}$.



## 2. Az alapműveletek hibaanalízise

### A) Összeadás (Addition)

* **Abszolút hibakorlát:** Az összeadás abszolút hibája a tagok abszolút hibáinak **összege**:

$$\Delta_{x+y} = \Delta_x + \Delta_y$$


* **Relatív hibakorlát:** Az összeadás relatív hibakorlátja nem lépheti túl a tagok relatív hibáinak **maximumát**:

$$\delta_{x+y} = \max\{\delta_x, \delta_y\}$$



### B) Kivonás (Subtraction)

* **Abszolút hibakorlát:** A kivonás abszolút hibája – az összeadáshoz hasonlóan – a tagok abszolút hibáinak **összege** (a hibák nem oltják ki egymást):

$$\Delta_{x-y} = \Delta_x + \Delta_y$$


* **Relatív hibakorlát (A kritikus pont):** A kivonás relatív hibakorlátja a következő egyenlőtlenséggel becsülhető:

$$\delta_{x-y} \leq \frac{x\delta_x + y\delta_y}{|x - y|}$$



> **A kivonás csapdája (Kiejtési hiba / Jegyvesztés):** Ha $x$ és $y$ értelme nagyon közel van egymáshoz ($x \approx y$), akkor a nevezőben lévő $|x - y|$ kifejezés közel lesz a nullához. Egy nullához közeli számmal való osztás miatt a relatív hiba **hatalmasra ugorhat**, teljesen megsemmisítve a számítás pontosságát.

### C) Szorzás (Multiplication)

* **Abszolút hibakorlát:** A szorzás eredményének abszolút hibája függ a tényezők nagyságától is:

$$\Delta_{xy} = y\Delta_x + x\Delta_y + \Delta_x\Delta_y$$



Mivel a gyakorlatban a hibák kicsik ($\Delta_x\Delta_y \approx 0$), a szorzat-tag elhanyagolható, így a linearizált abszolút hibabecslés: $\Delta_{xy} \approx y\Delta_x + x\Delta_y$.
* **Relatív hibakorlát:** Ha a kezdeti hibák kicsik, a szorzat relatív hibája jól közelíthető a tényezők relatív hibáinak **összegével**:

$$\delta_{xy} \approx \delta_x + \delta_y$$



### D) Osztás (Division)

* **Abszolút hibakorlát:** Az osztás abszolút hibakorlátja (feltételezve, hogy a nevező relatív hibája kicsi, $\delta_y < 1$):

$$\Delta_{x/y} = \frac{y\Delta_x + x\Delta_y}{y(y - \Delta_y)}$$



Ha a hiba elhanyagolható $y$-hoz képest, a linearizált forma: $\Delta_{x/y} \approx \frac{1}{y}\Delta_x + \frac{x}{y^2}\Delta_y$. Ez mutatja, hogy ha a nevező ($y$) közel van a nullához, az abszolút hiba drasztikusan felerősödik.
* **Relatív hibakorlát:** Ha $\delta_y$ kicsi, az osztás relatív hibája a szorzáshoz hasonlóan a komponensek relatív hibáinak **összegeként** viselkedik:

$$\delta_{x/y} \approx \delta_x + \delta_y$$





## 3. Gyakorlati tanulságok és szabályok (Mérnöki szemlélet)

1. **A relatív hiba összeadódik** a szorzás és az osztás során ($\delta_{xy} \approx \delta_x + \delta_y$), míg az összeadásnál stabil marad (a maximum korlátozza).
2. **A legveszélyesebb művelet a kivonás:** Ha két egymáshoz nagyon közeli mérési vagy számítási adatot vonunk ki egymásból, a relatív hiba ellenőrizhetetlenül megnőhet (jegyvesztés).
3. **Nullával való osztás közelsége:** Ha egy kifejezést olyan számmal osztunk, ami önmagában kicsi (közel van a nullához), az osztó abszolút hibája négyzetesen ($\frac{x}{y^2}$) megnyújtja a végeredmény abszolút hibáját.