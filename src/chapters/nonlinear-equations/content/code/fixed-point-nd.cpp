#include <vector>
#include <iostream>
#include <functional>
#include <cmath>
using namespace std;
using Vec = vector<double>;

double normInf(const Vec& a, const Vec& b) { double m = 0; for (size_t i = 0; i < a.size(); ++i) m = max(m, fabs(a[i] - b[i])); return m; }

// Vector fixed-point iteration x_{k+1} = G(x_k).
Vec fixed_point_nd(function<Vec(Vec)> G, Vec x, double tol = 1e-12, int max_iter = 200) {
    for (int k = 0; k < max_iter; ++k) {
        Vec xn = G(x);
        if (normInf(xn, x) < tol) return xn;
        x = xn;
    }
    return x;
}

int main() {
    auto G = [](Vec v) -> Vec { return {cos(v[1]), sin(v[0])}; };
    Vec x = fixed_point_nd(G, {0.0, 0.0});
    cout.precision(8);
    cout << "x = " << x[0] << " " << x[1] << "\n";
}
