//! Chapter 3 — Gaussian elimination with pivot animation.
//!
//! User edits a square matrix `A` and right-hand side `b`. A step slider
//! scrubs through the elimination, displaying the augmented matrix `Ã^(k)`
//! after each column is cleared. Three pivoting strategies are shown
//! side-by-side along with their final residuals — the standard visual
//! evidence for why partial pivoting matters (Hartung §3.3).

use egui::{Color32, RichText, ScrollArea, Ui};
use egui_plot::{Legend, Plot};

use engine::Env;
use numerics::{linear, norms::vec_norm_inf, Matrix};

use crate::widgets::matrix_editor::{matrix_editor, vector_editor, MatrixEditorOptions};
use crate::i18n::{self, t, Lang};

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum Strategy {
    Naive,
    PartialPivot,
    ScaledPartialPivot,
}

impl Strategy {
    fn label(&self) -> &'static str {
        match self {
            Self::Naive => t("Naive (no pivot)", "Naiv (pivot nélkül)"),
            Self::PartialPivot => t("Partial pivot", "Részleges pivotálás"),
            Self::ScaledPartialPivot => t("Scaled partial pivot", "Skálázott részleges pivot"),
        }
    }
    fn short(&self) -> &'static str {
        match self {
            Self::Naive => "naive",
            Self::PartialPivot => "partial",
            Self::ScaledPartialPivot => "scaled",
        }
    }
}

#[derive(Clone)]
struct Snapshot {
    aug: Vec<Vec<f64>>,
    pivot_row: Option<usize>,
    pivot_col: Option<usize>,
    swapped_with: Option<usize>,
    description: String,
}

pub struct Ch3State {
    a: Matrix,
    b: Vec<f64>,
    strategy: Strategy,
    step: usize,
    snapshots: Vec<Snapshot>,
    solution: Option<Vec<f64>>,
    error: Option<String>,
    residual_per_strategy: Vec<(Strategy, Option<f64>)>,
    /// Animation: when true, the step slider auto-advances ~1 step/sec.
    animating: bool,
    last_anim_step: f64,
}

impl Default for Ch3State {
    fn default() -> Self {
        // The notorious 4-digit-catastrophe matrix from Hartung Example 3.25.
        let a = Matrix::new(2, 2, vec![0.0002, -30.5, 5.06, -1.05]);
        let b = vec![-60.99, 250.9];
        let mut me = Self {
            a,
            b,
            strategy: Strategy::PartialPivot,
            step: 0,
            snapshots: Vec::new(),
            solution: None,
            error: None,
            residual_per_strategy: Vec::new(),
            animating: false,
            last_anim_step: 0.0,
        };
        me.recompute();
        me
    }
}

pub fn show(ui: &mut Ui, state: &mut Ch3State, _env: &mut Env) {
    egui::SidePanel::left("ch3_controls")
        .resizable(true)
        .default_width(360.0)
        .show_inside(ui, |ui| controls(ui, state));

    egui::CentralPanel::default().show_inside(ui, |ui| {
        ScrollArea::vertical().show(ui, |ui| {
            ui.heading(crate::i18n::t("Chapter 3 — Gaussian elimination, animated", "3. fejezet — Gauss-elimináció, animálva"));
            ui.label(t(
                "Scrub through each elimination step. The current pivot is highlighted; \
                row swaps are noted. Compare the three pivoting strategies' final \
                residuals against one another below.",
                "Lépkedj végig minden eliminációs lépésen. Az aktuális pivot kiemelve; \
                a sorcserék jelölve. Hasonlítsd össze lent a három pivotálási stratégia \
                végső reziduumát.",
            ));
            ui.add_space(4.0);
            intuition_callout(ui);

            if let Some(err) = &state.error {
                let prefix = t("error: ", "hiba: ");
                ui.colored_label(Color32::from_rgb(240, 130, 130), format!("{prefix}{err}"));
            }

            ui.add_space(6.0);
            formula_card_gauss(ui);
            ui.add_space(6.0);
            step_slider(ui, state);
            ui.add_space(8.0);
            augmented_view(ui, state);
            ui.add_space(8.0);
            solution_view(ui, state);
            ui.add_space(10.0);
            pitfall_callout(ui);
            ui.add_space(6.0);
            strategy_comparison(ui, state);
        });
    });
}

