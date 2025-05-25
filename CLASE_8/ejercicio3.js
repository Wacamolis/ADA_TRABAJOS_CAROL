/* Suma de dos números ingresados por el usuario
Enunciado:
Este ejercicio te ayudará a practicar la entrada de datos y el uso de operadores
aritméticos. Escribe un programa que:
1. Pida al usuario que ingrese dos números.
2. Sume ambos números.
3. Muestre el resultado de la suma.

ENTRADA: 2 numeros que proporciona el usuario
SALIDA: resultado
*/

const prompt = require("prompt-sync")({ sigint: true }); 

let numero1 = parseFloat(prompt(`Ingrese el primer valor: `))
let numero2 = parseFloat(prompt(`Ingrese el segundo valor: `))

let resultado = numero1 + numero2

console.log(`La suma de ${numero1} más ${numero2} es igual a ${resultado}`)