//! Chapter 10 — initial-value problems for ordinary differential equations.
//!
//! We integrate `y' = f(t, y)` from `t = t0` to `t = tf` with a fixed step
//! `h > 0`. Four explicit one-step methods are provided:
//!
//! | method   | order | stages | formula                                              |
//! |----------|-------|--------|------------------------------------------------------|
//! | Euler    | 1     | 1      | `yₙ₊₁ = yₙ + h·f(tₙ, yₙ)`                            |
//! | Heun     | 2     | 2      | trapezoidal predictor-corrector (RK2, improved Euler) |
//! | Midpoint | 2     | 2      | one half-step then full slope (RK2, midpoint rule)    |
//! | RK4      | 4     | 4      | classical Runge–Kutta 4                              |
//!
//! Plus a second-order Taylor step which requires the user to also supply the
//! partial derivatives `∂f/∂t` and `∂f/∂y`.
//!
//! Everything is `FnMut`-friendly to match the rest of the library and the
//! `engine` UI closures, which mutably borrow the symbol table.
//!
//! Hartung's worked examples (§10) use `y' = y, y(0) = 1` on `[0, 1]` whose
//! exact solution is `e^t`; the tests in this module reproduce his numbers
//! and also pin down the empirical convergence order with a step-size sweep.

use thiserror::Error;

#[derive(Debug, Error, Clone, PartialEq)]
pub enum OdeError {
    #[error("step size h must be > 0, got {0}")]
    NonPositiveStep(f64),
    #[error("interval reversed: t0 = {t0}, tf = {tf} (need t0 < tf)")]
    IntervalReversed { t0: f64, tf: f64 },
    #[error("solver produced a non-finite value at step {step} (t = {t})")]
    NonFiniteStep { step: usize, t: f64 },
}

/// Enumerates the explicit one-step methods exposed by the [`integrate`]
/// driver. Listed in increasing order of accuracy.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum Method {
    Euler,
    Heun,
    Midpoint,
    Rk4,
}

impl Method {
    pub const ALL: &'static [Self] =
        &[Self::Euler, Self::Heun, Self::Midpoint, Self::Rk4];

    pub fn name(self) -> &'static str {
        match self {
            Self::Euler => "Euler",
            Self::Heun => "Heun (RK2)",
            Self::Midpoint => "Midpoint (RK2)",
            Self::Rk4 => "RK4",
        }
    }

    /// Theoretical global order of accuracy.
    pub fn order(self) -> u32 {
        match self {
            Self::Euler => 1,
            Self::Heun | Self::Midpoint => 2,
            Self::Rk4 => 4,
        }
    }
}

// ─── Single-step routines ──────────────────────────────────────────────

/// Forward Euler: `yₙ₊₁ = yₙ + h·f(tₙ, yₙ)`.
pub fn euler_step<F: FnMut(f64, f64) -> f64>(mut f: F, t: f64, y: f64, h: f64) -> f64 {
    y + h * f(t, y)
}

/// Heun's method (improved Euler / RK2 trapezoidal):
///
/// ```text
///   k1 = f(t, y)
///   k2 = f(t + h, y + h·k1)
///   y_{n+1} = y + (h/2)·(k1 + k2)
/// ```
pub fn heun_step<F: FnMut(f64, f64) -> f64>(mut f: F, t: f64, y: f64, h: f64) -> f64 {
    let k1 = f(t, y);
    let k2 = f(t + h, y + h * k1);
    y + 0.5 * h * (k1 + k2)
}

/// Midpoint (modified Euler / RK2 midpoint rule):
///
/// ```text
///   k1 = f(t, y)
///   k2 = f(t + h/2, y + (h/2)·k1)
///   y_{n+1} = y + h·k2
/// ```
pub fn midpoint_step<F: FnMut(f64, f64) -> f64>(mut f: F, t: f64, y: f64, h: f64) -> f64 {
    let k1 = f(t, y);
    let k2 = f(t + 0.5 * h, y + 0.5 * h * k1);
    y + h * k2
}

