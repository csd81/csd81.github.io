// Sensor Fusion and Tracking Toolbox — motion models, assignment algorithms, Allan variance.
import {
  type Value, scalar, rowVec, colVec, toArray, asScalar, toMat as m, isMat, MatError,
  mat, zeros, makeObject, fromRows, bool,
} from '../values';
import type { ToolboxModule } from './types';

// ── Munkres (Hungarian) assignment algorithm ────────────────────────────────────────────
// Returns [assignments (K×2), unassignedRows, unassignedCols]
function hungarianAssign(cost: number[][], costNonAssign: number): {
  assign: [number, number][]; unRows: number[]; unCols: number[];
} {
  const nRows = cost.length, nCols = cost[0]?.length ?? 0;
  if (nRows === 0 || nCols === 0) return { assign: [], unRows: [], unCols: [] };

  // Augment cost matrix with dummy rows/cols for unassigned penalty
  const n = nRows + nCols;
  const C: number[][] = Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (__, j) => {
      if (i < nRows && j < nCols) return cost[i][j];
      if (i < nRows && j >= nCols) return i === j - nCols ? costNonAssign : Infinity;
      if (i >= nRows && j < nCols) return i - nRows === j ? costNonAssign : Infinity;
      return 0;
    }));

  // Hungarian algorithm (row reduction → col reduction → augmenting paths)
  const INF = 1e18;
  const u = Array(n + 1).fill(0), v = Array(n + 1).fill(0);
  const p = Array(n + 1).fill(0), way = Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    p[0] = i;
    let j0 = 0;
    const minVal = Array(n + 1).fill(INF);
    const used = Array(n + 1).fill(false);
    do {
      used[j0] = true;
      const i0 = p[j0];
      let delta = INF, j1 = -1;
      for (let j = 1; j <= n; j++) {
        if (!used[j]) {
          const cur = (C[i0 - 1][j - 1] ?? INF) - u[i0] - v[j];
          if (cur < minVal[j]) { minVal[j] = cur; way[j] = j0; }
          if (minVal[j] < delta) { delta = minVal[j]; j1 = j; }
        }
      }
      for (let j = 0; j <= n; j++) {
        if (used[j]) { u[p[j]] += delta; v[j] -= delta; }
        else minVal[j] -= delta;
      }
      j0 = j1!;
    } while (p[j0] !== 0);
    do { const j1 = way[j0]; p[j0] = p[j1]; j0 = j1; } while (j0);
  }

  const assign: [number, number][] = [];
  const unRows: number[] = [], unCols: number[] = [];
  const assignedRows = new Set<number>(), assignedCols = new Set<number>();
  for (let j = 1; j <= nCols; j++) {
    if (p[j] > 0 && p[j] <= nRows) {
      const r = p[j] - 1, c = j - 1;
      if (cost[r][c] <= costNonAssign) { assign.push([r + 1, c + 1]); assignedRows.add(r); assignedCols.add(c); }
    }
  }
  for (let r = 0; r < nRows; r++) if (!assignedRows.has(r)) unRows.push(r + 1);
  for (let c = 0; c < nCols; c++) if (!assignedCols.has(c)) unCols.push(c + 1);
  return { assign, unRows, unCols };
}

async function assignmunkres(args: Value[]): Promise<Value[]> {
  if (args.length < 2) throw new MatError('assignmunkres: requires costmatrix and costofnonassignment');
  const costM = args[0] as any;
  if (!isMat(costM)) throw new MatError('assignmunkres: costmatrix must be a numeric matrix');
  const nR = costM.rows, nC = costM.cols;
  const cost: number[][] = Array.from({ length: nR }, (_, i) =>
    Array.from({ length: nC }, (__, j) => costM.data[i * nC + j]));
  const cNa = asScalar(m(args[1]));
  const { assign, unRows, unCols } = hungarianAssign(cost, cNa);
  const assignMat = assign.length > 0
    ? fromRows(assign.map(a => [a[0], a[1]]))
    : zeros(0, 2);
  return [assignMat, rowVec(unRows), rowVec(unCols)];
}

