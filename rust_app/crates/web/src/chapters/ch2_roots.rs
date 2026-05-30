//! Chapter 2 — root finding with iteration animation.
//!
//! User types `f(x)`, picks a method, and watches successive iterates `p_k`
//! land on the curve. A semilog convergence plot shows the rate.
//!
//! Newton's method uses numerical differentiation (central difference) so the
//! user only has to supply `f(x)`. The arithmetic precisely mirrors the loops
//! in `numerics::roots`; we re-implement them here only so we can capture
//! every intermediate `p_k` for plotting.

use egui::{Color32, RichText, ScrollArea, TextEdit, Ui};
use egui_plot::{Legend, Line, MarkerShape, Plot, PlotPoints, Points, VLine};

use engine::{ast::Expr, parse_expr_str, Env};
use numerics::Matrix;

use crate::i18n::t;

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum Method {
    Bisection,
    FalsePosition,
    Newton,
    Secant,
    FixedPoint,
}

impl Method {
    fn label(&self) -> &'static str {
        use crate::i18n::t;
        match self {
            Self::Bisection => t("Bisection", "Felezés"),
            Self::FalsePosition => t("False position", "Húrmódszer"),
            Self::Newton => t("Newton (num. f′)", "Newton (num. f′)"),
            Self::Secant => t("Secant", "Szelőmódszer"),
            Self::FixedPoint => t("Fixed-point g(x)", "Fixpont g(x)"),
        }
    }
    fn uses_bracket(&self) -> bool {
        matches!(self, Self::Bisection | Self::FalsePosition)
    }
    fn formula_var_is_g(&self) -> bool {
        matches!(self, Self::FixedPoint)
    }
}

pub struct Ch2State {
    formula: String,
    method: Method,
    a: f64,
    b: f64,
    p0: f64,
    p1: f64,
    tol: f64,
    max_iter: usize,
    /// Captured on every re-evaluation; drives the plot.
    trace: Vec<f64>,
    error: Option<String>,
    note: Option<String>,
}

impl Default for Ch2State {
    fn default() -> Self {
        Self {
            // Hartung's running example through Chapter 2.
            formula: "exp(x) - 2*cos(x)".to_string(),
            method: Method::Newton,
            a: 0.0,
            b: 1.0,
            p0: 0.1,
            p1: 1.0,
            tol: 1e-10,
            max_iter: 50,
            trace: Vec::new(),
            error: None,
            note: None,
        }
    }
}

const PRESETS: &[(&str, &str, f64, f64)] = &[
    ("e^x − 2cos x", "exp(x) - 2*cos(x)", 0.0, 1.0),
    ("x³ − x − 1", "x*x*x - x - 1", 0.0, 2.0),
    ("x − cos x", "x - cos(x)", 0.0, 1.0),
    ("0.5·atan x  (Newton diverges)", "0.5*sin(x)/cos(x)", -2.0, 2.0),
    ("sin x  (root at π)", "sin(x)", 2.0, 4.0),
];

pub fn show(ui: &mut Ui, state: &mut Ch2State, env: &mut Env) {
    if state.trace.is_empty() && state.error.is_none() {
        recompute(state, env);
    }

    egui::SidePanel::left("ch2_controls")
        .resizable(true)
        .default_width(320.0)
        .show_inside(ui, |ui| controls(ui, state, env));

    egui::CentralPanel::default().show_inside(ui, |ui| {
        ScrollArea::vertical().show(ui, |ui| {
            ui.heading(t("Chapter 2 — root finding", "2. fejezet — gyökkeresés"));
            intuition_callout(ui);
            ui.add_space(6.0);
            if let Some(err) = &state.error {
                let prefix = t("error: ", "hiba: ");
                ui.colored_label(Color32::from_rgb(240, 130, 130), format!("{prefix}{err}"));
            }
            if let Some(note) = &state.note {
                ui.colored_label(Color32::from_rgb(240, 200, 120), note);
            }
            function_plot(ui, state, env);
            ui.add_space(8.0);
            convergence_plot(ui, state);
            ui.add_space(8.0);
            iterate_table(ui, state, env);
            ui.add_space(10.0);
            pitfall_callout(ui, state);
        });
    });
}

