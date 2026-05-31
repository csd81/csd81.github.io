// Secant method (derivative-free, uses two previous iterates).
fn secant<F: Fn(f64) -> f64>(f: F, mut x0: f64, mut x1: f64, tol: f64, max_iter: usize) -> f64 {
    let (mut f0, mut f1) = (f(x0), f(x1));
    for _ in 0..max_iter {
        let x2 = x1 - f1 * (x1 - x0) / (f1 - f0);
        if (x2 - x1).abs() < tol { return x2; }
        x0 = x1; f0 = f1; x1 = x2; f1 = f(x2);
    }
    x1
}
fn main() {
    println!("{}", secant(|x: f64| x * x - 2.0, 1.0, 2.0, 1e-12, 100));
}
