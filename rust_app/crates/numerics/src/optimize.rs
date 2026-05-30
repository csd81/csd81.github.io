//! Chapter 8 of Hartung — function minimization.
//!
//! Six algorithms, organized by what derivatives they need:
//!
//! | derivatives | method                          | dimensions | local order |
//! |-------------|---------------------------------|------------|-------------|
//! | none        | golden section search           | 1          | linear      |
//! | none        | simplex / Nelder-Mead           | n          | (heuristic) |
//! | gradient    | gradient descent (constant α)   | n          | linear      |
//! | gradient    | gradient descent (optimal α)    | n          | linear      |
//! | gradient    | gradient descent for SPD `Ax=b` | n          | linear      |
//! | Hessian     | Newton's method                 | n          | quadratic   |
//!
//! Every algorithm returns a rich `*Report` struct that carries the full
//! per-step history — the trail of iterates, the simplex polygons at each
//! step, etc. — which the UI uses to draw iteration paths over contour plots.

use thiserror::Error;

use crate::matrix::Matrix;

#[derive(Debug, Error, PartialEq)]
pub enum OptimError {
    #[error("interval requires a < b, got [{a}, {b}]")]
    BadInterval { a: f64, b: f64 },
    #[error("initial point has length {got}, expected {want}")]
    BadInitialPoint { got: usize, want: usize },
    #[error("initial simplex must have n+1 vertices for an n-dim problem; got {got} vertices in {dim}-dim")]
    BadSimplex { got: usize, dim: usize },
    #[error("max iterations ({max}) exceeded; last point: {last:?}")]
    MaxIterExceeded { max: usize, last: Vec<f64> },
    #[error("numerical issue at iter {iter}: {what}")]
    Numerical { iter: usize, what: String },
}

/// Cap the history length per report so a runaway run can't balloon memory.
pub const HISTORY_LIMIT: usize = 4096;

// ────────────────────────────────────────────────────────────────────────
// 8.2 — golden section search (1D, unimodal, derivative-free)
// ────────────────────────────────────────────────────────────────────────

#[derive(Debug, Clone)]
pub struct GoldenSectionReport {
    pub x_min: f64,
    pub f_min: f64,
    pub iterations: usize,
    /// One `(a_k, b_k, y_k, x_k, f(y_k), f(x_k))` row per iteration.
    pub history: Vec<[f64; 6]>,
}

/// Golden ratio constant: `r = (√5 − 1)/2`. Each iteration the interval shrinks by `r`.
pub const GOLDEN_R: f64 = 0.6180339887498949;

/// Golden section search (Hartung Algorithm 8.3).
///
/// `f` must be *unimodal* on `[a, b]` (single minimum). We don't (and can't)
/// verify that — if it isn't, the method finds *some* local minimum that may
/// not be the global one.
pub fn golden_section<F: FnMut(f64) -> f64>(
    mut f: F,
    a: f64,
    b: f64,
    tol: f64,
    max_iter: usize,
) -> Result<GoldenSectionReport, OptimError> {
    if !(a < b) {
        return Err(OptimError::BadInterval { a, b });
    }
    let r = GOLDEN_R;
    let mut a = a;
    let mut b = b;
    let mut x = a + r * (b - a);
    let mut y = a + (1.0 - r) * (b - a);
    let mut fx = f(x);
    let mut fy = f(y);

    let mut history = Vec::new();
    for k in 0..max_iter {
        if history.len() < HISTORY_LIMIT {
            history.push([a, b, y, x, fy, fx]);
        }
        if (b - a) < tol {
            let mid = 0.5 * (a + b);
            return Ok(GoldenSectionReport {
                x_min: mid,
                f_min: f(mid),
                iterations: k,
                history,
            });
        }
        if fx > fy {
            // Minimum is in [a, x]. Recycle y as the new x.
            b = x;
            x = y;
            fx = fy;
            y = a + (1.0 - r) * (b - a);
            fy = f(y);
        } else {
            // Minimum is in [y, b]. Recycle x as the new y.
            a = y;
            y = x;
            fy = fx;
            x = a + r * (b - a);
            fx = f(x);
        }
    }
    let mid = 0.5 * (a + b);
    Err(OptimError::MaxIterExceeded {
        max: max_iter,
        last: vec![mid],
    })
}

