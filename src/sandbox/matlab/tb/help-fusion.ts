// Help entries for the Sensor Fusion and Tracking Toolbox, extracted from fusion.ts.
// Keyed by function name; consumed via ToolboxModule.help (see tb/types.ts).
import type { HelpEntry } from '../help';

export const HELP_FUSION: Record<string, HelpEntry | string> = {
    assignmunkres: {
      summary: 'Munkres global nearest neighbor assignment algorithm',
      syntax: ['[assignments,unassignedrows,unassignedcolumns] = assignmunkres(costmatrix,costofnonassignment)'],
      description: [
        'assignmunkres(C,gate) solves the optimal assignment problem: minimise sum C(i,j) for assigned pairs.',
        'Pairs with cost > gate are left unassigned.',
        'Returns an Nx2 matrix of [rowIdx, colIdx] assignments, plus row and column indices of unassigned detections.',
      ],
      seealso: ['assignauction', 'assignjv', 'assignsd'],
    },
    assignauction: {
      summary: 'Assignment using auction global nearest neighbor algorithm',
      syntax: ['[assignments,unassignedrows,unassignedcolumns] = assignauction(costmatrix,costofnonassignment)'],
      description: ['assignauction solves the same assignment problem as assignmunkres using the auction algorithm (Bertsekas). Same interface.'],
      seealso: ['assignmunkres', 'assignjv'],
    },
    assignjv: {
      summary: 'Jonker-Volgenant global nearest neighbor assignment algorithm',
      syntax: ['[assignments,unassignedrows,unassignedcolumns] = assignjv(costmatrix,costofnonassignment)'],
      description: ['assignjv uses the Jonker-Volgenant method to solve the assignment problem. Typically faster than Munkres for large cost matrices.'],
      seealso: ['assignmunkres', 'assignauction'],
    },
    allanvar: {
      summary: 'Allan variance',
      syntax: ['[avar,tau] = allanvar(Omega)', '[avar,tau] = allanvar(Omega,m)'],
      description: [
        '[avar,tau] = allanvar(Omega) estimates the Allan variance of the time series Omega at multiple averaging intervals.',
        'tau is the vector of averaging times; avar is the corresponding Allan variance estimate.',
      ],
      seealso: ['allandev'],
    },
    constvel: {
      summary: 'State transition function for constant-velocity motion model',
      syntax: ['predictedState = constvel(state)', 'predictedState = constvel(state,dt)'],
      description: [
        'constvel(state) predicts the next state for a constant-velocity model with dt=1.',
        'State format: [x, vx, y, vy] (or extended with z, vz).',
      ],
      seealso: ['constacc', 'constturn', 'constveljac'],
    },
    constacc: {
      summary: 'State transition function for constant-acceleration motion model',
      syntax: ['predictedState = constacc(state)', 'predictedState = constacc(state,dt)'],
      description: [
        'constacc(state) predicts the next state for a constant-acceleration model.',
        'State format: [x, vx, ax, y, vy, ay].',
      ],
      seealso: ['constvel', 'constturn', 'constaccjac'],
    },
    constturn: {
      summary: 'State transition function for constant turn-rate motion model',
      syntax: ['predictedState = constturn(state)', 'predictedState = constturn(state,dt)'],
      description: [
        'constturn(state) predicts the next state for a coordinated-turn model.',
        'State format: [x, vx, y, vy, omega] where omega is the yaw rate (rad/s).',
      ],
      seealso: ['constvel', 'constacc', 'constturnjac'],
    },
    cameas: {
      summary: 'Measurement function for constant-acceleration motion model',
      syntax: ['measurement = cameas(state)', 'measurement = cameas(state,frame)'],
      description: ['cameas(state) returns the [x;y;z] position from the CA state vector [x,vx,ax,y,vy,ay,z,vz,az]; missing axes report 0.'],
      seealso: ['constacc', 'cameasjac'],
    },
    constveljac: {
      summary: 'Jacobian of constant-velocity state transition',
      syntax: ['dfdx = constveljac(state)', 'dfdx = constveljac(state,dt)'],
      seealso: ['constvel'],
    },
    constaccjac: {
      summary: 'Jacobian of constant-acceleration state transition',
      syntax: ['dfdx = constaccjac(state)', 'dfdx = constaccjac(state,dt)'],
      seealso: ['constacc'],
    },
    constturnjac: {
      summary: 'Jacobian of constant turn-rate state transition',
      syntax: ['dfdx = constturnjac(state)', 'dfdx = constturnjac(state,dt)'],
      seealso: ['constturn'],
    },
    cameasjac: {
      summary: 'Jacobian of constant-acceleration measurement function',
      syntax: ['dhdx = cameasjac(state)'],
      seealso: ['cameas', 'constacc'],
    },
    // QUARANTINED: compassangle, accelcal — help entries removed with their builtins.
  };
