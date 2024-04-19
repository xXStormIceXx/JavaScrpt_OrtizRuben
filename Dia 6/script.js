
/********************************* CLASE PERSONA ******************************************/

class Persona {
    constructor(nombre, edad, país) {
        this.nombre = nombre;
        this.edad = edad;
        this.país = país;
    }

    mostrarDetalles() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, País: ${this.país}`);
    }
}

const persona1 = new Persona("Juan", 30, "España");
const persona2 = new Persona("María", 25, "México");

persona1.mostrarDetalles();
persona2.mostrarDetalles();

/********************************* CLASE RECTANGULO ************************************/

class Rectángulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularÁrea() {
        return this.ancho * this.alto;
    }

    calcularPerímetro() {
        return 2 * (this.ancho + this.alto);
    }
}

const rectángulo1 = new Rectángulo(5, 3);
console.log("Área del rectángulo:", rectángulo1.calcularÁrea());
console.log("Perímetro del rectángulo:", rectángulo1.calcularPerímetro());


/********************************* CLASE “VEHICULO” y SUBCLASE “COCHE” **************************/

class Vehículo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    mostrarDetalles() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`);
    }
}

class Coche extends Vehículo {
    constructor(marca, modelo, año, puertas) {
        super(marca, modelo, año);
        this.puertas = puertas;
    }

    mostrarDetalles() {
        super.mostrarDetalles();
        console.log(`Puertas: ${this.puertas}`);
    }
}

const coche1 = new Coche("Toyota", "Corolla", 2022, 4);
coche1.mostrarDetalles();

/************************************** CLASE CUENTABANCARIA **********************************/

class CuentaBancaria {
    constructor(númeroCuenta, saldoInicial) {
        this.númeroCuenta = númeroCuenta;
        this.saldo = saldoInicial;
    }

    depositar(monto) {
        this.saldo += monto;
        console.log(`Depósito realizado. Saldo actual: ${this.saldo}`);
    }

    retirar(monto) {
        if (monto <= this.saldo) {
            this.saldo -= monto;
            console.log(`Retiro realizado. Saldo actual: ${this.saldo}`);
        } else {
            console.log("Fondos insuficientes.");
        }
    }
}

const cuenta1 = new CuentaBancaria("12345", 1000);
cuenta1.depositar(500);
cuenta1.retirar(200);

/********************************* CLASES FORMA ; CIRCULO ; TRIANGULO ******************************/

class Forma {
    calcularÁrea() {
        console.log("Área de la forma (base): 0");
    }
}

class Círculo extends Forma {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    calcularÁrea() {
        const área = Math.PI * this.radio ** 2;
        console.log(`Área del círculo: ${área.toFixed(2)}`);
    }
}

class Triángulo extends Forma {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularÁrea() {
        const área = (this.base * this.altura) / 2;
        console.log(`Área del triángulo: ${área.toFixed(2)}`);
    }
}

const círculo1 = new Círculo(5);
círculo1.calcularÁrea();

const triángulo1 = new Triángulo(6, 4);
triángulo1.calcularÁrea();

/*************************** ENCADENAMIENTO DE CONSTRUCTORES **************************/

class A {
    constructor(arg) {
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

const instanceC = new C("Hola, soy un argumento");
console.log(instanceC.arg); // Debería imprimir "Hola, soy un argumento"

/****************************** HERENCIA Y POLIFORMISMO DE ESTUDIANTES **************************/

class Student {
    constructor(name) {
        this.name = name;
    }

    pass() {
        return true; // Implementación básica para estudiantes regulares
    }
}

class NSStudent extends Student {
    constructor(name) {
        super(name);
    }

    pass() {
        return false; // Implementación específica para estudiantes NS
    }
}

// Ejemplo de uso
const regularStudent = new Student("Juan");
const nsStudent = new NSStudent("María");

const studentList = [regularStudent, nsStudent];

for (const student of studentList) {
    console.log(`${student.name} pasa el año: ${student.pass()}`);
}
