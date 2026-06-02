# Trigonometria

<!-- OCR of "trigonometria.pdf" (előadás-diák, összeállította: dr. Leitold Adrien, egyetemi docens). 9 dia. -->

*Összeállította: dr. Leitold Adrien, egyetemi docens*

## Hegyesszögek szögfüggvényei

*Ábra: derékszögű háromszög, $a$ és $b$ befogókkal, $c$ átfogóval, az $\alpha$ szög a $b$ befogó és a $c$ átfogó közötti szög.*

$$\sin\alpha=\frac{\text{szöggel szembeni befogó}}{\text{átfogó}}=\frac ac$$
$$\cos\alpha=\frac{\text{szög melletti befogó}}{\text{átfogó}}=\frac bc$$
$$\operatorname{tg}\alpha=\frac{\text{szöggel szembeni befogó}}{\text{szög melletti befogó}}=\frac ab$$
$$\operatorname{ctg}\alpha=\frac{\text{szög melletti befogó}}{\text{szöggel szembeni befogó}}=\frac ba$$

## Nevezetes hegyesszögek szögfüggvényei

*Ábra: egy egyenlő szárú derékszögű háromszög (befogói $1$, $1$, átfogója $\sqrt 2$, szögei $45°$), és egy fél szabályos háromszög (befogói $1$, $\sqrt 3$, átfogója $2$, szögei $30°$ és $60°$).*

| | 30° | 45° | 60° |
|---|---|---|---|
| $\sin$ | $1/2$ | $\sqrt 2/2$ | $\sqrt 3/2$ |
| $\cos$ | $\sqrt 3/2$ | $\sqrt 2/2$ | $1/2$ |
| $\operatorname{tg}$ | $\sqrt 3/3$ | $1$ | $\sqrt 3$ |
| $\operatorname{ctg}$ | $\sqrt 3$ | $1$ | $\sqrt 3/3$ |

## Szögek ívmértéke

- Szögek mérésére ívmértéket (radián) is használhatunk.
- **1 radián** nagyságú az $r$ sugarú kör azon központi szöge, amelyhez tartozó ív hossza $r$.
- Néhány nevezetes szög ívmértéke:
  - $360°=2\pi$ (rad)
  - $180°=\pi$
  - $90°=\pi/2$
  - $45°=\pi/4$
  - $60°=\pi/3$
  - $30°=\pi/6$
- Az ívmérték lehetővé teszi, hogy a szögeket valós számokkal mérjük.

## Forgásszögek szinusza, koszinusza

Legyen $\underline e$ egységnyi hosszúságú helyvektor, amelyet $\alpha$ szöggel elforgatunk az $\underline i$ vektorhoz képest. Ekkor $\underline e$ végpontjának koordinátái:
$$P(x,y)=(\cos\alpha,\sin\alpha)$$

*Ábra: egységkör; az $\underline i$ vektortól $\alpha$ szöggel elforgatott $\underline e$ helyvektor végpontja $P(x,y)$. A pozitív forgásirány az óramutató járásával ellentétes.*

A definícióból következően:
$$-1\le\sin\alpha\le 1\quad\text{és}\quad-1\le\cos\alpha\le 1$$
$$\sin\alpha=\sin(\alpha+k\cdot360°),\quad\text{ill.}\quad\sin\alpha=\sin(\alpha+2k\pi),\quad k\in\mathbb{Z}$$
$$\cos\alpha=\cos(\alpha+k\cdot360°),\quad\text{ill.}\quad\cos\alpha=\cos(\alpha+2k\pi),\quad k\in\mathbb{Z}$$

## Forgásszögek szinusza, koszinusza (folyt.)

Az előjelek az egyes síknegyedekben:
- **$\sin$:** I. negyed: $+$, II. negyed: $+$, III. negyed: $-$, IV. negyed: $-$
- **$\cos$:** I. negyed: $+$, II. negyed: $-$, III. negyed: $-$, IV. negyed: $+$

Forgásszögek és a megfelelő hegyesszög kapcsolata:

| I. | II. | III. | IV. |
|---|---|---|---|
| $\alpha$ (°) | $180°-\alpha$ | $\alpha-180°$ | $360°-\alpha$ |
| $\alpha$ (rad) | $\pi-\alpha$ | $\alpha-\pi$ | $2\pi-\alpha$ |

Példa: Mennyi $\cos 240°$?

$\alpha=240°\Rightarrow$ III. síknegyed $\Rightarrow$ a megfelelő hegyesszög: $\beta=\alpha-180°=60°\Rightarrow$ III. síknegyedben a koszinusz negatív, így:
$$\cos 240°=-\cos 60°=-1/2$$

## Szinusz, koszinusz szögfv.-ek azonosságai

Tetszőleges $\alpha$ szögre igazak:

Pótszögekre:
$$\sin\alpha=\cos(\pi/2-\alpha)$$
$$\cos\alpha=\sin(\pi/2-\alpha)$$

Kiegészítő szögekre:
$$\sin\alpha=\sin(\pi-\alpha)$$
$$\cos\alpha=-\cos(\pi-\alpha)$$

Negatív szögekre:
$$\sin(-\alpha)=-\sin\alpha$$
$$\cos(-\alpha)=\cos\alpha$$

Pitagoraszi összefüggés: $\sin^2\alpha+\cos^2\alpha=1$

Továbbá:
$$\sin(\alpha+\pi)=-\sin\alpha$$
$$\cos(\alpha+\pi)=-\cos\alpha$$
$$\sin(\alpha+\pi/2)=\cos\alpha$$
$$\cos(\alpha+\pi/2)=-\sin\alpha$$

## Forgásszögek tangense és kotangense

Tangens:
$$\operatorname{tg}\alpha=\frac{\sin\alpha}{\cos\alpha},\quad\alpha\ne\frac\pi2+k\pi,\quad k\in\mathbb{Z}$$

Kotangens:
$$\operatorname{ctg}\alpha=\frac{\cos\alpha}{\sin\alpha},\quad\alpha\ne k\pi,\quad k\in\mathbb{Z}$$

Azonosságok: minden lehetséges értelmezésre:
$$\operatorname{tg}\alpha=\frac{1}{\operatorname{ctg}\alpha}$$
$$\operatorname{tg}(\alpha+\pi)=\operatorname{tg}\alpha$$
$$\operatorname{ctg}(\alpha+\pi)=\operatorname{ctg}\alpha$$
$$\operatorname{tg}(-\alpha)=-\operatorname{tg}\alpha$$
$$\operatorname{ctg}(-\alpha)=-\operatorname{ctg}\alpha$$
$$\operatorname{tg}\left(\alpha+\frac\pi2\right)=-\operatorname{ctg}\alpha$$

## További összefüggések

$$\sin(\alpha\pm\beta)=\sin\alpha\cdot\cos\beta\pm\cos\alpha\cdot\sin\beta$$
$$\cos(\alpha\pm\beta)=\cos\alpha\cdot\cos\beta\mp\sin\alpha\cdot\sin\beta$$
$$\operatorname{tg}(\alpha\pm\beta)=\frac{\operatorname{tg}\alpha\pm\operatorname{tg}\beta}{1\mp\operatorname{tg}\alpha\cdot\operatorname{tg}\beta}$$
$$\sin(2\alpha)=2\sin\alpha\cdot\cos\alpha$$
$$\cos(2\alpha)=\cos^2\alpha-\sin^2\alpha$$
$$\operatorname{tg}(2\alpha)=\frac{2\operatorname{tg}\alpha}{1-\operatorname{tg}^2\alpha}$$
