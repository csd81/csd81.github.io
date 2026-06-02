## 2.8. Többváltozós analízis előismeretek

### 78. fólia — szakaszcím

**2.8. Többváltozós analízis előismeretek**

### 79. fólia — gradiens

Legyen $E\subset\mathbb{R}^n$ és tekintsük az $f\colon E\to\mathbb{R}$ $n$-változós függvényt. Az

$$f=f(\mathbf{x})=f(x_1,\dots,x_n)$$

függvény $x_i$ változója szerinti parciális deriváltját $\tfrac{\partial f}{\partial x_i}$ jelöli. Ha az $f$ függvény összes $m$-edrendű parciális deriváltja létezik és folytonos, akkor a függvényt *$m$-szer folytonosan parciálisan differenciálhatónak* nevezzük. Ezt a tulajdonságot az $f\in C^m$ jelöléssel rövidítjük. Ha $f\in C^1$, akkor $f'$ az $f$ függvény *gradiensvektorát* jelöli, azaz

$$f'(\mathbf{x}):=\left(\frac{\partial f(\mathbf{x})}{\partial x_1},\dots,\frac{\partial f(\mathbf{x})}{\partial x_n}\right)^T.$$

---
### 80. fólia — Hesse-mátrix

Ha $f\in C^2$, akkor $f''(\mathbf{x})$ jelöli az ún. *Hesse-mátrixot*:

$$f''(\mathbf{x}):=\begin{pmatrix}\frac{\partial^2 f}{\partial x_1^2}(\mathbf{x}) & \frac{\partial^2 f}{\partial x_1\partial x_2}(\mathbf{x}) & \cdots & \frac{\partial^2 f}{\partial x_1\partial x_n}(\mathbf{x})\\ \frac{\partial^2 f}{\partial x_2\partial x_1}(\mathbf{x}) & \frac{\partial^2 f}{\partial x_2^2}(\mathbf{x}) & \cdots & \frac{\partial^2 f}{\partial x_2\partial x_n}(\mathbf{x})\\ \vdots & \vdots & & \vdots\\ \frac{\partial^2 f}{\partial x_n\partial x_1}(\mathbf{x}) & \frac{\partial^2 f}{\partial x_n\partial x_2}(\mathbf{x}) & \cdots & \frac{\partial^2 f}{\partial x_n^2}(\mathbf{x})\end{pmatrix}.$$

### 81. fólia — Taylor-formula többváltozós

**Tétel (Taylor-formula).** *Legyen $E\subset\mathbb{R}^n$ nyílt halmaz, $f\colon E\to\mathbb{R}$, $f\in C^{m+1}$, és legyen $\mathbf{a}\in E$. Ekkor minden $\mathbf{x}\in E$-hez létezik olyan $\xi=\xi(\mathbf{x})\in E$, hogy $\xi=\mathbf{x}+t(\mathbf{a}-\mathbf{x})$ valamely $t\in(0,1)$-re (azaz $\xi$ az $\mathbf{a}$ és $\mathbf{x}$ vektorokat összekötő szakasz valamely pontja), és*

$$
\begin{aligned}
f(x_1,\dots,x_n) &= f(a_1,\dots,a_n)+\sum_{i=1}^n\frac{\partial f(a_1,\dots,a_n)}{\partial x_i}(x_i-a_i) \\
&\quad +\tfrac{1}{2}\sum_{i=1}^n\sum_{j=1}^n\frac{\partial^2 f(a_1,\dots,a_n)}{\partial x_i\partial x_j}(x_i-a_i)(x_j-a_j) \\
&\quad +\dots+\tfrac{1}{m!}\sum_{i_1=1}^n\dots\sum_{i_m=1}^n\frac{\partial^m f(a_1,\dots,a_n)}{\partial x_{i_1}\cdots\partial x_{i_m}}(x_{i_1}-a_{i_1})\cdots(x_{i_m}-a_{i_m}) \\
&\quad +\tfrac{1}{(m+1)!}\sum_{i_1=1}^n\dots\sum_{i_{m+1}=1}^n\frac{\partial^{m+1} f(\xi_1,\dots,\xi_n)}{\partial x_{i_1}\cdots\partial x_{i_{m+1}}}(x_{i_1}-a_{i_1})\cdots(x_{i_{m+1}}-a_{i_{m+1}}).
\end{aligned}
$$

*Ábra: az $\mathbf{x}$ és $\mathbf{a}$ vektorok közötti $\mathbf{x}+t(\mathbf{a}-\mathbf{x})$ szakasz.*

### 82. fólia — másodrendű Taylor

Az előbbi formulából könnyen ellenőrizhető, hogy a gradiensvektor és a Hesse-mátrix jelölést alkalmazva az $f\in C^3$ függvény másodrendű Taylor-közelítése az

$$f(\mathbf{x})\approx f(\mathbf{a})+f'(\mathbf{a})^T(\mathbf{x}-\mathbf{a})+\tfrac{1}{2}(\mathbf{x}-\mathbf{a})^T f''(\mathbf{a})(\mathbf{x}-\mathbf{a})$$

alakban írható fel. Ez indokolja az $f'$ és $f''$ jelölést a gradiensvektorra és a Hesse-mátrixra.

