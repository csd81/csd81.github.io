//! Chapter 1 — error analysis and floating-point.
//!
//! Three side-by-side experiments, each backed by `numerics::error::*`:
//!
//! 1. **Cancellation** — `1 − cos(x)` (naive) vs `2·sin²(x/2)` (stable) as
//!    x → 0, showing relative error and digits lost.
//! 2. **Summation order** — naive vs sorted vs Kahan summation on the
//!    `[1e16, 1, 1, …]` torture sequence.
//! 3. **Unstable recurrence** — Hartung Example 1.3: three algebraically
//!    equivalent recurrences for `1/3^n`, semilog plot of accumulated error.

use egui::{Color32, RichText, ScrollArea, Ui};
use egui_plot::{Legend, Line, MarkerShape, Plot, PlotPoints, Points};

use engine::Env;
use numerics::error as num_error;

use crate::i18n::{self, t, Lang};

pub struct Ch1State {
    /// log10(x) for the cancellation experiment.
    pub log_x: f64,
    /// Number of "small" terms in the summation torture sequence.
    pub n_small: usize,
    /// Magnitude of the big term (1e_big_log).
    pub big_log: f64,
    /// Number of recurrence steps to plot.
    pub recurrence_n: usize,
}

impl Default for Ch1State {
    fn default() -> Self {
        Self {
            log_x: -8.0,
            n_small: 10_000,
            big_log: 16.0,
            recurrence_n: 60,
        }
    }
}

pub fn show(ui: &mut Ui, state: &mut Ch1State, _env: &mut Env) {
    ScrollArea::vertical().show(ui, |ui| {
        ui.heading(t(
            "Chapter 1 — error analysis & floating-point",
            "1. fejezet — hibaszámítás és lebegőpont",
        ));
        ui.label(t(
            "Three live experiments from Hartung §1.1–1.4. Drag the sliders \
            and watch how algebraically equivalent formulas diverge under \
            f64 rounding.",
            "Három élő kísérlet Hartung §1.1–1.4 alapján. Húzd a csúszkákat, \
            és figyeld, hogyan térnek el az algebrailag azonos képletek az \
            f64 kerekítés hatására.",
        ));
        ui.add_space(6.0);
        intuition_callout(ui);
        ui.add_space(8.0);

        machine_epsilon_card(ui);
        ui.add_space(8.0);
        kahan_formula_card(ui);
        ui.add_space(12.0);
        cancellation_experiment(ui, state);
        ui.add_space(12.0);
        summation_experiment(ui, state);
        ui.add_space(12.0);
        unstable_recurrence_experiment(ui, state);
        ui.add_space(14.0);
        try_this_challenges(ui);
        ui.add_space(8.0);
        cross_chapter_link(ui);
    });
}

