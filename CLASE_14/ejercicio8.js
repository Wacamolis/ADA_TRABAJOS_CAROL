/* Ejercicio 8: Funcion backEnd()
Creá la función backEnd() que recibirá 2 números como parámetros. La
función deberá imprimir por pantalla los números del 1 al 100, pero teniendo
en cuenta los siguientes criterios:

✔ Si el número a imprimir es múltiplo del primer parámetro que se
ingresó, deberá mostrar el string “Back” en lugar del número.
✔ Si el número a imprimir es múltiplo del segundo parámetro ingresado,
deberá mostrar el string “End” en su lugar del número.
✔ Si el número a imprimir es múltiplo de ambos parámetros, deberá
mostrar el string “Back End” en lugar del número.
 */

const prompt = require("prompt-sync")({ sigint: true });

console.log("FUNCION BACKEND () ")

let num1 = parseInt(prompt("Ingresa el primer numero: "));
let num2 = parseInt(prompt("Ingresa el segundo numero: "));

function backEnd(num1, num2) {
  for (let i = 1; i <= 100; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      console.log("Back End");
    } else if (i % num1 === 0) {
      console.log("Back");
    } else if (i % num2 === 0) {
      console.log("End");
    } else {
      console.log(i);
    }
  }
}

backEnd(num1, num2)
