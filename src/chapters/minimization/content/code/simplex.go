package main

import (
	"fmt"
	"math"
	"sort"
)

// Nelder-Mead downhill simplex minimization.
func nelderMead(f func([]float64) float64, x0 []float64, step, tol float64, maxIter int) []float64 {
	n := len(x0)
	pts := [][]float64{append([]float64{}, x0...)}
	for i := 0; i < n; i++ {
		p := append([]float64{}, x0...)
		p[i] += step
		pts = append(pts, p)
	}
	fv := make([]float64, n+1)
	for i := range pts {
		fv[i] = f(pts[i])
	}
	for it := 0; it < maxIter; it++ {
		ord := make([]int, n+1)
		for i := range ord {
			ord[i] = i
		}
		sort.Slice(ord, func(a, b int) bool { return fv[ord[a]] < fv[ord[b]] })
		np := make([][]float64, n+1)
		nf := make([]float64, n+1)
		for i, o := range ord {
			np[i] = pts[o]
			nf[i] = fv[o]
		}
		pts, fv = np, nf
		if math.Abs(fv[n]-fv[0]) < tol {
			break
		}
		c := make([]float64, n) // centroid of best n points
		for i := 0; i < n; i++ {
			for j := 0; j < n; j++ {
				c[j] += pts[i][j] / float64(n)
			}
		}
		xr := make([]float64, n) // reflect
		for j := range xr {
			xr[j] = c[j] + (c[j] - pts[n][j])
		}
		fr := f(xr)
		if fr < fv[0] {
			xe := make([]float64, n) // expand
			for j := range xe {
				xe[j] = c[j] + 2*(c[j]-pts[n][j])
			}
			if fe := f(xe); fe < fr {
				pts[n], fv[n] = xe, fe
			} else {
				pts[n], fv[n] = xr, fr
			}
		} else if fr < fv[n-1] {
			pts[n], fv[n] = xr, fr
		} else {
			xc := make([]float64, n) // contract
			for j := range xc {
				xc[j] = c[j] + 0.5*(pts[n][j]-c[j])
			}
			if fc := f(xc); fc < fv[n] {
				pts[n], fv[n] = xc, fc
			} else { // shrink toward best
				for i := 1; i <= n; i++ {
					for j := 0; j < n; j++ {
						pts[i][j] = pts[0][j] + 0.5*(pts[i][j]-pts[0][j])
					}
					fv[i] = f(pts[i])
				}
			}
		}
	}
	return pts[0]
}

func main() {
	f := func(v []float64) float64 { return (v[0]-1)*(v[0]-1) + (v[1]-2)*(v[1]-2) }
	fmt.Println(nelderMead(f, []float64{0, 0}, 0.5, 1e-10, 400)) // -> [1 2]
}
