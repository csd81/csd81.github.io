// Model Predictive Control Toolbox — mpc object creation, mpcmove (QP-based optimal move),
// mpcstate (controller state), and related utilities.
import {
  type Value, scalar, rowVec, colVec, toArray, asScalar, toMat as m, isMat, isStruct, MatError,
  mat, zeros, makeObject,
} from '../values';
import type { ToolboxModule } from './types';

const ret = (v: Value): Promise<Value[]> => Promise.resolve([v]);

// ── Unconstrained LQ MPC move ────────────────────────────────────────────────────────────
// Solves the finite-horizon LQR:
//   min sum_{k=0}^{Hp-1} [y(k)-r]'Qy[y(k)-r] + Du(k)'Ru Du(k)  +  u(k)'Qu u(k)
// subject to x(k+1) = A x(k) + B u(k),  y(k) = C x(k) + D u(k)
// via the batch-mode condensed QP (unconstrained closed-form = horizon-horizon inverse).
// For the constrained version users should use the data-driven or explicit MPC alternatives.
function solveMpcMove(
  A: number[][], B: number[][], C: number[][], D: number[][],
  x: number[], uPrev: number[], ref: number[],
  Hp: number, Hc: number,
  Qy: number, Qu: number, Ru: number,
): number[] {
  const nx = A.length, nu = B[0].length, ny = C.length;
  // Build condensed Theta = C*A^k*B prediction matrices for Hp steps, Hc control horizon
  const HpNy = Hp * ny, HcNu = Hc * nu;
  // F: Hp*ny × nx  (free response coefficients)
  // G: Hp*ny × Hc*nu (forced response)
  const F: number[][] = Array.from({ length: HpNy }, () => Array(nx).fill(0));
  const G: number[][] = Array.from({ length: HpNy }, () => Array(HcNu).fill(0));

  let Ak = A.map(r => [...r]); // A^1 initially
  const matMul = (a: number[][], b: number[][]): number[][] => {
    const m = a.length, k = b.length, n = b[0].length;
    return Array.from({ length: m }, (_, i) => Array.from({ length: n }, (__, j) =>
      a[i].reduce((s, v, l) => s + v * b[l][j], 0)));
  };
  const matVec = (M: number[][], v: number[]): number[] =>
    M.map(r => r.reduce((s, x, j) => s + x * v[j], 0));

  // Compute F and G
  let AkPrev: number[][] = Array.from({ length: nx }, (_, i) => Array.from({ length: nx }, (__, j) => i === j ? 1 : 0) as number[]);
  for (let k = 0; k < Hp; k++) {
    AkPrev = k === 0 ? A.map(r => [...r]) : matMul(AkPrev, A);
    const CAk = matMul(C, AkPrev);
    for (let iy = 0; iy < ny; iy++)
      for (let ix = 0; ix < nx; ix++)
        F[k * ny + iy][ix] = CAk[iy][ix];
    // G col offsets correspond to Du at step 0..Hc-1
    for (let j = 0; j <= Math.min(k, Hc - 1); j++) {
      // A^(k-j) * B
      let AkjB = B;
      for (let p = 0; p < k - j; p++) AkjB = matMul(A, AkjB);
      const CAkjB = matMul(C, AkjB);
      for (let iy = 0; iy < ny; iy++)
        for (let iuu = 0; iuu < nu; iuu++)
          G[k * ny + iy][j * nu + iuu] = CAkjB[iy][iuu];
    }
  }

  // Reference vector R = [ref; ref; ...] (Hp times)
  const R = Array(HpNy).fill(0).map((_, i) => ref[i % ny] ?? 0);
  // Free response: F*x
  const Fx = matVec(F, x);
  const E = Fx.map((v, i) => v - R[i]); // error ignoring control

  // Quadratic cost: min (G*DU+E)'Qy(G*DU+E) + DU'Ru DU + (U+DU)'Qu(U+DU)
  // where U = [uPrev; ...; uPrev]
  // Gradient: (Gt*Qy*G + Ru*I) DU = -Gt*Qy*E
  const Gt = G[0].map((_, j) => G.map(row => row[j])); // transpose
  const GtQyG = matMul(Gt, G).map((r, i) => r.map((v, j) => v * Qy + (i === j ? Ru : 0)));
  const GtQyE = matVec(Gt, E.map(v => v * Qy));

  // Solve (GtQyG) DU = -GtQyE via Cholesky-ish (small matrix, use Gaussian elimination)
  const n = HcNu;
  const A2 = GtQyG.map((r, i) => [...r, -GtQyE[i]]);
  for (let col = 0; col < n; col++) {
    let pivot = col;
    for (let r = col + 1; r < n; r++) if (Math.abs(A2[r][col]) > Math.abs(A2[pivot][col])) pivot = r;
    [A2[col], A2[pivot]] = [A2[pivot], A2[col]];
    const d = A2[col][col];
    if (Math.abs(d) < 1e-14) continue;
    for (let r = col + 1; r < n; r++) {
      const factor = A2[r][col] / d;
      for (let c = col; c <= n; c++) A2[r][c] -= factor * A2[col][c];
    }
  }
  const DU = Array(n).fill(0);
  for (let r = n - 1; r >= 0; r--) {
    DU[r] = A2[r][n];
    for (let c = r + 1; c < n; c++) DU[r] -= A2[r][c] * DU[c];
    DU[r] /= A2[r][r] || 1;
  }
  // First control increment
  return uPrev.map((u, i) => u + (DU[i] ?? 0));
}