/// Theoretical number of iterations needed to reduce the interval to size `eps`:
/// `n ≥ log(eps/(b−a)) / log(r)` (book formula 8.4).
pub fn golden_section_step_count(a: f64, b: f64, eps: f64) -> usize {
    ((eps / (b - a)).ln() / GOLDEN_R.ln()).ceil() as usize
}

// ────────────────────────────────────────────────────────────────────────
// 8.3 — simplex method and Nelder-Mead variant
// ────────────────────────────────────────────────────────────────────────

#[derive(Debug, Clone)]
pub struct SimplexReport {
    /// Final best vertex (lowest f value).
    pub x_best: Vec<f64>,
    pub f_best: f64,
    pub iterations: usize,
    pub converged: bool,
    /// Per-iteration snapshot of every simplex vertex. `history[k][j]` is the
    /// `j`-th vertex of the simplex *after* step `k`. Used to animate the
    /// shrinking-triangle pictures from book figures 8.4 / 8.5.
    pub history: Vec<Vec<Vec<f64>>>,
}

/// Book's plain simplex method (§8.3) — reflect-or-shrink.
///
/// At each step:
/// * Find worst vertex `x^(j)` (largest `f`).
/// * Reflect through centroid of the remaining `n` vertices: `x_r = 2·x_c − x^(j)`.
/// * If `f(x_r) < f(x^(j))`: accept the reflection.
/// * Otherwise: shrink the simplex toward its best vertex by half.
///
/// Stopping criterion: standard deviation of `f` values across the simplex.
pub fn simplex<F: FnMut(&[f64]) -> f64>(
    mut f: F,
    initial: &[Vec<f64>],
    tol: f64,
    max_iter: usize,
) -> Result<SimplexReport, OptimError> {
    let n_vertices = initial.len();
    if n_vertices < 2 {
        return Err(OptimError::BadSimplex {
            got: n_vertices,
            dim: initial.first().map(|v| v.len()).unwrap_or(0),
        });
    }
    let dim = initial[0].len();
    if n_vertices != dim + 1 {
        return Err(OptimError::BadSimplex {
            got: n_vertices,
            dim,
        });
    }

    let mut vs: Vec<Vec<f64>> = initial.iter().cloned().collect();
    let mut fs: Vec<f64> = vs.iter().map(|v| f(v)).collect();

    let mut history = Vec::new();
    if history.len() < HISTORY_LIMIT {
        history.push(vs.clone());
    }

    for k in 1..=max_iter {
        // Worst vertex index.
        let j = (0..n_vertices)
            .max_by(|&a, &b| fs[a].partial_cmp(&fs[b]).unwrap())
            .unwrap();
        // Centroid of the others.
        let mut x_c = vec![0.0; dim];
        for (i, v) in vs.iter().enumerate() {
            if i == j {
                continue;
            }
            for d in 0..dim {
                x_c[d] += v[d];
            }
        }
        for d in 0..dim {
            x_c[d] /= dim as f64;
        }
        // Reflect worst through centroid.
        let mut x_r = vec![0.0; dim];
        for d in 0..dim {
            x_r[d] = 2.0 * x_c[d] - vs[j][d];
        }
        let f_r = f(&x_r);

        if f_r < fs[j] {
            vs[j] = x_r;
            fs[j] = f_r;
        } else {
            // Shrink toward best vertex.
            let k_best = (0..n_vertices)
                .min_by(|&a, &b| fs[a].partial_cmp(&fs[b]).unwrap())
                .unwrap();
            for i in 0..n_vertices {
                if i == k_best {
                    continue;
                }
                for d in 0..dim {
                    vs[i][d] = vs[k_best][d] + 0.5 * (vs[i][d] - vs[k_best][d]);
                }
                fs[i] = f(&vs[i]);
            }
        }

        if history.len() < HISTORY_LIMIT {
            history.push(vs.clone());
        }

        // Stopping: std-dev of f values across the simplex.
        let mean = fs.iter().sum::<f64>() / n_vertices as f64;
        let var = fs.iter().map(|v| (v - mean).powi(2)).sum::<f64>() / n_vertices as f64;
        if var.sqrt() < tol {
            return Ok(report(vs, fs, k, true, history));
        }
    }
    Ok(report(vs, fs, max_iter, false, history))
}

