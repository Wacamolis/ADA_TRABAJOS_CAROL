/* Ejercicio 4: Número par o impar
Crea una función declarada llamada esPar que reciba un número y devuelva
"Es par si el número es par o "Es impar si el número es impar. 
Usa una variable local para guardar el resultado. */

const prompt = require("prompt-sync")({ sigint: true });

console.log("Bienvenido, este programa es saber si un numero es par o impar");

let numero = parseInt(prompt("Ingresa el numero: "))

function esPar(){
    let mensaje = numero % 2 == 0 ? "✅ Es par" : "❌ Es impar"
    return mensaje; 
}

console.log(esPar(numero));