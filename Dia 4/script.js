
/*************** PERSONA *****************/

const persona = {
    nombre: "Juan",
    edad: 30,
    genero: "masculino",
    ocupacion: "programador",
    hablar: function() {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    },
    trabajar: function() {
      console.log(`${this.nombre} está trabajando como ${this.ocupacion}.`);
    }
  };
  
  // Accediendo a los atributos y métodos de la persona
  console.log(persona.nombre); // Juan
  console.log(persona.edad); // 30
  persona.hablar(); // Imprime: Hola, soy Juan y tengo 30 años.
  persona.trabajar(); // Imprime: Juan está trabajando como programador.
  
 
/***************** COCHE *******************/

class Coche {
    constructor(marca, modelo, año) {
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
      this.velocidad = 0;
    }
  
    acelerar(velocidadIncremento) {
      this.velocidad += velocidadIncremento;
      console.log(`El coche está acelerando. Velocidad actual: ${this.velocidad} km/h`);
    }
  
    frenar(velocidadReduccion) {
      this.velocidad -= velocidadReduccion;
      console.log(`El coche está frenando. Velocidad actual: ${this.velocidad} km/h`);
    }
  }
  
  const miCoche = new Coche("Toyota", "Corolla", 2022);
  miCoche.acelerar(20); // Imprime: El coche está acelerando. Velocidad actual: 20 km/h
  miCoche.frenar(10); // Imprime: El coche está frenando. Velocidad actual: 10 km/h
  

/****************** UN LIBRO *****************/

const libro = {
    titulo: "El Señor de los Anillos",
    autor: "J.R.R. Tolkien",
    añoPublicacion: 1954,
    genero: "Fantasía",
    obtenerDetalles: function() {
      return `${this.titulo} escrito por ${this.autor}, publicado en ${this.añoPublicacion}. Género: ${this.genero}`;
    }
  };
  
  // Accediendo a los atributos y método del libro
  console.log(libro.titulo); // El Señor de los Anillos
  console.log(libro.obtenerDetalles()); // Imprime: El Señor de los Anillos escrito por J.R.R. Tolkien, publicado en 1954. Género: Fantasía
  

/******************* UN NUMERO ********************/

const numero = 42;

// Operaciones con el número
console.log(numero + 10); // 52
console.log(numero * 2); // 84


/****************** UNA FUNCION **************/

function suma(a, b) {
    return a + b;
  }
  
  // Uso de la función
  console.log(suma(5, 3)); // 8
  