/*

El alcance(scope) y el contexto:

El alcance o scope:

El scope es una colección de variables, funciones y objetos, que están a tu alcance en algún punto de tu código.

Son las reglas que definen en que parte del codigo una variable va estar disponible y en cual no.

En JS existen dos tipos comunes de scope o alcance: Existen dos mas que veremos mas adelante.

- Scope global,
- Scope local.

El scope global:
Es todo aquello que no ha sido declarado dentro de un bloque o una funcion.
- Se usan en el cuerpo principal,
- Se usan en funciones.

El scope local:
Hace referencia a todos los elementos disponibles solo para una funcion. Cada vez que llamas una funcion se crea un scope local para esa funcion. Osea las variables que son declaradas dentro de una funcion estan declaradas en el alcance local de dicha funcion.
- Solo en la funcion declarada.

*/

let nombre = "Laika Josefina de la Concepcion del Toro."; // scope global.

function saludar() {
    let msj = "Hola soy "; // Variable en scope local
    console.log(msj + nombre);
}

saludar();
console.log(nombre);
// console.log(msj); // ReferenceError: msj is not defined

/*

Aqui podemos ver que la variable nombre que esta disponible en el alcance global se pued eusar dentro de la funcion pero al reves no la varaible msj en el alcance local no puede usarse fuera de este.

Tenemos que tener en cuenta que no debemos abusar del alcance global. Abusar del alcance global se traduce en codigo mas complejo, donde si algun elemento falla no puedes saber la causa de este fallo o donde fue que fallo o como reemplazarlo. Ya que muchos elementos estan interactuando con las mismas cosas.

Una funcion debe operar solo con la informacion del alcance local, y todos aquellos que necesite del exterior debe comunicarse por medio de argumentos, y todo lo que necesita para comunicarse hacia el exterior debe ser via retorno.

En resumen:
- Tenemos 2 tipos de de alcance: Local y Global.
- El global recuerda que esta disponible en todas las partes del codigo, pero no es recomendable abusar de el.
- El local es el que se crea para cada funcion cuando esta se ejecuta.
- De ser posible, se recomienda que prefieras colocar tus elementos en el scope local de una funcion y no en el global.

En ediciones nuevas de JavaScript se introduce el alcance de bloque.

Lo vemos a continuacion:

*/

function presentacion1(nombre, admin) {
    if (admin) {
        var rol = "Administrador";
    } else {
        rol = "Usuario";
    }
    console.log("Soy " + nombre + " y el rol es " + rol);
}

presentacion1("Pepe", true);
presentacion1("Pepito", false);

/*

Ahora que pasaria si en vez de usar var dentro del condicional usaramos let:

*/

function presentacion2(nombre, admin) {
    // let y const tienen alcance de bloque: {}
    let rol; // Declaramos aqui la variable para el alcance del bloque:
    if (admin) {
        rol = "Administrador";
    } else {
        rol = "Usuario";
    }
    console.log("Soy " + nombre + " y el rol es " + rol);
}

presentacion2("Luis", true);
presentacion2("Luisito", false);


/*

Nos daria el fallo:

ReferenceError: rol is not defined

Esto es asi porque let tiene alcance de bloque, osea solo es posible acceder a ella a su bloque y su bloque es el de las llaves:

if (admin) {
        let rol = "Administrador";
    }

Fuera de las llaves esa variable no existe.

Pero porque en la primera funcion si es posible acceder a la variable? esto es posible porque los elementos declarados con var tienen un alcance de funcion no de bloque, esto quiere decir que una variable declarada con var su alcance es el de toda la funcion. A pesar de ser declarada en un bloque esta siempre va ir al alcance local de la funcion.

Para let y const no es igual, su alcance es de bloque. Osea lo que esta dentro de los corchetes {}.

Ahora vamos a ver el hoisting de varaibles:

Hoisting es el concepto por el que la declaracion de las funciones y la declaracion de las variables se mueven al inicio del alcance.

*/

