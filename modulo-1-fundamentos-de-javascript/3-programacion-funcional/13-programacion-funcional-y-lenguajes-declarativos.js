/*

Este es el temario de esta seccion:
- Introduccion,
- Lenguajes imperativos y declarativos,
- Programacion funcional,
- Efectos secundarios,
- Funciones puras.
- High Order Funtions,
- Map, Filter, Reduce, ForEach,
- Inmutabilidad,
- Ventajas y desventajas.

La programacion funcional es un paradigma de programacion basado en el uso de funciones.
Podemos dividir los lenguajes de programacion en dos grandes grupos:

Lenguajes imperativos vs lenguajes declarativos.

Los lenguajes imperativos son aquellos que necesitan recibir instrucciones especificas sobre que tienen que hacer, hacia que parte del codigo moverse, cuantas repeticiones hacer, para poder solucionar un problema.

- python,
- ruby,
- javascript,
- php.

Los lenguajes declarativos por su parte s trata de decir que quiero sin preocuparte por los detalles, este tipo de lenguajes debe existir un interprete que tome estas decisiones y las ejecute.

- css,
- sql.

Un mismo lenguaje puede implementar diferentes paradigmas.

*/

// Veamos un ejemplo de como hacer una misma cosa de diferentes formas: Encontrar el cuadrado de un array de numeros.

// Opcion 1: Programacion imperativa
let numeros = [1, 2, 3, 4];
let cuadrados = [];

for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    cuadrados.push(numero * numero);
}

console.log(cuadrados);

// Opcion 2: Programacion declarativa
let cuadra = numeros.map(numero => numero * numero);
console.log(cuadra);

// En general la programacion funcional tiende mas hacia la programacion declarativa.
