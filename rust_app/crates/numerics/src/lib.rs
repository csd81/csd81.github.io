//! Numerical primitives for the rust_app math engine.

pub mod calculus;
pub mod condition;
pub mod error;
pub mod factorization;
pub mod interpolation;
pub mod iterative;
pub mod least_squares;
pub mod linear;
pub mod matrix;
pub mod mesh;
pub mod norms;
pub mod ode;
pub mod optimize;
pub mod roots;

pub use calculus::{
    boole, composite_simpson, composite_trapezoid, diff_backward, diff_central, diff_central_5pt,
    diff_endpoint_3pt, diff_forward, diff_second, gauss_legendre, gauss_legendre_table, legendre,
    legendre_prime, midpoint, romberg, simpson, simpson_3_8, simpson_data, trapezoid,
    trapezoid_data, CalcError,
};
pub use condition::{
    cond_1, cond_inf, hilbert, invert, iterative_refinement, residual, ConditionError,
    RefinementOptions, RefinementReport,
};
pub use factorization::{
    chol_solve, det, lu_solve, CholeskyFactor, FactorError, LUFactor,
};
pub use interpolation::{
    divided_differences_table, lagrange_eval, BoundaryCondition, CubicSegment, CubicSpline,
    HermiteInterp, InterpError, NewtonInterp,
};
pub use least_squares::{
    fit_exponential, fit_line, fit_polynomial, fit_power, ExponentialFit, LSError, LineFit,
    PolyFit, PowerFit,
};
pub use error::{
    abs_error, exact_decimal_digits, horner, kahan_sum, machine_epsilon, naive_sum,
    one_minus_cos_stable, quadratic_roots_naive, quadratic_roots_stable, rel_error, sorted_sum,
};
pub use iterative::{
    gauss_seidel, is_diagonally_dominant, jacobi, IterativeError, IterativeOptions,
    IterativeReport,
};
pub use linear::{
    back_substitute, forward_substitute, solve_gauss, solve_partial_pivot,
    solve_scaled_partial_pivot, solve_tridiagonal, LinearError,
};
pub use matrix::{Matrix, MatrixError};
pub use mesh::{linspace, meshgrid, surface_eval};
pub use norms::{mat_norm_1, mat_norm_fro, mat_norm_inf, vec_norm_1, vec_norm_2, vec_norm_inf};
pub use ode::{
    euler_step, heun_step, integrate, integrate_system_rk4, midpoint_step, rk4_step,
    system_rk4_step, taylor2_step, Method as OdeMethod, OdeError,
};
pub use optimize::{
    golden_section, gradient_descent_constant, gradient_descent_optimal, gradient_solve_spd,
    nelder_mead, newton_minimize, numerical_gradient, numerical_hessian, simplex,
    GoldenSectionReport, OptimError, OptimReport, SimplexReport,
};
pub use roots::{bisection, false_position, fixed_point, newton, secant, SolverError, SolverReport};
