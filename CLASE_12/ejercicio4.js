/*  Ejercicio 4: Ciclo For - Array
Crear un programa que permita registrar las notas de varios estudiantes usando
arrays y mostrarlas por pantalla:

Crear un array para almacenar las notas.
Define un array vacío llamado notas donde almacenaremos las notas de los
estudiantes.
Pide al usuario que ingrese las notas de varios estudiantes una por una
utilizando el método prompt.
Usa un bucle for para solicitar las notas y asignarlas directamente a
posiciones específicas del array notas.
Imprime en consola las notas ingresadas usando el array notas.

*/

const prompt = require("prompt-sync")({ sigint: true });

let notas = [];

let cantidadNotas = parseFloat(prompt("¿Cuantas notas deseas ingresar? ")
)

for(let i = 0; i < cantidadNotas; i++) {
    let nota = parseFloat(prompt(`Ingresa la nota no. ${i + 1}: `))
    notas[i] = nota;
}

console.log("📚 Notas ingresadas: ", notas);