//! Lexer, parser, and interpreter for the matrix language.

pub mod ast;
pub mod interp;
pub mod lexer;
pub mod parser;

pub use interp::{Env, RuntimeError, StmtResult, Value};
pub use lexer::{LexError, Lexer, Token, TokenKind};
pub use parser::{parse, parse_expr_str, ParseError};
