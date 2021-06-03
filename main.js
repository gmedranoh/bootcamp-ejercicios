//alert('Hola mundo');

var nombre ='Gaby';
var apellidos = 'Medrano Hdez';
var edad = 29;


console.log(nombre, apellidos);  //Otra opción que ya incluye espacios entre variables
console.log(nombre + ' ' + apellidos); // Concatenando
console.log('Mi edad es:' + ' ' + edad);

var numero = 11;
var otroNumero = '11';

console.log(typeof(numero));   // nos siver para ver el tipo de dato este caso es number
console.log(typeof(otroNumero));  // nos siver para ver el tipo de dato este caso es string


var base = parseInt( prompt('Escribe la base del triangulo:')); // prompt es para que se puedan escribir datos
var altura = parseInt( prompt('Escribe la altura del triangulo:')); // parseInt Permite pasar de tipo de dato Entero a tipo de dato 
//String Entero a Float. parseFloat para rescatar numeros con puntos decimal

var resultado = (base * altura) / 2;

alert('El área del triangulo es: ' + resultado);


/*

*/ 