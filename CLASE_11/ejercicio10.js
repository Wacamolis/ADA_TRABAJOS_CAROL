/* Ejercicio 10: Adivina el número
Consigna:
Crea un programa donde la computadora seleccione un número al azar entre 1
y 10. Luego, pide al usuario que adivine el número hasta 3 intentos. Si el usuario
acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén
los intentos restantes. Si no acierta después de los 3 intentos, muestra el
número secreto. Usa un for para resolver este ejercicio.

- La compu elige un número del 1 al 10.
- El usuario tiene 3 intentos para adivinarlo.
- Si acierta, se detienen los intentos y se muestra un mensaje 🎉.
- Si no acierta en los 3, se revela el número secreto 😬.

*/

const prompt = require("prompt-sync")({ sigint: true }); 

let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let acertado = false;

for (let i = 1; i <= 3; i++) {
    let intento = parseInt(prompt("Adivina adivinador, ¿Qué número estoy pensando? "));

    if (intento === numeroSecreto) {
        console.log("🎉 ¡Sí! Adivinaste el número");
        acertado = true;
        break; 
    } else {
        console.log("❌ No es ese, intenta otra vez.");
    }
}

if (!acertado) {
    console.log(`😢 No adivinaste. El número era ${numeroSecreto}`);
}