## 2.2. Iterációs módszerek megállási feltételei

### 22. fólia — szakaszcím

**2.2. Iterációs módszerek megállási feltételei**

### 23. fólia — három feltétel

Tegyük fel, hogy $p_k$ tart a $p$ határértékhez, ahol $f(p)=0$. Megadunk $\varepsilon_1>0$, $\varepsilon_2>0$ és $\varepsilon_3>0$ tolerancia értékeket. A sorozat $k$-adik tagját, $p_k$-t elfogadjuk $p$ közelítésének, ha

1. $|p_k-p_{k-1}|<\varepsilon_1$,  2. $\dfrac{|p_k-p_{k-1}|}{|p_k|}<\varepsilon_2$,  vagy  3. $|f(p_k)|<\varepsilon_3$.

- Az 1. feltétel a közelítés hibájának, $|p_k-p|$-nek numerikus megfelelője.
- A 2. feltétellel a közelítés relatív hibáját, $|p_k-p|/|p|$-et közelítjük numerikusan.
- A 3. feltétel szerint ha a függvényérték kicsi, akkor feltesszük, hogy közel vagyunk a gyökhöz, és megállunk.

### 24. fólia — Példa az 1./2. feltétel csapdájára

**Példa.** Tekintsük a

$$p_k=1+\tfrac{1}{2}+\dots+\tfrac{1}{k}$$

sorozatot. Mivel $|p_k-p_{k-1}|=\tfrac{1}{k}$, ezért 1. teljesül, ha $k$ elég nagy. De $p_k\to\infty$, ha $k\to\infty$. Hasonlóan,

$$\frac{|p_k-p_{k-1}|}{|p_k|}=\frac{\tfrac{1}{k}}{1+\tfrac{1}{2}+\dots+\tfrac{1}{k}}\leq\tfrac{1}{k}\to 0, \quad k\to\infty,$$

így 2. teljesül nagy $k$-ra, de a sorozat nem konvergens.

### 25. fólia — Példa a 3. feltétel csapdájára

**Példa.** Tekintsük az alábbi függvényt: $y=f(x)$ — az $x=p$ közelében meredeken nő, a $p_k$ közelében laposan közelíti $0$-t. *Ábra: a piros görbe $y=f(x)$, vízszintes vonal az $\varepsilon_3$ szinten; $p_k$ ott van, ahol $f(p_k)<\varepsilon_3$, de $p_k$ messze van a valódi $p$ gyöktől.*

Itt a 3. feltétel teljesül, de $p_k$ nem jó közelítése a függvény gyökének. A gyakorlatban a fenti megállási feltételek kombinációját célszerű használni.

---