// ──────────────────────────────────────────────────────────────────────────
// Controls panel (matrix editor, strategy)
// ──────────────────────────────────────────────────────────────────────────

fn controls(ui: &mut Ui, state: &mut Ch3State) {
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
    // Force b to match A's row count.
    let n = state.a.rows();
    if state.b.len() != n {
        state.b.resize(n, 0.0);
    }

    ui.add_space(8.0);
    if vector_editor(ui, "b", &mut state.b, Some(n), 0.05) {
        needs_recompute = true;
    }

    ui.add_space(10.0);
    ui.label(RichText::new(t("Strategy", "Stratégia")).strong());
    for &s in &[Strategy::Naive, Strategy::PartialPivot, Strategy::ScaledPartialPivot] {
        if ui.selectable_label(state.strategy == s, s.label()).clicked() {
            state.strategy = s;
            state.step = 0;
            needs_recompute = true;
        }
    }

    ui.add_space(10.0);
    ui.separator();
    ui.label(RichText::new(t("Presets", "Példák")).strong());
    if ui.small_button(t("Hartung Ex 3.22  (x = -3, 2, 4, -2)", "Hartung 3.22. pl.  (x = -3, 2, 4, -2)")).clicked() {
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
        state.step = 0;
        needs_recompute = true;
    }
    if ui.small_button(t("Hartung Ex 3.24  (zero-pivot at step 2)", "Hartung 3.24. pl.  (nulla pivot a 2. lépésben)")).clicked() {
        state.a = Matrix::new(
            4,
            4,
            vec![
                2.0, -1.0, 0.0, -3.0,
                2.0, -1.0, 1.0, 5.0,
                -3.0, 1.0, 1.0, -2.0,
                2.0, 4.0, 0.0, -1.0,
            ],
        );
        state.b = vec![8.0, 2.0, -5.0, 21.0];
        state.step = 0;
        needs_recompute = true;
    }
    if ui.small_button(t("Hartung Ex 3.25  (4-digit catastrophe)", "Hartung 3.25. pl.  (4 jegyű katasztrófa)")).clicked() {
        state.a = Matrix::new(2, 2, vec![0.0002, -30.5, 5.06, -1.05]);
        state.b = vec![-60.99, 250.9];
        state.step = 0;
        needs_recompute = true;
    }
    if ui.small_button(t("Pitfall  (scaled beats partial)", "Csapda  (a skálázott veri a részlegest)")).clicked() {
        // A = [[1, 1e5], [1, 1]] · x = [1e5, 2]  →  exact x ≈ (1.00001, 0.99999).
        // Partial pivoting sees |1| = |1| in column 0 and keeps row order;
        // the multiplier 1.0 then subtracts a 1e5-scale row from a 1-scale row,
        // wiping out the small entry's contribution and giving x₁ = 0, x₂ = 1.
        // Scaled pivot first divides each row by its row-max, sees
        // 1/1e5 ≪ 1/1, swaps, and recovers full accuracy.
        state.a = Matrix::new(2, 2, vec![1.0, 1e5, 1.0, 1.0]);
        state.b = vec![1e5, 2.0];
        state.step = 0;
        needs_recompute = true;
    }

    if needs_recompute {
        state.recompute();
    }
}

