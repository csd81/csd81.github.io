export abstract class Block {
    public name: string;
    public parameters: Record<string, any> = {};
    
    // Topology and dimensionality
    public numInputs: number = 1;
    public numOutputs: number = 1;
    public numContinuousStates: number = 0;
    public numDiscreteStates: number = 0;
    public hasDirectFeedthrough: boolean = true;
    
    constructor(name: string) {
        this.name = name;
    }

    public setParam(name: string, value: any) {
        this.parameters[name] = value;
    }

    public getParam(name: string): any {
        return this.parameters[name];
    }

    // Lifecycle methods
    public setup(): void {
        // Initialize based on parameters
    }

    public getInitialContinuousStates(): number[] {
        return new Array(this.numContinuousStates).fill(0);
    }

    public getInitialDiscreteStates(): number[] {
        return new Array(this.numDiscreteStates).fill(0);
    }

    // Core execution methods
    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        return new Array(this.numOutputs).fill(0);
    }

    public computeDerivatives(t: number, x: number[], u: number[]): number[] {
        return [];
    }

    public updateDiscrete(t: number, xd: number[], u: number[]): number[] {
        return [];
    }
}

// ---- Standard Block Library ----

export class Integrator extends Block {
    constructor(name: string) {
        super(name);
        this.numInputs = 1;
        this.numOutputs = 1;
        this.numContinuousStates = 1;
        this.hasDirectFeedthrough = false;
        this.parameters['InitialCondition'] = 0;
    }

    public getInitialContinuousStates(): number[] {
        return [Number(this.parameters['InitialCondition']) || 0];
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        return [x[0]];
    }

    public computeDerivatives(t: number, x: number[], u: number[]): number[] {
        return [u[0]]; // dx/dt = u
    }
}

export class Gain extends Block {
    constructor(name: string) {
        super(name);
        this.numInputs = 1;
        this.numOutputs = 1;
        this.hasDirectFeedthrough = true;
        this.parameters['Gain'] = 1;
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        const k = Number(this.parameters['Gain']) || 1;
        return [u[0] * k];
    }
}

export class Sum extends Block {
    constructor(name: string) {
        super(name);
        this.numInputs = 2; // Default to 2
        this.numOutputs = 1;
        this.hasDirectFeedthrough = true;
        this.parameters['Inputs'] = '++';
    }

    public setup() {
        const signs = String(this.parameters['Inputs'] || '++');
        this.numInputs = signs.length;
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        const signs = String(this.parameters['Inputs'] || '++');
        let sum = 0;
        for (let i = 0; i < this.numInputs; i++) {
            const sign = signs[i] === '-' ? -1 : 1;
            sum += (u[i] || 0) * sign;
        }
        return [sum];
    }
}

export class Constant extends Block {
    constructor(name: string) {
        super(name);
        this.numInputs = 0;
        this.numOutputs = 1;
        this.hasDirectFeedthrough = false; // Doesn't depend on inputs
        this.parameters['Value'] = 1;
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        return [Number(this.parameters['Value']) || 1];
    }
}

export class SineWave extends Block {
    constructor(name: string) {
        super(name);
        this.numInputs = 0;
        this.numOutputs = 1;
        this.hasDirectFeedthrough = false;
        this.parameters['Amplitude'] = 1;
        this.parameters['Frequency'] = 1; // rad/s
        this.parameters['Phase'] = 0;
        this.parameters['Bias'] = 0;
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        const A = Number(this.parameters['Amplitude']) || 1;
        const w = Number(this.parameters['Frequency']) || 1;
        const phi = Number(this.parameters['Phase']) || 0;
        const bias = Number(this.parameters['Bias']) || 0;
        return [A * Math.sin(w * t + phi) + bias];
    }
}

export class Outport extends Block {
    constructor(name: string) {
        super(name);
        this.numInputs = 1;
        this.numOutputs = 0; // An outport of the model doesn't output to another block
        this.hasDirectFeedthrough = true;
    }
    
    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        return [];
    }
}

