// Composite trapezoidal and Simpson rules on [a, b] with n subintervals.
fn composite<F: Fn(f64) -> f64>(f: F, a: f64, b: f64, mut n: usize) -> (f64, f64) {
    if n % 2 == 1 { n += 1; }            // Simpson needs even n
    let h = (b - a) / n as f64;
    let mut t = (f(a) + f(b)) / 2.0;
    let mut s = f(a) + f(b);
    for i in 1..n {
        let yi = f(a + i as f64 * h);
        t += yi;
        s += (if i % 2 == 1 { 4.0 } else { 2.0 }) * yi;
    }
    (h * t, h / 3.0 * s)
}
fn main() {
    let (t, s) = composite(|x: f64| x.exp(), 0.0, 1.0, 10);
    println!("trapezoid = {}", t);
    println!("Simpson   = {}", s);
}
// -> trapezoid ~ 1.7197135, Simpson ~ 1.7182828; exact e-1 = 1.7182818
