import React from "react";
import '../src/css/App.css';

export function Card() {

    let usuario = {
        id: 1,
        nombre: "Alfredo",
        apellido: "Sanchez",
        twitter: "@alfred3ks"
    }

    return (

        <div className="App">
            <h2>Hola mi nombre es {usuario.nombre}</h2>
            <img src="../src/img/logo.png"
                alt="logo"
                height="100px"
            />
            <h3>Twitter: {usuario.twitter}</h3>
        </div>
    );
}