export class Inport extends Block {
    constructor(name: string) {
        super(name);
        this.numInputs = 0;
        this.numOutputs = 1;
        this.hasDirectFeedthrough = false;
    }
    
    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        return []; // Inports will be fed explicitly by the model environment during sim
    }
}

export class Product extends Block {
    constructor(name: string) {
        super(name);
        this.numInputs = 2; // Default to 2
        this.numOutputs = 1;
        this.hasDirectFeedthrough = true;
        this.parameters['Inputs'] = '**';
    }

    public setup() {
        const signs = String(this.parameters['Inputs'] || '**');
        this.numInputs = signs.length;
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        const signs = String(this.parameters['Inputs'] || '**');
        let prod = 1;
        for (let i = 0; i < this.numInputs; i++) {
            const val = u[i] || 0;
            if (signs[i] === '*') {
                prod *= val;
            } else if (signs[i] === '/') {
                prod /= val;
            }
        }
        return [prod];
    }
}

export class MathFunction extends Block {
    constructor(name: string) {
        super(name);
        this.numInputs = 1;
        this.numOutputs = 1;
        this.hasDirectFeedthrough = true;
        this.parameters['Operator'] = 'exp';
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        const op = String(this.parameters['Operator']).toLowerCase();
        const val = u[0] || 0;
        switch (op) {
            case 'exp': return [Math.exp(val)];
            case 'log': return [Math.log(val)];
            case 'log10': return [Math.log10(val)];
            case 'magnitude': return [Math.abs(val)];
            case 'square': return [val * val];
            case 'sqrt': return [Math.sqrt(val)];
            case 'pow': return [Math.pow(val, u[1] || 1)]; // Expects 2 inputs if pow
            default: return [val];
        }
    }
    
    public setup() {
        const op = String(this.parameters['Operator']).toLowerCase();
        if (op === 'pow') {
            this.numInputs = 2;
        }
    }
}

export class TrigonometricFunction extends Block {
    constructor(name: string) {
        super(name);
        this.numInputs = 1;
        this.numOutputs = 1;
        this.hasDirectFeedthrough = true;
        this.parameters['Operator'] = 'sin';
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        const op = String(this.parameters['Operator']).toLowerCase();
        const val = u[0] || 0;
        switch (op) {
            case 'sin': return [Math.sin(val)];
            case 'cos': return [Math.cos(val)];
            case 'tan': return [Math.tan(val)];
            case 'asin': return [Math.asin(val)];
            case 'acos': return [Math.acos(val)];
            case 'atan': return [Math.atan(val)];
            case 'atan2': return [Math.atan2(val, u[1] || 0)];
            default: return [Math.sin(val)];
        }
    }

    public setup() {
        const op = String(this.parameters['Operator']).toLowerCase();
        if (op === 'atan2') {
            this.numInputs = 2;
        }
    }
}

export class RelationalOperator extends Block {
    constructor(name: string) {
        super(name);
        this.numInputs = 2;
        this.numOutputs = 1;
        this.hasDirectFeedthrough = true;
        this.parameters['Operator'] = '<=';
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        const op = String(this.parameters['Operator']);
        const v1 = u[0] || 0;
        const v2 = u[1] || 0;
        let res = false;
        switch (op) {
            case '==': res = v1 === v2; break;
            case '~=': res = v1 !== v2; break;
            case '<': res = v1 < v2; break;
            case '<=': res = v1 <= v2; break;
            case '>': res = v1 > v2; break;
            case '>=': res = v1 >= v2; break;
        }
        return [res ? 1 : 0];
    }
}

export class LogicalOperator extends Block {
    constructor(name: string) {
        super(name);
        this.numInputs = 2;
        this.numOutputs = 1;
        this.hasDirectFeedthrough = true;
        this.parameters['Operator'] = 'AND';
    }

