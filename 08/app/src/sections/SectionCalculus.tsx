import { useMemo, useState } from "react";
import { useLang } from "../contexts/LanguageContext";
import { SECTIONS } from "./registry";
import SectionShell from "./SectionShell";
import Scrolly, { type ScrollyStep } from "../components/Scrolly";
import ContourPlot, { type ContourOverlay } from "../components/plots/ContourPlot";
import { SelectField } from "../components/controls";
import Tex from "../components/Math";
import MathDetails from "../components/MathDetails";
import { Callout, Theorem } from "../components/Callout";
import { bowl, dome, saddle, type Fn2D } from "../math/functions";
import { classify2x2, type Vec } from "../math/linalg";

const meta = SECTIONS.find((s) => s.id === "calculus")!;
type Kind = "min" | "max" | "saddle" | "degenerate";

const QUIZ: { fn: Fn2D; at: Vec }[] = [
  { fn: bowl, at: [0, 0] },
  { fn: dome, at: [0, 0] },
  { fn: saddle, at: [0, 0] },
];

export default function SectionCalculus() {
  const { t } = useLang();
  const [qi, setQi] = useState(0);
  const [showField, setShowField] = useState(true);
  const [guess, setGuess] = useState<Kind | null>(null);

  const q = QUIZ[qi];
  const truth = useMemo<Kind>(
    () => classify2x2(q.fn.hess(q.at[0], q.at[1])),
    [q]
  );

  const steps: ScrollyStep[] = [
    {
      kicker: t({ en: "Where to look", hu: "Hol keressünk" }),
      title: t({ en: "Minima hide where the slope dies", hu: "A minimum ott lapul, ahol a meredekség elhal" }),
      body: (
        <p>
          {t({
            en: "At any local minimum or maximum of a smooth function, every partial derivative is zero: ∇f = 0. These flat spots — critical points — are the only candidates.",
            hu: "Egy sima függvény minden lokális minimumában vagy maximumában minden parciális derivált nulla: ∇f = 0. Ezek a lapos pontok — a kritikus pontok — az egyetlen jelöltek.",
          })}
        </p>
      ),
    },
    {
      kicker: t({ en: "Not enough", hu: "Nem elég" }),
      title: t({ en: "Flat ≠ minimum", hu: "Lapos ≠ minimum" }),
      body: (
        <>
          <p>
            {t({
              en: "A zero gradient could be a valley bottom, a hilltop, or a saddle (down one way, up another). Toggle the gradient field: arrows die at the critical point but say nothing about its type.",
              hu: "A nulla gradiens lehet völgyalja, hegytető vagy nyeregpont (egyik irányban le, másikban fel). Kapcsold be a gradiensmezőt: a nyilak elhalnak a kritikus pontban, de a típusáról nem árulkodnak.",
            })}
          </p>
          <Callout emoji="🪑">
            {t({
              en: "A saddle is the classic trap: ∇f = 0, yet it's neither a min nor a max.",
              hu: "A nyeregpont a klasszikus csapda: ∇f = 0, mégsem minimum, sem maximum.",
            })}
          </Callout>
        </>
      ),
    },
    {
      kicker: t({ en: "The test", hu: "A teszt" }),
      title: t({ en: "Ask the curvature (Hessian)", hu: "Kérdezd a görbületet (Hesse)" }),
      body: (
        <p>
          {t({
            en: "The Hessian — the matrix of second derivatives — decides. Positive definite ⇒ minimum, negative definite ⇒ maximum, mixed signs ⇒ saddle. For 2D, just check D = fₓₓf_yy − fₓy².",
            hu: "A Hesse-mátrix — a második deriváltak mátrixa — dönt. Pozitív definit ⇒ minimum, negatív definit ⇒ maximum, vegyes előjelek ⇒ nyeregpont. 2D-ben elég a D = fₓₓf_yy − fₓy² ellenőrzése.",
          })}
        </p>
      ),
    },
    {
      kicker: t({ en: "Your turn", hu: "Te jössz" }),
      title: t({ en: "Min, max, or saddle?", hu: "Minimum, maximum vagy nyereg?" }),
      body: (
        <>
          <p>
            {t({
              en: "The marked dot is a critical point of the function on the right. Read the contours and make the call — then check the Hessian verdict.",
              hu: "A megjelölt pont a jobb oldali függvény kritikus pontja. Olvasd le a szintvonalakból, és dönts — majd nézd meg a Hesse-mátrix ítéletét.",
            })}
          </p>
          <div className="quiz">
            {(["min", "max", "saddle"] as Kind[]).map((k) => (
              <button
                key={k}
                className={
                  guess === k ? (k === truth ? "correct" : "wrong") : ""
                }
                onClick={() => setGuess(k)}
              >
                {t(
                  {
                    min: { en: "Minimum", hu: "Minimum" },
                    max: { en: "Maximum", hu: "Maximum" },
                    saddle: { en: "Saddle", hu: "Nyeregpont" },
                    degenerate: { en: "Degenerate", hu: "Elfajuló" },
                  }[k]
                )}
              </button>
            ))}
          </div>
          {guess && (
            <p style={{ marginTop: 10 }}>
              {guess === truth
                ? t({ en: "✅ Correct! ", hu: "✅ Helyes! " })
                : t({ en: "❌ Not quite — ", hu: "❌ Nem egészen — " })}
              {t({
                en: `the Hessian here is ${verdictWord(truth, "en")}.`,
                hu: `az itteni Hesse-mátrix ${verdictWord(truth, "hu")}.`,
              })}
            </p>
          )}
        </>
      ),
    },
  ];

  return (
    <SectionShell meta={meta}>
      <Scrolly
        steps={steps}
        graphic={() => (
          <CalcGraphic
            q={q}
            qi={qi}
            setQi={(n) => {
              setQi(n);
              setGuess(null);
            }}
            showField={showField}
            setShowField={setShowField}
            truth={truth}
            revealed={guess != null}
          />
        )}
      />

      <MathDetails>
        <Theorem label={t({ en: "Necessary condition", hu: "Szükséges feltétel" })}>
          <p>{t({ en: "If f has a local extremum at a, then", hu: "Ha f-nek lokális szélsőértéke van a-ban, akkor" })}</p>
          <Tex block>{"\\frac{\\partial f}{\\partial x_i}(\\mathbf a) = 0 \\quad (i = 1,\\dots,n), \\qquad \\text{i.e. } \\nabla f(\\mathbf a) = \\mathbf 0."}</Tex>
        </Theorem>
        <Theorem label={t({ en: "Second-order test (2D)", hu: "Másodrendű teszt (2D)" })} proof>
          <Tex block>{"D = \\frac{\\partial^2 f}{\\partial x^2}\\frac{\\partial^2 f}{\\partial y^2} - \\Big(\\frac{\\partial^2 f}{\\partial x\\,\\partial y}\\Big)^2."}</Tex>
          <p>
            {t({
              en: "D > 0 and fₓₓ > 0 ⇒ minimum; D > 0 and fₓₓ < 0 ⇒ maximum; D < 0 ⇒ saddle. In general: the Hessian's definiteness decides.",
              hu: "D > 0 és fₓₓ > 0 ⇒ minimum; D > 0 és fₓₓ < 0 ⇒ maximum; D < 0 ⇒ nyeregpont. Általában: a Hesse-mátrix definitsége dönt.",
            })}
          </p>
        </Theorem>
      </MathDetails>
    </SectionShell>
  );
}

