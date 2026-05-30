//! Chapter 9 — least squares curve fitting.
//!
//! Editable scatter, pick a fit type, see the best curve drawn over the
//! data with the residuals as vertical line segments. For exponential and
//! power fits, both the linearized residual norm (what the algorithm
//! minimizes) and the original-form residual norm are reported, so the
//! user can see why the book emphasizes the distinction.

use egui::{Color32, RichText, ScrollArea, Stroke, Ui};
use egui_plot::{Legend, Line, MarkerShape, Plot, PlotPoints, Points};

use engine::Env;
use numerics::least_squares as ls;

use crate::i18n::{self, t, Lang};

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum FitKind {
    Line,
    Polynomial,
    Exponential,
    Power,
}

impl FitKind {
    fn label(&self) -> &'static str {
        match self {
            Self::Line => t("Line  y = a·x + b", "Egyenes  y = a·x + b"),
            Self::Polynomial => t("Polynomial  y = Σ aₖ·xᵏ", "Polinom  y = Σ aₖ·xᵏ"),
            Self::Exponential => t("Exponential  y = b·e^(a·x)", "Exponenciális  y = b·e^(a·x)"),
            Self::Power => t("Power  y = b·x^a", "Hatvány  y = b·x^a"),
        }
    }
}

#[derive(Clone)]
struct DataPoint {
    x: f64,
    y: f64,
}

pub struct Ch9State {
    kind: FitKind,
    poly_degree: usize,
    points: Vec<DataPoint>,
}

impl Default for Ch9State {
    fn default() -> Self {
        // Hartung Example 9.2 — the running line-fit dataset.
        let xs = [-1.0_f64, 1.0, 2.5, 3.0, 4.0, 4.5, 6.0];
        let ys = [0.0_f64, 1.2, 1.9, 2.5, 3.1, 3.2, 4.5];
        let points = xs.iter().zip(ys.iter()).map(|(&x, &y)| DataPoint { x, y }).collect();
        Self {
            kind: FitKind::Line,
            poly_degree: 2,
            points,
        }
    }
}

pub fn show(ui: &mut Ui, state: &mut Ch9State, _env: &mut Env) {
    egui::SidePanel::left("ch9_controls")
        .resizable(true)
        .default_width(360.0)
        .show_inside(ui, |ui| controls(ui, state));

    egui::CentralPanel::default().show_inside(ui, |ui| {
        ScrollArea::vertical().show(ui, |ui| {
            ui.heading(crate::i18n::t("Chapter 9 — least squares", "9. fejezet — legkisebb négyzetek"));
            ui.label(t(
                "Fit a curve through scattered data by minimizing Σ(model − y)². \
                Edit points on the left, switch fit types, watch the curve \
                redraw. Exponential and power fits use the linearization \
                trick (§9.3) — both error metrics are reported so you can see \
                they differ.",
                "Illessz görbét szórt adatra a Σ(modell − y)² minimalizálásával. \
                Szerkeszd a pontokat balra, válts illesztéstípust, figyeld az \
                újrarajzolt görbét. Az exponenciális és hatvány illesztés a \
                linearizálási trükköt (§9.3) használja — mindkét hibamutató \
                megjelenik, hogy lásd, eltérnek.",
            ));
            ui.add_space(4.0);
            intuition_callout(ui);
            ui.add_space(4.0);
            main_view(ui, state);
        });
    });
}

