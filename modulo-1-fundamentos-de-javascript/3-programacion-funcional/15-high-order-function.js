/*

High Order Functions: HOF.

Llamamos Hig Order Functions a las funciones que reciben una funcion como argumento o retornan una funcion como resultado.

En JS las funciones son objetos de primera clase y pueden ser usadas como argumentos, retorno o almacenadas en variables.

Para un programa escrito en paradigma funcional el poder recibir y enviar funciones es clave, y es parte de seguir la funcion declarativa del programa.

Vemos un ejemplo de high orrder functions:
let numeros = [1,2,3,4];
let cuadrados = numeros.map(numero => numero * numero);
console.log(cuadrados);

La funcion map() esta recibiendo como argumento otra funcion. Cualquier funcion que reciba por callback otra funcion es una high order functions.

Otro ejemplo: HOF
export function fetchTodoById(todoID){
    return async function fetchTodosThunk(dispatch, getState){
        const response = await client.get(`/fakeApi/tod/${todoId}`)
        dispatch(todosLoaded(resppnse.todos))
    }
}

Otros ejemplos de HOF son las operaciones que podemos hacer con:
- forEach(),
- map(),
- filter(),
- reduce().

*/

// Veamos ejemplos:HFO
// forEach():
let numeros = [1, 2, 3, 22, 3, 56, 88, 11];
numeros.forEach((numero) => {
    console.log(numero);
    return numero;

});


// map(): HFO: devuelve un nuevo array con la operacion que hagamos.
let cuadrados = numeros.map((n) => {
    return n * n;

});

console.log(cuadrados);

//filter(): HFO:
let pares = numeros.filter((numero) => {
    if (numero % 2 === 0) {
        return numero;
    }

})

console.log(pares);

// reduce(): HFO.
let redu = numeros.reduce((acum, numero) => {
    return acum + numero;
}, 0);

console.log(redu);

/*

¿Porque usamos HFO en lugar de ciclos?
Las ventajas en el uso de estas funciones sobre iteraciones o ciclos pueden ser discutidas, una de ellas es composicion.

Pensemos que se nos solicita dado un arrreglo necesitamos obtener la suma de los numeros pares:

*/

let arreglo = ["2", "4", "7", "6", "12"];
// con map los pasamos a enteros:
let sumaEnteros = arreglo.map((entero) => {
    return parseInt(entero)
}).filter((numero) => {
    if (numero % 2 === 0) {
        return numero;
    }
}).reduce((acc, num) => {
    return acc + num;
}, 0)

console.log(sumaEnteros);

/*

Como vemos hemos usado los metodos mucho mas facil que usar los ciclos, no es mal codigo usar ciclos sobre funciones, son dos maneras de pensar y de abordar un problema.

Con los metodos es programacion declarativa y con los ciclos es programacion imperativa.

*/