/// Nelder-Mead method (book §8.3). Adds *expansion* and *contraction* steps
/// to the basic simplex method.
///
/// Parameters: `alpha > 1` controls expansion stride (book uses 1.4),
/// `0 < beta < 1` controls contraction (book uses 0.7). Smaller `beta` means
/// more aggressive contraction.
pub fn nelder_mead<F: FnMut(&[f64]) -> f64>(
    mut f: F,
    initial: &[Vec<f64>],
    alpha: f64,
    beta: f64,
    tol: f64,
    max_iter: usize,
) -> Result<SimplexReport, OptimError> {
    let n_vertices = initial.len();
    if n_vertices < 2 {
        return Err(OptimError::BadSimplex {
            got: n_vertices,
            dim: initial.first().map(|v| v.len()).unwrap_or(0),
        });
    }
    let dim = initial[0].len();
    if n_vertices != dim + 1 {
        return Err(OptimError::BadSimplex {
            got: n_vertices,
            dim,
        });
    }

    let mut vs: Vec<Vec<f64>> = initial.to_vec();
    let mut fs: Vec<f64> = vs.iter().map(|v| f(v)).collect();
    let mut history = Vec::new();
    if history.len() < HISTORY_LIMIT {
        history.push(vs.clone());
    }

    for k in 1..=max_iter {
        // Sort vertices by f ascending: best first, worst last.
        let mut order: Vec<usize> = (0..n_vertices).collect();
        order.sort_by(|&a, &b| fs[a].partial_cmp(&fs[b]).unwrap());
        vs = order.iter().map(|&i| vs[i].clone()).collect();
        fs = order.iter().map(|&i| fs[i]).collect();

        let n_idx = n_vertices - 1; // index of worst vertex
        // Centroid of all but worst.
        let mut x_c = vec![0.0; dim];
        for i in 0..n_idx {
            for d in 0..dim {
                x_c[d] += vs[i][d];
            }
        }
        for d in 0..dim {
            x_c[d] /= n_idx as f64;
        }
        // Reflection.
        let mut x_r = vec![0.0; dim];
        for d in 0..dim {
            x_r[d] = 2.0 * x_c[d] - vs[n_idx][d];
        }
        let f_r = f(&x_r);

        if f_r >= fs[0] && f_r < fs[n_idx - 1] {
            // Case (i): replace worst with reflection.
            vs[n_idx] = x_r;
            fs[n_idx] = f_r;
        } else if f_r < fs[0] {
            // Case (ii): try expansion.
            let mut x_e = vec![0.0; dim];
            for d in 0..dim {
                x_e[d] = x_c[d] + alpha * (x_r[d] - x_c[d]);
            }
            let f_e = f(&x_e);
            if f_e < fs[0] {
                vs[n_idx] = x_e;
                fs[n_idx] = f_e;
            } else {
                vs[n_idx] = x_r;
                fs[n_idx] = f_r;
            }
        } else {
            // Case (iii): contract.
            let mut x_z = vec![0.0; dim];
            if fs[n_idx] < f_r {
                for d in 0..dim {
                    x_z[d] = x_c[d] - beta * (x_r[d] - x_c[d]);
                }
            } else {
                for d in 0..dim {
                    x_z[d] = x_c[d] + beta * (x_r[d] - x_c[d]);
                }
            }
            let f_z = f(&x_z);
            if f_z < fs[n_idx].min(f_r) {
                vs[n_idx] = x_z;
                fs[n_idx] = f_z;
            } else {
                // Shrink to half from best vertex.
                let best = vs[0].clone();
                for i in 1..n_vertices {
                    for d in 0..dim {
                        vs[i][d] = best[d] + 0.5 * (vs[i][d] - best[d]);
                    }
                    fs[i] = f(&vs[i]);
                }
            }
        }

        if history.len() < HISTORY_LIMIT {
            history.push(vs.clone());
        }

        let mean = fs.iter().sum::<f64>() / n_vertices as f64;
        let var = fs.iter().map(|v| (v - mean).powi(2)).sum::<f64>() / n_vertices as f64;
        if var.sqrt() < tol {
            return Ok(report(vs, fs, k, true, history));
        }
    }
    Ok(report(vs, fs, max_iter, false, history))
}

fn report(
    vs: Vec<Vec<f64>>,
    fs: Vec<f64>,
    iterations: usize,
    converged: bool,
    history: Vec<Vec<Vec<f64>>>,
) -> SimplexReport {
    let k_best = (0..fs.len())
        .min_by(|&a, &b| fs[a].partial_cmp(&fs[b]).unwrap())
        .unwrap();
    SimplexReport {
        x_best: vs[k_best].clone(),
        f_best: fs[k_best],
        iterations,
        converged,
        history,
    }
}

