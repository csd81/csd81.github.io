package main

import (
	"fmt"
	"math"
)

// Vector fixed-point iteration x_{k+1} = G(x_k).
func fixedPointND(G func([]float64) []float64, x0 []float64, tol float64, maxIter int) []float64 {
	x := append([]float64{}, x0...)
	for k := 0; k < maxIter; k++ {
		xn := G(x)
		err := 0.0
		for i := range xn {
			err = math.Max(err, math.Abs(xn[i]-x[i]))
		}
		if err < tol {
			return xn
		}
		x = xn
	}
	return x
}

func main() {
	G := func(v []float64) []float64 { return []float64{math.Cos(v[1]), math.Sin(v[0])} }
	fmt.Println(fixedPointND(G, []float64{0, 0}, 1e-12, 200))
}
