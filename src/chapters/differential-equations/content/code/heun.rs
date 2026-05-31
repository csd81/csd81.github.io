// Heun's method (RK2).
fn heun<F: Fn(f64, f64) -> f64>(f: F, t0: f64, y0: f64, h: f64, n: usize) -> f64 {
    let (mut t, mut y) = (t0, y0);
    for _ in 0..n {
        let k1 = f(t, y); let k2 = f(t + h, y + h * k1);
        y += h * (k1 + k2) / 2.0; t += h;
    }
    y
}
fn main() {
    let f = |t: f64, y: f64| 2.0 * y - 10.0 * t * t + 2.0 * t;
    println!("y(1) = {}", heun(f, 0.0, 1.0, 0.1, 10));
}