// ────────────────────────────────────────────────────────────────────────
// 8.4 — gradient descent
// ────────────────────────────────────────────────────────────────────────

#[derive(Debug, Clone)]
pub struct OptimReport {
    pub x: Vec<f64>,
    pub f: f64,
    pub iterations: usize,
    pub converged: bool,
    /// Per-iteration position. `history[0]` is the initial point.
    pub history: Vec<Vec<f64>>,
    pub f_history: Vec<f64>,
}

/// Constant-step gradient descent (book §8.4, `α_k = h / ‖f′‖`).
///
/// Stops when consecutive iterates differ by less than `tol` in `‖·‖∞`.
pub fn gradient_descent_constant<F, G>(
    mut f: F,
    mut grad: G,
    x0: &[f64],
    h: f64,
    tol: f64,
    max_iter: usize,
) -> Result<OptimReport, OptimError>
where
    F: FnMut(&[f64]) -> f64,
    G: FnMut(&[f64]) -> Vec<f64>,
{
    let mut x = x0.to_vec();
    let mut history = vec![x.clone()];
    let mut f_history = vec![f(&x)];
    for k in 1..=max_iter {
        let g = grad(&x);
        let g_norm = euclidean_norm(&g);
        if g_norm < 1e-30 {
            // Already at a stationary point.
            return Ok(OptimReport {
                f: f(&x),
                x,
                iterations: k - 1,
                converged: true,
                history,
                f_history,
            });
        }
        let alpha = h / g_norm;
        let mut x_next = vec![0.0; x.len()];
        for i in 0..x.len() {
            x_next[i] = x[i] - alpha * g[i];
        }
        let diff = max_diff_inf(&x_next, &x);
        x = x_next;
        if history.len() < HISTORY_LIMIT {
            history.push(x.clone());
            f_history.push(f(&x));
        }
        if diff < tol {
            return Ok(OptimReport {
                f: f(&x),
                x,
                iterations: k,
                converged: true,
                history,
                f_history,
            });
        }
    }
    Ok(OptimReport {
        f: f(&x),
        x: x.clone(),
        iterations: max_iter,
        converged: false,
        history,
        f_history,
    })
}

/// Optimal-step gradient descent (book §8.4). Selects `α_k` by solving the
/// 1D minimization `φ_k(t) = f(x − t·∇f(x))` along the negative-gradient
/// ray; we use [`golden_section`] for that inner search.
pub fn gradient_descent_optimal<F, G>(
    mut f: F,
    mut grad: G,
    x0: &[f64],
    tol: f64,
    max_iter: usize,
    line_search_max: f64,
) -> Result<OptimReport, OptimError>
where
    F: FnMut(&[f64]) -> f64,
    G: FnMut(&[f64]) -> Vec<f64>,
{
    let mut x = x0.to_vec();
    let mut history = vec![x.clone()];
    let mut f_history = vec![f(&x)];

    for k in 1..=max_iter {
        let g = grad(&x);
        let g_norm = euclidean_norm(&g);
        if g_norm < 1e-30 {
            return Ok(OptimReport {
                f: f(&x),
                x,
                iterations: k - 1,
                converged: true,
                history,
                f_history,
            });
        }
        // φ(t) = f(x − t·g)
        let x_clone = x.clone();
        let g_clone = g.clone();
        let mut phi = |t: f64| {
            let pt: Vec<f64> = x_clone
                .iter()
                .zip(g_clone.iter())
                .map(|(xi, gi)| xi - t * gi)
                .collect();
            f(&pt)
        };
        let gs = golden_section(&mut phi, 0.0, line_search_max, 1e-10, 80)?;
        let alpha = gs.x_min;

        let mut x_next = vec![0.0; x.len()];
        for i in 0..x.len() {
            x_next[i] = x[i] - alpha * g[i];
        }
        let diff = max_diff_inf(&x_next, &x);
        x = x_next;
        if history.len() < HISTORY_LIMIT {
            history.push(x.clone());
            f_history.push(f(&x));
        }
        if diff < tol {
            return Ok(OptimReport {
                f: f(&x),
                x,
                iterations: k,
                converged: true,
                history,
                f_history,
            });
        }
    }
    Ok(OptimReport {
        f: f(&x),
        x: x.clone(),
        iterations: max_iter,
        converged: false,
        history,
        f_history,
    })
}

