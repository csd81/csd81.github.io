**4.4. Hibabecslés, kondíciószám és iteratív finomítás**  



## 1. Motiváció: A reziduális vektor és a megállási feltételek csapdája

A lineáris egyenletrendszerek iterációs megoldásakor (mint a Jacobi- vagy Gauss–Seidel-módszer) valamilyen kritérium alapján le kell állítanunk a sorozat generálását. Három általános megállási feltételt alkalmazhatunk:

1. $\|\mathbf{x}^{(k+1)} - \mathbf{x}^{(k)}\| < \varepsilon$ (Az egymást követő tagok közelsége).
2. $\dfrac{\|\mathbf{x}^{(k+1)} - \mathbf{x}^{(k)}\|}{\|\mathbf{x}^{(k+1)}\|} < \varepsilon$ (Relatív változás).
3. $\|\mathbf{b} - \mathbf{A}\mathbf{x}^{(k)}\| < \varepsilon$ (A hibaegyenlet nagysága).

Bevezetjük a **reziduális vektor (maradékvektor)** fogalmát:


$$\mathbf{r} := \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}}$$


Ahol $\tilde{\mathbf{x}}$ egy tetszőleges közelítő megoldás.

> **A kritikus kérdés:** Ha a megállási feltétel során azt tapasztaljuk, hogy a reziduális vektor normája nagyon kicsi ($\|\mathbf{r}\| \approx 0$), következik-e ebből egyenesen az, hogy a közelítésünk nagyon pontos, azaz közeledik a valódi megoldáshoz ($\tilde{\mathbf{x}} \approx \mathbf{x}$)?

### Ellenpélda (4.17. Példa)

Tekintsük az alábbi egyenletrendszert:


$$\begin{pmatrix} 4 & 1 \\ 4.03 & 1 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 5 \\ 5.03 \end{pmatrix}$$


A rendszer pontos elméleti megoldása: $\mathbf{x} = (1, 1)^T$.
Vegyünk egy meglehetősen rossz közelítést: $\tilde{\mathbf{x}} = (2, -3)^T$. Ha kiszámítjuk ehhez a reziduális vektort:


$$\mathbf{r} = \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}} = \begin{pmatrix} 5 \\ 5.03 \end{pmatrix} - \begin{pmatrix} 4 \cdot 2 + 1 \cdot (-3) \\ 4.03 \cdot 2 + 1 \cdot (-3) \end{pmatrix} = \begin{pmatrix} 0 \\ 0.01 \end{pmatrix}$$


A maximum-normát véve $\|\mathbf{r}\|_\infty = 0.01$, ami egy rendkívül kicsi érték. Ennek ellenére a valódi hiba óriási: $\|\mathbf{x} - \tilde{\mathbf{x}}\|_\infty = |1 - 2| = 1$. **A hipotézis tehát megbukott:** a reziduális vektor kicsinysége önmagában nem garantálja a jó közelítést.



## 2. A Mátrix Kondíciószáma (Condition Number)

Ahhoz, hogy megértsük, mikor bízhatunk meg a reziduális vektorban, össze kell kötnünk a hiba normáját a reziduális vektor normájával. Mivel $\mathbf{Ax} = \mathbf{b}$ és $\mathbf{A}\tilde{\mathbf{x}} = \mathbf{b} - \mathbf{r}$, a kettő különbségéből következik:


$$\mathbf{A}(\mathbf{x} - \tilde{\mathbf{x}}) = \mathbf{r} \implies \mathbf{x} - \tilde{\mathbf{x}} = \mathbf{A}^{-1}\mathbf{r}$$

Normát véve és a mátrixnormák szubmultiplikatív tulajdonságát kihasználva kapjuk az **abszolút és relatív hibabecslő tételeket**:


$$\|\mathbf{x} - \tilde{\mathbf{x}}\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{r}\|$$

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \|\mathbf{A}\| \|\mathbf{A}^{-1}\| \frac{\|\mathbf{r}\|}{\|\mathbf{b}\|}$$

