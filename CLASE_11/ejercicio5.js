/* Ejercicio 5: Encuentra los números pares entre dos valores
Consigna:
Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El
programa debe mostrar todos los números pares que se encuentran entre esos
dos valores, incluyendo los límites si son pares. Utiliza un ciclo for para recorrer
los números entre el inicio y el fin. Si el número inicial es mayor que el final, el
programa debe mostrar un mensaje indicando que los valores son inválidos.

*/

const prompt = require("prompt-sync")({ sigint: true }); 

let inicio = parseFloat(prompt("Ingresa el numero inicial: "))
let final = parseFloat(prompt("Ingresa el numero final: "))

if (inicio > final) {
    console.log("🚫 El numero inicial debe ser menor que el final")
} 

for (i = inicio; i <= final; i++) {
    if (i % 2 === 0) {
        console.log(`${i} es par`)}
}
