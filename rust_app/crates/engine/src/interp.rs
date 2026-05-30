//! Tree-walking interpreter.
//!
//! The runtime `Value` is just a `numerics::Matrix` — scalars are 1x1
//! matrices. The numerics crate already broadcasts scalars correctly through
//! its binary ops, so we get scalar/matrix mixing for free.

use std::collections::HashMap;

use numerics::{
    calculus as num_calc, condition as num_cond, error as num_error,
    factorization as num_fact, interpolation as num_interp, iterative as num_iter,
    least_squares as num_ls, linear, norms, Matrix, MatrixError,
};
use thiserror::Error;

use crate::ast::{BinOp, Expr, Statement, StmtKind};
use crate::parser::{self, ParseError};

pub type Value = Matrix;

#[derive(Debug, Error)]
pub enum RuntimeError {
    #[error("undefined variable '{0}'")]
    Undefined(String),
    #[error("unknown function '{0}'")]
    UnknownFunction(String),
    #[error("function '{name}' expects {expected} argument(s), got {got}")]
    BadArity {
        name: String,
        expected: String,
        got: usize,
    },
    #[error("function '{name}' requires a scalar for argument {arg_index}, got {rows}x{cols}")]
    NotAScalar {
        name: String,
        arg_index: usize,
        rows: usize,
        cols: usize,
    },
    #[error("invalid argument to '{name}': {reason}")]
    BadArgument { name: String, reason: String },
    #[error("matrix error: {0}")]
    Matrix(#[from] MatrixError),
    #[error("linear solver error: {0}")]
    Linear(#[from] linear::LinearError),
    #[error("iterative solver error: {0}")]
    Iterative(#[from] num_iter::IterativeError),
    #[error("condition / refinement error: {0}")]
    Condition(#[from] num_cond::ConditionError),
    #[error("factorization error: {0}")]
    Factor(#[from] num_fact::FactorError),
    #[error("interpolation error: {0}")]
    Interp(#[from] num_interp::InterpError),
    #[error("calculus error: {0}")]
    Calc(#[from] num_calc::CalcError),
    #[error("least-squares error: {0}")]
    LS(#[from] num_ls::LSError),
    #[error("parse error: {0}")]
    Parse(#[from] ParseError),
}

/// One outcome of running a statement: an optional value, plus a binding name
/// if the statement was an assignment. The REPL uses this to format output as
/// `name =\n  ...`.
#[derive(Debug)]
pub struct StmtResult {
    pub value: Value,
    pub binding: Option<String>,
    pub suppress: bool,
}

#[derive(Debug, Default)]
pub struct Env {
    vars: HashMap<String, Value>,
}

impl Env {
    pub fn new() -> Self {
        Self::default()
    }

    pub fn get(&self, name: &str) -> Option<&Value> {
        self.vars.get(name)
    }

    pub fn set(&mut self, name: impl Into<String>, value: Value) {
        self.vars.insert(name.into(), value);
    }

    pub fn names(&self) -> impl Iterator<Item = &str> {
        self.vars.keys().map(String::as_str)
    }

    /// Parse, evaluate, and return one result per statement.
    pub fn run(&mut self, src: &str) -> Result<Vec<StmtResult>, RuntimeError> {
        let stmts = parser::parse(src)?;
        let mut out = Vec::with_capacity(stmts.len());
        for stmt in stmts {
            out.push(self.exec_statement(stmt)?);
        }
        Ok(out)
    }

    fn exec_statement(&mut self, stmt: Statement) -> Result<StmtResult, RuntimeError> {
        let Statement {
            kind,
            suppress_output,
        } = stmt;
        match kind {
            StmtKind::Expr(e) => {
                let value = self.eval(&e)?;
                // Mirror MATLAB: bare expressions are also bound to `ans`.
                self.vars.insert("ans".into(), value.clone());
                Ok(StmtResult {
                    value,
                    binding: Some("ans".into()),
                    suppress: suppress_output,
                })
            }
            StmtKind::Assign { name, rhs } => {
                let value = self.eval(&rhs)?;
                self.vars.insert(name.clone(), value.clone());
                Ok(StmtResult {
                    value,
                    binding: Some(name),
                    suppress: suppress_output,
                })
            }
        }
    }

    pub fn eval(&self, e: &Expr) -> Result<Value, RuntimeError> {
        match e {
            Expr::Number(n) => Ok(Matrix::scalar(*n)),
            Expr::Ident(name) => self
                .vars
                .get(name)
                .cloned()
                .ok_or_else(|| RuntimeError::Undefined(name.clone())),
            Expr::Neg(inner) => {
                let v = self.eval(inner)?;
                Ok(v.neg())
            }
            Expr::Transpose(inner) => {
                let v = self.eval(inner)?;
                Ok(v.transpose())
            }
            Expr::Binary { op, lhs, rhs } => {
                let a = self.eval(lhs)?;
                let b = self.eval(rhs)?;
                eval_binop(*op, &a, &b)
            }
            Expr::Call { name, args } => {
                let vals: Vec<Value> = args
                    .iter()
                    .map(|a| self.eval(a))
                    .collect::<Result<_, _>>()?;
                builtins::call(name, &vals)
            }
            Expr::MatrixLit { rows } => build_matrix_literal(rows, self),
        }
    }
}

fn eval_binop(op: BinOp, a: &Matrix, b: &Matrix) -> Result<Value, RuntimeError> {
    Ok(match op {
        BinOp::Add => a.add(b)?,
        BinOp::Sub => a.sub(b)?,
        BinOp::Mul => a.matmul(b)?,
        BinOp::Div => {
            // Right-divide is matrix-inverse on the right; for now, only support
            // matrix / scalar (elementwise) and scalar / scalar.
            if b.is_scalar() {
                a.div_elem(b)?
            } else if a.is_scalar() {
                // scalar / matrix => scalar elementwise-divided by each element
                a.div_elem(b)?
            } else {
                return Err(RuntimeError::BadArgument {
                    name: "/".into(),
                    reason: "matrix / matrix (right-divide) not implemented yet; use ./ for elementwise".into(),
                });
            }
        }
        BinOp::Pow => {
            // a ^ b — only support scalar exponent. Matrix^scalar deferred.
            if !b.is_scalar() {
                return Err(RuntimeError::BadArgument {
                    name: "^".into(),
                    reason: "exponent must be a scalar".into(),
                });
            }
            let exp = b.as_scalar().unwrap();
            if a.is_scalar() {
                Matrix::scalar(a.as_scalar().unwrap().powf(exp))
            } else if (exp - exp.round()).abs() < 1e-12 && exp >= 0.0 {
                // Integer non-negative power: repeated matmul.
                let n = exp as u32;
                let (r, c) = a.shape();
                if r != c {
                    return Err(RuntimeError::BadArgument {
                        name: "^".into(),
                        reason: "matrix ^ n requires a square matrix".into(),
                    });
                }
                let mut acc = Matrix::eye(r);
                for _ in 0..n {
                    acc = acc.matmul(a)?;
                }
                acc
            } else {
                return Err(RuntimeError::BadArgument {
                    name: "^".into(),
                    reason: "non-integer matrix powers not implemented; use .^ for elementwise"
                        .into(),
                });
            }
        }
        BinOp::ElemMul => a.mul_elem(b)?,
        BinOp::ElemDiv => a.div_elem(b)?,
        BinOp::ElemPow => a.pow_elem(b)?,
    })
}

fn build_matrix_literal(rows: &[Vec<Expr>], env: &Env) -> Result<Value, RuntimeError> {
    if rows.is_empty() {
        return Ok(Matrix::new(0, 0, Vec::new()));
    }
    // Evaluate every cell first.
    let evaluated: Vec<Vec<Matrix>> = rows
        .iter()
        .map(|r| r.iter().map(|e| env.eval(e)).collect::<Result<_, _>>())
        .collect::<Result<_, _>>()?;

    // Each row is concatenated horizontally (hcat). Then all rows are stacked
    // vertically (vcat). We support scalar elements directly; mixing matrices
    // inside a literal would require row-height matching across cells — not
    // implemented here. Reject non-scalar cells with a clear error.
    let mut data_rows: Vec<Vec<f64>> = Vec::with_capacity(evaluated.len());
    let mut expected_cols: Option<usize> = None;

    for (i, row_cells) in evaluated.iter().enumerate() {
        let mut row_data: Vec<f64> = Vec::new();
        for cell in row_cells {
            if !cell.is_scalar() {
                return Err(RuntimeError::BadArgument {
                    name: "matrix literal".into(),
                    reason: format!(
                        "row {i} contains a {}x{} sub-matrix; only scalars are supported inside [...] literals",
                        cell.rows(),
                        cell.cols()
                    ),
                });
            }
            row_data.push(cell.as_scalar().unwrap());
        }
        if let Some(exp) = expected_cols {
            if row_data.len() != exp {
                return Err(RuntimeError::BadArgument {
                    name: "matrix literal".into(),
                    reason: format!(
                        "row {i} has {} columns, expected {exp}",
                        row_data.len()
                    ),
                });
            }
        } else {
            expected_cols = Some(row_data.len());
        }
        data_rows.push(row_data);
    }

    let rows_n = data_rows.len();
    let cols_n = expected_cols.unwrap_or(0);
    let mut flat = Vec::with_capacity(rows_n * cols_n);
    for r in data_rows {
        flat.extend(r);
    }
    Ok(Matrix::new(rows_n, cols_n, flat))
}

mod builtins {
    use super::*;
    use numerics::mesh;

    pub fn call(name: &str, args: &[Value]) -> Result<Value, RuntimeError> {
        match name {
            // constructors
            "zeros" => ctor(name, args, Matrix::zeros),
            "ones" => ctor(name, args, Matrix::ones),
            "eye" => eye(args),
            "linspace" => linspace(args),

            // elementwise unary
            "sin" => unary_map(name, args, f64::sin),
            "cos" => unary_map(name, args, f64::cos),
            "tan" => unary_map(name, args, f64::tan),
            "exp" => unary_map(name, args, f64::exp),
            "log" => unary_map(name, args, f64::ln),
            "sqrt" => unary_map(name, args, f64::sqrt),
            "abs" => unary_map(name, args, f64::abs),

            // inspection
            "size" => size(args),
            "rows" => rows(args),
            "cols" => cols(args),
            "transpose" => transpose(args),

            // linear solvers
            "solve" => solve(name, args, SolveMethod::PartialPivot),
            "solve_naive" => solve(name, args, SolveMethod::Naive),
            "solve_scaled" => solve(name, args, SolveMethod::Scaled),

            // Chapter 1 / floating-point helpers
            "horner" => horner_call(args),
            "kahan_sum" => kahan_sum_call(args),
            "sum" => naive_sum_call(args),
            "eps" => eps_call(args),

            // Chapter 4: iterative solvers, condition, refinement
            "jacobi" => iterative_call(name, args, IterativeMethod::Jacobi),
            "gauss_seidel" => iterative_call(name, args, IterativeMethod::GaussSeidel),
            "cond_inf" => cond_call(name, args, CondNorm::Inf),
            "cond_1" => cond_call(name, args, CondNorm::One),
            "inv" => inv_call(args),
            "residual" => residual_call(args),
            "hilbert" => hilbert_call(args),
            "refine" => refine_call(args),

            // Norm builtins
            "norm" => norm_call(name, args, NormKind::TwoOrFro),
            "norm_inf" => norm_call(name, args, NormKind::Inf),
            "norm_1" => norm_call(name, args, NormKind::One),

            // Chapter 5: factorizations
            "lu_l" => lu_part_call(args, LuPart::L),
            "lu_u" => lu_part_call(args, LuPart::U),
            "lu_p" => lu_part_call(args, LuPart::P),
            "lu_solve" => lu_solve_call(args),
            "chol" => chol_call(args),
            "chol_solve" => chol_solve_call(args),
            "det" => det_call(args),

            // Chapter 6: interpolation
            "lagrange" => lagrange_call(args),
            "newton_coefs" => newton_coefs_call(args),
            "newton_eval" => newton_eval_call(args),
            "hermite_eval" => hermite_eval_call(args),
            "spline_eval" => spline_eval_call(args),
            "spline_clamped_eval" => spline_clamped_eval_call(args),

            // Chapter 7: calculus
            "trapezoid_data" => trapezoid_data_call(args),
            "simpson_data" => simpson_data_call(args),
            "gauss_nodes" => gauss_nodes_call(args),
            "legendre" => legendre_call(args),

            // Chapter 9: least squares
            "fit_line" => fit_line_call(args),
            "fit_poly" => fit_poly_call(args),
            "fit_exp" => fit_exp_call(args),
            "fit_power" => fit_power_call(args),

            _ => Err(RuntimeError::UnknownFunction(name.into())),
        }
    }

    fn require_arity(name: &str, args: &[Value], want: usize) -> Result<(), RuntimeError> {
        if args.len() != want {
            return Err(RuntimeError::BadArity {
                name: name.into(),
                expected: want.to_string(),
                got: args.len(),
            });
        }
        Ok(())
    }

    fn require_scalar(name: &str, args: &[Value], idx: usize) -> Result<f64, RuntimeError> {
        let v = &args[idx];
        if !v.is_scalar() {
            return Err(RuntimeError::NotAScalar {
                name: name.into(),
                arg_index: idx,
                rows: v.rows(),
                cols: v.cols(),
            });
        }
        Ok(v.as_scalar().unwrap())
    }

    fn require_non_negative_int(
        name: &str,
        args: &[Value],
        idx: usize,
    ) -> Result<usize, RuntimeError> {
        let s = require_scalar(name, args, idx)?;
        if !(s.is_finite() && s >= 0.0 && (s - s.round()).abs() < 1e-9) {
            return Err(RuntimeError::BadArgument {
                name: name.into(),
                reason: format!("argument {idx} must be a non-negative integer, got {s}"),
            });
        }
        Ok(s.round() as usize)
    }

    fn ctor<F: Fn(usize, usize) -> Matrix>(
        name: &str,
        args: &[Value],
        f: F,
    ) -> Result<Value, RuntimeError> {
        match args.len() {
            1 => {
                let n = require_non_negative_int(name, args, 0)?;
                Ok(f(n, n))
            }
            2 => {
                let r = require_non_negative_int(name, args, 0)?;
                let c = require_non_negative_int(name, args, 1)?;
                Ok(f(r, c))
            }
            other => Err(RuntimeError::BadArity {
                name: name.into(),
                expected: "1 or 2".into(),
                got: other,
            }),
        }
    }

    fn eye(args: &[Value]) -> Result<Value, RuntimeError> {
        require_arity("eye", args, 1)?;
        let n = require_non_negative_int("eye", args, 0)?;
        Ok(Matrix::eye(n))
    }

    fn linspace(args: &[Value]) -> Result<Value, RuntimeError> {
        require_arity("linspace", args, 3)?;
        let a = require_scalar("linspace", args, 0)?;
        let b = require_scalar("linspace", args, 1)?;
        let n = require_non_negative_int("linspace", args, 2)?;
        let v = mesh::linspace(a, b, n);
        let cols = v.len();
        Ok(Matrix::new(1, cols, v))
    }

    fn unary_map<F: Fn(f64) -> f64>(
        name: &str,
        args: &[Value],
        f: F,
    ) -> Result<Value, RuntimeError> {
        require_arity(name, args, 1)?;
        Ok(args[0].map(f))
    }

    fn size(args: &[Value]) -> Result<Value, RuntimeError> {
        require_arity("size", args, 1)?;
        let (r, c) = args[0].shape();
        Ok(Matrix::new(1, 2, vec![r as f64, c as f64]))
    }

    fn rows(args: &[Value]) -> Result<Value, RuntimeError> {
        require_arity("rows", args, 1)?;
        Ok(Matrix::scalar(args[0].rows() as f64))
    }

    fn cols(args: &[Value]) -> Result<Value, RuntimeError> {
        require_arity("cols", args, 1)?;
        Ok(Matrix::scalar(args[0].cols() as f64))
    }

    fn transpose(args: &[Value]) -> Result<Value, RuntimeError> {
        require_arity("transpose", args, 1)?;
        Ok(args[0].transpose())
    }

    fn horner_call(args: &[Value]) -> Result<Value, RuntimeError> {
        require_arity("horner", args, 2)?;
        let coeffs = &args[0];
        let x = require_scalar("horner", args, 1)?;
        // Accept a row OR column vector of coefficients (highest degree first).
        let (r, c) = coeffs.shape();
        if !(r == 1 || c == 1) {
            return Err(RuntimeError::BadArgument {
                name: "horner".into(),
                reason: format!("coefficients must be a vector, got {r}x{c}"),
            });
        }
        Ok(Matrix::scalar(num_error::horner(coeffs.data(), x)))
    }

    fn kahan_sum_call(args: &[Value]) -> Result<Value, RuntimeError> {
        require_arity("kahan_sum", args, 1)?;
        Ok(Matrix::scalar(num_error::kahan_sum(args[0].data())))
    }

    fn naive_sum_call(args: &[Value]) -> Result<Value, RuntimeError> {
        require_arity("sum", args, 1)?;
        Ok(Matrix::scalar(num_error::naive_sum(args[0].data())))
    }

    fn eps_call(args: &[Value]) -> Result<Value, RuntimeError> {
        if !args.is_empty() {
            return Err(RuntimeError::BadArity {
                name: "eps".into(),
                expected: "0".into(),
                got: args.len(),
            });
        }
        Ok(Matrix::scalar(num_error::machine_epsilon()))
    }

    // ─── Chapter 4 wiring ──────────────────────────────────────────────

    pub(super) enum IterativeMethod {
        Jacobi,
        GaussSeidel,
    }

    pub(super) enum CondNorm {
        Inf,
        One,
    }

    pub(super) enum NormKind {
        Inf,
        One,
        /// Vector: 2-norm. Matrix: Frobenius (analogue when 2-norm is unavailable).
        TwoOrFro,
    }

    fn vector_data_from(arg: &Value, name: &str) -> Result<Vec<f64>, RuntimeError> {
        let (r, c) = arg.shape();
        if !(r == 1 || c == 1) {
            return Err(RuntimeError::BadArgument {
                name: name.into(),
                reason: format!("expected a vector (n×1 or 1×n), got {r}x{c}"),
            });
        }
        Ok(arg.data().to_vec())
    }

    pub(super) fn iterative_call(
        name: &str,
        args: &[Value],
        method: IterativeMethod,
    ) -> Result<Value, RuntimeError> {
        if args.len() < 2 || args.len() > 3 {
            return Err(RuntimeError::BadArity {
                name: name.into(),
                expected: "2 or 3".into(),
                got: args.len(),
            });
        }
        let a = &args[0];
        let b = vector_data_from(&args[1], name)?;
        let x0: Option<Vec<f64>> = if args.len() == 3 {
            Some(vector_data_from(&args[2], name)?)
        } else {
            None
        };
        let opts = num_iter::IterativeOptions::default();
        let report = match method {
            IterativeMethod::Jacobi => num_iter::jacobi(a, &b, x0.as_deref(), opts),
            IterativeMethod::GaussSeidel => num_iter::gauss_seidel(a, &b, x0.as_deref(), opts),
        }?;
        let n = report.x.len();
        Ok(Matrix::new(n, 1, report.x))
    }

    pub(super) fn cond_call(
        name: &str,
        args: &[Value],
        norm: CondNorm,
    ) -> Result<Value, RuntimeError> {
        require_arity(name, args, 1)?;
        let a = &args[0];
        let v = match norm {
            CondNorm::Inf => num_cond::cond_inf(a)?,
            CondNorm::One => num_cond::cond_1(a)?,
        };
        Ok(Matrix::scalar(v))
    }

    pub(super) fn inv_call(args: &[Value]) -> Result<Value, RuntimeError> {
        require_arity("inv", args, 1)?;
        Ok(num_cond::invert(&args[0])?)
    }

    pub(super) fn residual_call(args: &[Value]) -> Result<Value, RuntimeError> {
        require_arity("residual", args, 3)?;
        let a = &args[0];
        let x = vector_data_from(&args[1], "residual")?;
        let b = vector_data_from(&args[2], "residual")?;
        let r = num_cond::residual(a, &x, &b)?;
        let n = r.len();
        Ok(Matrix::new(n, 1, r))
    }

    pub(super) fn hilbert_call(args: &[Value]) -> Result<Value, RuntimeError> {
        require_arity("hilbert", args, 1)?;
        let n = require_non_negative_int("hilbert", args, 0)?;
        Ok(num_cond::hilbert(n))
    }

    pub(super) fn refine_call(args: &[Value]) -> Result<Value, RuntimeError> {
        if !(args.len() == 2 || args.len() == 3) {
            return Err(RuntimeError::BadArity {
                name: "refine".into(),
                expected: "2 or 3".into(),
                got: args.len(),
            });
        }
        let a = &args[0];
        let b = vector_data_from(&args[1], "refine")?;
        let x0: Option<Vec<f64>> = if args.len() == 3 {
            Some(vector_data_from(&args[2], "refine")?)
        } else {
            None
        };
        let report = num_cond::iterative_refinement(
            a,
            &b,
            x0.as_deref(),
            num_cond::RefinementOptions::default(),
        )?;
        let n = report.x.len();
        Ok(Matrix::new(n, 1, report.x))
    }

    pub(super) fn norm_call(
        name: &str,
        args: &[Value],
        kind: NormKind,
    ) -> Result<Value, RuntimeError> {
        require_arity(name, args, 1)?;
        let m = &args[0];
        let (r, c) = m.shape();
        let is_vec = r == 1 || c == 1;
        let v = if is_vec {
            match kind {
                NormKind::Inf => norms::vec_norm_inf(m.data()),
                NormKind::One => norms::vec_norm_1(m.data()),
                NormKind::TwoOrFro => norms::vec_norm_2(m.data()),
            }
        } else {
            match kind {
                NormKind::Inf => norms::mat_norm_inf(m),
                NormKind::One => norms::mat_norm_1(m),
                NormKind::TwoOrFro => norms::mat_norm_fro(m),
            }
        };
        Ok(Matrix::scalar(v))
    }

    // ─── Chapter 5 wiring ──────────────────────────────────────────────

    pub(super) enum LuPart {
        L,
        U,
        P,
    }

    pub(super) fn lu_part_call(args: &[Value], which: LuPart) -> Result<Value, RuntimeError> {
        require_arity("lu_*", args, 1)?;
        let f = num_fact::LUFactor::factor(&args[0])?;
        Ok(match which {
            LuPart::L => f.l(),
            LuPart::U => f.u(),
            LuPart::P => f.p(),
        })
    }

    pub(super) fn lu_solve_call(args: &[Value]) -> Result<Value, RuntimeError> {
        require_arity("lu_solve", args, 2)?;
        let a = &args[0];
        let b = vector_data_from(&args[1], "lu_solve")?;
        let x = num_fact::lu_solve(a, &b)?;
        let n = x.len();
        Ok(Matrix::new(n, 1, x))
    }

    pub(super) fn chol_call(args: &[Value]) -> Result<Value, RuntimeError> {
        require_arity("chol", args, 1)?;
        Ok(num_fact::CholeskyFactor::factor(&args[0])?.l)
    }

    pub(super) fn chol_solve_call(args: &[Value]) -> Result<Value, RuntimeError> {
        require_arity("chol_solve", args, 2)?;
        let a = &args[0];
        let b = vector_data_from(&args[1], "chol_solve")?;
        let x = num_fact::chol_solve(a, &b)?;
        let n = x.len();
        Ok(Matrix::new(n, 1, x))
    }

    pub(super) fn det_call(args: &[Value]) -> Result<Value, RuntimeError> {
        require_arity("det", args, 1)?;
        Ok(Matrix::scalar(num_fact::det(&args[0])?))
    }

    // ─── Chapter 6 wiring ──────────────────────────────────────────────

    pub(super) fn lagrange_call(args: &[Value]) -> Result<Value, RuntimeError> {
        require_arity("lagrange", args, 3)?;
        let xs = vector_data_from(&args[0], "lagrange")?;
        let ys = vector_data_from(&args[1], "lagrange")?;
        let x = require_scalar("lagrange", args, 2)?;
        Ok(Matrix::scalar(num_interp::lagrange_eval(&xs, &ys, x)?))
    }

    pub(super) fn newton_coefs_call(args: &[Value]) -> Result<Value, RuntimeError> {
        require_arity("newton_coefs", args, 2)?;
        let xs = vector_data_from(&args[0], "newton_coefs")?;
        let ys = vector_data_from(&args[1], "newton_coefs")?;
        let nf = num_interp::NewtonInterp::fit(&xs, &ys)?;
        let n = nf.coefs.len();
        Ok(Matrix::new(n, 1, nf.coefs))
    }

    pub(super) fn newton_eval_call(args: &[Value]) -> Result<Value, RuntimeError> {
        require_arity("newton_eval", args, 3)?;
        let xs = vector_data_from(&args[0], "newton_eval")?;
        let coefs = vector_data_from(&args[1], "newton_eval")?;
        let x = require_scalar("newton_eval", args, 2)?;
        if coefs.len() != xs.len() {
            return Err(RuntimeError::BadArgument {
                name: "newton_eval".into(),
                reason: format!(
                    "coefs length ({}) must equal xs length ({})",
                    coefs.len(),
                    xs.len()
                ),
            });
        }
        let nf = num_interp::NewtonInterp {
            xs,
            coefs,
        };
        Ok(Matrix::scalar(nf.eval(x)))
    }

    pub(super) fn hermite_eval_call(args: &[Value]) -> Result<Value, RuntimeError> {
        require_arity("hermite_eval", args, 4)?;
        let xs = vector_data_from(&args[0], "hermite_eval")?;
        let ys = vector_data_from(&args[1], "hermite_eval")?;
        let yps = vector_data_from(&args[2], "hermite_eval")?;
        let x = require_scalar("hermite_eval", args, 3)?;
        let h = num_interp::HermiteInterp::fit(&xs, &ys, &yps)?;
        Ok(Matrix::scalar(h.eval(x)))
    }

    pub(super) fn spline_eval_call(args: &[Value]) -> Result<Value, RuntimeError> {
        require_arity("spline_eval", args, 3)?;
        let xs = vector_data_from(&args[0], "spline_eval")?;
        let ys = vector_data_from(&args[1], "spline_eval")?;
        let x = require_scalar("spline_eval", args, 2)?;
        let s = num_interp::CubicSpline::natural(&xs, &ys)?;
        Ok(Matrix::scalar(s.eval(x)))
    }

    pub(super) fn spline_clamped_eval_call(args: &[Value]) -> Result<Value, RuntimeError> {
        require_arity("spline_clamped_eval", args, 5)?;
        let xs = vector_data_from(&args[0], "spline_clamped_eval")?;
        let ys = vector_data_from(&args[1], "spline_clamped_eval")?;
        let yp0 = require_scalar("spline_clamped_eval", args, 2)?;
        let ypn = require_scalar("spline_clamped_eval", args, 3)?;
        let x = require_scalar("spline_clamped_eval", args, 4)?;
        let s = num_interp::CubicSpline::clamped(&xs, &ys, yp0, ypn)?;
        Ok(Matrix::scalar(s.eval(x)))
    }

    // ─── Chapter 7 wiring ──────────────────────────────────────────────

    pub(super) fn trapezoid_data_call(args: &[Value]) -> Result<Value, RuntimeError> {
        require_arity("trapezoid_data", args, 2)?;
        let xs = vector_data_from(&args[0], "trapezoid_data")?;
        let ys = vector_data_from(&args[1], "trapezoid_data")?;
        Ok(Matrix::scalar(num_calc::trapezoid_data(&xs, &ys)?))
    }

    pub(super) fn simpson_data_call(args: &[Value]) -> Result<Value, RuntimeError> {
        require_arity("simpson_data", args, 2)?;
        let xs = vector_data_from(&args[0], "simpson_data")?;
        let ys = vector_data_from(&args[1], "simpson_data")?;
        Ok(Matrix::scalar(num_calc::simpson_data(&xs, &ys)?))
    }

    /// `gauss_nodes(n)` returns an `n × 2` matrix of `[node, weight]` rows on
    /// the canonical interval `[−1, 1]`.
    pub(super) fn gauss_nodes_call(args: &[Value]) -> Result<Value, RuntimeError> {
        require_arity("gauss_nodes", args, 1)?;
        let n = require_non_negative_int("gauss_nodes", args, 0)?;
        let (nodes, weights) = num_calc::gauss_legendre_table(n)?;
        let mut data = Vec::with_capacity(2 * n);
        for i in 0..n {
            data.push(nodes[i]);
            data.push(weights[i]);
        }
        Ok(Matrix::new(n, 2, data))
    }

    pub(super) fn legendre_call(args: &[Value]) -> Result<Value, RuntimeError> {
        require_arity("legendre", args, 2)?;
        let n = require_non_negative_int("legendre", args, 0)?;
        let x = require_scalar("legendre", args, 1)?;
        Ok(Matrix::scalar(num_calc::legendre(n, x)))
    }

    // ─── Chapter 9 wiring ──────────────────────────────────────────────

    pub(super) fn fit_line_call(args: &[Value]) -> Result<Value, RuntimeError> {
        require_arity("fit_line", args, 2)?;
        let xs = vector_data_from(&args[0], "fit_line")?;
        let ys = vector_data_from(&args[1], "fit_line")?;
        let f = num_ls::fit_line(&xs, &ys)?;
        Ok(Matrix::new(3, 1, vec![f.a, f.b, f.error]))
    }

    pub(super) fn fit_poly_call(args: &[Value]) -> Result<Value, RuntimeError> {
        require_arity("fit_poly", args, 3)?;
        let xs = vector_data_from(&args[0], "fit_poly")?;
        let ys = vector_data_from(&args[1], "fit_poly")?;
        let m = require_non_negative_int("fit_poly", args, 2)?;
        let f = num_ls::fit_polynomial(&xs, &ys, m)?;
        let mut out = f.coefs.clone();
        out.push(f.error);
        Ok(Matrix::new(out.len(), 1, out))
    }

    pub(super) fn fit_exp_call(args: &[Value]) -> Result<Value, RuntimeError> {
        require_arity("fit_exp", args, 2)?;
        let xs = vector_data_from(&args[0], "fit_exp")?;
        let ys = vector_data_from(&args[1], "fit_exp")?;
        let f = num_ls::fit_exponential(&xs, &ys)?;
        Ok(Matrix::new(
            4,
            1,
            vec![f.a, f.b, f.error_linearized, f.error_nonlinear],
        ))
    }

    pub(super) fn fit_power_call(args: &[Value]) -> Result<Value, RuntimeError> {
        require_arity("fit_power", args, 2)?;
        let xs = vector_data_from(&args[0], "fit_power")?;
        let ys = vector_data_from(&args[1], "fit_power")?;
        let f = num_ls::fit_power(&xs, &ys)?;
        Ok(Matrix::new(
            4,
            1,
            vec![f.a, f.b, f.error_linearized, f.error_nonlinear],
        ))
    }

    pub(super) enum SolveMethod {
        Naive,
        PartialPivot,
        Scaled,
    }

    pub(super) fn solve(
        name: &str,
        args: &[Value],
        method: SolveMethod,
    ) -> Result<Value, RuntimeError> {
        require_arity(name, args, 2)?;
        let a = &args[0];
        let b_in = &args[1];

        // Accept b as either an n-vector (n×1 column or 1×n row) and normalize to a slice.
        let (b_rows, b_cols) = b_in.shape();
        let b_vec: Vec<f64> = if b_cols == 1 {
            b_in.data().to_vec()
        } else if b_rows == 1 {
            b_in.data().to_vec()
        } else {
            return Err(RuntimeError::BadArgument {
                name: name.into(),
                reason: format!(
                    "right-hand side must be a vector (n×1 or 1×n), got {b_rows}x{b_cols}"
                ),
            });
        };

        let x = match method {
            SolveMethod::Naive => linear::solve_gauss(a, &b_vec)?,
            SolveMethod::PartialPivot => linear::solve_partial_pivot(a, &b_vec)?,
            SolveMethod::Scaled => linear::solve_scaled_partial_pivot(a, &b_vec)?,
        };
        let n = x.len();
        Ok(Matrix::new(n, 1, x))
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn run_last(env: &mut Env, src: &str) -> Value {
        let r = env.run(src).unwrap();
        r.last().unwrap().value.clone()
    }

    #[test]
    fn scalar_arithmetic() {
        let mut env = Env::new();
        assert_eq!(run_last(&mut env, "1 + 2 * 3"), Matrix::scalar(7.0));
        assert_eq!(run_last(&mut env, "2 ^ 10"), Matrix::scalar(1024.0));
        assert_eq!(run_last(&mut env, "-3 + 5"), Matrix::scalar(2.0));
    }

    #[test]
    fn assignment_and_lookup() {
        let mut env = Env::new();
        env.run("A = 7").unwrap();
        assert_eq!(env.get("A"), Some(&Matrix::scalar(7.0)));
        assert_eq!(run_last(&mut env, "A * 2 + 1"), Matrix::scalar(15.0));
    }

    #[test]
    fn matrix_construction_and_multiplication() {
        let mut env = Env::new();
        env.run("A = [1, 2; 3, 4]").unwrap();
        env.run("B = [5, 6; 7, 8]").unwrap();
        let c = run_last(&mut env, "C = A * B");
        // [1 2;3 4] * [5 6;7 8] = [19 22; 43 50]
        assert_eq!(c.data(), &[19.0, 22.0, 43.0, 50.0]);
    }

    #[test]
    fn scalar_broadcasting_in_matrix_add() {
        let mut env = Env::new();
        env.run("A = [1, 2; 3, 4]").unwrap();
        let r = run_last(&mut env, "A + 10");
        assert_eq!(r.data(), &[11.0, 12.0, 13.0, 14.0]);
    }

    #[test]
    fn elementwise_ops() {
        let mut env = Env::new();
        env.run("A = [1, 2; 3, 4]").unwrap();
        let r = run_last(&mut env, "A .* A");
        assert_eq!(r.data(), &[1.0, 4.0, 9.0, 16.0]);
    }

    #[test]
    fn transpose_postfix() {
        let mut env = Env::new();
        env.run("A = [1, 2, 3; 4, 5, 6]").unwrap();
        let r = run_last(&mut env, "A'");
        assert_eq!(r.shape(), (3, 2));
        assert_eq!(r.data(), &[1.0, 4.0, 2.0, 5.0, 3.0, 6.0]);
    }

    #[test]
    fn matrix_power_integer() {
        let mut env = Env::new();
        env.run("A = [1, 1; 0, 1]").unwrap();
        // [[1,1],[0,1]]^5 should be [[1,5],[0,1]] (Pascal-style upper triangular)
        let r = run_last(&mut env, "A ^ 5");
        assert_eq!(r.data(), &[1.0, 5.0, 0.0, 1.0]);
    }

    #[test]
    fn matrix_power_zero_is_identity() {
        let mut env = Env::new();
        let r = run_last(&mut env, "[1, 2; 3, 4] ^ 0");
        assert_eq!(r.data(), &[1.0, 0.0, 0.0, 1.0]);
    }

    #[test]
    fn builtins_constructors() {
        let mut env = Env::new();
        assert_eq!(run_last(&mut env, "zeros(2, 3)").shape(), (2, 3));
        assert_eq!(run_last(&mut env, "ones(2)").shape(), (2, 2));
        assert_eq!(run_last(&mut env, "eye(3)"), Matrix::eye(3));
    }

    #[test]
    fn builtins_unary_math() {
        let mut env = Env::new();
        let r = run_last(&mut env, "sin(0)");
        assert!(r.as_scalar().unwrap().abs() < 1e-12);
        let r = run_last(&mut env, "exp(1)");
        assert!((r.as_scalar().unwrap() - std::f64::consts::E).abs() < 1e-12);
    }

    #[test]
    fn unary_math_broadcasts_over_matrix() {
        let mut env = Env::new();
        env.run("A = [0, 1; 2, 3]").unwrap();
        let r = run_last(&mut env, "exp(A)");
        let expected = [0f64.exp(), 1f64.exp(), 2f64.exp(), 3f64.exp()];
        for (a, b) in r.data().iter().zip(expected.iter()) {
            assert!((a - b).abs() < 1e-12);
        }
    }

    #[test]
    fn size_returns_1x2() {
        let mut env = Env::new();
        env.run("A = zeros(4, 7)").unwrap();
        let r = run_last(&mut env, "size(A)");
        assert_eq!(r.shape(), (1, 2));
        assert_eq!(r.data(), &[4.0, 7.0]);
    }

    #[test]
    fn linspace_evaluates() {
        let mut env = Env::new();
        let r = run_last(&mut env, "linspace(0, 1, 5)");
        assert_eq!(r.shape(), (1, 5));
        assert!((r.get(0, 0).unwrap() - 0.0).abs() < 1e-12);
        assert!((r.get(0, 4).unwrap() - 1.0).abs() < 1e-12);
    }

    #[test]
    fn ans_binding() {
        let mut env = Env::new();
        env.run("3 + 4").unwrap();
        assert_eq!(env.get("ans"), Some(&Matrix::scalar(7.0)));
    }

    #[test]
    fn undefined_variable_errors() {
        let mut env = Env::new();
        let err = env.run("notdefined + 1").unwrap_err();
        assert!(matches!(err, RuntimeError::Undefined(ref n) if n == "notdefined"));
    }

    #[test]
    fn unknown_function_errors() {
        let mut env = Env::new();
        let err = env.run("blarg(1, 2)").unwrap_err();
        assert!(matches!(err, RuntimeError::UnknownFunction(ref n) if n == "blarg"));
    }

    #[test]
    fn ragged_matrix_literal_errors() {
        let mut env = Env::new();
        let err = env.run("[1, 2; 3]").unwrap_err();
        match err {
            RuntimeError::BadArgument { reason, .. } => {
                assert!(reason.contains("expected 2"), "got: {reason}");
            }
            other => panic!("{other:?}"),
        }
    }

    #[test]
    fn dim_mismatch_in_addition_errors() {
        let mut env = Env::new();
        let err = env.run("[1, 2] + [1; 2]").unwrap_err();
        assert!(matches!(err, RuntimeError::Matrix(MatrixError::DimMismatch { .. })));
    }

    #[test]
    fn semicolons_suppress() {
        let mut env = Env::new();
        let results = env.run("A = 1; B = 2; A + B").unwrap();
        assert_eq!(results.len(), 3);
        assert!(results[0].suppress);
        assert!(results[1].suppress);
        assert!(!results[2].suppress);
        assert_eq!(results[2].value, Matrix::scalar(3.0));
    }

    #[test]
    fn complex_expression() {
        let mut env = Env::new();
        // (A + A') / 2 = symmetric part. Take A = [1,2;3,4] then sym = [1, 2.5; 2.5, 4]
        env.run("A = [1, 2; 3, 4]").unwrap();
        let r = run_last(&mut env, "(A + A') ./ 2");
        assert_eq!(r.data(), &[1.0, 2.5, 2.5, 4.0]);
    }

    #[test]
    fn solve_book_example_3_22() {
        // Hartung Example 3.22: solution is (-3, 2, 4, -2).
        let mut env = Env::new();
        env.run("A = [1, -2, -2, -2; 2, -1, 2, 4; -1, 2, 3, -4; -2, 1, 4, -2]")
            .unwrap();
        env.run("b = [-11; -8; 27; 28]").unwrap();
        let x = run_last(&mut env, "solve(A, b)");
        assert_eq!(x.shape(), (4, 1));
        let expected = [-3.0, 2.0, 4.0, -2.0];
        for (got, want) in x.data().iter().zip(expected.iter()) {
            assert!((got - want).abs() < 1e-10, "got {x:?}");
        }
    }

    #[test]
    fn solve_accepts_row_vector_rhs() {
        let mut env = Env::new();
        env.run("A = [2, 1; 1, 3]").unwrap();
        // b as a row vector
        let x = run_last(&mut env, "solve(A, [4, 5])");
        // 2 x1 + x2 = 4, x1 + 3 x2 = 5 -> x = [7/5, 6/5]
        assert!((x.get(0, 0).unwrap() - 1.4).abs() < 1e-12);
        assert!((x.get(1, 0).unwrap() - 1.2).abs() < 1e-12);
    }

    #[test]
    fn solve_naive_zero_pivot_errors() {
        let mut env = Env::new();
        // 0-pivot in the first slot.
        env.run("A = [0, 1; 1, 0]").unwrap();
        env.run("b = [1; 2]").unwrap();
        let err = env.run("solve_naive(A, b)").unwrap_err();
        assert!(matches!(err, RuntimeError::Linear(_)));
        // But solve() with partial pivoting handles it fine.
        let x = run_last(&mut env, "solve(A, b)");
        assert!((x.get(0, 0).unwrap() - 2.0).abs() < 1e-12);
        assert!((x.get(1, 0).unwrap() - 1.0).abs() < 1e-12);
    }

    #[test]
    fn solve_singular_matrix_errors() {
        let mut env = Env::new();
        env.run("A = [1, 2; 2, 4]").unwrap();
        env.run("b = [3; 6]").unwrap();
        let err = env.run("solve(A, b)").unwrap_err();
        assert!(matches!(err, RuntimeError::Linear(_)));
    }

    #[test]
    fn horner_builtin_evaluates_polynomial() {
        // p(x) = 5x^4 - 8x^3 + 2x^2 + 4x - 10 at x = 2 => 80 - 64 + 8 + 8 - 10 = 22
        let mut env = Env::new();
        env.run("p = [5, -8, 2, 4, -10]").unwrap();
        let r = run_last(&mut env, "horner(p, 2)");
        assert!((r.as_scalar().unwrap() - 22.0).abs() < 1e-12);
    }

    #[test]
    fn horner_rejects_matrix_coeffs() {
        let mut env = Env::new();
        let err = env.run("horner([1, 2; 3, 4], 1)").unwrap_err();
        assert!(matches!(err, RuntimeError::BadArgument { .. }));
    }

    #[test]
    fn kahan_sum_beats_plain_sum() {
        // Build [1e16, 1, 1, ..., 1] (101 elements) in the REPL.
        let mut env = Env::new();
        // ones(1, 101) is a 1×101 row vector of 1.0; subtract 1 and add 1e16 in slot 1.
        // Simpler: just call kahan_sum and sum on a literal.
        env.run("v = [1e16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]").unwrap();
        let plain = run_last(&mut env, "sum(v)");
        let kahan = run_last(&mut env, "kahan_sum(v)");
        // Plain sum loses every small term — result is 1e16.
        assert_eq!(plain.as_scalar().unwrap(), 1.0e16);
        // Kahan recovers them (we added 10 ones).
        assert_eq!(kahan.as_scalar().unwrap(), 1.0e16 + 10.0);
    }

    #[test]
    fn eps_builtin_matches_f64() {
        let mut env = Env::new();
        let r = run_last(&mut env, "eps()");
        assert_eq!(r.as_scalar().unwrap(), f64::EPSILON);
    }

    #[test]
    fn jacobi_book_example_via_repl() {
        // Book §4.2 Example 4.8 — solution (1, -2, 3).
        let mut env = Env::new();
        env.run("A = [5, 3, -1; 2, -10, 1; -3, 4, -12]").unwrap();
        env.run("b = [-4; 25; -47]").unwrap();
        let x = run_last(&mut env, "jacobi(A, b)");
        assert!((x.get(0, 0).unwrap() - 1.0).abs() < 1e-6);
        assert!((x.get(1, 0).unwrap() + 2.0).abs() < 1e-6);
        assert!((x.get(2, 0).unwrap() - 3.0).abs() < 1e-6);
    }

    #[test]
    fn gauss_seidel_book_example_via_repl() {
        let mut env = Env::new();
        env.run("A = [5, 3, -1; 2, -10, 1; -3, 4, -12]").unwrap();
        env.run("b = [-4; 25; -47]").unwrap();
        let x = run_last(&mut env, "gauss_seidel(A, b)");
        assert!((x.get(0, 0).unwrap() - 1.0).abs() < 1e-6);
        assert!((x.get(1, 0).unwrap() + 2.0).abs() < 1e-6);
        assert!((x.get(2, 0).unwrap() - 3.0).abs() < 1e-6);
    }

    #[test]
    fn inv_matches_solve() {
        let mut env = Env::new();
        env.run("A = [2, 1; 1, 3]").unwrap();
        let inv = run_last(&mut env, "inv(A)");
        // (1/5) * [3, -1; -1, 2]
        assert!((inv.get(0, 0).unwrap() - 0.6).abs() < 1e-12);
        assert!((inv.get(0, 1).unwrap() + 0.2).abs() < 1e-12);
        assert!((inv.get(1, 0).unwrap() + 0.2).abs() < 1e-12);
        assert!((inv.get(1, 1).unwrap() - 0.4).abs() < 1e-12);
    }

    #[test]
    fn cond_inf_flags_ill_conditioned() {
        let mut env = Env::new();
        // Book Example 4.19: cond_∞ ≈ 1346.
        env.run("A = [4, 1; 4.03, 1]").unwrap();
        let c = run_last(&mut env, "cond_inf(A)");
        assert!(c.as_scalar().unwrap() > 1000.0);
    }

    #[test]
    fn hilbert_4_is_ill_conditioned() {
        let mut env = Env::new();
        let c = run_last(&mut env, "cond_inf(hilbert(4))");
        // Table 4.3 spectral value: 1.55e4. ∞-norm should be at least this magnitude.
        assert!(c.as_scalar().unwrap() > 1.0e4);
    }

    #[test]
    fn norm_builtins_vector_vs_matrix() {
        let mut env = Env::new();
        // Vector: ∞-norm = max abs
        let v = run_last(&mut env, "norm_inf([1, -3, 2])");
        assert_eq!(v.as_scalar().unwrap(), 3.0);
        // Vector: 2-norm of [3, 4] = 5
        let v = run_last(&mut env, "norm([3, 4])");
        assert_eq!(v.as_scalar().unwrap(), 5.0);
        // Matrix ∞-norm = max row sum
        let v = run_last(&mut env, "norm_inf([1, -2; 3, 4])");
        assert_eq!(v.as_scalar().unwrap(), 7.0);
    }

    #[test]
    fn residual_builtin_zero_on_exact_solution() {
        let mut env = Env::new();
        env.run("A = [1, 2; 3, 4]").unwrap();
        env.run("x = [1; 1]").unwrap();
        env.run("b = [3; 7]").unwrap();
        let r = run_last(&mut env, "residual(A, x, b)");
        for v in r.data() {
            assert!(v.abs() < 1e-12);
        }
    }

    #[test]
    fn refine_recovers_solution_from_noisy_initial() {
        // Same ill-conditioned system as the book Example 4.21.
        let mut env = Env::new();
        env.run("A = [4, 1; 4.03, 1]").unwrap();
        env.run("b = [5; 5.03]").unwrap();
        env.run("x_noisy = [0.9375; 1.25]").unwrap();
        let r = run_last(&mut env, "refine(A, b, x_noisy)");
        assert!((r.get(0, 0).unwrap() - 1.0).abs() < 1e-10, "got {:?}", r.data());
        assert!((r.get(1, 0).unwrap() - 1.0).abs() < 1e-10);
    }

    #[test]
    fn lu_round_trip_via_repl() {
        // PA = LU should hold for the book's Example 5.3 matrix.
        let mut env = Env::new();
        env.run("A = [1, -2, -2, -2; 2, -1, 2, 4; -1, 2, 3, -4; -2, 1, 4, -2]")
            .unwrap();
        env.run("L = lu_l(A)").unwrap();
        env.run("U = lu_u(A)").unwrap();
        env.run("P = lu_p(A)").unwrap();
        // P*A should equal L*U.
        let pa = run_last(&mut env, "P * A");
        let lu = run_last(&mut env, "L * U");
        for (a, b) in pa.data().iter().zip(lu.data().iter()) {
            assert!((a - b).abs() < 1e-10, "PA - LU mismatch");
        }
    }

    #[test]
    fn lu_solve_via_repl() {
        let mut env = Env::new();
        env.run("A = [2, 1, -1; -3, -1, 2; -2, 1, 2]").unwrap();
        env.run("b = [8; -11; -3]").unwrap();
        let x = run_last(&mut env, "lu_solve(A, b)");
        // Expected x = (2, 3, -1)
        assert!((x.get(0, 0).unwrap() - 2.0).abs() < 1e-10);
        assert!((x.get(1, 0).unwrap() - 3.0).abs() < 1e-10);
        assert!((x.get(2, 0).unwrap() - (-1.0)).abs() < 1e-10);
    }

    #[test]
    fn cholesky_book_example_via_repl() {
        // Hartung Example 5.7 — L = [[2,0,0],[-4,1,0],[2,-3,3]].
        let mut env = Env::new();
        env.run("A = [4, -8, 4; -8, 17, -11; 4, -11, 22]").unwrap();
        let l = run_last(&mut env, "chol(A)");
        let expected = [2.0, 0.0, 0.0, -4.0, 1.0, 0.0, 2.0, -3.0, 3.0];
        for (got, want) in l.data().iter().zip(expected.iter()) {
            assert!((got - want).abs() < 1e-12, "L = {:?}", l.data());
        }
    }

    #[test]
    fn det_via_repl() {
        let mut env = Env::new();
        let r = run_last(&mut env, "det([1, 2; 3, 4])");
        assert!((r.as_scalar().unwrap() - (-2.0)).abs() < 1e-12);
        let r = run_last(&mut env, "det(eye(5))");
        assert!((r.as_scalar().unwrap() - 1.0).abs() < 1e-12);
        // Singular matrix.
        let r = run_last(&mut env, "det([1, 2; 2, 4])");
        assert_eq!(r.as_scalar().unwrap(), 0.0);
    }

    #[test]
    fn cholesky_rejects_non_symmetric_in_repl() {
        let mut env = Env::new();
        let err = env.run("chol([1, 2; 3, 4])").unwrap_err();
        assert!(matches!(err, RuntimeError::Factor(_)));
    }

    #[test]
    fn lagrange_book_example_via_repl() {
        // Hartung Example 6.2 — L_3(0) should be 5.
        let mut env = Env::new();
        env.run("xs = [-1, 1, 2, 3]").unwrap();
        env.run("ys = [-3, 1, 3, 29]").unwrap();
        let r = run_last(&mut env, "lagrange(xs, ys, 0)");
        assert!((r.as_scalar().unwrap() - 5.0).abs() < 1e-10);
    }

    #[test]
    fn newton_eval_round_trip() {
        // Fit then evaluate via newton_eval — must match Lagrange.
        let mut env = Env::new();
        env.run("xs = [-1, 1, 2, 3]").unwrap();
        env.run("ys = [-3, 1, 3, 29]").unwrap();
        env.run("coefs = newton_coefs(xs, ys)").unwrap();
        let l = run_last(&mut env, "lagrange(xs, ys, 1.7)");
        let n = run_last(&mut env, "newton_eval(xs, coefs, 1.7)");
        assert!((l.as_scalar().unwrap() - n.as_scalar().unwrap()).abs() < 1e-10);
    }

    #[test]
    fn spline_eval_at_nodes_exact() {
        let mut env = Env::new();
        env.run("xs = [0, 1, 2, 3, 4]").unwrap();
        env.run("ys = [1, 0, 1, 0, 1]").unwrap();
        for (x_node, y_node) in [(0.0, 1.0), (1.0, 0.0), (2.0, 1.0), (3.0, 0.0), (4.0, 1.0)] {
            let r = run_last(&mut env, &format!("spline_eval(xs, ys, {x_node})"));
            assert!((r.as_scalar().unwrap() - y_node).abs() < 1e-10);
        }
    }

    #[test]
    fn hermite_eval_via_repl() {
        // Hartung Example 6.21: at x = -1, H_5 = 2.
        let mut env = Env::new();
        env.run("xs = [-1, 1, 2]").unwrap();
        env.run("ys = [2, 4, 11]").unwrap();
        env.run("yps = [3, -5, 30]").unwrap();
        let r = run_last(&mut env, "hermite_eval(xs, ys, yps, -1)");
        assert!((r.as_scalar().unwrap() - 2.0).abs() < 1e-10);
    }

    #[test]
    fn trapezoid_data_via_repl_book_example_7_7() {
        // f(x) = x² eˣ on [0, 1], n=4 intervals — book gives ≈ 0.7605963.
        let mut env = Env::new();
        env.run("xs = linspace(0, 1, 5)").unwrap();
        env.run("ys = xs .* xs .* exp(xs)").unwrap();
        let r = run_last(&mut env, "trapezoid_data(xs, ys)");
        assert!((r.as_scalar().unwrap() - 0.7605963).abs() < 1e-6);
    }

    #[test]
    fn simpson_data_via_repl_book_example_7_8() {
        // Same integral, n=8 intervals — book gives ≈ 0.7183215.
        let mut env = Env::new();
        env.run("xs = linspace(0, 1, 9)").unwrap();
        env.run("ys = xs .* xs .* exp(xs)").unwrap();
        let r = run_last(&mut env, "simpson_data(xs, ys)");
        assert!((r.as_scalar().unwrap() - 0.7183215).abs() < 1e-6);
    }

    #[test]
    fn legendre_at_one_is_one() {
        let mut env = Env::new();
        for n in 0..=6 {
            let r = run_last(&mut env, &format!("legendre({n}, 1)"));
            assert!((r.as_scalar().unwrap() - 1.0).abs() < 1e-12);
        }
    }

    #[test]
    fn gauss_nodes_2pt() {
        // Builtin should expose ±1/√3 and weights (1, 1).
        let mut env = Env::new();
        let r = run_last(&mut env, "gauss_nodes(2)");
        assert_eq!(r.shape(), (2, 2));
        assert!((r.get(0, 0).unwrap() + 1.0 / 3.0_f64.sqrt()).abs() < 1e-12);
        assert!((r.get(1, 0).unwrap() - 1.0 / 3.0_f64.sqrt()).abs() < 1e-12);
        assert!((r.get(0, 1).unwrap() - 1.0).abs() < 1e-12);
        assert!((r.get(1, 1).unwrap() - 1.0).abs() < 1e-12);
    }

    #[test]
    fn solve_bad_rhs_shape() {
        let mut env = Env::new();
        env.run("A = [1, 0; 0, 1]").unwrap();
        env.run("B = [1, 2; 3, 4]").unwrap();
        let err = env.run("solve(A, B)").unwrap_err();
        assert!(matches!(err, RuntimeError::BadArgument { .. }));
    }
}
