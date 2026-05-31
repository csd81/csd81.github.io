import { useState } from 'react'
import { Section } from '../components/Section'
import { useLang } from '../context/LangContext'

interface Entry {
  term: { en: string; hu: string }
  def: { en: string; hu: string }
}

// Key terms of §1.1, after Hartung's "Introduction to Numerical Analysis".
const GLOSSARY: Entry[] = [
  {
    term: { en: 'Numerical analysis', hu: 'Numerikus analízis' },
    def: {
      en: 'The study of exact or approximate solutions of mathematical problems using basic arithmetic operations (+, −, ×, ÷). It answers quantitative questions.',
      hu: 'Matematikai feladatok pontos vagy közelítő megoldásának vizsgálata alapműveletekkel (+, −, ×, ÷). Mennyiségi kérdésekre válaszol.',
    },
  },
  {
    term: { en: 'Inherited error', hu: 'Öröklött hiba' },
    def: {
      en: 'Error originating before computation — from modelling and from data; the sum of modelling error and measurement error.',
      hu: 'A számítás előtt keletkező hiba — a modellezésből és az adatokból; a modellhiba és a mérési hiba összege.',
    },
  },
  {
    term: { en: 'Modelling error', hu: 'Modellhiba' },
    def: {
      en: 'The discrepancy from simplifying physical reality into an idealised mathematical model.',
      hu: 'A fizikai valóság idealizált matematikai modellé egyszerűsítéséből adódó eltérés.',
    },
  },
  {
    term: { en: 'Measurement error', hu: 'Mérési hiba' },
    def: {
      en: 'Error from using approximate, measured values for the model’s parameters or initial data instead of the true ones.',
      hu: 'A modell paramétereinek vagy kezdeti adatainak mért, közelítő értékéből (a valódi helyett) eredő hiba.',
    },
  },
  {
    term: { en: 'Computational error', hu: 'Számítási hiba' },
    def: {
      en: 'Error generated during the numerical solution itself; the sum of truncation error and rounding error.',
      hu: 'Maga a numerikus megoldás során keletkező hiba; a képlethiba és a kerekítési hiba összege.',
    },
  },
  {
    term: { en: 'Truncation error', hu: 'Képlethiba (csonkítási hiba)' },
    def: {
      en: 'The error from replacing an exact expression with an approximate formula — e.g. a finite Taylor polynomial for sin x.',
      hu: 'Egy pontos kifejezés közelítő képlettel való helyettesítéséből adódó hiba — pl. véges Taylor-polinom a sin x-re.',
    },
  },
  {
    term: { en: 'Rounding error', hu: 'Kerekítési hiba' },
    def: {
      en: 'Error from storing real numbers and arithmetic results with finite digit accuracy in a computer.',
      hu: 'A valós számok és a műveletek eredményének véges jegypontosságú tárolásából eredő hiba a gépben.',
    },
  },
  {
    term: { en: 'Stability (problem) · well-conditioned', hu: 'Stabilitás (feladat) · jól kondicionált' },
    def: {
      en: 'A problem where a small change in the input parameters produces only a small change in the solution.',
      hu: 'Olyan feladat, ahol a bemenő paraméterek kis változása csak kis változást okoz a megoldásban.',
    },
  },
  {
    term: { en: 'Ill-conditioned (unstable problem)', hu: 'Rosszul kondicionált (instabil feladat)' },
    def: {
      en: 'A problem where a minor change in a parameter leads to a large change in the solution.',
      hu: 'Olyan feladat, ahol egy paraméter kis változása nagy változást eredményez a megoldásban.',
    },
  },
  {
    term: { en: 'Stability (algorithm)', hu: 'Stabilitás (algoritmus)' },
    def: {
      en: 'A method is stable if rounding errors do not significantly deviate the computed result from the true value; otherwise it is unstable.',
      hu: 'Egy módszer stabil, ha a kerekítési hibák nem térítik el jelentősen a számolt eredményt a valódi értéktől; különben instabil.',
    },
  },
  {
    term: { en: 'Algebraically equivalent', hu: 'Algebrailag ekvivalens' },
    def: {
      en: 'Formulas or recursions that give the same theoretical result but can behave very differently when computed in finite precision.',
      hu: 'Képletek vagy rekurziók, amelyek ugyanazt az elméleti eredményt adják, de véges pontossággal számolva nagyon eltérően viselkedhetnek.',
    },
  },
  {
    term: { en: 'Time complexity (cost)', hu: 'Műveletigény (időbonyolultság)' },
    def: {
      en: 'The number of arithmetic operations an algorithm needs. Multiplications/divisions are counted separately as they cost more than additions.',
      hu: 'Az algoritmus által igényelt aritmetikai műveletek száma. A szorzást/osztást külön számoljuk, mert drágább az összeadásnál.',
    },
  },
  {
    term: { en: 'Space complexity', hu: 'Tárigény (helyigény)' },
    def: {
      en: 'The worst-case amount of memory storage an algorithm needs — critical for large data such as 10000×10000 matrices.',
      hu: 'Az algoritmus által a legrosszabb esetben igényelt memória — nagy adatoknál (pl. 10000×10000-es mátrix) kritikus.',
    },
  },
  {
    term: { en: 'Horner’s method', hu: 'Horner-módszer' },
    def: {
      en: 'An efficient polynomial-evaluation scheme that needs only n multiplications and n additions for a degree-n polynomial.',
      hu: 'Hatékony polinom-kiértékelés, amely n-edfokú polinomhoz csak n szorzást és n összeadást igényel.',
    },
  },

  // §1.2 — computer representation of integers and reals
  {
    term: { en: 'Sign bit', hu: 'Előjelbit' },
    def: {
      en: 'The (usually leftmost) bit indicating whether a number is positive (0) or negative (1).',
      hu: 'A (rendszerint bal szélső) bit, amely jelzi, hogy a szám pozitív (0) vagy negatív (1).',
    },
  },
  {
    term: { en: 'Two’s complement', hu: 'Kettes komplemens' },
    def: {
      en: 'A signed-integer encoding where a negative I is stored as 2ᵐ + I, turning subtraction into addition and giving zero a single form.',
      hu: 'Előjeles egész kódolás, ahol a negatív I tárolt alakja 2ᵐ + I; a kivonás összeadássá válik, és a nullának egyetlen alakja van.',
    },
  },
  {
    term: { en: 'Floating-point number (normal form)', hu: 'Lebegőpontos szám (normál alak)' },
    def: {
      en: 'A real number written as ± mantissa · bᵏ with 1 ≤ mantissa < b — a signed mantissa and an exponent.',
      hu: 'Valós szám ± mantissza · bᵏ alakban, ahol 1 ≤ mantissza < b — előjeles mantissza és kitevő.',
    },
  },
  {
    term: { en: 'Mantissa', hu: 'Mantissza' },
    def: {
      en: 'The significant-digits part m of a number in normal form, with 1 ≤ m < b.',
      hu: 'A normál alakú szám értékes jegyeit tartalmazó m rész, ahol 1 ≤ m < b.',
    },
  },
  {
    term: { en: 'Exponent', hu: 'Kitevő' },
    def: {
      en: 'The power k to which the base b is raised in the normal form of a real number.',
      hu: 'Az a k hatvány, amelyre a b alapot emeljük a valós szám normál alakjában.',
    },
  },
  {
    term: { en: 'Shifted exponent (bias)', hu: 'Eltolt kitevő (bias)' },
    def: {
      en: 'A constant (e.g. 127 for single precision) added to the true exponent k so the stored exponent e = k + bias is non-negative.',
      hu: 'A valódi k kitevőhöz adott állandó (pl. 127 egyszeres pontosságnál), hogy a tárolt e = k + bias kitevő nemnegatív legyen.',
    },
  },
  {
    term: { en: 'Machine number', hu: 'Gépi szám' },
    def: {
      en: 'A real number that the given floating-point format can store exactly, with no representation error.',
      hu: 'Olyan valós szám, amelyet az adott lebegőpontos formátum pontosan, tárolási hiba nélkül tárol.',
    },
  },
  {
    term: { en: 'Machine epsilon (εₘ)', hu: 'Gépi epszilon (εₘ)' },
    def: {
      en: 'The gap between 1 and the next larger machine number; the smallest power of 2 with 1 + εₘ > 1 (2⁻²³ single, 2⁻⁵² double).',
      hu: 'Az 1 és a következő nagyobb gépi szám közötti rés; a legkisebb 2-hatvány, amelyre 1 + εₘ > 1 (2⁻²³ egyszeres, 2⁻⁵² dupla).',
    },
  },
  {
    term: { en: 'Single / double precision', hu: 'Egyszeres / dupla pontosság' },
    def: {
      en: 'IEEE 754 formats: single = 32 bits (1 sign, 8 exponent, 23 mantissa); double = 64 bits (1, 11, 52).',
      hu: 'IEEE 754 formátumok: egyszeres = 32 bit (1 előjel, 8 kitevő, 23 mantissza); dupla = 64 bit (1, 11, 52).',
    },
  },
  {
    term: { en: 'Rounding vs chopping', hu: 'Kerekítés vs levágás' },
    def: {
      en: 'Two ways to define fl(x): rounding picks the nearest machine number; chopping discards the mantissa bits that do not fit.',
      hu: 'Az fl(x) két megadási módja: a kerekítés a legközelebbi gépi számot választja; a levágás eldobja a be nem férő mantisszabiteket.',
    },
  },
  {
    term: { en: 'fl(x) and unit roundoff (u)', hu: 'fl(x) és egységnyi kerekítés (u)' },
    def: {
      en: 'fl(x) is the stored machine number; fl(x) = x(1+δ) with |δ| ≤ u, where u = ½·b¹⁻ᵗ for rounding (= εₘ/2).',
      hu: 'Az fl(x) a tárolt gépi szám; fl(x) = x(1+δ), |δ| ≤ u, ahol u = ½·b¹⁻ᵗ kerekítésnél (= εₘ/2).',
    },
  },
  {
    term: { en: 'NaN / Inf', hu: 'NaN / Inf' },
    def: {
      en: 'Special IEEE values: Inf for overflow/division by zero, NaN (“not a number”) for undefined results like 0/0 or √(−1).',
      hu: 'Speciális IEEE értékek: Inf a túlcsorduláshoz/nullával osztáshoz, NaN („nem szám”) a meghatározatlan eredményekhez, pl. 0/0 vagy √(−1).',
    },
  },
  {
    term: { en: 'Absolute error', hu: 'Abszolút hiba' },
    def: {
      en: 'The difference |x − x̃| between an exact value x and its approximation x̃.',
      hu: 'Az x pontos érték és x̃ közelítése közötti |x − x̃| különbség.',
    },
  },
  {
    term: { en: 'Relative error', hu: 'Relatív hiba' },
    def: {
      en: 'The absolute error scaled by the magnitude: |x − x̃| / |x|; x̃ is exact in n digits when it is ≤ ½·10¹⁻ⁿ.',
      hu: 'Az abszolút hiba a nagysághoz viszonyítva: |x − x̃| / |x|; x̃ n jegyre pontos, ha ez ≤ ½·10¹⁻ⁿ.',
    },
  },
  // §1.3 — error analysis
  {
    term: { en: 'Error analysis', hu: 'Hibaanalízis' },
    def: {
      en: 'The study of how the errors in the input data propagate through arithmetic operations to the result, and how to bound the error of the output.',
      hu: 'Annak vizsgálata, hogyan terjednek a bemenő adatok hibái a műveleteken át az eredménybe, és hogyan korlátozható a kimenet hibája.',
    },
  },
  {
    term: { en: 'Absolute error bound (Δₓ)', hu: 'Abszolút hibakorlát (Δₓ)' },
    def: {
      en: 'A known number Δₓ guaranteeing |x − x̃| ≤ Δₓ. It is an upper bound for the (usually unknown) absolute error.',
      hu: 'Ismert Δₓ szám, amelyre |x − x̃| ≤ Δₓ teljesül. A (rendszerint ismeretlen) abszolút hiba felső korlátja.',
    },
  },
  {
    term: { en: 'Relative error bound (δₓ)', hu: 'Relatív hibakorlát (δₓ)' },
    def: {
      en: 'δₓ := Δₓ / |x| (for x ≠ 0): an upper bound for the relative error |x − x̃| / |x|.',
      hu: 'δₓ := Δₓ / |x| (x ≠ 0 esetén): a relatív hiba |x − x̃| / |x| felső korlátja.',
    },
  },
  {
    term: { en: 'Error propagation', hu: 'Hibaterjedés' },
    def: {
      en: 'Each operation has its own bound: Δ_{x±y} = Δₓ + Δᵧ; δ_{x+y} = max{δₓ, δᵧ}; for ×, ÷ the relative bounds add: δ_{xy} ≈ δₓ + δᵧ and δ_{x/y} ≈ (δₓ + δᵧ)/(1 − δᵧ).',
      hu: 'Minden műveletnek saját korlátja van: Δ_{x±y} = Δₓ + Δᵧ; δ_{x+y} = max{δₓ, δᵧ}; szorzásnál/osztásnál a relatív korlátok összeadódnak: δ_{xy} ≈ δₓ + δᵧ és δ_{x/y} ≈ (δₓ + δᵧ)/(1 − δᵧ).',
    },
  },
  {
    term: { en: 'Loss of significance', hu: 'Értékes jegyek elvesztése' },
    def: {
      en: 'Subtracting two nearly equal numbers (x ≈ y): the factor x/(x−y) blows up, so the relative error bound δ_{x−y} can become huge even when δₓ, δᵧ are tiny. The classic cause of catastrophic cancellation.',
      hu: 'Két közel egyenlő szám kivonása (x ≈ y): az x/(x−y) tényező felrobban, így a δ_{x−y} relatív hibakorlát hatalmas lehet, pedig δₓ, δᵧ apró. A katasztrofális kioltás klasszikus oka.',
    },
  },
  {
    term: { en: 'Triangle inequality', hu: 'Háromszög-egyenlőtlenség' },
    def: {
      en: '|a + b| ≤ |a| + |b|. The main tool for deriving error bounds — it lets the error of a sum be bounded by the sum of the errors.',
      hu: '|a + b| ≤ |a| + |b|. A hibakorlátok levezetésének fő eszköze — segítségével az összeg hibája a hibák összegével korlátozható.',
    },
  },
  {
    term: { en: 'Worst-case estimate', hu: 'Legrosszabb eset becslése' },
    def: {
      en: 'The error bounds are pessimistic: they assume all individual errors line up in the same (worst) direction. The actual error is usually smaller.',
      hu: 'A hibakorlátok pesszimisták: feltételezik, hogy az egyes hibák mind ugyanabba a (legrosszabb) irányba mutatnak. A tényleges hiba rendszerint kisebb.',
    },
  },
  {
    term: { en: 'Exact (significant) digit', hu: 'Pontos (értékes) jegy' },
    def: {
      en: 'x̃ approximates x to n digits if the relative error is ≤ ½·10¹⁻ⁿ — used to count how many leading digits of x̃ are trustworthy.',
      hu: 'x̃ akkor közelíti x-et n jegyre, ha a relatív hiba ≤ ½·10¹⁻ⁿ — ezzel számolható, x̃ hány vezető jegye megbízható.',
    },
  },
  // §1.4 — consequences of floating-point arithmetic
  {
    term: { en: '4-digit arithmetic', hu: '4-jegyű aritmetika' },
    def: {
      en: 'A simplified model of machine math in which every result is rounded to four significant digits — a hand-computable way to expose rounding-error accumulation.',
      hu: 'A gépi számolás egyszerűsített modellje, amelyben minden eredményt négy értékes jegyre kerekítünk — kézzel is követhetően mutatja a kerekítési hiba felhalmozódását.',
    },
  },
  {
    term: { en: 'Catastrophic cancellation', hu: 'Katasztrofális kioltás' },
    def: {
      en: 'The extreme form of loss of significance: subtracting two nearly equal numbers cancels the leading digits, so the result is dominated by their rounding errors. Fixed by algebraic rewrite, Taylor series, etc.',
      hu: 'Az értékes jegyek elvesztésének szélsőséges esete: két közel egyenlő szám kivonásakor a vezető jegyek kioltják egymást, így az eredményt a kerekítési hibáik uralják. Algebrai átírással, Taylor-sorral stb. orvosolható.',
    },
  },
  {
    term: { en: 'Numerical (non-)commutativity', hu: 'Numerikus (nem-)kommutativitás' },
    def: {
      en: 'In exact math a + b = b + a, but in floating point the order of a long sum changes the result — small terms vanish if added after a large running total. Sum smallest-first to minimise this.',
      hu: 'A pontos matematikában a + b = b + a, de lebegőpontosan egy hosszú összeg sorrendje megváltoztatja az eredményt — a kis tagok eltűnnek, ha nagy részösszeg után adjuk hozzá őket. Növekvő sorrendben összegezve minimalizálható.',
    },
  },
  {
    term: { en: 'Overflow', hu: 'Túlcsordulás' },
    def: {
      en: 'When an intermediate or final value exceeds the largest representable machine number (≈ 3.4·10³⁸ in single precision). aⁿ or n! can overflow even when the final ratio aⁿ/n! is tiny — interleave the factors to stay in range.',
      hu: 'Amikor egy köztes vagy végeredmény meghaladja a legnagyobb ábrázolható gépi számot (egyszeres pontosságban ≈ 3,4·10³⁸). aⁿ vagy n! túlcsordulhat akkor is, ha a végső aⁿ/n! hányados parányi — a tényezők összefésülésével tartomány­ban maradunk.',
    },
  },
  {
    term: { en: 'Taylor series (as a numerical tool)', hu: 'Taylor-sor (numerikus eszközként)' },
    def: {
      en: 'When no algebraic identity removes a dangerous subtraction (e.g. eˣ − 1 near 0), expand the function as x + x²/2! + x³/3! + … and use a finite number of terms — the cancelling constant is removed analytically.',
      hu: 'Ha nincs algebrai azonosság a veszélyes kivonás kiküszöbölésére (pl. eˣ − 1 a 0 közelében), fejtsük a függvényt x + x²/2! + x³/3! + … alakba, és véges sok tagot használjunk — a kioltó konstans analitikusan eltűnik.',
    },
  },
]

export function Glossary() {
  const { t, lang } = useLang()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <Section id="glossary" tag={t('gl.tag')} title={t('gl.title')} lead={t('gl.lead')}>
      <div className="prose">
        {GLOSSARY.map((e, i) => {
          const isOpen = open === i
          return (
            <div
              key={i}
              className="callout"
              style={{ marginBottom: 8, cursor: 'pointer' }}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                <strong>{e.term[lang]}</strong>
                <span style={{ color: 'var(--text-soft)' }}>{isOpen ? '−' : '+'}</span>
              </div>
              {isOpen && <p style={{ margin: '8px 0 0' }}>{e.def[lang]}</p>}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
