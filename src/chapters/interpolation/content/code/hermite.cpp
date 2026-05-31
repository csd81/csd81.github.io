#include <vector>
#include <iostream>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;

// Hermite interpolation via divided differences with doubled nodes.
// Fills z (nodes) and returns the Newton coefficients (table diagonal).
Vec hermite_coeffs(const Vec& x, const Vec& y, const Vec& dy, Vec& z) {
    int n = x.size(), m = 2 * n;
    z.assign(m, 0.0);
    Mat Q(m, Vec(m, 0.0));
    for (int i = 0; i < n; ++i) {
        z[2 * i] = z[2 * i + 1] = x[i];
        Q[2 * i][0] = Q[2 * i + 1][0] = y[i];
        Q[2 * i + 1][1] = dy[i];
        if (i > 0) Q[2 * i][1] = (Q[2 * i][0] - Q[2 * i - 1][0]) / (z[2 * i] - z[2 * i - 1]);
    }
    for (int j = 2; j < m; ++j)
        for (int i = j; i < m; ++i)
            Q[i][j] = (Q[i][j - 1] - Q[i - 1][j - 1]) / (z[i] - z[i - j]);
    Vec a(m);
    for (int i = 0; i < m; ++i) a[i] = Q[i][i];
    return a;
}

double horner(const Vec& z, const Vec& a, double t) {
    double p = a.back();
    for (int k = (int)a.size() - 2; k >= 0; --k) p = p * (t - z[k]) + a[k];
    return p;
}

int main() {
    Vec x = {0, 1}, y = {1, 0}, dy = {0, 0}, z;
    Vec a = hermite_coeffs(x, y, dy, z);
    cout << "coeffs:";
    for (double v : a) cout << " " << v;
    cout << "\np(0.5) = " << horner(z, a, 0.5) << "\n";
}