// ──────────────────────────────────────────────────────────────────────────
// Controls
// ──────────────────────────────────────────────────────────────────────────

fn controls(ui: &mut Ui, state: &mut Ch2State, env: &mut Env) {
    let var_name = if state.method.formula_var_is_g() {
        "g(x)"
    } else {
        "f(x)"
    };
    ui.add_space(6.0);
    let func_word = t("Function", "Függvény");
    ui.label(RichText::new(format!("{func_word} {var_name}")).strong());
    let resp = ui.add(
        TextEdit::singleline(&mut state.formula)
            .font(egui::TextStyle::Monospace)
            .desired_width(f32::INFINITY),
    );
    if resp.changed() {
        recompute(state, env);
    }

    ui.add_space(6.0);
    ui.label(RichText::new(t("Method", "Módszer")).strong());
    for &m in &[
        Method::Bisection,
        Method::FalsePosition,
        Method::Newton,
        Method::Secant,
        Method::FixedPoint,
    ] {
        if ui
            .selectable_label(state.method == m, m.label())
            .clicked()
        {
            state.method = m;
            recompute(state, env);
        }
    }

    ui.add_space(8.0);
    let mut changed = false;
    if state.method.uses_bracket() {
        ui.label(RichText::new(t("Bracket  [a, b]", "Beágyazás  [a, b]")).strong());
        ui.horizontal(|ui| {
            let r1 = ui.add(egui::DragValue::new(&mut state.a).speed(0.05));
            let r2 = ui.add(egui::DragValue::new(&mut state.b).speed(0.05));
            changed |= r1.changed() || r2.changed();
        });
    } else {
        ui.label(RichText::new(t("View range  [a, b]", "Nézet  [a, b]")).strong());
        ui.horizontal(|ui| {
            let r1 = ui.add(egui::DragValue::new(&mut state.a).speed(0.05));
            let r2 = ui.add(egui::DragValue::new(&mut state.b).speed(0.05));
            changed |= r1.changed() || r2.changed();
        });
        ui.add_space(2.0);
        ui.label(t("Initial guess(es):", "Kezdőérték(ek):"));
        ui.horizontal(|ui| {
            ui.label("p₀");
            let r = ui.add(egui::DragValue::new(&mut state.p0).speed(0.05));
            changed |= r.changed();
            if state.method == Method::Secant {
                ui.label("p₁");
                let r = ui.add(egui::DragValue::new(&mut state.p1).speed(0.05));
                changed |= r.changed();
            }
        });
    }

    ui.add_space(8.0);
    ui.horizontal(|ui| {
        ui.label(t("tol", "tűrés"));
        let r = ui.add(
            egui::DragValue::new(&mut state.tol)
                .range(1e-15..=1.0)
                .speed(1e-3),
        );
        changed |= r.changed();
        ui.label(t("max iter", "max. iter."));
        let r = ui.add(egui::DragValue::new(&mut state.max_iter).range(1..=500));
        changed |= r.changed();
    });

    if changed {
        recompute(state, env);
    }

    ui.add_space(12.0);
    ui.separator();
    ui.label(RichText::new(t("Presets", "Példák")).strong());
    ui.vertical(|ui| {
        for (name, expr, lo, hi) in PRESETS {
            if ui.small_button(*name).clicked() {
                state.formula = expr.to_string();
                state.a = *lo;
                state.b = *hi;
                state.p0 = 0.5 * (lo + hi);
                state.p1 = *hi;
                recompute(state, env);
            }
        }
    });
}

