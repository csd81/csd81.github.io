//! Pratt parser for the matrix language.
//!
//! Precedence (low → high):
//!
//! | Operator                | BP  | Assoc      |
//! |-------------------------|-----|------------|
//! | `+`, `-` (binary)       | 10  | left       |
//! | `*`, `/`, `.*`, `./`    | 20  | left       |
//! | unary `+`, `-`          | 30  | prefix     |
//! | `^`, `.^`               | 40  | right      |
//! | `'` (transpose), call   | 50  | postfix    |

use crate::ast::{BinOp, Expr, Statement, StmtKind};
use crate::lexer::{LexError, Lexer, Token, TokenKind};
use thiserror::Error;

#[derive(Debug, Error, PartialEq)]
pub enum ParseError {
    #[error("lex error: {0}")]
    Lex(#[from] LexError),
    #[error("unexpected token {found} at {line}:{col}, expected {expected}")]
    Unexpected {
        found: String,
        expected: String,
        line: usize,
        col: usize,
    },
    #[error("unexpected end of input, expected {expected}")]
    UnexpectedEof { expected: String },
    #[error("'{0}' is not a valid statement target on the left of '='")]
    InvalidAssignTarget(String),
}

pub fn parse(src: &str) -> Result<Vec<Statement>, ParseError> {
    let tokens = Lexer::new(src).tokenize()?;
    let mut p = Parser::new(tokens);
    p.parse_program()
}

/// Parse a single expression. Trailing whitespace is allowed but anything
/// non-whitespace after the expression is an error.
pub fn parse_expr_str(src: &str) -> Result<crate::ast::Expr, ParseError> {
    let tokens = Lexer::new(src).tokenize()?;
    let mut p = Parser::new(tokens);
    let e = p.parse_expr()?;
    if !p.at_eof() {
        let t = p.peek();
        return Err(ParseError::Unexpected {
            found: t.kind.to_string(),
            expected: "end of expression".into(),
            line: t.line,
            col: t.col,
        });
    }
    Ok(e)
}

pub struct Parser {
    tokens: Vec<Token>,
    pos: usize,
}

impl Parser {
    pub fn new(tokens: Vec<Token>) -> Self {
        Self { tokens, pos: 0 }
    }

    fn peek(&self) -> &Token {
        &self.tokens[self.pos]
    }

    fn peek_kind(&self) -> &TokenKind {
        &self.tokens[self.pos].kind
    }

    fn advance(&mut self) -> Token {
        let t = self.tokens[self.pos].clone();
        if !matches!(t.kind, TokenKind::Eof) {
            self.pos += 1;
        }
        t
    }

    fn at_eof(&self) -> bool {
        matches!(self.peek_kind(), TokenKind::Eof)
    }

    fn expect(&mut self, want: &TokenKind, label: &str) -> Result<Token, ParseError> {
        if std::mem::discriminant(self.peek_kind()) == std::mem::discriminant(want) {
            Ok(self.advance())
        } else {
            let t = self.peek();
            Err(ParseError::Unexpected {
                found: t.kind.to_string(),
                expected: label.into(),
                line: t.line,
                col: t.col,
            })
        }
    }

    pub fn parse_program(&mut self) -> Result<Vec<Statement>, ParseError> {
        let mut stmts = Vec::new();
        while !self.at_eof() {
            // skip empty stmts like ";;"
            if matches!(self.peek_kind(), TokenKind::Semicolon) {
                self.advance();
                continue;
            }
            let kind = self.parse_statement()?;
            let suppress = if matches!(self.peek_kind(), TokenKind::Semicolon) {
                self.advance();
                true
            } else {
                false
            };
            stmts.push(Statement {
                kind,
                suppress_output: suppress,
            });
        }
        Ok(stmts)
    }

    fn parse_statement(&mut self) -> Result<StmtKind, ParseError> {
        // Lookahead: IDENT `=` (and not `==`, but we don't have `==` anyway)
        // is assignment.
        if let TokenKind::Ident(name) = self.peek_kind() {
            let name = name.clone();
            if matches!(
                self.tokens.get(self.pos + 1).map(|t| &t.kind),
                Some(TokenKind::Equals)
            ) {
                self.advance(); // ident
                self.advance(); // equals
                let rhs = self.parse_expr()?;
                return Ok(StmtKind::Assign { name, rhs });
            }
        }
        Ok(StmtKind::Expr(self.parse_expr()?))
    }

