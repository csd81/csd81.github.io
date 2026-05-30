//! Chapter 10 — initial-value problems for ordinary differential equations.
//!
//! Solve `y' = f(t, y), y(t₀) = y₀` with Euler, Heun (RK2), and RK4. The
//! visualisation has three stacked panels:
//!
//! 1. *Slope field + trajectories.* A grid of unit-length arrows showing the
//!    direction of the ODE everywhere on the (t, y) plane, with the chosen
//!    methods' integral curves painted on top in distinct colours. Each step
//!    is marked with a fat circle so it is visually obvious where Euler
//!    "stomps" off the true curve while RK4 hugs it.
//! 2. *Error vs h* on a log–log axis. Sweep `h` over a decade and a half;
//!    the slope of each line is the empirical convergence order. The
//!    annotation "≈ 1.00 / 2.00 / 4.00" makes the theorem visible as a
//!    picture.
//! 3. *Step table.* The first ~12 rows of `(tᵢ, yᵢ, y_true, |error|)` for
//!    each enabled method so the user can read off the textbook columns.
//!
//! Five presets cover the canonical didactic ODEs: exponential growth,
//! stiff decay, logistic, oscillating, Gaussian decay. All have closed-form
//! solutions so the error panel is meaningful.

use egui::{Color32, RichText, ScrollArea, Stroke, Ui};
use egui_plot::{Arrows, Legend, Line, MarkerShape, Plot, PlotPoints, Points};

use engine::Env;
use numerics::ode::{integrate, Method, OdeError};

use crate::i18n::{self, t, Lang};

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum Preset {
    Exp,
    Stiff,
    Logistic,
    Oscillating,
    Gaussian,
}

impl Preset {
    const ALL: &'static [Self] = &[
        Self::Exp,
        Self::Stiff,
        Self::Logistic,
        Self::Oscillating,
        Self::Gaussian,
    ];

    fn label(self) -> &'static str {
        match self {
            Self::Exp => t("y' = y                    (exponential)", "y' = y                    (exponenciális)"),
            Self::Stiff => t("y' = -50·y               (stiff)", "y' = -50·y               (merev)"),
            Self::Logistic => t("y' = y·(1 - y)         (logistic)", "y' = y·(1 - y)         (logisztikus)"),
            Self::Oscillating => t("y' = sin(t)             (oscillating)", "y' = sin(t)             (oszcilláló)"),
            Self::Gaussian => t("y' = -2·t·y             (Gaussian decay)", "y' = -2·t·y             (Gauss-lecsengés)"),
        }
    }

    /// The right-hand side `f(t, y)`.
    fn f(self, t: f64, y: f64) -> f64 {
        match self {
            Self::Exp => y,
            Self::Stiff => -50.0 * y,
            Self::Logistic => y * (1.0 - y),
            Self::Oscillating => t.sin(),
            Self::Gaussian => -2.0 * t * y,
        }
    }

    /// Closed-form solution for the canonical initial condition.
    fn exact(self, t: f64, t0: f64, y0: f64) -> f64 {
        match self {
            Self::Exp => y0 * (t - t0).exp(),
            Self::Stiff => y0 * (-50.0 * (t - t0)).exp(),
            // y(t) = 1 / (1 + ((1 - y0)/y0)·e^{-(t - t0)})
            Self::Logistic => {
                if y0 <= 0.0 || y0 >= 1.0 {
                    f64::NAN
                } else {
                    let c = (1.0 - y0) / y0;
                    1.0 / (1.0 + c * (-(t - t0)).exp())
                }
            }
            // y(t) = y0 + cos(t0) - cos(t)
            Self::Oscillating => y0 + t0.cos() - t.cos(),
            // y(t) = y0 · e^{t0² - t²}
            Self::Gaussian => y0 * (t0 * t0 - t * t).exp(),
        }
    }

    fn default_ic(self) -> (f64, f64, f64, f64) {
        match self {
            Self::Exp => (0.0, 1.0, 1.0, 0.1),
            Self::Stiff => (0.0, 1.0, 0.2, 0.05),
            Self::Logistic => (0.0, 0.1, 8.0, 0.25),
            Self::Oscillating => (0.0, 0.0, 6.283185307179586, 0.2),
            Self::Gaussian => (-1.5, 0.105399, 1.5, 0.15),
        }
    }
}

#[derive(Debug, Clone, Copy)]
struct EnabledMethods {
    euler: bool,
    heun: bool,
    rk4: bool,
}

impl Default for EnabledMethods {
    fn default() -> Self {
        Self {
            euler: true,
            heun: true,
            rk4: true,
        }
    }
}

