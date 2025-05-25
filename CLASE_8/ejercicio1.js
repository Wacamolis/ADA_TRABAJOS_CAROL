
/*
Ejercicio 1: Calcula el doble de un número
Enunciado:
En este ejercicio, practicarás el uso de variables y operadores aritméticos. Debes
escribir un programa en JavaScript que:
1. Solicite al usuario que ingrese un número cualquiera.
2. Calcule el doble de ese número.
3. Muestre el resultado en la consola.
Requisitos:
• Utiliza la función prompt() para solicitar el dato al usuario.
• Almacena el número ingresado en una variable.
• Utiliza un operador aritmético para calcular el doble del número.

datos de entrada: un numero que proporciona el usuario
datos de salida: el resultado 

1. pedir al usuario que ingrese un numero 
2. hacer el calculo
3. mostrar el resultado

*/


const prompt = require("prompt-sync")({ sigint: true }); 

let numeroInicial = parseFloat(prompt(`Ingrese un numero: `))
let numeroDoble = numeroInicial * 2
console.log(`El doble de ${numeroInicial} es ${numeroDoble}`)


