// Simulink — hooks the headless execution engine (../simulink_engine.ts, a consolidated
// single-file module) into the MATLAB runtime as a ToolboxModule.
// Maps new_system/add_block/add_line/set_param/get_param/sim to builtins; sim returns a
// Simulink.SimulationOutput object (generic ClassV) with .tout/.yout. See plan §2 / handoff.
import type { Builtin } from '../builtins';
import {
  type Value, type Mat, isMat, isStr, asString, asScalar, scalar, colVec, rowVec, str,
  makeObject, toArray, toMat as m,
} from '../values';
import type { ToolboxModule } from './types';
import {
  new_system as engNewSystem, add_block as engAddBlock, add_line as engAddLine,
  set_param as engSetParam, get_param as engGetParam, sim as engSim,
} from '../simulink_engine';

const ret = (v: Value): Promise<Value[]> => Promise.resolve([v]);

/** Convert a MATLAB argument to the plain JS value the engine expects (Number()-coercible). */
function toEngineValue(v: Value): unknown {
  if (isStr(v) || (isMat(v) && (v as Mat).isChar)) return asString(v);
  if (isMat(v)) { const M = v as Mat; if (M.rows * M.cols === 1) return M.data[0]; return toArray(M); }
  return asString(v);
}
/** Convert an engine-returned value back to a MATLAB Value. */
function fromEngineValue(v: unknown): Value {
  if (typeof v === 'number') return scalar(v);
  if (typeof v === 'string') return str(v);
  if (Array.isArray(v) && v.every((x) => typeof x === 'number')) return rowVec(v as number[]);
  return str(String(v));
}
/** Build an N×M Mat from a row-major number[][]. */
function matFromRows(rows: number[][]): Mat {
  const N = rows.length, M = N ? Math.max(...rows.map((r) => r.length)) : 0;
  const out = { kind: 'num' as const, rows: N, cols: M, data: new Float64Array(N * M) };
  for (let r = 0; r < N; r++) for (let c = 0; c < (rows[r]?.length ?? 0); c++) out.data[r + c * N] = rows[r][c];
  return out as Mat;
}
/** Parse sim options from MATLAB args: sim(name) | sim(name,tf) | sim(name,[t0 tf]) |
 *  sim(name,'StopTime',tf,'StartTime',t0,'FixedStep',dt). */
function parseSimOptions(a: Value[]): { t0?: number; tf?: number; stepSize?: number } {
  const o: { t0?: number; tf?: number; stepSize?: number } = {};
  if (a.length === 2 && isMat(a[1]) && !(a[1] as Mat).isChar) {
    const v = toArray(m(a[1])); if (v.length === 1) o.tf = v[0]; else if (v.length >= 2) { o.t0 = v[0]; o.tf = v[1]; }
    return o;
  }
  for (let i = 1; i + 1 < a.length; i += 2) {
    const k = asString(a[i]).toLowerCase(); const val = asScalar(a[i + 1]);
    if (k === 'stoptime') o.tf = val; else if (k === 'starttime') o.t0 = val; else if (k === 'fixedstep' || k === 'maxstep') o.stepSize = val;
  }
  return o;
}

export const SIMULINK: ToolboxModule = {
  id: 'simulink',
  name: 'Simulink',
  docBase: 'https://www.mathworks.com/help/simulink/slref/',
  builtins: {
    new_system: (a) => { engNewSystem(asString(a[0])); return ret(str(asString(a[0]))); },
    add_block: (a) => { engAddBlock(asString(a[0]), asString(a[1])); return Promise.resolve([]); },
    add_line: (a) => { engAddLine(asString(a[0]), asString(a[1]), asString(a[2])); return Promise.resolve([]); },
    set_param: (a) => {
      const path = asString(a[0]);
      for (let i = 1; i + 1 < a.length; i += 2) engSetParam(path, asString(a[i]), toEngineValue(a[i + 1]));
      return Promise.resolve([]);
    },
    get_param: (a) => ret(fromEngineValue(engGetParam(asString(a[0]), asString(a[1])))),
    sim: (a, nargout) => {
      const name = asString(a[0]); const res = engSim(name, parseSimOptions(a));
      const tout = colVec(res.tout); const yout = matFromRows(res.yout);
      if (nargout >= 2) return Promise.resolve([tout, yout]);   // [t,y] = sim(...)
      // default: a Simulink.SimulationOutput object exposing .tout / .yout
      return ret(makeObject('Simulink.SimulationOutput', new Map<string, Value>([['tout', tout], ['yout', yout]])));
    },
  },
  help: {
    new_system: { summary: 'Create a new Simulink model in memory', syntax: ["new_system('modelname')"], seealso: ['open_system', 'save_system', 'add_block'] },
    add_block: { summary: 'Add a block to a Simulink model', syntax: ["add_block('srcblock','dstblock')"], seealso: ['add_line', 'set_param', 'new_system'] },
    add_line: { summary: 'Connect block ports with a signal line', syntax: ["add_line('model','srcblock/port','dstblock/port')"], seealso: ['add_block', 'delete_line', 'set_param'] },
    set_param: { summary: 'Set a block or model parameter', syntax: ["set_param('obj','param',value)"], description: ["set_param('model/block','param',value) sets a named parameter on a Simulink block or model, e.g. set_param('model','StopTime','10')."], seealso: ['get_param', 'add_block', 'sim'] },
    get_param: { summary: 'Get a block or model parameter', syntax: ["val = get_param('obj','param')"], seealso: ['set_param', 'add_block'] },
    sim: { summary: 'Simulate a Simulink model', syntax: ["simout = sim('model')", "simout = sim('model',Name,Value)"], description: ["simout = sim('model') runs the Simulink model named 'model' and returns a Simulink.SimulationOutput object containing logged signals.", 'Name-Value options include StopTime, SimulationMode, and SaveOutput.'], seealso: ['set_param', 'get_param', 'new_system'] },
  },
};
