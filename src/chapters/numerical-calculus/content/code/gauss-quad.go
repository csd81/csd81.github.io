package main

import (
	"fmt"
	"math"
)

// 2- or 3-point Gauss-Legendre quadrature on [a, b].
func gaussQuad(f func(float64) float64, a, b float64, n int) float64 {
	var t, w []float64
	if n == 3 {
		t = []float64{-math.Sqrt(3.0 / 5), 0, math.Sqrt(3.0 / 5)}
		w = []float64{5.0 / 9, 8.0 / 9, 5.0 / 9}
	} else {
		t = []float64{-1 / math.Sqrt(3), 1 / math.Sqrt(3)}
		w = []float64{1, 1}
	}
	hm := (b - a) / 2 // map [-1,1] -> [a,b]
	mid := (a + b) / 2
	s := 0.0
	for i := range t {
		s += w[i] * f(mid+hm*t[i])
	}
	return hm * s
}

func main() {
	fmt.Println("int_0^1 e^x dx ~", gaussQuad(math.Exp, 0, 1, 2), "(2-pt)")
	fmt.Println("int_0^1 e^x dx ~", gaussQuad(math.Exp, 0, 1, 3), "(3-pt)")
}
// -> 1.7178964 (2-pt), 1.7182810 (3-pt); exact e-1 = 1.7182818
