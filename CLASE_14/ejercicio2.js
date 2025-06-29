/* Ejercicio 2: Calcular promedio de calificaciones
Solicita al usuario cinco calificaciones y usa una función flecha para calcular
el promedio

*/ 

const prompt = require("prompt-sync")({ sigint: true });

console.log("📚 CALCULADORA DE PROMEDIOS");

let notas = [];

for (let i = 0; i < 5; i++) {
  let nota = parseFloat(prompt(`Ingresa la calificación No. ${i + 1}: `));
  notas.push(nota);
}

let calcularPromedio = (array) => {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  return suma / array.length;
};

let promedio = calcularPromedio(notas)

console.log(`El promedio de las calificaciones es: ${promedio}`)