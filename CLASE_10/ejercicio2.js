/*Ejercicio 2 – Usando las variables: 
Escribe un programa que pida al usuario que ingrese su nombre, su edad y su peso, y luego muestre un mensaje personalizado que incluya toda esta información.

Desglosando el ejercicio deberás:
	•	Pide al usuario que ingrese su nombre.
	•	Pide al usuario que ingrese su edad.
	•	Pide al usuario que ingrese su peso.
	•	Muestra un mensaje personalizado que incluya el nombre, la edad y el peso del usuario.
Pista: En el ejercicio anterior, declaramos valores en las variables. Ahora nos toca pedir datos al usuario, por lo que usaremos prompt-sync para solicitar esta información.
*/

const prompt = require("prompt-sync")({ sigint: true }); 

let nombre = prompt("Ingresa tu nombre: ")
let edad = parseFloat(prompt("Ingresa tu edad: "))
let peso = parseFloat(prompt("Ingresa tu peso en libras: "))

console.log(`Bienvenid@ ${nombre}, tu edad es ${edad} años y tu peso actual ⚖️ es de ${peso} lb`)