// ────────────────────────────────────────────────────────────────────────
// 8.5 — gradient method for SPD linear systems
// ────────────────────────────────────────────────────────────────────────

/// Iteratively solve `A x = b` (with `A` symmetric positive-definite) by
/// minimizing the quadratic `g(x) = ½xᵀAx − bᵀx` via the *optimal* gradient
/// method (Hartung eqs. 8.11–8.13).
///
/// Closed form for the step:  `α_k = (rᵀr) / (rᵀAr)`  where `r = b − Ax`.
pub fn gradient_solve_spd(
    a: &Matrix,
    b: &[f64],
    x0: &[f64],
    tol: f64,
    max_iter: usize,
) -> Result<OptimReport, OptimError> {
    let n = a.rows();
    if a.cols() != n || b.len() != n || x0.len() != n {
        return Err(OptimError::BadInitialPoint {
            got: x0.len(),
            want: n,
        });
    }
    let mut x = x0.to_vec();
    let mut history = vec![x.clone()];
    let f_init = quadratic_value(a, b, &x);
    let mut f_history = vec![f_init];

    for k in 1..=max_iter {
        let ax = matvec(a, &x);
        let r: Vec<f64> = (0..n).map(|i| b[i] - ax[i]).collect();
        let rtr: f64 = r.iter().map(|v| v * v).sum();
        if rtr.sqrt() < tol {
            return Ok(OptimReport {
                f: quadratic_value(a, b, &x),
                x,
                iterations: k - 1,
                converged: true,
                history,
                f_history,
            });
        }
        let ar = matvec(a, &r);
        let rtar: f64 = r.iter().zip(ar.iter()).map(|(a, b)| a * b).sum();
        if rtar <= 0.0 {
            return Err(OptimError::Numerical {
                iter: k,
                what: format!("rᵀAr ≤ 0 ({rtar:e}) — A may not be positive definite"),
            });
        }
        let alpha = rtr / rtar;
        for i in 0..n {
            x[i] += alpha * r[i];
        }
        if history.len() < HISTORY_LIMIT {
            history.push(x.clone());
            f_history.push(quadratic_value(a, b, &x));
        }
    }
    Ok(OptimReport {
        f: quadratic_value(a, b, &x),
        x: x.clone(),
        iterations: max_iter,
        converged: false,
        history,
        f_history,
    })
}

fn quadratic_value(a: &Matrix, b: &[f64], x: &[f64]) -> f64 {
    let n = x.len();
    let ax = matvec(a, x);
    let mut s = 0.0;
    for i in 0..n {
        s += 0.5 * x[i] * ax[i] - b[i] * x[i];
    }
    s
}

// ────────────────────────────────────────────────────────────────────────
// 8.6 — Newton's method for minimization
// ────────────────────────────────────────────────────────────────────────

/// Newton's method (book eq. 8.15):  `p^(k+1) = p^(k) − H(p^(k))⁻¹ · ∇f(p^(k))`.
///
/// Quadratic convergence when the Hessian is positive definite near the
/// minimum (Thm 8.13). Fails (or stagnates) when the Hessian is singular or
/// indefinite — we surface that via `OptimError::Numerical`.
pub fn newton_minimize<F, G, H>(
    mut f: F,
    mut grad: G,
    mut hessian: H,
    x0: &[f64],
    tol: f64,
    max_iter: usize,
) -> Result<OptimReport, OptimError>
where
    F: FnMut(&[f64]) -> f64,
    G: FnMut(&[f64]) -> Vec<f64>,
    H: FnMut(&[f64]) -> Matrix,
{
    let mut x = x0.to_vec();
    let mut history = vec![x.clone()];
    let mut f_history = vec![f(&x)];

    for k in 1..=max_iter {
        let g = grad(&x);
        let h_mat = hessian(&x);
        // Solve H · step = g
        let step = match crate::linear::solve_partial_pivot(&h_mat, &g) {
            Ok(s) => s,
            Err(e) => {
                return Err(OptimError::Numerical {
                    iter: k,
                    what: format!("Hessian solve failed: {e}"),
                })
            }
        };
        let mut x_next = vec![0.0; x.len()];
        for i in 0..x.len() {
            x_next[i] = x[i] - step[i];
        }
        let diff = max_diff_inf(&x_next, &x);
        x = x_next;
        if history.len() < HISTORY_LIMIT {
            history.push(x.clone());
            f_history.push(f(&x));
        }
        if diff < tol {
            return Ok(OptimReport {
                f: f(&x),
                x,
                iterations: k,
                converged: true,
                history,
                f_history,
            });
        }
    }
    Ok(OptimReport {
        f: f(&x),
        x: x.clone(),
        iterations: max_iter,
        converged: false,
        history,
        f_history,
    })
}