    pub fn parse_expr(&mut self) -> Result<Expr, ParseError> {
        self.expr_bp(0)
    }

    fn expr_bp(&mut self, min_bp: u8) -> Result<Expr, ParseError> {
        let mut lhs = self.parse_prefix()?;

        loop {
            // Postfix transpose
            if matches!(self.peek_kind(), TokenKind::Transpose) {
                let l_bp = 50;
                if l_bp < min_bp {
                    break;
                }
                self.advance();
                lhs = Expr::Transpose(Box::new(lhs));
                continue;
            }

            // Postfix call — only valid if lhs is a bare identifier.
            if matches!(self.peek_kind(), TokenKind::LParen) {
                if let Expr::Ident(_) = &lhs {
                    let l_bp = 50;
                    if l_bp < min_bp {
                        break;
                    }
                    let Expr::Ident(name) = lhs else { unreachable!() };
                    self.advance(); // (
                    let args = self.parse_call_args()?;
                    self.expect(&TokenKind::RParen, ")")?;
                    lhs = Expr::Call { name, args };
                    continue;
                }
                // parenthesized expression-as-grouping handled in parse_prefix
            }

            // Infix
            let Some((op, l_bp, r_bp)) = self.peek_infix_bp() else {
                break;
            };
            if l_bp < min_bp {
                break;
            }
            self.advance();
            let rhs = self.expr_bp(r_bp)?;
            lhs = Expr::Binary {
                op,
                lhs: Box::new(lhs),
                rhs: Box::new(rhs),
            };
        }

        Ok(lhs)
    }

    fn peek_infix_bp(&self) -> Option<(BinOp, u8, u8)> {
        match self.peek_kind() {
            TokenKind::Plus => Some((BinOp::Add, 10, 11)),
            TokenKind::Minus => Some((BinOp::Sub, 10, 11)),
            TokenKind::Star => Some((BinOp::Mul, 20, 21)),
            TokenKind::Slash => Some((BinOp::Div, 20, 21)),
            TokenKind::DotStar => Some((BinOp::ElemMul, 20, 21)),
            TokenKind::DotSlash => Some((BinOp::ElemDiv, 20, 21)),
            // right-assoc: r_bp < l_bp so deeper recursion takes equal-prec ops
            TokenKind::Caret => Some((BinOp::Pow, 41, 40)),
            TokenKind::DotCaret => Some((BinOp::ElemPow, 41, 40)),
            _ => None,
        }
    }

    fn parse_prefix(&mut self) -> Result<Expr, ParseError> {
        let tok = self.peek().clone();
        match &tok.kind {
            TokenKind::Number(n) => {
                self.advance();
                Ok(Expr::Number(*n))
            }
            TokenKind::Ident(name) => {
                let name = name.clone();
                self.advance();
                Ok(Expr::Ident(name))
            }
            TokenKind::Minus => {
                self.advance();
                let rhs = self.expr_bp(30)?;
                Ok(Expr::Neg(Box::new(rhs)))
            }
            TokenKind::Plus => {
                // unary plus is a no-op
                self.advance();
                self.expr_bp(30)
            }
            TokenKind::LParen => {
                self.advance();
                let inner = self.parse_expr()?;
                self.expect(&TokenKind::RParen, ")")?;
                Ok(inner)
            }
            TokenKind::LBracket => self.parse_matrix_lit(),
            TokenKind::Eof => Err(ParseError::UnexpectedEof {
                expected: "expression".into(),
            }),
            _ => Err(ParseError::Unexpected {
                found: tok.kind.to_string(),
                expected: "expression".into(),
                line: tok.line,
                col: tok.col,
            }),
        }
    }

