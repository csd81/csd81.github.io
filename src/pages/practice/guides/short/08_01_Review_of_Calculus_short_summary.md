**8.1. Szélsőértékszámítás – Analízis előismeretek** 



## 1. Alapvető fogalmak: Gradiensvektor és Hesse-mátrix

Többváltozós függvények vizsgálatakor az egyváltozós első és második derivált szerepét a **gradiensvektor** és a **Hesse-mátrix** veszi át.

### A gradiensvektor ($f'(\mathbf{x})$ vagy $\nabla f(\mathbf{x})$)

Legyen $f\colon \mathbb{R}^n \to \mathbb{R}$ egy többváltozós, valós értékű függvény. Ha a függvény minden változója szerint parciálisan differenciálható, akkor az elsőrendű parciális deriváltakból képzett vektort gradiensvektornak nevezzük:


$$f'(\mathbf{x}) = \nabla f(\mathbf{x}) := \left( \frac{\partial f(\mathbf{x})}{\partial x_1}, \frac{\partial f(\mathbf{x})}{\partial x_2}, \ldots, \frac{\partial f(\mathbf{x})}{\partial x_n} \right)^T$$

### A Hesse-mátrix ($f''(\mathbf{x})$ vagy $\mathbf{H}(\mathbf{x})$)

Ha $f$ kétszer parciálisan differenciálható, akkor a másodrendű parciális deriváltakat egy $n \times n$-es négyzetes mátrixba, az úgynevezett Hesse-mátrixba rendezhetjük:


$$f''(\mathbf{x}) := \begin{pmatrix} 
\dfrac{\partial^2 f}{\partial x_1^2}(\mathbf{x}) & \dfrac{\partial^2 f}{\partial x_1 \partial x_2}(\mathbf{x}) & \cdots & \dfrac{\partial^2 f}{\partial x_1 \partial x_n}(\mathbf{x}) \\[2ex]
\dfrac{\partial^2 f}{\partial x_2 \partial x_1}(\mathbf{x}) & \dfrac{\partial^2 f}{\partial x_2^2}(\mathbf{x}) & \cdots & \dfrac{\partial^2 f}{\partial x_2 \partial x_n}(\mathbf{x}) \\[2ex]
\vdots & \vdots & \ddots & \vdots \\[1ex]
\dfrac{\partial^2 f}{\partial x_n \partial x_1}(\mathbf{x}) & \dfrac{\partial^2 f}{\partial x_n \partial x_2}(\mathbf{x}) & \cdots & \dfrac{\partial^2 f}{\partial x_n^2}(\mathbf{x}) 
\end{pmatrix}$$

*Megjegyzés (Young-tétel):* Ha a másodrendű parciális deriváltak folytonosak ($f \in C^2$), akkor a vegyes parciális deriváltak függetlenek a differenciálás sorrendjétől (azaz $\frac{\partial^2 f}{\partial x_i \partial x_j} = \frac{\partial^2 f}{\partial x_j \partial x_i}$), ami azt jelenti, hogy a Hesse-mátrix **mindig szimmetrikus** szerkezetű.



## 2. Általános feltételek $n$-változós lokális szélsőértékekre (8.1. Tétel)

Az optimalizáció elméletében egy tetszőleges $n$-változós függvény lokális szélsőértékeinek létezését az alábbi szükséges és elégséges feltételek szabályozzák:

### Szükséges feltétel (Elsőrendű feltétel)

> Ha az $f$ függvénynek a parciálisan differenciálható **$\mathbf{a}$ pontban lokális szélsőértéke** (akár minimuma, akár maximuma) van, akkor a függvény összes elsőrendű parciális deriváltja ott pontosan nulla, azaz a **gradiensvektor eltűnik**:
> 
> $$\nabla f(\mathbf{a}) = \mathbf{0} \implies \frac{\partial f(\mathbf{a})}{\partial x_i} = 0 \qquad \text{minden } i = 1, \ldots, n \text{-re.}$$
> 
> 
> 
> Azon pontokat, ahol a gradiensvektor zéró, **kritikus vagy stacionárius pontoknak** nevezzük.

### Elégséges feltétel (Másodrendű feltétel)

Tegyük fel, hogy $f \in C^2$ és az $\mathbf{a}$ pont egy stacionárius pont ($\nabla f(\mathbf{a}) = \mathbf{0}$). Ekkor a pont jellege a Hesse-mátrix **definitségétől** függ:

1. Ha az $f''(\mathbf{a})$ Hesse-mátrix **pozitív definit**, akkor a függvénynek az $\mathbf{a}$ pontban **szigorú lokális minimuma** van.
2. Ha az $f''(\mathbf{a})$ Hesse-mátrix **negatív definit**, akkor a függvénynek az $\mathbf{a}$ pontban **szigorú lokális maximuma** van.
3. Ha a mátrix *indefinit* (van pozitív és negatív sajátértéke is), akkor a pontban nincs szélsőérték, hanem egy *nyeregpont* található.



## 3. Speciális eset: Kétváltozós függvények optimalizálása (8.2. Tétel)

A gyakorlati és mérnöki problémák jelentős része kétváltozós felületekre redukálódik. A kétváltozós $f(x,y)$ függvények esetén a fenti elmélet egy könnyebben számolható, determináns alapú kritériummá egyszerűsödik.

### A kétváltozós elégséges feltétel algoritmusa:

1. Megkeressük a stacionárius pontokat a parciális deriváltak nullává tételével:

$$\frac{\partial f}{\partial x}(a, b) = 0, \qquad \frac{\partial f}{\partial y}(a, b) = 0 \tag{8.1}$$


2. Felírjuk a Hesse-mátrix determinánsfüggvényét, az úgynevezett **diszkriminánst ($D$)**:

$$D(a, b) := \det \mathbf{H}(a,b) = \frac{\partial^2 f}{\partial x^2}(a, b) \cdot \frac{\partial^2 f}{\partial y^2}(a, b) - \left( \frac{\partial^2 f}{\partial x \partial y}(a, b) \right)^2$$



### A stacionárius pontok osztályozása $D$ alapján:

* **Ha $D(a, b) > 0$:** A pontban **van lokális szélsőérték**.
* Ha $\dfrac{\partial^2 f}{\partial x^2}(a, b) > 0$, akkor a pont egy **lokális minimumhely**.
* Ha $\dfrac{\partial^2 f}{\partial x^2}(a, b) < 0$, akkor a pont egy **lokális maximumhely**.


* **Ha $D(a, b) < 0$:** A függvénynek ebben a pontban **nincs szélsőértéke**, a felületnek itt **nyeregpontja** (saddle point) van.
* **Ha $D(a, b) = 0$:** A teszt *inkonkluzív* (nem dönthető el). Ilyenkor magasabb rendű Taylor-megközelítések vizsgálata szükséges a pont jellegének meghatározásához.



## 4. Elméleti jelentőség a numerikus módszerekben

Ez a fejezet teremti meg az elméleti alapfeltételeket az összes többváltozós numerikus minimalizációs eljáráshoz. Amikor a számítógépes algoritmusok (pl. a legkisebb négyzetek módszere a 9. fejezetben) egy hiba-függvény globális minimumát keresik, az analitikus vagy numerikus lépések mindig a gradiensvektor nullává tételére, és a Hesse-mátrix pozitív definitségének (vagy a normálegyenletek nemszingularitásának) biztosítására törekednek.