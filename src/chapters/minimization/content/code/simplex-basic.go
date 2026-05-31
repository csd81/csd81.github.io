package main

import (
	"fmt"
	"math"
)

func dist(a, b []float64) float64 {
	s := 0.0
	for i := range a {
		s += (a[i] - b[i]) * (a[i] - b[i])
	}
	return math.Sqrt(s)
}

// Basic fixed-shape simplex method (reflect worst through centroid, else shrink to best).
func simplexBasic(f func([]float64) float64, x0 []float64, step, tol float64, maxIter int) []float64 {
	n := len(x0)
	P := make([][]float64, n+1)
	for i := range P {
		P[i] = append([]float64{}, x0...)
		if i > 0 {
			P[i][i-1] += step
		}
	}
	fv := make([]float64, n+1)
	for i := range P {
		fv[i] = f(P[i])
	}
	for it := 0; it < maxIter; it++ {
		iw, ib := 0, 0
		for i := 1; i <= n; i++ {
			if fv[i] > fv[iw] {
				iw = i
			}
			if fv[i] < fv[ib] {
				ib = i
			}
		}
		sz := 0.0
		for i := 0; i <= n; i++ {
			sz = math.Max(sz, dist(P[i], P[ib]))
		}
		if sz < tol {
			break
		}
		c := make([]float64, n) // centroid of all but the worst
		for i := 0; i <= n; i++ {
			if i != iw {
				for j := 0; j < n; j++ {
					c[j] += P[i][j] / float64(n)
				}
			}
		}
		xr := make([]float64, n) // reflect the worst vertex
		for j := 0; j < n; j++ {
			xr[j] = c[j] + (c[j] - P[iw][j])
		}
		fr := f(xr)
		if fr < fv[iw] {
			P[iw] = xr
			fv[iw] = fr
		} else { // shrink toward the best
			best := append([]float64{}, P[ib]...)
			for i := 0; i <= n; i++ {
				if i != ib {
					for j := 0; j < n; j++ {
						P[i][j] = best[j] + 0.5*(P[i][j]-best[j])
					}
					fv[i] = f(P[i])
				}
			}
		}
	}
	ib := 0
	for i := 1; i <= n; i++ {
		if fv[i] < fv[ib] {
			ib = i
		}
	}
	return P[ib]
}

func main() {
	f := func(v []float64) float64 { return (v[0]-1)*(v[0]-1) + (v[1]-2)*(v[1]-2) }
	fmt.Println(simplexBasic(f, []float64{0, 0}, 1, 1e-8, 500)) // -> [1 2]
}
