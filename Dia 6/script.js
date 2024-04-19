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