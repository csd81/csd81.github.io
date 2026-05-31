// Evaluate the Newton form by nested (Horner-like) multiplication.
fn newton_eval(x: &[f64], a: &[f64], t: f64) -> f64 {
    let mut p = *a.last().unwrap();
    for k in (0..a.len() - 1).rev() {
        p = p * (t - x[k]) + a[k];
    }
    p
}
fn main() {
    println!("{}", newton_eval(&[-1.0, 1.0, 2.0, 3.0], &[-3.0, 2.0, 0.0, 3.0], 0.0));   // 5
}
