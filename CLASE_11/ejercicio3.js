/* ¿Sabes contar?
Consigna:
Crea un programa que le pida al usuario un número positivo. El programa
deberá contar desde el 1 hasta ese número e imprimir cada valor en la consola.
Usa un ciclo for para realizar la tarea.

*/

const prompt = require("prompt-sync")({ sigint: true }); 

let numero = parseFloat(prompt("Por favor, ingresa un numero: "));

if (numero > 0) {
    console.log(`Vamos a contar hasta ${numero}`);
    for (let i = 1; i <= numero; i++) {
        console.log(i);
    }
} else {
    console.log("Por favor, ingresa un número mayor que cero.");
}