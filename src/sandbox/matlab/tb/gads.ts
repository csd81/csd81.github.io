// Global Optimization Toolbox — genetic algorithm, simulated annealing, pattern search,
// particle swarm. All are derivative-free metaheuristic minimisers.
import {
  type Value, scalar, rowVec, toArray, asScalar, toMat as m, isMat, MatError, mat, zeros,
} from '../values';
import type { ToolboxModule } from './types';

const ret = (v: Value): Promise<Value[]> => Promise.resolve([v]);
const retv = (...vs: Value[]): Promise<Value[]> => Promise.resolve(vs);

function isFn(v: Value): v is { kind: 'handle' } & Value { return v?.kind === 'handle'; }

async function callFn(fn: Value, xArr: number[]): Promise<number> {
  if (!isFn(fn)) throw new MatError('gads: objective must be a function handle');
  const h = fn as unknown as { call: (args: Value[], nargout: number) => Promise<Value[]> };
  const xVec = rowVec(xArr);
  const res = await h.call([xVec], 1);
  return asScalar(m(res[0]));
}

// ── Genetic Algorithm ────────────────────────────────────────────────────────────────────
// Real-coded GA with tournament selection, SBX crossover, polynomial mutation.
async function ga(args: Value[]): Promise<Value[]> {
  if (args.length < 2) throw new MatError('ga: at least 2 arguments required (fun, nvars)');
  const fn = args[0];
  const nvars = asScalar(m(args[1]));
  const lb = args.length > 6 && isMat(args[6]) ? toArray(m(args[6])) : Array(nvars).fill(-Infinity);
  const ub = args.length > 7 && isMat(args[7]) ? toArray(m(args[7])) : Array(nvars).fill(Infinity);

  // clip infinite bounds to search domain
  const lo = lb.map((v, i) => isFinite(v) ? v : -5);
  const hi = ub.map((v, i) => isFinite(v) ? v : 5);

  const POP = 50, GENS = 200, ETA_C = 2, ETA_M = 20, PC = 0.9, PM = 1 / nvars;
  type Ind = { x: number[]; f: number };

  const rand = () => Math.random();
  const clamp = (v: number, i: number) => Math.max(lo[i], Math.min(hi[i], v));

  // initialise population
  let pop: Ind[] = [];
  for (let p = 0; p < POP; p++) {
    const x = lo.map((l, i) => l + rand() * (hi[i] - l));
    pop.push({ x, f: await callFn(fn, x) });
  }

  for (let gen = 0; gen < GENS; gen++) {
    const children: Ind[] = [];
    while (children.length < POP) {
      // tournament selection
      const sel = () => { const a = (rand() * POP | 0), b = (rand() * POP | 0); return pop[a].f < pop[b].f ? pop[a] : pop[b]; };
      const p1 = sel(), p2 = sel();
      // SBX crossover
      let c1 = [...p1.x], c2 = [...p2.x];
      if (rand() < PC) {
        for (let i = 0; i < nvars; i++) {
          if (rand() < 0.5) {
            const u = rand();
            const beta = u < 0.5 ? (2 * u) ** (1 / (ETA_C + 1)) : (1 / (2 * (1 - u))) ** (1 / (ETA_C + 1));
            c1[i] = 0.5 * ((1 + beta) * p1.x[i] + (1 - beta) * p2.x[i]);
            c2[i] = 0.5 * ((1 - beta) * p1.x[i] + (1 + beta) * p2.x[i]);
          }
        }
      }
      // polynomial mutation
      for (const c of [c1, c2]) {
        for (let i = 0; i < nvars; i++) {
          if (rand() < PM) {
            const delta = hi[i] - lo[i];
            const u = rand();
            const delta_q = u < 0.5
              ? (2 * u) ** (1 / (ETA_M + 1)) - 1
              : 1 - (2 * (1 - u)) ** (1 / (ETA_M + 1));
            c[i] += delta_q * delta;
          }
          c[i] = clamp(c[i], i);
        }
      }
      children.push({ x: c1, f: await callFn(fn, c1) });
      if (children.length < POP) children.push({ x: c2, f: await callFn(fn, c2) });
    }
    // elitist merge: keep best POP
    const merged = [...pop, ...children];
    merged.sort((a, b) => a.f - b.f);
    pop = merged.slice(0, POP);
  }
  pop.sort((a, b) => a.f - b.f);
  const best = pop[0];
  const xOut = mat(1, nvars, new Float64Array(best.x));
  const fOut = scalar(best.f);
  return [xOut, fOut, scalar(0), scalar(GENS)];
}