fn controls(ui: &mut Ui, state: &mut Ch9State) {
    ui.add_space(6.0);
    ui.label(RichText::new(t("Fit type", "Illesztés típusa")).strong());
    for &k in &[FitKind::Line, FitKind::Polynomial, FitKind::Exponential, FitKind::Power] {
        ui.selectable_value(&mut state.kind, k, k.label());
    }
    if state.kind == FitKind::Polynomial {
        ui.horizontal(|ui| {
            ui.label(t("degree m", "fokszám m"));
            let max = state.points.len().saturating_sub(1).max(1);
            ui.add(egui::Slider::new(&mut state.poly_degree, 1..=max));
        });
    }

    ui.add_space(10.0);
    ui.separator();
    ui.label(RichText::new(t("Presets", "Példák")).strong());
    if ui.small_button(t("Hartung Ex 9.2  (line)", "Hartung 9.2. pl.  (egyenes)")).clicked() {
        let xs = [-1.0_f64, 1.0, 2.5, 3.0, 4.0, 4.5, 6.0];
        let ys = [0.0_f64, 1.2, 1.9, 2.5, 3.1, 3.2, 4.5];
        state.points = xs.iter().zip(ys.iter()).map(|(&x, &y)| DataPoint { x, y }).collect();
        state.kind = FitKind::Line;
    }
    if ui.small_button(t("Hartung Ex 9.4  (parabola)", "Hartung 9.4. pl.  (parabola)")).clicked() {
        let xs = [-1.0_f64, -0.5, 0.0, 1.0, 2.0, 3.0, 3.5];
        let ys = [1.6_f64, 1.7, 1.9, 1.5, 0.6, -0.1, -1.0];
        state.points = xs.iter().zip(ys.iter()).map(|(&x, &y)| DataPoint { x, y }).collect();
        state.kind = FitKind::Polynomial;
        state.poly_degree = 2;
    }
    if ui.small_button(t("Hartung Ex 9.5  (exponential)", "Hartung 9.5. pl.  (exponenciális)")).clicked() {
        let xs = [0.0_f64, 1.0, 1.5, 2.0, 3.0, 4.0];
        let ys = [0.3_f64, 0.7, 0.9, 1.2, 1.8, 2.7];
        state.points = xs.iter().zip(ys.iter()).map(|(&x, &y)| DataPoint { x, y }).collect();
        state.kind = FitKind::Exponential;
    }
    if ui.small_button(t("Hartung Ex 9.6  (power)", "Hartung 9.6. pl.  (hatvány)")).clicked() {
        let xs = [0.5_f64, 1.0, 1.5, 2.5, 3.0];
        let ys = [0.7_f64, 1.1, 1.6, 2.1, 2.3];
        state.points = xs.iter().zip(ys.iter()).map(|(&x, &y)| DataPoint { x, y }).collect();
        state.kind = FitKind::Power;
    }
    if ui.small_button(t("Pitfall  (over-fit a linear trend)", "Csapda  (lineáris trend túlillesztése)")).clicked() {
        // 12 points on y ≈ 0.5·x + noise. A line fits beautifully; a
        // degree-10 polynomial will pass through every point at the cost
        // of wild oscillation between them.
        let xs = [0.0_f64, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5];
        let ys = [0.05_f64, 0.18, 0.62, 0.71, 1.02, 1.31, 1.49, 1.84, 1.95, 2.27, 2.51, 2.78];
        state.points = xs.iter().zip(ys.iter()).map(|(&x, &y)| DataPoint { x, y }).collect();
        state.kind = FitKind::Polynomial;
        state.poly_degree = 10;
    }

    ui.add_space(10.0);
    ui.separator();
    ui.label(RichText::new(t("Data (xᵢ, yᵢ)", "Adat (xᵢ, yᵢ)")).strong());
    egui::Grid::new("ch9_data")
        .num_columns(3)
        .spacing([6.0, 2.0])
        .show(ui, |ui| {
            ui.label(RichText::new("i").monospace().small());
            ui.label(RichText::new("x").monospace().small());
            ui.label(RichText::new("y").monospace().small());
            ui.end_row();
            for (i, p) in state.points.iter_mut().enumerate() {
                ui.label(RichText::new(format!("{i}")).monospace().small());
                ui.add(egui::DragValue::new(&mut p.x).speed(0.05));
                ui.add(egui::DragValue::new(&mut p.y).speed(0.05));
                ui.end_row();
            }
        });
    ui.horizontal(|ui| {
        if ui.small_button(t("+ point", "+ pont")).clicked() {
            let n = state.points.len();
            let x_new = if n >= 2 {
                state.points[n - 1].x + 1.0
            } else if n == 1 {
                state.points[0].x + 1.0
            } else {
                0.0
            };
            state.points.push(DataPoint { x: x_new, y: 0.0 });
        }
        if ui.small_button(t("− last", "− utolsó")).clicked() && state.points.len() > 2 {
            state.points.pop();
        }
    });
    // Keep degree valid as point count changes.
    let max_deg = state.points.len().saturating_sub(1).max(1);
    if state.poly_degree > max_deg {
        state.poly_degree = max_deg;
    }
}

