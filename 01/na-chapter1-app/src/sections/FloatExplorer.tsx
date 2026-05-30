import { useState } from 'react'
import { motion } from 'motion/react'
import { Section } from '../components/Section'
import { Segmented } from '../components/Controls'
import { Tex } from '../components/Math'
import { useLang } from '../context/LangContext'
import { decodeIeee } from '../lib/arithmetic'

type Fmt = 'single' | 'double'

function encode(value: number, fmt: Fmt): number[] {
  const buf = new ArrayBuffer(8)
  const dv = new DataView(buf)
  const bits: number[] = []
  if (fmt === 'single') {
    dv.setFloat32(0, value)
    const u = dv.getUint32(0)
    for (let i = 31; i >= 0; i--) bits.push((u >>> i) & 1)
  } else {
    dv.setFloat64(0, value)
    const hi = dv.getUint32(0)
    const lo = dv.getUint32(4)
    for (let i = 31; i >= 0; i--) bits.push((hi >>> i) & 1)
    for (let i = 31; i >= 0; i--) bits.push((lo >>> i) & 1)
  }
  return bits
}

export function FloatExplorer() {
  const { t } = useLang()
  const [fmt, setFmt] = useState<Fmt>('single')
  const [bits, setBits] = useState<number[]>(() => encode(1, 'single'))

  const expBits = fmt === 'single' ? 8 : 11
  const bias = Math.pow(2, expBits - 1) - 1

  const setFormat = (f: Fmt) => {
    setFmt(f)
    setBits(encode(1, f))
  }
  const flip = (i: number) => setBits((b) => b.map((v, j) => (j === i ? (v ? 0 : 1) : v)))
  const preset = (v: number) => setBits(encode(v, fmt))

  const info = decodeIeee(bits, expBits)

  const cls = (i: number) => {
    if (i === 0) return 'sign'
    if (i <= expBits) return 'exp'
    return 'man'
  }

  const valueStr =
    typeof info.value === 'string'
      ? info.value
      : Number.isInteger(info.value) && Math.abs(info.value) < 1e15
        ? info.value.toString()
        : info.value.toPrecision(fmt === 'single' ? 8 : 12)

  return (
    <Section id="flt" tag={t('flt.tag')} title={t('flt.title')} lead={t('flt.lead')}>
      <div className="split">
        <div className="prose">
          <p>{t('flt.p1')}</p>
          <Tex block>{`x = (-1)^s \\cdot (1.m_1m_2\\ldots)_2 \\cdot 2^{e-${bias}}`}</Tex>
          <div className="control-row">
            <label>{t('flt.preset')}</label>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              <button className="btn" onClick={() => preset(0)}>0</button>
              <button className="btn" onClick={() => preset(1)}>1</button>
              <button className="btn" onClick={() => preset(Math.PI)}>π</button>
              <button className="btn" onClick={() => preset(0.1)}>0.1</button>
              <button className="btn" onClick={() => preset(Infinity)}>Inf</button>
              <button className="btn" onClick={() => preset(NaN)}>NaN</button>
            </div>
          </div>
        </div>

        <div className="panel">
          <Segmented
            label={t('flt.precisionLabel')}
            value={fmt}
            options={[
              { value: 'single', label: t('flt.single') },
              { value: 'double', label: t('flt.double') },
            ]}
            onChange={setFormat}
          />
          <div style={{ display: 'flex', gap: 14, marginBottom: 4, flexWrap: 'wrap' }}>
            <span className="bit-group-label" style={{ color: 'var(--bad)' }}>● {t('flt.sign')}</span>
            <span className="bit-group-label" style={{ color: 'var(--warn)' }}>● {t('flt.exponent')}</span>
            <span className="bit-group-label" style={{ color: 'var(--good)' }}>● {t('flt.mantissa')}</span>
          </div>
          <div className="bits" style={{ gap: 3 }}>
            {bits.map((b, i) => (
              <motion.button
                key={i}
                className={`bit ${cls(i)} ${b ? 'on' : ''}`}
                style={{ width: fmt === 'double' ? 22 : 26, height: 30, fontSize: '0.78rem' }}
                onClick={() => flip(i)}
                whileTap={{ scale: 0.8 }}
              >
                {b}
              </motion.button>
            ))}
          </div>
          <div className="readout">
            <div>
              <span className="k">{t('flt.value')} = </span>
              <motion.span
                key={valueStr}
                className={`v ${info.category === 'inf' || info.category === 'nan' ? 'warn' : ''}`}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1 }}
              >
                {valueStr}
              </motion.span>
            </div>
            <div>
              <span className="k">{t('flt.kval')} = </span>
              <span className="v">{info.k === null ? '—' : info.k}</span>
            </div>
            <div>
              <span className="k">type: </span>
              <span className="pill warn" style={{ textTransform: 'capitalize' }}>
                {info.category}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
