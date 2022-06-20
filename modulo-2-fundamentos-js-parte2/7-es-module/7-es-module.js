/*

ES Modules: Los modulos en JS.

Un modulo nos permite dividir la funcionalidad del codigo en piezas mas pequeñas que sean faciles de mantener.

Los modulos introducen su propio Scope, llamado Module Scope. Lo que yo defino en un modulo esta solo en el alcance de ese modulo. Podemos ver un articulo de Link Clark donde se explica mejor esto del scope module y todo sobre los modulos.

https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/

Los modulos nos permiten abstraer logica y comunicarla con otros modulos (sin usar el scope global).

Un modulo de JavaScript se distingue de un archivo de JavaScript tradicional porque bien exporta codigo o lo importa. Ambos archivos el que importa y el que exporta son considerados modulos.

Vemos un ejemplo en la carpeta modulos.

Una cosa particular para exportar/importar modulos sin usar webpack osea solo teniendo el package.json.

instalamos el package.json:
npm init -y

{
    "name": "modulos",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "type":"module",
    "scripts": {
    "dev": "nodemon ./modulos/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
}

Debemos agregar la linea de:
"type":"module",

Si no lo hacemos NodeJS nos dara error, los modulos son el standart de JS no se NodeJS, el cual es commonJS y usan la sintaxis de require().

He agregado una imagen donde se ve la diferencia entre ambos. La imagen se llama:

commonjs-vs-esmodules.png



*/