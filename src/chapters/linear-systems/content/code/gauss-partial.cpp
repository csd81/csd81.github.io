#include <vector>
#include <iostream>
#include <cmath>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;

// Solve A x = b by Gaussian elimination with partial (row) pivoting.
Vec gauss_partial_pivot(Mat A, Vec b) {
    int n = b.size();
    for (int k = 0; k < n; ++k) {
        int p = k;
        for (int i = k + 1; i < n; ++i) if (fabs(A[i][k]) > fabs(A[p][k])) p = i;
        swap(A[k], A[p]); swap(b[k], b[p]);
        for (int i = k + 1; i < n; ++i) {
            double f = A[i][k] / A[k][k];
            for (int j = k; j < n; ++j) A[i][j] -= f * A[k][j];
            b[i] -= f * b[k];
        }
    }
    Vec x(n);
    for (int i = n - 1; i >= 0; --i) {
        double s = b[i];
        for (int j = i + 1; j < n; ++j) s -= A[i][j] * x[j];
        x[i] = s / A[i][i];
    }
    return x;
}

int main() {
    Mat A = {{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}};
    Vec b = {8, -11, -3};
    Vec x = gauss_partial_pivot(A, b);
    cout << "x ="; for (double v : x) cout << " " << v; cout << "\n";
}
