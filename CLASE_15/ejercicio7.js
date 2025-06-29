/* .includes(): Busca en el array el elemento que recibe como
parámetro y retorna un booleano.

Ejercicio 7: Verificar si una lista contiene un elemento
Tienes una lista de comidas 

["Pizza", "Hamburguesa", "Tacos"]. 

Verifica si "Sushi" está en la lista y muestra un mensaje que confirme si está o no. */

let comidas = ["Pizza", "Hamburguesa", "Tacos"]

let verificar = comidas.includes("sushi")

console.log(verificar ? "✅ Si esta en el menu" : "🚫 No esta en el menu")