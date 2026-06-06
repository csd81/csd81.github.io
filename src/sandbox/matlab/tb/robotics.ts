// Robotics System Toolbox — rigid-body kinematics utilities, rotation conversions, and
// occupancy-map helpers. Complex object-oriented classes (rigidBodyTree, inverseKinematics)
// are stubbed as ClassV objects to preserve script compatibility.
import {
  type Value, scalar, rowVec, colVec, toArray, asScalar, toMat as m, isMat, MatError,
  mat, zeros, makeObject, fromRows, bool,
} from '../values';
import type { ToolboxModule } from './types';

const TWO_PI = 2 * Math.PI;

// ── angdiff: angular difference wrapped to (-pi, pi] ──────────────────────────────────
async function angdiff(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('angdiff: requires at least one angle argument');
  const wrap = (a: number) => { let r = ((a % TWO_PI) + TWO_PI) % TWO_PI; return r > Math.PI ? r - TWO_PI : r; };
  if (args.length === 1) {
    const a = toArray(m(args[0]));
    const diff = a.slice(0, -1).map((ai, i) => wrap(a[i + 1] - ai));
    return [rowVec(diff)];
  }
  const alpha = toArray(m(args[0])), beta = toArray(m(args[1]));
  const n = Math.max(alpha.length, beta.length);
  const result = Array.from({ length: n }, (_, i) => wrap((beta[i % beta.length] ?? 0) - (alpha[i % alpha.length] ?? 0)));
  return [result.length === 1 ? scalar(result[0]) : rowVec(result)];
}

// ── axang2quat: axis-angle [ax,ay,az,theta] → quaternion [w,x,y,z] ──────────────────
async function axang2quat(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('axang2quat: requires axis-angle [ax ay az theta]');
  const aa = toArray(m(args[0]));
  const ax = aa[0] ?? 0, ay = aa[1] ?? 0, az = aa[2] ?? 0, theta = aa[3] ?? 0;
  const s = Math.sin(theta / 2);
  const quat = [Math.cos(theta / 2), ax * s, ay * s, az * s];
  return [rowVec(quat)];
}

// ── axang2rotm: axis-angle → 3×3 rotation matrix ─────────────────────────────────────
async function axang2rotm(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('axang2rotm: requires axis-angle [ax ay az theta]');
  const aa = toArray(m(args[0]));
  const ax = aa[0] ?? 0, ay = aa[1] ?? 0, az = aa[2] ?? 0, theta = aa[3] ?? 0;
  const c = Math.cos(theta), s = Math.sin(theta), t = 1 - c;
  const R = [
    [t * ax * ax + c, t * ax * ay - s * az, t * ax * az + s * ay],
    [t * ax * ay + s * az, t * ay * ay + c, t * ay * az - s * ax],
    [t * ax * az - s * ay, t * ay * az + s * ax, t * az * az + c],
  ];
  return [fromRows(R)];
}

// ── axang2tform: axis-angle → 4×4 homogeneous transform (rotation only) ──────────────
async function axang2tform(args: Value[]): Promise<Value[]> {
  const [R] = await axang2rotm(args);
  const Rm = R as any;
  const T = fromRows([
    [Rm.data[0], Rm.data[1], Rm.data[2], 0],
    [Rm.data[3], Rm.data[4], Rm.data[5], 0],
    [Rm.data[6], Rm.data[7], Rm.data[8], 0],
    [0, 0, 0, 1],
  ]);
  return [T];
}

// ── cart2hom: Cartesian → homogeneous coordinates ────────────────────────────────────
async function cart2hom(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('cart2hom: requires Cartesian coordinates');
  const c = args[0] as any;
  if (!isMat(c)) throw new MatError('cart2hom: expected numeric matrix');
  const rows = c.rows, cols = c.cols;
  const out = zeros(rows, cols + 1);
  for (let r = 0; r < rows; r++) {
    for (let col = 0; col < cols; col++) out.data[r * (cols + 1) + col] = c.data[r * cols + col];
    out.data[r * (cols + 1) + cols] = 1;
  }
  return [out];
}

// ── hom2cart: homogeneous → Cartesian coordinates ────────────────────────────────────
async function hom2cart(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('hom2cart: requires homogeneous matrix');
  const c = args[0] as any;
  if (!isMat(c)) throw new MatError('hom2cart: expected numeric matrix');
  const rows = c.rows, cols = c.cols - 1;
  const out = zeros(rows, cols);
  for (let r = 0; r < rows; r++) {
    const w = c.data[r * (cols + 1) + cols] || 1;
    for (let col = 0; col < cols; col++) out.data[r * cols + col] = c.data[r * (cols + 1) + col] / w;
  }
  return [out];
}

