/*

Rest Operator - Operador rest.

Podemos pensar en este operador como el inverso de spread operator.
Este nos permite agrupar los sobrantes en una operacion para una funcion.

Este operador tambien es con los tres punto ... igual que el spread syntax.

Rest Operator(...)
Spread Operator(...)

Dependera de que escenario se usa sera uno u otro.

*/

// En el caso de pasarlo como argumento:
function suma(a, b, ...resto) {
    console.log(resto); // Obtenemos un iterable [] [ 7, 34, 67, 'Luis' ]
    return a + b;
}

suma(1, 4, 7, 34, 67, 33, 150, "Luis");

/*

El resultado de resto se agrupan en un iterable con nombre de que pongamos despues de los 3 puntos, esto esta muy bien porque lo podemos combinar con la desestructuracion que vimos anteriormente.

*/

let numeros = [1, 4, 7, 34, 67, 200, 'Pepe', 45, 56];
let [a, b, c, ...otros] = numeros;
console.log(a, b, c);
console.log(otros);

/*

Esto tambien funciona con objetos:

*/

let usuario = {
    nombre: "Diego",
    apellido: "Marcano",
    edad: 11,
    intereses: ['NBA', 'MLB'],
    dev: true
}

let { nombre, apellido, ...restoObj } = usuario;
console.log(nombre, apellido);
console.log(restoObj);

/*

Tambien puede darse el caso que tenemos un objeto y queremos eliminar parte de el y conservar lo que nos interesa: Aqui combinamos el operador rest y desestructuracion.

*/

let obj = {
    nombre: "Uriel",
    edad: 29,
    intereses: ['JavaScrip', 'ReactJS']
}

let { intereses, ...resto } = obj;
console.log(intereses);

/*

Vamos a ver unos ejemplos para ver cuando es spread operator y rest operator.

*/

console.log("spread:");
function testA(a, b, c) {
    console.log(a, b, c);
}

let num = [1, 2, 3, 4, 6, 67, 45];
testA(...num); // Aqui tenemos spread, se esta expandiendo.

console.log("rest:");
function testB(a, b, ...numDos) {
    console.log(a, b);
    console.log(numDos);
}

testB(3, 4, 5, "Luis", true); // Aqui tenemos es rest, lo junta todo en un arreglo

