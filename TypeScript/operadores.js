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
    usuario.deuda = 0;
    return usuario;
});
console.log(nuevoArregloDeUsuarios);
