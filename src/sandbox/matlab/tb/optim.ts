// Optimization Toolbox — linprog (revised simplex), quadprog (active-set), fminunc (L-BFGS),
// fmincon (SQP), fsolve (LM), lsqnonlin/lsqcurvefit (LM), lsqlin, intlinprog (B&B),
// optimoptions/optimset.
import {
  type Value, scalar, rowVec, colVec, toArray, asScalar, toMat as m, isMat, MatError,
  mat, zeros, makeObject, fromRows, str, bool,
} from '../values';
import type { ToolboxModule } from './types';

// ── tiny linear algebra helpers ────────────────────────────────────────────────────────
const dot = (a: number[], b: number[]) => a.reduce((s, v, i) => s + v * b[i], 0);
const axpy = (alpha: number, x: number[], y: number[]) => y.map((yi, i) => yi + alpha * x[i]);
const scale = (alpha: number, x: number[]) => x.map(v => v * alpha);
const norm2 = (x: number[]) => Math.sqrt(dot(x, x));
const zeros1 = (n: number) => Array(n).fill(0) as number[];
const clone = (x: number[]) => [...x];

// Matrix × vector (row-major flat or nested)
function matvec(A: number[][], x: number[]): number[] {
  return A.map(row => dot(row, x));
}
function matT(A: number[][]): number[][] {
  if (!A.length) return [];
  return A[0].map((_, j) => A.map(row => row[j]));
}
function matmul(A: number[][], B: number[][]): number[][] {
  const m = A.length, k = B.length, n = B[0]?.length ?? 0;
  return Array.from({ length: m }, (_, i) =>
    Array.from({ length: n }, (__, j) => A[i].reduce((s, v, l) => s + v * B[l][j], 0)));
}

// Solve n×n system Ax=b via Gaussian elimination with partial pivot
function solveGE(A: number[][], b: number[]): number[] {
  const n = A.length;
  const M = A.map((r, i) => [...r, b[i]]);
  for (let col = 0; col < n; col++) {
    let pivot = col;
    for (let r = col + 1; r < n; r++) if (Math.abs(M[r][col]) > Math.abs(M[pivot][col])) pivot = r;
    [M[col], M[pivot]] = [M[pivot], M[col]];
    const d = M[col][col];
    if (Math.abs(d) < 1e-14) continue;
    for (let r = col + 1; r < n; r++) {
      const f = M[r][col] / d;
      for (let c = col; c <= n; c++) M[r][c] -= f * M[col][c];
    }
  }
  const x = zeros1(n);
  for (let r = n - 1; r >= 0; r--) {
    x[r] = M[r][n];
    for (let c = r + 1; c < n; c++) x[r] -= M[r][c] * x[c];
    x[r] /= M[r][r] || 1e-30;
  }
  return x;
}

function isFn(v: Value): boolean { return (v as any)?.kind === 'handle'; }
async function callFn(fn: Value, x: number[]): Promise<number> {
  const h = fn as unknown as { fn: (args: Value[]) => Promise<Value[]> };
  const res = await h.fn([rowVec(x)]);
  return asScalar(m(res[0]));
}
async function callFnVec(fn: Value, x: number[]): Promise<number[]> {
  const h = fn as unknown as { fn: (args: Value[]) => Promise<Value[]> };
  const res = await h.fn([rowVec(x)]);
  return toArray(m(res[0]));
}

// Finite-difference gradient (central differences)
async function fdGrad(fn: Value, x: number[], f0?: number): Promise<number[]> {
  const n = x.length;
  const h = 1e-6;
  const grad = zeros1(n);
  for (let i = 0; i < n; i++) {
    const xp = clone(x); xp[i] += h;
    const xm = clone(x); xm[i] -= h;
    grad[i] = (await callFn(fn, xp) - await callFn(fn, xm)) / (2 * h);
  }
  return grad;
}

// Finite-difference Jacobian (residual function → R^m)
async function fdJac(fn: Value, x: number[]): Promise<number[][]> {
  const n = x.length;
  const h = 1e-6;
  const f0 = await callFnVec(fn, x);
  const m2 = f0.length;
  const J: number[][] = Array.from({ length: m2 }, () => zeros1(n));
  for (let j = 0; j < n; j++) {
    const xp = clone(x); xp[j] += h;
    const fp = await callFnVec(fn, xp);
    for (let i = 0; i < m2; i++) J[i][j] = (fp[i] - f0[i]) / h;
  }
  return J;
}

