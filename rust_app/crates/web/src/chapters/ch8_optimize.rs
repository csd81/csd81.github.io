//! Chapter 8 — function minimization, taught visually on contour plots.
//!
//! Every method's iteration history is drawn directly over a contour plot of
//! `f(x, y)`, so you can *see* the algorithm work: gradient descent zigzagging
//! down a narrow valley, Newton's method jumping cleanly to the minimum, the
//! simplex method's triangles tumbling along the contour lines.

use egui::{Color32, RichText, ScrollArea, Stroke, Ui};
use egui_plot::{Legend, Line, MarkerShape, Plot, PlotPoints, Points, Polygon};

use engine::{ast::Expr, parse_expr_str, Env};
use numerics::{optimize as opt, Matrix};

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum Method {
    GoldenSection,
    Simplex,
    NelderMead,
    GradientConstant,
    GradientOptimal,
    Newton,
}

impl Method {
    fn label(&self) -> &'static str {
        match self {
            Self::GoldenSection => "Golden section  (1D)",
            Self::Simplex => "Simplex method",
            Self::NelderMead => "Nelder-Mead",
            Self::GradientConstant => "Gradient descent  (constant step)",
            Self::GradientOptimal => "Gradient descent  (optimal step)",
            Self::Newton => "Newton's method",
        }
    }
}

pub struct Ch8State {
    method: Method,
    formula: String,
    x_min: f64,
    x_max: f64,
    y_min: f64,
    y_max: f64,
    x0: f64,
    y0: f64,
    // 1D-only
    golden_a: f64,
    golden_b: f64,
    // gradient-constant
    grad_step: f64,
    // tolerance / max iter
    tol: f64,
    max_iter: usize,
    // Nelder-Mead
    nm_alpha: f64,
    nm_beta: f64,
}

impl Default for Ch8State {
    fn default() -> Self {
        Self {
            method: Method::Newton,
            // Hartung's running banana-like example through §8.3 / 8.6 / 8.7.
            formula: "(x*x - 2*y)*(x*x - 2*y) + 2*(x - 1)*(x - 1)".to_string(),
            x_min: -2.5,
            x_max: 2.0,
            y_min: -0.5,
            y_max: 4.5,
            x0: -1.0,
            y0: 4.0,
            golden_a: -1.0,
            golden_b: 2.0,
            grad_step: 0.3,
            tol: 1e-8,
            max_iter: 200,
            nm_alpha: 1.4,
            nm_beta: 0.7,
        }
    }
}

pub fn show(ui: &mut Ui, state: &mut Ch8State, env: &mut Env) {
    egui::SidePanel::left("ch8_controls")
        .resizable(true)
        .default_width(360.0)
        .show_inside(ui, |ui| controls(ui, state));

    egui::CentralPanel::default().show_inside(ui, |ui| {
        ScrollArea::vertical().show(ui, |ui| {
            ui.heading("Chapter 8 — minimization");
            ui.label(
                "Pick a method on the left and watch its iterates trace out a \
                path over the contour plot of f(x, y). The simplex methods \
                show every triangle in their history.",
            );
            ui.add_space(4.0);
            intuition_callout(ui);
            ui.add_space(8.0);
            main_view(ui, state, env);
            ui.add_space(10.0);
            cross_chapter_link(ui, state);
            ui.add_space(6.0);
            try_this(ui, state);
        });
    });
}

/// Intuition callout — minimisation is "root finding for ∇f". Once you
/// see that, the entire chapter is a re-application of Chapter 2 to a
/// vector equation, plus some safety machinery (line search, simplex
/// shrinking) to keep iterates inside the basin of attraction.
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
                "Minimisation appears everywhere science needs to fit a model \
                 to data, design a structure, or steer an autopilot: maximum \
                 likelihood, neural-net training, control, inverse problems. \
                 The unifying picture is simple — at any minimum the gradient \
                 vanishes, so minimising f is the same problem as finding a \
                 root of ∇f. That is the link to Chapter 2.",
            )
            .small(),
        );
        ui.label(
            RichText::new(
                "Two flavours of methods are on display here. \
                 *Derivative-free* (golden section, simplex, Nelder-Mead) — \
                 robust, no calculus required, slow. *Derivative-using* \
                 (gradient descent, Newton) — fast when the gradient is \
                 informative, fragile when the step overshoots the basin. \
                 Stochastic and constrained optimisation grow out of these \
                 same pictures.",
            )
            .small()
            .color(Color32::from_rgb(160, 175, 195)),
        );
    });
}

