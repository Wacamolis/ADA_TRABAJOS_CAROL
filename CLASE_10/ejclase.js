/*Simular un sistema de ingreso a una nave espacial donde los tripulantes deben pasar filtros de validación usando variables, coerción, y operadores lógicos.
Creen un script que haga lo siguiente:
*/
const prompt = require("prompt-sync")({ sigint: true }); 

// 1. nombre, edad y especie
let nombre = prompt(`Ingresa tu nombre esPAcial: `)
let edad = parseInt(prompt(`¿Cuántas vueltas le has dado al sol? `))
let especie = prompt(`Ingrese su especie (Humano, alien o cyborg): `)

// 2. definir si tienen permiso de subir. if 
let tienePermiso = (edad >= 18 && especie !== "") // con esto especie !== "" le decimos que especie no puede ir vacio. (negacion estricta)
|| (nombre === "sticht")  

const mensaje = tienePermiso
    ? `Bienvenido a bordo ${nombre || "tripulante desconocido"}!` // tab ? para ahorrarnos el if para sentencias positivas / verdaderos IFTERNARIO
    : "Lo sentimos, su acceso ha sido denegado";    // tab : mensaje negativo / o false IFTERNARIO

console.log(mensaje)

// el ifternario solo es para positivo y negativo