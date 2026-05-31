import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

/* ══════════════════════════════════════════════════════════
   Shared types / helpers
══════════════════════════════════════════════════════════ */
type Pt = { x: number; y: number };

function logBox(msg: string) {
  return (
    <div style={{ background: '#060a0f', border: '1px solid #1e2a38', borderRadius: '.4rem', padding: '.5rem', fontSize: '.78rem', color: '#8ba3bc', minHeight: 70, maxHeight: 85, overflowY: 'auto', fontFamily: 'monospace', marginTop: '.5rem' }}>
      {msg}
    </div>
  );
}

function metricBox(val: string | number, label: string) {
  return (
    <div style={{ background: '#0a0f14', border: '1px solid #1e2a38', borderRadius: '.4rem', padding: '.4rem', textAlign: 'center' }}>
      <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#38bdf8' }}>{val}</div>
      <div style={{ fontSize: '.7rem', color: '#8ba3bc', marginTop: '.1rem' }}>{label}</div>
    </div>
  );
}

function verdict(ok: boolean | null, text: string) {
  if (ok === null) return <div style={{ fontSize: '.9rem', fontWeight: 700, textAlign: 'center', padding: '.4rem', borderRadius: '.4rem', marginTop: '.5rem', background: '#0e1117', border: '1px solid #21262d', color: '#8892a4' }}>{text}</div>;
  return (
    <div style={{ fontSize: '.9rem', fontWeight: 700, textAlign: 'center', padding: '.4rem', borderRadius: '.4rem', marginTop: '.5rem', background: ok ? '#0a1f10' : '#1f0a0a', border: `1px solid ${ok ? '#4ade80' : '#ef4444'}`, color: ok ? '#4ade80' : '#ef4444' }}>
      {text}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   TAB 1 — Páros gráf / BFS kétszínezés
══════════════════════════════════════════════════════════ */
type BipNode = { x: number; y: number; g: number };
type BipPreset = { nodes: BipNode[]; edges: [number, number][] };

const BIP_PRESETS: Record<string, BipPreset> = {
  k33: {
    nodes: [
      { x: 120, y: 80, g: 0 }, { x: 280, y: 80, g: 0 }, { x: 440, y: 80, g: 0 },
      { x: 120, y: 240, g: 1 }, { x: 280, y: 240, g: 1 }, { x: 440, y: 240, g: 1 },
    ],
    edges: [[0, 3], [0, 4], [0, 5], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]],
  },
  c6: {
    nodes: [
      { x: 280, y: 50, g: -1 }, { x: 440, y: 140, g: -1 }, { x: 440, y: 250, g: -1 },
      { x: 280, y: 330, g: -1 }, { x: 120, y: 250, g: -1 }, { x: 120, y: 140, g: -1 },
    ],
    edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]],
  },
  c5: {
    nodes: [
      { x: 280, y: 50, g: -1 }, { x: 440, y: 160, g: -1 }, { x: 370, y: 310, g: -1 },
      { x: 190, y: 310, g: -1 }, { x: 120, y: 160, g: -1 },
    ],
    edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]],
  },
  petersen: {
    nodes: [
      { x: 280, y: 40, g: -1 }, { x: 440, y: 160, g: -1 }, { x: 380, y: 310, g: -1 },
      { x: 180, y: 310, g: -1 }, { x: 120, y: 160, g: -1 },
      { x: 280, y: 130, g: -1 }, { x: 355, y: 190, g: -1 }, { x: 320, y: 280, g: -1 },
      { x: 240, y: 280, g: -1 }, { x: 205, y: 190, g: -1 },
    ],
    edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [5, 7], [6, 8], [7, 9], [8, 5], [9, 6], [0, 5], [1, 6], [2, 7], [3, 8], [4, 9]],
  },
};

function BipartiteCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [presetKey, setPresetKey] = useState<string>('k33');
  const [bipColor, setBipColor] = useState<number[]>(new Array(6).fill(-1));
  const [log, setLog] = useState('Indítsd el a BFS kétszínezést.');
  const [isBip, setIsBip] = useState<boolean | null>(null);
  const [odd, setOdd] = useState('—');

  const g = BIP_PRESETS[presetKey];

  const draw = useCallback((col: number[]) => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    ctx.clearRect(0, 0, cv.width, cv.height);
    g.edges.forEach(([u, v]) => {
      ctx.beginPath(); ctx.moveTo(g.nodes[u].x, g.nodes[u].y); ctx.lineTo(g.nodes[v].x, g.nodes[v].y);
      ctx.strokeStyle = '#2a3a50'; ctx.lineWidth = 1.5; ctx.stroke();
    });
    g.nodes.forEach((nd, i) => {
      const c = col[i] === 0 ? '#38bdf8' : col[i] === 1 ? '#4ade80' : '#1e2a38';
      ctx.beginPath(); ctx.arc(nd.x, nd.y, 16, 0, Math.PI * 2);
      ctx.fillStyle = c; ctx.fill();
      ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 1.5; ctx.stroke();
      ctx.fillStyle = col[i] >= 0 ? '#000' : '#fff';
      ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(col[i] === 0 ? 'A' : col[i] === 1 ? 'B' : String(i), nd.x, nd.y);
    });
  }, [presetKey, g]);

  useEffect(() => {
    const fresh = new Array(g.nodes.length).fill(-1);
    setBipColor(fresh);
    setIsBip(null);
    setOdd('—');
    setLog('Indítsd el a BFS kétszínezést.');
  }, [presetKey]);

  useEffect(() => { draw(bipColor); }, [bipColor, draw]);

  function runBFS() {
    const n = g.nodes.length;
    const adj: number[][] = Array.from({ length: n }, () => []);
    g.edges.forEach(([u, v]) => { adj[u].push(v); adj[v].push(u); });
    const col = new Array<number>(n).fill(-1);
    let isBipartite = true;
    for (let s = 0; s < n; s++) {
      if (col[s] >= 0) continue;
      col[s] = 0; const q = [s];
      while (q.length) {
        const v = q.shift()!;
        for (const u of adj[v]) {
          if (col[u] < 0) { col[u] = 1 - col[v]; q.push(u); }
          else if (col[u] === col[v]) { isBipartite = false; }
        }
      }
    }
    setBipColor(col);
    setIsBip(isBipartite);
    setOdd(isBipartite ? 'Nincs' : 'Van');
    setLog(isBipartite
      ? `Kétszínezés sikeres! A-csoport: ${col.map((c, i) => c === 0 ? i : -1).filter(x => x >= 0).join(',')} | B-csoport: ${col.map((c, i) => c === 1 ? i : -1).filter(x => x >= 0).join(',')}`
      : 'Páratlan kör detektálva — kétszínezés sikertelen.');
  }

  const presets: [string, string][] = [['k33', 'K₃,₃ (páros)'], ['c6', 'C₆ (páros)'], ['c5', 'C₅ (NEM páros)'], ['petersen', 'Petersen (NEM páros)']];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>BFS kétszínezés — párosság ellenőrzése</span>
        <div style={{ display: 'flex', gap: '.35rem', flexWrap: 'wrap', marginBottom: '.6rem' }}>
          {presets.map(([k, lbl]) => (
            <button key={k} className={`op-btn${presetKey === k ? ' is-active' : ''}`} onClick={() => setPresetKey(k)}>{lbl}</button>
          ))}
        </div>
        <canvas ref={canvasRef} width={560} height={320} style={{ width: '100%', maxWidth: 560, background: '#0a0f14', borderRadius: '.5rem' }} />
        <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
          <button className="op-btn" style={{ background: '#38bdf8', color: '#000', borderColor: '#38bdf8' }} onClick={runBFS}>BFS kétszínezés</button>
          <button className="op-btn" style={{ marginLeft: 'auto' }} onClick={() => { setBipColor(new Array(g.nodes.length).fill(-1)); setIsBip(null); setOdd('—'); setLog('Indítsd el a BFS kétszínezést.'); }}>Visszaállítás</button>
        </div>
        {logBox(log)}
      </div>
      <div>
        <div className="info-box" style={{ marginBottom: '.75rem' }}>
          <span className="lbl" style={{ color: '#38bdf8' }}>Eredmény</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '.4rem', marginBottom: '.5rem' }}>
            {metricBox(g.nodes.length, 'Csúcsok')}
            {metricBox(g.edges.length, 'Élek')}
            {metricBox(odd, 'Páratlan kör')}
          </div>
          {verdict(isBip, isBip === null ? '—' : isBip ? '✓ Kétpólusú (páros) gráf — nincs páratlan kör' : '✗ NEM kétpólusú — páratlan kör van!')}
        </div>
        <RichTex className="info-box" html={String.raw`
<span class="lbl" style="color:#38bdf8">Tétel</span>
<div style="font-size:.83rem;color:#c8d8e8;line-height:1.75">
<b style="color:#38bdf8">11.2. Tétel:</b> \(G\) kétpólusú (páros) \(\Leftrightarrow\) minden köre páros hosszúságú.<br><br>
BFS kétszínezés: csúcsokat felváltva A és B halmazba soroljuk. Ha él fut azonos halmazba → páratlan kör → nem páros.<br><br>
<b style="color:#38bdf8">Def.:</b> \(G=(V,E)\) kétpólusú, ha \(V=A\cup B\), \(A\cap B=\emptyset\), és minden él \(A\)–B között fut.
</div>`} />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   TAB 2 — Párosítás / augmentáló utak
══════════════════════════════════════════════════════════ */
type MatchPreset = { A: number[]; B: number[]; edges: [number, number][] };
const MATCH_PRESETS: Record<string, MatchPreset> = {
  small: { A: [0, 1, 2, 3], B: [4, 5, 6, 7], edges: [[0, 4], [0, 5], [1, 5], [1, 6], [2, 6], [2, 7], [3, 7]] },
  medium: { A: [0, 1, 2, 3, 4], B: [5, 6, 7, 8, 9], edges: [[0, 5], [0, 6], [1, 6], [1, 7], [2, 7], [2, 8], [3, 8], [3, 9], [4, 9], [4, 5]] },
  hall: { A: [0, 1, 2, 3], B: [4, 5, 6, 7], edges: [[0, 4], [0, 5], [1, 5], [2, 5], [3, 5], [3, 6]] },
};

