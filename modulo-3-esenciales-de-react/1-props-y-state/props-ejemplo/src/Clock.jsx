import React from "react";

/*

Vemos como este objeto recibe por parametros dos objetos con object destructuring,

color,
time

Ejemplo de destructuring:

let persona = {
    nombre: "Luis",
    edad: 15
}

const { nombre, edad } = persona;
nombre; // Luis
edad; // 15
Probarlo sobre la consola del navegador.

Lo que hacemos en el paso de argumentos, generamos el destructuring, es lo mismo como si pusieramos:

export function Clock({ props }) {
    const { color, time } = props;
    console.log(props);
    const color = props.color;
    const time = props.time;

    return (
        <h1 style={{ color: color }}>
            {time}
        </h1>
    )
}

export function Clock({ color, time }) {

    return (
        <h1 style={{ color: color }}>
            {time}
        </h1>
    )
}

Cada vez que las props del componente cambien este se renderiza. Esto se llama rendering del componente.

Esa props provienen de un componente padre. El padre es en este caso App. OJO con esto las props viene siempre de un padre a un hijo.

*/

export function Clock(props) {
    const { color, time } = props;
    console.log(props);

    return (
        <h1 style={{ color: color }}>
            {time}
        </h1>
    )
}



