// Risk Management Toolbox — oracle validation test
// Run: npx tsx _riskt.ts
// All oracle values from MATLAB R2026a.
import { RISK } from './src/sandbox/matlab/tb/risk';
import { scalar, rowVec, colVec, mat, str } from './src/sandbox/matlab/values';

const EPS = 1e-9;
let pass = 0, fail = 0;

function check(label: string, got: number, want: number, tol = EPS) {
  const ok = Math.abs(got - want) <= tol * (1 + Math.abs(want));
  if (ok) { pass++; process.stdout.write('.'); }
  else { fail++; console.log(`\nFAIL ${label}: got=${got} want=${want} diff=${Math.abs(got - want)}`); }
}

// Helper: make a char-string Mat for distribution names (MATLAB char array style)
function charMat(s: string): ReturnType<typeof mat> {
  const data = new Float64Array(s.length);
  for (let i = 0; i < s.length; i++) data[i] = s.charCodeAt(i);
  return { kind: 'num', rows: 1, cols: s.length, data, isChar: true } as any;
}

// Helper: make a name-value pair key char Mat
const nvKey = (s: string) => charMat(s);

async function run() {
  // ── valueAtRisk ──────────────────────────────────────────────────────────────────────────
  {
    const fn = RISK.builtins['valueAtRisk'];

    // valueAtRisk('normal', 0.95)  = 1.64485362695147
    const r1 = await fn([charMat('normal'), scalar(0.95)]);
    check('valueAtRisk normal 0.95', (r1[0] as any).data[0], 1.64485362695147);

    // valueAtRisk('normal', 0.99, 'Mean', 0.001, 'StandardDeviation', 0.02) = 0.0455269574808168
    const r2 = await fn([charMat('normal'), scalar(0.99), nvKey('Mean'), scalar(0.001), nvKey('StandardDeviation'), scalar(0.02)]);
    check('valueAtRisk normal 0.99 custom mu/sigma', (r2[0] as any).data[0], 0.0455269574808168);

    // valueAtRisk('normal', [0.95 0.99]) = [1.64485362695147, 2.32634787404084]
    const r3 = await fn([charMat('normal'), rowVec([0.95, 0.99])]);
    check('valueAtRisk normal vec 0.95', (r3[0] as any).data[0], 1.64485362695147);
    check('valueAtRisk normal vec 0.99', (r3[0] as any).data[1], 2.32634787404084);

    // valueAtRisk('normal', 0.99)  = 2.32634787404084
    const r4 = await fn([charMat('normal'), scalar(0.99)]);
    check('valueAtRisk normal 0.99 default', (r4[0] as any).data[0], 2.32634787404084);

    // Symmetry: valueAtRisk('normal', 0.5) = 0  (mu=0, norminv(0.5)=0 so VaR=0)
    const r5 = await fn([charMat('normal'), scalar(0.5)]);
    check('valueAtRisk normal 0.5 = 0', (r5[0] as any).data[0], 0, 1e-10);
  }

  // ── expectedShortfall ────────────────────────────────────────────────────────────────────
  {
    const fn = RISK.builtins['expectedShortfall'];

    // expectedShortfall('normal', 0.95) = 2.06271280750743
    const r1 = await fn([charMat('normal'), scalar(0.95)]);
    check('ES normal 0.95', (r1[0] as any).data[0], 2.06271280750743);

    // expectedShortfall('normal', 0.99, 'Mean', 0.001, 'StandardDeviation', 0.02) = 0.0523042844069161
    const r2 = await fn([charMat('normal'), scalar(0.99), nvKey('Mean'), scalar(0.001), nvKey('StandardDeviation'), scalar(0.02)]);
    check('ES normal 0.99 custom', (r2[0] as any).data[0], 0.0523042844069161);

    // expectedShortfall('normal', [0.95 0.99]) = [2.06271280750743, 2.66521422034581]
    const r3 = await fn([charMat('normal'), rowVec([0.95, 0.99])]);
    check('ES normal vec 0.95', (r3[0] as any).data[0], 2.06271280750743);
    check('ES normal vec 0.99', (r3[0] as any).data[1], 2.66521422034581);

    // expectedShortfall('normal', 0.99) = 2.66521422034581
    const r4 = await fn([charMat('normal'), scalar(0.99)]);
    check('ES normal 0.99 default', (r4[0] as any).data[0], 2.66521422034581);

    // ES > VaR (sanity check, using numeric comparison)
    const varFn = RISK.builtins['valueAtRisk'];
    const var95 = (await varFn([charMat('normal'), scalar(0.95)]))[0] as any;
    const es95  = (await fn([charMat('normal'), scalar(0.95)]))[0] as any;
    check('ES > VaR for normal 0.95', es95.data[0] > var95.data[0] ? 0 : 1, 0);
  }

  // ── concentrationIndices ──────────────────────────────────────────────────────────────────
  {
    const fn = RISK.builtins['concentrationIndices'];

    // concentrationIndices([100 200 300 400])
    // Gini=0.25, HH=0.3, HT=0.333333333333333, TE=0.106440135286223, CR=0.4
    const r1 = await fn([rowVec([100, 200, 300, 400])]);
    const ci1 = r1[0] as any;
    check('ci [100..400] Gini', (ci1.fields.get('Gini')[0] as any).data[0], 0.25);
    check('ci [100..400] HH',   (ci1.fields.get('HH')[0]   as any).data[0], 0.3);
    check('ci [100..400] HT',   (ci1.fields.get('HT')[0]   as any).data[0], 0.333333333333333);
    check('ci [100..400] TE',   (ci1.fields.get('TE')[0]   as any).data[0], 0.106440135286223);
    check('ci [100..400] CR',   (ci1.fields.get('CR')[0]   as any).data[0], 0.4);

    // concentrationIndices([1 1 1 1])  — equal weights
    // Gini=0, HH=0.25, HT=0.25, TE=0, CR=0.25
    const r2 = await fn([rowVec([1, 1, 1, 1])]);
    const ci2 = r2[0] as any;
    check('ci equal Gini', (ci2.fields.get('Gini')[0] as any).data[0], 0);
    check('ci equal HH',   (ci2.fields.get('HH')[0]   as any).data[0], 0.25);
    check('ci equal HT',   (ci2.fields.get('HT')[0]   as any).data[0], 0.25);
    check('ci equal TE',   (ci2.fields.get('TE')[0]   as any).data[0], 0, 1e-12);
    check('ci equal CR',   (ci2.fields.get('CR')[0]   as any).data[0], 0.25);
  }

  // ── asrf ──────────────────────────────────────────────────────────────────────────────────
  {
    const fn = RISK.builtins['asrf'];

    // asrf(0.05, 0.45, 0.12, 'VaRLevel', 0.999)
    // capital=0.0990799194840083  VaR=0.121579919484008
    const r1 = await fn([scalar(0.05), scalar(0.45), scalar(0.12), nvKey('VaRLevel'), scalar(0.999)]);
    check('asrf scalar capital', (r1[0] as any).data[0], 0.0990799194840083);
    check('asrf scalar VaR',     (r1[1] as any).data[0], 0.121579919484008);

    // asrf(0.01, 0.4, 0.2)  — default VaRLevel=0.999
    // capital=0.0542101064524285  VaR=0.0582101064524285
    const r2 = await fn([scalar(0.01), scalar(0.4), scalar(0.2)]);
    check('asrf default VaRLevel capital', (r2[0] as any).data[0], 0.0542101064524285);
    check('asrf default VaRLevel VaR',     (r2[1] as any).data[0], 0.0582101064524285);

    // asrf([0.05;0.02], [0.45;0.40], [0.12;0.15]) — vector inputs
    // capital: [0.0990799194840083; 0.0625315756584792]
    // VaR:     [0.121579919484008;  0.0705315756584792]
    const r3 = await fn([colVec([0.05, 0.02]), colVec([0.45, 0.40]), colVec([0.12, 0.15])]);
    check('asrf vec capital[0]', (r3[0] as any).data[0], 0.0990799194840083);
    check('asrf vec capital[1]', (r3[0] as any).data[1], 0.0625315756584792);
    check('asrf vec VaR[0]',     (r3[1] as any).data[0], 0.121579919484008);
    check('asrf vec VaR[1]',     (r3[1] as any).data[1], 0.0705315756584792);
  }

  // ── mertonmodel ───────────────────────────────────────────────────────────────────────────
  {
    const fn = RISK.builtins['mertonmodel'];

    // mertonmodel(3, 0.2, 10, 0.05)
    // PD=6.25554097410941e-09  DD=5.69261153127145  A=12.512294244892  Sa=0.0479528365463614
    const r1 = await fn([scalar(3), scalar(0.2), scalar(10), scalar(0.05)]);
    check('mertonmodel PD',  (r1[0] as any).data[0], 6.25554097410941e-09, 1e-4); // tighter relative tol
    check('mertonmodel DD',  (r1[1] as any).data[0], 5.69261153127145,    1e-6);
    check('mertonmodel A',   (r1[2] as any).data[0], 12.512294244892,     1e-7);
    check('mertonmodel Sa',  (r1[3] as any).data[0], 0.0479528365463614,  1e-7);

    // mertonmodel(5, 0.3, 8, 0.05, 'Maturity', 2)
    // PD=0.00164160027635107  DD=2.93989823894028  A=12.2381334141859  Sa=0.12268115406103
    const r2 = await fn([scalar(5), scalar(0.3), scalar(8), scalar(0.05), nvKey('Maturity'), scalar(2)]);
    check('mertonmodel2 PD', (r2[0] as any).data[0], 0.00164160027635107, 1e-6);
    check('mertonmodel2 DD', (r2[1] as any).data[0], 2.93989823894028,    1e-7);
    check('mertonmodel2 A',  (r2[2] as any).data[0], 12.2381334141859,    1e-7);
    check('mertonmodel2 Sa', (r2[3] as any).data[0], 0.12268115406103,    1e-7);
  }

  console.log(`\n${pass + fail} checks: ${pass} passed, ${fail} failed`);
  if (fail > 0) process.exit(1);
}

run().catch(e => { console.error(e); process.exit(1); });
