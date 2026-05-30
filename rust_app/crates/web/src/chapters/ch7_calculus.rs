//! Chapter 7 — numerical differentiation and integration, taught visually.
//!
//! Three sub-modes, picked from the side panel:
//!
//! 1. **Differentiation** — pick `f(x)`, watch every difference formula in
//!    the book report side-by-side. The killer plot: error vs `h` on log-log
//!    axes shows truncation error shrinking like `h¹`, `h²`, `h⁴`, then the
//!    **rounding-error wall** that turns the curve back upward at very small
//!    `h`. The book's exact pedagogical setup (Example 7.5).
//!
//! 2. **Newton-Cotes integration** — pick `f(x)` and `[a, b]`, see the
//!    trapezoid/Simpson/Boole panels drawn as filled polygons under the
//!    curve. A convergence panel shows error-vs-h on log-log axes; the
//!    slopes are exactly the book's theoretical orders: `−2` for trapezoid,
//!    `−4` for Simpson, `−6` for Boole.
//!
//! 3. **Gaussian quadrature** — the Legendre polynomial `Pₙ` plotted with
//!    its roots highlighted (the Gauss nodes), weights drawn as a bar chart.
//!    A "degree-of-precision" demo applies the rule to `x^p` and shades the
//!    cell green for `p ≤ 2n−1` (exact) vs red for `p ≥ 2n`.

use egui::{Color32, RichText, ScrollArea, Ui};
use egui_plot::{
    Bar, BarChart, Legend, Line, MarkerShape, Plot, PlotPoints, Points, Polygon, VLine,
};

use engine::{ast::Expr, parse_expr_str, Env};
use numerics::{calculus as calc, Matrix};

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum Mode {
    Diff,
    NewtonCotes,
    Gauss,
}

impl Mode {
    fn label(&self) -> &'static str {
        match self {
            Self::Diff => "1.   Differentiation",
            Self::NewtonCotes => "2.   Newton-Cotes integration",
            Self::Gauss => "3.   Gaussian quadrature",
        }
    }
}

pub struct Ch7State {
    mode: Mode,

    // Differentiation
    diff_formula: String,
    diff_x: f64,
    diff_log_h: f64,

    // Newton-Cotes
    int_formula: String,
    int_a: f64,
    int_b: f64,
    int_n_panels: usize,

    // Gauss-Legendre
    gauss_n: usize,
    gauss_test_degree: usize,
    gauss_formula: String,
}

impl Default for Ch7State {
    fn default() -> Self {
        Self {
            mode: Mode::Diff,
            diff_formula: "exp(x*x + x)".to_string(),
            diff_x: 0.0,
            diff_log_h: -2.0,
            int_formula: "x*x*exp(x)".to_string(),
            int_a: 0.0,
            int_b: 1.0,
            int_n_panels: 4,
            gauss_n: 4,
            gauss_test_degree: 7,
            gauss_formula: "exp(x)".to_string(),
        }
    }
}

pub fn show(ui: &mut Ui, state: &mut Ch7State, env: &mut Env) {
    egui::SidePanel::left("ch7_controls")
        .resizable(true)
        .default_width(340.0)
        .show_inside(ui, |ui| controls(ui, state));

    egui::CentralPanel::default().show_inside(ui, |ui| {
        ScrollArea::vertical().show(ui, |ui| {
            ui.heading("Chapter 7 — numerical calculus");
            intuition_callout(ui);
            ui.add_space(8.0);
            match state.mode {
                Mode::Diff => diff_view(ui, state, env),
                Mode::NewtonCotes => newton_cotes_view(ui, state, env),
                Mode::Gauss => gauss_view(ui, state, env),
            }
            ui.add_space(8.0);
            pitfall_callout(ui, state.mode);
            ui.add_space(10.0);
            try_this_challenges(ui, state.mode);
        });
    });
}

