/* Define una constante PI con el valor de pi (3.14159). Pide al usuario
que ingrese el radio de un círculo y calcula su área y perímetro
utilizando la constante PI.

Área = π * r^2,

*/

const prompt = require("prompt-sync")({ sigint: true }); 

let numero = parseFloat(prompt(`Ingrese el radio de su circulo para calcular su area y perimetro: `))

const pi = 3.14159
let diametro = numero * 2
let area = pi * diametro

console.log(`El perimetro de su circulo es ${perimetro} y el area es ${area}`)