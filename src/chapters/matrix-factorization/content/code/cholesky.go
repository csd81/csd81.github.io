package main

import (
	"fmt"
	"math"
)

// Cholesky factorization A = L Lᵀ of a symmetric positive-definite A.
func cholesky(A [][]float64) [][]float64 {
	n := len(A)
	L := make([][]float64, n)
	for i := range L {
		L[i] = make([]float64, n)
	}
	for j := 0; j < n; j++ {
		s := A[j][j]
		for k := 0; k < j; k++ {
			s -= L[j][k] * L[j][k]
		}
		L[j][j] = math.Sqrt(s)
		for i := j + 1; i < n; i++ {
			t := A[i][j]
			for k := 0; k < j; k++ {
				t -= L[i][k] * L[j][k]
			}
			L[i][j] = t / L[j][j]
		}
	}
	return L
}

func main() {
	A := [][]float64{{4, 2, -2}, {2, 10, 2}, {-2, 2, 5}}
	for _, row := range cholesky(A) {
		fmt.Println(row)
	}
}
