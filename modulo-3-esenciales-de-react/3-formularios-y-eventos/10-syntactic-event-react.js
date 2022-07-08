/*

Lo visto anterior es como se propagan los eventos nativos y como detenerlos usando JS, ahora veremos como lo hace react el cual es poco diferente.
En pocas palabras React no usa los eventos nativos del browser.

Entonces ¿como React interpreta estos eventos? crearon un grapper que trabaja por encima.

Syntactic event react: Los eventos sinteticos.

Es una implementacion cross-browser por arriba de los eventos nativos del navegador.
Normaliza los eventos para que las propiedades de los eventos sean consistentes en diferentes navegadores.

https://reactjs.org/docs/events.html

Con esto solventan que sea independientemente del navegador este va a funcionar igual en cualquier navegador.

Asi seria como lo veriamos con react:

const handleClick = ()=>{}

<button onClick= "handleClick()">Click me</button>

Vemos que el evento onclick es ahora usa la convencion de camelCase.


*/