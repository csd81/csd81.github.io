**Többváltozós analízis előismeretek** (*Review of Multivariable Calculus*) 

## 1. Alapvető jelölések és Normák ($\mathbb{R}^n$)

A többváltozós terekben a pontokat (vektorokat) $x = (x_1, x_2, \dots, x_n)^T \in \mathbb{R}^n$ alakban adjuk meg. A vektorok nagyságának (hosszának) mérésére a **norma** fogalmát használjuk. A három legfontosabb vektornorma:

* **1-es norma (Manhattan-norma):** A komponensek abszolút értékeinek összege:

$$\|x\|_1 = \sum_{i=1}^n |x_i|$$


* **2-es norma (Euklideszi norma):** A hagyományos geometriai hosszúság:

$$\|x\|_2 = \sqrt{\sum_{i=1}^n x_i^2}$$


* **$\infty$-norma (Maximum-norma):** A legnagyobb abszolút értékű komponens:

$$\|x\|_\infty = \max_{1 \leq i \leq n} |x_i|$$



### Mátrixnormák

Ha $A \in \mathbb{R}^{n \times n}$ egy négyzetes mátrix, a vektornyújtási hatása alapján definiálható az **indukált mátrixnorma**:


$$\|A\| := \max_{x \neq 0} \frac{\|Ax\|}{\|x\|}$$


Ebből közvetlenül következik a rendkívül fontos $\|Ax\| \leq \|A\| \cdot \|x\|$ egyenlőtlenség.



## 2. Többváltozós Függvények Deriváltjai

Legyen $F: \mathbb{R}^n \to \mathbb{R}^m$ egy többváltozós függvény. Ha $m=1$ (skalár értékű függvény), akkor **gradiensről**, ha $m>1$ (vektor értékű függvény), akkor **Jacobi-mátrixról** beszélünk.

### A Jacobi-mátrix ($F'$)

Ha $F$ minden komponensfüggvénye ($f_1, f_2, \dots, f_m$) parciálisan differenciálható, akkor az $F$ függvény deriváltja (Jacobi-mátrixa) egy $m \times n$-es mátrix, amely az összes lehetséges elsőrendű parciális deriváltat tartalmazza:


$$F'(x) = J(x) = \begin{pmatrix} 
\frac{\partial f_1}{\partial x_1} & \dots & \frac{\partial f_1}{\partial x_n} \\ 
\vdots & \ddots & \vdots \\ 
\frac{\partial f_m}{\partial x_1} & \dots & \frac{\partial f_m}{\partial x_n} 
\end{pmatrix}$$

### A Hesse-mátrix ($f''$)

Skalár értékű függvények ($f: \mathbb{R}^n \to \mathbb{R}$) esetén a másodrendű parciális deriváltakat összefoglaló $n \times n$-es szimmetrikus mátrixot **Hesse-mátrixnak** nevezzük:


$$f''(x) = H(x) = \left( \frac{\partial^2 f}{\partial x_i \partial x_j} \right)_{i,j=1}^n$$



## 3. Fontos Középérték-tételek és Taylor-approximáció

A numerikus analízis konvergenciabizonyításaihoz elengedhetetlen az egyváltozós Taylor-tétel többváltozós kiterjesztése.

### Skalár értékű függvény Taylor-tétele ($m=1$)

Ha $f: \mathbb{R}^n \to \mathbb{R}$ elegendően sokszor differenciálható, akkor az $x_0$ pont körüli elsőrendű Taylor-közelítése a másodrendű hibataggal együtt a következő:


$$f(x) = f(x_0) + f'(x_0)(x-x_0) + \frac{1}{2}(x-x_0)^T f''(\xi)(x-x_0)$$


ahol $\xi$ az $x$ és $x_0$ pontokat összekötő egyenes szakasz egy belső pontja ($\xi \in \langle x, x_0 \rangle$).

### Vektor értékű függvény Középérték-tétele ($m>1$)

Vektor értékű függvényeknél ($F: \mathbb{R}^n \to \mathbb{R}^m$) a fenti Taylor-formula közvetlenül nem alkalmazható közös belső ponttal. Helyette az alábbi integrálformát vagy a normákra vonatkozó **középérték-egyenlőtlenséget** használjuk:


$$F(x) = F(x_0) + \int_{0}^{1} F'\big(x_0 + t(x-x_0)\big)(x-x_0) \, dt$$


Ebből következik, hogy ha a derivált mátrix normája korlátos egy konvex tartományon ($\|F'(z)\| \leq M$), akkor teljesül a **Lipschitz-tulajdonság**:


$$\|F(x) - F(x_0)\| \leq M \|x - x_0\|$$



## 4. Vektor értékű Taylor-tétel a numerikus módszerekhez

Ha egy vektor értékű $F: \mathbb{R}^n \to \mathbb{R}^n$ függvény $x_0$ körüli lineáris közelítését vizsgáljuk, a hibatag becslésére a következő tétel szolgál:

> **Tétel:** Tegyük fel, hogy $F$ folytonosan differenciálható $x_0$ egy nyílt környezetében, és a parciális deriváltak teljesítik a Lipschitz-feltételt $L$ konstanssal. Ekkor érvényes az alábbi hibabecslés:
> 
> $$\|F(x) - F(x_0) - F'(x_0)(x-x_0)\| \leq \frac{L}{2} \|x-x_0\|^2$$
> 
> 

### Miért kulcsfontosságú ez?

Ez a tétel a közvetlen elméleti alapja a **többváltozós Newton-módszer kvadratikus konvergenciájának**. Azt mutatja meg, hogy ha a függvényt lecseréljük a Jacobi-mátrixszal felírt lineáris érintő-közelítésére, a hátramaradó hiba a távolság *négyzetével* ($|x-x_0|^2$) arányos, pontosan úgy, mint az egyváltozós esetben.