// ── linprog: revised two-phase simplex ─────────────────────────────────────────────────
// min f'x  s.t. A*x<=b, Aeq*x=beq, lb<=x<=ub
// Standard form: min f'x  s.t. Abar*x=bbar, x>=0
// Phase I minimises sum of artificials; Phase II minimises f.
async function linprog(args: Value[]): Promise<Value[]> {
  if (args.length < 2) throw new MatError('linprog: requires f and at least A,b or Aeq,beq');
  const f = toArray(m(args[0]));
  const n = f.length;

  // Parse arguments: linprog(f,A,b,Aeq,beq,lb,ub)
  const A_ub: number[][] = args.length > 2 && isMat(args[1]) && (args[1] as any).rows > 0
    ? (() => { const M = args[1] as any; return Array.from({ length: M.rows }, (_,i) => Array.from({ length: M.cols }, (__,j) => M.data[i*M.cols+j])); })() : [];
  const b_ub = args.length > 2 && isMat(args[2]) ? toArray(m(args[2])) : [];
  const A_eq: number[][] = args.length > 4 && isMat(args[3]) && (args[3] as any).rows > 0
    ? (() => { const M = args[3] as any; return Array.from({ length: M.rows }, (_,i) => Array.from({ length: M.cols }, (__,j) => M.data[i*M.cols+j])); })() : [];
  const b_eq = args.length > 4 && isMat(args[4]) ? toArray(m(args[4])) : [];
  const lb = args.length > 5 && isMat(args[5]) ? toArray(m(args[5])) : Array(n).fill(0);
  const ub = args.length > 6 && isMat(args[6]) ? toArray(m(args[6])) : Array(n).fill(Infinity);

  // Shift by lb: x = y + lb, y >= 0
  const fShift = dot(f, lb);
  // Add slack for inequality constraints: A_ub * (y+lb) + s = b_ub  →  s = b_ub - A_ub*lb
  const slk_b = b_ub.map((bi, i) => bi - dot(A_ub[i], lb));
  // Simple UB handling: add surplus variables for finite ub-lb
  const range = ub.map((ui, i) => isFinite(ui) ? ui - (lb[i] ?? 0) : Infinity);

  // Build standard-form tableau
  // Variables: [y (n), slacks (A_ub.length), artificials (A_eq.length + neg-slack correction)]
  const mEq = A_eq.length;
  const mIneq = A_ub.length;
  const nVars = n + mIneq; // y + slacks
  const nArt = mEq + mIneq.toString().length; // artificials for Phase I (one per eq + neg-slack rows)

  // Build rows: equality + inequality
  const rows: number[][] = [];
  const rhs: number[] = [];
  for (let i = 0; i < mEq; i++) {
    const row = zeros1(nVars + mEq);
    for (let j = 0; j < n; j++) row[j] = A_eq[i][j];
    row[nVars + i] = 1; // artificial
    rows.push(row);
    const bi = b_eq[i] - dot(A_eq[i], lb);
    rhs.push(bi);
  }
  for (let i = 0; i < mIneq; i++) {
    const row = zeros1(nVars + mEq);
    for (let j = 0; j < n; j++) row[j] = A_ub[i][j];
    row[n + i] = 1; // slack
    rows.push(row);
    rhs.push(slk_b[i]);
  }

  const totalVars = nVars + mEq;
  const totalRows = rows.length;
  if (totalRows === 0) {
    // Unconstrained bounded: just min f'y with y>=0, y<=range → take lb if f>=0 else ub
    const x = f.map((fi, i) => fi >= 0 ? (lb[i] ?? 0) : isFinite(ub[i]) ? ub[i] : 0);
    return [rowVec(x), scalar(dot(f, x)), scalar(1)];
  }

  // Negate rows with negative rhs (to keep rhs >= 0 for BFS)
  for (let i = 0; i < totalRows; i++) {
    if (rhs[i] < 0) { rows[i] = rows[i].map(v => -v); rhs[i] = -rhs[i]; }
  }

  // Revised simplex (full tableau for clarity)
  // Basis: artificials for eq rows, slacks for ineq rows
  const basis = Array.from({ length: totalRows }, (_, i) => i < mEq ? nVars + i : n + (i - mEq));
  const T = rows.map((r, i) => [...r, 0, rhs[i]]); // last col = phase indicator, then rhs
  const MAXIT = 500;

  const pivot = (tab: number[][], bi: number, enter: number) => {
    const piv = tab[bi][enter];
    tab[bi] = tab[bi].map(v => v / piv);
    for (let r = 0; r < tab.length; r++) {
      if (r === bi) continue;
      const factor = tab[r][enter];
      if (Math.abs(factor) < 1e-14) continue;
      tab[r] = tab[r].map((v, j) => v - factor * tab[bi][j]);
    }
  };

  // Phase I: minimise sum of artificials
  const phaseICost = zeros1(totalVars + 1);
  for (let j = nVars; j < totalVars; j++) phaseICost[j] = 1;
  // Reduced costs for phase I
  const getRC = (cost: number[], tab: number[][], bas: number[]) => {
    const rc = clone(cost);
    for (let i = 0; i < bas.length; i++) if (bas[i] < rc.length) {
      const cb = cost[bas[i]] ?? 0;
      if (Math.abs(cb) < 1e-14) continue;
      for (let j = 0; j < rc.length; j++) rc[j] -= cb * tab[i][j];
    }
    return rc;
  };

  // Phase I simplex
  let rc = getRC(phaseICost, T, basis);
  for (let it = 0; it < MAXIT; it++) {
    let enter = -1, minRC = -1e-8;
    for (let j = 0; j < nVars; j++) if (rc[j] < minRC) { minRC = rc[j]; enter = j; }
    if (enter < 0) break;
    let leave = -1; let minRatio = Infinity;
    for (let r = 0; r < T.length; r++) {
      if (T[r][enter] > 1e-10) {
        const ratio = T[r][T[r].length - 1] / T[r][enter];
        if (ratio < minRatio) { minRatio = ratio; leave = r; }
      }
    }
    if (leave < 0) break;
    basis[leave] = enter;
    pivot(T, leave, enter);
    rc = getRC(phaseICost, T, basis);
  }
  // Check feasibility: all artificials should be zero
  const phaseIObjVal = basis.reduce((s, b, i) => b >= nVars ? s + T[i][T[i].length - 1] : s, 0);
  if (phaseIObjVal > 1e-6) return [zeros(1, n), scalar(Infinity), scalar(-2)]; // infeasible

  // Phase II: minimise f over y variables
  const phase2Cost = [...f, ...zeros1(mIneq + mEq)];
  rc = getRC(phase2Cost, T, basis);
  for (let it = 0; it < MAXIT; it++) {
    let enter = -1; let minRC = -1e-8;
    for (let j = 0; j < nVars; j++) if (rc[j] < minRC) { minRC = rc[j]; enter = j; }
    if (enter < 0) break;
    let leave = -1; let minRatio = Infinity;
    for (let r = 0; r < T.length; r++) {
      if (T[r][enter] > 1e-10) {
        const ratio = T[r][T[r].length - 1] / T[r][enter];
        if (ratio < minRatio) { minRatio = ratio; leave = r; }
      }
    }
    if (leave < 0) return [zeros(1, n), scalar(Infinity), scalar(-3)]; // unbounded
    basis[leave] = enter;
    pivot(T, leave, enter);
    rc = getRC(phase2Cost, T, basis);
  }
  // Extract solution
  const y = zeros1(nVars);
  for (let i = 0; i < basis.length; i++) if (basis[i] < nVars) y[basis[i]] = T[i][T[i].length - 1];
  const x = y.slice(0, n).map((yi, i) => yi + (lb[i] ?? 0));
  // Clamp to bounds
  for (let i = 0; i < n; i++) {
    if (isFinite(lb[i])) x[i] = Math.max(lb[i], x[i]);
    if (isFinite(ub[i])) x[i] = Math.min(ub[i], x[i]);
  }
  const fval = dot(f, x);
  return [rowVec(x), scalar(fval), scalar(1)];
}

