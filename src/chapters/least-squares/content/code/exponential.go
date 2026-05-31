package main

import (
	"fmt"
	"math"
)

// Least-squares line fit z = slope*x + intercept.
func linFit(x, z []float64) (float64, float64) {
	n := float64(len(x))
	var sx, sz, sxx, sxz float64
	for i := range x {
		sx += x[i]
		sz += z[i]
		sxx += x[i] * x[i]
		sxz += x[i] * z[i]
	}
	slope := (n*sxz - sx*sz) / (n*sxx - sx*sx)
	intercept := (sz - slope*sx) / n
	return slope, intercept
}

// Fit y ~ b*exp(a*t) by linear least squares on ln(y). Returns (a, b).
func expFit(t, y []float64) (float64, float64) {
	ly := make([]float64, len(y))
	for i := range y {
		ly[i] = math.Log(y[i])
	}
	a, lnb := linFit(t, ly)
	return a, math.Exp(lnb)
}

func main() {
	t := []float64{0, 1, 2, 3}
	y := []float64{2.0, 4.1, 8.2, 15.9}
	a, b := expFit(t, y)
	fmt.Printf("a = %.4f, b = %.4f\n", a, b)
}
