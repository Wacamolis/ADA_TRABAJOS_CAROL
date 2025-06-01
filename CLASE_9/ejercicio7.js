/* Pide al usuario que ingrese su peso en kilogramos y conviértelo a
libras. Muestra el resultado con un mensaje. (Averigua como pasar de
kg a libras, Pista: 2.20462)

ENTRADA: Peso en kilos. numero
SALIDA: Peso en libras. 

1. pedir que ingrese su peso en libras
2. multiplicar el peso KG por 2.20462
3. resultado: Su peso es xxx
*/

const prompt = require("prompt-sync")({ sigint: true }); 

let pesoKG = parseFloat(prompt("Para convertir su peso a libras, ingrese su peso en KG: "))
const equivalente =  2.20462 
let pesoLB = pesoKG * equivalente

console.log(`Su peso en libras es de ${pesoLB} LB.`)