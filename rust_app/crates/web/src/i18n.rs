//! Minimal runtime internationalization for the sandbox UI.
//!
//! The active language is a process-global (the app is single-threaded on both
//! wasm and native), set once per frame from [`crate::app::SandboxApp`]. Call
//! sites use [`t`] to pick the active-language literal:
//!
//! ```ignore
//! ui.label(crate::i18n::t("Method", "Módszer"));
//! ```
//!
//! For interpolated text (which needs a literal `format!` template), branch on
//! [`lang`] instead:
//!
//! ```ignore
//! let msg = if crate::i18n::lang() == Lang::Hu {
//!     format!("{n} lépésben konvergált")
//! } else {
//!     format!("converged in {n} steps")
//! };
//! ```

use std::cell::Cell;

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum Lang {
    En,
    Hu,
}

thread_local! {
    static LANG: Cell<Lang> = const { Cell::new(Lang::En) };
}

/// Set the active UI language (called once per frame from the app).
pub fn set_lang(l: Lang) {
    LANG.with(|c| c.set(l));
}

/// The active UI language.
pub fn lang() -> Lang {
    LANG.with(|c| c.get())
}

/// Pick the English or Hungarian literal for the active language.
pub fn t(en: &'static str, hu: &'static str) -> &'static str {
    match lang() {
        Lang::En => en,
        Lang::Hu => hu,
    }
}
