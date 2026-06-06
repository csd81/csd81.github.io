/** MATLAB-Online–style playground: toolbar · file tree · editor · command window · figure · workspace · status bar. */
import { useEffect, useMemo, useRef, useState } from 'react';
import { useLang } from '../shared/providers/LanguageProvider';
import { FOLDERS, fileById, folderById, type MFile } from '../sandbox/library';
import { useSandbox } from '../sandbox/useSandbox';
import CodeEditor from '../sandbox/CodeEditor';
import CommandWindow from '../sandbox/CommandWindow';
import FigurePane from '../sandbox/FigurePane';
import './sandbox.css';

const DEFAULT_FILE = FOLDERS.find((f) => f.id === 'course/01-fixed-point')?.files.find((x) => x.name === 'fixp')?.id
  ?? FOLDERS[0]?.files[0]?.id ?? '';

const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const lf = (s: string | undefined) => (s ?? '').replace(/\r\n?/g, '\n'); // textareas use LF; keep the editor in sync

export default function Sandbox() {
  const { lang } = useLang();
  const t = (en: string, hu: string) => (lang === 'hu' ? hu : en);

  const [openId, setOpenId] = useState<string>(DEFAULT_FILE);
  const open: MFile | undefined = fileById(openId);
  const folderId = open?.folderId ?? FOLDERS[0]?.id ?? '';

  const [editor, setEditor] = useState<string>(lf(open?.source));
  // Everything starts collapsed → a clean command-window-first view.
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [topOpen, setTopOpen] = useState(false);   // editor (top of the centre column)
  const [leftW, setLeftW] = useState(220);
  const [rightW, setRightW] = useState(380);
  const [topH, setTopH] = useState(280);            // editor height (px) when open
  const [cursor, setCursor] = useState({ line: 1, col: 1 });
  const taRef = useRef<HTMLTextAreaElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<HTMLElement>(null);

  const { lines, workspace, fig, busy, prompt, userFiles, completions, runSource, submit, clearConsole, resetSession, abort, importFiles, saveFile, downloadFile, deleteFile, readFileText } = useSandbox(folderId);

  // A user (VFS) file open in the editor takes precedence over the bundled library file.
  const [userOpenName, setUserOpenName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { if (!userOpenName) { setEditor(lf(fileById(openId)?.source)); setCursor({ line: 1, col: 1 }); } }, [openId, userOpenName]);
  // Opening a bundled file reveals the editor.
  const openFile = (id: string) => { setUserOpenName(null); setOpenId(id); setTopOpen(true); };
  const openUserFile = (name: string) => { const txt = readFileText(name); if (txt == null) return; setUserOpenName(name); setEditor(lf(txt)); setTopOpen(true); setCursor({ line: 1, col: 1 }); };
  const doImport = async (files: FileList | null) => { if (!files || !files.length) return; const opened = await importFiles(files); if (opened) { setUserOpenName(opened.name); setEditor(lf(opened.code)); setTopOpen(true); } };
  const currentName = userOpenName ?? open?.file ?? 'untitled.m';
  const doSave = () => saveFile(currentName, editor);

  const [collapsed, setCollapsed] = useState<Set<string>>(() => new Set());
  const toggleFolder = (id: string) =>
    setCollapsed((prev) => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

  const courseFolders = useMemo(() => FOLDERS.filter((f) => f.group === 'course'), []);
  const chapterFolders = useMemo(() => FOLDERS.filter((f) => f.group === 'chapter'), []);
  const wdLabel = folderById(folderId)?.label ?? '';

  const updateCursor = (ta: HTMLTextAreaElement) => {
    const pos = ta.selectionStart;
    const upto = ta.value.slice(0, pos);
    const nl = upto.lastIndexOf('\n');
    setCursor({ line: upto.split('\n').length, col: pos - nl });
  };

  const SNAP_L = 140, SNAP_R = 160; // drag narrower than this → snap the panel closed
  const startDrag = (side: 'left' | 'right') => (e: React.PointerEvent) => {
    e.preventDefault();
    const startX = e.clientX, sL = leftW, sR = rightW;
    const onMove = (ev: PointerEvent) => {
      if (side === 'left') {
        const w = sL + (ev.clientX - startX);
        if (w < SNAP_L) setLeftOpen(false);
        else { setLeftOpen(true); setLeftW(clamp(w, SNAP_L, 520)); }
      } else {
        const w = sR - (ev.clientX - startX);
        if (w < SNAP_R) setRightOpen(false);
        else { setRightOpen(true); setRightW(clamp(w, SNAP_R, 640)); }
      }
    };
    const onUp = () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      document.body.style.cursor = ''; document.body.style.userSelect = '';
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    document.body.style.cursor = 'col-resize'; document.body.style.userSelect = 'none';
  };

  // Vertical splitter between the editor (top) and command window (bottom);
  // dragging up past the threshold snaps the editor to a collapsed bar.
  const SNAP_T = 90;
  const startVDrag = (e: React.PointerEvent) => {
    e.preventDefault();
    const startY = e.clientY;
    const start = editorRef.current?.getBoundingClientRect().height ?? topH;
    const centerH = centerRef.current?.getBoundingClientRect().height ?? 600;
    const onMove = (ev: PointerEvent) => {
      const h = start + (ev.clientY - startY);
      if (h < SNAP_T) setTopOpen(false);
      else { setTopOpen(true); setTopH(clamp(h, SNAP_T, centerH - 110)); }
    };
    const onUp = () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      document.body.style.cursor = ''; document.body.style.userSelect = '';
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    document.body.style.cursor = 'row-resize'; document.body.style.userSelect = 'none';
  };

  const gridStyle = {
    '--left-w': leftOpen ? leftW + 'px' : '28px',
    '--right-w': rightOpen ? rightW + 'px' : '28px',
    '--gl': leftOpen ? '6px' : '0px',
    '--gr': rightOpen ? '6px' : '0px',
  } as React.CSSProperties;
  const centerStyle = { '--top-h': topH + 'px' } as React.CSSProperties;

  return (
    <div className="mlab">
      {/* Top toolbar */}
      <header className="mlab__topbar">
        <span className="mlab__brand">🧮 {t('MATLAB Sandbox', 'MATLAB homokozó')}</span>
        <div className="mlab__tgroup">
          <button className="mlab__tool mlab__tool--run" disabled={busy} onClick={() => runSource(editor)} title={t('Run the editor (Ctrl+Enter)', 'Futtatás (Ctrl+Enter)')}>▶ {t('Run', 'Futtatás')}</button>
          <button className="mlab__tool mlab__tool--stop" disabled={!busy} onClick={abort} title={t('Stop the running computation', 'Futó számítás leállítása')}>■ {t('Stop', 'Állj')}</button>
          <button className="mlab__tool" onClick={resetSession} title={t('Clear workspace & restart', 'Munkaterület törlése, újraindítás')}>↻ {t('Reset', 'Újra')}</button>
          <button className="mlab__tool" onClick={clearConsole} title={t('Clear command window', 'Parancsablak törlése')}>⌫ {t('Clear', 'Törlés')}</button>
        </div>
        <span className="mlab__tspacer" />
        <div className="mlab__tgroup">
          <input ref={fileInputRef} type="file" multiple accept=".m,.mlx,.csv,.txt,.dat,.xlsx,.tsv" style={{ display: 'none' }} onChange={(e) => { void doImport(e.target.files); e.currentTarget.value = ''; }} />
          <button className="mlab__tool" onClick={() => fileInputRef.current?.click()} title={t('Import .m / .mlx / CSV / Excel', '.m / .mlx / CSV / Excel importálása')}>⤓ {t('Import', 'Import')}</button>
          <button className="mlab__tool" onClick={doSave} title={t('Save the editor to a file & download', 'Szerkesztő mentése fájlba és letöltés')}>💾 {t('Save', 'Mentés')}</button>
          <button className={'mlab__tool' + (leftOpen ? ' mlab__tool--on' : '')} onClick={() => setLeftOpen((v) => !v)} title={t('Toggle file tree', 'Fájlfa ki/be')}>▣ {t('Files', 'Fájlok')}</button>
          <button className={'mlab__tool' + (topOpen ? ' mlab__tool--on' : '')} onClick={() => setTopOpen((v) => !v)} title={t('Toggle editor', 'Szerkesztő ki/be')}>✎ {t('Editor', 'Szerkesztő')}</button>
          <button className={'mlab__tool' + (rightOpen ? ' mlab__tool--on' : '')} onClick={() => setRightOpen((v) => !v)} title={t('Toggle figure & workspace', 'Ábra és munkaterület ki/be')}>▥ {t('Figure', 'Ábra')}</button>
        </div>
      </header>

      {/* Workbench */}
      <div className="mlab__grid" style={gridStyle}>
        {/* File tree (or a collapsed rail) */}
        {leftOpen ? (
          <>
            <aside className="mlab__files">
              <div className="mlab__pane-head"><span>{t('Current Folder', 'Aktuális mappa')}</span></div>
              <div className="mlab__tree">
                {userFiles.length > 0 && (
                  <div className="mlab__group">
                    <div className="mlab__group-title">{t('User files', 'Saját fájlok')}</div>
                    <ul className="mlab__filelist">
                      {userFiles.map((name) => (
                        <li key={name} className="mlab__userfile">
                          <button className={'mlab__file' + (name === userOpenName ? ' mlab__file--active' : '')} onClick={() => /\.(m|mlx|csv|txt|dat|tsv)$/i.test(name) ? openUserFile(name) : downloadFile(name)} title={name}>{name}</button>
                          <button className="mlab__mini" onClick={() => downloadFile(name)} title={t('Download', 'Letöltés')}>⤓</button>
                          <button className="mlab__mini" onClick={() => { if (name === userOpenName) setUserOpenName(null); deleteFile(name); }} title={t('Delete', 'Törlés')}>✕</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <FileGroup title={t('Course examples', 'Kurzus példák')} folders={courseFolders} openId={openId} setOpenId={openFile} collapsed={collapsed} toggle={toggleFolder} />
                <FileGroup title={t('Chapter algorithms', 'Fejezet-algoritmusok')} folders={chapterFolders} openId={openId} setOpenId={openFile} collapsed={collapsed} toggle={toggleFolder} />
              </div>
            </aside>
            <div className="mlab__gutter mlab__gutter--v mlab__gut-l" onPointerDown={startDrag('left')} title={t('Drag to resize', 'Húzd az átméretezéshez')} />
          </>
        ) : (
          <button className="mlab__rail mlab__rail--l" onClick={() => setLeftOpen(true)} title={t('Show files', 'Fájlok megjelenítése')}>▸ {t('Files', 'Fájlok')}</button>
        )}

        {/* Centre column: editor (or rail) over the command window */}
        <div className="mlab__center" ref={centerRef} style={centerStyle}>
          {topOpen ? (
            <>
              <section className="mlab__editor" ref={editorRef}>
                <div className="mlab__pane-head">
                  <span className="mlab__filetab">{userOpenName ?? open?.file ?? t('Editor', 'Szerkesztő')}</span>
                  <span className="mlab__spacer" />
                  <button className="mlab__mini" onClick={() => setTopOpen(false)} title={t('Collapse editor', 'Szerkesztő összecsukása')}>⌃</button>
                </div>
                <CodeEditor
                  value={editor}
                  textareaRef={taRef}
                  onChange={(e) => { setEditor(e.target.value); updateCursor(e.currentTarget); }}
                  onKeyUp={(e) => updateCursor(e.currentTarget)}
                  onClick={(e) => updateCursor(e.currentTarget)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); runSource(editor); }
                    if (e.key === 'Tab') {
                      e.preventDefault();
                      const ta = e.currentTarget; const s = ta.selectionStart; const en = ta.selectionEnd;
                      const v = editor.slice(0, s) + '  ' + editor.slice(en);
                      setEditor(v);
                      requestAnimationFrame(() => { ta.selectionStart = ta.selectionEnd = s + 2; updateCursor(ta); });
                    }
                  }}
                />
              </section>
              <div className="mlab__gutter mlab__gutter--h mlab__gut-h" onPointerDown={startVDrag} title={t('Drag to resize', 'Húzd az átméretezéshez')} />
            </>
          ) : (
            <button className="mlab__rail mlab__rail--t" onClick={() => setTopOpen(true)} title={t('Show editor', 'Szerkesztő megjelenítése')}>
              ✎ {t('Editor', 'Szerkesztő')}{open ? ' — ' + open.file : ''} ▾
            </button>
          )}
          <CommandWindow lines={lines} busy={busy} prompt={prompt} completions={completions} onSubmit={submit} onClear={clearConsole} />
        </div>

        {/* Figure + Workspace (or a collapsed rail) */}
        {rightOpen ? (
          <>
            <div className="mlab__gutter mlab__gutter--v mlab__gut-r" onPointerDown={startDrag('right')} title={t('Drag to resize', 'Húzd az átméretezéshez')} />
            <div className="mlab__right">
              <section className="mlab__figure">
                <div className="mlab__pane-head"><span>{t('Figure', 'Ábra')}</span></div>
                <div className="mlab__fig-body"><FigurePane fig={fig} /></div>
              </section>
              <section className="mlab__workspace">
                <div className="mlab__pane-head"><span>{t('Workspace', 'Munkaterület')}</span></div>
                <div className="mlab__ws-body">
                  {workspace.length === 0 ? (
                    <div className="mlab__ws-empty">{t('No variables', 'Nincs változó')}</div>
                  ) : (
                    <table className="mlab__ws">
                      <thead><tr><th>{t('Name', 'Név')}</th><th>{t('Size', 'Méret')}</th><th>{t('Value', 'Érték')}</th></tr></thead>
                      <tbody>
                        {workspace.map((v) => (
                          <tr key={v.name}><td className="mlab__ws-name">{v.name}</td><td>{v.size}</td><td className="mlab__ws-val">{v.preview}</td></tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </section>
            </div>
          </>
        ) : (
          <button className="mlab__rail mlab__rail--r" onClick={() => setRightOpen(true)} title={t('Show figure & workspace', 'Ábra és munkaterület')}>◂ {t('Figure', 'Ábra')}</button>
        )}
      </div>

      {/* Status bar */}
      <footer className="mlab__status">
        <span className={'mlab__stat-state' + (busy ? ' mlab__stat-state--busy' : '')}>{busy ? t('Busy', 'Dolgozik') : t('Ready', 'Kész')}</span>
        <span className="mlab__tspacer" />
        <span className="mlab__stat">📁 {wdLabel}</span>
        <span className="mlab__stat">{open?.file ?? '—'}</span>
        <span className="mlab__stat">UTF-8</span>
        <span className="mlab__stat">{t('Ln', 'Sor')} {cursor.line} {t('Col', 'Oszl')} {cursor.col}</span>
      </footer>
    </div>
  );
}

function FileGroup({
  title, folders, openId, setOpenId, collapsed, toggle,
}: {
  title: string;
  folders: typeof FOLDERS;
  openId: string;
  setOpenId: (id: string) => void;
  collapsed: Set<string>;
  toggle: (id: string) => void;
}) {
  return (
    <div className="mlab__group">
      <div className="mlab__group-title">{title}</div>
      {folders.map((f) => {
        const isClosed = collapsed.has(f.id);
        return (
          <div key={f.id} className="mlab__folder">
            <button className="mlab__folder-head" onClick={() => toggle(f.id)}>
              <span className="mlab__chev">{isClosed ? '▸' : '▾'}</span> {f.label}
            </button>
            {!isClosed && (
              <ul className="mlab__filelist">
                {f.files.map((file) => (
                  <li key={file.id}>
                    <button
                      className={'mlab__file' + (file.id === openId ? ' mlab__file--active' : '')}
                      onClick={() => setOpenId(file.id)}
                    >{file.file}</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