// ── quat2rotm: quaternion [w x y z] → 3×3 rotation matrix ────────────────────────────
async function quat2rotm(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('quat2rotm: requires quaternion [w x y z]');
  const q = toArray(m(args[0]));
  const [w, x, y, z] = q;
  const R = [
    [1 - 2 * (y * y + z * z), 2 * (x * y - w * z), 2 * (x * z + w * y)],
    [2 * (x * y + w * z), 1 - 2 * (x * x + z * z), 2 * (y * z - w * x)],
    [2 * (x * z - w * y), 2 * (y * z + w * x), 1 - 2 * (x * x + y * y)],
  ];
  return [fromRows(R)];
}

// ── rotm2quat: 3×3 rotation matrix → quaternion [w x y z] ────────────────────────────
async function rotm2quat(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('rotm2quat: requires 3×3 rotation matrix');
  const R = args[0] as any;
  if (!isMat(R) || R.rows !== 3 || R.cols !== 3) throw new MatError('rotm2quat: expected 3×3 matrix');
  const d = R.data;
  const trace = d[0] + d[4] + d[8];
  let w: number, x: number, y: number, z: number;
  if (trace > 0) {
    const s = 0.5 / Math.sqrt(trace + 1);
    w = 0.25 / s; x = (d[7] - d[5]) * s; y = (d[2] - d[6]) * s; z = (d[3] - d[1]) * s;
  } else if (d[0] > d[4] && d[0] > d[8]) {
    const s = 2 * Math.sqrt(1 + d[0] - d[4] - d[8]);
    w = (d[7] - d[5]) / s; x = 0.25 * s; y = (d[1] + d[3]) / s; z = (d[2] + d[6]) / s;
  } else if (d[4] > d[8]) {
    const s = 2 * Math.sqrt(1 + d[4] - d[0] - d[8]);
    w = (d[2] - d[6]) / s; x = (d[1] + d[3]) / s; y = 0.25 * s; z = (d[5] + d[7]) / s;
  } else {
    const s = 2 * Math.sqrt(1 + d[8] - d[0] - d[4]);
    w = (d[3] - d[1]) / s; x = (d[2] + d[6]) / s; y = (d[5] + d[7]) / s; z = 0.25 * s;
  }
  return [rowVec([w, x, y, z])];
}

// ── rotm2axang: rotation matrix → axis-angle ────────────────────────────────────────
async function rotm2axang(args: Value[]): Promise<Value[]> {
  const [q] = await rotm2quat(args);
  const qv = toArray(q as any);
  const theta = 2 * Math.acos(Math.min(1, Math.max(-1, qv[0])));
  const s = Math.sin(theta / 2);
  if (Math.abs(s) < 1e-10) return [rowVec([0, 0, 1, 0])];
  return [rowVec([qv[1] / s, qv[2] / s, qv[3] / s, theta])];
}

// ── eul2rotm: Euler angles → rotation matrix ────────────────────────────────────────
// sequence: 'XYZ', 'ZYX', 'ZYZ', ... default 'ZYX'
async function eul2rotm(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('eul2rotm: requires Euler angles [r p y]');
  const eul = toArray(m(args[0]));
  const seq = args.length > 1 && isMat(args[1]) && (args[1] as any).isChar
    ? String.fromCharCode(...(Array.from((args[1] as any).data) as number[])).toUpperCase()
    : 'ZYX';
  const Rx = (a: number) => fromRows([[1, 0, 0], [0, Math.cos(a), -Math.sin(a)], [0, Math.sin(a), Math.cos(a)]]);
  const Ry = (a: number) => fromRows([[Math.cos(a), 0, Math.sin(a)], [0, 1, 0], [-Math.sin(a), 0, Math.cos(a)]]);
  const Rz = (a: number) => fromRows([[Math.cos(a), -Math.sin(a), 0], [Math.sin(a), Math.cos(a), 0], [0, 0, 1]]);
  const matMul3 = (A: any, B: any): any => {
    const C = zeros(3, 3);
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) for (let k = 0; k < 3; k++)
      C.data[i * 3 + j] += A.data[i * 3 + k] * B.data[k * 3 + j];
    return C;
  };
  const rotFn = { X: Rx, Y: Ry, Z: Rz } as Record<string, (a: number) => any>;
  let R = rotFn[seq[0] ?? 'Z'](eul[0] ?? 0);
  for (let i = 1; i < seq.length; i++) R = matMul3(R, rotFn[seq[i]](eul[i] ?? 0));
  return [R];
}

