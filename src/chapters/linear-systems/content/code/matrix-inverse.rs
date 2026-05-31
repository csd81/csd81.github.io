// Matrix inverse via Gauss-Jordan on the augmented matrix [A | I].
fn inverse(a: &[Vec<f64>]) -> Vec<Vec<f64>> {
    let n = a.len();
    let mut m: Vec<Vec<f64>> = (0..n).map(|i| {
        let mut row = a[i].clone();
        row.extend((0..n).map(|j| if i == j { 1.0 } else { 0.0 }));
        row
    }).collect();
    for k in 0..n {
        let mut p = k;
        for i in k + 1..n { if m[i][k].abs() > m[p][k].abs() { p = i; } }
        m.swap(k, p);
        let d = m[k][k];
        for j in 0..2 * n { m[k][j] /= d; }
        for i in 0..n {
            if i != k {
                let f = m[i][k];
                for j in 0..2 * n { m[i][j] -= f * m[k][j]; }
            }
        }
    }
    m.iter().map(|row| row[n..].to_vec()).collect()
}
fn main() {
    let a = vec![vec![2.0, 1.0, -1.0], vec![-3.0, -1.0, 2.0], vec![-2.0, 1.0, 2.0]];
    for row in inverse(&a) { println!("{:?}", row); }
}
