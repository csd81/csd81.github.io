#include <vector>
#include <iostream>
#include <functional>
#include <cmath>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;
double norm(const Vec& v) { double s = 0; for (double e : v) s += e * e; return sqrt(s); }

Vec solve(Mat A, Vec b) {                              // Gaussian elimination
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

// Newton's method for unconstrained minimization (solves H p = grad).
Vec newton_min(function<Vec(Vec)> grad, function<Mat(Vec)> hess, Vec x, double tol = 1e-10, int max_iter = 100) {
    for (int k = 0; k < max_iter; ++k) {
        Vec g = grad(x);
        if (norm(g) < tol) break;
        Vec p = solve(hess(x), g);
        for (size_t i = 0; i < x.size(); ++i) x[i] -= p[i];
    }
    return x;
}

int main() {
    auto grad = [](Vec v) -> Vec { return {2 * (v[0] - 1), 2 * (v[1] - 2)}; };
    auto hess = [](Vec) -> Mat { return {{2, 0}, {0, 2}}; };
    Vec x = newton_min(grad, hess, {0, 0});
    cout << x[0] << " " << x[1] << "\n";
}
