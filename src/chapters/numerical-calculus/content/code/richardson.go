package main

import (
	"fmt"
	"math"
)

// Central-difference first derivative D(h), error O(h^2).
func central(f func(float64) float64, x, h float64) float64 {
	return (f(x+h) - f(x-h)) / (2 * h)
}

// Richardson-extrapolate D(h) and D(h/2) to error O(h^4).
func richardson(f func(float64) float64, x, h float64) (float64, float64, float64) {
	d1 := central(f, x, h)
	d2 := central(f, x, h/2)
	return d1, d2, (4*d2 - d1) / 3
}

func main() {
	d1, d2, ext := richardson(math.Sin, 1, 0.1)
	fmt.Println("D(h)         =", d1)
	fmt.Println("D(h/2)       =", d2)
	fmt.Println("extrapolated =", ext, " exact cos(1) =", math.Cos(1))
}
