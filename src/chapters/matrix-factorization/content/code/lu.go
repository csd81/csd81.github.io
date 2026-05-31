package main

import "fmt"

// Doolittle factorization A = L U (L unit-lower, U upper).
func luDoolittle(A [][]float64) ([][]float64, [][]float64) {
	n := len(A)
	L := make([][]float64, n)
	U := make([][]float64, n)
	for i := range L {
		L[i] = make([]float64, n)
		U[i] = make([]float64, n)
		L[i][i] = 1
	}
	for i := 0; i < n; i++ {
		for j := i; j < n; j++ {
			s := A[i][j]
			for k := 0; k < i; k++ {
				s -= L[i][k] * U[k][j]
			}
			U[i][j] = s
		}
		for j := i + 1; j < n; j++ {
			s := A[j][i]
			for k := 0; k < i; k++ {
				s -= L[j][k] * U[k][i]
			}
			L[j][i] = s / U[i][i]
		}
	}
	return L, U
}

func main() {
	A := [][]float64{{1, -2, -2, -2}, {2, -1, 2, 4}, {-1, 2, 3, -4}, {-2, 1, 4, -2}}
	L, U := luDoolittle(A)
	for _, row := range L {
		fmt.Println(row)
	}
	for _, row := range U {
		fmt.Println(row)
	}
}
