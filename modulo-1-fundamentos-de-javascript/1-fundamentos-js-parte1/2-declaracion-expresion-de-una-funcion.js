/*

Vamos a empezar con el primer punto que son las funciones.

En JS y particularmente en el desarrollo de React las funciones son importantes, de hecho esto se refleja en la evolucion que ha tenido React como framework que paso del uso de clases a funciones.

Hoy vamos a ver de manera practica todo sobre funciones.

Declaracion de funciones:

Existen dos formas de declarar una funcion:
- Declaracion de funciones,
function saludar(){

}
saludar();

- Expresiones de funciones.
let a = function(){

}

a();

La principal diferencia entre ellas es que cuando usamos declaracion de funciones el nombre es obligatorio y comienzan siempre con la palabra fuction, sin embargo cuando usamos expresion de funciones el nombre es opcional.

*/

// Declaracion de funciones:
function saludar() {
    console.log("Hola");
}

saludar();

// Expresion de funciones:
let f = function () {
    console.log("Hola..");
}

f();

/*

Una de las cosas que pasa con JS es que mueve la declaracion de la funcion y de las variables a lo mas alto del alcance.

Eso es un proceso dentro del lenguaje que se llama Hoisting.

En terminos practico que se muevan las declaraciones a lo mas alto del alcance, significa que nosotros podemos utilizar una funcion incluso antes de que aparezca en el codigo.

*/

// Veamos un ejemplo: OJO en Node y el navegador solo funciona con funciones de declaracion en funciones de expresion da fallo:
cantar();

function cantar() {
    console.log("Estoy cantando lara lara lara 🙉🙉");
}

/*

El proceso de hoisting se aplica en funciones de declaracion, en funciones de expresion esto no se aplica. Tanto en Node como en el navegador da fallo.

Ahora debemos comentar que cuando estamos usando la sintaxis de expresion de una funcion podemos usar una sintaxis alternativa, que son las arrow fuction:

funciones de flechas.

*/

let bailar = () => {
    console.log("Estoy bailando...💃");
}

bailar();

/*

En resumen:

- Una funcion puede ser creada con una declaracion de funcion o una expresion de funcion.
- Las delcaraciones de funcion se mueven al principio del alcance, por lo que pueden ser uadas antes de aparecer en el codigo, a esto se le llama hoisting.
- Las expresiones de funcion pueden o no tener nombre.
- Las expresiones de funcion sin nombre, se les conoce como funciones anonimas.
- Las expresiones de funcion pueden usar la sintaxis de flecha.

*/