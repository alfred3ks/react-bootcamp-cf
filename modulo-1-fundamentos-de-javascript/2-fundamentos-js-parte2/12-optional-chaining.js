/*

Esto es algo mas moderno dentro del lenguaje, se introdujo para cersiones modernas del lenguaje:
Cuya sintaxis:

Un signo de interrogacion y un punto -> (?.)

Es muy similar al operador de ancadenamiento que es el del punto (.) Este nos permite acceder a la propiedad o metodos de un objeto.

Optinal Chaining (?.)
Chaining (.)

*/

let usuario = {
    nombre: "Homer"
}

console.log(usuario.nombre);
console.log(usuario?.nombre);

console.log(usuario?.calificaciones?.promedio);
usuario.promedio?.();

/*

La respuesta aqui es la misma, pero la principal diferencia esta en cuando usamos Optional Chaining no es necesario verificar si algunas de las referencias son nulas.

Cuando usamos el opedor optional y tratamos de acceder a una propiedad o metodo que no existe nos arroja un error:

console.log(usuario?.calificaciones?.promedio);
TypeError: Cannot read properties of undefined (reading 'promedio').

En cambio si usamos el optional chaining no nos da fallo nos da undefined porque no existen las propiedades pero la app no se rompe.

Esto tambien lo podemos usar con funciones:

usuario.promedio();
TypeError: usuario.promedio is not a function

Aqui es poco mas raro porque se coloca antes de los parentesis:
usuario.promedio?.(); Ya ni se ejecuta y no da fallo.

Este operador es muy interesante para estructuras mas complejas donde no conocemos si vamos tener un undefined y hara que la app se rompa.

*/
