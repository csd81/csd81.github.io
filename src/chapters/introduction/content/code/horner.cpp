#include <vector>
#include <iostream>
using namespace std;

// Evaluate a polynomial with coefficients a = {a_n, ..., a_0} (high -> low) at x.
double horner(const vector<double>& a, double x) {
    double y = a[0];
    for (size_t i = 1; i < a.size(); ++i) y = y * x + a[i];
    return y;
}

int main() {
    cout << horner({5, -8, 2, 4, -10}, 2) << "\n";   // 22
}
