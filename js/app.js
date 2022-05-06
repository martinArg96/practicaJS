"use strict"

/*
alert("hola desde un archivo externo");

//este es un mensaje de la consola
console.log("hola consola");


var publicData = "hola";

var nombre = "lucas";

console.log("su nombre es: ", nombre);

function saludo(){
    let nombre = "jose";
    console.log("su nombre dentro de la fx es:", nombre);
    let edad = 34; 
    console.log(edad)
}
saludo()
*/
// decalro una constante
const pi = 3.14;

//agrego variable cantidad y le doy un valor string
var cantidad = "100";

var nuevaCantidad = Number(cantidad)

var bebida = "agua"

var comdia = 'milanesa'

var instruccion = "el platillo se llama 'milanesa' "

var edad = 34;

var edadtxt = String(edad);

var activo = true
var variableBooleana = false;

var estado = Boolean(10>3);

var fecha = new Date() // genera fecha nueva

// SIMBOLOS son valores unicos
var simbolo1 = Symbol();
var simbolo2 = Symbol ();
var ambiente = Symbol('dev')
var ambiente2 = Symbol('dev')

//simbolo 1 y 2 y ambiente 1 y2 son diferentes 



//3.6 Estructurando datos con json: JS Object notation

var persona = {nombre:'segrio',twiter:'sergiowits'}

var personas=[
    {nombre:'lucas', twiter:'lucastw'},

    {nombre:'martin', twiter: 'martin23'},

    persona

]

var personaJSON = JSON.stringify(persona);

var nuevaPersonaJSON = JSON.parse(personaJSON);

console.log("la fecha era:" + fecha);

var datoMartin = 20;
var datoLucas = 35;


if(datoLucas>datoMartin){
    console.log("la condicion se cumplio");
}







