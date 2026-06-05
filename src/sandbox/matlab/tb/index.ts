// Central toolbox registry. Aggregates every ToolboxModule into merged builtin/constant/help
// tables plus a name→toolbox map. Merged into the global BUILTINS in builtins.ts AFTER which
// the base entries are spread, so base MATLAB always wins on a name collision (see plan §3).
// Eager static imports for now (plan §5: lazy code-splitting deferred).
import type { Builtin } from '../builtins';
import type { Value } from '../values';
import type { HelpEntry } from '../help';
import type { ToolboxModule } from './types';
import { FIVE_G } from './5g';
import { AEROBLKS } from './aeroblks';
import { AEROSPACE } from './aerospace';
import { AEROTBX } from './aerotbx';
import { ANTENNA } from './antenna';
import { AUDIO } from './audio';
import { AUTOBLKS } from './autoblks';
import { AUTOSAR } from './autosar';
import { BIOINFO } from './bioinfo';
import { BLUETOOTH } from './bluetooth';
import { BUGFINDER } from './bugfinder';
import { CODEPROVER } from './codeprover';
import { CODER } from './coder';
import { COMM } from './comm';
import { COMPILER } from './compiler';
import { COMPILER_SDK } from './compiler_sdk';
import { CONTROL } from './control';
import { CURVEFIT } from './curvefit';
import { DAQ } from './daq';
import { DATABASE } from './database';
import { DEEP_LEARNING_HDL } from './deep-learning-hdl';
import { DEEPLEARNING } from './deeplearning';
import { DRIVING } from './driving';
import { DSPHDL } from './dsphdl';
import { ECODER } from './ecoder';
import { ECON } from './econ';
import { FAULT_ANALYZER } from './fault-analyzer';
import { FINANCE } from './finance';
import { FINANCIAL } from './financial';
import { FININST } from './fininst';
import { fixedpoint } from './fixedpoint';
import { FMUEXPORT } from './fmuexport';
import { FUSION } from './fusion';
import { FUZZY } from './fuzzy';
import { GPUCODER } from './gpucoder';
import { HDLCODER } from './hdlcoder';
import { HDLVERIFIER } from './hdlverifier';
import { ICOMM } from './icomm';
import { IDENT } from './ident';
import { IMAGES } from './images';
import { IMAQ } from './imaq';
import { INSTRUMENT } from './instrument';
import { MAP } from './map';
import { MAPPING } from './mapping';
import { MATLAB_TEST } from './matlab-test';
import { MATLABGRADER } from './matlabgrader';
import { MCB } from './mcb';
import { MEDICAL_IMAGING } from './medical-imaging';
import { MPC } from './mpc';
import { NAV } from './nav';
import { OPTIM } from './optim';
import { PARALLEL_COMPUTING } from './parallel-computing';
import { PAYC } from './payc';
import { Pde } from './pde';
import { POLYSPACE_ACCESS } from './polyspace_access';
import { POLYSPACE_TEST } from './polyspace_test';
import { RADAR } from './radar';
import { RL } from './reinforcement-learning';
import { RF } from './rf';
import { ROBOTICS } from './robotics';
import { ROS } from './ros';
import { RPTGEN } from './rptgen';
import { RPTGENEXT } from './rptgenext';
import { RTW } from './rtw';
import { SATCOM } from './satcom';
import { SDL } from './sdl';
import { SERDES } from './serdes';
import { SIGNAL } from './signal';
import { SIGNAL_INTEGRITY } from './signal-integrity';
import { SIMEVENTS } from './simevents';
import { SIMULINK } from './simulink';
import { SL3D } from './sl3d';
import { SLCHECK } from './slcheck';
import { SLCOMPILER } from './slcompiler';
import { SLCONTROL } from './slcontrol';
import { SLDO } from './sldo';
import { SLDRT } from './sldrt';
import { SLDV } from './sldv';
import { SLREALTIME } from './slrealtime';
import { SLREQUIREMENTS } from './slrequirements';
import { SLTEST } from './sltest';
import { SM } from './sm';
import { SOC } from './soc';
import { SPS } from './sps';
import { STATEFLOW } from './stateflow';
import { STATS } from './stats';
import { STM32B } from './stm32b';
import { SYMBOLIC } from './symbolic';
import { SYSTEMCOMPOSER } from './systemcomposer';
import { THINGSPEAK } from './thingspeak';
import { TI_C2000 } from './ti-c2000';
import { UAV } from './uav';
import { VDYNBLKS } from './vdynblks';
import { VISION } from './vision';
import { VISIONHDL } from './visionhdl';
import { VNT } from './vnt';
import { WAVELET } from './wavelet';
import { WEBAPPSERVER } from './webappserver';
import { WIRELESS_HDL } from './wireless-hdl';
import { WIRELESS_NETWORK } from './wireless-network';
import { WIRELESS_TESTBENCH } from './wireless-testbench';
import { WLAN } from './wlan';

