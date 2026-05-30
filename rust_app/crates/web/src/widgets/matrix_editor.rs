//! Inline matrix editor widget for egui.
//!
//! `matrix_editor(ui, mat)` renders a grid of `DragValue` cells plus +/- buttons
//! to grow or shrink the matrix. Returns `true` when any cell or shape changed,
//! so callers can re-run dependent computations only on edits.

use egui::{DragValue, Ui};
use numerics::Matrix;

use crate::i18n::t;

#[derive(Debug, Clone, Copy)]
pub struct MatrixEditorOptions {
    pub min_dim: usize,
    pub max_dim: usize,
    pub allow_resize: bool,
    pub speed: f64,
    pub min_cell_width: f32,
}

impl Default for MatrixEditorOptions {
    fn default() -> Self {
        Self {
            min_dim: 1,
            max_dim: 12,
            allow_resize: true,
            speed: 0.05,
            min_cell_width: 56.0,
        }
    }
}

/// Render a matrix editor. Returns true if anything changed.
pub fn matrix_editor(ui: &mut Ui, label: &str, mat: &mut Matrix, opts: MatrixEditorOptions) -> bool {
    let mut changed = false;
    ui.label(egui::RichText::new(label).strong());

    if opts.allow_resize {
        ui.horizontal(|ui| {
            let (rows, cols) = mat.shape();
            ui.label(t("size:", "méret:"));
            let mut new_rows = rows;
            let mut new_cols = cols;
            ui.add(
                DragValue::new(&mut new_rows)
                    .range(opts.min_dim..=opts.max_dim)
                    .speed(0.05),
            );
            ui.label("×");
            ui.add(
                DragValue::new(&mut new_cols)
                    .range(opts.min_dim..=opts.max_dim)
                    .speed(0.05),
            );
            if new_rows != rows || new_cols != cols {
                *mat = resize(mat, new_rows, new_cols);
                changed = true;
            }
        });
    }

    let (rows, cols) = mat.shape();
    let cell_w = opts.min_cell_width;
    egui::Grid::new(format!("matrix_editor_{label}"))
        .num_columns(cols)
        .spacing([4.0, 4.0])
        .show(ui, |ui| {
            for r in 0..rows {
                for c in 0..cols {
                    let mut v = mat.get(r, c).unwrap();
                    let resp = ui.add_sized(
                        [cell_w, 20.0],
                        DragValue::new(&mut v).speed(opts.speed),
                    );
                    if resp.changed() {
                        mat.set(r, c, v).unwrap();
                        changed = true;
                    }
                }
                ui.end_row();
            }
        });

    changed
}

/// Compact editor for an n-element column vector. Useful for `b` in `A x = b`.
pub fn vector_editor(
    ui: &mut Ui,
    label: &str,
    v: &mut Vec<f64>,
    locked_len: Option<usize>,
    speed: f64,
) -> bool {
    let mut changed = false;
    ui.label(egui::RichText::new(label).strong());

    if let Some(want) = locked_len {
        if v.len() != want {
            v.resize(want, 0.0);
            changed = true;
        }
    } else {
        ui.horizontal(|ui| {
            let mut n = v.len();
            ui.label(t("length:", "hossz:"));
            ui.add(DragValue::new(&mut n).range(1usize..=64).speed(0.05));
            if n != v.len() {
                v.resize(n, 0.0);
                changed = true;
            }
        });
    }

    egui::Grid::new(format!("vector_editor_{label}"))
        .num_columns(1)
        .spacing([4.0, 4.0])
        .show(ui, |ui| {
            for x in v.iter_mut() {
                let resp = ui.add_sized([72.0, 20.0], DragValue::new(x).speed(speed));
                if resp.changed() {
                    changed = true;
                }
                ui.end_row();
            }
        });

    changed
}

fn resize(mat: &Matrix, new_rows: usize, new_cols: usize) -> Matrix {
    let (rows, cols) = mat.shape();
    let mut data = vec![0.0; new_rows * new_cols];
    let copy_r = rows.min(new_rows);
    let copy_c = cols.min(new_cols);
    for r in 0..copy_r {
        for c in 0..copy_c {
            data[r * new_cols + c] = mat.get(r, c).unwrap();
        }
    }
    Matrix::new(new_rows, new_cols, data)
}
