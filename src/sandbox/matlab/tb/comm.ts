// Communications Toolbox — computable, exactly-validatable subset: integer↔binary conversion
// (de2bi/bi2de), error counting (symerr/biterr), and Gray code (bin2gray/gray2bin, integer form).
// Constellation modulators (qammod/pskmod) are deferred — their Gray symbol mapping is hard to
// match without the toolbox. See plan §7.
import type { Builtin } from '../builtins';
import {
  type Value, type Mat, isMat, scalar, colVec, zeros, toArray, asScalar, asString, toMat as m,
} from '../values';
import type { ToolboxModule } from './types';

const ret = (v: Value): Promise<Value[]> => Promise.resolve([v]);
/** Rows of a matrix as number[][]. */
function rows(M: Mat): number[][] { const o: number[][] = []; for (let r = 0; r < M.rows; r++) { const row: number[] = []; for (let c = 0; c < M.cols; c++) row.push(M.data[r + c * M.rows]); o.push(row); } return o; }
const bitWidth = (v: number) => Math.max(1, Math.floor(Math.log2(Math.max(1, v))) + 1);

export const COMM: ToolboxModule = {
  id: 'comm',
  name: 'Communications Toolbox',
  docBase: 'https://www.mathworks.com/help/comm/',
  builtins: {
    /** de2bi(d[,n][,base][,flag]) — decimal→binary digits, LSB-first ('right-msb', default). */
    de2bi: (a) => {
      const d = toArray(m(a[0])).map((x) => Math.round(x));
      const msb = a.slice(1).some((x) => isMat(x) && (x as Mat).isChar && asString(x).toLowerCase() === 'left-msb');
      const nums = a.slice(1).filter((x) => isMat(x) && !(x as Mat).isChar).map((x) => Math.round(asScalar(x)));
      const n = nums.length >= 1 ? nums[0] : -1;          // requested digit count
      const base = nums.length >= 2 ? nums[1] : 2;
      const need = Math.max(1, ...d.map((v) => (v <= 0 ? 1 : Math.floor(Math.log(v) / Math.log(base)) + 1)));
      const ncol = n > 0 ? n : need;
      const out = zeros(d.length, ncol);
      d.forEach((v, r) => { let x = v; for (let c = 0; c < ncol; c++) { const digit = x % base; x = Math.floor(x / base); out.data[r + (msb ? ncol - 1 - c : c) * d.length] = digit; } });
      return ret(out);
    },
    /** bi2de(b[,base][,flag]) — binary digits→decimal, LSB-first ('right-msb', default). */
    bi2de: (a) => {
      const B = m(a[0]); const R = (B.rows === 1) ? [toArray(B)] : rows(B);
      let base = 2, msb = false;
      for (const arg of a.slice(1)) { if (isMat(arg) && (arg as Mat).isChar) msb = asString(arg).toLowerCase() === 'left-msb'; else base = Math.round(asScalar(arg)); }
      const vals = R.map((row) => { const digits = msb ? [...row].reverse() : row; return digits.reduce((s, d, j) => s + d * base ** j, 0); });
      return ret(vals.length === 1 ? scalar(vals[0]) : colVec(vals));
    },
    /** [num,rate] = symerr(a,b) — symbol (element) error count and ratio. */
    symerr: (a, nargout) => {
      const x = toArray(m(a[0])), y = toArray(m(a[1])); const num = x.reduce((s, v, i) => s + (v !== y[i] ? 1 : 0), 0);
      return nargout >= 2 ? Promise.resolve([scalar(num), scalar(num / x.length)]) : ret(scalar(num));
    },
    /** [num,rate] = biterr(a,b) — bit error count and ratio (elements compared bitwise). */
    biterr: (a, nargout) => {
      const x = toArray(m(a[0])).map((v) => Math.round(v)), y = toArray(m(a[1])).map((v) => Math.round(v));
      const w = bitWidth(Math.max(1, ...x, ...y)); let num = 0;
      for (let i = 0; i < x.length; i++) { let diff = x[i] ^ y[i]; while (diff) { num += diff & 1; diff >>>= 1; } }
      return nargout >= 2 ? Promise.resolve([scalar(num), scalar(num / (x.length * w))]) : ret(scalar(num));
    },
    /** bin2gray(x) / gray2bin(x) — integer binary-reflected Gray code (element-wise). */
    bin2gray: (a) => ret(map2(m(a[0]), (v) => v ^ (v >>> 1))),
    gray2bin: (a) => ret(map2(m(a[0]), (v) => { let b = 0; for (let x = v; x; x >>>= 1) b ^= x; return b; })),
  },
  help: {
    de2bi: 'Convert decimal numbers to binary digits', bi2de: 'Convert binary digits to decimal numbers',
    symerr: 'Count symbol errors and compute symbol error rate', biterr: 'Count bit errors and compute bit error rate',
    bin2gray: 'Convert positive integers to Gray-encoded integers', gray2bin: 'Convert Gray-encoded integers to positive integers',
  },
};

function map2(M: Mat, f: (v: number) => number): Mat { const o = zeros(M.rows, M.cols); for (let i = 0; i < M.data.length; i++) o.data[i] = f(Math.round(M.data[i])); return o; }
