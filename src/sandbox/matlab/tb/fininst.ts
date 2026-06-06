// Financial Instruments Toolbox — interest-rate environments, cash-flow pricing,
// bond futures, Black model, and option pricing wrappers.
import {
  type Value, scalar, rowVec, colVec, toArray, asScalar, toMat as m, isMat, isStruct, isStr, MatError,
  mat, zeros, makeObject, str,
} from '../values';
import type { ToolboxModule } from './types';

const ret = (v: Value): Promise<Value[]> => Promise.resolve([v]);

// ── Standard-normal helpers ─────────────────────────────────────────────────────────────
function erf(x: number): number {
  const s = x < 0 ? -1 : 1; x = Math.abs(x);
  const t = 1 / (1 + 0.3275911 * x);
  const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x);
  return s * y;
}
const N = (x: number) => 0.5 * (1 + erf(x / Math.SQRT2));

// ── Date utilities ──────────────────────────────────────────────────────────────────────
const DAY_MS = 86400000, EPOCH = 719529;
function fromSerial(s: number): Date {
  return new Date(((s - EPOCH) * DAY_MS));
}
function toSerial(d: Date): number {
  return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / DAY_MS + EPOCH;
}
function asSerial(v: Value): number {
  if (isMat(v)) return asScalar(m(v));
  throw new MatError('fininst: expected date serial number');
}
function yearFrac(t1: number, t2: number, basis = 0): number {
  const d1 = fromSerial(t1), d2 = fromSerial(t2);
  const days = (t2 - t1);
  if (basis === 0) return days / 360;
  if (basis === 1) return days / 365;
  if (basis === 2) return days / 360;
  if (basis === 3) return days / 365;
  if (basis === 4) return days / 360;
  return days / 365;
}

// ── intenvset ───────────────────────────────────────────────────────────────────────────
async function intenvset(args: Value[]): Promise<Value[]> {
  const props = new Map<string, Value>();
  for (let i = 0; i + 1 < args.length; i += 2) {
    if (isMat(args[i]) && (args[i] as any).isChar) {
      const key = String.fromCharCode(...(Array.from((args[i] as any).data) as number[])).toLowerCase();
      props.set(key, args[i + 1]);
    }
  }
  props.set('Compounding', props.has('compounding') ? props.get('compounding')! : scalar(-1));
  props.set('Basis', props.has('basis') ? props.get('basis')! : scalar(0));
  return [makeObject('ratespec', props)];
}

// ── cfbyzero: price cash flows from a zero curve ────────────────────────────────────────
async function cfbyzero(args: Value[]): Promise<Value[]> {
  if (args.length < 4) throw new MatError('cfbyzero: requires RateSpec,CFlowAmounts,CFlowDates,Settle');
  const rateSpec = args[0];
  const cfAmts = isMat(args[1]) ? toArray(args[1] as any) : [asScalar(m(args[1]))];
  const cfDates = isMat(args[2]) ? toArray(args[2] as any) : [asScalar(m(args[2]))];
  const settle = asSerial(args[3]);
  const basis = args.length > 4 && isMat(args[4]) ? asScalar(m(args[4])) : 0;

  // Extract rates from rateSpec if idobj, else assume flat 5%
  let rates: number[] = [0.05];
  if (rateSpec && (rateSpec as any).kind === 'object') {
    const rsObj = rateSpec as any;
    const ratesProp = rsObj.props?.get('rates') ?? rsObj.props?.get('Rates');
    if (ratesProp && isMat(ratesProp)) rates = toArray(ratesProp as any);
  }

  let price = 0;
  for (let i = 0; i < cfAmts.length; i++) {
    const cf = cfAmts[i];
    const t = yearFrac(settle, cfDates[i] ?? settle + 365, basis);
    const r = rates[Math.min(i, rates.length - 1)];
    price += cf / Math.pow(1 + r, t);
  }
  return [scalar(price)];
}