function matchPos(side: number, idx: number, total: number, W: number, H: number): Pt {
  return { x: side === 0 ? 120 : W - 120, y: 60 + idx * (H - 120) / (total - 1 || 1) };
}

function MatchingCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [presetKey, setPresetKey] = useState<string>('small');
  const [matching, setMatching] = useState<[number, number][]>([]);
  const [log, setLog] = useState('Augmentáló utak keresése. Nyomj Lépés-t.');
  const [matchMax, setMatchMax] = useState<string>('—');

  const mg = MATCH_PRESETS[presetKey];

  const draw = useCallback((m: [number, number][]) => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    const posA = mg.A.map((_, i) => matchPos(0, i, mg.A.length, W, H));
    const posB = mg.B.map((_, i) => matchPos(1, i, mg.B.length, W, H));
    const pos = [...posA, ...posB];
    mg.edges.forEach(([u, v]) => {
      const inM = m.some(([a, b]) => (a === u && b === v) || (a === v && b === u));
      ctx.beginPath(); ctx.moveTo(pos[u].x, pos[u].y); ctx.lineTo(pos[v].x, pos[v].y);
      ctx.strokeStyle = inM ? '#4ade80' : '#2a3a50'; ctx.lineWidth = inM ? 3 : 1.5; ctx.stroke();
    });
    const matchedV = new Set(m.flat());
    [...mg.A, ...mg.B].forEach((v, vi) => {
      const p = pos[v];
      ctx.beginPath(); ctx.arc(p.x, p.y, 14, 0, Math.PI * 2);
      ctx.fillStyle = matchedV.has(v) ? '#1a4a1a' : '#1e2a38'; ctx.fill();
      ctx.strokeStyle = vi < mg.A.length ? '#38bdf8' : '#4ade80'; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = '#fff'; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(String(v), p.x, p.y);
    });
    ctx.fillStyle = '#38bdf8'; ctx.font = '12px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('A (bal pólus)', 120, 20);
    ctx.fillStyle = '#4ade80'; ctx.fillText('B (jobb pólus)', W - 120, 20);
  }, [presetKey, mg]);

  useEffect(() => {
    setMatching([]); setMatchMax('—');
    setLog('Augmentáló utak keresése. Nyomj Lépés-t.');
  }, [presetKey]);

  useEffect(() => { draw(matching); }, [matching, draw]);

  function augPath(m: [number, number][]): [number, number][] | null {
    const matchedL = new Map(m.map(([a, b]) => [a, b]));
    const matchedR = new Map(m.map(([a, b]) => [b, a]));
    const adj: Record<number, number[]> = {};
    [...mg.A, ...mg.B].forEach(v => { adj[v] = []; });
    mg.edges.forEach(([u, v]) => { adj[u].push(v); adj[v].push(u); });
    for (const src of mg.A) {
      if (matchedL.has(src)) continue;
      const prev = new Map<number, number | null>([[src, null]]);
      const q = [src];
      let found: number | null = null;
      outer: while (q.length) {
        const u = q.shift()!;
        for (const v of adj[u]) {
          if (mg.A.includes(u)) {
            if (!prev.has(v)) {
              prev.set(v, u);
              if (!matchedR.has(v)) { found = v; break outer; }
              const u2 = matchedR.get(v)!;
              if (!prev.has(u2)) { prev.set(u2, v); q.push(u2); }
            }
          }
        }
      }
      if (found !== null) {
        const newM = [...m];
        let v: number | null = found;
        while (v !== null) {
          const u: number | null = prev.get(v)!;
          if (u !== null) {
            const idx = newM.findIndex(([a, b]) => (a === u && b === v) || (a === v && b === u));
            if (idx >= 0) newM.splice(idx, 1); else newM.push([u as number, v]);
          }
          v = u !== null ? (prev.get(u) ?? null) : null;
        }
        return newM as [number, number][];
      }
    }
    return null;
  }

  function step() {
    const newM = augPath(matching);
    if (newM) { setMatching(newM); setLog(`Augmentáló út találva! Párosítás mérete: ${newM.length}.`); }
    else { setLog(`Nincs több augmentáló út. Maximum párosítás: ${matching.length}.`); setMatchMax(String(matching.length)); }
  }

  function runAll() {
    let m = matching;
    let newM = augPath(m);
    while (newM) { m = newM; newM = augPath(m); }
    setMatching(m);
    setLog(`Maximum párosítás: ${m.length}.`);
    setMatchMax(String(m.length));
  }

  const presets: [string, string][] = [['small', '4+4 gráf'], ['medium', '5+5 gráf'], ['hall', 'Hall-példa']];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>Maximális párosítás — augmentáló utak</span>
        <div style={{ display: 'flex', gap: '.35rem', flexWrap: 'wrap', marginBottom: '.6rem' }}>
          {presets.map(([k, lbl]) => (
            <button key={k} className={`op-btn${presetKey === k ? ' is-active' : ''}`} onClick={() => setPresetKey(k)}>{lbl}</button>
          ))}
        </div>
        <canvas ref={canvasRef} width={560} height={300} style={{ width: '100%', maxWidth: 560, background: '#0a0f14', borderRadius: '.5rem' }} />
        <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
          <button className="op-btn" style={{ background: '#38bdf8', color: '#000', borderColor: '#38bdf8' }} onClick={step}>Lépés</button>
          <button className="op-btn" style={{ background: '#38bdf8', color: '#000', borderColor: '#38bdf8' }} onClick={runAll}>Teljes futtatás</button>
          <button className="op-btn" style={{ marginLeft: 'auto' }} onClick={() => { setMatching([]); setMatchMax('—'); setLog('Augmentáló utak keresése. Nyomj Lépés-t.'); }}>Vissza</button>
        </div>
        {logBox(log)}
      </div>
      <div>
        <div className="info-box" style={{ marginBottom: '.75rem' }}>
          <span className="lbl" style={{ color: '#38bdf8' }}>Állapot</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.4rem', marginBottom: '.5rem' }}>
            {metricBox(matching.length, 'Párosítás mérete')}
            {metricBox(matchMax, 'Maximum')}
          </div>
          <div style={{ fontSize: '.8rem', color: '#8ba3bc', lineHeight: 1.6 }}>
            {matching.map(([a, b]) => `${a}–${b}`).join(', ')}
          </div>
        </div>
        <RichTex className="info-box" html={String.raw`
<span class="lbl" style="color:#38bdf8">Algoritmus</span>
<table style="width:100%;border-collapse:collapse;font-size:.82rem">
<thead><tr>
<th style="background:#1a2233;color:#38bdf8;padding:.4rem .6rem;text-align:left">Lépés</th>
<th style="background:#1a2233;color:#38bdf8;padding:.4rem .6rem;text-align:left">Leírás</th>
</tr></thead>
<tbody>
<tr><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">1.</td><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Indul üres M párosítással</td></tr>
<tr><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">2.</td><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">BFS: szabad A-csúcsból augmentáló utat keres</td></tr>
<tr><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">3.</td><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Ha talál: felváltja M és M∖élek az úton</td></tr>
<tr><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">4.</td><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Ha nincs aug. út: M maximális</td></tr>
</tbody></table>`} />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   TAB 3 — Hall-tétel
══════════════════════════════════════════════════════════ */
const HALL_A = [0, 1, 2, 3];
const HALL_B = [4, 5, 6, 7];
type HallRow = { X: number[]; N: number; ok: boolean };

