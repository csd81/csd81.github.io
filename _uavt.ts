// Oracle test for UAV Toolbox (tb/uav.ts)
// All expected values from live MATLAB R2026a.

import { UAV } from './src/sandbox/matlab/tb/uav';
import { rowVec, scalar } from './src/sandbox/matlab/values';

const TOL = 1e-9;

function close(a: number, b: number, label: string): void {
  const denom = Math.max(Math.abs(b), 1e-14);
  const rel   = Math.abs(a - b) / denom;
  if (rel > TOL) {
    console.error(`FAIL ${label}: got ${a}, expected ${b}, relErr=${rel.toExponential(3)}`);
    process.exitCode = 1;
  } else {
    console.log(`PASS ${label}`);
  }
}

async function main() {
  const fn = UAV.builtins;

  // ── uavMinTurningRadius ──────────────────────────────────────────────────────
  {
    const [r] = await fn.uavMinTurningRadius!([scalar(20), scalar(0.5)]);
    const v = (r as any).data[0];
    close(v, 74.6376237191621, 'uavMinTurningRadius(20,0.5)');
  }
  {
    const [r] = await fn.uavMinTurningRadius!([scalar(15), scalar(Math.PI/6)]);
    const v = (r as any).data[0];
    close(v, 39.7259359534146, 'uavMinTurningRadius(15,pi/6)');
  }
  {
    const [r] = await fn.uavMinTurningRadius!([scalar(30), scalar(Math.PI/4)]);
    const v = (r as any).data[0];
    close(v, 91.7431192660551, 'uavMinTurningRadius(30,pi/4)');
  }

  // ── uavFlightPathAngle ───────────────────────────────────────────────────────
  {
    const [r] = await fn.uavFlightPathAngle!([rowVec([10, 5, -3])]);
    const d = (r as any).data;
    close(d[0], 0.262152933325294, 'uavFlightPathAngle([10,5,-3]) gamma');
    close(d[1], 0.463647609000806, 'uavFlightPathAngle([10,5,-3]) psi');
  }
  {
    const [r] = await fn.uavFlightPathAngle!([rowVec([0, 10, 2])]);
    const d = (r as any).data;
    close(d[0], -0.197395559849881, 'uavFlightPathAngle([0,10,2]) gamma');
    close(d[1],  1.5707963267949,   'uavFlightPathAngle([0,10,2]) psi');
  }
  {
    const [r] = await fn.uavFlightPathAngle!([rowVec([0, 0, -10])]);
    const d = (r as any).data;
    close(d[0], 1.5707963267949, 'uavFlightPathAngle([0,0,-10]) gamma');
    close(d[1], 0,               'uavFlightPathAngle([0,0,-10]) psi');
  }

  // ── uavGroundSpeed ───────────────────────────────────────────────────────────
  {
    const [r] = await fn.uavGroundSpeed!([
      scalar(25), scalar(Math.PI/4), scalar(0.1), rowVec([2, 1, 0])
    ]);
    const d = (r as any).data;
    close(d[0], 19.5893548144238, 'uavGroundSpeed(25,pi/4,0.1,[2,1,0]) vN');
    close(d[1], 18.5893548144238, 'uavGroundSpeed(25,pi/4,0.1,[2,1,0]) vE');
    close(d[2], -2.4958354161707, 'uavGroundSpeed(25,pi/4,0.1,[2,1,0]) vD');
    const gs = Math.sqrt(d[0]*d[0] + d[1]*d[1]);
    close(gs, 27.0056833733555, 'uavGroundSpeed(25,pi/4,0.1,[2,1,0]) groundSpeed');
  }
  {
    const [r] = await fn.uavGroundSpeed!([
      scalar(20), scalar(Math.PI/3), scalar(0), rowVec([1, -1, 0])
    ]);
    const d = (r as any).data;
    close(d[0], 11,               'uavGroundSpeed(20,pi/3,0,[1,-1,0]) vN');
    close(d[1], 16.3205080756888, 'uavGroundSpeed(20,pi/3,0,[1,-1,0]) vE');
    close(d[2], 0,                'uavGroundSpeed(20,pi/3,0,[1,-1,0]) vD');
    const gs = Math.sqrt(d[0]*d[0] + d[1]*d[1]);
    close(gs, 19.6814375452766, 'uavGroundSpeed(20,pi/3,0,[1,-1,0]) groundSpeed');
  }

  // ── uavBankAngle ─────────────────────────────────────────────────────────────
  {
    const [r] = await fn.uavBankAngle!([scalar(20), scalar(50)]);
    close((r as any).data[0], 0.684117595232707, 'uavBankAngle(20,50)');
  }
  {
    const [r] = await fn.uavBankAngle!([scalar(15), scalar(40)]);
    close((r as any).data[0], 0.520626863411075, 'uavBankAngle(15,40)');
  }
  {
    const [r] = await fn.uavBankAngle!([scalar(30), scalar(100)]);
    close((r as any).data[0], 0.742362550374071, 'uavBankAngle(30,100)');
  }
  {
    const [r] = await fn.uavBankAngle!([scalar(10), scalar(30)]);
    close((r as any).data[0], 0.327549655122734, 'uavBankAngle(10,30)');
  }

  // ── uavCrossTrackError ────────────────────────────────────────────────────────
  {
    const [r] = await fn.uavCrossTrackError!([
      rowVec([0,0,100]), rowVec([100,100,100]), rowVec([10,50,100])
    ]);
    close((r as any).data[0], 28.2842712474619, 'uavCrossTrackError case 1');
  }
  {
    const [r] = await fn.uavCrossTrackError!([
      rowVec([0,0,0]), rowVec([10,0,0]), rowVec([5,5,5])
    ]);
    close((r as any).data[0], 7.07106781186548, 'uavCrossTrackError case 2');
  }
  {
    const [r] = await fn.uavCrossTrackError!([
      rowVec([0,0,0]), rowVec([0,10,0]), rowVec([5,5,0])
    ]);
    close((r as any).data[0], 5, 'uavCrossTrackError case 3');
  }

  if (process.exitCode === 1) {
    console.error('\nSome tests FAILED');
  } else {
    console.log('\nAll tests PASSED');
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