/// Cross-chapter link — Chapter 1 lives at the foundation. Every later
/// chapter pays this tax: floating point makes mathematically equivalent
/// formulas behave differently. Listing where each pitfall hits later in
/// the book makes the abstract f64 lessons concrete.
fn cross_chapter_link(ui: &mut Ui) {
    let blue = Color32::from_rgb(120, 200, 255);
    let dim = Color32::from_rgb(160, 175, 195);
    egui::CollapsingHeader::new(
        RichText::new(t("Where these errors come back", "Hol térnek vissza ezek a hibák")).strong(),
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
        entry(
            ui,
            t("Ch 3  ·  Gaussian elimination", "3. fej.  ·  Gauss-elimináció"),
            t(
                "The \"4-digit catastrophe\" preset is cancellation from this chapter applied to a single matrix entry: a tiny pivot turns a small subtraction into a huge multiplier, which then wipes meaningful digits when it scales the next row.",
                "A „4 jegyű katasztrófa” példa ennek a fejezetnek a kiejtését alkalmazza egyetlen mátrixelemre: egy aprócska pivot a kis kivonást óriási szorzóvá alakítja, ami aztán a következő sor skálázásakor letörli az értékes jegyeket.",
            ),
        );
        entry(
            ui,
            t("Ch 4  ·  Hilbert matrices", "4. fej.  ·  Hilbert-mátrixok"),
            t(
                "cond∞(H_n) explodes from 2·10¹ to 1·10⁷ as n grows. Same number of f64 bits but most of them are useless after the first few digits.",
                "cond∞(H_n) 2·10¹-ről 1·10⁷-re robban, ahogy n nő. Ugyanannyi f64 bit, de a többségük az első néhány jegy után használhatatlan.",
            ),
        );
        entry(
            ui,
            t("Ch 7  ·  numerical differentiation", "7. fej.  ·  numerikus deriválás"),
            t(
                "Forward-difference error has the V-shape — truncation O(h) plus round-off O(εₘ/h). Identical to the cancellation experiment in this chapter, dressed up with a tangent.",
                "A jobb oldali differencia hibája V-alakú — O(h) képlethiba plusz O(εₘ/h) kerekítés. Ugyanaz, mint az itteni kiejtéses kísérlet, csak érintővel feldíszítve.",
            ),
        );
        entry(
            ui,
            t("Ch 9  ·  least-squares normal equations", "9. fej.  ·  legkisebb négyzetek normálegyenletei"),
            t(
                "Aᵀ·A is a Hilbert-like matrix when m is high. Same conditioning explosion drives the polynomial-overfitting pitfall.",
                "Aᵀ·A Hilbert-szerű mátrix nagy m esetén. Ugyanaz a kondíciórobbanás okozza a polinomos túlillesztés csapdáját.",
            ),
        );
        ui.label(
            RichText::new(t(
                "Lesson: when something \"converges to the wrong answer\" \
                 down the road, it is almost always one of the three \
                 pitfalls in this chapter wearing a costume.",
                "Tanulság: ha valami később „rossz értékhez konvergál”, \
                 az szinte mindig e fejezet három csapdájának egyike \
                 jelmezben.",
            ))
            .small()
            .color(dim),
        );
    });
}

/// Annotated formula card for Kahan compensated summation. Three colours:
/// the running sum (cyan) accumulates as usual; the compensation term `c`
/// (gold) keeps track of the low-order bits that would otherwise be lost
/// in `sum += y`; and `y` (white) is the corrected input. Reading this
/// card after the summation experiment makes the live demo's numbers
/// reverse-engineer into a 4-line algorithm.
fn kahan_formula_card(ui: &mut Ui) {
    let cyan = Color32::from_rgb(120, 200, 255);
    let gold = Color32::from_rgb(255, 220, 100);
    let dim = Color32::from_rgb(200, 215, 230);
    egui::CollapsingHeader::new(
        RichText::new(t(
            "Formula card  ·  Kahan compensated summation",
            "Képletkártya  ·  Kahan-féle kompenzált összegzés",
        )).strong(),
    )
    .default_open(false)
    .show(ui, |ui| {
        ui.label(
            RichText::new(t("for each xᵢ:", "minden xᵢ-re:"))
                .monospace()
                .color(dim),
        );
        ui.indent("kahan_body", |ui| {
            ui.horizontal(|ui| {
                ui.label(RichText::new("y").monospace());
                ui.label(RichText::new("=").monospace().color(dim));
                ui.label(RichText::new("xᵢ").monospace());
                ui.label(RichText::new("−").monospace().color(dim));
                ui.label(RichText::new("c").monospace().color(gold));
                ui.label(
                    RichText::new(t(
                        "       // recover lost low bits",
                        "       // az elveszett alsó bitek visszanyerése",
                    ))
                        .small()
                        .color(dim),
                );
            });
            ui.horizontal(|ui| {
                ui.label(RichText::new("t").monospace());
                ui.label(RichText::new("=").monospace().color(dim));
                ui.label(RichText::new("sum").monospace().color(cyan));
                ui.label(RichText::new("+").monospace().color(dim));
                ui.label(RichText::new("y").monospace());
                ui.label(
                    RichText::new(t(
                        "       // big-magnitude add, rounds",
                        "       // nagy nagyságrendű összeadás, kerekít",
                    ))
                        .small()
                        .color(dim),
                );
            });
            ui.horizontal(|ui| {
                ui.label(RichText::new("c").monospace().color(gold));
                ui.label(RichText::new("=").monospace().color(dim));
                ui.label(RichText::new("(t − sum) − y").monospace());
                ui.label(
                    RichText::new(t(
                        "       // what rounding ate",
                        "       // amit a kerekítés megevett",
                    ))
                        .small()
                        .color(dim),
                );
            });
            ui.horizontal(|ui| {
                ui.label(RichText::new("sum").monospace().color(cyan));
                ui.label(RichText::new("=").monospace().color(dim));
                ui.label(RichText::new("t").monospace());
            });
        });
        ui.label(
            RichText::new(t(
                "Knuth's compensation: `c` always holds the residual that \
                 disappeared in the last `sum += y`. On the next iteration we \
                 subtract it back. Result: total error is independent of n.",
                "Knuth kompenzációja: `c` mindig azt a maradékot tartja, amely \
                 az utolsó `sum += y`-ban eltűnt. A következő lépésben \
                 visszavonjuk. Eredmény: a teljes hiba független n-től.",
            ))
            .small()
            .color(Color32::from_rgb(160, 175, 195)),
        );
    });
}

