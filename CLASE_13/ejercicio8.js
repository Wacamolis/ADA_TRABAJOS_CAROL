/* Ejercicio 8: Convertir grados Celsius a Fahrenheit (Ejercicio entrevista)
Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba
una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit.
*/

const prompt = require("prompt-sync")({ sigint: true });

console.log("CONVERSOR DE GRADOS CELSIUS A FAHRENHEIT 🌡️");

let celsius = parseInt(prompt("Ingresa los grados Celsius a convertir: "))

let convertirCelsiusAFahrenheit = function(a){
    return (a * 9 / 5) + 32
}

console.log(`🌡️  ${celsius}°C son ${convertirCelsiusAFahrenheit(celsius)}°F`)