function hallPos(i: number, side: number, W: number, H: number): Pt {
  return { x: side === 0 ? 120 : W - 120, y: 60 + i * (H - 120) / 3 };
}

function HallCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [edges, setEdges] = useState<[number, number][]>([[0, 4], [0, 5], [1, 5], [1, 6], [2, 6], [2, 7], [3, 4], [3, 7]]);
  const [rows, setRows] = useState<HallRow[]>([]);
  const [hallOk, setHallOk] = useState<boolean | null>(null);
  const [log, setLog] = useState('A kék csúcsok az A halmazban, a zöldek B-ben.');

  const draw = useCallback((e: [number, number][]) => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    e.forEach(([u, v]) => {
      const pu = hallPos(u, 0, W, H), pv = hallPos(v - 4, 1, W, H);
      ctx.beginPath(); ctx.moveTo(pu.x, pu.y); ctx.lineTo(pv.x, pv.y);
      ctx.strokeStyle = '#2a3a50'; ctx.lineWidth = 1.5; ctx.stroke();
    });
    HALL_A.forEach(v => {
      const p = hallPos(v, 0, W, H);
      ctx.beginPath(); ctx.arc(p.x, p.y, 14, 0, Math.PI * 2);
      ctx.fillStyle = '#1e2a38'; ctx.fill();
      ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 1.5; ctx.stroke();
      ctx.fillStyle = '#fff'; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(String(v), p.x, p.y);
    });
    HALL_B.forEach(v => {
      const p = hallPos(v - 4, 1, W, H);
      ctx.beginPath(); ctx.arc(p.x, p.y, 14, 0, Math.PI * 2);
      ctx.fillStyle = '#1e2a38'; ctx.fill();
      ctx.strokeStyle = '#4ade80'; ctx.lineWidth = 1.5; ctx.stroke();
      ctx.fillStyle = '#fff'; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(String(v), p.x, p.y);
    });
  }, []);

  useEffect(() => { draw(edges); }, [edges, draw]);

  function neighbors(X: number[]): Set<number> {
    const N = new Set<number>();
    X.forEach(v => edges.filter(([u]) => u === v).forEach(([, w]) => N.add(w)));
    return N;
  }

  function check() {
    const subsets: HallRow[] = [];
    for (let mask = 1; mask < (1 << 4); mask++) {
      const X = HALL_A.filter((_, i) => mask & (1 << i));
      const N = neighbors(X).size;
      subsets.push({ X, N, ok: N >= X.length });
    }
    const allOk = subsets.every(s => s.ok);
    setRows(subsets);
    setHallOk(allOk);
  }

  function random() {
    const newEdges: [number, number][] = [];
    for (let a = 0; a < 4; a++) for (let b = 4; b < 8; b++) if (Math.random() < 0.45) newEdges.push([a, b]);
    setEdges(newEdges);
    setRows([]);
    setHallOk(null);
    setLog('Új véletlenszerű gráf. Ellenőrizd a Hall-feltételt!');
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>Hall-feltétel |N(X)| ≥ |X| ellenőrző</span>
        <canvas ref={canvasRef} width={560} height={300} style={{ width: '100%', maxWidth: 560, background: '#0a0f14', borderRadius: '.5rem' }} />
        <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
          <button className="op-btn" style={{ background: '#38bdf8', color: '#000', borderColor: '#38bdf8' }} onClick={check}>Hall-feltétel ellenőrzése</button>
          <button className="op-btn" onClick={random}>Véletlenszerű gráf</button>
          <button className="op-btn" style={{ marginLeft: 'auto' }} onClick={() => { setRows([]); setHallOk(null); setLog('A kék csúcsok az A halmazban, a zöldek B-ben.'); }}>Vissza</button>
        </div>
        {logBox(log)}
      </div>
      <div>
        <RichTex className="info-box" html={String.raw`
<span class="lbl" style="color:#38bdf8">Hall-tétel (11.6.)</span>
<div style="font-size:.84rem;color:#c8d8e8;line-height:1.8">
Legyen \(G=(V_1\cup V_2,E)\) kétpólusú, \(|V_1|=m\).<br><br>
Pontosan akkor létezik \(m\) élből álló párosítás, ha minden \(X\subseteq V_1\)-re:
\[|N(X)| \ge |X|\]
Ez a <b style="color:#38bdf8">Hall-feltétel</b> (házasítási feltétel).<br><br>
<b>Ha mindkét pólus teljesíti → 1-faktor (teljes párosítás).</b>
</div>`} />
        {hallOk !== null && verdict(hallOk, hallOk ? '✓ Hall-feltétel teljesül — létezik teljes párosítás!' : '✗ Hall-feltétel NEM teljesül — nincs teljes párosítás')}
        {rows.length > 0 && (
          <div className="info-box" style={{ marginTop: '.75rem', overflowX: 'auto' }}>
            <span className="lbl" style={{ color: '#38bdf8' }}>Szükséges feltételek összefoglalója</span>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.78rem' }}>
              <thead><tr>{['X', '|X|', '|N(X)|', 'OK?'].map(h => <th key={h} style={{ background: '#1a2233', color: '#38bdf8', padding: '.3rem .5rem', textAlign: 'center' }}>{h}</th>)}</tr></thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i}>
                    <td style={{ padding: '.3rem .5rem', borderTop: '1px solid #1e2a38', color: '#c8d8e8' }}>{'{' + r.X.join(',') + '}'}</td>
                    <td style={{ padding: '.3rem .5rem', borderTop: '1px solid #1e2a38', color: '#c8d8e8', textAlign: 'center' }}>{r.X.length}</td>
                    <td style={{ padding: '.3rem .5rem', borderTop: '1px solid #1e2a38', color: '#c8d8e8', textAlign: 'center' }}>{r.N}</td>
                    <td style={{ padding: '.3rem .5rem', borderTop: '1px solid #1e2a38', color: r.ok ? '#4ade80' : '#ef4444', textAlign: 'center' }}>{r.ok ? '✓' : '✗'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   TAB 4 — König-tétel
══════════════════════════════════════════════════════════ */
const KON_A = [0, 1, 2];
const KON_B = [3, 4, 5];
const KON_E: [number, number][] = [[0, 3], [0, 4], [1, 4], [1, 5], [2, 3], [2, 5]];

function konPos(i: number, side: number, W: number, H: number): Pt {
  return { x: side === 0 ? 150 : W - 150, y: 60 + i * (H - 120) / 2 };
}

function KonigCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [konMatch, setKonMatch] = useState<[number, number][]>([]);
  const [konCover, setKonCover] = useState<number[]>([]);
  const [log, setLog] = useState('A König-tétel bizonyítja: páros gráfban a minimum lefogó csúcsrendszer = maximum párosítás.');
  const [nuVal, setNuVal] = useState<string>('—');
  const [tauVal, setTauVal] = useState<string>('—');
  const [ok, setOk] = useState<boolean | null>(null);

  const draw = useCallback((m: [number, number][], cover: number[]) => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    KON_E.forEach(([u, v]) => {
      const inM = m.some(([a, b]) => a === u && b === v);
      ctx.beginPath(); ctx.moveTo(konPos(u, 0, W, H).x, konPos(u, 0, W, H).y); ctx.lineTo(konPos(v - 3, 1, W, H).x, konPos(v - 3, 1, W, H).y);
      ctx.strokeStyle = inM ? '#4ade80' : '#2a3a50'; ctx.lineWidth = inM ? 3 : 1.5; ctx.stroke();
    });
    KON_A.forEach((v, i) => {
      const p = konPos(i, 0, W, H), inC = cover.includes(v);
      ctx.beginPath(); ctx.arc(p.x, p.y, 16, 0, Math.PI * 2);
      ctx.fillStyle = inC ? '#7c2d12' : '#1e2a38'; ctx.fill();
      ctx.strokeStyle = inC ? '#f97316' : '#38bdf8'; ctx.lineWidth = inC ? 3 : 1.5; ctx.stroke();
      ctx.fillStyle = '#fff'; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(String(v), p.x, p.y);
    });
    KON_B.forEach((v, i) => {
      const p = konPos(i, 1, W, H), inC = cover.includes(v);
      ctx.beginPath(); ctx.arc(p.x, p.y, 16, 0, Math.PI * 2);
      ctx.fillStyle = inC ? '#7c2d12' : '#1e2a38'; ctx.fill();
      ctx.strokeStyle = inC ? '#f97316' : '#4ade80'; ctx.lineWidth = inC ? 3 : 1.5; ctx.stroke();
      ctx.fillStyle = '#fff'; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(String(v), p.x, p.y);
    });
    ctx.fillStyle = '#38bdf8'; ctx.font = '11px sans-serif'; ctx.textAlign = 'center'; ctx.fillText('A pólus', 150, 20);
    ctx.fillStyle = '#4ade80'; ctx.fillText('B pólus', W - 150, 20);
    if (cover.length) { ctx.fillStyle = '#f97316'; ctx.fillText('Narancs = lefogó csúcs', W / 2, 20); }
  }, []);

  useEffect(() => { draw(konMatch, konCover); }, [konMatch, konCover, draw]);

  function run() {
    const matchL = new Map<number, number>(), matchR = new Map<number, number>();
    function aug(v: number, visited: Set<number>): boolean {
      for (const [u, w] of KON_E) {
        if (u !== v) continue;
        if (visited.has(w)) continue;
        visited.add(w);
        if (!matchR.has(w) || aug(matchR.get(w)!, visited)) { matchL.set(v, w); matchR.set(w, v); return true; }
      }
      return false;
    }
    KON_A.forEach(v => aug(v, new Set()));
    const newMatch = [...matchL.entries()].map(([a, b]) => [a, b] as [number, number]);
    // König cover
    const U = new Set(KON_A.filter(v => !matchL.has(v)));
    const alternating = new Set(U);
    let changed = true;
    while (changed) {
      changed = false;
      for (const [u, v] of KON_E) {
        if (alternating.has(u) && !alternating.has(v)) { alternating.add(v); changed = true; }
        if (alternating.has(v) && !alternating.has(u) && matchR.has(v) && !alternating.has(matchR.get(v)!)) { alternating.add(matchR.get(v)!); changed = true; }
      }
    }
    const cover = [...KON_A.filter(v => !alternating.has(v)), ...KON_B.filter(v => alternating.has(v))];
    setKonMatch(newMatch);
    setKonCover(cover);
    setNuVal(String(newMatch.length));
    setTauVal(String(cover.length));
    setOk(newMatch.length === cover.length);
    setLog(`Max párosítás: ${newMatch.length} él. Min lefogó csúcsrendszer: {${cover.join(',')}} (${cover.length} csúcs). ν=τ!`);
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>König-tétel: ν(G)=τ(G) demonstráció</span>
        <canvas ref={canvasRef} width={560} height={300} style={{ width: '100%', maxWidth: 560, background: '#0a0f14', borderRadius: '.5rem' }} />
        <div style={{ display: 'flex', gap: '.5rem', marginTop: '.5rem' }}>
          <button className="op-btn" style={{ background: '#38bdf8', color: '#000', borderColor: '#38bdf8' }} onClick={run}>König algoritmus</button>
          <button className="op-btn" style={{ marginLeft: 'auto' }} onClick={() => { setKonMatch([]); setKonCover([]); setNuVal('—'); setTauVal('—'); setOk(null); setLog('A König-tétel bizonyítja: páros gráfban a minimum lefogó csúcsrendszer = maximum párosítás.'); }}>Vissza</button>
        </div>
        {logBox(log)}
      </div>
      <div>
        <div className="info-box" style={{ marginBottom: '.75rem' }}>
          <span className="lbl" style={{ color: '#38bdf8' }}>Eredmény</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.4rem', marginBottom: '.5rem' }}>
            {metricBox(nuVal, 'ν(G) max párosítás')}
            {metricBox(tauVal, 'τ(G) min lefogó')}
          </div>
          {verdict(ok, ok === null ? '—' : `✓ ν(G)=τ(G)=${nuVal} — König-tétel igazolva!`)}
        </div>
        <RichTex className="info-box" html={String.raw`
<span class="lbl" style="color:#38bdf8">König-tétel (11.8.)</span>
<div style="font-size:.84rem;color:#c8d8e8;line-height:1.8">
<b style="color:#38bdf8">Páros gráfban:</b>
\[\nu(G) = \tau(G)\]
azaz a minimum lefogó csúcsrendszer (\(\tau\)) mérete egyenlő a maximum párosítás (\(\nu\)) méretével.<br><br>
Nem páros gráfban ez általában nem igaz (pl. \(C_5\): \(\nu=2\), \(\tau=3\)).
</div>`} />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   TAB 5 — Magyar módszer
══════════════════════════════════════════════════════════ */
const HUNG_N = 4;
const HUNG_COST = [[9, 2, 7, 8], [6, 4, 3, 7], [5, 8, 1, 8], [7, 6, 9, 4]];

function HungarianCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [assign, setAssign] = useState<[number, number][]>([]);
  const [matrix, setMatrix] = useState('Eredeti súlymátrix:\n' + HUNG_COST.map(r => r.join('  ')).join('\n'));
  const [result, setResult] = useState('—');
  const [log, setLog] = useState('Lépések: sor-redukció, oszlop-redukció, párosítás.');

  const draw = useCallback((asgn: [number, number][]) => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    const cx = W / 2, r = 130;
    const aPos = Array.from({ length: HUNG_N }, (_, i) => ({ x: cx - r, y: 80 + i * 60 }));
    const bPos = Array.from({ length: HUNG_N }, (_, i) => ({ x: cx + r, y: 80 + i * 60 }));
    for (let i = 0; i < HUNG_N; i++) for (let j = 0; j < HUNG_N; j++) {
      const inA = asgn.some(([a, b]) => a === i && b === j);
      ctx.beginPath(); ctx.moveTo(aPos[i].x, aPos[i].y); ctx.lineTo(bPos[j].x, bPos[j].y);
      ctx.strokeStyle = inA ? '#4ade80' : 'rgba(42,58,80,0.5)'; ctx.lineWidth = inA ? 3 : 1; ctx.stroke();
    }
    aPos.forEach((p, i) => {
      ctx.beginPath(); ctx.arc(p.x, p.y, 16, 0, Math.PI * 2); ctx.fillStyle = '#1e3a5f'; ctx.fill();
      ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 1.5; ctx.stroke();
      ctx.fillStyle = '#fff'; ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(`W${i + 1}`, p.x, p.y);
    });
    bPos.forEach((p, i) => {
      const inA = asgn.some(([a, b]) => b === i);
      ctx.beginPath(); ctx.arc(p.x, p.y, 16, 0, Math.PI * 2); ctx.fillStyle = inA ? '#1a4a1a' : '#1e2a38'; ctx.fill();
      ctx.strokeStyle = '#4ade80'; ctx.lineWidth = 1.5; ctx.stroke();
      ctx.fillStyle = '#fff'; ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(`J${i + 1}`, p.x, p.y);
    });
  }, []);

  useEffect(() => { draw(assign); }, [assign, draw]);

  function runHungarian() {
    const n = HUNG_N;
    const C = HUNG_COST.map(row => [...row]);
    for (let i = 0; i < n; i++) { const m = Math.min(...C[i]); C[i] = C[i].map(v => v - m); }
    for (let j = 0; j < n; j++) { const m = Math.min(...C.map(r => r[j])); C.forEach(row => { row[j] -= m; }); }
    const asgn = new Array(n).fill(-1), asgnJ = new Array(n).fill(-1);
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) if (C[i][j] === 0 && asgn[i] < 0 && asgnJ[j] < 0) { asgn[i] = j; asgnJ[j] = i; }
    const newAssign: [number, number][] = asgn.map((j, i) => [i, j] as [number, number]).filter(([, j]) => j >= 0);
    const total = newAssign.reduce((s, [i, j]) => s + HUNG_COST[i][j], 0);
    setAssign(newAssign);
    setMatrix('Redukált mátrix:\n' + C.map(r => r.join('  ')).join('\n'));
    setResult(newAssign.map(([i, j]) => `W${i + 1}→J${j + 1} (${HUNG_COST[i][j]})`).join('\n') + `\nÖsszköltsé: ${total}`);
    setLog(`Optimális kiosztás megtalálva. Összköltség: ${total}.`);
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div className="info-box">
        <span className="lbl" style={{ color: '#38bdf8' }}>Magyar módszer — súlyozott párosítás</span>
        <canvas ref={canvasRef} width={460} height={320} style={{ width: '100%', maxWidth: 460, background: '#0a0f14', borderRadius: '.5rem' }} />
        <div style={{ display: 'flex', gap: '.5rem', marginTop: '.5rem' }}>
          <button className="op-btn" style={{ background: '#38bdf8', color: '#000', borderColor: '#38bdf8' }} onClick={runHungarian}>Optimum</button>
          <button className="op-btn" style={{ marginLeft: 'auto' }} onClick={() => { setAssign([]); setMatrix('Eredeti súlymátrix:\n' + HUNG_COST.map(r => r.join('  ')).join('\n')); setResult('—'); setLog('Lépések: sor-redukció, oszlop-redukció, párosítás.'); }}>Vissza</button>
        </div>
        {logBox(log)}
      </div>
      <div>
        <div className="info-box" style={{ marginBottom: '.75rem' }}>
          <span className="lbl" style={{ color: '#38bdf8' }}>Súlymátrix</span>
          <pre style={{ fontFamily: 'monospace', fontSize: '.8rem', color: '#c8d8e8', marginTop: '.5rem', whiteSpace: 'pre' }}>{matrix}</pre>
        </div>
        <div className="info-box" style={{ marginBottom: '.75rem' }}>
          <span className="lbl" style={{ color: '#38bdf8' }}>Eredmény</span>
          <pre style={{ fontFamily: 'monospace', fontSize: '.8rem', color: result.includes('Összköltség') || result.includes('Összköltsé') ? '#4ade80' : '#c8d8e8', margin: '.3rem 0', whiteSpace: 'pre' }}>{result}</pre>
        </div>
        <RichTex className="info-box" html={String.raw`
<span class="lbl" style="color:#38bdf8">Algoritmus lépései</span>
<table style="width:100%;border-collapse:collapse;font-size:.82rem">
<thead><tr>
<th style="background:#1a2233;color:#38bdf8;padding:.4rem .6rem;text-align:left">Fázis</th>
<th style="background:#1a2233;color:#38bdf8;padding:.4rem .6rem;text-align:left">Leírás</th>
</tr></thead>
<tbody>
<tr><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">1. Redukció</td><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Minden sor minimuma kivonva; majd oszlopoké</td></tr>
<tr><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">2. Lefedés</td><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Min. vonalszám, ami lefedi a 0-kat</td></tr>
<tr><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">3. Módosítás</td><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Ha vonalszám &lt; n: legkisebb nem fedett − min</td></tr>
<tr><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">4. Párosítás</td><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Ha vonalszám = n: független nullák = optimum</td></tr>
</tbody></table>
<div style="margin-top:.75rem">
<span class="lbl" style="color:#38bdf8">Alkalmazások</span>
<table style="width:100%;border-collapse:collapse;font-size:.82rem">
<thead><tr>
<th style="background:#1a2233;color:#38bdf8;padding:.4rem .6rem;text-align:left">Feladat</th>
<th style="background:#1a2233;color:#38bdf8;padding:.4rem .6rem;text-align:left">Megoldás</th>
</tr></thead>
<tbody>
<tr><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Munkás-munka kiosztás</td><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Min. költség teljes párosítás</td></tr>
<tr><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Statikai ridegség</td><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Laman-tétel: kétpólusú gráf rang</td></tr>
<tr><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Ütemezés</td><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Job scheduling min. makespan</td></tr>
<tr><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Szállítási prob.</td><td style="padding:.4rem .6rem;border-top:1px solid #1e2a38;color:#c8d8e8">Hálózati folyam + König</td></tr>
</tbody></table>
</div>`} />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   Root component
══════════════════════════════════════════════════════════ */
const TABS: Tab[] = [
  { id: 'bip', label: 'Páros gráf', content: <BipartiteCanvas /> },
  { id: 'match', label: 'Párosítás', content: <MatchingCanvas /> },
  { id: 'hall', label: 'Hall-tétel', content: <HallCanvas /> },
  { id: 'konig', label: 'König-tétel', content: <KonigCanvas /> },
  { id: 'hung', label: 'Magyar módszer', content: <HungarianCanvas /> },
];

export default function DimatCh19() {
  return (
    <div className="ila">
      <Link to="/dimat" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika — 19. fejezet</p>
      <h1 className="ila__title">Kétpólusú gráfok</h1>
      <p className="ila__cite">Hartung Ferenc · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
