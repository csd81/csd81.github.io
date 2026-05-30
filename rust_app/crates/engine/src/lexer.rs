//! Tokenizer for the matrix language.
//!
//! Lexical rules:
//! * Whitespace (including newlines) separates tokens but has no meaning.
//! * Inside matrix literals `[...]`, elements MUST be separated by `,`
//!   (columns) or `;` (rows). Implicit whitespace separation is not supported.
//! * Statements are separated by `;` or end-of-input.
//! * `'` is the postfix transpose operator (string literals are not supported).

use std::fmt;

use thiserror::Error;

#[derive(Debug, Clone, PartialEq)]
pub enum TokenKind {
    Number(f64),
    Ident(String),

    Plus,
    Minus,
    Star,
    Slash,
    Caret,
    DotStar,
    DotSlash,
    DotCaret,

    Equals,
    LBracket,
    RBracket,
    LParen,
    RParen,
    Comma,
    Semicolon,
    Transpose,

    Eof,
}

impl fmt::Display for TokenKind {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            Self::Number(n) => write!(f, "{n}"),
            Self::Ident(s) => write!(f, "{s}"),
            Self::Plus => f.write_str("+"),
            Self::Minus => f.write_str("-"),
            Self::Star => f.write_str("*"),
            Self::Slash => f.write_str("/"),
            Self::Caret => f.write_str("^"),
            Self::DotStar => f.write_str(".*"),
            Self::DotSlash => f.write_str("./"),
            Self::DotCaret => f.write_str(".^"),
            Self::Equals => f.write_str("="),
            Self::LBracket => f.write_str("["),
            Self::RBracket => f.write_str("]"),
            Self::LParen => f.write_str("("),
            Self::RParen => f.write_str(")"),
            Self::Comma => f.write_str(","),
            Self::Semicolon => f.write_str(";"),
            Self::Transpose => f.write_str("'"),
            Self::Eof => f.write_str("<eof>"),
        }
    }
}

#[derive(Debug, Clone, PartialEq)]
pub struct Token {
    pub kind: TokenKind,
    pub line: usize,
    pub col: usize,
}

#[derive(Debug, Error, PartialEq)]
pub enum LexError {
    #[error("unexpected character '{ch}' at {line}:{col}")]
    UnexpectedChar { ch: char, line: usize, col: usize },
    #[error("malformed number '{literal}' at {line}:{col}: {reason}")]
    BadNumber {
        literal: String,
        line: usize,
        col: usize,
        reason: String,
    },
}

pub struct Lexer<'a> {
    src: &'a [u8],
    pos: usize,
    line: usize,
    col: usize,
}

impl<'a> Lexer<'a> {
    pub fn new(src: &'a str) -> Self {
        Self {
            src: src.as_bytes(),
            pos: 0,
            line: 1,
            col: 1,
        }
    }

    pub fn tokenize(mut self) -> Result<Vec<Token>, LexError> {
        let mut out = Vec::new();
        loop {
            let tok = self.next_token()?;
            let is_eof = matches!(tok.kind, TokenKind::Eof);
            out.push(tok);
            if is_eof {
                return Ok(out);
            }
        }
    }

    fn peek(&self) -> Option<u8> {
        self.src.get(self.pos).copied()
    }

    fn peek_at(&self, offset: usize) -> Option<u8> {
        self.src.get(self.pos + offset).copied()
    }

    fn advance(&mut self) -> Option<u8> {
        let b = self.peek()?;
        self.pos += 1;
        if b == b'\n' {
            self.line += 1;
            self.col = 1;
        } else {
            self.col += 1;
        }
        Some(b)
    }

    fn skip_whitespace_and_comments(&mut self) {
        while let Some(b) = self.peek() {
            match b {
                b' ' | b'\t' | b'\r' | b'\n' => {
                    self.advance();
                }
                b'%' | b'#' => {
                    // line comment — consume to end of line
                    while let Some(c) = self.peek() {
                        if c == b'\n' {
                            break;
                        }
                        self.advance();
                    }
                }
                _ => break,
            }
        }
    }

