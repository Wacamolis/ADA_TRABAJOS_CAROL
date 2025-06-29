/* Ejercicio 1: Calcular el precio final con IVA
Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una
función flecha para calcular el precio final.
*/

const prompt = require("prompt-sync")({ sigint: true });

console.log("CALCULADORA DE PRECIO FINAL CON IVA 🛒 ");

let precioProducto = parseInt(prompt("Ingresa el precio del producto: "))
let porcentajeIva = parseInt(prompt("Ingresa el porcentaje de IVA (sin %): "))

let calcularPrecioFinal = (a, b) => a + (a * b / 100);

let precioFinal = calcularPrecioFinal(precioProducto, porcentajeIva)

console.log(`🛒 El precio final con IVA es: Q${precioFinal}`)