// ──────────────────────────────────────────────────────────────────────────
// Plot of f(x) with iterate markers
// ──────────────────────────────────────────────────────────────────────────

fn function_plot(ui: &mut Ui, state: &Ch2State, env: &mut Env) {
    let Some(expr) = parse_or_none(&state.formula, env) else {
        return;
    };
    Plot::new("ch2_func")
        .height(280.0)
        .legend(Legend::default())
        .x_axis_label("x")
        .y_axis_label(if state.method.formula_var_is_g() { "g(x)" } else { "f(x)" })
        .show(ui, |plot_ui| {
            // Sample f on [a, b].
            let n = 300;
            let a = state.a.min(state.b);
            let b = state.a.max(state.b);
            let mut pts = Vec::with_capacity(n);
            for i in 0..=n {
                let x = a + (b - a) * (i as f64) / (n as f64);
                if let Some(y) = eval_at(&expr, env, x) {
                    if y.is_finite() {
                        pts.push([x, y]);
                    }
                }
            }
            plot_ui.line(
                Line::new(PlotPoints::from(pts))
                    .color(Color32::from_rgb(120, 180, 255))
                    .name(if state.method.formula_var_is_g() { "g(x)" } else { "f(x)" }),
            );
            // Reference: y = 0 (or y = x for fixed-point so the user sees the cobweb idea).
            if state.method.formula_var_is_g() {
                plot_ui.line(
                    Line::new(PlotPoints::from(vec![[a, a], [b, b]]))
                        .color(Color32::from_rgb(180, 180, 180))
                        .style(egui_plot::LineStyle::Dashed { length: 6.0 })
                        .name("y = x"),
                );
            } else {
                plot_ui.line(
                    Line::new(PlotPoints::from(vec![[a, 0.0], [b, 0.0]]))
                        .color(Color32::from_rgb(180, 180, 180))
                        .style(egui_plot::LineStyle::Dashed { length: 6.0 })
                        .name("y = 0"),
                );
            }
            // Iterate markers.
            let marker_pts: Vec<[f64; 2]> = state
                .trace
                .iter()
                .map(|&p| {
                    let y = eval_at(&expr, env, p).unwrap_or(0.0);
                    [p, y]
                })
                .collect();
            if !marker_pts.is_empty() {
                plot_ui.points(
                    Points::new(PlotPoints::from(marker_pts))
                        .shape(MarkerShape::Circle)
                        .radius(4.5)
                        .color(Color32::from_rgb(255, 200, 80))
                        .name(t("iterates pₖ", "iteráltak pₖ")),
                );
                if let Some(&last) = state.trace.last() {
                    plot_ui.vline(
                        VLine::new(last)
                            .color(Color32::from_rgb(120, 220, 140))
                            .name(t("final pₖ", "végső pₖ")),
                    );
                }
            }
        });
}

// ──────────────────────────────────────────────────────────────────────────
// Semilog convergence plot
// ──────────────────────────────────────────────────────────────────────────