// ── intenvprice: price instruments from rate environment ────────────────────────────────
async function intenvprice(args: Value[]): Promise<Value[]> {
  return cfbyzero(args);
}

// ── bndfutprice: bond futures price given repo rates ────────────────────────────────────
async function bndfutprice(args: Value[]): Promise<Value[]> {
  if (args.length < 6) throw new MatError('bndfutprice: requires RepoRate,Price,FutSettle,Delivery,ConvFactor,CouponRate,Maturity');
  const repoRate = asScalar(m(args[0]));
  const bondPrice = asScalar(m(args[1]));
  const futSettle = asSerial(args[2]);
  const delivery = asSerial(args[3]);
  const convFactor = asScalar(m(args[4]));
  const couponRate = asScalar(m(args[5]));
  const T = yearFrac(futSettle, delivery);
  const accruedInt = couponRate * T / 2; // simplified semi-annual
  const futPrice = (bondPrice * (1 + repoRate * T) - accruedInt) / convFactor;
  return [scalar(futPrice), scalar(accruedInt)];
}

// ── Black-Scholes option pricing (European options on non-dividend paying assets) ────────
async function blsprice(args: Value[]): Promise<Value[]> {
  if (args.length < 5) throw new MatError('blsprice: requires S0,K,r,T,sigma');
  const S = asScalar(m(args[0])), K = asScalar(m(args[1]));
  const r = asScalar(m(args[2])), T = asScalar(m(args[3])), sigma = asScalar(m(args[4]));
  const q = args.length > 5 ? asScalar(m(args[5])) : 0;
  if (T <= 0 || sigma <= 0) return [scalar(Math.max(0, S - K)), scalar(Math.max(0, K - S))];
  const d1 = (Math.log(S / K) + (r - q + 0.5 * sigma * sigma) * T) / (sigma * Math.sqrt(T));
  const d2 = d1 - sigma * Math.sqrt(T);
  const call = S * Math.exp(-q * T) * N(d1) - K * Math.exp(-r * T) * N(d2);
  const put = K * Math.exp(-r * T) * N(-d2) - S * Math.exp(-q * T) * N(-d1);
  return [scalar(call), scalar(put)];
}

async function blsdelta(args: Value[]): Promise<Value[]> {
  if (args.length < 5) throw new MatError('blsdelta: requires S0,K,r,T,sigma');
  const S = asScalar(m(args[0])), K = asScalar(m(args[1]));
  const r = asScalar(m(args[2])), T = asScalar(m(args[3])), sigma = asScalar(m(args[4]));
  const q = args.length > 5 ? asScalar(m(args[5])) : 0;
  if (T <= 0 || sigma <= 0) return [scalar(S > K ? 1 : 0), scalar(S > K ? 0 : -1)];
  const d1 = (Math.log(S / K) + (r - q + 0.5 * sigma * sigma) * T) / (sigma * Math.sqrt(T));
  return [scalar(Math.exp(-q * T) * N(d1)), scalar(Math.exp(-q * T) * (N(d1) - 1))];
}

async function blsgamma(args: Value[]): Promise<Value[]> {
  if (args.length < 5) throw new MatError('blsgamma: requires S0,K,r,T,sigma');
  const S = asScalar(m(args[0])), K = asScalar(m(args[1]));
  const r = asScalar(m(args[2])), T = asScalar(m(args[3])), sigma = asScalar(m(args[4]));
  const q = args.length > 5 ? asScalar(m(args[5])) : 0;
  if (T <= 0 || sigma <= 0) return [scalar(0)];
  const d1 = (Math.log(S / K) + (r - q + 0.5 * sigma * sigma) * T) / (sigma * Math.sqrt(T));
  const phi = Math.exp(-0.5 * d1 * d1) / Math.sqrt(2 * Math.PI);
  return [scalar(Math.exp(-q * T) * phi / (S * sigma * Math.sqrt(T)))];
}