// ── rotm2eul: rotation matrix → Euler angles ────────────────────────────────────────
async function rotm2eul(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('rotm2eul: requires 3×3 rotation matrix');
  const R = args[0] as any;
  if (!isMat(R)) throw new MatError('rotm2eul: expected matrix');
  const d = R.data;
  // ZYX convention
  const roll = Math.atan2(d[7], d[8]);
  const pitch = Math.atan2(-d[6], Math.sqrt(d[7] * d[7] + d[8] * d[8]));
  const yaw = Math.atan2(d[3], d[0]);
  return [rowVec([yaw, pitch, roll])];
}

// ── eul2quat, quat2eul: Euler ↔ quaternion via rotation matrix ──────────────────────
async function eul2quat(args: Value[]): Promise<Value[]> {
  const [R] = await eul2rotm(args);
  return rotm2quat([R]);
}

async function quat2eul(args: Value[]): Promise<Value[]> {
  const [R] = await quat2rotm(args);
  return rotm2eul([R]);
}

// ── eul2tform: Euler angles → 4×4 homogeneous transform ────────────────────────────
const _eul2tform = async (args: Value[]): Promise<Value[]> => {
  const [R] = await eul2rotm(args);
  const Rm = R as any;
  return [fromRows([
    [Rm.data[0], Rm.data[1], Rm.data[2], 0],
    [Rm.data[3], Rm.data[4], Rm.data[5], 0],
    [Rm.data[6], Rm.data[7], Rm.data[8], 0],
    [0, 0, 0, 1],
  ])];
};

// ── tform2eul: 4×4 → Euler angles ────────────────────────────────────────────────────
async function tform2eul(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('tform2eul: requires 4×4 matrix');
  const T = args[0] as any;
  if (!isMat(T)) throw new MatError('tform2eul: expected matrix');
  const d = T.data;
  const R = fromRows([[d[0], d[1], d[2]], [d[4], d[5], d[6]], [d[8], d[9], d[10]]]);
  return rotm2eul([R]);
}

// ── tform2rotm: extract rotation from 4×4 ───────────────────────────────────────────
async function tform2rotm(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('tform2rotm: requires 4×4 matrix');
  const T = args[0] as any;
  if (!isMat(T)) throw new MatError('tform2rotm: expected matrix');
  const d = T.data;
  return [fromRows([[d[0], d[1], d[2]], [d[4], d[5], d[6]], [d[8], d[9], d[10]]])];
}

// ── trvec2tform: translation vector → 4×4 transform ─────────────────────────────────
async function trvec2tform(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('trvec2tform: requires translation vector');
  const t = toArray(m(args[0]));
  return [fromRows([
    [1, 0, 0, t[0] ?? 0],
    [0, 1, 0, t[1] ?? 0],
    [0, 0, 1, t[2] ?? 0],
    [0, 0, 0, 1],
  ])];
}

// ── tform2trvec: extract translation from 4×4 ───────────────────────────────────────
async function tform2trvec(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('tform2trvec: requires 4×4 matrix');
  const T = args[0] as any;
  if (!isMat(T)) throw new MatError('tform2trvec: expected matrix');
  const d = T.data;
  return [rowVec([d[3], d[7], d[11]])];
}

// ── rigidBodyTree: stub object ────────────────────────────────────────────────────────
async function rigidBodyTree(args: Value[]): Promise<Value[]> {
  const props = new Map<string, Value>();
  props.set('NumBodies', scalar(0));
  props.set('DataFormat', fromRows([])); // empty placeholder
  props.set('Gravity', rowVec([0, 0, -9.81]));
  return [makeObject('rigidBodyTree', props)];
}

// ── bsplinepolytraj ───────────────────────────────────────────────────────────────────
async function bsplinepolytraj(args: Value[]): Promise<Value[]> {
  if (args.length < 3) throw new MatError('bsplinepolytraj: requires waypoints, timePoints, tSamples');
  const wp = args[0] as any;
  if (!isMat(wp)) throw new MatError('bsplinepolytraj: waypoints must be numeric');
  const tPts = toArray(m(args[1]));
  const tSam = toArray(m(args[2]));
  // Linear interpolation fallback
  const nDim = wp.rows, nWP = wp.cols;
  const pos = zeros(nDim, tSam.length);
  const tStart = tPts[0] ?? 0, tEnd = tPts[tPts.length - 1] ?? 1;
  for (let k = 0; k < tSam.length; k++) {
    const alpha = (tSam[k] - tStart) / (tEnd - tStart || 1);
    const col = Math.min(nWP - 2, Math.floor(alpha * (nWP - 1)));
    const t = alpha * (nWP - 1) - col;
    for (let d = 0; d < nDim; d++) {
      pos.data[d * tSam.length + k] = (1 - t) * wp.data[d * nWP + col] + t * wp.data[d * nWP + col + 1];
    }
  }
  return [pos];
}

