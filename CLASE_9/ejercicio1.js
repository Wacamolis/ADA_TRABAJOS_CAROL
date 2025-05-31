/* Declara dos variables numéricas numero1 y numero2. Pide al usuario
que ingrese dos números y muestra cuál es mayor o si son iguales.

ENTRADA - el usuario ingresa 2 numeros. 
SALIDA - El numero tal es mayor/menor/igual a numero talito

1. pedir al usuario que ingrese un numeroUno. 
2. pedir al usuuario que ingrese otro numeroDos.
3. operacion if else if else
4. dar el resultado al usuario. 

si a > b = el numero a es mayor. 
si a < b = el b es mayor
si a = b = los numeros son iguales 

*/

const prompt = require("prompt-sync")({ sigint: true }); 

let numeroA = parseFloat(prompt(`Ingrese el primer numero: `))
let numeroB = parseFloat(prompt(`Ingrese un segundo numero: `))

if (numeroA > numeroB) {console.log(`${numeroA} es mayor que ${numeroB}`)}
else if (numeroA < numeroB) {console.log(`${numeroB} es mayor que ${numeroA}`)}
else {console.log(`${numeroA} es igual que ${numeroB}`)}

