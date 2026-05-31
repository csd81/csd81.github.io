import type { QuizQuestion } from '../../../shared/ui/Quiz';

/**
 * Multiple-choice questions for Chapter 6 (Interpolation), parsed from the
 * shared quiz bank. Keyed by lesson slug:
 *   lagrange ← quiz.md §6.1 Lagrange Interpolation
 *   newton   ← quiz.md §6.2 Divided Differences + §6.3 Newton's Divided Difference Formula
 *   hermite  ← quiz.md §6.4 Hermite Interpolation
 *   spline   ← quiz.md §6.5 Spline Interpolation
 * Bilingual: formula-only options are identical in both languages.
 */
const QUIZZES: Record<string, QuizQuestion[]> = {
  lagrange: [
    {
      id: 'q-lagrange-1',
      prompt: {
        en: 'In two-variable Lagrange interpolation, the polynomial L_{n,m}(x,y) is:',
        hu: 'A kétváltozós Lagrange-interpolációban az L_{n,m}(x,y) polinom:',
      },
      options: [
        { en: '∑_i ∑_j z_ij l_i(x) l̃_j(y)', hu: '∑_i ∑_j z_ij l_i(x) l̃_j(y)' },
        { en: 'the product L_n(x) L_m(y)', hu: 'az L_n(x) L_m(y) szorzat' },
        { en: 'a sum of polynomials in x only', hu: 'csak x-ben vett polinomok összege' },
        { en: 'a single monomial xⁿ yᵐ', hu: 'egyetlen xⁿ yᵐ monom' },
      ],
      answer: 0,
      explanation: {
        en: 'It is the double sum of node values times the tensor product of 1-D basis polynomials.',
        hu: 'Ez a csomóponti értékek kettős összege az 1D-s bázispolinomok tenzorszorzatával.',
      },
    },
    {
      id: 'q-lagrange-2',
      prompt: {
        en: 'The Lagrange interpolating polynomial L_n(x) can be written as:',
        hu: 'Az L_n(x) Lagrange-interpolációs polinom felírható:',
      },
      options: [
        { en: 'L_n(x) = ∑_k y_k l_k(x)', hu: 'L_n(x) = ∑_k y_k l_k(x)' },
        { en: 'L_n(x) = y₀ + y₁x + … + y_n xⁿ', hu: 'L_n(x) = y₀ + y₁x + … + y_n xⁿ' },
        { en: 'L_n(x) = ∏_k y_k l_k(x)', hu: 'L_n(x) = ∏_k y_k l_k(x)' },
        { en: 'L_n(x) = ∫_a^b y(t) l_k(t) dt', hu: 'L_n(x) = ∫_a^b y(t) l_k(t) dt' },
      ],
      answer: 0,
      explanation: {
        en: 'It is the sum of node values weighted by the Lagrange basis polynomials.',
        hu: 'A csomóponti értékek összege a Lagrange-bázispolinomokkal súlyozva.',
      },
    },
    {
      id: 'q-lagrange-3',
      prompt: {
        en: 'For equidistant nodes with spacing h and x ∈ (x_k, x_{k+1}), the product ∏|x − x_i| satisfies:',
        hu: 'h lépésközű ekvidisztáns csomópontoknál és x ∈ (x_k, x_{k+1}) esetén a ∏|x − x_i| szorzatra teljesül:',
      },
      options: [
        { en: '≤ (hⁿ⁺¹/4) · n!', hu: '≤ (hⁿ⁺¹/4) · n!' },
        { en: '≤ (hⁿ⁺¹/2) · n!', hu: '≤ (hⁿ⁺¹/2) · n!' },
        { en: '≤ (hⁿ⁺¹/8) · n!', hu: '≤ (hⁿ⁺¹/8) · n!' },
        { en: '≤ hⁿ⁺¹', hu: '≤ hⁿ⁺¹' },
      ],
      answer: 0,
      explanation: {
        en: 'The standard equidistant bound is hⁿ⁺¹·n!/4.',
        hu: 'A szokásos ekvidisztáns korlát hⁿ⁺¹·n!/4.',
      },
    },
    {
      id: 'q-lagrange-4',
      prompt: {
        en: 'The Lagrange basis polynomial l_k(x) satisfies:',
        hu: 'Az l_k(x) Lagrange-bázispolinomra teljesül:',
      },
      options: [
        { en: 'l_k(x_k) = 1 and l_k(x_i) = 0 for all i ≠ k', hu: 'l_k(x_k) = 1 és l_k(x_i) = 0 minden i ≠ k-ra' },
        { en: 'l_k(x_i) = 1 for all i', hu: 'l_k(x_i) = 1 minden i-re' },
        { en: 'l_k(x) = xᵏ', hu: 'l_k(x) = xᵏ' },
        { en: 'l_k(x_i) = 0 for all i', hu: 'l_k(x_i) = 0 minden i-re' },
      ],
      answer: 0,
      explanation: {
        en: 'The basis polynomials are cardinal: l_k(x_i) = δ_{ki}.',
        hu: 'A bázispolinomok kardinálisak: l_k(x_i) = δ_{ki}.',
      },
    },
    {
      id: 'q-lagrange-5',
      prompt: {
        en: 'The remainder term in the degree-n Lagrange interpolation error formula is:',
        hu: 'Az n-edfokú Lagrange-interpoláció hibaképletében a maradéktag:',
      },
      options: [
        { en: '[f⁽ⁿ⁾(ξ)/n!] ∏(x − x_i)', hu: '[f⁽ⁿ⁾(ξ)/n!] ∏(x − x_i)' },
        { en: '[f⁽ⁿ⁺¹⁾(ξ)/(n+1)!] ∏(x − x_i)', hu: '[f⁽ⁿ⁺¹⁾(ξ)/(n+1)!] ∏(x − x_i)' },
        { en: "f''(ξ)(x − x₀)", hu: "f''(ξ)(x − x₀)" },
        { en: "f'(ξ) ∏(x − x_i)", hu: "f'(ξ) ∏(x − x_i)" },
      ],
      answer: 1,
      explanation: {
        en: 'The error uses the (n+1)-th derivative divided by (n+1)!.',
        hu: 'A hiba az (n+1)-edik deriváltat használja (n+1)!-sal osztva.',
      },
    },
  ],
  newton: [
    // §6.2 Divided Differences
    {
      id: 'q-newton-1',
      prompt: {
        en: 'Which is the explicit formula for f[x₀,…,x_n]?',
        hu: 'Melyik az f[x₀,…,x_n] explicit képlete?',
      },
      options: [
        { en: 'f⁽ⁿ⁾(x₀)/n!', hu: 'f⁽ⁿ⁾(x₀)/n!' },
        { en: '∑_i f(x_i) / ∏_{j≠i}(x_i − x_j)', hu: '∑_i f(x_i) / ∏_{j≠i}(x_i − x_j)' },
        { en: '∑_i f(x_i)(x_i − x₀)', hu: '∑_i f(x_i)(x_i − x₀)' },
        { en: '∏_i f(x_i)', hu: '∏_i f(x_i)' },
      ],
      answer: 1,
      explanation: {
        en: 'The divided difference equals ∑_i f(x_i) / ∏_{j≠i}(x_i − x_j).',
        hu: 'Az osztott differencia egyenlő ∑_i f(x_i) / ∏_{j≠i}(x_i − x_j)-vel.',
      },
    },
    {
      id: 'q-newton-2',
      prompt: {
        en: 'The recursive definition of the n-th divided difference is:',
        hu: 'Az n-edik osztott differencia rekurzív definíciója:',
      },
      options: [
        { en: 'f[x₀,…,x_n] = ∑_k f[x_k]', hu: 'f[x₀,…,x_n] = ∑_k f[x_k]' },
        { en: 'f[x₀,…,x_n] = f[x₁,…,x_n] − f[x₀,…,x_{n−1}]', hu: 'f[x₀,…,x_n] = f[x₁,…,x_n] − f[x₀,…,x_{n−1}]' },
        { en: 'f[x₀,…,x_n] = (f[x₁,…,x_n] − f[x₀,…,x_{n−1}]) / (x_n − x₀)', hu: 'f[x₀,…,x_n] = (f[x₁,…,x_n] − f[x₀,…,x_{n−1}]) / (x_n − x₀)' },
        { en: 'f[x₀,…,x_n] = (x_n − x₀) f[x₁,…,x_{n−1}]', hu: 'f[x₀,…,x_n] = (x_n − x₀) f[x₁,…,x_{n−1}]' },
      ],
      answer: 2,
      explanation: {
        en: 'Each higher divided difference is the difference of two lower ones over (x_n − x₀).',
        hu: 'Minden magasabb osztott differencia két alacsonyabb különbsége (x_n − x₀)-val osztva.',
      },
    },
    {
      id: 'q-newton-3',
      prompt: {
        en: 'Which statement best applies to computing divided differences?',
        hu: 'Melyik állítás illik legjobban az osztott differenciák kiszámítására?',
      },
      options: [
        { en: 'In practice the recursive definition is preferred', hu: 'A gyakorlatban a rekurzív definíciót részesítjük előnyben' },
        { en: "We compute them using Taylor's approximation", hu: 'Taylor-közelítéssel számoljuk őket' },
        { en: 'The explicit formula needs fewer operations', hu: 'Az explicit képlet kevesebb műveletet igényel' },
        { en: 'We prefer the explicit formula', hu: 'Az explicit képletet részesítjük előnyben' },
      ],
      answer: 0,
      explanation: {
        en: 'The recursive table is more efficient and numerically convenient than the explicit sum.',
        hu: 'A rekurzív tábla hatékonyabb és numerikusan kényelmesebb az explicit összegnél.',
      },
    },
    {
      id: 'q-newton-4',
      prompt: {
        en: 'The first divided difference of f at nodes x₀, x₁ is:',
        hu: 'Az f első osztott differenciája az x₀, x₁ csomópontokban:',
      },
      options: [
        { en: '(f(x₁) − f(x₀)) / (x₁ − x₀)', hu: '(f(x₁) − f(x₀)) / (x₁ − x₀)' },
        { en: '(f(x₀) − f(x₁)) / (x₁ − x₀)', hu: '(f(x₀) − f(x₁)) / (x₁ − x₀)' },
        { en: 'f(x₁) − f(x₀)', hu: 'f(x₁) − f(x₀)' },
        { en: "(f'(x₁) − f'(x₀)) / (x₁ − x₀)", hu: "(f'(x₁) − f'(x₀)) / (x₁ − x₀)" },
      ],
      answer: 0,
      explanation: {
        en: 'f[x₀,x₁] = (f(x₁) − f(x₀)) / (x₁ − x₀).',
        hu: 'f[x₀,x₁] = (f(x₁) − f(x₀)) / (x₁ − x₀).',
      },
    },
    {
      id: 'q-newton-5',
      prompt: {
        en: 'The zeroth divided difference of f at a node x₀ is defined as:',
        hu: 'Az f nulladik osztott differenciája egy x₀ csomópontban a definíció szerint:',
      },
      options: [
        { en: '0', hu: '0' },
        { en: "f'(x₀)", hu: "f'(x₀)" },
        { en: 'x₀', hu: 'x₀' },
        { en: 'f(x₀)', hu: 'f(x₀)' },
      ],
      answer: 3,
      explanation: {
        en: 'f[x₀] = f(x₀).',
        hu: 'f[x₀] = f(x₀).',
      },
    },
    // §6.3 Newton's Divided Difference Formula
    {
      id: 'q-newton-6',
      prompt: {
        en: 'The Newton interpolating polynomial of degree n is:',
        hu: 'Az n-edfokú Newton-interpolációs polinom:',
      },
      options: [
        { en: 'L_n(x) = ∑_k y_k xᵏ', hu: 'L_n(x) = ∑_k y_k xᵏ' },
        { en: 'L_n(x) = ∏_k (x − x_k)', hu: 'L_n(x) = ∏_k (x − x_k)' },
        { en: 'L_n(x) = f[x₀]xⁿ + … + f[x_n]', hu: 'L_n(x) = f[x₀]xⁿ + … + f[x_n]' },
        { en: 'L_n(x) = ∑_k f[x₀,…,x_k](x − x₀)…(x − x_{k−1})', hu: 'L_n(x) = ∑_k f[x₀,…,x_k](x − x₀)…(x − x_{k−1})' },
      ],
      answer: 3,
      explanation: {
        en: 'Newton form sums divided-difference coefficients times the nested node products.',
        hu: 'A Newton-alak az osztott differencia együtthatókat összegzi a beágyazott csomóponti szorzatokkal.',
      },
    },
    {
      id: 'q-newton-7',
      prompt: {
        en: 'After adding a new data point (x_{n+1}, y_{n+1}), the updated polynomial is:',
        hu: 'Egy új (x_{n+1}, y_{n+1}) adatpont hozzáadása után a frissített polinom:',
      },
      options: [
        { en: 'L_{n+1}(x) = f[x₀,…,x_n](x − x_{n+1})', hu: 'L_{n+1}(x) = f[x₀,…,x_n](x − x_{n+1})' },
        { en: 'No change: L_{n+1}(x) = L_n(x)', hu: 'Nincs változás: L_{n+1}(x) = L_n(x)' },
        { en: 'L_{n+1}(x) = L_n(x) + f[x₀,…,x_{n+1}](x − x₀)…(x − x_n)', hu: 'L_{n+1}(x) = L_n(x) + f[x₀,…,x_{n+1}](x − x₀)…(x − x_n)' },
        { en: 'L_{n+1}(x) = L_n(x) + f[x_{n+1}]', hu: 'L_{n+1}(x) = L_n(x) + f[x_{n+1}]' },
      ],
      answer: 2,
      explanation: {
        en: 'Newton form only appends one new term, leaving previous coefficients intact.',
        hu: 'A Newton-alak csak egy új tagot fűz hozzá, a korábbi együtthatókat érintetlenül hagyva.',
      },
    },
    {
      id: 'q-newton-8',
      prompt: {
        en: 'The factor (x − x₀)(x − x₁)…(x − x_{k−1}) in the Newton polynomial has degree:',
        hu: 'A Newton-polinom (x − x₀)(x − x₁)…(x − x_{k−1}) tényezőjének foka:',
      },
      options: [
        { en: 'n − k', hu: 'n − k' },
        { en: 'k', hu: 'k' },
        { en: 'n', hu: 'n' },
        { en: 'k − 1', hu: 'k − 1' },
      ],
      answer: 1,
      explanation: {
        en: 'There are k linear factors, so the degree is k.',
        hu: 'k darab lineáris tényező van, így a fok k.',
      },
    },
    {
      id: 'q-newton-9',
      prompt: {
        en: 'Building the divided-difference table for n+1 points has arithmetic complexity:',
        hu: 'Az osztott differencia tábla felépítése n+1 pontra milyen aritmetikai komplexitású:',
      },
      options: [
        { en: 'O(n)', hu: 'O(n)' },
        { en: 'O(2ⁿ)', hu: 'O(2ⁿ)' },
        { en: 'O(n²)', hu: 'O(n²)' },
        { en: 'O(n³)', hu: 'O(n³)' },
      ],
      answer: 2,
      explanation: {
        en: 'The triangular table requires O(n²) operations.',
        hu: 'A háromszögtábla O(n²) műveletet igényel.',
      },
    },
    {
      id: 'q-newton-10',
      prompt: {
        en: 'The main computational advantage of the Newton form over the Lagrange form is that it:',
        hu: 'A Newton-alak fő számítási előnye a Lagrange-alakkal szemben, hogy:',
      },
      options: [
        { en: 'allows easy addition of new mesh points without recomputing all coefficients', hu: 'lehetővé teszi új csomópontok könnyű hozzáadását az összes együttható újraszámítása nélkül' },
        { en: 'avoids any division operations', hu: 'elkerül minden osztási műveletet' },
        { en: 'minimizes rounding errors', hu: 'minimalizálja a kerekítési hibákat' },
        { en: 'produces lower-degree polynomials', hu: 'alacsonyabb fokú polinomokat állít elő' },
      ],
      answer: 0,
      explanation: {
        en: 'New points add a single term, reusing all earlier coefficients.',
        hu: 'Új pontok egyetlen tagot adnak hozzá, újrahasználva az összes korábbi együtthatót.',
      },
    },
  ],
  hermite: [
    {
      id: 'q-hermite-1',
      prompt: {
        en: 'Hermite interpolation is especially appropriate when:',
        hu: 'A Hermite-interpoláció különösen akkor megfelelő, ha:',
      },
      options: [
        { en: 'the nodes are equally spaced', hu: 'a csomópontok egyenletesen helyezkednek el' },
        { en: 'only function values are known', hu: 'csak függvényértékek ismertek' },
        { en: 'second derivatives are known everywhere', hu: 'a második deriváltak mindenhol ismertek' },
        { en: 'derivative values at the nodes are also known', hu: 'a csomópontokban a deriváltértékek is ismertek' },
      ],
      answer: 3,
      explanation: {
        en: 'Hermite matches both function and derivative values at the nodes.',
        hu: 'A Hermite a csomópontokban a függvény- és a deriváltértékeket is illeszti.',
      },
    },
    {
      id: 'q-hermite-2',
      prompt: {
        en: 'When building the Hermite divided-difference table, each node x_i is:',
        hu: 'A Hermite osztott differencia tábla felépítésekor minden x_i csomópontot:',
      },
      options: [
        { en: 'listed three times', hu: 'háromszor írunk fel' },
        { en: 'omitted in even columns', hu: 'kihagyunk a páros oszlopokban' },
        { en: 'listed once', hu: 'egyszer írunk fel' },
        { en: 'listed twice in consecutive rows', hu: 'kétszer írunk fel egymást követő sorokban' },
      ],
      answer: 3,
      explanation: {
        en: 'Each node is duplicated so the derivative condition enters the table.',
        hu: 'Minden csomópontot megkettőzünk, hogy a deriváltfeltétel bekerüljön a táblába.',
      },
    },
    {
      id: 'q-hermite-3',
      prompt: {
        en: 'For n+1 nodes, the Hermite problem specifies how many interpolation conditions?',
        hu: 'n+1 csomópontra a Hermite-feladat hány interpolációs feltételt ad meg?',
      },
      options: [
        { en: '2n', hu: '2n' },
        { en: 'n + 1', hu: 'n + 1' },
        { en: 'n²', hu: 'n²' },
        { en: '2(n + 1)', hu: '2(n + 1)' },
      ],
      answer: 3,
      explanation: {
        en: 'A value and a derivative at each of n+1 nodes give 2(n+1) conditions.',
        hu: 'n+1 csomópont mindegyikében egy érték és egy derivált 2(n+1) feltételt ad.',
      },
    },
    {
      id: 'q-hermite-4',
      prompt: {
        en: 'The degree of the Hermite polynomial for n+1 mesh points is at most:',
        hu: 'A Hermite-polinom foka n+1 csomópontra legfeljebb:',
      },
      options: [
        { en: 'n + 1', hu: 'n + 1' },
        { en: '2n', hu: '2n' },
        { en: '2n + 1', hu: '2n + 1' },
        { en: 'n', hu: 'n' },
      ],
      answer: 2,
      explanation: {
        en: '2(n+1) conditions determine a polynomial of degree at most 2n+1.',
        hu: 'A 2(n+1) feltétel legfeljebb 2n+1 fokú polinomot határoz meg.',
      },
    },
    {
      id: 'q-hermite-5',
      prompt: {
        en: 'The extended divided difference f[x₀, x₀] is defined to be:',
        hu: 'A kiterjesztett f[x₀, x₀] osztott differencia definíció szerint:',
      },
      options: [
        { en: "f'(x₀)", hu: "f'(x₀)" },
        { en: 'f(x₀)', hu: 'f(x₀)' },
        { en: '0', hu: '0' },
        { en: "f''(x₀)", hu: "f''(x₀)" },
      ],
      answer: 0,
      explanation: {
        en: 'As x₁ → x₀ the first divided difference tends to f′(x₀).',
        hu: 'Ahogy x₁ → x₀, az első osztott differencia f′(x₀)-hoz tart.',
      },
    },
  ],
  spline: [
    {
      id: 'q-spline-1',
      prompt: {
        en: "A cubic spline with S''(x₀) = 0 and S''(x_n) = 0 is called a:",
        hu: "Az S''(x₀) = 0 és S''(x_n) = 0 feltételű köbös spline neve:",
      },
      options: [
        { en: 'natural spline', hu: 'természetes spline' },
        { en: 'clamped spline', hu: 'rögzített (clamped) spline' },
        { en: 'quadratic spline', hu: 'kvadratikus spline' },
        { en: 'not-a-knot spline', hu: 'not-a-knot spline' },
      ],
      answer: 0,
      explanation: {
        en: 'Zero second derivatives at the endpoints define the natural cubic spline.',
        hu: 'A végpontokban nulla második deriváltak definiálják a természetes köbös spline-t.',
      },
    },
    {
      id: 'q-spline-2',
      prompt: {
        en: 'A spline function S of degree k on [a,b] is a function that:',
        hu: 'Egy k-adfokú S spline-függvény [a,b]-n olyan függvény, amely:',
      },
      options: [
        { en: 'is piecewise polynomial of degree ≤ k and belongs to Cᵏ⁻¹[a,b]', hu: 'szakaszonként legfeljebb k-adfokú polinom, és Cᵏ⁻¹[a,b]-beli' },
        { en: 'satisfies S⁽ᵏ⁾(x) = 0 everywhere', hu: 'mindenhol teljesíti S⁽ᵏ⁾(x) = 0-t' },
        { en: 'has continuous first derivative only', hu: 'csak folytonos első deriválttal rendelkezik' },
        { en: 'is a polynomial of degree k on the whole interval', hu: 'a teljes intervallumon k-adfokú polinom' },
      ],
      answer: 0,
      explanation: {
        en: 'A degree-k spline is piecewise polynomial and globally Cᵏ⁻¹.',
        hu: 'Egy k-adfokú spline szakaszonként polinom és globálisan Cᵏ⁻¹.',
      },
    },
    {
      id: 'q-spline-3',
      prompt: {
        en: 'Compared with high-degree global polynomial interpolation, cubic splines are preferred because they:',
        hu: 'A magas fokú globális polinominterpolációhoz képest a köbös spline-okat azért részesítjük előnyben, mert:',
      },
      options: [
        { en: 'use fewer sub-intervals', hu: 'kevesebb részintervallumot használnak' },
        { en: 'minimize oscillation while achieving smoothness', hu: 'minimalizálják az oszcillációt, miközben simaságot érnek el' },
        { en: 'require no continuity across nodes', hu: 'nem igényelnek folytonosságot a csomópontokon' },
        { en: 'never oscillate', hu: 'sosem oszcillálnak' },
      ],
      answer: 1,
      explanation: {
        en: 'Cubic splines avoid Runge-type oscillation while staying smooth (C²).',
        hu: 'A köbös spline-ok elkerülik a Runge-féle oszcillációt, miközben simák (C²) maradnak.',
      },
    },
    {
      id: 'q-spline-4',
      prompt: {
        en: 'The relation b_i = Δy_i/Δx_i − (2c_i + c_{i+1})/3 · Δx_i expresses:',
        hu: 'A b_i = Δy_i/Δx_i − (2c_i + c_{i+1})/3 · Δx_i összefüggés kifejezi:',
      },
      options: [
        { en: 'the natural boundary condition', hu: 'a természetes peremfeltételt' },
        { en: 'the slope of the piece S_i at x_i', hu: 'az S_i szakasz meredekségét x_i-ben' },
        { en: "continuity of S'' at x_i", hu: "S'' folytonosságát x_i-ben" },
        { en: 'the difference equation for c_i', hu: 'a c_i-re vonatkozó differenciaegyenletet' },
      ],
      answer: 1,
      explanation: {
        en: 'This formula gives the linear coefficient (slope at x_i) of the spline piece.',
        hu: 'Ez a képlet a spline-szakasz lineáris együtthatóját (x_i-beli meredekségét) adja.',
      },
    },
    {
      id: 'q-spline-5',
      prompt: {
        en: "The unknown second-derivative parameters c_i = S''(x_i)/2 are found by solving a linear system whose matrix is:",
        hu: "Az ismeretlen c_i = S''(x_i)/2 második derivált paramétereket egy olyan lineáris rendszer megoldásával kapjuk, melynek mátrixa:",
      },
      options: [
        { en: 'diagonal', hu: 'diagonális' },
        { en: 'upper-triangular', hu: 'felső háromszög' },
        { en: 'tridiagonal', hu: 'tridiagonális' },
        { en: 'dense and symmetric', hu: 'teli és szimmetrikus' },
      ],
      answer: 2,
      explanation: {
        en: 'Continuity conditions yield a tridiagonal system for the c_i.',
        hu: 'A folytonossági feltételek tridiagonális rendszert adnak a c_i-kre.',
      },
    },
  ],
};

export function getQuiz(sectionId: string): QuizQuestion[] {
  return QUIZZES[sectionId] ?? [];
}
