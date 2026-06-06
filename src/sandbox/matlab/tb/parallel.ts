// Parallel Computing Toolbox — stubs for parfor, spmd, gpuArray, parpool, gcp, etc.
// In the web sandbox, true parallelism is unavailable; these execute sequentially or
// pass through data unchanged, preserving script compatibility.
import {
  type Value, scalar, rowVec, toArray, asScalar, toMat as m, isMat, MatError,
  mat, zeros, makeObject, str, bool,
} from '../values';
import type { ToolboxModule } from './types';

const noop = async (_args: Value[]): Promise<Value[]> => [scalar(0)];

// ── parpool: return a stub parallel pool object ────────────────────────────────────────
async function parpool(args: Value[]): Promise<Value[]> {
  const workers = args.length > 0 && isMat(args[0]) ? asScalar(m(args[0])) : 1;
  const props = new Map<string, Value>();
  props.set('NumWorkers', scalar(workers));
  props.set('SpmdEnabled', bool(false));
  props.set('IdleTimeout', scalar(30));
  props.set('PoolSize', scalar(workers));
  return [makeObject('parallel.Pool', props)];
}

// ── gcp: get current parallel pool (returns empty if none) ────────────────────────────
async function gcp(args: Value[]): Promise<Value[]> {
  const createIfNone = args.length === 0 || asScalar(m(args[0])) !== 0;
  if (!createIfNone) return [makeObject('parallel.Pool', new Map())];
  return parpool([scalar(1)]);
}

// ── gpuarray: pass-through (no GPU in browser) ────────────────────────────────────────
async function gpuArray(args: Value[]): Promise<Value[]> {
  if (args.length === 0) throw new MatError('gpuArray: requires input array');
  return [args[0]]; // return as-is (already a CPU mat)
}

// ── gather: retrieve data from GPU array (no-op) ──────────────────────────────────────
async function gather(args: Value[]): Promise<Value[]> {
  if (args.length === 0) throw new MatError('gather: requires input');
  return [args[0]];
}

// ── isgpuarray: always false in sandbox ──────────────────────────────────────────────
async function isgpuarray(args: Value[]): Promise<Value[]> {
  return [bool(false)];
}

// ── pagefun: apply function to pages of N-D array ────────────────────────────────────
async function pagefun(args: Value[]): Promise<Value[]> {
  if (args.length < 2) throw new MatError('pagefun: requires function and array');
  // No N-D array support yet — return input array unchanged
  return [args[1]];
}

// ── spmd helpers (no-op or pass-through) ─────────────────────────────────────────────
async function spmdindex(_args: Value[]): Promise<Value[]> { return [scalar(1)]; }
async function spmdsize(_args: Value[]): Promise<Value[]> { return [scalar(1)]; }

// ── distributed: pass-through ────────────────────────────────────────────────────────
async function distributed(args: Value[]): Promise<Value[]> {
  if (args.length === 0) throw new MatError('distributed: requires input array');
  return [args[0]];
}

// ── codistributed: pass-through ───────────────────────────────────────────────────────
async function codistributed(args: Value[]): Promise<Value[]> {
  if (args.length === 0) throw new MatError('codistributed: requires input array');
  return [args[0]];
}

// ── batch: submit batch job (returns stub job object) ────────────────────────────────
async function batch(args: Value[]): Promise<Value[]> {
  const props = new Map<string, Value>();
  props.set('State', str('finished'));
  props.set('NumWorkers', scalar(1));
  return [makeObject('parallel.Job', props)];
}

// ── gputimeit: stub timing ────────────────────────────────────────────────────────────
async function gputimeit(args: Value[]): Promise<Value[]> { return [scalar(0)]; }

// ── validategpu: always throws/warns in sandbox ───────────────────────────────────────
async function validategpu(_args: Value[]): Promise<Value[]> { return [scalar(0)]; }