impl EnabledMethods {
    fn iter(&self) -> impl Iterator<Item = Method> {
        let mut v = Vec::with_capacity(3);
        if self.euler {
            v.push(Method::Euler);
        }
        if self.heun {
            v.push(Method::Heun);
        }
        if self.rk4 {
            v.push(Method::Rk4);
        }
        v.into_iter()
    }
}

pub struct Ch10OdeState {
    preset: Preset,
    methods: EnabledMethods,
    show_slope_field: bool,
    show_exact: bool,
    t0: f64,
    y0: f64,
    tf: f64,
    h: f64,
    /// Animation: when true, h shrinks geometrically each second so the
    /// user can watch the Euler trajectory snap onto the analytical curve
    /// without dragging the slider.
    animating_h: bool,
    last_anim_step: f64,
}

impl Default for Ch10OdeState {
    fn default() -> Self {
        let (t0, y0, tf, h) = Preset::Exp.default_ic();
        Self {
            preset: Preset::Exp,
            methods: EnabledMethods::default(),
            show_slope_field: true,
            show_exact: true,
            t0,
            y0,
            tf,
            h,
            animating_h: false,
            last_anim_step: 0.0,
        }
    }
}

pub fn show(ui: &mut Ui, state: &mut Ch10OdeState, _env: &mut Env) {
    if state.animating_h {
        let now = ui.ctx().input(|i| i.time);
        if state.last_anim_step == 0.0 {
            state.last_anim_step = now;
        }
        if now - state.last_anim_step >= 1.0 {
            state.h *= 0.7;
            if state.h < 0.002 {
                state.h = 0.5;
            }
            state.last_anim_step = now;
        }
        ui.ctx().request_repaint_after(std::time::Duration::from_millis(80));
    }

    egui::SidePanel::left("ch10_controls")
        .resizable(true)
        .default_width(360.0)
        .show_inside(ui, |ui| controls(ui, state));

    egui::CentralPanel::default().show_inside(ui, |ui| {
        ScrollArea::vertical().show(ui, |ui| {
            ui.heading(crate::i18n::t("Chapter 10 — initial-value problems", "10. fejezet — kezdetiérték-feladatok"));
            ui.label(t(
                "Solve y' = f(t, y), y(t₀) = y₀ with three classic explicit \
                 methods. The slope field shows what the ODE is doing \
                 everywhere; the coloured curves are the numerical \
                 approximations stepped through it. Watch how Euler drifts \
                 off the true solution (dashed black) while RK4 stays tight \
                 — and confirm the convergence orders in the log–log error \
                 panel below.",
                "Oldd meg az y' = f(t, y), y(t₀) = y₀ feladatot három klasszikus \
                 explicit módszerrel. Az iránymező mindenhol mutatja, mit csinál \
                 az ODE; a színes görbék a rajta átléptetett numerikus közelítések. \
                 Figyeld, ahogy az Euler elsodródik a valódi megoldástól (szaggatott \
                 fekete), míg az RK4 szorosan követi — és igazold a konvergencia \
                 rendjeit az alábbi log–log hibapanelen.",
            ));
            ui.add_space(8.0);
            main_view(ui, state);
        });
    });
}