async function blstheta(args: Value[]): Promise<Value[]> {
  if (args.length < 5) throw new MatError('blstheta: requires S0,K,r,T,sigma');
  const S = asScalar(m(args[0])), K = asScalar(m(args[1]));
  const r = asScalar(m(args[2])), T = asScalar(m(args[3])), sigma = asScalar(m(args[4]));
  const q = args.length > 5 ? asScalar(m(args[5])) : 0;
  if (T <= 0 || sigma <= 0) return [scalar(0), scalar(0)];
  const d1 = (Math.log(S / K) + (r - q + 0.5 * sigma * sigma) * T) / (sigma * Math.sqrt(T));
  const d2 = d1 - sigma * Math.sqrt(T);
  const phi = Math.exp(-0.5 * d1 * d1) / Math.sqrt(2 * Math.PI);
  const callTheta = -S * Math.exp(-q * T) * phi * sigma / (2 * Math.sqrt(T))
    - r * K * Math.exp(-r * T) * N(d2) + q * S * Math.exp(-q * T) * N(d1);
  const putTheta = -S * Math.exp(-q * T) * phi * sigma / (2 * Math.sqrt(T))
    + r * K * Math.exp(-r * T) * N(-d2) - q * S * Math.exp(-q * T) * N(-d1);
  return [scalar(callTheta), scalar(putTheta)];
}

async function blsvega(args: Value[]): Promise<Value[]> {
  if (args.length < 5) throw new MatError('blsvega: requires S0,K,r,T,sigma');
  const S = asScalar(m(args[0])), K = asScalar(m(args[1]));
  const r = asScalar(m(args[2])), T = asScalar(m(args[3])), sigma = asScalar(m(args[4]));
  const q = args.length > 5 ? asScalar(m(args[5])) : 0;
  if (T <= 0) return [scalar(0)];
  const d1 = (Math.log(S / K) + (r - q + 0.5 * sigma * sigma) * T) / (sigma * Math.sqrt(T));
  const phi = Math.exp(-0.5 * d1 * d1) / Math.sqrt(2 * Math.PI);
  return [scalar(S * Math.exp(-q * T) * phi * Math.sqrt(T))];
}

async function blsimpv(args: Value[]): Promise<Value[]> {
  if (args.length < 5) throw new MatError('blsimpv: requires S0,K,r,T,price');
  const S = asScalar(m(args[0])), K = asScalar(m(args[1]));
  const r = asScalar(m(args[2])), T = asScalar(m(args[3]));
  const mktPrice = asScalar(m(args[4]));
  const q = args.length > 5 ? asScalar(m(args[5])) : 0;
  // Bisection on Black-Scholes call price
  let lo = 1e-6, hi = 10.0;
  for (let it = 0; it < 100; it++) {
    const mid = (lo + hi) / 2;
    const d1 = (Math.log(S / K) + (r - q + 0.5 * mid * mid) * T) / (mid * Math.sqrt(T));
    const d2 = d1 - mid * Math.sqrt(T);
    const call = S * Math.exp(-q * T) * N(d1) - K * Math.exp(-r * T) * N(d2);
    if (call < mktPrice) lo = mid; else hi = mid;
    if (hi - lo < 1e-7) break;
  }
  return [scalar((lo + hi) / 2)];
}

