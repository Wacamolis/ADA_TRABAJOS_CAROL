/* Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con
valores numéricos de tu elección. Pide al usuario que ingrese un
número y verifica si está dentro del rango definido por las constante.

ENTRADA: 1 numero ingresado por el usuario
SALIDA: respuesta Si esta en el rango, No esta en el rango 

1. Pedir al usuario que ingrese un numero. 
2. Definir los rangos minimos y maximos.  <&&> 15-30
3. Responder si el numero que ingreso esta dentro del rango aceptado.

*/ 

const prompt = require("prompt-sync")({ sigint: true }); 

let numero = parseFloat(prompt(`Ingrese un numero : `))

if (numero > 15 && numero < 30) {
  console.log("El número que ingresó está dentro del rango aceptado ✅")
} else {
  console.log("El número ingresado está fuera del rango ❌");
}