/// Cross-chapter link — surfaces which earlier-chapter primitives each
/// optimizer leans on. Most students see the optimizers as new tools; in
/// fact they are compositions of the previous chapters' machinery.
fn cross_chapter_link(ui: &mut Ui, state: &Ch8State) {
    let blue = Color32::from_rgb(120, 200, 255);
    let dim = Color32::from_rgb(160, 175, 195);
    egui::CollapsingHeader::new(
        RichText::new("Under the hood — what this reuses").strong(),
    )
    .default_open(false)
    .show(ui, |ui| {
        let entry = |ui: &mut Ui, head: &str, body: &str| {
            ui.horizontal_wrapped(|ui| {
                ui.label(
                    RichText::new(format!("• {head}"))
                        .strong()
                        .color(blue),
                );
                ui.label(body);
            });
        };
        match state.method {
            Method::GoldenSection => entry(
                ui,
                "Chapter 2  ·  bracketing",
                "Same idea as bisection on f' = 0: keep a bracket that contains the minimum and shrink it. The contraction ratio is 1/φ ≈ 0.618 instead of bisection's ½.",
            ),
            Method::Simplex | Method::NelderMead => {
                entry(
                    ui,
                    "no derivatives",
                    "Pure function evaluations. Useful when you can not differentiate (noisy data, black-box simulator). Trade-off: slower asymptotic convergence, immune to derivative inaccuracies.",
                );
            }
            Method::GradientConstant | Method::GradientOptimal => {
                entry(
                    ui,
                    "Chapter 7  ·  numerical gradient",
                    "We don't get analytic ∇f; the central-difference machinery from the differentiation tab computes it for us. The optimal-step variant runs golden section on a 1D minimisation along the gradient direction — i.e. it nests Chapter 2 inside Chapter 8.",
                );
            }
            Method::Newton => {
                entry(
                    ui,
                    "Chapter 7  ·  numerical Hessian",
                    "The second derivative matrix is built by finite-differencing the gradient (a chained finite difference).",
                );
                entry(
                    ui,
                    "Chapter 3  ·  Gauss elimination",
                    "Each Newton step solves H · Δx = −∇f for Δx using `solve_partial_pivot` — the same pivoting walk you watched in Ch3. When H is SPD (true at a minimum), Chapter 5's Cholesky would be 2× cheaper.",
                );
                entry(
                    ui,
                    "Chapter 2  ·  Newton's method (1-D)",
                    "Exact same algorithm in disguise: linearise f around xₖ via Taylor, set the linear model to zero, step. In 1D this is f/f'; in n-D this is H⁻¹∇f.",
                );
            }
        }
        ui.label(
            RichText::new(
                "Lesson: numerical analysis is composable. Almost every \
                 \"new\" method here is an old method nested inside another.",
            )
            .small()
            .color(dim),
        );
    });
}

/// "Try this" — three open-ended challenges that nudge the user to
/// experiment. Each has a hidden hint behind a button so they get a chance
/// to think first.
fn try_this(ui: &mut Ui, state: &mut Ch8State) {
    let id_hint = ui.make_persistent_id("ch8_try_hint");
    let mut open_hint: Option<usize> = ui
        .ctx()
        .data(|d| d.get_temp::<Option<usize>>(id_hint))
        .unwrap_or(None);
    egui::Frame::group(ui.style()).show(ui, |ui| {
        ui.label(
            RichText::new("Try this")
                .strong()
                .color(Color32::from_rgb(255, 220, 100)),
        );
        ui.label(
            RichText::new(
                "Each challenge changes one input and asks you to predict the \
                 result before pressing Run. Click \"hint\" if you get stuck.",
            )
            .small()
            .color(Color32::from_rgb(160, 175, 195)),
        );
        ui.add_space(4.0);

        let mut item = |ui: &mut Ui, idx: usize, prompt: &str, hint: &str| {
            ui.horizontal_wrapped(|ui| {
                ui.label(
                    RichText::new(format!("{}.", idx + 1))
                        .monospace()
                        .color(Color32::from_rgb(240, 200, 120)),
                );
                ui.label(prompt);
                if ui.small_button(if open_hint == Some(idx) {
                    "hide hint"
                } else {
                    "hint"
                }).clicked() {
                    open_hint = if open_hint == Some(idx) { None } else { Some(idx) };
                }
            });
            if open_hint == Some(idx) {
                ui.label(
                    RichText::new(format!("  → {hint}"))
                        .small()
                        .color(Color32::from_rgb(160, 220, 200)),
                );
            }
            ui.add_space(2.0);
        };

        item(
            ui,
            0,
            "Pick Gradient descent (constant step) on the running quartic. \
             Bump the step from 0.30 to 1.20. Predict what the iterate path \
             looks like. Then run.",
            "Steps that big overshoot the valley floor and the iterates \
             oscillate; on a quadratic that grows, the iterates diverge \
             outright. The optimal-step variant fixes this by line search.",
        );
        item(
            ui,
            1,
            "Switch to Nelder-Mead on the same function but start at \
             (1.5, 3.5). Compare the simplex motion to Newton's method's \
             two-step convergence. Why is Nelder-Mead slower?",
            "Newton uses second-derivative information (the Hessian) and \
             jumps straight to the minimum of a local quadratic model. \
             Nelder-Mead only evaluates f — no gradient, no curvature — so it \
             walks downhill in shapes the user can see (reflect, expand, \
             contract, shrink).",
        );
        item(
            ui,
            2,
            "Set the formula to  x*x*x*x − 4*x*x + x + 6  in 1D Golden section \
             over [−3, 3]. Two local minima. Run it. Which minimum does \
             golden section land in? Is that a feature or a bug?",
            "Golden section only guarantees a *local* minimum inside the \
             bracket. Re-running with [−3, 0] vs [0, 3] gives different \
             answers. This is why global optimisation is its own field — \
             every method here is local.",
        );
        // Persist the open hint across frames.
        ui.ctx().data_mut(|d| d.insert_temp(id_hint, open_hint));
    });
    // Silence the unused-mut on state if the body doesn't end up using it.
    let _ = state;
}

