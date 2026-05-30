//! Chapter 5 — LU and Cholesky, side-by-side with the source matrix.
//!
//! The big idea on display: a factorization isn't *another* solver — it's a
//! one-shot preprocessing step that turns every later solve into two cheap
//! triangular substitutions. We show A, L, U (and P for partial pivoting), or
//! A and L for Cholesky, plus the determinant computed via either route.

use egui::{Color32, RichText, ScrollArea, Ui};

use engine::Env;
use numerics::{
    factorization::{CholeskyFactor, FactorError, LUFactor},
    Matrix,
};

use crate::widgets::matrix_editor::{matrix_editor, vector_editor, MatrixEditorOptions};

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum Mode {
    Lu,
    Cholesky,
}

pub struct Ch5State {
    a: Matrix,
    b: Vec<f64>,
    mode: Mode,
    /// LU result (with partial pivoting).
    lu: Option<Result<LUFactor, FactorError>>,
    /// Cholesky result.
    chol: Option<Result<CholeskyFactor, FactorError>>,
    /// Solution from the chosen factorization.
    solution: Option<Vec<f64>>,
    solution_error: Option<String>,
}

impl Default for Ch5State {
    fn default() -> Self {
        // Hartung Example 5.7: SPD matrix for Cholesky.
        let a = Matrix::new(
            3,
            3,
            vec![4.0, -8.0, 4.0, -8.0, 17.0, -11.0, 4.0, -11.0, 22.0],
        );
        let b = vec![0.0, 6.0, 25.0];
        let mut me = Self {
            a,
            b,
            mode: Mode::Cholesky,
            lu: None,
            chol: None,
            solution: None,
            solution_error: None,
        };
        me.recompute();
        me
    }
}

pub fn show(ui: &mut Ui, state: &mut Ch5State, _env: &mut Env) {
    egui::SidePanel::left("ch5_controls")
        .resizable(true)
        .default_width(360.0)
        .show_inside(ui, |ui| controls(ui, state));

    egui::CentralPanel::default().show_inside(ui, |ui| {
        ScrollArea::vertical().show(ui, |ui| {
            ui.heading(crate::i18n::t("Chapter 5 — LU & Cholesky factorization", "5. fejezet — LU- és Cholesky-felbontás"));
            ui.label(
                "Once A is factored, every subsequent solve is two triangular \
                substitutions (O(n²)) — the n³ → n² per-RHS win that makes this \
                the workhorse for repeated solves.",
            );
            ui.add_space(4.0);
            intuition_callout(ui);
            ui.add_space(4.0);
            formula_card_lu_chol(ui);

            ui.add_space(6.0);
            match state.mode {
                Mode::Lu => lu_view(ui, state),
                Mode::Cholesky => chol_view(ui, state),
            }
            ui.add_space(8.0);
            solve_view(ui, state);
            ui.add_space(10.0);
            side_by_side_compare(ui, state);
            ui.add_space(8.0);
            pitfall_callout(ui, state);
        });
    });
}

// ──────────────────────────────────────────────────────────────────────────
// Controls
// ──────────────────────────────────────────────────────────────────────────

