/*

Importamos usando la instrucion import, los archivos si no usamos webpack debemos colocar la extension en la importacion  ->'./modulo.js';

Dentro de { } agregamos las variables o funciones que importamos.

Para el import existen varias formas de hacer:
La tradicional:
import { name, saludar } from './modulo.js';

Importar todo -> *
import * as modulo from './modulo.js';
importa todo en el objeto modulo, este nombre es arbitrario se lo ponemos nosotros.

Importar modulo por default:
import module from './modulo.js';
Igual aqui module es un nombre arbitrario puesto por nostros.

*/
import { name, saludar } from './modulo.js';
import * as modulo from './modulo.js';
import module from './modulo.js';

// Llamadas primer import:
console.log(name);
saludar();

// Llamadas segundos import:
console.log(modulo);
console.log(modulo.name);
console.log(modulo.saludar());

// Llamadas al tercer import:
console.log(module.info);
