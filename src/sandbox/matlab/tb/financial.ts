// Financial Toolbox — computable closed-form subset: cashflow analysis (npv/irr/pv/fv),
// annuities (pvfix/fvfix/payper/annuity), rate conversions (effrr/nomrr), and Black-Scholes
// option pricing + Greeks. All validatable by hand / closed form. See plan §7.
import type { Builtin } from '../builtins';
import {
  type Value, type Mat, scalar, colVec, rowVec, toArray, asScalar, toMat as m, isMat, isStr, MatError, mat,
} from '../values';
import type { ToolboxModule } from './types';

const ret = (v: Value): Promise<Value[]> => Promise.resolve([v]);
const arg = (a: Value[], i: number, d: number) => (a.length > i && isMat(a[i]) && a[i].kind === 'num' && (a[i] as { rows: number }).rows ? asScalar(a[i]) : d);

// Standard normal CDF via Abramowitz-Stegun 7.1.26 erf (≈1.5e-7, ample for option prices).
function erf(x: number): number {
  const s = x < 0 ? -1 : 1; x = Math.abs(x);
  const t = 1 / (1 + 0.3275911 * x);
  const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x);
  return s * y;
}
const normcdf = (x: number) => 0.5 * (1 + erf(x / Math.SQRT2));

/** Net present value: CF(1) at t=0 (undiscounted), CF(k) at t=k-1. */
function npv(rate: number, cf: number[]): number { return cf.reduce((s, c, t) => s + c / (1 + rate) ** t, 0); }

// ══ calendar subset (days360/daysdif/busdate/busdays/datewrkdy) ══════════════════════
// All dates are MATLAB serial date numbers (serial 719529 = 1970-01-01). Inputs accept
// numeric serial datenums (numeric Mats) or char date strings. Holiday handling is
// weekends-only (validated vs live R2026a called with an out-of-range holiday vector).
const DAY_MS = 86400000;
const EPOCH = 719529; // serial datenum at 1970-01-01

function fromString(s: string): number {
  const d = new Date(s.trim());
  if (Number.isNaN(+d)) throw new MatError(`finance: could not parse date "${s}"`);
  return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / DAY_MS + EPOCH;
}

/** Coerce one argument (char-Mat date string, string scalar, or numeric Mat) to serial datenums. */
function asSerials(v: Value, ctx: string): number[] {
  if (isStr(v)) return v.items.map(fromString);
  if (!isMat(v)) throw new MatError(`${ctx}: expected a date`);
  if (v.isChar) {
    let str = '';
    for (let c = 0; c < v.cols; c++) str += String.fromCharCode(v.data[c]);
    return [fromString(str)];
  }
  return Array.from(v.data);
}

function asScalarSerial(v: Value, ctx: string): number {
  const a = asSerials(v, ctx);
  if (a.length !== 1) throw new MatError(`${ctx}: expected a scalar date`);
  return a[0];
}

/** Calendar [year, month(1-12), day] for a serial datenum (UTC). */
function ymd(n: number): [number, number, number] {
  const dt = new Date(Math.round((n - EPOCH) * DAY_MS));
  return [dt.getUTCFullYear(), dt.getUTCMonth() + 1, dt.getUTCDate()];
}

/** MATLAB weekday: 1=Sunday … 7=Saturday. */
function weekday(n: number): number {
  return new Date(Math.round((n - EPOCH) * DAY_MS)).getUTCDay() + 1;
}

/** Business day = not Saturday (7) and not Sunday (1). Weekends-only convention. */
function isBusday(n: number): boolean {
  const w = weekday(n);
  return w !== 1 && w !== 7;
}

// days360 — SIA-compliant 30/360 day count (faithful port of days360.m).
function days360one(d1: number, d2: number): number {
  let [y1, m1, dd1] = ymd(d1);
  let [y2, m2, dd2] = ymd(d2);
  const leap1 = y1 % 4 === 0;
  const leap2 = y2 % 4 === 0;
  const febEnd1 = m1 === 2 && ((!leap1 && dd1 === 28) || (leap1 && dd1 === 29));
  const febEnd2 = m2 === 2 && ((!leap2 && dd2 === 28) || (leap2 && dd2 === 29));
  if (febEnd1 && febEnd2) dd2 = 30;
  if (febEnd1) dd1 = 30;
  if (dd2 === 31 && (dd1 === 30 || dd1 === 31)) dd2 = 30;
  if (dd1 === 31) dd1 = 30;
  return 360 * (y2 - y1) + 30 * (m2 - m1) + (dd2 - dd1);
}

function days360impl(args: Value[]): Value {
  if (args.length < 2) throw new MatError('days360: requires StartDate and EndDate');
  const a = asSerials(args[0], 'days360');
  const b = asSerials(args[1], 'days360');
  const n = Math.max(a.length, b.length);
  if (a.length !== 1 && b.length !== 1 && a.length !== b.length)
    throw new MatError('days360: date vectors must be the same length');
  const out: number[] = [];
  for (let i = 0; i < n; i++) out.push(days360one(a[a.length === 1 ? 0 : i], b[b.length === 1 ? 0 : i]));
  return out.length === 1 ? scalar(out[0]) : colVec(out);
}

// daysdif — days between dates for a day-count basis (0 default = actual; 1 = 30/360 SIA; 6/11 = European).
function daysdifOne(d1: number, d2: number, basis: number): number {
  switch (basis) {
    case 0: case 2: case 3: case 8: case 9: case 10: case 12:
      return Math.round(d2 - d1);
    case 1:
      return days360one(d1, d2);
    case 6: case 11: {
      let [y1, m1, dd1] = ymd(d1);
      let [y2, m2, dd2] = ymd(d2);
      if (dd1 === 31) dd1 = 30;
      if (dd2 === 31) dd2 = 30;
      return 360 * (y2 - y1) + 30 * (m2 - m1) + (dd2 - dd1);
    }
    default:
      throw new MatError(`daysdif: basis ${basis} not supported in this port (only 0,1,2,3,6,8,9,10,11,12)`);
  }
}

function daysdifImpl(args: Value[]): Value {
  if (args.length < 2) throw new MatError('daysdif: requires D1 and D2');
  const a = asSerials(args[0], 'daysdif');
  const b = asSerials(args[1], 'daysdif');
  const basisArr = args[2] != null ? asSerials(args[2], 'daysdif') : [0];
  const n = Math.max(a.length, b.length, basisArr.length);
  const out: number[] = [];
  for (let i = 0; i < n; i++) {
    out.push(daysdifOne(
      a[a.length === 1 ? 0 : i],
      b[b.length === 1 ? 0 : i],
      Math.round(basisArr[basisArr.length === 1 ? 0 : i]),
    ));
  }
  return out.length === 1 ? scalar(out[0]) : colVec(out);
}

// busdate — next (DIREC=1, default) or previous (DIREC=-1) business day. Weekends-only.
function direcOf(v: Value | undefined): 1 | -1 {
  if (v == null) return 1;
  if (isStr(v) || (isMat(v) && v.isChar)) {
    const s = (isStr(v) ? (v.items[0] ?? '') : (() => {
      let str = ''; for (let c = 0; c < v.cols; c++) str += String.fromCharCode(v.data[c]); return str;
    })()).toLowerCase();
    if (s === 'follow' || s === 'modifiedfollow') return 1;
    if (s === 'previous' || s === 'modifiedprevious') return -1;
    throw new MatError(`busdate: invalid direction "${s}"`);
  }
  const d = isMat(v) ? v.data[0] : NaN;
  if (d === 1) return 1;
  if (d === -1) return -1;
  throw new MatError('busdate: direction must be 1 or -1');
}

function busdateOne(d: number, step: 1 | -1): number {
  let bd = d + step;
  while (!isBusday(bd)) bd += step;
  return bd;
}

function busdateImpl(args: Value[]): Value {
  if (args.length < 1) throw new MatError('busdate: requires a date');
  const ds = asSerials(args[0], 'busdate');
  const step = direcOf(args[1]);
  const out = ds.map((d) => busdateOne(d, step));
  return out.length === 1 ? scalar(out[0]) : colVec(out);
}

// busdays — column vector of business days (daily) in [SDATE, EDATE] inclusive. Weekends-only.
function busdaysImpl(args: Value[]): Value {
  if (args.length < 2) throw new MatError('busdays: requires SDATE and EDATE');
  const s = asScalarSerial(args[0], 'busdays');
  const e = asScalarSerial(args[1], 'busdays');
  const out: number[] = [];
  for (let d = s; d <= e; d++) if (isBusday(d)) out.push(d);
  return colVec(out);
}

// datewrkdy — date a number of work days into the future/past (faithful port of datewrkdy.m).
function datewrkdyOne(start: number, numWD: number, numHol: number): number {
  if (Math.abs(numHol) > Math.abs(numWD)) throw new MatError('datewrkdy: too many holidays');
  if (numWD === 0 && numHol === 0) return start;
  const sign = numWD > 0 ? 1 : -1;
  const last = start + numWD * 3 + numHol;
  const days: number[] = [];
  if (sign === 1) { for (let d = start; d <= last; d++) days.push(d); }
  else { for (let d = start; d >= last; d--) days.push(d); }
  const weekdays = days.filter((d) => { const w = weekday(d); return w !== 1 && w !== 7; });
  const idx = Math.abs(numWD) + Math.abs(numHol);
  if (weekdays.length === 0) return start;
  if (idx < 1 || idx > weekdays.length)
    throw new MatError('datewrkdy: requested workday is out of computed range');
  return weekdays[idx - 1];
}

function datewrkdyImpl(args: Value[]): Value {
  if (args.length < 2) throw new MatError('datewrkdy: requires StartDate and NumberWorkDays');
  const starts = asSerials(args[0], 'datewrkdy');
  const wd = args[1] != null ? asSerials(args[1], 'datewrkdy') : [0];
  const hol = args[2] != null ? asSerials(args[2], 'datewrkdy') : [0];
  const n = Math.max(starts.length, wd.length, hol.length);
  const out: number[] = [];
  for (let i = 0; i < n; i++) {
    out.push(datewrkdyOne(
      starts[starts.length === 1 ? 0 : i],
      Math.round(wd[wd.length === 1 ? 0 : i]),
      Math.round(hol[hol.length === 1 ? 0 : i]),
    ));
  }
  return out.length === 1 ? scalar(out[0]) : colVec(out);
}

// days252bus — number of business days between two dates (faithful port of days252bus.m).
// Algorithm: numdays = max(0, #busdays in [lo,hi] inclusive); if the *upper* date is itself
// a business day, subtract 1 (half-open count). Sign tracks direction (negative if d1>d2).
// NOTE: this port uses the file's weekends-only business-day convention (no fixed holidays),
// so results differ from live MATLAB only on dates that MATLAB treats as fixed holidays.
function days252busOne(d1: number, d2: number): number {
  if (d1 === d2) return 0;
  const lo = Math.min(d1, d2);
  const hi = Math.max(d1, d2);
  let count = 0;
  for (let d = lo; d <= hi; d++) if (isBusday(d)) count++;
  count = Math.max(0, count);
  if (isBusday(hi)) count -= 1;
  return d1 < d2 ? count : -count;
}

