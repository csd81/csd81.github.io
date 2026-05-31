// Classical fourth-order Runge-Kutta.
fn rk4<F: Fn(f64, f64) -> f64>(f: F, t0: f64, y0: f64, h: f64, n: usize) -> f64 {
    let (mut t, mut y) = (t0, y0);
    for _ in 0..n {
        let k1 = f(t, y);
        let k2 = f(t + h / 2.0, y + h / 2.0 * k1);
        let k3 = f(t + h / 2.0, y + h / 2.0 * k2);
        let k4 = f(t + h, y + h * k3);
        y += h * (k1 + 2.0 * k2 + 2.0 * k3 + k4) / 6.0; t += h;
    }
    y
}
fn main() {
    let f = |t: f64, y: f64| 2.0 * y - 10.0 * t * t + 2.0 * t;
    println!("y(1) = {}", rk4(f, 0.0, 1.0, 0.1, 10));
}