/// Intuition callout — Gaussian elimination is the backbone of every
/// linear-algebra solver after this point. The chapter spends most of its
/// energy on pivoting because the *naive* version is correct in real
/// arithmetic but fragile in f64 — same lesson as Ch 1 wearing a matrix
/// costume. This callout names the lesson upfront so the user knows why
/// the rest of the chapter exists.
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
                "Solving A·x = b is the bread-and-butter operation of \
                 scientific computing. Discretised PDEs, normal equations \
                 for least squares (Ch 9), Newton steps inside every \
                 optimisation method — all collapse to a linear solve. The \
                 algorithm itself (Gaussian elimination) is what every \
                 textbook teaches you in two hours, but the engineering \
                 around it — pivoting, conditioning, residual checks — is \
                 what separates a toy from a tool.",
                "Az A·x = b megoldása a tudományos számítás mindennapi művelete. \
                 Diszkretizált PDE-k, a legkisebb négyzetek normálegyenletei \
                 (9. fej.), Newton-lépések minden optimalizáló módszerben — mind \
                 egy lineáris megoldásra vezet. Maga az algoritmus (Gauss-elimináció) \
                 az, amit minden tankönyv két óra alatt megtanít, de a köré épülő \
                 mérnöki munka — pivotálás, kondicionáltság, reziduum-ellenőrzés — \
                 választja el a játékszert az eszköztől.",
            ))
            .small(),
        );
        ui.label(
            RichText::new(t(
                "Two pictures to carry forward:  (1) eliminating a column \
                 means subtracting the right multiple of the pivot row from \
                 every row below it.  (2) The condition number of A bounds \
                 how much round-off error in A and b can grow on its way to \
                 x. We meet conditioning in earnest in Chapter 4.",
                "Két kép, amit vigyél magaddal:  (1) egy oszlop eliminálása azt \
                 jelenti, hogy a pivotsor megfelelő többszörösét kivonod minden \
                 alatta lévő sorból.  (2) Az A kondíciószáma korlátozza, mennyire \
                 nőhet az A-ban és b-ben lévő kerekítési hiba az x felé vezető úton. \
                 A kondicionáltsággal komolyan a 4. fejezetben találkozunk.",
            ))
            .small()
            .color(Color32::from_rgb(160, 175, 195)),
        );
    });
}

/// Formula card — names the two updates Gaussian elimination performs
/// at each elimination step. `aⱼⱼ` is the pivot (gold) and `mᵢⱼ` is the
/// multiplier (cyan); colours match the highlight used in the augmented-
/// matrix view above so the user can connect symbols to cells.
fn formula_card_gauss(ui: &mut Ui) {
    let cyan = Color32::from_rgb(120, 200, 255);
    let gold = Color32::from_rgb(255, 220, 100);
    let dim = Color32::from_rgb(200, 215, 230);
    egui::CollapsingHeader::new(
        RichText::new(t("Formula card  ·  one elimination step", "Képletkártya  ·  egy eliminációs lépés")).strong(),
    )
    .default_open(false)
    .show(ui, |ui| {
        ui.horizontal(|ui| {
            ui.label(RichText::new(t("multiplier   ", "szorzó   ")).monospace().color(dim));
            ui.label(RichText::new("mᵢⱼ").monospace().color(cyan));
            ui.label(RichText::new("=").monospace().color(dim));
            ui.label(RichText::new("aᵢⱼ").monospace());
            ui.label(RichText::new("/").monospace().color(dim));
            ui.label(RichText::new("aⱼⱼ").monospace().color(gold));
        });
        ui.horizontal(|ui| {
            ui.label(RichText::new(t("row update  ", "sorfrissítés  ")).monospace().color(dim));
            ui.label(RichText::new("aᵢₖ ← aᵢₖ − ").monospace());
            ui.label(RichText::new("mᵢⱼ").monospace().color(cyan));
            ui.label(RichText::new("· aⱼₖ").monospace());
            ui.label(RichText::new("    (k = j..n)").monospace().color(dim));
        });
        ui.horizontal(|ui| {
            ui.label(RichText::new(t("rhs update  ", "jobb oldal  ")).monospace().color(dim));
            ui.label(RichText::new("bᵢ ← bᵢ − ").monospace());
            ui.label(RichText::new("mᵢⱼ").monospace().color(cyan));
            ui.label(RichText::new("· bⱼ").monospace());
        });
        ui.label(
            RichText::new(t(
                "Pivot small ⇒ multiplier huge ⇒ subtraction wipes \
                 significant digits from the target row. Pivoting strategies \
                 (next callout) keep |mᵢⱼ| ≤ 1.",
                "Kis pivot ⇒ óriási szorzó ⇒ a kivonás letörli a célsor értékes \
                 jegyeit. A pivotálási stratégiák (következő panel) |mᵢⱼ| ≤ 1-en \
                 tartják.",
            ))
            .small()
            .color(Color32::from_rgb(160, 175, 195)),
        );
    });
}

