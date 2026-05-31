#include <vector>
#include <iostream>
#include <functional>
#include <cmath>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;
double norm(const Vec& v) { double s = 0; for (double e : v) s += e * e; return sqrt(s); }
double dot(const Vec& a, const Vec& b) { double s = 0; for (size_t i = 0; i < a.size(); ++i) s += a[i] * b[i]; return s; }
Vec matvec(const Mat& M, const Vec& v) { int n = M.size(); Vec r(n, 0); for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j) r[i] += M[i][j] * v[j]; return r; }

// SR1 (Symmetric Rank-One) quasi-Newton minimization (inverse-Hessian form).
Vec sr1(function<double(Vec)> f, function<Vec(Vec)> grad, Vec x, double tol = 1e-8, int max_iter = 200) {
    int n = x.size();
    Mat H(n, Vec(n, 0)); for (int i = 0; i < n; ++i) H[i][i] = 1;       // inverse-Hessian estimate
    Vec g = grad(x);
    for (int k = 0; k < max_iter; ++k) {
        if (norm(g) < tol) break;
        Vec d = matvec(H, g); for (double& di : d) di = -di;            // d = -H g
        if (dot(g, d) >= 0) {                                           // safeguard: SR1 may lose definiteness
            for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j) H[i][j] = (i == j);
            d = g; for (double& di : d) di = -di;
        }
        double t = 1.0, fx = f(x), gd = dot(g, d);
        auto step = [&](double a) { Vec y(n); for (int i = 0; i < n; ++i) y[i] = x[i] + a * d[i]; return y; };
        while (f(step(t)) > fx + 1e-4 * t * gd) t *= 0.5;
        Vec s(n); for (int i = 0; i < n; ++i) s[i] = t * d[i];
        Vec x_new = step(t), g_new = grad(x_new), y(n);
        for (int i = 0; i < n; ++i) y[i] = g_new[i] - g[i];
        Vec Hy = matvec(H, y), w(n);
        for (int i = 0; i < n; ++i) w[i] = s[i] - Hy[i];               // secant-condition residual
        double wy = dot(w, y);
        if (fabs(wy) > 1e-12) {                                        // SR1 inverse update (rank one)
            for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j) H[i][j] += w[i] * w[j] / wy;
        }
        x = x_new; g = g_new;
    }
    return x;
}

int main() {
    auto f = [](Vec v) { return (v[0] - 1) * (v[0] - 1) + 5 * (v[1] - 2) * (v[1] - 2); };
    auto grad = [](Vec v) -> Vec { return {2 * (v[0] - 1), 10 * (v[1] - 2)}; };
    Vec x = sr1(f, grad, {0, 0});
    cout << x[0] << " " << x[1] << "\n";
}
