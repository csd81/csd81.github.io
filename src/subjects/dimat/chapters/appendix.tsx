import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

// ─── Math helpers ──────────────────────────────────────────────────────────────

function factorial(n: number): number {
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}

/** Returns polynomial coefficients (index = degree) for C(x,n) */
function binomCoeffs(n: number): number[] {
  let poly: number[] = [1];
  for (let k = 0; k < n; k++) {
    const np = new Array(poly.length + 1).fill(0);
    for (let i = 0; i < poly.length; i++) {
      np[i + 1] += poly[i];
      np[i] -= k * poly[i];
    }
    poly = np;
  }
  const fact = factorial(n);
  return poly.map((c) => c / fact);
}

function fractionStr(x: number): string {
  if (Number.isInteger(x)) return x.toString();
  for (let d = 1; d <= 5040; d++) {
    const num = Math.round(x * d);
    if (Math.abs(num / d - x) < 1e-9) return `\\tfrac{${num}}{${d}}`;
  }
  return x.toFixed(4);
}

function formatPolyTex(coeffs: number[]): string {
  const n = coeffs.length - 1;
  const parts: { term: string; pos: boolean }[] = [];
  for (let d = n; d >= 0; d--) {
    const c = coeffs[d];
    if (Math.abs(c) < 1e-12) continue;
    const cr = fractionStr(c);
    let term: string;
    if (d === 0) term = cr;
    else if (d === 1) term = (cr === '1' ? '' : cr === '-1' ? '-' : cr) + 'x';
    else term = (cr === '1' ? '' : cr === '-1' ? '-' : cr) + 'x^{' + d + '}';
    parts.push({ term, pos: c > 0 });
  }
  if (!parts.length) return '0';
  let s = parts[0].term;
  for (let i = 1; i < parts.length; i++)
    s += (parts[i].pos ? ' + ' : ' - ') + parts[i].term.replace(/^-/, '');
  return s;
}

function evalBinom(x: number, n: number): number {
  let r = 1;
  for (let k = 0; k < n; k++) r *= x - k;
  return r / factorial(n);
}

function evalPowerSum(n: number, k: number): number {
  let s = 0;
  for (let i = 1; i <= n; i++) s += Math.pow(i, k);
  return s;
}

// ─── Binomial polynomial data ──────────────────────────────────────────────────

const POWER_FORMULAS: string[] = [
  'n',
  String.raw`\dfrac{n^2}{2}+\dfrac{n}{2}=\dfrac{n(n+1)}{2}`,
  String.raw`\dfrac{n^3}{3}+\dfrac{n^2}{2}+\dfrac{n}{6}=\dfrac{n(n+1)(2n+1)}{6}`,
  String.raw`\dfrac{n^4}{4}+\dfrac{n^3}{2}+\dfrac{n^2}{4}=\dfrac{n^2(n+1)^2}{4}`,
  String.raw`\dfrac{n^5}{5}+\dfrac{n^4}{2}+\dfrac{n^3}{3}-\dfrac{n}{30}`,
  String.raw`\dfrac{n^6}{6}+\dfrac{n^5}{2}+\dfrac{5n^4}{12}-\dfrac{n^2}{12}`,
  String.raw`\dfrac{n^7}{7}+\dfrac{n^6}{2}+\dfrac{n^5}{2}-\dfrac{n^3}{6}+\dfrac{n}{42}`,
  String.raw`\dfrac{n^8}{8}+\dfrac{n^7}{2}+\dfrac{7n^6}{12}-\dfrac{7n^4}{24}+\dfrac{n^2}{12}`,
  String.raw`\dfrac{n^9}{9}+\dfrac{n^8}{2}+\dfrac{2n^7}{3}-\dfrac{7n^5}{15}+\dfrac{2n^3}{9}-\dfrac{n}{30}`,
  String.raw`\dfrac{n^{10}}{10}+\dfrac{n^9}{2}+\dfrac{3n^8}{4}-\dfrac{7n^6}{10}+\dfrac{n^4}{2}-\dfrac{3n^2}{20}`,
];

// ─── TAB 1 — Binomial polynomials ─────────────────────────────────────────────

