/* Ejercicio 10: Flores Favoritas
Escribe un programa en JavaScript para contar cuántas veces el usuario
menciona sus flores favoritas. Realiza las siguientes acciones:
1. Inicializa un array vacío para almacenar las flores favoritas.
2. Pregunta al usuario por sus tres flores favoritas utilizando prompt y
agrega cada una al array manualmente (sin usar métodos como push).
3. Pregunta al usuario por una flor específica y verifica si está entre sus
favoritas.
4. Muestra por consola cuántas de las flores favoritas se mencionaron (esto
debe hacerse manualmente). */


const prompt = require("prompt-sync")({ sigint: true });

console.log("Ingresa tus 3 flores favoritas");


let floresFavoritas = []

for (let i = 0; i <= 2; i++) {
    let flor = prompt(`Ingresa tu flor ${i + 1}/3: `).toLowerCase()
    floresFavoritas[i] = flor
}

let florBuscada = prompt("🌸 ¿Qué flor deseas buscar?: ").toLowerCase();

let coincidencias = 0;

for (let i = 0; i < floresFavoritas.length; i++) {
  if (floresFavoritas[i] === florBuscada) {
    coincidencias++;
  }
}

if (coincidencias > 0) {
  console.log(`✅ La flor "${florBuscada}" está entre tus favoritas (${coincidencias} vez/veces).`);
} else {
  console.log(`❌ La flor "${florBuscada}" no está en tu lista de favoritas.`);
}