function days252busImpl(args: Value[]): Value {
  if (args.length < 2) throw new MatError('days252bus: requires StartDate and EndDate');
  const a = asSerials(args[0], 'days252bus');
  const b = asSerials(args[1], 'days252bus');
  if (a.length !== 1 && b.length !== 1 && a.length !== b.length)
    throw new MatError('days252bus: date vectors must be the same length');
  const n = Math.max(a.length, b.length);
  const out: number[] = [];
  for (let i = 0; i < n; i++) out.push(days252busOne(a[a.length === 1 ? 0 : i], b[b.length === 1 ? 0 : i]));
  return out.length === 1 ? scalar(out[0]) : colVec(out);
}

// payadv — periodic payment given a number of advance payments (faithful port of payadv.m).
function payadvOne(rate: number, nper: number, pv: number, fv: number, adv: number): number {
  if (rate < 0) throw new MatError('payadv: rate must be non-negative');
  const s = 1e-10;
  if (Math.abs(rate) < s) return (fv + pv) / nper;
  const c = 1 + rate;
  return (pv + fv * c ** -nper) / ((1 - c ** (adv - nper)) / rate + adv);
}

function payadvImpl(args: Value[]): Value {
  if (args.length < 5) throw new MatError('payadv: requires RATE, NPER, PV, FV, ADV');
  const cols = args.map((v, k) => asSerials(v, `payadv arg ${k + 1}`));
  const n = Math.max(...cols.map((cc) => cc.length));
  const pick = (cc: number[], i: number) => cc[cc.length === 1 ? 0 : i];
  const out: number[] = [];
  for (let i = 0; i < n; i++) {
    out.push(payadvOne(pick(cols[0], i), pick(cols[1], i), pick(cols[2], i), pick(cols[3], i), pick(cols[4], i)));
  }
  return out.length === 1 ? scalar(out[0]) : colVec(out);
}

// tbillyield2disc — convert T-Bill yields to discount rates (faithful port).
// Type 1 = Money-Market Yield (actual/360), Type 2 = Bond-Equivalent Yield (actual/365).
// Short bills (DSM<=182) and long bills (DSM>182) use different formulas. DSM is actual days.
function tbillyield2discOne(yield_: number, settle: number, maturity: number, type: number): number {
  if (settle > maturity) throw new MatError('tbillyield2disc: Settle must be on or before Maturity');
  if (type !== 1 && type !== 2) throw new MatError('tbillyield2disc: Type must be 1 or 2');
  const A = type === 1 ? 360 : 365;
  const DSM = Math.round(maturity - settle); // daysact: actual days
  if (DSM <= 182) {
    return 360 / DSM * (1 - 1 / (1 + yield_ * DSM / A));
  }
  return 360 / DSM * (1 - 1 / ((1 + yield_ / 2) * (1 + (2 * DSM / A - 1) * yield_ / 2)));
}

function tbillyield2discImpl(args: Value[]): Value {
  if (args.length < 3 || args.length > 4) throw new MatError('tbillyield2disc: requires Yield, Settle, Maturity[, Type]');
  const y = toArray(m(args[0]));
  const settle = asSerials(args[1], 'tbillyield2disc');
  const maturity = asSerials(args[2], 'tbillyield2disc');
  const type = args[3] != null ? toArray(m(args[3])) : [1];
  const n = Math.max(y.length, settle.length, maturity.length, type.length);
  const pick = (cc: number[], i: number) => cc[cc.length === 1 ? 0 : i];
  const out: number[] = [];
  for (let i = 0; i < n; i++) {
    out.push(tbillyield2discOne(pick(y, i), pick(settle, i), pick(maturity, i), Math.round(pick(type, i))));
  }
  return out.length === 1 ? scalar(out[0]) : colVec(out);
}

// ── Bond accrued-interest machinery (acrubond) ──────────────────────────────────────
// Faithful port of the Financial Toolbox coupon-date chain used by acrubond:
//   acrubond → cfamounts → accrfrac → accrfraci → {cpndatepi, cpnperszi(cpndatepqi,
//   cpndatenqi), cfdatesi(cpndateni)} → dateoffset.
// Covers the regular-coupon-period path (all bases, via the cpnperszi denominators) and
// the long-first-coupon path for actual/actual basis 0/8 (FirstCouponDate > Settle).

/** serial datenum from (year, month, day); month/day may overflow (mirrors datenum). */
function datenum(y: number, mo: number, d: number): number {
  // normalize month overflow the way MATLAB datenum does
  const yy = y + Math.floor((mo - 1) / 12);
  const mm = ((mo - 1) % 12 + 12) % 12; // 0-based
  return Math.round(Date.UTC(yy, mm, d) / DAY_MS) + EPOCH;
}

const isLeap = (y: number) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
function eomday(y: number, m: number): number {
  return [31, isLeap(y) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m - 1];
}

const DAYTOTAL365 = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

/** Element-wise over the first k numeric args, scalar-expanding; shape follows the length-n input. */
function ewN(args: Value[], k: number, f: (...xs: number[]) => number): Value {
  const cols = args.slice(0, k).map((v) => toArray(m(v)));
  const n = Math.max(...cols.map((c) => c.length));
  const g = (c: number[], i: number) => (c.length === 1 ? c[0] : c[i]);
  const out = new Float64Array(n); for (let i = 0; i < n; i++) out[i] = f(...cols.map((c) => g(c, i)));
  if (n === 1) return scalar(out[0]);
  const idx = cols.findIndex((c) => c.length === n); const src = m(args[idx]);
  return mat(src.rows, src.cols, out);
}

/** days365 between dates (Act/365 cumulative-month table). */
function days365one(d1: number, d2: number): number { const [y1, m1, dd1] = ymd(d1), [y2, m2, dd2] = ymd(d2); return 365 * (y2 - y1) + DAYTOTAL365[m2 - 1] - DAYTOTAL365[m1 - 1] + dd2 - dd1; }
/** European 30E/360 day count. */
function days360eOne(d1: number, d2: number): number { const [y1, m1, dd1] = ymd(d1), [y2, m2, dd2] = ymd(d2); return 360 * (y2 - y1) + 30 * (m2 - m1) + (Math.min(dd2, 30) - Math.min(dd1, 30)); }
/** yearfrac(d1,d2,basis) — fraction of a year for a day-count basis. Mirrors yearfrac.m. */
function yearfracOne(d1: number, d2: number, basis: number): number {
  const actual = d2 - d1;
  switch (basis) {
    case 0: case 8: { const [y, mo, dd] = ymd(d1); return actual / (datenum(y + 1, mo, dd) - d1); }  // actual/actual
    case 1: return days360one(d1, d2) / 360;                                                          // 30/360 SIA
    case 2: case 9: return actual / 360;                                                              // actual/360
    case 3: case 10: return actual / 365;                                                             // actual/365
    case 6: case 11: return days360eOne(d1, d2) / 360;                                                // 30E/360
    case 7: return days365one(d1, d2) / 365;                                                          // NASD actual/365
    default: throw new MatError(`yearfrac: basis ${basis} not supported`);
  }
}

/** Days-in-year for a day-count basis: 360 (basis 2), 365 (basis 3), else actual (basis 0). */
function yearLenFor(serial: number, basis: number): number {
  if (basis === 2) return 360; if (basis === 3) return 365;
  return isLeap(ymd(serial)[0]) ? 366 : 365;
}

/** Element-wise over two date operands (serial datenums) with scalar expansion. */
function ewDates(args: Value[], f: (d1: number, d2: number) => number): Value {
  const s1 = asSerials(args[0], 'date'), s2 = asSerials(args[1], 'date');
  const n = Math.max(s1.length, s2.length);
  const g = (arr: number[], i: number) => (arr.length === 1 ? arr[0] : arr[i]);
  const out: number[] = []; for (let i = 0; i < n; i++) out.push(f(g(s1, i), g(s2, i)));
  if (out.length === 1) return scalar(out[0]);
  const src = isMat(args[0]) && !(args[0] as Mat).isChar && s1.length === n ? m(args[0]) : isMat(args[1]) && !(args[1] as Mat).isChar ? m(args[1]) : null;
  return src ? mat(src.rows, src.cols, Float64Array.from(out)) : colVec(out);
}

/** yeardays(Y[,basis]) — number of days in the year for a day-count basis. Mirrors yeardays.m. */
function yeardaysImpl(args: Value[]): Value {
  const Y = m(args[0]); const ya = toArray(Y);
  const basis = args.length > 1 && isMat(args[1]) && (args[1] as Mat).rows ? asScalar(args[1]) : 0;
  const f = (y: number) => {
    if (basis === 0 || basis === 8 || basis === 10 || basis === 12) return isLeap(y) ? 366 : 365;  // actual
    if (basis === 3 || basis === 7) return 365;                                                     // actual/365
    return 360;                                                                                     // 30/360 family
  };
  const out = ya.map(f);
  return out.length === 1 ? scalar(out[0]) : mat(Y.rows, Y.cols, Float64Array.from(out));
}

/** thirdwednesday(Month,Year) → [3rd-Wednesday serial, +3 months serial]. Mirrors thirdwednesday.m. */
function thirdwednesdayImpl(args: Value[]): Value[] {
  const ma = toArray(m(args[0])), ya = toArray(m(args[1]));
  const n = Math.max(ma.length, ya.length);
  const g = (arr: number[], i: number) => (arr.length === 1 ? arr[0] : arr[i]);
  const begin: number[] = [], end: number[] = [];
  for (let i = 0; i < n; i++) {
    const mo = g(ma, i), yr = g(ya, i);
    const w = weekday(datenum(yr, mo, 1));                 // 1=Sun..7=Sat
    const thirdWed = 1 + ((4 - w + 7) % 7) + 14;           // first Wednesday + 2 weeks
    begin.push(datenum(yr, mo, thirdWed));
    end.push(datenum(yr, mo + 3, thirdWed));
  }
  const wrap = (c: number[]): Value => (c.length === 1 ? scalar(c[0]) : colVec(c));
  return [wrap(begin), wrap(end)];
}

/** calendar(Y,M) — 6×7 day matrix, column 1 = Sunday. Mirrors calendar.m. */
function calendarImpl(args: Value[]): Value {
  const Y = Math.trunc(asScalar(args[0])), M = Math.trunc(asScalar(args[1]));
  if (M < 1 || M > 12) throw new MatError('calendar: month must be 1..12');
  const k = ((Math.trunc(datenum(Y, M, 1)) + 5) % 7) + 1;     // weekday of the 1st: 1=Sun..7=Sat
  let d = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][M - 1];
  if (M === 2 && isLeap(Y)) d = 29;
  const data = new Float64Array(42);                          // 6×7 column-major (transpose of 7×6 fill)
  for (let i = 0; i < d; i++) { const L = (k - 1) + i; data[Math.floor(L / 7) + (L % 7) * 6] = i + 1; }
  return mat(6, 7, data);
}

/** juliandate(Y,M,D[,H,MI,S]) — Julian date via Fliegel-Van Flandern. Element-wise. */
function juliandateImpl(args: Value[]): Value {
  const cols = args.map((v) => toArray(m(v)));
  const n = Math.max(...cols.map((c) => c.length));
  const g = (k: number, i: number) => { const c = cols[k]; return c ? (c.length === 1 ? c[0] : c[i]) : (k >= 3 ? 0 : 0); };
  const out: number[] = [];
  for (let i = 0; i < n; i++) {
    const Y = g(0, i), M = g(1, i), D = g(2, i), H = g(3, i), MI = g(4, i), S = g(5, i);
    const a = Math.floor((14 - M) / 12), yy = Y + 4800 - a, mm = M + 12 * a - 3;
    const jdn = D + Math.floor((153 * mm + 2) / 5) + 365 * yy + Math.floor(yy / 4) - Math.floor(yy / 100) + Math.floor(yy / 400) - 32045;
    out.push(jdn + (H - 12) / 24 + MI / 1440 + S / 86400);
  }
  const shapeSrc = m(args[(cols.findIndex((c) => c.length === n))] ?? args[0]);
  return n === 1 ? scalar(out[0]) : mat(shapeSrc.rows, shapeSrc.cols, Float64Array.from(out));
}

