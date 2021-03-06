// operadores
let arregloNumeros = [1,2,3,4,5];
let arregloUsuarios : UsuarioArreglo [] = [{nombre: 'Jorge', edad:22},{nombre: 'pedro', edad:20 },{nombre: 'fELIPE', edad: 68},{nombre: 'Wendi', edad:32},{nombre: 'Roberto', edad:18}, ];

// fat arrow funtions
let sumarDosNumeros = (numeroUno : number, numeroDos: number): number => {
    return numeroUno + numeroDos;
};
console.log(sumarDosNumeros(3,5));

let potenciaDeUnNumero = numero => {
    return numero*numero
};
let sumarDosNumerosv2 = (numeroUno : number, numeroDos: number): number => numeroUno + numeroDos;
let potenciaDeUnNumeroV2 = numero => numero= numero*numero;
let sumaTotal = 0
let resultadoForEach = arregloNumeros.forEach((valorActual, indiceActual, arreglo)=>{
    sumaTotal = sumaTotal + valorActual;
    console.log(valorActual);
    console.log(indiceActual);
    console.log(arreglo)

});
console.log(resultadoForEach);
console.log(sumaTotal);

let resultadoDeLaSumaConReduce = arregloNumeros.reduce((valorAcumuladoActual, valorActualArreglo) => {
    console.log('valor acumulado actual', valorAcumuladoActual);
    console.log('valor actual del arreglo',valorActualArreglo)
    return valorAcumuladoActual - valorActualArreglo;

}, 20);
console.log(resultadoDeLaSumaConReduce);
let resultadoEdadUsuario = arregloUsuarios.reduce((acumulado: number, usuario : UsuarioArreglo) =>{
    return acumulado + usuario.edad;
}, 0);
console.log(resultadoEdadUsuario);
console.log(resultadoDeLaSumaConReduce);
let nuevoArregloDeUsuarios = arregloUsuarios.map((usuario:UsuarioArreglo) =>{
    usuario.becado = false;
    return usuario;
}).map ((usuario:UsuarioArreglo) =>{
    usuario.deuda = calcularDeuda(usuario.edad) ;
    return usuario;
}).filter((usuario:UsuarioArreglo)=>{
    return usuario.deuda < 50  // true o false
}).f/*.some((usuario:UsuarioArreglo)=>{ //every and, some or
    return usuario.edad < 18 // true o false
})*/;
console.log(nuevoArregloDeUsuarios);
interface UsuarioArreglo{
    nombre : string;
    edad : number;
    deuda?: number
    becado?: boolean
}
function calcularDeuda(edadUsuario: number) {
    const totalEdad = arregloUsuarios.reduce((total, usuario:UsuarioArreglo) => total+usuario.edad,0);
    return totalEdad * (edadUsuario/100)
}