/// Pitfall narrative — explain in one paragraph why the naive solver is
/// dangerous and what the two pivoting strategies are trying to fix. The
/// strategy comparison below this panel makes the words quantitative.
fn pitfall_callout(ui: &mut Ui) {
    egui::CollapsingHeader::new(
        RichText::new(t("Pitfall — why pivoting matters", "Csapda — miért számít a pivotálás"))
            .strong()
            .color(Color32::from_rgb(240, 130, 130)),
    )
    .default_open(true)
    .show(ui, |ui| {
        ui.label(
            RichText::new(t(
                "Naive Gaussian elimination divides by the diagonal entry of \
                 each column in turn. If that pivot happens to be small in \
                 magnitude — even if it is nonzero — the multipliers \
                 mᵢⱼ = aᵢⱼ / aⱼⱼ blow up, and subtracting a huge scaled row \
                 from a moderate one annihilates the moderate row's \
                 significant digits.",
                "A naiv Gauss-elimináció sorra az egyes oszlopok átlós elemével \
                 oszt. Ha ez a pivot véletlenül kicsi nagyságú — még ha nem is \
                 nulla —, az mᵢⱼ = aᵢⱼ / aⱼⱼ szorzók felrobbannak, és egy óriási \
                 skálázott sort egy mérsékeltből kivonva megsemmisülnek a mérsékelt \
                 sor értékes jegyei.",
            ))
            .small(),
        );
        ui.add_space(4.0);
        ui.label(
            RichText::new(t(
                "Partial pivoting fixes this by picking, at each step, the row \
                 with the largest |aᵢⱼ| in the current column. That works \
                 unless the rows have wildly different scales — then a row \
                 whose entry is large in absolute terms can still be small \
                 relative to its own scale. Scaled partial pivoting normalises \
                 each row by its row-max before picking; on the \"Pitfall\" \
                 preset it lands within 1e-15 of the true solution while \
                 partial pivot loses ~5 digits.",
                "A részleges pivotálás ezt úgy javítja, hogy minden lépésben az \
                 aktuális oszlopban a legnagyobb |aᵢⱼ|-jű sort választja. Ez addig \
                 működik, amíg a sorok skálái nem nagyon eltérőek — ekkor egy sor, \
                 amelynek eleme abszolút értékben nagy, a saját skálájához képest \
                 még kicsi lehet. A skálázott részleges pivotálás minden sort a \
                 sormaximumával normál a választás előtt; a „Csapda” példán 1e-15-en \
                 belül eltalálja a valódi megoldást, míg a részleges pivot ~5 jegyet \
                 veszít.",
            ))
            .small()
            .color(Color32::from_rgb(160, 175, 195)),
        );
    });
}

// ──────────────────────────────────────────────────────────────────────────
// Step slider
// ──────────────────────────────────────────────────────────────────────────

fn step_slider(ui: &mut Ui, state: &mut Ch3State) {
    if state.snapshots.is_empty() {
        return;
    }
    let last = state.snapshots.len() - 1;
    ui.horizontal(|ui| {
        ui.label(t("step:", "lépés:"));
        ui.add(egui::Slider::new(&mut state.step, 0..=last));
        if ui.small_button("⏮").clicked() {
            state.step = 0;
        }
        if ui.small_button("◀").clicked() && state.step > 0 {
            state.step -= 1;
        }
        if ui.small_button("▶").clicked() && state.step < last {
            state.step += 1;
        }
        if ui.small_button("⏭").clicked() {
            state.step = last;
        }
        let play_label = if state.animating { "⏸" } else { "▶▶" };
        if ui.small_button(play_label).clicked() {
            state.animating = !state.animating;
            state.last_anim_step = ui.ctx().input(|i| i.time);
        }
    });
    // Animation tick: advance one step per second when playing; stop and
    // wrap back to 0 at the end so the user can replay without restarting.
    if state.animating {
        let now = ui.ctx().input(|i| i.time);
        if state.last_anim_step == 0.0 {
            state.last_anim_step = now;
        }
        if now - state.last_anim_step >= 0.9 {
            state.step = if state.step >= last { 0 } else { state.step + 1 };
            state.last_anim_step = now;
        }
        ui.ctx().request_repaint_after(std::time::Duration::from_millis(80));
    }
    if let Some(snap) = state.snapshots.get(state.step) {
        ui.label(
            RichText::new(&snap.description)
                .monospace()
                .color(Color32::from_rgb(180, 200, 220)),
        );
    }
}

// ──────────────────────────────────────────────────────────────────────────
// Augmented-matrix grid view
// ──────────────────────────────────────────────────────────────────────────

