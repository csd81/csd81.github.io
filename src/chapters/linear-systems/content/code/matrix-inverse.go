package main

import (
	"fmt"
	"math"
)

// Matrix inverse via Gauss-Jordan on the augmented matrix [A | I].
func inverse(A [][]float64) [][]float64 {
	n := len(A)
	m := make([][]float64, n)
	for i := range A {
		m[i] = append([]float64{}, A[i]...)
		for j := 0; j < n; j++ {
			if i == j {
				m[i] = append(m[i], 1)
			} else {
				m[i] = append(m[i], 0)
			}
		}
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
		for j := 0; j < 2*n; j++ {
			m[k][j] /= d
		}
		for i := 0; i < n; i++ {
			if i != k {
				f := m[i][k]
				for j := 0; j < 2*n; j++ {
					m[i][j] -= f * m[k][j]
				}
			}
		}
	}
	inv := make([][]float64, n)
	for i := range m {
		inv[i] = m[i][n:]
	}
	return inv
}

func main() {
	for _, row := range inverse([][]float64{{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}}) {
		fmt.Println(row)
	}
}
