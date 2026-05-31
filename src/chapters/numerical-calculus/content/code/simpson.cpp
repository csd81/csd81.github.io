#include <iostream>
#include <functional>
#include <cmath>
using namespace std;

// Composite Simpson's rule (n forced even) on [a, b].
double simpson(function<double(double)> f, double a, double b, int n = 100) {
    if (n % 2) ++n;
    double h = (b - a) / n, s = f(a) + f(b);
    for (int i = 1; i < n; ++i) s += (i % 2 ? 4 : 2) * f(a + i * h);
    return h / 3 * s;
}

int main() {
    cout.precision(10);
    cout << "int_0^1 e^x dx ~ " << simpson([](double x) { return exp(x); }, 0, 1, 100) << "\n";
}
