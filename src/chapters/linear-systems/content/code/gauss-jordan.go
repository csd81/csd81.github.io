package main

import (
	"fmt"
	"math"
)

// Solve A x = b by Gauss-Jordan elimination.
func gaussJordan(A [][]float64, b []float64) []float64 {
	n := len(b)
	m := make([][]float64, n)
	for i := range A {
		m[i] = append(append([]float64{}, A[i]...), b[i])
	}
	for k := 0; k < n; k++ {
		p := k
		for i := k + 1; i < n; i++ {
			if math.Abs(m[i][k]) > math.Abs(m[p][k]) {
				p = i
			}
		}
		m[k], m[p] = m[p], m[k]
		d := m[k][k]
		for j := 0; j <= n; j++ {
			m[k][j] /= d
		}
		for i := 0; i < n; i++ {
			if i != k {
				f := m[i][k]
				for j := 0; j <= n; j++ {
					m[i][j] -= f * m[k][j]
				}
			}
		}
	}
	x := make([]float64, n)
	for i := 0; i < n; i++ {
		x[i] = m[i][n]
	}
	return x
}

func main() {
	fmt.Println(gaussJordan([][]float64{{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}}, []float64{8, -11, -3}))
}