/** weeknum(D[,W[,E]]) — week of the year. Transcribed from weeknum.m (default + European). */
function weeknumOne(dd: number, w: number, e: number): number {
  const yr = ymd(dd)[0];
  const dFirst = datenum(yr, 1, 1);
  let nDay = (((Math.trunc(dFirst) - 2) % 7) + 7) % 7 - (w - 1);
  const firstCase = nDay < 0 && (dd - dFirst >= -nDay);
  let n = Math.trunc((dd - dFirst + nDay) / 7) + (firstCase ? 2 : 1);
  if (e === 1) {
    if (nDay < 0) nDay += 7;
    if (nDay >= 4) n -= 1;
    const dFirstNew = datenum(yr + 1, 1, 1);
    let nDayNew = (((Math.trunc(dFirstNew) - 2) % 7) + 7) % 7 - (w - 1);
    if (nDayNew < 0) nDayNew += 7;
    if (nDayNew < 4 && (dFirstNew - dd <= nDayNew)) n = 1;
    if (n === 0) n = weeknumOne(dFirst - 1, w, e);            // last week of previous year
  }
  return n;
}
function weeknumImpl(args: Value[]): Value {
  const D = m(args[0]); const da = asSerials(D, 'weeknum');
  const w = args.length > 1 ? asScalar(args[1]) : 1;
  const e = args.length > 2 ? asScalar(args[2]) : 0;
  if (w < 1 || w > 7) throw new MatError('weeknum: W must be 1..7');
  const out = da.map((dd) => weeknumOne(dd, w, e));
  if (out.length === 1) return scalar(out[0]);
  return isMat(D) && !D.isChar ? mat(D.rows, D.cols, Float64Array.from(out)) : colVec(out);
}

/** eomdate(N) | eomdate(Y,M) — last (serial) date of the month. Mirrors eomdate.m. */
function eomdateImpl(args: Value[]): Value {
  if (args.length === 0) throw new MatError('eomdate: not enough input arguments');
  if (args.length === 1) {
    // Date form: serial datenums (numeric Mat) or a date string.
    const serials = asSerials(args[0], 'eomdate');
    const out = serials.map((s) => { const [y, mo] = ymd(s); return datenum(y, mo, eomday(y, mo)); });
    const v = args[0];
    if (isMat(v) && !v.isChar && v.kind === 'num') return mat(v.rows, v.cols, Float64Array.from(out));
    return out.length === 1 ? scalar(out[0]) : rowVec(out);
  }
  // Year/Month form.
  const Y = m(args[0]), M = m(args[1]);
  const ya = toArray(Y), ma = toArray(M);
  for (const mo of ma) if (mo < 1 || mo > 12) throw new MatError('eomdate: invalid month');
  const n = Math.max(ya.length, ma.length);
  if (ya.length !== 1 && ma.length !== 1 && ya.length !== ma.length) throw new MatError('eomdate: nonconformant year/month dimensions');
  const out: number[] = [];
  for (let i = 0; i < n; i++) {
    const y = ya.length === 1 ? ya[0] : ya[i];
    const mo = ma.length === 1 ? ma[0] : ma[i];
    out.push(datenum(y, mo, eomday(y, mo)));
  }
  const shapeSrc = ya.length === n ? Y : M;
  return mat(shapeSrc.rows, shapeSrc.cols, Float64Array.from(out));
}
const isISMABasis = (b: number) => b === 8 || b === 9 || b === 10 || b === 11;

// dateoffset day-lookup tables for late-in-month reference days (28/29/30/31).
// Rows indexed by CpnMonth (1..12, 13=Feb leap); columns by RefDay (28,29,30,31).
// Two distinct tables: EOM-on (rule index 1) and EOM-off (rule index 5). All bases map
// to one of these via the EOM flag. Faithful copy of daytablegen in dateoffset.m.
const DAYTABLE_EOM_ON: number[][] = [
  [28, 29, 30, 31], [28, 28, 28, 28], [28, 29, 30, 31], [28, 29, 30, 30],
  [28, 29, 30, 31], [28, 29, 30, 30], [28, 29, 30, 31], [28, 29, 30, 31],
  [28, 29, 30, 30], [28, 29, 30, 31], [28, 29, 30, 30], [28, 29, 30, 31],
  [28, 29, 29, 29],
];
const DAYTABLE_EOM_OFF: number[][] = [
  [28, 29, 30, 31], [28, 28, 28, 28], [28, 29, 30, 31], [28, 29, 30, 30],
  [28, 29, 30, 31], [28, 29, 30, 30], [28, 29, 30, 31], [28, 29, 30, 31],
  [28, 29, 30, 30], [28, 29, 30, 31], [28, 29, 30, 30], [28, 29, 30, 31],
  [28, 29, 29, 29],
];
// Note: for the rules/bases acrubond exercises (Rule ∈ {0 EOM-on, 4 EOM-off},
// actual/actual), the EOM-on and EOM-off tables are identical except in February;
// Feb cases are resolved before the table lookup via the leap-year row remapping below,
// so a single shared table suffices for the supported scope. We keep both for clarity.

/** dateoffset: date offset from (refDay,refMonth,refYear) by monthOffset months.
 *  rule: 0=act/act EOM-on (default), 4=act/act EOM-off. Returns [day,month,year]. */
function dateoffset(refDay: number, refMonth: number, refYear: number, monthOffset: number, rule: number): [number, number, number] {
  let cpnMonth = ((refMonth + monthOffset - 1) % 12);
  cpnMonth = ((cpnMonth % 12) + 12) % 12 + 1;
  const cpnYear = refYear + Math.floor((refMonth + monthOffset - 1) / 12);
  let cpnDay = refDay;
  if (cpnDay >= 28) {
    let lookCpnMonth = cpnMonth;
    if (cpnMonth === 2 && isLeap(cpnYear)) lookCpnMonth = 13;
    const table = (rule === 0 || rule === 1 || rule === 2 || rule === 3) ? DAYTABLE_EOM_ON : DAYTABLE_EOM_OFF;
    // RefDay index: 28→0,29→1,30→2,31→3. Row = coupon month (1..13). Late-month day
    // resolution depends on the coupon month's length + leap flag (the row captures it).
    const dayIdx = refDay - 28;
    const v = table[lookCpnMonth - 1]?.[dayIdx];
    if (v != null && !Number.isNaN(v)) cpnDay = v;
    else cpnDay = eomday(cpnYear, cpnMonth);
  }
  return [cpnDay, cpnMonth, cpnYear];
}

function ruleFromEMR(emr: number): number { return emr === 0 ? 4 : 0; }

/** referenceDate precedence: FirstCouponDate > LastCouponDate > Maturity. */
function refDate(maturity: number, fcd: number, lcd: number): number {
  if (!Number.isNaN(fcd)) return fcd;
  if (!Number.isNaN(lcd)) return lcd;
  return maturity;
}

/** Previous quasi-coupon date (cpndatepqi). */
function cpndatepq(settle: number, maturity: number, period: number, emr: number, fcd: number, lcd: number): number {
  const ref = refDate(maturity, fcd, lcd);
  const rule = ruleFromEMR(emr);
  const [ryr, rmo, rdy] = ymd(ref);
  const [syr, smo] = ymd(settle);
  let offsetMonths = 12 * (syr - ryr) + (smo - rmo);
  offsetMonths = Math.floor(offsetMonths * period / 12) * 12 / period;
  let [cd, cmo, cyr] = dateoffset(rdy, rmo, ryr, offsetMonths, rule);
  let prev = datenum(cyr, cmo, cd);
  if (prev > settle) {
    offsetMonths -= 12 / period;
    [cd, cmo, cyr] = dateoffset(rdy, rmo, ryr, offsetMonths, rule);
    prev = datenum(cyr, cmo, cd);
  }
  return prev;
}

/** Next quasi-coupon date (cpndatenqi). */
function cpndatenq(settle: number, maturity: number, period: number, emr: number, fcd: number, lcd: number): number {
  const ref = refDate(maturity, fcd, lcd);
  const rule = ruleFromEMR(emr);
  const [ryr, rmo, rdy] = ymd(ref);
  const [syr, smo] = ymd(settle);
  let offsetMonths = 12 * (syr - ryr) + (smo - rmo);
  offsetMonths = Math.ceil(offsetMonths * period / 12) * 12 / period;
  let [cd, cmo, cyr] = dateoffset(rdy, rmo, ryr, offsetMonths, rule);
  let next = datenum(cyr, cmo, cd);
  if (next <= settle) {
    offsetMonths += 12 / period;
    [cd, cmo, cyr] = dateoffset(rdy, rmo, ryr, offsetMonths, rule);
    next = datenum(cyr, cmo, cd);
  }
  return next;
}

/** Previous *actual* coupon date (cpndatepi): quasi date clamped to issue/first/last. */
function cpndatep(settle: number, maturity: number, period: number, emr: number, issue: number, fcd: number, lcd: number): number {
  let prev = cpndatepq(settle, maturity, period, emr, fcd, lcd);
  if (!Number.isNaN(issue) && prev < issue) prev = issue;
  if (!Number.isNaN(fcd) && settle < fcd) prev = !Number.isNaN(issue) ? issue : cpndatepq(settle, maturity, period, emr, fcd, lcd);
  if (!Number.isNaN(fcd) && !Number.isNaN(lcd) && settle >= fcd && settle < lcd) prev = cpndatepq(settle, maturity, period, emr, fcd, lcd);
  if (!Number.isNaN(lcd) && settle >= lcd) prev = lcd;
  return prev;
}

/** Next *actual* coupon date (cpndateni). */
function cpndaten(settle: number, maturity: number, period: number, emr: number, fcd: number, lcd: number): number {
  const ref = refDate(maturity, fcd, lcd);
  const rule = ruleFromEMR(emr);
  const [ryr, rmo, rdy] = ymd(ref);
  const [syr, smo] = ymd(settle);
  let offsetMonths = 12 * (syr - ryr) + (smo - rmo);
  offsetMonths = Math.ceil(offsetMonths * period / 12) * 12 / period;
  let [cd, cmo, cyr] = dateoffset(rdy, rmo, ryr, offsetMonths, rule);
  let next = datenum(cyr, cmo, cd);
  if (next <= settle && next < maturity) {
    offsetMonths += 12 / period;
    [cd, cmo, cyr] = dateoffset(rdy, rmo, ryr, offsetMonths, rule);
    next = datenum(cyr, cmo, cd);
  }
  if (!Number.isNaN(fcd) && settle < fcd) next = fcd;
  if (!Number.isNaN(lcd) && settle >= lcd) next = maturity;
  if (next > maturity) next = maturity;
  return next;
}

