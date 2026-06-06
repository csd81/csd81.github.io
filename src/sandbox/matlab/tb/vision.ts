// Computer Vision Toolbox — 5 core functions:
// detectHarrisFeatures, detectFASTFeatures, extractFeatures,
// matchFeatures, estimateFundamentalMatrix (8-point algorithm).
import {
  type Value, scalar, rowVec, colVec, toArray, asScalar, toMat as m, isMat,
  MatError, mat, zeros, makeObject, fromRows, str, bool,
} from '../values';
import type { ToolboxModule } from './types';

// ── Image helpers ──────────────────────────────────────────────────────────────────────
function getImg(v: Value): { data: Float64Array; rows: number; cols: number } {
  const mv = m(v);
  return { data: Float64Array.from(mv.data), rows: mv.rows, cols: mv.cols };
}

function px(data: Float64Array, rows: number, cols: number, r: number, c: number): number {
  if (r < 0 || r >= rows || c < 0 || c >= cols) return 0;
  return data[r * cols + c];
}

// Box-filter sum over [r0..r1] × [c0..c1] using integral image
function makeIntegral(data: Float64Array, rows: number, cols: number): Float64Array {
  const I = new Float64Array((rows + 1) * (cols + 1));
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    I[(r+1)*(cols+1)+(c+1)] = data[r*cols+c]
      + I[r*(cols+1)+(c+1)] + I[(r+1)*(cols+1)+c] - I[r*(cols+1)+c];
  }
  return I;
}

function boxSum(I: Float64Array, cols1: number, r0: number, c0: number, r1: number, c1: number): number {
  // Inclusive [r0,r1] × [c0,c1]
  return I[(r1+1)*cols1+(c1+1)] - I[r0*cols1+(c1+1)] - I[(r1+1)*cols1+c0] + I[r0*cols1+c0];
}

// ── Non-maximum suppression ────────────────────────────────────────────────────────────
function nms(response: Float64Array, rows: number, cols: number, radius: number, threshold: number): Array<{r:number;c:number;val:number}> {
  const peaks: Array<{r:number;c:number;val:number}> = [];
  for (let r = radius; r < rows-radius; r++) for (let c = radius; c < cols-radius; c++) {
    const v = response[r*cols+c];
    if (v < threshold) continue;
    let isMax = true;
    outer: for (let dr = -radius; dr <= radius; dr++) for (let dc = -radius; dc <= radius; dc++) {
      if (dr === 0 && dc === 0) continue;
      if (response[(r+dr)*cols+(c+dc)] >= v) { isMax = false; break outer; }
    }
    if (isMax) peaks.push({ r, c, val: v });
  }
  peaks.sort((a, b) => b.val - a.val);
  return peaks;
}

// ── makePoints — pack corner/keypoint results into a ClassV ───────────────────────────
function makePoints(peaks: Array<{r:number;c:number;val:number}>, maxN: number): Value {
  const n = Math.min(peaks.length, maxN);
  const loc = new Float64Array(n * 2); // [x(col), y(row)] per row
  const met = new Float64Array(n);
  for (let i = 0; i < n; i++) {
    loc[i*2+0] = peaks[i].c + 1; // 1-based x = col
    loc[i*2+1] = peaks[i].r + 1; // 1-based y = row
    met[i] = peaks[i].val;
  }
  const props = new Map<string, Value>();
  props.set('Location', mat(n, 2, loc));
  props.set('Metric', colVec(Array.from(met)));
  props.set('Count', scalar(n));
  return makeObject('cornerPoints', props);
}

function unpackPoints(v: Value): Array<{x:number;y:number}> {
  if ((v as any).kind === 'object') {
    const props = (v as any).props as Map<string, Value>;
    if (props.has('Location')) {
      const loc = m(props.get('Location')!);
      const n = loc.rows;
      return Array.from({length: n}, (_, i) => ({ x: loc.data[i*2], y: loc.data[i*2+1] }));
    }
  }
  if (isMat(v)) {
    const mv = m(v);
    if (mv.cols === 2) return Array.from({length: mv.rows}, (_, i) => ({ x: mv.data[i*2], y: mv.data[i*2+1] }));
  }
  return [];
}