    public setup() {
        const op = String(this.parameters['Operator']).toUpperCase();
        if (op === 'NOT') {
            this.numInputs = 1;
        } else {
            this.numInputs = Number(this.parameters['Inputs'] || 2);
        }
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        const op = String(this.parameters['Operator']).toUpperCase();
        const bools = u.map(v => v !== 0);
        let res = bools[0];
        
        if (op === 'NOT') {
            return [!res ? 1 : 0];
        }

        for (let i = 1; i < this.numInputs; i++) {
            switch (op) {
                case 'AND': res = res && bools[i]; break;
                case 'OR': res = res || bools[i]; break;
                case 'NAND': res = !(res && bools[i]); break;
                case 'NOR': res = !(res || bools[i]); break;
                case 'XOR': res = res !== bools[i]; break;
            }
        }
        return [res ? 1 : 0];
    }
}

export class Switch extends Block {
    constructor(name: string) {
        super(name);
        this.numInputs = 3;
        this.numOutputs = 1;
        this.hasDirectFeedthrough = true;
        this.parameters['Criteria'] = 'u2 >= Threshold';
        this.parameters['Threshold'] = 0;
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        const criteria = String(this.parameters['Criteria']);
        const threshold = Number(this.parameters['Threshold']) || 0;
        
        const u1 = u[0] || 0;
        const u2 = u[1] || 0;
        const u3 = u[2] || 0;

        let condition = false;
        if (criteria === 'u2 >= Threshold') condition = u2 >= threshold;
        else if (criteria === 'u2 > Threshold') condition = u2 > threshold;
        else if (criteria === 'u2 ~= 0') condition = u2 !== 0;

        return [condition ? u1 : u3];
    }
}

export class Step extends Block {
    constructor(name: string) {
        super(name);
        this.numInputs = 0;
        this.numOutputs = 1;
        this.hasDirectFeedthrough = false;
        this.parameters['Time'] = 1;
        this.parameters['Before'] = 0;
        this.parameters['After'] = 1;
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        const stepTime = Number(this.parameters['Time']) || 1;
        const initialValue = Number(this.parameters['Before']) || 0;
        const finalValue = Number(this.parameters['After']) || 1;
        return [t >= stepTime ? finalValue : initialValue];
    }
}

export class Clock extends Block {
    constructor(name: string) {
        super(name);
        this.numInputs = 0;
        this.numOutputs = 1;
        this.hasDirectFeedthrough = false;
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        return [t];
    }
}

export class ToWorkspace extends Block {
    constructor(name: string) {
        super(name);
        this.numInputs = 1;
        this.numOutputs = 0;
        this.hasDirectFeedthrough = true;
        this.parameters['VariableName'] = 'simout';
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        // In a full implementation, this pushes values directly to the interp.ts scope.
        // For our headless test, we just do nothing as the Solver handles output logging.
        return [];
    }
}

export class StopSimulation extends Block {
    // This requires a minor callback hook to the solver, but we'll mock it for now
    constructor(name: string) {
        super(name);
        this.numInputs = 1;
        this.numOutputs = 0;
        this.hasDirectFeedthrough = true;
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        if (u[0] && u[0] !== 0) {
            // Signal solver to stop
            (this as any)._stopRequested = true;
        }
        return [];
    }
}

// ---- Phase 3: Continuous & Discrete ----

export class StateSpace extends Block {
    private A: number[][] = [[0]];
    private B: number[][] = [[0]];
    private C: number[][] = [[0]];
    private D: number[][] = [[0]];

    constructor(name: string) {
        super(name);
        this.numInputs = 1;
        this.numOutputs = 1;
        this.numContinuousStates = 1;
        this.hasDirectFeedthrough = false; // D is zero by default
        this.parameters['A'] = [[0]];
        this.parameters['B'] = [[0]];
        this.parameters['C'] = [[0]];
        this.parameters['D'] = [[0]];
        this.parameters['InitialCondition'] = [0];
    }

