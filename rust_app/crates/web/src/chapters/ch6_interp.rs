//! Chapter 6 — interpolation playground.
//!
//! Two demos in one panel:
//!
//! 1. **Free-form interpolation** — edit a small table of `(x, y)` points
//!    (optional slopes for Hermite). Toggle Lagrange / Newton / Hermite /
//!    natural-spline / clamped-spline overlays.
//! 2. **Runge phenomenon** — preset that fills the table with equidistant
//!    samples of `f(x) = 1/(1 + 25x²)` on `[−1, 1]`. As you increase `n`,
//!    the Lagrange polynomial oscillates wildly between nodes while the
//!    cubic spline stays well-behaved. Live max-error readouts confirm.

use egui::{Color32, RichText, ScrollArea, Ui};
use egui_plot::{Legend, Line, MarkerShape, Plot, PlotPoints, Points};

use engine::Env;
use numerics::interpolation::{CubicSpline, HermiteInterp, NewtonInterp};

#[derive(Clone, Debug)]
struct DataPoint {
    x: f64,
    y: f64,
    /// y' value, used only when "Hermite" overlay is enabled.
    yp: f64,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum Preset {
    Custom,
    Runge,
    Cos,
    Step,
}

pub struct Ch6InterpState {
    points: Vec<DataPoint>,
    x_min: f64,
    x_max: f64,
    plot_n: usize,

    show_lagrange: bool,
    show_newton: bool,
    show_hermite: bool,
    show_spline: bool,
    show_clamped: bool,

    yp0: f64,
    ypn: f64,

    preset: Preset,
    runge_n: usize,

