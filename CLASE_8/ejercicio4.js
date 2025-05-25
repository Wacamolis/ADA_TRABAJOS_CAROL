/* Determinar si un número es par o impar

En este ejercicio, aprenderás a utilizar operadores aritméticos y condicionales.
Debes escribir un programa que:
1. Solicite al usuario que ingrese un número entero.
2. Determine si el número es par o impar.
3. Muestre un mensaje indicando si el número es par o impar.
Requisitos:
• Utiliza el operador módulo (%) para comprobar si el número es divisible
por 2.
• Usa una estructura if-else para mostrar el mensaje adecuado. 

ENTRADA: Ingrese un número entero para saber si es par o impar:
SALIDA: El numero ingresado es: PAR, IMPAR o SU NUMERO ES CERO. 

1. pedir que ingrese un numero
2. realizar operacion, modulo de numero % 2, si es uno es impar, si es cero es par
3. if es par else impar
4. resultado

*/
const prompt = require("prompt-sync")({ sigint: true }); 

let numero = parseFloat(prompt(`Ingrese un número para saber si es par o impar: `))

if (numero === 0) {console.log("El número es 0, ingrese un numero entero");}
else if (numero % 2 === 0) {console.log(`El numero ${numero} es PAR`)}
else {console.log(`El numero ${numero} es IMPAR`)}