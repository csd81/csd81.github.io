# Curvefit Toolbox Reference

| Implemented | Function | Description |
| :---: | :--- | :--- |
|   | `excludedata` | Exclude data from fit |
|   | `fit` | Fit curve or surface to data |
|   | `fitoptions` | Create or modify fit options object |
|   | `fittype` | Fit type for curve and surface fitting |
|   | `prepareCurveData` | Prepare data inputs for curve fitting |
|   | `prepareSurfaceData` | Prepare data inputs for surface fitting |
|   | `argnames` | Input argument names ofcfit,sfit, orfittypeobject |
|   | `category` | Category of fit ofcfit,sfit, orfittypeobject |
|   | `coeffnames` | Coefficient names ofcfit,sfit, orfittypeobject |
|   | `coeffvalues` | Coefficient values ofcfitorsfitobject |
|   | `dependnames` | Dependent variable ofcfit,sfit, orfittypeobject |
|   | `feval` | Evaluatecfit,sfit, orfittypeobject |
|   | `formula` | Formula ofcfit,sfit, orfittypeobject |
|   | `get` | Get fit options structure property names and values |
|   | `indepnames` | Independent variable ofcfit,sfit, orfittypeobject |
|   | `islinear` | Determine ifcfit,sfit, orfittypeobject is linear |
|   | `numargs` | Number of input arguments ofcfit,sfit, orfittypeobject |
|   | `numcoeffs` | Number of coefficients ofcfit,sfit, orfittypeobject |
|   | `probnames` | Problem-dependent parameter names ofcfit,sfit, orfittypeobject |
|   | `set` | Assign values in fit options structure |
|   | `setoptions` | Set model fit options |
|   | `type` | Name ofcfit,sfit, orfittypeobject |
| ✅ | `datastats` | Data statistics |
| ✅ | `smooth` | Smooth response data |
|   | `cfit` | Constructor forcfitobject |
|   | `confint` | Confidence intervals for fit coefficients ofcfitorsfitobject |
|   | `differentiate` | Differentiatecfitorsfitobject |
|   | `integrate` | Integratecfitobject |
|   | `plot` | Plotcfitorsfitobject |
|   | `predint` | Prediction intervals forcfitorsfitobject |
|   | `probvalues` | Problem-dependent parameter values ofcfitorsfitobject |
|   | `quad2d` | Numerically integratesfitobject |
|   | `sfit` | Constructor forsfitobject |
|   | `bspline` | Plot B-spline and its polynomial pieces |
|   | `csape` | Cubic spline interpolation with end conditions |
|   | `csapi` | Cubic spline interpolation |
|   | `cscvn` | “Natural” or periodic interpolating cubic spline curve |
|   | `rscvn` | Piecewise biarc Hermite interpolation |
| ✅ | `spapi` | Spline interpolation |
|   | `tpaps` | Thin-plate smoothing spline |
|   | `csaps` | Cubic smoothing spline |
|   | `spaps` | Smoothing spline |
|   | `spcrv` | Spline curve by uniform subdivision |
|   | `spap2` | Least-squares spline approximation |
|   | `ppmak` | Put together spline in ppform |
|   | `rpmak` | Put together rational spline |
|   | `rsmak` | Put together rational spline for standard geometric shapes |
| ✅ | `spmak` | Put together spline in B-form |
|   | `stmak` | Put together function in stform |
|   | `titanium` | Titanium test data |
|   | `franke` | Franke's bivariate test function |
|   | `bspligui` | Experiment with B-spline as function of its knots |
|   | `getcurve` | Interactive creation of cubic spline curve |
|   | `splinetool` | Experiment with some spline approximation methods |
|   | `spterms` | Explain spline terms |
|   | `fn2fm` | Convert to specified form |
|   | `fnbrk` | Name and part(s) of form |
|   | `fnchg` | Change part(s) of form |
|   | `fncmb` | Arithmetic with function(s) |
|   | `fnder` | Differentiate function |
|   | `fndir` | Directional derivative of function |
|   | `fnint` | Integrate function |
|   | `fnjmp` | Jumps, i.e., f(x+)-f(x-) |
|   | `fnmin` | Minimum of function in given interval |
|   | `fnplt` | Plot function |
|   | `fnrfn` | Refine partition of form |
|   | `fntlr` | Taylor coefficients |
|   | `fnval` | Evaluate spline function |
|   | `fnxtr` | Extrapolate spline |
|   | `fnzeros` | Roots of spline |
| ✅ | `aptknt` | Acceptable knot sequence |
| ✅ | `augknt` | Augment knot sequence |
| ✅ | `aveknt` | Provide knot averages |
| ✅ | `brk2knt` | Convert breaks with multiplicities into knots |
|   | `chbpnt` | Chebyshev-Demko points |
| ✅ | `knt2brk, knt2mlt` | Convert knots to breaks |
|   | `newknt` | New break distribution |
|   | `optknt` | Knot distribution “optimal” for interpolation |
|   | `sorted` | Locate sites with respect to mesh sites |
| ✅ | `spbrk` | Extract parts of a B-form spline |
| ✅ | `spval` | Evaluate a spline in B-form |
| ✅ | `sp2pp` | Convert a spline from B-form to ppform |
| ✅ | `spcol` | B-spline collocation matrix |
