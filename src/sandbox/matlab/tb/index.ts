// Central toolbox registry. Aggregates every ToolboxModule into merged builtin/constant/help
// tables plus a name→toolbox map. Merged into the global BUILTINS in builtins.ts AFTER which
// the base entries are spread, so base MATLAB always wins on a name collision (see plan §3).
// Eager static imports for now (plan §5: lazy code-splitting deferred).
import type { Builtin } from '../builtins';
import type { Value } from '../values';
import type { HelpEntry } from '../help';
import type { ToolboxModule } from './types';
import { SYMBOLIC } from './symbolic';
import { STATS } from './stats';
import { SIGNAL } from './signal';
import { SIMULINK } from './simulink';
import { FINANCIAL } from './financial';
import { WAVELET } from './wavelet';
import { CURVEFIT } from './curvefit';
import { COMM } from './comm';
import { IMAGES } from './images';
import { CONTROL } from './control';

/** All registered toolboxes, in precedence order (first wins on inter-toolbox collision). */
export const TOOLBOXES: ToolboxModule[] = [SYMBOLIC, STATS, SIGNAL, SIMULINK, FINANCIAL, WAVELET, CURVEFIT, COMM, IMAGES, CONTROL];

export const TOOLBOX_BUILTINS: Record<string, Builtin> = {};
export const TOOLBOX_CONSTANTS: Record<string, () => Value> = {};
export const TOOLBOX_HELP: Record<string, HelpEntry | string> = {};
/** Function name → owning toolbox (recorded even when a base builtin later shadows the name). */
export const FUNC_TOOLBOX = new Map<string, ToolboxModule>();

for (const tb of TOOLBOXES) {
  for (const [name, fn] of Object.entries(tb.builtins)) {
    if (!(name in TOOLBOX_BUILTINS)) TOOLBOX_BUILTINS[name] = fn;
    if (!FUNC_TOOLBOX.has(name)) FUNC_TOOLBOX.set(name, tb);
  }
  if (tb.constants) for (const [k, v] of Object.entries(tb.constants)) if (!(k in TOOLBOX_CONSTANTS)) TOOLBOX_CONSTANTS[k] = v;
  for (const [k, h] of Object.entries(tb.help)) if (!(k in TOOLBOX_HELP)) TOOLBOX_HELP[k] = h;
}
