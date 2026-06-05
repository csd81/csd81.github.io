import { Model } from './model';
import { Block } from './blocks';

export interface SimOptions {
    t0?: number;
    tf?: number;
    stepSize?: number;
}

export interface SimResult {
    tout: number[];
    yout: number[][]; // N_steps x N_outports (if Outports are collected)
}

export class Solver {
    private model: Model;
    private options: SimOptions;

    constructor(model: Model, options: SimOptions = {}) {
        this.model = model;
        this.options = {
            t0: options.t0 !== undefined ? options.t0 : 0.0,
            tf: options.tf !== undefined ? options.tf : 10.0,
            stepSize: options.stepSize !== undefined ? options.stepSize : 0.1,
        };
    }

    public simulate(): SimResult {
        this.model.setup();
        const execOrder = this.model.getExecutionOrder();

        let t = this.options.t0!;
        const tf = this.options.tf!;
        const dt = this.options.stepSize!;

        const tout: number[] = [];
        const yout: number[][] = []; // For simplicity, we can log blocks named "Outport" or just block outputs
        const outportBlocks = Array.from(this.model.blocks.values()).filter(b => b.constructor.name === 'Outport' || b.name.startsWith('Out'));

        // Initialize states
        const contStates = new Map<string, number[]>();
        const discStates = new Map<string, number[]>();
        
        for (const block of this.model.blocks.values()) {
            contStates.set(block.name, block.getInitialContinuousStates());
            discStates.set(block.name, block.getInitialDiscreteStates());
        }

        // Output buffer
        const blockOutputs = new Map<string, number[]>();

        while (t <= tf + 1e-9) {
            tout.push(t);

            // Step 1: Compute outputs in execution order
            for (const block of execOrder) {
                // Gather inputs
                const u = new Array(block.numInputs).fill(0);
                
                for (const line of this.model.lines) {
                    if (line.destBlock === block.name) {
                        const srcOuts = blockOutputs.get(line.srcBlock);
                        if (srcOuts && line.srcPort < srcOuts.length) {
                            u[line.destPort] = srcOuts[line.srcPort];
                        }
                    }
                }

                const x = contStates.get(block.name)!;
                const xd = discStates.get(block.name)!;
                const y = block.computeOutputs(t, x, xd, u);
                blockOutputs.set(block.name, y);
            }

            // Log outputs if Outports exist
            // If no Outports, we could log states, but let's log the first output of Outport blocks
            const currentY: number[] = [];
            for (const outBlock of outportBlocks) {
                 // The Outport itself doesn't output anything, but its input is what we want to log
                 // Let's find what is connected to its input port 0
                 for (const line of this.model.lines) {
                     if (line.destBlock === outBlock.name && line.destPort === 0) {
                         const srcOuts = blockOutputs.get(line.srcBlock);
                         if (srcOuts && line.srcPort < srcOuts.length) {
                             currentY.push(srcOuts[line.srcPort]);
                         }
                     }
                 }
            }
            yout.push(currentY);

            // Step 2: Compute derivatives and discrete updates
            const derivatives = new Map<string, number[]>();
            const nextDiscStates = new Map<string, number[]>();

            for (const block of this.model.blocks.values()) {
                const u = new Array(block.numInputs).fill(0);
                for (const line of this.model.lines) {
                    if (line.destBlock === block.name) {
                        const srcOuts = blockOutputs.get(line.srcBlock);
                        if (srcOuts && line.srcPort < srcOuts.length) {
                            u[line.destPort] = srcOuts[line.srcPort];
                        }
                    }
                }

                const x = contStates.get(block.name)!;
                const xd = discStates.get(block.name)!;

                derivatives.set(block.name, block.computeDerivatives(t, x, u));
                nextDiscStates.set(block.name, block.updateDiscrete(t, xd, u));
            }

            // Step 3: Advance states (Euler Integration)
            for (const block of this.model.blocks.values()) {
                const x = contStates.get(block.name)!;
                const dx = derivatives.get(block.name)!;
                for (let i = 0; i < x.length; i++) {
                    x[i] = x[i] + dt * dx[i];
                }
                
                const xd = nextDiscStates.get(block.name)!;
                if (xd.length > 0) {
                    discStates.set(block.name, xd);
                }
            }

            t += dt;
        }

        return { tout, yout };
    }
}
