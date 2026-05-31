// Evaluate a polynomial with coefficients a = [a_n, ..., a_0] (high -> low) at x.
fn horner(a: &[f64], x: f64) -> f64 {
    let mut y = a[0];
    for &c in &a[1..] {
        y = y * x + c;
    }
    y
}

fn main() {
    // p(x) = 5x^4 - 8x^3 + 2x^2 + 4x - 10
    println!("{}", horner(&[5.0, -8.0, 2.0, 4.0, -10.0], 2.0));   // 22
}
