// Composite trapezoidal rule.
fn trapezoid<F: Fn(f64) -> f64>(f: F, a: f64, b: f64, n: usize) -> f64 {
    let h = (b - a) / n as f64;
    let mut s = (f(a) + f(b)) / 2.0;
    for i in 1..n { s += f(a + i as f64 * h); }
    h * s
}
fn main() {
    println!("int_0^1 e^x dx = {}", trapezoid(|x: f64| x.exp(), 0.0, 1.0, 100));
}
