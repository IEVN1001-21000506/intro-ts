export class Area{
    lado:number;
    base:number;
    altura:number;
    radio:number;
    ar:number;


    constructor(lado1: number, base1: number, altura1: number, radio1: number, ar1:number){
        this.lado = lado1;
        this.base = base1;
        this.altura = altura1;
        this.radio = radio1;
        this.ar = ar1;
    }

    areaCuadrado(){
        this.ar=(this.lado*this.lado)
    }
    areaRectangulo(){
        this.ar=(this.base*this.altura)
    }
    areaCirculo(){
        this.ar=(3.1416*Math.pow(this.radio, 2))
    }
}
