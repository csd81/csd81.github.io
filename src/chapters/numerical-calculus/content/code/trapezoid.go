package main

import (
	"fmt"
	"math"
)

// Composite trapezoidal rule for the integral of f on [a, b].
func trapezoid(f func(float64) float64, a, b float64, n int) float64 {
	h := (b - a) / float64(n)
	s := (f(a) + f(b)) / 2
	for i := 1; i < n; i++ {
		s += f(a + float64(i)*h)
	}
	return h * s
}

func main() {
	fmt.Println("int_0^1 e^x dx ~", trapezoid(math.Exp, 0, 1, 100), " exact =", math.E-1)
}
