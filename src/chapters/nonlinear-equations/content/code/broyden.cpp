#include <vector>
#include <iostream>
#include <functional>
#include <cmath>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;

Vec solve(Mat A, Vec b) {
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

// Broyden's (good) method for F(x) = 0.
Vec broyden(function<Vec(Vec)> F, Vec x, double tol = 1e-12, int max_iter = 100) {
    int n = x.size();
    Mat B(n, Vec(n, 0)); for (int i = 0; i < n; ++i) B[i][i] = 1;       // B = I
    Vec Fx = F(x);
    for (int k = 0; k < max_iter; ++k) {
        if (normInf(Fx) < tol) return x;
        Vec neg(n); for (int i = 0; i < n; ++i) neg[i] = -Fx[i];
        Vec dx = solve(B, neg);
        for (int i = 0; i < n; ++i) x[i] += dx[i];
        Vec Fn = F(x), dF(n);
        for (int i = 0; i < n; ++i) dF[i] = Fn[i] - Fx[i];
        Vec Bdx(n, 0);
        for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j) Bdx[i] += B[i][j] * dx[j];
        double dd = 0; for (int i = 0; i < n; ++i) dd += dx[i] * dx[i];
        for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j)
            B[i][j] += (dF[i] - Bdx[i]) * dx[j] / dd;                   // rank-1 update
        Fx = Fn;
    }
    return x;
}

int main() {
    auto F = [](Vec v) -> Vec { return {v[0]*v[0] + v[1]*v[1] - 4, v[0]*v[1] - 1}; };
    Vec x = broyden(F, {2.0, 0.5});
    cout.precision(8);
    cout << "x = " << x[0] << " " << x[1] << "\n";
}