/** Number of (actual) days in the coupon period containing settlement (cpnperszi). */
function cpnpersz(settle: number, maturity: number, period: number, basis: number, emr: number, fcd: number, lcd: number): number {
  const prev = cpndatepq(settle, maturity, period, emr, fcd, lcd);
  const next = cpndatenq(settle, maturity, period, emr, fcd, lcd);
  let n = Math.round(next - prev); // daysact
  if (basis === 1 || basis === 2 || basis === 4 || basis === 5 || basis === 6 || basis === 9 || basis === 11) n = 360 / period;
  else if (basis === 3 || basis === 7 || basis === 10) n = 365 / period;
  else if (basis === 13) n = days252busOne(prev, next);
  return n;
}

/** datemnth(StartDate, NumberMonths, DayFlag=0, Basis, EndMonthRule). */
function datemnth(start: number, numberMonths: number, dayFlag: number, basis: number, emr: number): number {
  const n = Math.round(numberMonths);
  const [yr0, mo0, sd] = ymd(start);
  let endDay = sd;
  const lastActStart = eomday(yr0, mo0);
  const juxt = (mo0 + n - 1) % 12;
  const yr = yr0 + Math.floor((mo0 + n - 1) / 12);
  const mo = ((juxt % 12) + 12) % 12 + 1;
  let lastActDay = eomday(yr, mo);
  if (mo === 2 && lastActDay > 28 && (basis === 3 || basis === 10)) lastActDay = 28;
  if (endDay > lastActDay) endDay = lastActDay;
  if (mo === 2 && endDay > 28 && (basis === 3 || basis === 10)) endDay = 28;
  if (dayFlag === 1) endDay = 1;
  if (dayFlag === 2) endDay = lastActDay;
  if ((basis === 1 || basis === 4 || basis === 5 || basis === 6 || basis === 11) && basis === 1 && endDay > 30) endDay = 30;
  if (emr && sd === lastActStart) endDay = lastActDay;
  return datenum(yr, mo, endDay);
}

/** Cash-flow dates (cfdatesi) — only what accrfraci's long-first path needs (sorted, NaN-trimmed). */
function cfdates(settle: number, maturity: number, period: number, emr: number, fcd: number, lcd: number): number[] {
  const ref = refDate(maturity, fcd, lcd);
  const rule = ruleFromEMR(emr);
  const ncd = cpndaten(settle, maturity, period, emr, fcd, lcd);
  const [ncy, ncm] = ymd(ncd);
  const [ry, rm, rd] = ymd(ref);
  const [my, mm] = ymd(maturity);
  const offsetMonths1 = 12 * (ncy - ry) + (ncm - rm);
  const offsetMonths2 = 12 * (my - ry) + (mm - rm);
  const lo = Math.floor(offsetMonths1 * period / 12) - 1;
  const hi = Math.ceil(offsetMonths2 * period / 12) + 1;
  const dates: number[] = [];
  for (let k = lo; k <= hi; k++) {
    const delta = (12 / period) * k;
    const [cd, cmo, cyr] = dateoffset(rd, rm, ry, delta, rule);
    let dn = datenum(cyr, cmo, cd);
    if (!Number.isNaN(fcd) && dn < fcd) dn = fcd;
    if (dn > maturity) dn = maturity;
    if (!Number.isNaN(lcd) && dn > lcd && dn < maturity) dn = lcd;
    if (dn <= settle && dn !== maturity) continue; // flagged NaN
    dates.push(dn);
  }
  // unique + ascending (matches MATLAB unique behaviour, NaN trimmed already)
  return Array.from(new Set(dates)).sort((a, b) => a - b);
}

/** accrfraci core: fraction of coupon period accrued at settlement. */
function accrfraci(settle: number, maturity: number, period: number, basis: number, emr: number, issue: number, fcd: number, lcd: number): number {
  let per = period;
  if (per === 0) per = isISMABasis(basis) ? 1 : 2;

  const prev = cpndatep(settle, maturity, per, emr, issue, fcd, lcd);
  const daysLast = daysdifOne(prev, settle, basis);
  const daysPeriod = cpnpersz(settle, maturity, per, basis, emr, fcd, lcd);
  let frac = daysPeriod !== 0 ? daysLast / daysPeriod : 0;

  // Long first coupon period (actual/actual basis 0 or 8, FirstCouponDate > Settle).
  if (!Number.isNaN(issue) && !Number.isNaN(fcd) && fcd > settle && (basis === 0 || basis === 8)) {
    const prevIssue = datemnth(issue, -12, 0, basis, emr);
    const cf = cfdates(prevIssue, maturity, per, emr, NaN, fcd);
    const wholePeriods = cf.filter((d) => d >= issue && d <= settle).length - 1;

    // Accrued portion of the quasi-coupon period containing the issue date.
    const aftIssue = cf.find((d) => d >= issue);
    const befIssue = [...cf].reverse().find((d) => d < issue);
    let issueFrac = 0;
    if (befIssue != null && aftIssue != null) {
      const i2a = daysdifOne(issue, aftIssue, basis);
      const p2a = daysdifOne(befIssue, aftIssue, basis);
      issueFrac = i2a / p2a;
    }
    // Accrued portion of the quasi-coupon period containing settlement.
    const aftSet = cf.find((d) => d > settle);
    const befSet = [...cf].reverse().find((d) => d <= settle);
    const prev2settle = daysdifOne(befSet!, settle, basis);
    const prev2first = daysdifOne(befSet!, aftSet!, basis);
    const settleFrac = prev2settle / prev2first;

    frac = issueFrac + wholePeriods + settleFrac;
  }

  if (period === 0) frac = 0; // zero-coupon bond
  return frac;
}

// acrubond — accrued interest of a security with periodic interest payments.
// acrubond(IssueDate, Settle, FirstCouponDate, Face, CouponRate[, Period][, Basis]).
// Returns |first cash-flow accrued| = Face * CouponRate/Period * accruedFraction.
function acrubondOne(issue: number, settle: number, fcd: number, face: number, cpn: number, period: number, basis: number): number {
  // Maturity used by cfamounts: datemnth(max(fcd,settle), 12). EndMonthRule default = 1.
  const emr = 1;
  const maturity = datemnth(Math.max(fcd, settle), 12, 0, basis, emr);
  const frac = accrfraci(settle, maturity, period, basis, emr, issue, fcd, NaN);
  return Math.abs(face * (cpn / period) * frac);
}

function acrubondImpl(args: Value[]): Value {
  if (args.length < 5) throw new MatError('acrubond: requires IssueDate, Settle, FirstCouponDate, Face, CouponRate');
  const id = asSerials(args[0], 'acrubond');
  const sd = asSerials(args[1], 'acrubond');
  const fd = asSerials(args[2], 'acrubond');
  const rv = toArray(m(args[3]));
  const cpn = toArray(m(args[4]));
  const per = args[5] != null ? toArray(m(args[5])) : [2];
  const basis = args[6] != null ? toArray(m(args[6])) : [0];
  const n = Math.max(id.length, sd.length, fd.length, rv.length, cpn.length, per.length, basis.length);
  const pick = (cc: number[], i: number) => cc[cc.length === 1 ? 0 : i];
  const out: number[] = [];
  for (let i = 0; i < n; i++) {
    out.push(acrubondOne(pick(id, i), pick(sd, i), pick(fd, i), pick(rv, i), pick(cpn, i), Math.round(pick(per, i)), Math.round(pick(basis, i))));
  }
  return out.length === 1 ? scalar(out[0]) : colVec(out);
}

// ── Bond price/yield/duration/convexity (cfamounts-based) ───────────────────────────
// Faithful subset of the Financial Toolbox bond suite for plain numeric args. Covers the
// regular and odd-first-period paths via the existing coupon-date machinery. Conventions:
//   • Cash flows: each coupon = Face*CouponRate/Period; the last adds Face.
//   • Accrued interest uses the accrual Basis (accrfraci, as in cfamounts/acrubond).
//   • TFactors (time factors, in coupon periods) are ALWAYS actual/actual (the SIA default
//     DiscountBasis): TF(first coupon) = (nextQuasi-Settle)/(nextQuasi-prevQuasi), then +1.
//   • Compounding frequency = Period for the discount exponent base (1+Yield/Freq), where
//     Freq defaults to 2 for SIA bases (0-7,13) and 1 for ISMA bases (8-12).
interface BondCF { cf: number[]; tf: number[]; accrued: number; freq: number; }

/** cfamounts core for a single bond from plain args. EndMonthRule=1, no issue/first/last. */
function bondCfamounts(coupon: number, settle: number, maturity: number, period: number, basis: number, face: number): BondCF {
  const per = period === 0 ? (isISMABasis(basis) ? 1 : 2) : period;
  const prevQ = cpndatepq(settle, maturity, per, 1, NaN, NaN);
  const nextQ = cpndatenq(settle, maturity, per, 1, NaN, NaN);
  // Actual/actual time fraction to the next quasi-coupon date.
  const timeFraction = (nextQ - settle) / (nextQ - prevQ);
  // Coupon dates from the next actual coupon to maturity.
  const firstCoupon = cpndaten(settle, maturity, per, 1, NaN, NaN);
  const dates: number[] = [];
  let d = firstCoupon;
  // walk coupon dates forward until maturity (inclusive) via dateoffset on maturity's day.
  const [my, mm, md] = ymd(maturity);
  let k = 0;
  // number of whole periods between firstCoupon and maturity
  const [fy, fm] = ymd(firstCoupon);
  const monthsBetween = 12 * (my - fy) + (mm - fm);
  const nWhole = Math.round(monthsBetween * per / 12);
  for (k = 0; k <= nWhole; k++) {
    const [cd, cmo, cyr] = dateoffset(md, mm, my, -(12 / per) * (nWhole - k), 0);
    dates.push(datenum(cyr, cmo, cd));
    void fm; void d;
  }
  d = dates[dates.length - 1];
  const couponAmt = face * coupon / per;
  const cfAll: number[] = []; const tfAll: number[] = [];
  const accFrac = accrfraci(settle, maturity, period, basis, 1, NaN, NaN, NaN);
  const accrued = Math.abs(face * (coupon / per) * accFrac);
  cfAll.push(-accrued); tfAll.push(0);
  for (let i = 0; i < dates.length; i++) {
    let amt = couponAmt;
    if (i === dates.length - 1) amt += face;
    cfAll.push(amt);
    tfAll.push(timeFraction + i);
  }
  const freq = isISMABasis(basis) ? 1 : 2;
  return { cf: cfAll, tf: tfAll, accrued, freq };
}

/** Dirty price = sum CF*(1+y/freq)^(-TF). */
function bondDirtyPrice(b: BondCF, yld: number): number {
  let p = 0;
  for (let i = 0; i < b.cf.length; i++) p += b.cf[i] / (1 + yld / b.freq) ** b.tf[i];
  return p;
}

function bondScalarArgs(a: Value[], ctx: string): { settle: number; maturity: number; period: number; basis: number; face: number } {
  const settle = asScalarSerial(a[2], ctx);
  const maturity = asScalarSerial(a[3], ctx);
  const period = a.length > 4 && isMat(a[4]) && (a[4] as Mat).rows ? Math.round(asScalar(a[4])) : 2;
  const basis = a.length > 5 && isMat(a[5]) && (a[5] as Mat).rows ? Math.round(asScalar(a[5])) : 0;
  const face = a.length > 11 && isMat(a[11]) && (a[11] as Mat).rows ? asScalar(a[11]) : 100;
  return { settle, maturity, period, basis, face };
}

