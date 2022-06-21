/*

Ademas de hacer render a un componente App vamos ver como hacer un render a una lista. Podemos simular una lista de supermercado de la compra.

Vamos a trabajar en nuestra app de React.

eje-react.

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

/*

Cuando iteramos una lista lo podemos hacer de muchas formas, pero una de ellas es usar el metodo map(), lo que haremos es recorrer la lista.

Tenemos nuestro componente:

export function Lista() {
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

    return (
        <div className="App">
            <h3>Lista de supermercado</h3>
            <ul>
                {elementos.map((elem, index) => {
                    return <li key={index}>{elem.texto}</li>
                })}
            </ul>
        </div>
    );
}

Para el caso de lo que vamos a iterr con el map:
    <ul>
        {elementos.map((elem, index) => {
            return <li key={index}>{elem.texto}</li>
        })}
    </ul>

    <ul>
        {elementos.map((elem) => {
            return <li key={id}>{elem.texto}</li>
        })}
    </ul>

Para el caso de map() para react le debemos pasar a la funcion los elementos a iterar yy debemos pasarle como segundo parametro el index, eso porque? lo vemos por la consola denl navegador es obligatior que cada item lleve asiganado un valor key unico para cada uno, es este caso como es un arreglo asiganara el numero de la posicion del arreglo, pero podriamos pasarle tambien key=id, al ser un valor unico de ese elemento lo aceptara, asi no pasamos a la funcion el index, pero lo mas comodo es asignar el index.

Ahora si quisieramos poner dos elementos div seguido no podriamos porque react solo devuelve un solo elemento, pero dentro puede llevar todos los hijos, sino tendriamos que poner los dos div que vemos en el ejemplo dentro de un div o lo que es lo mismo dentro de un fragmento de React.

    <>

    </>

    <React.Fragment>
        <p className="App">Hola soy un contendido envuelto en un React.Fragment.</p>
    </React.Fragment>

    <Fragment>
        <p className="App">Hola soy un contendido envuelto en un Fragment.</p>
    </Fragment>

Si usamos Fragment debemos importarlo en la cabecera desde react sino bastaria con la primera opcion, este fragmento de react no le podemos colocar clases ya que da fallo, es que en realizar cuando se renderiza la app ese fragmento no existe.

import React, { Fragment } from "react";

Eso esta bien cuando no queremos agregar nodos de mas a la app, pues agregamos un fragmento y asi el componente puede devolver un solo elemento.

Podemos usar arrow function para crear componentes pero no olvidar poner el nombre a la funcion:

let Componente = ()=>{
    return(
        <di></di>
        )
}

*/