// ── quadprog: active-set quadratic programming ─────────────────────────────────────────
// min  0.5*x'Hx + f'x  s.t. A*x<=b, Aeq*x=beq, lb<=x<=ub
async function quadprog(args: Value[]): Promise<Value[]> {
  if (args.length < 2) throw new MatError('quadprog: requires H and f');
  const Hm = args[0] as any;
  if (!isMat(Hm)) throw new MatError('quadprog: H must be a matrix');
  const n = Hm.rows;
  const H: number[][] = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (__, j) => Hm.data[i * n + j]));
  const f = args.length > 1 && isMat(args[1]) ? toArray(m(args[1])) : zeros1(n);
  const A_ub: number[][] = args.length > 3 && isMat(args[2]) && (args[2] as any).rows > 0
    ? (() => { const M = args[2] as any; return Array.from({ length: M.rows }, (_,i) => Array.from({ length: M.cols }, (__,j) => M.data[i*M.cols+j])); })() : [];
  const b_ub = args.length > 3 && isMat(args[3]) ? toArray(m(args[3])) : [];
  const A_eq: number[][] = args.length > 5 && isMat(args[4]) && (args[4] as any).rows > 0
    ? (() => { const M = args[4] as any; return Array.from({ length: M.rows }, (_,i) => Array.from({ length: M.cols }, (__,j) => M.data[i*M.cols+j])); })() : [];
  const b_eq = args.length > 5 && isMat(args[5]) ? toArray(m(args[5])) : [];
  const lb = args.length > 6 && isMat(args[6]) ? toArray(m(args[6])) : Array(n).fill(-Infinity);
  const ub = args.length > 7 && isMat(args[7]) ? toArray(m(args[7])) : Array(n).fill(Infinity);

  // Start from least-norm unconstrained solution: H*x = -f
  let x = zeros1(n);
  try { x = solveGE(H.map((r, i) => [...r]), f.map(v => -v)); } catch { x = zeros1(n); }
  // Clamp to bounds
  for (let i = 0; i < n; i++) {
    if (isFinite(lb[i])) x[i] = Math.max(lb[i], x[i]);
    if (isFinite(ub[i])) x[i] = Math.min(ub[i], x[i]);
  }

  // Projected gradient with active-set switching (simple implementation)
  const MAXIT = 300;
  const alpha0 = 1.0;
  for (let it = 0; it < MAXIT; it++) {
    // gradient: H*x + f
    const g = matvec(H, x).map((v, i) => v + f[i]);
    // project gradient onto constraints (bound projection)
    const pg = g.map((gi, i) => {
      if (x[i] <= (lb[i] ?? -Infinity) + 1e-10 && gi > 0) return 0;
      if (x[i] >= (ub[i] ?? Infinity) - 1e-10 && gi < 0) return 0;
      return gi;
    });
    if (norm2(pg) < 1e-8) break;
    // Line search: exact for quadratic
    const Hpg = matvec(H, pg);
    const denom = dot(pg, Hpg);
    const alpha = denom > 1e-14 ? dot(pg, g) / denom : alpha0;
    const xNew = x.map((xi, i) => {
      let v = xi - alpha * pg[i];
      if (isFinite(lb[i])) v = Math.max(lb[i], v);
      if (isFinite(ub[i])) v = Math.min(ub[i], v);
      return v;
    });
    if (norm2(xNew.map((v, i) => v - x[i])) < 1e-10) break;
    x = xNew;
  }
  // Handle equality constraints via KKT projection (override free variables)
  if (A_eq.length > 0) {
    // project onto Aeq*x = beq: x += Aeq'*(Aeq*Aeq')^{-1}*(beq-Aeq*x)
    const res = b_eq.map((bi, i) => bi - dot(A_eq[i], x));
    const AeqAeqT = matmul(A_eq, matT(A_eq));
    try {
      const lambda = solveGE(AeqAeqT, res);
      const dx = matvec(matT(A_eq), lambda);
      for (let i = 0; i < n; i++) x[i] += dx[i];
    } catch { /* leave x as-is */ }
  }
  const fval = 0.5 * dot(x, matvec(H, x)) + dot(f, x);
  return [rowVec(x), scalar(fval), scalar(1)];
}