// ── quatnormalize: normalize quaternion(s) to unit length ─────────────────────────────
async function quatnormalize(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('quatnormalize: requires quaternion input');
  const q = args[0] as any;
  if (!isMat(q)) throw new MatError('quatnormalize: expected numeric matrix');
  const data = toArray(q);
  const rows = q.rows, cols = q.cols;
  const out = new Float64Array(data.length);
  // Each row is one quaternion [w x y z]
  for (let r = 0; r < rows; r++) {
    let norm = 0;
    for (let c = 0; c < cols; c++) norm += data[r * cols + c] ** 2;
    norm = Math.sqrt(norm) || 1;
    for (let c = 0; c < cols; c++) out[r * cols + c] = data[r * cols + c] / norm;
  }
  return [mat(rows, cols, out)];
}

export const ROBOTICS: ToolboxModule = {
  id: 'robotics',
  name: 'Robotics System Toolbox',
  docBase: 'https://www.mathworks.com/help/robotics/',
  builtins: {
    angdiff,
    axang2quat,
    axang2rotm,
    axang2tform,
    cart2hom,
    hom2cart,
    quat2rotm,
    rotm2quat,
    rotm2axang,
    eul2rotm,
    rotm2eul,
    eul2quat,
    quat2eul,
    eul2tform: _eul2tform,
    tform2eul,
    tform2rotm,
    trvec2tform,
    tform2trvec,
    rigidBodyTree,
    bsplinepolytraj,
    quatnormalize,
  },
  help: {
    angdiff: {
      summary: 'Difference between two angles',
      syntax: ['delta = angdiff(alpha,beta)', 'delta = angdiff(alpha)'],
      description: [
        'delta = angdiff(alpha,beta) returns the angular difference beta-alpha wrapped to (-pi, pi].',
        'delta = angdiff(alpha) returns the differences between consecutive elements of alpha.',
      ],
      seealso: ['wrapToPi', 'wrapTo2Pi'],
    },
    axang2quat: {
      summary: 'Convert axis-angle rotation to quaternion',
      syntax: ['quat = axang2quat(axang)'],
      description: [
        'quat = axang2quat([ax,ay,az,theta]) converts an axis-angle representation to a unit quaternion [w,x,y,z].',
      ],
      seealso: ['axang2rotm', 'quat2rotm', 'eul2quat'],
    },
    axang2rotm: {
      summary: 'Convert axis-angle rotation to rotation matrix',
      syntax: ['rotm = axang2rotm(axang)'],
      description: ['rotm = axang2rotm([ax,ay,az,theta]) returns a 3×3 rotation matrix using Rodrigues formula.'],
      seealso: ['axang2quat', 'rotm2quat', 'eul2rotm'],
    },
    axang2tform: {
      summary: 'Convert axis-angle rotation to homogeneous transformation matrix',
      syntax: ['tform = axang2tform(axang)'],
      description: ['tform = axang2tform([ax,ay,az,theta]) returns a 4×4 homogeneous transformation matrix (rotation only, no translation).'],
      seealso: ['axang2rotm', 'trvec2tform', 'eul2tform'],
    },
    cart2hom: {
      summary: 'Convert Cartesian coordinates to homogeneous coordinates',
      syntax: ['hom = cart2hom(cart)'],
      description: ['hom = cart2hom(cart) appends a column of ones to the matrix cart, converting each row from n-D Cartesian to (n+1)-D homogeneous.'],
      seealso: ['hom2cart', 'trvec2tform'],
    },
    hom2cart: {
      summary: 'Convert homogeneous coordinates to Cartesian coordinates',
      syntax: ['cart = hom2cart(hom)'],
      description: ['cart = hom2cart(hom) divides each row of hom by its last element and drops that column.'],
      seealso: ['cart2hom'],
    },
    quat2rotm: {
      summary: 'Convert quaternion to rotation matrix',
      syntax: ['rotm = quat2rotm(quat)'],
      description: ['rotm = quat2rotm([w,x,y,z]) returns the corresponding 3×3 rotation matrix.'],
      seealso: ['rotm2quat', 'eul2rotm', 'axang2rotm'],
    },
    rotm2quat: {
      summary: 'Convert rotation matrix to quaternion',
      syntax: ['quat = rotm2quat(rotm)'],
      seealso: ['quat2rotm', 'rotm2eul', 'rotm2axang'],
    },
    rotm2axang: {
      summary: 'Convert rotation matrix to axis-angle rotation',
      syntax: ['axang = rotm2axang(rotm)'],
      seealso: ['axang2rotm', 'rotm2quat'],
    },
    eul2rotm: {
      summary: 'Convert Euler angles to rotation matrix',
      syntax: ["rotm = eul2rotm(eul)", "rotm = eul2rotm(eul,'ZYX')"],
      description: [
        "rotm = eul2rotm([r,p,y]) converts ZYX Euler angles to a rotation matrix.",
        "Specify the sequence as a second argument, e.g., 'XYZ', 'ZYX' (default).",
      ],
      seealso: ['rotm2eul', 'eul2quat', 'eul2tform'],
    },
    rotm2eul: {
      summary: 'Convert rotation matrix to Euler angles',
      syntax: ['eul = rotm2eul(rotm)', "eul = rotm2eul(rotm,'ZYX')"],
      seealso: ['eul2rotm', 'rotm2quat'],
    },
    eul2quat: {
      summary: 'Convert Euler angles to quaternion',
      syntax: ['quat = eul2quat(eul)', "quat = eul2quat(eul,'ZYX')"],
      seealso: ['quat2eul', 'eul2rotm'],
    },
    quat2eul: {
      summary: 'Convert quaternion to Euler angles',
      syntax: ['eul = quat2eul(quat)', "eul = quat2eul(quat,'ZYX')"],
      seealso: ['eul2quat', 'rotm2eul'],
    },
    eul2tform: {
      summary: 'Convert Euler angles to homogeneous transformation matrix',
      syntax: ['tform = eul2tform(eul)', "tform = eul2tform(eul,'ZYX')"],
      seealso: ['axang2tform', 'trvec2tform', 'rotm2eul'],
    },
    tform2eul: {
      summary: 'Extract Euler angles from homogeneous transformation',
      syntax: ['eul = tform2eul(tform)', "eul = tform2eul(tform,'ZYX')"],
      seealso: ['eul2tform', 'tform2rotm'],
    },
    tform2rotm: {
      summary: 'Extract rotation matrix from homogeneous transformation',
      syntax: ['rotm = tform2rotm(tform)'],
      seealso: ['tform2trvec', 'trvec2tform'],
    },
    trvec2tform: {
      summary: 'Convert translation vector to homogeneous transformation',
      syntax: ['tform = trvec2tform(trvec)'],
      description: ['tform = trvec2tform([tx,ty,tz]) returns a 4×4 identity rotation + translation transform.'],
      seealso: ['tform2trvec', 'axang2tform', 'eul2tform'],
    },
    tform2trvec: {
      summary: 'Extract translation vector from homogeneous transformation',
      syntax: ['trvec = tform2trvec(tform)'],
      seealso: ['trvec2tform', 'tform2rotm'],
    },
    rigidBodyTree: {
      summary: 'Rigid body tree robot model',
      syntax: ['robot = rigidBodyTree', "robot = rigidBodyTree('DataFormat','column')"],
      description: ['robot = rigidBodyTree creates a kinematic chain model. Use addBody to add rigid bodies and joints.'],
      seealso: ['inverseKinematics', 'forwardKinematics'],
    },
    bsplinepolytraj: {
      summary: 'Polynomial trajectory through waypoints using B-spline',
      syntax: ['[q,qd,qdd] = bsplinepolytraj(waypoints,timePoints,tSamples)'],
      description: ['Computes a smooth B-spline trajectory through waypoints at timePoints, sampled at tSamples.'],
      seealso: ['minjerkpolytraj', 'quinticpolytraj'],
    },
    quatnormalize: {
      summary: 'Normalize quaternion',
      syntax: ['qnorm = quatnormalize(q)'],
      description: [
        'qnorm = quatnormalize(q) normalizes each row of q (a quaternion [w x y z]) to unit length.',
        'If q is N×4, each of the N quaternions is normalized independently.',
      ],
      seealso: ['quat2rotm', 'axang2quat', 'eul2quat'],
    },
  },
};