fn main_view(ui: &mut Ui, state: &Ch9State) {
    let xs: Vec<f64> = state.points.iter().map(|p| p.x).collect();
    let ys: Vec<f64> = state.points.iter().map(|p| p.y).collect();

    let fit = match state.kind {
        FitKind::Line => ls::fit_line(&xs, &ys)
            .map(FitResult::Line)
            .unwrap_or_else(|e| FitResult::Err(e.to_string())),
        FitKind::Polynomial => ls::fit_polynomial(&xs, &ys, state.poly_degree)
            .map(FitResult::Poly)
            .unwrap_or_else(|e| FitResult::Err(e.to_string())),
        FitKind::Exponential => ls::fit_exponential(&xs, &ys)
            .map(FitResult::Exp)
            .unwrap_or_else(|e| FitResult::Err(e.to_string())),
        FitKind::Power => ls::fit_power(&xs, &ys)
            .map(FitResult::Power)
            .unwrap_or_else(|e| FitResult::Err(e.to_string())),
    };

    // Summary banner.
    egui::Frame::group(ui.style()).show(ui, |ui| match &fit {
        FitResult::Line(f) => {
            ui.label(
                RichText::new(format!(
                    "y = {:+.6} · x + {:+.6}     Σ(model − y)² = {:.6e}",
                    f.a, f.b, f.error
                ))
                .monospace()
                .color(Color32::from_rgb(120, 220, 140)),
            );
        }
        FitResult::Poly(f) => {
            let mut parts: Vec<String> = Vec::new();
            for (k, c) in f.coefs.iter().enumerate().rev() {
                let term = if k == 0 {
                    format!("{:+.6}", c)
                } else if k == 1 {
                    format!("{:+.6}·x", c)
                } else {
                    format!("{:+.6}·x^{}", c, k)
                };
                parts.push(term);
            }
            ui.label(
                RichText::new(format!(
                    "y = {}     Σ(model − y)² = {:.6e}",
                    parts.join(" "),
                    f.error
                ))
                .monospace()
                .color(Color32::from_rgb(120, 220, 140)),
            );
        }
        FitResult::Exp(f) => {
            ui.label(
                RichText::new(format!(
                    "y = {:.6} · e^({:.6}·x)     ε_lin = {:.6e}     ε_orig = {:.6e}",
                    f.b, f.a, f.error_linearized, f.error_nonlinear
                ))
                .monospace()
                .color(Color32::from_rgb(120, 220, 140)),
            );
            ui.label(
                RichText::new(t("ε_lin minimizes residuals on ln y; ε_orig measures residuals in the original units (always bigger).", "ε_lin az ln y-on minimalizálja a reziduumokat; ε_orig az eredeti egységben méri (mindig nagyobb)."))
                    .small()
                    .color(Color32::from_rgb(160, 175, 195)),
            );
        }
        FitResult::Power(f) => {
            ui.label(
                RichText::new(format!(
                    "y = {:.6} · x^({:.6})     ε_lin = {:.6e}     ε_orig = {:.6e}",
                    f.b, f.a, f.error_linearized, f.error_nonlinear
                ))
                .monospace()
                .color(Color32::from_rgb(120, 220, 140)),
            );
        }
        FitResult::Err(s) => {
            let m = if i18n::lang() == Lang::Hu { format!("illesztési hiba: {s}") } else { format!("fit error: {s}") };
            ui.colored_label(Color32::from_rgb(240, 130, 130), m);
        }
    });

    pitfall_callout(ui, state);
    cross_chapter_link(ui, state);
    worked_book_examples(ui);

    // Plot.
    ui.add_space(6.0);
    let x_min = xs.iter().cloned().fold(f64::INFINITY, f64::min);
    let x_max = xs.iter().cloned().fold(f64::NEG_INFINITY, f64::max);
    let pad = (x_max - x_min).max(1.0) * 0.1;
    let plot_xmin = x_min - pad;
    let plot_xmax = x_max + pad;
    Plot::new("ch9_plot")
        .height(360.0)
        .legend(Legend::default())
        .x_axis_label("x")
        .y_axis_label("y")
        .show(ui, |plot_ui| {
            // Data points.
            let pts: Vec<[f64; 2]> = state.points.iter().map(|p| [p.x, p.y]).collect();
            plot_ui.points(
                Points::new(PlotPoints::from(pts.clone()))
                    .shape(MarkerShape::Circle)
                    .radius(5.0)
                    .color(Color32::from_rgb(120, 180, 255))
                    .name(t("data", "adat")),
            );

            // Fitted curve.
            if fit.is_ok() {
                let n = 400;
                let curve: Vec<[f64; 2]> = (0..=n)
                    .filter_map(|i| {
                        let t = i as f64 / n as f64;
                        let x = plot_xmin + (plot_xmax - plot_xmin) * t;
                        match fit.eval(x) {
                            Some(y) if y.is_finite() => Some([x, y]),
                            _ => None,
                        }
                    })
                    .collect();
                plot_ui.line(
                    Line::new(PlotPoints::from(curve))
                        .color(Color32::from_rgb(240, 130, 130))
                        .stroke(Stroke::new(2.0, Color32::from_rgb(240, 130, 130)))
                        .name(t("fit", "illesztés")),
                );

                // Residual lines.
                for p in &state.points {
                    let yhat = fit.eval(p.x).unwrap_or(p.y);
                    plot_ui.line(
                        Line::new(PlotPoints::from(vec![[p.x, p.y], [p.x, yhat]]))
                            .color(Color32::from_rgba_unmultiplied(240, 200, 120, 180))
                            .stroke(Stroke::new(1.0, Color32::from_rgba_unmultiplied(240, 200, 120, 180)))
                            .name(""),
                    );
                }
            }
        });

    // Residual table.
    if fit.is_ok() {
        ui.add_space(8.0);
        egui::Frame::group(ui.style()).show(ui, |ui| {
            ui.label(RichText::new(t("Residuals", "Reziduumok")).strong());
            egui::Grid::new("ch9_resid_table")
                .num_columns(4)
                .spacing([16.0, 2.0])
                .show(ui, |ui| {
                    ui.label(RichText::new("i").monospace().strong());
                    ui.label(RichText::new("xᵢ").monospace().strong());
                    ui.label(RichText::new("yᵢ").monospace().strong());
                    ui.label(RichText::new(t("model − yᵢ", "modell − yᵢ")).monospace().strong());
                    ui.end_row();
                    for (i, p) in state.points.iter().enumerate() {
                        let yhat = fit.eval(p.x).unwrap_or(f64::NAN);
                        let res = yhat - p.y;
                        ui.label(RichText::new(format!("{i}")).monospace());
                        ui.label(RichText::new(format!("{:+.4}", p.x)).monospace());
                        ui.label(RichText::new(format!("{:+.4}", p.y)).monospace());
                        let color = if res.abs() < 1e-6 {
                            Color32::from_rgb(120, 220, 140)
                        } else {
                            Color32::from_rgb(200, 215, 230)
                        };
                        ui.label(
                            RichText::new(format!("{:+.4e}", res))
                                .monospace()
                                .color(color),
                        );
                        ui.end_row();
                    }
                });
        });
    }
}