    /// Animation: when true, `runge_n` auto-advances ~3 steps per second so
    /// the user sees the Runge phenomenon develop and the spline stay calm
    /// without having to drag the slider. See [`maybe_advance_animation`].
    animating: bool,
    last_anim_step: f64,
}

impl Default for Ch6InterpState {
    fn default() -> Self {
        let mut me = Self {
            points: Vec::new(),
            x_min: -1.0,
            x_max: 1.0,
            plot_n: 400,
            show_lagrange: true,
            show_newton: false,
            show_hermite: false,
            show_spline: true,
            show_clamped: false,
            yp0: 0.0,
            ypn: 0.0,
            preset: Preset::Runge,
            runge_n: 11,
            animating: false,
            last_anim_step: 0.0,
        };
        me.rebuild_from_preset();
        me
    }
}

pub fn show(ui: &mut Ui, state: &mut Ch6InterpState, _env: &mut Env) {
    maybe_advance_animation(ui, state);

    egui::SidePanel::left("ch6_interp_controls")
        .resizable(true)
        .default_width(340.0)
        .show_inside(ui, |ui| controls(ui, state));

    egui::CentralPanel::default().show_inside(ui, |ui| {
        ScrollArea::vertical().show(ui, |ui| {
            ui.heading(crate::i18n::t("Chapter 6 — interpolation", "6. fejezet — interpoláció"));
            ui.label(
                "Compare polynomial vs piecewise-cubic interpolation. The Runge \
                preset is the classic warning: equidistant Lagrange interpolation \
                of 1/(1+25x²) oscillates worse and worse as n grows, while the \
                cubic spline stays under control.",
            );
            ui.add_space(6.0);
            intuition_callout(ui);
            ui.add_space(4.0);
            formula_card(ui);
            ui.add_space(8.0);
            plot_view(ui, state);
            ui.add_space(8.0);
            error_table(ui, state);
            ui.add_space(10.0);
            try_this_challenges(ui);
        });
    });
}

// ──────────────────────────────────────────────────────────────────────────
// Controls
// ──────────────────────────────────────────────────────────────────────────

fn controls(ui: &mut Ui, state: &mut Ch6InterpState) {
    ui.add_space(6.0);
    ui.label(RichText::new("Preset").strong());
    let mut changed = false;
    for &p in &[Preset::Custom, Preset::Runge, Preset::Cos, Preset::Step] {
        let label = match p {
            Preset::Custom => "Custom (edit below)",
            Preset::Runge => "Runge   f = 1/(1 + 25x²)",
            Preset::Cos => "Cosine   f = cos(πx)",
            Preset::Step => "Discontinuous step",
        };
        if ui.selectable_label(state.preset == p, label).clicked() {
            state.preset = p;
            state.rebuild_from_preset();
            changed = true;
        }
    }

    if state.preset != Preset::Custom {
        ui.add_space(4.0);
        ui.horizontal(|ui| {
            ui.label("nodes n:");
            if ui
                .add(egui::Slider::new(&mut state.runge_n, 3..=21))
                .changed()
            {
                state.rebuild_from_preset();
                changed = true;
            }
        });
        ui.horizontal(|ui| {
            let btn = if state.animating { "⏸  Pause" } else { "▶  Play" };
            if ui.button(btn).clicked() {
                state.animating = !state.animating;
                state.last_anim_step = ui.ctx().input(|i| i.time);
            }
            ui.label(
                RichText::new("auto-advance n so you can watch the Runge oscillations grow")
                    .small()
                    .color(Color32::from_rgb(160, 175, 195)),
            );
        });
    } else {
        state.animating = false;
    }

    ui.add_space(8.0);
    ui.separator();
    ui.label(RichText::new("Overlays").strong());
    ui.checkbox(&mut state.show_lagrange, "Lagrange  L_n(x)");
    ui.checkbox(&mut state.show_newton, "Newton form (same curve)");
    ui.checkbox(&mut state.show_hermite, "Hermite  H_{2n+1}(x)");
    ui.checkbox(&mut state.show_spline, "Natural cubic spline");
    ui.checkbox(&mut state.show_clamped, "Clamped cubic spline");

    if state.show_clamped {
        ui.horizontal(|ui| {
            ui.label("y'₀");
            ui.add(egui::DragValue::new(&mut state.yp0).speed(0.1));
            ui.label("y'ₙ");
            ui.add(egui::DragValue::new(&mut state.ypn).speed(0.1));
        });
    }

    ui.add_space(8.0);
    ui.horizontal(|ui| {
        ui.label("view x ∈");
        ui.add(egui::DragValue::new(&mut state.x_min).speed(0.05));
        ui.label("…");
        ui.add(egui::DragValue::new(&mut state.x_max).speed(0.05));
    });
    ui.horizontal(|ui| {
        ui.label("plot resolution:");
        ui.add(egui::Slider::new(&mut state.plot_n, 50..=2000));
    });

    ui.add_space(10.0);
    ui.separator();
    ui.label(RichText::new("Points (xᵢ, yᵢ, y'ᵢ)").strong());
    if state.preset != Preset::Custom {
        ui.label(
            RichText::new("Preset locked — switch to Custom to edit.")
                .small()
                .color(Color32::from_rgb(160, 175, 195)),
        );
    }
    let editable = state.preset == Preset::Custom;
    egui::Grid::new("ch6_point_table")
        .num_columns(4)
        .spacing([6.0, 2.0])
        .show(ui, |ui| {
            ui.label(RichText::new("i").monospace().small());
            ui.label(RichText::new("x").monospace().small());
            ui.label(RichText::new("y").monospace().small());
            ui.label(RichText::new("y'").monospace().small());
            ui.end_row();
            for (i, p) in state.points.iter_mut().enumerate() {
                ui.label(RichText::new(format!("{i}")).monospace().small());
                if editable {
                    let r = ui.add(egui::DragValue::new(&mut p.x).speed(0.05));
                    changed |= r.changed();
                    let r = ui.add(egui::DragValue::new(&mut p.y).speed(0.05));
                    changed |= r.changed();
                    let r = ui.add(egui::DragValue::new(&mut p.yp).speed(0.05));
                    changed |= r.changed();
                } else {
                    ui.label(RichText::new(format!("{:.4}", p.x)).monospace().small());
                    ui.label(RichText::new(format!("{:.4}", p.y)).monospace().small());
                    ui.label(RichText::new(format!("{:.4}", p.yp)).monospace().small());
                }
                ui.end_row();
            }
        });

    if editable {
        ui.horizontal(|ui| {
            if ui.small_button("+ point").clicked() {
                let n = state.points.len();
                let x_new = if n >= 2 {
                    let last = state.points[n - 1].x;
                    let prev = state.points[n - 2].x;
                    last + (last - prev)
                } else if n == 1 {
                    state.points[0].x + 1.0
                } else {
                    0.0
                };
                state.points.push(DataPoint {
                    x: x_new,
                    y: 0.0,
                    yp: 0.0,
                });
                changed = true;
            }
            if ui.small_button("− last").clicked() && state.points.len() > 2 {
                state.points.pop();
                changed = true;
            }
        });
    }

    if changed {
        // Stable sort by x so Lagrange/spline behave; do it once per edit.
        state
            .points
            .sort_by(|a, b| a.x.partial_cmp(&b.x).unwrap_or(std::cmp::Ordering::Equal));
    }
}

/// Annotated formula card — Lagrange, Newton (divided differences), and
/// spline conditions. Three colours to distinguish the global polynomial
/// forms from the piecewise spline.
fn formula_card(ui: &mut Ui) {
    let blue = Color32::from_rgb(120, 180, 255);
    let amber = Color32::from_rgb(240, 200, 120);
    let green = Color32::from_rgb(120, 220, 140);
    let dim = Color32::from_rgb(200, 215, 230);
    egui::CollapsingHeader::new(
        RichText::new("Formula card  ·  three faces of interpolation").strong(),
    )
    .default_open(false)
    .show(ui, |ui| {
        ui.horizontal(|ui| {
            ui.label(RichText::new("Lagrange:  ").monospace().color(blue).strong());
            ui.label(RichText::new("L(x) = Σₖ yₖ · ℓₖ(x)").monospace());
            ui.label(RichText::new("    where  ℓₖ(x) = Πⱼ≠ₖ (x − xⱼ)/(xₖ − xⱼ)").monospace().color(dim));
        });
        ui.horizontal(|ui| {
            ui.label(RichText::new("Newton:     ").monospace().color(amber).strong());
            ui.label(RichText::new("L(x) = Σₖ f[x₀,…,xₖ] · Πⱼ<ₖ (x − xⱼ)").monospace());
        });
        ui.horizontal(|ui| {
            ui.label(RichText::new("Cubic spline:  ").monospace().color(green).strong());
            ui.label(RichText::new("Sᵢ(x) = aᵢ + bᵢ(x−xᵢ) + cᵢ(x−xᵢ)² + dᵢ(x−xᵢ)³").monospace());
        });
        ui.label(
            RichText::new(
                "Lagrange and Newton produce the same polynomial — Newton's \
                 form just allows incremental updates when a new (xₙ₊₁, yₙ₊₁) \
                 arrives. The cubic spline is fundamentally different: it is \
                 n separate cubics glued by C²-continuity at the joins.",
            )
            .small()
            .color(Color32::from_rgb(160, 175, 195)),
        );
    });
}

/// "Try this" challenge cluster for Chapter 6 — three experiments that
/// only become obvious by running them.
fn try_this_challenges(ui: &mut Ui) {
    let id_open = ui.make_persistent_id("ch6_try_open");
    let mut open: Option<usize> = ui
        .ctx()
        .data(|d| d.get_temp::<Option<usize>>(id_open))
        .unwrap_or(None);
    egui::Frame::group(ui.style()).show(ui, |ui| {
        ui.label(
            RichText::new("Try this")
                .strong()
                .color(Color32::from_rgb(255, 220, 100)),
        );
        let mut item = |ui: &mut Ui, idx: usize, q: &str, a: &str| {
            ui.horizontal_wrapped(|ui| {
                ui.label(
                    RichText::new(format!("{}.", idx + 1))
                        .monospace()
                        .color(Color32::from_rgb(240, 200, 120)),
                );
                ui.label(q);
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
        };
        item(
            ui,
            0,
            "Switch to the Runge preset, push n to 21. Where do the worst \
             Lagrange oscillations occur — near the centre x = 0, or near \
             the ends x = ±1?",
            "Near the ends. Equidistant Chebyshev-like sampling would tame \
             this; the cure is non-uniform nodes clustered toward the \
             endpoints (Chebyshev abscissae).",
        );
        item(
            ui,
            1,
            "On the Cosine preset, the spline and Lagrange agree to ~6 \
             digits at n = 11. Why doesn't Lagrange go Runge here?",
            "cos(πx) is analytic on the entire complex plane — its Taylor \
             series has infinite radius of convergence. Runge requires a \
             real-axis pole inside the convergence disc; 1/(1+25x²) has \
             poles at ±i/5 which are very close to [−1, 1].",
        );
        item(
            ui,
            2,
            "On the Step preset (a discontinuous jump), turn off the spline \
             and enable Lagrange with n = 9. Look at the y-axis range. \
             What's happening between the data points?",
            "Lagrange tries to fit a degree-8 polynomial through a step \
             function — it overshoots ±2× the jump and oscillates between \
             every pair of nodes. Splines clamp the oscillation by design \
             (the second-derivative continuity constraint).",
        );
        ui.ctx().data_mut(|d| d.insert_temp(id_open, open));
    });
}

/// "Why this chapter matters" — collapsible motivation for interpolation,
/// the under-appreciated bridge between continuous calculus and discrete
/// data. Three messages: what interpolation *is*, why polynomial-only is a
/// trap, and what the cubic spline buys.
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
                "Interpolation: given n+1 samples (xᵢ, yᵢ), produce a continuous \
                 function that passes through every one. Why care? Because almost \
                 every numerical method that integrates, differentiates, or \
                 optimises a black-box function uses an interpolant under the \
                 hood — Chapter 7's Simpson rule is just trapezoid on a \
                 piecewise-quadratic interpolant, Newton's method (Chapter 2) \
                 is local quadratic interpolation of f.",
            )
            .small(),
        );
        ui.add_space(3.0);
        ui.label(
            RichText::new(
                "The polynomial-trap: it is tempting to fit a single polynomial \
                 of degree n through n+1 points. The polynomial exists and is \
                 unique, but as n grows it oscillates wildly between nodes \
                 (Runge 1901) and the entire scheme blows up. Increasing the \
                 degree is the *wrong* answer to needing more accuracy.",
            )
            .small()
            .color(Color32::from_rgb(240, 200, 120)),
        );
        ui.label(
            RichText::new(
                "The cubic-spline cure: stop trying to fit one polynomial. \
                 Stitch a separate cubic to each consecutive pair of nodes, \
                 with continuity of value and first-and-second derivatives at \
                 the joins. Result: a curve as smooth as a quartic but \
                 bounded by the data. Same idea recurs every chapter where \
                 \"more degree\" goes nowhere.",
            )
            .small()
            .color(Color32::from_rgb(120, 220, 140)),
        );
    });
}