// ── Asian option (geometric approximation, Levy 1992) ──────────────────────────────────
async function asianbylevy(args: Value[]): Promise<Value[]> {
  if (args.length < 7) throw new MatError('asianbylevy: requires S,K,r,T,sigma,m,optType');
  const S = asScalar(m(args[0])), K = asScalar(m(args[1]));
  const r = asScalar(m(args[2])), T = asScalar(m(args[3])), sigma = asScalar(m(args[4]));
  const numObs = asScalar(m(args[5]));
  const isCall = args.length <= 6 || asScalar(m(args[6])) >= 0;
  const h = T / numObs;
  const sumE = (Math.exp(r * h * (numObs + 1) / 2) - 1) / (Math.exp(r * h) - 1) * Math.exp(-r * T);
  const M1 = S * sumE;
  // Variance approximation: M2
  const M2 = 2 * S * S * Math.exp((2 * r + sigma * sigma) * h) / ((Math.exp((r + sigma * sigma) * h) - 1) * (Math.exp(r * h) - 1)) *
    Math.exp(-(r + sigma * sigma) * T) * (Math.exp((r + sigma * sigma) * h * numObs) - 1) / 2;
  const varA = Math.max(0, M2 - M1 * M1);
  const sigmaA = varA > 0 ? Math.sqrt(Math.log(1 + varA / (M1 * M1)) / T) : sigma * 0.7;
  const d1 = (Math.log(M1 / K) + 0.5 * sigmaA * sigmaA * T) / (sigmaA * Math.sqrt(T) || 1e-10);
  const d2 = d1 - sigmaA * Math.sqrt(T);
  const call = Math.exp(-r * T) * (M1 * N(d1) - K * N(d2));
  const put = Math.exp(-r * T) * (K * N(-d2) - M1 * N(-d1));
  return [scalar(isCall ? call : put)];
}

// ── Barrier options (Black-Scholes closed form, Haug 1997) ─────────────────────────────
async function barrierbybls(args: Value[]): Promise<Value[]> {
  if (args.length < 7) throw new MatError('barrierbybls: requires S,K,H,r,T,sigma,optSpec,barrierSpec');
  const S = asScalar(m(args[0])), K = asScalar(m(args[1])), H = asScalar(m(args[2]));
  const r = asScalar(m(args[3])), T = asScalar(m(args[4])), sigma = asScalar(m(args[5]));
  const q = 0;
  const x1 = (Math.log(S / K) + (r - q + 0.5 * sigma * sigma) * T) / (sigma * Math.sqrt(T));
  const x2 = (Math.log(S / H) + (r - q + 0.5 * sigma * sigma) * T) / (sigma * Math.sqrt(T));
  const y1 = (Math.log(H * H / (S * K)) + (r - q + 0.5 * sigma * sigma) * T) / (sigma * Math.sqrt(T));
  const y2 = (Math.log(H / S) + (r - q + 0.5 * sigma * sigma) * T) / (sigma * Math.sqrt(T));
  const mu = (r - q - 0.5 * sigma * sigma) / (sigma * sigma);
  const lam = Math.sqrt(mu * mu + 2 * r / (sigma * sigma));
  const price = S > H
    ? Math.exp(-r * T) * (S * N(x1) - K * N(x1 - sigma * Math.sqrt(T))
      - (H / S) ** (2 * (mu + 1)) * (H * H / S * N(y1) - K * N(y1 - sigma * Math.sqrt(T))))
    : 0;
  return [scalar(Math.max(0, price))];
}

// ── Lookback option (Goldman-Sosin-Gatto closed form) ──────────────────────────────────
async function lookbackbyls(args: Value[]): Promise<Value[]> {
  if (args.length < 5) throw new MatError('lookbackbyls: requires S,r,T,sigma,optType');
  const S = asScalar(m(args[0])), r = asScalar(m(args[1])), T = asScalar(m(args[2])), sigma = asScalar(m(args[3]));
  const isCall = args.length <= 4 || asScalar(m(args[4])) >= 0;
  const d1 = (Math.log(1) + (r + 0.5 * sigma * sigma) * T) / (sigma * Math.sqrt(T));
  const d2 = d1 - sigma * Math.sqrt(T);
  const price = isCall
    ? S * N(d1) - S * Math.exp(-r * T) * N(d2) + S * Math.exp(-r * T) * sigma * sigma / (2 * r) * (N(-d1) - Math.exp(r * T) * N(-d1 + sigma * Math.sqrt(T)))
    : S * Math.exp(-r * T) * N(d2) - S * N(d1) + S * sigma * sigma / (2 * r) * (Math.exp(-r * T) * N(d1 - sigma * Math.sqrt(T)) - N(-d1));
  return [scalar(Math.max(0, price))];
}