    public setup() {
        this.A = this.parameters['A'];
        this.B = this.parameters['B'];
        this.C = this.parameters['C'];
        this.D = this.parameters['D'];
        this.numContinuousStates = this.A.length;
        this.numInputs = this.B[0].length;
        this.numOutputs = this.C.length;
        
        // If D is strictly zero, no direct feedthrough
        let hasD = false;
        for (let r = 0; r < this.D.length; r++) {
            for (let c = 0; c < this.D[0].length; c++) {
                if (this.D[r][c] !== 0) hasD = true;
            }
        }
        this.hasDirectFeedthrough = hasD;
    }

    public getInitialContinuousStates(): number[] {
        const ic = this.parameters['InitialCondition'];
        if (Array.isArray(ic)) return [...ic];
        return new Array(this.numContinuousStates).fill(Number(ic) || 0);
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        const y = new Array(this.numOutputs).fill(0);
        for (let i = 0; i < this.numOutputs; i++) {
            let sum = 0;
            for (let j = 0; j < this.numContinuousStates; j++) sum += this.C[i][j] * x[j];
            for (let j = 0; j < this.numInputs; j++) sum += this.D[i][j] * u[j];
            y[i] = sum;
        }
        return y;
    }

    public computeDerivatives(t: number, x: number[], u: number[]): number[] {
        const dx = new Array(this.numContinuousStates).fill(0);
        for (let i = 0; i < this.numContinuousStates; i++) {
            let sum = 0;
            for (let j = 0; j < this.numContinuousStates; j++) sum += this.A[i][j] * x[j];
            for (let j = 0; j < this.numInputs; j++) sum += this.B[i][j] * u[j];
            dx[i] = sum;
        }
        return dx;
    }
}

export class Derivative extends Block {
    private lastU: number = 0;
    private lastT: number = -1;

    constructor(name: string) {
        super(name);
        this.numInputs = 1;
        this.numOutputs = 1;
        this.hasDirectFeedthrough = true;
    }

    public setup() {
        this.lastT = -1;
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        if (this.lastT < 0 || t === this.lastT) {
            this.lastU = u[0] || 0;
            this.lastT = t;
            return [0];
        }
        const dt = t - this.lastT;
        const du = (u[0] || 0) - this.lastU;
        
        // Only update on step, assuming outputs are called once per step per solver design
        this.lastU = u[0] || 0;
        this.lastT = t;
        
        return [du / dt];
    }
}

export class UnitDelay extends Block {
    constructor(name: string) {
        super(name);
        this.numInputs = 1;
        this.numOutputs = 1;
        this.numDiscreteStates = 1;
        this.hasDirectFeedthrough = false;
        this.parameters['InitialCondition'] = 0;
    }

    public getInitialDiscreteStates(): number[] {
        return [Number(this.parameters['InitialCondition']) || 0];
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        return [xd[0]];
    }

    public updateDiscrete(t: number, xd: number[], u: number[]): number[] {
        return [u[0]];
    }
}

export class DiscreteIntegrator extends Block {
    private lastT: number = -1;

    constructor(name: string) {
        super(name);
        this.numInputs = 1;
        this.numOutputs = 1;
        this.numDiscreteStates = 1;
        this.hasDirectFeedthrough = false;
        this.parameters['InitialCondition'] = 0;
    }

    public getInitialDiscreteStates(): number[] {
        return [Number(this.parameters['InitialCondition']) || 0];
    }

    public setup() {
        this.lastT = -1;
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        return [xd[0]];
    }

    public updateDiscrete(t: number, xd: number[], u: number[]): number[] {
        if (this.lastT < 0) {
            this.lastT = t;
            return [xd[0]];
        }
        const dt = t - this.lastT;
        this.lastT = t;
        return [xd[0] + u[0] * dt]; // Forward Euler
    }
}

export class ZeroOrderHold extends Block {
    private nextSampleTime: number = 0;

