/* Vimos cómo declarar una variable y asignarle un valor, y probablemente surgió la siguiente pregunta: ¿para qué sirve almacenar datos en variables? Las variables nos permiten reutilizar el dato asignado en la misma con solo invocar su nombre.
También, algo muy importante, así como podemos hacer operaciones matemáticas como sumar (+) o restar (-) números, podemos hacer lo mismo con las variables que las referencian.

Pasos a seguir:
Declaración y Asignación de Variables:
	•	Declara y asigna un valor numérico a dos variables: primerNumero y segundoNumero.
Operaciones Matemáticas:

	•	Declara las siguientes variables: resultadoSuma, resultadoResta, resultadoMultiplicacion, resultadoDivision.
	•	Asigna a cada una de estas variables el resultado de la suma, resta, multiplicación y división de las variables primerNumero y segundoNumero.

*/

const prompt = require("prompt-sync")({ sigint: true }); 

let primerNumero = 25
let segundoNumero = 15

let resultadoSuma = primerNumero + segundoNumero
let resultadoResta = segundoNumero = primerNumero
let resultadoMultiplicacion = primerNumero * segundoNumero
let resultadoDivision = primerNumero / segundoNumero

console.log(`La suma es ${resultadoSuma}
La resta es ${resultadoResta}
La multiplicacion es: ${resultadoMultiplicacion}
La division es: ${resultadoDivision}`)