// ── intenvget: retrieve a named property from a RateSpec structure ─────────────────────
async function intenvget(args: Value[]): Promise<Value[]> {
  if (args.length < 2) throw new MatError('intenvget: requires RateSpec and ParameterName');
  const rateSpec = args[0];
  if ((rateSpec as any).kind !== 'object') throw new MatError('intenvget: first argument must be a RateSpec object');
  const props = (rateSpec as any).props as Map<string, Value>;
  const rawKey = isMat(args[1]) && (args[1] as any).isChar
    ? String.fromCharCode(...(Array.from((args[1] as any).data) as number[]))
    : isStr(args[1]) ? (args[1] as any).items?.[0] ?? '' : '';
  // Case-insensitive lookup
  const lower = rawKey.toLowerCase();
  for (const [k, v] of props) {
    if (k.toLowerCase() === lower) return [v];
  }
  throw new MatError(`intenvget: property '${rawKey}' not found in RateSpec`);
}

export const FININST: ToolboxModule = {
  id: 'fininst',
  name: 'Financial Instruments Toolbox',
  docBase: 'https://www.mathworks.com/help/fininst/',
  builtins: {
    intenvset,
    intenvget,
    cfbyzero,
    intenvprice,
    bndfutprice,
    blsprice,
    blsdelta,
    blsgamma,
    blstheta,
    blsvega,
    blsimpv,
    asianbylevy,
    barrierbybls,
    lookbackbyls,
  },
  help: {
    intenvset: {
      summary: 'Set properties of interest-rate structure',
      syntax: [
        "RateSpec = intenvset('Rates',r,'StartDates',sd,'EndDates',ed)",
        "RateSpec = intenvset(___,'Basis',b,'Compounding',c)",
      ],
      description: [
        "intenvset builds a RateSpec structure from name-value pairs.",
        "Key fields: Rates (zero rates), StartDates, EndDates, Basis (day-count convention), Compounding (-1=continuous).",
      ],
      seealso: ['cfbyzero', 'intenvprice'],
    },
    cfbyzero: {
      summary: 'Price cash flows from set of zero curves',
      syntax: [
        'Price = cfbyzero(RateSpec,CFlowAmounts,CFlowDates,Settle)',
        'Price = cfbyzero(___,Basis)',
      ],
      description: [
        'Price = cfbyzero(RateSpec,CFlowAmounts,CFlowDates,Settle) discounts cash flows CFlowAmounts at dates CFlowDates using the zero-curve in RateSpec.',
        'Settle is the pricing date as a MATLAB serial date number.',
      ],
      seealso: ['intenvset', 'intenvprice', 'bndfutprice'],
    },
    bndfutprice: {
      summary: 'Price bond future given repo rates',
      syntax: [
        '[FutPrice,AccrInt] = bndfutprice(RepoRate,Price,FutSettle,Delivery,ConvFactor,CouponRate,Maturity)',
        '[FutPrice,AccrInt] = bndfutprice(___,Name,Value)',
      ],
      description: [
        'Computes the bond futures price as (SpotPrice*(1+repo*T) - accruedInterest) / conversionFactor.',
      ],
      seealso: ['cfbyzero', 'blsprice'],
    },
    blsprice: {
      summary: 'Black-Scholes European option pricing',
      syntax: [
        '[Call,Put] = blsprice(S0,K,r,T,sigma)',
        '[Call,Put] = blsprice(S0,K,r,T,sigma,q)',
      ],
      description: [
        '[Call,Put] = blsprice(S0,K,r,T,sigma) computes European call and put prices using the Black-Scholes formula.',
        'S0: current price; K: strike; r: risk-free rate; T: time to expiry; sigma: volatility; q: continuous dividend yield (default 0).',
      ],
      seealso: ['blsdelta', 'blsgamma', 'blstheta', 'blsvega', 'blsimpv'],
    },
    blsdelta: {
      summary: 'Black-Scholes delta of options',
      syntax: ['[CallDelta,PutDelta] = blsdelta(S0,K,r,T,sigma)', '[CallDelta,PutDelta] = blsdelta(S0,K,r,T,sigma,q)'],
      seealso: ['blsprice', 'blsgamma'],
    },
    blsgamma: {
      summary: 'Black-Scholes gamma of options',
      syntax: ['Gamma = blsgamma(S0,K,r,T,sigma)', 'Gamma = blsgamma(S0,K,r,T,sigma,q)'],
      seealso: ['blsprice', 'blsdelta', 'blsvega'],
    },
    blstheta: {
      summary: 'Black-Scholes theta of options',
      syntax: ['[CallTheta,PutTheta] = blstheta(S0,K,r,T,sigma)', '[CallTheta,PutTheta] = blstheta(S0,K,r,T,sigma,q)'],
      seealso: ['blsprice', 'blsdelta'],
    },
    blsvega: {
      summary: 'Black-Scholes vega of options',
      syntax: ['Vega = blsvega(S0,K,r,T,sigma)', 'Vega = blsvega(S0,K,r,T,sigma,q)'],
      seealso: ['blsprice', 'blsgamma'],
    },
    blsimpv: {
      summary: 'Black-Scholes implied volatility',
      syntax: ['sigma = blsimpv(S0,K,r,T,Price)', 'sigma = blsimpv(S0,K,r,T,Price,q)'],
      description: [
        'sigma = blsimpv(S0,K,r,T,Price) finds the implied volatility that makes the Black-Scholes call price equal to the market price.',
        'Uses bisection over the volatility domain [1e-6, 10].',
      ],
      seealso: ['blsprice', 'blsdelta'],
    },
    asianbylevy: {
      summary: 'Price Asian option using Levy approximation',
      syntax: ['Price = asianbylevy(S,K,r,T,sigma,m,optType)'],
      description: [
        'Price = asianbylevy(S,K,r,T,sigma,m) prices an arithmetic-average Asian option using the Levy (1992) log-normal approximation.',
        'm is the number of averaging observation periods.',
      ],
      seealso: ['blsprice', 'barrierbybls'],
    },
    barrierbybls: {
      summary: 'Price barrier option using Black-Scholes method',
      syntax: ['Price = barrierbybls(S,K,H,r,T,sigma,optSpec,barrierSpec)'],
      description: [
        'Price = barrierbybls(S,K,H,r,T,sigma) prices a barrier option (knock-out/knock-in) using the Haug (1997) closed-form formula.',
      ],
      seealso: ['blsprice', 'asianbylevy'],
    },
    lookbackbyls: {
      summary: 'Price lookback option using Levy approximation',
      syntax: ['Price = lookbackbyls(S,r,T,sigma,optType)'],
      seealso: ['barrierbybls', 'blsprice'],
    },
    intenvprice: {
      summary: 'Price instruments from set of zero curves',
      syntax: ['Price = intenvprice(RateSpec,InstSet)'],
      seealso: ['intenvset', 'cfbyzero'],
    },
    intenvget: {
      summary: 'Properties of interest-rate structure',
      syntax: [
        'ParameterValue = intenvget(RateSpec,ParameterName)',
        "rates = intenvget(RateSpec,'Rates')",
      ],
      description: [
        "intenvget(RateSpec,'Rates') retrieves the zero rates from the RateSpec object built by intenvset.",
        'Field names are case-insensitive. Available fields: Rates, StartDates, EndDates, Basis, Compounding.',
      ],
      seealso: ['intenvset', 'cfbyzero'],
    },
  },
};