fn controls(ui: &mut Ui, state: &mut Ch10OdeState) {
    ui.add_space(6.0);
    ui.label(RichText::new(t("Equation", "Egyenlet")).strong());
    let prev_preset = state.preset;
    for &p in Preset::ALL {
        ui.selectable_value(&mut state.preset, p, p.label());
    }
    if state.preset != prev_preset {
        let (t0, y0, tf, h) = state.preset.default_ic();
        state.t0 = t0;
        state.y0 = y0;
        state.tf = tf;
        state.h = h;
    }

    ui.add_space(10.0);
    ui.separator();
    ui.label(RichText::new(t("Methods", "Módszerek")).strong());
    ui.checkbox(&mut state.methods.euler, method_label_colored(Method::Euler));
    ui.checkbox(&mut state.methods.heun, method_label_colored(Method::Heun));
    ui.checkbox(&mut state.methods.rk4, method_label_colored(Method::Rk4));

    ui.add_space(10.0);
    ui.separator();
    ui.label(RichText::new(t("Initial value problem", "Kezdetiérték-feladat")).strong());
    egui::Grid::new("ch10_ic")
        .num_columns(2)
        .spacing([10.0, 4.0])
        .show(ui, |ui| {
            ui.label(RichText::new("t₀").monospace());
            ui.add(egui::DragValue::new(&mut state.t0).speed(0.05));
            ui.end_row();
            ui.label(RichText::new("y₀").monospace());
            ui.add(egui::DragValue::new(&mut state.y0).speed(0.05));
            ui.end_row();
            ui.label(RichText::new("t_f").monospace());
            ui.add(egui::DragValue::new(&mut state.tf).speed(0.05));
            ui.end_row();
            ui.label(RichText::new("h").monospace());
            ui.add(
                egui::DragValue::new(&mut state.h)
                    .speed(0.005)
                    .range(0.0005..=1.0),
            );
            ui.end_row();
        });

    // Sanity: keep tf > t0.
    if state.tf <= state.t0 {
        state.tf = state.t0 + state.h.max(0.1);
    }

    ui.add_space(10.0);
    ui.separator();
    ui.label(RichText::new(t("Display", "Megjelenítés")).strong());
    ui.checkbox(&mut state.show_slope_field, t("Slope field arrows", "Iránymező nyilak"));
    ui.checkbox(&mut state.show_exact, t("Exact solution (dashed)", "Pontos megoldás (szaggatott)"));

    ui.add_space(6.0);
    ui.horizontal(|ui| {
        let label = if state.animating_h {
            t("⏸  Pause h-shrink", "⏸  h-csökkentés szünet")
        } else {
            t("▶  Animate h → 0", "▶  Animáció h → 0")
        };
        if ui.button(label).clicked() {
            state.animating_h = !state.animating_h;
            state.last_anim_step = ui.ctx().input(|i| i.time);
            if state.animating_h && state.h < 0.05 {
                state.h = 0.5;
            }
        }
    });
    ui.label(
        RichText::new(t(
            "Hit Play to watch h shrink geometrically; the trajectories \
             snap onto the dashed analytical curve in real time.",
            "Nyomd meg az Indítást, hogy lásd h mértani csökkenését; a pályák \
             valós időben rásimulnak a szaggatott analitikus görbére.",
        ))
        .small()
        .color(Color32::from_rgb(160, 175, 195)),
    );

    ui.add_space(10.0);
    ui.separator();
    ui.label(RichText::new(t("Hartung presets", "Hartung-példák")).strong());
    if ui.small_button(t("Ex 10.1   y' = y, y(0)=1, h=0.1", "10.1. pl.   y' = y, y(0)=1, h=0.1")).clicked() {
        state.preset = Preset::Exp;
        state.t0 = 0.0;
        state.y0 = 1.0;
        state.tf = 1.0;
        state.h = 0.1;
        state.methods = EnabledMethods { euler: true, heun: false, rk4: false };
    }
    if ui.small_button(t("Ex 10.2   compare Euler vs RK4", "10.2. pl.   Euler vs RK4")).clicked() {
        state.preset = Preset::Exp;
        state.t0 = 0.0;
        state.y0 = 1.0;
        state.tf = 1.0;
        state.h = 0.2;
        state.methods = EnabledMethods { euler: true, heun: false, rk4: true };
    }
    if ui.small_button(t("Ex 10.3   RK4 long-time", "10.3. pl.   RK4 hosszú időn")).clicked() {
        state.preset = Preset::Exp;
        state.t0 = 0.0;
        state.y0 = 1.0;
        state.tf = 4.0;
        state.h = 0.1;
        state.methods = EnabledMethods { euler: false, heun: true, rk4: true };
    }
    if ui.small_button(t("Stiff demo  (Euler blows up)", "Merev demó  (az Euler felrobban)")).clicked() {
        state.preset = Preset::Stiff;
        state.t0 = 0.0;
        state.y0 = 1.0;
        state.tf = 0.2;
        state.h = 0.05;
        state.methods = EnabledMethods { euler: true, heun: false, rk4: true };
    }

    ui.add_space(10.0);
    ui.separator();
    ui.label(RichText::new(t("Tip", "Tipp")).strong());
    ui.label(
        RichText::new(t(
            "Drag h smaller and watch the Euler curve snap toward the dashed \
             exact solution. On the stiff preset, leave h at 0.05 — Euler \
             explodes (|y| → ∞) because the step is larger than the stability \
             radius 2/50 = 0.04. RK4 survives, just barely.",
            "Húzd h-t kisebbre, és figyeld, ahogy az Euler-görbe a szaggatott \
             pontos megoldáshoz simul. A merev példán hagyd h-t 0,05-ön — az \
             Euler felrobban (|y| → ∞), mert a lépés nagyobb a 2/50 = 0,04 \
             stabilitási sugárnál. Az RK4 épphogy túléli.",
        ))
        .small()
        .color(Color32::from_rgb(160, 175, 195)),
    );
}