function BinomTab() {
  const [n, setN] = useState(3);
  const [x, setX] = useState(5);

  const result = evalBinom(x, n);
  const resultStr = Number.isInteger(result) ? String(result) : result.toFixed(4);

  // Build poly rows HTML (n=0..8)
  const polyRows = Array.from({ length: 9 }, (_, k) => {
    const c = binomCoeffs(k);
    const tex = String.raw`\binom{x}{${k}} = ${formatPolyTex(c)}`;
    return `<div class="poly-row" style="background:#0e1014;border:1px solid #21262d;border-radius:.35rem;padding:.5rem .75rem;margin:.4rem 0;font-size:.73rem">\(${tex}\)</div>`;
  }).join('');

  // Build coordinate table (rows = C(x,k), cols = x^0..x^7)
  const maxN = 7;
  let coordTable = '<table style="border-collapse:collapse;font-size:.73rem;font-family:monospace;width:100%">';
  coordTable += '<thead><tr><th style="padding:.3rem .55rem;border:1px solid #30363d;background:rgba(167,139,250,.1);color:#a78bfa">';
  coordTable += String.raw`\(\binom{x}{k}\)`;
  coordTable += '</th>';
  for (let j = 0; j <= maxN; j++)
    coordTable += `<th style="padding:.3rem .55rem;border:1px solid #30363d;background:rgba(167,139,250,.1);color:#a78bfa">\\(x^{${j}}\\)</th>`;
  coordTable += '</tr></thead><tbody>';
  for (let k = 0; k <= maxN; k++) {
    const c = binomCoeffs(k);
    coordTable += `<tr><td style="padding:.3rem .55rem;border:1px solid #30363d;color:#a78bfa;font-weight:700">\\(\\binom{x}{${k}}\\)</td>`;
    for (let j = 0; j <= maxN; j++) {
      const val = j < c.length ? c[j] : 0;
      const color = Math.abs(val) < 1e-10 ? '#3a4a5a' : val > 0 ? '#38bdf8' : '#f97316';
      const display = Math.abs(val) < 1e-10 ? '0' : `\\(${fractionStr(val).replace('\\tfrac', '\\frac')}\\)`;
      coordTable += `<td style="padding:.3rem .55rem;border:1px solid #21262d;color:${color};text-align:center">${display}</td>`;
    }
    coordTable += '</tr>';
  }
  coordTable += '</tbody></table>';

  const calculatorFormula = String.raw`\(\binom{${x}}{${n}}\)`;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem' }}>
      {/* Left — calculator */}
      <div style={{ background: '#0d1117', border: '1px solid #1e2533', borderRadius: '.5rem', padding: '1rem' }}>
        <span className="lbl">Kiszámoló</span>
        <div className="info-box" style={{ fontSize: '.82rem' }}>
          <RichTex html={String.raw`Adj meg \(x\) és \(n\) értéket az \(\binom{x}{n}\) polinom kiértékeléséhez.`} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', fontSize: '.75rem', color: '#8b949e', marginBottom: '.4rem' }}>
          <span>n =</span>
          <input
            type="range" min={0} max={10} value={n}
            onChange={(e) => setN(+e.target.value)}
            style={{ flex: 1, accentColor: '#a78bfa' }}
          />
          <span style={{ minWidth: '28px', textAlign: 'right', color: '#a78bfa', fontWeight: 700 }}>{n}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', fontSize: '.75rem', color: '#8b949e', marginBottom: '.75rem' }}>
          <span>x =</span>
          <input
            type="range" min={-5} max={20} value={x}
            onChange={(e) => setX(+e.target.value)}
            style={{ flex: 1, accentColor: '#a78bfa' }}
          />
          <span style={{ minWidth: '28px', textAlign: 'right', color: '#a78bfa', fontWeight: 700 }}>{x}</span>
        </div>
        <div style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: '.3rem', padding: '.75rem', textAlign: 'center' }}>
          <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#a78bfa' }}>{resultStr}</div>
          <RichTex html={calculatorFormula} style={{ fontSize: '.75rem', color: '#8b949e', marginTop: '.25rem' }} />
        </div>
      </div>

      {/* Right — theory + tables */}
      <div style={{ background: '#0d1117', border: '1px solid #1e2533', borderRadius: '.5rem', padding: '1rem' }}>
        <RichTex
          html={String.raw`<h3 style="color:#a78bfa;font-size:1.05rem;font-weight:700;margin:0 0 .75rem">Az \(\binom{x}{n}\) polinomok</h3>`}
        />
        <div className="info-box">
          <RichTex html={String.raw`<span style="color:#a78bfa;font-weight:700">Definíció:</span> \(\displaystyle\binom{x}{n}:=\frac{x(x-1)(x-2)\cdots(x-(n-1))}{n!}\)<br/>Természetes alapja a kombinatorikának: \(\binom{x}{n}\in\mathbb{Z}\) minden \(x\in\mathbb{Z}\), \(n\in\mathbb{N}_0\) esetén.`} />
        </div>
        <span className="lbl" style={{ marginTop: '.75rem' }}>Explicit alakok</span>
        <RichTex html={polyRows} />
        <RichTex
          html={String.raw`<span class="lbl" style="margin-top:1rem;display:block">Koordinátatáblázat: együtthatók az \(\bigl\{\binom{x}{k}:k\le n\bigr\}\) bázisban</span>`}
        />
        <div style={{ overflowX: 'auto', marginTop: '.4rem' }}>
          <RichTex html={coordTable} />
        </div>
      </div>
    </div>
  );
}

