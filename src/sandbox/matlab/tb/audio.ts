import type { Builtin } from '../builtins';
import { type Value, type Mat, toArray, scalar, rowVec, colVec, toMat as m, isMat } from '../values';
import type { ToolboxModule } from './types';

const ret = (v: Value): Promise<Value[]> => Promise.resolve([v]);

// ---- scalar kernels (transcribed verbatim from MATLAB R2026a .m sources) ----

// hz2bark.m:  bark = 26.81*hz./(1960+hz) - 0.53; then piecewise correction.
function hz2barkScalar(hz: number): number {
  let bark = (26.81 * hz) / (1960 + hz) - 0.53;
  if (bark < 2) bark = 0.85 * bark + 0.3;
  else if (bark > 20.1) bark = 1.22 * bark - 4.422;
  return bark;
}

// bark2hz.m:  inverse piecewise correction, then hz = 1960*(bark+0.53)./(26.28 - bark).
function bark2hzScalar(bark: number): number {
  let b = bark;
  if (b < 2) b = (b - 0.3) / 0.85;
  else if (b > 20.1) b = (b + 0.22 * 20.1) / 1.22;
  return (1960 * (b + 0.53)) / (26.28 - b);
}

// hz2mel.m (default MelStyle "oshaughnessy"):  mel = 2595*log10(1 + hz/700).
function hz2melScalar(hz: number): number {
  return 2595 * Math.log10(1 + hz / 700);
}

// mel2hz.m (default "oshaughnessy"):  hz = 700*(10.^(mel/2595) - 1).
function mel2hzScalar(mel: number): number {
  return 700 * (Math.pow(10, mel / 2595) - 1);
}

// hz2erb.m / erb2hz.m:  A = log(10)*1000/(24.673*4.368).
const ERB_A = (Math.log(10) * 1000) / (24.673 * 4.368);
function hz2erbScalar(hz: number): number {
  return ERB_A * Math.log10(1 + 0.004368 * hz);
}
function erb2hzScalar(erb: number): number {
  return (Math.pow(10, erb / ERB_A) - 1) / 0.004368;
}

// phon2sone.m (default standard "ISO 532-1"):
//   sone = (phon/40).^(1/.35)  for phon < 40;  2.^(phon/10-4) otherwise.
function phon2soneScalar(phon: number): number {
  if (phon < 40) return Math.pow(phon / 40, 1 / 0.35);
  return Math.pow(2, phon / 10 - 4);
}

// sone2phon.m (default standard "ISO 532-1"):
//   phon = 40*sone.^.35  for sone < 1;  40 + 10*log2(sone) otherwise.
function sone2phonScalar(sone: number): number {
  if (sone < 1) return 40 * Math.pow(sone, 0.35);
  return 40 + 10 * Math.log2(sone);
}

// elementwise helper: preserve row/col orientation, return scalar for 1x1.
function elementwise(a: Value[], f: (x: number) => number): Promise<Value[]> {
  const M: Mat = m(a[0]);
  const out = toArray(M).map(f);
  if (out.length === 1) return ret(scalar(out[0]));
  return ret(M.rows === 1 ? rowVec(out) : colVec(out));
}

// dBov.m (default ClippingMagnitude=1):
//   Lmean = 10*log10(sum(x.^2,1)./(size(x,1).*1.^2));  -> a 1-by-cols row reduction.
// Optionally also returns Lmax = 20*log10(max(abs(x),[],1)).
function dBov(a: Value[], nargout: number): Promise<Value[]> {
  const M: Mat = m(a[0]);
  const rows = M.rows;
  const cols = M.cols;
  const d = M.data;
  const meanArr: number[] = new Array(cols);
  const maxArr: number[] = new Array(cols);
  for (let c = 0; c < cols; c++) {
    let ss = 0;
    let mx = 0;
    for (let r = 0; r < rows; r++) {
      const v = d[r + c * rows];
      ss += v * v;
      const av = Math.abs(v);
      if (av > mx) mx = av;
    }
    meanArr[c] = 10 * Math.log10(ss / rows);
    maxArr[c] = 20 * Math.log10(mx);
  }
  const mkRow = (arr: number[]): Value => (arr.length === 1 ? scalar(arr[0]) : rowVec(arr));
  if (nargout >= 2) return Promise.resolve([mkRow(meanArr), mkRow(maxArr)]);
  return ret(mkRow(meanArr));
}

export const AUDIO: ToolboxModule = {
  id: 'audio',
  name: 'Audio Toolbox',
  docBase: 'https://www.mathworks.com/help/audio/',
  builtins: {
    hz2bark: (a) => elementwise(a, hz2barkScalar),
    bark2hz: (a) => elementwise(a, bark2hzScalar),
    hz2mel: (a) => elementwise(a, hz2melScalar),
    mel2hz: (a) => elementwise(a, mel2hzScalar),
    hz2erb: (a) => elementwise(a, hz2erbScalar),
    erb2hz: (a) => elementwise(a, erb2hzScalar),
    dBov: (a, nargout) => dBov(a, nargout),
    phon2sone: (a) => elementwise(a, phon2soneScalar),
    sone2phon: (a) => elementwise(a, sone2phonScalar),
  },
  help: {
    hz2bark: 'Convert frequency from hertz to bark scale',
    bark2hz: 'Convert frequency from bark scale to hertz',
    hz2mel: 'Convert frequency from hertz to mel scale',
    mel2hz: 'Convert frequency from mel scale to hertz',
    hz2erb: 'Convert frequency from hertz to equivalent rectangular bandwidth (ERB) scale',
    erb2hz: 'Convert frequency from equivalent rectangular bandwidth (ERB) scale to hertz',
    dBov: 'Signal level in dB overload (dBov)',
    phon2sone: 'Convert loudness levels in phons to loudness in sones',
    sone2phon: 'Convert loudness in sones to loudness levels in phons',
  },
};
