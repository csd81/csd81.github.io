// Help entries for the Simulink, extracted from simulink.ts.
// Keyed by function name; consumed via ToolboxModule.help (see tb/types.ts).
import type { HelpEntry } from '../help';

export const HELP_SIMULINK: Record<string, HelpEntry | string> = {
    new_system: { summary: 'Create a new Simulink model in memory', syntax: ["new_system('modelname')"], seealso: ['open_system', 'save_system', 'add_block'] },
    add_block: { summary: 'Add a block to a Simulink model', syntax: ["add_block('srcblock','dstblock')"], seealso: ['add_line', 'set_param', 'new_system'] },
    add_line: { summary: 'Connect block ports with a signal line', syntax: ["add_line('model','srcblock/port','dstblock/port')"], seealso: ['add_block', 'delete_line', 'set_param'] },
    set_param: { summary: 'Set a block or model parameter', syntax: ["set_param('obj','param',value)"], description: ["set_param('model/block','param',value) sets a named parameter on a Simulink block or model, e.g. set_param('model','StopTime','10')."], seealso: ['get_param', 'add_block', 'sim'] },
    get_param: { summary: 'Get a block or model parameter', syntax: ["val = get_param('obj','param')"], seealso: ['set_param', 'add_block'] },
    sim: { summary: 'Simulate a Simulink model', syntax: ["simout = sim('model')", "simout = sim('model',Name,Value)"], description: ["simout = sim('model') runs the Simulink model named 'model' and returns a Simulink.SimulationOutput object containing logged signals.", 'Name-Value options include StopTime, SimulationMode, and SaveOutput.'], seealso: ['set_param', 'get_param', 'new_system'] },
  };
