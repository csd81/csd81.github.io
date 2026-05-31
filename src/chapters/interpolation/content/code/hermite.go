package main

import "fmt"

// Hermite interpolation via divided differences with doubled nodes.
func hermiteCoeffs(x, y, dy []float64) []float64 {
	n := len(x)
	m := 2 * n
	z := make([]float64, m)
	Q := make([][]float64, m)
	for i := range Q {
		Q[i] = make([]float64, m)
	}
	for i := 0; i < n; i++ {
		z[2*i], z[2*i+1] = x[i], x[i]
		Q[2*i][0], Q[2*i+1][0] = y[i], y[i]
		Q[2*i+1][1] = dy[i]
		if i > 0 {
			Q[2*i][1] = (Q[2*i][0] - Q[2*i-1][0]) / (z[2*i] - z[2*i-1])
		}
	}
	for j := 2; j < m; j++ {
		for i := j; i < m; i++ {
			Q[i][j] = (Q[i][j-1] - Q[i-1][j-1]) / (z[i] - z[i-j])
		}
	}
	a := make([]float64, m)
	for i := 0; i < m; i++ {
		a[i] = Q[i][i]
	}
	return a
}

func main() {
	fmt.Println(hermiteCoeffs([]float64{0, 1}, []float64{1, 0}, []float64{0, 0})) // [1 0 -1 2]
}
