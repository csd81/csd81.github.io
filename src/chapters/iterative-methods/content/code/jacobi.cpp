#include <vector>
#include <cmath>
#include <iostream>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;

// Solve A x = b by Jacobi iteration.
Vec jacobi(const Mat& A, const Vec& b, double tol = 1e-10, int max_iter = 200) {
    int n = b.size();
    Vec x(n, 0.0), x_new(n);
    for (int k = 0; k < max_iter; ++k) {
        for (int i = 0; i < n; ++i) {
            double s = b[i];
            for (int j = 0; j < n; ++j)
                if (j != i) s -= A[i][j] * x[j];   // sum of off-diagonal terms
            x_new[i] = s / A[i][i];
        }
        double diff = 0.0;
        for (int i = 0; i < n; ++i) diff = max(diff, fabs(x_new[i] - x[i]));
        x = x_new;
        if (diff <= tol) break;
    }
    return x;
}

int main() {
    Mat A = {{4, 2, -1}, {5, -10, 2}, {-2, 3, -7}};
    Vec b = {9, 8, 3};
    Vec x = jacobi(A, b);
    cout << "x = ";
    for (double v : x) cout << v << " ";
    cout << "\n";
}
