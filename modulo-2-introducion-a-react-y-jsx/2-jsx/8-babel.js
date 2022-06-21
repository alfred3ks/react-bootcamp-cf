/*

En la web: de babel

https://babeljs.io
https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=DwEwlgbgBAxgNgQwM5IHIILYFMC8AiJACwHsAHUsAOwHMBaOMJAFzwD4AoKKYQgRlYDKJclWpQAMoyZQAZsQBOUAN6l5ZJADpKmLAF9gAej4cuwAK5wTXbg1YBJSswTV5mQ7c7XgtgOqEETEgAguTuYFamtgDyMBZmSGFWhhYchuAQrADc7EA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=7.18.5&externalPlugins=&assumptions=%7B%7D

Podemos ver que Babel es el que se encarga de hacer la transformacion o traduccion del JSX a los comando React.createElement()

Lo podemos ver con nuestro ejemplo llevamos el componente de nuestro codigo:

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

La traduccion quedaria asi:

export default function App() {
    return React.createElement(
    "div",
    {className: "App"},
    React.createElement("h1", null, "Hola Mundo..."),
    React.createElement("h2", null, "Estamos usando ReactJS."),
    React.createElement("img", {
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        alt: "React logo",
        height: "100px"
    }));
}

Una aclaratoria todo esto de la estructura de un proyecto de react lo podemos ver en la carpeta anexa:

eje-react.

Lo he creado como un nuevo componente en el proyecto eje-react. El componente AppDos.jsx
Vemos como se renderiza en en dom exactamente igual.


Ahora podemos ver un enlace donde ver la documentacion de reactJS, esta documentacion ya es algo antigua pero y tenemos una nueva documentacion que esta en fase beta.

https://es.reactjs.org/docs/getting-started.html

https://beta.reactjs.org/

Es un proyecto creado con vite.

*/