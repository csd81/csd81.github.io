#include <vector>
#include <iostream>
using namespace std;
using Vec = vector<double>;

// Newton divided-difference coefficients a_i = f[x_0,...,x_i].
Vec divided_differences(const Vec& x, const Vec& y) {
    int n = x.size();
    Vec a = y;
    for (int j = 1; j < n; ++j)
        for (int i = n - 1; i >= j; --i)
            a[i] = (a[i] - a[i - 1]) / (x[i] - x[i - j]);
    return a;
}

double newton_eval(const Vec& x, const Vec& a, double t) {
    double p = a.back();
    for (int k = (int)a.size() - 2; k >= 0; --k) p = p * (t - x[k]) + a[k];
    return p;
}

int main() {
    Vec x = {-1, 1, 2, 3}, y = {-3, 1, 3, 29};
    Vec a = divided_differences(x, y);
    cout << "divided differences:";
    for (double v : a) cout << " " << v;
    cout << "\np(0) = " << newton_eval(x, a, 0.0) << "\n";
}