fn convergence_plot(ui: &mut Ui, state: &Ch2State) {
    if state.trace.len() < 2 {
        return;
    }
    // Use the final iterate as the "reference root" — fine when converged.
    let r = *state.trace.last().unwrap();
    let pts: Vec<[f64; 2]> = state
        .trace
        .iter()
        .enumerate()
        .map(|(k, &p)| {
            let err = (p - r).abs().max(1e-20);
            [k as f64, err.log10()]
        })
        .collect();
    Plot::new("ch2_convergence")
        .height(200.0)
        .x_axis_label(t("iteration k", "iteráció k"))
        .y_axis_label("log₁₀ |pₖ − p*|")
        .show(ui, |plot_ui| {
            plot_ui.line(
                Line::new(PlotPoints::from(pts.clone()))
                    .color(Color32::from_rgb(120, 220, 140))
                    .name(t("error", "hiba")),
            );
        });

    // Order-of-convergence diagnostic. For order-q convergence
    // |eₖ₊₁| ≈ C·|eₖ|^q, so log|eₖ₊₁| ≈ q · log|eₖ| + log C, and the slope
    // of log|eₖ₊₁| vs log|eₖ| over the tail estimates q. Theory: bisection
    // ≈ linear (q ≈ 1), secant ≈ φ ≈ 1.618, Newton ≈ 2.
    if pts.len() < 4 {
        return;
    }
    let log_errs: Vec<f64> = pts.iter().map(|p| p[1]).collect();
    let take_tail = log_errs.len().saturating_sub(1).min(8).max(3);
    let start = log_errs.len() - 1 - take_tail;
    let x: Vec<f64> = log_errs[start..log_errs.len() - 1].to_vec();
    let y: Vec<f64> = log_errs[start + 1..].to_vec();
    let n = x.len() as f64;
    if n < 3.0 {
        return;
    }
    let mx = x.iter().sum::<f64>() / n;
    let my = y.iter().sum::<f64>() / n;
    let num: f64 = x
        .iter()
        .zip(y.iter())
        .map(|(a, b)| (a - mx) * (b - my))
        .sum();
    let den: f64 = x.iter().map(|a| (a - mx).powi(2)).sum::<f64>().max(1e-18);
    let q = num / den;
    let expected = match state.method {
        Method::Bisection => t("≈ 1 (linear, rate ½)", "≈ 1 (lineáris, ráta ½)"),
        Method::FalsePosition => t("≈ 1 (linear)", "≈ 1 (lineáris)"),
        Method::Newton => t("≈ 2 (quadratic)", "≈ 2 (kvadratikus)"),
        Method::Secant => "≈ φ ≈ 1.618",
        Method::FixedPoint => t(
            "depends on |g′(p)|; 1 if |g′|>0, 2 if g′(p)=0",
            "|g′(p)|-től függ; 1 ha |g′|>0, 2 ha g′(p)=0",
        ),
    };
    let color = if q.is_finite() && q > 0.0 {
        Color32::from_rgb(220, 220, 180)
    } else {
        Color32::from_rgb(160, 175, 195)
    };
    let order_word = t("Empirical order", "Empirikus rend");
    let theory_word = t("theory", "elmélet");
    ui.label(
        RichText::new(format!(
            "{order_word}  q̂ ≈ {q:.3}     ({theory_word}: {expected})"
        ))
        .monospace()
        .color(color),
    );
}

// ──────────────────────────────────────────────────────────────────────────
// Iterate table
// ──────────────────────────────────────────────────────────────────────────

/// "Why this chapter matters" — the universal toolset. Almost every
/// non-linear problem in science reduces to: "find x where f(x) = 0".
/// Equilibria, intersections, optima, eigenvalues — all roots of *some*
/// function. Naming this up front primes the user to recognise the same
/// machinery wearing other costumes later.
fn intuition_callout(ui: &mut Ui) {
    egui::CollapsingHeader::new(
        RichText::new(t("Why this chapter matters", "Miért fontos ez a fejezet"))
            .strong()
            .color(Color32::from_rgb(220, 200, 120)),
    )
    .default_open(false)
    .show(ui, |ui| {
        ui.label(
            RichText::new(t(
                "Root finding is the most-reused primitive in scientific \
                 computing. Every method in this chapter (with its strengths \
                 and pitfalls) becomes a building block downstream: implicit \
                 ODE solvers (Ch 10) call Newton inside each time step; \
                 line-search optimisers (Ch 8) bisect along the gradient \
                 direction; root-finding under uncertainty becomes the basis \
                 of statistical estimation.",
                "A gyökkeresés a tudományos számítás legtöbbet újrahasznált \
                 építőeleme. E fejezet minden módszere (erősségeivel és \
                 csapdáival) később építőkockává válik: az implicit ODE-megoldók \
                 (10. fej.) minden időlépésben Newtont hívnak; a vonalmenti \
                 optimalizálók (8. fej.) a gradiens mentén feleznek; a \
                 bizonytalanság melletti gyökkeresés a statisztikai becslés alapja.",
            ))
            .small(),
        );
        ui.label(
            RichText::new(t(
                "Two competing pressures shape the algorithms: cost per \
                 iteration (one f, two f, f+f') and convergence order. \
                 Bisection is dirt-cheap but linear; Newton uses derivative \
                 info to land quadratically; secant approximates the \
                 derivative and lands at the golden-ratio order φ ≈ 1.618. \
                 Every chapter past this one revisits the same tradeoff.",
                "Két versengő szempont alakítja az algoritmusokat: a lépésenkénti \
                 költség (egy f, két f, f+f') és a konvergencia rendje. A felezés \
                 fillérekbe kerül, de lineáris; a Newton a derivált információját \
                 használva kvadratikusan ér célba; a szelő közelíti a deriváltat, \
                 és az aranymetszés φ ≈ 1.618 rendjén landol. Minden további \
                 fejezet ugyanezt a kompromisszumot járja körül.",
            ))
            .small()
            .color(Color32::from_rgb(160, 175, 195)),
        );
    });
}

