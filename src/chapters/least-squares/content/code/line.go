package main

import "fmt"

// Least-squares line y = a + b x via the 2x2 normal equations.
func lineFit(x, y []float64) (a, b float64) {
	n := float64(len(x))
	var Sx, Sy, Sxx, Sxy float64
	for i := range x {
		Sx += x[i]
		Sy += y[i]
		Sxx += x[i] * x[i]
		Sxy += x[i] * y[i]
	}
	b = (n*Sxy - Sx*Sy) / (n*Sxx - Sx*Sx) // slope
	a = (Sy - b*Sx) / n                    // intercept
	return
}

func main() {
	x := []float64{0, 1, 2, 3, 4}
	y := []float64{1, 3, 2, 5, 4}
	a, b := lineFit(x, y)
	fmt.Println("slope b =", b, ", intercept a =", a)
}
// -> slope b = 0.8, intercept a = 1.4
