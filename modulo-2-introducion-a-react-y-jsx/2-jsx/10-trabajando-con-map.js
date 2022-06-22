/*

Vamos a ver la lista de elementos usando map().

*/

const elementos = [
    {
        id: 1,
        texto: "Lechuga"
    },
    {
        id: 2,
        texto: "Tomate"
    },
    {
        id: 3,
        texto: "Queso"
    },
    {
        id: 4,
        texto: "Refrescos"
    }
]

let lista = elementos.map((e, index) => {

    return "INDICE:" + index + "-ID:" + e.id + "-CONTENIDO:" + e.texto;
})

console.log(lista); // Nos retorna un nuevo array.
/*

Como vemos map nos permite recorrer esa lista de elementos, que es un arrays de elementos. En el ejemplo en el proyecto de react vemos que hace lo mismo recorre la lista pero de una forma particular.

El metodo map recibe dos parametros uno es el elemento y otro puede ser el index del arrays.

    <ul>
        {elementos.map((elem, index) => {
            return <li key={index}>{elem.texto}</li>
        })}
    </ul>

Vamos a desglozar varias cosas:

- Como lo que queremos es mostrar los elementos que tiene la lista y sabemos que el return nos devuelve los elementos ahi ponemos la etiqueta li.

- Vemos que la etiqueta li recibe como atributo una key, eso es necesario en react.
- Luego dentro de la eqtiqueta mostramos lo que deseamos en nuestro caso el texto de los elementos de la lista.

Vamos a ver sobre: key={index}
En React cuando renderizamos elementos nos pide que le pongamos una key para identificar a cada elemento.

La key de cada elelemnto es unica, se puede usar el id si lo tiene sino hay que usar el index dentro del array.

Para mas informacion vemos la documentacion:

https://es.reactjs.org/docs/lists-and-keys.html#keys

Keys
Las keys ayudan a React a identificar que ítems han cambiado, son agregados, o son eliminados. Las keys deben ser dadas a los elementos dentro del array para darle a los elementos una identidad estable:

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
    <li key={number.toString()}>
    {number}
    </li>
);

La mejor forma de elegir una key es usando un string que identifique únicamente a un elemento de la lista entre sus hermanos. Habitualmente vas a usar IDs de tus datos como key:

const todoItems = todos.map((todo) =>
    <li key={todo.id}>
    {todo.text}
    </li>
);

Cuando no tengas IDs estables para renderizar, puedes usar el índice del ítem como una key como último recurso:

const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
    <li key={index}>
    {todo.text}
    </li>
)

No recomendamos usar índices para keys si el orden de los ítems puede cambiar. Esto puede impactar negativamente el rendimiento y puede causar problemas con el estado del componente. Revisa el artículo de Robin Pokorny para una explicación en profundidad de los impactos negativos de usar un índice como key. Si eliges no asignar una key explícita a la lista de ítems, React por defecto usará índices como keys.

Lo podemos ver tambin en la documentacion beta:

https://beta.reactjs.org/learn/rendering-lists#rules-of-keys

Leer es bastante interesante.


*/