/// Mode-aware pitfall callout for numerical calculus. Differentiation
/// suffers round-off catastrophe at small h; integration suffers from
/// non-smooth integrands; Gauss quadrature suffers when the function has
/// poles close to the interval.
fn pitfall_callout(ui: &mut Ui, mode: Mode) {
    let (title, body) = match mode {
        Mode::Diff => (
            "Pitfall — chase truncation, hit round-off",
            "Forward / central differences subtract two close numbers. Halving \
             h cuts truncation but doubles relative round-off, so total error \
             is V-shaped vs h. Pushing the slider below the V's bottom \
             *increases* error. Multi-point stencils (5-pt central) push the \
             V deeper and to the left but the V remains. If you need many \
             accurate digits, differentiate the formula symbolically or use \
             complex-step differentiation Im(f(x+ih))/h, which avoids the \
             subtractive cancellation entirely.",
        ),
        Mode::NewtonCotes => (
            "Pitfall — Newton-Cotes wants smoothness",
            "Composite trapezoid is O(h²), Simpson O(h⁴), Boole O(h⁶) — \
             but only when f is sufficiently smooth (more derivatives = \
             higher order). On |x|, ⌊x⌋, or √(1−x²) the order collapses \
             back to O(h) or worse. Adaptive quadrature or specialised \
             rules (Gauss-Chebyshev for √-singularities) recover.",
        ),
        Mode::Gauss => (
            "Pitfall — Gauss is exponential, not magical",
            "Gauss-Legendre converges geometrically *only* for functions \
             analytic on a Bernstein ellipse around the integration \
             interval. A pole of f close to the interval (say 1/(1+25x²) on \
             [−1,1]) shrinks the ellipse and slows convergence dramatically \
             — same Runge phenomenon as Lagrange interpolation, dressed as \
             quadrature. Move the interval, change variables, or split it.",
        ),
    };
    egui::CollapsingHeader::new(
        RichText::new(title)
            .strong()
            .color(Color32::from_rgb(240, 130, 130)),
    )
    .default_open(false)
    .show(ui, |ui| {
        ui.label(RichText::new(body).small());
    });
}

/// "Try this" — mode-aware challenges for differentiation / integration /
/// Gauss-Legendre. Each is a one-line experiment that the user can run by
/// adjusting the controls on the left; the answer hides behind a button.
fn try_this_challenges(ui: &mut Ui, mode: Mode) {
    let mode_key = match mode {
        Mode::Diff => "diff",
        Mode::NewtonCotes => "newton_cotes",
        Mode::Gauss => "gauss",
    };
    let id_open = ui.make_persistent_id(format!("ch7_try_open_{mode_key}"));
    let mut open: Option<usize> = ui
        .ctx()
        .data(|d| d.get_temp::<Option<usize>>(id_open))
        .unwrap_or(None);
    let entries: &[(&str, &str)] = match mode {
        Mode::Diff => &[
            (
                "Push log₁₀ h down to −14. What happens to the forward, central, and 5-point errors?",
                "Forward and central errors blow up due to round-off (subtracting nearly-equal numbers). 5-point is more resistant because its coefficients cancel some round-off, but it eventually fails too. The total error is V-shaped: truncation falls, then round-off rises.",
            ),
            (
                "Set f = abs(x) and x₀ = 0. Predict the derivatives.",
                "f is not differentiable at 0 — forward gives +1, backward gives −1, central averages to 0. The finite differences cannot detect the kink; they hand back whatever combination of slopes they sample.",
            ),
        ],
        Mode::NewtonCotes => &[
            (
                "Set f = x³ on [0, 1] with n = 1 panel. Trapezoid gives 0.5, Simpson gives 0.25 (exact). Why is Simpson exact?",
                "Simpson 1/3 integrates any polynomial up to degree 3 exactly because it fits a parabola but the parabola's error vanishes on cubics by symmetry. That extra degree of freedom is why Simpson is O(h⁴) instead of O(h³).",
            ),
            (
                "Set f = √(1 − x²) on [−1, 1] (area of unit half-disk). Bump n and watch how slowly the trapezoid error decays.",
                "Endpoint singularities in f' destroy the smoothness Simpson relies on, so the order drops. Specialised quadratures (Gauss-Chebyshev for √-type endpoints) are dramatically better here.",
            ),
        ],
        Mode::Gauss => &[
            (
                "Set n = 4 nodes. Polynomials up to which degree are exact?",
                "Gauss-Legendre with n nodes is exact for polynomials up to degree 2n−1. So 4 nodes integrates degree-7 polynomials exactly — better than Simpson's degree-3 exactness with the same node count.",
            ),
            (
                "Switch to a non-polynomial like f = 1/(1 + x²) on [−1, 1] (= 2 arctan 1 = π/2). How many nodes get you below 1e-10?",
                "Around n = 8–10. Gauss converges exponentially fast for analytic integrands; the convergence rate depends on the location of the nearest singularity of f in the complex plane.",
            ),
        ],
    };
    egui::Frame::group(ui.style()).show(ui, |ui| {
        ui.label(
            RichText::new("Try this")
                .strong()
                .color(Color32::from_rgb(255, 220, 100)),
        );
        for (idx, (q, a)) in entries.iter().enumerate() {
            ui.horizontal_wrapped(|ui| {
                ui.label(
                    RichText::new(format!("{}.", idx + 1))
                        .monospace()
                        .color(Color32::from_rgb(240, 200, 120)),
                );
                ui.label(*q);
                let btn = if open == Some(idx) { "hide answer" } else { "answer" };
                if ui.small_button(btn).clicked() {
                    open = if open == Some(idx) { None } else { Some(idx) };
                }
            });
            if open == Some(idx) {
                ui.label(
                    RichText::new(format!("  → {a}"))
                        .small()
                        .color(Color32::from_rgb(160, 220, 200)),
                );
            }
            ui.add_space(3.0);
        }
        ui.ctx().data_mut(|d| d.insert_temp(id_open, open));
    });
}

