import { Areas } from './areas';

export class Vols extends Areas {
    private p: number;
    private h: number; 

    constructor(base: number, alt: number, rad: number, lad: number, p: number, h: number) {
        super(base, alt, rad, lad);
        this.p = p;
        this.h = h;
    }

    piram(): number {
        const baseArea = this.rect();
        return (1 / 3) * baseArea * this.h;
    }

    cilind(): number {
        const baseArea = this.circ();
        return baseArea * this.h;
    }

    prisma(): number {
        const baseArea = this.rect();
        return baseArea * this.p;
    }
}

const vols = new Vols(10, 18, 3, 6, 5, 9);
console.log(`Volumen del Prisma: ${vols.prisma()}`);
console.log(`Volumen de la Pirámide: ${vols.piram()}`);
console.log(`Volumen del Cilindro: ${vols.cilind()}`);