fn main_view(ui: &mut Ui, state: &Ch10OdeState) {
    // Run all enabled methods at the user step size h.
    let runs: Vec<(Method, Result<Vec<(f64, f64)>, OdeError>)> = state
        .methods
        .iter()
        .map(|m| {
            let preset = state.preset;
            let traj = integrate(
                m,
                move |t, y| preset.f(t, y),
                state.t0,
                state.y0,
                state.tf,
                state.h,
            );
            (m, traj)
        })
        .collect();

    // Endpoint banner.
    egui::Frame::group(ui.style()).show(ui, |ui| {
        ui.label(
            RichText::new({
                let (lbl, t0, y0, tf, h) = (state.preset.label(), state.t0, state.y0, state.tf, state.h);
                let word = t("Preset", "Példa");
                format!("{word}: {lbl}    t₀ = {t0:.3}, y₀ = {y0:.3}, t_f = {tf:.3}, h = {h:.4}")
            })
            .monospace()
            .color(Color32::from_rgb(180, 200, 220)),
        );
        let exact_end = state.preset.exact(state.tf, state.t0, state.y0);
        ui.label(
            RichText::new(format!("y_exact(t_f) = {:+.10}", exact_end))
                .monospace()
                .color(Color32::from_rgb(220, 220, 180)),
        );
        for (m, r) in &runs {
            match r {
                Ok(traj) => {
                    let y_end = traj.last().map(|p| p.1).unwrap_or(f64::NAN);
                    let err = (y_end - exact_end).abs();
                    ui.label(
                        RichText::new(format!(
                            "{:14} y(t_f) = {:+.10}   |err| = {:.3e}   steps = {}",
                            m.name(),
                            y_end,
                            err,
                            traj.len() - 1
                        ))
                        .monospace()
                        .color(method_color(*m)),
                    );
                }
                Err(e) => {
                    ui.colored_label(
                        Color32::from_rgb(240, 130, 130),
                        format!("{:14} {}", m.name(), e),
                    );
                }
            }
        }
    });

    // ── Trajectory + slope field panel ─────────────────────────────────
    ui.add_space(6.0);
    ui.label(RichText::new(t("Slope field + numerical trajectories", "Iránymező + numerikus pályák")).strong());
    trajectory_plot(ui, state, &runs);

    // ── Error vs h log-log panel ───────────────────────────────────────
    ui.add_space(10.0);
    ui.label(RichText::new(t("Error vs step size  (log–log convergence)", "Hiba a lépésköz függvényében  (log–log konvergencia)")).strong());
    error_vs_h_plot(ui, state);

    // ── Per-method tables ──────────────────────────────────────────────
    ui.add_space(10.0);
    ui.label(RichText::new(t("Step table  (first 12 nodes per method)", "Lépéstábla  (az első 12 csomópont módszerenként)")).strong());
    for (m, r) in &runs {
        if let Ok(traj) = r {
            method_table(ui, state, *m, traj);
        }
    }

    // ── Worked book example (Hartung Ex 10.1) ──────────────────────────
    worked_example_ex_10_1(ui, state);
    // ── Cross-chapter link ─────────────────────────────────────────────
    cross_chapter_link(ui);
}