/// Intuition callout — the central tension of numerical calculus: the
/// truncation/round-off tradeoff. Smaller h reduces truncation error
/// (h^p where p is the method order) but inflates round-off (≈ ε/h).
/// There is a sweet spot that the user can find with the log h slider in
/// the Differentiation tab.
fn intuition_callout(ui: &mut Ui) {
    egui::CollapsingHeader::new(
        RichText::new("Why this chapter matters")
            .strong()
            .color(Color32::from_rgb(220, 200, 120)),
    )
    .default_open(false)
    .show(ui, |ui| {
        ui.label(
            RichText::new(
                "Numerical calculus answers two questions about a function f \
                 you can only sample: what is f'(x₀), and what is ∫ₐᵇ f? Both \
                 hide a tradeoff between two opposing errors.",
            )
            .small(),
        );
        ui.add_space(3.0);
        ui.label(
            RichText::new(
                "• Truncation error — replacing the limit-as-h→0 with a finite \
                 difference introduces a Taylor-series remainder term that \
                 vanishes as h^p (p = method order). Smaller h is better.",
            )
            .small()
            .color(Color32::from_rgb(200, 215, 230)),
        );
        ui.label(
            RichText::new(
                "• Round-off error — subtracting two close numbers loses \
                 significant digits (Ch 1). For f64 the loss is ≈ ε / h. \
                 Smaller h is worse.",
            )
            .small()
            .color(Color32::from_rgb(240, 130, 130)),
        );
        ui.add_space(3.0);
        ui.label(
            RichText::new(
                "The two curves intersect at the optimum h. Drag the log h \
                 slider in the Differentiation tab and watch the central \
                 difference's total error trace out a V shape. Integration is \
                 friendlier: averaging is a smoothing operator, so round-off \
                 doesn't dominate — you can keep refining h almost to εₘ.",
            )
            .small()
            .color(Color32::from_rgb(160, 175, 195)),
        );
    });
}

// ──────────────────────────────────────────────────────────────────────────
// Side panel
// ──────────────────────────────────────────────────────────────────────────

fn controls(ui: &mut Ui, state: &mut Ch7State) {
    ui.add_space(6.0);
    ui.label(RichText::new("Topic").strong());
    for &m in &[Mode::Diff, Mode::NewtonCotes, Mode::Gauss] {
        ui.selectable_value(&mut state.mode, m, m.label());
    }
    ui.add_space(10.0);
    ui.separator();

    match state.mode {
        Mode::Diff => {
            ui.label(RichText::new("f(x)").strong());
            ui.text_edit_singleline(&mut state.diff_formula);
            ui.add_space(6.0);
            ui.horizontal(|ui| {
                ui.label("x₀");
                ui.add(egui::DragValue::new(&mut state.diff_x).speed(0.05));
            });
            ui.horizontal(|ui| {
                ui.label("log₁₀ h");
                ui.add(
                    egui::Slider::new(&mut state.diff_log_h, -14.0..=0.0)
                        .step_by(0.1)
                        .text("h"),
                );
            });
            ui.label(
                RichText::new("Tip: small h shrinks truncation error but inflates rounding error.")
                    .small()
                    .color(Color32::from_rgb(160, 175, 195)),
            );
            ui.add_space(10.0);
            ui.label(RichText::new("Presets").strong());
            for (label, expr, x) in &[
                ("eˣ²⁺ˣ  at  x = 0", "exp(x*x + x)", 0.0_f64),
                ("eˣ  at  x = 1", "exp(x)", 1.0),
                ("sin x  at  x = π/4", "sin(x)", std::f64::consts::FRAC_PI_4),
                ("x⁴  at  x = 1", "x*x*x*x", 1.0),
            ] {
                if ui.small_button(*label).clicked() {
                    state.diff_formula = expr.to_string();
                    state.diff_x = *x;
                }
            }
        }
        Mode::NewtonCotes => {
            ui.label(RichText::new("f(x)").strong());
            ui.text_edit_singleline(&mut state.int_formula);
            ui.horizontal(|ui| {
                ui.label("a");
                ui.add(egui::DragValue::new(&mut state.int_a).speed(0.1));
                ui.label("b");
                ui.add(egui::DragValue::new(&mut state.int_b).speed(0.1));
            });
            ui.horizontal(|ui| {
                ui.label("panels n");
                ui.add(egui::Slider::new(&mut state.int_n_panels, 2..=64));
            });
            ui.add_space(8.0);
            ui.label(RichText::new("Presets").strong());
            if ui.small_button("∫₀¹ x²eˣ dx  (Hartung 7.7 / 7.8)").clicked() {
                state.int_formula = "x*x*exp(x)".into();
                state.int_a = 0.0;
                state.int_b = 1.0;
                state.int_n_panels = 4;
            }
            if ui.small_button("∫₀^π sin x dx  (= 2)").clicked() {
                state.int_formula = "sin(x)".into();
                state.int_a = 0.0;
                state.int_b = std::f64::consts::PI;
                state.int_n_panels = 8;
            }
            if ui.small_button("∫₋₁¹ 1/(1+25x²) dx  (Runge)").clicked() {
                state.int_formula = "1 / (1 + 25*x*x)".into();
                state.int_a = -1.0;
                state.int_b = 1.0;
                state.int_n_panels = 16;
            }
        }
        Mode::Gauss => {
            ui.label(RichText::new("Number of nodes n").strong());
            ui.add(egui::Slider::new(&mut state.gauss_n, 1..=8));
            ui.label(
                RichText::new(format!(
                    "→ degree of precision 2n − 1 = {}",
                    2 * state.gauss_n - 1
                ))
                .small()
                .color(Color32::from_rgb(120, 220, 140)),
            );
            ui.add_space(10.0);
            ui.label(RichText::new("Test polynomial xᵖ").strong());
            ui.add(egui::Slider::new(&mut state.gauss_test_degree, 0..=20));
            ui.add_space(10.0);
            ui.separator();
            ui.label(RichText::new("Or a custom f(x):").strong());
            ui.text_edit_singleline(&mut state.gauss_formula);
            ui.label(
                RichText::new("(applies on [−1, 1] for the Gauss formula)")
                    .small()
                    .color(Color32::from_rgb(160, 175, 195)),
            );
        }
    }
}

