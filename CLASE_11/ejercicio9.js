/* Ejercicio 9: Cuenta regresiva para el despegue
Consigna:
Crea un programa que simule la cuenta regresiva para el lanzamiento de un
cohete. El programa debe contar desde 10 hasta 0 e imprimir "¡Despegue!" al
final. Usa un ciclo for para realizar la cuenta regresiva.

*/

const prompt = require("prompt-sync")({ sigint: true }); 

let iniciarCuenta = prompt("Ingrese ACEPTAR para iniciar la cuenta regresiva para el lanzamiento: 🚀  ").toLowerCase()

if (iniciarCuenta === "aceptar") {
    for (i = 10; i >= 0; i--) 
        console.log(i)
} else console.log("🚫 El lanzamiento ha sido CANCELADO")
