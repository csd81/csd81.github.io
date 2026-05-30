/* Shared numeric engine. Every demo pulls from here so the on-screen
   numbers reproduce the chapter's worked examples. */

// ---- 4-significant-digit (decimal) arithmetic -------------------------------

/** Round to `sig` significant decimal digits (the chapter's "4-digit arithmetic"). */
export function roundSig(x: number, sig = 4): number {
  if (x === 0 || !Number.isFinite(x)) return x
  const d = Math.ceil(Math.log10(Math.abs(x)))
  const power = sig - d
  const mag = Math.pow(10, power)
  return Math.round(x * mag) / mag
}

/** Format a number to at most `sig` significant digits, trimming trailing zeros. */
export function fmtSig(x: number, sig = 4): string {
  if (!Number.isFinite(x)) return x > 0 ? '∞' : x < 0 ? '−∞' : 'NaN'
  if (x === 0) return '0'
  return Number(x.toPrecision(sig)).toString()
}

// ---- machine epsilon --------------------------------------------------------

export const EPS_SINGLE = Math.pow(2, -23) // ≈ 1.1921e-7
export const EPS_DOUBLE = Math.pow(2, -52) // ≈ 2.2204e-16, also Number.EPSILON

// ---- fl(x): chopping vs rounding to a 23-bit mantissa (single precision) ----

export type FlMode = 'chop' | 'round'

export interface FlResult {
  value: number
  mantissaBits: string // 23 fractional bits actually stored
  exponent: number // unbiased k
  binaryNormal: string // 1.m1m2... (first ~28 fractional bits) for display
  absError: number
}

/** Emulate single-precision fl(x) for x > 0 with explicit chopping/rounding. */
export function flSingle(x: number, mode: FlMode): FlResult {
  if (x === 0) return { value: 0, mantissaBits: '0'.repeat(23), exponent: 0, binaryNormal: '0', absError: 0 }
  const sign = Math.sign(x)
  const ax = Math.abs(x)
  const k = Math.floor(Math.log2(ax))
  const frac = ax / Math.pow(2, k) - 1 // fractional part of mantissa, in [0,1)

  // exact fractional bits (compute generously for display)
  let bits = ''
  let r = frac
  for (let i = 0; i < 30; i++) {
    r *= 2
    if (r >= 1) {
      bits += '1'
      r -= 1
    } else {
      bits += '0'
    }
  }

  let stored = bits.slice(0, 23)
  if (mode === 'round') {
    // round half-to-even on the 24th bit and beyond
    const rest = bits.slice(23)
    const roundUp =
      rest[0] === '1' && (rest.slice(1).includes('1') || stored[22] === '1')
    if (roundUp) {
      stored = addOne(stored)
      if (stored.length > 23) {
        // mantissa overflowed -> exponent bumps; recompute simply
        stored = '0'.repeat(23)
        return finalize(sign, k + 1, stored, x)
      }
    }
  }
  return finalize(sign, k, stored, x)
}

function finalize(sign: number, k: number, stored: string, x: number): FlResult {
  let mantissa = 1
  for (let i = 0; i < stored.length; i++) {
    if (stored[i] === '1') mantissa += Math.pow(2, -(i + 1))
  }
  const value = sign * mantissa * Math.pow(2, k)
  const fullExact = (Math.abs(x) / Math.pow(2, k) - 1)
  let disp = '1.'
  let r = fullExact
  for (let i = 0; i < 28; i++) {
    r *= 2
    if (r >= 1) {
      disp += '1'
      r -= 1
    } else disp += '0'
  }
  return { value, mantissaBits: stored, exponent: k, binaryNormal: disp, absError: Math.abs(x - value) }
}

function addOne(bits: string): string {
  const arr = bits.split('')
  let i = arr.length - 1
  while (i >= 0) {
    if (arr[i] === '0') {
      arr[i] = '1'
      return arr.join('')
    }
    arr[i] = '0'
    i--
  }
  return '1' + arr.join('') // overflow -> longer than 23
}

// ---- the three recursions (Example 1.3) -------------------------------------

export interface SeqRow {
  n: number
  x: number
  y: number
  z: number
  errY: number
  errZ: number
}

/**
 * Generate xₙ, yₙ, zₙ. All equal 1/3ⁿ exactly; rounding each step to the given
 * relative precision reproduces the divergence of yₙ and (explosively) zₙ.
 */
export function sequences(N: number, eps: number): SeqRow[] {
  const rows: SeqRow[] = []
  const rnd = (v: number) => roundToRelEps(v, eps)

  let xPrev = 1
  let y0 = 1,
    y1 = 1 / 3
  let z0 = 1,
    z1 = 1 / 3

  for (let n = 2; n <= N; n++) {
    const x = rnd((1 / 3) * xPrev)
    xPrev = x

    const y = rnd(2 * y1 - (5 / 9) * y0)
    y0 = y1
    y1 = y

    const z = rnd((13 / 3) * z1 - (4 / 3) * z0)
    z0 = z1
    z1 = z

    const tru = Math.pow(1 / 3, n)
    rows.push({ n, x, y, z, errY: Math.abs(y - tru), errZ: Math.abs(z - tru) })
  }
  return rows
}