/// "Try this" challenge cluster for Chapter 1. Three small experiments the
/// user can run by adjusting sliders above; each has a hidden answer.
fn try_this_challenges(ui: &mut Ui) {
    let id_open = ui.make_persistent_id("ch1_try_open");
    let mut open: Option<usize> = ui
        .ctx()
        .data(|d| d.get_temp::<Option<usize>>(id_open))
        .unwrap_or(None);
    egui::Frame::group(ui.style()).show(ui, |ui| {
        ui.label(
            RichText::new(t("Try this", "Próbáld ki"))
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
                let btn = if open == Some(idx) { t("hide answer", "válasz elrejtése") } else { t("answer", "válasz") };
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
            t(
                "Set log₁₀ x = −8 in the cancellation experiment. How many decimal \
                 digits of 1 − cos x are correct in the naive formula? In the \
                 stable one?",
                "Állítsd log₁₀ x = −8-ra a kiejtéses kísérletben. Az 1 − cos x \
                 hány tizedesjegye helyes a naiv képletben? És a stabilban?",
            ),
            t(
                "At x ≈ 1e-8, 1 − cos x ≈ 5e-17 which is below εₘ — naive returns \
                 0 (or a few wrong digits). 2·sin²(x/2) computes 5e-17 to ~15 \
                 correct digits. The difference is the same value, computed two \
                 ways.",
                "x ≈ 1e-8-nál 1 − cos x ≈ 5e-17, ami εₘ alatt van — a naiv 0-t \
                 ad (vagy néhány hibás jegyet). A 2·sin²(x/2) ~15 helyes jegyre \
                 számolja az 5e-17-et. Ugyanaz az érték, kétféleképpen számolva.",
            ),
        );
        item(
            ui,
            1,
            t(
                "In the summation experiment set the big-term magnitude to 1e20 \
                 and the count of small terms to 1e5. Predict the naive sum, the \
                 sorted sum, and the Kahan sum before running.",
                "Az összegzéses kísérletben állítsd a nagy tag nagyságát 1e20-ra, \
                 a kis tagok számát 1e5-re. Jósold meg a naiv, a rendezett és a \
                 Kahan-összeget, mielőtt futtatnád.",
            ),
            t(
                "Naive: exactly 1e20 — every small +1 disappears, since 1e20 + 1 \
                 rounds back to 1e20. Sorted: also 1e20 for the same reason (the \
                 big term still swallows the running total). Kahan: 1e20 + 1e5 — \
                 the running compensation term `c` catches the lost low bits.",
                "Naiv: pontosan 1e20 — minden kis +1 eltűnik, mert 1e20 + 1 \
                 visszakerekül 1e20-ra. Rendezett: szintén 1e20 ugyanezért (a \
                 nagy tag elnyeli a futó összeget). Kahan: 1e20 + 1e5 — a futó \
                 `c` kompenzációs tag elkapja az elveszett alsó biteket.",
            ),
        );
        item(
            ui,
            2,
            t(
                "In the unstable recurrence, push N up to 60 and watch the naive \
                 formula. What does the error look like on a semilog plot? Why?",
                "Az instabil rekurzióban told fel N-et 60-ra, és figyeld a naiv \
                 képletet. Hogy néz ki a hiba féllogaritmikus ábrán? Miért?",
            ),
            t(
                "The error grows geometrically (a straight line on semilog) at \
                 rate ≈ 11 per step, because the recursion 11·xₙ − xₙ₋₁/3 has a \
                 dominant eigenvalue 11 that amplifies any tiny initial error \
                 from finite f64 precision. The other two recurrences avoid the \
                 growing component.",
                "A hiba mértani sorként nő (egyenes a féllog ábrán) ≈ 11-es \
                 lépésenkénti rátával, mert a 11·xₙ − xₙ₋₁/3 rekurzió domináns \
                 sajátértéke 11, ami felerősíti a véges f64 pontosságból eredő \
                 apró kezdeti hibát. A másik két rekurzió elkerüli a növekvő \
                 komponenst.",
            ),
        );
        ui.ctx().data_mut(|d| d.insert_temp(id_open, open));
    });
}

