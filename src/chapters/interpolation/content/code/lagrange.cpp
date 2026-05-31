#include <vector>
#include <iostream>
#include <cmath>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;

// Solve A x = b by Gaussian elimination with partial pivoting.
Vec solve(Mat A, Vec b) {
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

// Coefficients (low->high) of the interpolant through (x_i, y_i) via Vandermonde.
Vec lagrange_coeffs(const Vec& x, const Vec& y) {
    int n = x.size();
    Mat V(n, Vec(n, 1.0));
    for (int i = 0; i < n; ++i)
        for (int j = 1; j < n; ++j) V[i][j] = V[i][j - 1] * x[i];   // x_i^j
    return solve(V, y);
}

int main() {
    Vec x = {-1, 1, 2, 3}, y = {-3, 1, 3, 29};
    Vec a = lagrange_coeffs(x, y);
    cout << "coefficients (low->high):";
    for (double v : a) cout << " " << v;
    cout << "\n";
}
