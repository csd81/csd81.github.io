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
Partial Differential Equation Toolbox
55
Geometry and Mesh
63
Unified Modeling
76
Domain-Specific Modeling
12
Battery P2D Modeling
20
General PDEs
3
Visualization
Added or Updated
Starting Release
Before R2022a
Ending Release
R2026a
Documentation Examples Functions Apps Videos Answers
Partial Differential Equation Toolbox — Functions
By CategoryAlphabetical List
Geometry and Mesh
Geometry
Creation and Visualization
decsg	Decompose constructive solid 2-D geometry into minimal regions
geometryFromEdges	Create 2-D geometry from decomposed geometry matrix
geometryFromMesh	Create 2-D or 3-D geometry from mesh
importGeometry	Import geometry from STL or STEP file
multicuboid	Create geometry formed by several cubic cells
multicylinder	Create geometry formed by several cylindrical cells
multisphere	Create geometry formed by several spherical cells
pdegplot	Plot PDE geometry
triangulation	Create triangulation object from fegeometry (Since R2023b)
Modification
addCell	Combine two geometries by adding one inside a cell of another
addFace	Fill void regions in 2-D and split cells in 3-D geometry
addVertex	Add vertex on geometry boundary
addVoid	Create void regions inside 3-D geometry
deleteCell	Delete geometry cells (Since R2025a)
extrude	Vertically extrude 2-D geometry or specified faces of 3-D geometry
intersect	Boolean intersection of 3-D geometries (Since R2025a)
mergeCells	Merge geometry cells (Since R2023b)
rotate	Rotate geometry
scale	Scale geometry
subtract	Boolean subtraction of 3-D geometries (Since R2025a)
translate	Translate geometry
union	Boolean union of 3-D geometries (Since R2025a)
Queries
cellEdges	Find edges belonging to boundaries of specified cells
cellFaces	Find faces belonging to specified cells
faceEdges	Find edges belonging to specified faces
facesAttachedToEdges	Find faces attached to specified edges
findCell	Find cells by coordinates of points located inside them (Since R2025a)
nearestEdge	Find edges nearest to specified point
nearestFace	Find faces nearest to specified point
PDE Modeler App
pdecirc	Draw circle in PDE Modeler app
pdeellip	Draw ellipse in PDE Modeler app
pdepoly	Draw polygon in PDE Modeler app
pderect	Draw rectangle in PDE Modeler app
Mesh
area	Compute area of 2-D mesh elements
findElements	Find mesh elements in specified region
findNodes	Find mesh nodes in specified region
generateMesh	Create triangular or tetrahedral mesh
meshQuality	Evaluate shape quality of mesh elements
pdemesh	Plot PDE mesh
pdeplot	Plot solution or mesh for 2-D problem
pdeplot3D	Plot solution or surface mesh for 3-D problem
pdeviz	Create and plot PDE visualization object
volume	Compute volume of 3-D mesh elements
Legacy Functions
adaptmesh	Create adaptive 2-D mesh and solve PDE
csgdel	Delete boundaries between subdomains
initmesh	Create initial 2-D mesh
jigglemesh	(Not recommended) Jiggle internal points of triangular mesh
meshToPet	[p,e,t] representation of FEMesh data
pdearcl	Represent arc lengths as parametrized curve
refinemesh	Refine triangular mesh
wgeom	Write geometry function to file
Other
AnalyticGeometry	Analytic 2-D geometry description
DiscreteGeometry	Discrete 2-D or 3-D geometry description
fegeometry	Geometry object for finite element analysis (Since R2023a)
FEMesh	Mesh object
Unified Modeling
Unified Model Setup and Solution
Model, Geometry, and Materials
fegeometry	Geometry object for finite element analysis (Since R2023a)
femodel	Finite element analysis model object (Since R2023a)
materialProperties	Material properties for structural, thermal, and electromagnetic analysis (Since R2023a)
Boundary Conditions
edgeBC	Boundary conditions on geometry edge (Since R2023a)
faceBC	Boundary conditions on geometry face (Since R2023a)
farFieldBC	Absorbing boundary condition for harmonic electromagnetic analysis (Since R2023a)
vertexBC	Boundary conditions on geometry vertex (Since R2023a)
Loads
cellLoad	Load on geometry cell (Since R2023a)
edgeLoad	Load on geometry edge (Since R2023a)
faceLoad	Load on geometry face (Since R2023a)
surfaceToSurfaceSettings	Settings for modeling thermal radiation between surfaces (Since R2023b)
vertexLoad	Load on geometry vertex (Since R2023a)
Initial Conditions and Initial Guesses
cellIC	Initial conditions on geometry cell (Since R2023a)
edgeIC	Initial conditions on geometry edge (Since R2023a)
faceIC	Initial conditions on geometry face (Since R2023a)
vertexIC	Initial conditions on geometry vertex (Since R2023a)
Reduced-Order Models
ReducedStructuralModel	Reduced-order structural model results
ReducedThermalModel	Reduced-order thermal model (Since R2022a)
romInterface	Reduced-order model (ROM) interface (Since R2024a)
assembleFEMatrices	Assemble finite element matrices
generateMesh	Create triangular or tetrahedral mesh
reduce	Reduce structural or thermal model
setupRadiation	Specify radiation parameters for surface-to-surface heat transfer (Since R2023b)
solve	Solve structural, heat transfer, electromagnetic, or P2D battery simulation problem
triangulation	Create triangulation object from fegeometry (Since R2023b)
Structural Mechanics
Other
FrequencyStructuralResults	Frequency response structural solution and derived quantities
ModalStructuralResults	Modal structural solution
StaticStructuralResults	Static structural solution and derived quantities
TransientStructuralResults	Transient structural solution and derived quantities
evaluatePrincipalStrain	Evaluate principal strain at nodal locations
evaluatePrincipalStress	Evaluate principal stress at nodal locations
evaluateReaction	Evaluate reaction forces on boundary
evaluateStrain	Evaluate strain for dynamic structural analysis problem
evaluateStress	Evaluate stress for dynamic structural analysis problem
evaluateVonMisesStress	Evaluate von Mises stress for dynamic structural analysis problem
filterByIndex	Access transient results for specified time steps (Since R2023b)
interpolateAcceleration	Interpolate acceleration at arbitrary spatial locations for all time or frequency steps for dynamic structural problem
interpolateDisplacement	Interpolate displacement at arbitrary spatial locations
interpolateStrain	Interpolate strain at arbitrary spatial locations
interpolateStress	Interpolate stress at arbitrary spatial locations
interpolateVelocity	Interpolate velocity at arbitrary spatial locations for all time or frequency steps for dynamic structural problem
interpolateVonMisesStress	Interpolate von Mises stress at arbitrary spatial locations
Heat Transfer
evaluateHeatFlux	Evaluate heat flux of thermal solution at nodal or arbitrary spatial locations
evaluateHeatRate	Evaluate integrated heat flow rate normal to specified boundary
evaluateTemperatureGradient	Evaluate temperature gradient of thermal solution at arbitrary spatial locations
filterByIndex	Access transient results for specified time steps (Since R2023b)
interpolateTemperature	Interpolate temperature in thermal result at arbitrary spatial locations
ModalThermalResults	Modal thermal solution (Since R2022a)
SteadyStateThermalResults	Steady-state thermal solution and derived quantities
TransientThermalResults	Transient thermal solution and derived quantities
Electromagnetics
Other
ConductionResults	DC conduction solution (Since R2022b)
ElectrostaticResults	Electrostatic solution and derived quantities
HarmonicResults	Harmonic electromagnetic solution (Since R2022a)
MagnetostaticResults	Magnetostatic solution and derived quantities
generateMaxwellStressTensor	Compute Maxwell stress tensor at nodal locations (Since R2024a)
interpolateCurrentDensity	Interpolate current density in DC conduction result at arbitrary spatial locations (Since R2022b)
interpolateElectricField	Interpolate electric field in electrostatic or DC conduction result at arbitrary spatial locations
interpolateElectricFlux	Interpolate electric flux density in electrostatic result at arbitrary spatial locations
interpolateElectricPotential	Interpolate electric potential in electrostatic or DC conduction result at arbitrary spatial locations
interpolateHarmonicField	Interpolate electric or magnetic field in harmonic result at arbitrary spatial locations (Since R2022a)
interpolateMagneticField	Interpolate magnetic field in magnetostatic result at arbitrary spatial locations
interpolateMagneticFlux	Interpolate magnetic flux density in magnetostatic result at arbitrary spatial locations
interpolateMagneticPotential	Interpolate magnetic potential in magnetostatic result at arbitrary spatial locations
interpolateMaxwellStressTensor	Interpolate Maxwell stress tensor at arbitrary spatial locations (Since R2024a)
Domain-Specific Modeling
Structural Mechanics
Structural Model Setup
assembleFEMatrices	Assemble finite element matrices
createpde	Create a PDE model
linearize	(To be removed) Linearize structural or thermal model (Since R2021b)
linearizeInput	(To be removed) Specify inputs to linearized model (Since R2021b)
linearizeOutput	(To be removed) Specify outputs of linearized model (Since R2021b)
reconstructSolution	Recover full-model transient solution from reduced-order model (ROM)
reduce	Reduce structural or thermal model
solve	Solve structural, heat transfer, electromagnetic, or P2D battery simulation problem
structuralBC	(To be removed) Specify boundary conditions for structural model
structuralBodyLoad	(To be removed) Specify body load for structural model
structuralBoundaryLoad	(To be removed) Specify boundary loads for structural model
structuralDamping	(To be removed) Specify damping parameters for transient or frequency response structural model
structuralIC	(To be removed) Set initial conditions for a transient structural model
structuralProperties	(To be removed) Assign structural properties of material for structural model
structuralSEInterface	(To be removed) Specify structural superelement interface for component mode synthesis
Solutions at Nodal Locations
evaluatePrincipalStrain	Evaluate principal strain at nodal locations
evaluatePrincipalStress	Evaluate principal stress at nodal locations
evaluateReaction	Evaluate reaction forces on boundary
evaluateStrain	Evaluate strain for dynamic structural analysis problem
evaluateStress	Evaluate stress for dynamic structural analysis problem
evaluateVonMisesStress	Evaluate von Mises stress for dynamic structural analysis problem
Solutions Interpolated to Custom Locations
interpolateAcceleration	Interpolate acceleration at arbitrary spatial locations for all time or frequency steps for dynamic structural problem
interpolateDisplacement	Interpolate displacement at arbitrary spatial locations
interpolateStrain	Interpolate strain at arbitrary spatial locations
interpolateStress	Interpolate stress at arbitrary spatial locations
interpolateVelocity	Interpolate velocity at arbitrary spatial locations for all time or frequency steps for dynamic structural problem
interpolateVonMisesStress	Interpolate von Mises stress at arbitrary spatial locations
Structural Model Properties
findBodyLoad	(To be removed) Find body load assigned to geometric region
findStructuralBC	(To be removed) Find structural boundary conditions and boundary loads assigned to geometric region
findStructuralDamping	(To be removed) Find damping model assigned to structural dynamics model
findStructuralIC	(To be removed) Find initial displacement and velocity assigned to geometric region
findStructuralProperties	(To be removed) Find structural material properties assigned to geometric region
Other
FrequencyStructuralResults	Frequency response structural solution and derived quantities
ModalStructuralResults	Modal structural solution
ReducedStructuralModel	Reduced-order structural model results
StaticStructuralResults	Static structural solution and derived quantities
StructuralModel	(To be removed) Structural model object
TransientStructuralResults	Transient structural solution and derived quantities
Heat Transfer
Thermal Model Setup
assembleFEMatrices	Assemble finite element matrices
createpde	Create a PDE model
internalHeatSource	(To be removed) Specify internal heat source for a thermal model
linearize	(To be removed) Linearize structural or thermal model (Since R2021b)
linearizeInput	(To be removed) Specify inputs to linearized model (Since R2021b)
linearizeOutput	(To be removed) Specify outputs of linearized model (Since R2021b)
reconstructSolution	Recover full-model transient solution from reduced-order model (ROM)
reduce	Reduce structural or thermal model
solve	Solve structural, heat transfer, electromagnetic, or P2D battery simulation problem
thermalBC	(To be removed) Specify boundary conditions for a thermal model
thermalIC	(To be removed) Set initial conditions or initial guess for a thermal model
thermalProperties	(To be removed) Assign thermal properties of a material for a thermal model
Solutions at Nodal and Custom Locations
evaluateHeatFlux	Evaluate heat flux of thermal solution at nodal or arbitrary spatial locations
evaluateHeatRate	Evaluate integrated heat flow rate normal to specified boundary
evaluateTemperatureGradient	Evaluate temperature gradient of thermal solution at arbitrary spatial locations
interpolateTemperature	Interpolate temperature in thermal result at arbitrary spatial locations
Thermal Model Properties
findHeatSource	(To be removed) Find heat source assigned to a geometric region
findThermalBC	(To be removed) Find thermal boundary conditions assigned to a geometric region
findThermalIC	(To be removed) Find thermal initial conditions assigned to a geometric region
findThermalProperties	(To be removed) Find thermal material properties assigned to a geometric region
Other
ModalThermalResults	Modal thermal solution (Since R2022a)
ReducedThermalModel	Reduced-order thermal model (Since R2022a)
SteadyStateThermalResults	Steady-state thermal solution and derived quantities
ThermalModel	(To be removed) Thermal model object
TransientThermalResults	Transient thermal solution and derived quantities
Electromagnetics
Electromagnetic Model Setup
assembleFEMatrices	Assemble finite element matrices
createpde	Create a PDE model
electromagneticBC	(To be removed) Apply boundary conditions to electromagnetic model
electromagneticProperties	(To be removed) Assign properties of material for electromagnetic model
electromagneticSource	(To be removed) Specify current density, charge density, and magnetization for electromagnetic model
generateMaxwellStressTensor	Compute Maxwell stress tensor at nodal locations (Since R2024a)
solve	Solve structural, heat transfer, electromagnetic, or P2D battery simulation problem
Solutions at Custom Locations
interpolateCurrentDensity	Interpolate current density in DC conduction result at arbitrary spatial locations (Since R2022b)
interpolateElectricField	Interpolate electric field in electrostatic or DC conduction result at arbitrary spatial locations
interpolateElectricFlux	Interpolate electric flux density in electrostatic result at arbitrary spatial locations
interpolateElectricPotential	Interpolate electric potential in electrostatic or DC conduction result at arbitrary spatial locations
interpolateHarmonicField	Interpolate electric or magnetic field in harmonic result at arbitrary spatial locations (Since R2022a)
interpolateMagneticField	Interpolate magnetic field in magnetostatic result at arbitrary spatial locations
interpolateMagneticFlux	Interpolate magnetic flux density in magnetostatic result at arbitrary spatial locations
interpolateMagneticPotential	Interpolate magnetic potential in magnetostatic result at arbitrary spatial locations
interpolateMaxwellStressTensor	Interpolate Maxwell stress tensor at arbitrary spatial locations (Since R2024a)
Electromagnetic Model Properties
findElectromagneticBC	(To be removed) Find electromagnetic boundary conditions assigned to geometric region
findElectromagneticProperties	(To be removed) Find electromagnetic material properties assigned to geometric region
findElectromagneticSource	(To be removed) Find electromagnetic source assigned to geometric region
Other
ConductionResults	DC conduction solution (Since R2022b)
ElectromagneticModel	(To be removed) Electromagnetic model object
ElectrostaticResults	Electrostatic solution and derived quantities
HarmonicResults	Harmonic electromagnetic solution (Since R2022a)
MagnetostaticResults	Magnetostatic solution and derived quantities
Battery P2D Modeling
batteryActiveMaterial	Active material properties of electrode for battery P2D model (Since R2026a)
batteryCyclingStep	Cycle object for battery P2D model (Since R2026a)
batteryElectrode	Electrode object for battery P2D model (Since R2026a)
batteryElectrolyte	Electrolyte object for battery P2D model (Since R2026a)
batteryInitialConditions	Initial conditions for battery P2D model (Since R2026a)
batteryMesh	Mesh object for battery P2D model (Since R2026a)
batteryP2DModel	P2D model for battery analysis (Since R2026a)
batteryP2DResults	Simulation results object for battery P2D model (Since R2026a)
batterySeparator	Separator object for battery P2D model (Since R2026a)
batterySolverOptions	Mesh and solver options for battery P2D analysis (Since R2026a)
plotSummary	Plot battery P2D modeling solution (Since R2026a)
solve	Solve structural, heat transfer, electromagnetic, or P2D battery simulation problem
General PDEs
PDE Model Setup
applyBoundaryCondition	Add boundary condition to PDEModel container
assembleFEMatrices	Assemble finite element matrices
createpde	Create a PDE model
setInitialConditions	Give initial conditions or initial solution
solvepde	Solve PDE specified in a PDEModel
solvepdeeig	Solve PDE eigenvalue problem specified in a PDEModel
specifyCoefficients	Specify coefficients in PDE model
Solutions at Nodal and Custom Locations
evaluateCGradient	Evaluate flux of PDE solution
evaluateGradient	Evaluate gradients of PDE solutions at arbitrary points
interpolateSolution	Interpolate PDE solution to arbitrary points
PDE Model Properties
findBoundaryConditions	Find boundary condition assignment for a geometric region
findCoefficients	Locate active PDE coefficients
findInitialConditions	Locate active initial conditions
Legacy Workflow
createPDEResults	Create solution object
evaluate	Interpolate data to selected locations
pdeInterpolant	Interpolant for nodal data to selected locations
Other
EigenResults	PDE eigenvalue solution and derived quantities
PDEModel	PDE model object
StationaryResults	Time-independent PDE solution and derived quantities
TimeDependentResults	Time-dependent PDE solution and derived quantities
Visualization
pdeplot	Plot solution or mesh for 2-D problem
pdeplot3D	Plot solution or surface mesh for 3-D problem
pdeviz	Create and plot PDE visualization object
How useful was this information?
Trust Center
Trademarks
Privacy Policy
Preventing Piracy
Application Status
Contact Us
© 1994-2026 The MathWorks, Inc.