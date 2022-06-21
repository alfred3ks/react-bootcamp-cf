import React, { Fragment } from "react";

// Tenemos un componente App:
export default function App() {
    return (
        <div className="App">
            <h1>Hola Mundo...</h1>
            <h2>Estamos usando ReactJS.</h2>
            <img
                // src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                src="../src/img/logo.png"
                alt="React logo"
                height="100px"
            />
        </div>

    );
}

// Vamos a crear un componentes para renderizar una lista:
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
        <>
            <div className="App">
                <h3>Lista de supermercado</h3>
                <ul>
                    {elementos.map((elem, index) => {
                        return <li key={index}>{elem.texto}</li>
                    })}
                </ul>
            </div>
            <div className="App">
                <h4>Aqui vemos mas contenido</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eius dolores doloribus nesciunt nihil laboriosam similique ullam, veniam libero corrupti in veritatis provident tenetur consequatur laudantium assumenda saepe praesentium debitis!</p>
            </div>
            <React.Fragment>
                <p className="App">Hola soy un contendido envuelto en un  React.Fragment.</p>
            </React.Fragment>
            <Fragment>
                <p className="App">Hola yo soy otro contenido envuelto en un Fragment.</p>
            </Fragment>
        </>
    );
}