import { Model } from './model';
import { Solver, SimResult, SimOptions } from './solver';
import { Block, Integrator, Gain, Sum, Constant, SineWave, Outport, Inport, Product, MathFunction, TrigonometricFunction, RelationalOperator, LogicalOperator, Switch, Step, Clock, ToWorkspace, StopSimulation, StateSpace, Derivative, UnitDelay, DiscreteIntegrator, ZeroOrderHold, Mux, Demux, Saturation, DeadZone, RateLimiter, LookupTable1D, PulseGenerator, Ramp, Abs, Sign, MinMax, Scope, PIDController, TransferFcn } from './blocks';

// Global store of models in memory
const systems = new Map<string, Model>();

export function new_system(name: string): void {
    if (systems.has(name)) {
        throw new Error(`A system named '${name}' already exists.`);
    }
    systems.set(name, new Model(name));
}

// Simulink usually takes path 'model/blockname'
function parsePath(path: string): { sysName: string, blockName: string } {
    const parts = path.split('/');
    if (parts.length < 2) throw new Error(`Invalid block path: ${path}`);
    const sysName = parts[0];
    const blockName = parts.slice(1).join('/');
    return { sysName, blockName };
}

export function add_block(type: string, destPath: string): void {
    const { sysName, blockName } = parsePath(destPath);
    const sys = systems.get(sysName);
    if (!sys) throw new Error(`System '${sysName}' not found.`);

    let block: Block;
    // For now we map some hardcoded strings to classes. In a full system this is a registry.
    const lowerType = type.toLowerCase();
    if (lowerType.includes('discreteintegrator')) block = new DiscreteIntegrator(blockName);
    else if (lowerType.includes('integrator')) block = new Integrator(blockName);
    else if (lowerType.includes('gain')) block = new Gain(blockName);
    else if (lowerType.includes('sum')) block = new Sum(blockName);
    else if (lowerType.includes('constant')) block = new Constant(blockName);
    else if (lowerType.includes('sinewave') || lowerType === 'sin') block = new SineWave(blockName);
    else if (lowerType.includes('outport')) block = new Outport(blockName);
    else if (lowerType.includes('inport')) block = new Inport(blockName);
    else if (lowerType.includes('product')) block = new Product(blockName);
    else if (lowerType.includes('mathfunction')) block = new MathFunction(blockName);
    else if (lowerType.includes('trigonometricfunction')) block = new TrigonometricFunction(blockName);
    else if (lowerType.includes('relationaloperator')) block = new RelationalOperator(blockName);
    else if (lowerType.includes('logicaloperator')) block = new LogicalOperator(blockName);
    else if (lowerType.includes('switch')) block = new Switch(blockName);
    else if (lowerType.includes('step')) block = new Step(blockName);
    else if (lowerType.includes('clock')) block = new Clock(blockName);
    else if (lowerType.includes('toworkspace')) block = new ToWorkspace(blockName);
    else if (lowerType.includes('stopsimulation')) block = new StopSimulation(blockName);
    else if (lowerType.includes('statespace')) block = new StateSpace(blockName);
    else if (lowerType.includes('derivative')) block = new Derivative(blockName);
    else if (lowerType.includes('unitdelay')) block = new UnitDelay(blockName);
    else if (lowerType.includes('zeroorderhold')) block = new ZeroOrderHold(blockName);
    else if (lowerType.includes('mux')) block = new Mux(blockName);
    else if (lowerType.includes('demux')) block = new Demux(blockName);
    else if (lowerType.includes('saturation')) block = new Saturation(blockName);
    else if (lowerType.includes('deadzone')) block = new DeadZone(blockName);
    else if (lowerType.includes('ratelimiter')) block = new RateLimiter(blockName);
    else if (lowerType.includes('lookuptable1d')) block = new LookupTable1D(blockName);
    else if (lowerType.includes('pulsegenerator')) block = new PulseGenerator(blockName);
    else if (lowerType.includes('ramp')) block = new Ramp(blockName);
    else if (lowerType.includes('abs')) block = new Abs(blockName);
    else if (lowerType.includes('sign')) block = new Sign(blockName);
    else if (lowerType.includes('minmax')) block = new MinMax(blockName);
    else if (lowerType.includes('scope')) block = new Scope(blockName);
    else if (lowerType.includes('pidcontroller')) block = new PIDController(blockName);
    else if (lowerType.includes('transferfcn')) block = new TransferFcn(blockName);
    else throw new Error(`Unknown block type: ${type}`);

    sys.addBlock(block);
}

// add_line('model', 'srcBlock/1', 'destBlock/1')
export function add_line(sysName: string, srcPortStr: string, destPortStr: string): void {
    const sys = systems.get(sysName);
    if (!sys) throw new Error(`System '${sysName}' not found.`);

    const srcParts = srcPortStr.split('/');
    const destParts = destPortStr.split('/');
    
    const srcBlock = srcParts.slice(0, -1).join('/');
    const srcPort = parseInt(srcParts[srcParts.length - 1], 10) - 1; // 1-indexed in MATLAB to 0-indexed internally

    const destBlock = destParts.slice(0, -1).join('/');
    const destPort = parseInt(destParts[destParts.length - 1], 10) - 1;

    sys.addLine(srcBlock, srcPort, destBlock, destPort);
}

export function set_param(path: string, param: string, value: any): void {
    const { sysName, blockName } = parsePath(path);
    const sys = systems.get(sysName);
    if (!sys) throw new Error(`System '${sysName}' not found.`);

    const block = sys.getBlock(blockName);
    if (!block) throw new Error(`Block '${blockName}' not found in system '${sysName}'.`);

    block.setParam(param, value);
}

export function get_param(path: string, param: string): any {
    const { sysName, blockName } = parsePath(path);
    const sys = systems.get(sysName);
    if (!sys) throw new Error(`System '${sysName}' not found.`);

    const block = sys.getBlock(blockName);
    if (!block) throw new Error(`Block '${blockName}' not found in system '${sysName}'.`);

    return block.getParam(param);
}

export function sim(sysName: string, options: SimOptions = {}): SimResult {
    const sys = systems.get(sysName);
    if (!sys) throw new Error(`System '${sysName}' not found.`);

    const solver = new Solver(sys, options);
    return solver.simulate();
}
