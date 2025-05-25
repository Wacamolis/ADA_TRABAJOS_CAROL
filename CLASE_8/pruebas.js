//variables y constantes

let nombre = "carol";
const edad = 33;


console.log("Hola, mi nombre es " + nombre +  " y tengo " + edad + " años.")

console.log (`Hola, mi nombre es ${nombre} y tengo ${edad} años`)

console.log("------------------------")

//tipos de datos 

let numero = 42; // tipo de numero
let texto = "Hola"; // string o texto
let boolean = true; // tipo boolean true o false
let indefinido; // variable no iniciada undefined
let nulo = null // valor vacio o nulo 
let objeto = { mascota: "moli", raza: "shih tzu" }; // objeto con diferentes propiedades
let array = ["frutilla ", "manzana ", "naranja"] // array con diferentes valores

console.log(`Numero: ${numero}`);
console.log(`Texto: ${texto}`);
console.log(`Tipo boolean: ${boolean}`);
console.log (`indefinido` );
console.log(`Dato vacio`);
console.log(`Varios objetos: ${objeto}`);
console.log(`Array con varios valores: ${array}`);

console.log("------------------------")

//operadores aritmeticos

let a = 10;
let b = 3;

let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let division = a / b;
let modulo = a % b;

console.log("suma: ", suma);
console.log("resta: ", resta);
console.log("multiplicacion: ", multiplicacion);
console.log("division: ", division);
console.log("modulo: ", modulo)

console.log("------------------------")

// operadores de comparacion 

console.log(a > b); // responde true o false
console.log(a < b);
console.log(a === b); // === estrictamente igual
console.log(a === 10); // responde true porque es estrictamente igual
console.log(a === "10") // responde false porque el 10 esta como string 
console.log(a == "10") // es true porque == no compara tipo (entre string y numero)

console.log("------------------------")

// operadores logicos 

console.log(true && false) //  && AND - devuelve true solo cuando ambas son true
console.log(true || false) //  ||  OR - true si al menas una es true
console.log(!true) // ! NOT invierte el valor del booleano

console.log("----------- EJERCICIO DE EJEMPLO CONDICIONALES -------------")

// condicionales

/* Consigna: 
escribir la consignia del ejercicio */

let nota = 995

if (nota < 60) {console.log("REPROBADO")} 
else if (nota >= 60 && nota <= 89) {console.log("APROBADO")}
else if (nota >= 90 && nota <=100) {console.log("SOBRESALIENTE")}
else {console.log("EL NUMERO INGRESADO NO ES CORRECTO")}

console.log("----------- EJERCICIO 2 -------------")

/* Calculadora de descuentos
datos de entrada - precio original y porcentaje de descuento
datos de salida -  precio con descuento
*/

const prompt = require("prompt-sync")({ sigint: true }); 

// 1. pedir al usuario que ingrese el precio original del producto
let precioOriginal = parseFloat(prompt(`Ingrese el precio: `))

// 2. pedir al usuario el descuento
let porcentajeDescuento = parseFloat(prompt(`Ingrese el porcentaje de descuento: `))

// 3. calcular el descuento
let descuento = (precioOriginal * porcentajeDescuento / 100)

// 4. calcular el precio final 
let precioFinal = precioOriginal - descuento

// mostrar precio al usuario
console.log(`El precio con descuento es: `, precioFinal)