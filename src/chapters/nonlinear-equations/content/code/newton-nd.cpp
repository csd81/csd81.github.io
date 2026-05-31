#include <vector>
#include <iostream>
#include <functional>
#include <cmath>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;

Vec solve(Mat A, Vec b) {                          // Gaussian elimination
    int n = b.size();
    for (int k = 0; k < n; ++k) {
        int p = k;
        for (int i = k + 1; i < n; ++i) if (fabs(A[i][k]) > fabs(A[p][k])) p = i;
        swap(A[k], A[p]); swap(b[k], b[p]);
        for (int i = k + 1; i < n; ++i) { double f = A[i][k] / A[k][k];
            for (int j = k; j < n; ++j) A[i][j] -= f * A[k][j]; b[i] -= f * b[k]; }
    }
    Vec x(n);
    for (int i = n - 1; i >= 0; --i) { double s = b[i];
        for (int j = i + 1; j < n; ++j) s -= A[i][j] * x[j]; x[i] = s / A[i][i]; }
    return x;
}

double normInf(const Vec& v) { double m = 0; for (double e : v) m = max(m, fabs(e)); return m; }

// Newton's method for F(x) = 0 with Jacobian J(x).
Vec newton_system(function<Vec(Vec)> F, function<Mat(Vec)> J, Vec x, double tol = 1e-12, int max_iter = 100) {
    for (int k = 0; k < max_iter; ++k) {
        Vec Fx = F(x);
        if (normInf(Fx) < tol) return x;
        Vec neg(Fx.size()); for (size_t i = 0; i < Fx.size(); ++i) neg[i] = -Fx[i];
        Vec dx = solve(J(x), neg);
        for (size_t i = 0; i < x.size(); ++i) x[i] += dx[i];
    }
    return x;
}

int main() {
    auto F = [](Vec v) -> Vec { return {v[0]*v[0] + v[1]*v[1] - 4, v[0]*v[1] - 1}; };
    auto J = [](Vec v) -> Mat { return {{2*v[0], 2*v[1]}, {v[1], v[0]}}; };
    Vec x = newton_system(F, J, {2.0, 0.5});
    cout.precision(8);
    cout << "x = " << x[0] << " " << x[1] << "\n";
}
