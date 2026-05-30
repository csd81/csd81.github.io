//! Chapter 4 — iterative methods and conditioning.
//!
//! Visual centerpieces:
//!
//! * Semilog convergence curves for Jacobi and Gauss-Seidel overlaid — uses
//!   [`numerics::IterativeReport::history`] directly.
//! * Diagonal-dominance indicator (sufficient condition for both methods).
//! * Condition-number gauge with color zones (`cond∞ < 10`/`< 100`/`< 1000`/≥`1000`).
//! * Hilbert-matrix preset slider to watch `cond∞(H_n)` explode.

use egui::{Color32, RichText, ScrollArea, Ui};
use egui_plot::{Legend, Line, Plot, PlotPoints};

use engine::Env;
use numerics::{
    condition::{cond_inf, hilbert},
    iterative::{gauss_seidel, is_diagonally_dominant, jacobi, IterativeOptions, IterativeReport},
    Matrix,
};

use crate::widgets::matrix_editor::{matrix_editor, vector_editor, MatrixEditorOptions};

pub struct Ch4State {
    a: Matrix,
    b: Vec<f64>,
    tol: f64,
    max_iter: usize,
    jacobi_report: Option<Result<IterativeReport, String>>,
    gs_report: Option<Result<IterativeReport, String>>,
    cond: Option<f64>,
    diag_dominant: bool,
    /// Hilbert preset slider.
    hilbert_n: usize,
}

impl Default for Ch4State {
    fn default() -> Self {
        // Hartung Example 4.8 — diagonally dominant 3x3.
        let a = Matrix::new(
            3,
            3,
            vec![5.0, 3.0, -1.0, 2.0, -10.0, 1.0, -3.0, 4.0, -12.0],
        );
        let b = vec![-4.0, 25.0, -47.0];
        let mut me = Self {
            a,
            b,
            tol: 1e-10,
            max_iter: 200,
            jacobi_report: None,
            gs_report: None,
            cond: None,
            diag_dominant: false,
            hilbert_n: 4,
        };
        me.recompute();
        me
    }
}

pub fn show(ui: &mut Ui, state: &mut Ch4State, _env: &mut Env) {
    egui::SidePanel::left("ch4_controls")
        .resizable(true)
        .default_width(360.0)
        .show_inside(ui, |ui| controls(ui, state));

    egui::CentralPanel::default().show_inside(ui, |ui| {
        ScrollArea::vertical().show(ui, |ui| {
            ui.heading(crate::i18n::t("Chapter 4 — iterative methods & conditioning", "4. fejezet — iterációs módszerek és kondicionáltság"));
            ui.label(
                "Edit A and b on the left. Jacobi and Gauss-Seidel both iterate from \
                x⁽⁰⁾ = 0; their successive-difference norms are plotted side by side. \
                Diagonal dominance (Thms 4.11 / 4.15) guarantees convergence.",
            );
            ui.add_space(4.0);
            intuition_callout(ui);

            ui.add_space(8.0);
            status_strip(ui, state);
            ui.add_space(8.0);
            formula_card_jacobi_gs(ui);
            ui.add_space(8.0);
            convergence_plot(ui, state);
            ui.add_space(8.0);
            solution_table(ui, state);
            ui.add_space(8.0);
            pitfall_callout(ui, state);
            ui.add_space(12.0);
            hilbert_explorer(ui, state);
        });
    });
}

// ──────────────────────────────────────────────────────────────────────────
// Controls
// ──────────────────────────────────────────────────────────────────────────