fn augmented_view(ui: &mut Ui, state: &Ch3State) {
    let Some(snap) = state.snapshots.get(state.step) else {
        return;
    };
    let n = snap.aug.len();
    if n == 0 {
        return;
    }
    let cols = snap.aug[0].len();

    egui::Frame::group(ui.style()).show(ui, |ui| {
        ui.label(RichText::new(t("Augmented matrix [A | b]", "Bővített mátrix [A | b]")).strong());
        egui::Grid::new("ch3_aug")
            .num_columns(cols + 1) // +1 for the "|" between A and b
            .spacing([6.0, 4.0])
            .show(ui, |ui| {
                // Header row
                ui.label(RichText::new(t("row", "sor")).small().italics());
                for j in 0..(cols - 1) {
                    ui.label(
                        RichText::new(format!("x{j}")).small().italics().color(
                            Color32::from_rgb(140, 160, 180),
                        ),
                    );
                }
                ui.label("");
                ui.label(
                    RichText::new("b")
                        .small()
                        .italics()
                        .color(Color32::from_rgb(160, 200, 160)),
                );
                ui.end_row();

                for i in 0..n {
                    let label = if Some(i) == snap.pivot_row {
                        RichText::new(format!("{i} ★"))
                            .monospace()
                            .color(Color32::from_rgb(255, 220, 100))
                    } else if Some(i) == snap.swapped_with {
                        RichText::new(format!("{i} ↕"))
                            .monospace()
                            .color(Color32::from_rgb(240, 180, 120))
                    } else {
                        RichText::new(format!("{i}"))
                            .monospace()
                            .color(Color32::from_rgb(120, 140, 160))
                    };
                    ui.label(label);
                    for j in 0..cols {
                        if j == cols - 1 {
                            ui.label(RichText::new("│").color(Color32::from_gray(120)));
                        }
                        let v = snap.aug[i][j];
                        let is_pivot = Some(i) == snap.pivot_row && Some(j) == snap.pivot_col;
                        let txt = format_cell(v);
                        let rt = if is_pivot {
                            RichText::new(txt)
                                .monospace()
                                .color(Color32::BLACK)
                                .background_color(Color32::from_rgb(255, 220, 100))
                        } else if v == 0.0 {
                            RichText::new(txt).monospace().color(Color32::from_gray(110))
                        } else {
                            RichText::new(txt).monospace()
                        };
                        ui.label(rt);
                    }
                    ui.end_row();
                }
            });
    });
}

fn format_cell(v: f64) -> String {
    if v == 0.0 {
        "0".into()
    } else if v.abs() < 1e-4 || v.abs() >= 1e5 {
        format!("{v:.3e}")
    } else if (v - v.round()).abs() < 1e-10 && v.abs() < 1e10 {
        format!("{}", v.round() as i64)
    } else {
        format!("{v:.4}")
    }
}

// ──────────────────────────────────────────────────────────────────────────
// Solution display
// ──────────────────────────────────────────────────────────────────────────

fn solution_view(ui: &mut Ui, state: &Ch3State) {
    if let Some(x) = &state.solution {
        egui::Frame::group(ui.style()).show(ui, |ui| {
            ui.label(RichText::new(t("Solution x", "Megoldás x")).strong());
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
        });
    }
}

// ──────────────────────────────────────────────────────────────────────────
// Side-by-side residual comparison across strategies
// ──────────────────────────────────────────────────────────────────────────

