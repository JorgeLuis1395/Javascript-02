console.log("Hola mundo");
let hola: number | string | boolean;
const adios = 'Adios';
hola = 'Adios';
hola = 1;
let nombre: string = 'Jorge';
let edad: number = 28.23;
let casado: boolean = false;
let fechaNacimiento: Date = new Date();

class Usuario {
    nombre: string;
    private casado: boolean;
    protected edad: numbre;

    constructor(nombre: string, casado: boolean, edad: number) {
        this.nombre = nombre;
        this.casado = casado;
        this.edad = edad;
    }
}
var luis = {
    nombre: 'Jorge',
    casado: false,
    edad: 22

}
let jorge: Usuario = new Usuario('Jorge', false, 22)
console.log(jorge);
console.log(luis);


class Usuario2{
    constructor(public nombre: string, private casado: boolean, protected edad: number){

    }
}
let jorge2 = new Usuario2('Jorge',false,22)