/// Auto-advance `runge_n` on a wall-clock cadence when `animating` is set.
/// We request a repaint each frame so the animation runs even when the user
/// is not interacting. Wraps `n` from 21 back to 3 so it loops forever.
fn maybe_advance_animation(ui: &Ui, state: &mut Ch6InterpState) {
    if !state.animating || state.preset == Preset::Custom {
        return;
    }
    let now = ui.ctx().input(|i| i.time);
    if state.last_anim_step == 0.0 {
        state.last_anim_step = now;
    }
    let interval = 0.35;
    if now - state.last_anim_step >= interval {
        state.runge_n = if state.runge_n >= 21 { 3 } else { state.runge_n + 1 };
        state.rebuild_from_preset();
        state.last_anim_step = now;
    }
    ui.ctx().request_repaint_after(std::time::Duration::from_millis(80));
}

// ──────────────────────────────────────────────────────────────────────────
// Plot view
// ──────────────────────────────────────────────────────────────────────────

fn plot_view(ui: &mut Ui, state: &Ch6InterpState) {
    let xs: Vec<f64> = state.points.iter().map(|p| p.x).collect();
    let ys: Vec<f64> = state.points.iter().map(|p| p.y).collect();
    let yps: Vec<f64> = state.points.iter().map(|p| p.yp).collect();

    // Pre-compute interpolant objects only when there's enough data.
    let newton = NewtonInterp::fit(&xs, &ys).ok();
    let spline = if xs.len() >= 3 {
        CubicSpline::natural(&xs, &ys).ok()
    } else {
        None
    };
    let clamped = if xs.len() >= 3 && state.show_clamped {
        CubicSpline::clamped(&xs, &ys, state.yp0, state.ypn).ok()
    } else {
        None
    };
    let hermite = if state.show_hermite {
        HermiteInterp::fit(&xs, &ys, &yps).ok()
    } else {
        None
    };

    Plot::new("ch6_plot")
        .height(360.0)
        .legend(Legend::default())
        .x_axis_label("x")
        .y_axis_label("y")
        .show(ui, |plot_ui| {
            // Reference function (if any preset is active).
            if let Some(f) = state.reference_function() {
                let pts = sample(state.x_min, state.x_max, state.plot_n, &f);
                plot_ui.line(
                    Line::new(PlotPoints::from(pts))
                        .color(Color32::from_rgb(160, 175, 195))
                        .style(egui_plot::LineStyle::Dashed { length: 6.0 })
                        .name("f(x)"),
                );
            }

            if state.show_lagrange {
                if let Some(nf) = &newton {
                    let pts =
                        sample(state.x_min, state.x_max, state.plot_n, &|x| nf.eval(x));
                    plot_ui.line(
                        Line::new(PlotPoints::from(pts))
                            .color(Color32::from_rgb(240, 130, 130))
                            .name(format!("Lagrange L_{}(x)", xs.len().saturating_sub(1))),
                    );
                }
            }
            if state.show_newton {
                if let Some(nf) = &newton {
                    let pts = sample(state.x_min, state.x_max, state.plot_n, &|x| {
                        nf.eval(x) + 0.0 // intentional: same curve, drawn dashed for "sanity check"
                    });
                    plot_ui.line(
                        Line::new(PlotPoints::from(pts))
                            .color(Color32::from_rgb(255, 200, 80))
                            .style(egui_plot::LineStyle::Dashed { length: 4.0 })
                            .name("Newton form"),
                    );
                }
            }
            if let Some(h) = &hermite {
                let pts = sample(state.x_min, state.x_max, state.plot_n, &|x| h.eval(x));
                plot_ui.line(
                    Line::new(PlotPoints::from(pts))
                        .color(Color32::from_rgb(200, 130, 240))
                        .name("Hermite"),
                );
            }
            if state.show_spline {
                if let Some(s) = &spline {
                    let pts = sample(state.x_min, state.x_max, state.plot_n, &|x| s.eval(x));
                    plot_ui.line(
                        Line::new(PlotPoints::from(pts))
                            .color(Color32::from_rgb(120, 220, 140))
                            .name("Natural cubic spline"),
                    );
                }
            }
            if let Some(s) = &clamped {
                let pts = sample(state.x_min, state.x_max, state.plot_n, &|x| s.eval(x));
                plot_ui.line(
                    Line::new(PlotPoints::from(pts))
                        .color(Color32::from_rgb(120, 180, 255))
                        .name("Clamped spline"),
                );
            }

            // Data points.
            let node_pts: Vec<[f64; 2]> = xs.iter().zip(ys.iter()).map(|(x, y)| [*x, *y]).collect();
            if !node_pts.is_empty() {
                plot_ui.points(
                    Points::new(PlotPoints::from(node_pts))
                        .shape(MarkerShape::Circle)
                        .radius(5.0)
                        .color(Color32::from_rgb(255, 220, 100))
                        .name("data"),
                );
            }
        });
}