// ────────────────────────────────────────────────────────────────────────
// Numerical gradient / Hessian helpers
// ────────────────────────────────────────────────────────────────────────

/// Central-difference numerical gradient: `(f(x + h·eᵢ) − f(x − h·eᵢ)) / (2h)`.
pub fn numerical_gradient<F: FnMut(&[f64]) -> f64>(mut f: F, x: &[f64], h: f64) -> Vec<f64> {
    let n = x.len();
    let mut g = vec![0.0; n];
    let mut xp = x.to_vec();
    for i in 0..n {
        let xi = x[i];
        xp[i] = xi + h;
        let fp = f(&xp);
        xp[i] = xi - h;
        let fm = f(&xp);
        xp[i] = xi;
        g[i] = (fp - fm) / (2.0 * h);
    }
    g
}

/// Central-difference numerical Hessian. Symmetric output.
///
/// `H_ii = (f(x+h·eᵢ) − 2f(x) + f(x−h·eᵢ)) / h²`
/// `H_ij = (f(x+h·eᵢ+h·eⱼ) − f(x+h·eᵢ−h·eⱼ) − f(x−h·eᵢ+h·eⱼ) + f(x−h·eᵢ−h·eⱼ)) / (4h²)`
pub fn numerical_hessian<F: FnMut(&[f64]) -> f64>(mut f: F, x: &[f64], h: f64) -> Matrix {
    let n = x.len();
    let fx = f(x);
    let mut h_mat = Matrix::zeros(n, n);
    let mut xp = x.to_vec();
    for i in 0..n {
        // Diagonal.
        xp[i] = x[i] + h;
        let fpp = f(&xp);
        xp[i] = x[i] - h;
        let fmm = f(&xp);
        xp[i] = x[i];
        h_mat.set(i, i, (fpp - 2.0 * fx + fmm) / (h * h)).unwrap();
        // Off-diagonals.
        for j in (i + 1)..n {
            xp[i] = x[i] + h;
            xp[j] = x[j] + h;
            let f_pp = f(&xp);
            xp[j] = x[j] - h;
            let f_pm = f(&xp);
            xp[i] = x[i] - h;
            let f_mm = f(&xp);
            xp[j] = x[j] + h;
            let f_mp = f(&xp);
            xp[i] = x[i];
            xp[j] = x[j];
            let val = (f_pp - f_pm - f_mp + f_mm) / (4.0 * h * h);
            h_mat.set(i, j, val).unwrap();
            h_mat.set(j, i, val).unwrap();
        }
    }
    h_mat
}

// ────────────────────────────────────────────────────────────────────────
// Small numeric utilities
// ────────────────────────────────────────────────────────────────────────

fn euclidean_norm(v: &[f64]) -> f64 {
    let s: f64 = v.iter().map(|x| x * x).sum();
    s.sqrt()
}

fn max_diff_inf(a: &[f64], b: &[f64]) -> f64 {
    a.iter()
        .zip(b.iter())
        .fold(0.0_f64, |acc, (x, y)| acc.max((x - y).abs()))
}

fn matvec(a: &Matrix, x: &[f64]) -> Vec<f64> {
    let n = a.rows();
    let m = a.cols();
    let mut out = vec![0.0; n];
    for i in 0..n {
        let mut s = 0.0;
        for j in 0..m {
            s += a.get(i, j).unwrap() * x[j];
        }
        out[i] = s;
    }
    out
}

#[cfg(test)]
mod tests {
    use super::*;

    fn close(a: f64, b: f64, tol: f64) -> bool {
        (a - b).abs() <= tol
    }

    // Hartung Example 8.6/8.7/8.9/8.14 — the running banana-like target.
    fn book_banana(x: &[f64]) -> f64 {
        let (a, b) = (x[0], x[1]);
        (a * a - 2.0 * b).powi(2) + 2.0 * (a - 1.0).powi(2)
    }

