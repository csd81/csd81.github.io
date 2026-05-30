//! Abstract syntax tree.

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum BinOp {
    Add,
    Sub,
    Mul,
    Div,
    Pow,
    ElemMul,
    ElemDiv,
    ElemPow,
}

#[derive(Debug, Clone, PartialEq)]
pub enum Expr {
    Number(f64),
    Ident(String),
    Neg(Box<Expr>),
    Transpose(Box<Expr>),
    Binary {
        op: BinOp,
        lhs: Box<Expr>,
        rhs: Box<Expr>,
    },
    Call {
        name: String,
        args: Vec<Expr>,
    },
    /// `[row1; row2; ...]`. Each row is a Vec<Expr> (the elements).
    /// An empty matrix literal `[]` parses to `MatrixLit { rows: vec![] }`.
    MatrixLit {
        rows: Vec<Vec<Expr>>,
    },
}

#[derive(Debug, Clone, PartialEq)]
pub struct Statement {
    pub kind: StmtKind,
    /// If true (trailing `;`), suppress printing of the result in the REPL.
    pub suppress_output: bool,
}

#[derive(Debug, Clone, PartialEq)]
pub enum StmtKind {
    Assign { name: String, rhs: Expr },
    Expr(Expr),
}