### 83. fólia — vektor értékű függvény deriváltja

Legyen $I\subset\mathbb{R}$, $g\colon I\to\mathbb{R}^n$. $g$ komponensfüggvényeit jelölje $g_i$, azaz legyen

$$g(t)=(g_1(t),\dots,g_n(t))^T.$$

Ekkor $g$-t *differenciálhatónak* nevezzük, ha minden komponensfüggvénye differenciálható, és a deriváltján a

$$g'\colon I\to\mathbb{R}^n, \qquad g'(t):=(g_1'(t),\dots,g_n'(t))^T$$

függvényt értjük. $g$-t *folytonosan differenciálhatónak* nevezzük, ha minden komponensfüggvénye folytonosan differenciálható.

### 84. fólia — láncszabály

**Tétel (láncszabály).** *Legyen $f\colon\mathbb{R}^n\to\mathbb{R}$, $f\in C^1$ és $g\colon\mathbb{R}\to\mathbb{R}^n$ folytonosan differenciálható. Ekkor az $f\circ g\colon\mathbb{R}\to\mathbb{R}$ összetett függvény is folytonosan differenciálható, és*

$$\frac{d}{dt}f(g(t))=f'(g(t))^T g'(t).$$

### 85. fólia — többváltozós Lagrange

A láncszabály következményeként beláthatjuk a Lagrange-tétel következő általánosítását többváltozós valós függvényekre.

**Tétel (Lagrange-féle középértéktétel).** *Legyen $E\subset\mathbb{R}^n$ nyílt, konvex halmaz, $f\colon E\to\mathbb{R}$ folytonosan parciálisan differenciálható. Ekkor minden $\mathbf{x},\mathbf{y}\in E$-hez létezik olyan $\xi\in(0,1)$, hogy*

$$f(\mathbf{x})-f(\mathbf{y})=f'(\mathbf{y}+\xi(\mathbf{x}-\mathbf{y}))^T(\mathbf{x}-\mathbf{y}).$$

**Bizonyítás.** Definiáljuk a $g(t)=f(\mathbf{y}+t(\mathbf{x}-\mathbf{y}))$ egyváltozós valós függvényt $[0,1]$-en. Az egyváltozós valós függvényekre vonatkozó Lagrange-féle középértéktétel és a láncszabály szerint

$$f(\mathbf{x})-f(\mathbf{y})=g(1)-g(0)=g'(\xi)=f'(\mathbf{x}+\xi(\mathbf{y}-\mathbf{x}))^T(\mathbf{x}-\mathbf{y}).$$

### 86. fólia — Jacobi-mátrix

Legyen $E\subset\mathbb{R}^n$ és $\mathbf{f}\colon E\to\mathbb{R}^n$. Az $\mathbf{f}$ függvény komponensfüggvényeit jelölje $f_i$, azaz

$$\mathbf{f}(\mathbf{x})=(f_1(\mathbf{x}),\dots,f_n(\mathbf{x}))^T.$$

Az $\mathbf{f}$ függvényt *$m$-szer folytonosan parciálisan differenciálhatónak* nevezzük, ha minden komponensfüggvényének minden $m$-edrendű parciális deriváltja létezik és folytonos. $\mathbf{f}\in C^m$ jelöli röviden azt, hogy $\mathbf{f}$ $m$-szer folytonosan parciálisan differenciálható. Az $\mathbf{f}\in C^1$ függvény *Jacobi-mátrixának* vagy *derivált mátrixának* az

$$\mathbf{f}'(\mathbf{x}):=\begin{pmatrix}\frac{\partial f_1}{\partial x_1}(\mathbf{x}) & \cdots & \frac{\partial f_1}{\partial x_n}(\mathbf{x})\\ \vdots & & \vdots\\ \frac{\partial f_n}{\partial x_1}(\mathbf{x}) & \cdots & \frac{\partial f_n}{\partial x_n}(\mathbf{x})\end{pmatrix}$$

$n\times n$-es mátrixot hívjuk.

### 87. fólia — lineáris közelítés

Legyen $\mathbf{a}$ rögzített. Ha az $\mathbf{f}$ függvény komponensfüggvényeit az $\mathbf{a}$-körüli elsőrendű Taylor-polinomjaival közelítjük, akkor kapjuk, hogy

$$\mathbf{f}(\mathbf{x})=\begin{pmatrix}f_1(\mathbf{x})\\ \vdots\\ f_n(\mathbf{x})\end{pmatrix}\approx\begin{pmatrix}f_1(\mathbf{a})+f_1'(\mathbf{a})^T(\mathbf{x}-\mathbf{a})\\ \vdots\\ f_n(\mathbf{a})+f_n'(\mathbf{a})^T(\mathbf{x}-\mathbf{a})\end{pmatrix}=\mathbf{f}(\mathbf{a})+\mathbf{f}'(\mathbf{a})(\mathbf{x}-\mathbf{a}).$$

Az $\mathbf{f}(\mathbf{a})+\mathbf{f}'(\mathbf{a})(\mathbf{x}-\mathbf{a})$ kifejezést az $\mathbf{f}$ függvény $\mathbf{a}$-körüli *lineáris közelítésének* hívjuk.

---
