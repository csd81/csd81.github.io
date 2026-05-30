//! One module per textbook chapter. Each exposes a `ChapterState` and a
//! `show(ui, state, env)` entry point.

pub mod ch1_error;
pub mod ch2_roots;
pub mod ch3_gauss;
pub mod ch4_iterative;
pub mod ch5_factor;
pub mod ch6_interp;
pub mod ch6_surface;
pub mod ch7_calculus;
pub mod ch8_optimize;
pub mod ch9_lsq;
pub mod ch10_ode;

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum Chapter {
    Ch1Error,
    Ch2Roots,
    Ch3Gauss,
    Ch4Iterative,
    Ch5Factor,
    Ch6Interp,
    Ch7Calculus,
    Ch8Optimize,
    Ch9Lsq,
    Ch10Ode,
    Ch6Surface,
}

impl Chapter {
    pub const ALL: &'static [Self] = &[
        Self::Ch1Error,
        Self::Ch2Roots,
        Self::Ch3Gauss,
        Self::Ch4Iterative,
        Self::Ch5Factor,
        Self::Ch6Interp,
        Self::Ch7Calculus,
        Self::Ch8Optimize,
        Self::Ch9Lsq,
        Self::Ch10Ode,
        Self::Ch6Surface,
    ];

    pub fn label(&self) -> &'static str {
        use crate::i18n::t;
        match self {
            Self::Ch1Error => t("1 · error analysis", "1 · hibaszámítás"),
            Self::Ch2Roots => t("2 · root finding", "2 · gyökkeresés"),
            Self::Ch3Gauss => t("3 · Gaussian elim", "3 · Gauss-elimináció"),
            Self::Ch4Iterative => t("4 · iterative", "4 · iterációs"),
            Self::Ch5Factor => t("5 · LU & Cholesky", "5 · LU és Cholesky"),
            Self::Ch6Interp => t("6 · interpolation", "6 · interpoláció"),
            Self::Ch7Calculus => t("7 · diff & integration", "7 · deriválás és integrálás"),
            Self::Ch8Optimize => t("8 · minimization", "8 · szélsőérték"),
            Self::Ch9Lsq => t("9 · least squares", "9 · legkisebb négyzetek"),
            Self::Ch10Ode => t("10 · ODEs", "10 · differenciálegyenletek"),
            Self::Ch6Surface => t("surface plot", "felületábra"),
        }
    }
}
