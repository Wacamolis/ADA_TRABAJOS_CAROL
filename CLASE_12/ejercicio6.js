/* Ejercicio 6: Iguales a 10 pero menores de 1000
Dada una matriz, recorrer sus valores y sumar solo los números que estén por
encima o sean iguales a 10, pero menores que 1000. */

let matriz = [
  [10, 8, 96, 500],
  [240, 5, 87, 3],
  [56, 2, 4, 999],
  [57, 90, 1, 0]
]; 

let suma = 0
for(let i = 0; i < matriz.length; i++) { 
    for (let j = 0; j < matriz[i].length; j++) {
          let valor = matriz[i][j];
            if (valor >= 10 && valor < 1000) {
            suma += valor;
    }
  }
}

console.log("✅ La suma de los valores entre 10 y 999 es: ", suma);