> **Definíció:** Az $\mathbf{A}$ nemszinguláris négyzetes mátrix egy rögzített normára vonatkozó **kondíciószámának** nevezzük a következő szorzatot:
> 
> $$\mathrm{cond}(\mathbf{A}) := \|\mathbf{A}\| \|\mathbf{A}^{-1}\| \tag{4.21}$$
> 
> 

### A kondíciószám tulajdonságai és értelmezése

* Egységmátrixra $\mathrm{cond}(\mathbf{I}) = 1$, és tetszőleges mátrixra mindig $\mathrm{cond}(\mathbf{A}) \geq 1$.
* **Jól kondicionált mátrix:** Ha a kondíciószám kicsi (közel van az 1-hez). Ekkor a reziduális vektor kicsinysége garantálja, hogy a valódi hiba is kicsi.
* **Rosszul kondicionált (ill-conditioned) mátrix:** Ha a kondíciószám nagyon nagy. Az ilyen rendszerek rendkívül érzékenyek a kerekítési hibákra és a bemeneti adatok apró perturbációira. A fent bemutatott ellenpéldában a mátrix kondíciószáma $\mathrm{cond}_\infty(\mathbf{A}) = 1346$ volt, ez okozta a becslés kudarcát.



## 3. A kondíciószám gyakorlati közelítése

Nagy méretű egyenletrendszereknél az $\mathbf{A}^{-1}$ inverz mátrix közvetlen kiszámítása túl drága művelet lenne, így a kondíciószám pontos értékét sem ismerjük. A gyakorlatban az alábbi eljárással **becsüljük** meg a nagyságrendjét:

1. Kiválasztunk egy tetszőleges, nemzéró $\mathbf{v}$ vektort.
2. Megoldunk egy segéd-lineárisrendszert az $\mathbf{A}$ együtthatómátrixszal az ismeretlen $\mathbf{z}$ vektorra:

$$\mathbf{A}\mathbf{z} = \mathbf{v} \implies \mathbf{z} = \mathbf{A}^{-1}\mathbf{v}$$


3. A normák arányából egy alsó korlátot kapunk az inverz normájára:

$$\|\mathbf{z}\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{v}\| \implies \|\mathbf{A}^{-1}\| \geq \frac{\|\mathbf{z}\|}{\|\mathbf{v}\|}$$


4. Ezt visszahelyettesítve a (4.21) definícióba, megkapjuk a kondíciószám egy hatékony alsó közelítését:

$$\mathrm{cond}(\mathbf{A}) \approx \|\mathbf{A}\| \frac{\|\mathbf{z}\|}{\|\mathbf{v}\|} \tag{4.24}$$





## 4. Iteratív Finomítás (Iterative Refinement)

Ha egy lineáris egyenletrendszert közvetlen módszerrel (például LU-felbontással vagy Gauss-eliminációval) oldunk meg, a kerekítési hibák miatt a kapott $\mathbf{x}^{(1)}$ megoldás nem lesz teljesen pontos. Az **iteratív finomítás** egy olyan eljárás, amely képes ezeket a kerekítési hibákat szisztematikusan kiszűrni és javítani a végeredmény pontosságát.

### Az algoritmus lépései:

1. Kiszámítjuk az aktuális közelítéshez tartozó pontos reziduális vektort:

$$\mathbf{r} = \mathbf{b} - \mathbf{A}\mathbf{x}^{(1)}$$


2. Megoldunk egy újabb lineáris egyenletrendszert, ahol a jobb oldalon ez a **reziduális vektor szerepel szabadtagként**:

$$\mathbf{A}\mathbf{y} = \mathbf{r}$$



*(Mivel az $\mathbf{A}$ mátrix LU-felbontása a fő feladat megoldásakor már elkészült, ez a lépés rendkívül olcsó, mindössze egy előre- és visszahelyettesítést ($O(n^2)$ műveletet) igényel).*
3. A kapott $\mathbf{y}$ korrekciós vektorral frissítjük (finomítjuk) a megoldást:

$$\mathbf{x}^{(2)} = \mathbf{x}^{(1)} + \mathbf{y}$$



Ha a mátrix nem extrém módon rosszul kondicionált, ez az egyetlen plusz lépés szinte a teljes gépi pontossággal egyező szintre javítja fel a numerikus végeredményt.