/** bndprice(Yield,CouponRate,Settle,Maturity[,Period,Basis,...,Face]) → [Price, AccruedInt]. */
function bndpriceImpl(a: Value[]): Value[] {
  const yld = asScalar(a[0]); const coupon = asScalar(a[1]);
  const { settle, maturity, period, basis, face } = bondScalarArgs(a, 'bndprice');
  const b = bondCfamounts(coupon, settle, maturity, period, basis, face);
  // Sum of ALL cash flows (including the -accrued term at t=0) is the clean price.
  const clean = bondDirtyPrice(b, yld);
  return [scalar(clean), scalar(b.accrued)];
}

/** bndyield(Price,CouponRate,Settle,Maturity[,...]) → Yield (solve dirty price). */
function bndyieldImpl(a: Value[]): Value {
  const price = asScalar(a[0]); const coupon = asScalar(a[1]);
  const { settle, maturity, period, basis, face } = bondScalarArgs(a, 'bndyield');
  const b = bondCfamounts(coupon, settle, maturity, period, basis, face);
  // bondDirtyPrice sums all CFs (incl. -accrued at t=0) → clean price; solve to match Price.
  const f = (y: number) => bondDirtyPrice(b, y) - price;
  // Bracket then bisection (price is monotone decreasing in yield).
  let lo = -0.99 * b.freq + 1e-9, hi = 1.0;
  let flo = f(lo), fhi = f(hi);
  let tries = 0;
  while (flo * fhi > 0 && tries < 60) { hi *= 1.5; fhi = f(hi); tries++; }
  if (flo * fhi > 0) return scalar(NaN);
  for (let i = 0; i < 200; i++) {
    const mid = 0.5 * (lo + hi); const fm = f(mid);
    if (Math.abs(fm) < 1e-12 || (hi - lo) < 1e-15) { lo = hi = mid; break; }
    if (flo * fm < 0) { hi = mid; fhi = fm; } else { lo = mid; flo = fm; }
  }
  return scalar(0.5 * (lo + hi));
}

/** Periodic Macaulay duration A/B from cfamounts + yield. */
function bondDuration(b: BondCF, yld: number): { per: number; year: number; mod: number } {
  let A = 0, B = 0;
  for (let i = 1; i < b.cf.length; i++) {
    const disc = b.cf[i] / (1 + yld / b.freq) ** b.tf[i];
    A += b.tf[i] * disc; B += disc;
  }
  const per = A / B;
  const year = per / b.freq;
  const mod = year / (1 + yld / b.freq);
  return { per, year, mod };
}

/** Periodic/yearly convexity from cfamounts + yield. */
function bondConvexity(b: BondCF, yld: number): { per: number; year: number } {
  let A = 0, C = 0;
  for (let i = 1; i < b.cf.length; i++) {
    const tf1 = b.tf[i]; const tf2 = 1 + tf1;
    const base = (1 + yld / b.freq) ** tf1;
    A += tf1 * tf2 * b.cf[i] / base;
    C += b.cf[i] / base;
  }
  const Bden = (1 + yld / b.freq) ** 2;
  const per = A / (Bden * C);
  const year = per / b.freq ** 2;
  return { per, year };
}

/** bnddury(Yield,CouponRate,Settle,Maturity[,...]) → [ModDuration, YearDuration, PerDuration]. */
function bnddffuryImpl(a: Value[]): Value[] {
  const yld = asScalar(a[0]); const coupon = asScalar(a[1]);
  const { settle, maturity, period, basis, face } = bondScalarArgs(a, 'bnddury');
  const b = bondCfamounts(coupon, settle, maturity, period, basis, face);
  const dur = bondDuration(b, yld);
  return [scalar(dur.mod), scalar(dur.year), scalar(dur.per)];
}

/** bnddurp(Price,CouponRate,Settle,Maturity[,...]) → [ModDuration, YearDuration, PerDuration]. */
function bnddurpImpl(a: Value[]): Value[] {
  const yld = asScalar(bndyieldImpl(a));
  const ya = [scalar(yld), ...a.slice(1)];
  return bnddffuryImpl(ya);
}

/** bndconvy(Yield,...) → [YearConvexity, PerConvexity]. */
function bndconvyImpl(a: Value[]): Value[] {
  const yld = asScalar(a[0]); const coupon = asScalar(a[1]);
  const { settle, maturity, period, basis, face } = bondScalarArgs(a, 'bndconvy');
  const b = bondCfamounts(coupon, settle, maturity, period, basis, face);
  const cv = bondConvexity(b, yld);
  return [scalar(cv.year), scalar(cv.per)];
}

/** bndconvp(Price,...) → [YearConvexity, PerConvexity]. */
function bndconvpImpl(a: Value[]): Value[] {
  const yld = asScalar(bndyieldImpl(a));
  return bndconvyImpl([scalar(yld), ...a.slice(1)]);
}

// ── ts2func — encapsulate a time series as a zero-order-hold function of time ─────────
function ts2funcImpl(a: Value[]): Value {
  const arr = m(a[0]);
  // parse optional 'Times' name/value pair.
  let times: number[] | null = null;
  for (let i = 1; i + 1 < a.length; i += 2) {
    const ai = a[i];
    let nm = '';
    if (isStr(ai)) nm = ai.items[0] ?? '';
    else if (isMat(ai) && ai.isChar) nm = Array.from(ai.data).map((c) => String.fromCharCode(c)).join('');
    if (nm.toLowerCase() === 'times') times = toArray(m(a[i + 1]));
  }
  // Interpret the array as a time series: rows = time (TimeDimension default 1).
  const isVec = arr.rows === 1 || arr.cols === 1;
  const nTime = isVec ? arr.rows * arr.cols : arr.rows;
  const nVars = isVec ? 1 : arr.cols;
  if (!times) { times = []; for (let i = 0; i < nTime; i++) times.push(i); }
  // Row r as a column vector (NVARS x 1).
  const rowOf = (r: number): Value => {
    if (isVec) return scalar(arr.data[r]);
    const out = new Float64Array(nVars);
    for (let c = 0; c < nVars; c++) out[c] = arr.data[r + c * arr.rows];
    return colVec(Array.from(out));
  };
  const tArr = times;
  const call = (cargs: Value[]): Promise<Value[]> => {
    const t = asScalar(cargs[0]);
    // zero-order hold: largest index with times <= t; if t < times(1) → first.
    let idx = 0;
    if (t < tArr[0]) idx = 0;
    else { idx = 0; for (let i = 0; i < tArr.length; i++) if (tArr[i] <= t) idx = i; }
    return Promise.resolve([rowOf(idx)]);
  };
  return { kind: 'handle', name: 'ts2func', call } as Value;
}

// prcroc — Price Rate-Of-Change technical indicator (faithful port of prcroc.m).
// PriceChangeRate(k) = (P(k) - P(k-N+1)) / P(k-N+1) * 100, NaN-padded for the first N-1.
function prcrocImpl(args: Value[]): Value {
  if (args.length < 1) throw new MatError('prcroc: requires Data');
  const close = toArray(m(args[0]));
  const numObs = close.length;
  const numPeriods = args[1] != null ? Math.round(asScalar(args[1])) : 12;
  if (numPeriods < 1) throw new MatError('prcroc: NumPeriods must be a positive integer');
  if (numPeriods > numObs) throw new MatError('prcroc: NumPeriods must be <= number of observations');
  const out: number[] = [];
  for (let i = 0; i < numPeriods - 1; i++) out.push(NaN);
  for (let k = numPeriods - 1; k < numObs; k++) {
    const base = close[k - (numPeriods - 1)];
    out.push((close[k] - base) / base * 100);
  }
  return colVec(out);
}

// abs2active / active2abs — portfolio constraint conversions between absolute and active
// (index-relative) weight formats. ConSet = [A b], NCONSTRAINTS x (NASSETS+1). Faithful port:
// abs→active sets b' = b - A*Index, active→abs sets b' = b + A*Index. A is left unchanged.
function convertConSet(conSetV: Value, indexV: Value, ctx: string, sign: 1 | -1): Value {
  const conSet = m(conSetV);
  const index = toArray(m(indexV));
  const nAssets = index.length;
  const rows = conSet.rows;
  const cols = conSet.cols;
  if (cols - 1 !== nAssets) throw new MatError(`${ctx}: inconsistent dimensions (ConSet has ${cols} cols, Index has ${nAssets} assets)`);
  const out = mat(rows, cols, conSet.data.slice());
  for (let r = 0; r < rows; r++) {
    let dot = 0;
    for (let c = 0; c < nAssets; c++) dot += conSet.data[r + c * rows] * index[c];
    // last column (b) at column index cols-1
    out.data[r + (cols - 1) * rows] = conSet.data[r + (cols - 1) * rows] + sign * dot;
  }
  return out;
}

