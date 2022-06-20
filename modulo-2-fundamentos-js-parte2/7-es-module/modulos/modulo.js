// Podemos exportar tanto variables como funciones usando la instruccion export:
export const name = "Alfred";

export function saludar() {
    console.log("Hola desde un modulo de JS.");
}

/*

Ahora vemos la siguiente declaracion de la variable, al no tener la instruccion export esa variable solo se tiene acceso dentro del modulo no desde fuera, solo estan dentro del alcance del modulo.

*/

let numeros = [1, 2, 3];

/*

Tambien desde un modulo yo puedo exportar un valor por defecto:

*/

export default {
    info: "Aqui exporto por default."
}

/*

Se puede exportar tanto la variable como la funcion pero recuerda eso es un objeto:

export default {
    name,
    saludar
}

luego la importacion usando cualquiera de las formas.

*/