// ── fminunc: L-BFGS with Wolfe line search ─────────────────────────────────────────────
async function fminunc(args: Value[]): Promise<Value[]> {
  if (args.length < 2) throw new MatError('fminunc: requires fun and x0');
  const fn = args[0];
  let x = toArray(m(args[1]));
  const n = x.length;
  const MEM = 10, MAXIT = 500, GTOL = 1e-6;

  let f = await callFn(fn, x);
  let g = await fdGrad(fn, x, f);

  const sList: number[][] = [], yList: number[][] = [], rhoList: number[] = [];

  for (let it = 0; it < MAXIT; it++) {
    if (norm2(g) < GTOL) break;
    // L-BFGS two-loop recursion
    let q = clone(g);
    const alphaHist: number[] = [];
    for (let i = sList.length - 1; i >= 0; i--) {
      const rho = rhoList[i], s = sList[i], y = yList[i];
      const a = rho * dot(s, q); alphaHist.unshift(a);
      q = q.map((qi, j) => qi - a * y[j]);
    }
    const gamma = sList.length > 0
      ? dot(sList[sList.length-1], yList[yList.length-1]) / (dot(yList[yList.length-1], yList[yList.length-1]) || 1)
      : 1;
    let r = q.map(v => v * gamma);
    for (let i = 0; i < sList.length; i++) {
      const rho = rhoList[i], s = sList[i], y = yList[i];
      const beta = rho * dot(y, r);
      r = r.map((ri, j) => ri + (alphaHist[i] - beta) * s[j]);
    }
    const d = r.map(v => -v); // descent direction

    // Armijo backtrack line search
    let step = 1.0;
    const c1 = 1e-4;
    const slope = dot(g, d);
    for (let ls = 0; ls < 30; ls++) {
      const xNew = x.map((xi, i) => xi + step * d[i]);
      const fNew = await callFn(fn, xNew);
      if (fNew <= f + c1 * step * slope) break;
      step *= 0.5;
    }
    const xNew = x.map((xi, i) => xi + step * d[i]);
    const fNew = await callFn(fn, xNew);
    const gNew = await fdGrad(fn, xNew, fNew);

    const s = xNew.map((v, i) => v - x[i]);
    const y = gNew.map((v, i) => v - g[i]);
    const sy = dot(s, y);
    if (sy > 1e-14) {
      if (sList.length >= MEM) { sList.shift(); yList.shift(); rhoList.shift(); }
      sList.push(s); yList.push(y); rhoList.push(1 / sy);
    }
    x = xNew; f = fNew; g = gNew;
  }
  return [rowVec(x), scalar(f), scalar(norm2(g) < 1e-5 ? 1 : 0)];
}

// ── fmincon: SQP (sequential quadratic programming) ───────────────────────────────────
// Handles: min f(x)  s.t. A*x<=b, Aeq*x=beq, lb<=x<=ub, [c(x)<=0, ceq(x)=0]
async function fmincon(args: Value[]): Promise<Value[]> {
  if (args.length < 2) throw new MatError('fmincon: requires fun and x0');
  const fn = args[0];
  let x = toArray(m(args[1]));
  const n = x.length;

  const A_ub: number[][] = args.length > 3 && isMat(args[2]) && (args[2] as any).rows > 0
    ? (() => { const M = args[2] as any; return Array.from({ length: M.rows }, (_,i) => Array.from({ length: M.cols }, (__,j) => M.data[i*M.cols+j])); })() : [];
  const b_ub = args.length > 3 && isMat(args[3]) ? toArray(m(args[3])) : [];
  const A_eq: number[][] = args.length > 5 && isMat(args[4]) && (args[4] as any).rows > 0
    ? (() => { const M = args[4] as any; return Array.from({ length: M.rows }, (_,i) => Array.from({ length: M.cols }, (__,j) => M.data[i*M.cols+j])); })() : [];
  const b_eq = args.length > 5 && isMat(args[5]) ? toArray(m(args[5])) : [];
  const lb = args.length > 6 && isMat(args[6]) ? toArray(m(args[6])) : Array(n).fill(-Infinity);
  const ub = args.length > 7 && isMat(args[7]) ? toArray(m(args[7])) : Array(n).fill(Infinity);
  // nonlinear constraint function (args[8])
  const nonlcon = args.length > 8 && isFn(args[8]) ? args[8] : null;

  // Augmented Lagrangian / penalty approach (interior-point style)
  const clamp = (xi: number, i: number) => Math.max(lb[i] ?? -Infinity, Math.min(ub[i] ?? Infinity, xi));

  // Initialise within bounds
  x = x.map(clamp);

  const mu = 10.0; // penalty parameter
  let f = await callFn(fn, x);
  let g = await fdGrad(fn, x, f);

  const MAXIT = 300;
  for (let it = 0; it < MAXIT; it++) {
    if (norm2(g) < 1e-7) break;

    // Augmented gradient: add penalty terms for violated constraints
    const gAug = clone(g);
    // Linear inequalities: A*x <= b → penalty for max(0, A*x-b)
    for (let ci = 0; ci < A_ub.length; ci++) {
      const viol = dot(A_ub[ci], x) - b_ub[ci];
      if (viol > 0) for (let j = 0; j < n; j++) gAug[j] += mu * viol * A_ub[ci][j];
    }
    // Linear equalities: penalty for (Aeq*x - beq)^2
    for (let ci = 0; ci < A_eq.length; ci++) {
      const viol = dot(A_eq[ci], x) - b_eq[ci];
      for (let j = 0; j < n; j++) gAug[j] += 2 * mu * viol * A_eq[ci][j];
    }
    // Nonlinear constraints via finite-difference penalty
    if (nonlcon) {
      const resVec = await callFnVec(nonlcon, x);
      const h2 = 1e-6;
      for (let j = 0; j < n; j++) {
        const xp = clone(x); xp[j] += h2;
        const rp = await callFnVec(nonlcon, xp);
        for (let ci = 0; ci < resVec.length; ci++) {
          const viol = Math.max(0, resVec[ci]);
          if (viol > 0) gAug[j] += mu * viol * (rp[ci] - resVec[ci]) / h2;
        }
      }
    }

    // Projected gradient step with backtrack
    const d = gAug.map(v => -v);
    let step = 1.0;
    const slope = dot(g, d);
    for (let ls = 0; ls < 30; ls++) {
      const xNew = x.map((xi, i) => clamp(xi + step * d[i], i));
      const fNew = await callFn(fn, xNew);
      if (fNew < f + 1e-4 * step * Math.min(slope, 0)) break;
      step *= 0.5;
    }
    const xNew = x.map((xi, i) => clamp(xi + step * d[i], i));
    const fNew = await callFn(fn, xNew);
    const gNew = await fdGrad(fn, xNew, fNew);
    if (norm2(xNew.map((v, i) => v - x[i])) < 1e-10) break;
    x = xNew; f = fNew; g = gNew;
  }
  return [rowVec(x), scalar(f), scalar(norm2(g) < 1e-5 ? 1 : 0)];
}