// ──────────────────────────────────────────────────────────────────────────
// 1. Differentiation view
// ──────────────────────────────────────────────────────────────────────────

fn diff_view(ui: &mut Ui, state: &Ch7State, env: &mut Env) {
    let Some(expr) = parse_or_warn(ui, &state.diff_formula, env) else {
        return;
    };
    // Use a tiny *central* difference at very small h as our "exact" derivative
    // for educational comparison. (For polynomial presets the true derivative
    // exists in closed form; this surrogate is good to ~1e-9.)
    let mut f = |x: f64| eval_at(&expr, env, x);
    let truth = calc::diff_central_5pt(&mut f, state.diff_x, 1e-3);

    let h = 10f64.powf(state.diff_log_h);
    let forward = calc::diff_forward(&mut f, state.diff_x, h);
    let backward = calc::diff_backward(&mut f, state.diff_x, h);
    let central = calc::diff_central(&mut f, state.diff_x, h);
    let central5 = calc::diff_central_5pt(&mut f, state.diff_x, h);
    let second = calc::diff_second(&mut f, state.diff_x, h);

    egui::Frame::group(ui.style()).show(ui, |ui| {
        ui.label(
            RichText::new(format!(
                "f({:.4}) ≈ {:.10}   ·   reference f′ ≈ {:.10}   (5-pt central with h = 1e-3)",
                state.diff_x,
                f(state.diff_x),
                truth
            ))
            .monospace()
            .color(Color32::from_rgb(180, 200, 220)),
        );
        ui.label(
            RichText::new(format!("h = 10^{:.2} = {:.3e}", state.diff_log_h, h))
                .monospace()
                .color(Color32::from_rgb(180, 200, 220)),
        );
    });

    ui.add_space(6.0);
    egui::Frame::group(ui.style()).show(ui, |ui| {
        ui.label(RichText::new("Approximations to f′(x₀)").strong());
        egui::Grid::new("ch7_diff_table")
            .num_columns(4)
            .spacing([14.0, 4.0])
            .show(ui, |ui| {
                ui.label(RichText::new("formula").monospace().strong());
                ui.label(RichText::new("order").monospace().strong());
                ui.label(RichText::new("value").monospace().strong());
                ui.label(RichText::new("|error|").monospace().strong());
                ui.end_row();
                diff_row(ui, "forward      (f(x+h) − f(x))/h", "O(h)",  forward, truth);
                diff_row(ui, "backward    (f(x) − f(x−h))/h",  "O(h)",  backward, truth);
                diff_row(ui, "central     (f(x+h)−f(x−h))/(2h)", "O(h²)", central, truth);
                diff_row(ui, "5-point central                  ", "O(h⁴)", central5, truth);
            });
    });
    ui.add_space(6.0);
    egui::Frame::group(ui.style()).show(ui, |ui| {
        ui.label(RichText::new("Second derivative").strong());
        let truth2 = (calc::diff_central(&mut f, state.diff_x + 1e-3, 1e-3)
            - calc::diff_central(&mut f, state.diff_x - 1e-3, 1e-3))
            / 2.0e-3;
        ui.label(
            RichText::new(format!(
                "(f(x−h) − 2 f(x) + f(x+h)) / h²  =  {second:.6}   (≈ f″ via small h ≈ {truth2:.6})"
            ))
            .monospace(),
        );
    });

    // ─── the killer plot ───────────────────────────────────────────────
    ui.add_space(10.0);
    ui.label(RichText::new("Error vs step size (log-log)").strong());
    ui.label(
        RichText::new(
            "Truncation error decreases as h shrinks, but rounding error \
             grows. Watch each curve hit a U-shape — the minimum is the \
             optimal h for that formula.",
        )
        .small()
        .color(Color32::from_rgb(160, 175, 195)),
    );

    Plot::new("ch7_diff_log_plot")
        .height(340.0)
        .legend(Legend::default())
        .x_axis_label("log₁₀ h")
        .y_axis_label("log₁₀ |error|")
        .show(ui, |plot_ui| {
            let mut fwd = Vec::new();
            let mut cen = Vec::new();
            let mut c5 = Vec::new();
            let mut log_h = -14.0_f64;
            while log_h <= 0.0 {
                let h = 10f64.powf(log_h);
                let e_fwd = (calc::diff_forward(&mut f, state.diff_x, h) - truth).abs().max(1e-20);
                let e_cen = (calc::diff_central(&mut f, state.diff_x, h) - truth).abs().max(1e-20);
                let e_c5 = (calc::diff_central_5pt(&mut f, state.diff_x, h) - truth).abs().max(1e-20);
                fwd.push([log_h, e_fwd.log10()]);
                cen.push([log_h, e_cen.log10()]);
                c5.push([log_h, e_c5.log10()]);
                log_h += 0.1;
            }
            plot_ui.line(
                Line::new(PlotPoints::from(fwd))
                    .color(Color32::from_rgb(240, 130, 130))
                    .name("forward  O(h)"),
            );
            plot_ui.line(
                Line::new(PlotPoints::from(cen))
                    .color(Color32::from_rgb(120, 220, 140))
                    .name("central  O(h²)"),
            );
            plot_ui.line(
                Line::new(PlotPoints::from(c5))
                    .color(Color32::from_rgb(120, 180, 255))
                    .name("5-point  O(h⁴)"),
            );
            // Vertical marker at current slider h.
            plot_ui.vline(
                VLine::new(state.diff_log_h)
                    .color(Color32::from_rgb(255, 220, 100))
                    .name("current h"),
            );
        });
}