/// Intuition callout — least squares is the bridge between Chapter 6
/// (interpolation: pass through every point) and Chapter 8 (minimise an
/// objective). Naming both connections up front means the user can
/// recognise the chapter as a composition, not a one-off trick.
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
                "Real data is noisy. Interpolation (Ch 6) tries to honour \
                 every data point — which means honouring the noise, not the \
                 underlying signal. Least squares answers the obvious \
                 question: \"give me the model that minimises total \
                 disagreement instead of fitting every point\".",
                "A valós adat zajos. Az interpoláció (6. fej.) minden adatpontot \
                 tisztel — vagyis a zajt tiszteli, nem a mögöttes jelet. A \
                 legkisebb négyzetek a kézenfekvő kérdésre válaszol: „add a \
                 modellt, amely a teljes eltérést minimalizálja, ahelyett hogy \
                 minden pontot eltalálna”.",
            ))
            .small(),
        );
        ui.label(
            RichText::new(t(
                "It is the workhorse of every empirical science: physics \
                 calibration curves, biology dose-response fits, the entire \
                 statistics literature. Connections both ways: Ch 6's \
                 Lagrange basis is the m = n−1 limit of polynomial least \
                 squares (zero residual), and Ch 8's minimisation framework \
                 is exactly what's running under the hood (just with a \
                 closed-form solution for linear models).",
                "Minden empirikus tudomány igáslova: fizikai kalibrációs görbék, \
                 biológiai dózis-válasz illesztések, a teljes statisztikai \
                 irodalom. Kapcsolat mindkét irányba: a 6. fejezet Lagrange-bázisa \
                 a polinomos legkisebb négyzetek m = n−1 határesete (nulla \
                 reziduum), a 8. fejezet minimalizálási kerete pedig pontosan az, \
                 ami a háttérben fut (csak zárt alakú megoldással a lineáris \
                 modellekre).",
            ))
            .small()
            .color(Color32::from_rgb(160, 175, 195)),
        );
    });
}

