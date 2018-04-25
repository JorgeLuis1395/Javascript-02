console.log("Hola mundo");
var hola;
var adios = 'Adios';
hola = 'Adios';
hola = 1;
var nombre = 'Jorge';
var edad = 28.23;
var casado = false;
var fechaNacimiento = new Date();
var Usuario = /** @class */ (function () {
    function Usuario(nombre, casado, edad) {
        this.nombre = nombre;
        this.casado = casado;
        this.edad = edad;
    }
    return Usuario;
}());
var luis = {
    nombre: 'Jorge',
    casado: false,
    edad: 22
};
var jorge = new Usuario('Jorge', false, 22);
console.log(jorge);
console.log(luis);
var Usuario2 = /** @class */ (function () {
    function Usuario2(nombre, casado, edad) {
        this.nombre = nombre;
        this.casado = casado;
        this.edad = edad;
    }
    return Usuario2;
}());
var jorge2 = new Usuario2('Jorge', false, 22);
