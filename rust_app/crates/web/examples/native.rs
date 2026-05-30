//! Native desktop entry point. Useful for fast iteration without the WASM
//! build loop. The browser entry point lives in `lib.rs`.

#[cfg(not(target_arch = "wasm32"))]
fn main() -> eframe::Result<()> {
    env_logger::init();
    let options = eframe::NativeOptions {
        viewport: egui::ViewportBuilder::default()
            .with_title("rmath sandbox")
            .with_inner_size([1100.0, 760.0]),
        ..Default::default()
    };
    eframe::run_native(
        "rmath sandbox",
        options,
        Box::new(|cc| Ok(Box::new(web::SandboxApp::new(cc)))),
    )
}

#[cfg(target_arch = "wasm32")]
fn main() {}