// ─── TAB 2 — Power sums ───────────────────────────────────────────────────────

function PowerTab() {
  const [n, setN] = useState(10);
  const [k, setK] = useState(2);

  const result = evalPowerSum(n, k);

  // Build formula list
  const formulaRows = POWER_FORMULAS.map((f, ki) =>
    `<div class="poly-row" style="background:#0e1014;border:1px solid #21262d;border-radius:.35rem;padding:.5rem .75rem;margin:.4rem 0;font-size:.73rem"><span style="color:#a78bfa;font-weight:700;font-size:.75rem;min-width:50px;display:inline-block">k=${ki}</span>\\(\\displaystyle\\sum_{i=1}^n i^{${ki}}=${f}\\)</div>`
  ).join('');

  // Build evaluation table rows = k=0..9, cols = n=1..12
  const ns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20];
  let powerTable = '<table style="border-collapse:collapse;font-size:.72rem;font-family:monospace;width:100%">';
  powerTable += '<thead><tr><th style="padding:.35rem .6rem;border:1px solid #30363d;background:rgba(167,139,250,.1);color:#a78bfa;text-align:left">k \\ n</th>';
  powerTable += ns.map(nv => `<th style="padding:.35rem .6rem;border:1px solid #30363d;background:rgba(167,139,250,.1);color:#a78bfa;text-align:right">${nv}</th>`).join('');
  powerTable += '</tr></thead><tbody>';
  for (let ki = 0; ki <= 9; ki++) {
    powerTable += `<tr><td style="padding:.3rem .6rem;border:1px solid #21262d;color:#a78bfa;font-weight:700">k=${ki}</td>`;
    ns.forEach(nv => {
      const v = evalPowerSum(nv, ki);
      powerTable += `<td style="padding:.3rem .6rem;border:1px solid #21262d;color:#c9d1d9;text-align:right">${v.toLocaleString()}</td>`;
    });
    powerTable += '</tr>';
  }
  powerTable += '</tbody></table>';

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem' }}>
      {/* Left — calculator */}
      <div style={{ background: '#0d1117', border: '1px solid #1e2533', borderRadius: '.5rem', padding: '1rem' }}>
        <span className="lbl">Kiértékelő</span>
        <div className="info-box" style={{ fontSize: '.82rem' }}>
          <RichTex html={String.raw`Számold ki \(\sum_{i=1}^n i^k\) értékét.`} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', fontSize: '.75rem', color: '#8b949e', marginBottom: '.4rem' }}>
          <span>n =</span>
          <input
            type="range" min={1} max={50} value={n}
            onChange={(e) => setN(+e.target.value)}
            style={{ flex: 1, accentColor: '#a78bfa' }}
          />
          <span style={{ minWidth: '28px', textAlign: 'right', color: '#a78bfa', fontWeight: 700 }}>{n}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', fontSize: '.75rem', color: '#8b949e', marginBottom: '.75rem' }}>
          <span>k =</span>
          <input
            type="range" min={0} max={9} value={k}
            onChange={(e) => setK(+e.target.value)}
            style={{ flex: 1, accentColor: '#a78bfa' }}
          />
          <span style={{ minWidth: '28px', textAlign: 'right', color: '#a78bfa', fontWeight: 700 }}>{k}</span>
        </div>
        <div style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: '.3rem', padding: '.75rem', textAlign: 'center' }}>
          <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#a78bfa' }}>{result.toLocaleString()}</div>
          <RichTex
            html={String.raw`\(\sum_{i=1}^{${n}} i^{${k}}\)`}
            style={{ fontSize: '.75rem', color: '#8b949e', marginTop: '.25rem' }}
          />
        </div>
      </div>

      {/* Right — formulas + table */}
      <div style={{ background: '#0d1117', border: '1px solid #1e2533', borderRadius: '.5rem', padding: '1rem' }}>
        <RichTex
          html={String.raw`<h3 style="color:#a78bfa;font-size:1.05rem;font-weight:700;margin:0 0 .75rem">\(P_k(n):=\displaystyle\sum_{i=1}^n i^k\) polinomok</h3>`}
        />
        <div className="info-box">
          <RichTex html={String.raw`Minden \(P_k(n)\) egy \((k+1)\)-edfokú polinom \(n\)-ben, vezető tagja \(\dfrac{n^{k+1}}{k+1}\). Bernoulli-számok kapcsolják össze az egyenleteket.`} />
        </div>
        <RichTex html={formulaRows} />
        <span className="lbl" style={{ marginTop: '1rem' }}>Kiértékelési táblázat</span>
        <div style={{ overflowX: 'auto', marginTop: '.4rem' }}>
          <RichTex html={powerTable} />
        </div>
      </div>
    </div>
  );
}

