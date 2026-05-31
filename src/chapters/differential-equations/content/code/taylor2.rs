// Second-order Taylor method; df is the total derivative f' = f_t + f_y f.
fn taylor2<F, G>(f: F, df: G, t0: f64, y0: f64, h: f64, n: usize) -> f64
where F: Fn(f64, f64) -> f64, G: Fn(f64, f64) -> f64 {
    let (mut t, mut y) = (t0, y0);
    for _ in 0..n { y += h * f(t, y) + h * h / 2.0 * df(t, y); t += h; }
    y
}
fn main() {
    let f = |t: f64, y: f64| 2.0 * y - 10.0 * t * t + 2.0 * t;
    let df = |t: f64, y: f64| 4.0 * y - 20.0 * t * t - 16.0 * t + 2.0;
    println!("y(1) = {}", taylor2(f, df, 0.0, 1.0, 0.1, 10));
}
