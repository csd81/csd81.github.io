//! Tiny custom 3D wireframe renderer drawn straight onto an egui `Painter`.
//!
//! We don't pull in a 3D engine — the math (rotation + orthographic projection)
//! is a few lines, and rendering as a line mesh keeps the surface readable.
//! Drag the plot area with the mouse to rotate; scroll to zoom.

use egui::{Color32, Painter, Pos2, Rect, Sense, Stroke, Ui, Vec2};

use numerics::Matrix;

#[derive(Debug, Clone, Copy)]
pub struct ViewState {
    /// Rotation around vertical axis, radians.
    pub yaw: f32,
    /// Rotation toward the viewer (tilt), radians.
    pub pitch: f32,
    /// Scale factor; 1.0 = fit-to-rect default.
    pub zoom: f32,
}

impl Default for ViewState {
    fn default() -> Self {
        Self {
            yaw: 0.6,
            pitch: 0.9,
            zoom: 1.0,
        }
    }
}

/// Surface data ready to plot: a Z matrix plus the x/y ranges its cells span.
pub struct Surface<'a> {
    pub xs: &'a [f64],
    pub ys: &'a [f64],
    pub z: &'a Matrix,
}

/// Draw the surface inside `rect`, updating `view` from pointer interaction.
pub fn draw(ui: &mut Ui, rect: Rect, view: &mut ViewState, surf: &Surface<'_>) {
    let response = ui.interact(rect, ui.id().with("plot3d"), Sense::click_and_drag());

    if response.dragged() {
        let d = response.drag_delta();
        // Match typical 3D viewer conventions: horizontal drag → yaw,
        // vertical drag → pitch.
        view.yaw += d.x * 0.01;
        view.pitch = (view.pitch + d.y * 0.01).clamp(0.05, std::f32::consts::PI - 0.05);
    }
    if response.hovered() {
        let scroll = ui.input(|i| i.smooth_scroll_delta.y);
        if scroll != 0.0 {
            view.zoom = (view.zoom * (1.0 + scroll * 0.0015)).clamp(0.2, 5.0);
        }
    }

    let painter = ui.painter_at(rect);
    painter.rect_filled(rect, 4.0, Color32::from_rgb(15, 22, 33));

    if surf.xs.is_empty() || surf.ys.is_empty() || surf.z.rows() == 0 {
        painter.text(
            rect.center(),
            egui::Align2::CENTER_CENTER,
            "(empty surface)",
            egui::FontId::proportional(14.0),
            Color32::LIGHT_GRAY,
        );
        return;
    }

    render(&painter, rect, *view, surf);
}

