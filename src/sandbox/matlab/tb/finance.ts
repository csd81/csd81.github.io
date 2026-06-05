// Financial Toolbox — calendar subset (from-scratch TS port)
// Ported from MATLAB R2026a: toolbox/finance/calendar/{days360,daysdif,busdate,busdays,datewrkdy}.m
//
// All dates are MATLAB serial date numbers (datenum epoch: serial 719529 = 1970-01-01,
// serial 1 = 31-Dec-0000). Inputs accept either numeric serial datenums (numeric Mats) or
// char date strings. Outputs are numeric serial datenums as Mats; busdays returns a column
// vector. Holiday handling: weekends-only (Sat/Sun), matching MATLAB called with a holiday
// vector that excludes the range (validated against live R2026a).

import { type Value, type Mat, scalar, colVec, isMat, isStr, MatError } from '../values';
import type { ToolboxModule } from './types';

const ret = (v: Value): Promise<Value[]> => Promise.resolve([v]);

// ── serial-datenum helpers (UTC; matches base interpreter's 719529 epoch) ──────────
const DAY_MS = 86400000;
const EPOCH = 719529; // serial datenum at 1970-01-01

function fromString(s: string): number {
  const d = new Date(s.trim());
  if (Number.isNaN(+d)) throw new MatError(`finance: could not parse date "${s}"`);
  // new Date("28-Feb-1994") parses in local tz; rebuild as UTC midnight to stay on the epoch.
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

// ── days360 — SIA-compliant 30/360 day count ───────────────────────────────────────
// Faithful port of days360.m: Feb end-of-month (28 non-leap / 29 leap) both sides → 30,
// then the day==31 reductions. Years divisible by 4 (not the full Gregorian rule, matching
// the .m comment/code which only tests rem(year,4)==0) are treated as leap for Feb-end.
function days360one(d1: number, d2: number): number {
  let [y1, m1, dd1] = ymd(d1);
  let [y2, m2, dd2] = ymd(d2);
  const leap1 = y1 % 4 === 0;
  const leap2 = y2 % 4 === 0;

  // Is the date the last day of February (28 if non-leap, 29 if leap)?
  const febEnd1 = m1 === 2 && ((!leap1 && dd1 === 28) || (leap1 && dd1 === 29));
  const febEnd2 = m2 === 2 && ((!leap2 && dd2 === 28) || (leap2 && dd2 === 29));

  // If BOTH are Feb end-of-month, set the second to 30 first (ind5 logic).
  if (febEnd1 && febEnd2) dd2 = 30;
  // If the first is Feb end-of-month, set it to 30 (ind4 logic).
  if (febEnd1) dd1 = 30;

  // If d2 day == 31 and d1 day is 30 or 31, set d2 day to 30.
  if (dd2 === 31 && (dd1 === 30 || dd1 === 31)) dd2 = 30;
  // If d1 day == 31, set it to 30.
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

// ── daysdif — days between dates for a day-count basis ──────────────────────────────
// basis 0 (default) / 2 / 3 / 8 / 9 / 10 / 12 → daysact = simple serial difference (d2-d1).
// basis 1 → days360 (30/360 SIA). basis 6/11 → 30/360 European. Other bases unsupported.
function daysdifOne(d1: number, d2: number, basis: number): number {
  switch (basis) {
    case 0: case 2: case 3: case 8: case 9: case 10: case 12:
      return Math.round(d2 - d1); // daysact: actual day difference
    case 1:
      return days360one(d1, d2); // 30/360 SIA
    case 6: case 11: {
      // 30/360 European: day==31 → 30 on both sides, no Feb special-casing.
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

// ── busdate — next (DIREC=1, default) or previous (DIREC=-1) business day ────────────
// Always moves at least one day away from D; returns the nearest business day in that
// direction. Weekends-only (no holidays in this port).
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

// ── busdays — vector of business days (DAILY frequency) between two dates ────────────
// Returns every business day in [SDATE, EDATE] inclusive, as a column vector.
function busdaysImpl(args: Value[]): Value {
  if (args.length < 2) throw new MatError('busdays: requires SDATE and EDATE');
  const s = asScalarSerial(args[0], 'busdays');
  const e = asScalarSerial(args[1], 'busdays');
  const out: number[] = [];
  for (let d = s; d <= e; d++) if (isBusday(d)) out.push(d);
  return colVec(out);
}

// ── datewrkdy — date of a future/past workday ───────────────────────────────────────
// Faithful port: build Days = StartDate : sign : StartDate + N*3 + H, (flip if negative so
// the sequence runs outward from the start), drop Sat/Sun, then index Weekdays(|N|+|H|).
// The start date itself counts as workday 1 when it is a weekday.
function datewrkdyOne(start: number, numWD: number, numHol: number): number {
  if (Math.abs(numHol) > Math.abs(numWD)) throw new MatError('datewrkdy: too many holidays');
  if (numWD === 0 && numHol === 0) {
    // MATLAB: Days = start:sign:start ... but sign(0)=0 → range is just [start]; index |0|+|0|=0
    // is out of MATLAB's 1-based range, so Weekdays(0) errors there. We mirror by returning start
    // for the all-zero degenerate case (consistent with observed datewrkdy(d,0)=d).
    return start;
  }
  const sign = numWD > 0 ? 1 : -1;
  const last = start + numWD * 3 + numHol;
  // Days = start : sign : last  (ascending if sign>0, descending if sign<0)
  const days: number[] = [];
  if (sign === 1) {
    for (let d = start; d <= last; d++) days.push(d);
  } else {
    for (let d = start; d >= last; d--) days.push(d);
  }
  const weekdays = days.filter((d) => { const w = weekday(d); return w !== 1 && w !== 7; });
  const idx = Math.abs(numWD) + Math.abs(numHol); // 1-based
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

export const FINANCE: ToolboxModule = {
  id: 'finance',
  name: 'Financial Toolbox (calendar)',
  docBase: 'https://www.mathworks.com/help/finance/',
  docPath: (name) => `${name}.html`,
  builtins: {
    days360:   (a) => ret(days360impl(a)),
    daysdif:   (a) => ret(daysdifImpl(a)),
    busdate:   (a) => ret(busdateImpl(a)),
    busdays:   (a) => ret(busdaysImpl(a)),
    datewrkdy: (a) => ret(datewrkdyImpl(a)),
  },
  help: {
    days360:   'NumDays = days360(StartDate, EndDate). Days between dates on a 30/360 (SIA) basis.',
    daysdif:   'D = daysdif(D1, D2, Basis). Days between dates for a day-count basis (0=act/act default, 1=30/360 SIA, 2=act/360, 3=act/365, 6=30/360 European).',
    busdate:   'BD = busdate(D, DIREC). Next (DIREC=1, default) or previous (DIREC=-1) business day. Weekends only.',
    busdays:   'BDATES = busdays(SDATE, EDATE). Column vector of business days (daily) in [SDATE,EDATE]. Weekends only.',
    datewrkdy: 'EndDate = datewrkdy(StartDate, NumWorkDays, NumHolidays). Date a number of work days into the future/past.',
  },
};