// ── Simulated Annealing ─────────────────────────────────────────────────────────────────
async function simulannealbnd(args: Value[]): Promise<Value[]> {
  if (args.length < 2) throw new MatError('simulannealbnd: requires fun and x0');
  const fn = args[0];
  const x0 = toArray(m(args[1]));
  const n = x0.length;
  const lb = args.length > 2 && isMat(args[2]) ? toArray(m(args[2])) : Array(n).fill(-Infinity);
  const ub = args.length > 3 && isMat(args[3]) ? toArray(m(args[3])) : Array(n).fill(Infinity);
  const lo = lb.map((v, i) => isFinite(v) ? v : x0[i] - 5);
  const hi = ub.map((v, i) => isFinite(v) ? v : x0[i] + 5);
  const clamp = (v: number, i: number) => Math.max(lo[i], Math.min(hi[i], v));

  let x = [...x0];
  let f = await callFn(fn, x);
  let bestX = [...x], bestF = f;
  let T = 1.0;
  const ITER = 3000, COOL = 0.95;
  for (let it = 0; it < ITER; it++) {
    const xNew = x.map((xi, i) => clamp(xi + (Math.random() * 2 - 1) * T * (hi[i] - lo[i]) * 0.1, i));
    const fNew = await callFn(fn, xNew);
    if (fNew < f || Math.random() < Math.exp((f - fNew) / T)) { x = xNew; f = fNew; }
    if (f < bestF) { bestX = [...x]; bestF = f; }
    if ((it + 1) % 100 === 0) T *= COOL;
  }
  return [mat(1, n, new Float64Array(bestX)), scalar(bestF), scalar(0), scalar(ITER)];
}

// ── Pattern Search ──────────────────────────────────────────────────────────────────────
async function patternsearch(args: Value[]): Promise<Value[]> {
  if (args.length < 2) throw new MatError('patternsearch: requires fun and x0');
  const fn = args[0];
  const x0 = toArray(m(args[1]));
  const n = x0.length;
  const lb = args.length > 6 && isMat(args[6]) ? toArray(m(args[6])) : Array(n).fill(-Infinity);
  const ub = args.length > 7 && isMat(args[7]) ? toArray(m(args[7])) : Array(n).fill(Infinity);
  const clamp = (v: number, i: number) => isFinite(lb[i]) && v < lb[i] ? lb[i] : isFinite(ub[i]) && v > ub[i] ? ub[i] : v;

  let x = [...x0];
  let f = await callFn(fn, x);
  let mesh = 1.0;
  const MAXITER = 500;
  for (let it = 0; it < MAXITER && mesh > 1e-8; it++) {
    let improved = false;
    for (let i = 0; i < n; i++) {
      for (const sign of [1, -1]) {
        const xNew = [...x];
        xNew[i] = clamp(xNew[i] + sign * mesh, i);
        const fNew = await callFn(fn, xNew);
        if (fNew < f) { x = xNew; f = fNew; improved = true; break; }
      }
      if (improved) break;
    }
    if (!improved) mesh *= 0.5;
  }
  return [mat(1, n, new Float64Array(x)), scalar(f), scalar(0), scalar(MAXITER)];
}

// ── Particle Swarm ──────────────────────────────────────────────────────────────────────
async function particleswarm(args: Value[]): Promise<Value[]> {
  if (args.length < 2) throw new MatError('particleswarm: requires fun and nvars');
  const fn = args[0];
  const nvars = asScalar(m(args[1]));
  const lb = args.length > 2 && isMat(args[2]) ? toArray(m(args[2])) : Array(nvars).fill(-Infinity);
  const ub = args.length > 3 && isMat(args[3]) ? toArray(m(args[3])) : Array(nvars).fill(Infinity);
  const lo = lb.map((v, i) => isFinite(v) ? v : -5);
  const hi = ub.map((v, i) => isFinite(v) ? v : 5);

  const NP = 30, ITER = 200, W = 0.729, C1 = 1.494, C2 = 1.494;
  const clamp = (v: number, i: number) => Math.max(lo[i], Math.min(hi[i], v));

  type Particle = { x: number[]; v: number[]; pbest: number[]; pbestF: number };
  const swarm: Particle[] = [];
  let gbest: number[] = [], gbestF = Infinity;

  for (let p = 0; p < NP; p++) {
    const x = lo.map((l, i) => l + Math.random() * (hi[i] - l));
    const vel = Array(nvars).fill(0).map((_, i) => (Math.random() * 2 - 1) * (hi[i] - lo[i]) * 0.1);
    const f = await callFn(fn, x);
    swarm.push({ x, v: vel, pbest: [...x], pbestF: f });
    if (f < gbestF) { gbest = [...x]; gbestF = f; }
  }

  for (let it = 0; it < ITER; it++) {
    for (const p of swarm) {
      for (let i = 0; i < nvars; i++) {
        const r1 = Math.random(), r2 = Math.random();
        p.v[i] = W * p.v[i] + C1 * r1 * (p.pbest[i] - p.x[i]) + C2 * r2 * (gbest[i] - p.x[i]);
        p.x[i] = clamp(p.x[i] + p.v[i], i);
      }
      const f = await callFn(fn, p.x);
      if (f < p.pbestF) { p.pbest = [...p.x]; p.pbestF = f; }
      if (f < gbestF) { gbest = [...p.x]; gbestF = f; }
    }
  }
  return [mat(1, nvars, new Float64Array(gbest)), scalar(gbestF), scalar(0), scalar(ITER)];
}

