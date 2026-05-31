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

// Natural cubic spline: per-interval coefficients (a, b, c, d).
func naturalCubicSpline(x, y []float64) (a, b, c, d []float64) {
	n := len(x)
	h := make([]float64, n-1)
	for i := 0; i < n-1; i++ {
		h[i] = x[i+1] - x[i]
	}
	A := make([][]float64, n)
	for i := range A {
		A[i] = make([]float64, n)
	}
	rhs := make([]float64, n)
	A[0][0] = 1
	A[n-1][n-1] = 1
	for i := 1; i < n-1; i++ {
		A[i][i-1] = h[i-1]
		A[i][i] = 2 * (h[i-1] + h[i])
		A[i][i+1] = h[i]
		rhs[i] = 3 * ((y[i+1]-y[i])/h[i] - (y[i]-y[i-1])/h[i-1])
	}
	cc := solve(A, rhs)
	for i := 0; i < n-1; i++ {
		a = append(a, y[i])
		b = append(b, (y[i+1]-y[i])/h[i]-h[i]*(2*cc[i]+cc[i+1])/3)
		c = append(c, cc[i])
		d = append(d, (cc[i+1]-cc[i])/(3*h[i]))
	}
	return
}

func main() {
	a, _, _, _ := naturalCubicSpline([]float64{0, 1, 2, 3}, []float64{0, 1, 0, 1})
	fmt.Println("a =", a)
}
