/* UNSHIFT agregar al inicio de la lista 
SHIFT muestra el primero de la lista

Ejercicio 3: Agregar y eliminar a la fila de mascotas
Tienes una fila de mascotas en una clínica veterinaria 

["Perro", "Gato", "Conejo"].

Llega un "Hámster" que debe ser atendido primero. 

Agrega el "Hámster" al inicio de la lista. 
Luego, atiende a la primera mascota de la fila y muéstrala. Finalmente, muestra la lista actualizada.
*/

console.log("HOSPITAL DE MASCOTAS 🏥");


let mascotas = [" Perro", " Gato", " Conejo"]

let urgencia = mascotas.unshift("Hamster")

console.log(`📋 La lista de espera actual: ${mascotas}`);

let atendida = mascotas.shift();

console.log(`✅ Se atendio a ${atendida}`);

console.log(`📋 Lista de espera actualizada: ${mascotas}`);
