// operadores
var arregloNumeros = [1, 2, 3, 4, 5];
var arregloUsuarios = [{ nombre: 'Jorge', edad: 22 }, { nombre: 'pedro', edad: 20 }, { nombre: 'fELIPE', edad: 68 }, { nombre: 'Wendi', edad: 32 }, { nombre: 'Roberto', edad: 18 },];
// fat arrow funtions
var sumarDosNumeros = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};
console.log(sumarDosNumeros(3, 5));
var potenciaDeUnNumero = function (numero) {
    return numero * numero;
};
var sumarDosNumerosv2 = function (numeroUno, numeroDos) { return numeroUno + numeroDos; };
var potenciaDeUnNumeroV2 = function (numero) { return numero = numero * numero; };
var sumaTotal = 0;
var resultadoForEach = arregloNumeros.forEach(function (valorActual, indiceActual, arreglo) {
    sumaTotal = sumaTotal + valorActual;
    console.log(valorActual);
    console.log(indiceActual);
    console.log(arreglo);
});
console.log(resultadoForEach);
console.log(sumaTotal);
var resultadoDeLaSumaConReduce = arregloNumeros.reduce(function (valorAcumuladoActual, valorActualArreglo) {
    console.log('valor acumulado actual', valorAcumuladoActual);
    console.log('valor actual del arreglo', valorActualArreglo);
    return valorAcumuladoActual - valorActualArreglo;
}, 20);
console.log(resultadoDeLaSumaConReduce);
var resultadoEdadUsuario = arregloUsuarios.reduce(function (acumulado, usuario) {
    return acumulado + usuario.edad;
}, 0);
console.log(resultadoEdadUsuario);
console.log(resultadoDeLaSumaConReduce);
var nuevoArregloDeUsuarios = arregloUsuarios.map(function (usuario) {
    usuario.becado = false;
    return usuario;
}).map(function (usuario) {
    usuario.deuda = calcularDeuda(usuario.edad);
    return usuario;
}).filter(function (usuario) {
    return usuario.deuda < 50; // true o false
}).f /*.some((usuario:UsuarioArreglo)=>{ //every and, some or
    return usuario.edad < 18 // true o false
})*/;
console.log(nuevoArregloDeUsuarios);
function calcularDeuda(edadUsuario) {
    var totalEdad = arregloUsuarios.reduce(function (total, usuario) { return total + usuario.edad; }, 0);
    return totalEdad * (edadUsuario / 100);
}