/// Cross-chapter link — wires Chapter 10 into the rest of the book.
/// Surfaces where the methods come from (Taylor / quadrature / Newton's
/// method) and where they go next (implicit methods, BVPs, PDEs).
fn cross_chapter_link(ui: &mut Ui) {
    let blue = Color32::from_rgb(120, 200, 255);
    let dim = Color32::from_rgb(160, 175, 195);
    ui.add_space(10.0);
    egui::CollapsingHeader::new(
        RichText::new(t("Under the hood — what this reuses, what it enables", "A motorháztető alatt — mit használ újra, mit tesz lehetővé")).strong(),
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
            t("Chapter 1  ·  Taylor expansion", "1. fejezet  ·  Taylor-sorfejtés"),
            t("Every explicit ODE method here is a finite Taylor expansion of \
             y(t+h) around t, truncated and matched to the derivative \
             values f(t, y). Euler keeps the linear term, Heun matches \
             two terms (O(h³) local), RK4 matches four (O(h⁵) local). The \
             whole field is \"how do we sample f cleverly enough to imply \
             higher-order Taylor coefficients we don't actually compute?\"",
             "Minden itteni explicit ODE-módszer az y(t+h) véges Taylor-sorfejtése \
             t körül, csonkolva és az f(t, y) deriváltértékekhez illesztve. Az \
             Euler a lineáris tagot tartja meg, a Heun két tagot illeszt (O(h³) \
             lokális), az RK4 négyet (O(h⁵) lokális). Az egész terület arról szól: \
             „hogyan mintázzuk f-et elég ügyesen, hogy olyan magasabb rendű \
             Taylor-együtthatókat is kifejezzünk, amelyeket nem is számolunk ki?”"),
        );
        entry(
            ui,
            t("Chapter 7  ·  numerical integration", "7. fejezet  ·  numerikus integrálás"),
            t("Heun's method is exactly the composite trapezoid rule applied \
             to ∫f(t, y(t)) dt under the assumption y(t+h) ≈ y + h·f \
             (predictor-corrector). RK4's weights (1, 2, 2, 1)/6 are \
             Simpson's rule weights. The patterns from Ch7 reappear here \
             with a different cover story.",
             "A Heun-módszer pontosan az összetett trapézszabály a ∫f(t, y(t)) dt-re, \
             azzal a feltevéssel, hogy y(t+h) ≈ y + h·f (prediktor-korrektor). Az \
             RK4 (1, 2, 2, 1)/6 súlyai a Simpson-szabály súlyai. A 7. fejezet \
             mintái itt más történettel térnek vissza."),
        );
        entry(
            ui,
            t("Chapter 2  ·  Newton's method  (for the methods we did NOT implement)", "2. fejezet  ·  Newton-módszer  (a NEM implementált módszerekhez)"),
            t("Implicit methods (backward Euler, trapezoidal rule, Gauss-Radau \
             RK) involve solving y_{n+1} = y_n + h·f(t_{n+1}, y_{n+1}) for \
             y_{n+1}, which is a nonlinear root-finding problem in each \
             step. Most stiff-ODE solvers run Chapter 2's Newton at every \
             step. The \"Stiff demo\" preset is exactly the case where \
             explicit methods fail and an implicit one earns its keep.",
             "Az implicit módszerek (visszafelé Euler, trapézszabály, Gauss–Radau \
             RK) az y_{n+1} = y_n + h·f(t_{n+1}, y_{n+1}) megoldását igénylik \
             y_{n+1}-re, ami minden lépésben nemlineáris gyökkeresési feladat. A \
             merev ODE-megoldók többsége a 2. fejezet Newtonját futtatja minden \
             lépésben. A „Merev demó” példa pontosan az az eset, ahol az explicit \
             módszerek elbuknak, és egy implicit megéri a fáradságot."),
        );
        entry(
            ui,
            t("Where this goes next  ·  PDEs", "Hova vezet ez tovább  ·  PDE-k"),
            t("Discretise space with finite differences (Ch 7) and you turn a \
             PDE into a giant system of ODEs (the \"method of lines\"). \
             Then march in time with RK4. PDE solvers are the composition \
             of Chapters 3 (sparse Gauss), 7 (finite differences), and \
             10 (time stepping).",
             "Diszkretizáld a teret véges differenciákkal (7. fej.), és egy PDE-t \
             egy óriási ODE-rendszerré alakítasz (a „vonalak módszere”). Aztán \
             léptess időben RK4-gyel. A PDE-megoldók a 3. (ritka Gauss), 7. (véges \
             differenciák) és 10. (időléptetés) fejezet kompozíciói."),
        );
        ui.label(
            RichText::new(t(
                "If you finished the book here, you've now seen every \
                 ingredient of a real-world physics simulator.",
                "Ha itt fejezed be a könyvet, most már láttad egy valódi fizikai \
                 szimulátor minden összetevőjét.",
            ))
            .small()
            .color(dim),
        );
    });
}