    fn next_token(&mut self) -> Result<Token, LexError> {
        self.skip_whitespace_and_comments();
        let line = self.line;
        let col = self.col;
        let Some(b) = self.peek() else {
            return Ok(Token {
                kind: TokenKind::Eof,
                line,
                col,
            });
        };

        // Numbers: digit or `.<digit>`.
        if b.is_ascii_digit() || (b == b'.' && self.peek_at(1).is_some_and(|c| c.is_ascii_digit())) {
            return self.lex_number(line, col);
        }

        if b.is_ascii_alphabetic() || b == b'_' {
            return Ok(self.lex_ident(line, col));
        }

        // Multi-character operators starting with '.'
        if b == b'.' {
            let next = self.peek_at(1);
            let kind = match next {
                Some(b'*') => Some(TokenKind::DotStar),
                Some(b'/') => Some(TokenKind::DotSlash),
                Some(b'^') => Some(TokenKind::DotCaret),
                _ => None,
            };
            if let Some(k) = kind {
                self.advance();
                self.advance();
                return Ok(Token { kind: k, line, col });
            }
        }

        let single = match b {
            b'+' => Some(TokenKind::Plus),
            b'-' => Some(TokenKind::Minus),
            b'*' => Some(TokenKind::Star),
            b'/' => Some(TokenKind::Slash),
            b'^' => Some(TokenKind::Caret),
            b'=' => Some(TokenKind::Equals),
            b'[' => Some(TokenKind::LBracket),
            b']' => Some(TokenKind::RBracket),
            b'(' => Some(TokenKind::LParen),
            b')' => Some(TokenKind::RParen),
            b',' => Some(TokenKind::Comma),
            b';' => Some(TokenKind::Semicolon),
            b'\'' => Some(TokenKind::Transpose),
            _ => None,
        };
        if let Some(kind) = single {
            self.advance();
            return Ok(Token { kind, line, col });
        }

        Err(LexError::UnexpectedChar {
            ch: b as char,
            line,
            col,
        })
    }

    fn lex_number(&mut self, line: usize, col: usize) -> Result<Token, LexError> {
        let start = self.pos;
        // integer part
        while self.peek().is_some_and(|c| c.is_ascii_digit()) {
            self.advance();
        }
        // fractional part
        if self.peek() == Some(b'.') && self.peek_at(1).is_some_and(|c| c.is_ascii_digit()) {
            self.advance(); // consume '.'
            while self.peek().is_some_and(|c| c.is_ascii_digit()) {
                self.advance();
            }
        } else if self.peek() == Some(b'.') {
            // Trailing dot like "3." — consume; treat as 3.0
            self.advance();
        }
        // exponent
        if matches!(self.peek(), Some(b'e') | Some(b'E')) {
            self.advance();
            if matches!(self.peek(), Some(b'+') | Some(b'-')) {
                self.advance();
            }
            if !self.peek().is_some_and(|c| c.is_ascii_digit()) {
                let literal = std::str::from_utf8(&self.src[start..self.pos])
                    .unwrap_or("?")
                    .to_string();
                return Err(LexError::BadNumber {
                    literal,
                    line,
                    col,
                    reason: "exponent has no digits".into(),
                });
            }
            while self.peek().is_some_and(|c| c.is_ascii_digit()) {
                self.advance();
            }
        }

        let literal = std::str::from_utf8(&self.src[start..self.pos]).unwrap_or("?");
        let value = literal.parse::<f64>().map_err(|e| LexError::BadNumber {
            literal: literal.to_string(),
            line,
            col,
            reason: e.to_string(),
        })?;
        Ok(Token {
            kind: TokenKind::Number(value),
            line,
            col,
        })
    }

