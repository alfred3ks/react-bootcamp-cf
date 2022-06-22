/*

Las Props:
- Las comunicacion entre componentes,
- Podemos mandar cualquier valor, (objetos, funciones, etc),
- Pueden cambiar a alo largo de tiempo:
- Los componentes de React tienen prohibido mutar las props.

Tenemos el siguiente ejemplo:

<img
    className= "avatar"
    src="https://i.imgur.com/1bX5QH6.jpg"
    alt="Lin Lanying"
    width={100}
    height={100}
/>

Vemos que esta etiqueta de la imagen tiene unos atributos:
className,
src,
alt,
width,
height,

Todo eso en React se llaman props, las props son atributos que se pasan al elemento, se usan para comunicar a los componentes, podemos mandar objetos, funciones, arrays, numeros, cualquier valor de JS.

Cunado un componente recibe una props esta no se puede mutar, osea cambiar. Veamos un ejemplo creamos un proyecto llamado props-ejemplo.

He creado un componente llamado Clock.jsx

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