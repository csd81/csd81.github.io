package main

import (
	"fmt"
	"math"
)

// Solve A x = b by Jacobi iteration. Returns the solution and iteration count.
func jacobi(A [][]float64, b []float64, tol float64, maxIter int) ([]float64, int) {
	n := len(b)
	x := make([]float64, n)
	for k := 1; k <= maxIter; k++ {
		xNew := make([]float64, n)
		for i := 0; i < n; i++ {
			s := b[i]
			for j := 0; j < n; j++ {
				if j != i {
					s -= A[i][j] * x[j]
				}
			}
			xNew[i] = s / A[i][i]
		}
		diff := 0.0
		for i := 0; i < n; i++ {
			diff = math.Max(diff, math.Abs(xNew[i]-x[i]))
		}
		x = xNew
		if diff <= tol {
			return x, k
		}
	}
	return x, maxIter
}

func main() {
	A := [][]float64{{4, 2, -1}, {5, -10, 2}, {-2, 3, -7}}
	b := []float64{9, 8, 3}
	x, it := jacobi(A, b, 1e-10, 200)
	fmt.Println("x =", x, " iterations =", it)
}
