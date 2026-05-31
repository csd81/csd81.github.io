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

// Fit y ~ b*t^a by linear least squares on log-log data. Returns (a, b).
func powerFit(t, y []float64) (float64, float64) {
	lt := make([]float64, len(t))
	ly := make([]float64, len(y))
	for i := range t {
		lt[i] = math.Log(t[i])
		ly[i] = math.Log(y[i])
	}
	a, lnb := linFit(lt, ly)
	return a, math.Exp(lnb)
}

func main() {
	t := []float64{1, 2, 3, 4}
	y := []float64{2.0, 5.6, 9.7, 16.0}
	a, b := powerFit(t, y)
	fmt.Printf("a = %.4f, b = %.4f\n", a, b)
}
