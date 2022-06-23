/*

Los componentes como hemos visto pueden recibir propiedades, lo que llamamos props. Pero ahora tambien puede recibir estado, osea los State.

State de un componente:

Tenemos el proyecto llamado state-ejemplo.

Lo he creado de nuevo con vite.

npm init vite@latest

Recuerda que hacemos una limpia de los archivos y lo dejamos listo para trabajar.
El ejemplo viene del pdf ahi esta este enlace:

https://codesandbox.io/s/jlmw3p?file=/styles.css:0-585&from-sandpack=true

Para agregar estados a nuestro componentes debemos agregar un hooks, este es useState.

Ver anotaciones en App.jsx

*/

function useState(score) {
    setScore(score);
};

let contador;
let setScore = (score) => {
    contador = score += 1;
}

useState(0);
console.log(contador);
useState(1);
console.log(contador);
useState(2);
console.log(contador);
useState(3);
console.log(contador);
