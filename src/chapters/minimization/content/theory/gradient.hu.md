## 8.4. Gradiens módszer

Tekintsünk egy $f\colon \mathbb{R}^n \to \mathbb{R}$ függvényt. Analízisből ismert tétel szerint egy $\mathbf{p}$ pontban az $f$ függvény a $-f'(\mathbf{p})$ irányban csökken a leggyorsabban:

**8.8. tétel.** *Legyen $f \in C^1$. Ekkor a*

$$\lim_{t \to 0+} \frac{f(\mathbf{p} + t\mathbf{u}) - f(\mathbf{p})}{t}, \qquad \|\mathbf{u}\|_2 = 1$$

*iránymenti deriváltak minimuma az $\mathbf{u} = -f'(\mathbf{p})/\|f'(\mathbf{p})\|_2$ irányban van.*

Egy $\mathbf{u}$ irányt az $f$ függvény $\mathbf{p}$ pontbeli *lejtőjének* nevezzük, ha létezik olyan $\delta > 0$, hogy $f(\mathbf{p} + t\mathbf{u}) < f(\mathbf{p})$ minden $0 < t < \delta$-ra, azaz a függvény csökken a $\mathbf{p}$ pontból az $\mathbf{u}$ irány mentén indulva. A 8.8. tételt úgy is megfogalmazhatjuk, hogy az $f$ függvénynek a $\mathbf{p}$ pontban a $-f'(\mathbf{p})$ irányban legmeredekebb a lejtője.

A *gradiens módszer* szerint egy $\mathbf{p}^{(0)}$ kezdeti pontból a negatív gradiensvektor irányában kell elmozdulni. Szokás az előbbiek miatt ezt a *legmeredekebb lejtő módszerének* is nevezni. A módszer általános képlete ezért:

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \alpha_k f'(\mathbf{p}^{(k)}), \tag{8.5}$$

ahol $\alpha_k$ a lépésközt meghatározó szorzótényező. A (8.5) gradiens módszernek több változata van. A legegyszerűbb esetben a lépésköz állandó. Legyen $h$ rögzített, és használjuk az $\alpha_k = h/\|f'(\mathbf{p}^{(k)})\|_2$ számot. Ekkor az egyes pontok közötti távolság konstans $h$ lesz. Természetesen ekkor általában nem várható, hogy $h$-nál pontosabban megközelítsük a minimumhelyet.

Egy másik változatban úgy választjuk meg a lépésközt, hogy

$$\phi_k(\alpha_k) = \min_{t \in \mathbb{R}} \phi_k(t)$$

legyen, ahol