// ── detectHarrisFeatures ───────────────────────────────────────────────────────────────
// corners = detectHarrisFeatures(I)
// Harris corner detector: R = det(M) - k*trace(M)^2, k=0.05
async function detectHarrisFeatures(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('detectHarrisFeatures: requires image I');
  const { data, rows, cols } = getImg(args[0]);
  const k = args.length > 1 && isMat(args[1]) ? asScalar(m(args[1])) : 0.05;
  const minQ = args.length > 2 && isMat(args[2]) ? asScalar(m(args[2])) : 1e-6;
  const maxN = args.length > 3 && isMat(args[3]) ? Math.round(asScalar(m(args[3]))) : 500;
  const winR = 2; // half-window for structure tensor summation

  // Image gradients (Sobel)
  const Ix = new Float64Array(rows * cols);
  const Iy = new Float64Array(rows * cols);
  for (let r = 1; r < rows-1; r++) for (let c = 1; c < cols-1; c++) {
    Ix[r*cols+c] = (-px(data,rows,cols,r-1,c-1) + px(data,rows,cols,r-1,c+1)
                   -2*px(data,rows,cols,r,c-1) + 2*px(data,rows,cols,r,c+1)
                   -px(data,rows,cols,r+1,c-1) + px(data,rows,cols,r+1,c+1)) / 8;
    Iy[r*cols+c] = (-px(data,rows,cols,r-1,c-1) - 2*px(data,rows,cols,r-1,c)
                   -px(data,rows,cols,r-1,c+1) + px(data,rows,cols,r+1,c-1)
                   +2*px(data,rows,cols,r+1,c) + px(data,rows,cols,r+1,c+1)) / 8;
  }

  // Structure tensor elements
  const Ixx = Ix.map((v, i) => v * v);
  const Iyy = Iy.map((v, i) => v * v);
  const Ixy = Ix.map((v, i) => v * Iy[i]);

  // Box-filter structure tensor over (2*winR+1)^2 window using integral images
  const Ixx_I = makeIntegral(Ixx, rows, cols);
  const Iyy_I = makeIntegral(Iyy, rows, cols);
  const Ixy_I = makeIntegral(Ixy, rows, cols);

  const response = new Float64Array(rows * cols);
  let maxR = 0;
  for (let r = winR; r < rows-winR; r++) for (let c = winR; c < cols-winR; c++) {
    const sxx = boxSum(Ixx_I, cols+1, r-winR, c-winR, r+winR, c+winR);
    const syy = boxSum(Iyy_I, cols+1, r-winR, c-winR, r+winR, c+winR);
    const sxy = boxSum(Ixy_I, cols+1, r-winR, c-winR, r+winR, c+winR);
    const det = sxx*syy - sxy*sxy;
    const tr = sxx + syy;
    const R = det - k * tr * tr;
    response[r*cols+c] = R > 0 ? R : 0;
    if (R > maxR) maxR = R;
  }

  const threshold = Math.max(minQ, maxR * 1e-4);
  const peaks = nms(response, rows, cols, 3, threshold);
  return [makePoints(peaks, maxN)];
}

// ── detectFASTFeatures ─────────────────────────────────────────────────────────────────
// corners = detectFASTFeatures(I)
// FAST-9: a pixel is a corner if 9 consecutive pixels on a circle of radius 3
// are all brighter or all darker by more than threshold.
const FAST_CIRCLE: [number, number][] = [
  [0,-3],[1,-3],[2,-2],[3,-1],[3,0],[3,1],[2,2],[1,3],
  [0,3],[-1,3],[-2,2],[-3,1],[-3,0],[-3,-1],[-2,-2],[-1,-3],
];

