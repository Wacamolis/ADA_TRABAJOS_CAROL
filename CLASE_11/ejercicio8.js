/* Ejercicio 8: Encuentra los múltiplos de un número
Consigna:
Escribe un programa que le pida al usuario un número entero positivo y
muestre todos los múltiplos de ese número entre 1 y 100. Utiliza un ciclo for
para resolverlo.

*/

const prompt = require("prompt-sync")({ sigint: true }); 

let numero = parseFloat(prompt("Ingresa un numero del 1 al 100 para conocer sus multiplos: "))

if (numero <= 0) {
    console.log("🚫 El numero debe ser mayor a cero")
} else {
 for (i = 1; i <= 100; i++) {
    if (i % numero === 0) {
    console.log(`${i} es multiplo de ${numero}`);
  }
}
}