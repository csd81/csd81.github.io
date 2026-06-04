
Symbolic Math Toolbox — Functions

Symbolic Computations in MATLAB
Symbolic Variables, Expressions, Functions, and Settings
Create Symbolic Variables, Expressions, and Functions
fold	Combine (fold) vector elements using function
piecewise	Conditionally defined expression or function
str2sym	Evaluate string representing symbolic expression
sym	Create symbolic variables, expressions, functions, matrices
symfun	Create symbolic functions
symfunmatrix	Create symbolic matrix function (Since R2022a)
symfunmatrix2symfun	Convert symbolic matrix function to symbolic function (Since R2022a)
symmatrix	Create symbolic matrix variable
symmatrix2sym	Convert symbolic matrix variable to array of scalar variables
syms	Create symbolic scalar variables and functions, and matrix variables and functions
Find Symbolic Variables and Terms
argnames	Input variables of symbolic function or matrix function
children	Subexpressions or terms of symbolic expression
formula	Return body of symbolic function or matrix function
has	Check if expression contains particular subexpression
symvar	Find symbolic variables in symbolic input
Determine Symbolic Types
findSymType	Find symbolic subobjects of specific type
hasSymType	Determine whether symbolic object contains specific type
isSymType	Determine whether symbolic object is specific type
mapSymType	Apply function to symbolic subobjects of specific type
symFunType	Determine functional type of symbolic object
symType	Determine type of symbolic object
Check for Infinity and NaN
isfinite	Check whether symbolic array elements are finite
isinf	Check whether symbolic array elements are infinite
isnan	Check whether symbolic array elements are NaNs
Change Settings
sympref	Set symbolic settings
Operators and Elementary Operations
Arithmetic Operations
ctranspose	Symbolic matrix complex conjugate transpose
ldivide	Symbolic array left division
minus	Symbolic subtraction
mldivide	Symbolic matrix left division
mpower	Symbolic matrix power
mrdivide	Symbolic matrix right division
mtimes	Symbolic matrix multiplication
nthroot	Nth root of symbolic numbers
plus	Symbolic addition
power	Symbolic array power
rdivide	Symbolic array right division
times	Symbolic array multiplication
transpose	Symbolic matrix transpose
Relational Operations
Operators
eq	Define symbolic equation
ge	Define greater than or equal to condition
gt	Define greater than relation
le	Define less than or equal to condition
lt	Define less than relation
ne	Define inequality
Functions
has	Check if expression contains particular subexpression
hasSymType	Determine whether symbolic object contains specific type
in	Numeric type of symbolic input
isAlways	Determine if symbolic conditions are true for all values of variables
isequal	Determine if symbolic inputs are equal
isequaln	Test symbolic objects for equality, treating NaN values as equal
isSymType	Determine whether symbolic object is specific type
max	Maximum elements of symbolic input
min	Minimum elements of symbolic input
piecewise	Conditionally defined expression or function
Logical Operations
Operators
and	Logical AND for symbolic expressions
not	Logical NOT for symbolic expressions
or	Logical OR for symbolic expressions
xor	Logical XOR for symbolic expressions
Functions
all	Test whether all equations and inequalities represented as elements of symbolic array are valid
any	Test whether at least one of equations and inequalities represented as elements of symbolic array is valid
has	Check if expression contains particular subexpression
hasSymType	Determine whether symbolic object contains specific type
in	Numeric type of symbolic input
isAlways	Determine if symbolic conditions are true for all values of variables
isequaln	Test symbolic objects for equality, treating NaN values as equal
isfinite	Check whether symbolic array elements are finite
isinf	Check whether symbolic array elements are infinite
isnan	Check whether symbolic array elements are NaNs
isSymType	Determine whether symbolic object is specific type
logical	Determine if symbolic equation, inequality, or condition is true
symfalse	Symbolic logical constant false
symtrue	Symbolic logical constant true
Modulo Operations
mod	Symbolic modulus after division
powermod	Modular exponentiation
quorem	Quotient and remainder
rem	Remainder after division
Complex Numbers
abs	Symbolic absolute value (complex modulus or magnitude)
angle	Symbolic polar angle
conj	Complex conjugate of symbolic input
imag	Imaginary part of complex number
real	Real part of complex number
Conversion Between Symbolic and Numeric
cell2sym	Convert cell array to symbolic array
double	Convert symbolic values to MATLAB double precision
matlabFunction	Convert symbolic expression to function handle or file
poly2sym	Create symbolic polynomial from vector of coefficients
str2sym	Evaluate string representing symbolic expression
subs	Symbolic substitution
sym	Create symbolic variables, expressions, functions, matrices
sym2cell	Convert symbolic array to cell array
sym2poly	Extract vector of all numeric coefficients, including zeros, from symbolic polynomial
symfun	Create symbolic functions
vpa	Variable-precision arithmetic (arbitrary-precision arithmetic)
Units of Measurement
Define, Create, Convert Units
checkUnits	Check for compatible dimensions and consistent units
findUnits	Find units in input
isUnit	Determine if input is a symbolic unit
mixedUnits	Split unit into sum of units
newUnit	Define new unit
removeUnit	Remove unit
rewrite	Rewrite expression in terms of another function
separateUnits	Separate units from expression
simplify	Algebraic simplification
str2symunit	Convert character vector or string to unit
symunit	Units of measurement
symunit2str	Convert unit to character vector
unitConversionFactor	Conversion factor between units
unitConvert	Convert units to other units of measurement
unitInfo	Information on units of measurement
Unit Systems
baseUnits	Base units of unit system
derivedUnits	Derived units of unit system
newUnitSystem	Define unit system
removeUnitSystem	Remove unit system
unitSystems	List available unit systems
Mathematics
Equation Solving
Linear and Nonlinear Equations and Systems
eliminate	Eliminate variables from rational equations
equationsToMatrix	Convert linear equations to matrix form
finverse	Functional inverse
isolate	Isolate variable or expression in equation
linsolve	Solve symbolic linear equations in matrix form
poles	Poles of expression or function
solve	Equations and systems solver
solveRecurrence	Solve recurrence relations (Since R2026a)
vpasolve	Solve symbolic equations numerically
Ordinary Differential Equations (ODEs)
dsolve	Solve system of differential equations
massMatrixForm	Extract mass matrix and right side of semilinear system of differential algebraic equations
odeFunction	Convert symbolic expressions to function handle for ODE solvers
odeToVectorField	Reduce order of differential equations to first-order
Differential Algebraic Equations (DAEs)
daeFunction	Convert system of differential algebraic equations to MATLAB function handle suitable for ode15i
decic	Find consistent initial conditions for first-order implicit ODE system with algebraic constraints
findDecoupledBlocks	Search for decoupled blocks in systems of equations
incidenceMatrix	Find incidence matrix of system of equations
isLowIndexDAE	Check if differential index of system of equations is lower than 2
massMatrixForm	Extract mass matrix and right side of semilinear system of differential algebraic equations
odeFunction	Convert symbolic expressions to function handle for ODE solvers
reduceDAEIndex	Convert system of first-order differential algebraic equations to equivalent system of differential index 1
reduceDAEToODE	Convert system of first-order semilinear differential algebraic equations to equivalent system of differential index 0
reduceDifferentialOrder	Reduce system of higher-order differential equations to equivalent system of first-order differential equations
reduceRedundancies	Simplify system of first-order differential algebraic equations by eliminating redundant equations and variables
Partial Differential Equations
pdeCoefficients	Extract coefficients of partial differential equation
pdeCoefficientsToDouble	Convert symbolic PDE coefficients to double format
Formula Manipulation and Simplification
Simplification
simplify	Algebraic simplification
simplifyFraction	Simplify symbolic rational expressions
subexpr	Rewrite symbolic expression in terms of common subexpressions
Formula Rearrangement and Rewriting
Polynomials & Fractions
coeffs	Coefficients of polynomial
expand	Expand expressions and simplify inputs of functions by using identities
frac	Find fractional part
horner	Horner nested polynomial representation
numden	Extract numerator and denominator
partfrac	Partial fraction decomposition
Rewriting & Decomposition
children	Subexpressions or terms of symbolic expression
collect	Collect coefficients of identical powers
combine	Combine terms of identical algebraic structure
compose	Functional composition
displayFormula	Display symbolic formula from string
divisors	Divisors of integer or expression
factor	Factorization
isolate	Isolate variable or expression in equation
lhs	Left side (LHS) of equation
mapSymType	Apply function to symbolic subobjects of specific type
rewrite	Rewrite expression in terms of another function
rhs	Right side (RHS) of equation
Substitution
subexpr	Rewrite symbolic expression in terms of common subexpressions
subs	Symbolic substitution
Calculus
Limits, Differentiation, and Integration
changeIntegrationVariable	Integration by substitution
diff	Differentiate symbolic expression or function
functionalDerivative	Functional derivative (variational derivative)
int	Definite and indefinite integrals
integrateByParts	Integration by parts
limit	Limit of symbolic expression
release	Evaluate integrals
vpaintegral	Numerical integration using variable precision
Vector Analysis
curl	Curl of symbolic vector field
divergence	Divergence of symbolic vector field
gradient	Gradient vector of symbolic scalar field
hessian	Hessian matrix of symbolic scalar function
jacobian	Jacobian matrix of symbolic function
laplacian	Laplacian of symbolic field
potential	Potential of vector field
vectorPotential	Vector potential of vector field
Series
cumprod	Symbolic cumulative product
cumsum	Symbolic cumulative sum
pade	Pade approximant
rsums	Interactive evaluation of Riemann sums
series	Puiseux series
symprod	Product of series
symsum	Symbolic sum of series
taylor	Taylor series
vpasum	Numerical summation using variable precision
Transforms
fourier	Fourier transform of symbolic expression or function
htrans	Hilbert transform
ifourier	Inverse Fourier transform
ihtrans	Inverse Hilbert transform
ilaplace	Inverse Laplace transform
iztrans	Inverse Z-transform
laplace	Laplace transform
sympref	Set symbolic settings
ztrans	Z-transform
Partial Differential Equations
pdeCoefficients	Extract coefficients of partial differential equation
pdeCoefficientsToDouble	Convert symbolic PDE coefficients to double format
Interactive Tools
rsums	Interactive evaluation of Riemann sums
taylortool	Taylor series calculator
Linear Algebra
Matrix Operations and Transformations
cat	Concatenate symbolic arrays along specified dimension
colon	Create symbolic vectors, array subscripting, and for-loop iterators
diag	Create diagonal matrix or get diagonals from symbolic matrices
horzcat	Concatenate symbolic arrays horizontally
reshape	Reshape symbolic array
sort	Sort elements of symbolic arrays
tril	Return lower triangular part of symbolic matrix
triu	Return upper triangular part of symbolic matrix
vertcat	Concatenate symbolic arrays vertically
Linear Equations
Solving Linear Equations
adjoint	Classical adjoint (adjugate) of square matrix
cond	Condition number of matrix
det	Determinant of symbolic matrix
equationsToMatrix	Convert linear equations to matrix form
inv	Inverse of symbolic matrix
linsolve	Solve symbolic linear equations in matrix form
norm	Norm of symbolic vector or matrix
pinv	Moore-Penrose inverse (pseudoinverse) of symbolic matrix
rank	Rank of symbolic matrix
rref	Reduced row echelon form of matrix (Gauss-Jordan elimination)
Matrix Basis
colspace	Basis for column space of matrix
null	Form basis for null space of matrix
orth	Orthonormal basis for range of symbolic matrix
Matrix Factorization and Decomposition
chol	Cholesky factorization
lu	LU factorization
qr	QR decomposition of symbolic matrix
svd	Singular value decomposition of symbolic matrix
Eigenvalues and Eigenvectors
charpoly	Characteristic polynomial of matrix
eig	Eigenvalues and eigenvectors of symbolic matrix
jordan	Jordan normal form (Jordan canonical form)
Matrix Analysis & Vector Calculus
curl	Curl of symbolic vector field
divergence	Divergence of symbolic vector field
gradient	Gradient vector of symbolic scalar field
hessian	Hessian matrix of symbolic scalar function
jacobian	Jacobian matrix of symbolic function
laplacian	Laplacian of symbolic field
potential	Potential of vector field
vectorPotential	Vector potential of vector field
Normal Forms and Special Matrices
bernsteinMatrix	Bernstein matrix
hermiteForm	Hermite form of matrix
jordan	Jordan normal form (Jordan canonical form)
smithForm	Smith form of matrix
toeplitz	Symbolic Toeplitz matrix
Matrix Functions
expm	Matrix exponential of symbolic matrices
funm	General matrix function
logm	Matrix logarithm
sqrtm	Matrix square root
Assumptions
assume	Set assumption on symbolic object
assumeAlso	Add assumption on symbolic object
assumptions	Show assumptions affecting symbolic variable, expression, or function
in	Numeric type of symbolic input
isAlways	Determine if symbolic conditions are true for all values of variables
logical	Determine if symbolic equation, inequality, or condition is true
piecewise	Conditionally defined expression or function
Polynomials
Polynomial Operations
coeffs	Coefficients of polynomial
gbasis	Reduced Groebner basis
poly2sym	Create symbolic polynomial from vector of coefficients
polynomialDegree	Degree of polynomial
polynomialReduce	Reduce polynomials by division
resultant	Resultant of two polynomials
root	Represent roots of polynomial
sym2poly	Extract vector of all numeric coefficients, including zeros, from symbolic polynomial
Characterize Matrices
charpoly	Characteristic polynomial of matrix
minpoly	Minimal polynomial of matrix
Special Polynomials
bernstein	Bernstein polynomials
chebyshevT	Chebyshev polynomials of the first kind
chebyshevU	Chebyshev polynomials of the second kind
gegenbauerC	Gegenbauer polynomials
hermiteH	Hermite polynomials
jacobiP	Jacobi polynomials
laguerreL	Generalized Laguerre Function and Laguerre Polynomials
legendreP	Legendre polynomials
Mathematical Functions
Constants
catalan	Catalan constant
eulergamma	Euler–Mascheroni constant
Logarithms, Polylogarithms, and Zeta Function
dilog	Dilogarithm function
hurwitzZeta	Hurwitz zeta function
log	Natural logarithm of entries of symbolic matrix
log10	Log base 10 of symbolic input
log2	Base-2 logarithm of symbolic input
polylog	Polylogarithm
psi	Digamma function
zeta	Riemann zeta function
Trigonometric Functions
Trigonometric Functions
cos	Symbolic cosine function
cot	Symbolic cotangent function
csc	Symbolic cosecant function
sec	Symbolic secant function
sin	Symbolic sine function
sinc	Normalized sinc function
tan	Symbolic tangent function
Inverse Trigonometric Functions
acos	Symbolic inverse cosine function
acot	Symbolic inverse cotangent function
acsc	Symbolic inverse cosecant function
asec	Symbolic inverse secant function
asin	Symbolic inverse sine function
atan	Symbolic inverse tangent
Hyperbolic Functions
acosh	Symbolic inverse hyperbolic cosine function
acoth	Symbolic inverse hyperbolic cotangent function
acsch	Symbolic inverse hyperbolic cosecant function
asech	Symbolic inverse hyperbolic secant function
asinh	Symbolic inverse hyperbolic sine function
atanh	Symbolic inverse hyperbolic tangent function
cosh	Symbolic hyperbolic cosine function
coth	Symbolic hyperbolic cotangent function
csch	Symbolic hyperbolic cosecant function
sech	Symbolic hyperbolic secant function
sinh	Symbolic hyperbolic sine function
tanh	Symbolic hyperbolic tangent function
Complex Numbers
abs	Symbolic absolute value (complex modulus or magnitude)
angle	Symbolic polar angle
atan2	Symbolic four-quadrant inverse tangent
conj	Complex conjugate of symbolic input
imag	Imaginary part of complex number
nthroot	Nth root of symbolic numbers
real	Real part of complex number
sign	Sign of real or complex value
signIm	Sign of the imaginary part of complex number
Gamma and Error Functions
Gamma Functions
beta	Beta function
factorial	Factorial of symbolic input
gamma	Gamma function
gammaln	Logarithmic gamma function
igamma	Incomplete gamma function
nchoosek	Binomial coefficient
pochhammer	Pochhammer symbol
Error Functions
dawson	Dawson integral
erf	Error function
erfc	Complementary error function
erfcinv	Inverse complementary error function
erfi	Imaginary error function
erfinv	Inverse error function
fresnelc	Fresnel cosine integral function
fresnels	Fresnel sine integral function
Trigonometric, Elliptic, and Other Integrals
Trigonometric Integrals
coshint	Hyperbolic cosine integral function
cosint	Cosine integral function
ei	One-argument exponential integral function
eulergamma	Euler–Mascheroni constant
expint	Exponential integral function
logint	Logarithmic integral function
sinhint	Hyperbolic sine integral function
sinint	Sine integral function
ssinint	Shifted sine integral function
Elliptic Integrals
ellipke	Complete elliptic integrals of the first and second kinds
ellipticCE	Complementary complete elliptic integral of the second kind
ellipticCK	Complementary complete elliptic integral of the first kind
ellipticCPi	Complementary complete elliptic integral of the third kind
ellipticE	Complete and incomplete elliptic integrals of the second kind
ellipticF	Incomplete elliptic integral of the first kind
ellipticK	Complete elliptic integral of the first kind
ellipticNome	Elliptic nome function
ellipticPi	Complete and incomplete elliptic integrals of the third kind
Jacobi Elliptic Integrals & Zeta Function
ellipj	Jacobi elliptic functions
jacobiAM	Jacobi amplitude function
jacobiCD	Jacobi CD elliptic function
jacobiCN	Jacobi CN elliptic function
jacobiCS	Jacobi CS elliptic function
jacobiDC	Jacobi DC elliptic function
jacobiDN	Jacobi DN elliptic function
jacobiDS	Jacobi DS elliptic function
jacobiNC	Jacobi NC elliptic function
jacobiND	Jacobi ND elliptic function
jacobiNS	Jacobi NS elliptic function
jacobiSC	Jacobi SC elliptic function
jacobiSD	Jacobi SD elliptic function
jacobiSN	Jacobi SN elliptic function
jacobiZeta	Jacobi zeta function
Other Special Functions
Dirac, Heaviside and Related Functions
dirac	Dirac delta function
heaviside	Heaviside step function
kroneckerDelta	Kronecker delta function
rectangularPulse	Rectangular pulse function
triangularPulse	Triangular pulse function
Airy and Bessel Functions
airy	Airy function
besselh	Bessel function of third kind (Hankel function) for symbolic expressions
besseli	Modified Bessel function of the first kind for symbolic expressions
besselj	Bessel function of the first kind for symbolic expressions
besselk	Modified Bessel function of the second kind for symbolic expressions
bessely	Bessel function of the second kind for symbolic expressions
Hypergeometric and Whittaker Functions
hypergeom	Hypergeometric function
kummerU	Confluent hypergeometric Kummer U function
meijerG	Meijer G-function
whittakerM	Whittaker M function
whittakerW	Whittaker W function
Lambert W and Wright Functions
lambertw	Lambert W function
wrightOmega	Wright omega function
Numbers and Precision
dec2bin	Convert symbolic integer in decimal to binary representation
dec2hex	Convert symbolic integer in decimal to hexadecimal representation
digits	Change variable precision used
double	Convert symbolic values to MATLAB double precision
imag	Imaginary part of complex number
real	Real part of complex number
vpa	Variable-precision arithmetic (arbitrary-precision arithmetic)
vpaintegral	Numerical integration using variable precision
vpasolve	Solve symbolic equations numerically
vpasum	Numerical summation using variable precision
Number Theory
Elementary Operations
divisors	Divisors of integer or expression
factorIntegerPower	Perfect power factoring
gcd	Greatest common divisor of symbolic numbers and polynomials
isPrimitiveRoot	Determine which array elements are primitive roots
lcm	Least common multiple of symbolic numbers and polynomials
max	Maximum elements of symbolic input
min	Minimum elements of symbolic input
mod	Symbolic modulus after division
powermod	Modular exponentiation
quorem	Quotient and remainder
rem	Remainder after division
Number Sequences
bernoulli	Bernoulli numbers and polynomials
euler	Euler numbers and polynomials
fibonacci	Fibonacci numbers
harmonic	Harmonic function (harmonic number)
rat	Rational fraction approximation (continued fraction)
Prime Numbers
nextprime	Next prime number
nthprime	nth prime number
prevprime	Previous prime number
Number-Theoretic Functions
eulerPhi	Euler phi function
jacobiSymbol	Jacobi symbol
Graphics
Animation Functions
animationToFrame	Return structure of frames from animation objects
fanimator	Create stop-motion animation object
playAnimation	Play animation objects in a MATLAB figure window
rewindAnimation	Rewind previously played animation objects
writeAnimation	Save animation as video file
Graphics Functions
fcontour	Plot contours of symbolic expression
fimplicit	Plot implicit symbolic equation or function
fimplicit3	Plot 3-D implicit equation or function
fmesh	Plot 3-D mesh
fplot	Plot symbolic expression or function
fplot3	Plot 3-D parametric curve
fpolarplot	Plot symbolic expression or function in polar coordinates (Since R2024a)
fsurf	Plot 3-D surface
Code Generation
ccode	C code representation of symbolic expression
fortran	Fortran representation of symbolic expression
latex	LaTeX form of symbolic expression
mathml	Generate MathML from symbolic expression
matlabFunction	Convert symbolic expression to function handle or file
matlabFunctionBlock	Convert symbolic expression to MATLAB function block
simscapeEquation	Convert symbolic expressions to Simscape language equations
symReadSSCParameters	Load parameters from Simscape component
symReadSSCVariables	Load variables from Simscape component
symWriteSSC	Create new Simscape component
texlabel	TeX representation of symbolic expression
 