/// Pitfall callout — method-aware. Bisection always works inside a bracket;
/// Newton, secant, and fixed-point have well-known failure modes that the
/// user can reproduce with the presets above. This panel names them so the
/// user knows what to look for rather than just seeing the curve go
/// haywire.
fn pitfall_callout(ui: &mut Ui, state: &Ch2State) {
    let body = match state.method {
        Method::Bisection | Method::FalsePosition => (
            t("Bracketing methods always converge.", "A beágyazó módszerek mindig konvergálnak."),
            t(
                "Given f(a)·f(b) < 0 and continuous f, IVT guarantees a root \
                 inside and bisection halves the bracket every step. The cost is \
                 that convergence is only linear (rate ½), and you must already \
                 have a bracket — finding one can be the hard part.",
                "Ha f(a)·f(b) < 0 és f folytonos, a Bolzano-tétel gyököt garantál \
                 belül, és a felezés minden lépésben felezi az intervallumot. Az ár, \
                 hogy a konvergencia csak lineáris (ráta ½), és már kell legyen \
                 beágyazásod — ennek megtalálása lehet a nehéz rész.",
            ),
        ),
        Method::Newton => (
            t("Newton diverges when f'(pₖ) is small or wrong sign.", "A Newton divergál, ha f'(pₖ) kicsi vagy rossz előjelű."),
            t(
                "Try the \"0.5·atan x  (Newton diverges)\" preset with p₀ = 1.6. \
                 The tangent line at x = 1.6 crosses the x-axis far on the other \
                 side (at ≈ −1.8), and the next tangent crosses at +2.3, then \
                 −3.6 … the iterates run away to ±∞. Same pathology: f(x) = x³ \
                 from x₀ near 0, where f'(0) = 0 traps the iterate.",
                "Próbáld a „0.5·atan x  (Newton divergál)” példát p₀ = 1.6-tal. Az \
                 érintő x = 1.6-nál messze a túloldalon metszi a tengelyt (≈ −1.8), \
                 a következő +2.3-nál, majd −3.6-nál … az iteráltak ±∞-be szöknek. \
                 Ugyanez a kórkép: f(x) = x³ 0-hoz közeli x₀-ból, ahol f'(0) = 0 \
                 csapdába ejt.",
            ),
        ),
        Method::Secant => (
            t("Secant inherits Newton's pathologies + new ones.", "A szelő örökli a Newton kórképeit + újakat."),
            t(
                "Order is φ ≈ 1.618, between bisection (1) and Newton (2). It \
                 fails when f(pₖ₋₁) ≈ f(pₖ): the secant line is nearly \
                 horizontal, the next iterate is wildly far away. Mitigation: \
                 keep p₀ and p₁ close, on the same side of the root.",
                "A rend φ ≈ 1.618, a felezés (1) és a Newton (2) között. Akkor \
                 hibázik, ha f(pₖ₋₁) ≈ f(pₖ): a szelő majdnem vízszintes, a \
                 következő iterált vadul messze kerül. Megoldás: tartsd p₀-t és \
                 p₁-et közel, a gyök ugyanazon oldalán.",
            ),
        ),
        Method::FixedPoint => (
            t("Fixed-point converges only if |g'(p)| < 1 near the root.", "A fixpont csak akkor konvergál, ha |g'(p)| < 1 a gyök közelében."),
            t(
                "If |g'(p)| > 1 the error gets multiplied each step and the \
                 iterates fly away (even if they start on the root!). |g'(p)| = 0 \
                 gives quadratic convergence — equivalent to Newton in disguise. \
                 The line y = x on the plot is the cobweb mirror; geometrically, \
                 convergence ↔ the function lies between y = x − k and y = x + k \
                 with |k| growing slower than the iterates approach.",
                "Ha |g'(p)| > 1, a hiba minden lépésben szorzódik, és az iteráltak \
                 elszállnak (még ha a gyökről indulnak is!). |g'(p)| = 0 \
                 kvadratikus konvergenciát ad — ez a Newton álruhában. Az ábra \
                 y = x egyenese a lépcsős tükör; geometriailag a konvergencia ↔ a \
                 függvény az y = x − k és y = x + k között fut, ahol |k| lassabban \
                 nő, mint ahogy az iteráltak közelednek.",
            ),
        ),
    };
    let pitfall_word = t("Pitfall", "Csapda");
    egui::CollapsingHeader::new(
        RichText::new(format!("{pitfall_word} — {}", body.0))
            .strong()
            .color(Color32::from_rgb(240, 130, 130)),
    )
    .default_open(false)
    .show(ui, |ui| {
        ui.label(RichText::new(body.1).small());
    });
}

