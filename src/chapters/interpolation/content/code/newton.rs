// Newton divided-difference coefficients a_i = f[x_0, ..., x_i].
fn divided_differences(x: &[f64], y: &[f64]) -> Vec<f64> {
    let n = x.len();
    let mut a = y.to_vec();
    for j in 1..n {
        for i in (j..n).rev() {
            a[i] = (a[i] - a[i - 1]) / (x[i] - x[i - j]);
        }
    }
    a
}
fn main() {
    let x = [-1.0, 1.0, 2.0, 3.0];
    let y = [-3.0, 1.0, 3.0, 29.0];
    println!("{:?}", divided_differences(&x, &y));   // [-3, 2, 0, 3]
}
