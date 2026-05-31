#include <vector>
#include <iostream>
#include <cmath>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;

Vec solve(Mat A, Vec b) {                       // Gaussian elimination, partial pivot
    int n = b.size();
    for (int k = 0; k < n; ++k) {
        int p = k;
        for (int i = k + 1; i < n; ++i) if (fabs(A[i][k]) > fabs(A[p][k])) p = i;
        swap(A[k], A[p]); swap(b[k], b[p]);
        for (int i = k + 1; i < n; ++i) {
            double f = A[i][k] / A[k][k];
            for (int j = k; j < n; ++j) A[i][j] -= f * A[k][j];
            b[i] -= f * b[k];
        }
    }
    Vec x(n);
    for (int i = n - 1; i >= 0; --i) {
        double s = b[i];
        for (int j = i + 1; j < n; ++j) s -= A[i][j] * x[j];
        x[i] = s / A[i][i];
    }
    return x;
}

// Least-squares polynomial fit via the normal equations (A^T A) c = A^T y.
Vec poly_fit(const Vec& t, const Vec& y, int deg) {
    int n = t.size(), m = deg + 1;
    Mat A(n, Vec(m, 1.0));
    for (int i = 0; i < n; ++i)
        for (int j = 1; j < m; ++j) A[i][j] = A[i][j - 1] * t[i];
    Mat N(m, Vec(m, 0.0)); Vec r(m, 0.0);
    for (int j = 0; j < m; ++j) {
        for (int k = 0; k < m; ++k) { double s = 0; for (int i = 0; i < n; ++i) s += A[i][j] * A[i][k]; N[j][k] = s; }
        double s = 0; for (int i = 0; i < n; ++i) s += A[i][j] * y[i]; r[j] = s;
    }
    return solve(N, r);
}

int main() {
    Vec t = {0, 1, 2, 3, 4}, y = {1.0, 1.8, 3.3, 4.5, 6.3};
    Vec c = poly_fit(t, y, 2);
    cout << "coeffs (low->high):";
    for (double v : c) cout << " " << v;
    cout << "\n";
}
