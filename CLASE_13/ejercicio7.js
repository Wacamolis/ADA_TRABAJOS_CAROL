/* Ejercicio 7: Mensaje según la hora
Declara una variable global llamada horaActual (puedes asignarle un valor fijo). 

Crea una función declarada llamada mostrarSaludo que imprima 
"Buenos días" si la hora es menor a 12, 
Buenas tardes si la hora es menor a 18 
"Buenas noches' en cualquier otro caso.
*/

const prompt = require("prompt-sync")({ sigint: true });

let horaActual = parseInt(prompt("🕡 Que hora es? (formato 24hs): "))

function mostrarSaludo(hora){
    if (hora <= 12 && hora >=6) {
    return "Buenos dias ☀️" 
    } else if (hora <= 18 && hora > 12) {
        return "Buenas tardes 🌤️"
    } else {
        return "Buenas noches 🌙"
    }
}

console.log(mostrarSaludo(horaActual));