    constructor(name: string) {
        super(name);
        this.numInputs = 1;
        this.numOutputs = 1;
        this.numDiscreteStates = 1;
        this.hasDirectFeedthrough = false;
        this.parameters['SampleTime'] = 1;
    }

    public setup() {
        this.nextSampleTime = 0;
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        return [xd[0]];
    }

    public updateDiscrete(t: number, xd: number[], u: number[]): number[] {
        const Ts = Number(this.parameters['SampleTime']) || 1;
        if (t >= this.nextSampleTime - 1e-9) {
            this.nextSampleTime += Ts;
            return [u[0]];
        }
        return [xd[0]];
    }
}

export class Mux extends Block {
    constructor(name: string) {
        super(name);
        this.numInputs = 2; // Default
        this.numOutputs = 1;
        this.hasDirectFeedthrough = true;
        this.parameters['Inputs'] = 2;
    }

    public setup() {
        this.numInputs = Number(this.parameters['Inputs']) || 2;
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        // Mux just concatenates the scalar inputs into an array, 
        // but since our signal lines are arrays of numbers, it flattens them into one big array.
        // Wait, our block computeOutputs returns number[].
        // So Mux outputs a single array combining all u.
        return [...u];
    }
}

export class Demux extends Block {
    constructor(name: string) {
        super(name);
        this.numInputs = 1;
        this.numOutputs = 2; // Default
        this.hasDirectFeedthrough = true;
        this.parameters['Outputs'] = 2;
    }

    public setup() {
        this.numOutputs = Number(this.parameters['Outputs']) || 2;
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        // Demux splits the input array into individual scalar outputs.
        const y = new Array(this.numOutputs).fill(0);
        for(let i=0; i<this.numOutputs; i++) {
            if (i < u.length) y[i] = u[i];
        }
        return y;
    }
}

// ---- Phase 5: Non-linear & Sources ----

export class Saturation extends Block {
    constructor(name: string) {
        super(name);
        this.numInputs = 1;
        this.numOutputs = 1;
        this.hasDirectFeedthrough = true;
        this.parameters['UpperLimit'] = 1;
        this.parameters['LowerLimit'] = -1;
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        const up = Number(this.parameters['UpperLimit']);
        const low = Number(this.parameters['LowerLimit']);
        let val = u[0] || 0;
        if (val > up) val = up;
        if (val < low) val = low;
        return [val];
    }
}

export class DeadZone extends Block {
    constructor(name: string) {
        super(name);
        this.numInputs = 1;
        this.numOutputs = 1;
        this.hasDirectFeedthrough = true;
        this.parameters['UpperValue'] = 1;
        this.parameters['LowerValue'] = -1;
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        const up = Number(this.parameters['UpperValue']);
        const low = Number(this.parameters['LowerValue']);
        let val = u[0] || 0;
        if (val > up) return [val - up];
        if (val < low) return [val - low];
        return [0];
    }
}

export class RateLimiter extends Block {
    private lastT: number = -1;
    private lastOut: number = 0;

    constructor(name: string) {
        super(name);
        this.numInputs = 1;
        this.numOutputs = 1;
        this.hasDirectFeedthrough = true;
        this.parameters['RisingSlewLimit'] = 1;
        this.parameters['FallingSlewLimit'] = -1;
    }

    public setup() {
        this.lastT = -1;
        this.lastOut = 0;
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        const val = u[0] || 0;
        if (this.lastT < 0 || t === this.lastT) {
            this.lastT = t;
            this.lastOut = val;
            return [val];
        }
        
        const dt = t - this.lastT;
        const riseLimit = Number(this.parameters['RisingSlewLimit']);
        const fallLimit = Number(this.parameters['FallingSlewLimit']);
        
        let rate = (val - this.lastOut) / dt;
        if (rate > riseLimit) rate = riseLimit;
        if (rate < fallLimit) rate = fallLimit;
        
        const out = this.lastOut + rate * dt;
        this.lastOut = out;
        this.lastT = t;
        
        return [out];
    }
}

