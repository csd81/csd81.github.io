#include <vector>
#include <iostream>
#include <functional>
#include <cmath>
using namespace std;
using Vec = vector<double>;
double norm(const Vec& v) { double s = 0; for (double e : v) s += e * e; return sqrt(s); }

// Gradient descent with constant step size alpha.
Vec gradient_descent(function<Vec(Vec)> grad, Vec x, double alpha = 0.1, double tol = 1e-8, int max_iter = 100000) {
    for (int k = 0; k < max_iter; ++k) {
        Vec g = grad(x);
        if (norm(g) < tol) break;
        for (size_t i = 0; i < x.size(); ++i) x[i] -= alpha * g[i];
    }
    return x;
}

int main() {
    auto grad = [](Vec v) -> Vec { return {2 * (v[0] - 1), 2 * (v[1] - 2)}; };
    Vec x = gradient_descent(grad, {0, 0});
    cout << x[0] << " " << x[1] << "\n";
}
