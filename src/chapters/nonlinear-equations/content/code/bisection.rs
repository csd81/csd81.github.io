// Bisection root of f on a bracket [a, b] (requires f(a)*f(b) < 0).
fn bisection<F: Fn(f64) -> f64>(f: F, mut a: f64, mut b: f64, tol: f64, max_iter: usize) -> f64 {
    let mut fa = f(a);
    for _ in 0..max_iter {
        let c = (a + b) / 2.0;
        let fc = f(c);
        if fc == 0.0 || (b - a) / 2.0 < tol { return c; }
        if fa * fc < 0.0 { b = c; } else { a = c; fa = fc; }
    }
    (a + b) / 2.0
}
fn main() {
    println!("{}", bisection(|x: f64| x * x - 2.0, 1.0, 2.0, 1e-12, 200));
}
