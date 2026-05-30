import { useMemo, useState } from 'react'
import { motion } from 'motion/react'
import { Section } from '../components/Section'
import { Slider } from '../components/Controls'
import { Tex } from '../components/Math'
import { useLang } from '../context/LangContext'
import {
  quadNaive,
  quadStable,
  quadExact,
  roundSig,
  expm1Taylor,
  powerOverFactorial,
  summation,
} from '../lib/arithmetic'

type Tab = 'quad' | 'trig' | 'exp' | 'fact' | 'sum'

export function FloatingConsequences() {
  const { t } = useLang()
  const [tab, setTab] = useState<Tab>('quad')

  const tabs: { id: Tab; key: Parameters<typeof t>[0] }[] = [
    { id: 'quad', key: 'fc.tab.quad' },
    { id: 'trig', key: 'fc.tab.trig' },
    { id: 'exp', key: 'fc.tab.exp' },
    { id: 'fact', key: 'fc.tab.fact' },
    { id: 'sum', key: 'fc.tab.sum' },
  ]

  return (
    <Section id="fc" tag={t('fc.tag')} title={t('fc.title')} lead={t('fc.lead')}>
      <div className="tabs">
        {tabs.map((tb) => (
          <button key={tb.id} className={tab === tb.id ? 'active' : ''} onClick={() => setTab(tb.id)}>
            {t(tb.key)}
          </button>
        ))}
      </div>
      <motion.div key={tab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        {tab === 'quad' && <QuadTab />}
        {tab === 'trig' && <TrigTab />}
        {tab === 'exp' && <ExpTab />}
        {tab === 'fact' && <FactTab />}
        {tab === 'sum' && <SumTab />}
      </motion.div>
    </Section>
  )
}

function Compare({
  desc,
  naiveLabel,
  naiveVal,
  stableLabel,
  stableVal,
  extra,
}: {
  desc: string
  naiveLabel: string
  naiveVal: string
  stableLabel: string
  stableVal: string
  extra?: React.ReactNode
}) {
  return (
    <div className="split" style={{ marginTop: 0 }}>
      <div className="prose">
        <p>{desc}</p>
        {extra}
      </div>
      <div className="panel">
        <div style={{ display: 'grid', gap: 12 }}>
          <div style={{ border: '1px solid var(--bad)', borderRadius: 12, padding: 14, background: 'var(--bad-soft)' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--bad)', fontWeight: 700, marginBottom: 4 }}>✗ {naiveLabel}</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '1.05rem', fontWeight: 700 }}>{naiveVal}</div>
          </div>
          <div style={{ border: '1px solid var(--good)', borderRadius: 12, padding: 14, background: 'var(--good-soft)' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--good)', fontWeight: 700, marginBottom: 4 }}>✓ {stableLabel}</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '1.05rem', fontWeight: 700 }}>{stableVal}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function QuadTab() {
  const { t } = useLang()
  const naive = quadNaive(1, -83.5, 1.5)
  const stable = quadStable(1, -83.5, 1.5)
  const exact = quadExact(1, -83.5, 1.5)
  const relNaive = Math.abs((naive.x2 - exact.x2) / exact.x2)
  const relStable = Math.abs((stable.x2 - exact.x2) / exact.x2)
  return (
    <Compare
      desc={t('fc.quad.desc')}
      naiveLabel={`${t('fc.quad.naive')} — x₂`}
      naiveVal={`${naive.x2}  (δ ≈ ${relNaive.toExponential(2)})`}
      stableLabel={`${t('fc.quad.stable')} — x₂`}
      stableVal={`${stable.x2}  (δ ≈ ${relStable.toExponential(2)})`}
      extra={
        <>
          <Tex block>{`x^2 - 83.5x + 1.5 = 0`}</Tex>
          <div className="callout">
            {t('fc.quad.exact')}: x₂ = {exact.x2.toPrecision(8)}
          </div>
        </>
      }
    />
  )
}

function TrigTab() {
  const { t } = useLang()
  const [x, setX] = useState(0.78)
  const exact = Math.cos(2 * x)
  // limited (4-digit) precision emulation
  const c2 = roundSig(Math.cos(x) ** 2, 4)
  const s2 = roundSig(Math.sin(x) ** 2, 4)
  const naive = roundSig(c2 - s2, 4)
  const stable = roundSig(Math.cos(2 * x), 4)
  const errN = Math.abs(naive - exact)
  const errS = Math.abs(stable - exact)
  return (
    <Compare
      desc={t('fc.trig.desc')}
      naiveLabel={t('fc.trig.naive')}
      naiveVal={`${naive}  (|err| ${errN.toExponential(2)})`}
      stableLabel={t('fc.trig.stable')}
      stableVal={`${stable}  (|err| ${errS.toExponential(2)})`}
      extra={
        <>
          <Tex block>{`\\cos^2x - \\sin^2x = \\cos 2x`}</Tex>
          <Slider
            label={t('fc.trig.angle')}
            value={x}
            min={0}
            max={1.5}
            step={0.01}
            onChange={(v) => setX(Number(v.toFixed(3)))}
            format={(v) => `${v.toFixed(2)} (π/4≈0.785)`}
          />
        </>
      }
    />
  )
}

function ExpTab() {
  const { t } = useLang()
  const [exp, setExp] = useState(-3) // x = 10^exp
  const [terms, setTerms] = useState(4)
  const x = Math.pow(10, exp)
  const truth = Math.expm1(x)
  const naive = roundSig(roundSig(Math.exp(x), 7) - 1, 7)
  const taylor = roundSig(expm1Taylor(x, terms), 7)
  const relN = truth === 0 ? 0 : Math.abs((naive - truth) / truth)
  const relT = truth === 0 ? 0 : Math.abs((taylor - truth) / truth)
  return (
    <Compare
      desc={t('fc.exp.desc')}
      naiveLabel={t('fc.exp.naive')}
      naiveVal={`${naive.toExponential(6)}  (δ ${relN.toExponential(2)})`}
      stableLabel={t('fc.exp.stable')}
      stableVal={`${taylor.toExponential(6)}  (δ ${relT.toExponential(2)})`}
      extra={
        <>
          <Tex block>{`e^x - 1 = x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots`}</Tex>
          <Slider label="x = 10ᵏ, k" value={exp} min={-9} max={-1} step={1} onChange={(v) => setExp(Math.round(v))} format={(v) => `10^${v}`} />
          <Slider label={t('fc.exp.terms')} value={terms} min={1} max={10} step={1} onChange={(v) => setTerms(Math.round(v))} />
        </>
      }
    />
  )
}

function FactTab() {
  const { t } = useLang()
  const [n, setN] = useState(50)
  const a = 20
  const SINGLE_MAX = 3.4e38
  const powOverflow = Math.pow(a, n) > SINGLE_MAX
  const stable = powerOverFactorial(a, n)
  return (
    <Compare
      desc={t('fc.fact.desc')}
      naiveLabel={t('fc.fact.naive')}
      naiveVal={powOverflow ? `aⁿ = ${Math.pow(a, n).toExponential(1)} → ${t('fc.fact.overflow')}` : Math.pow(a, n).toExponential(2)}
      stableLabel={t('fc.fact.stable')}
      stableVal={`${t('fc.fact.result')} = ${stable.toPrecision(7)}`}
      extra={
        <>
          <Tex block>{`\\frac{20^{n}}{n!} = \\frac{20}{n}\\cdot\\frac{20}{n-1}\\cdots\\frac{20}{1}`}</Tex>
          <Slider label="n" value={n} min={10} max={60} step={1} onChange={(v) => setN(Math.round(v))} />
          <div className="callout warn" style={{ marginBottom: 0 }}>
            single-precision max ≈ 3.4·10³⁸
          </div>
        </>
      }
    />
  )
}

function SumTab() {
  const { t } = useLang()
  const [largeFirst, setLargeFirst] = useState(true)
  const big = 10.0
  const small = 0.002
  const count = 10
  const steps = useMemo(() => summation(big, small, count, largeFirst), [largeFirst])
  const final = steps[steps.length - 1].running
  return (
    <div className="split" style={{ marginTop: 0 }}>
      <div className="prose">
        <p>{t('fc.sum.desc')}</p>
        <Tex block>{`10.00 + \\underbrace{0.002 + \\cdots + 0.002}_{10}`}</Tex>
        <div className="seg" role="group" style={{ marginTop: 4 }}>
          <button className={largeFirst ? 'active' : ''} onClick={() => setLargeFirst(true)}>
            {t('fc.sum.leftright')}
          </button>
          <button className={!largeFirst ? 'active' : ''} onClick={() => setLargeFirst(false)}>
            {t('fc.sum.increasing')}
          </button>
        </div>
      </div>
      <div className="panel">
        <h3>{t('fc.sum.runningTotal')}</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {steps.map((s, i) => (
            <motion.div
              key={`${largeFirst}-${i}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="readout"
              style={{ margin: 0, padding: '6px 10px' }}
            >
              {s.running.toFixed(3)}
            </motion.div>
          ))}
        </div>
        <div className="readout" style={{ marginTop: 14 }}>
          <span className="k">{t('fc.sum.final')} = </span>
          <motion.span key={final} className={`v ${final < 10.02 ? 'bad' : 'good'}`} initial={{ scale: 1.3 }} animate={{ scale: 1 }}>
            {final.toFixed(3)}
          </motion.span>
          <span className="k"> (exact = 10.020)</span>
        </div>
      </div>
    </div>
  )
}
