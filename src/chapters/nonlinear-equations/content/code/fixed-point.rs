// Fixed-point iteration x_{k+1} = g(x_k).
fn fixed_point<G: Fn(f64) -> f64>(g: G, x0: f64, tol: f64, max_iter: usize) -> f64 {
    let mut x = x0;
    for _ in 0..max_iter {
        let xn = g(x);
        if (xn - x).abs() < tol { return xn; }
        x = xn;
    }
    x
}
fn main() {
    println!("{}", fixed_point(|x: f64| x.cos(), 1.0, 1e-12, 200));
}