function verdictWord(k: Kind, lang: "en" | "hu"): string {
  const m: Record<Kind, { en: string; hu: string }> = {
    min: { en: "positive definite (a minimum)", hu: "pozitív definit (minimum)" },
    max: { en: "negative definite (a maximum)", hu: "negatív definit (maximum)" },
    saddle: { en: "indefinite (a saddle)", hu: "indefinit (nyeregpont)" },
    degenerate: { en: "degenerate", hu: "elfajuló" },
  };
  return m[k][lang];
}

function CalcGraphic({
  q,
  qi,
  setQi,
  showField,
  setShowField,
  truth,
  revealed,
}: {
  q: { fn: Fn2D; at: Vec };
  qi: number;
  setQi: (n: number) => void;
  showField: boolean;
  setShowField: (v: boolean) => void;
  truth: Kind;
  revealed: boolean;
}) {
  const { t } = useLang();

  // build a sparse gradient field as little arrows
  const arrows = useMemo(() => {
    if (!showField) return [];
    const out: { from: Vec; to: Vec }[] = [];
    const d = q.fn.domain;
    const n = 7;
    for (let i = 1; i < n; i++)
      for (let j = 1; j < n; j++) {
        const x = d.xmin + ((d.xmax - d.xmin) * i) / n;
        const y = d.ymin + ((d.ymax - d.ymin) * j) / n;
        const g = q.fn.grad(x, y);
        const gn = Math.hypot(g[0], g[1]) || 1;
        const len = Math.min(0.13 * (d.xmax - d.xmin), (0.13 * (d.xmax - d.xmin) * gn) / (gn + 1));
        out.push({ from: [x, y], to: [x - (g[0] / gn) * len, y - (g[1] / gn) * len] });
      }
    return out;
  }, [q, showField]);

  // ContourPlot supports a single arrow; draw the field as short paths instead.
  const overlay: ContourOverlay = {
    paths: arrows.map((a) => ({
      pts: [a.from, a.to],
      color: "var(--plot-accent)",
    })),
    points: [
      {
        p: q.at,
        ring: true,
        color: revealed
          ? truth === "min"
            ? "var(--plot-path2)"
            : truth === "max"
            ? "var(--plot-path)"
            : "var(--warm)"
          : "var(--plot-point)",
        r: 7,
      },
    ],
  };

  return (
    <div>
      <ContourPlot fn={q.fn} overlay={overlay} height={400} />
      <div className="readout">
        <span><span className="k">f</span> <b><Tex>{q.fn.tex}</Tex></b></span>
        <span>
          <span className="k">∇f({q.at.join(", ")})</span> <b>= (0, 0)</b>
        </span>
        {revealed && (
          <span>
            <span className="k">{t({ en: "verdict", hu: "ítélet" })}</span>{" "}
            <b>{verdictWord(truth, "en").split(" (")[0]}</b>
          </span>
        )}
      </div>
      <div className="controls">
        <SelectField
          label={t({ en: "Pick a critical point", hu: "Válassz kritikus pontot" })}
          value={String(qi)}
          onChange={(v) => setQi(Number(v))}
          options={QUIZ.map((qq, idx) => ({
            value: String(idx),
            label: qq.fn.label,
          }))}
        />
        <button
          className={`ctl-btn${showField ? " ctl-btn--accent" : ""}`}
          onClick={() => setShowField(!showField)}
        >
          {t({ en: "Gradient field", hu: "Gradiensmező" })}
        </button>
      </div>
    </div>
  );
}
