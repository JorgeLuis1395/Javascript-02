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
    function Usuario2(nombre, _casado, edad) {
        this.nombre = nombre;
        this._casado = _casado;
        this.edad = edad;
    }
    Object.defineProperty(Usuario2.prototype, "casado", {
        get: function () {
            return this._casado;
        },
        set: function (casado) {
            this._casado = casado;
        },
        enumerable: true,
        configurable: true
    });
    Usuario2.prototype.imprimirUsuario = function (saludo) {
        // Templeade String
        return saludo + ". Mi nombre es " + this.nombre + ", estoy casado " + this.casado + ", mi edad es " + this.edad;
    };
    return Usuario2;
}());
var jorge2 = new Usuario2('Jorge', false, 22);
console.log(jorge2);
console.log(jorge2.casado);
console.log(jorge2.imprimirUsuario('Hola soy '));
