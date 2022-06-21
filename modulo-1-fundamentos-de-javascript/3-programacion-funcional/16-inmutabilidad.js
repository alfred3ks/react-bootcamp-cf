/*

Inmutabilidad es el concepto con que nos referimos a un objeto que no puede modificar su valor.

Este concepto va de la mano con la programacion funcional, pues es parte de que podamos implementar funciones puras, que por ejemplo que trabajen con objetos y arreglos.

Los tipos primitivos como cadenas y numeros en JavaScript son inmutables.

En un sistema inmutable, los valores pueden ser reemplazados pero la estructura no debe ser modificada.

*/

let nombre = "Cody";
nombre = "Ummo"; // Podemos reemplazar pero la cadena original no cambia.

nombre[1] = "Y"; // Aqui vemos que no las podemos modificar son inmutables.
console.log(nombre);

// Los objetos y las arreglos son mutables, osea los podemos cambiar:
const usuario = {
    nombre: "Pepe",
    edad: 22
}

console.log(usuario);
usuario.apellido = "Soto"; // Esto es una mutacion estamos cambiando el original, esta mutando:
console.log(usuario);

// Los arrays igual son mutables, podemos modificar el original:
let edades = [10, 12, 15, 17];
edades[1] = 13;
edades.push(23);
console.log(edades);

/*

Imaginemos que nos dan un objeto, y nos piden que no se modifique el objeto original, debemos agregar una nueva propiedad, como lo haremos? recordar el spread operator y rest operator.

Tambien has lo mismo con un arreglo, cambian el valor de la posicion 1 por el valor de 8.

*/

// Objeto:
const user = {
    nombre: "Jaime",
    edad: 22
}

const userNew = { ...user, apellido: "Perez" }
console.log(user);
console.log(userNew);

// Arreglo:
const numeros = [100, 124, 234, 900];
// const numerosNew = numeros.map((num, pos) => pos === 1 ? 8 : num);
const numerosNew = numeros.map((num, pos) => {
    if (pos === 1) {
        return num = 8;
    } else {
        return num;
    }
});
console.log(numeros);
console.log(numerosNew);

// Vamos a ver como hacer un nuevo arreglo con una funcion:
let numArreglo = [12, 45, 2, 56];
// let nuevoArr = [...numArreglo];

let nArr = (arreglo, numero) => [...arreglo, numero]; // No muta el original.
console.log(nArr(numArreglo, 34));


// Una opcion de recibir un arreglo y no modificarlo creando uno nuevo:
let miArr = [12, 22, 45, 7];
let nuevoArr = (arr, num) => {
    // Hacemos una copia del array original y no lo modificamos
    let n = [...arr];
    // console.log(`arreglo: ${n}`);
    n.push(num);
    return n;
}

let a = nuevoArr(miArr, 22)
console.log(a);
a = nuevoArr(a, 45);
console.log(a);
a = nuevoArr(a, 8);
console.log(a);
a = nuevoArr(a, 78);
console.log(a);