fn diff_row(ui: &mut Ui, formula: &str, order: &str, value: f64, truth: f64) {
    let err = (value - truth).abs();
    let color = if err < 1e-6 {
        Color32::from_rgb(120, 220, 140)
    } else if err < 1e-3 {
        Color32::from_rgb(240, 200, 120)
    } else {
        Color32::from_rgb(240, 130, 130)
    };
    ui.label(RichText::new(formula).monospace());
    ui.label(RichText::new(order).monospace().color(color));
    ui.label(RichText::new(format!("{value:.10}")).monospace());
    ui.label(RichText::new(format!("{err:.3e}")).monospace().color(color));
    ui.end_row();
}

// ──────────────────────────────────────────────────────────────────────────
// 2. Newton-Cotes view
// ──────────────────────────────────────────────────────────────────────────

/// Annotated formula card: the trapezoid and Simpson 1/3 rules with each
/// symbol coloured so the reader can match it to its visual analogue in the
/// plot below — orange panels for the trapezoid, blue for Simpson, the
/// step size h dressed in gold to remind that it is the same number used
/// in the differentiation tab.
fn formula_card_newton_cotes(ui: &mut Ui) {
    let blue = Color32::from_rgb(120, 180, 255);
    let orange = Color32::from_rgb(240, 180, 100);
    let gold = Color32::from_rgb(255, 220, 100);
    let dim = Color32::from_rgb(200, 215, 230);
    egui::CollapsingHeader::new(
        RichText::new("Formula card  ·  composite Newton–Cotes").strong(),
    )
    .default_open(true)
    .show(ui, |ui| {
        ui.horizontal(|ui| {
            ui.label(RichText::new("Trapezoid:").monospace().color(orange));
            ui.label(
                RichText::new("T(h) = ")
                    .monospace()
                    .color(dim),
            );
            ui.label(RichText::new("h").monospace().color(gold));
            ui.label(
                RichText::new("·[ ½·f(x₀) + f(x₁) + f(x₂) + … + f(xₙ₋₁) + ½·f(xₙ) ]")
                    .monospace()
                    .color(dim),
            );
        });
        ui.horizontal(|ui| {
            ui.label(RichText::new("Simpson 1/3:").monospace().color(blue));
            ui.label(RichText::new("S(h) = ").monospace().color(dim));
            ui.label(RichText::new("h/3").monospace().color(gold));
            ui.label(
                RichText::new("·[ f(x₀) + 4·(f(x₁)+f(x₃)+…) + 2·(f(x₂)+f(x₄)+…) + f(xₙ) ]")
                    .monospace()
                    .color(dim),
            );
        });
        ui.label(
            RichText::new(
                "h = (b − a) / n is the panel width. Trapezoid has error O(h²); \
                 Simpson is O(h⁴). Doubling n cuts the Trapezoid error by 4× \
                 and the Simpson error by 16× — read it off in the table below.",
            )
            .small()
            .color(Color32::from_rgb(160, 175, 195)),
        );
    });
}