export class LookupTable1D extends Block {
    constructor(name: string) {
        super(name);
        this.numInputs = 1;
        this.numOutputs = 1;
        this.hasDirectFeedthrough = true;
        this.parameters['Breakpoints'] = [0, 1];
        this.parameters['TableData'] = [0, 1];
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        const bp: number[] = this.parameters['Breakpoints'];
        const tb: number[] = this.parameters['TableData'];
        const val = u[0] || 0;

        if (!Array.isArray(bp) || !Array.isArray(tb) || bp.length !== tb.length || bp.length < 2) return [0]; // Invalid

        if (val <= bp[0]) return [tb[0]];
        if (val >= bp[bp.length - 1]) return [tb[tb.length - 1]];

        // Linear interpolation
        for (let i = 0; i < bp.length - 1; i++) {
            if (val >= bp[i] && val <= bp[i+1]) {
                const fraction = (val - bp[i]) / (bp[i+1] - bp[i]);
                return [tb[i] + fraction * (tb[i+1] - tb[i])];
            }
        }
        return [0];
    }
}

export class PulseGenerator extends Block {
    constructor(name: string) {
        super(name);
        this.numInputs = 0;
        this.numOutputs = 1;
        this.hasDirectFeedthrough = false;
        this.parameters['Amplitude'] = 1;
        this.parameters['Period'] = 2; // seconds
        this.parameters['PulseWidth'] = 50; // % of period
        this.parameters['PhaseDelay'] = 0; // seconds
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        const A = Number(this.parameters['Amplitude']);
        const P = Number(this.parameters['Period']);
        const W = Number(this.parameters['PulseWidth']) / 100.0;
        const D = Number(this.parameters['PhaseDelay']);

        const modT = (t - D) % P;
        if (modT < 0) {
            // Before phase delay starts
            return [0];
        }

        if (modT < P * W) return [A];
        return [0];
    }
}

export class Ramp extends Block {
    constructor(name: string) {
        super(name);
        this.numInputs = 0;
        this.numOutputs = 1;
        this.hasDirectFeedthrough = false;
        this.parameters['Slope'] = 1;
        this.parameters['StartTime'] = 0;
        this.parameters['InitialOutput'] = 0;
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        const slope = Number(this.parameters['Slope']);
        const start = Number(this.parameters['StartTime']);
        const init = Number(this.parameters['InitialOutput']);

        if (t < start) return [init];
        return [init + slope * (t - start)];
    }
}

// ---- Phase 6: Controls & Advanced Math ----

export class Abs extends Block {
    constructor(name: string) {
        super(name);
        this.numInputs = 1;
        this.numOutputs = 1;
        this.hasDirectFeedthrough = true;
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        return [Math.abs(u[0] || 0)];
    }
}

export class Sign extends Block {
    constructor(name: string) {
        super(name);
        this.numInputs = 1;
        this.numOutputs = 1;
        this.hasDirectFeedthrough = true;
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        const val = u[0] || 0;
        if (val > 0) return [1];
        if (val < 0) return [-1];
        return [0];
    }
}

export class MinMax extends Block {
    constructor(name: string) {
        super(name);
        this.numInputs = 2; // configurable
        this.numOutputs = 1;
        this.hasDirectFeedthrough = true;
        this.parameters['Function'] = 'min';
        this.parameters['Inputs'] = 2;
    }

    public setup() {
        this.numInputs = Number(this.parameters['Inputs']) || 2;
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        const func = String(this.parameters['Function']).toLowerCase();
        let res = u[0] || 0;
        for (let i = 1; i < this.numInputs; i++) {
            const val = u[i] || 0;
            if (func === 'min') {
                if (val < res) res = val;
            } else if (func === 'max') {
                if (val > res) res = val;
            }
        }
        return [res];
    }
}

