# Egyenletek, egyenlőtlenségek

<!-- OCR of "egyenletek_egyenlotlensegek.pdf" (előadás-diák, összeállította: dr. Leitold Adrien, egyetemi docens). 7 dia. -->

*Összeállította: dr. Leitold Adrien, egyetemi docens*

## Egyenletek: alapfogalmak

- **Értelmezési tartomány:** az ismeretlenek azon értékeinek halmaza, melyekre az egyenletben szereplő műveletek elvégezhetőek.
- **Alaphalmaz:** az értelmezési tartomány azon részhalmaza, melyre az egyenletet vizsgáljuk, ahol a megoldásokat keressük.
- **Azonosság:** olyan egyenlet, amelynél az alaphalmaz minden eleme megoldás (az alaphalmaz megegyezik a megoldáshalmazzal).

## Egyenletek: megoldási módszerek

- Grafikus megoldás
- Algebrai megoldás
- Megoldás az értelmezési tartomány vizsgálatával
- Megoldás az értékkészlet vizsgálatával
- Megoldás szorzattá alakítással … stb

## Egyenletek algebrai megoldása

Az egyenletek átalakításai:
- **ekvivalens átalakítások:** nem változik az alaphalmaz és a megoldáshalmaz.
- **alaphalmazt szűkítő átalakítások:** megoldást veszíthetünk; az ilyen átalakításokat lehetőleg kerüljük, illetve az egyenletek átalakításánál figyeljünk arra, hogy nem szűkül-e az alaphalmaz.
- **alaphalmazt bővítő átalakítások:** hamis megoldásokat kaphatunk, ezeket ellenőrzéssel kell kiszűrni.

## Másodfokú egyenlet

Általános alak: $ax^2+bx+c=0,\ \text{ahol }a\ne 0$

A megoldások száma — diszkrimináns: $D=b^2-4ac$
- Ha $D>0$, akkor két valós megoldás van (az egyenletnek 2 darab egyszeres gyöke van).
- Ha $D=0$, akkor egy valós megoldás van (az egyenletnek 1 darab kétszeres gyöke van).
- Ha $D<0$, akkor nincs valós megoldás (az egyenletnek nincs valós gyöke).

Ha van valós megoldás, akkor az a megoldóképlettel számolható:
$$x_{1,2}=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$$

### Másodfokú egyenlet (folyt.)

Ha $D\ge 0$:

A gyöktényezős alak: $a\cdot(x-x_1)\cdot(x-x_2)=0$

Gyökök és együtthatók közti összefüggések (Viète-formulák):
$$x_1+x_2=-\frac{b}{a}$$
$$x_1\cdot x_2=\frac{c}{a}$$

## Egyenlőtlenségek

- A megoldási módszerek és elvek megegyeznek az egyenletével, arra kell azonban figyelni, hogy ha negatív számmal szorzunk vagy osztunk, akkor az egyenlőtlenség iránya megfordul.
- Ismeretlent tartalmazó kifejezéssel való szorzás vagy osztás esetén esetszétválasztást kell alkalmazni.
- Elkerülhetjük az ismeretlent tartalmazó kifejezéssel való szorzást vagy osztást, ha nullára rendezzük az egyenlőtlenséget és előjelvizsgálatot végzünk.
- Az egyenlőtlenségek megoldáshalmaza általában végtelen, ezért a megoldás-ellenőrzésre általában nincs lehetőség, így nagyon fontos minden szükséges kikötést megtenni a megoldás során.
