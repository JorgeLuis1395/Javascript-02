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
    protected edad: number;

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


class Usuario2 {
    constructor(public nombre: string, private _casado: boolean, protected edad: number) {

    }

    get casado() {
        return this._casado;
    }

    set casado(casado: boolean) {
        this._casado = casado;
    }

    imprimirUsuario(saludo: string): string {
        // Templeade String
        return `${saludo}. Mi nombre es ${this.nombre}, estoy casado ${this.casado}, mi edad es ${this.edad}`;
    }

}

let jo: UsuarioTres = {
    nombre: 'oeoeoe', edad: 28
};

interface UsuarioTres {
    nombre: string;
    casado?: boolean;
    edad: number;
}

let jorge2 = new Usuario2('Jorge', false, 22);
console.log(jorge2);
console.log(jorge2.casado)
console.log(jorge2.imprimirUsuario('Hola soy '));