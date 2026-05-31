#include <vector>
#include <iostream>
#include <cmath>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;

// Matrix inverse via Gauss-Jordan on the augmented matrix [A | I].
Mat inverse(Mat A) {
    int n = A.size();
    for (int i = 0; i < n; ++i) { A[i].resize(2 * n, 0.0); A[i][n + i] = 1.0; }
    for (int k = 0; k < n; ++k) {
        int p = k;
        for (int i = k + 1; i < n; ++i) if (fabs(A[i][k]) > fabs(A[p][k])) p = i;
        swap(A[k], A[p]);
        double d = A[k][k];
        for (int j = 0; j < 2 * n; ++j) A[k][j] /= d;
        for (int i = 0; i < n; ++i)
            if (i != k) {
                double f = A[i][k];
                for (int j = 0; j < 2 * n; ++j) A[i][j] -= f * A[k][j];
            }
    }
    Mat inv(n, Vec(n));
    for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j) inv[i][j] = A[i][n + j];
    return inv;
}

int main() {
    Mat A = {{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}};
    Mat inv = inverse(A);
    cout << "A^-1 =\n";
    for (auto& row : inv) { for (double v : row) cout << v << " "; cout << "\n"; }
}
