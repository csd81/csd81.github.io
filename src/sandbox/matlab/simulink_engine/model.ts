import { Block } from './blocks';

export interface Line {
    srcBlock: string;
    srcPort: number; // 0-indexed
    destBlock: string;
    destPort: number; // 0-indexed
}

export class Model {
    public name: string;
    public blocks: Map<string, Block> = new Map();
    public lines: Line[] = [];

    constructor(name: string) {
        this.name = name;
    }

    public addBlock(block: Block): void {
        this.blocks.set(block.name, block);
    }

    public addLine(srcBlock: string, srcPort: number, destBlock: string, destPort: number): void {
        this.lines.push({ srcBlock, srcPort, destBlock, destPort });
    }

    public getBlock(name: string): Block | undefined {
        return this.blocks.get(name);
    }

    /**
     * Initializes all blocks.
     */
    public setup(): void {
        for (const block of this.blocks.values()) {
            block.setup();
        }
    }

    /**
     * Topologically sorts blocks based on direct feedthrough dependencies.
     * Blocks without direct feedthrough break algebraic loops.
     */
    public getExecutionOrder(): Block[] {
        const order: Block[] = [];
        const visited = new Set<string>();
        const tempMark = new Set<string>();

        // Build dependency graph
        // A depends on B if A has direct feedthrough and there is a line B -> A.
        const dependencies = new Map<string, string[]>();
        for (const block of this.blocks.values()) {
            dependencies.set(block.name, []);
        }

        for (const line of this.lines) {
            const destBlock = this.blocks.get(line.destBlock);
            if (destBlock && destBlock.hasDirectFeedthrough) {
                dependencies.get(line.destBlock)?.push(line.srcBlock);
            }
        }

        const visit = (nodeName: string) => {
            if (visited.has(nodeName)) return;
            if (tempMark.has(nodeName)) {
                throw new Error(`Algebraic loop detected involving block: ${nodeName}`);
            }

            tempMark.add(nodeName);
            const deps = dependencies.get(nodeName) || [];
            for (const dep of deps) {
                visit(dep);
            }
            tempMark.delete(nodeName);
            visited.add(nodeName);
            const b = this.blocks.get(nodeName);
            if (b) order.push(b);
        };

        for (const block of this.blocks.values()) {
            if (!visited.has(block.name)) {
                visit(block.name);
            }
        }

        return order;
    }
}