// ──────────────────────────────────────────────────────────────────────────
// Max-error table (compared to the reference function for the active preset)
// ──────────────────────────────────────────────────────────────────────────

fn error_table(ui: &mut Ui, state: &Ch6InterpState) {
    let Some(f) = state.reference_function() else {
        return;
    };

    let xs: Vec<f64> = state.points.iter().map(|p| p.x).collect();
    let ys: Vec<f64> = state.points.iter().map(|p| p.y).collect();
    let newton = NewtonInterp::fit(&xs, &ys).ok();
    let spline = if xs.len() >= 3 {
        CubicSpline::natural(&xs, &ys).ok()
    } else {
        None
    };

    // Sample max-error on a fine uniform grid over the view range.
    let mut max_lag = 0.0_f64;
    let mut max_spl = 0.0_f64;
    let n = 1000;
    for i in 0..=n {
        let x = state.x_min + (state.x_max - state.x_min) * (i as f64) / (n as f64);
        let truth = f(x);
        if let Some(nf) = &newton {
            max_lag = max_lag.max((nf.eval(x) - truth).abs());
        }
        if let Some(s) = &spline {
            max_spl = max_spl.max((s.eval(x) - truth).abs());
        }
    }

    egui::Frame::group(ui.style()).show(ui, |ui| {
        ui.label(RichText::new("Max |error| against the reference function").strong());
        egui::Grid::new("ch6_err_table")
            .num_columns(2)
            .spacing([16.0, 4.0])
            .show(ui, |ui| {
                ui.label(RichText::new("Lagrange").monospace().color(Color32::from_rgb(240, 130, 130)));
                ui.label(RichText::new(format!("{max_lag:.4e}")).monospace());
                ui.end_row();
                ui.label(RichText::new("Cubic spline").monospace().color(Color32::from_rgb(120, 220, 140)));
                ui.label(RichText::new(format!("{max_spl:.4e}")).monospace());
                ui.end_row();
                let ratio = if max_spl > 0.0 { max_lag / max_spl } else { 0.0 };
                ui.label(RichText::new("Lagrange / spline ratio").monospace());
                let color = if ratio > 100.0 {
                    Color32::from_rgb(240, 130, 130)
                } else if ratio > 5.0 {
                    Color32::from_rgb(240, 200, 120)
                } else {
                    Color32::from_rgb(120, 220, 140)
                };
                ui.label(RichText::new(format!("{ratio:.1}×")).monospace().color(color));
                ui.end_row();
            });
    });
}