fn controls(ui: &mut Ui, state: &mut Ch4State) {
    ui.add_space(6.0);
    let mut needs_recompute = false;

    let mut opts = MatrixEditorOptions::default();
    opts.min_dim = 2;
    opts.max_dim = 8;
    if matrix_editor(ui, "A", &mut state.a, opts) {
        let n = state.a.rows();
        state.b.resize(n, 0.0);
        needs_recompute = true;
    }
    let n = state.a.rows();
    if state.b.len() != n {
        state.b.resize(n, 0.0);
    }

    ui.add_space(8.0);
    if vector_editor(ui, "b", &mut state.b, Some(n), 0.05) {
        needs_recompute = true;
    }

    ui.add_space(10.0);
    ui.horizontal(|ui| {
        ui.label("tol");
        let r = ui.add(
            egui::DragValue::new(&mut state.tol)
                .range(1e-15..=1.0)
                .speed(1e-3),
        );
        if r.changed() {
            needs_recompute = true;
        }
        ui.label("max iter");
        let r = ui.add(egui::DragValue::new(&mut state.max_iter).range(1..=2000));
        if r.changed() {
            needs_recompute = true;
        }
    });

    ui.add_space(10.0);
    ui.separator();
    ui.label(RichText::new("Presets").strong());
    if ui.small_button("Hartung Ex 4.8  (dominant, converges)").clicked() {
        state.a = Matrix::new(
            3,
            3,
            vec![5.0, 3.0, -1.0, 2.0, -10.0, 1.0, -3.0, 4.0, -12.0],
        );
        state.b = vec![-4.0, 25.0, -47.0];
        needs_recompute = true;
    }
    if ui.small_button("Indominant  (diverges)").clicked() {
        state.a = Matrix::new(2, 2, vec![1.0, 2.0, 3.0, 1.0]);
        state.b = vec![3.0, 5.0];
        needs_recompute = true;
    }
    if ui.small_button("Strong dominance  (fast)").clicked() {
        state.a = Matrix::new(
            3,
            3,
            vec![20.0, -1.0, 2.0, -1.0, 21.0, -1.0, 2.0, -1.0, 20.0],
        );
        state.b = vec![6.0, 25.0, -11.0];
        needs_recompute = true;
    }

    if needs_recompute {
        state.recompute();
    }
}

// ──────────────────────────────────────────────────────────────────────────
// Status strip — dominance + condition gauge
// ──────────────────────────────────────────────────────────────────────────

fn status_strip(ui: &mut Ui, state: &Ch4State) {
    egui::Frame::group(ui.style()).show(ui, |ui| {
        ui.horizontal(|ui| {
            let (text, color) = if state.diag_dominant {
                (
                    "✓ A is diagonally dominant — Jacobi & G-S converge (Thm 4.11 / 4.15).",
                    Color32::from_rgb(120, 220, 140),
                )
            } else {
                (
                    "⚠ A is not diagonally dominant — convergence not guaranteed.",
                    Color32::from_rgb(240, 200, 120),
                )
            };
            ui.colored_label(color, text);
        });

        if let Some(c) = state.cond {
            let (label, color) = if c < 10.0 {
                ("well-conditioned", Color32::from_rgb(120, 220, 140))
            } else if c < 100.0 {
                ("mild", Color32::from_rgb(180, 220, 140))
            } else if c < 1000.0 {
                ("moderate", Color32::from_rgb(240, 200, 120))
            } else {
                ("ill-conditioned", Color32::from_rgb(240, 130, 130))
            };
            ui.horizontal(|ui| {
                ui.label(RichText::new("cond∞(A) =").strong());
                ui.label(
                    RichText::new(format!("{c:.3e}"))
                        .monospace()
                        .color(color),
                );
                ui.label(RichText::new(format!("({label})")).color(color));
            });
        } else {
            ui.label(
                RichText::new("cond∞(A) unavailable (singular)")
                    .color(Color32::from_rgb(240, 130, 130)),
            );
        }
    });
}

// ──────────────────────────────────────────────────────────────────────────
// Convergence-curve plot
// ──────────────────────────────────────────────────────────────────────────

fn convergence_plot(ui: &mut Ui, state: &Ch4State) {
    Plot::new("ch4_convergence")
        .height(280.0)
        .legend(Legend::default())
        .x_axis_label("iteration k")
        .y_axis_label("log₁₀ ‖xₖ₊₁ − xₖ‖∞")
        .show(ui, |plot_ui| {
            if let Some(Ok(r)) = &state.jacobi_report {
                let pts: Vec<[f64; 2]> = r
                    .history
                    .iter()
                    .enumerate()
                    .map(|(k, &d)| [k as f64 + 1.0, d.max(1e-20).log10()])
                    .collect();
                plot_ui.line(
                    Line::new(PlotPoints::from(pts))
                        .color(Color32::from_rgb(120, 180, 255))
                        .name(format!("Jacobi ({} iter)", r.iterations)),
                );
            }
            if let Some(Ok(r)) = &state.gs_report {
                let pts: Vec<[f64; 2]> = r
                    .history
                    .iter()
                    .enumerate()
                    .map(|(k, &d)| [k as f64 + 1.0, d.max(1e-20).log10()])
                    .collect();
                plot_ui.line(
                    Line::new(PlotPoints::from(pts))
                        .color(Color32::from_rgb(120, 220, 140))
                        .name(format!("Gauss-Seidel ({} iter)", r.iterations)),
                );
            }
        });

    if let Some(Err(e)) = &state.jacobi_report {
        ui.colored_label(Color32::from_rgb(240, 130, 130), format!("Jacobi: {e}"));
    }
    if let Some(Err(e)) = &state.gs_report {
        ui.colored_label(Color32::from_rgb(240, 130, 130), format!("Gauss-Seidel: {e}"));
    }

    contraction_ratio_panel(ui, state);
}