async function detectFASTFeatures(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('detectFASTFeatures: requires image I');
  const { data, rows, cols } = getImg(args[0]);
  const threshold = args.length > 1 && isMat(args[1]) ? asScalar(m(args[1])) : 20;
  const maxN = args.length > 2 && isMat(args[2]) ? Math.round(asScalar(m(args[2]))) : 500;

  const response = new Float64Array(rows * cols);
  const N = 9; // consecutive pixels needed

  for (let r = 3; r < rows-3; r++) for (let c = 3; c < cols-3; c++) {
    const p = px(data, rows, cols, r, c);
    const lo = p - threshold, hi = p + threshold;
    // Quick reject: check 4 compass points first
    const pts4 = [[0,-3],[3,0],[0,3],[-3,0]] as [number,number][];
    let nBright4 = 0, nDark4 = 0;
    for (const [dr, dc] of pts4) {
      const v = px(data, rows, cols, r+dr, c+dc);
      if (v > hi) nBright4++; else if (v < lo) nDark4++;
    }
    if (nBright4 < 2 && nDark4 < 2) continue;

    // Full FAST-9 test
    const flags = FAST_CIRCLE.map(([dr, dc]) => {
      const v = px(data, rows, cols, r+dr, c+dc);
      return v > hi ? 1 : v < lo ? -1 : 0;
    });
    let maxRun = 0;
    for (let start = 0; start < 16; start++) {
      let run = 0;
      const sign = flags[start];
      if (sign === 0) continue;
      for (let j = 0; j < 16; j++) {
        if (flags[(start + j) % 16] === sign) run++; else break;
      }
      if (run > maxRun) maxRun = run;
    }
    if (maxRun >= N) {
      // Corner strength: max over all directions of sum of |diff| for consecutive 9
      let strength = 0;
      for (const [dr, dc] of FAST_CIRCLE) strength += Math.abs(px(data,rows,cols,r+dr,c+dc) - p);
      response[r*cols+c] = strength;
    }
  }

  const peaks = nms(response, rows, cols, 3, 1);
  return [makePoints(peaks, maxN)];
}

// ── extractFeatures ────────────────────────────────────────────────────────────────────
// [features, validPts] = extractFeatures(I, points)
// Extracts a normalized 8×8 patch descriptor at each keypoint location.
async function extractFeatures(args: Value[]): Promise<Value[]> {
  if (args.length < 2) throw new MatError('extractFeatures: requires I and points');
  const { data, rows, cols } = getImg(args[0]);
  const pts = unpackPoints(args[1]);
  const patchR = 4; // half-patch size → 8×8 = 64-dim descriptor

  const valid: Array<{x:number;y:number;idx:number}> = [];
  const descs: number[][] = [];

  for (let i = 0; i < pts.length; i++) {
    const cx = Math.round(pts[i].x) - 1; // convert to 0-based
    const cy = Math.round(pts[i].y) - 1;
    if (cx < patchR || cx >= cols-patchR || cy < patchR || cy >= rows-patchR) continue;

    const patch = new Float64Array(patchR*2 * patchR*2);
    let mu = 0;
    for (let dr = -patchR; dr < patchR; dr++) for (let dc = -patchR; dc < patchR; dc++) {
      const v = px(data, rows, cols, cy+dr, cx+dc);
      patch[(dr+patchR)*(patchR*2)+(dc+patchR)] = v;
      mu += v;
    }
    mu /= patch.length;
    let sigma = 0;
    for (let j = 0; j < patch.length; j++) { const d = patch[j]-mu; sigma += d*d; }
    sigma = Math.sqrt(sigma / patch.length + 1e-10);
    const desc = Array.from(patch, v => (v - mu) / sigma);
    descs.push(desc);
    valid.push({ x: pts[i].x, y: pts[i].y, idx: i });
  }

  const n = descs.length, dim = patchR*2*patchR*2;
  const featData = new Float64Array(n * dim);
  for (let i = 0; i < n; i++) for (let j = 0; j < dim; j++) featData[i*dim+j] = descs[i][j] ?? 0;

  // Re-pack valid points
  const validLoc = new Float64Array(valid.length * 2);
  for (let i = 0; i < valid.length; i++) { validLoc[i*2] = valid[i].x; validLoc[i*2+1] = valid[i].y; }
  const validProps = new Map<string, Value>();
  validProps.set('Location', mat(valid.length, 2, validLoc));
  validProps.set('Count', scalar(valid.length));

  return [mat(n, dim, featData), makeObject('cornerPoints', validProps)];
}