/// Pitfall callout — high-degree polynomial fit. Fires when the user
/// picks a polynomial degree ≥ 8 or one within 2 of the point count.
/// Both regimes are textbook overfitting setups.
fn pitfall_callout(ui: &mut Ui, state: &Ch9State) {
    let high_deg = state.poly_degree >= 8;
    let near_interp = state.kind == FitKind::Polynomial
        && state.poly_degree + 1 >= state.points.len();
    if !(state.kind == FitKind::Polynomial && (high_deg || near_interp)) {
        return;
    }
    egui::CollapsingHeader::new(
        RichText::new(t("Pitfall — high-degree polynomial fit", "Csapda — magas fokszámú polinomillesztés"))
            .strong()
            .color(Color32::from_rgb(240, 130, 130)),
    )
    .default_open(true)
    .show(ui, |ui| {
        ui.label(
            RichText::new(t(
                "As the polynomial degree m approaches n−1, the fit \
                 interpolates the data exactly — Σ(model − y)² → 0 — and \
                 every wiggle of measurement noise lands on the curve. Try \
                 the \"Pitfall\" preset: a line is hiding under that data, \
                 but a degree-10 polynomial passes through every point with \
                 violent oscillations between them.",
                "Ahogy az m fokszám n−1-hez közelít, az illesztés pontosan \
                 interpolálja az adatot — Σ(modell − y)² → 0 —, és a mérési zaj \
                 minden rezdülése a görbére kerül. Próbáld a „Csapda” példát: egy \
                 egyenes bújik az adat alatt, de egy 10-edfokú polinom minden \
                 ponton átmegy, közöttük heves oszcillációval.",
            ))
            .small(),
        );
        ui.label(
            RichText::new(t(
                "Two structural problems compound: (a) the normal-equations \
                 matrix Aᵀ·A becomes Hilbert-like as m grows (Chapter 4's \
                 \"Hilbert explorer\" — condition number explodes; \
                 round-off corrupts the coefficients);  (b) the resulting \
                 polynomial has no predictive value outside the data range \
                 — extrapolation diverges. Lesson: keep m small, use \
                 regularisation (ridge), or switch to splines (Chapter 6).",
                "Két szerkezeti probléma adódik össze: (a) az Aᵀ·A normálegyenlet-\
                 mátrix Hilbert-szerűvé válik, ahogy m nő (a 4. fejezet „Hilbert-\
                 felfedezője” — a kondíciószám felrobban, a kerekítés rontja az \
                 együtthatókat);  (b) a kapott polinomnak nincs előrejelző értéke \
                 az adattartományon kívül — az extrapoláció divergál. Tanulság: \
                 tartsd m-et kicsin, használj regularizációt (ridge), vagy válts \
                 spline-okra (6. fejezet).",
            ))
            .small()
            .color(Color32::from_rgb(160, 175, 195)),
        );
    });
}

