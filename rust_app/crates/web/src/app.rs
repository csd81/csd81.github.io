//! Top-level egui application.
//!
//! Layout:
//!
//! ```text
//! ┌──────────────────────────────────────────────────────────┐
//! │  rmath sandbox  │ ch1 ch2 ch3 ch4 ch5 ch6  │  (tab bar)  │
//! ├──────────────────────────────────────────────────────────┤
//! │                                                          │
//! │              ACTIVE CHAPTER PANEL                        │
//! │                                                          │
//! ├──────────────────────────────────────────────────────────┤
//! │  REPL  (always visible, shared env across all tabs)      │
//! └──────────────────────────────────────────────────────────┘
//! ```

use eframe::{App, CreationContext, Frame};
use egui::{Context, RichText, Visuals};

use engine::Env;

use crate::i18n::{self, Lang};

use crate::chapters::{
    ch10_ode::Ch10OdeState, ch1_error::Ch1State, ch2_roots::Ch2State, ch3_gauss::Ch3State,
    ch4_iterative::Ch4State, ch5_factor::Ch5State, ch6_interp::Ch6InterpState,
    ch6_surface::Ch6State, ch7_calculus::Ch7State, ch8_optimize::Ch8State, ch9_lsq::Ch9State,
    Chapter,
};
use crate::widgets::repl_panel::{repl_panel, ReplState};

pub struct SandboxApp {
    env: Env,

    active_tab: Chapter,
    /// When true (set via the URL hash `#chN/embed`), the global tab bar is
    /// hidden so the app can be embedded inside one textbook chapter page.
    embedded: bool,
    /// UI language (EN/HU); applied to the i18n global each frame.
    lang: Lang,
    /// Dark vs light egui visuals.
    dark: bool,

    ch1: Ch1State,
    ch2: Ch2State,
    ch3: Ch3State,
    ch4: Ch4State,
    ch5: Ch5State,
    ch6_interp: Ch6InterpState,
    ch7: Ch7State,
    ch8: Ch8State,
    ch9: Ch9State,
    ch10: Ch10OdeState,
    ch6: Ch6State,

    repl: ReplState,
}

/// Parse `(initial chapter, embedded?)` from the page URL hash, e.g.
/// `#ch2` selects chapter 2, `#ch2/embed` also hides the tab bar. On native
/// (or with no hash) this is `(Ch1Error, false)`.
struct InitialView {
    chapter: Chapter,
    embedded: bool,
    lang: Lang,
    dark: bool,
}

/// Parse the page URL hash, e.g. `#ch2`, `#ch2/embed`, `#ch5/embed/hu/dark`.
/// Tokens: chapter id, `embed`, `en`/`hu`, `dark`/`light`. On native (or no
/// hash) this is chapter 1, not embedded, English, dark.
fn initial_view() -> InitialView {
    #[cfg_attr(not(target_arch = "wasm32"), allow(unused_mut))]
    let mut view = InitialView {
        chapter: Chapter::Ch1Error,
        embedded: false,
        lang: Lang::En,
        dark: true,
    };
    #[cfg(target_arch = "wasm32")]
    {
        if let Some(hash) = web_sys::window().and_then(|w| w.location().hash().ok()) {
            for tok in hash.trim_start_matches('#').split('/').filter(|t| !t.is_empty()) {
                match tok {
                    "ch1" => view.chapter = Chapter::Ch1Error,
                    "ch2" => view.chapter = Chapter::Ch2Roots,
                    "ch3" => view.chapter = Chapter::Ch3Gauss,
                    "ch4" => view.chapter = Chapter::Ch4Iterative,
                    "ch5" => view.chapter = Chapter::Ch5Factor,
                    "ch6" => view.chapter = Chapter::Ch6Interp,
                    "ch7" => view.chapter = Chapter::Ch7Calculus,
                    "ch8" => view.chapter = Chapter::Ch8Optimize,
                    "ch9" => view.chapter = Chapter::Ch9Lsq,
                    "ch10" => view.chapter = Chapter::Ch10Ode,
                    "surface" => view.chapter = Chapter::Ch6Surface,
                    "embed" => view.embedded = true,
                    "hu" => view.lang = Lang::Hu,
                    "en" => view.lang = Lang::En,
                    "dark" => view.dark = true,
                    "light" => view.dark = false,
                    _ => {}
                }
            }
        }
    }
    view
}

