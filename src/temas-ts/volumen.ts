import { Area} from "./areas";


class Area1{
    protected lado:number;
    protected base:number;
    protected altura:number;
    protected radio:number;
    protected ar:number;


    constructor(lado: number, base: number, altura: number, radio: number, ar:number){
        this.lado = lado;
        this.base = base;
        this.altura = altura;
        this.radio = radio;
        this.ar = ar;
    }
    
}
class Volumen extends Area{


    private volu:number;
    constructor(lado: number, base: number, altura: number, radio: number, ar: number, volu:number){
        super(lado,base,altura,radio,ar);
        this.volu=volu;

    
    volumenPrisma(){
        
        if(this.sueldo > 5000)
            console.log(`${this.nombre} debe pagar impuestos`);
        else
        console.log(`${this.nombre} no debe pagar impuestos`)
    }
    imprimir(): void{
        console.log(`Sueldo ${this.sueldo}`)
    }
}
const persona3= new Persona3('Juan', 44);
persona3.imprimir();

const empleado1 = new Empleado('Ana', 22, 7000);
empleado1.imprimir();
empleado1.pagaImpuesto();