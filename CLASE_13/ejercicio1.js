/* Ejercicio 1: Área de un triángulo (función declarada) (Ejercicio entrevista)
Crea una función declarada llamada calcularAreaTriangulo que reciba dos
parámetros: la base y la altura de un triángulo. La función debe devolver el
área del triángulo.
*/


const prompt = require("prompt-sync")({ sigint: true });

let base = parseFloat(prompt("Ingrese la base del triangulo: "));
let altura = parseFloat(prompt("Ingrese la altura del triangulo: "));

function calcularAreaTriangulo(base, altura) {
  let area = base * altura;
  return area;
}

let resultado = calcularAreaTriangulo(base, altura);
console.log("△ El area del triangulo es:", resultado);