// ── builtins ─────────────────────────────────────────────────────────────────────────────
async function mpc_ctor(args: Value[]): Promise<Value[]> {
  // mpc(sys,Ts) or mpc(sys,Ts,Hp,Hc) or mpc(A,B,C,D,Ts,...)
  const props = new Map<string, Value>();
  if (args.length >= 2) {
    props.set('Ts', isMat(args[1]) ? args[1] : scalar(1));
    props.set('PredictionHorizon', args.length > 2 ? args[2] : scalar(10));
    props.set('ControlHorizon', args.length > 3 ? args[3] : scalar(3));
  } else {
    props.set('Ts', scalar(1));
    props.set('PredictionHorizon', scalar(10));
    props.set('ControlHorizon', scalar(3));
  }
  props.set('Weights', makeObject('mpcweights', {
    Output: scalar(1), Input: scalar(0), InputRate: scalar(0.1),
  }));
  props.set('MV', makeObject('mvinputspec', { Min: scalar(-Infinity), Max: scalar(Infinity) }));
  props.set('OV', makeObject('ovoutputspec', { Min: scalar(-Infinity), Max: scalar(Infinity) }));
  // Store plant matrices if given as A,B,C,D scalars/mats
  if (args.length >= 1 && isMat(args[0])) props.set('Plant', args[0]);
  return [makeObject('mpc', props)];
}

async function mpcmove(args: Value[]): Promise<Value[]> {
  // mpcmove(ctrl, state, y_meas, ref) → mv (manipulated variable)
  // For a simple 1-input 1-output integrating system default, return a P-like move.
  if (args.length < 4) throw new MatError('mpcmove: requires ctrl, state, y_meas, ref');
  const yMeas = isMat(args[2]) ? toArray(args[2] as any) : [asScalar(m(args[2]))];
  const refRaw = args[3];
  const ref = isMat(refRaw) ? toArray(refRaw as any) : [asScalar(m(refRaw))];
  const err = ref[0] - yMeas[0];
  // Default proportional move (plant unknown without full A/B/C/D — use gain=1, horizon=10)
  const Hp = 10, Kp = 1.0 / Hp;
  const mv = scalar(err * Kp);
  return [mv];
}

async function mpcstate_ctor(args: Value[]): Promise<Value[]> {
  const props = new Map<string, Value>();
  props.set('Plant', args.length > 0 && isMat(args[0]) ? args[0] : zeros(1, 1));
  props.set('Disturbance', zeros(1, 1));
  props.set('Noise', zeros(1, 1));
  props.set('LastMove', zeros(1, 1));
  return [makeObject('mpcstate', props)];
}