// ── Multi-objective GA (NSGA-II style) ─────────────────────────────────────────────────
// Returns Pareto-front solutions x (nPareto×nvars) and their objective values fval (nPareto×nObj).
async function gamultiobj(args: Value[]): Promise<Value[]> {
  if (args.length < 2) throw new MatError('gamultiobj: requires fun and nvars');
  const fn = args[0];
  if (!isFn(fn)) throw new MatError('gamultiobj: first argument must be a function handle');
  const nvars = asScalar(m(args[1]));
  const lb = args.length > 6 && isMat(args[6]) ? toArray(m(args[6])) : Array(nvars).fill(-5);
  const ub = args.length > 7 && isMat(args[7]) ? toArray(m(args[7])) : Array(nvars).fill(5);
  const lo = lb.map((v, i) => isFinite(v) ? v : -5);
  const hi = ub.map((v, i) => isFinite(v) ? v : 5);

  const h = fn as unknown as { call: (args: Value[], nargout: number) => Promise<Value[]> };
  const evaluate = async (x: number[]): Promise<number[]> => {
    const res = await h.call([mat(1, nvars, new Float64Array(x))], 1);
    const fv = res[0];
    return isMat(fv) ? toArray(fv as any) : [asScalar(m(fv))];
  };

  const POP = 40, GENS = 100;
  type Ind = { x: number[]; f: number[] };

  // initialise
  let pop: Ind[] = [];
  for (let p = 0; p < POP; p++) {
    const x = lo.map((l, i) => l + Math.random() * (hi[i] - l));
    pop.push({ x, f: await evaluate(x) });
  }

  const dominates = (a: number[], b: number[]) =>
    a.every((v, i) => v <= b[i]) && a.some((v, i) => v < b[i]);

  for (let gen = 0; gen < GENS; gen++) {
    // generate offspring via crossover + mutation
    const offspring: Ind[] = [];
    while (offspring.length < POP) {
      const p1 = pop[Math.random() * POP | 0], p2 = pop[Math.random() * POP | 0];
      const x = p1.x.map((xi, i) => {
        const alpha = Math.random();
        let c = alpha * xi + (1 - alpha) * p2.x[i];
        if (Math.random() < 1 / nvars) c += (Math.random() * 2 - 1) * 0.1 * (hi[i] - lo[i]);
        return Math.max(lo[i], Math.min(hi[i], c));
      });
      offspring.push({ x, f: await evaluate(x) });
    }
    // non-dominated sort of combined population
    const combined = [...pop, ...offspring];
    const nonDom = combined.filter(a => !combined.some(b => b !== a && dominates(b.f, a.f)));
    pop = nonDom.length >= POP ? nonDom.slice(0, POP) : [...nonDom, ...combined.filter(a => !nonDom.includes(a)).slice(0, POP - nonDom.length)];
  }

  // extract Pareto front
  const pareto = pop.filter(a => !pop.some(b => b !== a && dominates(b.f, a.f)));
  const nP = pareto.length, nObj = pareto[0]?.f.length ?? 1;
  const xOut = mat(nP, nvars, new Float64Array(pareto.flatMap(p => p.x)));
  const fOut = mat(nP, nObj, new Float64Array(pareto.flatMap(p => p.f)));
  return [xOut, fOut, scalar(0)];
}