/// "Why this matters" — collapsible plain-English motivation. The whole
/// point of this chapter is that mathematically identical expressions can
/// be numerically catastrophic; the callout primes the user to look for
/// that in every panel below.
fn intuition_callout(ui: &mut Ui) {
    egui::CollapsingHeader::new(
        RichText::new(t("Why this chapter matters", "Miért fontos ez a fejezet"))
            .strong()
            .color(Color32::from_rgb(220, 200, 120)),
    )
    .default_open(true)
    .show(ui, |ui| {
        ui.label(
            RichText::new(t(
                "A computer does not do real arithmetic. It does f64 arithmetic, \
                 which rounds every intermediate result to ~16 decimal digits. \
                 Most of the time you cannot tell the difference. But three \
                 patterns reliably break that illusion:",
                "A számítógép nem valós aritmetikát végez, hanem f64-eset, amely \
                 minden részeredményt ~16 tizedesjegyre kerekít. Legtöbbször nem \
                 veszed észre a különbséget. De három minta megbízhatóan \
                 szétfeszíti ezt az illúziót:",
            ))
            .small(),
        );
        ui.add_space(4.0);
        ui.indent("ch1_intuition_bullets", |ui| {
            ui.label(
                RichText::new(t(
                    "• Cancellation — subtracting two nearly equal numbers wipes out the meaningful digits, leaving only noise.",
                    "• Kiejtés — két majdnem egyenlő szám kivonása letörli az értékes jegyeket, csak a zaj marad.",
                ))
                    .small()
                    .color(Color32::from_rgb(240, 200, 120)),
            );
            ui.label(
                RichText::new(t(
                    "• Summation order — adding tiny numbers into a huge running sum just throws them away; reorder, or use Kahan, and they survive.",
                    "• Összegzési sorrend — apró számokat egy hatalmas futó összeghez adva azok elvesznek; rendezd át, vagy használj Kahant, és megmaradnak.",
                ))
                    .small()
                    .color(Color32::from_rgb(240, 200, 120)),
            );
            ui.label(
                RichText::new(t(
                    "• Unstable recurrence — a tiny initial error can amplify exponentially if the recurrence has a growing component.",
                    "• Instabil rekurzió — egy apró kezdeti hiba exponenciálisan felerősödhet, ha a rekurziónak van növekvő komponense.",
                ))
                    .small()
                    .color(Color32::from_rgb(240, 200, 120)),
            );
        });
        ui.add_space(4.0);
        ui.label(
            RichText::new(t(
                "Each experiment below shows you the same calculation done two \
                 ways: the naive textbook way (which fails) and the stable \
                 reformulation (which works). The difference is never in the \
                 math — only in the order of operations.",
                "Az alábbi kísérletek mindegyike ugyanazt a számítást mutatja két \
                 módon: a naiv tankönyvi úton (ami elromlik) és a stabil \
                 átfogalmazással (ami működik). A különbség sosem a matekban van \
                 — csak a műveletek sorrendjében.",
            ))
            .small()
            .color(Color32::from_rgb(160, 175, 195)),
        );
    });
}