fn controls(ui: &mut Ui, state: &mut Ch5State) {
    ui.add_space(6.0);
    let mut needs_recompute = false;

    ui.label(RichText::new("Mode").strong());
    if ui
        .selectable_label(state.mode == Mode::Lu, "LU  (any nonsingular A)")
        .clicked()
    {
        state.mode = Mode::Lu;
        needs_recompute = true;
    }
    if ui
        .selectable_label(state.mode == Mode::Cholesky, "Cholesky  (symmetric PD)")
        .clicked()
    {
        state.mode = Mode::Cholesky;
        needs_recompute = true;
    }

    ui.add_space(8.0);
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
    if vector_editor(ui, "b", &mut state.b, Some(n), 0.05) {
        needs_recompute = true;
    }

    ui.add_space(10.0);
    ui.separator();
    ui.label(RichText::new("Presets").strong());
    if ui.small_button("Hartung Ex 5.3  (LU of 4×4 from Ex 3.22)").clicked() {
        state.a = Matrix::new(
            4,
            4,
            vec![
                1.0, -2.0, -2.0, -2.0,
                2.0, -1.0, 2.0, 4.0,
                -1.0, 2.0, 3.0, -4.0,
                -2.0, 1.0, 4.0, -2.0,
            ],
        );
        state.b = vec![-11.0, -8.0, 27.0, 28.0];
        state.mode = Mode::Lu;
        needs_recompute = true;
    }
    if ui
        .small_button("Hartung Ex 5.7  (Cholesky 3×3 SPD)")
        .clicked()
    {
        state.a = Matrix::new(
            3,
            3,
            vec![4.0, -8.0, 4.0, -8.0, 17.0, -11.0, 4.0, -11.0, 22.0],
        );
        state.b = vec![0.0, 6.0, 25.0];
        state.mode = Mode::Cholesky;
        needs_recompute = true;
    }
    if ui
        .small_button("Pitfall  (Cholesky fails on non-SPD)")
        .clicked()
    {
        // Symmetric but not positive definite: a²−bc has both signs across
        // its principal minors. Cholesky fails at the √(negative) step;
        // LU succeeds.
        state.a = Matrix::new(
            3,
            3,
            vec![1.0, 2.0, 3.0, 2.0, 1.0, 4.0, 3.0, 4.0, 1.0],
        );
        state.b = vec![1.0, 1.0, 1.0];
        state.mode = Mode::Cholesky;
        needs_recompute = true;
    }
    if ui
        .small_button("AᵀA from random A  (SPD, for Cholesky)")
        .clicked()
    {
        // Build a small SPD matrix by symmetrizing a known matrix.
        let m = Matrix::new(3, 3, vec![2.0, 1.0, 0.5, 0.0, 3.0, 1.0, 1.0, 0.0, 2.0]);
        // SPD via A^T · A
        let a_t = m.transpose();
        let ata = a_t.matmul(&m).unwrap();
        let n = ata.rows();
        state.a = ata;
        state.b = vec![1.0; n];
        state.mode = Mode::Cholesky;
        needs_recompute = true;
    }

    if needs_recompute {
        state.recompute();
    }
}

// ──────────────────────────────────────────────────────────────────────────
// LU view
// ──────────────────────────────────────────────────────────────────────────

fn lu_view(ui: &mut Ui, state: &Ch5State) {
    egui::Frame::group(ui.style()).show(ui, |ui| {
        ui.label(RichText::new("LU factorization with partial pivoting").strong());
        match &state.lu {
            Some(Ok(f)) => {
                let l = f.l();
                let u = f.u();
                let p = f.p();
                ui.horizontal_top(|ui| {
                    matrix_card(ui, "A", &state.a, Color32::from_rgb(180, 200, 220));
                    ui.separator();
                    matrix_card(ui, "P", &p, Color32::from_rgb(160, 180, 220));
                });
                ui.add_space(4.0);
                ui.horizontal_top(|ui| {
                    matrix_card(ui, "L", &l, Color32::from_rgb(120, 220, 140));
                    ui.separator();
                    matrix_card(ui, "U", &u, Color32::from_rgb(240, 200, 120));
                });
                ui.add_space(6.0);
                let det = f.det();
                ui.label(
                    RichText::new(format!(
                        "det(A) = sign(P) · ∏Uᵢᵢ = {:.6e}",
                        det
                    ))
                    .monospace()
                    .color(Color32::from_rgb(180, 200, 220)),
                );

                // Round-trip check: ‖P·A − L·U‖∞
                if let (Ok(pa), Ok(lu)) = (p.matmul(&state.a), l.matmul(&u)) {
                    let mut max_err = 0.0_f64;
                    for (a, b) in pa.data().iter().zip(lu.data().iter()) {
                        max_err = max_err.max((a - b).abs());
                    }
                    ui.label(
                        RichText::new(format!("‖P·A − L·U‖∞ = {max_err:.3e}"))
                            .monospace()
                            .color(Color32::from_rgb(150, 170, 190)),
                    );
                }
            }
            Some(Err(e)) => {
                ui.colored_label(Color32::from_rgb(240, 130, 130), format!("LU failed: {e}"));
            }
            None => {
                ui.label("(factor pending)");
            }
        }
    });
}

