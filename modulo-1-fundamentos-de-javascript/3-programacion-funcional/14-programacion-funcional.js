/*

¿Que es la programación funcional? Paradigna.

Aunque existen detalles matematicos alrededor del trabajo en programacion funcional, abordaremos el concepto desde la perspectiva practica.

Escribir un programa funcional es similar a definir una rutina con distintos pasos donde cada paso es una funcion.

Este proceso se le conoce como pipelining.

Para poder lograr esto se aplican algunas reglas: OJO con esto.

- Funciones de responsabilidad unica(una sola tarea),
- Funciones puras(no producen efectos secundarios).

Vamos a ver que es eso de los efectos secundarios:

Decimos que una funcion produce efectos secuandarios cando interactua con elementos que estan fuera del cuerpo de la funcion.
Una funcion debe recibir la informacion via parametros y comunicar los resultados via el retorno.

Algunos ejemplos de efectos secundarios son:
- Usar una variable global,
- Modificar una variable de referencia,
- Imprimir logs,
- Llamar a una base de datos,
- Hacer una llamada a una API,
- Modificar algo en pantalla,
- Escribir en un archivo. etc.

Lo que se busca em programacion funcional es escribir funciones que no generen efectos secundarios y por consecuencia sean funciones puras.

Funciones puras:
Una funcion es pura si es determinista y si no produce efectos secundarios.
Decimos que algo es determinista cuando podemos determinar el resultado que tendra una operacion.
Veamos unos ejemplos:

*/
// Funcion impura:
let num1 = 20;
let num2 = 10;

function suma() {
    console.log(num1 + num2);
}
suma();
/*

Porque es impura:
- Usa variables globales,
- Imprime por consola.

Esta funcion no es determinista porque no estamos seguro de que num1 y num2 seran siempre igual.

*/

// Veamos otro ejemplo: Funcion impura, mirarlo en el navegador
async function leerRepos() {
    let response = await fetch("https://api.github.com/users/alfred3ks/repos");
    let repos = await response.json();
    // console.log(repos);
    repos.forEach(element => {
        console.log(element.name);
    });
}

leerRepos();

/*

Tiene una llamada a una API externa y imprime por consola.
Esta funcion no es determinista:
- Puede fallar si la API no esta disponible.
- Entrega diferentes resultados segun la respuesta de la API cambie.
- Puede fallar si los logs no estan disponibles o si algo falla al escribir en los logs.

Ahora:
Todos los programas siempren producen efectos secundarios. Una funcion o programa que no produzca efectos secundarios es el que no hace nadaaaa.

Entonces como podemos trabajar con funciones puras? veremos como mejorar las funciones anteriores.
En un programa diseñado de manera funcional buscamos tener un core de funciones puras con la logica del negocio y en el exterior las tareas que finalmente producen efectos secundarios.

En la carpeta assets tenemos una imagen FPURAS.png donde se puede ver esto que he explicado.

Ahora veamos el siguiente escenario:
Se nos pide sobre un problema:
- Debes extraer los valores de un excel,
- Debes ejecutar un calculo sobre esos valores.
Por ejemplo mi funcion haria:
- Abrir excel,
- Leer los valores,
- Guardar los valores en un arreglo,
- Ejecutar calculo sobre arreglo.

Pero como podriamos evaluar que el ejecutar los calculos sobre en el arreglo lo hace correctamente?, si piensas en pruebas unitarias bueno eso seria una buena respuesta para validar los datos. Pero en un programa donde no existe esa separacion tendriamos que preparar un entorno de pruebas super complejo que haga simulaciones el funcionamiento de la funcion y eso suena y es complejo.

Sin una separacion tendriamos que preparar un entorno de pruebas que simule el trabajo con e excel, para isolar el calculo y luego testearlo. Ver imagen 1. Los pasos.

Lo mejor seria separarlo, ver figura 2.

Tendriamos una funcion para hacer cada cosa, una para abrir excel, otra para ller los datos y otra para hacer el calculo.

Entonces podemos decir:
En un programa de programacion funcional tenemos una serie de funciones puras que manejan la logica de negocio y luego una capa que usa estas funciones y que producen efectos secundarios.

Vamos a solucionar los ejemplos anteriores:

*/


function obtenerReposName(repos) {
    return repos.map(repo => repo.name)
}

function imprimirRepos(repos) {
    repos.forEach(element => {
        console.log(element);
    })
}

async function leerRepos() {
    let response = await fetch("https://api.github.com/users/alfred3ks/repos");
    let repos = await response.json();
    return repos;
}

let repos = leerRepos().then(function (repos) {
    let reposName = obtenerReposName(repos);
    imprimirRepos(reposName);
});