// ──────────────────────────────────────────────────────────────────────────
// Machine epsilon
// ──────────────────────────────────────────────────────────────────────────

fn machine_epsilon_card(ui: &mut Ui) {
    let eps = num_error::machine_epsilon();
    egui::Frame::group(ui.style()).show(ui, |ui| {
        ui.label(RichText::new(t("Machine epsilon", "Gépi epszilon")).strong());
        ui.horizontal_wrapped(|ui| {
            ui.label(
                RichText::new(format!("εₘ = {eps:e}"))
                    .monospace()
                    .color(Color32::from_rgb(120, 200, 255)),
            );
            let bits = -eps.log2() as i32;
            let digits = -eps.log10();
            let detail = if i18n::lang() == Lang::Hu {
                format!("  =  2^-{bits}  =  ~{digits:.0} tizedesjegyi pontosság")
            } else {
                format!("  =  2^-{bits}  =  ~{digits:.0} decimal digits of precision")
            };
            ui.label(
                RichText::new(detail)
                    .monospace()
                    .color(Color32::from_rgb(180, 195, 210)),
            );
        });
        ui.label(t(
            "Hartung Theorem 1.10: for base b with t mantissa bits, εₘ = b^(1−t). \
            For f64: t = 53 → εₘ = 2^−52.",
            "Hartung 1.10. tétel: b alapnál t mantisszabittel εₘ = b^(1−t). \
            f64-re: t = 53 → εₘ = 2^−52.",
        ));
    });
}

// ──────────────────────────────────────────────────────────────────────────
// Experiment 1: catastrophic cancellation
// ──────────────────────────────────────────────────────────────────────────