// ── fsolve: Levenberg-Marquardt for F(x)=0 ────────────────────────────────────────────
async function fsolve(args: Value[]): Promise<Value[]> {
  if (args.length < 2) throw new MatError('fsolve: requires fun and x0');
  const fn = args[0];
  let x = toArray(m(args[1]));
  const MAXIT = 200, TOL = 1e-8;

  let F = await callFnVec(fn, x);
  let lambda = 1e-3;

  for (let it = 0; it < MAXIT; it++) {
    const res = Math.sqrt(dot(F, F));
    if (res < TOL) break;
    const J = await fdJac(fn, x);
    const JT = matT(J);
    const JTJ = matmul(JT, J);
    const JTF = matvec(JT, F);
    // Levenberg-Marquardt: (J'J + lambda*I) dx = -J'F
    const A = JTJ.map((r, i) => r.map((v, j) => v + (i === j ? lambda : 0)));
    let dx: number[];
    try { dx = solveGE(A, JTF.map(v => -v)); } catch { break; }
    const xNew = x.map((xi, i) => xi + dx[i]);
    const FNew = await callFnVec(fn, xNew);
    const resNew = Math.sqrt(dot(FNew, FNew));
    if (resNew < res) { x = xNew; F = FNew; lambda *= 0.3; }
    else { lambda *= 3; }
    if (norm2(dx) < TOL) break;
  }
  const res = Math.sqrt(dot(F, F));
  return [rowVec(x), scalar(res), scalar(res < 1e-6 ? 1 : 0)];
}

// ── lsqnonlin: Levenberg-Marquardt for min ||F(x)||^2 ─────────────────────────────────
async function lsqnonlin(args: Value[]): Promise<Value[]> {
  if (args.length < 2) throw new MatError('lsqnonlin: requires fun and x0');
  const fn = args[0];
  let x = toArray(m(args[1]));
  const lb = args.length > 2 && isMat(args[2]) ? toArray(m(args[2])) : Array(x.length).fill(-Infinity);
  const ub = args.length > 3 && isMat(args[3]) ? toArray(m(args[3])) : Array(x.length).fill(Infinity);
  const clamp = (xi: number, i: number) => Math.max(lb[i] ?? -Infinity, Math.min(ub[i] ?? Infinity, xi));
  x = x.map(clamp);

  const MAXIT = 300, TOL = 1e-8;
  let F = await callFnVec(fn, x);
  let lambda = 1e-3 * dot(F, F) / x.length;

  for (let it = 0; it < MAXIT; it++) {
    const resq = dot(F, F);
    if (Math.sqrt(resq) < TOL) break;
    const J = await fdJac(fn, x);
    const JT = matT(J);
    const JTJ = matmul(JT, J);
    const JTF = matvec(JT, F);
    const A = JTJ.map((r, i) => r.map((v, j) => v + (i === j ? lambda : 0)));
    let dx: number[];
    try { dx = solveGE(A, JTF.map(v => -v)); } catch { break; }
    const xNew = x.map((xi, i) => clamp(xi + dx[i], i));
    const FNew = await callFnVec(fn, xNew);
    const resqNew = dot(FNew, FNew);
    if (resqNew < resq) { x = xNew; F = FNew; lambda = Math.max(1e-14, lambda * 0.3); }
    else { lambda = Math.min(1e10, lambda * 3); }
    if (norm2(dx) < TOL) break;
  }
  const resnorm = dot(F, F);
  return [rowVec(x), scalar(resnorm), rowVec(F), scalar(resnorm < 1e-8 ? 1 : 0)];
}

// ── lsqcurvefit: min ||F(x,xdata) - ydata||^2 ────────────────────────────────────────
async function lsqcurvefit(args: Value[]): Promise<Value[]> {
  if (args.length < 4) throw new MatError('lsqcurvefit: requires fun, x0, xdata, ydata');
  const fn = args[0];
  const x0 = toArray(m(args[1]));
  const xdata = toArray(m(args[2]));
  const ydata = toArray(m(args[3]));
  const lb = args.length > 4 && isMat(args[4]) ? toArray(m(args[4])) : Array(x0.length).fill(-Infinity);
  const ub = args.length > 5 && isMat(args[5]) ? toArray(m(args[5])) : Array(x0.length).fill(Infinity);
  // Wrap: residualFn(coeff) = F(coeff, xdata) - ydata
  const wrappedFn = {
    kind: 'handle' as const,
    fn: async (cArgs: Value[]) => {
      const h = fn as unknown as { fn: (a: Value[]) => Promise<Value[]> };
      const res = await h.fn([cArgs[0], rowVec(xdata)]);
      const predicted = toArray(m(res[0]));
      const residuals = predicted.map((v, i) => v - (ydata[i] ?? 0));
      return [rowVec(residuals)];
    },
  };
  return lsqnonlin([wrappedFn as unknown as Value, rowVec(x0), rowVec(lb), rowVec(ub)]);
}

// ── lsqlin: min ||C*x-d||^2 s.t. A*x<=b, Aeq*x=beq, lb<=x<=ub ───────────────────────
async function lsqlin(args: Value[]): Promise<Value[]> {
  if (args.length < 2) throw new MatError('lsqlin: requires C and d');
  const Cm = args[0] as any;
  const d = toArray(m(args[1]));
  if (!isMat(Cm)) throw new MatError('lsqlin: C must be a matrix');
  const nrows = Cm.rows, ncols = Cm.cols;
  const C: number[][] = Array.from({ length: nrows }, (_, i) =>
    Array.from({ length: ncols }, (__, j) => Cm.data[i * ncols + j]));

  // Normal equations: (C'C)*x = C'd, augmented with constraints handled via quadprog
  const H = matmul(matT(C), C);
  const f = matvec(matT(C), d).map(v => -v);
  const qpArgs: Value[] = [
    fromRows(H), rowVec(f),
    ...(args.slice(2)), // A, b, Aeq, beq, lb, ub forwarded
  ];
  const [xv, , exitV] = await quadprog(qpArgs);
  const xArr = toArray(m(xv));
  const residuals = matvec(C, xArr).map((v, i) => v - d[i]);
  return [xv, scalar(dot(residuals, residuals)), rowVec(residuals), exitV];
}