/** Round value to a relative precision ~eps (emulates limited mantissa). */
function roundToRelEps(v: number, eps: number): number {
  if (v === 0) return 0
  const k = Math.floor(Math.log2(Math.abs(v)))
  const quantum = Math.pow(2, k) * eps
  return Math.round(v / quantum) * quantum
}

// ---- Horner vs naïve evaluation (Example 1.4 / Alg 1.5) ---------------------

export interface EvalCount {
  value: number
  mults: number
  adds: number
}

/** Naïve polynomial evaluation using powers (counts each power as repeated mults). */
export function evalNaive(coeffs: number[], x: number): EvalCount {
  // coeffs[0] is the constant term a0 ... coeffs[n] is aₙ
  const n = coeffs.length - 1
  let value = 0
  let mults = 0
  let adds = 0
  for (let i = 0; i <= n; i++) {
    // x^i needs i multiplications; aᵢ·x^i is one more
    if (i === 0) {
      value += coeffs[0]
    } else {
      let p = 1
      for (let j = 0; j < i; j++) {
        p *= x
        mults++
      }
      value += coeffs[i] * p
      mults++ // aᵢ * x^i
      adds++
    }
  }
  return { value, mults, adds }
}

/** Horner's method: n multiplications, n additions. */
export function evalHorner(coeffs: number[], x: number): EvalCount {
  const n = coeffs.length - 1
  let value = coeffs[n]
  let mults = 0
  let adds = 0
  for (let i = n - 1; i >= 0; i--) {
    value = value * x + coeffs[i]
    mults++
    adds++
  }
  return { value, mults, adds }
}

// ---- integer representations ------------------------------------------------

export function signMagnitudeValue(bits: number[]): number {
  const m = bits.length
  let mag = 0
  for (let i = 1; i < m; i++) mag = mag * 2 + bits[i]
  return bits[0] === 1 ? -mag : mag
}

export function twosComplementValue(bits: number[]): number {
  const m = bits.length
  let val = 0
  for (let i = 0; i < m; i++) val = val * 2 + bits[i]
  if (bits[0] === 1) val -= Math.pow(2, m)
  return val
}

// ---- IEEE 754 decode (single & double) --------------------------------------

export interface IeeeInfo {
  value: number | 'Inf' | '-Inf' | 'NaN'
  k: number | null // unbiased exponent (null for special)
  category: 'zero' | 'normal' | 'subnormal' | 'inf' | 'nan'
}

export function decodeIeee(bits: number[], expBits: number): IeeeInfo {
  const total = bits.length
  const manBits = total - 1 - expBits
  const bias = Math.pow(2, expBits - 1) - 1
  const sign = bits[0] === 1 ? -1 : 1

  let e = 0
  for (let i = 1; i <= expBits; i++) e = e * 2 + bits[i]

  let frac = 0
  for (let i = 0; i < manBits; i++) frac += bits[1 + expBits + i] * Math.pow(2, -(i + 1))

  const expAllOnes = e === Math.pow(2, expBits) - 1
  if (expAllOnes) {
    if (frac === 0) return { value: sign === 1 ? 'Inf' : '-Inf', k: null, category: 'inf' }
    return { value: 'NaN', k: null, category: 'nan' }
  }
  if (e === 0) {
    if (frac === 0) return { value: 0 * sign, k: null, category: 'zero' }
    const k = 1 - bias
    return { value: sign * frac * Math.pow(2, k), k, category: 'subnormal' }
  }
  const k = e - bias
  return { value: sign * (1 + frac) * Math.pow(2, k), k, category: 'normal' }
}

// ---- absolute / relative error & exact digits -------------------------------

export interface ErrorInfo {
  abs: number
  rel: number
  exactDigits: number
}

export function errorInfo(exact: number, approx: number): ErrorInfo {
  const abs = Math.abs(exact - approx)
  const rel = exact === 0 ? Infinity : abs / Math.abs(exact)
  // largest n with rel <= 0.5 * 10^(1-n)
  let exactDigits = 0
  if (rel === 0) exactDigits = Infinity
  else if (Number.isFinite(rel) && rel < 0.5) {
    exactDigits = Math.floor(1 - Math.log10(2 * rel))
    if (exactDigits < 0) exactDigits = 0
  }
  return { abs, rel, exactDigits }
}

// ---- error-propagation bounds (Theorems 1.14–1.18) --------------------------

export type Op = 'add' | 'sub' | 'mul' | 'div'

export interface PropResult {
  exact: number
  approx: number
  absBound: number
  relBound: number
  actualRel: number
  lossOfSignificance: boolean
}