// ──────────────────────────────────────────────────────────────────────────
// Preset machinery + helpers
// ──────────────────────────────────────────────────────────────────────────

impl Ch6InterpState {
    fn rebuild_from_preset(&mut self) {
        let f: Option<Box<dyn Fn(f64) -> f64>> = self.reference_function();
        match self.preset {
            Preset::Custom => {
                if self.points.is_empty() {
                    self.points = vec![
                        DataPoint { x: -1.0, y: 0.0, yp: 0.0 },
                        DataPoint { x: 0.0, y: 1.0, yp: 0.0 },
                        DataPoint { x: 1.0, y: 0.0, yp: 0.0 },
                    ];
                    self.x_min = -1.5;
                    self.x_max = 1.5;
                }
            }
            Preset::Runge => {
                self.x_min = -1.0;
                self.x_max = 1.0;
                let f = f.unwrap();
                self.points = equidistant_sample(-1.0, 1.0, self.runge_n, &f);
            }
            Preset::Cos => {
                self.x_min = -1.0;
                self.x_max = 1.0;
                let f = f.unwrap();
                self.points = equidistant_sample(-1.0, 1.0, self.runge_n, &f);
            }
            Preset::Step => {
                self.x_min = -1.0;
                self.x_max = 1.0;
                let f = f.unwrap();
                self.points = equidistant_sample(-1.0, 1.0, self.runge_n, &f);
            }
        }
    }