    fn parse_matrix_lit(&mut self) -> Result<Expr, ParseError> {
        self.expect(&TokenKind::LBracket, "[")?;
        // Empty: `[]`
        if matches!(self.peek_kind(), TokenKind::RBracket) {
            self.advance();
            return Ok(Expr::MatrixLit { rows: Vec::new() });
        }
        let mut rows: Vec<Vec<Expr>> = Vec::new();
        loop {
            let mut row: Vec<Expr> = Vec::new();
            row.push(self.parse_expr()?);
            // collect comma-separated elements in this row
            while matches!(self.peek_kind(), TokenKind::Comma) {
                self.advance();
                row.push(self.parse_expr()?);
            }
            rows.push(row);
            match self.peek_kind() {
                TokenKind::Semicolon => {
                    self.advance();
                    // allow trailing semicolon before `]`
                    if matches!(self.peek_kind(), TokenKind::RBracket) {
                        break;
                    }
                }
                TokenKind::RBracket => break,
                _ => {
                    let t = self.peek();
                    return Err(ParseError::Unexpected {
                        found: t.kind.to_string(),
                        expected: "',', ';' or ']'".into(),
                        line: t.line,
                        col: t.col,
                    });
                }
            }
        }
        self.expect(&TokenKind::RBracket, "]")?;
        Ok(Expr::MatrixLit { rows })
    }