    fn lex_ident(&mut self, line: usize, col: usize) -> Token {
        let start = self.pos;
        while self
            .peek()
            .is_some_and(|c| c.is_ascii_alphanumeric() || c == b'_')
        {
            self.advance();
        }
        let name = std::str::from_utf8(&self.src[start..self.pos])
            .unwrap_or("?")
            .to_string();
        Token {
            kind: TokenKind::Ident(name),
            line,
            col,
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn kinds(src: &str) -> Vec<TokenKind> {
        Lexer::new(src)
            .tokenize()
            .unwrap()
            .into_iter()
            .map(|t| t.kind)
            .collect()
    }

    #[test]
    fn empty_input_is_just_eof() {
        assert_eq!(kinds(""), vec![TokenKind::Eof]);
        assert_eq!(kinds("   \n\t  "), vec![TokenKind::Eof]);
    }

    #[test]
    fn arithmetic_operators() {
        assert_eq!(
            kinds("1 + 2 - 3 * 4 / 5 ^ 6"),
            vec![
                TokenKind::Number(1.0),
                TokenKind::Plus,
                TokenKind::Number(2.0),
                TokenKind::Minus,
                TokenKind::Number(3.0),
                TokenKind::Star,
                TokenKind::Number(4.0),
                TokenKind::Slash,
                TokenKind::Number(5.0),
                TokenKind::Caret,
                TokenKind::Number(6.0),
                TokenKind::Eof,
            ]
        );
    }

    #[test]
    fn elementwise_operators() {
        assert_eq!(
            kinds("A .* B ./ C .^ 2"),
            vec![
                TokenKind::Ident("A".into()),
                TokenKind::DotStar,
                TokenKind::Ident("B".into()),
                TokenKind::DotSlash,
                TokenKind::Ident("C".into()),
                TokenKind::DotCaret,
                TokenKind::Number(2.0),
                TokenKind::Eof,
            ]
        );
    }

    #[test]
    fn matrix_literal() {
        assert_eq!(
            kinds("[1, 2; 3, 4]"),
            vec![
                TokenKind::LBracket,
                TokenKind::Number(1.0),
                TokenKind::Comma,
                TokenKind::Number(2.0),
                TokenKind::Semicolon,
                TokenKind::Number(3.0),
                TokenKind::Comma,
                TokenKind::Number(4.0),
                TokenKind::RBracket,
                TokenKind::Eof,
            ]
        );
    }

    #[test]
    fn floats_and_exponents() {
        let toks = kinds("3.14 .5 2e3 1.5E-2");
        let nums: Vec<f64> = toks
            .iter()
            .filter_map(|t| match t {
                TokenKind::Number(n) => Some(*n),
                _ => None,
            })
            .collect();
        assert_eq!(nums.len(), 4);
        assert!((nums[0] - 3.14).abs() < 1e-12);
        assert!((nums[1] - 0.5).abs() < 1e-12);
        assert!((nums[2] - 2000.0).abs() < 1e-12);
        assert!((nums[3] - 0.015).abs() < 1e-12);
    }

    #[test]
    fn comments_are_skipped() {
        assert_eq!(
            kinds("1 % this is a comment\n+ 2"),
            vec![
                TokenKind::Number(1.0),
                TokenKind::Plus,
                TokenKind::Number(2.0),
                TokenKind::Eof,
            ]
        );
        assert_eq!(
            kinds("3 # also a comment\n* 4"),
            vec![
                TokenKind::Number(3.0),
                TokenKind::Star,
                TokenKind::Number(4.0),
                TokenKind::Eof,
            ]
        );
    }

    #[test]
    fn transpose_postfix() {
        assert_eq!(
            kinds("A'"),
            vec![
                TokenKind::Ident("A".into()),
                TokenKind::Transpose,
                TokenKind::Eof,
            ]
        );
    }

    #[test]
    fn assignment_and_call() {
        assert_eq!(
            kinds("x = sin(0.5)"),
            vec![
                TokenKind::Ident("x".into()),
                TokenKind::Equals,
                TokenKind::Ident("sin".into()),
                TokenKind::LParen,
                TokenKind::Number(0.5),
                TokenKind::RParen,
                TokenKind::Eof,
            ]
        );
    }

    #[test]
    fn unknown_char_errors() {
        let err = Lexer::new("1 + @ 2").tokenize().unwrap_err();
        assert!(matches!(err, LexError::UnexpectedChar { ch: '@', .. }));
    }

    #[test]
    fn position_tracking() {
        let toks = Lexer::new("a\n  b").tokenize().unwrap();
        assert_eq!(toks[0].line, 1);
        assert_eq!(toks[0].col, 1);
        assert_eq!(toks[1].line, 2);
        assert_eq!(toks[1].col, 3);
    }
}
