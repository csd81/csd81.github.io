import { useEffect, useRef, useState } from 'react';
import { RichTex } from './kit';

type Op = 'union' | 'isect' | 'dab' | 'dba' | 'symd' | 'comp';

const VW = 400;
const VH = 230;
const CA = { x: 148, y: 115, r: 88 };
const CB = { x: 252, y: 115, r: 88 };
const PURPLE = 'rgba(167,139,250,';

const OPS: { op: Op; label: string }[] = [
  { op: 'union', label: '\\(A \\cup B\\) — unió' },
  { op: 'isect', label: '\\(A \\cap B\\) — metszet' },
  { op: 'dab', label: '\\(A \\setminus B\\)' },
  { op: 'dba', label: '\\(B \\setminus A\\)' },
  { op: 'symd', label: '\\(A \\mathbin{\\triangle} B\\)' },
  { op: 'comp', label: '\\(\\overline{A}\\)' },
];

const OP_META: Record<Op, { t: string; d: string }> = {
  union: { t: '\\(A \\cup B\\) — Unió', d: 'A és B <strong style="color:#a78bfa">uniója</strong>: \\(\\{x \\in U : x \\in A \\text{ vagy } x \\in B\\}\\)' },
  isect: { t: '\\(A \\cap B\\) — Metszet', d: 'A és B <strong style="color:#a78bfa">metszete</strong>: \\(\\{x \\in U : x \\in A \\text{ és } x \\in B\\}\\)' },
  dab: { t: '\\(A \\setminus B\\) — Különbség', d: '<strong style="color:#a78bfa">Különbség</strong>: \\(\\{x \\in U : x \\in A \\text{ és } x \\notin B\\}\\)' },
  dba: { t: '\\(B \\setminus A\\) — Különbség', d: '\\(\\{x \\in U : x \\in B \\text{ és } x \\notin A\\}\\)' },
  symd: { t: '\\(A \\mathbin{\\triangle} B\\) — Szimmetrikus különbség', d: '<strong style="color:#a78bfa">Szimm. különbség</strong>: \\((A \\setminus B) \\cup (B \\setminus A)\\) — ami pontosan az egyikben van, a másikban nem.' },
  comp: { t: '\\(\\overline{A}\\) — Komplemens', d: 'A <strong style="color:#a78bfa">komplementere</strong>: \\(\\{x \\in U : x \\notin A\\}\\)' },
};

function cA(c: CanvasRenderingContext2D) { c.beginPath(); c.arc(CA.x, CA.y, CA.r, 0, Math.PI * 2); }
function cB(c: CanvasRenderingContext2D) { c.beginPath(); c.arc(CB.x, CB.y, CB.r, 0, Math.PI * 2); }

function drawVenn(ctx: CanvasRenderingContext2D, op: Op) {
  ctx.clearRect(0, 0, VW, VH);
  ctx.save();
  switch (op) {
    case 'union':
      ctx.fillStyle = PURPLE + '0.42)';
      cA(ctx); ctx.fill();
      cB(ctx); ctx.fill();
      break;
    case 'isect':
      cA(ctx); ctx.clip();
      ctx.fillStyle = PURPLE + '0.6)';
      cB(ctx); ctx.fill();
      break;
    case 'dab':
      ctx.fillStyle = PURPLE + '0.52)';
      cA(ctx); ctx.fill();
      ctx.globalCompositeOperation = 'destination-out';
      cB(ctx); ctx.fill();
      break;
    case 'dba':
      ctx.fillStyle = PURPLE + '0.52)';
      cB(ctx); ctx.fill();
      ctx.globalCompositeOperation = 'destination-out';
      cA(ctx); ctx.fill();
      break;
    case 'symd': {
      const tmp = document.createElement('canvas');
      tmp.width = VW; tmp.height = VH;
      const tc = tmp.getContext('2d')!;
      tc.fillStyle = 'rgb(167,139,250)';
      tc.globalCompositeOperation = 'xor';
      tc.beginPath(); tc.arc(CA.x, CA.y, CA.r, 0, Math.PI * 2); tc.fill();
      tc.beginPath(); tc.arc(CB.x, CB.y, CB.r, 0, Math.PI * 2); tc.fill();
      ctx.globalAlpha = 0.48;
      ctx.drawImage(tmp, 0, 0);
      ctx.globalAlpha = 1;
      break;
    }
    case 'comp':
      ctx.fillStyle = PURPLE + '0.35)';
      ctx.beginPath();
      ctx.rect(4, 4, VW - 8, VH - 8);
      ctx.arc(CA.x, CA.y, CA.r, 0, Math.PI * 2, true);
      ctx.fill();
      break;
  }
  ctx.restore();

  ctx.strokeStyle = '#a78bfa'; ctx.lineWidth = 2;
  cA(ctx); ctx.stroke();
  cB(ctx); ctx.stroke();
  ctx.strokeStyle = '#374151'; ctx.lineWidth = 1.5;
  ctx.strokeRect(4, 4, VW - 8, VH - 8);
  ctx.font = 'bold 18px Georgia,serif'; ctx.fillStyle = '#e2e8f0';
  ctx.fillText('A', CA.x - 68, CA.y - 63);
  ctx.fillText('B', CB.x + 50, CB.y - 63);
  ctx.font = '13px Georgia,serif'; ctx.fillStyle = '#6b7280';
  ctx.fillText('U', VW - 22, 22);
}

/** Interactive set-operation Venn diagram (ILA ch1, tab 3). */
export function VennLab() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [op, setOp] = useState<Op>('union');

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) drawVenn(ctx, op);
  }, [op]);

  return (
    <div>
      <div className="op-row">
        {OPS.map((o) => (
          <button
            key={o.op}
            className={`op-btn${op === o.op ? ' is-active' : ''}`}
            onClick={() => setOp(o.op)}
          >
            <RichTex html={o.label} />
          </button>
        ))}
      </div>
      <canvas ref={canvasRef} width={VW} height={VH} />
      <div className="def-box" style={{ marginTop: '0.75rem' }}>
        <RichTex className="lbl" html={OP_META[op].t} />
        <RichTex className="box-body" html={OP_META[op].d} />
      </div>
    </div>
  );
}