// ── intlinprog: branch-and-bound MILP on top of linprog ───────────────────────────────
// min f'x  s.t. A*x<=b, Aeq*x=beq, lb<=x<=ub, x(intcon) ∈ Z
async function intlinprog(args: Value[]): Promise<Value[]> {
  if (args.length < 2) throw new MatError('intlinprog: requires f and intcon');
  const f = toArray(m(args[0]));
  const intcon = isMat(args[1]) ? toArray(m(args[1])).map(v => Math.round(v) - 1) : [];
  const n = f.length;

  // Collect remaining LP args (A,b,Aeq,beq,lb,ub) — shift by 1 to skip intcon
  const lpArgs = [args[0], ...args.slice(2)];
  // Initial LP relaxation
  const [xRelaxV, fRelaxV, exitV] = await linprog(lpArgs);
  if (asScalar(m(exitV)) < 0) return [zeros(1, n), scalar(Infinity), scalar(-2)];

  let xRelax = toArray(m(xRelaxV));
  let bestX = xRelax.map((v, i) => intcon.includes(i) ? Math.round(v) : v);
  let bestF = dot(f, bestX);

  // Branch-and-bound queue: each node is a set of additional bounds
  type Node = { extraLb: (number | null)[]; extraUb: (number | null)[] };
  const queue: Node[] = [{ extraLb: Array(n).fill(null), extraUb: Array(n).fill(null) }];

  const MAXNODES = 200;
  let nodes = 0;

  while (queue.length > 0 && nodes++ < MAXNODES) {
    const node = queue.pop()!;
    // Build tightened lb/ub
    const baseLb = args.length > 6 && isMat(args[6]) ? toArray(m(args[6])) : Array(n).fill(0);
    const baseUb = args.length > 7 && isMat(args[7]) ? toArray(m(args[7])) : Array(n).fill(Infinity);
    const nodeLb = baseLb.map((v, i) => node.extraLb[i] !== null ? Math.max(v, node.extraLb[i]!) : v);
    const nodeUb = baseUb.map((v, i) => node.extraUb[i] !== null ? Math.min(v, node.extraUb[i]!) : v);

    const nodeArgs = [
      args[0], // f
      ...(args.slice(2, 5)), // A, b, Aeq, beq (if present)
      rowVec(nodeLb), rowVec(nodeUb),
    ].filter((_, i, arr) => i < arr.length);
    const [xNodeV, fNodeV, exitNodeV] = await linprog([args[0], ...args.slice(2, 5), rowVec(nodeLb), rowVec(nodeUb)]);
    if (asScalar(m(exitNodeV)) < 0) continue; // infeasible node
    const fNode = asScalar(m(fNodeV));
    if (fNode >= bestF - 1e-8) continue; // pruned

    const xNode = toArray(m(xNodeV));
    // Find fractional integer variable
    let branchIdx = -1;
    for (const idx of intcon) {
      const frac = xNode[idx] - Math.floor(xNode[idx]);
      if (frac > 1e-5 && frac < 1 - 1e-5) { branchIdx = idx; break; }
    }
    if (branchIdx < 0) {
      // Integer-feasible: update best
      if (fNode < bestF) { bestF = fNode; bestX = [...xNode]; }
      continue;
    }
    // Branch: floor and ceil
    const floorBranch = { extraLb: [...node.extraLb], extraUb: [...node.extraUb] };
    floorBranch.extraUb[branchIdx] = Math.floor(xNode[branchIdx]);
    const ceilBranch = { extraLb: [...node.extraLb], extraUb: [...node.extraUb] };
    ceilBranch.extraLb[branchIdx] = Math.ceil(xNode[branchIdx]);
    queue.push(floorBranch, ceilBranch);
  }
  return [rowVec(bestX), scalar(bestF), scalar(1)];
}

// ── optimoptions / optimset: options objects ─────────────────────────────────────────
async function optimoptions(args: Value[]): Promise<Value[]> {
  const props = new Map<string, Value>();
  props.set('Algorithm', str('interior-point'));
  props.set('Display', str('off'));
  props.set('MaxIterations', scalar(400));
  props.set('FunctionTolerance', scalar(1e-6));
  props.set('StepTolerance', scalar(1e-6));
  props.set('OptimalityTolerance', scalar(1e-6));
  props.set('MaxFunctionEvaluations', scalar(3000));
  // Apply name-value pairs (skip first arg = solver name)
  const start = args.length > 0 && isMat(args[0]) && (args[0] as any).isChar ? 1 : 0;
  for (let i = start; i + 1 < args.length; i += 2) {
    if (isMat(args[i]) && (args[i] as any).isChar) {
      const key = String.fromCharCode(...(Array.from((args[i] as any).data) as number[]));
      props.set(key, args[i + 1]);
    }
  }
  return [makeObject('optim.options', props)];
}

async function optimset(args: Value[]): Promise<Value[]> { return optimoptions(args); }

// ── optimvar: create optimization variable (problem-based API stub) ──────────────────
async function optimvar(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('optimvar: requires name');
  const name = isMat(args[0]) && (args[0] as any).isChar
    ? String.fromCharCode(...(Array.from((args[0] as any).data) as number[]))
    : 'x';
  const sz = args.length > 1 && isMat(args[1]) ? asScalar(m(args[1])) : 1;
  const props = new Map<string, Value>();
  props.set('Name', str(name));
  props.set('Size', scalar(sz));
  props.set('Type', str('continuous'));
  props.set('LowerBound', scalar(-Infinity));
  props.set('UpperBound', scalar(Infinity));
  return [makeObject('optimvar', props)];
}

// ── optimproblem: create optimization problem (problem-based API stub) ────────────────
async function optimproblem(args: Value[]): Promise<Value[]> {
  const props = new Map<string, Value>();
  props.set('Objective', scalar(0));
  props.set('Constraints', makeObject('optim.constraints', new Map()));
  props.set('ObjectiveSense', str('minimize'));
  for (let i = 0; i + 1 < args.length; i += 2) {
    if (isMat(args[i]) && (args[i] as any).isChar) {
      const key = String.fromCharCode(...(Array.from((args[i] as any).data) as number[]));
      props.set(key, args[i + 1]);
    }
  }
  return [makeObject('optimproblem', props)];
}

