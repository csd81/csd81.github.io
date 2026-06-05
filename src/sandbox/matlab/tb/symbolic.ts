// Symbolic Math Toolbox — wraps the existing SYM_BUILTINS as the first ToolboxModule.
// Help text for these functions already lives in help.ts (EXTRA_HELP/SYM_REF), so `help` is
// left empty here and builtinHelp resolves it there. docPath produces the sym.<name>.html URLs.
import type { ToolboxModule } from './types';
import { SYM_BUILTINS } from '../sym-builtins';

export const SYMBOLIC: ToolboxModule = {
  id: 'symbolic',
  name: 'Symbolic Math Toolbox',
  docBase: 'https://www.mathworks.com/help/symbolic/',
  docPath: (name) => (name === 'sym' ? 'sym.html' : `sym.${name.toLowerCase()}.html`),
  builtins: SYM_BUILTINS,
  help: {},
};
