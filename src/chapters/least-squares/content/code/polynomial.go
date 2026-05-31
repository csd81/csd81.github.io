package main

import (
	"fmt"
	"math"
)

func solve(A [][]float64, b []float64) []float64 {
	n := len(b)
	m := make([][]float64, n)
	for i := range A {
		m[i] = append([]float64{}, A[i]...)
	}
	r := append([]float64{}, b...)
	for k := 0; k < n; k++ {
		p := k
		for i := k + 1; i < n; i++ {
			if math.Abs(m[i][k]) > math.Abs(m[p][k]) {
				p = i
			}
		}
		m[k], m[p] = m[p], m[k]
		r[k], r[p] = r[p], r[k]
		for i := k + 1; i < n; i++ {
			f := m[i][k] / m[k][k]
			for j := k; j < n; j++ {
				m[i][j] -= f * m[k][j]
			}
			r[i] -= f * r[k]
		}
	}
	x := make([]float64, n)
	for i := n - 1; i >= 0; i-- {
		s := r[i]
		for j := i + 1; j < n; j++ {
			s -= m[i][j] * x[j]
		}
		x[i] = s / m[i][i]
	}
	return x
}

// Least-squares polynomial fit via the normal equations (coeffs low -> high).
func polyFit(t, y []float64, degree int) []float64 {
	m := degree + 1
	V := make([][]float64, len(t))
	for r := range t {
		V[r] = make([]float64, m)
		for j := 0; j < m; j++ {
			V[r][j] = math.Pow(t[r], float64(j))
		}
	}
	ATA := make([][]float64, m)
	for i := range ATA {
		ATA[i] = make([]float64, m)
	}
	ATy := make([]float64, m)
	for r := range t {
		for i := 0; i < m; i++ {
			ATy[i] += V[r][i] * y[r]
			for j := 0; j < m; j++ {
				ATA[i][j] += V[r][i] * V[r][j]
			}
		}
	}
	return solve(ATA, ATy)
}

func main() {
	t := []float64{0, 1, 2, 3, 4}
	y := []float64{1.0, 1.8, 3.3, 4.5, 6.3}
	fmt.Println("coeffs (low->high):", polyFit(t, y, 2))
}
