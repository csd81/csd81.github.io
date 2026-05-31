import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

// ─── Eratoszthenész szita canvas ─────────────────────────────────────────────
function SievCanvas() {
  const [limit, setLimit] = useState(120);
  const N = Math.min(200, Math.max(20, limit));
  const sieve = Array(N + 1).fill(true);
  sieve[0] = sieve[1] = false;
  for (let i = 2; i * i <= N; i++) if (sieve[i]) for (let j = i * i; j <= N; j += i) sieve[j] = false;
  const primes = sieve.map((v, i) => v ? i : -1).filter((v) => v > 0);

  const COLS = 20;
  const rows = Math.ceil(N / COLS);
  const CW = 28, CH = 24, PAD = 4;
  const W = COLS * CW + PAD * 2, H = rows * CH + PAD * 2;

  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    ctx.clearRect(0, 0, W, H);
    for (let n = 2; n <= N; n++) {
      const col = (n - 1) % COLS, row = Math.floor((n - 1) / COLS);
      const x = PAD + col * CW, y = PAD + row * CH;
      ctx.fillStyle = sieve[n] ? '#7c3aed' : '#1e293b';
      ctx.strokeStyle = sieve[n] ? '#a78bfa' : '#334155';
      ctx.lineWidth = 0.5;
      ctx.beginPath(); ctx.roundRect(x + 1, y + 1, CW - 3, CH - 3, 3); ctx.fill(); ctx.stroke();
      ctx.fillStyle = sieve[n] ? '#fff' : '#475569';
      ctx.font = `${sieve[n] ? 600 : 400} 9px monospace`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(String(n), x + CW / 2, y + CH / 2);
    }
  }, [N]);

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#a78bfa' }}>Eratoszthenész szitája — vizualizáció</span>
      <div style={{ fontSize: '.83rem', margin: '.4rem 0' }}>
        Határig: <input type="number" min={20} max={200} className="ila-num" value={limit}
          onChange={(e) => setLimit(+e.target.value)} />
        &nbsp;&nbsp;
        <span style={{ color: '#8892a4' }}>
          Prímek 2–{N}: <strong style={{ color: '#a78bfa' }}>{primes.length} db</strong>
          &nbsp; ({primes.slice(0, 12).join(', ')}{primes.length > 12 ? ', …' : ''})
        </span>
      </div>
      <canvas ref={ref} width={W} height={H}
        style={{ width: Math.min(W, 560), maxWidth: '100%', background: '#0a0c10', borderRadius: '.4rem', display: 'block' }} />
      <div style={{ fontSize: '.75rem', color: '#64748b', marginTop: '.3rem' }}>
        Lila = prím &nbsp;|&nbsp; Sötét = összetett
      </div>
    </div>
  );
}

