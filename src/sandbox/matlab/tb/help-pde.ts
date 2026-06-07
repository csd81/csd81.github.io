// Help entries for the Partial Differential Equation Toolbox, extracted from pde.ts.
// Keyed by function name; consumed via ToolboxModule.help (see tb/types.ts).
import type { HelpEntry } from '../help';

export const HELP_PDE: Record<string, HelpEntry | string> = {
    assema: { summary: 'Assemble area integral contributions for PDE FEM', syntax: ['[K,M,F] = assema(p,t,c,a,f)'], seealso: ['pdetrg', 'pdeintrp'] },
    pdetrg: { summary: 'Triangle geometry data (areas and midpoints)', syntax: ['[ar,g] = pdetrg(p,t)'], seealso: ['pdetriq', 'assema'] },
    pdetriq: { summary: 'Triangle mesh quality (circumradius/inradius ratio)', syntax: ['q = pdetriq(p,t)'], seealso: ['pdetrg', 'jigglemesh'] },
    pdeintrp: { summary: 'Interpolate PDE solution in mesh points', syntax: ['up = pdeintrp(p,t,u)'], seealso: ['pdeprtni', 'tri2grid'] },
    pdeprtni: { summary: 'Interpolate PDE triangle solution to nodes', syntax: ['un = pdeprtni(p,t,ut)'], seealso: ['pdeintrp'] },
    pdegrad: { summary: 'Gradient of PDE solution', syntax: ['[ux,uy] = pdegrad(p,t,u)'], seealso: ['pdeintrp', 'pdetrg'] },
    pdesdt: { summary: 'PDE subdomain data for triangles', syntax: ['[cs,t] = pdesdt(c,t,sdl)'], seealso: ['pdesde'] },
    pdesde: { summary: 'PDE subdomain data for edges', syntax: ['[cs,e] = pdesde(c,e,sdl)'], seealso: ['pdesdt'] },
    pdearcl: { summary: 'Returns parameter values for a parametrized curve corresponding to a given set of arc length values.', syntax: ['pp = pdearcl(p,xy,s,s0,s1)'], seealso: ['pdegplot'] },
    tri2grid: { summary: 'Interpolate solution from triangle mesh to rectangular grid', syntax: ['ug = tri2grid(p,t,u,x,y)'], seealso: ['pdeintrp', 'initmesh'] },
    jigglemesh: { summary: 'Jiggles the triangular mesh by adjusting the node point positions.', syntax: ['p1 = jigglemesh(p,e,t)', 'p1 = jigglemesh(p,e,t,Name,Value)'], seealso: ['initmesh', 'pdetriq'] },
    poiasma: { summary: "Assemble stiffness matrix for Poisson equation on a rectangular grid", syntax: ['A = poiasma(nx,ny)', 'A = poiasma(nx,ny,h1,h2)'], description: ["A = poiasma(nx,ny) assembles the sparse finite-difference stiffness matrix for the 2-D Poisson equation on an nx-by-ny interior grid. Used with poicalc to solve Poisson's equation."], seealso: ['poicalc', 'delsq', 'numgrid'] },
    poicalc: { summary: "Solve Poisson equation on a rectangular grid", syntax: ['u = poicalc(f,hx,hy,nx,ny)'], description: ["u = poicalc(f,hx,hy,nx,ny) solves −Δu = f on a rectangular grid with spacing hx and hy, returning the interior solution vector u. Uses the DST-based fast Poisson solver."], seealso: ['poiasma', 'delsq', 'numgrid', 'dst'] },
    dst: { summary: 'Discrete sine transform', syntax: ['y = dst(x)'], seealso: ['idst', 'dct'] },
    idst: { summary: 'Inverse discrete sine transform', syntax: ['x = idst(y)'], seealso: ['dst', 'idct'] },
  };
