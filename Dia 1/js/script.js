console.log("Hola Mundo")
let a = 5
let b = 6 
console.log(a + b)

let palabra1 = "Campus"
let palabra2 = "Lands"
compilacion = palabra1 + palabra2
console.log(compilacion)


// ** FUNCION SIN RETORNO Y SIN PARAMETROS **
function funcionNormal(){
    console.log("Mi función");
}

// ** FUNCION SIN RETORNO Y CON PARAMETROS **
function suma(a,b){
    console.log(a+b);
}
// ** FUNCION CON RETORNO Y CON PARAMETROS **
function sumaR(a,b){
    //console.log(a+b);
    return a+b;
}
// ** FUNCION CON RETORNO Y SIN PARAMETROS **
function salonFavorito(){
    //console.log(a+b);
    return "P1";
}

funcionNormal();
suma();
sumaR();
salonFavorito();


//---------- BUCLE FOR ----------

arreglo = [123, "ruben", true]
console.log(arreglo.lentgh)

tamaño = arreglo.lentgh

for (let i=0; i<tamaño; i++){
    console.log(arreglo[i])
}



//------------ EJERCICIO-------------

let c = 500

function convertidor(){
    let f = 32+(9*c/5)
    console.log(f)
}

convertidor()