// ──────────────────────────────────────────────────────────────────────────
// Cholesky view
// ──────────────────────────────────────────────────────────────────────────

fn chol_view(ui: &mut Ui, state: &Ch5State) {
    egui::Frame::group(ui.style()).show(ui, |ui| {
        ui.label(RichText::new("Cholesky factorization (Algorithm 5.8)").strong());
        match &state.chol {
            Some(Ok(f)) => {
                ui.horizontal_top(|ui| {
                    matrix_card(ui, "A", &state.a, Color32::from_rgb(180, 200, 220));
                    ui.separator();
                    matrix_card(ui, "L", &f.l, Color32::from_rgb(120, 220, 140));
                    ui.separator();
                    matrix_card(
                        ui,
                        "Lᵀ",
                        &f.l.transpose(),
                        Color32::from_rgb(240, 200, 120),
                    );
                });
                ui.add_space(6.0);
                let det = f.det();
                ui.label(
                    RichText::new(format!(
                        "det(A) = (∏Lᵢᵢ)² = {:.6e}     ←  half the work of LU",
                        det
                    ))
                    .monospace()
                    .color(Color32::from_rgb(180, 200, 220)),
                );
                if let Ok(prod) = f.l.matmul(&f.l.transpose()) {
                    let mut max_err = 0.0_f64;
                    for (a, b) in prod.data().iter().zip(state.a.data().iter()) {
                        max_err = max_err.max((a - b).abs());
                    }
                    ui.label(
                        RichText::new(format!("‖L·Lᵀ − A‖∞ = {max_err:.3e}"))
                            .monospace()
                            .color(Color32::from_rgb(150, 170, 190)),
                    );
                }
            }
            Some(Err(e)) => {
                ui.colored_label(
                    Color32::from_rgb(240, 130, 130),
                    format!("Cholesky failed: {e}"),
                );
                ui.label("Cholesky needs A to be symmetric and positive definite. Try the SPD preset.");
            }
            None => {
                ui.label("(factor pending)");
            }
        }
    });
}

// ──────────────────────────────────────────────────────────────────────────
// Solve via the chosen factorization
// ──────────────────────────────────────────────────────────────────────────

fn solve_view(ui: &mut Ui, state: &Ch5State) {
    egui::Frame::group(ui.style()).show(ui, |ui| {
        ui.label(
            RichText::new("Solve A x = b using the factorization (O(n²) per RHS)").strong(),
        );
        if let Some(err) = &state.solution_error {
            ui.colored_label(Color32::from_rgb(240, 130, 130), format!("solve failed: {err}"));
        }
        if let Some(x) = &state.solution {
            ui.horizontal_wrapped(|ui| {
                for (i, v) in x.iter().enumerate() {
                    ui.label(
                        RichText::new(format!("x{i} = {:.6}", v))
                            .monospace()
                            .color(Color32::from_rgb(120, 220, 140)),
                    );
                    ui.separator();
                }
            });
            // Residual ‖b − A·x‖∞
            let n = state.a.rows();
            let mut max_r = 0.0_f64;
            for i in 0..n {
                let mut s = state.b[i];
                for j in 0..n {
                    s -= state.a.get(i, j).unwrap() * x[j];
                }
                max_r = max_r.max(s.abs());
            }
            ui.label(
                RichText::new(format!("‖r‖∞ = ‖b − A·x‖∞ = {max_r:.3e}"))
                    .monospace()
                    .color(Color32::from_rgb(150, 170, 190)),
            );
        }
    });
}

// ──────────────────────────────────────────────────────────────────────────
// Matrix card rendering
// ──────────────────────────────────────────────────────────────────────────