/// Intuition callout — why we'd ever choose an iterative solver when
/// Chapter 3 gives us a direct one. Two reasons: huge sparse A (direct
/// fill-in kills you) and "good-enough" answers from a hot start. Pair
/// that with the conditioning lesson: small A inputs can produce large x
/// changes when A is nearly singular.
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
                "Chapter 3 gave a finite-step direct solver. Why bother with \
                 these never-terminating iterations? Because real-world A is \
                 often huge and sparse (a million unknowns, twenty nonzeros \
                 per row). Direct Gauss generates O(n²) fill-in and runs out \
                 of memory. Jacobi and Gauss-Seidel cost O(nnz) per step and \
                 keep A sparse forever — at the price of needing convergence \
                 conditions like diagonal dominance.",
            )
            .small(),
        );
        ui.label(
            RichText::new(
                "Conditioning is the second theme: cond∞(A) measures how \
                 much relative error in A or b can amplify in the answer x. \
                 Ill-conditioned A makes every solver — direct or iterative \
                 — return garbage faithfully. The Hilbert explorer at the \
                 bottom of this chapter is the canonical example.",
            )
            .small()
            .color(Color32::from_rgb(160, 175, 195)),
        );
    });
}

/// Annotated formula card — Jacobi and Gauss–Seidel iterations written
/// component-wise with colour-coded symbols. Blue = "use old x", green =
/// "use already-updated x". The single character difference between the
/// two formulas is the entire algorithmic distinction.
fn formula_card_jacobi_gs(ui: &mut Ui) {
    let blue = Color32::from_rgb(120, 180, 255);
    let green = Color32::from_rgb(120, 220, 140);
    let dim = Color32::from_rgb(200, 215, 230);
    egui::CollapsingHeader::new(
        RichText::new("Formula card  ·  Jacobi vs Gauss–Seidel").strong(),
    )
    .default_open(false)
    .show(ui, |ui| {
        ui.horizontal(|ui| {
            ui.label(RichText::new("Jacobi:    ").monospace().color(blue).strong());
            ui.label(RichText::new("xᵢ^(k+1) = (1/aᵢᵢ)·[ bᵢ − Σⱼ≠ᵢ aᵢⱼ·").monospace());
            ui.label(RichText::new("xⱼ^(k)").monospace().color(blue));
            ui.label(RichText::new(" ]").monospace());
        });
        ui.horizontal(|ui| {
            ui.label(RichText::new("Gauss–S.: ").monospace().color(green).strong());
            ui.label(RichText::new("xᵢ^(k+1) = (1/aᵢᵢ)·[ bᵢ − Σⱼ<ᵢ aᵢⱼ·").monospace());
            ui.label(RichText::new("xⱼ^(k+1)").monospace().color(green));
            ui.label(RichText::new(" − Σⱼ>ᵢ aᵢⱼ·").monospace());
            ui.label(RichText::new("xⱼ^(k)").monospace().color(blue));
            ui.label(RichText::new(" ]").monospace());
        });
        ui.label(
            RichText::new(
                "Jacobi reads only the previous iterate. Gauss–Seidel reads \
                 already-updated entries (xⱼ for j < i are the newer (k+1) \
                 values). On a diagonally-dominant matrix Gauss–Seidel \
                 converges roughly twice as fast — its iteration matrix has \
                 spectral radius ρ(B_GS) ≈ ρ(B_J)².",
            )
            .small()
            .color(dim),
        );
    });
}

