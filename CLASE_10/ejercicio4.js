/* Ejercicio 4 – Tipo de Datos: 
Declarar 4 variables utilizando la palabra reservada let y asignarles valores según el tipo de dato que sugiera su nombre. 
Además, realizar operaciones y validaciones adicionales sobre estos valores.

Pasos a seguir:
Declaración de Variables:
	•	Declara una variable llamada verdadero y asígnale un dato de tipo booleano (true o false).
	•	Declara una variable llamada texto y asígnale un string de tu elección (puedes usar cualquier mensaje que prefieras).
	•	Declara una variable llamada numero y asígnale un dato numérico (puedes usar cualquier número entero o decimal).
	•	Declara una variable llamada nada y asígnale un valor que represente la ausencia de valor en JavaScript.

Operaciones y Validaciones:
	•	Realiza una operación matemática usando la variable número, por ejemplo, suma o resta con otro número de tu elección.
	•	Concatena el “string” de la variable texto con otro mensaje adicional.
	•	Verifica si la variable “verdadero” es true o false y muestra un mensaje diferente según el resultado.
	•	Implementa una condición para verificar si la variable nada es null y muestra un mensaje si es así.
*/

const prompt = require("prompt-sync")({ sigint: true }); 

let verdadero = true
let texto = "String es texto"
let numero = 2025
let nada = null

console.log(numero - 1992)
console.log(`En clase de sofi aprendi que ${texto}`)