export class Scope extends Block {
    public data: { t: number, val: number[] }[] = [];

    constructor(name: string) {
        super(name);
        this.numInputs = 1; // Can be configured
        this.numOutputs = 0;
        this.hasDirectFeedthrough = true;
        this.parameters['Inputs'] = 1;
    }

    public setup() {
        this.numInputs = Number(this.parameters['Inputs']) || 1;
        this.data = [];
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        this.data.push({ t, val: [...u] });
        return [];
    }
}

export class PIDController extends Block {
    private lastU: number = 0;
    private lastT: number = -1;

    constructor(name: string) {
        super(name);
        this.numInputs = 1;
        this.numOutputs = 1;
        this.numContinuousStates = 1; // Integrator state
        this.hasDirectFeedthrough = true;
        this.parameters['P'] = 1;
        this.parameters['I'] = 1;
        this.parameters['D'] = 0;
    }

    public setup() {
        this.lastT = -1;
        this.lastU = 0;
    }

    public getInitialContinuousStates(): number[] {
        return [0];
    }

    public computeDerivatives(t: number, x: number[], u: number[]): number[] {
        const I = Number(this.parameters['I']) || 0;
        return [I * (u[0] || 0)];
    }

    public computeOutputs(t: number, x: number[], xd: number[], u: number[]): number[] {
        const P = Number(this.parameters['P']) || 0;
        const D = Number(this.parameters['D']) || 0;
        const val = u[0] || 0;

        let deriv = 0;
        if (this.lastT >= 0 && t > this.lastT) {
            deriv = (val - this.lastU) / (t - this.lastT);
        }

        // Only update memory on actual timestep progression (approximation for explicit solver)
        if (this.lastT < 0 || t > this.lastT) {
            this.lastU = val;
            this.lastT = t;
        }

        const out = P * val + x[0] + D * deriv;
        return [out];
    }
}

export class TransferFcn extends StateSpace {
    constructor(name: string) {
        super(name);
        this.parameters['Numerator'] = [1];
        this.parameters['Denominator'] = [1, 1];
    }

    public setup() {
        let num: number[] = this.parameters['Numerator'];
        let den: number[] = this.parameters['Denominator'];

        if (!Array.isArray(num)) num = [Number(num) || 0];
        if (!Array.isArray(den)) den = [Number(den) || 1];

        // Normalize denominator so a0 = 1
        const a0 = den[0] || 1;
        den = den.map(v => v / a0);
        num = num.map(v => v / a0);

        const n = den.length - 1; // Order of denominator

        // Pad numerator to match length of den
        const b = new Array(n + 1).fill(0);
        for (let i = 0; i < num.length; i++) {
            b[n - num.length + 1 + i] = num[i];
        }

        if (n === 0) {
            // 0th order TF: y = b0 * u
            this.parameters['A'] = [[0]];
            this.parameters['B'] = [[0]];
            this.parameters['C'] = [[0]];
            this.parameters['D'] = [[b[0]]];
        } else {
            // Controllable Canonical Form
            const A = Array.from({length: n}, () => new Array(n).fill(0));
            const B = Array.from({length: n}, () => [0]);
            const C = [new Array(n).fill(0)];
            const D = [[b[0]]];

            // Top row of A: -a1, -a2, ...
            for (let i = 0; i < n; i++) {
                A[0][i] = -den[i + 1];
            }
            // Subdiagonal of 1s
            for (let i = 1; i < n; i++) {
                A[i][i - 1] = 1;
            }

            B[0][0] = 1;

            for (let i = 0; i < n; i++) {
                C[0][i] = b[i + 1] - b[0] * den[i + 1];
            }

            this.parameters['A'] = A;
            this.parameters['B'] = B;
            this.parameters['C'] = C;
            this.parameters['D'] = D;
            this.parameters['InitialCondition'] = new Array(n).fill(0);
        }

        super.setup();
    }
}