fn strategy_comparison(ui: &mut Ui, state: &Ch3State) {
    egui::Frame::group(ui.style()).show(ui, |ui| {
        ui.label(RichText::new(t("Residual ‖b − A·x‖∞ across strategies", "Reziduum ‖b − A·x‖∞ stratégiánként")).strong());
        ui.label(t(
            "Lower is better. Watch the naive solver explode on the Hartung Ex 3.25 preset.",
            "Kisebb a jobb. Figyeld, ahogy a naiv megoldó felrobban a Hartung 3.25. példán.",
        ));
        egui::Grid::new("ch3_strat_table")
            .num_columns(3)
            .spacing([12.0, 4.0])
            .show(ui, |ui| {
                ui.label(RichText::new(t("strategy", "stratégia")).monospace().strong());
                ui.label(RichText::new("‖r‖∞").monospace().strong());
                ui.label(RichText::new(t("relative to best", "a legjobbhoz képest")).monospace().strong());
                ui.end_row();
                let best = state
                    .residual_per_strategy
                    .iter()
                    .filter_map(|(_, r)| *r)
                    .fold(f64::INFINITY, f64::min);
                for (s, r) in &state.residual_per_strategy {
                    ui.label(RichText::new(s.label()).monospace());
                    match r {
                        Some(v) => {
                            ui.label(RichText::new(format!("{v:.3e}")).monospace());
                            let ratio = if best > 0.0 { v / best } else { 1.0 };
                            let color = if ratio < 10.0 {
                                Color32::from_rgb(120, 220, 140)
                            } else if ratio < 1000.0 {
                                Color32::from_rgb(240, 200, 120)
                            } else {
                                Color32::from_rgb(240, 130, 130)
                            };
                            ui.label(
                                RichText::new(format!("{ratio:.2}×"))
                                    .monospace()
                                    .color(color),
                            );
                        }
                        None => {
                            ui.label(
                                RichText::new(t("failed", "sikertelen"))
                                    .monospace()
                                    .color(Color32::from_rgb(240, 130, 130)),
                            );
                            ui.label("");
                        }
                    }
                    ui.end_row();
                }
            });

        // Bar plot of log10 residuals for visual punch.
        ui.add_space(6.0);
        Plot::new("ch3_resid_bars")
            .height(140.0)
            .legend(Legend::default())
            .y_axis_label("log₁₀ ‖r‖∞")
            .show_x(false)
            .show(ui, |plot_ui| {
                use egui_plot::Bar;
                let bars: Vec<_> = state
                    .residual_per_strategy
                    .iter()
                    .enumerate()
                    .map(|(i, (s, r))| {
                        let h = r.map(|v| v.max(1e-20).log10()).unwrap_or(0.0);
                        let color = match s {
                            Strategy::Naive => Color32::from_rgb(240, 130, 130),
                            Strategy::PartialPivot => Color32::from_rgb(120, 220, 140),
                            Strategy::ScaledPartialPivot => Color32::from_rgb(120, 180, 255),
                        };
                        Bar::new(i as f64, h).name(s.short()).fill(color)
                    })
                    .collect();
                plot_ui.bar_chart(egui_plot::BarChart::new(bars).width(0.6));
            });
    });
}

// ──────────────────────────────────────────────────────────────────────────
// Recompute snapshots + residuals
// ──────────────────────────────────────────────────────────────────────────

impl Ch3State {
    fn recompute(&mut self) {
        self.snapshots.clear();
        self.solution = None;
        self.error = None;

        let (rows, cols) = self.a.shape();
        if rows != cols {
            self.error = Some(if i18n::lang() == Lang::Hu {
                format!("Az A-nak négyzetesnek kell lennie; kaptam {rows}x{cols}")
            } else {
                format!("A must be square; got {rows}x{cols}")
            });
            return;
        }
        if self.b.len() != rows {
            let bl = self.b.len();
            self.error = Some(if i18n::lang() == Lang::Hu {
                format!("a b hossza {bl} egyezzen meg A sorszámával: {rows}")
            } else {
                format!("b length {bl} must equal A's row count {rows}")
            });
            return;
        }

        // Always run all three strategies for the comparison panel.
        let mut residuals: Vec<(Strategy, Option<f64>)> = Vec::new();
        for &s in &[Strategy::Naive, Strategy::PartialPivot, Strategy::ScaledPartialPivot] {
            let r = match s {
                Strategy::Naive => linear::solve_gauss(&self.a, &self.b),
                Strategy::PartialPivot => linear::solve_partial_pivot(&self.a, &self.b),
                Strategy::ScaledPartialPivot => {
                    linear::solve_scaled_partial_pivot(&self.a, &self.b)
                }
            };
            let r_norm = r.ok().map(|x| residual_inf_norm(&self.a, &x, &self.b));
            residuals.push((s, r_norm));
        }
        self.residual_per_strategy = residuals;

        // Run the *selected* strategy step-by-step for the visualizer.
        match self.strategy {
            Strategy::Naive => run_naive(&self.a, &self.b, &mut self.snapshots),
            Strategy::PartialPivot => run_partial(&self.a, &self.b, &mut self.snapshots),
            Strategy::ScaledPartialPivot => run_scaled(&self.a, &self.b, &mut self.snapshots),
        }

        // Run the back-substitution and record the solution.
        if let Some(last) = self.snapshots.last() {
            if let Some(x) = back_substitute(&last.aug) {
                self.solution = Some(x);
            }
        }
        // Clamp step
        if self.step >= self.snapshots.len() {
            self.step = self.snapshots.len().saturating_sub(1);
        }
    }
}

