 
Mathematics — Functions

Elementary Math
Arithmetic Operations
Basic Arithmetic
Addition
+	Add numbers, append strings
cumsum	Cumulative sum
movsum	Moving sum
sum	Sum of array elements
Subtraction
-	Subtraction
diff	Differences and approximate derivatives
Multiplication
*	Matrix multiplication
.*	Multiplication
cumprod	Cumulative product
pagemtimes	Page-wise matrix multiplication
prod	Product of array elements
tensorprod	Tensor products between two tensors (Since R2022a)
Division
./	Right array division
.\	Left array division
/	Solve systems of linear equations xA = B for x
\	Solve systems of linear equations Ax = B for x
pagemldivide	Page-wise left matrix divide (Since R2022a)
pagemrdivide	Page-wise right matrix divide (Since R2022a)
Powers
.^	Element-wise power
^	Matrix power
Transpose
'	Complex conjugate transpose
.'	Transpose vector or matrix
pagectranspose	Page-wise complex conjugate transpose
pagetranspose	Page-wise transpose
Array Sign
uminus	Unary minus
uplus	Unary plus
Modulo Division and Rounding
ceil	Round toward positive infinity
fix	Round toward zero
floor	Round toward negative infinity
idivide	Integer division with rounding option
mod	Remainder after division (modulo operation)
rem	Remainder after division
round	Round to nearest decimal or integer
Custom Binary Functions
bsxfun	Apply element-wise operation to two arrays with implicit expansion enabled
Trigonometry
Sine
asin	Inverse sine in radians
asind	Inverse sine in degrees
asinh	Inverse hyperbolic sine
sin	Sine of argument in radians
sind	Sine of argument in degrees
sinh	Hyperbolic sine
sinpi	Compute sin(X*pi) accurately
Cosine
acos	Inverse cosine in radians
acosd	Inverse cosine in degrees
acosh	Inverse hyperbolic cosine
cos	Cosine of argument in radians
cosd	Cosine of argument in degrees
cosh	Hyperbolic cosine
cospi	Compute cos(X*pi) accurately
Tangent
atan	Inverse tangent in radians
atan2	Four-quadrant inverse tangent
atan2d	Four-quadrant inverse tangent in degrees
atand	Inverse tangent in degrees
atanh	Inverse hyperbolic tangent
tan	Tangent of argument in radians
tand	Tangent of argument in degrees
tanh	Hyperbolic tangent
Cosecant
acsc	Inverse cosecant in radians
acscd	Inverse cosecant in degrees
acsch	Inverse hyperbolic cosecant
csc	Cosecant of input angle in radians
cscd	Cosecant of argument in degrees
csch	Hyperbolic cosecant
Secant
asec	Inverse secant in radians
asecd	Inverse secant in degrees
asech	Inverse hyperbolic secant
sec	Secant of angle in radians
secd	Secant of argument in degrees
sech	Hyperbolic secant
Cotangent
acot	Inverse cotangent in radians
acotd	Inverse cotangent in degrees
acoth	Inverse hyperbolic cotangent
cot	Cotangent of angle in radians
cotd	Cotangent of argument in degrees
coth	Hyperbolic cotangent
Hypotenuse
hypot	Square root of sum of squares (hypotenuse)
Conversions
cart2pol	Transform Cartesian coordinates to polar or cylindrical
cart2sph	Transform Cartesian coordinates to spherical
deg2rad	Convert angle from degrees to radians
pol2cart	Transform polar or cylindrical coordinates to Cartesian
rad2deg	Convert angle from radians to degrees
sph2cart	Transform spherical coordinates to Cartesian
Exponents and Logarithms
exp	Exponential
expm1	Compute exp(X)-1 accurately for small X
log	Natural logarithm
log10	Common logarithm (base 10)
log1p	Compute natural logarithm of 1+X accurately for small X
log2	Base 2 logarithm and floating-point number dissection
nextpow2	Exponent of next higher power of 2
nthroot	Real nth root of real numbers
pow2	Base 2 exponentiation and scaling of floating-point numbers
reallog	Natural logarithm for nonnegative real arrays
realpow	Array power for real-only output
realsqrt	Square root for nonnegative real arrays
sqrt	Square root
Complex Numbers
abs	Absolute value and complex magnitude
angle	Phase angle
complex	Create complex array
conj	Complex conjugate
cplxpair	Sort complex numbers into complex conjugate pairs
i	Imaginary unit
imag	Imaginary part of complex number
isreal	Determine whether array uses complex storage
j	Imaginary unit
real	Real part of complex number
sign	Sign function (signum function)
unwrap	Shift phase angles
Discrete Math
factor	Prime factors
factorial	Factorial of input
gcd	Greatest common divisor
isprime	Determine which array elements are prime
lcm	Least common multiple
matchpairs	Solve linear assignment problem
nchoosek	Binomial coefficient or all combinations
perms	All possible permutations
primes	Prime numbers less than or equal to input value
rat	Rational fraction approximation
rats	Rational output
Polynomials
conv	Convolution and polynomial multiplication
deconv	Least-squares deconvolution and polynomial division
poly	Polynomial with specified roots or characteristic polynomial
polyder	Polynomial differentiation
polydiv	Polynomial long division (Since R2024a)
polyeig	Polynomial eigenvalue problem
polyfit	Polynomial curve fitting
polyint	Polynomial integration
polyval	Polynomial evaluation
polyvalm	Matrix polynomial evaluation
residue	Partial fraction expansion (partial fraction decomposition)
roots	Polynomial roots
Special Functions
Bessel Functions
airy	Airy Functions
besselh	Bessel function of third kind (Hankel function)
besseli	Modified Bessel function of first kind
besselj	Bessel function of first kind
besselk	Modified Bessel function of second kind
bessely	Bessel function of second kind
Beta Functions
beta	Beta function
betainc	Incomplete beta function
betaincinv	Beta inverse cumulative distribution function
betaln	Logarithm of beta function
Error Functions
erf	Error function
erfc	Complementary error function
erfcinv	Inverse complementary error function
erfcx	Scaled complementary error function
erfinv	Inverse error function
Gamma Functions
gamma	Gamma function
gammainc	Regularized incomplete gamma function
gammaincinv	Inverse of regularized incomplete gamma function
gammaln	Logarithm of gamma function
psi	Digamma and polygamma functions
Other Special Functions
ellipj	Jacobi elliptic functions
ellipke	Complete elliptic integrals of first and second kind
expint	Exponential integral function
legendre	Associated Legendre functions
Constants and Test Matrices
Constants
eps	Floating-point relative accuracy
flintmax	Largest consecutive integer in floating-point format
i	Imaginary unit
Inf	Create array of all Inf values
j	Imaginary unit
NaN	Create array of all NaN values
pi	Ratio of circle's circumference to its diameter
Test Matrices
compan	Companion matrix
gallery	Test matrices
hadamard	Hadamard matrix
hankel	Hankel matrix
hilb	Hilbert matrix
invhilb	Inverse of Hilbert matrix
magic	Magic square
pascal	Pascal matrix
rosser	Classic symmetric eigenvalue test problem
toeplitz	Toeplitz matrix
vander	Vandermonde matrix
wilkinson	Wilkinson's eigenvalue test matrix
Query Array Elements
allfinite	Determine if all array elements are finite (Since R2022a)
anynan	Determine if any array element is NaN (Since R2022a)
isfinite	Determine which array elements are finite
isinf	Determine which array elements are infinite
isnan	Determine which array elements are NaN
Linear Algebra
Linear Equations
decomposition	Matrix decomposition for solving linear systems
inv	Matrix inverse
linsolve	Solve linear system of equations
lscov	Least-squares solution in presence of known covariance
lsqminnorm	Minimum norm least-squares solution to linear equation
lsqnonneg	Solve nonnegative linear least-squares problem
mldivide	Solve systems of linear equations Ax = B for x
mrdivide	Solve systems of linear equations xA = B for x
pinv	Moore-Penrose pseudoinverse
sylvester	Solve Sylvester equation AX + XB = C for X
Eigenvalues and Singular Values
balance	Diagonal scaling to improve eigenvalue accuracy
cdf2rdf	Convert complex diagonal form to real block diagonal form
eig	Eigenvalues and eigenvectors
eigs	Subset of eigenvalues and eigenvectors
gsvd	Generalized singular value decomposition
hess	Hessenberg form of matrix
ordeig	Eigenvalues of quasitriangular matrices
ordqz	Reorder eigenvalues in QZ factorization
ordschur	Reorder eigenvalues in Schur factorization
polyeig	Polynomial eigenvalue problem
qz	Generalized Schur (QZ) factorization for generalized eigenvalues
rsf2csf	Convert real Schur form to complex Schur form
schur	Schur decomposition
svd	Singular value decomposition
svdappend	Revise SVD after appending data (Since R2023b)
svds	Subset of singular values and vectors
svdsketch	Compute SVD of low-rank matrix sketch
Matrix Decomposition
chol	Cholesky factorization
cholupdate	Rank 1 update to Cholesky factorization
ldl	Block LDL' factorization for Hermitian indefinite matrices
lu	LU matrix factorization
planerot	Givens plane rotation
qr	QR decomposition
qrdelete	Remove column or row from QR factorization
qrinsert	Insert column or row into QR factorization
qrupdate	Rank 1 update to QR factorization
Matrix Operations
cross	Cross product
ctranspose	Complex conjugate transpose
dot	Dot product
expm	Matrix exponential
expmv	Matrix exponential multiplied by vector (Since R2023b)
funm	Evaluate general matrix function
kron	Kronecker tensor product
logm	Matrix logarithm
mpower	Matrix power
mtimes	Matrix multiplication
sqrtm	Matrix square root
transpose	Transpose vector or matrix
Matrix Structure
bandwidth	Lower and upper matrix bandwidth
isbanded	Determine if matrix is within specified bandwidth
isdiag	Determine if matrix is diagonal
ishermitian	Determine if matrix is Hermitian or skew-Hermitian
issymmetric	Determine if matrix is symmetric or skew-symmetric
istril	Determine if matrix is lower triangular
istriu	Determine if matrix is upper triangular
tril	Lower triangular part of matrix
triu	Upper triangular part of matrix
Matrix Properties
cond	Condition number for inversion
condeig	Condition number with respect to eigenvalues
condest	1-norm condition number estimate
det	Matrix determinant
norm	Vector and matrix norms
normest	2-norm estimate
null	Null space of matrix
orth	Orthonormal basis for range of matrix
rank	Rank of matrix
rcond	Reciprocal condition number
rref	Reduced row echelon form (Gauss-Jordan elimination)
subspace	Angle between two subspaces
trace	Sum of diagonal elements
vecnorm	Vector-wise norm
Page-Wise Matrix Functions
pagectranspose	Page-wise complex conjugate transpose
pageeig	Page-wise eigenvalues and eigenvectors (Since R2023a)
pageinv	Page-wise matrix inverse (Since R2022a)
pagelsqminnorm	Page-wise minimum-norm least-squares solution to linear equation (Since R2024a)
pagemldivide	Page-wise left matrix divide (Since R2022a)
pagemrdivide	Page-wise right matrix divide (Since R2022a)
pagemtimes	Page-wise matrix multiplication
pagenorm	Page-wise matrix or vector norm (Since R2022b)
pagepinv	Page-wise Moore-Penrose pseudoinverse (Since R2024a)
pagesvd	Page-wise singular value decomposition (Since R2021b)
pagetranspose	Page-wise transpose
Random Number Generation
rand	Uniformly distributed random numbers
randi	Uniformly distributed random integers
randn	Normally distributed random numbers
randperm	Random permutation of integers
RandStream	Random number stream
rng	Control random number generator
Interpolation
1-D and Gridded Interpolation
griddedInterpolant	Gridded data interpolation
interp1	1-D data interpolation (table lookup)
interp2	Interpolation for 2-D gridded data in meshgrid format
interp3	Interpolation for 3-D gridded data in meshgrid format
interpft	1-D interpolation (FFT method)
interpn	Interpolation for 1-D, 2-D, 3-D, and N-D gridded data in ndgrid format
makima	Modified Akima piecewise cubic Hermite interpolation
mkpp	Make piecewise polynomial
padecoef	Padé approximation of time delays
pchip	Piecewise Cubic Hermite Interpolating Polynomial (PCHIP)
ppval	Evaluate piecewise polynomial
spline	Cubic spline data interpolation
unmkpp	Extract piecewise polynomial details
Grid Creation
meshgrid	2-D and 3-D grids
ndgrid	Rectangular grid in N-D space
Scattered Interpolation
griddata	Interpolate 2-D or 3-D scattered data
griddatan	Interpolate N-D scattered data
scatteredInterpolant	Interpolate 2-D or 3-D scattered data
Optimization
fminbnd	Solve single-variable local minimization problem on a fixed interval
fminsearch	Solve unconstrained multivariable local minimization problem using derivative-free method
fzero	Root of nonlinear function
lsqnonneg	Solve nonnegative linear least-squares problem
optimget	Optimization options values
optimset	Create or modify optimization options structure
Numerical Integration and Differential Equations
Ordinary Differential Equations
ode	Ordinary differential equations (Since R2023b)
odeDelay	ODE delay definition (Since R2025a)
odeEvent	ODE event definition (Since R2023b)
odeJacobian	ODE Jacobian matrix (Since R2023b)
odeMassMatrix	ODE mass matrix (Since R2023b)
ODEResults	Results of ODE integration (Since R2023b)
odeSensitivity	ODE sensitivity analysis (Since R2024a)
Nonstiff Solvers
ode113	Solve nonstiff differential equations — variable order method
ode23	Solve nonstiff differential equations — low order method
ode45	Solve nonstiff differential equations — medium order method
ode78	Solve nonstiff differential equations — high order method (Since R2021b)
ode89	Solve nonstiff differential equations — high order method (Since R2021b)
Stiff Solvers
ode15s	Solve stiff differential equations and DAEs — variable order method
ode23s	Solve stiff differential equations — low order method
ode23t	Solve moderately stiff ODEs and DAEs — trapezoidal rule
ode23tb	Solve stiff differential equations — trapezoidal rule + backward differentiation formula
Fully Implicit Solvers
decic	Compute consistent initial conditions for ode15i
ode15i	Solve fully implicit differential equations — variable order method
Get/Set Options
odeget	Extract ODE option values
odeset	Create or modify options structure for ODE and PDE solvers
Evaluate and Extend Solution
deval	Evaluate differential equation solution structure
odextend	Extend solution to ODE
Boundary Value Problems
bvp4c	Solve boundary value problem — fourth-order method
bvp5c	Solve boundary value problem — fifth-order method
bvpget	Extract properties from options structure created with bvpset
bvpinit	Form initial guess for boundary value problem solver
bvpset	Create or alter options structure of boundary value problem
bvpxtend	Form guess structure for extending boundary value solutions
deval	Evaluate differential equation solution structure
Delay Differential Equations
dde23	Solve delay differential equations (DDEs) with constant delays
ddeget	Extract properties from delay differential equations options structure
ddensd	Solve delay differential equations (DDEs) of neutral type
ddesd	Solve delay differential equations (DDEs) with general delays
ddeset	Create or alter delay differential equations options structure
deval	Evaluate differential equation solution structure
1-D Partial Differential Equations
odeget	Extract ODE option values
odeset	Create or modify options structure for ODE and PDE solvers
pdepe	Solve 1-D parabolic and elliptic PDEs
pdeval	Interpolate numerical solution of PDE
Numerical Integration and Differentiation
cumtrapz	Cumulative trapezoidal numerical integration
del2	Discrete Laplacian
diff	Differences and approximate derivatives
gradient	Numerical gradient
integral	Numerical integration
integral2	Numerically evaluate double integral
integral3	Numerically evaluate triple integral
polyder	Polynomial differentiation
polyint	Polynomial integration
quad2d	Numerically evaluate double integral — tiled method
quadgk	Numerically evaluate integral — Gauss-Kronrod quadrature
trapz	Trapezoidal numerical integration
Fourier Analysis and Filtering
Fourier Transform
fft	Fast Fourier transform
fft2	2-D fast Fourier transform
fftn	N-D fast Fourier transform
fftshift	Shift zero-frequency component to center of spectrum
fftw	Define method for determining FFT algorithm
ifft	Inverse fast Fourier transform
ifft2	2-D inverse fast Fourier transform
ifftn	Multidimensional inverse fast Fourier transform
ifftshift	Inverse zero-frequency shift
interpft	1-D interpolation (FFT method)
nextpow2	Exponent of next higher power of 2
nufft	Nonuniform fast Fourier transform
nufftn	N-D nonuniform fast Fourier transform
Convolution
conv	Convolution and polynomial multiplication
conv2	2-D convolution
convn	N-D convolution
deconv	Least-squares deconvolution and polynomial division
Digital Filtering
filter	1-D digital filter
filter2	2-D digital filter
padecoef	Padé approximation of time delays
ss2tf	Convert state-space representation to transfer function
Sparse Matrices
Creation
spalloc	Allocate space for sparse matrix
sparse	Create sparse matrix
spconvert	Import from sparse matrix external format
spdiags	Extract nonzero diagonals and create sparse band and diagonal matrices
speye	Sparse identity matrix
sprand	Sparse uniformly distributed random matrix
sprandn	Sparse normally distributed random matrix
sprandsym	Sparse symmetric random matrix
Manipulation
find	Find indices and values of nonzero elements
full	Convert sparse matrix to full storage
issparse	Determine whether input is sparse
nnz	Number of nonzero matrix elements
nonzeros	Nonzero matrix elements
nzmax	Amount of storage allocated for nonzero matrix elements
spfun	Apply function to nonzero sparse matrix elements
spones	Replace nonzero sparse matrix elements with ones
spparms	Set parameters for sparse matrix routines
spy	Visualize sparsity pattern of matrix
Reordering Algorithms
amd	Approximate minimum degree permutation
colamd	Column approximate minimum degree permutation
colperm	Sparse column permutation based on nonzero count
dissect	Nested dissection permutation
dmperm	Dulmage-Mendelsohn decomposition
randperm	Random permutation of integers
symamd	Symmetric approximate minimum degree permutation
symrcm	Sparse reverse Cuthill-McKee ordering
Iterative Methods and Preconditioners
bicg	Solve system of linear equations — biconjugate gradients method
bicgstab	Solve system of linear equations — stabilized biconjugate gradients method
bicgstabl	Solve system of linear equations — stabilized biconjugate gradients (l) method
cgs	Solve system of linear equations — conjugate gradients squared method
equilibrate	Matrix scaling for improved conditioning
gmres	Solve system of linear equations — generalized minimum residual method
ichol	Incomplete Cholesky factorization
ilu	Incomplete LU factorization
lsqr	Solve system of linear equations — least-squares method
minres	Solve system of linear equations — minimum residual method
pcg	Solve system of linear equations — preconditioned conjugate gradients method
qmr	Solve system of linear equations — quasi-minimal residual method
symmlq	Solve system of linear equations — symmetric LQ method
tfqmr	Solve system of linear equations — transpose-free quasi-minimal residual method
Eigenvalues and Singular Values
condest	1-norm condition number estimate
eigs	Subset of eigenvalues and eigenvectors
normest	2-norm estimate
svds	Subset of singular values and vectors
Structural Analysis
dmperm	Dulmage-Mendelsohn decomposition
etree	Elimination tree
etreeplot	Plot elimination tree
gplot	Plot nodes and edges in adjacency matrix
spaugment	Form least-squares augmented system
sprank	Structural rank
symbfact	Symbolic factorization analysis
treelayout	Lay out tree or forest
treeplot	Plot picture of tree
unmesh	Convert edge matrix to coordinate and Laplacian matrices
Graph and Network Algorithms
Construction
digraph	Graph with directed edges
graph	Graph with undirected edges
Modify Nodes and Edges
addedge	Add new edge to graph
addnode	Add new node to graph
edgecount	Number of edges between two nodes
findedge	Locate edge in graph
findnode	Locate node in graph
flipedge	Reverse edge directions
numedges	Number of edges in graph
numnodes	Number of nodes in graph
reordernodes	Reorder graph nodes
rmedge	Remove edge from graph
rmnode	Remove node from graph
subgraph	Extract subgraph
Analyze Structure
bctree	Block-cut tree graph
biconncomp	Biconnected graph components
centrality	Measure node importance
condensation	Graph condensation
conncomp	Connected graph components
isdag	Determine if graph is acyclic
isisomorphic	Determine whether two graphs are isomorphic
ismultigraph	Determine whether graph has multiple edges
isomorphism	Compute isomorphism between two graphs
simplify	Reduce multigraph to simple graph
toposort	Topological order of directed acyclic graph
transclosure	Transitive closure
transreduction	Transitive reduction
Traversals, Shortest Paths, and Cycles
allcycles	Find all cycles in graph
allpaths	Find all paths between two graph nodes
bfsearch	Breadth-first graph search
cyclebasis	Fundamental cycle basis of graph
dfsearch	Depth-first graph search
distances	Shortest path distances of all node pairs
hascycles	Determine whether graph contains cycles
maxflow	Maximum flow in graph
minspantree	Minimum spanning tree of graph
shortestpath	Shortest path between two single nodes
shortestpathtree	Shortest path tree from node
Matrix Representation
adjacency	Graph adjacency matrix
incidence	Graph incidence matrix
laplacian	Graph Laplacian matrix
Node Information
degree	Degree of graph nodes
indegree	In-degree of nodes
inedges	Incoming edges to node
nearest	Nearest neighbors within radius
neighbors	Neighbors of graph node
outdegree	Out-degree of nodes
outedges	Outgoing edges from node
predecessors	Node predecessors
successors	Node successors
Visualization
highlight	Highlight nodes and edges in plotted graph
labeledge	Label graph edges
labelnode	Label graph nodes
layout	Change layout of graph plot
layoutcoords	Graph node and edge layout coordinates (Since R2024b)
plot	Plot graph nodes and edges
Other
GraphPlot	Graph plot for directed and undirected graphs
Computational Geometry
Triangulations
delaunayTriangulation	Delaunay triangulation in 2-D and 3-D
triangulation	Triangulation in 2-D or 3-D
Compute Geometric and Topological Queries
All Triangulations
circumcenter	Circumcenter of triangle or tetrahedron
edgeAttachments	Triangles or tetrahedra attached to specified edge
edges	Triangulation edges
faceNormal	Triangulation unit normal vectors
featureEdges	Sharp edges of surface triangulation
freeBoundary	Free boundary facets
incenter	Incenter of triangulation elements
isConnected	Test if two vertices are connected by an edge
size	Size of triangulation connectivity list
vertexAttachments	Triangles or tetrahedra attached to vertex
vertexNormal	Triangulation vertex normal
Delaunay Triangulations
convexHull	Convex hull of Delaunay triangulation
isInterior	Query points inside Delaunay triangulation
voronoi	Plot Voronoi diagram in 2-D space
Plot Triangulation Data
tetramesh	Tetrahedron mesh plot
trimesh	Triangular mesh plot
triplot	2-D triangular plot
trisurf	Triangular surface plot
Import and Export Triangulation Data
stlread	Create triangulation from STL file
stlwrite	Create STL file from triangulation
Create Basic Delaunay Triangulations
delaunay	Delaunay triangulation
delaunayn	N-D Delaunay triangulation
Spatial Search
barycentricToCartesian	Convert coordinates from barycentric to Cartesian
cartesianToBarycentric	Convert coordinates from Cartesian to barycentric
dsearchn	Nearest point search
nearestNeighbor	Vertex closest to specified point
neighbors	Triangle or tetrahedron neighbors
pointLocation	Triangle or tetrahedron enclosing point
tsearchn	N-D closest simplex search
Bounding Regions
Create Basic Bounding Regions
boundary	Boundary around a set of points in 2-D or 3-D
convhull	Convex hull
convhulln	N-D convex hull
Create and Manipulate Alpha Shapes
alphaShape	Polygons and polyhedra from points in 2-D and 3-D
alphaSpectrum	Alpha values giving distinct alpha shapes
alphaTriangulation	Triangulation that fills alpha shape
area	Area of 2-D alpha shape
boundaryFacets	Boundary facets of alpha shape
criticalAlpha	Alpha radius defining critical transition in shape
inShape	Determine if point is inside alpha shape
nearestNeighbor	Determine nearest alpha shape boundary point
numRegions	Number of regions in alpha shape
perimeter	Perimeter of 2-D alpha shape
plot	Plot alpha shape
surfaceArea	Surface area of 3-D alpha shape
volume	Volume of 3-D alpha shape
Voronoi Diagrams
voronoi	Plot Voronoi diagram in 2-D space
voronoiDiagram	Compute Voronoi diagram of Delaunay triangulation
voronoin	Compute Voronoi diagram in N-D space
Polygonal Shapes
polyshape	Represent 2-D polygonal shapes
Creation
boundaryshape	Create polyshape from 2-D triangulation
nsidedpoly	Create polyshape representing regular polygon with n sides
polyshape	Represent 2-D polygonal shapes
Modification
addboundary	Add polyshape boundary
polybuffer	Create buffer around points, lines, or polyshape objects
rmboundary	Remove polyshape boundary
rmholes	Remove holes in polyshape
rmslivers	Remove polyshape boundary outliers
rotate	Rotate polyshape
scale	Scale polyshape
simplify	Simplify polyshape boundaries
sortboundaries	Sort polyshape boundaries
sortregions	Sort polyshape regions
translate	Translate polyshape
Queries and Visualization
boundary	Find vertex coordinates of polyshape boundary
holes	Convert polyshape hole boundaries to array of polyshape objects
ishole	Determine if polyshape boundary is a hole
isinterior	Query points inside polyshape
issimplified	Determine if polyshape is well-defined
nearestvertex	Query nearest polyshape vertex
numboundaries	Find number of polyshape boundaries
numsides	Find number of polyshape sides
overlaps	Determine whether polyshape objects overlap
plot	Plot polyshape
regions	Access polyshape regions
Geometric Quantities
area	Compute area of polyshape
boundingbox	Find bounding box of polyshape
centroid	Find centroid of polyshape
convhull	Find convex hull of polyshape
perimeter	Compute perimeter of polyshape
triangulation	Triangulate polyshape
turningdist	Compute turning distance between polyshape objects
Boolean Operations
intersect	Intersection of polyshape objects or intersection of line segment with polyshape
subtract	Difference of two polyshape objects
union	Union of polyshape objects
xor	Exclusive OR of two polyshape objects
Polygon Operations Without Polyshape
inpolygon	Find points located inside or on edge of polygon
polyarea	Compute area of polygon
rectint	Find rectangle intersection area
Quantum Computing
Gate-Based Quantum Computing
Quantum Circuits and Gates
quantum.gate.CompositeGate	Composite gate for quantum computing (Since R2023a)
quantum.gate.SimpleGate	Simple gate for quantum computing (Since R2023a)
quantumCircuit	Quantum computing circuit (Since R2023a)
Quantum States and Measurements
observable	Measurements in Pauli basis (Since R2024b)
quantum.gate.QuantumMeasurement	Measurement result of quantum circuit (Since R2023a)
quantum.gate.QuantumState	State of qubits in quantum circuit (Since R2023a)
Quantum Devices and Tasks
quantum.backend.QuantumDeviceAWS	Quantum device available through AWS (Since R2023a)
quantum.backend.QuantumDeviceIBM	Quantum device available through IBM (Since R2023b)
quantum.backend.QuantumTaskAWS	Task sent to AWS for execution on quantum device (Since R2023a)
quantum.backend.QuantumTaskIBM	Task sent to IBM for execution on quantum device (Since R2023b)
Gate Creation Functions
Gates on One Target Qubit
hGate	Hadamard gate (Since R2023a)
idGate	Identity gate (Since R2023a)
xGate	Pauli X gate (Since R2023a)
yGate	Pauli Y gate (Since R2023a)
zGate	Pauli Z gate (Since R2023a)
Rotation Gates
r1Gate	z-axis rotation gate with global phase (Since R2023a)
rxGate	x-axis rotation gate (Since R2023a)
ryGate	y-axis rotation gate (Since R2023a)
rzGate	z-axis rotation gate (Since R2023a)
sGate	S gate (Since R2023a)
siGate	Inverse S gate (Since R2023a)
tGate	T gate (Since R2023a)
tiGate	Inverse T gate (Since R2023a)
Gates with One Control Qubit and One Target Qubit
chGate	Controlled Hadamard gate (Since R2023a)
cnotGate	CNOT gate (controlled X gate) (Since R2023a)
cxGate	Controlled X gate (CNOT gate) (Since R2023a)
cyGate	Controlled Y gate (Since R2023a)
czGate	Controlled Z gate (Since R2023a)
Gate That Swap States of Two Qubits
swapGate	Swap gate (Since R2023a)
Controlled Rotation Gates
cr1Gate	Controlled z-axis rotation gate with global phase (Since R2023a)
crxGate	Controlled x-axis rotation gate (Since R2023a)
cryGate	Controlled y-axis rotation gate (Since R2023a)
crzGate	Controlled z-axis rotation gate (Since R2023a)
Controlled Controlled X Gate
ccxGate	Controlled controlled X gate (CCNOT or Toffoli gate) (Since R2023a)
Ising Coupling Gates
rxxGate	Ising XX coupling gate (Since R2023a)
ryyGate	Ising YY coupling gate (Since R2023a)
rzzGate	Ising ZZ coupling gate (Since R2023a)
Composite and Specialized Gates
compositeGate	Construct composite gate for quantum computing (Since R2023a)
initGate	Initialization gate with specified qubit states (Since R2023b)
mcxGate	Multi-controlled X gate (Since R2023a)
qftGate	Quantum Fourier transform gate (Since R2023a)
unitaryGate	Unitary matrix gate (Since R2023b)
Uniformly Controlled Rotation Gates
ucrxGate	Uniformly controlled x-axis rotation gate (Since R2023b)
ucryGate	Uniformly controlled y-axis rotation gate (Since R2023b)
ucrzGate	Uniformly controlled z-axis rotation gate (Since R2023b)
Quadratic Unconstrained Binary Optimization (QUBO)
qaoa	Quantum approximate optimization algorithm (QAOA) for solving QUBO problem (Since R2024b)
qaoaResult	Result of solving QUBO problem using QAOA (Since R2024b)
qubo	Quadratic Unconstrained Binary Optimization (Since R2023a)
quboResult	Result of solving QUBO problem (Since R2023a)
tabuSearch	Tabu search algorithm for QUBO solve (Since R2023a)
tabuSearchResult	Result of solve for Tabu search algorithm (Since R2023a)
Other
evaluateObjective	Evaluate QUBO (Quadratic Unconstrained Binary Optimization) objective (Since R2023a)
knapsack2qubo	Convert knapsack problem to QUBO (Quadratic Unconstrained Binary Optimization) (Since R2025b)
maxcut2qubo	Convert max-cut problem to QUBO (Quadratic Unconstrained Binary Optimization) (Since R2024b)
qubo2ising	Convert QUBO problem to Ising observable (Since R2024b)
quboResult2knapsack	Convert QUBO result to knapsack solution (Since R2025b)
quboResult2tsp	Convert QUBO result to traveling salesperson solution (Since R2025b)
solve	Solve QUBO (Quadratic Unconstrained Binary Optimization) problem (Since R2023a)
tsp2qubo	Convert traveling salesperson problem to QUBO (Quadratic Unconstrained Binary Optimization) (Since R2025b)
 