// ─── Pollard ρ visualizer ────────────────────────────────────────────────────
function PollardRho() {
  const [n, setN] = useState(4087);
  const [c, setC] = useState(1);
  const [f, setF] = useState<'x2+c' | 'x2+x+c'>('x2+c');

  function gcd(a: number, b: number): number { while (b) { const t = b; b = a % b; a = t; } return a; }

  const polyF = (x: number, nn: number, cc: number) =>
    f === 'x2+c' ? ((x * x + cc) % nn + nn) % nn : (((x * x + x + cc) % nn) + nn) % nn;

  interface Step { k: number; xk: number; j: number; xj: number; g: number }
  const steps: Step[] = [];
  let xk = 2, xjVal = 2, result = 1, limit = 0, hIdx = 0, nextPow = 1;
  while (result === 1 && limit < 50 && n > 1) {
    xk = polyF(xk, n, c);
    limit++;
    const k = limit;
    if (k === nextPow) { nextPow *= 2; hIdx = k - 1; }
    const g = gcd(Math.abs(xk - xjVal), n);
    steps.push({ k, xk, j: hIdx, xj: xjVal, g });
    result = g;
    if (k === hIdx) xjVal = xk;
  }

  // rho-shape canvas: draw the sequence path
  const canRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = canRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    if (steps.length === 0) return;
    // find cycle start
    const vals = steps.map((s) => s.xk);
    const uniqueVals = Array.from(new Set(vals)).slice(0, 20);
    const N2 = uniqueVals.length;
    const cx = W / 2, cy = H / 2, r = Math.min(W, H) / 2 - 20;
    const angle = (i: number) => (i / N2) * 2 * Math.PI - Math.PI / 2;
    const positions: { x: number; y: number }[] = uniqueVals.map((_, i) => ({
      x: cx + r * Math.cos(angle(i)),
      y: cy + r * Math.sin(angle(i)),
    }));

    // draw edges
    ctx.strokeStyle = '#7c3aed88'; ctx.lineWidth = 1.5;
    for (let i = 0; i < Math.min(steps.length, N2 - 1); i++) {
      const from = i, to = Math.min(i + 1, N2 - 1);
      ctx.beginPath(); ctx.moveTo(positions[from].x, positions[from].y);
      ctx.lineTo(positions[to].x, positions[to].y); ctx.stroke();
    }

    // draw nodes
    uniqueVals.forEach((v, i) => {
      const { x, y } = positions[i];
      const isResult = steps.some((s) => s.g > 1 && s.g < n && s.xk === v);
      ctx.fillStyle = isResult ? '#f59e0b' : '#7c3aed';
      ctx.strokeStyle = isResult ? '#fbbf24' : '#a78bfa';
      ctx.lineWidth = isResult ? 2 : 1;
      ctx.beginPath(); ctx.arc(x, y, isResult ? 10 : 7, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#fff'; ctx.font = '7px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(String(v % 1000), x, y);
    });
  }, [n, c, f]);

  return (
    <div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#a78bfa' }}>8.20 Pollard ρ algoritmus vizualizátor</span>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', margin: '.5rem 0', fontSize: '.85rem' }}>
          <span>n = <input type="number" min={4} className="ila-num" value={n} onChange={(e) => setN(+e.target.value)} /></span>
          <span>c = <input type="number" className="ila-num" value={c} onChange={(e) => setC(+e.target.value)} /></span>
          <span>
            f(x) =&nbsp;
            <select className="ila-select" value={f} onChange={(e) => setF(e.target.value as 'x2+c' | 'x2+x+c')}>
              <option value="x2+c">x²+c</option>
              <option value="x2+x+c">x²+x+c</option>
            </select>
          </span>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className="cayley" style={{ fontFamily: 'monospace', fontSize: '.82rem', width: '100%' }}>
            <thead>
              <tr><th>k</th><th>xₖ</th><th>j=2ʰ−1</th><th>xⱼ</th><th>lnko(|xₖ−xⱼ|, n)</th></tr>
            </thead>
            <tbody>
              {steps.map((s, i) => (
                <tr key={i} style={s.g > 1 && s.g < n ? { background: 'rgba(167,139,250,.15)' } : undefined}>
                  <td>{s.k}</td>
                  <td>{s.xk}</td>
                  <td>{s.j}</td>
                  <td>{s.xj}</td>
                  <td style={{
                    color: s.g > 1 && s.g < n ? '#34d399' : s.g === n ? '#ef4444' : undefined,
                    fontWeight: s.g > 1 ? 700 : undefined,
                  }}>
                    {s.g}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {result > 1 && result < n
          ? <div className="def-box" style={{ marginTop: '.6rem', fontWeight: 700 }}>
              {n} = <span style={{ color: '#fbbf24' }}>{result}</span> × <span style={{ color: '#fbbf24' }}>{n / result}</span>
              &nbsp;<span style={{ color: '#8892a4', fontWeight: 400, fontSize: '.8rem' }}>({steps.length} iteráció)</span>
            </div>
          : <div className="warn-box" style={{ marginTop: '.6rem' }}>
              {result === n ? 'Triviális osztó (n) — próbálj más c értéket' : result === 0 ? 'n=0 érvénytelen' : 'Futás / nem találta meg a határon belül…'}
            </div>}
      </div>

      <div className="info-box" style={{ marginTop: '.6rem' }}>
        <span className="lbl" style={{ color: '#8892a4' }}>ρ-görbe (első 20 egyedi érték)</span>
        <canvas ref={canRef} width={340} height={220}
          style={{ width: 340, maxWidth: '100%', background: '#0a0c10', borderRadius: '.4rem', display: 'block', margin: '.4rem auto 0' }} />
      </div>
    </div>
  );
}

// ─── Miller–Rabin interactive test ───────────────────────────────────────────
function MillerRabinCalc() {
  const [n, setN] = useState(561);
  const [b, setB] = useState(2);

  function powmod(base: number, exp: number, mod: number): number {
    if (mod === 1) return 0;
    let result = 1; base %= mod;
    while (exp > 0) {
      if (exp & 1) result = result * base % mod;
      exp >>= 1; base = base * base % mod;
    }
    return result;
  }

  function gcd(a: number, b: number): number { while (b) { const t = b; b = a % b; a = t; } return a; }

  interface MRResult {
    s: number; t: number;
    sequence: number[];
    firstOne: number;
    verdict: 'PRÍM (valószínűleg)' | 'ÖSSZETETT (bizonyosan)' | 'erős álprím';
  }

  function millerRabin(nn: number, bb: number): MRResult {
    if (nn < 2) return { s: 0, t: 0, sequence: [], firstOne: -1, verdict: 'ÖSSZETETT (bizonyosan)' };
    if (gcd(bb, nn) > 1) return { s: 0, t: nn - 1, sequence: [], firstOne: -1, verdict: 'ÖSSZETETT (bizonyosan)' };
    let s = 0, t = nn - 1;
    while (t % 2 === 0) { s++; t /= 2; }
    const seq: number[] = [];
    let cur = powmod(bb, t, nn);
    seq.push(cur);
    for (let r = 0; r < s; r++) {
      cur = cur * cur % nn;
      seq.push(cur);
    }
    const firstOne = seq.indexOf(1);
    let verdict: MRResult['verdict'];
    if (seq[0] === 1 || seq.slice(0, s).includes(nn - 1)) {
      verdict = 'erős álprím';
    } else if (seq[s] === 1) {
      verdict = 'ÖSSZETETT (bizonyosan)';
    } else {
      verdict = 'ÖSSZETETT (bizonyosan)';
    }
    // re-check: b^(n-1) ≡ 1 and strong pseudoprime conditions
    if (seq[0] === 1) verdict = 'erős álprím';
    else {
      let passedStrong = false;
      for (let r = 0; r < s; r++) { if (seq[r] === nn - 1) { passedStrong = true; break; } }
      verdict = passedStrong ? 'erős álprím' : 'ÖSSZETETT (bizonyosan)';
    }
    return { s, t, sequence: seq, firstOne, verdict };
  }

  const nn = Math.max(3, n);
  const { s, t, sequence, verdict } = millerRabin(nn, b);
  const verdictColor = verdict === 'ÖSSZETETT (bizonyosan)' ? '#ef4444'
    : verdict === 'erős álprím' ? '#fbbf24' : '#34d399';

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#a78bfa' }}>8.17 Miller–Rabin teszt — interaktív</span>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', margin: '.5rem 0', fontSize: '.85rem' }}>
        <span>n = <input type="number" min={3} className="ila-num" value={n} onChange={(e) => setN(+e.target.value)} /></span>
        <span>b = <input type="number" min={2} className="ila-num" value={b} onChange={(e) => setB(+e.target.value)} /></span>
      </div>
      <div style={{ fontSize: '.82rem', fontFamily: 'monospace', color: '#c4b5fd', marginBottom: '.3rem' }}>
        n−1 = 2<sup>{s}</sup> · {t} &nbsp;→&nbsp; s={s}, t={t}
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table className="cayley" style={{ fontFamily: 'monospace', fontSize: '.82rem', width: '100%' }}>
          <thead>
            <tr>
              <th>Index</th>
              <th>Kitevő</th>
              <th>Érték mod n</th>
            </tr>
          </thead>
          <tbody>
            {sequence.map((v, i) => (
              <tr key={i} style={v === 1 || v === nn - 1 ? { background: 'rgba(167,139,250,.12)' } : undefined}>
                <td>{i === 0 ? 'b^t' : `b^(2^${i}·t)`}</td>
                <td style={{ fontFamily: 'monospace' }}>{i === 0 ? `${b}^${t}` : `${b}^(${Math.pow(2, i)}·${t})`}</td>
                <td style={{ color: v === 1 ? '#34d399' : v === nn - 1 ? '#fbbf24' : undefined, fontWeight: 700 }}>
                  {v} {v === nn - 1 ? '(≡ −1)' : ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="def-box" style={{ marginTop: '.6rem', fontWeight: 700, borderLeftColor: verdictColor }}>
        Ítélet: <span style={{ color: verdictColor }}>{verdict}</span>
        {verdict === 'erős álprím' && (
          <span style={{ color: '#8892a4', fontWeight: 400, fontSize: '.8rem' }}>&nbsp; (ez az egy bázis átment — próbálj több b-t!)</span>
        )}
      </div>
    </div>
  );
}

// ─── Tab content strings ───────────────────────────────────────────────────────

const tIntro = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">8. fejezet — Prímtesztelés és számok felbontása</span>
  <p style="font-size:.86rem;margin:.5rem 0">
    A 3.2 alfejezet 3.16 problémájában láttuk, hogy a <strong>prímfelbontás</strong> és a
    <strong>prímtesztelés</strong> messze nem azonos — különösen 2002 (AKS) óta. A klasszikus
    algoritmusok azonban hasonló módszereket használnak.
  </p>
</div>

<div class="warn-box">
  <strong>Minden prímfelbontó módszer \(O(2^n)\) exponenciálisan lassú</strong> — csak 100–200
  jegyű számokra alkalmazhatók. A konstansok különbsége miatt egyik módszer évmilliárdokig,
  a másik „csak" évmilliókig fut ugyanazon adatra.
</div>

<div class="def-box">
  <strong>2002 áttörés — AKS.</strong> Agrawal, Kayal és Saxena algoritmusa polinomiálisan
  gyors, 100% biztonságos, determinisztikus algoritmus a <em>prímtesztelés</em> problémára.
  A gyors <em>prímfelbontás</em> máig megoldatlan.
</div>

<div class="info-box">
  <strong>Algoritmus-választás stratégiája:</strong>
  <table class="cayley" style="width:100%;font-size:.82rem;margin:.4rem 0">
    <thead><tr><th style="text-align:left">Cél</th><th style="text-align:left">Algoritmus</th><th style="text-align:left">Mikor használjuk?</th></tr></thead>
    <tbody>
      <tr><td>Felbontás &lt; 10⁶</td><td>Eratoszthenész</td><td>oktatás, kis számok</td></tr>
      <tr><td>Felbontás közeli prímek</td><td>Fermat</td><td>\(n = pq\), \(|p-q|\) kicsi</td></tr>
      <tr><td>Felbontás általánosan</td><td>Pollard ρ</td><td>~10–25 jegyű számokra</td></tr>
      <tr><td>Felbontás &gt; 50 jegyű</td><td>GNFS (nincs könyvben)</td><td>RSA-feltörés</td></tr>
      <tr><td>Tesztelés gyorsan</td><td>Miller–Rabin</td><td>RSA-kulcsgenerálás</td></tr>
      <tr><td>Tesztelés determinisztikus</td><td>AKS</td><td>matematikai biztonság</td></tr>
    </tbody>
  </table>
</div>`;

const tEraf = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">8.1 Algoritmus — Eratoszthenész szitája</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    Osszuk el \(n\)-et 2-vel és a \(\sqrt{n}\)-nél kisebb páratlan számokkal. Ha valamelyik osztás
    nem ad maradékot, \(n\) összetett. Egyébként prím.
  </p>
</div>

<div class="warn-box">
  Lépésszám \(\sqrt{n}/2 \approx 10^{k/2}\). <strong>Exponenciális</strong> az input méretében
  (\(k\) jegy). Lásd a 3.21 példa kozmikus időadatait.
</div>

<div class="def-box">
  <span class="lbl" style="color:#a78bfa">8.2 § — Fermat algoritmusa</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    Pierre Fermat (1601–1665). Ma is hatékony pár-száz-jegyű számokra,
    <strong>különösen ha \(n = pq\) két közeli prím szorzata</strong> —
    <em>ezért nem szabad ilyen RSA-kulcsot választani!</em>
  </p>
</div>

<div class="info-box">
  <strong>Első ötlet — Két közeli osztó</strong><br/>
  Ha \(n = ab\) és \(a > b\) közel egymáshoz, akkor \(x = \tfrac{a+b}{2}\), \(y = \tfrac{a-b}{2}\) esetén:
  \[n = x^2 - y^2 \;\Longleftrightarrow\; n + y^2 = x^2\]
  \(x \approx \sqrt{n}\)-tól indítva \(x\)-et egyesével növeljük; minden lépésben ellenőrizzük,
  hogy \(x^2 - n\) négyzetszám-e.
</div>

<div class="info-box">
  <strong>Második ötlet — Modulus-szita</strong><br/>
  \(y^2\) utolsó két jegye csak \(00, e1, e4, 25, o6, e9\) lehet (\(e\)=páros, \(o\)=páratlan).
  Ezért \(x^2 - n\) utolsó két jegye is csak ezen 6 minta egyike —
  <strong>78% kizárható</strong> négyzetreemelés előtt. Több \(m_i\) modulus szitálással még gyorsabb.
</div>

<div class="thm-box">
  <strong>8.5 Tétel — Mikor van \(n = x^2 - y^2\) megoldás?</strong><br/>
  \(n = x^2 - y^2\) pontosan akkor oldható meg, ha \(\;n \neq 4k + 2\).
  <p style="font-size:.8rem;color:#94a3b8;margin:.3rem 0 0">
    Mivel \((x+y)\) és \((x-y)\) paritása mindig megegyezik, szorzatuk vagy páratlan vagy 4-gyel osztható.
    \(4k+2\) alakú számok kimaradnak — de azok már páros összetettek, könnyen szétbonthatók.
  </p>
</div>

<div class="def-box">
  <strong>8.6 Algoritmus — Legendre–Kraitchik (vázlat)</strong><br/>
  Az \(x^2 - y^2 = n\) helyett keressünk olyan \(x, y\)-t ahol
  \[x^2 - y^2 \equiv 0 \pmod n, \quad x \not\equiv \pm y.\]
  Ekkor \(\operatorname{lnko}(n, x + y)\) vagy \(\operatorname{lnko}(n, x - y)\) valódi osztó.
  <strong>Faktorbázis-trükk:</strong> \(x, y\)-t kis prímek \(B = \{p_1, \dots, p_h\}\) szorzataként
  keressük, lineáris algebrával. Ez vezet az általános számtest-szitához (GNFS).
</div>`;

const tAlprim = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">8.3 § — Álprímek és Bolyai János</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    Apjának (Bolyai Farkas) bíztatására Bolyai János megpróbálta bebizonyítani a <strong>kis Fermat
    tétel megfordítását</strong>.
  </p>
</div>

<div class="def-box">
  <strong>8.7 Probléma.</strong> Igaz-e, hogy ha \(n\) teljesíti
  \[b^{n-1} \equiv 1 \pmod n \quad \text{minden } 1 &lt; b &lt; n,\; \operatorname{lnko}(b,n) = 1\text{-re,}\]
  akkor \(n\) prímszám?
</div>

<p style="font-size:.86rem;margin:.5rem 0">
  Bolyai János a kéziratai szerint több <em>ellenpéldát</em> talált — pl.
  \[2^{340} \equiv 1 \pmod{341}, \qquad 4^{14} \equiv 1 \pmod{15}\]
  pedig \(341 = 11 \cdot 31\) és \(15 = 3 \cdot 5\). Bolyai felfedezései csak <strong>2000 körül</strong>
  kerültek elő a hagyatékából.
</p>

<div class="info-box">
  <strong>8.11 Definíció — Álprím és Carmichael-szám</strong>
  <table class="cayley" style="width:100%;font-size:.82rem;margin:.4rem 0">
    <thead><tr><th>Fogalom</th><th>Definíció</th></tr></thead>
    <tbody>
      <tr><td><strong>álprím</strong> \(b\) bázisra</td><td>\(n\) páratlan összetett, \(\operatorname{lnko}(b,n) = 1\), \(b^{n-1} \equiv 1 \pmod n\)</td></tr>
      <tr><td><strong>\(b\) árulója \(n\)-nek</strong></td><td>\(\operatorname{lnko}(b,n)=1\), \(b^{n-1} \not\equiv 1 \pmod n\) (bizonyítja, hogy \(n\) összetett)</td></tr>
      <tr><td><strong>Carmichael-szám</strong></td><td>\(n\) összetett, álprím <em>minden</em> \(b\)-re ⟹ <em>nincs árulója</em>!</td></tr>
    </tbody>
  </table>
</div>

<p style="color:#94a3b8;font-size:.82rem;">
  Robert Daniel Carmichael (1879–1967). Első Carmichael-számok: \(561, 1105, 1729, 2465, 2821,
  6601, 8911, 10\,585, \dots\) &nbsp; Ramanujan-szám (\(1729 = 1^3 + 12^3 = 9^3 + 10^3\)) is benne van!
</p>

<div class="thm-box">
  <strong>Erdős Pál ötletével Alford, Granville, Pomerance (1994) bizonyította:</strong>
  végtelen sok Carmichael-szám létezik. Ezért a Fermat/Bolyai-teszt
  <em>nem 100% biztos</em>.
</div>

<div class="thm-box">
  <span class="lbl lbl--thm">8.15 Tétel — Korselt (1899) — Carmichael-számok jellemzése</span>
  <p>\(n\) páratlan, négyzetmentes összetett szám akkor és csak akkor Carmichael, ha</p>
  \[p - 1 \mid n - 1 \quad \text{minden } p \mid n \text{ prímosztóra.}\]
</div>

<div class="ex-box">
  <strong>Miért Carmichael 561?</strong>&nbsp;
  \(561 = 3 \cdot 11 \cdot 17\), \(n - 1 = 560\):
  \[3 - 1 = 2 \mid 560\ ✓ \quad 11 - 1 = 10 \mid 560\ ✓ \quad 17 - 1 = 16 \mid 560\ ✓\]
</div>

<div class="thm-box">
  <strong>8.12 Tétel — Áruló-arány.</strong>
  Ha \(n\) <em>nem</em> Carmichael (legalább egy árulóval), akkor a \(\mathbb{Z}_n^*\) elemeinek
  <strong>legalább a fele</strong> áruló. Következmény: \(k\) véletlen \(b\) próbálkozás után,
  ha mind „sikertelen", \(n\) legfeljebb \(2^{-k}\) eséllyel összetett — kivéve ha Carmichael.
  Miller–Rabin ezt erősíti tovább.
</div>`;

const tMR = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">8.4 § — Miller–Rabin teszt</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    Ötlet: <strong>ha \(n\) prím</strong> (lenne), akkor \(x^2 \equiv 1 \pmod n\) egyenlet
    megoldásai csak \(x \equiv \pm 1\) (\(\mathbb{Z}_p\) test, 6.79). Ezzel a Bolyai-teszt
    <em>továbbfinomítható</em>: a Carmichael-számokat is kiszűri.
  </p>
</div>

<div class="info-box">
  <strong>8.17 Algoritmus — Miller–Rabin</strong>
  <ol style="font-size:.85rem;line-height:1.9;margin:.4rem 0">
    <li>Bontsuk fel \(\;n - 1 = 2^s \cdot t\;\) ahol \(t\) páratlan.</li>
    <li>Válasszunk véletlen \(b\)-t, \(\operatorname{lnko}(b, n) = 1\).</li>
    <li>Számoljuk ki \(b^t, b^{2t}, b^{4t}, \dots, b^{2^s t} = b^{n-1} \pmod n\) — minden lépésben négyzetreemelés.</li>
    <li>Amikor <strong>először 1-et</strong> kapunk: az előző elemnek \(-1\)-nek kell lennie,
        különben \(n\) összetett.</li>
  </ol>
</div>

<div class="def-box">
  <strong>8.18 Def — Erős álprím.</strong> \(n\) <em>erős álprím</em> a \(b\) bázisra, ha
  vagy \(b^t \equiv 1\), vagy létezik \(0 \leq r &lt; s\), hogy \(b^{2^r t} \equiv -1 \pmod n\).
</div>

<div class="thm-box">
  <strong>Megbízhatóság.</strong> Egyetlen \(b\)-re tévedés esélye <em>kevesebb mint \(1/4\)</em>
  (nincs „Carmichael-szerű" kivétel). \(k\) független próba után tévedés esélye \(\leq 4^{-k}\).
  Pl. \(k = 40\) teszt \(\Rightarrow\) \(4^{-40} &lt; 10^{-24}\) — gyakorlatilag biztos!
  Ez az <strong>OpenSSL és más kriptokönyvtárak alapértelmezett prímtesztje</strong>.
</div>

<div class="ex-box">
  <strong>8.19 Példa — 91 erős álprím \(b = 10\)-re</strong><br/>
  \(91 = 7 \cdot 13\), \(n - 1 = 90 = 2 \cdot 45\), így \(s = 1\), \(t = 45.\)
  <br/>\(10^3 = 1001 \equiv -1 \pmod{91}\) ⟹ \(\;10^{45} \equiv (-1)^{15} \equiv -1 \pmod{91}.\)
  <br/>Tehát \(b^t \equiv -1\) — \(r = 0\)-ra teljesül, 91 <strong>átmegy a teszten</strong>.
  <em>De 91 valójában összetett!</em> Több bázis vizsgálatával kiszűrhető.
</div>`;

const tPollardTheory = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">8.5 § — Pollard ρ-módszere (1975)</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    John Pollard 1975-es cikke. <strong>Valódi osztót</strong> ad — az Eratoszthenészi
    próbaosztásnál lényegesen gyorsabb. Komplexitása heurisztikusan \(O(n^{1/4})\) —
    szubexponenciális.
  </p>
  <p style="color:#64748b;font-size:.8rem;">
    Az elnevezés: ha az \(x_k\) sorozatot ábrázoljuk, a \(\rho\) görög betűhöz hasonlít — egy egyenes
    szakasz vezet egy ciklusba. A „Monte Carlo" elnevezés a véletlenszerű \(f\) polinom-választáshoz utal.
  </p>
</div>

<div class="info-box">
  <strong>8.20 Algoritmus — Alapötlet</strong><br/>
  Legyen \(f(x) = x^2 + c\) (vagy hasonló nemlineáris polinom). Indítsunk \(x_0 = 2\)-t, és számoljuk:
  \[x_k = f(x_{k-1}) \bmod n\]
  Ha valamely \(j &lt; k\)-ra \(\operatorname{lnko}(x_k - x_j, n) = r > 1\), akkor \(r\) valódi osztó!
</div>

<div class="thm-box">
  <strong>Miért működik?</strong> Ha \(r \mid n\), akkor \(f\) ciklikus \(\bmod\, r\) (kis modulus,
  kevés állapot). Születésnap-paradoxonnal \(O(\sqrt r) = O(n^{1/4})\) lépés után már
  ütközünk \(\pmod r\)-ben — anélkül, hogy \(r\)-t ismernénk!
</div>

<div class="info-box">
  <strong>8.24 Algoritmus — Floyd-féle gyorsítás (ciklusdetektálás)</strong><br/>
  Ne nézzük az <em>összes</em> \(j &lt; k\) párt — csak \(j = 2^h - 1\)-et,
  ahol \(2^h \leq k &lt; 2^{h+1}\). Négyzetes gyorsítás.
  <br/><br/>
  <strong>8.31 Algoritmus — „Kétszeres sebesség" (Brent-variáns)</strong><br/>
  Egyszerre két iteráció: lassú és gyors:
  \[x_{k+1} = f(x_k), \qquad x_{2k} = f(f(x_{2k-1}))\]
  Minden lépésben \(\operatorname{lnko}(n, x_{2k} - x_k)\) vizsgálata.
</div>

<div class="ex-box">
  <span class="lbl lbl--ex">8.27 Példa — \(n = 4087\), \(f(x) = x^2 + x + 1\), \(x_0 = 2\)</span>
  <table class="cayley" style="font-family:monospace;font-size:.82rem;width:100%;margin:.4rem 0">
    <thead><tr><th>\(k\)</th><th>\(x_k\)</th><th>\(j = 2^h-1\)</th><th>\(\operatorname{lnko}(x_k - x_j, n)\)</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>7</td><td>0</td><td>1</td></tr>
      <tr><td>2</td><td>57</td><td>1</td><td>1</td></tr>
      <tr><td>3</td><td>3307</td><td>1</td><td>1</td></tr>
      <tr><td>4</td><td>2745</td><td>3</td><td>1</td></tr>
      <tr><td>5</td><td>1343</td><td>3</td><td>1</td></tr>
      <tr><td>6</td><td>2626</td><td>3</td><td>1</td></tr>
      <tr style="background:rgba(167,139,250,.15)"><td><strong>7</strong></td><td>3734</td><td>3</td><td><strong style="color:#34d399">61</strong></td></tr>
    </tbody>
  </table>
  \(4087 = 61 \cdot 67\). Csak <strong>7 iteráció</strong> — az Eratoszthenészi szita
  \(\sqrt{4087} \approx 64\) próbaosztást igényelne.
</div>

<div class="ex-box">
  <span class="lbl lbl--ex">8.32 Példa — Brent kettős léptetés (\(n = 246\,733\))</span>
  <table class="cayley" style="font-family:monospace;font-size:.82rem;width:100%;margin:.4rem 0">
    <thead><tr><th>\(k\)</th><th>\(x_k\)</th><th>\(x_{2k}\)</th><th>\(\operatorname{lnko}(n, x_{2k} - x_k)\)</th></tr></thead>
    <tbody>
      <tr><td>0</td><td>2</td><td>2</td><td>—</td></tr>
      <tr><td>1</td><td>5</td><td>26</td><td>1</td></tr>
      <tr><td>2</td><td>26</td><td>211 597</td><td>1</td></tr>
      <tr><td>3</td><td>677</td><td>126 543</td><td>1</td></tr>
      <tr><td>4</td><td>211 597</td><td>99 653</td><td>1</td></tr>
      <tr><td>5</td><td>133 298</td><td>225 011</td><td>1</td></tr>
      <tr><td>6</td><td>126 543</td><td>28 771</td><td>1</td></tr>
      <tr><td>7</td><td>159 150</td><td>90 806</td><td>1</td></tr>
      <tr><td>8</td><td>99 653</td><td>86 408</td><td>1</td></tr>
      <tr style="background:rgba(167,139,250,.15)"><td><strong>9</strong></td><td>210 626</td><td>222 422</td><td><strong style="color:#34d399">983</strong></td></tr>
    </tbody>
  </table>
  \(246\,733 = 983 \cdot 251\) ✓
</div>

<div class="info-box">
  <strong>8.30 Megjegyzés — Polinom-választás</strong>
  <ul style="font-size:.85rem;line-height:1.8;margin:.3rem 0">
    <li><strong>Jó:</strong> \(f(x) = x^2 + c\) (default), \(x^2 + x + c\) általában</li>
    <li><strong>Tilos:</strong> \(f(x) = ax + b\) (lineáris) — periódusa kicsi, nem talál ütközést</li>
    <li><strong>Tilos:</strong> \(f(x) = x^2\) — tiszta négyzet, korai degenerált ciklus</li>
  </ul>
</div>`;

const tAKS = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">8.6 § — AKS algoritmus (Agrawal–Kayal–Saxena, 2002)</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    Manindra <strong>Agrawal</strong> és tanítványai <strong>Neeraj Kayal</strong> és
    <strong>Nitin Saxena</strong> 2002-es áttörése: <em>az első</em> ismert
    <strong>polinomidejű, determinisztikus, feltétel nélküli</strong> prímteszt.
  </p>
</div>

<div class="thm-box">
  Az algoritmus megválaszolta az 1970-es évek óta nyitva álló kérdést:
  <em>„van-e a prímtesztelésre P-beli algoritmus?"</em>&nbsp;
  <strong>Igen!</strong>&nbsp; Komplexitás: \(\tilde{O}(\log^{10.5} n)\) az eredeti cikkben,
  később \(\tilde{O}(\log^6 n)\).
</div>

<div class="def-box">
  <strong>Alapötlet — Polinomok használata</strong><br/>
  \(n\) prím \(\iff\) a binomiális tétel alapján:
  \[(x - a)^n \equiv x^n - a \pmod n\]
  ami egy <em>polinomidentitás</em> \(\pmod n\). (Ha \(n\) prím, a binomiális együtthatók
  \(\binom{n}{k}\) mind \(n\)-nel oszthatók kivéve \(k = 0, n\)-re; ha \(n\) összetett,
  valamelyik együttható nem osztható \(n\)-nel.)
</div>

<div class="info-box">
  <strong>Komplexitás-trükk</strong><br/>
  Az identitás közvetlen ellenőrzése \(n + 1\) együttható összehasonlítása — túl lassú.
  <strong>AKS-trükk:</strong> mindkét oldalt egy alkalmas \((x^r - 1)\) polinommal vett
  maradékon vizsgáljuk, ahol \(r \approx \log^6 n\) kicsi prím.
  <br/><br/>
  Ha a két polinom valóban egyenlő, akkor minden polinom-szerinti maradékuk is. Fordítva:
  ha \((x^r - 1)\)-szerinti maradékok megegyeznek <em>néhány száz \(a\)</em>-ra,
  akkor \(n\) <strong>biztosan prím</strong>.
</div>

<div class="thm-box">
  <strong>Az AKS algoritmus 4 fő lépésben:</strong>
  <ol style="font-size:.85rem;line-height:1.9;margin:.3rem 0">
    <li>\(n = m^k\) alakú? (perfect power test)</li>
    <li>\(r\) alkalmas prím keresése \(r \leq \log^6 n\)-ig</li>
    <li>\(\operatorname{lnko}(a, n) = 1\) ellenőrzése \(a \leq r\)-re</li>
    <li>A polinomidentitás \((x - a)^n \equiv x^n - a \pmod{x^r - 1, n}\) ellenőrzése \(a \leq 2\sqrt{r} \log n\)-ig</li>
  </ol>
  Ha mindegyik lépés átmegy ⟹ \(n\) prím. Bármelyik buktató ⟹ \(n\) összetett.
</div>

<div class="warn-box">
  <strong>Gyakorlati helyzet:</strong> Bár AKS elméletileg gyönyörű, <strong>gyakorlatban nem versenyez
  Miller–Rabin-nal</strong> — a polinomszámítások konstansai magasak. Modern változatok
  (Lenstra, Pomerance, Bernstein, Crandall) jelentősen egyszerűsítették.
  <br/>Hivatalos kriptokönyvtárakban: <strong>Miller–Rabin + Baillie–PSW kombináció</strong> az
  ipari sztenderd. AKS főleg <em>elméleti</em> garancia.
</div>

<div class="info-box">
  <strong>Hivatkozások</strong>
  <ul style="font-size:.83rem;line-height:1.8">
    <li>Agrawal, Kayal, Saxena: <em>PRIMES is in P</em>, Annals of Mathematics 160 (2004), 781–793</li>
    <li>MathWorld: AKS Primality Test</li>
    <li>AMS Bulletin (2005): <em>A polynomial time algorithm for primes</em></li>
  </ul>
</div>`;

// ─── TABS ────────────────────────────────────────────────────────────────────

const TABS: Tab[] = [
  { id: 'intro',    label: 'Áttekintés',                 content: <RichTex html={tIntro} /> },
  { id: 'eraf',     label: '8.1–2 Eratoszthenész & Fermat', content: <div><RichTex html={tEraf} /><SievCanvas /></div> },
  { id: 'alprim',   label: '8.3 Álprímek & Bolyai',      content: <RichTex html={tAlprim} /> },
  { id: 'mr',       label: '8.4 Miller–Rabin',           content: <div><RichTex html={tMR} /><MillerRabinCalc /></div> },
  { id: 'pollard',  label: '8.5 Pollard ρ',              content: <div><RichTex html={tPollardTheory} /><PollardRho /></div> },
  { id: 'aks',      label: '8.6 AKS',                    content: <RichTex html={tAKS} /> },
];

export default function AlgoCh8() {
  return (
    <div className="ila">
      <Link to="/algo" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Számelmélet — 8. fejezet</p>
      <h1 className="ila__title">Prímtesztelés és számok felbontása</h1>
      <p className="ila__cite">Szalkai István &amp; Dósa György · Pannon Egyetem · Typotex 2011</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
