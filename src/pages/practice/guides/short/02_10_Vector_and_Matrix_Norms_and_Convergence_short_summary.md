**2.9. Vektor- és mátrixnormák, vektor- és mátrixsorozatok** (a részletes jegyzetben *2.10. szakasz*)

## 1. A norma fogalma és matematikai tulajdonságai

A valós számok abszolút értékének tulajdonságaiból kiindulva (nemnegativitás, homogenitás, háromszög-egyenlőtlenség) definiálható a magasabb dimenziós terekben a vektorok nagyságát és távolságát mérő **norma**.

Az $\|\cdot\|\colon\mathbb{R}^n\to\mathbb{R}$ függvényt **vektornormának** nevezzük, ha teljesíti az alábbi három alapvető axiómát minden $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$ vektorra és $c \in \mathbb{R}$ skalárra:

1. **Pozitív definitseg:** $\|\mathbf{x}\| \geq 0$, és $\|\mathbf{x}\|=0 \iff \mathbf{x}=\mathbf{0}$.
2. **Abszolút homogenitás:** $\|c\mathbf{x}\|=|c|\|\mathbf{x}\|$.
3. **Subadditivitás (háromszög-egyenlőtlenség):** $\|\mathbf{x}+\mathbf{y}\|\leq\|\mathbf{x}\|+\|\mathbf{y}\|$.

> **2.41. Tétel:** Bármely vektornormára igaz, hogy a norma mint függvény **folytonos** az $\mathbb{R}^n$ téren, és teljesül rá a megfordított háromszög-egyenlőtlenség: $\big|\|\mathbf{x}\|-\|\mathbf{y}\|\big|\leq\|\mathbf{x}-\mathbf{y}\|$.



## 2. Nevezetes vektornormák és ekvivalenciájuk

A fejezet az $\mathbf{x} = (x_1, x_2, \dots, x_n)^T$ vektorokra három alapvető normát különít el:

* **1-es norma (abszolútösszeg-norma):** A komponensek abszolút értékeinek összege.
* **2-es norma (Euklideszi norma):** A térbeli geometriai hosszúság ($\sqrt{\mathbf{x}^T\mathbf{x}}$).
* **$\infty$-norma (maximum-norma):** A legnagyobb abszolút értékű komponens.

### Normák ekvivalenciája

Véges dimenziós terekben ($\mathbb{R}^n$) minden norma **ekvivalens** egymással. Ez azt jelenti, hogy ha $\|\cdot\|_a$ és $\|\cdot\|_b$ két tetszőleges norma, akkor léteznek olyan $m, M > 0$ pozitív konstansok, hogy minden $\mathbf{x}$ vektorra:


$$m\|\mathbf{x}\|_a \leq \|\mathbf{x}\|_b \leq M\|\mathbf{x}\|_a$$


**Gyakorlati következmény:** Ha egy vektorsorozat konvergál az egyik normában, akkor az összes többiben is konvergálni fog (a konvergencia ténye független a választott normától).



## 3. Mátrixnormák és az indukált norma

A lineáris operátorok (mátrixok) méretének vizsgálatához bevezetjük a mátrixnormát. Egy mátrixnormának a vektornorma három alapaxiómáján felül teljesítenie kell a **szubmultiplatív** tulajdonságot is: $\|A B\| \leq \|A\| \cdot \|B\|$.

### Indukált mátrixnormák

A legtermészetesebb módon egy meglévő vektornormából származtathatunk mátrixnormát az alábbi módon (szemléletesen: a mátrix egységgömbre vett maximális nyújtási tényezője):


$$\|A\| := \max_{\mathbf{x} \neq \mathbf{0}} \frac{\|A\mathbf{x}\|}{\|\mathbf{x}\|} = \max_{\|\mathbf{x}\|=1} \|A\mathbf{x}\|$$


Ebből a definícióból következik a numerikus becslésekhez kulcsfontosságú **kompatibilitási egyenlőtlenség**: $\|A\mathbf{x}\| \leq \|A\| \cdot \|\mathbf{x}\|$.

### Kiszámítási formulák a gyakorlatban

* **1-es mátrixnorma (oszlopösszeg-norma):** A mátrix oszlopai abszolútösszegeinek maximuma.
* **$\infty$ mátrixnorma (sorösszeg-norma):** A mátrix sorai abszolútösszegeinek maximuma.



## 4. Vektor- és mátrixsorozatok konvergenciája

### Vektorsorozatok

Egy $\mathbf{x}^{(k)}$ vektorsorozat akkor konvergál egy $\mathbf{x}$ határértékvektorhoz, ha a távolságuk normája nullához tart: $\lim_{k\to\infty} \|\mathbf{x}^{(k)} - \mathbf{x}\| = 0$. Ez teljesen ekvivalens azzal, mintha a vektorok konvergenciáját komponensenként, elemenként vizsgálnánk.

### Cauchy-kritérium

A valós sorozatokhoz hasonlóan a **Cauchy-sorozat** fogalma itt is működik: egy vektorsorozat pontosan akkor konvergens, ha tetszőlegesen nagy indexekre a tagok egymástól vett távolsága a nullához tart ($\|\mathbf{x}^{(k)} - \mathbf{x}^{(m)}\| < \varepsilon$).



## 5. Többváltozós Lagrange-féle középértéktétel vektor értékű függvényekre

A fejezet legfontosabb elméleti záróköve a klasszikus Lagrange-féle középértéktétel kiterjesztése olyan $F\colon \mathbb{R}^n \to \mathbb{R}^n$ függvényekre, amelyek többváltozósak és vektor értékűek.

Vektor értékű függvényeknél a derivált egy **$F'$ Jacobi-mátrix**. Mivel a koordináta-függvények nem feltétlenül ugyanott veszik fel a közbülső értéket, pontos egyenlőség helyett normák segítségével egy **középérték-egyenlőtlenséget** kapunk:

> **Tétel:** Ha $F$ folytonosan differenciálható az $\mathbf{x}$ és $\mathbf{y}$ pontokat összekötő konvex szakaszon, akkor létezik a szakasz belsejében egy olyan $\boldsymbol{\xi} = \mathbf{y} + \xi(\mathbf{x}-\mathbf{y})$ pont ($\xi \in (0,1)$), amelyre teljesül:
> 
> $$\|F(\mathbf{x}) - F(\mathbf{y})\| \leq \|F'(\boldsymbol{\xi})\| \cdot \|\mathbf{x} - \mathbf{y}\|$$
> 
> 

Ez a tétel elengedhetetlen eszköz a nemlineáris egyenletrendszerek (pl. többváltozós Newton-módszer vagy fixpont-iterációk) konvergenciájának és stabilitásának bizonyításához, mivel kapcsolatot teremt a függvényértékek változása és a Jacobi-mátrix normája között.