fn cancellation_experiment(ui: &mut Ui, state: &mut Ch1State) {
    egui::Frame::group(ui.style()).show(ui, |ui| {
        ui.label(RichText::new(t(
            "1. Cancellation:  1 − cos(x)  vs  2·sin²(x/2)",
            "1. Kiejtés:  1 − cos(x)  vs  2·sin²(x/2)",
        )).strong());
        ui.label(t(
            "For small x, cos(x) → 1, so 1 − cos(x) subtracts two near-equal numbers. \
            The algebraic identity 2·sin²(x/2) avoids the subtraction.",
            "Kis x-re cos(x) → 1, így az 1 − cos(x) két majdnem egyenlő számot von ki. \
            A 2·sin²(x/2) algebrai azonosság elkerüli a kivonást.",
        ));

        ui.horizontal(|ui| {
            ui.label("log₁₀(x):");
            ui.add(
                egui::Slider::new(&mut state.log_x, -15.0..=0.0)
                    .step_by(0.25)
                    .text(t(
                        "(more negative ⇒ smaller x ⇒ worse cancellation)",
                        "(negatívabb ⇒ kisebb x ⇒ rosszabb kiejtés)",
                    )),
            );
        });

        let x = 10f64.powf(state.log_x);
        let naive = 1.0 - x.cos();
        let stable = num_error::one_minus_cos_stable(x);
        // The "true" reference: use the Taylor expansion to high precision.
        let exact = 0.5 * x * x - x.powi(4) / 24.0 + x.powi(6) / 720.0;
        let naive_err = (naive - exact).abs() / exact.abs().max(f64::MIN_POSITIVE);
        let stable_err = (stable - exact).abs() / exact.abs().max(f64::MIN_POSITIVE);

        ui.add_space(4.0);
        egui::Grid::new("cancel_table")
            .num_columns(2)
            .spacing([12.0, 4.0])
            .show(ui, |ui| {
                ui.label(RichText::new("x").monospace());
                ui.label(RichText::new(format!("{x:e}")).monospace());
                ui.end_row();
                ui.label(RichText::new(t("naive  1 − cos(x)", "naiv  1 − cos(x)")).monospace());
                ui.label(RichText::new(format!("{naive:e}")).monospace());
                ui.end_row();
                ui.label(RichText::new(t("stable 2·sin²(x/2)", "stabil 2·sin²(x/2)")).monospace());
                ui.label(RichText::new(format!("{stable:e}")).monospace());
                ui.end_row();
                ui.label(RichText::new(t("exact (Taylor)", "pontos (Taylor)")).monospace());
                ui.label(RichText::new(format!("{exact:e}")).monospace());
                ui.end_row();
                ui.label(
                    RichText::new(t("naive rel-err", "naiv rel. hiba"))
                        .monospace()
                        .color(Color32::from_rgb(240, 130, 130)),
                );
                ui.label(
                    RichText::new(format!("{naive_err:e}"))
                        .monospace()
                        .color(Color32::from_rgb(240, 130, 130)),
                );
                ui.end_row();
                ui.label(
                    RichText::new(t("stable rel-err", "stabil rel. hiba"))
                        .monospace()
                        .color(Color32::from_rgb(120, 220, 140)),
                );
                ui.label(
                    RichText::new(format!("{stable_err:e}"))
                        .monospace()
                        .color(Color32::from_rgb(120, 220, 140)),
                );
                ui.end_row();
            });

        // Plot relative error of both formulas across a range of x.
        ui.add_space(6.0);
        Plot::new("cancel_plot")
            .height(200.0)
            .legend(Legend::default())
            .x_axis_label("log₁₀(x)")
            .y_axis_label(t("log₁₀(relative error)", "log₁₀(relatív hiba)"))
            .show(ui, |plot_ui| {
                let mut naive_pts = Vec::new();
                let mut stable_pts = Vec::new();
                let mut lx = -15.0;
                while lx <= 0.0 {
                    let x = 10f64.powf(lx);
                    let true_v = 0.5 * x * x - x.powi(4) / 24.0;
                    let naive = 1.0 - x.cos();
                    let stable = num_error::one_minus_cos_stable(x);
                    let n_err = ((naive - true_v).abs() / true_v.abs()).max(1e-20);
                    let s_err = ((stable - true_v).abs() / true_v.abs()).max(1e-20);
                    naive_pts.push([lx, n_err.log10()]);
                    stable_pts.push([lx, s_err.log10()]);
                    lx += 0.1;
                }
                plot_ui.line(
                    Line::new(PlotPoints::from(naive_pts))
                        .color(Color32::from_rgb(240, 130, 130))
                        .name(t("naive  1 − cos(x)", "naiv  1 − cos(x)")),
                );
                plot_ui.line(
                    Line::new(PlotPoints::from(stable_pts))
                        .color(Color32::from_rgb(120, 220, 140))
                        .name(t("stable 2·sin²(x/2)", "stabil 2·sin²(x/2)")),
                );
                // Vertical marker at current slider value.
                plot_ui.points(
                    Points::new(PlotPoints::from(vec![[state.log_x, -10.0]]))
                        .shape(MarkerShape::Diamond)
                        .radius(6.0)
                        .color(Color32::from_rgb(255, 220, 100))
                        .name(t("current x", "aktuális x")),
                );
            });
    });
}

// ──────────────────────────────────────────────────────────────────────────
// Experiment 2: summation order
// ──────────────────────────────────────────────────────────────────────────

