/* Ejercicio 7 - Intercambio de Valores: 
Declara dos variables con valores iniciales y luego intercambia sus valores. Muestra los valores antes y después del intercambio en la consola. Para intercambiar valores puedes usar varios métodos(usando una variable temporal, aritmética o asignación simultanea), eres libre de elegir el que desees, eso si, investiga sobre el que usaras.

Declara dos variables con valores diferentes.

Muestra sus valores originales en consola.

Crea una variable temporal para guardar uno de los valores.

Haz el intercambio.

Muestra los nuevos valores.
*/

let num1 = 100
let num2 = 50

console.log("_________Antes del intercambio________")
console.log(`El numero 1 es ${num1} y el numero 2 es ${num2}`)
console.log(`La division es: ${num1 / num2}`)

let temp = num1
num1 = num2
num2 = temp

console.log("_________Despues del intercambio________")
console.log(`El numero 1 es ${num1} y el numero 2 es ${num2} `)
console.log(`La division es: ${num1 / num2}`)
