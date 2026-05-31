package main

import "fmt"

// Newton divided-difference coefficients a_i = f[x_0, ..., x_i].
func dividedDifferences(x, y []float64) []float64 {
	n := len(x)
	a := append([]float64{}, y...)
	for j := 1; j < n; j++ {
		for i := n - 1; i >= j; i-- {
			a[i] = (a[i] - a[i-1]) / (x[i] - x[i-j])
		}
	}
	return a
}

func main() {
	fmt.Println(dividedDifferences([]float64{-1, 1, 2, 3}, []float64{-3, 1, 3, 29})) // [-3 2 0 3]
}
