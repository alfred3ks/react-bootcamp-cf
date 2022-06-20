/*

Promesas en JS.

JavaScript es un lenguaje de programacion asincrono que se ejecuta sobre un solo hilo.

Uno de los problemas que poseen los lenguajes de programcion de un solo hilo que si una operacion tarda mucho en ejecutarse, como puede ser una peticion a la base de datos, pues se bloquea el hilo hasta que que esta operacion no finaliza y el resto de operaciones no se pueden ejecutar.

Para solucionar esto JavaScript introduce o tiene el EVENT LOOP.

En la carpeta tenemos un pdf con unos apuntes graficos donde se puede ver como es esto del event loop.

La idea es que nosotros debemos identificar que tareas deberan ser asincronas y mandarlas a esa cola de tarea, el event loop estara revisando que tareas se van terminando y luego las ira sacando a medida que esten lista.

Para poder trabajar con el event loop JavaScript introduce el concepto de "promesas" que nos permiten definir codigo a ejecutarse cuando la tarea fue finalizada.

Una promesa es un tipo de objeto retornado por una operacion asincrona, utilizando este objeto podemos obtener el valor final de la operacion asincrona o sus errores.

Una promesa puede encontrarse en algunos de los siguiente estados:

- fullfiled: O completada, significa que la promesa se completo con exito.
- rejected: O rechazada, significa que la promesa no se completo con exito.
- pending: O pendiente que es el estado de la promesa cuando la operacion no ha terminado, aqui decimos que la promesa no se ha cumplido.
- settled: O finalizada, cuando la promesa termino ya sea con exito o con algun error.


*/
// Utilizamos fetch() una api del navegador para ver el ejemplo de las promesas.

let users = fetch("https://api.github.com/users/alfred3ks/repos")
    // console.log(users); // Retorna un objeto de tipo Promise.

    /*
    Como vemos nos retorna una promesa, un objeto, pero para ver el contenido del objeto que es lo que nos interesa, la informacion debemos usar tres metodos que se van a ejecutar cuando la operacion termine.
    */

    // Opcion una: Un poco mas lioso porque introduce mas al estilo de los callback
    .then(function (resultado) {
        console.log("Ya termino...");
        // console.log(resultado);
        resultado.json() // Metodo que tambien retorna una promesa
            // Aqui despues de la primera ejecucion asincrona ejecutamos otra para obtener el JSON
            .then(function (json) {
                console.log(json);
            })
    })

    // Con el metodo catch capturamos un posible error.
    .catch(function (err) {
        console.log("Peticion asincrona fallida");
        console.log(err);
    })

    // Independiente de que falle o no finally siempre se ejecutara.
    .finally(function (d) {
        console.log("Termino la peticion");
        console.log(d);
    })


//Opcion dos: Encadenando promesas.
let api = fetch("https://api.github.com/users/alfred3ks/repos")
    .then(function (resultado) {
        console.log("Ya termino...");
        return resultado.json() // Metodo que tambien retorna una promesa para evitar los callback
    })
    .then(function (json) {
        console.log(json);
    })
    .catch(function (err) {
        console.log("Peticion asincrona fallida");
        console.log(err);
    })

    .finally(function (f) {
        console.log("Termino la peticion");
        console.log(f);
    })