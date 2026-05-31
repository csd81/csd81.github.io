#include <vector>
#include <iostream>
#include <functional>
#include <cmath>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;
double norm(const Vec& v) { double s = 0; for (double e : v) s += e * e; return sqrt(s); }
double dot(const Vec& a, const Vec& b) { double s = 0; for (size_t i = 0; i < a.size(); ++i) s += a[i] * b[i]; return s; }

// BFGS quasi-Newton minimization with backtracking line search.
Vec bfgs(function<double(Vec)> f, function<Vec(Vec)> grad, Vec x, double tol = 1e-8, int max_iter = 200) {
    int n = x.size();
    Mat H(n, Vec(n, 0)); for (int i = 0; i < n; ++i) H[i][i] = 1;   // inverse-Hessian estimate
    Vec g = grad(x);
    for (int k = 0; k < max_iter; ++k) {
        if (norm(g) < tol) break;
        Vec d(n);                                                   // d = -H g
        for (int i = 0; i < n; ++i) { double s = 0; for (int j = 0; j < n; ++j) s += H[i][j] * g[j]; d[i] = -s; }
        double t = 1.0, fx = f(x), gd = dot(g, d);
        auto step = [&](double a) { Vec y(n); for (int i = 0; i < n; ++i) y[i] = x[i] + a * d[i]; return y; };
        while (f(step(t)) > fx + 1e-4 * t * gd) t *= 0.5;
        Vec s(n); for (int i = 0; i < n; ++i) s[i] = t * d[i];
        Vec x_new = step(t), g_new = grad(x_new), y(n);
        for (int i = 0; i < n; ++i) y[i] = g_new[i] - g[i];
        double sy = dot(s, y);
        if (sy > 1e-12) {                                           // BFGS inverse update
            double rho = 1.0 / sy;
            Mat Hy(n, Vec(1));
            // H = (I - rho s y^T) H (I - rho y s^T) + rho s s^T
            Mat A(n, Vec(n)), B(n, Vec(n));
            for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j) A[i][j] = (i == j ? 1.0 : 0.0) - rho * s[i] * y[j];
            for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j) B[i][j] = (i == j ? 1.0 : 0.0) - rho * y[i] * s[j];
            Mat AH(n, Vec(n, 0));
            for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j) for (int l = 0; l < n; ++l) AH[i][j] += A[i][l] * H[l][j];
            Mat AHB(n, Vec(n, 0));
            for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j) for (int l = 0; l < n; ++l) AHB[i][j] += AH[i][l] * B[l][j];
            for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j) H[i][j] = AHB[i][j] + rho * s[i] * s[j];
            (void)Hy;
        }
        x = x_new; g = g_new;
    }
    return x;
}

int main() {
    auto f = [](Vec v) { return (v[0] - 1) * (v[0] - 1) + 5 * (v[1] - 2) * (v[1] - 2); };
    auto grad = [](Vec v) -> Vec { return {2 * (v[0] - 1), 10 * (v[1] - 2)}; };
    Vec x = bfgs(f, grad, {0, 0});
    cout << x[0] << " " << x[1] << "\n";
}
