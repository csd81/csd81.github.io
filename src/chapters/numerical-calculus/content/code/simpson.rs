// Composite Simpson's rule (n forced even).
fn simpson<F: Fn(f64) -> f64>(f: F, a: f64, b: f64, mut n: usize) -> f64 {
    if n % 2 == 1 { n += 1; }
    let h = (b - a) / n as f64;
    let mut s = f(a) + f(b);
    for i in 1..n { s += (if i % 2 == 1 { 4.0 } else { 2.0 }) * f(a + i as f64 * h); }
    h / 3.0 * s
}
fn main() {
    println!("int_0^1 e^x dx = {}", simpson(|x: f64| x.exp(), 0.0, 1.0, 100));
}