// Hoisting: de varaibles.

console.log(x);
var x = 20;

// console.log(y);
// let y = 20;

/*

Vamos a ver lo que pasa: Lo que hace internamente el lenguaje.

var x;
console.log(x);
x = 20;

Esto solo pasa con var con let no pasa. Nos daria error. Esto e debido a que el valor de la varaible con let nos daria no inicializada.

console.log(y);
let y = 20;

ReferenceError: Cannot access 'y' before initialization

En resumen:

- var siempre se aloja  en el scope local dentro de una funcion, o en el global fuera de la funcion.

- let/const pueden alojarse en el scope local, de bloque y global, segun sea su declaracion, en una funcion, en un bloque o fuera de ambos.

- el valor para una variable con var que no ha sido asiganada es undefined.
- el valor para una variable con let que no ha sido asignada es unitialized.
- Las variables tambien son alojadas al tope del scope, sin embargo, si intentas usar una variable no inicializada recibiras un error.


EL CONTEXTO:

El contexto es el valor que tiene this y usualmente hce referencia al objeto sobre el que se esta ejecutando el codigo.

this == contexto

console.log(this);

Vamos a ver el valor que adopta this en distintos escenarios.

*/

// Cuando una funcion no le pertenece a ningun objeto el valor de this es el objeto global: Para el caso del navegador es window y en nodeJS es otro.
function contexto() {
    console.log(this);
}

contexto();

// Cuando la funcion pertence a un objeto el valor de this es el contexto es el objeto que ejecuta la funcion y se determina al momento de usar la funcion.
let objeto = {
    func: contexto
}

objeto.func();

/*

Aqui la clave para saber el valor de this es preguntarse quien ejecuta la funcion. Si es el objeto entonces this su contexto es el objeto.

this se determina hasta que se ejecuta la funcion y no en la declaracion de la funcion, lo vemos en el ejemplo que la funcion esta declarada fuera del contexto del objeto pero esta es llamada dentro del mismo, por eso this depende donde se ejecute no donde se declara.

Vamos a hacer la inversa:

*/

let obj = {
    func: function () {
        console.log(this);
    }
}

obj.func();
let f = obj.func;
f();

/*

Vamos a ver que pasa con el contexto y las funciones de flecha.
Las funciones de flecha no asignan un valor de this, lo heredan del contexto en el que se ejcutan.

Como hace referencia este articulo:
https://javascript.info/arrow-functions
Si usas this dentro de las funciones flechas este se toma del exterior.

Y este comportamiento es muy distinto a lo visto hasta ahora. No siempre debemos usar las funciones flechas, a veces es necesario usar function.
Veamos los ejemplos:

*/
console.log("Contexto con funcion normal");
let objetoJ = {
    numeros: [1, 2, 3],
    imprimir: function () {
        console.log(this); // Aqui this es el objeto
        this.numeros.forEach(function () {
            console.log(this); // Aqui this es el objeto global, la ejecucion no se hace a traves del objeto.
        })
    }
}

objetoJ.imprimir(); // El contexto es el objeto objectJ

// Ahora con una arrow function:
console.log("Arrow functions");
let objetoJX = {
    numeros: [1, 2, 3],
    imprimir: function () {
        console.log(this); // Aqui this es el objeto
        this.numeros.forEach((ele) => {
            console.log(this); // Aqui this sigue siendo el objeto, su exterior es la funcion superior, osea coje ese contexto.
            console.log(ele);
        })
    }
}

objetoJX.imprimir();

/*
Con arrow function estas heredan el contexto anterior y es lo que normalmente esperamos que asi sea no con el ejemplo de la funcion que nos hereda el global.

Si no queremos cambiar el contexto usemos arrow function, dependera de lo que estemos deseando hacer.

En resumen:

-Las funciones flechas no cambian el valor de this, lo heredan o lo toman de afuera.

- Esto abre la puerta a usar funciones de flecha cuando no uqeremos que el contexto en el cuerpo de la funcion cambie.

*/