// ──────────────────────────────────────────────────────────────────────────
// Controls
// ──────────────────────────────────────────────────────────────────────────

fn controls(ui: &mut Ui, state: &mut Ch8State) {
    ui.add_space(6.0);
    ui.label(RichText::new("Method").strong());
    for &m in &[
        Method::GoldenSection,
        Method::Simplex,
        Method::NelderMead,
        Method::GradientConstant,
        Method::GradientOptimal,
        Method::Newton,
    ] {
        ui.selectable_value(&mut state.method, m, m.label());
    }
    ui.add_space(8.0);
    ui.separator();

    if state.method == Method::GoldenSection {
        ui.label(RichText::new("Function  f(x)").strong());
        ui.text_edit_singleline(&mut state.formula);
        ui.label(
            RichText::new("Edit to be a single-variable function. Default: x² − 0.8x + 1.")
                .small()
                .color(Color32::from_rgb(160, 175, 195)),
        );
        ui.horizontal(|ui| {
            ui.label("a");
            ui.add(egui::DragValue::new(&mut state.golden_a).speed(0.05));
            ui.label("b");
            ui.add(egui::DragValue::new(&mut state.golden_b).speed(0.05));
        });
        ui.add_space(6.0);
        if ui.small_button("Hartung Ex 8.5  (x² − 0.8x + 1)").clicked() {
            state.formula = "x*x - 0.8*x + 1".to_string();
            state.golden_a = -1.0;
            state.golden_b = 2.0;
        }
    } else {
        ui.label(RichText::new("Function  f(x, y)").strong());
        ui.text_edit_singleline(&mut state.formula);
        ui.horizontal(|ui| {
            ui.label("view x");
            ui.add(egui::DragValue::new(&mut state.x_min).speed(0.1));
            ui.label("…");
            ui.add(egui::DragValue::new(&mut state.x_max).speed(0.1));
        });
        ui.horizontal(|ui| {
            ui.label("view y");
            ui.add(egui::DragValue::new(&mut state.y_min).speed(0.1));
            ui.label("…");
            ui.add(egui::DragValue::new(&mut state.y_max).speed(0.1));
        });
        ui.horizontal(|ui| {
            ui.label("start  x₀");
            ui.add(egui::DragValue::new(&mut state.x0).speed(0.05));
            ui.label("y₀");
            ui.add(egui::DragValue::new(&mut state.y0).speed(0.05));
        });
        match state.method {
            Method::GradientConstant => {
                ui.horizontal(|ui| {
                    ui.label("step h");
                    ui.add(egui::DragValue::new(&mut state.grad_step).speed(0.01).range(0.001..=2.0));
                });
            }
            Method::NelderMead => {
                ui.horizontal(|ui| {
                    ui.label("α (expand)");
                    ui.add(egui::DragValue::new(&mut state.nm_alpha).speed(0.05).range(1.0..=3.0));
                    ui.label("β (contract)");
                    ui.add(egui::DragValue::new(&mut state.nm_beta).speed(0.05).range(0.05..=0.95));
                });
            }
            _ => {}
        }
    }

    ui.add_space(8.0);
    ui.horizontal(|ui| {
        ui.label("tol");
        ui.add(egui::DragValue::new(&mut state.tol).speed(1e-3).range(1e-15..=1.0));
        ui.label("max iter");
        ui.add(egui::DragValue::new(&mut state.max_iter).range(5..=2000));
    });

    ui.add_space(10.0);
    ui.separator();
    ui.label(RichText::new("Presets").strong());
    if ui.small_button("Banana  (x² − 2y)² + 2(x − 1)²").clicked() {
        state.formula = "(x*x - 2*y)*(x*x - 2*y) + 2*(x - 1)*(x - 1)".to_string();
        state.x_min = -2.5;
        state.x_max = 2.0;
        state.y_min = -0.5;
        state.y_max = 4.5;
        state.x0 = -1.0;
        state.y0 = 4.0;
        state.method = Method::Newton;
    }
    if ui.small_button("Quadratic bowl  x² + 5y²").clicked() {
        state.formula = "x*x + 5*y*y".to_string();
        state.x_min = -3.0;
        state.x_max = 3.0;
        state.y_min = -2.0;
        state.y_max = 2.0;
        state.x0 = -2.0;
        state.y0 = 1.5;
    }
    if ui.small_button("Saddle  x² − y²  (not unimodal)").clicked() {
        state.formula = "x*x - y*y".to_string();
        state.x_min = -2.0;
        state.x_max = 2.0;
        state.y_min = -2.0;
        state.y_max = 2.0;
        state.x0 = 0.5;
        state.y0 = 0.5;
    }
    if ui.small_button("Rosenbrock  100(y − x²)² + (1 − x)²").clicked() {
        state.formula = "100*(y - x*x)*(y - x*x) + (1 - x)*(1 - x)".to_string();
        state.x_min = -2.0;
        state.x_max = 2.0;
        state.y_min = -1.0;
        state.y_max = 3.0;
        state.x0 = -1.0;
        state.y0 = 2.0;
    }
}