/// Hartung Ex 10.1 — the textbook tabulates Euler's method on
/// y' = y, y(0) = 1, h = 0.1, walked from t = 0 to t = 1. We surface that
/// reference table directly so the user can verify our numerics match the
/// book to the digit. Only shown when the active preset matches.
fn worked_example_ex_10_1(ui: &mut Ui, state: &Ch10OdeState) {
    let matches_ex_10_1 = state.preset == Preset::Exp
        && (state.t0 - 0.0).abs() < 1e-12
        && (state.y0 - 1.0).abs() < 1e-12
        && (state.tf - 1.0).abs() < 1e-12
        && (state.h - 0.1).abs() < 1e-12;
    if !matches_ex_10_1 {
        return;
    }

    // Hartung tabulates these to 6 places; (1.1)^n for n=0..10.
    let book: [(f64, f64, f64); 11] = [
        (0.0, 1.000000, 1.000000),
        (0.1, 1.100000, 1.105171),
        (0.2, 1.210000, 1.221403),
        (0.3, 1.331000, 1.349859),
        (0.4, 1.464100, 1.491825),
        (0.5, 1.610510, 1.648721),
        (0.6, 1.771561, 1.822119),
        (0.7, 1.948717, 2.013753),
        (0.8, 2.143589, 2.225541),
        (0.9, 2.357948, 2.459603),
        (1.0, 2.593742, 2.718282),
    ];

    ui.add_space(10.0);
    egui::CollapsingHeader::new(
        RichText::new(t("Worked book example  ·  Hartung Ex 10.1", "Kidolgozott könyvi példa  ·  Hartung 10.1. pl."))
            .strong()
            .color(Color32::from_rgb(255, 220, 100)),
    )
    .default_open(true)
    .show(ui, |ui| {
        ui.label(
            RichText::new(t(
                "Euler's method on y' = y, y(0) = 1, h = 0.1. The textbook \
                 writes the recursion as yₙ₊₁ = (1 + h)·yₙ = 1.1·yₙ, so \
                 yₙ = (1.1)ⁿ exactly in real arithmetic. Compare the book's \
                 values below to your live solver and the analytical e^t.",
                "Euler-módszer az y' = y, y(0) = 1, h = 0.1 feladaton. A tankönyv a \
                 rekurziót yₙ₊₁ = (1 + h)·yₙ = 1,1·yₙ alakban írja, így yₙ = (1,1)ⁿ \
                 pontosan valós aritmetikában. Vesd össze a könyv alábbi értékeit az \
                 élő megoldóddal és az analitikus e^t-vel.",
            ))
            .small(),
        );
        ui.add_space(4.0);
        egui::Grid::new("ch10_worked")
            .num_columns(4)
            .spacing([16.0, 2.0])
            .show(ui, |ui| {
                ui.label(RichText::new("n").monospace().strong());
                ui.label(RichText::new("tₙ").monospace().strong());
                ui.label(
                    RichText::new(t("yₙ  (Hartung, Euler)", "yₙ  (Hartung, Euler)"))
                        .monospace()
                        .strong()
                        .color(Color32::from_rgb(240, 130, 130)),
                );
                ui.label(
                    RichText::new(t("e^tₙ  (exact)", "e^tₙ  (pontos)"))
                        .monospace()
                        .strong()
                        .color(Color32::from_rgb(220, 220, 220)),
                );
                ui.end_row();
                for (n, &(t, y_euler, y_exact)) in book.iter().enumerate() {
                    ui.label(RichText::new(format!("{n:>2}")).monospace());
                    ui.label(RichText::new(format!("{t:+.2}")).monospace());
                    ui.label(
                        RichText::new(format!("{y_euler:.6}"))
                            .monospace()
                            .color(Color32::from_rgb(240, 130, 130)),
                    );
                    ui.label(
                        RichText::new(format!("{y_exact:.6}"))
                            .monospace()
                            .color(Color32::from_rgb(220, 220, 220)),
                    );
                    ui.end_row();
                }
            });
        ui.add_space(4.0);
        ui.label(
            RichText::new(t(
                "Final Euler error at t = 1:  e − (1.1)¹⁰ ≈ 2.71828 − 2.59374 \
                 = 0.12454.  Halving h to 0.05 roughly halves the error \
                 (Euler is first-order). Try it — drag h to 0.05 and watch \
                 the error in the banner at the top drop by ~½.",
                "Végső Euler-hiba t = 1-nél:  e − (1,1)¹⁰ ≈ 2,71828 − 2,59374 \
                 = 0,12454.  h felezése 0,05-re nagyjából felezi a hibát (az Euler \
                 elsőrendű). Próbáld ki — húzd h-t 0,05-re, és figyeld, ahogy a \
                 felső sávban a hiba ~felére esik.",
            ))
            .small()
            .color(Color32::from_rgb(160, 175, 195)),
        );
    });
}

