package main

import "fmt"

// Thomas algorithm for a tridiagonal system (a sub-, b diag, c super-, d rhs).
func thomas(a, b, c, d []float64) []float64 {
	n := len(d)
	cc := append([]float64{}, c...)
	dd := append([]float64{}, d...)
	cc[0] /= b[0]
	dd[0] /= b[0]
	for i := 1; i < n; i++ {
		m := b[i] - a[i]*cc[i-1]
		if i < n-1 {
			cc[i] /= m
		}
		dd[i] = (dd[i] - a[i]*dd[i-1]) / m
	}
	x := make([]float64, n)
	x[n-1] = dd[n-1]
	for i := n - 2; i >= 0; i-- {
		x[i] = dd[i] - cc[i]*x[i+1]
	}
	return x
}

func main() {
	fmt.Println(thomas([]float64{0, -1, -1, -1}, []float64{4, 4, 4, 4},
		[]float64{-1, -1, -1, 0}, []float64{2, 4, 6, 13}))
}
