/* Ejercicio 7: Calculadora simple
Consigna:
Crea un programa que le pida al usuario dos números y una operación
matemática a realizar: suma, resta, multiplicación o división. Según la operación
ingresada, el programa deberá calcular y mostrar el resultado. Si el usuario
ingresa una operación inválida, el programa debe mostrar un mensaje de error.
Usa switch para resolverlo.

*/

const prompt = require("prompt-sync")({ sigint: true }); 

let primerNumero = parseFloat(prompt("Bienvenido a tu calculadora 🧮 Ingresa el primer numero: "))
let segundoNumero = parseFloat(prompt("Ingresa el segundo numero: "))
let operacion = prompt("Ahora, ingresa la operacion a realizar (suma, resta, multiplicacion o division): ").toLowerCase()

switch (operacion) {
    case "suma" : {
    console.log(`➕✅ ${primerNumero} + ${segundoNumero} = ${primerNumero + segundoNumero}`)
    } break
    case "resta" : {
    console.log(`➖✅ ${primerNumero} - ${segundoNumero} = ${primerNumero - segundoNumero}`)
    } break
    case "multiplicacion" : {
    console.log(`✖️✅ ${primerNumero} * ${segundoNumero} = ${primerNumero * segundoNumero}`)
    } break
    case "division" : {
    console.log(`➗✅ ${primerNumero} / ${segundoNumero} = ${primerNumero / segundoNumero}`)
    } break
    default :
    console.log("❌ Operación no valida. Usa: suma, resta, multiplicacion o division.");
}