/// Cross-chapter link — least-squares fitting is not a new algorithm, it
/// is a *use case* for the Gaussian-elimination solver from Chapter 3.
/// Surface that here so the user sees the dependency graph instead of
/// treating every chapter as an island.
fn cross_chapter_link(ui: &mut Ui, state: &Ch9State) {
    egui::CollapsingHeader::new(
        RichText::new(t("Under the hood — what this reuses", "A motorháztető alatt — mit használ újra")).strong(),
    )
    .default_open(false)
    .show(ui, |ui| {
        let bullet = |ui: &mut Ui, label: &str, body: &str| {
            ui.horizontal_wrapped(|ui| {
                ui.label(
                    RichText::new(format!("• {label}"))
                        .strong()
                        .color(Color32::from_rgb(120, 200, 255)),
                );
                ui.label(body);
            });
        };
        match state.kind {
            FitKind::Line => {
                bullet(
                    ui,
                    t("closed-form normal equations", "zárt alakú normálegyenletek"),
                    t("Two equations in (a, b), solved without any iteration. Just sums of xᵢ, yᵢ, xᵢ², xᵢyᵢ — see eq. (9.3) in Hartung.",
                      "Két egyenlet (a, b)-ben, iteráció nélkül megoldva. Csak xᵢ, yᵢ, xᵢ², xᵢyᵢ összegek — lásd Hartung (9.3) egyenlet."),
                );
            }
            FitKind::Polynomial => {
                bullet(
                    ui,
                    t("Chapter 3  ·  Gauss elimination with partial pivoting", "3. fejezet  ·  Gauss-elimináció részleges pivotálással"),
                    t("We assemble the (m+1)×(m+1) normal-equations matrix Σxᵢ^(j+k) and right-hand side Σxᵢ^j·yᵢ, then call `solve_partial_pivot` — the same routine you watched scrub through column-by-column in the Ch3 tab.",
                      "Összeállítjuk az (m+1)×(m+1) normálegyenlet-mátrixot Σxᵢ^(j+k) és a Σxᵢ^j·yᵢ jobb oldalt, majd meghívjuk a `solve_partial_pivot`-ot — ugyanaz a rutin, amit a 3. fülön oszloponként végignéztél."),
                );
                bullet(
                    ui,
                    t("warning", "figyelmeztetés"),
                    t("As m grows, the normal-equations matrix becomes a Hilbert-like matrix (Ch4 'Hilbert explorer') and its condition number explodes. That is the practical reason real-world polynomial fits use QR or SVD instead.",
                      "Ahogy m nő, a normálegyenlet-mátrix Hilbert-szerűvé válik (4. fej. „Hilbert-felfedező”), és a kondíciószáma felrobban. Ez a gyakorlati oka, hogy a valós polinomillesztések inkább QR-t vagy SVD-t használnak."),
                );
            }
            FitKind::Exponential => {
                bullet(
                    ui,
                    t("Chapter 1  ·  log identity", "1. fejezet  ·  logaritmus-azonosság"),
                    t("Take log y to linearise: ln(b·e^{ax}) = ln b + a·x. Then fall back to the line-fit machinery above. Different problem to minimise, hence ε_lin ≠ ε_orig.",
                      "Vedd log y-t a linearizáláshoz: ln(b·e^{ax}) = ln b + a·x. Aztán térj vissza a fenti egyenes-illesztéshez. Más a minimalizálandó feladat, ezért ε_lin ≠ ε_orig."),
                );
            }
            FitKind::Power => {
                bullet(
                    ui,
                    t("Chapter 1  ·  log-log identity", "1. fejezet  ·  log-log azonosság"),
                    t("Take log of both sides: ln(b·x^a) = ln b + a·ln x. Linearise both axes, then fit a line.",
                      "Vedd mindkét oldal logaritmusát: ln(b·x^a) = ln b + a·ln x. Linearizáld mindkét tengelyt, majd illessz egyenest."),
                );
            }
        }
    });
}

