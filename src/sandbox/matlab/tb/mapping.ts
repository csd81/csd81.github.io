// Mapping Toolbox — computable geographic unit conversions (great-circle arc length on a sphere
// of mean Earth radius 6371 km). Validated against the live Mapping Toolbox.
import type { Builtin } from '../builtins';
import { type Value, map, toMat as m } from '../values';
import type { ToolboxModule } from './types';

const ret = (v: Value): Promise<Value[]> => Promise.resolve([v]);
const R = 6371;   // mean Earth radius, km (MATLAB default sphere)
const D2R = Math.PI / 180, R2D = 180 / Math.PI;

export const MAPPING: ToolboxModule = {
  id: 'map',
  name: 'Mapping Toolbox',
  docBase: 'https://www.mathworks.com/help/map/ref/',
  builtins: {
    km2rad: (a) => ret(map(m(a[0]), (km) => km / R)),
    rad2km: (a) => ret(map(m(a[0]), (rad) => rad * R)),
    deg2km: (a) => ret(map(m(a[0]), (deg) => deg * D2R * R)),
    km2deg: (a) => ret(map(m(a[0]), (km) => (km / R) * R2D)),
    deg2nm: (a) => ret(map(m(a[0]), (deg) => deg * 60)),   // 1° = 60 nautical miles (arcminutes)
  },
  help: {
    km2rad: 'Convert distance from kilometers to radians', rad2km: 'Convert distance from radians to kilometers',
    deg2km: 'Convert distance from degrees to kilometers', km2deg: 'Convert distance from kilometers to degrees',
    deg2nm: 'Convert distance from degrees to nautical miles',
  },
};
