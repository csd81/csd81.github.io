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
        match self {
            Self::Ch1Error => "1 · error analysis",
            Self::Ch2Roots => "2 · root finding",
            Self::Ch3Gauss => "3 · Gaussian elim",
            Self::Ch4Iterative => "4 · iterative",
            Self::Ch5Factor => "5 · LU & Cholesky",
            Self::Ch6Interp => "6 · interpolation",
            Self::Ch7Calculus => "7 · diff & integration",
            Self::Ch8Optimize => "8 · minimization",
            Self::Ch9Lsq => "9 · least squares",
            Self::Ch10Ode => "10 · ODEs",
            Self::Ch6Surface => "surface plot",
        }
    }
}