    fn reference_function(&self) -> Option<Box<dyn Fn(f64) -> f64>> {
        match self.preset {
            Preset::Custom => None,
            Preset::Runge => Some(Box::new(|x: f64| 1.0 / (1.0 + 25.0 * x * x))),
            Preset::Cos => Some(Box::new(|x: f64| (std::f64::consts::PI * x).cos())),
            Preset::Step => Some(Box::new(|x: f64| if x >= 0.0 { 1.0 } else { -1.0 })),
        }
    }
}

fn equidistant_sample(
    a: f64,
    b: f64,
    n: usize,
    f: &dyn Fn(f64) -> f64,
) -> Vec<DataPoint> {
    // n is the number of nodes (≥ 2).
    let n = n.max(2);
    (0..n)
        .map(|i| {
            let t = i as f64 / (n - 1) as f64;
            let x = a + (b - a) * t;
            DataPoint { x, y: f(x), yp: 0.0 }
        })
        .collect()
}

fn sample<F: Fn(f64) -> f64>(a: f64, b: f64, n: usize, f: &F) -> Vec<[f64; 2]> {
    let n = n.max(2);
    (0..=n)
        .map(|i| {
            let t = i as f64 / n as f64;
            let x = a + (b - a) * t;
            [x, f(x)]
        })
        .collect()
}
