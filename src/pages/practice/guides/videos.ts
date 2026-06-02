/**
 * Per-subsection lecture videos, served from public/videos/ (GITIGNORED — the
 * files are ~1.8 GB, too large to commit, and one exceeds GitHub's 100 MB limit).
 *
 * Because they live under public/videos/, the local dev/preview server serves
 * each at /videos/<base>.mp4 (same origin → no CORS / mixed-content issues). They
 * are gitignored, so the GitHub Pages build never sees them and the public site
 * does not ship them; the 🎬 Video block simply shows nothing there.
 *
 * Values may also be 'yt:<id>' (YouTube embed) or an absolute http(s) URL.
 */
export const SUBSECTION_VIDEOS: Record<string, string> = {
  "01_01_The_Main_Objective_and_Notions_of_Numerical_Analysis": "/videos/01_01_The_Main_Objective_and_Notions_of_Numerical_Analysis.mp4",
  "01_02_Computer_Representation_of_Integers_and_Reals": "/videos/01_02_Computer_Representation_of_Integers_and_Reals.mp4",
  "01_03_Error_Analysis": "/videos/01_03_Error_Analysis.mp4",
  "01_04_The_Consequences_of_the_Floating_Point_Arithmetic": "/videos/01_04_The_Consequences_of_the_Floating_Point_Arithmetic.mp4",
  "02_02_Fixed_Point_Iteration": "/videos/02_02_Fixed_Point_Iteration.mp4",
  "02_03_Bisection_Method": "/videos/02_03_Bisection_Method.mp4",
  "02_04_Method_of_False_Position": "/videos/02_04_Method_of_False_Position.mp4",
  "02_05_Newton_s_Method": "/videos/02_05_Newton_s_Method.mp4",
  "02_06_Secant_Method": "/videos/02_06_Secant_Method.mp4",
  "02_07_Order_of_Convergence": "/videos/02_07_Order_of_Convergence.mp4",
  "02_08_Stopping_Criteria_of_Iterations": "/videos/02_08_Stopping_Criteria_of_Iterations.mp4",
  "02_09_Review_of_Multivariable_Calculus": "/videos/02_09_Review_of_Multivariable_Calculus.mp4",
  "02_10_Vector_and_Matrix_Norms_and_Convergence": "/videos/02_10_Vector_and_Matrix_Norms_and_Convergence.mp4",
  "02_11_Fixed_Point_Iteration_in_dimension": "/videos/02_11_Fixed_Point_Iteration_in_dimension.mp4",
  "02_12_Newton_s_Method_in_dimensions": "/videos/02_12_Newton_s_Method_in_dimensions.mp4",
  "02_13_Quasi_Newton_Methods_Broyden_s_Method": "/videos/02_13_Quasi_Newton_Methods_Broyden_s_Method.mp4",
  "03_02_01_gaussian_elimination_pivoting_strategies_partial_pivoting": "/videos/03_02_01_gaussian_elimination_pivoting_strategies_partial_pivoting.mp4",
  "03_02_02_gaussian_elimination_pivoting_strategies_complete_pivoting": "/videos/03_02_02_gaussian_elimination_pivoting_strategies_complete_pivoting.mp4",
  "03_02_Triangular_Systems": "/videos/03_02_Triangular_Systems.mp4",
  "03_03_Gaussian_Elimination_Pivoting_Strategies": "/videos/03_03_Gaussian_Elimination_Pivoting_Strategies.mp4",
  "03_04_Gauss_Jordan_Elimination": "/videos/03_04_Gauss_Jordan_Elimination.mp4",
  "03_05_Tridiagonal_Linear_Systems": "/videos/03_05_Tridiagonal_Linear_Systems.mp4",
  "03_06_Simultaneous_Linear_Systems": "/videos/03_06_Simultaneous_Linear_Systems.mp4",
  "03_07_Matrix_Inversion_and_Determinants": "/videos/03_07_Matrix_Inversion_and_Determinants.mp4",
  "04_01_Linear_Fixed_Point_Iteration": "/videos/04_01_Linear_Fixed_Point_Iteration.mp4",
  "04_02_Jacobi_Iteration": "/videos/04_02_Jacobi_Iteration.mp4",
  "04_03_Gauss_Seidel_Iteration": "/videos/04_03_Gauss_Seidel_Iteration.mp4",
  "04_04_Error_Bounds_and_Iterative_Refinement": "/videos/04_04_Error_Bounds_and_Iterative_Refinement.mp4",
  "04_05_Perturbation_of_Linear_Systems": "/videos/04_05_Perturbation_of_Linear_Systems.mp4",
  "05_01_LU_Factorization": "/videos/05_01_LU_Factorization.mp4",
  "05_02_Cholesky_Factorization": "/videos/05_02_Cholesky_Factorization.mp4",
  "06_01_Lagrange_Interpolation": "/videos/06_01_Lagrange_Interpolation.mp4",
  "06_02_Divided_Differences": "/videos/06_02_Divided_Differences.mp4",
  "06_03_Newton_s_Divided_Difference_Formula": "/videos/06_03_Newton_s_Divided_Difference_Formula.mp4",
  "06_04_Hermite_Interpolation": "/videos/06_04_Hermite_Interpolation.mp4",
  "06_05_Spline_Interpolation": "/videos/06_05_Spline_Interpolation.mp4",
  "07_01_Numerical_differentiation": "/videos/07_01_Numerical_differentiation.mp4",
  "07_02_Richardson_s_extrapolation": "/videos/07_02_Richardson_s_extrapolation.mp4",
  "07_03_Newton_Cotes_Formulas": "/videos/07_03_Newton_Cotes_Formulas.mp4",
  "07_04_Gaussian_Quadrature": "/videos/07_04_Gaussian_Quadrature.mp4",
  "08_01_Review_of_Calculus": "/videos/08_01_Review_of_Calculus.mp4",
  "08_02_Golden_Section_Search_Method": "/videos/08_02_Golden_Section_Search_Method.mp4",
  "08_03_Simplex_Method": "/videos/08_03_Simplex_Method.mp4",
  "08_04_Gradient_Method": "/videos/08_04_Gradient_Method.mp4",
  "08_05_Solving_Linear_Systems_with_Gradient_Method": "/videos/08_05_Solving_Linear_Systems_with_Gradient_Method.mp4",
  "08_06_Newton_s_Method_for_Minimization": "/videos/08_06_Newton_s_Method_for_Minimization.mp4",
  "08_07_Quasi_Newton_Method_for_Minimization": "/videos/08_07_Quasi_Newton_Method_for_Minimization.mp4",
  "09_01_Line_Fitting": "/videos/09_01_Line_Fitting.mp4",
  "09_02_Polynomial_Curve_Fitting": "/videos/09_02_Polynomial_Curve_Fitting.mp4",
  "09_03_Special_Nonlinear_Curve_Fitting": "/videos/09_03_Special_Nonlinear_Curve_Fitting.mp4",
  "10_01_Review_of_Differential_Equations": "/videos/10_01_Review_of_Differential_Equations.mp4",
  "10_02_Euler_s_Method": "/videos/10_02_Euler_s_Method.mp4",
  "10_03_Effect_of_Rounding_in_the_Euler_s_Method": "/videos/10_03_Effect_of_Rounding_in_the_Euler_s_Method.mp4",
  "10_04_Taylor_s_Method": "/videos/10_04_Taylor_s_Method.mp4",
  "10_05_Runge_Kutta_Method": "/videos/10_05_Runge_Kutta_Method.mp4",
};

/** Playable URL for a subsection's video, or undefined. */
export function videoFor(base: string): string | undefined {
  return SUBSECTION_VIDEOS[base] || undefined;
}
