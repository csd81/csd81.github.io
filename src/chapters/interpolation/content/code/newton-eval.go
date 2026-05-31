package main

import "fmt"

// Evaluate the Newton form by nested (Horner-like) multiplication.
func newtonEval(x, a []float64, t float64) float64 {
	p := a[len(a)-1]
	for k := len(a) - 2; k >= 0; k-- {
		p = p*(t-x[k]) + a[k]
	}
	return p
}

func main() {
	fmt.Println(newtonEval([]float64{-1, 1, 2, 3}, []float64{-3, 2, 0, 3}, 0)) // 5
}
