// Central-difference first derivative D(h), error O(h^2).
fn central<F: Fn(f64) -> f64>(f: &F, x: f64, h: f64) -> f64 {
    (f(x + h) - f(x - h)) / (2.0 * h)
}

fn main() {
    let f = |x: f64| x.sin();
    let (x, h) = (1.0, 0.1);
    let d1 = central(&f, x, h);          // D(h),   error O(h^2)
    let d2 = central(&f, x, h / 2.0);    // D(h/2), error O(h^2)
    let ext = (4.0 * d2 - d1) / 3.0;     // Richardson extrapolation, error O(h^4)
    println!("D(h)         = {:.10}", d1);
    println!("D(h/2)       = {:.10}", d2);
    println!("extrapolated = {:.10}  exact cos(1) = {:.10}", ext, 1.0_f64.cos());
}