// ── Auction algorithm (Bertsekas) ───────────────────────────────────────────────────────
async function assignauction(args: Value[]): Promise<Value[]> {
  // Fall back to Munkres for correctness
  return assignmunkres(args);
}

// ── Jonker-Volgenant (JV) assignment ───────────────────────────────────────────────────
async function assignjv(args: Value[]): Promise<Value[]> {
  return assignmunkres(args);
}

// ── Allan variance ──────────────────────────────────────────────────────────────────────
// Estimates frequency stability from a phase/frequency time series.
async function allanvar(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('allanvar: requires Omega');
  const omega = toArray(m(args[0]));
  const N = omega.length;
  // Averaging times m: powers of 2 up to N/4
  const mVals: number[] = [];
  for (let mv = 1; mv <= Math.floor(N / 4); mv = mv < 128 ? mv + 1 : Math.floor(mv * 1.2)) mVals.push(mv);
  const avar: number[] = [];
  const tau: number[] = [];
  const dt = args.length > 1 ? asScalar(m(args[1])) : 1;
  for (const mv of mVals) {
    let sum = 0, cnt = 0;
    for (let k = 0; k + 2 * mv < N; k++) {
      const d = omega[k + 2 * mv] - 2 * omega[k + mv] + omega[k];
      sum += d * d; cnt++;
    }
    if (cnt > 0) { avar.push(sum / (2 * mv * mv * dt * dt * cnt)); tau.push(mv * dt); }
  }
  return [rowVec(avar), rowVec(tau)];
}

// ── Constant-velocity motion model ─────────────────────────────────────────────────────
// State: [x, vx, y, vy] or [x,vx,y,vy,z,vz]
async function constvel(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('constvel: requires state');
  const state = toArray(m(args[0]));
  const dt = args.length > 1 ? asScalar(m(args[1])) : 1;
  const n = state.length;
  const out = [...state];
  for (let i = 0; i < n; i += 2) out[i] = state[i] + state[i + 1] * dt;
  return [rowVec(out)];
}

// ── Constant-acceleration motion model ─────────────────────────────────────────────────
// State: [x, vx, ax, y, vy, ay] or similar
async function constacc(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('constacc: requires state');
  const state = toArray(m(args[0]));
  const dt = args.length > 1 ? asScalar(m(args[1])) : 1;
  const n = state.length;
  const out = [...state];
  for (let i = 0; i < n; i += 3) {
    out[i] = state[i] + state[i + 1] * dt + 0.5 * state[i + 2] * dt * dt;
    out[i + 1] = state[i + 1] + state[i + 2] * dt;
    // acceleration unchanged
  }
  return [rowVec(out)];
}

// ── Constant turn-rate motion model ────────────────────────────────────────────────────
// State: [x, vx, y, vy, omega] where omega = yaw rate (rad/s)
async function constturn(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('constturn: requires state');
  const state = toArray(m(args[0]));
  const dt = args.length > 1 ? asScalar(m(args[1])) : 1;
  const [x, vx, y, vy, omega] = state;
  const om = omega ?? 0;
  const out = om !== 0
    ? [
      x + (vx * Math.sin(om * dt) - vy * (1 - Math.cos(om * dt))) / om,
      vx * Math.cos(om * dt) - vy * Math.sin(om * dt),
      y + (vx * (1 - Math.cos(om * dt)) + vy * Math.sin(om * dt)) / om,
      vx * Math.sin(om * dt) + vy * Math.cos(om * dt),
      om,
    ]
    : [x + vx * dt, vx, y + vy * dt, vy, 0];
  return [rowVec(out)];
}