export function propagate(
  x: number,
  y: number,
  dx: number,
  dy: number,
  op: Op,
): PropResult {
  const dxRel = dx / Math.abs(x)
  const dyRel = dy / Math.abs(y)
  let exact: number, approx: number, absBound: number, relBound: number
  const xa = x // approximations sit within the bounds; use worst-ish actual
  const xt = x + dx
  const yt = y + dy
  let loss = false

  switch (op) {
    case 'add':
      exact = x + y
      approx = xt + yt
      absBound = dx + dy
      relBound = Math.max(dxRel, dyRel)
      break
    case 'sub':
      exact = x - y
      approx = xt - yt
      absBound = dx + dy
      relBound = (Math.abs(x) / Math.abs(x - y)) * dxRel + (Math.abs(y) / Math.abs(x - y)) * dyRel
      loss = relBound > 5 * Math.max(dxRel, dyRel) && Math.abs(x - y) < 0.25 * Math.max(Math.abs(x), Math.abs(y))
      break
    case 'mul':
      exact = x * y
      approx = xt * yt
      absBound = Math.abs(x) * dy + Math.abs(y) * dx + dx * dy
      relBound = dxRel + dyRel + dxRel * dyRel
      break
    case 'div':
      exact = x / y
      approx = xt / yt
      absBound = (Math.abs(x) * dy + Math.abs(y) * dx) / (Math.abs(y) * (Math.abs(y) - dy))
      relBound = (dxRel + dyRel) / (1 - dyRel)
      break
  }
  void xa
  const actualRel = exact === 0 ? Infinity : Math.abs(exact - approx) / Math.abs(exact)
  return { exact, approx, absBound, relBound, actualRel, lossOfSignificance: loss }
}

// ---- quadratic formula, naïve vs stabilized (Example 1.19/1.20) -------------

export interface QuadResult {
  x1: number
  x2: number
}

/** Naïve roots in 4-digit arithmetic. */
export function quadNaive(a: number, b: number, c: number, sig = 4): QuadResult {
  const disc = roundSig(roundSig(b * b, sig) - roundSig(4 * a * c, sig), sig)
  const root = roundSig(Math.sqrt(disc), sig)
  const x1 = roundSig(roundSig(-b + root, sig) / (2 * a), sig)
  const x2 = roundSig(roundSig(-b - root, sig) / (2 * a), sig)
  return { x1, x2 }
}

/** Stabilized small-magnitude root via rationalization, 4-digit arithmetic. */
export function quadStable(a: number, b: number, c: number, sig = 4): QuadResult {
  const disc = roundSig(roundSig(b * b, sig) - roundSig(4 * a * c, sig), sig)
  const root = roundSig(Math.sqrt(disc), sig)
  // for b>0, the "+" root keeps full precision; the other via 2c/(-b - root)
  const big = roundSig(roundSig(-b - root, sig) / (2 * a), sig)
  const small = roundSig(roundSig(2 * c, sig) / roundSig(-b - root, sig), sig)
  return { x1: big, x2: small }
}

export function quadExact(a: number, b: number, c: number): QuadResult {
  const root = Math.sqrt(b * b - 4 * a * c)
  return { x1: (-b - root) / (2 * a), x2: (-b + root) / (2 * a) }
}

// ---- exp(x)-1 (Example 1.22) ------------------------------------------------

export function expm1Naive(x: number): number {
  return Math.exp(x) - 1
}

export function expm1Taylor(x: number, terms: number): number {
  // x + x^2/2! + ... + x^terms/terms!
  let sum = 0
  let term = 1
  for (let n = 1; n <= terms; n++) {
    term *= x / n
    sum += term
  }
  return sum
}

// ---- aⁿ/n! interleaved (Example 1.23) ---------------------------------------

export function powerOverFactorial(a: number, n: number): number {
  let y = a
  for (let i = 2; i <= n; i++) y = y * (a / i)
  return y
}

export function naiveOverflows(a: number, n: number): boolean {
  return Math.pow(a, n) === Infinity || factorialApprox(n) === Infinity
}

function factorialApprox(n: number): number {
  let f = 1
  for (let i = 2; i <= n; i++) {
    f *= i
    if (f === Infinity) return Infinity
  }
  return f
}

// ---- summation order (Example 1.24) -----------------------------------------

export interface SumStep {
  running: number
  added: number
}

/** Add `big` plus `count` copies of `small` in 4-digit arithmetic, in given order. */
export function summation(big: number, small: number, count: number, largeFirst: boolean, sig = 4): SumStep[] {
  const steps: SumStep[] = []
  let running = 0
  if (largeFirst) {
    running = big
    steps.push({ running, added: big })
    for (let i = 0; i < count; i++) {
      running = roundSig(running + small, sig)
      steps.push({ running, added: small })
    }
  } else {
    for (let i = 0; i < count; i++) {
      running = roundSig(running + small, sig)
      steps.push({ running, added: small })
    }
    running = roundSig(running + big, sig)
    steps.push({ running, added: big })
  }
  return steps
}
