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
