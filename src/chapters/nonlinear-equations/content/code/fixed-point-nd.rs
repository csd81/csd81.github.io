// Vector fixed-point iteration x_{k+1} = G(x_k).
fn fixed_point_nd<G: Fn(&[f64]) -> Vec<f64>>(g: G, x0: &[f64], tol: f64, max_iter: usize) -> Vec<f64> {
    let mut x = x0.to_vec();
    for _ in 0..max_iter {
        let xn = g(&x);
        let err = (0..x.len()).fold(0.0_f64, |m, i| m.max((xn[i] - x[i]).abs()));
        if err < tol { return xn; }
        x = xn;
    }
    x
}
fn main() {
    let g = |v: &[f64]| vec![v[1].cos(), v[0].sin()];
    println!("{:?}", fixed_point_nd(g, &[0.0, 0.0], 1e-12, 200));
}