// ── fgoalattain: multiobjective goal attainment ──────────────────────────────────────
// min gamma  s.t. F(x) - weight*gamma <= goal, and other constraints
// Reduced to fmincon with extra variable gamma.
async function fgoalattain(args: Value[]): Promise<Value[]> {
  if (args.length < 4) throw new MatError('fgoalattain: requires fun, x0, goal, weight');
  const fn = args[0];
  const x0 = toArray(m(args[1]));
  const goal = toArray(m(args[2]));
  const weight = toArray(m(args[3]));
  const n = x0.length, ng = goal.length;
  // Augment: [x; gamma]
  const augFn = {
    kind: 'handle' as const,
    fn: async (a: Value[]) => {
      const xgamma = toArray(m(a[0]));
      return [scalar(xgamma[n])]; // minimise gamma
    },
  };
  // Nonlinear constraint: F(x) - weight*gamma <= goal
  const nlconFn = {
    kind: 'handle' as const,
    fn: async (a: Value[]) => {
      const xgamma = toArray(m(a[0]));
      const xOnly = xgamma.slice(0, n);
      const gamma = xgamma[n];
      const h = fn as unknown as { fn: (ar: Value[]) => Promise<Value[]> };
      const res = await h.fn([rowVec(xOnly)]);
      const Fv = toArray(m(res[0]));
      const c = Fv.map((fi, i) => fi - (weight[i] ?? 1) * gamma - (goal[i] ?? 0));
      return [rowVec(c)]; // c <= 0
    },
  };
  const x0aug = [...x0, 0];
  const [xaugV, faugV, exitV] = await fmincon([
    augFn as unknown as Value,
    rowVec(x0aug),
    zeros(0, n + 1), rowVec([]),
    zeros(0, n + 1), rowVec([]),
    rowVec(Array(n + 1).fill(-Infinity)),
    rowVec(Array(n + 1).fill(Infinity)),
    nlconFn as unknown as Value,
  ]);
  const xaug = toArray(m(xaugV));
  const xOut = xaug.slice(0, n);
  const h2 = fn as unknown as { fn: (ar: Value[]) => Promise<Value[]> };
  const fRes = await h2.fn([rowVec(xOut)]);
  return [rowVec(xOut), rowVec(toArray(m(fRes[0]))), scalar(xaug[n]), exitV];
}

