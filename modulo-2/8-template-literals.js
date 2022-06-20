/*

Veamos en la practica los siguiente: Estas sintaxis son comunes ver en React asi no nos suene raro:

- Template literals,
- Destructuring,
- Spread syntax,
- Operator rest,
- Optional chaining.

*/

/*

Template literals: tambien conocidas como template strings, son un tipo de elemento del lenguaje que nos permite principalmente tener:

- String de varias lineas,
- Interpolacion de cadenas,
- Tagged templates. -> OJO con esto que es muy interesante...

Lo usaremos con las comillas invertidas back tick  -> ``

*/

// String de varias lineas:
let template = `
    Hola mundo,
    desde VSCode
`;
console.log(template);

// Interpolacion de cadenas: Muy usado en ReactJS.
let nombre = "Alfred";
let nacimiento = "1975";
let fecha = new Date();
let annio = fecha.getUTCFullYear().toString();
console.log(annio);
let msj = `El usuario ${nombre} ha nacido en el año ${nacimiento} y tiene ${annio - nacimiento} años.`;
console.log(msj);

/*

Las template literals son mucho mas poderosas que simplemente interpolar o dar saltos de lineas.

Cada template literals es enviada a un funcion de procesamiento, cuando nosotros no especificamos cual va ser la funcion de procesamiento va a utilizar por defecto una que lo unico que va hacer interpolar.

Pero nosotros podemos implementar nuevas funciones de procesamiento para las template literals.
Vemos un ejemplo a continuacion:

*/

function observador(cadenas, ...expresiones) {
    console.log(cadenas);
    console.log(expresiones);
    return cadenas;
}

// Este template literals va a ser procesado por la funcion, Tagged templates:
let temp = observador`El usuario ${nombre} ha nacido en el año ${nacimiento} y tiene ${annio - nacimiento} años.`;

/*

[ 'El usuario ', ' ha nacido en el año ', ' y tiene ', ' años.' ]
[ 'Alfred', '1975', 47 ]

Vemos como la ha procesado la funcion:
El primer console.log(); nos muestra las cadenas.
El segundo console.log(); nos muestras las expresiones. Osea las variables.

Esto es una funcionalidad muy interesante, lo podemos ver en una libreria que nos permite procesar fechas:

https://github.com/kay-is/awesome-tagged-templates

https://github.com/3846masa/lit-date

Dada una template literals que contenga fechas podemos usar el tagged template para mostrar la fecha de ciertas maneras.

*/