impl SandboxApp {
    pub fn new(_cc: &CreationContext<'_>) -> Self {
        let view = initial_view();
        Self {
            env: Env::new(),
            active_tab: view.chapter,
            embedded: view.embedded,
            lang: view.lang,
            dark: view.dark,
            ch1: Ch1State::default(),
            ch2: Ch2State::default(),
            ch3: Ch3State::default(),
            ch4: Ch4State::default(),
            ch5: Ch5State::default(),
            ch6_interp: Ch6InterpState::default(),
            ch7: Ch7State::default(),
            ch8: Ch8State::default(),
            ch9: Ch9State::default(),
            ch10: Ch10OdeState::default(),
            ch6: Ch6State::default(),
            repl: ReplState::default(),
        }
    }
}

impl App for SandboxApp {
    fn update(&mut self, ctx: &Context, _frame: &mut Frame) {
        // Apply language + theme for this frame before any panel is built.
        i18n::set_lang(self.lang);
        ctx.set_visuals(if self.dark { Visuals::dark() } else { Visuals::light() });

        // ── Top toolbar: tab bar (standalone) + language/theme toggles ──
        egui::TopBottomPanel::top("topbar").show(ctx, |ui| {
            ui.add_space(4.0);
            ui.horizontal(|ui| {
                if !self.embedded {
                    ui.label(RichText::new("rmath sandbox").heading());
                    ui.separator();
                    for &c in Chapter::ALL {
                        ui.selectable_value(&mut self.active_tab, c, c.label());
                    }
                }
                // Toggles pinned to the right (always visible, incl. embed mode).
                ui.with_layout(egui::Layout::right_to_left(egui::Align::Center), |ui| {
                    let theme_icon = if self.dark { "☀ light" } else { "🌙 dark" };
                    if ui
                        .button(theme_icon)
                        .on_hover_text(i18n::t("Toggle theme", "Téma váltása"))
                        .clicked()
                    {
                        self.dark = !self.dark;
                    }
                    let lang_label = match self.lang {
                        Lang::En => "🇬🇧 EN",
                        Lang::Hu => "🇭🇺 HU",
                    };
                    if ui
                        .button(lang_label)
                        .on_hover_text(i18n::t("Switch language", "Nyelvváltás"))
                        .clicked()
                    {
                        self.lang = match self.lang {
                            Lang::En => Lang::Hu,
                            Lang::Hu => Lang::En,
                        };
                    }
                });
            });
            ui.add_space(2.0);
        });

        // ── Persistent REPL at the bottom ───────────────────────────────
        egui::TopBottomPanel::bottom("repl_dock")
            .resizable(true)
            .default_height(200.0)
            .show(ctx, |ui| {
                repl_panel(ui, &mut self.env, &mut self.repl);
            });

        // ── Active chapter panel fills the rest ─────────────────────────
        egui::CentralPanel::default().show(ctx, |ui| match self.active_tab {
            Chapter::Ch1Error => crate::chapters::ch1_error::show(ui, &mut self.ch1, &mut self.env),
            Chapter::Ch2Roots => crate::chapters::ch2_roots::show(ui, &mut self.ch2, &mut self.env),
            Chapter::Ch3Gauss => crate::chapters::ch3_gauss::show(ui, &mut self.ch3, &mut self.env),
            Chapter::Ch4Iterative => {
                crate::chapters::ch4_iterative::show(ui, &mut self.ch4, &mut self.env)
            }
            Chapter::Ch5Factor => {
                crate::chapters::ch5_factor::show(ui, &mut self.ch5, &mut self.env)
            }
            Chapter::Ch6Interp => {
                crate::chapters::ch6_interp::show(ui, &mut self.ch6_interp, &mut self.env)
            }
            Chapter::Ch7Calculus => {
                crate::chapters::ch7_calculus::show(ui, &mut self.ch7, &mut self.env)
            }
            Chapter::Ch8Optimize => {
                crate::chapters::ch8_optimize::show(ui, &mut self.ch8, &mut self.env)
            }
            Chapter::Ch9Lsq => {
                crate::chapters::ch9_lsq::show(ui, &mut self.ch9, &mut self.env)
            }
            Chapter::Ch10Ode => {
                crate::chapters::ch10_ode::show(ui, &mut self.ch10, &mut self.env)
            }
            Chapter::Ch6Surface => {
                crate::chapters::ch6_surface::show(ui, &mut self.ch6, &mut self.env)
            }
        });
    }
}