fn iterate_table(ui: &mut Ui, state: &Ch2State, env: &mut Env) {
    if state.trace.is_empty() {
        return;
    }
    // Re-parse formula so we can show the residual f(pₖ) per row. If the
    // formula is bad, fall back to the bare trace.
    let expr = parse_expr_str(&state.formula).ok();
    let trace_word = t("Step trace", "Lépésnapló");
    let iter_word = t("iterates", "iterált");
    ui.collapsing(
        RichText::new(format!("{trace_word}  ({} {iter_word})", state.trace.len())),
        |ui| {
            ui.label(
                RichText::new(t(
                    "Columns: k = iteration index, pₖ = current estimate, \
                     |Δpₖ| = step from the previous estimate (Cauchy proxy), \
                     f(pₖ) = residual (should drive toward 0).",
                    "Oszlopok: k = iterációs index, pₖ = aktuális becslés, \
                     |Δpₖ| = lépés az előző becsléstől (Cauchy-közelítés), \
                     f(pₖ) = reziduum (0 felé kell tartania).",
                ))
                .small()
                .color(Color32::from_rgb(160, 175, 195)),
            );
            ui.add_space(4.0);
            egui::Grid::new("ch2_iter_table")
                .num_columns(4)
                .spacing([16.0, 2.0])
                .show(ui, |ui| {
                    ui.label(RichText::new("k").monospace().strong());
                    ui.label(RichText::new("pₖ").monospace().strong());
                    ui.label(RichText::new("|Δpₖ|").monospace().strong());
                    ui.label(RichText::new("f(pₖ)").monospace().strong());
                    ui.end_row();
                    let mut prev: Option<f64> = None;
                    for (k, &p) in state.trace.iter().enumerate() {
                        let dp = prev.map(|q| (p - q).abs()).unwrap_or(f64::NAN);
                        let fp = expr
                            .as_ref()
                            .and_then(|e| eval_at(e, env, p))
                            .unwrap_or(f64::NAN);
                        let dp_color = if dp.is_finite() && dp < 1e-10 {
                            Color32::from_rgb(120, 220, 140)
                        } else if dp.is_finite() && dp < 1e-4 {
                            Color32::from_rgb(240, 200, 120)
                        } else {
                            Color32::from_rgb(200, 215, 230)
                        };
                        let fp_color = if fp.abs() < 1e-10 {
                            Color32::from_rgb(120, 220, 140)
                        } else if fp.abs() < 1e-4 {
                            Color32::from_rgb(240, 200, 120)
                        } else {
                            Color32::from_rgb(240, 130, 130)
                        };
                        ui.label(RichText::new(format!("{k:>3}")).monospace());
                        ui.label(RichText::new(format!("{p:+.12}")).monospace());
                        if dp.is_finite() {
                            ui.label(
                                RichText::new(format!("{dp:.3e}"))
                                    .monospace()
                                    .color(dp_color),
                            );
                        } else {
                            ui.label(RichText::new("—").monospace().weak());
                        }
                        ui.label(
                            RichText::new(format!("{fp:+.3e}"))
                                .monospace()
                                .color(fp_color),
                        );
                        ui.end_row();
                        prev = Some(p);
                    }
                });
        },
    );
}