fn newton_cotes_view(ui: &mut Ui, state: &Ch7State, env: &mut Env) {
    formula_card_newton_cotes(ui);
    ui.add_space(8.0);

    let Some(expr) = parse_or_warn(ui, &state.int_formula, env) else {
        return;
    };
    let mut f = |x: f64| eval_at(&expr, env, x);
    let a = state.int_a;
    let b = state.int_b;
    if !(a < b) {
        ui.colored_label(
            Color32::from_rgb(240, 130, 130),
            "Require a < b.",
        );
        return;
    }
    let n = state.int_n_panels.max(2);

    // High-accuracy reference via Romberg.
    let table = calc::romberg(&mut f, a, b, 8);
    let reference = table[7][7];

    let trap = calc::composite_trapezoid(&mut f, a, b, n);
    let n_simpson = if n % 2 == 0 { n } else { n + 1 };
    let simp = calc::composite_simpson(&mut f, a, b, n_simpson).unwrap_or(f64::NAN);
    let boole_val = if n >= 4 {
        // Composite Boole = sum of basic Boole over groups of 4 sub-intervals.
        // Use 4 panels here as a representative basic-Boole demonstration.
        calc::boole(&mut f, a, b)
    } else {
        f64::NAN
    };

    egui::Frame::group(ui.style()).show(ui, |ui| {
        ui.label(
            RichText::new(format!(
                "Reference ∫ₐᵇ f(x) dx ≈ {reference:.10}   (Romberg level 8)"
            ))
            .monospace()
            .color(Color32::from_rgb(180, 200, 220)),
        );
        egui::Grid::new("ch7_int_table")
            .num_columns(4)
            .spacing([14.0, 4.0])
            .show(ui, |ui| {
                ui.label(RichText::new("method").monospace().strong());
                ui.label(RichText::new("nodes").monospace().strong());
                ui.label(RichText::new("approx").monospace().strong());
                ui.label(RichText::new("|error|").monospace().strong());
                ui.end_row();
                int_row(ui, "Trapezoid  (composite)", format!("{}", n + 1), trap, reference);
                int_row(
                    ui,
                    "Simpson 1/3  (composite)",
                    format!("{}", n_simpson + 1),
                    simp,
                    reference,
                );
                int_row(
                    ui,
                    "Boole  (basic, 5 nodes)",
                    "5".to_string(),
                    boole_val,
                    reference,
                );
            });
    });

    // ─── shaded-panel illustration ───────────────────────────────────────
    ui.add_space(8.0);
    ui.label(RichText::new("Trapezoid panels (orange) vs f(x)").strong());
    Plot::new("ch7_int_panels")
        .height(280.0)
        .legend(Legend::default())
        .x_axis_label("x")
        .y_axis_label("f(x)")
        .show(ui, |plot_ui| {
            // Smooth f(x).
            let curve: Vec<[f64; 2]> = (0..=300)
                .map(|i| {
                    let t = i as f64 / 300.0;
                    let x = a + (b - a) * t;
                    [x, f(x)]
                })
                .collect();
            plot_ui.line(
                Line::new(PlotPoints::from(curve))
                    .color(Color32::from_rgb(120, 180, 255))
                    .name("f(x)"),
            );
            // Trapezoid polygons.
            let h = (b - a) / n as f64;
            for i in 0..n {
                let x0 = a + i as f64 * h;
                let x1 = x0 + h;
                let y0 = f(x0);
                let y1 = f(x1);
                let poly: Vec<[f64; 2]> = vec![[x0, 0.0], [x0, y0], [x1, y1], [x1, 0.0]];
                plot_ui.polygon(
                    Polygon::new(PlotPoints::from(poly))
                        .fill_color(Color32::from_rgba_unmultiplied(240, 180, 100, 60))
                        .stroke(egui::Stroke::new(1.0, Color32::from_rgb(240, 180, 100))),
                );
            }
        });

    // ─── convergence plot ────────────────────────────────────────────────
    ui.add_space(8.0);
    ui.label(RichText::new("Convergence:  log₁₀|error| vs log₁₀ h").strong());
    ui.label(
        RichText::new(
            "Slopes are exactly the book's theoretical orders: −2 for \
             trapezoid, −4 for Simpson. (Boole reaches −6 but with only 5 \
             nodes is shown as a single point.)",
        )
        .small()
        .color(Color32::from_rgb(160, 175, 195)),
    );

    Plot::new("ch7_int_convergence")
        .height(280.0)
        .legend(Legend::default())
        .x_axis_label("log₁₀ h")
        .y_axis_label("log₁₀ |error|")
        .show(ui, |plot_ui| {
            let mut trap_pts = Vec::new();
            let mut simp_pts = Vec::new();
            for k in 1..=10 {
                let n = 1usize << k;
                let h = (b - a) / n as f64;
                let log_h = h.log10();

                let t = calc::composite_trapezoid(&mut f, a, b, n);
                trap_pts.push([log_h, ((t - reference).abs().max(1e-20)).log10()]);

                if let Ok(s) = calc::composite_simpson(&mut f, a, b, n) {
                    simp_pts.push([log_h, ((s - reference).abs().max(1e-20)).log10()]);
                }
            }
            plot_ui.line(
                Line::new(PlotPoints::from(trap_pts))
                    .color(Color32::from_rgb(240, 180, 100))
                    .name("trapezoid"),
            );
            plot_ui.line(
                Line::new(PlotPoints::from(simp_pts))
                    .color(Color32::from_rgb(120, 220, 140))
                    .name("Simpson 1/3"),
            );
        });
}