fn residual_inf_norm(a: &Matrix, x: &[f64], b: &[f64]) -> f64 {
    let n = a.rows();
    let mut r = vec![0.0; n];
    for i in 0..n {
        let mut s = b[i];
        for j in 0..a.cols() {
            s -= a.get(i, j).unwrap() * x[j];
        }
        r[i] = s;
    }
    vec_norm_inf(&r)
}

fn augment(a: &Matrix, b: &[f64]) -> Vec<Vec<f64>> {
    let (rows, cols) = a.shape();
    let mut aug = Vec::with_capacity(rows);
    for i in 0..rows {
        let mut row = Vec::with_capacity(cols + 1);
        for j in 0..cols {
            row.push(a.get(i, j).unwrap());
        }
        row.push(b[i]);
        aug.push(row);
    }
    aug
}

fn run_naive(a: &Matrix, b: &[f64], out: &mut Vec<Snapshot>) {
    let mut aug = augment(a, b);
    let n = aug.len();
    out.push(Snapshot {
        aug: aug.clone(),
        pivot_row: None,
        pivot_col: None,
        swapped_with: None,
        description: t("Initial augmented matrix [A | b].", "Kezdeti bővített mátrix [A | b].").into(),
    });
    for k in 0..n.saturating_sub(1) {
        let pivot = aug[k][k];
        if pivot == 0.0 {
            out.push(Snapshot {
                aug: aug.clone(),
                pivot_row: Some(k),
                pivot_col: Some(k),
                swapped_with: None,
                description: if i18n::lang() == Lang::Hu {
                    format!("{}. lépés: nulla pivot A[{k},{k}]-nál — a naiv nem folytatható", k + 1)
                } else {
                    format!("step {}: zero pivot at A[{k},{k}] — naive cannot continue", k + 1)
                },
            });
            return;
        }
        for i in (k + 1)..n {
            let factor = aug[i][k] / pivot;
            for j in k..=n {
                aug[i][j] -= factor * aug[k][j];
            }
        }
        out.push(Snapshot {
            aug: aug.clone(),
            pivot_row: Some(k),
            pivot_col: Some(k),
            swapped_with: None,
            description: if i18n::lang() == Lang::Hu {
                format!("{}. lépés: {} oszlop eliminálása A[{},{}] = {pivot:.4} alatt", k + 1, k, k, k)
            } else {
                format!("step {}: eliminate column {} below A[{},{}] = {pivot:.4}", k + 1, k, k, k)
            },
        });
    }
}

fn run_partial(a: &Matrix, b: &[f64], out: &mut Vec<Snapshot>) {
    let mut aug = augment(a, b);
    let n = aug.len();
    out.push(Snapshot {
        aug: aug.clone(),
        pivot_row: None,
        pivot_col: None,
        swapped_with: None,
        description: t("Initial augmented matrix [A | b].", "Kezdeti bővített mátrix [A | b].").into(),
    });
    for k in 0..n.saturating_sub(1) {
        // Choose pivot row.
        let mut best = k;
        let mut best_mag = aug[k][k].abs();
        for i in (k + 1)..n {
            let m = aug[i][k].abs();
            if m > best_mag {
                best_mag = m;
                best = i;
            }
        }
        let swapped = if best != k {
            aug.swap(k, best);
            Some(best)
        } else {
            None
        };
        let pivot = aug[k][k];
        if pivot == 0.0 {
            out.push(Snapshot {
                aug: aug.clone(),
                pivot_row: Some(k),
                pivot_col: Some(k),
                swapped_with: swapped,
                description: if i18n::lang() == Lang::Hu {
                    format!("{}. lépés: szinguláris — nincs nemnulla pivot a(z) {k}. sor alatt", k + 1)
                } else {
                    format!("step {}: singular — no nonzero pivot below row {k}", k + 1)
                },
            });
            return;
        }
        for i in (k + 1)..n {
            let factor = aug[i][k] / pivot;
            for j in k..=n {
                aug[i][j] -= factor * aug[k][j];
            }
        }
        let hu = i18n::lang() == Lang::Hu;
        let desc = match swapped {
            Some(l) => if hu {
                format!("{}. lépés: {k} ↔ {l} sorcsere, majd a {k} oszlop eliminálása (pivot {pivot:.4})", k + 1)
            } else {
                format!("step {}: swap rows {k} ↔ {l}, then eliminate col {k} (pivot {pivot:.4})", k + 1)
            },
            None => if hu {
                format!("{}. lépés: a pivot már a legnagyobb a {k} oszlopban (= {pivot:.4}), eliminálás alatta", k + 1)
            } else {
                format!("step {}: pivot already largest in col {k} (= {pivot:.4}), eliminate below", k + 1)
            },
        };
        out.push(Snapshot {
            aug: aug.clone(),
            pivot_row: Some(k),
            pivot_col: Some(k),
            swapped_with: swapped,
            description: desc,
        });
    }
}

