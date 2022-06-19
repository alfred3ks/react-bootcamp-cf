/*

En JS un argumento puede ser enviado por valor o por referencia.

Decimos que un argumento ha sido enviado como referencia cuando el parametro apunta a la misma direccion que el argumento original.

Decimos que un argumento ha sido enviado como valor cuando el argumento enviado es copiado en una direccion distinta del parametro original.

Vamos a aclarar unos conceptos importantes, parametros y argumentos.

function imprimir(parametros){
    console.log(parametros);
}
imprimir("argumentos");

Los parametros son los declaramos en los parentesis de la funcion y los argumentos los que pasamos cuando ejecutamos la funcion.

Los argumentos lo que se envia, son almacenados en parametros. Que son los que entran en la funcion.

*/

function imprimir(parametros) {
    console.log(parametros);
}
imprimir("argumentos.");

/*
Cuando pasamos argumentos a las funciones:

Los objetos y los arreglos son enviados por referencia.
Todo lo demas es enviado por valor.

Veamos un ejemplo:

*/

// Eviamos parametros por valor:
console.log("Paramatros por valor:-------------------------");
function saludar(nombre) { // Aqui nombre = "Alfred"
    console.log(nombre);
    nombre = "Cody"; // Yo modifico aqui la variable pero fuera no se modifica su valor
    console.log("Hola " + nombre);
}

let n = "Alfred";
saludar(n);
console.log(n); // Aqui vemos que la variable original no se ha modificado.

// La variable n es enviada a la funcion y se guarda su valor en nombre = "Alfred", por eso es valor no de n no cambia.

// Eviamos parametros por referencia:
console.log("Paramatros por referencia: Arreglos: -------------------------");
function imprimeNum(arreglo) { //arreglo y numeros apunta a la misma referencia en memoria
    console.log(arreglo);
    arreglo[3] = 100; // aqui modificamos el arreglo
    console.log("Ahora el arreglo es: " + arreglo);
}

let numeros = [1, 2, 3];
imprimeNum(numeros);
console.log(numeros); // Aqui vemos como el arreglo original tambien se ha modificado.

// Esto pasa porque aqui el valor se esta pasando por referencia.

// Lo mismo pasa con los objetos:
console.log("Paramatros por referencia: Objeto: -------------------------");
function escribir(obj) {
    obj.nombre = "Luis";
}
let objeto = {};
console.log(objeto);
escribir(objeto)
console.log(objeto); // Se ha modificado el objeto original.

/*

¿Pero porque todo esto es importante?

Durante el trabajo con ReactJS aprenderas del concepto de efectos secundarios y los valores pasados por referencia son una puerta a que se una funcion produzca efectos secundarios.

*/