fn matrix_card(ui: &mut Ui, name: &str, m: &Matrix, accent: Color32) {
    ui.vertical(|ui| {
        ui.label(RichText::new(name).strong().color(accent));
        egui::Frame::group(ui.style()).show(ui, |ui| {
            let (rows, cols) = m.shape();
            egui::Grid::new(format!("ch5_grid_{name}"))
                .num_columns(cols)
                .spacing([6.0, 2.0])
                .show(ui, |ui| {
                    for r in 0..rows {
                        for c in 0..cols {
                            let v = m.get(r, c).unwrap();
                            ui.label(RichText::new(format_cell(v)).monospace());
                        }
                        ui.end_row();
                    }
                });
        });
    });
}

fn format_cell(v: f64) -> String {
    if v == 0.0 {
        "·".into()
    } else if v.abs() < 1e-4 || v.abs() >= 1e5 {
        format!("{v:.3e}")
    } else if (v - v.round()).abs() < 1e-10 && v.abs() < 1e10 {
        format!("{}", v.round() as i64)
    } else {
        format!("{v:.4}")
    }
}

/// Annotated formula card. LU is "Gauss elimination with the multipliers
/// remembered" — those multipliers are exactly the strict lower triangle
/// of L. Cholesky is the SPD specialisation: L is its own conjugate,
/// halving the work.
fn formula_card_lu_chol(ui: &mut Ui) {
    let blue = Color32::from_rgb(120, 180, 255);
    let green = Color32::from_rgb(120, 220, 140);
    let gold = Color32::from_rgb(255, 220, 100);
    let dim = Color32::from_rgb(200, 215, 230);
    egui::CollapsingHeader::new(
        RichText::new("Formula card  ·  LU and Cholesky").strong(),
    )
    .default_open(false)
    .show(ui, |ui| {
        ui.horizontal(|ui| {
            ui.label(RichText::new("LU:  ").monospace().color(blue).strong());
            ui.label(RichText::new("P·A").monospace());
            ui.label(RichText::new(" = ").monospace().color(dim));
            ui.label(RichText::new("L").monospace().color(blue));
            ui.label(RichText::new("·").monospace().color(dim));
            ui.label(RichText::new("U").monospace().color(gold));
            ui.label(
                RichText::new(
                    "    Lᵢⱼ = mᵢⱼ for i > j   (multipliers from Ch3),   Uᵢⱼ = aᵢⱼ^(j) after elimination",
                )
                .small()
                .color(dim),
            );
        });
        ui.horizontal(|ui| {
            ui.label(RichText::new("Cholesky:  ").monospace().color(green).strong());
            ui.label(RichText::new("A").monospace());
            ui.label(RichText::new(" = ").monospace().color(dim));
            ui.label(RichText::new("L").monospace().color(green));
            ui.label(RichText::new("·").monospace().color(dim));
            ui.label(RichText::new("Lᵀ").monospace().color(green));
            ui.label(
                RichText::new("    (A SPD,  L lower-triangular,  Lₖₖ > 0)")
                    .small()
                    .color(dim),
            );
        });
        ui.add_space(2.0);
        ui.label(RichText::new("Cholesky recursion:").small().color(dim));
        ui.indent("chol_body", |ui| {
            ui.label(
                RichText::new("Lₖₖ = √( Aₖₖ − Σᵢ<k Lₖᵢ² )")
                    .monospace(),
            );
            ui.label(
                RichText::new("Lⱼₖ = (Aⱼₖ − Σᵢ<k Lⱼᵢ·Lₖᵢ) / Lₖₖ        (j > k)")
                    .monospace(),
            );
        });
        ui.label(
            RichText::new(
                "Read the second line and you see why SPD matters: the only \
                 division is by Lₖₖ, which we just computed as √(…). If that \
                 argument is negative the algorithm cannot continue — that \
                 is the indefinite-matrix pitfall.",
            )
            .small()
            .color(Color32::from_rgb(160, 175, 195)),
        );
    });
}

