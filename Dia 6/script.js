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