// ── matchFeatures ──────────────────────────────────────────────────────────────────────
// indexPairs = matchFeatures(features1, features2)
// Brute-force L2 nearest-neighbor matching with Lowe's ratio test (0.6).
async function matchFeatures(args: Value[]): Promise<Value[]> {
  if (args.length < 2) throw new MatError('matchFeatures: requires features1 and features2');
  const F1 = m(args[0]), F2 = m(args[1]);
  const ratio = args.length > 2 && isMat(args[2]) ? asScalar(m(args[2])) : 0.6;
  const unique = !(args.length > 3 && isMat(args[3]) && asScalar(m(args[3])) === 0);

  const n1 = F1.rows, n2 = F2.rows, dim = F1.cols;
  const pairs: number[][] = [];

  for (let i = 0; i < n1; i++) {
    let best1 = Infinity, best2 = Infinity, bestJ = -1;
    for (let j = 0; j < n2; j++) {
      let d2 = 0;
      for (let k = 0; k < dim; k++) { const diff = F1.data[i*dim+k] - F2.data[j*dim+k]; d2 += diff*diff; }
      if (d2 < best1) { best2 = best1; best1 = d2; bestJ = j; }
      else if (d2 < best2) best2 = d2;
    }
    // Lowe's ratio test
    if (best1 < ratio * ratio * best2 && bestJ >= 0) pairs.push([i+1, bestJ+1]);
  }

  // Unique matches: remove duplicate target indices (keep best)
  const result = unique ? (() => {
    const seen = new Map<number, {src:number;d:number}>();
    for (const [i, j] of pairs) {
      const prev = seen.get(j);
      if (!prev || i < prev.src) seen.set(j, {src:i, d:0});
    }
    return [...seen.entries()].map(([j, {src}]) => [src, j]);
  })() : pairs;

  const pairData = new Float64Array(result.length * 2);
  for (let i = 0; i < result.length; i++) { pairData[i*2] = result[i][0]; pairData[i*2+1] = result[i][1]; }
  return [mat(result.length, 2, pairData)];
}

