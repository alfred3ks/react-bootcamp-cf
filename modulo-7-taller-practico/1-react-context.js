/*

React Context: API clave de react. Importante para trabajar con react.

Ahora vamos a ver como fluye la informacion en react, este esta diseñado para que la informacion fluye en una sola direccion, desde los componentes superiores hacia abajo. Desde el root hacia abajo.

Esto es un punto clave en el diseño de react. Al seguir esta regla el flujo de informacion es explicito y mas facil de comprender.

Ejemplo:

<Layout
  <Header color={color} setColor={setColor}>
    <BotonCambiar color={color} setColor={setColor}>
    Cambiar color
    </BotonCambiar>
  </Header>
</Layout>

color y setColor van hacia abajo, fluyen desde layout hasta botonCambiar.

Aunque react esta diseñado para enviar informacion desde componentes superiores hacia abajo existen escenarios para los cuales esto puede ser problematico.

Ese problema que podemos encontrar la comunidad le llama "Prop drilling", es el problema por el que los componentes solo para que esta informacion llegue a los hijos.

<Layout
  <Header color={color} setColor={setColor}>
    <BotonCambiar color={color} setColor={setColor}>
    Cambiar color
    </BotonCambiar>
  </Header>
</Layout>

En el ejemplo vemos que Header recibe esas props que no son relevantes para el pero si necesarios para que llegue al boton. Este es una manera muy simple de verlo.

El problema de props drilling no esta directamente relacionado con Context ya que no todos los problemas de prop drilling deben ser resueltos con Context.

¿Entonces cuando debemos usar Context?

Context es un manejador de estado por lo que su uso debe asociarse con almacenar la informacion que debe ser compartida por muchos componentes.

Algunos ejemplos son:

- Autenticacion de usuarios,
- Theming,
- Manejo de distintos idiomas,
- Preferencias de moneda, zona hooraria,
- Entre otros.

Si estas trabajando con informacion que afecta a distintos componentes usar Context puede ayudarte a compartir la informacion entre todos los componentes.

Tambien puedes usarlo en secciones del arbol:

- Un formulario para el que los controles deben compartir informacion,
- Un componente separado en distintos pasos para mostrar.

Una aplicacion puede tener y generalmente requiere de mas de un contexto.

--- Cuando NO usar Context: ---

Las ventajas de Context viene con un precio a pagar, principalmente:
- Complejidad,
- Acoplamiento.

Con Context la informacion ya no fluye en una sola via, puede ir en ambos sentidos. Esto significa que el codigo es mas complejo de entender.

El uso de Context genera dependencias entre nuestros componentes. La arquitectura de react basada en componentes esta inspirada en el hecho de que podamos reciclar un mismo componente en distintas partes de la aplicacion o incluso en proyectos fuera de mi aplicacion.

Al usar Context nuestro componente no puede ser reciclado en partes del arbol que no tengan el contexto.

En muchos casos prop drilling puede ser mejor usar Context. En otros podemos usar composicion.

*/