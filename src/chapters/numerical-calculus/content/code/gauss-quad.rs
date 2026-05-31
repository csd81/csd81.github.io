// 2- or 3-point Gauss-Legendre quadrature on [a, b].
fn gauss_quad<F: Fn(f64) -> f64>(f: F, a: f64, b: f64, n: usize) -> f64 {
    let (t, w): (Vec<f64>, Vec<f64>) = if n == 3 {
        (vec![-(3.0_f64 / 5.0).sqrt(), 0.0, (3.0_f64 / 5.0).sqrt()], vec![5.0 / 9.0, 8.0 / 9.0, 5.0 / 9.0])
    } else {
        (vec![-1.0 / 3.0_f64.sqrt(), 1.0 / 3.0_f64.sqrt()], vec![1.0, 1.0])
    };
    let hm = (b - a) / 2.0;               // map [-1,1] -> [a,b]
    let mid = (a + b) / 2.0;
    hm * t.iter().zip(&w).map(|(&ti, &wi)| wi * f(mid + hm * ti)).sum::<f64>()
}
fn main() {
    println!("int_0^1 e^x dx = {} (2-pt)", gauss_quad(|x: f64| x.exp(), 0.0, 1.0, 2));
    println!("int_0^1 e^x dx = {} (3-pt)", gauss_quad(|x: f64| x.exp(), 0.0, 1.0, 3));
}
// -> 1.7178964 (2-pt), 1.7182810 (3-pt); exact e-1 = 1.7182818