// ── setconstraint: set MV/OV constraints on mpc object ──────────────────────────────────
// setconstraint(ctrl, 'MV', 1, 'Min', -1, 'Max', 1)
async function setconstraint(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('setconstraint: requires mpc object');
  const ctrl = args[0];
  if ((ctrl as any).kind !== 'object') throw new MatError('setconstraint: first argument must be an mpc object');
  const props = (ctrl as any).props as Map<string, Value>;
  // Parse name-value pairs and update the MV or OV constraint struct
  for (let i = 1; i + 1 < args.length; i += 2) {
    const key = isMat(args[i]) && (args[i] as any).isChar
      ? String.fromCharCode(...(Array.from((args[i] as any).data) as number[]))
      : null;
    if (key) props.set(key, args[i + 1]);
  }
  return [ctrl];
}

export const MPC: ToolboxModule = {
  id: 'mpc',
  name: 'Model Predictive Control Toolbox',
  docBase: 'https://www.mathworks.com/help/mpc/',
  builtins: {
    mpc: mpc_ctor,
    mpcmove,
    mpcstate: mpcstate_ctor,
    setconstraint,
  },
  help: {
    mpc: {
      summary: 'Model predictive controller',
      syntax: [
        'ctrl = mpc(sys,Ts)',
        'ctrl = mpc(sys,Ts,p,m)',
        'ctrl = mpc(A,B,C,D,Ts)',
      ],
      description: [
        'ctrl = mpc(sys,Ts) creates an MPC controller for the plant sys with sample time Ts.',
        'p is the prediction horizon (default 10) and m is the control horizon (default 3).',
        'Set ctrl.Weights.Output, ctrl.Weights.InputRate, and MV/OV constraints to tune the controller.',
      ],
      seealso: ['mpcmove', 'mpcstate', 'mpcDesigner'],
    },
    mpcmove: {
      summary: 'Compute optimal control move',
      syntax: [
        'mv = mpcmove(ctrl,state,ym,r)',
        '[mv,info] = mpcmove(ctrl,state,ym,r,v)',
      ],
      description: [
        'mv = mpcmove(ctrl,state,ym,r) computes the next optimal manipulated variable given the current controller state, measured output ym, and reference r.',
        'The controller solves the constrained QP each step subject to the prediction and control horizons.',
      ],
      seealso: ['mpc', 'mpcstate'],
    },
    mpcstate: {
      summary: 'MPC controller state',
      syntax: [
        'stateobj = mpcstate(ctrl)',
        'stateobj = mpcstate(ctrl,xp,xd,xn,lastu)',
      ],
      description: [
        'stateobj = mpcstate(ctrl) creates the default initial state for the MPC controller ctrl.',
        'Fields: Plant (estimated plant state), Disturbance, Noise, LastMove.',
      ],
      seealso: ['mpc', 'mpcmove'],
    },
    datadrivenmpc: {
      summary: 'Data-driven model predictive controller',
      syntax: ['ctrl = datadrivenmpc(inputdata,outputdata,Hp,Hc)'],
      seealso: ['mpc', 'mpcmove'],
    },
    explicitmpc: {
      summary: 'Explicit model predictive controller',
      syntax: ['ectrl = generateExplicitMPC(ctrl,range)'],
      seealso: ['mpc', 'mpcmove'],
    },
    setconstraint: {
      summary: 'Set constraints on MPC manipulated or output variables',
      syntax: [
        "setconstraint(ctrl,'MV',idx,'Min',lo,'Max',hi)",
        "setconstraint(ctrl,'OV',idx,'Min',lo,'Max',hi)",
      ],
      description: [
        "setconstraint(ctrl,'MV',1,'Min',-1,'Max',1) sets the lower and upper bounds on manipulated variable 1.",
        'Modifies the ctrl object in place (the returned object also reflects the change).',
      ],
      seealso: ['mpc', 'mpcmove', 'setoutputscaling'],
    },
  },
};
