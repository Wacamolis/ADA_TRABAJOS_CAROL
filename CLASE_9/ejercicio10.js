/* Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la
semana correspondiente. Si el número no está dentro de ese rango,
muestra un mensaje de error. 
ENTRADA: Numero del 1 al 7 
SALIDA: Respuesta dia o error

1. pedir al usuario un numero del 1 al 7 
2. definir dia de la semana y dia
3. definir las respuesta: El dia x de la semana es / Por favor, ingrese un numero valido (1-7)
*/

const prompt = require("prompt-sync")({ sigint: true }); 

/*
let numero = parseFloat(prompt(" 📅 Por favor, ingrese un numero del 1 al 7: "))

if (numero === 1){
    console.log(`El dia ${numero} de la semana es lunes`)
} else if (numero === 2) { 
    console.log(`El dia ${numero} de la semana es martes`)
} else if (numero === 3) {
    console.log(`El dia ${numero} de la semana es miercoles`)
} else if (numero === 4) {
    console.log(`El dia ${numero} de la semana es jueves`)
} else if (numero === 5) {
    console.log(`El dia ${numero} de la semana es viernes`)
} else if (numero === 6) {
    console.log(`El dia ${numero} de la semana es sabado`)
} else if (numero === 7) {
    console.log(`El dia ${numero} de la semana es domingo`)
} else {
    console.log(`Por favor, ingrese un numero valido (del 1 al 7)`)
}
*/
// solucion con array / 7 numeros, los arrays empiezan con 0, asi que se le tiene que restar 1

let numero = parseFloat(prompt(" 📅 Por favor, ingrese un numero del 1 al 7: "))
let dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]

if (numero >= 1 && numero <= 7) {
    console.log(`El dia ${numero} de la semana es ${dias[numero - 1]}`)
} else {
    console.log(`Por favor, ingrese un numero valido (del 1 al 7)`)
}