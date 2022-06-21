import React from "react";

export default function AppDos() {
    return React.createElement(
        "div",
        { className: "App" },
        React.createElement("h1", null, "Hola Mundo..."),
        React.createElement("h2", null, "Estamos usando ReactJS."),
        React.createElement("img", {
            src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
            alt: "React logo",
            height: "100px"
        }));
}