
/* Ejercicio 4: ¿Es par o impar?
Consigna:
Los números pueden ser pares o impares. Escribe un programa que le pida al
usuario un número y determine si es par o impar. Muestra un mensaje
explicativo indicando qué significa cada caso.

*/

const prompt = require("prompt-sync")({ sigint: true }); 
let numero = parseFloat(prompt("Por favor, ingresa un numero para determinar si es par o impar: "));

/*

if (numero % 2 === 0) {
    console.log(`El numero ${numero} es PAR porque es divisible entre 2 sin residuo.`);
} else {
    console.log(`El numero ${numero} es IMPAR porque al dividir entre 2 deja un residuo.`);
}

*/

console.log(`El número ${numero} es ${numero % 2 === 0 ? "PAR" : "IMPAR"}`)

// isNaN(numero)
//  ? console.log("Por favor, ingresa un número válido.")
//  : console.log(`El número ${numero} es ${numero % 2 === 0 ? "PAR" : "IMPAR"}.`);
// isNaN(numero) verifica si el valor ingresado no es un número. 