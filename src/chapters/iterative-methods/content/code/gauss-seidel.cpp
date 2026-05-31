#include <vector>
#include <cmath>
#include <iostream>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;

// Solve A x = b by Gauss-Seidel iteration.
Vec gauss_seidel(const Mat& A, const Vec& b, double tol = 1e-10, int max_iter = 200) {
    int n = b.size();
    Vec x(n, 0.0);
    for (int k = 0; k < max_iter; ++k) {
        double diff = 0.0;
        for (int i = 0; i < n; ++i) {
            double s = b[i];
            for (int j = 0; j < n; ++j)
                if (j != i) s -= A[i][j] * x[j];   // x already holds updated entries
            double xi = s / A[i][i];
            diff = max(diff, fabs(xi - x[i]));
            x[i] = xi;
        }
        if (diff <= tol) break;
    }
    return x;
}

int main() {
    Mat A = {{4, 2, -1}, {5, -10, 2}, {-2, 3, -7}};
    Vec b = {9, 8, 3};
    Vec x = gauss_seidel(A, b);
    cout << "x = ";
    for (double v : x) cout << v << " ";
    cout << "\n";
}
