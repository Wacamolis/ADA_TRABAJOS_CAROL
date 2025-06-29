/* Ejercicio 2: Número mayor (función expresada)
Crea una función expresada llamada encontrarMayor que reciba dos
números como parámetros y devuelva el número mayor. */

const prompt = require("prompt-sync")({ sigint: true });

console.log("Bienvenido, este programa es para encontrar el numero mayor");

let numero1 = parseInt(prompt("Ingresa el primer numero: "))
let numero2 = parseInt(prompt("Ingresa el segundo numero: "))

let encontrarMayor = function(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  } 
}

let mayor = encontrarMayor(numero1, numero2)

console.log(`🔍 El número mayor es ${mayor}`)