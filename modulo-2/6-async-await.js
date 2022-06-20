/*

Programacion asincrona usando async await. Esto es la continuacion de la clase de promesas.

En JS se ha introducido este sistema de sincronizacion asincrono.

Las funciones asincronas permiten que usemos expresiones await dentro del cuerpo de la funcion.

Estas expresiones nos permiten trabajar con promesas como si fueran codigo sincrono.

Los errores los manejamos con un bloque try{} catch{}

De fondo usar async await se puede decir como azucar sintactico, en el fondo usan promesas.

*/

// let users = fetch("https://api.github.com/users/alfred3ks/repos")

// Async await con funciones:
async function leerRepos() {
    try {
        let response = await fetch("https://api.github.com/users/alfred3ks/repos");
        console.log(response); // Aqui vemos la respuesta de la peticion. Objeto response. Tarea asicrona
        let json = await response.json(); // Tarea asincrona
        console.log(json);
    } catch (err) {
        console.log("Error:" + err);
    }
}

leerRepos();
let result = leerRepos();
console.log(result); // Aqui vemos que retorna una promesa.

/*

Por cada operacion asincrona debemos usar await, las funciones asincronas simpre retornan una promesa.

*/