/* Ejercicio 4: Calcular descuento por cantidad
Solicita al usuario la cantidad de productos comprados y el precio unitario.
Usa una función flecha para calcular el total con descuento según la
cantidad. 

3 productos 5%
6 productos  10%
12 productos 25
*/ 

const prompt = require("prompt-sync")({ sigint: true });

console.log("CALCULADORA DE DESCUENTO POR CANTIDAD")

let cantidad = parseFloat(prompt("Ingrese la cantidad de productos: "))
let precio = parseFloat(prompt("Ingrese el precio unitario: Q"))

let calcularDescuento = (cantidad, precio) => {
  let descuento = 0; 

 if (cantidad >= 12) {
    descuento = 25;
  } else if (cantidad >= 6 && cantidad < 12) {
    descuento = 10;
  } else if (cantidad >= 3 && cantidad < 6) {
    descuento = 5;
  }

  let totalSinDescuento = cantidad * precio;
  let totalConDescuento = totalSinDescuento - (totalSinDescuento * descuento / 100);

  return { 
    totalSinDescuento, 
    totalConDescuento
  }
}

let { totalSinDescuento, totalConDescuento } = calcularDescuento(cantidad, precio);

console.log(`🧾 Total a pagar con descuento: Q${totalConDescuento} (precio regular: Q${totalSinDescuento})`)
