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

var usuario = {
    nombre: 'Jorge',
    apellido: 'Carrillo',
    cedula: '12132',
    edad: '22',
};
console.log(usuario.nombre);
console.log(usuario);
