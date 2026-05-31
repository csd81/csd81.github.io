import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, Cols, type Tab } from '../../ila/components/kit';

// ── BigInt Fibonacci ──
function fibBig(n: number): bigint {
  let a = 0n, b = 1n;
  for (let i = 0; i < n; i++) { const t = a + b; a = b; b = t; }
  return a;
}

function isPrime(x: number): boolean {
  if (x < 2) return false;
  for (let i = 2; i <= Math.sqrt(x); i++) if (x % i === 0) return false;
  return true;
}

// ── Tab 1: Geometriai rekurzió ──
function GeoRecursion() {
  const [a0, setA0] = useState(1);
  const [r, setR] = useState(2);
  const [computed, setComputed] = useState(false);

  const rows = Array.from({ length: 10 }, (_, i) => ({ i, val: a0 * Math.pow(r, i) }));

  return (
    <div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#10b981' }}>Interaktív — Geometriai rekurzió</span>
        <p style={{ fontSize: '.82rem', color: '#94a3b8', margin: '.3rem 0' }}>a_{'{n+1}'} = r · a_n, adja meg a₀ és r értékét:</p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', margin: '.4rem 0', fontSize: '.85rem', alignItems: 'center' }}>
          <span>a₀ = <input type="number" className="ila-num" value={a0} onChange={(e) => setA0(+e.target.value)} /></span>
          <span>r = <input type="number" className="ila-num" value={r} onChange={(e) => setR(+e.target.value)} /></span>
          <button className="op-btn" style={{ borderColor: '#10b981', color: '#34d399' }} onClick={() => setComputed(true)}>Számít</button>
        </div>
        {computed && (
          <div>
            <table className="cayley" style={{ width: '100%' }}>
              <thead><tr><th>n</th><th>a_n</th><th>r^n · a₀</th></tr></thead>
              <tbody>
                {rows.map(({ i, val }) => (
                  <tr key={i}>
                    <td>{i}</td>
                    <td style={{ color: '#34d399' }}>{+val.toFixed(6)}</td>
                    <td style={{ color: '#64748b' }}>{a0}·{r}^{i}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <RichTex key={`${a0}${r}`} html={String.raw`<p style="font-size:.82rem;color:#94a3b8;margin-top:.5rem;">Általános képlet: \(a_n = ${a0} \cdot ${r}^n\)</p>`} />
          </div>
        )}
      </div>
    </div>
  );
}

// ── Tab 2: Lineáris rekurzió megoldó ──
function LinRecSolver() {
  const [c1, setC1] = useState(5);
  const [c2, setC2] = useState(-6);
  const [la0, setLa0] = useState(1);
  const [la1, setLa1] = useState(1);
  const [computed, setComputed] = useState(false);

  const disc = c1 * c1 + 4 * c2;
  const r1 = (c1 + Math.sqrt(disc)) / 2;
  const r2 = (c1 - Math.sqrt(disc)) / 2;

  const seq = [la0, la1];
  for (let i = 2; i < 10; i++) seq.push(c1 * seq[i - 1] + c2 * seq[i - 2]);

  const charHtml = String.raw`Karakterisztikus egyenlet: \(x^2 - ${c1}x - (${c2}) = 0\)`;
  const discHtml = String.raw`Diszkrimináns: \(D = ${c1}^2 + 4\cdot(${c2}) = ${disc}\)`;
  const rootHtml = disc >= 0
    ? String.raw`Gyökök: \(r_1=${+r1.toFixed(4)},\; r_2=${+r2.toFixed(4)}\)`
    : '';

  return (
    <div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#10b981' }}>Interaktív lineáris rekurzió megoldó</span>
        <p style={{ fontSize: '.82rem', color: '#94a3b8', margin: '.3rem 0' }}>a_n = c₁·a_{'{n-1}'} + c₂·a_{'{n-2}'}:</p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', margin: '.4rem 0', fontSize: '.85rem', alignItems: 'center' }}>
          <span>c₁ = <input type="number" className="ila-num" value={c1} onChange={(e) => setC1(+e.target.value)} /></span>
          <span>c₂ = <input type="number" className="ila-num" value={c2} onChange={(e) => setC2(+e.target.value)} /></span>
          <span>a₀ = <input type="number" className="ila-num" value={la0} onChange={(e) => setLa0(+e.target.value)} /></span>
          <span>a₁ = <input type="number" className="ila-num" value={la1} onChange={(e) => setLa1(+e.target.value)} /></span>
          <button className="op-btn" style={{ borderColor: '#10b981', color: '#34d399' }} onClick={() => setComputed(true)}>Számít</button>
        </div>
        {computed && (
          <div>
            <RichTex key={`char${c1}${c2}`} html={`<p style="font-size:.82rem;color:#94a3b8;">${charHtml}</p>`} />
            <RichTex key={`disc${c1}${c2}`} html={`<p style="font-size:.82rem;color:#94a3b8;">${discHtml}</p>`} />
            {disc < 0
              ? <div className="warn-box">Komplex gyökök — a sorozat oszcillál.</div>
              : <RichTex key={`roots${c1}${c2}`} html={`<p style="font-size:.82rem;color:#94a3b8;">${rootHtml}</p>`} />
            }
            <table className="cayley" style={{ width: '100%' }}>
              <thead><tr><th>n</th><th>a_n</th></tr></thead>
              <tbody>
                {seq.map((v, i) => <tr key={i}><td>{i}</td><td style={{ color: '#34d399' }}>{+v.toFixed(4)}</td></tr>)}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Tab 3: Fibonacci spiral canvas ──
function FibSpiralCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.fillStyle = '#0d1117'; ctx.fillRect(0, 0, W, H);
    const fibs = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
    const scale = 2.5;
    const colors = ['#10b981', '#34d399', '#059669', '#38bdf8', '#818cf8', '#f59e0b', '#ef4444', '#e879f9', '#10b981', '#34d399', '#059669'];
    const dirs = [[1, 0], [0, -1], [-1, 0], [0, 1]];
    let dir = 0, cx = W / 2 - 30, cy = H / 2 - 20;
    fibs.forEach((f, i) => {
      const s = f * scale;
      ctx.strokeStyle = colors[i % colors.length]; ctx.lineWidth = 1.5;
      ctx.strokeRect(cx, cy, s * (dirs[dir][0] || 1) * Math.sign(dirs[dir][0] || 1), s * (dirs[dir][1] || 1) * Math.sign(dirs[dir][1] || 1));
      ctx.beginPath();
      const [dx, dy] = dirs[dir]; void dx; void dy;
      let ax = cx, ay = cy;
      if (dir === 0) { ax = cx; ay = cy + s; }
      else if (dir === 1) { ax = cx + s; ay = cy + s; }
      else if (dir === 2) { ax = cx + s; ay = cy; }
      else { ax = cx; ay = cy; }
      ctx.arc(ax, ay, s, (dir + 2) * Math.PI / 2, (dir + 3) * Math.PI / 2);
      ctx.stroke();
      if (dir === 0) cx += s; else if (dir === 1) cy -= s; else if (dir === 2) cx -= s; else cy += s;
      dir = (dir + 1) % 4;
    });
    ctx.fillStyle = '#94a3b8'; ctx.font = '11px monospace'; ctx.fillText('φ ≈ 1.6180339887…', 8, H - 8);
  }, []);
  return <canvas ref={ref} width={380} height={220} style={{ width: '100%', maxWidth: 380, borderRadius: 8, background: '#0d1117' }} />;
}

function FibTab() {
  const [fibN, setFibN] = useState(30);
  const [fibResult, setFibResult] = useState<{ exact: string; binet: number } | null>(null);

  const fibs20 = Array.from({ length: 21 }, (_, i) => ({ i, val: fibBig(i).toString() }));
  const convRows = Array.from({ length: 11 }, (_, i) => i + 2).map((i) => {
    const fn = Number(fibBig(i)), fn1 = Number(fibBig(i - 1));
    return { i, fn, ratio: fn1 ? +(fn / fn1).toFixed(7) : '—' };
  });

  function calcFib() {
    const nn = Math.max(0, Math.min(200, fibN));
    const exact = fibBig(nn).toString();
    const phi = (1 + Math.sqrt(5)) / 2;
    const binet = Math.round(Math.pow(phi, nn) / Math.sqrt(5));
    setFibResult({ exact, binet });
  }

  return (
    <div>
      <Cols>
        <div>
          <div className="info-box">
            <span className="lbl" style={{ color: '#10b981' }}>F₀ … F₂₀ táblázat</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem', marginTop: '.4rem' }}>
              {fibs20.map(({ i, val }) => (
                <div key={i} style={{ background: '#1a1f2e', borderRadius: 6, padding: '.3rem .5rem', fontSize: '.78rem', fontFamily: 'monospace', textAlign: 'center' }}>
                  <div style={{ color: '#64748b' }}>F<sub>{i}</sub></div>
                  <div style={{ color: '#34d399' }}>{val}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="info-box">
            <span className="lbl" style={{ color: '#10b981' }}>Konvergencia: F_n/F_{'{n-1}'} → φ</span>
            <table className="cayley" style={{ width: '100%' }}>
              <thead><tr><th>n</th><th>F_n</th><th>F_n/F_{'{n-1}'}</th></tr></thead>
              <tbody>
                {convRows.map(({ i, fn, ratio }) => (
                  <tr key={i}><td>{i}</td><td>{fn}</td><td style={{ color: '#34d399' }}>{ratio}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <div className="info-box">
            <span className="lbl" style={{ color: '#10b981' }}>Interaktív F_n számítás</span>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', margin: '.4rem 0', fontSize: '.85rem' }}>
              <span>n = <input type="number" min={0} max={200} className="ila-num" style={{ width: 80 }} value={fibN} onChange={(e) => setFibN(+e.target.value)} /></span>
              <button className="op-btn" style={{ borderColor: '#10b981', color: '#34d399' }} onClick={calcFib}>Számít</button>
            </div>
            {fibResult && (
              <div>
                <p style={{ fontSize: '.84rem', color: '#e2e8f0' }}>F<sub>{fibN}</sub> = <span style={{ color: '#34d399', fontFamily: 'monospace' }}>{fibResult.exact}</span></p>
                <p style={{ fontSize: '.82rem', color: '#64748b' }}>Binet-közelítés (kerekítve): {fibResult.binet}</p>
              </div>
            )}
          </div>
          <div className="info-box">
            <span className="lbl" style={{ color: '#10b981' }}>Fibonacci-spirál</span>
            <FibSpiralCanvas />
          </div>
        </div>
      </Cols>
    </div>
  );
}

// ── Tab 4: Hanoi, Mersenne, Ackermann ──
function NotableRecursions() {
  const [hanoiN, setHanoiN] = useState(10);
  const [hanoiResult, setHanoiResult] = useState<string | null>(null);
  const [mersP, setMersP] = useState(7);
  const [mersResult, setMersResult] = useState<string | null>(null);
  const [ackM, setAckM] = useState(3);
  const [ackN2, setAckN2] = useState(3);
  const [ackResult, setAckResult] = useState<string | null>(null);

  function calcHanoi() {
    const n = Math.max(1, Math.min(20, hanoiN));
    const moves = Math.pow(2, n) - 1;
    const days = Math.floor(moves / 86400);
    const hrs = Math.floor((moves % 86400) / 3600);
    setHanoiResult(`H_${n} = 2^${n}−1 = ${moves.toLocaleString('hu')} lépés | Idő (1 lépés/mp): ${days} nap ${hrs} óra`);
  }

  function calcMersenne() {
    const p = Math.max(2, mersP);
    if (!isPrime(p)) { setMersResult('p nem prímszám!'); return; }
    if (p > 52) { setMersResult(`M_${p} = 2^${p}−1 — túl nagy a pontos megjelenítéshez (> 2^52)`); return; }
    const mp = Math.pow(2, p) - 1;
    setMersResult(`M_${p} = 2^${p}−1 = ${mp.toLocaleString('hu')}`);
  }

  function calcAckermann() {
    const m = Math.max(0, Math.min(3, ackM));
    const n = Math.max(0, Math.min(10, ackN2));
    if (ackM > 3) { setAckResult('m≥4 esetén a szám csillagászatilag nagy!'); return; }
    let result: number;
    if (m === 0) result = n + 1;
    else if (m === 1) result = n + 2;
    else if (m === 2) result = 2 * n + 3;
    else result = Math.pow(2, n + 3) - 3;
    setAckResult(`A(${m},${n}) = ${result.toLocaleString('hu')}`);
  }

  const ackTable = String.raw`
<table class="cayley" style="width:100%">
<thead><tr><th>m</th><th>A(m,n)</th><th>Explicit</th></tr></thead>
<tbody>
<tr><td>0</td><td>A(0,n)</td><td style="color:#34d399;">n+1</td></tr>
<tr><td>1</td><td>A(1,n)</td><td style="color:#34d399;">n+2</td></tr>
<tr><td>2</td><td>A(2,n)</td><td style="color:#34d399;">2n+3</td></tr>
<tr><td>3</td><td>A(3,n)</td><td style="color:#34d399;">2^(n+3)−3</td></tr>
<tr><td>4</td><td>A(4,1)</td><td style="color:#ef4444;">≈ 2^65536 (csillagászati!)</td></tr>
</tbody>
</table>`;

  return (
    <div>
      <Cols>
        <div>
          <div className="info-box">
            <span className="lbl" style={{ color: '#10b981' }}>Hanoi tornyai</span>
            <RichTex className="def-box" html={String.raw`\(H_n = 2H_{n-1}+1,\quad H_1=1\) &nbsp;→&nbsp; Megoldás: \(H_n = 2^n - 1\)`} />
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', margin: '.4rem 0', fontSize: '.85rem' }}>
              <span>n = <input type="number" min={1} max={20} className="ila-num" value={hanoiN} onChange={(e) => setHanoiN(+e.target.value)} /></span>
              <button className="op-btn" style={{ borderColor: '#10b981', color: '#34d399' }} onClick={calcHanoi}>Számít</button>
            </div>
            {hanoiResult && <div className="def-box" style={{ fontSize: '.83rem' }}>{hanoiResult}</div>}
          </div>
          <div className="info-box">
            <span className="lbl" style={{ color: '#10b981' }}>Mersenne-prímek</span>
            <RichTex className="def-box" html={String.raw`\(M_p = 2^p - 1\) ahol \(p\) prím`} />
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', margin: '.4rem 0', fontSize: '.85rem' }}>
              <span>p = <input type="number" min={2} max={61} className="ila-num" value={mersP} onChange={(e) => setMersP(+e.target.value)} /></span>
              <button className="op-btn" style={{ borderColor: '#10b981', color: '#34d399' }} onClick={calcMersenne}>Számít</button>
            </div>
            {mersResult && <div className="def-box" style={{ fontSize: '.83rem' }}>{mersResult}</div>}
          </div>
        </div>
        <div>
          <div className="info-box">
            <span className="lbl" style={{ color: '#10b981' }}>Ackermann-függvény</span>
            <RichTex className="def-box" html={String.raw`
\(A(0,n)=n+1\)<br>
\(A(m,0)=A(m-1,1)\)<br>
\(A(m,n)=A(m-1,A(m,n-1))\)
            `} />
            <RichTex html={ackTable} />
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', margin: '.4rem 0', fontSize: '.85rem' }}>
              <span>m = <input type="number" min={0} max={4} className="ila-num" style={{ width: 55 }} value={ackM} onChange={(e) => setAckM(+e.target.value)} /></span>
              <span>n = <input type="number" min={0} max={10} className="ila-num" style={{ width: 55 }} value={ackN2} onChange={(e) => setAckN2(+e.target.value)} /></span>
              <button className="op-btn" style={{ borderColor: '#10b981', color: '#34d399' }} onClick={calcAckermann}>Számít</button>
            </div>
            {ackResult && <div className="def-box" style={{ fontSize: '.83rem' }}>{ackResult}</div>}
            <div className="warn-box" style={{ marginTop: '.5rem', fontSize: '.78rem' }}>
              m≥4 esetén a függvény értéke csillagászatilag nagy — ne próbálkozzon!
            </div>
          </div>
        </div>
      </Cols>
    </div>
  );
}

// ── Tab 5: Differencia-operátor ──
function DiffTable() {
  const [seqStr, setSeqStr] = useState('1,4,9,16,25,36,49');
  const [result, setResult] = useState<{ table: number[][]; note: string } | null>(null);

  function calcDiff() {
    const seq = seqStr.split(',').map((s) => parseFloat(s.trim())).filter((x) => !isNaN(x));
    if (seq.length < 2) { setResult(null); return; }
    const table = [seq];
    let cur = seq;
    for (let k = 1; k < Math.min(cur.length, 5); k++) {
      const next: number[] = [];
      for (let i = 0; i < cur.length - 1; i++) next.push(+(cur[i + 1] - cur[i]).toFixed(6));
      table.push(next);
      cur = next;
      if (next.every((v) => Math.abs(v - next[0]) < 1e-9)) break;
    }
    const last = table[table.length - 1];
    const isConst = last.length > 1 && last.every((v) => Math.abs(v - last[0]) < 1e-9);
    setResult({ table, note: isConst ? `A Δ^${table.length - 1} sorozat állandó → az eredeti sorozat egy ${table.length - 1}. fokú polinomnak felel meg.` : '' });
  }

  const colors = ['#34d399', '#38bdf8', '#f59e0b', '#e879f9', '#ef4444'];

  return (
    <div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#10b981' }}>Interaktív differencia-táblázat</span>
        <p style={{ fontSize: '.82rem', color: '#94a3b8', margin: '.3rem 0' }}>Adjon meg egy sorozatot (vesszővel elválasztva):</p>
        <div style={{ display: 'flex', gap: '.75rem', marginBottom: '.75rem', flexWrap: 'wrap' }}>
          <input
            className="ila-text"
            style={{ flex: 1, minWidth: 200 }}
            value={seqStr}
            onChange={(e) => setSeqStr(e.target.value)}
          />
          <button className="op-btn" style={{ borderColor: '#10b981', color: '#34d399' }} onClick={calcDiff}>Számít</button>
        </div>
        {result && (
          <div style={{ overflowX: 'auto' }}>
            {result.table.map((row, k) => (
              <div key={k} style={{ margin: '.3rem 0', fontSize: '.82rem' }}>
                <span style={{ color: '#64748b', fontFamily: 'monospace', display: 'inline-block', width: '3rem' }}>Δ^{k}:</span>
                {row.map((v, i) => (
                  <span key={i} style={{ color: colors[k % colors.length], fontFamily: 'monospace', display: 'inline-block', minWidth: 56, textAlign: 'right', padding: '0 .3rem' }}>{v}</span>
                ))}
              </div>
            ))}
            {result.note && <div className="def-box" style={{ marginTop: '.5rem', fontSize: '.83rem' }}>{result.note}</div>}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Static theory ──
const t1theory = String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Rekurzív sorozatok alapjai</h5>
<div class="def-box"><div class="box-body">
Egy <strong>rekurzív sorozat</strong> olyan \((a_n)\) sorozat, amelyet egy
\(a_n = f(a_{n-1}, a_{n-2}, \ldots, a_{n-k})\) összefüggés (rekurzió) és
néhány kezdőérték \(a_0, a_1, \ldots, a_{k-1}\) egyértelműen meghatároz.
</div></div>
<div class="ex-box"><div class="box-body">
<strong>Példa:</strong> \(a_{n+1} = 2 \cdot a_n,\; a_0 = 1\)<br>
\(a_1 = 2,\quad a_2 = 4,\quad a_3 = 8,\quad \vdots\quad a_n = 2^n\) — geometriai sorozat.
</div></div>`;

const t2theory = String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Lineáris homogén rekurzió</h5>
<div class="def-box"><div class="box-body">
\(a_n = c_1 a_{n-1} + c_2 a_{n-2}\)<br>
<strong>Karakterisztikus polinom:</strong> \(x^2 = c_1 x + c_2\)
</div></div>
<div class="thm-box"><div class="box-body">
<strong>Tétel:</strong> Ha \(r_1 \ne r_2\) valós gyökök, akkor \(a_n = A \cdot r_1^n + B \cdot r_2^n\).<br>
Ha \(r_1 = r_2 = r\) (kétszeres gyök): \(a_n = (A + Bn)\,r^n\).
</div></div>
<div class="ex-box"><div class="box-body">
<strong>Példa:</strong> \(a_n = 5a_{n-1} - 6a_{n-2}\)<br>
Charakterisztikus egyenlet: \(x^2 - 5x + 6 = 0\), gyökök: \(r_1=2,\; r_2=3\)<br>
Általános megoldás: \(a_n = A \cdot 2^n + B \cdot 3^n\)
</div></div>`;

const t3theory = String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Fibonacci-sorozat</h5>
<div class="def-box"><div class="box-body">\(F_0=0,\; F_1=1,\; F_{n+1}=F_n+F_{n-1}\)</div></div>
<div class="thm-box"><div class="box-body">
<strong>Binet-képlet:</strong><br>
\(F_n = \dfrac{\varphi^n - \psi^n}{\sqrt{5}}\)<br>
ahol \(\varphi = \dfrac{1+\sqrt{5}}{2} \approx 1{,}6180\ldots\) (arany arány) és \(\psi = \dfrac{1-\sqrt{5}}{2}\)
</div></div>
<div class="ex-box"><div class="box-body">
<strong>Tulajdonság:</strong> \(\gcd(F_m, F_n) = F_{\gcd(m,n)}\)<br>
<strong>Konvergencia:</strong> \(\dfrac{F_n}{F_{n-1}} \to \varphi\)
</div></div>`;

const t4theory = String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Nevezetes rekurzív sorozatok</h5>`;

const t5theory = String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Δ-operátor (differenciaoperátor)</h5>
<div class="def-box"><div class="box-body">
\(\Delta a_n = a_{n+1} - a_n\)<br>
\(\Delta^2 a_n = \Delta(\Delta a_n) = a_{n+2} - 2a_{n+1} + a_n\)
</div></div>
<div class="thm-box"><div class="box-body">
<strong>Tétel:</strong> Ha \(\Delta^k a_n = c\) (állandó) minden \(n\)-re,
akkor \((a_n)\) egy \(k\)-adfokú polinom sorozata.
</div></div>
<div class="ex-box"><div class="box-body">
<strong>Példa — négyzetszámok:</strong><br>
\((a_n) = 1, 4, 9, 16, 25, \ldots\)<br>
\(\Delta^1 = 3, 5, 7, 9, \ldots\)<br>
\(\Delta^2 = 2, 2, 2, \ldots\) (állandó!) &nbsp;→&nbsp; \(a_n = n^2\) másodfokú polinom. ✓
</div></div>`;

const TABS: Tab[] = [
  { id: 'alap', label: 'Rekurziók alapjai', content: <div><RichTex html={t1theory} /><GeoRecursion /></div> },
  { id: 'lin', label: 'Lineáris rekurziók', content: <div><RichTex html={t2theory} /><LinRecSolver /></div> },
  { id: 'fib', label: 'Fibonacci-sorozat', content: <div><RichTex html={t3theory} /><FibTab /></div> },
  { id: 'nev', label: 'Nevezetes rekurziók', content: <div><RichTex html={t4theory} /><NotableRecursions /></div> },
  { id: 'diff', label: 'Differencia-operátor', content: <div><RichTex html={t5theory} /><DiffTable /></div> },
];

export default function DimatCh5() {
  return (
    <div className="ila">
      <Link to="/dimat" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika V — fejezet</p>
      <h1 className="ila__title">Rekurzív sorozatok</h1>
      <p className="ila__cite">Dr. Szalkai István · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
