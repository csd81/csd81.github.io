/**
 * Web Worker host for the MATLAB interpreter. Runs the whole `Session` off the
 * main thread so the browser UI never freezes, and supports cooperative Abort:
 * a long-running loop periodically yields via `onTick`, letting the worker
 * process an "abort" message and throw to stop the run (workspace is preserved).
 */
import { createSession, type Session } from './index';

type ToWorker =
  | { type: 'reset'; preload: string[] }
  | { type: 'run'; id: number; src: string }
  | { type: 'inputReply'; value: string }
  | { type: 'abort' };

type FromWorker =
  | { type: 'output'; text: string }
  | { type: 'clear' }
  | { type: 'input'; prompt: string }
  | { type: 'figure'; fig: unknown }
  | { type: 'workspace'; vars: unknown }
  | { type: 'done'; id: number; error?: string };

const post = (m: FromWorker) => (self as unknown as Worker).postMessage(m);

// Reusable macrotask yield: posting on a MessageChannel returns control to the
// worker event loop, so a queued "abort" message gets a chance to run.
let yieldResolve: (() => void) | null = null;
const tickChannel = new MessageChannel();
tickChannel.port1.onmessage = () => { const r = yieldResolve; yieldResolve = null; r?.(); };
const macrotaskYield = () => new Promise<void>((res) => { yieldResolve = res; tickChannel.port2.postMessage(0); });

let aborted = false;
let inputResolve: ((v: string) => void) | null = null;
let preload: string[] = [];
let session: Session | null = null;

function makeSession() {
  session = createSession({
    onOutput: (text) => post({ type: 'output', text }),
    onClearConsole: () => post({ type: 'clear' }),
    requestInput: (prompt) => new Promise<string>((resolve) => { inputResolve = resolve; post({ type: 'input', prompt }); }),
    onTick: async () => {
      await macrotaskYield();
      if (aborted) throw new Error('Operation terminated by user.');
    },
    preload,
  });
}

self.onmessage = async (ev: MessageEvent<ToWorker>) => {
  const msg = ev.data;
  switch (msg.type) {
    case 'reset':
      preload = msg.preload;
      makeSession();
      return;
    case 'inputReply':
      { const r = inputResolve; inputResolve = null; r?.(msg.value); }
      return;
    case 'abort':
      aborted = true;
      return;
    case 'run': {
      if (!session) makeSession();
      aborted = false;
      const res = await session!.run(msg.src);
      // Stream the resulting figure + workspace back, then signal completion.
      post({ type: 'figure', fig: session!.getFigure() });
      post({ type: 'workspace', vars: session!.workspace() });
      post({ type: 'done', id: msg.id, error: res.error });
      return;
    }
  }
};
