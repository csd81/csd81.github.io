// Navigation Toolbox — ToolboxModule subset
// Functions: lla2ecef, ecef2lla, quatnormalize, lla2ned, lla2enu
// All validated against live MATLAB R2026a.

import type { Builtin } from '../builtins';
import { type Value, type Mat, rowVec, toMat as m, isMat } from '../values';
import type { ToolboxModule } from './types';

const ret = (v: Value): Promise<Value[]> => Promise.resolve([v]);

const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI;

// WGS-84 parameters (MATLAB's referenceEllipsoid('wgs84') convention)
const WGS84_A = 6378137.0;            // semi-major axis (m)
const WGS84_F = 1 / 298.257223563;    // flattening
const WGS84_E2 = WGS84_F * (2 - WGS84_F); // first eccentricity squared

// --- core scalar transforms -------------------------------------------------

function llaToEcef(lat: number, lon: number, alt: number): [number, number, number] {
  const latR = lat * DEG2RAD;
  const lonR = lon * DEG2RAD;
  const sLat = Math.sin(latR), cLat = Math.cos(latR);
  const N = WGS84_A / Math.sqrt(1 - WGS84_E2 * sLat * sLat);
  const x = (N + alt) * cLat * Math.cos(lonR);
  const y = (N + alt) * cLat * Math.sin(lonR);
  const z = (N * (1 - WGS84_E2) + alt) * sLat;
  return [x, y, z];
}

function ecefToLla(x: number, y: number, z: number): [number, number, number] {
  const lon = Math.atan2(y, x);
  const p = Math.hypot(x, y);
  // Iterative latitude (Bowring-style fixed point).
  let lat = Math.atan2(z, p * (1 - WGS84_E2));
  for (let i = 0; i < 12; i++) {
    const sLat = Math.sin(lat);
    const N = WGS84_A / Math.sqrt(1 - WGS84_E2 * sLat * sLat);
    lat = Math.atan2(z + WGS84_E2 * N * sLat, p);
  }
  const sLat = Math.sin(lat);
  const N = WGS84_A / Math.sqrt(1 - WGS84_E2 * sLat * sLat);
  const cLat = Math.cos(lat);
  // Altitude robust near the poles where cos(lat) → 0.
  const alt = Math.abs(cLat) > 1e-12 ? p / cLat - N : z / sLat - N * (1 - WGS84_E2);
  return [lat * RAD2DEG, lon * RAD2DEG, alt];
}

// Rotate an ECEF difference vector into local ENU at origin (lat0,lon0 in deg).
function ecefDiffToEnu(dx: number, dy: number, dz: number, lat0: number, lon0: number): [number, number, number] {
  const latR = lat0 * DEG2RAD, lonR = lon0 * DEG2RAD;
  const sLat = Math.sin(latR), cLat = Math.cos(latR);
  const sLon = Math.sin(lonR), cLon = Math.cos(lonR);
  const e = -sLon * dx + cLon * dy;
  const n = -sLat * cLon * dx - sLat * sLon * dy + cLat * dz;
  const u = cLat * cLon * dx + cLat * sLon * dy + sLat * dz;
  return [e, n, u];
}

// Flat-earth local NED of `lla` relative to `lla0` (MATLAB 'flat' method).
// Uses the meridian/transverse radii of curvature evaluated at the origin latitude.
function llaToNedFlat(lat: number, lon: number, alt: number, lat0: number, lon0: number, alt0: number): [number, number, number] {
  const latR = lat0 * DEG2RAD;
  const sLat = Math.sin(latR), cLat = Math.cos(latR);
  const denom = 1 - WGS84_E2 * sLat * sLat;
  const Rn = WGS84_A / Math.sqrt(denom);            // transverse (prime vertical) radius
  const Rm = (WGS84_A * (1 - WGS84_E2)) / Math.pow(denom, 1.5); // meridian radius
  const dLat = (lat - lat0) * DEG2RAD;
  const dLon = (lon - lon0) * DEG2RAD;
  const north = dLat * Rm;
  const east = dLon * (Rn * cLat);
  const down = -(alt - alt0);
  return [north, east, down];
}

// --- per-row matrix helpers -------------------------------------------------

/** Apply a 3->3 row transform over a 1x3 row or Nx3 matrix, preserving shape. */
function map3(mat: Mat, fn: (a: number, b: number, c: number) => [number, number, number]): Mat {
  const { rows, cols } = mat;
  if (cols !== 3) throw new Error('expected an N-by-3 matrix (or 3-element row vector)');
  const out = new Float64Array(rows * 3);
  for (let r = 0; r < rows; r++) {
    const a = mat.data[r + 0 * rows];
    const b = mat.data[r + 1 * rows];
    const c = mat.data[r + 2 * rows];
    const [o0, o1, o2] = fn(a, b, c);
    out[r + 0 * rows] = o0;
    out[r + 1 * rows] = o1;
    out[r + 2 * rows] = o2;
  }
  return { kind: 'num', rows, cols: 3, data: out };
}

