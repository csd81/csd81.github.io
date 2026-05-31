// Central-difference first derivative, error O(h^2).
fn deriv1<F: Fn(f64) -> f64>(f: F, x: f64, h: f64) -> f64 {
    (f(x + h) - f(x - h)) / (2.0 * h)
}

// Central-difference second derivative, error O(h^2).
fn deriv2<F: Fn(f64) -> f64>(f: F, x: f64, h: f64) -> f64 {
    (f(x + h) - 2.0 * f(x) + f(x - h)) / (h * h)
}

fn main() {
    let f = |x: f64| x.sin();
    println!("f'(1)  ~ {:.6}  exact cos(1)  = {:.6}", deriv1(f, 1.0, 0.01), 1.0_f64.cos());
    println!("f''(1) ~ {:.6}  exact -sin(1) = {:.6}", deriv2(f, 1.0, 0.01), -1.0_f64.sin());
}