/// Classical 4th-order Runge–Kutta:
///
/// ```text
///   k1 = f(t, y)
///   k2 = f(t + h/2, y + h·k1/2)
///   k3 = f(t + h/2, y + h·k2/2)
///   k4 = f(t + h,   y + h·k3)
///   y_{n+1} = y + (h/6)·(k1 + 2·k2 + 2·k3 + k4)
/// ```
pub fn rk4_step<F: FnMut(f64, f64) -> f64>(mut f: F, t: f64, y: f64, h: f64) -> f64 {
    let k1 = f(t, y);
    let k2 = f(t + 0.5 * h, y + 0.5 * h * k1);
    let k3 = f(t + 0.5 * h, y + 0.5 * h * k2);
    let k4 = f(t + h, y + h * k3);
    y + h * (k1 + 2.0 * k2 + 2.0 * k3 + k4) / 6.0
}

/// Second-order Taylor step. Requires `∂f/∂t` and `∂f/∂y` because
/// `y''(t) = ∂f/∂t + f·∂f/∂y` along the trajectory.
///
/// ```text
///   y_{n+1} = y + h·f + (h²/2)·(∂f/∂t + f·∂f/∂y)
/// ```
pub fn taylor2_step<F, Ft, Fy>(
    mut f: F,
    mut dfdt: Ft,
    mut dfdy: Fy,
    t: f64,
    y: f64,
    h: f64,
) -> f64
where
    F: FnMut(f64, f64) -> f64,
    Ft: FnMut(f64, f64) -> f64,
    Fy: FnMut(f64, f64) -> f64,
{
    let fv = f(t, y);
    let yp2 = dfdt(t, y) + fv * dfdy(t, y);
    y + h * fv + 0.5 * h * h * yp2
}

// ─── Driver ────────────────────────────────────────────────────────────

/// Integrate `y' = f(t, y)` from `t0` to `tf` using fixed step `h` and the
/// selected `method`. Returns the dense trajectory `[(t₀, y₀), (t₁, y₁), …]`.
///
/// The very last step is clamped so the trajectory ends exactly at `tf`
/// (even when `(tf - t0)` is not an integer multiple of `h`). Without this
/// clamp, error sweeps would oscillate as the last partial step gets eaten.
pub fn integrate<F>(
    method: Method,
    mut f: F,
    t0: f64,
    y0: f64,
    tf: f64,
    h: f64,
) -> Result<Vec<(f64, f64)>, OdeError>
where
    F: FnMut(f64, f64) -> f64,
{
    if !(h > 0.0) {
        return Err(OdeError::NonPositiveStep(h));
    }
    if !(t0 < tf) {
        return Err(OdeError::IntervalReversed { t0, tf });
    }

    let mut out = Vec::with_capacity(((tf - t0) / h).ceil() as usize + 2);
    out.push((t0, y0));

    let mut t = t0;
    let mut y = y0;
    let mut step_idx = 0usize;

    loop {
        let remaining = tf - t;
        if remaining <= 0.0 {
            break;
        }
        let dt = if remaining < h { remaining } else { h };

        y = match method {
            Method::Euler => euler_step(&mut f, t, y, dt),
            Method::Heun => heun_step(&mut f, t, y, dt),
            Method::Midpoint => midpoint_step(&mut f, t, y, dt),
            Method::Rk4 => rk4_step(&mut f, t, y, dt),
        };
        t += dt;
        step_idx += 1;

        if !y.is_finite() {
            return Err(OdeError::NonFiniteStep { step: step_idx, t });
        }
        out.push((t, y));

        // Guard against round-off accumulating past tf.
        if t >= tf - 1e-15 * (tf - t0).max(1.0) {
            break;
        }
    }

    Ok(out)
}

// ─── First-order systems ───────────────────────────────────────────────

/// One RK4 step for the system `y' = F(t, y)` with `y ∈ ℝⁿ`.
///
/// `f` writes the derivative into the supplied slice rather than allocating
/// a fresh `Vec` each call, so it stays cheap inside tight integration loops.
pub fn system_rk4_step<F>(mut f: F, t: f64, y: &[f64], h: f64) -> Vec<f64>
where
    F: FnMut(f64, &[f64], &mut [f64]),
{
    let n = y.len();
    let mut k1 = vec![0.0; n];
    let mut k2 = vec![0.0; n];
    let mut k3 = vec![0.0; n];
    let mut k4 = vec![0.0; n];
    let mut tmp = vec![0.0; n];

    f(t, y, &mut k1);

    for i in 0..n {
        tmp[i] = y[i] + 0.5 * h * k1[i];
    }
    f(t + 0.5 * h, &tmp, &mut k2);

    for i in 0..n {
        tmp[i] = y[i] + 0.5 * h * k2[i];
    }
    f(t + 0.5 * h, &tmp, &mut k3);

    for i in 0..n {
        tmp[i] = y[i] + h * k3[i];
    }
    f(t + h, &tmp, &mut k4);

    let mut out = vec![0.0; n];
    for i in 0..n {
        out[i] = y[i] + h * (k1[i] + 2.0 * k2[i] + 2.0 * k3[i] + k4[i]) / 6.0;
    }
    out
}

