/*

Vamos a crear un formulario donde veremos como podemos evitar la propagacion de los eventos.

Cuando un boton se encuentra dentro de un formulario este tiene el comportamiento de submit, no es necesario colocarlo.

Al formulario podemos colocarle un evento que se llama onSubmit={}, este evento recible por parametro o bien la llamada a una funcion pero sin () o una funcion dentro de esta ejecutaremos las funciones que queramos.

onSubmit = {onSubmit} ó

onSubmit = {(e)=>{
  onSubmit(e);
  msj();
}}

Las dos formas son equivalentes, pero la segunda vemos que podemos pasar mas funciones para realizar mas acciones al momento que se de click al boton dentro del formulario.

Ahora como vemos tenemos un segundo boton, que esta dentro del formulario por lo tanto este boton tendra el mismo comportamiento tratara de enviar el formulario.

Pensariamos que para evitar que al hacer click los eventos se propaguen y se ejecute tambien el metodo del onSubmit pues lo solucionariamos con el metodo stopPropagation(), pues no es asi en este caso al tratarse de un boton que esta dentro de un formulario su comportamiento es de enviar el formulario osea un evento onSubmit(), entonces para evitarlo con poner solo el metodo preventDefault() ya evitariamos la propagacion ya que esta no se propaga por el boton sino por el formulario.


*/