/** All registered toolboxes, in precedence order (first wins on inter-toolbox collision). */
export const TOOLBOXES: ToolboxModule[] = [
  FIVE_G, AEROBLKS, AEROSPACE, AEROTBX, ANTENNA, AUDIO, AUTOBLKS, AUTOSAR,
  BIOINFO, BLUETOOTH, BUGFINDER, CODEPROVER, CODER, COMM, COMPILER, COMPILER_SDK,
  CONTROL, CURVEFIT, DAQ, DATABASE, DEEP_LEARNING_HDL, DEEPLEARNING, DRIVING, DSPHDL,
  ECODER, ECON, FAULT_ANALYZER, FINANCE, FINANCIAL, FININST, fixedpoint, FMUEXPORT, FUSION, FUZZY,
  GPUCODER, HDLCODER, HDLVERIFIER, ICOMM, IDENT, IMAGES, IMAQ, INSTRUMENT,
  MAP, MAPPING, MATLAB_TEST, MATLABGRADER, MCB, MEDICAL_IMAGING, MPC, NAV,
  OPTIM, PARALLEL_COMPUTING, PAYC, Pde, POLYSPACE_ACCESS, POLYSPACE_TEST, RADAR, RL,
  RF, ROBOTICS, ROS, RPTGEN, RPTGENEXT, RTW, SATCOM, SDL,
  SERDES, SIGNAL, SIGNAL_INTEGRITY, SIMEVENTS, SIMULINK, SL3D, SLCHECK, SLCOMPILER,
  SLCONTROL, SLDO, SLDRT, SLDV, SLREALTIME, SLREQUIREMENTS, SLTEST, SM,
  SOC, SPS, STATEFLOW, STATS, STM32B, SYMBOLIC, SYSTEMCOMPOSER, THINGSPEAK,
  TI_C2000, UAV, VDYNBLKS, VISION, VISIONHDL, VNT, WAVELET, WEBAPPSERVER,
  WIRELESS_HDL, WIRELESS_NETWORK, WIRELESS_TESTBENCH, WLAN,
];

export const TOOLBOX_BUILTINS: Record<string, Builtin> = {};
export const TOOLBOX_CONSTANTS: Record<string, () => Value> = {};
export const TOOLBOX_HELP: Record<string, HelpEntry | string> = {};
/** Function name → owning toolbox (recorded even when a base builtin later shadows the name). */
export const FUNC_TOOLBOX = new Map<string, ToolboxModule>();
/** Class-method dispatch table: className → (fnName → impl). Lets a typed first argument route
 *  to a toolbox-specific overload (OOP dispatch) instead of the globally-registered builtin. */
export const TOOLBOX_METHODS = new Map<string, Record<string, Builtin>>();
/** Set of all method names — a fast guard so the interpreter only type-checks args when relevant. */
export const METHOD_NAMES = new Set<string>();

for (const tb of TOOLBOXES) {
  for (const [name, fn] of Object.entries(tb.builtins)) {
    if (!(name in TOOLBOX_BUILTINS)) TOOLBOX_BUILTINS[name] = fn;
    if (!FUNC_TOOLBOX.has(name)) FUNC_TOOLBOX.set(name, tb);
  }
  if (tb.methods) for (const [cls, table] of Object.entries(tb.methods)) {
    const existing = TOOLBOX_METHODS.get(cls) ?? {};
    for (const [fn, impl] of Object.entries(table)) { if (!(fn in existing)) existing[fn] = impl; METHOD_NAMES.add(fn); if (!FUNC_TOOLBOX.has(fn)) FUNC_TOOLBOX.set(fn, tb); }
    TOOLBOX_METHODS.set(cls, existing);
  }
  if (tb.constants) for (const [k, v] of Object.entries(tb.constants)) if (!(k in TOOLBOX_CONSTANTS)) TOOLBOX_CONSTANTS[k] = v;
  for (const [k, h] of Object.entries(tb.help)) if (!(k in TOOLBOX_HELP)) TOOLBOX_HELP[k] = h;
}