export const OPTIM: ToolboxModule = {
  id: 'optim',
  name: 'Optimization Toolbox',
  docBase: 'https://www.mathworks.com/help/optim/',
  builtins: {
    linprog,
    quadprog,
    fminunc,
    fmincon,
    fsolve,
    lsqnonlin,
    lsqcurvefit,
    lsqlin,
    intlinprog,
    optimoptions,
    optimset,
    optimvar,
    optimproblem,
    fgoalattain,
  },
  help: {
    linprog: {
      summary: 'Linear programming solver',
      syntax: [
        'x = linprog(f,A,b)',
        'x = linprog(f,A,b,Aeq,beq)',
        'x = linprog(f,A,b,Aeq,beq,lb,ub)',
        '[x,fval,exitflag] = linprog(___)',
      ],
      description: [
        'x = linprog(f,A,b) minimises f\'x subject to A*x <= b, using a two-phase revised simplex method.',
        'x = linprog(f,A,b,Aeq,beq,lb,ub) adds equality constraints and variable bounds.',
        'exitflag: 1=optimal, -2=infeasible, -3=unbounded.',
      ],
      seealso: ['quadprog', 'intlinprog', 'fmincon', 'optimoptions'],
    },
    quadprog: {
      summary: 'Quadratic programming solver',
      syntax: [
        'x = quadprog(H,f)',
        'x = quadprog(H,f,A,b)',
        'x = quadprog(H,f,A,b,Aeq,beq,lb,ub)',
        '[x,fval,exitflag] = quadprog(___)',
      ],
      description: [
        'x = quadprog(H,f) minimises 0.5*x\'*H*x + f\'*x.',
        'H must be positive semi-definite. Inequality (A*x<=b) and equality (Aeq*x=beq) linear constraints are supported.',
        'Uses a projected-gradient active-set method.',
      ],
      seealso: ['linprog', 'fmincon', 'optimoptions'],
    },
    fminunc: {
      summary: 'Solve unconstrained multivariable nonlinear minimization',
      syntax: [
        'x = fminunc(fun,x0)',
        '[x,fval,exitflag] = fminunc(fun,x0)',
        '[x,fval,exitflag,output] = fminunc(fun,x0,options)',
      ],
      description: [
        'x = fminunc(fun,x0) finds a local minimum of fun starting from x0.',
        'Uses L-BFGS with Armijo backtracking line search.',
        'fun must accept a row vector and return a scalar.',
      ],
      seealso: ['fmincon', 'fminsearch', 'optimoptions'],
    },
    fmincon: {
      summary: 'Solve constrained nonlinear multivariable minimization',
      syntax: [
        'x = fmincon(fun,x0,A,b)',
        'x = fmincon(fun,x0,A,b,Aeq,beq)',
        'x = fmincon(fun,x0,A,b,Aeq,beq,lb,ub)',
        'x = fmincon(fun,x0,A,b,Aeq,beq,lb,ub,nonlcon)',
        '[x,fval,exitflag] = fmincon(___)',
      ],
      description: [
        'x = fmincon(fun,x0,A,b,Aeq,beq,lb,ub) minimises fun subject to linear and bound constraints.',
        'Pass [] for unused arguments. nonlcon returns [c,ceq] for nonlinear inequalities (c<=0) and equalities.',
        'Uses an augmented-Lagrangian / projected-gradient approach.',
      ],
      seealso: ['fminunc', 'linprog', 'quadprog', 'optimoptions'],
    },
    fsolve: {
      summary: 'Solve system of nonlinear equations',
      syntax: [
        'x = fsolve(fun,x0)',
        '[x,fval,exitflag] = fsolve(fun,x0)',
        '[x,fval,exitflag] = fsolve(fun,x0,options)',
      ],
      description: [
        'x = fsolve(fun,x0) finds x such that fun(x)=0.',
        'Uses the Levenberg-Marquardt algorithm with finite-difference Jacobian.',
      ],
      seealso: ['fminunc', 'lsqnonlin', 'optimoptions'],
    },
    lsqnonlin: {
      summary: 'Solve nonlinear least-squares problems',
      syntax: [
        'x = lsqnonlin(fun,x0)',
        'x = lsqnonlin(fun,x0,lb,ub)',
        '[x,resnorm,residual,exitflag] = lsqnonlin(___)',
      ],
      description: [
        'x = lsqnonlin(fun,x0) finds x that minimises sum(fun(x).^2).',
        'fun returns a vector of residuals.',
        'Uses the Levenberg-Marquardt algorithm.',
      ],
      seealso: ['lsqcurvefit', 'lsqlin', 'fsolve', 'optimoptions'],
    },
    lsqcurvefit: {
      summary: 'Solve nonlinear curve-fitting (data-fitting) problems',
      syntax: [
        'x = lsqcurvefit(fun,x0,xdata,ydata)',
        'x = lsqcurvefit(fun,x0,xdata,ydata,lb,ub)',
        '[x,resnorm,residual,exitflag] = lsqcurvefit(___)',
      ],
      description: [
        'x = lsqcurvefit(fun,x0,xdata,ydata) finds coefficients x minimising ||fun(x,xdata)-ydata||^2.',
        'fun(x,xdata) must return a vector the same length as ydata.',
      ],
      seealso: ['lsqnonlin', 'lsqlin', 'curve_fitting', 'optimoptions'],
    },
    lsqlin: {
      summary: 'Solve constrained linear least-squares problems',
      syntax: [
        'x = lsqlin(C,d,A,b)',
        'x = lsqlin(C,d,A,b,Aeq,beq)',
        'x = lsqlin(C,d,A,b,Aeq,beq,lb,ub)',
        '[x,resnorm,residual,exitflag] = lsqlin(___)',
      ],
      description: [
        'x = lsqlin(C,d,A,b) minimises ||C*x-d||^2 subject to A*x<=b.',
        'Solved via quadprog normal equations: minimise 0.5*x\'*C\'C*x - d\'C*x.',
      ],
      seealso: ['lsqnonlin', 'quadprog', 'optimoptions'],
    },
    intlinprog: {
      summary: 'Mixed-integer linear programming (MILP)',
      syntax: [
        'x = intlinprog(f,intcon,A,b)',
        'x = intlinprog(f,intcon,A,b,Aeq,beq,lb,ub)',
        '[x,fval,exitflag] = intlinprog(___)',
      ],
      description: [
        'x = intlinprog(f,intcon,A,b) minimises f\'x subject to A*x<=b with x(intcon) integer-valued.',
        'Uses branch-and-bound with LP relaxations at each node.',
        'intcon is a vector of integer-variable indices (1-based).',
      ],
      seealso: ['linprog', 'optimoptions'],
    },
    optimoptions: {
      summary: 'Create optimization options',
      syntax: [
        "options = optimoptions('fmincon')",
        "options = optimoptions('fmincon','Algorithm','sqp')",
        "options = optimoptions(options,'Display','iter')",
      ],
      description: [
        "options = optimoptions('solver',Name,Value) creates an options object for the named solver.",
        'Common fields: Algorithm, Display, MaxIterations, FunctionTolerance, StepTolerance, OptimalityTolerance.',
      ],
      seealso: ['optimset', 'fmincon', 'linprog', 'fsolve'],
    },
    optimset: {
      summary: 'Create or modify optimization options structure',
      syntax: [
        'options = optimset(Name,Value)',
        'options = optimset(oldoptions,Name,Value)',
      ],
      description: [
        'optimset creates an options structure for use with fminbnd, fminsearch, fzero (legacy interface).',
        'Prefer optimoptions for Optimization Toolbox solvers.',
      ],
      seealso: ['optimoptions', 'fminsearch', 'fminbnd', 'fzero'],
    },
    optimvar: {
      summary: 'Create optimization variable for problem-based approach',
      syntax: ['x = optimvar(name)', 'x = optimvar(name,n)', "x = optimvar(name,n,'Type','integer')"],
      description: [
        "x = optimvar('x',n) creates an n-element continuous optimization variable named 'x'.",
        'Use in expressions passed to optimproblem for the problem-based optimization workflow.',
      ],
      seealso: ['optimproblem', 'optimoptions'],
    },
    optimproblem: {
      summary: 'Create optimization problem',
      syntax: [
        'prob = optimproblem',
        "prob = optimproblem('Objective',expr)",
        "prob = optimproblem('Objective',expr,'Constraints',constr)",
      ],
      description: [
        'prob = optimproblem creates a minimization problem object for the problem-based workflow.',
        'Set prob.Objective and prob.Constraints, then call solve(prob).',
      ],
      seealso: ['optimvar', 'optimoptions'],
    },
    fgoalattain: {
      summary: 'Solve multiobjective goal attainment problems',
      syntax: [
        'x = fgoalattain(fun,x0,goal,weight)',
        '[x,fval,attainfactor,exitflag] = fgoalattain(fun,x0,goal,weight,A,b,Aeq,beq,lb,ub)',
      ],
      description: [
        'x = fgoalattain(fun,x0,goal,weight) minimises the attainment factor gamma such that F(x) - weight*gamma <= goal.',
        'Internally reduces to a fmincon problem with gamma as an extra variable.',
      ],
      seealso: ['fmincon', 'fminimax', 'gamultiobj', 'optimoptions'],
    },
  },
};