    fn book_banana_grad(x: &[f64]) -> Vec<f64> {
        let (a, b) = (x[0], x[1]);
        let u = a * a - 2.0 * b;
        // df/da = 2u · 2a + 4(a−1) = 4au + 4(a−1)
        // df/db = 2u · (−2) = −4u
        vec![4.0 * a * u + 4.0 * (a - 1.0), -4.0 * u]
    }

    fn book_banana_hessian(x: &[f64]) -> Matrix {
        let (a, b) = (x[0], x[1]);
        let u = a * a - 2.0 * b;
        // ∂²/∂a² = 4u + 8a² + 4
        // ∂²/∂b² = 8
        // ∂²/∂a∂b = −8a
        Matrix::new(
            2,
            2,
            vec![4.0 * u + 8.0 * a * a + 4.0, -8.0 * a, -8.0 * a, 8.0],
        )
    }

    // ─── Golden section ─────────────────────────────────────────────────

    #[test]
    fn golden_section_book_example_8_5() {
        // f(x) = x² − 0.8x + 1, minimum at x = 0.4, on [−1, 2].
        let f = |x: f64| x * x - 0.8 * x + 1.0;
        let r = golden_section(f, -1.0, 2.0, 0.005, 50).unwrap();
        // Book reports last interval [0.3977741449, 0.4013328688]; midpoint 0.3995535068.
        assert!(close(r.x_min, 0.4, 0.005));
        // Book reports 13–14 iterations needed.
        assert!(r.iterations <= 16, "iter = {}", r.iterations);
    }

    #[test]
    fn golden_section_step_count_matches_book() {
        // [a, b] = [-1, 2], eps = 0.005 -> n >= 13.29
        let n = golden_section_step_count(-1.0, 2.0, 0.005);
        assert!(n >= 13 && n <= 14, "got {n}");
    }

    #[test]
    fn golden_section_rejects_reversed_interval() {
        let f = |x: f64| x * x;
        let err = golden_section(f, 1.0, 0.0, 1e-6, 50).unwrap_err();
        assert!(matches!(err, OptimError::BadInterval { .. }));
    }

    // ─── Simplex / Nelder-Mead ──────────────────────────────────────────

    #[test]
    fn simplex_book_example_8_6() {
        // Initial simplex vertices (−2, 4), (−1, 4), (−1.5, 5).
        let initial = vec![vec![-2.0, 4.0], vec![-1.0, 4.0], vec![-1.5, 5.0]];
        let r = simplex(book_banana, &initial, 1e-3, 200).unwrap();
        // Book reports 25th simplex center ≈ (0.9063, 0.3542), f ≈ 0.0303.
        // We accept reasonable proximity to the true minimum (1, 0.5).
        assert!(r.f_best < 0.1, "best f = {}", r.f_best);
        assert!((r.x_best[0] - 1.0).abs() < 0.3);
        assert!((r.x_best[1] - 0.5).abs() < 0.3);
        assert!(!r.history.is_empty());
    }

    #[test]
    fn nelder_mead_book_example_8_7() {
        let initial = vec![vec![-2.0, 4.0], vec![-1.0, 4.0], vec![-1.5, 5.0]];
        // Book: α = 1.4, β = 0.7.
        let r = nelder_mead(book_banana, &initial, 1.4, 0.7, 1e-4, 100).unwrap();
        // Book Table 8.3 row 17 center ≈ (1.0071, 0.5929), f ≈ 0.0295.
        assert!(r.f_best < 0.1);
    }

    #[test]
    fn nelder_mead_rejects_wrong_simplex_size() {
        // Two vertices in a 2D problem — should reject (need 3).
        let initial = vec![vec![0.0, 0.0], vec![1.0, 0.0]];
        let err = nelder_mead(book_banana, &initial, 1.4, 0.7, 1e-4, 100).unwrap_err();
        assert!(matches!(err, OptimError::BadSimplex { got: 2, dim: 2 }));
    }

    // ─── Gradient descent ───────────────────────────────────────────────

    #[test]
    fn gradient_descent_constant_makes_progress() {
        // Book Example 8.9 uses α = 0.3/‖∇f‖. Starting at (−1, 4) it slowly
        // approaches (1, 0.5). We just verify it shrinks the objective.
        let r = gradient_descent_constant(
            book_banana,
            book_banana_grad,
            &[-1.0, 4.0],
            0.1,
            1e-6,
            300,
        )
        .unwrap();
        let f0 = book_banana(&[-1.0, 4.0]);
        assert!(r.f < f0);
        // Step count history must be recorded.
        assert!(!r.history.is_empty());
    }

