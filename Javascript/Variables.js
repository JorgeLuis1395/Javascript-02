console.log('hola Mundo');
var nombre = 'Jorge';
var mutar;
mutar = nombre;
var edad = 22;
mutar = edad;
var peso = 170.4;
var casado = false;
var fechaNacimiento = new Date();
var noExito = null;
var noestoyDefinido = undefined;
var hola = -1;
var x = 0;
var y = 1
// Variable no Existo
if (hola) {
    console.log('Verdadero');
} else {
    console.log('Falso');
}
// Variable no estoy definido
if (y) {
    console.log('Verdadero');
} else {
    console.log('Falso');
}


// Json
// objetos
var usuario = {
    nombre: 'Jorge',
    apellido: 'Carrillo',
    cedula: '12132',
    edad: '22',
    //imprimir:(),
};
console.log(usuario.nombre);
console.log(usuario);
delete usuario.edad;
console.log(usuario);
usuario.fechaNacimeinto =new Date();
console.log(usuario);
usuario.mascotas={};
usuario.mascotas.nombre = 'Jorge';
console.log(usuario);

var arreglo = [1,'Jorge',true,undefined,null,new Date(),{nombre:'Jorge'},[12,12]];
console.log("Arreglo");
console.log(arreglo);

function sumarNumero(numeroUno,numeroDos) {
    return numeroUno + numeroDos;

}
console.log(sumarNumero(1,3));
console.log(sumarNumero(1,2.444));

var potenciaDeDosDeUnNumero = function (numero) { //no es necesario poner el nombre de la funcion
return numero*numero;
};
var potenciaDeDosDeUnNumero = function (numero) {
return numero*numero;
};

console.log(potenciaDeDosDeUnNumero(3,23,3,4,5,2));
console.log(potenciaDeDosDeUnNumero(2));




