/* Ejercicio 6: Convertir a minutos
Crea una función declarada llamada convertirHorasAMinutos que reciba un
número de horas como parámetro y devuelva el total en minutos. */

const prompt = require("prompt-sync")({ sigint: true });

console.log("⏱️ CONVERSOR DE HORAS A MINUTOS ⏱️");

let horas = parseFloat(prompt("Ingresa cuantas horas deseas convertir a minutos: "))

function convertirHorasAMinutos(){
    return horas * 60
}

console.log(`${horas} horas son ${convertirHorasAMinutos(horas)} minutos ⏱️ `)