    #[test]
    fn gradient_descent_optimal_beats_constant_step() {
        let r_const = gradient_descent_constant(
            book_banana,
            book_banana_grad,
            &[0.5, 3.5],
            0.1,
            1e-8,
            500,
        )
        .unwrap();
        let r_opt = gradient_descent_optimal(
            book_banana,
            book_banana_grad,
            &[0.5, 3.5],
            1e-8,
            500,
            5.0,
        )
        .unwrap();
        // Optimal step should reach a smaller f.
        assert!(r_opt.f <= r_const.f + 1e-6);
    }

    // ─── Gradient method for SPD linear systems ─────────────────────────

    /// Book Example 8.12: solve A x = b with A SPD; true solution (−1, 2, 0).
    #[test]
    fn gradient_solve_spd_book_example_8_12() {
        let a = Matrix::new(3, 3, vec![4.0, 2.0, -1.0, 2.0, 5.0, 0.0, -1.0, 0.0, 3.0]);
        let b = vec![0.0, 8.0, 1.0];
        let r = gradient_solve_spd(&a, &b, &[3.0, 3.0, 3.0], 1e-6, 100).unwrap();
        let truth = [-1.0, 2.0, 0.0];
        for (got, want) in r.x.iter().zip(truth.iter()) {
            assert!((got - want).abs() < 1e-3, "got {:?}", r.x);
        }
    }

    // ─── Newton's method ────────────────────────────────────────────────

    #[test]
    fn newton_book_example_8_14() {
        // Book Table 8.5: starting at (−1, 4), converges in ~5 iterations.
        let r = newton_minimize(
            book_banana,
            book_banana_grad,
            book_banana_hessian,
            &[-1.0, 4.0],
            1e-10,
            50,
        )
        .unwrap();
        assert!((r.x[0] - 1.0).abs() < 1e-4, "got {:?}", r.x);
        assert!((r.x[1] - 0.5).abs() < 1e-4);
        assert!(r.iterations <= 10);
    }

    #[test]
    fn newton_one_step_for_quadratic() {
        // A quadratic with PD Hessian: f(x,y) = (x−1)² + (y+2)² + 5.
        // Newton's method lands on the minimum after one *Newton step* — but
        // takes one more iteration to *detect* convergence (the second step
        // is essentially zero). So we check the *position* exactly, and
        // expect ≤ 2 iterations recorded.
        let f = |x: &[f64]| (x[0] - 1.0).powi(2) + (x[1] + 2.0).powi(2) + 5.0;
        let g = |x: &[f64]| vec![2.0 * (x[0] - 1.0), 2.0 * (x[1] + 2.0)];
        let h = |_x: &[f64]| Matrix::new(2, 2, vec![2.0, 0.0, 0.0, 2.0]);
        let r = newton_minimize(f, g, h, &[10.0, 10.0], 1e-12, 5).unwrap();
        assert!(r.iterations <= 2);
        assert!((r.x[0] - 1.0).abs() < 1e-12);
        assert!((r.x[1] + 2.0).abs() < 1e-12);
        // Position after one Newton step is exact (history[1] is the minimum).
        assert!((r.history[1][0] - 1.0).abs() < 1e-12);
        assert!((r.history[1][1] + 2.0).abs() < 1e-12);
    }

    // ─── Numerical gradient / Hessian ───────────────────────────────────

    #[test]
    fn numerical_gradient_matches_analytic() {
        let x = vec![0.7, -1.3];
        let g_num = numerical_gradient(book_banana, &x, 1e-5);
        let g_ana = book_banana_grad(&x);
        for (a, b) in g_num.iter().zip(g_ana.iter()) {
            assert!((a - b).abs() < 1e-5);
        }
    }

    #[test]
    fn numerical_hessian_matches_analytic() {
        let x = vec![0.7, -1.3];
        let h_num = numerical_hessian(book_banana, &x, 1e-3);
        let h_ana = book_banana_hessian(&x);
        for i in 0..2 {
            for j in 0..2 {
                let a = h_num.get(i, j).unwrap();
                let b = h_ana.get(i, j).unwrap();
                assert!((a - b).abs() < 1e-3, "H[{i},{j}]: {a} vs {b}");
            }
        }
    }
}