fn run_scaled(a: &Matrix, b: &[f64], out: &mut Vec<Snapshot>) {
    let mut aug = augment(a, b);
    let n = aug.len();
    let mut s = vec![0.0; n];
    for i in 0..n {
        let mut m = 0.0_f64;
        for j in 0..n {
            m = m.max(aug[i][j].abs());
        }
        s[i] = m.max(f64::MIN_POSITIVE);
    }
    out.push(Snapshot {
        aug: aug.clone(),
        pivot_row: None,
        pivot_col: None,
        swapped_with: None,
        description: {
            let scales = s.iter().map(|v| format!("{v:.4}")).collect::<Vec<_>>();
            if i18n::lang() == Lang::Hu {
                format!("Kezdeti bővített mátrix. Sor-skálatényezők sᵢ = max|aᵢⱼ| = {scales:?}")
            } else {
                format!("Initial augmented matrix. Row scale factors sᵢ = max|aᵢⱼ| = {scales:?}")
            }
        },
    });
    for k in 0..n.saturating_sub(1) {
        let mut best = k;
        let mut best_metric = aug[k][k].abs() / s[k];
        for i in (k + 1)..n {
            let metric = aug[i][k].abs() / s[i];
            if metric > best_metric {
                best_metric = metric;
                best = i;
            }
        }
        let swapped = if best != k {
            aug.swap(k, best);
            s.swap(k, best);
            Some(best)
        } else {
            None
        };
        let pivot = aug[k][k];
        if pivot == 0.0 {
            out.push(Snapshot {
                aug: aug.clone(),
                pivot_row: Some(k),
                pivot_col: Some(k),
                swapped_with: swapped,
                description: if i18n::lang() == Lang::Hu {
                    format!("{}. lépés: szinguláris — nincs nemnulla skálázott pivot", k + 1)
                } else {
                    format!("step {}: singular — no nonzero scaled pivot", k + 1)
                },
            });
            return;
        }
        for i in (k + 1)..n {
            let factor = aug[i][k] / pivot;
            for j in k..=n {
                aug[i][j] -= factor * aug[k][j];
            }
        }
        let hu = i18n::lang() == Lang::Hu;
        let desc = match swapped {
            Some(l) => if hu {
                format!("{}. lépés: {k} ↔ {l} sorcsere (|a/s| max), {k} oszlop eliminálása", k + 1)
            } else {
                format!("step {}: swap rows {k} ↔ {l} (|a/s| max), eliminate col {k}", k + 1)
            },
            None => if hu {
                format!("{}. lépés: a(z) {k}. sornak már max |a/s|-e van, {k} oszlop eliminálása", k + 1)
            } else {
                format!("step {}: row {k} already has max |a/s|, eliminate col {k}", k + 1)
            },
        };
        out.push(Snapshot {
            aug: aug.clone(),
            pivot_row: Some(k),
            pivot_col: Some(k),
            swapped_with: swapped,
            description: desc,
        });
    }
}

fn back_substitute(aug: &[Vec<f64>]) -> Option<Vec<f64>> {
    let n = aug.len();
    if n == 0 {
        return None;
    }
    let mut x = vec![0.0; n];
    for i in (0..n).rev() {
        let diag = aug[i][i];
        if diag == 0.0 {
            return None;
        }
        let mut s = aug[i][n];
        for j in (i + 1)..n {
            s -= aug[i][j] * x[j];
        }
        x[i] = s / diag;
    }
    Some(x)
}