    fn parse_call_args(&mut self) -> Result<Vec<Expr>, ParseError> {
        let mut args = Vec::new();
        if matches!(self.peek_kind(), TokenKind::RParen) {
            return Ok(args);
        }
        args.push(self.parse_expr()?);
        while matches!(self.peek_kind(), TokenKind::Comma) {
            self.advance();
            args.push(self.parse_expr()?);
        }
        Ok(args)
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::ast::{BinOp, Expr, StmtKind};

    fn parse_one_expr(src: &str) -> Expr {
        let stmts = parse(src).unwrap();
        assert_eq!(stmts.len(), 1);
        match &stmts[0].kind {
            StmtKind::Expr(e) => e.clone(),
            other => panic!("expected expr statement, got {other:?}"),
        }
    }

    #[test]
    fn precedence_multiply_before_add() {
        // 1 + 2 * 3  =>  Add(1, Mul(2, 3))
        let e = parse_one_expr("1 + 2 * 3");
        match e {
            Expr::Binary { op: BinOp::Add, lhs, rhs } => {
                assert_eq!(*lhs, Expr::Number(1.0));
                assert!(matches!(*rhs, Expr::Binary { op: BinOp::Mul, .. }));
            }
            other => panic!("{other:?}"),
        }
    }

    #[test]
    fn left_assoc_subtraction() {
        // 10 - 3 - 2 => Sub(Sub(10,3), 2) — left-associative
        let e = parse_one_expr("10 - 3 - 2");
        match e {
            Expr::Binary { op: BinOp::Sub, lhs, rhs } => {
                assert_eq!(*rhs, Expr::Number(2.0));
                assert!(matches!(*lhs, Expr::Binary { op: BinOp::Sub, .. }));
            }
            other => panic!("{other:?}"),
        }
    }

    #[test]
    fn right_assoc_power() {
        // 2 ^ 3 ^ 2  =>  Pow(2, Pow(3, 2)) — right-associative
        let e = parse_one_expr("2 ^ 3 ^ 2");
        match e {
            Expr::Binary { op: BinOp::Pow, lhs, rhs } => {
                assert_eq!(*lhs, Expr::Number(2.0));
                assert!(matches!(*rhs, Expr::Binary { op: BinOp::Pow, .. }));
            }
            other => panic!("{other:?}"),
        }
    }

    #[test]
    fn unary_minus_binds_tighter_than_add() {
        // -2 + 3 => Add(Neg(2), 3), not Neg(Add(2,3))
        let e = parse_one_expr("-2 + 3");
        match e {
            Expr::Binary { op: BinOp::Add, lhs, rhs } => {
                assert!(matches!(*lhs, Expr::Neg(_)));
                assert_eq!(*rhs, Expr::Number(3.0));
            }
            other => panic!("{other:?}"),
        }
    }

    #[test]
    fn unary_minus_binds_looser_than_power() {
        // -2 ^ 2 => Neg(Pow(2, 2)) = -4, which matches MATLAB.
        let e = parse_one_expr("-2 ^ 2");
        match e {
            Expr::Neg(inner) => {
                assert!(matches!(*inner, Expr::Binary { op: BinOp::Pow, .. }));
            }
            other => panic!("{other:?}"),
        }
    }

    #[test]
    fn transpose_postfix_binds_tight() {
        // A' + B => Add(Transpose(A), B)
        let e = parse_one_expr("A' + B");
        match e {
            Expr::Binary { op: BinOp::Add, lhs, rhs } => {
                assert!(matches!(*lhs, Expr::Transpose(_)));
                assert_eq!(*rhs, Expr::Ident("B".into()));
            }
            other => panic!("{other:?}"),
        }
    }

    #[test]
    fn parens_override_precedence() {
        // (1 + 2) * 3
        let e = parse_one_expr("(1 + 2) * 3");
        match e {
            Expr::Binary { op: BinOp::Mul, lhs, rhs } => {
                assert!(matches!(*lhs, Expr::Binary { op: BinOp::Add, .. }));
                assert_eq!(*rhs, Expr::Number(3.0));
            }
            other => panic!("{other:?}"),
        }
    }

    #[test]
    fn matrix_literal_2x2() {
        let e = parse_one_expr("[1, 2; 3, 4]");
        match e {
            Expr::MatrixLit { rows } => {
                assert_eq!(rows.len(), 2);
                assert_eq!(rows[0], vec![Expr::Number(1.0), Expr::Number(2.0)]);
                assert_eq!(rows[1], vec![Expr::Number(3.0), Expr::Number(4.0)]);
            }
            other => panic!("{other:?}"),
        }
    }

    #[test]
    fn empty_matrix() {
        let e = parse_one_expr("[]");
        assert_eq!(e, Expr::MatrixLit { rows: Vec::new() });
    }

    #[test]
    fn assignment() {
        let stmts = parse("A = [1, 2; 3, 4]").unwrap();
        assert_eq!(stmts.len(), 1);
        match &stmts[0].kind {
            StmtKind::Assign { name, rhs } => {
                assert_eq!(name, "A");
                assert!(matches!(rhs, Expr::MatrixLit { .. }));
            }
            other => panic!("{other:?}"),
        }
    }

    #[test]
    fn multiple_statements_with_suppression() {
        // A = 1;  B = 2  =>  A suppressed, B not.
        let stmts = parse("A = 1; B = 2").unwrap();
        assert_eq!(stmts.len(), 2);
        assert!(stmts[0].suppress_output);
        assert!(!stmts[1].suppress_output);
    }

    #[test]
    fn function_call() {
        let e = parse_one_expr("sin(0.5)");
        match e {
            Expr::Call { name, args } => {
                assert_eq!(name, "sin");
                assert_eq!(args, vec![Expr::Number(0.5)]);
            }
            other => panic!("{other:?}"),
        }
    }

    #[test]
    fn call_with_multiple_args() {
        let e = parse_one_expr("zeros(3, 4)");
        match e {
            Expr::Call { name, args } => {
                assert_eq!(name, "zeros");
                assert_eq!(args, vec![Expr::Number(3.0), Expr::Number(4.0)]);
            }
            other => panic!("{other:?}"),
        }
    }

    #[test]
    fn error_on_missing_paren() {
        let err = parse("sin(0.5").unwrap_err();
        assert!(matches!(
            err,
            ParseError::Unexpected { ref expected, .. } if expected == ")"
        ));
    }

    #[test]
    fn nested_matrix_with_expressions() {
        // [1 + 2, sin(0); 3, 4 * 5]
        let e = parse_one_expr("[1 + 2, sin(0); 3, 4 * 5]");
        match e {
            Expr::MatrixLit { rows } => {
                assert_eq!(rows.len(), 2);
                assert!(matches!(&rows[0][0], Expr::Binary { op: BinOp::Add, .. }));
                assert!(matches!(&rows[0][1], Expr::Call { .. }));
                assert!(matches!(&rows[1][1], Expr::Binary { op: BinOp::Mul, .. }));
            }
            other => panic!("{other:?}"),
        }
    }
}