// ──────────────────────────────────────────────────────────────────────────
// Main visualization
// ──────────────────────────────────────────────────────────────────────────

fn main_view(ui: &mut Ui, state: &Ch8State, env: &mut Env) {
    let Some(expr) = parse_or_warn(ui, &state.formula, env) else {
        return;
    };

    if state.method == Method::GoldenSection {
        golden_section_view(ui, state, env, expr);
    } else {
        two_d_view(ui, state, env, expr);
    }
}

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

// ─── 1D: golden section ────────────────────────────────────────────────

fn golden_section_view(ui: &mut Ui, state: &Ch8State, env: &mut Env, expr: Expr) {
    let mut f = |x: f64| eval_1d(&expr, env, x);
    let result = opt::golden_section(&mut f, state.golden_a, state.golden_b, state.tol, state.max_iter);
    let Ok(r) = result else {
        ui.colored_label(Color32::from_rgb(240, 130, 130), format!("error: {:?}", result.err().unwrap()));
        return;
    };

    egui::Frame::group(ui.style()).show(ui, |ui| {
        ui.label(RichText::new(format!(
            "x_min ≈ {:.10}     f(x_min) ≈ {:.6e}     iterations = {}",
            r.x_min, r.f_min, r.iterations
        )).monospace().color(Color32::from_rgb(120, 220, 140)));
    });

    Plot::new("ch8_golden_plot")
        .height(360.0)
        .legend(Legend::default())
        .x_axis_label("x")
        .y_axis_label("f(x)")
        .show(ui, |plot_ui| {
            // f(x) curve.
            let pts: Vec<[f64; 2]> = (0..=400)
                .map(|i| {
                    let t = i as f64 / 400.0;
                    let x = state.golden_a + (state.golden_b - state.golden_a) * t;
                    [x, eval_1d(&expr, env, x)]
                })
                .collect();
            plot_ui.line(
                Line::new(PlotPoints::from(pts))
                    .color(Color32::from_rgb(120, 180, 255))
                    .name("f(x)"),
            );
            // Brackets at each step as horizontal segments.
            let max_show = r.history.len();
            for (k, row) in r.history.iter().enumerate() {
                let [a, b, _y, _x, _fy, _fx] = *row;
                let yk = -0.05 - 0.04 * (max_show - k) as f64;
                let alpha = (255 * (k + 1) / max_show).min(255) as u8;
                let color = Color32::from_rgba_unmultiplied(255, 220, 100, alpha);
                plot_ui.line(
                    Line::new(PlotPoints::from(vec![[a, yk], [b, yk]]))
                        .color(color)
                        .stroke(Stroke::new(1.5, color)),
                );
            }
            // Final minimum.
            plot_ui.points(
                Points::new(PlotPoints::from(vec![[r.x_min, r.f_min]]))
                    .shape(MarkerShape::Diamond)
                    .radius(7.0)
                    .color(Color32::from_rgb(120, 220, 140))
                    .name("minimum"),
            );
        });

    ui.label(
        RichText::new(format!(
            "Each yellow row above the x-axis is the bracket [aₖ, bₖ] at step k. \
            Interval contracts by r = {GOLDEN:.6} per step.",
            GOLDEN = opt::GOLDEN_R
        ))
        .small()
        .color(Color32::from_rgb(160, 175, 195)),
    );
}

// ─── 2D: contour plot + iteration trail ────────────────────────────────

