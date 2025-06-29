/* Ejercicio 5: Verificar origen del auto
Solicita al usuario ingresar la marca de un auto y utiliza una función flecha
para verificar y mostrar si el auto es de origen nacional o importado.
Considera que solo los autos de marcas "Chevrolet" "Ford" y "Fiat" son de
origen nacional.

✔ Solicita al usuario que ingrese la marca de un auto.
✔ Utiliza una función flecha para determinar si la marca ingresada
corresponde a un auto de origen nacional o importado.
✔ Muestra un mensaje indicando si el auto es de origen nacional o
importado, basado en la marca ingresada por el usuario. */

const prompt = require("prompt-sync")({ sigint: true });

console.log("VERIFICAR ORIGEN DEL AUTO 🚗")

let marcaIngresada = prompt("Ingrese la marca de su auto: ").toLowerCase()

let verificarMarca = (marca) => {
    switch (marca) {
    case "chevrolet":
    case "ford":
    case "fiat":
      console.log("El origen de la marca de su auto es NACIONAL📍");
    break;
    default: 
        console.log("El origen de su auto es IMPORTADO 🌎")
    }
}

verificarMarca(marcaIngresada)