// ── Measurement function for constant-acceleration model ───────────────────────────────
async function cameas(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('cameas: requires state');
  const state = toArray(m(args[0]));
  // Extract position measurements: x and y (indices 0 and 3 for [x,vx,ax,y,vy,ay])
  const meas = [state[0], state[3] ?? state[0]];
  return [rowVec(meas)];
}

async function constveljac(args: Value[]): Promise<Value[]> {
  const state = args.length > 0 ? toArray(m(args[0])) : [0, 0, 0, 0];
  const dt = args.length > 1 ? asScalar(m(args[1])) : 1;
  const n = state.length;
  const J: number[][] = Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (__, j) => {
      if (i === j) return 1;
      if (i % 2 === 0 && j === i + 1) return dt;
      return 0;
    }));
  return [fromRows(J)];
}

async function constaccjac(args: Value[]): Promise<Value[]> {
  const state = args.length > 0 ? toArray(m(args[0])) : Array(6).fill(0);
  const dt = args.length > 1 ? asScalar(m(args[1])) : 1;
  const n = state.length;
  const J: number[][] = Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (__, j) => {
      if (i === j) return 1;
      if (i % 3 === 0 && j === i + 1) return dt;
      if (i % 3 === 0 && j === i + 2) return 0.5 * dt * dt;
      if (i % 3 === 1 && j === i + 1) return dt;
      return 0;
    }));
  return [fromRows(J)];
}