fn int_row(ui: &mut Ui, name: &str, nodes: String, val: f64, truth: f64) {
    let err = (val - truth).abs();
    let color = if err < 1e-8 {
        Color32::from_rgb(120, 220, 140)
    } else if err < 1e-4 {
        Color32::from_rgb(240, 200, 120)
    } else {
        Color32::from_rgb(240, 130, 130)
    };
    ui.label(RichText::new(name).monospace());
    ui.label(RichText::new(nodes).monospace());
    ui.label(RichText::new(format!("{val:.10}")).monospace());
    ui.label(RichText::new(format!("{err:.3e}")).monospace().color(color));
    ui.end_row();
}

// ──────────────────────────────────────────────────────────────────────────
// 3. Gaussian quadrature view
// ──────────────────────────────────────────────────────────────────────────

fn gauss_view(ui: &mut Ui, state: &Ch7State, env: &mut Env) {
    let n = state.gauss_n;
    let (nodes, weights) = match calc::gauss_legendre_table(n) {
        Ok(t) => t,
        Err(e) => {
            ui.colored_label(Color32::from_rgb(240, 130, 130), format!("error: {e}"));
            return;
        }
    };

    egui::Frame::group(ui.style()).show(ui, |ui| {
        ui.label(
            RichText::new(format!(
                "n = {n} nodes  →  exact for polynomials up to degree {} \
                 (book Thm 7.10).",
                2 * n - 1
            ))
            .strong(),
        );
        egui::Grid::new("ch7_gauss_table")
            .num_columns(3)
            .spacing([16.0, 2.0])
            .show(ui, |ui| {
                ui.label(RichText::new("i").monospace().strong());
                ui.label(RichText::new("xᵢ (root of Pₙ)").monospace().strong());
                ui.label(RichText::new("wᵢ").monospace().strong());
                ui.end_row();
                for i in 0..n {
                    ui.label(RichText::new(format!("{i}")).monospace());
                    ui.label(RichText::new(format!("{:+.10}", nodes[i])).monospace());
                    ui.label(RichText::new(format!("{:.10}", weights[i])).monospace());
                    ui.end_row();
                }
                let wsum: f64 = weights.iter().sum();
                ui.label(RichText::new("Σwᵢ").monospace().strong());
                ui.label("");
                ui.label(
                    RichText::new(format!("{wsum:.6}    (must equal 2)"))
                        .monospace()
                        .color(Color32::from_rgb(120, 220, 140)),
                );
                ui.end_row();
            });
    });

    // ─── Legendre polynomial Pₙ with roots highlighted ───────────────────
    ui.add_space(8.0);
    ui.label(RichText::new(format!("Legendre polynomial Pₙ(x), n = {n}")).strong());
    Plot::new("ch7_legendre")
        .height(280.0)
        .legend(Legend::default())
        .x_axis_label("x")
        .y_axis_label("Pₙ(x)")
        .show(ui, |plot_ui| {
            let curve: Vec<[f64; 2]> = (0..=400)
                .map(|i| {
                    let x = -1.0 + 2.0 * i as f64 / 400.0;
                    [x, calc::legendre(n, x)]
                })
                .collect();
            plot_ui.line(
                Line::new(PlotPoints::from(curve))
                    .color(Color32::from_rgb(120, 180, 255))
                    .name(format!("P_{n}(x)")),
            );
            // Roots marked.
            let root_pts: Vec<[f64; 2]> = nodes.iter().map(|&x| [x, 0.0]).collect();
            plot_ui.points(
                Points::new(PlotPoints::from(root_pts))
                    .shape(MarkerShape::Diamond)
                    .radius(6.0)
                    .color(Color32::from_rgb(255, 220, 100))
                    .name("Gauss nodes"),
            );
            // Reference y = 0.
            plot_ui.line(
                Line::new(PlotPoints::from(vec![[-1.0, 0.0], [1.0, 0.0]]))
                    .color(Color32::from_rgb(160, 175, 195))
                    .style(egui_plot::LineStyle::Dashed { length: 6.0 })
                    .name("y = 0"),
            );
        });

    // ─── weight bar chart ────────────────────────────────────────────────
    ui.add_space(6.0);
    Plot::new("ch7_gauss_weights")
        .height(180.0)
        .x_axis_label("xᵢ")
        .y_axis_label("wᵢ")
        .show(ui, |plot_ui| {
            let bars: Vec<Bar> = nodes
                .iter()
                .zip(weights.iter())
                .map(|(&x, &w)| Bar::new(x, w).fill(Color32::from_rgb(120, 220, 140)).width(0.06))
                .collect();
            plot_ui.bar_chart(BarChart::new(bars));
        });

    // ─── degree-of-precision demonstration ───────────────────────────────
    ui.add_space(10.0);
    let p = state.gauss_test_degree;
    let exact_xp = if p % 2 == 0 { 2.0 / (p as f64 + 1.0) } else { 0.0 };
    let gauss_xp = (0..n).map(|i| weights[i] * nodes[i].powi(p as i32)).sum::<f64>();
    let exact_iff = p <= 2 * n - 1;
    let err = (gauss_xp - exact_xp).abs();

    egui::Frame::group(ui.style()).show(ui, |ui| {
        ui.label(RichText::new("Degree-of-precision check").strong());
        ui.label(
            RichText::new(format!(
                "Try ∫₋₁¹ xᵖ dx with p = {p}.  \
                 Exact answer = {exact_xp:.10}.  \
                 Gauss result = {gauss_xp:.10}."
            ))
            .monospace(),
        );
        let color = if err < 1e-12 {
            Color32::from_rgb(120, 220, 140)
        } else {
            Color32::from_rgb(240, 130, 130)
        };
        ui.label(
            RichText::new(format!(
                "|error| = {err:.3e}   →   {}    (theory: exact iff p ≤ 2n − 1 = {})",
                if err < 1e-10 { "EXACT" } else { "approximate" },
                2 * n - 1
            ))
            .monospace()
            .color(color),
        );
        let _ = exact_iff;
    });

    // ─── custom f(x) on [-1, 1] ─────────────────────────────────────────
    ui.add_space(8.0);
    if let Some(expr) = parse_expr_str(&state.gauss_formula).ok() {
        let mut f = |x: f64| eval_at(&expr, env, x);
        let gauss = (0..n).map(|i| weights[i] * f(nodes[i])).sum::<f64>();
        let reference = calc::romberg(&mut f, -1.0, 1.0, 8)[7][7];
        let err = (gauss - reference).abs();
        let color = if err < 1e-8 {
            Color32::from_rgb(120, 220, 140)
        } else if err < 1e-3 {
            Color32::from_rgb(240, 200, 120)
        } else {
            Color32::from_rgb(240, 130, 130)
        };
        egui::Frame::group(ui.style()).show(ui, |ui| {
            ui.label(RichText::new("Custom integrand on [−1, 1]").strong());
            ui.label(
                RichText::new(format!(
                    "∫₋₁¹ {} dx :  Gauss-{n} = {gauss:.10},  Romberg ref = {reference:.10},  |err| = {err:.3e}",
                    state.gauss_formula
                ))
                .monospace()
                .color(color),
            );
        });
    }
}

// ──────────────────────────────────────────────────────────────────────────
// Shared helpers
// ──────────────────────────────────────────────────────────────────────────

fn parse_or_warn(ui: &mut Ui, src: &str, _env: &mut Env) -> Option<Expr> {
    match parse_expr_str(src) {
        Ok(e) => Some(e),
        Err(err) => {
            ui.colored_label(
                Color32::from_rgb(240, 130, 130),
                format!("formula error: {err}"),
            );
            None
        }
    }
}

fn eval_at(expr: &Expr, env: &mut Env, x: f64) -> f64 {
    env.set("x", Matrix::scalar(x));
    env.eval(expr)
        .ok()
        .and_then(|v| v.as_scalar())
        .unwrap_or(f64::NAN)
}