fn render(painter: &Painter, rect: Rect, view: ViewState, surf: &Surface<'_>) {
    // Normalize world coordinates so the surface fills a 2×2×2 cube centered
    // at origin before rotation. This keeps the rendering size stable as the
    // user changes ranges and Z amplitudes.
    let (rows, cols) = surf.z.shape();
    let x_min = surf.xs.iter().cloned().fold(f64::INFINITY, f64::min);
    let x_max = surf.xs.iter().cloned().fold(f64::NEG_INFINITY, f64::max);
    let y_min = surf.ys.iter().cloned().fold(f64::INFINITY, f64::min);
    let y_max = surf.ys.iter().cloned().fold(f64::NEG_INFINITY, f64::max);
    let z_min = surf.z.data().iter().cloned().fold(f64::INFINITY, f64::min);
    let z_max = surf.z.data().iter().cloned().fold(f64::NEG_INFINITY, f64::max);

    let z_amp = (z_max - z_min).max(1e-9);

    // Map (x, y, z) world → unit cube coords in [-1, 1]
    let to_unit = |x: f64, y: f64, z: f64| -> [f32; 3] {
        let u = if x_max > x_min {
            (2.0 * (x - x_min) / (x_max - x_min) - 1.0) as f32
        } else {
            0.0
        };
        let v = if y_max > y_min {
            (2.0 * (y - y_min) / (y_max - y_min) - 1.0) as f32
        } else {
            0.0
        };
        // Z stretched a bit less so peaks don't poke out wildly
        let w = ((z - 0.5 * (z_min + z_max)) / z_amp) as f32;
        [u, v, w * 0.8]
    };

    let sin_yaw = view.yaw.sin();
    let cos_yaw = view.yaw.cos();
    let sin_pit = view.pitch.sin();
    let cos_pit = view.pitch.cos();

    // Project unit-cube point → 2D screen point inside `rect`.
    let scale = view.zoom * 0.45 * rect.width().min(rect.height());
    let center = rect.center();
    let project = |p: [f32; 3]| -> (Pos2, f32) {
        let (x, y, z) = (p[0], p[1], p[2]);
        // Yaw around vertical (Z) axis
        let xr = x * cos_yaw - y * sin_yaw;
        let yr = x * sin_yaw + y * cos_yaw;
        // Pitch around the rotated X axis (tilts the plane toward viewer)
        let yp = yr * cos_pit - z * sin_pit;
        let zp = yr * sin_pit + z * cos_pit;
        // Orthographic projection: just drop the depth axis (yp)
        let sx = center.x + xr * scale;
        let sy = center.y - zp * scale; // up is -screen-y
        (Pos2::new(sx, sy), yp)
    };

    // Precompute every projected vertex.
    let mut pts = Vec::with_capacity(rows * cols);
    for i in 0..rows {
        for j in 0..cols {
            let z = surf.z.data()[i * cols + j];
            let p3 = to_unit(surf.xs[j], surf.ys[i], z);
            pts.push((project(p3), z));
        }
    }

    // Color points by normalized Z value (cool→warm).
    let color_for = |z: f64| -> Color32 {
        let t = ((z - z_min) / z_amp).clamp(0.0, 1.0) as f32;
        // Simple two-stop gradient: deep blue → cyan → yellow → red
        let (r, g, b) = if t < 0.5 {
            let t2 = t / 0.5;
            (
                (0.0 + t2 * 0.0) * 255.0,
                (0.4 + t2 * 0.6) * 255.0,
                (0.7 + t2 * 0.3) * 255.0,
            )
        } else {
            let t2 = (t - 0.5) / 0.5;
            (
                (0.0 + t2 * 1.0) * 255.0,
                (1.0 - t2 * 0.6) * 255.0,
                (1.0 - t2 * 1.0) * 255.0,
            )
        };
        Color32::from_rgb(r as u8, g as u8, b as u8)
    };

    // Draw wireframe: horizontal segments (varying j) and vertical (varying i)
    let stroke_w = 1.0;
    for i in 0..rows {
        for j in 0..cols.saturating_sub(1) {
            let a = pts[i * cols + j];
            let b = pts[i * cols + j + 1];
            let mid_z = 0.5 * (a.1 + b.1);
            painter.line_segment(
                [a.0 .0, b.0 .0],
                Stroke::new(stroke_w, color_for(mid_z)),
            );
        }
    }
    for i in 0..rows.saturating_sub(1) {
        for j in 0..cols {
            let a = pts[i * cols + j];
            let b = pts[(i + 1) * cols + j];
            let mid_z = 0.5 * (a.1 + b.1);
            painter.line_segment(
                [a.0 .0, b.0 .0],
                Stroke::new(stroke_w, color_for(mid_z)),
            );
        }
    }

    // Tiny axis indicator in the bottom-left so the user can see orientation.
    draw_axes(painter, rect, view);

    // Min/max z legend
    let legend = format!(
        "x ∈ [{:.2}, {:.2}]   y ∈ [{:.2}, {:.2}]   z ∈ [{:.3}, {:.3}]",
        x_min, x_max, y_min, y_max, z_min, z_max
    );
    painter.text(
        rect.left_top() + Vec2::new(8.0, 4.0),
        egui::Align2::LEFT_TOP,
        legend,
        egui::FontId::monospace(11.0),
        Color32::from_rgb(160, 180, 200),
    );
}

fn draw_axes(painter: &Painter, rect: Rect, view: ViewState) {
    let origin = rect.left_bottom() + Vec2::new(28.0, -28.0);
    let len = 22.0;
    let sin_yaw = view.yaw.sin();
    let cos_yaw = view.yaw.cos();
    let sin_pit = view.pitch.sin();
    let cos_pit = view.pitch.cos();
    let proj = |x: f32, y: f32, z: f32| -> Pos2 {
        let xr = x * cos_yaw - y * sin_yaw;
        let yr = x * sin_yaw + y * cos_yaw;
        let zp = yr * sin_pit + z * cos_pit;
        Pos2::new(origin.x + xr * len, origin.y - zp * len)
    };
    let ox = proj(0.0, 0.0, 0.0);
    painter.line_segment([ox, proj(1.0, 0.0, 0.0)], Stroke::new(1.5, Color32::from_rgb(220, 90, 90)));
    painter.line_segment([ox, proj(0.0, 1.0, 0.0)], Stroke::new(1.5, Color32::from_rgb(90, 200, 110)));
    painter.line_segment([ox, proj(0.0, 0.0, 1.0)], Stroke::new(1.5, Color32::from_rgb(110, 160, 240)));
    let label_font = egui::FontId::monospace(10.0);
    painter.text(proj(1.15, 0.0, 0.0), egui::Align2::CENTER_CENTER, "x", label_font.clone(), Color32::from_rgb(220, 90, 90));
    painter.text(proj(0.0, 1.15, 0.0), egui::Align2::CENTER_CENTER, "y", label_font.clone(), Color32::from_rgb(90, 200, 110));
    painter.text(proj(0.0, 0.0, 1.15), egui::Align2::CENTER_CENTER, "z", label_font, Color32::from_rgb(110, 160, 240));
}