// ── estimateFundamentalMatrix ─────────────────────────────────────────────────────────
// F = estimateFundamentalMatrix(pts1, pts2)
// Normalized 8-point algorithm (Hartley 1997).
// pts1, pts2 are [N×2] matrices of corresponding (x,y) image coordinates.
async function estimateFundamentalMatrix(args: Value[]): Promise<Value[]> {
  if (args.length < 2) throw new MatError('estimateFundamentalMatrix: requires pts1 and pts2');
  const P1 = m(args[0]), P2 = m(args[1]);
  const n = P1.rows;
  if (n < 8) throw new MatError('estimateFundamentalMatrix: need at least 8 point correspondences');

  // ── Normalize points ───────────────────────────────────────────────────────────
  function normPts(P: typeof P1): { pts: number[][]; T: number[][] } {
    let mx = 0, my = 0;
    for (let i = 0; i < n; i++) { mx += P.data[i*2]; my += P.data[i*2+1]; }
    mx /= n; my /= n;
    let meanDist = 0;
    for (let i = 0; i < n; i++) meanDist += Math.sqrt((P.data[i*2]-mx)**2 + (P.data[i*2+1]-my)**2);
    meanDist /= n;
    const s = Math.SQRT2 / (meanDist || 1);
    const pts = Array.from({length: n}, (_, i) => [(P.data[i*2]-mx)*s, (P.data[i*2+1]-my)*s]);
    const T = [[s,0,-s*mx],[0,s,-s*my],[0,0,1]];
    return { pts, T };
  }

  const { pts: p1, T: T1 } = normPts(P1);
  const { pts: p2, T: T2 } = normPts(P2);

  // ── Build 9-column matrix A ────────────────────────────────────────────────────
  // Each row: [x2*x1, x2*y1, x2, y2*x1, y2*y1, y2, x1, y1, 1]
  const A: number[][] = p1.map((q1, i) => {
    const [x1, y1] = q1, [x2, y2] = p2[i];
    return [x2*x1, x2*y1, x2, y2*x1, y2*y1, y2, x1, y1, 1];
  });

  // ── SVD of A via power-iteration-based approach ────────────────────────────────
  // For the 9-vector null space we use the smallest singular vector of A.
  // Build A'A (9×9), find its smallest eigenvector via inverse power iteration.
  const AtA = Array.from({length:9}, (_,i) => Array.from({length:9}, (_,j) => {
    let s = 0;
    for (let r=0; r<A.length; r++) s += A[r][i]*A[r][j];
    return s;
  }));

  // Power iteration on AtA for smallest eigenvector: use shifted inverse power iteration
  // Shift λ_shift ≈ smallest eigenvalue; AtA - λI should be near-singular.
  // Simple: just use nullspace via Gaussian elimination + SVD approximation.
  // Use the classical "column sweep" null space from AtA via direct Gaussian elimination.
  function svdLast(M: number[][]): number[] {
    // QR decomposition via Gram-Schmidt to get last right singular vector
    // Actually: smallest eigenvector of symmetric M via power iteration on (shift*I - M)^{-1}
    const dim = M.length;
    // Estimate largest eigenvalue (Gershgorin)
    let shift = M.reduce((s, row, i) => s + Math.abs(row[i]), 0) / dim + 1;
    // B = shift*I - M (so largest eigenvalue of B = shift - lambda_min of M)
    const B = M.map((row, i) => row.map((v, j) => (i===j ? shift : 0) - v));
    // Power iteration on B
    let v: number[] = Array(dim).fill(0).map((_,i) => i===0?1:0);
    for (let iter=0; iter<200; iter++) {
      const Bv = B.map(row => row.reduce((s,bij,j)=>s+bij*v[j], 0));
      const norm = Math.sqrt(Bv.reduce((s,x)=>s+x*x, 0)) || 1;
      v = Bv.map(x=>x/norm);
    }
    return v;
  }

  const fVec = svdLast(AtA);
  // Reshape to 3×3 F matrix
  let F: number[][] = Array.from({length:3}, (_,i) => Array.from({length:3}, (_,j) => fVec[i*3+j]));

  // ── Enforce rank-2 constraint: F ← U * diag(s1,s2,0) * V' ────────────────────
  // SVD of 3×3 F using power iteration for each singular value
  function svd3x3(M: number[][]): { U: number[][]; S: number[]; V: number[][] } {
    // Compute eigendecomposition of M'M for right singular vectors
    const MtM = Array.from({length:3}, (_,i) => Array.from({length:3}, (_,j) => {
      let s = 0; for (let k=0; k<3; k++) s += M[k][i]*M[k][j]; return s;
    }));
    // Jacobi eigenvalue for symmetric 3×3
    let Q = [[1,0,0],[0,1,0],[0,0,1]];
    let A = MtM.map(r=>[...r]);
    for (let sweep=0; sweep<50; sweep++) {
      let maxOff = 0, p = 0, q = 1;
      for (let i=0;i<3;i++) for (let j=i+1;j<3;j++) if (Math.abs(A[i][j])>maxOff){maxOff=Math.abs(A[i][j]);p=i;q=j;}
      if (maxOff<1e-12) break;
      const theta = (A[q][q]-A[p][p])/(2*A[p][q]+1e-30);
      const t = Math.sign(theta)/(Math.abs(theta)+Math.sqrt(1+theta**2));
      const c = 1/Math.sqrt(1+t**2), s2 = t*c;
      const G = [[1,0,0],[0,1,0],[0,0,1]]; G[p][p]=c; G[p][q]=-s2; G[q][p]=s2; G[q][q]=c;
      // A ← G' A G
      const newA = A.map(r=>[...r]);
      for (let i=0;i<3;i++) for (let j=0;j<3;j++) {
        let s=0; for (let k=0;k<3;k++) s += G[k][i]*A[k][j]; newA[i][j]=s;
      }
      for (let i=0;i<3;i++) for (let j=0;j<3;j++) {
        let s=0; for (let k=0;k<3;k++) s += newA[i][k]*G[k][j]; A[i][j]=s;
      }
      // Q ← Q G
      const newQ = Q.map(r=>[...r]);
      for (let i=0;i<3;i++) for (let j=0;j<3;j++) {
        let s=0; for (let k=0;k<3;k++) s += Q[i][k]*G[k][j]; newQ[i][j]=s;
      }
      Q = newQ;
    }
    const S = [Math.sqrt(Math.max(0,A[0][0])), Math.sqrt(Math.max(0,A[1][1])), Math.sqrt(Math.max(0,A[2][2]))];
    // Sort descending
    const idx = [0,1,2].sort((a,b)=>S[b]-S[a]);
    const Vs = idx.map(i=>Q.map(r=>r[i]));
    const Ss = idx.map(i=>S[i]);
    // U = M V / sigma
    const V: number[][] = [[Vs[0][0],Vs[1][0],Vs[2][0]],[Vs[0][1],Vs[1][1],Vs[2][1]],[Vs[0][2],Vs[1][2],Vs[2][2]]];
    const U: number[][] = Array.from({length:3}, (_,i) => Array.from({length:3}, (_,j) => {
      let s=0; for(let k=0;k<3;k++) s+=M[i][k]*V[k][j]; return Ss[j]>1e-14?s/Ss[j]:0;
    }));
    return { U, S: Ss, V };
  }

  const { U, S, V } = svd3x3(F);
  // Zero out smallest singular value
  const Fnew: number[][] = Array.from({length:3}, (_,i) => Array.from({length:3}, (_,j) => {
    let s=0;
    for (let k=0;k<2;k++) s += U[i][k]*S[k]*(V[j][k]);
    return s;
  }));

  // ── Denormalize: F ← T2' * Fnew * T1 ──────────────────────────────────────────
  function mat3mul(A: number[][], B: number[][]): number[][] {
    return Array.from({length:3}, (_,i) => Array.from({length:3}, (_,j) => {
      let s=0; for (let k=0;k<3;k++) s+=A[i][k]*B[k][j]; return s;
    }));
  }
  const T2t: number[][] = [[T2[0][0],T2[1][0],T2[2][0]],[T2[0][1],T2[1][1],T2[2][1]],[T2[0][2],T2[1][2],T2[2][2]]];
  const Ffinal = mat3mul(mat3mul(T2t, Fnew), T1);

  // Return as 3×3 matrix
  const Fdata = new Float64Array(9);
  for (let i=0;i<3;i++) for (let j=0;j<3;j++) Fdata[i*3+j] = Ffinal[i][j];
  return [mat(3, 3, Fdata)];
}