fn summation_experiment(ui: &mut Ui, state: &mut Ch1State) {
    egui::Frame::group(ui.style()).show(ui, |ui| {
        ui.label(RichText::new(t(
            "2. Summation order (Hartung Example 1.24)",
            "2. Összegzési sorrend (Hartung 1.24. példa)",
        )).strong());
        ui.label(t(
            "Float addition is not commutative numerically. Adding a huge value first, \
            then many tiny ones, loses every tiny contribution to rounding. Sorting \
            ascending helps; Kahan compensated summation eliminates the loss.",
            "A lebegőpontos összeadás numerikusan nem kommutatív. Ha előbb egy óriási \
            értéket adunk hozzá, majd sok aprót, minden apró járulék elvész a \
            kerekítésben. A növekvő rendezés segít; a Kahan-kompenzált összegzés \
            teljesen kiküszöböli a veszteséget.",
        ));

        ui.horizontal(|ui| {
            ui.label(t("big term 10^", "nagy tag 10^"));
            ui.add(egui::Slider::new(&mut state.big_log, 0.0..=18.0).step_by(0.5));
            ui.separator();
            ui.label(t("number of small (=1.0) terms:", "kis (=1.0) tagok száma:"));
            ui.add(egui::Slider::new(&mut state.n_small, 10..=200_000).logarithmic(true));
        });

        let big = 10f64.powf(state.big_log);
        // Sequence: [big, 1, 1, ..., 1]
        let n = state.n_small;
        let mut v = Vec::with_capacity(n + 1);
        v.push(big);
        v.extend(std::iter::repeat(1.0).take(n));
        let exact = big + n as f64;

        let s_naive = num_error::naive_sum(&v);
        let s_sorted = num_error::sorted_sum(&v);
        let s_kahan = num_error::kahan_sum(&v);

        let err = |got: f64| -> f64 { ((got - exact) / exact).abs().max(1e-20) };
        let e_naive = err(s_naive);
        let e_sorted = err(s_sorted);
        let e_kahan = err(s_kahan);

        egui::Grid::new("sum_table")
            .num_columns(3)
            .spacing([12.0, 4.0])
            .show(ui, |ui| {
                ui.label(RichText::new(t("method", "módszer")).monospace().strong());
                ui.label(RichText::new(t("sum", "összeg")).monospace().strong());
                ui.label(RichText::new(t("relative error", "relatív hiba")).monospace().strong());
                ui.end_row();
                row(ui, t("naive (left → right)", "naiv (balról → jobbra)"), s_naive, e_naive, RED);
                row(ui, t("sorted ascending", "növekvő rendezés"), s_sorted, e_sorted, AMBER);
                row(ui, t("Kahan compensated", "Kahan-kompenzált"), s_kahan, e_kahan, GREEN);
            });

        // Bar chart of relative errors (log scale).
        ui.add_space(6.0);
        Plot::new("sum_bars")
            .height(180.0)
            .y_axis_label(t("log₁₀(relative error)", "log₁₀(relatív hiba)"))
            .show_x(false)
            .show(ui, |plot_ui| {
                use egui_plot::Bar;
                let bars = vec![
                    Bar::new(0.0, e_naive.log10()).name("naive").fill(RED),
                    Bar::new(1.0, e_sorted.log10()).name("sorted").fill(AMBER),
                    Bar::new(2.0, e_kahan.log10()).name("kahan").fill(GREEN),
                ];
                plot_ui.bar_chart(egui_plot::BarChart::new(bars).width(0.7));
            });
        ui.label(
            RichText::new(t(
                "← naive          sorted          kahan →",
                "← naiv          rendezett          kahan →",
            ))
                .monospace()
                .size(11.0)
                .color(Color32::from_rgb(160, 175, 195)),
        );
    });
}

fn row(ui: &mut Ui, label: &str, value: f64, err: f64, color: Color32) {
    ui.label(RichText::new(label).monospace().color(color));
    ui.label(RichText::new(format!("{value:.6e}")).monospace());
    ui.label(
        RichText::new(format!("{err:.3e}"))
            .monospace()
            .color(color),
    );
    ui.end_row();
}

// ──────────────────────────────────────────────────────────────────────────
// Experiment 3: unstable recurrence
// ──────────────────────────────────────────────────────────────────────────

