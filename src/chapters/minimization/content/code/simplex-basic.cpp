#include <vector>
#include <iostream>
#include <functional>
#include <cmath>
#include <algorithm>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;
double dist(const Vec& a, const Vec& b) { double s = 0; for (size_t i = 0; i < a.size(); ++i) s += (a[i]-b[i])*(a[i]-b[i]); return sqrt(s); }

// Basic fixed-shape simplex method (reflect worst through centroid, else shrink to best).
Vec simplex_basic(function<double(Vec)> f, Vec x0, double step = 1.0, double tol = 1e-8, int max_iter = 500) {
    int n = x0.size();
    Mat P(n + 1, x0);
    for (int i = 0; i < n; ++i) P[i + 1][i] += step;                    // n+1 vertices
    Vec fv(n + 1); for (int i = 0; i <= n; ++i) fv[i] = f(P[i]);
    for (int it = 0; it < max_iter; ++it) {
        int iw = 0, ib = 0;
        for (int i = 1; i <= n; ++i) { if (fv[i] > fv[iw]) iw = i; if (fv[i] < fv[ib]) ib = i; }
        double sz = 0; for (int i = 0; i <= n; ++i) sz = max(sz, dist(P[i], P[ib]));
        if (sz < tol) break;
        Vec c(n, 0);                                                    // centroid of all but the worst
        for (int i = 0; i <= n; ++i) if (i != iw) for (int j = 0; j < n; ++j) c[j] += P[i][j] / n;
        Vec xr(n); for (int j = 0; j < n; ++j) xr[j] = c[j] + (c[j] - P[iw][j]);   // reflect worst
        double fr = f(xr);
        if (fr < fv[iw]) { P[iw] = xr; fv[iw] = fr; }
        else {                                                          // shrink toward the best
            Vec best = P[ib];
            for (int i = 0; i <= n; ++i) if (i != ib) {
                for (int j = 0; j < n; ++j) P[i][j] = best[j] + 0.5 * (P[i][j] - best[j]);
                fv[i] = f(P[i]);
            }
        }
    }
    int ib = 0; for (int i = 1; i <= n; ++i) if (fv[i] < fv[ib]) ib = i;
    return P[ib];
}

int main() {
    auto f = [](Vec v) { return (v[0] - 1) * (v[0] - 1) + (v[1] - 2) * (v[1] - 2); };
    Vec x = simplex_basic(f, {0, 0});
    cout << x[0] << " " << x[1] << "\n";
}
