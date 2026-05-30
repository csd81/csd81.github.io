//! Chapter 6+ — surface plotting workbench (the original WASM app, kept as a
//! tab so the 3D wireframe lives on while we add chapter-specific panels).

use egui::{Color32, RichText, TextEdit, Ui};
use engine::{ast::Expr, parse_expr_str, Env};
use numerics::{mesh, Matrix};

use crate::plot3d::{self, ViewState};

const DEFAULT_FORMULA: &str = "sin(sqrt(x*x + y*y)) / (sqrt(x*x + y*y) + 0.01)";

pub struct Ch6State {
    pub formula: String,
    pub x_min: f64,
    pub x_max: f64,
    pub y_min: f64,
    pub y_max: f64,
    pub grid_n: usize,
    pub last_surface: Option<SurfaceResult>,
    pub formula_error: Option<String>,
    pub view: ViewState,
    pub first_run: bool,
}

pub struct SurfaceResult {
    pub xs: Vec<f64>,
    pub ys: Vec<f64>,
    pub z: Matrix,
}

impl Default for Ch6State {
    fn default() -> Self {
        Self {
            formula: DEFAULT_FORMULA.to_string(),
            x_min: -8.0,
            x_max: 8.0,
            y_min: -8.0,
            y_max: 8.0,
            grid_n: 40,
            last_surface: None,
            formula_error: None,
            view: ViewState::default(),
            first_run: true,
        }
    }
}

impl Ch6State {
    fn apply_formula(&mut self, env: &mut Env) {
        match self.compute_surface(env) {
            Ok(s) => {
                self.last_surface = Some(s);
                self.formula_error = None;
            }
            Err(e) => {
                self.formula_error = Some(e);
            }
        }
    }

    fn compute_surface(&mut self, env: &mut Env) -> Result<SurfaceResult, String> {
        if self.grid_n < 2 {
            return Err("grid size must be at least 2".into());
        }
        if !(self.x_min < self.x_max && self.y_min < self.y_max) {
            return Err("ranges must have min < max".into());
        }
        let expr: Expr = parse_expr_str(&self.formula).map_err(|e| e.to_string())?;
        let xs = mesh::linspace(self.x_min, self.x_max, self.grid_n);
        let ys = mesh::linspace(self.y_min, self.y_max, self.grid_n);
        let rows = ys.len();
        let cols = xs.len();
        let mut data = Vec::with_capacity(rows * cols);
        for &y in &ys {
            for &x in &xs {
                env.set("x", Matrix::scalar(x));
                env.set("y", Matrix::scalar(y));
                let v = env.eval(&expr).map_err(|e| e.to_string())?;
                let s = v.as_scalar().ok_or_else(|| {
                    format!(
                        "formula must return a scalar; got {}x{} at x={x}, y={y}",
                        v.rows(),
                        v.cols()
                    )
                })?;
                data.push(s);
            }
        }
        Ok(SurfaceResult {
            xs,
            ys,
            z: Matrix::new(rows, cols, data),
        })
    }
}

pub fn show(ui: &mut Ui, state: &mut Ch6State, env: &mut Env) {
    if state.first_run {
        state.first_run = false;
        state.apply_formula(env);
    }

    egui::SidePanel::left("ch6_controls")
        .resizable(true)
        .default_width(340.0)
        .show_inside(ui, |ui| controls(ui, state, env));

    egui::CentralPanel::default().show_inside(ui, |ui| {
        ui.label(
            RichText::new("z = f(x, y)")
                .monospace()
                .color(Color32::from_rgb(180, 200, 220)),
        );
        let avail = ui.available_rect_before_wrap();
        if let Some(s) = &state.last_surface {
            plot3d::draw(
                ui,
                avail,
                &mut state.view,
                &plot3d::Surface {
                    xs: &s.xs,
                    ys: &s.ys,
                    z: &s.z,
                },
            );
        } else {
            ui.centered_and_justified(|ui| {
                ui.label("(no surface — fix the formula and click Apply)");
            });
        }
    });
}

fn controls(ui: &mut Ui, state: &mut Ch6State, env: &mut Env) {
    ui.add_space(6.0);
    ui.label(RichText::new("Surface formula").strong());
    ui.add(
        TextEdit::multiline(&mut state.formula)
            .desired_rows(3)
            .font(egui::TextStyle::Monospace)
            .desired_width(f32::INFINITY),
    );

    ui.add_space(4.0);
    ui.horizontal(|ui| {
        ui.label("x ∈");
        ui.add(egui::DragValue::new(&mut state.x_min).speed(0.1));
        ui.label("…");
        ui.add(egui::DragValue::new(&mut state.x_max).speed(0.1));
    });
    ui.horizontal(|ui| {
        ui.label("y ∈");
        ui.add(egui::DragValue::new(&mut state.y_min).speed(0.1));
        ui.label("…");
        ui.add(egui::DragValue::new(&mut state.y_max).speed(0.1));
    });
    ui.horizontal(|ui| {
        ui.label("grid");
        ui.add(egui::DragValue::new(&mut state.grid_n).range(4..=200).speed(1));
        ui.label("(per axis)");
    });

    ui.add_space(8.0);
    ui.horizontal(|ui| {
        if ui.button("Apply").clicked() {
            state.apply_formula(env);
        }
        if ui.button("Reset view").clicked() {
            state.view = ViewState::default();
        }
    });

    if let Some(err) = &state.formula_error {
        ui.add_space(6.0);
        ui.label(
            RichText::new(format!("formula error: {err}"))
                .color(Color32::from_rgb(240, 120, 120))
                .monospace(),
        );
    }

    ui.add_space(12.0);
    ui.separator();
    ui.label(RichText::new("Presets").strong());
    ui.horizontal_wrapped(|ui| {
        for (name, expr, range) in PRESETS {
            if ui.small_button(*name).clicked() {
                state.formula = expr.to_string();
                let (xmin, xmax, ymin, ymax) = *range;
                state.x_min = xmin;
                state.x_max = xmax;
                state.y_min = ymin;
                state.y_max = ymax;
                state.apply_formula(env);
            }
        }
    });
}

const PRESETS: &[(&str, &str, (f64, f64, f64, f64))] = &[
    (
        "sombrero",
        "sin(sqrt(x*x + y*y)) / (sqrt(x*x + y*y) + 0.01)",
        (-8.0, 8.0, -8.0, 8.0),
    ),
    (
        "gaussian peak",
        "x * exp(-(x*x + y*y))",
        (-2.0, 2.0, -2.0, 2.0),
    ),
    ("saddle", "x*x - y*y", (-2.0, 2.0, -2.0, 2.0)),
    (
        "ripples",
        "sin(x) .* cos(y)",
        (-6.283, 6.283, -6.283, 6.283),
    ),
    ("paraboloid", "x*x + y*y", (-2.0, 2.0, -2.0, 2.0)),
];
