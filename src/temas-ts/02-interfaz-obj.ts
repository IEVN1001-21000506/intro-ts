interface  Alumno{
    nombre:string,
    apellido:string,
    edad:number,
    genero:string,
    calificacion?:number,
}

const alumno: Alumno={
    nombre:"mario",
    apellido:"Lopez",
    edad:23,
    genero:"M"
}

console.table(alumno)

let mascotas= ['perico', 'perro', 'gato'];

console.log(mascotas[1]);
mascotas[1]='nuevo perro';
console.log(mascotas[1]);
mascotas.push('hamster');
console.log(mascotas);

let tem:(string|number)[]=[];
tem.push(11);
tem.push('Mario');

console.log(tem)

