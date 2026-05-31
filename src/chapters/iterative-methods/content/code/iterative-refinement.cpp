#include <vector>
#include <cmath>
#include <iostream>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;

Vec solve(Mat A, Vec b) {                       // Gaussian elimination
    int n = b.size();
    for (int k = 0; k < n; ++k) {
        int p = k;
        for (int i = k + 1; i < n; ++i) if (fabs(A[i][k]) > fabs(A[p][k])) p = i;
        swap(A[k], A[p]); swap(b[k], b[p]);
        for (int i = k + 1; i < n; ++i) { double f = A[i][k] / A[k][k];
            for (int j = k; j < n; ++j) A[i][j] -= f * A[k][j]; b[i] -= f * b[k]; }
    }
    Vec x(n);
    for (int i = n - 1; i >= 0; --i) { double s = b[i];
        for (int j = i + 1; j < n; ++j) s -= A[i][j] * x[j]; x[i] = s / A[i][i]; }
    return x;
}

// Improve the solution of A x = b by refining on the residual r = b - A x.
Vec iterative_refinement(const Mat& A, const Vec& b, double tol = 1e-12, int max_iter = 20) {
    int n = b.size();
    Vec x = solve(A, b);
    for (int k = 0; k < max_iter; ++k) {
        Vec r(n);
        for (int i = 0; i < n; ++i) { double s = b[i];
            for (int j = 0; j < n; ++j) s -= A[i][j] * x[j]; r[i] = s; }
        Vec d = solve(A, r);
        double nd = 0;
        for (int i = 0; i < n; ++i) { x[i] += d[i]; nd = max(nd, fabs(d[i])); }
        if (nd < tol) break;
    }
    return x;
}

int main() {
    Mat A = {{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}};
    Vec b = {8, -11, -3};
    for (double v : iterative_refinement(A, b)) cout << v << " ";
    cout << "\n";
}
