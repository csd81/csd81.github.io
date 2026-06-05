// Mapping Toolbox — computable geographic unit conversions and spherical great-circle geometry.
// Distances on a sphere of mean Earth radius 6371 km; nautical mile = 1852 m, statute mile =
// 1609.3472186944 m (US survey). distance/azimuth/reckon operate in degrees. Validated against
// the live Mapping Toolbox (see mapping.VALIDATION.md). Note deg2nm (=60, definitional) is NOT the
// inverse of nm2deg (=1852/R·180/π) — matching MATLAB's asymmetric arcminute vs. radius behaviour.
import type { Builtin } from '../builtins';
import { type Value, type Mat, map, toMat as m, asScalar, colVec, scalar } from '../values';
import type { ToolboxModule } from './types';

const ret = (v: Value): Promise<Value[]> => Promise.resolve([v]);
const R = 6371;                 // mean Earth radius, km (MATLAB default sphere)
const NM = 1.852;               // km per nautical mile
const SM = 1.6093472186944;     // km per statute (US survey) mile
const D2R = Math.PI / 180, R2D = 180 / Math.PI;
const conv = (f: number): Builtin => (a) => ret(map(m(a[0]), (x) => x * f));

// great-circle helpers (degrees in/out)
function gcDistAz(lat1: number, lon1: number, lat2: number, lon2: number): [number, number] {
  const p1 = lat1 * D2R, p2 = lat2 * D2R, dl = (lon2 - lon1) * D2R;
  const dp = p2 - p1;
  const hav = Math.sin(dp / 2) ** 2 + Math.cos(p1) * Math.cos(p2) * Math.sin(dl / 2) ** 2;
  const arc = 2 * Math.asin(Math.min(1, Math.sqrt(hav))) * R2D;
  let az = Math.atan2(Math.cos(p2) * Math.sin(dl), Math.cos(p1) * Math.sin(p2) - Math.sin(p1) * Math.cos(p2) * Math.cos(dl)) * R2D;
  az = ((az % 360) + 360) % 360;
  return [arc, az];
}
function reckon(lat: number, lon: number, arc: number, az: number): [number, number] {
  const p1 = lat * D2R, d = arc * D2R, t = az * D2R;
  const p2 = Math.asin(Math.sin(p1) * Math.cos(d) + Math.cos(p1) * Math.sin(d) * Math.cos(t));
  const l2 = lon * D2R + Math.atan2(Math.sin(t) * Math.sin(d) * Math.cos(p1), Math.cos(d) - Math.sin(p1) * Math.sin(p2));
  let lon2 = l2 * R2D; lon2 = ((lon2 + 180) % 360 + 360) % 360 - 180;
  return [p2 * R2D, lon2];
}
// angle wrapping (period P): map to [-P/2,P/2] (signed) or [0,P) (positive), keeping the boundary
function wrapSigned(P: number): Builtin {
  return (a) => ret(map(m(a[0]), (x) => { let y = ((x + P / 2) % P + P) % P - P / 2; if (y === -P / 2 && x > 0) y = P / 2; return y; }));
}
function wrapPositive(P: number): Builtin {
  return (a) => ret(map(m(a[0]), (x) => { let y = ((x % P) + P) % P; if (y === 0 && x > 0) y = P; return y; }));
}

export const MAPPING: ToolboxModule = {
  id: 'map',
  name: 'Mapping Toolbox',
  docBase: 'https://www.mathworks.com/help/map/ref/',
  builtins: {
    // distance/radius unit conversions
    km2rad: conv(1 / R), rad2km: conv(R), deg2km: conv(D2R * R), km2deg: conv(R2D / R),
    deg2nm: conv(60), nm2km: conv(NM), km2nm: conv(1 / NM), nm2sm: conv(NM / SM), sm2nm: conv(SM / NM),
    km2sm: conv(1 / SM), sm2km: conv(SM), deg2sm: conv(D2R * R / SM), sm2deg: conv(SM / R * R2D),
    nm2deg: conv(NM / R * R2D), rad2nm: conv(R / NM), nm2rad: conv(NM / R), rad2sm: conv(R / SM), sm2rad: conv(SM / R),
    // spherical geometry
    distance: (a, nargout) => {
      const lat1 = asScalar(a[0]), lon1 = asScalar(a[1]), lat2 = asScalar(a[2]), lon2 = asScalar(a[3]);
      const [arc, az] = gcDistAz(lat1, lon1, lat2, lon2);
      return Promise.resolve(nargout >= 2 ? [scalar(arc), scalar(az)] : [scalar(arc)]);
    },
    azimuth: (a) => ret(scalar(gcDistAz(asScalar(a[0]), asScalar(a[1]), asScalar(a[2]), asScalar(a[3]))[1])),
    reckon: (a, nargout) => {
      const [lat2, lon2] = reckon(asScalar(a[0]), asScalar(a[1]), asScalar(a[2]), asScalar(a[3]));
      return Promise.resolve(nargout >= 2 ? [scalar(lat2), scalar(lon2)] : [scalar(lat2)]);
    },
    departure: (a) => {
      const lon1 = asScalar(a[0]), lon2 = asScalar(a[1]), lat = asScalar(a[2]);
      let dl = ((lon2 - lon1 + 180) % 360 + 360) % 360 - 180;
      return ret(scalar(Math.abs(dl) * Math.cos(lat * D2R)));
    },
    antipode: (a, nargout) => {
      const lat = asScalar(a[0]), lon = asScalar(a[1]);
      let alon = ((lon + 180 + 180) % 360 + 360) % 360 - 180;
      const alat = -lat;
      return Promise.resolve(nargout >= 2 ? [scalar(alat), scalar(alon)] : [colVec([alat, alon])]);
    },
    // angle wrapping
    wrapTo180: wrapSigned(360), wrapTo360: wrapPositive(360),
    wrapToPi: wrapSigned(2 * Math.PI), wrapTo2Pi: wrapPositive(2 * Math.PI),
  },
  help: {
    km2rad: 'Convert distance from kilometers to radians', rad2km: 'Convert distance from radians to kilometers',
    deg2km: 'Convert distance from degrees to kilometers', km2deg: 'Convert distance from kilometers to degrees',
    deg2nm: 'Convert distance from degrees to nautical miles', nm2km: 'Convert distance from nautical miles to kilometers',
    km2nm: 'Convert distance from kilometers to nautical miles', nm2sm: 'Convert distance from nautical to statute miles',
    sm2nm: 'Convert distance from statute to nautical miles', km2sm: 'Convert distance from kilometers to statute miles',
    sm2km: 'Convert distance from statute miles to kilometers', deg2sm: 'Convert distance from degrees to statute miles',
    sm2deg: 'Convert distance from statute miles to degrees', nm2deg: 'Convert distance from nautical miles to degrees',
    rad2nm: 'Convert distance from radians to nautical miles', nm2rad: 'Convert distance from nautical miles to radians',
    rad2sm: 'Convert distance from radians to statute miles', sm2rad: 'Convert distance from statute miles to radians',
    distance: 'Distance between points on sphere or ellipsoid', azimuth: 'Azimuth between points on sphere or ellipsoid',
    reckon: 'Point at specified azimuth, range on sphere or ellipsoid', departure: 'Longitude distance between two meridians at given latitudes',
    antipode: 'Point on opposite side of globe', wrapTo180: 'Wrap angle in degrees to [-180, 180]',
    wrapTo360: 'Wrap angle in degrees to [0, 360]', wrapToPi: 'Wrap angle in radians to [-pi, pi]',
    wrapTo2Pi: 'Wrap angle in radians to [0, 2*pi]',
  },
};