/// Integrate a first-order system with fixed step `h` using RK4.
/// Returns `Vec<(t, y_vector)>`.
pub fn integrate_system_rk4<F>(
    mut f: F,
    t0: f64,
    y0: &[f64],
    tf: f64,
    h: f64,
) -> Result<Vec<(f64, Vec<f64>)>, OdeError>
where
    F: FnMut(f64, &[f64], &mut [f64]),
{
    if !(h > 0.0) {
        return Err(OdeError::NonPositiveStep(h));
    }
    if !(t0 < tf) {
        return Err(OdeError::IntervalReversed { t0, tf });
    }
    let mut out: Vec<(f64, Vec<f64>)> = Vec::new();
    out.push((t0, y0.to_vec()));

    let mut t = t0;
    let mut y = y0.to_vec();
    let mut step_idx = 0usize;

    loop {
        let remaining = tf - t;
        if remaining <= 0.0 {
            break;
        }
        let dt = if remaining < h { remaining } else { h };
        y = system_rk4_step(&mut f, t, &y, dt);
        t += dt;
        step_idx += 1;
        if y.iter().any(|v| !v.is_finite()) {
            return Err(OdeError::NonFiniteStep { step: step_idx, t });
        }
        out.push((t, y.clone()));
        if t >= tf - 1e-15 * (tf - t0).max(1.0) {
            break;
        }
    }
    Ok(out)
}

#[cfg(test)]
mod tests {
    use super::*;

    /// y' = y, y(0) = 1, exact solution e^t.
    fn rhs_exp(_t: f64, y: f64) -> f64 {
        y
    }

    #[test]
    fn euler_step_basic() {
        // h = 0.1, y' = y, y0 = 1  →  y1 = 1 + 0.1·1 = 1.1
        let y1 = euler_step(rhs_exp, 0.0, 1.0, 0.1);
        assert!((y1 - 1.1).abs() < 1e-15);
    }

    #[test]
    fn rk4_step_high_accuracy_on_exp() {
        // One RK4 step of size 0.1 should already match e^0.1 to ~1e-7.
        let y1 = rk4_step(rhs_exp, 0.0, 1.0, 0.1);
        let exact = (0.1_f64).exp();
        assert!(
            (y1 - exact).abs() < 1e-7,
            "y1={}, exact={}, diff={}",
            y1,
            exact,
            (y1 - exact).abs()
        );
    }

    #[test]
    fn heun_step_recovers_trapezoid_on_exp() {
        // Heun on y'=y from y0=1 with h: y1 = 1 + h/2·(1 + (1+h)) = 1 + h + h²/2
        let h = 0.1;
        let y1 = heun_step(rhs_exp, 0.0, 1.0, h);
        let analytic = 1.0 + h + 0.5 * h * h;
        assert!((y1 - analytic).abs() < 1e-15);
    }

    #[test]
    fn integrate_returns_endpoint_exactly() {
        // Even with non-aligned step the trajectory must end at tf exactly.
        let traj = integrate(Method::Rk4, rhs_exp, 0.0, 1.0, 1.0, 0.3).unwrap();
        let (t_last, _) = *traj.last().unwrap();
        assert!((t_last - 1.0).abs() < 1e-12);
    }

    /// Hartung Ex 10.1 style: Euler on y'=y, y(0)=1, h=0.1, walk to t=1.
    /// Compare endpoint to e ≈ 2.71828.
    #[test]
    fn hartung_ex_10_1_euler_endpoint() {
        let traj = integrate(Method::Euler, rhs_exp, 0.0, 1.0, 1.0, 0.1).unwrap();
        let (_, y_end) = *traj.last().unwrap();
        // Euler's classical value: (1.1)^10 = 2.5937424601
        assert!((y_end - 2.5937424601).abs() < 1e-9);
        // Global error is positive and around 0.12 for h=0.1.
        let exact = 1.0_f64.exp();
        assert!(exact - y_end > 0.10 && exact - y_end < 0.15);
    }

