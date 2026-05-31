package main

import (
	"fmt"
	"math"
)

// Central-difference first derivative, error O(h^2).
func deriv1(f func(float64) float64, x, h float64) float64 {
	return (f(x+h) - f(x-h)) / (2 * h)
}

// Central-difference second derivative, error O(h^2).
func deriv2(f func(float64) float64, x, h float64) float64 {
	return (f(x+h) - 2*f(x) + f(x-h)) / (h * h)
}

func main() {
	fmt.Println("f'(1)  ~", deriv1(math.Sin, 1, 0.01), " exact cos(1)  =", math.Cos(1))
	fmt.Println("f''(1) ~", deriv2(math.Sin, 1, 0.01), " exact -sin(1) =", -math.Sin(1))
}
