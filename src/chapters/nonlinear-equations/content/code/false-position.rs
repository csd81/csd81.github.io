// Regula falsi (false position) for f on a bracket [a, b].
fn false_position<F: Fn(f64) -> f64>(f: F, mut a: f64, mut b: f64, tol: f64, max_iter: usize) -> f64 {
    let (mut fa, mut fb) = (f(a), f(b));
    let mut c = a;
    for _ in 0..max_iter {
        c = (a * fb - b * fa) / (fb - fa);
        let fc = f(c);
        if fc.abs() < tol { return c; }
        if fa * fc < 0.0 { b = c; fb = fc; } else { a = c; fa = fc; }
    }
    c
}
fn main() {
    println!("{}", false_position(|x: f64| x * x - 2.0, 1.0, 2.0, 1e-12, 200));
}
