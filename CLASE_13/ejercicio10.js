/* Ejercicio 10: Factorial de un número (Ejercicio entrevista)
Crea una función expresada llamada calcularFactorial que reciba un número
y devuelva su factorial.

*/

const prompt = require("prompt-sync")({ sigint: true });

console.log("🧮 CALCULADORA DE FACTORIALES");

let numero = parseInt(prompt("Ingresa el numero que deseas calcular: "));

let calcularFactorial = function(n) {
  let resultado = 1;

  for (let i = 1; i <= n; i++) {
    resultado *= i; 
  }

  return resultado;
};

console.log(`🔢 El factorial de ${numero} es: ${calcularFactorial(numero)}`);