export const FINANCIAL: ToolboxModule = {
  id: 'finance',
  name: 'Financial Toolbox',
  docBase: 'https://www.mathworks.com/help/finance/',
  builtins: {
    // ── cashflow analysis ──
    npv: (a) => ret(scalar(npv(asScalar(a[0]), toArray(m(a[1]))))),
    pvvar: (a) => ret(scalar(npv(arg(a, 1, 0), toArray(m(a[0]))))),     // pvvar(cf, rate) — present value of varying cashflow
    fvvar: (a) => { const cf = toArray(m(a[0])); const r = arg(a, 1, 0); const n = cf.length - 1; return ret(scalar(cf.reduce((s, c, t) => s + c * (1 + r) ** (n - t), 0))); },
    irr: (a) => {
      const cf = toArray(m(a[0]));
      const f = (r: number) => npv(r, cf);
      // bisection on [-0.9999, 10]; fall back to NaN if no sign change
      let lo = -0.9999, hi = 10; const flo = f(lo), fhi = f(hi);
      if (flo * fhi > 0) return ret(scalar(NaN));
      for (let i = 0; i < 200; i++) { const mid = (lo + hi) / 2; const fm = f(mid); if (Math.abs(fm) < 1e-12) { lo = hi = mid; break; } if (flo * fm < 0) hi = mid; else lo = mid; }
      return ret(scalar((lo + hi) / 2));
    },

    // ── annuities (rate r per period, n periods, payment pmt) ──
    /** pvfix(rate,nper,pmt[,extra][,due]) — present value of a fixed annuity. */
    pvfix: (a) => { const r = asScalar(a[0]), n = Math.round(asScalar(a[1])), pmt = asScalar(a[2]); const extra = arg(a, 3, 0), due = arg(a, 4, 0); const f = r === 0 ? n : (1 - (1 + r) ** -n) / r; return ret(scalar(pmt * f * (1 + r * due) + extra * (1 + r) ** -n)); },
    /** fvfix(rate,nper,pmt[,pv][,due]) — future value of a fixed annuity. */
    fvfix: (a) => { const r = asScalar(a[0]), n = Math.round(asScalar(a[1])), pmt = asScalar(a[2]); const pv = arg(a, 3, 0), due = arg(a, 4, 0); const f = r === 0 ? n : ((1 + r) ** n - 1) / r; return ret(scalar(pmt * f * (1 + r * due) + pv * (1 + r) ** n)); },
    /** payper(rate,nper,pv[,fv][,due]) — periodic payment of a loan/annuity. */
    payper: (a) => { const r = asScalar(a[0]), n = Math.round(asScalar(a[1])), pv = asScalar(a[2]); const fv = arg(a, 3, 0), due = arg(a, 4, 0); if (r === 0) return ret(scalar(-(pv + fv) / n)); const pmt = -(pv * (1 + r) ** n + fv) * r / (((1 + r) ** n - 1) * (1 + r * due)); return ret(scalar(pmt)); },
    /** annuity(rate,nper) — present value factor of a unit annuity. */
    annuity: (a) => { const r = asScalar(a[0]), n = Math.round(asScalar(a[1])); return ret(scalar(r === 0 ? n : (1 - (1 + r) ** -n) / r)); },

    // ── rate conversions ──
    effrr: (a) => { const r = asScalar(a[0]), n = Math.round(asScalar(a[1])); return ret(scalar((1 + r / n) ** n - 1)); },
    nomrr: (a) => { const r = asScalar(a[0]), n = Math.round(asScalar(a[1])); return ret(scalar(n * ((1 + r) ** (1 / n) - 1))); },

    // ── Black-Scholes option pricing ──
    /** blsprice(S,K,r,T,sigma[,q]) → [Call, Put]. */
    blsprice: (a, nargout) => {
      const S = asScalar(a[0]), K = asScalar(a[1]), r = asScalar(a[2]), T = asScalar(a[3]), v = asScalar(a[4]), q = arg(a, 5, 0);
      const d1 = (Math.log(S / K) + (r - q + v * v / 2) * T) / (v * Math.sqrt(T)); const d2 = d1 - v * Math.sqrt(T);
      const call = S * Math.exp(-q * T) * normcdf(d1) - K * Math.exp(-r * T) * normcdf(d2);
      const put = K * Math.exp(-r * T) * normcdf(-d2) - S * Math.exp(-q * T) * normcdf(-d1);
      return nargout >= 2 ? Promise.resolve([scalar(call), scalar(put)]) : ret(scalar(call));
    },
    /** blsdelta(S,K,r,T,sigma[,q]) → [CallDelta, PutDelta]. */
    blsdelta: (a, nargout) => {
      const S = asScalar(a[0]), K = asScalar(a[1]), r = asScalar(a[2]), T = asScalar(a[3]), v = asScalar(a[4]), q = arg(a, 5, 0);
      const d1 = (Math.log(S / K) + (r - q + v * v / 2) * T) / (v * Math.sqrt(T));
      const cd = Math.exp(-q * T) * normcdf(d1); const pd = Math.exp(-q * T) * (normcdf(d1) - 1);
      return nargout >= 2 ? Promise.resolve([scalar(cd), scalar(pd)]) : ret(scalar(cd));
    },

    // ── calendar / day-count ──
    days360:   (a) => ret(days360impl(a)),
    daysdif:   (a) => ret(daysdifImpl(a)),
    busdate:   (a) => ret(busdateImpl(a)),
    busdays:   (a) => ret(busdaysImpl(a)),
    datewrkdy: (a) => ret(datewrkdyImpl(a)),
    days252bus: (a) => ret(days252busImpl(a)),
    eomdate: (a) => ret(eomdateImpl(a)),
    calendar: (a) => ret(calendarImpl(a)),
    daysact: (a) => ret(ewDates(a, (d1, d2) => d2 - d1)),
    // ── simple finance formulas (depreciation, returns, quotation) ──
    leapyear: (a) => { const y = m(a[0]); const d = Float64Array.from(toArray(y).map((v) => { v = Math.floor(v); return (v % 4 === 0 && v % 100 !== 0) || v % 400 === 0 ? 1 : 0; })); const r = mat(y.rows, y.cols, d) as Mat; r.isBool = true; return ret(r); },
    depstln: (a) => ret(ewN(a, 3, (c, s, l) => (c - s) / l)),
    deprdv: (a) => ret(ewN(a, 3, (c, s, ac) => c - s - ac)),
    taxedrr: (a) => ret(ewN(a, 2, (r, t) => r * (1 - t))),
    depsoyd: (a) => { const c = asScalar(a[0]), s = asScalar(a[1]), life = asScalar(a[2]); const out: number[] = []; for (let yr = 1; yr <= life; yr++) out.push((c - s) / (life / 2 * (life + 1)) * (life - yr + 1)); return ret(colVec(out)); },
    portror: (a) => { const rs = toArray(m(a[0])), ws = toArray(m(a[1])); let s = 0; for (let i = 0; i < rs.length; i++) s += rs[i] * ws[i]; return ret(scalar(s)); },
    todecimal: (a) => { const frac = a.length > 1 ? asScalar(a[1]) : 32; return ret(ewN(a, 1, (q) => { const w = Math.floor(q); return w + Math.round((q - w) * 100) / frac; })); },
    toquoted: (a) => { const frac = a.length > 1 ? asScalar(a[1]) : 32; return ret(ewN(a, 1, (d) => { const w = Math.floor(d); return w + Math.round((d - w) * frac) / 100; })); },
    thirtytwo2dec: (a) => ret(ewN(a, 2, (n, fr) => n + fr / 32)),
    corr2cov: (a) => { const sig = toArray(m(a[0])), C = m(a[1]), N = sig.length, out = new Float64Array(N * N); for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) out[i + j * N] = C.data[i + j * N] * sig[i] * sig[j]; return ret(mat(N, N, out)); },
    yearfrac: (a) => { const basis = a.length > 2 && isMat(a[2]) && (a[2] as Mat).rows ? asScalar(a[2]) : 0; return ret(ewDates(a, (d1, d2) => yearfracOne(d1, d2, basis))); },
    // ── prmat/yldmat: price & yield of a security paying interest at maturity ──
    prmat: (a, nargout) => {
      const sd = asScalarSerial(a[0], 'prmat'), md = asScalarSerial(a[1], 'prmat'), id = asScalarSerial(a[2], 'prmat');
      const rv = asScalar(a[3]), cpn = asScalar(a[4]), yld = asScalar(a[5]), basis = a.length > 6 ? asScalar(a[6]) : 0;
      const ai = yearfracOne(id, sd, basis) * cpn * rv;
      const p = (rv + yearfracOne(id, md, basis) * cpn * rv) / (1 + yearfracOne(sd, md, basis) * yld) - ai;
      return Promise.resolve(nargout >= 2 ? [scalar(p), scalar(ai)] : [scalar(p)]);
    },
    yldmat: (a) => {
      const sd = asScalarSerial(a[0], 'yldmat'), md = asScalarSerial(a[1], 'yldmat'), id = asScalarSerial(a[2], 'yldmat');
      const rv = asScalar(a[3]), price = asScalar(a[4]), cpn = asScalar(a[5]), basis = a.length > 6 ? asScalar(a[6]) : 0;
      const ai = yearfracOne(id, sd, basis) * cpn * rv;
      const yld = ((rv + yearfracOne(id, md, basis) * cpn * rv) / (price + ai) - 1) / yearfracOne(sd, md, basis);
      return ret(scalar(yld));
    },
    // ── Treasury-bill (actual/360) and discounted-security pricing ──
    prtbill: (a) => { const S = asScalarSerial(a[0], 'prtbill'), M = asScalarSerial(a[1], 'prtbill'); return ret(scalar(asScalar(a[2]) * (1 - asScalar(a[3]) * (M - S) / 360))); },
    yldtbill: (a) => { const S = asScalarSerial(a[0], 'yldtbill'), M = asScalarSerial(a[1], 'yldtbill'), F = asScalar(a[2]), P = asScalar(a[3]); return ret(scalar((F - P) / P * 360 / (M - S))); },
    beytbill: (a) => { const S = asScalarSerial(a[0], 'beytbill'), M = asScalarSerial(a[1], 'beytbill'), D = asScalar(a[2]); return ret(scalar(365 * D / (360 - D * (M - S)))); },
    prdisc: (a) => { const S = asScalarSerial(a[0], 'prdisc'), M = asScalarSerial(a[1], 'prdisc'), basis = a.length > 4 ? asScalar(a[4]) : 0; return ret(scalar(asScalar(a[2]) * (1 - asScalar(a[3]) * (M - S) / yearLenFor(S, basis)))); },
    fvdisc: (a) => { const S = asScalarSerial(a[0], 'fvdisc'), M = asScalarSerial(a[1], 'fvdisc'), basis = a.length > 4 ? asScalar(a[4]) : 0; return ret(scalar(asScalar(a[2]) / (1 - asScalar(a[3]) * (M - S) / yearLenFor(S, basis)))); },
    discrate: (a) => { const S = asScalarSerial(a[0], 'discrate'), M = asScalarSerial(a[1], 'discrate'), F = asScalar(a[2]), P = asScalar(a[3]), basis = a.length > 4 ? asScalar(a[4]) : 0; return ret(scalar((F - P) / F * yearLenFor(S, basis) / (M - S))); },
    days365: (a) => ret(ewDates(a, (d1, d2) => { const [y1, m1, dd1] = ymd(d1), [y2, m2, dd2] = ymd(d2); return 365 * (y2 - y1) + DAYTOTAL365[m2 - 1] - DAYTOTAL365[m1 - 1] + dd2 - dd1; })),
    yeardays: (a) => ret(yeardaysImpl(a)),
    thirdwednesday: (a) => Promise.resolve(thirdwednesdayImpl(a)),
    juliandate: (a) => ret(juliandateImpl(a)),
    weeknum: (a) => ret(weeknumImpl(a)),

    // ── more cashflow / fixed-income ──
    payadv: (a) => ret(payadvImpl(a)),
    tbillyield2disc: (a) => ret(tbillyield2discImpl(a)),
    acrubond: (a) => ret(acrubondImpl(a)),
    prcroc: (a) => ret(prcrocImpl(a)),

    // ── bond price / yield / duration / convexity (scalar plain-numeric forms) ──
    bndprice: (a, nargout) => { const r = bndpriceImpl(a); return Promise.resolve((nargout ?? 1) >= 2 ? r : [r[0]]); },
    bndyield: (a) => ret(bndyieldImpl(a)),
    bnddury: (a, nargout) => { const r = bnddffuryImpl(a); return Promise.resolve((nargout ?? 1) >= 2 ? r.slice(0, nargout) : [r[0]]); },
    bnddurp: (a, nargout) => { const r = bnddurpImpl(a); return Promise.resolve((nargout ?? 1) >= 2 ? r.slice(0, nargout) : [r[0]]); },
    bndconvy: (a, nargout) => { const r = bndconvyImpl(a); return Promise.resolve((nargout ?? 1) >= 2 ? r : [r[0]]); },
    bndconvp: (a, nargout) => { const r = bndconvpImpl(a); return Promise.resolve((nargout ?? 1) >= 2 ? r : [r[0]]); },
    ts2func: (a) => ret(ts2funcImpl(a)),

    // ── portfolio constraint conversions ──
    abs2active: (a) => ret(convertConSet(a[0], a[1], 'abs2active', -1)),
    active2abs: (a) => ret(convertConSet(a[0], a[1], 'active2abs', 1)),
  },
  help: {
    npv: { summary: 'Net present value of a cash flow stream', syntax: ['npv_val = npv(rate,cashflow)'], description: ['npv_val = npv(rate,cashflow) computes the net present value of cashflow at periodic discount rate rate. cashflow(1) is at t=0 (not discounted); cashflow(k) is discounted by (1+rate)^(k-1).', 'Use a negative initial element to represent an upfront investment.'], seealso: ['irr', 'pvvar', 'fvvar'] },
    pvvar: { summary: 'Present value of varying (irregular) cash flow', syntax: ['PresentVal = pvvar(CashFlow,Rate)'], description: ['PresentVal = pvvar(CashFlow,Rate) computes the present value of an irregular cash flow stream CashFlow at discount rate Rate.', 'CashFlow is a vector where the first element is the initial investment (negative) and subsequent elements are cash inflows.'], seealso: ['fvvar', 'irr', 'pvfix'] },
    fvvar: { summary: 'Future value of varying (irregular) cash flow', syntax: ['FutureVal = fvvar(CashFlow,Rate)'], description: ['FutureVal = fvvar(CashFlow,Rate) computes the future value (at the end of the last period) of an irregular cash flow stream at rate Rate.'], seealso: ['pvvar', 'irr', 'fvfix'] },
    irr: { summary: 'Internal rate of return of a cash flow', syntax: ['Return = irr(CashFlow)', '[Return,AllRates] = irr(CashFlow)'], description: ['Return = irr(CashFlow) calculates the internal rate of return for a series of periodic cash flows. CashFlow(1) is the initial investment (typically negative) and subsequent elements are inflows.', '[Return,AllRates] = irr(CashFlow) also returns all roots of the NPV polynomial, not just the principal root.'], seealso: ['npv', 'pvvar', 'pvfix', 'effrr'] },
    pvfix: { summary: 'Present value of fixed periodic payments', syntax: ['PresentVal = pvfix(Rate,NumPeriods,Payment)', 'PresentVal = pvfix(Rate,NumPeriods,Payment,FutureVal,Due)'], description: ['PresentVal = pvfix(Rate,NumPeriods,Payment) computes the present value of an annuity of fixed periodic payments at discount rate Rate for NumPeriods periods.'], seealso: ['fvfix', 'payper', 'pvvar'] },
    fvfix: { summary: 'Future value of fixed periodic payments', syntax: ['FutureVal = fvfix(Rate,NumPeriods,Payment)', 'FutureVal = fvfix(Rate,NumPeriods,Payment,PresentVal,Due)'], description: ['FutureVal = fvfix(Rate,NumPeriods,Payment) computes the future value of an annuity of fixed periodic payments.'], seealso: ['pvfix', 'payper', 'fvvar'] },
    payper: { summary: 'Periodic payment of a loan or annuity', syntax: ['Payment = payper(Rate,NumPeriods,PresentVal)', 'Payment = payper(Rate,NumPeriods,PresentVal,FutureVal,Due)'], description: ['Payment = payper(Rate,NumPeriods,PresentVal) returns the periodic payment needed to repay a present value PresentVal over NumPeriods periods at interest rate Rate.'], seealso: ['pvfix', 'fvfix', 'annuity'] },
    annuity: { summary: 'Present value annuity factor', syntax: ['f = annuity(rate,nper)'], description: ['f = annuity(rate,nper) returns the present value factor of an ordinary annuity: (1-(1+rate)^(-nper))/rate.', 'Multiply by the periodic payment to get the present value of the annuity stream.'], seealso: ['pvfix', 'fvfix', 'payper'] },
    effrr: { summary: 'Effective annual rate of return from nominal rate', syntax: ['Return = effrr(Rate,NumPeriods)'], description: ['Return = effrr(Rate,NumPeriods) calculates the annual effective rate corresponding to a nominal rate Rate compounded NumPeriods times per year.', 'Uses the formula: Return = (1 + Rate/NumPeriods)^NumPeriods - 1.'], seealso: ['nomrr', 'pvfix'] },
    nomrr: { summary: 'Nominal rate of return from effective rate', syntax: ['nom = nomrr(eff,nper)'], description: ['nom = nomrr(eff,nper) returns the nominal rate corresponding to an effective annual rate eff compounded nper times per year: nom = nper*((1+eff)^(1/nper)-1).'], seealso: ['effrr', 'pvfix'] },
    blsprice: { summary: 'Black-Scholes European option prices (call and put)', syntax: ['[Call,Put] = blsprice(Price,Strike,Rate,Time,Volatility)', '[Call,Put] = blsprice(Price,Strike,Rate,Time,Volatility,Yield)'], description: ['[Call,Put] = blsprice(Price,Strike,Rate,Time,Volatility) computes European put and call option prices using the Black-Scholes model.', 'Price is the current asset price, Strike the exercise price, Rate the continuously compounded risk-free rate, Time the time to expiry in years, Volatility the annualised volatility, and Yield the continuous dividend yield (default 0).'], seealso: ['blsdelta', 'blsgamma', 'blsvega', 'blsrho', 'blsimpv'] },
    blsdelta: { summary: 'Black-Scholes option delta (sensitivity to underlying price)', syntax: ['[callDelta,putDelta] = blsdelta(S,K,r,T,sigma)', '[callDelta,putDelta] = blsdelta(S,K,r,T,sigma,q)'], description: ['[callDelta,putDelta] = blsdelta(S,K,r,T,sigma) computes the delta of European call and put options using the Black-Scholes model.', 'q is the continuous dividend yield (default 0). Delta ranges from 0 to 1 for calls and -1 to 0 for puts.'], seealso: ['blsprice', 'blsvega', 'blsgamma'] },
    days360: { summary: 'Days between dates using 30/360 (SIA) convention', syntax: ['NumDays = days360(StartDate,EndDate)'], description: ['NumDays = days360(StartDate,EndDate) returns the number of days between StartDate and EndDate based on a 360-day year where all months contain 30 days, following the SIA convention.', 'Month-end days of 31 are adjusted to 30; February month-end is extended to 30.'], seealso: ['daysdif', 'daysact', 'days365', 'yearfrac'] },
    daysdif: { summary: 'Days between dates for a given day-count basis', syntax: ['d = daysdif(d1,d2,basis)'], description: ['d = daysdif(d1,d2,basis) computes the number of days between dates d1 and d2 using the specified day-count convention: 0=actual/actual, 1=30/360, 2=actual/360, 3=actual/365, 4=30/360 (European).'], seealso: ['daysact', 'days360', 'days365'] },
    busdate: { summary: 'Next or previous business day', syntax: ['d = busdate(d)', 'd = busdate(d,dir)'], description: ["d = busdate(d) returns the next business day (weekday) on or after d.", "dir = 1 (default) for next business day, -1 for previous."], seealso: ['datewrkdy', 'days252bus', 'busdays'] },
    busdays: { summary: 'Vector of business days between two dates', syntax: ['bdates = busdays(sdate,edate)', 'bdates = busdays(sdate,edate,bdmode,Holiday)'], description: ['bdates = busdays(sdate,edate) generates a column vector of business days (weekdays) from sdate to edate inclusive.', 'bdmode selects the business-day convention; Holiday is an optional vector of additional holiday serial dates to exclude.'], seealso: ['busdate', 'days252bus', 'daysact'] },
    datewrkdy: { summary: 'Date a specified number of work days from a starting date', syntax: ['d = datewrkdy(d0,n)', 'd = datewrkdy(d0,n,hol)'], description: ['d = datewrkdy(d0,n) returns the date that is n working days (Mon–Fri) after date d0.', 'n can be negative to count backwards; hol is an optional vector of holiday serial dates to exclude.'], seealso: ['busdate', 'days252bus', 'datenum'] },
    days252bus: { summary: 'Number of 252 business days between two dates', syntax: ['d = days252bus(d1,d2)'], description: ['d = days252bus(d1,d2) counts business days between d1 and d2 assuming a 252-trading-day year (standard in Brazilian financial markets).'], seealso: ['busdays', 'busdate', 'daysact'] },
    eomdate: { summary: 'Last date of the specified month', syntax: ['d = eomdate(year,month)'], description: ['d = eomdate(year,month) returns the serial date number of the last day of the given month and year.'], seealso: ['busdate', 'datewrkdy', 'datenum'] },
    calendar: { summary: 'Calendar matrix for a specified month (6-by-7)', syntax: ['cal = calendar', 'cal = calendar(d)', 'cal = calendar(year,month)'], description: ['calendar returns a 6-by-7 matrix of dates for the current month, with zeros padding days before/after the month.', 'Columns represent Sunday through Saturday.'], seealso: ['eomdate', 'busdate', 'datestr'] },
    daysact: { summary: 'Actual number of days between two dates', syntax: ['d = daysact(d1,d2)'], description: ['d = daysact(d1,d2) returns the actual (Act/Act) number of days between dates d1 and d2.'], seealso: ['daysdif', 'days360', 'days365'] },
    yearfrac: { summary: 'Fraction of year between two dates for a day-count basis', syntax: ['f = yearfrac(StartDate,EndDate)', 'f = yearfrac(StartDate,EndDate,Basis)'], description: ['f = yearfrac(StartDate,EndDate) returns the fraction of a year between StartDate and EndDate using actual/actual day-count (basis 0).', 'Basis: 0=Act/Act (default), 1=30/360, 2=Act/360, 3=Act/365, 4=30/360 European.'], seealso: ['days360', 'daysact', 'daysdif', 'yeardays'] },
    leapyear: { summary: 'Determine leap years', syntax: ['tf = leapyear(year)'], seealso: ['datenum', 'eomday'] },
    depstln: { summary: 'Straight-line depreciation schedule', syntax: ['d = depstln(cost,salvage,life)'], seealso: ['depsoyd', 'deprdv'] },
    deprdv: { summary: 'Remaining depreciable value', syntax: ['rdv = deprdv(cost,salvage,accumdep)'], seealso: ['depstln', 'depsoyd'] },
    taxedrr: { summary: 'After-tax rate of return', syntax: ['r = taxedrr(pretax,taxrate)'], seealso: ['effrr', 'nomrr'] },
    depsoyd: { summary: 'Sum of years digits depreciation', syntax: ['d = depsoyd(cost,salvage,life)'], seealso: ['depstln', 'deprdv'] },
    portror: { summary: 'Portfolio expected rate of return', syntax: ['r = portror(returns,weights)'], seealso: ['portstats'] },
    todecimal: { summary: 'Fractional to decimal conversion', syntax: ['d = todecimal(quote)', 'd = todecimal(quote,fraction)'], seealso: ['toquoted'] },
    toquoted: { summary: 'Decimal to fractional conversion', syntax: ['q = toquoted(decimal)', 'q = toquoted(decimal,fraction)'], seealso: ['todecimal'] },
    thirtytwo2dec: { summary: 'Thirty-second quotation to decimal', syntax: ['d = thirtytwo2dec(n,fraction)'], seealso: ['todecimal'] },
    corr2cov: { summary: 'Convert standard deviation and correlation to covariance', syntax: ['cov = corr2cov(sigma,corr)'], seealso: ['cov2corr', 'corrcoef'] },
    prmat: { summary: 'Price and accrued interest of a security paying interest at maturity', syntax: ['[price,ai] = prmat(settle,maturity,issue,face,coupon,yield)', '[price,ai] = prmat(...,basis)'], description: ['[price,ai] = prmat(settle,maturity,issue,face,coupon,yield) returns the price per $100 face value and the accrued interest of a security that pays all interest at maturity (no periodic coupons).', 'basis selects the day-count convention (default 0 = actual/actual).'], seealso: ['yldmat', 'prdisc', 'acrudisc'] },
    yldmat: { summary: 'Yield of a security paying interest at maturity', syntax: ['yld = yldmat(settle,maturity,issue,face,price,coupon)', 'yld = yldmat(...,basis)'], description: ['yld = yldmat(settle,maturity,issue,face,price,coupon) returns the yield of a security that pays all interest at maturity (no periodic coupons) given its price.'], seealso: ['prmat', 'ylddisc'] },
    days365: { summary: 'Days between dates on a 365-day year basis', syntax: ['d = days365(d1,d2)'], description: ['d = days365(d1,d2) returns the number of days between d1 and d2 based on an Act/365 convention (ignores leap years).'], seealso: ['daysact', 'days360', 'daysdif'] },
    prtbill: { summary: 'Price of Treasury bill from discount rate', syntax: ['Price = prtbill(Settle,Maturity,Discount)'], description: ['Price = prtbill(Settle,Maturity,Discount) returns the price per $100 face value of a Treasury bill given the settlement date, maturity date, and bank discount rate.'], seealso: ['yldtbill', 'beytbill', 'prdisc'] },
    yldtbill: { summary: 'Yield of Treasury bill from price', syntax: ['Yield = yldtbill(Settle,Maturity,Price)'], description: ['Yield = yldtbill(Settle,Maturity,Price) returns the money-market yield of a Treasury bill given its price per $100 face value.'], seealso: ['prtbill', 'beytbill', 'discrate'] },
    beytbill: { summary: 'Bond-equivalent yield of Treasury bill', syntax: ['BEY = beytbill(Settle,Maturity,Discount)'], description: ['BEY = beytbill(Settle,Maturity,Discount) converts a T-bill bank discount rate to bond-equivalent yield (semi-annual basis, actual/actual).'], seealso: ['prtbill', 'yldtbill', 'discrate'] },
    prdisc: { summary: 'Price of a discounted security', syntax: ['Price = prdisc(Settle,Maturity,Discount,Basis)'], description: ['Price = prdisc(Settle,Maturity,Discount,Basis) returns the price per $100 face value of a discounted (zero-coupon) security.'], seealso: ['fvdisc', 'discrate', 'prtbill'] },
    fvdisc: { summary: 'Future value of a discounted security', syntax: ['FutureVal = fvdisc(Settle,Maturity,Price,Basis)'], description: ['FutureVal = fvdisc(Settle,Maturity,Price,Basis) returns the future (redemption) value of a discounted security given its purchase price.'], seealso: ['prdisc', 'discrate'] },
    discrate: { summary: 'Bank discount rate of a security', syntax: ['Discount = discrate(Settle,Maturity,Price,Basis)'], description: ['Discount = discrate(Settle,Maturity,Price,Basis) returns the bank discount rate corresponding to the given price of a discounted security.'], seealso: ['prdisc', 'fvdisc', 'yldtbill'] },
    yeardays: { summary: 'Number of days in a year for a given day-count basis', syntax: ['Days = yeardays(Year)', 'Days = yeardays(Year,Basis)'], description: ['Days = yeardays(Year) returns 365 for a common year or 366 for a leap year.', 'Days = yeardays(Year,Basis) returns the day-count year length: basis 0 and 3 use actual days; basis 1, 2, 4 use 360.'], seealso: ['daysact', 'days360', 'days365', 'yearfrac'] },
    thirdwednesday: { summary: 'Beginning and end dates for LIBOR contracts (third Wednesdays)', syntax: ['[BeginDates,EndDates] = thirdwednesday(Month,Year)', '[BeginDates,EndDates] = thirdwednesday(Month,Year,outputType)'], description: ['[BeginDates,EndDates] = thirdwednesday(Month,Year) computes the beginning and end period dates for LIBOR contracts — the third Wednesdays of consecutive delivery months.', 'Month and Year can be scalars or vectors for multiple contracts.'], seealso: ['busdate', 'eomdate'] },
    juliandate: { summary: 'Julian date from calendar date', syntax: ['jd = juliandate(year,month,day)', 'jd = juliandate(year,month,day,hour,minute,second)'], description: ['jd = juliandate(year,month,day) returns the Julian date number — a continuous day count from noon on January 1, 4713 BC.', 'Optional hour, minute, second arguments add a fractional day component.'], seealso: ['datenum', 'datestr'] },
    weeknum: { summary: 'Week number of the year for a given date', syntax: ['w = weeknum(d)', 'w = weeknum(d,weekstart)'], description: ['w = weeknum(d) returns the ISO week number (1–53) for serial date d, with weeks starting on Sunday.', 'weekstart sets the starting weekday: 1=Sunday (default), 2=Monday.'], seealso: ['datenum', 'daysdif', 'eomdate'] },
    payadv: { summary: 'Periodic payment given a number of advance payments', syntax: ['Payment = payadv(Rate,NumPeriods,PresentValue,FutureValue,Advance)'], description: ['Payment = payadv(Rate,NumPeriods,PresentValue,FutureValue,Advance) computes the periodic payment when Advance payments are made at the start of the period.', 'Unlike payper (end-of-period), payadv accounts for the reduced effective borrowing period caused by upfront payments.'], seealso: ['payper', 'pvfix', 'fvfix'] },
    tbillyield2disc: { summary: 'Convert T-bill yield to bank discount rate', syntax: ['Discount = tbillyield2disc(Yield,Settle,Maturity)', 'Discount = tbillyield2disc(Yield,Settle,Maturity,Type)'], description: ['Discount = tbillyield2disc(Yield,Settle,Maturity) converts the money-market yield of a Treasury bill to its bank discount rate.', 'Type selects the yield convention: 0=money-market yield (default), 1=bond-equivalent yield.'], seealso: ['prtbill', 'yldtbill', 'beytbill'] },
    acrubond: { summary: 'Accrued interest of a bond with periodic interest payments', syntax: ['AccruInterest = acrubond(IssueDate,Settle,FirstCouponDate,Face,CouponRate)', 'AccruInterest = acrubond(___,Period,Basis)'], description: ['AccruInterest = acrubond(IssueDate,Settle,FirstCouponDate,Face,CouponRate) returns the accrued interest for a coupon bond from issue date to settlement.', 'Period is the number of coupon payments per year (default 2); Basis is the day-count convention (default 0 = actual/actual).'], seealso: ['bndprice', 'bndyield', 'days360', 'cfamounts'] },
    prcroc: { summary: 'Price rate-of-change technical indicator', syntax: ['PriceChangeRate = prcroc(Data)', 'PriceChangeRate = prcroc(Data,Name,Value)'], description: ['PriceChangeRate = prcroc(Data) calculates the price rate-of-change from closing prices, defined as (Price(t) - Price(t-n)) / Price(t-n) * 100.', 'Input Data can be a numeric vector, timetable, or table.'], seealso: ['rsindex', 'macd', 'volroc'] },
    abs2active: { summary: 'Transform absolute constraint matrix to active-weight format', syntax: ['ActiveConSet = abs2active(AbsConSet,Index)'], description: ['ActiveConSet = abs2active(AbsConSet,Index) transforms a constraint matrix expressed in absolute portfolio weights to an equivalent matrix in active weights (relative to benchmark Index).', 'Use this when the optimizer requires active-weight constraints but your constraints are in absolute terms.'], seealso: ['active2abs', 'pcalims', 'pcglims', 'portcons'] },
    active2abs: { summary: 'Transform active-weight constraint matrix to absolute format', syntax: ['AbsConSet = active2abs(ActiveConSet,Index)'], description: ['AbsConSet = active2abs(ActiveConSet,Index) transforms a constraint matrix expressed in active weights (relative to Index) back to absolute portfolio weight format.'], seealso: ['abs2active', 'pcalims', 'pcglims', 'portcons'] },
    bndprice: { summary: 'Price a fixed-income security from yield to maturity', syntax: ['[Price,AccruedInt] = bndprice(Yield,CouponRate,Settle,Maturity)', '[Price,AccruedInt] = bndprice(Yield,CouponRate,Settle,Maturity,Period,Basis)'], description: ['[Price,AccruedInt] = bndprice(Yield,CouponRate,Settle,Maturity) returns the clean price per $100 face value and the accrued interest of a coupon bond, given its yield to maturity.', 'For SIA conventions Price + AccruedInt = sum(CashFlow*(1+Yield/2)^(-Time)); ISMA bases use annual compounding. Period (default 2) is coupons per year, Basis (default 0 = actual/actual) the day-count, and Face (default 100) the face value.'], seealso: ['bndyield', 'bnddurp', 'bndconvp', 'cfamounts'] },
    bndyield: { summary: 'Yield to maturity of a fixed-income security from price', syntax: ['Yield = bndyield(Price,CouponRate,Settle,Maturity)', 'Yield = bndyield(Price,CouponRate,Settle,Maturity,Period,Basis)'], description: ['Yield = bndyield(Price,CouponRate,Settle,Maturity) returns the yield to maturity of a coupon bond given its clean price per $100 face value. The yield is found by inverting the bndprice relationship.'], seealso: ['bndprice', 'bnddury', 'bndconvy'] },
    bnddurp: { summary: 'Bond duration given price', syntax: ['[ModDuration,YearDuration,PerDuration] = bnddurp(Price,CouponRate,Settle,Maturity)', '[...] = bnddurp(Price,CouponRate,Settle,Maturity,Period,Basis)'], description: ['[ModDuration,YearDuration,PerDuration] = bnddurp(Price,CouponRate,Settle,Maturity) returns the modified, annualized (Macaulay) and periodic Macaulay durations of a coupon bond, computing the yield from Price first.'], seealso: ['bnddury', 'bndconvp', 'bndprice'] },
    bnddury: { summary: 'Bond duration given yield', syntax: ['[ModDuration,YearDuration,PerDuration] = bnddury(Yield,CouponRate,Settle,Maturity)', '[...] = bnddury(Yield,CouponRate,Settle,Maturity,Period,Basis)'], description: ['[ModDuration,YearDuration,PerDuration] = bnddury(Yield,CouponRate,Settle,Maturity) returns the modified, annualized (Macaulay) and periodic Macaulay durations of a coupon bond given its yield to maturity.'], seealso: ['bnddurp', 'bndconvy', 'bndyield'] },
    bndconvp: { summary: 'Bond convexity given price', syntax: ['[YearConvexity,PerConvexity] = bndconvp(Price,CouponRate,Settle,Maturity)', '[...] = bndconvp(Price,CouponRate,Settle,Maturity,Period,Basis)'], description: ['[YearConvexity,PerConvexity] = bndconvp(Price,CouponRate,Settle,Maturity) returns the annualized and periodic convexity of a coupon bond, computing the yield from Price first.'], seealso: ['bndconvy', 'bnddurp', 'bndprice'] },
    bndconvy: { summary: 'Bond convexity given yield', syntax: ['[YearConvexity,PerConvexity] = bndconvy(Yield,CouponRate,Settle,Maturity)', '[...] = bndconvy(Yield,CouponRate,Settle,Maturity,Period,Basis)'], description: ['[YearConvexity,PerConvexity] = bndconvy(Yield,CouponRate,Settle,Maturity) returns the annualized and periodic convexity of a coupon bond given its yield to maturity.'], seealso: ['bndconvp', 'bnddury', 'bndyield'] },
    ts2func: { summary: 'Convert a time series array to a function of time', syntax: ['F = ts2func(Array)', "F = ts2func(Array,'Times',TimeVector)"], description: ['F = ts2func(Array) encapsulates a time-series Array within a callable function F(t) suitable for Monte Carlo simulation. Rows of Array correspond to observation times (default 0,1,2,...).', "Calling F(t) performs zero-order-hold interpolation, returning the row at the largest observation time <= t as an NVARS-by-1 column vector. If t precedes the first time, F returns the first observation. Specify custom times with the 'Times' name/value pair."], seealso: ['interp1'] },
  },
};
