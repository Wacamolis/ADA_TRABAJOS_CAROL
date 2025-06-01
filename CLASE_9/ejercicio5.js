/* Escribe un programa que pida al usuario que ingrese tres números y
determine cuál es el mayor de los tres.

ENTRADA: 3 numeros
SALIDA: El numero A es mayor que B y C)

1. Pedir al usuario que ingrese los 3 numeros. 
2. comparar los numeros para determinar cual es el mayor. (&&)
3. respuesta: El numero XX es mayor que XXX y XXX. */

const prompt = require("prompt-sync")({ sigint: true }); 

let numeroA = parseFloat(prompt(`Ingrese el primer numero: `))
let numeroB = parseFloat(prompt(`Ingrese el segundo numero: `))
let numeroC = parseFloat(prompt(`Ingrese el tercer numero: `))

if (numeroA > numeroB && numeroA > numeroC) {
    console.log(`El numero ${numeroA} es mayor que ${numeroB} y ${numeroC}`)
} else if (numeroB > numeroA  && numeroB > numeroC) {
    console.log(`El numero ${numeroB} es mayor que ${numeroA} y ${numeroC}`)
} else if (numeroC > numeroA && numeroC > numeroB) {
    console.log(`${numeroC} es mayor que ${numeroA} y ${numeroB}`)
}