/// Pitfall callout — fires when the matrix is not diagonally dominant.
/// The sufficient-condition theorems 4.11 / 4.15 are silent on non-dominant
/// A: the iteration may still converge (if ρ(B) < 1) but it may also blow
/// up. The "Indominant (diverges)" preset is the latter case; this panel
/// names the diagnosis so the user does not assume the solver is buggy.
fn pitfall_callout(ui: &mut Ui, state: &Ch4State) {
    if state.diag_dominant {
        return;
    }
    egui::CollapsingHeader::new(
        RichText::new("Pitfall — diagonal dominance lost")
            .strong()
            .color(Color32::from_rgb(240, 130, 130)),
    )
    .default_open(true)
    .show(ui, |ui| {
        ui.label(
            RichText::new(
                "A is not strictly diagonally dominant, so Thm 4.11 / 4.15 \
                 give no convergence guarantee. The iteration may still \
                 converge if the spectral radius ρ(B) of the iteration \
                 matrix is < 1, but you cannot tell from the matrix entries \
                 alone — check the empirical ρ̂ in the panel above.",
            )
            .small()
            .color(Color32::from_rgb(200, 215, 230)),
        );
        ui.add_space(2.0);
        ui.label(
            RichText::new(
                "Rescue paths: re-order equations to push dominant entries \
                 onto the diagonal, switch to SOR with relaxation, or just \
                 use a direct solver (Chapter 3) — iterative methods earn \
                 their keep only when A is sparse or huge.",
            )
            .small()
            .color(Color32::from_rgb(160, 175, 195)),
        );
    });
}

/// Empirical contraction ratio per method.
///
/// If the iteration converges linearly with `‖e_{k+1}‖ ≈ ρ · ‖e_k‖`, the
/// geometric mean of the successive ratios of `‖x_{k+1} − x_k‖` is an
/// estimate of the spectral radius `ρ(B)` of the iteration matrix. This is
/// the quantitative bridge between Theorem 4.11/4.15 and what the user sees
/// in the log-plot above: a steeper line ↔ smaller ρ ↔ faster convergence.
fn contraction_ratio_panel(ui: &mut Ui, state: &Ch4State) {
    let geo_ratio = |hist: &[f64]| -> Option<f64> {
        let positive: Vec<f64> = hist.iter().copied().filter(|d| *d > 0.0).collect();
        if positive.len() < 3 {
            return None;
        }
        let last = positive.len() - 1;
        // Take the *tail* (skip the first iterates which often haven't
        // entered the linear regime yet).
        let start = last / 2;
        let mut log_sum = 0.0_f64;
        let mut n = 0usize;
        for i in start..last {
            let r = positive[i + 1] / positive[i];
            if r.is_finite() && r > 0.0 {
                log_sum += r.ln();
                n += 1;
            }
        }
        if n == 0 {
            None
        } else {
            Some((log_sum / n as f64).exp())
        }
    };
    let label = |rho: f64| -> (&'static str, Color32) {
        if rho >= 1.0 {
            ("diverges (ρ ≥ 1)", Color32::from_rgb(240, 130, 130))
        } else if rho > 0.9 {
            ("very slow", Color32::from_rgb(240, 200, 120))
        } else if rho > 0.5 {
            ("ok", Color32::from_rgb(200, 215, 230))
        } else {
            ("fast", Color32::from_rgb(120, 220, 140))
        }
    };
    egui::Frame::group(ui.style()).show(ui, |ui| {
        ui.label(RichText::new("Empirical contraction ratio  ρ̂").strong());
        ui.label(
            RichText::new(
                "Geometric mean of |xₖ₊₁ − xₖ| / |xₖ − xₖ₋₁| over the tail of \
                 the iteration. ρ̂ < 1 means linear convergence with rate ρ̂; \
                 smaller is faster. Theorem 4.11/4.15 guarantees ρ̂ < 1 when \
                 A is strictly diagonally dominant.",
            )
            .small()
            .color(Color32::from_rgb(160, 175, 195)),
        );
        if let Some(Ok(r)) = &state.jacobi_report {
            if let Some(rho) = geo_ratio(&r.history) {
                let (lbl, col) = label(rho);
                ui.label(
                    RichText::new(format!("Jacobi        ρ̂ ≈ {rho:.4}   ({lbl})"))
                        .monospace()
                        .color(col),
                );
            }
        }
        if let Some(Ok(r)) = &state.gs_report {
            if let Some(rho) = geo_ratio(&r.history) {
                let (lbl, col) = label(rho);
                ui.label(
                    RichText::new(format!("Gauss-Seidel  ρ̂ ≈ {rho:.4}   ({lbl})"))
                        .monospace()
                        .color(col),
                );
            }
        }
    });
}

