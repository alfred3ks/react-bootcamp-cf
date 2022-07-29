/*

React Context: API clave de react. Importante para trabajar con react. Suele preguntarse en entrevistas de Junior.

Ahora vamos a ver como fluye la informacion en react, este esta diseñado para que la informacion fluye en una sola direccion, desde los componentes superiores hacia abajo. Desde el root hacia abajo.

Ver pdf de explicacion.

Esto es un punto clave en el diseño de React. Al seguir esta regla el flujo de informacion es explicito y mas facil de comprender. Siempre que algo es explicito la informacion es mas facil de entender.

Ejemplo:

<Layout
  <Header color={color} setColor={setColor}>
    <BotonCambiar color={color} setColor={setColor}>
    Cambiar color
    </BotonCambiar>
  </Header>
</Layout >

color y setColor van hacia abajo, fluyen desde layout hasta botonCambiar.

Aunque React esta diseñado para enviar informacion desde componentes superiores hacia abajo existen escenarios para los cuales esto puede ser problematico.

Ese problema que podemos encontrar la comunidad le llama, un concepto no formal -> "Prop drilling", es el problema por el que los componentes solo para que esta informacion llegue a los hijos. En ese camino de pasar props a traves de los componentes muchos de estos no necesitan esas props. Solo sirven como medio para pasar esa informacion.

< Layout
  < Header color = { color } setColor = { setColor } >
    <BotonCambiar color={color} setColor={setColor}>
      Cambiar color
    </BotonCambiar>
  </ >
</Layout >

En el ejemplo vemos que Header recibe esas props que no son relevantes para el pero si necesarios para que llegue al boton.Este es una manera muy simple de verlo el concepto de Prop drilling.

OJO CON ESTO:
El problema de props drilling no esta directamente relacionado con Context ya que no todos los problemas de prop drilling deben ser resueltos con Context.

¿Entonces cuando debemos usar Context ?

---
  Context es un "manejador de estado" por lo que su uso debe asociarse con almacenar la informacion que debe ser compartida por muchos componentes.
---

Algunos ejemplos son:

- Autenticacion de usuarios,
  - Theming, Temas en las web.
  - Manejo de distintos idiomas,
  - Preferencias de moneda, zona horaria,
  - Entre otros.

Si estas trabajando con informacion que afecta a distintos componentes usar Context puede ayudarte a compartir la informacion entre todos los componentes.

Tambien puedes usarlo en secciones del arbol: Osea no siempre lo podemos usar como manejado global de estados de toda la aplicacion:

- Un formulario para el que los controles deben compartir informacion,
- Un componente separado en distintos pasos para mostrar.

Una aplicacion puede tener y generalmente requiere de mas de un contexto. Context.

--- Cuando NO usar Context: ---

Las ventajas de Context viene con un precio a pagar, principalmente:

- Complejidad,
- Acoplamiento.

Con Context la informacion ya no fluye en una sola via, puede ir en ambos sentidos. Esto significa que el codigo es mas complejo de entender. Ver pdf de explicacion.

El uso de Context genera dependencias entre nuestros componentes. La arquitectura de React basada en componentes esta inspirada en el hecho de que podamos reciclar un mismo componente en distintas partes de la aplicacion o incluso en proyectos fuera de mi aplicacion.

Al usar Context nuestro componente no puede ser reciclado en partes del arbol que no tengan el contexto.

En muchos casos prop drilling puede ser mejor usar Context.En otros podemos usar composicion.

*/