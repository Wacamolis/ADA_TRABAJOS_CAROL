/* Ejercicio 2: Verificar si un número es positivo, negativo o cero
Enunciado:
En este ejercicio, practicarás el uso de condicionales (if, else). Escribe un
programa en JavaScript que:
1. Pida al usuario que ingrese un número.
2. Verifique si el número es positivo, negativo o igual a cero.
3. Muestre un mensaje indicando cuál es el caso.
Requisitos:
• Utiliza una estructura de control de flujo (if, else if, else) para hacer las
verificaciones.
• Usa parseFloat() para convertir la entrada del usuario a un número. 

DATOS DE ENTRADA: un numero proporcionado por el usuario
DATOS DE SALIDA: positivo, negativo o cero

si es = > a 1 es positivo
si es = a 0 es cero
si es < a 0 es negativo
*/

const prompt = require("prompt-sync")({ sigint: true }); 


let numero = parseFloat(prompt(`Ingrese un numero para saber si es positivo, negativo o igual a cero: `))

if (numero >= 1) {console.log(`${numero} es un número positivo`)}
else if (numero === 0) {console.log(`${numero} es cero`)}
else {console.log(`${numero} es un número negativo`)}