fn trajectory_plot(
    ui: &mut Ui,
    state: &Ch10OdeState,
    runs: &[(Method, Result<Vec<(f64, f64)>, OdeError>)],
) {
    // Decide a sensible y-axis range from the data.
    let mut y_lo = state.y0;
    let mut y_hi = state.y0;
    for (_, r) in runs {
        if let Ok(traj) = r {
            for &(_, y) in traj {
                if y.is_finite() {
                    if y < y_lo {
                        y_lo = y;
                    }
                    if y > y_hi {
                        y_hi = y;
                    }
                }
            }
        }
    }
    // Add the exact solution to the range too.
    let n_sample = 80;
    let mut exact_pts: Vec<[f64; 2]> = Vec::with_capacity(n_sample + 1);
    for i in 0..=n_sample {
        let t = state.t0 + (state.tf - state.t0) * i as f64 / n_sample as f64;
        let y = state.preset.exact(t, state.t0, state.y0);
        if y.is_finite() {
            if y < y_lo {
                y_lo = y;
            }
            if y > y_hi {
                y_hi = y;
            }
            exact_pts.push([t, y]);
        }
    }
    let pad = ((y_hi - y_lo).abs() * 0.15).max(0.1);
    let y_min = y_lo - pad;
    let y_max = y_hi + pad;

    Plot::new("ch10_traj")
        .height(360.0)
        .legend(Legend::default())
        .x_axis_label("t")
        .y_axis_label("y")
        .show(ui, |plot_ui| {
            // Slope-field quiver.
            if state.show_slope_field {
                let nx = 18;
                let ny = 14;
                let arrow_len_t = (state.tf - state.t0) / nx as f64 * 0.40;
                let mut origins = Vec::with_capacity(nx * ny);
                let mut tips = Vec::with_capacity(nx * ny);
                for i in 0..nx {
                    for j in 0..ny {
                        let t = state.t0
                            + (state.tf - state.t0) * (i as f64 + 0.5) / nx as f64;
                        let y =
                            y_min + (y_max - y_min) * (j as f64 + 0.5) / ny as f64;
                        let slope = state.preset.f(t, y);
                        // Normalise (1, slope) so all arrows have ~constant
                        // visual length in t-units.
                        let norm = (1.0 + slope * slope).sqrt();
                        let dx = arrow_len_t / norm;
                        let dy = arrow_len_t * slope / norm;
                        origins.push([t - dx * 0.5, y - dy * 0.5]);
                        tips.push([t + dx * 0.5, y + dy * 0.5]);
                    }
                }
                plot_ui.arrows(
                    Arrows::new(PlotPoints::from(origins), PlotPoints::from(tips))
                        .color(Color32::from_rgba_unmultiplied(120, 140, 180, 110))
                        .tip_length(4.0)
                        .name(t("slope field", "iránymező")),
                );
            }

            // Exact solution as a (visually) dashed black line — we fake
            // dashing by drawing short segments.
            if state.show_exact && !exact_pts.is_empty() {
                let dash_n = 60;
                let pts_per_dash = (exact_pts.len() / dash_n).max(2);
                let mut i = 0;
                while i + 1 < exact_pts.len() {
                    let end = (i + pts_per_dash / 2).min(exact_pts.len() - 1);
                    let seg: Vec<[f64; 2]> = exact_pts[i..=end].to_vec();
                    plot_ui.line(
                        Line::new(PlotPoints::from(seg))
                            .color(Color32::from_rgb(220, 220, 220))
                            .stroke(Stroke::new(1.5, Color32::from_rgb(220, 220, 220)))
                            .name(t("exact", "pontos")),
                    );
                    i += pts_per_dash;
                }
            }

            // Numerical trajectories + step markers.
            for (m, r) in runs {
                if let Ok(traj) = r {
                    let pts: Vec<[f64; 2]> = traj.iter().map(|&(t, y)| [t, y]).collect();
                    plot_ui.line(
                        Line::new(PlotPoints::from(pts.clone()))
                            .color(method_color(*m))
                            .stroke(Stroke::new(2.0, method_color(*m)))
                            .name(m.name()),
                    );
                    plot_ui.points(
                        Points::new(PlotPoints::from(pts))
                            .shape(MarkerShape::Circle)
                            .radius(4.0)
                            .color(method_color(*m))
                            .name(""),
                    );
                }
            }
        });
}

