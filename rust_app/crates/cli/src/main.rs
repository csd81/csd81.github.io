//! `rmath` — REPL for the matrix language.
//!
//! Reads one line at a time, parses it as a sequence of statements, and prints
//! results in MATLAB style:
//!
//! ```text
//! rmath> A = [1, 2; 3, 4]
//! A =
//!       1.0000      2.0000
//!       3.0000      4.0000
//! ```

use std::io::{self, IsTerminal, Read, Write};

use engine::{Env, RuntimeError, StmtResult, Value};
use rustyline::error::ReadlineError;
use rustyline::DefaultEditor;

fn main() {
    if io::stdin().is_terminal() {
        repl();
    } else {
        // Piped input: read all of stdin and evaluate as one program.
        let mut src = String::new();
        if let Err(e) = io::stdin().read_to_string(&mut src) {
            eprintln!("rmath: stdin read error: {e}");
            std::process::exit(1);
        }
        let mut env = Env::new();
        if let Err(e) = run_block(&mut env, &src) {
            eprintln!("rmath: {e}");
            std::process::exit(1);
        }
    }
}

fn repl() {
    print_banner();
    let mut env = Env::new();
    let mut rl = match DefaultEditor::new() {
        Ok(rl) => rl,
        Err(e) => {
            eprintln!("rmath: failed to initialize editor: {e}");
            std::process::exit(1);
        }
    };

    loop {
        match rl.readline("rmath> ") {
            Ok(line) => {
                let trimmed = line.trim();
                if trimmed.is_empty() {
                    continue;
                }
                if matches!(trimmed, "exit" | "quit") {
                    break;
                }
                if matches!(trimmed, "help") {
                    print_help();
                    continue;
                }
                if matches!(trimmed, "who" | "whos") {
                    let mut names: Vec<&str> = env.names().collect();
                    names.sort();
                    if names.is_empty() {
                        println!("(no variables)");
                    } else {
                        println!("variables: {}", names.join(", "));
                    }
                    continue;
                }
                let _ = rl.add_history_entry(&line);
                if let Err(e) = run_block(&mut env, &line) {
                    println!("error: {e}");
                }
            }
            Err(ReadlineError::Interrupted) => continue, // Ctrl-C
            Err(ReadlineError::Eof) => break,            // Ctrl-D
            Err(e) => {
                eprintln!("rmath: input error: {e}");
                break;
            }
        }
    }
}

fn run_block(env: &mut Env, src: &str) -> Result<(), RuntimeError> {
    let results = env.run(src)?;
    let stdout = io::stdout();
    let mut out = stdout.lock();
    for r in results {
        print_result(&mut out, &r);
    }
    let _ = out.flush();
    Ok(())
}

fn print_result<W: Write>(out: &mut W, r: &StmtResult) {
    if r.suppress {
        return;
    }
    if let Some(name) = &r.binding {
        let _ = writeln!(out, "{name} =");
    }
    print_value(out, &r.value);
}

fn print_value<W: Write>(out: &mut W, v: &Value) {
    if v.is_scalar() {
        let _ = writeln!(out, "  {}", fmt_num(v.as_scalar().unwrap()));
        return;
    }
    if v.is_empty() {
        let _ = writeln!(out, "  []");
        return;
    }
    // Choose a uniform width based on the widest formatted value.
    let cells: Vec<String> = v.data().iter().map(|x| fmt_num(*x)).collect();
    let width = cells.iter().map(|s| s.len()).max().unwrap_or(1);
    let (rows, cols) = v.shape();
    for r in 0..rows {
        for c in 0..cols {
            let _ = write!(out, "  {:>width$}", cells[r * cols + c], width = width);
        }
        let _ = writeln!(out);
    }
}

/// MATLAB-ish number formatting: 4 fractional digits, but strip trailing zeros
/// for clean integers (`7` instead of `7.0000`).
fn fmt_num(x: f64) -> String {
    if !x.is_finite() {
        return format!("{x}");
    }
    if x == 0.0 {
        return "0".into();
    }
    let abs = x.abs();
    if abs != 0.0 && (abs < 1e-4 || abs >= 1e5) {
        // scientific notation for very small / very large
        return format!("{x:.4e}");
    }
    if (x - x.round()).abs() < 1e-12 && abs < 1e15 {
        return format!("{}", x.round() as i64);
    }
    format!("{x:.4}")
}

fn print_banner() {
    println!("rmath — matrix language REPL (type 'help', 'who', or 'exit')");
}

fn print_help() {
    println!(
        r#"language:
  arithmetic:    + - * / ^   (matrix multiply for *, integer matrix powers for ^)
  elementwise:   .* ./ .^
  transpose:     A'
  matrix literal: [1, 2; 3, 4]   (commas separate columns, semicolons separate rows)
  assignment:    x = expression
  suppress output by ending a statement with ';'

builtins:
  constructors:  zeros(n) | zeros(r,c), ones(n) | ones(r,c), eye(n), linspace(a,b,n)
  math (elementwise):  sin, cos, tan, exp, log, sqrt, abs
  inspection:    size(A), rows(A), cols(A), transpose(A)

repl:
  help     show this message
  who      list bound variables
  exit     leave the REPL  (Ctrl-D also works)"#
    );
}

#[cfg(test)]
mod tests {
    use super::*;
    use numerics::Matrix;

    fn render(v: &Value) -> String {
        let mut buf = Vec::new();
        print_value(&mut buf, v);
        String::from_utf8(buf).unwrap()
    }

    #[test]
    fn scalar_renders_clean_integer() {
        assert_eq!(render(&Matrix::scalar(7.0)).trim(), "7");
    }

    #[test]
    fn scalar_renders_fraction() {
        let s = render(&Matrix::scalar(0.5));
        assert!(s.contains("0.5000"), "got {s:?}");
    }

    #[test]
    fn matrix_renders_aligned() {
        let m = Matrix::new(2, 2, vec![1.0, 2.0, 3.0, 4.0]);
        let s = render(&m);
        // Two rows, each with two numbers separated by whitespace.
        let lines: Vec<&str> = s.trim_end().split('\n').collect();
        assert_eq!(lines.len(), 2);
        assert!(lines[0].contains("1") && lines[0].contains("2"));
        assert!(lines[1].contains("3") && lines[1].contains("4"));
    }

    #[test]
    fn empty_matrix_renders() {
        let m = Matrix::new(0, 0, vec![]);
        assert!(render(&m).contains("[]"));
    }

    #[test]
    fn end_to_end_via_env() {
        let mut env = Env::new();
        let results = env.run("A = [1, 2; 3, 4]; A * A").unwrap();
        assert_eq!(results.len(), 2);
        // First statement is suppressed; second is the product.
        assert!(results[0].suppress);
        assert_eq!(
            results[1].value.data(),
            &[7.0, 10.0, 15.0, 22.0] // [1 2;3 4]^2
        );
    }
}
