Skip to content
MathWorks
MATLAB Help Center
Community
Learning
Dániel

Documentation Home
Functions
 Mathematics and Optimization
Category
Optimization Toolbox
30
Problem-Based Optimization Setup
4
Solver-Based Optimization Problem Setup
16
Nonlinear Optimization
12
Linear Programming and Mixed-Integer Linear Programming
11
Quadratic Programming and Cone Programming
13
Least Squares
18
Systems of Nonlinear Equations
Extended Capability
1Tall Arrays
17C/C++ Code Generation
5GPU Code Generation
8Automatic Parallel Support
5Thread-Based Environment
2GPU Arrays
1Distributed Arrays
Added or Updated
Starting Release
Before R2022a
Ending Release
R2026a
Documentation Examples Functions Apps Videos Answers
Optimization Toolbox — Functions
By CategoryAlphabetical List
Problem-Based Optimization Setup
Get Started with Problem-Based Optimization and Equations
Create Variables and Problem
eqnproblem	Create equation problem
optimproblem	Create optimization problem
optimvalues	Create values for optimization problem (Since R2022a)
optimvar	Create optimization variables
show	Display information about optimization object
showbounds	Display variable bounds
write	Save optimization object description
writebounds	Save description of variable bounds
Create Expressions, Constraints, and Equations
fcn2optimexpr	Convert function to optimization expression
optimconstr	Create empty optimization constraint array
optimeq	Create empty optimization equality array
optimexpr	Create empty optimization expression array
optimineq	Create empty optimization inequality array
show	Display information about optimization object
write	Save optimization object description
Solve and Analyze
evaluate	Evaluate optimization expression or objectives and constraints in problem
findindex	Find numeric index equivalents of named index variables
infeasibility	Constraint violation at a point
issatisfied	Constraint satisfaction of an optimization problem at a set of points (Since R2024a)
paretoplot	Pareto plot of multiobjective values (Since R2022a)
prob2struct	Convert optimization problem or equation problem to solver form
show	Display information about optimization object
solve	Solve optimization problem or equation problem
solvers	Determine default and valid solvers for optimization problem or equation problem (Since R2022b)
varindex	Map problem variables to solver-based variable index
write	Save optimization object description
Other
EquationProblem	System of nonlinear equations
OptimizationConstraint	Optimization constraints
OptimizationEquality	Equalities and equality constraints
OptimizationExpression	Arithmetic or functional expression in terms of optimization variables
OptimizationInequality	Inequality constraints
OptimizationProblem	Optimization problem
OptimizationValues	Values for optimization problems (Since R2022a)
OptimizationVariable	Variable for optimization
Solver-Based Optimization Problem Setup
Write Objective Function
checkGradients	Check first derivative function against finite-difference approximation (Since R2023b)
Write Constraints
checkGradients	Check first derivative function against finite-difference approximation (Since R2023b)
Set Optimization Options
optimoptions	Create optimization options
optimset	Create or modify optimization options structure
resetoptions	Reset options
Nonlinear Optimization
Problem-Based Nonlinear Optimization
evaluate	Evaluate optimization expression or objectives and constraints in problem
fcn2optimexpr	Convert function to optimization expression
infeasibility	Constraint violation at a point
optimproblem	Create optimization problem
optimvar	Create optimization variables
prob2struct	Convert optimization problem or equation problem to solver form
solve	Solve optimization problem or equation problem
Solver-Based Nonlinear Optimization
checkGradients	Check first derivative function against finite-difference approximation (Since R2023b)
fminbnd	Solve single-variable local minimization problem on a fixed interval
fmincon	Solve constrained nonlinear multivariable minimization problem
fminsearch	Solve unconstrained multivariable local minimization problem using derivative-free method
fminunc	Solve unconstrained multivariable nonlinear minimization problem
fseminf	Solve semi-infinitely constrained multivariable nonlinear minimization problem
optim.coder.infbound	Infinite bound support for code generation (Since R2022b)
Multiobjective Optimization
fgoalattain	Solve multiobjective goal attainment problems
fminimax	Solve minimax constraint problem
Linear Programming and Mixed-Integer Linear Programming
evaluate	Evaluate optimization expression or objectives and constraints in problem
findindex	Find numeric index equivalents of named index variables
infeasibility	Constraint violation at a point
integerConstraint	Indices of extended integer variables (Since R2025a)
intlinprog	Mixed-integer linear programming (MILP)
linprog	Solve linear programming problems
mpsread	Read MPS file for LP and MILP optimization data
optimproblem	Create optimization problem
optimvar	Create optimization variables
prob2struct	Convert optimization problem or equation problem to solver form
SensitivityAnalysis	Sensitivities of linear program coefficients (Since R2026a)
solve	Solve optimization problem or equation problem
Quadratic Programming and Cone Programming
coneprog	Second-order cone programming solver
evaluate	Evaluate optimization expression or objectives and constraints in problem
infeasibility	Constraint violation at a point
optim.coder.infbound	Infinite bound support for code generation (Since R2022b)
optimproblem	Create optimization problem
optimvar	Create optimization variables
optimwarmstart	Create warm start object
quadprog	Quadratic programming
secondordercone	Create second-order cone constraint
SecondOrderConeConstraint	Second-order cone constraint object
solve	Solve optimization problem or equation problem
Least Squares
Linear Least Squares
evaluate	Evaluate optimization expression or objectives and constraints in problem
infeasibility	Constraint violation at a point
lsqlin	Solve constrained linear least-squares problems
lsqnonneg	Solve nonnegative linear least-squares problem
mldivide, \	Solve systems of linear equations Ax = B for x
optim.coder.infbound	Infinite bound support for code generation (Since R2022b)
optimproblem	Create optimization problem
optimvar	Create optimization variables
optimwarmstart	Create warm start object
solve	Solve optimization problem or equation problem
Nonlinear Least Squares (Curve Fitting)
checkGradients	Check first derivative function against finite-difference approximation (Since R2023b)
evaluate	Evaluate optimization expression or objectives and constraints in problem
infeasibility	Constraint violation at a point
lsqcurvefit	Solve nonlinear curve-fitting (data-fitting) problems in least-squares sense
lsqnonlin	Solve nonlinear least-squares (nonlinear data-fitting) problems
optim.coder.infbound	Infinite bound support for code generation (Since R2022b)
optimproblem	Create optimization problem
optimvar	Create optimization variables
solve	Solve optimization problem or equation problem
Systems of Nonlinear Equations
Solve and Analyze, Problem-Based
eqnproblem	Create equation problem
evaluate	Evaluate optimization expression or objectives and constraints in problem
infeasibility	Constraint violation at a point
optimeq	Create empty optimization equality array
optimvar	Create optimization variables
prob2struct	Convert optimization problem or equation problem to solver form
show	Display information about optimization object
solve	Solve optimization problem or equation problem
write	Save optimization object description
Solve Equations, Solver-Based
checkGradients	Check first derivative function against finite-difference approximation (Since R2023b)
fsolve	Solve system of nonlinear equations
fzero	Root of nonlinear function
lsqlin	Solve constrained linear least-squares problems
lsqnonlin	Solve nonlinear least-squares (nonlinear data-fitting) problems
Other
EquationProblem	System of nonlinear equations
OptimizationEquality	Equalities and equality constraints
OptimizationExpression	Arithmetic or functional expression in terms of optimization variables
OptimizationVariable	Variable for optimization
How useful was this information?
Trust Center
Trademarks
Privacy Policy
Preventing Piracy
Application Status
Contact Us
© 1994-2026 The MathWorks, Inc.