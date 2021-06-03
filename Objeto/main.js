/*
var persona = {
    nombre:'Gaby',
    apellidos: ['Medrano','Hdez'],
    edad:40,

    saludar: function () {
        alert( 'Hola tu nombre es '+ this.nombre + ' ' + this.apellidos[0] + ' ' + this.apellidos[1]);
    },

    consulEdad: function() {
        alert('Hola tu edad es '+ this.edad);
    }

}

console.log(persona);
console.log(persona.saludar());
console.log(persona.consulEdad());

*/



function datos (nombre, apellido1, anios) {

    return {
        nom: nombre, 
        apellidop: apellido1,        
        edad:anios,
    
        saludar: function () {
            console.log( 'Hola tu nombre es '+ this.nom + ' ' + this.apellidop);
        },
    
        consulEdad: function() {
            console.log('Hola tu edad es '+ this.edad);
        }

    };
     
};

var objectPersona = datos('Gaby', 'Medrano', 40 );
objectPersona.saludar();
objectPersona.consulEdad();




/* otra
function persona (nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

var objectPersona = new persona("Gaby", "Medrano", 40);
console.log(objectPersona.persona);

*/