// ──────────────────────────────────────────────────────────────────────────
// Final solutions
// ──────────────────────────────────────────────────────────────────────────

fn solution_table(ui: &mut Ui, state: &Ch4State) {
    egui::Frame::group(ui.style()).show(ui, |ui| {
        ui.label(RichText::new("Final solutions").strong());
        egui::Grid::new("ch4_solution")
            .num_columns(3)
            .spacing([16.0, 4.0])
            .show(ui, |ui| {
                ui.label(RichText::new("k").monospace().strong());
                ui.label(
                    RichText::new("Jacobi")
                        .monospace()
                        .color(Color32::from_rgb(120, 180, 255))
                        .strong(),
                );
                ui.label(
                    RichText::new("Gauss-Seidel")
                        .monospace()
                        .color(Color32::from_rgb(120, 220, 140))
                        .strong(),
                );
                ui.end_row();
                let n = state.a.rows();
                for i in 0..n {
                    ui.label(RichText::new(format!("x{i}")).monospace());
                    if let Some(Ok(r)) = &state.jacobi_report {
                        ui.label(RichText::new(format!("{:.10}", r.x[i])).monospace());
                    } else {
                        ui.label("—");
                    }
                    if let Some(Ok(r)) = &state.gs_report {
                        ui.label(RichText::new(format!("{:.10}", r.x[i])).monospace());
                    } else {
                        ui.label("—");
                    }
                    ui.end_row();
                }
            });
    });
}

// ──────────────────────────────────────────────────────────────────────────
// Hilbert-matrix explorer
// ──────────────────────────────────────────────────────────────────────────

fn hilbert_explorer(ui: &mut Ui, state: &mut Ch4State) {
    egui::Frame::group(ui.style()).show(ui, |ui| {
        ui.label(RichText::new("Hilbert matrix ill-conditioning (Table 4.3)").strong());
        ui.label(
            "H_ij = 1/(i+j−1). cond∞(Hₙ) grows roughly like (1+√2)^(4n). \
            By n = 10, f64's 16-digit precision is almost completely consumed.",
        );

        ui.horizontal(|ui| {
            ui.label("n:");
            ui.add(egui::Slider::new(&mut state.hilbert_n, 2..=12));
            if ui.button("Load Hₙ as A").clicked() {
                let n = state.hilbert_n;
                state.a = hilbert(n);
                state.b = vec![1.0; n];
                state.recompute();
            }
        });

        // Live plot of cond∞(H_k) for k = 2..=12.
        Plot::new("ch4_hilbert_cond")
            .height(200.0)
            .x_axis_label("n")
            .y_axis_label("log₁₀ cond∞(Hₙ)")
            .show(ui, |plot_ui| {
                let mut pts = Vec::new();
                for n in 2..=12 {
                    if let Ok(c) = cond_inf(&hilbert(n)) {
                        pts.push([n as f64, c.max(1.0).log10()]);
                    }
                }
                plot_ui.line(
                    Line::new(PlotPoints::from(pts))
                        .color(Color32::from_rgb(240, 130, 130))
                        .name("cond∞(Hₙ)"),
                );
                let n = state.hilbert_n as f64;
                if let Ok(c) = cond_inf(&hilbert(state.hilbert_n)) {
                    plot_ui.points(
                        egui_plot::Points::new(PlotPoints::from(vec![[n, c.max(1.0).log10()]]))
                            .shape(egui_plot::MarkerShape::Diamond)
                            .radius(6.0)
                            .color(Color32::from_rgb(255, 220, 100))
                            .name("current n"),
                    );
                }
            });
    });
}

// ──────────────────────────────────────────────────────────────────────────
// Recompute everything
// ──────────────────────────────────────────────────────────────────────────

impl Ch4State {
    fn recompute(&mut self) {
        self.diag_dominant = is_diagonally_dominant(&self.a);
        self.cond = cond_inf(&self.a).ok();

        let opts = IterativeOptions {
            tol: self.tol,
            max_iter: self.max_iter,
        };
        self.jacobi_report = Some(
            jacobi(&self.a, &self.b, None, opts).map_err(|e| e.to_string()),
        );
        self.gs_report = Some(
            gauss_seidel(&self.a, &self.b, None, opts).map_err(|e| e.to_string()),
        );
    }
}