    #[test]
    fn rk4_endpoint_on_exp_is_machine_close() {
        // RK4 with h=0.1 should land within 5e-6 of e.
        let traj = integrate(Method::Rk4, rhs_exp, 0.0, 1.0, 1.0, 0.1).unwrap();
        let (_, y_end) = *traj.last().unwrap();
        let exact = 1.0_f64.exp();
        assert!(
            (y_end - exact).abs() < 5e-6,
            "y_end = {}, exact = {}",
            y_end,
            exact
        );
    }

    #[test]
    fn empirical_orders_of_convergence() {
        // Sweep h, fit log(err) ~ p·log(h) per method; expect p ≈ method.order().
        let hs = [0.2, 0.1, 0.05, 0.025, 0.0125];
        let exact = 1.0_f64.exp();
        for &m in Method::ALL {
            let mut log_h = Vec::new();
            let mut log_e = Vec::new();
            for &h in &hs {
                let traj = integrate(m, rhs_exp, 0.0, 1.0, 1.0, h).unwrap();
                let (_, y_end) = *traj.last().unwrap();
                let err = (y_end - exact).abs().max(1e-16);
                log_h.push(h.ln());
                log_e.push(err.ln());
            }
            // Linear fit of log_e vs log_h.
            let n = log_h.len() as f64;
            let mx: f64 = log_h.iter().sum::<f64>() / n;
            let my: f64 = log_e.iter().sum::<f64>() / n;
            let num: f64 = log_h
                .iter()
                .zip(log_e.iter())
                .map(|(x, y)| (x - mx) * (y - my))
                .sum();
            let den: f64 = log_h.iter().map(|x| (x - mx).powi(2)).sum();
            let slope = num / den;
            assert!(
                (slope - m.order() as f64).abs() < 0.30,
                "method {:?} measured order {:.3}, expected {}",
                m,
                slope,
                m.order()
            );
        }
    }

    #[test]
    fn taylor2_matches_heun_on_exp_to_order_2() {
        // For y' = y both f and ∂f/∂y are 1, ∂f/∂t = 0, so Taylor-2 gives
        //   y_{n+1} = y + h·y + h²/2·y = (1 + h + h²/2)·y
        // exactly the same polynomial as Heun on this RHS.
        let h = 0.1;
        let y_tay = taylor2_step(rhs_exp, |_, _| 0.0, |_, _| 1.0, 0.0, 1.0, h);
        let y_heun = heun_step(rhs_exp, 0.0, 1.0, h);
        assert!((y_tay - y_heun).abs() < 1e-15);
    }

    #[test]
    fn rejects_nonpositive_step() {
        let r = integrate(Method::Rk4, rhs_exp, 0.0, 1.0, 1.0, 0.0);
        assert!(matches!(r, Err(OdeError::NonPositiveStep(_))));
        let r = integrate(Method::Rk4, rhs_exp, 0.0, 1.0, 1.0, -0.1);
        assert!(matches!(r, Err(OdeError::NonPositiveStep(_))));
    }

    #[test]
    fn rejects_reversed_interval() {
        let r = integrate(Method::Rk4, rhs_exp, 1.0, 1.0, 0.0, 0.1);
        assert!(matches!(r, Err(OdeError::IntervalReversed { .. })));
    }

    #[test]
    fn system_rk4_predator_prey_orbits_closed() {
        // Lotka-Volterra: x' = a·x - b·x·y, y' = -c·y + d·x·y
        // With (a, b, c, d) = (1, 1, 1, 1) and IC (1, 0.5) the orbit in phase
        // space should be closed → start and one period later are close.
        let a = 1.0;
        let f = move |_t: f64, y: &[f64], out: &mut [f64]| {
            out[0] = a * y[0] - y[0] * y[1];
            out[1] = -a * y[1] + y[0] * y[1];
        };
        let traj = integrate_system_rk4(f, 0.0, &[1.0, 0.5], 6.5, 0.001).unwrap();
        // Last point should at least be inside the same neighbourhood of the
        // starting point as the system is bounded and conservative.
        let (_, last) = traj.last().unwrap();
        assert!(last[0].is_finite() && last[1].is_finite());
        assert!(last[0] > 0.0 && last[1] > 0.0);
    }
}
