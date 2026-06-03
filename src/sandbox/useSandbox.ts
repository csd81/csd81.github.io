/** React hook wrapping the MATLAB Web Worker: command window state, figure, workspace, abort. */
import { useCallback, useEffect, useRef, useState } from 'react';
import type { FigureSpec } from './matlab/index';
import { folderSources } from './library';

export interface ConsoleLine { kind: 'cmd' | 'out' | 'err' | 'prompt'; text: string }
export interface WsVar { name: string; size: string; klass: string; preview: string }

const EMPTY_FIG: FigureSpec = { version: 0, series: [] };

type FromWorker =
  | { type: 'output'; text: string }
  | { type: 'clear' }
  | { type: 'input'; prompt: string }
  | { type: 'figure'; fig: FigureSpec }
  | { type: 'workspace'; vars: WsVar[] }
  | { type: 'done'; id: number; error?: string };

export function useSandbox(folderId: string) {
  const [lines, setLines] = useState<ConsoleLine[]>([]);
  const [workspace, setWorkspace] = useState<WsVar[]>([]);
  const [fig, setFig] = useState<FigureSpec>(EMPTY_FIG);
  const [busy, setBusy] = useState(false);
  const [prompt, setPrompt] = useState<string | null>(null);

  const workerRef = useRef<Worker | null>(null);
  const awaitingInput = useRef(false);
  const runId = useRef(0);

  const pushOut = useCallback((text: string) => {
    setLines((prev) => {
      const last = prev[prev.length - 1];
      if (last && last.kind === 'out') return [...prev.slice(0, -1), { kind: 'out', text: last.text + text }];
      return [...prev, { kind: 'out', text }];
    });
  }, []);

  // Wire a worker's message stream to the UI state. Stable across renders.
  const attach = useCallback((worker: Worker) => {
    worker.onmessage = (ev: MessageEvent<FromWorker>) => {
      const m = ev.data;
      switch (m.type) {
        case 'output': pushOut(m.text); break;
        case 'clear': setLines([]); break;
        case 'input':
          awaitingInput.current = true;
          setPrompt(m.prompt);
          if (m.prompt) setLines((prev) => [...prev, { kind: 'prompt', text: m.prompt }]);
          break;
        case 'figure': setFig({ ...m.fig }); break;
        case 'workspace': setWorkspace(m.vars); break;
        case 'done':
          awaitingInput.current = false;
          setPrompt(null);
          setBusy(false);
          break;
      }
    };
  }, [pushOut]);

  const spawn = useCallback(() => {
    const worker = new Worker(new URL('./matlab/worker.ts', import.meta.url), { type: 'module' });
    attach(worker);
    worker.postMessage({ type: 'reset', preload: folderSources(folderId) });
    return worker;
  }, [attach, folderId]);

  // Create the worker once; reset its session whenever the working folder changes.
  useEffect(() => {
    const worker = new Worker(new URL('./matlab/worker.ts', import.meta.url), { type: 'module' });
    attach(worker);
    workerRef.current = worker;
    return () => { worker.terminate(); workerRef.current = null; };
  }, [attach]);

  useEffect(() => {
    workerRef.current?.postMessage({ type: 'reset', preload: folderSources(folderId) });
    setLines([]); setWorkspace([]); setFig(EMPTY_FIG); setPrompt(null);
    awaitingInput.current = false; setBusy(false);
  }, [folderId]);

  const dispatchRun = useCallback((src: string) => {
    const worker = workerRef.current; if (!worker) return;
    setBusy(true);
    worker.postMessage({ type: 'run', id: ++runId.current, src });
  }, []);

  /** Run a block of source (the editor buffer). */
  const runSource = useCallback((src: string) => {
    if (busy) return;
    dispatchRun(src);
  }, [busy, dispatchRun]);

  /** Submit a command-window line — either an answer to input() or a new command. */
  const submit = useCallback((text: string) => {
    if (awaitingInput.current) {
      awaitingInput.current = false;
      setPrompt(null);
      setLines((prev) => {
        const last = prev[prev.length - 1];
        if (last && last.kind === 'prompt') return [...prev.slice(0, -1), { kind: 'prompt', text: last.text + ' ' + text }];
        return [...prev, { kind: 'prompt', text }];
      });
      workerRef.current?.postMessage({ type: 'inputReply', value: text });
      return;
    }
    if (busy) return;
    setLines((prev) => [...prev, { kind: 'cmd', text }]);
    dispatchRun(text);
  }, [busy, dispatchRun]);

  /** Stop a running computation (cooperative; preserves the workspace). */
  const abort = useCallback(() => {
    if (!busy) return;
    workerRef.current?.postMessage({ type: 'abort' });
    if (awaitingInput.current) { awaitingInput.current = false; workerRef.current?.postMessage({ type: 'inputReply', value: '' }); }
  }, [busy]);

  const clearConsole = useCallback(() => setLines([]), []);

  const resetSession = useCallback(() => {
    // Terminate hard (kills any runaway loop) and spin up a fresh worker.
    workerRef.current?.terminate();
    workerRef.current = spawn();
    setLines([]); setWorkspace([]); setFig(EMPTY_FIG); setPrompt(null);
    awaitingInput.current = false; setBusy(false);
  }, [spawn]);

  return { lines, workspace, fig, busy, prompt, runSource, submit, clearConsole, resetSession, abort };
}
