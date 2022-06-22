import React from "react";
import "../src/css/App.css";

export function App() {

    return (
        <div className="App">
            <h1>Twitter</h1>
            <div style={{
                border: "1px solid black",
                padding: "10px"
            }}>
                <span>Escribir Tweet</span>
                <input type="text" />
            </div>

            {/* Renderizamos la lista */}
            <Feed />
            <Feed />
            <Feed />

        </div>
    );
}

function Feed() {

    const listaDeTwets = [
        {
            id: 1,
            content: "Hola mundo"
        },
        {
            id: 2,
            content: "Hello word"
        },
    ]

    return (
        <ul>
            {listaDeTwets.map((tweet) => {
                return <li key={tweet.id}>{tweet.content}</li>
            })}
        </ul>
    );
}