fn two_d_view(ui: &mut Ui, state: &Ch8State, env: &mut Env, expr: Expr) {
    // ── Phase 1: run the chosen method (env borrowed mutably here only) ──
    let (trail, simplex_history, summary, f_history) = match run_method(state, env, &expr) {
        Ok(t) => t,
        Err(e) => {
            ui.colored_label(Color32::from_rgb(240, 130, 130), format!("error: {e}"));
            return;
        }
    };

    // ── Summary banner ──
    egui::Frame::group(ui.style()).show(ui, |ui| {
        ui.label(RichText::new(summary).monospace().color(Color32::from_rgb(120, 220, 140)));
    });

    // ── Phase 2: re-sample f on a grid for heatmap + isolines ──
    const GRID: usize = 80;
    let mut grid_f = |x: f64, y: f64| eval_2d(&expr, env, x, y);
    let (xs, ys, zs, z_min, z_max) = sample_grid(state, &mut grid_f, GRID);
    drop(grid_f);

    // ── Contour plot ──
    ui.add_space(6.0);
    Plot::new("ch8_contour")
        .height(460.0)
        .data_aspect(1.0)
        .legend(Legend::default())
        .x_axis_label("x")
        .y_axis_label("y")
        .show(ui, |plot_ui| {
            // Heatmap.
            draw_heatmap(plot_ui, &xs, &ys, &zs, z_min, z_max);

            // Iso-line contours via marching squares.
            let levels = isoline_levels(z_min, z_max, 12);
            for &c in &levels {
                let segs = marching_squares(&xs, &ys, &zs, c);
                for (p1, p2) in segs {
                    plot_ui.line(
                        Line::new(PlotPoints::from(vec![p1, p2]))
                            .color(Color32::from_rgba_unmultiplied(220, 220, 240, 110))
                            .stroke(Stroke::new(0.8, Color32::from_rgba_unmultiplied(220, 220, 240, 110)))
                            .name(""),
                    );
                }
            }

            // Simplex polygons (animated transparency).
            if let Some(history) = &simplex_history {
                let n = history.len();
                for (k, simplex) in history.iter().enumerate() {
                    // Older simplexes are more transparent.
                    let alpha = (40 + 215 * k as u32 / n.max(1) as u32) as u8;
                    let stroke_color = Color32::from_rgba_unmultiplied(240, 130, 130, alpha);
                    let mut pts: Vec<[f64; 2]> = simplex.iter().map(|v| [v[0], v[1]]).collect();
                    pts.push(pts[0]);
                    plot_ui.line(
                        Line::new(PlotPoints::from(pts))
                            .color(stroke_color)
                            .stroke(Stroke::new(1.4, stroke_color))
                            .name(""),
                    );
                    let _ = Polygon::new(PlotPoints::from(Vec::<[f64;2]>::new()));
                }
            }

            // Trail line for point methods.
            if simplex_history.is_none() {
                plot_ui.line(
                    Line::new(PlotPoints::from(trail.clone()))
                        .color(Color32::from_rgb(255, 220, 100))
                        .stroke(Stroke::new(1.6, Color32::from_rgb(255, 220, 100)))
                        .name("trail"),
                );
            }

            // Iterate markers.
            if !trail.is_empty() {
                let start = trail[0];
                let end = trail[trail.len() - 1];
                plot_ui.points(
                    Points::new(PlotPoints::from(trail.clone()))
                        .shape(MarkerShape::Circle)
                        .radius(3.0)
                        .color(Color32::from_rgb(255, 200, 80))
                        .name("iterates"),
                );
                plot_ui.points(
                    Points::new(PlotPoints::from(vec![start]))
                        .shape(MarkerShape::Cross)
                        .radius(6.0)
                        .color(Color32::from_rgb(120, 180, 255))
                        .name("start"),
                );
                plot_ui.points(
                    Points::new(PlotPoints::from(vec![end]))
                        .shape(MarkerShape::Diamond)
                        .radius(7.0)
                        .color(Color32::from_rgb(120, 220, 140))
                        .name("end"),
                );
            }
        });

    // ── Convergence plot: f vs iteration ──
    ui.add_space(8.0);
    ui.label(RichText::new("Convergence: log₁₀ f(xₖ) vs k").strong());
    Plot::new("ch8_conv")
        .height(180.0)
        .x_axis_label("iteration k")
        .y_axis_label("log₁₀ f(xₖ)")
        .show(ui, |plot_ui| {
            let pts: Vec<[f64; 2]> = f_history
                .iter()
                .enumerate()
                .map(|(k, &v)| [k as f64, v.max(1e-20).log10()])
                .collect();
            plot_ui.line(
                Line::new(PlotPoints::from(pts))
                    .color(Color32::from_rgb(120, 220, 140))
                    .name("f(xₖ)"),
            );
        });
    // Empirical-rate annotation. Linear convergence shows up as a straight
    // line on this log plot; quadratic curves down. We fit the second half
    // of the history so transient first-iterates don't pollute the slope.
    convergence_rate_strip(ui, &f_history);
}

fn convergence_rate_strip(ui: &mut Ui, f_history: &[f64]) {
    if f_history.len() < 4 {
        return;
    }
    let start = f_history.len() / 2;
    let log_vals: Vec<f64> = f_history[start..]
        .iter()
        .map(|&v| v.max(1e-20).log10())
        .collect();
    let n = log_vals.len() as f64;
    let xs: Vec<f64> = (0..log_vals.len()).map(|i| i as f64).collect();
    let mx = xs.iter().sum::<f64>() / n;
    let my = log_vals.iter().sum::<f64>() / n;
    let num: f64 = xs
        .iter()
        .zip(log_vals.iter())
        .map(|(x, y)| (x - mx) * (y - my))
        .sum();
    let den: f64 = xs.iter().map(|x| (x - mx).powi(2)).sum::<f64>().max(1e-18);
    let slope = num / den; // decades per iteration
    // Rate ρ such that f_{k+1} ≈ ρ · f_k corresponds to slope = log10(ρ).
    let rho = 10.0_f64.powf(slope);
    let (label, color) = if !rho.is_finite() {
        ("—", Color32::from_rgb(160, 175, 195))
    } else if rho < 1e-2 {
        ("super-linear / quadratic", Color32::from_rgb(120, 220, 140))
    } else if rho < 0.3 {
        ("fast linear", Color32::from_rgb(120, 220, 140))
    } else if rho < 0.9 {
        ("linear", Color32::from_rgb(200, 215, 230))
    } else if rho < 1.0 {
        ("very slow", Color32::from_rgb(240, 200, 120))
    } else {
        ("stagnant / diverging", Color32::from_rgb(240, 130, 130))
    };
    ui.label(
        RichText::new(format!(
            "tail slope ≈ {slope:+.3} dec/iter   →   ρ̂ ≈ {rho:.4}   ({label})"
        ))
        .monospace()
        .color(color),
    );
    ui.label(
        RichText::new(
            "Quadratic Newton bends the curve sharply downward; constant-step \
             gradient draws a straight line; Nelder-Mead's contraction phase \
             is also linear but with a wider rate.",
        )
        .small()
        .color(Color32::from_rgb(160, 175, 195)),
    );
}