// ──────────────────────────────────────────────────────────────────────────
// The actual iteration logic (mirrors numerics::roots)
// ──────────────────────────────────────────────────────────────────────────

fn recompute(state: &mut Ch2State, env: &mut Env) {
    state.trace.clear();
    state.error = None;
    state.note = None;

    let Some(expr) = parse_or_record(state, env) else {
        return;
    };

    let mut f = |x: f64| eval_at(&expr, env, x).unwrap_or(f64::NAN);

    let result = match state.method {
        Method::Bisection => bisection_trace(&mut f, state.a, state.b, state.tol, state.max_iter),
        Method::FalsePosition => false_position_trace(&mut f, state.a, state.b, state.tol, state.max_iter),
        Method::Newton => newton_trace(&mut f, state.p0, state.tol, state.max_iter),
        Method::Secant => secant_trace(&mut f, state.p0, state.p1, state.tol, state.max_iter),
        Method::FixedPoint => fixed_point_trace(&mut f, state.p0, state.tol, state.max_iter),
    };
    match result {
        Ok(trace) => state.trace = trace,
        Err(msg) => state.error = Some(msg),
    }
}

fn parse_or_record(state: &mut Ch2State, _env: &mut Env) -> Option<Expr> {
    match parse_expr_str(&state.formula) {
        Ok(e) => Some(e),
        Err(err) => {
            state.error = Some(err.to_string());
            None
        }
    }
}

fn parse_or_none(src: &str, _env: &mut Env) -> Option<Expr> {
    parse_expr_str(src).ok()
}

fn eval_at(expr: &Expr, env: &mut Env, x: f64) -> Option<f64> {
    env.set("x", Matrix::scalar(x));
    let v = env.eval(expr).ok()?;
    v.as_scalar()
}

fn bisection_trace<F: FnMut(f64) -> f64>(
    f: &mut F,
    a: f64,
    b: f64,
    tol: f64,
    max_iter: usize,
) -> Result<Vec<f64>, String> {
    let (mut a, mut b) = if a <= b { (a, b) } else { (b, a) };
    let mut fa = f(a);
    let fb = f(b);
    if fa.is_nan() || fb.is_nan() {
        return Err("f returned NaN at a or b".into());
    }
    if fa * fb > 0.0 {
        return Err(format!("f(a)·f(b) > 0  (f(a)={fa}, f(b)={fb}) — bracket has same sign"));
    }
    let mut out = Vec::with_capacity(max_iter);
    for _ in 0..max_iter {
        let p = 0.5 * (a + b);
        out.push(p);
        let fp = f(p);
        if fp == 0.0 || 0.5 * (b - a) < tol {
            return Ok(out);
        }
        if fa * fp < 0.0 {
            b = p;
        } else {
            a = p;
            fa = fp;
        }
    }
    Ok(out)
}

