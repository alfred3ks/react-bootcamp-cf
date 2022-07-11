/*

Vamos a ver el tema de las listas en ReactJs, este tema es del modulo 3.

List:
Nos ayudan a renderizar un set de elementos con diferentes tipos de informacion:

Tenemos algunos metodos disponibles para las listas:

map()
filter()
forEach()
every()
some()

Los primeros dos son los mas utilizados. map(), filter().

Para entender las listas y como funciona en React tenemos que entender las llaves o keys:

Las llaves nos permiten identificar un elemento en el dom de manera unica.

https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318

Se puede dar el caso que tengamos un arrays de elementos, en este caso el key se suele utilizar en index del elemento como keys, lo cual no es muy recomendable, si el arrays se modifica react tiene que volver a asignar los keys y por ende un nuevo rendering de los todos los elementos y no es lo ideal.


*/