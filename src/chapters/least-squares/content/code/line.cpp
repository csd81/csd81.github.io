#include <iostream>
#include <vector>
using namespace std;
using Vec = vector<double>;

// Least-squares line y = a + b x via the 2x2 normal equations.
void line_fit(const Vec& x, const Vec& y, double& a, double& b) {
    int n = x.size();
    double Sx = 0, Sy = 0, Sxx = 0, Sxy = 0;
    for (int i = 0; i < n; ++i) {
        Sx += x[i]; Sy += y[i];
        Sxx += x[i] * x[i]; Sxy += x[i] * y[i];
    }
    b = (n * Sxy - Sx * Sy) / (n * Sxx - Sx * Sx);   // slope
    a = (Sy - b * Sx) / n;                            // intercept
}

int main() {
    Vec x = {0, 1, 2, 3, 4}, y = {1, 3, 2, 5, 4};
    double a, b;
    line_fit(x, y, a, b);
    cout.precision(4);
    cout << fixed << "slope b = " << b << ", intercept a = " << a << "\n";
}
// -> slope b = 0.8000, intercept a = 1.4000
