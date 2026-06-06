# Portable functions worth implementing

Missing from the sandbox · transcribable .m source · deterministic & oracle-checkable.
Grouped by toolbox. Total: 99.

## Signal (10)

- `ac2rc` — Convert autocorrelation sequence to reflection coefficients
- `cell2sos` — Convert second-order sections cell array to matrix
- `db` — Convert energy or power measurements to decibels
- `filternorm` — 2-norm or infinity-norm of digital filter
- `ifsst` — Inverse Fourier synchrosqueezed transform
- `kaiserord` — Kaiser window FIR filter design estimation parameters
- `orderspectrum` — Average spectrum versus order for vibration signal
- `rc2is` — Convert reflection coefficients to inverse sine parameters
- `sos2ctf` — Convert digital filter second-order section parameters to cascaded transfer
- `tfridge` — Time-frequency ridges

## Stats (9)

- `adtest` — Anderson-Darling test
- `dataset` — (Not Recommended) Arrays for statistical data
- `fitclinear` — Fit binary linear classifier to high-dimensional data
- `fitrtree` — Fit binary decision tree for regression
- `hmmestimate` — Hidden Markov model parameter estimates from emissions
- `linhyptest` — Linear hypothesis tests on Cox model coefficients
- `nlmefit` — Fit nonlinear mixed-effects estimation
- `prune` — Produce sequence of regression subtrees by pruning regression tree
- `statget` — Access field values in statistics options structure

## Base MATLAB (8)

- `cdfinfo` — Information about Common Data Format (CDF) file
- `fitsdisp` — Display FITS metadata
- `idealfilter` — timeseriesideal filter
- `lightangle` — Create or position light object in spherical coordinates
- `numArgumentsFromSubscript` — Number of arguments from indexing methods
- `reducepatch` — Reduce number of patch faces
- `specular` — Calculate specular reflectance
- `timetable2table` — Convert timetable to table

## Comm (8)

- `algdeintrlv` — Restore ordering of symbols using algebraically
- `channelDelay` — Channel timing delay
- `fmmod` — Frequency modulation
- `gfminpol` — Find minimal polynomial of Galois field element
- `gftrunc` — Minimize length of polynomial representation
- `iqcoef2imbal` — Convert compensator coefficient to amplitude and phase
- `matdeintrlv` — Restore ordering of symbols by filling matrix by columns
- `primpoly` — Find primitive polynomials for Galois field

## Finance (6)

- `abs2active` — Convert constraints from absolute to active format
- `cdsbootstrap` — Bootstrap default probability curve from credit default
- `days252bus` — Number of business days between dates
- `estimatePortReturn` — Estimate mean of portfolio returns
- `payadv` — Periodic payment given number of advance payments
- `tbillyield2disc` — Convert Treasury bill yield to equivalent discount

## Map (6)

- `angl2str` — Convert angles to character array
- `degrees2dms` — Convert degrees to degrees-minutes-seconds
- `geointerp` — Interpolation for geographic raster
- `interpm` — Densify connected vertices in latitude-longitude coordinates
- `maps` — List map projections foraxesm-based maps and map projection
- `refmatToWorldFileMatrix` — Convert referencing matrix to world file matrix

## Nav (6)

- `accelcal` — Calibration parameters for accelerometer
- `eul2quat` — Convert Euler angles to quaternion
- `factorTwoPoseSIM3` — Factor relating two SIM(3) poses
- `likelihoodFieldSensorModel` — Create likelihood field range sensor model
- `polygonDecomposition` — Decompose polygon into nonoverlapping polygons
- `se3` — SE(3) homogeneous transformation

## Aerospace (5)

- `alphabeta` — Compute incidence and sideslip angles
- `dcm2alphabeta` — Convert direction cosine matrix to angle of attack and sideslip angle
- `dpressure` — Compute dynamic pressure using velocity and density
- `flowisentropic` — Isentropic flow ratios
- `lla2eci` — Convert geodetic latitude, longitude, altitude (LLA) coordinates

## Control (5)

- `absorbDelay` — Replace time delays by poles atz= 0 or phase
- `evalSurf` — Evaluate gain surfaces at specific design points
- `kalman` — Design Kalman filter for state estimation
- `pidstddata2` — Access coefficients of standard-form 2-DOF PID controller
- `ss2ss` — State coordinate transformation for state-space model

## RF (5)

- `abcd2h` — Convert ABCD-parameters to hybrid h-parameters
- `gammams` — Calculate source reflection coefficient of two-port network
- `powergain` — Calculate power gain from two-port S-parameters
- `s2scc` — Convert single-ended S-parameters to common-mode S-parameters
- `stabilityk` — Stability factorKof two-port network

## Wavelet (5)

- `appcoef2` — 2-D approximation coefficients
- `dualtree2` — Kingsbury Q-shift 2-D dual-tree complex wavelet transform
- `itqwt` — Inverse tunable Q-factor wavelet transform
- `qorthwavf` — Kingsbury Q-shift filters
- `wdenoise2` — Wavelet image denoising

## Financial Instruments (4)

- `agencyoas` — Determine option-adjusted spread of callable
- `cirsens` — Instrument sensitivities and prices from Cox-Ingersoll-Ross interest-rate
- `instoptemfloat` — Create embedded option instrument on floating-rate note or add instrument to current
- `optpricebysim` — Price option given simulated underlying values

## Radar (4)

- `aperture2gain` — Convert effective aperture to gain
- `grnd2slantrange` — Convert ground range projection to slant range
- `mtifactor` — Improvement factor due to moving target indicator (MTI) processing
- `sarnoiserefl` — Noise equivalent reflectivity of SAR

## Bioinfo (3)

- `aa2int` — Convert amino acid sequence from letter to integer representation
- `int2nt` — Convert nucleotide sequence from integer to letter representation
- `nt2int` — Convert nucleotide sequence from letter to integer representation

## Fusion (3)

- `accelcal` — Calibration parameters for accelerometer
- `gyroparams` — Gyroscope sensor parameters
- `magparams` — Magnetometer sensor parameters

## Ident (3)

- `absorbDelay` — Replace time delays by poles atz= 0 or phase
- `idpoly` — Polynomial model with identifiable parameters
- `pzoptions` — Options for pole-zero plots

## Images (3)

- `adaptthresh` — Adaptive image threshold using local first-order statistics
- `im2single` — Convert image to single precision
- `measureIlluminant` — Measure scene illuminant using test chart

## Antenna (2)

- `arrayFactor` — Array factor in dB
- `raypl` — Path loss and phase change for RF propagation ray

## Audio (2)

- `audioEnvelope` — Compute envelope of an audio file
- `octavebw2bw` — Convert octave bandwidth to linear bandwidth

## PDE (2)

- `decsg` — Decompose constructive solid 2-D geometry into minimal regions
- `interpolateMagneticField` — Interpolate magnetic field in magnetostatic result at arbitrary spatial
