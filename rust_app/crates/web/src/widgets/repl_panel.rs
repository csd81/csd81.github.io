//! Persistent bottom-docked REPL panel, available on every chapter tab.
//!
//! All chapter panels share the same `engine::Env`, so variables assigned in
//! the REPL (e.g. `A = [1, 2; 3, 4]`) can be referenced by chapter widgets
//! and vice-versa.

use egui::{Color32, RichText, ScrollArea, TextEdit, Ui};
use engine::Env;
use numerics::Matrix;

use crate::i18n::{self, t, Lang};

#[derive(Default)]
pub struct ReplState {
    pub input: String,
    pub log: Vec<LogEntry>,
}

#[derive(Clone)]
pub struct LogEntry {
    pub text: String,
    pub is_error: bool,
}

impl ReplState {
    pub fn execute(&mut self, env: &mut Env, src: &str) {
        let src = src.trim();
        if src.is_empty() {
            return;
        }
        self.log.push(LogEntry {
            text: format!(">> {src}"),
            is_error: false,
        });
        match env.run(src) {
            Ok(results) => {
                for r in results {
                    if r.suppress {
                        continue;
                    }
                    let header = r
                        .binding
                        .as_deref()
                        .map(|n| format!("{n} ="))
                        .unwrap_or_default();
                    self.log.push(LogEntry {
                        text: format!("{header}\n{}", format_value(&r.value)),
                        is_error: false,
                    });
                }
            }
            Err(e) => {
                let text = if i18n::lang() == Lang::Hu {
                    format!("hiba: {e}")
                } else {
                    format!("error: {e}")
                };
                self.log.push(LogEntry {
                    text,
                    is_error: true,
                });
            }
        }
    }
}

pub fn repl_panel(ui: &mut Ui, env: &mut Env, state: &mut ReplState) {
    ui.horizontal(|ui| {
        ui.label(RichText::new("REPL").strong());
        ui.separator();
        ui.label(t(
            "Shared variable scope across all tabs. Try: A = [1,2;3,4]",
            "Közös változókörnyezet minden fülön. Próbáld: A = [1,2;3,4]",
        ));
        if ui.small_button(t("clear", "törlés")).clicked() {
            state.log.clear();
        }
    });

    let avail = ui.available_size();
    let log_height = (avail.y - 36.0).max(40.0);

    ScrollArea::vertical()
        .stick_to_bottom(true)
        .max_height(log_height)
        .show(ui, |ui| {
            for entry in &state.log {
                let color = if entry.is_error {
                    Color32::from_rgb(240, 120, 120)
                } else {
                    Color32::from_rgb(200, 215, 230)
                };
                ui.add(
                    egui::Label::new(RichText::new(&entry.text).monospace().color(color))
                        .wrap(),
                );
            }
        });

    ui.add_space(4.0);
    ui.horizontal(|ui| {
        let resp = ui.add(
            TextEdit::singleline(&mut state.input)
                .font(egui::TextStyle::Monospace)
                .desired_width(f32::INFINITY)
                .hint_text(t(
                    "e.g.  A = [1, 2; 3, 4]   then   eig = cond_inf(A)",
                    "pl.  A = [1, 2; 3, 4]   majd   eig = cond_inf(A)",
                )),
        );
        let pressed_enter =
            resp.lost_focus() && ui.input(|i| i.key_pressed(egui::Key::Enter));
        if pressed_enter {
            let src = std::mem::take(&mut state.input);
            state.execute(env, &src);
            resp.request_focus();
        }
    });
}

pub fn format_value(v: &Matrix) -> String {
    if v.is_scalar() {
        return format!("  {}", fmt_num(v.as_scalar().unwrap()));
    }
    if v.is_empty() {
        return "  []".into();
    }
    let cells: Vec<String> = v.data().iter().map(|x| fmt_num(*x)).collect();
    let width = cells.iter().map(|s| s.len()).max().unwrap_or(1);
    let (rows, cols) = v.shape();
    let mut out = String::new();
    for r in 0..rows {
        for c in 0..cols {
            use std::fmt::Write;
            let _ = write!(out, "  {:>width$}", cells[r * cols + c], width = width);
        }
        out.push('\n');
    }
    out
}

fn fmt_num(x: f64) -> String {
    if !x.is_finite() {
        return format!("{x}");
    }
    if x == 0.0 {
        return "0".into();
    }
    let abs = x.abs();
    if abs < 1e-4 || abs >= 1e5 {
        return format!("{x:.4e}");
    }
    if (x - x.round()).abs() < 1e-12 && abs < 1e15 {
        return format!("{}", x.round() as i64);
    }
    format!("{x:.4}")
}
