
var nombre ='Edad';
var edadMinima = 18;
var edadMaxima = 29;

console.log(nombre);  //Otra opción que ya incluye espacios entre variables

var edad = parseInt( prompt('¿Qué edad tienes?')); // prompt es para que se puedan escribir datos

if( edad >= edadMinima && edad <= edadMaxima){
    console.log("Eres aceptado en Generation");
}else{
    console.log("No eres aceptado en Generation porque no cumples con los requisitos de edad");
}