$$\phi_k(t) := f\Big(\mathbf{p}^{(k)} - t f'(\mathbf{p}^{(k)})\Big). \tag{8.6}$$

Ekkor minden egyes lépésben a gradiensvektor által meghatározott egyenes mentén egy egyváltozós függvényt kell minimalizálni. Ez utóbbi módon választott lépésközt használó gradiens módszert *optimális gradiens módszernek* hívjuk.

Az optimális gradiens módszernél a gradiensvektorral párhuzamos egyenes mentén egy olyan pontig lépünk, ahol az egyenes érint egy szintvonalat. Abból a pontból pedig a pontbeli gradiensvektorral párhuzamosan lépünk tovább. Ebből következik, hogy az optimális gradiens módszernél az egymás utáni lépések irányai merőlegesek egymásra. (Lásd 3. feladatot!)

Megmutatható, hogy az optimális gradiens módszer lokálisan lineárisan konvergens. A sorozat aszimptotikus hibakonstansa néha közel van 1-hez, azaz a konvergencia lassú is lehet.

**8.9. példa.** Tekintsük újra a 8.6. és 8.7. példákban vizsgált $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ függvényt. Először az $\alpha_k = 0.3/\|f'(\mathbf{p}^{(k)})\|_2$ lépésközzel futtatjuk a gradiens módszert, két kezdeti pontból indítva a módszert: a $(-1, 4)$ kezdeti értékből (piros karikák) és a $(0.5, 3.5)$ kezdeti értékből (zöld karikák). A kapott sorozat első 21 tagja a 8.6. ábrán látható. A sorozatok lassan közelítik meg az $(1, 0.5)$ minimumhelyet (kék pont), és annak közelében oszcillálnak. Vegyük észre, hogy ahogy az analízisből ismert, a gradiensvektor merőleges a ponthoz tartozó szintvonalra, így a gradiens módszer sorozata mindig a szintvonalra merőleges irányban mozdul el.

Ezután az optimális gradiens módszert alkalmaztuk a $(-1, 4)$ és a $(0.5, 3.5)$ kezdőpontból indulva. A két sorozat első 3 illetve 12 tagját a 8.7. ábrán láthatjuk. Az első sorozat gyorsan a minimumhely közelébe került. A második is gyorsan a minimumhelyet tartalmazó hosszúkás „völgybe" került, de ezután ott csak lassan, cikcakkban haladt a minimumhely felé. $\quad\square$

Ha $f$ gradiensvektorát nem tudjuk vagy nem akarjuk kiszámolni (túl sok műveletet igényel), használhatjuk (8.5) következő változatát:

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \alpha_k \mathbf{v}^{(k)}, \tag{8.7}$$

ahol a $\mathbf{v}^{(k)}$ vektor $i$-edik komponensét a

$$v_i^{(k)} = \frac{1}{h}\Big(f(\mathbf{p}^{(k)} + h\mathbf{e}^{(i)}) - f(\mathbf{p}^{(k)})\Big), \qquad i = 1, \ldots, n$$

képlettel számoljuk ($\mathbf{e}^{(i)}$ az $i$-edik egységvektor).

**Feladatok**

1. Alkalmazza a gradiens módszert a 8.3. szakasz 1. feladatában felsorolt függvényekre! Válasszon tetszőleges kezdőpontot, és használja az $\alpha_k = h/\|f'(\mathbf{p}^{(k)})\|_2$ lépésközt valamely $h > 0$-ra, illetve az optimális gradiens módszert!

   <details class="reveal-solution"><summary>Megoldás</summary>

   Worked illustration for $f(x,y) = (x^2 - 2y)^2 + 2(x-1)^2$. The gradient is $\nabla f = \big(4x(x^2-2y) + 4(x-1),\ -4(x^2-2y)\big)$. At $(2,2)$ this is $\nabla f(2,2) = (4, 0)$. One iteration gives $\mathbf{p}^{(1)} = (2,2) - \alpha(4, 0) = (2-4\alpha,\ 2)$. For the optimal gradient method choose $\alpha$ to minimise $\phi(\alpha) = f(2-4\alpha, 2) = ((2-4\alpha)^2 - 4)^2 + 2(2-4\alpha-1)^2$; set $\phi'(\alpha) = 0$ and solve for $\alpha$. With the constant step $\alpha_k = h/\|f'(\mathbf{p}^{(k)})\|_2$ the move has fixed length $h$ in the steepest-descent direction. The same recipe applies to each function of Exercise 1 of Section 8.3.

   </details>

2. Ismételje meg az előző feladatot az $\alpha_k = h$ lépésközt használva!

   <details class="reveal-solution"><summary>Megoldás</summary>

   For a quadratic model $f(\mathbf{x}) = \tfrac12 \mathbf{x}^T A\mathbf{x} - \mathbf{b}^T\mathbf{x} + c$ the gradient is $\nabla f(\mathbf{x}) = A\mathbf{x} - \mathbf{b}$ and the gradient iteration is $\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \alpha_k(A\mathbf{p}^{(k)} - \mathbf{b})$. With a fixed scale $\alpha_k = h$ the step length is no longer normalised, so convergence depends on $h$ relative to the eigenvalues of $A$: too large an $h$ overshoots and may diverge, while a small $h$ converges slowly. The optimal step is $\alpha_k = \dfrac{\mathbf{r}^{(k)T}\mathbf{r}^{(k)}}{\mathbf{r}^{(k)T}A\mathbf{r}^{(k)}}$ where $\mathbf{r}^{(k)} = A\mathbf{p}^{(k)} - \mathbf{b}$ is the residual.

   </details>

3. Számítsa ki a (8.6) képlettel definiált $\phi_k$ függvény deriváltját! A derivált $t = \alpha_k$ pontbeli értékéből vezesse le, hogy a $\mathbf{p}^{(k+2)} - \mathbf{p}^{(k+1)}$ és $\mathbf{p}^{(k+1)} - \mathbf{p}^{(k)}$ vektorok merőlegesek egymásra! Magyarázza meg, hogy a numerikus módszerrel generált 8.7. ábrán a jobb oldali sorozat első és második lépése miért nem merőleges egymásra!

   <details class="reveal-solution"><summary>Megoldás</summary>

   By definition $\phi_k(t) = f(\mathbf{p}^{(k)} - t\,\nabla f(\mathbf{p}^{(k)}))$, so by the chain rule $\phi_k'(t) = -\nabla f(\mathbf{p}^{(k)} - t\,\nabla f(\mathbf{p}^{(k)}))^T \nabla f(\mathbf{p}^{(k)})$. The optimal step $\alpha_k$ satisfies $\phi_k'(\alpha_k) = 0$, i.e. $\nabla f(\mathbf{p}^{(k+1)})^T \nabla f(\mathbf{p}^{(k)}) = 0$. Since $\mathbf{p}^{(k+1)} - \mathbf{p}^{(k)} = -\alpha_k \nabla f(\mathbf{p}^{(k)})$ and $\mathbf{p}^{(k+2)} - \mathbf{p}^{(k+1)} = -\alpha_{k+1}\nabla f(\mathbf{p}^{(k+1)})$, the two consecutive steps are scalar multiples of orthogonal gradients and are therefore orthogonal. For a quadratic with condition number $\kappa$ the resulting convergence is linear with $\dfrac{f(\mathbf{p}^{(k+1)}) - f(\mathbf{p}^*)}{f(\mathbf{p}^{(k)}) - f(\mathbf{p}^*)} \le \left(\dfrac{\kappa - 1}{\kappa + 1}\right)^2$, so a large $\kappa$ (e.g. $\kappa = 100 \Rightarrow$ rate $\approx 0.96$) gives slow zig-zagging convergence, whereas $\kappa = 10$ gives rate $\approx 0.67$.

   </details>
