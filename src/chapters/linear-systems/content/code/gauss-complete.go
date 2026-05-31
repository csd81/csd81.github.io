package main

import (
	"fmt"
	"math"
)

// Gaussian elimination with complete (row + column) pivoting.
func gaussCompletePivot(A [][]float64, b []float64) []float64 {
	n := len(b)
	m := make([][]float64, n)
	for i := range A {
		m[i] = append([]float64{}, A[i]...)
	}
	r := append([]float64{}, b...)
	col := make([]int, n)
	for i := range col {
		col[i] = i
	}
	for k := 0; k < n; k++ {
		pi, pj := k, k
		for i := k; i < n; i++ {
			for j := k; j < n; j++ {
				if math.Abs(m[i][j]) > math.Abs(m[pi][pj]) {
					pi, pj = i, j
				}
			}
		}
		m[k], m[pi] = m[pi], m[k]
		r[k], r[pi] = r[pi], r[k]
		for _, row := range m {
			row[k], row[pj] = row[pj], row[k]
		}
		col[k], col[pj] = col[pj], col[k]
		for i := k + 1; i < n; i++ {
			f := m[i][k] / m[k][k]
			for j := k; j < n; j++ {
				m[i][j] -= f * m[k][j]
			}
			r[i] -= f * r[k]
		}
	}
	y := make([]float64, n)
	for i := n - 1; i >= 0; i-- {
		s := r[i]
		for j := i + 1; j < n; j++ {
			s -= m[i][j] * y[j]
		}
		y[i] = s / m[i][i]
	}
	x := make([]float64, n)
	for i := 0; i < n; i++ {
		x[col[i]] = y[i]
	}
	return x
}

func main() {
	fmt.Println(gaussCompletePivot([][]float64{{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}}, []float64{8, -11, -3}))
}
