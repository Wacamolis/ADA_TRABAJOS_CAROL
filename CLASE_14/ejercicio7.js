/* Ejercicio 7: Libros
Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
✔ título: una cadena con el título del libro.
✔ autor: una cadena con el nombre del autor del libro.
✔ anioPublicacion: un número con el año de publicación del libro.
Luego, crea una función llamada mostrarLibro que tome un arreglo de libros
como parámetro y muestre por consola la información de cada libro en el
formato especificado.

*/

let libro1 = {
    titulo: "Cien años de soledad",
    autor: "Gabriel Garcia Márquez",
    anioPublicacion: 1967,
}

let libro2 = {
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    anioPublicacion: 1605,
}

function mostrarLibro(listaDeLibros) {
  for (let libro of listaDeLibros) {
    console.log(`📖 "${libro.titulo}" - ${libro.autor} (${libro.anioPublicacion})`);
  }
}

let biblioteca = [libro1, libro2];

mostrarLibro(biblioteca);