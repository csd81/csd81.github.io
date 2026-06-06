/** React hook wrapping the MATLAB Web Worker: command window state, figure, workspace, files, abort. */
import { useCallback, useEffect, useRef, useState } from 'react';
import type { FigureSpec } from './matlab/index';
import { folderSources } from './library';
import { parseMlx } from './matlab/io';

export interface ConsoleLine { kind: 'cmd' | 'out' | 'err' | 'prompt'; text: string }
export interface WsVar { name: string; size: string; klass: string; preview: string }

const EMPTY_FIG: FigureSpec = { version: 0, rows: 1, cols: 1, current: 0, panels: [{ series: [] }] };
const VFS_KEY = 'sandbox-vfs';
const VFS_CAP = 4 * 1024 * 1024;   // ~4MB localStorage budget for user files

type FromWorker =
  | { type: 'output'; text: string }
  | { type: 'clear' }
  | { type: 'input'; prompt: string }
  | { type: 'figure'; fig: FigureSpec }
  | { type: 'workspace'; vars: WsVar[] }
  | { type: 'files'; names: string[] }
  | { type: 'completions'; names: string[] }
  | { type: 'fileData'; id: number; name: string; bytes: Uint8Array | null }
  | { type: 'done'; id: number; error?: string };

// ── localStorage VFS mirror (base64) ──
const b64encode = (b: Uint8Array): string => { let s = ''; for (let i = 0; i < b.length; i++) s += String.fromCharCode(b[i]); return btoa(s); };
const b64decode = (s: string): Uint8Array => { const bin = atob(s); const b = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) b[i] = bin.charCodeAt(i); return b; };
function loadVfs(): Map<string, Uint8Array> {
  const m = new Map<string, Uint8Array>();
  try { const raw = localStorage.getItem(VFS_KEY); if (raw) for (const [k, v] of Object.entries(JSON.parse(raw) as Record<string, string>)) m.set(k, b64decode(v)); } catch { /* ignore */ }
  return m;
}
function saveVfs(m: Map<string, Uint8Array>) {
  let total = 0; const obj: Record<string, string> = {};
  for (const [k, v] of m) { total += v.length; if (total > VFS_CAP) { console.warn('sandbox VFS exceeds storage budget; some files not persisted'); break; } obj[k] = b64encode(v); }
  try { localStorage.setItem(VFS_KEY, JSON.stringify(obj)); } catch { /* quota */ }
}
function triggerDownload(name: string, bytes: Uint8Array) {
  const blob = new Blob([bytes.slice()], { type: 'application/octet-stream' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = name.replace(/^.*\//, '');
  document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function useSandbox(folderId: string) {
  const [lines, setLines] = useState<ConsoleLine[]>([]);
  const [workspace, setWorkspace] = useState<WsVar[]>([]);
  const [fig, setFig] = useState<FigureSpec>(EMPTY_FIG);
  const [busy, setBusy] = useState(false);
  const [prompt, setPrompt] = useState<string | null>(null);
  const [userFiles, setUserFiles] = useState<string[]>([]);
  const [completions, setCompletions] = useState<string[]>([]);

  const workerRef = useRef<Worker | null>(null);
  const awaitingInput = useRef(false);
  const runId = useRef(0);
  const vfsRef = useRef<Map<string, Uint8Array>>(loadVfs());
  const getFileWaiters = useRef(new Map<number, (b: Uint8Array | null) => void>());
  const getFileId = useRef(0);

  useEffect(() => { setUserFiles([...vfsRef.current.keys()].sort()); }, []);

  const pushOut = useCallback((text: string) => {
    setLines((prev) => {
      const last = prev[prev.length - 1];
      if (last && last.kind === 'out') return [...prev.slice(0, -1), { kind: 'out', text: last.text + text }];
      return [...prev, { kind: 'out', text }];
    });
  }, []);

  // Pull any worker-created files (e.g. writematrix output) into the local mirror, then persist.
  const syncFiles = useCallback((names: string[]) => {
    setUserFiles(names.slice().sort());
    const worker = workerRef.current; if (!worker) return;
    let pending = 0; let changed = false;
    for (const name of names) {
      pending++;
      const id = ++getFileId.current;
      getFileWaiters.current.set(id, (bytes) => {
        if (bytes) {
          const old = vfsRef.current.get(name);
          let isSame = false;
          if (old && old.length === bytes.length) { isSame = true; for (let i = 0; i < old.length; i++) { if (old[i] !== bytes[i]) { isSame = false; break; } } }
          if (!isSame) { vfsRef.current.set(name, bytes); changed = true; }
        }
        if (--pending === 0 && changed) saveVfs(vfsRef.current);
      });
      worker.postMessage({ type: 'getFile', id, name });
    }
    for (const k of [...vfsRef.current.keys()]) if (!names.includes(k)) { vfsRef.current.delete(k); changed = true; }
    if (changed && pending === 0) saveVfs(vfsRef.current);
  }, []);

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
        case 'files': syncFiles(m.names); break;
        case 'completions': setCompletions(m.names); break;
        case 'fileData': { const w = getFileWaiters.current.get(m.id); if (w) { getFileWaiters.current.delete(m.id); w(m.bytes); } break; }
        case 'done':
          awaitingInput.current = false;
          setPrompt(null);
          setBusy(false);
          break;
      }
    };
  }, [pushOut, syncFiles]);

  // Replay the persisted VFS into a freshly (re)spawned worker.
  const replayFiles = useCallback((worker: Worker) => { for (const [name, bytes] of vfsRef.current) worker.postMessage({ type: 'putFile', name, bytes }); }, []);

  const spawn = useCallback(() => {
    const worker = new Worker(new URL('./matlab/worker.ts', import.meta.url), { type: 'module' });
    attach(worker);
    worker.postMessage({ type: 'reset', preload: folderSources(folderId) });
    replayFiles(worker);
    return worker;
  }, [attach, folderId, replayFiles]);

  useEffect(() => {
    const worker = new Worker(new URL('./matlab/worker.ts', import.meta.url), { type: 'module' });
    attach(worker);
    workerRef.current = worker;
    replayFiles(worker);
    return () => { worker.terminate(); workerRef.current = null; };
  }, [attach, replayFiles]);

  useEffect(() => {
    workerRef.current?.postMessage({ type: 'reset', preload: folderSources(folderId) });
    if (workerRef.current) replayFiles(workerRef.current);
    setLines([]); setWorkspace([]); setFig(EMPTY_FIG); setPrompt(null);
    awaitingInput.current = false; setBusy(false);
  }, [folderId, replayFiles]);

  const dispatchRun = useCallback((src: string) => {
    const worker = workerRef.current; if (!worker) return;
    setBusy(true);
    worker.postMessage({ type: 'run', id: ++runId.current, src });
  }, []);

  const runSource = useCallback((src: string) => { if (!busy) dispatchRun(src); }, [busy, dispatchRun]);

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

  const abort = useCallback(() => {
    if (!busy) return;
    workerRef.current?.postMessage({ type: 'abort' });
    if (awaitingInput.current) { awaitingInput.current = false; workerRef.current?.postMessage({ type: 'inputReply', value: '' }); }
  }, [busy]);

  const clearConsole = useCallback(() => setLines([]), []);

  const resetSession = useCallback(() => {
    workerRef.current?.terminate();
    workerRef.current = spawn();
    setLines([]); setWorkspace([]); setFig(EMPTY_FIG); setPrompt(null);
    awaitingInput.current = false; setBusy(false);
  }, [spawn]);

  /** Put a file into the VFS (worker + mirror + persistence). */
  const putBytes = useCallback((name: string, bytes: Uint8Array) => {
    vfsRef.current.set(name, bytes); saveVfs(vfsRef.current);
    workerRef.current?.postMessage({ type: 'putFile', name, bytes });
    setUserFiles([...vfsRef.current.keys()].sort());
  }, []);

  /** Import user files. Returns the code of any opened `.m`/`.mlx` so the page can show it. */
  const importFiles = useCallback(async (files: FileList | File[]): Promise<{ name: string; code: string } | null> => {
    let opened: { name: string; code: string } | null = null;
    for (const file of Array.from(files)) {
      const bytes = new Uint8Array(await file.arrayBuffer());
      if (/\.mlx$/i.test(file.name)) {
        const code = parseMlx(bytes); const mName = file.name.replace(/\.mlx$/i, '.m');
        putBytes(mName, new TextEncoder().encode(code));
        if (!opened) opened = { name: mName, code };
      } else {
        putBytes(file.name, bytes);
        if (/\.m$/i.test(file.name) && !opened) opened = { name: file.name, code: new TextDecoder().decode(bytes) };
      }
    }
    return opened;
  }, [putBytes]);

  /** Save editor text to the VFS as `<name>` and download a copy. */
  const saveFile = useCallback((name: string, text: string) => {
    const bytes = new TextEncoder().encode(text);
    putBytes(name, bytes); triggerDownload(name, bytes);
  }, [putBytes]);

  /** Download a VFS file (mirror first, else fetch from the worker). */
  const downloadFile = useCallback((name: string) => {
    const local = vfsRef.current.get(name); if (local) { triggerDownload(name, local); return; }
    const id = ++getFileId.current;
    getFileWaiters.current.set(id, (bytes) => { if (bytes) triggerDownload(name, bytes); });
    workerRef.current?.postMessage({ type: 'getFile', id, name });
  }, []);

  const deleteFile = useCallback((name: string) => {
    vfsRef.current.delete(name); saveVfs(vfsRef.current);
    workerRef.current?.postMessage({ type: 'deleteFile', name });
    setUserFiles([...vfsRef.current.keys()].sort());
  }, []);

  const readFileText = useCallback((name: string): string | null => { const b = vfsRef.current.get(name); return b ? new TextDecoder().decode(b) : null; }, []);

  return {
    lines, workspace, fig, busy, prompt, userFiles, completions,
    runSource, submit, clearConsole, resetSession, abort,
    importFiles, saveFile, downloadFile, deleteFile, readFileText,
  };
}
