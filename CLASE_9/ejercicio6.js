/* Pide al usuario que ingrese su edad y verifica si es mayor o menor de
edad. Muestra un mensaje personalizado según el caso.
ENTRADA: Nombre y edad (numero)
SALIDA: respuesta

1. Pedir al usuario su nombre y su edad )numero=
2. ver si la edad es mayor a 18 o no. (>=) / positivo o negativo ? :
3. Resultado: Lo siento NOMBRE, aun eres menor de edad. / ¡Hola nombre, bienvenido! Tienes la edad permitida para ingresar. 

*/

const prompt = require("prompt-sync")({ sigint: true }); 

let nombre = prompt("Ingresa tu nombre: ")
let edad = parseFloat(prompt("Para acceder, ingresa tu edad: "))

let accesoPermitido = edad >= 18

const mensaje = accesoPermitido
    ? `¡Hola ${nombre}, bienvenid@! Tienes la edad permitida para ingresar.`
    : `Lo siento ${nombre}, aun no tienes la edad sufiente para ingresar.`

    console.log(mensaje)