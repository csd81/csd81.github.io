#include <vector>
#include <iostream>
using namespace std;
using Vec = vector<double>;

// Thomas algorithm for a tridiagonal system (a sub-, b diag, c super-, d rhs).
Vec thomas(const Vec& a, const Vec& b, Vec c, Vec d) {
    int n = d.size();
    c[0] /= b[0]; d[0] /= b[0];
    for (int i = 1; i < n; ++i) {
        double m = b[i] - a[i] * c[i - 1];
        if (i < n - 1) c[i] /= m;
        d[i] = (d[i] - a[i] * d[i - 1]) / m;
    }
    Vec x(n);
    x[n - 1] = d[n - 1];
    for (int i = n - 2; i >= 0; --i) x[i] = d[i] - c[i] * x[i + 1];
    return x;
}

int main() {
    Vec a = {0, -1, -1, -1}, b = {4, 4, 4, 4}, c = {-1, -1, -1, 0}, d = {2, 4, 6, 13};
    for (double v : thomas(a, b, c, d)) cout << v << " ";
    cout << "\n";
}
