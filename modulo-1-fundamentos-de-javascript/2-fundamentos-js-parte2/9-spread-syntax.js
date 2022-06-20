/*

Spread syntax o la sintaxis de expansion:

Para saber cuando y como podemos introducir la sintaxis de expansion debemos conocer el concepto de iterables.

Un objeto en JS es iterable cuando puede ser separado y recorrido en partes. Cuando pensamos en iterables lo que nos viene a la mente son los arreglos. Per tambien hay otros iterables como las cadenas, los objetos, etc.

La Spread syntax nos permite expadir los elementos que hay en un iterable para que los podamos usar en distintas operaciones. Estas operaciones pueden ser clones, combinar dos iterables entre si, y mas operaciones que veremos.

Veamos un ejemplo:

*/

let numeros = [12, 56];
console.log(numeros);

function suma(a, b) {
    return a + b;
}

// La pregunta como podriamos enviar esos elementos para que sean sumados:
let resultado = suma(numeros[0], numeros[1]); // Esta es una opcion
console.log(resultado);

// Asi seria con la opcion de spread syntax:
let spread = suma(...numeros); // -> es como hicieramos suma(12,56)
console.log(spread);

/*

Lo anterior es una opcion de usar spread syntax pero donde mas brilla en cuando duplicamos un iterable: Esto esta muy bien para no modificar el original.

*/

let numerosCopia = [...numeros];
console.log(numerosCopia);

/*

Tambien lo podemos hacer para combinar dos arreglos: Tampoco alteramos los originales.

*/

let fruits = ['apple', 'orange', 'pears'];
let combinacion = [...numeros, ...fruits];
console.log(combinacion);

/*

Esto mismo lo podemos usar en objetos:

*/

let usuario = {
    nombre: "Laika",
    edad: 1,
    fun: function () {
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

console.log(usuario);

// Hacemos una copia de ese objeto:
let copiaUsuario = {
    ...usuario,
    ladra: true,
    activa: true
}

console.log(copiaUsuario);

/*

Tambien si tenemos 2 objetos los podemos unir tambien:

*/

let estudiante = { nombre: "Chris" };
let calificaciones = {
    mate: 10,
    lengua: 10,
    computer: 10
};

let final = { ...estudiante, ...calificaciones };
console.log(final);