// ─── TAB 3 — Partial fractions ────────────────────────────────────────────────

function PartialTab() {
  return (
    <div style={{ background: '#0d1117', border: '1px solid #1e2533', borderRadius: '.5rem', padding: '1rem' }}>
      <RichTex
        html={String.raw`<h3 style="color:#a78bfa;font-size:1.05rem;font-weight:700;margin:0 0 .75rem">Parciális törtekre bontás</h3>`}
      />
      <div className="info-box">
        <RichTex html={String.raw`<b style="color:#a78bfa">Cél:</b> \(f(x)=\dfrac{p(x)}{q(x)}\) racionális törtfüggvény felírása egyszerűbb törtek összegeként.<br/><b style="color:#a78bfa">Alkalmazás:</b> integrálszámítás, Laplace-transzformáció, sorfejtés, generátorfüggvények.`} />
      </div>

      <span className="lbl" style={{ marginTop: '.75rem' }}>0. lépés</span>
      <div className="info-box">
        <RichTex html={String.raw`<b style="color:#a78bfa">deg p &lt; deg q</b>: Ha nem, polinom osztással: \(f(x)=s(x)+\dfrac{r(x)}{q(x)}\).`} />
      </div>

      <span className="lbl">I. lépés</span>
      <div className="info-box">
        <RichTex html={String.raw`A <b style="color:#a78bfa">nevezőt szorzattá bontjuk</b>. Valós esetben 4 szorzótípus:<br/>&bull; \((x-u)\) — egyszerű valós gyök<br/>&bull; \((x-v)^n\) — \(n\)-szeres valós gyök<br/>&bull; \((ax^2+bx+c)\) — egyszerű komplex gyökpár<br/>&bull; \((dx^2+ex+f)^m\) — \(m\)-szeres komplex gyökpár`} />
      </div>

      <span className="lbl">II. lépés — Valós eset</span>
      <div className="info-box">
        <RichTex html={String.raw`Parciális törtekre bontás alakja:
          \[f(x)=\frac{A_1}{x-u_1}+\cdots+\frac{B_{1,1}}{x-v_1}+\frac{B_{1,2}}{(x-v_1)^2}+\cdots+\frac{C_r x+D_r}{a_r x^2+b_r x+c_r}+\cdots\]`} />
      </div>

      <span className="lbl">Módszerek az együtthatókhoz</span>
      <div className="info-box">
        <RichTex html={String.raw`<b style="color:#a78bfa">A — Behelyettesítés:</b> \(x=u\) gyökök behelyettesítése — azonnali eredmény egyszerű gyöknél.<br/><b style="color:#a78bfa">B — Együtthatók összehasonlítása:</b> Közös nevezőre hozás után fokszám szerint egyenlővé tétel — lineáris egyenletrendszer.`} />
      </div>

      <span className="lbl">Példa</span>
      <div className="info-box">
        <RichTex html={String.raw`\[\frac{2x+1}{(x-1)(x+2)}=\frac{A}{x-1}+\frac{B}{x+2}\]
          \(x=1\): \(A=\frac{3}{3}=1\) &nbsp;&nbsp; \(x=-2\): \(B=\frac{-3}{-3}=1\)<br/>
          Eredmény: \(\dfrac{1}{x-1}+\dfrac{1}{x+2}\)`} />
      </div>

      <span className="lbl">Irodalom</span>
      <div className="info-box" style={{ fontSize: '.75rem' }}>
        Gróf József: <em>Matematika II.</em> Veszprémi Egyetemi Jegyzet, 1.4. fejezet (19–32. oldal)<br />
        Obádovics Gyula: <em>Matematika</em> (kézikönyv), Műszaki Kiadó 1980, II.rész, V.fejezet (664–669. oldal)
      </div>
    </div>
  );
}

// ─── Root component ────────────────────────────────────────────────────────────

export default function DimatAppendix() {
  // We need a ref-based re-render trigger so RichTex runs KaTeX after tab switch.
  // Tabs from kit.tsx already re-renders on tab change — RichTex picks up via its
  // own useEffect([html]), so no extra work needed.

  const tabs: Tab[] = [
    {
      id: 'binom',
      label: String.raw`(x/n) Polinomok`,
      content: <BinomTab />,
    },
    {
      id: 'power',
      label: String.raw`Pₖ(n) Hatványösszegek`,
      content: <PowerTab />,
    },
    {
      id: 'partial',
      label: 'Parciális törtek',
      content: <PartialTab />,
    },
  ];

  return (
    <div className="ila">
      <Link to="/dimat" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika — Függelék</p>
      <h1 className="ila__title">Referencia-táblázatok</h1>
      <p className="ila__cite">Dr. Szalkai István · Pannon Egyetem</p>
      <Tabs tabs={tabs} />
    </div>
  );
}
