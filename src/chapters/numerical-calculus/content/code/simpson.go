package main

import (
	"fmt"
	"math"
)

// Composite Simpson's rule (n forced even) on [a, b].
func simpson(f func(float64) float64, a, b float64, n int) float64 {
	if n%2 != 0 {
		n++
	}
	h := (b - a) / float64(n)
	s := f(a) + f(b)
	for i := 1; i < n; i++ {
		if i%2 != 0 {
			s += 4 * f(a+float64(i)*h)
		} else {
			s += 2 * f(a+float64(i)*h)
		}
	}
	return h / 3 * s
}

func main() {
	fmt.Println("int_0^1 e^x dx ~", simpson(math.Exp, 0, 1, 100), " exact =", math.E-1)
}
