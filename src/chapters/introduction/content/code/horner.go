package main

import "fmt"

// Evaluate a polynomial with coefficients a = [a_n, ..., a_0] (high -> low) at x.
func horner(a []float64, x float64) float64 {
	y := a[0]
	for _, c := range a[1:] {
		y = y*x + c
	}
	return y
}

func main() {
	// p(x) = 5x^4 - 8x^3 + 2x^2 + 4x - 10
	fmt.Println(horner([]float64{5, -8, 2, 4, -10}, 2)) // 22
}