fn unstable_recurrence_experiment(ui: &mut Ui, state: &mut Ch1State) {
    egui::Frame::group(ui.style()).show(ui, |ui| {
        ui.label(RichText::new(t(
            "3. Unstable recurrence (Hartung Example 1.3)",
            "3. Instabil rekurzió (Hartung 1.3. példa)",
        )).strong());
        ui.label(t(
            "Three algebraically equivalent recurrences for 1/3ⁿ:  \n  \
            • xₙ = (1/3)·xₙ₋₁   — stable  \n  \
            • yₙ = 2·yₙ₋₁ − (5/9)·yₙ₋₂   — moderate  \n  \
            • zₙ = (13/3)·zₙ₋₁ − (4/3)·zₙ₋₂   — wildly unstable  \n\
            Same algebra, very different rounding-error amplification.",
            "Három algebrailag azonos rekurzió 1/3ⁿ-re:  \n  \
            • xₙ = (1/3)·xₙ₋₁   — stabil  \n  \
            • yₙ = 2·yₙ₋₁ − (5/9)·yₙ₋₂   — mérsékelt  \n  \
            • zₙ = (13/3)·zₙ₋₁ − (4/3)·zₙ₋₂   — vadul instabil  \n\
            Ugyanaz az algebra, nagyon eltérő kerekítési hiba felerősödés.",
        ));

        ui.horizontal(|ui| {
            ui.label(t("steps n:", "lépések n:"));
            ui.add(egui::Slider::new(&mut state.recurrence_n, 5..=120));
        });

        let n_max = state.recurrence_n;
        let mut x_pts = Vec::new();
        let mut y_pts = Vec::new();
        let mut z_pts = Vec::new();

        let mut x_prev = 1.0_f64;
        let mut y_prev2 = 1.0_f64;
        let mut y_prev = 1.0 / 3.0;
        let mut z_prev2 = 1.0_f64;
        let mut z_prev = 1.0 / 3.0;

        // Plot |seq - 1/3^n| (clamped to 1e-20) on log scale.
        for n in 0..=n_max {
            let exact = (1.0_f64 / 3.0).powi(n as i32);
            let (xn, yn, zn) = if n == 0 {
                (1.0, 1.0, 1.0)
            } else if n == 1 {
                (1.0 / 3.0, 1.0 / 3.0, 1.0 / 3.0)
            } else {
                let xn = x_prev / 3.0;
                let yn = 2.0 * y_prev - (5.0 / 9.0) * y_prev2;
                let zn = (13.0 / 3.0) * z_prev - (4.0 / 3.0) * z_prev2;
                x_prev = xn;
                y_prev2 = y_prev;
                y_prev = yn;
                z_prev2 = z_prev;
                z_prev = zn;
                (xn, yn, zn)
            };
            x_pts.push([n as f64, ((xn - exact).abs()).max(1e-20).log10()]);
            y_pts.push([n as f64, ((yn - exact).abs()).max(1e-20).log10()]);
            z_pts.push([n as f64, ((zn - exact).abs()).max(1e-20).log10()]);
        }

        Plot::new("recurrence_plot")
            .height(220.0)
            .legend(Legend::default())
            .x_axis_label("n")
            .y_axis_label(t("log₁₀ |seq − 1/3ⁿ|", "log₁₀ |sorozat − 1/3ⁿ|"))
            .show(ui, |plot_ui| {
                plot_ui.line(
                    Line::new(PlotPoints::from(x_pts))
                        .color(GREEN)
                        .name(t("xₙ (stable)", "xₙ (stabil)")),
                );
                plot_ui.line(
                    Line::new(PlotPoints::from(y_pts))
                        .color(AMBER)
                        .name(t("yₙ (moderate)", "yₙ (mérsékelt)")),
                );
                plot_ui.line(
                    Line::new(PlotPoints::from(z_pts))
                        .color(RED)
                        .name(t("zₙ (unstable)", "zₙ (instabil)")),
                );
            });
    });
}

// ──────────────────────────────────────────────────────────────────────────
// Palette
// ──────────────────────────────────────────────────────────────────────────

const RED: Color32 = Color32::from_rgb(240, 130, 130);
const AMBER: Color32 = Color32::from_rgb(240, 200, 120);
const GREEN: Color32 = Color32::from_rgb(120, 220, 140);