fn error_vs_h_plot(ui: &mut Ui, state: &Ch10OdeState) {
    // Sweep h. Skip extremely small h on stiff problems to keep it snappy.
    let hs: Vec<f64> = match state.preset {
        Preset::Stiff => vec![0.04, 0.03, 0.02, 0.01, 0.005, 0.0025, 0.00125],
        _ => vec![0.5, 0.25, 0.125, 0.05, 0.025, 0.0125, 0.00625, 0.003125],
    };
    let exact_end = state.preset.exact(state.tf, state.t0, state.y0);

    Plot::new("ch10_err_h")
        .height(260.0)
        .legend(Legend::default())
        .x_axis_label("log₁₀ h")
        .y_axis_label("log₁₀ |error at t_f|")
        .show(ui, |plot_ui| {
            for &m in &[Method::Euler, Method::Heun, Method::Rk4] {
                let enabled = match m {
                    Method::Euler => state.methods.euler,
                    Method::Heun => state.methods.heun,
                    Method::Rk4 => state.methods.rk4,
                    Method::Midpoint => false,
                };
                if !enabled {
                    continue;
                }
                let mut log_h = Vec::new();
                let mut log_e = Vec::new();
                for &h in &hs {
                    let preset = state.preset;
                    let traj = integrate(
                        m,
                        move |t, y| preset.f(t, y),
                        state.t0,
                        state.y0,
                        state.tf,
                        h,
                    );
                    if let Ok(traj) = traj {
                        let y_end = traj.last().map(|p| p.1).unwrap_or(f64::NAN);
                        let err = (y_end - exact_end).abs().max(1e-16);
                        if err.is_finite() {
                            log_h.push(h.log10());
                            log_e.push(err.log10());
                        }
                    }
                }
                if log_h.len() < 2 {
                    continue;
                }
                let pts: Vec<[f64; 2]> = log_h
                    .iter()
                    .zip(log_e.iter())
                    .map(|(&a, &b)| [a, b])
                    .collect();
                // Empirical slope (least squares).
                let n = log_h.len() as f64;
                let mx: f64 = log_h.iter().sum::<f64>() / n;
                let my: f64 = log_e.iter().sum::<f64>() / n;
                let num: f64 = log_h
                    .iter()
                    .zip(log_e.iter())
                    .map(|(x, y)| (x - mx) * (y - my))
                    .sum();
                let den: f64 = log_h.iter().map(|x| (x - mx).powi(2)).sum::<f64>().max(1e-18);
                let slope = num / den;
                plot_ui.line(
                    Line::new(PlotPoints::from(pts.clone()))
                        .color(method_color(m))
                        .stroke(Stroke::new(2.0, method_color(m)))
                        .name(format!("{}   slope ≈ {:.2}", m.name(), slope)),
                );
                plot_ui.points(
                    Points::new(PlotPoints::from(pts))
                        .shape(MarkerShape::Circle)
                        .radius(3.5)
                        .color(method_color(m))
                        .name(""),
                );
            }
        });
    ui.label(
        RichText::new(t(
            "Slope of each line is the empirical convergence order. \
             Theory predicts 1.00 (Euler), 2.00 (Heun), 4.00 (RK4).",
            "Minden vonal meredeksége az empirikus konvergenciarend. Az elmélet \
             1,00-t (Euler), 2,00-t (Heun), 4,00-t (RK4) jósol.",
        ))
        .small()
        .color(Color32::from_rgb(160, 175, 195)),
    );
}

fn method_table(ui: &mut Ui, state: &Ch10OdeState, m: Method, traj: &[(f64, f64)]) {
    egui::CollapsingHeader::new(
        RichText::new(m.name()).color(method_color(m)).strong(),
    )
    .default_open(false)
    .show(ui, |ui| {
        egui::Grid::new(format!("ch10_table_{}", m.name()))
            .num_columns(5)
            .spacing([16.0, 2.0])
            .show(ui, |ui| {
                ui.label(RichText::new("i").monospace().strong());
                ui.label(RichText::new("tᵢ").monospace().strong());
                ui.label(RichText::new("yᵢ").monospace().strong());
                ui.label(RichText::new(t("y_true", "y_valódi")).monospace().strong());
                ui.label(RichText::new("|error|").monospace().strong());
                ui.end_row();
                let n_show = traj.len().min(12);
                for (i, &(t, y)) in traj.iter().take(n_show).enumerate() {
                    let yt = state.preset.exact(t, state.t0, state.y0);
                    let e = (y - yt).abs();
                    ui.label(RichText::new(format!("{i:>3}")).monospace());
                    ui.label(RichText::new(format!("{:+.4}", t)).monospace());
                    ui.label(RichText::new(format!("{:+.6}", y)).monospace());
                    ui.label(RichText::new(format!("{:+.6}", yt)).monospace());
                    let color = if e < 1e-4 {
                        Color32::from_rgb(120, 220, 140)
                    } else if e < 1e-1 {
                        Color32::from_rgb(240, 200, 120)
                    } else {
                        Color32::from_rgb(240, 130, 130)
                    };
                    ui.label(
                        RichText::new(format!("{:.3e}", e)).monospace().color(color),
                    );
                    ui.end_row();
                }
                if traj.len() > 12 {
                    ui.label(RichText::new("...").monospace().weak());
                    ui.label("");
                    ui.label("");
                    ui.label("");
                    ui.label(
                        RichText::new({
                            let s = traj.len() - 1;
                            if i18n::lang() == Lang::Hu { format!("(összesen {s} lépés)") } else { format!("({s} steps total)") }
                        })
                            .small()
                            .weak(),
                    );
                    ui.end_row();
                }
            });
    });
}

fn method_color(m: Method) -> Color32 {
    match m {
        Method::Euler => Color32::from_rgb(240, 130, 130), // red
        Method::Heun => Color32::from_rgb(240, 200, 120),  // amber
        Method::Midpoint => Color32::from_rgb(200, 170, 240), // violet
        Method::Rk4 => Color32::from_rgb(120, 220, 140),   // green
    }
}

fn method_label_colored(m: Method) -> RichText {
    RichText::new(m.name()).color(method_color(m)).monospace()
}
