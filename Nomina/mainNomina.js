var nombre ='Nomina';
var apellidos = ' ';
var edad = 50;
var IRS=.30;
var IMSS= .10;
var DiasMes = 30;
var diasQuincena= 15;

console.log(nombre, apellidos);  //Otra opción que ya incluye espacios entre variables

var sueldo = parseInt( prompt('Calcular sueldo mensual: Ingresa sueldo por día')); // prompt es para que se puedan escribir datos

var SueldoBrutoMes= (sueldo * DiasMes);
var IRSfinalMes= (SueldoBrutoMes * IRS);
var IMSSfinalMes =(SueldoBrutoMes * IMSS);
var salarioNetoMes = (SueldoBrutoMes - IRSfinalMes - IMSSfinalMes);

console.log('El salario por mes es: ' + salarioNetoMes);

var sueldo = parseInt( prompt('Calcular sueldo quincenal: Ingresa sueldo por día')); // prompt es para que se puedan escribir datos
var SueldoBrutoQuincena= (sueldo * diasQuincena)
var IRSfinalQuince= (SueldoBrutoQuincena * IRS);
var IMSSfinalQUince =(SueldoBrutoQuincena * IMSS);
var salarioNetoQuincenal = (SueldoBrutoQuincena - IRSfinalQuince - IMSSfinalQUince);

console.log('El salario por quincena es: ' + salarioNetoQuincenal);

