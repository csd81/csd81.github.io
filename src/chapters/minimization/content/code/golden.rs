// Golden-section search for the minimum of a unimodal f on [a, b].
fn golden_section<F: Fn(f64) -> f64>(f: F, mut a: f64, mut b: f64, tol: f64) -> f64 {
    let g = (5.0_f64.sqrt() - 1.0) / 2.0;
    let (mut c, mut d) = (b - g * (b - a), a + g * (b - a));
    let (mut fc, mut fd) = (f(c), f(d));
    while b - a > tol {
        if fc < fd { b = d; d = c; fd = fc; c = b - g * (b - a); fc = f(c); }
        else { a = c; c = d; fc = fd; d = a + g * (b - a); fd = f(d); }
    }
    (a + b) / 2.0
}
fn main() {
    println!("{}", golden_section(|x: f64| (x - 2.0).powi(2) + 1.0, 0.0, 5.0, 1e-8));
}