/// Intuition callout — the practical motivation that drives every direct
/// solver: most workloads do not solve `A x = b` once but many times with
/// the same A and varying b (time-stepping ODEs, sensitivity analysis,
/// Newton-step inner solves). Factor once at O(n³), then every later
/// solve is O(n²). That is the whole game.
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
                "Gaussian elimination from Chapter 3 takes O(n³) flops. If \
                 you have to solve A x = b for 100 different right-hand-sides \
                 with the same A, naive Gauss costs 100 · n³ — wasteful. \
                 Factorisation splits the work in two: do the O(n³) \
                 elimination *once*, store the result as L and U, then every \
                 subsequent solve is two triangular sweeps at O(n²) each. \
                 For n = 1000, factor + 100 solves is ~1.1 GFLOP instead of \
                 ~100 GFLOP.",
            )
            .small(),
        );
        ui.label(
            RichText::new(
                "Same observation underlies the determinant (det A = det L · \
                 det U = ±∏ Uᵢᵢ — free from the factorisation), the inverse \
                 (n column-solves, n³ total instead of n⁴), and any \
                 sensitivity analysis where A is fixed by physics and b is \
                 the perturbation.",
            )
            .small()
            .color(Color32::from_rgb(160, 175, 195)),
        );
    });
}

/// Side-by-side LU vs Cholesky panel — visible whenever both factorisations
/// succeed (i.e. A is SPD and not too ill-conditioned). Lays out a small
/// scoreboard so the user can read off the structural difference: LU costs
/// 2n³/3 flops and stores L+U; Cholesky costs n³/3 and stores only L; the
/// determinant via each route must match (sanity).
fn side_by_side_compare(ui: &mut Ui, state: &Ch5State) {
    let lu_ok = matches!(&state.lu, Some(Ok(_)));
    let chol_ok = matches!(&state.chol, Some(Ok(_)));
    if !(lu_ok && chol_ok) {
        return;
    }
    let n = state.a.rows();
    let lu_flops = (2 * n.pow(3)) as f64 / 3.0;
    let chol_flops = n.pow(3) as f64 / 3.0;
    let lu_det = match &state.lu {
        Some(Ok(f)) => f.det(),
        _ => f64::NAN,
    };
    let chol_det = match &state.chol {
        Some(Ok(f)) => {
            // det(A) = det(L)² = (∏ Lᵢᵢ)²
            let l = &f.l;
            let n = l.rows();
            let prod: f64 = (0..n)
                .map(|i| l.get(i, i).unwrap_or(0.0))
                .product();
            prod * prod
        }
        _ => f64::NAN,
    };
    egui::Frame::group(ui.style()).show(ui, |ui| {
        ui.label(
            RichText::new("Side-by-side  LU  vs  Cholesky").strong(),
        );
        ui.label(
            RichText::new(
                "Both succeeded on this matrix (so it is SPD). Compare the cost \
                 and the two independent determinant calculations — they must \
                 agree.",
            )
            .small()
            .color(Color32::from_rgb(160, 175, 195)),
        );
        ui.add_space(4.0);
        egui::Grid::new("ch5_sxs")
            .num_columns(3)
            .spacing([20.0, 4.0])
            .show(ui, |ui| {
                ui.label(RichText::new("metric").monospace().strong());
                ui.label(
                    RichText::new("LU (partial pivot)")
                        .monospace()
                        .color(Color32::from_rgb(120, 180, 255))
                        .strong(),
                );
                ui.label(
                    RichText::new("Cholesky")
                        .monospace()
                        .color(Color32::from_rgb(120, 220, 140))
                        .strong(),
                );
                ui.end_row();

                ui.label(RichText::new("flops (factor)").monospace());
                ui.label(RichText::new(format!("≈ {lu_flops:.0}    (2n³/3)")).monospace());
                ui.label(
                    RichText::new(format!("≈ {chol_flops:.0}    (n³/3)"))
                        .monospace()
                        .color(Color32::from_rgb(120, 220, 140)),
                );
                ui.end_row();

                ui.label(RichText::new("storage").monospace());
                ui.label(RichText::new("L + U + P  (n² + O(n))").monospace());
                ui.label(
                    RichText::new("L only  (n(n+1)/2)")
                        .monospace()
                        .color(Color32::from_rgb(120, 220, 140)),
                );
                ui.end_row();

                ui.label(RichText::new("solve cost / RHS").monospace());
                ui.label(RichText::new("2 tri-solves   2·n²").monospace());
                ui.label(RichText::new("2 tri-solves   2·n²").monospace());
                ui.end_row();

                ui.label(RichText::new("det(A)").monospace());
                ui.label(RichText::new(format!("{lu_det:+.10e}")).monospace());
                let det_match = (lu_det - chol_det).abs() <= 1e-8 * lu_det.abs().max(1.0);
                let col = if det_match {
                    Color32::from_rgb(120, 220, 140)
                } else {
                    Color32::from_rgb(240, 130, 130)
                };
                ui.label(
                    RichText::new(format!("{chol_det:+.10e}"))
                        .monospace()
                        .color(col),
                );
                ui.end_row();
            });
        ui.label(
            RichText::new(
                "Cholesky exploits symmetry to do exactly half the work and \
                 store half the data. Use it whenever you know A is symmetric \
                 positive definite — covariance matrices, normal-equations \
                 (AᵀA), discretised elliptic operators.",
            )
            .small()
            .color(Color32::from_rgb(180, 200, 220)),
        );
    });
}

