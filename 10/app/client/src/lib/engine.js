// Thin client-side wrapper around the shared numerical engine so components
// import from one place. The very same code runs on the server (/api/solve).
export { buildFuncs, buildExact } from "../../../shared/derivatives.js";
export {
  METHODS,
  METHOD_KEYS,
  referenceSolution,
  solveWithError,
  convergenceSweep,
} from "../../../shared/solvers.js";

// Build {funcs, exactFn} from a model, swallowing parse errors into a message.
import { buildFuncs, buildExact } from "../../../shared/derivatives.js";

export function compileModel(model) {
  try {
    const funcs = buildFuncs(model.f);
    const exactFn = model.exact ? buildExact(model.exact) : null;
    return { funcs, exactFn, error: null };
  } catch (e) {
    return { funcs: null, exactFn: null, error: e.message };
  }
}

// Fixed palette per method key for consistent colors across charts.
export const METHOD_COLORS = {
  euler: "#f85149",
  taylor2: "#d29922",
  taylor3: "#bc8cff",
  midpoint: "#3fb950",
  modifiedEuler: "#56d4dd",
  heun: "#ff9e64",
  rk4: "#6ea8fe",
  exact: "#9aa7b4",
};
