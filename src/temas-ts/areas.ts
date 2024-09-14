export class Areas {
    private base: number;
    private alt: number;
    private rad: number;
    private lad: number;

    constructor(base: number, alt: number, rad: number, lad: number) {
        this.base = base;
        this.alt = alt;
        this.rad = rad;
        this.lad = lad;
    }

    rect(): number {
        return this.base * this.alt;
    }

    circ(): number {
        return Math.PI * Math.pow(this.rad, 2);
    }

    cuad(): number {
        return Math.pow(this.lad, 2);
    }
}

const areas = new Areas(5, 10, 8, 6);
console.log(`Área del Rectángulo: ${areas.rect()}`);
console.log(`Área del Círculo: ${areas.circ()}`);
console.log(`Área del Cuadrado: ${areas.cuad()}`);