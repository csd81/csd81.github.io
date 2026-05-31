#include <vector>
#include <iostream>
using namespace std;
using Vec = vector<double>;

// Natural cubic spline: per-interval S_i(t)=a+b(t-x_i)+c(t-x_i)^2+d(t-x_i)^3.
void natural_cubic_spline(const Vec& x, const Vec& y, Vec& a, Vec& b, Vec& c, Vec& d) {
    int n = x.size();
    Vec h(n - 1);
    for (int i = 0; i < n - 1; ++i) h[i] = x[i + 1] - x[i];
    // tridiagonal system for c (second-derivative coefficients), natural ends
    Vec lo(n, 0), di(n, 1), up(n, 0), r(n, 0);
    for (int i = 1; i < n - 1; ++i) {
        lo[i] = h[i - 1]; di[i] = 2 * (h[i - 1] + h[i]); up[i] = h[i];
        r[i] = 3 * ((y[i + 1] - y[i]) / h[i] - (y[i] - y[i - 1]) / h[i - 1]);
    }
    Vec cf(n);                          // Thomas algorithm
    for (int i = 1; i < n; ++i) { double w = lo[i] / di[i - 1]; di[i] -= w * up[i - 1]; r[i] -= w * r[i - 1]; }
    cf[n - 1] = r[n - 1] / di[n - 1];
    for (int i = n - 2; i >= 0; --i) cf[i] = (r[i] - up[i] * cf[i + 1]) / di[i];
    a.assign(n - 1, 0); b.assign(n - 1, 0); c.assign(n - 1, 0); d.assign(n - 1, 0);
    for (int i = 0; i < n - 1; ++i) {
        a[i] = y[i];
        b[i] = (y[i + 1] - y[i]) / h[i] - h[i] * (2 * cf[i] + cf[i + 1]) / 3;
        c[i] = cf[i];
        d[i] = (cf[i + 1] - cf[i]) / (3 * h[i]);
    }
}

int main() {
    Vec x = {0, 1, 2, 3}, y = {0, 1, 0, 1}, a, b, c, d;
    natural_cubic_spline(x, y, a, b, c, d);
    auto pr = [](const char* s, const Vec& v){ cout << s; for (double q : v) cout << " " << q; cout << "\n"; };
    pr("a =", a); pr("b =", b); pr("c =", c); pr("d =", d);
}