// ──────────────────────────────────────────────────────────────────────────
// Method runner (phase 1)
// ──────────────────────────────────────────────────────────────────────────

type RunOutput = (
    Vec<[f64; 2]>,                     // iterate trail (always present)
    Option<Vec<Vec<Vec<f64>>>>,        // simplex history for simplex methods
    String,                            // human-readable summary
    Vec<f64>,                          // f(xₖ) history
);

fn run_method(state: &Ch8State, env: &mut Env, expr: &Expr) -> Result<RunOutput, String> {
    let start = vec![state.x0, state.y0];

    match state.method {
        Method::Simplex | Method::NelderMead => {
            let initial = vec![
                vec![state.x0, state.y0],
                vec![state.x0 + 0.5, state.y0],
                vec![state.x0, state.y0 + 0.5],
            ];
            let f_for_run = |x: &[f64]| eval_2d(expr, env, x[0], x[1]);
            let r = if state.method == Method::Simplex {
                opt::simplex(f_for_run, &initial, state.tol, state.max_iter)
                    .map_err(|e| e.to_string())?
            } else {
                opt::nelder_mead(
                    f_for_run,
                    &initial,
                    state.nm_alpha,
                    state.nm_beta,
                    state.tol,
                    state.max_iter,
                )
                .map_err(|e| e.to_string())?
            };
            let trail: Vec<[f64; 2]> = r
                .history
                .iter()
                .map(|simplex| {
                    let n = simplex.len() as f64;
                    let cx = simplex.iter().map(|v| v[0]).sum::<f64>() / n;
                    let cy = simplex.iter().map(|v| v[1]).sum::<f64>() / n;
                    [cx, cy]
                })
                .collect();
            // f at each centroid — needs another env borrow, do it explicitly.
            let f_hist: Vec<f64> =
                trail.iter().map(|p| eval_2d(expr, env, p[0], p[1])).collect();
            let summary = format!(
                "best x = ({:.6}, {:.6})   f = {:.6e}   iter = {}   converged = {}",
                r.x_best[0], r.x_best[1], r.f_best, r.iterations, r.converged
            );
            Ok((trail, Some(r.history), summary, f_hist))
        }
        // Gradient and Newton can't reuse the library functions directly
        // because every closure that borrows `env` mutably blocks the others.
        // We inline the same algorithms (still calling `opt::numerical_*` for
        // the gradient/Hessian estimates) so f, ∇f and H are evaluated one at
        // a time, each releasing the env borrow before the next call.
        Method::GradientConstant => run_gradient_descent_constant(state, env, expr),
        Method::GradientOptimal => run_gradient_descent_optimal(state, env, expr),
        Method::Newton => run_newton(state, env, expr),
        Method::GoldenSection => Err("internal: golden-section uses 1D view".into()),
    }
    .map(|out| {
        let _ = start;
        out
    })
}

/// Replication of `opt::gradient_descent_constant` but evaluating f and ∇f
/// inline so we don't have two simultaneous mutable borrows of `env`.
fn run_gradient_descent_constant(
    state: &Ch8State,
    env: &mut Env,
    expr: &Expr,
) -> Result<RunOutput, String> {
    let mut x = vec![state.x0, state.y0];
    let mut trail = vec![[x[0], x[1]]];
    let mut f_hist = vec![eval_2d(expr, env, x[0], x[1])];
    for k in 1..=state.max_iter {
        let g = opt::numerical_gradient(|p: &[f64]| eval_2d(expr, env, p[0], p[1]), &x, 1e-5);
        let g_norm = (g[0] * g[0] + g[1] * g[1]).sqrt();
        if g_norm < 1e-30 {
            break;
        }
        let alpha = state.grad_step / g_norm;
        let x_next = vec![x[0] - alpha * g[0], x[1] - alpha * g[1]];
        let diff = (x_next[0] - x[0]).abs().max((x_next[1] - x[1]).abs());
        x = x_next;
        trail.push([x[0], x[1]]);
        f_hist.push(eval_2d(expr, env, x[0], x[1]));
        if diff < state.tol {
            let summary = format!(
                "x = ({:.6}, {:.6})   f = {:.6e}   iter = {}   converged = true",
                x[0], x[1], f_hist.last().unwrap(), k
            );
            return Ok((trail, None, summary, f_hist));
        }
    }
    let summary = format!(
        "x = ({:.6}, {:.6})   f = {:.6e}   iter = {}   converged = false (max iter)",
        x[0],
        x[1],
        f_hist.last().unwrap(),
        state.max_iter
    );
    Ok((trail, None, summary, f_hist))
}

