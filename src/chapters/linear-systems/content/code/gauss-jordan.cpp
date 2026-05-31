#include <vector>
#include <iostream>
#include <cmath>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;

// Solve A x = b by Gauss-Jordan elimination (reduced row echelon form).
Vec gauss_jordan(Mat A, Vec b) {
    int n = b.size();
    for (int i = 0; i < n; ++i) A[i].push_back(b[i]);   // augment [A | b]
    for (int k = 0; k < n; ++k) {
        int p = k;
        for (int i = k + 1; i < n; ++i) if (fabs(A[i][k]) > fabs(A[p][k])) p = i;
        swap(A[k], A[p]);
        double d = A[k][k];
        for (int j = 0; j <= n; ++j) A[k][j] /= d;       // normalize pivot row
        for (int i = 0; i < n; ++i)
            if (i != k) {
                double f = A[i][k];
                for (int j = 0; j <= n; ++j) A[i][j] -= f * A[k][j];
            }
    }
    Vec x(n);
    for (int i = 0; i < n; ++i) x[i] = A[i][n];
    return x;
}

int main() {
    Mat A = {{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}};
    Vec b = {8, -11, -3};
    Vec x = gauss_jordan(A, b);
    cout << "x ="; for (double v : x) cout << " " << v; cout << "\n";
}
