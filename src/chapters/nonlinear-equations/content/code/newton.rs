// Newton's method using f and its derivative df.
fn newton<F: Fn(f64) -> f64, D: Fn(f64) -> f64>(f: F, df: D, x0: f64, tol: f64, max_iter: usize) -> f64 {
    let mut x = x0;
    for _ in 0..max_iter {
        let fx = f(x);
        if fx.abs() < tol { return x; }
        x -= fx / df(x);
    }
    x
}
fn main() {
    println!("{}", newton(|x: f64| x * x - 2.0, |x: f64| 2.0 * x, 1.0, 1e-12, 100));
}
