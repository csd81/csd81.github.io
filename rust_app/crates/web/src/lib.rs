//! Cross-target entry points.
//!
//! * Native: `crates/web/src/main.rs` calls `eframe::run_native` with
//!   [`SandboxApp::new`].
//! * Web: this module exposes an auto-start function that trunk wires up.
//!   The HTML must contain `<canvas id="the_canvas_id"></canvas>`.

mod app;
mod chapters;
mod i18n;
mod plot3d;
mod widgets;

pub use app::SandboxApp;

#[cfg(target_arch = "wasm32")]
const CANVAS_ID: &str = "the_canvas_id";

#[cfg(target_arch = "wasm32")]
use wasm_bindgen::prelude::*;

#[cfg(target_arch = "wasm32")]
#[wasm_bindgen(start)]
pub fn web_start() {
    console_error_panic_hook::set_once();
    wasm_bindgen_futures::spawn_local(async move {
        let document = web_sys::window()
            .expect("no window")
            .document()
            .expect("no document");
        let canvas = document
            .get_element_by_id(CANVAS_ID)
            .unwrap_or_else(|| panic!("canvas with id '{CANVAS_ID}' not found"))
            .dyn_into::<web_sys::HtmlCanvasElement>()
            .expect("element is not a <canvas>");

        let runner = eframe::WebRunner::new();
        if let Err(e) = runner
            .start(
                canvas,
                eframe::WebOptions::default(),
                Box::new(|cc| Ok(Box::new(SandboxApp::new(cc)))),
            )
            .await
        {
            log::error!("rmath-web start failed: {e:?}");
        }
    });
}