/// Pitfall — fires when Cholesky fails but LU succeeds. The likely cause
/// is that A is symmetric but indefinite (some pivot in the Cholesky
/// reduction wants to take √(negative)). The "Pitfall (Cholesky fails)"
/// preset triggers exactly this case.
fn pitfall_callout(ui: &mut Ui, state: &Ch5State) {
    let lu_ok = matches!(&state.lu, Some(Ok(_)));
    let chol_err = matches!(&state.chol, Some(Err(_)));
    if !(lu_ok && chol_err) {
        return;
    }
    egui::CollapsingHeader::new(
        RichText::new("Pitfall — Cholesky needs positive definite, not just symmetric")
            .strong()
            .color(Color32::from_rgb(240, 130, 130)),
    )
    .default_open(true)
    .show(ui, |ui| {
        ui.label(
            RichText::new(
                "Cholesky walks down the diagonal: at row k it sets \
                 Lₖₖ = √(Aₖₖ − Σᵢ<k Lₖᵢ²). If that argument turns out to be \
                 negative or zero, the algorithm cannot proceed. A symmetric \
                 matrix where this happens is indefinite (eigenvalues of \
                 mixed sign) — symmetry alone is not enough.",
            )
            .small(),
        );
        ui.label(
            RichText::new(
                "Two ways to confirm A is SPD before applying Cholesky:  (a) \
                 Sylvester's criterion — every leading principal minor is \
                 strictly positive;  (b) any factorisation of the form \
                 A = BᵀB with B nonsingular (the most common construction in \
                 practice — covariance matrices, normal equations, mass \
                 matrices). The \"AᵀA from random A\" preset shows route (b).",
            )
            .small()
            .color(Color32::from_rgb(160, 175, 195)),
        );
    });
}

// ──────────────────────────────────────────────────────────────────────────
// Recompute
// ──────────────────────────────────────────────────────────────────────────

impl Ch5State {
    fn recompute(&mut self) {
        self.solution = None;
        self.solution_error = None;

        // Always run both factorizations so the user can flip Mode and see
        // them instantly. Failures are kept in the result; the renderer
        // reports the error.
        self.lu = Some(LUFactor::factor(&self.a));
        self.chol = Some(CholeskyFactor::factor(&self.a));

        // Solve using the active mode. Surface the factorization error to the
        // solution slot if it happened (no need to retain the typed error).
        match self.mode {
            Mode::Lu => match &self.lu {
                Some(Ok(f)) => match f.solve(&self.b) {
                    Ok(x) => self.solution = Some(x),
                    Err(e) => self.solution_error = Some(e.to_string()),
                },
                Some(Err(e)) => self.solution_error = Some(e.to_string()),
                None => {}
            },
            Mode::Cholesky => match &self.chol {
                Some(Ok(f)) => match f.solve(&self.b) {
                    Ok(x) => self.solution = Some(x),
                    Err(e) => self.solution_error = Some(e.to_string()),
                },
                Some(Err(e)) => self.solution_error = Some(e.to_string()),
                None => {}
            },
        }
    }
}
