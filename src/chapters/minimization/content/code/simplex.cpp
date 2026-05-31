#include <vector>
#include <algorithm>
#include <numeric>
#include <iostream>
#include <functional>
using namespace std;
using Vec = vector<double>;

// Nelder-Mead downhill simplex minimization.
Vec nelder_mead(function<double(Vec)> f, Vec x0, double step = 0.5, double tol = 1e-10, int max_iter = 400) {
    int n = x0.size();
    vector<Vec> p(n + 1, x0);
    for (int i = 0; i < n; ++i) p[i + 1][i] += step;
    vector<double> fv(n + 1);
    for (int i = 0; i <= n; ++i) fv[i] = f(p[i]);
    for (int it = 0; it < max_iter; ++it) {
        vector<int> ord(n + 1); iota(ord.begin(), ord.end(), 0);
        sort(ord.begin(), ord.end(), [&](int a, int b) { return fv[a] < fv[b]; });
        vector<Vec> np(n + 1); vector<double> nf(n + 1);
        for (int i = 0; i <= n; ++i) { np[i] = p[ord[i]]; nf[i] = fv[ord[i]]; }
        p = np; fv = nf;
        if (fv[n] - fv[0] < tol) break;
        Vec c(n, 0);
        for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j) c[j] += p[i][j] / n;
        Vec xr(n); for (int j = 0; j < n; ++j) xr[j] = c[j] + (c[j] - p[n][j]);
        double fr = f(xr);
        if (fr < fv[0]) {
            Vec xe(n); for (int j = 0; j < n; ++j) xe[j] = c[j] + 2 * (c[j] - p[n][j]);
            double fe = f(xe);
            if (fe < fr) { p[n] = xe; fv[n] = fe; } else { p[n] = xr; fv[n] = fr; }
        } else if (fr < fv[n - 1]) {
            p[n] = xr; fv[n] = fr;
        } else {
            Vec xc(n); for (int j = 0; j < n; ++j) xc[j] = c[j] + 0.5 * (p[n][j] - c[j]);
            double fc = f(xc);
            if (fc < fv[n]) { p[n] = xc; fv[n] = fc; }
            else for (int i = 1; i <= n; ++i) { for (int j = 0; j < n; ++j) p[i][j] = p[0][j] + 0.5 * (p[i][j] - p[0][j]); fv[i] = f(p[i]); }
        }
    }
    return p[0];
}

int main() {
    auto f = [](Vec v) { return (v[0] - 1) * (v[0] - 1) + (v[1] - 2) * (v[1] - 2); };
    Vec x = nelder_mead(f, {0, 0});
    cout << x[0] << " " << x[1] << "\n";
}