/// Worked-book reference card. Lists Hartung's tabulated coefficients for
/// all four worked examples (§9.2 / 9.4 / 9.5 / 9.6) so the user can flip
/// the corresponding preset on the left and verify the live numbers match
/// the textbook to ~5 decimal places.
fn worked_book_examples(ui: &mut Ui) {
    egui::CollapsingHeader::new(
        RichText::new(t("Hartung textbook values (for verification)", "Hartung tankönyvi értékek (ellenőrzéshez)"))
            .strong()
            .color(Color32::from_rgb(255, 220, 100)),
    )
    .default_open(false)
    .show(ui, |ui| {
        ui.label(
            RichText::new(t(
                "Load any of the four book presets on the left and compare \
                 the live coefficients in the banner above with the textbook \
                 values below.",
                "Tölts be balra a négy könyvbeli példa bármelyikét, és hasonlítsd \
                 össze a fenti sávban élőben látható együtthatókat az alábbi \
                 tankönyvi értékekkel.",
            ))
            .small()
            .color(Color32::from_rgb(160, 175, 195)),
        );
        ui.add_space(4.0);
        egui::Grid::new("ch9_book_table")
            .num_columns(3)
            .spacing([18.0, 4.0])
            .show(ui, |ui| {
                ui.label(RichText::new(t("example", "példa")).monospace().strong());
                ui.label(RichText::new(t("fit type", "illesztés típusa")).monospace().strong());
                ui.label(RichText::new(t("coefficients", "együtthatók")).monospace().strong());
                ui.end_row();
                ui.label(RichText::new("9.2").monospace());
                ui.label(RichText::new(t("line", "egyenes")).monospace());
                ui.label(
                    RichText::new("a = 0.630243   b = 0.542163   err = 0.124691")
                        .monospace()
                        .color(Color32::from_rgb(200, 215, 230)),
                );
                ui.end_row();
                ui.label(RichText::new("9.4").monospace());
                ui.label(RichText::new(t("parabola", "parabola")).monospace());
                ui.label(
                    RichText::new("a₂ = −0.196021   a₁ = −0.084748   a₀ = 1.752653   err = 0.0964456")
                        .monospace()
                        .color(Color32::from_rgb(200, 215, 230)),
                );
                ui.end_row();
                ui.label(RichText::new("9.5").monospace());
                ui.label(RichText::new(t("exp", "exp")).monospace());
                ui.label(
                    RichText::new("a = 0.528951   b = 0.368765   ε_lin = 0.095396   ε_orig = 0.165543")
                        .monospace()
                        .color(Color32::from_rgb(200, 215, 230)),
                );
                ui.end_row();
                ui.label(RichText::new("9.6").monospace());
                ui.label(RichText::new(t("power", "hatvány")).monospace());
                ui.label(
                    RichText::new("a = 0.676257   b = 1.130984   ε_lin = 0.007279   ε_orig = 0.019616")
                        .monospace()
                        .color(Color32::from_rgb(200, 215, 230)),
                );
                ui.end_row();
            });
    });
}

enum FitResult {
    Line(ls::LineFit),
    Poly(ls::PolyFit),
    Exp(ls::ExponentialFit),
    Power(ls::PowerFit),
    Err(String),
}

impl FitResult {
    /// Evaluate the fitted curve at `x`. Returns `None` for power fits when
    /// `x <= 0` (outside domain), and for the error variant.
    fn eval(&self, x: f64) -> Option<f64> {
        match self {
            Self::Line(f) => Some(f.eval(x)),
            Self::Poly(f) => Some(f.eval(x)),
            Self::Exp(f) => Some(f.eval(x)),
            Self::Power(f) => {
                if x > 0.0 {
                    Some(f.eval(x))
                } else {
                    None
                }
            }
            Self::Err(_) => None,
        }
    }

    fn is_ok(&self) -> bool {
        !matches!(self, Self::Err(_))
    }
}