fn run_gradient_descent_optimal(
    state: &Ch8State,
    env: &mut Env,
    expr: &Expr,
) -> Result<RunOutput, String> {
    let line_search_max =
        2.0 * ((state.x_max - state.x_min).max(state.y_max - state.y_min));
    let mut x = vec![state.x0, state.y0];
    let mut trail = vec![[x[0], x[1]]];
    let mut f_hist = vec![eval_2d(expr, env, x[0], x[1])];
    for k in 1..=state.max_iter {
        let g = opt::numerical_gradient(|p: &[f64]| eval_2d(expr, env, p[0], p[1]), &x, 1e-5);
        let g_norm = (g[0] * g[0] + g[1] * g[1]).sqrt();
        if g_norm < 1e-30 {
            break;
        }
        // 1D golden-section line search along -g.
        let x_clone = x.clone();
        let g_clone = g.clone();
        let mut phi = |t: f64| {
            eval_2d(expr, env, x_clone[0] - t * g_clone[0], x_clone[1] - t * g_clone[1])
        };
        let gs = opt::golden_section(&mut phi, 0.0, line_search_max, 1e-10, 80)
            .map_err(|e| e.to_string())?;
        let alpha = gs.x_min;
        let x_next = vec![x[0] - alpha * g[0], x[1] - alpha * g[1]];
        let diff = (x_next[0] - x[0]).abs().max((x_next[1] - x[1]).abs());
        x = x_next;
        trail.push([x[0], x[1]]);
        f_hist.push(eval_2d(expr, env, x[0], x[1]));
        if diff < state.tol {
            let summary = format!(
                "x = ({:.6}, {:.6})   f = {:.6e}   iter = {}   converged = true",
                x[0], x[1], f_hist.last().unwrap(), k
            );
            return Ok((trail, None, summary, f_hist));
        }
    }
    let summary = format!(
        "x = ({:.6}, {:.6})   f = {:.6e}   iter = {}   converged = false (max iter)",
        x[0],
        x[1],
        f_hist.last().unwrap(),
        state.max_iter
    );
    Ok((trail, None, summary, f_hist))
}

fn run_newton(state: &Ch8State, env: &mut Env, expr: &Expr) -> Result<RunOutput, String> {
    use numerics::linear;
    let mut x = vec![state.x0, state.y0];
    let mut trail = vec![[x[0], x[1]]];
    let mut f_hist = vec![eval_2d(expr, env, x[0], x[1])];
    for k in 1..=state.max_iter {
        let g = opt::numerical_gradient(|p: &[f64]| eval_2d(expr, env, p[0], p[1]), &x, 1e-5);
        let h = opt::numerical_hessian(|p: &[f64]| eval_2d(expr, env, p[0], p[1]), &x, 1e-3);
        let step = linear::solve_partial_pivot(&h, &g).map_err(|e| format!("Hessian: {e}"))?;
        let x_next = vec![x[0] - step[0], x[1] - step[1]];
        let diff = (x_next[0] - x[0]).abs().max((x_next[1] - x[1]).abs());
        x = x_next;
        trail.push([x[0], x[1]]);
        f_hist.push(eval_2d(expr, env, x[0], x[1]));
        if diff < state.tol {
            let summary = format!(
                "x = ({:.6}, {:.6})   f = {:.6e}   iter = {}   converged = true",
                x[0], x[1], f_hist.last().unwrap(), k
            );
            return Ok((trail, None, summary, f_hist));
        }
    }
    let summary = format!(
        "x = ({:.6}, {:.6})   f = {:.6e}   iter = {}   converged = false (max iter)",
        x[0],
        x[1],
        f_hist.last().unwrap(),
        state.max_iter
    );
    Ok((trail, None, summary, f_hist))
}

// ──────────────────────────────────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────────────────────────────────

fn eval_1d(expr: &Expr, env: &mut Env, x: f64) -> f64 {
    env.set("x", Matrix::scalar(x));
    env.eval(expr)
        .ok()
        .and_then(|v| v.as_scalar())
        .unwrap_or(f64::NAN)
}

fn eval_2d(expr: &Expr, env: &mut Env, x: f64, y: f64) -> f64 {
    env.set("x", Matrix::scalar(x));
    env.set("y", Matrix::scalar(y));
    env.eval(expr)
        .ok()
        .and_then(|v| v.as_scalar())
        .unwrap_or(f64::NAN)
}

fn sample_grid<F: FnMut(f64, f64) -> f64>(
    state: &Ch8State,
    mut f: F,
    n: usize,
) -> (Vec<f64>, Vec<f64>, Vec<Vec<f64>>, f64, f64) {
    let xs: Vec<f64> = (0..n)
        .map(|i| state.x_min + (state.x_max - state.x_min) * i as f64 / (n - 1) as f64)
        .collect();
    let ys: Vec<f64> = (0..n)
        .map(|j| state.y_min + (state.y_max - state.y_min) * j as f64 / (n - 1) as f64)
        .collect();
    let mut zs = vec![vec![0.0; n]; n];
    let mut z_min = f64::INFINITY;
    let mut z_max = f64::NEG_INFINITY;
    for j in 0..n {
        for i in 0..n {
            let v = f(xs[i], ys[j]);
            zs[j][i] = v;
            if v.is_finite() {
                z_min = z_min.min(v);
                z_max = z_max.max(v);
            }
        }
    }
    if !z_min.is_finite() {
        z_min = 0.0;
        z_max = 1.0;
    }
    if z_max <= z_min {
        z_max = z_min + 1.0;
    }
    (xs, ys, zs, z_min, z_max)
}

