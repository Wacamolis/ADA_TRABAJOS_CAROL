/* Pide al usuario que ingrese las longitudes de los tres lados de un
triángulo. Determina y muestra si el triángulo es equilátero, isósceles oescaleno.

Equilátero: los 3 lados son iguales
Isósceles: 2 lados son iguales
Escaleno: todos los lados son diferentes

*/

const prompt = require("prompt-sync")({ sigint: true }); 

let ladoA = parseFloat(prompt("Ingresa la medida del primer lado: "))
let ladoB = parseFloat(prompt("Ingresa la medida del segundo lado: "))
let ladoC = parseFloat(prompt("Ingresa la medida del tercer lado: "))

if (ladoA === ladoB && ladoB === ladoC) {
    console.log("Tu triangulo es EQUILATERO")
} else if  (
    (ladoA === ladoB && ladoA !== ladoC) ||
  (ladoB === ladoC && ladoB !== ladoA) ||
  (ladoA === ladoC && ladoA !== ladoB)
) {
    console.log("Tu triangulo es ISOSCELES ")
} else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
    console.log("Tu triangulo es ESCALENO")
}