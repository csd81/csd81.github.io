package main

import (
	"fmt"
	"math"
)

// Golden-section search for the minimum of a unimodal f on [a, b].
func goldenSection(f func(float64) float64, a, b, tol float64) float64 {
	g := (math.Sqrt(5) - 1) / 2
	c, d := b-g*(b-a), a+g*(b-a)
	fc, fd := f(c), f(d)
	for b-a > tol {
		if fc < fd {
			b, d, fd = d, c, fc
			c = b - g*(b-a)
			fc = f(c)
		} else {
			a, c, fc = c, d, fd
			d = a + g*(b-a)
			fd = f(d)
		}
	}
	return (a + b) / 2
}

func main() {
	fmt.Println(goldenSection(func(x float64) float64 { return (x-2)*(x-2) + 1 }, 0, 5, 1e-8))
}
