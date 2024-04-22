/*============================== Clase "Persona" ==============================*/
class Persona {
    constructor (nombre, edad, pais) {
        this.nombre = nombre;
        this.edad = edad;
        this.pais = pais;
    }

    MostrarDetalles() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Pais: ${this.pais}`);
    }
}

const persona1 = new Persona("Juan", 30, "España");
const persona2 = new Persona("Maria", 25, "Mexico");

persona1.MostrarDetalles();
persona2.MostrarDetalles();

/*============================= Clase "Rectangulo" ============================= */

class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }
    
    CalcularArea() {
        return this.ancho * this.alto;
    }

    CalcularPerimetro() {
        return 2 * (this.ancho + this.alto);
    }
}

const rectangulo1 = new Rectangulo(5,3);
console.log("area del Rectangulo:", rectangulo1.CalcularArea());
console.log("Perimetro del Rectangulo", rectangulo1.CalcularPerimetro());

/*====================== Clase "Vehiculo" y SubClase "Coche" =====================*/

class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    MostrarDetalles() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`);
    }
}

class Coche extends Vehiculo {
    constructor(marca, modelo, año, puertas) {
        super(marca, modelo, año);
        this.puertas = puertas;
    }

    MostrarDetalles() {
        super.MostrarDetalles();
        console.log(`Puertas: ${this.puertas}`);
    }
}

const coche1 = new Coche("Toyota", "Corolla", 2022, 4);
coche1.MostrarDetalles();

/*================================ Clase "Cuenta Bancaria" ===================================*/

class CuentaBancaria {
    contructor(NumeroCuenta, SaldoInicial) {
        this.NumeroCuenta = NumeroCuenta;
        this.Saldo = SaldoInicial;
    }

    depositar(monto) {
        this.Saldo += monto;
        console.log(`Deposito realizado. Saldo actual: ${this.Saldo}`);
    }

    retirar(monto) {
        if (monto <= this.Saldo){
            this.Saldo -= monto;
            console.log(`Retiro realizado. Saldo actual: ${this.Saldo}`);
        } else {
            console.log("Fondos Insuficientes.");
        }
    }
}

const cuenta1 = new CuentaBancaria("12345", 1000);
cuenta1.depositar(500);
cuenta1.retirar(200);

/*============================== Clases "Forma, Circulo y Triangulo" ===========================*/

class Forma {
    CalcularArea() {
        console.log ("areade la forma (base):0");
    }
}

class Circulo extends Forma {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    CalcularArea() {
        const area = Math.PI * this.radio ** 2;
        console.log(`Area del circulo: ${area.toFixed(2)}`);
    }
}

class Triangulo extends Forma {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
}

const circulo1 = new Circulo(5);
circulo1.CalcularArea();

/*=============================== Encadenamiento de Constructores ============================= */

class A {
    constructor(arg){
        this.arg = arg;
    }
}

class B extends A {
    constructor(arg) {
        super(arg);
    }
}

class C extends B {
    constructor(arg) {
        super(arg);
    }
}

const instanceC = new C("Hola, Soy un Argumento");
console.log(instanceC.arg);

/*=============================== Herencia y Poliformismo de Estudiantes ======================== */

class Student{
    constructor(name) {
        this.name = name;
    }

    pass() {
        return true;
    }
}

class NSStudent extends Student {
    contructor(name) {
        super(name);
    }

    pass () {
        return false;
    }
}

const regularStudent = new Student("Juan");
const nsStudent = new NSStudent("Maria");

const studentList = [regularStudent, nsStudent];

for (const Student of studentList) {
    console.log(`${Student.name} Pasa el Año: ${Student.pass()}`);
}