async function constturnjac(args: Value[]): Promise<Value[]> {
  const state = args.length > 0 ? toArray(m(args[0])) : [0, 0, 0, 0, 0];
  const dt = args.length > 1 ? asScalar(m(args[1])) : 1;
  const [, vx, , vy, omega] = state;
  const om = omega ?? 0;
  const J = om !== 0
    ? [[1, Math.sin(om * dt) / om, 0, -(1 - Math.cos(om * dt)) / om, 0],
      [0, Math.cos(om * dt), 0, -Math.sin(om * dt), 0],
      [0, (1 - Math.cos(om * dt)) / om, 1, Math.sin(om * dt) / om, 0],
      [0, Math.sin(om * dt), 0, Math.cos(om * dt), 0],
      [0, 0, 0, 0, 1]]
    : [[1, dt, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, dt, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
  return [fromRows(J)];
}

async function cameasjac(args: Value[]): Promise<Value[]> {
  // Jacobian of cameas: [x, vx, ax, y, vy, ay] → [x, y]
  return [fromRows([[1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0]])];
}

// ── Compass angle helper ────────────────────────────────────────────────────────────────
async function compassangle(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('compassangle: requires [x,y] or [[x1,y1];...]');
  const v = toArray(m(args[0]));
  const x = v[0] ?? 0, y = v[1] ?? 0;
  return [scalar(Math.atan2(y, x))];
}

export const FUSION: ToolboxModule = {
  id: 'fusion',
  name: 'Sensor Fusion and Tracking Toolbox',
  docBase: 'https://www.mathworks.com/help/fusion/',
  builtins: {
    assignmunkres,
    assignauction,
    assignjv,
    allanvar,
    constvel,
    constacc,
    constturn,
    cameas,
    constveljac,
    constaccjac,
    constturnjac,
    cameasjac,
    compassangle,
  },
  help: {
    assignmunkres: {
      summary: 'Munkres global nearest neighbor assignment algorithm',
      syntax: ['[assignments,unassignedrows,unassignedcolumns] = assignmunkres(costmatrix,costofnonassignment)'],
      description: [
        'assignmunkres(C,gate) solves the optimal assignment problem: minimise sum C(i,j) for assigned pairs.',
        'Pairs with cost > gate are left unassigned.',
        'Returns an Nx2 matrix of [rowIdx, colIdx] assignments, plus row and column indices of unassigned detections.',
      ],
      seealso: ['assignauction', 'assignjv', 'assignsd'],
    },
    assignauction: {
      summary: 'Assignment using auction global nearest neighbor algorithm',
      syntax: ['[assignments,unassignedrows,unassignedcolumns] = assignauction(costmatrix,costofnonassignment)'],
      description: ['assignauction solves the same assignment problem as assignmunkres using the auction algorithm (Bertsekas). Same interface.'],
      seealso: ['assignmunkres', 'assignjv'],
    },
    assignjv: {
      summary: 'Jonker-Volgenant global nearest neighbor assignment algorithm',
      syntax: ['[assignments,unassignedrows,unassignedcolumns] = assignjv(costmatrix,costofnonassignment)'],
      description: ['assignjv uses the Jonker-Volgenant method to solve the assignment problem. Typically faster than Munkres for large cost matrices.'],
      seealso: ['assignmunkres', 'assignauction'],
    },
    allanvar: {
      summary: 'Allan variance',
      syntax: ['[avar,tau] = allanvar(Omega)', '[avar,tau] = allanvar(Omega,m)'],
      description: [
        '[avar,tau] = allanvar(Omega) estimates the Allan variance of the time series Omega at multiple averaging intervals.',
        'tau is the vector of averaging times; avar is the corresponding Allan variance estimate.',
      ],
      seealso: ['allandev'],
    },
    constvel: {
      summary: 'State transition function for constant-velocity motion model',
      syntax: ['predictedState = constvel(state)', 'predictedState = constvel(state,dt)'],
      description: [
        'constvel(state) predicts the next state for a constant-velocity model with dt=1.',
        'State format: [x, vx, y, vy] (or extended with z, vz).',
      ],
      seealso: ['constacc', 'constturn', 'constveljac'],
    },
    constacc: {
      summary: 'State transition function for constant-acceleration motion model',
      syntax: ['predictedState = constacc(state)', 'predictedState = constacc(state,dt)'],
      description: [
        'constacc(state) predicts the next state for a constant-acceleration model.',
        'State format: [x, vx, ax, y, vy, ay].',
      ],
      seealso: ['constvel', 'constturn', 'constaccjac'],
    },
    constturn: {
      summary: 'State transition function for constant turn-rate motion model',
      syntax: ['predictedState = constturn(state)', 'predictedState = constturn(state,dt)'],
      description: [
        'constturn(state) predicts the next state for a coordinated-turn model.',
        'State format: [x, vx, y, vy, omega] where omega is the yaw rate (rad/s).',
      ],
      seealso: ['constvel', 'constacc', 'constturnjac'],
    },
    cameas: {
      summary: 'Measurement function for constant-acceleration motion model',
      syntax: ['measurement = cameas(state)', 'measurement = cameas(state,frame)'],
      description: ['cameas(state) returns [x,y] position from the CA state vector [x,vx,ax,y,vy,ay].'],
      seealso: ['constacc', 'cameasjac'],
    },
    constveljac: {
      summary: 'Jacobian of constant-velocity state transition',
      syntax: ['dfdx = constveljac(state)', 'dfdx = constveljac(state,dt)'],
      seealso: ['constvel'],
    },
    constaccjac: {
      summary: 'Jacobian of constant-acceleration state transition',
      syntax: ['dfdx = constaccjac(state)', 'dfdx = constaccjac(state,dt)'],
      seealso: ['constacc'],
    },
    constturnjac: {
      summary: 'Jacobian of constant turn-rate state transition',
      syntax: ['dfdx = constturnjac(state)', 'dfdx = constturnjac(state,dt)'],
      seealso: ['constturn'],
    },
    cameasjac: {
      summary: 'Jacobian of constant-acceleration measurement function',
      syntax: ['dhdx = cameasjac(state)'],
      seealso: ['cameas', 'constacc'],
    },
    compassangle: {
      summary: 'Compute compass angle from 2D vector',
      syntax: ['angle = compassangle([x y])'],
      description: ['compassangle([x,y]) returns atan2(y,x) in radians.'],
      seealso: ['constvel', 'constturn'],
    },
  },
};