fn false_position_trace<F: FnMut(f64) -> f64>(
    f: &mut F,
    a: f64,
    b: f64,
    tol: f64,
    max_iter: usize,
) -> Result<Vec<f64>, String> {
    let (mut a, mut b) = (a, b);
    let mut fa = f(a);
    let mut fb = f(b);
    if fa * fb > 0.0 {
        return Err(format!("f(a)·f(b) > 0  (f(a)={fa}, f(b)={fb})"));
    }
    let mut out = Vec::with_capacity(max_iter);
    let mut prev = f64::INFINITY;
    for _ in 0..max_iter {
        let denom = fa - fb;
        if denom == 0.0 {
            return Err("degenerate update: f(a) == f(b)".into());
        }
        let p = a - fa * (a - b) / denom;
        out.push(p);
        let fp = f(p);
        if fp == 0.0 || (p - prev).abs() < tol {
            return Ok(out);
        }
        if fp * fb < 0.0 {
            a = p;
            fa = fp;
        } else {
            b = p;
            fb = fp;
        }
        prev = p;
    }
    Ok(out)
}

fn newton_trace<F: FnMut(f64) -> f64>(
    f: &mut F,
    p0: f64,
    tol: f64,
    max_iter: usize,
) -> Result<Vec<f64>, String> {
    let mut p = p0;
    let mut out = vec![p];
    let h = 1e-6;
    for _ in 0..max_iter {
        let fp = f(p);
        // Central-difference numerical derivative.
        let dfp = (f(p + h) - f(p - h)) / (2.0 * h);
        if dfp.abs() < 1e-300 {
            return Err(format!("f'(p) ≈ 0 at p = {p}"));
        }
        let p_new = p - fp / dfp;
        out.push(p_new);
        if !p_new.is_finite() {
            return Err("iteration overflowed to infinity".into());
        }
        if (p_new - p).abs() < tol {
            return Ok(out);
        }
        p = p_new;
    }
    Ok(out)
}

fn secant_trace<F: FnMut(f64) -> f64>(
    f: &mut F,
    p0: f64,
    p1: f64,
    tol: f64,
    max_iter: usize,
) -> Result<Vec<f64>, String> {
    let mut p_prev = p0;
    let mut p_curr = p1;
    let mut f_prev = f(p_prev);
    let mut f_curr = f(p_curr);
    let mut out = vec![p_prev, p_curr];
    for _ in 0..max_iter {
        let denom = f_curr - f_prev;
        if denom == 0.0 {
            return Err("secant denominator vanished".into());
        }
        let p_next = p_curr - f_curr * (p_curr - p_prev) / denom;
        out.push(p_next);
        if !p_next.is_finite() {
            return Err("iteration overflowed to infinity".into());
        }
        if (p_next - p_curr).abs() < tol {
            return Ok(out);
        }
        p_prev = p_curr;
        f_prev = f_curr;
        p_curr = p_next;
        f_curr = f(p_curr);
    }
    Ok(out)
}

fn fixed_point_trace<G: FnMut(f64) -> f64>(
    g: &mut G,
    p0: f64,
    tol: f64,
    max_iter: usize,
) -> Result<Vec<f64>, String> {
    let mut p = p0;
    let mut out = vec![p];
    for _ in 0..max_iter {
        let p_new = g(p);
        if !p_new.is_finite() {
            return Err("iteration overflowed to infinity".into());
        }
        out.push(p_new);
        if (p_new - p).abs() < tol {
            return Ok(out);
        }
        p = p_new;
    }
    Ok(out)
}
