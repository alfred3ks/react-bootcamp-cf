/*

Array y Object destructuring. -> Asignacion por desestructuracion.

Se puede entender como desempacar los elementos de un objeto o de un arreglo en elementos individuales.

*/

// Arreglos:
let numeros = [10, 20, 56, 67, 122];
// La sintaxis consiste en mostrar a la inversa la estructura:
let [a, b] = numeros; // a y b son nombres arbitrarios, nos da desde cero hasta ...
console.log(a);
console.log(b);


// Objetos:
let usuario = {
    nombre: "Alfred",
    apellido: "Sánchez",
    edad: 47
}

let { nombre, edad } = usuario;
console.log(nombre); // Aqui no es arbitrario el nombre de la variable.
console.log(edad); // Aqui no es arbitrario el nombre de la variable.


// Podemos asignar un nuevo valor a la variable si es necesario y lo guardamos una nueva varaible:
let usuario2 = {
    nombre: "Luis",
    apellido: "Mol",
    edad: 32
}
let { nombre: username } = usuario2;
console.log(username);