export const PARALLEL: ToolboxModule = {
  id: 'parallel-computing',
  name: 'Parallel Computing Toolbox',
  docBase: 'https://www.mathworks.com/help/parallel-computing/',
  builtins: {
    parpool,
    gcp,
    gpuArray,
    gather,
    isgpuarray,
    pagefun,
    spmdindex,
    spmdsize,
    distributed,
    codistributed,
    batch,
    gputimeit,
    validategpu,
    spmdbarrier: noop,
    spmdbroadcast: async (args) => args.length > 1 ? [args[1]] : [scalar(0)],
    spmdcat: async (args) => args.length > 0 ? [args[0]] : [scalar(0)],
    spmdplus: noop,
    spmdprobe: noop,
    spmdreduce: async (args) => args.length > 0 ? [args[0]] : [scalar(0)],
    spmdsend: noop,
    spmdsendreceive: async (args) => args.length > 0 ? [args[0]] : [scalar(0)],
  },
  help: {
    parpool: {
      summary: 'Create or access parallel pool',
      syntax: ['p = parpool', 'p = parpool(n)', "p = parpool('local',n)"],
      description: [
        'p = parpool(n) opens a parallel pool with n workers.',
        'In the web sandbox, workers=1 and execution is sequential.',
      ],
      seealso: ['gcp', 'delete', 'parfor'],
    },
    gcp: {
      summary: 'Get current parallel pool',
      syntax: ['p = gcp', "p = gcp('nocreate')"],
      description: ['p = gcp returns the current parallel pool, creating one if needed.'],
      seealso: ['parpool', 'delete'],
    },
    gpuArray: {
      summary: 'Create array on GPU',
      syntax: ['A = gpuArray(X)', 'A = gpuArray(n,classname)'],
      description: [
        'A = gpuArray(X) copies X to the GPU.',
        'In the web sandbox, this is a pass-through — the array remains on the CPU.',
      ],
      seealso: ['gather', 'isgpuarray', 'pagefun'],
    },
    gather: {
      summary: 'Retrieve data from GPU array',
      syntax: ['X = gather(A)'],
      description: ['X = gather(A) transfers A from GPU to CPU memory. Pass-through in the web sandbox.'],
      seealso: ['gpuArray', 'isgpuarray'],
    },
    isgpuarray: {
      summary: 'Determine whether input is gpuArray',
      syntax: ['tf = isgpuarray(A)'],
      description: ['tf = isgpuarray(A) returns false in the web sandbox (no GPU available).'],
      seealso: ['gpuArray', 'gather'],
    },
    pagefun: {
      summary: 'Apply function to each page of N-D array',
      syntax: ['B = pagefun(func,A)', 'B = pagefun(func,A1,A2,...)'],
      description: ['B = pagefun(func,A) applies func to each page (3rd-dimension slice) of A.'],
      seealso: ['gpuArray', 'arrayfun'],
    },
    distributed: {
      summary: 'Create distributed array',
      syntax: ['D = distributed(X)'],
      description: ['D = distributed(X) distributes X across parallel workers. Pass-through in the sandbox.'],
      seealso: ['codistributed', 'gather'],
    },
    codistributed: {
      summary: 'Create codistributed array',
      syntax: ['D = codistributed(X)', 'D = codistributed(X,codist)'],
      description: ['D = codistributed(X) creates a codistributed array. Pass-through in the sandbox.'],
      seealso: ['distributed', 'gather'],
    },
    batch: {
      summary: 'Run MATLAB function or script as batch job',
      syntax: ['j = batch(fcn)', "j = batch(fcn,'Workspace',ws)"],
      description: ['j = batch(fcn) submits fcn as a background batch job. Returns a stub job object in the sandbox.'],
      seealso: ['parpool', 'submit', 'wait'],
    },
    spmdindex: {
      summary: 'Index of current worker in spmd block',
      syntax: ['idx = spmdindex'],
      description: ['spmdindex returns 1 in the sandbox (single-worker execution).'],
      seealso: ['spmdsize', 'spmd'],
    },
    spmdsize: {
      summary: 'Number of workers in spmd block',
      syntax: ['n = spmdsize'],
      description: ['spmdsize returns 1 in the sandbox.'],
      seealso: ['spmdindex', 'spmd'],
    },
    gputimeit: {
      summary: 'Time required to run function on GPU',
      syntax: ['t = gputimeit(f)', 't = gputimeit(f,n)'],
      seealso: ['gpuArray', 'timeit'],
    },
    validategpu: {
      summary: 'Validate MATLAB GPU support for current system',
      syntax: ['validategpu'],
      seealso: ['gpuArray', 'gpuDeviceCount'],
    },
  },
};