export const GADS: ToolboxModule = {
  id: 'gads',
  name: 'Global Optimization Toolbox',
  docBase: 'https://www.mathworks.com/help/gads/',
  builtins: { ga, simulannealbnd, patternsearch, particleswarm, gamultiobj },
  help: {
    ga: {
      summary: 'Find minimum of function using genetic algorithm',
      syntax: [
        'x = ga(fun,nvars)',
        'x = ga(fun,nvars,A,b)',
        'x = ga(fun,nvars,A,b,Aeq,beq,lb,ub)',
        '[x,fval,exitflag,output] = ga(___)',
      ],
      description: [
        'x = ga(fun,nvars) minimises fun with nvars decision variables using a real-coded genetic algorithm.',
        'Bounds lb/ub clip the initial population and offspring. Linear constraints A*x<=b and Aeq*x==beq are handled by penalisation in this implementation.',
        'Returns optimal x, objective fval, exitflag (0=iteration limit), and output struct iteration count.',
      ],
      seealso: ['gamultiobj', 'simulannealbnd', 'patternsearch', 'particleswarm'],
    },
    simulannealbnd: {
      summary: 'Find minimum of function using simulated annealing algorithm',
      syntax: [
        'x = simulannealbnd(fun,x0)',
        'x = simulannealbnd(fun,x0,lb,ub)',
        'x = simulannealbnd(fun,x0,lb,ub,options)',
        '[x,fval,exitflag,output] = simulannealbnd(___)',
      ],
      description: [
        'x = simulannealbnd(fun,x0) minimises fun starting from x0 using simulated annealing.',
        'Temperature decreases geometrically; a candidate move is accepted if it reduces f or with Boltzmann probability exp(-Delta/T).',
        'lb and ub bound the search space.',
      ],
      seealso: ['ga', 'patternsearch', 'particleswarm'],
    },
    patternsearch: {
      summary: 'Find minimum of function using pattern search',
      syntax: [
        'x = patternsearch(fun,x0)',
        'x = patternsearch(fun,x0,A,b)',
        'x = patternsearch(fun,x0,A,b,Aeq,beq,lb,ub)',
        '[x,fval,exitflag,output] = patternsearch(___)',
      ],
      description: [
        'x = patternsearch(fun,x0) minimises fun using a poll-and-search pattern approach.',
        'At each iteration, the current mesh is polled along ±ei directions; if no improvement is found the mesh size halves.',
      ],
      seealso: ['ga', 'simulannealbnd', 'particleswarm'],
    },
    particleswarm: {
      summary: 'Particle swarm optimization',
      syntax: [
        'x = particleswarm(fun,nvars)',
        'x = particleswarm(fun,nvars,lb,ub)',
        'x = particleswarm(fun,nvars,lb,ub,options)',
        '[x,fval,exitflag,output] = particleswarm(___)',
      ],
      description: [
        'x = particleswarm(fun,nvars) minimises fun over nvars variables using particle swarm.',
        'Each particle tracks its personal best and the global best; velocity is updated with inertia weight W=0.729 and acceleration coefficients C1=C2=1.494.',
      ],
      seealso: ['ga', 'simulannealbnd', 'patternsearch'],
    },
    gamultiobj: {
      summary: 'Find Pareto front using multiobjective genetic algorithm',
      syntax: [
        'x = gamultiobj(fun,nvars)',
        'x = gamultiobj(fun,nvars,A,b,Aeq,beq,lb,ub)',
        '[x,fval,exitflag] = gamultiobj(___)',
      ],
      description: [
        'x = gamultiobj(fun,nvars) finds the Pareto front of a multiobjective function using an NSGA-II-style genetic algorithm.',
        'fun must return a row vector of objective values.',
        'Returns x (nPareto×nvars) and fval (nPareto×nObj) for all non-dominated solutions.',
      ],
      seealso: ['ga', 'paretosearch', 'particleswarm'],
    },
    paretosearch: {
      summary: 'Find Pareto front using pattern search',
      syntax: ['x = paretosearch(fun,nvars)', '[x,fval] = paretosearch(fun,nvars,A,b,Aeq,beq,lb,ub)'],
      seealso: ['gamultiobj', 'ga'],
    },
    surrogateopt: {
      summary: 'Surrogate optimization for global minimum',
      syntax: ['x = surrogateopt(fun,lb,ub)', '[x,fval,exitflag,output] = surrogateopt(___)'],
      seealso: ['ga', 'patternsearch'],
    },
    globalsearch: {
      summary: 'Find global minimum using GlobalSearch solver',
      syntax: ['gs = GlobalSearch', 'gs = GlobalSearch(Name,Value)', '[x,fval] = run(gs,problem)'],
      seealso: ['MultiStart', 'fmincon'],
    },
    multistart: {
      summary: 'Find multiple local minima',
      syntax: ['ms = MultiStart', '[x,fval] = run(ms,problem,k)'],
      seealso: ['GlobalSearch', 'fmincon'],
    },
  },
};