export const VISION: ToolboxModule = {
  id: 'vision',
  name: 'Computer Vision Toolbox',
  docBase: 'https://www.mathworks.com/help/vision/',
  builtins: {
    detectHarrisFeatures,
    detectFASTFeatures,
    extractFeatures,
    matchFeatures,
    estimateFundamentalMatrix,
  },
  help: {
    detectHarrisFeatures: {
      summary: 'Detect Harris corners in a grayscale image',
      syntax: ['corners = detectHarrisFeatures(I)', 'corners = detectHarrisFeatures(I,MinQuality,q)', 'corners = detectHarrisFeatures(I,MinQuality,q,FilterSize,f)'],
      description: [
        'corners = detectHarrisFeatures(I) returns a cornerPoints object containing Harris corner locations and response metrics.',
        'Uses Sobel gradients → structure tensor (summed over 5×5 window) → Harris response R = det(M) - k*trace(M)^2, k=0.05.',
        'Non-maximum suppression with 3-pixel radius. Points sorted by descending response.',
        'corners.Location is [N×2] [x,y] (1-based). corners.Metric is [N×1] response values.',
      ],
      seealso: ['detectFASTFeatures', 'extractFeatures', 'matchFeatures', 'corner'],
    },
    detectFASTFeatures: {
      summary: 'Detect FAST corners in a grayscale image',
      syntax: ['corners = detectFASTFeatures(I)', 'corners = detectFASTFeatures(I,MinContrast,t)'],
      description: [
        'corners = detectFASTFeatures(I) returns a cornerPoints object using the FAST-9 detector.',
        'A pixel is a corner if 9 consecutive pixels on a circle of radius 3 are all brighter or darker by at least the threshold t (default 20).',
        'Quick 4-point pre-test rejects non-corners early. Corner strength = sum of absolute differences to circle pixels.',
        'Results are non-maximum suppressed and sorted by descending strength.',
      ],
      seealso: ['detectHarrisFeatures', 'extractFeatures', 'matchFeatures'],
    },
    extractFeatures: {
      summary: 'Extract feature descriptors from an image at keypoint locations',
      syntax: ['[features,validPts] = extractFeatures(I,pts)', '[features,validPts] = extractFeatures(I,pts,Method,m)'],
      description: [
        '[features,validPts] = extractFeatures(I,pts) returns an [N×64] matrix of normalized 8×8 patch descriptors at each valid keypoint.',
        'Each descriptor is the zero-mean unit-variance patch of size 8×8 pixels centered on the keypoint.',
        'Keypoints too close to the image border (within 4 pixels) are excluded from validPts.',
        'pts can be a cornerPoints object or an [N×2] matrix of [x,y] locations.',
      ],
      seealso: ['detectHarrisFeatures', 'detectFASTFeatures', 'matchFeatures'],
    },
    matchFeatures: {
      summary: 'Find putative correspondences between two sets of feature descriptors',
      syntax: ['indexPairs = matchFeatures(features1,features2)', 'indexPairs = matchFeatures(features1,features2,ratio)'],
      description: [
        'indexPairs = matchFeatures(F1,F2) returns an [M×2] matrix where each row [i,j] means the i-th feature in F1 matches the j-th feature in F2.',
        'Uses brute-force L2 distance with Lowe\'s ratio test: match is accepted if best_distance < 0.6 * second_best_distance.',
        'ratio overrides the ratio threshold (default 0.6). Smaller → stricter (fewer but more reliable matches).',
        'Matches are unique (each F2 descriptor can only be matched once).',
      ],
      seealso: ['extractFeatures', 'estimateFundamentalMatrix', 'detectHarrisFeatures'],
    },
    estimateFundamentalMatrix: {
      summary: 'Estimate fundamental matrix from point correspondences',
      syntax: ['F = estimateFundamentalMatrix(pts1,pts2)', '[F,inliers] = estimateFundamentalMatrix(pts1,pts2,Method,m)'],
      description: [
        'F = estimateFundamentalMatrix(pts1,pts2) returns the 3×3 fundamental matrix relating two views.',
        'pts1 and pts2 are [N×2] matrices of matching image coordinates (at least 8 pairs required).',
        'Uses the normalized 8-point algorithm (Hartley 1997):',
        '  1. Normalize points to have zero mean and RMS distance √2.',
        '  2. Build [N×9] matrix A from outer products of homogeneous coordinates.',
        '  3. Smallest singular vector of A (via power iteration on A\'A) gives raw F.',
        '  4. Enforce rank-2 via SVD: zero out smallest singular value.',
        '  5. Denormalize: F ← T2\' * F * T1.',
        'A point x2 matches x1 if x2\' * F * x1 ≈ 0 (epipolar constraint).',
      ],
      seealso: ['matchFeatures', 'extractFeatures', 'estimateEssentialMatrix'],
    },
  },
};
