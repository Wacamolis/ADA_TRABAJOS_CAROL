/* Ejercicio 5: Concatenar nombres (función expresada)
Crea una función expresada llamada concatenarNombres que reciba dos
nombres (nombre y apellido) como parámetros y devuelva el nombre
completo concatenado. */

const prompt = require("prompt-sync")({ sigint: true });

console.log("INGRESE SUS DATOS");

let nombre = prompt("Ingrese su nombre: ").toUpperCase()
let apellido = prompt("Ingrese su apellido: ").toUpperCase()

let concatenarNombres = function(a,b){
    return a + " " + b
}

let nombreCompleto = concatenarNombres(nombre, apellido)

console.log(`Bienvenid@, ${nombreCompleto}`)