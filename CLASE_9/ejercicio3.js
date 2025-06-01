/* Declara dos variables booleanas condicion1 y condicion2. Pide al
usuario que ingrese dos valores booleanos (true o false) y muestra el
resultado de diversas combinaciones lógicas.

ENTRADA: 2 valores true o false
SALIDA: Resultado de combinaciones logicas

1. pedir al usuario que ingrese 2 valores true o false
2. declarar variables condicion1 y condicion2
3. hacer combinaciones posibles
4. mostrar respuesta al usuario
*/
const prompt = require("prompt-sync")({ sigint: true }); 

let entrada1 = prompt("Ingrese el primer booleano (true o false): ")
let condicion1 = entrada1 === "true"

let entrada2 = prompt("Ingrese el segundo booleano (true o false): ")
let condicion2 = entrada2 === "true"

console.log(`Primer booleano: ${condicion1}`);
console.log(`Segundo booleano: ${condicion2}`);
console.log(`${condicion1} AND ${condicion2}: ${condicion1 && condicion2}`);
console.log(`${condicion1} OR ${condicion2}: ${condicion1 || condicion2}`);
console.log(`NOT ${condicion1}: ${!condicion1}`);
console.log(`NOT ${condicion2}: ${!condicion2}`);

