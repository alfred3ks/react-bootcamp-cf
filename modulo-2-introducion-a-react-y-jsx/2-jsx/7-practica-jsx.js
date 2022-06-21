/*

A continuacion te muestro como seria la sintaxis de JSX:
Las clases en React se pasan con className y no por class ya que estamos con un JS class es una palabra reservada del lenguaje para las clases.

export default function App() {
    return (
        <div className="App">
            <h1>Hola Mundo...</h1>
            <h2>Estamos usando ReactJS.</h2>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="React logo"
                height="100px"
            />
        </div>
    );
}

Podemos exporta el componente por default pero recuerda que solo se puede exportar un solo componente asi.

Para hacer ejercicios en linea de react podemos usar una plataforma:

https://codesandbox.io

A partir de una version de React, los archivos de los componentes dejaron de ser obligatorios con la extensiones de jsx ya se pueden usar extension .js. Da igual usar uno un otro.

La etiqueta:

    <StrictMode>
        <App />
    </StrictMode>

Es una etiqueta de React. Es buena practica usarlo es lo equivlente al strict mode de JS.

https://es.reactjs.org/docs/strict-mode.html

StrictMode es una herramienta para destacar problemas potenciales en la aplicación. Al igual que Fragment, StrictMode no renderiza nada en la interfaz de usuario. Este modo también activa advertencias y comprobaciones adicionales para sus descendientes.

Vamos a repasar la estructura de las carpetas:

public:
Donde tenemos nuestro index.html es donde se renderiza nuestra app, es el punto de entrada.
Esta es la etiqueta mas importante de toda esta pagina.

<div id="root"></div>

luego tenemos otra carpeta src:
Dentro de esta carpeta tenemos dos archivos, index.js y App.js

index.js: Tiene la siguiente estructura:

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);

Es donde vamos a importar en la cabecera la libreria React, los componentes que hemos creado y donde traemos el id del HTML para renderizar los componentes.

Este archivo es el punto de entrada de todos los archivos de JavaScript.

Ahora lo de arriba ya vimos como seria crear un componentes usando react y jsx pero imaginte como seria usarlo sin jsx vamos a ver la diferencia:

export function AppSinJSX() {
    return React.createElement(
        "div",
        { className: "App" },
        React.createElement("h1", null, "Hola estamos sin JSX"),
        React.createElement("h2", null, "Estamos usando React"),
        React.createElement("img", {
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        alt: "React logo",
        height: "100px"
        })
    );
}

Luego lo importamos en index.js y colocamos dentro de:

root.render(
    <StrictMode>
        <App />
        <AppSinJSX/>
    </StrictMode>
);

*/
