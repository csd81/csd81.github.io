// Third-order Taylor method (first two total derivatives of f).
fn taylor3<F, G, H>(f: F, df: G, d2f: H, t0: f64, y0: f64, h: f64, n: usize) -> f64
where F: Fn(f64, f64) -> f64, G: Fn(f64, f64) -> f64, H: Fn(f64, f64) -> f64 {
    let (mut t, mut y) = (t0, y0);
    for _ in 0..n { y += h * f(t, y) + h * h / 2.0 * df(t, y) + h * h * h / 6.0 * d2f(t, y); t += h; }
    y
}
fn main() {
    let f = |t: f64, y: f64| 2.0 * y - 10.0 * t * t + 2.0 * t;
    let df = |t: f64, y: f64| 4.0 * y - 20.0 * t * t - 16.0 * t + 2.0;
    let d2f = |t: f64, y: f64| 8.0 * y - 40.0 * t * t - 32.0 * t - 16.0;
    println!("y(1) = {}", taylor3(f, df, d2f, 0.0, 1.0, 0.1, 10));
}