fn draw_heatmap(
    plot_ui: &mut egui_plot::PlotUi,
    xs: &[f64],
    ys: &[f64],
    zs: &[Vec<f64>],
    z_min: f64,
    z_max: f64,
) {
    // Compress range with log scaling for better contrast when f varies wildly.
    let log_z_min = (z_min - z_min.min(0.0) + 1e-12).ln();
    let log_z_max = (z_max - z_min.min(0.0) + 1e-12).ln();

    let nx = xs.len();
    let ny = ys.len();
    for j in 0..ny.saturating_sub(1) {
        for i in 0..nx.saturating_sub(1) {
            // Use the average of the 4 corners as the cell color.
            let avg = 0.25 * (zs[j][i] + zs[j][i + 1] + zs[j + 1][i] + zs[j + 1][i + 1]);
            let log_v = (avg - z_min.min(0.0) + 1e-12).ln();
            let t = ((log_v - log_z_min) / (log_z_max - log_z_min).max(1e-12)).clamp(0.0, 1.0);
            let color = viridis(t as f32);
            let alpha = 200;
            let stroke = Stroke::NONE;
            plot_ui.polygon(
                Polygon::new(PlotPoints::from(vec![
                    [xs[i], ys[j]],
                    [xs[i + 1], ys[j]],
                    [xs[i + 1], ys[j + 1]],
                    [xs[i], ys[j + 1]],
                ]))
                .fill_color(Color32::from_rgba_unmultiplied(color.r(), color.g(), color.b(), alpha))
                .stroke(stroke),
            );
        }
    }
}

fn isoline_levels(z_min: f64, z_max: f64, n: usize) -> Vec<f64> {
    // Use log spacing so we get more isolines near the minimum.
    let lo = (z_min.max(0.0) + 0.01).ln();
    let hi = (z_max + 0.01).ln();
    (0..n)
        .map(|i| {
            let t = i as f64 / (n - 1) as f64;
            (lo + (hi - lo) * t).exp() - 0.01
        })
        .collect()
}

/// Marching squares at level `c`. Returns a list of (start, end) line
/// segments approximating the level curve `f = c`.
fn marching_squares(
    xs: &[f64],
    ys: &[f64],
    zs: &[Vec<f64>],
    c: f64,
) -> Vec<([f64; 2], [f64; 2])> {
    let mut segments = Vec::new();
    let nx = xs.len();
    let ny = ys.len();
    for j in 0..ny.saturating_sub(1) {
        for i in 0..nx.saturating_sub(1) {
            let f00 = zs[j][i];
            let f10 = zs[j][i + 1];
            let f11 = zs[j + 1][i + 1];
            let f01 = zs[j + 1][i];
            let (x0, x1) = (xs[i], xs[i + 1]);
            let (y0, y1) = (ys[j], ys[j + 1]);
            let interp = |a: f64, b: f64, fa: f64, fb: f64| {
                if (fb - fa).abs() < 1e-15 {
                    0.5 * (a + b)
                } else {
                    a + (c - fa) * (b - a) / (fb - fa)
                }
            };
            // Corner classification.
            let mut idx = 0;
            if f00 > c {
                idx |= 1;
            }
            if f10 > c {
                idx |= 2;
            }
            if f11 > c {
                idx |= 4;
            }
            if f01 > c {
                idx |= 8;
            }
            // Edge crossings.
            let bottom = [interp(x0, x1, f00, f10), y0];
            let right = [x1, interp(y0, y1, f10, f11)];
            let top = [interp(x0, x1, f01, f11), y1];
            let left = [x0, interp(y0, y1, f00, f01)];
            match idx {
                0 | 15 => {}
                1 | 14 => segments.push((left, bottom)),
                2 | 13 => segments.push((bottom, right)),
                3 | 12 => segments.push((left, right)),
                4 | 11 => segments.push((top, right)),
                5 => {
                    segments.push((left, top));
                    segments.push((bottom, right));
                }
                6 | 9 => segments.push((bottom, top)),
                7 | 8 => segments.push((left, top)),
                10 => {
                    segments.push((left, bottom));
                    segments.push((top, right));
                }
                _ => {}
            }
        }
    }
    segments
}

/// Approximate viridis colormap — `t ∈ [0, 1]`.
fn viridis(t: f32) -> Color32 {
    // Coarse piecewise interpolation through 5 anchor colors.
    let anchors = [
        (0.0_f32, [68, 1, 84]),
        (0.25, [59, 82, 139]),
        (0.5, [33, 145, 140]),
        (0.75, [94, 201, 98]),
        (1.0, [253, 231, 37]),
    ];
    for w in anchors.windows(2) {
        let (t0, c0) = w[0];
        let (t1, c1) = w[1];
        if t >= t0 && t <= t1 {
            let u = if t1 > t0 { (t - t0) / (t1 - t0) } else { 0.0 };
            let r = (c0[0] as f32 * (1.0 - u) + c1[0] as f32 * u) as u8;
            let g = (c0[1] as f32 * (1.0 - u) + c1[1] as f32 * u) as u8;
            let b = (c0[2] as f32 * (1.0 - u) + c1[2] as f32 * u) as u8;
            return Color32::from_rgb(r, g, b);
        }
    }
    Color32::from_rgb(0, 0, 0)
}
