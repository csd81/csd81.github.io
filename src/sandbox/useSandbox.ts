/** React hook wrapping a MATLAB session: command window state, figure, workspace. */
import { useCallback, useEffect, useRef, useState } from 'react';
import { createSession, type Session, type FigureSpec } from './matlab/index';
import { folderSources } from './library';

export interface ConsoleLine { kind: 'cmd' | 'out' | 'err' | 'prompt'; text: string }
export interface WsVar { name: string; size: string; klass: string; preview: string }

const EMPTY_FIG: FigureSpec = { version: 0, series: [] };

export function useSandbox(folderId: string) {
  const [lines, setLines] = useState<ConsoleLine[]>([]);
  const [workspace, setWorkspace] = useState<WsVar[]>([]);
  const [fig, setFig] = useState<FigureSpec>(EMPTY_FIG);
  const [busy, setBusy] = useState(false);
  const [prompt, setPrompt] = useState<string | null>(null);

  const sessionRef = useRef<Session | null>(null);
  const pendingResolve = useRef<((v: string) => void) | null>(null);

  const pushOut = useCallback((text: string) => {
    setLines((prev) => {
      const last = prev[prev.length - 1];
      if (last && last.kind === 'out') return [...prev.slice(0, -1), { kind: 'out', text: last.text + text }];
      return [...prev, { kind: 'out', text }];
    });
  }, []);

  const makeSession = useCallback((): Session => createSession({
    onOutput: pushOut,
    requestInput: (p: string) => new Promise<string>((resolve) => {
      pendingResolve.current = resolve;
      setPrompt(p);
      if (p) setLines((prev) => [...prev, { kind: 'prompt', text: p }]);
    }),
    preload: folderSources(folderId),
  }), [folderId, pushOut]);

  // (Re)create the session whenever the working folder changes.
  useEffect(() => {
    sessionRef.current = makeSession();
    setLines([]); setWorkspace([]); setFig(EMPTY_FIG); setPrompt(null);
    pendingResolve.current = null;
  }, [makeSession]);

  const refresh = useCallback(() => {
    const s = sessionRef.current; if (!s) return;
    setWorkspace(s.workspace());
    setFig({ ...s.getFigure() });
  }, []);

  /** Run a block of source (the editor buffer). */
  const runSource = useCallback(async (src: string) => {
    const s = sessionRef.current; if (!s || busy) return;
    setBusy(true);
    await s.run(src);
    refresh();
    setBusy(false);
  }, [busy, refresh]);

  /** Submit a command-window line — either an answer to input() or a new command. */
  const submit = useCallback(async (text: string) => {
    if (pendingResolve.current) {
      const resolve = pendingResolve.current;
      pendingResolve.current = null;
      setPrompt(null);
      setLines((prev) => {
        const last = prev[prev.length - 1];
        if (last && last.kind === 'prompt') return [...prev.slice(0, -1), { kind: 'prompt', text: last.text + ' ' + text }];
        return [...prev, { kind: 'prompt', text }];
      });
      resolve(text);
      return;
    }
    const s = sessionRef.current; if (!s || busy) return;
    setLines((prev) => [...prev, { kind: 'cmd', text }]);
    setBusy(true);
    await s.run(text);
    refresh();
    setBusy(false);
  }, [busy, refresh]);

  const clearConsole = useCallback(() => setLines([]), []);
  const resetSession = useCallback(() => {
    sessionRef.current = makeSession();
    setLines([]); setWorkspace([]); setFig(EMPTY_FIG); setPrompt(null);
    pendingResolve.current = null;
  }, [makeSession]);

  return { lines, workspace, fig, busy, prompt, runSource, submit, clearConsole, resetSession };
}
