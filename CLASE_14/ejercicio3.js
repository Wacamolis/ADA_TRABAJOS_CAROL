/* Ejercicio 3: Clasificación de edades
Solicita al usuario una edad y usa una función flecha para clasificarla en
niño, adolescente, adulto o adulto mayor.
*/

const prompt = require("prompt-sync")({ sigint: true }); 

console.log("CLASIFICACION DE EDADES");

let edad = parseInt(prompt("Ingresa tu edad: "))

let clasificacion = a => {
    if (a <= 13) {
        return "Eres un niñito bebe 👦🏻"
    } else if (a > 13 && a < 18){
        return "Eres un adoleescente de la chavisa 🧑🏻‍🦱"
    } else if (a >= 18 && a < 60){
        return "Eres todo un adulto responsable 👨🏻"
    } else {
        return "Eres un viejito pasita 👴🏻"
    }
}

console.log (clasificacion(edad))