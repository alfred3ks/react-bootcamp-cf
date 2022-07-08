/*

Event Bubbling:

Este proceso inicia cuando un elemento ha ejecutado el evento y este se propaga en cadena dentro de los elementos que se contiene dentro de la jerarquia.

El burbujeo de evento o propagacion de eventos.

Si tenemos un elemento que le asiganmos por ejemplo el evento click, este se propagara hacia arriba hasta su padre. Se propagara por todos los elementos que tienen ese evento osea que se le puede aplicar ese evento.

Puede llegar el caso que deseemos detener la propagacion.

<div>
  <p>
    <button onClick= {hola()}>Click</button>
  </p>
</div>

div-padre

Al hacer click sobre le boton este evento se propagara desde button, por p y hasta el div.

// JS:
const handleClick = function(){
  alert('Button clicked');
}

// HTML:

<div onClick="alert('Div clicked')">
  <p onClick="alert('P clicked')">
    <button onClick="handleClick()">Click me</button>
  </p>
</div>

La propagacion va desde el hijo hasta el padre. Vemos que aunque solo hacemos click al boton y como los otros elementos tienen ese mismo evento este se propaga hasta el ultimo que tenga implementado ese evento. En este caso el div, si el html tuviera ese mismo evento este se propagaria hasta ahi.
Puede darse el caso que tenmos tres botones en un div y cada boton tiene una evento diferente, al ejecutar cada evento de cada boton este siempre se propagara al div. Esto puede traer comportamientos no deseados.

const handleClick1 = function(){
  alert('Button clicked #1');
}

const handleClick2 = function(){
  alert('Button clicked #2');
}

const handleClick3 = function(){
  alert('Button clicked #3');
}


<div onClick="alert('Div clicked')">
    <button onClick="handleClick1()">Click me1</button>
    <button onClick="handleClick2()">Click me2</button>
    <button onClick="handleClick3()">Click me3</button>
</div>

Los eventos se pueden detener con el metodo stopPropagation().

Para mas informacion en la web de MDN:

https://developer.mozilla.org/es/docs/Web/API/Event/stopPropagation

*/