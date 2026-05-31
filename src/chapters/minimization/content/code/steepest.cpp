#include <vector>
#include <iostream>
#include <functional>
#include <cmath>
using namespace std;
using Vec = vector<double>;
double norm(const Vec& v) { double s = 0; for (double e : v) s += e * e; return sqrt(s); }
double dot(const Vec& a, const Vec& b) { double s = 0; for (size_t i = 0; i < a.size(); ++i) s += a[i] * b[i]; return s; }

// Steepest descent with backtracking (Armijo) line search.
Vec steepest_descent(function<double(Vec)> f, function<Vec(Vec)> grad, Vec x, double tol = 1e-8, int max_iter = 1000) {
    int n = x.size();
    for (int k = 0; k < max_iter; ++k) {
        Vec g = grad(x);
        if (norm(g) < tol) break;
        Vec d(n); for (int i = 0; i < n; ++i) d[i] = -g[i];
        double t = 1.0, fx = f(x), gd = dot(g, d);
        auto step = [&](double s) { Vec y(n); for (int i = 0; i < n; ++i) y[i] = x[i] + s * d[i]; return y; };
        while (f(step(t)) > fx + 1e-4 * t * gd) t *= 0.5;
        x = step(t);
    }
    return x;
}

int main() {
    auto f = [](Vec v) { return (v[0] - 1) * (v[0] - 1) + 5 * (v[1] - 2) * (v[1] - 2); };
    auto grad = [](Vec v) -> Vec { return {2 * (v[0] - 1), 10 * (v[1] - 2)}; };
    Vec x = steepest_descent(f, grad, {0, 0});
    cout << x[0] << " " << x[1] << "\n";
}
