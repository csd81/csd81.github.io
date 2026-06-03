/** Public entry point: a MATLAB session that the UI (or a test harness) drives. */
import { Interpreter } from './interp';
import { MatError } from './values';
import type { FigureSpec } from './graphics';

export interface SessionOptions {
  onOutput: (text: string) => void;
  requestInput?: (prompt: string) => Promise<string>;
  /** Clear the command window (invoked by `clc`). */
  onClearConsole?: () => void;
  /** Cooperative-yield hook (used by the Web Worker host to support Abort). */
  onTick?: () => void | Promise<void>;
  /** Function-file sources to pre-register (callable from the command window). */
  preload?: string[];
}

export interface Session {
  /** Run a chunk of MATLAB source (script statements + local functions). */
  run(src: string): Promise<{ error?: string }>;
  getFigure(): FigureSpec;
  workspace(): { name: string; size: string; klass: string; preview: string }[];
  reset(): void;
}

export function createSession(opts: SessionOptions): Session {
  let interp = new Interpreter({ onOutput: opts.onOutput, requestInput: opts.requestInput, onClearConsole: opts.onClearConsole, onTick: opts.onTick });
  const preload = () => { for (const src of opts.preload ?? []) { try { interp.loadFunctions(src); } catch { /* skip unparseable */ } } };
  preload();

  return {
    async run(src: string) {
      try {
        await interp.run(src);
        return {};
      } catch (e) {
        const msg = e instanceof MatError ? e.message
          : e instanceof SyntaxError ? e.message
          : (e as Error)?.message ?? String(e);
        opts.onOutput(`⛔ ${msg}\n`);
        return { error: msg };
      }
    },
    getFigure() { return interp.graphics.fig; },
    workspace() { return interp.workspaceSnapshot(); },
    reset() {
      interp = new Interpreter({ onOutput: opts.onOutput, requestInput: opts.requestInput, onClearConsole: opts.onClearConsole, onTick: opts.onTick });
      preload();
    },
  };
}

export { Interpreter } from './interp';
export type { FigureSpec, Series } from './graphics';
