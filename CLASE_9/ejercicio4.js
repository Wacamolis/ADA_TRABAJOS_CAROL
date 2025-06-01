/*  Declara una variable nombre y pide al usuario que ingrese su nombre.
Verifica si el nombre ingresado es igual a tu nombre.

ENTRADA: nombre del usuario
SALIDA: Somos tocayos / No somos tocayos 

1. pedir el nombre al usuario 
2. comparar el nombre ingresado con el mio (carol)
3. respuesta: WOW! Hola tocaya, mi nombre tambien es carol / Lo siento xxx, no somos tocayas */

const prompt = require("prompt-sync")({ sigint: true }); 

let miNombre = "carol" 
let nombreUsuario = prompt("Ingresa tu nombre: ")

if (miNombre === nombreUsuario) {
    console.log(`Hola tocaya, mi nombre tambien es carol`)
} else {console.log(`Lo siento ${nombreUsuario}, no somos tocayas`)
}

