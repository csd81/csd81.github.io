// Phased Array System Toolbox — oracle validation test
// Run: npx tsx _phat.ts
// Each result is compared against values from MATLAB R2026a (_phat_oracle.m).
import { PHASED } from './src/sandbox/matlab/tb/phased';
import { scalar, mat } from './src/sandbox/matlab/values';

const EPS = 1e-9;
let pass = 0, fail = 0;

function check(label: string, got: number, want: number, tol = EPS) {
  const ok = Math.abs(got - want) <= tol * (1 + Math.abs(want));
  if (ok) { pass++; process.stdout.write('.'); }
  else { fail++; console.log(`\nFAIL ${label}: got=${got} want=${want} diff=${Math.abs(got-want)}`); }
}

async function run() {
  // ── az2broadside ─────────────────────────────────────────────────────────────────────
  {
    const fn = PHASED.builtins['az2broadside'];
    const r1 = await fn([scalar(30), scalar(0)]);
    check('az2broadside(30,0)',   (r1[0] as any).data[0], 30);
    const r2 = await fn([scalar(30), scalar(20)]);
    check('az2broadside(30,20)',  (r2[0] as any).data[0], 28.0243206736047);
    const r3 = await fn([scalar(45), scalar(0)]);
    check('az2broadside(45,0)',   (r3[0] as any).data[0], 45);
    const r4 = await fn([scalar(-60), scalar(30)]);
    check('az2broadside(-60,30)', (r4[0] as any).data[0], -48.5903778907291);
    // el omitted → defaults to 0
    const r5 = await fn([scalar(30)]);
    check('az2broadside(30)',     (r5[0] as any).data[0], 30);
  }

  // ── broadside2az ─────────────────────────────────────────────────────────────────────
  {
    const fn = PHASED.builtins['broadside2az'];
    const r1 = await fn([scalar(30), scalar(0)]);
    check('broadside2az(30,0)',   (r1[0] as any).data[0], 30);
    const r2 = await fn([scalar(30), scalar(20)]);
    check('broadside2az(30,20)',  (r2[0] as any).data[0], 32.1467014004801);
    const r3 = await fn([scalar(-20), scalar(45)]);
    check('broadside2az(-20,45)', (r3[0] as any).data[0], -28.9266492997599);
    const r4 = await fn([scalar(45), scalar(0)]);
    check('broadside2az(45,0)',   (r4[0] as any).data[0], 45);
    // el omitted → 0
    const r5 = await fn([scalar(30)]);
    check('broadside2az(30)',     (r5[0] as any).data[0], 30);
  }

  // ── azel2uv ───────────────────────────────────────────────────────────────────────────
  {
    const fn = PHASED.builtins['azel2uv'];
    // 2×1 column vector [az;el]
    const make21 = (az: number, el: number) => mat(2, 1, new Float64Array([az, el]));

    const r1 = await fn([make21(30, 0)]);
    const m1 = r1[0] as any;
    check('azel2uv([30;0]) u', m1.data[0], 0.5);
    check('azel2uv([30;0]) v', m1.data[1], 0);

    const r2 = await fn([make21(0, 45)]);
    const m2 = r2[0] as any;
    check('azel2uv([0;45]) u', m2.data[0], 0);
    check('azel2uv([0;45]) v', m2.data[1], 0.707106781186547);

    const r3 = await fn([make21(-30, 20)]);
    const m3 = r3[0] as any;
    check('azel2uv([-30;20]) u', m3.data[0], -0.469846310392954);
    check('azel2uv([-30;20]) v', m3.data[1],  0.342020143325669);

    const r4 = await fn([make21(90, 0)]);
    const m4 = r4[0] as any;
    check('azel2uv([90;0]) u', m4.data[0], 1);
    check('azel2uv([90;0]) v', m4.data[1], 0);

    // 2×2 multi-column: [[30,-30];[0,20]]
    // col-major: data = [az1,el1, az2,el2] = [30, 0, -30, 20]
    const m22 = mat(2, 2, new Float64Array([30, 0, -30, 20]));
    const r5 = await fn([m22]);
    const m5 = r5[0] as any;
    check('azel2uv multi col1 u', m5.data[0], 0.5);
    check('azel2uv multi col1 v', m5.data[1], 0);
    check('azel2uv multi col2 u', m5.data[2], -0.469846310392954);
    check('azel2uv multi col2 v', m5.data[3],  0.342020143325669);
  }

  // ── uv2azel ───────────────────────────────────────────────────────────────────────────
  {
    const fn = PHASED.builtins['uv2azel'];
    const make21 = (u: number, v: number) => mat(2, 1, new Float64Array([u, v]));

    const r1 = await fn([make21(0.5, 0)]);
    const a1 = r1[0] as any;
    check('uv2azel([0.5;0]) az', a1.data[0], 30);
    check('uv2azel([0.5;0]) el', a1.data[1], 0);

    const r2 = await fn([make21(-0.3, 0.4)]);
    const a2 = r2[0] as any;
    check('uv2azel([-0.3;0.4]) az', a2.data[0], -19.1066053508691);
    check('uv2azel([-0.3;0.4]) el', a2.data[1],  23.5781784782018);

    const r3 = await fn([make21(0, 0)]);
    const a3 = r3[0] as any;
    check('uv2azel([0;0]) az', a3.data[0], 0);
    check('uv2azel([0;0]) el', a3.data[1], 0);

    const r4 = await fn([make21(1/Math.SQRT2, 0)]);
    const a4 = r4[0] as any;
    check('uv2azel([1/sqrt2;0]) az', a4.data[0], 45);
    check('uv2azel([1/sqrt2;0]) el', a4.data[1], 0);

    const r5 = await fn([make21(0, 1)]);
    const a5 = r5[0] as any;
    check('uv2azel([0;1]) az', a5.data[0], 0);
    check('uv2azel([0;1]) el', a5.data[1], 90);
  }

  // ── cbfweights ────────────────────────────────────────────────────────────────────────
  {
    const fn = PHASED.builtins['cbfweights'];

    // 5-element ULA pos=[0,0.5,1,1.5,2] (1×5 row), az=30
    const pos5 = mat(1, 5, new Float64Array([0, 0.5, 1, 1.5, 2]));
    const az30 = mat(1, 1, new Float64Array([30]));
    const r1 = await fn([pos5, az30]);
    const w1 = r1[0] as any;
    // w(1)=0.2+0i  w(2)=0+0.2i  w(3)=-0.2+0i  w(4)=0-0.2i  w(5)=0.2+0i
    const re5 = w1.data as Float64Array;
    const im5 = w1.idata as Float64Array;
    check('cbfweights 5-el w1 re', re5[0],  0.2);
    check('cbfweights 5-el w1 im', im5[0],  0);
    check('cbfweights 5-el w2 re', re5[1],  0, 1e-12);
    check('cbfweights 5-el w2 im', im5[1],  0.2);
    check('cbfweights 5-el w3 re', re5[2], -0.2);
    check('cbfweights 5-el w3 im', re5[2] === -0.2 ? im5[2] : im5[2], 0, 1e-12);
    check('cbfweights 5-el w4 re', re5[3],  0, 1e-12);
    check('cbfweights 5-el w4 im', im5[3], -0.2);
    check('cbfweights 5-el w5 re', re5[4],  0.2);
    check('cbfweights 5-el w5 im', im5[4],  0, 1e-12);

    // 4-element ULA pos=[0,0.5,1,1.5], two directions [30 45]
    const pos4 = mat(1, 4, new Float64Array([0, 0.5, 1, 1.5]));
    const ang2 = mat(1, 2, new Float64Array([30, 45]));
    const r2 = await fn([pos4, ang2]);
    const w2 = r2[0] as any;
    const re4 = w2.data as Float64Array;
    const im4 = w2.idata as Float64Array;
    // col1 (az=30): [0.25, 0.25i, -0.25, -0.25i]
    check('cbfweights 4-el col1 w1 re', re4[0],  0.25);
    check('cbfweights 4-el col1 w1 im', im4[0],  0);
    check('cbfweights 4-el col1 w2 re', re4[1],  0, 1e-12);
    check('cbfweights 4-el col1 w2 im', im4[1],  0.25);
    check('cbfweights 4-el col1 w3 re', re4[2], -0.25);
    check('cbfweights 4-el col1 w3 im', im4[2],  0, 1e-12);
    check('cbfweights 4-el col1 w4 re', re4[3],  0, 1e-12);
    check('cbfweights 4-el col1 w4 im', im4[3], -0.25);
    // col2 (az=45): MATLAB oracle values
    check('cbfweights 4-el col2 w1 re', re4[4],  0.25);
    check('cbfweights 4-el col2 w1 im', im4[4],  0);
    check('cbfweights 4-el col2 w2 re', re4[5], -0.151424966769703);
    check('cbfweights 4-el col2 w2 im', im4[5],  0.19892330039187);
    check('cbfweights 4-el col2 w3 re', re4[6], -0.0665638355103539);
    check('cbfweights 4-el col2 w3 im', im4[6], -0.240975633212469);
    check('cbfweights 4-el col2 w4 re', re4[7],  0.232060379411458);
    check('cbfweights 4-el col2 w4 im', im4[7],  0.0929945176201811);
  }

  console.log(`\n${pass + fail} checks: ${pass} passed, ${fail} failed`);
  if (fail > 0) process.exit(1);
}

run().catch(e => { console.error(e); process.exit(1); });