/** Broadcast a 1x3 origin row or per-row Nx3 origins against the data shape. */
function originRow(mat: Mat, r: number): [number, number, number] {
  const { rows } = mat;
  const idx = mat.rows === 1 ? 0 : r;
  return [
    mat.data[idx + 0 * rows],
    mat.data[idx + 1 * rows],
    mat.data[idx + 2 * rows],
  ];
}

function lla2localImpl(args: Value[], output: 'ned' | 'enu'): Mat {
  const lla = m(args[0], 'lla');
  const lla0 = m(args[1], 'lla0');
  if (lla.cols !== 3 || lla0.cols !== 3) throw new Error('lla and lla0 must be N-by-3');
  let method = 'ellipsoid';
  if (args.length >= 3) {
    const mv = args[2];
    if (isMat(mv) && mv.isChar) method = String.fromCharCode(...Array.from(mv.data)).toLowerCase();
  }
  const rows = lla.rows;
  const out = new Float64Array(rows * 3);
  for (let r = 0; r < rows; r++) {
    const lat = lla.data[r + 0 * rows];
    const lon = lla.data[r + 1 * rows];
    const alt = lla.data[r + 2 * rows];
    const [lat0, lon0, alt0] = originRow(lla0, r);
    let ned: [number, number, number];
    if (method === 'flat') {
      ned = llaToNedFlat(lat, lon, alt, lat0, lon0, alt0);
    } else {
      const [x, y, z] = llaToEcef(lat, lon, alt);
      const [x0, y0, z0] = llaToEcef(lat0, lon0, alt0);
      const [e, n, u] = ecefDiffToEnu(x - x0, y - y0, z - z0, lat0, lon0);
      ned = [n, e, -u];
    }
    let o0: number, o1: number, o2: number;
    if (output === 'ned') { [o0, o1, o2] = ned; }
    else { o0 = ned[1]; o1 = ned[0]; o2 = -ned[2]; } // ENU = (east, north, up)
    out[r + 0 * rows] = o0;
    out[r + 1 * rows] = o1;
    out[r + 2 * rows] = o2;
  }
  return { kind: 'num', rows, cols: 3, data: out };
}

function quatnormalizeImpl(args: Value[]): Mat {
  const q = m(args[0], 'quat');
  if (q.cols !== 4) throw new Error('quatnormalize expects an N-by-4 quaternion array');
  const { rows } = q;
  const out = new Float64Array(rows * 4);
  for (let r = 0; r < rows; r++) {
    const a = q.data[r + 0 * rows];
    const b = q.data[r + 1 * rows];
    const c = q.data[r + 2 * rows];
    const d = q.data[r + 3 * rows];
    const nrm = Math.sqrt(a * a + b * b + c * c + d * d);
    out[r + 0 * rows] = a / nrm;
    out[r + 1 * rows] = b / nrm;
    out[r + 2 * rows] = c / nrm;
    out[r + 3 * rows] = d / nrm;
  }
  return { kind: 'num', rows, cols: 4, data: out };
}

export const NAV: ToolboxModule = {
  id: 'nav',
  name: 'Navigation Toolbox',
  docBase: 'https://www.mathworks.com/help/nav/',
  docPath: (name) => `${name}.html`,
  builtins: {
    lla2ecef: ((args: Value[]) => ret(map3(m(args[0], 'lla'), llaToEcef))) as Builtin,
    ecef2lla: ((args: Value[]) => ret(map3(m(args[0], 'ecef'), ecefToLla))) as Builtin,
    quatnormalize: ((args: Value[]) => ret(quatnormalizeImpl(args))) as Builtin,
    lla2ned: ((args: Value[]) => ret(lla2localImpl(args, 'ned'))) as Builtin,
    lla2enu: ((args: Value[]) => ret(lla2localImpl(args, 'enu'))) as Builtin,
  },
  constants: {
    WGS84_A: () => rowVec([WGS84_A]),
    WGS84_F: () => rowVec([WGS84_F]),
  },
  help: {
    lla2ecef: 'Convert geodetic [lat,lon,alt] (deg,deg,m) to ECEF [x,y,z] in m (WGS-84). N-by-3.',
    ecef2lla: 'Convert ECEF [x,y,z] in m to geodetic [lat,lon,alt] (deg,deg,m) (WGS-84). N-by-3.',
    quatnormalize: 'Normalize rows of an N-by-4 quaternion array [qw,qx,qy,qz] to unit length.',
    lla2ned: "Transform geodetic [lat,lon,alt] to local NED relative to origin lla0. lla2ned(lla,lla0,method) with method 'ellipsoid' or 'flat'.",
    lla2enu: "Transform geodetic [lat,lon,alt] to local ENU relative to origin lla0. lla2enu(lla,lla0,method) with method 'ellipsoid' or 'flat'.",
  },
};
